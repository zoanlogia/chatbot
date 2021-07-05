const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
    console.log("Un utilisateur s'est connecté")
    socket.on('chat message', (msg) => {
        console.log('Message:' + msg);
    })
})


server.listen(3000, () => {
    console.log('ecoute sur le port 3000')
})