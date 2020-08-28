var firstInfoTitle = [
  "First, an employee books a doctor's appointment.",
  "First, request a health screening from your user.",
];
var firstInfoDesc = [
  "An authorized employee books an appointment for a health assessment or diagnostic testing (as mandated by your organization or law) with a physician on Immunodex. Our app reminds them with location and time prior to the reservation.",
  "An authorized user (staff, student or client) is notified to complete a health screening prior to entering your premises. This notification can be set to automatically run at regular intervals.",
];
var firstImg = [
  "../images/immunodex-how-1-new-2.gif",
  "../images/how-it-works/health-declaration/How_1.gif",
];

var secInfoTitle = [
  "Next, the physician performs the assessment & issues the credential",
  "Next, the user completes the screening",
];
var secInfoDesc = [
  "After onsite check-in at the healthcare provider's, the employee is assessed by a physician or tested, creating a record in their VHP. The outcomes are sent directly to the VHP, with any" +
    "doctor's orders" +
    "if needed.",
  "The user self-assess their health, reporting any symptoms and contact, travel and medical histories in a few taps. Our easy-to-use interface is designed for the elderly and children in mind.",
];
var secImg = [
  "../images/immunodex-how-2-new.png",
  "../images/how-it-works/health-declaration/how 2.png",
];

var thirdInfoTitle = [
  "The employee's VHP is ready for inspection",
  "The employee's VHP is ready for inspection",
];
var thirdInfoDesc = [
  "With their consent, you can now inspect your employee's VHP, exchanging information via a QR code and authorizing them to proceed with the task at hand.",
  "With their consent, you can now inspect your employee's VHP, exchanging information via a QR code and authorizing them to proceed with the task at hand.",
  ,
];
var thirdImg = [
  "../images/immunodex-how-3.gif",
  "../images/immunodex-how-3.gif",
];

// web
var htwSelected1 = document.getElementById("htw-selected1");
var htwSelected2 = document.getElementById("htw-selected2");

// mb
var htwSelectedMB1 = document.getElementById("htw-selectedMB1");
var htwSelectedMB2 = document.getElementById("htw-selectedMB2");

// content 1-3, title;desc;img
var htwInfo1Title = document.getElementById("htw-info1Title");
var htwInfo1Desc = document.getElementById("htw-info1Desc");
var htwInfo1Img = document.getElementById("htw-info1Img");

var htwInfo2Title = document.getElementById("htw-info2Title");
var htwInfo2Desc = document.getElementById("htw-info2Desc");
var htwInfo2Img = document.getElementById("htw-info2Img");

var htwInfo3Title = document.getElementById("htw-info3Title");
var htwInfo3Desc = document.getElementById("htw-info3Desc");
var htwInfo3Img = document.getElementById("htw-info3Img");

function switchSelected2() {
  if (
    htwSelectedMB1.classList.contains("htw-selected") &&
    htwSelected1.classList.contains("htw-selected")
  ) {
    htwSelectedMB2.classList.add("htw-selected", "text-white");
    htwSelected2.classList.add("htw-selected", "text-white");

    htwSelectedMB1.classList.remove("htw-selected", "text-white");
    htwSelected1.classList.remove("htw-selected", "text-white");
    changeContent(1);
  }
}

function switchSelected1() {
  if (
    htwSelectedMB2.classList.contains("htw-selected") &&
    htwSelected2.classList.contains("htw-selected")
  ) {
    htwSelected1.classList.add("htw-selected", "text-white");
    htwSelectedMB1.classList.add("htw-selected", "text-white");

    htwSelectedMB2.classList.remove("htw-selected", "text-white");
    htwSelected2.classList.remove("htw-selected", "text-white");
    changeContent(0);
  }
}

function changeContent(index) {
  htwInfo1Title.innerHTML = firstInfoTitle[index];
  htwInfo1Desc.innerHTML = firstInfoDesc[index];
  htwInfo1Img.src = firstImg[index];

  htwInfo2Title.innerHTML = secInfoTitle[index];
  htwInfo2Desc.innerHTML = secInfoDesc[index];
  htwInfo2Img.src = secImg[index];

  htwInfo3Title.innerHTML = thirdInfoTitle[index];
  htwInfo3Desc.innerHTML = thirdInfoDesc[index];
  htwInfo3Img.src = thirdImg[index];
}
