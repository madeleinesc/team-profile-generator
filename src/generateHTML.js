// html template

// top of page
const htmlStart = 
`<!DOCTYPE html>

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">

    <!-- css -->
    <link rel="stylesheet" href="./styles.css">

    <title>TEAM PROFILE</title>
</head>


<body>
    <header class="header-bg" style="width: 100%;">
        <div class="text-white text-center">
            <h1>My Team</h1>
        </div>
    </header>
    
    <div class="container">
        <div class="row">`;



// function to create bootstrap card
createCard = (role, name, email, id, specialAttr) => {
    return `<div class="col-sm-4 mt-5">
    <div class="card">
        <div class="card-header">
            <h5>${name}</h5>
            <h6><i>${role} </i></h6>
        </div>
        <div class="card-body">
            <p class="subtitle">ID: ${id}</p>
            <p class="subtitle">Email: ${email}</p>
            <p class="subtitle">${specialAttr}</p>
        </div>
    </div>
</div>`
}


// function to create special attribute part of card
createEmployeeCard = (employee) => {
     const role = employee.getRole();
    let specialAttr;

    // if manager, need office number
    if (role === 'Manager'){
        specialAttr = 'Office Number: ' + employee.getOfficeNo();
    }

    // if engineer, need github username
    if (role === 'Engineer'){
        specialAttr = 'Github: ' + employee.getGithub();
    }

    // if intern, need school name
    if (role === 'Intern'){
        specialAttr = 'School: ' + employee.getSchool();
    }

    return createCard(role, employee.getName(), employee.getEmail(), employee.getId(), specialAttr );

}


// to generate the team profile html
generateHtml = (teamArray) => {
    let html = htmlStart;
    
    // loop through the teamArray
    for (let index = 0; index < teamArray.length; index++) {
        // create a card for each team member 
        // to join all the cards together
        const employee = teamArray[index];
        const card = createEmployeeCard(employee);
        html += card;
    }

    return html;
}


// export module 
module.exports = {
    generateHtml
};



