(function () {
    angular.module('piwikApp').controller('SocialsController', SocialsController);

    SocialsController.$inject = ['$scope', 'piwikApi'];

    function SocialsController($scope, piwikApi) {

        $scope.socials = [];
        $scope.socialNames = [];
        $scope.userDefinedSocials = [];
        $scope.socialLogos = [];
        $scope.busy = false;
        $scope.showSocialForm = false;
        $scope.searchText = '';

        $scope.newSocialData = {
            name: '',
            host: ''
        };

        $scope.showAddSocialForm = function(val) {
            $scope.showSocialForm = val;
        };

        $scope.setUseDefaultSocials = function (state) {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'setDefaultSocialsDisabled',
                state: state
            }, 'GET');
            ajaxHandler.setCallback(function () {
                $scope.fetchSocials();
                $scope.ownSocialDefinitions = state;
            });
            ajaxHandler.send();
        };

        $scope.removeSocial = function (host) {
            $('#removeDataConfirm').find('h2 .name').text(host);
            piwikHelper.modalConfirm('#removeDataConfirm', {
                yes: function () {
                    var params = {
                        method: 'ReferrersManager.removeSocial',
                        host: host
                    };

                    return piwikApi.fetch(params).then(function () {
                        $scope.refreshList();
                    });
                }
            });
        };

        $scope.addSocial = function () {
            var params = $.extend({
                method: 'ReferrersManager.addSocial'
            }, $scope.newSocialData);

            return piwikApi.fetch(params).then(function (response) {
                if (!response) {
                    showAddSocialError();
                    return;
                }

                // hide/reset form and refresh list
                $scope.newSocialData = {
                    name: '',
                    host: ''
                };
                $scope.refreshList();
                $scope.showAddSocialForm(false);
            }, function () {
                showAddSocialError()
            });
        };

        function showAddSocialError() {
            var UI = require('piwik/UI');
            var notification = new UI.Notification();
            notification.show(_pk_translate('ReferrersManager_AddSocialError'), {
                context: 'error',
                id: 'addSocialError'
            });
            notification.scrollToNotification();
        }

        /**
         * Refreshes the social list (clears all caches)
         */
        $scope.refreshList = function () {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'refresh',
                type: 'socials'
            }, 'GET');
            ajaxHandler.setCallback(function () {
                $scope.fetchSocials();
            });
            ajaxHandler.send();
        };

        /**
         * Fetches available socials
         */
        $scope.fetchSocials = function () {

            if ($scope.busy) {
                return;
            }

            $scope.busy = true;

            $scope.fetchSocialLogos(function () {

                var params = {
                    method: 'ReferrersManager.getSocialDefinitions'
                };

                return piwikApi.fetch(params).then(function (socials) {
                    if (!socials) {
                        return;
                    }

                    $scope.socials = socials;
                    $scope.socialNames = Object.keys(socials);

                })['finally'](function () {
                    $scope.busy = false;
                });
            });
        };

        /**
         * Fetches available social logos
         */
        $scope.fetchSocialLogos = function (callback) {

            $scope.fetchUserDefinedSocials(function () {

                var params = {
                    method: 'ReferrersManager.getSocialLogos'
                };

                return piwikApi.fetch(params).then(function (socialLogos) {
                    if (!socialLogos) {
                        return;
                    }

                    $scope.socialLogos = socialLogos;
                })['finally'](function () {
                    callback();
                });
            });
        };

        /**
         * Fetches available user defined socials
         */
        $scope.fetchUserDefinedSocials = function (callback) {

            var params = {
                method: 'ReferrersManager.getUserDefinedSocials'
            };

            return piwikApi.fetch(params).then(function (socials) {
                if (!socials) {
                    return;
                }

                $scope.userDefinedSocials = socials;
            })['finally'](function () {
                callback();
            });
        };

        // initialize list
        $scope.fetchSocials();
    }
})();
