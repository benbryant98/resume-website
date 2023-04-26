const repairModels = $(".repair-models");
const modelModal = $("#repair-modal");
const tigImg = $("#tig-img");
const urImg = $("#ur-img");
const classProgress = $(".progress");

repairModels.on("click", function (event) {
  event.preventDefault();

  generateModelModal(event.target.dataset.company);
});

$("#exit").on("click", function (event) {
  event.preventDefault();

  let currentModal = $(".modal");
  currentModal.removeClass("is-active");
});

const generateModelModal = (company) => {
  let companyName = "";
  switch (company) {
    case "hp":
      companyName = "Hewlett-Packard";
      break;
    case "dell":
      companyName = "Dell";
      break;
    case "lenovo":
      companyName = "Lenovo";
      break;
    case "acer":
      companyName = "Acer";
  }

  modelModal.find(".panel-heading").text(`${companyName} Models`);

  modelModal.addClass("is-active");
};

tigImg.on("click", function () {
  window.open("https://www.tig.com/");
});

urImg.on("click", function () {
  window.open("https://bootcamps.richmond.edu/coding/");
});

const startDate = new Date("February 13, 2023");
const graduationDate = new Date("Aug 7, 2023");
const today = new Date();

const courseLength = graduationDate - startDate;
const courseLeft = graduationDate - today;
const progressNum = (1 - courseLeft / courseLength) * 100;

classProgress.attr("value", progressNum);
