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

"use strict";

const config = require("../index");
const fs = require("fs");
const stylelint = require("stylelint");

const validStyles = fs.readFileSync("__tests__/valid.pcss", "utf-8");
const invalidStyles = fs.readFileSync("__tests__/invalid.pcss", "utf-8");

describe("does not error and flags no warnings with valid styles", () => {
  let result;

  beforeEach(() => {
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
    result = stylelint.lint({
      code: validStyles,
      config: customConfig,
    });
  });

  it("does not error", () => {
    return result.then((data) => expect(data.errored).toBeFalsy());
  });

  it("flags no warnings", () => {
    return result.then((data) =>
      expect(
        data.results[0].warnings.filter(
          (warning) => warning.severity === "warning"
        )
      ).toHaveLength(0)
    );
  });
});

describe("does error and flags warnings with invalid styles", () => {
  let result;

  beforeEach(() => {
    const customConfig = { ...config };
    customConfig.rules["plugin/no-unsupported-browser-features"] = [
      true,
      {
        browsers: ["defaults"],
        severity: "warning",
      },
    ];
    result = stylelint.lint({
      code: invalidStyles,
      config: customConfig,
    });
  });

  it("does error", () => {
    return result.then((data) => expect(data.errored).toBeTruthy());
  });

  it("flags 3 errors", () => {
    return result.then((data) =>
      expect(
        data.results[0].warnings.filter(
          (warning) => warning.severity === "error"
        )
      ).toHaveLength(3)
    );
  });

  it("flags 4 warnings", () => {
    return result.then((data) =>
      expect(
        data.results[0].warnings.filter(
          (warning) => warning.severity === "warning"
        )
      ).toHaveLength(4)
    );
  });
});
