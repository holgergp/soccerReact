[![Build Status](https://travis-ci.org/holgergp/soccerReact.svg?branch=master)](https://travis-ci.org/holgergp/soccerReact)
# soccerReact
Demo application to compare various client side mvc approaches. Using React.js
I refer to this demo application in a blog post you find here: In [English](https://blog.codecentric.de/en/2016/01/road-testing-react-js/) and in [German ](https://blog.codecentric.de/2016/01/react-js-im-praxischeck/) 
For the time being start the dev-server using `npm start`

Access the webpage located at `http://localhost:8000/webpack-dev-server/`. But it should fire up automatically.

A running version can be seen [here:](http://soccerreact.herokuapp.com/ ).

If you want to test the application `npm test`.

I deploy the application in disted form, if you feel to dist the application yourself run `npm run dist`.

I prepared four separate branches, that represent different stages in the development of this sample.
 
 - [01_Plain](https://github.com/holgergp/soccerReact/tree/01_Plain): Plain version without much dynamic behaviour
 - [02_With_LocalStorage](https://github.com/holgergp/soccerReact/tree/02_WithLocalStorage): Added possibility to store state in the browsers local storage
 - [03_With_Editing](https://github.com/holgergp/soccerReact/tree/03_WithEditing): Added possibility to change a teams name
 - [04_With_DragAndDrop](https://github.com/holgergp/soccerReact/tree/04_WithDragAndDrop): Full fledged version that includes DragAndDrop
