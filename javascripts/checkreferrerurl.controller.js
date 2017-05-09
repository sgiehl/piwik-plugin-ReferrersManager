(function () {
    angular.module('piwikApp').controller('CheckReferrerUrlController', CheckReferrerUrlController);

    CheckReferrerUrlController.$inject = ['$scope'];

    function CheckReferrerUrlController($scope) {
        $scope.urlToCheck = '';
        $scope.detectedEngine = '';
        $scope.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
        $scope.detectedKeyword = '';
        $scope.detectedSocial = '';
        $scope.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';

        $scope.clearResult = function () {
            $scope.detectedEngine = '';
            $scope.detectedKeyword = '';
            $scope.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
            $scope.detectedSocial = '';
            $scope.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
        };

        $scope.checkResult = function () {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.withToken = true;
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'checkUrl',
                url: $scope.urlToCheck
            }, 'GET');
            ajaxHandler.setCallback(function (response) {
                if (response.searchengine && response.searchengine.name) {

                    $scope.detectedEngine = response.searchengine.name;
                    $scope.detectedKeyword = response.searchengine.keywords;
                    $scope.detectedEngineImg = response.searchengine.image;

                } else {

                    $scope.detectedEngine = '';
                    $scope.detectedKeyword = '';
                    $scope.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
                }

                if (response.social && response.social.name) {

                    $scope.detectedSocial = response.social.name;
                    $scope.detectedSocialImg = response.social.image;

                } else {
                    $scope.detectedSocial = '';
                    $scope.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
                }

                $scope.$apply();
            });
            ajaxHandler.send();
        };
    }
})();
