document.addEventListener(
    "DOMContentLoaded",
    function() {
      setTimeout(function() {    document.getElementById("loading").className = "slideDown";
      }, 3800);
    },
    false
  );
  
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      setTimeout(function() {
        document.getElementById("loading-center").className = "zoomOut";
      }, 3200);
    },
    false
  );
  
  
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      setTimeout(function() {
        document.getElementById("block-1").className = "slideInUp";
      }, 3800);
    },
    false
  );
  // fade in grid items  ==================================

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })
  
  
  
  
  
  
  
  
  
  