import http from 'http';

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Plínio\n');
});

server.listen(port, hostname, () => {
    console.log(`Servidor funcionando em: http://${hostname}:${port}`);
});