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
