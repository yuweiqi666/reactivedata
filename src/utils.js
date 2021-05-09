// def函数用于自定义对象的属性
export function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}