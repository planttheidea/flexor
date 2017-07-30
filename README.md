# flexor

<img src="https://img.shields.io/badge/build-passing-brightgreen.svg"/>
<img src="https://img.shields.io/badge/coverage-100%25-brightgreen.svg"/>
<img src="https://img.shields.io/badge/license-MIT-blue.svg"/>

Flexbox, done the React way.

## Usage

```javascript
import {
  FlexContainer,
  FlexItem
} from 'flexor';

class App extends PureComponent {
  render() {
    return (
      <FlexContainer>
        <FlexItem sizeTo="content">
          I will be sized to my content, and no larger
        </FlexItem>

        <FlexItem>
          I will grow to fit the rest of the container
        </FlexItem>
      </FlexContainer>
    );
  }
}
```

## Table of contents
* [Usage](#usage)
* [Components](#components)
  * [FlexContainer](#flexcontainer)
    * [alignContent](#aligncontent)
    * [alignItems](#alignitems)
    * [column](#column)
    * [columnReverse](#columnreverse)
    * [direction](#direction)
    * [element](#element)
    * [justifyContent](#justifycontent)
    * [inline](#inline)
    * [inlineAlign](#inlinealign)
    * [row](#row)
    * [rowReverse](#rowreverse)
    * [wrap](#wrap)
  * [FlexItem](#flexitem)
    * [alignSelf](#alignself)
    * [basis](#basis)
    * [element](#element)
    * [grow](#grow)
    * [order](#order)
    * [shrink](#shrink)
    * [sizeTo](#sizeto)
* [Browser support](#browser-support)
* [External dependencies](#external-dependencies)
* [Development](#development)

There are a number of common usage examples provided in [the examples in the `dev` app](examples).

## Components

### FlexContainer

The container of flexbox items.

```javascript
<FlexContainer
  align="top"
  alignContent="center"
  alignItems="start"
  column
  columnReverse
  direction="row"
  element="section"
  justifyContent="between"
  inline
  row
  rowReverse
  wrap="wrap"
>
  ...
</FlexContainer>
```

#### alignContent

*string, defaults to "stretch"*

The `align-items` value for the container. Valid values:

* `around` (translates to `space-around`)
* `between` (translates to `space-between`)
* `center`
* `end` (translates to `flex-end`)
* `start` (translates to `flex-start`)
* `stretch`

#### alignItems

*string, defaults to "stretch"*

The `align-content` value for the container. Valid values:

* `baseline`
* `center`
* `end` (translates to `flex-end`)
* `start` (translates to `flex-start`)
* `stretch`

#### column

*boolean, defaults to false*

Is the `flex-direction` of the container `column`. Shorthand for `direction="column"`.

#### columnReverse

*boolean, defaults to false*

Is the `flex-direction` of the container `column-reverse`. Shorthand for `direction="column-reverse"`.

#### direction

*string, defaults to "row"*

The `flex-direction` value for the container. Valid values:

* `column`
* `column-reverse`
* `row`
* `row-reverse`

#### element

*(function|string), defaults to "div"*

The element type to use for the container element. Accepts either string values for standard HTML elements, or function values for React components. This is often used for semantic element usage (`header`, `footer`, etc.).

#### justifyContent

*string, defaults to "start"*

The `justify-content` value for the container. Valid values:

* `around` (translates to `space-around`)
* `between` (translates to `space-between`)
* `center`
* `end` (translates to `flex-end`)
* `start` (translates to `flex-start`)

#### inline

*boolean, defaults to false*

Sets the flex container to be inline.

#### inlineAlign

*string, defaults to "baseline"*

When `inline` is applied, the `vertical-align`. Valid values:

* `baseline`
* `bottom`
* `center`
* `top`

#### row

*boolean, defaults to true*

Is the `flex-direction` of the container `row`. Shorthand for `direction="row"`.

#### rowReverse

*boolean, defaults to false*

Is the `flex-direction` of the container `row-reverse`. Shorthand for `direction="row-reverse"`.

#### wrap

*(boolean|string), defaults to "nowrap"*

If a string, sets the `flex-wrap` value for the container. Valid values:

* `nowrap`
* `wrap`
* `wrap-reverse`

If a boolean, applies `wrap` as the value of `flex-wrap`.

### FlexItem

The items within a flexbox container.

```javascript
<FlexItem
  alignSelf="center"
  basis={200}
  element={FlexContainer}
  grow={3}
  order={-1}
  shrink
  sizeTo="content"
>
  ...
</FlexItem>
```

#### alignSelf

*string, defaults to "auto"*

Sets the `align-self` value for the item. Valid values:

* `auto`
* `baseline`
* `center`
* `end` (translates to `flex-end`)
* `start` (translates to `flex-start`)
* `stretch`

#### basis

*(number|string) defaults to "auto"*

Sets the `flex-basis` value for the item. If a number, will translate to that exact value in `px`. If a string, will use the value directly.

#### element

*(function|string), defaults to "div"*

The element type to use for the container element. Accepts either string values for standard HTML elements, or function values for React components. This is often used for semantic element usage (`header`, `footer`, etc.).

**Tip**: Use this in combination with `FlexContainer` to create flex items that are also flex containers.

```javascript
<FlexItem element={FlexContainer}>
```

#### grow

*(boolean|number|string), defaults to 1*

Sets the `flex-grow` value for the item. If a number or a string, will use the value directly (must be an integer between `0` and `9`). If a boolean, will set the value to be `1` to trigger grow.

#### order

*(number|string), defaults to 0*

Sets the `order` value for the item (must be an integer between `-9` and `9`).

#### shrink

*(boolean|number|string), defaults to 1*

Sets the `flex-shrink` value for the item. If a number or a string, will use the value directly (must be an integer between `0` and `9`). If a boolean, will set the value to be `1` to trigger shrink.

#### sizeTo

*(number|string)*

Helper prop, which will set the value passed to `flex-basis` and also set `flex-grow` and `flex-shrink` to 0.

Besides all valid values for `basis`, the additional value of `content` can be used, which will set the basis to `auto`.

```javascript
<FlexItem sizeTo="content">
```

## Browser support

* Chrome (all versions)
* Firefox (all versions)
* Edge (all versions)
* Opera 16+
* IE 11+
* Safari 8+
* iOS 8+
* Android 4+

## External dependencies

If using the built version provided in `dist`, you will need to include additional libraries as dependencies prior to the inclusion of `flexor`:
* [React](https://www.npmjs.com/package/react)
* [moize](https://www.npmjs.com/package/moize)

## Development

Standard stuff, clone the repo and `npm install` dependencies. The npm scripts available:
* `build` => run webpack to build development `dist` file with NODE_ENV=development
* `build:minifed` => run webpack to build production `dist` file with NODE_ENV=production
* `dev` => run webpack dev server to run example app (playground with examples)
* `dist` => runs `build` and `build-minified`
* `docs` => builds the docs via `jsdoc`
* `lint` => run ESLint against all files in the `src` folder
* `prepublish` => run `lint`, `test`, `transpile:es`, `transpile:lib`, `dist`
* `test` => run AVA test functions with `NODE_ENV=test`
* `test:coverage` => run `test` but with `nyc` for coverage checker
* `test:update` => run `test`, but update all snapshots
* `test:watch` => run `test`, but with persistent watcher
* `transpile:lib` => run babel against all files in `src` to create files in `lib`
* `transpile:es` => run babel against all files in `src` to create files in `es`, preserving ES2015 modules (for [`pkg.module`](https://github.com/rollup/rollup/wiki/pkg.module))
