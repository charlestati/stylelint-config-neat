# stylelint-config-neat

[![NPM version](https://img.shields.io/npm/v/stylelint-config-neat.svg)](https://www.npmjs.org/package/stylelint-config-neat) [![Build Status](https://github.com/charlestati/stylelint-config-neat/workflows/ci/badge.svg)](https://github.com/charlestati/stylelint-config-neat/actions)

> A neat shareable config for stylelint.

Extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended).

To see the rules that this config uses, please read the [config itself](./index.js).

## Example

<!-- prettier-ignore -->
```css
@custom-media --viewport-medium (width <= 50rem);

@custom-selector :--heading h1, h2, h3, h4, h5, h6;

:root {
  --fontSize: 1rem;
  --mainColor: #12345678;
  --secondaryColor: lab(32.5 38.5 -47.6 / 90%);
}

.html {
  all: unset;
  overflow: hidden auto;
}

@media (--viewport-medium) {
  .body {
    padding-inline: calc(var(--fontSize) / 2 + 1px);
    font-family: system-ui;
    font-size: var(--fontSize);
    line-height: calc(var(--fontSize) * 1.5);
    color: var(--mainColor);
    overflow-wrap: break-word;
  }
}

:--heading {
  margin-block: 0;
}

.hero:matches(.light, .dark) {
  background-image: image-set("img/background.jpg" 1x, "img/background-2x.jpg" 2x);
}

.link {
  color: rgb(0 0 100% / 90%);

  &:hover {
    color: hwb(120deg 100% 25% / 80%);
  }
}
```

## Installation

```bash
npm install --save-dev stylelint-config-neat
```

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-neat"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `declaration-no-important` rule:

```json
{
  "extends": "stylelint-config-neat",
  "rules": {
    "declaration-no-important": false
  }
}
```
