
//$(document).ready() is cross-browser
//Runs script to initialize jquery functionality.

$(document).ready( function() {
  var idx = 0;
  var home = "<p class='component'>We provide ground breaking solutions crafted with quality and integrity</p>"
  var about = "<p class='component'>Burns Excavation was founded to bring you quality excavation solutions fulfilled with integrity.</p>"
  var services = "<p class='component'>We provide solutions for all your excavation needs.</p><ul id='servicesList'><li class='serviceListItem'>Site Development</li><li class='serviceListItem'>Clearing / Grading</li><li class='serviceListItem'>Drainage & More</li></ul>"
  var employment = "<p class='component'>Burns Excavation Employment</p><p class='component'> If you are seeking employment contact Jeff Burns, Owner at 360-878-3200</p>"
  var contact = "<p class='component'>Contact Burns Excavation <ul id='contactList'><li class='contactListItem'>Email: jeffburns@burnsexcavation.com</li><li class='contactListItem'>Phone: 360-878-3200</li><li class='contactListItem'>Address: PO box coming soon!</li></ul></p>"
  var galleryTxt = "<p class='component'>Click the image to view the next photo</p>"

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
    /*else if(idx === 0 || idx === 2 || idx === 3 || idx === 4 || idx === 14){
      console.log("idx premutation: " + idx);
      $( "#componentDisplay" ).fadeOut(fadeSpeed, "swing", function(){
      idx++;
      $( "#componentDisplay" ).html(images[idx]).fadeIn(fadeSpeed, "swing");
      console.log("should skip photo: " + idx);
      });
    }*/
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
  $("#componentDisplay2").html(home);
  $("#componentDisplay").html(images[0]);       
  $("#logoImg").click(function() {
    $("#componentDisplay").html(images[0]);       
      $( "#componentDisplay" ).off('click');
      resetTimer();
      $("#componentDisplay2").html(home);   
    }); 
    $( "#home" ).click(function() {
      $("#componentDisplay").html(images[0]);       
      resetTimer();
      $( "#componentDisplay" ).off('click');
      $("#componentDisplay2").html(home);        
      });
      $( "#about" ).click(function() {    
        stopTimer();
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[1])
        $("#componentDisplay2").html(about);        
      });
      $( "#services" ).click(function() {
        stopTimer();
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[2])    
        $("#componentDisplay2").html(services);        
      });
      $( "#employment" ).click(function() {
        stopTimer();        
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[3])       
        $("#componentDisplay2").html(employment);        
      });
      $( "#contact" ).click(function() {
        stopTimer();      
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[4]) 
        $("#componentDisplay2").html(contact);        
      });
      $( "#gallery" ).click(function() {
        idx = 11;
        stopTimer();
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