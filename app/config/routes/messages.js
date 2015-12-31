export /* @ngInject */ function messagesRoutes($stateProvider) {
  $stateProvider

    .state('messages', {
      url: '/messages',
      templateUrl: '/states/messages/messages.html',
      controller: 'MessagesController',
      controllerAs: 'Messages'
    })

    .state('messages.message', {
      url: '/message/:messageId',
      params:{
        message:null
      },
      templateUrl: '/states/messages/message/message.html',
      controller: 'MessagesMessageController',
      controllerAs: 'Message'
    })

    .state('messages.all-messages', {
      url: '/all-messages',
      templateUrl: '/states/messages/all-messages/all-messages.html',
      controller: 'MessagesAllMessagesController',
      controllerAs: 'AllMessages'
    });
}
