angular.module('mean.articles')
.controller('ArticlesController', 
['$scope', '$routeParams', '$location', 'Global', 'Articles', '$http',
function ($scope, $routeParams, $location, Global, Articles, $http) {
    $scope.global = Global;

    $scope.countries = [];
    $scope.savedCountries = [];

//Getting all countries from API
    $http.get('https://restcountries.eu/rest/v2/all')
    .then(function(res) {
        for(var country of res.data) {
            $scope.countries.push(country.name);
        }
        $scope.country = $scope.countries[0];
    });
//Save countries in article
    $scope.saveCountry = function() {
        $scope.savedCountries.push($scope.country);
    }

    $scope.updateCountriesInArticle = function(){
        var article = $scope.article;
        var country = $scope.country
        article.savedCountries.push(country);
    }
//Delete all countries from article
    $scope.clearCountries = function(){
        var article = $scope.article;
        article.savedCountries.length = 0;
    }


    $scope.create = function() {
        var article = new Articles({
            title: this.title,
            content: this.content,
            savedCountries: this.savedCountries
        });
        article.$save(function(response) {
            $location.path("articles/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(article) {
        article.$remove();  

        for (var i in $scope.articles) {
            if ($scope.articles[i] == article) {
                $scope.articles.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var article = $scope.article;
        var savedCountries = $scope.savedCountries
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());
        article.$update(function() {
            $location.path('articles/' + article._id);
        });
    };

    $scope.find = function(query) {
        Articles.query(query, function(articles) {
            $scope.articles = articles;
        });
    };

    $scope.findOne = function() {
        Articles.get({
            articleId: $routeParams.articleId
        }, function(article) {
            $scope.article = article;
        });
    };
}]);