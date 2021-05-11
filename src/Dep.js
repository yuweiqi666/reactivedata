var uid = 0
export default class Dep {
  constructor() {
    // 每一个Dep实例都有一个自己的id
    this.uid++

    // 用数组来存储自己的订阅者   订阅者是Watcher的实例
    this.subs = []
  }
  // 添加订阅
  addSub(sub) {
    this.subs.push(sub)
  }
  // 添加依赖
  depend() {
    // Dep.target是我们自己指定的全局的位置上   唯一
    if(Dep.target) {
      this.addSub(Dep.target)
    }
  }
  // 通知更新
  notify() {
    // 浅克隆一份
    const subs = this.subs.slice()
    // 遍历
    subs.forEach(item => {
      item.update()
    })
  }
}