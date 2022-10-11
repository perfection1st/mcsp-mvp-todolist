require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
const pg = require('pg');
const { Client } = pg;
const PORT = 3001;


const client = new Client({
  connectionString: process.env.PGCONNECT
});

client
  .connect()
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error('Database connection failed:', err));

app.route('/api')
.get((req, res) => {
      client.query('SELECT * FROM todo')
      .then (result => {
          res.send(result.rows);
      })
      .catch(err => {
          console.log(err);
      })
});

app.listen(PORT, (req, res) => {
  console.log('Server started, listening on port', PORT);
});