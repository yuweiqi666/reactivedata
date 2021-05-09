import { def } from "./utils"
import defineReactive from "./defineReactive"
import { arrayMethods } from "./array"
import observe from "./observe"

// Observer类就是将一个正常的obj转化为每个层级属性都可以被侦测的obj
export default class Observer {
  constructor(value) {
    // 给value对象自定义__ob__属性  属性值为实例对象本省
    def(value, "__ob__", this, false)
    // 如果是数组  就蛮干 将数组的原型指向引入的arrayMethods
    if(Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods)
      // 让这个数组变得observe
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
  // 遍历 将value对象zhong每一个属性都变为响应式的
  walk(value) {
    for(let i in value) {
      // defineReactive用于将对象的某个属性变为响应式
      defineReactive(value, i)
    }
  }
  // 数组的特殊遍历
  observeArray(value) {
    for(let i = 0; i < value.length; i++) {
      // 调用observe 因为数组中也有可能是对象元素  需要被监测  如果是一般数据类型  不会被监测
      observe(value[i])
    }
  }
}