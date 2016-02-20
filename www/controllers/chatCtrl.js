angular.module( "starter" )
  .controller( "chatCtrl", function ( $scope, $state, chatSvc, $stateParams ) {
$scope.user = $stateParams.userName

    $scope.sendMessage = function ( message ) {
      chatSvc.sendMessage( {
        user: $scope.user,
        message: message
      } );
    }
    var loadMessages = $scope.getMessage = function () {
      chatSvc.getMessages()
        .then( function ( data ) {
          $scope.messages = data.data;
        } );
    };

    setInterval( loadMessages, 2000 );

  } );
