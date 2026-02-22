# React + Redux + Vite + Storybook Setup Notes

## 1. Create Vite App (React + TypeScript)

```bash
npm create vite@latest react-redux-vite -- --template react-ts
cd react-redux-vite
npm install

npm install redux react-redux @reduxjs/toolkit reselect

npm install -D @testing-library/react @testing-library/jest-dom vitest
npm install -D jsdom @vitest/ui

npm i @emotion/react @emotion/styled

npm i @mui/material @mui/icons-material
npm i @emotion/react @emotion/styled

npm install redux-saga react-router-dom@5

npx storybook@latest init
npm i -D @storybook/react @storybook/testing-library
npx playwright install 

If you face ECOMPROMISED or npm install issues:
npm cache clean --force
Then:
Delete node_modules
Delete package-lock.json
Reinstall dependencies
npm install
Also ensure:
vite.config.ts is properly configured
package.json scripts are correctly set
```
## for storybook run -
```bash
 npm run storybook
 ```
## for storybook test run - 
```bash
npm run test:storybook
```
## for app run -
```bash
 npm run dev
 ```
## for app test run -
```bash
 npm run test:app
 ```
## 🚀every time publish latest code:
```bash
npm run publish-storybook
```
## 🚀storybook url :
```bash
https://699b2af93c3e04b84507bebf-cvxyrmfqwn.chromatic.com/
```


