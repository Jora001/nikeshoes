document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    let username = document.querySelector('.username').value;
    let password = document.querySelector('[name="password"]').value;
    
    console.log('Username: ', username);
    console.log('Password: ', password);
    
});
