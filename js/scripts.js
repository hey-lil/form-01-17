$(document).ready(function() {
  
  $(".astroBranch.form-control.aries").click(function() {
    $("option.aries").removeClass();
    $("option.aries").addClass("#aries");
    $("option.aries").show(".quiz");
  });
});
