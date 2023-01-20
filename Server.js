const express = require('express');
const next = require('next');

console.log("Please ensure you build the next pages first!");

const app = next({dev: false});
const handle = app.getRequestHandler();
const router = express.Router();

router.get("/_*", (req, res) => {
    return handle(req, res);
});

router.get("*", (req, res) => {
    console.log(`${req.url} | ${req.method} | ${req.headers['user-agent']}`);
    return handle(req, res);
});

app.prepare().then(() => {
    const server = express();
    server.use(router);
    server.listen(80, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:80');
    });
});