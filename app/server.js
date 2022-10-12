'use strict';
const API = process.env.TODOAPI || 'http://localhost:3001/api';
const PORT = process.env.PORT;
const express = require('express');
const app = express();


console.log('API:', API, 'PORT:', PORT);

app.use(express.static('app/public'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});