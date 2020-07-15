function useCaseHrefChange() {
  if (window.matchMedia("(max-width:767px)").matches) {
    $("#useCasesMB").attr("href", "#use-casesMB");
    $("#useCasesMB").attr("data-scrollto", "use-casesMB");
  } else if (window.matchMedia("(min-width:768px)").matches) {
    $("#useCasesMB").attr("href", "#use-cases");
    $("#useCasesMB").attr("data-scrollto", "use-cases");
  }
}

function useCaseHrefChange2() {
  if (window.matchMedia("(max-width:767px)").matches) {
    $("#useCasesMB").attr("href", "./index.html#use-casesMB");
    // $("#useCasesMB").attr("data-scrollto", "index.html#use-casesMB");
  } else if (window.matchMedia("(min-width:768px)").matches) {
    $("#useCasesMB").attr("href", "./index.html#use-cases");
    // $("#useCasesMB").attr("data-scrollto", "index.html#use-cases");
  }
}
