export default funciton HandleInputChange(){
  const checkInput = (value) => (value == '' || value == null || !value || value.length == 0);

  const handleInputChange = (e) => {
    e.preventDefault();
    var isValid = true;
    let formMap = new Map([
      ["First Name", document.getElementById("firstName").value],
      ["Last Name", document.getElementById("lastName").value],
      ["Email", document.getElementById("email").value],
      ["Institution", document.getElementById("institution").value],
      ["Job Title", document.getElementById("jobTitle").value],
      ["Message", document.getElementById("message").value],
    ]);
    for (let [key, value] of formMap.entries()){
        if (checkInput(value)){
          let errorMsg = key + ' field cannot be empty!'
          console.log("The field " + key + " is empty" + value);
          //ssetValidation({isValid:false});
          isValid = false;
          alert(errorMsg);
          break;
        }
    };
    try{
      if (isValid) {
        sendEmail(e);
      }
    }
      catch(error){
        alert(error);
    }
  };
}
