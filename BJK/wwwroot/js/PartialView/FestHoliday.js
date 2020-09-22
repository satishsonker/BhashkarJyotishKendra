$(document).ready(function () {
    $(document).on('click', '.fest-item li', function () {
        $('.fest-item li').removeClass('active');
        $('.list-container-fest .list-group').removeClass('list-group-visible');
        var $id = $(this).data('id');
        $(this).addClass('active');

        $('.list-container-fest .list-group').each(function (ind, ele) {
            if ($(ele).data('id') === $id) {
                $(ele).addClass('list-group-visible');
            }
        });
    });


});