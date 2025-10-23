/* esm.sh - fast-copy@3.0.2 */
// node_modules/fast-copy/dist/esm/index.mjs
var toStringFunction = Function.prototype.toString;
var create = Object.create;
var toStringObject = Object.prototype.toString;
var LegacyCache = (
  /** @class */
  (function() {
    function LegacyCache2() {
      this._keys = [];
      this._values = [];
    }
    LegacyCache2.prototype.has = function(key) {
      return !!~this._keys.indexOf(key);
    };
    LegacyCache2.prototype.get = function(key) {
      return this._values[this._keys.indexOf(key)];
    };
    LegacyCache2.prototype.set = function(key, value) {
      this._keys.push(key);
      this._values.push(value);
    };
    return LegacyCache2;
  })()
);
function createCacheLegacy() {
  return new LegacyCache();
}
function createCacheModern() {
  return /* @__PURE__ */ new WeakMap();
}
var createCache = typeof WeakMap !== "undefined" ? createCacheModern : createCacheLegacy;
function getCleanClone(prototype) {
  if (!prototype) {
    return create(null);
  }
  var Constructor = prototype.constructor;
  if (Constructor === Object) {
    return prototype === Object.prototype ? {} : create(prototype);
  }
  if (Constructor && ~toStringFunction.call(Constructor).indexOf("[native code]")) {
    try {
      return new Constructor();
    } catch (_a2) {
    }
  }
  return create(prototype);
}
function getRegExpFlagsLegacy(regExp) {
  var flags = "";
  if (regExp.global) {
    flags += "g";
  }
  if (regExp.ignoreCase) {
    flags += "i";
  }
  if (regExp.multiline) {
    flags += "m";
  }
  if (regExp.unicode) {
    flags += "u";
  }
  if (regExp.sticky) {
    flags += "y";
  }
  return flags;
}
function getRegExpFlagsModern(regExp) {
  return regExp.flags;
}
var getRegExpFlags = /test/g.flags === "g" ? getRegExpFlagsModern : getRegExpFlagsLegacy;
function getTagLegacy(value) {
  var type = toStringObject.call(value);
  return type.substring(8, type.length - 1);
}
function getTagModern(value) {
  return value[Symbol.toStringTag] || getTagLegacy(value);
}
var getTag = typeof Symbol !== "undefined" ? getTagModern : getTagLegacy;
var defineProperty = Object.defineProperty;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var _a = Object.prototype;
var hasOwnProperty = _a.hasOwnProperty;
var propertyIsEnumerable = _a.propertyIsEnumerable;
var SUPPORTS_SYMBOL = typeof getOwnPropertySymbols === "function";
function getStrictPropertiesModern(object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
var getStrictProperties = SUPPORTS_SYMBOL ? getStrictPropertiesModern : getOwnPropertyNames;
function copyOwnPropertiesStrict(value, clone, state) {
  var properties = getStrictProperties(value);
  for (var index2 = 0, length_1 = properties.length, property = void 0, descriptor = void 0; index2 < length_1; ++index2) {
    property = properties[index2];
    if (property === "callee" || property === "caller") {
      continue;
    }
    descriptor = getOwnPropertyDescriptor(value, property);
    if (!descriptor) {
      clone[property] = state.copier(value[property], state);
      continue;
    }
    if (!descriptor.get && !descriptor.set) {
      descriptor.value = state.copier(descriptor.value, state);
    }
    try {
      defineProperty(clone, property, descriptor);
    } catch (error) {
      clone[property] = descriptor.value;
    }
  }
  return clone;
}
function copyArrayLoose(array, state) {
  var clone = new state.Constructor();
  state.cache.set(array, clone);
  for (var index2 = 0, length_2 = array.length; index2 < length_2; ++index2) {
    clone[index2] = state.copier(array[index2], state);
  }
  return clone;
}
function copyArrayStrict(array, state) {
  var clone = new state.Constructor();
  state.cache.set(array, clone);
  return copyOwnPropertiesStrict(array, clone, state);
}
function copyArrayBuffer(arrayBuffer, _state) {
  return arrayBuffer.slice(0);
}
function copyBlob(blob, _state) {
  return blob.slice(0, blob.size, blob.type);
}
function copyDataView(dataView, state) {
  return new state.Constructor(copyArrayBuffer(dataView.buffer));
}
function copyDate(date, state) {
  return new state.Constructor(date.getTime());
}
function copyMapLoose(map, state) {
  var clone = new state.Constructor();
  state.cache.set(map, clone);
  map.forEach(function(value, key) {
    clone.set(key, state.copier(value, state));
  });
  return clone;
}
function copyMapStrict(map, state) {
  return copyOwnPropertiesStrict(map, copyMapLoose(map, state), state);
}
function copyObjectLooseLegacy(object, state) {
  var clone = getCleanClone(state.prototype);
  state.cache.set(object, clone);
  for (var key in object) {
    if (hasOwnProperty.call(object, key)) {
      clone[key] = state.copier(object[key], state);
    }
  }
  return clone;
}
function copyObjectLooseModern(object, state) {
  var clone = getCleanClone(state.prototype);
  state.cache.set(object, clone);
  for (var key in object) {
    if (hasOwnProperty.call(object, key)) {
      clone[key] = state.copier(object[key], state);
    }
  }
  var symbols = getOwnPropertySymbols(object);
  for (var index2 = 0, length_3 = symbols.length, symbol = void 0; index2 < length_3; ++index2) {
    symbol = symbols[index2];
    if (propertyIsEnumerable.call(object, symbol)) {
      clone[symbol] = state.copier(object[symbol], state);
    }
  }
  return clone;
}
var copyObjectLoose = SUPPORTS_SYMBOL ? copyObjectLooseModern : copyObjectLooseLegacy;
function copyObjectStrict(object, state) {
  var clone = getCleanClone(state.prototype);
  state.cache.set(object, clone);
  return copyOwnPropertiesStrict(object, clone, state);
}
function copyPrimitiveWrapper(primitiveObject, state) {
  return new state.Constructor(primitiveObject.valueOf());
}
function copyRegExp(regExp, state) {
  var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));
  clone.lastIndex = regExp.lastIndex;
  return clone;
}
function copySelf(value, _state) {
  return value;
}
function copySetLoose(set, state) {
  var clone = new state.Constructor();
  state.cache.set(set, clone);
  set.forEach(function(value) {
    clone.add(state.copier(value, state));
  });
  return clone;
}
function copySetStrict(set, state) {
  return copyOwnPropertiesStrict(set, copySetLoose(set, state), state);
}
var isArray = Array.isArray;
var assign = Object.assign;
var getPrototypeOf = Object.getPrototypeOf || (function(obj) {
  return obj.__proto__;
});
var DEFAULT_LOOSE_OPTIONS = {
  array: copyArrayLoose,
  arrayBuffer: copyArrayBuffer,
  blob: copyBlob,
  dataView: copyDataView,
  date: copyDate,
  error: copySelf,
  map: copyMapLoose,
  object: copyObjectLoose,
  regExp: copyRegExp,
  set: copySetLoose
};
var DEFAULT_STRICT_OPTIONS = assign({}, DEFAULT_LOOSE_OPTIONS, {
  array: copyArrayStrict,
  map: copyMapStrict,
  object: copyObjectStrict,
  set: copySetStrict
});
function getTagSpecificCopiers(options) {
  return {
    Arguments: options.object,
    Array: options.array,
    ArrayBuffer: options.arrayBuffer,
    Blob: options.blob,
    Boolean: copyPrimitiveWrapper,
    DataView: options.dataView,
    Date: options.date,
    Error: options.error,
    Float32Array: options.arrayBuffer,
    Float64Array: options.arrayBuffer,
    Int8Array: options.arrayBuffer,
    Int16Array: options.arrayBuffer,
    Int32Array: options.arrayBuffer,
    Map: options.map,
    Number: copyPrimitiveWrapper,
    Object: options.object,
    Promise: copySelf,
    RegExp: options.regExp,
    Set: options.set,
    String: copyPrimitiveWrapper,
    WeakMap: copySelf,
    WeakSet: copySelf,
    Uint8Array: options.arrayBuffer,
    Uint8ClampedArray: options.arrayBuffer,
    Uint16Array: options.arrayBuffer,
    Uint32Array: options.arrayBuffer,
    Uint64Array: options.arrayBuffer
  };
}
function createCopier(options) {
  var normalizedOptions = assign({}, DEFAULT_LOOSE_OPTIONS, options);
  var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);
  var array = tagSpecificCopiers.Array, object = tagSpecificCopiers.Object;
  function copier(value, state) {
    state.prototype = state.Constructor = void 0;
    if (!value || typeof value !== "object") {
      return value;
    }
    if (state.cache.has(value)) {
      return state.cache.get(value);
    }
    state.prototype = getPrototypeOf(value);
    state.Constructor = state.prototype && state.prototype.constructor;
    if (!state.Constructor || state.Constructor === Object) {
      return object(value, state);
    }
    if (isArray(value)) {
      return array(value, state);
    }
    var tagSpecificCopier = tagSpecificCopiers[getTag(value)];
    if (tagSpecificCopier) {
      return tagSpecificCopier(value, state);
    }
    return typeof value.then === "function" ? value : object(value, state);
  }
  return function copy(value) {
    return copier(value, {
      Constructor: void 0,
      cache: createCache(),
      copier,
      prototype: void 0
    });
  };
}
function createStrictCopier(options) {
  return createCopier(assign({}, DEFAULT_STRICT_OPTIONS, options));
}
var copyStrict = createStrictCopier({});
var index = createCopier({});
export {
  copyStrict,
  createCopier,
  createStrictCopier,
  index as default
};
//# sourceMappingURL=fast-copy.development.mjs.map