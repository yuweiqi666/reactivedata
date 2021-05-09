import observe from "./observe"
export default function defineReactive(obj, key, val) {
  if(arguments.length == 2) {
    val = obj[key]
  } 


  // 递归调用observe obj属性有多层嵌套时需要每一层都变成响应式
  let childOb = observe(val)


  Object.defineProperty(obj, key, {
    // 可以被枚举
    enumerable: true,
    // 可以被配置  比如delete
    configurable: true,
    get() {
      console.log(key + "属性被读取了");
      return val
    },
    set(newVal) { 
      console.log(key + "属性被修改了");
      if(newVal === val) {
        return 
      } 
      val = newVal
      // 设置了新值  新值也要被observe   因为新值也可能是引用数据类型 有嵌套
      childOb = observe(newVal)
    } 
  })
}


