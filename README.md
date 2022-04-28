# eslint-config-tdesign
ESLint config for TDesign

>Tips: 规则有优先级，注意 `extends` 中的顺序
>1. 如果 `extends` 配置的是一个数组，那么最终会将所有规则项进行合并，出现冲突的时候，后面的会覆盖前面的。
>2. 通过 `rules` 单独配置的规则,优先级高于 `extends` 。


## Base Usage
### Installation
```sh
npm i eslint eslint-config-airbnb-base eslint-plugin-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign"
	]
}
```

## Miniprogram Usage
### Installation
```sh
npm i eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign",
		"tdesign/miniprogram"
	]
}
```

## TypeScript Usage
### Installation
```sh
npm install eslint typescript eslint-config-airbnb-base @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign",
		"tdesign/typescript"
	]
}
```

## Vue Usage
### Installation
```sh
npm i eslint eslint-config-airbnb-base eslint-config-prettier vue-eslint-parser eslint-plugin-vue @vue/eslint-config-typescript eslint-plugin-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign",
		"tdesign/vue"
	]
}
```
## Vue-next Usage
### Installation
```sh
npm i eslint eslint-config-airbnb-base eslint-config-prettier vue-eslint-parser eslint-plugin-vue  eslint-plugin-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign",
		"tdesign/vue-next"
	]
}
```

## React Usage
### Installation
```sh
npm i eslint prettier eslint-config-airbnb-base eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-lodash eslint-plugin-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign",
		"tdesign/react"
	]
}
```

## TypeScript React Usage
### Installation
```sh
npm install eslint typescript eslint-config-airbnb-base eslint-config-prettier  @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign",
		"tdesign/typescript",
		"tdesign/react",
	]
}
```
