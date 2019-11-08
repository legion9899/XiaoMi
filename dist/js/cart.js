// cookie免密登录
/* const login = getCookie('login')
if (!login) {
  // 表示 !login 是 true，login 是 false
  // 表示没有登录过，跳转回登录页
  window.location.href = './login.html'
} */


var arr = getCookie('shoplist');
var res = JSON.parse(arr);
var info = "";
for(var i=0 ; i < res.length ; i++){
    var res1 = res[i];
    info += 
        '<div class="item-box">'+
            '<div class="item-table">'+
                '<div class="item-row">'+
                    '<div class="col col-check">'+
                        '<input type="checkbox" class="ck">'+
                    '</div>'+
                    '<div class="col col-img">'+
                        '<a href="javascript:;">'+
                            '<img src="' + res1.goods_img + '"></a>'+
                    '</div>'+
                    '<div class="col col-name">'+
                        '<h3 class="name"><a data-name="' + res1.goods_title + '" href="">' + res1.goods_title + '</a></h3>'+
                    '</div>'+
                    '<div class="col col-price pris">'+ res1.goods_newprice + '元<p class="pre-info"></p>'+
                    '</div>'+
                    '<div data-id="' + res1.goods_id + '" class="col col-num sem">'+
                        '<div class="change-goods-num">'+
                            '<a data-number="-1" href="javascript:;">'+
                                '<i class="updateCount">-</i>'+
                            '</a>'+
                            '<p class="num">' + res1.count + '</p>'+ 
                            '<a data-number="1" href="javascript:;">'+
                                '<i class="updateCount">+</i>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col col-total smallTotal">'+ (parseFloat(res1.goods_newprice * res1.count).toFixed(1)) + '</div>'+
                    '<div class="col col-action">'+
                        '<a href="javascript:;" data-msg="确定删除吗">'+
                            '<i class="del iconfont icon-guanbi"></i>'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
}
$('.list-body').html(info);

// 统计
function jiesuan(){
    count = 0;
    var money = 0;
    $('.ck:checked').each(function(){
        count += parseInt($(this).parent().parent().find('.num').html());
        money += parseFloat($(this).parent().parent().find('.smallTotal').html());
    })
    $('#totalNum').html(count);
    $('.totalPrice').html(money);
    if(money < 150){
        $('.want').html((parseFloat(150 - money).toFixed(1)));
    }
}
$('.ck').click(function(){
    jiesuan();
    $('#selNum').html(count);
    var counts = 0;
    for(var i=0 ; i < res.length ; i++){
        counts += res[i].count;
    }
    $('#totalNum').html(counts);
    $('.no-select').toggleClass('hide');
    $('.btn-a').toggleClass('select');
    if(this.checked == true){
        $('.addonitems-tips').css("display","block");
        $('.btn-a').click(function(){
            location.href = "../pages/login.html";
        })
    }else{
        $('.addonitems-tips').css("display","none");
    }
})
$('.all').click(function(){
    $('.ck').prop("checked",$(this).prop("checked"));
    jiesuan();
    $('#selNum').html(count);
    $('.no-select').toggleClass('hide');
    $('.btn-a').toggleClass('select');
    if(this.checked == true){
        $('.addonitems-tips').css("display","block");
        $('.btn-a').click(function(){
            location.href = "../pages/login.html";
        })
    }else{
        $('.addonitems-tips').css("display","none");
    }
})

// 购物车为空
if(res.length == 0){
    $('.cartbox').remove();
    $('.cart-empty').removeClass('hide');
}

// 删除
$('.del').click(function(){
    var pid = $(this).parent().parent().parent().find('.sem').data('id');
    var pname = $(this).parent().parent().parent().find('.name').children('a').data('name');
    $('.modal-alert').removeClass('hide');
    $('.modal-back').removeClass('hide');
    $('.btn-primary').click(function(){
        for( var i=0 ; i < res.length ; i++){
            if(pid == res[i].goods_id && pname == res[i].goods_title){
                res.splice(i,1);
                setCookie('shoplist',JSON.stringify(res));
                $(this).parent().parent().parent().parent().parent().remove();
                location.href = "../pages/cart.html";
                break;
            }
        }
        
    })
    $('.btn-gray').click(function(){
        $('.modal-alert').addClass('hide');
        $('.modal-back').addClass('hide');
    })
    
    
})

// 加减计算
$('.updateCount').click(function(){
    var pid = $(this).parent().parent().parent().data('id');
    var pname = $(this).parent().parent().parent().parent().find('.name').children('a').data('name');
    var num = $(this).parent().parent().find('.num').html();
    var sign = $(this).parent().data('number');
    var pris = parseFloat($(this).parent().parent().parent().parent().find('.pris').html());
    if(sign == -1 && num == 1){
        return;
    }
    for( var i=0 ; i < res.length ; i++){
        if(pid == res[i].goods_id && pname == res[i].goods_title){
            sign === 1 ? res[i].count++ : res[i].count--;
            setCookie('shoplist',JSON.stringify(res));
            $(this).parent().parent().find('.num').html(res[i].count);
            $(this).parent().parent().parent().parent().find('.smallTotal').html((parseFloat(res[i].count * pris).toFixed(1)));
            break;
        }
    }
})