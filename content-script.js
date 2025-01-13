console.log("content-script.js loaded");

// Immediately run your logic
unhideAcademicsCard();

// Then set up the observer
const observer = new MutationObserver(() => {
  unhideAcademicsCard();
});

observer.observe(document.body, { childList: true, subtree: true });

// Define the function below
function unhideAcademicsCard() {
  console.log("unhideAcademicsCard called");
  const academicsCard = document.querySelector(".card.card-academics");
  if (academicsCard && academicsCard.style.display === "none") {
    academicsCard.style.display = "block";
    console.log("unhiding academics card");
  }
  console.log("function called");
}
