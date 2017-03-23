/* Controllers */

var customerControllers = angular.module('customerControllers', []);

customerControllers.controller('CustomerListController', ['$scope', 'Customer', '$window', 
  function($scope, Customer, $window) {
    $scope.customers = Customer.query();
	
	$scope.deleteCustomer = function(customer){
        if($window.confirm('Really delete this?')){
            customer.$delete({customerId: customer.id}, function() {
			  $scope.customers = Customer.query();
			});
        }
    }
  }]);


  
customerControllers.controller('CustomerCreateController', ['$scope', 'Customer',
  function($scope, Customer) {
	
	$scope.customer = new Customer();

    $scope.addCustomer = function(){
		$scope.customer.id = $scope.customer.name.replace(" ", "-").toLowerCase();
        $scope.customer.$save();
    }
  }]);  

  
customerControllers.controller('CustomerEditController', ['$scope', '$routeParams', 'Customer', '$location',
  function($scope, $routeParams, Customer, $location) {
	
	$scope.loadCustomer = function(){
		 $scope.customer = Customer.get({customerId: $routeParams.customerId});
	};

    $scope.updateCustomer = function(){
        $scope.customer.$save(function() {
			  $location.path('customers');
		});
	};
	
	
	$scope.loadCustomer();
  }]);  
