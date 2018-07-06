angular.module('myApp', []);

var MyController = function ($scope, $http, $log) {
  $http({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5d5c6808bf9f24ea03300fe064f995a2'
  }).then(function (response) {
    $scope.WeatherO = response.data;
  },
   function (response) {
     $log.log(response);
   });
};

module.exports = {
  template: require('./hello.html'),
  controller: MyController
};
