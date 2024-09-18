import Me, { useState as P, useCallback as pr, useEffect as Fe } from "react";
var ue = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function gr() {
  if (Ae) return Y;
  Ae = 1;
  var S = Me, y = Symbol.for("react.element"), j = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, x = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(E, l, T) {
    var d, m = {}, R = null, D = null;
    T !== void 0 && (R = "" + T), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (D = l.ref);
    for (d in l) _.call(l, d) && !k.hasOwnProperty(d) && (m[d] = l[d]);
    if (E && E.defaultProps) for (d in l = E.defaultProps, l) m[d] === void 0 && (m[d] = l[d]);
    return { $$typeof: y, type: E, key: R, ref: D, props: m, _owner: x.current };
  }
  return Y.Fragment = j, Y.jsx = O, Y.jsxs = O, Y;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function hr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var S = Me, y = Symbol.for("react.element"), j = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), E = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), V = Symbol.iterator, H = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[H];
      return typeof r == "function" ? r : null;
    }
    var v = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        B("error", e, t);
      }
    }
    function B(e, r, t) {
      {
        var n = v.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var J = !1, q = !1, Z = !1, We = !1, $e = !1, fe;
    fe = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === k || $e || e === x || e === T || e === d || We || e === D || J || q || Z || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === m || e.$$typeof === O || e.$$typeof === E || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case j:
          return "Portal";
        case k:
          return "Profiler";
        case x:
          return "StrictMode";
        case T:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ce(r) + ".Consumer";
          case O:
            var t = e;
            return ce(t._context) + ".Provider";
          case l:
            return Le(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case R: {
            var i = e, s = i._payload, o = i._init;
            try {
              return b(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, M = 0, le, de, ve, pe, ge, he, ye;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ue() {
      {
        if (M === 0) {
          le = console.log, de = console.info, ve = console.warn, pe = console.error, ge = console.group, he = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        M++;
      }
    }
    function Ve() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: le
            }),
            info: w({}, e, {
              value: de
            }),
            warn: w({}, e, {
              value: ve
            }),
            error: w({}, e, {
              value: pe
            }),
            group: w({}, e, {
              value: ge
            }),
            groupCollapsed: w({}, e, {
              value: he
            }),
            groupEnd: w({}, e, {
              value: ye
            })
          });
        }
        M < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = v.ReactCurrentDispatcher, ee;
    function K(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            ee = n && n[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, G;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Ne();
    }
    function be(e, r) {
      if (!e || re)
        return "";
      {
        var t = G.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      re = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Q.current, Q.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), p = n.stack.split(`
`), f = a.length - 1, c = p.length - 1; f >= 1 && c >= 0 && a[f] !== p[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (a[f] !== p[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || a[f] !== p[c]) {
                    var h = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, h), h;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = s, Ve(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", C = A ? K(A) : "";
      return typeof e == "function" && G.set(e, C), C;
    }
    function Be(e, r, t) {
      return be(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Je(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case T:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Be(e.render);
          case m:
            return z(e.type, r, t);
          case R: {
            var n = e, i = n._payload, s = n._init;
            try {
              return z(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, Ee = {}, Re = v.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (X(i), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), X(null)), a instanceof Error && !(a.message in Ee) && (Ee[a.message] = !0, X(i), u("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var Ke = Array.isArray;
    function te(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Te(e) {
      if (ze(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), _e(e);
    }
    var $ = v.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Oe, ne;
    ne = {};
    function He(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = b($.current.type);
        ne[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b($.current.type), e.ref), ne[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Se || (Se = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (Te(t), a = "" + t), Ze(r) && (Te(r.key), a = "" + r.key), He(r) && (p = r.ref, Qe(r, i));
        for (s in r)
          W.call(r, s) && !Xe.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            o[s] === void 0 && (o[s] = f[s]);
        }
        if (a || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, c), p && rr(o, c);
        }
        return tr(e, a, p, i, n, $.current, o);
      }
    }
    var ae = v.ReactCurrentOwner, we = v.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Ce() {
      {
        if (ae.current) {
          var e = b(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Pe = {};
    function or(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ae.current && (n = " It was passed a child from " + b(e._owner.type) + "."), F(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ie(n) && je(n, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = N(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              ie(o.value) && je(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var i = b(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var ke = {};
    function De(e, r, t, n, i, s) {
      {
        var o = Ye(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ar();
          p ? a += p : a += Ce();
          var f;
          e === null ? f = "null" : te(e) ? f = "array" : e !== void 0 && e.$$typeof === y ? (f = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var c = nr(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (te(h)) {
                for (var A = 0; A < h.length; A++)
                  xe(h[A], e);
                Object.freeze && Object.freeze(h);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(h, e);
        }
        if (W.call(r, "key")) {
          var C = b(e), g = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), se = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[C + se]) {
            var dr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, C, dr, C), ke[C + se] = !0;
          }
        }
        return e === _ ? sr(c) : ir(c), c;
      }
    }
    function ur(e, r, t) {
      return De(e, r, t, !0);
    }
    function fr(e, r, t) {
      return De(e, r, t, !1);
    }
    var cr = fr, lr = ur;
    L.Fragment = _, L.jsx = cr, L.jsxs = lr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ue.exports = gr() : ue.exports = hr();
var yr = ue.exports;
const I = "0", U = "00", mr = "000", Er = ({
  date: S
}) => {
  const [y, j] = P(0), [_, x] = P(mr), [k, O] = P(U), [E, l] = P(U), [T, d] = P(U), [m, R] = P(U), [D, V] = P(U), H = () => {
    j((v) => v - 1);
  }, N = pr(() => {
    const v = y, u = y / 60, B = u / 60, J = B / 24, q = J / 30, Z = q / 12;
    V(
      Math.floor(v % 60).toString().padStart(2, I)
    ), R(
      Math.floor(u % 60).toString().padStart(2, I)
    ), d(
      Math.floor(B % 24).toString().padStart(2, I)
    ), l(
      Math.floor(J % 30).toString().padStart(2, I)
    ), O(
      Math.floor(q % 24).toString().padStart(2, I)
    ), x(
      Math.floor(Z % 1e3).toString().padStart(3, I)
    );
  }, [y]);
  return Fe(() => {
    if (typeof S > "u")
      return;
    const v = S.getTime(), u = (/* @__PURE__ */ new Date()).getTime();
    u >= v || j(Math.ceil((v - u) / 1e3));
  }, [S]), Fe(() => {
    if (y >= 0) {
      const v = setTimeout(() => {
        H();
      }, 1e3);
      return N(), () => {
        clearTimeout(v);
      };
    }
  }, [y, N]), /* @__PURE__ */ yr.jsxs("h1", { className: "font-mono", children: [
    _,
    ":",
    k,
    ":",
    E,
    ":",
    T,
    ":",
    m,
    ":",
    D
  ] });
};
export {
  Er as CountUntil
};
//# sourceMappingURL=index.es.js.map
