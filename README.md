# todoapp

## project setup

1. Install [Node](https://nodejs.org/en/)
2. Install [Yarn](https://yarnpkg.com/getting-started/install)

## create react app

create-react-app
[document](https://github.com/facebook/create-react-app)

`yarn create react-app todoapp`

`cd todoapp`

`yarn start`

## update packages
`yarn install`



## notes

### react-bootstrap styling not working: 

```jsx
// index.js or index.js
import 'bootstrap/dist/css/bootstrap.min.css';

// App.js
import {Container, Row, Col, Form, Button, Alert, InputGroup} from 'react-bootstrap';
```


### updating state

```jsx
// Directly setting a new tasks list
const handleDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
        task.taskId === taskId ? { ...task, done: true } : task
    );

    // Directly setting a new tasks list
    setTasks(updatedTasks);

    // Some other code that relies on the updated state
    // This might not work as expected if setTasks hasn't finished updating the state yet
    someFunctionThatReliesOnUpdatedState();
};

```
In this example, if you directly set a new tasks list using setTasks(updatedTasks), React might not have updated the state immediately, and subsequent code that relies on the updated state might not behave as expected.

On the other hand, using a function inside the state updater function ensures that you are working with the latest state. Here's the correct approach:

```jsx

const handleDone = (taskId) => {
    setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
            task.taskId === taskId ? { ...task, done: true } : task
        );

        // Sort the tasks after updating the done property
        const sortedTasks = sortTasks(updatedTasks);
        return sortedTasks;
    });
};
```