'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const port = 3021;
const cors = require('cors');

const mysqlConn = mysql.createConnection({
    user: 'root',
    password: 'root',
    host: 'localhost',
    database: 'shelter'
});

mysqlConn.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('db conn');
    }
})


app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/', (req, res) => {
    if (req.body.name !== '' || req.body.age !== '') {
        mysqlConn.query('INSERT INTO dogs(name, age, date, hashome) VALUES(?, ?, ?, ?)',
            [req.body.name, req.body.age, new Date(req.body.date), req.body.hashome],
            (err, docs) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                } else {
                    res.status(200).json(docs);
                }
            }
        )
    } else {
        res.status(500).json({ error: 'missing fields' });
    }
})

app.post('/form', (req, res) => {
    console.log(req.body);
    res.json({ ...req.body, haho: 'from backend' });
});

app.delete('/delete/:id', (req, res) => {
    mysqlConn.query('SELECT * FROM dogs where id = ?',
        [req.params.id],
        (err, dog) => {
            if (err) {
                res.status(500).json(err);
            } else {
                mysqlConn.query('DELETE FROM dogs where id = ?',
                    [req.params.id],
                    (err, docs) => {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            docs.affectedRows !== 0 ?
                                res.status(200).json({ message: dog }) :
                                res.status(400).json({ message: `no such dog` });
                        }
                    }
                )
            }
        }
    )
})

app.patch('/takeHome/id', (req, res) => {
    mysqlConn.query('UPDATE dogs SET hashome = TRUE where id = ?',
        [req.params.id],
        (err, docs) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(docs);
            }
        }
    )
})

app.get('/getDogs', (req, res) => {
    mysqlConn.query('SELECT * FROM dogs',
        (err, docs) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(docs);
            }
        }
    )
})

app.listen(port);