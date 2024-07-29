document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const welcomeContainer = document.getElementById("welcome-container");
    const welcomeMessage = document.getElementById("welcome-message");
    const loginContainer = document.getElementById("login-container");
    const signupContainer = document.getElementById("signup-container");
    const goToSignupLink = document.getElementById("go-to-signup");
    const goToLoginLink = document.getElementById("go-to-login");
  
    const showSignup = () => {
      loginContainer.style.display = "none";
      signupContainer.style.display = "block";
    };
  
    const showLogin = () => {
      signupContainer.style.display = "none";
      loginContainer.style.display = "block";
    };
  
    const showWelcome = (username) => {
      welcomeMessage.textContent = `Welcome, ${username}! You are logged in successfully.`;
      loginContainer.style.display = "none";
      signupContainer.style.display = "none";
      welcomeContainer.style.display = "block";
    };
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
      if (username === "Sonal" && password === "hello") {
        showWelcome(username);
      } else {
        alert("Login not successful!!");
      }
    });
  
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("signup-username").value;
      const password = document.getElementById("signup-password").value;
      if (username === "Sanjana" && password === "hello") {
        showWelcome(username);
      } else {
        alert("Signup not successful!!");
      }
    });
  
    goToSignupLink.addEventListener("click", (event) => {
      event.preventDefault();
      showSignup();
    });
  
    goToLoginLink.addEventListener("click", (event) => {
      event.preventDefault();
      showLogin();
    });
  });