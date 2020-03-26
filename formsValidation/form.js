// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const adress = document.getElementById('adress');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// form.addEventListener('button', (e) => {
//     let message = []
//     if (name.value == '' || name.value == null) {
//         message.push("name required")
//     }
//     e.preventDefault()
// })


// function myFunction() {
//     if (name.value == '' || name.value == null) {
//         alert("Hello! I am an alert box!");
//     }
// }

function validateform() {
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid  e-mail  \n atpostion:" + atposition + "\n dotposition:" + dotposition);
        return false;
    }
}