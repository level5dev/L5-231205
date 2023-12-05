//console.log("accordion.js");
// Check if the device is mobile
function isMobileDevice() {
  return window.innerWidth <= 767; // Adjust the width value as per your needs
}

// Remove the class if the device is mobile
if (isMobileDevice()) {
  //$('.tabs-contents .is-active[accordion-mobile-content]').removeClass('is-active');
} else {
}

if (window.innerWidth >= 480) {
  // console.log("more than 480 ");
  if ($("[data-tabcon] .tab-content.is-active").length == 0) {
    let clicktab = $("[data-acctabid]").eq(0).data("acctabid");
    $("[data-acctabid]").eq(0).click();
    $(`#${clicktab}`).addClass("is-active");
  }
} else {
  //console.log("less than 480");
}

$(".accordion-mobile").on("click", function () {
  $(this).next().toggleClass("is-active");
  $(this).find("[accordion-ddown]").toggleClass("open");
  let curTab = $(this).data("accordion");
  if ($(this).next().hasClass("is-active")) {
    $("[accordion-mobile-content].is-active")
      .not($(this).next())
      .each(function () {
        $(this).removeClass("is-active");
      });
    $("[accordion-ddown].open")
      .not($(this).find("[accordion-ddown]"))
      .each(function () {
        $(this).removeClass("open");
      });
    $(`[data-accTab] [data-accTabId].is-active`).each(function () {
      $(this).removeClass("is-active");
    });
    $('[data-accTabId="' + curTab + '"]').addClass("is-active");
  }
});

$("[data-accordion-sch]").on("click", function () {
  var $content = $(this).next(); // The content to slide down
  $content.toggleClass("open");
  $(this).find("[accordion-ddown-sch]").toggleClass("open");
  if ($content.hasClass("open")) {
    // Get the full height of the content
    var contentHeight = $content.prop("scrollHeight");

    // Temporarily set the height to 0 and then trigger a reflow
    $content.css("height", "0");
    void $content.get(0).offsetHeight; // This forces a reflow

    // Animate the height to the calculated content height
    $content.css("height", contentHeight + "px");
    $(".tab-content-sch.open")
      .not($(this).next())
      .each(function () {
        $(this).removeClass("open");
        var contentHeight = $(this).prop("scrollHeight");

        // Temporarily set the height to 0 and then trigger a reflow
        $(this).css("height", "0");
        void $content.get(0).offsetHeight;
      });
    $("[accordion-ddown-sch].open")
      .not($(this).find("[accordion-ddown-sch]"))
      .each(function () {
        console.log("close");
        $(this).removeClass("open");
      });
  } else {
    $content.css("height", "0");
  }
});
