$(document).ready(function () {
    $(document).on('click', '.bjk-navbar-toggler', function () {
        $('.bjk-navbar-container').show();
    });

    $(document).on('click', '.bjk-profile-close', function () {
        $('.bjk-navbar-container').hide();
    });
});