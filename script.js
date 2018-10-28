
//$(document).ready() is cross-browser
//Runs script to initialize jquery functionality.

$(document).ready( function() {
  var home = "<p class='component'>Ground breaking solutions built with quality and integrity</p>"
  var about = "<p class='component'>Burns Excavation was founded on the principle of creating </p><p class='component'> quality excavation solutions fulfilled with integrity.</p>"
  var services = "<p class='component'>We provide excavation solutions for all your building needs.</p><p class='component'> From the driveway to the foundation </p>"
  var employment = "<p class='component'>If you are inquiring on employment through Burns Excavation</p><p class='component'> call Jeffrey Burns at 555-555-5555</p>"
  var contact = "<p class='component'>Contact Burns Excavation by email at info@burnsexcavation.com</p><p class='component'> at the following address Example St Spokane WA 66666.</p><ul class='component' style='list-style-type:none'><li>Phone: 555-555-5555</li><li>Cell Phone:555-555-5555</li><li>Main office Address: 1668 E 1440 N, Spokane WA 29024</li></ul>"
  
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
    "assets/foundationcutOptimized.jpg"
  )

  var idx = 0;
  
  //Content Displayer
    $("#componentDisplay").html(home);
    $("#componentDisplay2").html(images[0]);        
    $( "#home" ).click(function() {
        $("#componentDisplay").html(home);        
        $("#componentDisplay2").html(images[0]);        
      });
      $( "#about" ).click(function() {
        $("#componentDisplay").html(about);        
        $("#componentDisplay2").html(images[1]);        
      });
      $( "#services" ).click(function() {
        $("#componentDisplay").html(services);        
        $("#componentDisplay2").html(images[2]);        
      });
      $( "#employment" ).click(function() {
        $("#componentDisplay").html(employment);        
        $("#componentDisplay2").html(images[3]);        
      });
      $( "#contact" ).click(function() {
        $("#componentDisplay").html(contact);        
        $("#componentDisplay2").html(images[4]);  
      });
      $( "#gallery" ).click(function() {
        $( "#componentDisplay" ).html(images[0]);
        $( "#componentDisplay2" ).html(galleryTxt)
      })
      $( "#gallery" ).ready(function(){
        $( "#componentDisplay" ).click(function(){
          if(idx >= gallery.length - 1){
            idx = 0;
            $( "#componentDisplay" ).html(images[idx])
          }else{
            idx++;
            $( "#componentDisplay" ).html(images[idx])
          }
        })
      })
});

