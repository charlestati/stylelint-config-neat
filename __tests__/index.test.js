/*
 * Copyright 2020 Charles Tatibouët
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or plied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from "node:path";
import fs from "node:fs";
import stylelint from "stylelint";

import config from "../index";

const validStyles = fs.readFileSync("__tests__/valid.pcss", "utf-8");
const invalidStyles = fs.readFileSync("__tests__/invalid.pcss", "utf-8");

describe("does not error and flags no warnings with valid styles", () => {
  let data;

  beforeEach(async () => {
    const customConfig = {
      ...config,
    };
    customConfig.rules["plugin/no-unsupported-browser-features"] = [
      true,
      {
        browsers: ["last 1 firefox version"],
        severity: "warning",
      },
    ];
    data = await stylelint.lint({
      code: validStyles,
      config: customConfig,
    });
  });

  it("does not error", () => {
    return expect(data.errored).toBeFalsy();
  });

  it("flags no warnings", () => {
    expect(
      data.results[0].warnings.filter(
        (warning) => warning.severity === "warning"
      )
    ).toHaveLength(0);
  });
});

describe("does error and flags warnings with invalid styles", () => {
  let data;

  beforeEach(async () => {
    const customConfig = { ...config };
    customConfig.rules["plugin/no-unsupported-browser-features"] = [
      true,
      {
        browsers: ["defaults"],
        severity: "warning",
      },
    ];
    data = await stylelint.lint({
      code: invalidStyles,
      config: customConfig,
    });
  });

  it("does error", () => {
    return expect(data.errored).toBeTruthy();
  });

  it("flags 5 errors", () => {
    expect(
      data.results[0].warnings.filter((warning) => warning.severity === "error")
    ).toHaveLength(5);
  });

  it("flags 21 warnings", () => {
    expect(
      data.results[0].warnings.filter(
        (warning) => warning.severity === "warning"
      )
    ).toHaveLength(21);
  });
});

describe("handles Sass files", () => {
  let data;

  beforeEach(async () => {
    const customConfig = {
      ...config,
    };
    customConfig.rules["plugin/no-unsupported-browser-features"] = [
      true,
      {
        browsers: ["last 1 firefox version"],
        severity: "warning",
      },
    ];
    data = await stylelint.lint({
      files: [path.resolve("__tests__/valid.scss")],
      config: customConfig,
    });
  });

  it("does not error", () => {
    return expect(data.errored).toBeFalsy();
  });

  it("flags no warnings", () => {
    expect(
      data.results[0].warnings.filter(
        (warning) => warning.severity === "warning"
      )
    ).toHaveLength(0);
  });
});
