(function () {
    angular.module('piwikApp').controller('ReferrersManagerController', ReferrersManagerController);

    ReferrersManagerController.$inject = ['$scope', 'piwik'];

    function ReferrersManagerController($scope, piwik){

        $scope.refreshSocials = function()
        {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'refresh',
                type: 'socials'
            }, 'GET');
            ajaxHandler.setCallback(function(){
                location.hash = 'socialTab';
                piwikHelper.refreshAfter(1);
            });
            ajaxHandler.send();
        };


        $scope.setUseDefaultSocials = function( state ){
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'setDefaultSocialsDisabled',
                state: state
            }, 'GET');
            ajaxHandler.setCallback(function(){
                location.hash = 'socialTab';
                piwikHelper.refreshAfter(1);
            });
            ajaxHandler.send();
        };
    }
})();
