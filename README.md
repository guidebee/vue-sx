# vue-stylex

vue-stylex allows  you to specify any  CSS properties you may need bases different break point,
like xs, sm, md,lg,xl,xxl in vuetify.
````
v-sx:[css property name]="css property value"
````

## 🔧  Install
`npm install vue-stylex`

```javascript

import sxStyle from 'vue-stylex'
// this is the default options of Vuetify
// you can use this option to overwrite the default breakpoint settings.
const breakpointThresholds = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560,
};

createApp(App).use(sxStyle,/*breakpointThresholds*/).mount('#app')

```
## 👈 Shortest use case
set different color for different break point
```javascript
const sxStyle = {
xs: 'red',
sm: 'green',
md: 'blue',
lg: 'purple',
xl: 'pink',
xxl: 'cyan',
};

<h1 v-sx:color="sxStyle">{{ msg }}</h1>

```

## 👈 Multiple properties
```javascript
const sxFontStyle = {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '30px',
};

const sxColorStyle = {
    xs: 'red',
    sm: 'green',
    md: 'blue',
    lg: 'purple',
    xl: 'pink',
    xxl: 'cyan',
};

<div v-sx:backgroundColor="sxColorStyle"
     v-sx:fontSize="sxFontStyle">
    With Vue Media query style extension
</div>

```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
