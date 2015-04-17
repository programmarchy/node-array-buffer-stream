var through = require('through2')

module.exports = {
  toTypedArray: function (TypedArrayType) {
    var stream = through.obj(function write(arr, enc, next) {
      var len = arr.length
      if (len > 0) {
        var buf = new ArrayBuffer(len)
        var view = new TypedArrayType(buf)
        for (var i = 0; i < len; ++i) {
          view[i] = arr[i]
        }
        stream.push(buf)
      }
      next()
    })
    return stream
  },
  toInt8Array: function () {
    return this.toTypedArray(Int8Array)
  },
  toUint8Array: function () {
    return this.toTypedArray(Uint8Array)
  },
  toUint8ClampedArray: function () {
    return this.toTypedArray(Uint8ClampedArray)
  },
  toInt16Array: function () {
    return this.toTypedArray(toInt16Array)
  },
  toUint16Array: function () {
    return this.toTypedArray(Uint16Array)
  },
  toInt32Array: function () {
    return this.toTypedArray(Int32Array)
  },
  toUint32Array: function () {
    return this.toTypedArray(Uint32Array)
  },
  toFloat32Array: function () {
    return this.toTypedArray(Float32Array)
  },
  toFloat64Array: function () {
    return this.toTypedArray(Float64Array)
  },
  fromTypedArray: function (TypedArrayType) {
    var stream = through.obj(function write(buf, enc, next) {
      var len = buf.byteLength
      if (len > 0) {
        var arr = new Array(len)
        var view = new TypedArrayType(buf)
        for (var i = 0; i < len; ++i) {
          arr[i] = view[i]
        }
        stream.push(arr)
      }
      next()
    })
    return stream
  },
  fromInt8Array: function () {
    return this.fromTypedArray(Int8Array)
  },
  fromUint8Array: function () {
    return this.fromTypedArray(Uint8Array)
  },
  fromUint8ClampedArray: function () {
    return this.fromTypedArray(Uint8ClampedArray)
  },
  fromInt16Array: function () {
    return this.fromTypedArray(fromInt16Array)
  },
  fromUint16Array: function () {
    return this.fromTypedArray(Uint16Array)
  },
  fromInt32Array: function () {
    return this.fromTypedArray(Int32Array)
  },
  fromUint32Array: function () {
    return this.fromTypedArray(Uint32Array)
  },
  fromFloat32Array: function () {
    return this.fromTypedArray(Float32Array)
  },
  fromFloat64Array: function () {
    return this.fromTypedArray(Float64Array)
  }
}
