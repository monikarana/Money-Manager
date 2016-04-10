# Money-Manager
First step to learning Redux

This is a small React based web app which can act as a first step towards learning the Redux architecture for someone new to web development with React.

Redux can become little confusing to newcomers with many moving parts. This repository is a bare-bones React app implementing 
few Redux concepts while leaving a lot of them:

- Most components are stateless. All the state is kept as a single object in one place
- Only a single root component is state aware. All the state is kept in this component. All other components are passed parts of state they need via props
- Components that live in `src/components` directory are pure and only use props to render themselves
- We follow the unidirectional flow of `|State|-->|View|-->|Actions|-->|State|---`
- We DO NOT have an affect system like Redux however
- All the ways in which state can be changed are put as separate files in `/src/actions`. These are (supposedly) pure functions which take state and other required data, perform the change on the state and return a new state


This is a very simple app I created while learning React for first time. I think it's a good way to organise a React  app, and it make it
easy to understand how different pieces in Redux fit together, and why some things are done the way they're done in Redux.

## Usage

Just clone this repository, npm install, and npm start

```sh
git clone https://github.com/monikarana/Money-Manager.git
cd ./Money-Manager
npm install
npm start
```

## But wut is this app?
This is another one of TODOish app. It allow 
- Creating a log of your expenses
- User can enter Description of an expense, when it was made, and how many Rupees were spent
- Offline storage is supported with localStorage with literally 2 lines of code
