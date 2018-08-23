const express = require('express'),
      app = express(),
      User = require('../models/user'),
      bcrypt = require('bcrypt'),
      _ = require('underscore');

app.get('/users', (req, res) => {
    res.send('get users');
});

app.post('/users', (req, res) => {
    let body = req.body;
    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    });
});

app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'lastname', 'email', 'img', 'role', 'state']);
    let ops = {
        new: true,
        runValidators: true
    };

    User.findByIdAndUpdate(id, body, ops, (err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        });
    });
});

app.delete('/users', (req, res) => {
    res.send('delete users');
});

module.exports = app;