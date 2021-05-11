import { def } from "./utils"
// 得到Array.prototype
const arrayPrototype = Array.prototype

// 以Array.prototype为原型创建对象
export const arrayMethods = Object.create(arrayPrototype)

const methodsNeedChange = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reserve"
]

methodsNeedChange.forEach(methodName => {
  // 备份原来的方法
  const original = arrayPrototype[methodName]
  // 定义新的方法
  def(arrayMethods, methodName, function() {
    // 把数组身上的__ob__取出来   __ob__ 就是Observer实例对
    const ob = this.__ob__
    // push unshift splice三种方法能够插入新项 插入的新项也要变成响应式
    let inserted = []

    let args = [...arguments]

    switch (methodName) {
      case "push":
      case "unshift":
        inserted = args
        break;
      case "splice":
        inserted = args.slice[2]
        break;
    }

    // 判断有没有插入的新项
    if(inserted) {
      ob.observeArray(inserted)
    }

    console.log("数组被改变了");
    // 恢复数组原来的方法  注意this的指向
    const result = original.apply(this, arguments)

    ob.dep.notify()

    return result

  }, false)
  
})
 