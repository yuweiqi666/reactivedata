import observe from "./observe"
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


// obj.c.pop()


console.log(obj.c[0]);

// 