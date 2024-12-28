// homePage and lastPage rules toggle logic

const HomePageRules_btn = document.querySelector(".rulesbtn");
const HomeGameRules = document.querySelector(".GameRules_Box");
const RulesClose_btn = document.querySelector("#crossSymbol");

HomePageRules_btn.addEventListener("click", () => {
  HomeGameRules.classList.toggle("hide");
});

RulesClose_btn.addEventListener("click", () => {
  HomeGameRules.classList.toggle("hide");
});

//symbols click logic

const handIcons = document.querySelectorAll(
  "#handSymbol, #fistSymbol,#scissorSymbol"
);

handIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    localStorage.setItem("selectedIcon", icon.id);
    window.location.href = "PlayPage.html";
  });
});


document.querySelector(".LPlayAgain_btn").addEventListener("click",() =>{
    window.location.href = "HomePage.html"
})