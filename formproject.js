
  function validateFirstName () { //This function validates the first name to the assigned pattern
    var first = document.getElementById("firstname").value;
    var regex = /^[a-zA-Z]{2,15}$/ ;

    if(regex.test(first)){
    document.getElementById("firstprompt").style.color= "green";
    document.getElementById("firstprompt").innerHTML = "<strong>Valid name</strong>";
    return (true);
   }
    else{
    document.getElementById("firstprompt").style.color="red";
    document.getElementById("firstprompt").innerHTML = "<strong>Please use only letters. 2-15.</Strong>";
    return (false);
   }
 }

 function validateLastName () {//This function validates the last name to the assigned pattern
   var last = document.getElementById("lastname").value;
   var regex = /^[a-zA-Z]{2,20}$/ ;

   if(regex.test(last)){
   document.getElementById("lastprompt").style.color= "green";
   document.getElementById("lastprompt").innerHTML = "<strong>Valid last name</strong>";
   return (true);
   }
   else{
   document.getElementById("lastprompt").style.color="red";
   document.getElementById("lastprompt").innerHTML = "<strong>Please use only letters. 2-20.</strong>";
   return (false);
   }
  }

function validateEmail () {//This function validates the email to the assigned pattern
  var email = document.getElementById("useremail").value;
  var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(regex.test(email)){
  document.getElementById("emailprompt").style.color= "green";
  document.getElementById("emailprompt").innerHTML = "<strong>Valid email</strong>";
  return (true);
 }
  else{
  document.getElementById("emailprompt").style.color="red";
  document.getElementById("emailprompt").innerHTML = "<strong>Please use a valid email format.</strong>";
  return (false);
 }
}

function catPic() {//This displays a cat photo when clicked
  var cat = "https://pbs.twimg.com/profile_images/652939132432457728/k_q3hbFR_400x400.jpg";
  var img = document.getElementById('catpic')
  img.src = cat.replace('30x30', '100x100');
  img.style.display = "block";
}
function dogPic() {//This displays a dog photo when clicked
  var dog = "https://i.pinimg.com/474x/72/e4/60/72e46075d2e75bc4a36883393add2750.jpg";
  var img2 = document.getElementById('dogpic')
  img2.src = dog.replace('30x30', '100x100');
  img2.style.display = "block"
  
}
function dogandcatPic() {//This displays a cat and dog photo when clicked
  var dogcat = "https://cdn177.picsart.com/225027455034202.jpg?type=webp&to=crop&r=256";
  var img3 = document.getElementById('dogcatpic')
  img3.src = dogcat.replace('30x30', '100x100');
  img3.style.display = "block"
  
}
