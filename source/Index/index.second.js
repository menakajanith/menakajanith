var b = {};
(function(o) {
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.PowerGlitch = o.mergeOptions = void 0;
    const m = (t="always") => ({
        playMode: t,
        createContainers: !0,
        hideOverflow: !1,
        timing: t === "always" ? {
            duration: 2 * 1e3,
            iterations: 1 / 0
        } : {
            duration: 250,
            iterations: 1
        },
        glitchTimeSpan: t === "always" ? {
            start: .5,
            end: .7
        } : {
            start: 0,
            end: 1
        },
        shake: {
            velocity: 15,
            amplitudeX: .2,
            amplitudeY: .2
        },
        slice: t === "click" ? {
            count: 15,
            velocity: 20,
            minHeight: .02,
            maxHeight: .15,
            hueRotate: !0
        } : {
            count: 6,
            velocity: 15,
            minHeight: .02,
            maxHeight: .15,
            hueRotate: !0
        },
        pulse: !1
    })
      , f = (t, i) => {
        if (!t.glitchTimeSpan)
            return 1;
        const e = t.glitchTimeSpan.start
          , n = t.glitchTimeSpan.end;
        if (i < e || i > n)
            return 0;
        const a = e + (n - e) / 2;
        return i < a ? (i - e) / (a - e) : (n - i) / (n - a)
    }
      , d = (t, i) => (Math.random() - .5) * 2 * f(t, i)
      , p = ({minHeight: t, maxHeight: i, minWidth: e, maxWidth: n}) => {
        const a = Math.floor(Math.random() * ((i - t) * 100 + 1)) + t * 100
          , c = Math.floor(Math.random() * ((n - e) * 100 + 1)) + e * 100
          , r = Math.floor(Math.random() * (100 - a))
          , s = Math.floor(Math.random() * (100 - c))
          , u = `${s + c}% ${r}%`
          , l = `${s + c}% ${r + a}%`
          , h = `${s}% ${r + a}%`
          , g = `${s}% ${r}%`;
        return `polygon(${u},${l},${h},${g})`
    }
      , v = t => {
        const i = Math.floor(t.slice.velocity * t.timing.duration / 1e3) + 1
          , e = [];
        for (let n = 0; n < i; ++n) {
            if (f(t, n / i) === 0) {
                e.push({
                    opacity: "0",
                    transform: "none",
                    clipPath: "unset"
                });
                continue
            }
            const c = {
                opacity: "1",
                transform: `translate3d(${d(t, n / i) * 30}%,0,0)`,
                clipPath: p({
                    minHeight: t.slice.minHeight,
                    maxHeight: t.slice.maxHeight,
                    minWidth: 1,
                    maxWidth: 1
                })
            };
            t.slice.hueRotate && (c.filter = `hue-rotate(${Math.floor(d(t, n / i) * 360)}deg)`),
            e.push(c)
        }
        return {
            steps: e,
            timing: Object.assign({
                easing: `steps(${i},jump-start)`
            }, t.timing)
        }
    }
      , E = t => t.pulse ? {
        steps: [{
            transform: "scale(1)",
            opacity: "1"
        }, {
            transform: `scale(${t.pulse.scale})`,
            opacity: "0"
        }],
        timing: Object.assign(Object.assign({}, t.timing), {
            delay: (t.glitchTimeSpan ? t.glitchTimeSpan.start : 0) * t.timing.duration,
            easing: "ease-in-out"
        })
    } : null
      , $ = t => {
        if (!t.shake)
            return {
                steps: [],
                timing: {}
            };
        const i = Math.floor(t.shake.velocity * t.timing.duration / 1e3) + 1
          , e = [];
        for (let n = 0; n < i; ++n) {
            const a = d(t, n / i) * t.shake.amplitudeX * 100
              , c = d(t, n / i) * t.shake.amplitudeY * 100;
            e.push({
                transform: `translate3d(${a}%,${c}%,0)`
            })
        }
        return {
            steps: e,
            timing: Object.assign({
                easing: `steps(${i},jump-start)`
            }, t.timing)
        }
    }
      , y = t => [$(t), E(t), ...Array.from({
        length: t.slice.count
    }).map( () => v(t))].filter(i => i !== null)
      , C = (...t) => {
        const i = e => e && typeof e == "object";
        return t.reduce( (e, n) => (Object.keys(n).forEach(a => {
            i(e[a]) && i(n[a]) ? e[a] = (0,
            o.mergeOptions)(e[a], n[a]) : n[a] !== void 0 && (e[a] = n[a])
        }
        ),
        e), {})
    }
    ;
    o.mergeOptions = C;
    const M = (t, i) => {
        var e, n;
        if (!i.createContainers)
            return {
                container: t,
                layersContainer: t,
                glitched: t.firstElementChild
            };
        if (!t.dataset.glitched) {
            const r = document.createElement("div")
              , s = document.createElement("div");
            return getComputedStyle(t).getPropertyValue("display").match(/^inline/) && (s.style.display = "inline-block"),
            s.appendChild(r),
            (e = t.parentElement) === null || e === void 0 || e.insertBefore(s, t),
            r.prepend(t),
            {
                container: s,
                layersContainer: r,
                glitched: t
            }
        }
        const a = t.parentElement
          , c = (n = t.parentElement) === null || n === void 0 ? void 0 : n.parentElement;
        for (; a.children.length > 1; )
            a.removeChild(a.children[1]);
        return a.firstElementChild.getAnimations().forEach(r => r.cancel()),
        {
            container: c,
            layersContainer: a,
            glitched: t
        }
    }
      , w = (t, i, e) => {
        const {glitched: n, container: a, layersContainer: c} = M(t, e);
        c.style.display = "grid",
        e.hideOverflow && (a.style.overflow = "hidden"),
        e.html && (n.innerHTML = e.html),
        n.style.gridArea = "1/1/-1/-1";
        const r = n.cloneNode(!0);
        r.style.gridArea = "1/1/-1/-1",
        r.style.userSelect = "none",
        r.style.pointerEvents = "none",
        r.style.opacity = "0";
        for (let l = 0; l < i.length - 1; ++l) {
            const h = r.cloneNode(!0);
            c.appendChild(h)
        }
        const s = () => {
            i.forEach( (l, h) => {
                c.children[h].animate(l.steps, l.timing)
            }
            )
        }
          , u = () => {
            i.forEach( (l, h) => {
                c.children[h].getAnimations().forEach(g => {
                    g.cancel()
                }
                )
            }
            )
        }
        ;
        switch (a.onmouseenter = null,
        a.onmouseleave = null,
        a.onclick = null,
        e.playMode) {
        case "always":
            s();
            break;
        case "hover":
            a.onmouseenter = s,
            a.onmouseleave = u;
            break;
        case "click":
            a.onclick = () => {
                u(),
                s()
            }
            ;
            break
        }
        return t.dataset.glitched = "1",
        {
            container: a,
            startGlitch: s,
            stopGlitch: u
        }
    }
      , G = (t=".powerglitch", i={}) => {
        const e = (0,
        o.mergeOptions)(m(i.playMode), i);
        let n = [];
        typeof t == "string" ? n = Array.from(document.querySelectorAll(t)) : t instanceof NodeList ? n = Array.from(t) : Array.isArray(t) ? n = t : t instanceof HTMLElement && (n = [t]);
        const a = y(e)
          , c = n.map(r => w(r, a, e));
        return {
            containers: c.map(r => r.container),
            startGlitch: () => c.forEach(r => r.startGlitch()),
            stopGlitch: () => c.forEach(r => r.stopGlitch())
        }
    }
    ;
    o.PowerGlitch = {
        glitch: G,
        generateLayers: y,
        getDefaultOptions: m
    }
}
)(b);
export {b as s};
