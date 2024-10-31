const http = require('http');
const port = process.env.PORT || 1337;

const requestHandler = (req, res) => {
  res.end('Server is running');
};

const server = http.createServer(requestHandler);

// @ts-ignore
server.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening on port ${port}`);
});
