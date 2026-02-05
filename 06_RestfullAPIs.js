const express = require('express');
const app = express();
const port = 3000;

let users = require('./MOCK_DATA.json');

// to read JSON data from request body
app.use(express.json());

/* ---------- GET ALL USERS ---------- */
app.get('/users', (req, res) => {
  res.json(users);
});

/* ---------- GET USER BY ID ---------- */
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return res.json(users[i]);
    }
  }

  res.send('User not found');
});

/* ---------- CREATE USER ---------- */
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    job_title: req.body.job_title
  };

  users.push(newUser);
  res.json(newUser);
});

/* ---------- UPDATE USER ---------- */
app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].first_name = req.body.first_name;
      users[i].last_name = req.body.last_name;
      users[i].email = req.body.email;
      users[i].gender = req.body.gender;
      users[i].job_title = req.body.job_title;

      return res.json(users[i]);
    }
  }

  res.send('User not found');
});

/* ---------- DELETE USER ---------- */
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
      return res.send('User deleted');
    }
  }

  res.send('User not found');
});

/* ---------- SERVER ---------- */
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});