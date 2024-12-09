import {s as _, c as f, a as p, u as d, g as m, b as h} from "../Index/classMain.js";
import {S as g, i as $, s as v, e as y, c as b, h as q, a as j, g as C, d as u, b as L, f as S, j as T, t as k, k as H} from "../Index/index.main.js";
function M(r) {
    let l, t, o = "", i, a;
    const c = r[1].default
      , s = f(c, r, r[0], null);
    return {
        c() {
            s && s.c(),
            l = v(),
            t = y("script"),
            t.innerHTML = o,
            this.h()
        },
        l(e) {
            s && s.l(e),
            l = b(e);
            const n = q("svelte-gw3qbj", document.head);
            t = j(n, "SCRIPT", {
                src: !0,
                "data-svelte-h": !0
            }),
            C(t) !== "svelte-1ellqpp" && (t.innerHTML = o),
            n.forEach(u),
            this.h()
        },
        h() {
            t.async = !0,
            t.defer = !0,
            p(t.src, i = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/tgs-player.js") || L(t, "src", i)
        },
        m(e, n) {
            s && s.m(e, n),
            S(e, l, n),
            T(document.head, t),
            a = !0
        },
        p(e, [n]) {
            s && s.p && (!a || n & 1) && d(s, c, e, e[0], a ? h(c, e[0], n, null) : m(e[0]), null)
        },
        i(e) {
            a || (k(s, e),
            a = !0)
        },
        o(e) {
            H(s, e),
            a = !1
        },
        d(e) {
            e && u(l),
            s && s.d(e),
            u(t)
        }
    }
}
function w(r, l, t) {
    let {$$slots: o={}, $$scope: i} = l;
    return r.$$set = a => {
        "$$scope"in a && t(0, i = a.$$scope)
    }
    ,
    [i, o]
}
class P extends g {
    constructor(l) {
        super(),
        $(this, l, w, M, _, {})
    }
}
export {P as component};
