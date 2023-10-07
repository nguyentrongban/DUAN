var app = angular.module('myApp', []);

app.controller('MyController', function($http) {
  $http({
    method: 'GET',
    url: 'http://localhost:8080/api/payment/create_payment?amount=1000000&bankCode=VCB',
  }).then(function successCallback(response) {
    // Xử lý phản hồi thành công
    console.log(response.data);
  }, function errorCallback(response) {
    // Xử lý phản hồi lỗi
    console.log(response.data);
  });
});