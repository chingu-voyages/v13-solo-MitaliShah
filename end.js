const displayname = document.getElementById('displayname');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;

displayname.addEventListener("keyup", () => {
  console.log(displayname.value);
  saveScoreBtn.disabled = !displayname;
});
saveHighScore = (e) => {
  console.log("clicked");
  e.preventDefault();
}