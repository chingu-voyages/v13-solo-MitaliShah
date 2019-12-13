const highscorelist = document.getElementById('highscorelist');
const highscore = JSON.parse(localStorage.getItem('highScores')) || [];

highscore.map( score => {
  console.log(score);
})
