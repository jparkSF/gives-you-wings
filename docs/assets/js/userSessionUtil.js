function onSignIn(googleUser){
  const profile  = googleUser.getBasicProfile();

  // console.log(profile)
  $(".g-signin2").css("display","none");
  $(".data").css("display", "block");
  $("#pic").attr("src", profile.getImageUrl());
  $("#email").text(`${profile.getEmail()}, ${profile.getName()}`);
  console.log(`email: ${profile.getEmail()}`)
  console.log(`name: ${profile.getName()}`)
  console.log(`id: ${profile.getId()}`)
  console.log(`given name: ${profile.getGivenName()}`)
  console.log(`family name: ${profile.getFamilyName()}`)
  console.log(`image url: ${profile.getImageUrl()}`)
  
} 


function onSignOut(){
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.disconnect().then(function(e){
    console.log(e);
    alert("Successfully signed out");

    $(".g-signin2").css("display", "block");
    $(".data").css("display", "none");

  })
}

