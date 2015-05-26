app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
 $scope.loaded = true;
 FlashCardsFactory.getFlashCards().then(function(data)
 	{
		$scope.flashCards = data;
	});

	// $scope.answerQuestion = function (answer, flashCard) {
	// 	$scope.scores = ScoreFactory;
	// 	console.log(ScoreFactory);

	// 	if (!flashCard.answered) {
	// 		flashCard.answered = true;
	// 		flashCard.answeredCorrectly = answer.correct;
	// 		if (answer.correct)
	// 			$scope.scores.correct +=1;
	// 		else
	// 			$scope.scores.incorrect +=1;
	// 	}
	// }


	$scope.categories = ['MongoDB', 'Express', 'Angular', 'Node'];

	$scope.getCategoryCards = function ( cat ){
		$scope.loaded = false;
		FlashCardsFactory.getFlashCards(cat).then(function(data){
			$scope.flashCards = data
			$scope.category = cat;
			$scope.loaded = true;
		})
	}








});