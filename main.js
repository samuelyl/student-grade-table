var tableBody = document.querySelector(".table");
var gradeTable = new GradeTable (tableBody);
var header = document.querySelector(".header");
var pageHeader = new PageHeader(header);
var form = document.getElementById("main-form");
var gradeForm = new GradeForm(form);

var app = new App(gradeTable, pageHeader, gradeForm);

app.start();
