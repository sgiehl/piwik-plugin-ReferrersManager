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
                $('.detectionresult .keywords').text(response.keywords);
                $('.detectionresult img').attr('src', response.image);

            }

        });
        ajaxHandler.send(true);
    });

});