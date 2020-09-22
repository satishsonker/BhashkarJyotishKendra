$(document).ready(function () {
    let $feq = $('.horo-feq ul').data('inputkey');
    if ($feq) {
        $('.horo-feq ul li').each(function (ind, ele) {
            $(ele).removeClass('active');
            if ($feq === $(ele).data('key').toLowerCase()) {
                $(ele).addClass('active');
                displayHoro($feq);
            }
        });
    }

    $(document).on('click', '.horo-feq ul li', function () {
        $('.horo-feq ul li').removeClass('active');
        $(this).addClass('active');
        displayHoro($(this).data('key'));
    });
    function displayHoro(key) {
        $('.horo-content').hide();
        $('.horo-content[data-key="' + key + '"]').show();
    }
});