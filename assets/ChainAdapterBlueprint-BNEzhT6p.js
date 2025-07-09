import {
  B as nr,
  o as ms,
  j as At,
  L as Wa,
  k as Ha,
  E as za,
  m as qa,
  p as vs,
  q as As,
} from "./bitcoin-DUyz2iJA.js";
const Va = Symbol(),
  Ts = Object.getPrototypeOf,
  ns = new WeakMap(),
  Ga = (t) =>
    t &&
    (ns.has(t)
      ? ns.get(t)
      : Ts(t) === Object.prototype || Ts(t) === Array.prototype),
  Za = (t) => (Ga(t) && t[Va]) || null,
  Ss = (t, e = !0) => {
    ns.set(t, e);
  },
  bn = {},
  Wn = (t) => typeof t == "object" && t !== null,
  lt = new WeakMap(),
  lr = new WeakSet(),
  Ka = (
    t = Object.is,
    e = (c, d) => new Proxy(c, d),
    r = (c) =>
      Wn(c) &&
      !lr.has(c) &&
      (Array.isArray(c) || !(Symbol.iterator in c)) &&
      !(c instanceof WeakMap) &&
      !(c instanceof WeakSet) &&
      !(c instanceof Error) &&
      !(c instanceof Number) &&
      !(c instanceof Date) &&
      !(c instanceof String) &&
      !(c instanceof RegExp) &&
      !(c instanceof ArrayBuffer),
    n = (c) => {
      switch (c.status) {
        case "fulfilled":
          return c.value;
        case "rejected":
          throw c.reason;
        default:
          throw c;
      }
    },
    s = new WeakMap(),
    a = (c, d, f = n) => {
      const m = s.get(c);
      if ((m == null ? void 0 : m[0]) === d) return m[1];
      const p = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c));
      return (
        Ss(p, !0),
        s.set(c, [d, p]),
        Reflect.ownKeys(c).forEach((E) => {
          if (Object.getOwnPropertyDescriptor(p, E)) return;
          const w = Reflect.get(c, E),
            { enumerable: S } = Reflect.getOwnPropertyDescriptor(c, E),
            R = { value: w, enumerable: S, configurable: !0 };
          if (lr.has(w)) Ss(w, !1);
          else if (w instanceof Promise) delete R.value, (R.get = () => f(w));
          else if (lt.has(w)) {
            const [H, $] = lt.get(w);
            R.value = a(H, $(), f);
          }
          Object.defineProperty(p, E, R);
        }),
        Object.preventExtensions(p)
      );
    },
    o = new WeakMap(),
    i = [1, 1],
    u = (c) => {
      if (!Wn(c)) throw new Error("object required");
      const d = o.get(c);
      if (d) return d;
      let f = i[0];
      const m = new Set(),
        p = (D, z = ++i[0]) => {
          f !== z && ((f = z), m.forEach((O) => O(D, z)));
        };
      let E = i[1];
      const w = (D = ++i[1]) => (
          E !== D &&
            !m.size &&
            ((E = D),
            R.forEach(([z]) => {
              const O = z[1](D);
              O > f && (f = O);
            })),
          f
        ),
        S = (D) => (z, O) => {
          const ne = [...z];
          (ne[1] = [D, ...ne[1]]), p(ne, O);
        },
        R = new Map(),
        H = (D, z) => {
          if ((bn ? "production" : void 0) !== "production" && R.has(D))
            throw new Error("prop listener already exists");
          if (m.size) {
            const O = z[3](S(D));
            R.set(D, [z, O]);
          } else R.set(D, [z]);
        },
        $ = (D) => {
          var z;
          const O = R.get(D);
          O && (R.delete(D), (z = O[1]) == null || z.call(O));
        },
        G = (D) => (
          m.add(D),
          m.size === 1 &&
            R.forEach(([O, ne], it) => {
              if ((bn ? "production" : void 0) !== "production" && ne)
                throw new Error("remove already exists");
              const Qe = O[3](S(it));
              R.set(it, [O, Qe]);
            }),
          () => {
            m.delete(D),
              m.size === 0 &&
                R.forEach(([O, ne], it) => {
                  ne && (ne(), R.set(it, [O]));
                });
          }
        ),
        le = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)),
        Te = e(le, {
          deleteProperty(D, z) {
            const O = Reflect.get(D, z);
            $(z);
            const ne = Reflect.deleteProperty(D, z);
            return ne && p(["delete", [z], O]), ne;
          },
          set(D, z, O, ne) {
            const it = Reflect.has(D, z),
              Qe = Reflect.get(D, z, ne);
            if (it && (t(Qe, O) || (o.has(O) && t(Qe, o.get(O))))) return !0;
            $(z), Wn(O) && (O = Za(O) || O);
            let h = O;
            if (O instanceof Promise)
              O.then((_) => {
                (O.status = "fulfilled"), (O.value = _), p(["resolve", [z], _]);
              }).catch((_) => {
                (O.status = "rejected"), (O.reason = _), p(["reject", [z], _]);
              });
            else {
              !lt.has(O) && r(O) && (h = u(O));
              const _ = !lr.has(h) && lt.get(h);
              _ && H(z, _);
            }
            return Reflect.set(D, z, h, ne), p(["set", [z], O, Qe]), !0;
          },
        });
      o.set(c, Te);
      const ot = [le, w, a, G];
      return (
        lt.set(Te, ot),
        Reflect.ownKeys(c).forEach((D) => {
          const z = Object.getOwnPropertyDescriptor(c, D);
          "value" in z && ((Te[D] = c[D]), delete z.value, delete z.writable),
            Object.defineProperty(le, D, z);
        }),
        Te
      );
    }
  ) => [u, lt, lr, t, e, r, n, s, a, o, i],
  [Ya] = Ka();
function me(t = {}) {
  return Ya(t);
}
function Pe(t, e, r) {
  const n = lt.get(t);
  (bn ? "production" : void 0) !== "production" &&
    !n &&
    console.warn("Please use proxy object");
  let s;
  const a = [],
    o = n[3];
  let i = !1;
  const c = o((d) => {
    a.push(d),
      s ||
        (s = Promise.resolve().then(() => {
          (s = void 0), i && e(a.splice(0));
        }));
  });
  return (
    (i = !0),
    () => {
      (i = !1), c();
    }
  );
}
function gr(t, e) {
  const r = lt.get(t);
  (bn ? "production" : void 0) !== "production" &&
    !r &&
    console.warn("Please use proxy object");
  const [n, s, a] = r;
  return a(n, s(), e);
}
function Zt(t) {
  return lr.add(t), t;
}
function Ue(t, e, r, n) {
  let s = t[e];
  return Pe(t, () => {
    const a = t[e];
    Object.is(s, a) || r((s = a));
  });
}
function Ja(t) {
  const e = me({
    data: Array.from([]),
    has(r) {
      return this.data.some((n) => n[0] === r);
    },
    set(r, n) {
      const s = this.data.find((a) => a[0] === r);
      return s ? (s[1] = n) : this.data.push([r, n]), this;
    },
    get(r) {
      var n;
      return (n = this.data.find((s) => s[0] === r)) == null ? void 0 : n[1];
    },
    delete(r) {
      const n = this.data.findIndex((s) => s[0] === r);
      return n === -1 ? !1 : (this.data.splice(n, 1), !0);
    },
    clear() {
      this.data.splice(0);
    },
    get size() {
      return this.data.length;
    },
    toJSON() {
      return new Map(this.data);
    },
    forEach(r) {
      this.data.forEach((n) => {
        r(n[1], n[0], this);
      });
    },
    keys() {
      return this.data.map((r) => r[0]).values();
    },
    values() {
      return this.data.map((r) => r[1]).values();
    },
    entries() {
      return new Map(this.data).entries();
    },
    get [Symbol.toStringTag]() {
      return "Map";
    },
    [Symbol.iterator]() {
      return this.entries();
    },
  });
  return (
    Object.defineProperties(e, {
      data: { enumerable: !1 },
      size: { enumerable: !1 },
      toJSON: { enumerable: !1 },
    }),
    Object.seal(e),
    e
  );
}
var Ge =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function gs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function Xa(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (n) {
      var s = Object.getOwnPropertyDescriptor(t, n);
      Object.defineProperty(
        r,
        n,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }
      );
    }),
    r
  );
}
const Qa = {
  caipNetworkIdToNumber(t) {
    return t ? Number(t.split(":")[1]) : void 0;
  },
  parseEvmChainId(t) {
    return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t;
  },
  getNetworksByNamespace(t, e) {
    return (t == null ? void 0 : t.filter((r) => r.chainNamespace === e)) || [];
  },
  getFirstNetworkByNamespace(t, e) {
    return this.getNetworksByNamespace(t, e)[0];
  },
};
var eo = 20,
  to = 1,
  sr = 1e6,
  ro = 1e6,
  no = -7,
  so = 21,
  ao = !1,
  tn = "[big.js] ",
  xt = tn + "Invalid ",
  Ln = xt + "decimal places",
  oo = xt + "rounding mode",
  ia = tn + "Division by zero",
  re = {},
  Ke = void 0,
  io = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function ca() {
  function t(e) {
    var r = this;
    if (!(r instanceof t)) return e === Ke ? ca() : new t(e);
    if (e instanceof t) (r.s = e.s), (r.e = e.e), (r.c = e.c.slice());
    else {
      if (typeof e != "string") {
        if (t.strict === !0 && typeof e != "bigint")
          throw TypeError(xt + "value");
        e = e === 0 && 1 / e < 0 ? "-0" : String(e);
      }
      co(r, e);
    }
    r.constructor = t;
  }
  return (
    (t.prototype = re),
    (t.DP = eo),
    (t.RM = to),
    (t.NE = no),
    (t.PE = so),
    (t.strict = ao),
    (t.roundDown = 0),
    (t.roundHalfUp = 1),
    (t.roundHalfEven = 2),
    (t.roundUp = 3),
    t
  );
}
function co(t, e) {
  var r, n, s;
  if (!io.test(e)) throw Error(xt + "number");
  for (
    t.s = e.charAt(0) == "-" ? ((e = e.slice(1)), -1) : 1,
      (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
      (n = e.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +e.slice(n + 1)), (e = e.substring(0, n)))
        : r < 0 && (r = e.length),
      s = e.length,
      n = 0;
    n < s && e.charAt(n) == "0";

  )
    ++n;
  if (n == s) t.c = [(t.e = 0)];
  else {
    for (; s > 0 && e.charAt(--s) == "0"; );
    for (t.e = r - n - 1, t.c = [], r = 0; n <= s; ) t.c[r++] = +e.charAt(n++);
  }
  return t;
}
function Pt(t, e, r, n) {
  var s = t.c;
  if (
    (r === Ke && (r = t.constructor.RM),
    r !== 0 && r !== 1 && r !== 2 && r !== 3)
  )
    throw Error(oo);
  if (e < 1)
    (n =
      (r === 3 && (n || !!s[0])) ||
      (e === 0 &&
        ((r === 1 && s[0] >= 5) ||
          (r === 2 && (s[0] > 5 || (s[0] === 5 && (n || s[1] !== Ke))))))),
      (s.length = 1),
      n ? ((t.e = t.e - e + 1), (s[0] = 1)) : (s[0] = t.e = 0);
  else if (e < s.length) {
    if (
      ((n =
        (r === 1 && s[e] >= 5) ||
        (r === 2 &&
          (s[e] > 5 ||
            (s[e] === 5 && (n || s[e + 1] !== Ke || s[e - 1] & 1)))) ||
        (r === 3 && (n || !!s[0]))),
      (s.length = e),
      n)
    ) {
      for (; ++s[--e] > 9; )
        if (((s[e] = 0), e === 0)) {
          ++t.e, s.unshift(1);
          break;
        }
    }
    for (e = s.length; !s[--e]; ) s.pop();
  }
  return t;
}
function Ut(t, e, r) {
  var n = t.e,
    s = t.c.join(""),
    a = s.length;
  if (e)
    s =
      s.charAt(0) + (a > 1 ? "." + s.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
  else if (n < 0) {
    for (; ++n; ) s = "0" + s;
    s = "0." + s;
  } else if (n > 0)
    if (++n > a) for (n -= a; n--; ) s += "0";
    else n < a && (s = s.slice(0, n) + "." + s.slice(n));
  else a > 1 && (s = s.charAt(0) + "." + s.slice(1));
  return t.s < 0 && r ? "-" + s : s;
}
re.abs = function () {
  var t = new this.constructor(this);
  return (t.s = 1), t;
};
re.cmp = function (t) {
  var e,
    r = this,
    n = r.c,
    s = (t = new r.constructor(t)).c,
    a = r.s,
    o = t.s,
    i = r.e,
    u = t.e;
  if (!n[0] || !s[0]) return n[0] ? a : s[0] ? -o : 0;
  if (a != o) return a;
  if (((e = a < 0), i != u)) return (i > u) ^ e ? 1 : -1;
  for (o = (i = n.length) < (u = s.length) ? i : u, a = -1; ++a < o; )
    if (n[a] != s[a]) return (n[a] > s[a]) ^ e ? 1 : -1;
  return i == u ? 0 : (i > u) ^ e ? 1 : -1;
};
re.div = function (t) {
  var e = this,
    r = e.constructor,
    n = e.c,
    s = (t = new r(t)).c,
    a = e.s == t.s ? 1 : -1,
    o = r.DP;
  if (o !== ~~o || o < 0 || o > sr) throw Error(Ln);
  if (!s[0]) throw Error(ia);
  if (!n[0]) return (t.s = a), (t.c = [(t.e = 0)]), t;
  var i,
    u,
    c,
    d,
    f,
    m = s.slice(),
    p = (i = s.length),
    E = n.length,
    w = n.slice(0, i),
    S = w.length,
    R = t,
    H = (R.c = []),
    $ = 0,
    G = o + (R.e = e.e - t.e) + 1;
  for (R.s = a, a = G < 0 ? 0 : G, m.unshift(0); S++ < i; ) w.push(0);
  do {
    for (c = 0; c < 10; c++) {
      if (i != (S = w.length)) d = i > S ? 1 : -1;
      else
        for (f = -1, d = 0; ++f < i; )
          if (s[f] != w[f]) {
            d = s[f] > w[f] ? 1 : -1;
            break;
          }
      if (d < 0) {
        for (u = S == i ? s : m; S; ) {
          if (w[--S] < u[S]) {
            for (f = S; f && !w[--f]; ) w[f] = 9;
            --w[f], (w[S] += 10);
          }
          w[S] -= u[S];
        }
        for (; !w[0]; ) w.shift();
      } else break;
    }
    (H[$++] = d ? c : ++c), w[0] && d ? (w[S] = n[p] || 0) : (w = [n[p]]);
  } while ((p++ < E || w[0] !== Ke) && a--);
  return (
    !H[0] && $ != 1 && (H.shift(), R.e--, G--),
    $ > G && Pt(R, G, r.RM, w[0] !== Ke),
    R
  );
};
re.eq = function (t) {
  return this.cmp(t) === 0;
};
re.gt = function (t) {
  return this.cmp(t) > 0;
};
re.gte = function (t) {
  return this.cmp(t) > -1;
};
re.lt = function (t) {
  return this.cmp(t) < 0;
};
re.lte = function (t) {
  return this.cmp(t) < 1;
};
re.minus = re.sub = function (t) {
  var e,
    r,
    n,
    s,
    a = this,
    o = a.constructor,
    i = a.s,
    u = (t = new o(t)).s;
  if (i != u) return (t.s = -u), a.plus(t);
  var c = a.c.slice(),
    d = a.e,
    f = t.c,
    m = t.e;
  if (!c[0] || !f[0])
    return f[0] ? (t.s = -u) : c[0] ? (t = new o(a)) : (t.s = 1), t;
  if ((i = d - m)) {
    for (
      (s = i < 0) ? ((i = -i), (n = c)) : ((m = d), (n = f)),
        n.reverse(),
        u = i;
      u--;

    )
      n.push(0);
    n.reverse();
  } else
    for (r = ((s = c.length < f.length) ? c : f).length, i = u = 0; u < r; u++)
      if (c[u] != f[u]) {
        s = c[u] < f[u];
        break;
      }
  if (
    (s && ((n = c), (c = f), (f = n), (t.s = -t.s)),
    (u = (r = f.length) - (e = c.length)) > 0)
  )
    for (; u--; ) c[e++] = 0;
  for (u = e; r > i; ) {
    if (c[--r] < f[r]) {
      for (e = r; e && !c[--e]; ) c[e] = 9;
      --c[e], (c[r] += 10);
    }
    c[r] -= f[r];
  }
  for (; c[--u] === 0; ) c.pop();
  for (; c[0] === 0; ) c.shift(), --m;
  return c[0] || ((t.s = 1), (c = [(m = 0)])), (t.c = c), (t.e = m), t;
};
re.mod = function (t) {
  var e,
    r = this,
    n = r.constructor,
    s = r.s,
    a = (t = new n(t)).s;
  if (!t.c[0]) throw Error(ia);
  return (
    (r.s = t.s = 1),
    (e = t.cmp(r) == 1),
    (r.s = s),
    (t.s = a),
    e
      ? new n(r)
      : ((s = n.DP),
        (a = n.RM),
        (n.DP = n.RM = 0),
        (r = r.div(t)),
        (n.DP = s),
        (n.RM = a),
        this.minus(r.times(t)))
  );
};
re.neg = function () {
  var t = new this.constructor(this);
  return (t.s = -t.s), t;
};
re.plus = re.add = function (t) {
  var e,
    r,
    n,
    s = this,
    a = s.constructor;
  if (((t = new a(t)), s.s != t.s)) return (t.s = -t.s), s.minus(t);
  var o = s.e,
    i = s.c,
    u = t.e,
    c = t.c;
  if (!i[0] || !c[0]) return c[0] || (i[0] ? (t = new a(s)) : (t.s = s.s)), t;
  if (((i = i.slice()), (e = o - u))) {
    for (e > 0 ? ((u = o), (n = c)) : ((e = -e), (n = i)), n.reverse(); e--; )
      n.push(0);
    n.reverse();
  }
  for (
    i.length - c.length < 0 && ((n = c), (c = i), (i = n)), e = c.length, r = 0;
    e;
    i[e] %= 10
  )
    r = ((i[--e] = i[e] + c[e] + r) / 10) | 0;
  for (r && (i.unshift(r), ++u), e = i.length; i[--e] === 0; ) i.pop();
  return (t.c = i), (t.e = u), t;
};
re.pow = function (t) {
  var e = this,
    r = new e.constructor("1"),
    n = r,
    s = t < 0;
  if (t !== ~~t || t < -1e6 || t > ro) throw Error(xt + "exponent");
  for (s && (t = -t); t & 1 && (n = n.times(e)), (t >>= 1), !!t; )
    e = e.times(e);
  return s ? r.div(n) : n;
};
re.prec = function (t, e) {
  if (t !== ~~t || t < 1 || t > sr) throw Error(xt + "precision");
  return Pt(new this.constructor(this), t, e);
};
re.round = function (t, e) {
  if (t === Ke) t = 0;
  else if (t !== ~~t || t < -1e6 || t > sr) throw Error(Ln);
  return Pt(new this.constructor(this), t + this.e + 1, e);
};
re.sqrt = function () {
  var t,
    e,
    r,
    n = this,
    s = n.constructor,
    a = n.s,
    o = n.e,
    i = new s("0.5");
  if (!n.c[0]) return new s(n);
  if (a < 0) throw Error(tn + "No square root");
  (a = Math.sqrt(+Ut(n, !0, !0))),
    a === 0 || a === 1 / 0
      ? ((e = n.c.join("")),
        (e.length + o) & 1 || (e += "0"),
        (a = Math.sqrt(e)),
        (o = (((o + 1) / 2) | 0) - (o < 0 || o & 1)),
        (t = new s(
          (a == 1 / 0
            ? "5e"
            : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + o
        )))
      : (t = new s(a + "")),
    (o = t.e + (s.DP += 4));
  do (r = t), (t = i.times(r.plus(n.div(r))));
  while (r.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
  return Pt(t, (s.DP -= 4) + t.e + 1, s.RM);
};
re.times = re.mul = function (t) {
  var e,
    r = this,
    n = r.constructor,
    s = r.c,
    a = (t = new n(t)).c,
    o = s.length,
    i = a.length,
    u = r.e,
    c = t.e;
  if (((t.s = r.s == t.s ? 1 : -1), !s[0] || !a[0]))
    return (t.c = [(t.e = 0)]), t;
  for (
    t.e = u + c,
      o < i && ((e = s), (s = a), (a = e), (c = o), (o = i), (i = c)),
      e = new Array((c = o + i));
    c--;

  )
    e[c] = 0;
  for (u = i; u--; ) {
    for (i = 0, c = o + u; c > u; )
      (i = e[c] + a[u] * s[c - u - 1] + i),
        (e[c--] = i % 10),
        (i = (i / 10) | 0);
    e[c] = i;
  }
  for (i ? ++t.e : e.shift(), u = e.length; !e[--u]; ) e.pop();
  return (t.c = e), t;
};
re.toExponential = function (t, e) {
  var r = this,
    n = r.c[0];
  if (t !== Ke) {
    if (t !== ~~t || t < 0 || t > sr) throw Error(Ln);
    for (r = Pt(new r.constructor(r), ++t, e); r.c.length < t; ) r.c.push(0);
  }
  return Ut(r, !0, !!n);
};
re.toFixed = function (t, e) {
  var r = this,
    n = r.c[0];
  if (t !== Ke) {
    if (t !== ~~t || t < 0 || t > sr) throw Error(Ln);
    for (
      r = Pt(new r.constructor(r), t + r.e + 1, e), t = t + r.e + 1;
      r.c.length < t;

    )
      r.c.push(0);
  }
  return Ut(r, !1, !!n);
};
re[Symbol.for("nodejs.util.inspect.custom")] =
  re.toJSON =
  re.toString =
    function () {
      var t = this,
        e = t.constructor;
      return Ut(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
    };
re.toNumber = function () {
  var t = +Ut(this, !0, !0);
  if (this.constructor.strict === !0 && !this.eq(t.toString()))
    throw Error(tn + "Imprecise conversion");
  return t;
};
re.toPrecision = function (t, e) {
  var r = this,
    n = r.constructor,
    s = r.c[0];
  if (t !== Ke) {
    if (t !== ~~t || t < 1 || t > sr) throw Error(xt + "precision");
    for (r = Pt(new n(r), t, e); r.c.length < t; ) r.c.push(0);
  }
  return Ut(r, t <= r.e || r.e <= n.NE || r.e >= n.PE, !!s);
};
re.valueOf = function () {
  var t = this,
    e = t.constructor;
  if (e.strict === !0) throw Error(tn + "valueOf disallowed");
  return Ut(t, t.e <= e.NE || t.e >= e.PE, !0);
};
var ar = ca();
const on = {
    bigNumber(t) {
      return t ? new ar(t) : new ar(0);
    },
    multiply(t, e) {
      if (t === void 0 || e === void 0) return new ar(0);
      const r = new ar(t),
        n = new ar(e);
      return r.times(n);
    },
    formatNumberToLocalString(t, e = 2) {
      return t === void 0
        ? "0.00"
        : typeof t == "number"
        ? t.toLocaleString("en-US", {
            maximumFractionDigits: e,
            minimumFractionDigits: e,
          })
        : parseFloat(t).toLocaleString("en-US", {
            maximumFractionDigits: e,
            minimumFractionDigits: e,
          });
    },
    parseLocalStringToNumber(t) {
      return t === void 0 ? 0 : parseFloat(t.replace(/,/gu, ""));
    },
  },
  lo = [
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
  ],
  uo = [
    {
      type: "function",
      name: "approve",
      stateMutability: "nonpayable",
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ type: "bool" }],
    },
  ],
  fo = [
    {
      type: "function",
      name: "transfer",
      stateMutability: "nonpayable",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [],
    },
    {
      type: "function",
      name: "transferFrom",
      stateMutability: "nonpayable",
      inputs: [
        { name: "sender", type: "address" },
        { name: "recipient", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      outputs: [{ name: "", type: "bool" }],
    },
  ],
  P = {
    WC_NAME_SUFFIX: ".reown.id",
    WC_NAME_SUFFIX_LEGACY: ".wcn.id",
    BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
    PULSE_API_URL: "https://pulse.walletconnect.org",
    W3M_API_URL: "https://api.web3modal.org",
    CONNECTOR_ID: {
      WALLET_CONNECT: "walletConnect",
      INJECTED: "injected",
      WALLET_STANDARD: "announced",
      COINBASE: "coinbaseWallet",
      COINBASE_SDK: "coinbaseWalletSDK",
      SAFE: "safe",
      LEDGER: "ledger",
      OKX: "okx",
      EIP6963: "eip6963",
      AUTH: "ID_AUTH",
    },
    CONNECTOR_NAMES: { AUTH: "Auth" },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
    LIMITS: { PENDING_TRANSACTIONS: 99 },
    CHAIN: {
      EVM: "eip155",
      SOLANA: "solana",
      POLKADOT: "polkadot",
      BITCOIN: "bip122",
    },
    CHAIN_NAME_MAP: {
      eip155: "EVM Networks",
      solana: "Solana",
      polkadot: "Polkadot",
      bip122: "Bitcoin",
    },
    ADAPTER_TYPES: {
      BITCOIN: "bitcoin",
      SOLANA: "solana",
      WAGMI: "wagmi",
      ETHERS: "ethers",
      ETHERS5: "ethers5",
    },
    USDT_CONTRACT_ADDRESSES: [
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
      "0x919C1c267BC06a7039e03fcc2eF738525769109c",
      "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
      "0x55d398326f99059fF775485246999027B3197955",
      "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    ],
    HTTP_STATUS_CODES: { SERVICE_UNAVAILABLE: 503, FORBIDDEN: 403 },
    UNSUPPORTED_NETWORK_NAME: "Unknown Network",
  },
  po = {
    getERC20Abi: (t) => (P.USDT_CONTRACT_ADDRESSES.includes(t) ? fo : lo),
    getSwapAbi: () => uo,
  },
  F = {
    WALLET_ID: "@appkit/wallet_id",
    WALLET_NAME: "@appkit/wallet_name",
    SOLANA_WALLET: "@appkit/solana_wallet",
    SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
    ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
    CONNECTED_SOCIAL: "@appkit/connected_social",
    CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
    RECENT_WALLETS: "@appkit/recent_wallets",
    DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    ACTIVE_NAMESPACE: "@appkit/active_namespace",
    CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
    CONNECTION_STATUS: "@appkit/connection_status",
    SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
    SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
    TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
    NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
    PORTFOLIO_CACHE: "@appkit/portfolio_cache",
    ENS_CACHE: "@appkit/ens_cache",
    IDENTITY_CACHE: "@appkit/identity_cache",
    PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
  };
function Hn(t) {
  if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  return `@appkit/${t}:connected_connector_id`;
}
const B = {
  setItem(t, e) {
    ur() && e !== void 0 && localStorage.setItem(t, e);
  },
  getItem(t) {
    if (ur()) return localStorage.getItem(t) || void 0;
  },
  removeItem(t) {
    ur() && localStorage.removeItem(t);
  },
  clear() {
    ur() && localStorage.clear();
  },
};
function ur() {
  return typeof window < "u" && typeof localStorage < "u";
}
function ft(t, e) {
  return e === "light"
    ? {
        "--w3m-accent":
          (t == null ? void 0 : t["--w3m-accent"]) || "hsla(231, 100%, 70%, 1)",
        "--w3m-background": "#fff",
      }
    : {
        "--w3m-accent":
          (t == null ? void 0 : t["--w3m-accent"]) || "hsla(230, 100%, 67%, 1)",
        "--w3m-background": "#121313",
      };
}
var Ns = {};
const zn =
    (typeof process < "u" && typeof Ns < "u"
      ? Ns.NEXT_PUBLIC_SECURE_SITE_ORIGIN
      : void 0) || "https://secure.walletconnect.org",
  td = [
    {
      label: "Coinbase",
      name: "coinbase",
      feeRange: "1-2%",
      url: "",
      supportedChains: ["eip155"],
    },
    {
      label: "Meld.io",
      name: "meld",
      feeRange: "1-2%",
      url: "https://meldcrypto.com",
      supportedChains: ["eip155", "solana"],
    },
  ],
  rd = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",
  je = {
    FOUR_MINUTES_MS: 24e4,
    TEN_SEC_MS: 1e4,
    FIVE_SEC_MS: 5e3,
    THREE_SEC_MS: 3e3,
    ONE_SEC_MS: 1e3,
    SECURE_SITE: zn,
    SECURE_SITE_DASHBOARD: `${zn}/dashboard`,
    SECURE_SITE_FAVICON: `${zn}/images/favicon.png`,
    RESTRICTED_TIMEZONES: [
      "ASIA/SHANGHAI",
      "ASIA/URUMQI",
      "ASIA/CHONGQING",
      "ASIA/HARBIN",
      "ASIA/KASHGAR",
      "ASIA/MACAU",
      "ASIA/HONG_KONG",
      "ASIA/MACAO",
      "ASIA/BEIJING",
      "ASIA/HARBIN",
    ],
    WC_COINBASE_PAY_SDK_CHAINS: [
      "ethereum",
      "arbitrum",
      "polygon",
      "berachain",
      "avalanche-c-chain",
      "optimism",
      "celo",
      "base",
    ],
    WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum",
    WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
      Ethereum: "ethereum",
      "Arbitrum One": "arbitrum",
      Polygon: "polygon",
      Berachain: "berachain",
      Avalanche: "avalanche-c-chain",
      "OP Mainnet": "optimism",
      Celo: "celo",
      Base: "base",
    },
    WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e",
    SWAP_SUGGESTED_TOKENS: [
      "ETH",
      "UNI",
      "1INCH",
      "AAVE",
      "SOL",
      "ADA",
      "AVAX",
      "DOT",
      "LINK",
      "NITRO",
      "GAIA",
      "MILK",
      "TRX",
      "NEAR",
      "GNO",
      "WBTC",
      "DAI",
      "WETH",
      "USDC",
      "USDT",
      "ARB",
      "BAL",
      "BICO",
      "CRV",
      "ENS",
      "MATIC",
      "OP",
    ],
    SWAP_POPULAR_TOKENS: [
      "ETH",
      "UNI",
      "1INCH",
      "AAVE",
      "SOL",
      "ADA",
      "AVAX",
      "DOT",
      "LINK",
      "NITRO",
      "GAIA",
      "MILK",
      "TRX",
      "NEAR",
      "GNO",
      "WBTC",
      "DAI",
      "WETH",
      "USDC",
      "USDT",
      "ARB",
      "BAL",
      "BICO",
      "CRV",
      "ENS",
      "MATIC",
      "OP",
      "METAL",
      "DAI",
      "CHAMP",
      "WOLF",
      "SALE",
      "BAL",
      "BUSD",
      "MUST",
      "BTCpx",
      "ROUTE",
      "HEX",
      "WELT",
      "amDAI",
      "VSQ",
      "VISION",
      "AURUM",
      "pSP",
      "SNX",
      "VC",
      "LINK",
      "CHP",
      "amUSDT",
      "SPHERE",
      "FOX",
      "GIDDY",
      "GFC",
      "OMEN",
      "OX_OLD",
      "DE",
      "WNT",
    ],
    BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"],
    SWAP_SUPPORTED_NETWORKS: [
      "eip155:1",
      "eip155:42161",
      "eip155:10",
      "eip155:324",
      "eip155:8453",
      "eip155:56",
      "eip155:137",
      "eip155:100",
      "eip155:43114",
      "eip155:250",
      "eip155:8217",
      "eip155:1313161554",
    ],
    NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"],
    ONRAMP_SUPPORTED_CHAIN_NAMESPACES: ["eip155", "solana"],
    ACTIVITY_ENABLED_CHAIN_NAMESPACES: ["eip155"],
    NATIVE_TOKEN_ADDRESS: {
      eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      solana: "So11111111111111111111111111111111111111111",
      polkadot: "0x",
      bip122: "0x",
    },
    CONVERT_SLIPPAGE_TOLERANCE: 1,
    CONNECT_LABELS: { MOBILE: "Open and continue in a new browser tab" },
    DEFAULT_FEATURES: {
      swaps: !0,
      onramp: !0,
      receive: !0,
      send: !0,
      email: !0,
      emailShowWallets: !0,
      socials: [
        "google",
        "x",
        "discord",
        "farcaster",
        "github",
        "apple",
        "facebook",
      ],
      connectorTypeOrder: [
        "walletConnect",
        "recent",
        "injected",
        "featured",
        "custom",
        "external",
        "recommended",
      ],
      history: !0,
      analytics: !0,
      allWallets: !0,
      legalCheckbox: !1,
      smartSessions: !1,
      collapseWallets: !1,
      walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
      connectMethodsOrder: void 0,
    },
    DEFAULT_ACCOUNT_TYPES: {
      bip122: "payment",
      eip155: "smartAccount",
      polkadot: "eoa",
      solana: "eoa",
    },
    ADAPTER_TYPES: {
      UNIVERSAL: "universal",
      SOLANA: "solana",
      WAGMI: "wagmi",
      ETHERS: "ethers",
      ETHERS5: "ethers5",
      BITCOIN: "bitcoin",
    },
  },
  L = {
    cacheExpiry: {
      portfolio: 3e4,
      nativeBalance: 3e4,
      ens: 3e5,
      identity: 3e5,
    },
    isCacheExpired(t, e) {
      return Date.now() - t > e;
    },
    getActiveNetworkProps() {
      const t = L.getActiveNamespace(),
        e = L.getActiveCaipNetworkId(),
        r = e ? e.split(":")[1] : void 0,
        n = r ? (isNaN(Number(r)) ? r : Number(r)) : void 0;
      return { namespace: t, caipNetworkId: e, chainId: n };
    },
    setWalletConnectDeepLink({ name: t, href: e }) {
      try {
        B.setItem(F.DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    getWalletConnectDeepLink() {
      try {
        const t = B.getItem(F.DEEPLINK_CHOICE);
        if (t) return JSON.parse(t);
      } catch {
        console.info("Unable to get WalletConnect deep link");
      }
    },
    deleteWalletConnectDeepLink() {
      try {
        B.removeItem(F.DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to delete WalletConnect deep link");
      }
    },
    setActiveNamespace(t) {
      try {
        B.setItem(F.ACTIVE_NAMESPACE, t);
      } catch {
        console.info("Unable to set active namespace");
      }
    },
    setActiveCaipNetworkId(t) {
      try {
        B.setItem(F.ACTIVE_CAIP_NETWORK_ID, t),
          L.setActiveNamespace(t.split(":")[0]);
      } catch {
        console.info("Unable to set active caip network id");
      }
    },
    getActiveCaipNetworkId() {
      try {
        return B.getItem(F.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to get active caip network id");
        return;
      }
    },
    deleteActiveCaipNetworkId() {
      try {
        B.removeItem(F.ACTIVE_CAIP_NETWORK_ID);
      } catch {
        console.info("Unable to delete active caip network id");
      }
    },
    deleteConnectedConnectorId(t) {
      try {
        const e = Hn(t);
        B.removeItem(e);
      } catch {
        console.info("Unable to delete connected connector id");
      }
    },
    setAppKitRecent(t) {
      try {
        const e = L.getRecentWallets();
        e.find((n) => n.id === t.id) ||
          (e.unshift(t),
          e.length > 2 && e.pop(),
          B.setItem(F.RECENT_WALLETS, JSON.stringify(e)));
      } catch {
        console.info("Unable to set AppKit recent");
      }
    },
    getRecentWallets() {
      try {
        const t = B.getItem(F.RECENT_WALLETS);
        return t ? JSON.parse(t) : [];
      } catch {
        console.info("Unable to get AppKit recent");
      }
      return [];
    },
    setConnectedConnectorId(t, e) {
      try {
        const r = Hn(t);
        B.setItem(r, e);
      } catch {
        console.info("Unable to set Connected Connector Id");
      }
    },
    getActiveNamespace() {
      try {
        return B.getItem(F.ACTIVE_NAMESPACE);
      } catch {
        console.info("Unable to get active namespace");
      }
    },
    getConnectedConnectorId(t) {
      if (t)
        try {
          const e = Hn(t);
          return B.getItem(e);
        } catch {
          console.info("Unable to get connected connector id in namespace ", t);
        }
    },
    setConnectedSocialProvider(t) {
      try {
        B.setItem(F.CONNECTED_SOCIAL, t);
      } catch {
        console.info("Unable to set connected social provider");
      }
    },
    getConnectedSocialProvider() {
      try {
        return B.getItem(F.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to get connected social provider");
      }
    },
    deleteConnectedSocialProvider() {
      try {
        B.removeItem(F.CONNECTED_SOCIAL);
      } catch {
        console.info("Unable to delete connected social provider");
      }
    },
    getConnectedSocialUsername() {
      try {
        return B.getItem(F.CONNECTED_SOCIAL_USERNAME);
      } catch {
        console.info("Unable to get connected social username");
      }
    },
    getStoredActiveCaipNetworkId() {
      var r;
      const t = B.getItem(F.ACTIVE_CAIP_NETWORK_ID);
      return (r = t == null ? void 0 : t.split(":")) == null ? void 0 : r[1];
    },
    setConnectionStatus(t) {
      try {
        B.setItem(F.CONNECTION_STATUS, t);
      } catch {
        console.info("Unable to set connection status");
      }
    },
    getConnectionStatus() {
      try {
        return B.getItem(F.CONNECTION_STATUS);
      } catch {
        return;
      }
    },
    getConnectedNamespaces() {
      try {
        const t = B.getItem(F.CONNECTED_NAMESPACES);
        return t != null && t.length ? t.split(",") : [];
      } catch {
        return [];
      }
    },
    setConnectedNamespaces(t) {
      try {
        const e = Array.from(new Set(t));
        B.setItem(F.CONNECTED_NAMESPACES, e.join(","));
      } catch {
        console.info("Unable to set namespaces in storage");
      }
    },
    addConnectedNamespace(t) {
      try {
        const e = L.getConnectedNamespaces();
        e.includes(t) || (e.push(t), L.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to add connected namespace");
      }
    },
    removeConnectedNamespace(t) {
      try {
        const e = L.getConnectedNamespaces(),
          r = e.indexOf(t);
        r > -1 && (e.splice(r, 1), L.setConnectedNamespaces(e));
      } catch {
        console.info("Unable to remove connected namespace");
      }
    },
    getTelegramSocialProvider() {
      try {
        return B.getItem(F.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        return console.info("Unable to get telegram social provider"), null;
      }
    },
    setTelegramSocialProvider(t) {
      try {
        B.setItem(F.TELEGRAM_SOCIAL_PROVIDER, t);
      } catch {
        console.info("Unable to set telegram social provider");
      }
    },
    removeTelegramSocialProvider() {
      try {
        B.removeItem(F.TELEGRAM_SOCIAL_PROVIDER);
      } catch {
        console.info("Unable to remove telegram social provider");
      }
    },
    getBalanceCache() {
      let t = {};
      try {
        const e = B.getItem(F.PORTFOLIO_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromBalanceCache(t) {
      try {
        const e = L.getBalanceCache();
        B.setItem(F.PORTFOLIO_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getBalanceCacheForCaipAddress(t) {
      try {
        const r = L.getBalanceCache()[t];
        if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.portfolio))
          return r.balance;
        L.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateBalanceCache(t) {
      try {
        const e = L.getBalanceCache();
        (e[t.caipAddress] = t), B.setItem(F.PORTFOLIO_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getNativeBalanceCache() {
      let t = {};
      try {
        const e = B.getItem(F.NATIVE_BALANCE_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get balance cache");
      }
      return t;
    },
    removeAddressFromNativeBalanceCache(t) {
      try {
        const e = L.getBalanceCache();
        B.setItem(
          F.NATIVE_BALANCE_CACHE,
          JSON.stringify({ ...e, [t]: void 0 })
        );
      } catch {
        console.info("Unable to remove address from balance cache", t);
      }
    },
    getNativeBalanceCacheForCaipAddress(t) {
      try {
        const r = L.getNativeBalanceCache()[t];
        if (
          r &&
          !this.isCacheExpired(r.timestamp, this.cacheExpiry.nativeBalance)
        )
          return r;
        console.info("Discarding cache for address", t),
          L.removeAddressFromBalanceCache(t);
      } catch {
        console.info("Unable to get balance cache for address", t);
      }
    },
    updateNativeBalanceCache(t) {
      try {
        const e = L.getNativeBalanceCache();
        (e[t.caipAddress] = t),
          B.setItem(F.NATIVE_BALANCE_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update balance cache", t);
      }
    },
    getEnsCache() {
      let t = {};
      try {
        const e = B.getItem(F.ENS_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get ens name cache");
      }
      return t;
    },
    getEnsFromCacheForAddress(t) {
      try {
        const r = L.getEnsCache()[t];
        if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.ens))
          return r.ens;
        L.removeEnsFromCache(t);
      } catch {
        console.info("Unable to get ens name from cache", t);
      }
    },
    updateEnsCache(t) {
      try {
        const e = L.getEnsCache();
        (e[t.address] = t), B.setItem(F.ENS_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update ens name cache", t);
      }
    },
    removeEnsFromCache(t) {
      try {
        const e = L.getEnsCache();
        B.setItem(F.ENS_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
      } catch {
        console.info("Unable to remove ens name from cache", t);
      }
    },
    getIdentityCache() {
      let t = {};
      try {
        const e = B.getItem(F.IDENTITY_CACHE);
        t = e ? JSON.parse(e) : {};
      } catch {
        console.info("Unable to get identity cache");
      }
      return t;
    },
    getIdentityFromCacheForAddress(t) {
      try {
        const r = L.getIdentityCache()[t];
        if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.identity))
          return r.identity;
        L.removeIdentityFromCache(t);
      } catch {
        console.info("Unable to get identity from cache", t);
      }
    },
    updateIdentityCache(t) {
      try {
        const e = L.getIdentityCache();
        (e[t.address] = { identity: t.identity, timestamp: t.timestamp }),
          B.setItem(F.IDENTITY_CACHE, JSON.stringify(e));
      } catch {
        console.info("Unable to update identity cache", t);
      }
    },
    removeIdentityFromCache(t) {
      try {
        const e = L.getIdentityCache();
        B.setItem(F.IDENTITY_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
      } catch {
        console.info("Unable to remove identity from cache", t);
      }
    },
    clearAddressCache() {
      try {
        B.removeItem(F.PORTFOLIO_CACHE),
          B.removeItem(F.NATIVE_BALANCE_CACHE),
          B.removeItem(F.ENS_CACHE),
          B.removeItem(F.IDENTITY_CACHE);
      } catch {
        console.info("Unable to clear address cache");
      }
    },
    setPreferredAccountTypes(t) {
      try {
        B.setItem(F.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
      } catch {
        console.info("Unable to set preferred account types", t);
      }
    },
    getPreferredAccountTypes() {
      try {
        const t = B.getItem(F.PREFERRED_ACCOUNT_TYPES);
        return JSON.parse(t);
      } catch {
        console.info("Unable to get preferred account types");
      }
    },
  },
  X = {
    isMobile() {
      var t;
      return this.isClient()
        ? !!(
            ((t =
              window == null
                ? void 0
                : window.matchMedia("(pointer:coarse)")) != null &&
              t.matches) ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
              navigator.userAgent
            )
          )
        : !1;
    },
    checkCaipNetwork(t, e = "") {
      return t == null
        ? void 0
        : t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase());
    },
    isAndroid() {
      if (!this.isMobile()) return !1;
      const t =
        window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return X.isMobile() && t.includes("android");
    },
    isIos() {
      if (!this.isMobile()) return !1;
      const t =
        window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return t.includes("iphone") || t.includes("ipad");
    },
    isSafari() {
      return this.isClient()
        ? (window == null
            ? void 0
            : window.navigator.userAgent.toLowerCase()
          ).includes("safari")
        : !1;
    },
    isClient() {
      return typeof window < "u";
    },
    isPairingExpired(t) {
      return t ? t - Date.now() <= je.TEN_SEC_MS : !0;
    },
    isAllowedRetry(t, e = je.ONE_SEC_MS) {
      return Date.now() - t >= e;
    },
    copyToClopboard(t) {
      navigator.clipboard.writeText(t);
    },
    isIframe() {
      try {
        return (
          (window == null ? void 0 : window.self) !==
          (window == null ? void 0 : window.top)
        );
      } catch {
        return !1;
      }
    },
    getPairingExpiry() {
      return Date.now() + je.FOUR_MINUTES_MS;
    },
    getNetworkId(t) {
      return t == null ? void 0 : t.split(":")[1];
    },
    getPlainAddress(t) {
      return t == null ? void 0 : t.split(":")[2];
    },
    async wait(t) {
      return new Promise((e) => {
        setTimeout(e, t);
      });
    },
    debounce(t, e = 500) {
      let r;
      return (...n) => {
        function s() {
          t(...n);
        }
        r && clearTimeout(r), (r = setTimeout(s, e));
      };
    },
    isHttpUrl(t) {
      return t.startsWith("http://") || t.startsWith("https://");
    },
    formatNativeUrl(t, e) {
      if (X.isHttpUrl(t)) return this.formatUniversalUrl(t, e);
      let r = t;
      r.includes("://") ||
        ((r = t.replaceAll("/", "").replaceAll(":", "")), (r = `${r}://`)),
        r.endsWith("/") || (r = `${r}/`),
        this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
      const n = encodeURIComponent(e);
      return { redirect: `${r}wc?uri=${n}`, href: r };
    },
    formatUniversalUrl(t, e) {
      if (!X.isHttpUrl(t)) return this.formatNativeUrl(t, e);
      let r = t;
      r.endsWith("/") || (r = `${r}/`);
      const n = encodeURIComponent(e);
      return { redirect: `${r}wc?uri=${n}`, href: r };
    },
    getOpenTargetForPlatform(t) {
      return t === "popupWindow"
        ? t
        : this.isTelegram()
        ? L.getTelegramSocialProvider()
          ? "_top"
          : "_blank"
        : t;
    },
    openHref(t, e, r) {
      window == null ||
        window.open(
          t,
          this.getOpenTargetForPlatform(e),
          r || "noreferrer noopener"
        );
    },
    returnOpenHref(t, e, r) {
      return window == null
        ? void 0
        : window.open(
            t,
            this.getOpenTargetForPlatform(e),
            r || "noreferrer noopener"
          );
    },
    isTelegram() {
      return (
        typeof window < "u" &&
        (!!window.TelegramWebviewProxy ||
          !!window.Telegram ||
          !!window.TelegramWebviewProxyProto)
      );
    },
    async preloadImage(t) {
      const e = new Promise((r, n) => {
        const s = new Image();
        (s.onload = r),
          (s.onerror = n),
          (s.crossOrigin = "anonymous"),
          (s.src = t);
      });
      return Promise.race([e, X.wait(2e3)]);
    },
    formatBalance(t, e) {
      let r = "0.000";
      if (typeof t == "string") {
        const n = Number(t);
        if (n) {
          const s = Math.floor(n * 1e3) / 1e3;
          s && (r = s.toString());
        }
      }
      return `${r}${e ? ` ${e}` : ""}`;
    },
    formatBalance2(t, e) {
      var n;
      let r;
      if (t === "0") r = "0";
      else if (typeof t == "string") {
        const s = Number(t);
        s &&
          (r =
            (n = s.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null
              ? void 0
              : n[0]);
      }
      return { value: r ?? "0", rest: r === "0" ? "000" : "", symbol: e };
    },
    getApiUrl() {
      return P.W3M_API_URL;
    },
    getBlockchainApiUrl() {
      return P.BLOCKCHAIN_API_RPC_URL;
    },
    getAnalyticsUrl() {
      return P.PULSE_API_URL;
    },
    getUUID() {
      return crypto != null && crypto.randomUUID
        ? crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
            const e = (Math.random() * 16) | 0;
            return (t === "x" ? e : (e & 3) | 8).toString(16);
          });
    },
    parseError(t) {
      var e, r;
      return typeof t == "string"
        ? t
        : typeof ((r =
            (e = t == null ? void 0 : t.issues) == null ? void 0 : e[0]) == null
            ? void 0
            : r.message) == "string"
        ? t.issues[0].message
        : t instanceof Error
        ? t.message
        : "Unknown error";
    },
    sortRequestedNetworks(t, e = []) {
      const r = {};
      return (
        e &&
          t &&
          (t.forEach((n, s) => {
            r[n] = s;
          }),
          e.sort((n, s) => {
            const a = r[n.id],
              o = r[s.id];
            return a !== void 0 && o !== void 0
              ? a - o
              : a !== void 0
              ? -1
              : o !== void 0
              ? 1
              : 0;
          })),
        e
      );
    },
    calculateBalance(t) {
      let e = 0;
      for (const r of t) e += r.value ?? 0;
      return e;
    },
    formatTokenBalance(t) {
      const e = t.toFixed(2),
        [r, n] = e.split(".");
      return { dollars: r, pennies: n };
    },
    isAddress(t, e = "eip155") {
      switch (e) {
        case "eip155":
          if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
            if (
              /^(?:0x)?[0-9a-f]{40}$/iu.test(t) ||
              /^(?:0x)?[0-9A-F]{40}$/iu.test(t)
            )
              return !0;
          } else return !1;
          return !1;
        case "solana":
          return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
        default:
          return !1;
      }
    },
    uniqueBy(t, e) {
      const r = new Set();
      return t.filter((n) => {
        const s = n[e];
        return r.has(s) ? !1 : (r.add(s), !0);
      });
    },
    generateSdkVersion(t, e, r) {
      const s =
        t.length === 0
          ? je.ADAPTER_TYPES.UNIVERSAL
          : t.map((a) => a.adapterType).join(",");
      return `${e}-${s}-${r}`;
    },
    createAccount(t, e, r, n, s) {
      return { namespace: t, address: e, type: r, publicKey: n, path: s };
    },
    isCaipAddress(t) {
      if (typeof t != "string") return !1;
      const e = t.split(":"),
        r = e[0];
      return e.filter(Boolean).length === 3 && r in P.CHAIN_NAME_MAP;
    },
    isMac() {
      const t =
        window == null ? void 0 : window.navigator.userAgent.toLowerCase();
      return t.includes("macintosh") && !t.includes("safari");
    },
    formatTelegramSocialLoginUrl(t) {
      const e = `--${encodeURIComponent(
          window == null ? void 0 : window.location.href
        )}`,
        r = "state=";
      if (new URL(t).host === "auth.magic.link") {
        const s = "provider_authorization_url=",
          a = t.substring(t.indexOf(s) + s.length),
          o = this.injectIntoUrl(decodeURIComponent(a), r, e);
        return t.replace(a, encodeURIComponent(o));
      }
      return this.injectIntoUrl(t, r, e);
    },
    injectIntoUrl(t, e, r) {
      const n = t.indexOf(e);
      if (n === -1)
        throw new Error(`${e} parameter not found in the URL: ${t}`);
      const s = t.indexOf("&", n),
        a = e.length,
        o = s !== -1 ? s : t.length,
        i = t.substring(0, n + a),
        u = t.substring(n + a, o),
        c = t.substring(s),
        d = u + r;
      return i + d + c;
    },
  };
async function or(...t) {
  const e = await fetch(...t);
  if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, { cause: e });
  return e;
}
class Mn {
  constructor({ baseUrl: e, clientId: r }) {
    (this.baseUrl = e), (this.clientId = r);
  }
  async get({ headers: e, signal: r, cache: n, ...s }) {
    const a = this.createUrl(s);
    return (
      await or(a, { method: "GET", headers: e, signal: r, cache: n })
    ).json();
  }
  async getBlob({ headers: e, signal: r, ...n }) {
    const s = this.createUrl(n);
    return (await or(s, { method: "GET", headers: e, signal: r })).blob();
  }
  async post({ body: e, headers: r, signal: n, ...s }) {
    const a = this.createUrl(s);
    return (
      await or(a, {
        method: "POST",
        headers: r,
        body: e ? JSON.stringify(e) : void 0,
        signal: n,
      })
    ).json();
  }
  async put({ body: e, headers: r, signal: n, ...s }) {
    const a = this.createUrl(s);
    return (
      await or(a, {
        method: "PUT",
        headers: r,
        body: e ? JSON.stringify(e) : void 0,
        signal: n,
      })
    ).json();
  }
  async delete({ body: e, headers: r, signal: n, ...s }) {
    const a = this.createUrl(s);
    return (
      await or(a, {
        method: "DELETE",
        headers: r,
        body: e ? JSON.stringify(e) : void 0,
        signal: n,
      })
    ).json();
  }
  createUrl({ path: e, params: r }) {
    const n = new URL(e, this.baseUrl);
    return (
      r &&
        Object.entries(r).forEach(([s, a]) => {
          a && n.searchParams.append(s, a);
        }),
      this.clientId && n.searchParams.append("clientId", this.clientId),
      n
    );
  }
}
const ho = {
    handleSolanaDeeplinkRedirect(t) {
      if (g.state.activeChain === P.CHAIN.SOLANA) {
        const e = window.location.href,
          r = encodeURIComponent(e);
        if (t === "Phantom" && !("phantom" in window)) {
          const n = e.startsWith("https") ? "https" : "http",
            s = e.split("/")[2],
            a = encodeURIComponent(`${n}://${s}`);
          window.location.href = `https://phantom.app/ul/browse/${r}?ref=${a}`;
        }
        t === "Coinbase Wallet" &&
          !("coinbaseSolana" in window) &&
          (window.location.href = `https://go.cb-w.com/dapp?cb_url=${r}`);
      }
    },
  },
  ke = me({
    walletImages: {},
    networkImages: {},
    chainImages: {},
    connectorImages: {},
    tokenImages: {},
    currencyImages: {},
  }),
  We = {
    state: ke,
    subscribeNetworkImages(t) {
      return Pe(ke.networkImages, () => t(ke.networkImages));
    },
    subscribeKey(t, e) {
      return Ue(ke, t, e);
    },
    subscribe(t) {
      return Pe(ke, () => t(ke));
    },
    setWalletImage(t, e) {
      ke.walletImages[t] = e;
    },
    setNetworkImage(t, e) {
      ke.networkImages[t] = e;
    },
    setChainImage(t, e) {
      ke.chainImages[t] = e;
    },
    setConnectorImage(t, e) {
      ke.connectorImages = { ...ke.connectorImages, [t]: e };
    },
    setTokenImage(t, e) {
      ke.tokenImages[t] = e;
    },
    setCurrencyImage(t, e) {
      ke.currencyImages[t] = e;
    },
  },
  mo = {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    polkadot: "",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
  },
  qn = me({ networkImagePromises: {} }),
  go = {
    async fetchWalletImage(t) {
      if (t) return await V._fetchWalletImage(t), this.getWalletImageById(t);
    },
    async fetchNetworkImage(t) {
      if (!t) return;
      const e = this.getNetworkImageById(t);
      return (
        e ||
        (qn.networkImagePromises[t] ||
          (qn.networkImagePromises[t] = V._fetchNetworkImage(t)),
        await qn.networkImagePromises[t],
        this.getNetworkImageById(t))
      );
    },
    getWalletImageById(t) {
      if (t) return We.state.walletImages[t];
    },
    getWalletImage(t) {
      if (t != null && t.image_url) return t == null ? void 0 : t.image_url;
      if (t != null && t.image_id) return We.state.walletImages[t.image_id];
    },
    getNetworkImage(t) {
      var e, r, n;
      if ((e = t == null ? void 0 : t.assets) != null && e.imageUrl)
        return (r = t == null ? void 0 : t.assets) == null
          ? void 0
          : r.imageUrl;
      if ((n = t == null ? void 0 : t.assets) != null && n.imageId)
        return We.state.networkImages[t.assets.imageId];
    },
    getNetworkImageById(t) {
      if (t) return We.state.networkImages[t];
    },
    getConnectorImage(t) {
      if (t != null && t.imageUrl) return t.imageUrl;
      if (t != null && t.imageId) return We.state.connectorImages[t.imageId];
    },
    getChainImage(t) {
      return We.state.networkImages[mo[t]];
    },
  },
  wo = {
    getFeatureValue(t, e) {
      const r = e == null ? void 0 : e[t];
      return r === void 0 ? je.DEFAULT_FEATURES[t] : r;
    },
    filterSocialsByPlatform(t) {
      if (!t || !t.length) return t;
      if (X.isTelegram()) {
        if (X.isIos()) return t.filter((e) => e !== "google");
        if (X.isMac()) return t.filter((e) => e !== "x");
        if (X.isAndroid())
          return t.filter((e) => !["facebook", "x"].includes(e));
      }
      return t;
    },
  },
  k = me({
    features: je.DEFAULT_FEATURES,
    projectId: "",
    sdkType: "appkit",
    sdkVersion: "html-wagmi-undefined",
    defaultAccountTypes: {
      solana: "eoa",
      bip122: "payment",
      polkadot: "eoa",
      eip155: "smartAccount",
    },
    enableNetworkSwitch: !0,
  }),
  J = {
    state: k,
    subscribeKey(t, e) {
      return Ue(k, t, e);
    },
    setOptions(t) {
      Object.assign(k, t);
    },
    setFeatures(t) {
      if (!t) return;
      k.features || (k.features = je.DEFAULT_FEATURES);
      const e = { ...k.features, ...t };
      (k.features = e),
        k.features.socials &&
          (k.features.socials = wo.filterSocialsByPlatform(k.features.socials));
    },
    setProjectId(t) {
      k.projectId = t;
    },
    setCustomRpcUrls(t) {
      k.customRpcUrls = t;
    },
    setAllWallets(t) {
      k.allWallets = t;
    },
    setIncludeWalletIds(t) {
      k.includeWalletIds = t;
    },
    setExcludeWalletIds(t) {
      k.excludeWalletIds = t;
    },
    setFeaturedWalletIds(t) {
      k.featuredWalletIds = t;
    },
    setTokens(t) {
      k.tokens = t;
    },
    setTermsConditionsUrl(t) {
      k.termsConditionsUrl = t;
    },
    setPrivacyPolicyUrl(t) {
      k.privacyPolicyUrl = t;
    },
    setCustomWallets(t) {
      k.customWallets = t;
    },
    setIsSiweEnabled(t) {
      k.isSiweEnabled = t;
    },
    setIsUniversalProvider(t) {
      k.isUniversalProvider = t;
    },
    setSdkVersion(t) {
      k.sdkVersion = t;
    },
    setMetadata(t) {
      k.metadata = t;
    },
    setDisableAppend(t) {
      k.disableAppend = t;
    },
    setEIP6963Enabled(t) {
      k.enableEIP6963 = t;
    },
    setDebug(t) {
      k.debug = t;
    },
    setEnableWalletConnect(t) {
      k.enableWalletConnect = t;
    },
    setEnableWalletGuide(t) {
      k.enableWalletGuide = t;
    },
    setEnableAuthLogger(t) {
      k.enableAuthLogger = t;
    },
    setEnableWallets(t) {
      k.enableWallets = t;
    },
    setHasMultipleAddresses(t) {
      k.hasMultipleAddresses = t;
    },
    setSIWX(t) {
      k.siwx = t;
    },
    setConnectMethodsOrder(t) {
      k.features = { ...k.features, connectMethodsOrder: t };
    },
    setWalletFeaturesOrder(t) {
      k.features = { ...k.features, walletFeaturesOrder: t };
    },
    setSocialsOrder(t) {
      k.features = { ...k.features, socials: t };
    },
    setCollapseWallets(t) {
      k.features = { ...k.features, collapseWallets: t };
    },
    setEnableEmbedded(t) {
      k.enableEmbedded = t;
    },
    setAllowUnsupportedChain(t) {
      k.allowUnsupportedChain = t;
    },
    setManualWCControl(t) {
      k.manualWCControl = t;
    },
    setEnableNetworkSwitch(t) {
      k.enableNetworkSwitch = t;
    },
    setDefaultAccountTypes(t = {}) {
      Object.entries(t).forEach(([e, r]) => {
        r && (k.defaultAccountTypes[e] = r);
      });
    },
    setUniversalProviderConfigOverride(t) {
      k.universalProviderConfigOverride = t;
    },
    getUniversalProviderConfigOverride() {
      return k.universalProviderConfigOverride;
    },
    getSnapshot() {
      return gr(k);
    },
  },
  ct = me({ message: "", variant: "info", open: !1 }),
  _o = {
    state: ct,
    subscribeKey(t, e) {
      return Ue(ct, t, e);
    },
    open(t, e) {
      const { debug: r } = J.state,
        { shortMessage: n, longMessage: s } = t;
      r && ((ct.message = n), (ct.variant = e), (ct.open = !0)),
        s && console.error(typeof s == "function" ? s() : s);
    },
    close() {
      (ct.open = !1), (ct.message = ""), (ct.variant = "info");
    },
  },
  Eo = X.getAnalyticsUrl(),
  yo = new Mn({ baseUrl: Eo, clientId: null }),
  bo = ["MODAL_CREATED"],
  et = me({
    timestamp: Date.now(),
    reportedErrors: {},
    data: { type: "track", event: "MODAL_CREATED" },
  }),
  he = {
    state: et,
    subscribe(t) {
      return Pe(et, () => t(et));
    },
    getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: r } = J.state;
      return { projectId: t, st: e, sv: r || "html-wagmi-4.2.2" };
    },
    async _sendAnalyticsEvent(t) {
      try {
        const e = ce.state.address;
        if (bo.includes(t.data.event) || typeof window > "u") return;
        await yo.post({
          path: "/e",
          params: he.getSdkProperties(),
          body: {
            eventId: X.getUUID(),
            url: window.location.href,
            domain: window.location.hostname,
            timestamp: t.timestamp,
            props: { ...t.data, address: e },
          },
        }),
          (et.reportedErrors.FORBIDDEN = !1);
      } catch (e) {
        e instanceof Error &&
          e.cause instanceof Response &&
          e.cause.status === P.HTTP_STATUS_CODES.FORBIDDEN &&
          !et.reportedErrors.FORBIDDEN &&
          (_o.open(
            {
              shortMessage: "Invalid App Configuration",
              longMessage: `Origin ${
                ur() ? window.origin : "uknown"
              } not found on Allowlist - update configuration on cloud.reown.com`,
            },
            "error"
          ),
          (et.reportedErrors.FORBIDDEN = !0));
      }
    },
    sendEvent(t) {
      var e;
      (et.timestamp = Date.now()),
        (et.data = t),
        (e = J.state.features) != null &&
          e.analytics &&
          he._sendAnalyticsEvent(et);
    },
  },
  Co = [
    "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
  ],
  vo = X.getApiUrl(),
  Me = new Mn({ baseUrl: vo, clientId: null }),
  Ao = 40,
  Rs = 4,
  To = 20,
  ee = me({
    promises: {},
    page: 1,
    count: 0,
    featured: [],
    allFeatured: [],
    recommended: [],
    allRecommended: [],
    wallets: [],
    search: [],
    isAnalyticsEnabled: !1,
    excludedWallets: [],
    isFetchingRecommendedWallets: !1,
  }),
  V = {
    state: ee,
    subscribeKey(t, e) {
      return Ue(ee, t, e);
    },
    _getSdkProperties() {
      const { projectId: t, sdkType: e, sdkVersion: r } = J.state;
      return { projectId: t, st: e || "appkit", sv: r || "html-wagmi-4.2.2" };
    },
    _filterOutExtensions(t) {
      return J.state.isUniversalProvider
        ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link))
        : t;
    },
    async _fetchWalletImage(t) {
      const e = `${Me.baseUrl}/getWalletImage/${t}`,
        r = await Me.getBlob({ path: e, params: V._getSdkProperties() });
      We.setWalletImage(t, URL.createObjectURL(r));
    },
    async _fetchNetworkImage(t) {
      const e = `${Me.baseUrl}/public/getAssetImage/${t}`,
        r = await Me.getBlob({ path: e, params: V._getSdkProperties() });
      We.setNetworkImage(t, URL.createObjectURL(r));
    },
    async _fetchConnectorImage(t) {
      const e = `${Me.baseUrl}/public/getAssetImage/${t}`,
        r = await Me.getBlob({ path: e, params: V._getSdkProperties() });
      We.setConnectorImage(t, URL.createObjectURL(r));
    },
    async _fetchCurrencyImage(t) {
      const e = `${Me.baseUrl}/public/getCurrencyImage/${t}`,
        r = await Me.getBlob({ path: e, params: V._getSdkProperties() });
      We.setCurrencyImage(t, URL.createObjectURL(r));
    },
    async _fetchTokenImage(t) {
      const e = `${Me.baseUrl}/public/getTokenImage/${t}`,
        r = await Me.getBlob({ path: e, params: V._getSdkProperties() });
      We.setTokenImage(t, URL.createObjectURL(r));
    },
    async fetchNetworkImages() {
      const t = g.getAllRequestedCaipNetworks(),
        e =
          t == null
            ? void 0
            : t
                .map(({ assets: r }) => (r == null ? void 0 : r.imageId))
                .filter(Boolean)
                .filter((r) => !go.getNetworkImageById(r));
      e && (await Promise.allSettled(e.map((r) => V._fetchNetworkImage(r))));
    },
    async fetchConnectorImages() {
      const { connectors: t } = be.state,
        e = t.map(({ imageId: r }) => r).filter(Boolean);
      await Promise.allSettled(e.map((r) => V._fetchConnectorImage(r)));
    },
    async fetchCurrencyImages(t = []) {
      await Promise.allSettled(t.map((e) => V._fetchCurrencyImage(e)));
    },
    async fetchTokenImages(t = []) {
      await Promise.allSettled(t.map((e) => V._fetchTokenImage(e)));
    },
    async fetchWallets(t) {
      var n, s;
      const e = t.exclude ?? [];
      return (
        V._getSdkProperties().sv.startsWith("html-core-") && e.push(...Co),
        await Me.get({
          path: "/getWallets",
          params: {
            ...V._getSdkProperties(),
            ...t,
            page: String(t.page),
            entries: String(t.entries),
            include: (n = t.include) == null ? void 0 : n.join(","),
            exclude: (s = t.exclude) == null ? void 0 : s.join(","),
          },
        })
      );
    },
    async fetchFeaturedWallets() {
      const { featuredWalletIds: t } = J.state;
      if (t != null && t.length) {
        const e = {
            ...V._getSdkProperties(),
            page: 1,
            entries: (t == null ? void 0 : t.length) ?? Rs,
            include: t,
          },
          { data: r } = await V.fetchWallets(e);
        r.sort((s, a) => t.indexOf(s.id) - t.indexOf(a.id));
        const n = r.map((s) => s.image_id).filter(Boolean);
        await Promise.allSettled(n.map((s) => V._fetchWalletImage(s))),
          (ee.featured = r),
          (ee.allFeatured = r);
      }
    },
    async fetchRecommendedWallets() {
      try {
        ee.isFetchingRecommendedWallets = !0;
        const {
            includeWalletIds: t,
            excludeWalletIds: e,
            featuredWalletIds: r,
          } = J.state,
          n = [...(e ?? []), ...(r ?? [])].filter(Boolean),
          s = g.getRequestedCaipNetworkIds().join(","),
          a = { page: 1, entries: Rs, include: t, exclude: n, chains: s },
          { data: o, count: i } = await V.fetchWallets(a),
          u = L.getRecentWallets(),
          c = o.map((f) => f.image_id).filter(Boolean),
          d = u.map((f) => f.image_id).filter(Boolean);
        await Promise.allSettled(
          [...c, ...d].map((f) => V._fetchWalletImage(f))
        ),
          (ee.recommended = o),
          (ee.allRecommended = o),
          (ee.count = i ?? 0);
      } catch {
      } finally {
        ee.isFetchingRecommendedWallets = !1;
      }
    },
    async fetchWalletsByPage({ page: t }) {
      const {
          includeWalletIds: e,
          excludeWalletIds: r,
          featuredWalletIds: n,
        } = J.state,
        s = g.getRequestedCaipNetworkIds().join(","),
        a = [
          ...ee.recommended.map(({ id: d }) => d),
          ...(r ?? []),
          ...(n ?? []),
        ].filter(Boolean),
        o = { page: t, entries: Ao, include: e, exclude: a, chains: s },
        { data: i, count: u } = await V.fetchWallets(o),
        c = i
          .slice(0, To)
          .map((d) => d.image_id)
          .filter(Boolean);
      await Promise.allSettled(c.map((d) => V._fetchWalletImage(d))),
        (ee.wallets = X.uniqueBy(
          [...ee.wallets, ...V._filterOutExtensions(i)],
          "id"
        )),
        (ee.count = u > ee.count ? u : ee.count),
        (ee.page = t);
    },
    async initializeExcludedWallets({ ids: t }) {
      const e = g.getRequestedCaipNetworkIds().join(","),
        r = { page: 1, entries: t.length, include: t, chains: e },
        { data: n } = await V.fetchWallets(r);
      n &&
        n.forEach((s) => {
          ee.excludedWallets.push({ rdns: s.rdns, name: s.name });
        });
    },
    async searchWallet({ search: t, badge: e }) {
      const { includeWalletIds: r, excludeWalletIds: n } = J.state,
        s = g.getRequestedCaipNetworkIds().join(",");
      ee.search = [];
      const a = {
          page: 1,
          entries: 100,
          search: t == null ? void 0 : t.trim(),
          badge_type: e,
          include: r,
          exclude: n,
          chains: s,
        },
        { data: o } = await V.fetchWallets(a);
      he.sendEvent({
        type: "track",
        event: "SEARCH_WALLET",
        properties: { badge: e ?? "", search: t ?? "" },
      });
      const i = o.map((u) => u.image_id).filter(Boolean);
      await Promise.allSettled([
        ...i.map((u) => V._fetchWalletImage(u)),
        X.wait(300),
      ]),
        (ee.search = V._filterOutExtensions(o));
    },
    initPromise(t, e) {
      const r = ee.promises[t];
      return r || (ee.promises[t] = e());
    },
    prefetch({
      fetchConnectorImages: t = !0,
      fetchFeaturedWallets: e = !0,
      fetchRecommendedWallets: r = !0,
      fetchNetworkImages: n = !0,
    } = {}) {
      const s = [
        t && V.initPromise("connectorImages", V.fetchConnectorImages),
        e && V.initPromise("featuredWallets", V.fetchFeaturedWallets),
        r && V.initPromise("recommendedWallets", V.fetchRecommendedWallets),
        n && V.initPromise("networkImages", V.fetchNetworkImages),
      ].filter(Boolean);
      return Promise.allSettled(s);
    },
    prefetchAnalyticsConfig() {
      var t;
      (t = J.state.features) != null && t.analytics && V.fetchAnalyticsConfig();
    },
    async fetchAnalyticsConfig() {
      try {
        const { isAnalyticsEnabled: t } = await Me.get({
          path: "/getAnalyticsConfig",
          params: V._getSdkProperties(),
        });
        J.setFeatures({ analytics: t });
      } catch {
        J.setFeatures({ analytics: !1 });
      }
    },
    setFilterByNamespace(t) {
      if (!t) {
        (ee.featured = ee.allFeatured), (ee.recommended = ee.allRecommended);
        return;
      }
      const e = g.getRequestedCaipNetworkIds().join(",");
      (ee.featured = ee.allFeatured.filter((r) => {
        var n;
        return (n = r.chains) == null ? void 0 : n.some((s) => e.includes(s));
      })),
        (ee.recommended = ee.allRecommended.filter((r) => {
          var n;
          return (n = r.chains) == null ? void 0 : n.some((s) => e.includes(s));
        }));
    },
  },
  Q = me({ view: "Connect", history: ["Connect"], transactionStack: [] }),
  fe = {
    state: Q,
    subscribeKey(t, e) {
      return Ue(Q, t, e);
    },
    pushTransactionStack(t) {
      Q.transactionStack.push(t);
    },
    popTransactionStack(t) {
      var r, n;
      const e = Q.transactionStack.pop();
      if (e)
        if (t)
          this.goBack(),
            (r = e == null ? void 0 : e.onCancel) == null || r.call(e);
        else {
          if (e.goBack) this.goBack();
          else if (e.replace) {
            const a = Q.history.indexOf("ConnectingSiwe");
            a > 0 ? this.goBackToIndex(a - 1) : (Ne.close(), (Q.history = []));
          } else e.view && this.reset(e.view);
          (n = e == null ? void 0 : e.onSuccess) == null || n.call(e);
        }
    },
    push(t, e) {
      t !== Q.view && ((Q.view = t), Q.history.push(t), (Q.data = e));
    },
    reset(t, e) {
      (Q.view = t), (Q.history = [t]), (Q.data = e);
    },
    replace(t, e) {
      Q.history.at(-1) === t ||
        ((Q.view = t), (Q.history[Q.history.length - 1] = t), (Q.data = e));
    },
    goBack() {
      var e;
      const t =
        !g.state.activeCaipAddress && this.state.view === "ConnectingFarcaster";
      if (Q.history.length > 1 && !Q.history.includes("UnsupportedChain")) {
        Q.history.pop();
        const [r] = Q.history.slice(-1);
        r && (Q.view = r);
      } else Ne.close();
      (e = Q.data) != null && e.wallet && (Q.data.wallet = void 0),
        setTimeout(() => {
          var r, n, s;
          if (t) {
            ce.setFarcasterUrl(void 0, g.state.activeChain);
            const a = be.getAuthConnector();
            (r = a == null ? void 0 : a.provider) == null || r.reload();
            const o = gr(J.state);
            (s =
              (n = a == null ? void 0 : a.provider) == null
                ? void 0
                : n.syncDappData) == null ||
              s.call(n, {
                metadata: o.metadata,
                sdkVersion: o.sdkVersion,
                projectId: o.projectId,
                sdkType: o.sdkType,
              });
          }
        }, 100);
    },
    goBackToIndex(t) {
      if (Q.history.length > 1) {
        Q.history = Q.history.slice(0, t + 1);
        const [e] = Q.history.slice(-1);
        e && (Q.view = e);
      }
    },
  },
  tt = me({ themeMode: "dark", themeVariables: {}, w3mThemeVariables: void 0 }),
  Wt = {
    state: tt,
    subscribe(t) {
      return Pe(tt, () => t(tt));
    },
    setThemeMode(t) {
      tt.themeMode = t;
      try {
        const e = be.getAuthConnector();
        if (e) {
          const r = Wt.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeMode: t,
            themeVariables: r,
            w3mThemeVariables: ft(r, t),
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    setThemeVariables(t) {
      tt.themeVariables = { ...tt.themeVariables, ...t };
      try {
        const e = be.getAuthConnector();
        if (e) {
          const r = Wt.getSnapshot().themeVariables;
          e.provider.syncTheme({
            themeVariables: r,
            w3mThemeVariables: ft(tt.themeVariables, tt.themeMode),
          });
        }
      } catch {
        console.info("Unable to sync theme to auth connector");
      }
    },
    getSnapshot() {
      return gr(tt);
    },
  },
  la = { eip155: void 0, solana: void 0, polkadot: void 0, bip122: void 0 },
  te = me({
    allConnectors: [],
    connectors: [],
    activeConnector: void 0,
    filterByNamespace: void 0,
    activeConnectorIds: { ...la },
  }),
  be = {
    state: te,
    subscribe(t) {
      return Pe(te, () => {
        t(te);
      });
    },
    subscribeKey(t, e) {
      return Ue(te, t, e);
    },
    initialize(t) {
      t.forEach((e) => {
        const r = L.getConnectedConnectorId(e);
        r && this.setConnectorId(r, e);
      });
    },
    setActiveConnector(t) {
      t && (te.activeConnector = Zt(t));
    },
    setConnectors(t) {
      t
        .filter(
          (r) =>
            !te.allConnectors.some(
              (n) =>
                n.id === r.id &&
                this.getConnectorName(n.name) ===
                  this.getConnectorName(r.name) &&
                n.chain === r.chain
            )
        )
        .forEach((r) => {
          r.type !== "MULTI_CHAIN" && te.allConnectors.push(Zt(r));
        }),
        (te.connectors = this.mergeMultiChainConnectors(te.allConnectors));
    },
    removeAdapter(t) {
      (te.allConnectors = te.allConnectors.filter((e) => e.chain !== t)),
        (te.connectors = this.mergeMultiChainConnectors(te.allConnectors));
    },
    mergeMultiChainConnectors(t) {
      const e = this.generateConnectorMapByName(t),
        r = [];
      return (
        e.forEach((n) => {
          const s = n[0],
            a = (s == null ? void 0 : s.id) === P.CONNECTOR_ID.AUTH;
          n.length > 1 && s
            ? r.push({
                name: s.name,
                imageUrl: s.imageUrl,
                imageId: s.imageId,
                connectors: [...n],
                type: a ? "AUTH" : "MULTI_CHAIN",
                chain: "eip155",
                id: (s == null ? void 0 : s.id) || "",
              })
            : s && r.push(s);
        }),
        r
      );
    },
    generateConnectorMapByName(t) {
      const e = new Map();
      return (
        t.forEach((r) => {
          const { name: n } = r,
            s = this.getConnectorName(n);
          if (!s) return;
          const a = e.get(s) || [];
          a.find((i) => i.chain === r.chain) || a.push(r), e.set(s, a);
        }),
        e
      );
    },
    getConnectorName(t) {
      return t && ({ "Trust Wallet": "Trust" }[t] || t);
    },
    getUniqueConnectorsByName(t) {
      const e = [];
      return (
        t.forEach((r) => {
          e.find((n) => n.chain === r.chain) || e.push(r);
        }),
        e
      );
    },
    addConnector(t) {
      var e, r, n;
      if (t.id === P.CONNECTOR_ID.AUTH) {
        const s = t,
          a = gr(J.state),
          o = Wt.getSnapshot().themeMode,
          i = Wt.getSnapshot().themeVariables;
        (r =
          (e = s == null ? void 0 : s.provider) == null
            ? void 0
            : e.syncDappData) == null ||
          r.call(e, {
            metadata: a.metadata,
            sdkVersion: a.sdkVersion,
            projectId: a.projectId,
            sdkType: a.sdkType,
          }),
          (n = s == null ? void 0 : s.provider) == null ||
            n.syncTheme({
              themeMode: o,
              themeVariables: i,
              w3mThemeVariables: ft(i, o),
            }),
          this.setConnectors([t]);
      } else this.setConnectors([t]);
    },
    getAuthConnector(t) {
      var n;
      const e = t || g.state.activeChain,
        r = te.connectors.find((s) => s.id === P.CONNECTOR_ID.AUTH);
      if (r)
        return (n = r == null ? void 0 : r.connectors) != null && n.length
          ? r.connectors.find((a) => a.chain === e)
          : r;
    },
    getAnnouncedConnectorRdns() {
      return te.connectors
        .filter((t) => t.type === "ANNOUNCED")
        .map((t) => {
          var e;
          return (e = t.info) == null ? void 0 : e.rdns;
        });
    },
    getConnectorById(t) {
      return te.allConnectors.find((e) => e.id === t);
    },
    getConnector(t, e) {
      return te.allConnectors
        .filter((n) => n.chain === g.state.activeChain)
        .find((n) => {
          var s;
          return (
            n.explorerId === t || ((s = n.info) == null ? void 0 : s.rdns) === e
          );
        });
    },
    syncIfAuthConnector(t) {
      var a, o;
      if (t.id !== "ID_AUTH") return;
      const e = t,
        r = gr(J.state),
        n = Wt.getSnapshot().themeMode,
        s = Wt.getSnapshot().themeVariables;
      (o =
        (a = e == null ? void 0 : e.provider) == null
          ? void 0
          : a.syncDappData) == null ||
        o.call(a, {
          metadata: r.metadata,
          sdkVersion: r.sdkVersion,
          sdkType: r.sdkType,
          projectId: r.projectId,
        }),
        e.provider.syncTheme({
          themeMode: n,
          themeVariables: s,
          w3mThemeVariables: ft(s, n),
        });
    },
    getConnectorsByNamespace(t) {
      const e = te.allConnectors.filter((r) => r.chain === t);
      return this.mergeMultiChainConnectors(e);
    },
    selectWalletConnector(t) {
      const e = be.getConnector(t.id, t.rdns);
      g.state.activeChain === P.CHAIN.SOLANA &&
        ho.handleSolanaDeeplinkRedirect(
          (e == null ? void 0 : e.name) || t.name || ""
        ),
        e
          ? fe.push("ConnectingExternal", { connector: e })
          : fe.push("ConnectingWalletConnect", { wallet: t });
    },
    getConnectors(t) {
      return t
        ? this.getConnectorsByNamespace(t)
        : this.mergeMultiChainConnectors(te.allConnectors);
    },
    setFilterByNamespace(t) {
      (te.filterByNamespace = t),
        (te.connectors = this.getConnectors(t)),
        V.setFilterByNamespace(t);
    },
    setConnectorId(t, e) {
      t &&
        ((te.activeConnectorIds = { ...te.activeConnectorIds, [e]: t }),
        L.setConnectedConnectorId(e, t));
    },
    removeConnectorId(t) {
      (te.activeConnectorIds = { ...te.activeConnectorIds, [t]: void 0 }),
        L.deleteConnectedConnectorId(t);
    },
    getConnectorId(t) {
      if (t) return te.activeConnectorIds[t];
    },
    isConnected(t) {
      return t
        ? !!te.activeConnectorIds[t]
        : Object.values(te.activeConnectorIds).some((e) => !!e);
    },
    resetConnectorIds() {
      te.activeConnectorIds = { ...la };
    },
  };
function cn(t, e) {
  return be.getConnectorId(t) === e;
}
function So(t) {
  const e = Array.from(g.state.chains.keys());
  let r = [];
  return (
    t
      ? (r.push([t, g.state.chains.get(t)]),
        cn(t, P.CONNECTOR_ID.WALLET_CONNECT)
          ? e.forEach((n) => {
              n !== t &&
                cn(n, P.CONNECTOR_ID.WALLET_CONNECT) &&
                r.push([n, g.state.chains.get(n)]);
            })
          : cn(t, P.CONNECTOR_ID.AUTH) &&
            e.forEach((n) => {
              n !== t &&
                cn(n, P.CONNECTOR_ID.AUTH) &&
                r.push([n, g.state.chains.get(n)]);
            }))
      : (r = Array.from(g.state.chains.entries())),
    r
  );
}
var ws = { exports: {} },
  Ht = typeof Reflect == "object" ? Reflect : null,
  Is =
    Ht && typeof Ht.apply == "function"
      ? Ht.apply
      : function (e, r, n) {
          return Function.prototype.apply.call(e, r, n);
        },
  gn;
Ht && typeof Ht.ownKeys == "function"
  ? (gn = Ht.ownKeys)
  : Object.getOwnPropertySymbols
  ? (gn = function (e) {
      return Object.getOwnPropertyNames(e).concat(
        Object.getOwnPropertySymbols(e)
      );
    })
  : (gn = function (e) {
      return Object.getOwnPropertyNames(e);
    });
function No(t) {
  console && console.warn && console.warn(t);
}
var ua =
  Number.isNaN ||
  function (e) {
    return e !== e;
  };
function se() {
  se.init.call(this);
}
ws.exports = se;
ws.exports.once = ko;
se.EventEmitter = se;
se.prototype._events = void 0;
se.prototype._eventsCount = 0;
se.prototype._maxListeners = void 0;
var Os = 10;
function Dn(t) {
  if (typeof t != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof t
    );
}
Object.defineProperty(se, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return Os;
  },
  set: function (t) {
    if (typeof t != "number" || t < 0 || ua(t))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          t +
          "."
      );
    Os = t;
  },
});
se.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
se.prototype.setMaxListeners = function (e) {
  if (typeof e != "number" || e < 0 || ua(e))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        e +
        "."
    );
  return (this._maxListeners = e), this;
};
function da(t) {
  return t._maxListeners === void 0 ? se.defaultMaxListeners : t._maxListeners;
}
se.prototype.getMaxListeners = function () {
  return da(this);
};
se.prototype.emit = function (e) {
  for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
  var s = e === "error",
    a = this._events;
  if (a !== void 0) s = s && a.error === void 0;
  else if (!s) return !1;
  if (s) {
    var o;
    if ((r.length > 0 && (o = r[0]), o instanceof Error)) throw o;
    var i = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw ((i.context = o), i);
  }
  var u = a[e];
  if (u === void 0) return !1;
  if (typeof u == "function") Is(u, this, r);
  else
    for (var c = u.length, d = ga(u, c), n = 0; n < c; ++n) Is(d[n], this, r);
  return !0;
};
function fa(t, e, r, n) {
  var s, a, o;
  if (
    (Dn(r),
    (a = t._events),
    a === void 0
      ? ((a = t._events = Object.create(null)), (t._eventsCount = 0))
      : (a.newListener !== void 0 &&
          (t.emit("newListener", e, r.listener ? r.listener : r),
          (a = t._events)),
        (o = a[e])),
    o === void 0)
  )
    (o = a[e] = r), ++t._eventsCount;
  else if (
    (typeof o == "function"
      ? (o = a[e] = n ? [r, o] : [o, r])
      : n
      ? o.unshift(r)
      : o.push(r),
    (s = da(t)),
    s > 0 && o.length > s && !o.warned)
  ) {
    o.warned = !0;
    var i = new Error(
      "Possible EventEmitter memory leak detected. " +
        o.length +
        " " +
        String(e) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (i.name = "MaxListenersExceededWarning"),
      (i.emitter = t),
      (i.type = e),
      (i.count = o.length),
      No(i);
  }
  return t;
}
se.prototype.addListener = function (e, r) {
  return fa(this, e, r, !1);
};
se.prototype.on = se.prototype.addListener;
se.prototype.prependListener = function (e, r) {
  return fa(this, e, r, !0);
};
function Ro() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function pa(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
    s = Ro.bind(n);
  return (s.listener = r), (n.wrapFn = s), s;
}
se.prototype.once = function (e, r) {
  return Dn(r), this.on(e, pa(this, e, r)), this;
};
se.prototype.prependOnceListener = function (e, r) {
  return Dn(r), this.prependListener(e, pa(this, e, r)), this;
};
se.prototype.removeListener = function (e, r) {
  var n, s, a, o, i;
  if ((Dn(r), (s = this._events), s === void 0)) return this;
  if (((n = s[e]), n === void 0)) return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete s[e],
        s.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (a = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === r || n[o].listener === r) {
        (i = n[o].listener), (a = o);
        break;
      }
    if (a < 0) return this;
    a === 0 ? n.shift() : Io(n, a),
      n.length === 1 && (s[e] = n[0]),
      s.removeListener !== void 0 && this.emit("removeListener", e, i || r);
  }
  return this;
};
se.prototype.off = se.prototype.removeListener;
se.prototype.removeAllListeners = function (e) {
  var r, n, s;
  if (((n = this._events), n === void 0)) return this;
  if (n.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : n[e] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete n[e]),
      this
    );
  if (arguments.length === 0) {
    var a = Object.keys(n),
      o;
    for (s = 0; s < a.length; ++s)
      (o = a[s]), o !== "removeListener" && this.removeAllListeners(o);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((r = n[e]), typeof r == "function")) this.removeListener(e, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--) this.removeListener(e, r[s]);
  return this;
};
function ha(t, e, r) {
  var n = t._events;
  if (n === void 0) return [];
  var s = n[e];
  return s === void 0
    ? []
    : typeof s == "function"
    ? r
      ? [s.listener || s]
      : [s]
    : r
    ? Oo(s)
    : ga(s, s.length);
}
se.prototype.listeners = function (e) {
  return ha(this, e, !0);
};
se.prototype.rawListeners = function (e) {
  return ha(this, e, !1);
};
se.listenerCount = function (t, e) {
  return typeof t.listenerCount == "function"
    ? t.listenerCount(e)
    : ma.call(t, e);
};
se.prototype.listenerCount = ma;
function ma(t) {
  var e = this._events;
  if (e !== void 0) {
    var r = e[t];
    if (typeof r == "function") return 1;
    if (r !== void 0) return r.length;
  }
  return 0;
}
se.prototype.eventNames = function () {
  return this._eventsCount > 0 ? gn(this._events) : [];
};
function ga(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
  return r;
}
function Io(t, e) {
  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
  t.pop();
}
function Oo(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function ko(t, e) {
  return new Promise(function (r, n) {
    function s(o) {
      t.removeListener(e, a), n(o);
    }
    function a() {
      typeof t.removeListener == "function" && t.removeListener("error", s),
        r([].slice.call(arguments));
    }
    wa(t, e, a, { once: !0 }), e !== "error" && xo(t, s, { once: !0 });
  });
}
function xo(t, e, r) {
  typeof t.on == "function" && wa(t, "error", e, r);
}
function wa(t, e, r, n) {
  if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(a) {
      n.once && t.removeEventListener(e, s), r(a);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof t
    );
}
var Po = ws.exports;
const nd = gs(Po),
  Uo = (t) =>
    JSON.stringify(t, (e, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    ),
  Lo = (t) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = t.replace(e, '$1"$2n"$3');
    return JSON.parse(r, (n, s) =>
      typeof s == "string" && s.match(/^\d+n$/)
        ? BigInt(s.substring(0, s.length - 1))
        : s
    );
  };
function sd(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Lo(t);
  } catch {
    return t;
  }
}
function ks(t) {
  return typeof t == "string" ? t : Uo(t) || "";
}
function Mo(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return '"[Circular]"';
  }
}
var Do = Bo;
function Bo(t, e, r) {
  var n = (r && r.stringify) || Mo,
    s = 1;
  if (typeof t == "object" && t !== null) {
    var a = e.length + s;
    if (a === 1) return t;
    var o = new Array(a);
    o[0] = n(t);
    for (var i = 1; i < a; i++) o[i] = n(e[i]);
    return o.join(" ");
  }
  if (typeof t != "string") return t;
  var u = e.length;
  if (u === 0) return t;
  for (
    var c = "", d = 1 - s, f = -1, m = (t && t.length) || 0, p = 0;
    p < m;

  ) {
    if (t.charCodeAt(p) === 37 && p + 1 < m) {
      switch (((f = f > -1 ? f : 0), t.charCodeAt(p + 1))) {
        case 100:
        case 102:
          if (d >= u || e[d] == null) break;
          f < p && (c += t.slice(f, p)), (c += Number(e[d])), (f = p + 2), p++;
          break;
        case 105:
          if (d >= u || e[d] == null) break;
          f < p && (c += t.slice(f, p)),
            (c += Math.floor(Number(e[d]))),
            (f = p + 2),
            p++;
          break;
        case 79:
        case 111:
        case 106:
          if (d >= u || e[d] === void 0) break;
          f < p && (c += t.slice(f, p));
          var E = typeof e[d];
          if (E === "string") {
            (c += "'" + e[d] + "'"), (f = p + 2), p++;
            break;
          }
          if (E === "function") {
            (c += e[d].name || "<anonymous>"), (f = p + 2), p++;
            break;
          }
          (c += n(e[d])), (f = p + 2), p++;
          break;
        case 115:
          if (d >= u) break;
          f < p && (c += t.slice(f, p)), (c += String(e[d])), (f = p + 2), p++;
          break;
        case 37:
          f < p && (c += t.slice(f, p)), (c += "%"), (f = p + 2), p++, d--;
          break;
      }
      ++d;
    }
    ++p;
  }
  return f === -1 ? t : (f < m && (c += t.slice(f)), c);
}
const xs = Do;
var $t = Ye;
const wr = Zo().console || {},
  $o = {
    mapHttpRequest: ln,
    mapHttpResponse: ln,
    wrapRequestSerializer: Vn,
    wrapResponseSerializer: Vn,
    wrapErrorSerializer: Vn,
    req: ln,
    res: ln,
    err: zo,
  };
function jo(t, e) {
  return Array.isArray(t)
    ? t.filter(function (n) {
        return n !== "!stdSerializers.err";
      })
    : t === !0
    ? Object.keys(e)
    : !1;
}
function Ye(t) {
  (t = t || {}), (t.browser = t.browser || {});
  const e = t.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const r = t.browser.write || wr;
  t.browser.write && (t.browser.asObject = !0);
  const n = t.serializers || {},
    s = jo(t.browser.serialize, n);
  let a = t.browser.serialize;
  Array.isArray(t.browser.serialize) &&
    t.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (a = !1);
  const o = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof r == "function" &&
    (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
    t.enabled === !1 && (t.level = "silent");
  const i = t.level || "info",
    u = Object.create(r);
  u.log || (u.log = _r),
    Object.defineProperty(u, "levelVal", { get: d }),
    Object.defineProperty(u, "level", { get: f, set: m });
  const c = {
    transmit: e,
    serialize: s,
    asObject: t.browser.asObject,
    levels: o,
    timestamp: qo(t),
  };
  (u.levels = Ye.levels),
    (u.level = i),
    (u.setMaxListeners =
      u.getMaxListeners =
      u.emit =
      u.addListener =
      u.on =
      u.prependListener =
      u.once =
      u.prependOnceListener =
      u.removeListener =
      u.removeAllListeners =
      u.listeners =
      u.listenerCount =
      u.eventNames =
      u.write =
      u.flush =
        _r),
    (u.serializers = n),
    (u._serialize = s),
    (u._stdErrSerialize = a),
    (u.child = p),
    e && (u._logEvent = ss());
  function d() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function f() {
    return this._level;
  }
  function m(E) {
    if (E !== "silent" && !this.levels.values[E])
      throw Error("unknown level " + E);
    (this._level = E),
      Lt(c, u, "error", "log"),
      Lt(c, u, "fatal", "error"),
      Lt(c, u, "warn", "error"),
      Lt(c, u, "info", "log"),
      Lt(c, u, "debug", "log"),
      Lt(c, u, "trace", "log");
  }
  function p(E, w) {
    if (!E) throw new Error("missing bindings for child Pino");
    (w = w || {}), s && E.serializers && (w.serializers = E.serializers);
    const S = w.serializers;
    if (s && S) {
      var R = Object.assign({}, n, S),
        H = t.browser.serialize === !0 ? Object.keys(R) : s;
      delete E.serializers, Bn([E], H, R, this._stdErrSerialize);
    }
    function $(G) {
      (this._childLevel = (G._childLevel | 0) + 1),
        (this.error = Mt(G, E, "error")),
        (this.fatal = Mt(G, E, "fatal")),
        (this.warn = Mt(G, E, "warn")),
        (this.info = Mt(G, E, "info")),
        (this.debug = Mt(G, E, "debug")),
        (this.trace = Mt(G, E, "trace")),
        R && ((this.serializers = R), (this._serialize = H)),
        e && (this._logEvent = ss([].concat(G._logEvent.bindings, E)));
    }
    return ($.prototype = this), new $(this);
  }
  return u;
}
Ye.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
Ye.stdSerializers = $o;
Ye.stdTimeFunctions = Object.assign(
  {},
  { nullTime: _a, epochTime: Ea, unixTime: Vo, isoTime: Go }
);
function Lt(t, e, r, n) {
  const s = Object.getPrototypeOf(e);
  (e[r] =
    e.levelVal > e.levels.values[r] ? _r : s[r] ? s[r] : wr[r] || wr[n] || _r),
    Fo(t, e, r);
}
function Fo(t, e, r) {
  (!t.transmit && e[r] === _r) ||
    (e[r] = (function (n) {
      return function () {
        const a = t.timestamp(),
          o = new Array(arguments.length),
          i =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === wr
              ? wr
              : this;
        for (var u = 0; u < o.length; u++) o[u] = arguments[u];
        if (
          (t.serialize &&
            !t.asObject &&
            Bn(o, this._serialize, this.serializers, this._stdErrSerialize),
          t.asObject ? n.call(i, Wo(this, r, o, a)) : n.apply(i, o),
          t.transmit)
        ) {
          const c = t.transmit.level || e.level,
            d = Ye.levels.values[c],
            f = Ye.levels.values[r];
          if (f < d) return;
          Ho(
            this,
            {
              ts: a,
              methodLevel: r,
              methodValue: f,
              transmitValue: Ye.levels.values[t.transmit.level || e.level],
              send: t.transmit.send,
              val: e.levelVal,
            },
            o
          );
        }
      };
    })(e[r]));
}
function Wo(t, e, r, n) {
  t._serialize && Bn(r, t._serialize, t.serializers, t._stdErrSerialize);
  const s = r.slice();
  let a = s[0];
  const o = {};
  n && (o.time = n), (o.level = Ye.levels.values[e]);
  let i = (t._childLevel | 0) + 1;
  if ((i < 1 && (i = 1), a !== null && typeof a == "object")) {
    for (; i-- && typeof s[0] == "object"; ) Object.assign(o, s.shift());
    a = s.length ? xs(s.shift(), s) : void 0;
  } else typeof a == "string" && (a = xs(s.shift(), s));
  return a !== void 0 && (o.msg = a), o;
}
function Bn(t, e, r, n) {
  for (const s in t)
    if (n && t[s] instanceof Error) t[s] = Ye.stdSerializers.err(t[s]);
    else if (typeof t[s] == "object" && !Array.isArray(t[s]))
      for (const a in t[s])
        e && e.indexOf(a) > -1 && a in r && (t[s][a] = r[a](t[s][a]));
}
function Mt(t, e, r) {
  return function () {
    const n = new Array(1 + arguments.length);
    n[0] = e;
    for (var s = 1; s < n.length; s++) n[s] = arguments[s - 1];
    return t[r].apply(this, n);
  };
}
function Ho(t, e, r) {
  const n = e.send,
    s = e.ts,
    a = e.methodLevel,
    o = e.methodValue,
    i = e.val,
    u = t._logEvent.bindings;
  Bn(
    r,
    t._serialize || Object.keys(t.serializers),
    t.serializers,
    t._stdErrSerialize === void 0 ? !0 : t._stdErrSerialize
  ),
    (t._logEvent.ts = s),
    (t._logEvent.messages = r.filter(function (c) {
      return u.indexOf(c) === -1;
    })),
    (t._logEvent.level.label = a),
    (t._logEvent.level.value = o),
    n(a, t._logEvent, i),
    (t._logEvent = ss(u));
}
function ss(t) {
  return {
    ts: 0,
    messages: [],
    bindings: t || [],
    level: { label: "", value: 0 },
  };
}
function zo(t) {
  const e = { type: t.constructor.name, msg: t.message, stack: t.stack };
  for (const r in t) e[r] === void 0 && (e[r] = t[r]);
  return e;
}
function qo(t) {
  return typeof t.timestamp == "function"
    ? t.timestamp
    : t.timestamp === !1
    ? _a
    : Ea;
}
function ln() {
  return {};
}
function Vn(t) {
  return t;
}
function _r() {}
function _a() {
  return !1;
}
function Ea() {
  return Date.now();
}
function Vo() {
  return Math.round(Date.now() / 1e3);
}
function Go() {
  return new Date(Date.now()).toISOString();
}
function Zo() {
  function t(e) {
    return typeof e < "u" && e;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return t(self) || t(window) || t(this) || {};
  }
}
const ya = gs($t),
  Ko = { level: "info" },
  rn = "custom_context",
  _s = 1e3 * 1024;
class Yo {
  constructor(e) {
    (this.nodeValue = e),
      (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
      (this.next = null);
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
}
let Ps = class {
    constructor(e) {
      (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = e),
        (this.sizeInBytes = 0);
    }
    append(e) {
      const r = new Yo(e);
      if (r.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`
        );
      for (; this.size + r.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = r), (this.tail = r))
        : ((this.head = r), (this.tail = r)),
        this.lengthInNodes++,
        (this.sizeInBytes += r.size);
    }
    shift() {
      if (!this.head) return;
      const e = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= e.size);
    }
    toArray() {
      const e = [];
      let r = this.head;
      for (; r !== null; ) e.push(r.value), (r = r.next);
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return { done: !0, value: null };
          const r = e.value;
          return (e = e.next), { done: !1, value: r };
        },
      };
    }
  },
  ba = class {
    constructor(e, r = _s) {
      (this.level = e ?? "error"),
        (this.levelValue = $t.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = r),
        (this.logs = new Ps(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(e, r) {
      r === $t.levels.values.error
        ? console.error(e)
        : r === $t.levels.values.warn
        ? console.warn(e)
        : r === $t.levels.values.debug
        ? console.debug(e)
        : r === $t.levels.values.trace
        ? console.trace(e)
        : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(ks({ timestamp: new Date().toISOString(), log: e }));
      const r = typeof e == "string" ? JSON.parse(e).level : e.level;
      r >= this.levelValue && this.forwardToConsole(e, r);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new Ps(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      const r = this.getLogArray();
      return (
        r.push(ks({ extraMetadata: e })),
        new Blob(r, { type: "application/json" })
      );
    }
  },
  Jo = class {
    constructor(e, r = _s) {
      this.baseChunkLogger = new ba(e, r);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      const r = URL.createObjectURL(this.logsToBlob(e)),
        n = document.createElement("a");
      (n.href = r),
        (n.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(n),
        n.click(),
        document.body.removeChild(n),
        URL.revokeObjectURL(r);
    }
  },
  Xo = class {
    constructor(e, r = _s) {
      this.baseChunkLogger = new ba(e, r);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  };
var Qo = Object.defineProperty,
  ei = Object.defineProperties,
  ti = Object.getOwnPropertyDescriptors,
  Us = Object.getOwnPropertySymbols,
  ri = Object.prototype.hasOwnProperty,
  ni = Object.prototype.propertyIsEnumerable,
  Ls = (t, e, r) =>
    e in t
      ? Qo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  Cn = (t, e) => {
    for (var r in e || (e = {})) ri.call(e, r) && Ls(t, r, e[r]);
    if (Us) for (var r of Us(e)) ni.call(e, r) && Ls(t, r, e[r]);
    return t;
  },
  vn = (t, e) => ei(t, ti(e));
function si(t) {
  return vn(Cn({}, t), { level: (t == null ? void 0 : t.level) || Ko.level });
}
function ai(t, e = rn) {
  return t[e] || "";
}
function oi(t, e, r = rn) {
  return (t[r] = e), t;
}
function ii(t, e = rn) {
  let r = "";
  return (
    typeof t.bindings > "u" ? (r = ai(t, e)) : (r = t.bindings().context || ""),
    r
  );
}
function ci(t, e, r = rn) {
  const n = ii(t, r);
  return n.trim() ? `${n}/${e}` : e;
}
function li(t, e, r = rn) {
  const n = ci(t, e, r),
    s = t.child({ context: n });
  return oi(s, n, r);
}
function ui(t) {
  var e, r;
  const n = new Jo((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return {
    logger: ya(
      vn(Cn({}, t.opts), {
        level: "trace",
        browser: vn(Cn({}, (r = t.opts) == null ? void 0 : r.browser), {
          write: (s) => n.write(s),
        }),
      })
    ),
    chunkLoggerController: n,
  };
}
function di(t) {
  var e;
  const r = new Xo((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return {
    logger: ya(vn(Cn({}, t.opts), { level: "trace" }), r),
    chunkLoggerController: r,
  };
}
function fi(t) {
  return typeof t.loggerOverride < "u" && typeof t.loggerOverride != "string"
    ? { logger: t.loggerOverride, chunkLoggerController: null }
    : typeof window < "u"
    ? ui(t)
    : di(t);
}
function pi(t) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  const e = new Uint8Array(256);
  for (let c = 0; c < e.length; c++) e[c] = 255;
  for (let c = 0; c < t.length; c++) {
    const d = t.charAt(c),
      f = d.charCodeAt(0);
    if (e[f] !== 255) throw new TypeError(d + " is ambiguous");
    e[f] = c;
  }
  const r = t.length,
    n = t.charAt(0),
    s = Math.log(r) / Math.log(256),
    a = Math.log(256) / Math.log(r);
  function o(c) {
    if (
      (c instanceof Uint8Array ||
        (ArrayBuffer.isView(c)
          ? (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
          : Array.isArray(c) && (c = Uint8Array.from(c))),
      !(c instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (c.length === 0) return "";
    let d = 0,
      f = 0,
      m = 0;
    const p = c.length;
    for (; m !== p && c[m] === 0; ) m++, d++;
    const E = ((p - m) * a + 1) >>> 0,
      w = new Uint8Array(E);
    for (; m !== p; ) {
      let H = c[m],
        $ = 0;
      for (let G = E - 1; (H !== 0 || $ < f) && G !== -1; G--, $++)
        (H += (256 * w[G]) >>> 0), (w[G] = H % r >>> 0), (H = (H / r) >>> 0);
      if (H !== 0) throw new Error("Non-zero carry");
      (f = $), m++;
    }
    let S = E - f;
    for (; S !== E && w[S] === 0; ) S++;
    let R = n.repeat(d);
    for (; S < E; ++S) R += t.charAt(w[S]);
    return R;
  }
  function i(c) {
    if (typeof c != "string") throw new TypeError("Expected String");
    if (c.length === 0) return new Uint8Array();
    let d = 0,
      f = 0,
      m = 0;
    for (; c[d] === n; ) f++, d++;
    const p = ((c.length - d) * s + 1) >>> 0,
      E = new Uint8Array(p);
    for (; d < c.length; ) {
      const H = c.charCodeAt(d);
      if (H > 255) return;
      let $ = e[H];
      if ($ === 255) return;
      let G = 0;
      for (let le = p - 1; ($ !== 0 || G < m) && le !== -1; le--, G++)
        ($ += (r * E[le]) >>> 0),
          (E[le] = $ % 256 >>> 0),
          ($ = ($ / 256) >>> 0);
      if ($ !== 0) throw new Error("Non-zero carry");
      (m = G), d++;
    }
    let w = p - m;
    for (; w !== p && E[w] === 0; ) w++;
    const S = new Uint8Array(f + (p - w));
    let R = f;
    for (; w !== p; ) S[R++] = E[w++];
    return S;
  }
  function u(c) {
    const d = i(c);
    if (d) return d;
    throw new Error("Non-base" + r + " character");
  }
  return { encode: o, decodeUnsafe: i, decode: u };
}
var hi = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const ld = pi(hi);
var mi = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var as =
  function (t, e) {
    return (
      (as =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var s in n) n.hasOwnProperty(s) && (r[s] = n[s]);
        }),
      as(t, e)
    );
  };
function gi(t, e) {
  as(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype =
    e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
}
var os = function () {
  return (
    (os =
      Object.assign ||
      function (e) {
        for (var r, n = 1, s = arguments.length; n < s; n++) {
          r = arguments[n];
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        }
        return e;
      }),
    os.apply(this, arguments)
  );
};
function wi(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      e.indexOf(n) < 0 &&
      (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
        (r[n[s]] = t[n[s]]);
  return r;
}
function _i(t, e, r, n) {
  var s = arguments.length,
    a =
      s < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(t, e, r, n);
  else
    for (var i = t.length - 1; i >= 0; i--)
      (o = t[i]) && (a = (s < 3 ? o(a) : s > 3 ? o(e, r, a) : o(e, r)) || a);
  return s > 3 && a && Object.defineProperty(e, r, a), a;
}
function Ei(t, e) {
  return function (r, n) {
    e(r, n, t);
  };
}
function yi(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function bi(t, e, r, n) {
  function s(a) {
    return a instanceof r
      ? a
      : new r(function (o) {
          o(a);
        });
  }
  return new (r || (r = Promise))(function (a, o) {
    function i(d) {
      try {
        c(n.next(d));
      } catch (f) {
        o(f);
      }
    }
    function u(d) {
      try {
        c(n.throw(d));
      } catch (f) {
        o(f);
      }
    }
    function c(d) {
      d.done ? a(d.value) : s(d.value).then(i, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function Ci(t, e) {
  var r = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    n,
    s,
    a,
    o;
  return (
    (o = { next: i(0), throw: i(1), return: i(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function i(c) {
    return function (d) {
      return u([c, d]);
    };
  }
  function u(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (
          ((n = 1),
          s &&
            (a =
              c[0] & 2
                ? s.return
                : c[0]
                ? s.throw || ((a = s.return) && a.call(s), 0)
                : s.next) &&
            !(a = a.call(s, c[1])).done)
        )
          return a;
        switch (((s = 0), a && (c = [c[0] & 2, a.value]), c[0])) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, (s = c[1]), (c = [0]);
            continue;
          case 7:
            (c = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((a = r.trys),
              !(a = a.length > 0 && a[a.length - 1]) &&
                (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || (c[1] > a[0] && c[1] < a[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              (r.label = a[1]), (a = c);
              break;
            }
            if (a && r.label < a[2]) {
              (r.label = a[2]), r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (d) {
        (c = [6, d]), (s = 0);
      } finally {
        n = a = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function vi(t, e, r, n) {
  n === void 0 && (n = r), (t[n] = e[r]);
}
function Ai(t, e) {
  for (var r in t) r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function is(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Ca(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t),
    s,
    a = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; ) a.push(s.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Ti() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Ca(arguments[e]));
  return t;
}
function Si() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var a = arguments[e], o = 0, i = a.length; o < i; o++, s++)
      n[s] = a[o];
  return n;
}
function Er(t) {
  return this instanceof Er ? ((this.v = t), this) : new Er(t);
}
function Ni(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []),
    s,
    a = [];
  return (
    (s = {}),
    o("next"),
    o("throw"),
    o("return"),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function o(m) {
    n[m] &&
      (s[m] = function (p) {
        return new Promise(function (E, w) {
          a.push([m, p, E, w]) > 1 || i(m, p);
        });
      });
  }
  function i(m, p) {
    try {
      u(n[m](p));
    } catch (E) {
      f(a[0][3], E);
    }
  }
  function u(m) {
    m.value instanceof Er
      ? Promise.resolve(m.value.v).then(c, d)
      : f(a[0][2], m);
  }
  function c(m) {
    i("next", m);
  }
  function d(m) {
    i("throw", m);
  }
  function f(m, p) {
    m(p), a.shift(), a.length && i(a[0][0], a[0][1]);
  }
}
function Ri(t) {
  var e, r;
  return (
    (e = {}),
    n("next"),
    n("throw", function (s) {
      throw s;
    }),
    n("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function n(s, a) {
    e[s] = t[s]
      ? function (o) {
          return (r = !r)
            ? { value: Er(t[s](o)), done: s === "return" }
            : a
            ? a(o)
            : o;
        }
      : a;
  }
}
function Ii(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof is == "function" ? is(t) : t[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(a) {
    r[a] =
      t[a] &&
      function (o) {
        return new Promise(function (i, u) {
          (o = t[a](o)), s(i, u, o.done, o.value);
        });
      };
  }
  function s(a, o, i, u) {
    Promise.resolve(u).then(function (c) {
      a({ value: c, done: i });
    }, o);
  }
}
function Oi(t, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(t, "raw", { value: e })
      : (t.raw = e),
    t
  );
}
function ki(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null)
    for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return (e.default = t), e;
}
function xi(t) {
  return t && t.__esModule ? t : { default: t };
}
function Pi(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Ui(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const Li = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return os;
        },
        __asyncDelegator: Ri,
        __asyncGenerator: Ni,
        __asyncValues: Ii,
        __await: Er,
        __awaiter: bi,
        __classPrivateFieldGet: Pi,
        __classPrivateFieldSet: Ui,
        __createBinding: vi,
        __decorate: _i,
        __exportStar: Ai,
        __extends: gi,
        __generator: Ci,
        __importDefault: xi,
        __importStar: ki,
        __makeTemplateObject: Oi,
        __metadata: yi,
        __param: Ei,
        __read: Ca,
        __rest: wi,
        __spread: Ti,
        __spreadArrays: Si,
        __values: is,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Mi = Xa(Li);
var rt = {},
  Ms;
function Di() {
  if (Ms) return rt;
  (Ms = 1),
    Object.defineProperty(rt, "__esModule", { value: !0 }),
    (rt.isBrowserCryptoAvailable =
      rt.getSubtleCrypto =
      rt.getBrowerCrypto =
        void 0);
  function t() {
    return (
      (Ge == null ? void 0 : Ge.crypto) ||
      (Ge == null ? void 0 : Ge.msCrypto) ||
      {}
    );
  }
  rt.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  rt.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return (rt.isBrowserCryptoAvailable = r), rt;
}
var nt = {},
  Ds;
function Bi() {
  if (Ds) return nt;
  (Ds = 1),
    Object.defineProperty(nt, "__esModule", { value: !0 }),
    (nt.isBrowser = nt.isNode = nt.isReactNative = void 0);
  function t() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  nt.isReactNative = t;
  function e() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  nt.isNode = e;
  function r() {
    return !t() && !e();
  }
  return (nt.isBrowser = r), nt;
}
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Mi;
  e.__exportStar(Di(), t), e.__exportStar(Bi(), t);
})(mi);
var cs = { exports: {} };
(function (t, e) {
  var r =
      (typeof globalThis < "u" && globalThis) ||
      (typeof self < "u" && self) ||
      (typeof Ge < "u" && Ge),
    n = (function () {
      function a() {
        (this.fetch = !1), (this.DOMException = r.DOMException);
      }
      return (a.prototype = r), new a();
    })();
  (function (a) {
    (function (o) {
      var i =
          (typeof a < "u" && a) ||
          (typeof self < "u" && self) ||
          (typeof Ge < "u" && Ge) ||
          {},
        u = {
          searchParams: "URLSearchParams" in i,
          iterable: "Symbol" in i && "iterator" in Symbol,
          blob:
            "FileReader" in i &&
            "Blob" in i &&
            (function () {
              try {
                return new Blob(), !0;
              } catch {
                return !1;
              }
            })(),
          formData: "FormData" in i,
          arrayBuffer: "ArrayBuffer" in i,
        };
      function c(h) {
        return h && DataView.prototype.isPrototypeOf(h);
      }
      if (u.arrayBuffer)
        var d = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          f =
            ArrayBuffer.isView ||
            function (h) {
              return h && d.indexOf(Object.prototype.toString.call(h)) > -1;
            };
      function m(h) {
        if (
          (typeof h != "string" && (h = String(h)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(h) || h === "")
        )
          throw new TypeError(
            'Invalid character in header field name: "' + h + '"'
          );
        return h.toLowerCase();
      }
      function p(h) {
        return typeof h != "string" && (h = String(h)), h;
      }
      function E(h) {
        var _ = {
          next: function () {
            var q = h.shift();
            return { done: q === void 0, value: q };
          },
        };
        return (
          u.iterable &&
            (_[Symbol.iterator] = function () {
              return _;
            }),
          _
        );
      }
      function w(h) {
        (this.map = {}),
          h instanceof w
            ? h.forEach(function (_, q) {
                this.append(q, _);
              }, this)
            : Array.isArray(h)
            ? h.forEach(function (_) {
                if (_.length != 2)
                  throw new TypeError(
                    "Headers constructor: expected name/value pair to be length 2, found" +
                      _.length
                  );
                this.append(_[0], _[1]);
              }, this)
            : h &&
              Object.getOwnPropertyNames(h).forEach(function (_) {
                this.append(_, h[_]);
              }, this);
      }
      (w.prototype.append = function (h, _) {
        (h = m(h)), (_ = p(_));
        var q = this.map[h];
        this.map[h] = q ? q + ", " + _ : _;
      }),
        (w.prototype.delete = function (h) {
          delete this.map[m(h)];
        }),
        (w.prototype.get = function (h) {
          return (h = m(h)), this.has(h) ? this.map[h] : null;
        }),
        (w.prototype.has = function (h) {
          return this.map.hasOwnProperty(m(h));
        }),
        (w.prototype.set = function (h, _) {
          this.map[m(h)] = p(_);
        }),
        (w.prototype.forEach = function (h, _) {
          for (var q in this.map)
            this.map.hasOwnProperty(q) && h.call(_, this.map[q], q, this);
        }),
        (w.prototype.keys = function () {
          var h = [];
          return (
            this.forEach(function (_, q) {
              h.push(q);
            }),
            E(h)
          );
        }),
        (w.prototype.values = function () {
          var h = [];
          return (
            this.forEach(function (_) {
              h.push(_);
            }),
            E(h)
          );
        }),
        (w.prototype.entries = function () {
          var h = [];
          return (
            this.forEach(function (_, q) {
              h.push([q, _]);
            }),
            E(h)
          );
        }),
        u.iterable && (w.prototype[Symbol.iterator] = w.prototype.entries);
      function S(h) {
        if (!h._noBody) {
          if (h.bodyUsed) return Promise.reject(new TypeError("Already read"));
          h.bodyUsed = !0;
        }
      }
      function R(h) {
        return new Promise(function (_, q) {
          (h.onload = function () {
            _(h.result);
          }),
            (h.onerror = function () {
              q(h.error);
            });
        });
      }
      function H(h) {
        var _ = new FileReader(),
          q = R(_);
        return _.readAsArrayBuffer(h), q;
      }
      function $(h) {
        var _ = new FileReader(),
          q = R(_),
          ae = /charset=([A-Za-z0-9_-]+)/.exec(h.type),
          ue = ae ? ae[1] : "utf-8";
        return _.readAsText(h, ue), q;
      }
      function G(h) {
        for (
          var _ = new Uint8Array(h), q = new Array(_.length), ae = 0;
          ae < _.length;
          ae++
        )
          q[ae] = String.fromCharCode(_[ae]);
        return q.join("");
      }
      function le(h) {
        if (h.slice) return h.slice(0);
        var _ = new Uint8Array(h.byteLength);
        return _.set(new Uint8Array(h)), _.buffer;
      }
      function Ce() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (h) {
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = h),
              h
                ? typeof h == "string"
                  ? (this._bodyText = h)
                  : u.blob && Blob.prototype.isPrototypeOf(h)
                  ? (this._bodyBlob = h)
                  : u.formData && FormData.prototype.isPrototypeOf(h)
                  ? (this._bodyFormData = h)
                  : u.searchParams && URLSearchParams.prototype.isPrototypeOf(h)
                  ? (this._bodyText = h.toString())
                  : u.arrayBuffer && u.blob && c(h)
                  ? ((this._bodyArrayBuffer = le(h.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : u.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(h) || f(h))
                  ? (this._bodyArrayBuffer = le(h))
                  : (this._bodyText = h = Object.prototype.toString.call(h))
                : ((this._noBody = !0), (this._bodyText = "")),
              this.headers.get("content-type") ||
                (typeof h == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : u.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(h) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          u.blob &&
            (this.blob = function () {
              var h = S(this);
              if (h) return h;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
          (this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var h = S(this);
              return (
                h ||
                (ArrayBuffer.isView(this._bodyArrayBuffer)
                  ? Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset +
                          this._bodyArrayBuffer.byteLength
                      )
                    )
                  : Promise.resolve(this._bodyArrayBuffer))
              );
            } else {
              if (u.blob) return this.blob().then(H);
              throw new Error("could not read as ArrayBuffer");
            }
          }),
          (this.text = function () {
            var h = S(this);
            if (h) return h;
            if (this._bodyBlob) return $(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(G(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          u.formData &&
            (this.formData = function () {
              return this.text().then(z);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var Te = [
        "CONNECT",
        "DELETE",
        "GET",
        "HEAD",
        "OPTIONS",
        "PATCH",
        "POST",
        "PUT",
        "TRACE",
      ];
      function ot(h) {
        var _ = h.toUpperCase();
        return Te.indexOf(_) > -1 ? _ : h;
      }
      function D(h, _) {
        if (!(this instanceof D))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        _ = _ || {};
        var q = _.body;
        if (h instanceof D) {
          if (h.bodyUsed) throw new TypeError("Already read");
          (this.url = h.url),
            (this.credentials = h.credentials),
            _.headers || (this.headers = new w(h.headers)),
            (this.method = h.method),
            (this.mode = h.mode),
            (this.signal = h.signal),
            !q && h._bodyInit != null && ((q = h._bodyInit), (h.bodyUsed = !0));
        } else this.url = String(h);
        if (
          ((this.credentials =
            _.credentials || this.credentials || "same-origin"),
          (_.headers || !this.headers) && (this.headers = new w(_.headers)),
          (this.method = ot(_.method || this.method || "GET")),
          (this.mode = _.mode || this.mode || null),
          (this.signal =
            _.signal ||
            this.signal ||
            (function () {
              if ("AbortController" in i) {
                var Z = new AbortController();
                return Z.signal;
              }
            })()),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && q)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(q),
          (this.method === "GET" || this.method === "HEAD") &&
            (_.cache === "no-store" || _.cache === "no-cache"))
        ) {
          var ae = /([?&])_=[^&]*/;
          if (ae.test(this.url))
            this.url = this.url.replace(ae, "$1_=" + new Date().getTime());
          else {
            var ue = /\?/;
            this.url +=
              (ue.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      D.prototype.clone = function () {
        return new D(this, { body: this._bodyInit });
      };
      function z(h) {
        var _ = new FormData();
        return (
          h
            .trim()
            .split("&")
            .forEach(function (q) {
              if (q) {
                var ae = q.split("="),
                  ue = ae.shift().replace(/\+/g, " "),
                  Z = ae.join("=").replace(/\+/g, " ");
                _.append(decodeURIComponent(ue), decodeURIComponent(Z));
              }
            }),
          _
        );
      }
      function O(h) {
        var _ = new w(),
          q = h.replace(/\r?\n[\t ]+/g, " ");
        return (
          q
            .split("\r")
            .map(function (ae) {
              return ae.indexOf(`
`) === 0
                ? ae.substr(1, ae.length)
                : ae;
            })
            .forEach(function (ae) {
              var ue = ae.split(":"),
                Z = ue.shift().trim();
              if (Z) {
                var an = ue.join(":").trim();
                try {
                  _.append(Z, an);
                } catch (Fn) {
                  console.warn("Response " + Fn.message);
                }
              }
            }),
          _
        );
      }
      Ce.call(D.prototype);
      function ne(h, _) {
        if (!(this instanceof ne))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        if (
          (_ || (_ = {}),
          (this.type = "default"),
          (this.status = _.status === void 0 ? 200 : _.status),
          this.status < 200 || this.status > 599)
        )
          throw new RangeError(
            "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
          );
        (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = _.statusText === void 0 ? "" : "" + _.statusText),
          (this.headers = new w(_.headers)),
          (this.url = _.url || ""),
          this._initBody(h);
      }
      Ce.call(ne.prototype),
        (ne.prototype.clone = function () {
          return new ne(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new w(this.headers),
            url: this.url,
          });
        }),
        (ne.error = function () {
          var h = new ne(null, { status: 200, statusText: "" });
          return (h.ok = !1), (h.status = 0), (h.type = "error"), h;
        });
      var it = [301, 302, 303, 307, 308];
      (ne.redirect = function (h, _) {
        if (it.indexOf(_) === -1) throw new RangeError("Invalid status code");
        return new ne(null, { status: _, headers: { location: h } });
      }),
        (o.DOMException = i.DOMException);
      try {
        new o.DOMException();
      } catch {
        (o.DOMException = function (_, q) {
          (this.message = _), (this.name = q);
          var ae = Error(_);
          this.stack = ae.stack;
        }),
          (o.DOMException.prototype = Object.create(Error.prototype)),
          (o.DOMException.prototype.constructor = o.DOMException);
      }
      function Qe(h, _) {
        return new Promise(function (q, ae) {
          var ue = new D(h, _);
          if (ue.signal && ue.signal.aborted)
            return ae(new o.DOMException("Aborted", "AbortError"));
          var Z = new XMLHttpRequest();
          function an() {
            Z.abort();
          }
          (Z.onload = function () {
            var Ee = {
              statusText: Z.statusText,
              headers: O(Z.getAllResponseHeaders() || ""),
            };
            ue.url.indexOf("file://") === 0 &&
            (Z.status < 200 || Z.status > 599)
              ? (Ee.status = 200)
              : (Ee.status = Z.status),
              (Ee.url =
                "responseURL" in Z
                  ? Z.responseURL
                  : Ee.headers.get("X-Request-URL"));
            var Et = "response" in Z ? Z.response : Z.responseText;
            setTimeout(function () {
              q(new ne(Et, Ee));
            }, 0);
          }),
            (Z.onerror = function () {
              setTimeout(function () {
                ae(new TypeError("Network request failed"));
              }, 0);
            }),
            (Z.ontimeout = function () {
              setTimeout(function () {
                ae(new TypeError("Network request timed out"));
              }, 0);
            }),
            (Z.onabort = function () {
              setTimeout(function () {
                ae(new o.DOMException("Aborted", "AbortError"));
              }, 0);
            });
          function Fn(Ee) {
            try {
              return Ee === "" && i.location.href ? i.location.href : Ee;
            } catch {
              return Ee;
            }
          }
          if (
            (Z.open(ue.method, Fn(ue.url), !0),
            ue.credentials === "include"
              ? (Z.withCredentials = !0)
              : ue.credentials === "omit" && (Z.withCredentials = !1),
            "responseType" in Z &&
              (u.blob
                ? (Z.responseType = "blob")
                : u.arrayBuffer && (Z.responseType = "arraybuffer")),
            _ &&
              typeof _.headers == "object" &&
              !(
                _.headers instanceof w ||
                (i.Headers && _.headers instanceof i.Headers)
              ))
          ) {
            var Cs = [];
            Object.getOwnPropertyNames(_.headers).forEach(function (Ee) {
              Cs.push(m(Ee)), Z.setRequestHeader(Ee, p(_.headers[Ee]));
            }),
              ue.headers.forEach(function (Ee, Et) {
                Cs.indexOf(Et) === -1 && Z.setRequestHeader(Et, Ee);
              });
          } else
            ue.headers.forEach(function (Ee, Et) {
              Z.setRequestHeader(Et, Ee);
            });
          ue.signal &&
            (ue.signal.addEventListener("abort", an),
            (Z.onreadystatechange = function () {
              Z.readyState === 4 && ue.signal.removeEventListener("abort", an);
            })),
            Z.send(typeof ue._bodyInit > "u" ? null : ue._bodyInit);
        });
      }
      return (
        (Qe.polyfill = !0),
        i.fetch ||
          ((i.fetch = Qe), (i.Headers = w), (i.Request = D), (i.Response = ne)),
        (o.Headers = w),
        (o.Request = D),
        (o.Response = ne),
        (o.fetch = Qe),
        Object.defineProperty(o, "__esModule", { value: !0 }),
        o
      );
    })({});
  })(n),
    (n.fetch.ponyfill = !0),
    delete n.fetch.polyfill;
  var s = r.fetch ? r : n;
  (e = s.fetch),
    (e.default = s.fetch),
    (e.fetch = s.fetch),
    (e.Headers = s.Headers),
    (e.Request = s.Request),
    (e.Response = s.Response),
    (t.exports = e);
})(cs, cs.exports);
var $i = cs.exports;
const ud = gs($i);
var Kt = {};
const ji = "https://secure.walletconnect.org/sdk",
  Fi =
    (typeof process < "u" && typeof Kt < "u"
      ? Kt.NEXT_PUBLIC_SECURE_SITE_SDK_URL
      : void 0) || ji,
  Wi =
    (typeof process < "u" && typeof Kt < "u"
      ? Kt.NEXT_PUBLIC_DEFAULT_LOG_LEVEL
      : void 0) || "error",
  Hi =
    (typeof process < "u" && typeof Kt < "u"
      ? Kt.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION
      : void 0) || "4",
  N = {
    APP_EVENT_KEY: "@w3m-app/",
    FRAME_EVENT_KEY: "@w3m-frame/",
    RPC_METHOD_KEY: "RPC_",
    STORAGE_KEY: "@appkit-wallet/",
    SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
    EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
    LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
    LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
    EMAIL: "EMAIL",
    PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
    SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
    SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
    SOCIAL_USERNAME: "SOCIAL_USERNAME",
    APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
    APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
    APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
    APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
    APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
    APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
    APP_GET_USER: "@w3m-app/GET_USER",
    APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
    APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
    APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
    APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
    APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
    APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
    APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
    APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
    APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
    APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
    APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:
      "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
    APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
    APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
    APP_CONNECT_FARCASTER: "@w3m-app/CONNECT_FARCASTER",
    APP_GET_FARCASTER_URI: "@w3m-app/GET_FARCASTER_URI",
    APP_RELOAD: "@w3m-app/RELOAD",
    FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
    FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
    FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
    FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
    FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
    FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
    FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
    FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
    FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
    FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
    FRAME_CONNECT_FARCASTER_SUCCESS: "@w3m-frame/CONNECT_FARCASTER_SUCCESS",
    FRAME_CONNECT_FARCASTER_ERROR: "@w3m-frame/CONNECT_FARCASTER_ERROR",
    FRAME_GET_FARCASTER_URI_SUCCESS: "@w3m-frame/GET_FARCASTER_URI_SUCCESS",
    FRAME_GET_FARCASTER_URI_ERROR: "@w3m-frame/GET_FARCASTER_URI_ERROR",
    FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:
      "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
    FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:
      "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
    FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
    FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
    FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
    FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
    FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
    FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
    FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
    FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
    FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
    FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
    FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
    FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
    FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
      "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
    FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
      "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
      "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
    FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
      "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
    FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
    FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
    FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
    FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
      "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
    FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
      "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
    FRAME_INIT_SMART_ACCOUNT_SUCCESS: "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
    FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
    FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
      "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
    FRAME_SET_PREFERRED_ACCOUNT_ERROR: "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
    FRAME_READY: "@w3m-frame/READY",
    FRAME_RELOAD_SUCCESS: "@w3m-frame/RELOAD_SUCCESS",
    FRAME_RELOAD_ERROR: "@w3m-frame/RELOAD_ERROR",
    RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
    RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
    RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT",
  },
  we = {
    SAFE_RPC_METHODS: [
      "eth_accounts",
      "eth_blockNumber",
      "eth_call",
      "eth_chainId",
      "eth_estimateGas",
      "eth_feeHistory",
      "eth_gasPrice",
      "eth_getAccount",
      "eth_getBalance",
      "eth_getBlockByHash",
      "eth_getBlockByNumber",
      "eth_getBlockReceipts",
      "eth_getBlockTransactionCountByHash",
      "eth_getBlockTransactionCountByNumber",
      "eth_getCode",
      "eth_getFilterChanges",
      "eth_getFilterLogs",
      "eth_getLogs",
      "eth_getProof",
      "eth_getStorageAt",
      "eth_getTransactionByBlockHashAndIndex",
      "eth_getTransactionByBlockNumberAndIndex",
      "eth_getTransactionByHash",
      "eth_getTransactionCount",
      "eth_getTransactionReceipt",
      "eth_getUncleCountByBlockHash",
      "eth_getUncleCountByBlockNumber",
      "eth_maxPriorityFeePerGas",
      "eth_newBlockFilter",
      "eth_newFilter",
      "eth_newPendingTransactionFilter",
      "eth_sendRawTransaction",
      "eth_syncing",
      "eth_uninstallFilter",
      "wallet_getCapabilities",
      "wallet_getCallsStatus",
      "eth_getUserOperationReceipt",
      "eth_estimateUserOperationGas",
      "eth_getUserOperationByHash",
      "eth_supportedEntryPoints",
      "wallet_getAssets",
    ],
    NOT_SAFE_RPC_METHODS: [
      "personal_sign",
      "eth_signTypedData_v4",
      "eth_sendTransaction",
      "solana_signMessage",
      "solana_signTransaction",
      "solana_signAllTransactions",
      "solana_signAndSendTransaction",
      "wallet_sendCalls",
      "wallet_grantPermissions",
      "wallet_revokePermissions",
      "eth_sendUserOperation",
    ],
    GET_CHAIN_ID: "eth_chainId",
    RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
    RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
    ACCOUNT_TYPES: { EOA: "eoa", SMART_ACCOUNT: "smartAccount" },
  },
  bt = Object.freeze({
    message: "",
    variant: "success",
    svg: void 0,
    open: !1,
    autoClose: !0,
  }),
  ge = me({ ...bt }),
  Se = {
    state: ge,
    subscribeKey(t, e) {
      return Ue(ge, t, e);
    },
    showLoading(t, e = {}) {
      this._showMessage({ message: t, variant: "loading", ...e });
    },
    showSuccess(t) {
      this._showMessage({ message: t, variant: "success" });
    },
    showSvg(t, e) {
      this._showMessage({ message: t, svg: e });
    },
    showError(t) {
      const e = X.parseError(t);
      this._showMessage({ message: e, variant: "error" });
    },
    hide() {
      (ge.message = bt.message),
        (ge.variant = bt.variant),
        (ge.svg = bt.svg),
        (ge.open = bt.open),
        (ge.autoClose = bt.autoClose);
    },
    _showMessage({
      message: t,
      svg: e,
      variant: r = "success",
      autoClose: n = bt.autoClose,
    }) {
      ge.open
        ? ((ge.open = !1),
          setTimeout(() => {
            (ge.message = t),
              (ge.variant = r),
              (ge.svg = e),
              (ge.open = !0),
              (ge.autoClose = n);
          }, 150))
        : ((ge.message = t),
          (ge.variant = r),
          (ge.svg = e),
          (ge.open = !0),
          (ge.autoClose = n));
    },
  },
  dr = {
    getSIWX() {
      return J.state.siwx;
    },
    async initializeIfEnabled() {
      var a;
      const t = J.state.siwx,
        e = g.getActiveCaipAddress();
      if (!(t && e)) return;
      const [r, n, s] = e.split(":");
      if (g.checkIfSupportedNetwork(r))
        try {
          if ((await t.getSessions(`${r}:${n}`, s)).length) return;
          await Ne.open({ view: "SIWXSignMessage" });
        } catch (o) {
          console.error("SIWXUtil:initializeIfEnabled", o),
            he.sendEvent({
              type: "track",
              event: "SIWX_AUTH_ERROR",
              properties: this.getSIWXEventProperties(),
            }),
            await ((a = ve._getClient()) == null
              ? void 0
              : a.disconnect().catch(console.error)),
            fe.reset("Connect"),
            Se.showError(
              "A problem occurred while trying initialize authentication"
            );
        }
    },
    async requestSignMessage() {
      const t = J.state.siwx,
        e = X.getPlainAddress(g.getActiveCaipAddress()),
        r = g.getActiveCaipNetwork(),
        n = ve._getClient();
      if (!t) throw new Error("SIWX is not enabled");
      if (!e) throw new Error("No ActiveCaipAddress found");
      if (!r) throw new Error("No ActiveCaipNetwork or client found");
      if (!n) throw new Error("No ConnectionController client found");
      try {
        const s = await t.createMessage({
            chainId: r.caipNetworkId,
            accountAddress: e,
          }),
          a = s.toString();
        be.getConnectorId(r.chainNamespace) === P.CONNECTOR_ID.AUTH &&
          fe.pushTransactionStack({ view: null, goBack: !1, replace: !0 });
        const i = await n.signMessage(a);
        await t.addSession({ data: s, message: a, signature: i }),
          Ne.close(),
          he.sendEvent({
            type: "track",
            event: "SIWX_AUTH_SUCCESS",
            properties: this.getSIWXEventProperties(),
          });
      } catch (s) {
        const a = this.getSIWXEventProperties();
        (!Ne.state.open || fe.state.view === "ApproveTransaction") &&
          (await Ne.open({ view: "SIWXSignMessage" })),
          a.isSmartAccount
            ? Se.showError("This application might not support Smart Accounts")
            : Se.showError("Signature declined"),
          he.sendEvent({
            type: "track",
            event: "SIWX_AUTH_ERROR",
            properties: a,
          }),
          console.error("SWIXUtil:requestSignMessage", s);
      }
    },
    async cancelSignMessage() {
      var t;
      try {
        const e = this.getSIWX();
        ((t = e == null ? void 0 : e.getRequired) == null ? void 0 : t.call(e))
          ? await ve.disconnect()
          : Ne.close(),
          fe.reset("Connect"),
          he.sendEvent({
            event: "CLICK_CANCEL_SIWX",
            type: "track",
            properties: this.getSIWXEventProperties(),
          });
      } catch (e) {
        console.error("SIWXUtil:cancelSignMessage", e);
      }
    },
    async getSessions() {
      const t = J.state.siwx,
        e = X.getPlainAddress(g.getActiveCaipAddress()),
        r = g.getActiveCaipNetwork();
      return t && e && r ? t.getSessions(r.caipNetworkId, e) : [];
    },
    async isSIWXCloseDisabled() {
      var e;
      const t = this.getSIWX();
      if (t) {
        const r = fe.state.view === "ApproveTransaction",
          n = fe.state.view === "SIWXSignMessage";
        if (r || n)
          return (
            ((e = t.getRequired) == null ? void 0 : e.call(t)) &&
            (await this.getSessions()).length === 0
          );
      }
      return !1;
    },
    async universalProviderAuthenticate({
      universalProvider: t,
      chains: e,
      methods: r,
    }) {
      var i, u, c;
      const n = dr.getSIWX(),
        s = new Set(e.map((d) => d.split(":")[0]));
      if (!n || s.size !== 1 || !s.has("eip155")) return !1;
      const a = await n.createMessage({
          chainId:
            ((i = g.getActiveCaipNetwork()) == null
              ? void 0
              : i.caipNetworkId) || "",
          accountAddress: "",
        }),
        o = await t.authenticate({
          nonce: a.nonce,
          domain: a.domain,
          uri: a.uri,
          exp: a.expirationTime,
          iat: a.issuedAt,
          nbf: a.notBefore,
          requestId: a.requestId,
          version: a.version,
          resources: a.resources,
          statement: a.statement,
          chainId: a.chainId,
          methods: r,
          chains: [a.chainId, ...e.filter((d) => d !== a.chainId)],
        });
      if (
        (Se.showLoading("Authenticating...", { autoClose: !1 }),
        ce.setConnectedWalletInfo(
          {
            ...o.session.peer.metadata,
            name: o.session.peer.metadata.name,
            icon: (u = o.session.peer.metadata.icons) == null ? void 0 : u[0],
            type: "WALLET_CONNECT",
          },
          Array.from(s)[0]
        ),
        (c = o == null ? void 0 : o.auths) != null && c.length)
      ) {
        const d = o.auths.map((f) => {
          const m = t.client.formatAuthMessage({ request: f.p, iss: f.p.iss });
          return {
            data: {
              ...f.p,
              accountAddress: f.p.iss.split(":").slice(-1).join(""),
              chainId: f.p.iss.split(":").slice(2, 4).join(":"),
              uri: f.p.aud,
              version: f.p.version || a.version,
              expirationTime: f.p.exp,
              issuedAt: f.p.iat,
              notBefore: f.p.nbf,
            },
            message: m,
            signature: f.s.s,
            cacao: f,
          };
        });
        try {
          await n.setSessions(d),
            he.sendEvent({
              type: "track",
              event: "SIWX_AUTH_SUCCESS",
              properties: dr.getSIWXEventProperties(),
            });
        } catch (f) {
          throw (
            (console.error(
              "SIWX:universalProviderAuth - failed to set sessions",
              f
            ),
            he.sendEvent({
              type: "track",
              event: "SIWX_AUTH_ERROR",
              properties: dr.getSIWXEventProperties(),
            }),
            await t.disconnect().catch(console.error),
            f)
          );
        } finally {
          Se.hide();
        }
      }
      return !0;
    },
    getSIWXEventProperties() {
      var e, r;
      const t = g.state.activeChain;
      return {
        network:
          ((e = g.state.activeCaipNetwork) == null
            ? void 0
            : e.caipNetworkId) || "",
        isSmartAccount:
          ((r = ce.state.preferredAccountTypes) == null ? void 0 : r[t]) ===
          we.ACCOUNT_TYPES.SMART_ACCOUNT,
      };
    },
    async clearSessions() {
      const t = this.getSIWX();
      t && (await t.setSessions([]));
    },
  },
  oe = me({
    transactions: [],
    coinbaseTransactions: {},
    transactionsByYear: {},
    lastNetworkInView: void 0,
    loading: !1,
    empty: !1,
    next: void 0,
  }),
  zi = {
    state: oe,
    subscribe(t) {
      return Pe(oe, () => t(oe));
    },
    setLastNetworkInView(t) {
      oe.lastNetworkInView = t;
    },
    async fetchTransactions(t, e) {
      var r, n;
      if (!t)
        throw new Error(
          "Transactions can't be fetched without an accountAddress"
        );
      oe.loading = !0;
      try {
        const s = await U.fetchTransactions({
            account: t,
            cursor: oe.next,
            onramp: e,
            cache: e === "coinbase" ? "no-cache" : void 0,
            chainId:
              (r = g.state.activeCaipNetwork) == null
                ? void 0
                : r.caipNetworkId,
          }),
          a = this.filterSpamTransactions(s.data),
          o = this.filterByConnectedChain(a),
          i = [...oe.transactions, ...o];
        (oe.loading = !1),
          e === "coinbase"
            ? (oe.coinbaseTransactions = this.groupTransactionsByYearAndMonth(
                oe.coinbaseTransactions,
                s.data
              ))
            : ((oe.transactions = i),
              (oe.transactionsByYear = this.groupTransactionsByYearAndMonth(
                oe.transactionsByYear,
                o
              ))),
          (oe.empty = i.length === 0),
          (oe.next = s.next ? s.next : void 0);
      } catch {
        const a = g.state.activeChain;
        he.sendEvent({
          type: "track",
          event: "ERROR_FETCH_TRANSACTIONS",
          properties: {
            address: t,
            projectId: J.state.projectId,
            cursor: oe.next,
            isSmartAccount:
              ((n = ce.state.preferredAccountTypes) == null ? void 0 : n[a]) ===
              we.ACCOUNT_TYPES.SMART_ACCOUNT,
          },
        }),
          Se.showError("Failed to fetch transactions"),
          (oe.loading = !1),
          (oe.empty = !0),
          (oe.next = void 0);
      }
    },
    groupTransactionsByYearAndMonth(t = {}, e = []) {
      const r = t;
      return (
        e.forEach((n) => {
          const s = new Date(n.metadata.minedAt).getFullYear(),
            a = new Date(n.metadata.minedAt).getMonth(),
            o = r[s] ?? {},
            u = (o[a] ?? []).filter((c) => c.id !== n.id);
          r[s] = {
            ...o,
            [a]: [...u, n].sort(
              (c, d) =>
                new Date(d.metadata.minedAt).getTime() -
                new Date(c.metadata.minedAt).getTime()
            ),
          };
        }),
        r
      );
    },
    filterSpamTransactions(t) {
      return t.filter(
        (e) =>
          !e.transfers.every((n) => {
            var s;
            return ((s = n.nft_info) == null ? void 0 : s.flags.is_spam) === !0;
          })
      );
    },
    filterByConnectedChain(t) {
      var n;
      const e =
        (n = g.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId;
      return t.filter((s) => s.metadata.chain === e);
    },
    clearCursor() {
      oe.next = void 0;
    },
    resetTransactions() {
      (oe.transactions = []),
        (oe.transactionsByYear = {}),
        (oe.lastNetworkInView = void 0),
        (oe.loading = !1),
        (oe.empty = !1),
        (oe.next = void 0);
    },
  },
  ie = me({ wcError: !1, buffering: !1, status: "disconnected" });
let Dt;
const ve = {
    state: ie,
    subscribeKey(t, e) {
      return Ue(ie, t, e);
    },
    _getClient() {
      return ie._client;
    },
    setClient(t) {
      ie._client = Zt(t);
    },
    async connectWalletConnect() {
      var t, e, r, n;
      if (X.isTelegram() || (X.isSafari() && X.isIos())) {
        if (Dt) {
          await Dt, (Dt = void 0);
          return;
        }
        if (!X.isPairingExpired(ie == null ? void 0 : ie.wcPairingExpiry)) {
          const s = ie.wcUri;
          ie.wcUri = s;
          return;
        }
        (Dt =
          (e =
            (t = this._getClient()) == null
              ? void 0
              : t.connectWalletConnect) == null
            ? void 0
            : e.call(t).catch(() => {})),
          (this.state.status = "connecting"),
          await Dt,
          (Dt = void 0),
          (ie.wcPairingExpiry = void 0),
          (this.state.status = "connected");
      } else
        await ((n =
          (r = this._getClient()) == null ? void 0 : r.connectWalletConnect) ==
        null
          ? void 0
          : n.call(r));
    },
    async connectExternal(t, e, r = !0) {
      var n, s;
      await ((s =
        (n = this._getClient()) == null ? void 0 : n.connectExternal) == null
        ? void 0
        : s.call(n, t)),
        r && g.setActiveNamespace(e);
    },
    async reconnectExternal(t) {
      var r, n;
      await ((n =
        (r = this._getClient()) == null ? void 0 : r.reconnectExternal) == null
        ? void 0
        : n.call(r, t));
      const e = t.chain || g.state.activeChain;
      e && be.setConnectorId(t.id, e);
    },
    async setPreferredAccountType(t, e) {
      var n;
      Ne.setLoading(!0, g.state.activeChain);
      const r = be.getAuthConnector();
      r &&
        (ce.setPreferredAccountType(t, e),
        await r.provider.setPreferredAccount(t),
        L.setPreferredAccountTypes(
          ce.state.preferredAccountTypes ?? { [e]: t }
        ),
        await this.reconnectExternal(r),
        Ne.setLoading(!1, g.state.activeChain),
        he.sendEvent({
          type: "track",
          event: "SET_PREFERRED_ACCOUNT_TYPE",
          properties: {
            accountType: t,
            network:
              ((n = g.state.activeCaipNetwork) == null
                ? void 0
                : n.caipNetworkId) || "",
          },
        }));
    },
    async signMessage(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.signMessage(t);
    },
    parseUnits(t, e) {
      var r;
      return (r = this._getClient()) == null ? void 0 : r.parseUnits(t, e);
    },
    formatUnits(t, e) {
      var r;
      return (r = this._getClient()) == null ? void 0 : r.formatUnits(t, e);
    },
    async sendTransaction(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.sendTransaction(t);
    },
    async getCapabilities(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.getCapabilities(t);
    },
    async grantPermissions(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.grantPermissions(t);
    },
    async walletGetAssets(t) {
      var e;
      return (
        ((e = this._getClient()) == null ? void 0 : e.walletGetAssets(t)) ?? {}
      );
    },
    async estimateGas(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.estimateGas(t);
    },
    async writeContract(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.writeContract(t);
    },
    async getEnsAddress(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.getEnsAddress(t);
    },
    async getEnsAvatar(t) {
      var e;
      return (e = this._getClient()) == null ? void 0 : e.getEnsAvatar(t);
    },
    checkInstalled(t) {
      var e, r;
      return (
        ((r = (e = this._getClient()) == null ? void 0 : e.checkInstalled) ==
        null
          ? void 0
          : r.call(e, t)) || !1
      );
    },
    resetWcConnection() {
      (ie.wcUri = void 0),
        (ie.wcPairingExpiry = void 0),
        (ie.wcLinking = void 0),
        (ie.recentWallet = void 0),
        (ie.status = "disconnected"),
        zi.resetTransactions(),
        L.deleteWalletConnectDeepLink();
    },
    resetUri() {
      (ie.wcUri = void 0), (ie.wcPairingExpiry = void 0);
    },
    finalizeWcConnection() {
      var r, n;
      const { wcLinking: t, recentWallet: e } = ve.state;
      t && L.setWalletConnectDeepLink(t),
        e && L.setAppKitRecent(e),
        he.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          properties: {
            method: t ? "mobile" : "qrcode",
            name:
              ((n = (r = fe.state.data) == null ? void 0 : r.wallet) == null
                ? void 0
                : n.name) || "Unknown",
          },
        });
    },
    setWcBasic(t) {
      ie.wcBasic = t;
    },
    setUri(t) {
      (ie.wcUri = t), (ie.wcPairingExpiry = X.getPairingExpiry());
    },
    setWcLinking(t) {
      ie.wcLinking = t;
    },
    setWcError(t) {
      (ie.wcError = t), (ie.buffering = !1);
    },
    setRecentWallet(t) {
      ie.recentWallet = t;
    },
    setBuffering(t) {
      ie.buffering = t;
    },
    setStatus(t) {
      ie.status = t;
    },
    async disconnect(t) {
      try {
        Ne.setLoading(!0, t),
          await dr.clearSessions(),
          await g.disconnect(t),
          Ne.setLoading(!1, t),
          be.setFilterByNamespace(void 0);
      } catch {
        throw new Error("Failed to disconnect");
      }
    },
  },
  Bt = me({
    loading: !1,
    open: !1,
    selectedNetworkId: void 0,
    activeChain: void 0,
    initialized: !1,
  }),
  zt = {
    state: Bt,
    subscribe(t) {
      return Pe(Bt, () => t(Bt));
    },
    subscribeOpen(t) {
      return Ue(Bt, "open", t);
    },
    set(t) {
      Object.assign(Bt, { ...Bt, ...t });
    },
  };
class fr extends nr {
  constructor({
    body: e,
    cause: r,
    details: n,
    headers: s,
    status: a,
    url: o,
  }) {
    super("HTTP request failed.", {
      cause: r,
      details: n,
      metaMessages: [
        a && `Status: ${a}`,
        `URL: ${ms(o)}`,
        e && `Request body: ${At(e)}`,
      ].filter(Boolean),
      name: "HttpRequestError",
    }),
      Object.defineProperty(this, "body", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "headers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "status", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "url", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.body = e),
      (this.headers = s),
      (this.status = a),
      (this.url = o);
  }
}
class va extends nr {
  constructor({ body: e, error: r, url: n }) {
    super("RPC Request failed.", {
      cause: r,
      details: r.message,
      metaMessages: [`URL: ${ms(n)}`, `Request body: ${At(e)}`],
      name: "RpcRequestError",
    }),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.code = r.code),
      (this.data = r.data);
  }
}
class Bs extends nr {
  constructor({ body: e, url: r }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${ms(r)}`, `Request body: ${At(e)}`],
      name: "TimeoutError",
    });
  }
}
const qi = -1;
class Oe extends nr {
  constructor(
    e,
    { code: r, docsPath: n, metaMessages: s, name: a, shortMessage: o }
  ) {
    super(o, {
      cause: e,
      docsPath: n,
      metaMessages: s || (e == null ? void 0 : e.metaMessages),
      name: a || "RpcError",
    }),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.name = a || e.name),
      (this.code = e instanceof va ? e.code : r ?? qi);
  }
}
class Le extends Oe {
  constructor(e, r) {
    super(e, r),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = r.data);
  }
}
class yr extends Oe {
  constructor(e) {
    super(e, {
      code: yr.code,
      name: "ParseRpcError",
      shortMessage:
        "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
    });
  }
}
Object.defineProperty(yr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
});
class br extends Oe {
  constructor(e) {
    super(e, {
      code: br.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object.",
    });
  }
}
Object.defineProperty(br, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
});
class Cr extends Oe {
  constructor(e, { method: r } = {}) {
    super(e, {
      code: Cr.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${
        r ? ` "${r}"` : ""
      } does not exist / is not available.`,
    });
  }
}
Object.defineProperty(Cr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
});
class vr extends Oe {
  constructor(e) {
    super(e, {
      code: vr.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    });
  }
}
Object.defineProperty(vr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
});
class Yt extends Oe {
  constructor(e) {
    super(e, {
      code: Yt.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received.",
    });
  }
}
Object.defineProperty(Yt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
});
class Ar extends Oe {
  constructor(e) {
    super(e, {
      code: Ar.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    });
  }
}
Object.defineProperty(Ar, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
});
class Tr extends Oe {
  constructor(e) {
    super(e, {
      code: Tr.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceNotFoundRpcError",
      });
  }
}
Object.defineProperty(Tr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
});
class Sr extends Oe {
  constructor(e) {
    super(e, {
      code: Sr.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available.",
    });
  }
}
Object.defineProperty(Sr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
});
class Jt extends Oe {
  constructor(e) {
    super(e, {
      code: Jt.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed.",
    });
  }
}
Object.defineProperty(Jt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
});
class Ct extends Oe {
  constructor(e, { method: r } = {}) {
    super(e, {
      code: Ct.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${r ? ` "${r}"` : ""} is not supported.`,
    });
  }
}
Object.defineProperty(Ct, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
});
class Xt extends Oe {
  constructor(e) {
    super(e, {
      code: Xt.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit.",
    });
  }
}
Object.defineProperty(Xt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
});
class Nr extends Oe {
  constructor(e) {
    super(e, {
      code: Nr.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported.",
    });
  }
}
Object.defineProperty(Nr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
});
class Tt extends Le {
  constructor(e) {
    super(e, {
      code: Tt.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request.",
    });
  }
}
Object.defineProperty(Tt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
});
class Rr extends Le {
  constructor(e) {
    super(e, {
      code: Rr.code,
      name: "UnauthorizedProviderError",
      shortMessage:
        "The requested method and/or account has not been authorized by the user.",
    });
  }
}
Object.defineProperty(Rr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
});
class Ir extends Le {
  constructor(e, { method: r } = {}) {
    super(e, {
      code: Ir.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${
        r ? ` " ${r}"` : ""
      }.`,
    });
  }
}
Object.defineProperty(Ir, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
});
class Or extends Le {
  constructor(e) {
    super(e, {
      code: Or.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains.",
    });
  }
}
Object.defineProperty(Or, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
});
class kr extends Le {
  constructor(e) {
    super(e, {
      code: kr.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain.",
    });
  }
}
Object.defineProperty(kr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
});
class xr extends Le {
  constructor(e) {
    super(e, {
      code: xr.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain.",
    });
  }
}
Object.defineProperty(xr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
});
class Pr extends Le {
  constructor(e) {
    super(e, {
      code: Pr.code,
      name: "UnsupportedNonOptionalCapabilityError",
      shortMessage:
        "This Wallet does not support a capability that was not marked as optional.",
    });
  }
}
Object.defineProperty(Pr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5700,
});
class Ur extends Le {
  constructor(e) {
    super(e, {
      code: Ur.code,
      name: "UnsupportedChainIdError",
      shortMessage: "This Wallet does not support the requested chain ID.",
    });
  }
}
Object.defineProperty(Ur, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5710,
});
class Lr extends Le {
  constructor(e) {
    super(e, {
      code: Lr.code,
      name: "DuplicateIdError",
      shortMessage: "There is already a bundle submitted with this ID.",
    });
  }
}
Object.defineProperty(Lr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5720,
});
class Mr extends Le {
  constructor(e) {
    super(e, {
      code: Mr.code,
      name: "UnknownBundleIdError",
      shortMessage: "This bundle id is unknown / has not been submitted",
    });
  }
}
Object.defineProperty(Mr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5730,
});
class Dr extends Le {
  constructor(e) {
    super(e, {
      code: Dr.code,
      name: "BundleTooLargeError",
      shortMessage: "The call bundle is too large for the Wallet to process.",
    });
  }
}
Object.defineProperty(Dr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5740,
});
class Br extends Le {
  constructor(e) {
    super(e, {
      code: Br.code,
      name: "AtomicReadyWalletRejectedUpgradeError",
      shortMessage:
        "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
    });
  }
}
Object.defineProperty(Br, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5750,
});
class $r extends Le {
  constructor(e) {
    super(e, {
      code: $r.code,
      name: "AtomicityNotSupportedError",
      shortMessage:
        "The wallet does not support atomic execution but the request requires it.",
    });
  }
}
Object.defineProperty($r, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5760,
});
class Vi extends Oe {
  constructor(e) {
    super(e, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred.",
    });
  }
}
function Gi() {
  let t = () => {},
    e = () => {};
  return {
    promise: new Promise((n, s) => {
      (t = n), (e = s);
    }),
    resolve: t,
    reject: e,
  };
}
const Gn = new Map();
function Zi({ fn: t, id: e, shouldSplitBatch: r, wait: n = 0, sort: s }) {
  const a = async () => {
      const d = u();
      o();
      const f = d.map(({ args: m }) => m);
      f.length !== 0 &&
        t(f)
          .then((m) => {
            s && Array.isArray(m) && m.sort(s);
            for (let p = 0; p < d.length; p++) {
              const { resolve: E } = d[p];
              E == null || E([m[p], m]);
            }
          })
          .catch((m) => {
            for (let p = 0; p < d.length; p++) {
              const { reject: E } = d[p];
              E == null || E(m);
            }
          });
    },
    o = () => Gn.delete(e),
    i = () => u().map(({ args: d }) => d),
    u = () => Gn.get(e) || [],
    c = (d) => Gn.set(e, [...u(), d]);
  return {
    flush: o,
    async schedule(d) {
      const { promise: f, resolve: m, reject: p } = Gi();
      return (
        (r == null ? void 0 : r([...i(), d])) && a(),
        u().length > 0
          ? (c({ args: d, resolve: m, reject: p }), f)
          : (c({ args: d, resolve: m, reject: p }), setTimeout(a, n), f)
      );
    },
  };
}
async function Aa(t) {
  return new Promise((e) => setTimeout(e, t));
}
const ls = 256;
let un = ls,
  dn;
function Ki(t = 11) {
  if (!dn || un + t > ls * 2) {
    (dn = ""), (un = 0);
    for (let e = 0; e < ls; e++)
      dn += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return dn.substring(un, un++ + t);
}
const fn = new Wa(8192);
function Yi(t, { enabled: e = !0, id: r }) {
  if (!e || !r) return t();
  if (fn.get(r)) return fn.get(r);
  const n = t().finally(() => fn.delete(r));
  return fn.set(r, n), n;
}
function Ji(
  t,
  { delay: e = 100, retryCount: r = 2, shouldRetry: n = () => !0 } = {}
) {
  return new Promise((s, a) => {
    const o = async ({ count: i = 0 } = {}) => {
      const u = async ({ error: c }) => {
        const d = typeof e == "function" ? e({ count: i, error: c }) : e;
        d && (await Aa(d)), o({ count: i + 1 });
      };
      try {
        const c = await t();
        s(c);
      } catch (c) {
        if (i < r && (await n({ count: i, error: c }))) return u({ error: c });
        a(c);
      }
    };
    o();
  });
}
function Xi(t, e = {}) {
  return async (r, n = {}) => {
    var f;
    const {
        dedupe: s = !1,
        methods: a,
        retryDelay: o = 150,
        retryCount: i = 3,
        uid: u,
      } = { ...e, ...n },
      { method: c } = r;
    if ((f = a == null ? void 0 : a.exclude) != null && f.includes(c))
      throw new Ct(new Error("method not supported"), { method: c });
    if (a != null && a.include && !a.include.includes(c))
      throw new Ct(new Error("method not supported"), { method: c });
    const d = s ? Ha(`${u}.${At(r)}`) : void 0;
    return Yi(
      () =>
        Ji(
          async () => {
            try {
              return await t(r);
            } catch (m) {
              const p = m;
              switch (p.code) {
                case yr.code:
                  throw new yr(p);
                case br.code:
                  throw new br(p);
                case Cr.code:
                  throw new Cr(p, { method: r.method });
                case vr.code:
                  throw new vr(p);
                case Yt.code:
                  throw new Yt(p);
                case Ar.code:
                  throw new Ar(p);
                case Tr.code:
                  throw new Tr(p);
                case Sr.code:
                  throw new Sr(p);
                case Jt.code:
                  throw new Jt(p);
                case Ct.code:
                  throw new Ct(p, { method: r.method });
                case Xt.code:
                  throw new Xt(p);
                case Nr.code:
                  throw new Nr(p);
                case Tt.code:
                  throw new Tt(p);
                case Rr.code:
                  throw new Rr(p);
                case Ir.code:
                  throw new Ir(p);
                case Or.code:
                  throw new Or(p);
                case kr.code:
                  throw new kr(p);
                case xr.code:
                  throw new xr(p);
                case Pr.code:
                  throw new Pr(p);
                case Ur.code:
                  throw new Ur(p);
                case Lr.code:
                  throw new Lr(p);
                case Mr.code:
                  throw new Mr(p);
                case Dr.code:
                  throw new Dr(p);
                case Br.code:
                  throw new Br(p);
                case $r.code:
                  throw new $r(p);
                case 5e3:
                  throw new Tt(p);
                default:
                  throw m instanceof nr ? m : new Vi(p);
              }
            }
          },
          {
            delay: ({ count: m, error: p }) => {
              var E;
              if (p && p instanceof fr) {
                const w =
                  (E = p == null ? void 0 : p.headers) == null
                    ? void 0
                    : E.get("Retry-After");
                if (w != null && w.match(/\d/)) return Number.parseInt(w) * 1e3;
              }
              return ~~(1 << m) * o;
            },
            retryCount: i,
            shouldRetry: ({ error: m }) => Qi(m),
          }
        ),
      { enabled: s, id: d }
    );
  };
}
function Qi(t) {
  return "code" in t && typeof t.code == "number"
    ? t.code === -1 || t.code === Xt.code || t.code === Yt.code
    : t instanceof fr && t.status
    ? t.status === 403 ||
      t.status === 408 ||
      t.status === 413 ||
      t.status === 429 ||
      t.status === 500 ||
      t.status === 502 ||
      t.status === 503 ||
      t.status === 504
    : !0;
}
function Ta(
  {
    key: t,
    methods: e,
    name: r,
    request: n,
    retryCount: s = 3,
    retryDelay: a = 150,
    timeout: o,
    type: i,
  },
  u
) {
  const c = Ki();
  return {
    config: {
      key: t,
      methods: e,
      name: r,
      request: n,
      retryCount: s,
      retryDelay: a,
      timeout: o,
      type: i,
    },
    request: Xi(n, { methods: e, retryCount: s, retryDelay: a, uid: c }),
    value: u,
  };
}
function $s(t, e = {}) {
  const {
    key: r = "fallback",
    name: n = "Fallback",
    rank: s = !1,
    shouldThrow: a = ec,
    retryCount: o,
    retryDelay: i,
  } = e;
  return ({ chain: u, pollingInterval: c = 4e3, timeout: d, ...f }) => {
    let m = t,
      p = () => {};
    const E = Ta(
      {
        key: r,
        name: n,
        async request({ method: w, params: S }) {
          let R;
          const H = async ($ = 0) => {
            const G = m[$]({ ...f, chain: u, retryCount: 0, timeout: d });
            try {
              const le = await G.request({ method: w, params: S });
              return (
                p({
                  method: w,
                  params: S,
                  response: le,
                  transport: G,
                  status: "success",
                }),
                le
              );
            } catch (le) {
              if (
                (p({
                  error: le,
                  method: w,
                  params: S,
                  transport: G,
                  status: "error",
                }),
                a(le) ||
                  $ === m.length - 1 ||
                  (R ??
                    (R = m.slice($ + 1).some((Ce) => {
                      const { include: Te, exclude: ot } =
                        Ce({ chain: u }).config.methods || {};
                      return Te ? Te.includes(w) : ot ? !ot.includes(w) : !0;
                    })),
                  !R))
              )
                throw le;
              return H($ + 1);
            }
          };
          return H();
        },
        retryCount: o,
        retryDelay: i,
        type: "fallback",
      },
      {
        onResponse: (w) => (p = w),
        transports: m.map((w) => w({ chain: u, retryCount: 0 })),
      }
    );
    if (s) {
      const w = typeof s == "object" ? s : {};
      tc({
        chain: u,
        interval: w.interval ?? c,
        onTransports: (S) => (m = S),
        ping: w.ping,
        sampleCount: w.sampleCount,
        timeout: w.timeout,
        transports: m,
        weights: w.weights,
      });
    }
    return E;
  };
}
function ec(t) {
  return !!(
    "code" in t &&
    typeof t.code == "number" &&
    (t.code === Jt.code ||
      t.code === Tt.code ||
      za.nodeMessage.test(t.message) ||
      t.code === 5e3)
  );
}
function tc({
  chain: t,
  interval: e = 4e3,
  onTransports: r,
  ping: n,
  sampleCount: s = 10,
  timeout: a = 1e3,
  transports: o,
  weights: i = {},
}) {
  const { stability: u = 0.7, latency: c = 0.3 } = i,
    d = [],
    f = async () => {
      const m = await Promise.all(
        o.map(async (w) => {
          const S = w({ chain: t, retryCount: 0, timeout: a }),
            R = Date.now();
          let H, $;
          try {
            await (n
              ? n({ transport: S })
              : S.request({ method: "net_listening" })),
              ($ = 1);
          } catch {
            $ = 0;
          } finally {
            H = Date.now();
          }
          return { latency: H - R, success: $ };
        })
      );
      d.push(m), d.length > s && d.shift();
      const p = Math.max(
          ...d.map((w) => Math.max(...w.map(({ latency: S }) => S)))
        ),
        E = o
          .map((w, S) => {
            const R = d.map((Ce) => Ce[S].latency),
              $ = 1 - R.reduce((Ce, Te) => Ce + Te, 0) / R.length / p,
              G = d.map((Ce) => Ce[S].success),
              le = G.reduce((Ce, Te) => Ce + Te, 0) / G.length;
            return le === 0 ? [0, S] : [c * $ + u * le, S];
          })
          .sort((w, S) => S[0] - w[0]);
      r(E.map(([, w]) => o[w])), await Aa(e), f();
    };
  f();
}
class rc extends nr {
  constructor() {
    super(
      "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
      { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
    );
  }
}
function nc(
  t,
  { errorInstance: e = new Error("timed out"), timeout: r, signal: n }
) {
  return new Promise((s, a) => {
    (async () => {
      let o;
      try {
        const i = new AbortController();
        r > 0 &&
          (o = setTimeout(() => {
            n ? i.abort() : a(e);
          }, r)),
          s(await t({ signal: (i == null ? void 0 : i.signal) || null }));
      } catch (i) {
        (i == null ? void 0 : i.name) === "AbortError" && a(e), a(i);
      } finally {
        clearTimeout(o);
      }
    })();
  });
}
function sc() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    },
  };
}
const js = sc();
function ac(t, e = {}) {
  return {
    async request(r) {
      var f;
      const {
          body: n,
          onRequest: s = e.onRequest,
          onResponse: a = e.onResponse,
          timeout: o = e.timeout ?? 1e4,
        } = r,
        i = { ...(e.fetchOptions ?? {}), ...(r.fetchOptions ?? {}) },
        { headers: u, method: c, signal: d } = i;
      try {
        const m = await nc(
          async ({ signal: E }) => {
            const w = {
                ...i,
                body: Array.isArray(n)
                  ? At(
                      n.map(($) => ({
                        jsonrpc: "2.0",
                        id: $.id ?? js.take(),
                        ...$,
                      }))
                    )
                  : At({ jsonrpc: "2.0", id: n.id ?? js.take(), ...n }),
                headers: { "Content-Type": "application/json", ...u },
                method: c || "POST",
                signal: d || (o > 0 ? E : null),
              },
              S = new Request(t, w),
              R = (await (s == null ? void 0 : s(S, w))) ?? { ...w, url: t };
            return await fetch(R.url ?? t, R);
          },
          { errorInstance: new Bs({ body: n, url: t }), timeout: o, signal: !0 }
        );
        a && (await a(m));
        let p;
        if (
          (f = m.headers.get("Content-Type")) != null &&
          f.startsWith("application/json")
        )
          p = await m.json();
        else {
          p = await m.text();
          try {
            p = JSON.parse(p || "{}");
          } catch (E) {
            if (m.ok) throw E;
            p = { error: p };
          }
        }
        if (!m.ok)
          throw new fr({
            body: n,
            details: At(p.error) || m.statusText,
            headers: m.headers,
            status: m.status,
            url: t,
          });
        return p;
      } catch (m) {
        throw m instanceof fr || m instanceof Bs
          ? m
          : new fr({ body: n, cause: m, url: t });
      }
    },
  };
}
function pn(t, e = {}) {
  const {
    batch: r,
    fetchOptions: n,
    key: s = "http",
    methods: a,
    name: o = "HTTP JSON-RPC",
    onFetchRequest: i,
    onFetchResponse: u,
    retryDelay: c,
    raw: d,
  } = e;
  return ({ chain: f, retryCount: m, timeout: p }) => {
    const { batchSize: E = 1e3, wait: w = 0 } = typeof r == "object" ? r : {},
      S = e.retryCount ?? m,
      R = p ?? e.timeout ?? 1e4,
      H = t || (f == null ? void 0 : f.rpcUrls.default.http[0]);
    if (!H) throw new rc();
    const $ = ac(H, {
      fetchOptions: n,
      onRequest: i,
      onResponse: u,
      timeout: R,
    });
    return Ta(
      {
        key: s,
        methods: a,
        name: o,
        async request({ method: G, params: le }) {
          const Ce = { method: G, params: le },
            { schedule: Te } = Zi({
              id: H,
              wait: w,
              shouldSplitBatch(O) {
                return O.length > E;
              },
              fn: (O) => $.request({ body: O }),
              sort: (O, ne) => O.id - ne.id,
            }),
            ot = async (O) => (r ? Te(O) : [await $.request({ body: O })]),
            [{ error: D, result: z }] = await ot(Ce);
          if (d) return { error: D, result: z };
          if (D) throw new va({ body: Ce, error: D, url: H });
          return z;
        },
        retryCount: S,
        retryDelay: c,
        timeout: R,
        type: "http",
      },
      { fetchOptions: n, url: H }
    );
  };
}
const Zn = {
    createBalance(t, e) {
      const r = {
        name: t.metadata.name || "",
        symbol: t.metadata.symbol || "",
        decimals: t.metadata.decimals || 0,
        value: t.metadata.value || 0,
        price: t.metadata.price || 0,
        iconUrl: t.metadata.iconUrl || "",
      };
      return {
        name: r.name,
        symbol: r.symbol,
        chainId: e,
        address:
          t.address === "native"
            ? void 0
            : this.convertAddressToCAIP10Address(t.address, e),
        value: r.value,
        price: r.price,
        quantity: {
          decimals: r.decimals.toString(),
          numeric: this.convertHexToBalance({
            hex: t.balance,
            decimals: r.decimals,
          }),
        },
        iconUrl: r.iconUrl,
      };
    },
    convertHexToBalance({ hex: t, decimals: e }) {
      return qa(BigInt(t), e);
    },
    convertAddressToCAIP10Address(t, e) {
      return `${e}:${t}`;
    },
    createCAIP2ChainId(t, e) {
      return `${e}:${parseInt(t, 16)}`;
    },
    getChainIdHexFromCAIP2ChainId(t) {
      const e = t.split(":");
      if (e.length < 2 || !e[1]) return "0x0";
      const r = e[1],
        n = parseInt(r, 10);
      return isNaN(n) ? "0x0" : `0x${n.toString(16)}`;
    },
    isWalletGetAssetsResponse(t) {
      return typeof t != "object" || t === null
        ? !1
        : Object.values(t).every(
            (e) => Array.isArray(e) && e.every((r) => this.isValidAsset(r))
          );
    },
    isValidAsset(t) {
      return (
        typeof t == "object" &&
        t !== null &&
        typeof t.address == "string" &&
        typeof t.balance == "string" &&
        (t.type === "ERC20" || t.type === "NATIVE") &&
        typeof t.metadata == "object" &&
        t.metadata !== null &&
        typeof t.metadata.name == "string" &&
        typeof t.metadata.symbol == "string" &&
        typeof t.metadata.decimals == "number" &&
        typeof t.metadata.price == "number" &&
        typeof t.metadata.iconUrl == "string"
      );
    },
  },
  Fs = {
    async getMyTokensWithBalance(t) {
      const e = ce.state.address,
        r = g.state.activeCaipNetwork;
      if (!e || !r) return [];
      if (r.chainNamespace === "eip155") {
        const s = await this.getEIP155Balances(e, r);
        if (s) return this.filterLowQualityTokens(s);
      }
      const n = await U.getBalance(e, r.caipNetworkId, t);
      return this.filterLowQualityTokens(n.balances);
    },
    async getEIP155Balances(t, e) {
      var r, n;
      try {
        const s = Zn.getChainIdHexFromCAIP2ChainId(e.caipNetworkId),
          a = await ve.getCapabilities(t);
        if (
          !(
            (n =
              (r = a == null ? void 0 : a[s]) == null
                ? void 0
                : r.assetDiscovery) != null && n.supported
          )
        )
          return null;
        const o = await ve.walletGetAssets({ account: t, chainFilter: [s] });
        return Zn.isWalletGetAssetsResponse(o)
          ? (o[s] || []).map((u) => Zn.createBalance(u, e.caipNetworkId))
          : null;
      } catch {
        return null;
      }
    },
    filterLowQualityTokens(t) {
      return t.filter((e) => e.quantity.decimals !== "0");
    },
    mapBalancesToSwapTokens(t) {
      return (
        (t == null
          ? void 0
          : t.map((e) => ({
              ...e,
              address:
                e != null && e.address
                  ? e.address
                  : g.getActiveNetworkTokenAddress(),
              decimals: parseInt(e.quantity.decimals, 10),
              logoUri: e.iconUrl,
              eip2612: !1,
            }))) || []
      );
    },
  },
  K = me({ tokenBalances: [], loading: !1 }),
  Ws = {
    state: K,
    subscribe(t) {
      return Pe(K, () => t(K));
    },
    subscribeKey(t, e) {
      return Ue(K, t, e);
    },
    setToken(t) {
      t && (K.token = Zt(t));
    },
    setTokenAmount(t) {
      K.sendTokenAmount = t;
    },
    setReceiverAddress(t) {
      K.receiverAddress = t;
    },
    setReceiverProfileImageUrl(t) {
      K.receiverProfileImageUrl = t;
    },
    setReceiverProfileName(t) {
      K.receiverProfileName = t;
    },
    setGasPrice(t) {
      K.gasPrice = t;
    },
    setGasPriceInUsd(t) {
      K.gasPriceInUSD = t;
    },
    setNetworkBalanceInUsd(t) {
      K.networkBalanceInUSD = t;
    },
    setLoading(t) {
      K.loading = t;
    },
    sendToken() {
      var t;
      switch (
        (t = g.state.activeCaipNetwork) == null ? void 0 : t.chainNamespace
      ) {
        case "eip155":
          this.sendEvmToken();
          return;
        case "solana":
          this.sendSolanaToken();
          return;
        default:
          throw new Error("Unsupported chain");
      }
    },
    sendEvmToken() {
      var r, n, s, a, o, i;
      const t = g.state.activeChain,
        e = (r = ce.state.preferredAccountTypes) == null ? void 0 : r[t];
      (n = this.state.token) != null &&
      n.address &&
      this.state.sendTokenAmount &&
      this.state.receiverAddress
        ? (he.sendEvent({
            type: "track",
            event: "SEND_INITIATED",
            properties: {
              isSmartAccount: e === we.ACCOUNT_TYPES.SMART_ACCOUNT,
              token: this.state.token.address,
              amount: this.state.sendTokenAmount,
              network:
                ((s = g.state.activeCaipNetwork) == null
                  ? void 0
                  : s.caipNetworkId) || "",
            },
          }),
          this.sendERC20Token({
            receiverAddress: this.state.receiverAddress,
            tokenAddress: this.state.token.address,
            sendTokenAmount: this.state.sendTokenAmount,
            decimals: this.state.token.quantity.decimals,
          }))
        : this.state.receiverAddress &&
          this.state.sendTokenAmount &&
          this.state.gasPrice &&
          (a = this.state.token) != null &&
          a.quantity.decimals &&
          (he.sendEvent({
            type: "track",
            event: "SEND_INITIATED",
            properties: {
              isSmartAccount: e === we.ACCOUNT_TYPES.SMART_ACCOUNT,
              token: (o = this.state.token) == null ? void 0 : o.symbol,
              amount: this.state.sendTokenAmount,
              network:
                ((i = g.state.activeCaipNetwork) == null
                  ? void 0
                  : i.caipNetworkId) || "",
            },
          }),
          this.sendNativeToken({
            receiverAddress: this.state.receiverAddress,
            sendTokenAmount: this.state.sendTokenAmount,
            gasPrice: this.state.gasPrice,
            decimals: this.state.token.quantity.decimals,
          }));
    },
    async fetchTokenBalance(t) {
      var a, o;
      K.loading = !0;
      const e =
          (a = g.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId,
        r = (o = g.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace,
        n = g.state.activeCaipAddress,
        s = n ? X.getPlainAddress(n) : void 0;
      if (K.lastRetry && !X.isAllowedRetry(K.lastRetry, 30 * je.ONE_SEC_MS))
        return (K.loading = !1), [];
      try {
        if (s && e && r) {
          const i = await Fs.getMyTokensWithBalance();
          return (K.tokenBalances = i), (K.lastRetry = void 0), i;
        }
      } catch (i) {
        (K.lastRetry = Date.now()),
          t == null || t(i),
          Se.showError("Token Balance Unavailable");
      } finally {
        K.loading = !1;
      }
      return [];
    },
    fetchNetworkBalance() {
      if (K.tokenBalances.length === 0) return;
      const t = Fs.mapBalancesToSwapTokens(K.tokenBalances);
      if (!t) return;
      const e = t.find((r) => r.address === g.getActiveNetworkTokenAddress());
      e &&
        (K.networkBalanceInUSD = e
          ? on.multiply(e.quantity.numeric, e.price).toString()
          : "0");
    },
    isInsufficientNetworkTokenForGas(t, e) {
      const r = e || "0";
      return on.bigNumber(t).eq(0) ? !0 : on.bigNumber(on.bigNumber(r)).gt(t);
    },
    hasInsufficientGasFunds() {
      var r;
      const t = g.state.activeChain;
      let e = !0;
      return (
        ((r = ce.state.preferredAccountTypes) == null ? void 0 : r[t]) ===
        we.ACCOUNT_TYPES.SMART_ACCOUNT
          ? (e = !1)
          : K.networkBalanceInUSD &&
            (e = this.isInsufficientNetworkTokenForGas(
              K.networkBalanceInUSD,
              K.gasPriceInUSD
            )),
        e
      );
    },
    async sendNativeToken(t) {
      var o, i, u, c, d, f;
      const e = g.state.activeChain;
      fe.pushTransactionStack({ view: "Account", goBack: !1 });
      const r = t.receiverAddress,
        n = ce.state.address,
        s = ve.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)),
        a = "0x";
      try {
        await ve.sendTransaction({
          chainNamespace: "eip155",
          to: r,
          address: n,
          data: a,
          value: s ?? BigInt(0),
          gasPrice: t.gasPrice,
        }),
          Se.showSuccess("Transaction started"),
          he.sendEvent({
            type: "track",
            event: "SEND_SUCCESS",
            properties: {
              isSmartAccount:
                ((o = ce.state.preferredAccountTypes) == null
                  ? void 0
                  : o[e]) === we.ACCOUNT_TYPES.SMART_ACCOUNT,
              token: ((i = this.state.token) == null ? void 0 : i.symbol) || "",
              amount: t.sendTokenAmount,
              network:
                ((u = g.state.activeCaipNetwork) == null
                  ? void 0
                  : u.caipNetworkId) || "",
            },
          }),
          this.resetSend();
      } catch (m) {
        console.error(
          "SendController:sendERC20Token - failed to send native token",
          m
        );
        const p = m instanceof Error ? m.message : "Unknown error";
        he.sendEvent({
          type: "track",
          event: "SEND_ERROR",
          properties: {
            message: p,
            isSmartAccount:
              ((c = ce.state.preferredAccountTypes) == null ? void 0 : c[e]) ===
              we.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((d = this.state.token) == null ? void 0 : d.symbol) || "",
            amount: t.sendTokenAmount,
            network:
              ((f = g.state.activeCaipNetwork) == null
                ? void 0
                : f.caipNetworkId) || "",
          },
        }),
          Se.showError("Something went wrong");
      }
    },
    async sendERC20Token(t) {
      var r, n, s;
      fe.pushTransactionStack({ view: "Account", goBack: !1 });
      const e = ve.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
      try {
        if (
          ce.state.address &&
          t.sendTokenAmount &&
          t.receiverAddress &&
          t.tokenAddress
        ) {
          const a = X.getPlainAddress(t.tokenAddress);
          await ve.writeContract({
            fromAddress: ce.state.address,
            tokenAddress: a,
            args: [t.receiverAddress, e ?? BigInt(0)],
            method: "transfer",
            abi: po.getERC20Abi(a),
            chainNamespace: "eip155",
          }),
            Se.showSuccess("Transaction started"),
            this.resetSend();
        }
      } catch (a) {
        console.error(
          "SendController:sendERC20Token - failed to send erc20 token",
          a
        );
        const o = a instanceof Error ? a.message : "Unknown error";
        he.sendEvent({
          type: "track",
          event: "SEND_ERROR",
          properties: {
            message: o,
            isSmartAccount:
              ((r = ce.state.preferredAccountTypes) == null
                ? void 0
                : r.eip155) === we.ACCOUNT_TYPES.SMART_ACCOUNT,
            token: ((n = this.state.token) == null ? void 0 : n.symbol) || "",
            amount: t.sendTokenAmount,
            network:
              ((s = g.state.activeCaipNetwork) == null
                ? void 0
                : s.caipNetworkId) || "",
          },
        }),
          Se.showError("Something went wrong");
      }
    },
    sendSolanaToken() {
      if (!this.state.sendTokenAmount || !this.state.receiverAddress) {
        Se.showError("Please enter a valid amount and receiver address");
        return;
      }
      fe.pushTransactionStack({ view: "Account", goBack: !1 }),
        ve
          .sendTransaction({
            chainNamespace: "solana",
            to: this.state.receiverAddress,
            value: this.state.sendTokenAmount,
          })
          .then(() => {
            this.resetSend(), ce.fetchTokenBalance();
          })
          .catch((t) => {
            Se.showError("Failed to send transaction. Please try again."),
              console.error(
                "SendController:sendToken - failed to send solana transaction",
                t
              );
          });
    },
    resetSend() {
      (K.token = void 0),
        (K.sendTokenAmount = void 0),
        (K.receiverAddress = void 0),
        (K.receiverProfileImageUrl = void 0),
        (K.receiverProfileName = void 0),
        (K.loading = !1),
        (K.tokenBalances = []);
    },
  },
  Kn = {
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: !1,
    addressLabels: new Map(),
    allAccounts: [],
    user: void 0,
  },
  hn = {
    caipNetwork: void 0,
    supportsAllNetworks: !0,
    smartAccountEnabledNetworks: [],
  },
  b = me({
    chains: Ja(),
    activeCaipAddress: void 0,
    activeChain: void 0,
    activeCaipNetwork: void 0,
    noAdapters: !1,
    universalAdapter: {
      networkControllerClient: void 0,
      connectionControllerClient: void 0,
    },
    isSwitchingNamespace: !1,
  }),
  g = {
    state: b,
    subscribe(t) {
      return Pe(b, () => {
        t(b);
      });
    },
    subscribeKey(t, e) {
      return Ue(b, t, e);
    },
    subscribeChainProp(t, e, r) {
      let n;
      return Pe(b.chains, () => {
        var a;
        const s = r || b.activeChain;
        if (s) {
          const o = (a = b.chains.get(s)) == null ? void 0 : a[t];
          n !== o && ((n = o), e(o));
        }
      });
    },
    initialize(t, e, r) {
      const { chainId: n, namespace: s } = L.getActiveNetworkProps(),
        a =
          e == null
            ? void 0
            : e.find(
                (c) => c.id.toString() === (n == null ? void 0 : n.toString())
              ),
        i =
          t.find((c) => (c == null ? void 0 : c.namespace) === s) ||
          (t == null ? void 0 : t[0]),
        u = new Set([
          ...((e == null ? void 0 : e.map((c) => c.chainNamespace)) ?? []),
        ]);
      ((t == null ? void 0 : t.length) === 0 || !i) && (b.noAdapters = !0),
        b.noAdapters ||
          ((b.activeChain = i == null ? void 0 : i.namespace),
          (b.activeCaipNetwork = a),
          this.setChainNetworkData(i == null ? void 0 : i.namespace, {
            caipNetwork: a,
          }),
          b.activeChain &&
            zt.set({ activeChain: i == null ? void 0 : i.namespace })),
        u.forEach((c) => {
          const d =
            e == null ? void 0 : e.filter((f) => f.chainNamespace === c);
          g.state.chains.set(c, {
            namespace: c,
            networkState: me({ ...hn, caipNetwork: d == null ? void 0 : d[0] }),
            accountState: me(Kn),
            caipNetworks: d ?? [],
            ...r,
          }),
            this.setRequestedCaipNetworks(d ?? [], c);
        });
    },
    removeAdapter(t) {
      var e, r;
      if (b.activeChain === t) {
        const n = Array.from(b.chains.entries()).find(([s]) => s !== t);
        if (n) {
          const s =
            (r = (e = n[1]) == null ? void 0 : e.caipNetworks) == null
              ? void 0
              : r[0];
          s && this.setActiveCaipNetwork(s);
        }
      }
      b.chains.delete(t);
    },
    addAdapter(
      t,
      { networkControllerClient: e, connectionControllerClient: r },
      n
    ) {
      b.chains.set(t.namespace, {
        namespace: t.namespace,
        networkState: { ...hn, caipNetwork: n[0] },
        accountState: Kn,
        caipNetworks: n,
        connectionControllerClient: r,
        networkControllerClient: e,
      }),
        this.setRequestedCaipNetworks(
          (n == null
            ? void 0
            : n.filter((s) => s.chainNamespace === t.namespace)) ?? [],
          t.namespace
        );
    },
    addNetwork(t) {
      var r;
      const e = b.chains.get(t.chainNamespace);
      if (e) {
        const n = [...(e.caipNetworks || [])];
        ((r = e.caipNetworks) != null && r.find((s) => s.id === t.id)) ||
          n.push(t),
          b.chains.set(t.chainNamespace, { ...e, caipNetworks: n }),
          this.setRequestedCaipNetworks(n, t.chainNamespace);
      }
    },
    removeNetwork(t, e) {
      var n, s, a;
      const r = b.chains.get(t);
      if (r) {
        const o = ((n = b.activeCaipNetwork) == null ? void 0 : n.id) === e,
          i = [
            ...(((s = r.caipNetworks) == null
              ? void 0
              : s.filter((u) => u.id !== e)) || []),
          ];
        o &&
          (a = r == null ? void 0 : r.caipNetworks) != null &&
          a[0] &&
          this.setActiveCaipNetwork(r.caipNetworks[0]),
          b.chains.set(t, { ...r, caipNetworks: i }),
          this.setRequestedCaipNetworks(i || [], t);
      }
    },
    setAdapterNetworkState(t, e) {
      const r = b.chains.get(t);
      r &&
        ((r.networkState = { ...(r.networkState || hn), ...e }),
        b.chains.set(t, r));
    },
    setChainAccountData(t, e, r = !0) {
      if (!t) throw new Error("Chain is required to update chain account data");
      const n = b.chains.get(t);
      if (n) {
        const s = { ...(n.accountState || Kn), ...e };
        b.chains.set(t, { ...n, accountState: s }),
          (b.chains.size === 1 || b.activeChain === t) &&
            (e.caipAddress && (b.activeCaipAddress = e.caipAddress),
            ce.replaceState(s));
      }
    },
    setChainNetworkData(t, e) {
      if (!t) return;
      const r = b.chains.get(t);
      if (r) {
        const n = { ...(r.networkState || hn), ...e };
        b.chains.set(t, { ...r, networkState: n });
      }
    },
    setAccountProp(t, e, r, n = !0) {
      this.setChainAccountData(r, { [t]: e }, n),
        t === "status" && e === "disconnected" && r && be.removeConnectorId(r);
    },
    setActiveNamespace(t) {
      var n, s;
      b.activeChain = t;
      const e = t ? b.chains.get(t) : void 0,
        r =
          (n = e == null ? void 0 : e.networkState) == null
            ? void 0
            : n.caipNetwork;
      r != null &&
        r.id &&
        t &&
        ((b.activeCaipAddress =
          (s = e == null ? void 0 : e.accountState) == null
            ? void 0
            : s.caipAddress),
        (b.activeCaipNetwork = r),
        this.setChainNetworkData(t, { caipNetwork: r }),
        L.setActiveCaipNetworkId(r == null ? void 0 : r.caipNetworkId),
        zt.set({
          activeChain: t,
          selectedNetworkId: r == null ? void 0 : r.caipNetworkId,
        }));
    },
    setActiveCaipNetwork(t) {
      var n, s, a;
      if (!t) return;
      b.activeChain !== t.chainNamespace && this.setIsSwitchingNamespace(!0);
      const e = b.chains.get(t.chainNamespace);
      (b.activeChain = t.chainNamespace),
        (b.activeCaipNetwork = t),
        this.setChainNetworkData(t.chainNamespace, { caipNetwork: t }),
        (n = e == null ? void 0 : e.accountState) != null && n.address
          ? (b.activeCaipAddress = `${t.chainNamespace}:${t.id}:${
              (s = e == null ? void 0 : e.accountState) == null
                ? void 0
                : s.address
            }`)
          : (b.activeCaipAddress = void 0),
        this.setAccountProp(
          "caipAddress",
          b.activeCaipAddress,
          t.chainNamespace
        ),
        e && ce.replaceState(e.accountState),
        Ws.resetSend(),
        zt.set({
          activeChain: b.activeChain,
          selectedNetworkId:
            (a = b.activeCaipNetwork) == null ? void 0 : a.caipNetworkId,
        }),
        L.setActiveCaipNetworkId(t.caipNetworkId),
        !this.checkIfSupportedNetwork(t.chainNamespace) &&
          J.state.enableNetworkSwitch &&
          !J.state.allowUnsupportedChain &&
          !ve.state.wcBasic &&
          this.showUnsupportedChainUI();
    },
    addCaipNetwork(t) {
      var r;
      if (!t) return;
      const e = b.chains.get(t.chainNamespace);
      e && ((r = e == null ? void 0 : e.caipNetworks) == null || r.push(t));
    },
    async switchActiveNamespace(t) {
      var s;
      if (!t) return;
      const e = t !== g.state.activeChain,
        r = (s = g.getNetworkData(t)) == null ? void 0 : s.caipNetwork,
        n = g.getCaipNetworkByNamespace(t, r == null ? void 0 : r.id);
      e && n && (await g.switchActiveNetwork(n));
    },
    async switchActiveNetwork(t) {
      var s;
      const e = g.state.chains.get(g.state.activeChain);
      !(
        (s = e == null ? void 0 : e.caipNetworks) != null &&
        s.some((a) => {
          var o;
          return a.id === ((o = b.activeCaipNetwork) == null ? void 0 : o.id);
        })
      ) && fe.goBack();
      const n = this.getNetworkControllerClient(t.chainNamespace);
      n &&
        (await n.switchCaipNetwork(t),
        he.sendEvent({
          type: "track",
          event: "SWITCH_NETWORK",
          properties: { network: t.caipNetworkId },
        }));
    },
    getNetworkControllerClient(t) {
      const e = t || b.activeChain,
        r = b.chains.get(e);
      if (!r) throw new Error("Chain adapter not found");
      if (!r.networkControllerClient)
        throw new Error("NetworkController client not set");
      return r.networkControllerClient;
    },
    getConnectionControllerClient(t) {
      const e = t || b.activeChain;
      if (!e)
        throw new Error(
          "Chain is required to get connection controller client"
        );
      const r = b.chains.get(e);
      if (!(r != null && r.connectionControllerClient))
        throw new Error("ConnectionController client not set");
      return r.connectionControllerClient;
    },
    getAccountProp(t, e) {
      var s;
      let r = b.activeChain;
      if ((e && (r = e), !r)) return;
      const n = (s = b.chains.get(r)) == null ? void 0 : s.accountState;
      if (n) return n[t];
    },
    getNetworkProp(t, e) {
      var n;
      const r = (n = b.chains.get(e)) == null ? void 0 : n.networkState;
      if (r) return r[t];
    },
    getRequestedCaipNetworks(t) {
      const e = b.chains.get(t),
        { approvedCaipNetworkIds: r = [], requestedCaipNetworks: n = [] } =
          (e == null ? void 0 : e.networkState) || {};
      return X.sortRequestedNetworks(r, n);
    },
    getAllRequestedCaipNetworks() {
      const t = [];
      return (
        b.chains.forEach((e) => {
          const r = this.getRequestedCaipNetworks(e.namespace);
          t.push(...r);
        }),
        t
      );
    },
    setRequestedCaipNetworks(t, e) {
      this.setAdapterNetworkState(e, { requestedCaipNetworks: t });
    },
    getAllApprovedCaipNetworkIds() {
      const t = [];
      return (
        b.chains.forEach((e) => {
          const r = this.getApprovedCaipNetworkIds(e.namespace);
          t.push(...r);
        }),
        t
      );
    },
    getActiveCaipNetwork() {
      return b.activeCaipNetwork;
    },
    getActiveCaipAddress() {
      return b.activeCaipAddress;
    },
    getApprovedCaipNetworkIds(t) {
      var n;
      const e = b.chains.get(t);
      return (
        ((n = e == null ? void 0 : e.networkState) == null
          ? void 0
          : n.approvedCaipNetworkIds) || []
      );
    },
    async setApprovedCaipNetworksData(t) {
      const e = this.getNetworkControllerClient(),
        r = await (e == null ? void 0 : e.getApprovedCaipNetworksData());
      this.setAdapterNetworkState(t, {
        approvedCaipNetworkIds: r == null ? void 0 : r.approvedCaipNetworkIds,
        supportsAllNetworks: r == null ? void 0 : r.supportsAllNetworks,
      });
    },
    checkIfSupportedNetwork(t, e) {
      const r = e || b.activeCaipNetwork,
        n = this.getRequestedCaipNetworks(t);
      return n.length
        ? n == null
          ? void 0
          : n.some((s) => s.id === (r == null ? void 0 : r.id))
        : !0;
    },
    checkIfSupportedChainId(t) {
      if (!b.activeChain) return !0;
      const e = this.getRequestedCaipNetworks(b.activeChain);
      return e == null ? void 0 : e.some((r) => r.id === t);
    },
    setSmartAccountEnabledNetworks(t, e) {
      this.setAdapterNetworkState(e, { smartAccountEnabledNetworks: t });
    },
    checkIfSmartAccountEnabled() {
      var n;
      const t = Qa.caipNetworkIdToNumber(
          (n = b.activeCaipNetwork) == null ? void 0 : n.caipNetworkId
        ),
        e = b.activeChain;
      if (!e || !t) return !1;
      const r = this.getNetworkProp("smartAccountEnabledNetworks", e);
      return !!(r != null && r.includes(Number(t)));
    },
    getActiveNetworkTokenAddress() {
      var n, s;
      const t =
          ((n = b.activeCaipNetwork) == null ? void 0 : n.chainNamespace) ||
          "eip155",
        e = ((s = b.activeCaipNetwork) == null ? void 0 : s.id) || 1,
        r = je.NATIVE_TOKEN_ADDRESS[t];
      return `${t}:${e}:${r}`;
    },
    showUnsupportedChainUI() {
      Ne.open({ view: "UnsupportedChain" });
    },
    checkIfNamesSupported() {
      const t = b.activeCaipNetwork;
      return !!(
        t != null &&
        t.chainNamespace &&
        je.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace)
      );
    },
    resetNetwork(t) {
      this.setAdapterNetworkState(t, {
        approvedCaipNetworkIds: void 0,
        supportsAllNetworks: !0,
        smartAccountEnabledNetworks: [],
      });
    },
    resetAccount(t) {
      const e = t;
      if (!e) throw new Error("Chain is required to set account prop");
      (b.activeCaipAddress = void 0),
        this.setChainAccountData(e, {
          smartAccountDeployed: !1,
          currentTab: 0,
          caipAddress: void 0,
          address: void 0,
          balance: void 0,
          balanceSymbol: void 0,
          profileName: void 0,
          profileImage: void 0,
          addressExplorerUrl: void 0,
          tokenBalance: [],
          connectedWalletInfo: void 0,
          preferredAccountTypes: void 0,
          socialProvider: void 0,
          socialWindow: void 0,
          farcasterUrl: void 0,
          allAccounts: [],
          user: void 0,
          status: "disconnected",
        }),
        be.removeConnectorId(e);
    },
    async disconnect(t) {
      const e = So(t);
      try {
        Ws.resetSend();
        const r = await Promise.allSettled(
          e.map(async ([s, a]) => {
            var o;
            try {
              const { caipAddress: i } = this.getAccountData(s) || {};
              i &&
                (o = a.connectionControllerClient) != null &&
                o.disconnect &&
                (await a.connectionControllerClient.disconnect(s)),
                this.resetAccount(s),
                this.resetNetwork(s);
            } catch (i) {
              throw new Error(`Failed to disconnect chain ${s}: ${i.message}`);
            }
          })
        );
        ve.resetWcConnection();
        const n = r.filter((s) => s.status === "rejected");
        if (n.length > 0)
          throw new Error(n.map((s) => s.reason.message).join(", "));
        L.deleteConnectedSocialProvider(),
          t ? be.removeConnectorId(t) : be.resetConnectorIds(),
          he.sendEvent({
            type: "track",
            event: "DISCONNECT_SUCCESS",
            properties: { namespace: t || "all" },
          });
      } catch (r) {
        console.error(r.message || "Failed to disconnect chains"),
          he.sendEvent({
            type: "track",
            event: "DISCONNECT_ERROR",
            properties: { message: r.message || "Failed to disconnect chains" },
          });
      }
    },
    setIsSwitchingNamespace(t) {
      b.isSwitchingNamespace = t;
    },
    getFirstCaipNetworkSupportsAuthConnector() {
      var r, n;
      const t = [];
      let e;
      if (
        (b.chains.forEach((s) => {
          P.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((a) => a === s.namespace) &&
            s.namespace &&
            t.push(s.namespace);
        }),
        t.length > 0)
      ) {
        const s = t[0];
        return (
          (e = s
            ? (n = (r = b.chains.get(s)) == null ? void 0 : r.caipNetworks) ==
              null
              ? void 0
              : n[0]
            : void 0),
          e
        );
      }
    },
    getAccountData(t) {
      var e;
      return t
        ? (e = g.state.chains.get(t)) == null
          ? void 0
          : e.accountState
        : ce.state;
    },
    getNetworkData(t) {
      var r;
      const e = t || b.activeChain;
      if (e)
        return (r = g.state.chains.get(e)) == null ? void 0 : r.networkState;
    },
    getCaipNetworkByNamespace(t, e) {
      var s, a, o;
      if (!t) return;
      const r = g.state.chains.get(t),
        n =
          (s = r == null ? void 0 : r.caipNetworks) == null
            ? void 0
            : s.find((i) => i.id === e);
      return (
        n ||
        ((a = r == null ? void 0 : r.networkState) == null
          ? void 0
          : a.caipNetwork) ||
        ((o = r == null ? void 0 : r.caipNetworks) == null ? void 0 : o[0])
      );
    },
    getRequestedCaipNetworkIds() {
      const t = be.state.filterByNamespace;
      return (t ? [b.chains.get(t)] : Array.from(b.chains.values()))
        .flatMap((r) => (r == null ? void 0 : r.caipNetworks) || [])
        .map((r) => r.caipNetworkId);
    },
    getCaipNetworks(t) {
      return t
        ? g.getRequestedCaipNetworks(t)
        : g.getAllRequestedCaipNetworks();
    },
  },
  oc = {
    purchaseCurrencies: [
      {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "USD Coin",
        symbol: "USDC",
        networks: [
          {
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          },
          {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
          },
        ],
      },
      {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "Ether",
        symbol: "ETH",
        networks: [
          {
            name: "ethereum-mainnet",
            display_name: "Ethereum",
            chain_id: "1",
            contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          },
          {
            name: "polygon-mainnet",
            display_name: "Polygon",
            chain_id: "137",
            contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
          },
        ],
      },
    ],
    paymentCurrencies: [
      {
        id: "USD",
        payment_method_limits: [
          { id: "card", min: "10.00", max: "7500.00" },
          { id: "ach_bank_account", min: "10.00", max: "25000.00" },
        ],
      },
      {
        id: "EUR",
        payment_method_limits: [
          { id: "card", min: "10.00", max: "7500.00" },
          { id: "ach_bank_account", min: "10.00", max: "25000.00" },
        ],
      },
    ],
  },
  Sa = X.getBlockchainApiUrl(),
  xe = me({
    clientId: null,
    api: new Mn({ baseUrl: Sa, clientId: null }),
    supportedChains: { http: [], ws: [] },
  }),
  U = {
    state: xe,
    async get(t) {
      const { st: e, sv: r } = U.getSdkProperties(),
        n = J.state.projectId,
        s = { ...(t.params || {}), st: e, sv: r, projectId: n };
      return xe.api.get({ ...t, params: s });
    },
    getSdkProperties() {
      const { sdkType: t, sdkVersion: e } = J.state;
      return { st: t || "unknown", sv: e || "unknown" };
    },
    async isNetworkSupported(t) {
      if (!t) return !1;
      try {
        xe.supportedChains.http.length || (await U.getSupportedNetworks());
      } catch {
        return !1;
      }
      return xe.supportedChains.http.includes(t);
    },
    async getSupportedNetworks() {
      const t = await U.get({ path: "v1/supported-chains" });
      return (xe.supportedChains = t), t;
    },
    async fetchIdentity({ address: t, caipNetworkId: e }) {
      if (!(await U.isNetworkSupported(e))) return { avatar: "", name: "" };
      const n = L.getIdentityFromCacheForAddress(t);
      if (n) return n;
      const s = await U.get({
        path: `/v1/identity/${t}`,
        params: {
          sender: g.state.activeCaipAddress
            ? X.getPlainAddress(g.state.activeCaipAddress)
            : void 0,
        },
      });
      return (
        L.updateIdentityCache({
          address: t,
          identity: s,
          timestamp: Date.now(),
        }),
        s
      );
    },
    async fetchTransactions({
      account: t,
      cursor: e,
      onramp: r,
      signal: n,
      cache: s,
      chainId: a,
    }) {
      var i;
      return (await U.isNetworkSupported(
        (i = g.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId
      ))
        ? U.get({
            path: `/v1/account/${t}/history`,
            params: { cursor: e, onramp: r, chainId: a },
            signal: n,
            cache: s,
          })
        : { data: [], next: void 0 };
    },
    async fetchSwapQuote({
      amount: t,
      userAddress: e,
      from: r,
      to: n,
      gasPrice: s,
    }) {
      var o;
      return (await U.isNetworkSupported(
        (o = g.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId
      ))
        ? U.get({
            path: "/v1/convert/quotes",
            headers: { "Content-Type": "application/json" },
            params: { amount: t, userAddress: e, from: r, to: n, gasPrice: s },
          })
        : { quotes: [] };
    },
    async fetchSwapTokens({ chainId: t }) {
      var r;
      return (await U.isNetworkSupported(
        (r = g.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId
      ))
        ? U.get({ path: "/v1/convert/tokens", params: { chainId: t } })
        : { tokens: [] };
    },
    async fetchTokenPrice({ addresses: t }) {
      var r;
      return (await U.isNetworkSupported(
        (r = g.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId
      ))
        ? xe.api.post({
            path: "/v1/fungible/price",
            body: {
              currency: "usd",
              addresses: t,
              projectId: J.state.projectId,
            },
            headers: { "Content-Type": "application/json" },
          })
        : { fungibles: [] };
    },
    async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
      var n;
      return (await U.isNetworkSupported(
        (n = g.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId
      ))
        ? U.get({
            path: "/v1/convert/allowance",
            params: { tokenAddress: t, userAddress: e },
            headers: { "Content-Type": "application/json" },
          })
        : { allowance: "0" };
    },
    async fetchGasPrice({ chainId: t }) {
      var s;
      const { st: e, sv: r } = U.getSdkProperties();
      if (
        !(await U.isNetworkSupported(
          (s = g.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId
        ))
      )
        throw new Error("Network not supported for Gas Price");
      return U.get({
        path: "/v1/convert/gas-price",
        headers: { "Content-Type": "application/json" },
        params: { chainId: t, st: e, sv: r },
      });
    },
    async generateSwapCalldata({
      amount: t,
      from: e,
      to: r,
      userAddress: n,
      disableEstimate: s,
    }) {
      var o;
      if (
        !(await U.isNetworkSupported(
          (o = g.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId
        ))
      )
        throw new Error("Network not supported for Swaps");
      return xe.api.post({
        path: "/v1/convert/build-transaction",
        headers: { "Content-Type": "application/json" },
        body: {
          amount: t,
          eip155: { slippage: je.CONVERT_SLIPPAGE_TOLERANCE },
          projectId: J.state.projectId,
          from: e,
          to: r,
          userAddress: n,
          disableEstimate: s,
        },
      });
    },
    async generateApproveCalldata({ from: t, to: e, userAddress: r }) {
      var o;
      const { st: n, sv: s } = U.getSdkProperties();
      if (
        !(await U.isNetworkSupported(
          (o = g.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId
        ))
      )
        throw new Error("Network not supported for Swaps");
      return U.get({
        path: "/v1/convert/build-approve",
        headers: { "Content-Type": "application/json" },
        params: { userAddress: r, from: t, to: e, st: n, sv: s },
      });
    },
    async getBalance(t, e, r) {
      var c;
      const { st: n, sv: s } = U.getSdkProperties();
      if (
        !(await U.isNetworkSupported(
          (c = g.state.activeCaipNetwork) == null ? void 0 : c.caipNetworkId
        ))
      )
        return Se.showError("Token Balance Unavailable"), { balances: [] };
      const o = `${e}:${t}`,
        i = L.getBalanceCacheForCaipAddress(o);
      if (i) return i;
      const u = await U.get({
        path: `/v1/account/${t}/balance`,
        params: { currency: "usd", chainId: e, forceUpdate: r, st: n, sv: s },
      });
      return (
        L.updateBalanceCache({
          caipAddress: o,
          balance: u,
          timestamp: Date.now(),
        }),
        u
      );
    },
    async lookupEnsName(t) {
      var r;
      return (await U.isNetworkSupported(
        (r = g.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId
      ))
        ? U.get({
            path: `/v1/profile/account/${t}`,
            params: { apiVersion: "2" },
          })
        : { addresses: {}, attributes: [] };
    },
    async reverseLookupEnsName({ address: t }) {
      var r;
      return (await U.isNetworkSupported(
        (r = g.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId
      ))
        ? U.get({
            path: `/v1/profile/reverse/${t}`,
            params: { sender: ce.state.address, apiVersion: "2" },
          })
        : [];
    },
    async getEnsNameSuggestions(t) {
      var r;
      return (await U.isNetworkSupported(
        (r = g.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId
      ))
        ? U.get({
            path: `/v1/profile/suggestions/${t}`,
            params: { zone: "reown.id" },
          })
        : { suggestions: [] };
    },
    async registerEnsName({
      coinType: t,
      address: e,
      message: r,
      signature: n,
    }) {
      var a;
      return (await U.isNetworkSupported(
        (a = g.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId
      ))
        ? xe.api.post({
            path: "/v1/profile/account",
            body: { coin_type: t, address: e, message: r, signature: n },
            headers: { "Content-Type": "application/json" },
          })
        : { success: !1 };
    },
    async generateOnRampURL({
      destinationWallets: t,
      partnerUserId: e,
      defaultNetwork: r,
      purchaseAmount: n,
      paymentAmount: s,
    }) {
      var i;
      return (await U.isNetworkSupported(
        (i = g.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId
      ))
        ? (
            await xe.api.post({
              path: "/v1/generators/onrampurl",
              params: { projectId: J.state.projectId },
              body: {
                destinationWallets: t,
                defaultNetwork: r,
                partnerUserId: e,
                defaultExperience: "buy",
                presetCryptoAmount: n,
                presetFiatAmount: s,
              },
            })
          ).url
        : "";
    },
    async getOnrampOptions() {
      var e;
      if (
        !(await U.isNetworkSupported(
          (e = g.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId
        ))
      )
        return { paymentCurrencies: [], purchaseCurrencies: [] };
      try {
        return await U.get({ path: "/v1/onramp/options" });
      } catch {
        return oc;
      }
    },
    async getOnrampQuote({
      purchaseCurrency: t,
      paymentCurrency: e,
      amount: r,
      network: n,
    }) {
      var s;
      try {
        return (await U.isNetworkSupported(
          (s = g.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId
        ))
          ? await xe.api.post({
              path: "/v1/onramp/quote",
              params: { projectId: J.state.projectId },
              body: {
                purchaseCurrency: t,
                paymentCurrency: e,
                amount: r,
                network: n,
              },
            })
          : null;
      } catch {
        return {
          coinbaseFee: { amount: r, currency: e.id },
          networkFee: { amount: r, currency: e.id },
          paymentSubtotal: { amount: r, currency: e.id },
          paymentTotal: { amount: r, currency: e.id },
          purchaseAmount: { amount: r, currency: e.id },
          quoteId: "mocked-quote-id",
        };
      }
    },
    async getSmartSessions(t) {
      var r;
      return (await U.isNetworkSupported(
        (r = g.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId
      ))
        ? U.get({ path: `/v1/sessions/${t}` })
        : [];
    },
    async revokeSmartSession(t, e, r) {
      var s;
      return (await U.isNetworkSupported(
        (s = g.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId
      ))
        ? xe.api.post({
            path: `/v1/sessions/${t}/revoke`,
            params: { projectId: J.state.projectId },
            body: { pci: e, signature: r },
          })
        : { success: !1 };
    },
    setClientId(t) {
      (xe.clientId = t), (xe.api = new Mn({ baseUrl: Sa, clientId: t }));
    },
  },
  De = me({
    currentTab: 0,
    tokenBalance: [],
    smartAccountDeployed: !1,
    addressLabels: new Map(),
    allAccounts: [],
  }),
  ce = {
    state: De,
    replaceState(t) {
      t && Object.assign(De, Zt(t));
    },
    subscribe(t) {
      return g.subscribeChainProp("accountState", (e) => {
        if (e) return t(e);
      });
    },
    subscribeKey(t, e, r) {
      let n;
      return g.subscribeChainProp(
        "accountState",
        (s) => {
          if (s) {
            const a = s[t];
            n !== a && ((n = a), e(a));
          }
        },
        r
      );
    },
    setStatus(t, e) {
      g.setAccountProp("status", t, e);
    },
    getCaipAddress(t) {
      return g.getAccountProp("caipAddress", t);
    },
    setCaipAddress(t, e) {
      const r = t ? X.getPlainAddress(t) : void 0;
      e === g.state.activeChain && (g.state.activeCaipAddress = t),
        g.setAccountProp("caipAddress", t, e),
        g.setAccountProp("address", r, e);
    },
    setBalance(t, e, r) {
      g.setAccountProp("balance", t, r),
        g.setAccountProp("balanceSymbol", e, r);
    },
    setProfileName(t, e) {
      g.setAccountProp("profileName", t, e);
    },
    setProfileImage(t, e) {
      g.setAccountProp("profileImage", t, e);
    },
    setUser(t, e) {
      g.setAccountProp("user", t, e);
    },
    setAddressExplorerUrl(t, e) {
      g.setAccountProp("addressExplorerUrl", t, e);
    },
    setSmartAccountDeployed(t, e) {
      g.setAccountProp("smartAccountDeployed", t, e);
    },
    setCurrentTab(t) {
      g.setAccountProp("currentTab", t, g.state.activeChain);
    },
    setTokenBalance(t, e) {
      t && g.setAccountProp("tokenBalance", t, e);
    },
    setShouldUpdateToAddress(t, e) {
      g.setAccountProp("shouldUpdateToAddress", t, e);
    },
    setAllAccounts(t, e) {
      g.setAccountProp("allAccounts", t, e);
    },
    addAddressLabel(t, e, r) {
      const n = g.getAccountProp("addressLabels", r) || new Map();
      n.set(t, e), g.setAccountProp("addressLabels", n, r);
    },
    removeAddressLabel(t, e) {
      const r = g.getAccountProp("addressLabels", e) || new Map();
      r.delete(t), g.setAccountProp("addressLabels", r, e);
    },
    setConnectedWalletInfo(t, e) {
      g.setAccountProp("connectedWalletInfo", t, e, !1);
    },
    setPreferredAccountType(t, e) {
      g.setAccountProp(
        "preferredAccountTypes",
        { ...De.preferredAccountTypes, [e]: t },
        e
      );
    },
    setPreferredAccountTypes(t) {
      De.preferredAccountTypes = t;
    },
    setSocialProvider(t, e) {
      t && g.setAccountProp("socialProvider", t, e);
    },
    setSocialWindow(t, e) {
      g.setAccountProp("socialWindow", t ? Zt(t) : void 0, e);
    },
    setFarcasterUrl(t, e) {
      g.setAccountProp("farcasterUrl", t, e);
    },
    async fetchTokenBalance(t) {
      var a, o;
      De.balanceLoading = !0;
      const e =
          (a = g.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId,
        r = (o = g.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace,
        n = g.state.activeCaipAddress,
        s = n ? X.getPlainAddress(n) : void 0;
      if (De.lastRetry && !X.isAllowedRetry(De.lastRetry, 30 * je.ONE_SEC_MS))
        return (De.balanceLoading = !1), [];
      try {
        if (s && e && r) {
          const u = (await U.getBalance(s, e)).balances.filter(
            (c) => c.quantity.decimals !== "0"
          );
          return (
            this.setTokenBalance(u, r),
            (De.lastRetry = void 0),
            (De.balanceLoading = !1),
            u
          );
        }
      } catch (i) {
        (De.lastRetry = Date.now()),
          t == null || t(i),
          Se.showError("Token Balance Unavailable");
      } finally {
        De.balanceLoading = !1;
      }
      return [];
    },
    resetAccount(t) {
      g.resetAccount(t);
    },
  },
  Ie = me({
    loading: !1,
    loadingNamespaceMap: new Map(),
    open: !1,
    shake: !1,
    namespace: void 0,
  }),
  Ne = {
    state: Ie,
    subscribe(t) {
      return Pe(Ie, () => t(Ie));
    },
    subscribeKey(t, e) {
      return Ue(Ie, t, e);
    },
    async open(t) {
      var s;
      const e = ce.state.status === "connected";
      ve.state.wcBasic
        ? V.prefetch({ fetchNetworkImages: !1, fetchConnectorImages: !1 })
        : await V.prefetch({
            fetchConnectorImages: !e,
            fetchFeaturedWallets: !e,
            fetchRecommendedWallets: !e,
          }),
        t != null && t.namespace
          ? (await g.switchActiveNamespace(t.namespace),
            Ne.setLoading(!0, t.namespace))
          : Ne.setLoading(!0),
        be.setFilterByNamespace(t == null ? void 0 : t.namespace);
      const r =
        (s = g.getAccountData(t == null ? void 0 : t.namespace)) == null
          ? void 0
          : s.caipAddress;
      g.state.noAdapters && !r
        ? X.isMobile()
          ? fe.reset("AllWallets")
          : fe.reset("ConnectingWalletConnectBasic")
        : t != null && t.view
        ? fe.reset(t.view, t.data)
        : r
        ? fe.reset("Account")
        : fe.reset("Connect"),
        (Ie.open = !0),
        zt.set({ open: !0 }),
        he.sendEvent({
          type: "track",
          event: "MODAL_OPEN",
          properties: { connected: !!r },
        });
    },
    close() {
      const t = J.state.enableEmbedded,
        e = !!g.state.activeCaipAddress;
      Ie.open &&
        he.sendEvent({
          type: "track",
          event: "MODAL_CLOSE",
          properties: { connected: e },
        }),
        (Ie.open = !1),
        Ne.clearLoading(),
        t
          ? e
            ? fe.replace("Account")
            : fe.push("Connect")
          : zt.set({ open: !1 }),
        ve.resetUri();
    },
    setLoading(t, e) {
      e && Ie.loadingNamespaceMap.set(e, t),
        (Ie.loading = t),
        zt.set({ loading: t });
    },
    clearLoading() {
      Ie.loadingNamespaceMap.clear(), (Ie.loading = !1);
    },
    shake() {
      Ie.shake ||
        ((Ie.shake = !0),
        setTimeout(() => {
          Ie.shake = !1;
        }, 500));
    },
  },
  Hs = 2147483648,
  ic = {
    convertEVMChainIdToCoinType(t) {
      if (t >= Hs) throw new Error("Invalid chainId");
      return (Hs | t) >>> 0;
    },
  },
  Be = me({ suggestions: [], loading: !1 }),
  cc = {
    state: Be,
    subscribe(t) {
      return Pe(Be, () => t(Be));
    },
    subscribeKey(t, e) {
      return Ue(Be, t, e);
    },
    async resolveName(t) {
      var e, r;
      try {
        return await U.lookupEnsName(t);
      } catch (n) {
        const s = n;
        throw new Error(
          ((r = (e = s == null ? void 0 : s.reasons) == null ? void 0 : e[0]) ==
          null
            ? void 0
            : r.description) || "Error resolving name"
        );
      }
    },
    async isNameRegistered(t) {
      try {
        return await U.lookupEnsName(t), !0;
      } catch {
        return !1;
      }
    },
    async getSuggestions(t) {
      try {
        (Be.loading = !0), (Be.suggestions = []);
        const e = await U.getEnsNameSuggestions(t);
        return (
          (Be.suggestions =
            e.suggestions.map((r) => ({ ...r, name: r.name })) || []),
          Be.suggestions
        );
      } catch (e) {
        const r = this.parseEnsApiError(e, "Error fetching name suggestions");
        throw new Error(r);
      } finally {
        Be.loading = !1;
      }
    },
    async getNamesForAddress(t) {
      try {
        if (!g.state.activeCaipNetwork) return [];
        const r = L.getEnsFromCacheForAddress(t);
        if (r) return r;
        const n = await U.reverseLookupEnsName({ address: t });
        return (
          L.updateEnsCache({ address: t, ens: n, timestamp: Date.now() }), n
        );
      } catch (e) {
        const r = this.parseEnsApiError(e, "Error fetching names for address");
        throw new Error(r);
      }
    },
    async registerName(t) {
      const e = g.state.activeCaipNetwork;
      if (!e) throw new Error("Network not found");
      const r = ce.state.address,
        n = be.getAuthConnector();
      if (!r || !n) throw new Error("Address or auth connector not found");
      Be.loading = !0;
      try {
        const s = JSON.stringify({
          name: t,
          attributes: {},
          timestamp: Math.floor(Date.now() / 1e3),
        });
        fe.pushTransactionStack({
          view: "RegisterAccountNameSuccess",
          goBack: !1,
          replace: !0,
          onCancel() {
            Be.loading = !1;
          },
        });
        const a = await ve.signMessage(s),
          o = e.id;
        if (!o) throw new Error("Network not found");
        const i = ic.convertEVMChainIdToCoinType(Number(o));
        await U.registerEnsName({
          coinType: i,
          address: r,
          signature: a,
          message: s,
        }),
          ce.setProfileName(t, e.chainNamespace),
          fe.replace("RegisterAccountNameSuccess");
      } catch (s) {
        const a = this.parseEnsApiError(s, `Error registering name ${t}`);
        throw (fe.replace("RegisterAccountName"), new Error(a));
      } finally {
        Be.loading = !1;
      }
    },
    validateName(t) {
      return /^[a-zA-Z0-9-]{4,}$/u.test(t);
    },
    parseEnsApiError(t, e) {
      var n, s;
      const r = t;
      return (
        ((s = (n = r == null ? void 0 : r.reasons) == null ? void 0 : n[0]) ==
        null
          ? void 0
          : s.description) || e
      );
    },
  },
  Fe = {
    METMASK_CONNECTOR_NAME: "MetaMask",
    TRUST_CONNECTOR_NAME: "Trust Wallet",
    SOLFLARE_CONNECTOR_NAME: "Solflare",
    PHANTOM_CONNECTOR_NAME: "Phantom",
    COIN98_CONNECTOR_NAME: "Coin98",
    MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
    BACKPACK_CONNECTOR_NAME: "Backpack",
    BITGET_CONNECTOR_NAME: "Bitget Wallet",
    FRONTIER_CONNECTOR_NAME: "Frontier",
    XVERSE_CONNECTOR_NAME: "Xverse Wallet",
    LEATHER_CONNECTOR_NAME: "Leather",
    EIP155: "eip155",
    ADD_CHAIN_METHOD: "wallet_addEthereumChain",
    EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
    EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
    CONNECTOR_RDNS_MAP: {
      coinbaseWallet: "com.coinbase.wallet",
      coinbaseWalletSDK: "com.coinbase.wallet",
    },
    CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH",
    CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
    CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH",
  },
  An = {
    ConnectorExplorerIds: {
      [P.CONNECTOR_ID.COINBASE]:
        "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [P.CONNECTOR_ID.COINBASE_SDK]:
        "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
      [P.CONNECTOR_ID.SAFE]:
        "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
      [P.CONNECTOR_ID.LEDGER]:
        "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
      [P.CONNECTOR_ID.OKX]:
        "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      [Fe.METMASK_CONNECTOR_NAME]:
        "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
      [Fe.TRUST_CONNECTOR_NAME]:
        "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      [Fe.SOLFLARE_CONNECTOR_NAME]:
        "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      [Fe.PHANTOM_CONNECTOR_NAME]:
        "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      [Fe.COIN98_CONNECTOR_NAME]:
        "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
      [Fe.MAGIC_EDEN_CONNECTOR_NAME]:
        "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
      [Fe.BACKPACK_CONNECTOR_NAME]:
        "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
      [Fe.BITGET_CONNECTOR_NAME]:
        "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
      [Fe.FRONTIER_CONNECTOR_NAME]:
        "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
      [Fe.XVERSE_CONNECTOR_NAME]:
        "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
      [Fe.LEATHER_CONNECTOR_NAME]:
        "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
    },
    NetworkImageIds: {
      1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
      42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
      43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
      56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
      250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
      10: "ab9c186a-c52f-464b-2906-ca59d760a400",
      137: "41d04d42-da3b-4453-8506-668cc0727900",
      5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
      295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
      11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
      84532: "a18a7ecd-e307-4360-4746-283182228e00",
      1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
      130: "2257980a-3463-48c6-cbac-a42d2a956e00",
      10143: "0a728e83-bacb-46db-7844-948f05434900",
      100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
      9001: "f926ff41-260d-4028-635e-91913fc28e00",
      324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
      314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
      4689: "34e68754-e536-40da-c153-6ef2e7188a00",
      1088: "3897a66d-40b9-4833-162f-a2c90531c900",
      1284: "161038da-44ae-4ec7-1208-0ea569454b00",
      1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
      7777777: "845c60df-d429-4991-e687-91ae45791600",
      42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
      8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
      1313161554: "3ff73439-a619-4894-9262-4470c773a100",
      2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
      2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
      80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
      2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
      "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
        "a1b58899-f671-4276-6a5e-56ca5bd59700",
      "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":
        "a1b58899-f671-4276-6a5e-56ca5bd59700",
      EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
      "000000000019d6689c085ae165831e93":
        "0b4838db-0161-4ffe-022d-532bf03dba00",
      "000000000933ea01ad0ee984209779ba":
        "39354064-d79b-420b-065d-f980c4b78200",
    },
    ConnectorImageIds: {
      [P.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
      [P.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
      [P.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
      [P.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
      [P.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
      [P.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00",
    },
    ConnectorNamesMap: {
      [P.CONNECTOR_ID.INJECTED]: "Browser Wallet",
      [P.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
      [P.CONNECTOR_ID.COINBASE]: "Coinbase",
      [P.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
      [P.CONNECTOR_ID.LEDGER]: "Ledger",
      [P.CONNECTOR_ID.SAFE]: "Safe",
    },
    ConnectorTypesMap: {
      [P.CONNECTOR_ID.INJECTED]: "INJECTED",
      [P.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT",
      [P.CONNECTOR_ID.EIP6963]: "ANNOUNCED",
      [P.CONNECTOR_ID.AUTH]: "AUTH",
    },
  },
  dd = {
    UniversalProviderErrors: {
      UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
        message: "Unauthorized: origin not allowed",
        alertErrorKey: "INVALID_APP_CONFIGURATION",
      },
      JWT_VALIDATION_ERROR: {
        message: "JWT validation error: JWT Token is not yet valid",
        alertErrorKey: "JWT_TOKEN_NOT_VALID",
      },
      INVALID_KEY: {
        message: "Unauthorized: invalid key",
        alertErrorKey: "INVALID_PROJECT_ID",
      },
    },
    ALERT_ERRORS: {
      SWITCH_NETWORK_NOT_FOUND: {
        shortMessage: "Network Not Found",
        longMessage:
          "Network not found - please make sure it is included in 'networks' array in createAppKit function",
      },
      INVALID_APP_CONFIGURATION: {
        shortMessage: "Invalid App Configuration",
        longMessage: () =>
          `Origin ${
            lc() ? window.origin : "unknown"
          } not found on Allowlist - update configuration on cloud.reown.com`,
      },
      SOCIALS_TIMEOUT: {
        shortMessage: "Invalid App Configuration",
        longMessage: () =>
          "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com",
      },
      JWT_TOKEN_NOT_VALID: {
        shortMessage: "Session Expired",
        longMessage:
          "Invalid session found on UniversalProvider - please check your time settings and connect again",
      },
      INVALID_PROJECT_ID: {
        shortMessage: "Invalid App Configuration",
        longMessage: "Invalid Project ID - update configuration",
      },
      PROJECT_ID_NOT_CONFIGURED: {
        shortMessage: "Project ID Not Configured",
        longMessage:
          "Project ID Not Configured - update configuration on cloud.reown.com",
      },
    },
  };
function lc() {
  return typeof window < "u";
}
const uc = "rpc.walletconnect.org";
function zs(t, e) {
  const r = new URL("https://rpc.walletconnect.org/v1/");
  return (
    r.searchParams.set("chainId", t),
    r.searchParams.set("projectId", e),
    r.toString()
  );
}
const Yn = [
    "near:mainnet",
    "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    "eip155:1101",
    "eip155:56",
    "eip155:42161",
    "eip155:7777777",
    "eip155:59144",
    "eip155:324",
    "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    "eip155:5000",
    "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
    "eip155:80084",
    "eip155:5003",
    "eip155:100",
    "eip155:8453",
    "eip155:42220",
    "eip155:1313161555",
    "eip155:17000",
    "eip155:1",
    "eip155:300",
    "eip155:1313161554",
    "eip155:1329",
    "eip155:84532",
    "eip155:421614",
    "eip155:11155111",
    "eip155:8217",
    "eip155:43114",
    "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
    "eip155:999999999",
    "eip155:11155420",
    "eip155:80002",
    "eip155:97",
    "eip155:43113",
    "eip155:137",
    "eip155:10",
    "eip155:1301",
    "bip122:000000000019d6689c085ae165831e93",
    "bip122:000000000933ea01ad0ee984209779ba",
  ],
  dc = {
    extendRpcUrlWithProjectId(t, e) {
      let r = !1;
      try {
        r = new URL(t).host === uc;
      } catch {
        r = !1;
      }
      if (r) {
        const n = new URL(t);
        return (
          n.searchParams.has("projectId") || n.searchParams.set("projectId", e),
          n.toString()
        );
      }
      return t;
    },
    isCaipNetwork(t) {
      return "chainNamespace" in t && "caipNetworkId" in t;
    },
    getChainNamespace(t) {
      return this.isCaipNetwork(t) ? t.chainNamespace : P.CHAIN.EVM;
    },
    getCaipNetworkId(t) {
      return this.isCaipNetwork(t) ? t.caipNetworkId : `${P.CHAIN.EVM}:${t.id}`;
    },
    getDefaultRpcUrl(t, e, r) {
      var s, a, o;
      const n =
        (o =
          (a = (s = t.rpcUrls) == null ? void 0 : s.default) == null
            ? void 0
            : a.http) == null
          ? void 0
          : o[0];
      return Yn.includes(e) ? zs(e, r) : n || "";
    },
    extendCaipNetwork(
      t,
      { customNetworkImageUrls: e, projectId: r, customRpcUrls: n }
    ) {
      var m, p, E, w, S;
      const s = this.getChainNamespace(t),
        a = this.getCaipNetworkId(t),
        o = (m = t.rpcUrls.default.http) == null ? void 0 : m[0],
        i = this.getDefaultRpcUrl(t, a, r),
        u =
          ((w =
            (E =
              (p = t == null ? void 0 : t.rpcUrls) == null
                ? void 0
                : p.chainDefault) == null
              ? void 0
              : E.http) == null
            ? void 0
            : w[0]) || o,
        c =
          ((S = n == null ? void 0 : n[a]) == null
            ? void 0
            : S.map((R) => R.url)) || [],
        d = [...c, i],
        f = [...c];
      return (
        u && !f.includes(u) && f.push(u),
        {
          ...t,
          chainNamespace: s,
          caipNetworkId: a,
          assets: {
            imageId: An.NetworkImageIds[t.id],
            imageUrl: e == null ? void 0 : e[t.id],
          },
          rpcUrls: {
            ...t.rpcUrls,
            default: { http: d },
            chainDefault: { http: f },
          },
        }
      );
    },
    extendCaipNetworks(
      t,
      { customNetworkImageUrls: e, projectId: r, customRpcUrls: n }
    ) {
      return t.map((s) =>
        dc.extendCaipNetwork(s, {
          customNetworkImageUrls: e,
          customRpcUrls: n,
          projectId: r,
        })
      );
    },
    getViemTransport(t, e, r) {
      var s, a, o;
      const n = [];
      return (
        r == null ||
          r.forEach((i) => {
            n.push(pn(i.url, i.config));
          }),
        Yn.includes(t.caipNetworkId) &&
          n.push(
            pn(zs(t.caipNetworkId, e), {
              fetchOptions: { headers: { "Content-Type": "text/plain" } },
            })
          ),
        (o =
          (a =
            (s = t == null ? void 0 : t.rpcUrls) == null
              ? void 0
              : s.default) == null
            ? void 0
            : a.http) == null ||
          o.forEach((i) => {
            n.push(pn(i));
          }),
        $s(n)
      );
    },
    extendWagmiTransports(t, e, r) {
      if (Yn.includes(t.caipNetworkId)) {
        const n = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
        return $s([r, pn(n)]);
      }
      return r;
    },
    getUnsupportedNetwork(t) {
      return {
        id: t.split(":")[1],
        caipNetworkId: t,
        name: P.UNSUPPORTED_NETWORK_NAME,
        chainNamespace: t.split(":")[0],
        nativeCurrency: { name: "", decimals: 0, symbol: "" },
        rpcUrls: { default: { http: [] } },
      };
    },
    getCaipNetworkFromStorage(t) {
      var u;
      const e = L.getActiveCaipNetworkId(),
        r = g.getAllRequestedCaipNetworks(),
        n = Array.from(
          ((u = g.state.chains) == null ? void 0 : u.keys()) || []
        ),
        s = e == null ? void 0 : e.split(":")[0],
        a = s ? n.includes(s) : !1,
        o = r == null ? void 0 : r.find((c) => c.caipNetworkId === e);
      return a && !o && e
        ? this.getUnsupportedNetwork(e)
        : o || t || (r == null ? void 0 : r[0]);
    },
  },
  qs = {
    transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
    signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u,
  },
  ye = {
    set(t, e) {
      Ze.isClient && localStorage.setItem(`${N.STORAGE_KEY}${t}`, e);
    },
    get(t) {
      return Ze.isClient ? localStorage.getItem(`${N.STORAGE_KEY}${t}`) : null;
    },
    delete(t, e) {
      Ze.isClient &&
        (e
          ? localStorage.removeItem(t)
          : localStorage.removeItem(`${N.STORAGE_KEY}${t}`));
    },
  },
  mn = 30 * 1e3,
  Ze = {
    checkIfAllowedToTriggerEmail() {
      const t = ye.get(N.LAST_EMAIL_LOGIN_TIME);
      if (t) {
        const e = Date.now() - Number(t);
        if (e < mn) {
          const r = Math.ceil((mn - e) / 1e3);
          throw new Error(`Please try again after ${r} seconds`);
        }
      }
    },
    getTimeToNextEmailLogin() {
      const t = ye.get(N.LAST_EMAIL_LOGIN_TIME);
      if (t) {
        const e = Date.now() - Number(t);
        if (e < mn) return Math.ceil((mn - e) / 1e3);
      }
      return 0;
    },
    checkIfRequestExists(t) {
      return (
        we.NOT_SAFE_RPC_METHODS.includes(t.method) ||
        we.SAFE_RPC_METHODS.includes(t.method)
      );
    },
    getResponseType(t) {
      return typeof t == "string" &&
        ((t == null ? void 0 : t.match(qs.transactionHash)) ||
          (t == null ? void 0 : t.match(qs.signedMessage)))
        ? N.RPC_RESPONSE_TYPE_TX
        : N.RPC_RESPONSE_TYPE_OBJECT;
    },
    checkIfRequestIsSafe(t) {
      return we.SAFE_RPC_METHODS.includes(t.method);
    },
    isClient: typeof window < "u",
  };
var Y;
(function (t) {
  t.assertEqual = (s) => s;
  function e(s) {}
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  (t.assertNever = r),
    (t.arrayToEnum = (s) => {
      const a = {};
      for (const o of s) a[o] = o;
      return a;
    }),
    (t.getValidEnumValues = (s) => {
      const a = t.objectKeys(s).filter((i) => typeof s[s[i]] != "number"),
        o = {};
      for (const i of a) o[i] = s[i];
      return t.objectValues(o);
    }),
    (t.objectValues = (s) =>
      t.objectKeys(s).map(function (a) {
        return s[a];
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const a = [];
            for (const o in s)
              Object.prototype.hasOwnProperty.call(s, o) && a.push(o);
            return a;
          }),
    (t.find = (s, a) => {
      for (const o of s) if (a(o)) return o;
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function n(s, a = " | ") {
    return s.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(a);
  }
  (t.joinValues = n),
    (t.jsonStringifyReplacer = (s, a) =>
      typeof a == "bigint" ? a.toString() : a);
})(Y || (Y = {}));
var us;
(function (t) {
  t.mergeShapes = (e, r) => ({ ...e, ...r });
})(us || (us = {}));
const C = Y.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  ut = (t) => {
    switch (typeof t) {
      case "undefined":
        return C.undefined;
      case "string":
        return C.string;
      case "number":
        return isNaN(t) ? C.nan : C.number;
      case "boolean":
        return C.boolean;
      case "function":
        return C.function;
      case "bigint":
        return C.bigint;
      case "symbol":
        return C.symbol;
      case "object":
        return Array.isArray(t)
          ? C.array
          : t === null
          ? C.null
          : t.then &&
            typeof t.then == "function" &&
            t.catch &&
            typeof t.catch == "function"
          ? C.promise
          : typeof Map < "u" && t instanceof Map
          ? C.map
          : typeof Set < "u" && t instanceof Set
          ? C.set
          : typeof Date < "u" && t instanceof Date
          ? C.date
          : C.object;
      default:
        return C.unknown;
    }
  },
  y = Y.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  fc = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class ze extends Error {
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (n) => {
        this.issues = [...this.issues, n];
      }),
      (this.addIssues = (n = []) => {
        this.issues = [...this.issues, ...n];
      });
    const r = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, r)
      : (this.__proto__ = r),
      (this.name = "ZodError"),
      (this.issues = e);
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r =
        e ||
        function (a) {
          return a.message;
        },
      n = { _errors: [] },
      s = (a) => {
        for (const o of a.issues)
          if (o.code === "invalid_union") o.unionErrors.map(s);
          else if (o.code === "invalid_return_type") s(o.returnTypeError);
          else if (o.code === "invalid_arguments") s(o.argumentsError);
          else if (o.path.length === 0) n._errors.push(r(o));
          else {
            let i = n,
              u = 0;
            for (; u < o.path.length; ) {
              const c = o.path[u];
              u === o.path.length - 1
                ? ((i[c] = i[c] || { _errors: [] }), i[c]._errors.push(r(o)))
                : (i[c] = i[c] || { _errors: [] }),
                (i = i[c]),
                u++;
            }
          }
      };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Y.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {},
      n = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((r[s.path[0]] = r[s.path[0]] || []), r[s.path[0]].push(e(s)))
        : n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
ze.create = (t) => new ze(t);
const jr = (t, e) => {
  let r;
  switch (t.code) {
    case y.invalid_type:
      t.received === C.undefined
        ? (r = "Required")
        : (r = `Expected ${t.expected}, received ${t.received}`);
      break;
    case y.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(
        t.expected,
        Y.jsonStringifyReplacer
      )}`;
      break;
    case y.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Y.joinValues(t.keys, ", ")}`;
      break;
    case y.invalid_union:
      r = "Invalid input";
      break;
    case y.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Y.joinValues(t.options)}`;
      break;
    case y.invalid_enum_value:
      r = `Invalid enum value. Expected ${Y.joinValues(t.options)}, received '${
        t.received
      }'`;
      break;
    case y.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case y.invalid_return_type:
      r = "Invalid function return type";
      break;
    case y.invalid_date:
      r = "Invalid date";
      break;
    case y.invalid_string:
      typeof t.validation == "object"
        ? "includes" in t.validation
          ? ((r = `Invalid input: must include "${t.validation.includes}"`),
            typeof t.validation.position == "number" &&
              (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
          : "startsWith" in t.validation
          ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
          : "endsWith" in t.validation
          ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
          : Y.assertNever(t.validation)
        : t.validation !== "regex"
        ? (r = `Invalid ${t.validation}`)
        : (r = "Invalid");
      break;
    case y.too_small:
      t.type === "array"
        ? (r = `Array must contain ${
            t.exact ? "exactly" : t.inclusive ? "at least" : "more than"
          } ${t.minimum} element(s)`)
        : t.type === "string"
        ? (r = `String must contain ${
            t.exact ? "exactly" : t.inclusive ? "at least" : "over"
          } ${t.minimum} character(s)`)
        : t.type === "number"
        ? (r = `Number must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${t.minimum}`)
        : t.type === "date"
        ? (r = `Date must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(t.minimum))}`)
        : (r = "Invalid input");
      break;
    case y.too_big:
      t.type === "array"
        ? (r = `Array must contain ${
            t.exact ? "exactly" : t.inclusive ? "at most" : "less than"
          } ${t.maximum} element(s)`)
        : t.type === "string"
        ? (r = `String must contain ${
            t.exact ? "exactly" : t.inclusive ? "at most" : "under"
          } ${t.maximum} character(s)`)
        : t.type === "number"
        ? (r = `Number must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "less than or equal to"
              : "less than"
          } ${t.maximum}`)
        : t.type === "bigint"
        ? (r = `BigInt must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "less than or equal to"
              : "less than"
          } ${t.maximum}`)
        : t.type === "date"
        ? (r = `Date must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(t.maximum))}`)
        : (r = "Invalid input");
      break;
    case y.custom:
      r = "Invalid input";
      break;
    case y.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case y.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case y.not_finite:
      r = "Number must be finite";
      break;
    default:
      (r = e.defaultError), Y.assertNever(t);
  }
  return { message: r };
};
let Na = jr;
function pc(t) {
  Na = t;
}
function Tn() {
  return Na;
}
const Sn = (t) => {
    const { data: e, path: r, errorMaps: n, issueData: s } = t,
      a = [...r, ...(s.path || [])],
      o = { ...s, path: a };
    let i = "";
    const u = n
      .filter((c) => !!c)
      .slice()
      .reverse();
    for (const c of u) i = c(o, { data: e, defaultError: i }).message;
    return { ...s, path: a, message: s.message || i };
  },
  hc = [];
function T(t, e) {
  const r = Sn({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, Tn(), jr].filter(
      (n) => !!n
    ),
  });
  t.common.issues.push(r);
}
class Ae {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted") return M;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r) n.push({ key: await s.key, value: await s.value });
    return Ae.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: a, value: o } = s;
      if (a.status === "aborted" || o.status === "aborted") return M;
      a.status === "dirty" && e.dirty(),
        o.status === "dirty" && e.dirty(),
        a.value !== "__proto__" &&
          (typeof o.value < "u" || s.alwaysSet) &&
          (n[a.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const M = Object.freeze({ status: "aborted" }),
  Ra = (t) => ({ status: "dirty", value: t }),
  Re = (t) => ({ status: "valid", value: t }),
  ds = (t) => t.status === "aborted",
  fs = (t) => t.status === "dirty",
  Fr = (t) => t.status === "valid",
  Nn = (t) => typeof Promise < "u" && t instanceof Promise;
var I;
(function (t) {
  (t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (t.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message);
})(I || (I = {}));
class Je {
  constructor(e, r, n, s) {
    (this._cachedPath = []),
      (this.parent = e),
      (this.data = r),
      (this._path = n),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Vs = (t, e) => {
  if (Fr(e)) return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new ze(t.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function j(t) {
  if (!t) return {};
  const {
    errorMap: e,
    invalid_type_error: r,
    required_error: n,
    description: s,
  } = t;
  if (e && (r || n))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return e
    ? { errorMap: e, description: s }
    : {
        errorMap: (o, i) =>
          o.code !== "invalid_type"
            ? { message: i.defaultError }
            : typeof i.data > "u"
            ? { message: n ?? i.defaultError }
            : { message: r ?? i.defaultError },
        description: s,
      };
}
class W {
  constructor(e) {
    (this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return ut(e.data);
  }
  _getOrReturnCtx(e, r) {
    return (
      r || {
        common: e.parent.common,
        data: e.data,
        parsedType: ut(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new Ae(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: ut(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Nn(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const s = {
        common: {
          issues: [],
          async:
            (n = r == null ? void 0 : r.async) !== null && n !== void 0
              ? n
              : !1,
          contextualErrorMap: r == null ? void 0 : r.errorMap,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: ut(e),
      },
      a = this._parseSync({ data: e, path: s.path, parent: s });
    return Vs(s, a);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
        common: {
          issues: [],
          contextualErrorMap: r == null ? void 0 : r.errorMap,
          async: !0,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: ut(e),
      },
      s = this._parse({ data: e, path: n.path, parent: n }),
      a = await (Nn(s) ? s : Promise.resolve(s));
    return Vs(n, a);
  }
  refine(e, r) {
    const n = (s) =>
      typeof r == "string" || typeof r > "u"
        ? { message: r }
        : typeof r == "function"
        ? r(s)
        : r;
    return this._refinement((s, a) => {
      const o = e(s),
        i = () => a.addIssue({ code: y.custom, ...n(s) });
      return typeof Promise < "u" && o instanceof Promise
        ? o.then((u) => (u ? !0 : (i(), !1)))
        : o
        ? !0
        : (i(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) =>
      e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1)
    );
  }
  _refinement(e) {
    return new Ve({
      schema: this,
      typeName: x.ZodEffects,
      effect: { type: "refinement", refinement: e },
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return st.create(this, this._def);
  }
  nullable() {
    return Ot.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return qe.create(this, this._def);
  }
  promise() {
    return er.create(this, this._def);
  }
  or(e) {
    return qr.create([this, e], this._def);
  }
  and(e) {
    return Vr.create(this, e, this._def);
  }
  transform(e) {
    return new Ve({
      ...j(this._def),
      schema: this,
      typeName: x.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Jr({
      ...j(this._def),
      innerType: this,
      defaultValue: r,
      typeName: x.ZodDefault,
    });
  }
  brand() {
    return new Oa({ typeName: x.ZodBranded, type: this, ...j(this._def) });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new kn({
      ...j(this._def),
      innerType: this,
      catchValue: r,
      typeName: x.ZodCatch,
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({ ...this._def, description: e });
  }
  pipe(e) {
    return nn.create(this, e);
  }
  readonly() {
    return Pn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const mc = /^c[^\s-]{8,}$/i,
  gc = /^[a-z][a-z0-9]*$/,
  wc = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  _c =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Ec =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  yc = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Jn;
const bc =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  Cc =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  vc = (t) =>
    t.precision
      ? t.offset
        ? new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
          )
        : new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`
          )
      : t.precision === 0
      ? t.offset
        ? new RegExp(
            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
          )
        : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
      : t.offset
      ? new RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
        )
      : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Ac(t, e) {
  return !!(
    ((e === "v4" || !e) && bc.test(t)) ||
    ((e === "v6" || !e) && Cc.test(t))
  );
}
class He extends W {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== C.string)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        T(a, {
          code: y.invalid_type,
          expected: C.string,
          received: a.parsedType,
        }),
        M
      );
    }
    const n = new Ae();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            code: y.too_small,
            minimum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            code: y.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          n.dirty());
      else if (a.kind === "length") {
        const o = e.data.length > a.value,
          i = e.data.length < a.value;
        (o || i) &&
          ((s = this._getOrReturnCtx(e, s)),
          o
            ? T(s, {
                code: y.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              })
            : i &&
              T(s, {
                code: y.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              }),
          n.dirty());
      } else if (a.kind === "email")
        Ec.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            validation: "email",
            code: y.invalid_string,
            message: a.message,
          }),
          n.dirty());
      else if (a.kind === "emoji")
        Jn || (Jn = new RegExp(yc, "u")),
          Jn.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            T(s, {
              validation: "emoji",
              code: y.invalid_string,
              message: a.message,
            }),
            n.dirty());
      else if (a.kind === "uuid")
        _c.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            validation: "uuid",
            code: y.invalid_string,
            message: a.message,
          }),
          n.dirty());
      else if (a.kind === "cuid")
        mc.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            validation: "cuid",
            code: y.invalid_string,
            message: a.message,
          }),
          n.dirty());
      else if (a.kind === "cuid2")
        gc.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            validation: "cuid2",
            code: y.invalid_string,
            message: a.message,
          }),
          n.dirty());
      else if (a.kind === "ulid")
        wc.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            validation: "ulid",
            code: y.invalid_string,
            message: a.message,
          }),
          n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          (s = this._getOrReturnCtx(e, s)),
            T(s, {
              validation: "url",
              code: y.invalid_string,
              message: a.message,
            }),
            n.dirty();
        }
      else
        a.kind === "regex"
          ? ((a.regex.lastIndex = 0),
            a.regex.test(e.data) ||
              ((s = this._getOrReturnCtx(e, s)),
              T(s, {
                validation: "regex",
                code: y.invalid_string,
                message: a.message,
              }),
              n.dirty()))
          : a.kind === "trim"
          ? (e.data = e.data.trim())
          : a.kind === "includes"
          ? e.data.includes(a.value, a.position) ||
            ((s = this._getOrReturnCtx(e, s)),
            T(s, {
              code: y.invalid_string,
              validation: { includes: a.value, position: a.position },
              message: a.message,
            }),
            n.dirty())
          : a.kind === "toLowerCase"
          ? (e.data = e.data.toLowerCase())
          : a.kind === "toUpperCase"
          ? (e.data = e.data.toUpperCase())
          : a.kind === "startsWith"
          ? e.data.startsWith(a.value) ||
            ((s = this._getOrReturnCtx(e, s)),
            T(s, {
              code: y.invalid_string,
              validation: { startsWith: a.value },
              message: a.message,
            }),
            n.dirty())
          : a.kind === "endsWith"
          ? e.data.endsWith(a.value) ||
            ((s = this._getOrReturnCtx(e, s)),
            T(s, {
              code: y.invalid_string,
              validation: { endsWith: a.value },
              message: a.message,
            }),
            n.dirty())
          : a.kind === "datetime"
          ? vc(a).test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            T(s, {
              code: y.invalid_string,
              validation: "datetime",
              message: a.message,
            }),
            n.dirty())
          : a.kind === "ip"
          ? Ac(e.data, a.version) ||
            ((s = this._getOrReturnCtx(e, s)),
            T(s, {
              validation: "ip",
              code: y.invalid_string,
              message: a.message,
            }),
            n.dirty())
          : Y.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: y.invalid_string,
      ...I.errToObj(n),
    });
  }
  _addCheck(e) {
    return new He({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...I.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...I.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...I.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...I.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...I.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...I.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...I.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...I.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          offset:
            (r = e == null ? void 0 : e.offset) !== null && r !== void 0
              ? r
              : !1,
          ...I.errToObj(e == null ? void 0 : e.message),
        });
  }
  regex(e, r) {
    return this._addCheck({ kind: "regex", regex: e, ...I.errToObj(r) });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...I.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(e, r) {
    return this._addCheck({ kind: "startsWith", value: e, ...I.errToObj(r) });
  }
  endsWith(e, r) {
    return this._addCheck({ kind: "endsWith", value: e, ...I.errToObj(r) });
  }
  min(e, r) {
    return this._addCheck({ kind: "min", value: e, ...I.errToObj(r) });
  }
  max(e, r) {
    return this._addCheck({ kind: "max", value: e, ...I.errToObj(r) });
  }
  length(e, r) {
    return this._addCheck({ kind: "length", value: e, ...I.errToObj(r) });
  }
  nonempty(e) {
    return this.min(1, I.errToObj(e));
  }
  trim() {
    return new He({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new He({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new He({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
He.create = (t) => {
  var e;
  return new He({
    checks: [],
    typeName: x.ZodString,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...j(t),
  });
};
function Tc(t, e) {
  const r = (t.toString().split(".")[1] || "").length,
    n = (e.toString().split(".")[1] || "").length,
    s = r > n ? r : n,
    a = parseInt(t.toFixed(s).replace(".", "")),
    o = parseInt(e.toFixed(s).replace(".", ""));
  return (a % o) / Math.pow(10, s);
}
class gt extends W {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== C.number)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        T(a, {
          code: y.invalid_type,
          expected: C.number,
          received: a.parsedType,
        }),
        M
      );
    }
    let n;
    const s = new Ae();
    for (const a of this._def.checks)
      a.kind === "int"
        ? Y.isInteger(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          T(n, {
            code: y.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message,
          }),
          s.dirty())
        : a.kind === "min"
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          T(n, {
            code: y.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "max"
        ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          T(n, {
            code: y.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "multipleOf"
        ? Tc(e.data, a.value) !== 0 &&
          ((n = this._getOrReturnCtx(e, n)),
          T(n, {
            code: y.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "finite"
        ? Number.isFinite(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          T(n, { code: y.not_finite, message: a.message }),
          s.dirty())
        : Y.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, I.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, I.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, I.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, I.toString(r));
  }
  setLimit(e, r, n, s) {
    return new gt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: n, message: I.toString(s) },
      ],
    });
  }
  _addCheck(e) {
    return new gt({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: I.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: I.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: I.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: I.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: I.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: I.toString(r),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: I.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: I.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: I.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && Y.isInteger(e.value))
    );
  }
  get isFinite() {
    let e = null,
      r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min"
        ? (r === null || n.value > r) && (r = n.value)
        : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
gt.create = (t) =>
  new gt({
    checks: [],
    typeName: x.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...j(t),
  });
class wt extends W {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = BigInt(e.data)),
      this._getType(e) !== C.bigint)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        T(a, {
          code: y.invalid_type,
          expected: C.bigint,
          received: a.parsedType,
        }),
        M
      );
    }
    let n;
    const s = new Ae();
    for (const a of this._def.checks)
      a.kind === "min"
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          T(n, {
            code: y.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "max"
        ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          T(n, {
            code: y.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          s.dirty())
        : a.kind === "multipleOf"
        ? e.data % a.value !== BigInt(0) &&
          ((n = this._getOrReturnCtx(e, n)),
          T(n, {
            code: y.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          s.dirty())
        : Y.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, I.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, I.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, I.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, I.toString(r));
  }
  setLimit(e, r, n, s) {
    return new wt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: n, message: I.toString(s) },
      ],
    });
  }
  _addCheck(e) {
    return new wt({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: I.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: I.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: I.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: I.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: I.toString(r),
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
wt.create = (t) => {
  var e;
  return new wt({
    checks: [],
    typeName: x.ZodBigInt,
    coerce:
      (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...j(t),
  });
};
class Wr extends W {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== C.boolean)
    ) {
      const n = this._getOrReturnCtx(e);
      return (
        T(n, {
          code: y.invalid_type,
          expected: C.boolean,
          received: n.parsedType,
        }),
        M
      );
    }
    return Re(e.data);
  }
}
Wr.create = (t) =>
  new Wr({
    typeName: x.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...j(t),
  });
class Rt extends W {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== C.date)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        T(a, {
          code: y.invalid_type,
          expected: C.date,
          received: a.parsedType,
        }),
        M
      );
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return T(a, { code: y.invalid_date }), M;
    }
    const n = new Ae();
    let s;
    for (const a of this._def.checks)
      a.kind === "min"
        ? e.data.getTime() < a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            code: y.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date",
          }),
          n.dirty())
        : a.kind === "max"
        ? e.data.getTime() > a.value &&
          ((s = this._getOrReturnCtx(e, s)),
          T(s, {
            code: y.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date",
          }),
          n.dirty())
        : Y.assertNever(a);
    return { status: n.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new Rt({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: I.toString(r),
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: I.toString(r),
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
Rt.create = (t) =>
  new Rt({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: x.ZodDate,
    ...j(t),
  });
class Rn extends W {
  _parse(e) {
    if (this._getType(e) !== C.symbol) {
      const n = this._getOrReturnCtx(e);
      return (
        T(n, {
          code: y.invalid_type,
          expected: C.symbol,
          received: n.parsedType,
        }),
        M
      );
    }
    return Re(e.data);
  }
}
Rn.create = (t) => new Rn({ typeName: x.ZodSymbol, ...j(t) });
class Hr extends W {
  _parse(e) {
    if (this._getType(e) !== C.undefined) {
      const n = this._getOrReturnCtx(e);
      return (
        T(n, {
          code: y.invalid_type,
          expected: C.undefined,
          received: n.parsedType,
        }),
        M
      );
    }
    return Re(e.data);
  }
}
Hr.create = (t) => new Hr({ typeName: x.ZodUndefined, ...j(t) });
class zr extends W {
  _parse(e) {
    if (this._getType(e) !== C.null) {
      const n = this._getOrReturnCtx(e);
      return (
        T(n, {
          code: y.invalid_type,
          expected: C.null,
          received: n.parsedType,
        }),
        M
      );
    }
    return Re(e.data);
  }
}
zr.create = (t) => new zr({ typeName: x.ZodNull, ...j(t) });
class Qt extends W {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return Re(e.data);
  }
}
Qt.create = (t) => new Qt({ typeName: x.ZodAny, ...j(t) });
class St extends W {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return Re(e.data);
  }
}
St.create = (t) => new St({ typeName: x.ZodUnknown, ...j(t) });
class at extends W {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return (
      T(r, { code: y.invalid_type, expected: C.never, received: r.parsedType }),
      M
    );
  }
}
at.create = (t) => new at({ typeName: x.ZodNever, ...j(t) });
class In extends W {
  _parse(e) {
    if (this._getType(e) !== C.undefined) {
      const n = this._getOrReturnCtx(e);
      return (
        T(n, {
          code: y.invalid_type,
          expected: C.void,
          received: n.parsedType,
        }),
        M
      );
    }
    return Re(e.data);
  }
}
In.create = (t) => new In({ typeName: x.ZodVoid, ...j(t) });
class qe extends W {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e),
      s = this._def;
    if (r.parsedType !== C.array)
      return (
        T(r, {
          code: y.invalid_type,
          expected: C.array,
          received: r.parsedType,
        }),
        M
      );
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value,
        i = r.data.length < s.exactLength.value;
      (o || i) &&
        (T(r, {
          code: o ? y.too_big : y.too_small,
          minimum: i ? s.exactLength.value : void 0,
          maximum: o ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (s.minLength !== null &&
        r.data.length < s.minLength.value &&
        (T(r, {
          code: y.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        n.dirty()),
      s.maxLength !== null &&
        r.data.length > s.maxLength.value &&
        (T(r, {
          code: y.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        n.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((o, i) => s.type._parseAsync(new Je(r, o, r.path, i)))
      ).then((o) => Ae.mergeArray(n, o));
    const a = [...r.data].map((o, i) =>
      s.type._parseSync(new Je(r, o, r.path, i))
    );
    return Ae.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new qe({
      ...this._def,
      minLength: { value: e, message: I.toString(r) },
    });
  }
  max(e, r) {
    return new qe({
      ...this._def,
      maxLength: { value: e, message: I.toString(r) },
    });
  }
  length(e, r) {
    return new qe({
      ...this._def,
      exactLength: { value: e, message: I.toString(r) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
qe.create = (t, e) =>
  new qe({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: x.ZodArray,
    ...j(e),
  });
function jt(t) {
  if (t instanceof de) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = st.create(jt(n));
    }
    return new de({ ...t._def, shape: () => e });
  } else
    return t instanceof qe
      ? new qe({ ...t._def, type: jt(t.element) })
      : t instanceof st
      ? st.create(jt(t.unwrap()))
      : t instanceof Ot
      ? Ot.create(jt(t.unwrap()))
      : t instanceof Xe
      ? Xe.create(t.items.map((e) => jt(e)))
      : t;
}
class de extends W {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      r = Y.objectKeys(e);
    return (this._cached = { shape: e, keys: r });
  }
  _parse(e) {
    if (this._getType(e) !== C.object) {
      const c = this._getOrReturnCtx(e);
      return (
        T(c, {
          code: y.invalid_type,
          expected: C.object,
          received: c.parsedType,
        }),
        M
      );
    }
    const { status: n, ctx: s } = this._processInputParams(e),
      { shape: a, keys: o } = this._getCached(),
      i = [];
    if (
      !(this._def.catchall instanceof at && this._def.unknownKeys === "strip")
    )
      for (const c in s.data) o.includes(c) || i.push(c);
    const u = [];
    for (const c of o) {
      const d = a[c],
        f = s.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new Je(s, f, s.path, c)),
        alwaysSet: c in s.data,
      });
    }
    if (this._def.catchall instanceof at) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of i)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] },
          });
      else if (c === "strict")
        i.length > 0 &&
          (T(s, { code: y.unrecognized_keys, keys: i }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of i) {
        const f = s.data[d];
        u.push({
          key: { status: "valid", value: d },
          value: c._parse(new Je(s, f, s.path, d)),
          alwaysSet: d in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const c = [];
            for (const d of u) {
              const f = await d.key;
              c.push({ key: f, value: await d.value, alwaysSet: d.alwaysSet });
            }
            return c;
          })
          .then((c) => Ae.mergeObjectSync(n, c))
      : Ae.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      I.errToObj,
      new de({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (r, n) => {
                var s, a, o, i;
                const u =
                  (o =
                    (a = (s = this._def).errorMap) === null || a === void 0
                      ? void 0
                      : a.call(s, r, n).message) !== null && o !== void 0
                    ? o
                    : n.defaultError;
                return r.code === "unrecognized_keys"
                  ? {
                      message:
                        (i = I.errToObj(e).message) !== null && i !== void 0
                          ? i
                          : u,
                    }
                  : { message: u };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new de({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new de({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new de({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new de({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: x.ZodObject,
    });
  }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  catchall(e) {
    return new de({ ...this._def, catchall: e });
  }
  pick(e) {
    const r = {};
    return (
      Y.objectKeys(e).forEach((n) => {
        e[n] && this.shape[n] && (r[n] = this.shape[n]);
      }),
      new de({ ...this._def, shape: () => r })
    );
  }
  omit(e) {
    const r = {};
    return (
      Y.objectKeys(this.shape).forEach((n) => {
        e[n] || (r[n] = this.shape[n]);
      }),
      new de({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return jt(this);
  }
  partial(e) {
    const r = {};
    return (
      Y.objectKeys(this.shape).forEach((n) => {
        const s = this.shape[n];
        e && !e[n] ? (r[n] = s) : (r[n] = s.optional());
      }),
      new de({ ...this._def, shape: () => r })
    );
  }
  required(e) {
    const r = {};
    return (
      Y.objectKeys(this.shape).forEach((n) => {
        if (e && !e[n]) r[n] = this.shape[n];
        else {
          let a = this.shape[n];
          for (; a instanceof st; ) a = a._def.innerType;
          r[n] = a;
        }
      }),
      new de({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return Ia(Y.objectKeys(this.shape));
  }
}
de.create = (t, e) =>
  new de({
    shape: () => t,
    unknownKeys: "strip",
    catchall: at.create(),
    typeName: x.ZodObject,
    ...j(e),
  });
de.strictCreate = (t, e) =>
  new de({
    shape: () => t,
    unknownKeys: "strict",
    catchall: at.create(),
    typeName: x.ZodObject,
    ...j(e),
  });
de.lazycreate = (t, e) =>
  new de({
    shape: t,
    unknownKeys: "strip",
    catchall: at.create(),
    typeName: x.ZodObject,
    ...j(e),
  });
class qr extends W {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = this._def.options;
    function s(a) {
      for (const i of a) if (i.result.status === "valid") return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((i) => new ze(i.ctx.common.issues));
      return T(r, { code: y.invalid_union, unionErrors: o }), M;
    }
    if (r.common.async)
      return Promise.all(
        n.map(async (a) => {
          const o = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return {
            result: await a._parseAsync({
              data: r.data,
              path: r.path,
              parent: o,
            }),
            ctx: o,
          };
        })
      ).then(s);
    {
      let a;
      const o = [];
      for (const u of n) {
        const c = { ...r, common: { ...r.common, issues: [] }, parent: null },
          d = u._parseSync({ data: r.data, path: r.path, parent: c });
        if (d.status === "valid") return d;
        d.status === "dirty" && !a && (a = { result: d, ctx: c }),
          c.common.issues.length && o.push(c.common.issues);
      }
      if (a) return r.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map((u) => new ze(u));
      return T(r, { code: y.invalid_union, unionErrors: i }), M;
    }
  }
  get options() {
    return this._def.options;
  }
}
qr.create = (t, e) => new qr({ options: t, typeName: x.ZodUnion, ...j(e) });
const wn = (t) =>
  t instanceof Zr
    ? wn(t.schema)
    : t instanceof Ve
    ? wn(t.innerType())
    : t instanceof Kr
    ? [t.value]
    : t instanceof _t
    ? t.options
    : t instanceof Yr
    ? Object.keys(t.enum)
    : t instanceof Jr
    ? wn(t._def.innerType)
    : t instanceof Hr
    ? [void 0]
    : t instanceof zr
    ? [null]
    : null;
class $n extends W {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== C.object)
      return (
        T(r, {
          code: y.invalid_type,
          expected: C.object,
          received: r.parsedType,
        }),
        M
      );
    const n = this.discriminator,
      s = r.data[n],
      a = this.optionsMap.get(s);
    return a
      ? r.common.async
        ? a._parseAsync({ data: r.data, path: r.path, parent: r })
        : a._parseSync({ data: r.data, path: r.path, parent: r })
      : (T(r, {
          code: y.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [n],
        }),
        M);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, r, n) {
    const s = new Map();
    for (const a of r) {
      const o = wn(a.shape[e]);
      if (!o)
        throw new Error(
          `A discriminator value for key \`${e}\` could not be extracted from all schema options`
        );
      for (const i of o) {
        if (s.has(i))
          throw new Error(
            `Discriminator property ${String(e)} has duplicate value ${String(
              i
            )}`
          );
        s.set(i, a);
      }
    }
    return new $n({
      typeName: x.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...j(n),
    });
  }
}
function ps(t, e) {
  const r = ut(t),
    n = ut(e);
  if (t === e) return { valid: !0, data: t };
  if (r === C.object && n === C.object) {
    const s = Y.objectKeys(e),
      a = Y.objectKeys(t).filter((i) => s.indexOf(i) !== -1),
      o = { ...t, ...e };
    for (const i of a) {
      const u = ps(t[i], e[i]);
      if (!u.valid) return { valid: !1 };
      o[i] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === C.array && n === C.array) {
    if (t.length !== e.length) return { valid: !1 };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const o = t[a],
        i = e[a],
        u = ps(o, i);
      if (!u.valid) return { valid: !1 };
      s.push(u.data);
    }
    return { valid: !0, data: s };
  } else
    return r === C.date && n === C.date && +t == +e
      ? { valid: !0, data: t }
      : { valid: !1 };
}
class Vr extends W {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e),
      s = (a, o) => {
        if (ds(a) || ds(o)) return M;
        const i = ps(a.value, o.value);
        return i.valid
          ? ((fs(a) || fs(o)) && r.dirty(), { status: r.value, value: i.data })
          : (T(n, { code: y.invalid_intersection_types }), M);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([a, o]) => s(a, o))
      : s(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n })
        );
  }
}
Vr.create = (t, e, r) =>
  new Vr({ left: t, right: e, typeName: x.ZodIntersection, ...j(r) });
class Xe extends W {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.array)
      return (
        T(n, {
          code: y.invalid_type,
          expected: C.array,
          received: n.parsedType,
        }),
        M
      );
    if (n.data.length < this._def.items.length)
      return (
        T(n, {
          code: y.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        M
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (T(n, {
        code: y.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    const a = [...n.data]
      .map((o, i) => {
        const u = this._def.items[i] || this._def.rest;
        return u ? u._parse(new Je(n, o, n.path, i)) : null;
      })
      .filter((o) => !!o);
    return n.common.async
      ? Promise.all(a).then((o) => Ae.mergeArray(r, o))
      : Ae.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Xe({ ...this._def, rest: e });
  }
}
Xe.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Xe({ items: t, typeName: x.ZodTuple, rest: null, ...j(e) });
};
class Gr extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.object)
      return (
        T(n, {
          code: y.invalid_type,
          expected: C.object,
          received: n.parsedType,
        }),
        M
      );
    const s = [],
      a = this._def.keyType,
      o = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: a._parse(new Je(n, i, n.path, i)),
        value: o._parse(new Je(n, n.data[i], n.path, i)),
      });
    return n.common.async
      ? Ae.mergeObjectAsync(r, s)
      : Ae.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof W
      ? new Gr({ keyType: e, valueType: r, typeName: x.ZodRecord, ...j(n) })
      : new Gr({
          keyType: He.create(),
          valueType: e,
          typeName: x.ZodRecord,
          ...j(r),
        });
  }
}
class On extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.map)
      return (
        T(n, { code: y.invalid_type, expected: C.map, received: n.parsedType }),
        M
      );
    const s = this._def.keyType,
      a = this._def.valueType,
      o = [...n.data.entries()].map(([i, u], c) => ({
        key: s._parse(new Je(n, i, n.path, [c, "key"])),
        value: a._parse(new Je(n, u, n.path, [c, "value"])),
      }));
    if (n.common.async) {
      const i = new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key,
            d = await u.value;
          if (c.status === "aborted" || d.status === "aborted") return M;
          (c.status === "dirty" || d.status === "dirty") && r.dirty(),
            i.set(c.value, d.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = new Map();
      for (const u of o) {
        const c = u.key,
          d = u.value;
        if (c.status === "aborted" || d.status === "aborted") return M;
        (c.status === "dirty" || d.status === "dirty") && r.dirty(),
          i.set(c.value, d.value);
      }
      return { status: r.value, value: i };
    }
  }
}
On.create = (t, e, r) =>
  new On({ valueType: e, keyType: t, typeName: x.ZodMap, ...j(r) });
class It extends W {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== C.set)
      return (
        T(n, { code: y.invalid_type, expected: C.set, received: n.parsedType }),
        M
      );
    const s = this._def;
    s.minSize !== null &&
      n.data.size < s.minSize.value &&
      (T(n, {
        code: y.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      r.dirty()),
      s.maxSize !== null &&
        n.data.size > s.maxSize.value &&
        (T(n, {
          code: y.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        r.dirty());
    const a = this._def.valueType;
    function o(u) {
      const c = new Set();
      for (const d of u) {
        if (d.status === "aborted") return M;
        d.status === "dirty" && r.dirty(), c.add(d.value);
      }
      return { status: r.value, value: c };
    }
    const i = [...n.data.values()].map((u, c) =>
      a._parse(new Je(n, u, n.path, c))
    );
    return n.common.async ? Promise.all(i).then((u) => o(u)) : o(i);
  }
  min(e, r) {
    return new It({
      ...this._def,
      minSize: { value: e, message: I.toString(r) },
    });
  }
  max(e, r) {
    return new It({
      ...this._def,
      maxSize: { value: e, message: I.toString(r) },
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
It.create = (t, e) =>
  new It({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: x.ZodSet,
    ...j(e),
  });
class qt extends W {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== C.function)
      return (
        T(r, {
          code: y.invalid_type,
          expected: C.function,
          received: r.parsedType,
        }),
        M
      );
    function n(i, u) {
      return Sn({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Tn(),
          jr,
        ].filter((c) => !!c),
        issueData: { code: y.invalid_arguments, argumentsError: u },
      });
    }
    function s(i, u) {
      return Sn({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Tn(),
          jr,
        ].filter((c) => !!c),
        issueData: { code: y.invalid_return_type, returnTypeError: u },
      });
    }
    const a = { errorMap: r.common.contextualErrorMap },
      o = r.data;
    if (this._def.returns instanceof er) {
      const i = this;
      return Re(async function (...u) {
        const c = new ze([]),
          d = await i._def.args.parseAsync(u, a).catch((p) => {
            throw (c.addIssue(n(u, p)), c);
          }),
          f = await Reflect.apply(o, this, d);
        return await i._def.returns._def.type.parseAsync(f, a).catch((p) => {
          throw (c.addIssue(s(f, p)), c);
        });
      });
    } else {
      const i = this;
      return Re(function (...u) {
        const c = i._def.args.safeParse(u, a);
        if (!c.success) throw new ze([n(u, c.error)]);
        const d = Reflect.apply(o, this, c.data),
          f = i._def.returns.safeParse(d, a);
        if (!f.success) throw new ze([s(d, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new qt({ ...this._def, args: Xe.create(e).rest(St.create()) });
  }
  returns(e) {
    return new qt({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new qt({
      args: e || Xe.create([]).rest(St.create()),
      returns: r || St.create(),
      typeName: x.ZodFunction,
      ...j(n),
    });
  }
}
class Zr extends W {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Zr.create = (t, e) => new Zr({ getter: t, typeName: x.ZodLazy, ...j(e) });
class Kr extends W {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return (
        T(r, {
          received: r.data,
          code: y.invalid_literal,
          expected: this._def.value,
        }),
        M
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Kr.create = (t, e) => new Kr({ value: t, typeName: x.ZodLiteral, ...j(e) });
function Ia(t, e) {
  return new _t({ values: t, typeName: x.ZodEnum, ...j(e) });
}
class _t extends W {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        T(r, {
          expected: Y.joinValues(n),
          received: r.parsedType,
          code: y.invalid_type,
        }),
        M
      );
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        T(r, { received: r.data, code: y.invalid_enum_value, options: n }), M
      );
    }
    return Re(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  extract(e) {
    return _t.create(e);
  }
  exclude(e) {
    return _t.create(this.options.filter((r) => !e.includes(r)));
  }
}
_t.create = Ia;
class Yr extends W {
  _parse(e) {
    const r = Y.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== C.string && n.parsedType !== C.number) {
      const s = Y.objectValues(r);
      return (
        T(n, {
          expected: Y.joinValues(s),
          received: n.parsedType,
          code: y.invalid_type,
        }),
        M
      );
    }
    if (r.indexOf(e.data) === -1) {
      const s = Y.objectValues(r);
      return (
        T(n, { received: n.data, code: y.invalid_enum_value, options: s }), M
      );
    }
    return Re(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Yr.create = (t, e) => new Yr({ values: t, typeName: x.ZodNativeEnum, ...j(e) });
class er extends W {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== C.promise && r.common.async === !1)
      return (
        T(r, {
          code: y.invalid_type,
          expected: C.promise,
          received: r.parsedType,
        }),
        M
      );
    const n = r.parsedType === C.promise ? r.data : Promise.resolve(r.data);
    return Re(
      n.then((s) =>
        this._def.type.parseAsync(s, {
          path: r.path,
          errorMap: r.common.contextualErrorMap,
        })
      )
    );
  }
}
er.create = (t, e) => new er({ type: t, typeName: x.ZodPromise, ...j(e) });
class Ve extends W {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === x.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e),
      s = this._def.effect || null,
      a = {
        addIssue: (o) => {
          T(n, o), o.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((a.addIssue = a.addIssue.bind(a)), s.type === "preprocess")) {
      const o = s.transform(n.data, a);
      return n.common.issues.length
        ? { status: "dirty", value: n.data }
        : n.common.async
        ? Promise.resolve(o).then((i) =>
            this._def.schema._parseAsync({ data: i, path: n.path, parent: n })
          )
        : this._def.schema._parseSync({ data: o, path: n.path, parent: n });
    }
    if (s.type === "refinement") {
      const o = (i) => {
        const u = s.refinement(i, a);
        if (n.common.async) return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return i.status === "aborted"
          ? M
          : (i.status === "dirty" && r.dirty(),
            o(i.value),
            { status: r.value, value: i.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((i) =>
            i.status === "aborted"
              ? M
              : (i.status === "dirty" && r.dirty(),
                o(i.value).then(() => ({ status: r.value, value: i.value })))
          );
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!Fr(o)) return o;
        const i = s.transform(o.value, a);
        if (i instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: r.value, value: i };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((o) =>
            Fr(o)
              ? Promise.resolve(s.transform(o.value, a)).then((i) => ({
                  status: r.value,
                  value: i,
                }))
              : o
          );
    Y.assertNever(s);
  }
}
Ve.create = (t, e, r) =>
  new Ve({ schema: t, typeName: x.ZodEffects, effect: e, ...j(r) });
Ve.createWithPreprocess = (t, e, r) =>
  new Ve({
    schema: e,
    effect: { type: "preprocess", transform: t },
    typeName: x.ZodEffects,
    ...j(r),
  });
class st extends W {
  _parse(e) {
    return this._getType(e) === C.undefined
      ? Re(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
st.create = (t, e) =>
  new st({ innerType: t, typeName: x.ZodOptional, ...j(e) });
class Ot extends W {
  _parse(e) {
    return this._getType(e) === C.null
      ? Re(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ot.create = (t, e) =>
  new Ot({ innerType: t, typeName: x.ZodNullable, ...j(e) });
class Jr extends W {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return (
      r.parsedType === C.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Jr.create = (t, e) =>
  new Jr({
    innerType: t,
    typeName: x.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...j(e),
  });
class kn extends W {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = { ...r, common: { ...r.common, issues: [] } },
      s = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return Nn(s)
      ? s.then((a) => ({
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new ze(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new ze(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
kn.create = (t, e) =>
  new kn({
    innerType: t,
    typeName: x.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...j(e),
  });
class xn extends W {
  _parse(e) {
    if (this._getType(e) !== C.nan) {
      const n = this._getOrReturnCtx(e);
      return (
        T(n, { code: y.invalid_type, expected: C.nan, received: n.parsedType }),
        M
      );
    }
    return { status: "valid", value: e.data };
  }
}
xn.create = (t) => new xn({ typeName: x.ZodNaN, ...j(t) });
const Sc = Symbol("zod_brand");
class Oa extends W {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = r.data;
    return this._def.type._parse({ data: n, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class nn extends W {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return a.status === "aborted"
          ? M
          : a.status === "dirty"
          ? (r.dirty(), Ra(a.value))
          : this._def.out._parseAsync({
              data: a.value,
              path: n.path,
              parent: n,
            });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n,
      });
      return s.status === "aborted"
        ? M
        : s.status === "dirty"
        ? (r.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: n.path, parent: n });
    }
  }
  static create(e, r) {
    return new nn({ in: e, out: r, typeName: x.ZodPipeline });
  }
}
class Pn extends W {
  _parse(e) {
    const r = this._def.innerType._parse(e);
    return Fr(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Pn.create = (t, e) =>
  new Pn({ innerType: t, typeName: x.ZodReadonly, ...j(e) });
const ka = (t, e = {}, r) =>
    t
      ? Qt.create().superRefine((n, s) => {
          var a, o;
          if (!t(n)) {
            const i =
                typeof e == "function"
                  ? e(n)
                  : typeof e == "string"
                  ? { message: e }
                  : e,
              u =
                (o = (a = i.fatal) !== null && a !== void 0 ? a : r) !== null &&
                o !== void 0
                  ? o
                  : !0,
              c = typeof i == "string" ? { message: i } : i;
            s.addIssue({ code: "custom", ...c, fatal: u });
          }
        })
      : Qt.create(),
  Nc = { object: de.lazycreate };
var x;
(function (t) {
  (t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline"),
    (t.ZodReadonly = "ZodReadonly");
})(x || (x = {}));
const Rc = (t, e = { message: `Input not instance of ${t.name}` }) =>
    ka((r) => r instanceof t, e),
  xa = He.create,
  Pa = gt.create,
  Ic = xn.create,
  Oc = wt.create,
  Ua = Wr.create,
  kc = Rt.create,
  xc = Rn.create,
  Pc = Hr.create,
  Uc = zr.create,
  Lc = Qt.create,
  Mc = St.create,
  Dc = at.create,
  Bc = In.create,
  $c = qe.create,
  jc = de.create,
  Fc = de.strictCreate,
  Wc = qr.create,
  Hc = $n.create,
  zc = Vr.create,
  qc = Xe.create,
  Vc = Gr.create,
  Gc = On.create,
  Zc = It.create,
  Kc = qt.create,
  Yc = Zr.create,
  Jc = Kr.create,
  Xc = _t.create,
  Qc = Yr.create,
  el = er.create,
  Gs = Ve.create,
  tl = st.create,
  rl = Ot.create,
  nl = Ve.createWithPreprocess,
  sl = nn.create,
  al = () => xa().optional(),
  ol = () => Pa().optional(),
  il = () => Ua().optional(),
  cl = {
    string: (t) => He.create({ ...t, coerce: !0 }),
    number: (t) => gt.create({ ...t, coerce: !0 }),
    boolean: (t) => Wr.create({ ...t, coerce: !0 }),
    bigint: (t) => wt.create({ ...t, coerce: !0 }),
    date: (t) => Rt.create({ ...t, coerce: !0 }),
  },
  ll = M;
var l = Object.freeze({
  __proto__: null,
  defaultErrorMap: jr,
  setErrorMap: pc,
  getErrorMap: Tn,
  makeIssue: Sn,
  EMPTY_PATH: hc,
  addIssueToContext: T,
  ParseStatus: Ae,
  INVALID: M,
  DIRTY: Ra,
  OK: Re,
  isAborted: ds,
  isDirty: fs,
  isValid: Fr,
  isAsync: Nn,
  get util() {
    return Y;
  },
  get objectUtil() {
    return us;
  },
  ZodParsedType: C,
  getParsedType: ut,
  ZodType: W,
  ZodString: He,
  ZodNumber: gt,
  ZodBigInt: wt,
  ZodBoolean: Wr,
  ZodDate: Rt,
  ZodSymbol: Rn,
  ZodUndefined: Hr,
  ZodNull: zr,
  ZodAny: Qt,
  ZodUnknown: St,
  ZodNever: at,
  ZodVoid: In,
  ZodArray: qe,
  ZodObject: de,
  ZodUnion: qr,
  ZodDiscriminatedUnion: $n,
  ZodIntersection: Vr,
  ZodTuple: Xe,
  ZodRecord: Gr,
  ZodMap: On,
  ZodSet: It,
  ZodFunction: qt,
  ZodLazy: Zr,
  ZodLiteral: Kr,
  ZodEnum: _t,
  ZodNativeEnum: Yr,
  ZodPromise: er,
  ZodEffects: Ve,
  ZodTransformer: Ve,
  ZodOptional: st,
  ZodNullable: Ot,
  ZodDefault: Jr,
  ZodCatch: kn,
  ZodNaN: xn,
  BRAND: Sc,
  ZodBranded: Oa,
  ZodPipeline: nn,
  ZodReadonly: Pn,
  custom: ka,
  Schema: W,
  ZodSchema: W,
  late: Nc,
  get ZodFirstPartyTypeKind() {
    return x;
  },
  coerce: cl,
  any: Lc,
  array: $c,
  bigint: Oc,
  boolean: Ua,
  date: kc,
  discriminatedUnion: Hc,
  effect: Gs,
  enum: Xc,
  function: Kc,
  instanceof: Rc,
  intersection: zc,
  lazy: Yc,
  literal: Jc,
  map: Gc,
  nan: Ic,
  nativeEnum: Qc,
  never: Dc,
  null: Uc,
  nullable: rl,
  number: Pa,
  object: jc,
  oboolean: il,
  onumber: ol,
  optional: tl,
  ostring: al,
  pipeline: sl,
  preprocess: nl,
  promise: el,
  record: Vc,
  set: Zc,
  strictObject: Fc,
  string: xa,
  symbol: xc,
  transformer: Gs,
  tuple: qc,
  undefined: Pc,
  union: Wc,
  unknown: Mc,
  void: Bc,
  NEVER: ll,
  ZodIssueCode: y,
  quotelessJson: fc,
  ZodError: ze,
});
const pe = l.object({ message: l.string() });
function v(t) {
  return l.literal(N[t]);
}
l.object({
  accessList: l.array(l.string()),
  blockHash: l.string().nullable(),
  blockNumber: l.string().nullable(),
  chainId: l.string().or(l.number()),
  from: l.string(),
  gas: l.string(),
  hash: l.string(),
  input: l.string().nullable(),
  maxFeePerGas: l.string(),
  maxPriorityFeePerGas: l.string(),
  nonce: l.string(),
  r: l.string(),
  s: l.string(),
  to: l.string(),
  transactionIndex: l.string().nullable(),
  type: l.string(),
  v: l.string(),
  value: l.string(),
});
const ul = l.object({ chainId: l.string().or(l.number()) }),
  dl = l.object({ email: l.string().email() }),
  fl = l.object({ otp: l.string() }),
  pl = l.object({ uri: l.string() }),
  hl = l.object({
    chainId: l.optional(l.string().or(l.number())),
    preferredAccountType: l.optional(l.string()),
  }),
  ml = l.object({
    provider: l.enum(["google", "github", "apple", "facebook", "x", "discord"]),
  }),
  gl = l.object({ email: l.string().email() }),
  wl = l.object({ otp: l.string() }),
  _l = l.object({ otp: l.string() }),
  El = l.object({
    themeMode: l.optional(l.enum(["light", "dark"])),
    themeVariables: l.optional(l.record(l.string(), l.string().or(l.number()))),
    w3mThemeVariables: l.optional(l.record(l.string(), l.string())),
  }),
  yl = l.object({
    metadata: l
      .object({
        name: l.string(),
        description: l.string(),
        url: l.string(),
        icons: l.array(l.string()),
      })
      .optional(),
    sdkVersion: l.string().optional(),
    sdkType: l.string().optional(),
    projectId: l.string(),
  }),
  bl = l.object({ type: l.string() }),
  Cl = l.object({ action: l.enum(["VERIFY_DEVICE", "VERIFY_OTP", "CONNECT"]) }),
  vl = l.object({ url: l.string() }),
  Al = l.object({ userName: l.string() }),
  Tl = l.object({
    email: l.string().optional().nullable(),
    address: l.string(),
    chainId: l.string().or(l.number()),
    accounts: l
      .array(
        l.object({
          address: l.string(),
          type: l.enum([we.ACCOUNT_TYPES.EOA, we.ACCOUNT_TYPES.SMART_ACCOUNT]),
        })
      )
      .optional(),
    userName: l.string().optional().nullable(),
  }),
  Sl = l.object({
    action: l.enum(["VERIFY_PRIMARY_OTP", "VERIFY_SECONDARY_OTP"]),
  }),
  Nl = l.object({
    email: l.string().email().optional().nullable(),
    address: l.string(),
    chainId: l.string().or(l.number()),
    smartAccountDeployed: l.optional(l.boolean()),
    accounts: l
      .array(
        l.object({
          address: l.string(),
          type: l.enum([we.ACCOUNT_TYPES.EOA, we.ACCOUNT_TYPES.SMART_ACCOUNT]),
        })
      )
      .optional(),
    preferredAccountType: l.optional(l.string()),
  }),
  Rl = l.object({ uri: l.string() }),
  Il = l.object({ isConnected: l.boolean() }),
  Ol = l.object({ chainId: l.string().or(l.number()) }),
  kl = l.object({ chainId: l.string().or(l.number()) }),
  xl = l.object({ newEmail: l.string().email() }),
  Pl = l.object({ smartAccountEnabledNetworks: l.array(l.number()) });
l.object({ address: l.string(), isDeployed: l.boolean() });
const Ul = l.object({ version: l.string().optional() }),
  Ll = l.object({ type: l.string(), address: l.string() }),
  Ml = l.any(),
  Dl = l.object({ method: l.literal("eth_accounts") }),
  Bl = l.object({ method: l.literal("eth_blockNumber") }),
  $l = l.object({ method: l.literal("eth_call"), params: l.array(l.any()) }),
  jl = l.object({ method: l.literal("eth_chainId") }),
  Fl = l.object({
    method: l.literal("eth_estimateGas"),
    params: l.array(l.any()),
  }),
  Wl = l.object({
    method: l.literal("eth_feeHistory"),
    params: l.array(l.any()),
  }),
  Hl = l.object({ method: l.literal("eth_gasPrice") }),
  zl = l.object({
    method: l.literal("eth_getAccount"),
    params: l.array(l.any()),
  }),
  ql = l.object({
    method: l.literal("eth_getBalance"),
    params: l.array(l.any()),
  }),
  Vl = l.object({
    method: l.literal("eth_getBlockByHash"),
    params: l.array(l.any()),
  }),
  Gl = l.object({
    method: l.literal("eth_getBlockByNumber"),
    params: l.array(l.any()),
  }),
  Zl = l.object({
    method: l.literal("eth_getBlockReceipts"),
    params: l.array(l.any()),
  }),
  Kl = l.object({
    method: l.literal("eth_getBlockTransactionCountByHash"),
    params: l.array(l.any()),
  }),
  Yl = l.object({
    method: l.literal("eth_getBlockTransactionCountByNumber"),
    params: l.array(l.any()),
  }),
  Jl = l.object({ method: l.literal("eth_getCode"), params: l.array(l.any()) }),
  Xl = l.object({
    method: l.literal("eth_getFilterChanges"),
    params: l.array(l.any()),
  }),
  Ql = l.object({
    method: l.literal("eth_getFilterLogs"),
    params: l.array(l.any()),
  }),
  eu = l.object({ method: l.literal("eth_getLogs"), params: l.array(l.any()) }),
  tu = l.object({
    method: l.literal("eth_getProof"),
    params: l.array(l.any()),
  }),
  ru = l.object({
    method: l.literal("eth_getStorageAt"),
    params: l.array(l.any()),
  }),
  nu = l.object({
    method: l.literal("eth_getTransactionByBlockHashAndIndex"),
    params: l.array(l.any()),
  }),
  su = l.object({
    method: l.literal("eth_getTransactionByBlockNumberAndIndex"),
    params: l.array(l.any()),
  }),
  au = l.object({
    method: l.literal("eth_getTransactionByHash"),
    params: l.array(l.any()),
  }),
  ou = l.object({
    method: l.literal("eth_getTransactionCount"),
    params: l.array(l.any()),
  }),
  iu = l.object({
    method: l.literal("eth_getTransactionReceipt"),
    params: l.array(l.any()),
  }),
  cu = l.object({
    method: l.literal("eth_getUncleCountByBlockHash"),
    params: l.array(l.any()),
  }),
  lu = l.object({
    method: l.literal("eth_getUncleCountByBlockNumber"),
    params: l.array(l.any()),
  }),
  uu = l.object({ method: l.literal("eth_maxPriorityFeePerGas") }),
  du = l.object({ method: l.literal("eth_newBlockFilter") }),
  fu = l.object({
    method: l.literal("eth_newFilter"),
    params: l.array(l.any()),
  }),
  pu = l.object({ method: l.literal("eth_newPendingTransactionFilter") }),
  hu = l.object({
    method: l.literal("eth_sendRawTransaction"),
    params: l.array(l.any()),
  }),
  mu = l.object({ method: l.literal("eth_syncing"), params: l.array(l.any()) }),
  gu = l.object({
    method: l.literal("eth_uninstallFilter"),
    params: l.array(l.any()),
  }),
  Zs = l.object({
    method: l.literal("personal_sign"),
    params: l.array(l.any()),
  }),
  wu = l.object({
    method: l.literal("eth_signTypedData_v4"),
    params: l.array(l.any()),
  }),
  _u = l.object({
    method: l.literal("eth_sendTransaction"),
    params: l.array(l.any()),
  }),
  Eu = l.object({
    method: l.literal("solana_signMessage"),
    params: l.object({ message: l.string(), pubkey: l.string() }),
  }),
  yu = l.object({
    method: l.literal("solana_signTransaction"),
    params: l.object({ transaction: l.string() }),
  }),
  bu = l.object({
    method: l.literal("solana_signAllTransactions"),
    params: l.object({ transactions: l.array(l.string()) }),
  }),
  Cu = l.object({
    method: l.literal("solana_signAndSendTransaction"),
    params: l.object({
      transaction: l.string(),
      options: l
        .object({
          skipPreflight: l.boolean().optional(),
          preflightCommitment: l
            .enum([
              "processed",
              "confirmed",
              "finalized",
              "recent",
              "single",
              "singleGossip",
              "root",
              "max",
            ])
            .optional(),
          maxRetries: l.number().optional(),
          minContextSlot: l.number().optional(),
        })
        .optional(),
    }),
  }),
  vu = l.object({
    method: l.literal("wallet_sendCalls"),
    params: l.array(
      l.object({
        chainId: l.string().or(l.number()).optional(),
        from: l.string().optional(),
        version: l.string().optional(),
        capabilities: l.any().optional(),
        calls: l.array(
          l.object({
            to: l.string().startsWith("0x"),
            data: l.string().startsWith("0x").optional(),
            value: l.string().optional(),
          })
        ),
      })
    ),
  }),
  Au = l.object({
    method: l.literal("wallet_getCallsStatus"),
    params: l.array(l.string()),
  }),
  Tu = l.object({ method: l.literal("wallet_getCapabilities") }),
  Su = l.object({
    method: l.literal("wallet_grantPermissions"),
    params: l.array(l.any()),
  }),
  Nu = l.object({
    method: l.literal("wallet_revokePermissions"),
    params: l.any(),
  }),
  Ru = l.object({ method: l.literal("wallet_getAssets"), params: l.any() }),
  Ks = l.object({ token: l.string() }),
  A = l.object({ id: l.string().optional() }),
  ir = {
    appEvent: A.extend({ type: v("APP_SWITCH_NETWORK"), payload: ul })
      .or(A.extend({ type: v("APP_CONNECT_EMAIL"), payload: dl }))
      .or(A.extend({ type: v("APP_CONNECT_DEVICE") }))
      .or(A.extend({ type: v("APP_CONNECT_OTP"), payload: fl }))
      .or(A.extend({ type: v("APP_CONNECT_SOCIAL"), payload: pl }))
      .or(A.extend({ type: v("APP_GET_FARCASTER_URI") }))
      .or(A.extend({ type: v("APP_CONNECT_FARCASTER") }))
      .or(A.extend({ type: v("APP_GET_USER"), payload: l.optional(hl) }))
      .or(A.extend({ type: v("APP_GET_SOCIAL_REDIRECT_URI"), payload: ml }))
      .or(A.extend({ type: v("APP_SIGN_OUT") }))
      .or(A.extend({ type: v("APP_IS_CONNECTED"), payload: l.optional(Ks) }))
      .or(A.extend({ type: v("APP_GET_CHAIN_ID") }))
      .or(A.extend({ type: v("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS") }))
      .or(A.extend({ type: v("APP_INIT_SMART_ACCOUNT") }))
      .or(A.extend({ type: v("APP_SET_PREFERRED_ACCOUNT"), payload: bl }))
      .or(
        A.extend({
          type: v("APP_RPC_REQUEST"),
          payload: Zs.or(Ru)
            .or(Dl)
            .or(Bl)
            .or($l)
            .or(jl)
            .or(Fl)
            .or(Wl)
            .or(Hl)
            .or(zl)
            .or(ql)
            .or(Vl)
            .or(Gl)
            .or(Zl)
            .or(Kl)
            .or(Yl)
            .or(Jl)
            .or(Xl)
            .or(Ql)
            .or(eu)
            .or(tu)
            .or(ru)
            .or(nu)
            .or(su)
            .or(au)
            .or(ou)
            .or(iu)
            .or(cu)
            .or(lu)
            .or(uu)
            .or(du)
            .or(fu)
            .or(pu)
            .or(hu)
            .or(mu)
            .or(gu)
            .or(Zs)
            .or(wu)
            .or(_u)
            .or(Eu)
            .or(yu)
            .or(bu)
            .or(Cu)
            .or(Au)
            .or(vu)
            .or(Tu)
            .or(Su)
            .or(Nu),
        })
      )
      .or(A.extend({ type: v("APP_UPDATE_EMAIL"), payload: gl }))
      .or(A.extend({ type: v("APP_UPDATE_EMAIL_PRIMARY_OTP"), payload: wl }))
      .or(A.extend({ type: v("APP_UPDATE_EMAIL_SECONDARY_OTP"), payload: _l }))
      .or(A.extend({ type: v("APP_SYNC_THEME"), payload: El }))
      .or(A.extend({ type: v("APP_SYNC_DAPP_DATA"), payload: yl }))
      .or(A.extend({ type: v("APP_RELOAD") })),
    frameEvent: A.extend({ type: v("FRAME_SWITCH_NETWORK_ERROR"), payload: pe })
      .or(A.extend({ type: v("FRAME_SWITCH_NETWORK_SUCCESS"), payload: kl }))
      .or(A.extend({ type: v("FRAME_CONNECT_EMAIL_SUCCESS"), payload: Cl }))
      .or(A.extend({ type: v("FRAME_CONNECT_EMAIL_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_GET_FARCASTER_URI_SUCCESS"), payload: vl }))
      .or(A.extend({ type: v("FRAME_GET_FARCASTER_URI_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_CONNECT_FARCASTER_SUCCESS"), payload: Al }))
      .or(A.extend({ type: v("FRAME_CONNECT_FARCASTER_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_CONNECT_OTP_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_CONNECT_OTP_SUCCESS") }))
      .or(A.extend({ type: v("FRAME_CONNECT_DEVICE_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_CONNECT_DEVICE_SUCCESS") }))
      .or(A.extend({ type: v("FRAME_CONNECT_SOCIAL_SUCCESS"), payload: Tl }))
      .or(A.extend({ type: v("FRAME_CONNECT_SOCIAL_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_GET_USER_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_GET_USER_SUCCESS"), payload: Nl }))
      .or(
        A.extend({
          type: v("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),
          payload: pe,
        })
      )
      .or(
        A.extend({
          type: v("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),
          payload: Rl,
        })
      )
      .or(A.extend({ type: v("FRAME_SIGN_OUT_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_SIGN_OUT_SUCCESS") }))
      .or(A.extend({ type: v("FRAME_IS_CONNECTED_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_IS_CONNECTED_SUCCESS"), payload: Il }))
      .or(A.extend({ type: v("FRAME_GET_CHAIN_ID_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_GET_CHAIN_ID_SUCCESS"), payload: Ol }))
      .or(A.extend({ type: v("FRAME_RPC_REQUEST_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_RPC_REQUEST_SUCCESS"), payload: Ml }))
      .or(A.extend({ type: v("FRAME_SESSION_UPDATE"), payload: Ks }))
      .or(A.extend({ type: v("FRAME_UPDATE_EMAIL_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_UPDATE_EMAIL_SUCCESS"), payload: Sl }))
      .or(
        A.extend({
          type: v("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),
          payload: pe,
        })
      )
      .or(A.extend({ type: v("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS") }))
      .or(
        A.extend({
          type: v("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),
          payload: pe,
        })
      )
      .or(
        A.extend({
          type: v("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
          payload: xl,
        })
      )
      .or(A.extend({ type: v("FRAME_SYNC_THEME_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_SYNC_THEME_SUCCESS") }))
      .or(A.extend({ type: v("FRAME_SYNC_DAPP_DATA_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_SYNC_DAPP_DATA_SUCCESS") }))
      .or(
        A.extend({
          type: v("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
          payload: Pl,
        })
      )
      .or(
        A.extend({
          type: v("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
          payload: pe,
        })
      )
      .or(A.extend({ type: v("FRAME_INIT_SMART_ACCOUNT_ERROR"), payload: pe }))
      .or(
        A.extend({
          type: v("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
          payload: Ll,
        })
      )
      .or(
        A.extend({ type: v("FRAME_SET_PREFERRED_ACCOUNT_ERROR"), payload: pe })
      )
      .or(A.extend({ type: v("FRAME_READY"), payload: Ul }))
      .or(A.extend({ type: v("FRAME_RELOAD_ERROR"), payload: pe }))
      .or(A.extend({ type: v("FRAME_RELOAD_SUCCESS") })),
  };
function Xn(t, e = {}) {
  var r;
  return (
    typeof (e == null ? void 0 : e.type) == "string" &&
    ((r = e == null ? void 0 : e.type) == null ? void 0 : r.includes(t))
  );
}
class Iu {
  constructor({
    projectId: e,
    isAppClient: r = !1,
    chainId: n = "eip155:1",
    enableLogger: s = !0,
  }) {
    if (
      ((this.iframe = null),
      (this.rpcUrl = P.BLOCKCHAIN_API_RPC_URL),
      (this.initFrame = () => {
        const a = document.getElementById("w3m-iframe");
        this.iframe && !a && document.body.appendChild(this.iframe);
      }),
      (this.events = {
        registerFrameEventHandler: (a, o, i) => {
          function u({ data: c }) {
            if (!Xn(N.FRAME_EVENT_KEY, c)) return;
            const d = ir.frameEvent.parse(c);
            d.id === a && (o(d), window.removeEventListener("message", u));
          }
          Ze.isClient &&
            (window.addEventListener("message", u),
            i.addEventListener("abort", () => {
              window.removeEventListener("message", u);
            }));
        },
        onFrameEvent: (a) => {
          Ze.isClient &&
            window.addEventListener("message", ({ data: o }) => {
              if (!Xn(N.FRAME_EVENT_KEY, o)) return;
              const i = ir.frameEvent.parse(o);
              a(i);
            });
        },
        onAppEvent: (a) => {
          Ze.isClient &&
            window.addEventListener("message", ({ data: o }) => {
              if (!Xn(N.APP_EVENT_KEY, o)) return;
              const i = ir.appEvent.parse(o);
              a(i);
            });
        },
        postAppEvent: (a) => {
          var o;
          if (Ze.isClient) {
            if (!((o = this.iframe) != null && o.contentWindow))
              throw new Error("W3mFrame: iframe is not set");
            ir.appEvent.parse(a), this.iframe.contentWindow.postMessage(a, "*");
          }
        },
        postFrameEvent: (a) => {
          if (Ze.isClient) {
            if (!parent) throw new Error("W3mFrame: parent is not set");
            ir.frameEvent.parse(a), parent.postMessage(a, "*");
          }
        },
      }),
      (this.projectId = e),
      (this.frameLoadPromise = new Promise((a, o) => {
        this.frameLoadPromiseResolver = { resolve: a, reject: o };
      })),
      r &&
        ((this.frameLoadPromise = new Promise((a, o) => {
          this.frameLoadPromiseResolver = { resolve: a, reject: o };
        })),
        Ze.isClient))
    ) {
      const a = document.createElement("iframe");
      (a.id = "w3m-iframe"),
        (a.src = `${Fi}?projectId=${e}&chainId=${n}&version=${Hi}&enableLogger=${s}`),
        (a.name = "w3m-secure-iframe"),
        (a.style.position = "fixed"),
        (a.style.zIndex = "999999"),
        (a.style.display = "none"),
        (a.style.animationDelay = "0s, 50ms"),
        (a.style.borderBottomLeftRadius =
          "clamp(0px, var(--wui-border-radius-l), 44px)"),
        (a.style.borderBottomRightRadius =
          "clamp(0px, var(--wui-border-radius-l), 44px)"),
        (this.iframe = a),
        (this.iframe.onerror = () => {
          var o;
          (o = this.frameLoadPromiseResolver) == null ||
            o.reject("Unable to load email login dependency");
        }),
        this.events.onFrameEvent((o) => {
          var i;
          o.type === "@w3m-frame/READY" &&
            ((i = this.frameLoadPromiseResolver) == null || i.resolve(void 0));
        });
    }
  }
  get networks() {
    const e = [
      "eip155:1",
      "eip155:5",
      "eip155:11155111",
      "eip155:10",
      "eip155:420",
      "eip155:42161",
      "eip155:421613",
      "eip155:137",
      "eip155:80001",
      "eip155:42220",
      "eip155:1313161554",
      "eip155:1313161555",
      "eip155:56",
      "eip155:97",
      "eip155:43114",
      "eip155:43113",
      "eip155:324",
      "eip155:280",
      "eip155:100",
      "eip155:8453",
      "eip155:84531",
      "eip155:84532",
      "eip155:7777777",
      "eip155:999",
      "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
      "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    ].map((r) => ({
      [r]: {
        rpcUrl: `${this.rpcUrl}/v1/?chainId=${r}&projectId=${this.projectId}`,
        chainId: r,
      },
    }));
    return Object.assign({}, ...e);
  }
}
class Ou {
  constructor(e) {
    var a;
    const r = si({ level: Wi }),
      { logger: n, chunkLoggerController: s } = fi({ opts: r });
    (this.logger = li(n, this.constructor.name)),
      (this.chunkLoggerController = s),
      typeof window < "u" &&
        (a = this.chunkLoggerController) != null &&
        a.downloadLogsBlobInBrowser &&
        (window.downloadAppKitLogsBlob || (window.downloadAppKitLogsBlob = {}),
        (window.downloadAppKitLogsBlob.sdk = () => {
          var o;
          (o = this.chunkLoggerController) != null &&
            o.downloadLogsBlobInBrowser &&
            this.chunkLoggerController.downloadLogsBlobInBrowser({
              projectId: e,
            });
        }));
  }
}
class ku {
  constructor({
    projectId: e,
    chainId: r,
    enableLogger: n = !0,
    onTimeout: s,
  }) {
    (this.openRpcRequests = []),
      n && (this.w3mLogger = new Ou(e)),
      (this.w3mFrame = new Iu({
        projectId: e,
        isAppClient: !0,
        chainId: r,
        enableLogger: n,
      })),
      (this.onTimeout = s),
      this.getLoginEmailUsed() && this.w3mFrame.initFrame(),
      (this.initPromise = new Promise((a) => {
        this.w3mFrame.events.onFrameEvent(async (o) => {
          o.type === N.FRAME_READY &&
            ((this.initPromise = void 0),
            await new Promise((i) => {
              setTimeout(i, 500);
            }),
            a());
        });
      }));
  }
  async init() {
    this.w3mFrame.initFrame(), this.initPromise && (await this.initPromise);
  }
  getLoginEmailUsed() {
    return !!ye.get(N.EMAIL_LOGIN_USED_KEY);
  }
  getEmail() {
    return ye.get(N.EMAIL);
  }
  getUsername() {
    return ye.get(N.SOCIAL_USERNAME);
  }
  async reload() {
    var e;
    try {
      this.w3mFrame.initFrame(), await this.appEvent({ type: N.APP_RELOAD });
    } catch (r) {
      throw (
        ((e = this.w3mLogger) == null ||
          e.logger.error({ error: r }, "Error reloading iframe"),
        r)
      );
    }
  }
  async connectEmail(e) {
    var r;
    try {
      Ze.checkIfAllowedToTriggerEmail(), this.w3mFrame.initFrame();
      const n = await this.appEvent({ type: N.APP_CONNECT_EMAIL, payload: e });
      return this.setNewLastEmailLoginTime(), n;
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error connecting email"),
        n)
      );
    }
  }
  async connectDevice() {
    var e;
    try {
      return this.appEvent({ type: N.APP_CONNECT_DEVICE });
    } catch (r) {
      throw (
        ((e = this.w3mLogger) == null ||
          e.logger.error({ error: r }, "Error connecting device"),
        r)
      );
    }
  }
  async connectOtp(e) {
    var r;
    try {
      return this.appEvent({ type: N.APP_CONNECT_OTP, payload: e });
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error connecting otp"),
        n)
      );
    }
  }
  async isConnected() {
    var e;
    try {
      if (!this.getLoginEmailUsed()) return { isConnected: !1 };
      const r = await this.appEvent({ type: N.APP_IS_CONNECTED });
      return (r != null && r.isConnected) || this.deleteAuthLoginCache(), r;
    } catch (r) {
      throw (
        (this.deleteAuthLoginCache(),
        (e = this.w3mLogger) == null ||
          e.logger.error({ error: r }, "Error checking connection"),
        r)
      );
    }
  }
  async getChainId() {
    var e;
    try {
      const r = await this.appEvent({ type: N.APP_GET_CHAIN_ID });
      return this.setLastUsedChainId(r.chainId), r;
    } catch (r) {
      throw (
        ((e = this.w3mLogger) == null ||
          e.logger.error({ error: r }, "Error getting chain id"),
        r)
      );
    }
  }
  async getSocialRedirectUri(e) {
    var r;
    try {
      return (
        this.w3mFrame.initFrame(),
        this.appEvent({ type: N.APP_GET_SOCIAL_REDIRECT_URI, payload: e })
      );
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error getting social redirect uri"),
        n)
      );
    }
  }
  async updateEmail(e) {
    var r;
    try {
      const n = await this.appEvent({ type: N.APP_UPDATE_EMAIL, payload: e });
      return this.setNewLastEmailLoginTime(), n;
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error updating email"),
        n)
      );
    }
  }
  async updateEmailPrimaryOtp(e) {
    var r;
    try {
      return this.appEvent({
        type: N.APP_UPDATE_EMAIL_PRIMARY_OTP,
        payload: e,
      });
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error updating email primary otp"),
        n)
      );
    }
  }
  async updateEmailSecondaryOtp(e) {
    var r;
    try {
      const n = await this.appEvent({
        type: N.APP_UPDATE_EMAIL_SECONDARY_OTP,
        payload: e,
      });
      return this.setLoginSuccess(n.newEmail), n;
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error updating email secondary otp"),
        n)
      );
    }
  }
  async syncTheme(e) {
    var r;
    try {
      return this.appEvent({ type: N.APP_SYNC_THEME, payload: e });
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error syncing theme"),
        n)
      );
    }
  }
  async syncDappData(e) {
    var r;
    try {
      return this.appEvent({ type: N.APP_SYNC_DAPP_DATA, payload: e });
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error syncing dapp data"),
        n)
      );
    }
  }
  async getSmartAccountEnabledNetworks() {
    var e;
    try {
      const r = await this.appEvent({
        type: N.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS,
      });
      return (
        this.persistSmartAccountEnabledNetworks(r.smartAccountEnabledNetworks),
        r
      );
    } catch (r) {
      throw (
        (this.persistSmartAccountEnabledNetworks([]),
        (e = this.w3mLogger) == null ||
          e.logger.error(
            { error: r },
            "Error getting smart account enabled networks"
          ),
        r)
      );
    }
  }
  async setPreferredAccount(e) {
    var r;
    try {
      return this.appEvent({
        type: N.APP_SET_PREFERRED_ACCOUNT,
        payload: { type: e },
      });
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error setting preferred account"),
        n)
      );
    }
  }
  async connect(e) {
    var r;
    try {
      const n =
          (e == null ? void 0 : e.chainId) || this.getLastUsedChainId() || 1,
        s = await this.getUser({
          chainId: n,
          preferredAccountType: e == null ? void 0 : e.preferredAccountType,
        });
      return (
        this.setLoginSuccess(s.email),
        this.setLastUsedChainId(s.chainId),
        (this.user = s),
        s
      );
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error connecting"),
        n)
      );
    }
  }
  async getUser(e) {
    var r;
    try {
      const n =
          (e == null ? void 0 : e.chainId) || this.getLastUsedChainId() || 1,
        s = await this.appEvent({
          type: N.APP_GET_USER,
          payload: { ...e, chainId: n },
        });
      return (this.user = s), s;
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error connecting"),
        n)
      );
    }
  }
  async connectSocial(e) {
    var r;
    try {
      this.w3mFrame.initFrame();
      const n = await this.appEvent({
        type: N.APP_CONNECT_SOCIAL,
        payload: { uri: e },
      });
      return n.userName && this.setSocialLoginSuccess(n.userName), n;
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error connecting social"),
        n)
      );
    }
  }
  async getFarcasterUri() {
    var e;
    try {
      return (
        this.w3mFrame.initFrame(),
        await this.appEvent({ type: N.APP_GET_FARCASTER_URI })
      );
    } catch (r) {
      throw (
        ((e = this.w3mLogger) == null ||
          e.logger.error({ error: r }, "Error getting farcaster uri"),
        r)
      );
    }
  }
  async connectFarcaster() {
    var e;
    try {
      const r = await this.appEvent({ type: N.APP_CONNECT_FARCASTER });
      return r.userName && this.setSocialLoginSuccess(r.userName), r;
    } catch (r) {
      throw (
        ((e = this.w3mLogger) == null ||
          e.logger.error({ error: r }, "Error connecting farcaster"),
        r)
      );
    }
  }
  async switchNetwork(e) {
    var r;
    try {
      const n = await this.appEvent({
        type: N.APP_SWITCH_NETWORK,
        payload: { chainId: e },
      });
      return this.setLastUsedChainId(n.chainId), n;
    } catch (n) {
      throw (
        ((r = this.w3mLogger) == null ||
          r.logger.error({ error: n }, "Error switching network"),
        n)
      );
    }
  }
  async disconnect() {
    var e;
    try {
      const r = await this.appEvent({ type: N.APP_SIGN_OUT });
      return this.deleteAuthLoginCache(), r;
    } catch (r) {
      throw (
        ((e = this.w3mLogger) == null ||
          e.logger.error({ error: r }, "Error disconnecting"),
        r)
      );
    }
  }
  async request(e) {
    var r, n, s, a;
    try {
      if (we.GET_CHAIN_ID === e.method) return this.getLastUsedChainId();
      (r = this.rpcRequestHandler) == null || r.call(this, e);
      const o = await this.appEvent({ type: N.APP_RPC_REQUEST, payload: e });
      return (n = this.rpcSuccessHandler) == null || n.call(this, o, e), o;
    } catch (o) {
      throw (
        ((s = this.rpcErrorHandler) == null || s.call(this, o, e),
        (a = this.w3mLogger) == null ||
          a.logger.error({ error: o }, "Error requesting"),
        o)
      );
    }
  }
  onRpcRequest(e) {
    this.rpcRequestHandler = e;
  }
  onRpcSuccess(e) {
    this.rpcSuccessHandler = e;
  }
  onRpcError(e) {
    this.rpcErrorHandler = e;
  }
  onIsConnected(e) {
    this.w3mFrame.events.onFrameEvent((r) => {
      r.type === N.FRAME_IS_CONNECTED_SUCCESS && r.payload.isConnected && e();
    });
  }
  onNotConnected(e) {
    this.w3mFrame.events.onFrameEvent((r) => {
      r.type === N.FRAME_IS_CONNECTED_ERROR && e(),
        r.type === N.FRAME_IS_CONNECTED_SUCCESS &&
          !r.payload.isConnected &&
          e();
    });
  }
  onConnect(e) {
    this.w3mFrame.events.onFrameEvent((r) => {
      r.type === N.FRAME_GET_USER_SUCCESS && e(r.payload);
    });
  }
  onSocialConnected(e) {
    this.w3mFrame.events.onFrameEvent((r) => {
      r.type === N.FRAME_CONNECT_SOCIAL_SUCCESS && e(r.payload);
    });
  }
  async getCapabilities() {
    try {
      return (await this.request({ method: "wallet_getCapabilities" })) || {};
    } catch {
      return {};
    }
  }
  onSetPreferredAccount(e) {
    this.w3mFrame.events.onFrameEvent((r) => {
      r.type === N.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS
        ? e(r.payload)
        : r.type === N.FRAME_SET_PREFERRED_ACCOUNT_ERROR &&
          e({ type: we.ACCOUNT_TYPES.EOA });
    });
  }
  onGetSmartAccountEnabledNetworks(e) {
    this.w3mFrame.events.onFrameEvent((r) => {
      r.type === N.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS
        ? e(r.payload.smartAccountEnabledNetworks)
        : r.type === N.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR && e([]);
    });
  }
  getAvailableChainIds() {
    return Object.keys(this.w3mFrame.networks);
  }
  rejectRpcRequests() {
    var e;
    try {
      this.openRpcRequests.forEach(({ abortController: r, method: n }) => {
        we.SAFE_RPC_METHODS.includes(n) || r.abort();
      }),
        (this.openRpcRequests = []);
    } catch (r) {
      (e = this.w3mLogger) == null ||
        e.logger.error({ error: r }, "Error aborting RPC request");
    }
  }
  async appEvent(e) {
    await this.w3mFrame.frameLoadPromise;
    let r;
    function n(i) {
      return i.replace("@w3m-app/", "");
    }
    const s = new AbortController(),
      a = n(e.type);
    return (
      [
        N.APP_CONNECT_EMAIL,
        N.APP_CONNECT_DEVICE,
        N.APP_CONNECT_OTP,
        N.APP_CONNECT_SOCIAL,
        N.APP_GET_SOCIAL_REDIRECT_URI,
      ]
        .map(n)
        .includes(a) &&
        (r = setTimeout(() => {
          var i;
          (i = this.onTimeout) == null || i.call(this), s.abort();
        }, 3e4)),
      new Promise((i, u) => {
        var f, m, p;
        const c = Math.random().toString(36).substring(7);
        if (
          ((p = (f = this.w3mLogger) == null ? void 0 : (m = f.logger).info) ==
            null || p.call(m, { event: e, id: c }, "Sending app event"),
          this.w3mFrame.events.postAppEvent({ ...e, id: c }),
          a === "RPC_REQUEST")
        ) {
          const E = e;
          this.openRpcRequests = [
            ...this.openRpcRequests,
            { ...E.payload, abortController: s },
          ];
        }
        s.signal.addEventListener("abort", () => {
          a === "RPC_REQUEST"
            ? u(new Error("Request was aborted"))
            : a !== "GET_FARCASTER_URI" && u(new Error("Something went wrong"));
        });
        function d(E, w) {
          var S, R, H;
          E.id === c &&
            ((R = w == null ? void 0 : (S = w.logger).info) == null ||
              R.call(S, { framEvent: E, id: c }, "Received frame response"),
            E.type === `@w3m-frame/${a}_SUCCESS`
              ? (r && clearTimeout(r),
                "payload" in E && i(E.payload),
                i(void 0))
              : E.type === `@w3m-frame/${a}_ERROR` &&
                (r && clearTimeout(r),
                "payload" in E &&
                  u(
                    new Error(
                      ((H = E.payload) == null ? void 0 : H.message) ||
                        "An error occurred"
                    )
                  ),
                u(new Error("An error occurred"))));
        }
        this.w3mFrame.events.registerFrameEventHandler(
          c,
          (E) => d(E, this.w3mLogger),
          s.signal
        );
      })
    );
  }
  setNewLastEmailLoginTime() {
    ye.set(N.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
  }
  setSocialLoginSuccess(e) {
    ye.set(N.SOCIAL_USERNAME, e);
  }
  setLoginSuccess(e) {
    e && ye.set(N.EMAIL, e),
      ye.set(N.EMAIL_LOGIN_USED_KEY, "true"),
      ye.delete(N.LAST_EMAIL_LOGIN_TIME);
  }
  deleteAuthLoginCache() {
    ye.delete(N.EMAIL_LOGIN_USED_KEY),
      ye.delete(N.EMAIL),
      ye.delete(N.LAST_USED_CHAIN_KEY),
      ye.delete(N.SOCIAL_USERNAME);
  }
  setLastUsedChainId(e) {
    e && ye.set(N.LAST_USED_CHAIN_KEY, String(e));
  }
  getLastUsedChainId() {
    const e = ye.get(N.LAST_USED_CHAIN_KEY) ?? void 0,
      r = Number(e);
    return isNaN(r) ? e : r;
  }
  persistSmartAccountEnabledNetworks(e) {
    ye.set(N.SMART_ACCOUNT_ENABLED_NETWORKS, e.join(","));
  }
}
class _n {
  constructor() {}
  static getInstance({
    projectId: e,
    chainId: r,
    enableLogger: n,
    onTimeout: s,
  }) {
    return (
      _n.instance ||
        (_n.instance = new ku({
          projectId: e,
          chainId: r,
          enableLogger: n,
          onTimeout: s,
        })),
      _n.instance
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const En = globalThis,
  Es =
    En.ShadowRoot &&
    (En.ShadyCSS === void 0 || En.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  ys = Symbol(),
  Ys = new WeakMap();
let La = class {
  constructor(e, r, n) {
    if (((this._$cssResult$ = !0), n !== ys))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = e), (this.t = r);
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Es && e === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (e = Ys.get(r)),
        e === void 0 &&
          ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
          n && Ys.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const $e = (t) => new La(typeof t == "string" ? t : t + "", void 0, ys),
  Vt = (t, ...e) => {
    const r =
      t.length === 1
        ? t[0]
        : e.reduce(
            (n, s, a) =>
              n +
              ((o) => {
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == "number") return o;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    o +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(s) +
              t[a + 1],
            t[0]
          );
    return new La(r, t, ys);
  },
  xu = (t, e) => {
    if (Es)
      t.adoptedStyleSheets = e.map((r) =>
        r instanceof CSSStyleSheet ? r : r.styleSheet
      );
    else
      for (const r of e) {
        const n = document.createElement("style"),
          s = En.litNonce;
        s !== void 0 && n.setAttribute("nonce", s),
          (n.textContent = r.cssText),
          t.appendChild(n);
      }
  },
  Js = Es
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((e) => {
              let r = "";
              for (const n of e.cssRules) r += n.cssText;
              return $e(r);
            })(t)
          : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const {
    is: Pu,
    defineProperty: Uu,
    getOwnPropertyDescriptor: Lu,
    getOwnPropertyNames: Mu,
    getOwnPropertySymbols: Du,
    getPrototypeOf: Bu,
  } = Object,
  pt = globalThis,
  Xs = pt.trustedTypes,
  $u = Xs ? Xs.emptyScript : "",
  Qn = pt.reactiveElementPolyfillSupport,
  pr = (t, e) => t,
  hs = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? $u : null;
          break;
        case Object:
        case Array:
          t = t == null ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let r = t;
      switch (e) {
        case Boolean:
          r = t !== null;
          break;
        case Number:
          r = t === null ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(t);
          } catch {
            r = null;
          }
      }
      return r;
    },
  },
  Ma = (t, e) => !Pu(t, e),
  Qs = {
    attribute: !0,
    type: String,
    converter: hs,
    reflect: !1,
    useDefault: !1,
    hasChanged: Ma,
  };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
  pt.litPropertyMetadata ?? (pt.litPropertyMetadata = new WeakMap());
let Ft = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Qs) {
    if (
      (r.state && (r.attribute = !1),
      this._$Ei(),
      this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0),
      this.elementProperties.set(e, r),
      !r.noAccessor)
    ) {
      const n = Symbol(),
        s = this.getPropertyDescriptor(e, n, r);
      s !== void 0 && Uu(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, r, n) {
    const { get: s, set: a } = Lu(this.prototype, e) ?? {
      get() {
        return this[r];
      },
      set(o) {
        this[r] = o;
      },
    };
    return {
      get: s,
      set(o) {
        const i = s == null ? void 0 : s.call(this);
        a == null || a.call(this, o), this.requestUpdate(e, i, n);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Qs;
  }
  static _$Ei() {
    if (this.hasOwnProperty(pr("elementProperties"))) return;
    const e = Bu(this);
    e.finalize(),
      e.l !== void 0 && (this.l = [...e.l]),
      (this.elementProperties = new Map(e.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(pr("finalized"))) return;
    if (
      ((this.finalized = !0),
      this._$Ei(),
      this.hasOwnProperty(pr("properties")))
    ) {
      const r = this.properties,
        n = [...Mu(r), ...Du(r)];
      for (const s of n) this.createProperty(s, r[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0)
        for (const [n, s] of r) this.elementProperties.set(n, s);
    }
    this._$Eh = new Map();
    for (const [r, n] of this.elementProperties) {
      const s = this._$Eu(r, n);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) r.unshift(Js(s));
    } else e !== void 0 && r.push(Js(e));
    return r;
  }
  static _$Eu(e, r) {
    const n = r.attribute;
    return n === !1
      ? void 0
      : typeof n == "string"
      ? n
      : typeof e == "string"
      ? e.toLowerCase()
      : void 0;
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    var e;
    (this._$ES = new Promise((r) => (this.enableUpdating = r))),
      (this._$AL = new Map()),
      this._$E_(),
      this.requestUpdate(),
      (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$EO ?? (this._$EO = new Set())).add(e),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$EO) == null || r.delete(e);
  }
  _$E_() {
    const e = new Map(),
      r = this.constructor.elementProperties;
    for (const n of r.keys())
      this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return xu(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (e = this._$EO) == null ||
        e.forEach((r) => {
          var n;
          return (n = r.hostConnected) == null ? void 0 : n.call(r);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null ||
      e.forEach((r) => {
        var n;
        return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
      });
  }
  attributeChangedCallback(e, r, n) {
    this._$AK(e, n);
  }
  _$ET(e, r) {
    var a;
    const n = this.constructor.elementProperties.get(e),
      s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const o = (
        ((a = n.converter) == null ? void 0 : a.toAttribute) !== void 0
          ? n.converter
          : hs
      ).toAttribute(r, n.type);
      (this._$Em = e),
        o == null ? this.removeAttribute(s) : this.setAttribute(s, o),
        (this._$Em = null);
    }
  }
  _$AK(e, r) {
    var a, o;
    const n = this.constructor,
      s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const i = n.getPropertyOptions(s),
        u =
          typeof i.converter == "function"
            ? { fromAttribute: i.converter }
            : ((a = i.converter) == null ? void 0 : a.fromAttribute) !== void 0
            ? i.converter
            : hs;
      (this._$Em = s),
        (this[s] =
          u.fromAttribute(r, i.type) ??
          ((o = this._$Ej) == null ? void 0 : o.get(s)) ??
          null),
        (this._$Em = null);
    }
  }
  requestUpdate(e, r, n) {
    var s;
    if (e !== void 0) {
      const a = this.constructor,
        o = this[e];
      if (
        (n ?? (n = a.getPropertyOptions(e)),
        !(
          (n.hasChanged ?? Ma)(o, r) ||
          (n.useDefault &&
            n.reflect &&
            o === ((s = this._$Ej) == null ? void 0 : s.get(e)) &&
            !this.hasAttribute(a._$Eu(e, n)))
        ))
      )
        return;
      this.C(e, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: n, reflect: s, wrapped: a }, o) {
    (n &&
      !(this._$Ej ?? (this._$Ej = new Map())).has(e) &&
      (this._$Ej.set(e, o ?? r ?? this[e]), a !== !0 || o !== void 0)) ||
      (this._$AL.has(e) ||
        (this.hasUpdated || n || (r = void 0), this._$AL.set(e, r)),
      s === !0 &&
        this._$Em !== e &&
        (this._$Eq ?? (this._$Eq = new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && (await e), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (
        (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
        this._$Ep)
      ) {
        for (const [a, o] of this._$Ep) this[a] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0)
        for (const [a, o] of s) {
          const { wrapped: i } = o,
            u = this[a];
          i !== !0 ||
            this._$AL.has(a) ||
            u === void 0 ||
            this.C(a, void 0, o, u);
        }
    }
    let e = !1;
    const r = this._$AL;
    try {
      (e = this.shouldUpdate(r)),
        e
          ? (this.willUpdate(r),
            (n = this._$EO) == null ||
              n.forEach((s) => {
                var a;
                return (a = s.hostUpdate) == null ? void 0 : a.call(s);
              }),
            this.update(r))
          : this._$EM();
    } catch (s) {
      throw ((e = !1), this._$EM(), s);
    }
    e && this._$AE(r);
  }
  willUpdate(e) {}
  _$AE(e) {
    var r;
    (r = this._$EO) == null ||
      r.forEach((n) => {
        var s;
        return (s = n.hostUpdated) == null ? void 0 : s.call(n);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e);
  }
  _$EM() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))),
      this._$EM();
  }
  updated(e) {}
  firstUpdated(e) {}
};
(Ft.elementStyles = []),
  (Ft.shadowRootOptions = { mode: "open" }),
  (Ft[pr("elementProperties")] = new Map()),
  (Ft[pr("finalized")] = new Map()),
  Qn == null || Qn({ ReactiveElement: Ft }),
  (pt.reactiveElementVersions ?? (pt.reactiveElementVersions = [])).push(
    "2.1.0"
  );
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const hr = globalThis,
  Un = hr.trustedTypes,
  ea = Un ? Un.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
  Da = "$lit$",
  dt = `lit$${Math.random().toFixed(9).slice(2)}$`,
  Ba = "?" + dt,
  ju = `<${Ba}>`,
  kt = document,
  Xr = () => kt.createComment(""),
  Qr = (t) => t === null || (typeof t != "object" && typeof t != "function"),
  bs = Array.isArray,
  Fu = (t) =>
    bs(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function",
  es = `[ 	
\f\r]`,
  cr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  ta = /-->/g,
  ra = />/g,
  yt = RegExp(
    `>|${es}(?:([^\\s"'>=/]+)(${es}*=${es}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  na = /'/g,
  sa = /"/g,
  $a = /^(?:script|style|textarea|title)$/i,
  ja =
    (t) =>
    (e, ...r) => ({ _$litType$: t, strings: e, values: r }),
  hd = ja(1),
  md = ja(2),
  tr = Symbol.for("lit-noChange"),
  _e = Symbol.for("lit-nothing"),
  aa = new WeakMap(),
  vt = kt.createTreeWalker(kt, 129);
function Fa(t, e) {
  if (!bs(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return ea !== void 0 ? ea.createHTML(e) : e;
}
const Wu = (t, e) => {
  const r = t.length - 1,
    n = [];
  let s,
    a = e === 2 ? "<svg>" : e === 3 ? "<math>" : "",
    o = cr;
  for (let i = 0; i < r; i++) {
    const u = t[i];
    let c,
      d,
      f = -1,
      m = 0;
    for (; m < u.length && ((o.lastIndex = m), (d = o.exec(u)), d !== null); )
      (m = o.lastIndex),
        o === cr
          ? d[1] === "!--"
            ? (o = ta)
            : d[1] !== void 0
            ? (o = ra)
            : d[2] !== void 0
            ? ($a.test(d[2]) && (s = RegExp("</" + d[2], "g")), (o = yt))
            : d[3] !== void 0 && (o = yt)
          : o === yt
          ? d[0] === ">"
            ? ((o = s ?? cr), (f = -1))
            : d[1] === void 0
            ? (f = -2)
            : ((f = o.lastIndex - d[2].length),
              (c = d[1]),
              (o = d[3] === void 0 ? yt : d[3] === '"' ? sa : na))
          : o === sa || o === na
          ? (o = yt)
          : o === ta || o === ra
          ? (o = cr)
          : ((o = yt), (s = void 0));
    const p = o === yt && t[i + 1].startsWith("/>") ? " " : "";
    a +=
      o === cr
        ? u + ju
        : f >= 0
        ? (n.push(c), u.slice(0, f) + Da + u.slice(f) + dt + p)
        : u + dt + (f === -2 ? i : p);
  }
  return [
    Fa(
      t,
      a + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")
    ),
    n,
  ];
};
class en {
  constructor({ strings: e, _$litType$: r }, n) {
    let s;
    this.parts = [];
    let a = 0,
      o = 0;
    const i = e.length - 1,
      u = this.parts,
      [c, d] = Wu(e, r);
    if (
      ((this.el = en.createElement(c, n)),
      (vt.currentNode = this.el.content),
      r === 2 || r === 3)
    ) {
      const f = this.el.content.firstChild;
      f.replaceWith(...f.childNodes);
    }
    for (; (s = vt.nextNode()) !== null && u.length < i; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes())
          for (const f of s.getAttributeNames())
            if (f.endsWith(Da)) {
              const m = d[o++],
                p = s.getAttribute(f).split(dt),
                E = /([.?@])?(.*)/.exec(m);
              u.push({
                type: 1,
                index: a,
                name: E[2],
                strings: p,
                ctor:
                  E[1] === "."
                    ? zu
                    : E[1] === "?"
                    ? qu
                    : E[1] === "@"
                    ? Vu
                    : jn,
              }),
                s.removeAttribute(f);
            } else
              f.startsWith(dt) &&
                (u.push({ type: 6, index: a }), s.removeAttribute(f));
        if ($a.test(s.tagName)) {
          const f = s.textContent.split(dt),
            m = f.length - 1;
          if (m > 0) {
            s.textContent = Un ? Un.emptyScript : "";
            for (let p = 0; p < m; p++)
              s.append(f[p], Xr()),
                vt.nextNode(),
                u.push({ type: 2, index: ++a });
            s.append(f[m], Xr());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === Ba) u.push({ type: 2, index: a });
        else {
          let f = -1;
          for (; (f = s.data.indexOf(dt, f + 1)) !== -1; )
            u.push({ type: 7, index: a }), (f += dt.length - 1);
        }
      a++;
    }
  }
  static createElement(e, r) {
    const n = kt.createElement("template");
    return (n.innerHTML = e), n;
  }
}
function rr(t, e, r = t, n) {
  var o, i;
  if (e === tr) return e;
  let s = n !== void 0 ? ((o = r._$Co) == null ? void 0 : o[n]) : r._$Cl;
  const a = Qr(e) ? void 0 : e._$litDirective$;
  return (
    (s == null ? void 0 : s.constructor) !== a &&
      ((i = s == null ? void 0 : s._$AO) == null || i.call(s, !1),
      a === void 0 ? (s = void 0) : ((s = new a(t)), s._$AT(t, r, n)),
      n !== void 0 ? ((r._$Co ?? (r._$Co = []))[n] = s) : (r._$Cl = s)),
    s !== void 0 && (e = rr(t, s._$AS(t, e.values), s, n)),
    e
  );
}
class Hu {
  constructor(e, r) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = r);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const {
        el: { content: r },
        parts: n,
      } = this._$AD,
      s = ((e == null ? void 0 : e.creationScope) ?? kt).importNode(r, !0);
    vt.currentNode = s;
    let a = vt.nextNode(),
      o = 0,
      i = 0,
      u = n[0];
    for (; u !== void 0; ) {
      if (o === u.index) {
        let c;
        u.type === 2
          ? (c = new sn(a, a.nextSibling, this, e))
          : u.type === 1
          ? (c = new u.ctor(a, u.name, u.strings, this, e))
          : u.type === 6 && (c = new Gu(a, this, e)),
          this._$AV.push(c),
          (u = n[++i]);
      }
      o !== (u == null ? void 0 : u.index) && ((a = vt.nextNode()), o++);
    }
    return (vt.currentNode = kt), s;
  }
  p(e) {
    let r = 0;
    for (const n of this._$AV)
      n !== void 0 &&
        (n.strings !== void 0
          ? (n._$AI(e, n, r), (r += n.strings.length - 2))
          : n._$AI(e[r])),
        r++;
  }
}
class sn {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, n, s) {
    (this.type = 2),
      (this._$AH = _e),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = r),
      (this._$AM = n),
      (this.options = s),
      (this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0);
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return (
      r !== void 0 &&
        (e == null ? void 0 : e.nodeType) === 11 &&
        (e = r.parentNode),
      e
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    (e = rr(this, e, r)),
      Qr(e)
        ? e === _e || e == null || e === ""
          ? (this._$AH !== _e && this._$AR(), (this._$AH = _e))
          : e !== this._$AH && e !== tr && this._(e)
        : e._$litType$ !== void 0
        ? this.$(e)
        : e.nodeType !== void 0
        ? this.T(e)
        : Fu(e)
        ? this.k(e)
        : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
  }
  _(e) {
    this._$AH !== _e && Qr(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.T(kt.createTextNode(e)),
      (this._$AH = e);
  }
  $(e) {
    var a;
    const { values: r, _$litType$: n } = e,
      s =
        typeof n == "number"
          ? this._$AC(e)
          : (n.el === void 0 &&
              (n.el = en.createElement(Fa(n.h, n.h[0]), this.options)),
            n);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === s) this._$AH.p(r);
    else {
      const o = new Hu(s, this),
        i = o.u(this.options);
      o.p(r), this.T(i), (this._$AH = o);
    }
  }
  _$AC(e) {
    let r = aa.get(e.strings);
    return r === void 0 && aa.set(e.strings, (r = new en(e))), r;
  }
  k(e) {
    bs(this._$AH) || ((this._$AH = []), this._$AR());
    const r = this._$AH;
    let n,
      s = 0;
    for (const a of e)
      s === r.length
        ? r.push((n = new sn(this.O(Xr()), this.O(Xr()), this, this.options)))
        : (n = r[s]),
        n._$AI(a),
        s++;
    s < r.length && (this._$AR(n && n._$AB.nextSibling, s), (r.length = s));
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var n;
    for (
      (n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r);
      e && e !== this._$AB;

    ) {
      const s = e.nextSibling;
      e.remove(), (e = s);
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 &&
      ((this._$Cv = e), (r = this._$AP) == null || r.call(this, e));
  }
}
class jn {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, n, s, a) {
    (this.type = 1),
      (this._$AH = _e),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = r),
      (this._$AM = s),
      (this.options = a),
      n.length > 2 || n[0] !== "" || n[1] !== ""
        ? ((this._$AH = Array(n.length - 1).fill(new String())),
          (this.strings = n))
        : (this._$AH = _e);
  }
  _$AI(e, r = this, n, s) {
    const a = this.strings;
    let o = !1;
    if (a === void 0)
      (e = rr(this, e, r, 0)),
        (o = !Qr(e) || (e !== this._$AH && e !== tr)),
        o && (this._$AH = e);
    else {
      const i = e;
      let u, c;
      for (e = a[0], u = 0; u < a.length - 1; u++)
        (c = rr(this, i[n + u], r, u)),
          c === tr && (c = this._$AH[u]),
          o || (o = !Qr(c) || c !== this._$AH[u]),
          c === _e ? (e = _e) : e !== _e && (e += (c ?? "") + a[u + 1]),
          (this._$AH[u] = c);
    }
    o && !s && this.j(e);
  }
  j(e) {
    e === _e
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, e ?? "");
  }
}
class zu extends jn {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(e) {
    this.element[this.name] = e === _e ? void 0 : e;
  }
}
class qu extends jn {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _e);
  }
}
class Vu extends jn {
  constructor(e, r, n, s, a) {
    super(e, r, n, s, a), (this.type = 5);
  }
  _$AI(e, r = this) {
    if ((e = rr(this, e, r, 0) ?? _e) === tr) return;
    const n = this._$AH,
      s =
        (e === _e && n !== _e) ||
        e.capture !== n.capture ||
        e.once !== n.once ||
        e.passive !== n.passive,
      a = e !== _e && (n === _e || s);
    s && this.element.removeEventListener(this.name, this, n),
      a && this.element.addEventListener(this.name, this, e),
      (this._$AH = e);
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function"
      ? this._$AH.call(
          ((r = this.options) == null ? void 0 : r.host) ?? this.element,
          e
        )
      : this._$AH.handleEvent(e);
  }
}
class Gu {
  constructor(e, r, n) {
    (this.element = e),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = r),
      (this.options = n);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    rr(this, e);
  }
}
const ts = hr.litHtmlPolyfillSupport;
ts == null || ts(en, sn),
  (hr.litHtmlVersions ?? (hr.litHtmlVersions = [])).push("3.3.0");
const Zu = (t, e, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const a = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = s = new sn(e.insertBefore(Xr(), a), a, void 0, r ?? {});
  }
  return s._$AI(t), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Nt = globalThis;
class yn extends Ft {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (
      (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild),
      e
    );
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this._$Do = Zu(r, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return tr;
  }
}
var oa;
(yn._$litElement$ = !0),
  (yn.finalized = !0),
  (oa = Nt.litElementHydrateSupport) == null || oa.call(Nt, { LitElement: yn });
const rs = Nt.litElementPolyfillSupport;
rs == null || rs({ LitElement: yn });
(Nt.litElementVersions ?? (Nt.litElementVersions = [])).push("4.2.0");
let mr, ht, mt;
function gd(t, e) {
  (mr = document.createElement("style")),
    (ht = document.createElement("style")),
    (mt = document.createElement("style")),
    (mr.textContent = Gt(t).core.cssText),
    (ht.textContent = Gt(t).dark.cssText),
    (mt.textContent = Gt(t).light.cssText),
    document.head.appendChild(mr),
    document.head.appendChild(ht),
    document.head.appendChild(mt),
    Ku(e);
}
function Ku(t) {
  ht &&
    mt &&
    (t === "light"
      ? (ht.removeAttribute("media"), (mt.media = "enabled"))
      : (mt.removeAttribute("media"), (ht.media = "enabled")));
}
function wd(t) {
  mr &&
    ht &&
    mt &&
    ((mr.textContent = Gt(t).core.cssText),
    (ht.textContent = Gt(t).dark.cssText),
    (mt.textContent = Gt(t).light.cssText));
}
function Gt(t) {
  return {
    core: Vt`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${$e(
          t != null && t["--w3m-color-mix-strength"]
            ? `${t["--w3m-color-mix-strength"]}%`
            : "0%"
        )};
        --w3m-font-family: ${$e(
          (t == null ? void 0 : t["--w3m-font-family"]) ||
            "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;"
        )};
        --w3m-font-size-master: ${$e(
          (t == null ? void 0 : t["--w3m-font-size-master"]) || "10px"
        )};
        --w3m-border-radius-master: ${$e(
          (t == null ? void 0 : t["--w3m-border-radius-master"]) || "4px"
        )};
        --w3m-z-index: ${$e((t == null ? void 0 : t["--w3m-z-index"]) || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
    light: Vt`
      :root {
        --w3m-color-mix: ${$e(
          (t == null ? void 0 : t["--w3m-color-mix"]) || "#fff"
        )};
        --w3m-accent: ${$e(ft(t, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${$e(ft(t, "dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
    dark: Vt`
      :root {
        --w3m-color-mix: ${$e(
          (t == null ? void 0 : t["--w3m-color-mix"]) || "#000"
        )};
        --w3m-accent: ${$e(ft(t, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${$e(ft(t, "light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `,
  };
}
const _d = Vt`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,
  Ed = Vt`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,
  yd = Vt`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,
  Yu = {
    solana: [
      "solana_signMessage",
      "solana_signTransaction",
      "solana_requestAccounts",
      "solana_getAccounts",
      "solana_signAllTransactions",
      "solana_signAndSendTransaction",
    ],
    eip155: [
      "eth_accounts",
      "eth_requestAccounts",
      "eth_sendRawTransaction",
      "eth_sign",
      "eth_signTransaction",
      "eth_signTypedData",
      "eth_signTypedData_v3",
      "eth_signTypedData_v4",
      "eth_sendTransaction",
      "personal_sign",
      "wallet_switchEthereumChain",
      "wallet_addEthereumChain",
      "wallet_getPermissions",
      "wallet_requestPermissions",
      "wallet_registerOnboarding",
      "wallet_watchAsset",
      "wallet_scanQRCode",
      "wallet_getCallsStatus",
      "wallet_showCallsStatus",
      "wallet_sendCalls",
      "wallet_getCapabilities",
      "wallet_grantPermissions",
      "wallet_revokePermissions",
      "wallet_getAssets",
    ],
    bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"],
  },
  Ju = {
    getMethodsByChainNamespace(t) {
      return Yu[t] || [];
    },
    createDefaultNamespace(t) {
      return {
        methods: this.getMethodsByChainNamespace(t),
        events: ["accountsChanged", "chainChanged"],
        chains: [],
        rpcMap: {},
      };
    },
    applyNamespaceOverrides(t, e) {
      if (!e) return { ...t };
      const r = { ...t },
        n = new Set();
      if (
        (e.methods && Object.keys(e.methods).forEach((s) => n.add(s)),
        e.chains && Object.keys(e.chains).forEach((s) => n.add(s)),
        e.events && Object.keys(e.events).forEach((s) => n.add(s)),
        e.rpcMap &&
          Object.keys(e.rpcMap).forEach((s) => {
            const [a] = s.split(":");
            a && n.add(a);
          }),
        n.forEach((s) => {
          r[s] || (r[s] = this.createDefaultNamespace(s));
        }),
        e.methods &&
          Object.entries(e.methods).forEach(([s, a]) => {
            r[s] && (r[s].methods = a);
          }),
        e.chains &&
          Object.entries(e.chains).forEach(([s, a]) => {
            r[s] && (r[s].chains = a);
          }),
        e.events &&
          Object.entries(e.events).forEach(([s, a]) => {
            r[s] && (r[s].events = a);
          }),
        e.rpcMap)
      ) {
        const s = new Set();
        Object.entries(e.rpcMap).forEach(([a, o]) => {
          const [i, u] = a.split(":");
          !i ||
            !u ||
            !r[i] ||
            (r[i].rpcMap || (r[i].rpcMap = {}),
            s.has(i) || ((r[i].rpcMap = {}), s.add(i)),
            (r[i].rpcMap[u] = o));
        });
      }
      return r;
    },
    createNamespaces(t, e) {
      const r = t.reduce((n, s) => {
        const { id: a, chainNamespace: o, rpcUrls: i } = s,
          u = i.default.http[0];
        n[o] || (n[o] = this.createDefaultNamespace(o));
        const c = `${o}:${a}`,
          d = n[o];
        switch ((d.chains.push(c), c)) {
          case As.caipNetworkId:
            d.chains.push(As.deprecatedCaipNetworkId);
            break;
          case vs.caipNetworkId:
            d.chains.push(vs.deprecatedCaipNetworkId);
            break;
        }
        return d != null && d.rpcMap && u && (d.rpcMap[a] = u), n;
      }, {});
      return this.applyNamespaceOverrides(r, e);
    },
    resolveReownName: async (t) => {
      var n;
      const e = await cc.resolveName(t);
      return (
        ((n = (Object.values(e == null ? void 0 : e.addresses) || [])[0]) ==
        null
          ? void 0
          : n.address) || !1
      );
    },
    getChainsFromNamespaces(t = {}) {
      return Object.values(t).flatMap((e) => {
        const r = e.chains || [],
          n = e.accounts.map((s) => {
            const [a, o] = s.split(":");
            return `${a}:${o}`;
          });
        return Array.from(new Set([...r, ...n]));
      });
    },
    isSessionEventData(t) {
      return (
        typeof t == "object" &&
        t !== null &&
        "id" in t &&
        "topic" in t &&
        "params" in t &&
        typeof t.params == "object" &&
        t.params !== null &&
        "chainId" in t.params &&
        "event" in t.params &&
        typeof t.params.event == "object" &&
        t.params.event !== null
      );
    },
  };
class Xu {
  constructor({ provider: e, namespace: r }) {
    (this.id = P.CONNECTOR_ID.WALLET_CONNECT),
      (this.name = An.ConnectorNamesMap[P.CONNECTOR_ID.WALLET_CONNECT]),
      (this.type = "WALLET_CONNECT"),
      (this.imageId = An.ConnectorImageIds[P.CONNECTOR_ID.WALLET_CONNECT]),
      (this.getCaipNetworks = g.getCaipNetworks.bind(g)),
      (this.caipNetworks = this.getCaipNetworks()),
      (this.provider = e),
      (this.chain = r);
  }
  get chains() {
    return this.getCaipNetworks();
  }
  async connectWalletConnect() {
    if (!(await this.authenticate())) {
      const r = this.getCaipNetworks(),
        n = J.state.universalProviderConfigOverride,
        s = Ju.createNamespaces(r, n);
      await this.provider.connect({ optionalNamespaces: s });
    }
    return {
      clientId: await this.provider.client.core.crypto.getClientId(),
      session: this.provider.session,
    };
  }
  async disconnect() {
    await this.provider.disconnect();
  }
  async authenticate() {
    const e = this.chains.map((r) => r.caipNetworkId);
    return dr.universalProviderAuthenticate({
      universalProvider: this.provider,
      chains: e,
      methods: Qu,
    });
  }
}
const Qu = [
  "eth_accounts",
  "eth_requestAccounts",
  "eth_sendRawTransaction",
  "eth_sign",
  "eth_signTransaction",
  "eth_signTypedData",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "eth_sendTransaction",
  "personal_sign",
  "wallet_switchEthereumChain",
  "wallet_addEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode",
  "wallet_getCallsStatus",
  "wallet_sendCalls",
  "wallet_getCapabilities",
  "wallet_grantPermissions",
  "wallet_revokePermissions",
  "wallet_getAssets",
];
class bd {
  constructor(e) {
    (this.availableConnectors = []),
      (this.eventListeners = new Map()),
      (this.getCaipNetworks = (r) => g.getCaipNetworks(r)),
      e && this.construct(e);
  }
  construct(e) {
    (this.projectId = e.projectId),
      (this.namespace = e.namespace),
      (this.adapterType = e.adapterType);
  }
  get connectors() {
    return this.availableConnectors;
  }
  get networks() {
    return this.getCaipNetworks(this.namespace);
  }
  setAuthProvider(e) {
    this.addConnector({
      id: P.CONNECTOR_ID.AUTH,
      type: "AUTH",
      name: P.CONNECTOR_NAMES.AUTH,
      provider: e,
      imageId: An.ConnectorImageIds[P.CONNECTOR_ID.AUTH],
      chain: this.namespace,
      chains: [],
    });
  }
  addConnector(...e) {
    const r = new Set();
    (this.availableConnectors = [...e, ...this.availableConnectors].filter(
      (n) => (r.has(n.id) ? !1 : (r.add(n.id), !0))
    )),
      this.emit("connectors", this.availableConnectors);
  }
  setStatus(e, r) {
    ce.setStatus(e, r);
  }
  on(e, r) {
    var n;
    this.eventListeners.has(e) || this.eventListeners.set(e, new Set()),
      (n = this.eventListeners.get(e)) == null || n.add(r);
  }
  off(e, r) {
    const n = this.eventListeners.get(e);
    n && n.delete(r);
  }
  removeAllEventListeners() {
    this.eventListeners.forEach((e) => {
      e.clear();
    });
  }
  emit(e, r) {
    const n = this.eventListeners.get(e);
    n && n.forEach((s) => s(r));
  }
  async connectWalletConnect(e) {
    return {
      clientId: (await this.getWalletConnectConnector().connectWalletConnect())
        .clientId,
    };
  }
  async switchNetwork(e) {
    var a;
    const { caipNetwork: r, providerType: n } = e;
    if (!e.provider) return;
    const s = "provider" in e.provider ? e.provider.provider : e.provider;
    if (n === "WALLET_CONNECT") {
      s.setDefaultChain(r.caipNetworkId);
      return;
    }
    if (s && n === "AUTH") {
      const o = s,
        i =
          (a = ce.state.preferredAccountTypes) == null
            ? void 0
            : a[r.chainNamespace];
      await o.switchNetwork(r.caipNetworkId);
      const u = await o.getUser({
        chainId: r.caipNetworkId,
        preferredAccountType: i,
      });
      this.emit("switchNetwork", u);
    }
  }
  getWalletConnectConnector() {
    const e = this.connectors.find((r) => r instanceof Xu);
    if (!e) throw new Error("WalletConnectConnector not found");
    return e;
  }
}
export {
  Zi as $,
  fi as A,
  U as B,
  Fe as C,
  _o as D,
  li as E,
  dd as F,
  dc as G,
  Qa as H,
  Ju as I,
  Ku as J,
  wd as K,
  Se as L,
  Ne as M,
  nd as N,
  ya as O,
  zt as P,
  Ze as Q,
  fe as R,
  L as S,
  Wt as T,
  we as U,
  ft as V,
  Xu as W,
  _n as X,
  Yu as Y,
  Yt as Z,
  va as _,
  ks as a,
  Aa as a0,
  Ki as a1,
  Ta as a2,
  Gi as a3,
  Ji as a4,
  xr as a5,
  Tt as a6,
  nc as a7,
  Sr as a8,
  gs as a9,
  An as aa,
  Vt as ab,
  yn as ac,
  hd as ad,
  _d as ae,
  Ed as af,
  on as ag,
  Ws as ah,
  Fs as ai,
  td as aj,
  rd as ak,
  zi as al,
  We as am,
  yd as an,
  md as ao,
  dr as ap,
  _e as aq,
  Ge as ar,
  gd as as,
  Ma as at,
  hs as au,
  tr as av,
  fr as aw,
  ld as b,
  mi as c,
  Pe as d,
  Po as e,
  Ue as f,
  Xa as g,
  V as h,
  J as i,
  be as j,
  si as k,
  X as l,
  g as m,
  P as n,
  ud as o,
  me as p,
  ve as q,
  Zt as r,
  sd as s,
  bd as t,
  je as u,
  ce as v,
  cc as w,
  go as x,
  ii as y,
  he as z,
};
