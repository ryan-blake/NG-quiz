(function(){
  angular
    .module("factQuiz")
    // name of controller for html ref
    .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

// HTML sees this through ng-controller listCtrl as list
    function ListController(quizMetrics, DataService){
      var vm = this;
// data
      vm.quizMetrics = quizMetrics;
      // vm.quizActive = false;
      vm.data = DataService.turtlesData
      vm.activeTurtle = {};
      vm.changeActiveTurtle = changeActiveTurtle;
      vm.activateQuiz = activateQuiz;
      vm.search = "";

      function changeActiveTurtle(index){
        vm.activeTurtle = index;
      }

      function activateQuiz(){
        // vm.quizActive = true;
        quizMetrics.changeState("quiz", true);
      }
    }




})();
