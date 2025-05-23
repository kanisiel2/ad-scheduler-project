// backend/server.js
const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const { setupSocket } = require('./sockets/socketHandler');
const { sequelize } = require('./models');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

setupSocket(io);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});