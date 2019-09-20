const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.contentType("text/html");
    response.send('<b>List Employees</b>')
});

router.get('/Terminate', (request, response) => {
    response.contentType("text/html");
    response.send('<b>List Terminated Employees</b>')
});

module.exports = router;