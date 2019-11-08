// 登陆方式切换
$('.login-btn > li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('.login-info > li').removeClass('active').eq($(this).index()).addClass('active');
})


/*
  免密登录
    + 不需要登录的操作

  我要使用 ajax 提交表单信息
    + 阻止默认提交的行为
*/

const form = document.querySelector('form')
const username = document.querySelector('input[name=username]')
// const username = document.querySelector('.username')
const password = document.querySelector('input[name=password]')
// const password = document.querySelector('.password')


form.addEventListener('submit', function (e) {
  e = e || window.event

  // 发送一个 ajax 请求
  // 使用 js 的方式把用户名和密码发送给后端
  const xhr = new XMLHttpRequest()

  xhr.open('POST', '../server/login.php')

  // 要单独设置一下请求头
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

  // 再这里拼接参数
  // 文本框里面的内容
  xhr.send(`username=${ username.value }&password=${ password.value }`)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      // console.log(JSON.parse(xhr.responseText))
      const res = JSON.parse(xhr.responseText)

      if (res.code === 0) {
        // 登录失败
        $('.err_tip').removeClass('hide')

      } else {
        // 登录成功

        // 浏览器有一个空间叫做 cookie
        // 我向 cookie 里面存储一个标识符
        // 设置的标识符，是 session 会话级别
        setCookie('login', 1, 86400)

        // 跳转页面
        window.location.href = '../pages/cart.html'
      }

    }
  }

  // 取消浏览器默认提交行为
  e.preventDefault()
})