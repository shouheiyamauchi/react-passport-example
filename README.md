# React Passport Example w/ create-react-app

This project was forked from [Shouhaei Yamauchi's repo](https://github.com/shouheiyamauchi/react-passport-example) and altered to change the file structure and directory names to line up with my personal preferences, as well as being refactored to use react-scripts and create-react-app for the react portion.

The code has also been refactored to remove the constructor from the component classes, as well as incorporating axios instead of using an XMLHttpRequest.

# React Passport Example Application

An example application which combines a back-end which stores user data and front-end React.js application which handles user authentication sessions.

This application be easily separated into two completely different repositories.

Created using the tutorials below:

https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt

However, this version has replaced the React Router v3 which were used in the above tutorials with the most recent React Router v4 which has some major differences. I also made some minor tweaks to account for the NPM packages which had issues due to updates since the tutorial was published.

This application incorporates the following packages:

- bcryptjs
- jsonwebtoken
- mongoose
- passport
- react-router-dom
- validator

## Installation

After cloning the repo, follow the steps below:
```sh
$ cd react-passport-example
```
```sh
$ yarn install
```
```sh
$ sudo mongod
```
```sh
$ yarn run dev
```

When editing the files, run the following command for webpack to watch your files and bundle whenever changes are made:
```sh
$ yarn run bundle
```

## Screenshots

Home page before login:

![Alt Home Page](/README/home.png?raw=true)

Sign up page:

![Alt Signup Page](/README/signup.png?raw=true)

Login page:

![Alt Login Page](/README/login.png?raw=true)

Dashboard which is only accessible after login:

![Alt Dashboard](/README/dashboard.png?raw=true)
