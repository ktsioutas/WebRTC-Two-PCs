const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });
let clients = [];

server.on('connection', (ws) => {
  console.log('New connection established.');
  clients.push(ws);
  //ws.send(JSON.stringify("HELLO"));
  ws.on('message', (message) => {
    console.log(JSON.parse(message));
    try {
      const parsedMessage = JSON.parse(message); // Validate incoming message
      console.log('Valid JSON received:', parsedMessage);

      // Relay the message to other clients
      clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            const messageString = JSON.stringify(parsedMessage); // Ensure a valid JSON string is sent
            //console.log(`Relaying to client: ${client}`);
            client.send(messageString);
            console.log('Valid JSON send:', messageString);
        }
      });
    } catch (error) {
      console.error('Invalid JSON received:', message, error);
    }
  });

  ws.on('close', () => {
    console.log('Connection closed.');
    clients = clients.filter((client) => client !== ws);
  });
});

console.log('Signaling server is running on ws://localhost:8080');
