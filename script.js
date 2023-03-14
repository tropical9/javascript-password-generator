
function generatePassword(length, lowercase, uppercase, numeric, special) {
    var charset = "";
    var password = "";
    
    // Add lowercase letters to the character set
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    
    // Add uppercase letters to the character set
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    // Add numeric characters to the character set
    if (numeric) {
      charset += "0123456789";
    }
    
    // Add special characters to the character set
    if (special) {
      charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
    
    // Generate the password
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    return password;
  }
  
  // Function to prompt the user for password criteria and generate a password
  function generatePasswordPrompt() {
    // Prompt for password length
    var length = prompt("Enter password length (must be between 8 and 128 characters):");
    
    // Validate password length
    if (length < 8 || length > 128) {
      alert("Invalid password length!");
      return;
    }
    
    // Prompt for character types
    var lowercase = confirm("Include lowercase letters?");
    var uppercase = confirm("Include uppercase letters?");
    var numeric = confirm("Include numbers?");
    var special = confirm("Include special characters?");
    
    // Validate character types
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("Must include at least one character type!");
      return;
    }
    
    // Generate password
    var password = generatePassword(length, lowercase, uppercase, numeric, special);

    var generatedPassword = document.getElementById("password");
  
    generatedPassword.append(password);

  }  
  // Add click event listener to generate password button
  var generateButton = document.getElementById("generate");
  generateButton.addEventListener("click", generatePasswordPrompt);
  