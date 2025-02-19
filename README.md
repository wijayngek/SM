<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="login-body">

    <div class="login-container">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <p class="error" id="error-message">Invalid login credentials!</p>
        <button onclick="login()">Login</button>
    </div>

    <script>
        function login() {
            const validUsername = "admin";
            const validPassword = "admin";

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let errorMessage = document.getElementById("error-message");

            if (username === validUsername && password === validPassword) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to main website
            } else {
                errorMessage.style.display = "block";
            }
        }
    </script>

</body>
</html>
