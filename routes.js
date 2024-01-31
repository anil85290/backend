const fs = require('fs');
const requesthandler = (req,res) => {
    const url=req.url;
    const method=req.method;
    if (url === '/'){
        res. setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write( '</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
             body.push(chunk);
        });
        req.on('end', () => {
             const parsedbody = Buffer.concat(body).toString();
             const message = parsedbody.split('=')[1];
             fs.writeFileSync('message.txt', message);
        })
    
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
    res. setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> my first page</title></head>');
    res.write( '<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write( '</html>');
    res.end();
};


module.exports = requesthandler;