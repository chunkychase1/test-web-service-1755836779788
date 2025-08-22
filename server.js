const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (_, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'Test Web Service'
  });
});

app.get('/', (_, res) => {
  res.json({ 
    message: 'Test Web Service is running!',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Test Web Service running on port ${port}`);
  console.log(`📍 Health check: http://localhost:${port}/health`);
});