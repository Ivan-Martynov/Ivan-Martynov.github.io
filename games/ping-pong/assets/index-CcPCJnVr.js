const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-DIgI92U-.js","./webworkerAll-DpG_rnIQ.js","./colorToUniform-C2GHuDhf.js","./CanvasPool-Csy3AIfz.js","./WebGPURenderer-iSjqTesO.js","./SharedSystems-C36rC0rs.js","./WebGLRenderer-CjboFFue.js"])))=>i.map(i=>d[i]);
let K, Lr, lt, Wt, yt, Z, _t, He, to, ri, Vt, Ao, Fo, U, it, J, O, Oo, ys, nh, Kt, ms, oi, je, ai, io, ot, cr, At, st, uh, Ih, Rh, Gh, Lh, Oh, Ws, Gt, Ua, Ya, Ee, Be, jt, Ga, Kr, Ci, vi, vn, zt, Cn, Jr, de, Te, Es, Pt, Si, sh, Fr, wr, Tt, Hr, kh, Eh, Ns, Hh, zh, Or, Gn, Rs, $, Er, Sn, ft, Uh, Rt, hr;
let __tla = (async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);
        new MutationObserver((r)=>{
            for (const n of r)if (n.type === "childList") for (const o of n.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(r) {
            const n = {};
            return r.integrity && (n.integrity = r.integrity), r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
        }
        function s(r) {
            if (r.ep) return;
            r.ep = !0;
            const n = e(r);
            fetch(r.href, n);
        }
    })();
    const an = "modulepreload", ln = function(i, t) {
        return new URL(i, t).href;
    }, Ys = {}, Ie = function(t, e, s) {
        let r = Promise.resolve();
        if (e && e.length > 0) {
            let o = function(c) {
                return Promise.all(c.map((u)=>Promise.resolve(u).then((p)=>({
                            status: "fulfilled",
                            value: p
                        }), (p)=>({
                            status: "rejected",
                            reason: p
                        }))));
            };
            const h = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), l = a?.nonce || a?.getAttribute("nonce");
            r = o(e.map((c)=>{
                if (c = ln(c, s), c in Ys) return;
                Ys[c] = !0;
                const u = c.endsWith(".css"), p = u ? '[rel="stylesheet"]' : "";
                if (!!s) for(let y = h.length - 1; y >= 0; y--){
                    const m = h[y];
                    if (m.href === c && (!u || m.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${c}"]${p}`)) return;
                const x = document.createElement("link");
                if (x.rel = u ? "stylesheet" : an, u || (x.as = "script"), x.crossOrigin = "", x.href = c, l && x.setAttribute("nonce", l), document.head.appendChild(x), u) return new Promise((y, m)=>{
                    x.addEventListener("load", y), x.addEventListener("error", ()=>m(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function n(o) {
            const h = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (h.payload = o, window.dispatchEvent(h), !h.defaultPrevented) throw o;
        }
        return r.then((o)=>{
            for (const h of o || [])h.status === "rejected" && n(h.reason);
            return t().catch(n);
        });
    };
    Z = ((i)=>(i.Application = "application", i.WebGLPipes = "webgl-pipes", i.WebGLPipesAdaptor = "webgl-pipes-adaptor", i.WebGLSystem = "webgl-system", i.WebGPUPipes = "webgpu-pipes", i.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", i.WebGPUSystem = "webgpu-system", i.CanvasSystem = "canvas-system", i.CanvasPipesAdaptor = "canvas-pipes-adaptor", i.CanvasPipes = "canvas-pipes", i.Asset = "asset", i.LoadParser = "load-parser", i.ResolveParser = "resolve-parser", i.CacheParser = "cache-parser", i.DetectionParser = "detection-parser", i.MaskEffect = "mask-effect", i.BlendMode = "blend-mode", i.TextureSource = "texture-source", i.Environment = "environment", i.ShapeBuilder = "shape-builder", i.Batcher = "batcher", i))(Z || {});
    let cs, me, cn, un;
    cs = (i)=>{
        if (typeof i == "function" || typeof i == "object" && i.extension) {
            if (!i.extension) throw new Error("Extension class must have an extension object");
            i = {
                ...typeof i.extension != "object" ? {
                    type: i.extension
                } : i.extension,
                ref: i
            };
        }
        if (typeof i == "object") i = {
            ...i
        };
        else throw new Error("Invalid extension type");
        return typeof i.type == "string" && (i.type = [
            i.type
        ]), i;
    };
    me = (i, t)=>cs(i).priority ?? t;
    Pt = {
        _addHandlers: {},
        _removeHandlers: {},
        _queue: {},
        remove (...i) {
            return i.map(cs).forEach((t)=>{
                t.type.forEach((e)=>this._removeHandlers[e]?.(t));
            }), this;
        },
        add (...i) {
            return i.map(cs).forEach((t)=>{
                t.type.forEach((e)=>{
                    const s = this._addHandlers, r = this._queue;
                    s[e] ? s[e]?.(t) : (r[e] = r[e] || [], r[e]?.push(t));
                });
            }), this;
        },
        handle (i, t, e) {
            const s = this._addHandlers, r = this._removeHandlers;
            if (s[i] || r[i]) throw new Error(`Extension type ${i} already has a handler`);
            s[i] = t, r[i] = e;
            const n = this._queue;
            return n[i] && (n[i]?.forEach((o)=>t(o)), delete n[i]), this;
        },
        handleByMap (i, t) {
            return this.handle(i, (e)=>{
                e.name && (t[e.name] = e.ref);
            }, (e)=>{
                e.name && delete t[e.name];
            });
        },
        handleByNamedList (i, t, e = -1) {
            return this.handle(i, (s)=>{
                t.findIndex((n)=>n.name === s.name) >= 0 || (t.push({
                    name: s.name,
                    value: s.ref
                }), t.sort((n, o)=>me(o.value, e) - me(n.value, e)));
            }, (s)=>{
                const r = t.findIndex((n)=>n.name === s.name);
                r !== -1 && t.splice(r, 1);
            });
        },
        handleByList (i, t, e = -1) {
            return this.handle(i, (s)=>{
                t.includes(s.ref) || (t.push(s.ref), t.sort((r, n)=>me(n, e) - me(r, e)));
            }, (s)=>{
                const r = t.indexOf(s.ref);
                r !== -1 && t.splice(r, 1);
            });
        },
        mixin (i, ...t) {
            for (const e of t)Object.defineProperties(i.prototype, Object.getOwnPropertyDescriptors(e));
        }
    };
    cn = {
        extension: {
            type: Z.Environment,
            name: "browser",
            priority: -1
        },
        test: ()=>!0,
        load: async ()=>{
            await Ie(()=>import("./browserAll-DIgI92U-.js"), __vite__mapDeps([0,1,2,3]), import.meta.url);
        }
    };
    un = {
        extension: {
            type: Z.Environment,
            name: "webworker",
            priority: 0
        },
        test: ()=>typeof self < "u" && self.WorkerGlobalScope !== void 0,
        load: async ()=>{
            await Ie(()=>import("./webworkerAll-DpG_rnIQ.js"), __vite__mapDeps([1,2,3]), import.meta.url);
        }
    };
    class at {
        constructor(t, e, s){
            this._x = e || 0, this._y = s || 0, this._observer = t;
        }
        clone(t) {
            return new at(t ?? this._observer, this._x, this._y);
        }
        set(t = 0, e = t) {
            return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this._observer._onUpdate(this)), this;
        }
        copyFrom(t) {
            return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this._observer._onUpdate(this)), this;
        }
        copyTo(t) {
            return t.set(this._x, this._y), t;
        }
        equals(t) {
            return t.x === this._x && t.y === this._y;
        }
        toString() {
            return `[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x !== t && (this._x = t, this._observer._onUpdate(this));
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y !== t && (this._y = t, this._observer._onUpdate(this));
        }
    }
    function Ps(i) {
        return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    }
    var ze = {
        exports: {}
    }, Xs;
    function dn() {
        return Xs || (Xs = 1, function(i) {
            var t = Object.prototype.hasOwnProperty, e = "~";
            function s() {}
            Object.create && (s.prototype = Object.create(null), new s().__proto__ || (e = !1));
            function r(a, l, c) {
                this.fn = a, this.context = l, this.once = c || !1;
            }
            function n(a, l, c, u, p) {
                if (typeof c != "function") throw new TypeError("The listener must be a function");
                var d = new r(c, u || a, p), x = e ? e + l : l;
                return a._events[x] ? a._events[x].fn ? a._events[x] = [
                    a._events[x],
                    d
                ] : a._events[x].push(d) : (a._events[x] = d, a._eventsCount++), a;
            }
            function o(a, l) {
                --a._eventsCount === 0 ? a._events = new s : delete a._events[l];
            }
            function h() {
                this._events = new s, this._eventsCount = 0;
            }
            h.prototype.eventNames = function() {
                var l = [], c, u;
                if (this._eventsCount === 0) return l;
                for(u in c = this._events)t.call(c, u) && l.push(e ? u.slice(1) : u);
                return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
            }, h.prototype.listeners = function(l) {
                var c = e ? e + l : l, u = this._events[c];
                if (!u) return [];
                if (u.fn) return [
                    u.fn
                ];
                for(var p = 0, d = u.length, x = new Array(d); p < d; p++)x[p] = u[p].fn;
                return x;
            }, h.prototype.listenerCount = function(l) {
                var c = e ? e + l : l, u = this._events[c];
                return u ? u.fn ? 1 : u.length : 0;
            }, h.prototype.emit = function(l, c, u, p, d, x) {
                var y = e ? e + l : l;
                if (!this._events[y]) return !1;
                var m = this._events[y], w = arguments.length, b, S;
                if (m.fn) {
                    switch(m.once && this.removeListener(l, m.fn, void 0, !0), w){
                        case 1:
                            return m.fn.call(m.context), !0;
                        case 2:
                            return m.fn.call(m.context, c), !0;
                        case 3:
                            return m.fn.call(m.context, c, u), !0;
                        case 4:
                            return m.fn.call(m.context, c, u, p), !0;
                        case 5:
                            return m.fn.call(m.context, c, u, p, d), !0;
                        case 6:
                            return m.fn.call(m.context, c, u, p, d, x), !0;
                    }
                    for(S = 1, b = new Array(w - 1); S < w; S++)b[S - 1] = arguments[S];
                    m.fn.apply(m.context, b);
                } else {
                    var A = m.length, E;
                    for(S = 0; S < A; S++)switch(m[S].once && this.removeListener(l, m[S].fn, void 0, !0), w){
                        case 1:
                            m[S].fn.call(m[S].context);
                            break;
                        case 2:
                            m[S].fn.call(m[S].context, c);
                            break;
                        case 3:
                            m[S].fn.call(m[S].context, c, u);
                            break;
                        case 4:
                            m[S].fn.call(m[S].context, c, u, p);
                            break;
                        default:
                            if (!b) for(E = 1, b = new Array(w - 1); E < w; E++)b[E - 1] = arguments[E];
                            m[S].fn.apply(m[S].context, b);
                    }
                }
                return !0;
            }, h.prototype.on = function(l, c, u) {
                return n(this, l, c, u, !1);
            }, h.prototype.once = function(l, c, u) {
                return n(this, l, c, u, !0);
            }, h.prototype.removeListener = function(l, c, u, p) {
                var d = e ? e + l : l;
                if (!this._events[d]) return this;
                if (!c) return o(this, d), this;
                var x = this._events[d];
                if (x.fn) x.fn === c && (!p || x.once) && (!u || x.context === u) && o(this, d);
                else {
                    for(var y = 0, m = [], w = x.length; y < w; y++)(x[y].fn !== c || p && !x[y].once || u && x[y].context !== u) && m.push(x[y]);
                    m.length ? this._events[d] = m.length === 1 ? m[0] : m : o(this, d);
                }
                return this;
            }, h.prototype.removeAllListeners = function(l) {
                var c;
                return l ? (c = e ? e + l : l, this._events[c] && o(this, c)) : (this._events = new s, this._eventsCount = 0), this;
            }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = e, h.EventEmitter = h, i.exports = h;
        }(ze)), ze.exports;
    }
    var fn = dn();
    let pn, mn, gn;
    At = Ps(fn);
    pn = Math.PI * 2;
    mn = 180 / Math.PI;
    gn = Math.PI / 180;
    O = class {
        constructor(t = 0, e = 0){
            this.x = 0, this.y = 0, this.x = t, this.y = e;
        }
        clone() {
            return new O(this.x, this.y);
        }
        copyFrom(t) {
            return this.set(t.x, t.y), this;
        }
        copyTo(t) {
            return t.set(this.x, this.y), t;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        set(t = 0, e = t) {
            return this.x = t, this.y = e, this;
        }
        toString() {
            return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
        }
        static get shared() {
            return Le.x = 0, Le.y = 0, Le;
        }
    };
    const Le = new O;
    U = class {
        constructor(t = 1, e = 0, s = 0, r = 1, n = 0, o = 0){
            this.array = null, this.a = t, this.b = e, this.c = s, this.d = r, this.tx = n, this.ty = o;
        }
        fromArray(t) {
            this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
        }
        set(t, e, s, r, n, o) {
            return this.a = t, this.b = e, this.c = s, this.d = r, this.tx = n, this.ty = o, this;
        }
        toArray(t, e) {
            this.array || (this.array = new Float32Array(9));
            const s = e || this.array;
            return t ? (s[0] = this.a, s[1] = this.b, s[2] = 0, s[3] = this.c, s[4] = this.d, s[5] = 0, s[6] = this.tx, s[7] = this.ty, s[8] = 1) : (s[0] = this.a, s[1] = this.c, s[2] = this.tx, s[3] = this.b, s[4] = this.d, s[5] = this.ty, s[6] = 0, s[7] = 0, s[8] = 1), s;
        }
        apply(t, e) {
            e = e || new O;
            const s = t.x, r = t.y;
            return e.x = this.a * s + this.c * r + this.tx, e.y = this.b * s + this.d * r + this.ty, e;
        }
        applyInverse(t, e) {
            e = e || new O;
            const s = this.a, r = this.b, n = this.c, o = this.d, h = this.tx, a = this.ty, l = 1 / (s * o + n * -r), c = t.x, u = t.y;
            return e.x = o * l * c + -n * l * u + (a * n - h * o) * l, e.y = s * l * u + -r * l * c + (-a * s + h * r) * l, e;
        }
        translate(t, e) {
            return this.tx += t, this.ty += e, this;
        }
        scale(t, e) {
            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
        }
        rotate(t) {
            const e = Math.cos(t), s = Math.sin(t), r = this.a, n = this.c, o = this.tx;
            return this.a = r * e - this.b * s, this.b = r * s + this.b * e, this.c = n * e - this.d * s, this.d = n * s + this.d * e, this.tx = o * e - this.ty * s, this.ty = o * s + this.ty * e, this;
        }
        append(t) {
            const e = this.a, s = this.b, r = this.c, n = this.d;
            return this.a = t.a * e + t.b * r, this.b = t.a * s + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * s + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * s + t.ty * n + this.ty, this;
        }
        appendFrom(t, e) {
            const s = t.a, r = t.b, n = t.c, o = t.d, h = t.tx, a = t.ty, l = e.a, c = e.b, u = e.c, p = e.d;
            return this.a = s * l + r * u, this.b = s * c + r * p, this.c = n * l + o * u, this.d = n * c + o * p, this.tx = h * l + a * u + e.tx, this.ty = h * c + a * p + e.ty, this;
        }
        setTransform(t, e, s, r, n, o, h, a, l) {
            return this.a = Math.cos(h + l) * n, this.b = Math.sin(h + l) * n, this.c = -Math.sin(h - a) * o, this.d = Math.cos(h - a) * o, this.tx = t - (s * this.a + r * this.c), this.ty = e - (s * this.b + r * this.d), this;
        }
        prepend(t) {
            const e = this.tx;
            if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
                const s = this.a, r = this.c;
                this.a = s * t.a + this.b * t.c, this.b = s * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d;
            }
            return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
        }
        decompose(t) {
            const e = this.a, s = this.b, r = this.c, n = this.d, o = t.pivot, h = -Math.atan2(-r, n), a = Math.atan2(s, e), l = Math.abs(h + a);
            return l < 1e-5 || Math.abs(pn - l) < 1e-5 ? (t.rotation = a, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = h, t.skew.y = a), t.scale.x = Math.sqrt(e * e + s * s), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * e + o.y * r), t.position.y = this.ty + (o.x * s + o.y * n), t;
        }
        invert() {
            const t = this.a, e = this.b, s = this.c, r = this.d, n = this.tx, o = t * r - e * s;
            return this.a = r / o, this.b = -e / o, this.c = -s / o, this.d = t / o, this.tx = (s * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this;
        }
        isIdentity() {
            return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
        }
        identity() {
            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
        }
        clone() {
            const t = new U;
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
        }
        copyTo(t) {
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
        }
        copyFrom(t) {
            return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
        }
        equals(t) {
            return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty;
        }
        toString() {
            return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
        }
        static get IDENTITY() {
            return yn.identity();
        }
        static get shared() {
            return xn.identity();
        }
    };
    const xn = new U, yn = new U, Ot = [
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1
    ], Dt = [
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1
    ], Ut = [
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1
    ], Yt = [
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1
    ], us = [], Zi = [], ge = Math.sign;
    function _n() {
        for(let i = 0; i < 16; i++){
            const t = [];
            us.push(t);
            for(let e = 0; e < 16; e++){
                const s = ge(Ot[i] * Ot[e] + Ut[i] * Dt[e]), r = ge(Dt[i] * Ot[e] + Yt[i] * Dt[e]), n = ge(Ot[i] * Ut[e] + Ut[i] * Yt[e]), o = ge(Dt[i] * Ut[e] + Yt[i] * Yt[e]);
                for(let h = 0; h < 16; h++)if (Ot[h] === s && Dt[h] === r && Ut[h] === n && Yt[h] === o) {
                    t.push(h);
                    break;
                }
            }
        }
        for(let i = 0; i < 16; i++){
            const t = new U;
            t.set(Ot[i], Dt[i], Ut[i], Yt[i], 0, 0), Zi.push(t);
        }
    }
    _n();
    const Q = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: (i)=>Ot[i],
        uY: (i)=>Dt[i],
        vX: (i)=>Ut[i],
        vY: (i)=>Yt[i],
        inv: (i)=>i & 8 ? i & 15 : -i & 7,
        add: (i, t)=>us[i][t],
        sub: (i, t)=>us[i][Q.inv(t)],
        rotate180: (i)=>i ^ 4,
        isVertical: (i)=>(i & 3) === 2,
        byDirection: (i, t)=>Math.abs(i) * 2 <= Math.abs(t) ? t >= 0 ? Q.S : Q.N : Math.abs(t) * 2 <= Math.abs(i) ? i > 0 ? Q.E : Q.W : t > 0 ? i > 0 ? Q.SE : Q.SW : i > 0 ? Q.NE : Q.NW,
        matrixAppendRotationInv: (i, t, e = 0, s = 0)=>{
            const r = Zi[Q.inv(t)];
            r.tx = e, r.ty = s, i.append(r);
        }
    }, xe = [
        new O,
        new O,
        new O,
        new O
    ];
    J = class {
        constructor(t = 0, e = 0, s = 0, r = 0){
            this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(s), this.height = Number(r);
        }
        get left() {
            return this.x;
        }
        get right() {
            return this.x + this.width;
        }
        get top() {
            return this.y;
        }
        get bottom() {
            return this.y + this.height;
        }
        isEmpty() {
            return this.left === this.right || this.top === this.bottom;
        }
        static get EMPTY() {
            return new J(0, 0, 0, 0);
        }
        clone() {
            return new J(this.x, this.y, this.width, this.height);
        }
        copyFromBounds(t) {
            return this.x = t.minX, this.y = t.minY, this.width = t.maxX - t.minX, this.height = t.maxY - t.minY, this;
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        contains(t, e) {
            return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
        }
        strokeContains(t, e, s, r = .5) {
            const { width: n, height: o } = this;
            if (n <= 0 || o <= 0) return !1;
            const h = this.x, a = this.y, l = s * (1 - r), c = s - l, u = h - l, p = h + n + l, d = a - l, x = a + o + l, y = h + c, m = h + n - c, w = a + c, b = a + o - c;
            return t >= u && t <= p && e >= d && e <= x && !(t > y && t < m && e > w && e < b);
        }
        intersects(t, e) {
            if (!e) {
                const z = this.x < t.x ? t.x : this.x;
                if ((this.right > t.right ? t.right : this.right) <= z) return !1;
                const R = this.y < t.y ? t.y : this.y;
                return (this.bottom > t.bottom ? t.bottom : this.bottom) > R;
            }
            const s = this.left, r = this.right, n = this.top, o = this.bottom;
            if (r <= s || o <= n) return !1;
            const h = xe[0].set(t.left, t.top), a = xe[1].set(t.left, t.bottom), l = xe[2].set(t.right, t.top), c = xe[3].set(t.right, t.bottom);
            if (l.x <= h.x || a.y <= h.y) return !1;
            const u = Math.sign(e.a * e.d - e.b * e.c);
            if (u === 0 || (e.apply(h, h), e.apply(a, a), e.apply(l, l), e.apply(c, c), Math.max(h.x, a.x, l.x, c.x) <= s || Math.min(h.x, a.x, l.x, c.x) >= r || Math.max(h.y, a.y, l.y, c.y) <= n || Math.min(h.y, a.y, l.y, c.y) >= o)) return !1;
            const p = u * (a.y - h.y), d = u * (h.x - a.x), x = p * s + d * n, y = p * r + d * n, m = p * s + d * o, w = p * r + d * o;
            if (Math.max(x, y, m, w) <= p * h.x + d * h.y || Math.min(x, y, m, w) >= p * c.x + d * c.y) return !1;
            const b = u * (h.y - l.y), S = u * (l.x - h.x), A = b * s + S * n, E = b * r + S * n, T = b * s + S * o, k = b * r + S * o;
            return !(Math.max(A, E, T, k) <= b * h.x + S * h.y || Math.min(A, E, T, k) >= b * c.x + S * c.y);
        }
        pad(t = 0, e = t) {
            return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this;
        }
        fit(t) {
            const e = Math.max(this.x, t.x), s = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
            return this.x = e, this.width = Math.max(s - e, 0), this.y = r, this.height = Math.max(n - r, 0), this;
        }
        ceil(t = 1, e = .001) {
            const s = Math.ceil((this.x + this.width - e) * t) / t, r = Math.ceil((this.y + this.height - e) * t) / t;
            return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = s - this.x, this.height = r - this.y, this;
        }
        enlarge(t) {
            const e = Math.min(this.x, t.x), s = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
            return this.x = e, this.width = s - e, this.y = r, this.height = n - r, this;
        }
        getBounds(t) {
            return t || (t = new J), t.copyFrom(this), t;
        }
        containsRect(t) {
            if (this.width <= 0 || this.height <= 0) return !1;
            const e = t.x, s = t.y, r = t.x + t.width, n = t.y + t.height;
            return e >= this.x && e < this.x + this.width && s >= this.y && s < this.y + this.height && r >= this.x && r < this.x + this.width && n >= this.y && n < this.y + this.height;
        }
        toString() {
            return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
        }
    };
    const Oe = {
        default: -1
    };
    it = function(i = "default") {
        return Oe[i] === void 0 && (Oe[i] = -1), ++Oe[i];
    };
    let Vs, wn;
    Vs = {};
    st = "8.0.0";
    wn = "8.3.4";
    K = function(i, t, e = 3) {
        if (Vs[t]) return;
        let s = new Error().stack;
        typeof s > "u" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`) : (s = s.split(`
`).splice(e).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${i}`), console.warn(s), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`), console.warn(s))), Vs[t] = !0;
    };
    const Qi = ()=>{};
    Ns = function(i) {
        return i += i === 0 ? 1 : 0, --i, i |= i >>> 1, i |= i >>> 2, i |= i >>> 4, i |= i >>> 8, i |= i >>> 16, i + 1;
    };
    function $s(i) {
        return !(i & i - 1) && !!i;
    }
    function Ji(i) {
        const t = {};
        for(const e in i)i[e] !== void 0 && (t[e] = i[e]);
        return t;
    }
    const js = Object.create(null);
    function bn(i) {
        const t = js[i];
        return t === void 0 && (js[i] = it("resource")), t;
    }
    const tr = class er extends At {
        constructor(t = {}){
            super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, this.destroyed = !1, t = {
                ...er.defaultOptions,
                ...t
            }, this.addressMode = t.addressMode, this.addressModeU = t.addressModeU ?? this.addressModeU, this.addressModeV = t.addressModeV ?? this.addressModeV, this.addressModeW = t.addressModeW ?? this.addressModeW, this.scaleMode = t.scaleMode, this.magFilter = t.magFilter ?? this.magFilter, this.minFilter = t.minFilter ?? this.minFilter, this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter, this.lodMinClamp = t.lodMinClamp, this.lodMaxClamp = t.lodMaxClamp, this.compare = t.compare, this.maxAnisotropy = t.maxAnisotropy ?? 1;
        }
        set addressMode(t) {
            this.addressModeU = t, this.addressModeV = t, this.addressModeW = t;
        }
        get addressMode() {
            return this.addressModeU;
        }
        set wrapMode(t) {
            K(st, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = t;
        }
        get wrapMode() {
            return this.addressMode;
        }
        set scaleMode(t) {
            this.magFilter = t, this.minFilter = t, this.mipmapFilter = t;
        }
        get scaleMode() {
            return this.magFilter;
        }
        set maxAnisotropy(t) {
            this._maxAnisotropy = Math.min(t, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear");
        }
        get maxAnisotropy() {
            return this._maxAnisotropy;
        }
        get _resourceId() {
            return this._sharedResourceId || this._generateResourceId();
        }
        update() {
            this.emit("change", this), this._sharedResourceId = null;
        }
        _generateResourceId() {
            const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
            return this._sharedResourceId = bn(t), this._resourceId;
        }
        destroy() {
            this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners();
        }
    };
    tr.defaultOptions = {
        addressMode: "clamp-to-edge",
        scaleMode: "linear"
    };
    vn = tr;
    const sr = class ir extends At {
        constructor(t = {}){
            super(), this.options = t, this.uid = it("textureSource"), this._resourceType = "textureSource", this._resourceId = it("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = !1, this.format = "rgba8unorm", this.dimension = "2d", this.antialias = !1, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, t = {
                ...ir.defaultOptions,
                ...t
            }, this.label = t.label ?? "", this.resource = t.resource, this.autoGarbageCollect = t.autoGarbageCollect, this._resolution = t.resolution, t.width ? this.pixelWidth = t.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1, t.height ? this.pixelHeight = t.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = t.format, this.dimension = t.dimensions, this.mipLevelCount = t.mipLevelCount, this.autoGenerateMipmaps = t.autoGenerateMipmaps, this.sampleCount = t.sampleCount, this.antialias = t.antialias, this.alphaMode = t.alphaMode, this.style = new vn(Ji(t)), this.destroyed = !1, this._refreshPOT();
        }
        get source() {
            return this;
        }
        get style() {
            return this._style;
        }
        set style(t) {
            this.style !== t && (this._style?.off("change", this._onStyleChange, this), this._style = t, this._style?.on("change", this._onStyleChange, this), this._onStyleChange());
        }
        get addressMode() {
            return this._style.addressMode;
        }
        set addressMode(t) {
            this._style.addressMode = t;
        }
        get repeatMode() {
            return this._style.addressMode;
        }
        set repeatMode(t) {
            this._style.addressMode = t;
        }
        get magFilter() {
            return this._style.magFilter;
        }
        set magFilter(t) {
            this._style.magFilter = t;
        }
        get minFilter() {
            return this._style.minFilter;
        }
        set minFilter(t) {
            this._style.minFilter = t;
        }
        get mipmapFilter() {
            return this._style.mipmapFilter;
        }
        set mipmapFilter(t) {
            this._style.mipmapFilter = t;
        }
        get lodMinClamp() {
            return this._style.lodMinClamp;
        }
        set lodMinClamp(t) {
            this._style.lodMinClamp = t;
        }
        get lodMaxClamp() {
            return this._style.lodMaxClamp;
        }
        set lodMaxClamp(t) {
            this._style.lodMaxClamp = t;
        }
        _onStyleChange() {
            this.emit("styleChange", this);
        }
        update() {
            if (this.resource) {
                const t = this._resolution;
                if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) return;
            }
            this.emit("update", this);
        }
        destroy() {
            this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this._style && (this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners();
        }
        unload() {
            this._resourceId = it("resource"), this.emit("change", this), this.emit("unload", this);
        }
        get resourceWidth() {
            const { resource: t } = this;
            return t.naturalWidth || t.videoWidth || t.displayWidth || t.width;
        }
        get resourceHeight() {
            const { resource: t } = this;
            return t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
        }
        get resolution() {
            return this._resolution;
        }
        set resolution(t) {
            this._resolution !== t && (this._resolution = t, this.width = this.pixelWidth / t, this.height = this.pixelHeight / t);
        }
        resize(t, e, s) {
            s || (s = this._resolution), t || (t = this.width), e || (e = this.height);
            const r = Math.round(t * s), n = Math.round(e * s);
            return this.width = r / s, this.height = n / s, this._resolution = s, this.pixelWidth === r && this.pixelHeight === n ? !1 : (this._refreshPOT(), this.pixelWidth = r, this.pixelHeight = n, this.emit("resize", this), this._resourceId = it("resource"), this.emit("change", this), !0);
        }
        updateMipmaps() {
            this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this);
        }
        set wrapMode(t) {
            this._style.wrapMode = t;
        }
        get wrapMode() {
            return this._style.wrapMode;
        }
        set scaleMode(t) {
            this._style.scaleMode = t;
        }
        get scaleMode() {
            return this._style.scaleMode;
        }
        _refreshPOT() {
            this.isPowerOfTwo = $s(this.pixelWidth) && $s(this.pixelHeight);
        }
        static test(t) {
            throw new Error("Unimplemented");
        }
    };
    sr.defaultOptions = {
        resolution: 1,
        format: "bgra8unorm",
        alphaMode: "premultiply-alpha-on-upload",
        dimensions: "2d",
        mipLevelCount: 1,
        autoGenerateMipmaps: !1,
        sampleCount: 1,
        antialias: !1,
        autoGarbageCollect: !1
    };
    Tt = sr;
    class As extends Tt {
        constructor(t){
            const e = t.resource || new Float32Array(t.width * t.height * 4);
            let s = t.format;
            s || (e instanceof Float32Array ? s = "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? s = "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? s = "rgba16uint" : (e instanceof Int8Array, s = "bgra8unorm")), super({
                ...t,
                resource: e,
                format: s
            }), this.uploadMethodId = "buffer";
        }
        static test(t) {
            return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
        }
    }
    As.extension = Z.TextureSource;
    const qs = new U;
    Sn = class {
        constructor(t, e){
            this.mapCoord = new U, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, typeof e > "u" ? this.clampMargin = t.width < 10 ? 0 : .5 : this.clampMargin = e, this.isSimple = !1, this.texture = t;
        }
        get texture() {
            return this._texture;
        }
        set texture(t) {
            this.texture !== t && (this._texture?.removeListener("update", this.update, this), this._texture = t, this._texture.addListener("update", this.update, this), this.update());
        }
        multiplyUvs(t, e) {
            e === void 0 && (e = t);
            const s = this.mapCoord;
            for(let r = 0; r < t.length; r += 2){
                const n = t[r], o = t[r + 1];
                e[r] = n * s.a + o * s.c + s.tx, e[r + 1] = n * s.b + o * s.d + s.ty;
            }
            return e;
        }
        update() {
            const t = this._texture;
            this._updateID++;
            const e = t.uvs;
            this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
            const s = t.orig, r = t.trim;
            r && (qs.set(s.width / r.width, 0, 0, s.height / r.height, -r.x / r.width, -r.y / r.height), this.mapCoord.append(qs));
            const n = t.source, o = this.uClampFrame, h = this.clampMargin / n._resolution, a = this.clampOffset / n._resolution;
            return o[0] = (t.frame.x + h + a) / n.width, o[1] = (t.frame.y + h + a) / n.height, o[2] = (t.frame.x + t.frame.width - h + a) / n.width, o[3] = (t.frame.y + t.frame.height - h + a) / n.height, this.uClampOffset[0] = this.clampOffset / n.pixelWidth, this.uClampOffset[1] = this.clampOffset / n.pixelHeight, this.isSimple = t.frame.width === n.width && t.frame.height === n.height && t.rotate === 0, !0;
        }
    };
    $ = class extends At {
        constructor({ source: t, label: e, frame: s, orig: r, trim: n, defaultAnchor: o, defaultBorders: h, rotate: a, dynamic: l } = {}){
            if (super(), this.uid = it("texture"), this.uvs = {
                x0: 0,
                y0: 0,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                x3: 0,
                y3: 0
            }, this.frame = new J, this.noFrame = !1, this.dynamic = !1, this.isTexture = !0, this.label = e, this.source = t?.source ?? new Tt, this.noFrame = !s, s) this.frame.copyFrom(s);
            else {
                const { width: c, height: u } = this._source;
                this.frame.width = c, this.frame.height = u;
            }
            this.orig = r || this.frame, this.trim = n, this.rotate = a ?? 0, this.defaultAnchor = o, this.defaultBorders = h, this.destroyed = !1, this.dynamic = l || !1, this.updateUvs();
        }
        set source(t) {
            this._source && this._source.off("resize", this.update, this), this._source = t, t.on("resize", this.update, this), this.emit("update", this);
        }
        get source() {
            return this._source;
        }
        get textureMatrix() {
            return this._textureMatrix || (this._textureMatrix = new Sn(this)), this._textureMatrix;
        }
        get width() {
            return this.orig.width;
        }
        get height() {
            return this.orig.height;
        }
        updateUvs() {
            const { uvs: t, frame: e } = this, { width: s, height: r } = this._source, n = e.x / s, o = e.y / r, h = e.width / s, a = e.height / r;
            let l = this.rotate;
            if (l) {
                const c = h / 2, u = a / 2, p = n + c, d = o + u;
                l = Q.add(l, Q.NW), t.x0 = p + c * Q.uX(l), t.y0 = d + u * Q.uY(l), l = Q.add(l, 2), t.x1 = p + c * Q.uX(l), t.y1 = d + u * Q.uY(l), l = Q.add(l, 2), t.x2 = p + c * Q.uX(l), t.y2 = d + u * Q.uY(l), l = Q.add(l, 2), t.x3 = p + c * Q.uX(l), t.y3 = d + u * Q.uY(l);
            } else t.x0 = n, t.y0 = o, t.x1 = n + h, t.y1 = o, t.x2 = n + h, t.y2 = o + a, t.x3 = n, t.y3 = o + a;
        }
        destroy(t = !1) {
            this._source && t && (this._source.destroy(), this._source = null), this._textureMatrix = null, this.destroyed = !0, this.emit("destroy", this), this.removeAllListeners();
        }
        update() {
            this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this);
        }
        get baseTexture() {
            return K(st, "Texture.baseTexture is now Texture.source"), this._source;
        }
    };
    $.EMPTY = new $({
        label: "EMPTY",
        source: new Tt({
            label: "EMPTY"
        })
    });
    $.EMPTY.destroy = Qi;
    $.WHITE = new $({
        source: new As({
            resource: new Uint8Array([
                255,
                255,
                255,
                255
            ]),
            width: 1,
            height: 1,
            alphaMode: "premultiply-alpha-on-upload",
            label: "WHITE"
        }),
        label: "WHITE"
    });
    $.WHITE.destroy = Qi;
    Cn = function(i, t, e) {
        const { width: s, height: r } = e.orig, n = e.trim;
        if (n) {
            const o = n.width, h = n.height;
            i.minX = n.x - t._x * s, i.maxX = i.minX + o, i.minY = n.y - t._y * r, i.maxY = i.minY + h;
        } else i.minX = -t._x * s, i.maxX = i.minX + s, i.minY = -t._y * r, i.maxY = i.minY + r;
    };
    const Ks = new U;
    _t = class {
        constructor(t = 1 / 0, e = 1 / 0, s = -1 / 0, r = -1 / 0){
            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Ks, this.minX = t, this.minY = e, this.maxX = s, this.maxY = r;
        }
        isEmpty() {
            return this.minX > this.maxX || this.minY > this.maxY;
        }
        get rectangle() {
            this._rectangle || (this._rectangle = new J);
            const t = this._rectangle;
            return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0, t.y = 0, t.width = 0, t.height = 0) : t.copyFromBounds(this), t;
        }
        clear() {
            return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Ks, this;
        }
        set(t, e, s, r) {
            this.minX = t, this.minY = e, this.maxX = s, this.maxY = r;
        }
        addFrame(t, e, s, r, n) {
            n || (n = this.matrix);
            const o = n.a, h = n.b, a = n.c, l = n.d, c = n.tx, u = n.ty;
            let p = this.minX, d = this.minY, x = this.maxX, y = this.maxY, m = o * t + a * e + c, w = h * t + l * e + u;
            m < p && (p = m), w < d && (d = w), m > x && (x = m), w > y && (y = w), m = o * s + a * e + c, w = h * s + l * e + u, m < p && (p = m), w < d && (d = w), m > x && (x = m), w > y && (y = w), m = o * t + a * r + c, w = h * t + l * r + u, m < p && (p = m), w < d && (d = w), m > x && (x = m), w > y && (y = w), m = o * s + a * r + c, w = h * s + l * r + u, m < p && (p = m), w < d && (d = w), m > x && (x = m), w > y && (y = w), this.minX = p, this.minY = d, this.maxX = x, this.maxY = y;
        }
        addRect(t, e) {
            this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
        }
        addBounds(t, e) {
            this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
        }
        addBoundsMask(t) {
            this.minX = this.minX > t.minX ? this.minX : t.minX, this.minY = this.minY > t.minY ? this.minY : t.minY, this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX, this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY;
        }
        applyMatrix(t) {
            const e = this.minX, s = this.minY, r = this.maxX, n = this.maxY, { a: o, b: h, c: a, d: l, tx: c, ty: u } = t;
            let p = o * e + a * s + c, d = h * e + l * s + u;
            this.minX = p, this.minY = d, this.maxX = p, this.maxY = d, p = o * r + a * s + c, d = h * r + l * s + u, this.minX = p < this.minX ? p : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = p > this.maxX ? p : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, p = o * e + a * n + c, d = h * e + l * n + u, this.minX = p < this.minX ? p : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = p > this.maxX ? p : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, p = o * r + a * n + c, d = h * r + l * n + u, this.minX = p < this.minX ? p : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = p > this.maxX ? p : this.maxX, this.maxY = d > this.maxY ? d : this.maxY;
        }
        fit(t) {
            return this.minX < t.left && (this.minX = t.left), this.maxX > t.right && (this.maxX = t.right), this.minY < t.top && (this.minY = t.top), this.maxY > t.bottom && (this.maxY = t.bottom), this;
        }
        fitBounds(t, e, s, r) {
            return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < s && (this.minY = s), this.maxY > r && (this.maxY = r), this;
        }
        pad(t, e = t) {
            return this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e, this;
        }
        ceil() {
            return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this;
        }
        clone() {
            return new _t(this.minX, this.minY, this.maxX, this.maxY);
        }
        scale(t, e = t) {
            return this.minX *= t, this.minY *= e, this.maxX *= t, this.maxY *= e, this;
        }
        get x() {
            return this.minX;
        }
        set x(t) {
            const e = this.maxX - this.minX;
            this.minX = t, this.maxX = t + e;
        }
        get y() {
            return this.minY;
        }
        set y(t) {
            const e = this.maxY - this.minY;
            this.minY = t, this.maxY = t + e;
        }
        get width() {
            return this.maxX - this.minX;
        }
        set width(t) {
            this.maxX = this.minX + t;
        }
        get height() {
            return this.maxY - this.minY;
        }
        set height(t) {
            this.maxY = this.minY + t;
        }
        get left() {
            return this.minX;
        }
        get right() {
            return this.maxX;
        }
        get top() {
            return this.minY;
        }
        get bottom() {
            return this.maxY;
        }
        get isPositive() {
            return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
        }
        get isValid() {
            return this.minX + this.minY !== 1 / 0;
        }
        addVertexData(t, e, s, r) {
            let n = this.minX, o = this.minY, h = this.maxX, a = this.maxY;
            r || (r = this.matrix);
            const l = r.a, c = r.b, u = r.c, p = r.d, d = r.tx, x = r.ty;
            for(let y = e; y < s; y += 2){
                const m = t[y], w = t[y + 1], b = l * m + u * w + d, S = c * m + p * w + x;
                n = b < n ? b : n, o = S < o ? S : o, h = b > h ? b : h, a = S > a ? S : a;
            }
            this.minX = n, this.minY = o, this.maxX = h, this.maxY = a;
        }
        containsPoint(t, e) {
            return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e;
        }
        toString() {
            return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
        }
        copyFrom(t) {
            return this.minX = t.minX, this.minY = t.minY, this.maxX = t.maxX, this.maxY = t.maxY, this;
        }
    };
    var Mn = {
        grad: .9,
        turn: 360,
        rad: 360 / (2 * Math.PI)
    }, Et = function(i) {
        return typeof i == "string" ? i.length > 0 : typeof i == "number";
    }, nt = function(i, t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * i) / e + 0;
    }, pt = function(i, t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = 1), i > e ? e : i > t ? i : t;
    }, rr = function(i) {
        return (i = isFinite(i) ? i % 360 : 0) > 0 ? i : i + 360;
    }, Zs = function(i) {
        return {
            r: pt(i.r, 0, 255),
            g: pt(i.g, 0, 255),
            b: pt(i.b, 0, 255),
            a: pt(i.a)
        };
    }, De = function(i) {
        return {
            r: nt(i.r),
            g: nt(i.g),
            b: nt(i.b),
            a: nt(i.a, 3)
        };
    }, Pn = /^#([0-9a-f]{3,8})$/i, ye = function(i) {
        var t = i.toString(16);
        return t.length < 2 ? "0" + t : t;
    }, nr = function(i) {
        var t = i.r, e = i.g, s = i.b, r = i.a, n = Math.max(t, e, s), o = n - Math.min(t, e, s), h = o ? n === t ? (e - s) / o : n === e ? 2 + (s - t) / o : 4 + (t - e) / o : 0;
        return {
            h: 60 * (h < 0 ? h + 6 : h),
            s: n ? o / n * 100 : 0,
            v: n / 255 * 100,
            a: r
        };
    }, or = function(i) {
        var t = i.h, e = i.s, s = i.v, r = i.a;
        t = t / 360 * 6, e /= 100, s /= 100;
        var n = Math.floor(t), o = s * (1 - e), h = s * (1 - (t - n) * e), a = s * (1 - (1 - t + n) * e), l = n % 6;
        return {
            r: 255 * [
                s,
                h,
                o,
                o,
                a,
                s
            ][l],
            g: 255 * [
                a,
                s,
                s,
                h,
                o,
                o
            ][l],
            b: 255 * [
                o,
                o,
                a,
                s,
                s,
                h
            ][l],
            a: r
        };
    }, Qs = function(i) {
        return {
            h: rr(i.h),
            s: pt(i.s, 0, 100),
            l: pt(i.l, 0, 100),
            a: pt(i.a)
        };
    }, Js = function(i) {
        return {
            h: nt(i.h),
            s: nt(i.s),
            l: nt(i.l),
            a: nt(i.a, 3)
        };
    }, ti = function(i) {
        return or((e = (t = i).s, {
            h: t.h,
            s: (e *= ((s = t.l) < 50 ? s : 100 - s) / 100) > 0 ? 2 * e / (s + e) * 100 : 0,
            v: s + e,
            a: t.a
        }));
        var t, e, s;
    }, ae = function(i) {
        return {
            h: (t = nr(i)).h,
            s: (r = (200 - (e = t.s)) * (s = t.v) / 100) > 0 && r < 200 ? e * s / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
            l: r / 2,
            a: t.a
        };
        var t, e, s, r;
    }, An = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Tn = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, kn = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, In = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, ds = {
        string: [
            [
                function(i) {
                    var t = Pn.exec(i);
                    return t ? (i = t[1]).length <= 4 ? {
                        r: parseInt(i[0] + i[0], 16),
                        g: parseInt(i[1] + i[1], 16),
                        b: parseInt(i[2] + i[2], 16),
                        a: i.length === 4 ? nt(parseInt(i[3] + i[3], 16) / 255, 2) : 1
                    } : i.length === 6 || i.length === 8 ? {
                        r: parseInt(i.substr(0, 2), 16),
                        g: parseInt(i.substr(2, 2), 16),
                        b: parseInt(i.substr(4, 2), 16),
                        a: i.length === 8 ? nt(parseInt(i.substr(6, 2), 16) / 255, 2) : 1
                    } : null : null;
                },
                "hex"
            ],
            [
                function(i) {
                    var t = kn.exec(i) || In.exec(i);
                    return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Zs({
                        r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                        g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                        b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                        a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
                    }) : null;
                },
                "rgb"
            ],
            [
                function(i) {
                    var t = An.exec(i) || Tn.exec(i);
                    if (!t) return null;
                    var e, s, r = Qs({
                        h: (e = t[1], s = t[2], s === void 0 && (s = "deg"), Number(e) * (Mn[s] || 1)),
                        s: Number(t[3]),
                        l: Number(t[4]),
                        a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
                    });
                    return ti(r);
                },
                "hsl"
            ]
        ],
        object: [
            [
                function(i) {
                    var t = i.r, e = i.g, s = i.b, r = i.a, n = r === void 0 ? 1 : r;
                    return Et(t) && Et(e) && Et(s) ? Zs({
                        r: Number(t),
                        g: Number(e),
                        b: Number(s),
                        a: Number(n)
                    }) : null;
                },
                "rgb"
            ],
            [
                function(i) {
                    var t = i.h, e = i.s, s = i.l, r = i.a, n = r === void 0 ? 1 : r;
                    if (!Et(t) || !Et(e) || !Et(s)) return null;
                    var o = Qs({
                        h: Number(t),
                        s: Number(e),
                        l: Number(s),
                        a: Number(n)
                    });
                    return ti(o);
                },
                "hsl"
            ],
            [
                function(i) {
                    var t = i.h, e = i.s, s = i.v, r = i.a, n = r === void 0 ? 1 : r;
                    if (!Et(t) || !Et(e) || !Et(s)) return null;
                    var o = function(h) {
                        return {
                            h: rr(h.h),
                            s: pt(h.s, 0, 100),
                            v: pt(h.v, 0, 100),
                            a: pt(h.a)
                        };
                    }({
                        h: Number(t),
                        s: Number(e),
                        v: Number(s),
                        a: Number(n)
                    });
                    return or(o);
                },
                "hsv"
            ]
        ]
    }, ei = function(i, t) {
        for(var e = 0; e < t.length; e++){
            var s = t[e][0](i);
            if (s) return [
                s,
                t[e][1]
            ];
        }
        return [
            null,
            void 0
        ];
    }, En = function(i) {
        return typeof i == "string" ? ei(i.trim(), ds.string) : typeof i == "object" && i !== null ? ei(i, ds.object) : [
            null,
            void 0
        ];
    }, Ue = function(i, t) {
        var e = ae(i);
        return {
            h: e.h,
            s: pt(e.s + 100 * t, 0, 100),
            l: e.l,
            a: e.a
        };
    }, Ye = function(i) {
        return (299 * i.r + 587 * i.g + 114 * i.b) / 1e3 / 255;
    }, si = function(i, t) {
        var e = ae(i);
        return {
            h: e.h,
            s: e.s,
            l: pt(e.l + 100 * t, 0, 100),
            a: e.a
        };
    }, fs = function() {
        function i(t) {
            this.parsed = En(t)[0], this.rgba = this.parsed || {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            };
        }
        return i.prototype.isValid = function() {
            return this.parsed !== null;
        }, i.prototype.brightness = function() {
            return nt(Ye(this.rgba), 2);
        }, i.prototype.isDark = function() {
            return Ye(this.rgba) < .5;
        }, i.prototype.isLight = function() {
            return Ye(this.rgba) >= .5;
        }, i.prototype.toHex = function() {
            return t = De(this.rgba), e = t.r, s = t.g, r = t.b, o = (n = t.a) < 1 ? ye(nt(255 * n)) : "", "#" + ye(e) + ye(s) + ye(r) + o;
            var t, e, s, r, n, o;
        }, i.prototype.toRgb = function() {
            return De(this.rgba);
        }, i.prototype.toRgbString = function() {
            return t = De(this.rgba), e = t.r, s = t.g, r = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + s + ", " + r + ", " + n + ")" : "rgb(" + e + ", " + s + ", " + r + ")";
            var t, e, s, r, n;
        }, i.prototype.toHsl = function() {
            return Js(ae(this.rgba));
        }, i.prototype.toHslString = function() {
            return t = Js(ae(this.rgba)), e = t.h, s = t.s, r = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + s + "%, " + r + "%, " + n + ")" : "hsl(" + e + ", " + s + "%, " + r + "%)";
            var t, e, s, r, n;
        }, i.prototype.toHsv = function() {
            return t = nr(this.rgba), {
                h: nt(t.h),
                s: nt(t.s),
                v: nt(t.v),
                a: nt(t.a, 3)
            };
            var t;
        }, i.prototype.invert = function() {
            return St({
                r: 255 - (t = this.rgba).r,
                g: 255 - t.g,
                b: 255 - t.b,
                a: t.a
            });
            var t;
        }, i.prototype.saturate = function(t) {
            return t === void 0 && (t = .1), St(Ue(this.rgba, t));
        }, i.prototype.desaturate = function(t) {
            return t === void 0 && (t = .1), St(Ue(this.rgba, -t));
        }, i.prototype.grayscale = function() {
            return St(Ue(this.rgba, -1));
        }, i.prototype.lighten = function(t) {
            return t === void 0 && (t = .1), St(si(this.rgba, t));
        }, i.prototype.darken = function(t) {
            return t === void 0 && (t = .1), St(si(this.rgba, -t));
        }, i.prototype.rotate = function(t) {
            return t === void 0 && (t = 15), this.hue(this.hue() + t);
        }, i.prototype.alpha = function(t) {
            return typeof t == "number" ? St({
                r: (e = this.rgba).r,
                g: e.g,
                b: e.b,
                a: t
            }) : nt(this.rgba.a, 3);
            var e;
        }, i.prototype.hue = function(t) {
            var e = ae(this.rgba);
            return typeof t == "number" ? St({
                h: t,
                s: e.s,
                l: e.l,
                a: e.a
            }) : nt(e.h);
        }, i.prototype.isEqual = function(t) {
            return this.toHex() === St(t).toHex();
        }, i;
    }(), St = function(i) {
        return i instanceof fs ? i : new fs(i);
    }, ii = [], Rn = function(i) {
        i.forEach(function(t) {
            ii.indexOf(t) < 0 && (t(fs, ds), ii.push(t));
        });
    };
    function Bn(i, t) {
        var e = {
            white: "#ffffff",
            bisque: "#ffe4c4",
            blue: "#0000ff",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            azure: "#f0ffff",
            whitesmoke: "#f5f5f5",
            papayawhip: "#ffefd5",
            plum: "#dda0dd",
            blanchedalmond: "#ffebcd",
            black: "#000000",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gainsboro: "#dcdcdc",
            cornsilk: "#fff8dc",
            cornflowerblue: "#6495ed",
            burlywood: "#deb887",
            aquamarine: "#7fffd4",
            beige: "#f5f5dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkkhaki: "#bdb76b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            peachpuff: "#ffdab9",
            darkmagenta: "#8b008b",
            darkred: "#8b0000",
            darkorchid: "#9932cc",
            darkorange: "#ff8c00",
            darkslateblue: "#483d8b",
            gray: "#808080",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            wheat: "#f5deb3",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            ghostwhite: "#f8f8ff",
            darkviolet: "#9400d3",
            magenta: "#ff00ff",
            green: "#008000",
            dodgerblue: "#1e90ff",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            blueviolet: "#8a2be2",
            forestgreen: "#228b22",
            lawngreen: "#7cfc00",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            fuchsia: "#ff00ff",
            brown: "#a52a2a",
            maroon: "#800000",
            mediumblue: "#0000cd",
            lightcoral: "#f08080",
            darkturquoise: "#00ced1",
            lightcyan: "#e0ffff",
            ivory: "#fffff0",
            lightyellow: "#ffffe0",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            linen: "#faf0e6",
            mediumaquamarine: "#66cdaa",
            lemonchiffon: "#fffacd",
            lime: "#00ff00",
            khaki: "#f0e68c",
            mediumseagreen: "#3cb371",
            limegreen: "#32cd32",
            mediumspringgreen: "#00fa9a",
            lightskyblue: "#87cefa",
            lightblue: "#add8e6",
            midnightblue: "#191970",
            lightpink: "#ffb6c1",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            mintcream: "#f5fffa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            navajowhite: "#ffdead",
            navy: "#000080",
            mediumvioletred: "#c71585",
            powderblue: "#b0e0e6",
            palegoldenrod: "#eee8aa",
            oldlace: "#fdf5e6",
            paleturquoise: "#afeeee",
            mediumturquoise: "#48d1cc",
            mediumorchid: "#ba55d3",
            rebeccapurple: "#663399",
            lightsteelblue: "#b0c4de",
            mediumslateblue: "#7b68ee",
            thistle: "#d8bfd8",
            tan: "#d2b48c",
            orchid: "#da70d6",
            mediumpurple: "#9370db",
            purple: "#800080",
            pink: "#ffc0cb",
            skyblue: "#87ceeb",
            springgreen: "#00ff7f",
            palegreen: "#98fb98",
            red: "#ff0000",
            yellow: "#ffff00",
            slateblue: "#6a5acd",
            lavenderblush: "#fff0f5",
            peru: "#cd853f",
            palevioletred: "#db7093",
            violet: "#ee82ee",
            teal: "#008080",
            slategray: "#708090",
            slategrey: "#708090",
            aliceblue: "#f0f8ff",
            darkseagreen: "#8fbc8f",
            darkolivegreen: "#556b2f",
            greenyellow: "#adff2f",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            tomato: "#ff6347",
            silver: "#c0c0c0",
            sienna: "#a0522d",
            lavender: "#e6e6fa",
            lightgreen: "#90ee90",
            orange: "#ffa500",
            orangered: "#ff4500",
            steelblue: "#4682b4",
            royalblue: "#4169e1",
            turquoise: "#40e0d0",
            yellowgreen: "#9acd32",
            salmon: "#fa8072",
            saddlebrown: "#8b4513",
            sandybrown: "#f4a460",
            rosybrown: "#bc8f8f",
            darksalmon: "#e9967a",
            lightgoldenrodyellow: "#fafad2",
            snow: "#fffafa",
            lightgrey: "#d3d3d3",
            lightgray: "#d3d3d3",
            dimgray: "#696969",
            dimgrey: "#696969",
            olivedrab: "#6b8e23",
            olive: "#808000"
        }, s = {};
        for(var r in e)s[e[r]] = r;
        var n = {};
        i.prototype.toName = function(o) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
            var h, a, l = s[this.toHex()];
            if (l) return l;
            if (o?.closest) {
                var c = this.toRgb(), u = 1 / 0, p = "black";
                if (!n.length) for(var d in e)n[d] = new i(e[d]).toRgb();
                for(var x in e){
                    var y = (h = c, a = n[x], Math.pow(h.r - a.r, 2) + Math.pow(h.g - a.g, 2) + Math.pow(h.b - a.b, 2));
                    y < u && (u = y, p = x);
                }
                return p;
            }
        }, t.string.push([
            function(o) {
                var h = o.toLowerCase(), a = h === "transparent" ? "#0000" : e[h];
                return a ? new i(a).toRgb() : null;
            },
            "name"
        ]);
    }
    Rn([
        Bn
    ]);
    const Qt = class ne {
        constructor(t = 16777215){
            this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t;
        }
        get red() {
            return this._components[0];
        }
        get green() {
            return this._components[1];
        }
        get blue() {
            return this._components[2];
        }
        get alpha() {
            return this._components[3];
        }
        setValue(t) {
            return this.value = t, this;
        }
        set value(t) {
            if (t instanceof ne) this._value = this._cloneSource(t._value), this._int = t._int, this._components.set(t._components);
            else {
                if (t === null) throw new Error("Cannot set Color#value to null");
                (this._value === null || !this._isSourceEqual(this._value, t)) && (this._value = this._cloneSource(t), this._normalize(this._value));
            }
        }
        get value() {
            return this._value;
        }
        _cloneSource(t) {
            return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? {
                ...t
            } : t;
        }
        _isSourceEqual(t, e) {
            const s = typeof t;
            if (s !== typeof e) return !1;
            if (s === "number" || s === "string" || t instanceof Number) return t === e;
            if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return t.length !== e.length ? !1 : t.every((n, o)=>n === e[o]);
            if (t !== null && e !== null) {
                const n = Object.keys(t), o = Object.keys(e);
                return n.length !== o.length ? !1 : n.every((h)=>t[h] === e[h]);
            }
            return t === e;
        }
        toRgba() {
            const [t, e, s, r] = this._components;
            return {
                r: t,
                g: e,
                b: s,
                a: r
            };
        }
        toRgb() {
            const [t, e, s] = this._components;
            return {
                r: t,
                g: e,
                b: s
            };
        }
        toRgbaString() {
            const [t, e, s] = this.toUint8RgbArray();
            return `rgba(${t},${e},${s},${this.alpha})`;
        }
        toUint8RgbArray(t) {
            const [e, s, r] = this._components;
            return this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb), t[0] = Math.round(e * 255), t[1] = Math.round(s * 255), t[2] = Math.round(r * 255), t;
        }
        toArray(t) {
            this._arrayRgba || (this._arrayRgba = []), t || (t = this._arrayRgba);
            const [e, s, r, n] = this._components;
            return t[0] = e, t[1] = s, t[2] = r, t[3] = n, t;
        }
        toRgbArray(t) {
            this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb);
            const [e, s, r] = this._components;
            return t[0] = e, t[1] = s, t[2] = r, t;
        }
        toNumber() {
            return this._int;
        }
        toBgrNumber() {
            const [t, e, s] = this.toUint8RgbArray();
            return (s << 16) + (e << 8) + t;
        }
        toLittleEndianNumber() {
            const t = this._int;
            return (t >> 16) + (t & 65280) + ((t & 255) << 16);
        }
        multiply(t) {
            const [e, s, r, n] = ne._temp.setValue(t)._components;
            return this._components[0] *= e, this._components[1] *= s, this._components[2] *= r, this._components[3] *= n, this._refreshInt(), this._value = null, this;
        }
        premultiply(t, e = !0) {
            return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this._refreshInt(), this._value = null, this;
        }
        toPremultiplied(t, e = !0) {
            if (t === 1) return (255 << 24) + this._int;
            if (t === 0) return e ? 0 : this._int;
            let s = this._int >> 16 & 255, r = this._int >> 8 & 255, n = this._int & 255;
            return e && (s = s * t + .5 | 0, r = r * t + .5 | 0, n = n * t + .5 | 0), (t * 255 << 24) + (s << 16) + (r << 8) + n;
        }
        toHex() {
            const t = this._int.toString(16);
            return `#${"000000".substring(0, 6 - t.length) + t}`;
        }
        toHexa() {
            const e = Math.round(this._components[3] * 255).toString(16);
            return this.toHex() + "00".substring(0, 2 - e.length) + e;
        }
        setAlpha(t) {
            return this._components[3] = this._clamp(t), this;
        }
        _normalize(t) {
            let e, s, r, n;
            if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
                const o = t;
                e = (o >> 16 & 255) / 255, s = (o >> 8 & 255) / 255, r = (o & 255) / 255, n = 1;
            } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4) t = this._clamp(t), [e, s, r, n = 1] = t;
            else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4) t = this._clamp(t, 0, 255), [e, s, r, n = 255] = t, e /= 255, s /= 255, r /= 255, n /= 255;
            else if (typeof t == "string" || typeof t == "object") {
                if (typeof t == "string") {
                    const h = ne.HEX_PATTERN.exec(t);
                    h && (t = `#${h[2]}`);
                }
                const o = St(t);
                o.isValid() && ({ r: e, g: s, b: r, a: n } = o.rgba, e /= 255, s /= 255, r /= 255);
            }
            if (e !== void 0) this._components[0] = e, this._components[1] = s, this._components[2] = r, this._components[3] = n, this._refreshInt();
            else throw new Error(`Unable to convert color ${t}`);
        }
        _refreshInt() {
            this._clamp(this._components);
            const [t, e, s] = this._components;
            this._int = (t * 255 << 16) + (e * 255 << 8) + (s * 255 | 0);
        }
        _clamp(t, e = 0, s = 1) {
            return typeof t == "number" ? Math.min(Math.max(t, e), s) : (t.forEach((r, n)=>{
                t[n] = Math.min(Math.max(r, e), s);
            }), t);
        }
        static isColorLike(t) {
            return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof ne || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0;
        }
    };
    Qt.shared = new Qt;
    Qt._temp = new Qt;
    Qt.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
    ot = Qt;
    const Wn = {
        cullArea: null,
        cullable: !1,
        cullableChildren: !0
    };
    class Ts {
        constructor(t, e){
            this._pool = [], this._count = 0, this._index = 0, this._classType = t, e && this.prepopulate(e);
        }
        prepopulate(t) {
            for(let e = 0; e < t; e++)this._pool[this._index++] = new this._classType;
            this._count += t;
        }
        get(t) {
            let e;
            return this._index > 0 ? e = this._pool[--this._index] : e = new this._classType, e.init?.(t), e;
        }
        return(t) {
            t.reset?.(), this._pool[this._index++] = t;
        }
        get totalSize() {
            return this._count;
        }
        get totalFree() {
            return this._index;
        }
        get totalUsed() {
            return this._count - this._index;
        }
        clear() {
            this._pool.length = 0, this._index = 0;
        }
    }
    class Hn {
        constructor(){
            this._poolsByClass = new Map;
        }
        prepopulate(t, e) {
            this.getPool(t).prepopulate(e);
        }
        get(t, e) {
            return this.getPool(t).get(e);
        }
        return(t) {
            this.getPool(t.constructor).return(t);
        }
        getPool(t) {
            return this._poolsByClass.has(t) || this._poolsByClass.set(t, new Ts(t)), this._poolsByClass.get(t);
        }
        stats() {
            const t = {};
            return this._poolsByClass.forEach((e)=>{
                const s = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
                t[s] = {
                    free: e.totalFree,
                    used: e.totalUsed,
                    size: e.totalSize
                };
            }), t;
        }
    }
    let Fn;
    Rt = new Hn;
    Fn = {
        get isCachedAsTexture () {
            return !!this.renderGroup?.isCachedAsTexture;
        },
        cacheAsTexture (i) {
            typeof i == "boolean" && i === !1 ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(i === !0 ? {} : i));
        },
        updateCacheTexture () {
            this.renderGroup?.updateCacheTexture();
        },
        get cacheAsBitmap () {
            return this.isCachedAsTexture;
        },
        set cacheAsBitmap (i){
            K("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(i);
        }
    };
    Gn = function(i, t, e) {
        const s = i.length;
        let r;
        if (t >= s || e === 0) return;
        e = t + e > s ? s - t : e;
        const n = s - e;
        for(r = t; r < n; ++r)i[r] = i[r + e];
        i.length = n;
    };
    const zn = {
        allowChildren: !0,
        removeChildren (i = 0, t) {
            const e = t ?? this.children.length, s = e - i, r = [];
            if (s > 0 && s <= e) {
                for(let o = e - 1; o >= i; o--){
                    const h = this.children[o];
                    h && (r.push(h), h.parent = null);
                }
                Gn(this.children, i, e);
                const n = this.renderGroup || this.parentRenderGroup;
                n && n.removeChildren(r);
                for(let o = 0; o < r.length; ++o){
                    const h = r[o];
                    h.parentRenderLayer?.detach(h), this.emit("childRemoved", h, this, o), r[o].emit("removed", this);
                }
                return r.length > 0 && this._didViewChangeTick++, r;
            } else if (s === 0 && this.children.length === 0) return r;
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
        },
        removeChildAt (i) {
            const t = this.getChildAt(i);
            return this.removeChild(t);
        },
        getChildAt (i) {
            if (i < 0 || i >= this.children.length) throw new Error(`getChildAt: Index (${i}) does not exist.`);
            return this.children[i];
        },
        setChildIndex (i, t) {
            if (t < 0 || t >= this.children.length) throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
            this.getChildIndex(i), this.addChildAt(i, t);
        },
        getChildIndex (i) {
            const t = this.children.indexOf(i);
            if (t === -1) throw new Error("The supplied Container must be a child of the caller");
            return t;
        },
        addChildAt (i, t) {
            this.allowChildren || K(st, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
            const { children: e } = this;
            if (t < 0 || t > e.length) throw new Error(`${i}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);
            if (i.parent) {
                const r = i.parent.children.indexOf(i);
                if (i.parent === this && r === t) return i;
                r !== -1 && i.parent.children.splice(r, 1);
            }
            t === e.length ? e.push(i) : e.splice(t, 0, i), i.parent = this, i.didChange = !0, i._updateFlags = 15;
            const s = this.renderGroup || this.parentRenderGroup;
            return s && s.addChild(i), this.sortableChildren && (this.sortDirty = !0), this.emit("childAdded", i, this, t), i.emit("added", this), i;
        },
        swapChildren (i, t) {
            if (i === t) return;
            const e = this.getChildIndex(i), s = this.getChildIndex(t);
            this.children[e] = t, this.children[s] = i;
            const r = this.renderGroup || this.parentRenderGroup;
            r && (r.structureDidChange = !0), this._didContainerChangeTick++;
        },
        removeFromParent () {
            this.parent?.removeChild(this);
        },
        reparentChild (...i) {
            return i.length === 1 ? this.reparentChildAt(i[0], this.children.length) : (i.forEach((t)=>this.reparentChildAt(t, this.children.length)), i[0]);
        },
        reparentChildAt (i, t) {
            if (i.parent === this) return this.setChildIndex(i, t), i;
            const e = i.worldTransform.clone();
            i.removeFromParent(), this.addChildAt(i, t);
            const s = this.worldTransform.clone();
            return s.invert(), e.prepend(s), i.setFromMatrix(e), i;
        }
    }, Ln = {
        collectRenderables (i, t, e) {
            this.parentRenderLayer && this.parentRenderLayer !== e || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(i, t, e) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, i) : this.collectRenderablesWithEffects(i, t, e));
        },
        collectRenderablesSimple (i, t, e) {
            const s = this.children, r = s.length;
            for(let n = 0; n < r; n++)s[n].collectRenderables(i, t, e);
        },
        collectRenderablesWithEffects (i, t, e) {
            const { renderPipes: s } = t;
            for(let r = 0; r < this.effects.length; r++){
                const n = this.effects[r];
                s[n.pipe].push(n, this, i);
            }
            this.collectRenderablesSimple(i, t, e);
            for(let r = this.effects.length - 1; r >= 0; r--){
                const n = this.effects[r];
                s[n.pipe].pop(n, this, i);
            }
        }
    };
    ri = class {
        constructor(){
            this.pipe = "filter", this.priority = 1;
        }
        destroy() {
            for(let t = 0; t < this.filters.length; t++)this.filters[t].destroy();
            this.filters = null, this.filterArea = null;
        }
    };
    class On {
        constructor(){
            this._effectClasses = [], this._tests = [], this._initialized = !1;
        }
        init() {
            this._initialized || (this._initialized = !0, this._effectClasses.forEach((t)=>{
                this.add({
                    test: t.test,
                    maskClass: t
                });
            }));
        }
        add(t) {
            this._tests.push(t);
        }
        getMaskEffect(t) {
            this._initialized || this.init();
            for(let e = 0; e < this._tests.length; e++){
                const s = this._tests[e];
                if (s.test(t)) return Rt.get(s.maskClass, t);
            }
            return t;
        }
        returnMaskEffect(t) {
            Rt.return(t);
        }
    }
    const ps = new On;
    Pt.handleByList(Z.MaskEffect, ps._effectClasses);
    const Dn = {
        _maskEffect: null,
        _maskOptions: {
            inverse: !1
        },
        _filterEffect: null,
        effects: [],
        _markStructureAsChanged () {
            const i = this.renderGroup || this.parentRenderGroup;
            i && (i.structureDidChange = !0);
        },
        addEffect (i) {
            this.effects.indexOf(i) === -1 && (this.effects.push(i), this.effects.sort((e, s)=>e.priority - s.priority), this._markStructureAsChanged(), this._updateIsSimple());
        },
        removeEffect (i) {
            const t = this.effects.indexOf(i);
            t !== -1 && (this.effects.splice(t, 1), this._markStructureAsChanged(), this._updateIsSimple());
        },
        set mask (i){
            const t = this._maskEffect;
            t?.mask !== i && (t && (this.removeEffect(t), ps.returnMaskEffect(t), this._maskEffect = null), i != null && (this._maskEffect = ps.getMaskEffect(i), this.addEffect(this._maskEffect)));
        },
        setMask (i) {
            this._maskOptions = {
                ...this._maskOptions,
                ...i
            }, i.mask && (this.mask = i.mask), this._markStructureAsChanged();
        },
        get mask () {
            return this._maskEffect?.mask;
        },
        set filters (i){
            !Array.isArray(i) && i && (i = [
                i
            ]);
            const t = this._filterEffect || (this._filterEffect = new ri);
            i = i;
            const e = i?.length > 0, s = t.filters?.length > 0, r = e !== s;
            i = Array.isArray(i) ? i.slice(0) : i, t.filters = Object.freeze(i), r && (e ? this.addEffect(t) : (this.removeEffect(t), t.filters = i ?? null));
        },
        get filters () {
            return this._filterEffect?.filters;
        },
        set filterArea (i){
            this._filterEffect || (this._filterEffect = new ri), this._filterEffect.filterArea = i;
        },
        get filterArea () {
            return this._filterEffect?.filterArea;
        }
    }, Un = {
        label: null,
        get name () {
            return K(st, "Container.name property has been removed, use Container.label instead"), this.label;
        },
        set name (i){
            K(st, "Container.name property has been removed, use Container.label instead"), this.label = i;
        },
        getChildByName (i, t = !1) {
            return this.getChildByLabel(i, t);
        },
        getChildByLabel (i, t = !1) {
            const e = this.children;
            for(let s = 0; s < e.length; s++){
                const r = e[s];
                if (r.label === i || i instanceof RegExp && i.test(r.label)) return r;
            }
            if (t) for(let s = 0; s < e.length; s++){
                const n = e[s].getChildByLabel(i, !0);
                if (n) return n;
            }
            return null;
        },
        getChildrenByLabel (i, t = !1, e = []) {
            const s = this.children;
            for(let r = 0; r < s.length; r++){
                const n = s[r];
                (n.label === i || i instanceof RegExp && i.test(n.label)) && e.push(n);
            }
            if (t) for(let r = 0; r < s.length; r++)s[r].getChildrenByLabel(i, !0, e);
            return e;
        }
    }, ht = new Ts(U), Bt = new Ts(_t), Yn = new U, Xn = {
        getFastGlobalBounds (i, t) {
            t || (t = new _t), t.clear(), this._getGlobalBoundsRecursive(!!i, t, this.parentRenderLayer), t.isValid || t.set(0, 0, 0, 0);
            const e = this.renderGroup || this.parentRenderGroup;
            return t.applyMatrix(e.worldTransform), t;
        },
        _getGlobalBoundsRecursive (i, t, e) {
            let s = t;
            if (i && this.parentRenderLayer && this.parentRenderLayer !== e || this.localDisplayStatus !== 7 || !this.measurable) return;
            const r = !!this.effects.length;
            if ((this.renderGroup || r) && (s = Bt.get().clear()), this.boundsArea) t.addRect(this.boundsArea, this.worldTransform);
            else {
                if (this.renderPipeId) {
                    const o = this.bounds;
                    s.addFrame(o.minX, o.minY, o.maxX, o.maxY, this.groupTransform);
                }
                const n = this.children;
                for(let o = 0; o < n.length; o++)n[o]._getGlobalBoundsRecursive(i, s, e);
            }
            if (r) {
                let n = !1;
                const o = this.renderGroup || this.parentRenderGroup;
                for(let h = 0; h < this.effects.length; h++)this.effects[h].addBounds && (n || (n = !0, s.applyMatrix(o.worldTransform)), this.effects[h].addBounds(s, !0));
                n && (s.applyMatrix(o.worldTransform.copyTo(Yn).invert()), t.addBounds(s, this.relativeGroupTransform)), t.addBounds(s), Bt.return(s);
            } else this.renderGroup && (t.addBounds(s, this.relativeGroupTransform), Bt.return(s));
        }
    };
    hr = function(i, t, e) {
        e.clear();
        let s, r;
        return i.parent ? t ? s = i.parent.worldTransform : (r = ht.get().identity(), s = ks(i, r)) : s = U.IDENTITY, ar(i, e, s, t), r && ht.return(r), e.isValid || e.set(0, 0, 0, 0), e;
    };
    function ar(i, t, e, s) {
        if (!i.visible || !i.measurable) return;
        let r;
        s ? r = i.worldTransform : (i.updateLocalTransform(), r = ht.get(), r.appendFrom(i.localTransform, e));
        const n = t, o = !!i.effects.length;
        if (o && (t = Bt.get().clear()), i.boundsArea) t.addRect(i.boundsArea, r);
        else {
            i.bounds && (t.matrix = r, t.addBounds(i.bounds));
            for(let h = 0; h < i.children.length; h++)ar(i.children[h], t, r, s);
        }
        if (o) {
            for(let h = 0; h < i.effects.length; h++)i.effects[h].addBounds?.(t);
            n.addBounds(t, U.IDENTITY), Bt.return(t);
        }
        s || ht.return(r);
    }
    function ks(i, t) {
        const e = i.parent;
        return e && (ks(e, t), e.updateLocalTransform(), t.append(e.localTransform)), t;
    }
    function lr(i, t) {
        if (i === 16777215 || !t) return t;
        if (t === 16777215 || !i) return i;
        const e = i >> 16 & 255, s = i >> 8 & 255, r = i & 255, n = t >> 16 & 255, o = t >> 8 & 255, h = t & 255, a = e * n / 255 | 0, l = s * o / 255 | 0, c = r * h / 255 | 0;
        return (a << 16) + (l << 8) + c;
    }
    const ni = 16777215;
    oi = function(i, t) {
        return i === ni ? t : t === ni ? i : lr(i, t);
    };
    function Ae(i) {
        return ((i & 255) << 16) + (i & 65280) + (i >> 16 & 255);
    }
    const Vn = {
        getGlobalAlpha (i) {
            if (i) return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha;
            let t = this.alpha, e = this.parent;
            for(; e;)t *= e.alpha, e = e.parent;
            return t;
        },
        getGlobalTransform (i, t) {
            if (t) return i.copyFrom(this.worldTransform);
            this.updateLocalTransform();
            const e = ks(this, ht.get().identity());
            return i.appendFrom(this.localTransform, e), ht.return(e), i;
        },
        getGlobalTint (i) {
            if (i) return this.renderGroup ? Ae(this.renderGroup.worldColor) : this.parentRenderGroup ? Ae(oi(this.localColor, this.parentRenderGroup.worldColor)) : this.tint;
            let t = this.localColor, e = this.parent;
            for(; e;)t = oi(t, e.localColor), e = e.parent;
            return Ae(t);
        }
    };
    let Xe = 0;
    const hi = 500;
    ft = function(...i) {
        Xe !== hi && (Xe++, Xe === hi ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...i));
    };
    cr = function(i, t, e) {
        return t.clear(), e || (e = U.IDENTITY), ur(i, t, e, i, !0), t.isValid || t.set(0, 0, 0, 0), t;
    };
    function ur(i, t, e, s, r) {
        let n;
        if (r) n = ht.get(), n = e.copyTo(n);
        else {
            if (!i.visible || !i.measurable) return;
            i.updateLocalTransform();
            const a = i.localTransform;
            n = ht.get(), n.appendFrom(a, e);
        }
        const o = t, h = !!i.effects.length;
        if (h && (t = Bt.get().clear()), i.boundsArea) t.addRect(i.boundsArea, n);
        else {
            i.renderPipeId && (t.matrix = n, t.addBounds(i.bounds));
            const a = i.children;
            for(let l = 0; l < a.length; l++)ur(a[l], t, n, s, !1);
        }
        if (h) {
            for(let a = 0; a < i.effects.length; a++)i.effects[a].addLocalBounds?.(t, s);
            o.addBounds(t, U.IDENTITY), Bt.return(t);
        }
        ht.return(n);
    }
    function dr(i, t) {
        const e = i.children;
        for(let s = 0; s < e.length; s++){
            const r = e[s], n = r.uid, o = (r._didViewChangeTick & 65535) << 16 | r._didContainerChangeTick & 65535, h = t.index;
            (t.data[h] !== n || t.data[h + 1] !== o) && (t.data[t.index] = n, t.data[t.index + 1] = o, t.didChange = !0), t.index = h + 2, r.children.length && dr(r, t);
        }
        return t.didChange;
    }
    const Nn = new U, $n = {
        _localBoundsCacheId: -1,
        _localBoundsCacheData: null,
        _setWidth (i, t) {
            const e = Math.sign(this.scale.x) || 1;
            t !== 0 ? this.scale.x = i / t * e : this.scale.x = e;
        },
        _setHeight (i, t) {
            const e = Math.sign(this.scale.y) || 1;
            t !== 0 ? this.scale.y = i / t * e : this.scale.y = e;
        },
        getLocalBounds () {
            this._localBoundsCacheData || (this._localBoundsCacheData = {
                data: [],
                index: 1,
                didChange: !1,
                localBounds: new _t
            });
            const i = this._localBoundsCacheData;
            return i.index = 1, i.didChange = !1, i.data[0] !== this._didViewChangeTick && (i.didChange = !0, i.data[0] = this._didViewChangeTick), dr(this, i), i.didChange && cr(this, i.localBounds, Nn), i.localBounds;
        },
        getBounds (i, t) {
            return hr(this, i, t || new _t);
        }
    }, jn = {
        _onRender: null,
        set onRender (i){
            const t = this.renderGroup || this.parentRenderGroup;
            if (!i) {
                this._onRender && t?.removeOnRender(this), this._onRender = null;
                return;
            }
            this._onRender || t?.addOnRender(this), this._onRender = i;
        },
        get onRender () {
            return this._onRender;
        }
    }, qn = {
        _zIndex: 0,
        sortDirty: !1,
        sortableChildren: !1,
        get zIndex () {
            return this._zIndex;
        },
        set zIndex (i){
            this._zIndex !== i && (this._zIndex = i, this.depthOfChildModified());
        },
        depthOfChildModified () {
            this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0);
        },
        sortChildren () {
            this.sortDirty && (this.sortDirty = !1, this.children.sort(Kn));
        }
    };
    function Kn(i, t) {
        return i._zIndex - t._zIndex;
    }
    const Zn = {
        getGlobalPosition (i = new O, t = !1) {
            return this.parent ? this.parent.toGlobal(this._position, i, t) : (i.x = this._position.x, i.y = this._position.y), i;
        },
        toGlobal (i, t, e = !1) {
            const s = this.getGlobalTransform(ht.get(), e);
            return t = s.apply(i, t), ht.return(s), t;
        },
        toLocal (i, t, e, s) {
            t && (i = t.toGlobal(i, e, s));
            const r = this.getGlobalTransform(ht.get(), s);
            return e = r.applyInverse(i, e), ht.return(r), e;
        }
    };
    class fr {
        constructor(){
            this.uid = it("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0;
        }
        reset() {
            this.instructionSize = 0;
        }
        add(t) {
            this.instructions[this.instructionSize++] = t;
        }
        log() {
            this.instructions.length = this.instructionSize, console.table(this.instructions, [
                "type",
                "action"
            ]);
        }
    }
    let Qn = 0;
    class Jn {
        constructor(t){
            this._poolKeyHash = Object.create(null), this._texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1;
        }
        createTexture(t, e, s) {
            const r = new Tt({
                ...this.textureOptions,
                width: t,
                height: e,
                resolution: 1,
                antialias: s,
                autoGarbageCollect: !1
            });
            return new $({
                source: r,
                label: `texturePool_${Qn++}`
            });
        }
        getOptimalTexture(t, e, s = 1, r) {
            let n = Math.ceil(t * s - 1e-6), o = Math.ceil(e * s - 1e-6);
            n = Ns(n), o = Ns(o);
            const h = (n << 17) + (o << 1) + (r ? 1 : 0);
            this._texturePool[h] || (this._texturePool[h] = []);
            let a = this._texturePool[h].pop();
            return a || (a = this.createTexture(n, o, r)), a.source._resolution = s, a.source.width = n / s, a.source.height = o / s, a.source.pixelWidth = n, a.source.pixelHeight = o, a.frame.x = 0, a.frame.y = 0, a.frame.width = t, a.frame.height = e, a.updateUvs(), this._poolKeyHash[a.uid] = h, a;
        }
        getSameSizeTexture(t, e = !1) {
            const s = t.source;
            return this.getOptimalTexture(t.width, t.height, s._resolution, e);
        }
        returnTexture(t) {
            const e = this._poolKeyHash[t.uid];
            this._texturePool[e].push(t);
        }
        clear(t) {
            if (t = t !== !1, t) for(const e in this._texturePool){
                const s = this._texturePool[e];
                if (s) for(let r = 0; r < s.length; r++)s[r].destroy(!0);
            }
            this._texturePool = {};
        }
    }
    to = new Jn;
    class eo {
        constructor(){
            this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new U, this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = {
                list: [],
                index: 0
            }, this.structureDidChange = !0, this.instructionSet = new fr, this._onRenderContainers = [], this.textureNeedsUpdate = !0, this.isCachedAsTexture = !1, this._matrixDirty = 7;
        }
        init(t) {
            this.root = t, t._onRender && this.addOnRender(t), t.didChange = !0;
            const e = t.children;
            for(let s = 0; s < e.length; s++){
                const r = e[s];
                r._updateFlags = 15, this.addChild(r);
            }
        }
        enableCacheAsTexture(t = {}) {
            this.textureOptions = t, this.isCachedAsTexture = !0, this.textureNeedsUpdate = !0;
        }
        disableCacheAsTexture() {
            this.isCachedAsTexture = !1, this.texture && (to.returnTexture(this.texture), this.texture = null);
        }
        updateCacheTexture() {
            this.textureNeedsUpdate = !0;
        }
        reset() {
            this.renderGroupChildren.length = 0;
            for(const t in this.childrenToUpdate){
                const e = this.childrenToUpdate[t];
                e.list.fill(null), e.index = 0;
            }
            this.childrenRenderablesToUpdate.index = 0, this.childrenRenderablesToUpdate.list.fill(null), this.root = null, this.updateTick = 0, this.structureDidChange = !0, this._onRenderContainers.length = 0, this.renderGroupParent = null, this.disableCacheAsTexture();
        }
        get localTransform() {
            return this.root.localTransform;
        }
        addRenderGroupChild(t) {
            t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t), t.renderGroupParent = this, this.renderGroupChildren.push(t);
        }
        _removeRenderGroupChild(t) {
            const e = this.renderGroupChildren.indexOf(t);
            e > -1 && this.renderGroupChildren.splice(e, 1), t.renderGroupParent = null;
        }
        addChild(t) {
            if (this.structureDidChange = !0, t.parentRenderGroup = this, t.updateTick = -1, t.parent === this.root ? t.relativeRenderGroupDepth = 1 : t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1, t.didChange = !0, this.onChildUpdate(t), t.renderGroup) {
                this.addRenderGroupChild(t.renderGroup);
                return;
            }
            t._onRender && this.addOnRender(t);
            const e = t.children;
            for(let s = 0; s < e.length; s++)this.addChild(e[s]);
        }
        removeChild(t) {
            if (this.structureDidChange = !0, t._onRender && (t.renderGroup || this.removeOnRender(t)), t.parentRenderGroup = null, t.renderGroup) {
                this._removeRenderGroupChild(t.renderGroup);
                return;
            }
            const e = t.children;
            for(let s = 0; s < e.length; s++)this.removeChild(e[s]);
        }
        removeChildren(t) {
            for(let e = 0; e < t.length; e++)this.removeChild(t[e]);
        }
        onChildUpdate(t) {
            let e = this.childrenToUpdate[t.relativeRenderGroupDepth];
            e || (e = this.childrenToUpdate[t.relativeRenderGroupDepth] = {
                index: 0,
                list: []
            }), e.list[e.index++] = t;
        }
        updateRenderable(t) {
            t.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t), t.didViewUpdate = !1);
        }
        onChildViewUpdate(t) {
            this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = t;
        }
        get isRenderable() {
            return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
        }
        addOnRender(t) {
            this._onRenderContainers.push(t);
        }
        removeOnRender(t) {
            this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1);
        }
        runOnRender(t) {
            for(let e = 0; e < this._onRenderContainers.length; e++)this._onRenderContainers[e]._onRender(t);
        }
        destroy() {
            this.disableCacheAsTexture(), this.renderGroupParent = null, this.root = null, this.childrenRenderablesToUpdate = null, this.childrenToUpdate = null, this.renderGroupChildren = null, this._onRenderContainers = null, this.instructionSet = null;
        }
        getChildren(t = []) {
            const e = this.root.children;
            for(let s = 0; s < e.length; s++)this._getChildren(e[s], t);
            return t;
        }
        _getChildren(t, e = []) {
            if (e.push(t), t.renderGroup) return e;
            const s = t.children;
            for(let r = 0; r < s.length; r++)this._getChildren(s[r], e);
            return e;
        }
        invalidateMatrices() {
            this._matrixDirty = 7;
        }
        get inverseWorldTransform() {
            return (this._matrixDirty & 1) === 0 ? this._inverseWorldTransform : (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new U), this._inverseWorldTransform.copyFrom(this.worldTransform).invert());
        }
        get textureOffsetInverseTransform() {
            return (this._matrixDirty & 2) === 0 ? this._textureOffsetInverseTransform : (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new U), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y));
        }
        get inverseParentTextureTransform() {
            if ((this._matrixDirty & 4) === 0) return this._inverseParentTextureTransform;
            this._matrixDirty &= -5;
            const t = this._parentCacheAsTextureRenderGroup;
            return t ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new U), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x, -t._textureBounds.y)) : this.worldTransform;
        }
        get cacheToLocalTransform() {
            return this._parentCacheAsTextureRenderGroup ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform : null;
        }
    }
    function so(i, t, e = {}) {
        for(const s in t)!e[s] && t[s] !== void 0 && (i[s] = t[s]);
    }
    let Ve, Ne, $e;
    Ve = new at(null);
    Ne = new at(null);
    $e = new at(null, 1, 1);
    ai = 1;
    io = 2;
    je = 4;
    Wt = class extends At {
        constructor(t = {}){
            super(), this.uid = it("renderable"), this._updateFlags = 15, this.renderGroup = null, this.parentRenderGroup = null, this.parentRenderGroupIndex = 0, this.didChange = !1, this.didViewUpdate = !1, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = !0, this.measurable = !0, this.isSimple = !0, this.updateTick = -1, this.localTransform = new U, this.relativeGroupTransform = new U, this.groupTransform = this.relativeGroupTransform, this.destroyed = !1, this._position = new at(this, 0, 0), this._scale = $e, this._pivot = Ne, this._skew = Ve, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 16777215, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 16777215, this.groupColorAlpha = 4294967295, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didContainerChangeTick = 0, this._didViewChangeTick = 0, this._didLocalTransformChangeId = -1, this.effects = [], so(this, t, {
                children: !0,
                parent: !0,
                effects: !0
            }), t.children?.forEach((e)=>this.addChild(e)), t.parent?.addChild(this);
        }
        static mixin(t) {
            K("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), Pt.mixin(Wt, t);
        }
        set _didChangeId(t) {
            this._didViewChangeTick = t >> 12 & 4095, this._didContainerChangeTick = t & 4095;
        }
        get _didChangeId() {
            return this._didContainerChangeTick & 4095 | (this._didViewChangeTick & 4095) << 12;
        }
        addChild(...t) {
            if (this.allowChildren || K(st, "addChild: Only Containers will be allowed to add children in v8.0.0"), t.length > 1) {
                for(let r = 0; r < t.length; r++)this.addChild(t[r]);
                return t[0];
            }
            const e = t[0], s = this.renderGroup || this.parentRenderGroup;
            return e.parent === this ? (this.children.splice(this.children.indexOf(e), 1), this.children.push(e), s && (s.structureDidChange = !0), e) : (e.parent && e.parent.removeChild(e), this.children.push(e), this.sortableChildren && (this.sortDirty = !0), e.parent = this, e.didChange = !0, e._updateFlags = 15, s && s.addChild(e), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this), this._didViewChangeTick++, e._zIndex !== 0 && e.depthOfChildModified(), e);
        }
        removeChild(...t) {
            if (t.length > 1) {
                for(let r = 0; r < t.length; r++)this.removeChild(t[r]);
                return t[0];
            }
            const e = t[0], s = this.children.indexOf(e);
            return s > -1 && (this._didViewChangeTick++, this.children.splice(s, 1), this.renderGroup ? this.renderGroup.removeChild(e) : this.parentRenderGroup && this.parentRenderGroup.removeChild(e), e.parentRenderLayer && e.parentRenderLayer.detach(e), e.parent = null, this.emit("childRemoved", e, this, s), e.emit("removed", this)), e;
        }
        _onUpdate(t) {
            t && t === this._skew && this._updateSkew(), this._didContainerChangeTick++, !this.didChange && (this.didChange = !0, this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this));
        }
        set isRenderGroup(t) {
            !!this.renderGroup !== t && (t ? this.enableRenderGroup() : this.disableRenderGroup());
        }
        get isRenderGroup() {
            return !!this.renderGroup;
        }
        enableRenderGroup() {
            if (this.renderGroup) return;
            const t = this.parentRenderGroup;
            t?.removeChild(this), this.renderGroup = Rt.get(eo, this), this.groupTransform = U.IDENTITY, t?.addChild(this), this._updateIsSimple();
        }
        disableRenderGroup() {
            if (!this.renderGroup) return;
            const t = this.parentRenderGroup;
            t?.removeChild(this), Rt.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, t?.addChild(this), this._updateIsSimple();
        }
        _updateIsSimple() {
            this.isSimple = !this.renderGroup && this.effects.length === 0;
        }
        get worldTransform() {
            return this._worldTransform || (this._worldTransform = new U), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform;
        }
        get x() {
            return this._position.x;
        }
        set x(t) {
            this._position.x = t;
        }
        get y() {
            return this._position.y;
        }
        set y(t) {
            this._position.y = t;
        }
        get position() {
            return this._position;
        }
        set position(t) {
            this._position.copyFrom(t);
        }
        get rotation() {
            return this._rotation;
        }
        set rotation(t) {
            this._rotation !== t && (this._rotation = t, this._onUpdate(this._skew));
        }
        get angle() {
            return this.rotation * mn;
        }
        set angle(t) {
            this.rotation = t * gn;
        }
        get pivot() {
            return this._pivot === Ne && (this._pivot = new at(this, 0, 0)), this._pivot;
        }
        set pivot(t) {
            this._pivot === Ne && (this._pivot = new at(this, 0, 0)), typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t);
        }
        get skew() {
            return this._skew === Ve && (this._skew = new at(this, 0, 0)), this._skew;
        }
        set skew(t) {
            this._skew === Ve && (this._skew = new at(this, 0, 0)), this._skew.copyFrom(t);
        }
        get scale() {
            return this._scale === $e && (this._scale = new at(this, 1, 1)), this._scale;
        }
        set scale(t) {
            this._scale === $e && (this._scale = new at(this, 0, 0)), typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t);
        }
        get width() {
            return Math.abs(this.scale.x * this.getLocalBounds().width);
        }
        set width(t) {
            const e = this.getLocalBounds().width;
            this._setWidth(t, e);
        }
        get height() {
            return Math.abs(this.scale.y * this.getLocalBounds().height);
        }
        set height(t) {
            const e = this.getLocalBounds().height;
            this._setHeight(t, e);
        }
        getSize(t) {
            t || (t = {});
            const e = this.getLocalBounds();
            return t.width = Math.abs(this.scale.x * e.width), t.height = Math.abs(this.scale.y * e.height), t;
        }
        setSize(t, e) {
            const s = this.getLocalBounds();
            typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, s.width), e !== void 0 && this._setHeight(e, s.height);
        }
        _updateSkew() {
            const t = this._rotation, e = this._skew;
            this._cx = Math.cos(t + e._y), this._sx = Math.sin(t + e._y), this._cy = -Math.sin(t - e._x), this._sy = Math.cos(t - e._x);
        }
        updateTransform(t) {
            return this.position.set(typeof t.x == "number" ? t.x : this.position.x, typeof t.y == "number" ? t.y : this.position.y), this.scale.set(typeof t.scaleX == "number" ? t.scaleX || 1 : this.scale.x, typeof t.scaleY == "number" ? t.scaleY || 1 : this.scale.y), this.rotation = typeof t.rotation == "number" ? t.rotation : this.rotation, this.skew.set(typeof t.skewX == "number" ? t.skewX : this.skew.x, typeof t.skewY == "number" ? t.skewY : this.skew.y), this.pivot.set(typeof t.pivotX == "number" ? t.pivotX : this.pivot.x, typeof t.pivotY == "number" ? t.pivotY : this.pivot.y), this;
        }
        setFromMatrix(t) {
            t.decompose(this);
        }
        updateLocalTransform() {
            const t = this._didContainerChangeTick;
            if (this._didLocalTransformChangeId === t) return;
            this._didLocalTransformChangeId = t;
            const e = this.localTransform, s = this._scale, r = this._pivot, n = this._position, o = s._x, h = s._y, a = r._x, l = r._y;
            e.a = this._cx * o, e.b = this._sx * o, e.c = this._cy * h, e.d = this._sy * h, e.tx = n._x - (a * e.a + l * e.c), e.ty = n._y - (a * e.b + l * e.d);
        }
        set alpha(t) {
            t !== this.localAlpha && (this.localAlpha = t, this._updateFlags |= ai, this._onUpdate());
        }
        get alpha() {
            return this.localAlpha;
        }
        set tint(t) {
            const s = ot.shared.setValue(t ?? 16777215).toBgrNumber();
            s !== this.localColor && (this.localColor = s, this._updateFlags |= ai, this._onUpdate());
        }
        get tint() {
            return Ae(this.localColor);
        }
        set blendMode(t) {
            this.localBlendMode !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= io, this.localBlendMode = t, this._onUpdate());
        }
        get blendMode() {
            return this.localBlendMode;
        }
        get visible() {
            return !!(this.localDisplayStatus & 2);
        }
        set visible(t) {
            const e = t ? 2 : 0;
            (this.localDisplayStatus & 2) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= je, this.localDisplayStatus ^= 2, this._onUpdate());
        }
        get culled() {
            return !(this.localDisplayStatus & 4);
        }
        set culled(t) {
            const e = t ? 0 : 4;
            (this.localDisplayStatus & 4) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= je, this.localDisplayStatus ^= 4, this._onUpdate());
        }
        get renderable() {
            return !!(this.localDisplayStatus & 1);
        }
        set renderable(t) {
            const e = t ? 1 : 0;
            (this.localDisplayStatus & 1) !== e && (this._updateFlags |= je, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._onUpdate());
        }
        get isRenderable() {
            return this.localDisplayStatus === 7 && this.groupAlpha > 0;
        }
        destroy(t = !1) {
            if (this.destroyed) return;
            this.destroyed = !0;
            let e;
            if (this.children.length && (e = this.removeChildren(0, this.children.length)), this.removeFromParent(), this.parent = null, this._maskEffect = null, this._filterEffect = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners(), (typeof t == "boolean" ? t : t?.children) && e) for(let r = 0; r < e.length; ++r)e[r].destroy(t);
            this.renderGroup?.destroy(), this.renderGroup = null;
        }
    };
    Pt.mixin(Wt, zn, Xn, Zn, jn, $n, Dn, Un, qn, Wn, Fn, Vn, Ln);
    class Is extends Wt {
        constructor(t){
            super(t), this.canBundle = !0, this.allowChildren = !1, this._roundPixels = 0, this._lastUsed = -1, this._bounds = new _t(0, 1, 0, 0), this._boundsDirty = !0;
        }
        get bounds() {
            return this._boundsDirty ? (this.updateBounds(), this._boundsDirty = !1, this._bounds) : this._bounds;
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        set roundPixels(t) {
            this._roundPixels = t ? 1 : 0;
        }
        containsPoint(t) {
            const e = this.bounds, { x: s, y: r } = t;
            return s >= e.minX && s <= e.maxX && r >= e.minY && r <= e.maxY;
        }
        onViewUpdate() {
            if (this._didViewChangeTick++, this._boundsDirty = !0, this.didViewUpdate) return;
            this.didViewUpdate = !0;
            const t = this.renderGroup || this.parentRenderGroup;
            t && t.onChildViewUpdate(this);
        }
        destroy(t) {
            super.destroy(t), this._bounds = null;
        }
        collectRenderablesSimple(t, e, s) {
            const { renderPipes: r, renderableGC: n } = e;
            r.blendMode.setBlendMode(this, this.groupBlendMode, t), r[this.renderPipeId].addRenderable(this, t), n.addRenderable(this), this.didViewUpdate = !1;
            const h = this.children, a = h.length;
            for(let l = 0; l < a; l++)h[l].collectRenderables(t, e, s);
        }
    }
    Vt = class extends Is {
        constructor(t = $.EMPTY){
            t instanceof $ && (t = {
                texture: t
            });
            const { texture: e = $.EMPTY, anchor: s, roundPixels: r, width: n, height: o, ...h } = t;
            super({
                label: "Sprite",
                ...h
            }), this.renderPipeId = "sprite", this.batched = !0, this._visualBounds = {
                minX: 0,
                maxX: 1,
                minY: 0,
                maxY: 0
            }, this._anchor = new at({
                _onUpdate: ()=>{
                    this.onViewUpdate();
                }
            }), s ? this.anchor = s : e.defaultAnchor && (this.anchor = e.defaultAnchor), this.texture = e, this.allowChildren = !1, this.roundPixels = r ?? !1, n !== void 0 && (this.width = n), o !== void 0 && (this.height = o);
        }
        static from(t, e = !1) {
            return t instanceof $ ? new Vt(t) : new Vt($.from(t, e));
        }
        set texture(t) {
            t || (t = $.EMPTY);
            const e = this._texture;
            e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate());
        }
        get texture() {
            return this._texture;
        }
        get visualBounds() {
            return Cn(this._visualBounds, this._anchor, this._texture), this._visualBounds;
        }
        get sourceBounds() {
            return K("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds;
        }
        updateBounds() {
            const t = this._anchor, e = this._texture, s = this._bounds, { width: r, height: n } = e.orig;
            s.minX = -t._x * r, s.maxX = s.minX + r, s.minY = -t._y * n, s.maxY = s.minY + n;
        }
        destroy(t = !1) {
            if (super.destroy(t), typeof t == "boolean" ? t : t?.texture) {
                const s = typeof t == "boolean" ? t : t?.textureSource;
                this._texture.destroy(s);
            }
            this._texture = null, this._visualBounds = null, this._bounds = null, this._anchor = null;
        }
        get anchor() {
            return this._anchor;
        }
        set anchor(t) {
            typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
        }
        get width() {
            return Math.abs(this.scale.x) * this._texture.orig.width;
        }
        set width(t) {
            this._setWidth(t, this._texture.orig.width), this._width = t;
        }
        get height() {
            return Math.abs(this.scale.y) * this._texture.orig.height;
        }
        set height(t) {
            this._setHeight(t, this._texture.orig.height), this._height = t;
        }
        getSize(t) {
            return t || (t = {}), t.width = Math.abs(this.scale.x) * this._texture.orig.width, t.height = Math.abs(this.scale.y) * this._texture.orig.height, t;
        }
        setSize(t, e) {
            typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, this._texture.orig.width), e !== void 0 && this._setHeight(e, this._texture.orig.height);
        }
    };
    const ro = new _t;
    function pr(i, t, e) {
        const s = ro;
        i.measurable = !0, hr(i, e, s), t.addBoundsMask(s), i.measurable = !1;
    }
    function mr(i, t, e) {
        const s = Bt.get();
        i.measurable = !0;
        const r = ht.get().identity(), n = gr(i, e, r);
        cr(i, s, n), i.measurable = !1, t.addBoundsMask(s), ht.return(r), Bt.return(s);
    }
    function gr(i, t, e) {
        return i ? (i !== t && (gr(i.parent, t, e), i.updateLocalTransform(), e.append(i.localTransform)), e) : (ft("Mask bounds, renderable is not inside the root container"), e);
    }
    class xr {
        constructor(t){
            this.priority = 0, this.inverse = !1, this.pipe = "alphaMask", t?.mask && this.init(t.mask);
        }
        init(t) {
            this.mask = t, this.renderMaskToTexture = !(t instanceof Vt), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1;
        }
        reset() {
            this.mask.measurable = !0, this.mask = null;
        }
        addBounds(t, e) {
            this.inverse || pr(this.mask, t, e);
        }
        addLocalBounds(t, e) {
            mr(this.mask, t, e);
        }
        containsPoint(t, e) {
            const s = this.mask;
            return e(s, t);
        }
        destroy() {
            this.reset();
        }
        static test(t) {
            return t instanceof Vt;
        }
    }
    xr.extension = Z.MaskEffect;
    class yr {
        constructor(t){
            this.priority = 0, this.pipe = "colorMask", t?.mask && this.init(t.mask);
        }
        init(t) {
            this.mask = t;
        }
        destroy() {}
        static test(t) {
            return typeof t == "number";
        }
    }
    yr.extension = Z.MaskEffect;
    class _r {
        constructor(t){
            this.priority = 0, this.pipe = "stencilMask", t?.mask && this.init(t.mask);
        }
        init(t) {
            this.mask = t, this.mask.includeInBuild = !1, this.mask.measurable = !1;
        }
        reset() {
            this.mask.measurable = !0, this.mask.includeInBuild = !0, this.mask = null;
        }
        addBounds(t, e) {
            pr(this.mask, t, e);
        }
        addLocalBounds(t, e) {
            mr(this.mask, t, e);
        }
        containsPoint(t, e) {
            const s = this.mask;
            return e(s, t);
        }
        destroy() {
            this.reset();
        }
        static test(t) {
            return t instanceof Wt;
        }
    }
    _r.extension = Z.MaskEffect;
    const no = {
        createCanvas: (i, t)=>{
            const e = document.createElement("canvas");
            return e.width = i, e.height = t, e;
        },
        getCanvasRenderingContext2D: ()=>CanvasRenderingContext2D,
        getWebGLRenderingContext: ()=>WebGLRenderingContext,
        getNavigator: ()=>navigator,
        getBaseUrl: ()=>document.baseURI ?? window.location.href,
        getFontFaceSet: ()=>document.fonts,
        fetch: (i, t)=>fetch(i, t),
        parseXML: (i)=>new DOMParser().parseFromString(i, "text/xml")
    };
    let li = no;
    yt = {
        get () {
            return li;
        },
        set (i) {
            li = i;
        }
    };
    wr = class extends Tt {
        constructor(t){
            t.resource || (t.resource = yt.get().createCanvas()), t.width || (t.width = t.resource.width, t.autoDensity || (t.width /= t.resolution)), t.height || (t.height = t.resource.height, t.autoDensity || (t.height /= t.resolution)), super(t), this.uploadMethodId = "image", this.autoDensity = t.autoDensity, this.resizeCanvas(), this.transparent = !!t.transparent;
        }
        resizeCanvas() {
            this.autoDensity && "style" in this.resource && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight);
        }
        resize(t = this.width, e = this.height, s = this._resolution) {
            const r = super.resize(t, e, s);
            return r && this.resizeCanvas(), r;
        }
        static test(t) {
            return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && t instanceof OffscreenCanvas;
        }
        get context2D() {
            return this._context2D || (this._context2D = this.resource.getContext("2d"));
        }
    };
    wr.extension = Z.TextureSource;
    Ee = class extends Tt {
        constructor(t){
            if (t.resource && globalThis.HTMLImageElement && t.resource instanceof HTMLImageElement) {
                const e = yt.get().createCanvas(t.resource.width, t.resource.height);
                e.getContext("2d").drawImage(t.resource, 0, 0, t.resource.width, t.resource.height), t.resource = e, ft("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.");
            }
            super(t), this.uploadMethodId = "image", this.autoGarbageCollect = !0;
        }
        static test(t) {
            return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame;
        }
    };
    Ee.extension = Z.TextureSource;
    ms = ((i)=>(i[i.INTERACTION = 50] = "INTERACTION", i[i.HIGH = 25] = "HIGH", i[i.NORMAL = 0] = "NORMAL", i[i.LOW = -25] = "LOW", i[i.UTILITY = -50] = "UTILITY", i))(ms || {});
    class qe {
        constructor(t, e = null, s = 0, r = !1){
            this.next = null, this.previous = null, this._destroyed = !1, this._fn = t, this._context = e, this.priority = s, this._once = r;
        }
        match(t, e = null) {
            return this._fn === t && this._context === e;
        }
        emit(t) {
            this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t));
            const e = this.next;
            return this._once && this.destroy(!0), this._destroyed && (this.next = null), e;
        }
        connect(t) {
            this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
        }
        destroy(t = !1) {
            this._destroyed = !0, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
            const e = this.next;
            return this.next = t ? null : e, this.previous = null, e;
        }
    }
    const br = class dt {
        constructor(){
            this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new qe(null, null, 1 / 0), this.deltaMS = 1 / dt.targetFPMS, this.elapsedMS = 1 / dt.targetFPMS, this._tick = (t)=>{
                this._requestId = null, this.started && (this.update(t), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
            };
        }
        _requestIfNeeded() {
            this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
        }
        _cancelIfNeeded() {
            this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
        }
        _startIfPossible() {
            this.started ? this._requestIfNeeded() : this.autoStart && this.start();
        }
        add(t, e, s = ms.NORMAL) {
            return this._addListener(new qe(t, e, s));
        }
        addOnce(t, e, s = ms.NORMAL) {
            return this._addListener(new qe(t, e, s, !0));
        }
        _addListener(t) {
            let e = this._head.next, s = this._head;
            if (!e) t.connect(s);
            else {
                for(; e;){
                    if (t.priority > e.priority) {
                        t.connect(s);
                        break;
                    }
                    s = e, e = e.next;
                }
                t.previous || t.connect(s);
            }
            return this._startIfPossible(), this;
        }
        remove(t, e) {
            let s = this._head.next;
            for(; s;)s.match(t, e) ? s = s.destroy() : s = s.next;
            return this._head.next || this._cancelIfNeeded(), this;
        }
        get count() {
            if (!this._head) return 0;
            let t = 0, e = this._head;
            for(; e = e.next;)t++;
            return t;
        }
        start() {
            this.started || (this.started = !0, this._requestIfNeeded());
        }
        stop() {
            this.started && (this.started = !1, this._cancelIfNeeded());
        }
        destroy() {
            if (!this._protected) {
                this.stop();
                let t = this._head.next;
                for(; t;)t = t.destroy(!0);
                this._head.destroy(), this._head = null;
            }
        }
        update(t = performance.now()) {
            let e;
            if (t > this.lastTime) {
                if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                    const n = t - this._lastFrame | 0;
                    if (n < this._minElapsedMS) return;
                    this._lastFrame = t - n % this._minElapsedMS;
                }
                this.deltaMS = e, this.deltaTime = this.deltaMS * dt.targetFPMS;
                const s = this._head;
                let r = s.next;
                for(; r;)r = r.emit(this);
                s.next || this._cancelIfNeeded();
            } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
            this.lastTime = t;
        }
        get FPS() {
            return 1e3 / this.elapsedMS;
        }
        get minFPS() {
            return 1e3 / this._maxElapsedMS;
        }
        set minFPS(t) {
            const e = Math.min(this.maxFPS, t), s = Math.min(Math.max(0, e) / 1e3, dt.targetFPMS);
            this._maxElapsedMS = 1 / s;
        }
        get maxFPS() {
            return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
        }
        set maxFPS(t) {
            if (t === 0) this._minElapsedMS = 0;
            else {
                const e = Math.max(this.minFPS, t);
                this._minElapsedMS = 1 / (e / 1e3);
            }
        }
        static get shared() {
            if (!dt._shared) {
                const t = dt._shared = new dt;
                t.autoStart = !0, t._protected = !0;
            }
            return dt._shared;
        }
        static get system() {
            if (!dt._system) {
                const t = dt._system = new dt;
                t.autoStart = !0, t._protected = !0;
            }
            return dt._system;
        }
    };
    br.targetFPMS = .06;
    let Ke;
    Kt = br;
    async function oo() {
        return Ke ?? (Ke = (async ()=>{
            const t = document.createElement("canvas").getContext("webgl");
            if (!t) return "premultiply-alpha-on-upload";
            const e = await new Promise((o)=>{
                const h = document.createElement("video");
                h.onloadeddata = ()=>o(h), h.onerror = ()=>o(null), h.autoplay = !1, h.crossOrigin = "anonymous", h.preload = "auto", h.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", h.load();
            });
            if (!e) return "premultiply-alpha-on-upload";
            const s = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, s);
            const r = t.createFramebuffer();
            t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, s, 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
            const n = new Uint8Array(4);
            return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), t.deleteFramebuffer(r), t.deleteTexture(s), t.getExtension("WEBGL_lose_context")?.loseContext(), n[0] <= n[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload";
        })()), Ke;
    }
    const We = class vr extends Tt {
        constructor(t){
            super(t), this.isReady = !1, this.uploadMethodId = "video", t = {
                ...vr.defaultOptions,
                ...t
            }, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), t.autoLoad !== !1 && this.load();
        }
        updateFrame() {
            if (!this.destroyed) {
                if (this._updateFPS) {
                    const t = Kt.shared.elapsedMS * this.resource.playbackRate;
                    this._msToNextUpdate = Math.floor(this._msToNextUpdate - t);
                }
                (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update();
            }
        }
        _videoFrameRequestCallback() {
            this.updateFrame(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback);
        }
        get isValid() {
            return !!this.resource.videoWidth && !!this.resource.videoHeight;
        }
        async load() {
            if (this._load) return this._load;
            const t = this.resource, e = this.options;
            return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlayThrough), t.addEventListener("error", this._onError, !0)), this.alphaMode = await oo(), this._load = new Promise((s, r)=>{
                this.isValid ? s(this) : (this._resolve = s, this._reject = r, e.preloadTimeoutMs !== void 0 && (this._preloadTimeout = setTimeout(()=>{
                    this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`));
                })), t.load());
            }), this._load;
        }
        _onError(t) {
            this.resource.removeEventListener("error", this._onError, !0), this.emit("error", t), this._reject && (this._reject(t), this._reject = null, this._resolve = null);
        }
        _isSourcePlaying() {
            const t = this.resource;
            return !t.paused && !t.ended;
        }
        _isSourceReady() {
            return this.resource.readyState > 2;
        }
        _onPlayStart() {
            this.isValid || this._mediaReady(), this._configureAutoUpdate();
        }
        _onPlayStop() {
            this._configureAutoUpdate();
        }
        _onSeeked() {
            this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0);
        }
        _onCanPlay() {
            this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady();
        }
        _onCanPlayThrough() {
            this.resource.removeEventListener("canplaythrough", this._onCanPlay), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady();
        }
        _mediaReady() {
            const t = this.resource;
            this.isValid && (this.isReady = !0, this.resize(t.videoWidth, t.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play();
        }
        destroy() {
            this._configureAutoUpdate();
            const t = this.resource;
            t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlayThrough), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.destroy();
        }
        get autoUpdate() {
            return this._autoUpdate;
        }
        set autoUpdate(t) {
            t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate());
        }
        get updateFPS() {
            return this._updateFPS;
        }
        set updateFPS(t) {
            t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate());
        }
        _configureAutoUpdate() {
            this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (Kt.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (Kt.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (Kt.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0));
        }
        static test(t) {
            return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement;
        }
    };
    We.extension = Z.TextureSource;
    We.defaultOptions = {
        ...Tt.defaultOptions,
        autoLoad: !0,
        autoPlay: !0,
        updateFPS: 0,
        crossorigin: !0,
        loop: !1,
        muted: !0,
        playsinline: !0,
        preload: !1
    };
    We.MIME_TYPES = {
        ogv: "video/ogg",
        mov: "video/quicktime",
        m4v: "video/mp4"
    };
    let ho = We;
    const $t = (i, t, e = !1)=>(Array.isArray(i) || (i = [
            i
        ]), t ? i.map((s)=>typeof s == "string" || e ? t(s) : s) : i);
    class ao {
        constructor(){
            this._parsers = [], this._cache = new Map, this._cacheMap = new Map;
        }
        reset() {
            this._cacheMap.clear(), this._cache.clear();
        }
        has(t) {
            return this._cache.has(t);
        }
        get(t) {
            const e = this._cache.get(t);
            return e || ft(`[Assets] Asset id ${t} was not found in the Cache`), e;
        }
        set(t, e) {
            const s = $t(t);
            let r;
            for(let a = 0; a < this.parsers.length; a++){
                const l = this.parsers[a];
                if (l.test(e)) {
                    r = l.getCacheableAssets(s, e);
                    break;
                }
            }
            const n = new Map(Object.entries(r || {}));
            r || s.forEach((a)=>{
                n.set(a, e);
            });
            const o = [
                ...n.keys()
            ], h = {
                cacheKeys: o,
                keys: s
            };
            s.forEach((a)=>{
                this._cacheMap.set(a, h);
            }), o.forEach((a)=>{
                const l = r ? r[a] : e;
                this._cache.has(a) && this._cache.get(a) !== l && ft("[Cache] already has key:", a), this._cache.set(a, n.get(a));
            });
        }
        remove(t) {
            if (!this._cacheMap.has(t)) {
                ft(`[Assets] Asset id ${t} was not found in the Cache`);
                return;
            }
            const e = this._cacheMap.get(t);
            e.cacheKeys.forEach((r)=>{
                this._cache.delete(r);
            }), e.keys.forEach((r)=>{
                this._cacheMap.delete(r);
            });
        }
        get parsers() {
            return this._parsers;
        }
    }
    let gs;
    jt = new ao;
    gs = [];
    Pt.handleByList(Z.TextureSource, gs);
    function Sr(i = {}) {
        const t = i && i.resource, e = t ? i.resource : i, s = t ? i : {
            resource: i
        };
        for(let r = 0; r < gs.length; r++){
            const n = gs[r];
            if (n.test(e)) return new n(s);
        }
        throw new Error(`Could not find a source type for resource: ${s.resource}`);
    }
    function lo(i = {}, t = !1) {
        const e = i && i.resource, s = e ? i.resource : i, r = e ? i : {
            resource: i
        };
        if (!t && jt.has(s)) return jt.get(s);
        const n = new $({
            source: Sr(r)
        });
        return n.on("destroy", ()=>{
            jt.has(s) && jt.remove(s);
        }), t || jt.set(s, n), n;
    }
    function co(i, t = !1) {
        return typeof i == "string" ? jt.get(i) : i instanceof Tt ? new $({
            source: i
        }) : lo(i, t);
    }
    $.from = co;
    Tt.from = Sr;
    Pt.add(xr, yr, _r, ho, Ee, wr, As);
    var Cr = ((i)=>(i[i.Low = 0] = "Low", i[i.Normal = 1] = "Normal", i[i.High = 2] = "High", i))(Cr || {});
    function gt(i) {
        if (typeof i != "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`);
    }
    function te(i) {
        return i.split("?")[0].split("#")[0];
    }
    function uo(i) {
        return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function fo(i, t, e) {
        return i.replace(new RegExp(uo(t), "g"), e);
    }
    function po(i, t) {
        let e = "", s = 0, r = -1, n = 0, o = -1;
        for(let h = 0; h <= i.length; ++h){
            if (h < i.length) o = i.charCodeAt(h);
            else {
                if (o === 47) break;
                o = 47;
            }
            if (o === 47) {
                if (!(r === h - 1 || n === 1)) if (r !== h - 1 && n === 2) {
                    if (e.length < 2 || s !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                        if (e.length > 2) {
                            const a = e.lastIndexOf("/");
                            if (a !== e.length - 1) {
                                a === -1 ? (e = "", s = 0) : (e = e.slice(0, a), s = e.length - 1 - e.lastIndexOf("/")), r = h, n = 0;
                                continue;
                            }
                        } else if (e.length === 2 || e.length === 1) {
                            e = "", s = 0, r = h, n = 0;
                            continue;
                        }
                    }
                } else e.length > 0 ? e += `/${i.slice(r + 1, h)}` : e = i.slice(r + 1, h), s = h - r - 1;
                r = h, n = 0;
            } else o === 46 && n !== -1 ? ++n : n = -1;
        }
        return e;
    }
    const ue = {
        toPosix (i) {
            return fo(i, "\\", "/");
        },
        isUrl (i) {
            return /^https?:/.test(this.toPosix(i));
        },
        isDataUrl (i) {
            return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i);
        },
        isBlobUrl (i) {
            return i.startsWith("blob:");
        },
        hasProtocol (i) {
            return /^[^/:]+:/.test(this.toPosix(i));
        },
        getProtocol (i) {
            gt(i), i = this.toPosix(i);
            const t = /^file:\/\/\//.exec(i);
            if (t) return t[0];
            const e = /^[^/:]+:\/{0,2}/.exec(i);
            return e ? e[0] : "";
        },
        toAbsolute (i, t, e) {
            if (gt(i), this.isDataUrl(i) || this.isBlobUrl(i)) return i;
            const s = te(this.toPosix(t ?? yt.get().getBaseUrl())), r = te(this.toPosix(e ?? this.rootname(s)));
            return i = this.toPosix(i), i.startsWith("/") ? ue.join(r, i.slice(1)) : this.isAbsolute(i) ? i : this.join(s, i);
        },
        normalize (i) {
            if (gt(i), i.length === 0) return ".";
            if (this.isDataUrl(i) || this.isBlobUrl(i)) return i;
            i = this.toPosix(i);
            let t = "";
            const e = i.startsWith("/");
            this.hasProtocol(i) && (t = this.rootname(i), i = i.slice(t.length));
            const s = i.endsWith("/");
            return i = po(i), i.length > 0 && s && (i += "/"), e ? `/${i}` : t + i;
        },
        isAbsolute (i) {
            return gt(i), i = this.toPosix(i), this.hasProtocol(i) ? !0 : i.startsWith("/");
        },
        join (...i) {
            if (i.length === 0) return ".";
            let t;
            for(let e = 0; e < i.length; ++e){
                const s = i[e];
                if (gt(s), s.length > 0) if (t === void 0) t = s;
                else {
                    const r = i[e - 1] ?? "";
                    this.joinExtensions.includes(this.extname(r).toLowerCase()) ? t += `/../${s}` : t += `/${s}`;
                }
            }
            return t === void 0 ? "." : this.normalize(t);
        },
        dirname (i) {
            if (gt(i), i.length === 0) return ".";
            i = this.toPosix(i);
            let t = i.charCodeAt(0);
            const e = t === 47;
            let s = -1, r = !0;
            const n = this.getProtocol(i), o = i;
            i = i.slice(n.length);
            for(let h = i.length - 1; h >= 1; --h)if (t = i.charCodeAt(h), t === 47) {
                if (!r) {
                    s = h;
                    break;
                }
            } else r = !1;
            return s === -1 ? e ? "/" : this.isUrl(o) ? n + i : n : e && s === 1 ? "//" : n + i.slice(0, s);
        },
        rootname (i) {
            gt(i), i = this.toPosix(i);
            let t = "";
            if (i.startsWith("/") ? t = "/" : t = this.getProtocol(i), this.isUrl(i)) {
                const e = i.indexOf("/", t.length);
                e !== -1 ? t = i.slice(0, e) : t = i, t.endsWith("/") || (t += "/");
            }
            return t;
        },
        basename (i, t) {
            gt(i), t && gt(t), i = te(this.toPosix(i));
            let e = 0, s = -1, r = !0, n;
            if (t !== void 0 && t.length > 0 && t.length <= i.length) {
                if (t.length === i.length && t === i) return "";
                let o = t.length - 1, h = -1;
                for(n = i.length - 1; n >= 0; --n){
                    const a = i.charCodeAt(n);
                    if (a === 47) {
                        if (!r) {
                            e = n + 1;
                            break;
                        }
                    } else h === -1 && (r = !1, h = n + 1), o >= 0 && (a === t.charCodeAt(o) ? --o === -1 && (s = n) : (o = -1, s = h));
                }
                return e === s ? s = h : s === -1 && (s = i.length), i.slice(e, s);
            }
            for(n = i.length - 1; n >= 0; --n)if (i.charCodeAt(n) === 47) {
                if (!r) {
                    e = n + 1;
                    break;
                }
            } else s === -1 && (r = !1, s = n + 1);
            return s === -1 ? "" : i.slice(e, s);
        },
        extname (i) {
            gt(i), i = te(this.toPosix(i));
            let t = -1, e = 0, s = -1, r = !0, n = 0;
            for(let o = i.length - 1; o >= 0; --o){
                const h = i.charCodeAt(o);
                if (h === 47) {
                    if (!r) {
                        e = o + 1;
                        break;
                    }
                    continue;
                }
                s === -1 && (r = !1, s = o + 1), h === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
            }
            return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === e + 1 ? "" : i.slice(t, s);
        },
        parse (i) {
            gt(i);
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (i.length === 0) return t;
            i = te(this.toPosix(i));
            let e = i.charCodeAt(0);
            const s = this.isAbsolute(i);
            let r;
            t.root = this.rootname(i), s || this.hasProtocol(i) ? r = 1 : r = 0;
            let n = -1, o = 0, h = -1, a = !0, l = i.length - 1, c = 0;
            for(; l >= r; --l){
                if (e = i.charCodeAt(l), e === 47) {
                    if (!a) {
                        o = l + 1;
                        break;
                    }
                    continue;
                }
                h === -1 && (a = !1, h = l + 1), e === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1);
            }
            return n === -1 || h === -1 || c === 0 || c === 1 && n === h - 1 && n === o + 1 ? h !== -1 && (o === 0 && s ? t.base = t.name = i.slice(1, h) : t.base = t.name = i.slice(o, h)) : (o === 0 && s ? (t.name = i.slice(1, n), t.base = i.slice(1, h)) : (t.name = i.slice(o, n), t.base = i.slice(o, h)), t.ext = i.slice(n, h)), t.dir = this.dirname(i), t;
        },
        sep: "/",
        delimiter: ":",
        joinExtensions: [
            ".html"
        ]
    };
    function Mr(i, t, e, s, r) {
        const n = t[e];
        for(let o = 0; o < n.length; o++){
            const h = n[o];
            e < t.length - 1 ? Mr(i.replace(s[e], h), t, e + 1, s, r) : r.push(i.replace(s[e], h));
        }
    }
    function mo(i) {
        const t = /\{(.*?)\}/g, e = i.match(t), s = [];
        if (e) {
            const r = [];
            e.forEach((n)=>{
                const o = n.substring(1, n.length - 1).split(",");
                r.push(o);
            }), Mr(i, r, 0, e, s);
        } else s.push(i);
        return s;
    }
    const ci = (i)=>!Array.isArray(i);
    class Pr {
        constructor(){
            this._defaultBundleIdentifierOptions = {
                connector: "-",
                createBundleAssetId: (t, e)=>`${t}${this._bundleIdConnector}${e}`,
                extractAssetIdFromBundle: (t, e)=>e.replace(`${t}${this._bundleIdConnector}`, "")
            }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
        }
        setBundleIdentifier(t) {
            if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
        }
        prefer(...t) {
            t.forEach((e)=>{
                this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params));
            }), this._resolverHash = {};
        }
        set basePath(t) {
            this._basePath = t;
        }
        get basePath() {
            return this._basePath;
        }
        set rootPath(t) {
            this._rootPath = t;
        }
        get rootPath() {
            return this._rootPath;
        }
        get parsers() {
            return this._parsers;
        }
        reset() {
            this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
        }
        setDefaultSearchParams(t) {
            if (typeof t == "string") this._defaultSearchParams = t;
            else {
                const e = t;
                this._defaultSearchParams = Object.keys(e).map((s)=>`${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`).join("&");
            }
        }
        getAlias(t) {
            const { alias: e, src: s } = t;
            return $t(e || s, (n)=>typeof n == "string" ? n : Array.isArray(n) ? n.map((o)=>o?.src ?? o) : n?.src ? n.src : n, !0);
        }
        addManifest(t) {
            this._manifest && ft("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((e)=>{
                this.addBundle(e.name, e.assets);
            });
        }
        addBundle(t, e) {
            const s = [];
            let r = e;
            Array.isArray(e) || (r = Object.entries(e).map(([n, o])=>typeof o == "string" || Array.isArray(o) ? {
                    alias: n,
                    src: o
                } : {
                    alias: n,
                    ...o
                })), r.forEach((n)=>{
                const o = n.src, h = n.alias;
                let a;
                if (typeof h == "string") {
                    const l = this._createBundleAssetId(t, h);
                    s.push(l), a = [
                        h,
                        l
                    ];
                } else {
                    const l = h.map((c)=>this._createBundleAssetId(t, c));
                    s.push(...l), a = [
                        ...h,
                        ...l
                    ];
                }
                this.add({
                    ...n,
                    alias: a,
                    src: o
                });
            }), this._bundles[t] = s;
        }
        add(t) {
            const e = [];
            Array.isArray(t) ? e.push(...t) : e.push(t);
            let s;
            s = (n)=>{
                this.hasKey(n) && ft(`[Resolver] already has key: ${n} overwriting`);
            }, $t(e).forEach((n)=>{
                const { src: o } = n;
                let { data: h, format: a, loadParser: l } = n;
                const c = $t(o).map((d)=>typeof d == "string" ? mo(d) : Array.isArray(d) ? d : [
                        d
                    ]), u = this.getAlias(n);
                Array.isArray(u) ? u.forEach(s) : s(u);
                const p = [];
                c.forEach((d)=>{
                    d.forEach((x)=>{
                        let y = {};
                        if (typeof x != "object") {
                            y.src = x;
                            for(let m = 0; m < this._parsers.length; m++){
                                const w = this._parsers[m];
                                if (w.test(x)) {
                                    y = w.parse(x);
                                    break;
                                }
                            }
                        } else h = x.data ?? h, a = x.format ?? a, l = x.loadParser ?? l, y = {
                            ...y,
                            ...x
                        };
                        if (!u) throw new Error(`[Resolver] alias is undefined for this asset: ${y.src}`);
                        y = this._buildResolvedAsset(y, {
                            aliases: u,
                            data: h,
                            format: a,
                            loadParser: l
                        }), p.push(y);
                    });
                }), u.forEach((d)=>{
                    this._assetMap[d] = p;
                });
            });
        }
        resolveBundle(t) {
            const e = ci(t);
            t = $t(t);
            const s = {};
            return t.forEach((r)=>{
                const n = this._bundles[r];
                if (n) {
                    const o = this.resolve(n), h = {};
                    for(const a in o){
                        const l = o[a];
                        h[this._extractAssetIdFromBundle(r, a)] = l;
                    }
                    s[r] = h;
                }
            }), e ? s[t[0]] : s;
        }
        resolveUrl(t) {
            const e = this.resolve(t);
            if (typeof t != "string") {
                const s = {};
                for(const r in e)s[r] = e[r].src;
                return s;
            }
            return e.src;
        }
        resolve(t) {
            const e = ci(t);
            t = $t(t);
            const s = {};
            return t.forEach((r)=>{
                if (!this._resolverHash[r]) if (this._assetMap[r]) {
                    let n = this._assetMap[r];
                    const o = this._getPreferredOrder(n);
                    o?.priority.forEach((h)=>{
                        o.params[h].forEach((a)=>{
                            const l = n.filter((c)=>c[h] ? c[h] === a : !1);
                            l.length && (n = l);
                        });
                    }), this._resolverHash[r] = n[0];
                } else this._resolverHash[r] = this._buildResolvedAsset({
                    alias: [
                        r
                    ],
                    src: r
                }, {});
                s[r] = this._resolverHash[r];
            }), e ? s[t[0]] : s;
        }
        hasKey(t) {
            return !!this._assetMap[t];
        }
        hasBundle(t) {
            return !!this._bundles[t];
        }
        _getPreferredOrder(t) {
            for(let e = 0; e < t.length; e++){
                const s = t[e], r = this._preferredOrder.find((n)=>n.params.format.includes(s.format));
                if (r) return r;
            }
            return this._preferredOrder[0];
        }
        _appendDefaultSearchParams(t) {
            if (!this._defaultSearchParams) return t;
            const e = /\?/.test(t) ? "&" : "?";
            return `${t}${e}${this._defaultSearchParams}`;
        }
        _buildResolvedAsset(t, e) {
            const { aliases: s, data: r, loadParser: n, format: o } = e;
            return (this._basePath || this._rootPath) && (t.src = ue.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = s ?? t.alias ?? [
                t.src
            ], t.src = this._appendDefaultSearchParams(t.src), t.data = {
                ...r || {},
                ...t.data
            }, t.loadParser = n ?? t.loadParser, t.format = o ?? t.format ?? go(t.src), t;
        }
    }
    Pr.RETINA_PREFIX = /@([0-9\.]+)x/;
    function go(i) {
        return i.split(".").pop().split("?").shift().split("#").shift();
    }
    const ui = (i, t)=>{
        const e = t.split("?")[1];
        return e && (i += `?${e}`), i;
    }, Ar = class oe {
        constructor(t, e){
            this.linkedSheets = [], this._texture = t instanceof $ ? t : null, this.textureSource = t.source, this.textures = {}, this.animations = {}, this.data = e;
            const s = parseFloat(e.meta.scale);
            s ? (this.resolution = s, t.source.resolution = this.resolution) : this.resolution = t.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
        }
        parse() {
            return new Promise((t)=>{
                this._callback = t, this._batchIndex = 0, this._frameKeys.length <= oe.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
            });
        }
        _processFrames(t) {
            let e = t;
            const s = oe.BATCH_SIZE;
            for(; e - t < s && e < this._frameKeys.length;){
                const r = this._frameKeys[e], n = this._frames[r], o = n.frame;
                if (o) {
                    let h = null, a = null;
                    const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame, c = new J(0, 0, Math.floor(l.w) / this.resolution, Math.floor(l.h) / this.resolution);
                    n.rotated ? h = new J(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : h = new J(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), n.trimmed !== !1 && n.spriteSourceSize && (a = new J(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[r] = new $({
                        source: this.textureSource,
                        frame: h,
                        orig: c,
                        trim: a,
                        rotate: n.rotated ? 2 : 0,
                        defaultAnchor: n.anchor,
                        defaultBorders: n.borders,
                        label: r.toString()
                    });
                }
                e++;
            }
        }
        _processAnimations() {
            const t = this.data.animations || {};
            for(const e in t){
                this.animations[e] = [];
                for(let s = 0; s < t[e].length; s++){
                    const r = t[e][s];
                    this.animations[e].push(this.textures[r]);
                }
            }
        }
        _parseComplete() {
            const t = this._callback;
            this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
        }
        _nextBatch() {
            this._processFrames(this._batchIndex * oe.BATCH_SIZE), this._batchIndex++, setTimeout(()=>{
                this._batchIndex * oe.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
            }, 0);
        }
        destroy(t = !1) {
            for(const e in this.textures)this.textures[e].destroy();
            this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (this._texture?.destroy(), this.textureSource.destroy()), this._texture = null, this.textureSource = null, this.linkedSheets = [];
        }
    };
    Ar.BATCH_SIZE = 1e3;
    let di = Ar;
    const xo = [
        "jpg",
        "png",
        "jpeg",
        "avif",
        "webp",
        "basis",
        "etc2",
        "bc7",
        "bc6h",
        "bc5",
        "bc4",
        "bc3",
        "bc2",
        "bc1",
        "eac",
        "astc"
    ];
    function Tr(i, t, e) {
        const s = {};
        if (i.forEach((r)=>{
            s[r] = t;
        }), Object.keys(t.textures).forEach((r)=>{
            s[r] = t.textures[r];
        }), !e) {
            const r = ue.dirname(i[0]);
            t.linkedSheets.forEach((n, o)=>{
                const h = Tr([
                    `${r}/${t.data.meta.related_multi_packs[o]}`
                ], n, !0);
                Object.assign(s, h);
            });
        }
        return s;
    }
    const yo = {
        extension: Z.Asset,
        cache: {
            test: (i)=>i instanceof di,
            getCacheableAssets: (i, t)=>Tr(i, t, !1)
        },
        resolver: {
            extension: {
                type: Z.ResolveParser,
                name: "resolveSpritesheet"
            },
            test: (i)=>{
                const e = i.split("?")[0].split("."), s = e.pop(), r = e.pop();
                return s === "json" && xo.includes(r);
            },
            parse: (i)=>{
                const t = i.split(".");
                return {
                    resolution: parseFloat(Pr.RETINA_PREFIX.exec(i)?.[1] ?? "1"),
                    format: t[t.length - 2],
                    src: i
                };
            }
        },
        loader: {
            name: "spritesheetLoader",
            extension: {
                type: Z.LoadParser,
                priority: Cr.Normal,
                name: "spritesheetLoader"
            },
            async testParse (i, t) {
                return ue.extname(t.src).toLowerCase() === ".json" && !!i.frames;
            },
            async parse (i, t, e) {
                const { texture: s, imageFilename: r, textureOptions: n } = t?.data ?? {};
                let o = ue.dirname(t.src);
                o && o.lastIndexOf("/") !== o.length - 1 && (o += "/");
                let h;
                if (s instanceof $) h = s;
                else {
                    const c = ui(o + (r ?? i.meta.image), t.src);
                    h = (await e.load([
                        {
                            src: c,
                            data: n
                        }
                    ]))[c];
                }
                const a = new di(h.source, i);
                await a.parse();
                const l = i?.meta?.related_multi_packs;
                if (Array.isArray(l)) {
                    const c = [];
                    for (const p of l){
                        if (typeof p != "string") continue;
                        let d = o + p;
                        t.data?.ignoreMultiPack || (d = ui(d, t.src), c.push(e.load({
                            src: d,
                            data: {
                                textureOptions: n,
                                ignoreMultiPack: !0
                            }
                        })));
                    }
                    const u = await Promise.all(c);
                    a.linkedSheets = u, u.forEach((p)=>{
                        p.linkedSheets = [
                            a
                        ].concat(a.linkedSheets.filter((d)=>d !== p));
                    });
                }
                return a;
            },
            async unload (i, t, e) {
                await e.unload(i.textureSource._sourceOrigin), i.destroy(!1);
            }
        }
    };
    Pt.add(yo);
    const Ze = Object.create(null), fi = Object.create(null);
    Es = function(i, t) {
        let e = fi[i];
        return e === void 0 && (Ze[t] === void 0 && (Ze[t] = 1), fi[i] = e = Ze[t]++), e;
    };
    let _e;
    function kr() {
        return (!_e || _e?.isContextLost()) && (_e = yt.get().createCanvas().getContext("webgl", {})), _e;
    }
    let we;
    function _o() {
        if (!we) {
            we = "mediump";
            const i = kr();
            i && i.getShaderPrecisionFormat && (we = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision ? "highp" : "mediump");
        }
        return we;
    }
    function wo(i, t, e) {
        return t ? i : e ? (i = i.replace("out vec4 finalColor;", ""), `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${i}
        `) : `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${i}
        `;
    }
    function bo(i, t, e) {
        const s = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
        if (i.substring(0, 9) !== "precision") {
            let r = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
            return r === "highp" && s !== "highp" && (r = "mediump"), `precision ${r} float;
${i}`;
        } else if (s !== "highp" && i.substring(0, 15) === "precision highp") return i.replace("precision highp", "precision mediump");
        return i;
    }
    function vo(i, t) {
        return t ? `#version 300 es
${i}` : i;
    }
    const So = {}, Co = {};
    function Mo(i, { name: t = "pixi-program" }, e = !0) {
        t = t.replace(/\s+/g, "-"), t += e ? "-fragment" : "-vertex";
        const s = e ? So : Co;
        return s[t] ? (s[t]++, t += `-${s[t]}`) : s[t] = 1, i.indexOf("#define SHADER_NAME") !== -1 ? i : `${`#define SHADER_NAME ${t}`}
${i}`;
    }
    function Po(i, t) {
        return t ? i.replace("#version 300 es", "") : i;
    }
    const Qe = {
        stripVersion: Po,
        ensurePrecision: bo,
        addProgramDefines: wo,
        setProgramName: Mo,
        insertVersion: vo
    }, Je = Object.create(null), Ir = class xs {
        constructor(t){
            t = {
                ...xs.defaultOptions,
                ...t
            };
            const e = t.fragment.indexOf("#version 300 es") !== -1, s = {
                stripVersion: e,
                ensurePrecision: {
                    requestedFragmentPrecision: t.preferredFragmentPrecision,
                    requestedVertexPrecision: t.preferredVertexPrecision,
                    maxSupportedVertexPrecision: "highp",
                    maxSupportedFragmentPrecision: _o()
                },
                setProgramName: {
                    name: t.name
                },
                addProgramDefines: e,
                insertVersion: e
            };
            let r = t.fragment, n = t.vertex;
            Object.keys(Qe).forEach((o)=>{
                const h = s[o];
                r = Qe[o](r, h, !0), n = Qe[o](n, h, !1);
            }), this.fragment = r, this.vertex = n, this.transformFeedbackVaryings = t.transformFeedbackVaryings, this._key = Es(`${this.vertex}:${this.fragment}`, "gl-program");
        }
        destroy() {
            this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null;
        }
        static from(t) {
            const e = `${t.vertex}:${t.fragment}`;
            return Je[e] || (Je[e] = new xs(t)), Je[e];
        }
    };
    Ir.defaultOptions = {
        preferredVertexPrecision: "highp",
        preferredFragmentPrecision: "mediump"
    };
    Er = Ir;
    const pi = {
        uint8x2: {
            size: 2,
            stride: 2,
            normalised: !1
        },
        uint8x4: {
            size: 4,
            stride: 4,
            normalised: !1
        },
        sint8x2: {
            size: 2,
            stride: 2,
            normalised: !1
        },
        sint8x4: {
            size: 4,
            stride: 4,
            normalised: !1
        },
        unorm8x2: {
            size: 2,
            stride: 2,
            normalised: !0
        },
        unorm8x4: {
            size: 4,
            stride: 4,
            normalised: !0
        },
        snorm8x2: {
            size: 2,
            stride: 2,
            normalised: !0
        },
        snorm8x4: {
            size: 4,
            stride: 4,
            normalised: !0
        },
        uint16x2: {
            size: 2,
            stride: 4,
            normalised: !1
        },
        uint16x4: {
            size: 4,
            stride: 8,
            normalised: !1
        },
        sint16x2: {
            size: 2,
            stride: 4,
            normalised: !1
        },
        sint16x4: {
            size: 4,
            stride: 8,
            normalised: !1
        },
        unorm16x2: {
            size: 2,
            stride: 4,
            normalised: !0
        },
        unorm16x4: {
            size: 4,
            stride: 8,
            normalised: !0
        },
        snorm16x2: {
            size: 2,
            stride: 4,
            normalised: !0
        },
        snorm16x4: {
            size: 4,
            stride: 8,
            normalised: !0
        },
        float16x2: {
            size: 2,
            stride: 4,
            normalised: !1
        },
        float16x4: {
            size: 4,
            stride: 8,
            normalised: !1
        },
        float32: {
            size: 1,
            stride: 4,
            normalised: !1
        },
        float32x2: {
            size: 2,
            stride: 8,
            normalised: !1
        },
        float32x3: {
            size: 3,
            stride: 12,
            normalised: !1
        },
        float32x4: {
            size: 4,
            stride: 16,
            normalised: !1
        },
        uint32: {
            size: 1,
            stride: 4,
            normalised: !1
        },
        uint32x2: {
            size: 2,
            stride: 8,
            normalised: !1
        },
        uint32x3: {
            size: 3,
            stride: 12,
            normalised: !1
        },
        uint32x4: {
            size: 4,
            stride: 16,
            normalised: !1
        },
        sint32: {
            size: 1,
            stride: 4,
            normalised: !1
        },
        sint32x2: {
            size: 2,
            stride: 8,
            normalised: !1
        },
        sint32x3: {
            size: 3,
            stride: 12,
            normalised: !1
        },
        sint32x4: {
            size: 4,
            stride: 16,
            normalised: !1
        }
    };
    Ao = function(i) {
        return pi[i] ?? pi.float32;
    };
    const To = {
        f32: "float32",
        "vec2<f32>": "float32x2",
        "vec3<f32>": "float32x3",
        "vec4<f32>": "float32x4",
        vec2f: "float32x2",
        vec3f: "float32x3",
        vec4f: "float32x4",
        i32: "sint32",
        "vec2<i32>": "sint32x2",
        "vec3<i32>": "sint32x3",
        "vec4<i32>": "sint32x4",
        u32: "uint32",
        "vec2<u32>": "uint32x2",
        "vec3<u32>": "uint32x3",
        "vec4<u32>": "uint32x4",
        bool: "uint32",
        "vec2<bool>": "uint32x2",
        "vec3<bool>": "uint32x3",
        "vec4<bool>": "uint32x4"
    };
    function ko({ source: i, entryPoint: t }) {
        const e = {}, s = i.indexOf(`fn ${t}`);
        if (s !== -1) {
            const r = i.indexOf("->", s);
            if (r !== -1) {
                const n = i.substring(s, r), o = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
                let h;
                for(; (h = o.exec(n)) !== null;){
                    const a = To[h[3]] ?? "float32";
                    e[h[2]] = {
                        location: parseInt(h[1], 10),
                        format: a,
                        stride: Ao(a).stride,
                        offset: 0,
                        instance: !1,
                        start: 0
                    };
                }
            }
        }
        return e;
    }
    function ts(i) {
        const t = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g, e = /@group\((\d+)\)/, s = /@binding\((\d+)\)/, r = /var(<[^>]+>)? (\w+)/, n = /:\s*(\w+)/, o = /struct\s+(\w+)\s*{([^}]+)}/g, h = /(\w+)\s*:\s*([\w\<\>]+)/g, a = /struct\s+(\w+)/, l = i.match(t)?.map((u)=>({
                group: parseInt(u.match(e)[1], 10),
                binding: parseInt(u.match(s)[1], 10),
                name: u.match(r)[2],
                isUniform: u.match(r)[1] === "<uniform>",
                type: u.match(n)[1]
            }));
        if (!l) return {
            groups: [],
            structs: []
        };
        const c = i.match(o)?.map((u)=>{
            const p = u.match(a)[1], d = u.match(h).reduce((x, y)=>{
                const [m, w] = y.split(":");
                return x[m.trim()] = w.trim(), x;
            }, {});
            return d ? {
                name: p,
                members: d
            } : null;
        }).filter(({ name: u })=>l.some((p)=>p.type === u)) ?? [];
        return {
            groups: l,
            structs: c
        };
    }
    var he = ((i)=>(i[i.VERTEX = 1] = "VERTEX", i[i.FRAGMENT = 2] = "FRAGMENT", i[i.COMPUTE = 4] = "COMPUTE", i))(he || {});
    function Io({ groups: i }) {
        const t = [];
        for(let e = 0; e < i.length; e++){
            const s = i[e];
            t[s.group] || (t[s.group] = []), s.isUniform ? t[s.group].push({
                binding: s.binding,
                visibility: he.VERTEX | he.FRAGMENT,
                buffer: {
                    type: "uniform"
                }
            }) : s.type === "sampler" ? t[s.group].push({
                binding: s.binding,
                visibility: he.FRAGMENT,
                sampler: {
                    type: "filtering"
                }
            }) : s.type === "texture_2d" && t[s.group].push({
                binding: s.binding,
                visibility: he.FRAGMENT,
                texture: {
                    sampleType: "float",
                    viewDimension: "2d",
                    multisampled: !1
                }
            });
        }
        return t;
    }
    function Eo({ groups: i }) {
        const t = [];
        for(let e = 0; e < i.length; e++){
            const s = i[e];
            t[s.group] || (t[s.group] = {}), t[s.group][s.name] = s.binding;
        }
        return t;
    }
    function Ro(i, t) {
        const e = new Set, s = new Set, r = [
            ...i.structs,
            ...t.structs
        ].filter((o)=>e.has(o.name) ? !1 : (e.add(o.name), !0)), n = [
            ...i.groups,
            ...t.groups
        ].filter((o)=>{
            const h = `${o.name}-${o.binding}`;
            return s.has(h) ? !1 : (s.add(h), !0);
        });
        return {
            structs: r,
            groups: n
        };
    }
    const es = Object.create(null);
    He = class {
        constructor(t){
            this._layoutKey = 0, this._attributeLocationsKey = 0;
            const { fragment: e, vertex: s, layout: r, gpuLayout: n, name: o } = t;
            if (this.name = o, this.fragment = e, this.vertex = s, e.source === s.source) {
                const h = ts(e.source);
                this.structsAndGroups = h;
            } else {
                const h = ts(s.source), a = ts(e.source);
                this.structsAndGroups = Ro(h, a);
            }
            this.layout = r ?? Eo(this.structsAndGroups), this.gpuLayout = n ?? Io(this.structsAndGroups), this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== void 0, this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== void 0, this._generateProgramKey();
        }
        _generateProgramKey() {
            const { vertex: t, fragment: e } = this, s = t.source + e.source + t.entryPoint + e.entryPoint;
            this._layoutKey = Es(s, "program");
        }
        get attributeData() {
            return this._attributeData ?? (this._attributeData = ko(this.vertex)), this._attributeData;
        }
        destroy() {
            this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null;
        }
        static from(t) {
            const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;
            return es[e] || (es[e] = new He(t)), es[e];
        }
    };
    const Rr = [
        "f32",
        "i32",
        "vec2<f32>",
        "vec3<f32>",
        "vec4<f32>",
        "mat2x2<f32>",
        "mat3x3<f32>",
        "mat4x4<f32>",
        "mat3x2<f32>",
        "mat4x2<f32>",
        "mat2x3<f32>",
        "mat4x3<f32>",
        "mat2x4<f32>",
        "mat3x4<f32>",
        "vec2<i32>",
        "vec3<i32>",
        "vec4<i32>"
    ], Bo = Rr.reduce((i, t)=>(i[t] = !0, i), {});
    function Wo(i, t) {
        switch(i){
            case "f32":
                return 0;
            case "vec2<f32>":
                return new Float32Array(2 * t);
            case "vec3<f32>":
                return new Float32Array(3 * t);
            case "vec4<f32>":
                return new Float32Array(4 * t);
            case "mat2x2<f32>":
                return new Float32Array([
                    1,
                    0,
                    0,
                    1
                ]);
            case "mat3x3<f32>":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                ]);
            case "mat4x4<f32>":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]);
        }
        return null;
    }
    const Br = class Wr {
        constructor(t, e){
            this._touched = 0, this.uid = it("uniform"), this._resourceType = "uniformGroup", this._resourceId = it("resource"), this.isUniformGroup = !0, this._dirtyId = 0, this.destroyed = !1, e = {
                ...Wr.defaultOptions,
                ...e
            }, this.uniformStructures = t;
            const s = {};
            for(const r in t){
                const n = t[r];
                if (n.name = r, n.size = n.size ?? 1, !Bo[n.type]) throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${Rr.join(", ")}`);
                n.value ?? (n.value = Wo(n.type, n.size)), s[r] = n.value;
            }
            this.uniforms = s, this._dirtyId = 1, this.ubo = e.ubo, this.isStatic = e.isStatic, this._signature = Es(Object.keys(s).map((r)=>`${r}-${t[r].type}`).join("-"), "uniform-group");
        }
        update() {
            this._dirtyId++;
        }
    };
    Br.defaultOptions = {
        ubo: !1,
        isStatic: !1
    };
    Hr = Br;
    Te = class {
        constructor(t){
            this.resources = Object.create(null), this._dirty = !0;
            let e = 0;
            for(const s in t){
                const r = t[s];
                this.setResource(r, e++);
            }
            this._updateKey();
        }
        _updateKey() {
            if (!this._dirty) return;
            this._dirty = !1;
            const t = [];
            let e = 0;
            for(const s in this.resources)t[e++] = this.resources[s]._resourceId;
            this._key = t.join("|");
        }
        setResource(t, e) {
            const s = this.resources[e];
            t !== s && (s && t.off?.("change", this.onResourceChange, this), t.on?.("change", this.onResourceChange, this), this.resources[e] = t, this._dirty = !0);
        }
        getResource(t) {
            return this.resources[t];
        }
        _touch(t) {
            const e = this.resources;
            for(const s in e)e[s]._touched = t;
        }
        destroy() {
            const t = this.resources;
            for(const e in t)t[e].off?.("change", this.onResourceChange, this);
            this.resources = null;
        }
        onResourceChange(t) {
            if (this._dirty = !0, t.destroyed) {
                const e = this.resources;
                for(const s in e)e[s] === t && (e[s] = null);
            } else this._updateKey();
        }
    };
    ys = ((i)=>(i[i.WEBGL = 1] = "WEBGL", i[i.WEBGPU = 2] = "WEBGPU", i[i.BOTH = 3] = "BOTH", i))(ys || {});
    Rs = class extends At {
        constructor(t){
            super(), this.uid = it("shader"), this._uniformBindMap = Object.create(null), this._ownedBindGroups = [];
            let { gpuProgram: e, glProgram: s, groups: r, resources: n, compatibleRenderers: o, groupMap: h } = t;
            this.gpuProgram = e, this.glProgram = s, o === void 0 && (o = 0, e && (o |= ys.WEBGPU), s && (o |= ys.WEBGL)), this.compatibleRenderers = o;
            const a = {};
            if (!n && !r && (n = {}), n && r) throw new Error("[Shader] Cannot have both resources and groups");
            if (!e && r && !h) throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
            if (!e && r && h) for(const l in h)for(const c in h[l]){
                const u = h[l][c];
                a[u] = {
                    group: l,
                    binding: c,
                    name: u
                };
            }
            else if (e && r && !h) {
                const l = e.structsAndGroups.groups;
                h = {}, l.forEach((c)=>{
                    h[c.group] = h[c.group] || {}, h[c.group][c.binding] = c.name, a[c.name] = c;
                });
            } else if (n) {
                r = {}, h = {}, e && e.structsAndGroups.groups.forEach((u)=>{
                    h[u.group] = h[u.group] || {}, h[u.group][u.binding] = u.name, a[u.name] = u;
                });
                let l = 0;
                for(const c in n)a[c] || (r[99] || (r[99] = new Te, this._ownedBindGroups.push(r[99])), a[c] = {
                    group: 99,
                    binding: l,
                    name: c
                }, h[99] = h[99] || {}, h[99][l] = c, l++);
                for(const c in n){
                    const u = c;
                    let p = n[c];
                    !p.source && !p._resourceType && (p = new Hr(p));
                    const d = a[u];
                    d && (r[d.group] || (r[d.group] = new Te, this._ownedBindGroups.push(r[d.group])), r[d.group].setResource(p, d.binding));
                }
            }
            this.groups = r, this._uniformBindMap = h, this.resources = this._buildResourceAccessor(r, a);
        }
        addResource(t, e, s) {
            var r, n;
            (r = this._uniformBindMap)[e] || (r[e] = {}), (n = this._uniformBindMap[e])[s] || (n[s] = t), this.groups[e] || (this.groups[e] = new Te, this._ownedBindGroups.push(this.groups[e]));
        }
        _buildResourceAccessor(t, e) {
            const s = {};
            for(const r in e){
                const n = e[r];
                Object.defineProperty(s, n.name, {
                    get () {
                        return t[n.group].getResource(n.binding);
                    },
                    set (o) {
                        t[n.group].setResource(o, n.binding);
                    }
                });
            }
            return s;
        }
        destroy(t = !1) {
            this.emit("destroy", this), t && (this.gpuProgram?.destroy(), this.glProgram?.destroy()), this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach((e)=>{
                e.destroy();
            }), this._ownedBindGroups = null, this.resources = null, this.groups = null;
        }
        static from(t) {
            const { gpu: e, gl: s, ...r } = t;
            let n, o;
            return e && (n = He.from(e)), s && (o = Er.from(s)), new Rs({
                gpuProgram: n,
                glProgram: o,
                ...r
            });
        }
    };
    const _s = [];
    Pt.handleByNamedList(Z.Environment, _s);
    async function Ho(i) {
        if (!i) for(let t = 0; t < _s.length; t++){
            const e = _s[t];
            if (e.value.test()) {
                await e.value.load();
                return;
            }
        }
    }
    let ee;
    Fo = function() {
        if (typeof ee == "boolean") return ee;
        try {
            ee = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
                a: "b"
            }, "a", "b") === !0;
        } catch  {
            ee = !1;
        }
        return ee;
    };
    var be = {
        exports: {}
    }, mi;
    function Go() {
        if (mi) return be.exports;
        mi = 1, be.exports = i, be.exports.default = i;
        function i(f, g, _) {
            _ = _ || 2;
            var v = g && g.length, C = v ? g[0] * _ : f.length, M = t(f, 0, C, _, !0), P = [];
            if (!M || M.next === M.prev) return P;
            var I, F, H, V, N, D, et;
            if (v && (M = a(f, g, M, _)), f.length > 80 * _) {
                I = H = f[0], F = V = f[1];
                for(var X = _; X < C; X += _)N = f[X], D = f[X + 1], N < I && (I = N), D < F && (F = D), N > H && (H = N), D > V && (V = D);
                et = Math.max(H - I, V - F), et = et !== 0 ? 32767 / et : 0;
            }
            return s(M, P, _, I, F, et, 0), P;
        }
        function t(f, g, _, v, C) {
            var M, P;
            if (C === kt(f, g, _, v) > 0) for(M = g; M < _; M += v)P = q(M, f[M], f[M + 1], P);
            else for(M = _ - v; M >= g; M -= v)P = q(M, f[M], f[M + 1], P);
            return P && A(P, P.next) && (j(P), P = P.next), P;
        }
        function e(f, g) {
            if (!f) return f;
            g || (g = f);
            var _ = f, v;
            do if (v = !1, !_.steiner && (A(_, _.next) || S(_.prev, _, _.next) === 0)) {
                if (j(_), _ = g = _.prev, _ === _.next) break;
                v = !0;
            } else _ = _.next;
            while (v || _ !== g);
            return g;
        }
        function s(f, g, _, v, C, M, P) {
            if (f) {
                !P && M && d(f, v, C, M);
                for(var I = f, F, H; f.prev !== f.next;){
                    if (F = f.prev, H = f.next, M ? n(f, v, C, M) : r(f)) {
                        g.push(F.i / _ | 0), g.push(f.i / _ | 0), g.push(H.i / _ | 0), j(f), f = H.next, I = H.next;
                        continue;
                    }
                    if (f = H, f === I) {
                        P ? P === 1 ? (f = o(e(f), g, _), s(f, g, _, v, C, M, 2)) : P === 2 && h(f, g, _, v, C, M) : s(e(f), g, _, v, C, M, 1);
                        break;
                    }
                }
            }
        }
        function r(f) {
            var g = f.prev, _ = f, v = f.next;
            if (S(g, _, v) >= 0) return !1;
            for(var C = g.x, M = _.x, P = v.x, I = g.y, F = _.y, H = v.y, V = C < M ? C < P ? C : P : M < P ? M : P, N = I < F ? I < H ? I : H : F < H ? F : H, D = C > M ? C > P ? C : P : M > P ? M : P, et = I > F ? I > H ? I : H : F > H ? F : H, X = v.next; X !== g;){
                if (X.x >= V && X.x <= D && X.y >= N && X.y <= et && w(C, I, M, F, P, H, X.x, X.y) && S(X.prev, X, X.next) >= 0) return !1;
                X = X.next;
            }
            return !0;
        }
        function n(f, g, _, v) {
            var C = f.prev, M = f, P = f.next;
            if (S(C, M, P) >= 0) return !1;
            for(var I = C.x, F = M.x, H = P.x, V = C.y, N = M.y, D = P.y, et = I < F ? I < H ? I : H : F < H ? F : H, X = V < N ? V < D ? V : D : N < D ? N : D, It = I > F ? I > H ? I : H : F > H ? F : H, ut = V > N ? V > D ? V : D : N > D ? N : D, bt = y(et, X, g, _, v), vt = y(It, ut, g, _, v), L = f.prevZ, Y = f.nextZ; L && L.z >= bt && Y && Y.z <= vt;){
                if (L.x >= et && L.x <= It && L.y >= X && L.y <= ut && L !== C && L !== P && w(I, V, F, N, H, D, L.x, L.y) && S(L.prev, L, L.next) >= 0 || (L = L.prevZ, Y.x >= et && Y.x <= It && Y.y >= X && Y.y <= ut && Y !== C && Y !== P && w(I, V, F, N, H, D, Y.x, Y.y) && S(Y.prev, Y, Y.next) >= 0)) return !1;
                Y = Y.nextZ;
            }
            for(; L && L.z >= bt;){
                if (L.x >= et && L.x <= It && L.y >= X && L.y <= ut && L !== C && L !== P && w(I, V, F, N, H, D, L.x, L.y) && S(L.prev, L, L.next) >= 0) return !1;
                L = L.prevZ;
            }
            for(; Y && Y.z <= vt;){
                if (Y.x >= et && Y.x <= It && Y.y >= X && Y.y <= ut && Y !== C && Y !== P && w(I, V, F, N, H, D, Y.x, Y.y) && S(Y.prev, Y, Y.next) >= 0) return !1;
                Y = Y.nextZ;
            }
            return !0;
        }
        function o(f, g, _) {
            var v = f;
            do {
                var C = v.prev, M = v.next.next;
                !A(C, M) && E(C, v, v.next, M) && G(C, M) && G(M, C) && (g.push(C.i / _ | 0), g.push(v.i / _ | 0), g.push(M.i / _ | 0), j(v), j(v.next), v = f = M), v = v.next;
            }while (v !== f);
            return e(v);
        }
        function h(f, g, _, v, C, M) {
            var P = f;
            do {
                for(var I = P.next.next; I !== P.prev;){
                    if (P.i !== I.i && b(P, I)) {
                        var F = B(P, I);
                        P = e(P, P.next), F = e(F, F.next), s(P, g, _, v, C, M, 0), s(F, g, _, v, C, M, 0);
                        return;
                    }
                    I = I.next;
                }
                P = P.next;
            }while (P !== f);
        }
        function a(f, g, _, v) {
            var C = [], M, P, I, F, H;
            for(M = 0, P = g.length; M < P; M++)I = g[M] * v, F = M < P - 1 ? g[M + 1] * v : f.length, H = t(f, I, F, v, !1), H === H.next && (H.steiner = !0), C.push(m(H));
            for(C.sort(l), M = 0; M < C.length; M++)_ = c(C[M], _);
            return _;
        }
        function l(f, g) {
            return f.x - g.x;
        }
        function c(f, g) {
            var _ = u(f, g);
            if (!_) return g;
            var v = B(_, f);
            return e(v, v.next), e(_, _.next);
        }
        function u(f, g) {
            var _ = g, v = f.x, C = f.y, M = -1 / 0, P;
            do {
                if (C <= _.y && C >= _.next.y && _.next.y !== _.y) {
                    var I = _.x + (C - _.y) * (_.next.x - _.x) / (_.next.y - _.y);
                    if (I <= v && I > M && (M = I, P = _.x < _.next.x ? _ : _.next, I === v)) return P;
                }
                _ = _.next;
            }while (_ !== g);
            if (!P) return null;
            var F = P, H = P.x, V = P.y, N = 1 / 0, D;
            _ = P;
            do v >= _.x && _.x >= H && v !== _.x && w(C < V ? v : M, C, H, V, C < V ? M : v, C, _.x, _.y) && (D = Math.abs(C - _.y) / (v - _.x), G(_, f) && (D < N || D === N && (_.x > P.x || _.x === P.x && p(P, _))) && (P = _, N = D)), _ = _.next;
            while (_ !== F);
            return P;
        }
        function p(f, g) {
            return S(f.prev, f, g.prev) < 0 && S(g.next, f, f.next) < 0;
        }
        function d(f, g, _, v) {
            var C = f;
            do C.z === 0 && (C.z = y(C.x, C.y, g, _, v)), C.prevZ = C.prev, C.nextZ = C.next, C = C.next;
            while (C !== f);
            C.prevZ.nextZ = null, C.prevZ = null, x(C);
        }
        function x(f) {
            var g, _, v, C, M, P, I, F, H = 1;
            do {
                for(_ = f, f = null, M = null, P = 0; _;){
                    for(P++, v = _, I = 0, g = 0; g < H && (I++, v = v.nextZ, !!v); g++);
                    for(F = H; I > 0 || F > 0 && v;)I !== 0 && (F === 0 || !v || _.z <= v.z) ? (C = _, _ = _.nextZ, I--) : (C = v, v = v.nextZ, F--), M ? M.nextZ = C : f = C, C.prevZ = M, M = C;
                    _ = v;
                }
                M.nextZ = null, H *= 2;
            }while (P > 1);
            return f;
        }
        function y(f, g, _, v, C) {
            return f = (f - _) * C | 0, g = (g - v) * C | 0, f = (f | f << 8) & 16711935, f = (f | f << 4) & 252645135, f = (f | f << 2) & 858993459, f = (f | f << 1) & 1431655765, g = (g | g << 8) & 16711935, g = (g | g << 4) & 252645135, g = (g | g << 2) & 858993459, g = (g | g << 1) & 1431655765, f | g << 1;
        }
        function m(f) {
            var g = f, _ = f;
            do (g.x < _.x || g.x === _.x && g.y < _.y) && (_ = g), g = g.next;
            while (g !== f);
            return _;
        }
        function w(f, g, _, v, C, M, P, I) {
            return (C - P) * (g - I) >= (f - P) * (M - I) && (f - P) * (v - I) >= (_ - P) * (g - I) && (_ - P) * (M - I) >= (C - P) * (v - I);
        }
        function b(f, g) {
            return f.next.i !== g.i && f.prev.i !== g.i && !z(f, g) && (G(f, g) && G(g, f) && R(f, g) && (S(f.prev, f, g.prev) || S(f, g.prev, g)) || A(f, g) && S(f.prev, f, f.next) > 0 && S(g.prev, g, g.next) > 0);
        }
        function S(f, g, _) {
            return (g.y - f.y) * (_.x - g.x) - (g.x - f.x) * (_.y - g.y);
        }
        function A(f, g) {
            return f.x === g.x && f.y === g.y;
        }
        function E(f, g, _, v) {
            var C = k(S(f, g, _)), M = k(S(f, g, v)), P = k(S(_, v, f)), I = k(S(_, v, g));
            return !!(C !== M && P !== I || C === 0 && T(f, _, g) || M === 0 && T(f, v, g) || P === 0 && T(_, f, v) || I === 0 && T(_, g, v));
        }
        function T(f, g, _) {
            return g.x <= Math.max(f.x, _.x) && g.x >= Math.min(f.x, _.x) && g.y <= Math.max(f.y, _.y) && g.y >= Math.min(f.y, _.y);
        }
        function k(f) {
            return f > 0 ? 1 : f < 0 ? -1 : 0;
        }
        function z(f, g) {
            var _ = f;
            do {
                if (_.i !== f.i && _.next.i !== f.i && _.i !== g.i && _.next.i !== g.i && E(_, _.next, f, g)) return !0;
                _ = _.next;
            }while (_ !== f);
            return !1;
        }
        function G(f, g) {
            return S(f.prev, f, f.next) < 0 ? S(f, g, f.next) >= 0 && S(f, f.prev, g) >= 0 : S(f, g, f.prev) < 0 || S(f, f.next, g) < 0;
        }
        function R(f, g) {
            var _ = f, v = !1, C = (f.x + g.x) / 2, M = (f.y + g.y) / 2;
            do _.y > M != _.next.y > M && _.next.y !== _.y && C < (_.next.x - _.x) * (M - _.y) / (_.next.y - _.y) + _.x && (v = !v), _ = _.next;
            while (_ !== f);
            return v;
        }
        function B(f, g) {
            var _ = new rt(f.i, f.x, f.y), v = new rt(g.i, g.x, g.y), C = f.next, M = g.prev;
            return f.next = g, g.prev = f, _.next = C, C.prev = _, v.next = _, _.prev = v, M.next = v, v.prev = M, v;
        }
        function q(f, g, _, v) {
            var C = new rt(f, g, _);
            return v ? (C.next = v.next, C.prev = v, v.next.prev = C, v.next = C) : (C.prev = C, C.next = C), C;
        }
        function j(f) {
            f.next.prev = f.prev, f.prev.next = f.next, f.prevZ && (f.prevZ.nextZ = f.nextZ), f.nextZ && (f.nextZ.prevZ = f.prevZ);
        }
        function rt(f, g, _) {
            this.i = f, this.x = g, this.y = _, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
        }
        i.deviation = function(f, g, _, v) {
            var C = g && g.length, M = C ? g[0] * _ : f.length, P = Math.abs(kt(f, 0, M, _));
            if (C) for(var I = 0, F = g.length; I < F; I++){
                var H = g[I] * _, V = I < F - 1 ? g[I + 1] * _ : f.length;
                P -= Math.abs(kt(f, H, V, _));
            }
            var N = 0;
            for(I = 0; I < v.length; I += 3){
                var D = v[I] * _, et = v[I + 1] * _, X = v[I + 2] * _;
                N += Math.abs((f[D] - f[X]) * (f[et + 1] - f[D + 1]) - (f[D] - f[et]) * (f[X + 1] - f[D + 1]));
            }
            return P === 0 && N === 0 ? 0 : Math.abs((N - P) / P);
        };
        function kt(f, g, _, v) {
            for(var C = 0, M = g, P = _ - v; M < _; M += v)C += (f[P] - f[M]) * (f[M + 1] + f[P + 1]), P = M;
            return C;
        }
        return i.flatten = function(f) {
            for(var g = f[0][0].length, _ = {
                vertices: [],
                holes: [],
                dimensions: g
            }, v = 0, C = 0; C < f.length; C++){
                for(var M = 0; M < f[C].length; M++)for(var P = 0; P < g; P++)_.vertices.push(f[C][M][P]);
                C > 0 && (v += f[C - 1].length, _.holes.push(v));
            }
            return _;
        }, be.exports;
    }
    var zo = Go();
    const Lo = Ps(zo);
    Fr = ((i)=>(i[i.NONE = 0] = "NONE", i[i.COLOR = 16384] = "COLOR", i[i.STENCIL = 1024] = "STENCIL", i[i.DEPTH = 256] = "DEPTH", i[i.COLOR_DEPTH = 16640] = "COLOR_DEPTH", i[i.COLOR_STENCIL = 17408] = "COLOR_STENCIL", i[i.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", i[i.ALL = 17664] = "ALL", i))(Fr || {});
    Oo = class {
        constructor(t){
            this.items = [], this._name = t;
        }
        emit(t, e, s, r, n, o, h, a) {
            const { name: l, items: c } = this;
            for(let u = 0, p = c.length; u < p; u++)c[u][l](t, e, s, r, n, o, h, a);
            return this;
        }
        add(t) {
            return t[this._name] && (this.remove(t), this.items.push(t)), this;
        }
        remove(t) {
            const e = this.items.indexOf(t);
            return e !== -1 && this.items.splice(e, 1), this;
        }
        contains(t) {
            return this.items.indexOf(t) !== -1;
        }
        removeAll() {
            return this.items.length = 0, this;
        }
        destroy() {
            this.removeAll(), this.items = null, this._name = null;
        }
        get empty() {
            return this.items.length === 0;
        }
        get name() {
            return this._name;
        }
    };
    const Do = [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "resetState",
        "renderEnd",
        "renderStart",
        "render",
        "update",
        "postrender",
        "prerender"
    ], Gr = class zr extends At {
        constructor(t){
            super(), this.runners = Object.create(null), this.renderPipes = Object.create(null), this._initOptions = {}, this._systemsHash = Object.create(null), this.type = t.type, this.name = t.name, this.config = t;
            const e = [
                ...Do,
                ...this.config.runners ?? []
            ];
            this._addRunners(...e), this._unsafeEvalCheck();
        }
        async init(t = {}) {
            const e = t.skipExtensionImports === !0 ? !0 : t.manageImports === !1;
            await Ho(e), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
            for(const s in this._systemsHash)t = {
                ...this._systemsHash[s].constructor.defaultOptions,
                ...t
            };
            t = {
                ...zr.defaultOptions,
                ...t
            }, this._roundPixels = t.roundPixels ? 1 : 0;
            for(let s = 0; s < this.runners.init.items.length; s++)await this.runners.init.items[s].init(t);
            this._initOptions = t;
        }
        render(t, e) {
            let s = t;
            if (s instanceof Wt && (s = {
                container: s
            }, e && (K(st, "passing a second argument is deprecated, please use render options instead"), s.target = e.renderTexture)), s.target || (s.target = this.view.renderTarget), s.target === this.view.renderTarget && (this._lastObjectRendered = s.container, s.clearColor ?? (s.clearColor = this.background.colorRgba), s.clear ?? (s.clear = this.background.clearBeforeRender)), s.clearColor) {
                const r = Array.isArray(s.clearColor) && s.clearColor.length === 4;
                s.clearColor = r ? s.clearColor : ot.shared.setValue(s.clearColor).toArray();
            }
            s.transform || (s.container.updateLocalTransform(), s.transform = s.container.localTransform), s.container.enableRenderGroup(), this.runners.prerender.emit(s), this.runners.renderStart.emit(s), this.runners.render.emit(s), this.runners.renderEnd.emit(s), this.runners.postrender.emit(s);
        }
        resize(t, e, s) {
            const r = this.view.resolution;
            this.view.resize(t, e, s), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), s !== void 0 && s !== r && this.runners.resolutionChange.emit(s);
        }
        clear(t = {}) {
            const e = this;
            t.target || (t.target = e.renderTarget.renderTarget), t.clearColor || (t.clearColor = this.background.colorRgba), t.clear ?? (t.clear = Fr.ALL);
            const { clear: s, clearColor: r, target: n } = t;
            ot.shared.setValue(r ?? this.background.colorRgba), e.renderTarget.clear(n, s, ot.shared.toArray());
        }
        get resolution() {
            return this.view.resolution;
        }
        set resolution(t) {
            this.view.resolution = t, this.runners.resolutionChange.emit(t);
        }
        get width() {
            return this.view.texture.frame.width;
        }
        get height() {
            return this.view.texture.frame.height;
        }
        get canvas() {
            return this.view.canvas;
        }
        get lastObjectRendered() {
            return this._lastObjectRendered;
        }
        get renderingToScreen() {
            return this.renderTarget.renderingToScreen;
        }
        get screen() {
            return this.view.screen;
        }
        _addRunners(...t) {
            t.forEach((e)=>{
                this.runners[e] = new Oo(e);
            });
        }
        _addSystems(t) {
            let e;
            for(e in t){
                const s = t[e];
                this._addSystem(s.value, s.name);
            }
        }
        _addSystem(t, e) {
            const s = new t(this);
            if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
            this[e] = s, this._systemsHash[e] = s;
            for(const r in this.runners)this.runners[r].add(s);
            return this;
        }
        _addPipes(t, e) {
            const s = e.reduce((r, n)=>(r[n.name] = n.value, r), {});
            t.forEach((r)=>{
                const n = r.value, o = r.name, h = s[o];
                this.renderPipes[o] = new n(this, h ? new h : null);
            });
        }
        destroy(t = !1) {
            this.runners.destroy.items.reverse(), this.runners.destroy.emit(t), Object.values(this.runners).forEach((e)=>{
                e.destroy();
            }), this._systemsHash = null, this.renderPipes = null;
        }
        generateTexture(t) {
            return this.textureGenerator.generateTexture(t);
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        _unsafeEvalCheck() {
            if (!Fo()) throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
        }
        resetState() {
            this.runners.resetState.emit();
        }
    };
    Gr.defaultOptions = {
        resolution: 1,
        failIfMajorPerformanceCaveat: !1,
        roundPixels: !1
    };
    let ve;
    Lr = Gr;
    function Uo(i) {
        return ve !== void 0 || (ve = (()=>{
            const t = {
                stencil: !0,
                failIfMajorPerformanceCaveat: i ?? Lr.defaultOptions.failIfMajorPerformanceCaveat
            };
            try {
                if (!yt.get().getWebGLRenderingContext()) return !1;
                let s = yt.get().createCanvas().getContext("webgl", t);
                const r = !!s?.getContextAttributes()?.stencil;
                if (s) {
                    const n = s.getExtension("WEBGL_lose_context");
                    n && n.loseContext();
                }
                return s = null, r;
            } catch  {
                return !1;
            }
        })()), ve;
    }
    let Se;
    async function Yo(i = {}) {
        return Se !== void 0 || (Se = await (async ()=>{
            const t = yt.get().getNavigator().gpu;
            if (!t) return !1;
            try {
                return await (await t.requestAdapter(i)).requestDevice(), !0;
            } catch  {
                return !1;
            }
        })()), Se;
    }
    const gi = [
        "webgl",
        "webgpu",
        "canvas"
    ];
    async function Xo(i) {
        let t = [];
        i.preference ? (t.push(i.preference), gi.forEach((n)=>{
            n !== i.preference && t.push(n);
        })) : t = gi.slice();
        let e, s = {};
        for(let n = 0; n < t.length; n++){
            const o = t[n];
            if (o === "webgpu" && await Yo()) {
                const { WebGPURenderer: h } = await Ie(async ()=>{
                    const { WebGPURenderer: a } = await import("./WebGPURenderer-iSjqTesO.js");
                    return {
                        WebGPURenderer: a
                    };
                }, __vite__mapDeps([4,2,5,3]), import.meta.url);
                e = h, s = {
                    ...i,
                    ...i.webgpu
                };
                break;
            } else if (o === "webgl" && Uo(i.failIfMajorPerformanceCaveat ?? Lr.defaultOptions.failIfMajorPerformanceCaveat)) {
                const { WebGLRenderer: h } = await Ie(async ()=>{
                    const { WebGLRenderer: a } = await import("./WebGLRenderer-CjboFFue.js");
                    return {
                        WebGLRenderer: a
                    };
                }, __vite__mapDeps([6,2,5]), import.meta.url);
                e = h, s = {
                    ...i,
                    ...i.webgl
                };
                break;
            } else if (o === "canvas") throw s = {
                ...i
            }, new Error("CanvasRenderer is not yet implemented");
        }
        if (delete s.webgpu, delete s.webgl, !e) throw new Error("No available renderer for the current environment");
        const r = new e;
        return await r.init(s), r;
    }
    const xi = [
        {
            offset: 0,
            color: "white"
        },
        {
            offset: 1,
            color: "black"
        }
    ], Bs = class ws {
        constructor(...t){
            this.uid = it("fillGradient"), this.type = "linear", this.colorStops = [];
            let e = Vo(t);
            e = {
                ...e.type === "radial" ? ws.defaultRadialOptions : ws.defaultLinearOptions,
                ...Ji(e)
            }, this._textureSize = e.textureSize, this._wrapMode = e.wrapMode, e.type === "radial" ? (this.center = e.center, this.outerCenter = e.outerCenter ?? this.center, this.innerRadius = e.innerRadius, this.outerRadius = e.outerRadius, this.scale = e.scale, this.rotation = e.rotation) : (this.start = e.start, this.end = e.end), this.textureSpace = e.textureSpace, this.type = e.type, e.colorStops.forEach((r)=>{
                this.addColorStop(r.offset, r.color);
            });
        }
        addColorStop(t, e) {
            return this.colorStops.push({
                offset: t,
                color: ot.shared.setValue(e).toHexa()
            }), this;
        }
        buildLinearGradient() {
            if (this.texture) return;
            let { x: t, y: e } = this.start, { x: s, y: r } = this.end, n = s - t, o = r - e;
            const h = n < 0 || o < 0;
            if (this._wrapMode === "clamp-to-edge") {
                if (n < 0) {
                    const m = t;
                    t = s, s = m, n *= -1;
                }
                if (o < 0) {
                    const m = e;
                    e = r, r = m, o *= -1;
                }
            }
            const a = this.colorStops.length ? this.colorStops : xi, l = this._textureSize, { canvas: c, context: u } = _i(l, 1), p = h ? u.createLinearGradient(this._textureSize, 0, 0, 0) : u.createLinearGradient(0, 0, this._textureSize, 0);
            yi(p, a), u.fillStyle = p, u.fillRect(0, 0, l, 1), this.texture = new $({
                source: new Ee({
                    resource: c,
                    addressMode: this._wrapMode
                })
            });
            const d = Math.sqrt(n * n + o * o), x = Math.atan2(o, n), y = new U;
            y.scale(d / l, 1), y.rotate(x), y.translate(t, e), this.textureSpace === "local" && y.scale(l, l), this.transform = y;
        }
        buildGradient() {
            this.type === "linear" ? this.buildLinearGradient() : this.buildRadialGradient();
        }
        buildRadialGradient() {
            if (this.texture) return;
            const t = this.colorStops.length ? this.colorStops : xi, e = this._textureSize, { canvas: s, context: r } = _i(e, e), { x: n, y: o } = this.center, { x: h, y: a } = this.outerCenter, l = this.innerRadius, c = this.outerRadius, u = h - c, p = a - c, d = e / (c * 2), x = (n - u) * d, y = (o - p) * d, m = r.createRadialGradient(x, y, l * d, (h - u) * d, (a - p) * d, c * d);
            yi(m, t), r.fillStyle = t[t.length - 1].color, r.fillRect(0, 0, e, e), r.fillStyle = m, r.translate(x, y), r.rotate(this.rotation), r.scale(1, this.scale), r.translate(-x, -y), r.fillRect(0, 0, e, e), this.texture = new $({
                source: new Ee({
                    resource: s,
                    addressMode: this._wrapMode
                })
            });
            const w = new U;
            w.scale(1 / d, 1 / d), w.translate(u, p), this.textureSpace === "local" && w.scale(e, e), this.transform = w;
        }
        get styleKey() {
            return this.uid;
        }
        destroy() {
            this.texture?.destroy(!0), this.texture = null;
        }
    };
    Bs.defaultLinearOptions = {
        start: {
            x: 0,
            y: 0
        },
        end: {
            x: 0,
            y: 1
        },
        colorStops: [],
        textureSpace: "local",
        type: "linear",
        textureSize: 256,
        wrapMode: "clamp-to-edge"
    };
    Bs.defaultRadialOptions = {
        center: {
            x: .5,
            y: .5
        },
        innerRadius: 0,
        outerRadius: .5,
        colorStops: [],
        scale: 1,
        textureSpace: "local",
        type: "radial",
        textureSize: 256,
        wrapMode: "clamp-to-edge"
    };
    Gt = Bs;
    function yi(i, t) {
        for(let e = 0; e < t.length; e++){
            const s = t[e];
            i.addColorStop(s.offset, s.color);
        }
    }
    function _i(i, t) {
        const e = yt.get().createCanvas(i, t), s = e.getContext("2d");
        return {
            canvas: e,
            context: s
        };
    }
    function Vo(i) {
        let t = i[0] ?? {};
        return (typeof t == "number" || i[1]) && (K("8.5.2", "use options object instead"), t = {
            type: "linear",
            start: {
                x: i[0],
                y: i[1]
            },
            end: {
                x: i[2],
                y: i[3]
            },
            textureSpace: i[4],
            textureSize: i[5] ?? Gt.defaultLinearOptions.textureSize
        }), t;
    }
    const wi = {
        repeat: {
            addressModeU: "repeat",
            addressModeV: "repeat"
        },
        "repeat-x": {
            addressModeU: "repeat",
            addressModeV: "clamp-to-edge"
        },
        "repeat-y": {
            addressModeU: "clamp-to-edge",
            addressModeV: "repeat"
        },
        "no-repeat": {
            addressModeU: "clamp-to-edge",
            addressModeV: "clamp-to-edge"
        }
    };
    Ws = class {
        constructor(t, e){
            this.uid = it("fillPattern"), this.transform = new U, this._styleKey = null, this.texture = t, this.transform.scale(1 / t.frame.width, 1 / t.frame.height), e && (t.source.style.addressModeU = wi[e].addressModeU, t.source.style.addressModeV = wi[e].addressModeV);
        }
        setTransform(t) {
            const e = this.texture;
            this.transform.copyFrom(t), this.transform.invert(), this.transform.scale(1 / e.frame.width, 1 / e.frame.height), this._styleKey = null;
        }
        get styleKey() {
            return this._styleKey ? this._styleKey : (this._styleKey = `fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`, this._styleKey);
        }
    };
    var ss, bi;
    function No() {
        if (bi) return ss;
        bi = 1, ss = e;
        var i = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, t = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
        function e(n) {
            var o = [];
            return n.replace(t, function(h, a, l) {
                var c = a.toLowerCase();
                for(l = r(l), c == "m" && l.length > 2 && (o.push([
                    a
                ].concat(l.splice(0, 2))), c = "l", a = a == "m" ? "l" : "L");;){
                    if (l.length == i[c]) return l.unshift(a), o.push(l);
                    if (l.length < i[c]) throw new Error("malformed path data");
                    o.push([
                        a
                    ].concat(l.splice(0, i[c])));
                }
            }), o;
        }
        var s = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
        function r(n) {
            var o = n.match(s);
            return o ? o.map(Number) : [];
        }
        return ss;
    }
    var $o = No();
    const jo = Ps($o);
    function qo(i, t) {
        const e = jo(i), s = [];
        let r = null, n = 0, o = 0;
        for(let h = 0; h < e.length; h++){
            const a = e[h], l = a[0], c = a;
            switch(l){
                case "M":
                    n = c[1], o = c[2], t.moveTo(n, o);
                    break;
                case "m":
                    n += c[1], o += c[2], t.moveTo(n, o);
                    break;
                case "H":
                    n = c[1], t.lineTo(n, o);
                    break;
                case "h":
                    n += c[1], t.lineTo(n, o);
                    break;
                case "V":
                    o = c[1], t.lineTo(n, o);
                    break;
                case "v":
                    o += c[1], t.lineTo(n, o);
                    break;
                case "L":
                    n = c[1], o = c[2], t.lineTo(n, o);
                    break;
                case "l":
                    n += c[1], o += c[2], t.lineTo(n, o);
                    break;
                case "C":
                    n = c[5], o = c[6], t.bezierCurveTo(c[1], c[2], c[3], c[4], n, o);
                    break;
                case "c":
                    t.bezierCurveTo(n + c[1], o + c[2], n + c[3], o + c[4], n + c[5], o + c[6]), n += c[5], o += c[6];
                    break;
                case "S":
                    n = c[3], o = c[4], t.bezierCurveToShort(c[1], c[2], n, o);
                    break;
                case "s":
                    t.bezierCurveToShort(n + c[1], o + c[2], n + c[3], o + c[4]), n += c[3], o += c[4];
                    break;
                case "Q":
                    n = c[3], o = c[4], t.quadraticCurveTo(c[1], c[2], n, o);
                    break;
                case "q":
                    t.quadraticCurveTo(n + c[1], o + c[2], n + c[3], o + c[4]), n += c[3], o += c[4];
                    break;
                case "T":
                    n = c[1], o = c[2], t.quadraticCurveToShort(n, o);
                    break;
                case "t":
                    n += c[1], o += c[2], t.quadraticCurveToShort(n, o);
                    break;
                case "A":
                    n = c[6], o = c[7], t.arcToSvg(c[1], c[2], c[3], c[4], c[5], n, o);
                    break;
                case "a":
                    n += c[6], o += c[7], t.arcToSvg(c[1], c[2], c[3], c[4], c[5], n, o);
                    break;
                case "Z":
                case "z":
                    t.closePath(), s.length > 0 && (r = s.pop(), r ? (n = r.startX, o = r.startY) : (n = 0, o = 0)), r = null;
                    break;
                default:
                    ft(`Unknown SVG path command: ${l}`);
            }
            l !== "Z" && l !== "z" && r === null && (r = {
                startX: n,
                startY: o
            }, s.push(r));
        }
        return t;
    }
    class Hs {
        constructor(t = 0, e = 0, s = 0){
            this.type = "circle", this.x = t, this.y = e, this.radius = s;
        }
        clone() {
            return new Hs(this.x, this.y, this.radius);
        }
        contains(t, e) {
            if (this.radius <= 0) return !1;
            const s = this.radius * this.radius;
            let r = this.x - t, n = this.y - e;
            return r *= r, n *= n, r + n <= s;
        }
        strokeContains(t, e, s, r = .5) {
            if (this.radius === 0) return !1;
            const n = this.x - t, o = this.y - e, h = this.radius, a = (1 - r) * s, l = Math.sqrt(n * n + o * o);
            return l <= h + a && l > h - (s - a);
        }
        getBounds(t) {
            return t || (t = new J), t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = this.radius * 2, t.height = this.radius * 2, t;
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.radius = t.radius, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        toString() {
            return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
        }
    }
    class Fs {
        constructor(t = 0, e = 0, s = 0, r = 0){
            this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = s, this.halfHeight = r;
        }
        clone() {
            return new Fs(this.x, this.y, this.halfWidth, this.halfHeight);
        }
        contains(t, e) {
            if (this.halfWidth <= 0 || this.halfHeight <= 0) return !1;
            let s = (t - this.x) / this.halfWidth, r = (e - this.y) / this.halfHeight;
            return s *= s, r *= r, s + r <= 1;
        }
        strokeContains(t, e, s, r = .5) {
            const { halfWidth: n, halfHeight: o } = this;
            if (n <= 0 || o <= 0) return !1;
            const h = s * (1 - r), a = s - h, l = n - a, c = o - a, u = n + h, p = o + h, d = t - this.x, x = e - this.y, y = d * d / (l * l) + x * x / (c * c), m = d * d / (u * u) + x * x / (p * p);
            return y > 1 && m <= 1;
        }
        getBounds(t) {
            return t || (t = new J), t.x = this.x - this.halfWidth, t.y = this.y - this.halfHeight, t.width = this.halfWidth * 2, t.height = this.halfHeight * 2, t;
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.halfWidth = t.halfWidth, this.halfHeight = t.halfHeight, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        toString() {
            return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
        }
    }
    function Ko(i, t, e, s, r, n) {
        const o = i - e, h = t - s, a = r - e, l = n - s, c = o * a + h * l, u = a * a + l * l;
        let p = -1;
        u !== 0 && (p = c / u);
        let d, x;
        p < 0 ? (d = e, x = s) : p > 1 ? (d = r, x = n) : (d = e + p * a, x = s + p * l);
        const y = i - d, m = t - x;
        return y * y + m * m;
    }
    let Zo, Qo;
    class le {
        constructor(...t){
            this.type = "polygon";
            let e = Array.isArray(t[0]) ? t[0] : t;
            if (typeof e[0] != "number") {
                const s = [];
                for(let r = 0, n = e.length; r < n; r++)s.push(e[r].x, e[r].y);
                e = s;
            }
            this.points = e, this.closePath = !0;
        }
        isClockwise() {
            let t = 0;
            const e = this.points, s = e.length;
            for(let r = 0; r < s; r += 2){
                const n = e[r], o = e[r + 1], h = e[(r + 2) % s], a = e[(r + 3) % s];
                t += (h - n) * (a + o);
            }
            return t < 0;
        }
        containsPolygon(t) {
            const e = this.getBounds(Zo), s = t.getBounds(Qo);
            if (!e.containsRect(s)) return !1;
            const r = t.points;
            for(let n = 0; n < r.length; n += 2){
                const o = r[n], h = r[n + 1];
                if (!this.contains(o, h)) return !1;
            }
            return !0;
        }
        clone() {
            const t = this.points.slice(), e = new le(t);
            return e.closePath = this.closePath, e;
        }
        contains(t, e) {
            let s = !1;
            const r = this.points.length / 2;
            for(let n = 0, o = r - 1; n < r; o = n++){
                const h = this.points[n * 2], a = this.points[n * 2 + 1], l = this.points[o * 2], c = this.points[o * 2 + 1];
                a > e != c > e && t < (l - h) * ((e - a) / (c - a)) + h && (s = !s);
            }
            return s;
        }
        strokeContains(t, e, s, r = .5) {
            const n = s * s, o = n * (1 - r), h = n - o, { points: a } = this, l = a.length - (this.closePath ? 0 : 2);
            for(let c = 0; c < l; c += 2){
                const u = a[c], p = a[c + 1], d = a[(c + 2) % a.length], x = a[(c + 3) % a.length], y = Ko(t, e, u, p, d, x), m = Math.sign((d - u) * (e - p) - (x - p) * (t - u));
                if (y <= (m < 0 ? h : o)) return !0;
            }
            return !1;
        }
        getBounds(t) {
            t || (t = new J);
            const e = this.points;
            let s = 1 / 0, r = -1 / 0, n = 1 / 0, o = -1 / 0;
            for(let h = 0, a = e.length; h < a; h += 2){
                const l = e[h], c = e[h + 1];
                s = l < s ? l : s, r = l > r ? l : r, n = c < n ? c : n, o = c > o ? c : o;
            }
            return t.x = s, t.width = r - s, t.y = n, t.height = o - n, t;
        }
        copyFrom(t) {
            return this.points = t.points.slice(), this.closePath = t.closePath, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        toString() {
            return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t, e)=>`${t}, ${e}`, "")}]`;
        }
        get lastX() {
            return this.points[this.points.length - 2];
        }
        get lastY() {
            return this.points[this.points.length - 1];
        }
        get x() {
            return this.points[this.points.length - 2];
        }
        get y() {
            return this.points[this.points.length - 1];
        }
    }
    const Ce = (i, t, e, s, r, n, o)=>{
        const h = i - e, a = t - s, l = Math.sqrt(h * h + a * a);
        return l >= r - n && l <= r + o;
    };
    class Gs {
        constructor(t = 0, e = 0, s = 0, r = 0, n = 20){
            this.type = "roundedRectangle", this.x = t, this.y = e, this.width = s, this.height = r, this.radius = n;
        }
        getBounds(t) {
            return t || (t = new J), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
        }
        clone() {
            return new Gs(this.x, this.y, this.width, this.height, this.radius);
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        contains(t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                const s = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                if (e >= this.y + s && e <= this.y + this.height - s || t >= this.x + s && t <= this.x + this.width - s) return !0;
                let r = t - (this.x + s), n = e - (this.y + s);
                const o = s * s;
                if (r * r + n * n <= o || (r = t - (this.x + this.width - s), r * r + n * n <= o) || (n = e - (this.y + this.height - s), r * r + n * n <= o) || (r = t - (this.x + s), r * r + n * n <= o)) return !0;
            }
            return !1;
        }
        strokeContains(t, e, s, r = .5) {
            const { x: n, y: o, width: h, height: a, radius: l } = this, c = s * (1 - r), u = s - c, p = n + l, d = o + l, x = h - l * 2, y = a - l * 2, m = n + h, w = o + a;
            return (t >= n - c && t <= n + u || t >= m - u && t <= m + c) && e >= d && e <= d + y || (e >= o - c && e <= o + u || e >= w - u && e <= w + c) && t >= p && t <= p + x ? !0 : t < p && e < d && Ce(t, e, p, d, l, u, c) || t > m - l && e < d && Ce(t, e, m - l, d, l, u, c) || t > m - l && e > w - l && Ce(t, e, m - l, w - l, l, u, c) || t < p && e > w - l && Ce(t, e, p, w - l, l, u, c);
        }
        toString() {
            return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
        }
    }
    const Jo = [
        "precision mediump float;",
        "void main(void){",
        "float test = 0.1;",
        "%forloop%",
        "gl_FragColor = vec4(0.0);",
        "}"
    ].join(`
`);
    function th(i) {
        let t = "";
        for(let e = 0; e < i; ++e)e > 0 && (t += `
else `), e < i - 1 && (t += `if(test == ${e}.0){}`);
        return t;
    }
    function eh(i, t) {
        if (i === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        const e = t.createShader(t.FRAGMENT_SHADER);
        try {
            for(;;){
                const s = Jo.replace(/%forloop%/gi, th(i));
                if (t.shaderSource(e, s), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS)) i = i / 2 | 0;
                else break;
            }
        } finally{
            t.deleteShader(e);
        }
        return i;
    }
    let Nt = null;
    Or = function() {
        if (Nt) return Nt;
        const i = kr();
        return Nt = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), Nt = eh(Nt, i), i.getExtension("WEBGL_lose_context")?.loseContext(), Nt;
    };
    const Dr = {};
    sh = function(i, t) {
        let e = 2166136261;
        for(let s = 0; s < t; s++)e ^= i[s].uid, e = Math.imul(e, 16777619), e >>>= 0;
        return Dr[e] || ih(i, t, e);
    };
    let is = 0;
    function ih(i, t, e) {
        const s = {};
        let r = 0;
        is || (is = Or());
        for(let o = 0; o < is; o++){
            const h = o < t ? i[o] : $.EMPTY.source;
            s[r++] = h.source, s[r++] = h.style;
        }
        const n = new Te(s);
        return Dr[e] = n, n;
    }
    vi = class {
        constructor(t){
            typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength;
        }
        get int8View() {
            return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
        }
        get uint8View() {
            return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
        }
        get int16View() {
            return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
        }
        get int32View() {
            return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
        }
        get float64View() {
            return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array;
        }
        get bigUint64View() {
            return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array;
        }
        view(t) {
            return this[`${t}View`];
        }
        destroy() {
            this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this.uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
        }
        static sizeOf(t) {
            switch(t){
                case "int8":
                case "uint8":
                    return 1;
                case "int16":
                case "uint16":
                    return 2;
                case "int32":
                case "uint32":
                case "float32":
                    return 4;
                default:
                    throw new Error(`${t} isn't a valid view type`);
            }
        }
    };
    Si = function(i, t) {
        const e = i.byteLength / 8 | 0, s = new Float64Array(i, 0, e);
        new Float64Array(t, 0, e).set(s);
        const n = i.byteLength - e * 8;
        if (n > 0) {
            const o = new Uint8Array(i, e * 8, n);
            new Uint8Array(t, e * 8, n).set(o);
        }
    };
    const rh = {
        normal: "normal-npm",
        add: "add-npm",
        screen: "screen-npm"
    };
    nh = ((i)=>(i[i.DISABLED = 0] = "DISABLED", i[i.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", i[i.MASK_ACTIVE = 2] = "MASK_ACTIVE", i[i.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", i[i.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", i[i.NONE = 5] = "NONE", i))(nh || {});
    Ci = function(i, t) {
        return t.alphaMode === "no-premultiply-alpha" && rh[i] || i;
    };
    class oh {
        constructor(){
            this.ids = Object.create(null), this.textures = [], this.count = 0;
        }
        clear() {
            for(let t = 0; t < this.count; t++){
                const e = this.textures[t];
                this.textures[t] = null, this.ids[e.uid] = null;
            }
            this.count = 0;
        }
    }
    class hh {
        constructor(){
            this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new oh, this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = !0;
        }
        destroy() {
            this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null;
        }
    }
    const Ur = [];
    let bs = 0;
    function Mi() {
        return bs > 0 ? Ur[--bs] : new hh;
    }
    function Pi(i) {
        Ur[bs++] = i;
    }
    let se = 0;
    const Yr = class ke {
        constructor(t = {}){
            this.uid = it("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._elements = [], ke.defaultOptions.maxTextures = ke.defaultOptions.maxTextures ?? Or(), t = {
                ...ke.defaultOptions,
                ...t
            };
            const { maxTextures: e, attributesInitialSize: s, indicesInitialSize: r } = t;
            this.attributeBuffer = new vi(s * 4), this.indexBuffer = new Uint16Array(r), this.maxTextures = e;
        }
        begin() {
            this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0;
            for(let t = 0; t < this.batchIndex; t++)Pi(this.batches[t]);
            this.batchIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = !0;
        }
        add(t) {
            this._elements[this.elementSize++] = t, t._indexStart = this.indexSize, t._attributeStart = this.attributeSize, t._batcher = this, this.indexSize += t.indexSize, this.attributeSize += t.attributeSize * this.vertexSize;
        }
        checkAndUpdateTexture(t, e) {
            const s = t._batch.textures.ids[e._source.uid];
            return !s && s !== 0 ? !1 : (t._textureId = s, t.texture = e, !0);
        }
        updateElement(t) {
            this.dirty = !0;
            const e = this.attributeBuffer;
            t.packAsQuad ? this.packQuadAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId) : this.packAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId);
        }
        break(t) {
            const e = this._elements;
            if (!e[this.elementStart]) return;
            let s = Mi(), r = s.textures;
            r.clear();
            const n = e[this.elementStart];
            let o = Ci(n.blendMode, n.texture._source), h = n.topology;
            this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
            const a = this.attributeBuffer.float32View, l = this.attributeBuffer.uint32View, c = this.indexBuffer;
            let u = this._batchIndexSize, p = this._batchIndexStart, d = "startBatch";
            const x = this.maxTextures;
            for(let y = this.elementStart; y < this.elementSize; ++y){
                const m = e[y];
                e[y] = null;
                const b = m.texture._source, S = Ci(m.blendMode, b), A = o !== S || h !== m.topology;
                if (b._batchTick === se && !A) {
                    m._textureId = b._textureBindLocation, u += m.indexSize, m.packAsQuad ? (this.packQuadAttributes(m, a, l, m._attributeStart, m._textureId), this.packQuadIndex(c, m._indexStart, m._attributeStart / this.vertexSize)) : (this.packAttributes(m, a, l, m._attributeStart, m._textureId), this.packIndex(m, c, m._indexStart, m._attributeStart / this.vertexSize)), m._batch = s;
                    continue;
                }
                b._batchTick = se, (r.count >= x || A) && (this._finishBatch(s, p, u - p, r, o, h, t, d), d = "renderBatch", p = u, o = S, h = m.topology, s = Mi(), r = s.textures, r.clear(), ++se), m._textureId = b._textureBindLocation = r.count, r.ids[b.uid] = r.count, r.textures[r.count++] = b, m._batch = s, u += m.indexSize, m.packAsQuad ? (this.packQuadAttributes(m, a, l, m._attributeStart, m._textureId), this.packQuadIndex(c, m._indexStart, m._attributeStart / this.vertexSize)) : (this.packAttributes(m, a, l, m._attributeStart, m._textureId), this.packIndex(m, c, m._indexStart, m._attributeStart / this.vertexSize));
            }
            r.count > 0 && (this._finishBatch(s, p, u - p, r, o, h, t, d), p = u, ++se), this.elementStart = this.elementSize, this._batchIndexStart = p, this._batchIndexSize = u;
        }
        _finishBatch(t, e, s, r, n, o, h, a) {
            t.gpuBindGroup = null, t.bindGroup = null, t.action = a, t.batcher = this, t.textures = r, t.blendMode = n, t.topology = o, t.start = e, t.size = s, ++se, this.batches[this.batchIndex++] = t, h.add(t);
        }
        finish(t) {
            this.break(t);
        }
        ensureAttributeBuffer(t) {
            t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4);
        }
        ensureIndexBuffer(t) {
            t <= this.indexBuffer.length || this._resizeIndexBuffer(t);
        }
        _resizeAttributeBuffer(t) {
            const e = Math.max(t, this.attributeBuffer.size * 2), s = new vi(e);
            Si(this.attributeBuffer.rawBinaryData, s.rawBinaryData), this.attributeBuffer = s;
        }
        _resizeIndexBuffer(t) {
            const e = this.indexBuffer;
            let s = Math.max(t, e.length * 1.5);
            s += s % 2;
            const r = s > 65535 ? new Uint32Array(s) : new Uint16Array(s);
            if (r.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT) for(let n = 0; n < e.length; n++)r[n] = e[n];
            else Si(e.buffer, r.buffer);
            this.indexBuffer = r;
        }
        packQuadIndex(t, e, s) {
            t[e] = s + 0, t[e + 1] = s + 1, t[e + 2] = s + 2, t[e + 3] = s + 0, t[e + 4] = s + 2, t[e + 5] = s + 3;
        }
        packIndex(t, e, s, r) {
            const n = t.indices, o = t.indexSize, h = t.indexOffset, a = t.attributeOffset;
            for(let l = 0; l < o; l++)e[s++] = r + n[l + h] - a;
        }
        destroy() {
            for(let t = 0; t < this.batches.length; t++)Pi(this.batches[t]);
            this.batches = null;
            for(let t = 0; t < this._elements.length; t++)this._elements[t]._batch = null;
            this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
        }
    };
    Yr.defaultOptions = {
        maxTextures: null,
        attributesInitialSize: 4,
        indicesInitialSize: 6
    };
    let ah = Yr;
    lt = ((i)=>(i[i.MAP_READ = 1] = "MAP_READ", i[i.MAP_WRITE = 2] = "MAP_WRITE", i[i.COPY_SRC = 4] = "COPY_SRC", i[i.COPY_DST = 8] = "COPY_DST", i[i.INDEX = 16] = "INDEX", i[i.VERTEX = 32] = "VERTEX", i[i.UNIFORM = 64] = "UNIFORM", i[i.STORAGE = 128] = "STORAGE", i[i.INDIRECT = 256] = "INDIRECT", i[i.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", i[i.STATIC = 1024] = "STATIC", i))(lt || {});
    de = class extends At {
        constructor(t){
            let { data: e, size: s } = t;
            const { usage: r, label: n, shrinkToFit: o } = t;
            super(), this.uid = it("buffer"), this._resourceType = "buffer", this._resourceId = it("resource"), this._touched = 0, this._updateID = 1, this._dataInt32 = null, this.shrinkToFit = !0, this.destroyed = !1, e instanceof Array && (e = new Float32Array(e)), this._data = e, s ?? (s = e?.byteLength);
            const h = !!e;
            this.descriptor = {
                size: s,
                usage: r,
                mappedAtCreation: h,
                label: n
            }, this.shrinkToFit = o ?? !0;
        }
        get data() {
            return this._data;
        }
        set data(t) {
            this.setDataWithSize(t, t.length, !0);
        }
        get dataInt32() {
            return this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32;
        }
        get static() {
            return !!(this.descriptor.usage & lt.STATIC);
        }
        set static(t) {
            t ? this.descriptor.usage |= lt.STATIC : this.descriptor.usage &= ~lt.STATIC;
        }
        setDataWithSize(t, e, s) {
            if (this._updateID++, this._updateSize = e * t.BYTES_PER_ELEMENT, this._data === t) {
                s && this.emit("update", this);
                return;
            }
            const r = this._data;
            if (this._data = t, this._dataInt32 = null, !r || r.length !== t.length) {
                !this.shrinkToFit && r && t.byteLength < r.byteLength ? s && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = it("resource"), this.emit("change", this));
                return;
            }
            s && this.emit("update", this);
        }
        update(t) {
            this._updateSize = t ?? this._updateSize, this._updateID++, this.emit("update", this);
        }
        destroy() {
            this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this._data = null, this.descriptor = null, this.removeAllListeners();
        }
    };
    function Xr(i, t) {
        if (!(i instanceof de)) {
            let e = t ? lt.INDEX : lt.VERTEX;
            i instanceof Array && (t ? (i = new Uint32Array(i), e = lt.INDEX | lt.COPY_DST) : (i = new Float32Array(i), e = lt.VERTEX | lt.COPY_DST)), i = new de({
                data: i,
                label: t ? "index-mesh-buffer" : "vertex-mesh-buffer",
                usage: e
            });
        }
        return i;
    }
    function lh(i, t, e) {
        const s = i.getAttribute(t);
        if (!s) return e.minX = 0, e.minY = 0, e.maxX = 0, e.maxY = 0, e;
        const r = s.buffer.data;
        let n = 1 / 0, o = 1 / 0, h = -1 / 0, a = -1 / 0;
        const l = r.BYTES_PER_ELEMENT, c = (s.offset || 0) / l, u = (s.stride || 2 * 4) / l;
        for(let p = c; p < r.length; p += u){
            const d = r[p], x = r[p + 1];
            d > h && (h = d), x > a && (a = x), d < n && (n = d), x < o && (o = x);
        }
        return e.minX = n, e.minY = o, e.maxX = h, e.maxY = a, e;
    }
    function ch(i) {
        return (i instanceof de || Array.isArray(i) || i.BYTES_PER_ELEMENT) && (i = {
            buffer: i
        }), i.buffer = Xr(i.buffer, !1), i;
    }
    uh = class extends At {
        constructor(t = {}){
            super(), this.uid = it("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new _t, this._boundsDirty = !0;
            const { attributes: e, indexBuffer: s, topology: r } = t;
            if (this.buffers = [], this.attributes = {}, e) for(const n in e)this.addAttribute(n, e[n]);
            this.instanceCount = t.instanceCount ?? 1, s && this.addIndex(s), this.topology = r || "triangle-list";
        }
        onBufferUpdate() {
            this._boundsDirty = !0, this.emit("update", this);
        }
        getAttribute(t) {
            return this.attributes[t];
        }
        getIndex() {
            return this.indexBuffer;
        }
        getBuffer(t) {
            return this.getAttribute(t).buffer;
        }
        getSize() {
            for(const t in this.attributes){
                const e = this.attributes[t];
                return e.buffer.data.length / (e.stride / 4 || e.size);
            }
            return 0;
        }
        addAttribute(t, e) {
            const s = ch(e);
            this.buffers.indexOf(s.buffer) === -1 && (this.buffers.push(s.buffer), s.buffer.on("update", this.onBufferUpdate, this), s.buffer.on("change", this.onBufferUpdate, this)), this.attributes[t] = s;
        }
        addIndex(t) {
            this.indexBuffer = Xr(t, !0), this.buffers.push(this.indexBuffer);
        }
        get bounds() {
            return this._boundsDirty ? (this._boundsDirty = !1, lh(this, "aPosition", this._bounds)) : this._bounds;
        }
        destroy(t = !1) {
            this.emit("destroy", this), this.removeAllListeners(), t && this.buffers.forEach((e)=>e.destroy()), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null;
        }
    };
    const dh = new Float32Array(1), fh = new Uint32Array(1);
    class ph extends uh {
        constructor(){
            const e = new de({
                data: dh,
                label: "attribute-batch-buffer",
                usage: lt.VERTEX | lt.COPY_DST,
                shrinkToFit: !1
            }), s = new de({
                data: fh,
                label: "index-batch-buffer",
                usage: lt.INDEX | lt.COPY_DST,
                shrinkToFit: !1
            }), r = 6 * 4;
            super({
                attributes: {
                    aPosition: {
                        buffer: e,
                        format: "float32x2",
                        stride: r,
                        offset: 0
                    },
                    aUV: {
                        buffer: e,
                        format: "float32x2",
                        stride: r,
                        offset: 2 * 4
                    },
                    aColor: {
                        buffer: e,
                        format: "unorm8x4",
                        stride: r,
                        offset: 4 * 4
                    },
                    aTextureIdAndRound: {
                        buffer: e,
                        format: "uint16x2",
                        stride: r,
                        offset: 5 * 4
                    }
                },
                indexBuffer: s
            });
        }
    }
    function Ai(i, t, e) {
        if (i) for(const s in i){
            const r = s.toLocaleLowerCase(), n = t[r];
            if (n) {
                let o = i[s];
                s === "header" && (o = o.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), e && n.push(`//----${e}----//`), n.push(o);
            } else ft(`${s} placement hook does not exist in shader`);
        }
    }
    const mh = /\{\{(.*?)\}\}/g;
    function Ti(i) {
        const t = {};
        return (i.match(mh)?.map((s)=>s.replace(/[{()}]/g, "")) ?? []).forEach((s)=>{
            t[s] = [];
        }), t;
    }
    function ki(i, t) {
        let e;
        const s = /@in\s+([^;]+);/g;
        for(; (e = s.exec(i)) !== null;)t.push(e[1]);
    }
    function Ii(i, t, e = !1) {
        const s = [];
        ki(t, s), i.forEach((h)=>{
            h.header && ki(h.header, s);
        });
        const r = s;
        e && r.sort();
        const n = r.map((h, a)=>`       @location(${a}) ${h},`).join(`
`);
        let o = t.replace(/@in\s+[^;]+;\s*/g, "");
        return o = o.replace("{{in}}", `
${n}
`), o;
    }
    function Ei(i, t) {
        let e;
        const s = /@out\s+([^;]+);/g;
        for(; (e = s.exec(i)) !== null;)t.push(e[1]);
    }
    function gh(i) {
        const e = /\b(\w+)\s*:/g.exec(i);
        return e ? e[1] : "";
    }
    function xh(i) {
        const t = /@.*?\s+/g;
        return i.replace(t, "");
    }
    function yh(i, t) {
        const e = [];
        Ei(t, e), i.forEach((a)=>{
            a.header && Ei(a.header, e);
        });
        let s = 0;
        const r = e.sort().map((a)=>a.indexOf("builtin") > -1 ? a : `@location(${s++}) ${a}`).join(`,
`), n = e.sort().map((a)=>`       var ${xh(a)};`).join(`
`), o = `return VSOutput(
            ${e.sort().map((a)=>` ${gh(a)}`).join(`,
`)});`;
        let h = t.replace(/@out\s+[^;]+;\s*/g, "");
        return h = h.replace("{{struct}}", `
${r}
`), h = h.replace("{{start}}", `
${n}
`), h = h.replace("{{return}}", `
${o}
`), h;
    }
    function Ri(i, t) {
        let e = i;
        for(const s in t){
            const r = t[s];
            r.join(`
`).length ? e = e.replace(`{{${s}}}`, `//-----${s} START-----//
${r.join(`
`)}
//----${s} FINISH----//`) : e = e.replace(`{{${s}}}`, "");
        }
        return e;
    }
    const Ft = Object.create(null), rs = new Map;
    let _h = 0;
    function wh({ template: i, bits: t }) {
        const e = Vr(i, t);
        if (Ft[e]) return Ft[e];
        const { vertex: s, fragment: r } = vh(i, t);
        return Ft[e] = Nr(s, r, t), Ft[e];
    }
    function bh({ template: i, bits: t }) {
        const e = Vr(i, t);
        return Ft[e] || (Ft[e] = Nr(i.vertex, i.fragment, t)), Ft[e];
    }
    function vh(i, t) {
        const e = t.map((o)=>o.vertex).filter((o)=>!!o), s = t.map((o)=>o.fragment).filter((o)=>!!o);
        let r = Ii(e, i.vertex, !0);
        r = yh(e, r);
        const n = Ii(s, i.fragment, !0);
        return {
            vertex: r,
            fragment: n
        };
    }
    function Vr(i, t) {
        return t.map((e)=>(rs.has(e) || rs.set(e, _h++), rs.get(e))).sort((e, s)=>e - s).join("-") + i.vertex + i.fragment;
    }
    function Nr(i, t, e) {
        const s = Ti(i), r = Ti(t);
        return e.forEach((n)=>{
            Ai(n.vertex, s, n.name), Ai(n.fragment, r, n.name);
        }), {
            vertex: Ri(i, s),
            fragment: Ri(t, r)
        };
    }
    const Sh = `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`, Ch = `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`, Mh = `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`, Ph = `
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`, Ah = {
        name: "global-uniforms-bit",
        vertex: {
            header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
        }
    }, Th = {
        name: "global-uniforms-bit",
        vertex: {
            header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
        }
    };
    kh = function({ bits: i, name: t }) {
        const e = wh({
            template: {
                fragment: Ch,
                vertex: Sh
            },
            bits: [
                Ah,
                ...i
            ]
        });
        return He.from({
            name: t,
            vertex: {
                source: e.vertex,
                entryPoint: "main"
            },
            fragment: {
                source: e.fragment,
                entryPoint: "main"
            }
        });
    };
    Ih = function({ bits: i, name: t }) {
        return new Er({
            name: t,
            ...bh({
                template: {
                    vertex: Mh,
                    fragment: Ph
                },
                bits: [
                    Th,
                    ...i
                ]
            })
        });
    };
    let ns;
    Eh = {
        name: "color-bit",
        vertex: {
            header: `
            @in aColor: vec4<f32>;
        `,
            main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
        }
    };
    Rh = {
        name: "color-bit",
        vertex: {
            header: `
            in vec4 aColor;
        `,
            main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
        }
    };
    ns = {};
    function Bh(i) {
        const t = [];
        if (i === 1) t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");
        else {
            let e = 0;
            for(let s = 0; s < i; s++)t.push(`@group(1) @binding(${e++}) var textureSource${s + 1}: texture_2d<f32>;`), t.push(`@group(1) @binding(${e++}) var textureSampler${s + 1}: sampler;`);
        }
        return t.join(`
`);
    }
    function Wh(i) {
        const t = [];
        if (i === 1) t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
        else {
            t.push("switch vTextureId {");
            for(let e = 0; e < i; e++)e === i - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`), t.push(`      outColor = textureSampleGrad(textureSource${e + 1}, textureSampler${e + 1}, vUV, uvDx, uvDy);`), t.push("      break;}");
            t.push("}");
        }
        return t.join(`
`);
    }
    Hh = function(i) {
        return ns[i] || (ns[i] = {
            name: "texture-batch-bit",
            vertex: {
                header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
                main: `
                vTextureId = aTextureIdAndRound.y;
            `,
                end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
            },
            fragment: {
                header: `
                @in @interpolate(flat) vTextureId: u32;

                ${Bh(i)}
            `,
                main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Wh(i)}
            `
            }
        }), ns[i];
    };
    const os = {};
    function Fh(i) {
        const t = [];
        for(let e = 0; e < i; e++)e > 0 && t.push("else"), e < i - 1 && t.push(`if(vTextureId < ${e}.5)`), t.push("{"), t.push(`	outColor = texture(uTextures[${e}], vUV);`), t.push("}");
        return t.join(`
`);
    }
    Gh = function(i) {
        return os[i] || (os[i] = {
            name: "texture-batch-bit",
            vertex: {
                header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,
                main: `
                vTextureId = aTextureIdAndRound.y;
            `,
                end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
            },
            fragment: {
                header: `
                in float vTextureId;

                uniform sampler2D uTextures[${i}];

            `,
                main: `

                ${Fh(i)}
            `
            }
        }), os[i];
    };
    let Bi;
    zh = {
        name: "round-pixels-bit",
        vertex: {
            header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
        }
    };
    Lh = {
        name: "round-pixels-bit",
        vertex: {
            header: `   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
        }
    };
    Bi = {};
    Oh = function(i) {
        let t = Bi[i];
        if (t) return t;
        const e = new Int32Array(i);
        for(let s = 0; s < i; s++)e[s] = s;
        return t = Bi[i] = new Hr({
            uTextures: {
                value: e,
                type: "i32",
                size: i
            }
        }, {
            isStatic: !0
        }), t;
    };
    class Dh extends Rs {
        constructor(t){
            const e = Ih({
                name: "batch",
                bits: [
                    Rh,
                    Gh(t),
                    Lh
                ]
            }), s = kh({
                name: "batch",
                bits: [
                    Eh,
                    Hh(t),
                    zh
                ]
            });
            super({
                glProgram: e,
                gpuProgram: s,
                resources: {
                    batchSamplers: Oh(t)
                }
            });
        }
    }
    let Wi = null;
    const $r = class jr extends ah {
        constructor(){
            super(...arguments), this.geometry = new ph, this.shader = Wi || (Wi = new Dh(this.maxTextures)), this.name = jr.extension.name, this.vertexSize = 6;
        }
        packAttributes(t, e, s, r, n) {
            const o = n << 16 | t.roundPixels & 65535, h = t.transform, a = h.a, l = h.b, c = h.c, u = h.d, p = h.tx, d = h.ty, { positions: x, uvs: y } = t, m = t.color, w = t.attributeOffset, b = w + t.attributeSize;
            for(let S = w; S < b; S++){
                const A = S * 2, E = x[A], T = x[A + 1];
                e[r++] = a * E + c * T + p, e[r++] = u * T + l * E + d, e[r++] = y[A], e[r++] = y[A + 1], s[r++] = m, s[r++] = o;
            }
        }
        packQuadAttributes(t, e, s, r, n) {
            const o = t.texture, h = t.transform, a = h.a, l = h.b, c = h.c, u = h.d, p = h.tx, d = h.ty, x = t.bounds, y = x.maxX, m = x.minX, w = x.maxY, b = x.minY, S = o.uvs, A = t.color, E = n << 16 | t.roundPixels & 65535;
            e[r + 0] = a * m + c * b + p, e[r + 1] = u * b + l * m + d, e[r + 2] = S.x0, e[r + 3] = S.y0, s[r + 4] = A, s[r + 5] = E, e[r + 6] = a * y + c * b + p, e[r + 7] = u * b + l * y + d, e[r + 8] = S.x1, e[r + 9] = S.y1, s[r + 10] = A, s[r + 11] = E, e[r + 12] = a * y + c * w + p, e[r + 13] = u * w + l * y + d, e[r + 14] = S.x2, e[r + 15] = S.y2, s[r + 16] = A, s[r + 17] = E, e[r + 18] = a * m + c * w + p, e[r + 19] = u * w + l * m + d, e[r + 20] = S.x3, e[r + 21] = S.y3, s[r + 22] = A, s[r + 23] = E;
        }
    };
    $r.extension = {
        type: [
            Z.Batcher
        ],
        name: "default"
    };
    Uh = $r;
    function Yh(i, t, e, s, r, n, o, h = null) {
        let a = 0;
        e *= t, r *= n;
        const l = h.a, c = h.b, u = h.c, p = h.d, d = h.tx, x = h.ty;
        for(; a < o;){
            const y = i[e], m = i[e + 1];
            s[r] = l * y + u * m + d, s[r + 1] = c * y + p * m + x, r += n, e += t, a++;
        }
    }
    function Xh(i, t, e, s) {
        let r = 0;
        for(t *= e; r < s;)i[t] = 0, i[t + 1] = 0, t += e, r++;
    }
    function qr(i, t, e, s, r) {
        const n = t.a, o = t.b, h = t.c, a = t.d, l = t.tx, c = t.ty;
        e || (e = 0), s || (s = 2), r || (r = i.length / s - e);
        let u = e * s;
        for(let p = 0; p < r; p++){
            const d = i[u], x = i[u + 1];
            i[u] = n * d + h * x + l, i[u + 1] = o * d + a * x + c, u += s;
        }
    }
    const Vh = new U;
    Kr = class {
        constructor(){
            this.packAsQuad = !1, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = !0, this.roundPixels = 0, this._batcher = null, this._batch = null;
        }
        get uvs() {
            return this.geometryData.uvs;
        }
        get positions() {
            return this.geometryData.vertices;
        }
        get indices() {
            return this.geometryData.indices;
        }
        get blendMode() {
            return this.applyTransform ? this.renderable.groupBlendMode : "normal";
        }
        get color() {
            const t = this.baseColor, e = t >> 16 | t & 65280 | (t & 255) << 16, s = this.renderable;
            return s ? lr(e, s.groupColor) + (this.alpha * s.groupAlpha * 255 << 24) : e + (this.alpha * 255 << 24);
        }
        get transform() {
            return this.renderable?.groupTransform || Vh;
        }
        copyTo(t) {
            t.indexOffset = this.indexOffset, t.indexSize = this.indexSize, t.attributeOffset = this.attributeOffset, t.attributeSize = this.attributeSize, t.baseColor = this.baseColor, t.alpha = this.alpha, t.texture = this.texture, t.geometryData = this.geometryData, t.topology = this.topology;
        }
        reset() {
            this.applyTransform = !0, this.renderable = null, this.topology = "triangle-list";
        }
    };
    const fe = {
        extension: {
            type: Z.ShapeBuilder,
            name: "circle"
        },
        build (i, t) {
            let e, s, r, n, o, h;
            if (i.type === "circle") {
                const A = i;
                e = A.x, s = A.y, o = h = A.radius, r = n = 0;
            } else if (i.type === "ellipse") {
                const A = i;
                e = A.x, s = A.y, o = A.halfWidth, h = A.halfHeight, r = n = 0;
            } else {
                const A = i, E = A.width / 2, T = A.height / 2;
                e = A.x + E, s = A.y + T, o = h = Math.max(0, Math.min(A.radius, Math.min(E, T))), r = E - o, n = T - h;
            }
            if (!(o >= 0 && h >= 0 && r >= 0 && n >= 0)) return t;
            const a = Math.ceil(2.3 * Math.sqrt(o + h)), l = a * 8 + (r ? 4 : 0) + (n ? 4 : 0);
            if (l === 0) return t;
            if (a === 0) return t[0] = t[6] = e + r, t[1] = t[3] = s + n, t[2] = t[4] = e - r, t[5] = t[7] = s - n, t;
            let c = 0, u = a * 4 + (r ? 2 : 0) + 2, p = u, d = l, x = r + o, y = n, m = e + x, w = e - x, b = s + y;
            if (t[c++] = m, t[c++] = b, t[--u] = b, t[--u] = w, n) {
                const A = s - y;
                t[p++] = w, t[p++] = A, t[--d] = A, t[--d] = m;
            }
            for(let A = 1; A < a; A++){
                const E = Math.PI / 2 * (A / a), T = r + Math.cos(E) * o, k = n + Math.sin(E) * h, z = e + T, G = e - T, R = s + k, B = s - k;
                t[c++] = z, t[c++] = R, t[--u] = R, t[--u] = G, t[p++] = G, t[p++] = B, t[--d] = B, t[--d] = z;
            }
            x = r, y = n + h, m = e + x, w = e - x, b = s + y;
            const S = s - y;
            return t[c++] = m, t[c++] = b, t[--d] = S, t[--d] = m, r && (t[c++] = w, t[c++] = b, t[--d] = S, t[--d] = w), t;
        },
        triangulate (i, t, e, s, r, n) {
            if (i.length === 0) return;
            let o = 0, h = 0;
            for(let c = 0; c < i.length; c += 2)o += i[c], h += i[c + 1];
            o /= i.length / 2, h /= i.length / 2;
            let a = s;
            t[a * e] = o, t[a * e + 1] = h;
            const l = a++;
            for(let c = 0; c < i.length; c += 2)t[a * e] = i[c], t[a * e + 1] = i[c + 1], c > 0 && (r[n++] = a, r[n++] = l, r[n++] = a - 1), a++;
            r[n++] = l + 1, r[n++] = l, r[n++] = a - 1;
        }
    }, Nh = {
        ...fe,
        extension: {
            ...fe.extension,
            name: "ellipse"
        }
    }, $h = {
        ...fe,
        extension: {
            ...fe.extension,
            name: "roundedRectangle"
        }
    }, Zr = 1e-4, Hi = 1e-4;
    function jh(i) {
        const t = i.length;
        if (t < 6) return 1;
        let e = 0;
        for(let s = 0, r = i[t - 2], n = i[t - 1]; s < t; s += 2){
            const o = i[s], h = i[s + 1];
            e += (o - r) * (h + n), r = o, n = h;
        }
        return e < 0 ? -1 : 1;
    }
    function Fi(i, t, e, s, r, n, o, h) {
        const a = i - e * r, l = t - s * r, c = i + e * n, u = t + s * n;
        let p, d;
        o ? (p = s, d = -e) : (p = -s, d = e);
        const x = a + p, y = l + d, m = c + p, w = u + d;
        return h.push(x, y), h.push(m, w), 2;
    }
    function Lt(i, t, e, s, r, n, o, h) {
        const a = e - i, l = s - t;
        let c = Math.atan2(a, l), u = Math.atan2(r - i, n - t);
        h && c < u ? c += Math.PI * 2 : !h && c > u && (u += Math.PI * 2);
        let p = c;
        const d = u - c, x = Math.abs(d), y = Math.sqrt(a * a + l * l), m = (15 * x * Math.sqrt(y) / Math.PI >> 0) + 1, w = d / m;
        if (p += w, h) {
            o.push(i, t), o.push(e, s);
            for(let b = 1, S = p; b < m; b++, S += w)o.push(i, t), o.push(i + Math.sin(S) * y, t + Math.cos(S) * y);
            o.push(i, t), o.push(r, n);
        } else {
            o.push(e, s), o.push(i, t);
            for(let b = 1, S = p; b < m; b++, S += w)o.push(i + Math.sin(S) * y, t + Math.cos(S) * y), o.push(i, t);
            o.push(r, n), o.push(i, t);
        }
        return m * 2;
    }
    function qh(i, t, e, s, r, n) {
        const o = Zr;
        if (i.length === 0) return;
        const h = t;
        let a = h.alignment;
        if (t.alignment !== .5) {
            let v = jh(i);
            a = (a - .5) * v + .5;
        }
        const l = new O(i[0], i[1]), c = new O(i[i.length - 2], i[i.length - 1]), u = s, p = Math.abs(l.x - c.x) < o && Math.abs(l.y - c.y) < o;
        if (u) {
            i = i.slice(), p && (i.pop(), i.pop(), c.set(i[i.length - 2], i[i.length - 1]));
            const v = (l.x + c.x) * .5, C = (c.y + l.y) * .5;
            i.unshift(v, C), i.push(v, C);
        }
        const d = r, x = i.length / 2;
        let y = i.length;
        const m = d.length / 2, w = h.width / 2, b = w * w, S = h.miterLimit * h.miterLimit;
        let A = i[0], E = i[1], T = i[2], k = i[3], z = 0, G = 0, R = -(E - k), B = A - T, q = 0, j = 0, rt = Math.sqrt(R * R + B * B);
        R /= rt, B /= rt, R *= w, B *= w;
        const kt = a, f = (1 - kt) * 2, g = kt * 2;
        u || (h.cap === "round" ? y += Lt(A - R * (f - g) * .5, E - B * (f - g) * .5, A - R * f, E - B * f, A + R * g, E + B * g, d, !0) + 2 : h.cap === "square" && (y += Fi(A, E, R, B, f, g, !0, d))), d.push(A - R * f, E - B * f), d.push(A + R * g, E + B * g);
        for(let v = 1; v < x - 1; ++v){
            A = i[(v - 1) * 2], E = i[(v - 1) * 2 + 1], T = i[v * 2], k = i[v * 2 + 1], z = i[(v + 1) * 2], G = i[(v + 1) * 2 + 1], R = -(E - k), B = A - T, rt = Math.sqrt(R * R + B * B), R /= rt, B /= rt, R *= w, B *= w, q = -(k - G), j = T - z, rt = Math.sqrt(q * q + j * j), q /= rt, j /= rt, q *= w, j *= w;
            const C = T - A, M = E - k, P = T - z, I = G - k, F = C * P + M * I, H = M * P - I * C, V = H < 0;
            if (Math.abs(H) < .001 * Math.abs(F)) {
                d.push(T - R * f, k - B * f), d.push(T + R * g, k + B * g), F >= 0 && (h.join === "round" ? y += Lt(T, k, T - R * f, k - B * f, T - q * f, k - j * f, d, !1) + 4 : y += 2, d.push(T - q * g, k - j * g), d.push(T + q * f, k + j * f));
                continue;
            }
            const N = (-R + A) * (-B + k) - (-R + T) * (-B + E), D = (-q + z) * (-j + k) - (-q + T) * (-j + G), et = (C * D - P * N) / H, X = (I * N - M * D) / H, It = (et - T) * (et - T) + (X - k) * (X - k), ut = T + (et - T) * f, bt = k + (X - k) * f, vt = T - (et - T) * g, L = k - (X - k) * g, Y = Math.min(C * C + M * M, P * P + I * I), Us = V ? f : g, hn = Y + Us * Us * b;
            It <= hn ? h.join === "bevel" || It / b > S ? (V ? (d.push(ut, bt), d.push(T + R * g, k + B * g), d.push(ut, bt), d.push(T + q * g, k + j * g)) : (d.push(T - R * f, k - B * f), d.push(vt, L), d.push(T - q * f, k - j * f), d.push(vt, L)), y += 2) : h.join === "round" ? V ? (d.push(ut, bt), d.push(T + R * g, k + B * g), y += Lt(T, k, T + R * g, k + B * g, T + q * g, k + j * g, d, !0) + 4, d.push(ut, bt), d.push(T + q * g, k + j * g)) : (d.push(T - R * f, k - B * f), d.push(vt, L), y += Lt(T, k, T - R * f, k - B * f, T - q * f, k - j * f, d, !1) + 4, d.push(T - q * f, k - j * f), d.push(vt, L)) : (d.push(ut, bt), d.push(vt, L)) : (d.push(T - R * f, k - B * f), d.push(T + R * g, k + B * g), h.join === "round" ? V ? y += Lt(T, k, T + R * g, k + B * g, T + q * g, k + j * g, d, !0) + 2 : y += Lt(T, k, T - R * f, k - B * f, T - q * f, k - j * f, d, !1) + 2 : h.join === "miter" && It / b <= S && (V ? (d.push(vt, L), d.push(vt, L)) : (d.push(ut, bt), d.push(ut, bt)), y += 2), d.push(T - q * f, k - j * f), d.push(T + q * g, k + j * g), y += 2);
        }
        A = i[(x - 2) * 2], E = i[(x - 2) * 2 + 1], T = i[(x - 1) * 2], k = i[(x - 1) * 2 + 1], R = -(E - k), B = A - T, rt = Math.sqrt(R * R + B * B), R /= rt, B /= rt, R *= w, B *= w, d.push(T - R * f, k - B * f), d.push(T + R * g, k + B * g), u || (h.cap === "round" ? y += Lt(T - R * (f - g) * .5, k - B * (f - g) * .5, T - R * f, k - B * f, T + R * g, k + B * g, d, !1) + 2 : h.cap === "square" && (y += Fi(T, k, R, B, f, g, !1, d)));
        const _ = Hi * Hi;
        for(let v = m; v < y + m - 2; ++v)A = d[v * 2], E = d[v * 2 + 1], T = d[(v + 1) * 2], k = d[(v + 1) * 2 + 1], z = d[(v + 2) * 2], G = d[(v + 2) * 2 + 1], !(Math.abs(A * (k - G) + T * (G - E) + z * (E - k)) < _) && n.push(v, v + 1, v + 2);
    }
    function Kh(i, t, e, s) {
        const r = Zr;
        if (i.length === 0) return;
        const n = i[0], o = i[1], h = i[i.length - 2], a = i[i.length - 1], l = t || Math.abs(n - h) < r && Math.abs(o - a) < r, c = e, u = i.length / 2, p = c.length / 2;
        for(let d = 0; d < u; d++)c.push(i[d * 2]), c.push(i[d * 2 + 1]);
        for(let d = 0; d < u - 1; d++)s.push(p + d, p + d + 1);
        l && s.push(p + u - 1, p);
    }
    function Qr(i, t, e, s, r, n, o) {
        const h = Lo(i, t, 2);
        if (!h) return;
        for(let l = 0; l < h.length; l += 3)n[o++] = h[l] + r, n[o++] = h[l + 1] + r, n[o++] = h[l + 2] + r;
        let a = r * s;
        for(let l = 0; l < i.length; l += 2)e[a] = i[l], e[a + 1] = i[l + 1], a += s;
    }
    const Zh = [], Qh = {
        extension: {
            type: Z.ShapeBuilder,
            name: "polygon"
        },
        build (i, t) {
            for(let e = 0; e < i.points.length; e++)t[e] = i.points[e];
            return t;
        },
        triangulate (i, t, e, s, r, n) {
            Qr(i, Zh, t, e, s, r, n);
        }
    }, Jh = {
        extension: {
            type: Z.ShapeBuilder,
            name: "rectangle"
        },
        build (i, t) {
            const e = i, s = e.x, r = e.y, n = e.width, o = e.height;
            return n >= 0 && o >= 0 && (t[0] = s, t[1] = r, t[2] = s + n, t[3] = r, t[4] = s + n, t[5] = r + o, t[6] = s, t[7] = r + o), t;
        },
        triangulate (i, t, e, s, r, n) {
            let o = 0;
            s *= e, t[s + o] = i[0], t[s + o + 1] = i[1], o += e, t[s + o] = i[2], t[s + o + 1] = i[3], o += e, t[s + o] = i[6], t[s + o + 1] = i[7], o += e, t[s + o] = i[4], t[s + o + 1] = i[5], o += e;
            const h = s / e;
            r[n++] = h, r[n++] = h + 1, r[n++] = h + 2, r[n++] = h + 1, r[n++] = h + 3, r[n++] = h + 2;
        }
    }, ta = {
        extension: {
            type: Z.ShapeBuilder,
            name: "triangle"
        },
        build (i, t) {
            return t[0] = i.x, t[1] = i.y, t[2] = i.x2, t[3] = i.y2, t[4] = i.x3, t[5] = i.y3, t;
        },
        triangulate (i, t, e, s, r, n) {
            let o = 0;
            s *= e, t[s + o] = i[0], t[s + o + 1] = i[1], o += e, t[s + o] = i[2], t[s + o + 1] = i[3], o += e, t[s + o] = i[4], t[s + o + 1] = i[5];
            const h = s / e;
            r[n++] = h, r[n++] = h + 1, r[n++] = h + 2;
        }
    }, ea = new U, sa = new J;
    function ia(i, t, e, s) {
        const r = t.matrix ? i.copyFrom(t.matrix).invert() : i.identity();
        if (t.textureSpace === "local") {
            const o = e.getBounds(sa);
            t.width && o.pad(t.width);
            const { x: h, y: a } = o, l = 1 / o.width, c = 1 / o.height, u = -h * l, p = -a * c, d = r.a, x = r.b, y = r.c, m = r.d;
            r.a *= l, r.b *= l, r.c *= c, r.d *= c, r.tx = u * d + p * y + r.tx, r.ty = u * x + p * m + r.ty;
        } else r.translate(t.texture.frame.x, t.texture.frame.y), r.scale(1 / t.texture.source.width, 1 / t.texture.source.height);
        const n = t.texture.source.style;
        return !(t.fill instanceof Gt) && n.addressMode === "clamp-to-edge" && (n.addressMode = "repeat", n.update()), s && r.append(ea.copyFrom(s).invert()), r;
    }
    const Fe = {};
    Pt.handleByMap(Z.ShapeBuilder, Fe);
    Pt.add(Jh, Qh, ta, fe, Nh, $h);
    const ra = new J, na = new U;
    function oa(i, t) {
        const { geometryData: e, batches: s } = t;
        s.length = 0, e.indices.length = 0, e.vertices.length = 0, e.uvs.length = 0;
        for(let r = 0; r < i.instructions.length; r++){
            const n = i.instructions[r];
            if (n.action === "texture") ha(n.data, s, e);
            else if (n.action === "fill" || n.action === "stroke") {
                const o = n.action === "stroke", h = n.data.path.shapePath, a = n.data.style, l = n.data.hole;
                o && l && Gi(l.shapePath, a, !0, s, e), l && (h.shapePrimitives[h.shapePrimitives.length - 1].holes = l.shapePath.shapePrimitives), Gi(h, a, o, s, e);
            }
        }
    }
    function ha(i, t, e) {
        const { vertices: s, uvs: r, indices: n } = e, o = n.length, h = s.length / 2, a = [], l = Fe.rectangle, c = ra, u = i.image;
        c.x = i.dx, c.y = i.dy, c.width = i.dw, c.height = i.dh;
        const p = i.transform;
        l.build(c, a), p && qr(a, p), l.triangulate(a, s, 2, h, n, o);
        const d = u.uvs;
        r.push(d.x0, d.y0, d.x1, d.y1, d.x3, d.y3, d.x2, d.y2);
        const x = Rt.get(Kr);
        x.indexOffset = o, x.indexSize = n.length - o, x.attributeOffset = h, x.attributeSize = s.length / 2 - h, x.baseColor = i.style, x.alpha = i.alpha, x.texture = u, x.geometryData = e, t.push(x);
    }
    function Gi(i, t, e, s, r) {
        const { vertices: n, uvs: o, indices: h } = r;
        i.shapePrimitives.forEach(({ shape: a, transform: l, holes: c })=>{
            const u = h.length, p = n.length / 2, d = [], x = Fe[a.type];
            let y = "triangle-list";
            if (x.build(a, d), l && qr(d, l), e) {
                const S = a.closePath ?? !0, A = t;
                A.pixelLine ? (Kh(d, S, n, h), y = "line-list") : qh(d, A, !1, S, n, h);
            } else if (c) {
                const S = [], A = d.slice();
                aa(c).forEach((T)=>{
                    S.push(A.length / 2), A.push(...T);
                }), Qr(A, S, n, 2, p, h, u);
            } else x.triangulate(d, n, 2, p, h, u);
            const m = o.length / 2, w = t.texture;
            if (w !== $.WHITE) {
                const S = ia(na, t, a, l);
                Yh(n, 2, p, o, m, 2, n.length / 2 - p, S);
            } else Xh(o, m, 2, n.length / 2 - p);
            const b = Rt.get(Kr);
            b.indexOffset = u, b.indexSize = h.length - u, b.attributeOffset = p, b.attributeSize = n.length / 2 - p, b.baseColor = t.color, b.alpha = t.alpha, b.texture = w, b.geometryData = r, b.topology = y, s.push(b);
        });
    }
    function aa(i) {
        const t = [];
        for(let e = 0; e < i.length; e++){
            const s = i[e].shape, r = [];
            Fe[s.type].build(s, r), t.push(r);
        }
        return t;
    }
    class la {
        constructor(){
            this.batches = [], this.geometryData = {
                vertices: [],
                uvs: [],
                indices: []
            };
        }
    }
    class ca {
        constructor(){
            this.batcher = new Uh, this.instructions = new fr;
        }
        init() {
            this.instructions.reset();
        }
        get geometry() {
            return K(wn, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry;
        }
    }
    const zs = class vs {
        constructor(t){
            this._gpuContextHash = {}, this._graphicsDataContextHash = Object.create(null), t.renderableGC.addManagedHash(this, "_gpuContextHash"), t.renderableGC.addManagedHash(this, "_graphicsDataContextHash");
        }
        init(t) {
            vs.defaultOptions.bezierSmoothness = t?.bezierSmoothness ?? vs.defaultOptions.bezierSmoothness;
        }
        getContextRenderData(t) {
            return this._graphicsDataContextHash[t.uid] || this._initContextRenderData(t);
        }
        updateGpuContext(t) {
            let e = this._gpuContextHash[t.uid] || this._initContext(t);
            if (t.dirty) {
                e ? this._cleanGraphicsContextData(t) : e = this._initContext(t), oa(t, e);
                const s = t.batchMode;
                t.customShader || s === "no-batch" ? e.isBatchable = !1 : s === "auto" && (e.isBatchable = e.geometryData.vertices.length < 400), t.dirty = !1;
            }
            return e;
        }
        getGpuContext(t) {
            return this._gpuContextHash[t.uid] || this._initContext(t);
        }
        _initContextRenderData(t) {
            const e = Rt.get(ca), { batches: s, geometryData: r } = this._gpuContextHash[t.uid], n = r.vertices.length, o = r.indices.length;
            for(let c = 0; c < s.length; c++)s[c].applyTransform = !1;
            const h = e.batcher;
            h.ensureAttributeBuffer(n), h.ensureIndexBuffer(o), h.begin();
            for(let c = 0; c < s.length; c++){
                const u = s[c];
                h.add(u);
            }
            h.finish(e.instructions);
            const a = h.geometry;
            a.indexBuffer.setDataWithSize(h.indexBuffer, h.indexSize, !0), a.buffers[0].setDataWithSize(h.attributeBuffer.float32View, h.attributeSize, !0);
            const l = h.batches;
            for(let c = 0; c < l.length; c++){
                const u = l[c];
                u.bindGroup = sh(u.textures.textures, u.textures.count);
            }
            return this._graphicsDataContextHash[t.uid] = e, e;
        }
        _initContext(t) {
            const e = new la;
            return e.context = t, this._gpuContextHash[t.uid] = e, t.on("destroy", this.onGraphicsContextDestroy, this), this._gpuContextHash[t.uid];
        }
        onGraphicsContextDestroy(t) {
            this._cleanGraphicsContextData(t), t.off("destroy", this.onGraphicsContextDestroy, this), this._gpuContextHash[t.uid] = null;
        }
        _cleanGraphicsContextData(t) {
            const e = this._gpuContextHash[t.uid];
            e.isBatchable || this._graphicsDataContextHash[t.uid] && (Rt.return(this.getContextRenderData(t)), this._graphicsDataContextHash[t.uid] = null), e.batches && e.batches.forEach((s)=>{
                Rt.return(s);
            });
        }
        destroy() {
            for(const t in this._gpuContextHash)this._gpuContextHash[t] && this.onGraphicsContextDestroy(this._gpuContextHash[t].context);
        }
    };
    zs.extension = {
        type: [
            Z.WebGLSystem,
            Z.WebGPUSystem,
            Z.CanvasSystem
        ],
        name: "graphicsContext"
    };
    zs.defaultOptions = {
        bezierSmoothness: .5
    };
    Jr = zs;
    const ua = 8, Me = 11920929e-14, da = 1;
    function tn(i, t, e, s, r, n, o, h, a, l) {
        const u = Math.min(.99, Math.max(0, l ?? Jr.defaultOptions.bezierSmoothness));
        let p = (da - u) / 1;
        return p *= p, fa(t, e, s, r, n, o, h, a, i, p), i;
    }
    function fa(i, t, e, s, r, n, o, h, a, l) {
        Ss(i, t, e, s, r, n, o, h, a, l, 0), a.push(o, h);
    }
    function Ss(i, t, e, s, r, n, o, h, a, l, c) {
        if (c > ua) return;
        const u = (i + e) / 2, p = (t + s) / 2, d = (e + r) / 2, x = (s + n) / 2, y = (r + o) / 2, m = (n + h) / 2, w = (u + d) / 2, b = (p + x) / 2, S = (d + y) / 2, A = (x + m) / 2, E = (w + S) / 2, T = (b + A) / 2;
        if (c > 0) {
            let k = o - i, z = h - t;
            const G = Math.abs((e - o) * z - (s - h) * k), R = Math.abs((r - o) * z - (n - h) * k);
            if (G > Me && R > Me) {
                if ((G + R) * (G + R) <= l * (k * k + z * z)) {
                    a.push(E, T);
                    return;
                }
            } else if (G > Me) {
                if (G * G <= l * (k * k + z * z)) {
                    a.push(E, T);
                    return;
                }
            } else if (R > Me) {
                if (R * R <= l * (k * k + z * z)) {
                    a.push(E, T);
                    return;
                }
            } else if (k = E - (i + o) / 2, z = T - (t + h) / 2, k * k + z * z <= l) {
                a.push(E, T);
                return;
            }
        }
        Ss(i, t, u, p, w, b, E, T, a, l, c + 1), Ss(E, T, S, A, y, m, o, h, a, l, c + 1);
    }
    const pa = 8, ma = 11920929e-14, ga = 1;
    function xa(i, t, e, s, r, n, o, h) {
        const l = Math.min(.99, Math.max(0, h ?? Jr.defaultOptions.bezierSmoothness));
        let c = (ga - l) / 1;
        return c *= c, ya(t, e, s, r, n, o, i, c), i;
    }
    function ya(i, t, e, s, r, n, o, h) {
        Cs(o, i, t, e, s, r, n, h, 0), o.push(r, n);
    }
    function Cs(i, t, e, s, r, n, o, h, a) {
        if (a > pa) return;
        const l = (t + s) / 2, c = (e + r) / 2, u = (s + n) / 2, p = (r + o) / 2, d = (l + u) / 2, x = (c + p) / 2;
        let y = n - t, m = o - e;
        const w = Math.abs((s - n) * m - (r - o) * y);
        if (w > ma) {
            if (w * w <= h * (y * y + m * m)) {
                i.push(d, x);
                return;
            }
        } else if (y = d - (t + n) / 2, m = x - (e + o) / 2, y * y + m * m <= h) {
            i.push(d, x);
            return;
        }
        Cs(i, t, e, l, c, d, x, h, a + 1), Cs(i, d, x, u, p, n, o, h, a + 1);
    }
    function en(i, t, e, s, r, n, o, h) {
        let a = Math.abs(r - n);
        (!o && r > n || o && n > r) && (a = 2 * Math.PI - a), h || (h = Math.max(6, Math.floor(6 * Math.pow(s, 1 / 3) * (a / Math.PI)))), h = Math.max(h, 3);
        let l = a / h, c = r;
        l *= o ? -1 : 1;
        for(let u = 0; u < h + 1; u++){
            const p = Math.cos(c), d = Math.sin(c), x = t + p * s, y = e + d * s;
            i.push(x, y), c += l;
        }
    }
    function _a(i, t, e, s, r, n) {
        const o = i[i.length - 2], a = i[i.length - 1] - e, l = o - t, c = r - e, u = s - t, p = Math.abs(a * u - l * c);
        if (p < 1e-8 || n === 0) {
            (i[i.length - 2] !== t || i[i.length - 1] !== e) && i.push(t, e);
            return;
        }
        const d = a * a + l * l, x = c * c + u * u, y = a * c + l * u, m = n * Math.sqrt(d) / p, w = n * Math.sqrt(x) / p, b = m * y / d, S = w * y / x, A = m * u + w * l, E = m * c + w * a, T = l * (w + b), k = a * (w + b), z = u * (m + S), G = c * (m + S), R = Math.atan2(k - E, T - A), B = Math.atan2(G - E, z - A);
        en(i, A + t, E + e, n, R, B, l * c > u * a);
    }
    const ce = Math.PI * 2, hs = {
        centerX: 0,
        centerY: 0,
        ang1: 0,
        ang2: 0
    }, as = ({ x: i, y: t }, e, s, r, n, o, h, a)=>{
        i *= e, t *= s;
        const l = r * i - n * t, c = n * i + r * t;
        return a.x = l + o, a.y = c + h, a;
    };
    function wa(i, t) {
        const e = t === -1.5707963267948966 ? -.551915024494 : 1.3333333333333333 * Math.tan(t / 4), s = t === 1.5707963267948966 ? .551915024494 : e, r = Math.cos(i), n = Math.sin(i), o = Math.cos(i + t), h = Math.sin(i + t);
        return [
            {
                x: r - n * s,
                y: n + r * s
            },
            {
                x: o + h * s,
                y: h - o * s
            },
            {
                x: o,
                y: h
            }
        ];
    }
    const zi = (i, t, e, s)=>{
        const r = i * s - t * e < 0 ? -1 : 1;
        let n = i * e + t * s;
        return n > 1 && (n = 1), n < -1 && (n = -1), r * Math.acos(n);
    }, ba = (i, t, e, s, r, n, o, h, a, l, c, u, p)=>{
        const d = Math.pow(r, 2), x = Math.pow(n, 2), y = Math.pow(c, 2), m = Math.pow(u, 2);
        let w = d * x - d * m - x * y;
        w < 0 && (w = 0), w /= d * m + x * y, w = Math.sqrt(w) * (o === h ? -1 : 1);
        const b = w * r / n * u, S = w * -n / r * c, A = l * b - a * S + (i + e) / 2, E = a * b + l * S + (t + s) / 2, T = (c - b) / r, k = (u - S) / n, z = (-c - b) / r, G = (-u - S) / n, R = zi(1, 0, T, k);
        let B = zi(T, k, z, G);
        h === 0 && B > 0 && (B -= ce), h === 1 && B < 0 && (B += ce), p.centerX = A, p.centerY = E, p.ang1 = R, p.ang2 = B;
    };
    function va(i, t, e, s, r, n, o, h = 0, a = 0, l = 0) {
        if (n === 0 || o === 0) return;
        const c = Math.sin(h * ce / 360), u = Math.cos(h * ce / 360), p = u * (t - s) / 2 + c * (e - r) / 2, d = -c * (t - s) / 2 + u * (e - r) / 2;
        if (p === 0 && d === 0) return;
        n = Math.abs(n), o = Math.abs(o);
        const x = Math.pow(p, 2) / Math.pow(n, 2) + Math.pow(d, 2) / Math.pow(o, 2);
        x > 1 && (n *= Math.sqrt(x), o *= Math.sqrt(x)), ba(t, e, s, r, n, o, a, l, c, u, p, d, hs);
        let { ang1: y, ang2: m } = hs;
        const { centerX: w, centerY: b } = hs;
        let S = Math.abs(m) / (ce / 4);
        Math.abs(1 - S) < 1e-7 && (S = 1);
        const A = Math.max(Math.ceil(S), 1);
        m /= A;
        let E = i[i.length - 2], T = i[i.length - 1];
        const k = {
            x: 0,
            y: 0
        };
        for(let z = 0; z < A; z++){
            const G = wa(y, m), { x: R, y: B } = as(G[0], n, o, u, c, w, b, k), { x: q, y: j } = as(G[1], n, o, u, c, w, b, k), { x: rt, y: kt } = as(G[2], n, o, u, c, w, b, k);
            tn(i, E, T, R, B, q, j, rt, kt), E = rt, T = kt, y += m;
        }
    }
    function Sa(i, t, e) {
        const s = (o, h)=>{
            const a = h.x - o.x, l = h.y - o.y, c = Math.sqrt(a * a + l * l), u = a / c, p = l / c;
            return {
                len: c,
                nx: u,
                ny: p
            };
        }, r = (o, h)=>{
            o === 0 ? i.moveTo(h.x, h.y) : i.lineTo(h.x, h.y);
        };
        let n = t[t.length - 1];
        for(let o = 0; o < t.length; o++){
            const h = t[o % t.length], a = h.radius ?? e;
            if (a <= 0) {
                r(o, h), n = h;
                continue;
            }
            const l = t[(o + 1) % t.length], c = s(h, n), u = s(h, l);
            if (c.len < 1e-4 || u.len < 1e-4) {
                r(o, h), n = h;
                continue;
            }
            let p = Math.asin(c.nx * u.ny - c.ny * u.nx), d = 1, x = !1;
            c.nx * u.nx - c.ny * -u.ny < 0 ? p < 0 ? p = Math.PI + p : (p = Math.PI - p, d = -1, x = !0) : p > 0 && (d = -1, x = !0);
            const y = p / 2;
            let m, w = Math.abs(Math.cos(y) * a / Math.sin(y));
            w > Math.min(c.len / 2, u.len / 2) ? (w = Math.min(c.len / 2, u.len / 2), m = Math.abs(w * Math.sin(y) / Math.cos(y))) : m = a;
            const b = h.x + u.nx * w + -u.ny * m * d, S = h.y + u.ny * w + u.nx * m * d, A = Math.atan2(c.ny, c.nx) + Math.PI / 2 * d, E = Math.atan2(u.ny, u.nx) - Math.PI / 2 * d;
            o === 0 && i.moveTo(b + Math.cos(A) * m, S + Math.sin(A) * m), i.arc(b, S, m, A, E, x), n = h;
        }
    }
    function Ca(i, t, e, s) {
        const r = (h, a)=>Math.sqrt((h.x - a.x) ** 2 + (h.y - a.y) ** 2), n = (h, a, l)=>({
                x: h.x + (a.x - h.x) * l,
                y: h.y + (a.y - h.y) * l
            }), o = t.length;
        for(let h = 0; h < o; h++){
            const a = t[(h + 1) % o], l = a.radius ?? e;
            if (l <= 0) {
                h === 0 ? i.moveTo(a.x, a.y) : i.lineTo(a.x, a.y);
                continue;
            }
            const c = t[h], u = t[(h + 2) % o], p = r(c, a);
            let d;
            if (p < 1e-4) d = a;
            else {
                const m = Math.min(p / 2, l);
                d = n(a, c, m / p);
            }
            const x = r(u, a);
            let y;
            if (x < 1e-4) y = a;
            else {
                const m = Math.min(x / 2, l);
                y = n(a, u, m / x);
            }
            h === 0 ? i.moveTo(d.x, d.y) : i.lineTo(d.x, d.y), i.quadraticCurveTo(a.x, a.y, y.x, y.y, s);
        }
    }
    const Ma = new J;
    class Pa {
        constructor(t){
            this.shapePrimitives = [], this._currentPoly = null, this._bounds = new _t, this._graphicsPath2D = t, this.signed = t.checkForHoles;
        }
        moveTo(t, e) {
            return this.startPoly(t, e), this;
        }
        lineTo(t, e) {
            this._ensurePoly();
            const s = this._currentPoly.points, r = s[s.length - 2], n = s[s.length - 1];
            return (r !== t || n !== e) && s.push(t, e), this;
        }
        arc(t, e, s, r, n, o) {
            this._ensurePoly(!1);
            const h = this._currentPoly.points;
            return en(h, t, e, s, r, n, o), this;
        }
        arcTo(t, e, s, r, n) {
            this._ensurePoly();
            const o = this._currentPoly.points;
            return _a(o, t, e, s, r, n), this;
        }
        arcToSvg(t, e, s, r, n, o, h) {
            const a = this._currentPoly.points;
            return va(a, this._currentPoly.lastX, this._currentPoly.lastY, o, h, t, e, s, r, n), this;
        }
        bezierCurveTo(t, e, s, r, n, o, h) {
            this._ensurePoly();
            const a = this._currentPoly;
            return tn(this._currentPoly.points, a.lastX, a.lastY, t, e, s, r, n, o, h), this;
        }
        quadraticCurveTo(t, e, s, r, n) {
            this._ensurePoly();
            const o = this._currentPoly;
            return xa(this._currentPoly.points, o.lastX, o.lastY, t, e, s, r, n), this;
        }
        closePath() {
            return this.endPoly(!0), this;
        }
        addPath(t, e) {
            this.endPoly(), e && !e.isIdentity() && (t = t.clone(!0), t.transform(e));
            const s = this.shapePrimitives, r = s.length;
            for(let n = 0; n < t.instructions.length; n++){
                const o = t.instructions[n];
                this[o.action](...o.data);
            }
            if (t.checkForHoles && s.length - r > 1) {
                let n = null;
                for(let o = r; o < s.length; o++){
                    const h = s[o];
                    if (h.shape.type === "polygon") {
                        const a = h.shape, l = n?.shape;
                        l && l.containsPolygon(a) ? (n.holes || (n.holes = []), n.holes.push(h), s.copyWithin(o, o + 1), s.length--, o--) : n = h;
                    }
                }
            }
            return this;
        }
        finish(t = !1) {
            this.endPoly(t);
        }
        rect(t, e, s, r, n) {
            return this.drawShape(new J(t, e, s, r), n), this;
        }
        circle(t, e, s, r) {
            return this.drawShape(new Hs(t, e, s), r), this;
        }
        poly(t, e, s) {
            const r = new le(t);
            return r.closePath = e, this.drawShape(r, s), this;
        }
        regularPoly(t, e, s, r, n = 0, o) {
            r = Math.max(r | 0, 3);
            const h = -1 * Math.PI / 2 + n, a = Math.PI * 2 / r, l = [];
            for(let c = 0; c < r; c++){
                const u = h - c * a;
                l.push(t + s * Math.cos(u), e + s * Math.sin(u));
            }
            return this.poly(l, !0, o), this;
        }
        roundPoly(t, e, s, r, n, o = 0, h) {
            if (r = Math.max(r | 0, 3), n <= 0) return this.regularPoly(t, e, s, r, o);
            const a = s * Math.sin(Math.PI / r) - .001;
            n = Math.min(n, a);
            const l = -1 * Math.PI / 2 + o, c = Math.PI * 2 / r, u = (r - 2) * Math.PI / r / 2;
            for(let p = 0; p < r; p++){
                const d = p * c + l, x = t + s * Math.cos(d), y = e + s * Math.sin(d), m = d + Math.PI + u, w = d - Math.PI - u, b = x + n * Math.cos(m), S = y + n * Math.sin(m), A = x + n * Math.cos(w), E = y + n * Math.sin(w);
                p === 0 ? this.moveTo(b, S) : this.lineTo(b, S), this.quadraticCurveTo(x, y, A, E, h);
            }
            return this.closePath();
        }
        roundShape(t, e, s = !1, r) {
            return t.length < 3 ? this : (s ? Ca(this, t, e, r) : Sa(this, t, e), this.closePath());
        }
        filletRect(t, e, s, r, n) {
            if (n === 0) return this.rect(t, e, s, r);
            const o = Math.min(s, r) / 2, h = Math.min(o, Math.max(-o, n)), a = t + s, l = e + r, c = h < 0 ? -h : 0, u = Math.abs(h);
            return this.moveTo(t, e + u).arcTo(t + c, e + c, t + u, e, u).lineTo(a - u, e).arcTo(a - c, e + c, a, e + u, u).lineTo(a, l - u).arcTo(a - c, l - c, t + s - u, l, u).lineTo(t + u, l).arcTo(t + c, l - c, t, l - u, u).closePath();
        }
        chamferRect(t, e, s, r, n, o) {
            if (n <= 0) return this.rect(t, e, s, r);
            const h = Math.min(n, Math.min(s, r) / 2), a = t + s, l = e + r, c = [
                t + h,
                e,
                a - h,
                e,
                a,
                e + h,
                a,
                l - h,
                a - h,
                l,
                t + h,
                l,
                t,
                l - h,
                t,
                e + h
            ];
            for(let u = c.length - 1; u >= 2; u -= 2)c[u] === c[u - 2] && c[u - 1] === c[u - 3] && c.splice(u - 1, 2);
            return this.poly(c, !0, o);
        }
        ellipse(t, e, s, r, n) {
            return this.drawShape(new Fs(t, e, s, r), n), this;
        }
        roundRect(t, e, s, r, n, o) {
            return this.drawShape(new Gs(t, e, s, r, n), o), this;
        }
        drawShape(t, e) {
            return this.endPoly(), this.shapePrimitives.push({
                shape: t,
                transform: e
            }), this;
        }
        startPoly(t, e) {
            let s = this._currentPoly;
            return s && this.endPoly(), s = new le, s.points.push(t, e), this._currentPoly = s, this;
        }
        endPoly(t = !1) {
            const e = this._currentPoly;
            return e && e.points.length > 2 && (e.closePath = t, this.shapePrimitives.push({
                shape: e
            })), this._currentPoly = null, this;
        }
        _ensurePoly(t = !0) {
            if (!this._currentPoly && (this._currentPoly = new le, t)) {
                const e = this.shapePrimitives[this.shapePrimitives.length - 1];
                if (e) {
                    let s = e.shape.x, r = e.shape.y;
                    if (e.transform && !e.transform.isIdentity()) {
                        const n = e.transform, o = s;
                        s = n.a * s + n.c * r + n.tx, r = n.b * o + n.d * r + n.ty;
                    }
                    this._currentPoly.points.push(s, r);
                } else this._currentPoly.points.push(0, 0);
            }
        }
        buildPath() {
            const t = this._graphicsPath2D;
            this.shapePrimitives.length = 0, this._currentPoly = null;
            for(let e = 0; e < t.instructions.length; e++){
                const s = t.instructions[e];
                this[s.action](...s.data);
            }
            this.finish();
        }
        get bounds() {
            const t = this._bounds;
            t.clear();
            const e = this.shapePrimitives;
            for(let s = 0; s < e.length; s++){
                const r = e[s], n = r.shape.getBounds(Ma);
                r.transform ? t.addRect(n, r.transform) : t.addRect(n);
            }
            return t;
        }
    }
    class Jt {
        constructor(t, e = !1){
            this.instructions = [], this.uid = it("graphicsPath"), this._dirty = !0, this.checkForHoles = e, typeof t == "string" ? qo(t, this) : this.instructions = t?.slice() ?? [];
        }
        get shapePath() {
            return this._shapePath || (this._shapePath = new Pa(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath;
        }
        addPath(t, e) {
            return t = t.clone(), this.instructions.push({
                action: "addPath",
                data: [
                    t,
                    e
                ]
            }), this._dirty = !0, this;
        }
        arc(...t) {
            return this.instructions.push({
                action: "arc",
                data: t
            }), this._dirty = !0, this;
        }
        arcTo(...t) {
            return this.instructions.push({
                action: "arcTo",
                data: t
            }), this._dirty = !0, this;
        }
        arcToSvg(...t) {
            return this.instructions.push({
                action: "arcToSvg",
                data: t
            }), this._dirty = !0, this;
        }
        bezierCurveTo(...t) {
            return this.instructions.push({
                action: "bezierCurveTo",
                data: t
            }), this._dirty = !0, this;
        }
        bezierCurveToShort(t, e, s, r, n) {
            const o = this.instructions[this.instructions.length - 1], h = this.getLastPoint(O.shared);
            let a = 0, l = 0;
            if (!o || o.action !== "bezierCurveTo") a = h.x, l = h.y;
            else {
                a = o.data[2], l = o.data[3];
                const c = h.x, u = h.y;
                a = c + (c - a), l = u + (u - l);
            }
            return this.instructions.push({
                action: "bezierCurveTo",
                data: [
                    a,
                    l,
                    t,
                    e,
                    s,
                    r,
                    n
                ]
            }), this._dirty = !0, this;
        }
        closePath() {
            return this.instructions.push({
                action: "closePath",
                data: []
            }), this._dirty = !0, this;
        }
        ellipse(...t) {
            return this.instructions.push({
                action: "ellipse",
                data: t
            }), this._dirty = !0, this;
        }
        lineTo(...t) {
            return this.instructions.push({
                action: "lineTo",
                data: t
            }), this._dirty = !0, this;
        }
        moveTo(...t) {
            return this.instructions.push({
                action: "moveTo",
                data: t
            }), this;
        }
        quadraticCurveTo(...t) {
            return this.instructions.push({
                action: "quadraticCurveTo",
                data: t
            }), this._dirty = !0, this;
        }
        quadraticCurveToShort(t, e, s) {
            const r = this.instructions[this.instructions.length - 1], n = this.getLastPoint(O.shared);
            let o = 0, h = 0;
            if (!r || r.action !== "quadraticCurveTo") o = n.x, h = n.y;
            else {
                o = r.data[0], h = r.data[1];
                const a = n.x, l = n.y;
                o = a + (a - o), h = l + (l - h);
            }
            return this.instructions.push({
                action: "quadraticCurveTo",
                data: [
                    o,
                    h,
                    t,
                    e,
                    s
                ]
            }), this._dirty = !0, this;
        }
        rect(t, e, s, r, n) {
            return this.instructions.push({
                action: "rect",
                data: [
                    t,
                    e,
                    s,
                    r,
                    n
                ]
            }), this._dirty = !0, this;
        }
        circle(t, e, s, r) {
            return this.instructions.push({
                action: "circle",
                data: [
                    t,
                    e,
                    s,
                    r
                ]
            }), this._dirty = !0, this;
        }
        roundRect(...t) {
            return this.instructions.push({
                action: "roundRect",
                data: t
            }), this._dirty = !0, this;
        }
        poly(...t) {
            return this.instructions.push({
                action: "poly",
                data: t
            }), this._dirty = !0, this;
        }
        regularPoly(...t) {
            return this.instructions.push({
                action: "regularPoly",
                data: t
            }), this._dirty = !0, this;
        }
        roundPoly(...t) {
            return this.instructions.push({
                action: "roundPoly",
                data: t
            }), this._dirty = !0, this;
        }
        roundShape(...t) {
            return this.instructions.push({
                action: "roundShape",
                data: t
            }), this._dirty = !0, this;
        }
        filletRect(...t) {
            return this.instructions.push({
                action: "filletRect",
                data: t
            }), this._dirty = !0, this;
        }
        chamferRect(...t) {
            return this.instructions.push({
                action: "chamferRect",
                data: t
            }), this._dirty = !0, this;
        }
        star(t, e, s, r, n, o, h) {
            n || (n = r / 2);
            const a = -1 * Math.PI / 2 + o, l = s * 2, c = Math.PI * 2 / l, u = [];
            for(let p = 0; p < l; p++){
                const d = p % 2 ? n : r, x = p * c + a;
                u.push(t + d * Math.cos(x), e + d * Math.sin(x));
            }
            return this.poly(u, !0, h), this;
        }
        clone(t = !1) {
            const e = new Jt;
            if (e.checkForHoles = this.checkForHoles, !t) e.instructions = this.instructions.slice();
            else for(let s = 0; s < this.instructions.length; s++){
                const r = this.instructions[s];
                e.instructions.push({
                    action: r.action,
                    data: r.data.slice()
                });
            }
            return e;
        }
        clear() {
            return this.instructions.length = 0, this._dirty = !0, this;
        }
        transform(t) {
            if (t.isIdentity()) return this;
            const e = t.a, s = t.b, r = t.c, n = t.d, o = t.tx, h = t.ty;
            let a = 0, l = 0, c = 0, u = 0, p = 0, d = 0, x = 0, y = 0;
            for(let m = 0; m < this.instructions.length; m++){
                const w = this.instructions[m], b = w.data;
                switch(w.action){
                    case "moveTo":
                    case "lineTo":
                        a = b[0], l = b[1], b[0] = e * a + r * l + o, b[1] = s * a + n * l + h;
                        break;
                    case "bezierCurveTo":
                        c = b[0], u = b[1], p = b[2], d = b[3], a = b[4], l = b[5], b[0] = e * c + r * u + o, b[1] = s * c + n * u + h, b[2] = e * p + r * d + o, b[3] = s * p + n * d + h, b[4] = e * a + r * l + o, b[5] = s * a + n * l + h;
                        break;
                    case "quadraticCurveTo":
                        c = b[0], u = b[1], a = b[2], l = b[3], b[0] = e * c + r * u + o, b[1] = s * c + n * u + h, b[2] = e * a + r * l + o, b[3] = s * a + n * l + h;
                        break;
                    case "arcToSvg":
                        a = b[5], l = b[6], x = b[0], y = b[1], b[0] = e * x + r * y, b[1] = s * x + n * y, b[5] = e * a + r * l + o, b[6] = s * a + n * l + h;
                        break;
                    case "circle":
                        b[4] = ie(b[3], t);
                        break;
                    case "rect":
                        b[4] = ie(b[4], t);
                        break;
                    case "ellipse":
                        b[8] = ie(b[8], t);
                        break;
                    case "roundRect":
                        b[5] = ie(b[5], t);
                        break;
                    case "addPath":
                        b[0].transform(t);
                        break;
                    case "poly":
                        b[2] = ie(b[2], t);
                        break;
                    default:
                        ft("unknown transform action", w.action);
                        break;
                }
            }
            return this._dirty = !0, this;
        }
        get bounds() {
            return this.shapePath.bounds;
        }
        getLastPoint(t) {
            let e = this.instructions.length - 1, s = this.instructions[e];
            if (!s) return t.x = 0, t.y = 0, t;
            for(; s.action === "closePath";){
                if (e--, e < 0) return t.x = 0, t.y = 0, t;
                s = this.instructions[e];
            }
            switch(s.action){
                case "moveTo":
                case "lineTo":
                    t.x = s.data[0], t.y = s.data[1];
                    break;
                case "quadraticCurveTo":
                    t.x = s.data[2], t.y = s.data[3];
                    break;
                case "bezierCurveTo":
                    t.x = s.data[4], t.y = s.data[5];
                    break;
                case "arc":
                case "arcToSvg":
                    t.x = s.data[5], t.y = s.data[6];
                    break;
                case "addPath":
                    s.data[0].getLastPoint(t);
                    break;
            }
            return t;
        }
    }
    function ie(i, t) {
        return i ? i.prepend(t) : t.clone();
    }
    function tt(i, t, e) {
        const s = i.getAttribute(t);
        return s ? Number(s) : e;
    }
    function Aa(i, t) {
        const e = i.querySelectorAll("defs");
        for(let s = 0; s < e.length; s++){
            const r = e[s];
            for(let n = 0; n < r.children.length; n++){
                const o = r.children[n];
                switch(o.nodeName.toLowerCase()){
                    case "lineargradient":
                        t.defs[o.id] = Ta(o);
                        break;
                    case "radialgradient":
                        t.defs[o.id] = ka();
                        break;
                }
            }
        }
    }
    function Ta(i) {
        const t = tt(i, "x1", 0), e = tt(i, "y1", 0), s = tt(i, "x2", 1), r = tt(i, "y2", 0), n = i.getAttribute("gradientUnits") || "objectBoundingBox", o = new Gt(t, e, s, r, n === "objectBoundingBox" ? "local" : "global");
        for(let h = 0; h < i.children.length; h++){
            const a = i.children[h], l = tt(a, "offset", 0), c = ot.shared.setValue(a.getAttribute("stop-color")).toNumber();
            o.addColorStop(l, c);
        }
        return o;
    }
    function ka(i) {
        return ft("[SVG Parser] Radial gradients are not yet supported"), new Gt(0, 0, 1, 0);
    }
    function Li(i) {
        const t = i.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
        return t ? t[1] : "";
    }
    const Oi = {
        fill: {
            type: "paint",
            default: 0
        },
        "fill-opacity": {
            type: "number",
            default: 1
        },
        stroke: {
            type: "paint",
            default: 0
        },
        "stroke-width": {
            type: "number",
            default: 1
        },
        "stroke-opacity": {
            type: "number",
            default: 1
        },
        "stroke-linecap": {
            type: "string",
            default: "butt"
        },
        "stroke-linejoin": {
            type: "string",
            default: "miter"
        },
        "stroke-miterlimit": {
            type: "number",
            default: 10
        },
        "stroke-dasharray": {
            type: "string",
            default: "none"
        },
        "stroke-dashoffset": {
            type: "number",
            default: 0
        },
        opacity: {
            type: "number",
            default: 1
        }
    };
    function sn(i, t) {
        const e = i.getAttribute("style"), s = {}, r = {}, n = {
            strokeStyle: s,
            fillStyle: r,
            useFill: !1,
            useStroke: !1
        };
        for(const o in Oi){
            const h = i.getAttribute(o);
            h && Di(t, n, o, h.trim());
        }
        if (e) {
            const o = e.split(";");
            for(let h = 0; h < o.length; h++){
                const a = o[h].trim(), [l, c] = a.split(":");
                Oi[l] && Di(t, n, l, c.trim());
            }
        }
        return {
            strokeStyle: n.useStroke ? s : null,
            fillStyle: n.useFill ? r : null,
            useFill: n.useFill,
            useStroke: n.useStroke
        };
    }
    function Di(i, t, e, s) {
        switch(e){
            case "stroke":
                if (s !== "none") {
                    if (s.startsWith("url(")) {
                        const r = Li(s);
                        t.strokeStyle.fill = i.defs[r];
                    } else t.strokeStyle.color = ot.shared.setValue(s).toNumber();
                    t.useStroke = !0;
                }
                break;
            case "stroke-width":
                t.strokeStyle.width = Number(s);
                break;
            case "fill":
                if (s !== "none") {
                    if (s.startsWith("url(")) {
                        const r = Li(s);
                        t.fillStyle.fill = i.defs[r];
                    } else t.fillStyle.color = ot.shared.setValue(s).toNumber();
                    t.useFill = !0;
                }
                break;
            case "fill-opacity":
                t.fillStyle.alpha = Number(s);
                break;
            case "stroke-opacity":
                t.strokeStyle.alpha = Number(s);
                break;
            case "opacity":
                t.fillStyle.alpha = Number(s), t.strokeStyle.alpha = Number(s);
                break;
        }
    }
    function Ia(i, t) {
        if (typeof i == "string") {
            const o = document.createElement("div");
            o.innerHTML = i.trim(), i = o.querySelector("svg");
        }
        const e = {
            context: t,
            defs: {},
            path: new Jt
        };
        Aa(i, e);
        const s = i.children, { fillStyle: r, strokeStyle: n } = sn(i, e);
        for(let o = 0; o < s.length; o++){
            const h = s[o];
            h.nodeName.toLowerCase() !== "defs" && rn(h, e, r, n);
        }
        return t;
    }
    function rn(i, t, e, s) {
        const r = i.children, { fillStyle: n, strokeStyle: o } = sn(i, t);
        n && e ? e = {
            ...e,
            ...n
        } : n && (e = n), o && s ? s = {
            ...s,
            ...o
        } : o && (s = o);
        const h = !e && !s;
        h && (e = {
            color: 0
        });
        let a, l, c, u, p, d, x, y, m, w, b, S, A, E, T, k, z;
        switch(i.nodeName.toLowerCase()){
            case "path":
                E = i.getAttribute("d"), i.getAttribute("fill-rule") === "evenodd" && ft("SVG Evenodd fill rule not supported, your svg may render incorrectly"), T = new Jt(E, !0), t.context.path(T), e && t.context.fill(e), s && t.context.stroke(s);
                break;
            case "circle":
                x = tt(i, "cx", 0), y = tt(i, "cy", 0), m = tt(i, "r", 0), t.context.ellipse(x, y, m, m), e && t.context.fill(e), s && t.context.stroke(s);
                break;
            case "rect":
                a = tt(i, "x", 0), l = tt(i, "y", 0), k = tt(i, "width", 0), z = tt(i, "height", 0), w = tt(i, "rx", 0), b = tt(i, "ry", 0), w || b ? t.context.roundRect(a, l, k, z, w || b) : t.context.rect(a, l, k, z), e && t.context.fill(e), s && t.context.stroke(s);
                break;
            case "ellipse":
                x = tt(i, "cx", 0), y = tt(i, "cy", 0), w = tt(i, "rx", 0), b = tt(i, "ry", 0), t.context.beginPath(), t.context.ellipse(x, y, w, b), e && t.context.fill(e), s && t.context.stroke(s);
                break;
            case "line":
                c = tt(i, "x1", 0), u = tt(i, "y1", 0), p = tt(i, "x2", 0), d = tt(i, "y2", 0), t.context.beginPath(), t.context.moveTo(c, u), t.context.lineTo(p, d), s && t.context.stroke(s);
                break;
            case "polygon":
                A = i.getAttribute("points"), S = A.match(/\d+/g).map((G)=>parseInt(G, 10)), t.context.poly(S, !0), e && t.context.fill(e), s && t.context.stroke(s);
                break;
            case "polyline":
                A = i.getAttribute("points"), S = A.match(/\d+/g).map((G)=>parseInt(G, 10)), t.context.poly(S, !1), s && t.context.stroke(s);
                break;
            case "g":
            case "svg":
                break;
            default:
                {
                    ft(`[SVG parser] <${i.nodeName}> elements unsupported`);
                    break;
                }
        }
        h && (e = null);
        for(let G = 0; G < r.length; G++)rn(r[G], t, e, s);
    }
    function Ea(i) {
        return ot.isColorLike(i);
    }
    function Ui(i) {
        return i instanceof Ws;
    }
    function Yi(i) {
        return i instanceof Gt;
    }
    function Ra(i) {
        return i instanceof $;
    }
    function Ba(i, t, e) {
        const s = ot.shared.setValue(t ?? 0);
        return i.color = s.toNumber(), i.alpha = s.alpha === 1 ? e.alpha : s.alpha, i.texture = $.WHITE, {
            ...e,
            ...i
        };
    }
    function Wa(i, t, e) {
        return i.texture = t, {
            ...e,
            ...i
        };
    }
    function Xi(i, t, e) {
        return i.fill = t, i.color = 16777215, i.texture = t.texture, i.matrix = t.transform, {
            ...e,
            ...i
        };
    }
    function Vi(i, t, e) {
        return t.buildGradient(), i.fill = t, i.color = 16777215, i.texture = t.texture, i.matrix = t.transform, i.textureSpace = t.textureSpace, {
            ...e,
            ...i
        };
    }
    function Ha(i, t) {
        const e = {
            ...t,
            ...i
        }, s = ot.shared.setValue(e.color);
        return e.alpha *= s.alpha, e.color = s.toNumber(), e;
    }
    function Xt(i, t) {
        if (i == null) return null;
        const e = {}, s = i;
        return Ea(i) ? Ba(e, i, t) : Ra(i) ? Wa(e, i, t) : Ui(i) ? Xi(e, i, t) : Yi(i) ? Vi(e, i, t) : s.fill && Ui(s.fill) ? Xi(s, s.fill, t) : s.fill && Yi(s.fill) ? Vi(s, s.fill, t) : Ha(s, t);
    }
    function Re(i, t) {
        const { width: e, alignment: s, miterLimit: r, cap: n, join: o, pixelLine: h, ...a } = t, l = Xt(i, a);
        return l ? {
            width: e,
            alignment: s,
            miterLimit: r,
            cap: n,
            join: o,
            pixelLine: h,
            ...l
        } : null;
    }
    const Fa = new O, Ni = new U, Ls = class Ct extends At {
        constructor(){
            super(...arguments), this.uid = it("graphicsContext"), this.dirty = !0, this.batchMode = "auto", this.instructions = [], this._activePath = new Jt, this._transform = new U, this._fillStyle = {
                ...Ct.defaultFillStyle
            }, this._strokeStyle = {
                ...Ct.defaultStrokeStyle
            }, this._stateStack = [], this._tick = 0, this._bounds = new _t, this._boundsDirty = !0;
        }
        clone() {
            const t = new Ct;
            return t.batchMode = this.batchMode, t.instructions = this.instructions.slice(), t._activePath = this._activePath.clone(), t._transform = this._transform.clone(), t._fillStyle = {
                ...this._fillStyle
            }, t._strokeStyle = {
                ...this._strokeStyle
            }, t._stateStack = this._stateStack.slice(), t._bounds = this._bounds.clone(), t._boundsDirty = !0, t;
        }
        get fillStyle() {
            return this._fillStyle;
        }
        set fillStyle(t) {
            this._fillStyle = Xt(t, Ct.defaultFillStyle);
        }
        get strokeStyle() {
            return this._strokeStyle;
        }
        set strokeStyle(t) {
            this._strokeStyle = Re(t, Ct.defaultStrokeStyle);
        }
        setFillStyle(t) {
            return this._fillStyle = Xt(t, Ct.defaultFillStyle), this;
        }
        setStrokeStyle(t) {
            return this._strokeStyle = Xt(t, Ct.defaultStrokeStyle), this;
        }
        texture(t, e, s, r, n, o) {
            return this.instructions.push({
                action: "texture",
                data: {
                    image: t,
                    dx: s || 0,
                    dy: r || 0,
                    dw: n || t.frame.width,
                    dh: o || t.frame.height,
                    transform: this._transform.clone(),
                    alpha: this._fillStyle.alpha,
                    style: e ? ot.shared.setValue(e).toNumber() : 16777215
                }
            }), this.onUpdate(), this;
        }
        beginPath() {
            return this._activePath = new Jt, this;
        }
        fill(t, e) {
            let s;
            const r = this.instructions[this.instructions.length - 1];
            return this._tick === 0 && r && r.action === "stroke" ? s = r.data.path : s = this._activePath.clone(), s ? (t != null && (e !== void 0 && typeof t == "number" && (K(st, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), t = {
                color: t,
                alpha: e
            }), this._fillStyle = Xt(t, Ct.defaultFillStyle)), this.instructions.push({
                action: "fill",
                data: {
                    style: this.fillStyle,
                    path: s
                }
            }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
        }
        _initNextPathLocation() {
            const { x: t, y: e } = this._activePath.getLastPoint(O.shared);
            this._activePath.clear(), this._activePath.moveTo(t, e);
        }
        stroke(t) {
            let e;
            const s = this.instructions[this.instructions.length - 1];
            return this._tick === 0 && s && s.action === "fill" ? e = s.data.path : e = this._activePath.clone(), e ? (t != null && (this._strokeStyle = Re(t, Ct.defaultStrokeStyle)), this.instructions.push({
                action: "stroke",
                data: {
                    style: this.strokeStyle,
                    path: e
                }
            }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
        }
        cut() {
            for(let t = 0; t < 2; t++){
                const e = this.instructions[this.instructions.length - 1 - t], s = this._activePath.clone();
                if (e && (e.action === "stroke" || e.action === "fill")) if (e.data.hole) e.data.hole.addPath(s);
                else {
                    e.data.hole = s;
                    break;
                }
            }
            return this._initNextPathLocation(), this;
        }
        arc(t, e, s, r, n, o) {
            this._tick++;
            const h = this._transform;
            return this._activePath.arc(h.a * t + h.c * e + h.tx, h.b * t + h.d * e + h.ty, s, r, n, o), this;
        }
        arcTo(t, e, s, r, n) {
            this._tick++;
            const o = this._transform;
            return this._activePath.arcTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * s + o.c * r + o.tx, o.b * s + o.d * r + o.ty, n), this;
        }
        arcToSvg(t, e, s, r, n, o, h) {
            this._tick++;
            const a = this._transform;
            return this._activePath.arcToSvg(t, e, s, r, n, a.a * o + a.c * h + a.tx, a.b * o + a.d * h + a.ty), this;
        }
        bezierCurveTo(t, e, s, r, n, o, h) {
            this._tick++;
            const a = this._transform;
            return this._activePath.bezierCurveTo(a.a * t + a.c * e + a.tx, a.b * t + a.d * e + a.ty, a.a * s + a.c * r + a.tx, a.b * s + a.d * r + a.ty, a.a * n + a.c * o + a.tx, a.b * n + a.d * o + a.ty, h), this;
        }
        closePath() {
            return this._tick++, this._activePath?.closePath(), this;
        }
        ellipse(t, e, s, r) {
            return this._tick++, this._activePath.ellipse(t, e, s, r, this._transform.clone()), this;
        }
        circle(t, e, s) {
            return this._tick++, this._activePath.circle(t, e, s, this._transform.clone()), this;
        }
        path(t) {
            return this._tick++, this._activePath.addPath(t, this._transform.clone()), this;
        }
        lineTo(t, e) {
            this._tick++;
            const s = this._transform;
            return this._activePath.lineTo(s.a * t + s.c * e + s.tx, s.b * t + s.d * e + s.ty), this;
        }
        moveTo(t, e) {
            this._tick++;
            const s = this._transform, r = this._activePath.instructions, n = s.a * t + s.c * e + s.tx, o = s.b * t + s.d * e + s.ty;
            return r.length === 1 && r[0].action === "moveTo" ? (r[0].data[0] = n, r[0].data[1] = o, this) : (this._activePath.moveTo(n, o), this);
        }
        quadraticCurveTo(t, e, s, r, n) {
            this._tick++;
            const o = this._transform;
            return this._activePath.quadraticCurveTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * s + o.c * r + o.tx, o.b * s + o.d * r + o.ty, n), this;
        }
        rect(t, e, s, r) {
            return this._tick++, this._activePath.rect(t, e, s, r, this._transform.clone()), this;
        }
        roundRect(t, e, s, r, n) {
            return this._tick++, this._activePath.roundRect(t, e, s, r, n, this._transform.clone()), this;
        }
        poly(t, e) {
            return this._tick++, this._activePath.poly(t, e, this._transform.clone()), this;
        }
        regularPoly(t, e, s, r, n = 0, o) {
            return this._tick++, this._activePath.regularPoly(t, e, s, r, n, o), this;
        }
        roundPoly(t, e, s, r, n, o) {
            return this._tick++, this._activePath.roundPoly(t, e, s, r, n, o), this;
        }
        roundShape(t, e, s, r) {
            return this._tick++, this._activePath.roundShape(t, e, s, r), this;
        }
        filletRect(t, e, s, r, n) {
            return this._tick++, this._activePath.filletRect(t, e, s, r, n), this;
        }
        chamferRect(t, e, s, r, n, o) {
            return this._tick++, this._activePath.chamferRect(t, e, s, r, n, o), this;
        }
        star(t, e, s, r, n = 0, o = 0) {
            return this._tick++, this._activePath.star(t, e, s, r, n, o, this._transform.clone()), this;
        }
        svg(t) {
            return this._tick++, Ia(t, this), this;
        }
        restore() {
            const t = this._stateStack.pop();
            return t && (this._transform = t.transform, this._fillStyle = t.fillStyle, this._strokeStyle = t.strokeStyle), this;
        }
        save() {
            return this._stateStack.push({
                transform: this._transform.clone(),
                fillStyle: {
                    ...this._fillStyle
                },
                strokeStyle: {
                    ...this._strokeStyle
                }
            }), this;
        }
        getTransform() {
            return this._transform;
        }
        resetTransform() {
            return this._transform.identity(), this;
        }
        rotate(t) {
            return this._transform.rotate(t), this;
        }
        scale(t, e = t) {
            return this._transform.scale(t, e), this;
        }
        setTransform(t, e, s, r, n, o) {
            return t instanceof U ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this) : (this._transform.set(t, e, s, r, n, o), this);
        }
        transform(t, e, s, r, n, o) {
            return t instanceof U ? (this._transform.append(t), this) : (Ni.set(t, e, s, r, n, o), this._transform.append(Ni), this);
        }
        translate(t, e = t) {
            return this._transform.translate(t, e), this;
        }
        clear() {
            return this._activePath.clear(), this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this;
        }
        onUpdate() {
            this.dirty || (this.emit("update", this, 16), this.dirty = !0, this._boundsDirty = !0);
        }
        get bounds() {
            if (!this._boundsDirty) return this._bounds;
            const t = this._bounds;
            t.clear();
            for(let e = 0; e < this.instructions.length; e++){
                const s = this.instructions[e], r = s.action;
                if (r === "fill") {
                    const n = s.data;
                    t.addBounds(n.path.bounds);
                } else if (r === "texture") {
                    const n = s.data;
                    t.addFrame(n.dx, n.dy, n.dx + n.dw, n.dy + n.dh, n.transform);
                }
                if (r === "stroke") {
                    const n = s.data, o = n.style.alignment, h = n.style.width * (1 - o), a = n.path.bounds;
                    t.addFrame(a.minX - h, a.minY - h, a.maxX + h, a.maxY + h);
                }
            }
            return t;
        }
        containsPoint(t) {
            if (!this.bounds.containsPoint(t.x, t.y)) return !1;
            const e = this.instructions;
            let s = !1;
            for(let r = 0; r < e.length; r++){
                const n = e[r], o = n.data, h = o.path;
                if (!n.action || !h) continue;
                const a = o.style, l = h.shapePath.shapePrimitives;
                for(let c = 0; c < l.length; c++){
                    const u = l[c].shape;
                    if (!a || !u) continue;
                    const p = l[c].transform, d = p ? p.applyInverse(t, Fa) : t;
                    if (n.action === "fill") s = u.contains(d.x, d.y);
                    else {
                        const y = a;
                        s = u.strokeContains(d.x, d.y, y.width, y.alignment);
                    }
                    const x = o.hole;
                    if (x) {
                        const y = x.shapePath?.shapePrimitives;
                        if (y) for(let m = 0; m < y.length; m++)y[m].shape.contains(d.x, d.y) && (s = !1);
                    }
                    if (s) return !0;
                }
            }
            return s;
        }
        destroy(t = !1) {
            if (this._stateStack.length = 0, this._transform = null, this.emit("destroy", this), this.removeAllListeners(), typeof t == "boolean" ? t : t?.texture) {
                const s = typeof t == "boolean" ? t : t?.textureSource;
                this._fillStyle.texture && this._fillStyle.texture.destroy(s), this._strokeStyle.texture && this._strokeStyle.texture.destroy(s);
            }
            this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null;
        }
    };
    Ls.defaultFillStyle = {
        color: 16777215,
        alpha: 1,
        texture: $.WHITE,
        matrix: null,
        fill: null,
        textureSpace: "local"
    };
    Ls.defaultStrokeStyle = {
        width: 1,
        color: 16777215,
        alpha: 1,
        alignment: .5,
        miterLimit: 10,
        cap: "butt",
        join: "miter",
        texture: $.WHITE,
        matrix: null,
        fill: null,
        textureSpace: "local",
        pixelLine: !1
    };
    let xt = Ls;
    const $i = [
        "align",
        "breakWords",
        "cssOverrides",
        "fontVariant",
        "fontWeight",
        "leading",
        "letterSpacing",
        "lineHeight",
        "padding",
        "textBaseline",
        "trim",
        "whiteSpace",
        "wordWrap",
        "wordWrapWidth",
        "fontFamily",
        "fontStyle",
        "fontSize"
    ];
    Ga = function(i) {
        const t = [];
        let e = 0;
        for(let s = 0; s < $i.length; s++){
            const r = `_${$i[s]}`;
            t[e++] = i[r];
        }
        return e = nn(i._fill, t, e), e = za(i._stroke, t, e), e = La(i.dropShadow, t, e), t.join("-");
    };
    function nn(i, t, e) {
        return i && (t[e++] = i.color, t[e++] = i.alpha, t[e++] = i.fill?.styleKey), e;
    }
    function za(i, t, e) {
        return i && (e = nn(i, t, e), t[e++] = i.width, t[e++] = i.alignment, t[e++] = i.cap, t[e++] = i.join, t[e++] = i.miterLimit), e;
    }
    function La(i, t, e) {
        return i && (t[e++] = i.alpha, t[e++] = i.angle, t[e++] = i.blur, t[e++] = i.distance, t[e++] = ot.shared.setValue(i.color).toNumber()), e;
    }
    const Os = class qt extends At {
        constructor(t = {}){
            super(), Oa(t);
            const e = {
                ...qt.defaultTextStyle,
                ...t
            };
            for(const s in e){
                const r = s;
                this[r] = e[s];
            }
            this.update();
        }
        get align() {
            return this._align;
        }
        set align(t) {
            this._align = t, this.update();
        }
        get breakWords() {
            return this._breakWords;
        }
        set breakWords(t) {
            this._breakWords = t, this.update();
        }
        get dropShadow() {
            return this._dropShadow;
        }
        set dropShadow(t) {
            t !== null && typeof t == "object" ? this._dropShadow = this._createProxy({
                ...qt.defaultDropShadow,
                ...t
            }) : this._dropShadow = t ? this._createProxy({
                ...qt.defaultDropShadow
            }) : null, this.update();
        }
        get fontFamily() {
            return this._fontFamily;
        }
        set fontFamily(t) {
            this._fontFamily = t, this.update();
        }
        get fontSize() {
            return this._fontSize;
        }
        set fontSize(t) {
            typeof t == "string" ? this._fontSize = parseInt(t, 10) : this._fontSize = t, this.update();
        }
        get fontStyle() {
            return this._fontStyle;
        }
        set fontStyle(t) {
            this._fontStyle = t.toLowerCase(), this.update();
        }
        get fontVariant() {
            return this._fontVariant;
        }
        set fontVariant(t) {
            this._fontVariant = t, this.update();
        }
        get fontWeight() {
            return this._fontWeight;
        }
        set fontWeight(t) {
            this._fontWeight = t, this.update();
        }
        get leading() {
            return this._leading;
        }
        set leading(t) {
            this._leading = t, this.update();
        }
        get letterSpacing() {
            return this._letterSpacing;
        }
        set letterSpacing(t) {
            this._letterSpacing = t, this.update();
        }
        get lineHeight() {
            return this._lineHeight;
        }
        set lineHeight(t) {
            this._lineHeight = t, this.update();
        }
        get padding() {
            return this._padding;
        }
        set padding(t) {
            this._padding = t, this.update();
        }
        get trim() {
            return this._trim;
        }
        set trim(t) {
            this._trim = t, this.update();
        }
        get textBaseline() {
            return this._textBaseline;
        }
        set textBaseline(t) {
            this._textBaseline = t, this.update();
        }
        get whiteSpace() {
            return this._whiteSpace;
        }
        set whiteSpace(t) {
            this._whiteSpace = t, this.update();
        }
        get wordWrap() {
            return this._wordWrap;
        }
        set wordWrap(t) {
            this._wordWrap = t, this.update();
        }
        get wordWrapWidth() {
            return this._wordWrapWidth;
        }
        set wordWrapWidth(t) {
            this._wordWrapWidth = t, this.update();
        }
        get fill() {
            return this._originalFill;
        }
        set fill(t) {
            t !== this._originalFill && (this._originalFill = t, this._isFillStyle(t) && (this._originalFill = this._createProxy({
                ...xt.defaultFillStyle,
                ...t
            }, ()=>{
                this._fill = Xt({
                    ...this._originalFill
                }, xt.defaultFillStyle);
            })), this._fill = Xt(t === 0 ? "black" : t, xt.defaultFillStyle), this.update());
        }
        get stroke() {
            return this._originalStroke;
        }
        set stroke(t) {
            t !== this._originalStroke && (this._originalStroke = t, this._isFillStyle(t) && (this._originalStroke = this._createProxy({
                ...xt.defaultStrokeStyle,
                ...t
            }, ()=>{
                this._stroke = Re({
                    ...this._originalStroke
                }, xt.defaultStrokeStyle);
            })), this._stroke = Re(t, xt.defaultStrokeStyle), this.update());
        }
        _generateKey() {
            return this._styleKey = Ga(this), this._styleKey;
        }
        update() {
            this._styleKey = null, this.emit("update", this);
        }
        reset() {
            const t = qt.defaultTextStyle;
            for(const e in t)this[e] = t[e];
        }
        get styleKey() {
            return this._styleKey || this._generateKey();
        }
        clone() {
            return new qt({
                align: this.align,
                breakWords: this.breakWords,
                dropShadow: this._dropShadow ? {
                    ...this._dropShadow
                } : null,
                fill: this._fill,
                fontFamily: this.fontFamily,
                fontSize: this.fontSize,
                fontStyle: this.fontStyle,
                fontVariant: this.fontVariant,
                fontWeight: this.fontWeight,
                leading: this.leading,
                letterSpacing: this.letterSpacing,
                lineHeight: this.lineHeight,
                padding: this.padding,
                stroke: this._stroke,
                textBaseline: this.textBaseline,
                whiteSpace: this.whiteSpace,
                wordWrap: this.wordWrap,
                wordWrapWidth: this.wordWrapWidth
            });
        }
        destroy(t = !1) {
            if (this.removeAllListeners(), typeof t == "boolean" ? t : t?.texture) {
                const s = typeof t == "boolean" ? t : t?.textureSource;
                this._fill?.texture && this._fill.texture.destroy(s), this._originalFill?.texture && this._originalFill.texture.destroy(s), this._stroke?.texture && this._stroke.texture.destroy(s), this._originalStroke?.texture && this._originalStroke.texture.destroy(s);
            }
            this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null;
        }
        _createProxy(t, e) {
            return new Proxy(t, {
                set: (s, r, n)=>(s[r] = n, e?.(r, n), this.update(), !0)
            });
        }
        _isFillStyle(t) {
            return (t ?? null) !== null && !(ot.isColorLike(t) || t instanceof Gt || t instanceof Ws);
        }
    };
    Os.defaultDropShadow = {
        alpha: 1,
        angle: Math.PI / 6,
        blur: 0,
        color: "black",
        distance: 5
    };
    Os.defaultTextStyle = {
        align: "left",
        breakWords: !1,
        dropShadow: null,
        fill: "black",
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        leading: 0,
        letterSpacing: 0,
        lineHeight: 0,
        padding: 0,
        stroke: null,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100
    };
    Be = Os;
    function Oa(i) {
        const t = i;
        if (typeof t.dropShadow == "boolean" && t.dropShadow) {
            const e = Be.defaultDropShadow;
            i.dropShadow = {
                alpha: t.dropShadowAlpha ?? e.alpha,
                angle: t.dropShadowAngle ?? e.angle,
                blur: t.dropShadowBlur ?? e.blur,
                color: t.dropShadowColor ?? e.color,
                distance: t.dropShadowDistance ?? e.distance
            };
        }
        if (t.strokeThickness !== void 0) {
            K(st, "strokeThickness is now a part of stroke");
            const e = t.stroke;
            let s = {};
            if (ot.isColorLike(e)) s.color = e;
            else if (e instanceof Gt || e instanceof Ws) s.fill = e;
            else if (Object.hasOwnProperty.call(e, "color") || Object.hasOwnProperty.call(e, "fill")) s = e;
            else throw new Error("Invalid stroke value.");
            i.stroke = {
                ...s,
                width: t.strokeThickness
            };
        }
        if (Array.isArray(t.fillGradientStops)) {
            K(st, "gradient fill is now a fill pattern: `new FillGradient(...)`");
            let e;
            i.fontSize == null ? i.fontSize = Be.defaultTextStyle.fontSize : typeof i.fontSize == "string" ? e = parseInt(i.fontSize, 10) : e = i.fontSize;
            const s = new Gt({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: (e || 0) * 1.7
                }
            }), r = t.fillGradientStops.map((n)=>ot.shared.setValue(n).toNumber());
            r.forEach((n, o)=>{
                const h = o / (r.length - 1);
                s.addColorStop(h, n);
            }), i.fill = {
                fill: s
            };
        }
    }
    const Da = [
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui"
    ];
    Ua = function(i) {
        const t = typeof i.fontSize == "number" ? `${i.fontSize}px` : i.fontSize;
        let e = i.fontFamily;
        Array.isArray(i.fontFamily) || (e = i.fontFamily.split(","));
        for(let s = e.length - 1; s >= 0; s--){
            let r = e[s].trim();
            !/([\"\'])[^\'\"]+\1/.test(r) && !Da.includes(r) && (r = `"${r}"`), e[s] = r;
        }
        return `${i.fontStyle} ${i.fontVariant} ${i.fontWeight} ${t} ${e.join(",")}`;
    };
    const ls = {
        willReadFrequently: !0
    }, wt = class W {
        static get experimentalLetterSpacingSupported() {
            let t = W._experimentalLetterSpacingSupported;
            if (t !== void 0) {
                const e = yt.get().getCanvasRenderingContext2D().prototype;
                t = W._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e;
            }
            return t;
        }
        constructor(t, e, s, r, n, o, h, a, l){
            this.text = t, this.style = e, this.width = s, this.height = r, this.lines = n, this.lineWidths = o, this.lineHeight = h, this.maxLineWidth = a, this.fontProperties = l;
        }
        static measureText(t = " ", e, s = W._canvas, r = e.wordWrap) {
            const n = `${t}:${e.styleKey}`;
            if (W._measurementCache[n]) return W._measurementCache[n];
            const o = Ua(e), h = W.measureFont(o);
            h.fontSize === 0 && (h.fontSize = e.fontSize, h.ascent = e.fontSize);
            const a = W.__context;
            a.font = o;
            const c = (r ? W._wordWrap(t, e, s) : t).split(/(?:\r\n|\r|\n)/), u = new Array(c.length);
            let p = 0;
            for(let b = 0; b < c.length; b++){
                const S = W._measureText(c[b], e.letterSpacing, a);
                u[b] = S, p = Math.max(p, S);
            }
            const d = e._stroke?.width || 0;
            let x = p + d;
            e.dropShadow && (x += e.dropShadow.distance);
            const y = e.lineHeight || h.fontSize;
            let m = Math.max(y, h.fontSize + d) + (c.length - 1) * (y + e.leading);
            return e.dropShadow && (m += e.dropShadow.distance), new W(t, e, x, m, c, u, y + e.leading, p, h);
        }
        static _measureText(t, e, s) {
            let r = !1;
            W.experimentalLetterSpacingSupported && (W.experimentalLetterSpacing ? (s.letterSpacing = `${e}px`, s.textLetterSpacing = `${e}px`, r = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
            const n = s.measureText(t);
            let o = n.width;
            const h = -n.actualBoundingBoxLeft;
            let l = n.actualBoundingBoxRight - h;
            if (o > 0) if (r) o -= e, l -= e;
            else {
                const c = (W.graphemeSegmenter(t).length - 1) * e;
                o += c, l += c;
            }
            return Math.max(o, l);
        }
        static _wordWrap(t, e, s = W._canvas) {
            const r = s.getContext("2d", ls);
            let n = 0, o = "", h = "";
            const a = Object.create(null), { letterSpacing: l, whiteSpace: c } = e, u = W._collapseSpaces(c), p = W._collapseNewlines(c);
            let d = !u;
            const x = e.wordWrapWidth + l, y = W._tokenize(t);
            for(let m = 0; m < y.length; m++){
                let w = y[m];
                if (W._isNewline(w)) {
                    if (!p) {
                        h += W._addLine(o), d = !u, o = "", n = 0;
                        continue;
                    }
                    w = " ";
                }
                if (u) {
                    const S = W.isBreakingSpace(w), A = W.isBreakingSpace(o[o.length - 1]);
                    if (S && A) continue;
                }
                const b = W._getFromCache(w, l, a, r);
                if (b > x) if (o !== "" && (h += W._addLine(o), o = "", n = 0), W.canBreakWords(w, e.breakWords)) {
                    const S = W.wordWrapSplit(w);
                    for(let A = 0; A < S.length; A++){
                        let E = S[A], T = E, k = 1;
                        for(; S[A + k];){
                            const G = S[A + k];
                            if (!W.canBreakChars(T, G, w, A, e.breakWords)) E += G;
                            else break;
                            T = G, k++;
                        }
                        A += k - 1;
                        const z = W._getFromCache(E, l, a, r);
                        z + n > x && (h += W._addLine(o), d = !1, o = "", n = 0), o += E, n += z;
                    }
                } else {
                    o.length > 0 && (h += W._addLine(o), o = "", n = 0);
                    const S = m === y.length - 1;
                    h += W._addLine(w, !S), d = !1, o = "", n = 0;
                }
                else b + n > x && (d = !1, h += W._addLine(o), o = "", n = 0), (o.length > 0 || !W.isBreakingSpace(w) || d) && (o += w, n += b);
            }
            return h += W._addLine(o, !1), h;
        }
        static _addLine(t, e = !0) {
            return t = W._trimRight(t), t = e ? `${t}
` : t, t;
        }
        static _getFromCache(t, e, s, r) {
            let n = s[t];
            return typeof n != "number" && (n = W._measureText(t, e, r) + e, s[t] = n), n;
        }
        static _collapseSpaces(t) {
            return t === "normal" || t === "pre-line";
        }
        static _collapseNewlines(t) {
            return t === "normal";
        }
        static _trimRight(t) {
            if (typeof t != "string") return "";
            for(let e = t.length - 1; e >= 0; e--){
                const s = t[e];
                if (!W.isBreakingSpace(s)) break;
                t = t.slice(0, -1);
            }
            return t;
        }
        static _isNewline(t) {
            return typeof t != "string" ? !1 : W._newlines.includes(t.charCodeAt(0));
        }
        static isBreakingSpace(t, e) {
            return typeof t != "string" ? !1 : W._breakingSpaces.includes(t.charCodeAt(0));
        }
        static _tokenize(t) {
            const e = [];
            let s = "";
            if (typeof t != "string") return e;
            for(let r = 0; r < t.length; r++){
                const n = t[r], o = t[r + 1];
                if (W.isBreakingSpace(n, o) || W._isNewline(n)) {
                    s !== "" && (e.push(s), s = ""), e.push(n);
                    continue;
                }
                s += n;
            }
            return s !== "" && e.push(s), e;
        }
        static canBreakWords(t, e) {
            return e;
        }
        static canBreakChars(t, e, s, r, n) {
            return !0;
        }
        static wordWrapSplit(t) {
            return W.graphemeSegmenter(t);
        }
        static measureFont(t) {
            if (W._fonts[t]) return W._fonts[t];
            const e = W._context;
            e.font = t;
            const s = e.measureText(W.METRICS_STRING + W.BASELINE_SYMBOL), r = {
                ascent: s.actualBoundingBoxAscent,
                descent: s.actualBoundingBoxDescent,
                fontSize: s.actualBoundingBoxAscent + s.actualBoundingBoxDescent
            };
            return W._fonts[t] = r, r;
        }
        static clearMetrics(t = "") {
            t ? delete W._fonts[t] : W._fonts = {};
        }
        static get _canvas() {
            if (!W.__canvas) {
                let t;
                try {
                    const e = new OffscreenCanvas(0, 0);
                    if (e.getContext("2d", ls)?.measureText) return W.__canvas = e, e;
                    t = yt.get().createCanvas();
                } catch  {
                    t = yt.get().createCanvas();
                }
                t.width = t.height = 10, W.__canvas = t;
            }
            return W.__canvas;
        }
        static get _context() {
            return W.__context || (W.__context = W._canvas.getContext("2d", ls)), W.__context;
        }
    };
    wt.METRICS_STRING = "|ÉqÅ";
    wt.BASELINE_SYMBOL = "M";
    wt.BASELINE_MULTIPLIER = 1.4;
    wt.HEIGHT_MULTIPLIER = 2;
    wt.graphemeSegmenter = (()=>{
        if (typeof Intl?.Segmenter == "function") {
            const i = new Intl.Segmenter;
            return (t)=>[
                    ...i.segment(t)
                ].map((e)=>e.segment);
        }
        return (i)=>[
                ...i
            ];
    })();
    wt.experimentalLetterSpacing = !1;
    wt._fonts = {};
    wt._newlines = [
        10,
        13
    ];
    wt._breakingSpaces = [
        9,
        32,
        8192,
        8193,
        8194,
        8195,
        8196,
        8197,
        8198,
        8200,
        8201,
        8202,
        8287,
        12288
    ];
    wt._measurementCache = {};
    Ya = wt;
    zt = class extends Is {
        constructor(t){
            t instanceof xt && (t = {
                context: t
            });
            const { context: e, roundPixels: s, ...r } = t || {};
            super({
                label: "Graphics",
                ...r
            }), this.renderPipeId = "graphics", e ? this._context = e : this._context = this._ownedContext = new xt, this._context.on("update", this.onViewUpdate, this), this.allowChildren = !1, this.roundPixels = s ?? !1;
        }
        set context(t) {
            t !== this._context && (this._context.off("update", this.onViewUpdate, this), this._context = t, this._context.on("update", this.onViewUpdate, this), this.onViewUpdate());
        }
        get context() {
            return this._context;
        }
        get bounds() {
            return this._context.bounds;
        }
        updateBounds() {}
        containsPoint(t) {
            return this._context.containsPoint(t);
        }
        destroy(t) {
            this._ownedContext && !t ? this._ownedContext.destroy(t) : (t === !0 || t?.context === !0) && this._context.destroy(t), this._ownedContext = null, this._context = null, super.destroy(t);
        }
        _callContextMethod(t, e) {
            return this.context[t](...e), this;
        }
        setFillStyle(...t) {
            return this._callContextMethod("setFillStyle", t);
        }
        setStrokeStyle(...t) {
            return this._callContextMethod("setStrokeStyle", t);
        }
        fill(...t) {
            return this._callContextMethod("fill", t);
        }
        stroke(...t) {
            return this._callContextMethod("stroke", t);
        }
        texture(...t) {
            return this._callContextMethod("texture", t);
        }
        beginPath() {
            return this._callContextMethod("beginPath", []);
        }
        cut() {
            return this._callContextMethod("cut", []);
        }
        arc(...t) {
            return this._callContextMethod("arc", t);
        }
        arcTo(...t) {
            return this._callContextMethod("arcTo", t);
        }
        arcToSvg(...t) {
            return this._callContextMethod("arcToSvg", t);
        }
        bezierCurveTo(...t) {
            return this._callContextMethod("bezierCurveTo", t);
        }
        closePath() {
            return this._callContextMethod("closePath", []);
        }
        ellipse(...t) {
            return this._callContextMethod("ellipse", t);
        }
        circle(...t) {
            return this._callContextMethod("circle", t);
        }
        path(...t) {
            return this._callContextMethod("path", t);
        }
        lineTo(...t) {
            return this._callContextMethod("lineTo", t);
        }
        moveTo(...t) {
            return this._callContextMethod("moveTo", t);
        }
        quadraticCurveTo(...t) {
            return this._callContextMethod("quadraticCurveTo", t);
        }
        rect(...t) {
            return this._callContextMethod("rect", t);
        }
        roundRect(...t) {
            return this._callContextMethod("roundRect", t);
        }
        poly(...t) {
            return this._callContextMethod("poly", t);
        }
        regularPoly(...t) {
            return this._callContextMethod("regularPoly", t);
        }
        roundPoly(...t) {
            return this._callContextMethod("roundPoly", t);
        }
        roundShape(...t) {
            return this._callContextMethod("roundShape", t);
        }
        filletRect(...t) {
            return this._callContextMethod("filletRect", t);
        }
        chamferRect(...t) {
            return this._callContextMethod("chamferRect", t);
        }
        star(...t) {
            return this._callContextMethod("star", t);
        }
        svg(...t) {
            return this._callContextMethod("svg", t);
        }
        restore(...t) {
            return this._callContextMethod("restore", t);
        }
        save() {
            return this._callContextMethod("save", []);
        }
        getTransform() {
            return this.context.getTransform();
        }
        resetTransform() {
            return this._callContextMethod("resetTransform", []);
        }
        rotateTransform(...t) {
            return this._callContextMethod("rotate", t);
        }
        scaleTransform(...t) {
            return this._callContextMethod("scale", t);
        }
        setTransform(...t) {
            return this._callContextMethod("setTransform", t);
        }
        transform(...t) {
            return this._callContextMethod("transform", t);
        }
        translateTransform(...t) {
            return this._callContextMethod("translate", t);
        }
        clear() {
            return this._callContextMethod("clear", []);
        }
        get fillStyle() {
            return this._context.fillStyle;
        }
        set fillStyle(t) {
            this._context.fillStyle = t;
        }
        get strokeStyle() {
            return this._context.strokeStyle;
        }
        set strokeStyle(t) {
            this._context.strokeStyle = t;
        }
        clone(t = !1) {
            return t ? new zt(this._context.clone()) : (this._ownedContext = null, new zt(this._context));
        }
        lineStyle(t, e, s) {
            K(st, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
            const r = {};
            return t && (r.width = t), e && (r.color = e), s && (r.alpha = s), this.context.strokeStyle = r, this;
        }
        beginFill(t, e) {
            K(st, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
            const s = {};
            return t !== void 0 && (s.color = t), e !== void 0 && (s.alpha = e), this.context.fillStyle = s, this;
        }
        endFill() {
            K(st, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill();
            const t = this.context.strokeStyle;
            return (t.width !== xt.defaultStrokeStyle.width || t.color !== xt.defaultStrokeStyle.color || t.alpha !== xt.defaultStrokeStyle.alpha) && this.context.stroke(), this;
        }
        drawCircle(...t) {
            return K(st, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", t);
        }
        drawEllipse(...t) {
            return K(st, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", t);
        }
        drawPolygon(...t) {
            return K(st, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", t);
        }
        drawRect(...t) {
            return K(st, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", t);
        }
        drawRoundedRect(...t) {
            return K(st, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", t);
        }
        drawStar(...t) {
            return K(st, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", t);
        }
    };
    class Xa extends Is {
        constructor(t, e){
            const { text: s, resolution: r, style: n, anchor: o, width: h, height: a, roundPixels: l, ...c } = t;
            super({
                ...c
            }), this.batched = !0, this._resolution = null, this._autoResolution = !0, this._didTextUpdate = !0, this._styleClass = e, this.text = s ?? "", this.style = n, this.resolution = r ?? null, this.allowChildren = !1, this._anchor = new at({
                _onUpdate: ()=>{
                    this.onViewUpdate();
                }
            }), o && (this.anchor = o), this.roundPixels = l ?? !1, h !== void 0 && (this.width = h), a !== void 0 && (this.height = a);
        }
        get anchor() {
            return this._anchor;
        }
        set anchor(t) {
            typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
        }
        set text(t) {
            t = t.toString(), this._text !== t && (this._text = t, this.onViewUpdate());
        }
        get text() {
            return this._text;
        }
        set resolution(t) {
            this._autoResolution = t === null, this._resolution = t, this.onViewUpdate();
        }
        get resolution() {
            return this._resolution;
        }
        get style() {
            return this._style;
        }
        set style(t) {
            t || (t = {}), this._style?.off("update", this.onViewUpdate, this), t instanceof this._styleClass ? this._style = t : this._style = new this._styleClass(t), this._style.on("update", this.onViewUpdate, this), this.onViewUpdate();
        }
        get width() {
            return Math.abs(this.scale.x) * this.bounds.width;
        }
        set width(t) {
            this._setWidth(t, this.bounds.width);
        }
        get height() {
            return Math.abs(this.scale.y) * this.bounds.height;
        }
        set height(t) {
            this._setHeight(t, this.bounds.height);
        }
        getSize(t) {
            return t || (t = {}), t.width = Math.abs(this.scale.x) * this.bounds.width, t.height = Math.abs(this.scale.y) * this.bounds.height, t;
        }
        setSize(t, e) {
            typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, this.bounds.width), e !== void 0 && this._setHeight(e, this.bounds.height);
        }
        containsPoint(t) {
            const e = this.bounds.width, s = this.bounds.height, r = -e * this.anchor.x;
            let n = 0;
            return t.x >= r && t.x <= r + e && (n = -s * this.anchor.y, t.y >= n && t.y <= n + s);
        }
        onViewUpdate() {
            this.didViewUpdate || (this._didTextUpdate = !0), super.onViewUpdate();
        }
        _getKey() {
            return `${this.text}:${this._style.styleKey}:${this._resolution}`;
        }
        destroy(t = !1) {
            super.destroy(t), this.owner = null, this._bounds = null, this._anchor = null, (typeof t == "boolean" ? t : t?.style) && this._style.destroy(t), this._style = null, this._text = null;
        }
    }
    function Va(i, t) {
        let e = i[0] ?? {};
        return (typeof e == "string" || i[1]) && (K(st, `use new ${t}({ text: "hi!", style }) instead`), e = {
            text: e,
            style: i[1]
        }), e;
    }
    class Zt extends Xa {
        constructor(...t){
            const e = Va(t, "Text");
            super(e, Be), this.renderPipeId = "text";
        }
        updateBounds() {
            const t = this._bounds, e = this._anchor, s = Ya.measureText(this._text, this._style), { width: r, height: n } = s;
            t.minX = -e._x * r, t.maxX = t.minX + r, t.minY = -e._y * n, t.maxY = t.minY + n;
        }
    }
    Pt.add(cn, un);
    var Na = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function $a(i) {
        return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    }
    var on = {
        exports: {}
    };
    (function(i, t) {
        (function() {
            var e, s;
            s = function(r) {
                return i.exports = r;
            }, e = {
                linear: function(r, n, o, h) {
                    return o * r / h + n;
                },
                easeInQuad: function(r, n, o, h) {
                    return o * (r /= h) * r + n;
                },
                easeOutQuad: function(r, n, o, h) {
                    return -o * (r /= h) * (r - 2) + n;
                },
                easeInOutQuad: function(r, n, o, h) {
                    return (r /= h / 2) < 1 ? o / 2 * r * r + n : -o / 2 * (--r * (r - 2) - 1) + n;
                },
                easeInCubic: function(r, n, o, h) {
                    return o * (r /= h) * r * r + n;
                },
                easeOutCubic: function(r, n, o, h) {
                    return o * ((r = r / h - 1) * r * r + 1) + n;
                },
                easeInOutCubic: function(r, n, o, h) {
                    return (r /= h / 2) < 1 ? o / 2 * r * r * r + n : o / 2 * ((r -= 2) * r * r + 2) + n;
                },
                easeInQuart: function(r, n, o, h) {
                    return o * (r /= h) * r * r * r + n;
                },
                easeOutQuart: function(r, n, o, h) {
                    return -o * ((r = r / h - 1) * r * r * r - 1) + n;
                },
                easeInOutQuart: function(r, n, o, h) {
                    return (r /= h / 2) < 1 ? o / 2 * r * r * r * r + n : -o / 2 * ((r -= 2) * r * r * r - 2) + n;
                },
                easeInQuint: function(r, n, o, h) {
                    return o * (r /= h) * r * r * r * r + n;
                },
                easeOutQuint: function(r, n, o, h) {
                    return o * ((r = r / h - 1) * r * r * r * r + 1) + n;
                },
                easeInOutQuint: function(r, n, o, h) {
                    return (r /= h / 2) < 1 ? o / 2 * r * r * r * r * r + n : o / 2 * ((r -= 2) * r * r * r * r + 2) + n;
                },
                easeInSine: function(r, n, o, h) {
                    return -o * Math.cos(r / h * (Math.PI / 2)) + o + n;
                },
                easeOutSine: function(r, n, o, h) {
                    return o * Math.sin(r / h * (Math.PI / 2)) + n;
                },
                easeInOutSine: function(r, n, o, h) {
                    return -o / 2 * (Math.cos(Math.PI * r / h) - 1) + n;
                },
                easeInExpo: function(r, n, o, h) {
                    return r === 0 ? n : o * Math.pow(2, 10 * (r / h - 1)) + n;
                },
                easeOutExpo: function(r, n, o, h) {
                    return r === h ? n + o : o * (-Math.pow(2, -10 * r / h) + 1) + n;
                },
                easeInOutExpo: function(r, n, o, h) {
                    return (r /= h / 2) < 1 ? o / 2 * Math.pow(2, 10 * (r - 1)) + n : o / 2 * (-Math.pow(2, -10 * --r) + 2) + n;
                },
                easeInCirc: function(r, n, o, h) {
                    return -o * (Math.sqrt(1 - (r /= h) * r) - 1) + n;
                },
                easeOutCirc: function(r, n, o, h) {
                    return o * Math.sqrt(1 - (r = r / h - 1) * r) + n;
                },
                easeInOutCirc: function(r, n, o, h) {
                    return (r /= h / 2) < 1 ? -o / 2 * (Math.sqrt(1 - r * r) - 1) + n : o / 2 * (Math.sqrt(1 - (r -= 2) * r) + 1) + n;
                },
                easeInElastic: function(r, n, o, h) {
                    var a, l, c;
                    return c = 1.70158, l = 0, a = o, r === 0 || (r /= h), l || (l = h * .3), a < Math.abs(o) ? (a = o, c = l / 4) : c = l / (2 * Math.PI) * Math.asin(o / a), -(a * Math.pow(2, 10 * (r -= 1)) * Math.sin((r * h - c) * (2 * Math.PI) / l)) + n;
                },
                easeOutElastic: function(r, n, o, h) {
                    var a, l, c;
                    return c = 1.70158, l = 0, a = o, r === 0 || (r /= h), l || (l = h * .3), a < Math.abs(o) ? (a = o, c = l / 4) : c = l / (2 * Math.PI) * Math.asin(o / a), a * Math.pow(2, -10 * r) * Math.sin((r * h - c) * (2 * Math.PI) / l) + o + n;
                },
                easeInOutElastic: function(r, n, o, h) {
                    var a, l, c;
                    return c = 1.70158, l = 0, a = o, r === 0 || (r /= h / 2), l || (l = h * (.3 * 1.5)), a < Math.abs(o) ? (a = o, c = l / 4) : c = l / (2 * Math.PI) * Math.asin(o / a), r < 1 ? -.5 * (a * Math.pow(2, 10 * (r -= 1)) * Math.sin((r * h - c) * (2 * Math.PI) / l)) + n : a * Math.pow(2, -10 * (r -= 1)) * Math.sin((r * h - c) * (2 * Math.PI) / l) * .5 + o + n;
                },
                easeInBack: function(r, n, o, h, a) {
                    return a === void 0 && (a = 1.70158), o * (r /= h) * r * ((a + 1) * r - a) + n;
                },
                easeOutBack: function(r, n, o, h, a) {
                    return a === void 0 && (a = 1.70158), o * ((r = r / h - 1) * r * ((a + 1) * r + a) + 1) + n;
                },
                easeInOutBack: function(r, n, o, h, a) {
                    return a === void 0 && (a = 1.70158), (r /= h / 2) < 1 ? o / 2 * (r * r * (((a *= 1.525) + 1) * r - a)) + n : o / 2 * ((r -= 2) * r * (((a *= 1.525) + 1) * r + a) + 2) + n;
                },
                easeInBounce: function(r, n, o, h) {
                    var a;
                    return a = e.easeOutBounce(h - r, 0, o, h), o - a + n;
                },
                easeOutBounce: function(r, n, o, h) {
                    return (r /= h) < 1 / 2.75 ? o * (7.5625 * r * r) + n : r < 2 / 2.75 ? o * (7.5625 * (r -= 1.5 / 2.75) * r + .75) + n : r < 2.5 / 2.75 ? o * (7.5625 * (r -= 2.25 / 2.75) * r + .9375) + n : o * (7.5625 * (r -= 2.625 / 2.75) * r + .984375) + n;
                },
                easeInOutBounce: function(r, n, o, h) {
                    var a;
                    return r < h / 2 ? (a = e.easeInBounce(r * 2, 0, o, h), a * .5 + n) : (a = e.easeOutBounce(r * 2 - h, 0, o, h), a * .5 + o * .5 + n);
                }
            }, s(e);
        }).call(Na);
    })(on);
    var ja = on.exports;
    const ji = $a(ja);
    function Ge(i, t) {
        if (i) {
            if (typeof i == "function") return i;
            if (typeof i == "string") return ji[i];
        } else return ji[t];
    }
    class qa {
        constructor(t){
            this.viewport = t, this.touches = [], this.addListeners();
        }
        addListeners() {
            this.viewport.eventMode = "static", this.viewport.forceHitArea || (this.viewport.hitArea = new J(0, 0, this.viewport.worldWidth, this.viewport.worldHeight)), this.viewport.on("pointerdown", this.down, this), this.viewport.options.allowPreserveDragOutside ? this.viewport.on("globalpointermove", this.move, this) : this.viewport.on("pointermove", this.move, this), this.viewport.on("pointerup", this.up, this), this.viewport.on("pointerupoutside", this.up, this), this.viewport.on("pointercancel", this.up, this), this.viewport.options.allowPreserveDragOutside || this.viewport.on("pointerleave", this.up, this), this.wheelFunction = (t)=>this.handleWheel(t), this.viewport.options.events.domElement.addEventListener("wheel", this.wheelFunction, {
                passive: this.viewport.options.passiveWheel
            }), this.isMouseDown = !1;
        }
        destroy() {
            var t;
            (t = this.viewport.options.events.domElement) == null || t.removeEventListener("wheel", this.wheelFunction);
        }
        down(t) {
            if (!(this.viewport.pause || !this.viewport.visible)) {
                if (t.pointerType === "mouse" ? this.isMouseDown = !0 : this.get(t.pointerId) || this.touches.push({
                    id: t.pointerId,
                    last: null
                }), this.count() === 1) {
                    this.last = t.global.clone();
                    const e = this.viewport.plugins.get("decelerate", !0), s = this.viewport.plugins.get("bounce", !0);
                    (!e || !e.isActive()) && (!s || !s.isActive()) ? this.clickedAvailable = !0 : this.clickedAvailable = !1;
                } else this.clickedAvailable = !1;
                this.viewport.plugins.down(t) && this.viewport.options.stopPropagation && t.stopPropagation();
            }
        }
        clear() {
            this.isMouseDown = !1, this.touches = [], this.last = null;
        }
        checkThreshold(t) {
            return Math.abs(t) >= this.viewport.threshold;
        }
        move(t) {
            if (this.viewport.pause || !this.viewport.visible) return;
            const e = this.viewport.plugins.move(t);
            if (this.clickedAvailable && this.last) {
                const s = t.global.x - this.last.x, r = t.global.y - this.last.y;
                (this.checkThreshold(s) || this.checkThreshold(r)) && (this.clickedAvailable = !1);
            }
            e && this.viewport.options.stopPropagation && t.stopPropagation();
        }
        up(t) {
            if (this.viewport.pause || !this.viewport.visible) return;
            t.pointerType === "mouse" && (this.isMouseDown = !1), t.pointerType !== "mouse" && this.remove(t.pointerId);
            const e = this.viewport.plugins.up(t);
            this.clickedAvailable && this.count() === 0 && this.last && (this.viewport.emit("clicked", {
                event: t,
                screen: this.last,
                world: this.viewport.toWorld(this.last),
                viewport: this.viewport
            }), this.clickedAvailable = !1), e && this.viewport.options.stopPropagation && t.stopPropagation();
        }
        getPointerPosition(t) {
            const e = new O;
            return this.viewport.options.events.mapPositionToPoint(e, t.clientX, t.clientY), e;
        }
        handleWheel(t) {
            if (this.viewport.pause || !this.viewport.visible) return;
            const e = this.viewport.toLocal(this.getPointerPosition(t));
            this.viewport.left <= e.x && e.x <= this.viewport.right && this.viewport.top <= e.y && e.y <= this.viewport.bottom && this.viewport.plugins.wheel(t) && !this.viewport.options.passiveWheel && t.preventDefault();
        }
        pause() {
            this.touches = [], this.isMouseDown = !1;
        }
        get(t) {
            for (const e of this.touches)if (e.id === t) return e;
            return null;
        }
        remove(t) {
            for(let e = 0; e < this.touches.length; e++)if (this.touches[e].id === t) {
                this.touches.splice(e, 1);
                return;
            }
        }
        count() {
            return (this.isMouseDown ? 1 : 0) + this.touches.length;
        }
    }
    const re = [
        "drag",
        "pinch",
        "wheel",
        "follow",
        "mouse-edges",
        "decelerate",
        "animate",
        "bounce",
        "snap-zoom",
        "clamp-zoom",
        "snap",
        "clamp"
    ];
    class Ka {
        constructor(t){
            this.viewport = t, this.list = [], this.plugins = {};
        }
        add(t, e, s = re.length) {
            const r = this.plugins[t];
            r && r.destroy(), this.plugins[t] = e;
            const n = re.indexOf(t);
            n !== -1 && re.splice(n, 1), re.splice(s, 0, t), this.sort();
        }
        get(t, e) {
            var s;
            return e && (s = this.plugins[t]) != null && s.paused ? null : this.plugins[t];
        }
        update(t) {
            for (const e of this.list)e.update(t);
        }
        resize() {
            for (const t of this.list)t.resize();
        }
        reset() {
            for (const t of this.list)t.reset();
        }
        removeAll() {
            this.list.forEach((t)=>{
                t.destroy();
            }), this.plugins = {}, this.sort();
        }
        remove(t) {
            var e;
            this.plugins[t] && ((e = this.plugins[t]) == null || e.destroy(), delete this.plugins[t], this.viewport.emit("plugin-remove", t), this.sort());
        }
        pause(t) {
            var e;
            (e = this.plugins[t]) == null || e.pause();
        }
        resume(t) {
            var e;
            (e = this.plugins[t]) == null || e.resume();
        }
        sort() {
            this.list = [];
            for (const t of re)this.plugins[t] && this.list.push(this.plugins[t]);
        }
        down(t) {
            let e = !1;
            for (const s of this.list)s.down(t) && (e = !0);
            return e;
        }
        move(t) {
            let e = !1;
            for (const s of this.viewport.plugins.list)s.move(t) && (e = !0);
            return e;
        }
        up(t) {
            let e = !1;
            for (const s of this.list)s.up(t) && (e = !0);
            return e;
        }
        wheel(t) {
            let e = !1;
            for (const s of this.list)s.wheel(t) && (e = !0);
            return e;
        }
    }
    class mt {
        constructor(t){
            this.parent = t, this.paused = !1;
        }
        destroy() {}
        down(t) {
            return !1;
        }
        move(t) {
            return !1;
        }
        up(t) {
            return !1;
        }
        wheel(t) {
            return !1;
        }
        update(t) {}
        resize() {}
        reset() {}
        pause() {
            this.paused = !0;
        }
        resume() {
            this.paused = !1;
        }
    }
    const Za = {
        removeOnInterrupt: !1,
        ease: "linear",
        time: 1e3
    };
    class Qa extends mt {
        constructor(t, e = {}){
            super(t), this.startWidth = null, this.startHeight = null, this.deltaWidth = null, this.deltaHeight = null, this.width = null, this.height = null, this.time = 0, this.options = Object.assign({}, Za, e), this.options.ease = Ge(this.options.ease), this.setupPosition(), this.setupZoom(), this.time = 0;
        }
        setupPosition() {
            typeof this.options.position < "u" ? (this.startX = this.parent.center.x, this.startY = this.parent.center.y, this.deltaX = this.options.position.x - this.parent.center.x, this.deltaY = this.options.position.y - this.parent.center.y, this.keepCenter = !1) : this.keepCenter = !0;
        }
        setupZoom() {
            this.width = null, this.height = null, typeof this.options.scale < "u" ? this.width = this.parent.screenWidth / this.options.scale : typeof this.options.scaleX < "u" || typeof this.options.scaleY < "u" ? (typeof this.options.scaleX < "u" && (this.width = this.parent.screenWidth / this.options.scaleX), typeof this.options.scaleY < "u" && (this.height = this.parent.screenHeight / this.options.scaleY)) : (typeof this.options.width < "u" && (this.width = this.options.width), typeof this.options.height < "u" && (this.height = this.options.height)), this.width !== null && (this.startWidth = this.parent.screenWidthInWorldPixels, this.deltaWidth = this.width - this.startWidth), this.height !== null && (this.startHeight = this.parent.screenHeightInWorldPixels, this.deltaHeight = this.height - this.startHeight);
        }
        down() {
            return this.options.removeOnInterrupt && this.parent.plugins.remove("animate"), !1;
        }
        complete() {
            this.parent.plugins.remove("animate"), this.width !== null && this.parent.fitWidth(this.width, this.keepCenter, this.height === null), this.height !== null && this.parent.fitHeight(this.height, this.keepCenter, this.width === null), !this.keepCenter && this.options.position && this.parent.moveCenter(this.options.position), this.parent.emit("animate-end", this.parent), this.options.callbackOnComplete && this.options.callbackOnComplete(this.parent);
        }
        update(t) {
            if (this.paused) return;
            this.time += t;
            const e = new O(this.parent.scale.x, this.parent.scale.y);
            if (this.time >= this.options.time) {
                const s = this.parent.width, r = this.parent.height;
                this.complete(), (s !== this.parent.width || r !== this.parent.height) && this.parent.emit("zoomed", {
                    viewport: this.parent,
                    original: e,
                    type: "animate"
                });
            } else {
                const s = this.options.ease(this.time, 0, 1, this.options.time);
                if (this.width !== null) {
                    const r = this.startWidth, n = this.deltaWidth;
                    this.parent.fitWidth(r + n * s, this.keepCenter, this.height === null);
                }
                if (this.height !== null) {
                    const r = this.startHeight, n = this.deltaHeight;
                    this.parent.fitHeight(r + n * s, this.keepCenter, this.width === null);
                }
                if (this.width === null ? this.parent.scale.x = this.parent.scale.y : this.height === null && (this.parent.scale.y = this.parent.scale.x), !this.keepCenter) {
                    const r = this.startX, n = this.startY, o = this.deltaX, h = this.deltaY, a = new O(this.parent.x, this.parent.y);
                    this.parent.moveCenter(r + o * s, n + h * s), this.parent.emit("moved", {
                        viewport: this.parent,
                        original: a,
                        type: "animate"
                    });
                }
                (this.width || this.height) && this.parent.emit("zoomed", {
                    viewport: this.parent,
                    original: e,
                    type: "animate"
                });
            }
        }
    }
    const Ja = {
        sides: "all",
        friction: .5,
        time: 150,
        ease: "easeInOutSine",
        underflow: "center",
        bounceBox: null
    };
    class tl extends mt {
        constructor(t, e = {}){
            super(t), this.options = Object.assign({}, Ja, e), this.ease = Ge(this.options.ease, "easeInOutSine"), this.options.sides ? this.options.sides === "all" ? this.top = this.bottom = this.left = this.right = !0 : this.options.sides === "horizontal" ? (this.right = this.left = !0, this.top = this.bottom = !1) : this.options.sides === "vertical" ? (this.left = this.right = !1, this.top = this.bottom = !0) : (this.top = this.options.sides.indexOf("top") !== -1, this.bottom = this.options.sides.indexOf("bottom") !== -1, this.left = this.options.sides.indexOf("left") !== -1, this.right = this.options.sides.indexOf("right") !== -1) : this.left = this.top = this.right = this.bottom = !1;
            const s = this.options.underflow.toLowerCase();
            s === "center" ? (this.underflowX = 0, this.underflowY = 0) : (this.underflowX = s.indexOf("left") !== -1 ? -1 : s.indexOf("right") !== -1 ? 1 : 0, this.underflowY = s.indexOf("top") !== -1 ? -1 : s.indexOf("bottom") !== -1 ? 1 : 0), this.reset();
        }
        isActive() {
            return this.toX !== null || this.toY !== null;
        }
        down() {
            return this.toX = this.toY = null, !1;
        }
        up() {
            return this.bounce(), !1;
        }
        update(t) {
            if (!this.paused) {
                if (this.bounce(), this.toX) {
                    const e = this.toX;
                    e.time += t, this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "bounce-x"
                    }), e.time >= this.options.time ? (this.parent.x = e.end, this.toX = null, this.parent.emit("bounce-x-end", this.parent)) : this.parent.x = this.ease(e.time, e.start, e.delta, this.options.time);
                }
                if (this.toY) {
                    const e = this.toY;
                    e.time += t, this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "bounce-y"
                    }), e.time >= this.options.time ? (this.parent.y = e.end, this.toY = null, this.parent.emit("bounce-y-end", this.parent)) : this.parent.y = this.ease(e.time, e.start, e.delta, this.options.time);
                }
            }
        }
        calcUnderflowX() {
            let t;
            switch(this.underflowX){
                case -1:
                    t = 0;
                    break;
                case 1:
                    t = this.parent.screenWidth - this.parent.screenWorldWidth;
                    break;
                default:
                    t = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
            }
            return t;
        }
        calcUnderflowY() {
            let t;
            switch(this.underflowY){
                case -1:
                    t = 0;
                    break;
                case 1:
                    t = this.parent.screenHeight - this.parent.screenWorldHeight;
                    break;
                default:
                    t = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
            }
            return t;
        }
        oob() {
            const t = this.options.bounceBox;
            if (t) {
                const e = typeof t.x > "u" ? 0 : t.x, s = typeof t.y > "u" ? 0 : t.y, r = typeof t.width > "u" ? this.parent.worldWidth : t.width, n = typeof t.height > "u" ? this.parent.worldHeight : t.height;
                return {
                    left: this.parent.left < e,
                    right: this.parent.right > r,
                    top: this.parent.top < s,
                    bottom: this.parent.bottom > n,
                    topLeft: new O(e * this.parent.scale.x, s * this.parent.scale.y),
                    bottomRight: new O(r * this.parent.scale.x - this.parent.screenWidth, n * this.parent.scale.y - this.parent.screenHeight)
                };
            }
            return {
                left: this.parent.left < 0,
                right: this.parent.right > this.parent.worldWidth,
                top: this.parent.top < 0,
                bottom: this.parent.bottom > this.parent.worldHeight,
                topLeft: new O(0, 0),
                bottomRight: new O(this.parent.worldWidth * this.parent.scale.x - this.parent.screenWidth, this.parent.worldHeight * this.parent.scale.y - this.parent.screenHeight)
            };
        }
        bounce() {
            var t, e;
            if (this.paused) return;
            let s, r = this.parent.plugins.get("decelerate", !0);
            r && (r.x || r.y) && (r.x && r.percentChangeX === ((t = r.options) == null ? void 0 : t.friction) || r.y && r.percentChangeY === ((e = r.options) == null ? void 0 : e.friction)) && (s = this.oob(), (s.left && this.left || s.right && this.right) && (r.percentChangeX = this.options.friction), (s.top && this.top || s.bottom && this.bottom) && (r.percentChangeY = this.options.friction));
            const n = this.parent.plugins.get("drag", !0) || {}, o = this.parent.plugins.get("pinch", !0) || {};
            if (r = r || {}, !(n != null && n.active) && !(o != null && o.active) && (!this.toX || !this.toY) && (!r.x || !r.y)) {
                s = s || this.oob();
                const h = s.topLeft, a = s.bottomRight;
                if (!this.toX && !r.x) {
                    let l = null;
                    s.left && this.left ? l = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -h.x : s.right && this.right && (l = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -a.x), l !== null && this.parent.x !== l && (this.toX = {
                        time: 0,
                        start: this.parent.x,
                        delta: l - this.parent.x,
                        end: l
                    }, this.parent.emit("bounce-x-start", this.parent));
                }
                if (!this.toY && !r.y) {
                    let l = null;
                    s.top && this.top ? l = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -h.y : s.bottom && this.bottom && (l = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -a.y), l !== null && this.parent.y !== l && (this.toY = {
                        time: 0,
                        start: this.parent.y,
                        delta: l - this.parent.y,
                        end: l
                    }, this.parent.emit("bounce-y-start", this.parent));
                }
            }
        }
        reset() {
            this.toX = this.toY = null, this.bounce();
        }
    }
    const el = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1,
        direction: null,
        underflow: "center"
    };
    class sl extends mt {
        constructor(t, e = {}){
            super(t), this.options = Object.assign({}, el, e), this.options.direction && (this.options.left = this.options.direction === "x" || this.options.direction === "all" ? !0 : null, this.options.right = this.options.direction === "x" || this.options.direction === "all" ? !0 : null, this.options.top = this.options.direction === "y" || this.options.direction === "all" ? !0 : null, this.options.bottom = this.options.direction === "y" || this.options.direction === "all" ? !0 : null), this.parseUnderflow(), this.last = {
                x: null,
                y: null,
                scaleX: null,
                scaleY: null
            }, this.update();
        }
        parseUnderflow() {
            const t = this.options.underflow.toLowerCase();
            t === "none" ? this.noUnderflow = !0 : t === "center" ? (this.underflowX = this.underflowY = 0, this.noUnderflow = !1) : (this.underflowX = t.indexOf("left") !== -1 ? -1 : t.indexOf("right") !== -1 ? 1 : 0, this.underflowY = t.indexOf("top") !== -1 ? -1 : t.indexOf("bottom") !== -1 ? 1 : 0, this.noUnderflow = !1);
        }
        move() {
            return this.update(), !1;
        }
        update() {
            if (this.paused || this.parent.x === this.last.x && this.parent.y === this.last.y && this.parent.scale.x === this.last.scaleX && this.parent.scale.y === this.last.scaleY) return;
            const t = new O(this.parent.x, this.parent.y), e = this.parent.plugins.decelerate || {};
            if (this.options.left !== null || this.options.right !== null) {
                let s = !1;
                if (!this.noUnderflow && this.parent.screenWorldWidth < this.parent.screenWidth) switch(this.underflowX){
                    case -1:
                        this.parent.x !== 0 && (this.parent.x = 0, s = !0);
                        break;
                    case 1:
                        this.parent.x !== this.parent.screenWidth - this.parent.screenWorldWidth && (this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth, s = !0);
                        break;
                    default:
                        this.parent.x !== (this.parent.screenWidth - this.parent.screenWorldWidth) / 2 && (this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2, s = !0);
                }
                else this.options.left !== null && this.parent.left < (this.options.left === !0 ? 0 : this.options.left) && (this.parent.x = -(this.options.left === !0 ? 0 : this.options.left) * this.parent.scale.x, e.x = 0, s = !0), this.options.right !== null && this.parent.right > (this.options.right === !0 ? this.parent.worldWidth : this.options.right) && (this.parent.x = -(this.options.right === !0 ? this.parent.worldWidth : this.options.right) * this.parent.scale.x + this.parent.screenWidth, e.x = 0, s = !0);
                s && this.parent.emit("moved", {
                    viewport: this.parent,
                    original: t,
                    type: "clamp-x"
                });
            }
            if (this.options.top !== null || this.options.bottom !== null) {
                let s = !1;
                if (!this.noUnderflow && this.parent.screenWorldHeight < this.parent.screenHeight) switch(this.underflowY){
                    case -1:
                        this.parent.y !== 0 && (this.parent.y = 0, s = !0);
                        break;
                    case 1:
                        this.parent.y !== this.parent.screenHeight - this.parent.screenWorldHeight && (this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight, s = !0);
                        break;
                    default:
                        this.parent.y !== (this.parent.screenHeight - this.parent.screenWorldHeight) / 2 && (this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2, s = !0);
                }
                else this.options.top !== null && this.parent.top < (this.options.top === !0 ? 0 : this.options.top) && (this.parent.y = -(this.options.top === !0 ? 0 : this.options.top) * this.parent.scale.y, e.y = 0, s = !0), this.options.bottom !== null && this.parent.bottom > (this.options.bottom === !0 ? this.parent.worldHeight : this.options.bottom) && (this.parent.y = -(this.options.bottom === !0 ? this.parent.worldHeight : this.options.bottom) * this.parent.scale.y + this.parent.screenHeight, e.y = 0, s = !0);
                s && this.parent.emit("moved", {
                    viewport: this.parent,
                    original: t,
                    type: "clamp-y"
                });
            }
            this.last.x = this.parent.x, this.last.y = this.parent.y, this.last.scaleX = this.parent.scale.x, this.last.scaleY = this.parent.scale.y;
        }
        reset() {
            this.update();
        }
    }
    const il = {
        minWidth: null,
        minHeight: null,
        maxWidth: null,
        maxHeight: null,
        minScale: null,
        maxScale: null
    };
    class rl extends mt {
        constructor(t, e = {}){
            super(t), this.options = Object.assign({}, il, e), this.clamp();
        }
        resize() {
            this.clamp();
        }
        clamp() {
            if (!this.paused) {
                if (this.options.minWidth || this.options.minHeight || this.options.maxWidth || this.options.maxHeight) {
                    let t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight;
                    if (this.options.minWidth !== null && t < this.options.minWidth) {
                        const s = this.parent.scale.x;
                        this.parent.fitWidth(this.options.minWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / s, t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, this.parent.emit("zoomed", {
                            viewport: this.parent,
                            type: "clamp-zoom"
                        });
                    }
                    if (this.options.maxWidth !== null && t > this.options.maxWidth) {
                        const s = this.parent.scale.x;
                        this.parent.fitWidth(this.options.maxWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / s, t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, this.parent.emit("zoomed", {
                            viewport: this.parent,
                            type: "clamp-zoom"
                        });
                    }
                    if (this.options.minHeight !== null && e < this.options.minHeight) {
                        const s = this.parent.scale.y;
                        this.parent.fitHeight(this.options.minHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / s, t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, this.parent.emit("zoomed", {
                            viewport: this.parent,
                            type: "clamp-zoom"
                        });
                    }
                    if (this.options.maxHeight !== null && e > this.options.maxHeight) {
                        const s = this.parent.scale.y;
                        this.parent.fitHeight(this.options.maxHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / s, this.parent.emit("zoomed", {
                            viewport: this.parent,
                            type: "clamp-zoom"
                        });
                    }
                } else if (this.options.minScale || this.options.maxScale) {
                    const t = {
                        x: null,
                        y: null
                    }, e = {
                        x: null,
                        y: null
                    };
                    if (typeof this.options.minScale == "number") t.x = this.options.minScale, t.y = this.options.minScale;
                    else if (this.options.minScale !== null) {
                        const n = this.options.minScale;
                        t.x = typeof n.x > "u" ? null : n.x, t.y = typeof n.y > "u" ? null : n.y;
                    }
                    if (typeof this.options.maxScale == "number") e.x = this.options.maxScale, e.y = this.options.maxScale;
                    else if (this.options.maxScale !== null) {
                        const n = this.options.maxScale;
                        e.x = typeof n.x > "u" ? null : n.x, e.y = typeof n.y > "u" ? null : n.y;
                    }
                    let s = this.parent.scale.x, r = this.parent.scale.y;
                    t.x !== null && s < t.x && (s = t.x), e.x !== null && s > e.x && (s = e.x), t.y !== null && r < t.y && (r = t.y), e.y !== null && r > e.y && (r = e.y), (s !== this.parent.scale.x || r !== this.parent.scale.y) && (this.parent.scale.set(s, r), this.parent.emit("zoomed", {
                        viewport: this.parent,
                        type: "clamp-zoom"
                    }));
                }
            }
        }
        reset() {
            this.clamp();
        }
    }
    const nl = {
        friction: .98,
        bounce: .8,
        minSpeed: .01
    }, Ht = 16;
    class ol extends mt {
        constructor(t, e = {}){
            super(t), this.options = Object.assign({}, nl, e), this.saved = [], this.timeSinceRelease = 0, this.reset(), this.parent.on("moved", (s)=>this.handleMoved(s));
        }
        down() {
            return this.saved = [], this.x = this.y = null, !1;
        }
        isActive() {
            return !!(this.x || this.y);
        }
        move() {
            if (this.paused) return !1;
            const t = this.parent.input.count();
            return (t === 1 || t > 1 && !this.parent.plugins.get("pinch", !0)) && (this.saved.push({
                x: this.parent.x,
                y: this.parent.y,
                time: performance.now()
            }), this.saved.length > 60 && this.saved.splice(0, 30)), !1;
        }
        handleMoved(t) {
            if (this.saved.length) {
                const e = this.saved[this.saved.length - 1];
                t.type === "clamp-x" && t.original ? e.x === t.original.x && (e.x = this.parent.x) : t.type === "clamp-y" && t.original && e.y === t.original.y && (e.y = this.parent.y);
            }
        }
        up() {
            if (this.parent.input.count() === 0 && this.saved.length) {
                const t = performance.now();
                for (const e of this.saved)if (e.time >= t - 100) {
                    const s = t - e.time;
                    this.x = (this.parent.x - e.x) / s, this.y = (this.parent.y - e.y) / s, this.percentChangeX = this.percentChangeY = this.options.friction, this.timeSinceRelease = 0;
                    break;
                }
            }
            return !1;
        }
        activate(t) {
            t = t || {}, typeof t.x < "u" && (this.x = t.x, this.percentChangeX = this.options.friction), typeof t.y < "u" && (this.y = t.y, this.percentChangeY = this.options.friction);
        }
        update(t) {
            if (this.paused) return;
            const e = this.x || this.y, s = this.timeSinceRelease, r = this.timeSinceRelease + t;
            if (this.x) {
                const n = this.percentChangeX, o = Math.log(n);
                this.parent.x += this.x * Ht / o * (Math.pow(n, r / Ht) - Math.pow(n, s / Ht)), this.x *= Math.pow(this.percentChangeX, t / Ht);
            }
            if (this.y) {
                const n = this.percentChangeY, o = Math.log(n);
                this.parent.y += this.y * Ht / o * (Math.pow(n, r / Ht) - Math.pow(n, s / Ht)), this.y *= Math.pow(this.percentChangeY, t / Ht);
            }
            this.timeSinceRelease += t, this.x && this.y ? Math.abs(this.x) < this.options.minSpeed && Math.abs(this.y) < this.options.minSpeed && (this.x = 0, this.y = 0) : (Math.abs(this.x || 0) < this.options.minSpeed && (this.x = 0), Math.abs(this.y || 0) < this.options.minSpeed && (this.y = 0)), e && this.parent.emit("moved", {
                viewport: this.parent,
                type: "decelerate"
            });
        }
        reset() {
            this.x = this.y = null;
        }
    }
    const hl = {
        direction: "all",
        pressDrag: !0,
        wheel: !0,
        wheelScroll: 1,
        reverse: !1,
        clampWheel: !1,
        underflow: "center",
        factor: 1,
        mouseButtons: "all",
        keyToPress: null,
        ignoreKeyToPressOnTouch: !1,
        lineHeight: 20,
        wheelSwapAxes: !1
    };
    class al extends mt {
        constructor(t, e = {}){
            super(t), this.windowEventHandlers = [], this.options = Object.assign({}, hl, e), this.moved = !1, this.reverse = this.options.reverse ? 1 : -1, this.xDirection = !this.options.direction || this.options.direction === "all" || this.options.direction === "x", this.yDirection = !this.options.direction || this.options.direction === "all" || this.options.direction === "y", this.keyIsPressed = !1, this.parseUnderflow(), this.mouseButtons(this.options.mouseButtons), this.options.keyToPress && this.handleKeyPresses(this.options.keyToPress);
        }
        handleKeyPresses(t) {
            const e = (r)=>{
                t.includes(r.code) && (this.keyIsPressed = !0);
            }, s = (r)=>{
                t.includes(r.code) && (this.keyIsPressed = !1);
            };
            this.addWindowEventHandler("keyup", s), this.addWindowEventHandler("keydown", e);
        }
        addWindowEventHandler(t, e) {
            typeof window > "u" || (window.addEventListener(t, e), this.windowEventHandlers.push({
                event: t,
                handler: e
            }));
        }
        destroy() {
            typeof window > "u" || this.windowEventHandlers.forEach(({ event: t, handler: e })=>{
                window.removeEventListener(t, e);
            });
        }
        mouseButtons(t) {
            !t || t === "all" ? this.mouse = [
                !0,
                !0,
                !0
            ] : this.mouse = [
                t.indexOf("left") !== -1,
                t.indexOf("middle") !== -1,
                t.indexOf("right") !== -1
            ];
        }
        parseUnderflow() {
            const t = this.options.underflow.toLowerCase();
            t === "center" ? (this.underflowX = 0, this.underflowY = 0) : (t.includes("left") ? this.underflowX = -1 : t.includes("right") ? this.underflowX = 1 : this.underflowX = 0, t.includes("top") ? this.underflowY = -1 : t.includes("bottom") ? this.underflowY = 1 : this.underflowY = 0);
        }
        checkButtons(t) {
            const e = t.pointerType === "mouse", s = this.parent.input.count();
            return !!((s === 1 || s > 1 && !this.parent.plugins.get("pinch", !0)) && (!e || this.mouse[t.button]));
        }
        checkKeyPress(t) {
            return !this.options.keyToPress || this.keyIsPressed || this.options.ignoreKeyToPressOnTouch && t.data.pointerType === "touch";
        }
        down(t) {
            return this.paused || !this.options.pressDrag ? !1 : this.checkButtons(t) && this.checkKeyPress(t) ? (this.last = {
                x: t.global.x,
                y: t.global.y
            }, (this.parent.parent || this.parent).toLocal(this.last, void 0, this.last), this.current = t.pointerId, !0) : (this.last = null, !1);
        }
        get active() {
            return this.moved;
        }
        move(t) {
            if (this.paused || !this.options.pressDrag) return !1;
            if (this.last && this.current === t.data.pointerId) {
                const e = t.global.x, s = t.global.y, r = this.parent.input.count();
                if (r === 1 || r > 1 && !this.parent.plugins.get("pinch", !0)) {
                    const n = {
                        x: e,
                        y: s
                    };
                    (this.parent.parent || this.parent).toLocal(n, void 0, n);
                    const o = n.x - this.last.x, h = n.y - this.last.y;
                    if (this.moved || this.xDirection && this.parent.input.checkThreshold(o) || this.yDirection && this.parent.input.checkThreshold(h)) return this.xDirection && (this.parent.x += (n.x - this.last.x) * this.options.factor), this.yDirection && (this.parent.y += (n.y - this.last.y) * this.options.factor), this.last = n, this.moved || this.parent.emit("drag-start", {
                        event: t,
                        screen: new O(this.last.x, this.last.y),
                        world: this.parent.toWorld(new O(this.last.x, this.last.y)),
                        viewport: this.parent
                    }), this.moved = !0, this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "drag"
                    }), !0;
                } else this.moved = !1;
            }
            return !1;
        }
        up(t) {
            if (this.paused) return !1;
            const e = this.parent.input.touches;
            if (e.length === 1) {
                const s = e[0];
                return s.last && (this.last = {
                    x: s.last.x,
                    y: s.last.y
                }, this.current = s.id), this.moved = !1, !0;
            } else if (this.last && this.moved) {
                const s = new O(this.last.x, this.last.y);
                return (this.parent.parent || this.parent).toGlobal(s, s, !0), this.parent.emit("drag-end", {
                    event: t,
                    screen: s,
                    world: this.parent.toWorld(s),
                    viewport: this.parent
                }), this.last = null, this.moved = !1, !0;
            }
            return !1;
        }
        wheel(t) {
            if (this.paused) return !1;
            if (this.options.wheel) {
                const e = this.parent.plugins.get("wheel", !0);
                if (!e || !e.options.wheelZoom && !t.ctrlKey) {
                    const s = t.deltaMode ? this.options.lineHeight : 1, r = [
                        t.deltaX,
                        t.deltaY
                    ], [n, o] = this.options.wheelSwapAxes ? r.reverse() : r;
                    return this.xDirection && (this.parent.x += n * s * this.options.wheelScroll * this.reverse), this.yDirection && (this.parent.y += o * s * this.options.wheelScroll * this.reverse), this.options.clampWheel && this.clamp(), this.parent.emit("wheel-scroll", this.parent), this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "wheel"
                    }), this.parent.options.passiveWheel || t.preventDefault(), this.parent.options.stopPropagation && t.stopPropagation(), !0;
                }
            }
            return !1;
        }
        resume() {
            this.last = null, this.paused = !1;
        }
        clamp() {
            const t = this.parent.plugins.get("decelerate", !0) || {};
            if (this.options.clampWheel !== "y") if (this.parent.screenWorldWidth < this.parent.screenWidth) switch(this.underflowX){
                case -1:
                    this.parent.x = 0;
                    break;
                case 1:
                    this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth;
                    break;
                default:
                    this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
            }
            else this.parent.left < 0 ? (this.parent.x = 0, t.x = 0) : this.parent.right > this.parent.worldWidth && (this.parent.x = -this.parent.worldWidth * this.parent.scale.x + this.parent.screenWidth, t.x = 0);
            if (this.options.clampWheel !== "x") if (this.parent.screenWorldHeight < this.parent.screenHeight) switch(this.underflowY){
                case -1:
                    this.parent.y = 0;
                    break;
                case 1:
                    this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight;
                    break;
                default:
                    this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
            }
            else this.parent.top < 0 && (this.parent.y = 0, t.y = 0), this.parent.bottom > this.parent.worldHeight && (this.parent.y = -this.parent.worldHeight * this.parent.scale.y + this.parent.screenHeight, t.y = 0);
        }
    }
    const ll = {
        speed: 0,
        acceleration: null,
        radius: null
    };
    class cl extends mt {
        constructor(t, e, s = {}){
            super(t), this.target = e, this.options = Object.assign({}, ll, s), this.velocity = {
                x: 0,
                y: 0
            };
        }
        update(t) {
            if (this.paused) return;
            const e = this.parent.center;
            let s = this.target.x, r = this.target.y;
            if (this.options.radius) if (Math.sqrt(Math.pow(this.target.y - e.y, 2) + Math.pow(this.target.x - e.x, 2)) > this.options.radius) {
                const h = Math.atan2(this.target.y - e.y, this.target.x - e.x);
                s = this.target.x - Math.cos(h) * this.options.radius, r = this.target.y - Math.sin(h) * this.options.radius;
            } else return;
            const n = s - e.x, o = r - e.y;
            if (n || o) if (this.options.speed) if (this.options.acceleration) {
                const h = Math.atan2(r - e.y, s - e.x), a = Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
                if (a) {
                    const l = (Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2)) / (2 * this.options.acceleration);
                    a > l ? this.velocity = {
                        x: Math.min(this.velocity.x + (this.options.acceleration * t, this.options.speed)),
                        y: Math.min(this.velocity.y + (this.options.acceleration * t, this.options.speed))
                    } : this.velocity = {
                        x: Math.max(this.velocity.x - this.options.acceleration * this.options.speed, 0),
                        y: Math.max(this.velocity.y - this.options.acceleration * this.options.speed, 0)
                    };
                    const c = Math.cos(h) * this.velocity.x, u = Math.sin(h) * this.velocity.y, p = Math.abs(c) > Math.abs(n) ? s : e.x + c, d = Math.abs(u) > Math.abs(o) ? r : e.y + u;
                    this.parent.moveCenter(p, d), this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "follow"
                    });
                }
            } else {
                const h = Math.atan2(r - e.y, s - e.x), a = Math.cos(h) * this.options.speed, l = Math.sin(h) * this.options.speed, c = Math.abs(a) > Math.abs(n) ? s : e.x + a, u = Math.abs(l) > Math.abs(o) ? r : e.y + l;
                this.parent.moveCenter(c, u), this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "follow"
                });
            }
            else this.parent.moveCenter(s, r), this.parent.emit("moved", {
                viewport: this.parent,
                type: "follow"
            });
        }
    }
    const ul = {
        radius: null,
        distance: null,
        top: null,
        bottom: null,
        left: null,
        right: null,
        speed: 8,
        reverse: !1,
        noDecelerate: !1,
        linear: !1,
        allowButtons: !1
    };
    class dl extends mt {
        constructor(t, e = {}){
            super(t), this.options = Object.assign({}, ul, e), this.reverse = this.options.reverse ? 1 : -1, this.radiusSquared = typeof this.options.radius == "number" ? Math.pow(this.options.radius, 2) : null, this.resize();
        }
        resize() {
            const t = this.options.distance;
            t !== null ? (this.left = t, this.top = t, this.right = this.parent.screenWidth - t, this.bottom = this.parent.screenHeight - t) : this.options.radius || (this.left = this.options.left, this.top = this.options.top, this.right = this.options.right === null ? null : this.parent.screenWidth - this.options.right, this.bottom = this.options.bottom === null ? null : this.parent.screenHeight - this.options.bottom);
        }
        down() {
            return this.paused || this.options.allowButtons || (this.horizontal = this.vertical = null), !1;
        }
        move(t) {
            if (this.paused || t.pointerType !== "mouse" && t.pointerId !== 1 || !this.options.allowButtons && t.buttons !== 0) return !1;
            const e = t.global.x, s = t.global.y;
            if (this.radiusSquared) {
                const r = this.parent.toScreen(this.parent.center);
                if (Math.pow(r.x - e, 2) + Math.pow(r.y - s, 2) >= this.radiusSquared) {
                    const n = Math.atan2(r.y - s, r.x - e);
                    this.options.linear ? (this.horizontal = Math.round(Math.cos(n)) * this.options.speed * this.reverse * (60 / 1e3), this.vertical = Math.round(Math.sin(n)) * this.options.speed * this.reverse * (60 / 1e3)) : (this.horizontal = Math.cos(n) * this.options.speed * this.reverse * (60 / 1e3), this.vertical = Math.sin(n) * this.options.speed * this.reverse * (60 / 1e3));
                } else this.horizontal && this.decelerateHorizontal(), this.vertical && this.decelerateVertical(), this.horizontal = this.vertical = 0;
            } else this.left !== null && e < this.left ? this.horizontal = Number(this.reverse) * this.options.speed * (60 / 1e3) : this.right !== null && e > this.right ? this.horizontal = -1 * this.reverse * this.options.speed * (60 / 1e3) : (this.decelerateHorizontal(), this.horizontal = 0), this.top !== null && s < this.top ? this.vertical = Number(this.reverse) * this.options.speed * (60 / 1e3) : this.bottom !== null && s > this.bottom ? this.vertical = -1 * this.reverse * this.options.speed * (60 / 1e3) : (this.decelerateVertical(), this.vertical = 0);
            return !1;
        }
        decelerateHorizontal() {
            const t = this.parent.plugins.get("decelerate", !0);
            this.horizontal && t && !this.options.noDecelerate && t.activate({
                x: this.horizontal * this.options.speed * this.reverse / (1e3 / 60)
            });
        }
        decelerateVertical() {
            const t = this.parent.plugins.get("decelerate", !0);
            this.vertical && t && !this.options.noDecelerate && t.activate({
                y: this.vertical * this.options.speed * this.reverse / (1e3 / 60)
            });
        }
        up() {
            return this.paused || (this.horizontal && this.decelerateHorizontal(), this.vertical && this.decelerateVertical(), this.horizontal = this.vertical = null), !1;
        }
        update() {
            if (!this.paused && (this.horizontal || this.vertical)) {
                const t = this.parent.center;
                this.horizontal && (t.x += this.horizontal * this.options.speed), this.vertical && (t.y += this.vertical * this.options.speed), this.parent.moveCenter(t), this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "mouse-edges"
                });
            }
        }
    }
    const fl = {
        noDrag: !1,
        percent: 1,
        center: null,
        factor: 1,
        axis: "all"
    }, pl = new O;
    class ml extends mt {
        constructor(t, e = {}){
            super(t), this.active = !1, this.pinching = !1, this.moved = !1, this.options = Object.assign({}, fl, e);
        }
        down() {
            return this.parent.input.count() >= 2 ? (this.active = !0, !0) : !1;
        }
        isAxisX() {
            return [
                "all",
                "x"
            ].includes(this.options.axis);
        }
        isAxisY() {
            return [
                "all",
                "y"
            ].includes(this.options.axis);
        }
        move(t) {
            if (this.paused || !this.active) return !1;
            const { x: e, y: s } = (this.parent.parent || this.parent).toLocal(t.global, void 0, pl), r = this.parent.input.touches;
            if (r.length >= 2) {
                const n = r[0], o = r[1], h = n.last && o.last ? Math.sqrt(Math.pow(o.last.x - n.last.x, 2) + Math.pow(o.last.y - n.last.y, 2)) : null;
                if (n.id === t.pointerId ? n.last = {
                    x: e,
                    y: s,
                    data: t
                } : o.id === t.pointerId && (o.last = {
                    x: e,
                    y: s,
                    data: t
                }), h) {
                    let a;
                    const l = new O(n.last.x + (o.last.x - n.last.x) / 2, n.last.y + (o.last.y - n.last.y) / 2);
                    this.options.center || (a = this.parent.toLocal(l, this.parent.parent || this.parent));
                    let c = Math.sqrt(Math.pow(o.last.x - n.last.x, 2) + Math.pow(o.last.y - n.last.y, 2));
                    c = c === 0 ? c = 1e-10 : c;
                    const u = (1 - h / c) * this.options.percent * (this.isAxisX() ? this.parent.scale.x : this.parent.scale.y);
                    this.isAxisX() && (this.parent.scale.x += u), this.isAxisY() && (this.parent.scale.y += u), this.parent.emit("zoomed", {
                        viewport: this.parent,
                        type: "pinch",
                        center: l
                    });
                    const p = this.parent.plugins.get("clamp-zoom", !0);
                    if (p && p.clamp(), this.options.center) this.parent.moveCenter(this.options.center);
                    else {
                        const d = (this.parent.parent || this.parent).toLocal(a, this.parent);
                        this.parent.x += (l.x - d.x) * this.options.factor, this.parent.y += (l.y - d.y) * this.options.factor, this.parent.emit("moved", {
                            viewport: this.parent,
                            type: "pinch"
                        });
                    }
                    !this.options.noDrag && this.lastCenter && (this.parent.x += (l.x - this.lastCenter.x) * this.options.factor, this.parent.y += (l.y - this.lastCenter.y) * this.options.factor, this.parent.emit("moved", {
                        viewport: this.parent,
                        type: "pinch"
                    })), this.lastCenter = l, this.moved = !0;
                } else this.pinching || (this.parent.emit("pinch-start", this.parent), this.pinching = !0);
                return !0;
            }
            return !1;
        }
        up() {
            return this.pinching && this.parent.input.touches.length <= 1 ? (this.active = !1, this.lastCenter = null, this.pinching = !1, this.moved = !1, this.parent.emit("pinch-end", this.parent), !0) : !1;
        }
    }
    const gl = {
        topLeft: !1,
        friction: .8,
        time: 1e3,
        ease: "easeInOutSine",
        interrupt: !0,
        removeOnComplete: !1,
        removeOnInterrupt: !1,
        forceStart: !1
    };
    class xl extends mt {
        constructor(t, e, s, r = {}){
            super(t), this.options = Object.assign({}, gl, r), this.ease = Ge(r.ease, "easeInOutSine"), this.x = e, this.y = s, this.options.forceStart && this.snapStart();
        }
        snapStart() {
            this.percent = 0, this.snapping = {
                time: 0
            };
            const t = this.options.topLeft ? this.parent.corner : this.parent.center;
            this.deltaX = this.x - t.x, this.deltaY = this.y - t.y, this.startX = t.x, this.startY = t.y, this.parent.emit("snap-start", this.parent);
        }
        wheel() {
            return this.options.removeOnInterrupt && this.parent.plugins.remove("snap"), !1;
        }
        down() {
            return this.options.removeOnInterrupt ? this.parent.plugins.remove("snap") : this.options.interrupt && (this.snapping = null), !1;
        }
        up() {
            if (this.parent.input.count() === 0) {
                const t = this.parent.plugins.get("decelerate", !0);
                t && (t.x || t.y) && (t.percentChangeX = t.percentChangeY = this.options.friction);
            }
            return !1;
        }
        update(t) {
            if (!this.paused && !(this.options.interrupt && this.parent.input.count() !== 0)) if (this.snapping) {
                const e = this.snapping;
                e.time += t;
                let s, r, n;
                const o = this.startX, h = this.startY, a = this.deltaX, l = this.deltaY;
                if (e.time > this.options.time) s = !0, r = o + a, n = h + l;
                else {
                    const c = this.ease(e.time, 0, 1, this.options.time);
                    r = o + a * c, n = h + l * c;
                }
                this.options.topLeft ? this.parent.moveCorner(r, n) : this.parent.moveCenter(r, n), this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "snap"
                }), s && (this.options.removeOnComplete && this.parent.plugins.remove("snap"), this.parent.emit("snap-end", this.parent), this.snapping = null);
            } else {
                const e = this.options.topLeft ? this.parent.corner : this.parent.center;
                (e.x !== this.x || e.y !== this.y) && this.snapStart();
            }
        }
    }
    const yl = {
        width: 0,
        height: 0,
        time: 1e3,
        ease: "easeInOutSine",
        center: null,
        interrupt: !0,
        removeOnComplete: !1,
        removeOnInterrupt: !1,
        forceStart: !1,
        noMove: !1
    };
    class _l extends mt {
        constructor(t, e = {}){
            super(t), this.options = Object.assign({}, yl, e), this.ease = Ge(this.options.ease), this.xIndependent = !1, this.yIndependent = !1, this.xScale = 0, this.yScale = 0, this.options.width > 0 && (this.xScale = t.screenWidth / this.options.width, this.xIndependent = !0), this.options.height > 0 && (this.yScale = t.screenHeight / this.options.height, this.yIndependent = !0), this.xScale = this.xIndependent ? this.xScale : this.yScale, this.yScale = this.yIndependent ? this.yScale : this.xScale, this.options.time === 0 ? (t.container.scale.x = this.xScale, t.container.scale.y = this.yScale, this.options.removeOnComplete && this.parent.plugins.remove("snap-zoom")) : e.forceStart && this.createSnapping();
        }
        createSnapping() {
            const t = this.parent.worldScreenWidth, e = this.parent.worldScreenHeight, s = this.parent.screenWidth / this.xScale, r = this.parent.screenHeight / this.yScale;
            this.snapping = {
                time: 0,
                startX: t,
                startY: e,
                deltaX: s - t,
                deltaY: r - e
            }, this.parent.emit("snap-zoom-start", this.parent);
        }
        resize() {
            this.snapping = null, this.options.width > 0 && (this.xScale = this.parent.screenWidth / this.options.width), this.options.height > 0 && (this.yScale = this.parent.screenHeight / this.options.height), this.xScale = this.xIndependent ? this.xScale : this.yScale, this.yScale = this.yIndependent ? this.yScale : this.xScale;
        }
        wheel() {
            return this.options.removeOnInterrupt && this.parent.plugins.remove("snap-zoom"), !1;
        }
        down() {
            return this.options.removeOnInterrupt ? this.parent.plugins.remove("snap-zoom") : this.options.interrupt && (this.snapping = null), !1;
        }
        update(t) {
            if (this.paused || this.options.interrupt && this.parent.input.count() !== 0) return;
            let e;
            if (!this.options.center && !this.options.noMove && (e = this.parent.center), !this.snapping) (this.parent.scale.x !== this.xScale || this.parent.scale.y !== this.yScale) && this.createSnapping();
            else if (this.snapping) {
                const s = this.snapping;
                if (s.time += t, s.time >= this.options.time) this.parent.scale.set(this.xScale, this.yScale), this.options.removeOnComplete && this.parent.plugins.remove("snap-zoom"), this.parent.emit("snap-zoom-end", this.parent), this.snapping = null;
                else {
                    const n = this.snapping, o = this.ease(n.time, n.startX, n.deltaX, this.options.time), h = this.ease(n.time, n.startY, n.deltaY, this.options.time);
                    this.parent.scale.x = this.parent.screenWidth / o, this.parent.scale.y = this.parent.screenHeight / h;
                }
                const r = this.parent.plugins.get("clamp-zoom", !0);
                r && r.clamp(), this.options.noMove || (this.options.center ? this.parent.moveCenter(this.options.center) : this.parent.moveCenter(e));
            }
        }
        resume() {
            this.snapping = null, super.resume();
        }
    }
    const wl = {
        percent: .1,
        smooth: !1,
        interrupt: !0,
        reverse: !1,
        center: null,
        lineHeight: 20,
        axis: "all",
        keyToPress: null,
        trackpadPinch: !1,
        wheelZoom: !0
    };
    class bl extends mt {
        constructor(t, e = {}){
            super(t), this.options = Object.assign({}, wl, e), this.keyIsPressed = !1, this.options.keyToPress && this.handleKeyPresses(this.options.keyToPress);
        }
        handleKeyPresses(t) {
            typeof window > "u" || (window.addEventListener("keydown", (e)=>{
                t.includes(e.code) && (this.keyIsPressed = !0);
            }), window.addEventListener("keyup", (e)=>{
                t.includes(e.code) && (this.keyIsPressed = !1);
            }));
        }
        checkKeyPress() {
            return !this.options.keyToPress || this.keyIsPressed;
        }
        down() {
            return this.options.interrupt && (this.smoothing = null), !1;
        }
        isAxisX() {
            return [
                "all",
                "x"
            ].includes(this.options.axis);
        }
        isAxisY() {
            return [
                "all",
                "y"
            ].includes(this.options.axis);
        }
        update() {
            if (this.smoothing) {
                const t = this.smoothingCenter, e = this.smoothing;
                let s;
                this.options.center || (s = this.parent.toLocal(t)), this.isAxisX() && (this.parent.scale.x += e.x), this.isAxisY() && (this.parent.scale.y += e.y), this.parent.emit("zoomed", {
                    viewport: this.parent,
                    type: "wheel"
                });
                const r = this.parent.plugins.get("clamp-zoom", !0);
                if (r && r.clamp(), this.options.center) this.parent.moveCenter(this.options.center);
                else {
                    const n = this.parent.parent || this.parent;
                    n.toLocal(s, this.parent, s);
                    const o = n.toLocal(t);
                    this.parent.x += o.x - s.x, this.parent.y += o.y - s.y;
                }
                this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "wheel"
                }), this.smoothingCount++, typeof this.options.smooth == "number" && this.smoothingCount >= this.options.smooth && (this.smoothing = null);
            }
        }
        pinch(t) {
            if (this.paused) return;
            const e = this.parent.input.getPointerPosition(t), s = -t.deltaY * (t.deltaMode ? this.options.lineHeight : 1) / 200, r = Math.pow(2, (1 + this.options.percent) * s);
            let n;
            this.options.center || (n = this.parent.toLocal(e)), this.isAxisX() && (this.parent.scale.x *= r), this.isAxisY() && (this.parent.scale.y *= r), this.parent.emit("zoomed", {
                viewport: this.parent,
                type: "wheel"
            });
            const o = this.parent.plugins.get("clamp-zoom", !0);
            if (o && o.clamp(), this.options.center) this.parent.moveCenter(this.options.center);
            else {
                const h = this.parent.parent || this.parent;
                h.toLocal(n, this.parent, n);
                const a = h.toLocal(e);
                this.parent.x += a.x - n.x, this.parent.y += a.y - n.y;
            }
            this.parent.emit("moved", {
                viewport: this.parent,
                type: "wheel"
            }), this.parent.emit("wheel-start", {
                event: t,
                viewport: this.parent
            });
        }
        wheel(t) {
            if (this.paused || !this.checkKeyPress()) return !1;
            if (t.ctrlKey && this.options.trackpadPinch) this.pinch(t);
            else if (this.options.wheelZoom) {
                const e = this.parent.input.getPointerPosition(t), s = (this.options.reverse ? -1 : 1) * -t.deltaY * (t.deltaMode ? this.options.lineHeight : 1) / 500, r = Math.pow(2, (1 + this.options.percent) * s);
                if (this.options.smooth) {
                    const n = {
                        x: this.smoothing ? this.smoothing.x * (this.options.smooth - this.smoothingCount) : 0,
                        y: this.smoothing ? this.smoothing.y * (this.options.smooth - this.smoothingCount) : 0
                    };
                    this.smoothing = {
                        x: ((this.parent.scale.x + n.x) * r - this.parent.scale.x) / this.options.smooth,
                        y: ((this.parent.scale.y + n.y) * r - this.parent.scale.y) / this.options.smooth
                    }, this.smoothingCount = 0, this.smoothingCenter = e;
                } else {
                    let n;
                    this.options.center || (n = this.parent.toLocal(e)), this.isAxisX() && (this.parent.scale.x *= r), this.isAxisY() && (this.parent.scale.y *= r), this.parent.emit("zoomed", {
                        viewport: this.parent,
                        type: "wheel"
                    });
                    const o = this.parent.plugins.get("clamp-zoom", !0);
                    if (o && o.clamp(), this.options.center) this.parent.moveCenter(this.options.center);
                    else {
                        const h = this.parent.parent || this.parent;
                        h.toLocal(n, this.parent, n);
                        const a = h.toLocal(e);
                        this.parent.x += a.x - n.x, this.parent.y += a.y - n.y;
                    }
                }
                this.parent.emit("moved", {
                    viewport: this.parent,
                    type: "wheel"
                }), this.parent.emit("wheel-start", {
                    event: t,
                    viewport: this.parent
                });
            }
            return !this.parent.options.passiveWheel;
        }
    }
    const vl = {
        screenWidth: typeof window > "u" ? 0 : window.innerWidth,
        screenHeight: typeof window > "u" ? 0 : window.innerHeight,
        worldWidth: null,
        worldHeight: null,
        threshold: 5,
        passiveWheel: !0,
        stopPropagation: !1,
        forceHitArea: null,
        noTicker: !1,
        disableOnContextMenu: !1,
        ticker: Kt.shared,
        allowPreserveDragOutside: !1
    };
    class Sl extends Wt {
        constructor(t){
            super(), this._disableOnContextMenu = (e)=>e.preventDefault(), this.options = {
                ...vl,
                ...t
            }, this.screenWidth = this.options.screenWidth, this.screenHeight = this.options.screenHeight, this._worldWidth = this.options.worldWidth, this._worldHeight = this.options.worldHeight, this.forceHitArea = this.options.forceHitArea, this.threshold = this.options.threshold, this.options.disableOnContextMenu && this.options.events.domElement.addEventListener("contextmenu", this._disableOnContextMenu), this.options.noTicker || (this.tickerFunction = ()=>this.update(this.options.ticker.elapsedMS), this.options.ticker.add(this.tickerFunction)), this.input = new qa(this), this.plugins = new Ka(this);
        }
        destroy(t) {
            var e;
            !this.options.noTicker && this.tickerFunction && this.options.ticker.remove(this.tickerFunction), this.options.disableOnContextMenu && ((e = this.options.events.domElement) == null || e.removeEventListener("contextmenu", this._disableOnContextMenu)), this.input.destroy(), super.destroy(t);
        }
        update(t) {
            this.pause || (this.plugins.update(t), this.lastViewport && (this.lastViewport.x !== this.x || this.lastViewport.y !== this.y ? this.moving = !0 : this.moving && (this.emit("moved-end", this), this.moving = !1), this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y ? this.zooming = !0 : this.zooming && (this.emit("zoomed-end", this), this.zooming = !1)), this.forceHitArea || (this._hitAreaDefault = new J(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight), this.hitArea = this._hitAreaDefault), this._dirty = this._dirty || !this.lastViewport || this.lastViewport.x !== this.x || this.lastViewport.y !== this.y || this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y, this.lastViewport = {
                x: this.x,
                y: this.y,
                scaleX: this.scale.x,
                scaleY: this.scale.y
            }, this.emit("frame-end", this));
        }
        resize(t = typeof window > "u" ? 0 : window.innerWidth, e = typeof window > "u" ? 0 : window.innerHeight, s, r) {
            this.screenWidth = t, this.screenHeight = e, typeof s < "u" && (this._worldWidth = s), typeof r < "u" && (this._worldHeight = r), this.plugins.resize(), this.dirty = !0;
        }
        get worldWidth() {
            return this._worldWidth ? this._worldWidth : this.width / this.scale.x;
        }
        set worldWidth(t) {
            this._worldWidth = t, this.plugins.resize();
        }
        get worldHeight() {
            return this._worldHeight ? this._worldHeight : this.height / this.scale.y;
        }
        set worldHeight(t) {
            this._worldHeight = t, this.plugins.resize();
        }
        getVisibleBounds() {
            return new J(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
        }
        toWorld(t, e) {
            return arguments.length === 2 ? this.toLocal(new O(t, e)) : this.toLocal(t);
        }
        toScreen(t, e) {
            return arguments.length === 2 ? this.toGlobal(new O(t, e)) : this.toGlobal(t);
        }
        get worldScreenWidth() {
            return this.screenWidth / this.scale.x;
        }
        get worldScreenHeight() {
            return this.screenHeight / this.scale.y;
        }
        get screenWorldWidth() {
            return this.worldWidth * this.scale.x;
        }
        get screenWorldHeight() {
            return this.worldHeight * this.scale.y;
        }
        get center() {
            return new O(this.worldScreenWidth / 2 - this.x / this.scale.x, this.worldScreenHeight / 2 - this.y / this.scale.y);
        }
        set center(t) {
            this.moveCenter(t);
        }
        moveCenter(...t) {
            let e, s;
            typeof t[0] == "number" ? (e = t[0], s = t[1]) : (e = t[0].x, s = t[0].y);
            const r = (this.worldScreenWidth / 2 - e) * this.scale.x, n = (this.worldScreenHeight / 2 - s) * this.scale.y;
            return (this.x !== r || this.y !== n) && (this.position.set(r, n), this.plugins.reset(), this.dirty = !0), this;
        }
        get corner() {
            return new O(-this.x / this.scale.x, -this.y / this.scale.y);
        }
        set corner(t) {
            this.moveCorner(t);
        }
        moveCorner(...t) {
            let e, s;
            return t.length === 1 ? (e = -t[0].x * this.scale.x, s = -t[0].y * this.scale.y) : (e = -t[0] * this.scale.x, s = -t[1] * this.scale.y), (e !== this.x || s !== this.y) && (this.position.set(e, s), this.plugins.reset(), this.dirty = !0), this;
        }
        get screenWidthInWorldPixels() {
            return this.screenWidth / this.scale.x;
        }
        get screenHeightInWorldPixels() {
            return this.screenHeight / this.scale.y;
        }
        findFitWidth(t) {
            return this.screenWidth / t;
        }
        findFitHeight(t) {
            return this.screenHeight / t;
        }
        findFit(t, e) {
            const s = this.screenWidth / t, r = this.screenHeight / e;
            return Math.min(s, r);
        }
        findCover(t, e) {
            const s = this.screenWidth / t, r = this.screenHeight / e;
            return Math.max(s, r);
        }
        fitWidth(t = this.worldWidth, e, s = !0, r) {
            let n;
            e && (n = this.center), this.scale.x = this.screenWidth / t, s && (this.scale.y = this.scale.x);
            const o = this.plugins.get("clamp-zoom", !0);
            return !r && o && o.clamp(), e && n && this.moveCenter(n), this;
        }
        fitHeight(t = this.worldHeight, e, s = !0, r) {
            let n;
            e && (n = this.center), this.scale.y = this.screenHeight / t, s && (this.scale.x = this.scale.y);
            const o = this.plugins.get("clamp-zoom", !0);
            return !r && o && o.clamp(), e && n && this.moveCenter(n), this;
        }
        fitWorld(t) {
            let e;
            t && (e = this.center), this.scale.x = this.screenWidth / this.worldWidth, this.scale.y = this.screenHeight / this.worldHeight, this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y;
            const s = this.plugins.get("clamp-zoom", !0);
            return s && s.clamp(), t && e && this.moveCenter(e), this;
        }
        fit(t, e = this.worldWidth, s = this.worldHeight) {
            let r;
            t && (r = this.center), this.scale.x = this.screenWidth / e, this.scale.y = this.screenHeight / s, this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y;
            const n = this.plugins.get("clamp-zoom", !0);
            return n && n.clamp(), t && r && this.moveCenter(r), this;
        }
        setZoom(t, e) {
            let s;
            e && (s = this.center), this.scale.set(t);
            const r = this.plugins.get("clamp-zoom", !0);
            return r && r.clamp(), e && s && this.moveCenter(s), this;
        }
        zoomPercent(t, e) {
            return this.setZoom(this.scale.x + this.scale.x * t, e);
        }
        zoom(t, e) {
            return this.fitWidth(t + this.worldScreenWidth, e), this;
        }
        get scaled() {
            return this.scale.x;
        }
        set scaled(t) {
            this.setZoom(t, !0);
        }
        snapZoom(t) {
            return this.plugins.add("snap-zoom", new _l(this, t)), this;
        }
        OOB() {
            return {
                left: this.left < 0,
                right: this.right > this.worldWidth,
                top: this.top < 0,
                bottom: this.bottom > this.worldHeight,
                cornerPoint: new O(this.worldWidth * this.scale.x - this.screenWidth, this.worldHeight * this.scale.y - this.screenHeight)
            };
        }
        get right() {
            return -this.x / this.scale.x + this.worldScreenWidth;
        }
        set right(t) {
            this.x = -t * this.scale.x + this.screenWidth, this.plugins.reset();
        }
        get left() {
            return -this.x / this.scale.x;
        }
        set left(t) {
            this.x = -t * this.scale.x, this.plugins.reset();
        }
        get top() {
            return -this.y / this.scale.y;
        }
        set top(t) {
            this.y = -t * this.scale.y, this.plugins.reset();
        }
        get bottom() {
            return -this.y / this.scale.y + this.worldScreenHeight;
        }
        set bottom(t) {
            this.y = -t * this.scale.y + this.screenHeight, this.plugins.reset();
        }
        get dirty() {
            return !!this._dirty;
        }
        set dirty(t) {
            this._dirty = t;
        }
        get forceHitArea() {
            return this._forceHitArea;
        }
        set forceHitArea(t) {
            t ? (this._forceHitArea = t, this.hitArea = t) : (this._forceHitArea = null, this.hitArea = new J(0, 0, this.worldWidth, this.worldHeight));
        }
        drag(t) {
            return this.plugins.add("drag", new al(this, t)), this;
        }
        clamp(t) {
            return this.plugins.add("clamp", new sl(this, t)), this;
        }
        decelerate(t) {
            return this.plugins.add("decelerate", new ol(this, t)), this;
        }
        bounce(t) {
            return this.plugins.add("bounce", new tl(this, t)), this;
        }
        pinch(t) {
            return this.plugins.add("pinch", new ml(this, t)), this;
        }
        snap(t, e, s) {
            return this.plugins.add("snap", new xl(this, t, e, s)), this;
        }
        follow(t, e) {
            return this.plugins.add("follow", new cl(this, t, e)), this;
        }
        wheel(t) {
            return this.plugins.add("wheel", new bl(this, t)), this;
        }
        animate(t) {
            return this.plugins.add("animate", new Qa(this, t)), this;
        }
        clampZoom(t) {
            return this.plugins.add("clamp-zoom", new rl(this, t)), this;
        }
        mouseEdges(t) {
            return this.plugins.add("mouse-edges", new dl(this, t)), this;
        }
        get pause() {
            return !!this._pause;
        }
        set pause(t) {
            this._pause = t, this.lastViewport = null, this.moving = !1, this.zooming = !1, t && this.input.pause();
        }
        ensureVisible(t, e, s, r, n) {
            n && (s > this.worldScreenWidth || r > this.worldScreenHeight) && (this.fit(!0, s, r), this.emit("zoomed", {
                viewport: this,
                type: "ensureVisible"
            }));
            let o = !1;
            t < this.left ? (this.left = t, o = !0) : t + s > this.right && (this.right = t + s, o = !0), e < this.top ? (this.top = e, o = !0) : e + r > this.bottom && (this.bottom = e + r, o = !0), o && this.emit("moved", {
                viewport: this,
                type: "ensureVisible"
            });
        }
    }
    class pe {
        static #e = new pe;
        #t = new Map;
        #s = void 0;
        constructor(){}
        static get instance() {
            return this.#e;
        }
        addScene(t, e) {
            this.#t.set(t, e);
        }
        getScene(t) {
            return this.#t.get(t);
        }
        switchToScene(t) {
            const e = this.#t.get(t);
            if (!e) throw new Error(`Scene ${t} not found`);
            this.#s && this.#s.unload(), this.#s = e, ct.instance.viewport.addChild(this.#s), e.load();
        }
        get currentScene() {
            if (!this.#s) throw new Error("No current scene set");
            return this.#s;
        }
    }
    class ct {
        static #e = new ct;
        #t = void 0;
        #s = void 0;
        #i = new Kt;
        constructor(){}
        static get instance() {
            return this.#e;
        }
        get renderer() {
            return this.#t;
        }
        get viewport() {
            return this.#s;
        }
        async init(t) {
            if (this.#t = await Xo({
                preference: "webgpu",
                canvas: t.canvas,
                eventMode: "passive",
                resolution: window.devicePixelRatio || 1,
                backgroundColor: t.backgroundColor,
                autoDensity: !0,
                eventFeatures: {
                    globalMove: !1
                }
            }), t.canvas || document.body.appendChild(this.#t.canvas), !this.#t) throw new Error("Failed to initialize renderer");
            if (this.#s = new Sl({
                screenWidth: this.#t.screen.width,
                screenHeight: this.#t.screen.height,
                worldWidth: t.width,
                worldHeight: t.height,
                events: this.#t.events
            }), !this.#t || !this.#s) throw new Error("Failed to initialize viewport");
            window.addEventListener("resize", ()=>{
                this.resize(window.innerWidth, window.innerHeight);
            }), this.resize(window.innerWidth, window.innerHeight), globalThis.__PIXI_STAGE__ = this.#s, globalThis.__PIXI_RENDERER__ = this.#t;
        }
        resize(t, e) {
            const s = this.renderer, r = this.viewport, n = r.worldWidth / r.worldHeight;
            let o = t, h = t / n;
            h > e && (h = e, o = e * n), s.resize(o, h), r.resize(o, h), r.fit(), r.moveCenter(r.worldWidth / 2, r.worldHeight / 2), s.canvas.style.position = "absolute", s.canvas.style.left = `${(t - o) / 2}px`, s.canvas.style.top = `${(e - h) / 2}px`;
        }
        run() {
            this.#i.add((t)=>{
                this.renderer.render(this.viewport), pe.instance.currentScene.update(t.deltaMS);
            }), this.#i.start();
        }
    }
    function Ms(i, t, e) {
        return e === void 0 ? Math.max(t, i) : Math.max(t, Math.min(e, i));
    }
    function Cl(i) {
        return i.x * i.x + i.y * i.y;
    }
    function Ml(i) {
        return Math.sqrt(Cl(i));
    }
    function qi(i, t) {
        const e = new O(Ms(i.x, t.x, t.x + t.width), Ms(i.y, t.y, t.y + t.height)), s = i.x - e.x, r = i.y - e.y, n = Ml({
            x: s,
            y: r
        });
        if (n < i.radius) {
            const o = i.radius - n;
            return new O(s / n * o, r / n * o);
        }
        return null;
    }
    class Mt {
        static #e = new Mt;
        #t = {};
        #s = [
            "black",
            "white",
            "red",
            "green",
            "blue",
            "yellow",
            "magenta",
            "cyan",
            "orange"
        ];
        #i;
        constructor(){
            this.#t = {}, this.#t.default = this.#n(), this.#t.solarizedLight = this.#o(!1), this.#t.solarizedDark = this.#o(!0), this.#i = this.#t.default;
        }
        static get instance() {
            return this.#e;
        }
        get current() {
            return this.#i;
        }
        #r(t) {
            for (const e of this.#s)t[e] = t[e] || "white";
            t.background = t.black, t.foreground = t.white;
        }
        #n(t) {
            const e = {
                black: [
                    0,
                    0,
                    0,
                    1
                ],
                white: [
                    1,
                    1,
                    1,
                    1
                ],
                red: [
                    1,
                    0,
                    0,
                    1
                ],
                green: [
                    0,
                    1,
                    0,
                    1
                ],
                blue: [
                    0,
                    0,
                    1,
                    1
                ],
                yellow: [
                    1,
                    1,
                    0,
                    1
                ],
                magenta: [
                    1,
                    0,
                    1,
                    1
                ],
                cyan: [
                    0,
                    1,
                    1,
                    1
                ],
                orange: [
                    1,
                    .5,
                    0,
                    1
                ]
            };
            return this.#r(e), e;
        }
        #o(t) {
            const e = {
                base03: [
                    0,
                    .16862745098039217,
                    .21176470588235294,
                    1
                ],
                base02: [
                    .027450980392156862,
                    .21176470588235294,
                    .25882352941176473,
                    1
                ],
                base01: [
                    .34509803921568627,
                    .43137254901960786,
                    .4588235294117647,
                    1
                ],
                base00: [
                    .396078431372549,
                    .4823529411764706,
                    .5137254901960784,
                    1
                ],
                base0: [
                    .5137254901960784,
                    .5803921568627451,
                    .5882352941176471,
                    1
                ],
                base1: [
                    .5764705882352941,
                    .6313725490196078,
                    .6313725490196078,
                    1
                ],
                base2: [
                    .9333333333333333,
                    .9098039215686274,
                    .8352941176470589,
                    1
                ],
                base3: [
                    .9921568627450981,
                    .9647058823529412,
                    .8901960784313725,
                    1
                ],
                yellow: [
                    .7098039215686275,
                    .5372549019607843,
                    0,
                    1
                ],
                orange: [
                    .796078431372549,
                    .29411764705882354,
                    .08627450980392157,
                    1
                ],
                red: [
                    .8627450980392157,
                    .19607843137254902,
                    .1843137254901961,
                    1
                ],
                magenta: [
                    .8274509803921568,
                    .21176470588235294,
                    .5098039215686274,
                    1
                ],
                violet: [
                    .4235294117647059,
                    .44313725490196076,
                    .7686274509803922,
                    1
                ],
                blue: [
                    .14901960784313725,
                    .5450980392156862,
                    .8235294117647058,
                    1
                ],
                cyan: [
                    .16470588235294117,
                    .6313725490196078,
                    .596078431372549,
                    1
                ],
                green: [
                    .5215686274509804,
                    .6,
                    0,
                    1
                ]
            };
            return t ? (e.black = e.base03, e.white = e.base3) : (e.white = e.base03, e.black = e.base3), this.#r(e), e;
        }
        setScheme(t) {
            this.#i = this.#t[t] || this.#t.default;
        }
    }
    class Pl extends zt {
        #e = new O;
        constructor(){
            super(), this.reset(), this.circle(0, 0, Math.min(ct.instance.viewport.worldWidth, ct.instance.viewport.worldHeight * .02)).fill(Mt.instance.current.foreground);
        }
        reset() {
            const t = ct.instance.viewport;
            this.position.set(t.worldWidth / 2, t.worldHeight / 2);
            const e = 150 + Math.random() * 50, s = 150 + Math.random() * 50;
            this.#e.set(Math.random() > .5 ? e : -e, Math.random() > .5 ? s : -s);
        }
        update(t) {
            this.position.set(this.position.x + this.#e.x * t, this.position.y + this.#e.y * t);
        }
        collides(t) {
            return qi({
                x: this.x,
                y: this.y,
                radius: this.width / 2
            }, t);
        }
        #t(t, e) {
            return e && (this.#e.x *= 1.1, this.#e.y *= 1.1), this.x += t.x, this.y += t.y, !0;
        }
        checkTopBottomWallsCollision() {
            const t = ct.instance.viewport, e = this.collides({
                x: 0,
                y: 0,
                width: t.worldWidth,
                height: 2
            }), s = this.collides({
                x: 0,
                y: t.worldHeight - 2,
                width: t.worldWidth,
                height: 2
            });
            (e || s) && (e ? this.#t(e, !1) : this.#t(s, !1), this.#e.y = -this.#e.y);
        }
        checkPaddleCollision(t) {
            const e = qi({
                x: this.x,
                y: this.y,
                radius: this.width / 2
            }, {
                x: t.x,
                y: t.y,
                width: t.width,
                height: t.height
            });
            return e && (this.#e.x *= 1.1, this.#e.y *= 1.1, this.#e.x = -this.#e.x, this.x += e.x, this.y += e.y), !0;
        }
    }
    class Ki extends zt {
        #e;
        #t;
        #s = 300;
        #i = new O(0, 0);
        constructor(t){
            super();
            const e = ct.instance.viewport, s = Math.min(e.worldWidth, e.worldHeight) * .025, r = e.worldHeight / 5, n = t ? 0 : e.worldWidth - s, o = (e.worldHeight - r) / 2;
            this.position.set(n, o), this.roundRect(0, 0, s, r, s / 2).fill(t ? Mt.instance.current.blue : Mt.instance.current.red), this.hitArea = new J(0, 0, s * 2, r * 5), this.interactive = !0, this.eventMode = "static", this.on("pointerdown", (h)=>{
                this.#i.y = h.getLocalPosition(this).y > this.height / 2 ? this.#s : -this.#s;
            }), this.on("pointerup", ()=>{
                this.#i.y = 0;
            }), this.#e = 0, this.#t = new Zt({
                text: this.#e.toString(),
                style: {
                    fontSize: Math.round(r * .5),
                    fontWeight: "bold",
                    fill: this.fillStyle
                }
            }), this.text.position.set(t ? e.worldWidth / 4 : e.worldWidth * 3 / 4, this.text.height / 2), this.#t.anchor.set(.5);
        }
        get text() {
            return this.#t;
        }
        get score() {
            return this.#e;
        }
        update(t) {
            this.y += this.#i.y * t, this.y = Ms(this.y, 0, ct.instance.viewport.worldHeight - this.height);
        }
        setVelocity(t) {
            t ? this.#i.set(0, -this.#s) : this.#i.set(0, this.#s);
        }
        setScore(t) {
            this.#e = t, this.#t.text = this.#e.toString();
        }
    }
    class Ds extends Wt {
        background;
        text;
        state = "normal";
        options;
        static defaultOptions = {
            width: 200,
            height: 50,
            text: "",
            texture: $.EMPTY,
            textStyle: new Be({
                fill: "white"
            }),
            color: 3447003,
            hoverColor: 2719929,
            pressedColor: 1725046,
            disabledColor: 9807270,
            cornerRadius: 5,
            hitAreaPadding: 0,
            clickOnRelease: !0
        };
        constructor(t = {}){
            super(), this.options = {
                ...Ds.defaultOptions,
                ...t
            }, this.options.texture !== $.EMPTY ? (this.background = new Vt(this.options.texture), this.background.width = this.options.width, this.background.height = this.options.height) : (this.background = new zt, this.drawBackground()), this.addChild(this.background), this.options.text && (this.text = new Zt({
                text: this.options.text,
                style: this.options.textStyle
            }), this.text.anchor.set(.5), this.text.position.set(this.options.width / 2, this.options.height / 2), this.addChild(this.text)), this.hitArea = {
                contains: (e, s)=>{
                    const r = this.options.hitAreaPadding;
                    return e >= -r && e <= this.options.width + r && s >= -r && s <= this.options.height + r;
                }
            }, this.eventMode = "static", this.cursor = "pointer", this.on("pointerdown", this.onPointerDown).on("pointerup", this.onPointerUp).on("pointerupoutside", this.onPointerUp).on("pointerover", this.onPointerOver).on("pointerout", this.onPointerOut);
        }
        drawBackground() {
            const t = this.background;
            t.clear();
            let e = this.options.color;
            switch(this.tint = 16777215, this.state){
                case "hover":
                    this.tint = 14540253;
                    break;
                case "pressed":
                    this.tint = 12303291;
                    break;
                case "disabled":
                    e = this.options.disabledColor;
                    break;
            }
            t.roundRect(0, 0, this.options.width, this.options.height, this.options.cornerRadius).fill(e);
        }
        onPointerDown() {
            this.state !== "disabled" && (this.state = "pressed", this.drawBackground(), this.emit("buttonDown"), this.options.clickOnRelease || this.emit("buttonClick"));
        }
        onPointerUp(t) {
            if (this.state === "disabled") return;
            const e = t.getLocalPosition(this);
            this.state = this.hitArea?.contains(e.x, e.y) ? "hover" : "normal", this.drawBackground(), this.emit("buttonUp"), this.options.clickOnRelease && this.emit("buttonClick");
        }
        onPointerOver() {
            this.state !== "disabled" && (this.state = "hover", this.drawBackground(), this.emit("buttonHover"));
        }
        onPointerOut() {
            this.state !== "disabled" && (this.state = "normal", this.drawBackground(), this.emit("buttonOut"));
        }
        setText(t) {
            this.text && (this.text.text = t);
        }
        setDisabled(t) {
            this.state = t ? "disabled" : "normal", this.eventMode = t ? "none" : "static", this.cursor = t ? "default" : "pointer", this.drawBackground();
        }
        setColor(t) {
            this.options.color = t, this.drawBackground();
        }
        setHoverColor(t) {
            this.options.hoverColor = t, this.drawBackground();
        }
        setPressedColor(t) {
            this.options.pressedColor = t, this.drawBackground();
        }
        setDisabledColor(t) {
            this.options.disabledColor = t, this.drawBackground();
        }
        resize(t, e) {
            this.options.width = t, this.options.height = e, this.background instanceof Vt ? (this.background.width = t, this.background.height = e) : this.drawBackground(), this.text && this.text.position.set(t / 2, e / 2);
        }
    }
    const Pe = {
        PENDING: 0,
        STARTED: 1,
        ENDED: 3
    };
    class Al extends Wt {
        #e = new Zt;
        #t;
        #s;
        #i;
        #r;
        #n = Pe.PENDING;
        #o = 1;
        constructor(){
            super();
            const t = ct.instance.viewport, e = {
                x: t.worldWidth / 2,
                y: t.worldHeight / 2
            };
            this.#s = new Pl;
            const s = 4, r = (a, l, c, u)=>{
                this.addChild(new zt().moveTo(a, c).lineTo(l, u).stroke({
                    color: Mt.instance.current.foreground,
                    width: s,
                    pixelLine: !1,
                    join: "miter"
                }));
            };
            r(e.x, e.x, 0, t.worldHeight), r(0, t.worldWidth, s / 2, s / 2), r(0, t.worldWidth, t.worldHeight - s / 2, t.worldHeight - s / 2), this.#i = new Ki(!0), this.#r = new Ki(!1), this.#e = new Zt({
                style: {
                    fontSize: t.worldHeight * .1,
                    fontWeight: "bold"
                }
            }), this.#e.position.set(t.worldWidth / 2, t.worldHeight / 4), this.#e.anchor.set(.5), this.#e.visible = !1, this.addChild(this.#s, this.#i, this.#i.text, this.#r, this.#r.text, this.#e);
            const n = t.worldHeight * .1, o = new zt().roundRect(0, 0, t.worldWidth * .2, n, n * .2).fill(Mt.instance.current.foreground);
            this.#t = new Ds({}), this.#t.addChild(o);
            const h = new Zt({
                text: "Start Game",
                style: {
                    fontSize: this.#t.height * .5,
                    fill: Mt.instance.current.background,
                    fontWeight: "bold"
                }
            });
            h.anchor.set(.5), h.position.set(this.#t.width / 2, this.#t.height / 2), this.#t.position.set(e.x - this.#t.width / 2, e.y + this.#t.height), this.#t.addChild(h), this.#t.interactive = !0, this.#t.eventMode = "static", this.#t.on("pointerdown", ()=>{
                this.#n = Pe.STARTED, this.#i.setScore(0), this.#r.setScore(0), this.#e.visible = !1, this.#t.visible = !1;
            }), this.addChild(this.#t);
        }
        load() {}
        unload() {}
        onKeyPressed(t) {}
        onKeyReleased(t) {}
        resize(t, e) {}
        #h = ()=>{
            const t = this.#i.score >= this.#o, e = this.#r.score >= this.#o;
            if (t || e) {
                this.#e.visible = !0, t ? (this.#e.text = "Left Paddle Wins!", this.#e.style.fill = this.#i.fillStyle.color) : (this.#e.text = "Right Paddle Wins!", this.#e.style.fill = this.#r.fillStyle.color);
                const s = ct.instance.viewport;
                return new Zt({
                    text: t ? "Left Paddle Wins!" : "Right Paddle Wins!",
                    style: {
                        fontSize: s.worldHeight * .1,
                        fontWeight: "bold",
                        fill: "white"
                    }
                }), this.#n = Pe.ENDED, this.#s.reset(), this.#t.visible = !0, !0;
            }
            return !1;
        };
        update(t) {
            const e = ct.instance.viewport;
            if (this.#n !== Pe.STARTED) {
                this.#s.reset();
                return;
            }
            this.#h();
            const s = t * .001;
            this.#s.checkPaddleCollision(this.#i), this.#s.checkPaddleCollision(this.#r), this.#s.checkTopBottomWallsCollision();
            const r = this.#s.position.x < 0, n = this.#s.position.x > e.worldWidth;
            (r || n) && (r ? this.#r.setScore(this.#i.score + 1) : this.#i.setScore(this.#r.score + 1), this.#s.reset()), this.#s.update(s), this.#i.update(s), this.#r.update(s);
        }
    }
    window.addEventListener("load", async ()=>{
        const i = {
            gameWidth: 1920,
            gameHeight: 1080
        }, t = document.getElementById("app");
        if (!t) throw new Error("Canvas element not found");
        Mt.instance.setScheme("solarizedDark"), await (async ()=>{
            await ct.instance.init({
                width: i.gameWidth,
                height: i.gameHeight,
                backgroundColor: Mt.instance.current.background,
                canvas: t
            });
        })();
        const e = new Al;
        pe.instance.addScene("main", e), pe.instance.switchToScene("main"), ct.instance.run();
    });
})();
export { K as $, Lr as A, lt as B, Wt as C, yt as D, Z as E, _t as F, He as G, to as H, ri as I, Vt as J, Ao as K, Fo as L, U as M, it as N, J as O, O as P, Oo as Q, ys as R, nh as S, Kt as T, ms as U, oi as V, je as W, ai as X, io as Y, ot as Z, cr as _, At as a, st as a0, uh as a1, Ih as a2, Rh as a3, Gh as a4, Lh as a5, Oh as a6, Ws as a7, Gt as a8, Ua as a9, Ya as aa, Ee as ab, Be as ac, jt as ad, Ga as ae, Kr as af, Ci as ag, vi as ah, vn as ai, zt as aj, Cn as ak, Jr as al, de as b, Te as c, Es as d, Pt as e, Si as f, sh as g, Fr as h, wr as i, Tt as j, Hr as k, kh as l, Eh as m, Ns as n, Hh as o, zh as p, Or as q, Gn as r, Rs as s, $ as t, Er as u, Sn as v, ft as w, Uh as x, Rt as y, hr as z, __tla };
