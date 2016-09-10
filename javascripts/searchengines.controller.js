(function () {
    angular.module('piwikApp').controller('SearchEnginesController', SearchEnginesController);

    SearchEnginesController.$inject = ['$scope', 'piwikApi'];

    function SearchEnginesController($scope, piwikApi) {

        $scope.searchEngines = {};
        $scope.userDefinedSearchEngines = {};
        $scope.searchEngineLogos = {};
        $scope.busy = false;


        /**
         * Refreshes the search engine list (clears all caches)
         */
        $scope.refreshList = function () {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.withTokenInUrl();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'refresh',
                type: 'searchengines'
            }, 'GET');
            ajaxHandler.setCallback(function () {
                $scope.fetchSearchEngines();
            });
            ajaxHandler.send();
        };

        /**
         * Fetches available search engines
         */
        $scope.fetchSearchEngines = function () {

            if ($scope.busy) {
                return;
            }

            $scope.busy = true;

            $scope.fetchSearchEngineLogos(function () {

                var params = {
                    method: 'ReferrersManager.getSearchEngineDefinitions'
                };

                return piwikApi.fetch(params).then(function (searchEngines) {
                    if (!searchEngines) {
                        return;
                    }

                    $scope.searchEngines = searchEngines;
                })['finally'](function () {
                    $scope.busy = false;
                });
            });
        };

        /**
         * Fetches available search engine logos
         */
        $scope.fetchSearchEngineLogos = function (callback) {

            $scope.fetchUserDefinedSearchEngines(function () {

                var params = {
                    method: 'ReferrersManager.getSearchEngineLogos'
                };

                return piwikApi.fetch(params).then(function (searchEngineLogos) {
                    if (!searchEngineLogos) {
                        return;
                    }

                    $scope.searchEngineLogos = searchEngineLogos;
                })['finally'](function () {
                    callback();
                });
            });
        };

        /**
         * Fetches available user defined search engines
         */
        $scope.fetchUserDefinedSearchEngines = function (callback) {

            var params = {
                method: 'ReferrersManager.getUserDefinedSearchEngines'
            };

            return piwikApi.fetch(params).then(function (searchEngines) {
                if (!searchEngines) {
                    return;
                }

                $scope.userDefinedSearchEngines = searchEngines;
            })['finally'](function () {
                callback();
            });
        };


        // initialize list
        $scope.fetchSearchEngines();

    }
})();
