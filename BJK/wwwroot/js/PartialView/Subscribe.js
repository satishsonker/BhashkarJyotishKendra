/// <reference path="common/apiurls.js" />
/// <reference path="common/api.js" />

$(document).ready(function () {
    var $txtEmainSubscribe = $('#txtEmainSubscribe').dxTextBox({
        value: "",
        placeholder: "Enter your email",
        stylingMode: "filled",
        buttons: [{
            name: "btnfrmSubcribe",
            location: "after",
            options: {
                text: "Subcribe",
                stylingMode: "filled",
                type: "default",
                useSubmitBehavior: true,
                onClick: function () {
                    if ($('.dx-validationsummary').children().length > 0) {
                        $('#summary-container').show();
                    }
                }
            }
        },"clear"]
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Email is required."
        }, {
            type: "email",
            message: "Invalid email."
        }]
    }).dxTextBox('instance');
    $('#frmSubscribe').on('submit', function (e) {

        e.preventDefault();
        let param = {};
        param.Email = $txtEmainSubscribe.option('value');
        api.http.post(apiURLs.root.home.sendKundaliDetails, param).then(function (res) {
            if (res.code === 200) {
                toastr["success"]("Subscribed")
            }
            else {
                toastr["error"]("Request not Subscribed")
            }
        }).catch(apiError)
    });
});

function validateBirthTime(e) {
    var res = e.value.match(/^[0-1]{1}[0-9]{1}:[0-5]{1}[0-9]{1}:[0-5]{1}[0-9]{1}( )(AM|PM)$/g);
    return res === null || res.length === 0 ? false : true;
}

function validateMobile(e) {
    var res = e.value.match(/^[6-9]{1}[0-9]{9}$/g);
    return res === null || res.length === 0 ? false : true;
}

$(document).on('click', '.subscribe-item li', function () {
    $('.subscribe-item li').removeClass('active');
    $(this).addClass('active');
});


