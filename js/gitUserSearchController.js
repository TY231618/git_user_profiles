githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {


  var self = this;
  var searchResource = $resource('https://api.github.com/search/users?access_token=' + gitAccessToken);

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };

}]);
