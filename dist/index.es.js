var Br = { exports: {} }, Xe = {}, zr = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function Vt() {
  if (ht) return m;
  ht = 1;
  var Y = Symbol.for("react.element"), d = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), U = Symbol.iterator;
  function ee(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, be = {};
  function re(n, i, g) {
    this.props = n, this.context = i, this.refs = be, this.updater = g || H;
  }
  re.prototype.isReactComponent = {}, re.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, i, "setState");
  }, re.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function W() {
  }
  W.prototype = re.prototype;
  function C(n, i, g) {
    this.props = n, this.context = i, this.refs = be, this.updater = g || H;
  }
  var fe = C.prototype = new W();
  fe.constructor = C, ie(fe, re.prototype), fe.isPureReactComponent = !0;
  var te = Array.isArray, F = Object.prototype.hasOwnProperty, B = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(n, i, g) {
    var b, R = {}, j = null, P = null;
    if (i != null) for (b in i.ref !== void 0 && (P = i.ref), i.key !== void 0 && (j = "" + i.key), i) F.call(i, b) && !pe.hasOwnProperty(b) && (R[b] = i[b]);
    var O = arguments.length - 2;
    if (O === 1) R.children = g;
    else if (1 < O) {
      for (var w = Array(O), N = 0; N < O; N++) w[N] = arguments[N + 2];
      R.children = w;
    }
    if (n && n.defaultProps) for (b in O = n.defaultProps, O) R[b] === void 0 && (R[b] = O[b]);
    return { $$typeof: Y, type: n, key: j, ref: P, props: R, _owner: B.current };
  }
  function Te(n, i) {
    return { $$typeof: Y, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Oe(n) {
    return typeof n == "object" && n !== null && n.$$typeof === Y;
  }
  function ze(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(g) {
      return i[g];
    });
  }
  var Pe = /\/+/g;
  function G(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? ze("" + n.key) : i.toString(36);
  }
  function ne(n, i, g, b, R) {
    var j = typeof n;
    (j === "undefined" || j === "boolean") && (n = null);
    var P = !1;
    if (n === null) P = !0;
    else switch (j) {
      case "string":
      case "number":
        P = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case Y:
          case d:
            P = !0;
        }
    }
    if (P) return P = n, R = R(P), n = b === "" ? "." + G(P, 0) : b, te(R) ? (g = "", n != null && (g = n.replace(Pe, "$&/") + "/"), ne(R, i, g, "", function(N) {
      return N;
    })) : R != null && (Oe(R) && (R = Te(R, g + (!R.key || P && P.key === R.key ? "" : ("" + R.key).replace(Pe, "$&/") + "/") + n)), i.push(R)), 1;
    if (P = 0, b = b === "" ? "." : b + ":", te(n)) for (var O = 0; O < n.length; O++) {
      j = n[O];
      var w = b + G(j, O);
      P += ne(j, i, g, w, R);
    }
    else if (w = ee(n), typeof w == "function") for (n = w.call(n), O = 0; !(j = n.next()).done; ) j = j.value, w = b + G(j, O++), P += ne(j, i, g, w, R);
    else if (j === "object") throw i = String(n), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function z(n, i, g) {
    if (n == null) return n;
    var b = [], R = 0;
    return ne(n, b, "", "", function(j) {
      return i.call(g, j, R++);
    }), b;
  }
  function le(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), i.then(function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = g);
      }, function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = g);
      }), n._status === -1 && (n._status = 0, n._result = i);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var l = { current: null }, ve = { transition: null }, ke = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: ve, ReactCurrentOwner: B };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: z, forEach: function(n, i, g) {
    z(n, function() {
      i.apply(this, arguments);
    }, g);
  }, count: function(n) {
    var i = 0;
    return z(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return z(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!Oe(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = re, m.Fragment = de, m.Profiler = ce, m.PureComponent = C, m.StrictMode = X, m.Suspense = x, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, m.act = me, m.cloneElement = function(n, i, g) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var b = ie({}, n.props), R = n.key, j = n.ref, P = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (j = i.ref, P = B.current), i.key !== void 0 && (R = "" + i.key), n.type && n.type.defaultProps) var O = n.type.defaultProps;
      for (w in i) F.call(i, w) && !pe.hasOwnProperty(w) && (b[w] = i[w] === void 0 && O !== void 0 ? O[w] : i[w]);
    }
    var w = arguments.length - 2;
    if (w === 1) b.children = g;
    else if (1 < w) {
      O = Array(w);
      for (var N = 0; N < w; N++) O[N] = arguments[N + 2];
      b.children = O;
    }
    return { $$typeof: Y, type: n.type, key: R, ref: j, props: b, _owner: P };
  }, m.createContext = function(n) {
    return n = { $$typeof: ue, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: oe, _context: n }, n.Consumer = n;
  }, m.createElement = he, m.createFactory = function(n) {
    var i = he.bind(null, n);
    return i.type = n, i;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: Q, render: n };
  }, m.isValidElement = Oe, m.lazy = function(n) {
    return { $$typeof: I, _payload: { _status: -1, _result: n }, _init: le };
  }, m.memo = function(n, i) {
    return { $$typeof: Z, type: n, compare: i === void 0 ? null : i };
  }, m.startTransition = function(n) {
    var i = ve.transition;
    ve.transition = {};
    try {
      n();
    } finally {
      ve.transition = i;
    }
  }, m.unstable_act = me, m.useCallback = function(n, i) {
    return l.current.useCallback(n, i);
  }, m.useContext = function(n) {
    return l.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return l.current.useDeferredValue(n);
  }, m.useEffect = function(n, i) {
    return l.current.useEffect(n, i);
  }, m.useId = function() {
    return l.current.useId();
  }, m.useImperativeHandle = function(n, i, g) {
    return l.current.useImperativeHandle(n, i, g);
  }, m.useInsertionEffect = function(n, i) {
    return l.current.useInsertionEffect(n, i);
  }, m.useLayoutEffect = function(n, i) {
    return l.current.useLayoutEffect(n, i);
  }, m.useMemo = function(n, i) {
    return l.current.useMemo(n, i);
  }, m.useReducer = function(n, i, g) {
    return l.current.useReducer(n, i, g);
  }, m.useRef = function(n) {
    return l.current.useRef(n);
  }, m.useState = function(n) {
    return l.current.useState(n);
  }, m.useSyncExternalStore = function(n, i, g) {
    return l.current.useSyncExternalStore(n, i, g);
  }, m.useTransition = function() {
    return l.current.useTransition();
  }, m.version = "18.3.1", m;
}
var er = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
er.exports;
var mt;
function Ut() {
  return mt || (mt = 1, function(Y, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var de = "18.3.1", X = Symbol.for("react.element"), ce = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), Z = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), be = Symbol.for("react.offscreen"), re = Symbol.iterator, W = "@@iterator";
      function C(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = re && e[re] || e[W];
        return typeof r == "function" ? r : null;
      }
      var fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, te = {
        transition: null
      }, F = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, B = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {}, he = null;
      function Te(e) {
        he = e;
      }
      pe.setExtraStackFrame = function(e) {
        he = e;
      }, pe.getCurrentStack = null, pe.getStackAddendum = function() {
        var e = "";
        he && (e += he);
        var r = pe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Oe = !1, ze = !1, Pe = !1, G = !1, ne = !1, z = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: te,
        ReactCurrentOwner: B
      };
      z.ReactDebugCurrentFrame = pe, z.ReactCurrentActQueue = F;
      function le(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("warn", e, a);
        }
      }
      function l(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("error", e, a);
        }
      }
      function ve(e, r, a) {
        {
          var o = z.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var p = a.map(function(f) {
            return String(f);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var ke = {};
      function me(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (ke[c])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), ke[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          me(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          me(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          me(e, "setState");
        }
      }, i = Object.assign, g = {};
      Object.freeze(g);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var R = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, j = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              le("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var P in R)
          R.hasOwnProperty(P) && j(P, R[P]);
      }
      function O() {
      }
      O.prototype = b.prototype;
      function w(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      var N = w.prototype = new O();
      N.constructor = w, i(N, b.prototype), N.isPureReactComponent = !0;
      function Er() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var rr = Array.isArray;
      function Me(e) {
        return rr(e);
      }
      function Rr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return Ee(e), !1;
        } catch {
          return !0;
        }
      }
      function Ee(e) {
        return "" + e;
      }
      function je(e) {
        if (Le(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), Ee(e);
      }
      function tr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function Ae(e) {
        return e.displayName || "Context";
      }
      function ye(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case oe:
            return "Fragment";
          case ce:
            return "Portal";
          case Q:
            return "Profiler";
          case ue:
            return "StrictMode";
          case U:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Z:
              var r = e;
              return Ae(r) + ".Consumer";
            case x:
              var a = e;
              return Ae(a._context) + ".Provider";
            case I:
              return tr(e, e.render, "ForwardRef");
            case H:
              var o = e.displayName || null;
              return o !== null ? o : ye(e.type) || "Memo";
            case ie: {
              var c = e, p = c._payload, f = c._init;
              try {
                return ye(f(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var De = Object.prototype.hasOwnProperty, We = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, nr, ar, Ne;
      Ne = {};
      function qe(e) {
        if (De.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Re(e) {
        if (De.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Sr(e, r) {
        var a = function() {
          nr || (nr = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function or(e, r) {
        var a = function() {
          ar || (ar = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ur(e) {
        if (typeof e.ref == "string" && B.current && e.__self && B.current.stateNode !== e.__self) {
          var r = ye(B.current.type);
          Ne[r] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var xe = function(e, r, a, o, c, p, f) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: X,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Cr(e, r, a) {
        var o, c = {}, p = null, f = null, y = null, E = null;
        if (r != null) {
          qe(r) && (f = r.ref, ur(r)), Re(r) && (je(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            De.call(r, o) && !We.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var k = arguments.length - 2;
        if (k === 1)
          c.children = a;
        else if (k > 1) {
          for (var A = Array(k), D = 0; D < k; D++)
            A[D] = arguments[D + 2];
          Object.freeze && Object.freeze(A), c.children = A;
        }
        if (e && e.defaultProps) {
          var M = e.defaultProps;
          for (o in M)
            c[o] === void 0 && (c[o] = M[o]);
        }
        if (p || f) {
          var V = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && Sr(c, V), f && or(c, V);
        }
        return xe(e, p, f, y, E, B.current, c);
      }
      function wr(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Tr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = i({}, e.props), p = e.key, f = e.ref, y = e._self, E = e._source, k = e._owner;
        if (r != null) {
          qe(r) && (f = r.ref, k = B.current), Re(r) && (je(r.key), p = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            De.call(r, o) && !We.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? c[o] = A[o] : c[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          c.children = a;
        else if (D > 1) {
          for (var M = Array(D), V = 0; V < D; V++)
            M[V] = arguments[V + 2];
          c.children = M;
        }
        return xe(e.type, p, f, y, E, k, c);
      }
      function Se(e) {
        return typeof e == "object" && e !== null && e.$$typeof === X;
      }
      var ir = ".", Or = ":";
      function Pr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ve = !1, sr = /\/+/g;
      function ge(e) {
        return e.replace(sr, "$&/");
      }
      function Ie(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (je(e.key), Pr("" + e.key)) : r.toString(36);
      }
      function Ce(e, r, a, o, c) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (p) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case X:
                case ce:
                  f = !0;
              }
          }
        if (f) {
          var y = e, E = c(y), k = o === "" ? ir + Ie(y, 0) : o;
          if (Me(E)) {
            var A = "";
            k != null && (A = ge(k) + "/"), Ce(E, r, A, "", function(Nt) {
              return Nt;
            });
          } else E != null && (Se(E) && (E.key && (!y || y.key !== E.key) && je(E.key), E = wr(
            E,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (E.key && (!y || y.key !== E.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ge("" + E.key) + "/"
            ) : "") + k
          )), r.push(E));
          return 1;
        }
        var D, M, V = 0, K = o === "" ? ir : o + Or;
        if (Me(e))
          for (var br = 0; br < e.length; br++)
            D = e[br], M = K + Ie(D, br), V += Ce(D, r, a, M, c);
        else {
          var Yr = C(e);
          if (typeof Yr == "function") {
            var pt = e;
            Yr === pt.entries && (Ve || le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Lt = Yr.call(pt), vt, Wt = 0; !(vt = Lt.next()).done; )
              D = vt.value, M = K + Ie(D, Wt++), V += Ce(D, r, a, M, c);
          } else if (p === "object") {
            var yt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (yt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : yt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return V;
      }
      function Fe(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Ce(e, o, "", "", function(p) {
          return r.call(a, p, c++);
        }), o;
      }
      function kr(e) {
        var r = 0;
        return Fe(e, function() {
          r++;
        }), r;
      }
      function cr(e, r, a) {
        Fe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function jr(e) {
        return Fe(e, function(r) {
          return r;
        }) || [];
      }
      function fr(e) {
        if (!Se(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function lr(e) {
        var r = {
          $$typeof: Z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: x,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var p = {
            $$typeof: Z,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                c || (le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), c = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var $e = -1, Ke = 0, He = 1, dr = 2;
      function Ar(e) {
        if (e._status === $e) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === Ke || e._status === $e) {
              var f = e;
              f._status = He, f._result = p;
            }
          }, function(p) {
            if (e._status === Ke || e._status === $e) {
              var f = e;
              f._status = dr, f._result = p;
            }
          }), e._status === $e) {
            var o = e;
            o._status = Ke, o._result = a;
          }
        }
        if (e._status === He) {
          var c = e._result;
          return c === void 0 && l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Dr(e) {
        var r = {
          // We use these fields to store the result.
          _status: $e,
          _result: e
        }, a = {
          $$typeof: ie,
          _payload: r,
          _init: Ar
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(p) {
                l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function xr(e) {
        e != null && e.$$typeof === H ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: I,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var pr;
      pr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === oe || e === Q || ne || e === ue || e === U || e === ee || G || e === be || Oe || ze || Pe || typeof e == "object" && e !== null && (e.$$typeof === ie || e.$$typeof === H || e.$$typeof === x || e.$$typeof === Z || e.$$typeof === I || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === pr || e.getModuleId !== void 0));
      }
      function u(e, r) {
        t(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: H,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = fe.current;
        return e === null && l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function v(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = s();
        return r.useState(e);
      }
      function T(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function _(e) {
        var r = s();
        return r.useRef(e);
      }
      function h(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function q(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function L(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function ae(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function we(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function _e(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function J() {
        var e = s();
        return e.useTransition();
      }
      function Ge(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Ir() {
        var e = s();
        return e.useId();
      }
      function Fr(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var Je = 0, qr, Kr, Hr, Gr, Jr, Xr, Qr;
      function Zr() {
      }
      Zr.__reactDisabledLog = !0;
      function bt() {
        {
          if (Je === 0) {
            qr = console.log, Kr = console.info, Hr = console.warn, Gr = console.error, Jr = console.group, Xr = console.groupCollapsed, Qr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Zr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Je++;
        }
      }
      function Et() {
        {
          if (Je--, Je === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: i({}, e, {
                value: qr
              }),
              info: i({}, e, {
                value: Kr
              }),
              warn: i({}, e, {
                value: Hr
              }),
              error: i({}, e, {
                value: Gr
              }),
              group: i({}, e, {
                value: Jr
              }),
              groupCollapsed: i({}, e, {
                value: Xr
              }),
              groupEnd: i({}, e, {
                value: Qr
              })
            });
          }
          Je < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var $r = z.ReactCurrentDispatcher, Mr;
      function vr(e, r, a) {
        {
          if (Mr === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              Mr = o && o[1] || "";
            }
          return `
` + Mr + e;
        }
      }
      var Lr = !1, yr;
      {
        var Rt = typeof WeakMap == "function" ? WeakMap : Map;
        yr = new Rt();
      }
      function et(e, r) {
        if (!e || Lr)
          return "";
        {
          var a = yr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Lr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = $r.current, $r.current = null, bt();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (K) {
                o = K;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (K) {
                o = K;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (K) {
              o = K;
            }
            e();
          }
        } catch (K) {
          if (K && o && typeof K.stack == "string") {
            for (var y = K.stack.split(`
`), E = o.stack.split(`
`), k = y.length - 1, A = E.length - 1; k >= 1 && A >= 0 && y[k] !== E[A]; )
              A--;
            for (; k >= 1 && A >= 0; k--, A--)
              if (y[k] !== E[A]) {
                if (k !== 1 || A !== 1)
                  do
                    if (k--, A--, A < 0 || y[k] !== E[A]) {
                      var D = `
` + y[k].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && yr.set(e, D), D;
                    }
                  while (k >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Lr = !1, $r.current = p, Et(), Error.prepareStackTrace = c;
        }
        var M = e ? e.displayName || e.name : "", V = M ? vr(M) : "";
        return typeof e == "function" && yr.set(e, V), V;
      }
      function St(e, r, a) {
        return et(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function hr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return et(e, Ct(e));
        if (typeof e == "string")
          return vr(e);
        switch (e) {
          case U:
            return vr("Suspense");
          case ee:
            return vr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case I:
              return St(e.render);
            case H:
              return hr(e.type, r, a);
            case ie: {
              var o = e, c = o._payload, p = o._init;
              try {
                return hr(p(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var rt = {}, tt = z.ReactDebugCurrentFrame;
      function mr(e) {
        if (e) {
          var r = e._owner, a = hr(e.type, e._source, r ? r.type : null);
          tt.setExtraStackFrame(a);
        } else
          tt.setExtraStackFrame(null);
      }
      function wt(e, r, a, o, c) {
        {
          var p = Function.call.bind(De);
          for (var f in e)
            if (p(e, f)) {
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (k) {
                y = k;
              }
              y && !(y instanceof Error) && (mr(c), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), mr(null)), y instanceof Error && !(y.message in rt) && (rt[y.message] = !0, mr(c), l("Failed %s type: %s", a, y.message), mr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, a = hr(e.type, e._source, r ? r.type : null);
          Te(a);
        } else
          Te(null);
      }
      var Wr;
      Wr = !1;
      function nt() {
        if (B.current) {
          var e = ye(B.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Tt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Ot(e) {
        return e != null ? Tt(e.__source) : "";
      }
      var at = {};
      function Pt(e) {
        var r = nt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function ot(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Pt(r);
          if (!at[a]) {
            at[a] = !0;
            var o = "";
            e && e._owner && e._owner !== B.current && (o = " It was passed a child from " + ye(e._owner.type) + "."), Ue(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ue(null);
          }
        }
      }
      function ut(e, r) {
        if (typeof e == "object") {
          if (Me(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Se(o) && ot(o, r);
            }
          else if (Se(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = C(e);
            if (typeof c == "function" && c !== e.entries)
              for (var p = c.call(e), f; !(f = p.next()).done; )
                Se(f.value) && ot(f.value, r);
          }
        }
      }
      function it(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === I || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === H))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ye(r);
            wt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Wr) {
            Wr = !0;
            var c = ye(r);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ue(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function st(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ot(r);
          p ? c += p : c += nt();
          var f;
          e === null ? f = "null" : Me(e) ? f = "array" : e !== void 0 && e.$$typeof === X ? (f = "<" + (ye(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, c);
        }
        var y = Cr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            ut(arguments[E], e);
        return e === oe ? kt(y) : it(y), y;
      }
      var ct = !1;
      function jt(e) {
        var r = st.bind(null, e);
        return r.type = e, ct || (ct = !0, le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function At(e, r, a) {
        for (var o = Tr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ut(arguments[c], o.type);
        return it(o), o;
      }
      function Dt(e, r) {
        var a = te.transition;
        te.transition = {};
        var o = te.transition;
        te.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (te.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ft = !1, gr = null;
      function xt(e) {
        if (gr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = Y && Y[r];
            gr = a.call(Y, "timers").setImmediate;
          } catch {
            gr = function(c) {
              ft === !1 && (ft = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = c, p.port2.postMessage(void 0);
            };
          }
        return gr(e);
      }
      var Ye = 0, lt = !1;
      function dt(e) {
        {
          var r = Ye;
          Ye++, F.current === null && (F.current = []);
          var a = F.isBatchingLegacy, o;
          try {
            if (F.isBatchingLegacy = !0, o = e(), !a && F.didScheduleLegacyUpdate) {
              var c = F.current;
              c !== null && (F.didScheduleLegacyUpdate = !1, Ur(c));
            }
          } catch (M) {
            throw _r(r), M;
          } finally {
            F.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, f = !1, y = {
              then: function(M, V) {
                f = !0, p.then(function(K) {
                  _r(r), Ye === 0 ? Nr(K, M, V) : M(K);
                }, function(K) {
                  _r(r), V(K);
                });
              }
            };
            return !lt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (lt = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (_r(r), Ye === 0) {
              var k = F.current;
              k !== null && (Ur(k), F.current = null);
              var A = {
                then: function(M, V) {
                  F.current === null ? (F.current = [], Nr(E, M, V)) : M(E);
                }
              };
              return A;
            } else {
              var D = {
                then: function(M, V) {
                  M(E);
                }
              };
              return D;
            }
          }
        }
      }
      function _r(e) {
        e !== Ye - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function Nr(e, r, a) {
        {
          var o = F.current;
          if (o !== null)
            try {
              Ur(o), xt(function() {
                o.length === 0 ? (F.current = null, r(e)) : Nr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Vr = !1;
      function Ur(e) {
        if (!Vr) {
          Vr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Vr = !1;
          }
        }
      }
      var It = st, Ft = At, $t = jt, Mt = {
        map: Fe,
        forEach: cr,
        count: kr,
        toArray: jr,
        only: fr
      };
      d.Children = Mt, d.Component = b, d.Fragment = oe, d.Profiler = Q, d.PureComponent = w, d.StrictMode = ue, d.Suspense = U, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, d.act = dt, d.cloneElement = Ft, d.createContext = lr, d.createElement = It, d.createFactory = $t, d.createRef = Er, d.forwardRef = xr, d.isValidElement = Se, d.lazy = Dr, d.memo = u, d.startTransition = Dt, d.unstable_act = dt, d.useCallback = L, d.useContext = v, d.useDebugValue = _e, d.useDeferredValue = Ge, d.useEffect = h, d.useId = Ir, d.useImperativeHandle = we, d.useInsertionEffect = q, d.useLayoutEffect = $, d.useMemo = ae, d.useReducer = T, d.useRef = _, d.useState = S, d.useSyncExternalStore = Fr, d.useTransition = J, d.version = de, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(er, er.exports)), er.exports;
}
process.env.NODE_ENV === "production" ? zr.exports = Vt() : zr.exports = Ut();
var se = zr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Yt() {
  if (gt) return Xe;
  gt = 1;
  var Y = se, d = Symbol.for("react.element"), de = Symbol.for("react.fragment"), X = Object.prototype.hasOwnProperty, ce = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(Q, x, Z) {
    var I, U = {}, ee = null, H = null;
    Z !== void 0 && (ee = "" + Z), x.key !== void 0 && (ee = "" + x.key), x.ref !== void 0 && (H = x.ref);
    for (I in x) X.call(x, I) && !oe.hasOwnProperty(I) && (U[I] = x[I]);
    if (Q && Q.defaultProps) for (I in x = Q.defaultProps, x) U[I] === void 0 && (U[I] = x[I]);
    return { $$typeof: d, type: Q, key: ee, ref: H, props: U, _owner: ce.current };
  }
  return Xe.Fragment = de, Xe.jsx = ue, Xe.jsxs = ue, Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Bt() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var Y = se, d = Symbol.for("react.element"), de = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), Q = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), ie = Symbol.iterator, be = "@@iterator";
    function re(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = ie && t[ie] || t[be];
      return typeof u == "function" ? u : null;
    }
    var W = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(t) {
      {
        for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), v = 1; v < u; v++)
          s[v - 1] = arguments[v];
        fe("error", t, s);
      }
    }
    function fe(t, u, s) {
      {
        var v = W.ReactDebugCurrentFrame, S = v.getStackAddendum();
        S !== "" && (u += "%s", s = s.concat([S]));
        var T = s.map(function(_) {
          return String(_);
        });
        T.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var te = !1, F = !1, B = !1, pe = !1, he = !1, Te;
    Te = Symbol.for("react.module.reference");
    function Oe(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === X || t === oe || he || t === ce || t === Z || t === I || pe || t === H || te || F || B || typeof t == "object" && t !== null && (t.$$typeof === ee || t.$$typeof === U || t.$$typeof === ue || t.$$typeof === Q || t.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Te || t.getModuleId !== void 0));
    }
    function ze(t, u, s) {
      var v = t.displayName;
      if (v)
        return v;
      var S = u.displayName || u.name || "";
      return S !== "" ? s + "(" + S + ")" : s;
    }
    function Pe(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case X:
          return "Fragment";
        case de:
          return "Portal";
        case oe:
          return "Profiler";
        case ce:
          return "StrictMode";
        case Z:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Q:
            var u = t;
            return Pe(u) + ".Consumer";
          case ue:
            var s = t;
            return Pe(s._context) + ".Provider";
          case x:
            return ze(t, t.render, "ForwardRef");
          case U:
            var v = t.displayName || null;
            return v !== null ? v : G(t.type) || "Memo";
          case ee: {
            var S = t, T = S._payload, _ = S._init;
            try {
              return G(_(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, z = 0, le, l, ve, ke, me, n, i;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function b() {
      {
        if (z === 0) {
          le = console.log, l = console.info, ve = console.warn, ke = console.error, me = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        z++;
      }
    }
    function R() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, t, {
              value: le
            }),
            info: ne({}, t, {
              value: l
            }),
            warn: ne({}, t, {
              value: ve
            }),
            error: ne({}, t, {
              value: ke
            }),
            group: ne({}, t, {
              value: me
            }),
            groupCollapsed: ne({}, t, {
              value: n
            }),
            groupEnd: ne({}, t, {
              value: i
            })
          });
        }
        z < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = W.ReactCurrentDispatcher, P;
    function O(t, u, s) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (S) {
            var v = S.stack.trim().match(/\n( *(at )?)/);
            P = v && v[1] || "";
          }
        return `
` + P + t;
      }
    }
    var w = !1, N;
    {
      var Er = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Er();
    }
    function rr(t, u) {
      if (!t || w)
        return "";
      {
        var s = N.get(t);
        if (s !== void 0)
          return s;
      }
      var v;
      w = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = j.current, j.current = null, b();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (J) {
              v = J;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (J) {
              v = J;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            v = J;
          }
          t();
        }
      } catch (J) {
        if (J && v && typeof J.stack == "string") {
          for (var h = J.stack.split(`
`), q = v.stack.split(`
`), $ = h.length - 1, L = q.length - 1; $ >= 1 && L >= 0 && h[$] !== q[L]; )
            L--;
          for (; $ >= 1 && L >= 0; $--, L--)
            if (h[$] !== q[L]) {
              if ($ !== 1 || L !== 1)
                do
                  if ($--, L--, L < 0 || h[$] !== q[L]) {
                    var ae = `
` + h[$].replace(" at new ", " at ");
                    return t.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", t.displayName)), typeof t == "function" && N.set(t, ae), ae;
                  }
                while ($ >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        w = !1, j.current = T, R(), Error.prepareStackTrace = S;
      }
      var we = t ? t.displayName || t.name : "", _e = we ? O(we) : "";
      return typeof t == "function" && N.set(t, _e), _e;
    }
    function Me(t, u, s) {
      return rr(t, !1);
    }
    function Rr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Le(t, u, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return rr(t, Rr(t));
      if (typeof t == "string")
        return O(t);
      switch (t) {
        case Z:
          return O("Suspense");
        case I:
          return O("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case x:
            return Me(t.render);
          case U:
            return Le(t.type, u, s);
          case ee: {
            var v = t, S = v._payload, T = v._init;
            try {
              return Le(T(S), u, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, je = {}, tr = W.ReactDebugCurrentFrame;
    function Ae(t) {
      if (t) {
        var u = t._owner, s = Le(t.type, t._source, u ? u.type : null);
        tr.setExtraStackFrame(s);
      } else
        tr.setExtraStackFrame(null);
    }
    function ye(t, u, s, v, S) {
      {
        var T = Function.call.bind(Ee);
        for (var _ in t)
          if (T(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var q = Error((v || "React class") + ": " + s + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              h = t[_](u, _, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              h = $;
            }
            h && !(h instanceof Error) && (Ae(S), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, _, typeof h), Ae(null)), h instanceof Error && !(h.message in je) && (je[h.message] = !0, Ae(S), C("Failed %s type: %s", s, h.message), Ae(null));
          }
      }
    }
    var De = Array.isArray;
    function We(t) {
      return De(t);
    }
    function nr(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, s = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function ar(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function qe(t) {
      if (ar(t))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(t)), Ne(t);
    }
    var Re = W.ReactCurrentOwner, Sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ur, xe;
    xe = {};
    function Cr(t) {
      if (Ee.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function wr(t) {
      if (Ee.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Tr(t, u) {
      if (typeof t.ref == "string" && Re.current && u && Re.current.stateNode !== u) {
        var s = G(Re.current.type);
        xe[s] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Re.current.type), t.ref), xe[s] = !0);
      }
    }
    function Se(t, u) {
      {
        var s = function() {
          or || (or = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ir(t, u) {
      {
        var s = function() {
          ur || (ur = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Or = function(t, u, s, v, S, T, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: s,
        props: _,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Pr(t, u, s, v, S) {
      {
        var T, _ = {}, h = null, q = null;
        s !== void 0 && (qe(s), h = "" + s), wr(u) && (qe(u.key), h = "" + u.key), Cr(u) && (q = u.ref, Tr(u, S));
        for (T in u)
          Ee.call(u, T) && !Sr.hasOwnProperty(T) && (_[T] = u[T]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (T in $)
            _[T] === void 0 && (_[T] = $[T]);
        }
        if (h || q) {
          var L = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && Se(_, L), q && ir(_, L);
        }
        return Or(t, h, q, S, v, Re.current, _);
      }
    }
    var Ve = W.ReactCurrentOwner, sr = W.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var u = t._owner, s = Le(t.type, t._source, u ? u.type : null);
        sr.setExtraStackFrame(s);
      } else
        sr.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Ce(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function Fe() {
      {
        if (Ve.current) {
          var t = G(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function kr(t) {
      return "";
    }
    var cr = {};
    function jr(t) {
      {
        var u = Fe();
        if (!u) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (u = `

Check the top-level render call using <` + s + ">.");
        }
        return u;
      }
    }
    function fr(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = jr(u);
        if (cr[s])
          return;
        cr[s] = !0;
        var v = "";
        t && t._owner && t._owner !== Ve.current && (v = " It was passed a child from " + G(t._owner.type) + "."), ge(t), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), ge(null);
      }
    }
    function lr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (We(t))
          for (var s = 0; s < t.length; s++) {
            var v = t[s];
            Ce(v) && fr(v, u);
          }
        else if (Ce(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var S = re(t);
          if (typeof S == "function" && S !== t.entries)
            for (var T = S.call(t), _; !(_ = T.next()).done; )
              Ce(_.value) && fr(_.value, u);
        }
      }
    }
    function $e(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var s;
        if (typeof u == "function")
          s = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === U))
          s = u.propTypes;
        else
          return;
        if (s) {
          var v = G(u);
          ye(s, t.props, "prop", v, t);
        } else if (u.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var S = G(u);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(t) {
      {
        for (var u = Object.keys(t.props), s = 0; s < u.length; s++) {
          var v = u[s];
          if (v !== "children" && v !== "key") {
            ge(t), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), C("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var He = {};
    function dr(t, u, s, v, S, T) {
      {
        var _ = Oe(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = kr();
          q ? h += q : h += Fe();
          var $;
          t === null ? $ = "null" : We(t) ? $ = "array" : t !== void 0 && t.$$typeof === d ? ($ = "<" + (G(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, h);
        }
        var L = Pr(t, u, s, S, T);
        if (L == null)
          return L;
        if (_) {
          var ae = u.children;
          if (ae !== void 0)
            if (v)
              if (We(ae)) {
                for (var we = 0; we < ae.length; we++)
                  lr(ae[we], t);
                Object.freeze && Object.freeze(ae);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(ae, t);
        }
        if (Ee.call(u, "key")) {
          var _e = G(t), J = Object.keys(u).filter(function(Fr) {
            return Fr !== "key";
          }), Ge = J.length > 0 ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[_e + Ge]) {
            var Ir = J.length > 0 ? "{" + J.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, _e, Ir, _e), He[_e + Ge] = !0;
          }
        }
        return t === X ? Ke(L) : $e(L), L;
      }
    }
    function Ar(t, u, s) {
      return dr(t, u, s, !0);
    }
    function Dr(t, u, s) {
      return dr(t, u, s, !1);
    }
    var xr = Dr, pr = Ar;
    Qe.Fragment = X, Qe.jsx = xr, Qe.jsxs = pr;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Br.exports = Yt() : Br.exports = Bt();
var zt = Br.exports;
const Be = "0", Ze = "00", qt = "000", Kt = ({
  date: Y
}) => {
  const [d, de] = se.useState(0), [X, ce] = se.useState(qt), [oe, ue] = se.useState(Ze), [Q, x] = se.useState(Ze), [Z, I] = se.useState(Ze), [U, ee] = se.useState(Ze), [H, ie] = se.useState(Ze), be = () => {
    de((W) => W - 1);
  }, re = se.useCallback(() => {
    const W = d, C = d / 60, fe = C / 60, te = fe / 24, F = te / 30, B = F / 12;
    ie(
      Math.floor(W % 60).toString().padStart(2, Be)
    ), ee(
      Math.floor(C % 60).toString().padStart(2, Be)
    ), I(
      Math.floor(fe % 24).toString().padStart(2, Be)
    ), x(
      Math.floor(te % 30).toString().padStart(2, Be)
    ), ue(
      Math.floor(F % 24).toString().padStart(2, Be)
    ), ce(
      Math.floor(B % 1e3).toString().padStart(3, Be)
    );
  }, [d]);
  return se.useEffect(() => {
    if (typeof Y > "u")
      return;
    const W = Y.getTime(), C = (/* @__PURE__ */ new Date()).getTime();
    C >= W || de(Math.ceil((W - C) / 1e3));
  }, [Y]), se.useEffect(() => {
    if (d >= 0) {
      const W = setTimeout(() => {
        be();
      }, 1e3);
      return re(), () => {
        clearTimeout(W);
      };
    }
  }, [d, re]), /* @__PURE__ */ zt.jsxs("h1", { className: "font-mono", children: [
    X,
    ":",
    oe,
    ":",
    Q,
    ":",
    Z,
    ":",
    U,
    ":",
    H
  ] });
};
export {
  Kt as CountUntil
};
//# sourceMappingURL=index.es.js.map
