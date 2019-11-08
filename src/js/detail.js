// console.log(window.location);

const reg = /id=(\d+)/;

// console.log(reg.exec(window.location.search)[1]);

if(!reg.test(window.location.search)){
    window.location.href = './list.html';
}

const id = reg.exec(window.location.search)[1];
const details = document.querySelector('.details');
const info = document.querySelector('.infomation');

getDetail();

async function getDetail(){
    const res = await pAjax({
        url : '../server/detail.php',
        dataType : true,
        data : {
            id : id
        }
    })
    //  console.log(res);
    if(!res){
        alert('您要查找的商品不存在');
        window.location.href = './list.html';
    }

    details.innerHTML = `
        <div id="proHeader">
            <div class="product-box">
                <div class="nav-bar">
                    <div class="container">
                        <h2>${res.goods_title}</h2>
                        <div class="con">
                            <div class="right">
                                <a href="">用户评价</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="buyBox">
            <div class="box">
                <div class="pro-choose-main">
                    <div class="pro-view span10">
                        <div class="img-con">
                            <div class="ui-wrapper">
                                <div class="ui-viewport">
                                    <div class="sliderWrap">
                                        <img src="${res.goods_bigimg}" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pro-info span10">
                        <h1>
                            <span class="name">${res.goods_title}</span>
                        </h1>
                        <p class="sale-desc">${res.goods_saledesc}</p>
                        <div class="main">
                            <p class="company">${res.goods_company}</p>
                            <div class="pro-price">
                                <span class="price">${res.goods_newprice}元
                                    <del>${res.goods_oldprice}</del>
                                </span>
                            </div>
                            <div class="address-wrap">
                                <div class="user-address">
                                    <i></i>
                                    <div>
                                        <div class="address-info">
                                            <span class="item">北京</span>
                                            <span class="item">北京市</span>
                                            <span class="item">东城区</span>
                                            <span class="item">安定门街道</span>
                                        </div>
                                        <span class="choose-regions">修改</span>
                                    </div>
                                    <div class="product-status">
                                        <span class="sale">有现货</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-wrap">
                                <div class="pro-choose">
                                    <div class="step-title">选择颜色</div>
                                    <ul class="step-list">
                                        <li class="btn-biglarge">
                                            <a class="step-name" href="">
                                                <img class="icon" src="${res.goods_smimg1}" alt="">${res.goods_smword1}
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="pro-list">
                                <ul>
                                    <li>${res.goods_title} ${res.goods_smword1}
                                        <span>${res.goods_newprice}元</span>
                                    </li>
                                    <li class="totalPrice">总计   : ${res.goods_newprice}元 </li>
                                </ul>
                            </div>
                            <ul class="btn-wrap">
                                <li>
                                    <a data-id="${res.goods_id}" data-img="${res.goods_img}" data-title="${res.goods_title}" data-price="${res.goods_newprice}" class="btn-primary" href="../pages/cart.html">加入购物车</a>
                                </li>
                                <li>
                                    <a class="btn-likes" href="../pages/login.html">
                                        <i class="iconfont icon-xin-s"></i>喜欢 
                                    </a>
                                </li>
                            </ul>
                            <div class="pro-policy">
                                <a href=""><span class="support"><p>小米自营</p></span></a>
                                <a href=""><span class="support"><p>小米发货</p></span></a>
                                <a href=""><span class="support"><p>七天无理由退货</p></span></a>
                                <a href=""><span class="support"><p>运费说明</p></span></a>
                                <a href=""><span class="support"><p>售后服务政策</p></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    info.innerHTML = `${res.goods_introduce}`;

    
    $('.btn-primary').click(function(){
        var arr = [];
        var json = {
            goods_id : $(this).data("id"),
            goods_img : $(this).data("img"),
            goods_title : $(this).data("title"),
            goods_newprice : $(this).data("price"),
            count : 1
        }
        var oldCookie = getCookie("shoplist");
        var flag = true;
        if(JSON.parse(oldCookie.length) != 0){
            arr = JSON.parse(oldCookie);
            for(var i=0 ; i < arr.length ; i++){
                if(json.goods_id == arr[i].goods_id && json.goods_title == arr[i].goods_title){
                    arr[i].count++;
                    flag = false;
                    break;
                }
            }
        }
        if(flag){
            arr.push(json);
        }
        
        setCookie("shoplist",JSON.stringify(arr));
        console.log(document.cookie);
    })
}

var keyword = document.querySelector('.result-list');

var xhr = new XMLHttpRequest();
xhr.open('get','../data/detail.json');
xhr.onload = function(){
    s3 = JSON.parse(xhr.responseText).search;
    let p3 = '';
    for(let i=0 ; i < s3.length ; i++){
        ls3 = document.createElement('li');
        p3 = `
            <a href="javascript:;">
                <span class="keyword">${s3[i].key}</span>
            </a>
        `
        ls3.innerHTML += p3;
        keyword.appendChild(ls3);
    }
 
}
xhr.send();


var close = document.querySelector('.close');
var login = document.querySelector('.login-notic');

close.onclick = function(e){
    e.preventDefault();
    login.style.display = "none";
}
