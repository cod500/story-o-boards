import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import { db } from './db';
import { routes } from './routes';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const port = 8080;

const start = async () => {
    // await db.connect('mongodb://localhost:27017');
    app.listen(process.env.PORT || port, () => {
        console.log('Server is listening on port 8080');
    });
}

start();