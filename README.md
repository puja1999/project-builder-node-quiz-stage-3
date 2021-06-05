![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# PROGRAD PROJECT BUILDER | NODE | REST API | QUIZ STAGE 3 

## Learning Goals

In this exercise, you will learn how to create REST api end points:

- Building a RESTful API.
- Performing CRUD operations.
- Writing API endpoints.

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Introduction

Use Node.js and Express to build an API that performs CRUD operations on users.

- Add a `.gitignore` file appropriate for `node.js` projects.
- Add a new `package.json`.
- Add a `server` script to `package.json` that runs the API using `nodemon`.

### PROGRESSION 1 | ESTABLISH CONNECTION
Your task in this iteration is to create a
- `EXPRESS` server.
- An account in `Mongo Atlas`
- connection between node and atlas using mongoose.

### PROGRESSION 2 | CREATE MODEL CLASSES
Create the following model classes
- Questions
- Options
- Answers

### PROGRESSION 3 | QUESTION ENDPOINTS

Add the code necessary to create a Web API and implement the following _endpoints_:

| Method | URL            | Description                                                                                            |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/questions     | Creates a questions using the information sent inside the `request body`.                                   |
| GET    | /api/questions     | Returns an array of questions.                                                                                |
| GET    | /api/questions/:id | Returns the question object with the specified `id`.                                                       |
| DELETE | /api/questions/:id | Removes the question with the specified `id` and returns the question user.                                 |
| PUT    | /api/questions/:id | Updates the question with the specified `id` using data from the `request body`. Returns the modified question |


### PROGRESSION 4 | OPTIONS ENDPOINTS

Add the code necessary to create a Web API and implement the following _endpoints_:

| Method | URL            | Description                                                                                            |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/options     | Creates an options using the information sent inside the `request body`.                                   |
| GET    | /api/options     | Returns an array of options                                                                                |
| GET    | /api/options/:id | Returns the options object with the specified `id`.                                                       |
| DELETE | /api/options/:id | Removes the options with the specified `id` and returns the deleted user.                                 |
| PUT    | /api/options/:id | Updates the options with the specified `id` using data from the `request body`. Returns the modified options |

### PROGRESSION 5 | ANSWERS ENDPOINTS

Add the code necessary to create a Web API and implement the following _endpoints_:

| Method | URL            | Description                                                                                            |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/answers     | Creates an answers using the information sent inside the `request body`.                                   |
| GET    | /api/answers     | Returns an array of answers.                                                                                |
| GET    | /api/answers/:id | Returns the answers object with the specified `id`.                                                       |
| DELETE | /api/answers/:id | Removes the answers with the specified `id` and returns the deleted user.                                 |
| PUT    | /api/answers/:id | Updates the answers with the specified `id` using data from the `request body`. Returns the modified answers |


### PROGRESSION 6: BONUS

To work on the stretch problems you'll need to enable the `cors` middleware. Follow these steps:

- add the `cors` npm module: `npm i cors`.
- add `server.use(cors())` after `server.use(express.json())`.

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!
