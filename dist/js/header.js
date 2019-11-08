// 获取元素
var phone = document.querySelector('.box1')
var television = document.querySelector('.box2')
var notebook = document.querySelector('.box3')
var household = document.querySelector('.box4')
var trip = document.querySelector('.box5')
var intellect = document.querySelector('.box6')
var power = document.querySelector('.box7')
var health = document.querySelector('.box8')
var headset = document.querySelector('.box9')
var life = document.querySelector('.box10')

// 下滑商品页
var m1 = document.querySelector('.m1');
var m2 = document.querySelector('.m2');
var m3 = document.querySelector('.m3');
var m4 = document.querySelector('.m4');
var m5 = document.querySelector('.m5');
var m6 = document.querySelector('.m6');
var m7 = document.querySelector('.m7');



// 发送请求
var xhr = new XMLHttpRequest()
xhr.open('get', '../data/home-hero.json')
xhr.onload = function () {

    // 手机
    var data = JSON.parse(xhr.responseText).phone
    let li = ''
    for(let i=0 ; i < data.length ; i++){
      var  div = document.createElement('li')
        li = `
            <a href="">
                <img src="${data[i].img}" alt="">
                <span class="text">${data[i].text}</span>
            </a>
        `
        div.innerHTML += li
        phone.appendChild(div)
    }

    // 电视
    var data2 = JSON.parse(xhr.responseText).television
    let li2 = ''
    for(let i=0 ; i < data2.length ; i++){
      var  div2 = document.createElement('li')
        li2 = `
            <a href="javascript:;">
                <img src="${data2[i].img}" alt="">
                <span class="text">${data2[i].text}</span>
            </a>
        `
        div2.innerHTML += li2
        television.appendChild(div2)
    }

    // 笔记本
    var data3 = JSON.parse(xhr.responseText).notebook
    let li3 = ''
    for(let i=0 ; i < data3.length ; i++){
      var  div3 = document.createElement('li')
        li3 = `
            <a href="javascript:;">
                <img src="${data3[i].img}" alt="">
                <span class="text">${data3[i].text}</span>
            </a>
        `
        div3.innerHTML += li3
        notebook.appendChild(div3)
    }

    // 家电
    var data4 = JSON.parse(xhr.responseText).household
    let li4 = ''
    for(let i=0 ; i < data4.length ; i++){
      var  div4 = document.createElement('li')
        li4 = `
            <a href="javascript:;">
                <img src="${data4[i].img}" alt="">
                <span class="text">${data4[i].text}</span>
            </a>
        `
        div4.innerHTML += li4
        household.appendChild(div4)
    }

    // 出行
    var data5 = JSON.parse(xhr.responseText).trip
    let li5 = ''
    for(let i=0 ; i < data5.length ; i++){
      var  div5 = document.createElement('li')
        li5 = `
            <a href="javascript:;">
                <img src="${data5[i].img}" alt="">
                <span class="text">${data5[i].text}</span>
            </a>
        `
        div5.innerHTML += li5
        trip.appendChild(div5)
    }

    // 智能
    var data6 = JSON.parse(xhr.responseText).intellect
    let li6 = ''
    for(let i=0 ; i < data6.length ; i++){
      var  div6 = document.createElement('li')
        li6 = `
            <a href="javascript:;">
                <img src="${data6[i].img}" alt="">
                <span class="text">${data6[i].text}</span>
            </a>
        `
        div6.innerHTML += li6
        intellect.appendChild(div6)
    }

    // 电源
    var data7 = JSON.parse(xhr.responseText).power
    let li7 = ''
    for(let i=0 ; i < data7.length ; i++){
      var  div7 = document.createElement('li')
        li7 = `
            <a href="javascript:;">
                <img src="${data7[i].img}" alt="">
                <span class="text">${data7[i].text}</span>
            </a>
        `
        div7.innerHTML += li7
        power.appendChild(div7)
    }
    
    // 健康
    var data8 = JSON.parse(xhr.responseText).health
    let li8 = ''
    for(let i=0 ; i < data8.length ; i++){
      var  div8 = document.createElement('li')
        li8 = `
            <a href="javascript:;">
                <img src="${data8[i].img}" alt="">
                <span class="text">${data8[i].text}</span>
            </a>
        `
        div8.innerHTML += li8
        health.appendChild(div8)
    }
    
    // 耳机
    var data9 = JSON.parse(xhr.responseText).headset
    let li9 = ''
    for(let i=0 ; i < data9.length ; i++){
      var  div9 = document.createElement('li')
        li9 = `
            <a href="javascript:;">
                <img src="${data9[i].img}" alt="">
                <span class="text">${data9[i].text}</span>
            </a>
        `
        div9.innerHTML += li9
        headset.appendChild(div9)
    }
    
    // 生活
    var data10 = JSON.parse(xhr.responseText).life
    let li10 = ''
    for(let i=0 ; i < data10.length ; i++){
      var  div10 = document.createElement('li')
        li10 = `
            <a href="javascript:;">
                <img src="${data10[i].img}" alt="">
                <span class="text">${data10[i].text}</span>
            </a>
        `
        div10.innerHTML += li10
        life.appendChild(div10)
    }
    
}

xhr.send()

// 发送请求
var xhrSlide = new XMLHttpRequest();
xhrSlide.open('get','../data/header_nav.json');
xhrSlide.onload = function(){
    var res = JSON.parse(xhrSlide.responseText).miphone;
    // console.log(res)
    let str = '';
    for(let i=0 ; i < res.length ; i++){
        lis = document.createElement('li');
        str = `
            <a href="javascript:;" target="_blank">
                <div class="figure">
                    <img src="${res[i].headernav_list_imgUrl}" alt="${res[i].headernav_list_name}" width="160" height="110">
                </div>
                <div class="title">${res[i].headernav_list_name}</div>
                <p class="price">${res[i].headernav_list_price}</p>
            </a>
        `
        lis.innerHTML += str;
        m1.appendChild(lis);
    }

    var re1 = JSON.parse(xhrSlide.responseText).Redmi;
    let str1 = '';
    for(let i=0 ; i < re1.length ; i++){
        t1 = document.createElement('li');
        str1 = `
            <a href="javascript:;" target="_blank">
                <div class="figure">
                    <img src="${re1[i].headernav_list_imgUrl}" alt="${re1[i].headernav_list_name}" width="160" height="110">
                </div>
                <div class="title">${re1[i].headernav_list_name}</div>
                <p class="price">${re1[i].headernav_list_price}</p>
            </a>
        `
        t1.innerHTML += str1;
        m2.appendChild(t1);
    }

    var re2 = JSON.parse(xhrSlide.responseText).tv;
    let str2 = '';
    for(let i=0 ; i < re2.length ; i++){
        t2 = document.createElement('li');
        str2 = `
            <a href="javascript:;" target="_blank">
                <div class="figure">
                    <img src="${re2[i].headernav_list_imgUrl}" alt="${re2[i].headernav_list_name}" width="160" height="110">
                </div>
                <div class="title">${re2[i].headernav_list_name}</div>
                <p class="price">${re2[i].headernav_list_price}</p>
            </a>
        `
        t2.innerHTML += str2;
        m3.appendChild(t2);
    }

    var re3 = JSON.parse(xhrSlide.responseText).computer;
    let str3 = '';
    for(let i=0 ; i < re3.length ; i++){
        t3 = document.createElement('li');
        str3 = `
            <a href="javascript:;" target="_blank">
                <div class="figure">
                    <img src="${re3[i].headernav_list_imgUrl}" alt="${re3[i].headernav_list_name}" width="160" height="110">
                </div>
                <div class="title">${re3[i].headernav_list_name}</div>
                <p class="price">${re3[i].headernav_list_price}</p>
            </a>
        `
        t3.innerHTML += str3;
        m4.appendChild(t3);
    }

    var re4 = JSON.parse(xhrSlide.responseText).appliance;
    let str4 = '';
    for(let i=0 ; i < re4.length ; i++){
        t4 = document.createElement('li');
        str4 = `
            <a href="javascript:;" target="_blank">
                <div class="figure">
                    <img src="${re4[i].headernav_list_imgUrl}" alt="${re4[i].headernav_list_name}" width="160" height="110">
                </div>
                <div class="title">${re4[i].headernav_list_name}</div>
                <p class="price">${re4[i].headernav_list_price}</p>
            </a>
        `
        t4.innerHTML += str4;
        m5.appendChild(t4);
    }

    var re5 = JSON.parse(xhrSlide.responseText).luyouqi;
    let str5 = '';
    for(let i=0 ; i < re5.length ; i++){
        t5 = document.createElement('li');
        str5 = `
            <a href="javascript:;" target="_blank">
                <div class="figure">
                    <img src="${re5[i].headernav_list_imgUrl}" alt="${re5[i].headernav_list_name}" width="160" height="110">
                </div>
                <div class="title">${re5[i].headernav_list_name}</div>
                <p class="price">${re5[i].headernav_list_price}</p>
            </a>
        `
        t5.innerHTML += str5;
        m6.appendChild(t5);
    }

    var re6 = JSON.parse(xhrSlide.responseText).yingjian;
    let str6 = '';
    for(let i=0 ; i < re6.length ; i++){
        t6 = document.createElement('li');
        str6 = `
            <a href="javascript:;" target="_blank">
                <div class="figure">
                    <img src="${re6[i].headernav_list_imgUrl}" alt="${re6[i].headernav_list_name}" width="160" height="110">
                </div>
                <div class="title">${re6[i].headernav_list_name}</div>
                <p class="price">${re6[i].headernav_list_price}</p>
            </a>
        `
        t6.innerHTML += str6;
        m7.appendChild(t6);
    }
}
xhrSlide.send();

// 左侧商品列表动画
$('.category-item').hover(function(){
    $('.children').eq($(this).index()).css("display","block");
},function(){
    $('.children').css("display","none");
})

// 上册导航栏动画
$('.nav_item').hover(function(){
    $('.item-children').eq($(this).index()).stop().slideDown(10)
},function (){
    $('.item-children').stop().slideUp(10)
})


$('.item-children').mouseover(function () {
    $(this).show()
})




/* 
















































 */



/*
    模拟百度搜索引擎
    当用户输入内容的时候发送请求
*/

// 获取元素
const body = document.body
const inp = document.querySelector('.inp-search')
const ul = document.querySelector('.result > .res')
const words = document.querySelector('.hot-words')


inp.addEventListener('focus', function () {
  words.style.display = 'none'
})


inp.addEventListener('input', function () {
  
    ul.style.display = 'block'

    // 准备一个 script 标签
    const script = document.createElement('script')

    script.className = 'jsonp'
    
    script.src = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1434,21089,29568,29221,29910&wd=' + this.value + '&req=2&csor=1&pwd=n&cb=jQuery1102027975479058440933_1571211274973&_=1571211274980'

    // 把标签插入到页面里面
    body.appendChild(script)

    // 用完以后，就不要这个标签了
    body.removeChild(script)

    if (inp.value === '') {
        ul.style.display = 'none'
    }
})

function jQuery1102027975479058440933_1571211274973(res) {
    // 做一个条件判断
    // 判断 res 里面有没有 g 这个数据
    // 如果有就渲染下面的 ul
    // 如果没有就什么都不做
    if (res.g) {

        // 渲染页面
        let str = ''

        res.g.forEach(item => {
        str += `
            <li>${ item.q }</li>
        `
        })

        // 添加到 ul 里面
        ul.innerHTML = str

        // 点击搜索结果,将结果添加到 input 框内
        ul.addEventListener('click', function (e) {
            e = e || window.event
            let target = e.target || e.srcElement
            
            if (target.nodeName === 'LI') {
                // console.log('点击的是 LI')
                // 自己 => target
                inp.value = target.innerText
            }
        })
    }
}

body.addEventListener('click', function () {
    ul.style.display = 'none'
})