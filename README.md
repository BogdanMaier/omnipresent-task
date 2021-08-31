## Engineering proposal
Context:
Having a client web app Omnipresent that supports users to register from 3 different countries Spain, Ghana & Brazil, we
need to implement a backend that will include the API and a database for persistence layer.

### What problem are you trying to solve?
Update the front end implementation with the provided styling for the app and implement the backend. Additionally, setup
an JWT based authentication mechanism on both client and backend. Achieving this would mean the app would be at a
minimum to become production-ready.

Why is this an important problem for us to solve?
By not addressing any on the above-mentioned points the app cannot be released. Therefore postponing would not make sense,
as we are focusing on the release of the app. 

How do you propose to solve it?
The 3 points that require our attention are:
- API development
- Database setup
- JWT setup with a authentication flow on the frontend and a verification mechanism on the backend

#### API
I am proposing the use of ExpressJS as the API development framework as it is simple yet powerful, in combination with 
AWSs Lambda service, all this simplified by the Serverless framework. Given the simplicity of our API we can easily deploy
it under a few lambdas, therefore I see no reason to go for a full-fledged server at this point.

The required service I can think of at this point are:

**Users service**

_POST_ /register body: userData

**Authentication service**

_POST_ /authenticate body: credentials

**Email service (internal)**

_POST_ /sendEmail

Another solution considered which is cheaper yet harder to maintain would be to deploy our API in a self-hosted solution.
Downsides are the initial setup time for the machine will be longer and there is a need for fire-fighting availability of our team.
However, the same express app will be deployed behind a Nginx server.

The proposed solution might cost a little more over time, but it is easier to deploy and manage, and the availability of
the cloud is much better.

#### Database
Using the AWS Mongo DB service  we can integrate easily the DB into the API using a virtual private cloud (VPC). Since 
we have at this point one entity our collections can be limited to `Users`. 
The same cloud characteristics  apply to the DB, instead of  being concerned about DB downtime or server downtime, the 
cloud solution has the best availability and the easy of integration and maintaing is my higher than on a self-hosted solution.

#### Authentication
Using JWTs is a industry standard, making the solution a reliable one. Other suggestions could be an OAuth integration, 
but given that reach people internationally, that might create the need for a lot of integration and the complexity 
could grow a lot for this basic task.

###### Frontend
We need to implement a login component that uses the users email to share a temporary password with him, once the users
authenticates with that one time password, a jwt will be generated for him by the `/authenticate` endpoint, that the
user stores on the frontend and as long it is not expiring the users can use the app freely.

###### Backend
We need to be able to send an email using `sendEmail` when the users `/authenticate` endpoint receives only the email
body attribute. such that the users can sucessfully register if he has access to his email.









#
#
#
#
#
## Getting Started with Create React App 
### How to interact with the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


