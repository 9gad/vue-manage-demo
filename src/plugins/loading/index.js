import './loading.scss'
export default {
  className: 'loading-content',
  /**
   * 打开页面加载
   * @param {*} id 加载唯一标识
   */
  openLoading(id) {
    if (!id) {
      id = this.randomString(4)
    }
    // loading div
    const div = document.createElement('div')
    div.setAttribute('id', id)
    div.setAttribute('class', this.className)
    // 遮层
    const maskingDiv = document.createElement('div')
    maskingDiv.setAttribute('class', 'loading-live')
    div.appendChild(maskingDiv)
    // 图标
    const iconDiv = document.createElement('div')
    iconDiv.setAttribute('class', 'loading-icon')
    iconDiv.innerHTML = '<svg><use xlink:href="#icon-loading" /></svg>'
    div.appendChild(iconDiv)
    document.getElementsByTagName('body')[0].appendChild(div)
  },
  /**
   * 关闭页面加载
   * @param {*} options
   */
  closeLoading(options) {
    if (options.id) {
      document.getElementById(options.id).remove()
    } else if (options.default) {
      const domObj = document.getElementsByClassName(this.className)
      const len = domObj.length
      for (let i = 0; i < len; i++) {
        domObj[i].remove()
      }
    }
  },
  //获得随机字符
  randomString(length) {
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < length; i++) {
      let id = Math.floor(Math.random() * str.length)
      result += str[id]
    }
    return result
  },
}

