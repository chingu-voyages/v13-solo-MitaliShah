const displayname = document.getElementById('displayname');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const Max_high_score = 5;

finalScore.innerText = mostRecentScore;

displayname.addEventListener("keyup", () => {
  console.log(displayname.value);
  saveScoreBtn.disabled = !displayname;
});
saveHighScore = (e) => {
  console.log("clicked");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random()*100),
    name: displayname.value
  };
  highScores.push(score);
  highScores.sort((a,b) => {
    return b.score - a.score;
  });

  highScores.splice(5);
  
  localStorage.setItem('highScore', JSON.stringify(highScores));
  window.location.assign("/index.html");
}