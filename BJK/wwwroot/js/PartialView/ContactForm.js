/// <reference path="../common/apiurls.js" />
/// <reference path="../common/api.js" />

$(document).ready(function () {
    var $txtEmail = $('#txtEmail').dxTextBox({
        value: "",
        maxLength:50,
        placeholder: "Enter your email",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Email is required."
        }, {
            type: "email",
            message: "Invalid email."
            }, {
                type: "custom",
                validationCallback: validateScript,
                message: "Contain some script. Please remove special charector(s)"
            }]
    }).dxTextBox('instance');

    var $txtMobile = $('#txtMobile').dxTextBox({
        value: "",
        placeholder: "Enter your mobile",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Mobile is required."
        }, {
                type: "custom",
                validationCallback: validateMobile,
                message: "Invalid Mobile."
            }, {
                type: "custom",
                validationCallback: validateScript,
                message: "Contain some script. Please remove special charector(s)"
            }, {
                type: "custom",
                validationCallback: validateScript,
                message: "Contain some script. Please remove special charector(s)"
            }]
    }).dxTextBox('instance');

    var $txtName = $('#txtName').dxTextBox({
        value: "", maxLength: 50,
        placeholder: "Enter your name",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Name is required."
        }, {
                type: "custom",
                validationCallback: validateScript,
                message: "Contain some script. Please remove special charector(s)"
            }]
    }).dxTextBox('instance');

    var $ddlQuestion = $('#ddlQuestion').dxSelectBox({
        items: ["Question 1", "Question 2", "Question 3"],
        placeholder: "Quetion",
        showClearButton: true,
        searchEnabled: true,
        searchMode: "contains",
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Gender is required."
        }, {
                type: "custom",
                validationCallback: validateScript,
                message: "Contain some script. Please remove special charector(s)"
            }]
    }).dxSelectBox('instance');

    var $txtQuery = $('#txtQuery').dxTextArea({
        value: "",
        maxLength:500,
        placeholder: "Enter your query",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Query is required."
        }, {
                type: "custom",
                validationCallback: validateScript,
                message: "Contain some script. Please remove special charector(s)"
            }]
    }).dxTextArea('instance');
    var $btn = $("#btnContactForm").dxButton({
        icon: "save",
        type: "success",
        text: "Send",
        useSubmitBehavior: true,
        onClick: function () {
            if ($('.dx-validationsummary').children().length > 0) {
                $('#summary-container').show();
            }
        }
    }).dxButton('instance');

    $('#frmContactForm').on('submit', function (e) {

        e.preventDefault();
        let param = {};
        param.Name = $txtName.option('value');
        param.Email = $txtEmail.option('value');
        param.Phone = $txtMobile.option('value');
        param.Question = $ddlQuestion.option('value');
        param.Query = $txtQuery.option('value');
        api.http.post(apiURLs.root.home.sendQuery, param).then(function (res) {
            if (res.code === 200) {
                toastr["success"]("Request Sent");
                $txtName.option('value','');
                $txtEmail.option('value', '');
                $txtMobile.option('value', '');
                $ddlQuestion.option('value', '');
                $txtQuery.option('value', '');
            }
            else {
                toastr["error"]("Request not Sent")
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
function validateScript(e) {
    var res = e.value.match(/(<\/?[a-z]*>?)|([$]([a-z]*)?)|(="[a-z-_:;%\s0-1]*")/gmi);
    return res === null || res.length === 0 ? true : false;
}



