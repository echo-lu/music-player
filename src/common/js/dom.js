/**
 * 判断是否有某class
 * @param  {[type]}  el        [description]
 * @param  {[type]}  className [description]
 * @return {Boolean}           [description]
 */
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * 添加class
 * @param {[type]} el        [description]
 * @param {[type]} className [description]
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}