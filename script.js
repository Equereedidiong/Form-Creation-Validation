
// Setup andInitial Code Structure

document.addEventListener ('DOMContentLoaded', function() {

    const form = document.getElementById ("registration-form")
    const feedbackDiv = document.getElementById ("form-feedback")
});

// Form Submission and Event Prevention

form.addEventListener('submit', eventList => {

    eventList.preventDefault();

});

// Input Retrieval and Timing

document.getElementById ("username", function () {
 
   let usernameValue = username.value
   const username = usernameValue.trim();

});

document.getElementById ("email", function () {
 
    let emailValue = email.value
    const email = emailValue.trim();

});

document.getElementById ("password", function () {
 
    let passwordValue = password.value
    const password = passwordValue.trim();
    
});

//Validation Logic

let isValid = true;
const messages = []; 

if (username.length < 3) {

    isValid = false
    messages.push ('Your Username must be greater than 3 characters ');

}

if (!emailValue.value.includes('@') || !emailValue.value.includes('.')) {
    messages.push ('Email format invalid');
}

if (password.length <= 8) {
   isValid = false,
   messages.push('Password too weak');
}

feedbackDiv.style.display = block

if (isValid = true) {
    feedbackDiv.textContent = "Registration successful" 
    feedbackDiv.style.color = "#28a745"
}

//Displaying Feedback

if (!isValid) {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = '#dc3545'
    feedbackDiv.style.display = block
}