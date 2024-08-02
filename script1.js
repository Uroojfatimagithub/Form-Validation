const form=document.querySelector("#Create_Account_form");
const usernameInput=document.querySelector("#username");
const emailInput = document.querySelector("#email");
 const passwordInput = document.querySelector("#password");
 const confirm_password_Input=document.querySelector("#confirm-password");
 form.addEventListener( "submit", ( event )=> {
    validateform();
    console.log(isValidateForm());
    if(isValidateForm()==true){
        form.submit(); 
    }else{
     
      event.preventDefault(); //this will stop submitting our form
    }
 });
 function isValidateForm(){
   const inputContainers= form.querySelectorAll('.input-group');
   let result=true;
   inputContainers.forEach((container)=>{
   if(container.classList.contains('error')){
      result=false;
   }
   });
       return result;
}
 function validateform(){
    //USERNAME first check if the username input field contain any value or not if not then call error next check k length between 5 and 15 ho and then valid else statement that if user enters the valid value
    if(usernameInput.value.trim()==''){  
        setError(usernameInput,'Username cannot be empty');}
        else if(usernameInput.value.trim( ).length < 5 || usernameInput.value.trim().length>15)
        {   
         setError(usernameInput, 'Username should contain between 5 and 15 characters');
         }
         else{
            setSuccess(usernameInput);
         }
    //EMAIL
    if(emailInput.value.trim()==''){  
      setError(emailInput,'Provide Email Adress');}
      else if(isEmailValid(emailInput.value))
      {
         setSuccess(emailInput);
      
      }
       else{
         setError(emailInput,"Invalid Email Format");
          }
    //PASSWORD
    if(passwordInput.value.trim()==''){  
      setError(passwordInput,'Password cannot be empty');}
      else if(passwordInput.value.trim( ).length < 6 || passwordInput.value.trim().length>20)
      {   
       setError(passwordInput, 'Password should contain between 6 and 20 characters');
       }
       else{
          setSuccess(passwordInput);
       }
    //CONFIRM PASSWORD
    if(confirm_password_Input.value.trim()==''){
      setError(confirm_password_Input, 'Password can not be empty');}
      else if(confirm_password_Input.value.trim()==passwordInput.value){
         setSuccess(confirm_password_Input);
      }
      else{
         setError(confirm_password_Input, 'Password does not match');
      }
 }
 function setError(element,errorMessage){
    const parent=element.parentElement;
    if(parent.classList.contains("success")){
     parent.classList.remove('success');}
    parent.classList.add( 'error' );//adding a class to show that there is an error in this element 
    const paragraph=parent.querySelector('p');//selecting the
    paragraph.textContent=errorMessage;//changing the text of the paragraph to show the error message
 }
 function setSuccess(element){
   const parent=element.parentElement;
   if(parent.classList.contains("error")){
      parent.classList.remove('error');}
   parent.classList.add( 'success');
 }
 function isEmailValid(email){
   const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   return reg.test(email);
 }
 //now to submit values on the next page we need to provide action attribute in action attribute we have to give url else that form is submitted to the same page now to submit the form we have to make another html and javascript file