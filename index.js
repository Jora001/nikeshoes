    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally

            var username = document.querySelector('.username').value;
            var password = document.querySelector('[name="password"]').value;

            console.log('Username: ', username);
            console.log('Password: ', password);


            document.getElementById('loginForm').reset();
        });
    });
