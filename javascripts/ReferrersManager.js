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

            if (response && response.name) {

                $('.detectionresult .engine').text(response.name);
                $('.detectionresult .keywords').html(response.keywords);
                $('.detectionresult img').attr('src', response.image);

            } else {
                $('.detectionresult .engine').text('');
                $('.detectionresult .keywords').text('');
                $('.detectionresult img').attr('src', 'plugins/Referrers/images/searchEngines/xx.png');
            }

        });
        ajaxHandler.send(true);
    });

    $('#tabs').tabs();
});