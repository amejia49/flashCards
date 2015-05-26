app.directive('flashCardDirective', function(ScoreFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flashcard/flash-card.html',
		link: function(scope){

		scope.answerQuestion = function (answer, flashCard) {
		scope.scores = ScoreFactory;
		console.log(ScoreFactory);

		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (answer.correct)
				scope.scores.correct +=1;
			else
				scope.scores.incorrect +=1;
		}
	}



		},
		scope: {
			card: '='
		}
	}
})