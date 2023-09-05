const URL = 'https://jsonplaceholder.typicode.com/users';

let firstName = document.getElementById('name');
let lastName = document.getElementById('last-name');
let birthDate = document.getElementById('birth-date');
let btn = document.getElementById('submit');

let data = {};

btn.addEventListener('click', () => {
    if( !firstName.value || !lastName.value || !birthDate.value ) {
        alert('Debe ingresar todos los datos');
    } else {

        data = {
            nombre: firstName.value,
            apellido: lastName.value,
            nacimiento: birthDate.value
        }
    
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .catch((error) => console.log("Error: ", error))
        .then((response) => console.log("Success: ", response));

        firstName.value = '';
        lastName.value = '';
        birthDate.value = '';
    }
});