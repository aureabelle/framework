app.directive('icons', function(){
    return {
        restrict: 'C',
        link: function(scope, element, attrs){
            console.log(scope);
        }
    };
});