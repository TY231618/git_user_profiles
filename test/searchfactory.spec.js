describe('factory: Search', function() {

  var search;


  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
    .when("GET",("https://api.github.com/search/users?access_token=" + gitAccessToken + "&q=hello"))
    .respond(
      { items: items }
    );
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
    .then(function(response) {
      expect(response.data.items).toEqual(items);
    });
    httpBackend.flush();
  });
});


// "https://api.github.com/search/users?access_token=72857bd36b4cf172f8342069dfb6c0f7056f73e7&q=TY231618"
