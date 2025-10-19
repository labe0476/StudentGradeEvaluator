function evaluate(score, score2, score3, score4, score5) {
  return (score + score2 + score3 + score4 + score5) / 5;
}

let GradeEvaluator = document.getElementById("GradeEvaluator");

GradeEvaluator.addEventListener("submit", function (x) {
  x.preventDefault();

  let userInput = Number(document.getElementById("score").value);
  let userInput2 = Number(document.getElementById("score2").value);
  let userInput3 = Number(document.getElementById("score3").value);
  let userInput4 = Number(document.getElementById("score4").value);
  let userInput5 = Number(document.getElementById("score5").value);

  //   if (
  //     userInput, userInput2, userInput3, userInput4, userInput5
  //  < 0 || userInput, userInput2, userInput3, userInput4, userInput5 > 100) {
  //     result = "Invalid score. Enter between 0 and 100";
  //   }
  let avarage = evaluate(
    userInput,
    userInput2,
    userInput3,
    userInput4,
    userInput5
  );

  document.getElementById(
    "result"
  ).innerHTML = ` Your average score is  ${avarage}`;
});
