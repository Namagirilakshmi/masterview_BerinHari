app.controller("containerController",function($scope,$http){
	$scope.array=[];
    $scope.toHide;
    $scope.array1=[];
    $scope.button1Hide=true;
    $scope.button2Hide=true;
    $scope.hideContent2=true;
	$scope.val;
	$scope.dinoName;
    $scope.hideSection=true;
    $scope.appeared;
    $scope.height;
    $scope.weight;
    $scope.length;
    $scope.order;
    $scope.vanished;
    var dummy;

// http method to load json

    $http({
        method : "GET",
        url : "assets/json/object.json"
    }).then(function mySucces(response) {
        $scope.val = response.data;
       
        for($scope.key in $scope.val){
        	$scope.array.push($scope.key);
        	
          }

// dinosaur named button click function to yield values

    $scope.clickFunction=function(event){

        $scope.toHide="hidden-sm-down";
        $scope.hideSection=false;
        $scope.button1Hide=false;
        $scope.hideContent2=true; 
        $scope.dinoName=(event.target.id);
        $scope.appeared=$scope.val[$scope.dinoName].appeared;
        $scope.height=$scope.val[$scope.dinoName].height;
        $scope.weight=$scope.val[$scope.dinoName].weight;
        $scope.length=$scope.val[$scope.dinoName].length;
        $scope.order=$scope.val[$scope.dinoName].order;
        $scope.vanished=$scope.val[$scope.dinoName].vanished;
       

    }

// more button click function to show detailed description

    $scope.moreFunction=function(){
        $scope.hideContent2=false;
        $scope.button1Hide=true;
        $scope.button2Hide=false;

    }

// less button click function to show brief description

    $scope.lessFunction=function(){
         $scope.button2Hide=true;
         $scope.button1Hide=false;
         $scope.hideContent2=true;
    }

// back button click function

    $scope.backFunction=function(){
           $scope.toHide="";
           $scope.hideSection=true;
    }

       
    }, function myError(response) {
        $scope.val = response.statusText;
       
    });

});