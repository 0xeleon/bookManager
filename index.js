import express from 'express';
import bodyParser from 'body-parser';
import mongoose from './db/connection.js'
// define routes
import bookRoutes from './routes/book.route.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pathApi = '/api/v1';

// define routes
app.use(pathApi, bookRoutes);

app.get('/test', async(_req, res) =>{
    return  res.send('ok');
})

app.listen(3001, () =>{
    console.log('listen 3001...');
})
