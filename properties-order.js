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

/*
 Properties are retrieved from the MDN CSS reference.
 https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

 Uncategorized properties are taken from the miscellaneous section.
 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Miscellaneous
 */

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Writing_Modes
const writingModes = [
  "writing-mode",
  "direction",
  "text-orientation",
  "text-combine-upright",
  "unicode-bidi",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model
const boxModel = {
  overflow: [
    "overflow",
    "overflow-block",
    "overflow-inline",
    "overflow-x",
    "overflow-y",
  ],
  sizing: [
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height",
  ],
  margin: [
    "margin",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "margin-trim",
  ],
  padding: [
    "padding",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
  ],
  overscroll: [
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
  ],
  other: ["visibility"],
};

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders
const backgroundsAndBorders = {
  background: [
    "background",
    "background-color",
    "background-image",
    "background-repeat",
    "background-attachment",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-clip",
    "background-origin",
    "background-size",
  ],
  border: [
    "border",
    "border-color",
    "border-style",
    "border-width",
    "border-top",
    "border-top-color",
    "border-top-style",
    "border-top-width",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-style",
    "border-bottom-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-image",
    "border-image-source",
    "border-image-slice",
    "border-image-width",
    "border-image-outset",
    "border-image-repeat",
    "box-shadow",
  ],
};

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles
const counterStyles = [
  "counter-reset",
  "counter-set",
  "counter-increment",
  "system",
  "symbols",
  "additive-symbols",
  "negative",
  "prefix",
  "suffix",
  "range",
  "pad",
  "speak-as",
  "fallback",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment
const boxAlignment = [
  "align-self",
  "align-items",
  "align-content",
  "justify-self",
  "justify-items",
  "justify-content",
  "place-self",
  "place-items",
  "place-content",
  "gap",
  "grid-gap",
  "column-gap",
  "grid-column-gap",
  "row-gap",
  "grid-row-gap",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
const animations = [
  "animation",
  "animation-name",
  "animation-duration",
  "animation-fill-mode",
  "animation-play-state",
  "animation-timing-function",
  "animation-delay",
  "animation-iteration-count",
  "animation-direction",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Filter_Effects
const filterEffects = ["filter", "backdrop-filter"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms
const transforms = [
  "rotate",
  "scale",
  "transform",
  "transform-origin",
  "transform-box",
  "transform-style",
  "translate",
  "perspective",
  "perspective-origin",
  "backface-visibility",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages
const pages = [
  "page-break-before",
  "page-break-after",
  "page-break-inside",
  "bleed",
  "marks",
  "size",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties
const logicalProperties = {
  sizing: [
    "block-size",
    "min-block-size",
    "max-block-size",
    "inline-size",
    "min-inline-size",
    "max-inline-size",
  ],
  border: [
    "border-block",
    "border-block-color",
    "border-block-style",
    "border-block-width",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-inline",
    "border-inline-color",
    "border-inline-style",
    "border-inline-width",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-start-start-radius",
    "border-start-end-radius",
    "border-end-start-radius",
    "border-end-end-radius",
  ],
  margin: [
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
  ],
  padding: [
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
  ],
};

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Table
const table = [
  "table-layout",
  "vertical-align",
  "caption-side",
  "empty-cells",
  "border-collapse",
  "border-spacing",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning
const positioning = [
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "z-index",
  "float",
  "clear",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fragmentation
const fragmentation = [
  "break-before",
  "break-after",
  "break-inside",
  "box-decoration-break",
  "orphans",
  "widows",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Masking
const masking = [
  "clip",
  "clip-path",
  "clip-rule",
  "mask",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Color
const color = ["color", "color-adjust", "opacity"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns
const columns = [
  "columns",
  "column-span",
  "column-width",
  "column-fill",
  "column-count",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment
const containment = ["contain"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Generated_Content
const generatedContent = ["content", "quotes"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Display
const display = ["display"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
const flexibleBoxLayout = [
  "flex",
  "flex-direction",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "flex-flow",
  "flex-basis",
  "order",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts
const fonts = [
  "font",
  "font-family",
  "font-size",
  "font-style",
  "font-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-size-adjust",
  "font-stretch",
  "font-kerning",
  "font-feature-settings",
  "font-language-override",
  "font-optical-sizing",
  "font-synthesis",
  "line-height",
  "line-height-step",
];

/*
 Some properties have been removed from the grid layout properties because
 they conflict with the box alignment properties.
 - https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
 - https://developer.mozilla.org/en-US/docs/Web/CSS/gap
 - https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
 */
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
const gridLayout = [
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "masonry-auto-flow",
  "align-tracks",
  "justify-tracks",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text
const text = [
  "text-align",
  "text-align-last",
  "text-indent",
  "text-justify",
  "text-transform",
  "letter-spacing",
  "hanging-punctuation",
  "hyphens",
  "line-break",
  "overflow-wrap",
  "word-wrap",
  "tab-size",
  "white-space",
  "word-break",
  "word-spacing",
  "paint-order",
  "text-size-adjust",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images
const images = [
  "object-fit",
  "object-position",
  "image-rendering",
  "image-resolution",
  "image-orientation",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Compositing_and_Blending
const compositingAndBlending = [
  "mix-blend-mode",
  "background-blend-mode",
  "isolation",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters
const listsAndCounters = [
  "list-style",
  "list-style-position",
  "list-style-type",
  "list-style-image",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Motion_Path
const motionPath = [
  "offset",
  "offset-path",
  "offset-position",
  "offset-distance",
  "offset-rotate",
  "offset-anchor",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pointer_Events
const pointerEvents = ["pointer-events", "touch-action"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap
const scrollSnap = [
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-top",
  "scroll-margin-right",
  "scroll-margin-bottom",
  "scroll-margin-left",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-top",
  "scroll-padding-right",
  "scroll-padding-bottom",
  "scroll-padding-left",
  "scroll-snap-align",
  "scroll-snap-coordinate",
  "scroll-snap-destination",
  "scroll-snap-points-x",
  "scroll-snap-points-y",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-snap-type-x",
  "scroll-snap-type-y",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars
const scrollbars = ["scrollbar-color", "scrollbar-width"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes
const shapes = ["shape-image-threshold", "shape-margin", "shape-outside"];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text_Decoration
const textDecoration = [
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-style",
  "text-emphasis-position",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-underline-offset",
  "text-underline-position",
  "text-shadow",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions
const transitions = [
  "transition",
  "transition-delay",
  "transition-timing-function",
  "transition-duration",
  "transition-property",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Basic_User_Interface
const basicUserInterface = [
  "appearance",
  "aspect-ratio",
  "box-sizing",
  "caret-color",
  "cursor",
  "ime-mode",
  "nav-index",
  "nav-up",
  "nav-right",
  "nav-down",
  "nav-left",
  "outline",
  "outline-width",
  "outline-color",
  "outline-style",
  "outline-offset",
  "resize",
  "text-overflow",
  "user-select",
];

/*
 Some properties have been removed from the SVG presentation attributes because
 they conflict with their CSS namesakes.
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cursor
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-family
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size-adjust
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-stretch
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-style
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-variant
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-weight
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/image-rendering
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/overflow
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointer-events
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-decoration
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-rendering
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/unicode-bidi
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/word-spacing
 - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/writing-mode
 */
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation
const svgPresentationAttributes = [
  "alignment-baseline",
  "baseline-shift",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flood-color",
  "flood-opacity",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "kerning",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "shape-rendering",
  "solid-color",
  "solid-opacity",
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "vector-effect",
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Microsoft_Extensions
const microsoftExtensions = ["zoom"];

module.exports = [
  "all",
  ...positioning,
  ...display,
  ...flexibleBoxLayout,
  ...gridLayout,
  ...columns,
  ...fragmentation,
  ...table,
  ...boxAlignment,
  ...boxModel.sizing,
  ...logicalProperties.sizing,
  ...boxModel.padding,
  ...logicalProperties.padding,
  ...boxModel.margin,
  ...logicalProperties.margin,
  ...boxModel.overflow,
  ...boxModel.overscroll,
  ...boxModel.other,
  ...shapes,
  ...images,
  ...masking,
  ...writingModes,
  ...fonts,
  "text-rendering",
  ...color,
  ...text,
  ...textDecoration,
  ...listsAndCounters,
  ...pointerEvents,
  ...svgPresentationAttributes,
  ...microsoftExtensions,
  ...generatedContent,
  ...backgroundsAndBorders.background,
  ...filterEffects,
  ...compositingAndBlending,
  ...backgroundsAndBorders.border,
  ...logicalProperties.border,
  ...basicUserInterface,
  ...scrollbars,
  ...scrollSnap,
  ...transitions,
  ...transforms,
  ...animations,
  ...motionPath,
  "will-change",
  ...containment,
  ...pages,
  ...counterStyles,
];
