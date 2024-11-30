document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();


      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;


      //mock credentials
      const mockUsername = "user";
      const mockPassword = "123";


      if (username === mockUsername && password === mockPassword) {
        alert("login successful!");
        window.location.href = "https://www.scaler.com/topics/"; //redirect URL
      } else {
        alert("invalid username or password.");
      }
      
});
