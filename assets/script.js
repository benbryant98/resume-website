const repairModels = $(".repair-models");
const repairModal = $("#repair-modal");
const tigImg = $("#tig-img");
const urImg = $("#ur-img");
const classProgress = $(".progress");
const panelNav = $(".panel");

repairModels.on("click", ".is-clickable", function (event) {
  event.preventDefault();

  generaterepairModal(event.target.dataset.company);
  $("html").attr("style", "overflow:hidden;");
});

$(".exit").on("click", function (event) {
  event.preventDefault();

  let currentModal = $(".modal");
  currentModal.removeClass("is-active");
  $("html").removeAttr("style");
  $("a").remove(".temp-block");
});

$("#model-exit").on("click", function (event) {
  event.preventDefault();

  $("#model-modal").removeClass("is-active");
});

// Generates modal information based on selected button
const generaterepairModal = (company) => {
  let companyName = "";
  let modelList = [];
  switch (company) {
    case "hp":
      companyName = "Hewlett-Packard";
      modelList = hpModels;
      break;
    case "dell":
      companyName = "Dell";
      modelList = dellModels;
      break;
    case "lenovo":
      companyName = "Lenovo";
      modelList = lenovoModels;
      break;
    case "acer":
      companyName = "Acer";
      modelList = acerModels;
  }

  repairModal.find(".panel-heading").text(`${companyName} Models`);
  generatePanelBlocks(modelList, companyName);

  repairModal.addClass("is-active");
};

// Model Lists
const hpModels = [
  "Chromebook 11 G6 EE",
  "Chromebook 11A G6 EE",
  "Chromebook 11 G7 EE",
  "Chromebook 11 G8 EE",
  "Chromebook 11A G8 EE",
  "ProBook 640 G1",
  "ProBook 645 G1",
  "ProBook 650 G1",
  "ProBook 650 G2",
  "ProBook 655",
];

const dellModels = [
  "Chromebook 3100",
  "Chromebook 3110",
  "Chromebook 3110 2-in-1",
  "Latitude 5430 Chromebook",
  "Latitude 5430 2-in-1 Chromebook",
  "Latitude 3300",
  "Latitude 3330",
  "Latitude 3390 2-in-1",
  "Latitude 3400",
  "Latitude 3550",
];

const lenovoModels = [
  "100e Chromebook 2nd Gen",
  "300e 1st Gen",
  "300e 2nd Gen",
  "E40-80",
  "ThinkPad 11e G1",
  "ThinkPad 11e G2",
  "ThinkPad 11e G3",
  "ThinkPad 11e G4",
  "ThinkPad 11e G5",
  "ThinkPad T-590",
];

const acerModels = [
  "Travelmate B113-E",
  "Travelmate B113-M",
  "TravelMate B115-MP",
  "TravelMate B3 B311",
  "TravelMate Spin B118-G2-RN",
  "Aspire 3 A315",
  "Aspire E3-111",
  "Aspire One 11 AO1-132",
  "Aspire V5 131",
  "R3-131T",
];

function Device(model, company, image, specs) {
  this.model = model;
  this.company = company;
  this.image = image;
  this.specs = specs;
}

const generatePanelBlocks = (models, company) => {
  models.forEach((model) => {
    const modelObjects = [];
    let newDevice = new Device(
      model,
      company,
      `./images/${company}/img/${model}.png`,
      `./images/${company}/specs/${model}.png`
    );

    let newBlock = `<a class="panel-block temp-block" data-img="${newDevice.image}" data-specs="${newDevice.specs}">
          <span class="panel-icon">
            <i class="fas fa-laptop"></i>
          </span>${model}
        </a>`;
    panelNav.append(newBlock);

    modelObjects.push(newDevice);
  });
};

$(".panel").on("click", ".temp-block", function (event) {
  let modelModal = $("#model-modal");
  $(".model-img").attr("src", event.target.dataset.img);
  $(".model-specs").attr("src", event.target.dataset.specs);
  modelModal.addClass("is-active");
});

// Opens new window with link to image website
tigImg.on("click", function () {
  window.open("https://www.tig.com/");
});

urImg.on("click", function () {
  window.open("https://bootcamps.richmond.edu/coding/");
});

// Class Progress Bar updates as we get nearer to graduation date
const startDate = new Date("February 13, 2023");
const graduationDate = new Date("Aug 7, 2023");
const today = new Date();

const courseLength = graduationDate - startDate;
const courseLeft = graduationDate - today;
const progressNum = (1 - courseLeft / courseLength) * 100;

classProgress.attr("value", progressNum);
