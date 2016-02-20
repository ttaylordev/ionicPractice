angular.module( "starter" )
  .controller( "homeCtrl", function ( $scope, $state ) {
    $scope.joinRoom = function ( user) {
      $state.go( 'Chat', {
        userName: user
      } );
    };

  } );
