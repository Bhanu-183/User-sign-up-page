document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  var fname=document.getElementById('name').value;
  var lname=document.getElementById('lastname').value;
  var email=document.getElementById('mail').value;
  var pass=document.getElementById('password').value;
  if(fname=='')
  {
      document.getElementById('fname').style.display='block';
  }
  else
  {
    document.getElementById('fname').style.display='none';
  }
  if(lname=='')
  {
      document.getElementById('lname').style.display='block';
  }
  else
  {
    document.getElementById('lname').style.display='none';
  }
  if(email=='')
  {
    document.getElementById('email').style.display='block';
  }
  else
  {
    document.getElementById('email').style.display='none';
  }
  if(pass=='')
  {
      document.getElementById('pass').style.display='block';
  }
  else
  {
    document.getElementById('pass').style.display='none';
  }

}

