angular.module( "starter" )
  .service( "chatSvc", function ( $http ) {
    this.sendMessage = function ( message ) {
        return $http( {
          method: "POST",
          url: 'http://192.168.0.83:3000/chats',
          data: message
        } );
      };
      this.getMessages = function () {
        return $http( {
          method: 'GET',
          url: 'http://192.168.0.83:3000/chats'
        } );
      };

  } );
