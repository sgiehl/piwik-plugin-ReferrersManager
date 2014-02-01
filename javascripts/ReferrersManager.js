$(document).ready(function () {

    $('#tabs').tabs();

    $('#checkurl').bind('click', function(){
        var ajaxHandler = new ajaxHelper();
        ajaxHandler.addParams({
            module: 'ReferrersManager',
            action: 'checkUrl',
            url: $('#urlToCheck').val()
        }, 'GET');
        ajaxHandler.setCallback(function(response){
            console.log(response);

            if (response.searchengine && response.searchengine.name) {

                $('.detectionresult .engine').text(response.searchengine.name);
                $('.detectionresult .keywords').html(response.searchengine.keywords);
                $('.detectionresult img').attr('src', response.searchengine.image);

            } else {
                $('.detectionresult .engine').text('');
                $('.detectionresult .keywords').text('');
                $('.detectionresult img').attr('src', 'plugins/Referrers/images/searchEngines/xx.png');
            }

            if (response.social && response.social.name) {

                $('.socialresult .social').text(response.social.name);
                $('.socialresult img').attr('src', response.social.image);

            } else {
                $('.socialresult .social').text('');
                $('.socialresult img').attr('src', 'plugins/Referrers/images/socials/xx.png');
            }
        });
        ajaxHandler.send(true);
    });

    $('[role="addSocial"]').click(function() {
        $('[role="addSocialForm"]').dialog({
            modal: true,
            width: 'auto'
        });
    });

    $('[role="submitAddSocial"]').click(function(e) {
        $('[role="addSocialError"]').fadeOut({time: 0});
        var ajaxHandler = new ajaxHelper();
        ajaxHandler.addParams({
            module: 'ReferrersManager',
            action: 'addSocial',
            name: $('#socialName').val(),
            host: $('#socialHost').val()
        }, 'GET');
        ajaxHandler.setCallback(function(response){
            if (response == 1) {
                location.hash = 'socialTab';
                piwikHelper.refreshAfter(1);
            } else {
                $('[role="addSocialError"]').show();
                setTimeout(function(){$('[role="addSocialError"]').fadeOut()}, 10000);
            }
        });
        ajaxHandler.send(true);
    });

    $('[role="removeSocial"]').click(function(e) {
        var host = $(this).attr('host');
        $('#removeDataConfirm').find('h2 .name').text(host);
        piwikHelper.modalConfirm('#removeDataConfirm', {yes: function () {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'removeSocial',
                host: host
            }, 'GET');
            ajaxHandler.setCallback(function(){
                location.hash = 'socialTab';
                piwikHelper.refreshAfter(1);
            });
            ajaxHandler.send(true);
        }});
    });

    $('[role="noDefaultSocials"]').click(function(){
        var ajaxHandler = new ajaxHelper();
        ajaxHandler.addParams({
            module: 'ReferrersManager',
            action: 'setDefaultSocialsDisabled',
            state: $(this).attr('state')
        }, 'GET');
        ajaxHandler.redirectOnSuccess({});
        ajaxHandler.send(true);
    });

    $('[role="addEngine"]').click(function() {
        $('[role="addEngineForm"]').dialog({
            modal: true,
            width: 'auto'
        });
    });

    $('[role="submitAddEngine"]').click(function(e) {
        $('[role="addEngineError"]').fadeOut({time: 0});
        var ajaxHandler = new ajaxHelper();
        ajaxHandler.addParams({
            module: 'ReferrersManager',
            action: 'addSearchEngine',
            name: $('#engineName').val(),
            host: $('#engineHost').val(),
            parameters: $('#engineParameter').val(),
            backlink: $('#engineBacklink').val(),
            charset: $('#engineCharset').val()
        }, 'GET');
        ajaxHandler.setCallback(function(response){
            if (response == 1) {
                location.hash = 'searchengineTab';
                piwikHelper.refreshAfter(1);
            } else {
                $('[role="addEngineError"]').show();
                setTimeout(function(){$('[role="addEngineError"]').fadeOut()}, 10000);
            }
        });
        ajaxHandler.send(true);
    });

    $('[role="removeEngine"]').click(function(e) {
        var host = $(this).attr('host');
        $('#removeDataConfirm').find('h2 .name').text(host);
        piwikHelper.modalConfirm('#removeDataConfirm', {yes: function () {
            var ajaxHandler = new ajaxHelper();
            ajaxHandler.addParams({
                module: 'ReferrersManager',
                action: 'removeSearchEngine',
                host: host
            }, 'GET');
            ajaxHandler.setCallback(function(){
                location.hash = 'searchengineTab';
                piwikHelper.refreshAfter(1);
            });
            ajaxHandler.send(true);
        }});
    });
});
