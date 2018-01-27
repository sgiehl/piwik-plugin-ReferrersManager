(function () {
    angular.module('piwikApp').controller('SearchEnginesController', SearchEnginesController);

    SearchEnginesController.$inject = ['$scope', 'piwikApi'];

    function SearchEnginesController($scope, piwikApi) {

        $scope.searchEngines = [];
        $scope.searchEngineNames = [];
        $scope.userDefinedSearchEngines = [];
        $scope.searchEngineLogos = [];
        $scope.busy = false;
        $scope.showEngineForm = false;
        $scope.searchText = '';

        $scope.newEngineData = {
            name: '',
            host: '',
            parameters: '',
            backlink: '',
            charset: ''
        };

        $scope.showAddSearchEngineForm = function(val) {
            $scope.showEngineForm = val;
        };

        $scope.removeEngine = function(host) {
            $('#removeDataConfirm').find('h2 .name').text(host);
            piwikHelper.modalConfirm('#removeDataConfirm', {yes: function () {
                var params = {
                    method: 'ReferrersManager.removeSearchEngine',
                    host: host
                };

                return piwikApi.fetch(params).then(function () {
                    $scope.refreshList();
                });
            }});
        };

        $scope.addSearchEngine = function() {
            var params = $.extend({
                method: 'ReferrersManager.addSearchEngine'
            }, $scope.newEngineData);

            return piwikApi.fetch(params).then(function (response) {
                if (!response) {
                    showAddEngineError();
                    return;
                }

                // hide/reset form and refresh list
                $scope.showAddSearchEngineForm(false);
                $scope.newEngineData = {
                    name: '',
                    host: '',
                    parameters: '',
                    backlink: '',
                    charset: ''
                };
                $scope.refreshList();
            }, function() {
                showAddEngineError()
            });
        };

        function showAddEngineError()
        {
            var UI = require('piwik/UI');
            var notification = new UI.Notification();
            notification.show(_pk_translate('ReferrersManager_AddEngineError'), {context: 'error', id:'addEngineError'});
            notification.scrollToNotification();
        }

        /**
         * Refreshes the search engine list (clears all caches)
         */
        $scope.refreshList = function () {
            var ajaxHandler = new ajaxHelper();
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
                    $scope.searchEngineNames = Object.keys(searchEngines);
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
