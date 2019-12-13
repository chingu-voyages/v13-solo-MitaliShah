const highscorelist = document.getElementById('highScoreList');
const highscore = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highscore);

// highscore.map( score => {
//   console.log(score);
// });
