var tableBody = document.querySelector(".table");
var gradeTable = new GradeTable (tableBody, pElement);
var header = document.querySelector(".header");
var pageHeader = new PageHeader(header);
var form = document.getElementById("main-form");
var gradeForm = new GradeForm(form);
var pElement = document.getElementById("p-element");
var app = new App(gradeTable, pageHeader, gradeForm);

app.start();
