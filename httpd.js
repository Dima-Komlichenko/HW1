const express = require("express");
const app = express();

const controllerTeachers = require("./Controllers/TeacherController");
const controllerStudents = require("./Controllers/StudentsController");
const controllerGroups = require("./Controllers/GroupsController");

app.route("/Teachers")
    .get(controllerTeachers.get)
    .post(controllerTeachers.post);

app.route("/Students")
    .get(controllerStudents.get)
    .post(controllerStudents.post);

app.route("/Groups")
    .get(controllerGroups.get)
    .post(controllerGroups.post);

app.get('/', function (req, res) {
    res.send('index');
});

app.listen(3000);






