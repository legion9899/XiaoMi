const listInfo = {
  pagenum : 1,
  pagesize : 8
}

const pageInfo = {
  pagenum : listInfo.pagenum,
  pagesize : listInfo.pagesize,
  total : 0,
  change(n){
      // console.log(n);
      listInfo.pagenum = n;
      getList();
  }
}


getTotal();
async function getTotal(){
  const res = await pAjax({
      url : '../server/total.php',
      dataType : true
  })
  // console.log(res);

  pageInfo.total = res.total - 0;
  new Pagination('#pagi',pageInfo);
}

const list = document.querySelector('.list');
async function getList() {
  const res = await pAjax({
      url : '../server/list.php',
      dataType : true,
      data : listInfo
  })
  // console.log(res);

  let str = '';
  res.forEach(item => {
      str += `
          <div class="goods_item">     
              <div class="figure figure-img">
                  <a href="../pages/detail.html?id=${item.goods_id}">
                      <img src="${ item.goods_img }" alt="">
                  </a>
              </div>
              <p class="desc">${ item.goods_desc }</p>
              <h2 class="title">
                  <a href="">${ item.goods_title }</a>
              </h2>
              <p class="price">${ item.goods_newprice}元
                  <del>${ item.goods_oldprice }</del>
              </p>
              <div class="thumbs">
                  <ul class="thumbs-list">
                      <li>
                          <img src="${ item.goods_thumbs }" alt="">
                      </li>
                  </ul>
              </div>
              <div class="actions">
                  <a class="btn-like" href="">
                      <i class="iconfont icon-xin-s"></i>
                      <span>喜欢</span>
                  </a>
                  <a class="btn-buy" href="../pages/detail.html?id=${item.goods_id}">
                      <span>查看详情</span>
                      <i class="iconfont icon-gouwuchekong"></i>
                  </a>
              </div>
              <div class="flags">
                  <div class="flag flag-new">${ item.goods_flag }</div>
              </div>
          </div>
      `
  })
  list.innerHTML = str;
}


var keyword = document.querySelector('.result-list');
var xhr = new XMLHttpRequest();
xhr.open('get','../data/home-hero.json');
xhr.onload = function(){
  s3 = JSON.parse(xhr.responseText).search;
  // console.log(s3.length)
  let p3 = '';
  for(let i=0 ; i < s3.length ; i++){
      ls3 = document.createElement('li');
      p3 = `
          <a href="">
              <span class="keyword">${s3[i].key}</span>
          </a>
      `
      ls3.innerHTML += p3;
      keyword.appendChild(ls3);
  }
}
xhr.send();




// 猜你喜欢
var imglist = document.querySelector('.img-list');
var xhr2 = new XMLHttpRequest();
xhr2.open('get','../data/guesslike.json');
xhr2.onload = function(){
  s4 = JSON.parse(xhr2.responseText)
  let p4 = '';
  for(let i=0 ; i < s4.length ; i++){
      ls4 = document.createElement('li');
      p4 = `
          <dl>
              <dt>
                  <a href="javascript:;"><img src="//i1.mifile.cn/a1/${s4[i].i}"></a>
              </dt>
              <dd class="recommend-name">
                  <a href="javascript:;">${s4[i].n}</a>
              </dd>
              <dd class="recommend-price">${s4[i].p}元</dd>
              <dd class="recommend-tips">${s4[i].l}人好评
                  <a class="btns" href="../pages/cart.html">加入购物车</a>
              </dd>
          </dl>
      `
      ls4.innerHTML += p4;
      imglist.appendChild(ls4);
  }
}
xhr2.send();



// 猜你喜欢焦点切换
$('.pointer > li:eq(0)').click(function(){
  $(this).addClass('act').siblings().removeClass('act');
  $('.img-list').animate({
      left : 0
  })
})

$('.pointer > li:eq(1)').click(function(){
  $(this).addClass('act').siblings().removeClass('act');
  $('.img-list').animate({
      left : -1240
  })
})

$('.pointer > li:eq(2)').click(function(){
  $(this).addClass('act').siblings().removeClass('act');
  $('.img-list').animate({
      left : -2480
  })
})

$('.pointer > li:eq(3)').click(function(){
  $(this).addClass('act').siblings().removeClass('act');
  $('.img-list').animate({
      left : -3720
  })
})