function onSignIn(googleUser){
  const profile  = googleUser.getBasicProfile();

  // console.log(profile)
  $(".g-signin2").css("display","none");
  $(".data").css("display", "flex");
  $("#pic").attr("src", profile.getImageUrl());
  $("#name").text(`${profile.getName()}`);
  // $(".container").css("display", "block")

  // console.log(`email: ${profile.getEmail()}`)
  // console.log(`name: ${profile.getName()}`)
  // console.log(`id: ${profile.getId()}`)
  // console.log(`given name: ${profile.getGivenName()}`)
  // console.log(`family name: ${profile.getFamilyName()}`)
  // console.log(`image url: ${profile.getImageUrl()}`)
  
} 


function onSignOut(){
  const auth2 = gapi.auth2.getAuthInstance();
  let response = confirm("Do you want to sign out?")
  if (response){
    auth2.disconnect().then(function (e) {
      // console.log(e);
      $(".g-signin2").css("display", "block");
      $(".data").css("display", "none");
      // $(".container").css("display", "none")
    })
  }
}

