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
  extends: ["stylelint-config-recommended"],
  plugins: [
    "stylelint-a11y",
    "stylelint-no-unsupported-browser-features",
    "stylelint-order",
  ],
  rules: {
    "a11y/line-height-is-vertical-rhythmed": true,
    "a11y/media-prefers-reduced-motion": true,
    "a11y/selector-pseudo-class-focus": true,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
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
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates"],
      },
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
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
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    indentation: 2,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-nesting-depth": 3,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "order/properties-order": propertiesOrder,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
      },
    ],
    "property-case": "lower",
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-compound-selectors": 3,
    "selector-max-empty-lines": 0,
    "selector-max-id": 0,
    "selector-max-specificity": "0,4,0",
    "selector-max-type": 0,
    "selector-nested-pattern": "^&",
    "selector-no-qualifying-type": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "double",
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true,
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      extends: ["stylelint-config-recommended-scss"],
    },
  ],
};
