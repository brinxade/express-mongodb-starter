import express from 'express';
import {Logger} from './core/logger.js';
import session from 'express-session';
import responseTime from 'response-time';
import './core/db.js';

console.clear();

const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Logging
app.use(responseTime((req, res, time) => {
    Logger.LogRequest(req, res, time);
}));

// Routing
app.get('/', (req, res) => {
    res.send("Hello World!");
});

let logger = new Logger();
app.listen(port, ()=>{
    logger.info(`Server running at http://localhost:${port}/`);
});