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

const propertiesOrder = require("./properties-order");

module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-prettier/recommended"],
  plugins: ["stylelint-no-unsupported-browser-features", "stylelint-order"],
  rules: {
    "block-no-empty": true,
    "color-hex-length": "long",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["stylelint-commands"],
      },
    ],
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates"],
      },
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
    "declaration-no-important": true,
    "declaration-property-value-disallowed-list": {
      "/^transition/": ["/all/"],
      "/^background/": ["http:", "https:"],
      "/^border/": ["none"],
      "/.+/": ["initial"],
    },
    "font-family-name-quotes": "always-where-recommended",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    indentation: 2,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-nesting-depth": 3,
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "no-duplicate-selectors": true,
    "order/properties-order": propertiesOrder,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
      },
    ],
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-max-specificity": "0,4,0",
    "selector-max-type": 0,
    "selector-nested-pattern": "^&",
    "selector-no-qualifying-type": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,
  },
  overrides: [
    {
      files: ["**/*.scss"],
      extends: ["stylelint-config-recommended-scss"],
    },
  ],
};
