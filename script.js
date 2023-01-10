const inputs =document.querySelectorAll("input"),
 button = document.querySelector("button")
 console.log(inputs,button);

// iterate over all inputs
inputs.forEach((input, index1) => {
    input.addEventListener("keyup",(e) => {

        //this code gets the current input element and stores it in  the currentInput variable
        //this code gets the next sibiling element of the current input element and stores it in the nextInput 
         //this code gets the previous sibiling element of the current input element and stores it in the preInput
        const currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        //if the value is more than one character then clear it
        if(currentInput.value.length > 1){
            currentInput.value = "";
            return;
        }

        //if the next input is disabled and the current value is not empty
         //enable the next input and focus on it
         if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
         }

         //if the backspace key is pressed
          if(e.key === "Backspace"){
            //iterate over all inputs again
            inputs.forEach((input, index2) =>{
                if(index1 <= index2 && prevInput){
                   input.setAttribute("disabled", true);
                   currentInput.value = "";
                   prevInput.focus();   
                }
            }) 
          }

          if(inputs[3].disabled && inputs[3].value !== ""){
            button.classList.add("active");
            return;
          }
          button.classList.remove("active");
    })
})

 //focus the first input which index is 0 on window load
 window.addEventListener("load", ()=> inputs[0].focus());