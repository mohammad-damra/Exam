const express = require('express');
const mainRouter = express.Router();
const {} = require('../controller/main-controller');
mainRouter.post('/books', addNewBooks);
