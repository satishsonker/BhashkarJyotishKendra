

const apiURLs = {
    baseUrl:'',
    root: {
        home: {
            sendKundaliDetails: '/home/SendKundaliDetails',
            sendQuery: '/home/SendQuery'
        }
    }
}

const pageUrls = {
    
}

if (location.host.indexOf('localhost') > -1) {
    apiURLs.baseUrl = "https://localhost:44339";
} else {
    apiURLs.baseUrl = "http://bjk.somee.com";
}

$(document).ajaxStart(function () {
    $('.lp-loader').show();
});

$(document).ajaxComplete(function () {
    $('.lp-loader').hide();
});