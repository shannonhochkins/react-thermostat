(() => {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire10eb"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire10eb"] = parcelRequire;
}
parcelRequire.register("51lsI", function(module, exports) {

$parcel$export(module.exports, "Fragment", () => $3a7db1b100aaf44b$export$ffb0004e005737fa, (v) => $3a7db1b100aaf44b$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "jsx", () => $3a7db1b100aaf44b$export$34b9dba7ce09269b, (v) => $3a7db1b100aaf44b$export$34b9dba7ce09269b = v);
$parcel$export(module.exports, "jsxs", () => $3a7db1b100aaf44b$export$25062201e9e25d76, (v) => $3a7db1b100aaf44b$export$25062201e9e25d76 = v);
var $3a7db1b100aaf44b$export$ffb0004e005737fa;
var $3a7db1b100aaf44b$export$34b9dba7ce09269b;
var $3a7db1b100aaf44b$export$25062201e9e25d76;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";

var $kr2Bq = parcelRequire("kr2Bq");
var $3a7db1b100aaf44b$var$k = Symbol.for("react.element"), $3a7db1b100aaf44b$var$l = Symbol.for("react.fragment"), $3a7db1b100aaf44b$var$m = Object.prototype.hasOwnProperty, $3a7db1b100aaf44b$var$n = $kr2Bq.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $3a7db1b100aaf44b$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $3a7db1b100aaf44b$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$3a7db1b100aaf44b$var$m.call(a, b) && !$3a7db1b100aaf44b$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $3a7db1b100aaf44b$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $3a7db1b100aaf44b$var$n.current
    };
}
$3a7db1b100aaf44b$export$ffb0004e005737fa = $3a7db1b100aaf44b$var$l;
$3a7db1b100aaf44b$export$34b9dba7ce09269b = $3a7db1b100aaf44b$var$q;
$3a7db1b100aaf44b$export$25062201e9e25d76 = $3a7db1b100aaf44b$var$q;

});
parcelRequire.register("kr2Bq", function(module, exports) {
"use strict";

module.exports = (parcelRequire("43CGU"));

});
parcelRequire.register("43CGU", function(module, exports) {

$parcel$export(module.exports, "Children", () => $2f45747bee5a068b$export$dca3b0875bd9a954, (v) => $2f45747bee5a068b$export$dca3b0875bd9a954 = v);
$parcel$export(module.exports, "Component", () => $2f45747bee5a068b$export$16fa2f45be04daa8, (v) => $2f45747bee5a068b$export$16fa2f45be04daa8 = v);
$parcel$export(module.exports, "Fragment", () => $2f45747bee5a068b$export$ffb0004e005737fa, (v) => $2f45747bee5a068b$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "Profiler", () => $2f45747bee5a068b$export$e2c29f18771995cb, (v) => $2f45747bee5a068b$export$e2c29f18771995cb = v);
$parcel$export(module.exports, "PureComponent", () => $2f45747bee5a068b$export$221d75b3f55bb0bd, (v) => $2f45747bee5a068b$export$221d75b3f55bb0bd = v);
$parcel$export(module.exports, "StrictMode", () => $2f45747bee5a068b$export$5f8d39834fd61797, (v) => $2f45747bee5a068b$export$5f8d39834fd61797 = v);
$parcel$export(module.exports, "Suspense", () => $2f45747bee5a068b$export$74bf444e3cd11ea5, (v) => $2f45747bee5a068b$export$74bf444e3cd11ea5 = v);
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => $2f45747bee5a068b$export$ae55be85d98224ed, (v) => $2f45747bee5a068b$export$ae55be85d98224ed = v);
$parcel$export(module.exports, "cloneElement", () => $2f45747bee5a068b$export$e530037191fcd5d7, (v) => $2f45747bee5a068b$export$e530037191fcd5d7 = v);
$parcel$export(module.exports, "createContext", () => $2f45747bee5a068b$export$fd42f52fd3ae1109, (v) => $2f45747bee5a068b$export$fd42f52fd3ae1109 = v);
$parcel$export(module.exports, "createElement", () => $2f45747bee5a068b$export$c8a8987d4410bf2d, (v) => $2f45747bee5a068b$export$c8a8987d4410bf2d = v);
$parcel$export(module.exports, "createFactory", () => $2f45747bee5a068b$export$d38cd72104c1f0e9, (v) => $2f45747bee5a068b$export$d38cd72104c1f0e9 = v);
$parcel$export(module.exports, "createRef", () => $2f45747bee5a068b$export$7d1e3a5e95ceca43, (v) => $2f45747bee5a068b$export$7d1e3a5e95ceca43 = v);
$parcel$export(module.exports, "forwardRef", () => $2f45747bee5a068b$export$257a8862b851cb5b, (v) => $2f45747bee5a068b$export$257a8862b851cb5b = v);
$parcel$export(module.exports, "isValidElement", () => $2f45747bee5a068b$export$a8257692ac88316c, (v) => $2f45747bee5a068b$export$a8257692ac88316c = v);
$parcel$export(module.exports, "lazy", () => $2f45747bee5a068b$export$488013bae63b21da, (v) => $2f45747bee5a068b$export$488013bae63b21da = v);
$parcel$export(module.exports, "memo", () => $2f45747bee5a068b$export$7c73462e0d25e514, (v) => $2f45747bee5a068b$export$7c73462e0d25e514 = v);
$parcel$export(module.exports, "startTransition", () => $2f45747bee5a068b$export$7568632d0d33d16d, (v) => $2f45747bee5a068b$export$7568632d0d33d16d = v);
$parcel$export(module.exports, "unstable_act", () => $2f45747bee5a068b$export$88948ce120ea2619, (v) => $2f45747bee5a068b$export$88948ce120ea2619 = v);
$parcel$export(module.exports, "useCallback", () => $2f45747bee5a068b$export$35808ee640e87ca7, (v) => $2f45747bee5a068b$export$35808ee640e87ca7 = v);
$parcel$export(module.exports, "useContext", () => $2f45747bee5a068b$export$fae74005e78b1a27, (v) => $2f45747bee5a068b$export$fae74005e78b1a27 = v);
$parcel$export(module.exports, "useDebugValue", () => $2f45747bee5a068b$export$dc8fbce3eb94dc1e, (v) => $2f45747bee5a068b$export$dc8fbce3eb94dc1e = v);
$parcel$export(module.exports, "useDeferredValue", () => $2f45747bee5a068b$export$6a7bc4e911dc01cf, (v) => $2f45747bee5a068b$export$6a7bc4e911dc01cf = v);
$parcel$export(module.exports, "useEffect", () => $2f45747bee5a068b$export$6d9c69b0de29b591, (v) => $2f45747bee5a068b$export$6d9c69b0de29b591 = v);
$parcel$export(module.exports, "useId", () => $2f45747bee5a068b$export$f680877a34711e37, (v) => $2f45747bee5a068b$export$f680877a34711e37 = v);
$parcel$export(module.exports, "useImperativeHandle", () => $2f45747bee5a068b$export$d5a552a76deda3c2, (v) => $2f45747bee5a068b$export$d5a552a76deda3c2 = v);
$parcel$export(module.exports, "useInsertionEffect", () => $2f45747bee5a068b$export$aaabe4eda9ed9969, (v) => $2f45747bee5a068b$export$aaabe4eda9ed9969 = v);
$parcel$export(module.exports, "useLayoutEffect", () => $2f45747bee5a068b$export$e5c5a5f917a5871c, (v) => $2f45747bee5a068b$export$e5c5a5f917a5871c = v);
$parcel$export(module.exports, "useMemo", () => $2f45747bee5a068b$export$1538c33de8887b59, (v) => $2f45747bee5a068b$export$1538c33de8887b59 = v);
$parcel$export(module.exports, "useReducer", () => $2f45747bee5a068b$export$13e3392192263954, (v) => $2f45747bee5a068b$export$13e3392192263954 = v);
$parcel$export(module.exports, "useRef", () => $2f45747bee5a068b$export$b8f5890fc79d6aca, (v) => $2f45747bee5a068b$export$b8f5890fc79d6aca = v);
$parcel$export(module.exports, "useState", () => $2f45747bee5a068b$export$60241385465d0a34, (v) => $2f45747bee5a068b$export$60241385465d0a34 = v);
$parcel$export(module.exports, "useSyncExternalStore", () => $2f45747bee5a068b$export$306c0aa65ff9ec16, (v) => $2f45747bee5a068b$export$306c0aa65ff9ec16 = v);
$parcel$export(module.exports, "useTransition", () => $2f45747bee5a068b$export$7b286972b8d8ccbf, (v) => $2f45747bee5a068b$export$7b286972b8d8ccbf = v);
$parcel$export(module.exports, "version", () => $2f45747bee5a068b$export$83d89fbfd8236492, (v) => $2f45747bee5a068b$export$83d89fbfd8236492 = v);
var $2f45747bee5a068b$export$dca3b0875bd9a954;
var $2f45747bee5a068b$export$16fa2f45be04daa8;
var $2f45747bee5a068b$export$ffb0004e005737fa;
var $2f45747bee5a068b$export$e2c29f18771995cb;
var $2f45747bee5a068b$export$221d75b3f55bb0bd;
var $2f45747bee5a068b$export$5f8d39834fd61797;
var $2f45747bee5a068b$export$74bf444e3cd11ea5;
var $2f45747bee5a068b$export$ae55be85d98224ed;
var $2f45747bee5a068b$export$e530037191fcd5d7;
var $2f45747bee5a068b$export$fd42f52fd3ae1109;
var $2f45747bee5a068b$export$c8a8987d4410bf2d;
var $2f45747bee5a068b$export$d38cd72104c1f0e9;
var $2f45747bee5a068b$export$7d1e3a5e95ceca43;
var $2f45747bee5a068b$export$257a8862b851cb5b;
var $2f45747bee5a068b$export$a8257692ac88316c;
var $2f45747bee5a068b$export$488013bae63b21da;
var $2f45747bee5a068b$export$7c73462e0d25e514;
var $2f45747bee5a068b$export$7568632d0d33d16d;
var $2f45747bee5a068b$export$88948ce120ea2619;
var $2f45747bee5a068b$export$35808ee640e87ca7;
var $2f45747bee5a068b$export$fae74005e78b1a27;
var $2f45747bee5a068b$export$dc8fbce3eb94dc1e;
var $2f45747bee5a068b$export$6a7bc4e911dc01cf;
var $2f45747bee5a068b$export$6d9c69b0de29b591;
var $2f45747bee5a068b$export$f680877a34711e37;
var $2f45747bee5a068b$export$d5a552a76deda3c2;
var $2f45747bee5a068b$export$aaabe4eda9ed9969;
var $2f45747bee5a068b$export$e5c5a5f917a5871c;
var $2f45747bee5a068b$export$1538c33de8887b59;
var $2f45747bee5a068b$export$13e3392192263954;
var $2f45747bee5a068b$export$b8f5890fc79d6aca;
var $2f45747bee5a068b$export$60241385465d0a34;
var $2f45747bee5a068b$export$306c0aa65ff9ec16;
var $2f45747bee5a068b$export$7b286972b8d8ccbf;
var $2f45747bee5a068b$export$83d89fbfd8236492;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $2f45747bee5a068b$var$l = Symbol.for("react.element"), $2f45747bee5a068b$var$n = Symbol.for("react.portal"), $2f45747bee5a068b$var$p = Symbol.for("react.fragment"), $2f45747bee5a068b$var$q = Symbol.for("react.strict_mode"), $2f45747bee5a068b$var$r = Symbol.for("react.profiler"), $2f45747bee5a068b$var$t = Symbol.for("react.provider"), $2f45747bee5a068b$var$u = Symbol.for("react.context"), $2f45747bee5a068b$var$v = Symbol.for("react.forward_ref"), $2f45747bee5a068b$var$w = Symbol.for("react.suspense"), $2f45747bee5a068b$var$x = Symbol.for("react.memo"), $2f45747bee5a068b$var$y = Symbol.for("react.lazy"), $2f45747bee5a068b$var$z = Symbol.iterator;
function $2f45747bee5a068b$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $2f45747bee5a068b$var$z && a[$2f45747bee5a068b$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $2f45747bee5a068b$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $2f45747bee5a068b$var$C = Object.assign, $2f45747bee5a068b$var$D = {};
function $2f45747bee5a068b$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $2f45747bee5a068b$var$D;
    this.updater = e || $2f45747bee5a068b$var$B;
}
$2f45747bee5a068b$var$E.prototype.isReactComponent = {};
$2f45747bee5a068b$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$2f45747bee5a068b$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $2f45747bee5a068b$var$F() {}
$2f45747bee5a068b$var$F.prototype = $2f45747bee5a068b$var$E.prototype;
function $2f45747bee5a068b$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $2f45747bee5a068b$var$D;
    this.updater = e || $2f45747bee5a068b$var$B;
}
var $2f45747bee5a068b$var$H = $2f45747bee5a068b$var$G.prototype = new $2f45747bee5a068b$var$F;
$2f45747bee5a068b$var$H.constructor = $2f45747bee5a068b$var$G;
$2f45747bee5a068b$var$C($2f45747bee5a068b$var$H, $2f45747bee5a068b$var$E.prototype);
$2f45747bee5a068b$var$H.isPureReactComponent = !0;
var $2f45747bee5a068b$var$I = Array.isArray, $2f45747bee5a068b$var$J = Object.prototype.hasOwnProperty, $2f45747bee5a068b$var$K = {
    current: null
}, $2f45747bee5a068b$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $2f45747bee5a068b$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$2f45747bee5a068b$var$J.call(b, d) && !$2f45747bee5a068b$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $2f45747bee5a068b$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $2f45747bee5a068b$var$K.current
    };
}
function $2f45747bee5a068b$var$N(a, b) {
    return {
        $$typeof: $2f45747bee5a068b$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $2f45747bee5a068b$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $2f45747bee5a068b$var$l;
}
function $2f45747bee5a068b$var$escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $2f45747bee5a068b$var$P = /\/+/g;
function $2f45747bee5a068b$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $2f45747bee5a068b$var$escape("" + a.key) : b.toString(36);
}
function $2f45747bee5a068b$var$R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case $2f45747bee5a068b$var$l:
                case $2f45747bee5a068b$var$n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + $2f45747bee5a068b$var$Q(h, 0) : d, $2f45747bee5a068b$var$I(c) ? (e = "", null != a && (e = a.replace($2f45747bee5a068b$var$P, "$&/") + "/"), $2f45747bee5a068b$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($2f45747bee5a068b$var$O(c) && (c = $2f45747bee5a068b$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($2f45747bee5a068b$var$P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($2f45747bee5a068b$var$I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + $2f45747bee5a068b$var$Q(k, g);
        h += $2f45747bee5a068b$var$R(k, b, e, f, c);
    }
    else if (f = $2f45747bee5a068b$var$A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + $2f45747bee5a068b$var$Q(k, g++), h += $2f45747bee5a068b$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $2f45747bee5a068b$var$S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    $2f45747bee5a068b$var$R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $2f45747bee5a068b$var$T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $2f45747bee5a068b$var$U = {
    current: null
}, $2f45747bee5a068b$var$V = {
    transition: null
}, $2f45747bee5a068b$var$W = {
    ReactCurrentDispatcher: $2f45747bee5a068b$var$U,
    ReactCurrentBatchConfig: $2f45747bee5a068b$var$V,
    ReactCurrentOwner: $2f45747bee5a068b$var$K
};
$2f45747bee5a068b$export$dca3b0875bd9a954 = {
    map: $2f45747bee5a068b$var$S,
    forEach: function(a, b, e) {
        $2f45747bee5a068b$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $2f45747bee5a068b$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return $2f45747bee5a068b$var$S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$2f45747bee5a068b$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$2f45747bee5a068b$export$16fa2f45be04daa8 = $2f45747bee5a068b$var$E;
$2f45747bee5a068b$export$ffb0004e005737fa = $2f45747bee5a068b$var$p;
$2f45747bee5a068b$export$e2c29f18771995cb = $2f45747bee5a068b$var$r;
$2f45747bee5a068b$export$221d75b3f55bb0bd = $2f45747bee5a068b$var$G;
$2f45747bee5a068b$export$5f8d39834fd61797 = $2f45747bee5a068b$var$q;
$2f45747bee5a068b$export$74bf444e3cd11ea5 = $2f45747bee5a068b$var$w;
$2f45747bee5a068b$export$ae55be85d98224ed = $2f45747bee5a068b$var$W;
$2f45747bee5a068b$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $2f45747bee5a068b$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $2f45747bee5a068b$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$2f45747bee5a068b$var$J.call(b, f) && !$2f45747bee5a068b$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $2f45747bee5a068b$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$2f45747bee5a068b$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $2f45747bee5a068b$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $2f45747bee5a068b$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$2f45747bee5a068b$export$c8a8987d4410bf2d = $2f45747bee5a068b$var$M;
$2f45747bee5a068b$export$d38cd72104c1f0e9 = function(a) {
    var b = $2f45747bee5a068b$var$M.bind(null, a);
    b.type = a;
    return b;
};
$2f45747bee5a068b$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$2f45747bee5a068b$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $2f45747bee5a068b$var$v,
        render: a
    };
};
$2f45747bee5a068b$export$a8257692ac88316c = $2f45747bee5a068b$var$O;
$2f45747bee5a068b$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $2f45747bee5a068b$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $2f45747bee5a068b$var$T
    };
};
$2f45747bee5a068b$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $2f45747bee5a068b$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$2f45747bee5a068b$export$7568632d0d33d16d = function(a) {
    var b = $2f45747bee5a068b$var$V.transition;
    $2f45747bee5a068b$var$V.transition = {};
    try {
        a();
    } finally{
        $2f45747bee5a068b$var$V.transition = b;
    }
};
$2f45747bee5a068b$export$88948ce120ea2619 = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$2f45747bee5a068b$export$35808ee640e87ca7 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useCallback(a, b);
};
$2f45747bee5a068b$export$fae74005e78b1a27 = function(a) {
    return $2f45747bee5a068b$var$U.current.useContext(a);
};
$2f45747bee5a068b$export$dc8fbce3eb94dc1e = function() {};
$2f45747bee5a068b$export$6a7bc4e911dc01cf = function(a) {
    return $2f45747bee5a068b$var$U.current.useDeferredValue(a);
};
$2f45747bee5a068b$export$6d9c69b0de29b591 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useEffect(a, b);
};
$2f45747bee5a068b$export$f680877a34711e37 = function() {
    return $2f45747bee5a068b$var$U.current.useId();
};
$2f45747bee5a068b$export$d5a552a76deda3c2 = function(a, b, e) {
    return $2f45747bee5a068b$var$U.current.useImperativeHandle(a, b, e);
};
$2f45747bee5a068b$export$aaabe4eda9ed9969 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useInsertionEffect(a, b);
};
$2f45747bee5a068b$export$e5c5a5f917a5871c = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useLayoutEffect(a, b);
};
$2f45747bee5a068b$export$1538c33de8887b59 = function(a, b) {
    return $2f45747bee5a068b$var$U.current.useMemo(a, b);
};
$2f45747bee5a068b$export$13e3392192263954 = function(a, b, e) {
    return $2f45747bee5a068b$var$U.current.useReducer(a, b, e);
};
$2f45747bee5a068b$export$b8f5890fc79d6aca = function(a) {
    return $2f45747bee5a068b$var$U.current.useRef(a);
};
$2f45747bee5a068b$export$60241385465d0a34 = function(a) {
    return $2f45747bee5a068b$var$U.current.useState(a);
};
$2f45747bee5a068b$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $2f45747bee5a068b$var$U.current.useSyncExternalStore(a, b, e);
};
$2f45747bee5a068b$export$7b286972b8d8ccbf = function() {
    return $2f45747bee5a068b$var$U.current.useTransition();
};
$2f45747bee5a068b$export$83d89fbfd8236492 = "18.2.0";

});



parcelRequire.register("9B0zp", function(module, exports) {

$parcel$export(module.exports, "AsyncMode", () => $6fc802f80005576e$export$2b8d127b894957b9, (v) => $6fc802f80005576e$export$2b8d127b894957b9 = v);
$parcel$export(module.exports, "ConcurrentMode", () => $6fc802f80005576e$export$cea3a54a6425200c, (v) => $6fc802f80005576e$export$cea3a54a6425200c = v);
$parcel$export(module.exports, "ContextConsumer", () => $6fc802f80005576e$export$a7c73072b1a182ae, (v) => $6fc802f80005576e$export$a7c73072b1a182ae = v);
$parcel$export(module.exports, "ContextProvider", () => $6fc802f80005576e$export$9f27bc3417b4524d, (v) => $6fc802f80005576e$export$9f27bc3417b4524d = v);
$parcel$export(module.exports, "Element", () => $6fc802f80005576e$export$db77ccec0bb4ccac, (v) => $6fc802f80005576e$export$db77ccec0bb4ccac = v);
$parcel$export(module.exports, "ForwardRef", () => $6fc802f80005576e$export$8392c0c9d3dcbd35, (v) => $6fc802f80005576e$export$8392c0c9d3dcbd35 = v);
$parcel$export(module.exports, "Fragment", () => $6fc802f80005576e$export$ffb0004e005737fa, (v) => $6fc802f80005576e$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "Lazy", () => $6fc802f80005576e$export$b624eff549462981, (v) => $6fc802f80005576e$export$b624eff549462981 = v);
$parcel$export(module.exports, "Memo", () => $6fc802f80005576e$export$7897aa7841a5380c, (v) => $6fc802f80005576e$export$7897aa7841a5380c = v);
$parcel$export(module.exports, "Portal", () => $6fc802f80005576e$export$602eac185826482c, (v) => $6fc802f80005576e$export$602eac185826482c = v);
$parcel$export(module.exports, "Profiler", () => $6fc802f80005576e$export$e2c29f18771995cb, (v) => $6fc802f80005576e$export$e2c29f18771995cb = v);
$parcel$export(module.exports, "StrictMode", () => $6fc802f80005576e$export$5f8d39834fd61797, (v) => $6fc802f80005576e$export$5f8d39834fd61797 = v);
$parcel$export(module.exports, "Suspense", () => $6fc802f80005576e$export$74bf444e3cd11ea5, (v) => $6fc802f80005576e$export$74bf444e3cd11ea5 = v);
$parcel$export(module.exports, "isAsyncMode", () => $6fc802f80005576e$export$92387174baf9b227, (v) => $6fc802f80005576e$export$92387174baf9b227 = v);
$parcel$export(module.exports, "isConcurrentMode", () => $6fc802f80005576e$export$ec112efeb987d9c6, (v) => $6fc802f80005576e$export$ec112efeb987d9c6 = v);
$parcel$export(module.exports, "isContextConsumer", () => $6fc802f80005576e$export$b706b080d889d2c9, (v) => $6fc802f80005576e$export$b706b080d889d2c9 = v);
$parcel$export(module.exports, "isContextProvider", () => $6fc802f80005576e$export$5be5a87408f70ddc, (v) => $6fc802f80005576e$export$5be5a87408f70ddc = v);
$parcel$export(module.exports, "isElement", () => $6fc802f80005576e$export$45a5e7f76e0caa8d, (v) => $6fc802f80005576e$export$45a5e7f76e0caa8d = v);
$parcel$export(module.exports, "isForwardRef", () => $6fc802f80005576e$export$455c2e768291efa6, (v) => $6fc802f80005576e$export$455c2e768291efa6 = v);
$parcel$export(module.exports, "isFragment", () => $6fc802f80005576e$export$9522e17588c12572, (v) => $6fc802f80005576e$export$9522e17588c12572 = v);
$parcel$export(module.exports, "isLazy", () => $6fc802f80005576e$export$2110ac352bb060b9, (v) => $6fc802f80005576e$export$2110ac352bb060b9 = v);
$parcel$export(module.exports, "isMemo", () => $6fc802f80005576e$export$56885ab8b9c456ab, (v) => $6fc802f80005576e$export$56885ab8b9c456ab = v);
$parcel$export(module.exports, "isPortal", () => $6fc802f80005576e$export$d927fcb6adf8f9de, (v) => $6fc802f80005576e$export$d927fcb6adf8f9de = v);
$parcel$export(module.exports, "isProfiler", () => $6fc802f80005576e$export$b82d16f27459e05a, (v) => $6fc802f80005576e$export$b82d16f27459e05a = v);
$parcel$export(module.exports, "isStrictMode", () => $6fc802f80005576e$export$522c17b4f5e123e8, (v) => $6fc802f80005576e$export$522c17b4f5e123e8 = v);
$parcel$export(module.exports, "isSuspense", () => $6fc802f80005576e$export$1aabd8a0274ecfd6, (v) => $6fc802f80005576e$export$1aabd8a0274ecfd6 = v);
$parcel$export(module.exports, "isValidElementType", () => $6fc802f80005576e$export$9b621391a187a31a, (v) => $6fc802f80005576e$export$9b621391a187a31a = v);
$parcel$export(module.exports, "typeOf", () => $6fc802f80005576e$export$f5bbd400c2f4426f, (v) => $6fc802f80005576e$export$f5bbd400c2f4426f = v);
var $6fc802f80005576e$export$2b8d127b894957b9;
var $6fc802f80005576e$export$cea3a54a6425200c;
var $6fc802f80005576e$export$a7c73072b1a182ae;
var $6fc802f80005576e$export$9f27bc3417b4524d;
var $6fc802f80005576e$export$db77ccec0bb4ccac;
var $6fc802f80005576e$export$8392c0c9d3dcbd35;
var $6fc802f80005576e$export$ffb0004e005737fa;
var $6fc802f80005576e$export$b624eff549462981;
var $6fc802f80005576e$export$7897aa7841a5380c;
var $6fc802f80005576e$export$602eac185826482c;
var $6fc802f80005576e$export$e2c29f18771995cb;
var $6fc802f80005576e$export$5f8d39834fd61797;
var $6fc802f80005576e$export$74bf444e3cd11ea5;
var $6fc802f80005576e$export$92387174baf9b227;
var $6fc802f80005576e$export$ec112efeb987d9c6;
var $6fc802f80005576e$export$b706b080d889d2c9;
var $6fc802f80005576e$export$5be5a87408f70ddc;
var $6fc802f80005576e$export$45a5e7f76e0caa8d;
var $6fc802f80005576e$export$455c2e768291efa6;
var $6fc802f80005576e$export$9522e17588c12572;
var $6fc802f80005576e$export$2110ac352bb060b9;
var $6fc802f80005576e$export$56885ab8b9c456ab;
var $6fc802f80005576e$export$d927fcb6adf8f9de;
var $6fc802f80005576e$export$b82d16f27459e05a;
var $6fc802f80005576e$export$522c17b4f5e123e8;
var $6fc802f80005576e$export$1aabd8a0274ecfd6;
var $6fc802f80005576e$export$9b621391a187a31a;
var $6fc802f80005576e$export$f5bbd400c2f4426f;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $6fc802f80005576e$var$b = "function" === typeof Symbol && Symbol.for, $6fc802f80005576e$var$c = $6fc802f80005576e$var$b ? Symbol.for("react.element") : 60103, $6fc802f80005576e$var$d = $6fc802f80005576e$var$b ? Symbol.for("react.portal") : 60106, $6fc802f80005576e$var$e = $6fc802f80005576e$var$b ? Symbol.for("react.fragment") : 60107, $6fc802f80005576e$var$f = $6fc802f80005576e$var$b ? Symbol.for("react.strict_mode") : 60108, $6fc802f80005576e$var$g = $6fc802f80005576e$var$b ? Symbol.for("react.profiler") : 60114, $6fc802f80005576e$var$h = $6fc802f80005576e$var$b ? Symbol.for("react.provider") : 60109, $6fc802f80005576e$var$k = $6fc802f80005576e$var$b ? Symbol.for("react.context") : 60110, $6fc802f80005576e$var$l = $6fc802f80005576e$var$b ? Symbol.for("react.async_mode") : 60111, $6fc802f80005576e$var$m = $6fc802f80005576e$var$b ? Symbol.for("react.concurrent_mode") : 60111, $6fc802f80005576e$var$n = $6fc802f80005576e$var$b ? Symbol.for("react.forward_ref") : 60112, $6fc802f80005576e$var$p = $6fc802f80005576e$var$b ? Symbol.for("react.suspense") : 60113, $6fc802f80005576e$var$q = $6fc802f80005576e$var$b ? Symbol.for("react.suspense_list") : 60120, $6fc802f80005576e$var$r = $6fc802f80005576e$var$b ? Symbol.for("react.memo") : 60115, $6fc802f80005576e$var$t = $6fc802f80005576e$var$b ? Symbol.for("react.lazy") : 60116, $6fc802f80005576e$var$v = $6fc802f80005576e$var$b ? Symbol.for("react.block") : 60121, $6fc802f80005576e$var$w = $6fc802f80005576e$var$b ? Symbol.for("react.fundamental") : 60117, $6fc802f80005576e$var$x = $6fc802f80005576e$var$b ? Symbol.for("react.responder") : 60118, $6fc802f80005576e$var$y = $6fc802f80005576e$var$b ? Symbol.for("react.scope") : 60119;
function $6fc802f80005576e$var$z(a) {
    if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch(u){
            case $6fc802f80005576e$var$c:
                switch(a = a.type, a){
                    case $6fc802f80005576e$var$l:
                    case $6fc802f80005576e$var$m:
                    case $6fc802f80005576e$var$e:
                    case $6fc802f80005576e$var$g:
                    case $6fc802f80005576e$var$f:
                    case $6fc802f80005576e$var$p:
                        return a;
                    default:
                        switch(a = a && a.$$typeof, a){
                            case $6fc802f80005576e$var$k:
                            case $6fc802f80005576e$var$n:
                            case $6fc802f80005576e$var$t:
                            case $6fc802f80005576e$var$r:
                            case $6fc802f80005576e$var$h:
                                return a;
                            default:
                                return u;
                        }
                }
            case $6fc802f80005576e$var$d:
                return u;
        }
    }
}
function $6fc802f80005576e$var$A(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$m;
}
$6fc802f80005576e$export$2b8d127b894957b9 = $6fc802f80005576e$var$l;
$6fc802f80005576e$export$cea3a54a6425200c = $6fc802f80005576e$var$m;
$6fc802f80005576e$export$a7c73072b1a182ae = $6fc802f80005576e$var$k;
$6fc802f80005576e$export$9f27bc3417b4524d = $6fc802f80005576e$var$h;
$6fc802f80005576e$export$db77ccec0bb4ccac = $6fc802f80005576e$var$c;
$6fc802f80005576e$export$8392c0c9d3dcbd35 = $6fc802f80005576e$var$n;
$6fc802f80005576e$export$ffb0004e005737fa = $6fc802f80005576e$var$e;
$6fc802f80005576e$export$b624eff549462981 = $6fc802f80005576e$var$t;
$6fc802f80005576e$export$7897aa7841a5380c = $6fc802f80005576e$var$r;
$6fc802f80005576e$export$602eac185826482c = $6fc802f80005576e$var$d;
$6fc802f80005576e$export$e2c29f18771995cb = $6fc802f80005576e$var$g;
$6fc802f80005576e$export$5f8d39834fd61797 = $6fc802f80005576e$var$f;
$6fc802f80005576e$export$74bf444e3cd11ea5 = $6fc802f80005576e$var$p;
$6fc802f80005576e$export$92387174baf9b227 = function(a) {
    return $6fc802f80005576e$var$A(a) || $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$l;
};
$6fc802f80005576e$export$ec112efeb987d9c6 = $6fc802f80005576e$var$A;
$6fc802f80005576e$export$b706b080d889d2c9 = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$k;
};
$6fc802f80005576e$export$5be5a87408f70ddc = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$h;
};
$6fc802f80005576e$export$45a5e7f76e0caa8d = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $6fc802f80005576e$var$c;
};
$6fc802f80005576e$export$455c2e768291efa6 = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$n;
};
$6fc802f80005576e$export$9522e17588c12572 = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$e;
};
$6fc802f80005576e$export$2110ac352bb060b9 = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$t;
};
$6fc802f80005576e$export$56885ab8b9c456ab = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$r;
};
$6fc802f80005576e$export$d927fcb6adf8f9de = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$d;
};
$6fc802f80005576e$export$b82d16f27459e05a = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$g;
};
$6fc802f80005576e$export$522c17b4f5e123e8 = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$f;
};
$6fc802f80005576e$export$1aabd8a0274ecfd6 = function(a) {
    return $6fc802f80005576e$var$z(a) === $6fc802f80005576e$var$p;
};
$6fc802f80005576e$export$9b621391a187a31a = function(a) {
    return "string" === typeof a || "function" === typeof a || a === $6fc802f80005576e$var$e || a === $6fc802f80005576e$var$m || a === $6fc802f80005576e$var$g || a === $6fc802f80005576e$var$f || a === $6fc802f80005576e$var$p || a === $6fc802f80005576e$var$q || "object" === typeof a && null !== a && (a.$$typeof === $6fc802f80005576e$var$t || a.$$typeof === $6fc802f80005576e$var$r || a.$$typeof === $6fc802f80005576e$var$h || a.$$typeof === $6fc802f80005576e$var$k || a.$$typeof === $6fc802f80005576e$var$n || a.$$typeof === $6fc802f80005576e$var$w || a.$$typeof === $6fc802f80005576e$var$x || a.$$typeof === $6fc802f80005576e$var$y || a.$$typeof === $6fc802f80005576e$var$v);
};
$6fc802f80005576e$export$f5bbd400c2f4426f = $6fc802f80005576e$var$z;

});

var $c706e6ba5fa7bca6$exports = {};

$parcel$export($c706e6ba5fa7bca6$exports, "Thermostat", () => $c706e6ba5fa7bca6$export$c1cbc01833f43ebe);
var $95e690a3037e1728$exports = {};
"use strict";

$95e690a3037e1728$exports = (parcelRequire("51lsI"));


function $ade4a261564f8dbe$export$2e2bcd8739ae039() {
    $ade4a261564f8dbe$export$2e2bcd8739ae039 = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $ade4a261564f8dbe$export$2e2bcd8739ae039.apply(this, arguments);
}



var $kr2Bq = parcelRequire("kr2Bq");
function $8d6f8cf91780eb2e$var$memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
var $8d6f8cf91780eb2e$export$2e2bcd8739ae039 = $8d6f8cf91780eb2e$var$memoize;


var $564dfaa4f95f4708$var$reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var $564dfaa4f95f4708$var$isPropValid = /* #__PURE__ */ (0, $8d6f8cf91780eb2e$export$2e2bcd8739ae039)(function(prop) {
    return $564dfaa4f95f4708$var$reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var $564dfaa4f95f4708$export$2e2bcd8739ae039 = $564dfaa4f95f4708$var$isPropValid;



var $kr2Bq = parcelRequire("kr2Bq");
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/ // $FlowFixMe
function $a7cdf6acfa4d6206$var$sheetForTag(tag) {
    if (tag.sheet) // $FlowFixMe
    return tag.sheet;
     // this weirdness brought to you by firefox
    /* istanbul ignore next */ for(var i = 0; i < document.styleSheets.length; i++){
        if (document.styleSheets[i].ownerNode === tag) // $FlowFixMe
        return document.styleSheets[i];
    }
}
function $a7cdf6acfa4d6206$var$createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== undefined) tag.setAttribute("nonce", options.nonce);
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
}
var $a7cdf6acfa4d6206$export$9d753cd7ae895cce = /*#__PURE__*/ function() {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
        var _this = this;
        this._insertTag = function(tag) {
            var before;
            if (_this.tags.length === 0) {
                if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
                else if (_this.prepend) before = _this.container.firstChild;
                else before = _this.before;
            } else before = _this.tags[_this.tags.length - 1].nextSibling;
            _this.container.insertBefore(tag, before);
            _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === undefined ? true : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
    }
    var _proto = StyleSheet.prototype;
    _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) this._insertTag($a7cdf6acfa4d6206$var$createStyleElement(this));
        var tag = this.tags[this.tags.length - 1];
        var isImportRule;
        if (this.isSpeedy) {
            var sheet = $a7cdf6acfa4d6206$var$sheetForTag(tag);
            try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {}
        } else tag.appendChild(document.createTextNode(rule));
        this.ctr++;
    };
    _proto.flush = function flush() {
        // $FlowFixMe
        this.tags.forEach(function(tag) {
            return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
    };
    return StyleSheet;
}();


var $c08e34e3fba9a402$export$71ad59f2e432cfe8 = "-ms-";
var $c08e34e3fba9a402$export$2c0f367103c8d01c = "-moz-";
var $c08e34e3fba9a402$export$39dfd62a25e0fe93 = "-webkit-";
var $c08e34e3fba9a402$export$a29989082612d0d9 = "comm";
var $c08e34e3fba9a402$export$aa3a2e812ca8570d = "rule";
var $c08e34e3fba9a402$export$527d108ccf083c2b = "decl";
var $c08e34e3fba9a402$export$d3d35020fa5b54f0 = "@page";
var $c08e34e3fba9a402$export$500415a86c544f73 = "@media";
var $c08e34e3fba9a402$export$a763edbf796b780a = "@import";
var $c08e34e3fba9a402$export$2790aeb8b4e5c826 = "@charset";
var $c08e34e3fba9a402$export$1cc683e23b84b133 = "@viewport";
var $c08e34e3fba9a402$export$9447a5efea57e862 = "@supports";
var $c08e34e3fba9a402$export$ef011b4e114b1fba = "@document";
var $c08e34e3fba9a402$export$6aad947bda0f3f46 = "@namespace";
var $c08e34e3fba9a402$export$b44a8529a35fcb60 = "@keyframes";
var $c08e34e3fba9a402$export$2c16de31893252e6 = "@font-face";
var $c08e34e3fba9a402$export$3d846dd52e150c6f = "@counter-style";
var $c08e34e3fba9a402$export$22314bfbb57653fe = "@font-feature-values";
var $c08e34e3fba9a402$export$2335f513bbd82c6d = Math.abs;
var $c08e34e3fba9a402$export$6788812c4e6611e6 = String.fromCharCode;
var $c08e34e3fba9a402$export$e6e34fd1f2686227 = Object.assign;
function $c08e34e3fba9a402$export$d6af199866bfb566(e, r) {
    return $c08e34e3fba9a402$export$a9db5e087081082d(e, 0) ^ 45 ? (((r << 2 ^ $c08e34e3fba9a402$export$a9db5e087081082d(e, 0)) << 2 ^ $c08e34e3fba9a402$export$a9db5e087081082d(e, 1)) << 2 ^ $c08e34e3fba9a402$export$a9db5e087081082d(e, 2)) << 2 ^ $c08e34e3fba9a402$export$a9db5e087081082d(e, 3) : 0;
}
function $c08e34e3fba9a402$export$87c2784dc9fc4ab(e) {
    return e.trim();
}
function $c08e34e3fba9a402$export$4659b591c19bdf3d(e, r) {
    return (e = r.exec(e)) ? e[0] : e;
}
function $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(e, r, a) {
    return e.replace(r, a);
}
function $c08e34e3fba9a402$export$f8e21b1e77979a08(e, r) {
    return e.indexOf(r);
}
function $c08e34e3fba9a402$export$a9db5e087081082d(e, r) {
    return e.charCodeAt(r) | 0;
}
function $c08e34e3fba9a402$export$2f35ab04d2335697(e, r, a) {
    return e.slice(r, a);
}
function $c08e34e3fba9a402$export$36776f635604f274(e) {
    return e.length;
}
function $c08e34e3fba9a402$export$f9084667e487ed46(e) {
    return e.length;
}
function $c08e34e3fba9a402$export$10d8903dec122b9d(e, r) {
    return r.push(e), e;
}
function $c08e34e3fba9a402$export$1be1fc439b849fdf(e, r) {
    return e.map(r).join("");
}
var $c08e34e3fba9a402$export$53f1d5ea8de3d7c = 1;
var $c08e34e3fba9a402$export$4e0c71f277ca26b3 = 1;
var $c08e34e3fba9a402$export$f24224f1c91d8156 = 0;
var $c08e34e3fba9a402$export$5880b8b5730aff45 = 0;
var $c08e34e3fba9a402$export$c0306caf338ac095 = 0;
var $c08e34e3fba9a402$export$30a86d91af8ff6e6 = "";
function $c08e34e3fba9a402$export$35059013cd4a06db(e, r, a, n, c, s, t) {
    return {
        value: e,
        root: r,
        parent: a,
        type: n,
        props: c,
        children: s,
        line: $c08e34e3fba9a402$export$53f1d5ea8de3d7c,
        column: $c08e34e3fba9a402$export$4e0c71f277ca26b3,
        length: t,
        return: ""
    };
}
function $c08e34e3fba9a402$export$784d13d8ee351f07(e, r) {
    return $c08e34e3fba9a402$export$e6e34fd1f2686227($c08e34e3fba9a402$export$35059013cd4a06db("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, r);
}
function $c08e34e3fba9a402$export$eba6f6f03b0a92e7() {
    return $c08e34e3fba9a402$export$c0306caf338ac095;
}
function $c08e34e3fba9a402$export$232faf9add678146() {
    $c08e34e3fba9a402$export$c0306caf338ac095 = $c08e34e3fba9a402$export$5880b8b5730aff45 > 0 ? $c08e34e3fba9a402$export$a9db5e087081082d($c08e34e3fba9a402$export$30a86d91af8ff6e6, --$c08e34e3fba9a402$export$5880b8b5730aff45) : 0;
    if ($c08e34e3fba9a402$export$4e0c71f277ca26b3--, $c08e34e3fba9a402$export$c0306caf338ac095 === 10) $c08e34e3fba9a402$export$4e0c71f277ca26b3 = 1, $c08e34e3fba9a402$export$53f1d5ea8de3d7c--;
    return $c08e34e3fba9a402$export$c0306caf338ac095;
}
function $c08e34e3fba9a402$export$48cfd1e771a65c4f() {
    $c08e34e3fba9a402$export$c0306caf338ac095 = $c08e34e3fba9a402$export$5880b8b5730aff45 < $c08e34e3fba9a402$export$f24224f1c91d8156 ? $c08e34e3fba9a402$export$a9db5e087081082d($c08e34e3fba9a402$export$30a86d91af8ff6e6, $c08e34e3fba9a402$export$5880b8b5730aff45++) : 0;
    if ($c08e34e3fba9a402$export$4e0c71f277ca26b3++, $c08e34e3fba9a402$export$c0306caf338ac095 === 10) $c08e34e3fba9a402$export$4e0c71f277ca26b3 = 1, $c08e34e3fba9a402$export$53f1d5ea8de3d7c++;
    return $c08e34e3fba9a402$export$c0306caf338ac095;
}
function $c08e34e3fba9a402$export$4d3fb11e950abb9e() {
    return $c08e34e3fba9a402$export$a9db5e087081082d($c08e34e3fba9a402$export$30a86d91af8ff6e6, $c08e34e3fba9a402$export$5880b8b5730aff45);
}
function $c08e34e3fba9a402$export$e88cb2efb12ae807() {
    return $c08e34e3fba9a402$export$5880b8b5730aff45;
}
function $c08e34e3fba9a402$export$58adb3bec8346d0f(e, r) {
    return $c08e34e3fba9a402$export$2f35ab04d2335697($c08e34e3fba9a402$export$30a86d91af8ff6e6, e, r);
}
function $c08e34e3fba9a402$export$9e1725a4cfeada27(e) {
    switch(e){
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function $c08e34e3fba9a402$export$2de70f21292aac9e(e) {
    return $c08e34e3fba9a402$export$53f1d5ea8de3d7c = $c08e34e3fba9a402$export$4e0c71f277ca26b3 = 1, $c08e34e3fba9a402$export$f24224f1c91d8156 = $c08e34e3fba9a402$export$36776f635604f274($c08e34e3fba9a402$export$30a86d91af8ff6e6 = e), $c08e34e3fba9a402$export$5880b8b5730aff45 = 0, [];
}
function $c08e34e3fba9a402$export$45918ac1574455b1(e) {
    return $c08e34e3fba9a402$export$30a86d91af8ff6e6 = "", e;
}
function $c08e34e3fba9a402$export$410ac95b9ec204b8(e) {
    return $c08e34e3fba9a402$export$87c2784dc9fc4ab($c08e34e3fba9a402$export$58adb3bec8346d0f($c08e34e3fba9a402$export$5880b8b5730aff45 - 1, $c08e34e3fba9a402$export$c889f2fcc19dbf12(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $c08e34e3fba9a402$export$660b2ee2d4fb4eff(e) {
    return $c08e34e3fba9a402$export$45918ac1574455b1($c08e34e3fba9a402$export$5f8c09e3ae6f64e1($c08e34e3fba9a402$export$2de70f21292aac9e(e)));
}
function $c08e34e3fba9a402$export$7af1228ff777d175(e) {
    while($c08e34e3fba9a402$export$c0306caf338ac095 = $c08e34e3fba9a402$export$4d3fb11e950abb9e())if ($c08e34e3fba9a402$export$c0306caf338ac095 < 33) $c08e34e3fba9a402$export$48cfd1e771a65c4f();
    else break;
    return $c08e34e3fba9a402$export$9e1725a4cfeada27(e) > 2 || $c08e34e3fba9a402$export$9e1725a4cfeada27($c08e34e3fba9a402$export$c0306caf338ac095) > 3 ? "" : " ";
}
function $c08e34e3fba9a402$export$5f8c09e3ae6f64e1(e) {
    while($c08e34e3fba9a402$export$48cfd1e771a65c4f())switch($c08e34e3fba9a402$export$9e1725a4cfeada27($c08e34e3fba9a402$export$c0306caf338ac095)){
        case 0:
            $c08e34e3fba9a402$export$10d8903dec122b9d($c08e34e3fba9a402$export$c2ab62c7bf24634($c08e34e3fba9a402$export$5880b8b5730aff45 - 1), e);
            break;
        case 2:
            $c08e34e3fba9a402$export$10d8903dec122b9d($c08e34e3fba9a402$export$410ac95b9ec204b8($c08e34e3fba9a402$export$c0306caf338ac095), e);
            break;
        default:
            $c08e34e3fba9a402$export$10d8903dec122b9d($c08e34e3fba9a402$export$6788812c4e6611e6($c08e34e3fba9a402$export$c0306caf338ac095), e);
    }
    return e;
}
function $c08e34e3fba9a402$export$955ba06d119e085e(e, r) {
    while(--r && $c08e34e3fba9a402$export$48cfd1e771a65c4f())if ($c08e34e3fba9a402$export$c0306caf338ac095 < 48 || $c08e34e3fba9a402$export$c0306caf338ac095 > 102 || $c08e34e3fba9a402$export$c0306caf338ac095 > 57 && $c08e34e3fba9a402$export$c0306caf338ac095 < 65 || $c08e34e3fba9a402$export$c0306caf338ac095 > 70 && $c08e34e3fba9a402$export$c0306caf338ac095 < 97) break;
    return $c08e34e3fba9a402$export$58adb3bec8346d0f(e, $c08e34e3fba9a402$export$e88cb2efb12ae807() + (r < 6 && $c08e34e3fba9a402$export$4d3fb11e950abb9e() == 32 && $c08e34e3fba9a402$export$48cfd1e771a65c4f() == 32));
}
function $c08e34e3fba9a402$export$c889f2fcc19dbf12(e) {
    while($c08e34e3fba9a402$export$48cfd1e771a65c4f())switch($c08e34e3fba9a402$export$c0306caf338ac095){
        case e:
            return $c08e34e3fba9a402$export$5880b8b5730aff45;
        case 34:
        case 39:
            if (e !== 34 && e !== 39) $c08e34e3fba9a402$export$c889f2fcc19dbf12($c08e34e3fba9a402$export$c0306caf338ac095);
            break;
        case 40:
            if (e === 41) $c08e34e3fba9a402$export$c889f2fcc19dbf12(e);
            break;
        case 92:
            $c08e34e3fba9a402$export$48cfd1e771a65c4f();
            break;
    }
    return $c08e34e3fba9a402$export$5880b8b5730aff45;
}
function $c08e34e3fba9a402$export$4254d4e2b3745c4c(e, r) {
    while($c08e34e3fba9a402$export$48cfd1e771a65c4f())if (e + $c08e34e3fba9a402$export$c0306caf338ac095 === 57) break;
    else if (e + $c08e34e3fba9a402$export$c0306caf338ac095 === 84 && $c08e34e3fba9a402$export$4d3fb11e950abb9e() === 47) break;
    return "/*" + $c08e34e3fba9a402$export$58adb3bec8346d0f(r, $c08e34e3fba9a402$export$5880b8b5730aff45 - 1) + "*" + $c08e34e3fba9a402$export$6788812c4e6611e6(e === 47 ? e : $c08e34e3fba9a402$export$48cfd1e771a65c4f());
}
function $c08e34e3fba9a402$export$c2ab62c7bf24634(e) {
    while(!$c08e34e3fba9a402$export$9e1725a4cfeada27($c08e34e3fba9a402$export$4d3fb11e950abb9e()))$c08e34e3fba9a402$export$48cfd1e771a65c4f();
    return $c08e34e3fba9a402$export$58adb3bec8346d0f(e, $c08e34e3fba9a402$export$5880b8b5730aff45);
}
function $c08e34e3fba9a402$export$ef7acd7185315e22(e) {
    return $c08e34e3fba9a402$export$45918ac1574455b1($c08e34e3fba9a402$export$98e6a39c04603d36("", null, null, null, [
        ""
    ], e = $c08e34e3fba9a402$export$2de70f21292aac9e(e), 0, [
        0
    ], e));
}
function $c08e34e3fba9a402$export$98e6a39c04603d36(e, r, a, n, c, s, t, u, i) {
    var f = 0;
    var o = 0;
    var l = t;
    var v = 0;
    var p = 0;
    var h = 0;
    var b = 1;
    var w = 1;
    var d = 1;
    var $ = 0;
    var g = "";
    var m = c;
    var x = s;
    var y = n;
    var O = g;
    while(w)switch(h = $, $ = $c08e34e3fba9a402$export$48cfd1e771a65c4f()){
        case 40:
            if (h != 108 && $c08e34e3fba9a402$export$a9db5e087081082d(O, l - 1) == 58) {
                if ($c08e34e3fba9a402$export$f8e21b1e77979a08(O += $c08e34e3fba9a402$export$77ad94ebf1c2b9ed($c08e34e3fba9a402$export$410ac95b9ec204b8($), "&", "&\f"), "&\f") != -1) d = -1;
                break;
            }
        case 34:
        case 39:
        case 91:
            O += $c08e34e3fba9a402$export$410ac95b9ec204b8($);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            O += $c08e34e3fba9a402$export$7af1228ff777d175(h);
            break;
        case 92:
            O += $c08e34e3fba9a402$export$955ba06d119e085e($c08e34e3fba9a402$export$e88cb2efb12ae807() - 1, 7);
            continue;
        case 47:
            switch($c08e34e3fba9a402$export$4d3fb11e950abb9e()){
                case 42:
                case 47:
                    $c08e34e3fba9a402$export$10d8903dec122b9d($c08e34e3fba9a402$export$4a34f930e789283c($c08e34e3fba9a402$export$4254d4e2b3745c4c($c08e34e3fba9a402$export$48cfd1e771a65c4f(), $c08e34e3fba9a402$export$e88cb2efb12ae807()), r, a), i);
                    break;
                default:
                    O += "/";
            }
            break;
        case 123 * b:
            u[f++] = $c08e34e3fba9a402$export$36776f635604f274(O) * d;
        case 125 * b:
        case 59:
        case 0:
            switch($){
                case 0:
                case 125:
                    w = 0;
                case 59 + o:
                    if (p > 0 && $c08e34e3fba9a402$export$36776f635604f274(O) - l) $c08e34e3fba9a402$export$10d8903dec122b9d(p > 32 ? $c08e34e3fba9a402$export$f8483753829ec8f3(O + ";", n, a, l - 1) : $c08e34e3fba9a402$export$f8483753829ec8f3($c08e34e3fba9a402$export$77ad94ebf1c2b9ed(O, " ", "") + ";", n, a, l - 2), i);
                    break;
                case 59:
                    O += ";";
                default:
                    $c08e34e3fba9a402$export$10d8903dec122b9d(y = $c08e34e3fba9a402$export$3307ffa7023ede1e(O, r, a, f, o, c, u, g, m = [], x = [], l), s);
                    if ($ === 123) {
                        if (o === 0) $c08e34e3fba9a402$export$98e6a39c04603d36(O, r, y, y, m, s, l, u, x);
                        else switch(v === 99 && $c08e34e3fba9a402$export$a9db5e087081082d(O, 3) === 110 ? 100 : v){
                            case 100:
                            case 109:
                            case 115:
                                $c08e34e3fba9a402$export$98e6a39c04603d36(e, y, y, n && $c08e34e3fba9a402$export$10d8903dec122b9d($c08e34e3fba9a402$export$3307ffa7023ede1e(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
                                break;
                            default:
                                $c08e34e3fba9a402$export$98e6a39c04603d36(O, y, y, y, [
                                    ""
                                ], x, 0, u, x);
                        }
                    }
            }
            f = o = p = 0, b = d = 1, g = O = "", l = t;
            break;
        case 58:
            l = 1 + $c08e34e3fba9a402$export$36776f635604f274(O), p = h;
        default:
            if (b < 1) {
                if ($ == 123) --b;
                else if ($ == 125 && (b++) == 0 && $c08e34e3fba9a402$export$232faf9add678146() == 125) continue;
            }
            switch(O += $c08e34e3fba9a402$export$6788812c4e6611e6($), $ * b){
                case 38:
                    d = o > 0 ? 1 : (O += "\f", -1);
                    break;
                case 44:
                    u[f++] = ($c08e34e3fba9a402$export$36776f635604f274(O) - 1) * d, d = 1;
                    break;
                case 64:
                    if ($c08e34e3fba9a402$export$4d3fb11e950abb9e() === 45) O += $c08e34e3fba9a402$export$410ac95b9ec204b8($c08e34e3fba9a402$export$48cfd1e771a65c4f());
                    v = $c08e34e3fba9a402$export$4d3fb11e950abb9e(), o = l = $c08e34e3fba9a402$export$36776f635604f274(g = O += $c08e34e3fba9a402$export$c2ab62c7bf24634($c08e34e3fba9a402$export$e88cb2efb12ae807())), $++;
                    break;
                case 45:
                    if (h === 45 && $c08e34e3fba9a402$export$36776f635604f274(O) == 2) b = 0;
            }
    }
    return s;
}
function $c08e34e3fba9a402$export$3307ffa7023ede1e(e, r, a, n, s, t, u, i, f, o, l) {
    var v = s - 1;
    var p = s === 0 ? t : [
        ""
    ];
    var h = $c08e34e3fba9a402$export$f9084667e487ed46(p);
    for(var b = 0, w = 0, d = 0; b < n; ++b)for(var k = 0, g = $c08e34e3fba9a402$export$2f35ab04d2335697(e, v + 1, v = $c08e34e3fba9a402$export$2335f513bbd82c6d(w = u[b])), m = e; k < h; ++k)if (m = $c08e34e3fba9a402$export$87c2784dc9fc4ab(w > 0 ? p[k] + " " + g : $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(g, /&\f/g, p[k]))) f[d++] = m;
    return $c08e34e3fba9a402$export$35059013cd4a06db(e, r, a, s === 0 ? $c08e34e3fba9a402$export$aa3a2e812ca8570d : i, f, o, l);
}
function $c08e34e3fba9a402$export$4a34f930e789283c(e, r, a) {
    return $c08e34e3fba9a402$export$35059013cd4a06db(e, r, a, $c08e34e3fba9a402$export$a29989082612d0d9, $c08e34e3fba9a402$export$6788812c4e6611e6($c08e34e3fba9a402$export$eba6f6f03b0a92e7()), $c08e34e3fba9a402$export$2f35ab04d2335697(e, 2, -2), 0);
}
function $c08e34e3fba9a402$export$f8483753829ec8f3(e, r, a, n) {
    return $c08e34e3fba9a402$export$35059013cd4a06db(e, r, a, $c08e34e3fba9a402$export$527d108ccf083c2b, $c08e34e3fba9a402$export$2f35ab04d2335697(e, 0, n), $c08e34e3fba9a402$export$2f35ab04d2335697(e, n + 1, -1), n);
}
function $c08e34e3fba9a402$export$82e9f45cca5ba907(n, c, s) {
    switch($c08e34e3fba9a402$export$d6af199866bfb566(n, c)){
        case 5103:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "print-" + n + n;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + n;
        case 4789:
            return $c08e34e3fba9a402$export$2c0f367103c8d01c + n + n;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$2c0f367103c8d01c + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + n + n;
        case 5936:
            switch($c08e34e3fba9a402$export$a9db5e087081082d(n, c + 11)){
                case 114:
                    return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
                case 108:
                    return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
                case 45:
                    return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
            }
        case 6828:
        case 4268:
        case 2903:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + n + n;
        case 6165:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "flex-" + n + n;
        case 5187:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(\w+).+(:[^]+)/, $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "box-$1$2" + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "flex-$1$2") + n;
        case 5443:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "flex-item-" + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /flex-|-self/g, "") + (!$c08e34e3fba9a402$export$4659b591c19bdf3d(n, /flex-|baseline/) ? $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "grid-row-" + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /flex-|-self/g, "") : "") + n;
        case 4675:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "flex-line-pack" + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /align-content|flex-|-self/g, "") + n;
        case 5548:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "shrink", "negative") + n;
        case 5292:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "basis", "preferred-size") + n;
        case 6060:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "box-" + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "-grow", "") + $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "grow", "positive") + n;
        case 4554:
            return $c08e34e3fba9a402$export$39dfd62a25e0fe93 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /([^-])(transform)/g, "$1" + $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "$2") + n;
        case 6187:
            return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed($c08e34e3fba9a402$export$77ad94ebf1c2b9ed($c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(zoom-|grab)/, $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "$1"), /(image-set)/, $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "$1"), n, "") + n;
        case 5495:
        case 3959:
            return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(image-set\([^]*)/, $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "$1" + "$`$1");
        case 4968:
            return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed($c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(.+:)(flex-)?(.*)/, $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "box-pack:$3" + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $c08e34e3fba9a402$export$39dfd62a25e0fe93 + n + n;
        case 4200:
            if (!$c08e34e3fba9a402$export$4659b591c19bdf3d(n, /flex-|baseline/)) return $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "grid-column-align" + $c08e34e3fba9a402$export$2f35ab04d2335697(n, c) + n;
            break;
        case 2592:
        case 3360:
            return $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "template-", "") + n;
        case 4384:
        case 3616:
            if (s && s.some(function(e, r) {
                return c = r, $c08e34e3fba9a402$export$4659b591c19bdf3d(e.props, /grid-\w+-end/);
            })) return ~$c08e34e3fba9a402$export$f8e21b1e77979a08(n + (s = s[c].value), "span") ? n : $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "-start", "") + n + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "grid-row-span:" + (~$c08e34e3fba9a402$export$f8e21b1e77979a08(s, "span") ? $c08e34e3fba9a402$export$4659b591c19bdf3d(s, /\d+/) : +$c08e34e3fba9a402$export$4659b591c19bdf3d(s, /\d+/) - +$c08e34e3fba9a402$export$4659b591c19bdf3d(n, /\d+/)) + ";";
            return $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "-start", "") + n;
        case 4896:
        case 4128:
            return s && s.some(function(e) {
                return $c08e34e3fba9a402$export$4659b591c19bdf3d(e.props, /grid-\w+-start/);
            }) ? n : $c08e34e3fba9a402$export$71ad59f2e432cfe8 + $c08e34e3fba9a402$export$77ad94ebf1c2b9ed($c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "-end", "-span"), "span ", "") + n;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(.+)-inline(.+)/, $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "$1$2") + n;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if ($c08e34e3fba9a402$export$36776f635604f274(n) - 1 - c > 6) switch($c08e34e3fba9a402$export$a9db5e087081082d(n, c + 1)){
                case 109:
                    if ($c08e34e3fba9a402$export$a9db5e087081082d(n, c + 4) !== 45) break;
                case 102:
                    return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(.+:)(.+)-([^]+)/, "$1" + $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "$2-$3" + "$1" + $c08e34e3fba9a402$export$2c0f367103c8d01c + ($c08e34e3fba9a402$export$a9db5e087081082d(n, c + 3) == 108 ? "$3" : "$2-$3")) + n;
                case 115:
                    return ~$c08e34e3fba9a402$export$f8e21b1e77979a08(n, "stretch") ? $c08e34e3fba9a402$export$82e9f45cca5ba907($c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "stretch", "fill-available"), c, s) + n : n;
            }
            break;
        case 5152:
        case 5920:
            return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, a, c, s, t, u, i) {
                return $c08e34e3fba9a402$export$71ad59f2e432cfe8 + a + ":" + c + i + (s ? $c08e34e3fba9a402$export$71ad59f2e432cfe8 + a + "-span:" + (t ? u : +u - +c) + i : "") + n;
            });
        case 4949:
            if ($c08e34e3fba9a402$export$a9db5e087081082d(n, c + 6) === 121) return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, ":", ":" + $c08e34e3fba9a402$export$39dfd62a25e0fe93) + n;
            break;
        case 6444:
            switch($c08e34e3fba9a402$export$a9db5e087081082d(n, $c08e34e3fba9a402$export$a9db5e087081082d(n, 14) === 45 ? 18 : 11)){
                case 120:
                    return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + $c08e34e3fba9a402$export$39dfd62a25e0fe93 + ($c08e34e3fba9a402$export$a9db5e087081082d(n, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "$2$3" + "$1" + $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "$2box$3") + n;
                case 100:
                    return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, ":", ":" + $c08e34e3fba9a402$export$71ad59f2e432cfe8) + n;
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n, "scroll-", "scroll-snap-") + n;
    }
    return n;
}
function $c08e34e3fba9a402$export$dfdc1655ccc5b9cb(e, r) {
    var a = "";
    var n = $c08e34e3fba9a402$export$f9084667e487ed46(e);
    for(var c = 0; c < n; c++)a += r(e[c], c, e, r) || "";
    return a;
}
function $c08e34e3fba9a402$export$fac44ee5b035f737(e, r, a, t) {
    switch(e.type){
        case $c08e34e3fba9a402$export$a763edbf796b780a:
        case $c08e34e3fba9a402$export$527d108ccf083c2b:
            return e.return = e.return || e.value;
        case $c08e34e3fba9a402$export$a29989082612d0d9:
            return "";
        case $c08e34e3fba9a402$export$b44a8529a35fcb60:
            return e.return = e.value + "{" + $c08e34e3fba9a402$export$dfdc1655ccc5b9cb(e.children, t) + "}";
        case $c08e34e3fba9a402$export$aa3a2e812ca8570d:
            e.value = e.props.join(",");
    }
    return $c08e34e3fba9a402$export$36776f635604f274(a = $c08e34e3fba9a402$export$dfdc1655ccc5b9cb(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
}
function $c08e34e3fba9a402$export$5a7767152ae0305f(e) {
    var r = $c08e34e3fba9a402$export$f9084667e487ed46(e);
    return function(a, n, c, s) {
        var t = "";
        for(var u = 0; u < r; u++)t += e[u](a, n, c, s) || "";
        return t;
    };
}
function $c08e34e3fba9a402$export$38bcb760f1d4871c(e) {
    return function(r) {
        if (!r.root) {
            if (r = r.return) e(r);
        }
    };
}
function $c08e34e3fba9a402$export$e08c7d021b829b7a(n, t, u, i) {
    if (n.length > -1) {
        if (!n.return) switch(n.type){
            case $c08e34e3fba9a402$export$527d108ccf083c2b:
                n.return = $c08e34e3fba9a402$export$82e9f45cca5ba907(n.value, n.length, u);
                return;
            case $c08e34e3fba9a402$export$b44a8529a35fcb60:
                return $c08e34e3fba9a402$export$dfdc1655ccc5b9cb([
                    $c08e34e3fba9a402$export$784d13d8ee351f07(n, {
                        value: $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(n.value, "@", "@" + $c08e34e3fba9a402$export$39dfd62a25e0fe93)
                    })
                ], i);
            case $c08e34e3fba9a402$export$aa3a2e812ca8570d:
                if (n.length) return $c08e34e3fba9a402$export$1be1fc439b849fdf(n.props, function(c) {
                    switch($c08e34e3fba9a402$export$4659b591c19bdf3d(c, /(::plac\w+|:read-\w+)/)){
                        case ":read-only":
                        case ":read-write":
                            return $c08e34e3fba9a402$export$dfdc1655ccc5b9cb([
                                $c08e34e3fba9a402$export$784d13d8ee351f07(n, {
                                    props: [
                                        $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(c, /:(read-\w+)/, ":" + $c08e34e3fba9a402$export$2c0f367103c8d01c + "$1")
                                    ]
                                })
                            ], i);
                        case "::placeholder":
                            return $c08e34e3fba9a402$export$dfdc1655ccc5b9cb([
                                $c08e34e3fba9a402$export$784d13d8ee351f07(n, {
                                    props: [
                                        $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(c, /:(plac\w+)/, ":" + $c08e34e3fba9a402$export$39dfd62a25e0fe93 + "input-$1")
                                    ]
                                }),
                                $c08e34e3fba9a402$export$784d13d8ee351f07(n, {
                                    props: [
                                        $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(c, /:(plac\w+)/, ":" + $c08e34e3fba9a402$export$2c0f367103c8d01c + "$1")
                                    ]
                                }),
                                $c08e34e3fba9a402$export$784d13d8ee351f07(n, {
                                    props: [
                                        $c08e34e3fba9a402$export$77ad94ebf1c2b9ed(c, /:(plac\w+)/, $c08e34e3fba9a402$export$71ad59f2e432cfe8 + "input-$1")
                                    ]
                                })
                            ], i);
                    }
                    return "";
                });
        }
    }
}
function $c08e34e3fba9a402$export$76a88f7de6507443(e) {
    switch(e.type){
        case $c08e34e3fba9a402$export$aa3a2e812ca8570d:
            e.props = e.props.map(function(r) {
                return $c08e34e3fba9a402$export$1be1fc439b849fdf($c08e34e3fba9a402$export$660b2ee2d4fb4eff(r), function(r, a, n) {
                    switch($c08e34e3fba9a402$export$a9db5e087081082d(r, 0)){
                        case 12:
                            return $c08e34e3fba9a402$export$2f35ab04d2335697(r, 1, $c08e34e3fba9a402$export$36776f635604f274(r));
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return r;
                        case 58:
                            if (n[++a] === "global") n[a] = "", n[++a] = "\f" + $c08e34e3fba9a402$export$2f35ab04d2335697(n[a], a = 1, -1);
                        case 32:
                            return a === 1 ? "" : r;
                        default:
                            switch(a){
                                case 0:
                                    e = r;
                                    return $c08e34e3fba9a402$export$f9084667e487ed46(n) > 1 ? "" : r;
                                case a = $c08e34e3fba9a402$export$f9084667e487ed46(n) - 1:
                                case 2:
                                    return a === 2 ? r + e + e : r + e;
                                default:
                                    return r;
                            }
                    }
                });
            });
    }
}


var $a3eb5d382a9e88f9$var$weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function(arg) {
        if (cache.has(arg)) // $FlowFixMe
        return cache.get(arg);
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
    };
};
var $a3eb5d382a9e88f9$export$2e2bcd8739ae039 = $a3eb5d382a9e88f9$var$weakMemoize;



var $fd5d1dddc019e17d$var$identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while(true){
        previous = character;
        character = (0, $c08e34e3fba9a402$export$4d3fb11e950abb9e)(); // &\f
        if (previous === 38 && character === 12) points[index] = 1;
        if ((0, $c08e34e3fba9a402$export$9e1725a4cfeada27)(character)) break;
        (0, $c08e34e3fba9a402$export$48cfd1e771a65c4f)();
    }
    return (0, $c08e34e3fba9a402$export$58adb3bec8346d0f)(begin, (0, $c08e34e3fba9a402$export$5880b8b5730aff45));
};
var $fd5d1dddc019e17d$var$toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do switch((0, $c08e34e3fba9a402$export$9e1725a4cfeada27)(character)){
        case 0:
            // &\f
            if (character === 38 && (0, $c08e34e3fba9a402$export$4d3fb11e950abb9e)() === 12) // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
            parsed[index] += $fd5d1dddc019e17d$var$identifierWithPointTracking((0, $c08e34e3fba9a402$export$5880b8b5730aff45) - 1, points, index);
            break;
        case 2:
            parsed[index] += (0, $c08e34e3fba9a402$export$410ac95b9ec204b8)(character);
            break;
        case 4:
            // comma
            if (character === 44) {
                // colon
                parsed[++index] = (0, $c08e34e3fba9a402$export$4d3fb11e950abb9e)() === 58 ? "&\f" : "";
                points[index] = parsed[index].length;
                break;
            }
        // fallthrough
        default:
            parsed[index] += (0, $c08e34e3fba9a402$export$6788812c4e6611e6)(character);
    }
    while (character = (0, $c08e34e3fba9a402$export$48cfd1e771a65c4f)());
    return parsed;
};
var $fd5d1dddc019e17d$var$getRules = function getRules(value, points) {
    return (0, $c08e34e3fba9a402$export$45918ac1574455b1)($fd5d1dddc019e17d$var$toRules((0, $c08e34e3fba9a402$export$2de70f21292aac9e)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11
var $fd5d1dddc019e17d$var$fixedElements = /* #__PURE__ */ new WeakMap();
var $fd5d1dddc019e17d$var$compat = function compat(element) {
    if (element.type !== "rule" || !element.parent || // negative .length indicates that this rule has been already prefixed
    element.length < 1) return;
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while(parent.type !== "rule"){
        parent = parent.parent;
        if (!parent) return;
    } // short-circuit for the simplest case
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !$fd5d1dddc019e17d$var$fixedElements.get(parent)) return;
     // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
    if (isImplicitRule) return;
    $fd5d1dddc019e17d$var$fixedElements.set(element, true);
    var points = [];
    var rules = $fd5d1dddc019e17d$var$getRules(value, points);
    var parentRules = parent.props;
    for(var i = 0, k = 0; i < rules.length; i++)for(var j = 0; j < parentRules.length; j++, k++)element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var $fd5d1dddc019e17d$var$removeLabel = function removeLabel(element) {
    if (element.type === "decl") {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
            // this ignores label
            element["return"] = "";
            element.value = "";
        }
    }
};
var $fd5d1dddc019e17d$var$ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var $fd5d1dddc019e17d$var$isIgnoringComment = function isIgnoringComment(element) {
    return element.type === "comm" && element.children.indexOf($fd5d1dddc019e17d$var$ignoreFlag) > -1;
};
var $fd5d1dddc019e17d$var$createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
    return function(element, index, children) {
        if (element.type !== "rule" || cache.compat) return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses) {
            var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
            //
            // considering this input:
            // .a {
            //   .b /* comm */ {}
            //   color: hotpink;
            // }
            // we get output corresponding to this:
            // .a {
            //   & {
            //     /* comm */
            //     color: hotpink;
            //   }
            //   .b {}
            // }
            var commentContainer = isNested ? children[0].children : children;
            for(var i = commentContainer.length - 1; i >= 0; i--){
                var node = commentContainer[i];
                if (node.line < element.line) break;
                 // it is quite weird but comments are *usually* put at `column: element.column - 1`
                // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
                // this will also match inputs like this:
                // .a {
                //   /* comm */
                //   .b {}
                // }
                //
                // but that is fine
                //
                // it would be the easiest to change the placement of the comment to be the first child of the rule:
                // .a {
                //   .b { /* comm */ }
                // }
                // with such inputs we wouldn't have to search for the comment at all
                // TODO: consider changing this comment placement in the next major version
                if (node.column < element.column) {
                    if ($fd5d1dddc019e17d$var$isIgnoringComment(node)) return;
                    break;
                }
            }
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
            });
        }
    };
};
var $fd5d1dddc019e17d$var$isImportRule = function isImportRule(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var $fd5d1dddc019e17d$var$isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
    for(var i = index - 1; i >= 0; i--){
        if (!$fd5d1dddc019e17d$var$isImportRule(children[i])) return true;
    }
    return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user
var $fd5d1dddc019e17d$var$nullifyElement = function nullifyElement(element) {
    element.type = "";
    element.value = "";
    element["return"] = "";
    element.children = "";
    element.props = "";
};
var $fd5d1dddc019e17d$var$incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
    if (!$fd5d1dddc019e17d$var$isImportRule(element)) return;
    if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        $fd5d1dddc019e17d$var$nullifyElement(element);
    } else if ($fd5d1dddc019e17d$var$isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        $fd5d1dddc019e17d$var$nullifyElement(element);
    }
};
/* eslint-disable no-fallthrough */ function $fd5d1dddc019e17d$var$prefix(value, length) {
    switch((0, $c08e34e3fba9a402$export$d6af199866bfb566)(value, length)){
        // color-adjust
        case 5103:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "print-" + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$2c0f367103c8d01c) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + value + value;
        // flex, flex-direction
        case 6828:
        case 4268:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + value + value;
        // order
        case 6165:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + "flex-" + value + value;
        // align-items
        case 5187:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /(\w+).+(:[^]+)/, (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "box-$1$2" + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + "flex-$1$2") + value;
        // align-self
        case 5443:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + "flex-item-" + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /flex-|-self/, "") + value;
        // align-content
        case 4675:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + "flex-line-pack" + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /align-content|flex-|-self/, "") + value;
        // flex-shrink
        case 5548:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, "shrink", "negative") + value;
        // flex-basis
        case 5292:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, "basis", "preferred-size") + value;
        // flex-grow
        case 6060:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "box-" + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, "-grow", "") + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, "grow", "positive") + value;
        // transition
        case 4554:
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /([^-])(transform)/g, "$1" + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "$2") + value;
        // cursor
        case 6187:
            return (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)((0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)((0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /(zoom-|grab)/, (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "$1"), /(image-set)/, (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "$1"), value, "") + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /(image-set\([^]*)/, (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "$1" + "$`$1");
        // justify-content
        case 4968:
            return (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)((0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /(.+:)(flex-)?(.*)/, (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "box-pack:$3" + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /(.+)-inline(.+)/, (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "$1$2") + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, $c08e34e3fba9a402$export$36776f635604f274)(value) - 1 - length > 6) switch((0, $c08e34e3fba9a402$export$a9db5e087081082d)(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, $c08e34e3fba9a402$export$a9db5e087081082d)(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /(.+:)(.+)-([^]+)/, "$1" + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "$2-$3" + "$1" + (0, $c08e34e3fba9a402$export$2c0f367103c8d01c) + ((0, $c08e34e3fba9a402$export$a9db5e087081082d)(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
                // (s)tretch
                case 115:
                    return ~(0, $c08e34e3fba9a402$export$f8e21b1e77979a08)(value, "stretch") ? $fd5d1dddc019e17d$var$prefix((0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, "stretch", "fill-available"), length) + value : value;
            }
            break;
        // position: sticky
        case 4949:
            // (s)ticky?
            if ((0, $c08e34e3fba9a402$export$a9db5e087081082d)(value, length + 1) !== 115) break;
        // display: (flex|inline-flex)
        case 6444:
            switch((0, $c08e34e3fba9a402$export$a9db5e087081082d)(value, (0, $c08e34e3fba9a402$export$36776f635604f274)(value) - 3 - (~(0, $c08e34e3fba9a402$export$f8e21b1e77979a08)(value, "!important") && 10))){
                // stic(k)y
                case 107:
                    return (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, ":", ":" + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93)) + value;
                // (inline-)?fl(e)x
                case 101:
                    return (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + ((0, $c08e34e3fba9a402$export$a9db5e087081082d)(value, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "$2$3" + "$1" + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + "$2box$3") + value;
            }
            break;
        // writing-mode
        case 5936:
            switch((0, $c08e34e3fba9a402$export$a9db5e087081082d)(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
                // vertical-r(l)
                case 108:
                    return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
                // horizontal(-)tb
                case 45:
                    return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
            }
            return (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + value + (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + value + value;
    }
    return value;
}
var $fd5d1dddc019e17d$var$prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element["return"]) switch(element.type){
            case 0, $c08e34e3fba9a402$export$527d108ccf083c2b:
                element["return"] = $fd5d1dddc019e17d$var$prefix(element.value, element.length);
                break;
            case 0, $c08e34e3fba9a402$export$b44a8529a35fcb60:
                return (0, $c08e34e3fba9a402$export$dfdc1655ccc5b9cb)([
                    (0, $c08e34e3fba9a402$export$784d13d8ee351f07)(element, {
                        value: (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(element.value, "@", "@" + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93))
                    })
                ], callback);
            case 0, $c08e34e3fba9a402$export$aa3a2e812ca8570d:
                if (element.length) return (0, $c08e34e3fba9a402$export$1be1fc439b849fdf)(element.props, function(value) {
                    switch((0, $c08e34e3fba9a402$export$4659b591c19bdf3d)(value, /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ":read-only":
                        case ":read-write":
                            return (0, $c08e34e3fba9a402$export$dfdc1655ccc5b9cb)([
                                (0, $c08e34e3fba9a402$export$784d13d8ee351f07)(element, {
                                    props: [
                                        (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /:(read-\w+)/, ":" + (0, $c08e34e3fba9a402$export$2c0f367103c8d01c) + "$1")
                                    ]
                                })
                            ], callback);
                        // :placeholder
                        case "::placeholder":
                            return (0, $c08e34e3fba9a402$export$dfdc1655ccc5b9cb)([
                                (0, $c08e34e3fba9a402$export$784d13d8ee351f07)(element, {
                                    props: [
                                        (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /:(plac\w+)/, ":" + (0, $c08e34e3fba9a402$export$39dfd62a25e0fe93) + "input-$1")
                                    ]
                                }),
                                (0, $c08e34e3fba9a402$export$784d13d8ee351f07)(element, {
                                    props: [
                                        (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /:(plac\w+)/, ":" + (0, $c08e34e3fba9a402$export$2c0f367103c8d01c) + "$1")
                                    ]
                                }),
                                (0, $c08e34e3fba9a402$export$784d13d8ee351f07)(element, {
                                    props: [
                                        (0, $c08e34e3fba9a402$export$77ad94ebf1c2b9ed)(value, /:(plac\w+)/, (0, $c08e34e3fba9a402$export$71ad59f2e432cfe8) + "input-$1")
                                    ]
                                })
                            ], callback);
                    }
                    return "";
                });
        }
    }
};
var $fd5d1dddc019e17d$var$defaultStylisPlugins = [
    $fd5d1dddc019e17d$var$prefixer
];
var $fd5d1dddc019e17d$var$createCache = function createCache(options) {
    var key = options.key;
    if (key === "css") {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
        // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
        // note this very very intentionally targets all style elements regardless of the key to ensure
        // that creating a cache works inside of render of a React component
        Array.prototype.forEach.call(ssrStyles, function(node) {
            // we want to only move elements which have a space in the data-emotion attribute value
            // because that indicates that it is an Emotion 11 server-side rendered style elements
            // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
            // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
            // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
            // will not result in the Emotion 10 styles being destroyed
            var dataEmotionAttribute = node.getAttribute("data-emotion");
            if (dataEmotionAttribute.indexOf(" ") === -1) return;
            document.head.appendChild(node);
            node.setAttribute("data-s", "");
        });
    }
    var stylisPlugins = options.stylisPlugins || $fd5d1dddc019e17d$var$defaultStylisPlugins;
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    container = options.container || document.head;
    Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
        var attrib = node.getAttribute("data-emotion").split(" "); // $FlowFixMe
        for(var i = 1; i < attrib.length; i++)inserted[attrib[i]] = true;
        nodesToHydrate.push(node);
    });
    var _insert;
    var omnipresentPlugins = [
        $fd5d1dddc019e17d$var$compat,
        $fd5d1dddc019e17d$var$removeLabel
    ];
    var currentSheet;
    var finalizingPlugins = [
        (0, $c08e34e3fba9a402$export$fac44ee5b035f737),
        (0, $c08e34e3fba9a402$export$38bcb760f1d4871c)(function(rule) {
            currentSheet.insert(rule);
        })
    ];
    var serializer = (0, $c08e34e3fba9a402$export$5a7767152ae0305f)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
        return (0, $c08e34e3fba9a402$export$dfdc1655ccc5b9cb)((0, $c08e34e3fba9a402$export$ef7acd7185315e22)(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        var rule;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) cache.inserted[serialized.name] = true;
    };
    var cache = {
        key: key,
        sheet: new (0, $a7cdf6acfa4d6206$export$9d753cd7ae895cce)({
            key: key,
            container: container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {},
        insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
};
var $fd5d1dddc019e17d$export$2e2bcd8739ae039 = $fd5d1dddc019e17d$var$createCache;



var $kr2Bq = parcelRequire("kr2Bq");



var $f0d07b59795143be$exports = {};
"use strict";
var $a811d920484e5ad1$exports = {};
"use strict";

$a811d920484e5ad1$exports = (parcelRequire("9B0zp"));


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var $f0d07b59795143be$var$REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var $f0d07b59795143be$var$KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var $f0d07b59795143be$var$FORWARD_REF_STATICS = {
    "$$typeof": true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var $f0d07b59795143be$var$MEMO_STATICS = {
    "$$typeof": true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var $f0d07b59795143be$var$TYPE_STATICS = {};
$f0d07b59795143be$var$TYPE_STATICS[$a811d920484e5ad1$exports.ForwardRef] = $f0d07b59795143be$var$FORWARD_REF_STATICS;
$f0d07b59795143be$var$TYPE_STATICS[$a811d920484e5ad1$exports.Memo] = $f0d07b59795143be$var$MEMO_STATICS;
function $f0d07b59795143be$var$getStatics(component) {
    // React v16.11 and below
    if ($a811d920484e5ad1$exports.isMemo(component)) return $f0d07b59795143be$var$MEMO_STATICS;
     // React v16.12 and above
    return $f0d07b59795143be$var$TYPE_STATICS[component["$$typeof"]] || $f0d07b59795143be$var$REACT_STATICS;
}
var $f0d07b59795143be$var$defineProperty = Object.defineProperty;
var $f0d07b59795143be$var$getOwnPropertyNames = Object.getOwnPropertyNames;
var $f0d07b59795143be$var$getOwnPropertySymbols = Object.getOwnPropertySymbols;
var $f0d07b59795143be$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $f0d07b59795143be$var$getPrototypeOf = Object.getPrototypeOf;
var $f0d07b59795143be$var$objectPrototype = Object.prototype;
function $f0d07b59795143be$var$hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== "string") {
        // don't hoist over string (html) components
        if ($f0d07b59795143be$var$objectPrototype) {
            var inheritedComponent = $f0d07b59795143be$var$getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== $f0d07b59795143be$var$objectPrototype) $f0d07b59795143be$var$hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
        var keys = $f0d07b59795143be$var$getOwnPropertyNames(sourceComponent);
        if ($f0d07b59795143be$var$getOwnPropertySymbols) keys = keys.concat($f0d07b59795143be$var$getOwnPropertySymbols(sourceComponent));
        var targetStatics = $f0d07b59795143be$var$getStatics(targetComponent);
        var sourceStatics = $f0d07b59795143be$var$getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!$f0d07b59795143be$var$KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = $f0d07b59795143be$var$getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    $f0d07b59795143be$var$defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
$f0d07b59795143be$exports = $f0d07b59795143be$var$hoistNonReactStatics;


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks
var $81d9dce638c3f241$var$hoistNonReactStatics = function(targetComponent, sourceComponent) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($f0d07b59795143be$exports)))(targetComponent, sourceComponent);
};
var $81d9dce638c3f241$export$2e2bcd8739ae039 = $81d9dce638c3f241$var$hoistNonReactStatics;


var $647041ac00fcdda4$var$isBrowser = true;
function $647041ac00fcdda4$export$95d99596f328fd52(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
        if (registered[className] !== undefined) registeredStyles.push(registered[className] + ";");
        else rawClassName += className + " ";
    });
    return rawClassName;
}
var $647041ac00fcdda4$export$580009a5da2a8b4b = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (// class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    $647041ac00fcdda4$var$isBrowser === false) && cache.registered[className] === undefined) cache.registered[className] = serialized.styles;
};
var $647041ac00fcdda4$export$6f077d94b33a01aa = function insertStyles(cache, serialized, isStringTag) {
    $647041ac00fcdda4$export$580009a5da2a8b4b(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;
        do {
            var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
            current = current.next;
        }while (current !== undefined);
    }
};


/* eslint-disable */ // Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function $609950cfe7e09d9a$var$murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash
    var k, i = 0, len = str.length;
    for(; len >= 4; ++i, len -= 4){
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^= /* k >>> r: */ k >>> 24;
        h = /* Math.imul(k, m): */ (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array
    switch(len){
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */ (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
}
var $609950cfe7e09d9a$export$2e2bcd8739ae039 = $609950cfe7e09d9a$var$murmur2;


var $e0a8aa6aa3a34dbe$var$unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
var $e0a8aa6aa3a34dbe$export$2e2bcd8739ae039 = $e0a8aa6aa3a34dbe$var$unitlessKeys;



var $0e0db6c3e4a42139$var$ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var $0e0db6c3e4a42139$var$UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var $0e0db6c3e4a42139$var$hyphenateRegex = /[A-Z]|^ms/g;
var $0e0db6c3e4a42139$var$animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var $0e0db6c3e4a42139$var$isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
};
var $0e0db6c3e4a42139$var$isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== "boolean";
};
var $0e0db6c3e4a42139$var$processStyleName = /* #__PURE__ */ (0, $8d6f8cf91780eb2e$export$2e2bcd8739ae039)(function(styleName) {
    return $0e0db6c3e4a42139$var$isCustomProperty(styleName) ? styleName : styleName.replace($0e0db6c3e4a42139$var$hyphenateRegex, "-$&").toLowerCase();
});
var $0e0db6c3e4a42139$var$processStyleValue = function processStyleValue(key, value) {
    switch(key){
        case "animation":
        case "animationName":
            if (typeof value === "string") return value.replace($0e0db6c3e4a42139$var$animationRegex, function(match, p1, p2) {
                $0e0db6c3e4a42139$var$cursor = {
                    name: p1,
                    styles: p2,
                    next: $0e0db6c3e4a42139$var$cursor
                };
                return p1;
            });
    }
    if ((0, $e0a8aa6aa3a34dbe$export$2e2bcd8739ae039)[key] !== 1 && !$0e0db6c3e4a42139$var$isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
    return value;
};
var $0e0db6c3e4a42139$var$contentValuePattern, $0e0db6c3e4a42139$var$contentValues, $0e0db6c3e4a42139$var$oldProcessStyleValue, $0e0db6c3e4a42139$var$msPattern, $0e0db6c3e4a42139$var$hyphenPattern, $0e0db6c3e4a42139$var$hyphenatedCache, $0e0db6c3e4a42139$var$key, $0e0db6c3e4a42139$var$value, $0e0db6c3e4a42139$var$processed, $0e0db6c3e4a42139$var$str, $0e0db6c3e4a42139$var$_char;
var $0e0db6c3e4a42139$var$noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function $0e0db6c3e4a42139$var$handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) return "";
    if (interpolation.__emotion_styles !== undefined) return interpolation;
    switch(typeof interpolation){
        case "boolean":
            return "";
        case "object":
            if (interpolation.anim === 1) {
                $0e0db6c3e4a42139$var$cursor = {
                    name: interpolation.name,
                    styles: interpolation.styles,
                    next: $0e0db6c3e4a42139$var$cursor
                };
                return interpolation.name;
            }
            if (interpolation.styles !== undefined) {
                var next = interpolation.next;
                if (next !== undefined) // not the most efficient thing ever but this is a pretty rare case
                // and there will be very few iterations of this generally
                while(next !== undefined){
                    $0e0db6c3e4a42139$var$cursor = {
                        name: next.name,
                        styles: next.styles,
                        next: $0e0db6c3e4a42139$var$cursor
                    };
                    next = next.next;
                }
                var styles = interpolation.styles + ";";
                return styles;
            }
            return $0e0db6c3e4a42139$var$createStringFromObject(mergedProps, registered, interpolation);
        case "function":
            if (mergedProps !== undefined) {
                var previousCursor = $0e0db6c3e4a42139$var$cursor;
                var result = interpolation(mergedProps);
                $0e0db6c3e4a42139$var$cursor = previousCursor;
                return $0e0db6c3e4a42139$var$handleInterpolation(mergedProps, registered, result);
            }
            break;
        case "string":
            var matched, replaced, match, p1, p2, fakeVarName;
            break;
    } // finalize string values (regular strings and functions interpolated into css calls)
    if (registered == null) return interpolation;
    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
}
function $0e0db6c3e4a42139$var$createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) for(var i = 0; i < obj.length; i++)string += $0e0db6c3e4a42139$var$handleInterpolation(mergedProps, registered, obj[i]) + ";";
    else for(var _key in obj){
        var value = obj[_key];
        if (typeof value !== "object") {
            if (registered != null && registered[value] !== undefined) string += _key + "{" + registered[value] + "}";
            else if ($0e0db6c3e4a42139$var$isProcessableValue(value)) string += $0e0db6c3e4a42139$var$processStyleName(_key) + ":" + $0e0db6c3e4a42139$var$processStyleValue(_key, value) + ";";
        } else if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === undefined)) {
            for(var _i = 0; _i < value.length; _i++)if ($0e0db6c3e4a42139$var$isProcessableValue(value[_i])) string += $0e0db6c3e4a42139$var$processStyleName(_key) + ":" + $0e0db6c3e4a42139$var$processStyleValue(_key, value[_i]) + ";";
        } else {
            var interpolated = $0e0db6c3e4a42139$var$handleInterpolation(mergedProps, registered, value);
            switch(_key){
                case "animation":
                case "animationName":
                    string += $0e0db6c3e4a42139$var$processStyleName(_key) + ":" + interpolated + ";";
                    break;
                default:
                    string += _key + "{" + interpolated + "}";
            }
        }
    }
    return string;
}
var $0e0db6c3e4a42139$var$labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var $0e0db6c3e4a42139$var$sourceMapPattern;
// keyframes are stored on the SerializedStyles object as a linked list
var $0e0db6c3e4a42139$var$cursor;
var $0e0db6c3e4a42139$export$6321afa313b251b5 = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== undefined) return args[0];
    var stringMode = true;
    var styles = "";
    $0e0db6c3e4a42139$var$cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += $0e0db6c3e4a42139$var$handleInterpolation(mergedProps, registered, strings);
    } else styles += strings[0];
     // we start at 1 since we've already handled the first arg
    for(var i = 1; i < args.length; i++){
        styles += $0e0db6c3e4a42139$var$handleInterpolation(mergedProps, registered, args[i]);
        if (stringMode) styles += strings[i];
    }
    var sourceMap;
    var match;
    $0e0db6c3e4a42139$var$labelPattern.lastIndex = 0;
    var identifierName = "";
    var match1; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5
    while((match1 = $0e0db6c3e4a42139$var$labelPattern.exec(styles)) !== null)identifierName += "-" + match1[1];
    var name = (0, $609950cfe7e09d9a$export$2e2bcd8739ae039)(styles) + identifierName;
    return {
        name: name,
        styles: styles,
        next: $0e0db6c3e4a42139$var$cursor
    };
};



var $kr2Bq = parcelRequire("kr2Bq");

var $kr2Bq = parcelRequire("kr2Bq");
var $c2b88d70e2a2b399$var$syncFallback = function syncFallback(create) {
    return create();
};
var $c2b88d70e2a2b399$var$useInsertionEffect = $kr2Bq.useInsertionEffect ? $kr2Bq.useInsertionEffect : false;
var $c2b88d70e2a2b399$export$db21c7ffa21794e7 = $c2b88d70e2a2b399$var$useInsertionEffect || $c2b88d70e2a2b399$var$syncFallback;
var $c2b88d70e2a2b399$export$811a713a7276cb9d = $c2b88d70e2a2b399$var$useInsertionEffect || (0, $kr2Bq.useLayoutEffect);


var $22c448f1484d9df6$export$dda1d9f60106f0e9 = {}.hasOwnProperty;
var $22c448f1484d9df6$var$EmotionCacheContext = /* #__PURE__ */ (0, $kr2Bq.createContext)(// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== "undefined" ? /* #__PURE__ */ (0, $fd5d1dddc019e17d$export$2e2bcd8739ae039)({
    key: "css"
}) : null);
var $22c448f1484d9df6$export$e7094788287c5e9b = $22c448f1484d9df6$var$EmotionCacheContext.Provider;
var $22c448f1484d9df6$export$71511d61b312f219 = function useEmotionCache() {
    return (0, $kr2Bq.useContext)($22c448f1484d9df6$var$EmotionCacheContext);
};
var $22c448f1484d9df6$export$efccba1c4a2ef57b = function withEmotionCache(func) {
    // $FlowFixMe
    return /*#__PURE__*/ (0, $kr2Bq.forwardRef)(function(props, ref) {
        // the cache will never be null in the browser
        var cache = (0, $kr2Bq.useContext)($22c448f1484d9df6$var$EmotionCacheContext);
        return func(props, cache, ref);
    });
};
var $22c448f1484d9df6$export$971d5caa766a69d7 = /* #__PURE__ */ (0, $kr2Bq.createContext)({});
var $22c448f1484d9df6$export$3b14a55fb2447963 = function useTheme() {
    return (0, $kr2Bq.useContext)($22c448f1484d9df6$export$971d5caa766a69d7);
};
var $22c448f1484d9df6$var$getTheme = function getTheme(outerTheme, theme) {
    if (typeof theme === "function") {
        var mergedTheme = theme(outerTheme);
        return mergedTheme;
    }
    return (0, $ade4a261564f8dbe$export$2e2bcd8739ae039)({}, outerTheme, theme);
};
var $22c448f1484d9df6$var$createCacheWithTheme = /* #__PURE__ */ (0, $a3eb5d382a9e88f9$export$2e2bcd8739ae039)(function(outerTheme) {
    return (0, $a3eb5d382a9e88f9$export$2e2bcd8739ae039)(function(theme) {
        return $22c448f1484d9df6$var$getTheme(outerTheme, theme);
    });
});
var $22c448f1484d9df6$export$407448d2b89b1813 = function ThemeProvider(props) {
    var theme = (0, $kr2Bq.useContext)($22c448f1484d9df6$export$971d5caa766a69d7);
    if (props.theme !== theme) theme = $22c448f1484d9df6$var$createCacheWithTheme(theme)(props.theme);
    return /*#__PURE__*/ (0, $kr2Bq.createElement)($22c448f1484d9df6$export$971d5caa766a69d7.Provider, {
        value: theme
    }, props.children);
};
function $22c448f1484d9df6$export$8b22cf2602fb60ce(Component) {
    var componentName = Component.displayName || Component.name || "Component";
    var render = function render(props, ref) {
        var theme = (0, $kr2Bq.useContext)($22c448f1484d9df6$export$971d5caa766a69d7);
        return /*#__PURE__*/ (0, $kr2Bq.createElement)(Component, (0, $ade4a261564f8dbe$export$2e2bcd8739ae039)({
            theme: theme,
            ref: ref
        }, props));
    }; // $FlowFixMe
    var WithTheme = /*#__PURE__*/ (0, $kr2Bq.forwardRef)(render);
    WithTheme.displayName = "WithTheme(" + componentName + ")";
    return (0, $81d9dce638c3f241$export$2e2bcd8739ae039)(WithTheme, Component);
}
var $22c448f1484d9df6$var$getLastPart = function getLastPart(functionName) {
    // The match may be something like 'Object.createEmotionProps' or
    // 'Loader.prototype.render'
    var parts = functionName.split(".");
    return parts[parts.length - 1];
};
var $22c448f1484d9df6$var$getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
    // V8
    var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
    if (match) return $22c448f1484d9df6$var$getLastPart(match[1]); // Safari / Firefox
    match = /^([A-Za-z0-9$.]+)@/.exec(line);
    if (match) return $22c448f1484d9df6$var$getLastPart(match[1]);
    return undefined;
};
var $22c448f1484d9df6$var$internalReactFunctionNames = /* #__PURE__ */ new Set([
    "renderWithHooks",
    "processChild",
    "finishClassComponent",
    "renderToString"
]); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.
var $22c448f1484d9df6$var$sanitizeIdentifier = function sanitizeIdentifier(identifier) {
    return identifier.replace(/\$/g, "-");
};
var $22c448f1484d9df6$var$getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
    if (!stackTrace) return undefined;
    var lines = stackTrace.split("\n");
    for(var i = 0; i < lines.length; i++){
        var functionName = $22c448f1484d9df6$var$getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"
        if (!functionName) continue; // If we reach one of these, we have gone too far and should quit
        if ($22c448f1484d9df6$var$internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
        // uppercase letter
        if (/^[A-Z]/.test(functionName)) return $22c448f1484d9df6$var$sanitizeIdentifier(functionName);
    }
    return undefined;
};
var $22c448f1484d9df6$var$typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var $22c448f1484d9df6$var$labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var $22c448f1484d9df6$export$db3b6bfb95261072 = function createEmotionProps(type, props) {
    var newProps = {};
    for(var key in props)if ($22c448f1484d9df6$export$dda1d9f60106f0e9.call(props, key)) newProps[key] = props[key];
    newProps[$22c448f1484d9df6$var$typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
    var label;
    return newProps;
};
var $22c448f1484d9df6$var$Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, $647041ac00fcdda4$export$580009a5da2a8b4b)(cache, serialized, isStringTag);
    var rules = (0, $c2b88d70e2a2b399$export$db21c7ffa21794e7)(function() {
        return (0, $647041ac00fcdda4$export$6f077d94b33a01aa)(cache, serialized, isStringTag);
    });
    return null;
};
var $22c448f1484d9df6$export$a9c23c6ac3fc3eca = /* #__PURE__ */ $22c448f1484d9df6$export$efccba1c4a2ef57b(function(props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible
    if (typeof cssProp === "string" && cache.registered[cssProp] !== undefined) cssProp = cache.registered[cssProp];
    var WrappedComponent = props[$22c448f1484d9df6$var$typePropName];
    var registeredStyles = [
        cssProp
    ];
    var className = "";
    if (typeof props.className === "string") className = (0, $647041ac00fcdda4$export$95d99596f328fd52)(cache.registered, registeredStyles, props.className);
    else if (props.className != null) className = props.className + " ";
    var serialized = (0, $0e0db6c3e4a42139$export$6321afa313b251b5)(registeredStyles, undefined, (0, $kr2Bq.useContext)($22c448f1484d9df6$export$971d5caa766a69d7));
    var labelFromStack;
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for(var key in props)if ($22c448f1484d9df6$export$dda1d9f60106f0e9.call(props, key) && key !== "css" && key !== $22c448f1484d9df6$var$typePropName && true) newProps[key] = props[key];
    newProps.ref = ref;
    newProps.className = className;
    return /*#__PURE__*/ (0, $kr2Bq.createElement)((0, $kr2Bq.Fragment), null, /*#__PURE__*/ (0, $kr2Bq.createElement)($22c448f1484d9df6$var$Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof WrappedComponent === "string"
    }), /*#__PURE__*/ (0, $kr2Bq.createElement)(WrappedComponent, newProps));
});


var $f7d13244c552cfa0$exports = {};
function $f7d13244c552cfa0$var$_extends() {
    $f7d13244c552cfa0$exports = $f7d13244c552cfa0$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    }, $f7d13244c552cfa0$exports.__esModule = true, $f7d13244c552cfa0$exports["default"] = $f7d13244c552cfa0$exports;
    return $f7d13244c552cfa0$var$_extends.apply(this, arguments);
}
$f7d13244c552cfa0$exports = $f7d13244c552cfa0$var$_extends, $f7d13244c552cfa0$exports.__esModule = true, $f7d13244c552cfa0$exports["default"] = $f7d13244c552cfa0$exports;









var $696120a5f1d1b0e3$var$pkg = {
    name: "@emotion/react",
    version: "11.10.5",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: {
        "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
    },
    exports: {
        ".": {
            module: {
                worker: "./dist/emotion-react.worker.esm.js",
                browser: "./dist/emotion-react.browser.esm.js",
                "default": "./dist/emotion-react.esm.js"
            },
            "default": "./dist/emotion-react.cjs.js"
        },
        "./jsx-runtime": {
            module: {
                worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
                browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
                "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
            },
            "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
        },
        "./_isolated-hnrs": {
            module: {
                worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
                browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
                "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
            },
            "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
        },
        "./jsx-dev-runtime": {
            module: {
                worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
                browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
                "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
            },
            "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
        },
        "./package.json": "./package.json",
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
    },
    types: "types/index.d.ts",
    files: [
        "src",
        "dist",
        "jsx-runtime",
        "jsx-dev-runtime",
        "_isolated-hnrs",
        "types/*.d.ts",
        "macro.js",
        "macro.d.ts",
        "macro.js.flow"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
        "test:typescript": "dtslint types"
    },
    dependencies: {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.10.5",
        "@emotion/cache": "^11.10.5",
        "@emotion/serialize": "^1.1.1",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
        "@emotion/utils": "^1.2.0",
        "@emotion/weak-memoize": "^0.3.0",
        "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
        "@babel/core": "^7.0.0",
        react: ">=16.8.0"
    },
    peerDependenciesMeta: {
        "@babel/core": {
            optional: true
        },
        "@types/react": {
            optional: true
        }
    },
    devDependencies: {
        "@babel/core": "^7.18.5",
        "@definitelytyped/dtslint": "0.0.112",
        "@emotion/css": "11.10.5",
        "@emotion/css-prettifier": "1.1.1",
        "@emotion/server": "11.10.0",
        "@emotion/styled": "11.10.5",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^4.5.5"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
        access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
        entrypoints: [
            "./index.js",
            "./jsx-runtime.js",
            "./jsx-dev-runtime.js",
            "./_isolated-hnrs.js"
        ],
        umdName: "emotionReact",
        exports: {
            envConditions: [
                "browser",
                "worker"
            ],
            extra: {
                "./types/css-prop": "./types/css-prop.d.ts",
                "./macro": "./macro.js"
            }
        }
    }
};
var $696120a5f1d1b0e3$export$c8a8987d4410bf2d = function jsx(type, props) {
    var args = arguments;
    if (props == null || !(0, $22c448f1484d9df6$export$dda1d9f60106f0e9).call(props, "css")) // $FlowFixMe
    return (0, $kr2Bq.createElement).apply(undefined, args);
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = (0, $22c448f1484d9df6$export$a9c23c6ac3fc3eca);
    createElementArgArray[1] = (0, $22c448f1484d9df6$export$db3b6bfb95261072)(type, props);
    for(var i = 2; i < argsLength; i++)createElementArgArray[i] = args[i];
     // $FlowFixMe
    return (0, $kr2Bq.createElement).apply(null, createElementArgArray);
};
var $696120a5f1d1b0e3$var$warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var $696120a5f1d1b0e3$export$98f03c5d19621d70 = /* #__PURE__ */ (0, $22c448f1484d9df6$export$efccba1c4a2ef57b)(function(props, cache) {
    var styles = props.styles;
    var serialized = (0, $0e0db6c3e4a42139$export$6321afa313b251b5)([
        styles
    ], undefined, (0, $kr2Bq.useContext)((0, $22c448f1484d9df6$export$971d5caa766a69d7)));
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything
    var sheetRef = (0, $kr2Bq.useRef)();
    (0, $c2b88d70e2a2b399$export$811a713a7276cb9d)(function() {
        var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675
        var sheet = new cache.sheet.constructor({
            key: key,
            nonce: cache.sheet.nonce,
            container: cache.sheet.container,
            speedy: cache.sheet.isSpeedy
        });
        var rehydrating = false; // $FlowFixMe
        var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
        if (cache.sheet.tags.length) sheet.before = cache.sheet.tags[0];
        if (node !== null) {
            rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s
            node.setAttribute("data-emotion", key);
            sheet.hydrate([
                node
            ]);
        }
        sheetRef.current = [
            sheet,
            rehydrating
        ];
        return function() {
            sheet.flush();
        };
    }, [
        cache
    ]);
    (0, $c2b88d70e2a2b399$export$811a713a7276cb9d)(function() {
        var sheetRefCurrent = sheetRef.current;
        var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
        if (rehydrating) {
            sheetRefCurrent[1] = false;
            return;
        }
        if (serialized.next !== undefined) // insert keyframes
        (0, $647041ac00fcdda4$export$6f077d94b33a01aa)(cache, serialized.next, true);
        if (sheet.tags.length) {
            // if this doesn't exist then it will be null so the style element will be appended
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            sheet.before = element;
            sheet.flush();
        }
        cache.insert("", serialized, sheet, false);
    }, [
        cache,
        serialized.name
    ]);
    return null;
});
function $696120a5f1d1b0e3$export$dbf350e5966cf602() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return (0, $0e0db6c3e4a42139$export$6321afa313b251b5)(args);
}
var $696120a5f1d1b0e3$export$d25ddfdf17c3ad3e = function keyframes() {
    var insertable = $696120a5f1d1b0e3$export$dbf350e5966cf602.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe
    return {
        name: name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
    };
};
var $696120a5f1d1b0e3$var$classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = "";
    for(; i < len; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case "boolean":
                break;
            case "object":
                if (Array.isArray(arg)) toAdd = classnames(arg);
                else {
                    toAdd = "";
                    for(var k in arg)if (arg[k] && k) {
                        toAdd && (toAdd += " ");
                        toAdd += k;
                    }
                }
                break;
            default:
                toAdd = arg;
        }
        if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
        }
    }
    return cls;
};
function $696120a5f1d1b0e3$var$merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = (0, $647041ac00fcdda4$export$95d99596f328fd52)(registered, registeredStyles, className);
    if (registeredStyles.length < 2) return className;
    return rawClassName + css(registeredStyles);
}
var $696120a5f1d1b0e3$var$Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    var rules = (0, $c2b88d70e2a2b399$export$db21c7ffa21794e7)(function() {
        for(var i = 0; i < serializedArr.length; i++)var res = (0, $647041ac00fcdda4$export$6f077d94b33a01aa)(cache, serializedArr[i], false);
    });
    return null;
};
var $696120a5f1d1b0e3$export$9b9c0f9d9f3552b8 = /* #__PURE__ */ (0, $22c448f1484d9df6$export$efccba1c4a2ef57b)(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css = function css() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var serialized = (0, $0e0db6c3e4a42139$export$6321afa313b251b5)(args, cache.registered);
        serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`
        (0, $647041ac00fcdda4$export$580009a5da2a8b4b)(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var cx = function cx() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        return $696120a5f1d1b0e3$var$merge(cache.registered, css, $696120a5f1d1b0e3$var$classnames(args));
    };
    var content = {
        css: css,
        cx: cx,
        theme: (0, $kr2Bq.useContext)((0, $22c448f1484d9df6$export$971d5caa766a69d7))
    };
    var ele = props.children(content);
    hasRendered = true;
    return /*#__PURE__*/ (0, $kr2Bq.createElement)((0, $kr2Bq.Fragment), null, /*#__PURE__*/ (0, $kr2Bq.createElement)($696120a5f1d1b0e3$var$Insertion, {
        cache: cache,
        serializedArr: serializedArr
    }), ele);
});
var $696120a5f1d1b0e3$var$isBrowser, $696120a5f1d1b0e3$var$isTestEnv, $696120a5f1d1b0e3$var$globalContext, $696120a5f1d1b0e3$var$globalKey;





var $493bc646c1e69814$var$testOmitPropsOnStringTag = (0, $564dfaa4f95f4708$export$2e2bcd8739ae039);
var $493bc646c1e69814$var$testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== "theme";
};
var $493bc646c1e69814$var$getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === "string" && // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? $493bc646c1e69814$var$testOmitPropsOnStringTag : $493bc646c1e69814$var$testOmitPropsOnComponent;
};
var $493bc646c1e69814$var$composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== "function" && isReal) shouldForwardProp = tag.__emotion_forwardProp;
    return shouldForwardProp;
};
var $493bc646c1e69814$var$ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var $493bc646c1e69814$var$Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, $647041ac00fcdda4$export$580009a5da2a8b4b)(cache, serialized, isStringTag);
    var rules = (0, $c2b88d70e2a2b399$export$db21c7ffa21794e7)(function() {
        return (0, $647041ac00fcdda4$export$6f077d94b33a01aa)(cache, serialized, isStringTag);
    });
    return null;
};
var $493bc646c1e69814$var$createStyled = function createStyled(tag, options) {
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== undefined) {
        identifierName = options.label;
        targetClassName = options.target;
    }
    var shouldForwardProp = $493bc646c1e69814$var$composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || $493bc646c1e69814$var$getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp("as");
    return function() {
        var args = arguments;
        var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== undefined) styles.push("label:" + identifierName + ";");
        if (args[0] == null || args[0].raw === undefined) styles.push.apply(styles, args);
        else {
            styles.push(args[0][0]);
            var len = args.length;
            var i = 1;
            for(; i < len; i++)styles.push(args[i], args[0][i]);
        } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class
        var Styled = (0, $22c448f1484d9df6$export$efccba1c4a2ef57b)(function(props, cache, ref) {
            var FinalTag = shouldUseAs && props.as || baseTag;
            var className = "";
            var classInterpolations = [];
            var mergedProps = props;
            if (props.theme == null) {
                mergedProps = {};
                for(var key in props)mergedProps[key] = props[key];
                mergedProps.theme = (0, $kr2Bq.useContext)((0, $22c448f1484d9df6$export$971d5caa766a69d7));
            }
            if (typeof props.className === "string") className = (0, $647041ac00fcdda4$export$95d99596f328fd52)(cache.registered, classInterpolations, props.className);
            else if (props.className != null) className = props.className + " ";
            var serialized = (0, $0e0db6c3e4a42139$export$6321afa313b251b5)(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name;
            if (targetClassName !== undefined) className += " " + targetClassName;
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? $493bc646c1e69814$var$getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
            var newProps = {};
            for(var _key in props){
                if (shouldUseAs && _key === "as") continue;
                if (finalShouldForwardProp(_key)) newProps[_key] = props[_key];
            }
            newProps.className = className;
            newProps.ref = ref;
            return /*#__PURE__*/ (0, $kr2Bq.createElement)((0, $kr2Bq.Fragment), null, /*#__PURE__*/ (0, $kr2Bq.createElement)($493bc646c1e69814$var$Insertion, {
                cache: cache,
                serialized: serialized,
                isStringTag: typeof FinalTag === "string"
            }), /*#__PURE__*/ (0, $kr2Bq.createElement)(FinalTag, newProps));
        });
        Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles;
        Styled.__emotion_forwardProp = shouldForwardProp;
        Object.defineProperty(Styled, "toString", {
            value: function value() {
                return "." + targetClassName;
            }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
            return createStyled(nextTag, (0, $ade4a261564f8dbe$export$2e2bcd8739ae039)({}, options, nextOptions, {
                shouldForwardProp: $493bc646c1e69814$var$composeShouldForwardProps(Styled, nextOptions, true)
            })).apply(void 0, styles);
        };
        return Styled;
    };
};
var $493bc646c1e69814$export$2e2bcd8739ae039 = $493bc646c1e69814$var$createStyled;



var $kr2Bq = parcelRequire("kr2Bq");
const $1e8d7124b9661f65$export$1fefafa9d19cfa77 = 40;
const $1e8d7124b9661f65$export$852bdfb103a2bad0 = 320;
const $1e8d7124b9661f65$export$57528c6c0bd59f75 = 1.5;
const $1e8d7124b9661f65$export$306e165047789a05 = 1.4;
const $1e8d7124b9661f65$export$2c9a6d1027132519 = 100;
const $1e8d7124b9661f65$export$aeb116877fd5ad06 = 10;


function $ce0cd843a338c561$export$a1eafce842b7029b(params) {
    const { angle: angle , min: min , max: max  } = params;
    if (angle < (0, $1e8d7124b9661f65$export$1fefafa9d19cfa77)) return min;
    else if (angle > (0, $1e8d7124b9661f65$export$852bdfb103a2bad0)) return max;
    else {
        const ratio = (angle - (0, $1e8d7124b9661f65$export$1fefafa9d19cfa77)) / ((0, $1e8d7124b9661f65$export$852bdfb103a2bad0) - (0, $1e8d7124b9661f65$export$1fefafa9d19cfa77));
        const value = ratio * (max - min) + min;
        return value;
    }
}
function $ce0cd843a338c561$export$7f7142e45456c312(params) {
    const { value: value , min: min , max: max  } = params;
    const ratio = (value - min) / (max - min);
    const angle = ratio * ((0, $1e8d7124b9661f65$export$852bdfb103a2bad0) - (0, $1e8d7124b9661f65$export$1fefafa9d19cfa77)) + (0, $1e8d7124b9661f65$export$1fefafa9d19cfa77);
    return angle;
}
function $ce0cd843a338c561$export$2d72ec1166563834(degree, radius, svgSize) {
    // js functions need radians, counterclockwise from positive x axis
    const angle = (90 + degree) % 360;
    const angleInRad = angle / 180 * Math.PI;
    let dX;
    let dY;
    if (angleInRad <= Math.PI) {
        // we are in the upper two quadrants
        if (angleInRad <= Math.PI / 2) {
            dY = Math.sin(angleInRad) * radius;
            dX = Math.cos(angleInRad) * radius;
        } else {
            dY = Math.sin(Math.PI - angleInRad) * radius;
            dX = Math.cos(Math.PI - angleInRad) * radius * -1;
        }
    } else // we are in the lower two quadrants
    if (angleInRad <= Math.PI * 1.5) {
        dY = Math.sin(angleInRad - Math.PI) * radius * -1;
        dX = Math.cos(angleInRad - Math.PI) * radius * -1;
    } else {
        dY = Math.sin(2 * Math.PI - angleInRad) * radius * -1;
        dX = Math.cos(2 * Math.PI - angleInRad) * radius;
    }
    // dX and dY are calculated based on having (0, 0) at the center
    // Now, translate dX and dY to svg coordinates, where (0, 0) is at the top left
    const x = dX + svgSize / 2;
    const y = svgSize / 2 - dY;
    return {
        x: x,
        y: y
    };
}
function $ce0cd843a338c561$export$87e67ba629853261(position, svgSize) {
    const dX = position.x - svgSize / 2;
    // position.y increases downwards in svg
    const dY = svgSize / 2 - position.y;
    // radians, counterclockwise from positive x axis
    let theta = Math.atan2(dY, dX);
    if (theta < 0) theta = theta + 2 * Math.PI;
    // degrees, counterclockwise from positive x axis
    const degree = theta / Math.PI * 180;
    return (270 + degree) % 360;
}
// istanbul ignore next
const $ce0cd843a338c561$var$isObject = (obj)=>{
    if (typeof obj === "object" && obj !== null) {
        if (typeof Object.getPrototypeOf === "function") {
            const prototype = Object.getPrototypeOf(obj);
            return prototype === Object.prototype || prototype === null;
        }
        return Object.prototype.toString.call(obj) === "[object Object]";
    }
    return false;
};
const $ce0cd843a338c561$export$4950aa0f605343fb = (...objects)=>objects.reduce((result, current)=>{
        if (Array.isArray(current)) throw new TypeError("Arguments provided to must be objects, not arrays.");
        Object.keys(current).forEach((key)=>{
            if ([
                "__proto__",
                "constructor",
                "prototype"
            ].includes(key)) return;
            if (Array.isArray(result[key]) && Array.isArray(current[key])) result[key] = current[key];
            else if ($ce0cd843a338c561$var$isObject(result[key]) && $ce0cd843a338c561$var$isObject(current[key])) result[key] = $ce0cd843a338c561$export$4950aa0f605343fb(result[key], current[key]);
            else result[key] = current[key];
        });
        return result;
    }, {});




function $b84b2800414cd49c$export$bf8a3f9983094125({ innerRadius: innerRadius , thickness: thickness , svgSize: svgSize  }) {
    const largeArc = (0, $1e8d7124b9661f65$export$852bdfb103a2bad0) - (0, $1e8d7124b9661f65$export$1fefafa9d19cfa77) >= 180;
    const outerRadius = innerRadius + thickness;
    const innerArcStart = (0, $ce0cd843a338c561$export$2d72ec1166563834)((0, $1e8d7124b9661f65$export$1fefafa9d19cfa77), innerRadius, svgSize);
    const startPoint = `
    M ${innerArcStart.x},${innerArcStart.y}
  `;
    const innerArcEnd = (0, $ce0cd843a338c561$export$2d72ec1166563834)((0, $1e8d7124b9661f65$export$852bdfb103a2bad0), innerRadius, svgSize);
    const innerArc = `
    A ${innerRadius} ${innerRadius} 0
      ${largeArc ? "1" : "0"}
      0
      ${innerArcEnd.x} ${innerArcEnd.y}
  `;
    const outerArcStart = (0, $ce0cd843a338c561$export$2d72ec1166563834)((0, $1e8d7124b9661f65$export$852bdfb103a2bad0), outerRadius, svgSize);
    const firstButt = `
    A ${thickness / 2} ${thickness / 2} 0
      ${largeArc ? "1" : "0"}
      1
      ${outerArcStart.x} ${outerArcStart.y}
  `;
    const outerArcEnd = (0, $ce0cd843a338c561$export$2d72ec1166563834)((0, $1e8d7124b9661f65$export$1fefafa9d19cfa77), outerRadius, svgSize);
    const outerArc = `
    A ${outerRadius} ${outerRadius} 0
      ${largeArc ? "1" : "0"}
      1
      ${outerArcEnd.x} ${outerArcEnd.y}
  `;
    const secondButt = `
    A ${thickness / 2} ${thickness / 2} 0
      ${largeArc ? "1" : "0"}
      1
      ${innerArcStart.x} ${innerArcStart.y}
  `;
    return startPoint + innerArc + firstButt + outerArc + secondButt + " Z";
}



parcelRequire("kr2Bq");

const $b832632b644fb8cc$var$TICK_DEFAULTS_MAIN = {
    thickness: 3,
    length: 7,
    color: "black",
    cap: "round"
};
const $b832632b644fb8cc$var$TICK_DEFAULTS_SUB = {
    thickness: 1,
    length: 4,
    color: "black",
    cap: "round"
};
const $b832632b644fb8cc$var$TICK_DEFAULTS = {
    count: 48,
    every: 4,
    main: $b832632b644fb8cc$var$TICK_DEFAULTS_MAIN,
    sub: $b832632b644fb8cc$var$TICK_DEFAULTS_SUB
};
function $b832632b644fb8cc$export$38a233b5ad2f3b00({ size: size , mask: mask = null , ticks: ticks = $b832632b644fb8cc$var$TICK_DEFAULTS  }) {
    const radius = size / 2;
    const { count: count , every: every , sub: sub , main: main  } = (0, $ce0cd843a338c561$export$4950aa0f605343fb)($b832632b644fb8cc$var$TICK_DEFAULTS, ticks);
    return /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("g", {
        mask: mask ? `url(#${mask})` : undefined,
        children: Array(count).fill(undefined).map((u, i)=>{
            const cos = Math.cos(2 * Math.PI / count * i);
            const sin = Math.sin(2 * Math.PI / count * i);
            const isMain = i % every === 0;
            const { color: color , length: length , thickness: thickness , cap: cap  } = isMain ? main : sub;
            return /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("line", {
                stroke: color,
                strokeWidth: thickness,
                strokeLinecap: cap,
                x1: cos * radius + radius,
                y1: sin * radius + radius,
                x2: cos * (radius - length) + radius,
                y2: sin * (radius - length) + radius
            }, i);
        })
    });
}



parcelRequire("kr2Bq");

function $4240a031e85d1d42$export$a72d32054f236c4({ min: min , max: max , value: value , size: size , thickness: thickness = 20 , className: className , suffix: suffix  }) {
    const height = size * (0, $1e8d7124b9661f65$export$57528c6c0bd59f75);
    const center = size / 2;
    // calculate the size of the main bottom circle based on the input size
    const circleSize = (size - thickness * 4.5) / 2;
    const radius = circleSize / 2;
    // input value percentage between min and max
    const percent = (value - min) * 100 / (max - min);
    // / 100 * percent
    const fullBarHeight = height - circleSize - radius;
    // the minimum value the growing center should go to
    const growingMinY = fullBarHeight - radius;
    // the max height the growing center should go to
    const growingMaxY = radius;
    // animating height based on value of slider
    const scaling = (growingMaxY - growingMinY) * percent / 100 + growingMinY;
    const innerCircleRadius = circleSize - thickness * 2;
    return /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("svg", {
        className: className,
        width: size,
        height: height,
        children: [
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("mask", {
                id: "innerMask",
                children: [
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                        id: "mask-fill",
                        x: "0",
                        y: "0",
                        width: size,
                        height: height,
                        fill: "white"
                    }),
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("circle", {
                        id: "center-circle-mask",
                        cx: center,
                        cy: height - circleSize,
                        r: circleSize - thickness
                    }),
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("circle", {
                        id: "top-cap-mask",
                        cx: center,
                        cy: circleSize - thickness - (circleSize - thickness * 2) / 2,
                        r: (circleSize - thickness * 2) / 2
                    }),
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                        id: "inside-thermo-mask",
                        x: center - radius + thickness,
                        y: radius,
                        width: circleSize - thickness * 2,
                        height: height - circleSize - radius
                    })
                ]
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("circle", {
                id: "main-circle",
                fill: "currentColor",
                cx: center,
                cy: height - circleSize,
                r: circleSize,
                mask: "url(#innerMask)"
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("circle", {
                id: "top-cap",
                fill: "currentColor",
                cx: center,
                cy: radius,
                r: radius,
                mask: "url(#innerMask)"
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("circle", {
                id: "center-circle",
                fill: "currentColor",
                cx: center,
                cy: height - circleSize,
                r: innerCircleRadius
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                id: "thermo-sides",
                fill: "currentColor",
                x: center - radius,
                y: radius,
                width: circleSize,
                height: height - circleSize - radius,
                mask: "url(#innerMask)"
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("text", {
                style: {
                    userSelect: "none"
                },
                fontSize: innerCircleRadius,
                textAnchor: "middle",
                x: center,
                y: height - circleSize,
                dominantBaseline: "central",
                alignmentBaseline: "central",
                children: [
                    value,
                    typeof suffix !== "undefined" ? suffix : "\xb0"
                ]
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("circle", {
                        id: "growing-thermo-cap",
                        fill: "currentColor",
                        cx: center,
                        cy: scaling,
                        r: (circleSize - thickness * 4) / 2
                    }),
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                        id: "growing-thermo",
                        fill: "currentColor",
                        x: center - radius + thickness * 2,
                        y: scaling,
                        width: circleSize - thickness * 4,
                        height: fullBarHeight - scaling
                    })
                ]
            })
        ]
    });
}





var $kr2Bq = parcelRequire("kr2Bq");
function $9f00b6270c13e843$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const $9f00b6270c13e843$var$HandleBase = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)("circle", {
    target: "e1pg1usi1"
})("");
const $9f00b6270c13e843$var$HandlePulse = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)("circle", {
    target: "e1pg1usi0"
})({
    name: "1r30l47",
    styles: "transform-box:fill-box;transform-origin:center center;animation-timing-function:ease-out;animation-duration:1500ms;animation-iteration-count:infinite;animation-name:pulse;@keyframes pulse{0%{transform:scale(1.4);}50%{transform:scale(0.8);}100%{transform:scale(1.4);}}"
});
const $9f00b6270c13e843$export$78486ed8e1ee431c = {
    handle: "#fff",
    icon: "#111",
    pulse: "rgba(0,0,0,0.3)"
};
function $9f00b6270c13e843$export$94890c79f4cae6d6({ x: x = 0 , y: y = 0 , size: size = 30 , handleSize: handleSize = 8 , colors: colors = $9f00b6270c13e843$export$78486ed8e1ee431c  }) {
    const double = handleSize * 2;
    const _colors = {
        ...$9f00b6270c13e843$export$78486ed8e1ee431c,
        ...colors
    };
    const ref = (0, $kr2Bq.useRef)(null);
    const svgRef = (0, $kr2Bq.useRef)(null);
    const [angle, setAngle] = (0, $kr2Bq.useState)(0);
    const iconLineSpacing = handleSize / 3;
    const halfHandle = handleSize / 2;
    const lineThickness = 1;
    const verticalOffset = lineThickness + (halfHandle + iconLineSpacing * 2 - halfHandle);
    const offsetToCenter = handleSize - verticalOffset / 2;
    (0, $kr2Bq.useEffect)(()=>{
        if (ref.current && svgRef.current) {
            const bubbleBounding = ref.current.getBoundingClientRect();
            const svgBounding = svgRef.current.getBoundingClientRect();
            var redX = bubbleBounding.left + bubbleBounding.width / 2;
            var redY = bubbleBounding.top + bubbleBounding.height / 2;
            var blueX = svgBounding.left + svgBounding.width / 2;
            var blueY = svgBounding.top + svgBounding.height / 2;
            var X = blueX - redX;
            var Y = blueY - redY;
            setAngle(Math.atan2(Y, X) + Math.PI / 2);
        }
    }, [
        ref,
        x,
        handleSize,
        y
    ]);
    return /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("svg", {
        ref: svgRef,
        width: size + double,
        height: size + double,
        viewBox: `-${handleSize} -${handleSize} ${size + double} ${size + double}`,
        children: [
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)($9f00b6270c13e843$var$HandlePulse, {
                r: handleSize,
                cx: x,
                cy: y,
                fill: _colors.pulse,
                fillOpacity: "0.2"
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)($9f00b6270c13e843$var$HandleBase, {
                r: handleSize,
                cx: x,
                cy: y,
                fill: _colors.handle
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("g", {
                style: {
                    transform: `translate3d(${x - handleSize}px, ${y - handleSize}px, 0)`,
                    cursor: "grab"
                },
                children: /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("svg", {
                    width: double,
                    height: double,
                    viewBox: `0 0 ${double} ${double}`,
                    children: [
                        /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                            ref: ref,
                            fill: "transparent",
                            width: double,
                            height: double
                        }),
                        /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("g", {
                            style: {
                                transform: `rotate(${angle}rad)`,
                                transformOrigin: "center center"
                            },
                            children: [
                                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                                    fill: _colors.icon,
                                    x: halfHandle,
                                    y: 0 + offsetToCenter,
                                    width: handleSize,
                                    height: lineThickness
                                }),
                                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                                    fill: _colors.icon,
                                    x: halfHandle,
                                    y: iconLineSpacing + offsetToCenter,
                                    width: handleSize,
                                    height: lineThickness
                                }),
                                /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("rect", {
                                    fill: _colors.icon,
                                    x: halfHandle,
                                    y: iconLineSpacing * 2 + offsetToCenter,
                                    width: handleSize,
                                    height: lineThickness
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}



function $c706e6ba5fa7bca6$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const $c706e6ba5fa7bca6$var$Wrapper = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)("div", {
    target: "e1wqv6dx5"
})({
    name: "bjn8wh",
    styles: "position:relative"
});
const $c706e6ba5fa7bca6$var$ColorPicker = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)("canvas", {
    target: "e1wqv6dx4"
})({
    name: "ugxobr",
    styles: "position:absolute;z-index:-1;visibility:hidden"
});
const $c706e6ba5fa7bca6$var$HandleContainer = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)("div", {
    target: "e1wqv6dx3"
})("position:absolute;z-index:3;bottom:0;left:0;width:", (props)=>props.size, "px;height:", (props)=>props.size, "px;margin-bottom:-", (props)=>props.handleSize - 3, "px;margin-left:-", (props)=>props.handleSize, "px;");
const $c706e6ba5fa7bca6$var$Thermometer = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)((0, $4240a031e85d1d42$export$a72d32054f236c4), {
    target: "e1wqv6dx2"
})("color:", (props)=>props.color, ';font-family:"Kanit",sans-serif;font-weight:100;');
const $c706e6ba5fa7bca6$var$Gradient = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)("div", {
    target: "e1wqv6dx1"
})("width:", (props)=>props.width, "px;height:", (props)=>props.height, "px;");
const $c706e6ba5fa7bca6$var$Arc = /*#__PURE__*/ (0, $493bc646c1e69814$export$2e2bcd8739ae039)("svg", {
    target: "e1wqv6dx0"
})({
    name: "bjn8wh",
    styles: "position:relative"
});
const $c706e6ba5fa7bca6$var$HANDLE_DEFAULTS = {
    colors: (0, $9f00b6270c13e843$export$78486ed8e1ee431c)
};
const $c706e6ba5fa7bca6$var$TRACK_DEFAULTS = {
    colors: [
        "#cfac48",
        "#cd5401"
    ],
    markers: {
        enabled: true,
        every: 5,
        count: 60,
        main: {
            color: "black"
        },
        sub: {
            color: "rgba(0,0,0,0.8)"
        }
    }
};
function $c706e6ba5fa7bca6$export$c1cbc01833f43ebe({ size: size = 200 , min: min = 0 , max: max = 100 , value: value , valueSuffix: valueSuffix , handle: handleInput , track: trackInput , onChange: onChange , disabled: disabled  }) {
    const handle = (0, $ce0cd843a338c561$export$4950aa0f605343fb)({
        ...$c706e6ba5fa7bca6$var$HANDLE_DEFAULTS,
        size: size / 15
    }, handleInput || {});
    const track = (0, $ce0cd843a338c561$export$4950aa0f605343fb)({
        ...$c706e6ba5fa7bca6$var$TRACK_DEFAULTS,
        thickness: size / 10
    }, trackInput || {});
    const _svgRef = (0, $kr2Bq.useRef)(null);
    const _handleRef = (0, $kr2Bq.useRef)(null);
    const _canvasRef = (0, $kr2Bq.useRef)(null);
    const [color, setColor] = (0, $kr2Bq.useState)("transparent");
    const trackInnerRadius = size / 2 - track.thickness;
    const thermoOffset = track.thickness + track.thickness / (0, $1e8d7124b9661f65$export$306e165047789a05);
    const height = size * (0, $1e8d7124b9661f65$export$57528c6c0bd59f75) + thermoOffset;
    const handleAngle = (0, $ce0cd843a338c561$export$7f7142e45456c312)({
        value: value,
        min: min,
        max: max
    });
    const handlePosition = (0, $ce0cd843a338c561$export$2d72ec1166563834)(handleAngle, trackInnerRadius + track.thickness / 2, size);
    const controllable = !disabled && Boolean(onChange);
    (0, $kr2Bq.useEffect)(()=>{
        const canvasRef = _canvasRef.current;
        if (canvasRef) {
            const ctx = canvasRef.getContext("2d");
            if (ctx) {
                var _track$colors;
                const gradient = ctx.createLinearGradient(0, 0, (0, $1e8d7124b9661f65$export$2c9a6d1027132519), (0, $1e8d7124b9661f65$export$aeb116877fd5ad06));
                (_track$colors = track.colors) === null || _track$colors === void 0 || _track$colors.forEach((color, index)=>{
                    const offset = index === 0 ? 0.2 : index === track.colors.length - 1 ? 0.8 : index / (track.colors.length - 1);
                    gradient.addColorStop(offset, color);
                });
                ctx.fillStyle = gradient;
                ctx.rect(0, 0, (0, $1e8d7124b9661f65$export$2c9a6d1027132519), (0, $1e8d7124b9661f65$export$aeb116877fd5ad06));
                ctx.fill();
            }
        }
    }, [
        track.colors
    ]);
    (0, $kr2Bq.useEffect)(()=>{
        getColourFromValue();
    }, [
        value,
        track.colors
    ]);
    if (value < min || value > max) throw new Error(`"value" should be between ${min} and ${max}`);
    function onMouseEnter(ev) {
        if (ev.buttons === 1) // The left mouse button is pressed, act as though user clicked us
        onMouseDown(ev);
    }
    function onMouseDown(ev) {
        const handleRef = _handleRef.current;
        if (handleRef) {
            handleRef.addEventListener("mousemove", processSelection);
            handleRef.addEventListener("mouseleave", removeMouseListeners);
            handleRef.addEventListener("mouseup", removeMouseListeners);
        }
        processSelection(ev);
    }
    function removeMouseListeners() {
        const handleRef = _handleRef.current;
        if (handleRef) {
            handleRef.removeEventListener("mousemove", processSelection);
            handleRef.removeEventListener("mouseleave", removeMouseListeners);
            handleRef.removeEventListener("mouseup", removeMouseListeners);
        }
    }
    function getColourFromValue() {
        const canvasRef = _canvasRef.current;
        if (canvasRef) {
            const ctx = canvasRef.getContext("2d");
            // input value percentage between min and max
            if (ctx) {
                const percent = (value - min) * 100 / (max - min);
                const scaling = ((0, $1e8d7124b9661f65$export$2c9a6d1027132519) - 1) * percent / 100;
                const v = ctx.getImageData(scaling, 1, 1, 1).data;
                setColor(`rgb(${v[0]},${v[1]},${v[2]})`);
            }
        }
    }
    function processSelection(ev) {
        if (!onChange || disabled) // Read-only, don't bother doing calculations
        return;
        const svgRef = _svgRef.current;
        if (!svgRef) return;
        // Find the coordinates with respect to the SVG
        const svgPoint = svgRef.createSVGPoint();
        const x = ev.clientX;
        const y = ev.clientY;
        svgPoint.x = x;
        // offset the Y by the size of the thermometer difference
        svgPoint.y = y - (height - size);
        const coordsInSvg = svgPoint.matrixTransform(svgRef.getScreenCTM().inverse());
        const angle = (0, $ce0cd843a338c561$export$87e67ba629853261)(coordsInSvg, size);
        onChange((0, $ce0cd843a338c561$export$a1eafce842b7029b)({
            angle: angle,
            min: min,
            max: max
        }));
    }
    const arc = (0, $b84b2800414cd49c$export$bf8a3f9983094125)({
        innerRadius: trackInnerRadius,
        thickness: track.thickness,
        svgSize: size
    });
    return /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)($c706e6ba5fa7bca6$var$Wrapper, {
        children: [
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)($c706e6ba5fa7bca6$var$ColorPicker, {
                width: (0, $1e8d7124b9661f65$export$2c9a6d1027132519),
                height: (0, $1e8d7124b9661f65$export$aeb116877fd5ad06),
                ref: _canvasRef
            }),
            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)($c706e6ba5fa7bca6$var$Arc, {
                width: size,
                height: height,
                ref: _svgRef,
                children: [
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)($c706e6ba5fa7bca6$var$Thermometer, {
                        handleSize: handle.size,
                        textColor: "rgba(0,0,0,0.9)",
                        color: color,
                        value: Number(value.toFixed(0)),
                        min: min,
                        max: max,
                        suffix: valueSuffix,
                        thickness: track.thickness / (0, $1e8d7124b9661f65$export$306e165047789a05),
                        size: size
                    }),
                    /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsxs)("svg", {
                        width: size,
                        height: size,
                        y: height - size,
                        children: [
                            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("foreignObject", {
                                x: 0,
                                y: 0,
                                width: size,
                                height: size,
                                clipPath: "url(#clip)",
                                children: /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)($c706e6ba5fa7bca6$var$Gradient, {
                                    width: size,
                                    height: size,
                                    style: {
                                        backgroundImage: `conic-gradient(from 0deg, ${[
                                            ...track.colors || []
                                        ].reverse().map((color, index)=>{
                                            const offset = index === 0 ? 20 : index === track.colors.length - 1 ? 80 : index / (track.colors.length - 1) * 100;
                                            return `${color} ${offset}%`;
                                        }).join(", ")}`
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("mask", {
                                id: "arc-mask",
                                children: /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("path", {
                                    d: arc,
                                    fill: "white"
                                })
                            }),
                            /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("clipPath", {
                                id: "clip",
                                children: /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)("path", {
                                    d: arc
                                })
                            }),
                            track.markers.enabled && /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)((0, $b832632b644fb8cc$export$38a233b5ad2f3b00), {
                                ticks: {
                                    every: track.markers.every,
                                    count: track.markers.count,
                                    main: {
                                        thickness: 2,
                                        length: track.thickness / 4,
                                        ...track.markers.main
                                    },
                                    sub: {
                                        thickness: 1,
                                        length: track.thickness / 8,
                                        ...track.markers.sub
                                    }
                                },
                                mask: "arc-mask",
                                size: size
                            })
                        ]
                    })
                ]
            }),
            !disabled && /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)($c706e6ba5fa7bca6$var$HandleContainer, {
                onMouseDown: onMouseDown,
                onMouseEnter: onMouseEnter,
                onClick: (ev)=>{
                    // we could determine how close we are to the track here and only allow events when they're closer to the
                    // arc, later job
                    return controllable && ev.stopPropagation();
                },
                ref: _handleRef,
                handleSize: handle.size,
                size: size + handle.size * 2,
                children: /*#__PURE__*/ (0, $95e690a3037e1728$exports.jsx)((0, $9f00b6270c13e843$export$94890c79f4cae6d6), {
                    colors: handle.colors,
                    x: handlePosition.x,
                    y: handlePosition.y,
                    size: size,
                    handleSize: handle.size
                })
            })
        ]
    });
}

})();
//# sourceMappingURL=index.js.map
