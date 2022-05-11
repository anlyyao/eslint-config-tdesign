# eslint-config-tdesign
ESLint config for TDesign

>Tips: 规则有优先级，注意 `extends` 中的顺序
>1. 如果 `extends` 配置的是一个数组，那么最终会将所有规则项进行合并，出现冲突的时候，后面的会覆盖前面的。
>2. 通过 `rules` 单独配置的规则,优先级高于 `extends` 。


## Base Usage
### Installation
```sh
npm i eslint @typescript-eslint/parser eslint-plugin-import eslint-config-tdesign --save-dev
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
npm i eslint @typescript-eslint/parser eslint-plugin-import eslint-config-prettier eslint-plugin-prettier eslint-config-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign/miniprogram"
	]
}
```

## TypeScript Usage
### Installation
```sh
npm install eslint typescript @typescript-eslint/parser eslint-plugin-import @typescript-eslint/eslint-plugin eslint-config-tdesign --save-dev
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
npm i eslint vue-eslint-parser eslint-plugin-import eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-config-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign/vue"
	]
}
```
## Vue-next Usage
### Installation
```sh
npm i eslint vue-eslint-parser eslint-plugin-import eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-config-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign/vue-next"
	]
}
```

## React Usage
### Installation
```sh
npm i eslint @typescript-eslint/parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-lodash eslint-config-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign/react"
	]
}
```

## TypeScript React Usage
### Installation
```sh
npm install eslint typescript @typescript-eslint/parser eslint-plugin-import @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-lodash eslint-config-tdesign --save-dev
```
### Use
```json
// .eslintrc.js
{
	"extends": [
		"tdesign/typescript",
		"tdesign/react",
	]
}
```
