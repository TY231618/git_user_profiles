githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'access_token': gitAccessToken,
          'q': searchTerm
        }
      });
    }

    // getUserInfo: function(user_url) {
    //   return $http({
    //     url: user_url,
    //     method: 'GET',
    //     params: {
    //       'access_token': gitAccessToken
    //     }
    //   });
    // }
  };
}]);
