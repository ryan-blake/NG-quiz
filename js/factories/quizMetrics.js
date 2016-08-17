(function(){
  angular
    .module("factQuiz")
    .factory("quizMetrics", QuizMetrics)

    function QuizMetrics(){
        var quizObj = {
          quizActive: false
        };

    }

})();
