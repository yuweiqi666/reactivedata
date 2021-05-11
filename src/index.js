import observe from "./observe"
import Watcher from "./Watcher"

var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 2, 
  c: [5, 2, 3, 4]
}


observe(obj)

new Watcher(obj, "a.m.n", (val) => {
  console.log("☆")
})
// obj.c.pop()


console.log(obj.a.m.n = 6);

// 