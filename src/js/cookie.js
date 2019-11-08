/**
 * setCookie 设置 cookie
 * @param {STRING} key 你要设置的 cookie 的 key
 * @param {STRING} value 你要设置的 cookie 的 value
 * @param {NUMBER} expires 你要设置的过期时间
 */


// 设置过期时间
function setCookie(key, value, expires) {
    expires = expires || 0
    var time = new Date()
    // 根据你传递进来的信息去进行设置
    time.setTime(time.getTime() - 1000 * 60 * 60 * 8 + 1000 * expires)
  
    // 设置 cookie
    document.cookie = `${ key }=${ value };expires=${ expires ? time : '' }`
  }
  
  /**
   * getCookie 获取 cookie
   * @param {STRING} key 你要获取的 cookie 的 key
   * @return 你要获取的哪个 key 的 value
   */
  
  // 设置 cookie
  function getCookie(key) {
    // 准备一个变量接受 value
    var value = ''
  
    // 从 cookie 里面找到对应 key 来把 value 赋值
    // 1. 获取 cookie
    var cookieArr = document.cookie.split('; ')
  
    // 2. 遍历这个数组
    // cookieArr.forEach(function (item, index, arr) {
       // forEach 方法是用来遍历数组的
       // item 数组里面的每一项
       // index 数组的索引
       // arr 原始数组
    //   console.log(item, index, arr)
    // })
  
    cookieArr.forEach(function (item) {
      var tmp = item.split('=')
      if (tmp[0] === key) {
        value = tmp[1]
      }
    })
  
    // 返回 value
    return value
  }
  
  /**
   * delCookie 删除 cookie
   * @param {STRING} key 你要删除的 cookie 的 key
   */
  function delCookie(key) {
    setCookie(key, 'account', -10)
  }