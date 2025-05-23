// backend/sockets/socketHandler.js
const clients = new Map();

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('register', ({ clientId, category }) => {
      clients.set(socket.id, { clientId, category });
      socket.join(category);
    });

    socket.on('status', (data) => {
      console.log('Client status:', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
      clients.delete(socket.id);
    });
  });
};