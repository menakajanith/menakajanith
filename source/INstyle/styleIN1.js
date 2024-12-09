import {s as ve, n as ie, y as Ls, a as mt, o as yt, r as Rs} from "../Index/classMain.js";
import {S as be, i as ye, p as Y, h as As, d as T, j as N, f as D, e as $, a as O, b as S, A as le, s as R, c as j, B as Je, C as We, m as W, D as qe, E as Re, l as ne, g as re, n as ae, F as Le, r as js, o as Ue, w as Se, x as Ee, y as _e, t as Te, k as xe, z as Me} from "../Index/index.main.js";
import {s as Xs} from "../Index/index.second.js";
function ee(r) {
    return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r)
}
function Is(r, e) {
    const i = {}
      , t = {}
      , s = {
        $$scope: 1
    };
    let n = r.length;
    for (; n--; ) {
        const a = r[n]
          , d = e[n];
        if (d) {
            for (const l in a)
                l in d || (t[l] = 1);
            for (const l in d)
                s[l] || (i[l] = d[l],
                s[l] = 1);
            r[n] = d
        } else
            for (const l in a)
                s[l] = 1
    }
    for (const a in t)
        a in i || (i[a] = void 0);
    return i
}
function Ct(r, e, i) {
    const t = r.slice();
    return t[16] = e[i],
    t
}
function Pt(r, e, i) {
    const t = r.slice();
    return t[16] = e[i],
    t
}
function Lt(r, e, i) {
    const t = r.slice();
    return t[21] = e[i],
    t
}
function At(r, e, i) {
    const t = r.slice();
    return t[24] = e[i],
    t
}
function It(r, e, i) {
    const t = r.slice();
    return t[27] = e[i],
    t
}
function zt(r, e, i) {
    const t = r.slice();
    return t[16] = e[i],
    t
}
function Dt(r, e, i) {
    const t = r.slice();
    return t[41] = e[i],
    t
}
function $t(r, e, i) {
    const t = r.slice();
    return t[44] = e[i],
    t
}
function Ot(r, e, i) {
    const t = r.slice();
    return t[47] = e[i],
    t
}
function Nt(r, e, i) {
    const t = r.slice();
    return t[16] = e[i],
    t
}
function Ht(r, e, i) {
    const t = r.slice();
    return t[32] = e[i],
    t
}
function Bt(r, e, i) {
    const t = r.slice();
    return t[16] = e[i],
    t
}
function Vt(r, e, i) {
    const t = r.slice();
    return t[32] = e[i],
    t
}
function Gt(r, e, i) {
    const t = r.slice();
    return t[50] = e[i],
    t
}
function Rt(r) {
    return document.title = r[12],
    {
        c: ie,
        l: ie,
        m: ie,
        d: ie
    }
}
function jt(r) {
    let e, i = r[12] && Rt(r);
    return {
        c() {
            i && i.c(),
            e = Y()
        },
        l(t) {
            i && i.l(t),
            e = Y()
        },
        m(t, s) {
            i && i.m(t, s),
            D(t, e, s)
        },
        p(t, s) {
            t[12] ? i || (i = Rt(t),
            i.c(),
            i.m(e.parentNode, e)) : i && (i.d(1),
            i = null)
        },
        d(t) {
            t && T(e),
            i && i.d(t)
        }
    }
}
function Xt(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "robots"),
            S(e, "content", i = "" + (r[0] + r[11]))
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 2049 && i !== (i = "" + (t[0] + t[11])) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ft(r) {
    let e;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(i) {
            e = O(i, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "description"),
            S(e, "content", r[1])
        },
        m(i, t) {
            D(i, e, t)
        },
        p(i, t) {
            t[0] & 2 && S(e, "content", i[1])
        },
        d(i) {
            i && T(e)
        }
    }
}
function Yt(r) {
    let e;
    return {
        c() {
            e = $("link"),
            this.h()
        },
        l(i) {
            e = O(i, "LINK", {
                rel: !0,
                href: !0
            }),
            this.h()
        },
        h() {
            S(e, "rel", "canonical"),
            S(e, "href", r[7])
        },
        m(i, t) {
            D(i, e, t)
        },
        p(i, t) {
            t[0] & 128 && S(e, "href", i[7])
        },
        d(i) {
            i && T(e)
        }
    }
}
function Wt(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "keywords"),
            S(e, "content", i = r[8].join(", "))
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 256 && i !== (i = t[8].join(", ")) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function qt(r) {
    let e, i, t;
    return {
        c() {
            e = $("link"),
            this.h()
        },
        l(s) {
            e = O(s, "LINK", {
                rel: !0,
                media: !0,
                href: !0
            }),
            this.h()
        },
        h() {
            S(e, "rel", "alternate"),
            S(e, "media", i = r[2].media),
            S(e, "href", t = r[2].href)
        },
        m(s, n) {
            D(s, e, n)
        },
        p(s, n) {
            n[0] & 4 && i !== (i = s[2].media) && S(e, "media", i),
            n[0] & 4 && t !== (t = s[2].href) && S(e, "href", t)
        },
        d(s) {
            s && T(e)
        }
    }
}
function Ut(r) {
    let e, i = ee(r[3]), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = Zt(Gt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 8) {
                i = ee(s[3]);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Gt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = Zt(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function Zt(r) {
    let e, i, t;
    return {
        c() {
            e = $("link"),
            this.h()
        },
        l(s) {
            e = O(s, "LINK", {
                rel: !0,
                hreflang: !0,
                href: !0
            }),
            this.h()
        },
        h() {
            S(e, "rel", "alternate"),
            S(e, "hreflang", i = r[50].hrefLang),
            S(e, "href", t = r[50].href)
        },
        m(s, n) {
            D(s, e, n)
        },
        p(s, n) {
            n[0] & 8 && i !== (i = s[50].hrefLang) && S(e, "hreflang", i),
            n[0] & 8 && t !== (t = s[50].href) && S(e, "href", t)
        },
        d(s) {
            s && T(e)
        }
    }
}
function Kt(r) {
    let e, i, t, s, n, a, d, l = r[4].cardType && Jt(r), f = r[4].site && Qt(r), o = r[4].handle && ei(r), p = r[4].title && ti(r), c = r[4].description && ii(r), u = r[4].image && si(r), m = r[4].imageAlt && ri(r);
    return {
        c() {
            l && l.c(),
            e = R(),
            f && f.c(),
            i = R(),
            o && o.c(),
            t = R(),
            p && p.c(),
            s = R(),
            c && c.c(),
            n = R(),
            u && u.c(),
            a = R(),
            m && m.c(),
            d = Y()
        },
        l(v) {
            l && l.l(v),
            e = j(v),
            f && f.l(v),
            i = j(v),
            o && o.l(v),
            t = j(v),
            p && p.l(v),
            s = j(v),
            c && c.l(v),
            n = j(v),
            u && u.l(v),
            a = j(v),
            m && m.l(v),
            d = Y()
        },
        m(v, w) {
            l && l.m(v, w),
            D(v, e, w),
            f && f.m(v, w),
            D(v, i, w),
            o && o.m(v, w),
            D(v, t, w),
            p && p.m(v, w),
            D(v, s, w),
            c && c.m(v, w),
            D(v, n, w),
            u && u.m(v, w),
            D(v, a, w),
            m && m.m(v, w),
            D(v, d, w)
        },
        p(v, w) {
            v[4].cardType ? l ? l.p(v, w) : (l = Jt(v),
            l.c(),
            l.m(e.parentNode, e)) : l && (l.d(1),
            l = null),
            v[4].site ? f ? f.p(v, w) : (f = Qt(v),
            f.c(),
            f.m(i.parentNode, i)) : f && (f.d(1),
            f = null),
            v[4].handle ? o ? o.p(v, w) : (o = ei(v),
            o.c(),
            o.m(t.parentNode, t)) : o && (o.d(1),
            o = null),
            v[4].title ? p ? p.p(v, w) : (p = ti(v),
            p.c(),
            p.m(s.parentNode, s)) : p && (p.d(1),
            p = null),
            v[4].description ? c ? c.p(v, w) : (c = ii(v),
            c.c(),
            c.m(n.parentNode, n)) : c && (c.d(1),
            c = null),
            v[4].image ? u ? u.p(v, w) : (u = si(v),
            u.c(),
            u.m(a.parentNode, a)) : u && (u.d(1),
            u = null),
            v[4].imageAlt ? m ? m.p(v, w) : (m = ri(v),
            m.c(),
            m.m(d.parentNode, d)) : m && (m.d(1),
            m = null)
        },
        d(v) {
            v && (T(e),
            T(i),
            T(t),
            T(s),
            T(n),
            T(a),
            T(d)),
            l && l.d(v),
            f && f.d(v),
            o && o.d(v),
            p && p.d(v),
            c && c.d(v),
            u && u.d(v),
            m && m.d(v)
        }
    }
}
function Jt(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "twitter:card"),
            S(e, "content", i = r[4].cardType)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 16 && i !== (i = t[4].cardType) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Qt(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "twitter:site"),
            S(e, "content", i = r[4].site)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 16 && i !== (i = t[4].site) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ei(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "twitter:creator"),
            S(e, "content", i = r[4].handle)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 16 && i !== (i = t[4].handle) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ti(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "twitter:title"),
            S(e, "content", i = r[4].title)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 16 && i !== (i = t[4].title) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ii(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "twitter:description"),
            S(e, "content", i = r[4].description)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 16 && i !== (i = t[4].description) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function si(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "twitter:image"),
            S(e, "content", i = r[4].image)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 16 && i !== (i = t[4].image) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ri(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                name: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "name", "twitter:image:alt"),
            S(e, "content", i = r[4].imageAlt)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 16 && i !== (i = t[4].imageAlt) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ni(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "fb:app_id"),
            S(e, "content", i = r[5].appId)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 32 && i !== (i = t[5].appId) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ai(r) {
    let e, i, t, s, n, a, d, l, f, o = (r[6].url || r[7]) && li(r), p = r[6].type && oi(r), c = (r[6].title || r[12]) && Vi(r), u = (r[6].description || r[1]) && Gi(r), m = r[6].images && r[6].images.length && Ri(r), v = r[6].videos && r[6].videos.length && Ui(r), w = r[6].audio && r[6].audio.length && ts(r), g = r[6].locale && ns(r), b = r[6].siteName && as(r);
    return {
        c() {
            o && o.c(),
            e = R(),
            p && p.c(),
            i = R(),
            c && c.c(),
            t = R(),
            u && u.c(),
            s = R(),
            m && m.c(),
            n = R(),
            v && v.c(),
            a = R(),
            w && w.c(),
            d = R(),
            g && g.c(),
            l = R(),
            b && b.c(),
            f = Y()
        },
        l(h) {
            o && o.l(h),
            e = j(h),
            p && p.l(h),
            i = j(h),
            c && c.l(h),
            t = j(h),
            u && u.l(h),
            s = j(h),
            m && m.l(h),
            n = j(h),
            v && v.l(h),
            a = j(h),
            w && w.l(h),
            d = j(h),
            g && g.l(h),
            l = j(h),
            b && b.l(h),
            f = Y()
        },
        m(h, y) {
            o && o.m(h, y),
            D(h, e, y),
            p && p.m(h, y),
            D(h, i, y),
            c && c.m(h, y),
            D(h, t, y),
            u && u.m(h, y),
            D(h, s, y),
            m && m.m(h, y),
            D(h, n, y),
            v && v.m(h, y),
            D(h, a, y),
            w && w.m(h, y),
            D(h, d, y),
            g && g.m(h, y),
            D(h, l, y),
            b && b.m(h, y),
            D(h, f, y)
        },
        p(h, y) {
            h[6].url || h[7] ? o ? o.p(h, y) : (o = li(h),
            o.c(),
            o.m(e.parentNode, e)) : o && (o.d(1),
            o = null),
            h[6].type ? p ? p.p(h, y) : (p = oi(h),
            p.c(),
            p.m(i.parentNode, i)) : p && (p.d(1),
            p = null),
            h[6].title || h[12] ? c ? c.p(h, y) : (c = Vi(h),
            c.c(),
            c.m(t.parentNode, t)) : c && (c.d(1),
            c = null),
            h[6].description || h[1] ? u ? u.p(h, y) : (u = Gi(h),
            u.c(),
            u.m(s.parentNode, s)) : u && (u.d(1),
            u = null),
            h[6].images && h[6].images.length ? m ? m.p(h, y) : (m = Ri(h),
            m.c(),
            m.m(n.parentNode, n)) : m && (m.d(1),
            m = null),
            h[6].videos && h[6].videos.length ? v ? v.p(h, y) : (v = Ui(h),
            v.c(),
            v.m(a.parentNode, a)) : v && (v.d(1),
            v = null),
            h[6].audio && h[6].audio.length ? w ? w.p(h, y) : (w = ts(h),
            w.c(),
            w.m(d.parentNode, d)) : w && (w.d(1),
            w = null),
            h[6].locale ? g ? g.p(h, y) : (g = ns(h),
            g.c(),
            g.m(l.parentNode, l)) : g && (g.d(1),
            g = null),
            h[6].siteName ? b ? b.p(h, y) : (b = as(h),
            b.c(),
            b.m(f.parentNode, f)) : b && (b.d(1),
            b = null)
        },
        d(h) {
            h && (T(e),
            T(i),
            T(t),
            T(s),
            T(n),
            T(a),
            T(d),
            T(l),
            T(f)),
            o && o.d(h),
            p && p.d(h),
            c && c.d(h),
            u && u.d(h),
            m && m.d(h),
            v && v.d(h),
            w && w.d(h),
            g && g.d(h),
            b && b.d(h)
        }
    }
}
function li(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:url"),
            S(e, "content", i = r[6].url || r[7])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 192 && i !== (i = t[6].url || t[7]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function oi(r) {
    let e, i, t, s, n, a, d, l;
    function f(c, u) {
        if (u[0] & 64 && (s = null),
        u[0] & 64 && (n = null),
        u[0] & 64 && (a = null),
        u[0] & 64 && (d = null),
        s == null && (s = !!(c[6].type.toLowerCase() === "profile" && c[6].profile)),
        s)
            return qs;
        if (n == null && (n = !!(c[6].type.toLowerCase() === "book" && c[6].book)),
        n)
            return Ws;
        if (a == null && (a = !!(c[6].type.toLowerCase() === "article" && c[6].article)),
        a)
            return Ys;
        if (d == null && (d = !!(c[6].type.toLowerCase() === "video.movie" || c[6].type.toLowerCase() === "video.episode" || c[6].type.toLowerCase() === "video.tv_show" || c[6].type.toLowerCase() === "video.other" && c[6].video)),
        d)
            return Fs
    }
    let o = f(r, [-1, -1])
      , p = o && o(r);
    return {
        c() {
            e = $("meta"),
            t = R(),
            p && p.c(),
            l = Y(),
            this.h()
        },
        l(c) {
            e = O(c, "META", {
                property: !0,
                content: !0
            }),
            t = j(c),
            p && p.l(c),
            l = Y(),
            this.h()
        },
        h() {
            S(e, "property", "og:type"),
            S(e, "content", i = r[6].type.toLowerCase())
        },
        m(c, u) {
            D(c, e, u),
            D(c, t, u),
            p && p.m(c, u),
            D(c, l, u)
        },
        p(c, u) {
            u[0] & 64 && i !== (i = c[6].type.toLowerCase()) && S(e, "content", i),
            o === (o = f(c, u)) && p ? p.p(c, u) : (p && p.d(1),
            p = o && o(c),
            p && (p.c(),
            p.m(l.parentNode, l)))
        },
        d(c) {
            c && (T(e),
            T(t),
            T(l)),
            p && p.d(c)
        }
    }
}
function Fs(r) {
    var v, w, g, b, h, y, C;
    let e, i, t, s, n, a, d, l = ((v = r[6].video) == null ? void 0 : v.actors) && r[6].video.actors.length && di(r), f = ((w = r[6].video) == null ? void 0 : w.directors) && r[6].video.directors.length && ui(r), o = ((g = r[6].video) == null ? void 0 : g.writers) && r[6].video.writers.length && hi(r), p = ((b = r[6].video) == null ? void 0 : b.duration) && vi(r), c = ((h = r[6].video) == null ? void 0 : h.releaseDate) && wi(r), u = ((y = r[6].video) == null ? void 0 : y.tags) && r[6].video.tags.length && bi(r), m = ((C = r[6].video) == null ? void 0 : C.series) && Si(r);
    return {
        c() {
            l && l.c(),
            e = R(),
            f && f.c(),
            i = R(),
            o && o.c(),
            t = R(),
            p && p.c(),
            s = R(),
            c && c.c(),
            n = R(),
            u && u.c(),
            a = R(),
            m && m.c(),
            d = Y()
        },
        l(E) {
            l && l.l(E),
            e = j(E),
            f && f.l(E),
            i = j(E),
            o && o.l(E),
            t = j(E),
            p && p.l(E),
            s = j(E),
            c && c.l(E),
            n = j(E),
            u && u.l(E),
            a = j(E),
            m && m.l(E),
            d = Y()
        },
        m(E, A) {
            l && l.m(E, A),
            D(E, e, A),
            f && f.m(E, A),
            D(E, i, A),
            o && o.m(E, A),
            D(E, t, A),
            p && p.m(E, A),
            D(E, s, A),
            c && c.m(E, A),
            D(E, n, A),
            u && u.m(E, A),
            D(E, a, A),
            m && m.m(E, A),
            D(E, d, A)
        },
        p(E, A) {
            var M, _, k, H, P, x, L;
            (M = E[6].video) != null && M.actors && E[6].video.actors.length ? l ? l.p(E, A) : (l = di(E),
            l.c(),
            l.m(e.parentNode, e)) : l && (l.d(1),
            l = null),
            (_ = E[6].video) != null && _.directors && E[6].video.directors.length ? f ? f.p(E, A) : (f = ui(E),
            f.c(),
            f.m(i.parentNode, i)) : f && (f.d(1),
            f = null),
            (k = E[6].video) != null && k.writers && E[6].video.writers.length ? o ? o.p(E, A) : (o = hi(E),
            o.c(),
            o.m(t.parentNode, t)) : o && (o.d(1),
            o = null),
            (H = E[6].video) != null && H.duration ? p ? p.p(E, A) : (p = vi(E),
            p.c(),
            p.m(s.parentNode, s)) : p && (p.d(1),
            p = null),
            (P = E[6].video) != null && P.releaseDate ? c ? c.p(E, A) : (c = wi(E),
            c.c(),
            c.m(n.parentNode, n)) : c && (c.d(1),
            c = null),
            (x = E[6].video) != null && x.tags && E[6].video.tags.length ? u ? u.p(E, A) : (u = bi(E),
            u.c(),
            u.m(a.parentNode, a)) : u && (u.d(1),
            u = null),
            (L = E[6].video) != null && L.series ? m ? m.p(E, A) : (m = Si(E),
            m.c(),
            m.m(d.parentNode, d)) : m && (m.d(1),
            m = null)
        },
        d(E) {
            E && (T(e),
            T(i),
            T(t),
            T(s),
            T(n),
            T(a),
            T(d)),
            l && l.d(E),
            f && f.d(E),
            o && o.d(E),
            p && p.d(E),
            c && c.d(E),
            u && u.d(E),
            m && m.d(E)
        }
    }
}
function Ys(r) {
    let e, i, t, s, n, a, d = r[6].article.publishedTime && Ei(r), l = r[6].article.modifiedTime && _i(r), f = r[6].article.expirationTime && Ti(r), o = r[6].article.authors && r[6].article.authors.length && xi(r), p = r[6].article.section && ki(r), c = r[6].article.tags && r[6].article.tags.length && Ci(r);
    return {
        c() {
            d && d.c(),
            e = R(),
            l && l.c(),
            i = R(),
            f && f.c(),
            t = R(),
            o && o.c(),
            s = R(),
            p && p.c(),
            n = R(),
            c && c.c(),
            a = Y()
        },
        l(u) {
            d && d.l(u),
            e = j(u),
            l && l.l(u),
            i = j(u),
            f && f.l(u),
            t = j(u),
            o && o.l(u),
            s = j(u),
            p && p.l(u),
            n = j(u),
            c && c.l(u),
            a = Y()
        },
        m(u, m) {
            d && d.m(u, m),
            D(u, e, m),
            l && l.m(u, m),
            D(u, i, m),
            f && f.m(u, m),
            D(u, t, m),
            o && o.m(u, m),
            D(u, s, m),
            p && p.m(u, m),
            D(u, n, m),
            c && c.m(u, m),
            D(u, a, m)
        },
        p(u, m) {
            u[6].article.publishedTime ? d ? d.p(u, m) : (d = Ei(u),
            d.c(),
            d.m(e.parentNode, e)) : d && (d.d(1),
            d = null),
            u[6].article.modifiedTime ? l ? l.p(u, m) : (l = _i(u),
            l.c(),
            l.m(i.parentNode, i)) : l && (l.d(1),
            l = null),
            u[6].article.expirationTime ? f ? f.p(u, m) : (f = Ti(u),
            f.c(),
            f.m(t.parentNode, t)) : f && (f.d(1),
            f = null),
            u[6].article.authors && u[6].article.authors.length ? o ? o.p(u, m) : (o = xi(u),
            o.c(),
            o.m(s.parentNode, s)) : o && (o.d(1),
            o = null),
            u[6].article.section ? p ? p.p(u, m) : (p = ki(u),
            p.c(),
            p.m(n.parentNode, n)) : p && (p.d(1),
            p = null),
            u[6].article.tags && u[6].article.tags.length ? c ? c.p(u, m) : (c = Ci(u),
            c.c(),
            c.m(a.parentNode, a)) : c && (c.d(1),
            c = null)
        },
        d(u) {
            u && (T(e),
            T(i),
            T(t),
            T(s),
            T(n),
            T(a)),
            d && d.d(u),
            l && l.d(u),
            f && f.d(u),
            o && o.d(u),
            p && p.d(u),
            c && c.d(u)
        }
    }
}
function Ws(r) {
    let e, i, t, s, n = r[6].book.authors && r[6].book.authors.length && Li(r), a = r[6].book.isbn && Ii(r), d = r[6].book.releaseDate && zi(r), l = r[6].book.tags && r[6].book.tags.length && Di(r);
    return {
        c() {
            n && n.c(),
            e = R(),
            a && a.c(),
            i = R(),
            d && d.c(),
            t = R(),
            l && l.c(),
            s = Y()
        },
        l(f) {
            n && n.l(f),
            e = j(f),
            a && a.l(f),
            i = j(f),
            d && d.l(f),
            t = j(f),
            l && l.l(f),
            s = Y()
        },
        m(f, o) {
            n && n.m(f, o),
            D(f, e, o),
            a && a.m(f, o),
            D(f, i, o),
            d && d.m(f, o),
            D(f, t, o),
            l && l.m(f, o),
            D(f, s, o)
        },
        p(f, o) {
            f[6].book.authors && f[6].book.authors.length ? n ? n.p(f, o) : (n = Li(f),
            n.c(),
            n.m(e.parentNode, e)) : n && (n.d(1),
            n = null),
            f[6].book.isbn ? a ? a.p(f, o) : (a = Ii(f),
            a.c(),
            a.m(i.parentNode, i)) : a && (a.d(1),
            a = null),
            f[6].book.releaseDate ? d ? d.p(f, o) : (d = zi(f),
            d.c(),
            d.m(t.parentNode, t)) : d && (d.d(1),
            d = null),
            f[6].book.tags && f[6].book.tags.length ? l ? l.p(f, o) : (l = Di(f),
            l.c(),
            l.m(s.parentNode, s)) : l && (l.d(1),
            l = null)
        },
        d(f) {
            f && (T(e),
            T(i),
            T(t),
            T(s)),
            n && n.d(f),
            a && a.d(f),
            d && d.d(f),
            l && l.d(f)
        }
    }
}
function qs(r) {
    let e, i, t, s, n = r[6].profile.firstName && Oi(r), a = r[6].profile.lastName && Ni(r), d = r[6].profile.username && Hi(r), l = r[6].profile.gender && Bi(r);
    return {
        c() {
            n && n.c(),
            e = R(),
            a && a.c(),
            i = R(),
            d && d.c(),
            t = R(),
            l && l.c(),
            s = Y()
        },
        l(f) {
            n && n.l(f),
            e = j(f),
            a && a.l(f),
            i = j(f),
            d && d.l(f),
            t = j(f),
            l && l.l(f),
            s = Y()
        },
        m(f, o) {
            n && n.m(f, o),
            D(f, e, o),
            a && a.m(f, o),
            D(f, i, o),
            d && d.m(f, o),
            D(f, t, o),
            l && l.m(f, o),
            D(f, s, o)
        },
        p(f, o) {
            f[6].profile.firstName ? n ? n.p(f, o) : (n = Oi(f),
            n.c(),
            n.m(e.parentNode, e)) : n && (n.d(1),
            n = null),
            f[6].profile.lastName ? a ? a.p(f, o) : (a = Ni(f),
            a.c(),
            a.m(i.parentNode, i)) : a && (a.d(1),
            a = null),
            f[6].profile.username ? d ? d.p(f, o) : (d = Hi(f),
            d.c(),
            d.m(t.parentNode, t)) : d && (d.d(1),
            d = null),
            f[6].profile.gender ? l ? l.p(f, o) : (l = Bi(f),
            l.c(),
            l.m(s.parentNode, s)) : l && (l.d(1),
            l = null)
        },
        d(f) {
            f && (T(e),
            T(i),
            T(t),
            T(s)),
            n && n.d(f),
            a && a.d(f),
            d && d.d(f),
            l && l.d(f)
        }
    }
}
function di(r) {
    let e, i = ee(r[6].video.actors), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = pi(Ot(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].video.actors);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Ot(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = pi(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function ci(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:actor"),
            S(e, "content", i = r[47].profile)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[47].profile) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function fi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:actor:role"),
            S(e, "content", i = r[47].role)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[47].role) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function pi(r) {
    let e, i, t = r[47].profile && ci(r), s = r[47].role && fi(r);
    return {
        c() {
            t && t.c(),
            e = R(),
            s && s.c(),
            i = Y()
        },
        l(n) {
            t && t.l(n),
            e = j(n),
            s && s.l(n),
            i = Y()
        },
        m(n, a) {
            t && t.m(n, a),
            D(n, e, a),
            s && s.m(n, a),
            D(n, i, a)
        },
        p(n, a) {
            n[47].profile ? t ? t.p(n, a) : (t = ci(n),
            t.c(),
            t.m(e.parentNode, e)) : t && (t.d(1),
            t = null),
            n[47].role ? s ? s.p(n, a) : (s = fi(n),
            s.c(),
            s.m(i.parentNode, i)) : s && (s.d(1),
            s = null)
        },
        d(n) {
            n && (T(e),
            T(i)),
            t && t.d(n),
            s && s.d(n)
        }
    }
}
function ui(r) {
    let e, i = ee(r[6].video.directors), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = mi($t(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].video.directors);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = $t(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = mi(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function mi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:director"),
            S(e, "content", i = r[44])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[44]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function hi(r) {
    let e, i = ee(r[6].video.writers), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = gi(Dt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].video.writers);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Dt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = gi(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function gi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:writer"),
            S(e, "content", i = r[41])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[41]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function vi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:duration"),
            S(e, "content", i = r[6].video.duration.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].video.duration.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function wi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:release_date"),
            S(e, "content", i = r[6].video.releaseDate)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].video.releaseDate) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function bi(r) {
    let e, i = ee(r[6].video.tags), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = yi(zt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].video.tags);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = zt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = yi(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function yi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:tag"),
            S(e, "content", i = r[16])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[16]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Si(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "video:series"),
            S(e, "content", i = r[6].video.series)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].video.series) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ei(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "article:published_time"),
            S(e, "content", i = r[6].article.publishedTime)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].article.publishedTime) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function _i(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "article:modified_time"),
            S(e, "content", i = r[6].article.modifiedTime)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].article.modifiedTime) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ti(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "article:expiration_time"),
            S(e, "content", i = r[6].article.expirationTime)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].article.expirationTime) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function xi(r) {
    let e, i = ee(r[6].article.authors), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = Mi(Ht(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].article.authors);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Ht(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = Mi(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function Mi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "article:author"),
            S(e, "content", i = r[32])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[32]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ki(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "article:section"),
            S(e, "content", i = r[6].article.section)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].article.section) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ci(r) {
    let e, i = ee(r[6].article.tags), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = Pi(Nt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].article.tags);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Nt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = Pi(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function Pi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "article:tag"),
            S(e, "content", i = r[16])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[16]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Li(r) {
    let e, i = ee(r[6].book.authors), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = Ai(Vt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].book.authors);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Vt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = Ai(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function Ai(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "book:author"),
            S(e, "content", i = r[32])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[32]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ii(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "book:isbn"),
            S(e, "content", i = r[6].book.isbn)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].book.isbn) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function zi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "book:release_date"),
            S(e, "content", i = r[6].book.releaseDate)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].book.releaseDate) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Di(r) {
    let e, i = ee(r[6].book.tags), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = $i(Bt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].book.tags);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Bt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = $i(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function $i(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "book:tag"),
            S(e, "content", i = r[16])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[16]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Oi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "profile:first_name"),
            S(e, "content", i = r[6].profile.firstName)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].profile.firstName) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ni(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "profile:last_name"),
            S(e, "content", i = r[6].profile.lastName)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].profile.lastName) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Hi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "profile:username"),
            S(e, "content", i = r[6].profile.username)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].profile.username) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Bi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "profile:gender"),
            S(e, "content", i = r[6].profile.gender)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].profile.gender) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Vi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:title"),
            S(e, "content", i = r[6].title || r[12])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 4160 && i !== (i = t[6].title || t[12]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Gi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:description"),
            S(e, "content", i = r[6].description || r[1])
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 66 && i !== (i = t[6].description || t[1]) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ri(r) {
    let e, i = ee(r[6].images), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = qi(It(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].images);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = It(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = qi(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function ji(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:image:alt"),
            S(e, "content", i = r[27].alt)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[27].alt) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Xi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:image:width"),
            S(e, "content", i = r[27].width.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[27].width.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Fi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:image:height"),
            S(e, "content", i = r[27].height.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[27].height.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Yi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:image:secure_url"),
            S(e, "content", i = r[27].secureUrl.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[27].secureUrl.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Wi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:image:type"),
            S(e, "content", i = r[27].type.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[27].type.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function qi(r) {
    let e, i, t, s, n, a, d, l, f = r[27].alt && ji(r), o = r[27].width && Xi(r), p = r[27].height && Fi(r), c = r[27].secureUrl && Yi(r), u = r[27].type && Wi(r);
    return {
        c() {
            e = $("meta"),
            t = R(),
            f && f.c(),
            s = R(),
            o && o.c(),
            n = R(),
            p && p.c(),
            a = R(),
            c && c.c(),
            d = R(),
            u && u.c(),
            l = Y(),
            this.h()
        },
        l(m) {
            e = O(m, "META", {
                property: !0,
                content: !0
            }),
            t = j(m),
            f && f.l(m),
            s = j(m),
            o && o.l(m),
            n = j(m),
            p && p.l(m),
            a = j(m),
            c && c.l(m),
            d = j(m),
            u && u.l(m),
            l = Y(),
            this.h()
        },
        h() {
            S(e, "property", "og:image"),
            S(e, "content", i = r[27].url)
        },
        m(m, v) {
            D(m, e, v),
            D(m, t, v),
            f && f.m(m, v),
            D(m, s, v),
            o && o.m(m, v),
            D(m, n, v),
            p && p.m(m, v),
            D(m, a, v),
            c && c.m(m, v),
            D(m, d, v),
            u && u.m(m, v),
            D(m, l, v)
        },
        p(m, v) {
            v[0] & 64 && i !== (i = m[27].url) && S(e, "content", i),
            m[27].alt ? f ? f.p(m, v) : (f = ji(m),
            f.c(),
            f.m(s.parentNode, s)) : f && (f.d(1),
            f = null),
            m[27].width ? o ? o.p(m, v) : (o = Xi(m),
            o.c(),
            o.m(n.parentNode, n)) : o && (o.d(1),
            o = null),
            m[27].height ? p ? p.p(m, v) : (p = Fi(m),
            p.c(),
            p.m(a.parentNode, a)) : p && (p.d(1),
            p = null),
            m[27].secureUrl ? c ? c.p(m, v) : (c = Yi(m),
            c.c(),
            c.m(d.parentNode, d)) : c && (c.d(1),
            c = null),
            m[27].type ? u ? u.p(m, v) : (u = Wi(m),
            u.c(),
            u.m(l.parentNode, l)) : u && (u.d(1),
            u = null)
        },
        d(m) {
            m && (T(e),
            T(t),
            T(s),
            T(n),
            T(a),
            T(d),
            T(l)),
            f && f.d(m),
            o && o.d(m),
            p && p.d(m),
            c && c.d(m),
            u && u.d(m)
        }
    }
}
function Ui(r) {
    let e, i = ee(r[6].videos), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = es(At(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].videos);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = At(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = es(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function Zi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:video:width"),
            S(e, "content", i = r[24].width.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[24].width.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ki(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:video:height"),
            S(e, "content", i = r[24].height.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[24].height.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Ji(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:video:secure_url"),
            S(e, "content", i = r[24].secureUrl.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[24].secureUrl.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function Qi(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:video:type"),
            S(e, "content", i = r[24].type.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[24].type.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function es(r) {
    let e, i, t, s, n, a, d, l = r[24].width && Zi(r), f = r[24].height && Ki(r), o = r[24].secureUrl && Ji(r), p = r[24].type && Qi(r);
    return {
        c() {
            e = $("meta"),
            t = R(),
            l && l.c(),
            s = R(),
            f && f.c(),
            n = R(),
            o && o.c(),
            a = R(),
            p && p.c(),
            d = Y(),
            this.h()
        },
        l(c) {
            e = O(c, "META", {
                property: !0,
                content: !0
            }),
            t = j(c),
            l && l.l(c),
            s = j(c),
            f && f.l(c),
            n = j(c),
            o && o.l(c),
            a = j(c),
            p && p.l(c),
            d = Y(),
            this.h()
        },
        h() {
            S(e, "property", "og:video"),
            S(e, "content", i = r[24].url)
        },
        m(c, u) {
            D(c, e, u),
            D(c, t, u),
            l && l.m(c, u),
            D(c, s, u),
            f && f.m(c, u),
            D(c, n, u),
            o && o.m(c, u),
            D(c, a, u),
            p && p.m(c, u),
            D(c, d, u)
        },
        p(c, u) {
            u[0] & 64 && i !== (i = c[24].url) && S(e, "content", i),
            c[24].width ? l ? l.p(c, u) : (l = Zi(c),
            l.c(),
            l.m(s.parentNode, s)) : l && (l.d(1),
            l = null),
            c[24].height ? f ? f.p(c, u) : (f = Ki(c),
            f.c(),
            f.m(n.parentNode, n)) : f && (f.d(1),
            f = null),
            c[24].secureUrl ? o ? o.p(c, u) : (o = Ji(c),
            o.c(),
            o.m(a.parentNode, a)) : o && (o.d(1),
            o = null),
            c[24].type ? p ? p.p(c, u) : (p = Qi(c),
            p.c(),
            p.m(d.parentNode, d)) : p && (p.d(1),
            p = null)
        },
        d(c) {
            c && (T(e),
            T(t),
            T(s),
            T(n),
            T(a),
            T(d)),
            l && l.d(c),
            f && f.d(c),
            o && o.d(c),
            p && p.d(c)
        }
    }
}
function ts(r) {
    let e, i = ee(r[6].audio), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = rs(Lt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 64) {
                i = ee(s[6].audio);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Lt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = rs(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function is(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:audio:secure_url"),
            S(e, "content", i = r[21].secureUrl.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[21].secureUrl.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ss(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:audio:type"),
            S(e, "content", i = r[21].type.toString())
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[21].type.toString()) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function rs(r) {
    let e, i, t, s, n, a = r[21].secureUrl && is(r), d = r[21].type && ss(r);
    return {
        c() {
            e = $("meta"),
            t = R(),
            a && a.c(),
            s = R(),
            d && d.c(),
            n = Y(),
            this.h()
        },
        l(l) {
            e = O(l, "META", {
                property: !0,
                content: !0
            }),
            t = j(l),
            a && a.l(l),
            s = j(l),
            d && d.l(l),
            n = Y(),
            this.h()
        },
        h() {
            S(e, "property", "og:audio"),
            S(e, "content", i = r[21].url)
        },
        m(l, f) {
            D(l, e, f),
            D(l, t, f),
            a && a.m(l, f),
            D(l, s, f),
            d && d.m(l, f),
            D(l, n, f)
        },
        p(l, f) {
            f[0] & 64 && i !== (i = l[21].url) && S(e, "content", i),
            l[21].secureUrl ? a ? a.p(l, f) : (a = is(l),
            a.c(),
            a.m(s.parentNode, s)) : a && (a.d(1),
            a = null),
            l[21].type ? d ? d.p(l, f) : (d = ss(l),
            d.c(),
            d.m(n.parentNode, n)) : d && (d.d(1),
            d = null)
        },
        d(l) {
            l && (T(e),
            T(t),
            T(s),
            T(n)),
            a && a.d(l),
            d && d.d(l)
        }
    }
}
function ns(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:locale"),
            S(e, "content", i = r[6].locale)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].locale) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function as(r) {
    let e, i;
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(t) {
            e = O(t, "META", {
                property: !0,
                content: !0
            }),
            this.h()
        },
        h() {
            S(e, "property", "og:site_name"),
            S(e, "content", i = r[6].siteName)
        },
        m(t, s) {
            D(t, e, s)
        },
        p(t, s) {
            s[0] & 64 && i !== (i = t[6].siteName) && S(e, "content", i)
        },
        d(t) {
            t && T(e)
        }
    }
}
function ls(r) {
    let e, i = ee(r[9]), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = os(Pt(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 512) {
                i = ee(s[9]);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Pt(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = os(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function os(r) {
    let e, i = [r[16]], t = {};
    for (let s = 0; s < i.length; s += 1)
        t = Ls(t, i[s]);
    return {
        c() {
            e = $("meta"),
            this.h()
        },
        l(s) {
            e = O(s, "META", {}),
            this.h()
        },
        h() {
            Je(e, t)
        },
        m(s, n) {
            D(s, e, n)
        },
        p(s, n) {
            Je(e, t = Is(i, [n[0] & 512 && s[16]]))
        },
        d(s) {
            s && T(e)
        }
    }
}
function ds(r) {
    let e, i = ee(r[10]), t = [];
    for (let s = 0; s < i.length; s += 1)
        t[s] = cs(Ct(r, i, s));
    return {
        c() {
            for (let s = 0; s < t.length; s += 1)
                t[s].c();
            e = Y()
        },
        l(s) {
            for (let n = 0; n < t.length; n += 1)
                t[n].l(s);
            e = Y()
        },
        m(s, n) {
            for (let a = 0; a < t.length; a += 1)
                t[a] && t[a].m(s, n);
            D(s, e, n)
        },
        p(s, n) {
            if (n[0] & 1024) {
                i = ee(s[10]);
                let a;
                for (a = 0; a < i.length; a += 1) {
                    const d = Ct(s, i, a);
                    t[a] ? t[a].p(d, n) : (t[a] = cs(d),
                    t[a].c(),
                    t[a].m(e.parentNode, e))
                }
                for (; a < t.length; a += 1)
                    t[a].d(1);
                t.length = i.length
            }
        },
        d(s) {
            s && T(e),
            le(t, s)
        }
    }
}
function cs(r) {
    let e, i = [r[16]], t = {};
    for (let s = 0; s < i.length; s += 1)
        t = Ls(t, i[s]);
    return {
        c() {
            e = $("link"),
            this.h()
        },
        l(s) {
            e = O(s, "LINK", {}),
            this.h()
        },
        h() {
            Je(e, t)
        },
        m(s, n) {
            D(s, e, n)
        },
        p(s, n) {
            Je(e, t = Is(i, [n[0] & 1024 && s[16]]))
        },
        d(s) {
            s && T(e)
        }
    }
}
function Us(r) {
    var H, P;
    let e = r[12], i, t, s, n, a, d, l, f, o, p, c = r[9] && Array.isArray(r[9]), u, m, v = jt(r), w = r[0] !== !1 && Xt(r), g = r[1] && Ft(r), b = r[7] && Yt(r), h = ((H = r[8]) == null ? void 0 : H.length) && Wt(r), y = r[2] && qt(r), C = r[3] && r[3].length > 0 && Ut(r), E = r[4] && Kt(r), A = r[5] && ni(r), M = r[6] && ai(r), _ = c && ls(r), k = ((P = r[10]) == null ? void 0 : P.length) && ds(r);
    return {
        c() {
            v.c(),
            i = Y(),
            w && w.c(),
            t = Y(),
            g && g.c(),
            s = Y(),
            b && b.c(),
            n = Y(),
            h && h.c(),
            a = Y(),
            y && y.c(),
            d = Y(),
            C && C.c(),
            l = Y(),
            E && E.c(),
            f = Y(),
            A && A.c(),
            o = Y(),
            M && M.c(),
            p = Y(),
            _ && _.c(),
            u = Y(),
            k && k.c(),
            m = Y()
        },
        l(x) {
            const L = As("svelte-18pzfb8", document.head);
            v.l(L),
            i = Y(),
            w && w.l(L),
            t = Y(),
            g && g.l(L),
            s = Y(),
            b && b.l(L),
            n = Y(),
            h && h.l(L),
            a = Y(),
            y && y.l(L),
            d = Y(),
            C && C.l(L),
            l = Y(),
            E && E.l(L),
            f = Y(),
            A && A.l(L),
            o = Y(),
            M && M.l(L),
            p = Y(),
            _ && _.l(L),
            u = Y(),
            k && k.l(L),
            m = Y(),
            L.forEach(T)
        },
        m(x, L) {
            v.m(document.head, null),
            N(document.head, i),
            w && w.m(document.head, null),
            N(document.head, t),
            g && g.m(document.head, null),
            N(document.head, s),
            b && b.m(document.head, null),
            N(document.head, n),
            h && h.m(document.head, null),
            N(document.head, a),
            y && y.m(document.head, null),
            N(document.head, d),
            C && C.m(document.head, null),
            N(document.head, l),
            E && E.m(document.head, null),
            N(document.head, f),
            A && A.m(document.head, null),
            N(document.head, o),
            M && M.m(document.head, null),
            N(document.head, p),
            _ && _.m(document.head, null),
            N(document.head, u),
            k && k.m(document.head, null),
            N(document.head, m)
        },
        p(x, L) {
            var G, I;
            L[0] & 4096 && ve(e, e = x[12]) ? (v.d(1),
            v = jt(x),
            v.c(),
            v.m(i.parentNode, i)) : v.p(x, L),
            x[0] !== !1 ? w ? w.p(x, L) : (w = Xt(x),
            w.c(),
            w.m(t.parentNode, t)) : w && (w.d(1),
            w = null),
            x[1] ? g ? g.p(x, L) : (g = Ft(x),
            g.c(),
            g.m(s.parentNode, s)) : g && (g.d(1),
            g = null),
            x[7] ? b ? b.p(x, L) : (b = Yt(x),
            b.c(),
            b.m(n.parentNode, n)) : b && (b.d(1),
            b = null),
            (G = x[8]) != null && G.length ? h ? h.p(x, L) : (h = Wt(x),
            h.c(),
            h.m(a.parentNode, a)) : h && (h.d(1),
            h = null),
            x[2] ? y ? y.p(x, L) : (y = qt(x),
            y.c(),
            y.m(d.parentNode, d)) : y && (y.d(1),
            y = null),
            x[3] && x[3].length > 0 ? C ? C.p(x, L) : (C = Ut(x),
            C.c(),
            C.m(l.parentNode, l)) : C && (C.d(1),
            C = null),
            x[4] ? E ? E.p(x, L) : (E = Kt(x),
            E.c(),
            E.m(f.parentNode, f)) : E && (E.d(1),
            E = null),
            x[5] ? A ? A.p(x, L) : (A = ni(x),
            A.c(),
            A.m(o.parentNode, o)) : A && (A.d(1),
            A = null),
            x[6] ? M ? M.p(x, L) : (M = ai(x),
            M.c(),
            M.m(p.parentNode, p)) : M && (M.d(1),
            M = null),
            L[0] & 512 && (c = x[9] && Array.isArray(x[9])),
            c ? _ ? _.p(x, L) : (_ = ls(x),
            _.c(),
            _.m(u.parentNode, u)) : _ && (_.d(1),
            _ = null),
            (I = x[10]) != null && I.length ? k ? k.p(x, L) : (k = ds(x),
            k.c(),
            k.m(m.parentNode, m)) : k && (k.d(1),
            k = null)
        },
        i: ie,
        o: ie,
        d(x) {
            T(i),
            v.d(x),
            w && w.d(x),
            T(t),
            g && g.d(x),
            T(s),
            b && b.d(x),
            T(n),
            h && h.d(x),
            T(a),
            y && y.d(x),
            T(d),
            C && C.d(x),
            T(l),
            E && E.d(x),
            T(f),
            A && A.d(x),
            T(o),
            M && M.d(x),
            T(p),
            _ && _.d(x),
            T(u),
            k && k.d(x),
            T(m)
        }
    }
}
function Zs(r, e, i) {
    let t, {title: s=""} = e, {titleTemplate: n=""} = e, {robots: a="index,follow"} = e, {additionalRobotsProps: d=void 0} = e, {description: l=void 0} = e, {mobileAlternate: f=void 0} = e, {languageAlternates: o=void 0} = e, {twitter: p=void 0} = e, {facebook: c=void 0} = e, {openGraph: u=void 0} = e, {canonical: m=void 0} = e, {keywords: v=void 0} = e, {additionalMetaTags: w=void 0} = e, {additionalLinkTags: g=void 0} = e, b = "";
    if (d) {
        const {nosnippet: h, maxSnippet: y, maxImagePreview: C, maxVideoPreview: E, noarchive: A, noimageindex: M, notranslate: _, unavailableAfter: k} = d;
        b = `${h ? ",nosnippet" : ""}${y ? `,max-snippet:${y}` : ""}${C ? `,max-image-preview:${C}` : ""}${A ? ",noarchive" : ""}${k ? `,unavailable_after:${k}` : ""}${M ? ",noimageindex" : ""}${E ? `,max-video-preview:${E}` : ""}${_ ? ",notranslate" : ""}`
    }
    return r.$$set = h => {
        "title"in h && i(13, s = h.title),
        "titleTemplate"in h && i(14, n = h.titleTemplate),
        "robots"in h && i(0, a = h.robots),
        "additionalRobotsProps"in h && i(15, d = h.additionalRobotsProps),
        "description"in h && i(1, l = h.description),
        "mobileAlternate"in h && i(2, f = h.mobileAlternate),
        "languageAlternates"in h && i(3, o = h.languageAlternates),
        "twitter"in h && i(4, p = h.twitter),
        "facebook"in h && i(5, c = h.facebook),
        "openGraph"in h && i(6, u = h.openGraph),
        "canonical"in h && i(7, m = h.canonical),
        "keywords"in h && i(8, v = h.keywords),
        "additionalMetaTags"in h && i(9, w = h.additionalMetaTags),
        "additionalLinkTags"in h && i(10, g = h.additionalLinkTags)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty[0] & 24576 && i(12, t = n ? s && n.replace(/%s/g, s) : s),
        r.$$.dirty[0] & 32769 && !a && d && console.warn("additionalRobotsProps cannot be used when robots is set to false")
    }
    ,
    [a, l, f, o, p, c, u, m, v, w, g, b, t, s, n, d]
}
class Ks extends be {
    constructor(e) {
        super(),
        ye(this, e, Zs, Us, ve, {
            title: 13,
            titleTemplate: 14,
            robots: 0,
            additionalRobotsProps: 15,
            description: 1,
            mobileAlternate: 2,
            languageAlternates: 3,
            twitter: 4,
            facebook: 5,
            openGraph: 6,
            canonical: 7,
            keywords: 8,
            additionalMetaTags: 9,
            additionalLinkTags: 10
        }, null, [-1, -1])
    }
}
function Js(r) {
    let e, i, t, s, n, a, d, l, f, o, p;
    return {
        c() {
            e = $("div"),
            i = $("label"),
            t = $("input"),
            s = R(),
            n = We("svg"),
            a = We("path"),
            d = R(),
            l = We("svg"),
            f = We("path"),
            this.h()
        },
        l(c) {
            e = O(c, "DIV", {
                class: !0
            });
            var u = W(e);
            i = O(u, "LABEL", {
                class: !0,
                for: !0
            });
            var m = W(i);
            t = O(m, "INPUT", {
                type: !0,
                id: !0,
                placeholder: !0
            }),
            s = j(m),
            n = qe(m, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var v = W(n);
            a = qe(v, "path", {
                d: !0
            }),
            W(a).forEach(T),
            v.forEach(T),
            d = j(m),
            l = qe(m, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var w = W(l);
            f = qe(w, "path", {
                d: !0
            }),
            W(f).forEach(T),
            w.forEach(T),
            m.forEach(T),
            u.forEach(T),
            this.h()
        },
        h() {
            t.checked = r[0],
            S(t, "type", "checkbox"),
            S(t, "id", "theme-toggle"),
            S(t, "placeholder", "theme-toggle"),
            S(a, "d", "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"),
            S(n, "class", "swap-on fill-current w-8 h-8"),
            S(n, "xmlns", "http://www.w3.org/2000/svg"),
            S(n, "viewBox", "0 0 24 24"),
            S(f, "d", "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"),
            S(l, "class", "swap-off fill-current w-8 h-8"),
            S(l, "xmlns", "http://www.w3.org/2000/svg"),
            S(l, "viewBox", "0 0 24 24"),
            S(i, "class", "z-10 swap swap-rotate cursor-pointer h-6 w-6 fixed top-5 right-6 rounded-full duration-300 content-['']"),
            S(i, "for", "theme-toggle"),
            S(e, "class", "h-0 m-0")
        },
        m(c, u) {
            D(c, e, u),
            N(e, i),
            N(i, t),
            N(i, s),
            N(i, n),
            N(n, a),
            N(i, d),
            N(i, l),
            N(l, f),
            o || (p = Re(t, "click", r[1]),
            o = !0)
        },
        p(c, [u]) {
            u & 1 && (t.checked = c[0])
        },
        i: ie,
        o: ie,
        d(c) {
            c && T(e),
            o = !1,
            p()
        }
    }
}
function Qs(r, e, i) {
    let {darkMode: t=!0} = e;
    function s() {
        i(0, t = !t),
        localStorage.setItem("theme", t ? "night" : "light"),
        t ? (document.documentElement.classList.add("night"),
        document.documentElement.setAttribute("data-theme", "night")) : (document.documentElement.classList.remove("night"),
        document.documentElement.setAttribute("data-theme", "light"))
    }
    return localStorage.theme === "night" || !("theme"in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("night"),
    document.documentElement.setAttribute("data-theme", "night"),
    t = !0) : (document.documentElement.classList.remove("night"),
    document.documentElement.setAttribute("data-theme", "light"),
    t = !1),
    r.$$set = n => {
        "darkMode"in n && i(0, t = n.darkMode)
    }
    ,
    [t, s]
}
class er extends be {
    constructor(e) {
        super(),
        ye(this, e, Qs, Js, ve, {
            darkMode: 0
        })
    }
}
function tr(r) { 
    let e, i, t, s, n, a, d, l = "Hi, I'm Sahan!", f, o, p, c, u, m, v, w = "traits", g = "[] ", b, h, y = "Sahan", C = " =", E, A, M, _, k = "{", H, P, x, L = '<code id="typewriter" class="text-success"></code>', G, I, z, B = "}", F;
    return {
        c() {
            e = $("div"),
            i = $("div"),
            t = $("tgs-player"),
            n = R(),
            a = $("div"),
            d = $("h1"),
            d.textContent = l,
            f = R(),
            o = $("br"),
            p = R(),
            c = $("div"),
            u = $("pre"),
            m = $("code"),
            v = $("span"),
            v.textContent = w,
            b = ne(g),
            h = $("span"),
            h.textContent = y,
            E = ne(C),
            A = R(),
            M = $("pre"),
            _ = $("code"),
            H = ne(k),
            P = R(),
            x = $("pre"),
            x.innerHTML = L,
            G = R(),
            I = $("pre"),
            z = $("code"),
            F = ne(B),
            this.h()
        },
        l(Z) {
            e = O(Z, "DIV", {
                class: !0
            });
            var V = W(e);
            i = O(V, "DIV", {
                class: !0
            });
            var X = W(i);
            t = O(X, "TGS-PLAYER", {
                autoplay: !0,
                loop: !0,
                src: !0,
                style: !0
            });
            var q = W(t);
            q.forEach(T),
            n = j(X),
            a = O(X, "DIV", {});
            var Q = W(a);
            d = O(Q, "H1", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(d) !== "svelte-378bd2" && (d.textContent = l),
            f = j(Q),
            o = O(Q, "BR", {}),
            p = j(Q),
            c = O(Q, "DIV", {
                class: !0
            });
            var U = W(c);
            u = O(U, "PRE", {
                "data-prefix": !0
            });
            var K = W(u);
            m = O(K, "CODE", {});
            var te = W(m);
            v = O(te, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(v) !== "svelte-1g407ki" && (v.textContent = w),
            b = ae(te, g),
            h = O(te, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(h) !== "svelte-1mdm1g5" && (h.textContent = y),
            E = ae(te, C),
            te.forEach(T),
            K.forEach(T),
            A = j(U),
            M = O(U, "PRE", {
                "data-prefix": !0
            });
            var he = W(M);
            _ = O(he, "CODE", {});
            var fe = W(_);
            H = ae(fe, k),
            fe.forEach(T),
            he.forEach(T),
            P = j(U),
            x = O(U, "PRE", {
                "data-prefix": !0,
                "data-svelte-h": !0
            }),
            re(x) !== "svelte-3k2xvx" && (x.innerHTML = L),
            G = j(U),
            I = O(U, "PRE", {
                "data-prefix": !0
            });
            var ce = W(I);
            z = O(ce, "CODE", {});
            var we = W(z);
            F = ae(we, B),
            we.forEach(T),
            ce.forEach(T),
            U.forEach(T),
            Q.forEach(T),
            X.forEach(T),
            V.forEach(T),
            this.h()
        },
        h() {
            Le(t, "autoplay", ""),
            Le(t, "loop", ""),
            mt(t.src, s = "/anim/" + r[0]) || Le(t, "src", s),
            js(t, "width", "320px"),
            S(d, "class", "text-5xl font-bold bg-gradient-to-r bg-clip-text leading-normal text-transparent from-[#048eaa] via-blue-500 to-[#048eaa] animate-text text-center"),
            S(v, "class", "text-info"),
            S(h, "class", "text-secondary"),
            S(u, "data-prefix", "1"),
            S(M, "data-prefix", "2"),
            S(x, "data-prefix", "3"),
            S(I, "data-prefix", "4"),
            S(c, "class", "lg:min-w-[400px] max-w-[100vw] mockup-code"),
            S(i, "class", "hero-content flex-col max-w-[100vw] w-full justify-start lg:flex-row lg:max-w-screen-xl"),
            S(e, "class", "hero min-h-screen")
        },
        m(Z, V) {
            D(Z, e, V),
            N(e, i),
            N(i, t),
            N(i, n),
            N(i, a),
            N(a, d),
            N(a, f),
            N(a, o),
            N(a, p),
            N(a, c),
            N(c, u),
            N(u, m),
            N(m, v),
            N(m, b),
            N(m, h),
            N(m, E),
            N(c, A),
            N(c, M),
            N(M, _),
            N(_, H),
            N(c, P),
            N(c, x),
            N(c, G),
            N(c, I),
            N(I, z),
            N(z, F)
        },
        p(Z, [V]) {
            V & 1 && !mt(t.src, s = "/anime/" + Z[0]) && Le(t, "src", s)
        },
        i: ie,
        o: ie,
        d(Z) {
            Z && T(e)
        }
    }
}
function ir(r, e, i) {
    let t = "chpic.su_-_Godzi_026.tgs";  
    const s = ["kungfu.tgs", "laug.tgs", "ghostmain.tgs", "muical.tgs", "yogalight.tgs", "death.tgs", "card.tgs", "chpic.su_-_Godzi_026.tgs", "dessv.tgs", "AnimatedSticker.tgs"];
    return t = s[Math.floor(Math.random() * s.length)],
    yt(async () => {
        var n = 0
          , a = "	developer, Network Operator, ";
        function d() {
            n < a.length && (document.getElementById("typewriter").innerHTML += a.charAt(n),
            n++,
            setTimeout(d, 50))
        }
        d()
    }
    ),
    [t]
}
class sr extends be {
    constructor(e) {
        super(),
        ye(this, e, ir, tr, ve, {})
    }
}
function fs(r) {
    return r !== null && typeof r == "object" && "constructor"in r && r.constructor === Object
}
function St(r, e) {
    r === void 0 && (r = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(i => {
        typeof r[i] > "u" ? r[i] = e[i] : fs(e[i]) && fs(r[i]) && Object.keys(e[i]).length > 0 && St(r[i], e[i])
    }
    )
}
const zs = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function de() {
    const r = typeof document < "u" ? document : {};
    return St(r, zs),
    r
}
const rr = {
    document: zs,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(r) {
        return typeof setTimeout > "u" ? (r(),
        null) : setTimeout(r, 0)
    },
    cancelAnimationFrame(r) {
        typeof setTimeout > "u" || clearTimeout(r)
    }
};
function se() {
    const r = typeof window < "u" ? window : {};
    return St(r, rr),
    r
}
function Ce(r) {
    return r === void 0 && (r = ""),
    r.trim().split(" ").filter(e => !!e.trim())
}
function nr(r) {
    const e = r;
    Object.keys(e).forEach(i => {
        try {
            e[i] = null
        } catch {}
        try {
            delete e[i]
        } catch {}
    }
    )
}
function Ie(r, e) {
    return e === void 0 && (e = 0),
    setTimeout(r, e)
}
function ge() {
    return Date.now()
}
function ar(r) {
    const e = se();
    let i;
    return e.getComputedStyle && (i = e.getComputedStyle(r, null)),
    !i && r.currentStyle && (i = r.currentStyle),
    i || (i = r.style),
    i
}
function ht(r, e) {
    e === void 0 && (e = "x");
    const i = se();
    let t, s, n;
    const a = ar(r);
    return i.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform,
    s.split(",").length > 6 && (s = s.split(", ").map(d => d.replace(",", ".")).join(", ")),
    n = new i.WebKitCSSMatrix(s === "none" ? "" : s)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    t = n.toString().split(",")),
    e === "x" && (i.WebKitCSSMatrix ? s = n.m41 : t.length === 16 ? s = parseFloat(t[12]) : s = parseFloat(t[4])),
    e === "y" && (i.WebKitCSSMatrix ? s = n.m42 : t.length === 16 ? s = parseFloat(t[13]) : s = parseFloat(t[5])),
    s || 0
}
function Be(r) {
    return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object"
}
function lr(r) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11)
}
function ue() {
    const r = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
        const t = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (t != null && !lr(t)) {
            const s = Object.keys(Object(t)).filter(n => e.indexOf(n) < 0);
            for (let n = 0, a = s.length; n < a; n += 1) {
                const d = s[n]
                  , l = Object.getOwnPropertyDescriptor(t, d);
                l !== void 0 && l.enumerable && (Be(r[d]) && Be(t[d]) ? t[d].__swiper__ ? r[d] = t[d] : ue(r[d], t[d]) : !Be(r[d]) && Be(t[d]) ? (r[d] = {},
                t[d].__swiper__ ? r[d] = t[d] : ue(r[d], t[d])) : r[d] = t[d])
            }
        }
    }
    return r
}
function Ve(r, e, i) {
    r.style.setProperty(e, i)
}
function Ds(r) {
    let {swiper: e, targetPosition: i, side: t} = r;
    const s = se()
      , n = -e.translate;
    let a = null, d;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    s.cancelAnimationFrame(e.cssModeFrameID);
    const f = i > n ? "next" : "prev"
      , o = (c, u) => f === "next" && c >= u || f === "prev" && c <= u
      , p = () => {
        d = new Date().getTime(),
        a === null && (a = d);
        const c = Math.max(Math.min((d - a) / l, 1), 0)
          , u = .5 - Math.cos(c * Math.PI) / 2;
        let m = n + u * (i - n);
        if (o(m, i) && (m = i),
        e.wrapperEl.scrollTo({
            [t]: m
        }),
        o(m, i)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [t]: m
                })
            }
            ),
            s.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = s.requestAnimationFrame(p)
    }
    ;
    p()
}
function ze(r) {
    return r.querySelector(".swiper-slide-transform") || r.shadowRoot && r.shadowRoot.querySelector(".swiper-slide-transform") || r
}
function oe(r, e) {
    return e === void 0 && (e = ""),
    [...r.children].filter(i => i.matches(e))
}
function Qe(r) {
    try {
        console.warn(r);
        return
    } catch {}
}
function me(r, e) {
    e === void 0 && (e = []);
    const i = document.createElement(r);
    return i.classList.add(...Array.isArray(e) ? e : Ce(e)),
    i
}
function et(r) {
    const e = se()
      , i = de()
      , t = r.getBoundingClientRect()
      , s = i.body
      , n = r.clientTop || s.clientTop || 0
      , a = r.clientLeft || s.clientLeft || 0
      , d = r === e ? e.scrollY : r.scrollTop
      , l = r === e ? e.scrollX : r.scrollLeft;
    return {
        top: t.top + d - n,
        left: t.left + l - a
    }
}
function or(r, e) {
    const i = [];
    for (; r.previousElementSibling; ) {
        const t = r.previousElementSibling;
        e ? t.matches(e) && i.push(t) : i.push(t),
        r = t
    }
    return i
}
function dr(r, e) {
    const i = [];
    for (; r.nextElementSibling; ) {
        const t = r.nextElementSibling;
        e ? t.matches(e) && i.push(t) : i.push(t),
        r = t
    }
    return i
}
function Pe(r, e) {
    return se().getComputedStyle(r, null).getPropertyValue(e)
}
function je(r) {
    let e = r, i;
    if (e) {
        for (i = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (i += 1);
        return i
    }
}
function Ae(r, e) {
    const i = [];
    let t = r.parentElement;
    for (; t; )
        e ? t.matches(e) && i.push(t) : i.push(t),
        t = t.parentElement;
    return i
}
function Ge(r, e) {
    function i(t) {
        t.target === r && (e.call(r, t),
        r.removeEventListener("transitionend", i))
    }
    e && r.addEventListener("transitionend", i)
}
function gt(r, e, i) {
    const t = se();
    return r[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(t.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(t.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
function J(r) {
    return (Array.isArray(r) ? r : [r]).filter(e => !!e)
}
let lt;
function cr() {
    const r = se()
      , e = de();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in r || r.DocumentTouch && e instanceof r.DocumentTouch)
    }
}
function $s() {
    return lt || (lt = cr()),
    lt
}
let ot;
function fr(r) {
    let {userAgent: e} = r === void 0 ? {} : r;
    const i = $s()
      , t = se()
      , s = t.navigator.platform
      , n = e || t.navigator.userAgent
      , a = {
        ios: !1,
        android: !1
    }
      , d = t.screen.width
      , l = t.screen.height
      , f = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let o = n.match(/(iPad).*OS\s([\d_]+)/);
    const p = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , c = !o && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , u = s === "Win32";
    let m = s === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !o && m && i.touch && v.indexOf(`${d}x${l}`) >= 0 && (o = n.match(/(Version)\/([\d.]+)/),
    o || (o = [0, 1, "13_0_0"]),
    m = !1),
    f && !u && (a.os = "android",
    a.android = !0),
    (o || c || p) && (a.os = "ios",
    a.ios = !0),
    a
}
function Os(r) {
    return r === void 0 && (r = {}),
    ot || (ot = fr(r)),
    ot
}
let dt;
function pr() {
    const r = se()
      , e = Os();
    let i = !1;
    function t() {
        const d = r.navigator.userAgent.toLowerCase();
        return d.indexOf("safari") >= 0 && d.indexOf("chrome") < 0 && d.indexOf("android") < 0
    }
    if (t()) {
        const d = String(r.navigator.userAgent);
        if (d.includes("Version/")) {
            const [l,f] = d.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
            i = l < 16 || l === 16 && f < 2
        }
    }
    const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
      , n = t()
      , a = n || s && e.ios;
    return {
        isSafari: i || n,
        needPerspectiveFix: i,
        need3dFix: a,
        isWebView: s
    }
}
function ur() {
    return dt || (dt = pr()),
    dt
}
function mr(r) {
    let {swiper: e, on: i, emit: t} = r;
    const s = se();
    let n = null
      , a = null;
    const d = () => {
        !e || e.destroyed || !e.initialized || (t("beforeResize"),
        t("resize"))
    }
      , l = () => {
        !e || e.destroyed || !e.initialized || (n = new ResizeObserver(p => {
            a = s.requestAnimationFrame( () => {
                const {width: c, height: u} = e;
                let m = c
                  , v = u;
                p.forEach(w => {
                    let {contentBoxSize: g, contentRect: b, target: h} = w;
                    h && h !== e.el || (m = b ? b.width : (g[0] || g).inlineSize,
                    v = b ? b.height : (g[0] || g).blockSize)
                }
                ),
                (m !== c || v !== u) && d()
            }
            )
        }
        ),
        n.observe(e.el))
    }
      , f = () => {
        a && s.cancelAnimationFrame(a),
        n && n.unobserve && e.el && (n.unobserve(e.el),
        n = null)
    }
      , o = () => {
        !e || e.destroyed || !e.initialized || t("orientationchange")
    }
    ;
    i("init", () => {
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            l();
            return
        }
        s.addEventListener("resize", d),
        s.addEventListener("orientationchange", o)
    }
    ),
    i("destroy", () => {
        f(),
        s.removeEventListener("resize", d),
        s.removeEventListener("orientationchange", o)
    }
    )
}
function hr(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    const n = []
      , a = se()
      , d = function(o, p) {
        p === void 0 && (p = {});
        const c = a.MutationObserver || a.WebkitMutationObserver
          , u = new c(m => {
            if (e.__preventObserver__)
                return;
            if (m.length === 1) {
                s("observerUpdate", m[0]);
                return
            }
            const v = function() {
                s("observerUpdate", m[0])
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(v) : a.setTimeout(v, 0)
        }
        );
        u.observe(o, {
            attributes: typeof p.attributes > "u" ? !0 : p.attributes,
            childList: typeof p.childList > "u" ? !0 : p.childList,
            characterData: typeof p.characterData > "u" ? !0 : p.characterData
        }),
        n.push(u)
    }
      , l = () => {
        if (e.params.observer) {
            if (e.params.observeParents) {
                const o = Ae(e.hostEl);
                for (let p = 0; p < o.length; p += 1)
                    d(o[p])
            }
            d(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            d(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , f = () => {
        n.forEach(o => {
            o.disconnect()
        }
        ),
        n.splice(0, n.length)
    }
    ;
    i({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    t("init", l),
    t("destroy", f)
}
var gr = {
    on(r, e, i) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof e != "function")
            return t;
        const s = i ? "unshift" : "push";
        return r.split(" ").forEach(n => {
            t.eventsListeners[n] || (t.eventsListeners[n] = []),
            t.eventsListeners[n][s](e)
        }
        ),
        t
    },
    once(r, e, i) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof e != "function")
            return t;
        function s() {
            t.off(r, s),
            s.__emitterProxy && delete s.__emitterProxy;
            for (var n = arguments.length, a = new Array(n), d = 0; d < n; d++)
                a[d] = arguments[d];
            e.apply(t, a)
        }
        return s.__emitterProxy = e,
        t.on(r, s, i)
    },
    onAny(r, e) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof r != "function")
            return i;
        const t = e ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(r) < 0 && i.eventsAnyListeners[t](r),
        i
    },
    offAny(r) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const i = e.eventsAnyListeners.indexOf(r);
        return i >= 0 && e.eventsAnyListeners.splice(i, 1),
        e
    },
    off(r, e) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || r.split(" ").forEach(t => {
            typeof e > "u" ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].forEach( (s, n) => {
                (s === e || s.__emitterProxy && s.__emitterProxy === e) && i.eventsListeners[t].splice(n, 1)
            }
            )
        }
        ),
        i
    },
    emit() {
        const r = this;
        if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
            return r;
        let e, i, t;
        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
            n[a] = arguments[a];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0],
        i = n.slice(1, n.length),
        t = r) : (e = n[0].events,
        i = n[0].data,
        t = n[0].context || r),
        i.unshift(t),
        (Array.isArray(e) ? e : e.split(" ")).forEach(l => {
            r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(f => {
                f.apply(t, [l, ...i])
            }
            ),
            r.eventsListeners && r.eventsListeners[l] && r.eventsListeners[l].forEach(f => {
                f.apply(t, i)
            }
            )
        }
        ),
        r
    }
};
function vr() {
    const r = this;
    let e, i;
    const t = r.el;
    typeof r.params.width < "u" && r.params.width !== null ? e = r.params.width : e = t.clientWidth,
    typeof r.params.height < "u" && r.params.height !== null ? i = r.params.height : i = t.clientHeight,
    !(e === 0 && r.isHorizontal() || i === 0 && r.isVertical()) && (e = e - parseInt(Pe(t, "padding-left") || 0, 10) - parseInt(Pe(t, "padding-right") || 0, 10),
    i = i - parseInt(Pe(t, "padding-top") || 0, 10) - parseInt(Pe(t, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(i) && (i = 0),
    Object.assign(r, {
        width: e,
        height: i,
        size: r.isHorizontal() ? e : i
    }))
}
function wr() {
    const r = this;
    function e(k, H) {
        return parseFloat(k.getPropertyValue(r.getDirectionLabel(H)) || 0)
    }
    const i = r.params
      , {wrapperEl: t, slidesEl: s, size: n, rtlTranslate: a, wrongRTL: d} = r
      , l = r.virtual && i.virtual.enabled
      , f = l ? r.virtual.slides.length : r.slides.length
      , o = oe(s, `.${r.params.slideClass}, swiper-slide`)
      , p = l ? r.virtual.slides.length : o.length;
    let c = [];
    const u = []
      , m = [];
    let v = i.slidesOffsetBefore;
    typeof v == "function" && (v = i.slidesOffsetBefore.call(r));
    let w = i.slidesOffsetAfter;
    typeof w == "function" && (w = i.slidesOffsetAfter.call(r));
    const g = r.snapGrid.length
      , b = r.slidesGrid.length;
    let h = i.spaceBetween
      , y = -v
      , C = 0
      , E = 0;
    if (typeof n > "u")
        return;
    typeof h == "string" && h.indexOf("%") >= 0 ? h = parseFloat(h.replace("%", "")) / 100 * n : typeof h == "string" && (h = parseFloat(h)),
    r.virtualSize = -h,
    o.forEach(k => {
        a ? k.style.marginLeft = "" : k.style.marginRight = "",
        k.style.marginBottom = "",
        k.style.marginTop = ""
    }
    ),
    i.centeredSlides && i.cssMode && (Ve(t, "--swiper-centered-offset-before", ""),
    Ve(t, "--swiper-centered-offset-after", ""));
    const A = i.grid && i.grid.rows > 1 && r.grid;
    A ? r.grid.initSlides(o) : r.grid && r.grid.unsetSlides();
    let M;
    const _ = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(k => typeof i.breakpoints[k].slidesPerView < "u").length > 0;
    for (let k = 0; k < p; k += 1) {
        M = 0;
        let H;
        if (o[k] && (H = o[k]),
        A && r.grid.updateSlide(k, H, o),
        !(o[k] && Pe(H, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                _ && (o[k].style[r.getDirectionLabel("width")] = "");
                const P = getComputedStyle(H)
                  , x = H.style.transform
                  , L = H.style.webkitTransform;
                if (x && (H.style.transform = "none"),
                L && (H.style.webkitTransform = "none"),
                i.roundLengths)
                    M = r.isHorizontal() ? gt(H, "width") : gt(H, "height");
                else {
                    const G = e(P, "width")
                      , I = e(P, "padding-left")
                      , z = e(P, "padding-right")
                      , B = e(P, "margin-left")
                      , F = e(P, "margin-right")
                      , Z = P.getPropertyValue("box-sizing");
                    if (Z && Z === "border-box")
                        M = G + B + F;
                    else {
                        const {clientWidth: V, offsetWidth: X} = H;
                        M = G + I + z + B + F + (X - V)
                    }
                }
                x && (H.style.transform = x),
                L && (H.style.webkitTransform = L),
                i.roundLengths && (M = Math.floor(M))
            } else
                M = (n - (i.slidesPerView - 1) * h) / i.slidesPerView,
                i.roundLengths && (M = Math.floor(M)),
                o[k] && (o[k].style[r.getDirectionLabel("width")] = `${M}px`);
            o[k] && (o[k].swiperSlideSize = M),
            m.push(M),
            i.centeredSlides ? (y = y + M / 2 + C / 2 + h,
            C === 0 && k !== 0 && (y = y - n / 2 - h),
            k === 0 && (y = y - n / 2 - h),
            Math.abs(y) < 1 / 1e3 && (y = 0),
            i.roundLengths && (y = Math.floor(y)),
            E % i.slidesPerGroup === 0 && c.push(y),
            u.push(y)) : (i.roundLengths && (y = Math.floor(y)),
            (E - Math.min(r.params.slidesPerGroupSkip, E)) % r.params.slidesPerGroup === 0 && c.push(y),
            u.push(y),
            y = y + M + h),
            r.virtualSize += M + h,
            C = M,
            E += 1
        }
    }
    if (r.virtualSize = Math.max(r.virtualSize, n) + w,
    a && d && (i.effect === "slide" || i.effect === "coverflow") && (t.style.width = `${r.virtualSize + h}px`),
    i.setWrapperSize && (t.style[r.getDirectionLabel("width")] = `${r.virtualSize + h}px`),
    A && r.grid.updateWrapperSize(M, c),
    !i.centeredSlides) {
        const k = [];
        for (let H = 0; H < c.length; H += 1) {
            let P = c[H];
            i.roundLengths && (P = Math.floor(P)),
            c[H] <= r.virtualSize - n && k.push(P)
        }
        c = k,
        Math.floor(r.virtualSize - n) - Math.floor(c[c.length - 1]) > 1 && c.push(r.virtualSize - n)
    }
    if (l && i.loop) {
        const k = m[0] + h;
        if (i.slidesPerGroup > 1) {
            const H = Math.ceil((r.virtual.slidesBefore + r.virtual.slidesAfter) / i.slidesPerGroup)
              , P = k * i.slidesPerGroup;
            for (let x = 0; x < H; x += 1)
                c.push(c[c.length - 1] + P)
        }
        for (let H = 0; H < r.virtual.slidesBefore + r.virtual.slidesAfter; H += 1)
            i.slidesPerGroup === 1 && c.push(c[c.length - 1] + k),
            u.push(u[u.length - 1] + k),
            r.virtualSize += k
    }
    if (c.length === 0 && (c = [0]),
    h !== 0) {
        const k = r.isHorizontal() && a ? "marginLeft" : r.getDirectionLabel("marginRight");
        o.filter( (H, P) => !i.cssMode || i.loop ? !0 : P !== o.length - 1).forEach(H => {
            H.style[k] = `${h}px`
        }
        )
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let k = 0;
        m.forEach(P => {
            k += P + (h || 0)
        }
        ),
        k -= h;
        const H = k - n;
        c = c.map(P => P <= 0 ? -v : P > H ? H + w : P)
    }
    if (i.centerInsufficientSlides) {
        let k = 0;
        m.forEach(P => {
            k += P + (h || 0)
        }
        ),
        k -= h;
        const H = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
        if (k + H < n) {
            const P = (n - k - H) / 2;
            c.forEach( (x, L) => {
                c[L] = x - P
            }
            ),
            u.forEach( (x, L) => {
                u[L] = x + P
            }
            )
        }
    }
    if (Object.assign(r, {
        slides: o,
        snapGrid: c,
        slidesGrid: u,
        slidesSizesGrid: m
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        Ve(t, "--swiper-centered-offset-before", `${-c[0]}px`),
        Ve(t, "--swiper-centered-offset-after", `${r.size / 2 - m[m.length - 1] / 2}px`);
        const k = -r.snapGrid[0]
          , H = -r.slidesGrid[0];
        r.snapGrid = r.snapGrid.map(P => P + k),
        r.slidesGrid = r.slidesGrid.map(P => P + H)
    }
    if (p !== f && r.emit("slidesLengthChange"),
    c.length !== g && (r.params.watchOverflow && r.checkOverflow(),
    r.emit("snapGridLengthChange")),
    u.length !== b && r.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit("slidesUpdated"),
    !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const k = `${i.containerModifierClass}backface-hidden`
          , H = r.el.classList.contains(k);
        p <= i.maxBackfaceHiddenSlides ? H || r.el.classList.add(k) : H && r.el.classList.remove(k)
    }
}
function br(r) {
    const e = this
      , i = []
      , t = e.virtual && e.params.virtual.enabled;
    let s = 0, n;
    typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
    const a = d => t ? e.slides[e.getSlideIndexByData(d)] : e.slides[d];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(d => {
                i.push(d)
            }
            );
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const d = e.activeIndex + n;
                if (d > e.slides.length && !t)
                    break;
                i.push(a(d))
            }
    else
        i.push(a(e.activeIndex));
    for (n = 0; n < i.length; n += 1)
        if (typeof i[n] < "u") {
            const d = i[n].offsetHeight;
            s = d > s ? d : s
        }
    (s || s === 0) && (e.wrapperEl.style.height = `${s}px`)
}
function yr() {
    const r = this
      , e = r.slides
      , i = r.isElement ? r.isHorizontal() ? r.wrapperEl.offsetLeft : r.wrapperEl.offsetTop : 0;
    for (let t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = (r.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop) - i - r.cssOverflowAdjustment()
}
const ps = (r, e, i) => {
    e && !r.classList.contains(i) ? r.classList.add(i) : !e && r.classList.contains(i) && r.classList.remove(i)
}
;
function Sr(r) {
    r === void 0 && (r = this && this.translate || 0);
    const e = this
      , i = e.params
      , {slides: t, rtlTranslate: s, snapGrid: n} = e;
    if (t.length === 0)
        return;
    typeof t[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -r;
    s && (a = r),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let d = i.spaceBetween;
    typeof d == "string" && d.indexOf("%") >= 0 ? d = parseFloat(d.replace("%", "")) / 100 * e.size : typeof d == "string" && (d = parseFloat(d));
    for (let l = 0; l < t.length; l += 1) {
        const f = t[l];
        let o = f.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (o -= t[0].swiperSlideOffset);
        const p = (a + (i.centeredSlides ? e.minTranslate() : 0) - o) / (f.swiperSlideSize + d)
          , c = (a - n[0] + (i.centeredSlides ? e.minTranslate() : 0) - o) / (f.swiperSlideSize + d)
          , u = -(a - o)
          , m = u + e.slidesSizesGrid[l]
          , v = u >= 0 && u <= e.size - e.slidesSizesGrid[l]
          , w = u >= 0 && u < e.size - 1 || m > 1 && m <= e.size || u <= 0 && m >= e.size;
        w && (e.visibleSlides.push(f),
        e.visibleSlidesIndexes.push(l)),
        ps(f, w, i.slideVisibleClass),
        ps(f, v, i.slideFullyVisibleClass),
        f.progress = s ? -p : p,
        f.originalProgress = s ? -c : c
    }
}
function Er(r) {
    const e = this;
    if (typeof r > "u") {
        const o = e.rtlTranslate ? -1 : 1;
        r = e && e.translate && e.translate * o || 0
    }
    const i = e.params
      , t = e.maxTranslate() - e.minTranslate();
    let {progress: s, isBeginning: n, isEnd: a, progressLoop: d} = e;
    const l = n
      , f = a;
    if (t === 0)
        s = 0,
        n = !0,
        a = !0;
    else {
        s = (r - e.minTranslate()) / t;
        const o = Math.abs(r - e.minTranslate()) < 1
          , p = Math.abs(r - e.maxTranslate()) < 1;
        n = o || s <= 0,
        a = p || s >= 1,
        o && (s = 0),
        p && (s = 1)
    }
    if (i.loop) {
        const o = e.getSlideIndexByData(0)
          , p = e.getSlideIndexByData(e.slides.length - 1)
          , c = e.slidesGrid[o]
          , u = e.slidesGrid[p]
          , m = e.slidesGrid[e.slidesGrid.length - 1]
          , v = Math.abs(r);
        v >= c ? d = (v - c) / m : d = (v + m - u) / m,
        d > 1 && (d -= 1)
    }
    Object.assign(e, {
        progress: s,
        progressLoop: d,
        isBeginning: n,
        isEnd: a
    }),
    (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(r),
    n && !l && e.emit("reachBeginning toEdge"),
    a && !f && e.emit("reachEnd toEdge"),
    (l && !n || f && !a) && e.emit("fromEdge"),
    e.emit("progress", s)
}
const ct = (r, e, i) => {
    e && !r.classList.contains(i) ? r.classList.add(i) : !e && r.classList.contains(i) && r.classList.remove(i)
}
;
function _r() {
    const r = this
      , {slides: e, params: i, slidesEl: t, activeIndex: s} = r
      , n = r.virtual && i.virtual.enabled
      , a = r.grid && i.grid && i.grid.rows > 1
      , d = p => oe(t, `.${i.slideClass}${p}, swiper-slide${p}`)[0];
    let l, f, o;
    if (n)
        if (i.loop) {
            let p = s - r.virtual.slidesBefore;
            p < 0 && (p = r.virtual.slides.length + p),
            p >= r.virtual.slides.length && (p -= r.virtual.slides.length),
            l = d(`[data-swiper-slide-index="${p}"]`)
        } else
            l = d(`[data-swiper-slide-index="${s}"]`);
    else
        a ? (l = e.filter(p => p.column === s)[0],
        o = e.filter(p => p.column === s + 1)[0],
        f = e.filter(p => p.column === s - 1)[0]) : l = e[s];
    l && (a || (o = dr(l, `.${i.slideClass}, swiper-slide`)[0],
    i.loop && !o && (o = e[0]),
    f = or(l, `.${i.slideClass}, swiper-slide`)[0],
    i.loop && !f === 0 && (f = e[e.length - 1]))),
    e.forEach(p => {
        ct(p, p === l, i.slideActiveClass),
        ct(p, p === o, i.slideNextClass),
        ct(p, p === f, i.slidePrevClass)
    }
    ),
    r.emitSlidesClasses()
}
const Ze = (r, e) => {
    if (!r || r.destroyed || !r.params)
        return;
    const i = () => r.isElement ? "swiper-slide" : `.${r.params.slideClass}`
      , t = e.closest(i());
    if (t) {
        let s = t.querySelector(`.${r.params.lazyPreloaderClass}`);
        !s && r.isElement && (t.shadowRoot ? s = t.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            t.shadowRoot && (s = t.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),
            s && s.remove())
        }
        )),
        s && s.remove()
    }
}
  , ft = (r, e) => {
    if (!r.slides[e])
        return;
    const i = r.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading")
}
  , vt = r => {
    if (!r || r.destroyed || !r.params)
        return;
    let e = r.params.lazyPreloadPrevNext;
    const i = r.slides.length;
    if (!i || !e || e < 0)
        return;
    e = Math.min(e, i);
    const t = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(r.params.slidesPerView)
      , s = r.activeIndex;
    if (r.params.grid && r.params.grid.rows > 1) {
        const a = s
          , d = [a - e];
        d.push(...Array.from({
            length: e
        }).map( (l, f) => a + t + f)),
        r.slides.forEach( (l, f) => {
            d.includes(l.column) && ft(r, f)
        }
        );
        return
    }
    const n = s + t - 1;
    if (r.params.rewind || r.params.loop)
        for (let a = s - e; a <= n + e; a += 1) {
            const d = (a % i + i) % i;
            (d < s || d > n) && ft(r, d)
        }
    else
        for (let a = Math.max(s - e, 0); a <= Math.min(n + e, i - 1); a += 1)
            a !== s && (a > n || a < s) && ft(r, a)
}
;
function Tr(r) {
    const {slidesGrid: e, params: i} = r
      , t = r.rtlTranslate ? r.translate : -r.translate;
    let s;
    for (let n = 0; n < e.length; n += 1)
        typeof e[n + 1] < "u" ? t >= e[n] && t < e[n + 1] - (e[n + 1] - e[n]) / 2 ? s = n : t >= e[n] && t < e[n + 1] && (s = n + 1) : t >= e[n] && (s = n);
    return i.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0),
    s
}
function xr(r) {
    const e = this
      , i = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: t, params: s, activeIndex: n, realIndex: a, snapIndex: d} = e;
    let l = r, f;
    const o = u => {
        let m = u - e.virtual.slidesBefore;
        return m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        m
    }
    ;
    if (typeof l > "u" && (l = Tr(e)),
    t.indexOf(i) >= 0)
        f = t.indexOf(i);
    else {
        const u = Math.min(s.slidesPerGroupSkip, l);
        f = u + Math.floor((l - u) / s.slidesPerGroup)
    }
    if (f >= t.length && (f = t.length - 1),
    l === n && !e.params.loop) {
        f !== d && (e.snapIndex = f,
        e.emit("snapIndexChange"));
        return
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = o(l);
        return
    }
    const p = e.grid && s.grid && s.grid.rows > 1;
    let c;
    if (e.virtual && s.virtual.enabled && s.loop)
        c = o(l);
    else if (p) {
        const u = e.slides.filter(v => v.column === l)[0];
        let m = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(m) && (m = Math.max(e.slides.indexOf(u), 0)),
        c = Math.floor(m / s.grid.rows)
    } else if (e.slides[l]) {
        const u = e.slides[l].getAttribute("data-swiper-slide-index");
        u ? c = parseInt(u, 10) : c = l
    } else
        c = l;
    Object.assign(e, {
        previousSnapIndex: d,
        snapIndex: f,
        previousRealIndex: a,
        realIndex: c,
        previousIndex: n,
        activeIndex: l
    }),
    e.initialized && vt(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (a !== c && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function Mr(r, e) {
    const i = this
      , t = i.params;
    let s = r.closest(`.${t.slideClass}, swiper-slide`);
    !s && i.isElement && e && e.length > 1 && e.includes(r) && [...e.slice(e.indexOf(r) + 1, e.length)].forEach(d => {
        !s && d.matches && d.matches(`.${t.slideClass}, swiper-slide`) && (s = d)
    }
    );
    let n = !1, a;
    if (s) {
        for (let d = 0; d < i.slides.length; d += 1)
            if (i.slides[d] === s) {
                n = !0,
                a = d;
                break
            }
    }
    if (s && n)
        i.clickedSlide = s,
        i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = a;
    else {
        i.clickedSlide = void 0,
        i.clickedIndex = void 0;
        return
    }
    t.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
var kr = {
    updateSize: vr,
    updateSlides: wr,
    updateAutoHeight: br,
    updateSlidesOffset: yr,
    updateSlidesProgress: Sr,
    updateProgress: Er,
    updateSlidesClasses: _r,
    updateActiveIndex: xr,
    updateClickedSlide: Mr
};
function Cr(r) {
    r === void 0 && (r = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: i, rtlTranslate: t, translate: s, wrapperEl: n} = e;
    if (i.virtualTranslate)
        return t ? -s : s;
    if (i.cssMode)
        return s;
    let a = ht(n, r);
    return a += e.cssOverflowAdjustment(),
    t && (a = -a),
    a || 0
}
function Pr(r, e) {
    const i = this
      , {rtlTranslate: t, params: s, wrapperEl: n, progress: a} = i;
    let d = 0
      , l = 0;
    const f = 0;
    i.isHorizontal() ? d = t ? -r : r : l = r,
    s.roundLengths && (d = Math.floor(d),
    l = Math.floor(l)),
    i.previousTranslate = i.translate,
    i.translate = i.isHorizontal() ? d : l,
    s.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -d : -l : s.virtualTranslate || (i.isHorizontal() ? d -= i.cssOverflowAdjustment() : l -= i.cssOverflowAdjustment(),
    n.style.transform = `translate3d(${d}px, ${l}px, ${f}px)`);
    let o;
    const p = i.maxTranslate() - i.minTranslate();
    p === 0 ? o = 0 : o = (r - i.minTranslate()) / p,
    o !== a && i.updateProgress(r),
    i.emit("setTranslate", i.translate, e)
}
function Lr() {
    return -this.snapGrid[0]
}
function Ar() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Ir(r, e, i, t, s) {
    r === void 0 && (r = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    t === void 0 && (t = !0);
    const n = this
      , {params: a, wrapperEl: d} = n;
    if (n.animating && a.preventInteractionOnTransition)
        return !1;
    const l = n.minTranslate()
      , f = n.maxTranslate();
    let o;
    if (t && r > l ? o = l : t && r < f ? o = f : o = r,
    n.updateProgress(o),
    a.cssMode) {
        const p = n.isHorizontal();
        if (e === 0)
            d[p ? "scrollLeft" : "scrollTop"] = -o;
        else {
            if (!n.support.smoothScroll)
                return Ds({
                    swiper: n,
                    targetPosition: -o,
                    side: p ? "left" : "top"
                }),
                !0;
            d.scrollTo({
                [p ? "left" : "top"]: -o,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0),
    n.setTranslate(o),
    i && (n.emit("beforeTransitionStart", e, s),
    n.emit("transitionEnd"))) : (n.setTransition(e),
    n.setTranslate(o),
    i && (n.emit("beforeTransitionStart", e, s),
    n.emit("transitionStart")),
    n.animating || (n.animating = !0,
    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(c) {
        !n || n.destroyed || c.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
        n.onTranslateToWrapperTransitionEnd = null,
        delete n.onTranslateToWrapperTransitionEnd,
        n.animating = !1,
        i && n.emit("transitionEnd"))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
    !0
}
var zr = {
    getTranslate: Cr,
    setTranslate: Pr,
    minTranslate: Lr,
    maxTranslate: Ar,
    translateTo: Ir
};
function Dr(r, e) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${r}ms`,
    i.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : ""),
    i.emit("setTransition", r, e)
}
function Ns(r) {
    let {swiper: e, runCallbacks: i, direction: t, step: s} = r;
    const {activeIndex: n, previousIndex: a} = e;
    let d = t;
    if (d || (n > a ? d = "next" : n < a ? d = "prev" : d = "reset"),
    e.emit(`transition${s}`),
    i && n !== a) {
        if (d === "reset") {
            e.emit(`slideResetTransition${s}`);
            return
        }
        e.emit(`slideChangeTransition${s}`),
        d === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
    }
}
function $r(r, e) {
    r === void 0 && (r = !0);
    const i = this
      , {params: t} = i;
    t.cssMode || (t.autoHeight && i.updateAutoHeight(),
    Ns({
        swiper: i,
        runCallbacks: r,
        direction: e,
        step: "Start"
    }))
}
function Or(r, e) {
    r === void 0 && (r = !0);
    const i = this
      , {params: t} = i;
    i.animating = !1,
    !t.cssMode && (i.setTransition(0),
    Ns({
        swiper: i,
        runCallbacks: r,
        direction: e,
        step: "End"
    }))
}
var Nr = {
    setTransition: Dr,
    transitionStart: $r,
    transitionEnd: Or
};
function Hr(r, e, i, t, s) {
    r === void 0 && (r = 0),
    i === void 0 && (i = !0),
    typeof r == "string" && (r = parseInt(r, 10));
    const n = this;
    let a = r;
    a < 0 && (a = 0);
    const {params: d, snapGrid: l, slidesGrid: f, previousIndex: o, activeIndex: p, rtlTranslate: c, wrapperEl: u, enabled: m} = n;
    if (!m && !t && !s || n.destroyed || n.animating && d.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = n.params.speed);
    const v = Math.min(n.params.slidesPerGroupSkip, a);
    let w = v + Math.floor((a - v) / n.params.slidesPerGroup);
    w >= l.length && (w = l.length - 1);
    const g = -l[w];
    if (d.normalizeSlideIndex)
        for (let h = 0; h < f.length; h += 1) {
            const y = -Math.floor(g * 100)
              , C = Math.floor(f[h] * 100)
              , E = Math.floor(f[h + 1] * 100);
            typeof f[h + 1] < "u" ? y >= C && y < E - (E - C) / 2 ? a = h : y >= C && y < E && (a = h + 1) : y >= C && (a = h)
        }
    if (n.initialized && a !== p && (!n.allowSlideNext && (c ? g > n.translate && g > n.minTranslate() : g < n.translate && g < n.minTranslate()) || !n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (p || 0) !== a))
        return !1;
    a !== (o || 0) && i && n.emit("beforeSlideChangeStart"),
    n.updateProgress(g);
    let b;
    if (a > p ? b = "next" : a < p ? b = "prev" : b = "reset",
    c && -g === n.translate || !c && g === n.translate)
        return n.updateActiveIndex(a),
        d.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        d.effect !== "slide" && n.setTranslate(g),
        b !== "reset" && (n.transitionStart(i, b),
        n.transitionEnd(i, b)),
        !1;
    if (d.cssMode) {
        const h = n.isHorizontal()
          , y = c ? g : -g;
        if (e === 0) {
            const C = n.virtual && n.params.virtual.enabled;
            C && (n.wrapperEl.style.scrollSnapType = "none",
            n._immediateVirtual = !0),
            C && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                u[h ? "scrollLeft" : "scrollTop"] = y
            }
            )) : u[h ? "scrollLeft" : "scrollTop"] = y,
            C && requestAnimationFrame( () => {
                n.wrapperEl.style.scrollSnapType = "",
                n._immediateVirtual = !1
            }
            )
        } else {
            if (!n.support.smoothScroll)
                return Ds({
                    swiper: n,
                    targetPosition: y,
                    side: h ? "left" : "top"
                }),
                !0;
            u.scrollTo({
                [h ? "left" : "top"]: y,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(e),
    n.setTranslate(g),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, t),
    n.transitionStart(i, b),
    e === 0 ? n.transitionEnd(i, b) : n.animating || (n.animating = !0,
    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(y) {
        !n || n.destroyed || y.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
        n.onSlideToWrapperTransitionEnd = null,
        delete n.onSlideToWrapperTransitionEnd,
        n.transitionEnd(i, b))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
    !0
}
function Br(r, e, i, t) {
    r === void 0 && (r = 0),
    i === void 0 && (i = !0),
    typeof r == "string" && (r = parseInt(r, 10));
    const s = this;
    if (s.destroyed)
        return;
    typeof e > "u" && (e = s.params.speed);
    const n = s.grid && s.params.grid && s.params.grid.rows > 1;
    let a = r;
    if (s.params.loop)
        if (s.virtual && s.params.virtual.enabled)
            a = a + s.virtual.slidesBefore;
        else {
            let d;
            if (n) {
                const c = a * s.params.grid.rows;
                d = s.slides.filter(u => u.getAttribute("data-swiper-slide-index") * 1 === c)[0].column
            } else
                d = s.getSlideIndexByData(a);
            const l = n ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length
              , {centeredSlides: f} = s.params;
            let o = s.params.slidesPerView;
            o === "auto" ? o = s.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(s.params.slidesPerView, 10)),
            f && o % 2 === 0 && (o = o + 1));
            let p = l - d < o;
            if (f && (p = p || d < Math.ceil(o / 2)),
            t && f && s.params.slidesPerView !== "auto" && !n && (p = !1),
            p) {
                const c = f ? d < s.activeIndex ? "prev" : "next" : d - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
                s.loopFix({
                    direction: c,
                    slideTo: !0,
                    activeSlideIndex: c === "next" ? d + 1 : d - l + 1,
                    slideRealIndex: c === "next" ? s.realIndex : void 0
                })
            }
            if (n) {
                const c = a * s.params.grid.rows;
                a = s.slides.filter(u => u.getAttribute("data-swiper-slide-index") * 1 === c)[0].column
            } else
                a = s.getSlideIndexByData(a)
        }
    return requestAnimationFrame( () => {
        s.slideTo(a, e, i, t)
    }
    ),
    s
}
function Vr(r, e, i) {
    e === void 0 && (e = !0);
    const t = this
      , {enabled: s, params: n, animating: a} = t;
    if (!s || t.destroyed)
        return t;
    typeof r > "u" && (r = t.params.speed);
    let d = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (d = Math.max(t.slidesPerViewDynamic("current", !0), 1));
    const l = t.activeIndex < n.slidesPerGroupSkip ? 1 : d
      , f = t.virtual && n.virtual.enabled;
    if (n.loop) {
        if (a && !f && n.loopPreventsSliding)
            return !1;
        if (t.loopFix({
            direction: "next"
        }),
        t._clientLeft = t.wrapperEl.clientLeft,
        t.activeIndex === t.slides.length - 1 && n.cssMode)
            return requestAnimationFrame( () => {
                t.slideTo(t.activeIndex + l, r, e, i)
            }
            ),
            !0
    }
    return n.rewind && t.isEnd ? t.slideTo(0, r, e, i) : t.slideTo(t.activeIndex + l, r, e, i)
}
function Gr(r, e, i) {
    e === void 0 && (e = !0);
    const t = this
      , {params: s, snapGrid: n, slidesGrid: a, rtlTranslate: d, enabled: l, animating: f} = t;
    if (!l || t.destroyed)
        return t;
    typeof r > "u" && (r = t.params.speed);
    const o = t.virtual && s.virtual.enabled;
    if (s.loop) {
        if (f && !o && s.loopPreventsSliding)
            return !1;
        t.loopFix({
            direction: "prev"
        }),
        t._clientLeft = t.wrapperEl.clientLeft
    }
    const p = d ? t.translate : -t.translate;
    function c(g) {
        return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
    }
    const u = c(p)
      , m = n.map(g => c(g));
    let v = n[m.indexOf(u) - 1];
    if (typeof v > "u" && s.cssMode) {
        let g;
        n.forEach( (b, h) => {
            u >= b && (g = h)
        }
        ),
        typeof g < "u" && (v = n[g > 0 ? g - 1 : g])
    }
    let w = 0;
    if (typeof v < "u" && (w = a.indexOf(v),
    w < 0 && (w = t.activeIndex - 1),
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (w = w - t.slidesPerViewDynamic("previous", !0) + 1,
    w = Math.max(w, 0))),
    s.rewind && t.isBeginning) {
        const g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1;
        return t.slideTo(g, r, e, i)
    } else if (s.loop && t.activeIndex === 0 && s.cssMode)
        return requestAnimationFrame( () => {
            t.slideTo(w, r, e, i)
        }
        ),
        !0;
    return t.slideTo(w, r, e, i)
}
function Rr(r, e, i) {
    e === void 0 && (e = !0);
    const t = this;
    if (!t.destroyed)
        return typeof r > "u" && (r = t.params.speed),
        t.slideTo(t.activeIndex, r, e, i)
}
function jr(r, e, i, t) {
    e === void 0 && (e = !0),
    t === void 0 && (t = .5);
    const s = this;
    if (s.destroyed)
        return;
    typeof r > "u" && (r = s.params.speed);
    let n = s.activeIndex;
    const a = Math.min(s.params.slidesPerGroupSkip, n)
      , d = a + Math.floor((n - a) / s.params.slidesPerGroup)
      , l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[d]) {
        const f = s.snapGrid[d]
          , o = s.snapGrid[d + 1];
        l - f > (o - f) * t && (n += s.params.slidesPerGroup)
    } else {
        const f = s.snapGrid[d - 1]
          , o = s.snapGrid[d];
        l - f <= (o - f) * t && (n -= s.params.slidesPerGroup)
    }
    return n = Math.max(n, 0),
    n = Math.min(n, s.slidesGrid.length - 1),
    s.slideTo(n, r, e, i)
}
function Xr() {
    const r = this;
    if (r.destroyed)
        return;
    const {params: e, slidesEl: i} = r
      , t = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
    let s = r.clickedIndex, n;
    const a = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (r.animating)
            return;
        n = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? s < r.loopedSlides - t / 2 || s > r.slides.length - r.loopedSlides + t / 2 ? (r.loopFix(),
        s = r.getSlideIndex(oe(i, `${a}[data-swiper-slide-index="${n}"]`)[0]),
        Ie( () => {
            r.slideTo(s)
        }
        )) : r.slideTo(s) : s > r.slides.length - t ? (r.loopFix(),
        s = r.getSlideIndex(oe(i, `${a}[data-swiper-slide-index="${n}"]`)[0]),
        Ie( () => {
            r.slideTo(s)
        }
        )) : r.slideTo(s)
    } else
        r.slideTo(s)
}
var Fr = {
    slideTo: Hr,
    slideToLoop: Br,
    slideNext: Vr,
    slidePrev: Gr,
    slideReset: Rr,
    slideToClosest: jr,
    slideToClickedSlide: Xr
};
function Yr(r) {
    const e = this
      , {params: i, slidesEl: t} = e;
    if (!i.loop || e.virtual && e.params.virtual.enabled)
        return;
    const s = () => {
        oe(t, `.${i.slideClass}, swiper-slide`).forEach( (p, c) => {
            p.setAttribute("data-swiper-slide-index", c)
        }
        )
    }
      , n = e.grid && i.grid && i.grid.rows > 1
      , a = i.slidesPerGroup * (n ? i.grid.rows : 1)
      , d = e.slides.length % a !== 0
      , l = n && e.slides.length % i.grid.rows !== 0
      , f = o => {
        for (let p = 0; p < o; p += 1) {
            const c = e.isElement ? me("swiper-slide", [i.slideBlankClass]) : me("div", [i.slideClass, i.slideBlankClass]);
            e.slidesEl.append(c)
        }
    }
    ;
    if (d) {
        if (i.loopAddBlankSlides) {
            const o = a - e.slides.length % a;
            f(o),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Qe("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else if (l) {
        if (i.loopAddBlankSlides) {
            const o = i.grid.rows - e.slides.length % i.grid.rows;
            f(o),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Qe("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else
        s();
    e.loopFix({
        slideRealIndex: r,
        direction: i.centeredSlides ? void 0 : "next"
    })
}
function Wr(r) {
    let {slideRealIndex: e, slideTo: i=!0, direction: t, setTranslate: s, activeSlideIndex: n, byController: a, byMousewheel: d} = r === void 0 ? {} : r;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: f, allowSlidePrev: o, allowSlideNext: p, slidesEl: c, params: u} = l
      , {centeredSlides: m} = u;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && u.virtual.enabled) {
        i && (!u.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : u.centeredSlides && l.snapIndex < u.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = o,
        l.allowSlideNext = p,
        l.emit("loopFix");
        return
    }
    let v = u.slidesPerView;
    v === "auto" ? v = l.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(u.slidesPerView, 10)),
    m && v % 2 === 0 && (v = v + 1));
    const w = u.slidesPerGroupAuto ? v : u.slidesPerGroup;
    let g = w;
    g % w !== 0 && (g += w - g % w),
    g += u.loopAdditionalSlides,
    l.loopedSlides = g;
    const b = l.grid && u.grid && u.grid.rows > 1;
    f.length < v + g ? Qe("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && u.grid.fill === "row" && Qe("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const h = []
      , y = [];
    let C = l.activeIndex;
    typeof n > "u" ? n = l.getSlideIndex(f.filter(x => x.classList.contains(u.slideActiveClass))[0]) : C = n;
    const E = t === "next" || !t
      , A = t === "prev" || !t;
    let M = 0
      , _ = 0;
    const k = b ? Math.ceil(f.length / u.grid.rows) : f.length
      , P = (b ? f[n].column : n) + (m && typeof s > "u" ? -v / 2 + .5 : 0);
    if (P < g) {
        M = Math.max(g - P, w);
        for (let x = 0; x < g - P; x += 1) {
            const L = x - Math.floor(x / k) * k;
            if (b) {
                const G = k - L - 1;
                for (let I = f.length - 1; I >= 0; I -= 1)
                    f[I].column === G && h.push(I)
            } else
                h.push(k - L - 1)
        }
    } else if (P + v > k - g) {
        _ = Math.max(P - (k - g * 2), w);
        for (let x = 0; x < _; x += 1) {
            const L = x - Math.floor(x / k) * k;
            b ? f.forEach( (G, I) => {
                G.column === L && y.push(I)
            }
            ) : y.push(L)
        }
    }
    if (l.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        l.__preventObserver__ = !1
    }
    ),
    A && h.forEach(x => {
        f[x].swiperLoopMoveDOM = !0,
        c.prepend(f[x]),
        f[x].swiperLoopMoveDOM = !1
    }
    ),
    E && y.forEach(x => {
        f[x].swiperLoopMoveDOM = !0,
        c.append(f[x]),
        f[x].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    u.slidesPerView === "auto" ? l.updateSlides() : b && (h.length > 0 && A || y.length > 0 && E) && l.slides.forEach( (x, L) => {
        l.grid.updateSlide(L, x, l.slides)
    }
    ),
    u.watchSlidesProgress && l.updateSlidesOffset(),
    i) {
        if (h.length > 0 && A) {
            if (typeof e > "u") {
                const x = l.slidesGrid[C]
                  , G = l.slidesGrid[C + M] - x;
                d ? l.setTranslate(l.translate - G) : (l.slideTo(C + Math.ceil(M), 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - G,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - G))
            } else if (s) {
                const x = b ? h.length / u.grid.rows : h.length;
                l.slideTo(l.activeIndex + x, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate
            }
        } else if (y.length > 0 && E)
            if (typeof e > "u") {
                const x = l.slidesGrid[C]
                  , G = l.slidesGrid[C - _] - x;
                d ? l.setTranslate(l.translate - G) : (l.slideTo(C - _, 0, !1, !0),
                s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - G,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - G))
            } else {
                const x = b ? y.length / u.grid.rows : y.length;
                l.slideTo(l.activeIndex - x, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = o,
    l.allowSlideNext = p,
    l.controller && l.controller.control && !a) {
        const x = {
            slideRealIndex: e,
            direction: t,
            setTranslate: s,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(L => {
            !L.destroyed && L.params.loop && L.loopFix({
                ...x,
                slideTo: L.params.slidesPerView === u.slidesPerView ? i : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...x,
            slideTo: l.controller.control.params.slidesPerView === u.slidesPerView ? i : !1
        })
    }
    l.emit("loopFix")
}
function qr() {
    const r = this
      , {params: e, slidesEl: i} = r;
    if (!e.loop || r.virtual && r.params.virtual.enabled)
        return;
    r.recalcSlides();
    const t = [];
    r.slides.forEach(s => {
        const n = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
        t[n] = s
    }
    ),
    r.slides.forEach(s => {
        s.removeAttribute("data-swiper-slide-index")
    }
    ),
    t.forEach(s => {
        i.append(s)
    }
    ),
    r.recalcSlides(),
    r.slideTo(r.realIndex, 0)
}
var Ur = {
    loopCreate: Yr,
    loopFix: Wr,
    loopDestroy: qr
};
function Zr(r) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    i.style.cursor = "move",
    i.style.cursor = r ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    )
}
function Kr() {
    const r = this;
    r.params.watchOverflow && r.isLocked || r.params.cssMode || (r.isElement && (r.__preventObserver__ = !0),
    r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    r.isElement && requestAnimationFrame( () => {
        r.__preventObserver__ = !1
    }
    ))
}
var Jr = {
    setGrabCursor: Zr,
    unsetGrabCursor: Kr
};
function Qr(r, e) {
    e === void 0 && (e = this);
    function i(t) {
        if (!t || t === de() || t === se())
            return null;
        t.assignedSlot && (t = t.assignedSlot);
        const s = t.closest(r);
        return !s && !t.getRootNode ? null : s || i(t.getRootNode().host)
    }
    return i(e)
}
function us(r, e, i) {
    const t = se()
      , {params: s} = r
      , n = s.edgeSwipeDetection
      , a = s.edgeSwipeThreshold;
    return n && (i <= a || i >= t.innerWidth - a) ? n === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function en(r) {
    const e = this
      , i = de();
    let t = r;
    t.originalEvent && (t = t.originalEvent);
    const s = e.touchEventsData;
    if (t.type === "pointerdown") {
        if (s.pointerId !== null && s.pointerId !== t.pointerId)
            return;
        s.pointerId = t.pointerId
    } else
        t.type === "touchstart" && t.targetTouches.length === 1 && (s.touchId = t.targetTouches[0].identifier);
    if (t.type === "touchstart") {
        us(e, t, t.targetTouches[0].pageX);
        return
    }
    const {params: n, touches: a, enabled: d} = e;
    if (!d || !n.simulateTouch && t.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
        return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let l = t.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l) || "which"in t && t.which === 3 || "button"in t && t.button > 0 || s.isTouched && s.isMoved)
        return;
    const f = !!n.noSwipingClass && n.noSwipingClass !== ""
      , o = t.composedPath ? t.composedPath() : t.path;
    f && t.target && t.target.shadowRoot && o && (l = o[0]);
    const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
      , c = !!(t.target && t.target.shadowRoot);
    if (n.noSwiping && (c ? Qr(p, l) : l.closest(p))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler))
        return;
    a.currentX = t.pageX,
    a.currentY = t.pageY;
    const u = a.currentX
      , m = a.currentY;
    if (!us(e, t, u))
        return;
    Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    a.startX = u,
    a.startY = m,
    s.touchStartTime = ge(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    n.threshold > 0 && (s.allowThresholdMove = !1);
    let v = !0;
    l.matches(s.focusableElements) && (v = !1,
    l.nodeName === "SELECT" && (s.isTouched = !1)),
    i.activeElement && i.activeElement.matches(s.focusableElements) && i.activeElement !== l && i.activeElement.blur();
    const w = v && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || w) && !l.isContentEditable && t.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", t)
}
function tn(r) {
    const e = de()
      , i = this
      , t = i.touchEventsData
      , {params: s, touches: n, rtlTranslate: a, enabled: d} = i;
    if (!d || !s.simulateTouch && r.pointerType === "mouse")
        return;
    let l = r;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (t.touchId !== null || l.pointerId !== t.pointerId))
        return;
    let f;
    if (l.type === "touchmove") {
        if (f = [...l.changedTouches].filter(E => E.identifier === t.touchId)[0],
        !f || f.identifier !== t.touchId)
            return
    } else
        f = l;
    if (!t.isTouched) {
        t.startMoving && t.isScrolling && i.emit("touchMoveOpposite", l);
        return
    }
    const o = f.pageX
      , p = f.pageY;
    if (l.preventedByNestedSwiper) {
        n.startX = o,
        n.startY = p;
        return
    }
    if (!i.allowTouchMove) {
        l.target.matches(t.focusableElements) || (i.allowClick = !1),
        t.isTouched && (Object.assign(n, {
            startX: o,
            startY: p,
            currentX: o,
            currentY: p
        }),
        t.touchStartTime = ge());
        return
    }
    if (s.touchReleaseOnEdges && !s.loop) {
        if (i.isVertical()) {
            if (p < n.startY && i.translate <= i.maxTranslate() || p > n.startY && i.translate >= i.minTranslate()) {
                t.isTouched = !1,
                t.isMoved = !1;
                return
            }
        } else if (o < n.startX && i.translate <= i.maxTranslate() || o > n.startX && i.translate >= i.minTranslate())
            return
    }
    if (e.activeElement && l.target === e.activeElement && l.target.matches(t.focusableElements)) {
        t.isMoved = !0,
        i.allowClick = !1;
        return
    }
    t.allowTouchCallbacks && i.emit("touchMove", l),
    n.previousX = n.currentX,
    n.previousY = n.currentY,
    n.currentX = o,
    n.currentY = p;
    const c = n.currentX - n.startX
      , u = n.currentY - n.startY;
    if (i.params.threshold && Math.sqrt(c ** 2 + u ** 2) < i.params.threshold)
        return;
    if (typeof t.isScrolling > "u") {
        let E;
        i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? t.isScrolling = !1 : c * c + u * u >= 25 && (E = Math.atan2(Math.abs(u), Math.abs(c)) * 180 / Math.PI,
        t.isScrolling = i.isHorizontal() ? E > s.touchAngle : 90 - E > s.touchAngle)
    }
    if (t.isScrolling && i.emit("touchMoveOpposite", l),
    typeof t.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (t.startMoving = !0),
    t.isScrolling || l.type === "touchmove" && t.preventTouchMoveFromPointerMove) {
        t.isTouched = !1;
        return
    }
    if (!t.startMoving)
        return;
    i.allowClick = !1,
    !s.cssMode && l.cancelable && l.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let m = i.isHorizontal() ? c : u
      , v = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    s.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1),
    v = Math.abs(v) * (a ? 1 : -1)),
    n.diff = m,
    m *= s.touchRatio,
    a && (m = -m,
    v = -v);
    const w = i.touchesDirection;
    i.swipeDirection = m > 0 ? "prev" : "next",
    i.touchesDirection = v > 0 ? "prev" : "next";
    const g = i.params.loop && !s.cssMode
      , b = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
    if (!t.isMoved) {
        if (g && b && i.loopFix({
            direction: i.swipeDirection
        }),
        t.startTranslate = i.getTranslate(),
        i.setTransition(0),
        i.animating) {
            const E = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            i.wrapperEl.dispatchEvent(E)
        }
        t.allowMomentumBounce = !1,
        s.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
        i.emit("sliderFirstMove", l)
    }
    let h;
    if (new Date().getTime(),
    t.isMoved && t.allowThresholdMove && w !== i.touchesDirection && g && b && Math.abs(m) >= 1) {
        Object.assign(n, {
            startX: o,
            startY: p,
            currentX: o,
            currentY: p,
            startTranslate: t.currentTranslate
        }),
        t.loopSwapReset = !0,
        t.startTranslate = t.currentTranslate;
        return
    }
    i.emit("sliderMove", l),
    t.isMoved = !0,
    t.currentTranslate = m + t.startTranslate;
    let y = !0
      , C = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (C = 0),
    m > 0 ? (g && b && !h && t.allowThresholdMove && t.currentTranslate > (s.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) && i.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    t.currentTranslate > i.minTranslate() && (y = !1,
    s.resistance && (t.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + t.startTranslate + m) ** C))) : m < 0 && (g && b && !h && t.allowThresholdMove && t.currentTranslate < (s.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) && i.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: i.slides.length - (s.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }),
    t.currentTranslate < i.maxTranslate() && (y = !1,
    s.resistance && (t.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - t.startTranslate - m) ** C))),
    y && (l.preventedByNestedSwiper = !0),
    !i.allowSlideNext && i.swipeDirection === "next" && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate),
    !i.allowSlidePrev && i.swipeDirection === "prev" && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate),
    !i.allowSlidePrev && !i.allowSlideNext && (t.currentTranslate = t.startTranslate),
    s.threshold > 0)
        if (Math.abs(m) > s.threshold || t.allowThresholdMove) {
            if (!t.allowThresholdMove) {
                t.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                t.currentTranslate = t.startTranslate,
                n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            t.currentTranslate = t.startTranslate;
            return
        }
    !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && i.freeMode || s.watchSlidesProgress) && (i.updateActiveIndex(),
    i.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(t.currentTranslate),
    i.setTranslate(t.currentTranslate))
}
function sn(r) {
    const e = this
      , i = e.touchEventsData;
    let t = r;
    t.originalEvent && (t = t.originalEvent);
    let s;
    if (t.type === "touchend" || t.type === "touchcancel") {
        if (s = [...t.changedTouches].filter(C => C.identifier === i.touchId)[0],
        !s || s.identifier !== i.touchId)
            return
    } else {
        if (i.touchId !== null || t.pointerId !== i.pointerId)
            return;
        s = t
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(t.type) && !(["pointercancel", "contextmenu"].includes(t.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    i.pointerId = null,
    i.touchId = null;
    const {params: a, touches: d, rtlTranslate: l, slidesGrid: f, enabled: o} = e;
    if (!o || !a.simulateTouch && t.pointerType === "mouse")
        return;
    if (i.allowTouchCallbacks && e.emit("touchEnd", t),
    i.allowTouchCallbacks = !1,
    !i.isTouched) {
        i.isMoved && a.grabCursor && e.setGrabCursor(!1),
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    a.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const p = ge()
      , c = p - i.touchStartTime;
    if (e.allowClick) {
        const C = t.path || t.composedPath && t.composedPath();
        e.updateClickedSlide(C && C[0] || t.target, C),
        e.emit("tap click", t),
        c < 300 && p - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", t)
    }
    if (i.lastClickTime = ge(),
    Ie( () => {
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !i.isTouched || !i.isMoved || !e.swipeDirection || d.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
        i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    i.isTouched = !1,
    i.isMoved = !1,
    i.startMoving = !1;
    let u;
    if (a.followFinger ? u = l ? e.translate : -e.translate : u = -i.currentTranslate,
    a.cssMode)
        return;
    if (a.freeMode && a.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: u
        });
        return
    }
    const m = u >= -e.maxTranslate() && !e.params.loop;
    let v = 0
      , w = e.slidesSizesGrid[0];
    for (let C = 0; C < f.length; C += C < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const E = C < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        typeof f[C + E] < "u" ? (m || u >= f[C] && u < f[C + E]) && (v = C,
        w = f[C + E] - f[C]) : (m || u >= f[C]) && (v = C,
        w = f[f.length - 1] - f[f.length - 2])
    }
    let g = null
      , b = null;
    a.rewind && (e.isBeginning ? b = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
    const h = (u - f[v]) / w
      , y = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (c > a.longSwipesMs) {
        if (!a.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (h >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? g : v + y) : e.slideTo(v)),
        e.swipeDirection === "prev" && (h > 1 - a.longSwipesRatio ? e.slideTo(v + y) : b !== null && h < 0 && Math.abs(h) > a.longSwipesRatio ? e.slideTo(b) : e.slideTo(v))
    } else {
        if (!a.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (t.target === e.navigation.nextEl || t.target === e.navigation.prevEl) ? t.target === e.navigation.nextEl ? e.slideTo(v + y) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : v + y),
        e.swipeDirection === "prev" && e.slideTo(b !== null ? b : v))
    }
}
function ms() {
    const r = this
      , {params: e, el: i} = r;
    if (i && i.offsetWidth === 0)
        return;
    e.breakpoints && r.setBreakpoint();
    const {allowSlideNext: t, allowSlidePrev: s, snapGrid: n} = r
      , a = r.virtual && r.params.virtual.enabled;
    r.allowSlideNext = !0,
    r.allowSlidePrev = !0,
    r.updateSize(),
    r.updateSlides(),
    r.updateSlidesClasses();
    const d = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides && !d ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.params.loop && !a ? r.slideToLoop(r.realIndex, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0),
    r.autoplay && r.autoplay.running && r.autoplay.paused && (clearTimeout(r.autoplay.resizeTimeout),
    r.autoplay.resizeTimeout = setTimeout( () => {
        r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.resume()
    }
    , 500)),
    r.allowSlidePrev = s,
    r.allowSlideNext = t,
    r.params.watchOverflow && n !== r.snapGrid && r.checkOverflow()
}
function rn(r) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && r.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (r.stopPropagation(),
    r.stopImmediatePropagation())))
}
function nn() {
    const r = this
      , {wrapperEl: e, rtlTranslate: i, enabled: t} = r;
    if (!t)
        return;
    r.previousTranslate = r.translate,
    r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop,
    r.translate === 0 && (r.translate = 0),
    r.updateActiveIndex(),
    r.updateSlidesClasses();
    let s;
    const n = r.maxTranslate() - r.minTranslate();
    n === 0 ? s = 0 : s = (r.translate - r.minTranslate()) / n,
    s !== r.progress && r.updateProgress(i ? -r.translate : r.translate),
    r.emit("setTranslate", r.translate, !1)
}
function an(r) {
    const e = this;
    Ze(e, r.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function ln() {
    const r = this;
    r.documentTouchHandlerProceeded || (r.documentTouchHandlerProceeded = !0,
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"))
}
const Hs = (r, e) => {
    const i = de()
      , {params: t, el: s, wrapperEl: n, device: a} = r
      , d = !!t.nested
      , l = e === "on" ? "addEventListener" : "removeEventListener"
      , f = e;
    i[l]("touchstart", r.onDocumentTouchStart, {
        passive: !1,
        capture: d
    }),
    s[l]("touchstart", r.onTouchStart, {
        passive: !1
    }),
    s[l]("pointerdown", r.onTouchStart, {
        passive: !1
    }),
    i[l]("touchmove", r.onTouchMove, {
        passive: !1,
        capture: d
    }),
    i[l]("pointermove", r.onTouchMove, {
        passive: !1,
        capture: d
    }),
    i[l]("touchend", r.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointerup", r.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointercancel", r.onTouchEnd, {
        passive: !0
    }),
    i[l]("touchcancel", r.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointerout", r.onTouchEnd, {
        passive: !0
    }),
    i[l]("pointerleave", r.onTouchEnd, {
        passive: !0
    }),
    i[l]("contextmenu", r.onTouchEnd, {
        passive: !0
    }),
    (t.preventClicks || t.preventClicksPropagation) && s[l]("click", r.onClick, !0),
    t.cssMode && n[l]("scroll", r.onScroll),
    t.updateOnWindowResize ? r[f](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ms, !0) : r[f]("observerUpdate", ms, !0),
    s[l]("load", r.onLoad, {
        capture: !0
    })
}
;
function on() {
    const r = this
      , {params: e} = r;
    r.onTouchStart = en.bind(r),
    r.onTouchMove = tn.bind(r),
    r.onTouchEnd = sn.bind(r),
    r.onDocumentTouchStart = ln.bind(r),
    e.cssMode && (r.onScroll = nn.bind(r)),
    r.onClick = rn.bind(r),
    r.onLoad = an.bind(r),
    Hs(r, "on")
}
function dn() {
    Hs(this, "off")
}
var cn = {
    attachEvents: on,
    detachEvents: dn
};
const hs = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function fn() {
    const r = this
      , {realIndex: e, initialized: i, params: t, el: s} = r
      , n = t.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const a = r.getBreakpoint(n, r.params.breakpointsBase, r.el);
    if (!a || r.currentBreakpoint === a)
        return;
    const l = (a in n ? n[a] : void 0) || r.originalParams
      , f = hs(r, t)
      , o = hs(r, l)
      , p = r.params.grabCursor
      , c = l.grabCursor
      , u = t.enabled;
    f && !o ? (s.classList.remove(`${t.containerModifierClass}grid`, `${t.containerModifierClass}grid-column`),
    r.emitContainerClasses()) : !f && o && (s.classList.add(`${t.containerModifierClass}grid`),
    (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && t.grid.fill === "column") && s.classList.add(`${t.containerModifierClass}grid-column`),
    r.emitContainerClasses()),
    p && !c ? r.unsetGrabCursor() : !p && c && r.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(h => {
        if (typeof l[h] > "u")
            return;
        const y = t[h] && t[h].enabled
          , C = l[h] && l[h].enabled;
        y && !C && r[h].disable(),
        !y && C && r[h].enable()
    }
    );
    const m = l.direction && l.direction !== t.direction
      , v = t.loop && (l.slidesPerView !== t.slidesPerView || m)
      , w = t.loop;
    m && i && r.changeDirection(),
    ue(r.params, l);
    const g = r.params.enabled
      , b = r.params.loop;
    Object.assign(r, {
        allowTouchMove: r.params.allowTouchMove,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev
    }),
    u && !g ? r.disable() : !u && g && r.enable(),
    r.currentBreakpoint = a,
    r.emit("_beforeBreakpoint", l),
    i && (v ? (r.loopDestroy(),
    r.loopCreate(e),
    r.updateSlides()) : !w && b ? (r.loopCreate(e),
    r.updateSlides()) : w && !b && r.loopDestroy()),
    r.emit("breakpoint", l)
}
function pn(r, e, i) {
    if (e === void 0 && (e = "window"),
    !r || e === "container" && !i)
        return;
    let t = !1;
    const s = se()
      , n = e === "window" ? s.innerHeight : i.clientHeight
      , a = Object.keys(r).map(d => {
        if (typeof d == "string" && d.indexOf("@") === 0) {
            const l = parseFloat(d.substr(1));
            return {
                value: n * l,
                point: d
            }
        }
        return {
            value: d,
            point: d
        }
    }
    );
    a.sort( (d, l) => parseInt(d.value, 10) - parseInt(l.value, 10));
    for (let d = 0; d < a.length; d += 1) {
        const {point: l, value: f} = a[d];
        e === "window" ? s.matchMedia(`(min-width: ${f}px)`).matches && (t = l) : f <= i.clientWidth && (t = l)
    }
    return t || "max"
}
var un = {
    setBreakpoint: fn,
    getBreakpoint: pn
};
function mn(r, e) {
    const i = [];
    return r.forEach(t => {
        typeof t == "object" ? Object.keys(t).forEach(s => {
            t[s] && i.push(e + s)
        }
        ) : typeof t == "string" && i.push(e + t)
    }
    ),
    i
}
function hn() {
    const r = this
      , {classNames: e, params: i, rtl: t, el: s, device: n} = r
      , a = mn(["initialized", i.direction, {
        "free-mode": r.params.freeMode && i.freeMode.enabled
    }, {
        autoheight: i.autoHeight
    }, {
        rtl: t
    }, {
        grid: i.grid && i.grid.rows > 1
    }, {
        "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
    }, {
        android: n.android
    }, {
        ios: n.ios
    }, {
        "css-mode": i.cssMode
    }, {
        centered: i.cssMode && i.centeredSlides
    }, {
        "watch-progress": i.watchSlidesProgress
    }], i.containerModifierClass);
    e.push(...a),
    s.classList.add(...e),
    r.emitContainerClasses()
}
function gn() {
    const r = this
      , {el: e, classNames: i} = r;
    e.classList.remove(...i),
    r.emitContainerClasses()
}
var vn = {
    addClasses: hn,
    removeClasses: gn
};
function wn() {
    const r = this
      , {isLocked: e, params: i} = r
      , {slidesOffsetBefore: t} = i;
    if (t) {
        const s = r.slides.length - 1
          , n = r.slidesGrid[s] + r.slidesSizesGrid[s] + t * 2;
        r.isLocked = r.size > n
    } else
        r.isLocked = r.snapGrid.length === 1;
    i.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked),
    i.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked),
    e && e !== r.isLocked && (r.isEnd = !1),
    e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock")
}
var bn = {
    checkOverflow: wn
}
  , wt = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function yn(r, e) {
    return function(t) {
        t === void 0 && (t = {});
        const s = Object.keys(t)[0]
          , n = t[s];
        if (typeof n != "object" || n === null) {
            ue(e, t);
            return
        }
        if (r[s] === !0 && (r[s] = {
            enabled: !0
        }),
        s === "navigation" && r[s] && r[s].enabled && !r[s].prevEl && !r[s].nextEl && (r[s].auto = !0),
        ["pagination", "scrollbar"].indexOf(s) >= 0 && r[s] && r[s].enabled && !r[s].el && (r[s].auto = !0),
        !(s in r && "enabled"in n)) {
            ue(e, t);
            return
        }
        typeof r[s] == "object" && !("enabled"in r[s]) && (r[s].enabled = !0),
        r[s] || (r[s] = {
            enabled: !1
        }),
        ue(e, t)
    }
}
const pt = {
    eventsEmitter: gr,
    update: kr,
    translate: zr,
    transition: Nr,
    slide: Fr,
    loop: Ur,
    grabCursor: Jr,
    events: cn,
    breakpoints: un,
    checkOverflow: bn,
    classes: vn
}
  , ut = {};
class pe {
    constructor() {
        let e, i;
        for (var t = arguments.length, s = new Array(t), n = 0; n < t; n++)
            s[n] = arguments[n];
        s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? i = s[0] : [e,i] = s,
        i || (i = {}),
        i = ue({}, i),
        e && !i.el && (i.el = e);
        const a = de();
        if (i.el && typeof i.el == "string" && a.querySelectorAll(i.el).length > 1) {
            const o = [];
            return a.querySelectorAll(i.el).forEach(p => {
                const c = ue({}, i, {
                    el: p
                });
                o.push(new pe(c))
            }
            ),
            o
        }
        const d = this;
        d.__swiper__ = !0,
        d.support = $s(),
        d.device = Os({
            userAgent: i.userAgent
        }),
        d.browser = ur(),
        d.eventsListeners = {},
        d.eventsAnyListeners = [],
        d.modules = [...d.__modules__],
        i.modules && Array.isArray(i.modules) && d.modules.push(...i.modules);
        const l = {};
        d.modules.forEach(o => {
            o({
                params: i,
                swiper: d,
                extendParams: yn(i, l),
                on: d.on.bind(d),
                once: d.once.bind(d),
                off: d.off.bind(d),
                emit: d.emit.bind(d)
            })
        }
        );
        const f = ue({}, wt, l);
        return d.params = ue({}, f, ut, i),
        d.originalParams = ue({}, d.params),
        d.passedParams = ue({}, i),
        d.params && d.params.on && Object.keys(d.params.on).forEach(o => {
            d.on(o, d.params.on[o])
        }
        ),
        d.params && d.params.onAny && d.onAny(d.params.onAny),
        Object.assign(d, {
            enabled: d.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return d.params.direction === "horizontal"
            },
            isVertical() {
                return d.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: d.params.allowSlideNext,
            allowSlidePrev: d.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: d.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: d.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        d.emit("_swiper"),
        d.params.init && d.init(),
        d
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: i, params: t} = this
          , s = oe(i, `.${t.slideClass}, swiper-slide`)
          , n = je(s[0]);
        return je(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(i => i.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: i, params: t} = e;
        e.slides = oe(i, `.${t.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, i) {
        const t = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = t.minTranslate()
          , a = (t.maxTranslate() - s) * e + s;
        t.translateTo(a, typeof i > "u" ? 0 : i),
        t.updateActiveIndex(),
        t.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = e.el.className.split(" ").filter(t => t.indexOf("swiper") === 0 || t.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(e) {
        const i = this;
        return i.destroyed ? "" : e.className.split(" ").filter(t => t.indexOf("swiper-slide") === 0 || t.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const i = [];
        e.slides.forEach(t => {
            const s = e.getSlideClasses(t);
            i.push({
                slideEl: t,
                classNames: s
            }),
            e.emit("_slideClass", t, s)
        }
        ),
        e.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(e, i) {
        e === void 0 && (e = "current"),
        i === void 0 && (i = !1);
        const t = this
          , {params: s, slides: n, slidesGrid: a, slidesSizesGrid: d, size: l, activeIndex: f} = t;
        let o = 1;
        if (typeof s.slidesPerView == "number")
            return s.slidesPerView;
        if (s.centeredSlides) {
            let p = n[f] ? Math.ceil(n[f].swiperSlideSize) : 0, c;
            for (let u = f + 1; u < n.length; u += 1)
                n[u] && !c && (p += Math.ceil(n[u].swiperSlideSize),
                o += 1,
                p > l && (c = !0));
            for (let u = f - 1; u >= 0; u -= 1)
                n[u] && !c && (p += n[u].swiperSlideSize,
                o += 1,
                p > l && (c = !0))
        } else if (e === "current")
            for (let p = f + 1; p < n.length; p += 1)
                (i ? a[p] + d[p] - a[f] < l : a[p] - a[f] < l) && (o += 1);
        else
            for (let p = f - 1; p >= 0; p -= 1)
                a[f] - a[p] < l && (o += 1);
        return o
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: i, params: t} = e;
        t.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a => {
            a.complete && Ze(e, a)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function s() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate
              , d = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(d),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let n;
        if (t.freeMode && t.freeMode.enabled && !t.cssMode)
            s(),
            t.autoHeight && e.updateAutoHeight();
        else {
            if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !t.centeredSlides) {
                const a = e.virtual && t.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(a.length - 1, 0, !1, !0)
            } else
                n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || s()
        }
        t.watchOverflow && i !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, i) {
        i === void 0 && (i = !0);
        const t = this
          , s = t.params.direction;
        return e || (e = s === "horizontal" ? "vertical" : "horizontal"),
        e === s || e !== "horizontal" && e !== "vertical" || (t.el.classList.remove(`${t.params.containerModifierClass}${s}`),
        t.el.classList.add(`${t.params.containerModifierClass}${e}`),
        t.emitContainerClasses(),
        t.params.direction = e,
        t.slides.forEach(n => {
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }
        ),
        t.emit("changeDirection"),
        i && t.update()),
        t
    }
    changeLanguageDirection(e) {
        const i = this;
        i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl",
        i.rtlTranslate = i.params.direction === "horizontal" && i.rtl,
        i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "ltr"),
        i.update())
    }
    mount(e) {
        const i = this;
        if (i.mounted)
            return !0;
        let t = e || i.params.el;
        if (typeof t == "string" && (t = document.querySelector(t)),
        !t)
            return !1;
        t.swiper = i,
        t.parentNode && t.parentNode.host && t.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0);
        const s = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = t && t.shadowRoot && t.shadowRoot.querySelector ? t.shadowRoot.querySelector(s()) : oe(t, s())[0];
        return !a && i.params.createElements && (a = me("div", i.params.wrapperClass),
        t.append(a),
        oe(t, `.${i.params.slideClass}`).forEach(d => {
            a.append(d)
        }
        )),
        Object.assign(i, {
            el: t,
            wrapperEl: a,
            slidesEl: i.isElement && !t.parentNode.host.slideSlots ? t.parentNode.host : a,
            hostEl: i.isElement ? t.parentNode.host : t,
            mounted: !0,
            rtl: t.dir.toLowerCase() === "rtl" || Pe(t, "direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || Pe(t, "direction") === "rtl"),
            wrongRTL: Pe(a, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const i = this;
        if (i.initialized || i.mount(e) === !1)
            return i;
        i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
        i.params.loop && i.loopCreate(),
        i.attachEvents();
        const s = [...i.el.querySelectorAll('[loading="lazy"]')];
        return i.isElement && s.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach(n => {
            n.complete ? Ze(i, n) : n.addEventListener("load", a => {
                Ze(i, a.target)
            }
            )
        }
        ),
        vt(i),
        i.initialized = !0,
        vt(i),
        i.emit("init"),
        i.emit("afterInit"),
        i
    }
    destroy(e, i) {
        e === void 0 && (e = !0),
        i === void 0 && (i = !0);
        const t = this
          , {params: s, el: n, wrapperEl: a, slides: d} = t;
        return typeof t.params > "u" || t.destroyed || (t.emit("beforeDestroy"),
        t.initialized = !1,
        t.detachEvents(),
        s.loop && t.loopDestroy(),
        i && (t.removeClasses(),
        n.removeAttribute("style"),
        a.removeAttribute("style"),
        d && d.length && d.forEach(l => {
            l.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        t.emit("destroy"),
        Object.keys(t.eventsListeners).forEach(l => {
            t.off(l)
        }
        ),
        e !== !1 && (t.el.swiper = null,
        nr(t)),
        t.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        ue(ut, e)
    }
    static get extendedDefaults() {
        return ut
    }
    static get defaults() {
        return wt
    }
    static installModule(e) {
        pe.prototype.__modules__ || (pe.prototype.__modules__ = []);
        const i = pe.prototype.__modules__;
        typeof e == "function" && i.indexOf(e) < 0 && i.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(i => pe.installModule(i)),
        pe) : (pe.installModule(e),
        pe)
    }
}
Object.keys(pt).forEach(r => {
    Object.keys(pt[r]).forEach(e => {
        pe.prototype[e] = pt[r][e]
    }
    )
}
);
pe.use([mr, hr]);
function Sn(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    i({
        virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let n;
    const a = de();
    e.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const d = a.createElement("div");
    function l(m, v) {
        const w = e.params.virtual;
        if (w.cache && e.virtual.cache[v])
            return e.virtual.cache[v];
        let g;
        return w.renderSlide ? (g = w.renderSlide.call(e, m, v),
        typeof g == "string" && (d.innerHTML = g,
        g = d.children[0])) : e.isElement ? g = me("swiper-slide") : g = me("div", e.params.slideClass),
        g.setAttribute("data-swiper-slide-index", v),
        w.renderSlide || (g.innerHTML = m),
        w.cache && (e.virtual.cache[v] = g),
        g
    }
    function f(m, v) {
        const {slidesPerView: w, slidesPerGroup: g, centeredSlides: b, loop: h, initialSlide: y} = e.params;
        if (v && !h && y > 0)
            return;
        const {addSlidesBefore: C, addSlidesAfter: E} = e.params.virtual
          , {from: A, to: M, slides: _, slidesGrid: k, offset: H} = e.virtual;
        e.params.cssMode || e.updateActiveIndex();
        const P = e.activeIndex || 0;
        let x;
        e.rtlTranslate ? x = "right" : x = e.isHorizontal() ? "left" : "top";
        let L, G;
        b ? (L = Math.floor(w / 2) + g + E,
        G = Math.floor(w / 2) + g + C) : (L = w + (g - 1) + E,
        G = (h ? w : g) + C);
        let I = P - G
          , z = P + L;
        h || (I = Math.max(I, 0),
        z = Math.min(z, _.length - 1));
        let B = (e.slidesGrid[I] || 0) - (e.slidesGrid[0] || 0);
        h && P >= G ? (I -= G,
        b || (B += e.slidesGrid[0])) : h && P < G && (I = -G,
        b && (B += e.slidesGrid[0])),
        Object.assign(e.virtual, {
            from: I,
            to: z,
            offset: B,
            slidesGrid: e.slidesGrid,
            slidesBefore: G,
            slidesAfter: L
        });
        function F() {
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            s("virtualUpdate")
        }
        if (A === I && M === z && !m) {
            e.slidesGrid !== k && B !== H && e.slides.forEach(U => {
                U.style[x] = `${B - Math.abs(e.cssOverflowAdjustment())}px`
            }
            ),
            e.updateProgress(),
            s("virtualUpdate");
            return
        }
        if (e.params.virtual.renderExternal) {
            e.params.virtual.renderExternal.call(e, {
                offset: B,
                from: I,
                to: z,
                slides: function() {
                    const K = [];
                    for (let te = I; te <= z; te += 1)
                        K.push(_[te]);
                    return K
                }()
            }),
            e.params.virtual.renderExternalUpdate ? F() : s("virtualUpdate");
            return
        }
        const Z = []
          , V = []
          , X = U => {
            let K = U;
            return U < 0 ? K = _.length + U : K >= _.length && (K = K - _.length),
            K
        }
        ;
        if (m)
            e.slides.filter(U => U.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(U => {
                U.remove()
            }
            );
        else
            for (let U = A; U <= M; U += 1)
                if (U < I || U > z) {
                    const K = X(U);
                    e.slides.filter(te => te.matches(`.${e.params.slideClass}[data-swiper-slide-index="${K}"], swiper-slide[data-swiper-slide-index="${K}"]`)).forEach(te => {
                        te.remove()
                    }
                    )
                }
        const q = h ? -_.length : 0
          , Q = h ? _.length * 2 : _.length;
        for (let U = q; U < Q; U += 1)
            if (U >= I && U <= z) {
                const K = X(U);
                typeof M > "u" || m ? V.push(K) : (U > M && V.push(K),
                U < A && Z.push(K))
            }
        if (V.forEach(U => {
            e.slidesEl.append(l(_[U], U))
        }
        ),
        h)
            for (let U = Z.length - 1; U >= 0; U -= 1) {
                const K = Z[U];
                e.slidesEl.prepend(l(_[K], K))
            }
        else
            Z.sort( (U, K) => K - U),
            Z.forEach(U => {
                e.slidesEl.prepend(l(_[U], U))
            }
            );
        oe(e.slidesEl, ".swiper-slide, swiper-slide").forEach(U => {
            U.style[x] = `${B - Math.abs(e.cssOverflowAdjustment())}px`
        }
        ),
        F()
    }
    function o(m) {
        if (typeof m == "object" && "length"in m)
            for (let v = 0; v < m.length; v += 1)
                m[v] && e.virtual.slides.push(m[v]);
        else
            e.virtual.slides.push(m);
        f(!0)
    }
    function p(m) {
        const v = e.activeIndex;
        let w = v + 1
          , g = 1;
        if (Array.isArray(m)) {
            for (let b = 0; b < m.length; b += 1)
                m[b] && e.virtual.slides.unshift(m[b]);
            w = v + m.length,
            g = m.length
        } else
            e.virtual.slides.unshift(m);
        if (e.params.virtual.cache) {
            const b = e.virtual.cache
              , h = {};
            Object.keys(b).forEach(y => {
                const C = b[y]
                  , E = C.getAttribute("data-swiper-slide-index");
                E && C.setAttribute("data-swiper-slide-index", parseInt(E, 10) + g),
                h[parseInt(y, 10) + g] = C
            }
            ),
            e.virtual.cache = h
        }
        f(!0),
        e.slideTo(w, 0)
    }
    function c(m) {
        if (typeof m > "u" || m === null)
            return;
        let v = e.activeIndex;
        if (Array.isArray(m))
            for (let w = m.length - 1; w >= 0; w -= 1)
                e.params.virtual.cache && (delete e.virtual.cache[m[w]],
                Object.keys(e.virtual.cache).forEach(g => {
                    g > m && (e.virtual.cache[g - 1] = e.virtual.cache[g],
                    e.virtual.cache[g - 1].setAttribute("data-swiper-slide-index", g - 1),
                    delete e.virtual.cache[g])
                }
                )),
                e.virtual.slides.splice(m[w], 1),
                m[w] < v && (v -= 1),
                v = Math.max(v, 0);
        else
            e.params.virtual.cache && (delete e.virtual.cache[m],
            Object.keys(e.virtual.cache).forEach(w => {
                w > m && (e.virtual.cache[w - 1] = e.virtual.cache[w],
                e.virtual.cache[w - 1].setAttribute("data-swiper-slide-index", w - 1),
                delete e.virtual.cache[w])
            }
            )),
            e.virtual.slides.splice(m, 1),
            m < v && (v -= 1),
            v = Math.max(v, 0);
        f(!0),
        e.slideTo(v, 0)
    }
    function u() {
        e.virtual.slides = [],
        e.params.virtual.cache && (e.virtual.cache = {}),
        f(!0),
        e.slideTo(0, 0)
    }
    t("beforeInit", () => {
        if (!e.params.virtual.enabled)
            return;
        let m;
        if (typeof e.passedParams.virtual.slides > "u") {
            const v = [...e.slidesEl.children].filter(w => w.matches(`.${e.params.slideClass}, swiper-slide`));
            v && v.length && (e.virtual.slides = [...v],
            m = !0,
            v.forEach( (w, g) => {
                w.setAttribute("data-swiper-slide-index", g),
                e.virtual.cache[g] = w,
                w.remove()
            }
            ))
        }
        m || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        e.params.watchSlidesProgress = !0,
        e.originalParams.watchSlidesProgress = !0,
        f(!1, !0)
    }
    ),
    t("setTranslate", () => {
        e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(n),
        n = setTimeout( () => {
            f()
        }
        , 100)) : f())
    }
    ),
    t("init update resize", () => {
        e.params.virtual.enabled && e.params.cssMode && Ve(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
    }
    ),
    Object.assign(e.virtual, {
        appendSlide: o,
        prependSlide: p,
        removeSlide: c,
        removeAllSlides: u,
        update: f
    })
}
function En(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    const n = de()
      , a = se();
    e.keyboard = {
        enabled: !1
    },
    i({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    });
    function d(o) {
        if (!e.enabled)
            return;
        const {rtlTranslate: p} = e;
        let c = o;
        c.originalEvent && (c = c.originalEvent);
        const u = c.keyCode || c.charCode
          , m = e.params.keyboard.pageUpDown
          , v = m && u === 33
          , w = m && u === 34
          , g = u === 37
          , b = u === 39
          , h = u === 38
          , y = u === 40;
        if (!e.allowSlideNext && (e.isHorizontal() && b || e.isVertical() && y || w) || !e.allowSlidePrev && (e.isHorizontal() && g || e.isVertical() && h || v))
            return !1;
        if (!(c.shiftKey || c.altKey || c.ctrlKey || c.metaKey) && !(n.activeElement && n.activeElement.nodeName && (n.activeElement.nodeName.toLowerCase() === "input" || n.activeElement.nodeName.toLowerCase() === "textarea"))) {
            if (e.params.keyboard.onlyInViewport && (v || w || g || b || h || y)) {
                let C = !1;
                if (Ae(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && Ae(e.el, `.${e.params.slideActiveClass}`).length === 0)
                    return;
                const E = e.el
                  , A = E.clientWidth
                  , M = E.clientHeight
                  , _ = a.innerWidth
                  , k = a.innerHeight
                  , H = et(E);
                p && (H.left -= E.scrollLeft);
                const P = [[H.left, H.top], [H.left + A, H.top], [H.left, H.top + M], [H.left + A, H.top + M]];
                for (let x = 0; x < P.length; x += 1) {
                    const L = P[x];
                    if (L[0] >= 0 && L[0] <= _ && L[1] >= 0 && L[1] <= k) {
                        if (L[0] === 0 && L[1] === 0)
                            continue;
                        C = !0
                    }
                }
                if (!C)
                    return
            }
            e.isHorizontal() ? ((v || w || g || b) && (c.preventDefault ? c.preventDefault() : c.returnValue = !1),
            ((w || b) && !p || (v || g) && p) && e.slideNext(),
            ((v || g) && !p || (w || b) && p) && e.slidePrev()) : ((v || w || h || y) && (c.preventDefault ? c.preventDefault() : c.returnValue = !1),
            (w || y) && e.slideNext(),
            (v || h) && e.slidePrev()),
            s("keyPress", u)
        }
    }
    function l() {
        e.keyboard.enabled || (n.addEventListener("keydown", d),
        e.keyboard.enabled = !0)
    }
    function f() {
        e.keyboard.enabled && (n.removeEventListener("keydown", d),
        e.keyboard.enabled = !1)
    }
    t("init", () => {
        e.params.keyboard.enabled && l()
    }
    ),
    t("destroy", () => {
        e.keyboard.enabled && f()
    }
    ),
    Object.assign(e.keyboard, {
        enable: l,
        disable: f
    })
}
function _n(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    const n = se();
    i({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }),
    e.mousewheel = {
        enabled: !1
    };
    let a, d = ge(), l;
    const f = [];
    function o(h) {
        let A = 0
          , M = 0
          , _ = 0
          , k = 0;
        return "detail"in h && (M = h.detail),
        "wheelDelta"in h && (M = -h.wheelDelta / 120),
        "wheelDeltaY"in h && (M = -h.wheelDeltaY / 120),
        "wheelDeltaX"in h && (A = -h.wheelDeltaX / 120),
        "axis"in h && h.axis === h.HORIZONTAL_AXIS && (A = M,
        M = 0),
        _ = A * 10,
        k = M * 10,
        "deltaY"in h && (k = h.deltaY),
        "deltaX"in h && (_ = h.deltaX),
        h.shiftKey && !_ && (_ = k,
        k = 0),
        (_ || k) && h.deltaMode && (h.deltaMode === 1 ? (_ *= 40,
        k *= 40) : (_ *= 800,
        k *= 800)),
        _ && !A && (A = _ < 1 ? -1 : 1),
        k && !M && (M = k < 1 ? -1 : 1),
        {
            spinX: A,
            spinY: M,
            pixelX: _,
            pixelY: k
        }
    }
    function p() {
        e.enabled && (e.mouseEntered = !0)
    }
    function c() {
        e.enabled && (e.mouseEntered = !1)
    }
    function u(h) {
        return e.params.mousewheel.thresholdDelta && h.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && ge() - d < e.params.mousewheel.thresholdTime ? !1 : h.delta >= 6 && ge() - d < 60 ? !0 : (h.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(),
        s("scroll", h.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(),
        s("scroll", h.raw)),
        d = new n.Date().getTime(),
        !1)
    }
    function m(h) {
        const y = e.params.mousewheel;
        if (h.direction < 0) {
            if (e.isEnd && !e.params.loop && y.releaseOnEdges)
                return !0
        } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges)
            return !0;
        return !1
    }
    function v(h) {
        let y = h
          , C = !0;
        if (!e.enabled || h.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
            return;
        const E = e.params.mousewheel;
        e.params.cssMode && y.preventDefault();
        let A = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (A = document.querySelector(e.params.mousewheel.eventsTarget));
        const M = A && A.contains(y.target);
        if (!e.mouseEntered && !M && !E.releaseOnEdges)
            return !0;
        y.originalEvent && (y = y.originalEvent);
        let _ = 0;
        const k = e.rtlTranslate ? -1 : 1
          , H = o(y);
        if (E.forceToAxis)
            if (e.isHorizontal())
                if (Math.abs(H.pixelX) > Math.abs(H.pixelY))
                    _ = -H.pixelX * k;
                else
                    return !0;
            else if (Math.abs(H.pixelY) > Math.abs(H.pixelX))
                _ = -H.pixelY;
            else
                return !0;
        else
            _ = Math.abs(H.pixelX) > Math.abs(H.pixelY) ? -H.pixelX * k : -H.pixelY;
        if (_ === 0)
            return !0;
        E.invert && (_ = -_);
        let P = e.getTranslate() + _ * E.sensitivity;
        if (P >= e.minTranslate() && (P = e.minTranslate()),
        P <= e.maxTranslate() && (P = e.maxTranslate()),
        C = e.params.loop ? !0 : !(P === e.minTranslate() || P === e.maxTranslate()),
        C && e.params.nested && y.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled) {
            const x = {
                time: ge(),
                delta: Math.abs(_),
                direction: Math.sign(_),
                raw: h
            };
            f.length >= 2 && f.shift();
            const L = f.length ? f[f.length - 1] : void 0;
            if (f.push(x),
            L ? (x.direction !== L.direction || x.delta > L.delta || x.time > L.time + 150) && u(x) : u(x),
            m(x))
                return !0
        } else {
            const x = {
                time: ge(),
                delta: Math.abs(_),
                direction: Math.sign(_)
            }
              , L = l && x.time < l.time + 500 && x.delta <= l.delta && x.direction === l.direction;
            if (!L) {
                l = void 0;
                let G = e.getTranslate() + _ * E.sensitivity;
                const I = e.isBeginning
                  , z = e.isEnd;
                if (G >= e.minTranslate() && (G = e.minTranslate()),
                G <= e.maxTranslate() && (G = e.maxTranslate()),
                e.setTransition(0),
                e.setTranslate(G),
                e.updateProgress(),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                (!I && e.isBeginning || !z && e.isEnd) && e.updateSlidesClasses(),
                e.params.loop && e.loopFix({
                    direction: x.direction < 0 ? "next" : "prev",
                    byMousewheel: !0
                }),
                e.params.freeMode.sticky) {
                    clearTimeout(a),
                    a = void 0,
                    f.length >= 15 && f.shift();
                    const B = f.length ? f[f.length - 1] : void 0
                      , F = f[0];
                    if (f.push(x),
                    B && (x.delta > B.delta || x.direction !== B.direction))
                        f.splice(0);
                    else if (f.length >= 15 && x.time - F.time < 500 && F.delta - x.delta >= 1 && x.delta <= 6) {
                        const Z = _ > 0 ? .8 : .2;
                        l = x,
                        f.splice(0),
                        a = Ie( () => {
                            e.slideToClosest(e.params.speed, !0, void 0, Z)
                        }
                        , 0)
                    }
                    a || (a = Ie( () => {
                        l = x,
                        f.splice(0),
                        e.slideToClosest(e.params.speed, !0, void 0, .5)
                    }
                    , 500))
                }
                if (L || s("scroll", y),
                e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                E.releaseOnEdges && (G === e.minTranslate() || G === e.maxTranslate()))
                    return !0
            }
        }
        return y.preventDefault ? y.preventDefault() : y.returnValue = !1,
        !1
    }
    function w(h) {
        let y = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (y = document.querySelector(e.params.mousewheel.eventsTarget)),
        y[h]("mouseenter", p),
        y[h]("mouseleave", c),
        y[h]("wheel", v)
    }
    function g() {
        return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", v),
        !0) : e.mousewheel.enabled ? !1 : (w("addEventListener"),
        e.mousewheel.enabled = !0,
        !0)
    }
    function b() {
        return e.params.cssMode ? (e.wrapperEl.addEventListener(event, v),
        !0) : e.mousewheel.enabled ? (w("removeEventListener"),
        e.mousewheel.enabled = !1,
        !0) : !1
    }
    t("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && b(),
        e.params.mousewheel.enabled && g()
    }
    ),
    t("destroy", () => {
        e.params.cssMode && g(),
        e.mousewheel.enabled && b()
    }
    ),
    Object.assign(e.mousewheel, {
        enable: g,
        disable: b
    })
}
function Et(r, e, i, t) {
    return r.params.createElements && Object.keys(t).forEach(s => {
        if (!i[s] && i.auto === !0) {
            let n = oe(r.el, `.${t[s]}`)[0];
            n || (n = me("div", t[s]),
            n.className = t[s],
            r.el.append(n)),
            i[s] = n,
            e[s] = n
        }
    }
    ),
    i
}
function Tn(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    i({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    function n(m) {
        let v;
        return m && typeof m == "string" && e.isElement && (v = e.el.querySelector(m),
        v) ? v : (m && (typeof m == "string" && (v = [...document.querySelectorAll(m)]),
        e.params.uniqueNavElements && typeof m == "string" && v && v.length > 1 && e.el.querySelectorAll(m).length === 1 ? v = e.el.querySelector(m) : v && v.length === 1 && (v = v[0])),
        m && !v ? m : v)
    }
    function a(m, v) {
        const w = e.params.navigation;
        m = J(m),
        m.forEach(g => {
            g && (g.classList[v ? "add" : "remove"](...w.disabledClass.split(" ")),
            g.tagName === "BUTTON" && (g.disabled = v),
            e.params.watchOverflow && e.enabled && g.classList[e.isLocked ? "add" : "remove"](w.lockClass))
        }
        )
    }
    function d() {
        const {nextEl: m, prevEl: v} = e.navigation;
        if (e.params.loop) {
            a(v, !1),
            a(m, !1);
            return
        }
        a(v, e.isBeginning && !e.params.rewind),
        a(m, e.isEnd && !e.params.rewind)
    }
    function l(m) {
        m.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        s("navigationPrev"))
    }
    function f(m) {
        m.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        s("navigationNext"))
    }
    function o() {
        const m = e.params.navigation;
        if (e.params.navigation = Et(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(m.nextEl || m.prevEl))
            return;
        let v = n(m.nextEl)
          , w = n(m.prevEl);
        Object.assign(e.navigation, {
            nextEl: v,
            prevEl: w
        }),
        v = J(v),
        w = J(w);
        const g = (b, h) => {
            b && b.addEventListener("click", h === "next" ? f : l),
            !e.enabled && b && b.classList.add(...m.lockClass.split(" "))
        }
        ;
        v.forEach(b => g(b, "next")),
        w.forEach(b => g(b, "prev"))
    }
    function p() {
        let {nextEl: m, prevEl: v} = e.navigation;
        m = J(m),
        v = J(v);
        const w = (g, b) => {
            g.removeEventListener("click", b === "next" ? f : l),
            g.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        m.forEach(g => w(g, "next")),
        v.forEach(g => w(g, "prev"))
    }
    t("init", () => {
        e.params.navigation.enabled === !1 ? u() : (o(),
        d())
    }
    ),
    t("toEdge fromEdge lock unlock", () => {
        d()
    }
    ),
    t("destroy", () => {
        p()
    }
    ),
    t("enable disable", () => {
        let {nextEl: m, prevEl: v} = e.navigation;
        if (m = J(m),
        v = J(v),
        e.enabled) {
            d();
            return
        }
        [...m, ...v].filter(w => !!w).forEach(w => w.classList.add(e.params.navigation.lockClass))
    }
    ),
    t("click", (m, v) => {
        let {nextEl: w, prevEl: g} = e.navigation;
        w = J(w),
        g = J(g);
        const b = v.target;
        if (e.params.navigation.hideOnClick && !g.includes(b) && !w.includes(b)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === b || e.pagination.el.contains(b)))
                return;
            let h;
            w.length ? h = w[0].classList.contains(e.params.navigation.hiddenClass) : g.length && (h = g[0].classList.contains(e.params.navigation.hiddenClass)),
            s(h === !0 ? "navigationShow" : "navigationHide"),
            [...w, ...g].filter(y => !!y).forEach(y => y.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const c = () => {
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        o(),
        d()
    }
      , u = () => {
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        p()
    }
    ;
    Object.assign(e.navigation, {
        enable: c,
        disable: u,
        update: d,
        init: o,
        destroy: p
    })
}
function ke(r) {
    return r === void 0 && (r = ""),
    `.${r.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function xn(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    const n = "swiper-pagination";
    i({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: g => g,
            formatFractionTotal: g => g,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let a, d = 0;
    function l() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function f(g, b) {
        const {bulletActiveClass: h} = e.params.pagination;
        g && (g = g[`${b === "prev" ? "previous" : "next"}ElementSibling`],
        g && (g.classList.add(`${h}-${b}`),
        g = g[`${b === "prev" ? "previous" : "next"}ElementSibling`],
        g && g.classList.add(`${h}-${b}-${b}`)))
    }
    function o(g) {
        const b = g.target.closest(ke(e.params.pagination.bulletClass));
        if (!b)
            return;
        g.preventDefault();
        const h = je(b) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === h)
                return;
            e.slideToLoop(h)
        } else
            e.slideTo(h)
    }
    function p() {
        const g = e.rtl
          , b = e.params.pagination;
        if (l())
            return;
        let h = e.pagination.el;
        h = J(h);
        let y, C;
        const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , A = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (C = e.previousRealIndex || 0,
        y = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (y = e.snapIndex,
        C = e.previousSnapIndex) : (C = e.previousIndex || 0,
        y = e.activeIndex || 0),
        b.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const M = e.pagination.bullets;
            let _, k, H;
            if (b.dynamicBullets && (a = gt(M[0], e.isHorizontal() ? "width" : "height"),
            h.forEach(P => {
                P.style[e.isHorizontal() ? "width" : "height"] = `${a * (b.dynamicMainBullets + 4)}px`
            }
            ),
            b.dynamicMainBullets > 1 && C !== void 0 && (d += y - (C || 0),
            d > b.dynamicMainBullets - 1 ? d = b.dynamicMainBullets - 1 : d < 0 && (d = 0)),
            _ = Math.max(y - d, 0),
            k = _ + (Math.min(M.length, b.dynamicMainBullets) - 1),
            H = (k + _) / 2),
            M.forEach(P => {
                const x = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(L => `${b.bulletActiveClass}${L}`)].map(L => typeof L == "string" && L.includes(" ") ? L.split(" ") : L).flat();
                P.classList.remove(...x)
            }
            ),
            h.length > 1)
                M.forEach(P => {
                    const x = je(P);
                    x === y ? P.classList.add(...b.bulletActiveClass.split(" ")) : e.isElement && P.setAttribute("part", "bullet"),
                    b.dynamicBullets && (x >= _ && x <= k && P.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),
                    x === _ && f(P, "prev"),
                    x === k && f(P, "next"))
                }
                );
            else {
                const P = M[y];
                if (P && P.classList.add(...b.bulletActiveClass.split(" ")),
                e.isElement && M.forEach( (x, L) => {
                    x.setAttribute("part", L === y ? "bullet-active" : "bullet")
                }
                ),
                b.dynamicBullets) {
                    const x = M[_]
                      , L = M[k];
                    for (let G = _; G <= k; G += 1)
                        M[G] && M[G].classList.add(...`${b.bulletActiveClass}-main`.split(" "));
                    f(x, "prev"),
                    f(L, "next")
                }
            }
            if (b.dynamicBullets) {
                const P = Math.min(M.length, b.dynamicMainBullets + 4)
                  , x = (a * P - a) / 2 - H * a
                  , L = g ? "right" : "left";
                M.forEach(G => {
                    G.style[e.isHorizontal() ? L : "top"] = `${x}px`
                }
                )
            }
        }
        h.forEach( (M, _) => {
            if (b.type === "fraction" && (M.querySelectorAll(ke(b.currentClass)).forEach(k => {
                k.textContent = b.formatFractionCurrent(y + 1)
            }
            ),
            M.querySelectorAll(ke(b.totalClass)).forEach(k => {
                k.textContent = b.formatFractionTotal(A)
            }
            )),
            b.type === "progressbar") {
                let k;
                b.progressbarOpposite ? k = e.isHorizontal() ? "vertical" : "horizontal" : k = e.isHorizontal() ? "horizontal" : "vertical";
                const H = (y + 1) / A;
                let P = 1
                  , x = 1;
                k === "horizontal" ? P = H : x = H,
                M.querySelectorAll(ke(b.progressbarFillClass)).forEach(L => {
                    L.style.transform = `translate3d(0,0,0) scaleX(${P}) scaleY(${x})`,
                    L.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            b.type === "custom" && b.renderCustom ? (M.innerHTML = b.renderCustom(e, y + 1, A),
            _ === 0 && s("paginationRender", M)) : (_ === 0 && s("paginationRender", M),
            s("paginationUpdate", M)),
            e.params.watchOverflow && e.enabled && M.classList[e.isLocked ? "add" : "remove"](b.lockClass)
        }
        )
    }
    function c() {
        const g = e.params.pagination;
        if (l())
            return;
        const b = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let h = e.pagination.el;
        h = J(h);
        let y = "";
        if (g.type === "bullets") {
            let C = e.params.loop ? Math.ceil(b / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && C > b && (C = b);
            for (let E = 0; E < C; E += 1)
                g.renderBullet ? y += g.renderBullet.call(e, E, g.bulletClass) : y += `<${g.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${g.bulletClass}"></${g.bulletElement}>`
        }
        g.type === "fraction" && (g.renderFraction ? y = g.renderFraction.call(e, g.currentClass, g.totalClass) : y = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),
        g.type === "progressbar" && (g.renderProgressbar ? y = g.renderProgressbar.call(e, g.progressbarFillClass) : y = `<span class="${g.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        h.forEach(C => {
            g.type !== "custom" && (C.innerHTML = y || ""),
            g.type === "bullets" && e.pagination.bullets.push(...C.querySelectorAll(ke(g.bulletClass)))
        }
        ),
        g.type !== "custom" && s("paginationRender", h[0])
    }
    function u() {
        e.params.pagination = Et(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const g = e.params.pagination;
        if (!g.el)
            return;
        let b;
        typeof g.el == "string" && e.isElement && (b = e.el.querySelector(g.el)),
        !b && typeof g.el == "string" && (b = [...document.querySelectorAll(g.el)]),
        b || (b = g.el),
        !(!b || b.length === 0) && (e.params.uniqueNavElements && typeof g.el == "string" && Array.isArray(b) && b.length > 1 && (b = [...e.el.querySelectorAll(g.el)],
        b.length > 1 && (b = b.filter(h => Ae(h, ".swiper")[0] === e.el)[0])),
        Array.isArray(b) && b.length === 1 && (b = b[0]),
        Object.assign(e.pagination, {
            el: b
        }),
        b = J(b),
        b.forEach(h => {
            g.type === "bullets" && g.clickable && h.classList.add(...(g.clickableClass || "").split(" ")),
            h.classList.add(g.modifierClass + g.type),
            h.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass),
            g.type === "bullets" && g.dynamicBullets && (h.classList.add(`${g.modifierClass}${g.type}-dynamic`),
            d = 0,
            g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)),
            g.type === "progressbar" && g.progressbarOpposite && h.classList.add(g.progressbarOppositeClass),
            g.clickable && h.addEventListener("click", o),
            e.enabled || h.classList.add(g.lockClass)
        }
        ))
    }
    function m() {
        const g = e.params.pagination;
        if (l())
            return;
        let b = e.pagination.el;
        b && (b = J(b),
        b.forEach(h => {
            h.classList.remove(g.hiddenClass),
            h.classList.remove(g.modifierClass + g.type),
            h.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass),
            g.clickable && (h.classList.remove(...(g.clickableClass || "").split(" ")),
            h.removeEventListener("click", o))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(h => h.classList.remove(...g.bulletActiveClass.split(" ")))
    }
    t("changeDirection", () => {
        if (!e.pagination || !e.pagination.el)
            return;
        const g = e.params.pagination;
        let {el: b} = e.pagination;
        b = J(b),
        b.forEach(h => {
            h.classList.remove(g.horizontalClass, g.verticalClass),
            h.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass)
        }
        )
    }
    ),
    t("init", () => {
        e.params.pagination.enabled === !1 ? w() : (u(),
        c(),
        p())
    }
    ),
    t("activeIndexChange", () => {
        typeof e.snapIndex > "u" && p()
    }
    ),
    t("snapIndexChange", () => {
        p()
    }
    ),
    t("snapGridLengthChange", () => {
        c(),
        p()
    }
    ),
    t("destroy", () => {
        m()
    }
    ),
    t("enable disable", () => {
        let {el: g} = e.pagination;
        g && (g = J(g),
        g.forEach(b => b.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    t("lock unlock", () => {
        p()
    }
    ),
    t("click", (g, b) => {
        const h = b.target
          , y = J(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && y && y.length > 0 && !h.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && h === e.navigation.nextEl || e.navigation.prevEl && h === e.navigation.prevEl))
                return;
            const C = y[0].classList.contains(e.params.pagination.hiddenClass);
            s(C === !0 ? "paginationShow" : "paginationHide"),
            y.forEach(E => E.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const v = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: g} = e.pagination;
        g && (g = J(g),
        g.forEach(b => b.classList.remove(e.params.pagination.paginationDisabledClass))),
        u(),
        c(),
        p()
    }
      , w = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: g} = e.pagination;
        g && (g = J(g),
        g.forEach(b => b.classList.add(e.params.pagination.paginationDisabledClass))),
        m()
    }
    ;
    Object.assign(e.pagination, {
        enable: v,
        disable: w,
        render: c,
        update: p,
        init: u,
        destroy: m
    })
}
function Mn(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    const n = de();
    let a = !1, d = null, l = null, f, o, p, c;
    i({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }),
    e.scrollbar = {
        el: null,
        dragEl: null
    };
    function u() {
        if (!e.params.scrollbar.el || !e.scrollbar.el)
            return;
        const {scrollbar: P, rtlTranslate: x} = e
          , {dragEl: L, el: G} = P
          , I = e.params.scrollbar
          , z = e.params.loop ? e.progressLoop : e.progress;
        let B = o
          , F = (p - o) * z;
        x ? (F = -F,
        F > 0 ? (B = o - F,
        F = 0) : -F + o > p && (B = p + F)) : F < 0 ? (B = o + F,
        F = 0) : F + o > p && (B = p - F),
        e.isHorizontal() ? (L.style.transform = `translate3d(${F}px, 0, 0)`,
        L.style.width = `${B}px`) : (L.style.transform = `translate3d(0px, ${F}px, 0)`,
        L.style.height = `${B}px`),
        I.hide && (clearTimeout(d),
        G.style.opacity = 1,
        d = setTimeout( () => {
            G.style.opacity = 0,
            G.style.transitionDuration = "400ms"
        }
        , 1e3))
    }
    function m(P) {
        !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${P}ms`)
    }
    function v() {
        if (!e.params.scrollbar.el || !e.scrollbar.el)
            return;
        const {scrollbar: P} = e
          , {dragEl: x, el: L} = P;
        x.style.width = "",
        x.style.height = "",
        p = e.isHorizontal() ? L.offsetWidth : L.offsetHeight,
        c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
        e.params.scrollbar.dragSize === "auto" ? o = p * c : o = parseInt(e.params.scrollbar.dragSize, 10),
        e.isHorizontal() ? x.style.width = `${o}px` : x.style.height = `${o}px`,
        c >= 1 ? L.style.display = "none" : L.style.display = "",
        e.params.scrollbar.hide && (L.style.opacity = 0),
        e.params.watchOverflow && e.enabled && P.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
    }
    function w(P) {
        return e.isHorizontal() ? P.clientX : P.clientY
    }
    function g(P) {
        const {scrollbar: x, rtlTranslate: L} = e
          , {el: G} = x;
        let I;
        I = (w(P) - et(G)[e.isHorizontal() ? "left" : "top"] - (f !== null ? f : o / 2)) / (p - o),
        I = Math.max(Math.min(I, 1), 0),
        L && (I = 1 - I);
        const z = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * I;
        e.updateProgress(z),
        e.setTranslate(z),
        e.updateActiveIndex(),
        e.updateSlidesClasses()
    }
    function b(P) {
        const x = e.params.scrollbar
          , {scrollbar: L, wrapperEl: G} = e
          , {el: I, dragEl: z} = L;
        a = !0,
        f = P.target === z ? w(P) - P.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
        P.preventDefault(),
        P.stopPropagation(),
        G.style.transitionDuration = "100ms",
        z.style.transitionDuration = "100ms",
        g(P),
        clearTimeout(l),
        I.style.transitionDuration = "0ms",
        x.hide && (I.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        s("scrollbarDragStart", P)
    }
    function h(P) {
        const {scrollbar: x, wrapperEl: L} = e
          , {el: G, dragEl: I} = x;
        a && (P.preventDefault && P.cancelable ? P.preventDefault() : P.returnValue = !1,
        g(P),
        L.style.transitionDuration = "0ms",
        G.style.transitionDuration = "0ms",
        I.style.transitionDuration = "0ms",
        s("scrollbarDragMove", P))
    }
    function y(P) {
        const x = e.params.scrollbar
          , {scrollbar: L, wrapperEl: G} = e
          , {el: I} = L;
        a && (a = !1,
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "",
        G.style.transitionDuration = ""),
        x.hide && (clearTimeout(l),
        l = Ie( () => {
            I.style.opacity = 0,
            I.style.transitionDuration = "400ms"
        }
        , 1e3)),
        s("scrollbarDragEnd", P),
        x.snapOnRelease && e.slideToClosest())
    }
    function C(P) {
        const {scrollbar: x, params: L} = e
          , G = x.el;
        if (!G)
            return;
        const I = G
          , z = L.passiveListeners ? {
            passive: !1,
            capture: !1
        } : !1
          , B = L.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        if (!I)
            return;
        const F = P === "on" ? "addEventListener" : "removeEventListener";
        I[F]("pointerdown", b, z),
        n[F]("pointermove", h, z),
        n[F]("pointerup", y, B)
    }
    function E() {
        !e.params.scrollbar.el || !e.scrollbar.el || C("on")
    }
    function A() {
        !e.params.scrollbar.el || !e.scrollbar.el || C("off")
    }
    function M() {
        const {scrollbar: P, el: x} = e;
        e.params.scrollbar = Et(e, e.originalParams.scrollbar, e.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const L = e.params.scrollbar;
        if (!L.el)
            return;
        let G;
        if (typeof L.el == "string" && e.isElement && (G = e.el.querySelector(L.el)),
        !G && typeof L.el == "string") {
            if (G = n.querySelectorAll(L.el),
            !G.length)
                return
        } else
            G || (G = L.el);
        e.params.uniqueNavElements && typeof L.el == "string" && G.length > 1 && x.querySelectorAll(L.el).length === 1 && (G = x.querySelector(L.el)),
        G.length > 0 && (G = G[0]),
        G.classList.add(e.isHorizontal() ? L.horizontalClass : L.verticalClass);
        let I;
        G && (I = G.querySelector(ke(e.params.scrollbar.dragClass)),
        I || (I = me("div", e.params.scrollbar.dragClass),
        G.append(I))),
        Object.assign(P, {
            el: G,
            dragEl: I
        }),
        L.draggable && E(),
        G && G.classList[e.enabled ? "remove" : "add"](...Ce(e.params.scrollbar.lockClass))
    }
    function _() {
        const P = e.params.scrollbar
          , x = e.scrollbar.el;
        x && x.classList.remove(...Ce(e.isHorizontal() ? P.horizontalClass : P.verticalClass)),
        A()
    }
    t("changeDirection", () => {
        if (!e.scrollbar || !e.scrollbar.el)
            return;
        const P = e.params.scrollbar;
        let {el: x} = e.scrollbar;
        x = J(x),
        x.forEach(L => {
            L.classList.remove(P.horizontalClass, P.verticalClass),
            L.classList.add(e.isHorizontal() ? P.horizontalClass : P.verticalClass)
        }
        )
    }
    ),
    t("init", () => {
        e.params.scrollbar.enabled === !1 ? H() : (M(),
        v(),
        u())
    }
    ),
    t("update resize observerUpdate lock unlock changeDirection", () => {
        v()
    }
    ),
    t("setTranslate", () => {
        u()
    }
    ),
    t("setTransition", (P, x) => {
        m(x)
    }
    ),
    t("enable disable", () => {
        const {el: P} = e.scrollbar;
        P && P.classList[e.enabled ? "remove" : "add"](...Ce(e.params.scrollbar.lockClass))
    }
    ),
    t("destroy", () => {
        _()
    }
    );
    const k = () => {
        e.el.classList.remove(...Ce(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el && e.scrollbar.el.classList.remove(...Ce(e.params.scrollbar.scrollbarDisabledClass)),
        M(),
        v(),
        u()
    }
      , H = () => {
        e.el.classList.add(...Ce(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el && e.scrollbar.el.classList.add(...Ce(e.params.scrollbar.scrollbarDisabledClass)),
        _()
    }
    ;
    Object.assign(e.scrollbar, {
        enable: k,
        disable: H,
        updateSize: v,
        setTranslate: u,
        init: M,
        destroy: _
    })
}
function kn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        parallax: {
            enabled: !1
        }
    });
    const s = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
      , n = (l, f) => {
        const {rtl: o} = e
          , p = o ? -1 : 1
          , c = l.getAttribute("data-swiper-parallax") || "0";
        let u = l.getAttribute("data-swiper-parallax-x")
          , m = l.getAttribute("data-swiper-parallax-y");
        const v = l.getAttribute("data-swiper-parallax-scale")
          , w = l.getAttribute("data-swiper-parallax-opacity")
          , g = l.getAttribute("data-swiper-parallax-rotate");
        if (u || m ? (u = u || "0",
        m = m || "0") : e.isHorizontal() ? (u = c,
        m = "0") : (m = c,
        u = "0"),
        u.indexOf("%") >= 0 ? u = `${parseInt(u, 10) * f * p}%` : u = `${u * f * p}px`,
        m.indexOf("%") >= 0 ? m = `${parseInt(m, 10) * f}%` : m = `${m * f}px`,
        typeof w < "u" && w !== null) {
            const h = w - (w - 1) * (1 - Math.abs(f));
            l.style.opacity = h
        }
        let b = `translate3d(${u}, ${m}, 0px)`;
        if (typeof v < "u" && v !== null) {
            const h = v - (v - 1) * (1 - Math.abs(f));
            b += ` scale(${h})`
        }
        if (g && typeof g < "u" && g !== null) {
            const h = g * f * -1;
            b += ` rotate(${h}deg)`
        }
        l.style.transform = b
    }
      , a = () => {
        const {el: l, slides: f, progress: o, snapGrid: p, isElement: c} = e
          , u = oe(l, s);
        e.isElement && u.push(...oe(e.hostEl, s)),
        u.forEach(m => {
            n(m, o)
        }
        ),
        f.forEach( (m, v) => {
            let w = m.progress;
            e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (w += Math.ceil(v / 2) - o * (p.length - 1)),
            w = Math.min(Math.max(w, -1), 1),
            m.querySelectorAll(`${s}, [data-swiper-parallax-rotate]`).forEach(g => {
                n(g, w)
            }
            )
        }
        )
    }
      , d = function(l) {
        l === void 0 && (l = e.params.speed);
        const {el: f, hostEl: o} = e
          , p = [...f.querySelectorAll(s)];
        e.isElement && p.push(...o.querySelectorAll(s)),
        p.forEach(c => {
            let u = parseInt(c.getAttribute("data-swiper-parallax-duration"), 10) || l;
            l === 0 && (u = 0),
            c.style.transitionDuration = `${u}ms`
        }
        )
    };
    t("beforeInit", () => {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
        e.originalParams.watchSlidesProgress = !0)
    }
    ),
    t("init", () => {
        e.params.parallax.enabled && a()
    }
    ),
    t("setTranslate", () => {
        e.params.parallax.enabled && a()
    }
    ),
    t("setTransition", (l, f) => {
        e.params.parallax.enabled && d(f)
    }
    )
}
function Cn(r) {
    let {swiper: e, extendParams: i, on: t, emit: s} = r;
    const n = se();
    i({
        zoom: {
            enabled: !1,
            limitToOriginalSize: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    }),
    e.zoom = {
        enabled: !1
    };
    let a = 1, d = !1, l, f;
    const o = []
      , p = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
    }
      , c = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
    }
      , u = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
    };
    let m = 1;
    Object.defineProperty(e.zoom, "scale", {
        get() {
            return m
        },
        set(V) {
            if (m !== V) {
                const X = p.imageEl
                  , q = p.slideEl;
                s("zoomChange", V, X, q)
            }
            m = V
        }
    });
    function v() {
        if (o.length < 2)
            return 1;
        const V = o[0].pageX
          , X = o[0].pageY
          , q = o[1].pageX
          , Q = o[1].pageY;
        return Math.sqrt((q - V) ** 2 + (Q - X) ** 2)
    }
    function w() {
        const V = e.params.zoom
          , X = p.imageWrapEl.getAttribute("data-swiper-zoom") || V.maxRatio;
        if (V.limitToOriginalSize && p.imageEl && p.imageEl.naturalWidth) {
            const q = p.imageEl.naturalWidth / p.imageEl.offsetWidth;
            return Math.min(q, X)
        }
        return X
    }
    function g() {
        if (o.length < 2)
            return {
                x: null,
                y: null
            };
        const V = p.imageEl.getBoundingClientRect();
        return [(o[0].pageX + (o[1].pageX - o[0].pageX) / 2 - V.x - n.scrollX) / a, (o[0].pageY + (o[1].pageY - o[0].pageY) / 2 - V.y - n.scrollY) / a]
    }
    function b() {
        return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    }
    function h(V) {
        const X = b();
        return !!(V.target.matches(X) || e.slides.filter(q => q.contains(V.target)).length > 0)
    }
    function y(V) {
        const X = `.${e.params.zoom.containerClass}`;
        return !!(V.target.matches(X) || [...e.hostEl.querySelectorAll(X)].filter(q => q.contains(V.target)).length > 0)
    }
    function C(V) {
        if (V.pointerType === "mouse" && o.splice(0, o.length),
        !h(V))
            return;
        const X = e.params.zoom;
        if (l = !1,
        f = !1,
        o.push(V),
        !(o.length < 2)) {
            if (l = !0,
            p.scaleStart = v(),
            !p.slideEl) {
                p.slideEl = V.target.closest(`.${e.params.slideClass}, swiper-slide`),
                p.slideEl || (p.slideEl = e.slides[e.activeIndex]);
                let q = p.slideEl.querySelector(`.${X.containerClass}`);
                if (q && (q = q.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                p.imageEl = q,
                q ? p.imageWrapEl = Ae(p.imageEl, `.${X.containerClass}`)[0] : p.imageWrapEl = void 0,
                !p.imageWrapEl) {
                    p.imageEl = void 0;
                    return
                }
                p.maxRatio = w()
            }
            if (p.imageEl) {
                const [q,Q] = g();
                p.originX = q,
                p.originY = Q,
                p.imageEl.style.transitionDuration = "0ms"
            }
            d = !0
        }
    }
    function E(V) {
        if (!h(V))
            return;
        const X = e.params.zoom
          , q = e.zoom
          , Q = o.findIndex(U => U.pointerId === V.pointerId);
        Q >= 0 && (o[Q] = V),
        !(o.length < 2) && (f = !0,
        p.scaleMove = v(),
        p.imageEl && (q.scale = p.scaleMove / p.scaleStart * a,
        q.scale > p.maxRatio && (q.scale = p.maxRatio - 1 + (q.scale - p.maxRatio + 1) ** .5),
        q.scale < X.minRatio && (q.scale = X.minRatio + 1 - (X.minRatio - q.scale + 1) ** .5),
        p.imageEl.style.transform = `translate3d(0,0,0) scale(${q.scale})`))
    }
    function A(V) {
        if (!h(V) || V.pointerType === "mouse" && V.type === "pointerout")
            return;
        const X = e.params.zoom
          , q = e.zoom
          , Q = o.findIndex(U => U.pointerId === V.pointerId);
        Q >= 0 && o.splice(Q, 1),
        !(!l || !f) && (l = !1,
        f = !1,
        p.imageEl && (q.scale = Math.max(Math.min(q.scale, p.maxRatio), X.minRatio),
        p.imageEl.style.transitionDuration = `${e.params.speed}ms`,
        p.imageEl.style.transform = `translate3d(0,0,0) scale(${q.scale})`,
        a = q.scale,
        d = !1,
        q.scale > 1 && p.slideEl ? p.slideEl.classList.add(`${X.zoomedSlideClass}`) : q.scale <= 1 && p.slideEl && p.slideEl.classList.remove(`${X.zoomedSlideClass}`),
        q.scale === 1 && (p.originX = 0,
        p.originY = 0,
        p.slideEl = void 0)))
    }
    let M;
    function _() {
        e.touchEventsData.preventTouchMoveFromPointerMove = !1
    }
    function k() {
        clearTimeout(M),
        e.touchEventsData.preventTouchMoveFromPointerMove = !0,
        M = setTimeout( () => {
            _()
        }
        )
    }
    function H(V) {
        const X = e.device;
        if (!p.imageEl || c.isTouched)
            return;
        X.android && V.cancelable && V.preventDefault(),
        c.isTouched = !0;
        const q = o.length > 0 ? o[0] : V;
        c.touchesStart.x = q.pageX,
        c.touchesStart.y = q.pageY
    }
    function P(V) {
        if (!h(V) || !y(V))
            return;
        const X = e.zoom;
        if (!p.imageEl || !c.isTouched || !p.slideEl)
            return;
        c.isMoved || (c.width = p.imageEl.offsetWidth || p.imageEl.clientWidth,
        c.height = p.imageEl.offsetHeight || p.imageEl.clientHeight,
        c.startX = ht(p.imageWrapEl, "x") || 0,
        c.startY = ht(p.imageWrapEl, "y") || 0,
        p.slideWidth = p.slideEl.offsetWidth,
        p.slideHeight = p.slideEl.offsetHeight,
        p.imageWrapEl.style.transitionDuration = "0ms");
        const q = c.width * X.scale
          , Q = c.height * X.scale;
        if (q < p.slideWidth && Q < p.slideHeight) {
            _();
            return
        }
        if (c.minX = Math.min(p.slideWidth / 2 - q / 2, 0),
        c.maxX = -c.minX,
        c.minY = Math.min(p.slideHeight / 2 - Q / 2, 0),
        c.maxY = -c.minY,
        c.touchesCurrent.x = o.length > 0 ? o[0].pageX : V.pageX,
        c.touchesCurrent.y = o.length > 0 ? o[0].pageY : V.pageY,
        Math.max(Math.abs(c.touchesCurrent.x - c.touchesStart.x), Math.abs(c.touchesCurrent.y - c.touchesStart.y)) > 5 && (e.allowClick = !1),
        !c.isMoved && !d) {
            if (e.isHorizontal() && (Math.floor(c.minX) === Math.floor(c.startX) && c.touchesCurrent.x < c.touchesStart.x || Math.floor(c.maxX) === Math.floor(c.startX) && c.touchesCurrent.x > c.touchesStart.x)) {
                c.isTouched = !1,
                _();
                return
            }
            if (!e.isHorizontal() && (Math.floor(c.minY) === Math.floor(c.startY) && c.touchesCurrent.y < c.touchesStart.y || Math.floor(c.maxY) === Math.floor(c.startY) && c.touchesCurrent.y > c.touchesStart.y)) {
                c.isTouched = !1,
                _();
                return
            }
        }
        V.cancelable && V.preventDefault(),
        V.stopPropagation(),
        k(),
        c.isMoved = !0;
        const K = (X.scale - a) / (p.maxRatio - e.params.zoom.minRatio)
          , {originX: te, originY: he} = p;
        c.currentX = c.touchesCurrent.x - c.touchesStart.x + c.startX + K * (c.width - te * 2),
        c.currentY = c.touchesCurrent.y - c.touchesStart.y + c.startY + K * (c.height - he * 2),
        c.currentX < c.minX && (c.currentX = c.minX + 1 - (c.minX - c.currentX + 1) ** .8),
        c.currentX > c.maxX && (c.currentX = c.maxX - 1 + (c.currentX - c.maxX + 1) ** .8),
        c.currentY < c.minY && (c.currentY = c.minY + 1 - (c.minY - c.currentY + 1) ** .8),
        c.currentY > c.maxY && (c.currentY = c.maxY - 1 + (c.currentY - c.maxY + 1) ** .8),
        u.prevPositionX || (u.prevPositionX = c.touchesCurrent.x),
        u.prevPositionY || (u.prevPositionY = c.touchesCurrent.y),
        u.prevTime || (u.prevTime = Date.now()),
        u.x = (c.touchesCurrent.x - u.prevPositionX) / (Date.now() - u.prevTime) / 2,
        u.y = (c.touchesCurrent.y - u.prevPositionY) / (Date.now() - u.prevTime) / 2,
        Math.abs(c.touchesCurrent.x - u.prevPositionX) < 2 && (u.x = 0),
        Math.abs(c.touchesCurrent.y - u.prevPositionY) < 2 && (u.y = 0),
        u.prevPositionX = c.touchesCurrent.x,
        u.prevPositionY = c.touchesCurrent.y,
        u.prevTime = Date.now(),
        p.imageWrapEl.style.transform = `translate3d(${c.currentX}px, ${c.currentY}px,0)`
    }
    function x() {
        const V = e.zoom;
        if (!p.imageEl)
            return;
        if (!c.isTouched || !c.isMoved) {
            c.isTouched = !1,
            c.isMoved = !1;
            return
        }
        c.isTouched = !1,
        c.isMoved = !1;
        let X = 300
          , q = 300;
        const Q = u.x * X
          , U = c.currentX + Q
          , K = u.y * q
          , te = c.currentY + K;
        u.x !== 0 && (X = Math.abs((U - c.currentX) / u.x)),
        u.y !== 0 && (q = Math.abs((te - c.currentY) / u.y));
        const he = Math.max(X, q);
        c.currentX = U,
        c.currentY = te;
        const fe = c.width * V.scale
          , ce = c.height * V.scale;
        c.minX = Math.min(p.slideWidth / 2 - fe / 2, 0),
        c.maxX = -c.minX,
        c.minY = Math.min(p.slideHeight / 2 - ce / 2, 0),
        c.maxY = -c.minY,
        c.currentX = Math.max(Math.min(c.currentX, c.maxX), c.minX),
        c.currentY = Math.max(Math.min(c.currentY, c.maxY), c.minY),
        p.imageWrapEl.style.transitionDuration = `${he}ms`,
        p.imageWrapEl.style.transform = `translate3d(${c.currentX}px, ${c.currentY}px,0)`
    }
    function L() {
        const V = e.zoom;
        p.slideEl && e.activeIndex !== e.slides.indexOf(p.slideEl) && (p.imageEl && (p.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        p.imageWrapEl && (p.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        p.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        V.scale = 1,
        a = 1,
        p.slideEl = void 0,
        p.imageEl = void 0,
        p.imageWrapEl = void 0,
        p.originX = 0,
        p.originY = 0)
    }
    function G(V) {
        const X = e.zoom
          , q = e.params.zoom;
        if (!p.slideEl) {
            V && V.target && (p.slideEl = V.target.closest(`.${e.params.slideClass}, swiper-slide`)),
            p.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? p.slideEl = oe(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : p.slideEl = e.slides[e.activeIndex]);
            let He = p.slideEl.querySelector(`.${q.containerClass}`);
            He && (He = He.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            p.imageEl = He,
            He ? p.imageWrapEl = Ae(p.imageEl, `.${q.containerClass}`)[0] : p.imageWrapEl = void 0
        }
        if (!p.imageEl || !p.imageWrapEl)
            return;
        e.params.cssMode && (e.wrapperEl.style.overflow = "hidden",
        e.wrapperEl.style.touchAction = "none"),
        p.slideEl.classList.add(`${q.zoomedSlideClass}`);
        let Q, U, K, te, he, fe, ce, we, _t, Tt, xt, Mt, Fe, Ye, st, rt, nt, at;
        typeof c.touchesStart.x > "u" && V ? (Q = V.pageX,
        U = V.pageY) : (Q = c.touchesStart.x,
        U = c.touchesStart.y);
        const Ne = typeof V == "number" ? V : null;
        a === 1 && Ne && (Q = void 0,
        U = void 0);
        const kt = w();
        X.scale = Ne || kt,
        a = Ne || kt,
        V && !(a === 1 && Ne) ? (nt = p.slideEl.offsetWidth,
        at = p.slideEl.offsetHeight,
        K = et(p.slideEl).left + n.scrollX,
        te = et(p.slideEl).top + n.scrollY,
        he = K + nt / 2 - Q,
        fe = te + at / 2 - U,
        _t = p.imageEl.offsetWidth || p.imageEl.clientWidth,
        Tt = p.imageEl.offsetHeight || p.imageEl.clientHeight,
        xt = _t * X.scale,
        Mt = Tt * X.scale,
        Fe = Math.min(nt / 2 - xt / 2, 0),
        Ye = Math.min(at / 2 - Mt / 2, 0),
        st = -Fe,
        rt = -Ye,
        ce = he * X.scale,
        we = fe * X.scale,
        ce < Fe && (ce = Fe),
        ce > st && (ce = st),
        we < Ye && (we = Ye),
        we > rt && (we = rt)) : (ce = 0,
        we = 0),
        Ne && X.scale === 1 && (p.originX = 0,
        p.originY = 0),
        p.imageWrapEl.style.transitionDuration = "300ms",
        p.imageWrapEl.style.transform = `translate3d(${ce}px, ${we}px,0)`,
        p.imageEl.style.transitionDuration = "300ms",
        p.imageEl.style.transform = `translate3d(0,0,0) scale(${X.scale})`
    }
    function I() {
        const V = e.zoom
          , X = e.params.zoom;
        if (!p.slideEl) {
            e.params.virtual && e.params.virtual.enabled && e.virtual ? p.slideEl = oe(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : p.slideEl = e.slides[e.activeIndex];
            let q = p.slideEl.querySelector(`.${X.containerClass}`);
            q && (q = q.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            p.imageEl = q,
            q ? p.imageWrapEl = Ae(p.imageEl, `.${X.containerClass}`)[0] : p.imageWrapEl = void 0
        }
        !p.imageEl || !p.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "",
        e.wrapperEl.style.touchAction = ""),
        V.scale = 1,
        a = 1,
        p.imageWrapEl.style.transitionDuration = "300ms",
        p.imageWrapEl.style.transform = "translate3d(0,0,0)",
        p.imageEl.style.transitionDuration = "300ms",
        p.imageEl.style.transform = "translate3d(0,0,0) scale(1)",
        p.slideEl.classList.remove(`${X.zoomedSlideClass}`),
        p.slideEl = void 0,
        p.originX = 0,
        p.originY = 0)
    }
    function z(V) {
        const X = e.zoom;
        X.scale && X.scale !== 1 ? I() : G(V)
    }
    function B() {
        const V = e.params.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1
          , X = e.params.passiveListeners ? {
            passive: !1,
            capture: !0
        } : !0;
        return {
            passiveListener: V,
            activeListenerWithCapture: X
        }
    }
    function F() {
        const V = e.zoom;
        if (V.enabled)
            return;
        V.enabled = !0;
        const {passiveListener: X, activeListenerWithCapture: q} = B();
        e.wrapperEl.addEventListener("pointerdown", C, X),
        e.wrapperEl.addEventListener("pointermove", E, q),
        ["pointerup", "pointercancel", "pointerout"].forEach(Q => {
            e.wrapperEl.addEventListener(Q, A, X)
        }
        ),
        e.wrapperEl.addEventListener("pointermove", P, q)
    }
    function Z() {
        const V = e.zoom;
        if (!V.enabled)
            return;
        V.enabled = !1;
        const {passiveListener: X, activeListenerWithCapture: q} = B();
        e.wrapperEl.removeEventListener("pointerdown", C, X),
        e.wrapperEl.removeEventListener("pointermove", E, q),
        ["pointerup", "pointercancel", "pointerout"].forEach(Q => {
            e.wrapperEl.removeEventListener(Q, A, X)
        }
        ),
        e.wrapperEl.removeEventListener("pointermove", P, q)
    }
    t("init", () => {
        e.params.zoom.enabled && F()
    }
    ),
    t("destroy", () => {
        Z()
    }
    ),
    t("touchStart", (V, X) => {
        e.zoom.enabled && H(X)
    }
    ),
    t("touchEnd", (V, X) => {
        e.zoom.enabled && x()
    }
    ),
    t("doubleTap", (V, X) => {
        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && z(X)
    }
    ),
    t("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && L()
    }
    ),
    t("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && L()
    }
    ),
    Object.assign(e.zoom, {
        enable: F,
        disable: Z,
        in: G,
        out: I,
        toggle: z
    })
}
function Pn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    }),
    e.controller = {
        control: void 0
    };
    function s(f, o) {
        const p = function() {
            let v, w, g;
            return (b, h) => {
                for (w = -1,
                v = b.length; v - w > 1; )
                    g = v + w >> 1,
                    b[g] <= h ? w = g : v = g;
                return v
            }
        }();
        this.x = f,
        this.y = o,
        this.lastIndex = f.length - 1;
        let c, u;
        return this.interpolate = function(v) {
            return v ? (u = p(this.x, v),
            c = u - 1,
            (v - this.x[c]) * (this.y[u] - this.y[c]) / (this.x[u] - this.x[c]) + this.y[c]) : 0
        }
        ,
        this
    }
    function n(f) {
        e.controller.spline = e.params.loop ? new s(e.slidesGrid,f.slidesGrid) : new s(e.snapGrid,f.snapGrid)
    }
    function a(f, o) {
        const p = e.controller.control;
        let c, u;
        const m = e.constructor;
        function v(w) {
            if (w.destroyed)
                return;
            const g = e.rtlTranslate ? -e.translate : e.translate;
            e.params.controller.by === "slide" && (n(w),
            u = -e.controller.spline.interpolate(-g)),
            (!u || e.params.controller.by === "container") && (c = (w.maxTranslate() - w.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
            (Number.isNaN(c) || !Number.isFinite(c)) && (c = 1),
            u = (g - e.minTranslate()) * c + w.minTranslate()),
            e.params.controller.inverse && (u = w.maxTranslate() - u),
            w.updateProgress(u),
            w.setTranslate(u, e),
            w.updateActiveIndex(),
            w.updateSlidesClasses()
        }
        if (Array.isArray(p))
            for (let w = 0; w < p.length; w += 1)
                p[w] !== o && p[w]instanceof m && v(p[w]);
        else
            p instanceof m && o !== p && v(p)
    }
    function d(f, o) {
        const p = e.constructor
          , c = e.controller.control;
        let u;
        function m(v) {
            v.destroyed || (v.setTransition(f, e),
            f !== 0 && (v.transitionStart(),
            v.params.autoHeight && Ie( () => {
                v.updateAutoHeight()
            }
            ),
            Ge(v.wrapperEl, () => {
                c && v.transitionEnd()
            }
            )))
        }
        if (Array.isArray(c))
            for (u = 0; u < c.length; u += 1)
                c[u] !== o && c[u]instanceof p && m(c[u]);
        else
            c instanceof p && o !== c && m(c)
    }
    function l() {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
        delete e.controller.spline)
    }
    t("beforeInit", () => {
        if (typeof window < "u" && (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
            const f = document.querySelector(e.params.controller.control);
            if (f && f.swiper)
                e.controller.control = f.swiper;
            else if (f) {
                const o = p => {
                    e.controller.control = p.detail[0],
                    e.update(),
                    f.removeEventListener("init", o)
                }
                ;
                f.addEventListener("init", o)
            }
            return
        }
        e.controller.control = e.params.controller.control
    }
    ),
    t("update", () => {
        l()
    }
    ),
    t("resize", () => {
        l()
    }
    ),
    t("observerUpdate", () => {
        l()
    }
    ),
    t("setTranslate", (f, o, p) => {
        !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(o, p)
    }
    ),
    t("setTransition", (f, o, p) => {
        !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(o, p)
    }
    ),
    Object.assign(e.controller, {
        setTranslate: a,
        setTransition: d
    })
}
function Ln(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    }),
    e.a11y = {
        clicked: !1
    };
    let s = null, n, a, d = new Date().getTime();
    function l(z) {
        const B = s;
        B.length !== 0 && (B.innerHTML = "",
        B.innerHTML = z)
    }
    function f(z) {
        const B = () => Math.round(16 * Math.random()).toString(16);
        return "x".repeat(z).replace(/x/g, B)
    }
    function o(z) {
        z = J(z),
        z.forEach(B => {
            B.setAttribute("tabIndex", "0")
        }
        )
    }
    function p(z) {
        z = J(z),
        z.forEach(B => {
            B.setAttribute("tabIndex", "-1")
        }
        )
    }
    function c(z, B) {
        z = J(z),
        z.forEach(F => {
            F.setAttribute("role", B)
        }
        )
    }
    function u(z, B) {
        z = J(z),
        z.forEach(F => {
            F.setAttribute("aria-roledescription", B)
        }
        )
    }
    function m(z, B) {
        z = J(z),
        z.forEach(F => {
            F.setAttribute("aria-controls", B)
        }
        )
    }
    function v(z, B) {
        z = J(z),
        z.forEach(F => {
            F.setAttribute("aria-label", B)
        }
        )
    }
    function w(z, B) {
        z = J(z),
        z.forEach(F => {
            F.setAttribute("id", B)
        }
        )
    }
    function g(z, B) {
        z = J(z),
        z.forEach(F => {
            F.setAttribute("aria-live", B)
        }
        )
    }
    function b(z) {
        z = J(z),
        z.forEach(B => {
            B.setAttribute("aria-disabled", !0)
        }
        )
    }
    function h(z) {
        z = J(z),
        z.forEach(B => {
            B.setAttribute("aria-disabled", !1)
        }
        )
    }
    function y(z) {
        if (z.keyCode !== 13 && z.keyCode !== 32)
            return;
        const B = e.params.a11y
          , F = z.target;
        if (!(e.pagination && e.pagination.el && (F === e.pagination.el || e.pagination.el.contains(z.target)) && !z.target.matches(ke(e.params.pagination.bulletClass)))) {
            if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
                const Z = J(e.navigation.prevEl);
                J(e.navigation.nextEl).includes(F) && (e.isEnd && !e.params.loop || e.slideNext(),
                e.isEnd ? l(B.lastSlideMessage) : l(B.nextSlideMessage)),
                Z.includes(F) && (e.isBeginning && !e.params.loop || e.slidePrev(),
                e.isBeginning ? l(B.firstSlideMessage) : l(B.prevSlideMessage))
            }
            e.pagination && F.matches(ke(e.params.pagination.bulletClass)) && F.click()
        }
    }
    function C() {
        if (e.params.loop || e.params.rewind || !e.navigation)
            return;
        const {nextEl: z, prevEl: B} = e.navigation;
        B && (e.isBeginning ? (b(B),
        p(B)) : (h(B),
        o(B))),
        z && (e.isEnd ? (b(z),
        p(z)) : (h(z),
        o(z)))
    }
    function E() {
        return e.pagination && e.pagination.bullets && e.pagination.bullets.length
    }
    function A() {
        return E() && e.params.pagination.clickable
    }
    function M() {
        const z = e.params.a11y;
        E() && e.pagination.bullets.forEach(B => {
            e.params.pagination.clickable && (o(B),
            e.params.pagination.renderBullet || (c(B, "button"),
            v(B, z.paginationBulletMessage.replace(/\{\{index\}\}/, je(B) + 1)))),
            B.matches(ke(e.params.pagination.bulletActiveClass)) ? B.setAttribute("aria-current", "true") : B.removeAttribute("aria-current")
        }
        )
    }
    const _ = (z, B, F) => {
        o(z),
        z.tagName !== "BUTTON" && (c(z, "button"),
        z.addEventListener("keydown", y)),
        v(z, F),
        m(z, B)
    }
      , k = z => {
        a && a !== z.target && !a.contains(z.target) && (n = !0),
        e.a11y.clicked = !0
    }
      , H = () => {
        n = !1,
        requestAnimationFrame( () => {
            requestAnimationFrame( () => {
                e.destroyed || (e.a11y.clicked = !1)
            }
            )
        }
        )
    }
      , P = z => {
        d = new Date().getTime()
    }
      , x = z => {
        if (e.a11y.clicked || new Date().getTime() - d < 100)
            return;
        const B = z.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!B || !e.slides.includes(B))
            return;
        a = B;
        const F = e.slides.indexOf(B) === e.activeIndex
          , Z = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(B);
        F || Z || z.sourceCapabilities && z.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0,
        requestAnimationFrame( () => {
            n || (e.slideTo(e.slides.indexOf(B), 0),
            n = !1)
        }
        ))
    }
      , L = () => {
        const z = e.params.a11y;
        z.itemRoleDescriptionMessage && u(e.slides, z.itemRoleDescriptionMessage),
        z.slideRole && c(e.slides, z.slideRole);
        const B = e.slides.length;
        z.slideLabelMessage && e.slides.forEach( (F, Z) => {
            const V = e.params.loop ? parseInt(F.getAttribute("data-swiper-slide-index"), 10) : Z
              , X = z.slideLabelMessage.replace(/\{\{index\}\}/, V + 1).replace(/\{\{slidesLength\}\}/, B);
            v(F, X)
        }
        )
    }
      , G = () => {
        const z = e.params.a11y;
        e.el.append(s);
        const B = e.el;
        z.containerRoleDescriptionMessage && u(B, z.containerRoleDescriptionMessage),
        z.containerMessage && v(B, z.containerMessage);
        const F = e.wrapperEl
          , Z = z.id || F.getAttribute("id") || `swiper-wrapper-${f(16)}`
          , V = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        w(F, Z),
        g(F, V),
        L();
        let {nextEl: X, prevEl: q} = e.navigation ? e.navigation : {};
        X = J(X),
        q = J(q),
        X && X.forEach(U => _(U, Z, z.nextSlideMessage)),
        q && q.forEach(U => _(U, Z, z.prevSlideMessage)),
        A() && J(e.pagination.el).forEach(K => {
            K.addEventListener("keydown", y)
        }
        ),
        de().addEventListener("visibilitychange", P),
        e.el.addEventListener("focus", x, !0),
        e.el.addEventListener("focus", x, !0),
        e.el.addEventListener("pointerdown", k, !0),
        e.el.addEventListener("pointerup", H, !0)
    }
    ;
    function I() {
        s && s.remove();
        let {nextEl: z, prevEl: B} = e.navigation ? e.navigation : {};
        z = J(z),
        B = J(B),
        z && z.forEach(Z => Z.removeEventListener("keydown", y)),
        B && B.forEach(Z => Z.removeEventListener("keydown", y)),
        A() && J(e.pagination.el).forEach(V => {
            V.removeEventListener("keydown", y)
        }
        ),
        de().removeEventListener("visibilitychange", P),
        e.el.removeEventListener("focus", x, !0),
        e.el.removeEventListener("pointerdown", k, !0),
        e.el.removeEventListener("pointerup", H, !0)
    }
    t("beforeInit", () => {
        s = me("span", e.params.a11y.notificationClass),
        s.setAttribute("aria-live", "assertive"),
        s.setAttribute("aria-atomic", "true")
    }
    ),
    t("afterInit", () => {
        e.params.a11y.enabled && G()
    }
    ),
    t("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
        e.params.a11y.enabled && L()
    }
    ),
    t("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && C()
    }
    ),
    t("paginationUpdate", () => {
        e.params.a11y.enabled && M()
    }
    ),
    t("destroy", () => {
        e.params.a11y.enabled && I()
    }
    )
}
function An(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1
        }
    });
    let s = !1
      , n = {};
    const a = u => u.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      , d = u => {
        const m = se();
        let v;
        u ? v = new URL(u) : v = m.location;
        const w = v.pathname.slice(1).split("/").filter(y => y !== "")
          , g = w.length
          , b = w[g - 2]
          , h = w[g - 1];
        return {
            key: b,
            value: h
        }
    }
      , l = (u, m) => {
        const v = se();
        if (!s || !e.params.history.enabled)
            return;
        let w;
        e.params.url ? w = new URL(e.params.url) : w = v.location;
        const g = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${m}"]`) : e.slides[m];
        let b = a(g.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
            let y = e.params.history.root;
            y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
            b = `${y}/${u ? `${u}/` : ""}${b}`
        } else
            w.pathname.includes(u) || (b = `${u ? `${u}/` : ""}${b}`);
        e.params.history.keepQuery && (b += w.search);
        const h = v.history.state;
        h && h.value === b || (e.params.history.replaceState ? v.history.replaceState({
            value: b
        }, null, b) : v.history.pushState({
            value: b
        }, null, b))
    }
      , f = (u, m, v) => {
        if (m)
            for (let w = 0, g = e.slides.length; w < g; w += 1) {
                const b = e.slides[w];
                if (a(b.getAttribute("data-history")) === m) {
                    const y = e.getSlideIndex(b);
                    e.slideTo(y, u, v)
                }
            }
        else
            e.slideTo(0, u, v)
    }
      , o = () => {
        n = d(e.params.url),
        f(e.params.speed, n.value, !1)
    }
      , p = () => {
        const u = se();
        if (e.params.history) {
            if (!u.history || !u.history.pushState) {
                e.params.history.enabled = !1,
                e.params.hashNavigation.enabled = !0;
                return
            }
            if (s = !0,
            n = d(e.params.url),
            !n.key && !n.value) {
                e.params.history.replaceState || u.addEventListener("popstate", o);
                return
            }
            f(0, n.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || u.addEventListener("popstate", o)
        }
    }
      , c = () => {
        const u = se();
        e.params.history.replaceState || u.removeEventListener("popstate", o)
    }
    ;
    t("init", () => {
        e.params.history.enabled && p()
    }
    ),
    t("destroy", () => {
        e.params.history.enabled && c()
    }
    ),
    t("transitionEnd _freeModeNoMomentumRelease", () => {
        s && l(e.params.history.key, e.activeIndex)
    }
    ),
    t("slideChange", () => {
        s && e.params.cssMode && l(e.params.history.key, e.activeIndex)
    }
    )
}
function In(r) {
    let {swiper: e, extendParams: i, emit: t, on: s} = r
      , n = !1;
    const a = de()
      , d = se();
    i({
        hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex(c, u) {
                if (e.virtual && e.params.virtual.enabled) {
                    const m = e.slides.filter(w => w.getAttribute("data-hash") === u)[0];
                    return m ? parseInt(m.getAttribute("data-swiper-slide-index"), 10) : 0
                }
                return e.getSlideIndex(oe(e.slidesEl, `.${e.params.slideClass}[data-hash="${u}"], swiper-slide[data-hash="${u}"]`)[0])
            }
        }
    });
    const l = () => {
        t("hashChange");
        const c = a.location.hash.replace("#", "")
          , u = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex]
          , m = u ? u.getAttribute("data-hash") : "";
        if (c !== m) {
            const v = e.params.hashNavigation.getSlideIndex(e, c);
            if (typeof v > "u" || Number.isNaN(v))
                return;
            e.slideTo(v)
        }
    }
      , f = () => {
        if (!n || !e.params.hashNavigation.enabled)
            return;
        const c = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex]
          , u = c ? c.getAttribute("data-hash") || c.getAttribute("data-history") : "";
        e.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${u}` || ""),
        t("hashSet")) : (a.location.hash = u || "",
        t("hashSet"))
    }
      , o = () => {
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
            return;
        n = !0;
        const c = a.location.hash.replace("#", "");
        if (c) {
            const m = e.params.hashNavigation.getSlideIndex(e, c);
            e.slideTo(m || 0, 0, e.params.runCallbacksOnInit, !0)
        }
        e.params.hashNavigation.watchState && d.addEventListener("hashchange", l)
    }
      , p = () => {
        e.params.hashNavigation.watchState && d.removeEventListener("hashchange", l)
    }
    ;
    s("init", () => {
        e.params.hashNavigation.enabled && o()
    }
    ),
    s("destroy", () => {
        e.params.hashNavigation.enabled && p()
    }
    ),
    s("transitionEnd _freeModeNoMomentumRelease", () => {
        n && f()
    }
    ),
    s("slideChange", () => {
        n && e.params.cssMode && f()
    }
    )
}
function zn(r) {
    let {swiper: e, extendParams: i, on: t, emit: s, params: n} = r;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
    i({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let a, d, l = n && n.autoplay ? n.autoplay.delay : 3e3, f = n && n.autoplay ? n.autoplay.delay : 3e3, o, p = new Date().getTime(), c, u, m, v, w, g, b;
    function h(B) {
        !e || e.destroyed || !e.wrapperEl || B.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", h),
        !(b || B.detail && B.detail.bySwiperTouchMove) && k())
    }
    const y = () => {
        if (e.destroyed || !e.autoplay.running)
            return;
        e.autoplay.paused ? c = !0 : c && (f = o,
        c = !1);
        const B = e.autoplay.paused ? o : p + f - new Date().getTime();
        e.autoplay.timeLeft = B,
        s("autoplayTimeLeft", B, B / l),
        d = requestAnimationFrame( () => {
            y()
        }
        )
    }
      , C = () => {
        let B;
        return e.virtual && e.params.virtual.enabled ? B = e.slides.filter(Z => Z.classList.contains("swiper-slide-active"))[0] : B = e.slides[e.activeIndex],
        B ? parseInt(B.getAttribute("data-swiper-autoplay"), 10) : void 0
    }
      , E = B => {
        if (e.destroyed || !e.autoplay.running)
            return;
        cancelAnimationFrame(d),
        y();
        let F = typeof B > "u" ? e.params.autoplay.delay : B;
        l = e.params.autoplay.delay,
        f = e.params.autoplay.delay;
        const Z = C();
        !Number.isNaN(Z) && Z > 0 && typeof B > "u" && (F = Z,
        l = Z,
        f = Z),
        o = F;
        const V = e.params.speed
          , X = () => {
            !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(V, !0, !0),
            s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, V, !0, !0),
            s("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(V, !0, !0),
            s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, V, !0, !0),
            s("autoplay")),
            e.params.cssMode && (p = new Date().getTime(),
            requestAnimationFrame( () => {
                E()
            }
            )))
        }
        ;
        return F > 0 ? (clearTimeout(a),
        a = setTimeout( () => {
            X()
        }
        , F)) : requestAnimationFrame( () => {
            X()
        }
        ),
        F
    }
      , A = () => {
        p = new Date().getTime(),
        e.autoplay.running = !0,
        E(),
        s("autoplayStart")
    }
      , M = () => {
        e.autoplay.running = !1,
        clearTimeout(a),
        cancelAnimationFrame(d),
        s("autoplayStop")
    }
      , _ = (B, F) => {
        if (e.destroyed || !e.autoplay.running)
            return;
        clearTimeout(a),
        B || (g = !0);
        const Z = () => {
            s("autoplayPause"),
            e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", h) : k()
        }
        ;
        if (e.autoplay.paused = !0,
        F) {
            w && (o = e.params.autoplay.delay),
            w = !1,
            Z();
            return
        }
        o = (o || e.params.autoplay.delay) - (new Date().getTime() - p),
        !(e.isEnd && o < 0 && !e.params.loop) && (o < 0 && (o = 0),
        Z())
    }
      , k = () => {
        e.isEnd && o < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (p = new Date().getTime(),
        g ? (g = !1,
        E(o)) : E(),
        e.autoplay.paused = !1,
        s("autoplayResume"))
    }
      , H = () => {
        if (e.destroyed || !e.autoplay.running)
            return;
        const B = de();
        B.visibilityState === "hidden" && (g = !0,
        _(!0)),
        B.visibilityState === "visible" && k()
    }
      , P = B => {
        B.pointerType === "mouse" && (g = !0,
        b = !0,
        !(e.animating || e.autoplay.paused) && _(!0))
    }
      , x = B => {
        B.pointerType === "mouse" && (b = !1,
        e.autoplay.paused && k())
    }
      , L = () => {
        e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", P),
        e.el.addEventListener("pointerleave", x))
    }
      , G = () => {
        e.el.removeEventListener("pointerenter", P),
        e.el.removeEventListener("pointerleave", x)
    }
      , I = () => {
        de().addEventListener("visibilitychange", H)
    }
      , z = () => {
        de().removeEventListener("visibilitychange", H)
    }
    ;
    t("init", () => {
        e.params.autoplay.enabled && (L(),
        I(),
        A())
    }
    ),
    t("destroy", () => {
        G(),
        z(),
        e.autoplay.running && M()
    }
    ),
    t("_freeModeStaticRelease", () => {
        (m || g) && k()
    }
    ),
    t("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? M() : _(!0, !0)
    }
    ),
    t("beforeTransitionStart", (B, F, Z) => {
        e.destroyed || !e.autoplay.running || (Z || !e.params.autoplay.disableOnInteraction ? _(!0, !0) : M())
    }
    ),
    t("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                M();
                return
            }
            u = !0,
            m = !1,
            g = !1,
            v = setTimeout( () => {
                g = !0,
                m = !0,
                _(!0)
            }
            , 200)
        }
    }
    ),
    t("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !u)) {
            if (clearTimeout(v),
            clearTimeout(a),
            e.params.autoplay.disableOnInteraction) {
                m = !1,
                u = !1;
                return
            }
            m && e.params.cssMode && k(),
            m = !1,
            u = !1
        }
    }
    ),
    t("slideChange", () => {
        e.destroyed || !e.autoplay.running || (w = !0)
    }
    ),
    Object.assign(e.autoplay, {
        start: A,
        stop: M,
        pause: _,
        resume: k
    })
}
function Dn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let s = !1
      , n = !1;
    e.thumbs = {
        swiper: null
    };
    function a() {
        const f = e.thumbs.swiper;
        if (!f || f.destroyed)
            return;
        const o = f.clickedIndex
          , p = f.clickedSlide;
        if (p && p.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof o > "u" || o === null)
            return;
        let c;
        f.params.loop ? c = parseInt(f.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : c = o,
        e.params.loop ? e.slideToLoop(c) : e.slideTo(c)
    }
    function d() {
        const {thumbs: f} = e.params;
        if (s)
            return !1;
        s = !0;
        const o = e.constructor;
        if (f.swiper instanceof o)
            e.thumbs.swiper = f.swiper,
            Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            e.thumbs.swiper.update();
        else if (Be(f.swiper)) {
            const p = Object.assign({}, f.swiper);
            Object.assign(p, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            e.thumbs.swiper = new o(p),
            n = !0
        }
        return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
    }
    function l(f) {
        const o = e.thumbs.swiper;
        if (!o || o.destroyed)
            return;
        const p = o.params.slidesPerView === "auto" ? o.slidesPerViewDynamic() : o.params.slidesPerView;
        let c = 1;
        const u = e.params.thumbs.slideThumbActiveClass;
        if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (c = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (c = 1),
        c = Math.floor(c),
        o.slides.forEach(w => w.classList.remove(u)),
        o.params.loop || o.params.virtual && o.params.virtual.enabled)
            for (let w = 0; w < c; w += 1)
                oe(o.slidesEl, `[data-swiper-slide-index="${e.realIndex + w}"]`).forEach(g => {
                    g.classList.add(u)
                }
                );
        else
            for (let w = 0; w < c; w += 1)
                o.slides[e.realIndex + w] && o.slides[e.realIndex + w].classList.add(u);
        const m = e.params.thumbs.autoScrollOffset
          , v = m && !o.params.loop;
        if (e.realIndex !== o.realIndex || v) {
            const w = o.activeIndex;
            let g, b;
            if (o.params.loop) {
                const h = o.slides.filter(y => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
                g = o.slides.indexOf(h),
                b = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else
                g = e.realIndex,
                b = g > e.previousIndex ? "next" : "prev";
            v && (g += b === "next" ? m : -1 * m),
            o.visibleSlidesIndexes && o.visibleSlidesIndexes.indexOf(g) < 0 && (o.params.centeredSlides ? g > w ? g = g - Math.floor(p / 2) + 1 : g = g + Math.floor(p / 2) - 1 : g > w && o.params.slidesPerGroup,
            o.slideTo(g, f ? 0 : void 0))
        }
    }
    t("beforeInit", () => {
        const {thumbs: f} = e.params;
        if (!(!f || !f.swiper))
            if (typeof f.swiper == "string" || f.swiper instanceof HTMLElement) {
                const o = de()
                  , p = () => {
                    const u = typeof f.swiper == "string" ? o.querySelector(f.swiper) : f.swiper;
                    if (u && u.swiper)
                        f.swiper = u.swiper,
                        d(),
                        l(!0);
                    else if (u) {
                        const m = v => {
                            f.swiper = v.detail[0],
                            u.removeEventListener("init", m),
                            d(),
                            l(!0),
                            f.swiper.update(),
                            e.update()
                        }
                        ;
                        u.addEventListener("init", m)
                    }
                    return u
                }
                  , c = () => {
                    if (e.destroyed)
                        return;
                    p() || requestAnimationFrame(c)
                }
                ;
                requestAnimationFrame(c)
            } else
                d(),
                l(!0)
    }
    ),
    t("slideChange update resize observerUpdate", () => {
        l()
    }
    ),
    t("setTransition", (f, o) => {
        const p = e.thumbs.swiper;
        !p || p.destroyed || p.setTransition(o)
    }
    ),
    t("beforeDestroy", () => {
        const f = e.thumbs.swiper;
        !f || f.destroyed || n && f.destroy()
    }
    ),
    Object.assign(e.thumbs, {
        init: d,
        update: l
    })
}
function $n(r) {
    let {swiper: e, extendParams: i, emit: t, once: s} = r;
    i({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });
    function n() {
        if (e.params.cssMode)
            return;
        const l = e.getTranslate();
        e.setTranslate(l),
        e.setTransition(0),
        e.touchEventsData.velocities.length = 0,
        e.freeMode.onTouchEnd({
            currentPos: e.rtl ? e.translate : -e.translate
        })
    }
    function a() {
        if (e.params.cssMode)
            return;
        const {touchEventsData: l, touches: f} = e;
        l.velocities.length === 0 && l.velocities.push({
            position: f[e.isHorizontal() ? "startX" : "startY"],
            time: l.touchStartTime
        }),
        l.velocities.push({
            position: f[e.isHorizontal() ? "currentX" : "currentY"],
            time: ge()
        })
    }
    function d(l) {
        let {currentPos: f} = l;
        if (e.params.cssMode)
            return;
        const {params: o, wrapperEl: p, rtlTranslate: c, snapGrid: u, touchEventsData: m} = e
          , w = ge() - m.touchStartTime;
        if (f < -e.minTranslate()) {
            e.slideTo(e.activeIndex);
            return
        }
        if (f > -e.maxTranslate()) {
            e.slides.length < u.length ? e.slideTo(u.length - 1) : e.slideTo(e.slides.length - 1);
            return
        }
        if (o.freeMode.momentum) {
            if (m.velocities.length > 1) {
                const M = m.velocities.pop()
                  , _ = m.velocities.pop()
                  , k = M.position - _.position
                  , H = M.time - _.time;
                e.velocity = k / H,
                e.velocity /= 2,
                Math.abs(e.velocity) < o.freeMode.minimumVelocity && (e.velocity = 0),
                (H > 150 || ge() - M.time > 300) && (e.velocity = 0)
            } else
                e.velocity = 0;
            e.velocity *= o.freeMode.momentumVelocityRatio,
            m.velocities.length = 0;
            let g = 1e3 * o.freeMode.momentumRatio;
            const b = e.velocity * g;
            let h = e.translate + b;
            c && (h = -h);
            let y = !1, C;
            const E = Math.abs(e.velocity) * 20 * o.freeMode.momentumBounceRatio;
            let A;
            if (h < e.maxTranslate())
                o.freeMode.momentumBounce ? (h + e.maxTranslate() < -E && (h = e.maxTranslate() - E),
                C = e.maxTranslate(),
                y = !0,
                m.allowMomentumBounce = !0) : h = e.maxTranslate(),
                o.loop && o.centeredSlides && (A = !0);
            else if (h > e.minTranslate())
                o.freeMode.momentumBounce ? (h - e.minTranslate() > E && (h = e.minTranslate() + E),
                C = e.minTranslate(),
                y = !0,
                m.allowMomentumBounce = !0) : h = e.minTranslate(),
                o.loop && o.centeredSlides && (A = !0);
            else if (o.freeMode.sticky) {
                let M;
                for (let _ = 0; _ < u.length; _ += 1)
                    if (u[_] > -h) {
                        M = _;
                        break
                    }
                Math.abs(u[M] - h) < Math.abs(u[M - 1] - h) || e.swipeDirection === "next" ? h = u[M] : h = u[M - 1],
                h = -h
            }
            if (A && s("transitionEnd", () => {
                e.loopFix()
            }
            ),
            e.velocity !== 0) {
                if (c ? g = Math.abs((-h - e.translate) / e.velocity) : g = Math.abs((h - e.translate) / e.velocity),
                o.freeMode.sticky) {
                    const M = Math.abs((c ? -h : h) - e.translate)
                      , _ = e.slidesSizesGrid[e.activeIndex];
                    M < _ ? g = o.speed : M < 2 * _ ? g = o.speed * 1.5 : g = o.speed * 2.5
                }
            } else if (o.freeMode.sticky) {
                e.slideToClosest();
                return
            }
            o.freeMode.momentumBounce && y ? (e.updateProgress(C),
            e.setTransition(g),
            e.setTranslate(h),
            e.transitionStart(!0, e.swipeDirection),
            e.animating = !0,
            Ge(p, () => {
                !e || e.destroyed || !m.allowMomentumBounce || (t("momentumBounce"),
                e.setTransition(o.speed),
                setTimeout( () => {
                    e.setTranslate(C),
                    Ge(p, () => {
                        !e || e.destroyed || e.transitionEnd()
                    }
                    )
                }
                , 0))
            }
            )) : e.velocity ? (t("_freeModeNoMomentumRelease"),
            e.updateProgress(h),
            e.setTransition(g),
            e.setTranslate(h),
            e.transitionStart(!0, e.swipeDirection),
            e.animating || (e.animating = !0,
            Ge(p, () => {
                !e || e.destroyed || e.transitionEnd()
            }
            ))) : e.updateProgress(h),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        } else if (o.freeMode.sticky) {
            e.slideToClosest();
            return
        } else
            o.freeMode && t("_freeModeNoMomentumRelease");
        (!o.freeMode.momentum || w >= o.longSwipesMs) && (t("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses())
    }
    Object.assign(e, {
        freeMode: {
            onTouchStart: n,
            onTouchMove: a,
            onTouchEnd: d
        }
    })
}
function On(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    let s, n, a, d;
    const l = () => {
        let v = e.params.spaceBetween;
        return typeof v == "string" && v.indexOf("%") >= 0 ? v = parseFloat(v.replace("%", "")) / 100 * e.size : typeof v == "string" && (v = parseFloat(v)),
        v
    }
      , f = v => {
        const {slidesPerView: w} = e.params
          , {rows: g, fill: b} = e.params.grid
          , h = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : v.length;
        a = Math.floor(h / g),
        Math.floor(h / g) === h / g ? s = h : s = Math.ceil(h / g) * g,
        w !== "auto" && b === "row" && (s = Math.max(s, w * g)),
        n = s / g
    }
      , o = () => {
        e.slides && e.slides.forEach(v => {
            v.swiperSlideGridSet && (v.style.height = "",
            v.style[e.getDirectionLabel("margin-top")] = "")
        }
        )
    }
      , p = (v, w, g) => {
        const {slidesPerGroup: b} = e.params
          , h = l()
          , {rows: y, fill: C} = e.params.grid
          , E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : g.length;
        let A, M, _;
        if (C === "row" && b > 1) {
            const k = Math.floor(v / (b * y))
              , H = v - y * b * k
              , P = k === 0 ? b : Math.min(Math.ceil((E - k * y * b) / y), b);
            _ = Math.floor(H / P),
            M = H - _ * P + k * b,
            A = M + _ * s / y,
            w.style.order = A
        } else
            C === "column" ? (M = Math.floor(v / y),
            _ = v - M * y,
            (M > a || M === a && _ === y - 1) && (_ += 1,
            _ >= y && (_ = 0,
            M += 1))) : (_ = Math.floor(v / n),
            M = v - _ * n);
        w.row = _,
        w.column = M,
        w.style.height = `calc((100% - ${(y - 1) * h}px) / ${y})`,
        w.style[e.getDirectionLabel("margin-top")] = _ !== 0 ? h && `${h}px` : "",
        w.swiperSlideGridSet = !0
    }
      , c = (v, w) => {
        const {centeredSlides: g, roundLengths: b} = e.params
          , h = l()
          , {rows: y} = e.params.grid;
        if (e.virtualSize = (v + h) * s,
        e.virtualSize = Math.ceil(e.virtualSize / y) - h,
        e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
        g) {
            const C = [];
            for (let E = 0; E < w.length; E += 1) {
                let A = w[E];
                b && (A = Math.floor(A)),
                w[E] < e.virtualSize + w[0] && C.push(A)
            }
            w.splice(0, w.length),
            w.push(...C)
        }
    }
      , u = () => {
        d = e.params.grid && e.params.grid.rows > 1
    }
      , m = () => {
        const {params: v, el: w} = e
          , g = v.grid && v.grid.rows > 1;
        d && !g ? (w.classList.remove(`${v.containerModifierClass}grid`, `${v.containerModifierClass}grid-column`),
        a = 1,
        e.emitContainerClasses()) : !d && g && (w.classList.add(`${v.containerModifierClass}grid`),
        v.grid.fill === "column" && w.classList.add(`${v.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
        d = g
    }
    ;
    t("init", u),
    t("update", m),
    e.grid = {
        initSlides: f,
        unsetSlides: o,
        updateSlide: p,
        updateWrapperSize: c
    }
}
function Nn(r) {
    const e = this
      , {params: i, slidesEl: t} = e;
    i.loop && e.loopDestroy();
    const s = n => {
        if (typeof n == "string") {
            const a = document.createElement("div");
            a.innerHTML = n,
            t.append(a.children[0]),
            a.innerHTML = ""
        } else
            t.append(n)
    }
    ;
    if (typeof r == "object" && "length"in r)
        for (let n = 0; n < r.length; n += 1)
            r[n] && s(r[n]);
    else
        s(r);
    e.recalcSlides(),
    i.loop && e.loopCreate(),
    (!i.observer || e.isElement) && e.update()
}
function Hn(r) {
    const e = this
      , {params: i, activeIndex: t, slidesEl: s} = e;
    i.loop && e.loopDestroy();
    let n = t + 1;
    const a = d => {
        if (typeof d == "string") {
            const l = document.createElement("div");
            l.innerHTML = d,
            s.prepend(l.children[0]),
            l.innerHTML = ""
        } else
            s.prepend(d)
    }
    ;
    if (typeof r == "object" && "length"in r) {
        for (let d = 0; d < r.length; d += 1)
            r[d] && a(r[d]);
        n = t + r.length
    } else
        a(r);
    e.recalcSlides(),
    i.loop && e.loopCreate(),
    (!i.observer || e.isElement) && e.update(),
    e.slideTo(n, 0, !1)
}
function Bn(r, e) {
    const i = this
      , {params: t, activeIndex: s, slidesEl: n} = i;
    let a = s;
    t.loop && (a -= i.loopedSlides,
    i.loopDestroy(),
    i.recalcSlides());
    const d = i.slides.length;
    if (r <= 0) {
        i.prependSlide(e);
        return
    }
    if (r >= d) {
        i.appendSlide(e);
        return
    }
    let l = a > r ? a + 1 : a;
    const f = [];
    for (let o = d - 1; o >= r; o -= 1) {
        const p = i.slides[o];
        p.remove(),
        f.unshift(p)
    }
    if (typeof e == "object" && "length"in e) {
        for (let o = 0; o < e.length; o += 1)
            e[o] && n.append(e[o]);
        l = a > r ? a + e.length : a
    } else
        n.append(e);
    for (let o = 0; o < f.length; o += 1)
        n.append(f[o]);
    i.recalcSlides(),
    t.loop && i.loopCreate(),
    (!t.observer || i.isElement) && i.update(),
    t.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
}
function Vn(r) {
    const e = this
      , {params: i, activeIndex: t} = e;
    let s = t;
    i.loop && (s -= e.loopedSlides,
    e.loopDestroy());
    let n = s, a;
    if (typeof r == "object" && "length"in r) {
        for (let d = 0; d < r.length; d += 1)
            a = r[d],
            e.slides[a] && e.slides[a].remove(),
            a < n && (n -= 1);
        n = Math.max(n, 0)
    } else
        a = r,
        e.slides[a] && e.slides[a].remove(),
        a < n && (n -= 1),
        n = Math.max(n, 0);
    e.recalcSlides(),
    i.loop && e.loopCreate(),
    (!i.observer || e.isElement) && e.update(),
    i.loop ? e.slideTo(n + e.loopedSlides, 0, !1) : e.slideTo(n, 0, !1)
}
function Gn() {
    const r = this
      , e = [];
    for (let i = 0; i < r.slides.length; i += 1)
        e.push(i);
    r.removeSlide(e)
}
function Rn(r) {
    let {swiper: e} = r;
    Object.assign(e, {
        appendSlide: Nn.bind(e),
        prependSlide: Hn.bind(e),
        addSlide: Bn.bind(e),
        removeSlide: Vn.bind(e),
        removeAllSlides: Gn.bind(e)
    })
}
function Oe(r) {
    const {effect: e, swiper: i, on: t, setTranslate: s, setTransition: n, overwriteParams: a, perspective: d, recreateShadows: l, getEffectParams: f} = r;
    t("beforeInit", () => {
        if (i.params.effect !== e)
            return;
        i.classNames.push(`${i.params.containerModifierClass}${e}`),
        d && d() && i.classNames.push(`${i.params.containerModifierClass}3d`);
        const p = a ? a() : {};
        Object.assign(i.params, p),
        Object.assign(i.originalParams, p)
    }
    ),
    t("setTranslate", () => {
        i.params.effect === e && s()
    }
    ),
    t("setTransition", (p, c) => {
        i.params.effect === e && n(c)
    }
    ),
    t("transitionEnd", () => {
        if (i.params.effect === e && l) {
            if (!f || !f().slideShadows)
                return;
            i.slides.forEach(p => {
                p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c => c.remove())
            }
            ),
            l()
        }
    }
    );
    let o;
    t("virtualUpdate", () => {
        i.params.effect === e && (i.slides.length || (o = !0),
        requestAnimationFrame( () => {
            o && i.slides && i.slides.length && (s(),
            o = !1)
        }
        ))
    }
    )
}
function Xe(r, e) {
    const i = ze(e);
    return i !== e && (i.style.backfaceVisibility = "hidden",
    i.style["-webkit-backface-visibility"] = "hidden"),
    i
}
function tt(r) {
    let {swiper: e, duration: i, transformElements: t, allSlides: s} = r;
    const {activeIndex: n} = e
      , a = d => d.parentElement ? d.parentElement : e.slides.filter(f => f.shadowRoot && f.shadowRoot === d.parentNode)[0];
    if (e.params.virtualTranslate && i !== 0) {
        let d = !1, l;
        s ? l = t : l = t.filter(f => {
            const o = f.classList.contains("swiper-slide-transform") ? a(f) : f;
            return e.getSlideIndex(o) === n
        }
        ),
        l.forEach(f => {
            Ge(f, () => {
                if (d || !e || e.destroyed)
                    return;
                d = !0,
                e.animating = !1;
                const o = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(o)
            }
            )
        }
        )
    }
}
function jn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        fadeEffect: {
            crossFade: !1
        }
    }),
    Oe({
        effect: "fade",
        swiper: e,
        on: t,
        setTranslate: () => {
            const {slides: a} = e
              , d = e.params.fadeEffect;
            for (let l = 0; l < a.length; l += 1) {
                const f = e.slides[l];
                let p = -f.swiperSlideOffset;
                e.params.virtualTranslate || (p -= e.translate);
                let c = 0;
                e.isHorizontal() || (c = p,
                p = 0);
                const u = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(f.progress), 0) : 1 + Math.min(Math.max(f.progress, -1), 0)
                  , m = Xe(d, f);
                m.style.opacity = u,
                m.style.transform = `translate3d(${p}px, ${c}px, 0px)`
            }
        }
        ,
        setTransition: a => {
            const d = e.slides.map(l => ze(l));
            d.forEach(l => {
                l.style.transitionDuration = `${a}ms`
            }
            ),
            tt({
                swiper: e,
                duration: a,
                transformElements: d,
                allSlides: !0
            })
        }
        ,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
function Xn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    });
    const s = (l, f, o) => {
        let p = o ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top")
          , c = o ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
        p || (p = me("div", `swiper-slide-shadow-cube swiper-slide-shadow-${o ? "left" : "top"}`.split(" ")),
        l.append(p)),
        c || (c = me("div", `swiper-slide-shadow-cube swiper-slide-shadow-${o ? "right" : "bottom"}`.split(" ")),
        l.append(c)),
        p && (p.style.opacity = Math.max(-f, 0)),
        c && (c.style.opacity = Math.max(f, 0))
    }
    ;
    Oe({
        effect: "cube",
        swiper: e,
        on: t,
        setTranslate: () => {
            const {el: l, wrapperEl: f, slides: o, width: p, height: c, rtlTranslate: u, size: m, browser: v} = e
              , w = e.params.cubeEffect
              , g = e.isHorizontal()
              , b = e.virtual && e.params.virtual.enabled;
            let h = 0, y;
            w.shadow && (g ? (y = e.wrapperEl.querySelector(".swiper-cube-shadow"),
            y || (y = me("div", "swiper-cube-shadow"),
            e.wrapperEl.append(y)),
            y.style.height = `${p}px`) : (y = l.querySelector(".swiper-cube-shadow"),
            y || (y = me("div", "swiper-cube-shadow"),
            l.append(y))));
            for (let E = 0; E < o.length; E += 1) {
                const A = o[E];
                let M = E;
                b && (M = parseInt(A.getAttribute("data-swiper-slide-index"), 10));
                let _ = M * 90
                  , k = Math.floor(_ / 360);
                u && (_ = -_,
                k = Math.floor(-_ / 360));
                const H = Math.max(Math.min(A.progress, 1), -1);
                let P = 0
                  , x = 0
                  , L = 0;
                M % 4 === 0 ? (P = -k * 4 * m,
                L = 0) : (M - 1) % 4 === 0 ? (P = 0,
                L = -k * 4 * m) : (M - 2) % 4 === 0 ? (P = m + k * 4 * m,
                L = m) : (M - 3) % 4 === 0 && (P = -m,
                L = 3 * m + m * 4 * k),
                u && (P = -P),
                g || (x = P,
                P = 0);
                const G = `rotateX(${g ? 0 : -_}deg) rotateY(${g ? _ : 0}deg) translate3d(${P}px, ${x}px, ${L}px)`;
                H <= 1 && H > -1 && (h = M * 90 + H * 90,
                u && (h = -M * 90 - H * 90),
                e.browser && e.browser.need3dFix && Math.abs(h) / 90 % 2 === 1 && (h += .001)),
                A.style.transform = G,
                w.slideShadows && s(A, H, g)
            }
            if (f.style.transformOrigin = `50% 50% -${m / 2}px`,
            f.style["-webkit-transform-origin"] = `50% 50% -${m / 2}px`,
            w.shadow)
                if (g)
                    y.style.transform = `translate3d(0px, ${p / 2 + w.shadowOffset}px, ${-p / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${w.shadowScale})`;
                else {
                    const E = Math.abs(h) - Math.floor(Math.abs(h) / 90) * 90
                      , A = 1.5 - (Math.sin(E * 2 * Math.PI / 360) / 2 + Math.cos(E * 2 * Math.PI / 360) / 2)
                      , M = w.shadowScale
                      , _ = w.shadowScale / A
                      , k = w.shadowOffset;
                    y.style.transform = `scale3d(${M}, 1, ${_}) translate3d(0px, ${c / 2 + k}px, ${-c / 2 / _}px) rotateX(-89.99deg)`
                }
            const C = (v.isSafari || v.isWebView) && v.needPerspectiveFix ? -m / 2 : 0;
            f.style.transform = `translate3d(0px,0,${C}px) rotateX(${e.isHorizontal() ? 0 : h}deg) rotateY(${e.isHorizontal() ? -h : 0}deg)`,
            f.style.setProperty("--swiper-cube-translate-z", `${C}px`)
        }
        ,
        setTransition: l => {
            const {el: f, slides: o} = e;
            if (o.forEach(p => {
                p.style.transitionDuration = `${l}ms`,
                p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c => {
                    c.style.transitionDuration = `${l}ms`
                }
                )
            }
            ),
            e.params.cubeEffect.shadow && !e.isHorizontal()) {
                const p = f.querySelector(".swiper-cube-shadow");
                p && (p.style.transitionDuration = `${l}ms`)
            }
        }
        ,
        recreateShadows: () => {
            const l = e.isHorizontal();
            e.slides.forEach(f => {
                const o = Math.max(Math.min(f.progress, 1), -1);
                s(f, o, l)
            }
            )
        }
        ,
        getEffectParams: () => e.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
        })
    })
}
function De(r, e, i) {
    const t = `swiper-slide-shadow${i ? `-${i}` : ""}${r ? ` swiper-slide-shadow-${r}` : ""}`
      , s = ze(e);
    let n = s.querySelector(`.${t.split(" ").join(".")}`);
    return n || (n = me("div", t.split(" ")),
    s.append(n)),
    n
}
function Fn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        flipEffect: {
            slideShadows: !0,
            limitRotation: !0
        }
    });
    const s = (l, f) => {
        let o = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top")
          , p = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
        o || (o = De("flip", l, e.isHorizontal() ? "left" : "top")),
        p || (p = De("flip", l, e.isHorizontal() ? "right" : "bottom")),
        o && (o.style.opacity = Math.max(-f, 0)),
        p && (p.style.opacity = Math.max(f, 0))
    }
    ;
    Oe({
        effect: "flip",
        swiper: e,
        on: t,
        setTranslate: () => {
            const {slides: l, rtlTranslate: f} = e
              , o = e.params.flipEffect;
            for (let p = 0; p < l.length; p += 1) {
                const c = l[p];
                let u = c.progress;
                e.params.flipEffect.limitRotation && (u = Math.max(Math.min(c.progress, 1), -1));
                const m = c.swiperSlideOffset;
                let w = -180 * u
                  , g = 0
                  , b = e.params.cssMode ? -m - e.translate : -m
                  , h = 0;
                e.isHorizontal() ? f && (w = -w) : (h = b,
                b = 0,
                g = -w,
                w = 0),
                e.browser && e.browser.need3dFix && (Math.abs(w) / 90 % 2 === 1 && (w += .001),
                Math.abs(g) / 90 % 2 === 1 && (g += .001)),
                c.style.zIndex = -Math.abs(Math.round(u)) + l.length,
                o.slideShadows && s(c, u);
                const y = `translate3d(${b}px, ${h}px, 0px) rotateX(${g}deg) rotateY(${w}deg)`
                  , C = Xe(o, c);
                C.style.transform = y
            }
        }
        ,
        setTransition: l => {
            const f = e.slides.map(o => ze(o));
            f.forEach(o => {
                o.style.transitionDuration = `${l}ms`,
                o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p => {
                    p.style.transitionDuration = `${l}ms`
                }
                )
            }
            ),
            tt({
                swiper: e,
                duration: l,
                transformElements: f
            })
        }
        ,
        recreateShadows: () => {
            e.params.flipEffect,
            e.slides.forEach(l => {
                let f = l.progress;
                e.params.flipEffect.limitRotation && (f = Math.max(Math.min(l.progress, 1), -1)),
                s(l, f)
            }
            )
        }
        ,
        getEffectParams: () => e.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
function Yn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    }),
    Oe({
        effect: "coverflow",
        swiper: e,
        on: t,
        setTranslate: () => {
            const {width: a, height: d, slides: l, slidesSizesGrid: f} = e
              , o = e.params.coverflowEffect
              , p = e.isHorizontal()
              , c = e.translate
              , u = p ? -c + a / 2 : -c + d / 2
              , m = p ? o.rotate : -o.rotate
              , v = o.depth;
            for (let w = 0, g = l.length; w < g; w += 1) {
                const b = l[w]
                  , h = f[w]
                  , y = b.swiperSlideOffset
                  , C = (u - y - h / 2) / h
                  , E = typeof o.modifier == "function" ? o.modifier(C) : C * o.modifier;
                let A = p ? m * E : 0
                  , M = p ? 0 : m * E
                  , _ = -v * Math.abs(E)
                  , k = o.stretch;
                typeof k == "string" && k.indexOf("%") !== -1 && (k = parseFloat(o.stretch) / 100 * h);
                let H = p ? 0 : k * E
                  , P = p ? k * E : 0
                  , x = 1 - (1 - o.scale) * Math.abs(E);
                Math.abs(P) < .001 && (P = 0),
                Math.abs(H) < .001 && (H = 0),
                Math.abs(_) < .001 && (_ = 0),
                Math.abs(A) < .001 && (A = 0),
                Math.abs(M) < .001 && (M = 0),
                Math.abs(x) < .001 && (x = 0),
                e.browser && e.browser.need3dFix && (Math.abs(A) / 90 % 2 === 1 && (A += .001),
                Math.abs(M) / 90 % 2 === 1 && (M += .001));
                const L = `translate3d(${P}px,${H}px,${_}px)  rotateX(${M}deg) rotateY(${A}deg) scale(${x})`
                  , G = Xe(o, b);
                if (G.style.transform = L,
                b.style.zIndex = -Math.abs(Math.round(E)) + 1,
                o.slideShadows) {
                    let I = p ? b.querySelector(".swiper-slide-shadow-left") : b.querySelector(".swiper-slide-shadow-top")
                      , z = p ? b.querySelector(".swiper-slide-shadow-right") : b.querySelector(".swiper-slide-shadow-bottom");
                    I || (I = De("coverflow", b, p ? "left" : "top")),
                    z || (z = De("coverflow", b, p ? "right" : "bottom")),
                    I && (I.style.opacity = E > 0 ? E : 0),
                    z && (z.style.opacity = -E > 0 ? -E : 0)
                }
            }
        }
        ,
        setTransition: a => {
            e.slides.map(l => ze(l)).forEach(l => {
                l.style.transitionDuration = `${a}ms`,
                l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f => {
                    f.style.transitionDuration = `${a}ms`
                }
                )
            }
            )
        }
        ,
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0
        })
    })
}
function Wn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            }
        }
    });
    const s = d => typeof d == "string" ? d : `${d}px`;
    Oe({
        effect: "creative",
        swiper: e,
        on: t,
        setTranslate: () => {
            const {slides: d, wrapperEl: l, slidesSizesGrid: f} = e
              , o = e.params.creativeEffect
              , {progressMultiplier: p} = o
              , c = e.params.centeredSlides;
            if (c) {
                const u = f[0] / 2 - e.params.slidesOffsetBefore || 0;
                l.style.transform = `translateX(calc(50% - ${u}px))`
            }
            for (let u = 0; u < d.length; u += 1) {
                const m = d[u]
                  , v = m.progress
                  , w = Math.min(Math.max(m.progress, -o.limitProgress), o.limitProgress);
                let g = w;
                c || (g = Math.min(Math.max(m.originalProgress, -o.limitProgress), o.limitProgress));
                const b = m.swiperSlideOffset
                  , h = [e.params.cssMode ? -b - e.translate : -b, 0, 0]
                  , y = [0, 0, 0];
                let C = !1;
                e.isHorizontal() || (h[1] = h[0],
                h[0] = 0);
                let E = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1
                };
                w < 0 ? (E = o.next,
                C = !0) : w > 0 && (E = o.prev,
                C = !0),
                h.forEach( (x, L) => {
                    h[L] = `calc(${x}px + (${s(E.translate[L])} * ${Math.abs(w * p)}))`
                }
                ),
                y.forEach( (x, L) => {
                    let G = E.rotate[L] * Math.abs(w * p);
                    e.browser && e.browser.need3dFix && Math.abs(G) / 90 % 2 === 1 && (G += .001),
                    y[L] = G
                }
                ),
                m.style.zIndex = -Math.abs(Math.round(v)) + d.length;
                const A = h.join(", ")
                  , M = `rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`
                  , _ = g < 0 ? `scale(${1 + (1 - E.scale) * g * p})` : `scale(${1 - (1 - E.scale) * g * p})`
                  , k = g < 0 ? 1 + (1 - E.opacity) * g * p : 1 - (1 - E.opacity) * g * p
                  , H = `translate3d(${A}) ${M} ${_}`;
                if (C && E.shadow || !C) {
                    let x = m.querySelector(".swiper-slide-shadow");
                    if (!x && E.shadow && (x = De("creative", m)),
                    x) {
                        const L = o.shadowPerProgress ? w * (1 / o.limitProgress) : w;
                        x.style.opacity = Math.min(Math.max(Math.abs(L), 0), 1)
                    }
                }
                const P = Xe(o, m);
                P.style.transform = H,
                P.style.opacity = k,
                E.origin && (P.style.transformOrigin = E.origin)
            }
        }
        ,
        setTransition: d => {
            const l = e.slides.map(f => ze(f));
            l.forEach(f => {
                f.style.transitionDuration = `${d}ms`,
                f.querySelectorAll(".swiper-slide-shadow").forEach(o => {
                    o.style.transitionDuration = `${d}ms`
                }
                )
            }
            ),
            tt({
                swiper: e,
                duration: d,
                transformElements: l,
                allSlides: !0
            })
        }
        ,
        perspective: () => e.params.creativeEffect.perspective,
        overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
function qn(r) {
    let {swiper: e, extendParams: i, on: t} = r;
    i({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    }),
    Oe({
        effect: "cards",
        swiper: e,
        on: t,
        setTranslate: () => {
            const {slides: a, activeIndex: d, rtlTranslate: l} = e
              , f = e.params.cardsEffect
              , {startTranslate: o, isTouched: p} = e.touchEventsData
              , c = l ? -e.translate : e.translate;
            for (let u = 0; u < a.length; u += 1) {
                const m = a[u]
                  , v = m.progress
                  , w = Math.min(Math.max(v, -4), 4);
                let g = m.swiperSlideOffset;
                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides && e.params.cssMode && (g -= a[0].swiperSlideOffset);
                let b = e.params.cssMode ? -g - e.translate : -g
                  , h = 0;
                const y = -100 * Math.abs(w);
                let C = 1
                  , E = -f.perSlideRotate * w
                  , A = f.perSlideOffset - Math.abs(w) * .75;
                const M = e.virtual && e.params.virtual.enabled ? e.virtual.from + u : u
                  , _ = (M === d || M === d - 1) && w > 0 && w < 1 && (p || e.params.cssMode) && c < o
                  , k = (M === d || M === d + 1) && w < 0 && w > -1 && (p || e.params.cssMode) && c > o;
                if (_ || k) {
                    const L = (1 - Math.abs((Math.abs(w) - .5) / .5)) ** .5;
                    E += -28 * w * L,
                    C += -.5 * L,
                    A += 96 * L,
                    h = `${-25 * L * Math.abs(w)}%`
                }
                if (w < 0 ? b = `calc(${b}px ${l ? "-" : "+"} (${A * Math.abs(w)}%))` : w > 0 ? b = `calc(${b}px ${l ? "-" : "+"} (-${A * Math.abs(w)}%))` : b = `${b}px`,
                !e.isHorizontal()) {
                    const L = h;
                    h = b,
                    b = L
                }
                const H = w < 0 ? `${1 + (1 - C) * w}` : `${1 - (1 - C) * w}`
                  , P = `
        translate3d(${b}, ${h}, ${y}px)
        rotateZ(${f.rotate ? l ? -E : E : 0}deg)
        scale(${H})
      `;
                if (f.slideShadows) {
                    let L = m.querySelector(".swiper-slide-shadow");
                    L || (L = De("cards", m)),
                    L && (L.style.opacity = Math.min(Math.max((Math.abs(w) - .5) / .5, 0), 1))
                }
                m.style.zIndex = -Math.abs(Math.round(v)) + a.length;
                const x = Xe(f, m);
                x.style.transform = P
            }
        }
        ,
        setTransition: a => {
            const d = e.slides.map(l => ze(l));
            d.forEach(l => {
                l.style.transitionDuration = `${a}ms`,
                l.querySelectorAll(".swiper-slide-shadow").forEach(f => {
                    f.style.transitionDuration = `${a}ms`
                }
                )
            }
            ),
            tt({
                swiper: e,
                duration: a,
                transformElements: d
            })
        }
        ,
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
const Un = [Sn, En, _n, Tn, xn, Mn, kn, Cn, Pn, Ln, An, In, zn, Dn, $n, On, Rn, jn, Xn, Fn, Yn, Wn, qn];
pe.use(Un);
const it = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function $e(r) {
    return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object" && !r.__swiper__
}
function bt(r, e) {
    const i = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter(t => i.indexOf(t) < 0).forEach(t => {
        typeof r[t] > "u" ? r[t] = e[t] : $e(e[t]) && $e(r[t]) && Object.keys(e[t]).length > 0 ? e[t].__swiper__ ? r[t] = e[t] : bt(r[t], e[t]) : r[t] = e[t]
    }
    )
}
function Zn(r) {
    return r === void 0 && (r = {}),
    r.navigation && typeof r.navigation.nextEl > "u" && typeof r.navigation.prevEl > "u"
}
function Kn(r) {
    return r === void 0 && (r = {}),
    r.pagination && typeof r.pagination.el > "u"
}
function Jn(r) {
    return r === void 0 && (r = {}),
    r.scrollbar && typeof r.scrollbar.el > "u"
}
function Ke(r) {
    return r === void 0 && (r = ""),
    r.replace(/-[a-z]/g, e => e.toUpperCase().replace("-", ""))
}
function Qn(r) {
    let {swiper: e, slides: i, passedParams: t, changedParams: s, nextEl: n, prevEl: a, scrollbarEl: d, paginationEl: l} = r;
    const f = s.filter(_ => _ !== "children" && _ !== "direction" && _ !== "wrapperClass")
      , {params: o, pagination: p, navigation: c, scrollbar: u, virtual: m, thumbs: v} = e;
    let w, g, b, h, y, C, E, A;
    s.includes("thumbs") && t.thumbs && t.thumbs.swiper && o.thumbs && !o.thumbs.swiper && (w = !0),
    s.includes("controller") && t.controller && t.controller.control && o.controller && !o.controller.control && (g = !0),
    s.includes("pagination") && t.pagination && (t.pagination.el || l) && (o.pagination || o.pagination === !1) && p && !p.el && (b = !0),
    s.includes("scrollbar") && t.scrollbar && (t.scrollbar.el || d) && (o.scrollbar || o.scrollbar === !1) && u && !u.el && (h = !0),
    s.includes("navigation") && t.navigation && (t.navigation.prevEl || a) && (t.navigation.nextEl || n) && (o.navigation || o.navigation === !1) && c && !c.prevEl && !c.nextEl && (y = !0);
    const M = _ => {
        e[_] && (e[_].destroy(),
        _ === "navigation" ? (e.isElement && (e[_].prevEl.remove(),
        e[_].nextEl.remove()),
        o[_].prevEl = void 0,
        o[_].nextEl = void 0,
        e[_].prevEl = void 0,
        e[_].nextEl = void 0) : (e.isElement && e[_].el.remove(),
        o[_].el = void 0,
        e[_].el = void 0))
    }
    ;
    s.includes("loop") && e.isElement && (o.loop && !t.loop ? C = !0 : !o.loop && t.loop ? E = !0 : A = !0),
    f.forEach(_ => {
        if ($e(o[_]) && $e(t[_]))
            Object.assign(o[_], t[_]),
            (_ === "navigation" || _ === "pagination" || _ === "scrollbar") && "enabled"in t[_] && !t[_].enabled && M(_);
        else {
            const k = t[_];
            (k === !0 || k === !1) && (_ === "navigation" || _ === "pagination" || _ === "scrollbar") ? k === !1 && M(_) : o[_] = t[_]
        }
    }
    ),
    f.includes("controller") && !g && e.controller && e.controller.control && o.controller && o.controller.control && (e.controller.control = o.controller.control),
    s.includes("children") && i && m && o.virtual.enabled ? (m.slides = i,
    m.update(!0)) : s.includes("virtual") && m && o.virtual.enabled && (i && (m.slides = i),
    m.update(!0)),
    s.includes("children") && i && o.loop && (A = !0),
    w && v.init() && v.update(!0),
    g && (e.controller.control = o.controller.control),
    b && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
    l.classList.add("swiper-pagination"),
    l.part.add("pagination"),
    e.el.appendChild(l)),
    l && (o.pagination.el = l),
    p.init(),
    p.render(),
    p.update()),
    h && (e.isElement && (!d || typeof d == "string") && (d = document.createElement("div"),
    d.classList.add("swiper-scrollbar"),
    d.part.add("scrollbar"),
    e.el.appendChild(d)),
    d && (o.scrollbar.el = d),
    u.init(),
    u.updateSize(),
    u.setTranslate()),
    y && (e.isElement && ((!n || typeof n == "string") && (n = document.createElement("div"),
    n.classList.add("swiper-button-next"),
    n.innerHTML = e.hostEl.constructor.nextButtonSvg,
    n.part.add("button-next"),
    e.el.appendChild(n)),
    (!a || typeof a == "string") && (a = document.createElement("div"),
    a.classList.add("swiper-button-prev"),
    a.innerHTML = e.hostEl.constructor.prevButtonSvg,
    a.part.add("button-prev"),
    e.el.appendChild(a))),
    n && (o.navigation.nextEl = n),
    a && (o.navigation.prevEl = a),
    c.init(),
    c.update()),
    s.includes("allowSlideNext") && (e.allowSlideNext = t.allowSlideNext),
    s.includes("allowSlidePrev") && (e.allowSlidePrev = t.allowSlidePrev),
    s.includes("direction") && e.changeDirection(t.direction, !1),
    (C || A) && e.loopDestroy(),
    (E || A) && e.loopCreate(),
    e.update()
}
const gs = r => {
    if (parseFloat(r) === Number(r))
        return Number(r);
    if (r === "true" || r === "")
        return !0;
    if (r === "false")
        return !1;
    if (r === "null")
        return null;
    if (r !== "undefined") {
        if (typeof r == "string" && r.includes("{") && r.includes("}") && r.includes('"')) {
            let e;
            try {
                e = JSON.parse(r)
            } catch {
                e = r
            }
            return e
        }
        return r
    }
}
  , vs = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
function ws(r, e, i) {
    const t = {}
      , s = {};
    bt(t, wt);
    const n = [...it, "on"]
      , a = n.map(l => l.replace(/_/, ""));
    n.forEach(l => {
        l = l.replace("_", ""),
        typeof r[l] < "u" && (s[l] = r[l])
    }
    );
    const d = [...r.attributes];
    return typeof e == "string" && typeof i < "u" && d.push({
        name: e,
        value: $e(i) ? {
            ...i
        } : i
    }),
    d.forEach(l => {
        const f = vs.filter(o => l.name.indexOf(`${o}-`) === 0)[0];
        if (f) {
            const o = Ke(f)
              , p = Ke(l.name.split(`${f}-`)[1]);
            typeof s[o] > "u" && (s[o] = {}),
            s[o] === !0 && (s[o] = {
                enabled: !0
            }),
            s[o][p] = gs(l.value)
        } else {
            const o = Ke(l.name);
            if (!a.includes(o))
                return;
            const p = gs(l.value);
            s[o] && vs.includes(l.name) && !$e(p) ? (s[o].constructor !== Object && (s[o] = {}),
            s[o].enabled = !!p) : s[o] = p
        }
    }
    ),
    bt(t, s),
    t.navigation ? t.navigation = {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
        ...t.navigation !== !0 ? t.navigation : {}
    } : t.navigation === !1 && delete t.navigation,
    t.scrollbar ? t.scrollbar = {
        el: ".swiper-scrollbar",
        ...t.scrollbar !== !0 ? t.scrollbar : {}
    } : t.scrollbar === !1 && delete t.scrollbar,
    t.pagination ? t.pagination = {
        el: ".swiper-pagination",
        ...t.pagination !== !0 ? t.pagination : {}
    } : t.pagination === !1 && delete t.pagination,
    {
        params: t,
        passedParams: s
    }
}
const ea = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}"
  , ta = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
class ia {
}
const Bs = typeof window > "u" || typeof HTMLElement > "u" ? ia : HTMLElement
  , bs = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `
  , Vs = (r, e) => {
    if (typeof CSSStyleSheet < "u" && r.adoptedStyleSheets) {
        const i = new CSSStyleSheet;
        i.replaceSync(e),
        r.adoptedStyleSheets = [i]
    } else {
        const i = document.createElement("style");
        i.rel = "stylesheet",
        i.textContent = e,
        r.appendChild(i)
    }
}
;
class Gs extends Bs {
    constructor() {
        super(),
        this.attachShadow({
            mode: "open"
        })
    }
    static get nextButtonSvg() {
        return bs
    }
    static get prevButtonSvg() {
        return bs.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>')
    }
    cssStyles() {
        return [ea, ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []].join(`
`)
    }
    cssLinks() {
        return this.injectStylesUrls || []
    }
    calcSlideSlots() {
        const e = this.slideSlots || 0
          , i = [...this.querySelectorAll("[slot^=slide-]")].map(t => parseInt(t.getAttribute("slot").split("slide-")[1], 10));
        if (this.slideSlots = i.length ? Math.max(...i) + 1 : 0,
        !!this.rendered) {
            if (this.slideSlots > e)
                for (let t = e; t < this.slideSlots; t += 1) {
                    const s = document.createElement("swiper-slide");
                    s.setAttribute("part", `slide slide-${t + 1}`);
                    const n = document.createElement("slot");
                    n.setAttribute("name", `slide-${t + 1}`),
                    s.appendChild(n),
                    this.shadowRoot.querySelector(".swiper-wrapper").appendChild(s)
                }
            else if (this.slideSlots < e) {
                const t = this.swiper.slides;
                for (let s = t.length - 1; s >= 0; s -= 1)
                    s > this.slideSlots && t[s].remove()
            }
        }
    }
    render() {
        if (this.rendered)
            return;
        this.calcSlideSlots();
        let e = this.cssStyles();
        this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")),
        e.length && Vs(this.shadowRoot, e),
        this.cssLinks().forEach(t => {
            if (this.shadowRoot.querySelector(`link[href="${t}"]`))
                return;
            const n = document.createElement("link");
            n.rel = "stylesheet",
            n.href = t,
            this.shadowRoot.appendChild(n)
        }
        );
        const i = document.createElement("div");
        i.classList.add("swiper"),
        i.part = "container",
        i.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({
            length: this.slideSlots
        }).map( (t, s) => `
        <swiper-slide part="slide slide-${s}">
          <slot name="slide-${s}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${Zn(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      ` : ""}
      ${Kn(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${Jn(this.passedParams) ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      ` : ""}
    `,
        this.shadowRoot.appendChild(i),
        this.rendered = !0
    }
    initialize() {
        var e = this;
        if (this.initialized)
            return;
        this.initialized = !0;
        const {params: i, passedParams: t} = ws(this);
        this.swiperParams = i,
        this.passedParams = t,
        delete this.swiperParams.init,
        this.render(),
        this.swiper = new pe(this.shadowRoot.querySelector(".swiper"),{
            ...i.virtual ? {} : {
                observer: !0,
                observeSlideChildren: this.slideSlots > 0
            },
            ...i,
            touchEventsTarget: "container",
            onAny: function(s) {
                s === "observerUpdate" && e.calcSlideSlots();
                const n = i.eventsPrefix ? `${i.eventsPrefix}${s.toLowerCase()}` : s.toLowerCase();
                for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
                    d[l - 1] = arguments[l];
                const f = new CustomEvent(n,{
                    detail: d,
                    bubbles: s !== "hashChange",
                    cancelable: !0
                });
                e.dispatchEvent(f)
            }
        })
    }
    connectedCallback() {
        this.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || this.init === !1 || this.getAttribute("init") === "false" || this.initialize()
    }
    disconnectedCallback() {
        this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || (this.swiper && this.swiper.destroy && this.swiper.destroy(),
        this.initialized = !1)
    }
    updateSwiperOnPropChange(e, i) {
        const {params: t, passedParams: s} = ws(this, e, i);
        this.passedParams = s,
        this.swiperParams = t,
        !(this.swiper && this.swiper.params[e] === i) && Qn({
            swiper: this.swiper,
            passedParams: this.passedParams,
            changedParams: [Ke(e)],
            ...e === "navigation" && s[e] ? {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next"
            } : {},
            ...e === "pagination" && s[e] ? {
                paginationEl: ".swiper-pagination"
            } : {},
            ...e === "scrollbar" && s[e] ? {
                scrollbarEl: ".swiper-scrollbar"
            } : {}
        })
    }
    attributeChangedCallback(e, i, t) {
        this.initialized && (i === "true" && t === null && (t = !1),
        this.updateSwiperOnPropChange(e, t))
    }
    static get observedAttributes() {
        return it.filter(i => i.includes("_")).map(i => i.replace(/[A-Z]/g, t => `-${t}`).replace("_", "").toLowerCase())
    }
}
it.forEach(r => {
    r !== "init" && (r = r.replace("_", ""),
    Object.defineProperty(Gs.prototype, r, {
        configurable: !0,
        get() {
            return (this.passedParams || {})[r]
        },
        set(e) {
            this.passedParams || (this.passedParams = {}),
            this.passedParams[r] = e,
            this.initialized && this.updateSwiperOnPropChange(r, e)
        }
    }))
}
);
class sa extends Bs {
    constructor() {
        super(),
        this.attachShadow({
            mode: "open"
        })
    }
    render() {
        const e = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
        if (Vs(this.shadowRoot, ta),
        this.shadowRoot.appendChild(document.createElement("slot")),
        e) {
            const i = document.createElement("div");
            i.classList.add("swiper-lazy-preloader"),
            i.part.add("preloader"),
            this.shadowRoot.appendChild(i)
        }
    }
    initialize() {
        this.render()
    }
    connectedCallback() {
        this.initialize()
    }
}
const ra = () => {
    typeof window > "u" || (window.customElements.get("swiper-container") || window.customElements.define("swiper-container", Gs),
    window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", sa))
}
;
typeof window < "u" && (window.SwiperElementRegisterParams = r => {
    it.push(...r)
}
);
const na = `[
	{
		"title": "HTTP Injector",
		"description": "HTTP Injector is a professional VPN tool to browse the Internet privately and securely with multiple protocol and tunneling technologies build into one app. ",
		"link": "https://play.google.com/store/apps/details?id=com.evozi.injector&pcampaignid=web_share",
		"image": "images/projects/http.jpg"
	},
	{
		"title": "v2rayNG",
		"description": "v2rayNG will use VpnService to create a network proxy server to provide basic functional services",
		"link": "https://play.google.com/store/apps/details?id=com.v2ray.ang&pcampaignid=web_share",
		"image": "images/projects/v2ray.jpg"
	},
	{
		"title": "V2box",
		"description": "V2box - V2ray Client is a VPN Internet network proxy , Supports multiple proxy protocols, such as Shadowsocks, V2ray, Vmess, vless, Trojan, SSH.",
		"link": "https://play.google.com/store/apps/details?id=dev.hexasoftware.v2box&pcampaignid=web_share",
		"image": "images/projects/v2.jpg"
	},
	{
		"title": "ZIVPN",
		"description": "ZIVPN Tunnel (SSH/DNS) VPN is a versatile VPN application designed to enhance your online security and privacy. ",
		"link": "https://play.google.com/store/apps/details?id=com.zi.zivpn&pcampaignid=web_share",
		"image": "images/projects/ziv.jpg"
	},
	{
		"title": "Alpha V2ray",
		"description": "Android VPN app based on V2ray, featuring super Cool UI and a strong community. Serving over 1 Million users, it ensures a free, fast, and secures connection.",
		"link": "https://play.google.com/store/apps/details?id=com.sdev.alphav2ray&pcampaignid=web_share",
		"image": "images/projects/alpha.webp"
	}
]
`;
function ys(r, e, i) {
    const t = r.slice();
    return t[2] = e[i],
    t
}
function Ss(r) { 
    let e, i, t, s = "s", n, a, d = "", l, f, o = "s", p, c, u;
    return {
        c() {
            e = $("div"),
            i = $("div"),
            t = $("h1"),
            t.textContent = s,
            n = R(),
            a = $("div"),
            a.textContent = d,
            l = R(),
            f = $("btn"),
            f.textContent = o,
            p = R(),
            this.h()
        },
        l(m) {
            e = O(m, "DIV", {
                class: !0
            });
            var v = W(e);
            i = O(v, "DIV", {
                class: !0
            });
            var w = W(i);
            t = O(w, "H1", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(t) !== "svelte-1ypfhbv" && (t.textContent = s),
            n = j(w),
            a = O(w, "DIV", {
                "data-svelte-h": !0
            }),
            re(a) !== "svelte-oappty" && (a.textContent = d),
            l = j(w),
            f = O(w, "BTN", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(f) !== "svelte-168qd1q" && (f.textContent = o),
            w.forEach(T),
            p = j(v),
            v.forEach(T),
            this.h()
        },
        h() {
            S(t, "class", "glitch text-5xl font-bold"),
            S(f, "class", "btn btn-info"),
            S(i, "class", "max-w-md"),
            S(e, "class", "hero-content text-center")
        },
        m(m, v) {
            D(m, e, v),
            N(e, i),
            N(i, t),
            N(i, n),
            N(i, a),
            N(i, l),
            N(i, f),
            N(e, p),
            c || (u = Re(f, "click", r[1]),
            c = !0)
        },
        p: ie,
        d(m) {
            m && T(e),
            c = !1,
            u()
        }
    }
}
function Es(r) {
    let e, i, t, s = r[2].name + "", n, a, d, l = (r[2].description ?? "No description provided.") + "", f, o, p, c, u, m, v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>', w, g, b = r[2].stargazers_count + "", h, y, C, E = "Stars", A, M, _, k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>', H, P, x = r[2].forks_count + "", L, G, I, z = "Forks", B, F;
    return {
        c() {
            e = $("a"),
            i = $("div"),
            t = $("h2"),
            n = ne(s),
            a = R(),
            d = $("p"),
            f = ne(l),
            o = R(),
            p = $("div"),
            c = $("div"),
            u = $("div"),
            m = $("div"),
            m.innerHTML = v,
            w = R(),
            g = $("div"),
            h = ne(b),
            y = R(),
            C = $("div"),
            C.textContent = E,
            A = R(),
            M = $("div"),
            _ = $("div"),
            _.innerHTML = k,
            H = R(),
            P = $("div"),
            L = ne(x),
            G = R(),
            I = $("div"),
            I.textContent = z,
            B = R(),
            this.h()
        },
        l(Z) {
            e = O(Z, "A", {
                href: !0,
                class: !0
            });
            var V = W(e);
            i = O(V, "DIV", {
                class: !0
            });
            var X = W(i);
            t = O(X, "H2", {
                class: !0
            });
            var q = W(t);
            n = ae(q, s),
            q.forEach(T),
            a = j(X),
            d = O(X, "P", {});
            var Q = W(d);
            f = ae(Q, l),
            Q.forEach(T),
            o = j(X),
            p = O(X, "DIV", {
                class: !0
            });
            var U = W(p);
            c = O(U, "DIV", {
                class: !0
            });
            var K = W(c);
            u = O(K, "DIV", {
                class: !0
            });
            var te = W(u);
            m = O(te, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(m) !== "svelte-f11g4f" && (m.innerHTML = v),
            w = j(te),
            g = O(te, "DIV", {
                class: !0
            });
            var he = W(g);
            h = ae(he, b),
            he.forEach(T),
            y = j(te),
            C = O(te, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(C) !== "svelte-eujmfy" && (C.textContent = E),
            te.forEach(T),
            A = j(K),
            M = O(K, "DIV", {
                class: !0
            });
            var fe = W(M);
            _ = O(fe, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(_) !== "svelte-6ntjnn" && (_.innerHTML = k),
            H = j(fe),
            P = O(fe, "DIV", {
                class: !0
            });
            var ce = W(P);
            L = ae(ce, x),
            ce.forEach(T),
            G = j(fe),
            I = O(fe, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(I) !== "svelte-1fp1njm" && (I.textContent = z),
            fe.forEach(T),
            K.forEach(T),
            U.forEach(T),
            X.forEach(T),
            B = j(V),
            V.forEach(T),
            this.h()
        },
        h() {
            S(t, "class", "card-title"),
            S(m, "class", "stat-figure text-info"),
            S(g, "class", "stat-title"),
            S(C, "class", "stat-desc"),
            S(u, "class", "stat bg-base-300"),
            S(_, "class", "stat-figure text-info"),
            S(P, "class", "stat-title"),
            S(I, "class", "stat-desc"),
            S(M, "class", "stat bg-base-300"),
            S(c, "class", "stats shadow"),
            S(p, "class", "card-actions justify-center pt-6"),
            S(i, "class", "card-body"),
            S(e, "href", F = r[2].html_url),
            S(e, "class", "card w-96 bg-base-200 shadow-xl")
        },
        m(Z, V) {
            D(Z, e, V),
            N(e, i),
            N(i, t),
            N(t, n),
            N(i, a),
            N(i, d),
            N(d, f),
            N(i, o),
            N(i, p),
            N(p, c),
            N(c, u),
            N(u, m),
            N(u, w),
            N(u, g),
            N(g, h),
            N(u, y),
            N(u, C),
            N(c, A),
            N(c, M),
            N(M, _),
            N(M, H),
            N(M, P),
            N(P, L),
            N(M, G),
            N(M, I),
            N(e, B)
        },
        p(Z, V) {
            V & 1 && s !== (s = Z[2].name + "") && Ue(n, s),
            V & 1 && l !== (l = (Z[2].description ?? "No description provided.") + "") && Ue(f, l),
            V & 1 && b !== (b = Z[2].stargazers_count + "") && Ue(h, b),
            V & 1 && x !== (x = Z[2].forks_count + "") && Ue(L, x),
            V & 1 && F !== (F = Z[2].html_url) && S(e, "href", F)
        },
        d(Z) {
            Z && T(e)
        }
    }
}
function aa(r) { 
    let e, i = "x", t, s, n = ee(r[0]), a = [];
    for (let l = 0; l < n.length; l += 1)
        a[l] = Es(ys(r, n, l));
    let d = null;
    return n.length || (d = Ss(r)),
    {
        c() {
            e = $("label"),
            e.textContent = i,
            t = R(),
            s = $("div");
            for (let l = 0; l < a.length; l += 1)
                a[l].c();
            d && d.c(),
            this.h()
        },
        l(l) {
            e = O(l, "LABEL", {
                for: !0,
                class: !0,
                "data-svelte-h": !0
            }),
            re(e) !== "svelte-8mq8jl" && (e.textContent = i),
            t = j(l),
            s = O(l, "DIV", {
                class: !0
            });
            var f = W(s);
            for (let o = 0; o < a.length; o += 1)
                a[o].l(f);
            d && d.l(f),
            f.forEach(T),
            this.h()
        },
        h() {
            S(e, "for", "projectsModal"), 
            S(e, "class", "btn btn-sm btn-circle sticky right-2 top-2 z-10"),
            S(s, "class", "flex flex-wrap items-center justify-center m-6 max-w-screen-xl mx-auto gap-6")
        },
        m(l, f) {
            D(l, e, f),
            D(l, t, f),
            D(l, s, f);
            for (let o = 0; o < a.length; o += 1)
                a[o] && a[o].m(s, null);
            d && d.m(s, null)
        },
        p(l, [f]) {
            if (f & 3) {
                n = ee(l[0]);
                let o;
                for (o = 0; o < n.length; o += 1) {
                    const p = ys(l, n, o);
                    a[o] ? a[o].p(p, f) : (a[o] = Es(p),
                    a[o].c(),
                    a[o].m(s, null))
                }
                for (; o < a.length; o += 1)
                    a[o].d(1);
                a.length = n.length,
                !n.length && d ? d.p(l, f) : n.length ? d && (d.d(1),
                d = null) : (d = Ss(l),
                d.c(),
                d.m(s, null))
            }
        },
        i: ie,
        o: ie,
        d(l) {
            l && (T(e),
            T(t),
            T(s)),
            le(a, l),
            d && d.d()
        }
    }
}
function la(r, e, i) {
    let t = [];
    async function s() {
        i(0, t = await fetch("").then(n => n.json())),
        t.sort( (n, a) => a.stargazers_count - n.stargazers_count).filter(n => !n.fork)
    }
    return yt(async () => {
        Xs.PowerGlitch.glitch(".glitch"),
        await s()
    }
    ),
    [t, s]
}
class oa extends be {
    constructor(e) {
        super(),
        ye(this, e, la, aa, ve, {})
    }
}
function _s(r, e, i) {
    const t = r.slice();
    return t[3] = e[i],
    t[5] = i,
    t
}
function Ts(r) {
    let e, i, t, s, n, a, d, l, f = r[3].title + "", o, p, c, u = r[3].description + "", m, v, w, g, b, h, y, C;
    function E() {
        return r[1](r[3])
    }
    function A() {
        return r[2](r[3])
    }
    return {
        c() {
            e = $("swiper-slide"),
            i = $("figure"),
            t = $("a"),
            s = $("img"),
            a = R(),
            d = $("div"),
            l = $("h2"),
            o = ne(f),
            p = R(),
            c = $("p"),
            m = ne(u),
            v = R(),
            w = $("div"),
            g = $("a"),
            b = ne("View"),
            h = R(),
            this.h()
        },
        l(M) {
            e = O(M, "SWIPER-SLIDE", {
                id: !0,
                class: !0
            });
            var _ = W(e);
            i = O(_, "FIGURE", {});
            var k = W(i);
            t = O(k, "A", {
                href: !0,
                class: !0
            });
            var H = W(t);
            s = O(H, "IMG", {
                id: !0,
                class: !0,
                src: !0,
                alt: !0
            }),
            H.forEach(T),
            k.forEach(T),
            a = j(_),
            d = O(_, "DIV", {
                class: !0
            });
            var P = W(d);
            l = O(P, "H2", {
                class: !0
            });
            var x = W(l);
            o = ae(x, f),
            x.forEach(T),
            p = j(P),
            c = O(P, "P", {
                class: !0
            });
            var L = W(c);
            m = ae(L, u),
            L.forEach(T),
            v = j(P),
            w = O(P, "DIV", {
                class: !0
            });
            var G = W(w);
            g = O(G, "A", {
                class: !0,
                href: !0,
                target: !0
            });
            var I = W(g);
            b = ae(I, "View"),
            I.forEach(T),
            G.forEach(T),
            P.forEach(T),
            h = j(_),
            _.forEach(T),
            this.h()
        },
        h() {
            S(s, "id", r[3].title),
            S(s, "class", "min-h-full min-w-full object-cover rounded-box"),
            mt(s.src, n = r[3].image) || S(s, "src", n),
            S(s, "alt", r[3].title + " Logo"),
            S(t, "href", r[3].link),
            S(t, "class", "min-h-full min-w-full object-cover"),
            S(l, "class", "card-title"),
            S(c, "class", "max-h-[75px] min-h-[75px]"),
            S(g, "class", "btn"),
            S(g, "href", r[3].link),
            S(g, "target", "_blank"),
            S(w, "class", "card-actions justify-end"),
            S(d, "class", "card-body max-h-[200px] min-h-[150px]"),
            Le(e, "id", "slide" + r[5]),
            Le(e, "class", "project card card-compact w-96 bg-base-100 min-h-[450px]")
        },
        m(M, _) {
            D(M, e, _),
            N(e, i),
            N(i, t),
            N(t, s),
            N(e, a),
            N(e, d),
            N(d, l),
            N(l, o),
            N(d, p),
            N(d, c),
            N(c, m),
            N(d, v),
            N(d, w),
            N(w, g),
            N(g, b),
            N(e, h),
            y || (C = [Re(i, "mouseover", E), Re(i, "focus", A)],
            y = !0)
        },
        p(M, _) {
            r = M
        },
        d(M) {
            M && T(e),
            y = !1,
            Rs(C)
        }
    }
}
function da(r) {  
    let e, i, t = '<tgs-player autoplay="" loop="" src="/anim/death.tgs" style="width: 30px; height: 30px;"></tgs-player> <h1 class="text-4xl ml-2">Projects</h1>', s, n, a, d, l, f, o = '', p, c, u, m, v, w, g, b = ee(r[0]), h = [];
    for (let y = 0; y < b.length; y += 1)
        h[y] = Ts(_s(r, b, y));
    return w = new oa({}),
    {
        c() {
            e = $("div"),
            i = $("a"),
            i.innerHTML = t,
            s = R(),
            n = $("div"),
            a = $("swiper-container");
            for (let y = 0; y < h.length; y += 1)
                h[y].c();
            d = R(),
            l = $("div"),
            f = $("label"),
            f.innerHTML = o,
            p = R(),
            c = $("input"),
            u = R(),
            m = $("label"),
            v = $("label"),
            Se(w.$$.fragment),
            this.h()
        },
        l(y) {
            e = O(y, "DIV", {
                class: !0
            });
            var C = W(e);
            i = O(C, "A", {
                class: !0,
                href: !0,
                id: !0,
                "data-svelte-h": !0
            }),
            re(i) !== "svelte-4hm5mm" && (i.innerHTML = t),
            s = j(C),
            n = O(C, "DIV", {
                class: !0
            });
            var E = W(n);
            a = O(E, "SWIPER-CONTAINER", {
                init: !0
            });
            var A = W(a);
            for (let H = 0; H < h.length; H += 1)
                h[H].l(A);
            A.forEach(T),
            E.forEach(T),
            d = j(C),
            l = O(C, "DIV", {
                class: !0
            });
            var M = W(l);
            f = O(M, "LABEL", {
                for: !0,
                class: !0,
                "data-svelte-h": !0
            }),
            re(f) !== "svelte-1hw6ufa" && (f.innerHTML = o),
            p = j(M),
            c = O(M, "INPUT", {
                type: !0,
                id: !0,
                class: !0
            }),
            u = j(M),
            m = O(M, "LABEL", {
                for: !0,
                class: !0
            });
            var _ = W(m);
            v = O(_, "LABEL", {
                class: !0,
                for: !0
            });
            var k = W(v);
            Ee(w.$$.fragment, k),
            k.forEach(T),
            _.forEach(T),
            M.forEach(T),
            C.forEach(T),
            this.h()
        },
        h() {
            S(i, "class", "inline-flex items-center justify-left w-full my-12"),
            S(i, "href", "#projects"),
            S(i, "id", "projects"),
            Le(a, "init", "false"),
            S(n, "class", "items-center justify-center m-2 overflow-x-hidden w-full lg:max-w-screen-xl"),
            S(f, "for", "projectsModal"),
            S(f, "class", "cursor-pointer btn gap-2 right-0"),
            S(c, "type", "checkbox"),
            S(c, "id", "projectsModal"),
            S(c, "class", "modal-toggle"),
            S(v, "class", "modal-box max-h-[50%] lg:max-h-[75%]"),
            S(v, "for", ""),
            S(m, "for", "projectsModal"),
            S(m, "class", "modal modal-bottom cursor-pointer sm:modal-action"),
            S(l, "class", "w-full justify-center lg:justify-end flex"),
            S(e, "class", "flex flex-wrap items-center justify-between m-6 max-w-screen-xl lg:mx-auto")
        },
        m(y, C) {
            D(y, e, C),
            N(e, i),
            N(e, s),
            N(e, n),
            N(n, a);
            for (let E = 0; E < h.length; E += 1)
                h[E] && h[E].m(a, null);
            N(e, d),
            N(e, l),
            N(l, f),
            N(l, p),
            N(l, c),
            N(l, u),
            N(l, m),
            N(m, v),
            _e(w, v, null),
            g = !0
        },
        p(y, [C]) {
            if (C & 1) {
                b = ee(y[0]);
                let E;
                for (E = 0; E < b.length; E += 1) {
                    const A = _s(y, b, E);
                    h[E] ? h[E].p(A, C) : (h[E] = Ts(A),
                    h[E].c(),
                    h[E].m(a, null))
                }
                for (; E < h.length; E += 1)
                    h[E].d(1);
                h.length = b.length
            }
        },
        i(y) {
            g || (Te(w.$$.fragment, y),
            g = !0)
        },
        o(y) {
            xe(w.$$.fragment, y),
            g = !1
        },
        d(y) {
            y && T(e),
            le(h, y),
            Me(w)
        }
    }
}
async function xs(r) {
    var e;
    e = document.getElementById(r.title),
    e.src = r.image
}
function ca(r) {
    let e = JSON.parse(na);
    return yt(async () => {
        ra();
        const s = document.querySelector("swiper-container");
        Object.assign(s, {
            slidesPerView: 1,
            rewind: !0,
            spaceBetween: 20,
            autoplay: {
                delay: 3e3
            },
            pagination: {
                dynamicBullets: !0
            },
            breakpoints: {
                640: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }
        }),
        s.initialize()
    }
    ),
    [e, s => xs(s), s => xs(s)]
}
class fa extends be {
    constructor(e) {
        super(),
        ye(this, e, ca, da, ve, {})
    }
}
const pa = `[
	{
		"institution": "Solo Programmer",
		"role": "Founder | network operator",
		"location": "Sri Lanka",
		"duration": "jule 2024 - Current",
		"short": "2",
		"link" : "https://t.me/Sahanwickramasinghe"
	},
	{
		"institution": "Front-end",
		"role": "web Developer",
		"location": "sri Lanka",
		"duration": "sep 2023 - Current",
		"short": "2",
		"link": ""
	},
	{
		"institution": "Telegram",
		"role": "network operator",
		"location": "Sri Lanks",
		"duration": "jan 2021 - dec 2024",
		"short": "tg",
		"link": "https://telegram.org"
	}
]
`//Experience section start
  , ua = `[ 
	{
		"institution": "University Of Colombo ",
		"role": "Bachelor Of Information Technology",
		"location": "Colombo,Lk ",
		"duration": "2024 - Crunnt",
		"short": "mora"
	},
	{
		"institution": "University Of Colombo Uni",
		"role": "CS & Software Engineering",
		"location": "Colombo, LK",
		"duration": "2024 - Current",
		"short": "uni"
	},
	{
		"institution": "G.C.E A/L",
		"role": "Commerce+Ict",
		"location": "PANADURA, LK",
		"duration": "2018 - 2022",
		"short": "al"
	}
]
`;
function Ms(r, e, i) {
    const t = r.slice();
    return t[2] = e[i],
    t
}
function ks(r, e, i) {
    const t = r.slice();
    return t[5] = e[i],
    t
}
function Cs(r) {
    let e, i, t, s, n, a = r[5].institution + "", d, l, f, o = r[5].role + "", p, c, u, m, v = r[5].location + "", w, g, b, h = r[5].duration + "", y, C;
    return {
        c() {
            e = $("li"),
            i = $("a"),
            t = $("div"),
            s = $("div"),
            n = $("div"),
            d = ne(a),
            l = R(),
            f = $("div"),
            p = ne(o),
            c = R(),
            u = $("div"),
            m = $("div"),
            w = ne(v),
            g = R(),
            b = $("div"),
            y = ne(h),
            C = R(),
            this.h()
        },
        l(E) {
            e = O(E, "LI", {
                "data-content": !0,
                class: !0
            });
            var A = W(e);
            i = O(A, "A", {
                href: !0,
                target: !0,
                class: !0
            });
            var M = W(i);
            t = O(M, "DIV", {
                class: !0
            });
            var _ = W(t);
            s = O(_, "DIV", {
                class: !0
            });
            var k = W(s);
            n = O(k, "DIV", {
                class: !0
            });
            var H = W(n);
            d = ae(H, a),
            H.forEach(T),
            l = j(k),
            f = O(k, "DIV", {
                class: !0
            });
            var P = W(f);
            p = ae(P, o),
            P.forEach(T),
            k.forEach(T),
            c = j(_),
            u = O(_, "DIV", {
                class: !0
            });
            var x = W(u);
            m = O(x, "DIV", {
                class: !0
            });
            var L = W(m);
            w = ae(L, v),
            L.forEach(T),
            g = j(x),
            b = O(x, "DIV", {
                class: !0
            });
            var G = W(b);
            y = ae(G, h),
            G.forEach(T),
            x.forEach(T),
            _.forEach(T),
            M.forEach(T),
            C = j(A),
            A.forEach(T),
            this.h()
        },
        h() {
            S(n, "class", "stat-value text-xl text-left"),
            S(f, "class", "stat-desc text-left"),
            S(s, "class", "stat"),
            S(m, "class", "stat-title text-left"),
            S(b, "class", "stat-desc text-left"),
            S(u, "class", "stat"),
            S(t, "class", "stats stats-vertical bg-base-200 min-w-[320px] max-w-[320px]"),
            S(i, "href", r[5].link),
            S(i, "target", "_blank"),
            S(i, "class", "no-underline text-inherit"),
            S(e, "data-content", ""),
            S(e, "class", "step h-[250px] step-icon-" + r[5].short + " !min-w-[330px] max-w-[330px] m-1 svelte-1udjjkf")
        },
        m(E, A) {
            D(E, e, A),
            N(e, i),
            N(i, t),
            N(t, s),
            N(s, n),
            N(n, d),
            N(s, l),
            N(s, f),
            N(f, p),
            N(t, c),
            N(t, u),
            N(u, m),
            N(m, w),
            N(u, g),
            N(u, b),
            N(b, y),
            N(e, C)
        },
        p: ie,
        d(E) {
            E && T(e)
        }
    }
}
function Ps(r) {
    let e, i, t, s, n = r[2].institution + "", a, d, l, f = r[2].role + "", o, p, c, u, m = r[2].location + "", v, w, g, b = r[2].duration + "", h, y;
    return {
        c() {
            e = $("li"),
            i = $("div"),
            t = $("div"),
            s = $("div"),
            a = ne(n),
            d = R(),
            l = $("div"),
            o = ne(f),
            p = R(),
            c = $("div"),
            u = $("div"),
            v = ne(m),
            w = R(),
            g = $("div"),
            h = ne(b),
            y = R(),
            this.h()
        },
        l(C) {
            e = O(C, "LI", {
                "data-content": !0,
                class: !0
            });
            var E = W(e);
            i = O(E, "DIV", {
                class: !0
            });
            var A = W(i);
            t = O(A, "DIV", {
                class: !0
            });
            var M = W(t);
            s = O(M, "DIV", {
                class: !0
            });
            var _ = W(s);
            a = ae(_, n),
            _.forEach(T),
            d = j(M),
            l = O(M, "DIV", {
                class: !0
            });
            var k = W(l);
            o = ae(k, f),
            k.forEach(T),
            M.forEach(T),
            p = j(A),
            c = O(A, "DIV", {
                class: !0
            });
            var H = W(c);
            u = O(H, "DIV", {
                class: !0
            });
            var P = W(u);
            v = ae(P, m),
            P.forEach(T),
            w = j(H),
            g = O(H, "DIV", {
                class: !0
            });
            var x = W(g);
            h = ae(x, b),
            x.forEach(T),
            H.forEach(T),
            A.forEach(T),
            y = j(E),
            E.forEach(T),
            this.h()
        },
        h() {
            S(s, "class", "stat-value text-xl text-left"),
            S(l, "class", "stat-title text-left"),
            S(t, "class", "stat"),
            S(u, "class", "stat-title text-left"),
            S(g, "class", "stat-desc text-left"),
            S(c, "class", "stat"),
            S(i, "class", "stats stats-vertical bg-base-200 min-w-[320px] max-w-[320px]"),
            S(e, "data-content", ""),
            S(e, "class", "step h-[250px] step-icon-" + r[2].short + " !min-w-[330px] max-w-[330px] m-1 svelte-1udjjkf")
        },
        m(C, E) {
            D(C, e, E),
            N(e, i),
            N(i, t),
            N(t, s),
            N(s, a),
            N(t, d),
            N(t, l),
            N(l, o),
            N(i, p),
            N(i, c),
            N(c, u),
            N(u, v),
            N(c, w),
            N(c, g),
            N(g, h),
            N(e, y)
        },
        p: ie,
        d(C) {
            C && T(e)
        }
    }
}
function ma(r) {
    let e, i, t = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg> <h1 class="text-4xl ml-2">Experience</h1>', s, n, a, d, l = '<a class="inline-flex items-center justify-left text-left w-full" href="#work" id="work"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg> <h1 class="text-2xl ml-2">Work</h1></a>', f, o, p, c, u, m, v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> <h1 class="text-2xl ml-2">Education</h1>', w, g, b, h = ee(r[0]), y = [];
    for (let A = 0; A < h.length; A += 1)
        y[A] = Cs(ks(r, h, A));
    let C = ee(r[1])
      , E = [];
    for (let A = 0; A < C.length; A += 1)
        E[A] = Ps(Ms(r, C, A));
    return {
        c() {
            e = $("div"),
            i = $("a"),
            i.innerHTML = t,
            s = R(),
            n = $("div"),
            a = $("div"),
            d = $("div"),
            d.innerHTML = l,
            f = R(),
            o = $("div"),
            p = $("ul");
            for (let A = 0; A < y.length; A += 1)
                y[A].c();
            c = R(),
            u = $("div"),
            m = $("a"),
            m.innerHTML = v,
            w = R(),
            g = $("div"),
            b = $("ul");
            for (let A = 0; A < E.length; A += 1)
                E[A].c();
            this.h()
        },
        l(A) {
            e = O(A, "DIV", {
                class: !0
            });
            var M = W(e);
            i = O(M, "A", {
                class: !0,
                href: !0,
                id: !0,
                "data-svelte-h": !0
            }),
            re(i) !== "svelte-3k78j7" && (i.innerHTML = t),
            s = j(M),
            n = O(M, "DIV", {
                class: !0
            });
            var _ = W(n);
            a = O(_, "DIV", {
                class: !0
            });
            var k = W(a);
            d = O(k, "DIV", {
                class: !0,
                "data-tip": !0,
                "data-svelte-h": !0
            }),
            re(d) !== "svelte-81r70g" && (d.innerHTML = l),
            f = j(k),
            o = O(k, "DIV", {
                class: !0
            });
            var H = W(o);
            p = O(H, "UL", {
                class: !0
            });
            var P = W(p);
            for (let I = 0; I < y.length; I += 1)
                y[I].l(P);
            P.forEach(T),
            H.forEach(T),
            k.forEach(T),
            c = j(_),
            u = O(_, "DIV", {
                class: !0
            });
            var x = W(u);
            m = O(x, "A", {
                class: !0,
                href: !0,
                id: !0,
                "data-svelte-h": !0
            }),
            re(m) !== "svelte-10c5cms" && (m.innerHTML = v),
            w = j(x),
            g = O(x, "DIV", {
                class: !0
            });
            var L = W(g);
            b = O(L, "UL", {
                class: !0
            });
            var G = W(b);
            for (let I = 0; I < E.length; I += 1)
                E[I].l(G);
            G.forEach(T),
            L.forEach(T),
            x.forEach(T),
            _.forEach(T),
            M.forEach(T),
            this.h()
        },
        h() {
            S(i, "class", "inline-flex items-center justify-left w-full my-12"),
            S(i, "href", "#experience"),
            S(i, "id", "experience"),
            S(d, "class", "tooltip tooltip-right"),
            S(d, "data-tip", "Latest three positions"),
            S(p, "class", "steps md:steps-vertical md:min-w-[400px]"),
            S(o, "class", "overflow-x-auto"),
            S(a, "class", "work max-w-full svelte-1udjjkf"),
            S(m, "class", "inline-flex items-center justify-left text-left w-full"),
            S(m, "href", "#education"),
            S(m, "id", "education"),
            S(b, "class", "steps md:steps-vertical md:min-w-[400px]"),
            S(g, "class", "overflow-x-auto"),
            S(u, "class", "education max-w-full svelte-1udjjkf"),
            S(n, "class", "flex flex-wrap w-full justify-evenly"),
            S(e, "class", "flex flex-wrap items-center justify-between m-6 max-w-screen-xl lg:mx-auto")
        },
        m(A, M) {
            D(A, e, M),
            N(e, i),
            N(e, s),
            N(e, n),
            N(n, a),
            N(a, d),
            N(a, f),
            N(a, o),
            N(o, p);
            for (let _ = 0; _ < y.length; _ += 1)
                y[_] && y[_].m(p, null);
            N(n, c),
            N(n, u),
            N(u, m),
            N(u, w),
            N(u, g),
            N(g, b);
            for (let _ = 0; _ < E.length; _ += 1)
                E[_] && E[_].m(b, null)
        },
        p(A, [M]) {
            if (M & 1) {
                h = ee(A[0]);
                let _;
                for (_ = 0; _ < h.length; _ += 1) {
                    const k = ks(A, h, _);
                    y[_] ? y[_].p(k, M) : (y[_] = Cs(k),
                    y[_].c(),
                    y[_].m(p, null))
                }
                for (; _ < y.length; _ += 1)
                    y[_].d(1);
                y.length = h.length
            }
            if (M & 2) {
                C = ee(A[1]);
                let _;
                for (_ = 0; _ < C.length; _ += 1) {
                    const k = Ms(A, C, _);
                    E[_] ? E[_].p(k, M) : (E[_] = Ps(k),
                    E[_].c(),
                    E[_].m(b, null))
                }
                for (; _ < E.length; _ += 1)
                    E[_].d(1);
                E.length = C.length
            }
        },
        i: ie,
        o: ie,
        d(A) {
            A && T(e),
            le(y, A),
            le(E, A)
        }
    }
}
function ha(r) {
    let e = JSON.parse(pa)
      , i = JSON.parse(ua);
    return [e, i]
}
class ga extends be {
    constructor(e) {
        super(),
        ye(this, e, ha, ma, ve, {})
    }
}
function va(r) {//activity
    let e, i = `<a class="inline-flex items-center justify-left w-full my-12" href="#activity" id="activity"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> <h1 class="text-3xl ml-2">Activity</h1></a> <div class="flex flex-wrap items-center justify-around mx-6 w-full"><div class="mockup-window bg-base-300 lg:max-w-screen-xl w-full"><p class="p-4">As a passionate melophile, music is an integral part of my
				coding journey. It&#39;s not just a background element but a
				profound catalyst that significantly enhances my focus and
				creativity. I have a particular affinity for Sinhala music that
				radiates chill and calm vibes, transforming even the most
				demanding coding sessions into serene and enjoyable experiences.
				Below is a curated selection of my favorite tracks that
				accompany me while I work. Dive into the soothing sounds and
				perhaps, discover your new coding anthem!</p> <div class="flex justify-center p-4 border-t border-base-300"><iframe title="Spotify embed" src="https://open.spotify.com/embed/playlist/1sw3nISJ6cJZct0kfHLYyk?utm_source=generator&theme=0" width="100%" height="500" frameborder="0" class="rounded-xl" allow="encrypted-media"></iframe></div></div></div>`;
    return {
        c() {
            e = $("div"),
            e.innerHTML = i,
            this.h()
        },
        l(t) {
            e = O(t, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(e) !== "svelte-1rk3c9n" && (e.innerHTML = i),
            this.h()
        },
        h() {
            S(e, "class", "flex flex-wrap items-center justify-between m-6 max-w-screen-xl lg:mx-auto")
        },
        m(t, s) {
            D(t, e, s)
        },
        p: ie,
        i: ie,
        o: ie,
        d(t) {
            t && T(e)
        }
    }
}
class wa extends be {
    constructor(e) {
        super(),
        ye(this, e, null, va, ve, {})
    }
}
function ba(r) { //about tag and titile
    let e, i = `<a class="inline-flex items-center justify-left w-full my-12" href="#about" id="about"><tgs-player autoplay="" loop="" src="/anim/kungfu.tgs" title="Kungfu" style="width: 30px; height: 30px;"></tgs-player> <h1 class="text-3xl ml-2">About</h1></a> <div class="flex flex-wrap w-full"><p class="mb-3">I&#39;m Sahan, a Full-stack Software Developer from Sri Lanka
			and the owner of <a href="https://t.me/SAHANehi" class="text-blue-500">unlimited data kingdom</a> Company. I specialize in developing
			Android and iOS mobile apps, Web applications, AI-based solutions, Telegram Bots, Windows applications, 
			Websites and backend development and API tools. With a strong commitment to
			open-source projects, I bring extensive experience in Swift,
			Python, Kotlin, NextJS, Dart, React, Go, Java, C#, PHP, VueJS and more.</p> <p class="mb-6">Thank you for visiting my portfolio page! I appreciate your interest
			in my work and achievements. If you want to dive deeper into my
			projects, explore the <a href="#projects" class="text-blue-400">links provided</a>. Stay connected with me on
			social media for the latest updates on my work and insights. Let&#39;s
			connect and create something amazing together!</p> <h3 class="font-bold text-lg mb-6">Technologies &amp; Credits</h3> <div class="overflow-x-auto w-full"><table class="table table-zebra w-full"><thead><tr><th></th> <th>Source</th> <th>Description</th></tr></thead> <tbody><tr><td><img class="w-6 h-6 min-w-[1rem] object-contain" src="/images/about/sv.webp" alt="Source logo"/></td> <th><a href="https://kit.svelte.dev/">SvelteKit</a></th> <th>Front-end framework</th></tr> <tr><td><img class="w-6 h-6 min-w-[1rem] object-contain" src="/images/about/tai.webp" alt="Source logo"/></td> <th><a href="https://tailwindcss.com/">TailwindCSS</a></th> <th>CSS framework</th></tr> <tr><td><img class="w-6 h-6 min-w-[1rem] object-contain" src="/images/about/da.ico" alt="Source logo"/></td> <th><a href="https://daisyui.com/">DaisyUI</a></th> <th>Component library</th></tr> <tr><td><img class="w-6 h-6 min-w-[1rem] object-contain" src="/images/about/te.webp" title="telegramLOGO" alt="Source logo"/></td> <th><a href="https://core.telegram.org/stickers">Telegram Stickers</a></th> <th>Creative Animations</th></tr></tbody></table></div></div>`;
    return {//about and tech section
        c() {
            e = $("div"),
            e.innerHTML = i,
            this.h()
        },
        l(t) {
            e = O(t, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(e) !== "svelte-hdim67" && (e.innerHTML = i),
            this.h()
        },
        h() {
            S(e, "class", "flex flex-wrap items-center justify-between m-6 max-w-screen-xl lg:mx-auto")
        },
        m(t, s) {
            D(t, e, s)
        },
        p: ie,
        i: ie,
        o: ie,
        d(t) {
            t && T(e)
        }
    }
}
class ya extends be {
    constructor(e) {
        super(),
        ye(this, e, null, ba, ve, {})
    }
}
function Sa(r) { //footer
    let e, i = '<div class="items-center grid-flow-col"><img width="24" height="24" src="mainlogo.png" alt="Sahanlogo"/></div> <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a href="mailto:sahanjay31@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a> <a href=""@about""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a> <a href="@"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> <a href="https://t.me/Sahanwickramasinghe"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"></path></svg></a></div>';
    return {
        c() {
            e = $("footer"),
            e.innerHTML = i,
            this.h()
        },
        l(t) {
            e = O(t, "FOOTER", {
                class: !0,
                "data-svelte-h": !0
            }),
            re(e) !== "svelte-5xywnf" && (e.innerHTML = i),
            this.h()
        },
        h() {
            S(e, "class", "footer items-center p-4 bg-neutral text-neutral-content justify-between grid-flow-col mt-12")
        },
        m(t, s) {
            D(t, e, s)
        },
        p: ie,
        i: ie,
        o: ie,
        d(t) {
            t && T(e)
        }
    }
}
class Ea extends be {
    constructor(e) {
        super(),
        ye(this, e, null, Sa, ve, {})
    }
}
function _a(r) {
    let e, i, t, s = '<img width="42" height="42" src="mainlogo.png" alt="Solo Programmer logo"  class="logo z-10 cursor-pointer h-8 w-8 fixed top-5 left-6 svelte-131jrwf"  style="transition: transform 0.4s;"/>', n, a, d, l, f, o, p, c, u, m, v, w, g, b, h, y, C, E, A, M, _, k, H, P, x, L, G;
    return a = new er({}),
    l = new sr({}),
    c = new fa({}),
    w = new ga({}),
    y = new wa({}),
    M = new ya({}),
    k = new Ea({}),
    P = new Ks({
       
    }),
    {
        c() {
            e = R(),
            i = $("div"),
            t = $("button"),
            t.innerHTML = s,
            n = R(),
            Se(a.$$.fragment),
            d = R(),
            Se(l.$$.fragment),
            f = R(),
            o = $("div"),
            p = R(),
            Se(c.$$.fragment),
            u = R(),
            m = $("div"),
            v = R(),
            Se(w.$$.fragment),
            g = R(),
            b = $("div"),
            h = R(),
            Se(y.$$.fragment),
            C = R(),
            E = $("div"),
            A = R(),
            Se(M.$$.fragment),
            _ = R(),
            Se(k.$$.fragment),
            H = R(),
            Se(P.$$.fragment),
            this.h()
        },
        l(I) {
            As("svelte-ldp1an", document.head).forEach(T),
            e = j(I),
            i = O(I, "DIV", {
                class: !0
            });
            var B = W(i);
            t = O(B, "BUTTON", {
                "data-svelte-h": !0
            }),
            re(t) !== "svelte-10lcbr2" && (t.innerHTML = s),
            B.forEach(T),
            n = j(I),
            Ee(a.$$.fragment, I),
            d = j(I),
            Ee(l.$$.fragment, I),
            f = j(I),
            o = O(I, "DIV", {
                class: !0
            }),
            W(o).forEach(T),
            p = j(I),
            Ee(c.$$.fragment, I),
            u = j(I),
            m = O(I, "DIV", {
                class: !0
            }),
            W(m).forEach(T),
            v = j(I),
            Ee(w.$$.fragment, I),
            g = j(I),
            b = O(I, "DIV", {
                class: !0
            }),
            W(b).forEach(T),
            h = j(I),
            Ee(y.$$.fragment, I),
            C = j(I),
            E = O(I, "DIV", {
                class: !0
            }),
            W(E).forEach(T),
            A = j(I),
            Ee(M.$$.fragment, I),
            _ = j(I),
            Ee(k.$$.fragment, I),
            H = j(I),
            Ee(P.$$.fragment, I),
            this.h()
        },
        h() {
            document.title = "Sahan",//titlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            S(i, "class", "h-0 m-0"),
            S(o, "class", "divider"),
            S(m, "class", "divider"),
            S(b, "class", "divider"),
            S(E, "class", "divider")
        },
        m(I, z) {
            D(I, e, z),
            D(I, i, z),
            N(i, t),
            D(I, n, z),
            _e(a, I, z),
            D(I, d, z),
            _e(l, I, z),
            D(I, f, z),
            D(I, o, z),
            D(I, p, z),
            _e(c, I, z),
            D(I, u, z),
            D(I, m, z),
            D(I, v, z),
            _e(w, I, z),
            D(I, g, z),
            D(I, b, z),
            D(I, h, z),
            _e(y, I, z),
            D(I, C, z),
            D(I, E, z),
            D(I, A, z),
            _e(M, I, z),
            D(I, _, z),
            _e(k, I, z),
            D(I, H, z),
            _e(P, I, z),
            x = !0,
            L || (G = Re(t, "click", Ta),
            L = !0)
        },
        p: ie,
        i(I) {
            x || (Te(a.$$.fragment, I),
            Te(l.$$.fragment, I),
            Te(c.$$.fragment, I),
            Te(w.$$.fragment, I),
            Te(y.$$.fragment, I),
            Te(M.$$.fragment, I),
            Te(k.$$.fragment, I),
            Te(P.$$.fragment, I),
            x = !0)
        },
        o(I) {
            xe(a.$$.fragment, I),
            xe(l.$$.fragment, I),
            xe(c.$$.fragment, I),
            xe(w.$$.fragment, I),
            xe(y.$$.fragment, I),
            xe(M.$$.fragment, I),
            xe(k.$$.fragment, I),
            xe(P.$$.fragment, I),
            x = !1
        },
        d(I) {
            I && (T(e),
            T(i),
            T(n),
            T(d),
            T(f),
            T(o),
            T(p),
            T(u),
            T(m),
            T(v),
            T(g),
            T(b),
            T(h),
            T(C),
            T(E),
            T(A),
            T(_),
            T(H)),
            Me(a, I),
            Me(l, I),
            Me(c, I),
            Me(w, I),
            Me(y, I),
            Me(M, I),
            Me(k, I),
            Me(P, I),
            L = !1,
            G()
        }
    }
}
function Ta() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

class Ca extends be {
    constructor(e) {
        super(),
        ye(this, e, null, _a, ve, {})
    }
}
export {Ca as component};
