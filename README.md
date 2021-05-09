# This is the Shoppies Front End application for the Shopify Fall 2021 intern role

Use the following links to access the Shoppies (Shopinations) website:

- Netlify Deployment - https://shopination-arshfall2021.netlify.app
- Heroku Deployment - https://shopination-arshfall2021.herokuapp.com

I developed this project using React.js and Bootstrap to allow for beautifully crafted components
  - The current state of the project as a seamless UI that the user is able to easily follow
  - I made sure to maintain Shopify's color scheme to make for a consistent UI
  - Used React inline css styles since this is a relatively small application, and can be easily done via inline styles

Features
  - The search value updates as soon as a change is made to the search string
  - Pulls movies from the OMDB API on string change and populates a series of cards using the .map function
  - Made use of react hooks to manage states and pass props to allow for effective data transfer
    - (Still properly gaining familiarity withe react hooks - hence one feature is missing and will be discussed in detail further down)
  - Added animations to each card on hover to make evident to the user which movie they are on
  - Added the 'Nominate' and 'Remove' button on hover to add for a clean look on the cards
  - Made use of Row's, Columns and Containers to make the React app responsive on different screen sizes
  - Nominate and Remove buttons work effectively - application checks for duplicate movies and doesn't allow to add a movie that has already been nominated
  - The nomination criteria of Maximum 5 movies is also present and invokes a 'Success' banner informing the user that they have selected their nominations
    - After this point the user can only nominate more movies if a nomination is removed


Next Steps
  - As mentioned earlier, I need to familiarize myself better with react hooks to truly implement the functionality of the disables buttons effectively
  - Currently, there exists code to disable the 'Nominate' button, but has been commented out because, it does not allow the button to be enabled once a movie has been removed from nomination (This code exists on line 10-14 in addNominations.js - on the button tag right beneath is where we would call 'handleFormSubmit', and set the disabled prop to - 'disabled={grey}' to enable this disabled button functionality.)
    - I have commented this out as the button does not enable once the movie is removed from the nomination hence causing additionaly confusion for the user.
  - As a next step, I would like to learn about how react hooks work, all the way down to its fundamentals and how I can effectively manage states. (I plan on also learning redux as method to improve my state management in React)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
