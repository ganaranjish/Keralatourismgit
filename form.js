function lvalidate()
{
    var email = document.getElementById("Email");
    var password = document.getElementById("Password");
    var error1 = document.getElementById("Error1");
    var error2 = document.getElementById("Error2");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    error1.innerHTML="";
    error1.style.color="White";
    error2.innerHTML="";
    error2.style.color="White";
    email.style.borderColor="green";
    password.style.borderColor="green";
    var status_check=0;
    if(regexp.test(email.value)!="1")
    {
        error1.innerHTML ="Invalid email address";
        error1.style.color="red";
        email.style.borderColor="red";
        status_check = 1
    }
    if(password.value =="")
    {
        error2.innerHTML=("Password Is Invalid.");
        error2.style.color="red";
        password.style.borderColor="red";
        status_check = 1
    }
    if(status_check == 1)
      {
        return false;
      }
      if (status_check == 0)
      {
        return true;
      }
};


function checkpassword()
{
  var spwd1= document.getElementById("password1");
  //alert('ttttttttttttttttttt');

  var strengthbar = document.getElementById("meter");
  //strengthbar.value = 25;

  var strength = 0;
  

  if (spwd1.value.match(/[a-z]+/)) 
  {
    strength += 1;
  }
  if (spwd1.value.match(/[A-Z]+/)) 
  {
    strength += 1;
  }
  if (spwd1.value.match(/[0-9]+/)) 
  {
    strength += 1;
  }
  if (spwd1.value.match(/[$@#&!]+/)) 
  {
    strength += 1;
  }
  if(spwd1.value.length<8)
  {
    strengthbar.value = 25;
    indicator.innerHTML="your password is weak";
    indicator.style.color="red";
    
  }

  //alert(strength);

  switch (strength) 
  {
    case 0:
      strengthbar.value = 0;
      break;

    case 1:
      strengthbar.value = 25;
      indicator.innerHTML="Password is weak";
      indicator.style.color="red";
      spwd1.style.borderColor="red";
      break;
     
    case 2:
      strengthbar.value = 50;
      indicator.innerHTML="Password is medium";
      indicator.style.color="orange";
      spwd1.style.borderColor="orange";
      break;

    case 3:
      strengthbar.value = 75;
      indicator.innerHTML="Password is strong";
      indicator.style.color="green";
      spwd1.style.borderColor="green";
      break;

    case 4:
      strengthbar.value = 100;
      indicator.innerHTML="Password is very strong";
      indicator.style.color="green";
      spwd1.style.borderColor="green";
      break;
  }
};

function svalidate()
{
var uname = document.getElementById("uname")
var smail = document.getElementById("semail");
var spwd1= document.getElementById("password1");
var spwd2 = document.getElementById("password2");
var phone = document.getElementById("phone");

    error1.innerHTML="";
    error1.style.color="White";
    error2.innerHTML="";
    error2.style.color="White";
    error3.innerHTML="";
    error3.style.color="White";
    error4.innerHTML="";
    error4.style.color="White";
    error5.innerHTML="";
    error5.style.color="White";

    uname.style.borderColor="green";
    smail.style.borderColor="green";
    phone.style.borderColor="green";
    spwd1.style.borderColor="green";
    spwd2.style.borderColor="green";
    



    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regpsr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    var status_check=0;
     if(uname.value.trim()== "")
     {
        error1.innerHTML="Username cannot be blank";
        error1.style.color="red";
        uname.style.borderColor="red";
        status_check = 1
     }
      if(regexp.test(smail.value)!="1")
      {

        error2.innerHTML="Email Is Invalid";
        error2.style.color="red";
        smail.style.borderColor="red";
        status_check = 1
        
      }
     if(regphone.test(phone.value)!="1")
      {
        error3.innerHTML="Please enter a valid phone number";
        error3.style.color="red";
        phone.style.borderColor="red";
        status_check = 1
      }
     if(regpsr.test(spwd1.value)!="1")
      {
        error4.innerHTML="Password should be of minimum 8 characters, at least one uppercase, one lower case, special character and one number";
        error4.style.color="red";
        spwd1.style.borderColor="red";
        status_check = 1
        
      }
      //alert(spwd1.value+' -- '+spwd2.value)
      if(spwd1.value!=spwd2.value)
      {
        error5.innerHTML="Passwords Doesnt Match. Please Re-enter";
        error5.style.color="red";
        spwd2.style.borderColor="red";
        status_check = 1
      }


      if(status_check == 1)
      {
        return false;
      }
      if (status_check == 0)
      {
        return true;
      }
};

/*var indicator = document.querySelector(".indicator");
  var input = document.querySelector("input");
  var weak = document.querySelector(".weak");
  var medium = document.querySelector(".medium");
  var strong = document.querySelector(".strong");
  var text = document.querySelector(".text");
  var showBtn = document.querySelector(".showBtn");
  var regExpWeak = /[a-z]/;
  var regExpMedium = /\d+/;
  var regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
  function trigger(){
    if(input.value != ""){
      indicator.style.display = "block";
      indicator.style.display = "flex";
      if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
      if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
      if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
      if(no==1){
        weak.classList.add("active");
        text.style.display = "block";
        text.textContent = "Your password is too week";
        text.classList.add("weak");
      }
      if(no==2){
        medium.classList.add("active");
        text.textContent = "Your password is medium";
        text.classList.add("medium");
      }else{
        medium.classList.remove("active");
        text.classList.remove("medium");
      }
      if(no==3){
        weak.classList.add("active");
        medium.classList.add("active");
        strong.classList.add("active");
        text.textContent = "Your password is strong";
        text.classList.add("strong");
      }else{
        strong.classList.remove("active");
        text.classList.remove("strong");
      }
      showBtn.style.display = "block";
      showBtn.onclick = function(){
        if(input.type == "password"){
          input.type = "text";
          showBtn.textContent = "HIDE";
          showBtn.style.color = "#23ad5c";
        }else{
          input.type = "password";
          showBtn.textContent = "SHOW";
          showBtn.style.color = "#000";
        }
      }
    }else{
      indicator.style.display = "none";
      text.style.display = "none";
      showBtn.style.display = "none";
    }
  }*/