/* const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world')
})

server.listen(3000, () => {
    console.log('Server on port 3000');
}) */

const express = require('express');
const morgan = require('morgan');
const app = express();

/* function logger(req, res, next){
    console.log(`Route: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
} */


//Settings

app.set('appName', 'Express tutorial');
app.set('PORT', 4000);


//Middlewares


app.use(express.json());
//app.use(logger);
app.use(morgan('dev'));


//Routes


/* app.all('user', (req, res, next) => {
    console.log(`I'm here`);
    next();
}) */

/* app.get('/', (req, res) => {
    res.send('PETITION GET RECEIVED');
}) */

app.get('/user', (req, res) => {
    res.json({
        name: 'Juan',
        lastname: 'Pablo'
    });
})

app.post('/about', (req, res) => {
    res.send('POST REQUEST RECEIVED');
})

app.post('/user', (req, res, next) => {
    console.log('aqui');
    next();
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('POST REQUEST RECEIVED');
})

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
})

app.delete('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} deleted`);
})

app.use(express.static('public'));

app.listen(app.get('PORT'), () => {
    console.log(app.get('appName'));
    console.log('Server on port', app.get('PORT'));
})