export function baiduMap(key) {


    return new Promise(function (resolve, reject) {
      try {
        resolve(BMap)
      } catch (e) {
        window.init = function () {
          resolve(BMap)
        }
        let script1 = document.createElement('script')
        script1.type = 'text/javascript'
        script1.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + key + '&callback=init'
        script1.onerror = reject
        document.body.appendChild(script1)
      }
    })
  
  }
  