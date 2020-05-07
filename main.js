var tableBody = document.querySelector(".table");
var newGradeTable = new GradeTable (tableBody);
var header = document.querySelector(".header");
var newPageHeader = new PageHeader(header);
var form = document.getElementById("main-form");
var newGradeForm = new GradeForm(form);

var newApp = new App(newGradeTable, newPageHeader, newGradeForm);

newApp.start();
