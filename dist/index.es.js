import ae, { memo as se, useState as p, useCallback as ce, useEffect as re } from "react";
var B = { exports: {} }, y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var te;
function ue() {
  if (te) return y;
  te = 1;
  var c = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function s(u, l, i) {
    var R = null;
    if (i !== void 0 && (R = "" + i), l.key !== void 0 && (R = "" + l.key), "key" in l) {
      i = {};
      for (var T in l)
        T !== "key" && (i[T] = l[T]);
    } else i = l;
    return l = i.ref, {
      $$typeof: c,
      type: u,
      key: R,
      ref: l !== void 0 ? l : null,
      props: i
    };
  }
  return y.Fragment = E, y.jsx = s, y.jsxs = s, y;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function le() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === f ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case U:
          return "Profiler";
        case $:
          return "StrictMode";
        case V:
          return "Suspense";
        case G:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case I:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case W:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function E(e) {
      return "" + e;
    }
    function s(e) {
      try {
        E(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), E(e);
      }
    }
    function u(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = m.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function R(e) {
      if (O.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function T(e, r) {
      function t() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function D() {
      var e = c(this.type);
      return Z[e] || (Z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function F(e, r, t, n, v, d, L, H) {
      return t = d.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: d,
        _owner: v
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, r, t, n, v, d, L, H) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (M(o)) {
            for (n = 0; n < o.length; n++)
              x(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(o);
      if (O.call(r, "key")) {
        o = c(e);
        var h = Object.keys(r).filter(function(oe) {
          return oe !== "key";
        });
        n = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", ee[o + n] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          h,
          o
        ), ee[o + n] = !0);
      }
      if (o = null, t !== void 0 && (s(t), o = "" + t), R(r) && (s(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var X in r)
          X !== "key" && (t[X] = r[X]);
      } else t = r;
      return o && T(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), F(
        e,
        o,
        d,
        v,
        l(),
        t,
        L,
        H
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var _ = ae, P = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), q = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), f = Symbol.for("react.client.reference"), m = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, M = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, Z = {}, Q = _["react-stack-bottom-frame"].bind(
      _,
      i
    )(), K = S(u(i)), ee = {};
    A.Fragment = k, A.jsx = function(e, r, t, n, v) {
      var d = 1e4 > m.recentlyCreatedOwnerStacks++;
      return b(
        e,
        r,
        t,
        !1,
        n,
        v,
        d ? Error("react-stack-top-frame") : Q,
        d ? S(u(e)) : K
      );
    }, A.jsxs = function(e, r, t, n, v) {
      var d = 1e4 > m.recentlyCreatedOwnerStacks++;
      return b(
        e,
        r,
        t,
        !0,
        n,
        v,
        d ? Error("react-stack-top-frame") : Q,
        d ? S(u(e)) : K
      );
    };
  }()), A;
}
process.env.NODE_ENV === "production" ? B.exports = ue() : B.exports = le();
var a = B.exports;
const g = "0", w = "00", ie = "000", de = ({
  date: c,
  className: E = "flex font-mono",
  requireLabels: s = !1,
  seperator: u = ":",
  displayYears: l = !0,
  displayMonths: i = !0,
  displayDays: R = !0,
  displayHours: T = !0,
  displayMinutes: D = !0,
  displaySeconds: F = !0
}) => {
  const [b, x] = p(0), [_, P] = p(ie), [I, k] = p(w), [$, U] = p(w), [W, q] = p(w), [z, V] = p(w), [G, J] = p(w), N = () => {
    x((f) => f - 1);
  }, C = ce(() => {
    const f = b, m = b / 60, O = m / 60, M = O / 24, S = M / 30, Y = S / 12;
    J(
      Math.floor(f % 60).toString().padStart(2, g)
    ), V(
      Math.floor(m % 60).toString().padStart(2, g)
    ), q(
      Math.floor(O % 24).toString().padStart(2, g)
    ), U(
      Math.floor(M % 30).toString().padStart(2, g)
    ), k(
      Math.floor(S % 24).toString().padStart(2, g)
    ), P(
      Math.floor(Y % 1e3).toString().padStart(3, g)
    );
  }, [b]);
  return re(() => {
    if (typeof c > "u")
      return;
    const f = c.getTime(), m = (/* @__PURE__ */ new Date()).getTime();
    m >= f || x(Math.ceil((f - m) / 1e3));
  }, [c]), re(() => {
    if (b >= 0) {
      const f = setTimeout(() => {
        N();
      }, 1e3);
      return C(), () => {
        clearTimeout(f);
      };
    }
  }, [b, C]), /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: E, children: [
    l && /* @__PURE__ */ a.jsx(
      j,
      {
        label: "yyy",
        required: s,
        value: _,
        seperator: u
      }
    ),
    i && /* @__PURE__ */ a.jsx(
      j,
      {
        label: "MM",
        required: s,
        value: I,
        seperator: u
      }
    ),
    R && /* @__PURE__ */ a.jsx(
      j,
      {
        label: "dd",
        required: s,
        value: $,
        seperator: u
      }
    ),
    T && /* @__PURE__ */ a.jsx(
      j,
      {
        label: "HH",
        required: s,
        value: W,
        seperator: u
      }
    ),
    D && /* @__PURE__ */ a.jsx(
      j,
      {
        label: "mm",
        required: s,
        value: z,
        seperator: u
      }
    ),
    F && /* @__PURE__ */ a.jsx(
      j,
      {
        label: "ss",
        required: s,
        value: G
      }
    )
  ] }) });
}, j = se(
  ({ value: c, required: E, label: s, seperator: u }) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col space-y-4", children: [
      /* @__PURE__ */ a.jsx("p", { children: c }),
      E && /* @__PURE__ */ a.jsx("p", { children: s })
    ] }),
    /* @__PURE__ */ a.jsx("span", { children: u })
  ] })
);
export {
  de as CountUntil
};
//# sourceMappingURL=index.es.js.map
