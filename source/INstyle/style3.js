import {s as A, n as j, d as H, o as M} from "../Index/classMain.js";
import {S as N, i as z, e as h, l as w, s as q, a as p, m as C, n as D, d as b, c as G, g as P, b as d, f as B, j as r, o as k} from "../Index/index.main.js";
import {s as F} from "../Index/entry.overscript.js";
import {s as J} from "../Index/index.second.js";
const K = () => {
    const e = F;
    return {
        page: {
            subscribe: e.page.subscribe
        },
        navigating: {
            subscribe: e.navigating.subscribe
        },
        updated: e.updated
    }
}
  , L = {
    subscribe(e) {
        return K().page.subscribe(e)
    }
};
function O(e) {
    var V;
    let s, o, t, a, m = e[0].status + "", g, E, v = ((V = e[0].error) == null ? void 0 : V.message) + "", _, y, i, I = "@div", $, n, S = "@div";
    return {
        c() {
            s = h("div"),
            o = h("div"),
            t = h("div"),
            a = h("h1"),
            g = w(m),
            E = w(": "),
            _ = w(v),
            y = q(),
            i = h("p"),
            i.textContent = I,
            $ = q(),
            n = h("a"),
            n.textContent = S,
            this.h()
        },
        l(l) {
            s = p(l, "DIV", {
                class: !0
            });
            var c = C(s);
            o = p(c, "DIV", {
                class: !0
            });
            var f = C(o);
            t = p(f, "DIV", {
                class: !0
            });
            var u = C(t);
            a = p(u, "H1", {
                class: !0
            });
            var x = C(a);
            g = D(x, m),
            E = D(x, ": "),
            _ = D(x, v),
            x.forEach(b),
            y = G(u),
            i = p(u, "P", {
                class: !0,
                "data-svelte-h": !0
            }),
            P(i) !== "svelte-r5q315" && (i.textContent = I),
            $ = G(u),
            n = p(u, "A", {
                class: !0,
                href: !0,
                "data-svelte-h": !0
            }),
            P(n) !== "svelte-1h7jy8m" && (n.textContent = S),
            u.forEach(b),
            f.forEach(b),
            c.forEach(b),
            this.h()
        },
        h() {
            d(a, "class", "glitch text-5xl font-bold"),
            d(i, "class", "py-6"),
            d(n, "class", "btn btn-info"),
            d(n, "href", "/"),
            d(t, "class", "max-w-md"),
            d(o, "class", "hero-content text-center"),
            d(s, "class", "hero min-h-screen bg-base-200")
        },
        m(l, c) {
            B(l, s, c),
            r(s, o),
            r(o, t),
            r(t, a),
            r(a, g),
            r(a, E),
            r(a, _),
            r(t, y),
            r(t, i),
            r(t, $),
            r(t, n)
        },
        p(l, [c]) {
            var f;
            c & 1 && m !== (m = l[0].status + "") && k(g, m),
            c & 1 && v !== (v = ((f = l[0].error) == null ? void 0 : f.message) + "") && k(_, v)
        },
        i: j,
        o: j,
        d(l) {
            l && b(s)
        }
    }
}
function Q(e, s, o) {
    let t;
    return H(e, L, a => o(0, t = a)),
    M(async () => {
        J.PowerGlitch.glitch(".glitch")
    }
    ),
    [t]
}
let X = class extends N {
    constructor(s) {
        super(),
        z(this, s, Q, O, A, {})
    }
}
;
export {X as component};
