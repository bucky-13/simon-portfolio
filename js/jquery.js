//1. Changing active navbar link on scroll and click

const addClassOnScroll = function () {
  let windowTop = $(window).scrollTop();
  $("section[id]").each(function (index, elem) {
    let offsetTop = $(elem).offset().top;
    let outerHeight = $(this).outerHeight(true);
    // console.log(offsetTop);
    console.log(outerHeight);

    if (windowTop > offsetTop - 500 && windowTop < offsetTop + outerHeight) {
      let elemId = $(elem).attr("id");
      $("nav div div a.active").removeClass("active");
      $('nav div div a[href="#' + elemId + '"]').addClass("active");
    }
  });
};

$(function () {
  $(window).on("scroll", function () {
    addClassOnScroll();
  });
});

$(function () {
  $(window).on("click", function () {
    addClassOnScroll();
  });
});
