# :abcd: Vue input mask

> This package has been modified to fill in our use cases.

[![npm](https://img.shields.io/npm/v/v-mask.svg)](https://www.npmjs.com/package/v-mask)
[![Github file size](https://img.shields.io/github/size/bw2tecnologia/v-mask/dist/v-mask.min.js.svg)](https://raw.githubusercontent.com/bw2tecnologia/v-mask/master/dist/v-mask.min.js)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/bw2tecnologia/v-mask/master/LICENSE)
[![Vue2](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Tested with TestCafe](https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg)](https://github.com/DevExpress/testcafe)

> Tiny input mask library for vue.js based on [text-mask-core](https://github.com/text-mask/text-mask/tree/master/core) (~4kb) exposed as directive. No dependencies

<div align="center">
  <h3>
    <strong>
      <a href="https://github.com/bw2tecnologia/v-mask/blob/master/README.md">English</a>
    </strong>
    <span> | </span>
    <a href="https://github.com/bw2tecnologia/v-mask/blob/master/README-pt.md">Português</a>
  </h3>
</div>

## :heavy_check_mark: Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![iOS Safari](https://raw.github.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png) | ![Android WebView](https://raw.github.com/alrra/browser-logos/master/src/android-webview-beta/android-webview-beta_48x48.png) | ![Android WebView](https://raw.github.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 74+ :heavy_check_mark:                                                                   | 66+ :heavy_check_mark:                                                                      | 12+ :heavy_check_mark:                                                                   | 46+ :heavy_check_mark:                                                                | 17+ :heavy_check_mark:                                                             | 11+ :heavy_check_mark:                                                                                                       | 12+ :heavy_check_mark:                                                                               | 67+ :heavy_check_mark:                                                                                                        | 8.2+ :heavy_check_mark:                                                                                               |

We support only browsers with global usage statistics greater then 1%, last 2 version of each browser but not dead browsers. Library may work in older browser but we don't not guarantee that. You may need addition polyfills to make it work.

## :cd: Installation

```sh
npm install v-mask
```

## Initialization

### ES2015 (Webpack/Rollup/Browserify/etc)

```javascript
import Vue from "vue";

// As a plugin
import VueMask from "v-mask";
Vue.use(VueMask);

// Or as a directive
import { VueMaskDirective } from "v-mask";
Vue.directive("mask", VueMaskDirective);

// Or only as a filter
import { VueMaskFilter } from "v-mask";
Vue.filter("VMask", VueMaskFilter);
```

## :rocket: Usage

```html
<input type="text" v-mask="'####-##'" v-model="myInputModel" />
<!-- OR -->
<input type="text" v-mask="nameOfVariableWithMask" v-model="myInputModel" />
```

There is no reason to support using this lib for using without `v-model` but open the door for using on [custom inputs](http://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events).

### Filter usage

```html
<span>{{ '9999999999' | VMask('(###) ###-####') }}</span>
```

## :gear: Configs

List of supported placeholders:

| Value | Format                       |
| ----- | ---------------------------- |
| #     | Number (0-9)                 |
| A     | Letter in any case (a-z,A-Z) |
| N     | Number or letter             |
| X     | Any symbol                   |
| ?     | Optional (next character)    |

## :syringe: Tests

[Jest](https://github.com/facebook/jest) is used for unit-tests.

Unit-tests can be executed by typing this command in your terminal:

```bash
npm test
```

[TestCafe](https://github.com/DevExpress/testcafe) is used of E2E testing.

E2E-tests can be executed by typing this command in your terminal:

```bash
npm test:e2e
```

## :anchor: Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/).

## :newspaper: Changelog

We're using [GitHub Releases](https://github.com/bw2tecnologia/v-mask/releases).

## :beers: Contributing

We're more than happy to see potential contributions, so don't hesitate. If you have any suggestions, ideas or problems feel free to add new [issue](https://github.com/bw2tecnologia/v-mask/issues), but first please make sure your question does not repeat previous ones.

**Notice:** You should make your changes only in `src` folder, don't try to edit files from `dist` as it compiled from `src` by babel and shouldn't be changes manually.

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
