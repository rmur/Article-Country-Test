angular.module('mean.articles')
.controller('ArticlesController', 
['$scope', '$routeParams', '$location', 'Global', 'Articles', '$http',
function ($scope, $routeParams, $location, Global, Articles, $http) {
    $scope.global = Global;

    $scope.countries = [];
    $scope.savedCountries = [];

    

    //  $scope.countryFilters = [{id: 'filter1', 'ng-model': "searchText"}];

    // $scope.addNewFilter = function(){
    //     var newFilterNo = $scope.countryFilters.length + 1;
    //     $scope.countryFilters.push({'id':'filter' + newFilterNo});
    // }

    $http.get('https://restcountries.eu/rest/v2/all')
    .then(function(res) {
        for(var country of res.data) {
            $scope.countries.push(country.name);
        }
        $scope.country = $scope.countries[0];
    });
    
    $scope.saveCountry = function() {
        $scope.savedCountries.push($scope.country);
    }

    $scope.addToSavedCountries = function(){
        var article = $scope.article;
        var country = $scope.country
        article.savedCountries.push(country);
    }

    $scope.clearCountries = function(){
        var article = $scope.article;
        article.savedCountries.length = 0;
    }


    $scope.searchFilter = function(article){
        var re = new RegExp($scope.searchText, 'i');
        return !$scope.searchText || re.test(article.savedCountries)
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

        // for (var countries in savedCountries){
        //     for(var country in countries){
        //         debugger
        //         article.savedCountries.push(country);
        //     }   
        // }
        // article.savedCountries.push($scope.savedCountries)
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