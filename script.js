
//$(document).ready() is cross-browser
//Runs script to initialize jquery functionality.

$(document).ready( function() {
  var home = "<p class='component'>We provide ground breaking solutions crafted with quality and integrity</p>"
  var about = "<p class='component'>Burns Excavation was founded on the principle of creating </p><p class='component'> quality excavation solutions fulfilled with integrity.</p>"
  var services = "<p class='component'>We provide excavation solutions for all your building needs.</p><p class='component'> From the driveway to the foundation </p>"
  var employment = "<p class='component'>If you are inquiring on employment through Burns Excavation</p><p class='component'> call Jeffrey Burns at 555-555-5555</p>"
  var contact = "<p class='component'>Contact Burns Excavation by email at info@burnsexcavation.com</p><p class='component'> at the following address Example St Spokane WA 66666.</p><ul class='component' style='list-style-type:none'><li>Phone: 555-555-5555</li><li>Cell Phone:555-555-5555</li><li>Main office Address: 1668 E 1440 N, Spokane WA 29024</li></ul>"
  var galleryTxt = "<p class='component'>Click the image to view the next photo</p>"


  var images = new Array()
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image()
      images[i].className = "componentImg"
      images[i].src = preload.arguments[i]
    }
  }
  preload(
    "assets/drivewayOptimized.jpg",
    "assets/driveway2Optimized.jpg",
    "assets/driveway3Optimized.jpg",
    "assets/foundationcut3Optimized.jpg",
    "assets/foundationcut2Optimized.jpg",
    "assets/foundationcut4Optimized.jpg",
    "assets/foundationcutOptimized.jpg",
    "assets/utilitiesOptimized.jpg",
    "assets/utilities2Optimized.jpg",
    "assets/utilities3Optimized.jpg",
    "assets/septicOptimized.jpg"
  )

  var idx = 0;
  
  //Content Displayer
  $("#componentDisplay2").html(home);
    $("#componentDisplay").html(images[7]);        
    $( "#home" ).click(function() {
      $( "#componentDisplay" ).off('click');
      $("#componentDisplay").html(images[7]);        
      $("#componentDisplay2").html(home);        
      });
      $( "#about" ).click(function() {    
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[1])
        $("#componentDisplay2").html(about);        
      });
      $( "#services" ).click(function() {
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[2])    
        $("#componentDisplay2").html(services);        
      });
      $( "#employment" ).click(function() {
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[3])       
        $("#componentDisplay2").html(employment);        
      });
      $( "#contact" ).click(function() {
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[4]) 
        $("#componentDisplay2").html(contact);        
      });
      $( "#gallery" ).click(function() {
        $( "#componentDisplay" ).html(images[0])
        $( "#componentDisplay2" ).html(galleryTxt)

        //Gallery logic
        console.log("Gallery logic bound to image")
        $( "#componentDisplay" ).on('click', function(){
          if(idx >= images.length - 1){
            idx = 0;
            $( "#componentDisplay" ).html(images[idx])
          }else{
            idx++;
            console.log("INDEX: " + idx);
            $( "#componentDisplay" ).html(images[idx])
          }
        })
      })
 /*     $( "#gallery" ).ready(function(){

      })*/
});

