// undefined data type

function checkUserInfo(name, email, age) {
    if(name == undefined) {
        console.log('Name is not provided');
    }

    if(email == undefined) {
        console.log('Email is not provided');
    }

    if(age == undefined) {
        console.log('Age is not provided');
    }

    if(name && email && age) {
        console.log('All information is provided');
    }

}

checkUserInfo(); // all is missing
checkUserInfo('Tayyab', 'tayyab@gmail.com'); // age is missing
checkUserInfo('Tayyab', 'tayyab@gmail.com', 21) // all is provided 