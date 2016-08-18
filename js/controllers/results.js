(function(){
  angular
    .module("factQuiz")
    .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService){
      var vm = this;
      vm.quizMetrics = quizMetrics;
      vm.dataService = DataService;
      vm.getAnswerClass = getAnswerClass;
      vm.setActiveQuestion = setActiveQuestion;
      vm.caclulatePerc = calculatePerc;
      vm.reset = reset;
      vm.activeQuestion = 0;



      function calculatePerc(){
        return results.quizMetrics.numCorrect / results.dataService.quizQuestions.length * 100 ;
      }


      function setActiveQuestion(index){
         vm.activeQuestion = index;

      }


      function getAnswerClass(index){
         if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
           return "bg-success";
         } else if (index === DataService.quizQuestions[vm.activeQuestion].selected){
           return "bg-danger";
         }
      };

      function reset(){
          quizMetrics.changeState("results", false);
          quizMetrics.numCorrect = 0;

          for(var i =0; i < DataService.quizQuestions.length; i++){
            var data = DataService.quizQuestions[i];

            data.selected = null;
            data.correct = null;
          }
      }

    }

})();
