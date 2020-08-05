const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url)

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end("This is the OVERVIEW")
    } else if (pathName === '/product') {
        res.end("This is the PRODUCT")
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html'
        })
        res.end('<h1>404! Page not found</h1>')
    }
});

server.listen(4200, '127.0.0.1', () => console.log("Listening to requests on port 4200"))
