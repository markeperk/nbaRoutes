var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
  	.when('/', {
  		templateUrl: 'js/home/homeTmpl.html',
  		controller: 'homeCtrl',
  		resolve: {
  			allData: function(teamService, $route, $scope) {
  				var newData = {};
  				var newTeam = utahjazz;
  				newData.jazz = teamService.getTeamData($scope.newTeam);
  				// newData.lakers = teamService.getTeamData($scope.newGame.losangeleslakers);
  				// newData.lakers = teamService.getTeamData($scope.newGame.miamiheat);
  			console.log(newData);
  			}
  		}
  	})
  	.when('/teams/:team', {
  		templateUrl: 'js/teams/teamTmpl.html',
  		controller: 'teamCtrl',
  		resolve: {
  			teamData: function(teamService, $route) {
  				return teamService.getTeamData($route.current.params.team);
  			}
  		}
  	})
  	.otherwise('/')

});