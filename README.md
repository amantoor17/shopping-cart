Created frontend of a single-page e-commerce website with features such as product listing, shopping cart, total rate of added items, and the ability to add or remove items from the cart, along with toaster notifications. Created using React.js, Redux, Tailwind CSS.


Steps to run on VS Code -

Install Tailwind PostCSS method - STEPS:

Install Node.
(2. Run commands: npx create-react-app react-tailwind cd react-tailwind )

Run commands: A. npm install -D tailwindcss postcss autoprefixer vite B. npx tailwindcss init -p

Install tailwind css intellisense extension. [IGNORE IF ALREADY INSTALLED]

Add "./src/**/*.{js,jsx,ts,tsx}" in content in [ tailwind.config.js ] file.

Open src/index.css or src/App.css and insert: @tailwind base; @tailwind components; @tailwind utilities;

Run command to go live: A. npm run start

(Close and again open VS Code for className suggestions)

Install Router DOM - npm install react-router-dom

Install Redux Toolkit - npm install @reduxjs/toolkit react-redux

Install react icons npm i react-icons

Install react toast npm i react-toastify

Host React Project on github pages - git init git status git add . git commit -m "initial commit" git branch -M 'main' git remote add origin "url of repository" git push -u origin 'main'

```Javascript
npm install gh-pages --save-dev

Add in package.json above name
"homepage" : "https://username.github.io/reponame"

Add both in Scripts in package.json
"predeploy":"npm run build"
"deploy":"gh-pages -d build"

Add /reponame to render Home in App.json
If wants to change commit in repo first remove homepage url 
and after committing again write homepage for navbar logo only

npm run deploy
```
