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

react-bootstrap styling not working: 

```js
// index.js or index.js
import 'bootstrap/dist/css/bootstrap.min.css';

// App.js
import {Container, Row, Col, Form, Button, Alert, InputGroup} from 'react-bootstrap';
```