
	//username//
	const usernameInput = document.getElementById("username");
  const usernaerror = document.getElementById("usernameError");

	usernameInput.addEventListener("keyup", (event) => {
	const username = event.target.value;
	if (username.length < 3 ) {
    usernameInput.style.border = '3px solid red';
    usernaerror.innerHTML = 'Username error';
    usernaerror.style.color = 'red';
    usernaerror.style.display = 'block';
	} else {
    usernameInput.style.border = '3px solid green';
    usernaerror.style.display = 'none';
	}
	});
    //email//
    
        var emailInput = document.getElementById("email");
        var EmailError = document.getElementById('EmailError');
emailInput.addEventListener("keyup", (event) => {
  const email = event.target.value;
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
   
    emailInput.style.border = '3px solid red';
    EmailError.style.color = 'red';
    EmailError.innerHTML = 'Email error ';
    EmailError.style.display='block';
  } else {
   
    emailInput.style.border = '3px solid green';
    EmailError.style.display='none';
   
  }
});
    

    //password//
function validatePassword() {
   
    var password = document.getElementById('password');
    var passwordError = document.getElementById('passworderror');
    if (password.value.length < 8 || !/\d/.test(password.value) || !/\W/.test(password.value)) {
      
      password.style.border = '3px solid red';
      passwordError.innerHTML = 'Password must have 8 characters and (12345-?/+.]) ';
      passwordError.style.display = 'block';
    } 
    else {
      password.style.borderColor = 'green';
      passwordError.style.display = 'none';
      
    }
  }
	//passwordCP//
  function validatecp() {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('cp');
    var confirmPasswordError = document.getElementById('cp-error');
  
      if (password.value !== confirmPassword.value) {
        
        confirmPassword.style.border = '3px solid red';
        confirmPasswordError.innerHTML = 'Passwords not identical';
        confirmPasswordError.style.display = 'block';
      } 
      else {
        confirmPassword.style.borderColor = 'green';
        confirmPasswordError.style.display = 'none';
        
      }
    }
    

  function clic(){
    const usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('cp');
    var boutonc = document.getElementById('bouton');
    if( usernameInput.value !=''&& emailInput.value!=''&& password.value!=''&& confirmPassword.value!=''){
      document.location.href="home.html";
    }
    else{
        
        alert("Please complete the following!!!!");
    }

  }  
	
	

