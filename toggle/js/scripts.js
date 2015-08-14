/* simple btton group select functionality */
$('.btn-group label').click(function (){
    $('.btn-group label').removeClass('btn-inverse');
    $(this).addClass('btn-inverse');
});