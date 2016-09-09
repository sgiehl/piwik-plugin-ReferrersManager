(function () {
    angular.module('piwikApp').controller('SearchEnginesController', SearchEnginesController);

    SearchEnginesController.$inject = ['$scope'];

    function SearchEnginesController($scope) {

        $scope.searchEngines = [];


        /**
         * Refreshes the search engine list (clears all caches)
         */
        $scope.refreshList = function() {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'refresh',
                type: 'searchengines'
            }, 'GET');
            ajaxHandler.setCallback(function(){
                $scope.fetchSearchEngines();
            });
            ajaxHandler.send();
        };

        /**
         * Fetches available search engines
         */
        $scope.fetchSearchEngines = function() {

        };









    }
})();
