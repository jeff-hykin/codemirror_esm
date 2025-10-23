/* esm.sh - @codemirror/state@6.5.2 */
import { findClusterBreak as Ve } from "../../../@marijn/find-cluster-break@^1.0.0.js"
var m = class s {
        lineAt(e) {
            if (e < 0 || e > this.length) throw new RangeError(`Invalid position ${e} in document of length ${this.length}`)
            return this.lineInner(e, !1, 1, 0)
        }
        line(e) {
            if (e < 1 || e > this.lines) throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`)
            return this.lineInner(e, !0, 1, 0)
        }
        replace(e, t, n) {
            ;[e, t] = $(this, e, t)
            let i = []
            return this.decompose(0, e, i, 2), n.length && n.decompose(0, n.length, i, 3), this.decompose(t, this.length, i, 1), J.from(i, this.length - (t - e) + n.length)
        }
        append(e) {
            return this.replace(this.length, this.length, e)
        }
        slice(e, t = this.length) {
            ;[e, t] = $(this, e, t)
            let n = []
            return this.decompose(e, t, n, 0), J.from(n, t - e)
        }
        eq(e) {
            if (e == this) return !0
            if (e.length != this.length || e.lines != this.lines) return !1
            let t = this.scanIdentical(e, 1),
                n = this.length - this.scanIdentical(e, -1),
                i = new B(this),
                r = new B(e)
            for (let l = t, h = t; ; ) {
                if ((i.next(l), r.next(l), (l = 0), i.lineBreak != r.lineBreak || i.done != r.done || i.value != r.value)) return !1
                if (((h += i.value.length), i.done || h >= n)) return !0
            }
        }
        iter(e = 1) {
            return new B(this, e)
        }
        iterRange(e, t = this.length) {
            return new j(this, e, t)
        }
        iterLines(e, t) {
            let n
            if (e == null) n = this.iter()
            else {
                t == null && (t = this.lines + 1)
                let i = this.line(e).from
                n = this.iterRange(i, Math.max(i, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to))
            }
            return new _(n)
        }
        toString() {
            return this.sliceString(0)
        }
        toJSON() {
            let e = []
            return this.flatten(e), e
        }
        constructor() {}
        static of(e) {
            if (e.length == 0) throw new RangeError("A document must have at least one line")
            return e.length == 1 && !e[0] ? s.empty : e.length <= 32 ? new y(e) : J.from(y.split(e, []))
        }
    },
    y = class s extends m {
        constructor(e, t = $e(e)) {
            super(), (this.text = e), (this.length = t)
        }
        get lines() {
            return this.text.length
        }
        get children() {
            return null
        }
        lineInner(e, t, n, i) {
            for (let r = 0; ; r++) {
                let l = this.text[r],
                    h = i + l.length
                if ((t ? n : h) >= e) return new ae(i, h, n, l)
                ;(i = h + 1), n++
            }
        }
        decompose(e, t, n, i) {
            let r = e <= 0 && t >= this.length ? this : new s(Pe(this.text, e, t), Math.min(t, this.length) - Math.max(0, e))
            if (i & 1) {
                let l = n.pop(),
                    h = Z(r.text, l.text.slice(), 0, r.length)
                if (h.length <= 32) n.push(new s(h, l.length + r.length))
                else {
                    let o = h.length >> 1
                    n.push(new s(h.slice(0, o)), new s(h.slice(o)))
                }
            } else n.push(r)
        }
        replace(e, t, n) {
            if (!(n instanceof s)) return super.replace(e, t, n)
            ;[e, t] = $(this, e, t)
            let i = Z(this.text, Z(n.text, Pe(this.text, 0, e)), t),
                r = this.length + n.length - (t - e)
            return i.length <= 32 ? new s(i, r) : J.from(s.split(i, []), r)
        }
        sliceString(
            e,
            t = this.length,
            n = `
`
        ) {
            ;[e, t] = $(this, e, t)
            let i = ""
            for (let r = 0, l = 0; r <= t && l < this.text.length; l++) {
                let h = this.text[l],
                    o = r + h.length
                r > e && l && (i += n), e < o && t > r && (i += h.slice(Math.max(0, e - r), t - r)), (r = o + 1)
            }
            return i
        }
        flatten(e) {
            for (let t of this.text) e.push(t)
        }
        scanIdentical() {
            return 0
        }
        static split(e, t) {
            let n = [],
                i = -1
            for (let r of e) n.push(r), (i += r.length + 1), n.length == 32 && (t.push(new s(n, i)), (n = []), (i = -1))
            return i > -1 && t.push(new s(n, i)), t
        }
    },
    J = class s extends m {
        constructor(e, t) {
            super(), (this.children = e), (this.length = t), (this.lines = 0)
            for (let n of e) this.lines += n.lines
        }
        lineInner(e, t, n, i) {
            for (let r = 0; ; r++) {
                let l = this.children[r],
                    h = i + l.length,
                    o = n + l.lines - 1
                if ((t ? o : h) >= e) return l.lineInner(e, t, n, i)
                ;(i = h + 1), (n = o + 1)
            }
        }
        decompose(e, t, n, i) {
            for (let r = 0, l = 0; l <= t && r < this.children.length; r++) {
                let h = this.children[r],
                    o = l + h.length
                if (e <= o && t >= l) {
                    let a = i & ((l <= e ? 1 : 0) | (o >= t ? 2 : 0))
                    l >= e && o <= t && !a ? n.push(h) : h.decompose(e - l, t - l, n, a)
                }
                l = o + 1
            }
        }
        replace(e, t, n) {
            if ((([e, t] = $(this, e, t)), n.lines < this.lines))
                for (let i = 0, r = 0; i < this.children.length; i++) {
                    let l = this.children[i],
                        h = r + l.length
                    if (e >= r && t <= h) {
                        let o = l.replace(e - r, t - r, n),
                            a = this.lines - l.lines + o.lines
                        if (o.lines < a >> 4 && o.lines > a >> 6) {
                            let f = this.children.slice()
                            return (f[i] = o), new s(f, this.length - (t - e) + n.length)
                        }
                        return super.replace(r, h, o)
                    }
                    r = h + 1
                }
            return super.replace(e, t, n)
        }
        sliceString(
            e,
            t = this.length,
            n = `
`
        ) {
            ;[e, t] = $(this, e, t)
            let i = ""
            for (let r = 0, l = 0; r < this.children.length && l <= t; r++) {
                let h = this.children[r],
                    o = l + h.length
                l > e && r && (i += n), e < o && t > l && (i += h.sliceString(e - l, t - l, n)), (l = o + 1)
            }
            return i
        }
        flatten(e) {
            for (let t of this.children) t.flatten(e)
        }
        scanIdentical(e, t) {
            if (!(e instanceof s)) return 0
            let n = 0,
                [i, r, l, h] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1]
            for (; ; i += t, r += t) {
                if (i == l || r == h) return n
                let o = this.children[i],
                    a = e.children[r]
                if (o != a) return n + o.scanIdentical(a, t)
                n += o.length + 1
            }
        }
        static from(e, t = e.reduce((n, i) => n + i.length + 1, -1)) {
            let n = 0
            for (let d of e) n += d.lines
            if (n < 32) {
                let d = []
                for (let g of e) g.flatten(d)
                return new y(d, t)
            }
            let i = Math.max(32, n >> 5),
                r = i << 1,
                l = i >> 1,
                h = [],
                o = 0,
                a = -1,
                f = []
            function u(d) {
                let g
                if (d.lines > r && d instanceof s) for (let P of d.children) u(P)
                else d.lines > l && (o > l || !o) ? (c(), h.push(d)) : d instanceof y && o && (g = f[f.length - 1]) instanceof y && d.lines + g.lines <= 32 ? ((o += d.lines), (a += d.length + 1), (f[f.length - 1] = new y(g.text.concat(d.text), g.length + 1 + d.length))) : (o + d.lines > i && c(), (o += d.lines), (a += d.length + 1), f.push(d))
            }
            function c() {
                o != 0 && (h.push(f.length == 1 ? f[0] : s.from(f, a)), (a = -1), (o = f.length = 0))
            }
            for (let d of e) u(d)
            return c(), h.length == 1 ? h[0] : new s(h, t)
        }
    }
m.empty = new y([""], 0)
function $e(s) {
    let e = -1
    for (let t of s) e += t.length + 1
    return e
}
function Z(s, e, t = 0, n = 1e9) {
    for (let i = 0, r = 0, l = !0; r < s.length && i <= n; r++) {
        let h = s[r],
            o = i + h.length
        o >= t && (o > n && (h = h.slice(0, n - i)), i < t && (h = h.slice(t - i)), l ? ((e[e.length - 1] += h), (l = !1)) : e.push(h)), (i = o + 1)
    }
    return e
}
function Pe(s, e, t) {
    return Z(s, [""], e, t)
}
var B = class {
        constructor(e, t = 1) {
            ;(this.dir = t), (this.done = !1), (this.lineBreak = !1), (this.value = ""), (this.nodes = [e]), (this.offsets = [t > 0 ? 1 : (e instanceof y ? e.text.length : e.children.length) << 1])
        }
        nextInner(e, t) {
            for (this.done = this.lineBreak = !1; ; ) {
                let n = this.nodes.length - 1,
                    i = this.nodes[n],
                    r = this.offsets[n],
                    l = r >> 1,
                    h = i instanceof y ? i.text.length : i.children.length
                if (l == (t > 0 ? h : 0)) {
                    if (n == 0) return (this.done = !0), (this.value = ""), this
                    t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop()
                } else if ((r & 1) == (t > 0 ? 0 : 1)) {
                    if (((this.offsets[n] += t), e == 0))
                        return (
                            (this.lineBreak = !0),
                            (this.value = `
`),
                            this
                        )
                    e--
                } else if (i instanceof y) {
                    let o = i.text[l + (t < 0 ? -1 : 0)]
                    if (((this.offsets[n] += t), o.length > Math.max(0, e))) return (this.value = e == 0 ? o : t > 0 ? o.slice(e) : o.slice(0, o.length - e)), this
                    e -= o.length
                } else {
                    let o = i.children[l + (t < 0 ? -1 : 0)]
                    e > o.length ? ((e -= o.length), (this.offsets[n] += t)) : (t < 0 && this.offsets[n]--, this.nodes.push(o), this.offsets.push(t > 0 ? 1 : (o instanceof y ? o.text.length : o.children.length) << 1))
                }
            }
        }
        next(e = 0) {
            return e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)), this.nextInner(e, this.dir)
        }
    },
    j = class {
        constructor(e, t, n) {
            ;(this.value = ""), (this.done = !1), (this.cursor = new B(e, t > n ? -1 : 1)), (this.pos = t > n ? e.length : 0), (this.from = Math.min(t, n)), (this.to = Math.max(t, n))
        }
        nextInner(e, t) {
            if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return (this.value = ""), (this.done = !0), this
            e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos)
            let n = t < 0 ? this.pos - this.from : this.to - this.pos
            e > n && (e = n), (n -= e)
            let { value: i } = this.cursor.next(e)
            return (this.pos += (i.length + e) * t), (this.value = i.length <= n ? i : t < 0 ? i.slice(i.length - n) : i.slice(0, n)), (this.done = !this.value), this
        }
        next(e = 0) {
            return e < 0 ? (e = Math.max(e, this.from - this.pos)) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir)
        }
        get lineBreak() {
            return this.cursor.lineBreak && this.value != ""
        }
    },
    _ = class {
        constructor(e) {
            ;(this.inner = e), (this.afterBreak = !0), (this.value = ""), (this.done = !1)
        }
        next(e = 0) {
            let { done: t, lineBreak: n, value: i } = this.inner.next(e)
            return t && this.afterBreak ? ((this.value = ""), (this.afterBreak = !1)) : t ? ((this.done = !0), (this.value = "")) : n ? (this.afterBreak ? (this.value = "") : ((this.afterBreak = !0), this.next())) : ((this.value = i), (this.afterBreak = !1)), this
        }
        get lineBreak() {
            return !1
        }
    }
typeof Symbol < "u" &&
    ((m.prototype[Symbol.iterator] = function () {
        return this.iter()
    }),
    (B.prototype[Symbol.iterator] =
        j.prototype[Symbol.iterator] =
        _.prototype[Symbol.iterator] =
            function () {
                return this
            }))
var ae = class {
    constructor(e, t, n, i) {
        ;(this.from = e), (this.to = t), (this.number = n), (this.text = i)
    }
    get length() {
        return this.to - this.from
    }
}
function $(s, e, t) {
    return (e = Math.max(0, Math.min(s.length, e))), [e, Math.max(e, Math.min(s.length, t))]
}
function ee(s, e, t = !0, n = !0) {
    return Ve(s, e, t, n)
}
function qe(s) {
    return s >= 56320 && s < 57344
}
function ze(s) {
    return s >= 55296 && s < 56320
}
function et(s, e) {
    let t = s.charCodeAt(e)
    if (!ze(t) || e + 1 == s.length) return t
    let n = s.charCodeAt(e + 1)
    return qe(n) ? ((t - 55296) << 10) + (n - 56320) + 65536 : t
}
function tt(s) {
    return s <= 65535 ? String.fromCharCode(s) : ((s -= 65536), String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320))
}
function nt(s) {
    return s < 65536 ? 1 : 2
}
var fe = /\r\n?|\n/,
    E = (function (s) {
        return (s[(s.Simple = 0)] = "Simple"), (s[(s.TrackDel = 1)] = "TrackDel"), (s[(s.TrackBefore = 2)] = "TrackBefore"), (s[(s.TrackAfter = 3)] = "TrackAfter"), s
    })(E || (E = {})),
    C = class s {
        constructor(e) {
            this.sections = e
        }
        get length() {
            let e = 0
            for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t]
            return e
        }
        get newLength() {
            let e = 0
            for (let t = 0; t < this.sections.length; t += 2) {
                let n = this.sections[t + 1]
                e += n < 0 ? this.sections[t] : n
            }
            return e
        }
        get empty() {
            return this.sections.length == 0 || (this.sections.length == 2 && this.sections[1] < 0)
        }
        iterGaps(e) {
            for (let t = 0, n = 0, i = 0; t < this.sections.length; ) {
                let r = this.sections[t++],
                    l = this.sections[t++]
                l < 0 ? (e(n, i, r), (i += r)) : (i += l), (n += r)
            }
        }
        iterChangedRanges(e, t = !1) {
            ue(this, e, t)
        }
        get invertedDesc() {
            let e = []
            for (let t = 0; t < this.sections.length; ) {
                let n = this.sections[t++],
                    i = this.sections[t++]
                i < 0 ? e.push(n, i) : e.push(i, n)
            }
            return new s(e)
        }
        composeDesc(e) {
            return this.empty ? e : e.empty ? this : Te(this, e)
        }
        mapDesc(e, t = !1) {
            return e.empty ? this : ce(this, e, t)
        }
        mapPos(e, t = -1, n = E.Simple) {
            let i = 0,
                r = 0
            for (let l = 0; l < this.sections.length; ) {
                let h = this.sections[l++],
                    o = this.sections[l++],
                    a = i + h
                if (o < 0) {
                    if (a > e) return r + (e - i)
                    r += h
                } else {
                    if (n != E.Simple && a >= e && ((n == E.TrackDel && i < e && a > e) || (n == E.TrackBefore && i < e) || (n == E.TrackAfter && a > e))) return null
                    if (a > e || (a == e && t < 0 && !h)) return e == i || t < 0 ? r : r + o
                    r += o
                }
                i = a
            }
            if (e > i) throw new RangeError(`Position ${e} is out of range for changeset of length ${i}`)
            return r
        }
        touchesRange(e, t = e) {
            for (let n = 0, i = 0; n < this.sections.length && i <= t; ) {
                let r = this.sections[n++],
                    l = this.sections[n++],
                    h = i + r
                if (l >= 0 && i <= t && h >= e) return i < e && h > t ? "cover" : !0
                i = h
            }
            return !1
        }
        toString() {
            let e = ""
            for (let t = 0; t < this.sections.length; ) {
                let n = this.sections[t++],
                    i = this.sections[t++]
                e += (e ? " " : "") + n + (i >= 0 ? ":" + i : "")
            }
            return e
        }
        toJSON() {
            return this.sections
        }
        static fromJSON(e) {
            if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc")
            return new s(e)
        }
        static create(e) {
            return new s(e)
        }
    },
    A = class s extends C {
        constructor(e, t) {
            super(e), (this.inserted = t)
        }
        apply(e) {
            if (this.length != e.length) throw new RangeError("Applying change set to a document with the wrong length")
            return ue(this, (t, n, i, r, l) => (e = e.replace(i, i + (n - t), l)), !1), e
        }
        mapDesc(e, t = !1) {
            return ce(this, e, t, !0)
        }
        invert(e) {
            let t = this.sections.slice(),
                n = []
            for (let i = 0, r = 0; i < t.length; i += 2) {
                let l = t[i],
                    h = t[i + 1]
                if (h >= 0) {
                    ;(t[i] = h), (t[i + 1] = l)
                    let o = i >> 1
                    for (; n.length < o; ) n.push(m.empty)
                    n.push(l ? e.slice(r, r + l) : m.empty)
                }
                r += l
            }
            return new s(t, n)
        }
        compose(e) {
            return this.empty ? e : e.empty ? this : Te(this, e, !0)
        }
        map(e, t = !1) {
            return e.empty ? this : ce(this, e, t, !0)
        }
        iterChanges(e, t = !1) {
            ue(this, e, t)
        }
        get desc() {
            return C.create(this.sections)
        }
        filter(e) {
            let t = [],
                n = [],
                i = [],
                r = new F(this)
            e: for (let l = 0, h = 0; ; ) {
                let o = l == e.length ? 1e9 : e[l++]
                for (; h < o || (h == o && r.len == 0); ) {
                    if (r.done) break e
                    let f = Math.min(r.len, o - h)
                    w(i, f, -1)
                    let u = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0
                    w(t, f, u), u > 0 && O(n, t, r.text), r.forward(f), (h += f)
                }
                let a = e[l++]
                for (; h < a; ) {
                    if (r.done) break e
                    let f = Math.min(r.len, a - h)
                    w(t, f, -1), w(i, f, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(f), (h += f)
                }
            }
            return { changes: new s(t, n), filtered: C.create(i) }
        }
        toJSON() {
            let e = []
            for (let t = 0; t < this.sections.length; t += 2) {
                let n = this.sections[t],
                    i = this.sections[t + 1]
                i < 0 ? e.push(n) : i == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()))
            }
            return e
        }
        static of(e, t, n) {
            let i = [],
                r = [],
                l = 0,
                h = null
            function o(f = !1) {
                if (!f && !i.length) return
                l < t && w(i, t - l, -1)
                let u = new s(i, r)
                ;(h = h ? h.compose(u.map(h)) : u), (i = []), (r = []), (l = 0)
            }
            function a(f) {
                if (Array.isArray(f)) for (let u of f) a(u)
                else if (f instanceof s) {
                    if (f.length != t) throw new RangeError(`Mismatched change set length (got ${f.length}, expected ${t})`)
                    o(), (h = h ? h.compose(f.map(h)) : f)
                } else {
                    let { from: u, to: c = u, insert: d } = f
                    if (u > c || u < 0 || c > t) throw new RangeError(`Invalid change range ${u} to ${c} (in doc of length ${t})`)
                    let g = d ? (typeof d == "string" ? m.of(d.split(n || fe)) : d) : m.empty,
                        P = g.length
                    if (u == c && P == 0) return
                    u < l && o(), u > l && w(i, u - l, -1), w(i, c - u, P), O(r, i, g), (l = c)
                }
            }
            return a(e), o(!h), h
        }
        static empty(e) {
            return new s(e ? [e, -1] : [], [])
        }
        static fromJSON(e) {
            if (!Array.isArray(e)) throw new RangeError("Invalid JSON representation of ChangeSet")
            let t = [],
                n = []
            for (let i = 0; i < e.length; i++) {
                let r = e[i]
                if (typeof r == "number") t.push(r, -1)
                else {
                    if (!Array.isArray(r) || typeof r[0] != "number" || r.some((l, h) => h && typeof l != "string")) throw new RangeError("Invalid JSON representation of ChangeSet")
                    if (r.length == 1) t.push(r[0], 0)
                    else {
                        for (; n.length < i; ) n.push(m.empty)
                        ;(n[i] = m.of(r.slice(1))), t.push(r[0], n[i].length)
                    }
                }
            }
            return new s(t, n)
        }
        static createSet(e, t) {
            return new s(e, t)
        }
    }
function w(s, e, t, n = !1) {
    if (e == 0 && t <= 0) return
    let i = s.length - 2
    i >= 0 && t <= 0 && t == s[i + 1] ? (s[i] += e) : i >= 0 && e == 0 && s[i] == 0 ? (s[i + 1] += t) : n ? ((s[i] += e), (s[i + 1] += t)) : s.push(e, t)
}
function O(s, e, t) {
    if (t.length == 0) return
    let n = (e.length - 2) >> 1
    if (n < s.length) s[s.length - 1] = s[s.length - 1].append(t)
    else {
        for (; s.length < n; ) s.push(m.empty)
        s.push(t)
    }
}
function ue(s, e, t) {
    let n = s.inserted
    for (let i = 0, r = 0, l = 0; l < s.sections.length; ) {
        let h = s.sections[l++],
            o = s.sections[l++]
        if (o < 0) (i += h), (r += h)
        else {
            let a = i,
                f = r,
                u = m.empty
            for (; (a += h), (f += o), o && n && (u = u.append(n[(l - 2) >> 1])), !(t || l == s.sections.length || s.sections[l + 1] < 0); ) (h = s.sections[l++]), (o = s.sections[l++])
            e(i, a, r, f, u), (i = a), (r = f)
        }
    }
}
function ce(s, e, t, n = !1) {
    let i = [],
        r = n ? [] : null,
        l = new F(s),
        h = new F(e)
    for (let o = -1; ; ) {
        if ((l.done && h.len) || (h.done && l.len)) throw new Error("Mismatched change set lengths")
        if (l.ins == -1 && h.ins == -1) {
            let a = Math.min(l.len, h.len)
            w(i, a, -1), l.forward(a), h.forward(a)
        } else if (h.ins >= 0 && (l.ins < 0 || o == l.i || (l.off == 0 && (h.len < l.len || (h.len == l.len && !t))))) {
            let a = h.len
            for (w(i, h.ins, -1); a; ) {
                let f = Math.min(l.len, a)
                l.ins >= 0 && o < l.i && l.len <= f && (w(i, 0, l.ins), r && O(r, i, l.text), (o = l.i)), l.forward(f), (a -= f)
            }
            h.next()
        } else if (l.ins >= 0) {
            let a = 0,
                f = l.len
            for (; f; )
                if (h.ins == -1) {
                    let u = Math.min(f, h.len)
                    ;(a += u), (f -= u), h.forward(u)
                } else if (h.ins == 0 && h.len < f) (f -= h.len), h.next()
                else break
            w(i, a, o < l.i ? l.ins : 0), r && o < l.i && O(r, i, l.text), (o = l.i), l.forward(l.len - f)
        } else {
            if (l.done && h.done) return r ? A.createSet(i, r) : C.create(i)
            throw new Error("Mismatched change set lengths")
        }
    }
}
function Te(s, e, t = !1) {
    let n = [],
        i = t ? [] : null,
        r = new F(s),
        l = new F(e)
    for (let h = !1; ; ) {
        if (r.done && l.done) return i ? A.createSet(n, i) : C.create(n)
        if (r.ins == 0) w(n, r.len, 0, h), r.next()
        else if (l.len == 0 && !l.done) w(n, 0, l.ins, h), i && O(i, n, l.text), l.next()
        else {
            if (r.done || l.done) throw new Error("Mismatched change set lengths")
            {
                let o = Math.min(r.len2, l.len),
                    a = n.length
                if (r.ins == -1) {
                    let f = l.ins == -1 ? -1 : l.off ? 0 : l.ins
                    w(n, o, f, h), i && f && O(i, n, l.text)
                } else l.ins == -1 ? (w(n, r.off ? 0 : r.len, o, h), i && O(i, n, r.textBit(o))) : (w(n, r.off ? 0 : r.len, l.off ? 0 : l.ins, h), i && !l.off && O(i, n, l.text))
                ;(h = (r.ins > o || (l.ins >= 0 && l.len > o)) && (h || n.length > a)), r.forward2(o), l.forward(o)
            }
        }
    }
}
var F = class {
        constructor(e) {
            ;(this.set = e), (this.i = 0), this.next()
        }
        next() {
            let { sections: e } = this.set
            this.i < e.length ? ((this.len = e[this.i++]), (this.ins = e[this.i++])) : ((this.len = 0), (this.ins = -2)), (this.off = 0)
        }
        get done() {
            return this.ins == -2
        }
        get len2() {
            return this.ins < 0 ? this.len : this.ins
        }
        get text() {
            let { inserted: e } = this.set,
                t = (this.i - 2) >> 1
            return t >= e.length ? m.empty : e[t]
        }
        textBit(e) {
            let { inserted: t } = this.set,
                n = (this.i - 2) >> 1
            return n >= t.length && !e ? m.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e)
        }
        forward(e) {
            e == this.len ? this.next() : ((this.len -= e), (this.off += e))
        }
        forward2(e) {
            this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : ((this.ins -= e), (this.off += e))
        }
    },
    N = class s {
        constructor(e, t, n) {
            ;(this.from = e), (this.to = t), (this.flags = n)
        }
        get anchor() {
            return this.flags & 32 ? this.to : this.from
        }
        get head() {
            return this.flags & 32 ? this.from : this.to
        }
        get empty() {
            return this.from == this.to
        }
        get assoc() {
            return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0
        }
        get bidiLevel() {
            let e = this.flags & 7
            return e == 7 ? null : e
        }
        get goalColumn() {
            let e = this.flags >> 6
            return e == 16777215 ? void 0 : e
        }
        map(e, t = -1) {
            let n, i
            return this.empty ? (n = i = e.mapPos(this.from, t)) : ((n = e.mapPos(this.from, 1)), (i = e.mapPos(this.to, -1))), n == this.from && i == this.to ? this : new s(n, i, this.flags)
        }
        extend(e, t = e) {
            if (e <= this.anchor && t >= this.anchor) return x.range(e, t)
            let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t
            return x.range(this.anchor, n)
        }
        eq(e, t = !1) {
            return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc)
        }
        toJSON() {
            return { anchor: this.anchor, head: this.head }
        }
        static fromJSON(e) {
            if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange")
            return x.range(e.anchor, e.head)
        }
        static create(e, t, n) {
            return new s(e, t, n)
        }
    },
    x = class s {
        constructor(e, t) {
            ;(this.ranges = e), (this.mainIndex = t)
        }
        map(e, t = -1) {
            return e.empty
                ? this
                : s.create(
                      this.ranges.map((n) => n.map(e, t)),
                      this.mainIndex
                  )
        }
        eq(e, t = !1) {
            if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1
            for (let n = 0; n < this.ranges.length; n++) if (!this.ranges[n].eq(e.ranges[n], t)) return !1
            return !0
        }
        get main() {
            return this.ranges[this.mainIndex]
        }
        asSingle() {
            return this.ranges.length == 1 ? this : new s([this.main], 0)
        }
        addRange(e, t = !0) {
            return s.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1)
        }
        replaceRange(e, t = this.mainIndex) {
            let n = this.ranges.slice()
            return (n[t] = e), s.create(n, this.mainIndex)
        }
        toJSON() {
            return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex }
        }
        static fromJSON(e) {
            if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection")
            return new s(
                e.ranges.map((t) => N.fromJSON(t)),
                e.main
            )
        }
        static single(e, t = e) {
            return new s([s.range(e, t)], 0)
        }
        static create(e, t = 0) {
            if (e.length == 0) throw new RangeError("A selection needs at least one range")
            for (let n = 0, i = 0; i < e.length; i++) {
                let r = e[i]
                if (r.empty ? r.from <= n : r.from < n) return s.normalized(e.slice(), t)
                n = r.to
            }
            return new s(e, t)
        }
        static cursor(e, t = 0, n, i) {
            return N.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | ((i ?? 16777215) << 6))
        }
        static range(e, t, n, i) {
            let r = ((n ?? 16777215) << 6) | (i == null ? 7 : Math.min(6, i))
            return t < e ? N.create(t, e, 48 | r) : N.create(e, t, (t > e ? 8 : 0) | r)
        }
        static normalized(e, t = 0) {
            let n = e[t]
            e.sort((i, r) => i.from - r.from), (t = e.indexOf(n))
            for (let i = 1; i < e.length; i++) {
                let r = e[i],
                    l = e[i - 1]
                if (r.empty ? r.from <= l.to : r.from < l.to) {
                    let h = l.from,
                        o = Math.max(r.to, l.to)
                    i <= t && t--, e.splice(--i, 2, r.anchor > r.head ? s.range(o, h) : s.range(h, o))
                }
            }
            return new s(e, t)
        }
    }
function be(s, e) {
    for (let t of s.ranges) if (t.to > e) throw new RangeError("Selection points outside of document")
}
var Se = 0,
    k = class s {
        constructor(e, t, n, i, r) {
            ;(this.combine = e), (this.compareInput = t), (this.compare = n), (this.isStatic = i), (this.id = Se++), (this.default = e([])), (this.extensions = typeof r == "function" ? r(this) : r)
        }
        get reader() {
            return this
        }
        static define(e = {}) {
            return new s(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : Ie), !!e.static, e.enables)
        }
        of(e) {
            return new D([], this, 0, e)
        }
        compute(e, t) {
            if (this.isStatic) throw new Error("Can't compute a static facet")
            return new D(e, this, 1, t)
        }
        computeN(e, t) {
            if (this.isStatic) throw new Error("Can't compute a static facet")
            return new D(e, this, 2, t)
        }
        from(e, t) {
            return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)))
        }
    }
function Ie(s, e) {
    return s == e || (s.length == e.length && s.every((t, n) => t === e[n]))
}
var D = class {
    constructor(e, t, n, i) {
        ;(this.dependencies = e), (this.facet = t), (this.type = n), (this.value = i), (this.id = Se++)
    }
    dynamicSlot(e) {
        var t
        let n = this.value,
            i = this.facet.compareInput,
            r = this.id,
            l = e[r] >> 1,
            h = this.type == 2,
            o = !1,
            a = !1,
            f = []
        for (let u of this.dependencies) u == "doc" ? (o = !0) : u == "selection" ? (a = !0) : (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && f.push(e[u.id])
        return {
            create(u) {
                return (u.values[l] = n(u)), 1
            },
            update(u, c) {
                if ((o && c.docChanged) || (a && (c.docChanged || c.selection)) || de(u, f)) {
                    let d = n(u)
                    if (h ? !Ae(d, u.values[l], i) : !i(d, u.values[l])) return (u.values[l] = d), 1
                }
                return 0
            },
            reconfigure: (u, c) => {
                let d,
                    g = c.config.address[r]
                if (g != null) {
                    let P = se(c, g)
                    if (this.dependencies.every((p) => (p instanceof k ? c.facet(p) === u.facet(p) : p instanceof q ? c.field(p, !1) == u.field(p, !1) : !0)) || (h ? Ae((d = n(u)), P, i) : i((d = n(u)), P))) return (u.values[l] = P), 0
                } else d = n(u)
                return (u.values[l] = d), 1
            },
        }
    }
}
function Ae(s, e, t) {
    if (s.length != e.length) return !1
    for (let n = 0; n < s.length; n++) if (!t(s[n], e[n])) return !1
    return !0
}
function de(s, e) {
    let t = !1
    for (let n of e) U(s, n) & 1 && (t = !0)
    return t
}
function We(s, e, t) {
    let n = t.map((o) => s[o.id]),
        i = t.map((o) => o.type),
        r = n.filter((o) => !(o & 1)),
        l = s[e.id] >> 1
    function h(o) {
        let a = []
        for (let f = 0; f < n.length; f++) {
            let u = se(o, n[f])
            if (i[f] == 2) for (let c of u) a.push(c)
            else a.push(u)
        }
        return e.combine(a)
    }
    return {
        create(o) {
            for (let a of n) U(o, a)
            return (o.values[l] = h(o)), 1
        },
        update(o, a) {
            if (!de(o, r)) return 0
            let f = h(o)
            return e.compare(f, o.values[l]) ? 0 : ((o.values[l] = f), 1)
        },
        reconfigure(o, a) {
            let f = de(o, n),
                u = a.config.facets[e.id],
                c = a.facet(e)
            if (u && !f && Ie(t, u)) return (o.values[l] = c), 0
            let d = h(o)
            return e.compare(d, c) ? ((o.values[l] = c), 0) : ((o.values[l] = d), 1)
        },
    }
}
var Q = k.define({ static: !0 }),
    q = class s {
        constructor(e, t, n, i, r) {
            ;(this.id = e), (this.createF = t), (this.updateF = n), (this.compareF = i), (this.spec = r), (this.provides = void 0)
        }
        static define(e) {
            let t = new s(Se++, e.create, e.update, e.compare || ((n, i) => n === i), e)
            return e.provide && (t.provides = e.provide(t)), t
        }
        create(e) {
            let t = e.facet(Q).find((n) => n.field == this)
            return (t?.create || this.createF)(e)
        }
        slot(e) {
            let t = e[this.id] >> 1
            return {
                create: (n) => ((n.values[t] = this.create(n)), 1),
                update: (n, i) => {
                    let r = n.values[t],
                        l = this.updateF(r, i)
                    return this.compareF(r, l) ? 0 : ((n.values[t] = l), 1)
                },
                reconfigure: (n, i) => {
                    let r = n.facet(Q),
                        l = i.facet(Q),
                        h
                    return (h = r.find((o) => o.field == this)) && h != l.find((o) => o.field == this) ? ((n.values[t] = h.create(n)), 1) : i.config.address[this.id] != null ? ((n.values[t] = i.field(this)), 0) : ((n.values[t] = this.create(n)), 1)
                },
            }
        }
        init(e) {
            return [this, Q.of({ field: this, create: e })]
        }
        get extension() {
            return this
        }
    },
    b = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 }
function W(s) {
    return (e) => new te(e, s)
}
var it = { highest: W(b.highest), high: W(b.high), default: W(b.default), low: W(b.low), lowest: W(b.lowest) },
    te = class {
        constructor(e, t) {
            ;(this.inner = e), (this.prec = t)
        }
    },
    ne = class s {
        of(e) {
            return new G(this, e)
        }
        reconfigure(e) {
            return s.reconfigure.of({ compartment: this, extension: e })
        }
        get(e) {
            return e.config.compartments.get(this)
        }
    },
    G = class {
        constructor(e, t) {
            ;(this.compartment = e), (this.inner = t)
        }
    },
    ie = class s {
        constructor(e, t, n, i, r, l) {
            for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = i, this.staticValues = r, this.facets = l, this.statusTemplate = []; this.statusTemplate.length < n.length; ) this.statusTemplate.push(0)
        }
        staticFacet(e) {
            let t = this.address[e.id]
            return t == null ? e.default : this.staticValues[t >> 1]
        }
        static resolve(e, t, n) {
            let i = [],
                r = Object.create(null),
                l = new Map()
            for (let c of Ue(e, t, l)) c instanceof q ? i.push(c) : (r[c.facet.id] || (r[c.facet.id] = [])).push(c)
            let h = Object.create(null),
                o = [],
                a = []
            for (let c of i) (h[c.id] = a.length << 1), a.push((d) => c.slot(d))
            let f = n?.config.facets
            for (let c in r) {
                let d = r[c],
                    g = d[0].facet,
                    P = (f && f[c]) || []
                if (d.every((p) => p.type == 0))
                    if (((h[g.id] = (o.length << 1) | 1), Ie(P, d))) o.push(n.facet(g))
                    else {
                        let p = g.combine(d.map((he) => he.value))
                        o.push(n && g.compare(p, n.facet(g)) ? n.facet(g) : p)
                    }
                else {
                    for (let p of d) p.type == 0 ? ((h[p.id] = (o.length << 1) | 1), o.push(p.value)) : ((h[p.id] = a.length << 1), a.push((he) => p.dynamicSlot(he)))
                    ;(h[g.id] = a.length << 1), a.push((p) => We(p, g, d))
                }
            }
            let u = a.map((c) => c(h))
            return new s(e, l, u, h, o, r)
        }
    }
function Ue(s, e, t) {
    let n = [[], [], [], [], []],
        i = new Map()
    function r(l, h) {
        let o = i.get(l)
        if (o != null) {
            if (o <= h) return
            let a = n[o].indexOf(l)
            a > -1 && n[o].splice(a, 1), l instanceof G && t.delete(l.compartment)
        }
        if ((i.set(l, h), Array.isArray(l))) for (let a of l) r(a, h)
        else if (l instanceof G) {
            if (t.has(l.compartment)) throw new RangeError("Duplicate use of compartment in extensions")
            let a = e.get(l.compartment) || l.inner
            t.set(l.compartment, a), r(a, h)
        } else if (l instanceof te) r(l.inner, l.prec)
        else if (l instanceof q) n[h].push(l), l.provides && r(l.provides, h)
        else if (l instanceof D) n[h].push(l), l.facet.extensions && r(l.facet.extensions, b.default)
        else {
            let a = l.extension
            if (!a) {
                console.debug(`a is:`,a)
                console.debug(`a.constructor.name is:`,a.constructor.name)
                throw new Error(`Unrecognized extension value in extension set (${l}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`)
            }
            r(a, h)
        }
    }
    return r(s, b.default), n.reduce((l, h) => l.concat(h))
}
function U(s, e) {
    if (e & 1) return 2
    let t = e >> 1,
        n = s.status[t]
    if (n == 4) throw new Error("Cyclic dependency between fields and/or facets")
    if (n & 2) return n
    s.status[t] = 4
    let i = s.computeSlot(s, s.config.dynamicSlots[t])
    return (s.status[t] = 2 | i)
}
function se(s, e) {
    return e & 1 ? s.config.staticValues[e >> 1] : s.values[e >> 1]
}
var Re = k.define(),
    ge = k.define({ combine: (s) => s.some((e) => e), static: !0 }),
    Be = k.define({ combine: (s) => (s.length ? s[0] : void 0), static: !0 }),
    Ce = k.define(),
    Fe = k.define(),
    Le = k.define(),
    Ne = k.define({ combine: (s) => (s.length ? s[0] : !1) }),
    L = class {
        constructor(e, t) {
            ;(this.type = e), (this.value = t)
        }
        static define() {
            return new pe()
        }
    },
    pe = class {
        of(e) {
            return new L(this, e)
        }
    },
    me = class {
        constructor(e) {
            this.map = e
        }
        of(e) {
            return new v(this, e)
        }
    },
    v = class s {
        constructor(e, t) {
            ;(this.type = e), (this.value = t)
        }
        map(e) {
            let t = this.type.map(this.value, e)
            return t === void 0 ? void 0 : t == this.value ? this : new s(this.type, t)
        }
        is(e) {
            return this.type == e
        }
        static define(e = {}) {
            return new me(e.map || ((t) => t))
        }
        static mapEffects(e, t) {
            if (!e.length) return e
            let n = []
            for (let i of e) {
                let r = i.map(t)
                r && n.push(r)
            }
            return n
        }
    }
v.reconfigure = v.define()
v.appendConfig = v.define()
var S = class s {
    constructor(e, t, n, i, r, l) {
        ;(this.startState = e), (this.changes = t), (this.selection = n), (this.effects = i), (this.annotations = r), (this.scrollIntoView = l), (this._doc = null), (this._state = null), n && be(n, t.newLength), r.some((h) => h.type == s.time) || (this.annotations = r.concat(s.time.of(Date.now())))
    }
    static create(e, t, n, i, r, l) {
        return new s(e, t, n, i, r, l)
    }
    get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc))
    }
    get newSelection() {
        return this.selection || this.startState.selection.map(this.changes)
    }
    get state() {
        return this._state || this.startState.applyTransaction(this), this._state
    }
    annotation(e) {
        for (let t of this.annotations) if (t.type == e) return t.value
    }
    get docChanged() {
        return !this.changes.empty
    }
    get reconfigured() {
        return this.startState.config != this.state.config
    }
    isUserEvent(e) {
        let t = this.annotation(s.userEvent)
        return !!(t && (t == e || (t.length > e.length && t.slice(0, e.length) == e && t[e.length] == ".")))
    }
}
S.time = L.define()
S.userEvent = L.define()
S.addToHistory = L.define()
S.remote = L.define()
function Ge(s, e) {
    let t = []
    for (let n = 0, i = 0; ; ) {
        let r, l
        if (n < s.length && (i == e.length || e[i] >= s[n])) (r = s[n++]), (l = s[n++])
        else if (i < e.length) (r = e[i++]), (l = e[i++])
        else return t
        !t.length || t[t.length - 1] < r ? t.push(r, l) : t[t.length - 1] < l && (t[t.length - 1] = l)
    }
}
function Je(s, e, t) {
    var n
    let i, r, l
    return t ? ((i = e.changes), (r = A.empty(e.changes.length)), (l = s.changes.compose(e.changes))) : ((i = e.changes.map(s.changes)), (r = s.changes.mapDesc(e.changes, !0)), (l = s.changes.compose(i))), { changes: l, selection: e.selection ? e.selection.map(r) : (n = s.selection) === null || n === void 0 ? void 0 : n.map(i), effects: v.mapEffects(s.effects, i).concat(v.mapEffects(e.effects, r)), annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations, scrollIntoView: s.scrollIntoView || e.scrollIntoView }
}
function we(s, e, t) {
    let n = e.selection,
        i = V(e.annotations)
    return e.userEvent && (i = i.concat(S.userEvent.of(e.userEvent))), { changes: e.changes instanceof A ? e.changes : A.of(e.changes || [], t, s.facet(Be)), selection: n && (n instanceof x ? n : x.single(n.anchor, n.head)), effects: V(e.effects), annotations: i, scrollIntoView: !!e.scrollIntoView }
}
function De(s, e, t) {
    let n = we(s, e.length ? e[0] : {}, s.doc.length)
    e.length && e[0].filter === !1 && (t = !1)
    for (let r = 1; r < e.length; r++) {
        e[r].filter === !1 && (t = !1)
        let l = !!e[r].sequential
        n = Je(n, we(s, e[r], l ? n.changes.newLength : s.doc.length), l)
    }
    let i = S.create(s, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView)
    return Ke(t ? He(i) : i)
}
function He(s) {
    let e = s.startState,
        t = !0
    for (let i of e.facet(Ce)) {
        let r = i(s)
        if (r === !1) {
            t = !1
            break
        }
        Array.isArray(r) && (t = t === !0 ? r : Ge(t, r))
    }
    if (t !== !0) {
        let i, r
        if (t === !1) (r = s.changes.invertedDesc), (i = A.empty(e.doc.length))
        else {
            let l = s.changes.filter(t)
            ;(i = l.changes), (r = l.filtered.mapDesc(l.changes).invertedDesc)
        }
        s = S.create(e, i, s.selection && s.selection.map(r), v.mapEffects(s.effects, r), s.annotations, s.scrollIntoView)
    }
    let n = e.facet(Fe)
    for (let i = n.length - 1; i >= 0; i--) {
        let r = n[i](s)
        r instanceof S ? (s = r) : Array.isArray(r) && r.length == 1 && r[0] instanceof S ? (s = r[0]) : (s = De(e, V(r), !1))
    }
    return s
}
function Ke(s) {
    let e = s.startState,
        t = e.facet(Le),
        n = s
    for (let i = t.length - 1; i >= 0; i--) {
        let r = t[i](s)
        r && Object.keys(r).length && (n = Je(n, we(e, r, s.changes.newLength), !0))
    }
    return n == s ? s : S.create(e, s.changes, s.selection, n.effects, n.annotations, n.scrollIntoView)
}
var Qe = []
function V(s) {
    return s == null ? Qe : Array.isArray(s) ? s : [s]
}
var M = (function (s) {
        return (s[(s.Word = 0)] = "Word"), (s[(s.Space = 1)] = "Space"), (s[(s.Other = 2)] = "Other"), s
    })(M || (M = {})),
    Xe = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
    ve
try {
    ve = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
} catch {}
function Ye(s) {
    if (ve) return ve.test(s)
    for (let e = 0; e < s.length; e++) {
        let t = s[e]
        if (/\w/.test(t) || (t > "\x80" && (t.toUpperCase() != t.toLowerCase() || Xe.test(t)))) return !0
    }
    return !1
}
function Ze(s) {
    return (e) => {
        if (!/\S/.test(e)) return M.Space
        if (Ye(e)) return M.Word
        for (let t = 0; t < s.length; t++) if (e.indexOf(s[t]) > -1) return M.Word
        return M.Other
    }
}
var I = class s {
    constructor(e, t, n, i, r, l) {
        ;(this.config = e), (this.doc = t), (this.selection = n), (this.values = i), (this.status = e.statusTemplate.slice()), (this.computeSlot = r), l && (l._state = this)
        for (let h = 0; h < this.config.dynamicSlots.length; h++) U(this, h << 1)
        this.computeSlot = null
    }
    field(e, t = !0) {
        let n = this.config.address[e.id]
        if (n == null) {
            if (t) throw new RangeError("Field is not present in this state")
            return
        }
        return U(this, n), se(this, n)
    }
    update(...e) {
        return De(this, e, !0)
    }
    applyTransaction(e) {
        let t = this.config,
            { base: n, compartments: i } = t
        for (let h of e.effects) h.is(ne.reconfigure) ? (t && ((i = new Map()), t.compartments.forEach((o, a) => i.set(a, o)), (t = null)), i.set(h.value.compartment, h.value.extension)) : h.is(v.reconfigure) ? ((t = null), (n = h.value)) : h.is(v.appendConfig) && ((t = null), (n = V(n).concat(h.value)))
        let r
        t
            ? (r = e.startState.values.slice())
            : ((t = ie.resolve(n, i, this)),
              (r = new s(
                  t,
                  this.doc,
                  this.selection,
                  t.dynamicSlots.map(() => null),
                  (o, a) => a.reconfigure(o, this),
                  null
              ).values))
        let l = e.startState.facet(ge) ? e.newSelection : e.newSelection.asSingle()
        new s(t, e.newDoc, l, r, (h, o) => o.update(h, e), e)
    }
    replaceSelection(e) {
        return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({ changes: { from: t.from, to: t.to, insert: e }, range: x.cursor(t.from + e.length) }))
    }
    changeByRange(e) {
        let t = this.selection,
            n = e(t.ranges[0]),
            i = this.changes(n.changes),
            r = [n.range],
            l = V(n.effects)
        for (let h = 1; h < t.ranges.length; h++) {
            let o = e(t.ranges[h]),
                a = this.changes(o.changes),
                f = a.map(i)
            for (let c = 0; c < h; c++) r[c] = r[c].map(f)
            let u = i.mapDesc(a, !0)
            r.push(o.range.map(u)), (i = i.compose(f)), (l = v.mapEffects(l, f).concat(v.mapEffects(V(o.effects), u)))
        }
        return { changes: i, selection: x.create(r, t.mainIndex), effects: l }
    }
    changes(e = []) {
        return e instanceof A ? e : A.of(e, this.doc.length, this.facet(s.lineSeparator))
    }
    toText(e) {
        return m.of(e.split(this.facet(s.lineSeparator) || fe))
    }
    sliceDoc(e = 0, t = this.doc.length) {
        return this.doc.sliceString(e, t, this.lineBreak)
    }
    facet(e) {
        let t = this.config.address[e.id]
        return t == null ? e.default : (U(this, t), se(this, t))
    }
    toJSON(e) {
        let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() }
        if (e)
            for (let n in e) {
                let i = e[n]
                i instanceof q && this.config.address[i.id] != null && (t[n] = i.spec.toJSON(this.field(e[n]), this))
            }
        return t
    }
    static fromJSON(e, t = {}, n) {
        if (!e || typeof e.doc != "string") throw new RangeError("Invalid JSON representation for EditorState")
        let i = []
        if (n) {
            for (let r in n)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    let l = n[r],
                        h = e[r]
                    i.push(l.init((o) => l.spec.fromJSON(h, o)))
                }
        }
        return s.create({ doc: e.doc, selection: x.fromJSON(e.selection), extensions: t.extensions ? i.concat([t.extensions]) : i })
    }
    static create(e = {}) {
        let t = ie.resolve(e.extensions || [], new Map()),
            n = e.doc instanceof m ? e.doc : m.of((e.doc || "").split(t.staticFacet(s.lineSeparator) || fe)),
            i = e.selection ? (e.selection instanceof x ? e.selection : x.single(e.selection.anchor, e.selection.head)) : x.single(0)
        return (
            be(i, n.length),
            t.staticFacet(ge) || (i = i.asSingle()),
            new s(
                t,
                n,
                i,
                t.dynamicSlots.map(() => null),
                (r, l) => l.create(r),
                null
            )
        )
    }
    get tabSize() {
        return this.facet(s.tabSize)
    }
    get lineBreak() {
        return (
            this.facet(s.lineSeparator) ||
            `
`
        )
    }
    get readOnly() {
        return this.facet(Ne)
    }
    phrase(e, ...t) {
        for (let n of this.facet(s.phrases))
            if (Object.prototype.hasOwnProperty.call(n, e)) {
                e = n[e]
                break
            }
        return (
            t.length &&
                (e = e.replace(/\$(\$|\d*)/g, (n, i) => {
                    if (i == "$") return "$"
                    let r = +(i || 1)
                    return !r || r > t.length ? n : t[r - 1]
                })),
            e
        )
    }
    languageDataAt(e, t, n = -1) {
        let i = []
        for (let r of this.facet(Re)) for (let l of r(this, t, n)) Object.prototype.hasOwnProperty.call(l, e) && i.push(l[e])
        return i
    }
    charCategorizer(e) {
        return Ze(this.languageDataAt("wordChars", e).join(""))
    }
    wordAt(e) {
        let { text: t, from: n, length: i } = this.doc.lineAt(e),
            r = this.charCategorizer(e),
            l = e - n,
            h = e - n
        for (; l > 0; ) {
            let o = ee(t, l, !1)
            if (r(t.slice(o, l)) != M.Word) break
            l = o
        }
        for (; h < i; ) {
            let o = ee(t, h)
            if (r(t.slice(h, o)) != M.Word) break
            h = o
        }
        return l == h ? null : x.range(l + n, h + n)
    }
}
I.allowMultipleSelections = ge
I.tabSize = k.define({ combine: (s) => (s.length ? s[0] : 4) })
I.lineSeparator = Be
I.readOnly = Ne
I.phrases = k.define({
    compare(s, e) {
        let t = Object.keys(s),
            n = Object.keys(e)
        return t.length == n.length && t.every((i) => s[i] == e[i])
    },
})
I.languageData = Re
I.changeFilter = Ce
I.transactionFilter = Fe
I.transactionExtender = Le
ne.reconfigure = v.define()
function st(s, e, t = {}) {
    let n = {}
    for (let i of s)
        for (let r of Object.keys(i)) {
            let l = i[r],
                h = n[r]
            if (h === void 0) n[r] = l
            else if (!(h === l || l === void 0))
                if (Object.hasOwnProperty.call(t, r)) n[r] = t[r](h, l)
                else throw new Error("Config merge conflict for field " + r)
        }
    for (let i in e) n[i] === void 0 && (n[i] = e[i])
    return n
}
var z = class {
    eq(e) {
        return this == e
    }
    range(e, t = e) {
        return H.create(e, t, this)
    }
}
z.prototype.startSide = z.prototype.endSide = 0
z.prototype.point = !1
z.prototype.mapMode = E.TrackDel
var H = class s {
    constructor(e, t, n) {
        ;(this.from = e), (this.to = t), (this.value = n)
    }
    static create(e, t, n) {
        return new s(e, t, n)
    }
}
function xe(s, e) {
    return s.from - e.from || s.value.startSide - e.value.startSide
}
var ye = class s {
        constructor(e, t, n, i) {
            ;(this.from = e), (this.to = t), (this.value = n), (this.maxPoint = i)
        }
        get length() {
            return this.to[this.to.length - 1]
        }
        findIndex(e, t, n, i = 0) {
            let r = n ? this.to : this.from
            for (let l = i, h = r.length; ; ) {
                if (l == h) return l
                let o = (l + h) >> 1,
                    a = r[o] - e || (n ? this.value[o].endSide : this.value[o].startSide) - t
                if (o == l) return a >= 0 ? l : h
                a >= 0 ? (h = o) : (l = o + 1)
            }
        }
        between(e, t, n, i) {
            for (let r = this.findIndex(t, -1e9, !0), l = this.findIndex(n, 1e9, !1, r); r < l; r++) if (i(this.from[r] + e, this.to[r] + e, this.value[r]) === !1) return !1
        }
        map(e, t) {
            let n = [],
                i = [],
                r = [],
                l = -1,
                h = -1
            for (let o = 0; o < this.value.length; o++) {
                let a = this.value[o],
                    f = this.from[o] + e,
                    u = this.to[o] + e,
                    c,
                    d
                if (f == u) {
                    let g = t.mapPos(f, a.startSide, a.mapMode)
                    if (g == null || ((c = d = g), a.startSide != a.endSide && ((d = t.mapPos(f, a.endSide)), d < c))) continue
                } else if (((c = t.mapPos(f, a.startSide)), (d = t.mapPos(u, a.endSide)), c > d || (c == d && a.startSide > 0 && a.endSide <= 0))) continue
                ;(d - c || a.endSide - a.startSide) < 0 || (l < 0 && (l = c), a.point && (h = Math.max(h, d - c)), n.push(a), i.push(c - l), r.push(d - l))
            }
            return { mapped: n.length ? new s(i, r, n, h) : null, pos: l }
        }
    },
    T = class s {
        constructor(e, t, n, i) {
            ;(this.chunkPos = e), (this.chunk = t), (this.nextLayer = n), (this.maxPoint = i)
        }
        static create(e, t, n, i) {
            return new s(e, t, n, i)
        }
        get length() {
            let e = this.chunk.length - 1
            return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length)
        }
        get size() {
            if (this.isEmpty) return 0
            let e = this.nextLayer.size
            for (let t of this.chunk) e += t.value.length
            return e
        }
        chunkEnd(e) {
            return this.chunkPos[e] + this.chunk[e].length
        }
        update(e) {
            let { add: t = [], sort: n = !1, filterFrom: i = 0, filterTo: r = this.length } = e,
                l = e.filter
            if (t.length == 0 && !l) return this
            if ((n && (t = t.slice().sort(xe)), this.isEmpty)) return t.length ? s.of(t) : this
            let h = new le(this, null, -1).goto(0),
                o = 0,
                a = [],
                f = new re()
            for (; h.value || o < t.length; )
                if (o < t.length && (h.from - t[o].from || h.startSide - t[o].value.startSide) >= 0) {
                    let u = t[o++]
                    f.addInner(u.from, u.to, u.value) || a.push(u)
                } else h.rangeIndex == 1 && h.chunkIndex < this.chunk.length && (o == t.length || this.chunkEnd(h.chunkIndex) < t[o].from) && (!l || i > this.chunkEnd(h.chunkIndex) || r < this.chunkPos[h.chunkIndex]) && f.addChunk(this.chunkPos[h.chunkIndex], this.chunk[h.chunkIndex]) ? h.nextChunk() : ((!l || i > h.to || r < h.from || l(h.from, h.to, h.value)) && (f.addInner(h.from, h.to, h.value) || a.push(H.create(h.from, h.to, h.value))), h.next())
            return f.finishInner(this.nextLayer.isEmpty && !a.length ? s.empty : this.nextLayer.update({ add: a, filter: l, filterFrom: i, filterTo: r }))
        }
        map(e) {
            if (e.empty || this.isEmpty) return this
            let t = [],
                n = [],
                i = -1
            for (let l = 0; l < this.chunk.length; l++) {
                let h = this.chunkPos[l],
                    o = this.chunk[l],
                    a = e.touchesRange(h, h + o.length)
                if (a === !1) (i = Math.max(i, o.maxPoint)), t.push(o), n.push(e.mapPos(h))
                else if (a === !0) {
                    let { mapped: f, pos: u } = o.map(h, e)
                    f && ((i = Math.max(i, f.maxPoint)), t.push(f), n.push(u))
                }
            }
            let r = this.nextLayer.map(e)
            return t.length == 0 ? r : new s(n, t, r || s.empty, i)
        }
        between(e, t, n) {
            if (!this.isEmpty) {
                for (let i = 0; i < this.chunk.length; i++) {
                    let r = this.chunkPos[i],
                        l = this.chunk[i]
                    if (t >= r && e <= r + l.length && l.between(r, e - r, t - r, n) === !1) return
                }
                this.nextLayer.between(e, t, n)
            }
        }
        iter(e = 0) {
            return K.from([this]).goto(e)
        }
        get isEmpty() {
            return this.nextLayer == this
        }
        static iter(e, t = 0) {
            return K.from(e).goto(t)
        }
        static compare(e, t, n, i, r = -1) {
            let l = e.filter((u) => u.maxPoint > 0 || (!u.isEmpty && u.maxPoint >= r)),
                h = t.filter((u) => u.maxPoint > 0 || (!u.isEmpty && u.maxPoint >= r)),
                o = Ee(l, h, n),
                a = new R(l, o, r),
                f = new R(h, o, r)
            n.iterGaps((u, c, d) => Oe(a, u, f, c, d, i)), n.empty && n.length == 0 && Oe(a, 0, f, 0, 0, i)
        }
        static eq(e, t, n = 0, i) {
            i == null && (i = 999999999)
            let r = e.filter((f) => !f.isEmpty && t.indexOf(f) < 0),
                l = t.filter((f) => !f.isEmpty && e.indexOf(f) < 0)
            if (r.length != l.length) return !1
            if (!r.length) return !0
            let h = Ee(r, l),
                o = new R(r, h, 0).goto(n),
                a = new R(l, h, 0).goto(n)
            for (;;) {
                if (o.to != a.to || !ke(o.active, a.active) || (o.point && (!a.point || !o.point.eq(a.point)))) return !1
                if (o.to > i) return !0
                o.next(), a.next()
            }
        }
        static spans(e, t, n, i, r = -1) {
            let l = new R(e, null, r).goto(t),
                h = t,
                o = l.openStart
            for (;;) {
                let a = Math.min(l.to, n)
                if (l.point) {
                    let f = l.activeForPoint(l.to),
                        u = l.pointFrom < t ? f.length + 1 : l.point.startSide < 0 ? f.length : Math.min(f.length, o)
                    i.point(h, a, l.point, f, u, l.pointRank), (o = Math.min(l.openEnd(a), f.length))
                } else a > h && (i.span(h, a, l.active, o), (o = l.openEnd(a)))
                if (l.to > n) return o + (l.point && l.to > n ? 1 : 0)
                ;(h = l.to), l.next()
            }
        }
        static of(e, t = !1) {
            let n = new re()
            for (let i of e instanceof H ? [e] : t ? je(e) : e) n.add(i.from, i.to, i.value)
            return n.finish()
        }
        static join(e) {
            if (!e.length) return s.empty
            let t = e[e.length - 1]
            for (let n = e.length - 2; n >= 0; n--) for (let i = e[n]; i != s.empty; i = i.nextLayer) t = new s(i.chunkPos, i.chunk, t, Math.max(i.maxPoint, t.maxPoint))
            return t
        }
    }
T.empty = new T([], [], null, -1)
function je(s) {
    if (s.length > 1)
        for (let e = s[0], t = 1; t < s.length; t++) {
            let n = s[t]
            if (xe(e, n) > 0) return s.slice().sort(xe)
            e = n
        }
    return s
}
T.empty.nextLayer = T.empty
var re = class s {
    finishChunk(e) {
        this.chunks.push(new ye(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), (this.chunkStart = -1), (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)), (this.maxPoint = -1), e && ((this.from = []), (this.to = []), (this.value = []))
    }
    constructor() {
        ;(this.chunks = []), (this.chunkPos = []), (this.chunkStart = -1), (this.last = null), (this.lastFrom = -1e9), (this.lastTo = -1e9), (this.from = []), (this.to = []), (this.value = []), (this.maxPoint = -1), (this.setMaxPoint = -1), (this.nextLayer = null)
    }
    add(e, t, n) {
        this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new s())).add(e, t, n)
    }
    addInner(e, t, n) {
        let i = e - this.lastTo || n.startSide - this.last.endSide
        if (i <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`")
        return i < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), (this.last = n), (this.lastFrom = e), (this.lastTo = t), this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0)
    }
    addChunk(e, t) {
        if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1
        this.from.length && this.finishChunk(!0), (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)), this.chunks.push(t), this.chunkPos.push(e)
        let n = t.value.length - 1
        return (this.last = t.value[n]), (this.lastFrom = t.from[n] + e), (this.lastTo = t.to[n] + e), !0
    }
    finish() {
        return this.finishInner(T.empty)
    }
    finishInner(e) {
        if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0)) return e
        let t = T.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint)
        return (this.from = null), t
    }
}
function Ee(s, e, t) {
    let n = new Map()
    for (let r of s) for (let l = 0; l < r.chunk.length; l++) r.chunk[l].maxPoint <= 0 && n.set(r.chunk[l], r.chunkPos[l])
    let i = new Set()
    for (let r of e)
        for (let l = 0; l < r.chunk.length; l++) {
            let h = n.get(r.chunk[l])
            h != null && (t ? t.mapPos(h) : h) == r.chunkPos[l] && !t?.touchesRange(h, h + r.chunk[l].length) && i.add(r.chunk[l])
        }
    return i
}
var le = class {
        constructor(e, t, n, i = 0) {
            ;(this.layer = e), (this.skip = t), (this.minPoint = n), (this.rank = i)
        }
        get startSide() {
            return this.value ? this.value.startSide : 0
        }
        get endSide() {
            return this.value ? this.value.endSide : 0
        }
        goto(e, t = -1e9) {
            return (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this
        }
        gotoInner(e, t, n) {
            for (; this.chunkIndex < this.layer.chunk.length; ) {
                let i = this.layer.chunk[this.chunkIndex]
                if (!((this.skip && this.skip.has(i)) || this.layer.chunkEnd(this.chunkIndex) < e || i.maxPoint < this.minPoint)) break
                this.chunkIndex++, (n = !1)
            }
            if (this.chunkIndex < this.layer.chunk.length) {
                let i = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0)
                ;(!n || this.rangeIndex < i) && this.setRangeIndex(i)
            }
            this.next()
        }
        forward(e, t) {
            ;(this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0)
        }
        next() {
            for (;;)
                if (this.chunkIndex == this.layer.chunk.length) {
                    ;(this.from = this.to = 1e9), (this.value = null)
                    break
                } else {
                    let e = this.layer.chunkPos[this.chunkIndex],
                        t = this.layer.chunk[this.chunkIndex],
                        n = e + t.from[this.rangeIndex]
                    if (((this.from = n), (this.to = e + t.to[this.rangeIndex]), (this.value = t.value[this.rangeIndex]), this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || (this.value.point && this.to - this.from >= this.minPoint))) break
                }
        }
        setRangeIndex(e) {
            if (e == this.layer.chunk[this.chunkIndex].value.length) {
                if ((this.chunkIndex++, this.skip)) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); ) this.chunkIndex++
                this.rangeIndex = 0
            } else this.rangeIndex = e
        }
        nextChunk() {
            this.chunkIndex++, (this.rangeIndex = 0), this.next()
        }
        compare(e) {
            return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide
        }
    },
    K = class s {
        constructor(e) {
            this.heap = e
        }
        static from(e, t = null, n = -1) {
            let i = []
            for (let r = 0; r < e.length; r++) for (let l = e[r]; !l.isEmpty; l = l.nextLayer) l.maxPoint >= n && i.push(new le(l, t, n, r))
            return i.length == 1 ? i[0] : new s(i)
        }
        get startSide() {
            return this.value ? this.value.startSide : 0
        }
        goto(e, t = -1e9) {
            for (let n of this.heap) n.goto(e, t)
            for (let n = this.heap.length >> 1; n >= 0; n--) oe(this.heap, n)
            return this.next(), this
        }
        forward(e, t) {
            for (let n of this.heap) n.forward(e, t)
            for (let n = this.heap.length >> 1; n >= 0; n--) oe(this.heap, n)
            ;(this.to - e || this.value.endSide - t) < 0 && this.next()
        }
        next() {
            if (this.heap.length == 0) (this.from = this.to = 1e9), (this.value = null), (this.rank = -1)
            else {
                let e = this.heap[0]
                ;(this.from = e.from), (this.to = e.to), (this.value = e.value), (this.rank = e.rank), e.value && e.next(), oe(this.heap, 0)
            }
        }
    }
function oe(s, e) {
    for (let t = s[e]; ; ) {
        let n = (e << 1) + 1
        if (n >= s.length) break
        let i = s[n]
        if ((n + 1 < s.length && i.compare(s[n + 1]) >= 0 && ((i = s[n + 1]), n++), t.compare(i) < 0)) break
        ;(s[n] = t), (s[e] = i), (e = n)
    }
}
var R = class {
    constructor(e, t, n) {
        ;(this.minPoint = n), (this.active = []), (this.activeTo = []), (this.activeRank = []), (this.minActive = -1), (this.point = null), (this.pointFrom = 0), (this.pointRank = 0), (this.to = -1e9), (this.endSide = 0), (this.openStart = -1), (this.cursor = K.from(e, t, n))
    }
    goto(e, t = -1e9) {
        return this.cursor.goto(e, t), (this.active.length = this.activeTo.length = this.activeRank.length = 0), (this.minActive = -1), (this.to = e), (this.endSide = t), (this.openStart = -1), this.next(), this
    }
    forward(e, t) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; ) this.removeActive(this.minActive)
        this.cursor.forward(e, t)
    }
    removeActive(e) {
        X(this.active, e), X(this.activeTo, e), X(this.activeRank, e), (this.minActive = Me(this.active, this.activeTo))
    }
    addActive(e) {
        let t = 0,
            { value: n, to: i, rank: r } = this.cursor
        for (; t < this.activeRank.length && (r - this.activeRank[t] || i - this.activeTo[t]) > 0; ) t++
        Y(this.active, t, n), Y(this.activeTo, t, i), Y(this.activeRank, t, r), e && Y(e, t, this.cursor.from), (this.minActive = Me(this.active, this.activeTo))
    }
    next() {
        let e = this.to,
            t = this.point
        this.point = null
        let n = this.openStart < 0 ? [] : null
        for (;;) {
            let i = this.minActive
            if (i > -1 && (this.activeTo[i] - this.cursor.from || this.active[i].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[i] > e) {
                    ;(this.to = this.activeTo[i]), (this.endSide = this.active[i].endSide)
                    break
                }
                this.removeActive(i), n && X(n, i)
            } else if (this.cursor.value)
                if (this.cursor.from > e) {
                    ;(this.to = this.cursor.from), (this.endSide = this.cursor.startSide)
                    break
                } else {
                    let r = this.cursor.value
                    if (!r.point) this.addActive(n), this.cursor.next()
                    else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next()
                    else {
                        ;(this.point = r), (this.pointFrom = this.cursor.from), (this.pointRank = this.cursor.rank), (this.to = this.cursor.to), (this.endSide = r.endSide), this.cursor.next(), this.forward(this.to, this.endSide)
                        break
                    }
                }
            else {
                this.to = this.endSide = 1e9
                break
            }
        }
        if (n) {
            this.openStart = 0
            for (let i = n.length - 1; i >= 0 && n[i] < e; i--) this.openStart++
        }
    }
    activeForPoint(e) {
        if (!this.active.length) return this.active
        let t = []
        for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--) (this.activeTo[n] > e || (this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide)) && t.push(this.active[n])
        return t.reverse()
    }
    openEnd(e) {
        let t = 0
        for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--) t++
        return t
    }
}
function Oe(s, e, t, n, i, r) {
    s.goto(e), t.goto(n)
    let l = n + i,
        h = n,
        o = n - e
    for (;;) {
        let a = s.to + o - t.to,
            f = a || s.endSide - t.endSide,
            u = f < 0 ? s.to + o : t.to,
            c = Math.min(u, l)
        if ((s.point || t.point ? (s.point && t.point && (s.point == t.point || s.point.eq(t.point)) && ke(s.activeForPoint(s.to), t.activeForPoint(t.to))) || r.comparePoint(h, c, s.point, t.point) : c > h && !ke(s.active, t.active) && r.compareRange(h, c, s.active, t.active), u > l)) break
        ;(a || s.openEnd != t.openEnd) && r.boundChange && r.boundChange(u), (h = u), f <= 0 && s.next(), f >= 0 && t.next()
    }
}
function ke(s, e) {
    if (s.length != e.length) return !1
    for (let t = 0; t < s.length; t++) if (s[t] != e[t] && !s[t].eq(e[t])) return !1
    return !0
}
function X(s, e) {
    for (let t = e, n = s.length - 1; t < n; t++) s[t] = s[t + 1]
    s.pop()
}
function Y(s, e, t) {
    for (let n = s.length - 1; n >= e; n--) s[n + 1] = s[n]
    s[e] = t
}
function Me(s, e) {
    let t = -1,
        n = 1e9
    for (let i = 0; i < e.length; i++) (e[i] - n || s[i].endSide - s[t].endSide) < 0 && ((t = i), (n = e[i]))
    return t
}
function rt(s, e, t = s.length) {
    let n = 0
    for (let i = 0; i < t && i < s.length; ) s.charCodeAt(i) == 9 ? ((n += e - (n % e)), i++) : (n++, (i = ee(s, i)))
    return n
}
function lt(s, e, t, n) {
    for (let i = 0, r = 0; ; ) {
        if (r >= e) return i
        if (i == s.length) break
        ;(r += s.charCodeAt(i) == 9 ? t - (r % t) : 1), (i = ee(s, i))
    }
    return n === !0 ? -1 : s.length
}
export { L as Annotation, pe as AnnotationType, C as ChangeDesc, A as ChangeSet, M as CharCategory, ne as Compartment, x as EditorSelection, I as EditorState, k as Facet, ae as Line, E as MapMode, it as Prec, H as Range, T as RangeSet, re as RangeSetBuilder, z as RangeValue, N as SelectionRange, v as StateEffect, me as StateEffectType, q as StateField, m as Text, S as Transaction, et as codePointAt, nt as codePointSize, st as combineConfig, rt as countColumn, ee as findClusterBreak, lt as findColumn, tt as fromCodePoint }
//# sourceMappingURL=state.development.mjs.map
