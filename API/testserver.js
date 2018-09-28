import http from 'http'
import app from './testapp'



const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);