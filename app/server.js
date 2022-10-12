'use strict';
const PORT = process.env.PORT;
const express = require('express');
const app = express();


console.log(PORT);

app.use(express.static('app/public'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});