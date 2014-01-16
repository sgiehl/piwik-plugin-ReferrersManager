$(document).ready(function () {

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

    $('#tabs').tabs();

    $('[role="addSocial"]').click(function() {
        $('[role=addSocialForm]').dialog({
            modal: true,
            width: '75%'
        });
    });
});
