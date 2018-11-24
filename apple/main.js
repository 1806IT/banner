//给小图标记
var pages=$('ol>li')
var length = pages.length
var n = 0;
$(pages[0]).css('opacity', '1')
for (var i = 0; i < length;i++){
    $(pages[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var px=-400*index
        $('#images').css({ transform: 'translate(' + px + 'px)' })
        $(this).css('opacity', '1')
            .siblings('li').css('opacity', '0.4')
    })
}
var timeId=setInterval(function(){
    var index1 = n % length;
    var px = -400 * index1
    console.log(index1)
    $('#images').css({ transform: 'translate(' + px + 'px)' })
    $(pages[index1]).css('opacity', '1')
        .siblings('li').css('opacity', '0.4')
    n++;
},1000)
$('main').on('mouseenter', function (){
    clearInterval(timeId)
})
$('main').on('mouseleave', function () {
    timeId = setInterval(function () {
        var index1 = n % length;
        var px = -400 * index1
        console.log(index1)
        $('#images').css({ transform: 'translate(' + px + 'px)' })
        $(pages[index1]).css('opacity', '1')
            .siblings('li').css('opacity', '0.4')
        n++;
    }, 1000)
})
