export /* @ngInject */ function forumRoutes($stateProvider) {
  $stateProvider

    .state('forum', {
      url: '/forum',
      templateUrl: '/states/forum/forum.html',
      controller: 'ForumController',
      controllerAs: 'Forum'
    });
}
