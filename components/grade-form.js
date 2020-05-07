class GradeForm {
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade){
    this.onSubmit = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    // console.log("hi");
  }
}
