function flattenObject(ob) {
  var toReturn = {}

  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue

    if (typeof ob[i] == "object" && ob[i] !== null) {
      var flatObject = flattenObject(ob[i])
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue

        toReturn[i + "." + x] = flatObject[x]
      }
    } else {
      toReturn[i] = ob[i]
    }
  }
  return toReturn
}

function debounce(fn, delay) {
  var timeoutID = null
  return function() {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(function() {
      fn.apply(that, args)
    }, delay)
  }
}

export default debounce
