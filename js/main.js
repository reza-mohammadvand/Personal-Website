// Add an event listener to the toggle switch
document.getElementById('langToggle').addEventListener('change', function() {
  if (this.checked) {
    window.location.href = 'Fa.html';
  } else {
    window.location.href = 'index.html';
  }
});

// Check the state of the toggle switch when the page loads
window.onload = function() {
  if (window.location.href.endsWith('Fa.html')) {
    document.getElementById('langToggle').checked = true;
  } else {
    document.getElementById('langToggle').checked = false;
  }
};

const contactForm = document.getElementById('contact');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();
    const isPersian = contactForm.dataset.language === 'fa';
    const body = isPersian
      ? `نام: ${name}\nایمیل: ${email}\n\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:reza_mohammadvand@alumni.iust.ac.ir?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}





$(".typetext").each(function(index,value){
  var text=$(value).text();
  var texthtml="";
  for(var i=0;i<text.length;i++){
    var tt=text[i];
    if (tt==" ") tt="&nbsp;";
    texthtml+="<span class='typeletter' style='display: inline-block; opacity: 0; letter-spacing: 2px'>"+tt+"</span>";
  }
  $(value).html(texthtml);
  var now_cursor=-1;
  var temptext="";
  var replaced=false;
  setInterval(function(){
     if (Math.random()<0.4){
         if (replaced)
              $(value).children("span:nth-child("+(now_cursor+1)+")").html(temptext);
         now_cursor++;    
         var current_text=$(value).children("span:nth-child("+(now_cursor+1)+")");
         current_text.css("opacity","1");
         temptext=current_text.text();
         current_text.html("|");
         replaced=true;
     }else{
        
        
     }
  },100);
  
  setInterval(function(){
    var current_text=$(value).children("span:nth-child("+(now_cursor+1)+")");
        if (current_text.text()==" "){
          current_text.html("|"); 
        }else{
          current_text.html(" "); 
        }
  },200);
});





jQuery(document).ready(function($) {
    
    // load
    $(window).load(function() {
        $(".se-pre-con").fadeOut("slow");;
      });

	'use strict';
      
        
        $(function() {
  
        function showSlide(n) {
            // n is relative position from current slide
          
            // unbind event listener to prevent retriggering
            $body.unbind("mousewheel");
          
            // increment slide number by n and keep within boundaries
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);
            
            var displacment = window.innerWidth*currSlide;
            // translate slides div across to appropriate slide
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
            // delay before rebinding event to prevent retriggering
            setTimeout(bind, 700);
            
            // change active class on link
            $('nav a.active').removeClass('active');
            $($('a:not(.icon)')[currSlide]).addClass('active');
            
        }
      
        function bind() {
             $body.bind('false', mouseEvent);
          }
      
        function mouseEvent(e, delta) {
            // On down scroll, show next slide otherwise show prev slide
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }
        
        $('nav a:not(.icon), .main-btn a').click(function(e) {
            // When link clicked, find slide it points to
            var newslide = parseInt($(this).attr('href')[1]);
            // find how far it is from current slide
            var diff = newslide - currSlide - 1;
            showSlide(diff); // show that slide
            e.preventDefault();
        });

        $(function(){
             $('.circlechart').circlechart();
            });            
      
        $(window).resize(function(){
          // Keep current slide to left of window on resize
          var displacment = window.innerWidth*currSlide;
          $slides.css('transform', 'translateX(-'+displacment+'px)');
        });
        
        // cache
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
      
        // give active class to first link
        $($('nav a:not(.icon)')[0]).addClass('active');
        
        // add event listener for mousescroll
        $body.bind('false', mouseEvent);
    })        


        


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });




});
var item = document.getElementsByClassName('extended-parallax')
    if (item.length !== 0 ) {
        item.each( function() {
          $(this).paroller();
        })
    }
