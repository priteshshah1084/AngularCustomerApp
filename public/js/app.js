/* App Module */

var customerApp = angular.module('customerApp', [
  'ngRoute',
  'ngResource',
  'customerControllers',
  'customerServices'
]);

customerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/customers', {
        templateUrl: 'partials/customer-list.html',
        controller: 'CustomerListController'
      }).
      when('/customers/:customerId', {
        templateUrl: 'partials/customer-edit.html',
        controller: 'CustomerEditController'
      }).
	  when('/customers-new', {
        templateUrl: 'partials/customer-add.html',
        controller: 'CustomerCreateController'
      }).
	   when('/customers/:customerId/edit', {
        templateUrl: 'partials/customer-edit.html',
        controller: 'CustomerEditController'
      }).
      otherwise({
        redirectTo: '/customers'
      });
  }]);
