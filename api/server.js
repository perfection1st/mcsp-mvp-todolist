const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors({ origin: '*' }));
app.use(express.json());
const pg = require('pg');
const { Client } = pg;
const PORT = 3001;

console.log(process.env.PGCONNECT);

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
})
.post((req, res) => {
  client.query(`INSERT INTO todo (list_item) VALUES ($1)`, [req.body.list_item])
  .then(result => {
      res.status(201);
  })
  .catch(err => {
      console.error(err);
  }) 
});
/*
.put((req, res) => {
  client.query(`UPDATE todo SET list_item = $1 WHERE id = $2`, [req.body.list_item, req.body.id])
  .then(result => {
      res.status(201);
  })
  .catch(err => {
      console.error(err);
  }) 
});
*/

app.listen(PORT, (req, res) => {
  console.log('Server started, listening on port', PORT);
});