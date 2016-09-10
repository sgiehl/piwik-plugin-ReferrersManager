$(document).ready(function () {

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

});
