app.controller('HomeController', [
  '$scope',
  'suggestions',

  function($scope, suggestions) {
    // controller code here
    /*
    The first part is creating an AngularJS object named "posts".
    $scope.posts = suggestions.posts;
    Then, “suggestions” is referring to the service we made.
    $scope.posts = suggestions.posts;
    Finally, “posts” is referring to the JSON object we made inside the suggestions service.
    */
    $scope.posts = suggestions.posts;
  }]);
