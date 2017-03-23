'use strict';

/* Services */

var customerServices = angular.module('customerServices', ['ngResource']);

customerServices.factory('Customer', ['$resource',
  function($resource){
    return $resource('customers/:customerId', {}, {
        'update': { method:'PUT' }
    });
  }]);
