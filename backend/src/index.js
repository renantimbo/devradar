const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://renan:renan@cluster0-ams06.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:

// Query Params: request.query (filtros, ordenação, paginação, etc)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// Usaremos o MongoDB (Não-relacional)

// app.post('/users', (request, response) => {
//    console.log(request.body);
//    return response.json({ message: 'Hello Renan' });
// });

server.listen(3333);
