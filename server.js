var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost/employees');


var Employee = mongoose.model('Employee', mongoose.Schema({

    name: String,
    dept: String,
    contact: Number,
    salary: Number
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/client'));

app.get('/employees', function (req, res) {

    Employee.find(function (err, employees) {
        if (err)
            res.send(err);
        res.json(employees);
    });
});

app.get('/employees/:id', function (req, res) {

    Employee.findOne({
        _id: req.params.id
    }, function (err, employees) {
        if (err)
            res.send(err);
        res.json(employees);
    });
});

app.post('/employees', function (req, res) {
    Employee.create(req.body, function (err, employees) {
        if (err)
            res.send(err);
        res.json(employees);

    });
});

app.delete('/employees/:id', function (req, res) {
    //console.log('-----------', req.params);
    Employee.findOneAndRemove({
        _id: req.params.id
    }, function (err, employees) {
        if (err)
            res.send(err);
        res.json(employees);
    });

});


app.put('/employees/:id', function (req, res) {

    var query = {
        name: req.body.name,
        dept: req.body.dept,
        contact: req.body.contact,
        salary: req.body.salary,
    };
    Employee.findOneAndUpdate({
        _id: req.params.id
    }, query, function (err, employees) {
        if (err)
            res.send(err);
        res.json(employees);
    });

});




app.listen(3000, function () {
    console.log('Server is running..');
});