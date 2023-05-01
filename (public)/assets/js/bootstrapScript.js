$("#darkSwitch").on("click", () => {
  let html = $("html");
  if (html.attr("data-bs-theme") === "dark") {
    html.attr("data-bs-theme", "light");
    $(".form-check-label").text("Light");
    $(".border-white").addClass("border-dark");
    $(".border-white").removeClass("border-white");
  } else {
    html.attr("data-bs-theme", "dark");
    $(".form-check-label").text("Dark");
    $(".border-dark").addClass("border-white");
    $(".border-dark").removeClass("border-dark");
  }
});

$("#accordionExperience").on("click", ".accordion-button", (e) => {
  let accordionTarget = $(e.target).attr("data-bs-target");
  if ($(accordionTarget).hasClass("show")) {
    $(accordionTarget).removeClass("show");
    $(e.target).addClass("collapsed");
  } else {
    $(accordionTarget).addClass("show");
    $(e.target).removeClass("collapsed");
  }
});

let classStart = new Date("02/03/2023");
let classEnd = new Date("08/07/2023");
let today = new Date();
let classLength = classEnd - classStart;

let progress = ((today - classStart) / classLength) * 100;
$(".progress-bar").attr("style", `width: ${progress}%`);

let count = 0;
let picArray = $(".carousel-inner").children($(".carousel-item"));
let picIndicator = $('.carousel-indicators').children();

$(".carousel-control-prev-icon").on("click", (e) => {
  e.preventDefault();
  let picArray = $(".carousel-inner").children($(".carousel-item"));

  $(picArray[count]).removeClass("active");
  $(picIndicator[count])

  if (count > 0) {
    count--;
  } else {
    count = picArray.length - 1;
  }

  $(picArray[count]).addClass("active");
});

$(".carousel-control-next-icon").on("click", (e) => {
  e.preventDefault();
  
  $(picArray[count]).removeClass("active");
  if (count < picArray.length - 1) {
    count++;
  } else {
    count = 0;
  }
  
  $(picArray[count]).addClass("active");
});

$('.carousel-indicators').on('click', 'button', (e) => {
  picIndicator.removeClass('active');
  picArray.removeClass('active');
  $(e.target).addClass('active');
  $(picArray[e.target.dataset.bsSlideTo]).addClass('active');
  count = e.target.dataset.bsSlideTo;
})