/// <reference path="common/apiurls.js" />
/// <reference path="common/api.js" />

$(document).ready(function () {
    var $txtEmail = $('#txtEmail').dxTextBox({
        value: "",
        placeholder: "Enter your email",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Email is required."
        }, {
            type: "email",
            message: "Invalid email."
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
            }]
    }).dxTextBox('instance');

    var $txtName = $('#txtName').dxTextBox({
        value: "",
        placeholder: "Enter your name",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Name is required."
        }]
    }).dxTextBox('instance');

    var $txtDob = $('#txtDob').dxDateBox({
        displayFormat: "EEEE, MMM dd",
        value: new Date(),
        max: new Date(),
        placeholder: "Enter your DOB",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "DOB is required."
        }]
    }).dxDateBox('instance');

    var $ddlGender = $('#ddlGender').dxSelectBox({
        items: ["Male","Female"],
        placeholder: "Gender",
        showClearButton: true,
        searchEnabled: true,
        searchMode: "contains",
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Gender is required."
        }]
    }).dxSelectBox('instance');
    var $txtPlace = $('#txtPlace').dxTextBox({
        value: "",
        placeholder: "Enter birth Place",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Birth Place is required."
        }]
    }).dxTextBox('instance');

    var $txtTime = $('#txtTime').dxTextBox({
        value: "",
        placeholder: "HH:MM:SS AM/PM",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Birth Time is required."
        },{
            type: "custom",
            validationCallback: validateBirthTime,
            message: "Invalid Birth Time."
        }]
    }).dxTextBox('instance');

    var $btn = $("#btnfrmSendKundali").dxButton({
        type: "danger",
        text: "Save",
        useSubmitBehavior: true,
        onClick: function () {
            if ($('.dx-validationsummary').children().length > 0) {
                $('#summary-container').show();
            }
        }
    }).dxButton('instance');

   

    $('#frmSendKundali').on('submit', function (e) {

        e.preventDefault();
        let param = {};
        param.Name = $txtName.option('value');
        param.Email = $txtEmail.option('value');
        param.Phone = $txtMobile.option('value');
        param.DOB = $txtDob.option('value');
        param.Place = $txtPlace.option('value');
        param.Time = $txtTime.option('value');
        param.Gender = $ddlGender.option('value');
        api.http.post(apiURLs.root.home.sendKundaliDetails, param).then(function (res) {
            if (res.code === 200) {
                toastr["success"]("Request Sent")
            }
            else {
                toastr["error"]("Request not Sent")
            }
        }).catch(apiError)
    });

    // Kundali Matching

    var $txtKMEmail = $('#txtKMEmail').dxTextBox({
        value: "",
        hint:'Enter your email address for future contact.',
        placeholder: "Enter your email",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Email is required."
        }, {
            type: "email",
            message: "Invalid email."
        }]
    }).dxTextBox('instance');

    var $txtKMMobile = $('#txtKMMobile').dxTextBox({
        value: "",
        placeholder: "Enter your mobile",
        hint: 'Enter your mobile number for future contact.',
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Mobile is required."
        }, {
            type: "custom",
            validationCallback: validateMobile,
            message: "Invalid Mobile."
        }]
    }).dxTextBox('instance');

    var $txtBoyName = $('#txtBoyName').dxTextBox({
        value: "",
        placeholder: "Enter Boy name",
        hint: 'Enter boy name',
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy Name is required."
        }]
    }).dxTextBox('instance');

    var $txtBoyDob = $('#txtBoyDob').dxDateBox({
        displayFormat: "EEEE, MMM dd", hint: 'Enter boy date of birth',
        value: new Date(),
        max: new Date(),
        placeholder: "Enter Boy DOB",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy DOB is required."
        }]
    }).dxDateBox('instance');

    var $txtBoyPlace = $('#txtBoyPlace').dxTextBox({
        value: "",
        placeholder: "Enter Boy birth Place", hint: 'Enter boy birth place',
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy Birth Place is required."
        }]
    }).dxTextBox('instance');

    var $txtBoyTime = $('#txtBoyTime').dxTextBox({
        value: "",
        placeholder: "HH:MM:SS AM/PM", hint: 'Enter boy birth time in HH:MM:SS AM/PM format',
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy Birth Time is required."
        }, {
            type: "custom",
            validationCallback: validateBirthTime,
            message: "Invalid Boy Birth Time."
        }]
    }).dxTextBox('instance');

    var $txtGirlName = $('#txtGirlName').dxTextBox({
        value: "",
        placeholder: "Enter Boy name",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy Name is required."
        }]
    }).dxTextBox('instance');

    var $txtGirlDob = $('#txtGirlDob').dxDateBox({
        displayFormat: "EEEE, MMM dd",
        value: new Date(),
        max: new Date(),
        placeholder: "Enter Boy DOB",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy DOB is required."
        }]
    }).dxDateBox('instance');

    var $txtGirlPlace = $('#txtGirlPlace').dxTextBox({
        value: "",
        placeholder: "Enter Boy birth Place",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy Birth Place is required."
        }]
    }).dxTextBox('instance');

    var $txtGirlTime = $('#txtGirlTime').dxTextBox({
        value: "",
        placeholder: "HH:MM:SS AM/PM",
        showClearButton: true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Boy Birth Time is required."
        }, {
            type: "custom",
            validationCallback: validateBirthTime,
            message: "Invalid Boy Birth Time."
        }]
    }).dxTextBox('instance');

    var $btn = $("#btnNextKM").dxButton({
        type: "danger",
        text: "Next",
        useSubmitBehavior: true,
        onClick: function () {
            if ($('.dx-validationsummary').children().length > 0) {
                $('#summary-container').show();
            }
        }
    }).dxButton('instance');
    $('#frmKundaliMatching').on('submit', function (e) {

        e.preventDefault();
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


