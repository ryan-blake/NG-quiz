(function(){
  angular
    .module("factQuiz")
    .factory("quizMetrics", QuizMetrics)

    function QuizMetrics(){
        var quizObj = {
          quizActive: false,
          changeState: changeState
        };

        return quizObj;

        function changeState(state) {
            quizObj.quizActive = state

        }

    }

})();
