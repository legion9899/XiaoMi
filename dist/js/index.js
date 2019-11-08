// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
  }, // 自动播放
  loop: true, // 循环模式选项
  simulateTouch : false,
  
  // 如果需要分页器
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  // 如果需要前进后退按钮
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
})

// 小米闪购
var swipper_wrapper = document.querySelector('.swipper-wrapper');
var prev = document.querySelector('.flashsale-prev');
var next = document.querySelector('.flashsale-next');
var num = 0;
auto();
function auto(){
    var timers = setInterval(function(){
        num -= 981;
        if(num < -2943){
            num = 0;
        }
        swipper_wrapper.style.marginLeft = num + "px";
    },6000)

    prev.onclick = function(){
        clearInterval(timers);
        if(num === 0){
            swipper_wrapper.style.marginLeft = 0;
        }else{
            num += 981;
            swipper_wrapper.style.marginLeft = num + "px";
        }
        
    }
    next.onclick = function(){
        clearInterval(timers);
        if(num == -2943){
            swipper_wrapper.style.marginLeft = '-2943px';
        }else{
            num -= 981;
            swipper_wrapper.style.marginLeft = num + "px";
        }
    }
}


// 计时器
var tim = setInterval(function(){
    var t1 = new Date()
    var months = t1.getMonth() + 1
    var days = t1.getDate()
    var t2 = new Date(2019,months,days,20,00,00)
    var num = parseInt(Math.abs(t1.getTime() - t2.getTime())/1000)
    var day = parseInt(num/(60*60*24))
    var day1 = num-day*60*60*24
    var hour = parseInt(day1/(60*60))
    var hour1 = day1-hour*60*60;
    var minute = parseInt(hour1/60)
    var second = num%60
    if(hour < 10){
        hour = "0" + hour
    }
    if(minute < 10){
        minute = "0" + minute
    }
    if(second < 10){
        second = "0" + second
    }
    $('.hours').html(hour)
    $('.minites').html(minute)
    $('.seconds').html(second)
    if(hour == 0 && minute == 0 && second == 0){
        $('.flashsale .desc').html('抢购结束')
        clearInterval(tim)
    }
}, 1000)





// 首页列表渲染
var listImgPlay = document.querySelector('.swipper-wrapper')
var listImgs1 = document.querySelector('.brick-lists');

var xhrImgPlay = new XMLHttpRequest();
xhrImgPlay.open('get','../data/flashsale-list.json')
xhrImgPlay.onload = function(){
    resImgPlay = JSON.parse(xhrImgPlay.responseText)
    let strImgPlay = ''
    for(let j = 0; j < resImgPlay.length ; j++){
        liImgPlay = document.createElement('li')
        
        strImgPlay = `
            <a href="javascript:;">
                <div class="contenta">
                    <div class="thumb">
                        <img src="${resImgPlay[j].imgs}" alt="${resImgPlay[j].title}">
                    </div>
                    <h3 class="title">${resImgPlay[j].title}</h3>
                    <p class="desc">${resImgPlay[j].ds}</p>
                    <p class="price">
                        <span>${resImgPlay[j].new}</span>
                        <del>${resImgPlay[j].old}</del>
                    </p>
                    <span class="flag">${resImgPlay[j].flag}</span>
                </div>
            </a>
        `
        liImgPlay.innerHTML += strImgPlay
        listImgPlay.appendChild(liImgPlay)
    }
    

    // 手机 动画列表
    imgs1 = JSON.parse(xhr.responseText).four;
    let strs1 = '';
    for(let n=0 ; n < imgs1.length ; n++){
        lis1 = document.createElement('li');
        strs1 = `
            <a href="javascript:;">
                <div class="figure-img">
                    <img src="${imgs1[n].img}">
                    <h3 class="title">${imgs1[n].name}</h3>
                    <p class="desc">${imgs1[n].biaoyu}</p>
                    <p class="price">
                        <span>${imgs1[n].newprice}</span>
                        <del><span class="num">${imgs1[n].oldprice}</span></del>
                    </p>
                </div>
            </a>
        `
        lis1.innerHTML += strs1;
        listImgs1.appendChild(lis1);
    }
}
xhrImgPlay.send()