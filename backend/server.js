const express = require("express");
const mysql = require("mysql");

const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the URL of your React app.
  optionsSuccessStatus: 200, // Some legacy browsers (IE11) may choke on 204.
};

app.use(cors(corsOptions));

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "jabee",
});


// Submiting and Fetching data 
app.post('/Contacts', (req, res) => {
    const { email, firstName, lastName, suggestion } = req.body;
  
    const sql = 'INSERT INTO suggestions (email, first_name, last_name, suggestion) VALUES (?, ?, ?, ?)';
    db.query(sql, [email, firstName, lastName, suggestion], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to submit suggestion' });
      } else {
        res.status(200).json({ message: 'Suggestion submitted successfully' });
      }
    });
  });
  
  app.get('/Contacts', (req, res) => {
    // Fetch suggestions from the database
    db.query('SELECT * FROM suggestions', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch suggestions' });
      } else {
        res.status(200).json(result);
      }
    });
  });
  

// Edit and delete function
// Update a suggestion
app.put('/Contacts/:id', (req, res) => {
    const id = req.params.id;
    const { email, firstName, lastName, suggestion } = req.body;

    const sql = 'UPDATE suggestions SET email=?, first_name=?, last_name=?, suggestion=? WHERE id=?';
    db.query(sql, [email, firstName, lastName, suggestion, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Failed to update suggestion' });
        } else {
            res.status(200).json({ message: 'Suggestion updated successfully' });
        }
    });
});

// Delete a suggestion
app.delete('/Contacts/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM suggestions WHERE id=?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Failed to delete suggestion' });
        } else {
            res.status(200).json({ message: 'Suggestion deleted successfully' });
        }
    });
});



// Authentication
app.post('/Register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        console.log(err);
    })
})
app.post('/Login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if (err) {
            res.send({err: err});
        }
        if (result) {
            res.send(result);
        } else {
            res.send({message: "Wrong username/password combination!"});
        }
    })
})



app.listen(3001, () => {
    console.log("running server");
})