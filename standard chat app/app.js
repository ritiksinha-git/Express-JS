const http = require('http');
const fs = require('fs')
const bodyParser = require('body-parser')

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    fs.readFile('chat.txt', (err, data) => {
        if(err){
            console.log(err);
            data = "No chats  exists"
        }
        res.send(
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
            <input type="text" name="message" id="message">
            <input type="hidden" name="username" id="username">
            <button type="submit">Send</button>
            </form>`
        );
    })  
});

app.post('/', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("chat.text", `${req.body.username}: ${req.body.message}`, {flag: 'a'}, (err) => {
        err ? console.log(err) : res.redirect("/")
    })
})

app.get('/login', (req, res) => {
    res.send(
        `<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
        <input type="text" name="message" id="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">Send</button>
        </form>`
    );
})

const server = http.createServer(app);
server.listen(4000);
