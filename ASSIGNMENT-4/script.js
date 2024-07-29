function showSignupPage() {
    document.getElementById("getting-started-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
  }
  
  function signup() {
    // Here you can add code to handle signup details.
    // For simplicity, we'll just move to the login page.
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("login-page").style.display = "block";
  }
  
  function login() {
    // Here you can add code to handle login verification.
    // For simplicity, we'll just move to the welcome page.
    document.getElementById("login-page").style.display = "none";
    document.getElementById("welcome-page").style.display = "block";
  }
  
  function logout() {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("getting-started-page").style.display = "block";
    document.getElementById("third-section").style.display = "block";
  }