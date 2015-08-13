/*jQuery(function ($) {
    $('div.btn-group[data-toggle-name]').each(function () {
        var group = $(this);
        var form = group.parents('form').eq(0);
        var name = group.attr('data-toggle-name');
        var hidden = $('input[name="' + name + '"]', form);
        $('button', group).each(function () {
            var button = $(this);
            button.live('click', function () {
                hidden.val($(this).val());
                alert(hidden.val());
            });
            if (button.val() == hidden.val()) {
                button.addClass('active');
            }
        });
    });
});

$('.btn-group label').click(function ({

}));*/