class GradeTable {
  constructor (tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    var tBody = document.querySelector(".tbody");
    var pElement = document.getElementById("p-element");
    tBody.textContent = "";
    for (var i = 0; i < grades.length; i++){
      tBody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }
    if (!grades.length){
      pElement.classList.remove("d-none")
    } else {
      pElement.classList = "d-none";
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("btn", "btn-danger")
    col1.textContent = data.name;
    col2.textContent = data.course;
    col3.textContent = data.grade;
    col4.append(deleteButton);
    row.append(col1, col2, col3, col4);
    deleteButton.addEventListener("click", function(){
      deleteGrade(data.id);
    })
    return row;
  }
}
