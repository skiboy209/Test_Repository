
//$(document).ready() is cross-browser
//Runs script to initialize jquery functionality.

$(document).ready( function() {
  var home = "<p class='component'>We provide ground breaking solutions crafted with quality and integrity</p>"
  var about = "<p class='component'>Burns Excavation was founded to bring you quality excavation solutions will be fulfilled with integrity.</p>"
  var services = "<p class='component'>We provide solutions for all your excavation needs.</p><ul id='servicesList'><li class='serviceListItem'>Site Development</li><li class='serviceListItem'>Clearing / Grading</li><li class='serviceListItem'>Drainage & More</li></ul>"
  var employment = "<p class='component'>Burns Excavation Employment</p><p class='component'> If you are seeking employment contact Jeff Burns, Owner at 360-878-3200</p>"
  var contact = "<p class='component'>Contact Burns Excavation <ul id='contactList'><li class='contactListItem'>Email: jeffburns@burnsexcavation.com</li><li class='contactListItem'>Phone: 360-878-3200</li><li class='contactListItem'>Address: PO box coming soon!</li></ul></p>"
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
  
  // border state on page change $( "#home" ).css({"border-bottom":"3px solid #ff0000","padding-bottom":"7px"})       
  //Content Displayer 
  $("#componentDisplay2").html(home);
    $("#componentDisplay").html(images[7]);       
    $("#logoImg").click(function() {
      $( "#componentDisplay" ).off('click');
      $("#componentDisplay").html(images[7]);        
      $("#componentDisplay2").html(home);   
    }); 
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
        $("#componentDisplay").html(images[9])    
        $("#componentDisplay2").html(services);        
      });
      $( "#employment" ).click(function() {
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[8])       
        $("#componentDisplay2").html(employment);        
      });
      $( "#contact" ).click(function() {
        $( "#componentDisplay" ).off('click');
        $("#componentDisplay").html(images[2]) 
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

