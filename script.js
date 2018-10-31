
//$(document).ready() is cross-browser
//Runs script to initialize jquery functionality.

$(document).ready( function() {
  var idx = 0;
  var galleryTxt = "<p class='component'>Click the image to view the next photo</p>"
  var home = "home.html";
  var about = "about.html";
  var services = "services.html";
  var employment = "employment.html";
  var contact = "contact.html";


  var speed = 3000;
  var fadeSpeed = 500;
  var timer;
  resetTimer();

  function startTimer() {
   //debug console.log("start timer ran") 0 3 4 5 15
    if(idx >= images.length - 7){
      console.log("THIS IS THE TRIGGER TO RESET THEM IMAGES " + idx)
      idx = 0;
      $( "#componentDisplay" ).fadeOut(fadeSpeed, "swing", function(){
        $( "#componentDisplay" ).html(images[idx]).fadeIn(fadeSpeed, "swing");
      });
    }
    else{
    console.log("IDX DISPLAYER " + idx)
      $( "#componentDisplay" ).fadeOut(fadeSpeed, "swing", function(){
      $( "#componentDisplay" ).html(images[idx]).fadeIn(fadeSpeed, "swing");
      //Debug  console.log("Should change image. Idx should be + 1: " + idx)
      });
    }
    idx++;  
  }
    
  function stopTimer() {
    clearInterval(timer);
  } 

  function resetTimer() {
    idx = 0;
    stopTimer();
    timer = setInterval(startTimer, speed);
  }

  var images = new Array()
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image()
      images[i].className = "componentImg"
      images[i].src = preload.arguments[i]
    }
  }
  preload(
    "assets/clearing2Optimized.jpg",
    "assets/clearing3Optimized.jpg",
    "assets/foundationcut11Optimized.jpg",
    "assets/foundationcut12Optimized.jpg",
    "assets/foundationcut13Optimized.jpg",
    "assets/foundationcut14Optimized.jpg",
    "assets/septic15Optimized.jpg",
    "assets/septic16Optimized.jpg",
    "assets/septic17Optimized.jpg",
    "assets/septic18Optimized.jpg",
    "assets/septic19Optimized.jpg",
    "assets/clearing4Optimized.jpg",
    "assets/clearing5Optimized.jpg",
    "assets/clearing6Optimized.jpg",
    "assets/drainage7Optimized.jpg",
    "assets/drainage8Optimized.jpg",
    "assets/septic20Optimized.jpg"
  )
  
  // border state on page change $( "#home" ).css({"border-bottom":"3px solid #ff0000","padding-bottom":"7px"})       
  //Content Displayer 
  $("#componentDisplay2").load(home);
  $("#componentDisplay").html(images[0]);       
  $("#logoImg").click(function() {
    //history.pushState(null, null, 'http://burnsexcavation.com/home');
    $("#componentDisplay").html(images[0]);       
      $( "#componentDisplay" ).off('click');
      resetTimer();
      $("#componentDisplay2").load(home);   
    }); 
    $( "#home" ).click(function() {
      //history.pushState(null, null, 'http://burnsexcavation.com/home');
      $("#componentDisplay").html(images[0]);       
      resetTimer();
      $( "#componentDisplay" ).off('click');
      $("#componentDisplay2").load(home);        
      });
      $( "#about" ).click(function() {    
        stopTimer();
        //history.pushState(null, null, 'http://burnsexcavation.com/about');
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[1])
        $("#componentDisplay2").load(about);        
      });
      $( "#services" ).click(function() {
        stopTimer();
        //history.pushState(null, null, 'http://burnsexcavation.com/services');
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[2])    
        $("#componentDisplay2").load(services);        
      });
      $( "#employment" ).click(function() {
        stopTimer();        
        //history.pushState(null, null, 'http://burnsexcavation.com/employment');
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[3])       
        $("#componentDisplay2").load(employment);        
      });
      $( "#contact" ).click(function() {
        stopTimer();      
        //history.pushState(null, null, 'http://burnsexcavation.com/contact');
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[4]) 
        $("#componentDisplay2").load(contact);        
      });
      $( "#gallery" ).click(function() {
        idx = 11;
        stopTimer();
        //history.pushState(null, null, 'http://burnsexcavation.com/gallery');
        $( "#componentDisplay" ).html(images[11])
        $( "#componentDisplay2" ).html(galleryTxt)

        //Gallery logic
        console.log("Gallery logic bound to image")
        $( "#componentDisplay" ).on('click', function(){
          if(idx >= images.length - 1){
            idx = 11;
            $( "#componentDisplay" ).fadeOut("fast", "swing", function(){
              $( "#componentDisplay" ).html(images[idx]).fadeIn("fast", "swing");
            });
          }else{
            idx++;
            console.log("Index display" + idx);
            $( "#componentDisplay" ).fadeOut("fast", "swing", function(){
              $( "#componentDisplay" ).html(images[idx]).fadeIn("fast", "swing");
            });
          }
        })
      })
});