setTimeout(function() {
    $('.inner').addClass('active');
}, 1000)

$('.item').on('click', function() {
    $('.wrapper').addClass('active');
    $(this).addClass('active');

})

$('.close').on('click', function(e) {
    e.stopPropagation(); //此处点击事件存在冒泡 子元素close 冒泡给父元素item 又瞬间加上了active ，所以没变化，要阻止冒泡
    $('.item').removeClass('active');
    $('.wrapper').removeClass('active');
    console.log(1);
})