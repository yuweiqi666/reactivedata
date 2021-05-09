import Observer from "./Observer"

// 创建observe函数  
export default function observe(value) {
  // 如果不是value不是对象 就什么都不做
  if(typeof value !== "object") {
    return
  }

  // 定义ob
  var ob
  if(typeof value.__ob__ !== "undefined") {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob;
}


