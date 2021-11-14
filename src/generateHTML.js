// html template for generation

// top of page
htmlStart = 
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

// bottom of page
htmlEnd = `<footer class="footer footer-bg" style="width: 100%;">
        <div class="text-white text-center">
            <h6>Created & Developed by Madeleine Cosway</h6>
        </div>
    </footer>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>

</html>`;

// export module 
module.exports = {
    htmlStart,
    htmlEnd,
};



