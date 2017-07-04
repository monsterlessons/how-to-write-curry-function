var curry = function (fn) {
  var arity = fn.length
  console.log('arity', arity)

  return function f1(...args) {
    console.log('f1 args', args)
    if (args.length >= arity) {
      console.log('enough arguments')
      return fn(...args)
    } else {
      console.log('need more arguments')
      return function f2(...moreArgs) {
        console.log('f2', moreArgs)
        var newArgs = args.concat(moreArgs)
        return f1(...newArgs)
      }
    }
  }
}

var add = function (a, b, c) {
  return a + b + c
}

var curriedAdd = curry(add)

var result = curriedAdd(1, 2, 3)

console.log('result', result)
