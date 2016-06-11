/*军训页面自定义脚本*/
$(function () {
    var picNum = 1;//第几张图片

    function changePic() {
        $('#pic').slideToggle('slow', function () {
            $(this).slideToggle('slow');
        });
        $(".pic").attr("src", "img\\jx" + picNum + ".jpg");
    }

    function followChange() {
        $('ul>li[title]').each(function () {
            if ($(this).attr('title') == picNum)
                $(this).addClass('active').siblings().removeClass('active');
        });
    }

    //上一张图片按钮的单击操作
    $("#btnPrePic").click(function () {
        picNum--;
        if (picNum < 1)
            picNum = 9;
        followChange();
        changePic();
    });

    //下一张图片按钮的单击操作
    $("#btnNextPic").click(function () {
        picNum++;
        if (picNum > 9)
            picNum = 1;
        followChange();
        changePic();
    });

    $('ul>li').click(function () {
        var val = parseInt($(this).text());
        if (isNaN(val) == true)
            return;
        picNum = val;
        changePic();
        $(this).addClass('active').siblings().removeClass('active');
    });
});