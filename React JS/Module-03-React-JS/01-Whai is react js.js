/*

// What is React js?

//       React js is library of javascript.
//       React js manage and develope by facebook engineer.
//       React js used to create UI and web application just like facebook | instagram | twitter | netflix | snapchat etc.
//       React js is used to create SPA (single page application).
//       React js is 10x fast load data on browser.
//       React js is component based.
//       React js components are reusables.
//       React js is based on modules and reused it.
//       React js create props and states and updated data also.
//       React js used some libraries and packages to create a web application.
//       React js is SEO friendly.
//       React js used life cycle to create any web application.

//       React js life cycle : 

//             1) initiaalizations
//             2) mounting
//             3) updating
//             4) unmounting

//       React js used to load webpage using virtual DOM.

//       Differance b/w DOM and virtual DOM.
      
//             * DOM is slow to load content, when virtual DOM Faster than DOM.
//             * DOM load html content inside of javascript using document.getElementById("id-name");
//             * virtual DOM is used to load html content in react js using ReactDOM.cteateRoot(document.getElementById("id-name"));
//             * DOM is case sensitive and virtual DOM  is also case sensitive.
      
//       React js used to load html in React components using jsx elements.

//             * jsx stand for javascript xml (xtensible markup language) load dynamic content of html.
//             * jsx used to access html elements in React js.
      
//       React js componentsn is small peace of file i.e. saved inside of react using .js or .jsx extension.

//       React js components  is two types inside of React.

//             a) function components
//             b) class components

//       Differance b/w npm and npx

//             * npm stand for node package manager
//             * npm is depandancy  manager of React js
//             * npx stand for node package eXecute it means it is also create a React js app but it is faster than npm
//             * npx is create an eXecute files of React js app so it is faster than npm
            

//       React js create any application or install any application with two types

//             (a) npm (node package manager)

//                   step-1 : download node js in your systems
//                            https://nodejs.org/en/download/prebuilt-installer

//                   step-2 : check version of node js
//                               node -v
//                               npm -v
//                               npx -v

//                   step-3 : npx create-react-app app-name

//                   step-4 : cd app-name

//                   step-5 : npm start

//                   step-6 : create a react web server url

//                               http://localhost:3000/

//                         you can  now view  demoapp in the browser.

//                         local : http://localhost:3000
//                         on your network : http://192.168.29.106:3000

//                         Note that the development build is not optimized.
//                         To create a production build, use npm run build.
//                         webpack compiled successfully.

/*  

            (b) using npm with vite package
            
                  cd .. for back 

                  step-1 : npm create vite@latest

                  step-2 :  Project name: ... hello-01-app

                  step-3 : select framework
                              Vanilla
                              Vue
                              >   React   .....select........
                              Preact
                              Lit
                              Svelte
                              Solid
                              Qwik
                              Others

                  step-4 : Select a variant: » - Use arrow-keys. Return to submit.
                              TypeScript
                              TypeScript + SWC
                              >   JavaScript    ......select.......
                              JavaScript + SWC
                              Remix ↗

                  step-5 : cd hello-world-app

                  step-6 : npm install

                  step7:how to start app using vite
                        
                        npm run dev 

                        http://localhost:5173


      * React js directory system.

            1) node module :

                  node_module is package | module | library installer of react js app all packages and modules are installed inside of node_module.

                  React main module, react and react DOM is coming from node_module.

                  ex-  
                        App.jsx
                        import React from 'react;
                        import RectDOM from 'react-dom/client'


            2) public :

                  public is open for assets of your application.

                  ex-
                        assets => css | js | fonts | images...


            3) src : 

                  src is main folder of your application.

                  src is open for create all components of your application.

                  # components is small peace of file that is save with .js or .jsx extension.

                  # .js extension of javascript when we create app with ' npx create-react-app appname' we can take extension of components with both way .js and .jsx  

                  # when we create any application via ' vite ' we save with only .jsx extension.

                  ex- 
                        App.jsx
                        Services.jsx
                        Products.jsx
                        Cart.js

            What is .jsx inside of React js?

                  jsx stand for javascript xml or javascript eXecute file.

                  # xml : Xml stand for x-tensible markup language.
                          xml used to load dynamic content inside of React js.

                  jsx is used to access html elements inside of React js components.
           
           
            4) index.html : 

                  index.html is main web page or landing page that is load on web browser and it is called inside src => components => main.jsx via Virtual DOM 'document.getElentById("id_name");'

                  ex-
                        ReactDOM.createRoot(document.getElementById("id_name"));

                  Note : index.html is our landing page and it is create only one times.


            5) package.json : 

                  package file is an environment file inside of react js app that is used to registered all basics information about our application.

                  ex- React js appname
                      React js versions

                  React js all module is registered inside of package.json

                  ex-
                        "name": "hello-app",
                        "react": "^18.3.1",
                        "react-dom": "^18.3.1"
                        "@types/react": "^18.3.3",


            6) package-lock.json :

            7) vite.config : 

                  import { defineConfig } from 'vite'
                  import react from '@vitejs/plugin-react'

                  // https://vitejs.dev/config/

                  export default defineConfig({
                        plugins: [react()],
                  })


            8) README :

            9)gitingnore :

                  if user want to upload app inside of github.com and does not want to upload perticular folder without deleting main folder and want to ignore to upload on github there we can used gitignore

                  #first line
                  node_modules/

                  

*/