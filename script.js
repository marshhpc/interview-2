// function loops through all the elements in the form that was passed over to the function
function loopForm(form) {
   let radioResults = "Selected Answers: ";
   for (let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].type == "radio") {
         if (form.elements[i].checked == true) {
            radioResults += form.elements[i].value + " ";
         }
      }
   }
   console.log(radioResults);
   let correctAnswers = "Correct Answers: 1984, Bulls, Nike, Baseball, 6";
   console.log(correctAnswers);
}
