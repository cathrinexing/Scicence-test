$(document).ready(function() {

  $("#btn_brain").click(function() {
    // $(".lung_img").hide();
    // $(".eye_img").show();
    // $(".lung_img").css("opacity", "0");
    // $(".brain_img").css("opacity", "1");
    // $("btn_brain").removeClass("ally-focus-within");
      $("#btn_brain").addClass("ally-focus-within");

$(".layers").css("opacity", "0");
    // $(".layers").animate({
    //   opacity: "0"
    // });
    $(".layers").css("opacity", "0");
    $(".brain_img").animate({
      opacity: "1"
    });
  });
  $("#btn_eyes").click(function() {
    // $(".layers").animate({
    //   opacity: "0"
    // });
        $(".layers").css("opacity", "0");
    $(".eyes_img").animate({
      opacity: "1"
    });

  });
  $("#btn_nose").click(function() {
      $(".layers").css("opacity", "0");
    // $(".layers").animate({
    //   opacity: "0"
    // });
    $(".nose_img").animate({
      opacity: "1"
    });

  });
  $("#btn_lungs").click(function() {
          $(".layers").css("opacity", "0");
    // $(".layers").animate({
    //   opacity: "0"
    // });
    $(".lungs_img").animate({
      opacity: "1"
    });
  });
  $("#btn_heart").click(function() {
      $(".layers").css("opacity", "0");
    // $(".layers").animate({
    //   opacity: "0"
    // });
    $(".heart_img").animate({
      opacity: "1"
    });
  });
  $("#btn_liver").click(function() {
      $(".layers").css("opacity", "0");
    // $(".layers").animate({
    //   opacity: "0"
    // });
    $(".liver_img").animate({
      opacity: "1"
    });
  });
  $("#btn_kidneys").click(function() {
      $(".layers").css("opacity", "0");
    // $(".layers").animate({
    //   opacity: "0"
    // });
    $(".kidneys_img").animate({
      opacity: "1"
    });
  });
  $("#btn_gut").click(function() {
          $(".layers").css("opacity", "0");
    // $(".layers").animate({
    //   opacity: "0"
    // });
    $(".gut_img").animate({
      opacity: "1"
    });

    // $(".brain_img").animate({
    //   opacity: "0"
    // });


  });

// var h = $('#graphic_individuals_left').height();
//   console.log(h);
//   $('#row_graphic').height(h);




});


function displayWindowSize(){
     // Get width and height of the window excluding scrollbars
     var h = $('#graphic_individuals_left').height();
       console.log(h);
     // var w = document.documentElement.clientWidth;


     // Display result inside a div element
     document.getElementById("result").innerHTML = "Width: " + "w" + ", " + "Height: " + h;
 }

 // Attaching the event listener function to window's resize event
 window.addEventListener("resize", displayWindowSize);

 // Calling the function for the first time
 displayWindowSize();

 $('#row_graphic').height(h);
