const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyparser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    fs.readFile('username.txt', (err, data) => {
        if (err) {
            data = 'no chat exists'
        }
        res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')"><input id="message" placeholder="message" type="text" name="message"><input type="hidden" name="username" id="username"> <button type="submit">send message</button></form>`)
    });
    
});

app.post('/', (req,res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`,{flag:'a'}, (err) =>  {
        err ? console.log(err) : res.redirect("/")
    });
})

app.get('/login', (req, res) => {
    res.send('<form action="/login" method="POST" onSubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><input id="username" placeholder="username" type="text" name="username"> <button type="submit">add username</button></form>')
});
app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});
app.post;
app.listen(4000);