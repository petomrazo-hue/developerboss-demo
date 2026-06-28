$(document).ready(function () {
    // Contact
    petermrazContactFormApi();
 
});

/* contact */
function petermrazContactFormApi() {
    if ($('.api-password-group').length > 0) {
        $.ajax('/Umbraco/OsobnaStranka/OsobnaStrankaApi/ContactFormApiKey',
            {
                type: 'POST',
                success: function (data) {
                    $('.api-password-group #Password').val(data.MainKey);
                    $('.api-password-group #ConfirmPassword').val(data.SubKey);
                }
            });
    }
}


