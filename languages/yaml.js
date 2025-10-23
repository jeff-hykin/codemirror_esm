// https://esm.sh/@marijn/find-cluster-break@1.0.2/denonext/find-cluster-break.mjs
var l = [];
var o = [];
(() => {
  let t2 = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e2) => e2 ? parseInt(e2, 36) : 1);
  for (let e2 = 0, n6 = 0; e2 < t2.length; e2++) (e2 % 2 ? o : l).push(n6 = n6 + t2[e2]);
})();
function m(t2) {
  if (t2 < 768) return false;
  for (let e2 = 0, n6 = l.length; ; ) {
    let r2 = e2 + n6 >> 1;
    if (t2 < l[r2]) n6 = r2;
    else if (t2 >= o[r2]) e2 = r2 + 1;
    else return true;
    if (e2 == n6) return false;
  }
}
function c(t2) {
  return t2 >= 127462 && t2 <= 127487;
}
var g = 8205;
function w(t2, e2, n6 = true, r2 = true) {
  return (n6 ? b : k)(t2, e2, r2);
}
function b(t2, e2, n6) {
  if (e2 == t2.length) return e2;
  e2 && d(t2.charCodeAt(e2)) && h(t2.charCodeAt(e2 - 1)) && e2--;
  let r2 = u(t2, e2);
  for (e2 += x(r2); e2 < t2.length; ) {
    let f2 = u(t2, e2);
    if (r2 == g || f2 == g || n6 && m(f2)) e2 += x(f2), r2 = f2;
    else if (c(f2)) {
      let a2 = 0, i3 = e2 - 2;
      for (; i3 >= 0 && c(u(t2, i3)); ) a2++, i3 -= 2;
      if (a2 % 2 == 0) break;
      e2 += 2;
    } else break;
  }
  return e2;
}
function k(t2, e2, n6) {
  for (; e2 > 0; ) {
    let r2 = b(t2, e2 - 2, n6);
    if (r2 < e2) return r2;
    e2--;
  }
  return 0;
}
function u(t2, e2) {
  let n6 = t2.charCodeAt(e2);
  if (!h(n6) || e2 + 1 == t2.length) return n6;
  let r2 = t2.charCodeAt(e2 + 1);
  return d(r2) ? (n6 - 55296 << 10) + (r2 - 56320) + 65536 : n6;
}
function d(t2) {
  return t2 >= 56320 && t2 < 57344;
}
function h(t2) {
  return t2 >= 55296 && t2 < 56320;
}
function x(t2) {
  return t2 < 65536 ? 1 : 2;
}

// https://esm.sh/@codemirror/state@6.5.2/denonext/state.mjs
var m2 = class s {
  lineAt(e2) {
    if (e2 < 0 || e2 > this.length) throw new RangeError(`Invalid position ${e2} in document of length ${this.length}`);
    return this.lineInner(e2, false, 1, 0);
  }
  line(e2) {
    if (e2 < 1 || e2 > this.lines) throw new RangeError(`Invalid line number ${e2} in ${this.lines}-line document`);
    return this.lineInner(e2, true, 1, 0);
  }
  replace(e2, t2, n6) {
    [e2, t2] = $(this, e2, t2);
    let i3 = [];
    return this.decompose(0, e2, i3, 2), n6.length && n6.decompose(0, n6.length, i3, 3), this.decompose(t2, this.length, i3, 1), J.from(i3, this.length - (t2 - e2) + n6.length);
  }
  append(e2) {
    return this.replace(this.length, this.length, e2);
  }
  slice(e2, t2 = this.length) {
    [e2, t2] = $(this, e2, t2);
    let n6 = [];
    return this.decompose(e2, t2, n6, 0), J.from(n6, t2 - e2);
  }
  eq(e2) {
    if (e2 == this) return true;
    if (e2.length != this.length || e2.lines != this.lines) return false;
    let t2 = this.scanIdentical(e2, 1), n6 = this.length - this.scanIdentical(e2, -1), i3 = new B(this), r2 = new B(e2);
    for (let l8 = t2, h3 = t2; ; ) {
      if (i3.next(l8), r2.next(l8), l8 = 0, i3.lineBreak != r2.lineBreak || i3.done != r2.done || i3.value != r2.value) return false;
      if (h3 += i3.value.length, i3.done || h3 >= n6) return true;
    }
  }
  iter(e2 = 1) {
    return new B(this, e2);
  }
  iterRange(e2, t2 = this.length) {
    return new j(this, e2, t2);
  }
  iterLines(e2, t2) {
    let n6;
    if (e2 == null) n6 = this.iter();
    else {
      t2 == null && (t2 = this.lines + 1);
      let i3 = this.line(e2).from;
      n6 = this.iterRange(i3, Math.max(i3, t2 == this.lines + 1 ? this.length : t2 <= 1 ? 0 : this.line(t2 - 1).to));
    }
    return new _(n6);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e2 = [];
    return this.flatten(e2), e2;
  }
  constructor() {
  }
  static of(e2) {
    if (e2.length == 0) throw new RangeError("A document must have at least one line");
    return e2.length == 1 && !e2[0] ? s.empty : e2.length <= 32 ? new y(e2) : J.from(y.split(e2, []));
  }
};
var y = class s2 extends m2 {
  constructor(e2, t2 = $e(e2)) {
    super(), this.text = e2, this.length = t2;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e2, t2, n6, i3) {
    for (let r2 = 0; ; r2++) {
      let l8 = this.text[r2], h3 = i3 + l8.length;
      if ((t2 ? n6 : h3) >= e2) return new ae(i3, h3, n6, l8);
      i3 = h3 + 1, n6++;
    }
  }
  decompose(e2, t2, n6, i3) {
    let r2 = e2 <= 0 && t2 >= this.length ? this : new s2(Pe(this.text, e2, t2), Math.min(t2, this.length) - Math.max(0, e2));
    if (i3 & 1) {
      let l8 = n6.pop(), h3 = Z(r2.text, l8.text.slice(), 0, r2.length);
      if (h3.length <= 32) n6.push(new s2(h3, l8.length + r2.length));
      else {
        let o3 = h3.length >> 1;
        n6.push(new s2(h3.slice(0, o3)), new s2(h3.slice(o3)));
      }
    } else n6.push(r2);
  }
  replace(e2, t2, n6) {
    if (!(n6 instanceof s2)) return super.replace(e2, t2, n6);
    [e2, t2] = $(this, e2, t2);
    let i3 = Z(this.text, Z(n6.text, Pe(this.text, 0, e2)), t2), r2 = this.length + n6.length - (t2 - e2);
    return i3.length <= 32 ? new s2(i3, r2) : J.from(s2.split(i3, []), r2);
  }
  sliceString(e2, t2 = this.length, n6 = `
`) {
    [e2, t2] = $(this, e2, t2);
    let i3 = "";
    for (let r2 = 0, l8 = 0; r2 <= t2 && l8 < this.text.length; l8++) {
      let h3 = this.text[l8], o3 = r2 + h3.length;
      r2 > e2 && l8 && (i3 += n6), e2 < o3 && t2 > r2 && (i3 += h3.slice(Math.max(0, e2 - r2), t2 - r2)), r2 = o3 + 1;
    }
    return i3;
  }
  flatten(e2) {
    for (let t2 of this.text) e2.push(t2);
  }
  scanIdentical() {
    return 0;
  }
  static split(e2, t2) {
    let n6 = [], i3 = -1;
    for (let r2 of e2) n6.push(r2), i3 += r2.length + 1, n6.length == 32 && (t2.push(new s2(n6, i3)), n6 = [], i3 = -1);
    return i3 > -1 && t2.push(new s2(n6, i3)), t2;
  }
};
var J = class s3 extends m2 {
  constructor(e2, t2) {
    super(), this.children = e2, this.length = t2, this.lines = 0;
    for (let n6 of e2) this.lines += n6.lines;
  }
  lineInner(e2, t2, n6, i3) {
    for (let r2 = 0; ; r2++) {
      let l8 = this.children[r2], h3 = i3 + l8.length, o3 = n6 + l8.lines - 1;
      if ((t2 ? o3 : h3) >= e2) return l8.lineInner(e2, t2, n6, i3);
      i3 = h3 + 1, n6 = o3 + 1;
    }
  }
  decompose(e2, t2, n6, i3) {
    for (let r2 = 0, l8 = 0; l8 <= t2 && r2 < this.children.length; r2++) {
      let h3 = this.children[r2], o3 = l8 + h3.length;
      if (e2 <= o3 && t2 >= l8) {
        let a2 = i3 & ((l8 <= e2 ? 1 : 0) | (o3 >= t2 ? 2 : 0));
        l8 >= e2 && o3 <= t2 && !a2 ? n6.push(h3) : h3.decompose(e2 - l8, t2 - l8, n6, a2);
      }
      l8 = o3 + 1;
    }
  }
  replace(e2, t2, n6) {
    if ([e2, t2] = $(this, e2, t2), n6.lines < this.lines) for (let i3 = 0, r2 = 0; i3 < this.children.length; i3++) {
      let l8 = this.children[i3], h3 = r2 + l8.length;
      if (e2 >= r2 && t2 <= h3) {
        let o3 = l8.replace(e2 - r2, t2 - r2, n6), a2 = this.lines - l8.lines + o3.lines;
        if (o3.lines < a2 >> 4 && o3.lines > a2 >> 6) {
          let f2 = this.children.slice();
          return f2[i3] = o3, new s3(f2, this.length - (t2 - e2) + n6.length);
        }
        return super.replace(r2, h3, o3);
      }
      r2 = h3 + 1;
    }
    return super.replace(e2, t2, n6);
  }
  sliceString(e2, t2 = this.length, n6 = `
`) {
    [e2, t2] = $(this, e2, t2);
    let i3 = "";
    for (let r2 = 0, l8 = 0; r2 < this.children.length && l8 <= t2; r2++) {
      let h3 = this.children[r2], o3 = l8 + h3.length;
      l8 > e2 && r2 && (i3 += n6), e2 < o3 && t2 > l8 && (i3 += h3.sliceString(e2 - l8, t2 - l8, n6)), l8 = o3 + 1;
    }
    return i3;
  }
  flatten(e2) {
    for (let t2 of this.children) t2.flatten(e2);
  }
  scanIdentical(e2, t2) {
    if (!(e2 instanceof s3)) return 0;
    let n6 = 0, [i3, r2, l8, h3] = t2 > 0 ? [0, 0, this.children.length, e2.children.length] : [this.children.length - 1, e2.children.length - 1, -1, -1];
    for (; ; i3 += t2, r2 += t2) {
      if (i3 == l8 || r2 == h3) return n6;
      let o3 = this.children[i3], a2 = e2.children[r2];
      if (o3 != a2) return n6 + o3.scanIdentical(a2, t2);
      n6 += o3.length + 1;
    }
  }
  static from(e2, t2 = e2.reduce((n6, i3) => n6 + i3.length + 1, -1)) {
    let n6 = 0;
    for (let d3 of e2) n6 += d3.lines;
    if (n6 < 32) {
      let d3 = [];
      for (let g6 of e2) g6.flatten(d3);
      return new y(d3, t2);
    }
    let i3 = Math.max(32, n6 >> 5), r2 = i3 << 1, l8 = i3 >> 1, h3 = [], o3 = 0, a2 = -1, f2 = [];
    function u4(d3) {
      let g6;
      if (d3.lines > r2 && d3 instanceof s3) for (let P5 of d3.children) u4(P5);
      else d3.lines > l8 && (o3 > l8 || !o3) ? (c4(), h3.push(d3)) : d3 instanceof y && o3 && (g6 = f2[f2.length - 1]) instanceof y && d3.lines + g6.lines <= 32 ? (o3 += d3.lines, a2 += d3.length + 1, f2[f2.length - 1] = new y(g6.text.concat(d3.text), g6.length + 1 + d3.length)) : (o3 + d3.lines > i3 && c4(), o3 += d3.lines, a2 += d3.length + 1, f2.push(d3));
    }
    function c4() {
      o3 != 0 && (h3.push(f2.length == 1 ? f2[0] : s3.from(f2, a2)), a2 = -1, o3 = f2.length = 0);
    }
    for (let d3 of e2) u4(d3);
    return c4(), h3.length == 1 ? h3[0] : new s3(h3, t2);
  }
};
m2.empty = new y([""], 0);
function $e(s58) {
  let e2 = -1;
  for (let t2 of s58) e2 += t2.length + 1;
  return e2;
}
function Z(s58, e2, t2 = 0, n6 = 1e9) {
  for (let i3 = 0, r2 = 0, l8 = true; r2 < s58.length && i3 <= n6; r2++) {
    let h3 = s58[r2], o3 = i3 + h3.length;
    o3 >= t2 && (o3 > n6 && (h3 = h3.slice(0, n6 - i3)), i3 < t2 && (h3 = h3.slice(t2 - i3)), l8 ? (e2[e2.length - 1] += h3, l8 = false) : e2.push(h3)), i3 = o3 + 1;
  }
  return e2;
}
function Pe(s58, e2, t2) {
  return Z(s58, [""], e2, t2);
}
var B = class {
  constructor(e2, t2 = 1) {
    this.dir = t2, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [e2], this.offsets = [t2 > 0 ? 1 : (e2 instanceof y ? e2.text.length : e2.children.length) << 1];
  }
  nextInner(e2, t2) {
    for (this.done = this.lineBreak = false; ; ) {
      let n6 = this.nodes.length - 1, i3 = this.nodes[n6], r2 = this.offsets[n6], l8 = r2 >> 1, h3 = i3 instanceof y ? i3.text.length : i3.children.length;
      if (l8 == (t2 > 0 ? h3 : 0)) {
        if (n6 == 0) return this.done = true, this.value = "", this;
        t2 > 0 && this.offsets[n6 - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r2 & 1) == (t2 > 0 ? 0 : 1)) {
        if (this.offsets[n6] += t2, e2 == 0) return this.lineBreak = true, this.value = `
`, this;
        e2--;
      } else if (i3 instanceof y) {
        let o3 = i3.text[l8 + (t2 < 0 ? -1 : 0)];
        if (this.offsets[n6] += t2, o3.length > Math.max(0, e2)) return this.value = e2 == 0 ? o3 : t2 > 0 ? o3.slice(e2) : o3.slice(0, o3.length - e2), this;
        e2 -= o3.length;
      } else {
        let o3 = i3.children[l8 + (t2 < 0 ? -1 : 0)];
        e2 > o3.length ? (e2 -= o3.length, this.offsets[n6] += t2) : (t2 < 0 && this.offsets[n6]--, this.nodes.push(o3), this.offsets.push(t2 > 0 ? 1 : (o3 instanceof y ? o3.text.length : o3.children.length) << 1));
      }
    }
  }
  next(e2 = 0) {
    return e2 < 0 && (this.nextInner(-e2, -this.dir), e2 = this.value.length), this.nextInner(e2, this.dir);
  }
};
var j = class {
  constructor(e2, t2, n6) {
    this.value = "", this.done = false, this.cursor = new B(e2, t2 > n6 ? -1 : 1), this.pos = t2 > n6 ? e2.length : 0, this.from = Math.min(t2, n6), this.to = Math.max(t2, n6);
  }
  nextInner(e2, t2) {
    if (t2 < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = true, this;
    e2 += Math.max(0, t2 < 0 ? this.pos - this.to : this.from - this.pos);
    let n6 = t2 < 0 ? this.pos - this.from : this.to - this.pos;
    e2 > n6 && (e2 = n6), n6 -= e2;
    let { value: i3 } = this.cursor.next(e2);
    return this.pos += (i3.length + e2) * t2, this.value = i3.length <= n6 ? i3 : t2 < 0 ? i3.slice(i3.length - n6) : i3.slice(0, n6), this.done = !this.value, this;
  }
  next(e2 = 0) {
    return e2 < 0 ? e2 = Math.max(e2, this.from - this.pos) : e2 > 0 && (e2 = Math.min(e2, this.to - this.pos)), this.nextInner(e2, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
};
var _ = class {
  constructor(e2) {
    this.inner = e2, this.afterBreak = true, this.value = "", this.done = false;
  }
  next(e2 = 0) {
    let { done: t2, lineBreak: n6, value: i3 } = this.inner.next(e2);
    return t2 && this.afterBreak ? (this.value = "", this.afterBreak = false) : t2 ? (this.done = true, this.value = "") : n6 ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = i3, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
};
typeof Symbol < "u" && (m2.prototype[Symbol.iterator] = function() {
  return this.iter();
}, B.prototype[Symbol.iterator] = j.prototype[Symbol.iterator] = _.prototype[Symbol.iterator] = function() {
  return this;
});
var ae = class {
  constructor(e2, t2, n6, i3) {
    this.from = e2, this.to = t2, this.number = n6, this.text = i3;
  }
  get length() {
    return this.to - this.from;
  }
};
function $(s58, e2, t2) {
  return e2 = Math.max(0, Math.min(s58.length, e2)), [e2, Math.max(e2, Math.min(s58.length, t2))];
}
function ee(s58, e2, t2 = true, n6 = true) {
  return w(s58, e2, t2, n6);
}
function qe(s58) {
  return s58 >= 56320 && s58 < 57344;
}
function ze(s58) {
  return s58 >= 55296 && s58 < 56320;
}
function et(s58, e2) {
  let t2 = s58.charCodeAt(e2);
  if (!ze(t2) || e2 + 1 == s58.length) return t2;
  let n6 = s58.charCodeAt(e2 + 1);
  return qe(n6) ? (t2 - 55296 << 10) + (n6 - 56320) + 65536 : t2;
}
function nt(s58) {
  return s58 < 65536 ? 1 : 2;
}
var fe = /\r\n?|\n/;
var E = function(s58) {
  return s58[s58.Simple = 0] = "Simple", s58[s58.TrackDel = 1] = "TrackDel", s58[s58.TrackBefore = 2] = "TrackBefore", s58[s58.TrackAfter = 3] = "TrackAfter", s58;
}(E || (E = {}));
var C = class s4 {
  constructor(e2) {
    this.sections = e2;
  }
  get length() {
    let e2 = 0;
    for (let t2 = 0; t2 < this.sections.length; t2 += 2) e2 += this.sections[t2];
    return e2;
  }
  get newLength() {
    let e2 = 0;
    for (let t2 = 0; t2 < this.sections.length; t2 += 2) {
      let n6 = this.sections[t2 + 1];
      e2 += n6 < 0 ? this.sections[t2] : n6;
    }
    return e2;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e2) {
    for (let t2 = 0, n6 = 0, i3 = 0; t2 < this.sections.length; ) {
      let r2 = this.sections[t2++], l8 = this.sections[t2++];
      l8 < 0 ? (e2(n6, i3, r2), i3 += r2) : i3 += l8, n6 += r2;
    }
  }
  iterChangedRanges(e2, t2 = false) {
    ue(this, e2, t2);
  }
  get invertedDesc() {
    let e2 = [];
    for (let t2 = 0; t2 < this.sections.length; ) {
      let n6 = this.sections[t2++], i3 = this.sections[t2++];
      i3 < 0 ? e2.push(n6, i3) : e2.push(i3, n6);
    }
    return new s4(e2);
  }
  composeDesc(e2) {
    return this.empty ? e2 : e2.empty ? this : Te(this, e2);
  }
  mapDesc(e2, t2 = false) {
    return e2.empty ? this : ce(this, e2, t2);
  }
  mapPos(e2, t2 = -1, n6 = E.Simple) {
    let i3 = 0, r2 = 0;
    for (let l8 = 0; l8 < this.sections.length; ) {
      let h3 = this.sections[l8++], o3 = this.sections[l8++], a2 = i3 + h3;
      if (o3 < 0) {
        if (a2 > e2) return r2 + (e2 - i3);
        r2 += h3;
      } else {
        if (n6 != E.Simple && a2 >= e2 && (n6 == E.TrackDel && i3 < e2 && a2 > e2 || n6 == E.TrackBefore && i3 < e2 || n6 == E.TrackAfter && a2 > e2)) return null;
        if (a2 > e2 || a2 == e2 && t2 < 0 && !h3) return e2 == i3 || t2 < 0 ? r2 : r2 + o3;
        r2 += o3;
      }
      i3 = a2;
    }
    if (e2 > i3) throw new RangeError(`Position ${e2} is out of range for changeset of length ${i3}`);
    return r2;
  }
  touchesRange(e2, t2 = e2) {
    for (let n6 = 0, i3 = 0; n6 < this.sections.length && i3 <= t2; ) {
      let r2 = this.sections[n6++], l8 = this.sections[n6++], h3 = i3 + r2;
      if (l8 >= 0 && i3 <= t2 && h3 >= e2) return i3 < e2 && h3 > t2 ? "cover" : true;
      i3 = h3;
    }
    return false;
  }
  toString() {
    let e2 = "";
    for (let t2 = 0; t2 < this.sections.length; ) {
      let n6 = this.sections[t2++], i3 = this.sections[t2++];
      e2 += (e2 ? " " : "") + n6 + (i3 >= 0 ? ":" + i3 : "");
    }
    return e2;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e2) {
    if (!Array.isArray(e2) || e2.length % 2 || e2.some((t2) => typeof t2 != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new s4(e2);
  }
  static create(e2) {
    return new s4(e2);
  }
};
var A = class s5 extends C {
  constructor(e2, t2) {
    super(e2), this.inserted = t2;
  }
  apply(e2) {
    if (this.length != e2.length) throw new RangeError("Applying change set to a document with the wrong length");
    return ue(this, (t2, n6, i3, r2, l8) => e2 = e2.replace(i3, i3 + (n6 - t2), l8), false), e2;
  }
  mapDesc(e2, t2 = false) {
    return ce(this, e2, t2, true);
  }
  invert(e2) {
    let t2 = this.sections.slice(), n6 = [];
    for (let i3 = 0, r2 = 0; i3 < t2.length; i3 += 2) {
      let l8 = t2[i3], h3 = t2[i3 + 1];
      if (h3 >= 0) {
        t2[i3] = h3, t2[i3 + 1] = l8;
        let o3 = i3 >> 1;
        for (; n6.length < o3; ) n6.push(m2.empty);
        n6.push(l8 ? e2.slice(r2, r2 + l8) : m2.empty);
      }
      r2 += l8;
    }
    return new s5(t2, n6);
  }
  compose(e2) {
    return this.empty ? e2 : e2.empty ? this : Te(this, e2, true);
  }
  map(e2, t2 = false) {
    return e2.empty ? this : ce(this, e2, t2, true);
  }
  iterChanges(e2, t2 = false) {
    ue(this, e2, t2);
  }
  get desc() {
    return C.create(this.sections);
  }
  filter(e2) {
    let t2 = [], n6 = [], i3 = [], r2 = new F(this);
    e: for (let l8 = 0, h3 = 0; ; ) {
      let o3 = l8 == e2.length ? 1e9 : e2[l8++];
      for (; h3 < o3 || h3 == o3 && r2.len == 0; ) {
        if (r2.done) break e;
        let f2 = Math.min(r2.len, o3 - h3);
        w2(i3, f2, -1);
        let u4 = r2.ins == -1 ? -1 : r2.off == 0 ? r2.ins : 0;
        w2(t2, f2, u4), u4 > 0 && O(n6, t2, r2.text), r2.forward(f2), h3 += f2;
      }
      let a2 = e2[l8++];
      for (; h3 < a2; ) {
        if (r2.done) break e;
        let f2 = Math.min(r2.len, a2 - h3);
        w2(t2, f2, -1), w2(i3, f2, r2.ins == -1 ? -1 : r2.off == 0 ? r2.ins : 0), r2.forward(f2), h3 += f2;
      }
    }
    return { changes: new s5(t2, n6), filtered: C.create(i3) };
  }
  toJSON() {
    let e2 = [];
    for (let t2 = 0; t2 < this.sections.length; t2 += 2) {
      let n6 = this.sections[t2], i3 = this.sections[t2 + 1];
      i3 < 0 ? e2.push(n6) : i3 == 0 ? e2.push([n6]) : e2.push([n6].concat(this.inserted[t2 >> 1].toJSON()));
    }
    return e2;
  }
  static of(e2, t2, n6) {
    let i3 = [], r2 = [], l8 = 0, h3 = null;
    function o3(f2 = false) {
      if (!f2 && !i3.length) return;
      l8 < t2 && w2(i3, t2 - l8, -1);
      let u4 = new s5(i3, r2);
      h3 = h3 ? h3.compose(u4.map(h3)) : u4, i3 = [], r2 = [], l8 = 0;
    }
    function a2(f2) {
      if (Array.isArray(f2)) for (let u4 of f2) a2(u4);
      else if (f2 instanceof s5) {
        if (f2.length != t2) throw new RangeError(`Mismatched change set length (got ${f2.length}, expected ${t2})`);
        o3(), h3 = h3 ? h3.compose(f2.map(h3)) : f2;
      } else {
        let { from: u4, to: c4 = u4, insert: d3 } = f2;
        if (u4 > c4 || u4 < 0 || c4 > t2) throw new RangeError(`Invalid change range ${u4} to ${c4} (in doc of length ${t2})`);
        let g6 = d3 ? typeof d3 == "string" ? m2.of(d3.split(n6 || fe)) : d3 : m2.empty, P5 = g6.length;
        if (u4 == c4 && P5 == 0) return;
        u4 < l8 && o3(), u4 > l8 && w2(i3, u4 - l8, -1), w2(i3, c4 - u4, P5), O(r2, i3, g6), l8 = c4;
      }
    }
    return a2(e2), o3(!h3), h3;
  }
  static empty(e2) {
    return new s5(e2 ? [e2, -1] : [], []);
  }
  static fromJSON(e2) {
    if (!Array.isArray(e2)) throw new RangeError("Invalid JSON representation of ChangeSet");
    let t2 = [], n6 = [];
    for (let i3 = 0; i3 < e2.length; i3++) {
      let r2 = e2[i3];
      if (typeof r2 == "number") t2.push(r2, -1);
      else {
        if (!Array.isArray(r2) || typeof r2[0] != "number" || r2.some((l8, h3) => h3 && typeof l8 != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r2.length == 1) t2.push(r2[0], 0);
        else {
          for (; n6.length < i3; ) n6.push(m2.empty);
          n6[i3] = m2.of(r2.slice(1)), t2.push(r2[0], n6[i3].length);
        }
      }
    }
    return new s5(t2, n6);
  }
  static createSet(e2, t2) {
    return new s5(e2, t2);
  }
};
function w2(s58, e2, t2, n6 = false) {
  if (e2 == 0 && t2 <= 0) return;
  let i3 = s58.length - 2;
  i3 >= 0 && t2 <= 0 && t2 == s58[i3 + 1] ? s58[i3] += e2 : i3 >= 0 && e2 == 0 && s58[i3] == 0 ? s58[i3 + 1] += t2 : n6 ? (s58[i3] += e2, s58[i3 + 1] += t2) : s58.push(e2, t2);
}
function O(s58, e2, t2) {
  if (t2.length == 0) return;
  let n6 = e2.length - 2 >> 1;
  if (n6 < s58.length) s58[s58.length - 1] = s58[s58.length - 1].append(t2);
  else {
    for (; s58.length < n6; ) s58.push(m2.empty);
    s58.push(t2);
  }
}
function ue(s58, e2, t2) {
  let n6 = s58.inserted;
  for (let i3 = 0, r2 = 0, l8 = 0; l8 < s58.sections.length; ) {
    let h3 = s58.sections[l8++], o3 = s58.sections[l8++];
    if (o3 < 0) i3 += h3, r2 += h3;
    else {
      let a2 = i3, f2 = r2, u4 = m2.empty;
      for (; a2 += h3, f2 += o3, o3 && n6 && (u4 = u4.append(n6[l8 - 2 >> 1])), !(t2 || l8 == s58.sections.length || s58.sections[l8 + 1] < 0); ) h3 = s58.sections[l8++], o3 = s58.sections[l8++];
      e2(i3, a2, r2, f2, u4), i3 = a2, r2 = f2;
    }
  }
}
function ce(s58, e2, t2, n6 = false) {
  let i3 = [], r2 = n6 ? [] : null, l8 = new F(s58), h3 = new F(e2);
  for (let o3 = -1; ; ) {
    if (l8.done && h3.len || h3.done && l8.len) throw new Error("Mismatched change set lengths");
    if (l8.ins == -1 && h3.ins == -1) {
      let a2 = Math.min(l8.len, h3.len);
      w2(i3, a2, -1), l8.forward(a2), h3.forward(a2);
    } else if (h3.ins >= 0 && (l8.ins < 0 || o3 == l8.i || l8.off == 0 && (h3.len < l8.len || h3.len == l8.len && !t2))) {
      let a2 = h3.len;
      for (w2(i3, h3.ins, -1); a2; ) {
        let f2 = Math.min(l8.len, a2);
        l8.ins >= 0 && o3 < l8.i && l8.len <= f2 && (w2(i3, 0, l8.ins), r2 && O(r2, i3, l8.text), o3 = l8.i), l8.forward(f2), a2 -= f2;
      }
      h3.next();
    } else if (l8.ins >= 0) {
      let a2 = 0, f2 = l8.len;
      for (; f2; ) if (h3.ins == -1) {
        let u4 = Math.min(f2, h3.len);
        a2 += u4, f2 -= u4, h3.forward(u4);
      } else if (h3.ins == 0 && h3.len < f2) f2 -= h3.len, h3.next();
      else break;
      w2(i3, a2, o3 < l8.i ? l8.ins : 0), r2 && o3 < l8.i && O(r2, i3, l8.text), o3 = l8.i, l8.forward(l8.len - f2);
    } else {
      if (l8.done && h3.done) return r2 ? A.createSet(i3, r2) : C.create(i3);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Te(s58, e2, t2 = false) {
  let n6 = [], i3 = t2 ? [] : null, r2 = new F(s58), l8 = new F(e2);
  for (let h3 = false; ; ) {
    if (r2.done && l8.done) return i3 ? A.createSet(n6, i3) : C.create(n6);
    if (r2.ins == 0) w2(n6, r2.len, 0, h3), r2.next();
    else if (l8.len == 0 && !l8.done) w2(n6, 0, l8.ins, h3), i3 && O(i3, n6, l8.text), l8.next();
    else {
      if (r2.done || l8.done) throw new Error("Mismatched change set lengths");
      {
        let o3 = Math.min(r2.len2, l8.len), a2 = n6.length;
        if (r2.ins == -1) {
          let f2 = l8.ins == -1 ? -1 : l8.off ? 0 : l8.ins;
          w2(n6, o3, f2, h3), i3 && f2 && O(i3, n6, l8.text);
        } else l8.ins == -1 ? (w2(n6, r2.off ? 0 : r2.len, o3, h3), i3 && O(i3, n6, r2.textBit(o3))) : (w2(n6, r2.off ? 0 : r2.len, l8.off ? 0 : l8.ins, h3), i3 && !l8.off && O(i3, n6, l8.text));
        h3 = (r2.ins > o3 || l8.ins >= 0 && l8.len > o3) && (h3 || n6.length > a2), r2.forward2(o3), l8.forward(o3);
      }
    }
  }
}
var F = class {
  constructor(e2) {
    this.set = e2, this.i = 0, this.next();
  }
  next() {
    let { sections: e2 } = this.set;
    this.i < e2.length ? (this.len = e2[this.i++], this.ins = e2[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e2 } = this.set, t2 = this.i - 2 >> 1;
    return t2 >= e2.length ? m2.empty : e2[t2];
  }
  textBit(e2) {
    let { inserted: t2 } = this.set, n6 = this.i - 2 >> 1;
    return n6 >= t2.length && !e2 ? m2.empty : t2[n6].slice(this.off, e2 == null ? void 0 : this.off + e2);
  }
  forward(e2) {
    e2 == this.len ? this.next() : (this.len -= e2, this.off += e2);
  }
  forward2(e2) {
    this.ins == -1 ? this.forward(e2) : e2 == this.ins ? this.next() : (this.ins -= e2, this.off += e2);
  }
};
var N = class s6 {
  constructor(e2, t2, n6) {
    this.from = e2, this.to = t2, this.flags = n6;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e2 = this.flags & 7;
    return e2 == 7 ? null : e2;
  }
  get goalColumn() {
    let e2 = this.flags >> 6;
    return e2 == 16777215 ? void 0 : e2;
  }
  map(e2, t2 = -1) {
    let n6, i3;
    return this.empty ? n6 = i3 = e2.mapPos(this.from, t2) : (n6 = e2.mapPos(this.from, 1), i3 = e2.mapPos(this.to, -1)), n6 == this.from && i3 == this.to ? this : new s6(n6, i3, this.flags);
  }
  extend(e2, t2 = e2) {
    if (e2 <= this.anchor && t2 >= this.anchor) return x2.range(e2, t2);
    let n6 = Math.abs(e2 - this.anchor) > Math.abs(t2 - this.anchor) ? e2 : t2;
    return x2.range(this.anchor, n6);
  }
  eq(e2, t2 = false) {
    return this.anchor == e2.anchor && this.head == e2.head && (!t2 || !this.empty || this.assoc == e2.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e2) {
    if (!e2 || typeof e2.anchor != "number" || typeof e2.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
    return x2.range(e2.anchor, e2.head);
  }
  static create(e2, t2, n6) {
    return new s6(e2, t2, n6);
  }
};
var x2 = class s7 {
  constructor(e2, t2) {
    this.ranges = e2, this.mainIndex = t2;
  }
  map(e2, t2 = -1) {
    return e2.empty ? this : s7.create(this.ranges.map((n6) => n6.map(e2, t2)), this.mainIndex);
  }
  eq(e2, t2 = false) {
    if (this.ranges.length != e2.ranges.length || this.mainIndex != e2.mainIndex) return false;
    for (let n6 = 0; n6 < this.ranges.length; n6++) if (!this.ranges[n6].eq(e2.ranges[n6], t2)) return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new s7([this.main], 0);
  }
  addRange(e2, t2 = true) {
    return s7.create([e2].concat(this.ranges), t2 ? 0 : this.mainIndex + 1);
  }
  replaceRange(e2, t2 = this.mainIndex) {
    let n6 = this.ranges.slice();
    return n6[t2] = e2, s7.create(n6, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e2) => e2.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e2) {
    if (!e2 || !Array.isArray(e2.ranges) || typeof e2.main != "number" || e2.main >= e2.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
    return new s7(e2.ranges.map((t2) => N.fromJSON(t2)), e2.main);
  }
  static single(e2, t2 = e2) {
    return new s7([s7.range(e2, t2)], 0);
  }
  static create(e2, t2 = 0) {
    if (e2.length == 0) throw new RangeError("A selection needs at least one range");
    for (let n6 = 0, i3 = 0; i3 < e2.length; i3++) {
      let r2 = e2[i3];
      if (r2.empty ? r2.from <= n6 : r2.from < n6) return s7.normalized(e2.slice(), t2);
      n6 = r2.to;
    }
    return new s7(e2, t2);
  }
  static cursor(e2, t2 = 0, n6, i3) {
    return N.create(e2, e2, (t2 == 0 ? 0 : t2 < 0 ? 8 : 16) | (n6 == null ? 7 : Math.min(6, n6)) | (i3 ?? 16777215) << 6);
  }
  static range(e2, t2, n6, i3) {
    let r2 = (n6 ?? 16777215) << 6 | (i3 == null ? 7 : Math.min(6, i3));
    return t2 < e2 ? N.create(t2, e2, 48 | r2) : N.create(e2, t2, (t2 > e2 ? 8 : 0) | r2);
  }
  static normalized(e2, t2 = 0) {
    let n6 = e2[t2];
    e2.sort((i3, r2) => i3.from - r2.from), t2 = e2.indexOf(n6);
    for (let i3 = 1; i3 < e2.length; i3++) {
      let r2 = e2[i3], l8 = e2[i3 - 1];
      if (r2.empty ? r2.from <= l8.to : r2.from < l8.to) {
        let h3 = l8.from, o3 = Math.max(r2.to, l8.to);
        i3 <= t2 && t2--, e2.splice(--i3, 2, r2.anchor > r2.head ? s7.range(o3, h3) : s7.range(h3, o3));
      }
    }
    return new s7(e2, t2);
  }
};
function be(s58, e2) {
  for (let t2 of s58.ranges) if (t2.to > e2) throw new RangeError("Selection points outside of document");
}
var Se = 0;
var k2 = class s8 {
  constructor(e2, t2, n6, i3, r2) {
    this.combine = e2, this.compareInput = t2, this.compare = n6, this.isStatic = i3, this.id = Se++, this.default = e2([]), this.extensions = typeof r2 == "function" ? r2(this) : r2;
  }
  get reader() {
    return this;
  }
  static define(e2 = {}) {
    return new s8(e2.combine || ((t2) => t2), e2.compareInput || ((t2, n6) => t2 === n6), e2.compare || (e2.combine ? (t2, n6) => t2 === n6 : Ie), !!e2.static, e2.enables);
  }
  of(e2) {
    return new D([], this, 0, e2);
  }
  compute(e2, t2) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new D(e2, this, 1, t2);
  }
  computeN(e2, t2) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new D(e2, this, 2, t2);
  }
  from(e2, t2) {
    return t2 || (t2 = (n6) => n6), this.compute([e2], (n6) => t2(n6.field(e2)));
  }
};
function Ie(s58, e2) {
  return s58 == e2 || s58.length == e2.length && s58.every((t2, n6) => t2 === e2[n6]);
}
var D = class {
  constructor(e2, t2, n6, i3) {
    this.dependencies = e2, this.facet = t2, this.type = n6, this.value = i3, this.id = Se++;
  }
  dynamicSlot(e2) {
    var t2;
    let n6 = this.value, i3 = this.facet.compareInput, r2 = this.id, l8 = e2[r2] >> 1, h3 = this.type == 2, o3 = false, a2 = false, f2 = [];
    for (let u4 of this.dependencies) u4 == "doc" ? o3 = true : u4 == "selection" ? a2 = true : ((t2 = e2[u4.id]) !== null && t2 !== void 0 ? t2 : 1) & 1 || f2.push(e2[u4.id]);
    return { create(u4) {
      return u4.values[l8] = n6(u4), 1;
    }, update(u4, c4) {
      if (o3 && c4.docChanged || a2 && (c4.docChanged || c4.selection) || de(u4, f2)) {
        let d3 = n6(u4);
        if (h3 ? !Ae(d3, u4.values[l8], i3) : !i3(d3, u4.values[l8])) return u4.values[l8] = d3, 1;
      }
      return 0;
    }, reconfigure: (u4, c4) => {
      let d3, g6 = c4.config.address[r2];
      if (g6 != null) {
        let P5 = se(c4, g6);
        if (this.dependencies.every((p2) => p2 instanceof k2 ? c4.facet(p2) === u4.facet(p2) : p2 instanceof q ? c4.field(p2, false) == u4.field(p2, false) : true) || (h3 ? Ae(d3 = n6(u4), P5, i3) : i3(d3 = n6(u4), P5))) return u4.values[l8] = P5, 0;
      } else d3 = n6(u4);
      return u4.values[l8] = d3, 1;
    } };
  }
};
function Ae(s58, e2, t2) {
  if (s58.length != e2.length) return false;
  for (let n6 = 0; n6 < s58.length; n6++) if (!t2(s58[n6], e2[n6])) return false;
  return true;
}
function de(s58, e2) {
  let t2 = false;
  for (let n6 of e2) U(s58, n6) & 1 && (t2 = true);
  return t2;
}
function We(s58, e2, t2) {
  let n6 = t2.map((o3) => s58[o3.id]), i3 = t2.map((o3) => o3.type), r2 = n6.filter((o3) => !(o3 & 1)), l8 = s58[e2.id] >> 1;
  function h3(o3) {
    let a2 = [];
    for (let f2 = 0; f2 < n6.length; f2++) {
      let u4 = se(o3, n6[f2]);
      if (i3[f2] == 2) for (let c4 of u4) a2.push(c4);
      else a2.push(u4);
    }
    return e2.combine(a2);
  }
  return { create(o3) {
    for (let a2 of n6) U(o3, a2);
    return o3.values[l8] = h3(o3), 1;
  }, update(o3, a2) {
    if (!de(o3, r2)) return 0;
    let f2 = h3(o3);
    return e2.compare(f2, o3.values[l8]) ? 0 : (o3.values[l8] = f2, 1);
  }, reconfigure(o3, a2) {
    let f2 = de(o3, n6), u4 = a2.config.facets[e2.id], c4 = a2.facet(e2);
    if (u4 && !f2 && Ie(t2, u4)) return o3.values[l8] = c4, 0;
    let d3 = h3(o3);
    return e2.compare(d3, c4) ? (o3.values[l8] = c4, 0) : (o3.values[l8] = d3, 1);
  } };
}
var Q = k2.define({ static: true });
var q = class s9 {
  constructor(e2, t2, n6, i3, r2) {
    this.id = e2, this.createF = t2, this.updateF = n6, this.compareF = i3, this.spec = r2, this.provides = void 0;
  }
  static define(e2) {
    let t2 = new s9(Se++, e2.create, e2.update, e2.compare || ((n6, i3) => n6 === i3), e2);
    return e2.provide && (t2.provides = e2.provide(t2)), t2;
  }
  create(e2) {
    let t2 = e2.facet(Q).find((n6) => n6.field == this);
    return (t2?.create || this.createF)(e2);
  }
  slot(e2) {
    let t2 = e2[this.id] >> 1;
    return { create: (n6) => (n6.values[t2] = this.create(n6), 1), update: (n6, i3) => {
      let r2 = n6.values[t2], l8 = this.updateF(r2, i3);
      return this.compareF(r2, l8) ? 0 : (n6.values[t2] = l8, 1);
    }, reconfigure: (n6, i3) => {
      let r2 = n6.facet(Q), l8 = i3.facet(Q), h3;
      return (h3 = r2.find((o3) => o3.field == this)) && h3 != l8.find((o3) => o3.field == this) ? (n6.values[t2] = h3.create(n6), 1) : i3.config.address[this.id] != null ? (n6.values[t2] = i3.field(this), 0) : (n6.values[t2] = this.create(n6), 1);
    } };
  }
  init(e2) {
    return [this, Q.of({ field: this, create: e2 })];
  }
  get extension() {
    return this;
  }
};
var b2 = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function W(s58) {
  return (e2) => new te(e2, s58);
}
var it = { highest: W(b2.highest), high: W(b2.high), default: W(b2.default), low: W(b2.low), lowest: W(b2.lowest) };
var te = class {
  constructor(e2, t2) {
    this.inner = e2, this.prec = t2;
  }
};
var ne = class s10 {
  of(e2) {
    return new G(this, e2);
  }
  reconfigure(e2) {
    return s10.reconfigure.of({ compartment: this, extension: e2 });
  }
  get(e2) {
    return e2.config.compartments.get(this);
  }
};
var G = class {
  constructor(e2, t2) {
    this.compartment = e2, this.inner = t2;
  }
};
var ie = class s11 {
  constructor(e2, t2, n6, i3, r2, l8) {
    for (this.base = e2, this.compartments = t2, this.dynamicSlots = n6, this.address = i3, this.staticValues = r2, this.facets = l8, this.statusTemplate = []; this.statusTemplate.length < n6.length; ) this.statusTemplate.push(0);
  }
  staticFacet(e2) {
    let t2 = this.address[e2.id];
    return t2 == null ? e2.default : this.staticValues[t2 >> 1];
  }
  static resolve(e2, t2, n6) {
    let i3 = [], r2 = /* @__PURE__ */ Object.create(null), l8 = /* @__PURE__ */ new Map();
    for (let c4 of Ue(e2, t2, l8)) c4 instanceof q ? i3.push(c4) : (r2[c4.facet.id] || (r2[c4.facet.id] = [])).push(c4);
    let h3 = /* @__PURE__ */ Object.create(null), o3 = [], a2 = [];
    for (let c4 of i3) h3[c4.id] = a2.length << 1, a2.push((d3) => c4.slot(d3));
    let f2 = n6?.config.facets;
    for (let c4 in r2) {
      let d3 = r2[c4], g6 = d3[0].facet, P5 = f2 && f2[c4] || [];
      if (d3.every((p2) => p2.type == 0)) if (h3[g6.id] = o3.length << 1 | 1, Ie(P5, d3)) o3.push(n6.facet(g6));
      else {
        let p2 = g6.combine(d3.map((he3) => he3.value));
        o3.push(n6 && g6.compare(p2, n6.facet(g6)) ? n6.facet(g6) : p2);
      }
      else {
        for (let p2 of d3) p2.type == 0 ? (h3[p2.id] = o3.length << 1 | 1, o3.push(p2.value)) : (h3[p2.id] = a2.length << 1, a2.push((he3) => p2.dynamicSlot(he3)));
        h3[g6.id] = a2.length << 1, a2.push((p2) => We(p2, g6, d3));
      }
    }
    let u4 = a2.map((c4) => c4(h3));
    return new s11(e2, l8, u4, h3, o3, r2);
  }
};
function Ue(s58, e2, t2) {
  let n6 = [[], [], [], [], []], i3 = /* @__PURE__ */ new Map();
  function r2(l8, h3) {
    let o3 = i3.get(l8);
    if (o3 != null) {
      if (o3 <= h3) return;
      let a2 = n6[o3].indexOf(l8);
      a2 > -1 && n6[o3].splice(a2, 1), l8 instanceof G && t2.delete(l8.compartment);
    }
    if (i3.set(l8, h3), Array.isArray(l8)) for (let a2 of l8) r2(a2, h3);
    else if (l8 instanceof G) {
      if (t2.has(l8.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
      let a2 = e2.get(l8.compartment) || l8.inner;
      t2.set(l8.compartment, a2), r2(a2, h3);
    } else if (l8 instanceof te) r2(l8.inner, l8.prec);
    else if (l8 instanceof q) n6[h3].push(l8), l8.provides && r2(l8.provides, h3);
    else if (l8 instanceof D) n6[h3].push(l8), l8.facet.extensions && r2(l8.facet.extensions, b2.default);
    else {
      let a2 = l8.extension;
      if (!a2) throw new Error(`Unrecognized extension value in extension set (${l8}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r2(a2, h3);
    }
  }
  return r2(s58, b2.default), n6.reduce((l8, h3) => l8.concat(h3));
}
function U(s58, e2) {
  if (e2 & 1) return 2;
  let t2 = e2 >> 1, n6 = s58.status[t2];
  if (n6 == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (n6 & 2) return n6;
  s58.status[t2] = 4;
  let i3 = s58.computeSlot(s58, s58.config.dynamicSlots[t2]);
  return s58.status[t2] = 2 | i3;
}
function se(s58, e2) {
  return e2 & 1 ? s58.config.staticValues[e2 >> 1] : s58.values[e2 >> 1];
}
var Re = k2.define();
var ge = k2.define({ combine: (s58) => s58.some((e2) => e2), static: true });
var Be = k2.define({ combine: (s58) => s58.length ? s58[0] : void 0, static: true });
var Ce = k2.define();
var Fe = k2.define();
var Le = k2.define();
var Ne = k2.define({ combine: (s58) => s58.length ? s58[0] : false });
var L = class {
  constructor(e2, t2) {
    this.type = e2, this.value = t2;
  }
  static define() {
    return new pe();
  }
};
var pe = class {
  of(e2) {
    return new L(this, e2);
  }
};
var me = class {
  constructor(e2) {
    this.map = e2;
  }
  of(e2) {
    return new v(this, e2);
  }
};
var v = class s12 {
  constructor(e2, t2) {
    this.type = e2, this.value = t2;
  }
  map(e2) {
    let t2 = this.type.map(this.value, e2);
    return t2 === void 0 ? void 0 : t2 == this.value ? this : new s12(this.type, t2);
  }
  is(e2) {
    return this.type == e2;
  }
  static define(e2 = {}) {
    return new me(e2.map || ((t2) => t2));
  }
  static mapEffects(e2, t2) {
    if (!e2.length) return e2;
    let n6 = [];
    for (let i3 of e2) {
      let r2 = i3.map(t2);
      r2 && n6.push(r2);
    }
    return n6;
  }
};
v.reconfigure = v.define();
v.appendConfig = v.define();
var S = class s13 {
  constructor(e2, t2, n6, i3, r2, l8) {
    this.startState = e2, this.changes = t2, this.selection = n6, this.effects = i3, this.annotations = r2, this.scrollIntoView = l8, this._doc = null, this._state = null, n6 && be(n6, t2.newLength), r2.some((h3) => h3.type == s13.time) || (this.annotations = r2.concat(s13.time.of(Date.now())));
  }
  static create(e2, t2, n6, i3, r2, l8) {
    return new s13(e2, t2, n6, i3, r2, l8);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e2) {
    for (let t2 of this.annotations) if (t2.type == e2) return t2.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e2) {
    let t2 = this.annotation(s13.userEvent);
    return !!(t2 && (t2 == e2 || t2.length > e2.length && t2.slice(0, e2.length) == e2 && t2[e2.length] == "."));
  }
};
S.time = L.define();
S.userEvent = L.define();
S.addToHistory = L.define();
S.remote = L.define();
function Ge(s58, e2) {
  let t2 = [];
  for (let n6 = 0, i3 = 0; ; ) {
    let r2, l8;
    if (n6 < s58.length && (i3 == e2.length || e2[i3] >= s58[n6])) r2 = s58[n6++], l8 = s58[n6++];
    else if (i3 < e2.length) r2 = e2[i3++], l8 = e2[i3++];
    else return t2;
    !t2.length || t2[t2.length - 1] < r2 ? t2.push(r2, l8) : t2[t2.length - 1] < l8 && (t2[t2.length - 1] = l8);
  }
}
function Je(s58, e2, t2) {
  var n6;
  let i3, r2, l8;
  return t2 ? (i3 = e2.changes, r2 = A.empty(e2.changes.length), l8 = s58.changes.compose(e2.changes)) : (i3 = e2.changes.map(s58.changes), r2 = s58.changes.mapDesc(e2.changes, true), l8 = s58.changes.compose(i3)), { changes: l8, selection: e2.selection ? e2.selection.map(r2) : (n6 = s58.selection) === null || n6 === void 0 ? void 0 : n6.map(i3), effects: v.mapEffects(s58.effects, i3).concat(v.mapEffects(e2.effects, r2)), annotations: s58.annotations.length ? s58.annotations.concat(e2.annotations) : e2.annotations, scrollIntoView: s58.scrollIntoView || e2.scrollIntoView };
}
function we(s58, e2, t2) {
  let n6 = e2.selection, i3 = V(e2.annotations);
  return e2.userEvent && (i3 = i3.concat(S.userEvent.of(e2.userEvent))), { changes: e2.changes instanceof A ? e2.changes : A.of(e2.changes || [], t2, s58.facet(Be)), selection: n6 && (n6 instanceof x2 ? n6 : x2.single(n6.anchor, n6.head)), effects: V(e2.effects), annotations: i3, scrollIntoView: !!e2.scrollIntoView };
}
function De(s58, e2, t2) {
  let n6 = we(s58, e2.length ? e2[0] : {}, s58.doc.length);
  e2.length && e2[0].filter === false && (t2 = false);
  for (let r2 = 1; r2 < e2.length; r2++) {
    e2[r2].filter === false && (t2 = false);
    let l8 = !!e2[r2].sequential;
    n6 = Je(n6, we(s58, e2[r2], l8 ? n6.changes.newLength : s58.doc.length), l8);
  }
  let i3 = S.create(s58, n6.changes, n6.selection, n6.effects, n6.annotations, n6.scrollIntoView);
  return Ke(t2 ? He(i3) : i3);
}
function He(s58) {
  let e2 = s58.startState, t2 = true;
  for (let i3 of e2.facet(Ce)) {
    let r2 = i3(s58);
    if (r2 === false) {
      t2 = false;
      break;
    }
    Array.isArray(r2) && (t2 = t2 === true ? r2 : Ge(t2, r2));
  }
  if (t2 !== true) {
    let i3, r2;
    if (t2 === false) r2 = s58.changes.invertedDesc, i3 = A.empty(e2.doc.length);
    else {
      let l8 = s58.changes.filter(t2);
      i3 = l8.changes, r2 = l8.filtered.mapDesc(l8.changes).invertedDesc;
    }
    s58 = S.create(e2, i3, s58.selection && s58.selection.map(r2), v.mapEffects(s58.effects, r2), s58.annotations, s58.scrollIntoView);
  }
  let n6 = e2.facet(Fe);
  for (let i3 = n6.length - 1; i3 >= 0; i3--) {
    let r2 = n6[i3](s58);
    r2 instanceof S ? s58 = r2 : Array.isArray(r2) && r2.length == 1 && r2[0] instanceof S ? s58 = r2[0] : s58 = De(e2, V(r2), false);
  }
  return s58;
}
function Ke(s58) {
  let e2 = s58.startState, t2 = e2.facet(Le), n6 = s58;
  for (let i3 = t2.length - 1; i3 >= 0; i3--) {
    let r2 = t2[i3](s58);
    r2 && Object.keys(r2).length && (n6 = Je(n6, we(e2, r2, s58.changes.newLength), true));
  }
  return n6 == s58 ? s58 : S.create(e2, s58.changes, s58.selection, n6.effects, n6.annotations, n6.scrollIntoView);
}
var Qe = [];
function V(s58) {
  return s58 == null ? Qe : Array.isArray(s58) ? s58 : [s58];
}
var M = function(s58) {
  return s58[s58.Word = 0] = "Word", s58[s58.Space = 1] = "Space", s58[s58.Other = 2] = "Other", s58;
}(M || (M = {}));
var Xe = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
var ve;
try {
  ve = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Ye(s58) {
  if (ve) return ve.test(s58);
  for (let e2 = 0; e2 < s58.length; e2++) {
    let t2 = s58[e2];
    if (/\w/.test(t2) || t2 > "" && (t2.toUpperCase() != t2.toLowerCase() || Xe.test(t2))) return true;
  }
  return false;
}
function Ze(s58) {
  return (e2) => {
    if (!/\S/.test(e2)) return M.Space;
    if (Ye(e2)) return M.Word;
    for (let t2 = 0; t2 < s58.length; t2++) if (e2.indexOf(s58[t2]) > -1) return M.Word;
    return M.Other;
  };
}
var I = class s14 {
  constructor(e2, t2, n6, i3, r2, l8) {
    this.config = e2, this.doc = t2, this.selection = n6, this.values = i3, this.status = e2.statusTemplate.slice(), this.computeSlot = r2, l8 && (l8._state = this);
    for (let h3 = 0; h3 < this.config.dynamicSlots.length; h3++) U(this, h3 << 1);
    this.computeSlot = null;
  }
  field(e2, t2 = true) {
    let n6 = this.config.address[e2.id];
    if (n6 == null) {
      if (t2) throw new RangeError("Field is not present in this state");
      return;
    }
    return U(this, n6), se(this, n6);
  }
  update(...e2) {
    return De(this, e2, true);
  }
  applyTransaction(e2) {
    let t2 = this.config, { base: n6, compartments: i3 } = t2;
    for (let h3 of e2.effects) h3.is(ne.reconfigure) ? (t2 && (i3 = /* @__PURE__ */ new Map(), t2.compartments.forEach((o3, a2) => i3.set(a2, o3)), t2 = null), i3.set(h3.value.compartment, h3.value.extension)) : h3.is(v.reconfigure) ? (t2 = null, n6 = h3.value) : h3.is(v.appendConfig) && (t2 = null, n6 = V(n6).concat(h3.value));
    let r2;
    t2 ? r2 = e2.startState.values.slice() : (t2 = ie.resolve(n6, i3, this), r2 = new s14(t2, this.doc, this.selection, t2.dynamicSlots.map(() => null), (o3, a2) => a2.reconfigure(o3, this), null).values);
    let l8 = e2.startState.facet(ge) ? e2.newSelection : e2.newSelection.asSingle();
    new s14(t2, e2.newDoc, l8, r2, (h3, o3) => o3.update(h3, e2), e2);
  }
  replaceSelection(e2) {
    return typeof e2 == "string" && (e2 = this.toText(e2)), this.changeByRange((t2) => ({ changes: { from: t2.from, to: t2.to, insert: e2 }, range: x2.cursor(t2.from + e2.length) }));
  }
  changeByRange(e2) {
    let t2 = this.selection, n6 = e2(t2.ranges[0]), i3 = this.changes(n6.changes), r2 = [n6.range], l8 = V(n6.effects);
    for (let h3 = 1; h3 < t2.ranges.length; h3++) {
      let o3 = e2(t2.ranges[h3]), a2 = this.changes(o3.changes), f2 = a2.map(i3);
      for (let c4 = 0; c4 < h3; c4++) r2[c4] = r2[c4].map(f2);
      let u4 = i3.mapDesc(a2, true);
      r2.push(o3.range.map(u4)), i3 = i3.compose(f2), l8 = v.mapEffects(l8, f2).concat(v.mapEffects(V(o3.effects), u4));
    }
    return { changes: i3, selection: x2.create(r2, t2.mainIndex), effects: l8 };
  }
  changes(e2 = []) {
    return e2 instanceof A ? e2 : A.of(e2, this.doc.length, this.facet(s14.lineSeparator));
  }
  toText(e2) {
    return m2.of(e2.split(this.facet(s14.lineSeparator) || fe));
  }
  sliceDoc(e2 = 0, t2 = this.doc.length) {
    return this.doc.sliceString(e2, t2, this.lineBreak);
  }
  facet(e2) {
    let t2 = this.config.address[e2.id];
    return t2 == null ? e2.default : (U(this, t2), se(this, t2));
  }
  toJSON(e2) {
    let t2 = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e2) for (let n6 in e2) {
      let i3 = e2[n6];
      i3 instanceof q && this.config.address[i3.id] != null && (t2[n6] = i3.spec.toJSON(this.field(e2[n6]), this));
    }
    return t2;
  }
  static fromJSON(e2, t2 = {}, n6) {
    if (!e2 || typeof e2.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
    let i3 = [];
    if (n6) {
      for (let r2 in n6) if (Object.prototype.hasOwnProperty.call(e2, r2)) {
        let l8 = n6[r2], h3 = e2[r2];
        i3.push(l8.init((o3) => l8.spec.fromJSON(h3, o3)));
      }
    }
    return s14.create({ doc: e2.doc, selection: x2.fromJSON(e2.selection), extensions: t2.extensions ? i3.concat([t2.extensions]) : i3 });
  }
  static create(e2 = {}) {
    let t2 = ie.resolve(e2.extensions || [], /* @__PURE__ */ new Map()), n6 = e2.doc instanceof m2 ? e2.doc : m2.of((e2.doc || "").split(t2.staticFacet(s14.lineSeparator) || fe)), i3 = e2.selection ? e2.selection instanceof x2 ? e2.selection : x2.single(e2.selection.anchor, e2.selection.head) : x2.single(0);
    return be(i3, n6.length), t2.staticFacet(ge) || (i3 = i3.asSingle()), new s14(t2, n6, i3, t2.dynamicSlots.map(() => null), (r2, l8) => l8.create(r2), null);
  }
  get tabSize() {
    return this.facet(s14.tabSize);
  }
  get lineBreak() {
    return this.facet(s14.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Ne);
  }
  phrase(e2, ...t2) {
    for (let n6 of this.facet(s14.phrases)) if (Object.prototype.hasOwnProperty.call(n6, e2)) {
      e2 = n6[e2];
      break;
    }
    return t2.length && (e2 = e2.replace(/\$(\$|\d*)/g, (n6, i3) => {
      if (i3 == "$") return "$";
      let r2 = +(i3 || 1);
      return !r2 || r2 > t2.length ? n6 : t2[r2 - 1];
    })), e2;
  }
  languageDataAt(e2, t2, n6 = -1) {
    let i3 = [];
    for (let r2 of this.facet(Re)) for (let l8 of r2(this, t2, n6)) Object.prototype.hasOwnProperty.call(l8, e2) && i3.push(l8[e2]);
    return i3;
  }
  charCategorizer(e2) {
    return Ze(this.languageDataAt("wordChars", e2).join(""));
  }
  wordAt(e2) {
    let { text: t2, from: n6, length: i3 } = this.doc.lineAt(e2), r2 = this.charCategorizer(e2), l8 = e2 - n6, h3 = e2 - n6;
    for (; l8 > 0; ) {
      let o3 = ee(t2, l8, false);
      if (r2(t2.slice(o3, l8)) != M.Word) break;
      l8 = o3;
    }
    for (; h3 < i3; ) {
      let o3 = ee(t2, h3);
      if (r2(t2.slice(h3, o3)) != M.Word) break;
      h3 = o3;
    }
    return l8 == h3 ? null : x2.range(l8 + n6, h3 + n6);
  }
};
I.allowMultipleSelections = ge;
I.tabSize = k2.define({ combine: (s58) => s58.length ? s58[0] : 4 });
I.lineSeparator = Be;
I.readOnly = Ne;
I.phrases = k2.define({ compare(s58, e2) {
  let t2 = Object.keys(s58), n6 = Object.keys(e2);
  return t2.length == n6.length && t2.every((i3) => s58[i3] == e2[i3]);
} });
I.languageData = Re;
I.changeFilter = Ce;
I.transactionFilter = Fe;
I.transactionExtender = Le;
ne.reconfigure = v.define();
function st(s58, e2, t2 = {}) {
  let n6 = {};
  for (let i3 of s58) for (let r2 of Object.keys(i3)) {
    let l8 = i3[r2], h3 = n6[r2];
    if (h3 === void 0) n6[r2] = l8;
    else if (!(h3 === l8 || l8 === void 0)) if (Object.hasOwnProperty.call(t2, r2)) n6[r2] = t2[r2](h3, l8);
    else throw new Error("Config merge conflict for field " + r2);
  }
  for (let i3 in e2) n6[i3] === void 0 && (n6[i3] = e2[i3]);
  return n6;
}
var z = class {
  eq(e2) {
    return this == e2;
  }
  range(e2, t2 = e2) {
    return H.create(e2, t2, this);
  }
};
z.prototype.startSide = z.prototype.endSide = 0;
z.prototype.point = false;
z.prototype.mapMode = E.TrackDel;
var H = class s15 {
  constructor(e2, t2, n6) {
    this.from = e2, this.to = t2, this.value = n6;
  }
  static create(e2, t2, n6) {
    return new s15(e2, t2, n6);
  }
};
function xe(s58, e2) {
  return s58.from - e2.from || s58.value.startSide - e2.value.startSide;
}
var ye = class s16 {
  constructor(e2, t2, n6, i3) {
    this.from = e2, this.to = t2, this.value = n6, this.maxPoint = i3;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e2, t2, n6, i3 = 0) {
    let r2 = n6 ? this.to : this.from;
    for (let l8 = i3, h3 = r2.length; ; ) {
      if (l8 == h3) return l8;
      let o3 = l8 + h3 >> 1, a2 = r2[o3] - e2 || (n6 ? this.value[o3].endSide : this.value[o3].startSide) - t2;
      if (o3 == l8) return a2 >= 0 ? l8 : h3;
      a2 >= 0 ? h3 = o3 : l8 = o3 + 1;
    }
  }
  between(e2, t2, n6, i3) {
    for (let r2 = this.findIndex(t2, -1e9, true), l8 = this.findIndex(n6, 1e9, false, r2); r2 < l8; r2++) if (i3(this.from[r2] + e2, this.to[r2] + e2, this.value[r2]) === false) return false;
  }
  map(e2, t2) {
    let n6 = [], i3 = [], r2 = [], l8 = -1, h3 = -1;
    for (let o3 = 0; o3 < this.value.length; o3++) {
      let a2 = this.value[o3], f2 = this.from[o3] + e2, u4 = this.to[o3] + e2, c4, d3;
      if (f2 == u4) {
        let g6 = t2.mapPos(f2, a2.startSide, a2.mapMode);
        if (g6 == null || (c4 = d3 = g6, a2.startSide != a2.endSide && (d3 = t2.mapPos(f2, a2.endSide), d3 < c4))) continue;
      } else if (c4 = t2.mapPos(f2, a2.startSide), d3 = t2.mapPos(u4, a2.endSide), c4 > d3 || c4 == d3 && a2.startSide > 0 && a2.endSide <= 0) continue;
      (d3 - c4 || a2.endSide - a2.startSide) < 0 || (l8 < 0 && (l8 = c4), a2.point && (h3 = Math.max(h3, d3 - c4)), n6.push(a2), i3.push(c4 - l8), r2.push(d3 - l8));
    }
    return { mapped: n6.length ? new s16(i3, r2, n6, h3) : null, pos: l8 };
  }
};
var T = class s17 {
  constructor(e2, t2, n6, i3) {
    this.chunkPos = e2, this.chunk = t2, this.nextLayer = n6, this.maxPoint = i3;
  }
  static create(e2, t2, n6, i3) {
    return new s17(e2, t2, n6, i3);
  }
  get length() {
    let e2 = this.chunk.length - 1;
    return e2 < 0 ? 0 : Math.max(this.chunkEnd(e2), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e2 = this.nextLayer.size;
    for (let t2 of this.chunk) e2 += t2.value.length;
    return e2;
  }
  chunkEnd(e2) {
    return this.chunkPos[e2] + this.chunk[e2].length;
  }
  update(e2) {
    let { add: t2 = [], sort: n6 = false, filterFrom: i3 = 0, filterTo: r2 = this.length } = e2, l8 = e2.filter;
    if (t2.length == 0 && !l8) return this;
    if (n6 && (t2 = t2.slice().sort(xe)), this.isEmpty) return t2.length ? s17.of(t2) : this;
    let h3 = new le(this, null, -1).goto(0), o3 = 0, a2 = [], f2 = new re();
    for (; h3.value || o3 < t2.length; ) if (o3 < t2.length && (h3.from - t2[o3].from || h3.startSide - t2[o3].value.startSide) >= 0) {
      let u4 = t2[o3++];
      f2.addInner(u4.from, u4.to, u4.value) || a2.push(u4);
    } else h3.rangeIndex == 1 && h3.chunkIndex < this.chunk.length && (o3 == t2.length || this.chunkEnd(h3.chunkIndex) < t2[o3].from) && (!l8 || i3 > this.chunkEnd(h3.chunkIndex) || r2 < this.chunkPos[h3.chunkIndex]) && f2.addChunk(this.chunkPos[h3.chunkIndex], this.chunk[h3.chunkIndex]) ? h3.nextChunk() : ((!l8 || i3 > h3.to || r2 < h3.from || l8(h3.from, h3.to, h3.value)) && (f2.addInner(h3.from, h3.to, h3.value) || a2.push(H.create(h3.from, h3.to, h3.value))), h3.next());
    return f2.finishInner(this.nextLayer.isEmpty && !a2.length ? s17.empty : this.nextLayer.update({ add: a2, filter: l8, filterFrom: i3, filterTo: r2 }));
  }
  map(e2) {
    if (e2.empty || this.isEmpty) return this;
    let t2 = [], n6 = [], i3 = -1;
    for (let l8 = 0; l8 < this.chunk.length; l8++) {
      let h3 = this.chunkPos[l8], o3 = this.chunk[l8], a2 = e2.touchesRange(h3, h3 + o3.length);
      if (a2 === false) i3 = Math.max(i3, o3.maxPoint), t2.push(o3), n6.push(e2.mapPos(h3));
      else if (a2 === true) {
        let { mapped: f2, pos: u4 } = o3.map(h3, e2);
        f2 && (i3 = Math.max(i3, f2.maxPoint), t2.push(f2), n6.push(u4));
      }
    }
    let r2 = this.nextLayer.map(e2);
    return t2.length == 0 ? r2 : new s17(n6, t2, r2 || s17.empty, i3);
  }
  between(e2, t2, n6) {
    if (!this.isEmpty) {
      for (let i3 = 0; i3 < this.chunk.length; i3++) {
        let r2 = this.chunkPos[i3], l8 = this.chunk[i3];
        if (t2 >= r2 && e2 <= r2 + l8.length && l8.between(r2, e2 - r2, t2 - r2, n6) === false) return;
      }
      this.nextLayer.between(e2, t2, n6);
    }
  }
  iter(e2 = 0) {
    return K.from([this]).goto(e2);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e2, t2 = 0) {
    return K.from(e2).goto(t2);
  }
  static compare(e2, t2, n6, i3, r2 = -1) {
    let l8 = e2.filter((u4) => u4.maxPoint > 0 || !u4.isEmpty && u4.maxPoint >= r2), h3 = t2.filter((u4) => u4.maxPoint > 0 || !u4.isEmpty && u4.maxPoint >= r2), o3 = Ee(l8, h3, n6), a2 = new R(l8, o3, r2), f2 = new R(h3, o3, r2);
    n6.iterGaps((u4, c4, d3) => Oe(a2, u4, f2, c4, d3, i3)), n6.empty && n6.length == 0 && Oe(a2, 0, f2, 0, 0, i3);
  }
  static eq(e2, t2, n6 = 0, i3) {
    i3 == null && (i3 = 999999999);
    let r2 = e2.filter((f2) => !f2.isEmpty && t2.indexOf(f2) < 0), l8 = t2.filter((f2) => !f2.isEmpty && e2.indexOf(f2) < 0);
    if (r2.length != l8.length) return false;
    if (!r2.length) return true;
    let h3 = Ee(r2, l8), o3 = new R(r2, h3, 0).goto(n6), a2 = new R(l8, h3, 0).goto(n6);
    for (; ; ) {
      if (o3.to != a2.to || !ke(o3.active, a2.active) || o3.point && (!a2.point || !o3.point.eq(a2.point))) return false;
      if (o3.to > i3) return true;
      o3.next(), a2.next();
    }
  }
  static spans(e2, t2, n6, i3, r2 = -1) {
    let l8 = new R(e2, null, r2).goto(t2), h3 = t2, o3 = l8.openStart;
    for (; ; ) {
      let a2 = Math.min(l8.to, n6);
      if (l8.point) {
        let f2 = l8.activeForPoint(l8.to), u4 = l8.pointFrom < t2 ? f2.length + 1 : l8.point.startSide < 0 ? f2.length : Math.min(f2.length, o3);
        i3.point(h3, a2, l8.point, f2, u4, l8.pointRank), o3 = Math.min(l8.openEnd(a2), f2.length);
      } else a2 > h3 && (i3.span(h3, a2, l8.active, o3), o3 = l8.openEnd(a2));
      if (l8.to > n6) return o3 + (l8.point && l8.to > n6 ? 1 : 0);
      h3 = l8.to, l8.next();
    }
  }
  static of(e2, t2 = false) {
    let n6 = new re();
    for (let i3 of e2 instanceof H ? [e2] : t2 ? je(e2) : e2) n6.add(i3.from, i3.to, i3.value);
    return n6.finish();
  }
  static join(e2) {
    if (!e2.length) return s17.empty;
    let t2 = e2[e2.length - 1];
    for (let n6 = e2.length - 2; n6 >= 0; n6--) for (let i3 = e2[n6]; i3 != s17.empty; i3 = i3.nextLayer) t2 = new s17(i3.chunkPos, i3.chunk, t2, Math.max(i3.maxPoint, t2.maxPoint));
    return t2;
  }
};
T.empty = new T([], [], null, -1);
function je(s58) {
  if (s58.length > 1) for (let e2 = s58[0], t2 = 1; t2 < s58.length; t2++) {
    let n6 = s58[t2];
    if (xe(e2, n6) > 0) return s58.slice().sort(xe);
    e2 = n6;
  }
  return s58;
}
T.empty.nextLayer = T.empty;
var re = class s18 {
  finishChunk(e2) {
    this.chunks.push(new ye(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e2 && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e2, t2, n6) {
    this.addInner(e2, t2, n6) || (this.nextLayer || (this.nextLayer = new s18())).add(e2, t2, n6);
  }
  addInner(e2, t2, n6) {
    let i3 = e2 - this.lastTo || n6.startSide - this.last.endSide;
    if (i3 <= 0 && (e2 - this.lastFrom || n6.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return i3 < 0 ? false : (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = e2), this.from.push(e2 - this.chunkStart), this.to.push(t2 - this.chunkStart), this.last = n6, this.lastFrom = e2, this.lastTo = t2, this.value.push(n6), n6.point && (this.maxPoint = Math.max(this.maxPoint, t2 - e2)), true);
  }
  addChunk(e2, t2) {
    if ((e2 - this.lastTo || t2.value[0].startSide - this.last.endSide) < 0) return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, t2.maxPoint), this.chunks.push(t2), this.chunkPos.push(e2);
    let n6 = t2.value.length - 1;
    return this.last = t2.value[n6], this.lastFrom = t2.from[n6] + e2, this.lastTo = t2.to[n6] + e2, true;
  }
  finish() {
    return this.finishInner(T.empty);
  }
  finishInner(e2) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0) return e2;
    let t2 = T.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e2) : e2, this.setMaxPoint);
    return this.from = null, t2;
  }
};
function Ee(s58, e2, t2) {
  let n6 = /* @__PURE__ */ new Map();
  for (let r2 of s58) for (let l8 = 0; l8 < r2.chunk.length; l8++) r2.chunk[l8].maxPoint <= 0 && n6.set(r2.chunk[l8], r2.chunkPos[l8]);
  let i3 = /* @__PURE__ */ new Set();
  for (let r2 of e2) for (let l8 = 0; l8 < r2.chunk.length; l8++) {
    let h3 = n6.get(r2.chunk[l8]);
    h3 != null && (t2 ? t2.mapPos(h3) : h3) == r2.chunkPos[l8] && !t2?.touchesRange(h3, h3 + r2.chunk[l8].length) && i3.add(r2.chunk[l8]);
  }
  return i3;
}
var le = class {
  constructor(e2, t2, n6, i3 = 0) {
    this.layer = e2, this.skip = t2, this.minPoint = n6, this.rank = i3;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e2, t2 = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e2, t2, false), this;
  }
  gotoInner(e2, t2, n6) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let i3 = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(i3) || this.layer.chunkEnd(this.chunkIndex) < e2 || i3.maxPoint < this.minPoint)) break;
      this.chunkIndex++, n6 = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let i3 = this.layer.chunk[this.chunkIndex].findIndex(e2 - this.layer.chunkPos[this.chunkIndex], t2, true);
      (!n6 || this.rangeIndex < i3) && this.setRangeIndex(i3);
    }
    this.next();
  }
  forward(e2, t2) {
    (this.to - e2 || this.endSide - t2) < 0 && this.gotoInner(e2, t2, true);
  }
  next() {
    for (; ; ) if (this.chunkIndex == this.layer.chunk.length) {
      this.from = this.to = 1e9, this.value = null;
      break;
    } else {
      let e2 = this.layer.chunkPos[this.chunkIndex], t2 = this.layer.chunk[this.chunkIndex], n6 = e2 + t2.from[this.rangeIndex];
      if (this.from = n6, this.to = e2 + t2.to[this.rangeIndex], this.value = t2.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
    }
  }
  setRangeIndex(e2) {
    if (e2 == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); ) this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e2;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e2) {
    return this.from - e2.from || this.startSide - e2.startSide || this.rank - e2.rank || this.to - e2.to || this.endSide - e2.endSide;
  }
};
var K = class s19 {
  constructor(e2) {
    this.heap = e2;
  }
  static from(e2, t2 = null, n6 = -1) {
    let i3 = [];
    for (let r2 = 0; r2 < e2.length; r2++) for (let l8 = e2[r2]; !l8.isEmpty; l8 = l8.nextLayer) l8.maxPoint >= n6 && i3.push(new le(l8, t2, n6, r2));
    return i3.length == 1 ? i3[0] : new s19(i3);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e2, t2 = -1e9) {
    for (let n6 of this.heap) n6.goto(e2, t2);
    for (let n6 = this.heap.length >> 1; n6 >= 0; n6--) oe(this.heap, n6);
    return this.next(), this;
  }
  forward(e2, t2) {
    for (let n6 of this.heap) n6.forward(e2, t2);
    for (let n6 = this.heap.length >> 1; n6 >= 0; n6--) oe(this.heap, n6);
    (this.to - e2 || this.value.endSide - t2) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e2 = this.heap[0];
      this.from = e2.from, this.to = e2.to, this.value = e2.value, this.rank = e2.rank, e2.value && e2.next(), oe(this.heap, 0);
    }
  }
};
function oe(s58, e2) {
  for (let t2 = s58[e2]; ; ) {
    let n6 = (e2 << 1) + 1;
    if (n6 >= s58.length) break;
    let i3 = s58[n6];
    if (n6 + 1 < s58.length && i3.compare(s58[n6 + 1]) >= 0 && (i3 = s58[n6 + 1], n6++), t2.compare(i3) < 0) break;
    s58[n6] = t2, s58[e2] = i3, e2 = n6;
  }
}
var R = class {
  constructor(e2, t2, n6) {
    this.minPoint = n6, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = K.from(e2, t2, n6);
  }
  goto(e2, t2 = -1e9) {
    return this.cursor.goto(e2, t2), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e2, this.endSide = t2, this.openStart = -1, this.next(), this;
  }
  forward(e2, t2) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e2 || this.active[this.minActive].endSide - t2) < 0; ) this.removeActive(this.minActive);
    this.cursor.forward(e2, t2);
  }
  removeActive(e2) {
    X(this.active, e2), X(this.activeTo, e2), X(this.activeRank, e2), this.minActive = Me(this.active, this.activeTo);
  }
  addActive(e2) {
    let t2 = 0, { value: n6, to: i3, rank: r2 } = this.cursor;
    for (; t2 < this.activeRank.length && (r2 - this.activeRank[t2] || i3 - this.activeTo[t2]) > 0; ) t2++;
    Y(this.active, t2, n6), Y(this.activeTo, t2, i3), Y(this.activeRank, t2, r2), e2 && Y(e2, t2, this.cursor.from), this.minActive = Me(this.active, this.activeTo);
  }
  next() {
    let e2 = this.to, t2 = this.point;
    this.point = null;
    let n6 = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let i3 = this.minActive;
      if (i3 > -1 && (this.activeTo[i3] - this.cursor.from || this.active[i3].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[i3] > e2) {
          this.to = this.activeTo[i3], this.endSide = this.active[i3].endSide;
          break;
        }
        this.removeActive(i3), n6 && X(n6, i3);
      } else if (this.cursor.value) if (this.cursor.from > e2) {
        this.to = this.cursor.from, this.endSide = this.cursor.startSide;
        break;
      } else {
        let r2 = this.cursor.value;
        if (!r2.point) this.addActive(n6), this.cursor.next();
        else if (t2 && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
        else {
          this.point = r2, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r2.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
          break;
        }
      }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n6) {
      this.openStart = 0;
      for (let i3 = n6.length - 1; i3 >= 0 && n6[i3] < e2; i3--) this.openStart++;
    }
  }
  activeForPoint(e2) {
    if (!this.active.length) return this.active;
    let t2 = [];
    for (let n6 = this.active.length - 1; n6 >= 0 && !(this.activeRank[n6] < this.pointRank); n6--) (this.activeTo[n6] > e2 || this.activeTo[n6] == e2 && this.active[n6].endSide >= this.point.endSide) && t2.push(this.active[n6]);
    return t2.reverse();
  }
  openEnd(e2) {
    let t2 = 0;
    for (let n6 = this.activeTo.length - 1; n6 >= 0 && this.activeTo[n6] > e2; n6--) t2++;
    return t2;
  }
};
function Oe(s58, e2, t2, n6, i3, r2) {
  s58.goto(e2), t2.goto(n6);
  let l8 = n6 + i3, h3 = n6, o3 = n6 - e2;
  for (; ; ) {
    let a2 = s58.to + o3 - t2.to, f2 = a2 || s58.endSide - t2.endSide, u4 = f2 < 0 ? s58.to + o3 : t2.to, c4 = Math.min(u4, l8);
    if (s58.point || t2.point ? s58.point && t2.point && (s58.point == t2.point || s58.point.eq(t2.point)) && ke(s58.activeForPoint(s58.to), t2.activeForPoint(t2.to)) || r2.comparePoint(h3, c4, s58.point, t2.point) : c4 > h3 && !ke(s58.active, t2.active) && r2.compareRange(h3, c4, s58.active, t2.active), u4 > l8) break;
    (a2 || s58.openEnd != t2.openEnd) && r2.boundChange && r2.boundChange(u4), h3 = u4, f2 <= 0 && s58.next(), f2 >= 0 && t2.next();
  }
}
function ke(s58, e2) {
  if (s58.length != e2.length) return false;
  for (let t2 = 0; t2 < s58.length; t2++) if (s58[t2] != e2[t2] && !s58[t2].eq(e2[t2])) return false;
  return true;
}
function X(s58, e2) {
  for (let t2 = e2, n6 = s58.length - 1; t2 < n6; t2++) s58[t2] = s58[t2 + 1];
  s58.pop();
}
function Y(s58, e2, t2) {
  for (let n6 = s58.length - 1; n6 >= e2; n6--) s58[n6 + 1] = s58[n6];
  s58[e2] = t2;
}
function Me(s58, e2) {
  let t2 = -1, n6 = 1e9;
  for (let i3 = 0; i3 < e2.length; i3++) (e2[i3] - n6 || s58[i3].endSide - s58[t2].endSide) < 0 && (t2 = i3, n6 = e2[i3]);
  return t2;
}
function lt(s58, e2, t2, n6) {
  for (let i3 = 0, r2 = 0; ; ) {
    if (r2 >= e2) return i3;
    if (i3 == s58.length) break;
    r2 += s58.charCodeAt(i3) == 9 ? t2 - r2 % t2 : 1, i3 = ee(s58, i3);
  }
  return n6 === true ? -1 : s58.length;
}

// https://esm.sh/style-mod@4.1.3/denonext/style-mod.mjs
var m3 = typeof Symbol > "u" ? "__ͼ" : Symbol.for("ͼ");
var c2 = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet");
var w3 = typeof globalThis < "u" || typeof globalThis < "u" ? globalThis : {};
var T2 = class {
  constructor(e2, i3) {
    this.rules = [];
    let { finish: l8 } = i3 || {};
    function n6(t2) {
      return /^@/.test(t2) ? [t2] : t2.split(/,\s*/);
    }
    function s58(t2, a2, h3, f2) {
      let p2 = [], u4 = /^@(\w+)\b/.exec(t2[0]), g6 = u4 && u4[1] == "keyframes";
      if (u4 && a2 == null) return h3.push(t2[0] + ";");
      for (let o3 in a2) {
        let r2 = a2[o3];
        if (/&/.test(o3)) s58(o3.split(/,\s*/).map((d3) => t2.map((y7) => d3.replace(/&/, y7))).reduce((d3, y7) => d3.concat(y7)), r2, h3);
        else if (r2 && typeof r2 == "object") {
          if (!u4) throw new RangeError("The value of a property (" + o3 + ") should be a primitive value.");
          s58(n6(o3), r2, p2, g6);
        } else r2 != null && p2.push(o3.replace(/_.*/, "").replace(/[A-Z]/g, (d3) => "-" + d3.toLowerCase()) + ": " + r2 + ";");
      }
      (p2.length || g6) && h3.push((l8 && !u4 && !f2 ? t2.map(l8) : t2).join(", ") + " {" + p2.join(" ") + "}");
    }
    for (let t2 in e2) s58(n6(t2), e2[t2], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e2 = w3[m3] || 1;
    return w3[m3] = e2 + 1, "ͼ" + e2.toString(36);
  }
  static mount(e2, i3, l8) {
    let n6 = e2[c2], s58 = l8 && l8.nonce;
    n6 ? s58 && n6.setNonce(s58) : n6 = new S2(e2, s58), n6.mount(Array.isArray(i3) ? i3 : [i3], e2);
  }
};
var b3 = /* @__PURE__ */ new Map();
var S2 = class {
  constructor(e2, i3) {
    let l8 = e2.ownerDocument || e2, n6 = l8.defaultView;
    if (!e2.head && e2.adoptedStyleSheets && n6.CSSStyleSheet) {
      let s58 = b3.get(l8);
      if (s58) return e2[c2] = s58;
      this.sheet = new n6.CSSStyleSheet(), b3.set(l8, this);
    } else this.styleTag = l8.createElement("style"), i3 && this.styleTag.setAttribute("nonce", i3);
    this.modules = [], e2[c2] = this;
  }
  mount(e2, i3) {
    let l8 = this.sheet, n6 = 0, s58 = 0;
    for (let t2 = 0; t2 < e2.length; t2++) {
      let a2 = e2[t2], h3 = this.modules.indexOf(a2);
      if (h3 < s58 && h3 > -1 && (this.modules.splice(h3, 1), s58--, h3 = -1), h3 == -1) {
        if (this.modules.splice(s58++, 0, a2), l8) for (let f2 = 0; f2 < a2.rules.length; f2++) l8.insertRule(a2.rules[f2], n6++);
      } else {
        for (; s58 < h3; ) n6 += this.modules[s58++].rules.length;
        n6 += a2.rules.length, s58++;
      }
    }
    if (l8) i3.adoptedStyleSheets.indexOf(this.sheet) < 0 && (i3.adoptedStyleSheets = [this.sheet, ...i3.adoptedStyleSheets]);
    else {
      let t2 = "";
      for (let h3 = 0; h3 < this.modules.length; h3++) t2 += this.modules[h3].getRules() + `
`;
      this.styleTag.textContent = t2;
      let a2 = i3.head || i3;
      this.styleTag.parentNode != a2 && a2.insertBefore(this.styleTag, a2.firstChild);
    }
  }
  setNonce(e2) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e2 && this.styleTag.setAttribute("nonce", e2);
  }
};

// https://esm.sh/w3c-keyname@2.2.8/denonext/w3c-keyname.mjs
var t = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" };
var i = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' };
var n = typeof navigator < "u" && /Mac/.test(navigator.platform);
var y2 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (r = 0; r < 10; r++) t[48 + r] = t[96 + r] = String(r);
var r;
for (r = 1; r <= 24; r++) t[r + 111] = "F" + r;
var r;
for (r = 65; r <= 90; r++) t[r] = String.fromCharCode(r + 32), i[r] = String.fromCharCode(r);
var r;
for (a in t) i.hasOwnProperty(a) || (i[a] = t[a]);
var a;
function g2(o3) {
  var f2 = n && o3.metaKey && o3.shiftKey && !o3.ctrlKey && !o3.altKey || y2 && o3.shiftKey && o3.key && o3.key.length == 1 || o3.key == "Unidentified", e2 = !f2 && o3.key || (o3.shiftKey ? i : t)[o3.keyCode] || o3.key || "Unidentified";
  return e2 == "Esc" && (e2 = "Escape"), e2 == "Del" && (e2 = "Delete"), e2 == "Left" && (e2 = "ArrowLeft"), e2 == "Up" && (e2 = "ArrowUp"), e2 == "Right" && (e2 = "ArrowRight"), e2 == "Down" && (e2 = "ArrowDown"), e2;
}

// https://esm.sh/@codemirror/view@6.38.6/denonext/view.mjs
var V2 = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" };
var Qe2 = typeof document < "u" ? document : { documentElement: { style: {} } };
var Je2 = /Edge\/(\d+)/.exec(V2.userAgent);
var Is = /MSIE \d/.test(V2.userAgent);
var Ze2 = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(V2.userAgent);
var ze2 = !!(Is || Ze2 || Je2);
var Ui = !ze2 && /gecko\/(\d+)/i.test(V2.userAgent);
var _e = !ze2 && /Chrome\/(\d+)/.exec(V2.userAgent);
var Qi = "webkitFontSmoothing" in Qe2.documentElement.style;
var ti = !ze2 && /Apple Computer/.test(V2.vendor);
var Ji = ti && (/Mobile\/\w+/.test(V2.userAgent) || V2.maxTouchPoints > 2);
var y3 = { mac: Ji || /Mac/.test(V2.platform), windows: /Win/.test(V2.platform), linux: /Linux|X11/.test(V2.platform), ie: ze2, ie_version: Is ? Qe2.documentMode || 6 : Ze2 ? +Ze2[1] : Je2 ? +Je2[1] : 0, gecko: Ui, gecko_version: Ui ? +(/Firefox\/(\d+)/.exec(V2.userAgent) || [0, 0])[1] : 0, chrome: !!_e, chrome_version: _e ? +_e[1] : 0, ios: Ji, android: /Android\b/.test(V2.userAgent), webkit: Qi, webkit_version: Qi ? +(/\bAppleWebKit\/(\d+)/.exec(V2.userAgent) || [0, 0])[1] : 0, safari: ti, safari_version: ti ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(V2.userAgent) || [0, 0])[1] : 0, tabSize: Qe2.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
function jt(s58) {
  let t2;
  return s58.nodeType == 11 ? t2 = s58.getSelection ? s58 : s58.ownerDocument : t2 = s58, t2.getSelection();
}
function ei(s58, t2) {
  return t2 ? s58 == t2 || s58.contains(t2.nodeType != 1 ? t2.parentNode : t2) : false;
}
function me2(s58, t2) {
  if (!t2.anchorNode) return false;
  try {
    return ei(s58, t2.anchorNode);
  } catch {
    return false;
  }
}
function Tt(s58) {
  return s58.nodeType == 3 ? mt(s58, 0, s58.nodeValue.length).getClientRects() : s58.nodeType == 1 ? s58.getClientRects() : [];
}
function Ft(s58, t2, e2, i3) {
  return e2 ? Zi(s58, t2, e2, i3, -1) || Zi(s58, t2, e2, i3, 1) : false;
}
function gt(s58) {
  for (var t2 = 0; ; t2++) if (s58 = s58.previousSibling, !s58) return t2;
}
function Me2(s58) {
  return s58.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s58.nodeName);
}
function Zi(s58, t2, e2, i3, n6) {
  for (; ; ) {
    if (s58 == e2 && t2 == i3) return true;
    if (t2 == (n6 < 0 ? 0 : U2(s58))) {
      if (s58.nodeName == "DIV") return false;
      let o3 = s58.parentNode;
      if (!o3 || o3.nodeType != 1) return false;
      t2 = gt(s58) + (n6 < 0 ? 0 : 1), s58 = o3;
    } else if (s58.nodeType == 1) {
      if (s58 = s58.childNodes[t2 + (n6 < 0 ? -1 : 0)], s58.nodeType == 1 && s58.contentEditable == "false") return false;
      t2 = n6 < 0 ? U2(s58) : 0;
    } else return false;
  }
}
function U2(s58) {
  return s58.nodeType == 3 ? s58.nodeValue.length : s58.childNodes.length;
}
function ie2(s58, t2) {
  let e2 = t2 ? s58.left : s58.right;
  return { left: e2, right: e2, top: s58.top, bottom: s58.bottom };
}
function ro(s58) {
  let t2 = s58.visualViewport;
  return t2 ? { left: 0, right: t2.width, top: 0, bottom: t2.height } : { left: 0, right: s58.innerWidth, top: 0, bottom: s58.innerHeight };
}
function Ks(s58, t2) {
  let e2 = t2.width / s58.offsetWidth, i3 = t2.height / s58.offsetHeight;
  return (e2 > 0.995 && e2 < 1.005 || !isFinite(e2) || Math.abs(t2.width - s58.offsetWidth) < 1) && (e2 = 1), (i3 > 0.995 && i3 < 1.005 || !isFinite(i3) || Math.abs(t2.height - s58.offsetHeight) < 1) && (i3 = 1), { scaleX: e2, scaleY: i3 };
}
function lo(s58, t2, e2, i3, n6, o3, r2, l8) {
  let h3 = s58.ownerDocument, f2 = h3.defaultView || globalThis;
  for (let a2 = s58, c4 = false; a2 && !c4; ) if (a2.nodeType == 1) {
    let d3, u4 = a2 == h3.body, p2 = 1, g6 = 1;
    if (u4) d3 = ro(f2);
    else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(a2).position) && (c4 = true), a2.scrollHeight <= a2.clientHeight && a2.scrollWidth <= a2.clientWidth) {
        a2 = a2.assignedSlot || a2.parentNode;
        continue;
      }
      let w7 = a2.getBoundingClientRect();
      ({ scaleX: p2, scaleY: g6 } = Ks(a2, w7)), d3 = { left: w7.left, right: w7.left + a2.clientWidth * p2, top: w7.top, bottom: w7.top + a2.clientHeight * g6 };
    }
    let m7 = 0, b6 = 0;
    if (n6 == "nearest") t2.top < d3.top ? (b6 = t2.top - (d3.top + r2), e2 > 0 && t2.bottom > d3.bottom + b6 && (b6 = t2.bottom - d3.bottom + r2)) : t2.bottom > d3.bottom && (b6 = t2.bottom - d3.bottom + r2, e2 < 0 && t2.top - b6 < d3.top && (b6 = t2.top - (d3.top + r2)));
    else {
      let w7 = t2.bottom - t2.top, v3 = d3.bottom - d3.top;
      b6 = (n6 == "center" && w7 <= v3 ? t2.top + w7 / 2 - v3 / 2 : n6 == "start" || n6 == "center" && e2 < 0 ? t2.top - r2 : t2.bottom - v3 + r2) - d3.top;
    }
    if (i3 == "nearest" ? t2.left < d3.left ? (m7 = t2.left - (d3.left + o3), e2 > 0 && t2.right > d3.right + m7 && (m7 = t2.right - d3.right + o3)) : t2.right > d3.right && (m7 = t2.right - d3.right + o3, e2 < 0 && t2.left < d3.left + m7 && (m7 = t2.left - (d3.left + o3))) : m7 = (i3 == "center" ? t2.left + (t2.right - t2.left) / 2 - (d3.right - d3.left) / 2 : i3 == "start" == l8 ? t2.left - o3 : t2.right - (d3.right - d3.left) + o3) - d3.left, m7 || b6) if (u4) f2.scrollBy(m7, b6);
    else {
      let w7 = 0, v3 = 0;
      if (b6) {
        let x8 = a2.scrollTop;
        a2.scrollTop += b6 / g6, v3 = (a2.scrollTop - x8) * g6;
      }
      if (m7) {
        let x8 = a2.scrollLeft;
        a2.scrollLeft += m7 / p2, w7 = (a2.scrollLeft - x8) * p2;
      }
      t2 = { left: t2.left - w7, top: t2.top - v3, right: t2.right - w7, bottom: t2.bottom - v3 }, w7 && Math.abs(w7 - m7) < 1 && (i3 = "nearest"), v3 && Math.abs(v3 - b6) < 1 && (n6 = "nearest");
    }
    if (u4) break;
    (t2.top < d3.top || t2.bottom > d3.bottom || t2.left < d3.left || t2.right > d3.right) && (t2 = { left: Math.max(t2.left, d3.left), right: Math.min(t2.right, d3.right), top: Math.max(t2.top, d3.top), bottom: Math.min(t2.bottom, d3.bottom) }), a2 = a2.assignedSlot || a2.parentNode;
  } else if (a2.nodeType == 11) a2 = a2.host;
  else break;
}
function ho(s58) {
  let t2 = s58.ownerDocument, e2, i3;
  for (let n6 = s58.parentNode; n6 && !(n6 == t2.body || e2 && i3); ) if (n6.nodeType == 1) !i3 && n6.scrollHeight > n6.clientHeight && (i3 = n6), !e2 && n6.scrollWidth > n6.clientWidth && (e2 = n6), n6 = n6.assignedSlot || n6.parentNode;
  else if (n6.nodeType == 11) n6 = n6.host;
  else break;
  return { x: e2, y: i3 };
}
var ii = class {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t2) {
    return this.anchorNode == t2.anchorNode && this.anchorOffset == t2.anchorOffset && this.focusNode == t2.focusNode && this.focusOffset == t2.focusOffset;
  }
  setRange(t2) {
    let { anchorNode: e2, focusNode: i3 } = t2;
    this.set(e2, Math.min(t2.anchorOffset, e2 ? U2(e2) : 0), i3, Math.min(t2.focusOffset, i3 ? U2(i3) : 0));
  }
  set(t2, e2, i3, n6) {
    this.anchorNode = t2, this.anchorOffset = e2, this.focusNode = i3, this.focusOffset = n6;
  }
};
var ut = null;
y3.safari && y3.safari_version >= 26 && (ut = false);
function qs(s58) {
  if (s58.setActive) return s58.setActive();
  if (ut) return s58.focus(ut);
  let t2 = [];
  for (let e2 = s58; e2 && (t2.push(e2, e2.scrollTop, e2.scrollLeft), e2 != e2.ownerDocument); e2 = e2.parentNode) ;
  if (s58.focus(ut == null ? { get preventScroll() {
    return ut = { preventScroll: true }, true;
  } } : void 0), !ut) {
    ut = false;
    for (let e2 = 0; e2 < t2.length; ) {
      let i3 = t2[e2++], n6 = t2[e2++], o3 = t2[e2++];
      i3.scrollTop != n6 && (i3.scrollTop = n6), i3.scrollLeft != o3 && (i3.scrollLeft = o3);
    }
  }
}
var ts;
function mt(s58, t2, e2 = t2) {
  let i3 = ts || (ts = document.createRange());
  return i3.setEnd(s58, e2), i3.setStart(s58, t2), i3;
}
function Dt(s58, t2, e2, i3) {
  let n6 = { key: t2, code: t2, keyCode: e2, which: e2, cancelable: true };
  i3 && ({ altKey: n6.altKey, ctrlKey: n6.ctrlKey, shiftKey: n6.shiftKey, metaKey: n6.metaKey } = i3);
  let o3 = new KeyboardEvent("keydown", n6);
  o3.synthetic = true, s58.dispatchEvent(o3);
  let r2 = new KeyboardEvent("keyup", n6);
  return r2.synthetic = true, s58.dispatchEvent(r2), o3.defaultPrevented || r2.defaultPrevented;
}
function ao(s58) {
  for (; s58; ) {
    if (s58 && (s58.nodeType == 9 || s58.nodeType == 11 && s58.host)) return s58;
    s58 = s58.assignedSlot || s58.parentNode;
  }
  return null;
}
function _s(s58) {
  for (; s58.attributes.length; ) s58.removeAttributeNode(s58.attributes[0]);
}
function fo(s58, t2) {
  let e2 = t2.focusNode, i3 = t2.focusOffset;
  if (!e2 || t2.anchorNode != e2 || t2.anchorOffset != i3) return false;
  for (i3 = Math.min(i3, U2(e2)); ; ) if (i3) {
    if (e2.nodeType != 1) return false;
    let n6 = e2.childNodes[i3 - 1];
    n6.contentEditable == "false" ? i3-- : (e2 = n6, i3 = U2(e2));
  } else {
    if (e2 == s58) return true;
    i3 = gt(e2), e2 = e2.parentNode;
  }
}
function Ys(s58) {
  return s58.scrollTop > Math.max(1, s58.scrollHeight - s58.clientHeight - 4);
}
function js(s58, t2) {
  for (let e2 = s58, i3 = t2; ; ) {
    if (e2.nodeType == 3 && i3 > 0) return { node: e2, offset: i3 };
    if (e2.nodeType == 1 && i3 > 0) {
      if (e2.contentEditable == "false") return null;
      e2 = e2.childNodes[i3 - 1], i3 = U2(e2);
    } else if (e2.parentNode && !Me2(e2)) i3 = gt(e2), e2 = e2.parentNode;
    else return null;
  }
}
function Xs(s58, t2) {
  for (let e2 = s58, i3 = t2; ; ) {
    if (e2.nodeType == 3 && i3 < e2.nodeValue.length) return { node: e2, offset: i3 };
    if (e2.nodeType == 1 && i3 < e2.childNodes.length) {
      if (e2.contentEditable == "false") return null;
      e2 = e2.childNodes[i3], i3 = 0;
    } else if (e2.parentNode && !Me2(e2)) i3 = gt(e2) + 1, e2 = e2.parentNode;
    else return null;
  }
}
var F2 = class s21 {
  constructor(t2, e2, i3 = true) {
    this.node = t2, this.offset = e2, this.precise = i3;
  }
  static before(t2, e2) {
    return new s21(t2.parentNode, gt(t2), e2);
  }
  static after(t2, e2) {
    return new s21(t2.parentNode, gt(t2) + 1, e2);
  }
};
var qi = [];
var O2 = class s22 {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t2) {
    let e2 = this.posAtStart;
    for (let i3 of this.children) {
      if (i3 == t2) return e2;
      e2 += i3.length + i3.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t2) {
    return this.posBefore(t2) + t2.length;
  }
  sync(t2, e2) {
    if (this.flags & 2) {
      let i3 = this.dom, n6 = null, o3;
      for (let r2 of this.children) {
        if (r2.flags & 7) {
          if (!r2.dom && (o3 = n6 ? n6.nextSibling : i3.firstChild)) {
            let l8 = s22.get(o3);
            (!l8 || !l8.parent && l8.canReuseDOM(r2)) && r2.reuseDOM(o3);
          }
          r2.sync(t2, e2), r2.flags &= -8;
        }
        if (o3 = n6 ? n6.nextSibling : i3.firstChild, e2 && !e2.written && e2.node == i3 && o3 != r2.dom && (e2.written = true), r2.dom.parentNode == i3) for (; o3 && o3 != r2.dom; ) o3 = es(o3);
        else i3.insertBefore(r2.dom, o3);
        n6 = r2.dom;
      }
      for (o3 = n6 ? n6.nextSibling : i3.firstChild, o3 && e2 && e2.node == i3 && (e2.written = true); o3; ) o3 = es(o3);
    } else if (this.flags & 1) for (let i3 of this.children) i3.flags & 7 && (i3.sync(t2, e2), i3.flags &= -8);
  }
  reuseDOM(t2) {
  }
  localPosFromDOM(t2, e2) {
    let i3;
    if (t2 == this.dom) i3 = this.dom.childNodes[e2];
    else {
      let n6 = U2(t2) == 0 ? 0 : e2 == 0 ? -1 : 1;
      for (; ; ) {
        let o3 = t2.parentNode;
        if (o3 == this.dom) break;
        n6 == 0 && o3.firstChild != o3.lastChild && (t2 == o3.firstChild ? n6 = -1 : n6 = 1), t2 = o3;
      }
      n6 < 0 ? i3 = t2 : i3 = t2.nextSibling;
    }
    if (i3 == this.dom.firstChild) return 0;
    for (; i3 && !s22.get(i3); ) i3 = i3.nextSibling;
    if (!i3) return this.length;
    for (let n6 = 0, o3 = 0; ; n6++) {
      let r2 = this.children[n6];
      if (r2.dom == i3) return o3;
      o3 += r2.length + r2.breakAfter;
    }
  }
  domBoundsAround(t2, e2, i3 = 0) {
    let n6 = -1, o3 = -1, r2 = -1, l8 = -1;
    for (let h3 = 0, f2 = i3, a2 = i3; h3 < this.children.length; h3++) {
      let c4 = this.children[h3], d3 = f2 + c4.length;
      if (f2 < t2 && d3 > e2) return c4.domBoundsAround(t2, e2, f2);
      if (d3 >= t2 && n6 == -1 && (n6 = h3, o3 = f2), f2 > e2 && c4.dom.parentNode == this.dom) {
        r2 = h3, l8 = a2;
        break;
      }
      a2 = d3, f2 = d3 + c4.breakAfter;
    }
    return { from: o3, to: l8 < 0 ? i3 + this.length : l8, startDOM: (n6 ? this.children[n6 - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: r2 < this.children.length && r2 >= 0 ? this.children[r2].dom : null };
  }
  markDirty(t2 = false) {
    this.flags |= 2, this.markParentsDirty(t2);
  }
  markParentsDirty(t2) {
    for (let e2 = this.parent; e2; e2 = e2.parent) {
      if (t2 && (e2.flags |= 2), e2.flags & 1) return;
      e2.flags |= 1, t2 = false;
    }
  }
  setParent(t2) {
    this.parent != t2 && (this.parent = t2, this.flags & 7 && this.markParentsDirty(true));
  }
  setDOM(t2) {
    this.dom != t2 && (this.dom && (this.dom.cmView = null), this.dom = t2, t2.cmView = this);
  }
  get rootView() {
    for (let t2 = this; ; ) {
      let e2 = t2.parent;
      if (!e2) return t2;
      t2 = e2;
    }
  }
  replaceChildren(t2, e2, i3 = qi) {
    this.markDirty();
    for (let n6 = t2; n6 < e2; n6++) {
      let o3 = this.children[n6];
      o3.parent == this && i3.indexOf(o3) < 0 && o3.destroy();
    }
    i3.length < 250 ? this.children.splice(t2, e2 - t2, ...i3) : this.children = [].concat(this.children.slice(0, t2), i3, this.children.slice(e2));
    for (let n6 = 0; n6 < i3.length; n6++) i3[n6].setParent(this);
  }
  ignoreMutation(t2) {
    return false;
  }
  ignoreEvent(t2) {
    return false;
  }
  childCursor(t2 = this.length) {
    return new ke2(this.children, t2, this.children.length);
  }
  childPos(t2, e2 = 1) {
    return this.childCursor().findPos(t2, e2);
  }
  toString() {
    let t2 = this.constructor.name.replace("View", "");
    return t2 + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t2 == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t2) {
    return t2.cmView;
  }
  get isEditable() {
    return true;
  }
  get isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  merge(t2, e2, i3, n6, o3, r2) {
    return false;
  }
  become(t2) {
    return false;
  }
  canReuseDOM(t2) {
    return t2.constructor == this.constructor && !((this.flags | t2.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t2 of this.children) t2.parent == this && t2.destroy();
    this.parent = null;
  }
};
O2.prototype.breakAfter = 0;
function es(s58) {
  let t2 = s58.nextSibling;
  return s58.parentNode.removeChild(s58), t2;
}
var ke2 = class {
  constructor(t2, e2, i3) {
    this.children = t2, this.pos = e2, this.i = i3, this.off = 0;
  }
  findPos(t2, e2 = 1) {
    for (; ; ) {
      if (t2 > this.pos || t2 == this.pos && (e2 > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = t2 - this.pos, this;
      let i3 = this.children[--this.i];
      this.pos -= i3.length + i3.breakAfter;
    }
  }
};
function $s(s58, t2, e2, i3, n6, o3, r2, l8, h3) {
  let { children: f2 } = s58, a2 = f2.length ? f2[t2] : null, c4 = o3.length ? o3[o3.length - 1] : null, d3 = c4 ? c4.breakAfter : r2;
  if (!(t2 == i3 && a2 && !r2 && !d3 && o3.length < 2 && a2.merge(e2, n6, o3.length ? c4 : null, e2 == 0, l8, h3))) {
    if (i3 < f2.length) {
      let u4 = f2[i3];
      u4 && (n6 < u4.length || u4.breakAfter && c4?.breakAfter) ? (t2 == i3 && (u4 = u4.split(n6), n6 = 0), !d3 && c4 && u4.merge(0, n6, c4, true, 0, h3) ? o3[o3.length - 1] = u4 : ((n6 || u4.children.length && !u4.children[0].length) && u4.merge(0, n6, null, false, 0, h3), o3.push(u4))) : u4?.breakAfter && (c4 ? c4.breakAfter = 1 : r2 = 1), i3++;
    }
    for (a2 && (a2.breakAfter = r2, e2 > 0 && (!r2 && o3.length && a2.merge(e2, a2.length, o3[0], false, l8, 0) ? a2.breakAfter = o3.shift().breakAfter : (e2 < a2.length || a2.children.length && a2.children[a2.children.length - 1].length == 0) && a2.merge(e2, a2.length, null, false, l8, 0), t2++)); t2 < i3 && o3.length; ) if (f2[i3 - 1].become(o3[o3.length - 1])) i3--, o3.pop(), h3 = o3.length ? 0 : l8;
    else if (f2[t2].become(o3[0])) t2++, o3.shift(), l8 = o3.length ? 0 : h3;
    else break;
    !o3.length && t2 && i3 < f2.length && !f2[t2 - 1].breakAfter && f2[i3].merge(0, 0, f2[t2 - 1], false, l8, h3) && t2--, (t2 < i3 || o3.length) && s58.replaceChildren(t2, i3, o3);
  }
}
function Gs(s58, t2, e2, i3, n6, o3) {
  let r2 = s58.childCursor(), { i: l8, off: h3 } = r2.findPos(e2, 1), { i: f2, off: a2 } = r2.findPos(t2, -1), c4 = t2 - e2;
  for (let d3 of i3) c4 += d3.length;
  s58.length += c4, $s(s58, f2, a2, l8, h3, i3, 0, n6, o3);
}
var co = 256;
var Q2 = class s23 extends O2 {
  constructor(t2) {
    super(), this.text = t2;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t2) {
    this.setDOM(t2 || document.createTextNode(this.text));
  }
  sync(t2, e2) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e2 && e2.node == this.dom && (e2.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(t2) {
    t2.nodeType == 3 && this.createDOM(t2);
  }
  merge(t2, e2, i3) {
    return this.flags & 8 || i3 && (!(i3 instanceof s23) || this.length - (e2 - t2) + i3.length > co || i3.flags & 8) ? false : (this.text = this.text.slice(0, t2) + (i3 ? i3.text : "") + this.text.slice(e2), this.markDirty(), true);
  }
  split(t2) {
    let e2 = new s23(this.text.slice(t2));
    return this.text = this.text.slice(0, t2), this.markDirty(), e2.flags |= this.flags & 8, e2;
  }
  localPosFromDOM(t2, e2) {
    return t2 == this.dom ? e2 : e2 ? this.text.length : 0;
  }
  domAtPos(t2) {
    return new F2(this.dom, t2);
  }
  domBoundsAround(t2, e2, i3) {
    return { from: i3, to: i3 + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t2, e2) {
    return uo(this.dom, t2, e2);
  }
};
var lt2 = class s24 extends O2 {
  constructor(t2, e2 = [], i3 = 0) {
    super(), this.mark = t2, this.children = e2, this.length = i3;
    for (let n6 of e2) n6.setParent(this);
  }
  setAttrs(t2) {
    if (_s(t2), this.mark.class && (t2.className = this.mark.class), this.mark.attrs) for (let e2 in this.mark.attrs) t2.setAttribute(e2, this.mark.attrs[e2]);
    return t2;
  }
  canReuseDOM(t2) {
    return super.canReuseDOM(t2) && !((this.flags | t2.flags) & 8);
  }
  reuseDOM(t2) {
    t2.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t2), this.flags |= 6);
  }
  sync(t2, e2) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t2, e2);
  }
  merge(t2, e2, i3, n6, o3, r2) {
    return i3 && (!(i3 instanceof s24 && i3.mark.eq(this.mark)) || t2 && o3 <= 0 || e2 < this.length && r2 <= 0) ? false : (Gs(this, t2, e2, i3 ? i3.children.slice() : [], o3 - 1, r2 - 1), this.markDirty(), true);
  }
  split(t2) {
    let e2 = [], i3 = 0, n6 = -1, o3 = 0;
    for (let l8 of this.children) {
      let h3 = i3 + l8.length;
      h3 > t2 && e2.push(i3 < t2 ? l8.split(t2 - i3) : l8), n6 < 0 && i3 >= t2 && (n6 = o3), i3 = h3, o3++;
    }
    let r2 = this.length - t2;
    return this.length = t2, n6 > -1 && (this.children.length = n6, this.markDirty()), new s24(this.mark, e2, r2);
  }
  domAtPos(t2) {
    return Us(this, t2);
  }
  coordsAt(t2, e2) {
    return Js(this, t2, e2);
  }
};
function uo(s58, t2, e2) {
  let i3 = s58.nodeValue.length;
  t2 > i3 && (t2 = i3);
  let n6 = t2, o3 = t2, r2 = 0;
  t2 == 0 && e2 < 0 || t2 == i3 && e2 >= 0 ? y3.chrome || y3.gecko || (t2 ? (n6--, r2 = 1) : o3 < i3 && (o3++, r2 = -1)) : e2 < 0 ? n6-- : o3 < i3 && o3++;
  let l8 = mt(s58, n6, o3).getClientRects();
  if (!l8.length) return null;
  let h3 = l8[(r2 ? r2 < 0 : e2 >= 0) ? 0 : l8.length - 1];
  return y3.safari && !r2 && h3.width == 0 && (h3 = Array.prototype.find.call(l8, (f2) => f2.width) || h3), r2 ? ie2(h3, r2 < 0) : h3 || null;
}
var Xt = class s25 extends O2 {
  static create(t2, e2, i3) {
    return new s25(t2, e2, i3);
  }
  constructor(t2, e2, i3) {
    super(), this.widget = t2, this.length = e2, this.side = i3, this.prevWidget = null;
  }
  split(t2) {
    let e2 = s25.create(this.widget, this.length - t2, this.side);
    return this.length -= t2, e2;
  }
  sync(t2) {
    (!this.dom || !this.widget.updateDOM(this.dom, t2)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t2)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(t2, e2, i3, n6, o3, r2) {
    return i3 && (!(i3 instanceof s25) || !this.widget.compare(i3.widget) || t2 > 0 && o3 <= 0 || e2 < this.length && r2 <= 0) ? false : (this.length = t2 + (i3 ? i3.length : 0) + (this.length - e2), true);
  }
  become(t2) {
    return t2 instanceof s25 && t2.side == this.side && this.widget.constructor == t2.widget.constructor ? (this.widget.compare(t2.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t2.widget, this.length = t2.length, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t2) {
    return this.widget.ignoreEvent(t2);
  }
  get overrideDOMText() {
    if (this.length == 0) return m2.empty;
    let t2 = this;
    for (; t2.parent; ) t2 = t2.parent;
    let { view: e2 } = t2, i3 = e2 && e2.state.doc, n6 = this.posAtStart;
    return i3 ? i3.slice(n6, n6 + this.length) : m2.empty;
  }
  domAtPos(t2) {
    return (this.length ? t2 == 0 : this.side > 0) ? F2.before(this.dom) : F2.after(this.dom, t2 == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t2, e2) {
    let i3 = this.widget.coordsAt(this.dom, t2, e2);
    if (i3) return i3;
    let n6 = this.dom.getClientRects(), o3 = null;
    if (!n6.length) return null;
    let r2 = this.side ? this.side < 0 : t2 > 0;
    for (let l8 = r2 ? n6.length - 1 : 0; o3 = n6[l8], !(t2 > 0 ? l8 == 0 : l8 == n6.length - 1 || o3.top < o3.bottom); l8 += r2 ? -1 : 1) ;
    return ie2(o3, !r2);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
};
var $t = class s26 extends O2 {
  constructor(t2) {
    super(), this.side = t2;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(t2) {
    return t2 instanceof s26 && t2.side == this.side;
  }
  split() {
    return new s26(this.side);
  }
  sync() {
    if (!this.dom) {
      let t2 = document.createElement("img");
      t2.className = "cm-widgetBuffer", t2.setAttribute("aria-hidden", "true"), this.setDOM(t2);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t2) {
    return this.side > 0 ? F2.before(this.dom) : F2.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t2) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return m2.empty;
  }
  get isHidden() {
    return true;
  }
};
Q2.prototype.children = Xt.prototype.children = $t.prototype.children = qi;
function Us(s58, t2) {
  let e2 = s58.dom, { children: i3 } = s58, n6 = 0;
  for (let o3 = 0; n6 < i3.length; n6++) {
    let r2 = i3[n6], l8 = o3 + r2.length;
    if (!(l8 == o3 && r2.getSide() <= 0)) {
      if (t2 > o3 && t2 < l8 && r2.dom.parentNode == e2) return r2.domAtPos(t2 - o3);
      if (t2 <= o3) break;
      o3 = l8;
    }
  }
  for (let o3 = n6; o3 > 0; o3--) {
    let r2 = i3[o3 - 1];
    if (r2.dom.parentNode == e2) return r2.domAtPos(r2.length);
  }
  for (let o3 = n6; o3 < i3.length; o3++) {
    let r2 = i3[o3];
    if (r2.dom.parentNode == e2) return r2.domAtPos(0);
  }
  return new F2(e2, 0);
}
function Qs(s58, t2, e2) {
  let i3, { children: n6 } = s58;
  e2 > 0 && t2 instanceof lt2 && n6.length && (i3 = n6[n6.length - 1]) instanceof lt2 && i3.mark.eq(t2.mark) ? Qs(i3, t2.children[0], e2 - 1) : (n6.push(t2), t2.setParent(s58)), s58.length += t2.length;
}
function Js(s58, t2, e2) {
  let i3 = null, n6 = -1, o3 = null, r2 = -1;
  function l8(f2, a2) {
    for (let c4 = 0, d3 = 0; c4 < f2.children.length && d3 <= a2; c4++) {
      let u4 = f2.children[c4], p2 = d3 + u4.length;
      p2 >= a2 && (u4.children.length ? l8(u4, a2 - d3) : (!o3 || o3.isHidden && (e2 > 0 || go(o3, u4))) && (p2 > a2 || d3 == p2 && u4.getSide() > 0) ? (o3 = u4, r2 = a2 - d3) : (d3 < a2 || d3 == p2 && u4.getSide() < 0 && !u4.isHidden) && (i3 = u4, n6 = a2 - d3)), d3 = p2;
    }
  }
  l8(s58, t2);
  let h3 = (e2 < 0 ? i3 : o3) || i3 || o3;
  return h3 ? h3.coordsAt(Math.max(0, h3 == i3 ? n6 : r2), e2) : po(s58);
}
function po(s58) {
  let t2 = s58.dom.lastChild;
  if (!t2) return s58.dom.getBoundingClientRect();
  let e2 = Tt(t2);
  return e2[e2.length - 1] || null;
}
function go(s58, t2) {
  let e2 = s58.coordsAt(0, 1), i3 = t2.coordsAt(0, 1);
  return e2 && i3 && i3.top < e2.bottom;
}
function si(s58, t2) {
  for (let e2 in s58) e2 == "class" && t2.class ? t2.class += " " + s58.class : e2 == "style" && t2.style ? t2.style += ";" + s58.style : t2[e2] = s58[e2];
  return t2;
}
var is = /* @__PURE__ */ Object.create(null);
function Ae2(s58, t2, e2) {
  if (s58 == t2) return true;
  s58 || (s58 = is), t2 || (t2 = is);
  let i3 = Object.keys(s58), n6 = Object.keys(t2);
  if (i3.length - (e2 && i3.indexOf(e2) > -1 ? 1 : 0) != n6.length - (e2 && n6.indexOf(e2) > -1 ? 1 : 0)) return false;
  for (let o3 of i3) if (o3 != e2 && (n6.indexOf(o3) == -1 || s58[o3] !== t2[o3])) return false;
  return true;
}
function ni(s58, t2, e2) {
  let i3 = false;
  if (t2) for (let n6 in t2) e2 && n6 in e2 || (i3 = true, n6 == "style" ? s58.style.cssText = "" : s58.removeAttribute(n6));
  if (e2) for (let n6 in e2) t2 && t2[n6] == e2[n6] || (i3 = true, n6 == "style" ? s58.style.cssText = e2[n6] : s58.setAttribute(n6, e2[n6]));
  return i3;
}
function mo(s58) {
  let t2 = /* @__PURE__ */ Object.create(null);
  for (let e2 = 0; e2 < s58.attributes.length; e2++) {
    let i3 = s58.attributes[e2];
    t2[i3.name] = i3.value;
  }
  return t2;
}
var ht = class {
  eq(t2) {
    return false;
  }
  updateDOM(t2, e2) {
    return false;
  }
  compare(t2) {
    return this == t2 || this.constructor == t2.constructor && this.eq(t2);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t2) {
    return true;
  }
  coordsAt(t2, e2, i3) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(t2) {
  }
};
var W2 = function(s58) {
  return s58[s58.Text = 0] = "Text", s58[s58.WidgetBefore = 1] = "WidgetBefore", s58[s58.WidgetAfter = 2] = "WidgetAfter", s58[s58.WidgetRange = 3] = "WidgetRange", s58;
}(W2 || (W2 = {}));
var T3 = class extends z {
  constructor(t2, e2, i3, n6) {
    super(), this.startSide = t2, this.endSide = e2, this.widget = i3, this.spec = n6;
  }
  get heightRelevant() {
    return false;
  }
  static mark(t2) {
    return new Gt(t2);
  }
  static widget(t2) {
    let e2 = Math.max(-1e4, Math.min(1e4, t2.side || 0)), i3 = !!t2.block;
    return e2 += i3 && !t2.inlineOrder ? e2 > 0 ? 3e8 : -4e8 : e2 > 0 ? 1e8 : -1e8, new at(t2, e2, e2, i3, t2.widget || null, false);
  }
  static replace(t2) {
    let e2 = !!t2.block, i3, n6;
    if (t2.isBlockGap) i3 = -5e8, n6 = 4e8;
    else {
      let { start: o3, end: r2 } = Zs(t2, e2);
      i3 = (o3 ? e2 ? -3e8 : -1 : 5e8) - 1, n6 = (r2 ? e2 ? 2e8 : 1 : -6e8) + 1;
    }
    return new at(t2, i3, n6, e2, t2.widget || null, true);
  }
  static line(t2) {
    return new Ut(t2);
  }
  static set(t2, e2 = false) {
    return T.of(t2, e2);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
};
T3.none = T.empty;
var Gt = class s27 extends T3 {
  constructor(t2) {
    let { start: e2, end: i3 } = Zs(t2);
    super(e2 ? -1 : 5e8, i3 ? 1 : -6e8, null, t2), this.tagName = t2.tagName || "span", this.class = t2.class || "", this.attrs = t2.attributes || null;
  }
  eq(t2) {
    var e2, i3;
    return this == t2 || t2 instanceof s27 && this.tagName == t2.tagName && (this.class || ((e2 = this.attrs) === null || e2 === void 0 ? void 0 : e2.class)) == (t2.class || ((i3 = t2.attrs) === null || i3 === void 0 ? void 0 : i3.class)) && Ae2(this.attrs, t2.attrs, "class");
  }
  range(t2, e2 = t2) {
    if (t2 >= e2) throw new RangeError("Mark decorations may not be empty");
    return super.range(t2, e2);
  }
};
Gt.prototype.point = false;
var Ut = class s28 extends T3 {
  constructor(t2) {
    super(-2e8, -2e8, null, t2);
  }
  eq(t2) {
    return t2 instanceof s28 && this.spec.class == t2.spec.class && Ae2(this.spec.attributes, t2.spec.attributes);
  }
  range(t2, e2 = t2) {
    if (e2 != t2) throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t2, e2);
  }
};
Ut.prototype.mapMode = E.TrackBefore;
Ut.prototype.point = true;
var at = class s29 extends T3 {
  constructor(t2, e2, i3, n6, o3, r2) {
    super(e2, i3, o3, t2), this.block = n6, this.isReplace = r2, this.mapMode = n6 ? e2 <= 0 ? E.TrackBefore : E.TrackAfter : E.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? W2.WidgetRange : this.startSide <= 0 ? W2.WidgetBefore : W2.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t2) {
    return t2 instanceof s29 && bo(this.widget, t2.widget) && this.block == t2.block && this.startSide == t2.startSide && this.endSide == t2.endSide;
  }
  range(t2, e2 = t2) {
    if (this.isReplace && (t2 > e2 || t2 == e2 && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e2 != t2) throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t2, e2);
  }
};
at.prototype.point = true;
function Zs(s58, t2 = false) {
  let { inclusiveStart: e2, inclusiveEnd: i3 } = s58;
  return e2 == null && (e2 = s58.inclusive), i3 == null && (i3 = s58.inclusive), { start: e2 ?? t2, end: i3 ?? t2 };
}
function bo(s58, t2) {
  return s58 == t2 || !!(s58 && t2 && s58.compare(t2));
}
function be2(s58, t2, e2, i3 = 0) {
  let n6 = e2.length - 1;
  n6 >= 0 && e2[n6] + i3 >= s58 ? e2[n6] = Math.max(e2[n6], t2) : e2.push(s58, t2);
}
var P = class s30 extends O2 {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(t2, e2, i3, n6, o3, r2) {
    if (i3) {
      if (!(i3 instanceof s30)) return false;
      this.dom || i3.transferDOM(this);
    }
    return n6 && this.setDeco(i3 ? i3.attrs : null), Gs(this, t2, e2, i3 ? i3.children.slice() : [], o3, r2), true;
  }
  split(t2) {
    let e2 = new s30();
    if (e2.breakAfter = this.breakAfter, this.length == 0) return e2;
    let { i: i3, off: n6 } = this.childPos(t2);
    n6 && (e2.append(this.children[i3].split(n6), 0), this.children[i3].merge(n6, this.children[i3].length, null, false, 0, 0), i3++);
    for (let o3 = i3; o3 < this.children.length; o3++) e2.append(this.children[o3], 0);
    for (; i3 > 0 && this.children[i3 - 1].length == 0; ) this.children[--i3].destroy();
    return this.children.length = i3, this.markDirty(), this.length = t2, e2;
  }
  transferDOM(t2) {
    this.dom && (this.markDirty(), t2.setDOM(this.dom), t2.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t2) {
    Ae2(this.attrs, t2) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t2);
  }
  append(t2, e2) {
    Qs(this, t2, e2);
  }
  addLineDeco(t2) {
    let e2 = t2.spec.attributes, i3 = t2.spec.class;
    e2 && (this.attrs = si(e2, this.attrs || {})), i3 && (this.attrs = si({ class: i3 }, this.attrs || {}));
  }
  domAtPos(t2) {
    return Us(this, t2);
  }
  reuseDOM(t2) {
    t2.nodeName == "DIV" && (this.setDOM(t2), this.flags |= 6);
  }
  sync(t2, e2) {
    var i3;
    this.dom ? this.flags & 4 && (_s(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (ni(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t2, e2);
    let n6 = this.dom.lastChild;
    for (; n6 && O2.get(n6) instanceof lt2; ) n6 = n6.lastChild;
    if (!n6 || !this.length || n6.nodeName != "BR" && ((i3 = O2.get(n6)) === null || i3 === void 0 ? void 0 : i3.isEditable) == false && (!y3.ios || !this.children.some((o3) => o3 instanceof Q2))) {
      let o3 = document.createElement("BR");
      o3.cmIgnore = true, this.dom.appendChild(o3);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let t2 = 0, e2;
    for (let i3 of this.children) {
      if (!(i3 instanceof Q2) || /[^ -~]/.test(i3.text)) return null;
      let n6 = Tt(i3.dom);
      if (n6.length != 1) return null;
      t2 += n6[0].width, e2 = n6[0].height;
    }
    return t2 ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t2 / this.length, textHeight: e2 } : null;
  }
  coordsAt(t2, e2) {
    let i3 = Js(this, t2, e2);
    if (!this.children.length && i3 && this.parent) {
      let { heightOracle: n6 } = this.parent.view.viewState, o3 = i3.bottom - i3.top;
      if (Math.abs(o3 - n6.lineHeight) < 2 && n6.textHeight < o3) {
        let r2 = (o3 - n6.textHeight) / 2;
        return { top: i3.top + r2, bottom: i3.bottom - r2, left: i3.left, right: i3.left };
      }
    }
    return i3;
  }
  become(t2) {
    return t2 instanceof s30 && this.children.length == 0 && t2.children.length == 0 && Ae2(this.attrs, t2.attrs) && this.breakAfter == t2.breakAfter;
  }
  covers() {
    return true;
  }
  static find(t2, e2) {
    for (let i3 = 0, n6 = 0; i3 < t2.children.length; i3++) {
      let o3 = t2.children[i3], r2 = n6 + o3.length;
      if (r2 >= e2) {
        if (o3 instanceof s30) return o3;
        if (r2 > e2) break;
      }
      n6 = r2 + o3.breakAfter;
    }
    return null;
  }
};
var pt = class s31 extends O2 {
  constructor(t2, e2, i3) {
    super(), this.widget = t2, this.length = e2, this.deco = i3, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t2, e2, i3, n6, o3, r2) {
    return i3 && (!(i3 instanceof s31) || !this.widget.compare(i3.widget) || t2 > 0 && o3 <= 0 || e2 < this.length && r2 <= 0) ? false : (this.length = t2 + (i3 ? i3.length : 0) + (this.length - e2), true);
  }
  domAtPos(t2) {
    return t2 == 0 ? F2.before(this.dom) : F2.after(this.dom, t2 == this.length);
  }
  split(t2) {
    let e2 = this.length - t2;
    this.length = t2;
    let i3 = new s31(this.widget, e2, this.deco);
    return i3.breakAfter = this.breakAfter, i3;
  }
  get children() {
    return qi;
  }
  sync(t2) {
    (!this.dom || !this.widget.updateDOM(this.dom, t2)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t2)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : m2.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t2) {
    return t2 instanceof s31 && t2.widget.constructor == this.widget.constructor ? (t2.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t2.widget, this.length = t2.length, this.deco = t2.deco, this.breakAfter = t2.breakAfter, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t2) {
    return this.widget.ignoreEvent(t2);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(t2, e2) {
    let i3 = this.widget.coordsAt(this.dom, t2, e2);
    return i3 || (this.widget instanceof Qt ? null : ie2(this.dom.getBoundingClientRect(), this.length ? t2 == 0 : e2 <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t2) {
    let { startSide: e2, endSide: i3 } = this.deco;
    return e2 == i3 ? false : t2 < 0 ? e2 < 0 : i3 > 0;
  }
};
var Qt = class extends ht {
  constructor(t2) {
    super(), this.height = t2;
  }
  toDOM() {
    let t2 = document.createElement("div");
    return t2.className = "cm-gap", this.updateDOM(t2), t2;
  }
  eq(t2) {
    return t2.height == this.height;
  }
  updateDOM(t2) {
    return t2.style.height = this.height + "px", true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
};
var Wt = class s32 {
  constructor(t2, e2, i3, n6) {
    this.doc = t2, this.pos = e2, this.end = i3, this.disallowBlockEffectsFor = n6, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t2.iter(), this.skip = e2;
  }
  posCovered() {
    if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t2 = this.content[this.content.length - 1];
    return !(t2.breakAfter || t2 instanceof pt && t2.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new P()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer(t2 = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(le2(new $t(-1), t2), t2.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t2) {
    this.flushBuffer(), this.curLine = null, this.content.push(t2);
  }
  finish(t2) {
    this.pendingBuffer && t2 <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t2 && this.content.length && this.content[this.content.length - 1] instanceof pt) && this.getLine();
  }
  buildText(t2, e2, i3) {
    for (; t2 > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r2, lineBreak: l8, done: h3 } = this.cursor.next(this.skip);
        if (this.skip = 0, h3) throw new Error("Ran out of text content when drawing inline views");
        if (l8) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t2--;
          continue;
        } else this.text = r2, this.textOff = 0;
      }
      let n6 = Math.min(this.text.length - this.textOff, t2), o3 = Math.min(n6, 512);
      this.flushBuffer(e2.slice(e2.length - i3)), this.getLine().append(le2(new Q2(this.text.slice(this.textOff, this.textOff + o3)), e2), i3), this.atCursorPos = true, this.textOff += o3, t2 -= o3, i3 = n6 <= o3 ? 0 : e2.length;
    }
  }
  span(t2, e2, i3, n6) {
    this.buildText(e2 - t2, i3, n6), this.pos = e2, this.openStart < 0 && (this.openStart = n6);
  }
  point(t2, e2, i3, n6, o3, r2) {
    if (this.disallowBlockEffectsFor[r2] && i3 instanceof at) {
      if (i3.block) throw new RangeError("Block decorations may not be specified via plugins");
      if (e2 > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l8 = e2 - t2;
    if (i3 instanceof at) if (i3.block) i3.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new pt(i3.widget || ft.block, l8, i3));
    else {
      let h3 = Xt.create(i3.widget || ft.inline, l8, l8 ? 0 : i3.startSide), f2 = this.atCursorPos && !h3.isEditable && o3 <= n6.length && (t2 < e2 || i3.startSide > 0), a2 = !h3.isEditable && (t2 < e2 || o3 > n6.length || i3.startSide <= 0), c4 = this.getLine();
      this.pendingBuffer == 2 && !f2 && !h3.isEditable && (this.pendingBuffer = 0), this.flushBuffer(n6), f2 && (c4.append(le2(new $t(1), n6), o3), o3 = n6.length + Math.max(0, o3 - n6.length)), c4.append(le2(h3, n6), o3), this.atCursorPos = a2, this.pendingBuffer = a2 ? t2 < e2 || o3 > n6.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n6.slice());
    }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i3);
    l8 && (this.textOff + l8 <= this.text.length ? this.textOff += l8 : (this.skip += l8 - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e2), this.openStart < 0 && (this.openStart = o3);
  }
  static build(t2, e2, i3, n6, o3) {
    let r2 = new s32(t2, e2, i3, o3);
    return r2.openEnd = T.spans(n6, e2, i3, r2), r2.openStart < 0 && (r2.openStart = r2.openEnd), r2.finish(r2.openEnd), r2;
  }
};
function le2(s58, t2) {
  for (let e2 of t2) s58 = new lt2(e2, [s58], s58.length);
  return s58;
}
var ft = class extends ht {
  constructor(t2) {
    super(), this.tag = t2;
  }
  eq(t2) {
    return t2.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t2) {
    return t2.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
};
ft.inline = new ft("span");
ft.block = new ft("div");
var L2 = function(s58) {
  return s58[s58.LTR = 0] = "LTR", s58[s58.RTL = 1] = "RTL", s58;
}(L2 || (L2 = {}));
var bt = L2.LTR;
var _i = L2.RTL;
function tn(s58) {
  let t2 = [];
  for (let e2 = 0; e2 < s58.length; e2++) t2.push(1 << +s58[e2]);
  return t2;
}
var yo = tn("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
var wo = tn("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
var oi = /* @__PURE__ */ Object.create(null);
var j2 = [];
for (let s58 of ["()", "[]", "{}"]) {
  let t2 = s58.charCodeAt(0), e2 = s58.charCodeAt(1);
  oi[t2] = e2, oi[e2] = -t2;
}
function en(s58) {
  return s58 <= 247 ? yo[s58] : 1424 <= s58 && s58 <= 1524 ? 2 : 1536 <= s58 && s58 <= 1785 ? wo[s58 - 1536] : 1774 <= s58 && s58 <= 2220 ? 4 : 8192 <= s58 && s58 <= 8204 ? 256 : 64336 <= s58 && s58 <= 65023 ? 4 : 1;
}
var xo = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
var $2 = class {
  get dir() {
    return this.level % 2 ? _i : bt;
  }
  constructor(t2, e2, i3) {
    this.from = t2, this.to = e2, this.level = i3;
  }
  side(t2, e2) {
    return this.dir == e2 == t2 ? this.to : this.from;
  }
  forward(t2, e2) {
    return t2 == (this.dir == e2);
  }
  static find(t2, e2, i3, n6) {
    let o3 = -1;
    for (let r2 = 0; r2 < t2.length; r2++) {
      let l8 = t2[r2];
      if (l8.from <= e2 && l8.to >= e2) {
        if (l8.level == i3) return r2;
        (o3 < 0 || (n6 != 0 ? n6 < 0 ? l8.from < e2 : l8.to > e2 : t2[o3].level > l8.level)) && (o3 = r2);
      }
    }
    if (o3 < 0) throw new RangeError("Index out of range");
    return o3;
  }
};
function sn(s58, t2) {
  if (s58.length != t2.length) return false;
  for (let e2 = 0; e2 < s58.length; e2++) {
    let i3 = s58[e2], n6 = t2[e2];
    if (i3.from != n6.from || i3.to != n6.to || i3.direction != n6.direction || !sn(i3.inner, n6.inner)) return false;
  }
  return true;
}
var D2 = [];
function vo(s58, t2, e2, i3, n6) {
  for (let o3 = 0; o3 <= i3.length; o3++) {
    let r2 = o3 ? i3[o3 - 1].to : t2, l8 = o3 < i3.length ? i3[o3].from : e2, h3 = o3 ? 256 : n6;
    for (let f2 = r2, a2 = h3, c4 = h3; f2 < l8; f2++) {
      let d3 = en(s58.charCodeAt(f2));
      d3 == 512 ? d3 = a2 : d3 == 8 && c4 == 4 && (d3 = 16), D2[f2] = d3 == 4 ? 2 : d3, d3 & 7 && (c4 = d3), a2 = d3;
    }
    for (let f2 = r2, a2 = h3, c4 = h3; f2 < l8; f2++) {
      let d3 = D2[f2];
      if (d3 == 128) f2 < l8 - 1 && a2 == D2[f2 + 1] && a2 & 24 ? d3 = D2[f2] = a2 : D2[f2] = 256;
      else if (d3 == 64) {
        let u4 = f2 + 1;
        for (; u4 < l8 && D2[u4] == 64; ) u4++;
        let p2 = f2 && a2 == 8 || u4 < e2 && D2[u4] == 8 ? c4 == 1 ? 1 : 8 : 256;
        for (let g6 = f2; g6 < u4; g6++) D2[g6] = p2;
        f2 = u4 - 1;
      } else d3 == 8 && c4 == 1 && (D2[f2] = 1);
      a2 = d3, d3 & 7 && (c4 = d3);
    }
  }
}
function So(s58, t2, e2, i3, n6) {
  let o3 = n6 == 1 ? 2 : 1;
  for (let r2 = 0, l8 = 0, h3 = 0; r2 <= i3.length; r2++) {
    let f2 = r2 ? i3[r2 - 1].to : t2, a2 = r2 < i3.length ? i3[r2].from : e2;
    for (let c4 = f2, d3, u4, p2; c4 < a2; c4++) if (u4 = oi[d3 = s58.charCodeAt(c4)]) if (u4 < 0) {
      for (let g6 = l8 - 3; g6 >= 0; g6 -= 3) if (j2[g6 + 1] == -u4) {
        let m7 = j2[g6 + 2], b6 = m7 & 2 ? n6 : m7 & 4 ? m7 & 1 ? o3 : n6 : 0;
        b6 && (D2[c4] = D2[j2[g6]] = b6), l8 = g6;
        break;
      }
    } else {
      if (j2.length == 189) break;
      j2[l8++] = c4, j2[l8++] = d3, j2[l8++] = h3;
    }
    else if ((p2 = D2[c4]) == 2 || p2 == 1) {
      let g6 = p2 == n6;
      h3 = g6 ? 0 : 1;
      for (let m7 = l8 - 3; m7 >= 0; m7 -= 3) {
        let b6 = j2[m7 + 2];
        if (b6 & 2) break;
        if (g6) j2[m7 + 2] |= 2;
        else {
          if (b6 & 4) break;
          j2[m7 + 2] |= 4;
        }
      }
    }
  }
}
function Co(s58, t2, e2, i3) {
  for (let n6 = 0, o3 = i3; n6 <= e2.length; n6++) {
    let r2 = n6 ? e2[n6 - 1].to : s58, l8 = n6 < e2.length ? e2[n6].from : t2;
    for (let h3 = r2; h3 < l8; ) {
      let f2 = D2[h3];
      if (f2 == 256) {
        let a2 = h3 + 1;
        for (; ; ) if (a2 == l8) {
          if (n6 == e2.length) break;
          a2 = e2[n6++].to, l8 = n6 < e2.length ? e2[n6].from : t2;
        } else if (D2[a2] == 256) a2++;
        else break;
        let c4 = o3 == 1, d3 = (a2 < t2 ? D2[a2] : i3) == 1, u4 = c4 == d3 ? c4 ? 1 : 2 : i3;
        for (let p2 = a2, g6 = n6, m7 = g6 ? e2[g6 - 1].to : s58; p2 > h3; ) p2 == m7 && (p2 = e2[--g6].from, m7 = g6 ? e2[g6 - 1].to : s58), D2[--p2] = u4;
        h3 = a2;
      } else o3 = f2, h3++;
    }
  }
}
function ri(s58, t2, e2, i3, n6, o3, r2) {
  let l8 = i3 % 2 ? 2 : 1;
  if (i3 % 2 == n6 % 2) for (let h3 = t2, f2 = 0; h3 < e2; ) {
    let a2 = true, c4 = false;
    if (f2 == o3.length || h3 < o3[f2].from) {
      let g6 = D2[h3];
      g6 != l8 && (a2 = false, c4 = g6 == 16);
    }
    let d3 = !a2 && l8 == 1 ? [] : null, u4 = a2 ? i3 : i3 + 1, p2 = h3;
    t: for (; ; ) if (f2 < o3.length && p2 == o3[f2].from) {
      if (c4) break t;
      let g6 = o3[f2];
      if (!a2) for (let m7 = g6.to, b6 = f2 + 1; ; ) {
        if (m7 == e2) break t;
        if (b6 < o3.length && o3[b6].from == m7) m7 = o3[b6++].to;
        else {
          if (D2[m7] == l8) break t;
          break;
        }
      }
      if (f2++, d3) d3.push(g6);
      else {
        g6.from > h3 && r2.push(new $2(h3, g6.from, u4));
        let m7 = g6.direction == bt != !(u4 % 2);
        li(s58, m7 ? i3 + 1 : i3, n6, g6.inner, g6.from, g6.to, r2), h3 = g6.to;
      }
      p2 = g6.to;
    } else {
      if (p2 == e2 || (a2 ? D2[p2] != l8 : D2[p2] == l8)) break;
      p2++;
    }
    d3 ? ri(s58, h3, p2, i3 + 1, n6, d3, r2) : h3 < p2 && r2.push(new $2(h3, p2, u4)), h3 = p2;
  }
  else for (let h3 = e2, f2 = o3.length; h3 > t2; ) {
    let a2 = true, c4 = false;
    if (!f2 || h3 > o3[f2 - 1].to) {
      let g6 = D2[h3 - 1];
      g6 != l8 && (a2 = false, c4 = g6 == 16);
    }
    let d3 = !a2 && l8 == 1 ? [] : null, u4 = a2 ? i3 : i3 + 1, p2 = h3;
    t: for (; ; ) if (f2 && p2 == o3[f2 - 1].to) {
      if (c4) break t;
      let g6 = o3[--f2];
      if (!a2) for (let m7 = g6.from, b6 = f2; ; ) {
        if (m7 == t2) break t;
        if (b6 && o3[b6 - 1].to == m7) m7 = o3[--b6].from;
        else {
          if (D2[m7 - 1] == l8) break t;
          break;
        }
      }
      if (d3) d3.push(g6);
      else {
        g6.to < h3 && r2.push(new $2(g6.to, h3, u4));
        let m7 = g6.direction == bt != !(u4 % 2);
        li(s58, m7 ? i3 + 1 : i3, n6, g6.inner, g6.from, g6.to, r2), h3 = g6.from;
      }
      p2 = g6.from;
    } else {
      if (p2 == t2 || (a2 ? D2[p2 - 1] != l8 : D2[p2 - 1] == l8)) break;
      p2--;
    }
    d3 ? ri(s58, p2, h3, i3 + 1, n6, d3, r2) : p2 < h3 && r2.push(new $2(p2, h3, u4)), h3 = p2;
  }
}
function li(s58, t2, e2, i3, n6, o3, r2) {
  let l8 = t2 % 2 ? 2 : 1;
  vo(s58, n6, o3, i3, l8), So(s58, n6, o3, i3, l8), Co(n6, o3, i3, l8), ri(s58, n6, o3, t2, e2, i3, r2);
}
function nn(s58, t2, e2) {
  if (!s58) return [new $2(0, 0, t2 == _i ? 1 : 0)];
  if (t2 == bt && !e2.length && !xo.test(s58)) return on(s58.length);
  if (e2.length) for (; s58.length > D2.length; ) D2[D2.length] = 256;
  let i3 = [], n6 = t2 == bt ? 0 : 1;
  return li(s58, n6, n6, e2, 0, s58.length, i3), i3;
}
function on(s58) {
  return [new $2(0, s58, 0)];
}
var rn = "";
function ln(s58, t2, e2, i3, n6) {
  var o3;
  let r2 = i3.head - s58.from, l8 = $2.find(t2, r2, (o3 = i3.bidiLevel) !== null && o3 !== void 0 ? o3 : -1, i3.assoc), h3 = t2[l8], f2 = h3.side(n6, e2);
  if (r2 == f2) {
    let d3 = l8 += n6 ? 1 : -1;
    if (d3 < 0 || d3 >= t2.length) return null;
    h3 = t2[l8 = d3], r2 = h3.side(!n6, e2), f2 = h3.side(n6, e2);
  }
  let a2 = ee(s58.text, r2, h3.forward(n6, e2));
  (a2 < h3.from || a2 > h3.to) && (a2 = f2), rn = s58.text.slice(Math.min(r2, a2), Math.max(r2, a2));
  let c4 = l8 == (n6 ? t2.length - 1 : 0) ? null : t2[l8 + (n6 ? 1 : -1)];
  return c4 && a2 == f2 && c4.level + (n6 ? 0 : 1) < h3.level ? x2.cursor(c4.side(!n6, e2) + s58.from, c4.forward(n6, e2) ? 1 : -1, c4.level) : x2.cursor(a2 + s58.from, h3.forward(n6, e2) ? -1 : 1, h3.level);
}
function Mo(s58, t2, e2) {
  for (let i3 = t2; i3 < e2; i3++) {
    let n6 = en(s58.charCodeAt(i3));
    if (n6 == 1) return bt;
    if (n6 == 2 || n6 == 4) return _i;
  }
  return bt;
}
var hn = k2.define();
var an = k2.define();
var fn = k2.define();
var cn = k2.define();
var hi = k2.define();
var dn = k2.define();
var un = k2.define();
var Yi = k2.define();
var ji = k2.define();
var pn = k2.define({ combine: (s58) => s58.some((t2) => t2) });
var gn = k2.define({ combine: (s58) => s58.some((t2) => t2) });
var mn = k2.define();
var zt = class s33 {
  constructor(t2, e2 = "nearest", i3 = "nearest", n6 = 5, o3 = 5, r2 = false) {
    this.range = t2, this.y = e2, this.x = i3, this.yMargin = n6, this.xMargin = o3, this.isSnapshot = r2;
  }
  map(t2) {
    return t2.empty ? this : new s33(this.range.map(t2), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t2) {
    return this.range.to <= t2.doc.length ? this : new s33(x2.cursor(t2.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
};
var he = v.define({ map: (s58, t2) => s58.map(t2) });
var bn = v.define();
function G2(s58, t2, e2) {
  let i3 = s58.facet(cn);
  i3.length ? i3[0](t2) : globalThis.onerror && globalThis.onerror(String(t2), e2, void 0, void 0, t2) || (e2 ? console.error(e2 + ":", t2) : console.error(t2));
}
var et2 = k2.define({ combine: (s58) => s58.length ? s58[0] : true });
var ko = 0;
var St = k2.define({ combine(s58) {
  return s58.filter((t2, e2) => {
    for (let i3 = 0; i3 < e2; i3++) if (s58[i3].plugin == t2.plugin) return false;
    return true;
  });
} });
var N2 = class s34 {
  constructor(t2, e2, i3, n6, o3) {
    this.id = t2, this.create = e2, this.domEventHandlers = i3, this.domEventObservers = n6, this.baseExtensions = o3(this), this.extension = this.baseExtensions.concat(St.of({ plugin: this, arg: void 0 }));
  }
  of(t2) {
    return this.baseExtensions.concat(St.of({ plugin: this, arg: t2 }));
  }
  static define(t2, e2) {
    let { eventHandlers: i3, eventObservers: n6, provide: o3, decorations: r2 } = e2 || {};
    return new s34(ko++, t2, i3, n6, (l8) => {
      let h3 = [];
      return r2 && h3.push(Jt.of((f2) => {
        let a2 = f2.plugin(l8);
        return a2 ? r2(a2) : T3.none;
      })), o3 && h3.push(o3(l8)), h3;
    });
  }
  static fromClass(t2, e2) {
    return s34.define((i3, n6) => new t2(i3, n6), e2);
  }
};
var It = class {
  constructor(t2) {
    this.spec = t2, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(t2) {
    if (this.value) {
      if (this.mustUpdate) {
        let e2 = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(e2);
        } catch (i3) {
          if (G2(e2.state, i3, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.plugin.create(t2, this.spec.arg);
    } catch (e2) {
      G2(t2.state, e2, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(t2) {
    var e2;
    if (!((e2 = this.value) === null || e2 === void 0) && e2.destroy) try {
      this.value.destroy();
    } catch (i3) {
      G2(t2.state, i3, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
};
var yn = k2.define();
var Ie2 = k2.define();
var Jt = k2.define();
var wn = k2.define();
var se2 = k2.define();
var xn = k2.define();
function ss(s58, t2) {
  let e2 = s58.state.facet(xn);
  if (!e2.length) return e2;
  let i3 = e2.map((o3) => o3 instanceof Function ? o3(s58) : o3), n6 = [];
  return T.spans(i3, t2.from, t2.to, { point() {
  }, span(o3, r2, l8, h3) {
    let f2 = o3 - t2.from, a2 = r2 - t2.from, c4 = n6;
    for (let d3 = l8.length - 1; d3 >= 0; d3--, h3--) {
      let u4 = l8[d3].spec.bidiIsolate, p2;
      if (u4 == null && (u4 = Mo(t2.text, f2, a2)), h3 > 0 && c4.length && (p2 = c4[c4.length - 1]).to == f2 && p2.direction == u4) p2.to = a2, c4 = p2.inner;
      else {
        let g6 = { from: f2, to: a2, direction: u4, inner: [] };
        c4.push(g6), c4 = g6.inner;
      }
    }
  } }), n6;
}
var vn = k2.define();
function Xi(s58) {
  let t2 = 0, e2 = 0, i3 = 0, n6 = 0;
  for (let o3 of s58.state.facet(vn)) {
    let r2 = o3(s58);
    r2 && (r2.left != null && (t2 = Math.max(t2, r2.left)), r2.right != null && (e2 = Math.max(e2, r2.right)), r2.top != null && (i3 = Math.max(i3, r2.top)), r2.bottom != null && (n6 = Math.max(n6, r2.bottom)));
  }
  return { left: t2, right: e2, top: i3, bottom: n6 };
}
var Bt = k2.define();
var _2 = class s35 {
  constructor(t2, e2, i3, n6) {
    this.fromA = t2, this.toA = e2, this.fromB = i3, this.toB = n6;
  }
  join(t2) {
    return new s35(Math.min(this.fromA, t2.fromA), Math.max(this.toA, t2.toA), Math.min(this.fromB, t2.fromB), Math.max(this.toB, t2.toB));
  }
  addToSet(t2) {
    let e2 = t2.length, i3 = this;
    for (; e2 > 0; e2--) {
      let n6 = t2[e2 - 1];
      if (!(n6.fromA > i3.toA)) {
        if (n6.toA < i3.fromA) break;
        i3 = i3.join(n6), t2.splice(e2 - 1, 1);
      }
    }
    return t2.splice(e2, 0, i3), t2;
  }
  static extendWithRanges(t2, e2) {
    if (e2.length == 0) return t2;
    let i3 = [];
    for (let n6 = 0, o3 = 0, r2 = 0, l8 = 0; ; n6++) {
      let h3 = n6 == t2.length ? null : t2[n6], f2 = r2 - l8, a2 = h3 ? h3.fromB : 1e9;
      for (; o3 < e2.length && e2[o3] < a2; ) {
        let c4 = e2[o3], d3 = e2[o3 + 1], u4 = Math.max(l8, c4), p2 = Math.min(a2, d3);
        if (u4 <= p2 && new s35(u4 + f2, p2 + f2, u4, p2).addToSet(i3), d3 > a2) break;
        o3 += 2;
      }
      if (!h3) return i3;
      new s35(h3.fromA, h3.toA, h3.fromB, h3.toB).addToSet(i3), r2 = h3.toA, l8 = h3.toB;
    }
  }
};
var De2 = class s36 {
  constructor(t2, e2, i3) {
    this.view = t2, this.state = e2, this.transactions = i3, this.flags = 0, this.startState = t2.state, this.changes = A.empty(this.startState.doc.length);
    for (let o3 of i3) this.changes = this.changes.compose(o3.changes);
    let n6 = [];
    this.changes.iterChangedRanges((o3, r2, l8, h3) => n6.push(new _2(o3, r2, l8, h3))), this.changedRanges = n6;
  }
  static create(t2, e2, i3) {
    return new s36(t2, e2, i3);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((t2) => t2.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
};
var Oe2 = class extends O2 {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t2) {
    super(), this.view = t2, this.decorations = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = T3.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t2.contentDOM), this.children = [new P()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new _2(0, 0, 0, t2.state.doc.length)], 0, null);
  }
  update(t2) {
    var e2;
    let i3 = t2.changedRanges;
    this.minWidth > 0 && i3.length && (i3.every(({ fromA: f2, toA: a2 }) => a2 < this.minWidthFrom || f2 > this.minWidthTo) ? (this.minWidthFrom = t2.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t2.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t2);
    let n6 = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e2 = this.domChanged) === null || e2 === void 0) && e2.newSel ? n6 = this.domChanged.newSel.head : !Lo(t2.changes, this.hasComposition) && !t2.selectionSet && (n6 = t2.state.selection.main.head));
    let o3 = n6 > -1 ? Do(this.view, t2.changes, n6) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: f2, to: a2 } = this.hasComposition;
      i3 = new _2(f2, a2, t2.changes.mapPos(f2, -1), t2.changes.mapPos(a2, 1)).addToSet(i3.slice());
    }
    this.hasComposition = o3 ? { from: o3.range.fromB, to: o3.range.toB } : null, (y3.ie || y3.chrome) && !o3 && t2 && t2.state.doc.lines != t2.startState.doc.lines && (this.forceSelection = true);
    let r2 = this.decorations, l8 = this.updateDeco(), h3 = Ro(r2, l8, t2.changes);
    return i3 = _2.extendWithRanges(i3, h3), !(this.flags & 7) && i3.length == 0 ? false : (this.updateInner(i3, t2.startState.doc.length, o3), t2.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(t2, e2, i3) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(t2, e2, i3);
    let { observer: n6 } = this.view;
    n6.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r2 = y3.chrome || y3.ios ? { node: n6.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, r2), this.flags &= -8, r2 && (r2.written || n6.selectionRange.focusNode != r2.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((r2) => r2.flags &= -9);
    let o3 = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let r2 of this.children) r2 instanceof pt && r2.widget instanceof Qt && o3.push(r2.dom);
    n6.updateGaps(o3);
  }
  updateChildren(t2, e2, i3) {
    let n6 = i3 ? i3.range.addToSet(t2.slice()) : t2, o3 = this.childCursor(e2);
    for (let r2 = n6.length - 1; ; r2--) {
      let l8 = r2 >= 0 ? n6[r2] : null;
      if (!l8) break;
      let { fromA: h3, toA: f2, fromB: a2, toB: c4 } = l8, d3, u4, p2, g6;
      if (i3 && i3.range.fromB < c4 && i3.range.toB > a2) {
        let x8 = Wt.build(this.view.state.doc, a2, i3.range.fromB, this.decorations, this.dynamicDecorationMap), S7 = Wt.build(this.view.state.doc, i3.range.toB, c4, this.decorations, this.dynamicDecorationMap);
        u4 = x8.breakAtStart, p2 = x8.openStart, g6 = S7.openEnd;
        let C6 = this.compositionView(i3);
        S7.breakAtStart ? C6.breakAfter = 1 : S7.content.length && C6.merge(C6.length, C6.length, S7.content[0], false, S7.openStart, 0) && (C6.breakAfter = S7.content[0].breakAfter, S7.content.shift()), x8.content.length && C6.merge(0, 0, x8.content[x8.content.length - 1], true, 0, x8.openEnd) && x8.content.pop(), d3 = x8.content.concat(C6).concat(S7.content);
      } else ({ content: d3, breakAtStart: u4, openStart: p2, openEnd: g6 } = Wt.build(this.view.state.doc, a2, c4, this.decorations, this.dynamicDecorationMap));
      let { i: m7, off: b6 } = o3.findPos(f2, 1), { i: w7, off: v3 } = o3.findPos(h3, -1);
      $s(this, w7, v3, m7, b6, d3, u4, p2, g6);
    }
    i3 && this.fixCompositionDOM(i3);
  }
  updateEditContextFormatting(t2) {
    this.editContextFormatting = this.editContextFormatting.map(t2.changes);
    for (let e2 of t2.transactions) for (let i3 of e2.effects) i3.is(bn) && (this.editContextFormatting = i3.value);
  }
  compositionView(t2) {
    let e2 = new Q2(t2.text.nodeValue);
    e2.flags |= 8;
    for (let { deco: n6 } of t2.marks) e2 = new lt2(n6, [e2], e2.length);
    let i3 = new P();
    return i3.append(e2, 0), i3;
  }
  fixCompositionDOM(t2) {
    let e2 = (o3, r2) => {
      r2.flags |= 8 | (r2.children.some((h3) => h3.flags & 7) ? 1 : 0), this.markedForComposition.add(r2);
      let l8 = O2.get(o3);
      l8 && l8 != r2 && (l8.dom = null), r2.setDOM(o3);
    }, i3 = this.childPos(t2.range.fromB, 1), n6 = this.children[i3.i];
    e2(t2.line, n6);
    for (let o3 = t2.marks.length - 1; o3 >= -1; o3--) i3 = n6.childPos(i3.off, 1), n6 = n6.children[i3.i], e2(o3 >= 0 ? t2.marks[o3].node : t2.text, n6);
  }
  updateSelection(t2 = false, e2 = false) {
    (t2 || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i3 = this.view.root.activeElement, n6 = i3 == this.dom, o3 = !n6 && !(this.view.state.facet(et2) || this.dom.tabIndex > -1) && me2(this.dom, this.view.observer.selectionRange) && !(i3 && this.dom.contains(i3));
    if (!(n6 || e2 || o3)) return;
    let r2 = this.forceSelection;
    this.forceSelection = false;
    let l8 = this.view.state.selection.main, h3 = this.moveToLine(this.domAtPos(l8.anchor)), f2 = l8.empty ? h3 : this.moveToLine(this.domAtPos(l8.head));
    if (y3.gecko && l8.empty && !this.hasComposition && Ao(h3)) {
      let c4 = document.createTextNode("");
      this.view.observer.ignore(() => h3.node.insertBefore(c4, h3.node.childNodes[h3.offset] || null)), h3 = f2 = new F2(c4, 0), r2 = true;
    }
    let a2 = this.view.observer.selectionRange;
    (r2 || !a2.focusNode || (!Ft(h3.node, h3.offset, a2.anchorNode, a2.anchorOffset) || !Ft(f2.node, f2.offset, a2.focusNode, a2.focusOffset)) && !this.suppressWidgetCursorChange(a2, l8)) && (this.view.observer.ignore(() => {
      y3.android && y3.chrome && this.dom.contains(a2.focusNode) && Eo(a2.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let c4 = jt(this.view.root);
      if (c4) if (l8.empty) {
        if (y3.gecko) {
          let d3 = Oo(h3.node, h3.offset);
          if (d3 && d3 != 3) {
            let u4 = (d3 == 1 ? js : Xs)(h3.node, h3.offset);
            u4 && (h3 = new F2(u4.node, u4.offset));
          }
        }
        c4.collapse(h3.node, h3.offset), l8.bidiLevel != null && c4.caretBidiLevel !== void 0 && (c4.caretBidiLevel = l8.bidiLevel);
      } else if (c4.extend) {
        c4.collapse(h3.node, h3.offset);
        try {
          c4.extend(f2.node, f2.offset);
        } catch {
        }
      } else {
        let d3 = document.createRange();
        l8.anchor > l8.head && ([h3, f2] = [f2, h3]), d3.setEnd(f2.node, f2.offset), d3.setStart(h3.node, h3.offset), c4.removeAllRanges(), c4.addRange(d3);
      }
      o3 && this.view.root.activeElement == this.dom && (this.dom.blur(), i3 && i3.focus());
    }), this.view.observer.setSelectionRange(h3, f2)), this.impreciseAnchor = h3.precise ? null : new F2(a2.anchorNode, a2.anchorOffset), this.impreciseHead = f2.precise ? null : new F2(a2.focusNode, a2.focusOffset);
  }
  suppressWidgetCursorChange(t2, e2) {
    return this.hasComposition && e2.empty && Ft(t2.focusNode, t2.focusOffset, t2.anchorNode, t2.anchorOffset) && this.posFromDOM(t2.focusNode, t2.focusOffset) == e2.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: t2 } = this, e2 = t2.state.selection.main, i3 = jt(t2.root), { anchorNode: n6, anchorOffset: o3 } = t2.observer.selectionRange;
    if (!i3 || !e2.empty || !e2.assoc || !i3.modify) return;
    let r2 = P.find(this, e2.head);
    if (!r2) return;
    let l8 = r2.posAtStart;
    if (e2.head == l8 || e2.head == l8 + r2.length) return;
    let h3 = this.coordsAt(e2.head, -1), f2 = this.coordsAt(e2.head, 1);
    if (!h3 || !f2 || h3.bottom > f2.top) return;
    let a2 = this.domAtPos(e2.head + e2.assoc);
    i3.collapse(a2.node, a2.offset), i3.modify("move", e2.assoc < 0 ? "forward" : "backward", "lineboundary"), t2.observer.readSelectionRange();
    let c4 = t2.observer.selectionRange;
    t2.docView.posFromDOM(c4.anchorNode, c4.anchorOffset) != e2.from && i3.collapse(n6, o3);
  }
  moveToLine(t2) {
    let e2 = this.dom, i3;
    if (t2.node != e2) return t2;
    for (let n6 = t2.offset; !i3 && n6 < e2.childNodes.length; n6++) {
      let o3 = O2.get(e2.childNodes[n6]);
      o3 instanceof P && (i3 = o3.domAtPos(0));
    }
    for (let n6 = t2.offset - 1; !i3 && n6 >= 0; n6--) {
      let o3 = O2.get(e2.childNodes[n6]);
      o3 instanceof P && (i3 = o3.domAtPos(o3.length));
    }
    return i3 ? new F2(i3.node, i3.offset, true) : t2;
  }
  nearest(t2) {
    for (let e2 = t2; e2; ) {
      let i3 = O2.get(e2);
      if (i3 && i3.rootView == this) return i3;
      e2 = e2.parentNode;
    }
    return null;
  }
  posFromDOM(t2, e2) {
    let i3 = this.nearest(t2);
    if (!i3) throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i3.localPosFromDOM(t2, e2) + i3.posAtStart;
  }
  domAtPos(t2) {
    let { i: e2, off: i3 } = this.childCursor().findPos(t2, -1);
    for (; e2 < this.children.length - 1; ) {
      let n6 = this.children[e2];
      if (i3 < n6.length || n6 instanceof P) break;
      e2++, i3 = 0;
    }
    return this.children[e2].domAtPos(i3);
  }
  coordsAt(t2, e2) {
    let i3 = null, n6 = 0;
    for (let o3 = this.length, r2 = this.children.length - 1; r2 >= 0; r2--) {
      let l8 = this.children[r2], h3 = o3 - l8.breakAfter, f2 = h3 - l8.length;
      if (h3 < t2) break;
      if (f2 <= t2 && (f2 < t2 || l8.covers(-1)) && (h3 > t2 || l8.covers(1)) && (!i3 || l8 instanceof P && !(i3 instanceof P && e2 >= 0))) i3 = l8, n6 = f2;
      else if (i3 && f2 == t2 && h3 == t2 && l8 instanceof pt && Math.abs(e2) < 2) {
        if (l8.deco.startSide < 0) break;
        r2 && (i3 = null);
      }
      o3 = f2;
    }
    return i3 ? i3.coordsAt(t2 - n6, e2) : null;
  }
  coordsForChar(t2) {
    let { i: e2, off: i3 } = this.childPos(t2, 1), n6 = this.children[e2];
    if (!(n6 instanceof P)) return null;
    for (; n6.children.length; ) {
      let { i: l8, off: h3 } = n6.childPos(i3, 1);
      for (; ; l8++) {
        if (l8 == n6.children.length) return null;
        if ((n6 = n6.children[l8]).length) break;
      }
      i3 = h3;
    }
    if (!(n6 instanceof Q2)) return null;
    let o3 = ee(n6.text, i3);
    if (o3 == i3) return null;
    let r2 = mt(n6.dom, i3, o3).getClientRects();
    for (let l8 = 0; l8 < r2.length; l8++) {
      let h3 = r2[l8];
      if (l8 == r2.length - 1 || h3.top < h3.bottom && h3.left < h3.right) return h3;
    }
    return null;
  }
  measureVisibleLineHeights(t2) {
    let e2 = [], { from: i3, to: n6 } = t2, o3 = this.view.contentDOM.clientWidth, r2 = o3 > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l8 = -1, h3 = this.view.textDirection == L2.LTR;
    for (let f2 = 0, a2 = 0; a2 < this.children.length; a2++) {
      let c4 = this.children[a2], d3 = f2 + c4.length;
      if (d3 > n6) break;
      if (f2 >= i3) {
        let u4 = c4.dom.getBoundingClientRect();
        if (e2.push(u4.height), r2) {
          let p2 = c4.dom.lastChild, g6 = p2 ? Tt(p2) : [];
          if (g6.length) {
            let m7 = g6[g6.length - 1], b6 = h3 ? m7.right - u4.left : u4.right - m7.left;
            b6 > l8 && (l8 = b6, this.minWidth = o3, this.minWidthFrom = f2, this.minWidthTo = d3);
          }
        }
      }
      f2 = d3 + c4.breakAfter;
    }
    return e2;
  }
  textDirectionAt(t2) {
    let { i: e2 } = this.childPos(t2, 1);
    return getComputedStyle(this.children[e2].dom).direction == "rtl" ? L2.RTL : L2.LTR;
  }
  measureTextSize() {
    for (let o3 of this.children) if (o3 instanceof P) {
      let r2 = o3.measureTextSize();
      if (r2) return r2;
    }
    let t2 = document.createElement("div"), e2, i3, n6;
    return t2.className = "cm-line", t2.style.width = "99999px", t2.style.position = "absolute", t2.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t2);
      let o3 = Tt(t2.firstChild)[0];
      e2 = t2.getBoundingClientRect().height, i3 = o3 ? o3.width / 27 : 7, n6 = o3 ? o3.height : e2, t2.remove();
    }), { lineHeight: e2, charWidth: i3, textHeight: n6 };
  }
  childCursor(t2 = this.length) {
    let e2 = this.children.length;
    return e2 && (t2 -= this.children[--e2].length), new ke2(this.children, t2, e2);
  }
  computeBlockGapDeco() {
    let t2 = [], e2 = this.view.viewState;
    for (let i3 = 0, n6 = 0; ; n6++) {
      let o3 = n6 == e2.viewports.length ? null : e2.viewports[n6], r2 = o3 ? o3.from - 1 : this.length;
      if (r2 > i3) {
        let l8 = (e2.lineBlockAt(r2).bottom - e2.lineBlockAt(i3).top) / this.view.scaleY;
        t2.push(T3.replace({ widget: new Qt(l8), block: true, inclusive: true, isBlockGap: true }).range(i3, r2));
      }
      if (!o3) break;
      i3 = o3.to + 1;
    }
    return T3.set(t2);
  }
  updateDeco() {
    let t2 = 1, e2 = this.view.state.facet(Jt).map((o3) => (this.dynamicDecorationMap[t2++] = typeof o3 == "function") ? o3(this.view) : o3), i3 = false, n6 = this.view.state.facet(wn).map((o3, r2) => {
      let l8 = typeof o3 == "function";
      return l8 && (i3 = true), l8 ? o3(this.view) : o3;
    });
    for (n6.length && (this.dynamicDecorationMap[t2++] = i3, e2.push(T.join(n6))), this.decorations = [this.editContextFormatting, ...e2, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t2 < this.decorations.length; ) this.dynamicDecorationMap[t2++] = false;
    return this.decorations;
  }
  scrollIntoView(t2) {
    if (t2.isSnapshot) {
      let f2 = this.view.viewState.lineBlockAt(t2.range.head);
      this.view.scrollDOM.scrollTop = f2.top - t2.yMargin, this.view.scrollDOM.scrollLeft = t2.xMargin;
      return;
    }
    for (let f2 of this.view.state.facet(mn)) try {
      if (f2(this.view, t2.range, t2)) return true;
    } catch (a2) {
      G2(this.view.state, a2, "scroll handler");
    }
    let { range: e2 } = t2, i3 = this.coordsAt(e2.head, e2.empty ? e2.assoc : e2.head > e2.anchor ? -1 : 1), n6;
    if (!i3) return;
    !e2.empty && (n6 = this.coordsAt(e2.anchor, e2.anchor > e2.head ? -1 : 1)) && (i3 = { left: Math.min(i3.left, n6.left), top: Math.min(i3.top, n6.top), right: Math.max(i3.right, n6.right), bottom: Math.max(i3.bottom, n6.bottom) });
    let o3 = Xi(this.view), r2 = { left: i3.left - o3.left, top: i3.top - o3.top, right: i3.right + o3.right, bottom: i3.bottom + o3.bottom }, { offsetWidth: l8, offsetHeight: h3 } = this.view.scrollDOM;
    lo(this.view.scrollDOM, r2, e2.head < e2.anchor ? -1 : 1, t2.x, t2.y, Math.max(Math.min(t2.xMargin, l8), -l8), Math.max(Math.min(t2.yMargin, h3), -h3), this.view.textDirection == L2.LTR);
  }
};
function Ao(s58) {
  return s58.node.nodeType == 1 && s58.node.firstChild && (s58.offset == 0 || s58.node.childNodes[s58.offset - 1].contentEditable == "false") && (s58.offset == s58.node.childNodes.length || s58.node.childNodes[s58.offset].contentEditable == "false");
}
function Sn(s58, t2) {
  let e2 = s58.observer.selectionRange;
  if (!e2.focusNode) return null;
  let i3 = js(e2.focusNode, e2.focusOffset), n6 = Xs(e2.focusNode, e2.focusOffset), o3 = i3 || n6;
  if (n6 && i3 && n6.node != i3.node) {
    let l8 = O2.get(n6.node);
    if (!l8 || l8 instanceof Q2 && l8.text != n6.node.nodeValue) o3 = n6;
    else if (s58.docView.lastCompositionAfterCursor) {
      let h3 = O2.get(i3.node);
      !h3 || h3 instanceof Q2 && h3.text != i3.node.nodeValue || (o3 = n6);
    }
  }
  if (s58.docView.lastCompositionAfterCursor = o3 != i3, !o3) return null;
  let r2 = t2 - o3.offset;
  return { from: r2, to: r2 + o3.node.nodeValue.length, node: o3.node };
}
function Do(s58, t2, e2) {
  let i3 = Sn(s58, e2);
  if (!i3) return null;
  let { node: n6, from: o3, to: r2 } = i3, l8 = n6.nodeValue;
  if (/[\n\r]/.test(l8) || s58.state.doc.sliceString(i3.from, i3.to) != l8) return null;
  let h3 = t2.invertedDesc, f2 = new _2(h3.mapPos(o3), h3.mapPos(r2), o3, r2), a2 = [];
  for (let c4 = n6.parentNode; ; c4 = c4.parentNode) {
    let d3 = O2.get(c4);
    if (d3 instanceof lt2) a2.push({ node: c4, deco: d3.mark });
    else {
      if (d3 instanceof P || c4.nodeName == "DIV" && c4.parentNode == s58.contentDOM) return { range: f2, text: n6, marks: a2, line: c4 };
      if (c4 != s58.contentDOM) a2.push({ node: c4, deco: new Gt({ inclusive: true, attributes: mo(c4), tagName: c4.tagName.toLowerCase() }) });
      else return null;
    }
  }
}
function Oo(s58, t2) {
  return s58.nodeType != 1 ? 0 : (t2 && s58.childNodes[t2 - 1].contentEditable == "false" ? 1 : 0) | (t2 < s58.childNodes.length && s58.childNodes[t2].contentEditable == "false" ? 2 : 0);
}
var To = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t2, e2) {
    be2(t2, e2, this.changes);
  }
  comparePoint(t2, e2) {
    be2(t2, e2, this.changes);
  }
  boundChange(t2) {
    be2(t2, t2, this.changes);
  }
};
function Ro(s58, t2, e2) {
  let i3 = new To();
  return T.compare(s58, t2, e2, i3), i3.changes;
}
function Eo(s58, t2) {
  for (let e2 = s58; e2 && e2 != t2; e2 = e2.assignedSlot || e2.parentNode) if (e2.nodeType == 1 && e2.contentEditable == "false") return true;
  return false;
}
function Lo(s58, t2) {
  let e2 = false;
  return t2 && s58.iterChangedRanges((i3, n6) => {
    i3 < t2.to && n6 > t2.from && (e2 = true);
  }), e2;
}
function Bo(s58, t2, e2 = 1) {
  let i3 = s58.charCategorizer(t2), n6 = s58.doc.lineAt(t2), o3 = t2 - n6.from;
  if (n6.length == 0) return x2.cursor(t2);
  o3 == 0 ? e2 = 1 : o3 == n6.length && (e2 = -1);
  let r2 = o3, l8 = o3;
  e2 < 0 ? r2 = ee(n6.text, o3, false) : l8 = ee(n6.text, o3);
  let h3 = i3(n6.text.slice(r2, l8));
  for (; r2 > 0; ) {
    let f2 = ee(n6.text, r2, false);
    if (i3(n6.text.slice(f2, r2)) != h3) break;
    r2 = f2;
  }
  for (; l8 < n6.length; ) {
    let f2 = ee(n6.text, l8);
    if (i3(n6.text.slice(l8, f2)) != h3) break;
    l8 = f2;
  }
  return x2.range(r2 + n6.from, l8 + n6.from);
}
function Po(s58, t2) {
  return t2.left > s58 ? t2.left - s58 : Math.max(0, s58 - t2.right);
}
function Ho(s58, t2) {
  return t2.top > s58 ? t2.top - s58 : Math.max(0, s58 - t2.bottom);
}
function Ye2(s58, t2) {
  return s58.top < t2.bottom - 1 && s58.bottom > t2.top + 1;
}
function ns(s58, t2) {
  return t2 < s58.top ? { top: t2, left: s58.left, right: s58.right, bottom: s58.bottom } : s58;
}
function os(s58, t2) {
  return t2 > s58.bottom ? { top: s58.top, left: s58.left, right: s58.right, bottom: t2 } : s58;
}
function ai(s58, t2, e2) {
  let i3, n6, o3, r2, l8 = false, h3, f2, a2, c4;
  for (let p2 = s58.firstChild; p2; p2 = p2.nextSibling) {
    let g6 = Tt(p2);
    for (let m7 = 0; m7 < g6.length; m7++) {
      let b6 = g6[m7];
      n6 && Ye2(n6, b6) && (b6 = ns(os(b6, n6.bottom), n6.top));
      let w7 = Po(t2, b6), v3 = Ho(e2, b6);
      if (w7 == 0 && v3 == 0) return p2.nodeType == 3 ? rs(p2, t2, e2) : ai(p2, t2, e2);
      (!i3 || r2 > v3 || r2 == v3 && o3 > w7) && (i3 = p2, n6 = b6, o3 = w7, r2 = v3, l8 = w7 ? t2 < b6.left ? m7 > 0 : m7 < g6.length - 1 : true), w7 == 0 ? e2 > b6.bottom && (!a2 || a2.bottom < b6.bottom) ? (h3 = p2, a2 = b6) : e2 < b6.top && (!c4 || c4.top > b6.top) && (f2 = p2, c4 = b6) : a2 && Ye2(a2, b6) ? a2 = os(a2, b6.bottom) : c4 && Ye2(c4, b6) && (c4 = ns(c4, b6.top));
    }
  }
  if (a2 && a2.bottom >= e2 ? (i3 = h3, n6 = a2) : c4 && c4.top <= e2 && (i3 = f2, n6 = c4), !i3) return { node: s58, offset: 0 };
  let d3 = Math.max(n6.left, Math.min(n6.right, t2));
  if (i3.nodeType == 3) return rs(i3, d3, e2);
  if (l8 && i3.contentEditable != "false") return ai(i3, d3, e2);
  let u4 = Array.prototype.indexOf.call(s58.childNodes, i3) + (t2 >= (n6.left + n6.right) / 2 ? 1 : 0);
  return { node: s58, offset: u4 };
}
function rs(s58, t2, e2) {
  let i3 = s58.nodeValue.length, n6 = -1, o3 = 1e9, r2 = 0;
  for (let l8 = 0; l8 < i3; l8++) {
    let h3 = mt(s58, l8, l8 + 1).getClientRects();
    for (let f2 = 0; f2 < h3.length; f2++) {
      let a2 = h3[f2];
      if (a2.top == a2.bottom) continue;
      r2 || (r2 = t2 - a2.left);
      let c4 = (a2.top > e2 ? a2.top - e2 : e2 - a2.bottom) - 1;
      if (a2.left - 1 <= t2 && a2.right + 1 >= t2 && c4 < o3) {
        let d3 = t2 >= (a2.left + a2.right) / 2, u4 = d3;
        if ((y3.chrome || y3.gecko) && mt(s58, l8).getBoundingClientRect().left == a2.right && (u4 = !d3), c4 <= 0) return { node: s58, offset: l8 + (u4 ? 1 : 0) };
        n6 = l8 + (u4 ? 1 : 0), o3 = c4;
      }
    }
  }
  return { node: s58, offset: n6 > -1 ? n6 : r2 > 0 ? s58.nodeValue.length : 0 };
}
function Cn(s58, t2, e2, i3 = -1) {
  var n6, o3;
  let r2 = s58.contentDOM.getBoundingClientRect(), l8 = r2.top + s58.viewState.paddingTop, h3, { docHeight: f2 } = s58.viewState, { x: a2, y: c4 } = t2, d3 = c4 - l8;
  if (d3 < 0) return 0;
  if (d3 > f2) return s58.state.doc.length;
  for (let x8 = s58.viewState.heightOracle.textHeight / 2, S7 = false; h3 = s58.elementAtHeight(d3), h3.type != W2.Text; ) for (; d3 = i3 > 0 ? h3.bottom + x8 : h3.top - x8, !(d3 >= 0 && d3 <= f2); ) {
    if (S7) return e2 ? null : 0;
    S7 = true, i3 = -i3;
  }
  c4 = l8 + d3;
  let u4 = h3.from;
  if (u4 < s58.viewport.from) return s58.viewport.from == 0 ? 0 : e2 ? null : ls(s58, r2, h3, a2, c4);
  if (u4 > s58.viewport.to) return s58.viewport.to == s58.state.doc.length ? s58.state.doc.length : e2 ? null : ls(s58, r2, h3, a2, c4);
  let p2 = s58.dom.ownerDocument, g6 = s58.root.elementFromPoint ? s58.root : p2, m7 = g6.elementFromPoint(a2, c4);
  m7 && !s58.contentDOM.contains(m7) && (m7 = null), m7 || (a2 = Math.max(r2.left + 1, Math.min(r2.right - 1, a2)), m7 = g6.elementFromPoint(a2, c4), m7 && !s58.contentDOM.contains(m7) && (m7 = null));
  let b6, w7 = -1;
  if (m7 && ((n6 = s58.docView.nearest(m7)) === null || n6 === void 0 ? void 0 : n6.isEditable) != false) {
    if (p2.caretPositionFromPoint) {
      let x8 = p2.caretPositionFromPoint(a2, c4);
      x8 && ({ offsetNode: b6, offset: w7 } = x8);
    } else if (p2.caretRangeFromPoint) {
      let x8 = p2.caretRangeFromPoint(a2, c4);
      x8 && ({ startContainer: b6, startOffset: w7 } = x8);
    }
    b6 && (!s58.contentDOM.contains(b6) || y3.safari && No(b6, w7, a2) || y3.chrome && Vo(b6, w7, a2)) && (b6 = void 0), b6 && (w7 = Math.min(U2(b6), w7));
  }
  if (!b6 || !s58.docView.dom.contains(b6)) {
    let x8 = P.find(s58.docView, u4);
    if (!x8) return d3 > h3.top + h3.height / 2 ? h3.to : h3.from;
    ({ node: b6, offset: w7 } = ai(x8.dom, a2, c4));
  }
  let v3 = s58.docView.nearest(b6);
  if (!v3) return null;
  if (v3.isWidget && ((o3 = v3.dom) === null || o3 === void 0 ? void 0 : o3.nodeType) == 1) {
    let x8 = v3.dom.getBoundingClientRect();
    return t2.y < x8.top || t2.y <= x8.bottom && t2.x <= (x8.left + x8.right) / 2 ? v3.posAtStart : v3.posAtEnd;
  } else return v3.localPosFromDOM(b6, w7) + v3.posAtStart;
}
function ls(s58, t2, e2, i3, n6) {
  let o3 = Math.round((i3 - t2.left) * s58.defaultCharacterWidth);
  if (s58.lineWrapping && e2.height > s58.defaultLineHeight * 1.5) {
    let l8 = s58.viewState.heightOracle.textHeight, h3 = Math.floor((n6 - e2.top - (s58.defaultLineHeight - l8) * 0.5) / l8);
    o3 += h3 * s58.viewState.heightOracle.lineLength;
  }
  let r2 = s58.state.sliceDoc(e2.from, e2.to);
  return e2.from + lt(r2, o3, s58.state.tabSize);
}
function Mn(s58, t2, e2) {
  let i3, n6 = s58;
  if (s58.nodeType != 3 || t2 != (i3 = s58.nodeValue.length)) return false;
  for (; ; ) {
    let o3 = n6.nextSibling;
    if (o3) {
      if (o3.nodeName == "BR") break;
      return false;
    } else {
      let r2 = n6.parentNode;
      if (!r2 || r2.nodeName == "DIV") break;
      n6 = r2;
    }
  }
  return mt(s58, i3 - 1, i3).getBoundingClientRect().right > e2;
}
function No(s58, t2, e2) {
  return Mn(s58, t2, e2);
}
function Vo(s58, t2, e2) {
  if (t2 != 0) return Mn(s58, t2, e2);
  for (let n6 = s58; ; ) {
    let o3 = n6.parentNode;
    if (!o3 || o3.nodeType != 1 || o3.firstChild != n6) return false;
    if (o3.classList.contains("cm-line")) break;
    n6 = o3;
  }
  let i3 = s58.nodeType == 1 ? s58.getBoundingClientRect() : mt(s58, 0, Math.max(s58.nodeValue.length, 1)).getBoundingClientRect();
  return e2 - i3.left > 5;
}
function fi(s58, t2, e2) {
  let i3 = s58.lineBlockAt(t2);
  if (Array.isArray(i3.type)) {
    let n6;
    for (let o3 of i3.type) {
      if (o3.from > t2) break;
      if (!(o3.to < t2)) {
        if (o3.from < t2 && o3.to > t2) return o3;
        (!n6 || o3.type == W2.Text && (n6.type != o3.type || (e2 < 0 ? o3.from < t2 : o3.to > t2))) && (n6 = o3);
      }
    }
    return n6 || i3;
  }
  return i3;
}
function Fo(s58, t2, e2, i3) {
  let n6 = fi(s58, t2.head, t2.assoc || -1), o3 = !i3 || n6.type != W2.Text || !(s58.lineWrapping || n6.widgetLineBreaks) ? null : s58.coordsAtPos(t2.assoc < 0 && t2.head > n6.from ? t2.head - 1 : t2.head);
  if (o3) {
    let r2 = s58.dom.getBoundingClientRect(), l8 = s58.textDirectionAt(n6.from), h3 = s58.posAtCoords({ x: e2 == (l8 == L2.LTR) ? r2.right - 1 : r2.left + 1, y: (o3.top + o3.bottom) / 2 });
    if (h3 != null) return x2.cursor(h3, e2 ? -1 : 1);
  }
  return x2.cursor(e2 ? n6.to : n6.from, e2 ? -1 : 1);
}
function hs(s58, t2, e2, i3) {
  let n6 = s58.state.doc.lineAt(t2.head), o3 = s58.bidiSpans(n6), r2 = s58.textDirectionAt(n6.from);
  for (let l8 = t2, h3 = null; ; ) {
    let f2 = ln(n6, o3, r2, l8, e2), a2 = rn;
    if (!f2) {
      if (n6.number == (e2 ? s58.state.doc.lines : 1)) return l8;
      a2 = `
`, n6 = s58.state.doc.line(n6.number + (e2 ? 1 : -1)), o3 = s58.bidiSpans(n6), f2 = s58.visualLineSide(n6, !e2);
    }
    if (h3) {
      if (!h3(a2)) return l8;
    } else {
      if (!i3) return f2;
      h3 = i3(a2);
    }
    l8 = f2;
  }
}
function Wo(s58, t2, e2) {
  let i3 = s58.state.charCategorizer(t2), n6 = i3(e2);
  return (o3) => {
    let r2 = i3(o3);
    return n6 == M.Space && (n6 = r2), n6 == r2;
  };
}
function zo(s58, t2, e2, i3) {
  let n6 = t2.head, o3 = e2 ? 1 : -1;
  if (n6 == (e2 ? s58.state.doc.length : 0)) return x2.cursor(n6, t2.assoc);
  let r2 = t2.goalColumn, l8, h3 = s58.contentDOM.getBoundingClientRect(), f2 = s58.coordsAtPos(n6, t2.assoc || -1), a2 = s58.documentTop;
  if (f2) r2 == null && (r2 = f2.left - h3.left), l8 = o3 < 0 ? f2.top : f2.bottom;
  else {
    let u4 = s58.viewState.lineBlockAt(n6);
    r2 == null && (r2 = Math.min(h3.right - h3.left, s58.defaultCharacterWidth * (n6 - u4.from))), l8 = (o3 < 0 ? u4.top : u4.bottom) + a2;
  }
  let c4 = h3.left + r2, d3 = i3 ?? s58.viewState.heightOracle.textHeight >> 1;
  for (let u4 = 0; ; u4 += 10) {
    let p2 = l8 + (d3 + u4) * o3, g6 = Cn(s58, { x: c4, y: p2 }, false, o3);
    if (p2 < h3.top || p2 > h3.bottom || (o3 < 0 ? g6 < n6 : g6 > n6)) {
      let m7 = s58.docView.coordsForChar(g6), b6 = !m7 || p2 < m7.top ? -1 : 1;
      return x2.cursor(g6, b6, void 0, r2);
    }
  }
}
function Kt(s58, t2, e2) {
  for (; ; ) {
    let i3 = 0;
    for (let n6 of s58) n6.between(t2 - 1, t2 + 1, (o3, r2, l8) => {
      if (t2 > o3 && t2 < r2) {
        let h3 = i3 || e2 || (t2 - o3 < r2 - t2 ? -1 : 1);
        t2 = h3 < 0 ? o3 : r2, i3 = h3;
      }
    });
    if (!i3) return t2;
  }
}
function kn(s58, t2) {
  let e2 = null;
  for (let i3 = 0; i3 < t2.ranges.length; i3++) {
    let n6 = t2.ranges[i3], o3 = null;
    if (n6.empty) {
      let r2 = Kt(s58, n6.from, 0);
      r2 != n6.from && (o3 = x2.cursor(r2, -1));
    } else {
      let r2 = Kt(s58, n6.from, -1), l8 = Kt(s58, n6.to, 1);
      (r2 != n6.from || l8 != n6.to) && (o3 = x2.range(n6.from == n6.anchor ? r2 : l8, n6.from == n6.head ? r2 : l8));
    }
    o3 && (e2 || (e2 = t2.ranges.slice()), e2[i3] = o3);
  }
  return e2 ? x2.create(e2, t2.mainIndex) : t2;
}
function je2(s58, t2, e2) {
  let i3 = Kt(s58.state.facet(se2).map((n6) => n6(s58)), e2.from, t2.head > e2.from ? -1 : 1);
  return i3 == e2.from ? e2 : x2.cursor(i3, i3 < e2.from ? 1 : -1);
}
var Pt = "￿";
var ci = class {
  constructor(t2, e2) {
    this.points = t2, this.text = "", this.lineSeparator = e2.facet(I.lineSeparator);
  }
  append(t2) {
    this.text += t2;
  }
  lineBreak() {
    this.text += Pt;
  }
  readRange(t2, e2) {
    if (!t2) return this;
    let i3 = t2.parentNode;
    for (let n6 = t2; ; ) {
      this.findPointBefore(i3, n6);
      let o3 = this.text.length;
      this.readNode(n6);
      let r2 = n6.nextSibling;
      if (r2 == e2) break;
      let l8 = O2.get(n6), h3 = O2.get(r2);
      (l8 && h3 ? l8.breakAfter : (l8 ? l8.breakAfter : Me2(n6)) || Me2(r2) && (n6.nodeName != "BR" || n6.cmIgnore) && this.text.length > o3) && !Ko(r2, e2) && this.lineBreak(), n6 = r2;
    }
    return this.findPointBefore(i3, e2), this;
  }
  readTextNode(t2) {
    let e2 = t2.nodeValue;
    for (let i3 of this.points) i3.node == t2 && (i3.pos = this.text.length + Math.min(i3.offset, e2.length));
    for (let i3 = 0, n6 = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o3 = -1, r2 = 1, l8;
      if (this.lineSeparator ? (o3 = e2.indexOf(this.lineSeparator, i3), r2 = this.lineSeparator.length) : (l8 = n6.exec(e2)) && (o3 = l8.index, r2 = l8[0].length), this.append(e2.slice(i3, o3 < 0 ? e2.length : o3)), o3 < 0) break;
      if (this.lineBreak(), r2 > 1) for (let h3 of this.points) h3.node == t2 && h3.pos > this.text.length && (h3.pos -= r2 - 1);
      i3 = o3 + r2;
    }
  }
  readNode(t2) {
    if (t2.cmIgnore) return;
    let e2 = O2.get(t2), i3 = e2 && e2.overrideDOMText;
    if (i3 != null) {
      this.findPointInside(t2, i3.length);
      for (let n6 = i3.iter(); !n6.next().done; ) n6.lineBreak ? this.lineBreak() : this.append(n6.value);
    } else t2.nodeType == 3 ? this.readTextNode(t2) : t2.nodeName == "BR" ? t2.nextSibling && this.lineBreak() : t2.nodeType == 1 && this.readRange(t2.firstChild, null);
  }
  findPointBefore(t2, e2) {
    for (let i3 of this.points) i3.node == t2 && t2.childNodes[i3.offset] == e2 && (i3.pos = this.text.length);
  }
  findPointInside(t2, e2) {
    for (let i3 of this.points) (t2.nodeType == 3 ? i3.node == t2 : t2.contains(i3.node)) && (i3.pos = this.text.length + (Io(t2, i3.node, i3.offset) ? e2 : 0));
  }
};
function Io(s58, t2, e2) {
  for (; ; ) {
    if (!t2 || e2 < U2(t2)) return false;
    if (t2 == s58) return true;
    e2 = gt(t2) + 1, t2 = t2.parentNode;
  }
}
function Ko(s58, t2) {
  let e2;
  for (; !(s58 == t2 || !s58); s58 = s58.nextSibling) {
    let i3 = O2.get(s58);
    if (!(i3?.isWidget || s58.cmIgnore)) return false;
    i3 && (e2 || (e2 = [])).push(i3);
  }
  if (e2) for (let i3 of e2) {
    let n6 = i3.overrideDOMText;
    if (n6?.length) return false;
  }
  return true;
}
var Te2 = class {
  constructor(t2, e2) {
    this.node = t2, this.offset = e2, this.pos = -1;
  }
};
var di = class {
  constructor(t2, e2, i3, n6) {
    this.typeOver = n6, this.bounds = null, this.text = "", this.domChanged = e2 > -1;
    let { impreciseHead: o3, impreciseAnchor: r2 } = t2.docView;
    if (t2.state.readOnly && e2 > -1) this.newSel = null;
    else if (e2 > -1 && (this.bounds = t2.docView.domBoundsAround(e2, i3, 0))) {
      let l8 = o3 || r2 ? [] : _o(t2), h3 = new ci(l8, t2.state);
      h3.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h3.text, this.newSel = Yo(l8, this.bounds.from);
    } else {
      let l8 = t2.observer.selectionRange, h3 = o3 && o3.node == l8.focusNode && o3.offset == l8.focusOffset || !ei(t2.contentDOM, l8.focusNode) ? t2.state.selection.main.head : t2.docView.posFromDOM(l8.focusNode, l8.focusOffset), f2 = r2 && r2.node == l8.anchorNode && r2.offset == l8.anchorOffset || !ei(t2.contentDOM, l8.anchorNode) ? t2.state.selection.main.anchor : t2.docView.posFromDOM(l8.anchorNode, l8.anchorOffset), a2 = t2.viewport;
      if ((y3.ios || y3.chrome) && t2.state.selection.main.empty && h3 != f2 && (a2.from > 0 || a2.to < t2.state.doc.length)) {
        let c4 = Math.min(h3, f2), d3 = Math.max(h3, f2), u4 = a2.from - c4, p2 = a2.to - d3;
        (u4 == 0 || u4 == 1 || c4 == 0) && (p2 == 0 || p2 == -1 || d3 == t2.state.doc.length) && (h3 = 0, f2 = t2.state.doc.length);
      }
      this.newSel = x2.single(f2, h3);
    }
  }
};
function An(s58, t2) {
  let e2, { newSel: i3 } = t2, n6 = s58.state.selection.main, o3 = s58.inputState.lastKeyTime > Date.now() - 100 ? s58.inputState.lastKeyCode : -1;
  if (t2.bounds) {
    let { from: r2, to: l8 } = t2.bounds, h3 = n6.from, f2 = null;
    (o3 === 8 || y3.android && t2.text.length < l8 - r2) && (h3 = n6.to, f2 = "end");
    let a2 = Dn(s58.state.doc.sliceString(r2, l8, Pt), t2.text, h3 - r2, f2);
    a2 && (y3.chrome && o3 == 13 && a2.toB == a2.from + 2 && t2.text.slice(a2.from, a2.toB) == Pt + Pt && a2.toB--, e2 = { from: r2 + a2.from, to: r2 + a2.toA, insert: m2.of(t2.text.slice(a2.from, a2.toB).split(Pt)) });
  } else i3 && (!s58.hasFocus && s58.state.facet(et2) || i3.main.eq(n6)) && (i3 = null);
  if (!e2 && !i3) return false;
  if (!e2 && t2.typeOver && !n6.empty && i3 && i3.main.empty ? e2 = { from: n6.from, to: n6.to, insert: s58.state.doc.slice(n6.from, n6.to) } : (y3.mac || y3.android) && e2 && e2.from == e2.to && e2.from == n6.head - 1 && /^\. ?$/.test(e2.insert.toString()) && s58.contentDOM.getAttribute("autocorrect") == "off" ? (i3 && e2.insert.length == 2 && (i3 = x2.single(i3.main.anchor - 1, i3.main.head - 1)), e2 = { from: e2.from, to: e2.to, insert: m2.of([e2.insert.toString().replace(".", " ")]) }) : e2 && e2.from >= n6.from && e2.to <= n6.to && (e2.from != n6.from || e2.to != n6.to) && n6.to - n6.from - (e2.to - e2.from) <= 4 ? e2 = { from: n6.from, to: n6.to, insert: s58.state.doc.slice(n6.from, e2.from).append(e2.insert).append(s58.state.doc.slice(e2.to, n6.to)) } : y3.chrome && e2 && e2.from == e2.to && e2.from == n6.head && e2.insert.toString() == `
 ` && s58.lineWrapping && (i3 && (i3 = x2.single(i3.main.anchor - 1, i3.main.head - 1)), e2 = { from: n6.from, to: n6.to, insert: m2.of([" "]) }), e2) return $i(s58, e2, i3, o3);
  if (i3 && !i3.main.eq(n6)) {
    let r2 = false, l8 = "select";
    return s58.inputState.lastSelectionTime > Date.now() - 50 && (s58.inputState.lastSelectionOrigin == "select" && (r2 = true), l8 = s58.inputState.lastSelectionOrigin, l8 == "select.pointer" && (i3 = kn(s58.state.facet(se2).map((h3) => h3(s58)), i3))), s58.dispatch({ selection: i3, scrollIntoView: r2, userEvent: l8 }), true;
  } else return false;
}
function $i(s58, t2, e2, i3 = -1) {
  if (y3.ios && s58.inputState.flushIOSKey(t2)) return true;
  let n6 = s58.state.selection.main;
  if (y3.android && (t2.to == n6.to && (t2.from == n6.from || t2.from == n6.from - 1 && s58.state.sliceDoc(t2.from, n6.from) == " ") && t2.insert.length == 1 && t2.insert.lines == 2 && Dt(s58.contentDOM, "Enter", 13) || (t2.from == n6.from - 1 && t2.to == n6.to && t2.insert.length == 0 || i3 == 8 && t2.insert.length < t2.to - t2.from && t2.to > n6.head) && Dt(s58.contentDOM, "Backspace", 8) || t2.from == n6.from && t2.to == n6.to + 1 && t2.insert.length == 0 && Dt(s58.contentDOM, "Delete", 46))) return true;
  let o3 = t2.insert.toString();
  s58.inputState.composing >= 0 && s58.inputState.composing++;
  let r2, l8 = () => r2 || (r2 = qo(s58, t2, e2));
  return s58.state.facet(dn).some((h3) => h3(s58, t2.from, t2.to, o3, l8)) || s58.dispatch(l8()), true;
}
function qo(s58, t2, e2) {
  let i3, n6 = s58.state, o3 = n6.selection.main, r2 = -1;
  if (t2.from == t2.to && t2.from < o3.from || t2.from > o3.to) {
    let h3 = t2.from < o3.from ? -1 : 1, f2 = h3 < 0 ? o3.from : o3.to, a2 = Kt(n6.facet(se2).map((c4) => c4(s58)), f2, h3);
    t2.from == a2 && (r2 = a2);
  }
  if (r2 > -1) i3 = { changes: t2, selection: x2.cursor(t2.from + t2.insert.length, -1) };
  else if (t2.from >= o3.from && t2.to <= o3.to && t2.to - t2.from >= (o3.to - o3.from) / 3 && (!e2 || e2.main.empty && e2.main.from == t2.from + t2.insert.length) && s58.inputState.composing < 0) {
    let h3 = o3.from < t2.from ? n6.sliceDoc(o3.from, t2.from) : "", f2 = o3.to > t2.to ? n6.sliceDoc(t2.to, o3.to) : "";
    i3 = n6.replaceSelection(s58.state.toText(h3 + t2.insert.sliceString(0, void 0, s58.state.lineBreak) + f2));
  } else {
    let h3 = n6.changes(t2), f2 = e2 && e2.main.to <= h3.newLength ? e2.main : void 0;
    if (n6.selection.ranges.length > 1 && s58.inputState.composing >= 0 && t2.to <= o3.to && t2.to >= o3.to - 10) {
      let a2 = s58.state.sliceDoc(t2.from, t2.to), c4, d3 = e2 && Sn(s58, e2.main.head);
      if (d3) {
        let g6 = t2.insert.length - (t2.to - t2.from);
        c4 = { from: d3.from, to: d3.to - g6 };
      } else c4 = s58.state.doc.lineAt(o3.head);
      let u4 = o3.to - t2.to, p2 = o3.to - o3.from;
      i3 = n6.changeByRange((g6) => {
        if (g6.from == o3.from && g6.to == o3.to) return { changes: h3, range: f2 || g6.map(h3) };
        let m7 = g6.to - u4, b6 = m7 - a2.length;
        if (g6.to - g6.from != p2 || s58.state.sliceDoc(b6, m7) != a2 || g6.to >= c4.from && g6.from <= c4.to) return { range: g6 };
        let w7 = n6.changes({ from: b6, to: m7, insert: t2.insert }), v3 = g6.to - o3.to;
        return { changes: w7, range: f2 ? x2.range(Math.max(0, f2.anchor + v3), Math.max(0, f2.head + v3)) : g6.map(w7) };
      });
    } else i3 = { changes: h3, selection: f2 && n6.selection.replaceRange(f2) };
  }
  let l8 = "input.type";
  return (s58.composing || s58.inputState.compositionPendingChange && s58.inputState.compositionEndedAt > Date.now() - 50) && (s58.inputState.compositionPendingChange = false, l8 += ".compose", s58.inputState.compositionFirstChange && (l8 += ".start", s58.inputState.compositionFirstChange = false)), n6.update(i3, { userEvent: l8, scrollIntoView: true });
}
function Dn(s58, t2, e2, i3) {
  let n6 = Math.min(s58.length, t2.length), o3 = 0;
  for (; o3 < n6 && s58.charCodeAt(o3) == t2.charCodeAt(o3); ) o3++;
  if (o3 == n6 && s58.length == t2.length) return null;
  let r2 = s58.length, l8 = t2.length;
  for (; r2 > 0 && l8 > 0 && s58.charCodeAt(r2 - 1) == t2.charCodeAt(l8 - 1); ) r2--, l8--;
  if (i3 == "end") {
    let h3 = Math.max(0, o3 - Math.min(r2, l8));
    e2 -= r2 + h3 - o3;
  }
  if (r2 < o3 && s58.length < t2.length) {
    let h3 = e2 <= o3 && e2 >= r2 ? o3 - e2 : 0;
    o3 -= h3, l8 = o3 + (l8 - r2), r2 = o3;
  } else if (l8 < o3) {
    let h3 = e2 <= o3 && e2 >= l8 ? o3 - e2 : 0;
    o3 -= h3, r2 = o3 + (r2 - l8), l8 = o3;
  }
  return { from: o3, toA: r2, toB: l8 };
}
function _o(s58) {
  let t2 = [];
  if (s58.root.activeElement != s58.contentDOM) return t2;
  let { anchorNode: e2, anchorOffset: i3, focusNode: n6, focusOffset: o3 } = s58.observer.selectionRange;
  return e2 && (t2.push(new Te2(e2, i3)), (n6 != e2 || o3 != i3) && t2.push(new Te2(n6, o3))), t2;
}
function Yo(s58, t2) {
  if (s58.length == 0) return null;
  let e2 = s58[0].pos, i3 = s58.length == 2 ? s58[1].pos : e2;
  return e2 > -1 && i3 > -1 ? x2.single(e2 + t2, i3 + t2) : null;
}
var ui = class {
  setSelectionOrigin(t2) {
    this.lastSelectionOrigin = t2, this.lastSelectionTime = Date.now();
  }
  constructor(t2) {
    this.view = t2, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t2.hasFocus, y3.safari && t2.contentDOM.addEventListener("input", () => null), y3.gecko && rr(t2.contentDOM.ownerDocument);
  }
  handleEvent(t2) {
    !Jo(this.view, t2) || this.ignoreDuringComposition(t2) || t2.type == "keydown" && this.keydown(t2) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t2.type, t2)) : this.runHandlers(t2.type, t2));
  }
  runHandlers(t2, e2) {
    let i3 = this.handlers[t2];
    if (i3) {
      for (let n6 of i3.observers) n6(this.view, e2);
      for (let n6 of i3.handlers) {
        if (e2.defaultPrevented) break;
        if (n6(this.view, e2)) {
          e2.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t2) {
    let e2 = jo(t2), i3 = this.handlers, n6 = this.view.contentDOM;
    for (let o3 in e2) if (o3 != "scroll") {
      let r2 = !e2[o3].handlers.length, l8 = i3[o3];
      l8 && r2 != !l8.handlers.length && (n6.removeEventListener(o3, this.handleEvent), l8 = null), l8 || n6.addEventListener(o3, this.handleEvent, { passive: r2 });
    }
    for (let o3 in i3) o3 != "scroll" && !e2[o3] && n6.removeEventListener(o3, this.handleEvent);
    this.handlers = e2;
  }
  keydown(t2) {
    if (this.lastKeyCode = t2.keyCode, this.lastKeyTime = Date.now(), t2.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
    if (this.tabFocusMode > 0 && t2.keyCode != 27 && Tn.indexOf(t2.keyCode) < 0 && (this.tabFocusMode = -1), y3.android && y3.chrome && !t2.synthetic && (t2.keyCode == 13 || t2.keyCode == 8)) return this.view.observer.delayAndroidKey(t2.key, t2.keyCode), true;
    let e2;
    return y3.ios && !t2.synthetic && !t2.altKey && !t2.metaKey && ((e2 = On.find((i3) => i3.keyCode == t2.keyCode)) && !t2.ctrlKey || Xo.indexOf(t2.key) > -1 && t2.ctrlKey && !t2.shiftKey) ? (this.pendingIOSKey = e2 || t2, setTimeout(() => this.flushIOSKey(), 250), true) : (t2.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(t2) {
    let e2 = this.pendingIOSKey;
    return !e2 || e2.key == "Enter" && t2 && t2.from < t2.to && /^\S+$/.test(t2.insert.toString()) ? false : (this.pendingIOSKey = void 0, Dt(this.view.contentDOM, e2.key, e2.keyCode, e2 instanceof KeyboardEvent ? e2 : void 0));
  }
  ignoreDuringComposition(t2) {
    return !/^key/.test(t2.type) || t2.synthetic ? false : this.composing > 0 ? true : y3.safari && !y3.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false;
  }
  startMouseSelection(t2) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t2;
  }
  update(t2) {
    this.view.observer.update(t2), this.mouseSelection && this.mouseSelection.update(t2), this.draggedContent && t2.docChanged && (this.draggedContent = this.draggedContent.map(t2.changes)), t2.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
};
function as(s58, t2) {
  return (e2, i3) => {
    try {
      return t2.call(s58, i3, e2);
    } catch (n6) {
      G2(e2.state, n6);
    }
  };
}
function jo(s58) {
  let t2 = /* @__PURE__ */ Object.create(null);
  function e2(i3) {
    return t2[i3] || (t2[i3] = { observers: [], handlers: [] });
  }
  for (let i3 of s58) {
    let n6 = i3.spec, o3 = n6 && n6.plugin.domEventHandlers, r2 = n6 && n6.plugin.domEventObservers;
    if (o3) for (let l8 in o3) {
      let h3 = o3[l8];
      h3 && e2(l8).handlers.push(as(i3.value, h3));
    }
    if (r2) for (let l8 in r2) {
      let h3 = r2[l8];
      h3 && e2(l8).observers.push(as(i3.value, h3));
    }
  }
  for (let i3 in Y2) e2(i3).handlers.push(Y2[i3]);
  for (let i3 in q2) e2(i3).observers.push(q2[i3]);
  return t2;
}
var On = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }];
var Xo = "dthko";
var Tn = [16, 17, 18, 20, 91, 92, 224, 225];
var ae2 = 6;
function fe2(s58) {
  return Math.max(0, s58) * 0.7 + 8;
}
function $o(s58, t2) {
  return Math.max(Math.abs(s58.clientX - t2.clientX), Math.abs(s58.clientY - t2.clientY));
}
var pi = class {
  constructor(t2, e2, i3, n6) {
    this.view = t2, this.startEvent = e2, this.style = i3, this.mustSelect = n6, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e2, this.scrollParents = ho(t2.contentDOM), this.atoms = t2.state.facet(se2).map((r2) => r2(t2));
    let o3 = t2.contentDOM.ownerDocument;
    o3.addEventListener("mousemove", this.move = this.move.bind(this)), o3.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e2.shiftKey, this.multiple = t2.state.facet(I.allowMultipleSelections) && Go(t2, e2), this.dragging = Qo(t2, e2) && Ln(e2) == 1 ? null : false;
  }
  start(t2) {
    this.dragging === false && this.select(t2);
  }
  move(t2) {
    if (t2.buttons == 0) return this.destroy();
    if (this.dragging || this.dragging == null && $o(this.startEvent, t2) < 10) return;
    this.select(this.lastEvent = t2);
    let e2 = 0, i3 = 0, n6 = 0, o3 = 0, r2 = this.view.win.innerWidth, l8 = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n6, right: r2 } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: o3, bottom: l8 } = this.scrollParents.y.getBoundingClientRect());
    let h3 = Xi(this.view);
    t2.clientX - h3.left <= n6 + ae2 ? e2 = -fe2(n6 - t2.clientX) : t2.clientX + h3.right >= r2 - ae2 && (e2 = fe2(t2.clientX - r2)), t2.clientY - h3.top <= o3 + ae2 ? i3 = -fe2(o3 - t2.clientY) : t2.clientY + h3.bottom >= l8 - ae2 && (i3 = fe2(t2.clientY - l8)), this.setScrollSpeed(e2, i3);
  }
  up(t2) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t2.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t2 = this.view.contentDOM.ownerDocument;
    t2.removeEventListener("mousemove", this.move), t2.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t2, e2) {
    this.scrollSpeed = { x: t2, y: e2 }, t2 || e2 ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t2, y: e2 } = this.scrollSpeed;
    t2 && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t2, t2 = 0), e2 && this.scrollParents.y && (this.scrollParents.y.scrollTop += e2, e2 = 0), (t2 || e2) && this.view.win.scrollBy(t2, e2), this.dragging === false && this.select(this.lastEvent);
  }
  select(t2) {
    let { view: e2 } = this, i3 = kn(this.atoms, this.style.get(t2, this.extend, this.multiple));
    (this.mustSelect || !i3.eq(e2.state.selection, this.dragging === false)) && this.view.dispatch({ selection: i3, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(t2) {
    t2.transactions.some((e2) => e2.isUserEvent("input.type")) ? this.destroy() : this.style.update(t2) && setTimeout(() => this.select(this.lastEvent), 20);
  }
};
function Go(s58, t2) {
  let e2 = s58.state.facet(hn);
  return e2.length ? e2[0](t2) : y3.mac ? t2.metaKey : t2.ctrlKey;
}
function Uo(s58, t2) {
  let e2 = s58.state.facet(an);
  return e2.length ? e2[0](t2) : y3.mac ? !t2.altKey : !t2.ctrlKey;
}
function Qo(s58, t2) {
  let { main: e2 } = s58.state.selection;
  if (e2.empty) return false;
  let i3 = jt(s58.root);
  if (!i3 || i3.rangeCount == 0) return true;
  let n6 = i3.getRangeAt(0).getClientRects();
  for (let o3 = 0; o3 < n6.length; o3++) {
    let r2 = n6[o3];
    if (r2.left <= t2.clientX && r2.right >= t2.clientX && r2.top <= t2.clientY && r2.bottom >= t2.clientY) return true;
  }
  return false;
}
function Jo(s58, t2) {
  if (!t2.bubbles) return true;
  if (t2.defaultPrevented) return false;
  for (let e2 = t2.target, i3; e2 != s58.contentDOM; e2 = e2.parentNode) if (!e2 || e2.nodeType == 11 || (i3 = O2.get(e2)) && i3.ignoreEvent(t2)) return false;
  return true;
}
var Y2 = /* @__PURE__ */ Object.create(null);
var q2 = /* @__PURE__ */ Object.create(null);
var Rn = y3.ie && y3.ie_version < 15 || y3.ios && y3.webkit_version < 604;
function Zo(s58) {
  let t2 = s58.dom.parentNode;
  if (!t2) return;
  let e2 = t2.appendChild(document.createElement("textarea"));
  e2.style.cssText = "position: fixed; left: -10000px; top: 10px", e2.focus(), setTimeout(() => {
    s58.focus(), e2.remove(), En(s58, e2.value);
  }, 50);
}
function Ke2(s58, t2, e2) {
  for (let i3 of s58.facet(t2)) e2 = i3(e2, s58);
  return e2;
}
function En(s58, t2) {
  t2 = Ke2(s58.state, Yi, t2);
  let { state: e2 } = s58, i3, n6 = 1, o3 = e2.toText(t2), r2 = o3.lines == e2.selection.ranges.length;
  if (gi != null && e2.selection.ranges.every((h3) => h3.empty) && gi == o3.toString()) {
    let h3 = -1;
    i3 = e2.changeByRange((f2) => {
      let a2 = e2.doc.lineAt(f2.from);
      if (a2.from == h3) return { range: f2 };
      h3 = a2.from;
      let c4 = e2.toText((r2 ? o3.line(n6++).text : t2) + e2.lineBreak);
      return { changes: { from: a2.from, insert: c4 }, range: x2.cursor(f2.from + c4.length) };
    });
  } else r2 ? i3 = e2.changeByRange((h3) => {
    let f2 = o3.line(n6++);
    return { changes: { from: h3.from, to: h3.to, insert: f2.text }, range: x2.cursor(h3.from + f2.length) };
  }) : i3 = e2.replaceSelection(o3);
  s58.dispatch(i3, { userEvent: "input.paste", scrollIntoView: true });
}
q2.scroll = (s58) => {
  s58.inputState.lastScrollTop = s58.scrollDOM.scrollTop, s58.inputState.lastScrollLeft = s58.scrollDOM.scrollLeft;
};
Y2.keydown = (s58, t2) => (s58.inputState.setSelectionOrigin("select"), t2.keyCode == 27 && s58.inputState.tabFocusMode != 0 && (s58.inputState.tabFocusMode = Date.now() + 2e3), false);
q2.touchstart = (s58, t2) => {
  s58.inputState.lastTouchTime = Date.now(), s58.inputState.setSelectionOrigin("select.pointer");
};
q2.touchmove = (s58) => {
  s58.inputState.setSelectionOrigin("select.pointer");
};
Y2.mousedown = (s58, t2) => {
  if (s58.observer.flush(), s58.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let e2 = null;
  for (let i3 of s58.state.facet(fn)) if (e2 = i3(s58, t2), e2) break;
  if (!e2 && t2.button == 0 && (e2 = ir(s58, t2)), e2) {
    let i3 = !s58.hasFocus;
    s58.inputState.startMouseSelection(new pi(s58, t2, e2, i3)), i3 && s58.observer.ignore(() => {
      qs(s58.contentDOM);
      let o3 = s58.root.activeElement;
      o3 && !o3.contains(s58.contentDOM) && o3.blur();
    });
    let n6 = s58.inputState.mouseSelection;
    if (n6) return n6.start(t2), n6.dragging === false;
  } else s58.inputState.setSelectionOrigin("select.pointer");
  return false;
};
function fs(s58, t2, e2, i3) {
  if (i3 == 1) return x2.cursor(t2, e2);
  if (i3 == 2) return Bo(s58.state, t2, e2);
  {
    let n6 = P.find(s58.docView, t2), o3 = s58.state.doc.lineAt(n6 ? n6.posAtEnd : t2), r2 = n6 ? n6.posAtStart : o3.from, l8 = n6 ? n6.posAtEnd : o3.to;
    return l8 < s58.state.doc.length && l8 == o3.to && l8++, x2.range(r2, l8);
  }
}
var cs = (s58, t2, e2) => t2 >= e2.top && t2 <= e2.bottom && s58 >= e2.left && s58 <= e2.right;
function tr(s58, t2, e2, i3) {
  let n6 = P.find(s58.docView, t2);
  if (!n6) return 1;
  let o3 = t2 - n6.posAtStart;
  if (o3 == 0) return 1;
  if (o3 == n6.length) return -1;
  let r2 = n6.coordsAt(o3, -1);
  if (r2 && cs(e2, i3, r2)) return -1;
  let l8 = n6.coordsAt(o3, 1);
  return l8 && cs(e2, i3, l8) ? 1 : r2 && r2.bottom >= i3 ? -1 : 1;
}
function ds(s58, t2) {
  let e2 = s58.posAtCoords({ x: t2.clientX, y: t2.clientY }, false);
  return { pos: e2, bias: tr(s58, e2, t2.clientX, t2.clientY) };
}
var er = y3.ie && y3.ie_version <= 11;
var us = null;
var ps = 0;
var gs = 0;
function Ln(s58) {
  if (!er) return s58.detail;
  let t2 = us, e2 = gs;
  return us = s58, gs = Date.now(), ps = !t2 || e2 > Date.now() - 400 && Math.abs(t2.clientX - s58.clientX) < 2 && Math.abs(t2.clientY - s58.clientY) < 2 ? (ps + 1) % 3 : 1;
}
function ir(s58, t2) {
  let e2 = ds(s58, t2), i3 = Ln(t2), n6 = s58.state.selection;
  return { update(o3) {
    o3.docChanged && (e2.pos = o3.changes.mapPos(e2.pos), n6 = n6.map(o3.changes));
  }, get(o3, r2, l8) {
    let h3 = ds(s58, o3), f2, a2 = fs(s58, h3.pos, h3.bias, i3);
    if (e2.pos != h3.pos && !r2) {
      let c4 = fs(s58, e2.pos, e2.bias, i3), d3 = Math.min(c4.from, a2.from), u4 = Math.max(c4.to, a2.to);
      a2 = d3 < a2.from ? x2.range(d3, u4) : x2.range(u4, d3);
    }
    return r2 ? n6.replaceRange(n6.main.extend(a2.from, a2.to)) : l8 && i3 == 1 && n6.ranges.length > 1 && (f2 = sr(n6, h3.pos)) ? f2 : l8 ? n6.addRange(a2) : x2.create([a2]);
  } };
}
function sr(s58, t2) {
  for (let e2 = 0; e2 < s58.ranges.length; e2++) {
    let { from: i3, to: n6 } = s58.ranges[e2];
    if (i3 <= t2 && n6 >= t2) return x2.create(s58.ranges.slice(0, e2).concat(s58.ranges.slice(e2 + 1)), s58.mainIndex == e2 ? 0 : s58.mainIndex - (s58.mainIndex > e2 ? 1 : 0));
  }
  return null;
}
Y2.dragstart = (s58, t2) => {
  let { selection: { main: e2 } } = s58.state;
  if (t2.target.draggable) {
    let n6 = s58.docView.nearest(t2.target);
    if (n6 && n6.isWidget) {
      let o3 = n6.posAtStart, r2 = o3 + n6.length;
      (o3 >= e2.to || r2 <= e2.from) && (e2 = x2.range(o3, r2));
    }
  }
  let { inputState: i3 } = s58;
  return i3.mouseSelection && (i3.mouseSelection.dragging = true), i3.draggedContent = e2, t2.dataTransfer && (t2.dataTransfer.setData("Text", Ke2(s58.state, ji, s58.state.sliceDoc(e2.from, e2.to))), t2.dataTransfer.effectAllowed = "copyMove"), false;
};
Y2.dragend = (s58) => (s58.inputState.draggedContent = null, false);
function ms(s58, t2, e2, i3) {
  if (e2 = Ke2(s58.state, Yi, e2), !e2) return;
  let n6 = s58.posAtCoords({ x: t2.clientX, y: t2.clientY }, false), { draggedContent: o3 } = s58.inputState, r2 = i3 && o3 && Uo(s58, t2) ? { from: o3.from, to: o3.to } : null, l8 = { from: n6, insert: e2 }, h3 = s58.state.changes(r2 ? [r2, l8] : l8);
  s58.focus(), s58.dispatch({ changes: h3, selection: { anchor: h3.mapPos(n6, -1), head: h3.mapPos(n6, 1) }, userEvent: r2 ? "move.drop" : "input.drop" }), s58.inputState.draggedContent = null;
}
Y2.drop = (s58, t2) => {
  if (!t2.dataTransfer) return false;
  if (s58.state.readOnly) return true;
  let e2 = t2.dataTransfer.files;
  if (e2 && e2.length) {
    let i3 = Array(e2.length), n6 = 0, o3 = () => {
      ++n6 == e2.length && ms(s58, t2, i3.filter((r2) => r2 != null).join(s58.state.lineBreak), false);
    };
    for (let r2 = 0; r2 < e2.length; r2++) {
      let l8 = new FileReader();
      l8.onerror = o3, l8.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l8.result) || (i3[r2] = l8.result), o3();
      }, l8.readAsText(e2[r2]);
    }
    return true;
  } else {
    let i3 = t2.dataTransfer.getData("Text");
    if (i3) return ms(s58, t2, i3, true), true;
  }
  return false;
};
Y2.paste = (s58, t2) => {
  if (s58.state.readOnly) return true;
  s58.observer.flush();
  let e2 = Rn ? null : t2.clipboardData;
  return e2 ? (En(s58, e2.getData("text/plain") || e2.getData("text/uri-list")), true) : (Zo(s58), false);
};
function nr(s58, t2) {
  let e2 = s58.dom.parentNode;
  if (!e2) return;
  let i3 = e2.appendChild(document.createElement("textarea"));
  i3.style.cssText = "position: fixed; left: -10000px; top: 10px", i3.value = t2, i3.focus(), i3.selectionEnd = t2.length, i3.selectionStart = 0, setTimeout(() => {
    i3.remove(), s58.focus();
  }, 50);
}
function or(s58) {
  let t2 = [], e2 = [], i3 = false;
  for (let n6 of s58.selection.ranges) n6.empty || (t2.push(s58.sliceDoc(n6.from, n6.to)), e2.push(n6));
  if (!t2.length) {
    let n6 = -1;
    for (let { from: o3 } of s58.selection.ranges) {
      let r2 = s58.doc.lineAt(o3);
      r2.number > n6 && (t2.push(r2.text), e2.push({ from: r2.from, to: Math.min(s58.doc.length, r2.to + 1) })), n6 = r2.number;
    }
    i3 = true;
  }
  return { text: Ke2(s58, ji, t2.join(s58.lineBreak)), ranges: e2, linewise: i3 };
}
var gi = null;
Y2.copy = Y2.cut = (s58, t2) => {
  let { text: e2, ranges: i3, linewise: n6 } = or(s58.state);
  if (!e2 && !n6) return false;
  gi = n6 ? e2 : null, t2.type == "cut" && !s58.state.readOnly && s58.dispatch({ changes: i3, scrollIntoView: true, userEvent: "delete.cut" });
  let o3 = Rn ? null : t2.clipboardData;
  return o3 ? (o3.clearData(), o3.setData("text/plain", e2), true) : (nr(s58, e2), false);
};
var Bn = L.define();
function Pn(s58, t2) {
  let e2 = [];
  for (let i3 of s58.facet(un)) {
    let n6 = i3(s58, t2);
    n6 && e2.push(n6);
  }
  return e2.length ? s58.update({ effects: e2, annotations: Bn.of(true) }) : null;
}
function Hn(s58) {
  setTimeout(() => {
    let t2 = s58.hasFocus;
    if (t2 != s58.inputState.notifiedFocused) {
      let e2 = Pn(s58.state, t2);
      e2 ? s58.dispatch(e2) : s58.update([]);
    }
  }, 10);
}
q2.focus = (s58) => {
  s58.inputState.lastFocusTime = Date.now(), !s58.scrollDOM.scrollTop && (s58.inputState.lastScrollTop || s58.inputState.lastScrollLeft) && (s58.scrollDOM.scrollTop = s58.inputState.lastScrollTop, s58.scrollDOM.scrollLeft = s58.inputState.lastScrollLeft), Hn(s58);
};
q2.blur = (s58) => {
  s58.observer.clearSelectionRange(), Hn(s58);
};
q2.compositionstart = q2.compositionupdate = (s58) => {
  s58.observer.editContext || (s58.inputState.compositionFirstChange == null && (s58.inputState.compositionFirstChange = true), s58.inputState.composing < 0 && (s58.inputState.composing = 0));
};
q2.compositionend = (s58) => {
  s58.observer.editContext || (s58.inputState.composing = -1, s58.inputState.compositionEndedAt = Date.now(), s58.inputState.compositionPendingKey = true, s58.inputState.compositionPendingChange = s58.observer.pendingRecords().length > 0, s58.inputState.compositionFirstChange = null, y3.chrome && y3.android ? s58.observer.flushSoon() : s58.inputState.compositionPendingChange ? Promise.resolve().then(() => s58.observer.flush()) : setTimeout(() => {
    s58.inputState.composing < 0 && s58.docView.hasComposition && s58.update([]);
  }, 50));
};
q2.contextmenu = (s58) => {
  s58.inputState.lastContextMenu = Date.now();
};
Y2.beforeinput = (s58, t2) => {
  var e2, i3;
  if (t2.inputType == "insertReplacementText" && s58.observer.editContext) {
    let o3 = (e2 = t2.dataTransfer) === null || e2 === void 0 ? void 0 : e2.getData("text/plain"), r2 = t2.getTargetRanges();
    if (o3 && r2.length) {
      let l8 = r2[0], h3 = s58.posAtDOM(l8.startContainer, l8.startOffset), f2 = s58.posAtDOM(l8.endContainer, l8.endOffset);
      return $i(s58, { from: h3, to: f2, insert: s58.state.toText(o3) }, null), true;
    }
  }
  let n6;
  if (y3.chrome && y3.android && (n6 = On.find((o3) => o3.inputType == t2.inputType)) && (s58.observer.delayAndroidKey(n6.key, n6.keyCode), n6.key == "Backspace" || n6.key == "Delete")) {
    let o3 = ((i3 = globalThis.visualViewport) === null || i3 === void 0 ? void 0 : i3.height) || 0;
    setTimeout(() => {
      var r2;
      (((r2 = globalThis.visualViewport) === null || r2 === void 0 ? void 0 : r2.height) || 0) > o3 + 10 && s58.hasFocus && (s58.contentDOM.blur(), s58.focus());
    }, 100);
  }
  return y3.ios && t2.inputType == "deleteContentForward" && s58.observer.flushSoon(), y3.safari && t2.inputType == "insertText" && s58.inputState.composing >= 0 && setTimeout(() => q2.compositionend(s58, t2), 20), false;
};
var bs = /* @__PURE__ */ new Set();
function rr(s58) {
  bs.has(s58) || (bs.add(s58), s58.addEventListener("copy", () => {
  }), s58.addEventListener("cut", () => {
  }));
}
var ys = ["pre-wrap", "normal", "pre-line", "break-spaces"];
var yt = false;
function mi() {
  yt = false;
}
var Re2 = class {
  constructor(t2) {
    this.lineWrapping = t2, this.doc = m2.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t2, e2) {
    let i3 = this.doc.lineAt(e2).number - this.doc.lineAt(t2).number + 1;
    return this.lineWrapping && (i3 += Math.max(0, Math.ceil((e2 - t2 - i3 * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i3;
  }
  heightForLine(t2) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t2 - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t2) {
    return this.doc = t2, this;
  }
  mustRefreshForWrapping(t2) {
    return ys.indexOf(t2) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t2) {
    let e2 = false;
    for (let i3 = 0; i3 < t2.length; i3++) {
      let n6 = t2[i3];
      n6 < 0 ? i3++ : this.heightSamples[Math.floor(n6 * 10)] || (e2 = true, this.heightSamples[Math.floor(n6 * 10)] = true);
    }
    return e2;
  }
  refresh(t2, e2, i3, n6, o3, r2) {
    let l8 = ys.indexOf(t2) > -1, h3 = Math.round(e2) != Math.round(this.lineHeight) || this.lineWrapping != l8;
    if (this.lineWrapping = l8, this.lineHeight = e2, this.charWidth = i3, this.textHeight = n6, this.lineLength = o3, h3) {
      this.heightSamples = {};
      for (let f2 = 0; f2 < r2.length; f2++) {
        let a2 = r2[f2];
        a2 < 0 ? f2++ : this.heightSamples[Math.floor(a2 * 10)] = true;
      }
    }
    return h3;
  }
};
var Ee2 = class {
  constructor(t2, e2) {
    this.from = t2, this.heights = e2, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
};
var X2 = class s37 {
  constructor(t2, e2, i3, n6, o3) {
    this.from = t2, this.length = e2, this.top = i3, this.height = n6, this._content = o3;
  }
  get type() {
    return typeof this._content == "number" ? W2.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof at ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(t2) {
    let e2 = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t2._content) ? t2._content : [t2]);
    return new s37(this.from, this.length + t2.length, this.top, this.height + t2.height, e2);
  }
};
var R2 = function(s58) {
  return s58[s58.ByPos = 0] = "ByPos", s58[s58.ByHeight = 1] = "ByHeight", s58[s58.ByPosNoHeight = 2] = "ByPosNoHeight", s58;
}(R2 || (R2 = {}));
var ye2 = 1e-3;
var z2 = class s38 {
  constructor(t2, e2, i3 = 2) {
    this.length = t2, this.height = e2, this.flags = i3;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t2) {
    this.flags = (t2 ? 2 : 0) | this.flags & -3;
  }
  setHeight(t2) {
    this.height != t2 && (Math.abs(this.height - t2) > ye2 && (yt = true), this.height = t2);
  }
  replace(t2, e2, i3) {
    return s38.of(i3);
  }
  decomposeLeft(t2, e2) {
    e2.push(this);
  }
  decomposeRight(t2, e2) {
    e2.push(this);
  }
  applyChanges(t2, e2, i3, n6) {
    let o3 = this, r2 = i3.doc;
    for (let l8 = n6.length - 1; l8 >= 0; l8--) {
      let { fromA: h3, toA: f2, fromB: a2, toB: c4 } = n6[l8], d3 = o3.lineAt(h3, R2.ByPosNoHeight, i3.setDoc(e2), 0, 0), u4 = d3.to >= f2 ? d3 : o3.lineAt(f2, R2.ByPosNoHeight, i3, 0, 0);
      for (c4 += u4.to - f2, f2 = u4.to; l8 > 0 && d3.from <= n6[l8 - 1].toA; ) h3 = n6[l8 - 1].fromA, a2 = n6[l8 - 1].fromB, l8--, h3 < d3.from && (d3 = o3.lineAt(h3, R2.ByPosNoHeight, i3, 0, 0));
      a2 += d3.from - h3, h3 = d3.from;
      let p2 = yi.build(i3.setDoc(r2), t2, a2, c4);
      o3 = Le2(o3, o3.replace(h3, f2, p2));
    }
    return o3.updateHeight(i3, 0);
  }
  static empty() {
    return new I2(0, 0);
  }
  static of(t2) {
    if (t2.length == 1) return t2[0];
    let e2 = 0, i3 = t2.length, n6 = 0, o3 = 0;
    for (; ; ) if (e2 == i3) if (n6 > o3 * 2) {
      let l8 = t2[e2 - 1];
      l8.break ? t2.splice(--e2, 1, l8.left, null, l8.right) : t2.splice(--e2, 1, l8.left, l8.right), i3 += 1 + l8.break, n6 -= l8.size;
    } else if (o3 > n6 * 2) {
      let l8 = t2[i3];
      l8.break ? t2.splice(i3, 1, l8.left, null, l8.right) : t2.splice(i3, 1, l8.left, l8.right), i3 += 2 + l8.break, o3 -= l8.size;
    } else break;
    else if (n6 < o3) {
      let l8 = t2[e2++];
      l8 && (n6 += l8.size);
    } else {
      let l8 = t2[--i3];
      l8 && (o3 += l8.size);
    }
    let r2 = 0;
    return t2[e2 - 1] == null ? (r2 = 1, e2--) : t2[e2] == null && (r2 = 1, i3++), new bi(s38.of(t2.slice(0, e2)), r2, s38.of(t2.slice(i3)));
  }
};
function Le2(s58, t2) {
  return s58 == t2 ? s58 : (s58.constructor != t2.constructor && (yt = true), t2);
}
z2.prototype.size = 1;
var Be2 = class extends z2 {
  constructor(t2, e2, i3) {
    super(t2, e2), this.deco = i3;
  }
  blockAt(t2, e2, i3, n6) {
    return new X2(n6, this.length, i3, this.height, this.deco || 0);
  }
  lineAt(t2, e2, i3, n6, o3) {
    return this.blockAt(0, i3, n6, o3);
  }
  forEachLine(t2, e2, i3, n6, o3, r2) {
    t2 <= o3 + this.length && e2 >= o3 && r2(this.blockAt(0, i3, n6, o3));
  }
  updateHeight(t2, e2 = 0, i3 = false, n6) {
    return n6 && n6.from <= e2 && n6.more && this.setHeight(n6.heights[n6.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
};
var I2 = class s39 extends Be2 {
  constructor(t2, e2) {
    super(t2, e2, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t2, e2, i3, n6) {
    return new X2(n6, this.length, i3, this.height, this.breaks);
  }
  replace(t2, e2, i3) {
    let n6 = i3[0];
    return i3.length == 1 && (n6 instanceof s39 || n6 instanceof rt2 && n6.flags & 4) && Math.abs(this.length - n6.length) < 10 ? (n6 instanceof rt2 ? n6 = new s39(n6.length, this.height) : n6.height = this.height, this.outdated || (n6.outdated = false), n6) : z2.of(i3);
  }
  updateHeight(t2, e2 = 0, i3 = false, n6) {
    return n6 && n6.from <= e2 && n6.more ? this.setHeight(n6.heights[n6.index++]) : (i3 || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t2.heightForLine(this.length - this.collapsed)) + this.breaks * t2.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
};
var rt2 = class s40 extends z2 {
  constructor(t2) {
    super(t2, 0);
  }
  heightMetrics(t2, e2) {
    let i3 = t2.doc.lineAt(e2).number, n6 = t2.doc.lineAt(e2 + this.length).number, o3 = n6 - i3 + 1, r2, l8 = 0;
    if (t2.lineWrapping) {
      let h3 = Math.min(this.height, t2.lineHeight * o3);
      r2 = h3 / o3, this.length > o3 + 1 && (l8 = (this.height - h3) / (this.length - o3 - 1));
    } else r2 = this.height / o3;
    return { firstLine: i3, lastLine: n6, perLine: r2, perChar: l8 };
  }
  blockAt(t2, e2, i3, n6) {
    let { firstLine: o3, lastLine: r2, perLine: l8, perChar: h3 } = this.heightMetrics(e2, n6);
    if (e2.lineWrapping) {
      let f2 = n6 + (t2 < e2.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t2 - i3) / this.height)) * this.length)), a2 = e2.doc.lineAt(f2), c4 = l8 + a2.length * h3, d3 = Math.max(i3, t2 - c4 / 2);
      return new X2(a2.from, a2.length, d3, c4, 0);
    } else {
      let f2 = Math.max(0, Math.min(r2 - o3, Math.floor((t2 - i3) / l8))), { from: a2, length: c4 } = e2.doc.line(o3 + f2);
      return new X2(a2, c4, i3 + l8 * f2, l8, 0);
    }
  }
  lineAt(t2, e2, i3, n6, o3) {
    if (e2 == R2.ByHeight) return this.blockAt(t2, i3, n6, o3);
    if (e2 == R2.ByPosNoHeight) {
      let { from: u4, to: p2 } = i3.doc.lineAt(t2);
      return new X2(u4, p2 - u4, 0, 0, 0);
    }
    let { firstLine: r2, perLine: l8, perChar: h3 } = this.heightMetrics(i3, o3), f2 = i3.doc.lineAt(t2), a2 = l8 + f2.length * h3, c4 = f2.number - r2, d3 = n6 + l8 * c4 + h3 * (f2.from - o3 - c4);
    return new X2(f2.from, f2.length, Math.max(n6, Math.min(d3, n6 + this.height - a2)), a2, 0);
  }
  forEachLine(t2, e2, i3, n6, o3, r2) {
    t2 = Math.max(t2, o3), e2 = Math.min(e2, o3 + this.length);
    let { firstLine: l8, perLine: h3, perChar: f2 } = this.heightMetrics(i3, o3);
    for (let a2 = t2, c4 = n6; a2 <= e2; ) {
      let d3 = i3.doc.lineAt(a2);
      if (a2 == t2) {
        let p2 = d3.number - l8;
        c4 += h3 * p2 + f2 * (t2 - o3 - p2);
      }
      let u4 = h3 + f2 * d3.length;
      r2(new X2(d3.from, d3.length, c4, u4, 0)), c4 += u4, a2 = d3.to + 1;
    }
  }
  replace(t2, e2, i3) {
    let n6 = this.length - e2;
    if (n6 > 0) {
      let o3 = i3[i3.length - 1];
      o3 instanceof s40 ? i3[i3.length - 1] = new s40(o3.length + n6) : i3.push(null, new s40(n6 - 1));
    }
    if (t2 > 0) {
      let o3 = i3[0];
      o3 instanceof s40 ? i3[0] = new s40(t2 + o3.length) : i3.unshift(new s40(t2 - 1), null);
    }
    return z2.of(i3);
  }
  decomposeLeft(t2, e2) {
    e2.push(new s40(t2 - 1), null);
  }
  decomposeRight(t2, e2) {
    e2.push(null, new s40(this.length - t2 - 1));
  }
  updateHeight(t2, e2 = 0, i3 = false, n6) {
    let o3 = e2 + this.length;
    if (n6 && n6.from <= e2 + this.length && n6.more) {
      let r2 = [], l8 = Math.max(e2, n6.from), h3 = -1;
      for (n6.from > e2 && r2.push(new s40(n6.from - e2 - 1).updateHeight(t2, e2)); l8 <= o3 && n6.more; ) {
        let a2 = t2.doc.lineAt(l8).length;
        r2.length && r2.push(null);
        let c4 = n6.heights[n6.index++];
        h3 == -1 ? h3 = c4 : Math.abs(c4 - h3) >= ye2 && (h3 = -2);
        let d3 = new I2(a2, c4);
        d3.outdated = false, r2.push(d3), l8 += a2 + 1;
      }
      l8 <= o3 && r2.push(null, new s40(o3 - l8).updateHeight(t2, l8));
      let f2 = z2.of(r2);
      return (h3 < 0 || Math.abs(f2.height - this.height) >= ye2 || Math.abs(h3 - this.heightMetrics(t2, e2).perLine) >= ye2) && (yt = true), Le2(this, f2);
    } else (i3 || this.outdated) && (this.setHeight(t2.heightForGap(e2, e2 + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
};
var bi = class extends z2 {
  constructor(t2, e2, i3) {
    super(t2.length + e2 + i3.length, t2.height + i3.height, e2 | (t2.outdated || i3.outdated ? 2 : 0)), this.left = t2, this.right = i3, this.size = t2.size + i3.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t2, e2, i3, n6) {
    let o3 = i3 + this.left.height;
    return t2 < o3 ? this.left.blockAt(t2, e2, i3, n6) : this.right.blockAt(t2, e2, o3, n6 + this.left.length + this.break);
  }
  lineAt(t2, e2, i3, n6, o3) {
    let r2 = n6 + this.left.height, l8 = o3 + this.left.length + this.break, h3 = e2 == R2.ByHeight ? t2 < r2 : t2 < l8, f2 = h3 ? this.left.lineAt(t2, e2, i3, n6, o3) : this.right.lineAt(t2, e2, i3, r2, l8);
    if (this.break || (h3 ? f2.to < l8 : f2.from > l8)) return f2;
    let a2 = e2 == R2.ByPosNoHeight ? R2.ByPosNoHeight : R2.ByPos;
    return h3 ? f2.join(this.right.lineAt(l8, a2, i3, r2, l8)) : this.left.lineAt(l8, a2, i3, n6, o3).join(f2);
  }
  forEachLine(t2, e2, i3, n6, o3, r2) {
    let l8 = n6 + this.left.height, h3 = o3 + this.left.length + this.break;
    if (this.break) t2 < h3 && this.left.forEachLine(t2, e2, i3, n6, o3, r2), e2 >= h3 && this.right.forEachLine(t2, e2, i3, l8, h3, r2);
    else {
      let f2 = this.lineAt(h3, R2.ByPos, i3, n6, o3);
      t2 < f2.from && this.left.forEachLine(t2, f2.from - 1, i3, n6, o3, r2), f2.to >= t2 && f2.from <= e2 && r2(f2), e2 > f2.to && this.right.forEachLine(f2.to + 1, e2, i3, l8, h3, r2);
    }
  }
  replace(t2, e2, i3) {
    let n6 = this.left.length + this.break;
    if (e2 < n6) return this.balanced(this.left.replace(t2, e2, i3), this.right);
    if (t2 > this.left.length) return this.balanced(this.left, this.right.replace(t2 - n6, e2 - n6, i3));
    let o3 = [];
    t2 > 0 && this.decomposeLeft(t2, o3);
    let r2 = o3.length;
    for (let l8 of i3) o3.push(l8);
    if (t2 > 0 && ws(o3, r2 - 1), e2 < this.length) {
      let l8 = o3.length;
      this.decomposeRight(e2, o3), ws(o3, l8);
    }
    return z2.of(o3);
  }
  decomposeLeft(t2, e2) {
    let i3 = this.left.length;
    if (t2 <= i3) return this.left.decomposeLeft(t2, e2);
    e2.push(this.left), this.break && (i3++, t2 >= i3 && e2.push(null)), t2 > i3 && this.right.decomposeLeft(t2 - i3, e2);
  }
  decomposeRight(t2, e2) {
    let i3 = this.left.length, n6 = i3 + this.break;
    if (t2 >= n6) return this.right.decomposeRight(t2 - n6, e2);
    t2 < i3 && this.left.decomposeRight(t2, e2), this.break && t2 < n6 && e2.push(null), e2.push(this.right);
  }
  balanced(t2, e2) {
    return t2.size > 2 * e2.size || e2.size > 2 * t2.size ? z2.of(this.break ? [t2, null, e2] : [t2, e2]) : (this.left = Le2(this.left, t2), this.right = Le2(this.right, e2), this.setHeight(t2.height + e2.height), this.outdated = t2.outdated || e2.outdated, this.size = t2.size + e2.size, this.length = t2.length + this.break + e2.length, this);
  }
  updateHeight(t2, e2 = 0, i3 = false, n6) {
    let { left: o3, right: r2 } = this, l8 = e2 + o3.length + this.break, h3 = null;
    return n6 && n6.from <= e2 + o3.length && n6.more ? h3 = o3 = o3.updateHeight(t2, e2, i3, n6) : o3.updateHeight(t2, e2, i3), n6 && n6.from <= l8 + r2.length && n6.more ? h3 = r2 = r2.updateHeight(t2, l8, i3, n6) : r2.updateHeight(t2, l8, i3), h3 ? this.balanced(o3, r2) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
};
function ws(s58, t2) {
  let e2, i3;
  s58[t2] == null && (e2 = s58[t2 - 1]) instanceof rt2 && (i3 = s58[t2 + 1]) instanceof rt2 && s58.splice(t2 - 1, 3, new rt2(e2.length + 1 + i3.length));
}
var lr = 5;
var yi = class s41 {
  constructor(t2, e2) {
    this.pos = t2, this.oracle = e2, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t2;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t2, e2) {
    if (this.lineStart > -1) {
      let i3 = Math.min(e2, this.lineEnd), n6 = this.nodes[this.nodes.length - 1];
      n6 instanceof I2 ? n6.length += i3 - this.pos : (i3 > this.pos || !this.isCovered) && this.nodes.push(new I2(i3 - this.pos, -1)), this.writtenTo = i3, e2 > i3 && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e2;
  }
  point(t2, e2, i3) {
    if (t2 < e2 || i3.heightRelevant) {
      let n6 = i3.widget ? i3.widget.estimatedHeight : 0, o3 = i3.widget ? i3.widget.lineBreaks : 0;
      n6 < 0 && (n6 = this.oracle.lineHeight);
      let r2 = e2 - t2;
      i3.block ? this.addBlock(new Be2(r2, n6, i3)) : (r2 || o3 || n6 >= lr) && this.addLineDeco(n6, o3, r2);
    } else e2 > t2 && this.span(t2, e2);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: t2, to: e2 } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t2, this.lineEnd = e2, this.writtenTo < t2 && ((this.writtenTo < t2 - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t2 - 1)), this.nodes.push(null)), this.pos > t2 && this.nodes.push(new I2(this.pos - t2, -1)), this.writtenTo = this.pos;
  }
  blankContent(t2, e2) {
    let i3 = new rt2(e2 - t2);
    return this.oracle.doc.lineAt(t2).to == e2 && (i3.flags |= 4), i3;
  }
  ensureLine() {
    this.enterLine();
    let t2 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t2 instanceof I2) return t2;
    let e2 = new I2(0, -1);
    return this.nodes.push(e2), e2;
  }
  addBlock(t2) {
    this.enterLine();
    let e2 = t2.deco;
    e2 && e2.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t2), this.writtenTo = this.pos = this.pos + t2.length, e2 && e2.endSide > 0 && (this.covering = t2);
  }
  addLineDeco(t2, e2, i3) {
    let n6 = this.ensureLine();
    n6.length += i3, n6.collapsed += i3, n6.widgetHeight = Math.max(n6.widgetHeight, t2), n6.breaks += e2, this.writtenTo = this.pos = this.pos + i3;
  }
  finish(t2) {
    let e2 = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e2 instanceof I2) && !this.isCovered ? this.nodes.push(new I2(0, -1)) : (this.writtenTo < this.pos || e2 == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i3 = t2;
    for (let n6 of this.nodes) n6 instanceof I2 && n6.updateHeight(this.oracle, i3), i3 += n6 ? n6.length : 1;
    return this.nodes;
  }
  static build(t2, e2, i3, n6) {
    let o3 = new s41(i3, t2);
    return T.spans(e2, i3, n6, o3, 0), o3.finish(i3);
  }
};
function hr(s58, t2, e2) {
  let i3 = new wi();
  return T.compare(s58, t2, e2, i3, 0), i3.changes;
}
var wi = class {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t2, e2, i3, n6) {
    (t2 < e2 || i3 && i3.heightRelevant || n6 && n6.heightRelevant) && be2(t2, e2, this.changes, 5);
  }
};
function ar(s58, t2) {
  let e2 = s58.getBoundingClientRect(), i3 = s58.ownerDocument, n6 = i3.defaultView || globalThis, o3 = Math.max(0, e2.left), r2 = Math.min(n6.innerWidth, e2.right), l8 = Math.max(0, e2.top), h3 = Math.min(n6.innerHeight, e2.bottom);
  for (let f2 = s58.parentNode; f2 && f2 != i3.body; ) if (f2.nodeType == 1) {
    let a2 = f2, c4 = globalThis.getComputedStyle(a2);
    if ((a2.scrollHeight > a2.clientHeight || a2.scrollWidth > a2.clientWidth) && c4.overflow != "visible") {
      let d3 = a2.getBoundingClientRect();
      o3 = Math.max(o3, d3.left), r2 = Math.min(r2, d3.right), l8 = Math.max(l8, d3.top), h3 = Math.min(f2 == s58.parentNode ? n6.innerHeight : h3, d3.bottom);
    }
    f2 = c4.position == "absolute" || c4.position == "fixed" ? a2.offsetParent : a2.parentNode;
  } else if (f2.nodeType == 11) f2 = f2.host;
  else break;
  return { left: o3 - e2.left, right: Math.max(o3, r2) - e2.left, top: l8 - (e2.top + t2), bottom: Math.max(l8, h3) - (e2.top + t2) };
}
function fr(s58) {
  let t2 = s58.getBoundingClientRect(), e2 = s58.ownerDocument.defaultView || globalThis;
  return t2.left < e2.innerWidth && t2.right > 0 && t2.top < e2.innerHeight && t2.bottom > 0;
}
function cr(s58, t2) {
  let e2 = s58.getBoundingClientRect();
  return { left: 0, right: e2.right - e2.left, top: t2, bottom: e2.bottom - (e2.top + t2) };
}
var qt = class {
  constructor(t2, e2, i3, n6) {
    this.from = t2, this.to = e2, this.size = i3, this.displaySize = n6;
  }
  static same(t2, e2) {
    if (t2.length != e2.length) return false;
    for (let i3 = 0; i3 < t2.length; i3++) {
      let n6 = t2[i3], o3 = e2[i3];
      if (n6.from != o3.from || n6.to != o3.to || n6.size != o3.size) return false;
    }
    return true;
  }
  draw(t2, e2) {
    return T3.replace({ widget: new xi(this.displaySize * (e2 ? t2.scaleY : t2.scaleX), e2) }).range(this.from, this.to);
  }
};
var xi = class extends ht {
  constructor(t2, e2) {
    super(), this.size = t2, this.vertical = e2;
  }
  eq(t2) {
    return t2.size == this.size && t2.vertical == this.vertical;
  }
  toDOM() {
    let t2 = document.createElement("div");
    return this.vertical ? t2.style.height = this.size + "px" : (t2.style.width = this.size + "px", t2.style.height = "2px", t2.style.display = "inline-block"), t2;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
};
var Pe2 = class {
  constructor(t2) {
    this.state = t2, this.pixelViewport = { left: 0, right: globalThis.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = xs, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = L2.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let e2 = t2.facet(Ie2).some((i3) => typeof i3 != "function" && i3.class == "cm-lineWrapping");
    this.heightOracle = new Re2(e2), this.stateDeco = t2.facet(Jt).filter((i3) => typeof i3 != "function"), this.heightMap = z2.empty().applyChanges(this.stateDeco, m2.empty, this.heightOracle.setDoc(t2.doc), [new _2(0, 0, 0, t2.doc.length)]);
    for (let i3 = 0; i3 < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i3++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = T3.set(this.lineGaps.map((i3) => i3.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t2 = [this.viewport], { main: e2 } = this.state.selection;
    for (let i3 = 0; i3 <= 1; i3++) {
      let n6 = i3 ? e2.head : e2.anchor;
      if (!t2.some(({ from: o3, to: r2 }) => n6 >= o3 && n6 <= r2)) {
        let { from: o3, to: r2 } = this.lineBlockAt(n6);
        t2.push(new Ct(o3, r2));
      }
    }
    return this.viewports = t2.sort((i3, n6) => i3.from - n6.from), this.updateScaler();
  }
  updateScaler() {
    let t2 = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? xs : new vi(this.heightOracle, this.heightMap, this.viewports), t2.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t2) => {
      this.viewportLines.push(Ht(t2, this.scaler));
    });
  }
  update(t2, e2 = null) {
    this.state = t2.state;
    let i3 = this.stateDeco;
    this.stateDeco = this.state.facet(Jt).filter((a2) => typeof a2 != "function");
    let n6 = t2.changedRanges, o3 = _2.extendWithRanges(n6, hr(i3, this.stateDeco, t2 ? t2.changes : A.empty(this.state.doc.length))), r2 = this.heightMap.height, l8 = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    mi(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t2.startState.doc, this.heightOracle.setDoc(this.state.doc), o3), (this.heightMap.height != r2 || yt) && (t2.flags |= 2), l8 ? (this.scrollAnchorPos = t2.changes.mapPos(l8.from, -1), this.scrollAnchorHeight = l8.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = r2);
    let h3 = o3.length ? this.mapViewport(this.viewport, t2.changes) : this.viewport;
    (e2 && (e2.range.head < h3.from || e2.range.head > h3.to) || !this.viewportIsAppropriate(h3)) && (h3 = this.getViewport(0, e2));
    let f2 = h3.from != this.viewport.from || h3.to != this.viewport.to;
    this.viewport = h3, t2.flags |= this.updateForViewport(), (f2 || !t2.changes.empty || t2.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t2.changes))), t2.flags |= this.computeVisibleRanges(t2.changes), e2 && (this.scrollTarget = e2), !this.mustEnforceCursorAssoc && t2.selectionSet && t2.view.lineWrapping && t2.state.selection.main.empty && t2.state.selection.main.assoc && !t2.state.facet(gn) && (this.mustEnforceCursorAssoc = true);
  }
  measure(t2) {
    let e2 = t2.contentDOM, i3 = globalThis.getComputedStyle(e2), n6 = this.heightOracle, o3 = i3.whiteSpace;
    this.defaultTextDirection = i3.direction == "rtl" ? L2.RTL : L2.LTR;
    let r2 = this.heightOracle.mustRefreshForWrapping(o3), l8 = e2.getBoundingClientRect(), h3 = r2 || this.mustMeasureContent || this.contentDOMHeight != l8.height;
    this.contentDOMHeight = l8.height, this.mustMeasureContent = false;
    let f2 = 0, a2 = 0;
    if (l8.width && l8.height) {
      let { scaleX: x8, scaleY: S7 } = Ks(e2, l8);
      (x8 > 5e-3 && Math.abs(this.scaleX - x8) > 5e-3 || S7 > 5e-3 && Math.abs(this.scaleY - S7) > 5e-3) && (this.scaleX = x8, this.scaleY = S7, f2 |= 16, r2 = h3 = true);
    }
    let c4 = (parseInt(i3.paddingTop) || 0) * this.scaleY, d3 = (parseInt(i3.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != c4 || this.paddingBottom != d3) && (this.paddingTop = c4, this.paddingBottom = d3, f2 |= 18), this.editorWidth != t2.scrollDOM.clientWidth && (n6.lineWrapping && (h3 = true), this.editorWidth = t2.scrollDOM.clientWidth, f2 |= 16);
    let u4 = t2.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != u4 && (this.scrollAnchorHeight = -1, this.scrollTop = u4), this.scrolledToBottom = Ys(t2.scrollDOM);
    let p2 = (this.printing ? cr : ar)(e2, this.paddingTop), g6 = p2.top - this.pixelViewport.top, m7 = p2.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p2;
    let b6 = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (b6 != this.inView && (this.inView = b6, b6 && (h3 = true)), !this.inView && !this.scrollTarget && !fr(t2.dom)) return 0;
    let w7 = l8.width;
    if ((this.contentDOMWidth != w7 || this.editorHeight != t2.scrollDOM.clientHeight) && (this.contentDOMWidth = l8.width, this.editorHeight = t2.scrollDOM.clientHeight, f2 |= 16), h3) {
      let x8 = t2.docView.measureVisibleLineHeights(this.viewport);
      if (n6.mustRefreshForHeights(x8) && (r2 = true), r2 || n6.lineWrapping && Math.abs(w7 - this.contentDOMWidth) > n6.charWidth) {
        let { lineHeight: S7, charWidth: C6, textHeight: E6 } = t2.docView.measureTextSize();
        r2 = S7 > 0 && n6.refresh(o3, S7, C6, E6, Math.max(5, w7 / C6), x8), r2 && (t2.docView.minWidth = 0, f2 |= 16);
      }
      g6 > 0 && m7 > 0 ? a2 = Math.max(g6, m7) : g6 < 0 && m7 < 0 && (a2 = Math.min(g6, m7)), mi();
      for (let S7 of this.viewports) {
        let C6 = S7.from == this.viewport.from ? x8 : t2.docView.measureVisibleLineHeights(S7);
        this.heightMap = (r2 ? z2.empty().applyChanges(this.stateDeco, m2.empty, this.heightOracle, [new _2(0, 0, 0, t2.state.doc.length)]) : this.heightMap).updateHeight(n6, 0, r2, new Ee2(S7.from, C6));
      }
      yt && (f2 |= 2);
    }
    let v3 = !this.viewportIsAppropriate(this.viewport, a2) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return v3 && (f2 & 2 && (f2 |= this.updateScaler()), this.viewport = this.getViewport(a2, this.scrollTarget), f2 |= this.updateForViewport()), (f2 & 2 || v3) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r2 ? [] : this.lineGaps, t2)), f2 |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t2.docView.enforceCursorAssoc()), f2;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t2, e2) {
    let i3 = 0.5 - Math.max(-0.5, Math.min(0.5, t2 / 1e3 / 2)), n6 = this.heightMap, o3 = this.heightOracle, { visibleTop: r2, visibleBottom: l8 } = this, h3 = new Ct(n6.lineAt(r2 - i3 * 1e3, R2.ByHeight, o3, 0, 0).from, n6.lineAt(l8 + (1 - i3) * 1e3, R2.ByHeight, o3, 0, 0).to);
    if (e2) {
      let { head: f2 } = e2.range;
      if (f2 < h3.from || f2 > h3.to) {
        let a2 = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), c4 = n6.lineAt(f2, R2.ByPos, o3, 0, 0), d3;
        e2.y == "center" ? d3 = (c4.top + c4.bottom) / 2 - a2 / 2 : e2.y == "start" || e2.y == "nearest" && f2 < h3.from ? d3 = c4.top : d3 = c4.bottom - a2, h3 = new Ct(n6.lineAt(d3 - 1e3 / 2, R2.ByHeight, o3, 0, 0).from, n6.lineAt(d3 + a2 + 1e3 / 2, R2.ByHeight, o3, 0, 0).to);
      }
    }
    return h3;
  }
  mapViewport(t2, e2) {
    let i3 = e2.mapPos(t2.from, -1), n6 = e2.mapPos(t2.to, 1);
    return new Ct(this.heightMap.lineAt(i3, R2.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n6, R2.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: t2, to: e2 }, i3 = 0) {
    if (!this.inView) return true;
    let { top: n6 } = this.heightMap.lineAt(t2, R2.ByPos, this.heightOracle, 0, 0), { bottom: o3 } = this.heightMap.lineAt(e2, R2.ByPos, this.heightOracle, 0, 0), { visibleTop: r2, visibleBottom: l8 } = this;
    return (t2 == 0 || n6 <= r2 - Math.max(10, Math.min(-i3, 250))) && (e2 == this.state.doc.length || o3 >= l8 + Math.max(10, Math.min(i3, 250))) && n6 > r2 - 2 * 1e3 && o3 < l8 + 2 * 1e3;
  }
  mapLineGaps(t2, e2) {
    if (!t2.length || e2.empty) return t2;
    let i3 = [];
    for (let n6 of t2) e2.touchesRange(n6.from, n6.to) || i3.push(new qt(e2.mapPos(n6.from), e2.mapPos(n6.to), n6.size, n6.displaySize));
    return i3;
  }
  ensureLineGaps(t2, e2) {
    let i3 = this.heightOracle.lineWrapping, n6 = i3 ? 1e4 : 2e3, o3 = n6 >> 1, r2 = n6 << 1;
    if (this.defaultTextDirection != L2.LTR && !i3) return [];
    let l8 = [], h3 = (a2, c4, d3, u4) => {
      if (c4 - a2 < o3) return;
      let p2 = this.state.selection.main, g6 = [p2.from];
      p2.empty || g6.push(p2.to);
      for (let b6 of g6) if (b6 > a2 && b6 < c4) {
        h3(a2, b6 - 10, d3, u4), h3(b6 + 10, c4, d3, u4);
        return;
      }
      let m7 = ur(t2, (b6) => b6.from >= d3.from && b6.to <= d3.to && Math.abs(b6.from - a2) < o3 && Math.abs(b6.to - c4) < o3 && !g6.some((w7) => b6.from < w7 && b6.to > w7));
      if (!m7) {
        if (c4 < d3.to && e2 && i3 && e2.visibleRanges.some((v3) => v3.from <= c4 && v3.to >= c4)) {
          let v3 = e2.moveToLineBoundary(x2.cursor(c4), false, true).head;
          v3 > a2 && (c4 = v3);
        }
        let b6 = this.gapSize(d3, a2, c4, u4), w7 = i3 || b6 < 2e6 ? b6 : 2e6;
        m7 = new qt(a2, c4, b6, w7);
      }
      l8.push(m7);
    }, f2 = (a2) => {
      if (a2.length < r2 || a2.type != W2.Text) return;
      let c4 = dr(a2.from, a2.to, this.stateDeco);
      if (c4.total < r2) return;
      let d3 = this.scrollTarget ? this.scrollTarget.range.head : null, u4, p2;
      if (i3) {
        let g6 = n6 / this.heightOracle.lineLength * this.heightOracle.lineHeight, m7, b6;
        if (d3 != null) {
          let w7 = de2(c4, d3), v3 = ((this.visibleBottom - this.visibleTop) / 2 + g6) / a2.height;
          m7 = w7 - v3, b6 = w7 + v3;
        } else m7 = (this.visibleTop - a2.top - g6) / a2.height, b6 = (this.visibleBottom - a2.top + g6) / a2.height;
        u4 = ce2(c4, m7), p2 = ce2(c4, b6);
      } else {
        let g6 = c4.total * this.heightOracle.charWidth, m7 = n6 * this.heightOracle.charWidth, b6 = 0;
        if (g6 > 2e6) for (let C6 of t2) C6.from >= a2.from && C6.from < a2.to && C6.size != C6.displaySize && C6.from * this.heightOracle.charWidth + b6 < this.pixelViewport.left && (b6 = C6.size - C6.displaySize);
        let w7 = this.pixelViewport.left + b6, v3 = this.pixelViewport.right + b6, x8, S7;
        if (d3 != null) {
          let C6 = de2(c4, d3), E6 = ((v3 - w7) / 2 + m7) / g6;
          x8 = C6 - E6, S7 = C6 + E6;
        } else x8 = (w7 - m7) / g6, S7 = (v3 + m7) / g6;
        u4 = ce2(c4, x8), p2 = ce2(c4, S7);
      }
      u4 > a2.from && h3(a2.from, u4, a2, c4), p2 < a2.to && h3(p2, a2.to, a2, c4);
    };
    for (let a2 of this.viewportLines) Array.isArray(a2.type) ? a2.type.forEach(f2) : f2(a2);
    return l8;
  }
  gapSize(t2, e2, i3, n6) {
    let o3 = de2(n6, i3) - de2(n6, e2);
    return this.heightOracle.lineWrapping ? t2.height * o3 : n6.total * this.heightOracle.charWidth * o3;
  }
  updateLineGaps(t2) {
    qt.same(t2, this.lineGaps) || (this.lineGaps = t2, this.lineGapDeco = T3.set(t2.map((e2) => e2.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t2) {
    let e2 = this.stateDeco;
    this.lineGaps.length && (e2 = e2.concat(this.lineGapDeco));
    let i3 = [];
    T.spans(e2, this.viewport.from, this.viewport.to, { span(o3, r2) {
      i3.push({ from: o3, to: r2 });
    }, point() {
    } }, 20);
    let n6 = 0;
    if (i3.length != this.visibleRanges.length) n6 = 12;
    else for (let o3 = 0; o3 < i3.length && !(n6 & 8); o3++) {
      let r2 = this.visibleRanges[o3], l8 = i3[o3];
      (r2.from != l8.from || r2.to != l8.to) && (n6 |= 4, t2 && t2.mapPos(r2.from, -1) == l8.from && t2.mapPos(r2.to, 1) == l8.to || (n6 |= 8));
    }
    return this.visibleRanges = i3, n6;
  }
  lineBlockAt(t2) {
    return t2 >= this.viewport.from && t2 <= this.viewport.to && this.viewportLines.find((e2) => e2.from <= t2 && e2.to >= t2) || Ht(this.heightMap.lineAt(t2, R2.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t2) {
    return t2 >= this.viewportLines[0].top && t2 <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e2) => e2.top <= t2 && e2.bottom >= t2) || Ht(this.heightMap.lineAt(this.scaler.fromDOM(t2), R2.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t2) {
    let e2 = this.lineBlockAtHeight(t2 + 8);
    return e2.from >= this.viewport.from || this.viewportLines[0].top - t2 > 200 ? e2 : this.viewportLines[0];
  }
  elementAtHeight(t2) {
    return Ht(this.heightMap.blockAt(this.scaler.fromDOM(t2), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
};
var Ct = class {
  constructor(t2, e2) {
    this.from = t2, this.to = e2;
  }
};
function dr(s58, t2, e2) {
  let i3 = [], n6 = s58, o3 = 0;
  return T.spans(e2, s58, t2, { span() {
  }, point(r2, l8) {
    r2 > n6 && (i3.push({ from: n6, to: r2 }), o3 += r2 - n6), n6 = l8;
  } }, 20), n6 < t2 && (i3.push({ from: n6, to: t2 }), o3 += t2 - n6), { total: o3, ranges: i3 };
}
function ce2({ total: s58, ranges: t2 }, e2) {
  if (e2 <= 0) return t2[0].from;
  if (e2 >= 1) return t2[t2.length - 1].to;
  let i3 = Math.floor(s58 * e2);
  for (let n6 = 0; ; n6++) {
    let { from: o3, to: r2 } = t2[n6], l8 = r2 - o3;
    if (i3 <= l8) return o3 + i3;
    i3 -= l8;
  }
}
function de2(s58, t2) {
  let e2 = 0;
  for (let { from: i3, to: n6 } of s58.ranges) {
    if (t2 <= n6) {
      e2 += t2 - i3;
      break;
    }
    e2 += n6 - i3;
  }
  return e2 / s58.total;
}
function ur(s58, t2) {
  for (let e2 of s58) if (t2(e2)) return e2;
}
var xs = { toDOM(s58) {
  return s58;
}, fromDOM(s58) {
  return s58;
}, scale: 1, eq(s58) {
  return s58 == this;
} };
var vi = class s42 {
  constructor(t2, e2, i3) {
    let n6 = 0, o3 = 0, r2 = 0;
    this.viewports = i3.map(({ from: l8, to: h3 }) => {
      let f2 = e2.lineAt(l8, R2.ByPos, t2, 0, 0).top, a2 = e2.lineAt(h3, R2.ByPos, t2, 0, 0).bottom;
      return n6 += a2 - f2, { from: l8, to: h3, top: f2, bottom: a2, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n6) / (e2.height - n6);
    for (let l8 of this.viewports) l8.domTop = r2 + (l8.top - o3) * this.scale, r2 = l8.domBottom = l8.domTop + (l8.bottom - l8.top), o3 = l8.bottom;
  }
  toDOM(t2) {
    for (let e2 = 0, i3 = 0, n6 = 0; ; e2++) {
      let o3 = e2 < this.viewports.length ? this.viewports[e2] : null;
      if (!o3 || t2 < o3.top) return n6 + (t2 - i3) * this.scale;
      if (t2 <= o3.bottom) return o3.domTop + (t2 - o3.top);
      i3 = o3.bottom, n6 = o3.domBottom;
    }
  }
  fromDOM(t2) {
    for (let e2 = 0, i3 = 0, n6 = 0; ; e2++) {
      let o3 = e2 < this.viewports.length ? this.viewports[e2] : null;
      if (!o3 || t2 < o3.domTop) return i3 + (t2 - n6) / this.scale;
      if (t2 <= o3.domBottom) return o3.top + (t2 - o3.domTop);
      i3 = o3.bottom, n6 = o3.domBottom;
    }
  }
  eq(t2) {
    return t2 instanceof s42 ? this.scale == t2.scale && this.viewports.length == t2.viewports.length && this.viewports.every((e2, i3) => e2.from == t2.viewports[i3].from && e2.to == t2.viewports[i3].to) : false;
  }
};
function Ht(s58, t2) {
  if (t2.scale == 1) return s58;
  let e2 = t2.toDOM(s58.top), i3 = t2.toDOM(s58.bottom);
  return new X2(s58.from, s58.length, e2, i3 - e2, Array.isArray(s58._content) ? s58._content.map((n6) => Ht(n6, t2)) : s58._content);
}
var ue2 = k2.define({ combine: (s58) => s58.join(" ") });
var Si = k2.define({ combine: (s58) => s58.indexOf(true) > -1 });
var Ci = T2.newName();
var Nn = T2.newName();
var Vn = T2.newName();
var Fn = { "&light": "." + Nn, "&dark": "." + Vn };
function Mi(s58, t2, e2) {
  return new T2(t2, { finish(i3) {
    return /&/.test(i3) ? i3.replace(/&\w*/, (n6) => {
      if (n6 == "&") return s58;
      if (!e2 || !e2[n6]) throw new RangeError(`Unsupported selector: ${n6}`);
      return e2[n6];
    }) : s58 + " " + i3;
  } });
}
var pr = Mi("." + Ci, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0, overflowAnchor: "none" }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#ddd" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", zIndex: 200 }, ".cm-gutters-before": { insetInlineStart: 0 }, ".cm-gutters-after": { insetInlineEnd: 0 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", border: "0px solid #ddd", "&.cm-gutters-before": { borderRightWidth: "1px" }, "&.cm-gutters-after": { borderLeftWidth: "1px" } }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-dialog": { padding: "2px 19px 4px 6px", position: "relative", "& label": { fontSize: "80%" } }, ".cm-dialog-close": { position: "absolute", top: "3px", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", fontSize: "14px", padding: "0" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top", userSelect: "none" }, ".cm-highlightSpace": { backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)", backgroundPosition: "center" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, Fn);
var gr = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true };
var Xe2 = y3.ie && y3.ie_version <= 11;
var ki = class {
  constructor(t2) {
    this.view = t2, this.active = false, this.editContext = null, this.selectionRange = new ii(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t2.contentDOM, this.observer = new MutationObserver((e2) => {
      for (let i3 of e2) this.queue.push(i3);
      (y3.ie && y3.ie_version <= 11 || y3.ios && t2.composing) && e2.some((i3) => i3.type == "childList" && i3.removedNodes.length || i3.type == "characterData" && i3.oldValue.length > i3.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), globalThis.EditContext && y3.android && t2.constructor.EDIT_CONTEXT !== false && !(y3.chrome && y3.chrome_version < 126) && (this.editContext = new Ai(t2), t2.state.facet(et2) && (t2.contentDOM.editContext = this.editContext.editContext)), Xe2 && (this.onCharData = (e2) => {
      this.queue.push({ target: e2.target, type: "characterData", oldValue: e2.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), globalThis.matchMedia && (this.printQuery = globalThis.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e2;
      ((e2 = this.view.docView) === null || e2 === void 0 ? void 0 : e2.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t2.scrollDOM)), this.addWindowListeners(this.win = t2.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e2) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e2.length > 0 && e2[e2.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e2) => {
      e2.length > 0 && e2[e2.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t2) {
    this.view.inputState.runHandlers("scroll", t2), this.intersecting && this.view.measure();
  }
  onScroll(t2) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t2);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t2) {
    (t2.type == "change" || !t2.type) && !t2.matches || (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t2) {
    if (this.gapIntersection && (t2.length != this.gaps.length || this.gaps.some((e2, i3) => e2 != t2[i3]))) {
      this.gapIntersection.disconnect();
      for (let e2 of t2) this.gapIntersection.observe(e2);
      this.gaps = t2;
    }
  }
  onSelectionChange(t2) {
    let e2 = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i3 } = this, n6 = this.selectionRange;
    if (i3.state.facet(et2) ? i3.root.activeElement != this.dom : !me2(this.dom, n6)) return;
    let o3 = n6.anchorNode && i3.docView.nearest(n6.anchorNode);
    if (o3 && o3.ignoreEvent(t2)) {
      e2 || (this.selectionChanged = false);
      return;
    }
    (y3.ie && y3.ie_version <= 11 || y3.android && y3.chrome) && !i3.state.selection.main.empty && n6.focusNode && Ft(n6.focusNode, n6.focusOffset, n6.anchorNode, n6.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: t2 } = this, e2 = jt(t2.root);
    if (!e2) return false;
    let i3 = y3.safari && t2.root.nodeType == 11 && t2.root.activeElement == this.dom && mr(this.view, e2) || e2;
    if (!i3 || this.selectionRange.eq(i3)) return false;
    let n6 = me2(this.dom, i3);
    return n6 && !this.selectionChanged && t2.inputState.lastFocusTime > Date.now() - 200 && t2.inputState.lastTouchTime < Date.now() - 300 && fo(this.dom, i3) ? (this.view.inputState.lastFocusTime = 0, t2.docView.updateSelection(), false) : (this.selectionRange.setRange(i3), n6 && (this.selectionChanged = true), true);
  }
  setSelectionRange(t2, e2) {
    this.selectionRange.set(t2.node, t2.offset, e2.node, e2.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t2 = 0, e2 = null;
    for (let i3 = this.dom; i3; ) if (i3.nodeType == 1) !e2 && t2 < this.scrollTargets.length && this.scrollTargets[t2] == i3 ? t2++ : e2 || (e2 = this.scrollTargets.slice(0, t2)), e2 && e2.push(i3), i3 = i3.assignedSlot || i3.parentNode;
    else if (i3.nodeType == 11) i3 = i3.host;
    else break;
    if (t2 < this.scrollTargets.length && !e2 && (e2 = this.scrollTargets.slice(0, t2)), e2) {
      for (let i3 of this.scrollTargets) i3.removeEventListener("scroll", this.onScroll);
      for (let i3 of this.scrollTargets = e2) i3.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t2) {
    if (!this.active) return t2();
    try {
      return this.stop(), t2();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, gr), Xe2 && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), Xe2 && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(t2, e2) {
    var i3;
    if (!this.delayedAndroidKey) {
      let n6 = () => {
        let o3 = this.delayedAndroidKey;
        o3 && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o3.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o3.force && Dt(this.dom, o3.key, o3.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n6);
    }
    (!this.delayedAndroidKey || t2 == "Enter") && (this.delayedAndroidKey = { key: t2, keyCode: e2, force: this.lastChange < Date.now() - 50 || !!(!((i3 = this.delayedAndroidKey) === null || i3 === void 0) && i3.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t2 of this.observer.takeRecords()) this.queue.push(t2);
    return this.queue;
  }
  processRecords() {
    let t2 = this.pendingRecords();
    t2.length && (this.queue = []);
    let e2 = -1, i3 = -1, n6 = false;
    for (let o3 of t2) {
      let r2 = this.readMutation(o3);
      r2 && (r2.typeOver && (n6 = true), e2 == -1 ? { from: e2, to: i3 } = r2 : (e2 = Math.min(r2.from, e2), i3 = Math.max(r2.to, i3)));
    }
    return { from: e2, to: i3, typeOver: n6 };
  }
  readChange() {
    let { from: t2, to: e2, typeOver: i3 } = this.processRecords(), n6 = this.selectionChanged && me2(this.dom, this.selectionRange);
    if (t2 < 0 && !n6) return null;
    t2 > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let o3 = new di(this.view, t2, e2, i3);
    return this.view.docView.domChanged = { newSel: o3.newSel ? o3.newSel.main : null }, o3;
  }
  flush(t2 = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    t2 && this.readSelectionRange();
    let e2 = this.readChange();
    if (!e2) return this.view.requestMeasure(), false;
    let i3 = this.view.state, n6 = An(this.view, e2);
    return this.view.state == i3 && (e2.domChanged || e2.newSel && !e2.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n6;
  }
  readMutation(t2) {
    let e2 = this.view.docView.nearest(t2.target);
    if (!e2 || e2.ignoreMutation(t2)) return null;
    if (e2.markDirty(t2.type == "attributes"), t2.type == "attributes" && (e2.flags |= 4), t2.type == "childList") {
      let i3 = vs(e2, t2.previousSibling || t2.target.previousSibling, -1), n6 = vs(e2, t2.nextSibling || t2.target.nextSibling, 1);
      return { from: i3 ? e2.posAfter(i3) : e2.posAtStart, to: n6 ? e2.posBefore(n6) : e2.posAtEnd, typeOver: false };
    } else return t2.type == "characterData" ? { from: e2.posAtStart, to: e2.posAtEnd, typeOver: t2.target.nodeValue == t2.oldValue } : null;
  }
  setWindow(t2) {
    t2 != this.win && (this.removeWindowListeners(this.win), this.win = t2, this.addWindowListeners(this.win));
  }
  addWindowListeners(t2) {
    t2.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t2.addEventListener("beforeprint", this.onPrint), t2.addEventListener("scroll", this.onScroll), t2.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t2) {
    t2.removeEventListener("scroll", this.onScroll), t2.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t2.removeEventListener("beforeprint", this.onPrint), t2.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t2) {
    this.editContext && (this.editContext.update(t2), t2.startState.facet(et2) != t2.state.facet(et2) && (t2.view.contentDOM.editContext = t2.state.facet(et2) ? this.editContext.editContext : null));
  }
  destroy() {
    var t2, e2, i3;
    this.stop(), (t2 = this.intersection) === null || t2 === void 0 || t2.disconnect(), (e2 = this.gapIntersection) === null || e2 === void 0 || e2.disconnect(), (i3 = this.resizeScroll) === null || i3 === void 0 || i3.disconnect();
    for (let n6 of this.scrollTargets) n6.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
};
function vs(s58, t2, e2) {
  for (; t2; ) {
    let i3 = O2.get(t2);
    if (i3 && i3.parent == s58) return i3;
    let n6 = t2.parentNode;
    t2 = n6 != s58.dom ? n6 : e2 > 0 ? t2.nextSibling : t2.previousSibling;
  }
  return null;
}
function Ss(s58, t2) {
  let e2 = t2.startContainer, i3 = t2.startOffset, n6 = t2.endContainer, o3 = t2.endOffset, r2 = s58.docView.domAtPos(s58.state.selection.main.anchor);
  return Ft(r2.node, r2.offset, n6, o3) && ([e2, i3, n6, o3] = [n6, o3, e2, i3]), { anchorNode: e2, anchorOffset: i3, focusNode: n6, focusOffset: o3 };
}
function mr(s58, t2) {
  if (t2.getComposedRanges) {
    let n6 = t2.getComposedRanges(s58.root)[0];
    if (n6) return Ss(s58, n6);
  }
  let e2 = null;
  function i3(n6) {
    n6.preventDefault(), n6.stopImmediatePropagation(), e2 = n6.getTargetRanges()[0];
  }
  return s58.contentDOM.addEventListener("beforeinput", i3, true), s58.dom.ownerDocument.execCommand("indent"), s58.contentDOM.removeEventListener("beforeinput", i3, true), e2 ? Ss(s58, e2) : null;
}
var Ai = class {
  constructor(t2) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t2.state);
    let e2 = this.editContext = new globalThis.EditContext({ text: t2.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t2.state.selection.main.anchor))), selectionEnd: this.toContextPos(t2.state.selection.main.head) });
    this.handlers.textupdate = (i3) => {
      let n6 = t2.state.selection.main, { anchor: o3, head: r2 } = n6, l8 = this.toEditorPos(i3.updateRangeStart), h3 = this.toEditorPos(i3.updateRangeEnd);
      t2.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i3.updateRangeStart, editorBase: l8, drifted: false });
      let f2 = h3 - l8 > i3.text.length;
      l8 == this.from && o3 < this.from ? l8 = o3 : h3 == this.to && o3 > this.to && (h3 = o3);
      let a2 = Dn(t2.state.sliceDoc(l8, h3), i3.text, (f2 ? n6.from : n6.to) - l8, f2 ? "end" : null);
      if (!a2) {
        let d3 = x2.single(this.toEditorPos(i3.selectionStart), this.toEditorPos(i3.selectionEnd));
        d3.main.eq(n6) || t2.dispatch({ selection: d3, userEvent: "select" });
        return;
      }
      let c4 = { from: a2.from + l8, to: a2.toA + l8, insert: m2.of(i3.text.slice(a2.from, a2.toB).split(`
`)) };
      if ((y3.mac || y3.android) && c4.from == r2 - 1 && /^\. ?$/.test(i3.text) && t2.contentDOM.getAttribute("autocorrect") == "off" && (c4 = { from: l8, to: h3, insert: m2.of([i3.text.replace(".", " ")]) }), this.pendingContextChange = c4, !t2.state.readOnly) {
        let d3 = this.to - this.from + (c4.to - c4.from + c4.insert.length);
        $i(t2, c4, x2.single(this.toEditorPos(i3.selectionStart, d3), this.toEditorPos(i3.selectionEnd, d3)));
      }
      this.pendingContextChange && (this.revertPending(t2.state), this.setSelection(t2.state)), c4.from < c4.to && !c4.insert.length && t2.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e2.text.slice(Math.max(0, i3.updateRangeStart - 1), Math.min(e2.text.length, i3.updateRangeStart + 1))) && this.handlers.compositionend(i3);
    }, this.handlers.characterboundsupdate = (i3) => {
      let n6 = [], o3 = null;
      for (let r2 = this.toEditorPos(i3.rangeStart), l8 = this.toEditorPos(i3.rangeEnd); r2 < l8; r2++) {
        let h3 = t2.coordsForChar(r2);
        o3 = h3 && new DOMRect(h3.left, h3.top, h3.right - h3.left, h3.bottom - h3.top) || o3 || new DOMRect(), n6.push(o3);
      }
      e2.updateCharacterBounds(i3.rangeStart, n6);
    }, this.handlers.textformatupdate = (i3) => {
      let n6 = [];
      for (let o3 of i3.getTextFormats()) {
        let r2 = o3.underlineStyle, l8 = o3.underlineThickness;
        if (!/none/i.test(r2) && !/none/i.test(l8)) {
          let h3 = this.toEditorPos(o3.rangeStart), f2 = this.toEditorPos(o3.rangeEnd);
          if (h3 < f2) {
            let a2 = `text-decoration: underline ${/^[a-z]/.test(r2) ? r2 + " " : r2 == "Dashed" ? "dashed " : r2 == "Squiggle" ? "wavy " : ""}${/thin/i.test(l8) ? 1 : 2}px`;
            n6.push(T3.mark({ attributes: { style: a2 } }).range(h3, f2));
          }
        }
      }
      t2.dispatch({ effects: bn.of(T3.set(n6)) });
    }, this.handlers.compositionstart = () => {
      t2.inputState.composing < 0 && (t2.inputState.composing = 0, t2.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      if (t2.inputState.composing = -1, t2.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i3 } = this.composing;
        this.composing = null, i3 && this.reset(t2.state);
      }
    };
    for (let i3 in this.handlers) e2.addEventListener(i3, this.handlers[i3]);
    this.measureReq = { read: (i3) => {
      this.editContext.updateControlBounds(i3.contentDOM.getBoundingClientRect());
      let n6 = jt(i3.root);
      n6 && n6.rangeCount && this.editContext.updateSelectionBounds(n6.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t2) {
    let e2 = 0, i3 = false, n6 = this.pendingContextChange;
    return t2.changes.iterChanges((o3, r2, l8, h3, f2) => {
      if (i3) return;
      let a2 = f2.length - (r2 - o3);
      if (n6 && r2 >= n6.to) if (n6.from == o3 && n6.to == r2 && n6.insert.eq(f2)) {
        n6 = this.pendingContextChange = null, e2 += a2, this.to += a2;
        return;
      } else n6 = null, this.revertPending(t2.state);
      if (o3 += e2, r2 += e2, r2 <= this.from) this.from += a2, this.to += a2;
      else if (o3 < this.to) {
        if (o3 < this.from || r2 > this.to || this.to - this.from + f2.length > 3e4) {
          i3 = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(o3), this.toContextPos(r2), f2.toString()), this.to += a2;
      }
      e2 += a2;
    }), n6 && !i3 && this.revertPending(t2.state), !i3;
  }
  update(t2) {
    let e2 = this.pendingContextChange, i3 = t2.startState.selection.main;
    this.composing && (this.composing.drifted || !t2.changes.touchesRange(i3.from, i3.to) && t2.transactions.some((n6) => !n6.isUserEvent("input.type") && n6.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = true, this.composing.editorBase = t2.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t2) || !this.rangeIsValid(t2.state) ? (this.pendingContextChange = null, this.reset(t2.state)) : (t2.docChanged || t2.selectionSet || e2) && this.setSelection(t2.state), (t2.geometryChanged || t2.docChanged || t2.selectionSet) && t2.view.requestMeasure(this.measureReq);
  }
  resetRange(t2) {
    let { head: e2 } = t2.selection.main;
    this.from = Math.max(0, e2 - 1e4), this.to = Math.min(t2.doc.length, e2 + 1e4);
  }
  reset(t2) {
    this.resetRange(t2), this.editContext.updateText(0, this.editContext.text.length, t2.doc.sliceString(this.from, this.to)), this.setSelection(t2);
  }
  revertPending(t2) {
    let e2 = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e2.from), this.toContextPos(e2.from + e2.insert.length), t2.doc.sliceString(e2.from, e2.to));
  }
  setSelection(t2) {
    let { main: e2 } = t2.selection, i3 = this.toContextPos(Math.max(this.from, Math.min(this.to, e2.anchor))), n6 = this.toContextPos(e2.head);
    (this.editContext.selectionStart != i3 || this.editContext.selectionEnd != n6) && this.editContext.updateSelection(i3, n6);
  }
  rangeIsValid(t2) {
    let { head: e2 } = t2.selection.main;
    return !(this.from > 0 && e2 - this.from < 500 || this.to < t2.doc.length && this.to - e2 < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t2, e2 = this.to - this.from) {
    t2 = Math.min(t2, e2);
    let i3 = this.composing;
    return i3 && i3.drifted ? i3.editorBase + (t2 - i3.contextBase) : t2 + this.from;
  }
  toContextPos(t2) {
    let e2 = this.composing;
    return e2 && e2.drifted ? e2.contextBase + (t2 - e2.editorBase) : t2 - this.from;
  }
  destroy() {
    for (let t2 in this.handlers) this.editContext.removeEventListener(t2, this.handlers[t2]);
  }
};
var A2 = class s43 {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || globalThis;
  }
  constructor(t2 = {}) {
    var e2;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t2.parent && t2.parent.appendChild(this.dom);
    let { dispatch: i3 } = t2;
    this.dispatchTransactions = t2.dispatchTransactions || i3 && ((n6) => n6.forEach((o3) => i3(o3, this))) || ((n6) => this.update(n6)), this.dispatch = this.dispatch.bind(this), this._root = t2.root || ao(t2.parent) || document, this.viewState = new Pe2(t2.state || I.create(t2)), t2.scrollTo && t2.scrollTo.is(he) && (this.viewState.scrollTarget = t2.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(St).map((n6) => new It(n6));
    for (let n6 of this.plugins) n6.update(this);
    this.observer = new ki(this), this.inputState = new ui(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Oe2(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e2 = document.fonts) === null || e2 === void 0) && e2.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...t2) {
    let e2 = t2.length == 1 && t2[0] instanceof S ? t2 : t2.length == 1 && Array.isArray(t2[0]) ? t2[0] : [this.state.update(...t2)];
    this.dispatchTransactions(e2, this);
  }
  update(t2) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e2 = false, i3 = false, n6, o3 = this.state;
    for (let d3 of t2) {
      if (d3.startState != o3) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      o3 = d3.state;
    }
    if (this.destroyed) {
      this.viewState.state = o3;
      return;
    }
    let r2 = this.hasFocus, l8 = 0, h3 = null;
    t2.some((d3) => d3.annotation(Bn)) ? (this.inputState.notifiedFocused = r2, l8 = 1) : r2 != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = r2, h3 = Pn(o3, r2), h3 || (l8 = 1));
    let f2 = this.observer.delayedAndroidKey, a2 = null;
    if (f2 ? (this.observer.clearDelayedAndroidKey(), a2 = this.observer.readChange(), (a2 && !this.state.doc.eq(o3.doc) || !this.state.selection.eq(o3.selection)) && (a2 = null)) : this.observer.clear(), o3.facet(I.phrases) != this.state.facet(I.phrases)) return this.setState(o3);
    n6 = De2.create(this, o3, t2), n6.flags |= l8;
    let c4 = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let d3 of t2) {
        if (c4 && (c4 = c4.map(d3.changes)), d3.scrollIntoView) {
          let { main: u4 } = d3.state.selection;
          c4 = new zt(u4.empty ? u4 : x2.cursor(u4.head, u4.head > u4.anchor ? -1 : 1));
        }
        for (let u4 of d3.effects) u4.is(he) && (c4 = u4.value.clip(this.state));
      }
      this.viewState.update(n6, c4), this.bidiCache = He2.update(this.bidiCache, n6.changes), n6.empty || (this.updatePlugins(n6), this.inputState.update(n6)), e2 = this.docView.update(n6), this.state.facet(Bt) != this.styleModules && this.mountStyles(), i3 = this.updateAttrs(), this.showAnnouncements(t2), this.docView.updateSelection(e2, t2.some((d3) => d3.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n6.startState.facet(ue2) != n6.state.facet(ue2) && (this.viewState.mustMeasureContent = true), (e2 || i3 || c4 || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e2 && this.docViewUpdate(), !n6.empty) for (let d3 of this.state.facet(hi)) try {
      d3(n6);
    } catch (u4) {
      G2(this.state, u4, "update listener");
    }
    (h3 || a2) && Promise.resolve().then(() => {
      h3 && this.state == h3.startState && this.dispatch(h3), a2 && !An(this, a2) && f2.force && Dt(this.contentDOM, f2.key, f2.keyCode);
    });
  }
  setState(t2) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t2;
      return;
    }
    this.updateState = 2;
    let e2 = this.hasFocus;
    try {
      for (let i3 of this.plugins) i3.destroy(this);
      this.viewState = new Pe2(t2), this.plugins = t2.facet(St).map((i3) => new It(i3)), this.pluginMap.clear();
      for (let i3 of this.plugins) i3.update(this);
      this.docView.destroy(), this.docView = new Oe2(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e2 && this.focus(), this.requestMeasure();
  }
  updatePlugins(t2) {
    let e2 = t2.startState.facet(St), i3 = t2.state.facet(St);
    if (e2 != i3) {
      let n6 = [];
      for (let o3 of i3) {
        let r2 = e2.indexOf(o3);
        if (r2 < 0) n6.push(new It(o3));
        else {
          let l8 = this.plugins[r2];
          l8.mustUpdate = t2, n6.push(l8);
        }
      }
      for (let o3 of this.plugins) o3.mustUpdate != t2 && o3.destroy(this);
      this.plugins = n6, this.pluginMap.clear();
    } else for (let n6 of this.plugins) n6.mustUpdate = t2;
    for (let n6 = 0; n6 < this.plugins.length; n6++) this.plugins[n6].update(this);
    e2 != i3 && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t2 of this.plugins) {
      let e2 = t2.value;
      if (e2 && e2.docViewUpdate) try {
        e2.docViewUpdate(this);
      } catch (i3) {
        G2(this.state, i3, "doc view update listener");
      }
    }
  }
  measure(t2 = true) {
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t2 && this.observer.forceFlush();
    let e2 = null, i3 = this.scrollDOM, n6 = i3.scrollTop * this.scaleY, { scrollAnchorPos: o3, scrollAnchorHeight: r2 } = this.viewState;
    Math.abs(n6 - this.viewState.scrollTop) > 1 && (r2 = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l8 = 0; ; l8++) {
        if (r2 < 0) if (Ys(i3)) o3 = -1, r2 = this.viewState.heightMap.height;
        else {
          let u4 = this.viewState.scrollAnchorAt(n6);
          o3 = u4.from, r2 = u4.top;
        }
        this.updateState = 1;
        let h3 = this.viewState.measure(this);
        if (!h3 && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
        if (l8 > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let f2 = [];
        h3 & 4 || ([this.measureRequests, f2] = [f2, this.measureRequests]);
        let a2 = f2.map((u4) => {
          try {
            return u4.read(this);
          } catch (p2) {
            return G2(this.state, p2), Cs;
          }
        }), c4 = De2.create(this, this.state, []), d3 = false;
        c4.flags |= h3, e2 ? e2.flags |= h3 : e2 = c4, this.updateState = 2, c4.empty || (this.updatePlugins(c4), this.inputState.update(c4), this.updateAttrs(), d3 = this.docView.update(c4), d3 && this.docViewUpdate());
        for (let u4 = 0; u4 < f2.length; u4++) if (a2[u4] != Cs) try {
          let p2 = f2[u4];
          p2.write && p2.write(a2[u4], this);
        } catch (p2) {
          G2(this.state, p2);
        }
        if (d3 && this.docView.updateSelection(true), !c4.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, r2 = -1;
            continue;
          } else {
            let p2 = (o3 < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o3).top) - r2;
            if (p2 > 1 || p2 < -1) {
              n6 = n6 + p2, i3.scrollTop = n6 / this.scaleY, r2 = -1;
              continue;
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e2 && !e2.empty) for (let l8 of this.state.facet(hi)) l8(e2);
  }
  get themeClasses() {
    return Ci + " " + (this.state.facet(Si) ? Vn : Nn) + " " + this.state.facet(ue2);
  }
  updateAttrs() {
    let t2 = Ms(this, yn, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), e2 = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", writingsuggestions: "false", translate: "no", contenteditable: this.state.facet(et2) ? "true" : "false", class: "cm-content", style: `${y3.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (e2["aria-readonly"] = "true"), Ms(this, Ie2, e2);
    let i3 = this.observer.ignore(() => {
      let n6 = ni(this.contentDOM, this.contentAttrs, e2), o3 = ni(this.dom, this.editorAttrs, t2);
      return n6 || o3;
    });
    return this.editorAttrs = t2, this.contentAttrs = e2, i3;
  }
  showAnnouncements(t2) {
    let e2 = true;
    for (let i3 of t2) for (let n6 of i3.effects) if (n6.is(s43.announce)) {
      e2 && (this.announceDOM.textContent = ""), e2 = false;
      let o3 = this.announceDOM.appendChild(document.createElement("div"));
      o3.textContent = n6.value;
    }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Bt);
    let t2 = this.state.facet(s43.cspNonce);
    T2.mount(this.root, this.styleModules.concat(pr).reverse(), t2 ? { nonce: t2 } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(t2) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t2) {
      if (this.measureRequests.indexOf(t2) > -1) return;
      if (t2.key != null) {
        for (let e2 = 0; e2 < this.measureRequests.length; e2++) if (this.measureRequests[e2].key === t2.key) {
          this.measureRequests[e2] = t2;
          return;
        }
      }
      this.measureRequests.push(t2);
    }
  }
  plugin(t2) {
    let e2 = this.pluginMap.get(t2);
    return (e2 === void 0 || e2 && e2.plugin != t2) && this.pluginMap.set(t2, e2 = this.plugins.find((i3) => i3.plugin == t2) || null), e2 && e2.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(t2) {
    return this.readMeasured(), this.viewState.elementAtHeight(t2);
  }
  lineBlockAtHeight(t2) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t2);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t2) {
    return this.viewState.lineBlockAt(t2);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t2, e2, i3) {
    return je2(this, t2, hs(this, t2, e2, i3));
  }
  moveByGroup(t2, e2) {
    return je2(this, t2, hs(this, t2, e2, (i3) => Wo(this, t2.head, i3)));
  }
  visualLineSide(t2, e2) {
    let i3 = this.bidiSpans(t2), n6 = this.textDirectionAt(t2.from), o3 = i3[e2 ? i3.length - 1 : 0];
    return x2.cursor(o3.side(e2, n6) + t2.from, o3.forward(!e2, n6) ? 1 : -1);
  }
  moveToLineBoundary(t2, e2, i3 = true) {
    return Fo(this, t2, e2, i3);
  }
  moveVertically(t2, e2, i3) {
    return je2(this, t2, zo(this, t2, e2, i3));
  }
  domAtPos(t2) {
    return this.docView.domAtPos(t2);
  }
  posAtDOM(t2, e2 = 0) {
    return this.docView.posFromDOM(t2, e2);
  }
  posAtCoords(t2, e2 = true) {
    return this.readMeasured(), Cn(this, t2, e2);
  }
  coordsAtPos(t2, e2 = 1) {
    this.readMeasured();
    let i3 = this.docView.coordsAt(t2, e2);
    if (!i3 || i3.left == i3.right) return i3;
    let n6 = this.state.doc.lineAt(t2), o3 = this.bidiSpans(n6), r2 = o3[$2.find(o3, t2 - n6.from, -1, e2)];
    return ie2(i3, r2.dir == L2.LTR == e2 > 0);
  }
  coordsForChar(t2) {
    return this.readMeasured(), this.docView.coordsForChar(t2);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(t2) {
    return !this.state.facet(pn) || t2 < this.viewport.from || t2 > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t2));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t2) {
    if (t2.length > br) return on(t2.length);
    let e2 = this.textDirectionAt(t2.from), i3;
    for (let o3 of this.bidiCache) if (o3.from == t2.from && o3.dir == e2 && (o3.fresh || sn(o3.isolates, i3 = ss(this, t2)))) return o3.order;
    i3 || (i3 = ss(this, t2));
    let n6 = nn(t2.text, e2, i3);
    return this.bidiCache.push(new He2(t2.from, t2.to, e2, i3, true, n6)), n6;
  }
  get hasFocus() {
    var t2;
    return (this.dom.ownerDocument.hasFocus() || y3.safari && ((t2 = this.inputState) === null || t2 === void 0 ? void 0 : t2.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      qs(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t2) {
    this._root != t2 && (this._root = t2, this.observer.setWindow((t2.nodeType == 9 ? t2 : t2.ownerDocument).defaultView || globalThis), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t2 of this.plugins) t2.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(t2, e2 = {}) {
    return he.of(new zt(typeof t2 == "number" ? x2.cursor(t2) : t2, e2.y, e2.x, e2.yMargin, e2.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t2, scrollLeft: e2 } = this.scrollDOM, i3 = this.viewState.scrollAnchorAt(t2);
    return he.of(new zt(x2.cursor(i3.from), "start", "start", i3.top - t2, e2, true));
  }
  setTabFocusMode(t2) {
    t2 == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t2 == "boolean" ? this.inputState.tabFocusMode = t2 ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t2);
  }
  static domEventHandlers(t2) {
    return N2.define(() => ({}), { eventHandlers: t2 });
  }
  static domEventObservers(t2) {
    return N2.define(() => ({}), { eventObservers: t2 });
  }
  static theme(t2, e2) {
    let i3 = T2.newName(), n6 = [ue2.of(i3), Bt.of(Mi(`.${i3}`, t2))];
    return e2 && e2.dark && n6.push(Si.of(true)), n6;
  }
  static baseTheme(t2) {
    return it.lowest(Bt.of(Mi("." + Ci, t2, Fn)));
  }
  static findFromDOM(t2) {
    var e2;
    let i3 = t2.querySelector(".cm-content"), n6 = i3 && O2.get(i3) || O2.get(t2);
    return ((e2 = n6?.rootView) === null || e2 === void 0 ? void 0 : e2.view) || null;
  }
};
A2.styleModule = Bt;
A2.inputHandler = dn;
A2.clipboardInputFilter = Yi;
A2.clipboardOutputFilter = ji;
A2.scrollHandler = mn;
A2.focusChangeEffect = un;
A2.perLineTextDirection = pn;
A2.exceptionSink = cn;
A2.updateListener = hi;
A2.editable = et2;
A2.mouseSelectionStyle = fn;
A2.dragMovesSelection = an;
A2.clickAddsSelectionRange = hn;
A2.decorations = Jt;
A2.outerDecorations = wn;
A2.atomicRanges = se2;
A2.bidiIsolatedRanges = xn;
A2.scrollMargins = vn;
A2.darkTheme = Si;
A2.cspNonce = k2.define({ combine: (s58) => s58.length ? s58[0] : "" });
A2.contentAttributes = Ie2;
A2.editorAttributes = yn;
A2.lineWrapping = A2.contentAttributes.of({ class: "cm-lineWrapping" });
A2.announce = v.define();
var br = 4096;
var Cs = {};
var He2 = class s44 {
  constructor(t2, e2, i3, n6, o3, r2) {
    this.from = t2, this.to = e2, this.dir = i3, this.isolates = n6, this.fresh = o3, this.order = r2;
  }
  static update(t2, e2) {
    if (e2.empty && !t2.some((o3) => o3.fresh)) return t2;
    let i3 = [], n6 = t2.length ? t2[t2.length - 1].dir : L2.LTR;
    for (let o3 = Math.max(0, t2.length - 10); o3 < t2.length; o3++) {
      let r2 = t2[o3];
      r2.dir == n6 && !e2.touchesRange(r2.from, r2.to) && i3.push(new s44(e2.mapPos(r2.from, 1), e2.mapPos(r2.to, -1), r2.dir, r2.isolates, false, r2.order));
    }
    return i3;
  }
};
function Ms(s58, t2, e2) {
  for (let i3 = s58.state.facet(t2), n6 = i3.length - 1; n6 >= 0; n6--) {
    let o3 = i3[n6], r2 = typeof o3 == "function" ? o3(s58) : o3;
    r2 && si(r2, e2);
  }
  return e2;
}
var yr = y3.mac ? "mac" : y3.windows ? "win" : y3.linux ? "linux" : "key";
function wr(s58, t2) {
  let e2 = s58.split(/-(?!$)/), i3 = e2[e2.length - 1];
  i3 == "Space" && (i3 = " ");
  let n6, o3, r2, l8;
  for (let h3 = 0; h3 < e2.length - 1; ++h3) {
    let f2 = e2[h3];
    if (/^(cmd|meta|m)$/i.test(f2)) l8 = true;
    else if (/^a(lt)?$/i.test(f2)) n6 = true;
    else if (/^(c|ctrl|control)$/i.test(f2)) o3 = true;
    else if (/^s(hift)?$/i.test(f2)) r2 = true;
    else if (/^mod$/i.test(f2)) t2 == "mac" ? l8 = true : o3 = true;
    else throw new Error("Unrecognized modifier name: " + f2);
  }
  return n6 && (i3 = "Alt-" + i3), o3 && (i3 = "Ctrl-" + i3), l8 && (i3 = "Meta-" + i3), r2 && (i3 = "Shift-" + i3), i3;
}
function pe2(s58, t2, e2) {
  return t2.altKey && (s58 = "Alt-" + s58), t2.ctrlKey && (s58 = "Ctrl-" + s58), t2.metaKey && (s58 = "Meta-" + s58), e2 !== false && t2.shiftKey && (s58 = "Shift-" + s58), s58;
}
var xr = it.default(A2.domEventHandlers({ keydown(s58, t2) {
  return zn(Wn(t2.state), s58, t2, "editor");
} }));
var vr = k2.define({ enables: xr });
var ks = /* @__PURE__ */ new WeakMap();
function Wn(s58) {
  let t2 = s58.facet(vr), e2 = ks.get(t2);
  return e2 || ks.set(t2, e2 = Cr(t2.reduce((i3, n6) => i3.concat(n6), []))), e2;
}
var ot = null;
var Sr = 4e3;
function Cr(s58, t2 = yr) {
  let e2 = /* @__PURE__ */ Object.create(null), i3 = /* @__PURE__ */ Object.create(null), n6 = (r2, l8) => {
    let h3 = i3[r2];
    if (h3 == null) i3[r2] = l8;
    else if (h3 != l8) throw new Error("Key binding " + r2 + " is used both as a regular binding and as a multi-stroke prefix");
  }, o3 = (r2, l8, h3, f2, a2) => {
    var c4, d3;
    let u4 = e2[r2] || (e2[r2] = /* @__PURE__ */ Object.create(null)), p2 = l8.split(/ (?!$)/).map((b6) => wr(b6, t2));
    for (let b6 = 1; b6 < p2.length; b6++) {
      let w7 = p2.slice(0, b6).join(" ");
      n6(w7, true), u4[w7] || (u4[w7] = { preventDefault: true, stopPropagation: false, run: [(v3) => {
        let x8 = ot = { view: v3, prefix: w7, scope: r2 };
        return setTimeout(() => {
          ot == x8 && (ot = null);
        }, Sr), true;
      }] });
    }
    let g6 = p2.join(" ");
    n6(g6, false);
    let m7 = u4[g6] || (u4[g6] = { preventDefault: false, stopPropagation: false, run: ((d3 = (c4 = u4._any) === null || c4 === void 0 ? void 0 : c4.run) === null || d3 === void 0 ? void 0 : d3.slice()) || [] });
    h3 && m7.run.push(h3), f2 && (m7.preventDefault = true), a2 && (m7.stopPropagation = true);
  };
  for (let r2 of s58) {
    let l8 = r2.scope ? r2.scope.split(" ") : ["editor"];
    if (r2.any) for (let f2 of l8) {
      let a2 = e2[f2] || (e2[f2] = /* @__PURE__ */ Object.create(null));
      a2._any || (a2._any = { preventDefault: false, stopPropagation: false, run: [] });
      let { any: c4 } = r2;
      for (let d3 in a2) a2[d3].run.push((u4) => c4(u4, Di));
    }
    let h3 = r2[t2] || r2.key;
    if (h3) for (let f2 of l8) o3(f2, h3, r2.run, r2.preventDefault, r2.stopPropagation), r2.shift && o3(f2, "Shift-" + h3, r2.shift, r2.preventDefault, r2.stopPropagation);
  }
  return e2;
}
var Di = null;
function zn(s58, t2, e2, i3) {
  Di = t2;
  let n6 = g2(t2), o3 = et(n6, 0), r2 = nt(o3) == n6.length && n6 != " ", l8 = "", h3 = false, f2 = false, a2 = false;
  ot && ot.view == e2 && ot.scope == i3 && (l8 = ot.prefix + " ", Tn.indexOf(t2.keyCode) < 0 && (f2 = true, ot = null));
  let c4 = /* @__PURE__ */ new Set(), d3 = (m7) => {
    if (m7) {
      for (let b6 of m7.run) if (!c4.has(b6) && (c4.add(b6), b6(e2))) return m7.stopPropagation && (a2 = true), true;
      m7.preventDefault && (m7.stopPropagation && (a2 = true), f2 = true);
    }
    return false;
  }, u4 = s58[i3], p2, g6;
  return u4 && (d3(u4[l8 + pe2(n6, t2, !r2)]) ? h3 = true : r2 && (t2.altKey || t2.metaKey || t2.ctrlKey) && !(y3.windows && t2.ctrlKey && t2.altKey) && !(y3.mac && t2.altKey && !(t2.ctrlKey || t2.metaKey)) && (p2 = t[t2.keyCode]) && p2 != n6 ? (d3(u4[l8 + pe2(p2, t2, true)]) || t2.shiftKey && (g6 = i[t2.keyCode]) != n6 && g6 != p2 && d3(u4[l8 + pe2(g6, t2, false)])) && (h3 = true) : r2 && t2.shiftKey && d3(u4[l8 + pe2(n6, t2, true)]) && (h3 = true), !h3 && d3(u4._any) && (h3 = true)), f2 && (h3 = true), h3 && a2 && t2.stopPropagation(), Di = null, h3;
}
var Zt = class s45 {
  constructor(t2, e2, i3, n6, o3) {
    this.className = t2, this.left = e2, this.top = i3, this.width = n6, this.height = o3;
  }
  draw() {
    let t2 = document.createElement("div");
    return t2.className = this.className, this.adjust(t2), t2;
  }
  update(t2, e2) {
    return e2.className != this.className ? false : (this.adjust(t2), true);
  }
  adjust(t2) {
    t2.style.left = this.left + "px", t2.style.top = this.top + "px", this.width != null && (t2.style.width = this.width + "px"), t2.style.height = this.height + "px";
  }
  eq(t2) {
    return this.left == t2.left && this.top == t2.top && this.width == t2.width && this.height == t2.height && this.className == t2.className;
  }
  static forRange(t2, e2, i3) {
    if (i3.empty) {
      let n6 = t2.coordsAtPos(i3.head, i3.assoc || 1);
      if (!n6) return [];
      let o3 = In(t2);
      return [new s45(e2, n6.left - o3.left, n6.top - o3.top, null, n6.bottom - n6.top)];
    } else return Mr(t2, e2, i3);
  }
};
function In(s58) {
  let t2 = s58.scrollDOM.getBoundingClientRect();
  return { left: (s58.textDirection == L2.LTR ? t2.left : t2.right - s58.scrollDOM.clientWidth * s58.scaleX) - s58.scrollDOM.scrollLeft * s58.scaleX, top: t2.top - s58.scrollDOM.scrollTop * s58.scaleY };
}
function As(s58, t2, e2, i3) {
  let n6 = s58.coordsAtPos(t2, e2 * 2);
  if (!n6) return i3;
  let o3 = s58.dom.getBoundingClientRect(), r2 = (n6.top + n6.bottom) / 2, l8 = s58.posAtCoords({ x: o3.left + 1, y: r2 }), h3 = s58.posAtCoords({ x: o3.right - 1, y: r2 });
  return l8 == null || h3 == null ? i3 : { from: Math.max(i3.from, Math.min(l8, h3)), to: Math.min(i3.to, Math.max(l8, h3)) };
}
function Mr(s58, t2, e2) {
  if (e2.to <= s58.viewport.from || e2.from >= s58.viewport.to) return [];
  let i3 = Math.max(e2.from, s58.viewport.from), n6 = Math.min(e2.to, s58.viewport.to), o3 = s58.textDirection == L2.LTR, r2 = s58.contentDOM, l8 = r2.getBoundingClientRect(), h3 = In(s58), f2 = r2.querySelector(".cm-line"), a2 = f2 && globalThis.getComputedStyle(f2), c4 = l8.left + (a2 ? parseInt(a2.paddingLeft) + Math.min(0, parseInt(a2.textIndent)) : 0), d3 = l8.right - (a2 ? parseInt(a2.paddingRight) : 0), u4 = fi(s58, i3, 1), p2 = fi(s58, n6, -1), g6 = u4.type == W2.Text ? u4 : null, m7 = p2.type == W2.Text ? p2 : null;
  if (g6 && (s58.lineWrapping || u4.widgetLineBreaks) && (g6 = As(s58, i3, 1, g6)), m7 && (s58.lineWrapping || p2.widgetLineBreaks) && (m7 = As(s58, n6, -1, m7)), g6 && m7 && g6.from == m7.from && g6.to == m7.to) return w7(v3(e2.from, e2.to, g6));
  {
    let S7 = g6 ? v3(e2.from, null, g6) : x8(u4, false), C6 = m7 ? v3(null, e2.to, m7) : x8(p2, true), E6 = [];
    return (g6 || u4).to < (m7 || p2).from - (g6 && m7 ? 1 : 0) || u4.widgetLineBreaks > 1 && S7.bottom + s58.defaultLineHeight / 2 < C6.top ? E6.push(b6(c4, S7.bottom, d3, C6.top)) : S7.bottom < C6.top && s58.elementAtHeight((S7.bottom + C6.top) / 2).type == W2.Text && (S7.bottom = C6.top = (S7.bottom + C6.top) / 2), w7(S7).concat(E6).concat(w7(C6));
  }
  function b6(S7, C6, E6, B6) {
    return new Zt(t2, S7 - h3.left, C6 - h3.top, E6 - S7, B6 - C6);
  }
  function w7({ top: S7, bottom: C6, horizontal: E6 }) {
    let B6 = [];
    for (let st3 = 0; st3 < E6.length; st3 += 2) B6.push(b6(E6[st3], S7, E6[st3 + 1], C6));
    return B6;
  }
  function v3(S7, C6, E6) {
    let B6 = 1e9, st3 = -1e9, ne4 = [];
    function Gi(ct, nt3, wt2, dt2, Et2) {
      let Z5 = s58.coordsAtPos(ct, ct == E6.to ? -2 : 2), tt2 = s58.coordsAtPos(wt2, wt2 == E6.from ? 2 : -2);
      !Z5 || !tt2 || (B6 = Math.min(Z5.top, tt2.top, B6), st3 = Math.max(Z5.bottom, tt2.bottom, st3), Et2 == L2.LTR ? ne4.push(o3 && nt3 ? c4 : Z5.left, o3 && dt2 ? d3 : tt2.right) : ne4.push(!o3 && dt2 ? c4 : tt2.left, !o3 && nt3 ? d3 : Z5.right));
    }
    let oe3 = S7 ?? E6.from, re3 = C6 ?? E6.to;
    for (let ct of s58.visibleRanges) if (ct.to > oe3 && ct.from < re3) for (let nt3 = Math.max(ct.from, oe3), wt2 = Math.min(ct.to, re3); ; ) {
      let dt2 = s58.state.doc.lineAt(nt3);
      for (let Et2 of s58.bidiSpans(dt2)) {
        let Z5 = Et2.from + dt2.from, tt2 = Et2.to + dt2.from;
        if (Z5 >= wt2) break;
        tt2 > nt3 && Gi(Math.max(Z5, nt3), S7 == null && Z5 <= oe3, Math.min(tt2, wt2), C6 == null && tt2 >= re3, Et2.dir);
      }
      if (nt3 = dt2.to + 1, nt3 >= wt2) break;
    }
    return ne4.length == 0 && Gi(oe3, S7 == null, re3, C6 == null, s58.textDirection), { top: B6, bottom: st3, horizontal: ne4 };
  }
  function x8(S7, C6) {
    let E6 = l8.top + (C6 ? S7.top : S7.bottom);
    return { top: E6, bottom: E6, horizontal: [] };
  }
}
function kr(s58, t2) {
  return s58.constructor == t2.constructor && s58.eq(t2);
}
var Oi = class {
  constructor(t2, e2) {
    this.view = t2, this.layer = e2, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t2.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e2.above && this.dom.classList.add("cm-layer-above"), e2.class && this.dom.classList.add(e2.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t2.state), t2.requestMeasure(this.measureReq), e2.mount && e2.mount(this.dom, t2);
  }
  update(t2) {
    t2.startState.facet(we2) != t2.state.facet(we2) && this.setOrder(t2.state), (this.layer.update(t2, this.dom) || t2.geometryChanged) && (this.scale(), t2.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t2) {
    this.layer.updateOnDocViewUpdate !== false && t2.requestMeasure(this.measureReq);
  }
  setOrder(t2) {
    let e2 = 0, i3 = t2.facet(we2);
    for (; e2 < i3.length && i3[e2] != this.layer; ) e2++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e2);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: t2, scaleY: e2 } = this.view;
    (t2 != this.scaleX || e2 != this.scaleY) && (this.scaleX = t2, this.scaleY = e2, this.dom.style.transform = `scale(${1 / t2}, ${1 / e2})`);
  }
  draw(t2) {
    if (t2.length != this.drawn.length || t2.some((e2, i3) => !kr(e2, this.drawn[i3]))) {
      let e2 = this.dom.firstChild, i3 = 0;
      for (let n6 of t2) n6.update && e2 && n6.constructor && this.drawn[i3].constructor && n6.update(e2, this.drawn[i3]) ? (e2 = e2.nextSibling, i3++) : this.dom.insertBefore(n6.draw(), e2);
      for (; e2; ) {
        let n6 = e2.nextSibling;
        e2.remove(), e2 = n6;
      }
      this.drawn = t2, y3.safari && y3.safari_version >= 26 && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
};
var we2 = k2.define();
function Kn(s58) {
  return [N2.define((t2) => new Oi(t2, s58)), we2.of(s58)];
}
var Rt = k2.define({ combine(s58) {
  return st(s58, { cursorBlinkRate: 1200, drawRangeCursor: true }, { cursorBlinkRate: (t2, e2) => Math.min(t2, e2), drawRangeCursor: (t2, e2) => t2 || e2 });
} });
function qn(s58) {
  return s58.startState.facet(Rt) != s58.state.facet(Rt);
}
var Ar = Kn({ above: true, markers(s58) {
  let { state: t2 } = s58, e2 = t2.facet(Rt), i3 = [];
  for (let n6 of t2.selection.ranges) {
    let o3 = n6 == t2.selection.main;
    if (n6.empty || e2.drawRangeCursor) {
      let r2 = o3 ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l8 = n6.empty ? n6 : x2.cursor(n6.head, n6.head > n6.anchor ? -1 : 1);
      for (let h3 of Zt.forRange(s58, r2, l8)) i3.push(h3);
    }
  }
  return i3;
}, update(s58, t2) {
  s58.transactions.some((i3) => i3.selection) && (t2.style.animationName = t2.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let e2 = qn(s58);
  return e2 && Ds(s58.state, t2), s58.docChanged || s58.selectionSet || e2;
}, mount(s58, t2) {
  Ds(t2.state, s58);
}, class: "cm-cursorLayer" });
function Ds(s58, t2) {
  t2.style.animationDuration = s58.facet(Rt).cursorBlinkRate + "ms";
}
var Dr = Kn({ above: false, markers(s58) {
  return s58.state.selection.ranges.map((t2) => t2.empty ? [] : Zt.forRange(s58, "cm-selectionBackground", t2)).reduce((t2, e2) => t2.concat(e2));
}, update(s58, t2) {
  return s58.docChanged || s58.selectionSet || s58.viewportChanged || qn(s58);
}, class: "cm-selectionLayer" });
var Or = it.highest(A2.theme({ ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" }, caretColor: "transparent !important" }, ".cm-content": { caretColor: "transparent !important", "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } }));
var _n = v.define({ map(s58, t2) {
  return s58 == null ? null : t2.mapPos(s58);
} });
var Nt = q.define({ create() {
  return null;
}, update(s58, t2) {
  return s58 != null && (s58 = t2.changes.mapPos(s58)), t2.effects.reduce((e2, i3) => i3.is(_n) ? i3.value : e2, s58);
} });
var Tr = N2.fromClass(class {
  constructor(s58) {
    this.view = s58, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(s58) {
    var t2;
    let e2 = s58.state.field(Nt);
    e2 == null ? this.cursor != null && ((t2 = this.cursor) === null || t2 === void 0 || t2.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (s58.startState.field(Nt) != e2 || s58.docChanged || s58.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: s58 } = this, t2 = s58.state.field(Nt), e2 = t2 != null && s58.coordsAtPos(t2);
    if (!e2) return null;
    let i3 = s58.scrollDOM.getBoundingClientRect();
    return { left: e2.left - i3.left + s58.scrollDOM.scrollLeft * s58.scaleX, top: e2.top - i3.top + s58.scrollDOM.scrollTop * s58.scaleY, height: e2.bottom - e2.top };
  }
  drawCursor(s58) {
    if (this.cursor) {
      let { scaleX: t2, scaleY: e2 } = this.view;
      s58 ? (this.cursor.style.left = s58.left / t2 + "px", this.cursor.style.top = s58.top / e2 + "px", this.cursor.style.height = s58.height / e2 + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(s58) {
    this.view.state.field(Nt) != s58 && this.view.dispatch({ effects: _n.of(s58) });
  }
}, { eventObservers: { dragover(s58) {
  this.setDropPos(this.view.posAtCoords({ x: s58.clientX, y: s58.clientY }));
}, dragleave(s58) {
  (s58.target == this.view.contentDOM || !this.view.contentDOM.contains(s58.relatedTarget)) && this.setDropPos(null);
}, dragend() {
  this.setDropPos(null);
}, drop() {
  this.setDropPos(null);
} } });
function Os(s58, t2, e2, i3, n6) {
  t2.lastIndex = 0;
  for (let o3 = s58.iterRange(e2, i3), r2 = e2, l8; !o3.next().done; r2 += o3.value.length) if (!o3.lineBreak) for (; l8 = t2.exec(o3.value); ) n6(r2 + l8.index, l8);
}
function Rr(s58, t2) {
  let e2 = s58.visibleRanges;
  if (e2.length == 1 && e2[0].from == s58.viewport.from && e2[0].to == s58.viewport.to) return e2;
  let i3 = [];
  for (let { from: n6, to: o3 } of e2) n6 = Math.max(s58.state.doc.lineAt(n6).from, n6 - t2), o3 = Math.min(s58.state.doc.lineAt(o3).to, o3 + t2), i3.length && i3[i3.length - 1].to >= n6 ? i3[i3.length - 1].to = o3 : i3.push({ from: n6, to: o3 });
  return i3;
}
var te2 = class {
  constructor(t2) {
    let { regexp: e2, decoration: i3, decorate: n6, boundary: o3, maxLength: r2 = 1e3 } = t2;
    if (!e2.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e2, n6) this.addMatch = (l8, h3, f2, a2) => n6(a2, f2, f2 + l8[0].length, l8, h3);
    else if (typeof i3 == "function") this.addMatch = (l8, h3, f2, a2) => {
      let c4 = i3(l8, h3, f2);
      c4 && a2(f2, f2 + l8[0].length, c4);
    };
    else if (i3) this.addMatch = (l8, h3, f2, a2) => a2(f2, f2 + l8[0].length, i3);
    else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = o3, this.maxLength = r2;
  }
  createDeco(t2) {
    let e2 = new re(), i3 = e2.add.bind(e2);
    for (let { from: n6, to: o3 } of Rr(t2, this.maxLength)) Os(t2.state.doc, this.regexp, n6, o3, (r2, l8) => this.addMatch(l8, t2, r2, i3));
    return e2.finish();
  }
  updateDeco(t2, e2) {
    let i3 = 1e9, n6 = -1;
    return t2.docChanged && t2.changes.iterChanges((o3, r2, l8, h3) => {
      h3 >= t2.view.viewport.from && l8 <= t2.view.viewport.to && (i3 = Math.min(l8, i3), n6 = Math.max(h3, n6));
    }), t2.viewportMoved || n6 - i3 > 1e3 ? this.createDeco(t2.view) : n6 > -1 ? this.updateRange(t2.view, e2.map(t2.changes), i3, n6) : e2;
  }
  updateRange(t2, e2, i3, n6) {
    for (let o3 of t2.visibleRanges) {
      let r2 = Math.max(o3.from, i3), l8 = Math.min(o3.to, n6);
      if (l8 >= r2) {
        let h3 = t2.state.doc.lineAt(r2), f2 = h3.to < l8 ? t2.state.doc.lineAt(l8) : h3, a2 = Math.max(o3.from, h3.from), c4 = Math.min(o3.to, f2.to);
        if (this.boundary) {
          for (; r2 > h3.from; r2--) if (this.boundary.test(h3.text[r2 - 1 - h3.from])) {
            a2 = r2;
            break;
          }
          for (; l8 < f2.to; l8++) if (this.boundary.test(f2.text[l8 - f2.from])) {
            c4 = l8;
            break;
          }
        }
        let d3 = [], u4, p2 = (g6, m7, b6) => d3.push(b6.range(g6, m7));
        if (h3 == f2) for (this.regexp.lastIndex = a2 - h3.from; (u4 = this.regexp.exec(h3.text)) && u4.index < c4 - h3.from; ) this.addMatch(u4, t2, u4.index + h3.from, p2);
        else Os(t2.state.doc, this.regexp, a2, c4, (g6, m7) => this.addMatch(m7, t2, g6, p2));
        e2 = e2.update({ filterFrom: a2, filterTo: c4, filter: (g6, m7) => g6 < a2 || m7 > c4, add: d3 });
      }
    }
    return e2;
  }
};
var Ti = /x/.unicode != null ? "gu" : "g";
var Er = new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Ti);
var $e2 = null;
function Br() {
  var s58;
  if ($e2 == null && typeof document < "u" && document.body) {
    let t2 = document.body.style;
    $e2 = ((s58 = t2.tabSize) !== null && s58 !== void 0 ? s58 : t2.MozTabSize) != null;
  }
  return $e2 || false;
}
var xe2 = k2.define({ combine(s58) {
  let t2 = st(s58, { render: null, specialChars: Er, addSpecialChars: null });
  return (t2.replaceTabs = !Br()) && (t2.specialChars = new RegExp("	|" + t2.specialChars.source, Ti)), t2.addSpecialChars && (t2.specialChars = new RegExp(t2.specialChars.source + "|" + t2.addSpecialChars.source, Ti)), t2;
} });
var Rs = N2.fromClass(class {
  constructor() {
    this.height = 1e3, this.attrs = { style: "padding-bottom: 1000px" };
  }
  update(s58) {
    let { view: t2 } = s58, e2 = t2.viewState.editorHeight - t2.defaultLineHeight - t2.documentPadding.top - 0.5;
    e2 >= 0 && e2 != this.height && (this.height = e2, this.attrs = { style: `padding-bottom: ${e2}px` });
  }
});
var Vr = T3.line({ class: "cm-activeLine" });
var Fr = N2.fromClass(class {
  constructor(s58) {
    this.decorations = this.getDeco(s58);
  }
  update(s58) {
    (s58.docChanged || s58.selectionSet) && (this.decorations = this.getDeco(s58.view));
  }
  getDeco(s58) {
    let t2 = -1, e2 = [];
    for (let i3 of s58.state.selection.ranges) {
      let n6 = s58.lineBlockAt(i3.head);
      n6.from > t2 && (e2.push(Vr.range(n6.from)), t2 = n6.from);
    }
    return T3.set(e2);
  }
}, { decorations: (s58) => s58.decorations });
var Lt = "-10000px";
var Ne2 = class {
  constructor(t2, e2, i3, n6) {
    this.facet = e2, this.createTooltipView = i3, this.removeTooltipView = n6, this.input = t2.state.facet(e2), this.tooltips = this.input.filter((r2) => r2);
    let o3 = null;
    this.tooltipViews = this.tooltips.map((r2) => o3 = i3(r2, o3));
  }
  update(t2, e2) {
    var i3;
    let n6 = t2.state.facet(this.facet), o3 = n6.filter((h3) => h3);
    if (n6 === this.input) {
      for (let h3 of this.tooltipViews) h3.update && h3.update(t2);
      return false;
    }
    let r2 = [], l8 = e2 ? [] : null;
    for (let h3 = 0; h3 < o3.length; h3++) {
      let f2 = o3[h3], a2 = -1;
      if (f2) {
        for (let c4 = 0; c4 < this.tooltips.length; c4++) {
          let d3 = this.tooltips[c4];
          d3 && d3.create == f2.create && (a2 = c4);
        }
        if (a2 < 0) r2[h3] = this.createTooltipView(f2, h3 ? r2[h3 - 1] : null), l8 && (l8[h3] = !!f2.above);
        else {
          let c4 = r2[h3] = this.tooltipViews[a2];
          l8 && (l8[h3] = e2[a2]), c4.update && c4.update(t2);
        }
      }
    }
    for (let h3 of this.tooltipViews) r2.indexOf(h3) < 0 && (this.removeTooltipView(h3), (i3 = h3.destroy) === null || i3 === void 0 || i3.call(h3));
    return e2 && (l8.forEach((h3, f2) => e2[f2] = h3), e2.length = l8.length), this.input = n6, this.tooltips = o3, this.tooltipViews = r2, true;
  }
};
function _r(s58) {
  let t2 = s58.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t2.clientHeight, right: t2.clientWidth };
}
var ve2 = k2.define({ combine: (s58) => {
  var t2, e2, i3;
  return { position: y3.ios ? "absolute" : ((t2 = s58.find((n6) => n6.position)) === null || t2 === void 0 ? void 0 : t2.position) || "fixed", parent: ((e2 = s58.find((n6) => n6.parent)) === null || e2 === void 0 ? void 0 : e2.parent) || null, tooltipSpace: ((i3 = s58.find((n6) => n6.tooltipSpace)) === null || i3 === void 0 ? void 0 : i3.tooltipSpace) || _r };
} });
var Ls = /* @__PURE__ */ new WeakMap();
var qe2 = N2.fromClass(class {
  constructor(s58) {
    this.view = s58, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let t2 = s58.state.facet(ve2);
    this.position = t2.position, this.parent = t2.parent, this.classes = s58.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Ne2(s58, Yn, (e2, i3) => this.createTooltip(e2, i3), (e2) => {
      this.resizeObserver && this.resizeObserver.unobserve(e2.dom), e2.dom.remove();
    }), this.above = this.manager.tooltips.map((e2) => !!e2.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e2) => {
      Date.now() > this.lastTransaction - 50 && e2.length > 0 && e2[e2.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), s58.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let s58 of this.manager.tooltipViews) this.intersectionObserver.observe(s58.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(s58) {
    s58.transactions.length && (this.lastTransaction = Date.now());
    let t2 = this.manager.update(s58, this.above);
    t2 && this.observeIntersection();
    let e2 = t2 || s58.geometryChanged, i3 = s58.state.facet(ve2);
    if (i3.position != this.position && !this.madeAbsolute) {
      this.position = i3.position;
      for (let n6 of this.manager.tooltipViews) n6.dom.style.position = this.position;
      e2 = true;
    }
    if (i3.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i3.parent, this.createContainer();
      for (let n6 of this.manager.tooltipViews) this.container.appendChild(n6.dom);
      e2 = true;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e2 && this.maybeMeasure();
  }
  createTooltip(s58, t2) {
    let e2 = s58.create(this.view), i3 = t2 ? t2.dom : null;
    if (e2.dom.classList.add("cm-tooltip"), s58.arrow && !e2.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n6 = document.createElement("div");
      n6.className = "cm-tooltip-arrow", e2.dom.appendChild(n6);
    }
    return e2.dom.style.position = this.position, e2.dom.style.top = Lt, e2.dom.style.left = "0px", this.container.insertBefore(e2.dom, i3), e2.mount && e2.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e2.dom), e2;
  }
  destroy() {
    var s58, t2, e2;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i3 of this.manager.tooltipViews) i3.dom.remove(), (s58 = i3.destroy) === null || s58 === void 0 || s58.call(i3);
    this.parent && this.container.remove(), (t2 = this.resizeObserver) === null || t2 === void 0 || t2.disconnect(), (e2 = this.intersectionObserver) === null || e2 === void 0 || e2.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let s58 = 1, t2 = 1, e2 = false;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: o3 } = this.manager.tooltipViews[0];
      if (y3.gecko) e2 = o3.offsetParent != this.container.ownerDocument.body;
      else if (o3.style.top == Lt && o3.style.left == "0px") {
        let r2 = o3.getBoundingClientRect();
        e2 = Math.abs(r2.top + 1e4) > 1 || Math.abs(r2.left) > 1;
      }
    }
    if (e2 || this.position == "absolute") if (this.parent) {
      let o3 = this.parent.getBoundingClientRect();
      o3.width && o3.height && (s58 = o3.width / this.parent.offsetWidth, t2 = o3.height / this.parent.offsetHeight);
    } else ({ scaleX: s58, scaleY: t2 } = this.view.viewState);
    let i3 = this.view.scrollDOM.getBoundingClientRect(), n6 = Xi(this.view);
    return { visible: { left: i3.left + n6.left, top: i3.top + n6.top, right: i3.right - n6.right, bottom: i3.bottom - n6.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((o3, r2) => {
      let l8 = this.manager.tooltipViews[r2];
      return l8.getCoords ? l8.getCoords(o3.pos) : this.view.coordsAtPos(o3.pos);
    }), size: this.manager.tooltipViews.map(({ dom: o3 }) => o3.getBoundingClientRect()), space: this.view.state.facet(ve2).tooltipSpace(this.view), scaleX: s58, scaleY: t2, makeAbsolute: e2 };
  }
  writeMeasure(s58) {
    var t2;
    if (s58.makeAbsolute) {
      this.madeAbsolute = true, this.position = "absolute";
      for (let l8 of this.manager.tooltipViews) l8.dom.style.position = "absolute";
    }
    let { visible: e2, space: i3, scaleX: n6, scaleY: o3 } = s58, r2 = [];
    for (let l8 = 0; l8 < this.manager.tooltips.length; l8++) {
      let h3 = this.manager.tooltips[l8], f2 = this.manager.tooltipViews[l8], { dom: a2 } = f2, c4 = s58.pos[l8], d3 = s58.size[l8];
      if (!c4 || h3.clip !== false && (c4.bottom <= Math.max(e2.top, i3.top) || c4.top >= Math.min(e2.bottom, i3.bottom) || c4.right < Math.max(e2.left, i3.left) - 0.1 || c4.left > Math.min(e2.right, i3.right) + 0.1)) {
        a2.style.top = Lt;
        continue;
      }
      let u4 = h3.arrow ? f2.dom.querySelector(".cm-tooltip-arrow") : null, p2 = u4 ? 7 : 0, g6 = d3.right - d3.left, m7 = (t2 = Ls.get(f2)) !== null && t2 !== void 0 ? t2 : d3.bottom - d3.top, b6 = f2.offset || jr, w7 = this.view.textDirection == L2.LTR, v3 = d3.width > i3.right - i3.left ? w7 ? i3.left : i3.right - d3.width : w7 ? Math.max(i3.left, Math.min(c4.left - (u4 ? 14 : 0) + b6.x, i3.right - g6)) : Math.min(Math.max(i3.left, c4.left - g6 + (u4 ? 14 : 0) - b6.x), i3.right - g6), x8 = this.above[l8];
      !h3.strictSide && (x8 ? c4.top - m7 - p2 - b6.y < i3.top : c4.bottom + m7 + p2 + b6.y > i3.bottom) && x8 == i3.bottom - c4.bottom > c4.top - i3.top && (x8 = this.above[l8] = !x8);
      let S7 = (x8 ? c4.top - i3.top : i3.bottom - c4.bottom) - p2;
      if (S7 < m7 && f2.resize !== false) {
        if (S7 < this.view.defaultLineHeight) {
          a2.style.top = Lt;
          continue;
        }
        Ls.set(f2, m7), a2.style.height = (m7 = S7) / o3 + "px";
      } else a2.style.height && (a2.style.height = "");
      let C6 = x8 ? c4.top - m7 - p2 - b6.y : c4.bottom + p2 + b6.y, E6 = v3 + g6;
      if (f2.overlap !== true) for (let B6 of r2) B6.left < E6 && B6.right > v3 && B6.top < C6 + m7 && B6.bottom > C6 && (C6 = x8 ? B6.top - m7 - 2 - p2 : B6.bottom + p2 + 2);
      if (this.position == "absolute" ? (a2.style.top = (C6 - s58.parent.top) / o3 + "px", Bs(a2, (v3 - s58.parent.left) / n6)) : (a2.style.top = C6 / o3 + "px", Bs(a2, v3 / n6)), u4) {
        let B6 = c4.left + (w7 ? b6.x : -b6.x) - (v3 + 14 - 7);
        u4.style.left = B6 / n6 + "px";
      }
      f2.overlap !== true && r2.push({ left: v3, top: C6, right: E6, bottom: C6 + m7 }), a2.classList.toggle("cm-tooltip-above", x8), a2.classList.toggle("cm-tooltip-below", !x8), f2.positioned && f2.positioned(s58.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let s58 of this.manager.tooltipViews) s58.dom.style.top = Lt;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function Bs(s58, t2) {
  let e2 = parseInt(s58.style.left, 10);
  (isNaN(e2) || Math.abs(t2 - e2) > 1) && (s58.style.left = t2 + "px");
}
var Yr = A2.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } });
var jr = { x: 0, y: 0 };
var Yn = k2.define({ enables: [qe2, Yr] });
var ee2 = k2.define({ combine: (s58) => s58.reduce((t2, e2) => t2.concat(e2), []) });
var Ve = class s46 {
  static create(t2) {
    return new s46(t2);
  }
  constructor(t2) {
    this.view = t2, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Ne2(t2, ee2, (e2, i3) => this.createHostedView(e2, i3), (e2) => e2.dom.remove());
  }
  createHostedView(t2, e2) {
    let i3 = t2.create(this.view);
    return i3.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i3.dom, e2 ? e2.dom.nextSibling : this.dom.firstChild), this.mounted && i3.mount && i3.mount(this.view), i3;
  }
  mount(t2) {
    for (let e2 of this.manager.tooltipViews) e2.mount && e2.mount(t2);
    this.mounted = true;
  }
  positioned(t2) {
    for (let e2 of this.manager.tooltipViews) e2.positioned && e2.positioned(t2);
  }
  update(t2) {
    this.manager.update(t2);
  }
  destroy() {
    var t2;
    for (let e2 of this.manager.tooltipViews) (t2 = e2.destroy) === null || t2 === void 0 || t2.call(e2);
  }
  passProp(t2) {
    let e2;
    for (let i3 of this.manager.tooltipViews) {
      let n6 = i3[t2];
      if (n6 !== void 0) {
        if (e2 === void 0) e2 = n6;
        else if (e2 !== n6) return;
      }
    }
    return e2;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
};
var Xr = Yn.compute([ee2], (s58) => {
  let t2 = s58.facet(ee2);
  return t2.length === 0 ? null : { pos: Math.min(...t2.map((e2) => e2.pos)), end: Math.max(...t2.map((e2) => {
    var i3;
    return (i3 = e2.end) !== null && i3 !== void 0 ? i3 : e2.pos;
  })), create: Ve.create, above: t2[0].above, arrow: t2.some((e2) => e2.arrow) };
});
var jn = v.define();
var Rl = jn.of(null);
var Hi = k2.define({ combine(s58) {
  let t2, e2;
  for (let i3 of s58) t2 = t2 || i3.topContainer, e2 = e2 || i3.bottomContainer;
  return { topContainer: t2, bottomContainer: e2 };
} });
var Xn = N2.fromClass(class {
  constructor(s58) {
    this.input = s58.state.facet(Ni), this.specs = this.input.filter((e2) => e2), this.panels = this.specs.map((e2) => e2(s58));
    let t2 = s58.state.facet(Hi);
    this.top = new Mt(s58, true, t2.topContainer), this.bottom = new Mt(s58, false, t2.bottomContainer), this.top.sync(this.panels.filter((e2) => e2.top)), this.bottom.sync(this.panels.filter((e2) => !e2.top));
    for (let e2 of this.panels) e2.dom.classList.add("cm-panel"), e2.mount && e2.mount();
  }
  update(s58) {
    let t2 = s58.state.facet(Hi);
    this.top.container != t2.topContainer && (this.top.sync([]), this.top = new Mt(s58.view, true, t2.topContainer)), this.bottom.container != t2.bottomContainer && (this.bottom.sync([]), this.bottom = new Mt(s58.view, false, t2.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e2 = s58.state.facet(Ni);
    if (e2 != this.input) {
      let i3 = e2.filter((h3) => h3), n6 = [], o3 = [], r2 = [], l8 = [];
      for (let h3 of i3) {
        let f2 = this.specs.indexOf(h3), a2;
        f2 < 0 ? (a2 = h3(s58.view), l8.push(a2)) : (a2 = this.panels[f2], a2.update && a2.update(s58)), n6.push(a2), (a2.top ? o3 : r2).push(a2);
      }
      this.specs = i3, this.panels = n6, this.top.sync(o3), this.bottom.sync(r2);
      for (let h3 of l8) h3.dom.classList.add("cm-panel"), h3.mount && h3.mount();
    } else for (let i3 of this.panels) i3.update && i3.update(s58);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (s58) => A2.scrollMargins.of((t2) => {
  let e2 = t2.plugin(s58);
  return e2 && { top: e2.top.scrollMargin(), bottom: e2.bottom.scrollMargin() };
}) });
var Mt = class {
  constructor(t2, e2, i3) {
    this.view = t2, this.top = e2, this.container = i3, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t2) {
    for (let e2 of this.panels) e2.destroy && t2.indexOf(e2) < 0 && e2.destroy();
    this.panels = t2, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e2 = this.container || this.view.dom;
      e2.insertBefore(this.dom, this.top ? e2.firstChild : null);
    }
    let t2 = this.dom.firstChild;
    for (let e2 of this.panels) if (e2.dom.parentNode == this.dom) {
      for (; t2 != e2.dom; ) t2 = Ps(t2);
      t2 = t2.nextSibling;
    } else this.dom.insertBefore(e2.dom, t2);
    for (; t2; ) t2 = Ps(t2);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t2 of this.classes.split(" ")) t2 && this.container.classList.remove(t2);
      for (let t2 of (this.classes = this.view.themeClasses).split(" ")) t2 && this.container.classList.add(t2);
    }
  }
};
function Ps(s58) {
  let t2 = s58.nextSibling;
  return s58.remove(), t2;
}
var Ni = k2.define({ enables: Xn });
var Se2 = q.define({ create() {
  return [];
}, update(s58, t2) {
  for (let e2 of t2.effects) e2.is($n) ? s58 = [e2.value].concat(s58) : e2.is(Gn) && (s58 = s58.filter((i3) => i3 != e2.value));
  return s58;
}, provide: (s58) => Ni.computeN([s58], (t2) => t2.field(s58)) });
var $n = v.define();
var Gn = v.define();
var J2 = class extends z {
  compare(t2) {
    return this == t2 || this.constructor == t2.constructor && this.eq(t2);
  }
  eq(t2) {
    return false;
  }
  destroy(t2) {
  }
};
J2.prototype.elementClass = "";
J2.prototype.toDOM = void 0;
J2.prototype.mapMode = E.TrackBefore;
J2.prototype.startSide = J2.prototype.endSide = -1;
J2.prototype.point = true;
var Ce2 = k2.define();
var Jr = k2.define();
var _t = k2.define();
var Vi = k2.define({ combine: (s58) => s58.some((t2) => t2) });
var tl = N2.fromClass(class {
  constructor(s58) {
    this.view = s58, this.domAfter = null, this.prevViewport = s58.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s58.state.facet(_t).map((t2) => new Fe2(s58, t2)), this.fixed = !s58.state.facet(Vi);
    for (let t2 of this.gutters) t2.config.side == "after" ? this.getDOMAfter().appendChild(t2.dom) : this.dom.appendChild(t2.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), s58.scrollDOM.insertBefore(this.dom, s58.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(s58) {
    if (this.updateGutters(s58)) {
      let t2 = this.prevViewport, e2 = s58.view.viewport, i3 = Math.min(t2.to, e2.to) - Math.max(t2.from, e2.from);
      this.syncGutters(i3 < (e2.to - e2.from) * 0.8);
    }
    if (s58.geometryChanged) {
      let t2 = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = t2, this.domAfter && (this.domAfter.style.minHeight = t2);
    }
    this.view.state.facet(Vi) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = s58.view.viewport;
  }
  syncGutters(s58) {
    let t2 = this.dom.nextSibling;
    s58 && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let e2 = T.iter(this.view.state.facet(Ce2), this.view.viewport.from), i3 = [], n6 = this.gutters.map((o3) => new Wi(o3, this.view.viewport, -this.view.documentPadding.top));
    for (let o3 of this.view.viewportLineBlocks) if (i3.length && (i3 = []), Array.isArray(o3.type)) {
      let r2 = true;
      for (let l8 of o3.type) if (l8.type == W2.Text && r2) {
        Fi(e2, i3, l8.from);
        for (let h3 of n6) h3.line(this.view, l8, i3);
        r2 = false;
      } else if (l8.widget) for (let h3 of n6) h3.widget(this.view, l8);
    } else if (o3.type == W2.Text) {
      Fi(e2, i3, o3.from);
      for (let r2 of n6) r2.line(this.view, o3, i3);
    } else if (o3.widget) for (let r2 of n6) r2.widget(this.view, o3);
    for (let o3 of n6) o3.finish();
    s58 && (this.view.scrollDOM.insertBefore(this.dom, t2), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(s58) {
    let t2 = s58.startState.facet(_t), e2 = s58.state.facet(_t), i3 = s58.docChanged || s58.heightChanged || s58.viewportChanged || !T.eq(s58.startState.facet(Ce2), s58.state.facet(Ce2), s58.view.viewport.from, s58.view.viewport.to);
    if (t2 == e2) for (let n6 of this.gutters) n6.update(s58) && (i3 = true);
    else {
      i3 = true;
      let n6 = [];
      for (let o3 of e2) {
        let r2 = t2.indexOf(o3);
        r2 < 0 ? n6.push(new Fe2(this.view, o3)) : (this.gutters[r2].update(s58), n6.push(this.gutters[r2]));
      }
      for (let o3 of this.gutters) o3.dom.remove(), n6.indexOf(o3) < 0 && o3.destroy();
      for (let o3 of n6) o3.config.side == "after" ? this.getDOMAfter().appendChild(o3.dom) : this.dom.appendChild(o3.dom);
      this.gutters = n6;
    }
    return i3;
  }
  destroy() {
    for (let s58 of this.gutters) s58.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, { provide: (s58) => A2.scrollMargins.of((t2) => {
  let e2 = t2.plugin(s58);
  if (!e2 || e2.gutters.length == 0 || !e2.fixed) return null;
  let i3 = e2.dom.offsetWidth * t2.scaleX, n6 = e2.domAfter ? e2.domAfter.offsetWidth * t2.scaleX : 0;
  return t2.textDirection == L2.LTR ? { left: i3, right: n6 } : { right: i3, left: n6 };
}) });
function Hs(s58) {
  return Array.isArray(s58) ? s58 : [s58];
}
function Fi(s58, t2, e2) {
  for (; s58.value && s58.from <= e2; ) s58.from == e2 && t2.push(s58.value), s58.next();
}
var Wi = class {
  constructor(t2, e2, i3) {
    this.gutter = t2, this.height = i3, this.i = 0, this.cursor = T.iter(t2.markers, e2.from);
  }
  addElement(t2, e2, i3) {
    let { gutter: n6 } = this, o3 = (e2.top - this.height) / t2.scaleY, r2 = e2.height / t2.scaleY;
    if (this.i == n6.elements.length) {
      let l8 = new We2(t2, r2, o3, i3);
      n6.elements.push(l8), n6.dom.appendChild(l8.dom);
    } else n6.elements[this.i].update(t2, r2, o3, i3);
    this.height = e2.bottom, this.i++;
  }
  line(t2, e2, i3) {
    let n6 = [];
    Fi(this.cursor, n6, e2.from), i3.length && (n6 = n6.concat(i3));
    let o3 = this.gutter.config.lineMarker(t2, e2, n6);
    o3 && n6.unshift(o3);
    let r2 = this.gutter;
    n6.length == 0 && !r2.config.renderEmptyElements || this.addElement(t2, e2, n6);
  }
  widget(t2, e2) {
    let i3 = this.gutter.config.widgetMarker(t2, e2.widget, e2), n6 = i3 ? [i3] : null;
    for (let o3 of t2.state.facet(Jr)) {
      let r2 = o3(t2, e2.widget, e2);
      r2 && (n6 || (n6 = [])).push(r2);
    }
    n6 && this.addElement(t2, e2, n6);
  }
  finish() {
    let t2 = this.gutter;
    for (; t2.elements.length > this.i; ) {
      let e2 = t2.elements.pop();
      t2.dom.removeChild(e2.dom), e2.destroy();
    }
  }
};
var Fe2 = class {
  constructor(t2, e2) {
    this.view = t2, this.config = e2, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i3 in e2.domEventHandlers) this.dom.addEventListener(i3, (n6) => {
      let o3 = n6.target, r2;
      if (o3 != this.dom && this.dom.contains(o3)) {
        for (; o3.parentNode != this.dom; ) o3 = o3.parentNode;
        let h3 = o3.getBoundingClientRect();
        r2 = (h3.top + h3.bottom) / 2;
      } else r2 = n6.clientY;
      let l8 = t2.lineBlockAtHeight(r2 - t2.documentTop);
      e2.domEventHandlers[i3](t2, l8, n6) && n6.preventDefault();
    });
    this.markers = Hs(e2.markers(t2)), e2.initialSpacer && (this.spacer = new We2(t2, 0, 0, [e2.initialSpacer(t2)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t2) {
    let e2 = this.markers;
    if (this.markers = Hs(this.config.markers(t2.view)), this.spacer && this.config.updateSpacer) {
      let n6 = this.config.updateSpacer(this.spacer.markers[0], t2);
      n6 != this.spacer.markers[0] && this.spacer.update(t2.view, 0, 0, [n6]);
    }
    let i3 = t2.view.viewport;
    return !T.eq(this.markers, e2, i3.from, i3.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t2) : false);
  }
  destroy() {
    for (let t2 of this.elements) t2.destroy();
  }
};
var We2 = class {
  constructor(t2, e2, i3, n6) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t2, e2, i3, n6);
  }
  update(t2, e2, i3, n6) {
    this.height != e2 && (this.height = e2, this.dom.style.height = e2 + "px"), this.above != i3 && (this.dom.style.marginTop = (this.above = i3) ? i3 + "px" : ""), el(this.markers, n6) || this.setMarkers(t2, n6);
  }
  setMarkers(t2, e2) {
    let i3 = "cm-gutterElement", n6 = this.dom.firstChild;
    for (let o3 = 0, r2 = 0; ; ) {
      let l8 = r2, h3 = o3 < e2.length ? e2[o3++] : null, f2 = false;
      if (h3) {
        let a2 = h3.elementClass;
        a2 && (i3 += " " + a2);
        for (let c4 = r2; c4 < this.markers.length; c4++) if (this.markers[c4].compare(h3)) {
          l8 = c4, f2 = true;
          break;
        }
      } else l8 = this.markers.length;
      for (; r2 < l8; ) {
        let a2 = this.markers[r2++];
        if (a2.toDOM) {
          a2.destroy(n6);
          let c4 = n6.nextSibling;
          n6.remove(), n6 = c4;
        }
      }
      if (!h3) break;
      h3.toDOM && (f2 ? n6 = n6.nextSibling : this.dom.insertBefore(h3.toDOM(t2), n6)), f2 && r2++;
    }
    this.dom.className = i3, this.markers = e2;
  }
  destroy() {
    this.setMarkers(null, []);
  }
};
function el(s58, t2) {
  if (s58.length != t2.length) return false;
  for (let e2 = 0; e2 < s58.length; e2++) if (!s58[e2].compare(t2[e2])) return false;
  return true;
}
var il = k2.define();
var sl = k2.define();
var kt = k2.define({ combine(s58) {
  return st(s58, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(t2, e2) {
    let i3 = Object.assign({}, t2);
    for (let n6 in e2) {
      let o3 = i3[n6], r2 = e2[n6];
      i3[n6] = o3 ? (l8, h3, f2) => o3(l8, h3, f2) || r2(l8, h3, f2) : r2;
    }
    return i3;
  } });
} });
var Yt = class extends J2 {
  constructor(t2) {
    super(), this.number = t2;
  }
  eq(t2) {
    return this.number == t2.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
};
function Ge2(s58, t2) {
  return s58.state.facet(kt).formatNumber(t2, s58.state);
}
var nl = _t.compute([kt], (s58) => ({ class: "cm-lineNumbers", renderEmptyElements: false, markers(t2) {
  return t2.state.facet(il);
}, lineMarker(t2, e2, i3) {
  return i3.some((n6) => n6.toDOM) ? null : new Yt(Ge2(t2, t2.state.doc.lineAt(e2.from).number));
}, widgetMarker: (t2, e2, i3) => {
  for (let n6 of t2.state.facet(sl)) {
    let o3 = n6(t2, e2, i3);
    if (o3) return o3;
  }
  return null;
}, lineMarkerChange: (t2) => t2.startState.facet(kt) != t2.state.facet(kt), initialSpacer(t2) {
  return new Yt(Ge2(t2, Ns(t2.state.doc.lines)));
}, updateSpacer(t2, e2) {
  let i3 = Ge2(e2.view, Ns(e2.view.state.doc.lines));
  return i3 == t2.number ? t2 : new Yt(i3);
}, domEventHandlers: s58.facet(kt).domEventHandlers, side: "before" }));
function Ns(s58) {
  let t2 = 9;
  for (; t2 < s58; ) t2 = t2 * 10 + 9;
  return t2;
}
var ol = new class extends J2 {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}();
var rl = Ce2.compute(["selection"], (s58) => {
  let t2 = [], e2 = -1;
  for (let i3 of s58.selection.ranges) {
    let n6 = s58.doc.lineAt(i3.head).from;
    n6 > e2 && (e2 = n6, t2.push(ol.range(n6)));
  }
  return T.of(t2);
});
function Qn(s58) {
  return N2.define((t2) => ({ decorations: s58.createDeco(t2), update(e2) {
    this.decorations = s58.updateDeco(e2, this.decorations);
  } }), { decorations: (t2) => t2.decorations });
}
var ll = T3.mark({ class: "cm-highlightTab" });
var hl = T3.mark({ class: "cm-highlightSpace" });
var al = Qn(new te2({ regexp: /\t| /g, decoration: (s58) => s58[0] == "	" ? ll : hl, boundary: /\S/ }));
var fl = Qn(new te2({ regexp: /\s+$/g, decoration: T3.mark({ class: "cm-trailingSpace" }) }));

// https://esm.sh/@lezer/common@1.3.0/denonext/common.mjs
var Fe3 = 1024;
var ze3 = 0;
var z3 = class {
  constructor(e2, t2) {
    this.from = e2, this.to = t2;
  }
};
var x3 = class {
  constructor(e2 = {}) {
    this.id = ze3++, this.perNode = !!e2.perNode, this.deserialize = e2.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e2.combine || null;
  }
  add(e2) {
    if (this.perNode) throw new RangeError("Can't add per-node props to node types");
    return typeof e2 != "function" && (e2 = F3.match(e2)), (t2) => {
      let r2 = e2(t2);
      return r2 === void 0 ? null : [this, r2];
    };
  }
};
x3.closedBy = new x3({ deserialize: (s58) => s58.split(" ") });
x3.openedBy = new x3({ deserialize: (s58) => s58.split(" ") });
x3.group = new x3({ deserialize: (s58) => s58.split(" ") });
x3.isolate = new x3({ deserialize: (s58) => {
  if (s58 && s58 != "rtl" && s58 != "ltr" && s58 != "auto") throw new RangeError("Invalid value for isolate: " + s58);
  return s58 || "auto";
} });
x3.contextHash = new x3({ perNode: true });
x3.lookAhead = new x3({ perNode: true });
x3.mounted = new x3({ perNode: true });
var V3 = class {
  constructor(e2, t2, r2) {
    this.tree = e2, this.overlay = t2, this.parser = r2;
  }
  static get(e2) {
    return e2 && e2.props && e2.props[x3.mounted.id];
  }
};
var Pe3 = /* @__PURE__ */ Object.create(null);
var F3 = class s47 {
  constructor(e2, t2, r2, i3 = 0) {
    this.name = e2, this.props = t2, this.id = r2, this.flags = i3;
  }
  static define(e2) {
    let t2 = e2.props && e2.props.length ? /* @__PURE__ */ Object.create(null) : Pe3, r2 = (e2.top ? 1 : 0) | (e2.skipped ? 2 : 0) | (e2.error ? 4 : 0) | (e2.name == null ? 8 : 0), i3 = new s47(e2.name || "", t2, e2.id, r2);
    if (e2.props) {
      for (let n6 of e2.props) if (Array.isArray(n6) || (n6 = n6(i3)), n6) {
        if (n6[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
        t2[n6[0].id] = n6[1];
      }
    }
    return i3;
  }
  prop(e2) {
    return this.props[e2.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e2) {
    if (typeof e2 == "string") {
      if (this.name == e2) return true;
      let t2 = this.prop(x3.group);
      return t2 ? t2.indexOf(e2) > -1 : false;
    }
    return this.id == e2;
  }
  static match(e2) {
    let t2 = /* @__PURE__ */ Object.create(null);
    for (let r2 in e2) for (let i3 of r2.split(" ")) t2[i3] = e2[r2];
    return (r2) => {
      for (let i3 = r2.prop(x3.group), n6 = -1; n6 < (i3 ? i3.length : 0); n6++) {
        let l8 = t2[n6 < 0 ? r2.name : i3[n6]];
        if (l8) return l8;
      }
    };
  }
};
F3.none = new F3("", /* @__PURE__ */ Object.create(null), 0, 8);
var be3 = class s48 {
  constructor(e2) {
    this.types = e2;
    for (let t2 = 0; t2 < e2.length; t2++) if (e2[t2].id != t2) throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  extend(...e2) {
    let t2 = [];
    for (let r2 of this.types) {
      let i3 = null;
      for (let n6 of e2) {
        let l8 = n6(r2);
        if (l8) {
          i3 || (i3 = Object.assign({}, r2.props));
          let f2 = l8[1], h3 = l8[0];
          h3.combine && h3.id in i3 && (f2 = h3.combine(i3[h3.id], f2)), i3[h3.id] = f2;
        }
      }
      t2.push(i3 ? new F3(r2.name, i3, r2.id, r2.flags) : r2);
    }
    return new s48(t2);
  }
};
var Z2 = /* @__PURE__ */ new WeakMap();
var xe3 = /* @__PURE__ */ new WeakMap();
var S3;
(function(s58) {
  s58[s58.ExcludeBuffers = 1] = "ExcludeBuffers", s58[s58.IncludeAnonymous = 2] = "IncludeAnonymous", s58[s58.IgnoreMounts = 4] = "IgnoreMounts", s58[s58.IgnoreOverlays = 8] = "IgnoreOverlays";
})(S3 || (S3 = {}));
var O3 = class s49 {
  constructor(e2, t2, r2, i3, n6) {
    if (this.type = e2, this.children = t2, this.positions = r2, this.length = i3, this.props = null, n6 && n6.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [l8, f2] of n6) this.props[typeof l8 == "number" ? l8 : l8.id] = f2;
    }
  }
  toString() {
    let e2 = V3.get(this);
    if (e2 && !e2.overlay) return e2.tree.toString();
    let t2 = "";
    for (let r2 of this.children) {
      let i3 = r2.toString();
      i3 && (t2 && (t2 += ","), t2 += i3);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t2.length ? "(" + t2 + ")" : "") : t2;
  }
  cursor(e2 = 0) {
    return new q3(this.topNode, e2);
  }
  cursorAt(e2, t2 = 0, r2 = 0) {
    let i3 = Z2.get(this) || this.topNode, n6 = new q3(i3);
    return n6.moveTo(e2, t2), Z2.set(this, n6._tree), n6;
  }
  get topNode() {
    return new P2(this, 0, 0, null);
  }
  resolve(e2, t2 = 0) {
    let r2 = Q3(Z2.get(this) || this.topNode, e2, t2, false);
    return Z2.set(this, r2), r2;
  }
  resolveInner(e2, t2 = 0) {
    let r2 = Q3(xe3.get(this) || this.topNode, e2, t2, true);
    return xe3.set(this, r2), r2;
  }
  resolveStack(e2, t2 = 0) {
    return Ee3(this, e2, t2);
  }
  iterate(e2) {
    let { enter: t2, leave: r2, from: i3 = 0, to: n6 = this.length } = e2, l8 = e2.mode || 0, f2 = (l8 & S3.IncludeAnonymous) > 0;
    for (let h3 = this.cursor(l8 | S3.IncludeAnonymous); ; ) {
      let u4 = false;
      if (h3.from <= n6 && h3.to >= i3 && (!f2 && h3.type.isAnonymous || t2(h3) !== false)) {
        if (h3.firstChild()) continue;
        u4 = true;
      }
      for (; u4 && r2 && (f2 || !h3.type.isAnonymous) && r2(h3), !h3.nextSibling(); ) {
        if (!h3.parent()) return;
        u4 = true;
      }
    }
  }
  prop(e2) {
    return e2.perNode ? this.props ? this.props[e2.id] : void 0 : this.type.prop(e2);
  }
  get propValues() {
    let e2 = [];
    if (this.props) for (let t2 in this.props) e2.push([+t2, this.props[t2]]);
    return e2;
  }
  balance(e2 = {}) {
    return this.children.length <= 8 ? this : ge2(F3.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t2, r2, i3) => new s49(this.type, t2, r2, i3, this.propValues), e2.makeTree || ((t2, r2, i3) => new s49(F3.none, t2, r2, i3)));
  }
  static build(e2) {
    return Me3(e2);
  }
};
O3.empty = new O3(F3.none, [], [], 0);
var se3 = class s50 {
  constructor(e2, t2) {
    this.buffer = e2, this.index = t2;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new s50(this.buffer, this.index);
  }
};
var W3 = class s51 {
  constructor(e2, t2, r2) {
    this.buffer = e2, this.length = t2, this.set = r2;
  }
  get type() {
    return F3.none;
  }
  toString() {
    let e2 = [];
    for (let t2 = 0; t2 < this.buffer.length; ) e2.push(this.childString(t2)), t2 = this.buffer[t2 + 3];
    return e2.join(",");
  }
  childString(e2) {
    let t2 = this.buffer[e2], r2 = this.buffer[e2 + 3], i3 = this.set.types[t2], n6 = i3.name;
    if (/\W/.test(n6) && !i3.isError && (n6 = JSON.stringify(n6)), e2 += 4, r2 == e2) return n6;
    let l8 = [];
    for (; e2 < r2; ) l8.push(this.childString(e2)), e2 = this.buffer[e2 + 3];
    return n6 + "(" + l8.join(",") + ")";
  }
  findChild(e2, t2, r2, i3, n6) {
    let { buffer: l8 } = this, f2 = -1;
    for (let h3 = e2; h3 != t2 && !(Ne3(n6, i3, l8[h3 + 1], l8[h3 + 2]) && (f2 = h3, r2 > 0)); h3 = l8[h3 + 3]) ;
    return f2;
  }
  slice(e2, t2, r2) {
    let i3 = this.buffer, n6 = new Uint16Array(t2 - e2), l8 = 0;
    for (let f2 = e2, h3 = 0; f2 < t2; ) {
      n6[h3++] = i3[f2++], n6[h3++] = i3[f2++] - r2;
      let u4 = n6[h3++] = i3[f2++] - r2;
      n6[h3++] = i3[f2++] - e2, l8 = Math.max(l8, u4);
    }
    return new s51(n6, l8, this.set);
  }
};
function Ne3(s58, e2, t2, r2) {
  switch (s58) {
    case -2:
      return t2 < e2;
    case -1:
      return r2 >= e2 && t2 < e2;
    case 0:
      return t2 < e2 && r2 > e2;
    case 1:
      return t2 <= e2 && r2 > e2;
    case 2:
      return r2 > e2;
    case 4:
      return true;
  }
}
function Q3(s58, e2, t2, r2) {
  for (var i3; s58.from == s58.to || (t2 < 1 ? s58.from >= e2 : s58.from > e2) || (t2 > -1 ? s58.to <= e2 : s58.to < e2); ) {
    let l8 = !r2 && s58 instanceof P2 && s58.index < 0 ? null : s58.parent;
    if (!l8) return s58;
    s58 = l8;
  }
  let n6 = r2 ? 0 : S3.IgnoreOverlays;
  if (r2) for (let l8 = s58, f2 = l8.parent; f2; l8 = f2, f2 = l8.parent) l8 instanceof P2 && l8.index < 0 && ((i3 = f2.enter(e2, t2, n6)) === null || i3 === void 0 ? void 0 : i3.from) != l8.from && (s58 = f2);
  for (; ; ) {
    let l8 = s58.enter(e2, t2, n6);
    if (!l8) return s58;
    s58 = l8;
  }
}
var te3 = class {
  cursor(e2 = 0) {
    return new q3(this, e2);
  }
  getChild(e2, t2 = null, r2 = null) {
    let i3 = we3(this, e2, t2, r2);
    return i3.length ? i3[0] : null;
  }
  getChildren(e2, t2 = null, r2 = null) {
    return we3(this, e2, t2, r2);
  }
  resolve(e2, t2 = 0) {
    return Q3(this, e2, t2, false);
  }
  resolveInner(e2, t2 = 0) {
    return Q3(this, e2, t2, true);
  }
  matchContext(e2) {
    return le3(this.parent, e2);
  }
  enterUnfinishedNodesBefore(e2) {
    let t2 = this.childBefore(e2), r2 = this;
    for (; t2; ) {
      let i3 = t2.lastChild;
      if (!i3 || i3.to != t2.to) break;
      i3.type.isError && i3.from == i3.to ? (r2 = t2, t2 = i3.prevSibling) : t2 = i3;
    }
    return r2;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
};
var P2 = class s52 extends te3 {
  constructor(e2, t2, r2, i3) {
    super(), this._tree = e2, this.from = t2, this.index = r2, this._parent = i3;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e2, t2, r2, i3, n6 = 0) {
    for (let l8 = this; ; ) {
      for (let { children: f2, positions: h3 } = l8._tree, u4 = t2 > 0 ? f2.length : -1; e2 != u4; e2 += t2) {
        let o3 = f2[e2], c4 = h3[e2] + l8.from;
        if (Ne3(i3, r2, c4, c4 + o3.length)) {
          if (o3 instanceof W3) {
            if (n6 & S3.ExcludeBuffers) continue;
            let d3 = o3.findChild(0, o3.buffer.length, t2, r2 - c4, i3);
            if (d3 > -1) return new G3(new fe3(l8, o3, e2, c4), null, d3);
          } else if (n6 & S3.IncludeAnonymous || !o3.type.isAnonymous || ce3(o3)) {
            let d3;
            if (!(n6 & S3.IgnoreMounts) && (d3 = V3.get(o3)) && !d3.overlay) return new s52(d3.tree, c4, e2, l8);
            let y7 = new s52(o3, c4, e2, l8);
            return n6 & S3.IncludeAnonymous || !y7.type.isAnonymous ? y7 : y7.nextChild(t2 < 0 ? o3.children.length - 1 : 0, t2, r2, i3);
          }
        }
      }
      if (n6 & S3.IncludeAnonymous || !l8.type.isAnonymous || (l8.index >= 0 ? e2 = l8.index + t2 : e2 = t2 < 0 ? -1 : l8._parent._tree.children.length, l8 = l8._parent, !l8)) return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e2) {
    return this.nextChild(0, 1, e2, 2);
  }
  childBefore(e2) {
    return this.nextChild(this._tree.children.length - 1, -1, e2, -2);
  }
  enter(e2, t2, r2 = 0) {
    let i3;
    if (!(r2 & S3.IgnoreOverlays) && (i3 = V3.get(this._tree)) && i3.overlay) {
      let n6 = e2 - this.from;
      for (let { from: l8, to: f2 } of i3.overlay) if ((t2 > 0 ? l8 <= n6 : l8 < n6) && (t2 < 0 ? f2 >= n6 : f2 > n6)) return new s52(i3.tree, i3.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e2, t2, r2);
  }
  nextSignificantParent() {
    let e2 = this;
    for (; e2.type.isAnonymous && e2._parent; ) e2 = e2._parent;
    return e2;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
};
function we3(s58, e2, t2, r2) {
  let i3 = s58.cursor(), n6 = [];
  if (!i3.firstChild()) return n6;
  if (t2 != null) {
    for (let l8 = false; !l8; ) if (l8 = i3.type.is(t2), !i3.nextSibling()) return n6;
  }
  for (; ; ) {
    if (r2 != null && i3.type.is(r2)) return n6;
    if (i3.type.is(e2) && n6.push(i3.node), !i3.nextSibling()) return r2 == null ? n6 : [];
  }
}
function le3(s58, e2, t2 = e2.length - 1) {
  for (let r2 = s58; t2 >= 0; r2 = r2.parent) {
    if (!r2) return false;
    if (!r2.type.isAnonymous) {
      if (e2[t2] && e2[t2] != r2.name) return false;
      t2--;
    }
  }
  return true;
}
var fe3 = class {
  constructor(e2, t2, r2, i3) {
    this.parent = e2, this.buffer = t2, this.index = r2, this.start = i3;
  }
};
var G3 = class s53 extends te3 {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e2, t2, r2) {
    super(), this.context = e2, this._parent = t2, this.index = r2, this.type = e2.buffer.set.types[e2.buffer.buffer[r2]];
  }
  child(e2, t2, r2) {
    let { buffer: i3 } = this.context, n6 = i3.findChild(this.index + 4, i3.buffer[this.index + 3], e2, t2 - this.context.start, r2);
    return n6 < 0 ? null : new s53(this.context, this, n6);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e2) {
    return this.child(1, e2, 2);
  }
  childBefore(e2) {
    return this.child(-1, e2, -2);
  }
  enter(e2, t2, r2 = 0) {
    if (r2 & S3.ExcludeBuffers) return null;
    let { buffer: i3 } = this.context, n6 = i3.findChild(this.index + 4, i3.buffer[this.index + 3], t2 > 0 ? 1 : -1, e2 - this.context.start, t2);
    return n6 < 0 ? null : new s53(this.context, this, n6);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e2) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e2, e2, 0, 4);
  }
  get nextSibling() {
    let { buffer: e2 } = this.context, t2 = e2.buffer[this.index + 3];
    return t2 < (this._parent ? e2.buffer[this._parent.index + 3] : e2.buffer.length) ? new s53(this.context, this._parent, t2) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e2 } = this.context, t2 = this._parent ? this._parent.index + 4 : 0;
    return this.index == t2 ? this.externalSibling(-1) : new s53(this.context, this._parent, e2.findChild(t2, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e2 = [], t2 = [], { buffer: r2 } = this.context, i3 = this.index + 4, n6 = r2.buffer[this.index + 3];
    if (n6 > i3) {
      let l8 = r2.buffer[this.index + 1];
      e2.push(r2.slice(i3, n6, l8)), t2.push(0);
    }
    return new O3(this.type, e2, t2, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
};
function Be3(s58) {
  if (!s58.length) return null;
  let e2 = 0, t2 = s58[0];
  for (let n6 = 1; n6 < s58.length; n6++) {
    let l8 = s58[n6];
    (l8.from > t2.from || l8.to < t2.to) && (t2 = l8, e2 = n6);
  }
  let r2 = t2 instanceof P2 && t2.index < 0 ? null : t2.parent, i3 = s58.slice();
  return r2 ? i3[e2] = r2 : i3.splice(e2, 1), new he2(i3, t2);
}
var he2 = class {
  constructor(e2, t2) {
    this.heads = e2, this.node = t2;
  }
  get next() {
    return Be3(this.heads);
  }
};
function Ee3(s58, e2, t2) {
  let r2 = s58.resolveInner(e2, t2), i3 = null;
  for (let n6 = r2 instanceof P2 ? r2 : r2.context.parent; n6; n6 = n6.parent) if (n6.index < 0) {
    let l8 = n6.parent;
    (i3 || (i3 = [r2])).push(l8.resolve(e2, t2)), n6 = l8;
  } else {
    let l8 = V3.get(n6.tree);
    if (l8 && l8.overlay && l8.overlay[0].from <= e2 && l8.overlay[l8.overlay.length - 1].to >= e2) {
      let f2 = new P2(l8.tree, l8.overlay[0].from + n6.from, -1, n6);
      (i3 || (i3 = [r2])).push(Q3(f2, e2, t2, false));
    }
  }
  return i3 ? Be3(i3) : r2;
}
var q3 = class {
  get name() {
    return this.type.name;
  }
  constructor(e2, t2 = 0) {
    if (this.mode = t2, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e2 instanceof P2) this.yieldNode(e2);
    else {
      this._tree = e2.context.parent, this.buffer = e2.context;
      for (let r2 = e2._parent; r2; r2 = r2._parent) this.stack.unshift(r2.index);
      this.bufferNode = e2, this.yieldBuf(e2.index);
    }
  }
  yieldNode(e2) {
    return e2 ? (this._tree = e2, this.type = e2.type, this.from = e2.from, this.to = e2.to, true) : false;
  }
  yieldBuf(e2, t2) {
    this.index = e2;
    let { start: r2, buffer: i3 } = this.buffer;
    return this.type = t2 || i3.set.types[i3.buffer[e2]], this.from = r2 + i3.buffer[e2 + 1], this.to = r2 + i3.buffer[e2 + 2], true;
  }
  yield(e2) {
    return e2 ? e2 instanceof P2 ? (this.buffer = null, this.yieldNode(e2)) : (this.buffer = e2.context, this.yieldBuf(e2.index, e2.type)) : false;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e2, t2, r2) {
    if (!this.buffer) return this.yield(this._tree.nextChild(e2 < 0 ? this._tree._tree.children.length - 1 : 0, e2, t2, r2, this.mode));
    let { buffer: i3 } = this.buffer, n6 = i3.findChild(this.index + 4, i3.buffer[this.index + 3], e2, t2 - this.buffer.start, r2);
    return n6 < 0 ? false : (this.stack.push(this.index), this.yieldBuf(n6));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e2) {
    return this.enterChild(1, e2, 2);
  }
  childBefore(e2) {
    return this.enterChild(-1, e2, -2);
  }
  enter(e2, t2, r2 = this.mode) {
    return this.buffer ? r2 & S3.ExcludeBuffers ? false : this.enterChild(1, e2, t2) : this.yield(this._tree.enter(e2, t2, r2));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & S3.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e2 = this.mode & S3.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e2);
  }
  sibling(e2) {
    if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e2, e2, 0, 4, this.mode)) : false;
    let { buffer: t2 } = this.buffer, r2 = this.stack.length - 1;
    if (e2 < 0) {
      let i3 = r2 < 0 ? 0 : this.stack[r2] + 4;
      if (this.index != i3) return this.yieldBuf(t2.findChild(i3, this.index, -1, 0, 4));
    } else {
      let i3 = t2.buffer[this.index + 3];
      if (i3 < (r2 < 0 ? t2.buffer.length : t2.buffer[this.stack[r2] + 3])) return this.yieldBuf(i3);
    }
    return r2 < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e2, e2, 0, 4, this.mode)) : false;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e2) {
    let t2, r2, { buffer: i3 } = this;
    if (i3) {
      if (e2 > 0) {
        if (this.index < i3.buffer.buffer.length) return false;
      } else for (let n6 = 0; n6 < this.index; n6++) if (i3.buffer.buffer[n6 + 3] < this.index) return false;
      ({ index: t2, parent: r2 } = i3);
    } else ({ index: t2, _parent: r2 } = this._tree);
    for (; r2; { index: t2, _parent: r2 } = r2) if (t2 > -1) for (let n6 = t2 + e2, l8 = e2 < 0 ? -1 : r2._tree.children.length; n6 != l8; n6 += e2) {
      let f2 = r2._tree.children[n6];
      if (this.mode & S3.IncludeAnonymous || f2 instanceof W3 || !f2.type.isAnonymous || ce3(f2)) return false;
    }
    return true;
  }
  move(e2, t2) {
    if (t2 && this.enterChild(e2, 0, 4)) return true;
    for (; ; ) {
      if (this.sibling(e2)) return true;
      if (this.atLastNode(e2) || !this.parent()) return false;
    }
  }
  next(e2 = true) {
    return this.move(1, e2);
  }
  prev(e2 = true) {
    return this.move(-1, e2);
  }
  moveTo(e2, t2 = 0) {
    for (; (this.from == this.to || (t2 < 1 ? this.from >= e2 : this.from > e2) || (t2 > -1 ? this.to <= e2 : this.to < e2)) && this.parent(); ) ;
    for (; this.enterChild(1, e2, t2); ) ;
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e2 = this.bufferNode, t2 = null, r2 = 0;
    if (e2 && e2.context == this.buffer) e: for (let i3 = this.index, n6 = this.stack.length; n6 >= 0; ) {
      for (let l8 = e2; l8; l8 = l8._parent) if (l8.index == i3) {
        if (i3 == this.index) return l8;
        t2 = l8, r2 = n6 + 1;
        break e;
      }
      i3 = this.stack[--n6];
    }
    for (let i3 = r2; i3 < this.stack.length; i3++) t2 = new G3(this.buffer, t2, this.stack[i3]);
    return this.bufferNode = new G3(this.buffer, t2, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e2, t2) {
    for (let r2 = 0; ; ) {
      let i3 = false;
      if (this.type.isAnonymous || e2(this) !== false) {
        if (this.firstChild()) {
          r2++;
          continue;
        }
        this.type.isAnonymous || (i3 = true);
      }
      for (; ; ) {
        if (i3 && t2 && t2(this), i3 = this.type.isAnonymous, !r2) return;
        if (this.nextSibling()) break;
        this.parent(), r2--, i3 = true;
      }
    }
  }
  matchContext(e2) {
    if (!this.buffer) return le3(this.node.parent, e2);
    let { buffer: t2 } = this.buffer, { types: r2 } = t2.set;
    for (let i3 = e2.length - 1, n6 = this.stack.length - 1; i3 >= 0; n6--) {
      if (n6 < 0) return le3(this._tree, e2, i3);
      let l8 = r2[t2.buffer[this.stack[n6]]];
      if (!l8.isAnonymous) {
        if (e2[i3] && e2[i3] != l8.name) return false;
        i3--;
      }
    }
    return true;
  }
};
function ce3(s58) {
  return s58.children.some((e2) => e2 instanceof W3 || !e2.type.isAnonymous || ce3(e2));
}
function Me3(s58) {
  var e2;
  let { buffer: t2, nodeSet: r2, maxBufferLength: i3 = 1024, reused: n6 = [], minRepeatType: l8 = r2.types.length } = s58, f2 = Array.isArray(t2) ? new se3(t2, t2.length) : t2, h3 = r2.types, u4 = 0, o3 = 0;
  function c4(m7, v3, a2, A6, b6, C6) {
    let { id: g6, start: p2, end: w7, size: k6 } = f2, N6 = o3, U7 = u4;
    if (k6 < 0) if (f2.next(), k6 == -1) {
      let L7 = n6[g6];
      a2.push(L7), A6.push(p2 - m7);
      return;
    } else if (k6 == -3) {
      u4 = g6;
      return;
    } else if (k6 == -4) {
      o3 = g6;
      return;
    } else throw new RangeError(`Unrecognized record size: ${k6}`);
    let K3 = h3[g6], X7, H5, me4 = p2 - m7;
    if (w7 - p2 <= i3 && (H5 = T7(f2.pos - v3, b6))) {
      let L7 = new Uint16Array(H5.size - H5.skip), M5 = f2.pos - H5.size, D6 = L7.length;
      for (; f2.pos > M5; ) D6 = j6(H5.start, L7, D6);
      X7 = new W3(L7, w7 - H5.start, r2), me4 = H5.start - m7;
    } else {
      let L7 = f2.pos - k6;
      f2.next();
      let M5 = [], D6 = [], J5 = g6 >= l8 ? g6 : -1, $5 = 0, Y7 = w7;
      for (; f2.pos > L7; ) J5 >= 0 && f2.id == J5 && f2.size >= 0 ? (f2.end <= Y7 - i3 && (_4(M5, D6, p2, $5, f2.end, Y7, J5, N6, U7), $5 = M5.length, Y7 = f2.end), f2.next()) : C6 > 2500 ? d3(p2, L7, M5, D6) : c4(p2, L7, M5, D6, J5, C6 + 1);
      if (J5 >= 0 && $5 > 0 && $5 < M5.length && _4(M5, D6, p2, $5, p2, Y7, J5, N6, U7), M5.reverse(), D6.reverse(), J5 > -1 && $5 > 0) {
        let ye3 = y7(K3, U7);
        X7 = ge2(K3, M5, D6, 0, M5.length, 0, w7 - p2, ye3, ye3);
      } else X7 = B6(K3, M5, D6, w7 - p2, N6 - w7, U7);
    }
    a2.push(X7), A6.push(me4);
  }
  function d3(m7, v3, a2, A6) {
    let b6 = [], C6 = 0, g6 = -1;
    for (; f2.pos > v3; ) {
      let { id: p2, start: w7, end: k6, size: N6 } = f2;
      if (N6 > 4) f2.next();
      else {
        if (g6 > -1 && w7 < g6) break;
        g6 < 0 && (g6 = k6 - i3), b6.push(p2, w7, k6), C6++, f2.next();
      }
    }
    if (C6) {
      let p2 = new Uint16Array(C6 * 4), w7 = b6[b6.length - 2];
      for (let k6 = b6.length - 3, N6 = 0; k6 >= 0; k6 -= 3) p2[N6++] = b6[k6], p2[N6++] = b6[k6 + 1] - w7, p2[N6++] = b6[k6 + 2] - w7, p2[N6++] = N6;
      a2.push(new W3(p2, b6[2] - w7, r2)), A6.push(w7 - m7);
    }
  }
  function y7(m7, v3) {
    return (a2, A6, b6) => {
      let C6 = 0, g6 = a2.length - 1, p2, w7;
      if (g6 >= 0 && (p2 = a2[g6]) instanceof O3) {
        if (!g6 && p2.type == m7 && p2.length == b6) return p2;
        (w7 = p2.prop(x3.lookAhead)) && (C6 = A6[g6] + p2.length + w7);
      }
      return B6(m7, a2, A6, b6, C6, v3);
    };
  }
  function _4(m7, v3, a2, A6, b6, C6, g6, p2, w7) {
    let k6 = [], N6 = [];
    for (; m7.length > A6; ) k6.push(m7.pop()), N6.push(v3.pop() + a2 - b6);
    m7.push(B6(r2.types[g6], k6, N6, C6 - b6, p2 - C6, w7)), v3.push(b6 - a2);
  }
  function B6(m7, v3, a2, A6, b6, C6, g6) {
    if (C6) {
      let p2 = [x3.contextHash, C6];
      g6 = g6 ? [p2].concat(g6) : [p2];
    }
    if (b6 > 25) {
      let p2 = [x3.lookAhead, b6];
      g6 = g6 ? [p2].concat(g6) : [p2];
    }
    return new O3(m7, v3, a2, A6, g6);
  }
  function T7(m7, v3) {
    let a2 = f2.fork(), A6 = 0, b6 = 0, C6 = 0, g6 = a2.end - i3, p2 = { size: 0, start: 0, skip: 0 };
    e: for (let w7 = a2.pos - m7; a2.pos > w7; ) {
      let k6 = a2.size;
      if (a2.id == v3 && k6 >= 0) {
        p2.size = A6, p2.start = b6, p2.skip = C6, C6 += 4, A6 += 4, a2.next();
        continue;
      }
      let N6 = a2.pos - k6;
      if (k6 < 0 || N6 < w7 || a2.start < g6) break;
      let U7 = a2.id >= l8 ? 4 : 0, K3 = a2.start;
      for (a2.next(); a2.pos > N6; ) {
        if (a2.size < 0) if (a2.size == -3) U7 += 4;
        else break e;
        else a2.id >= l8 && (U7 += 4);
        a2.next();
      }
      b6 = K3, A6 += k6, C6 += U7;
    }
    return (v3 < 0 || A6 == m7) && (p2.size = A6, p2.start = b6, p2.skip = C6), p2.size > 4 ? p2 : void 0;
  }
  function j6(m7, v3, a2) {
    let { id: A6, start: b6, end: C6, size: g6 } = f2;
    if (f2.next(), g6 >= 0 && A6 < l8) {
      let p2 = a2;
      if (g6 > 4) {
        let w7 = f2.pos - (g6 - 4);
        for (; f2.pos > w7; ) a2 = j6(m7, v3, a2);
      }
      v3[--a2] = p2, v3[--a2] = C6 - m7, v3[--a2] = b6 - m7, v3[--a2] = A6;
    } else g6 == -3 ? u4 = A6 : g6 == -4 && (o3 = A6);
    return a2;
  }
  let E6 = [], I7 = [];
  for (; f2.pos > 0; ) c4(s58.start || 0, s58.bufferStart || 0, E6, I7, -1, 0);
  let R6 = (e2 = s58.length) !== null && e2 !== void 0 ? e2 : E6.length ? I7[0] + E6[0].length : 0;
  return new O3(h3[s58.topID], E6.reverse(), I7.reverse(), R6);
}
var ve3 = /* @__PURE__ */ new WeakMap();
function ee3(s58, e2) {
  if (!s58.isAnonymous || e2 instanceof W3 || e2.type != s58) return 1;
  let t2 = ve3.get(e2);
  if (t2 == null) {
    t2 = 1;
    for (let r2 of e2.children) {
      if (r2.type != s58 || !(r2 instanceof O3)) {
        t2 = 1;
        break;
      }
      t2 += ee3(s58, r2);
    }
    ve3.set(e2, t2);
  }
  return t2;
}
function ge2(s58, e2, t2, r2, i3, n6, l8, f2, h3) {
  let u4 = 0;
  for (let _4 = r2; _4 < i3; _4++) u4 += ee3(s58, e2[_4]);
  let o3 = Math.ceil(u4 * 1.5 / 8), c4 = [], d3 = [];
  function y7(_4, B6, T7, j6, E6) {
    for (let I7 = T7; I7 < j6; ) {
      let R6 = I7, m7 = B6[I7], v3 = ee3(s58, _4[I7]);
      for (I7++; I7 < j6; I7++) {
        let a2 = ee3(s58, _4[I7]);
        if (v3 + a2 >= o3) break;
        v3 += a2;
      }
      if (I7 == R6 + 1) {
        if (v3 > o3) {
          let a2 = _4[R6];
          y7(a2.children, a2.positions, 0, a2.children.length, B6[R6] + E6);
          continue;
        }
        c4.push(_4[R6]);
      } else {
        let a2 = B6[I7 - 1] + _4[I7 - 1].length - m7;
        c4.push(ge2(s58, _4, B6, R6, I7, m7, a2, null, h3));
      }
      d3.push(m7 + E6 - n6);
    }
  }
  return y7(e2, t2, r2, i3, 0), (f2 || h3)(c4, d3, l8);
}
var re2 = class s54 {
  constructor(e2, t2, r2, i3, n6 = false, l8 = false) {
    this.from = e2, this.to = t2, this.tree = r2, this.offset = i3, this.open = (n6 ? 1 : 0) | (l8 ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e2, t2 = [], r2 = false) {
    let i3 = [new s54(0, e2.length, e2, 0, false, r2)];
    for (let n6 of t2) n6.to > e2.length && i3.push(n6);
    return i3;
  }
  static applyChanges(e2, t2, r2 = 128) {
    if (!t2.length) return e2;
    let i3 = [], n6 = 1, l8 = e2.length ? e2[0] : null;
    for (let f2 = 0, h3 = 0, u4 = 0; ; f2++) {
      let o3 = f2 < t2.length ? t2[f2] : null, c4 = o3 ? o3.fromA : 1e9;
      if (c4 - h3 >= r2) for (; l8 && l8.from < c4; ) {
        let d3 = l8;
        if (h3 >= d3.from || c4 <= d3.to || u4) {
          let y7 = Math.max(d3.from, h3) - u4, _4 = Math.min(d3.to, c4) - u4;
          d3 = y7 >= _4 ? null : new s54(y7, _4, d3.tree, d3.offset + u4, f2 > 0, !!o3);
        }
        if (d3 && i3.push(d3), l8.to > c4) break;
        l8 = n6 < e2.length ? e2[n6++] : null;
      }
      if (!o3) break;
      h3 = o3.toA, u4 = o3.toA - o3.toB;
    }
    return i3;
  }
};
var Ae3 = class {
  startParse(e2, t2, r2) {
    return typeof e2 == "string" && (e2 = new oe2(e2)), r2 = r2 ? r2.length ? r2.map((i3) => new z3(i3.from, i3.to)) : [new z3(0, 0)] : [new z3(0, e2.length)], this.createParse(e2, t2 || [], r2);
  }
  parse(e2, t2, r2) {
    let i3 = this.startParse(e2, t2, r2);
    for (; ; ) {
      let n6 = i3.advance();
      if (n6) return n6;
    }
  }
};
var oe2 = class {
  constructor(e2) {
    this.string = e2;
  }
  get length() {
    return this.string.length;
  }
  chunk(e2) {
    return this.string.slice(e2);
  }
  get lineChunks() {
    return false;
  }
  read(e2, t2) {
    return this.string.slice(e2, t2);
  }
};
function De3(s58) {
  return (e2, t2, r2, i3) => new pe3(e2, s58, t2, r2, i3);
}
var ie3 = class {
  constructor(e2, t2, r2, i3, n6) {
    this.parser = e2, this.parse = t2, this.overlay = r2, this.target = i3, this.from = n6;
  }
};
function Ce3(s58) {
  if (!s58.length || s58.some((e2) => e2.from >= e2.to)) throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(s58));
}
var ue3 = class {
  constructor(e2, t2, r2, i3, n6, l8, f2) {
    this.parser = e2, this.predicate = t2, this.mounts = r2, this.index = i3, this.start = n6, this.target = l8, this.prev = f2, this.depth = 0, this.ranges = [];
  }
};
var ae3 = new x3({ perNode: true });
var pe3 = class {
  constructor(e2, t2, r2, i3, n6) {
    this.nest = t2, this.input = r2, this.fragments = i3, this.ranges = n6, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e2;
  }
  advance() {
    if (this.baseParse) {
      let r2 = this.baseParse.advance();
      if (!r2) return null;
      if (this.baseParse = null, this.baseTree = r2, this.startInner(), this.stoppedAt != null) for (let i3 of this.inner) i3.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let r2 = this.baseTree;
      return this.stoppedAt != null && (r2 = new O3(r2.type, r2.children, r2.positions, r2.length, r2.propValues.concat([[ae3, this.stoppedAt]]))), r2;
    }
    let e2 = this.inner[this.innerDone], t2 = e2.parse.advance();
    if (t2) {
      this.innerDone++;
      let r2 = Object.assign(/* @__PURE__ */ Object.create(null), e2.target.props);
      r2[x3.mounted.id] = new V3(t2, e2.overlay, e2.parser), e2.target.props = r2;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse) return 0;
    let e2 = this.input.length;
    for (let t2 = this.innerDone; t2 < this.inner.length; t2++) this.inner[t2].from < e2 && (e2 = Math.min(e2, this.inner[t2].parse.parsedPos));
    return e2;
  }
  stopAt(e2) {
    if (this.stoppedAt = e2, this.baseParse) this.baseParse.stopAt(e2);
    else for (let t2 = this.innerDone; t2 < this.inner.length; t2++) this.inner[t2].parse.stopAt(e2);
  }
  startInner() {
    let e2 = new de3(this.fragments), t2 = null, r2 = null, i3 = new q3(new P2(this.baseTree, this.ranges[0].from, 0, null), S3.IncludeAnonymous | S3.IgnoreMounts);
    e: for (let n6, l8; ; ) {
      let f2 = true, h3;
      if (this.stoppedAt != null && i3.from >= this.stoppedAt) f2 = false;
      else if (e2.hasNode(i3)) {
        if (t2) {
          let u4 = t2.mounts.find((o3) => o3.frag.from <= i3.from && o3.frag.to >= i3.to && o3.mount.overlay);
          if (u4) for (let o3 of u4.mount.overlay) {
            let c4 = o3.from + u4.pos, d3 = o3.to + u4.pos;
            c4 >= i3.from && d3 <= i3.to && !t2.ranges.some((y7) => y7.from < d3 && y7.to > c4) && t2.ranges.push({ from: c4, to: d3 });
          }
        }
        f2 = false;
      } else if (r2 && (l8 = Oe3(r2.ranges, i3.from, i3.to))) f2 = l8 != 2;
      else if (!i3.type.isAnonymous && (n6 = this.nest(i3, this.input)) && (i3.from < i3.to || !n6.overlay)) {
        i3.tree || (Te3(i3), t2 && t2.depth++, r2 && r2.depth++);
        let u4 = e2.findMounts(i3.from, n6.parser);
        if (typeof n6.overlay == "function") t2 = new ue3(n6.parser, n6.overlay, u4, this.inner.length, i3.from, i3.tree, t2);
        else {
          let o3 = _e2(this.ranges, n6.overlay || (i3.from < i3.to ? [new z3(i3.from, i3.to)] : []));
          o3.length && Ce3(o3), (o3.length || !n6.overlay) && this.inner.push(new ie3(n6.parser, o3.length ? n6.parser.startParse(this.input, Ie3(u4, o3), o3) : n6.parser.startParse(""), n6.overlay ? n6.overlay.map((c4) => new z3(c4.from - i3.from, c4.to - i3.from)) : null, i3.tree, o3.length ? o3[0].from : i3.from)), n6.overlay ? o3.length && (r2 = { ranges: o3, depth: 0, prev: r2 }) : f2 = false;
        }
      } else if (t2 && (h3 = t2.predicate(i3)) && (h3 === true && (h3 = new z3(i3.from, i3.to)), h3.from < h3.to)) {
        let u4 = t2.ranges.length - 1;
        u4 >= 0 && t2.ranges[u4].to == h3.from ? t2.ranges[u4] = { from: t2.ranges[u4].from, to: h3.to } : t2.ranges.push(h3);
      }
      if (f2 && i3.firstChild()) t2 && t2.depth++, r2 && r2.depth++;
      else for (; !i3.nextSibling(); ) {
        if (!i3.parent()) break e;
        if (t2 && !--t2.depth) {
          let u4 = _e2(this.ranges, t2.ranges);
          u4.length && (Ce3(u4), this.inner.splice(t2.index, 0, new ie3(t2.parser, t2.parser.startParse(this.input, Ie3(t2.mounts, u4), u4), t2.ranges.map((o3) => new z3(o3.from - t2.start, o3.to - t2.start)), t2.target, u4[0].from))), t2 = t2.prev;
        }
        r2 && !--r2.depth && (r2 = r2.prev);
      }
    }
  }
};
function Oe3(s58, e2, t2) {
  for (let r2 of s58) {
    if (r2.from >= t2) break;
    if (r2.to > e2) return r2.from <= e2 && r2.to >= t2 ? 2 : 1;
  }
  return 0;
}
function Se3(s58, e2, t2, r2, i3, n6) {
  if (e2 < t2) {
    let l8 = s58.buffer[e2 + 1];
    r2.push(s58.slice(e2, t2, l8)), i3.push(l8 - n6);
  }
}
function Te3(s58) {
  let { node: e2 } = s58, t2 = [], r2 = e2.context.buffer;
  do
    t2.push(s58.index), s58.parent();
  while (!s58.tree);
  let i3 = s58.tree, n6 = i3.children.indexOf(r2), l8 = i3.children[n6], f2 = l8.buffer, h3 = [n6];
  function u4(o3, c4, d3, y7, _4, B6) {
    let T7 = t2[B6], j6 = [], E6 = [];
    Se3(l8, o3, T7, j6, E6, y7);
    let I7 = f2[T7 + 1], R6 = f2[T7 + 2];
    h3.push(j6.length);
    let m7 = B6 ? u4(T7 + 4, f2[T7 + 3], l8.set.types[f2[T7]], I7, R6 - I7, B6 - 1) : e2.toTree();
    return j6.push(m7), E6.push(I7 - y7), Se3(l8, f2[T7 + 3], c4, j6, E6, y7), new O3(d3, j6, E6, _4);
  }
  i3.children[n6] = u4(0, f2.length, F3.none, 0, l8.length, t2.length - 1);
  for (let o3 of h3) {
    let c4 = s58.tree.children[o3], d3 = s58.tree.positions[o3];
    s58.yield(new P2(c4, d3 + s58.from, o3, s58._tree));
  }
}
var ne2 = class {
  constructor(e2, t2) {
    this.offset = t2, this.done = false, this.cursor = e2.cursor(S3.IncludeAnonymous | S3.IgnoreMounts);
  }
  moveTo(e2) {
    let { cursor: t2 } = this, r2 = e2 - this.offset;
    for (; !this.done && t2.from < r2; ) t2.to >= e2 && t2.enter(r2, 1, S3.IgnoreOverlays | S3.ExcludeBuffers) || t2.next(false) || (this.done = true);
  }
  hasNode(e2) {
    if (this.moveTo(e2.from), !this.done && this.cursor.from + this.offset == e2.from && this.cursor.tree) for (let t2 = this.cursor.tree; ; ) {
      if (t2 == e2.tree) return true;
      if (t2.children.length && t2.positions[0] == 0 && t2.children[0] instanceof O3) t2 = t2.children[0];
      else break;
    }
    return false;
  }
};
var de3 = class {
  constructor(e2) {
    var t2;
    if (this.fragments = e2, this.curTo = 0, this.fragI = 0, e2.length) {
      let r2 = this.curFrag = e2[0];
      this.curTo = (t2 = r2.tree.prop(ae3)) !== null && t2 !== void 0 ? t2 : r2.to, this.inner = new ne2(r2.tree, -r2.offset);
    } else this.curFrag = this.inner = null;
  }
  hasNode(e2) {
    for (; this.curFrag && e2.from >= this.curTo; ) this.nextFrag();
    return this.curFrag && this.curFrag.from <= e2.from && this.curTo >= e2.to && this.inner.hasNode(e2);
  }
  nextFrag() {
    var e2;
    if (this.fragI++, this.fragI == this.fragments.length) this.curFrag = this.inner = null;
    else {
      let t2 = this.curFrag = this.fragments[this.fragI];
      this.curTo = (e2 = t2.tree.prop(ae3)) !== null && e2 !== void 0 ? e2 : t2.to, this.inner = new ne2(t2.tree, -t2.offset);
    }
  }
  findMounts(e2, t2) {
    var r2;
    let i3 = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e2, 1);
      for (let n6 = this.inner.cursor.node; n6; n6 = n6.parent) {
        let l8 = (r2 = n6.tree) === null || r2 === void 0 ? void 0 : r2.prop(x3.mounted);
        if (l8 && l8.parser == t2) for (let f2 = this.fragI; f2 < this.fragments.length; f2++) {
          let h3 = this.fragments[f2];
          if (h3.from >= n6.to) break;
          h3.tree == this.curFrag.tree && i3.push({ frag: h3, pos: n6.from - h3.offset, mount: l8 });
        }
      }
    }
    return i3;
  }
};
function _e2(s58, e2) {
  let t2 = null, r2 = e2;
  for (let i3 = 1, n6 = 0; i3 < s58.length; i3++) {
    let l8 = s58[i3 - 1].to, f2 = s58[i3].from;
    for (; n6 < r2.length; n6++) {
      let h3 = r2[n6];
      if (h3.from >= f2) break;
      h3.to <= l8 || (t2 || (r2 = t2 = e2.slice()), h3.from < l8 ? (t2[n6] = new z3(h3.from, l8), h3.to > f2 && t2.splice(n6 + 1, 0, new z3(f2, h3.to))) : h3.to > f2 ? t2[n6--] = new z3(f2, h3.to) : t2.splice(n6--, 1));
    }
  }
  return r2;
}
function je3(s58, e2, t2, r2) {
  let i3 = 0, n6 = 0, l8 = false, f2 = false, h3 = -1e9, u4 = [];
  for (; ; ) {
    let o3 = i3 == s58.length ? 1e9 : l8 ? s58[i3].to : s58[i3].from, c4 = n6 == e2.length ? 1e9 : f2 ? e2[n6].to : e2[n6].from;
    if (l8 != f2) {
      let d3 = Math.max(h3, t2), y7 = Math.min(o3, c4, r2);
      d3 < y7 && u4.push(new z3(d3, y7));
    }
    if (h3 = Math.min(o3, c4), h3 == 1e9) break;
    o3 == h3 && (l8 ? (l8 = false, i3++) : l8 = true), c4 == h3 && (f2 ? (f2 = false, n6++) : f2 = true);
  }
  return u4;
}
function Ie3(s58, e2) {
  let t2 = [];
  for (let { pos: r2, mount: i3, frag: n6 } of s58) {
    let l8 = r2 + (i3.overlay ? i3.overlay[0].from : 0), f2 = l8 + i3.tree.length, h3 = Math.max(n6.from, l8), u4 = Math.min(n6.to, f2);
    if (i3.overlay) {
      let o3 = i3.overlay.map((d3) => new z3(d3.from + r2, d3.to + r2)), c4 = je3(e2, o3, h3, u4);
      for (let d3 = 0, y7 = h3; ; d3++) {
        let _4 = d3 == c4.length, B6 = _4 ? u4 : c4[d3].from;
        if (B6 > y7 && t2.push(new re2(y7, B6, i3.tree, -l8, n6.from >= y7 || n6.openStart, n6.to <= B6 || n6.openEnd)), _4) break;
        y7 = c4[d3].to;
      }
    } else t2.push(new re2(h3, u4, i3.tree, -l8, n6.from >= l8 || n6.openStart, n6.to <= f2 || n6.openEnd));
  }
  return t2;
}

// https://esm.sh/@lezer/highlight@1.2.2/denonext/highlight.mjs
var G4 = 0;
var m4 = class s55 {
  constructor(t2, a2, i3, n6) {
    this.name = t2, this.set = a2, this.base = i3, this.modified = n6, this.id = G4++;
  }
  toString() {
    let { name: t2 } = this;
    for (let a2 of this.modified) a2.name && (t2 = `${a2.name}(${t2})`);
    return t2;
  }
  static define(t2, a2) {
    let i3 = typeof t2 == "string" ? t2 : "?";
    if (t2 instanceof s55 && (a2 = t2), a2?.base) throw new Error("Can not derive from a modified tag");
    let n6 = new s55(i3, [], null, []);
    if (n6.set.push(n6), a2) for (let o3 of a2.set) n6.set.push(o3);
    return n6;
  }
  static defineModifier(t2) {
    let a2 = new E2(t2);
    return (i3) => i3.modified.indexOf(a2) > -1 ? i3 : E2.get(i3.base || i3, i3.modified.concat(a2).sort((n6, o3) => n6.id - o3.id));
  }
};
var L3 = 0;
var E2 = class s56 {
  constructor(t2) {
    this.name = t2, this.instances = [], this.id = L3++;
  }
  static get(t2, a2) {
    if (!a2.length) return t2;
    let i3 = a2[0].instances.find((r2) => r2.base == t2 && P3(a2, r2.modified));
    if (i3) return i3;
    let n6 = [], o3 = new m4(t2.name, n6, t2, a2);
    for (let r2 of a2) r2.instances.push(o3);
    let h3 = Q4(a2);
    for (let r2 of t2.set) if (!r2.modified.length) for (let d3 of h3) n6.push(s56.get(r2, d3));
    return o3;
  }
};
function P3(s58, t2) {
  return s58.length == t2.length && s58.every((a2, i3) => a2 == t2[i3]);
}
function Q4(s58) {
  let t2 = [[]];
  for (let a2 = 0; a2 < s58.length; a2++) for (let i3 = 0, n6 = t2.length; i3 < n6; i3++) t2.push(t2[i3].concat(s58[a2]));
  return t2.sort((a2, i3) => i3.length - a2.length);
}
function _3(s58) {
  let t2 = /* @__PURE__ */ Object.create(null);
  for (let a2 in s58) {
    let i3 = s58[a2];
    Array.isArray(i3) || (i3 = [i3]);
    for (let n6 of a2.split(" ")) if (n6) {
      let o3 = [], h3 = 2, r2 = n6;
      for (let g6 = 0; ; ) {
        if (r2 == "..." && g6 > 0 && g6 + 3 == n6.length) {
          h3 = 1;
          break;
        }
        let f2 = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r2);
        if (!f2) throw new RangeError("Invalid path: " + n6);
        if (o3.push(f2[0] == "*" ? "" : f2[0][0] == '"' ? JSON.parse(f2[0]) : f2[0]), g6 += f2[0].length, g6 == n6.length) break;
        let p2 = n6[g6++];
        if (g6 == n6.length && p2 == "!") {
          h3 = 0;
          break;
        }
        if (p2 != "/") throw new RangeError("Invalid path: " + n6);
        r2 = n6.slice(g6);
      }
      let d3 = o3.length - 1, c4 = o3[d3];
      if (!c4) throw new RangeError("Invalid path: " + n6);
      let b6 = new v2(i3, h3, d3 > 0 ? o3.slice(0, d3) : null);
      t2[c4] = b6.sort(t2[c4]);
    }
  }
  return z4.add(t2);
}
var z4 = new x3({ combine(s58, t2) {
  let a2, i3, n6;
  for (; s58 || t2; ) {
    !s58 || s58.depth > t2.depth ? (n6 = t2, t2 = t2.next) : (n6 = s58, s58 = s58.next);
    let o3 = new v2(n6.tags, n6.mode, n6.context);
    a2 ? a2.next = o3 : i3 = o3, a2 = o3;
  }
  return i3;
} });
var v2 = class {
  constructor(t2, a2, i3, n6) {
    this.tags = t2, this.mode = a2, this.context = i3, this.next = n6;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t2) {
    return !t2 || t2.depth < this.depth ? (this.next = t2, this) : (t2.next = this.sort(t2.next), t2);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
};
v2.empty = new v2([], 2, null);
function U3(s58, t2) {
  let a2 = /* @__PURE__ */ Object.create(null);
  for (let o3 of s58) if (!Array.isArray(o3.tag)) a2[o3.tag.id] = o3.class;
  else for (let h3 of o3.tag) a2[h3.id] = o3.class;
  let { scope: i3, all: n6 = null } = t2 || {};
  return { style: (o3) => {
    let h3 = n6;
    for (let r2 of o3) for (let d3 of r2.set) {
      let c4 = a2[d3.id];
      if (c4) {
        h3 = h3 ? h3 + " " + c4 : c4;
        break;
      }
    }
    return h3;
  }, scope: i3 };
}
function W4(s58, t2) {
  let a2 = null;
  for (let i3 of s58) {
    let n6 = i3.style(t2);
    n6 && (a2 = a2 ? a2 + " " + n6 : n6);
  }
  return a2;
}
function X3(s58, t2, a2, i3 = 0, n6 = s58.length) {
  let o3 = new B2(i3, Array.isArray(t2) ? t2 : [t2], a2);
  o3.highlightRange(s58.cursor(), i3, n6, "", o3.highlighters), o3.flush(n6);
}
var B2 = class {
  constructor(t2, a2, i3) {
    this.at = t2, this.highlighters = a2, this.span = i3, this.class = "";
  }
  startSpan(t2, a2) {
    a2 != this.class && (this.flush(t2), t2 > this.at && (this.at = t2), this.class = a2);
  }
  flush(t2) {
    t2 > this.at && this.class && this.span(this.at, t2, this.class);
  }
  highlightRange(t2, a2, i3, n6, o3) {
    let { type: h3, from: r2, to: d3 } = t2;
    if (r2 >= i3 || d3 <= a2) return;
    h3.isTop && (o3 = this.highlighters.filter((p2) => !p2.scope || p2.scope(h3)));
    let c4 = n6, b6 = Y3(t2) || v2.empty, g6 = W4(o3, b6.tags);
    if (g6 && (c4 && (c4 += " "), c4 += g6, b6.mode == 1 && (n6 += (n6 ? " " : "") + g6)), this.startSpan(Math.max(a2, r2), c4), b6.opaque) return;
    let f2 = t2.tree && t2.tree.prop(x3.mounted);
    if (f2 && f2.overlay) {
      let p2 = t2.node.enter(f2.overlay[0].from + r2, 1), R6 = this.highlighters.filter((M5) => !M5.scope || M5.scope(f2.tree.type)), H5 = t2.firstChild();
      for (let M5 = 0, S7 = r2; ; M5++) {
        let O4 = M5 < f2.overlay.length ? f2.overlay[M5] : null, K3 = O4 ? O4.from + r2 : d3, $5 = Math.max(a2, S7), T7 = Math.min(i3, K3);
        if ($5 < T7 && H5) for (; t2.from < T7 && (this.highlightRange(t2, $5, T7, n6, o3), this.startSpan(Math.min(T7, t2.to), c4), !(t2.to >= K3 || !t2.nextSibling())); ) ;
        if (!O4 || K3 > i3) break;
        S7 = O4.to + r2, S7 > a2 && (this.highlightRange(p2.cursor(), Math.max(a2, O4.from + r2), Math.min(i3, S7), "", R6), this.startSpan(Math.min(i3, S7), c4));
      }
      H5 && t2.parent();
    } else if (t2.firstChild()) {
      f2 && (n6 = "");
      do
        if (!(t2.to <= a2)) {
          if (t2.from >= i3) break;
          this.highlightRange(t2, a2, i3, n6, o3), this.startSpan(Math.min(i3, t2.to), c4);
        }
      while (t2.nextSibling());
      t2.parent();
    }
  }
};
function Y3(s58) {
  let t2 = s58.type.prop(z4);
  for (; t2 && t2.context && !s58.matchContext(t2.context); ) t2 = t2.next;
  return t2 || null;
}
var e = m4.define;
var C2 = e();
var x4 = e();
var F4 = e(x4);
var J3 = e(x4);
var N3 = e();
var I3 = e(N3);
var j3 = e(N3);
var y4 = e();
var w4 = e(y4);
var u2 = e();
var k3 = e();
var D3 = e();
var A3 = e(D3);
var q4 = e();
var l2 = { comment: C2, lineComment: e(C2), blockComment: e(C2), docComment: e(C2), name: x4, variableName: e(x4), typeName: F4, tagName: e(F4), propertyName: J3, attributeName: e(J3), className: e(x4), labelName: e(x4), namespace: e(x4), macroName: e(x4), literal: N3, string: I3, docString: e(I3), character: e(I3), attributeValue: e(I3), number: j3, integer: e(j3), float: e(j3), bool: e(N3), regexp: e(N3), escape: e(N3), color: e(N3), url: e(N3), keyword: u2, self: e(u2), null: e(u2), atom: e(u2), unit: e(u2), modifier: e(u2), operatorKeyword: e(u2), controlKeyword: e(u2), definitionKeyword: e(u2), moduleKeyword: e(u2), operator: k3, derefOperator: e(k3), arithmeticOperator: e(k3), logicOperator: e(k3), bitwiseOperator: e(k3), compareOperator: e(k3), updateOperator: e(k3), definitionOperator: e(k3), typeOperator: e(k3), controlOperator: e(k3), punctuation: D3, separator: e(D3), bracket: A3, angleBracket: e(A3), squareBracket: e(A3), paren: e(A3), brace: e(A3), content: y4, heading: w4, heading1: e(w4), heading2: e(w4), heading3: e(w4), heading4: e(w4), heading5: e(w4), heading6: e(w4), contentSeparator: e(y4), list: e(y4), quote: e(y4), emphasis: e(y4), strong: e(y4), link: e(y4), monospace: e(y4), strikethrough: e(y4), inserted: e(), deleted: e(), changed: e(), invalid: e(), meta: q4, documentMeta: e(q4), annotation: e(q4), processingInstruction: e(q4), definition: m4.defineModifier("definition"), constant: m4.defineModifier("constant"), function: m4.defineModifier("function"), standard: m4.defineModifier("standard"), local: m4.defineModifier("local"), special: m4.defineModifier("special") };
for (let s58 in l2) {
  let t2 = l2[s58];
  t2 instanceof m4 && (t2.name = s58);
}
var et3 = U3([{ tag: l2.link, class: "tok-link" }, { tag: l2.heading, class: "tok-heading" }, { tag: l2.emphasis, class: "tok-emphasis" }, { tag: l2.strong, class: "tok-strong" }, { tag: l2.keyword, class: "tok-keyword" }, { tag: l2.atom, class: "tok-atom" }, { tag: l2.bool, class: "tok-bool" }, { tag: l2.url, class: "tok-url" }, { tag: l2.labelName, class: "tok-labelName" }, { tag: l2.inserted, class: "tok-inserted" }, { tag: l2.deleted, class: "tok-deleted" }, { tag: l2.literal, class: "tok-literal" }, { tag: l2.string, class: "tok-string" }, { tag: l2.number, class: "tok-number" }, { tag: [l2.regexp, l2.escape, l2.special(l2.string)], class: "tok-string2" }, { tag: l2.variableName, class: "tok-variableName" }, { tag: l2.local(l2.variableName), class: "tok-variableName tok-local" }, { tag: l2.definition(l2.variableName), class: "tok-variableName tok-definition" }, { tag: l2.special(l2.variableName), class: "tok-variableName2" }, { tag: l2.definition(l2.propertyName), class: "tok-propertyName tok-definition" }, { tag: l2.typeName, class: "tok-typeName" }, { tag: l2.namespace, class: "tok-namespace" }, { tag: l2.className, class: "tok-className" }, { tag: l2.macroName, class: "tok-macroName" }, { tag: l2.propertyName, class: "tok-propertyName" }, { tag: l2.operator, class: "tok-operator" }, { tag: l2.comment, class: "tok-comment" }, { tag: l2.meta, class: "tok-meta" }, { tag: l2.invalid, class: "tok-invalid" }, { tag: l2.punctuation, class: "tok-punctuation" }]);

// https://esm.sh/@codemirror/language@6.11.3/denonext/language.mjs
var X4;
var S4 = new x3();
function Rt2(n6) {
  return k2.define({ combine: n6 ? (t2) => t2.concat(n6) : void 0 });
}
var de4 = new x3();
var d2 = class {
  constructor(t2, e2, r2 = [], i3 = "") {
    this.data = t2, this.name = i3, I.prototype.hasOwnProperty("tree") || Object.defineProperty(I.prototype, "tree", { get() {
      return k4(this);
    } }), this.parser = e2, this.extension = [x5.of(this), I.languageData.of((s58, o3, a2) => {
      let l8 = kt2(s58, o3, a2), h3 = l8.type.prop(S4);
      if (!h3) return [];
      let f2 = s58.facet(h3), c4 = l8.type.prop(de4);
      if (c4) {
        let w7 = l8.resolve(o3 - l8.from, a2);
        for (let b6 of c4) if (b6.test(w7, s58)) {
          let P5 = s58.facet(b6.facet);
          return b6.type == "replace" ? P5 : P5.concat(f2);
        }
      }
      return f2;
    })].concat(r2);
  }
  isActiveAt(t2, e2, r2 = -1) {
    return kt2(t2, e2, r2).type.prop(S4) == this.data;
  }
  findRegions(t2) {
    let e2 = t2.facet(x5);
    if (e2?.data == this.data) return [{ from: 0, to: t2.doc.length }];
    if (!e2 || !e2.allowsNesting) return [];
    let r2 = [], i3 = (s58, o3) => {
      if (s58.prop(S4) == this.data) {
        r2.push({ from: o3, to: o3 + s58.length });
        return;
      }
      let a2 = s58.prop(x3.mounted);
      if (a2) {
        if (a2.tree.prop(S4) == this.data) {
          if (a2.overlay) for (let l8 of a2.overlay) r2.push({ from: l8.from + o3, to: l8.to + o3 });
          else r2.push({ from: o3, to: o3 + s58.length });
          return;
        } else if (a2.overlay) {
          let l8 = r2.length;
          if (i3(a2.tree, a2.overlay[0].from + o3), r2.length > l8) return;
        }
      }
      for (let l8 = 0; l8 < s58.children.length; l8++) {
        let h3 = s58.children[l8];
        h3 instanceof O3 && i3(h3, s58.positions[l8] + o3);
      }
    };
    return i3(k4(t2), 0), r2;
  }
  get allowsNesting() {
    return true;
  }
};
d2.setState = v.define();
function kt2(n6, t2, e2) {
  let r2 = n6.facet(x5), i3 = k4(n6).topNode;
  if (!r2 || r2.allowsNesting) for (let s58 = i3; s58; s58 = s58.enter(t2, e2, S3.ExcludeBuffers)) s58.type.isTop && (i3 = s58);
  return i3;
}
var bt2 = class n2 extends d2 {
  constructor(t2, e2, r2) {
    super(t2, e2, [], r2), this.parser = e2;
  }
  static define(t2) {
    let e2 = Rt2(t2.languageData);
    return new n2(e2, t2.parser.configure({ props: [S4.add((r2) => r2.isTop ? e2 : void 0)] }), t2.name);
  }
  configure(t2, e2) {
    return new n2(this.data, this.parser.configure(t2), e2 || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
};
function k4(n6) {
  let t2 = n6.field(d2.state, false);
  return t2 ? t2.tree : O3.empty;
}
var tt = class {
  constructor(t2) {
    this.doc = t2, this.cursorPos = 0, this.string = "", this.cursor = t2.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t2) {
    return this.string = this.cursor.next(t2 - this.cursorPos).value, this.cursorPos = t2 + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t2) {
    return this.syncTo(t2), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(t2, e2) {
    let r2 = this.cursorPos - this.string.length;
    return t2 < r2 || e2 >= this.cursorPos ? this.doc.sliceString(t2, e2) : this.string.slice(t2 - r2, e2 - r2);
  }
};
var I4 = null;
var M2 = class n3 {
  constructor(t2, e2, r2 = [], i3, s58, o3, a2, l8) {
    this.parser = t2, this.state = e2, this.fragments = r2, this.tree = i3, this.treeLen = s58, this.viewport = o3, this.skipped = a2, this.scheduleOn = l8, this.parse = null, this.tempSkipped = [];
  }
  static create(t2, e2, r2) {
    return new n3(t2, e2, [], O3.empty, 0, r2, [], null);
  }
  startParse() {
    return this.parser.startParse(new tt(this.state.doc), this.fragments);
  }
  work(t2, e2) {
    return e2 != null && e2 >= this.state.doc.length && (e2 = void 0), this.tree != O3.empty && this.isDone(e2 ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      var r2;
      if (typeof t2 == "number") {
        let i3 = Date.now() + t2;
        t2 = () => Date.now() > i3;
      }
      for (this.parse || (this.parse = this.startParse()), e2 != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e2) && e2 < this.state.doc.length && this.parse.stopAt(e2); ; ) {
        let i3 = this.parse.advance();
        if (i3) if (this.fragments = this.withoutTempSkipped(re2.addTree(i3, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (r2 = this.parse.stoppedAt) !== null && r2 !== void 0 ? r2 : this.state.doc.length, this.tree = i3, this.parse = null, this.treeLen < (e2 ?? this.state.doc.length)) this.parse = this.startParse();
        else return true;
        if (t2()) return false;
      }
    });
  }
  takeTree() {
    let t2, e2;
    this.parse && (t2 = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t2) && this.parse.stopAt(t2), this.withContext(() => {
      for (; !(e2 = this.parse.advance()); ) ;
    }), this.treeLen = t2, this.tree = e2, this.fragments = this.withoutTempSkipped(re2.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(t2) {
    let e2 = I4;
    I4 = this;
    try {
      return t2();
    } finally {
      I4 = e2;
    }
  }
  withoutTempSkipped(t2) {
    for (let e2; e2 = this.tempSkipped.pop(); ) t2 = wt(t2, e2.from, e2.to);
    return t2;
  }
  changes(t2, e2) {
    let { fragments: r2, tree: i3, treeLen: s58, viewport: o3, skipped: a2 } = this;
    if (this.takeTree(), !t2.empty) {
      let l8 = [];
      if (t2.iterChangedRanges((h3, f2, c4, w7) => l8.push({ fromA: h3, toA: f2, fromB: c4, toB: w7 })), r2 = re2.applyChanges(r2, l8), i3 = O3.empty, s58 = 0, o3 = { from: t2.mapPos(o3.from, -1), to: t2.mapPos(o3.to, 1) }, this.skipped.length) {
        a2 = [];
        for (let h3 of this.skipped) {
          let f2 = t2.mapPos(h3.from, 1), c4 = t2.mapPos(h3.to, -1);
          f2 < c4 && a2.push({ from: f2, to: c4 });
        }
      }
    }
    return new n3(this.parser, e2, r2, i3, s58, o3, a2, this.scheduleOn);
  }
  updateViewport(t2) {
    if (this.viewport.from == t2.from && this.viewport.to == t2.to) return false;
    this.viewport = t2;
    let e2 = this.skipped.length;
    for (let r2 = 0; r2 < this.skipped.length; r2++) {
      let { from: i3, to: s58 } = this.skipped[r2];
      i3 < t2.to && s58 > t2.from && (this.fragments = wt(this.fragments, i3, s58), this.skipped.splice(r2--, 1));
    }
    return this.skipped.length >= e2 ? false : (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(t2, e2) {
    this.skipped.push({ from: t2, to: e2 });
  }
  static getSkippingParser(t2) {
    return new class extends Ae3 {
      createParse(e2, r2, i3) {
        let s58 = i3[0].from, o3 = i3[i3.length - 1].to;
        return { parsedPos: s58, advance() {
          let l8 = I4;
          if (l8) {
            for (let h3 of i3) l8.tempSkipped.push(h3);
            t2 && (l8.scheduleOn = l8.scheduleOn ? Promise.all([l8.scheduleOn, t2]) : t2);
          }
          return this.parsedPos = o3, new O3(F3.none, [], [], o3 - s58);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(t2) {
    t2 = Math.min(t2, this.state.doc.length);
    let e2 = this.fragments;
    return this.treeLen >= t2 && e2.length && e2[0].from == 0 && e2[0].to >= t2;
  }
  static get() {
    return I4;
  }
};
function wt(n6, t2, e2) {
  return re2.applyChanges(n6, [{ fromA: t2, toA: e2, fromB: t2, toB: e2 }]);
}
var B3 = class n4 {
  constructor(t2) {
    this.context = t2, this.tree = t2.tree;
  }
  apply(t2) {
    if (!t2.docChanged && this.tree == this.context.tree) return this;
    let e2 = this.context.changes(t2.changes, t2.state), r2 = this.context.treeLen == t2.startState.doc.length ? void 0 : Math.max(t2.changes.mapPos(this.context.treeLen), e2.viewport.to);
    return e2.work(20, r2) || e2.takeTree(), new n4(e2);
  }
  static init(t2) {
    let e2 = Math.min(3e3, t2.doc.length), r2 = M2.create(t2.facet(x5).parser, t2, { from: 0, to: e2 });
    return r2.work(20, e2) || r2.takeTree(), new n4(r2);
  }
};
d2.state = q.define({ create: B3.init, update(n6, t2) {
  for (let e2 of t2.effects) if (e2.is(d2.setState)) return e2.value;
  return t2.startState.facet(x5) != t2.state.facet(x5) ? B3.init(t2.state) : n6.apply(t2);
} });
var Et = (n6) => {
  let t2 = setTimeout(() => n6(), 500);
  return () => clearTimeout(t2);
};
typeof requestIdleCallback < "u" && (Et = (n6) => {
  let t2 = -1, e2 = setTimeout(() => {
    t2 = requestIdleCallback(n6, { timeout: 400 });
  }, 100);
  return () => t2 < 0 ? clearTimeout(e2) : cancelIdleCallback(t2);
});
var Y4 = typeof navigator < "u" && (!((X4 = navigator.scheduling) === null || X4 === void 0) && X4.isInputPending) ? () => navigator.scheduling.isInputPending() : null;
var Ft2 = N2.fromClass(class {
  constructor(t2) {
    this.view = t2, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t2) {
    let e2 = this.view.state.field(d2.state).context;
    (e2.updateViewport(t2.view.viewport) || this.view.viewport.to > e2.treeLen) && this.scheduleWork(), (t2.docChanged || t2.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e2);
  }
  scheduleWork() {
    if (this.working) return;
    let { state: t2 } = this.view, e2 = t2.field(d2.state);
    (e2.tree != e2.context.tree || !e2.context.isDone(t2.doc.length)) && (this.working = Et(this.work));
  }
  work(t2) {
    this.working = null;
    let e2 = Date.now();
    if (this.chunkEnd < e2 && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e2 + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let { state: r2, viewport: { to: i3 } } = this.view, s58 = r2.field(d2.state);
    if (s58.tree == s58.context.tree && s58.context.isDone(i3 + 1e5)) return;
    let o3 = Date.now() + Math.min(this.chunkBudget, 100, t2 && !Y4 ? Math.max(25, t2.timeRemaining() - 5) : 1e9), a2 = s58.context.treeLen < i3 && r2.doc.length > i3 + 1e3, l8 = s58.context.work(() => Y4 && Y4() || Date.now() > o3, i3 + (a2 ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e2, (l8 || this.chunkBudget <= 0) && (s58.context.takeTree(), this.view.dispatch({ effects: d2.setState.of(new B3(s58.context)) })), this.chunkBudget > 0 && !(l8 && !a2) && this.scheduleWork(), this.checkAsyncSchedule(s58.context);
  }
  checkAsyncSchedule(t2) {
    t2.scheduleOn && (this.workScheduled++, t2.scheduleOn.then(() => this.scheduleWork()).catch((e2) => G2(this.view.state, e2)).then(() => this.workScheduled--), t2.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } });
var x5 = k2.define({ combine(n6) {
  return n6.length ? n6[0] : null;
}, enables: (n6) => [d2.state, Ft2, A2.contentAttributes.compute([n6], (t2) => {
  let e2 = t2.facet(n6);
  return e2 && e2.name ? { "data-language": e2.name } : {};
})] });
var yt2 = class {
  constructor(t2, e2 = []) {
    this.language = t2, this.support = e2, this.extension = [t2, e2];
  }
};
var me3 = k2.define();
var Ut2 = k2.define({ combine: (n6) => {
  if (!n6.length) return "  ";
  let t2 = n6[0];
  if (!t2 || /\S/.test(t2) || Array.from(t2).some((e2) => e2 != t2[0])) throw new Error("Invalid indent unit: " + JSON.stringify(n6[0]));
  return t2;
} });
var Vt = new x3();
function ve4(n6) {
  let t2 = n6.node, e2 = t2.childAfter(t2.from), r2 = t2.lastChild;
  if (!e2) return null;
  let i3 = n6.options.simulateBreak, s58 = n6.state.doc.lineAt(e2.from), o3 = i3 == null || i3 <= s58.from ? s58.to : Math.min(s58.to, i3);
  for (let a2 = e2.to; ; ) {
    let l8 = t2.childAfter(a2);
    if (!l8 || l8 == r2) return null;
    if (!l8.type.isSkipped) {
      if (l8.from >= o3) return null;
      let h3 = /^ */.exec(s58.text.slice(e2.to - s58.from))[0].length;
      return { from: e2.from, to: e2.to + h3 };
    }
    a2 = l8.to;
  }
}
function dn2({ closing: n6, align: t2 = true, units: e2 = 1 }) {
  return (r2) => jt2(r2, t2, e2, n6);
}
function jt2(n6, t2, e2, r2, i3) {
  let s58 = n6.textAfter, o3 = s58.match(/^\s*/)[0].length, a2 = r2 && s58.slice(o3, o3 + r2.length) == r2 || i3 == n6.pos + o3, l8 = t2 ? ve4(n6) : null;
  return l8 ? a2 ? n6.column(l8.from) : n6.column(l8.to) : n6.baseIndent + (a2 ? 0 : n6.unit * e2);
}
var Te4 = k2.define();
var Se4 = new x3();
function kn2(n6) {
  let t2 = n6.firstChild, e2 = n6.lastChild;
  return t2 && t2.to < e2.from ? { from: t2.to, to: e2.type.isError ? n6.to : e2.from } : null;
}
function zt2(n6, t2) {
  let e2 = t2.mapPos(n6.from, 1), r2 = t2.mapPos(n6.to, -1);
  return e2 >= r2 ? void 0 : { from: e2, to: r2 };
}
var F5 = v.define({ map: zt2 });
var C3 = v.define({ map: zt2 });
var T4 = q.define({ create() {
  return T3.none;
}, update(n6, t2) {
  t2.isUserEvent("delete") && t2.changes.iterChangedRanges((e2, r2) => n6 = xt(n6, e2, r2)), n6 = n6.map(t2.changes);
  for (let e2 of t2.effects) if (e2.is(F5) && !Ce4(n6, e2.value.from, e2.value.to)) {
    let { preparePlaceholder: r2 } = t2.state.facet(dt), i3 = r2 ? T3.replace({ widget: new nt2(r2(t2.state, e2.value)) }) : Tt2;
    n6 = n6.update({ add: [i3.range(e2.value.from, e2.value.to)] });
  } else e2.is(C3) && (n6 = n6.update({ filter: (r2, i3) => e2.value.from != r2 || e2.value.to != i3, filterFrom: e2.value.from, filterTo: e2.value.to }));
  return t2.selection && (n6 = xt(n6, t2.selection.main.head)), n6;
}, provide: (n6) => A2.decorations.from(n6), toJSON(n6, t2) {
  let e2 = [];
  return n6.between(0, t2.doc.length, (r2, i3) => {
    e2.push(r2, i3);
  }), e2;
}, fromJSON(n6) {
  if (!Array.isArray(n6) || n6.length % 2) throw new RangeError("Invalid JSON for fold state");
  let t2 = [];
  for (let e2 = 0; e2 < n6.length; ) {
    let r2 = n6[e2++], i3 = n6[e2++];
    if (typeof r2 != "number" || typeof i3 != "number") throw new RangeError("Invalid JSON for fold state");
    t2.push(Tt2.range(r2, i3));
  }
  return T3.set(t2, true);
} });
function xt(n6, t2, e2 = t2) {
  let r2 = false;
  return n6.between(t2, e2, (i3, s58) => {
    i3 < e2 && s58 > t2 && (r2 = true);
  }), r2 ? n6.update({ filterFrom: t2, filterTo: e2, filter: (i3, s58) => i3 >= e2 || s58 <= t2 }) : n6;
}
function R3(n6, t2, e2) {
  var r2;
  let i3 = null;
  return (r2 = n6.field(T4, false)) === null || r2 === void 0 || r2.between(t2, e2, (s58, o3) => {
    (!i3 || i3.from > s58) && (i3 = { from: s58, to: o3 });
  }), i3;
}
function Ce4(n6, t2, e2) {
  let r2 = false;
  return n6.between(t2, t2, (i3, s58) => {
    i3 == t2 && s58 == e2 && (r2 = true);
  }), r2;
}
var Ne4 = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "…" };
var dt = k2.define({ combine(n6) {
  return st(n6, Ne4);
} });
function Gt2(n6, t2) {
  let { state: e2 } = n6, r2 = e2.facet(dt), i3 = (o3) => {
    let a2 = n6.lineBlockAt(n6.posAtDOM(o3.target)), l8 = R3(n6.state, a2.from, a2.to);
    l8 && n6.dispatch({ effects: C3.of(l8) }), o3.preventDefault();
  };
  if (r2.placeholderDOM) return r2.placeholderDOM(n6, i3, t2);
  let s58 = document.createElement("span");
  return s58.textContent = r2.placeholderText, s58.setAttribute("aria-label", e2.phrase("folded code")), s58.title = e2.phrase("unfold"), s58.className = "cm-foldPlaceholder", s58.onclick = i3, s58;
}
var Tt2 = T3.replace({ widget: new class extends ht {
  toDOM(n6) {
    return Gt2(n6, null);
  }
}() });
var nt2 = class extends ht {
  constructor(t2) {
    super(), this.value = t2;
  }
  eq(t2) {
    return this.value == t2.value;
  }
  toDOM(t2) {
    return Gt2(t2, this.value);
  }
};
var Re3 = A2.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
var z5 = class n5 {
  constructor(t2, e2) {
    this.specs = t2;
    let r2;
    function i3(a2) {
      let l8 = T2.newName();
      return (r2 || (r2 = /* @__PURE__ */ Object.create(null)))["." + l8] = a2, l8;
    }
    let s58 = typeof e2.all == "string" ? e2.all : e2.all ? i3(e2.all) : void 0, o3 = e2.scope;
    this.scope = o3 instanceof d2 ? (a2) => a2.prop(S4) == o3.data : o3 ? (a2) => a2 == o3 : void 0, this.style = U3(t2.map((a2) => ({ tag: a2.tag, class: a2.class || i3(Object.assign({}, a2, { tag: null })) })), { all: s58 }).style, this.module = r2 ? new T2(r2) : null, this.themeType = e2.themeType;
  }
  static define(t2, e2) {
    return new n5(t2, e2 || {});
  }
};
var rt3 = k2.define();
var Jt2 = k2.define({ combine(n6) {
  return n6.length ? [n6[0]] : null;
} });
function H2(n6) {
  let t2 = n6.facet(rt3);
  return t2.length ? t2 : n6.facet(Jt2);
}
var it2 = class {
  constructor(t2) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = k4(t2.state), this.decorations = this.buildDeco(t2, H2(t2.state)), this.decoratedTo = t2.viewport.to;
  }
  update(t2) {
    let e2 = k4(t2.state), r2 = H2(t2.state), i3 = r2 != H2(t2.startState), { viewport: s58 } = t2.view, o3 = t2.changes.mapPos(this.decoratedTo, 1);
    e2.length < s58.to && !i3 && e2.type == this.tree.type && o3 >= s58.to ? (this.decorations = this.decorations.map(t2.changes), this.decoratedTo = o3) : (e2 != this.tree || t2.viewportChanged || i3) && (this.tree = e2, this.decorations = this.buildDeco(t2.view, r2), this.decoratedTo = s58.to);
  }
  buildDeco(t2, e2) {
    if (!e2 || !this.tree.length) return T3.none;
    let r2 = new re();
    for (let { from: i3, to: s58 } of t2.visibleRanges) X3(this.tree, e2, (o3, a2, l8) => {
      r2.add(o3, a2, this.markCache[l8] || (this.markCache[l8] = T3.mark({ class: l8 })));
    }, i3, s58);
    return r2.finish();
  }
};
var Ee4 = it.high(N2.fromClass(it2, { decorations: (n6) => n6.decorations }));
var Sn2 = z5.define([{ tag: l2.meta, color: "#404740" }, { tag: l2.link, textDecoration: "underline" }, { tag: l2.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: l2.emphasis, fontStyle: "italic" }, { tag: l2.strong, fontWeight: "bold" }, { tag: l2.strikethrough, textDecoration: "line-through" }, { tag: l2.keyword, color: "#708" }, { tag: [l2.atom, l2.bool, l2.url, l2.contentSeparator, l2.labelName], color: "#219" }, { tag: [l2.literal, l2.inserted], color: "#164" }, { tag: [l2.string, l2.deleted], color: "#a11" }, { tag: [l2.regexp, l2.escape, l2.special(l2.string)], color: "#e40" }, { tag: l2.definition(l2.variableName), color: "#00f" }, { tag: l2.local(l2.variableName), color: "#30a" }, { tag: [l2.typeName, l2.namespace], color: "#085" }, { tag: l2.className, color: "#167" }, { tag: [l2.special(l2.variableName), l2.macroName], color: "#256" }, { tag: l2.definition(l2.propertyName), color: "#00c" }, { tag: l2.comment, color: "#940" }, { tag: l2.invalid, color: "#f00" }]);
var Fe4 = A2.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } });
var _t2 = 1e4;
var Kt2 = "()[]{}";
var Qt2 = k2.define({ combine(n6) {
  return st(n6, { afterCursor: true, brackets: Kt2, maxScanDistance: _t2, renderMatch: He3 });
} });
var Ue2 = T3.mark({ class: "cm-matchingBracket" });
var We3 = T3.mark({ class: "cm-nonmatchingBracket" });
function He3(n6) {
  let t2 = [], e2 = n6.matched ? Ue2 : We3;
  return t2.push(e2.range(n6.start.from, n6.start.to)), n6.end && t2.push(e2.range(n6.end.from, n6.end.to)), t2;
}
var Ve2 = q.define({ create() {
  return T3.none;
}, update(n6, t2) {
  if (!t2.docChanged && !t2.selection) return n6;
  let e2 = [], r2 = t2.state.facet(Qt2);
  for (let i3 of t2.state.selection.ranges) {
    if (!i3.empty) continue;
    let s58 = U4(t2.state, i3.head, -1, r2) || i3.head > 0 && U4(t2.state, i3.head - 1, 1, r2) || r2.afterCursor && (U4(t2.state, i3.head, 1, r2) || i3.head < t2.state.doc.length && U4(t2.state, i3.head + 1, -1, r2));
    s58 && (e2 = e2.concat(r2.renderMatch(s58, t2.state)));
  }
  return T3.set(e2, true);
}, provide: (n6) => A2.decorations.from(n6) });
var je4 = new x3();
function st2(n6, t2, e2) {
  let r2 = n6.prop(t2 < 0 ? x3.openedBy : x3.closedBy);
  if (r2) return r2;
  if (n6.name.length == 1) {
    let i3 = e2.indexOf(n6.name);
    if (i3 > -1 && i3 % 2 == (t2 < 0 ? 1 : 0)) return [e2[i3 + t2]];
  }
  return null;
}
function ot2(n6) {
  let t2 = n6.type.prop(je4);
  return t2 ? t2(n6.node) : n6;
}
function U4(n6, t2, e2, r2 = {}) {
  let i3 = r2.maxScanDistance || _t2, s58 = r2.brackets || Kt2, o3 = k4(n6), a2 = o3.resolveInner(t2, e2);
  for (let l8 = a2; l8; l8 = l8.parent) {
    let h3 = st2(l8.type, e2, s58);
    if (h3 && l8.from < l8.to) {
      let f2 = ot2(l8);
      if (f2 && (e2 > 0 ? t2 >= f2.from && t2 < f2.to : t2 > f2.from && t2 <= f2.to)) return ze4(n6, t2, e2, l8, f2, h3, s58);
    }
  }
  return qe3(n6, t2, e2, o3, a2.type, i3, s58);
}
function ze4(n6, t2, e2, r2, i3, s58, o3) {
  let a2 = r2.parent, l8 = { from: i3.from, to: i3.to }, h3 = 0, f2 = a2?.cursor();
  if (f2 && (e2 < 0 ? f2.childBefore(r2.from) : f2.childAfter(r2.to))) do
    if (e2 < 0 ? f2.to <= r2.from : f2.from >= r2.to) {
      if (h3 == 0 && s58.indexOf(f2.type.name) > -1 && f2.from < f2.to) {
        let c4 = ot2(f2);
        return { start: l8, end: c4 ? { from: c4.from, to: c4.to } : void 0, matched: true };
      } else if (st2(f2.type, e2, o3)) h3++;
      else if (st2(f2.type, -e2, o3)) {
        if (h3 == 0) {
          let c4 = ot2(f2);
          return { start: l8, end: c4 && c4.from < c4.to ? { from: c4.from, to: c4.to } : void 0, matched: false };
        }
        h3--;
      }
    }
  while (e2 < 0 ? f2.prevSibling() : f2.nextSibling());
  return { start: l8, matched: false };
}
function qe3(n6, t2, e2, r2, i3, s58, o3) {
  let a2 = e2 < 0 ? n6.sliceDoc(t2 - 1, t2) : n6.sliceDoc(t2, t2 + 1), l8 = o3.indexOf(a2);
  if (l8 < 0 || l8 % 2 == 0 != e2 > 0) return null;
  let h3 = { from: e2 < 0 ? t2 - 1 : t2, to: e2 > 0 ? t2 + 1 : t2 }, f2 = n6.doc.iterRange(t2, e2 > 0 ? n6.doc.length : 0), c4 = 0;
  for (let w7 = 0; !f2.next().done && w7 <= s58; ) {
    let b6 = f2.value;
    e2 < 0 && (w7 += b6.length);
    let P5 = t2 + w7 * e2;
    for (let A6 = e2 > 0 ? 0 : b6.length - 1, re3 = e2 > 0 ? b6.length : -1; A6 != re3; A6 += e2) {
      let Q5 = o3.indexOf(b6[A6]);
      if (!(Q5 < 0 || r2.resolveInner(P5 + A6, 1).type != i3)) if (Q5 % 2 == 0 == e2 > 0) c4++;
      else {
        if (c4 == 1) return { start: h3, end: { from: P5 + A6, to: P5 + A6 + 1 }, matched: Q5 >> 1 == l8 >> 1 };
        c4--;
      }
    }
    e2 > 0 && (w7 += b6.length);
  }
  return f2.done ? { start: h3, matched: false } : null;
}
var mt2 = /* @__PURE__ */ Object.create(null);
var E3 = [F3.none];
var Ke3 = new be3(E3);
var Ct2 = [];
var It2 = /* @__PURE__ */ Object.create(null);
var Zt2 = /* @__PURE__ */ Object.create(null);
for (let [n6, t2] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) Zt2[n6] = te4(mt2, t2);
var G5 = class {
  constructor(t2) {
    this.extra = t2, this.table = Object.assign(/* @__PURE__ */ Object.create(null), Zt2);
  }
  resolve(t2) {
    return t2 ? this.table[t2] || (this.table[t2] = te4(this.extra, t2)) : 0;
  }
};
var Qe3 = new G5(mt2);
function Z3(n6, t2) {
  Ct2.indexOf(n6) > -1 || (Ct2.push(n6), console.warn(t2));
}
function te4(n6, t2) {
  let e2 = [];
  for (let a2 of t2.split(" ")) {
    let l8 = [];
    for (let h3 of a2.split(".")) {
      let f2 = n6[h3] || l2[h3];
      f2 ? typeof f2 == "function" ? l8.length ? l8 = l8.map(f2) : Z3(h3, `Modifier ${h3} used at start of tag`) : l8.length ? Z3(h3, `Tag ${h3} used as modifier`) : l8 = Array.isArray(f2) ? f2 : [f2] : Z3(h3, `Unknown highlighting tag ${h3}`);
    }
    for (let h3 of l8) e2.push(h3);
  }
  if (!e2.length) return 0;
  let r2 = t2.replace(/ /g, "_"), i3 = r2 + " " + e2.map((a2) => a2.id), s58 = It2[i3];
  if (s58) return s58.id;
  let o3 = It2[i3] = F3.define({ id: E3.length, name: r2, props: [_3({ [r2]: e2 })] });
  return E3.push(o3), o3.id;
}
function ee4(n6) {
  return n6.length <= 4096 && /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/.test(n6);
}
function ne3(n6) {
  for (let t2 = n6.iter(); !t2.next().done; ) if (ee4(t2.value)) return true;
  return false;
}
function Ye3(n6) {
  let t2 = false;
  return n6.iterChanges((e2, r2, i3, s58, o3) => {
    !t2 && ne3(o3) && (t2 = true);
  }), t2;
}
var at2 = k2.define({ combine: (n6) => n6.some((t2) => t2) });
var Ze3 = N2.fromClass(class {
  constructor(n6) {
    this.always = n6.state.facet(at2) || n6.textDirection != L2.LTR || n6.state.facet(A2.perLineTextDirection), this.hasRTL = !this.always && ne3(n6.state.doc), this.tree = k4(n6.state), this.decorations = this.always || this.hasRTL ? Dt2(n6, this.tree, this.always) : T3.none;
  }
  update(n6) {
    let t2 = n6.state.facet(at2) || n6.view.textDirection != L2.LTR || n6.state.facet(A2.perLineTextDirection);
    if (!t2 && !this.hasRTL && Ye3(n6.changes) && (this.hasRTL = true), !t2 && !this.hasRTL) return;
    let e2 = k4(n6.state);
    (t2 != this.always || e2 != this.tree || n6.docChanged || n6.viewportChanged) && (this.tree = e2, this.always = t2, this.decorations = Dt2(n6.view, e2, t2));
  }
}, { provide: (n6) => {
  function t2(e2) {
    var r2, i3;
    return (i3 = (r2 = e2.plugin(n6)) === null || r2 === void 0 ? void 0 : r2.decorations) !== null && i3 !== void 0 ? i3 : T3.none;
  }
  return [A2.outerDecorations.of(t2), it.lowest(A2.bidiIsolatedRanges.of(t2))];
} });
function Dt2(n6, t2, e2) {
  let r2 = new re(), i3 = n6.visibleRanges;
  e2 || (i3 = tn2(i3, n6.state.doc));
  for (let { from: s58, to: o3 } of i3) t2.iterate({ enter: (a2) => {
    let l8 = a2.type.prop(x3.isolate);
    l8 && r2.add(a2.from, a2.to, en2[l8]);
  }, from: s58, to: o3 });
  return r2.finish();
}
function tn2(n6, t2) {
  let e2 = t2.iter(), r2 = 0, i3 = [], s58 = null;
  for (let { from: o3, to: a2 } of n6) if (!(s58 && s58.to > o3 && (o3 = s58.to, o3 >= a2))) for (r2 + e2.value.length < o3 && (e2.next(o3 - (r2 + e2.value.length)), r2 = o3); ; ) {
    let l8 = r2, h3 = r2 + e2.value.length;
    if (!e2.lineBreak && ee4(e2.value) && (s58 && s58.to > l8 - 10 ? s58.to = Math.min(a2, h3) : i3.push(s58 = { from: l8, to: Math.min(a2, h3) })), h3 >= a2) break;
    r2 = h3, e2.next();
  }
  return i3;
}
var en2 = { rtl: T3.mark({ class: "cm-iso", inclusive: true, attributes: { dir: "rtl" }, bidiIsolate: L2.RTL }), ltr: T3.mark({ class: "cm-iso", inclusive: true, attributes: { dir: "ltr" }, bidiIsolate: L2.LTR }), auto: T3.mark({ class: "cm-iso", inclusive: true, attributes: { dir: "auto" }, bidiIsolate: null }) };

// https://esm.sh/@lezer/lr@1.4.2/denonext/lr.mjs
import __Process$ from "node:process";
var y5 = class l3 {
  constructor(t2, e2, s58, i3, h3, r2, n6, o3, a2, u4 = 0, f2) {
    this.p = t2, this.stack = e2, this.state = s58, this.reducePos = i3, this.pos = h3, this.score = r2, this.buffer = n6, this.bufferBase = o3, this.curContext = a2, this.lookAhead = u4, this.parent = f2;
  }
  toString() {
    return `[${this.stack.filter((t2, e2) => e2 % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(t2, e2, s58 = 0) {
    let i3 = t2.parser.context;
    return new l3(t2, [], e2, s58, s58, 0, [], 0, i3 ? new P4(i3, i3.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(t2, e2) {
    this.stack.push(this.state, e2, this.bufferBase + this.buffer.length), this.state = t2;
  }
  reduce(t2) {
    var e2;
    let s58 = t2 >> 19, i3 = t2 & 65535, { parser: h3 } = this.p, r2 = this.reducePos < this.pos - 25;
    r2 && this.setLookAhead(this.pos);
    let n6 = h3.dynamicPrecedence(i3);
    if (n6 && (this.score += n6), s58 == 0) {
      this.pushState(h3.getGoto(this.state, i3, true), this.reducePos), i3 < h3.minRepeatTerm && this.storeNode(i3, this.reducePos, this.reducePos, r2 ? 8 : 4, true), this.reduceContext(i3, this.reducePos);
      return;
    }
    let o3 = this.stack.length - (s58 - 1) * 3 - (t2 & 262144 ? 6 : 0), a2 = o3 ? this.stack[o3 - 2] : this.p.ranges[0].from, u4 = this.reducePos - a2;
    u4 >= 2e3 && !(!((e2 = this.p.parser.nodeSet.types[i3]) === null || e2 === void 0) && e2.isAnonymous) && (a2 == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = u4) : this.p.lastBigReductionSize < u4 && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = a2, this.p.lastBigReductionSize = u4));
    let f2 = o3 ? this.stack[o3 - 1] : 0, p2 = this.bufferBase + this.buffer.length - f2;
    if (i3 < h3.minRepeatTerm || t2 & 131072) {
      let c4 = h3.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(i3, a2, c4, p2 + 4, true);
    }
    if (t2 & 262144) this.state = this.stack[o3];
    else {
      let c4 = this.stack[o3 - 3];
      this.state = h3.getGoto(c4, i3, true);
    }
    for (; this.stack.length > o3; ) this.stack.pop();
    this.reduceContext(i3, a2);
  }
  storeNode(t2, e2, s58, i3 = 4, h3 = false) {
    if (t2 == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let r2 = this, n6 = this.buffer.length;
      if (n6 == 0 && r2.parent && (n6 = r2.bufferBase - r2.parent.bufferBase, r2 = r2.parent), n6 > 0 && r2.buffer[n6 - 4] == 0 && r2.buffer[n6 - 1] > -1) {
        if (e2 == s58) return;
        if (r2.buffer[n6 - 2] >= e2) {
          r2.buffer[n6 - 2] = s58;
          return;
        }
      }
    }
    if (!h3 || this.pos == s58) this.buffer.push(t2, e2, s58, i3);
    else {
      let r2 = this.buffer.length;
      if (r2 > 0 && this.buffer[r2 - 4] != 0) {
        let n6 = false;
        for (let o3 = r2; o3 > 0 && this.buffer[o3 - 2] > s58; o3 -= 4) if (this.buffer[o3 - 1] >= 0) {
          n6 = true;
          break;
        }
        if (n6) for (; r2 > 0 && this.buffer[r2 - 2] > s58; ) this.buffer[r2] = this.buffer[r2 - 4], this.buffer[r2 + 1] = this.buffer[r2 - 3], this.buffer[r2 + 2] = this.buffer[r2 - 2], this.buffer[r2 + 3] = this.buffer[r2 - 1], r2 -= 4, i3 > 4 && (i3 -= 4);
      }
      this.buffer[r2] = t2, this.buffer[r2 + 1] = e2, this.buffer[r2 + 2] = s58, this.buffer[r2 + 3] = i3;
    }
  }
  shift(t2, e2, s58, i3) {
    if (t2 & 131072) this.pushState(t2 & 65535, this.pos);
    else if (t2 & 262144) this.pos = i3, this.shiftContext(e2, s58), e2 <= this.p.parser.maxNode && this.buffer.push(e2, s58, i3, 4);
    else {
      let h3 = t2, { parser: r2 } = this.p;
      (i3 > this.pos || e2 <= r2.maxNode) && (this.pos = i3, r2.stateFlag(h3, 1) || (this.reducePos = i3)), this.pushState(h3, s58), this.shiftContext(e2, s58), e2 <= r2.maxNode && this.buffer.push(e2, s58, i3, 4);
    }
  }
  apply(t2, e2, s58, i3) {
    t2 & 65536 ? this.reduce(t2) : this.shift(t2, e2, s58, i3);
  }
  useNode(t2, e2) {
    let s58 = this.p.reused.length - 1;
    (s58 < 0 || this.p.reused[s58] != t2) && (this.p.reused.push(t2), s58++);
    let i3 = this.pos;
    this.reducePos = this.pos = i3 + t2.length, this.pushState(e2, i3), this.buffer.push(s58, i3, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t2, this, this.p.stream.reset(this.pos - t2.length)));
  }
  split() {
    let t2 = this, e2 = t2.buffer.length;
    for (; e2 > 0 && t2.buffer[e2 - 2] > t2.reducePos; ) e2 -= 4;
    let s58 = t2.buffer.slice(e2), i3 = t2.bufferBase + e2;
    for (; t2 && i3 == t2.bufferBase; ) t2 = t2.parent;
    return new l3(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, s58, i3, this.curContext, this.lookAhead, t2);
  }
  recoverByDelete(t2, e2) {
    let s58 = t2 <= this.p.parser.maxNode;
    s58 && this.storeNode(t2, this.pos, e2, 4), this.storeNode(0, this.pos, e2, s58 ? 8 : 4), this.pos = this.reducePos = e2, this.score -= 190;
  }
  canShift(t2) {
    for (let e2 = new C4(this); ; ) {
      let s58 = this.p.parser.stateSlot(e2.state, 4) || this.p.parser.hasAction(e2.state, t2);
      if (s58 == 0) return false;
      if (!(s58 & 65536)) return true;
      e2.reduce(s58);
    }
  }
  recoverByInsert(t2) {
    if (this.stack.length >= 300) return [];
    let e2 = this.p.parser.nextStates(this.state);
    if (e2.length > 8 || this.stack.length >= 120) {
      let i3 = [];
      for (let h3 = 0, r2; h3 < e2.length; h3 += 2) (r2 = e2[h3 + 1]) != this.state && this.p.parser.hasAction(r2, t2) && i3.push(e2[h3], r2);
      if (this.stack.length < 120) for (let h3 = 0; i3.length < 8 && h3 < e2.length; h3 += 2) {
        let r2 = e2[h3 + 1];
        i3.some((n6, o3) => o3 & 1 && n6 == r2) || i3.push(e2[h3], r2);
      }
      e2 = i3;
    }
    let s58 = [];
    for (let i3 = 0; i3 < e2.length && s58.length < 4; i3 += 2) {
      let h3 = e2[i3 + 1];
      if (h3 == this.state) continue;
      let r2 = this.split();
      r2.pushState(h3, this.pos), r2.storeNode(0, r2.pos, r2.pos, 4, true), r2.shiftContext(e2[i3], this.pos), r2.reducePos = this.pos, r2.score -= 200, s58.push(r2);
    }
    return s58;
  }
  forceReduce() {
    let { parser: t2 } = this.p, e2 = t2.stateSlot(this.state, 5);
    if (!(e2 & 65536)) return false;
    if (!t2.validAction(this.state, e2)) {
      let s58 = e2 >> 19, i3 = e2 & 65535, h3 = this.stack.length - s58 * 3;
      if (h3 < 0 || t2.getGoto(this.stack[h3], i3, false) < 0) {
        let r2 = this.findForcedReduction();
        if (r2 == null) return false;
        e2 = r2;
      }
      this.storeNode(0, this.pos, this.pos, 4, true), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(e2), true;
  }
  findForcedReduction() {
    let { parser: t2 } = this.p, e2 = [], s58 = (i3, h3) => {
      if (!e2.includes(i3)) return e2.push(i3), t2.allActions(i3, (r2) => {
        if (!(r2 & 393216)) if (r2 & 65536) {
          let n6 = (r2 >> 19) - h3;
          if (n6 > 1) {
            let o3 = r2 & 65535, a2 = this.stack.length - n6 * 3;
            if (a2 >= 0 && t2.getGoto(this.stack[a2], o3, false) >= 0) return n6 << 19 | 65536 | o3;
          }
        } else {
          let n6 = s58(r2, h3 + 1);
          if (n6 != null) return n6;
        }
      });
    };
    return s58(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); ) if (!this.forceReduce()) {
      this.storeNode(0, this.pos, this.pos, 4, true);
      break;
    }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3) return false;
    let { parser: t2 } = this.p;
    return t2.data[t2.stateSlot(this.state, 1)] == 65535 && !t2.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, true), this.state = this.stack[0], this.stack.length = 0;
  }
  sameState(t2) {
    if (this.state != t2.state || this.stack.length != t2.stack.length) return false;
    for (let e2 = 0; e2 < this.stack.length; e2 += 3) if (this.stack[e2] != t2.stack[e2]) return false;
    return true;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(t2) {
    return this.p.parser.dialect.flags[t2];
  }
  shiftContext(t2, e2) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t2, this, this.p.stream.reset(e2)));
  }
  reduceContext(t2, e2) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t2, this, this.p.stream.reset(e2)));
  }
  emitContext() {
    let t2 = this.buffer.length - 1;
    (t2 < 0 || this.buffer[t2] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let t2 = this.buffer.length - 1;
    (t2 < 0 || this.buffer[t2] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(t2) {
    if (t2 != this.curContext.context) {
      let e2 = new P4(this.curContext.tracker, t2);
      e2.hash != this.curContext.hash && this.emitContext(), this.curContext = e2;
    }
  }
  setLookAhead(t2) {
    t2 > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t2);
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
};
var P4 = class {
  constructor(t2, e2) {
    this.tracker = t2, this.context = e2, this.hash = t2.strict ? t2.hash(e2) : 0;
  }
};
var C4 = class {
  constructor(t2) {
    this.start = t2, this.state = t2.state, this.stack = t2.stack, this.base = this.stack.length;
  }
  reduce(t2) {
    let e2 = t2 & 65535, s58 = t2 >> 19;
    s58 == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (s58 - 1) * 3;
    let i3 = this.start.p.parser.getGoto(this.stack[this.base - 3], e2, true);
    this.state = i3;
  }
};
var T5 = class l4 {
  constructor(t2, e2, s58) {
    this.stack = t2, this.pos = e2, this.index = s58, this.buffer = t2.buffer, this.index == 0 && this.maybeNext();
  }
  static create(t2, e2 = t2.bufferBase + t2.buffer.length) {
    return new l4(t2, e2, e2 - t2.bufferBase);
  }
  maybeNext() {
    let t2 = this.stack.parent;
    t2 != null && (this.index = this.stack.bufferBase - t2.bufferBase, this.stack = t2, this.buffer = t2.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new l4(this.stack, this.pos, this.index);
  }
};
function b4(l8, t2 = Uint16Array) {
  if (typeof l8 != "string") return l8;
  let e2 = null;
  for (let s58 = 0, i3 = 0; s58 < l8.length; ) {
    let h3 = 0;
    for (; ; ) {
      let r2 = l8.charCodeAt(s58++), n6 = false;
      if (r2 == 126) {
        h3 = 65535;
        break;
      }
      r2 >= 92 && r2--, r2 >= 34 && r2--;
      let o3 = r2 - 32;
      if (o3 >= 46 && (o3 -= 46, n6 = true), h3 += o3, n6) break;
      h3 *= 46;
    }
    e2 ? e2[i3++] = h3 : e2 = new t2(h3);
  }
  return e2;
}
var x6 = class {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
};
var F6 = new x6();
var N4 = class {
  constructor(t2, e2) {
    this.input = t2, this.ranges = e2, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = F6, this.rangeIndex = 0, this.pos = this.chunkPos = e2[0].from, this.range = e2[0], this.end = e2[e2.length - 1].to, this.readNext();
  }
  resolveOffset(t2, e2) {
    let s58 = this.range, i3 = this.rangeIndex, h3 = this.pos + t2;
    for (; h3 < s58.from; ) {
      if (!i3) return null;
      let r2 = this.ranges[--i3];
      h3 -= s58.from - r2.to, s58 = r2;
    }
    for (; e2 < 0 ? h3 > s58.to : h3 >= s58.to; ) {
      if (i3 == this.ranges.length - 1) return null;
      let r2 = this.ranges[++i3];
      h3 += r2.from - s58.to, s58 = r2;
    }
    return h3;
  }
  clipPos(t2) {
    if (t2 >= this.range.from && t2 < this.range.to) return t2;
    for (let e2 of this.ranges) if (e2.to > t2) return Math.max(t2, e2.from);
    return this.end;
  }
  peek(t2) {
    let e2 = this.chunkOff + t2, s58, i3;
    if (e2 >= 0 && e2 < this.chunk.length) s58 = this.pos + t2, i3 = this.chunk.charCodeAt(e2);
    else {
      let h3 = this.resolveOffset(t2, 1);
      if (h3 == null) return -1;
      if (s58 = h3, s58 >= this.chunk2Pos && s58 < this.chunk2Pos + this.chunk2.length) i3 = this.chunk2.charCodeAt(s58 - this.chunk2Pos);
      else {
        let r2 = this.rangeIndex, n6 = this.range;
        for (; n6.to <= s58; ) n6 = this.ranges[++r2];
        this.chunk2 = this.input.chunk(this.chunk2Pos = s58), s58 + this.chunk2.length > n6.to && (this.chunk2 = this.chunk2.slice(0, n6.to - s58)), i3 = this.chunk2.charCodeAt(0);
      }
    }
    return s58 >= this.token.lookAhead && (this.token.lookAhead = s58 + 1), i3;
  }
  acceptToken(t2, e2 = 0) {
    let s58 = e2 ? this.resolveOffset(e2, -1) : this.pos;
    if (s58 == null || s58 < this.token.start) throw new RangeError("Token end out of bounds");
    this.token.value = t2, this.token.end = s58;
  }
  acceptTokenTo(t2, e2) {
    this.token.value = t2, this.token.end = e2;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: t2, chunkPos: e2 } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t2, this.chunk2Pos = e2, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let t2 = this.input.chunk(this.pos), e2 = this.pos + t2.length;
      this.chunk = e2 > this.range.to ? t2.slice(0, this.range.to - this.pos) : t2, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  advance(t2 = 1) {
    for (this.chunkOff += t2; this.pos + t2 >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      t2 -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += t2, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  reset(t2, e2) {
    if (e2 ? (this.token = e2, e2.start = t2, e2.lookAhead = t2 + 1, e2.value = e2.extended = -1) : this.token = F6, this.pos != t2) {
      if (this.pos = t2, t2 == this.end) return this.setDone(), this;
      for (; t2 < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; t2 >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      t2 >= this.chunkPos && t2 < this.chunkPos + this.chunk.length ? this.chunkOff = t2 - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  read(t2, e2) {
    if (t2 >= this.chunkPos && e2 <= this.chunkPos + this.chunk.length) return this.chunk.slice(t2 - this.chunkPos, e2 - this.chunkPos);
    if (t2 >= this.chunk2Pos && e2 <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(t2 - this.chunk2Pos, e2 - this.chunk2Pos);
    if (t2 >= this.range.from && e2 <= this.range.to) return this.input.read(t2, e2);
    let s58 = "";
    for (let i3 of this.ranges) {
      if (i3.from >= e2) break;
      i3.to > t2 && (s58 += this.input.read(Math.max(i3.from, t2), Math.min(i3.to, e2)));
    }
    return s58;
  }
};
var m5 = class {
  constructor(t2, e2) {
    this.data = t2, this.id = e2;
  }
  token(t2, e2) {
    let { parser: s58 } = e2.p;
    H3(this.data, t2, e2, this.id, s58.data, s58.tokenPrecTable);
  }
};
m5.prototype.contextual = m5.prototype.fallback = m5.prototype.extend = false;
var R4 = class {
  constructor(t2, e2, s58) {
    this.precTable = e2, this.elseToken = s58, this.data = typeof t2 == "string" ? b4(t2) : t2;
  }
  token(t2, e2) {
    let s58 = t2.pos, i3 = 0;
    for (; ; ) {
      let h3 = t2.next < 0, r2 = t2.resolveOffset(1, 1);
      if (H3(this.data, t2, e2, 0, this.data, this.precTable), t2.token.value > -1) break;
      if (this.elseToken == null) return;
      if (h3 || i3++, r2 == null) break;
      t2.reset(r2, t2.token);
    }
    i3 && (t2.reset(s58, t2.token), t2.acceptToken(this.elseToken, i3));
  }
};
R4.prototype.contextual = m5.prototype.fallback = m5.prototype.extend = false;
var M3 = class {
  constructor(t2, e2 = {}) {
    this.token = t2, this.contextual = !!e2.contextual, this.fallback = !!e2.fallback, this.extend = !!e2.extend;
  }
};
function H3(l8, t2, e2, s58, i3, h3) {
  let r2 = 0, n6 = 1 << s58, { dialect: o3 } = e2.p.parser;
  t: for (; n6 & l8[r2]; ) {
    let a2 = l8[r2 + 1];
    for (let c4 = r2 + 3; c4 < a2; c4 += 2) if ((l8[c4 + 1] & n6) > 0) {
      let d3 = l8[c4];
      if (o3.allows(d3) && (t2.token.value == -1 || t2.token.value == d3 || X5(d3, t2.token.value, i3, h3))) {
        t2.acceptToken(d3);
        break;
      }
    }
    let u4 = t2.next, f2 = 0, p2 = l8[r2 + 2];
    if (t2.next < 0 && p2 > f2 && l8[a2 + p2 * 3 - 3] == 65535) {
      r2 = l8[a2 + p2 * 3 - 1];
      continue t;
    }
    for (; f2 < p2; ) {
      let c4 = f2 + p2 >> 1, d3 = a2 + c4 + (c4 << 1), S7 = l8[d3], W6 = l8[d3 + 1] || 65536;
      if (u4 < S7) p2 = c4;
      else if (u4 >= W6) f2 = c4 + 1;
      else {
        r2 = l8[d3 + 2], t2.advance();
        continue t;
      }
    }
    break;
  }
}
function $3(l8, t2, e2) {
  for (let s58 = t2, i3; (i3 = l8[s58]) != 65535; s58++) if (i3 == e2) return s58 - t2;
  return -1;
}
function X5(l8, t2, e2, s58) {
  let i3 = $3(e2, s58, t2);
  return i3 < 0 || $3(e2, s58, l8) < i3;
}
var g3 = typeof __Process$ < "u" && __Process$.env && /\bparse\b/.test(__Process$.env.LOG);
var A4 = null;
function L4(l8, t2, e2) {
  let s58 = l8.cursor(S3.IncludeAnonymous);
  for (s58.moveTo(t2); ; ) if (!(e2 < 0 ? s58.childBefore(t2) : s58.childAfter(t2))) for (; ; ) {
    if ((e2 < 0 ? s58.to < t2 : s58.from > t2) && !s58.type.isError) return e2 < 0 ? Math.max(0, Math.min(s58.to - 1, t2 - 25)) : Math.min(l8.length, Math.max(s58.from + 1, t2 + 25));
    if (e2 < 0 ? s58.prevSibling() : s58.nextSibling()) break;
    if (!s58.parent()) return e2 < 0 ? 0 : l8.length;
  }
}
var z6 = class {
  constructor(t2, e2) {
    this.fragments = t2, this.nodeSet = e2, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let t2 = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (t2) {
      for (this.safeFrom = t2.openStart ? L4(t2.tree, t2.from + t2.offset, 1) - t2.offset : t2.from, this.safeTo = t2.openEnd ? L4(t2.tree, t2.to + t2.offset, -1) - t2.offset : t2.to; this.trees.length; ) this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(t2.tree), this.start.push(-t2.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else this.nextStart = 1e9;
  }
  nodeAt(t2) {
    if (t2 < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= t2; ) this.nextFragment();
    if (!this.fragment) return null;
    for (; ; ) {
      let e2 = this.trees.length - 1;
      if (e2 < 0) return this.nextFragment(), null;
      let s58 = this.trees[e2], i3 = this.index[e2];
      if (i3 == s58.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let h3 = s58.children[i3], r2 = this.start[e2] + s58.positions[i3];
      if (r2 > t2) return this.nextStart = r2, null;
      if (h3 instanceof O3) {
        if (r2 == t2) {
          if (r2 < this.safeFrom) return null;
          let n6 = r2 + h3.length;
          if (n6 <= this.safeTo) {
            let o3 = h3.prop(x3.lookAhead);
            if (!o3 || n6 + o3 < this.fragment.to) return h3;
          }
        }
        this.index[e2]++, r2 + h3.length >= Math.max(this.safeFrom, t2) && (this.trees.push(h3), this.start.push(r2), this.index.push(0));
      } else this.index[e2]++, this.nextStart = r2 + h3.length;
    }
  }
};
var I5 = class {
  constructor(t2, e2) {
    this.stream = e2, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t2.tokenizers.map((s58) => new x6());
  }
  getActions(t2) {
    let e2 = 0, s58 = null, { parser: i3 } = t2.p, { tokenizers: h3 } = i3, r2 = i3.stateSlot(t2.state, 3), n6 = t2.curContext ? t2.curContext.hash : 0, o3 = 0;
    for (let a2 = 0; a2 < h3.length; a2++) {
      if (!(1 << a2 & r2)) continue;
      let u4 = h3[a2], f2 = this.tokens[a2];
      if (!(s58 && !u4.fallback) && ((u4.contextual || f2.start != t2.pos || f2.mask != r2 || f2.context != n6) && (this.updateCachedToken(f2, u4, t2), f2.mask = r2, f2.context = n6), f2.lookAhead > f2.end + 25 && (o3 = Math.max(f2.lookAhead, o3)), f2.value != 0)) {
        let p2 = e2;
        if (f2.extended > -1 && (e2 = this.addActions(t2, f2.extended, f2.end, e2)), e2 = this.addActions(t2, f2.value, f2.end, e2), !u4.extend && (s58 = f2, e2 > p2)) break;
      }
    }
    for (; this.actions.length > e2; ) this.actions.pop();
    return o3 && t2.setLookAhead(o3), !s58 && t2.pos == this.stream.end && (s58 = new x6(), s58.value = t2.p.parser.eofTerm, s58.start = s58.end = t2.pos, e2 = this.addActions(t2, s58.value, s58.end, e2)), this.mainToken = s58, this.actions;
  }
  getMainToken(t2) {
    if (this.mainToken) return this.mainToken;
    let e2 = new x6(), { pos: s58, p: i3 } = t2;
    return e2.start = s58, e2.end = Math.min(s58 + 1, i3.stream.end), e2.value = s58 == i3.stream.end ? i3.parser.eofTerm : 0, e2;
  }
  updateCachedToken(t2, e2, s58) {
    let i3 = this.stream.clipPos(s58.pos);
    if (e2.token(this.stream.reset(i3, t2), s58), t2.value > -1) {
      let { parser: h3 } = s58.p;
      for (let r2 = 0; r2 < h3.specialized.length; r2++) if (h3.specialized[r2] == t2.value) {
        let n6 = h3.specializers[r2](this.stream.read(t2.start, t2.end), s58);
        if (n6 >= 0 && s58.p.parser.dialect.allows(n6 >> 1)) {
          n6 & 1 ? t2.extended = n6 >> 1 : t2.value = n6 >> 1;
          break;
        }
      }
    } else t2.value = 0, t2.end = this.stream.clipPos(i3 + 1);
  }
  putAction(t2, e2, s58, i3) {
    for (let h3 = 0; h3 < i3; h3 += 3) if (this.actions[h3] == t2) return i3;
    return this.actions[i3++] = t2, this.actions[i3++] = e2, this.actions[i3++] = s58, i3;
  }
  addActions(t2, e2, s58, i3) {
    let { state: h3 } = t2, { parser: r2 } = t2.p, { data: n6 } = r2;
    for (let o3 = 0; o3 < 2; o3++) for (let a2 = r2.stateSlot(h3, o3 ? 2 : 1); ; a2 += 3) {
      if (n6[a2] == 65535) if (n6[a2 + 1] == 1) a2 = k5(n6, a2 + 2);
      else {
        i3 == 0 && n6[a2 + 1] == 2 && (i3 = this.putAction(k5(n6, a2 + 2), e2, s58, i3));
        break;
      }
      n6[a2] == e2 && (i3 = this.putAction(k5(n6, a2 + 1), e2, s58, i3));
    }
    return i3;
  }
};
var B4 = class {
  constructor(t2, e2, s58, i3) {
    this.parser = t2, this.input = e2, this.ranges = i3, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new N4(e2, i3), this.tokens = new I5(t2, this.stream), this.topTerm = t2.top[1];
    let { from: h3 } = i3[0];
    this.stacks = [y5.start(this, t2.top[0], h3)], this.fragments = s58.length && this.stream.end - h3 > t2.bufferLength * 4 ? new z6(s58, t2.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let t2 = this.stacks, e2 = this.minStackPos, s58 = this.stacks = [], i3, h3;
    if (this.bigReductionCount > 300 && t2.length == 1) {
      let [r2] = t2;
      for (; r2.forceReduce() && r2.stack.length && r2.stack[r2.stack.length - 2] >= this.lastBigReductionStart; ) ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let r2 = 0; r2 < t2.length; r2++) {
      let n6 = t2[r2];
      for (; ; ) {
        if (this.tokens.mainToken = null, n6.pos > e2) s58.push(n6);
        else {
          if (this.advanceStack(n6, s58, t2)) continue;
          {
            i3 || (i3 = [], h3 = []), i3.push(n6);
            let o3 = this.tokens.getMainToken(n6);
            h3.push(o3.value, o3.end);
          }
        }
        break;
      }
    }
    if (!s58.length) {
      let r2 = i3 && Y5(i3);
      if (r2) return g3 && console.log("Finish with " + this.stackID(r2)), this.stackToTree(r2);
      if (this.parser.strict) throw g3 && i3 && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + e2);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && i3) {
      let r2 = this.stoppedAt != null && i3[0].pos > this.stoppedAt ? i3[0] : this.runRecovery(i3, h3, s58);
      if (r2) return g3 && console.log("Force-finish " + this.stackID(r2)), this.stackToTree(r2.forceAll());
    }
    if (this.recovering) {
      let r2 = this.recovering == 1 ? 1 : this.recovering * 3;
      if (s58.length > r2) for (s58.sort((n6, o3) => o3.score - n6.score); s58.length > r2; ) s58.pop();
      s58.some((n6) => n6.reducePos > e2) && this.recovering--;
    } else if (s58.length > 1) {
      t: for (let r2 = 0; r2 < s58.length - 1; r2++) {
        let n6 = s58[r2];
        for (let o3 = r2 + 1; o3 < s58.length; o3++) {
          let a2 = s58[o3];
          if (n6.sameState(a2) || n6.buffer.length > 500 && a2.buffer.length > 500) if ((n6.score - a2.score || n6.buffer.length - a2.buffer.length) > 0) s58.splice(o3--, 1);
          else {
            s58.splice(r2--, 1);
            continue t;
          }
        }
      }
      s58.length > 12 && s58.splice(12, s58.length - 12);
    }
    this.minStackPos = s58[0].pos;
    for (let r2 = 1; r2 < s58.length; r2++) s58[r2].pos < this.minStackPos && (this.minStackPos = s58[r2].pos);
    return null;
  }
  stopAt(t2) {
    if (this.stoppedAt != null && this.stoppedAt < t2) throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = t2;
  }
  advanceStack(t2, e2, s58) {
    let i3 = t2.pos, { parser: h3 } = this, r2 = g3 ? this.stackID(t2) + " -> " : "";
    if (this.stoppedAt != null && i3 > this.stoppedAt) return t2.forceReduce() ? t2 : null;
    if (this.fragments) {
      let a2 = t2.curContext && t2.curContext.tracker.strict, u4 = a2 ? t2.curContext.hash : 0;
      for (let f2 = this.fragments.nodeAt(i3); f2; ) {
        let p2 = this.parser.nodeSet.types[f2.type.id] == f2.type ? h3.getGoto(t2.state, f2.type.id) : -1;
        if (p2 > -1 && f2.length && (!a2 || (f2.prop(x3.contextHash) || 0) == u4)) return t2.useNode(f2, p2), g3 && console.log(r2 + this.stackID(t2) + ` (via reuse of ${h3.getName(f2.type.id)})`), true;
        if (!(f2 instanceof O3) || f2.children.length == 0 || f2.positions[0] > 0) break;
        let c4 = f2.children[0];
        if (c4 instanceof O3 && f2.positions[0] == 0) f2 = c4;
        else break;
      }
    }
    let n6 = h3.stateSlot(t2.state, 4);
    if (n6 > 0) return t2.reduce(n6), g3 && console.log(r2 + this.stackID(t2) + ` (via always-reduce ${h3.getName(n6 & 65535)})`), true;
    if (t2.stack.length >= 8400) for (; t2.stack.length > 6e3 && t2.forceReduce(); ) ;
    let o3 = this.tokens.getActions(t2);
    for (let a2 = 0; a2 < o3.length; ) {
      let u4 = o3[a2++], f2 = o3[a2++], p2 = o3[a2++], c4 = a2 == o3.length || !s58, d3 = c4 ? t2 : t2.split(), S7 = this.tokens.mainToken;
      if (d3.apply(u4, f2, S7 ? S7.start : d3.pos, p2), g3 && console.log(r2 + this.stackID(d3) + ` (via ${u4 & 65536 ? `reduce of ${h3.getName(u4 & 65535)}` : "shift"} for ${h3.getName(f2)} @ ${i3}${d3 == t2 ? "" : ", split"})`), c4) return true;
      d3.pos > i3 ? e2.push(d3) : s58.push(d3);
    }
    return false;
  }
  advanceFully(t2, e2) {
    let s58 = t2.pos;
    for (; ; ) {
      if (!this.advanceStack(t2, null, null)) return false;
      if (t2.pos > s58) return j4(t2, e2), true;
    }
  }
  runRecovery(t2, e2, s58) {
    let i3 = null, h3 = false;
    for (let r2 = 0; r2 < t2.length; r2++) {
      let n6 = t2[r2], o3 = e2[r2 << 1], a2 = e2[(r2 << 1) + 1], u4 = g3 ? this.stackID(n6) + " -> " : "";
      if (n6.deadEnd && (h3 || (h3 = true, n6.restart(), g3 && console.log(u4 + this.stackID(n6) + " (restarted)"), this.advanceFully(n6, s58)))) continue;
      let f2 = n6.split(), p2 = u4;
      for (let c4 = 0; f2.forceReduce() && c4 < 10 && (g3 && console.log(p2 + this.stackID(f2) + " (via force-reduce)"), !this.advanceFully(f2, s58)); c4++) g3 && (p2 = this.stackID(f2) + " -> ");
      for (let c4 of n6.recoverByInsert(o3)) g3 && console.log(u4 + this.stackID(c4) + " (via recover-insert)"), this.advanceFully(c4, s58);
      this.stream.end > n6.pos ? (a2 == n6.pos && (a2++, o3 = 0), n6.recoverByDelete(o3, a2), g3 && console.log(u4 + this.stackID(n6) + ` (via recover-delete ${this.parser.getName(o3)})`), j4(n6, s58)) : (!i3 || i3.score < n6.score) && (i3 = n6);
    }
    return i3;
  }
  stackToTree(t2) {
    return t2.close(), O3.build({ buffer: T5.create(t2), nodeSet: this.parser.nodeSet, topID: this.topTerm, maxBufferLength: this.parser.bufferLength, reused: this.reused, start: this.ranges[0].from, length: t2.pos - this.ranges[0].from, minRepeatType: this.parser.minRepeatTerm });
  }
  stackID(t2) {
    let e2 = (A4 || (A4 = /* @__PURE__ */ new WeakMap())).get(t2);
    return e2 || A4.set(t2, e2 = String.fromCodePoint(this.nextStackID++)), e2 + t2;
  }
};
function j4(l8, t2) {
  for (let e2 = 0; e2 < t2.length; e2++) {
    let s58 = t2[e2];
    if (s58.pos == l8.pos && s58.sameState(l8)) {
      t2[e2].score < l8.score && (t2[e2] = l8);
      return;
    }
  }
  t2.push(l8);
}
var D4 = class {
  constructor(t2, e2, s58) {
    this.source = t2, this.flags = e2, this.disabled = s58;
  }
  allows(t2) {
    return !this.disabled || this.disabled[t2] == 0;
  }
};
var w5 = (l8) => l8;
var E4 = class {
  constructor(t2) {
    this.start = t2.start, this.shift = t2.shift || w5, this.reduce = t2.reduce || w5, this.reuse = t2.reuse || w5, this.hash = t2.hash || (() => 0), this.strict = t2.strict !== false;
  }
};
var G6 = class l5 extends Ae3 {
  constructor(t2) {
    if (super(), this.wrappers = [], t2.version != 14) throw new RangeError(`Parser version (${t2.version}) doesn't match runtime version (14)`);
    let e2 = t2.nodeNames.split(" ");
    this.minRepeatTerm = e2.length;
    for (let n6 = 0; n6 < t2.repeatNodeCount; n6++) e2.push("");
    let s58 = Object.keys(t2.topRules).map((n6) => t2.topRules[n6][1]), i3 = [];
    for (let n6 = 0; n6 < e2.length; n6++) i3.push([]);
    function h3(n6, o3, a2) {
      i3[n6].push([o3, o3.deserialize(String(a2))]);
    }
    if (t2.nodeProps) for (let n6 of t2.nodeProps) {
      let o3 = n6[0];
      typeof o3 == "string" && (o3 = x3[o3]);
      for (let a2 = 1; a2 < n6.length; ) {
        let u4 = n6[a2++];
        if (u4 >= 0) h3(u4, o3, n6[a2++]);
        else {
          let f2 = n6[a2 + -u4];
          for (let p2 = -u4; p2 > 0; p2--) h3(n6[a2++], o3, f2);
          a2++;
        }
      }
    }
    this.nodeSet = new be3(e2.map((n6, o3) => F3.define({ name: o3 >= this.minRepeatTerm ? void 0 : n6, id: o3, props: i3[o3], top: s58.indexOf(o3) > -1, error: o3 == 0, skipped: t2.skippedNodes && t2.skippedNodes.indexOf(o3) > -1 }))), t2.propSources && (this.nodeSet = this.nodeSet.extend(...t2.propSources)), this.strict = false, this.bufferLength = Fe3;
    let r2 = b4(t2.tokenData);
    this.context = t2.context, this.specializerSpecs = t2.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let n6 = 0; n6 < this.specializerSpecs.length; n6++) this.specialized[n6] = this.specializerSpecs[n6].term;
    this.specializers = this.specializerSpecs.map(U5), this.states = b4(t2.states, Uint32Array), this.data = b4(t2.stateData), this.goto = b4(t2.goto), this.maxTerm = t2.maxTerm, this.tokenizers = t2.tokenizers.map((n6) => typeof n6 == "number" ? new m5(r2, n6) : n6), this.topRules = t2.topRules, this.dialects = t2.dialects || {}, this.dynamicPrecedences = t2.dynamicPrecedences || null, this.tokenPrecTable = t2.tokenPrec, this.termNames = t2.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(t2, e2, s58) {
    let i3 = new B4(this, t2, e2, s58);
    for (let h3 of this.wrappers) i3 = h3(i3, t2, e2, s58);
    return i3;
  }
  getGoto(t2, e2, s58 = false) {
    let i3 = this.goto;
    if (e2 >= i3[0]) return -1;
    for (let h3 = i3[e2 + 1]; ; ) {
      let r2 = i3[h3++], n6 = r2 & 1, o3 = i3[h3++];
      if (n6 && s58) return o3;
      for (let a2 = h3 + (r2 >> 1); h3 < a2; h3++) if (i3[h3] == t2) return o3;
      if (n6) return -1;
    }
  }
  hasAction(t2, e2) {
    let s58 = this.data;
    for (let i3 = 0; i3 < 2; i3++) for (let h3 = this.stateSlot(t2, i3 ? 2 : 1), r2; ; h3 += 3) {
      if ((r2 = s58[h3]) == 65535) if (s58[h3 + 1] == 1) r2 = s58[h3 = k5(s58, h3 + 2)];
      else {
        if (s58[h3 + 1] == 2) return k5(s58, h3 + 2);
        break;
      }
      if (r2 == e2 || r2 == 0) return k5(s58, h3 + 1);
    }
    return 0;
  }
  stateSlot(t2, e2) {
    return this.states[t2 * 6 + e2];
  }
  stateFlag(t2, e2) {
    return (this.stateSlot(t2, 0) & e2) > 0;
  }
  validAction(t2, e2) {
    return !!this.allActions(t2, (s58) => s58 == e2 ? true : null);
  }
  allActions(t2, e2) {
    let s58 = this.stateSlot(t2, 4), i3 = s58 ? e2(s58) : void 0;
    for (let h3 = this.stateSlot(t2, 1); i3 == null; h3 += 3) {
      if (this.data[h3] == 65535) if (this.data[h3 + 1] == 1) h3 = k5(this.data, h3 + 2);
      else break;
      i3 = e2(k5(this.data, h3 + 1));
    }
    return i3;
  }
  nextStates(t2) {
    let e2 = [];
    for (let s58 = this.stateSlot(t2, 1); ; s58 += 3) {
      if (this.data[s58] == 65535) if (this.data[s58 + 1] == 1) s58 = k5(this.data, s58 + 2);
      else break;
      if (!(this.data[s58 + 2] & 1)) {
        let i3 = this.data[s58 + 1];
        e2.some((h3, r2) => r2 & 1 && h3 == i3) || e2.push(this.data[s58], i3);
      }
    }
    return e2;
  }
  configure(t2) {
    let e2 = Object.assign(Object.create(l5.prototype), this);
    if (t2.props && (e2.nodeSet = this.nodeSet.extend(...t2.props)), t2.top) {
      let s58 = this.topRules[t2.top];
      if (!s58) throw new RangeError(`Invalid top rule name ${t2.top}`);
      e2.top = s58;
    }
    return t2.tokenizers && (e2.tokenizers = this.tokenizers.map((s58) => {
      let i3 = t2.tokenizers.find((h3) => h3.from == s58);
      return i3 ? i3.to : s58;
    })), t2.specializers && (e2.specializers = this.specializers.slice(), e2.specializerSpecs = this.specializerSpecs.map((s58, i3) => {
      let h3 = t2.specializers.find((n6) => n6.from == s58.external);
      if (!h3) return s58;
      let r2 = Object.assign(Object.assign({}, s58), { external: h3.to });
      return e2.specializers[i3] = U5(r2), r2;
    })), t2.contextTracker && (e2.context = t2.contextTracker), t2.dialect && (e2.dialect = this.parseDialect(t2.dialect)), t2.strict != null && (e2.strict = t2.strict), t2.wrap && (e2.wrappers = e2.wrappers.concat(t2.wrap)), t2.bufferLength != null && (e2.bufferLength = t2.bufferLength), e2;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(t2) {
    return this.termNames ? this.termNames[t2] : String(t2 <= this.maxNode && this.nodeSet.types[t2].name || t2);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(t2) {
    let e2 = this.dynamicPrecedences;
    return e2 == null ? 0 : e2[t2] || 0;
  }
  parseDialect(t2) {
    let e2 = Object.keys(this.dialects), s58 = e2.map(() => false);
    if (t2) for (let h3 of t2.split(" ")) {
      let r2 = e2.indexOf(h3);
      r2 >= 0 && (s58[r2] = true);
    }
    let i3 = null;
    for (let h3 = 0; h3 < e2.length; h3++) if (!s58[h3]) for (let r2 = this.dialects[e2[h3]], n6; (n6 = this.data[r2++]) != 65535; ) (i3 || (i3 = new Uint8Array(this.maxTerm + 1)))[n6] = 1;
    return new D4(t2, s58, i3);
  }
  static deserialize(t2) {
    return new l5(t2);
  }
};
function k5(l8, t2) {
  return l8[t2] | l8[t2 + 1] << 16;
}
function Y5(l8) {
  let t2 = null;
  for (let e2 of l8) {
    let s58 = e2.p.stoppedAt;
    (e2.pos == e2.p.stream.end || s58 != null && e2.pos > s58) && e2.p.parser.stateFlag(e2.state, 2) && (!t2 || t2.score < e2.score) && (t2 = e2);
  }
  return t2;
}
function U5(l8) {
  if (l8.external) {
    let t2 = l8.extend ? 1 : 0;
    return (e2, s58) => l8.external(e2, s58) << 1 | t2;
  }
  return l8.get;
}

// https://esm.sh/@lezer/yaml@1.0.3/denonext/yaml.mjs
var f = 63;
var D5 = 64;
var C5 = 1;
var w6 = 2;
var U6 = 3;
var B5 = 4;
var W5 = 5;
var E5 = 6;
var L5 = 7;
var Y6 = 65;
var M4 = 66;
var j5 = 8;
var A5 = 9;
var H4 = 10;
var N5 = 11;
var I6 = 12;
var y6 = 13;
var K2 = 19;
var F7 = 20;
var J4 = 29;
var u3 = 33;
var OO = 34;
var eO = 47;
var aO = 0;
var T6 = 1;
var x7 = 2;
var R5 = 3;
var i2 = 4;
var s57 = class {
  constructor(e2, a2, Q5) {
    this.parent = e2, this.depth = a2, this.type = Q5, this.hash = (e2 ? e2.hash + e2.hash << 8 : 0) + a2 + (a2 << 4) + Q5;
  }
};
s57.top = new s57(null, -1, aO);
function X6(O4, e2) {
  for (let a2 = 0, Q5 = e2 - O4.pos - 1; ; Q5--, a2++) {
    let t2 = O4.peek(Q5);
    if (o2(t2) || t2 == -1) return a2;
  }
}
function g4(O4) {
  return O4 == 32 || O4 == 9;
}
function o2(O4) {
  return O4 == 10 || O4 == 13;
}
function p(O4) {
  return g4(O4) || o2(O4);
}
function c3(O4) {
  return O4 < 0 || p(O4);
}
var QO = new E4({ start: s57.top, reduce(O4, e2) {
  return O4.type == R5 && (e2 == F7 || e2 == OO) ? O4.parent : O4;
}, shift(O4, e2, a2, Q5) {
  if (e2 == U6) return new s57(O4, X6(Q5, Q5.pos), T6);
  if (e2 == Y6 || e2 == W5) return new s57(O4, X6(Q5, Q5.pos), x7);
  if (e2 == f) return O4.parent;
  if (e2 == K2 || e2 == u3) return new s57(O4, 0, R5);
  if (e2 == y6 && O4.type == i2) return O4.parent;
  if (e2 == eO) {
    let t2 = /[1-9]/.exec(Q5.read(Q5.pos, a2.pos));
    if (t2) return new s57(O4, O4.depth + +t2[0], i2);
  }
  return O4;
}, hash(O4) {
  return O4.hash;
} });
function l6(O4, e2, a2 = 0) {
  return O4.peek(a2) == e2 && O4.peek(a2 + 1) == e2 && O4.peek(a2 + 2) == e2 && c3(O4.peek(a2 + 3));
}
var PO = new M3((O4, e2) => {
  if (O4.next == -1 && e2.canShift(D5)) return O4.acceptToken(D5);
  let a2 = O4.peek(-1);
  if ((o2(a2) || a2 < 0) && e2.context.type != R5) {
    if (l6(O4, 45)) if (e2.canShift(f)) O4.acceptToken(f);
    else return O4.acceptToken(C5, 3);
    if (l6(O4, 46)) if (e2.canShift(f)) O4.acceptToken(f);
    else return O4.acceptToken(w6, 3);
    let Q5 = 0;
    for (; O4.next == 32; ) Q5++, O4.advance();
    (Q5 < e2.context.depth || Q5 == e2.context.depth && e2.context.type == T6 && (O4.next != 45 || !c3(O4.peek(1)))) && O4.next != -1 && !o2(O4.next) && O4.next != 35 && O4.acceptToken(f, -Q5);
  }
}, { contextual: true });
var rO = new M3((O4, e2) => {
  if (e2.context.type == R5) {
    O4.next == 63 && (O4.advance(), c3(O4.next) && O4.acceptToken(L5));
    return;
  }
  if (O4.next == 45) O4.advance(), c3(O4.next) && O4.acceptToken(e2.context.type == T6 && e2.context.depth == X6(O4, O4.pos - 1) ? B5 : U6);
  else if (O4.next == 63) O4.advance(), c3(O4.next) && O4.acceptToken(e2.context.type == x7 && e2.context.depth == X6(O4, O4.pos - 1) ? E5 : W5);
  else {
    let a2 = O4.pos;
    for (; ; ) if (g4(O4.next)) {
      if (O4.pos == a2) return;
      O4.advance();
    } else if (O4.next == 33) z7(O4);
    else if (O4.next == 38) $4(O4);
    else if (O4.next == 42) {
      $4(O4);
      break;
    } else if (O4.next == 39 || O4.next == 34) {
      if (h2(O4, true)) break;
      return;
    } else if (O4.next == 91 || O4.next == 123) {
      if (!sO(O4)) return;
      break;
    } else {
      G7(O4, true, false, 0);
      break;
    }
    for (; g4(O4.next); ) O4.advance();
    if (O4.next == 58) {
      if (O4.pos == a2 && e2.canShift(J4)) return;
      let Q5 = O4.peek(1);
      c3(Q5) && O4.acceptTokenTo(e2.context.type == x7 && e2.context.depth == X6(O4, a2) ? M4 : Y6, a2);
    }
  }
}, { contextual: true });
function tO(O4) {
  return O4 > 32 && O4 < 127 && O4 != 34 && O4 != 37 && O4 != 44 && O4 != 60 && O4 != 62 && O4 != 92 && O4 != 94 && O4 != 96 && O4 != 123 && O4 != 124 && O4 != 125;
}
function q5(O4) {
  return O4 >= 48 && O4 <= 57 || O4 >= 97 && O4 <= 102 || O4 >= 65 && O4 <= 70;
}
function m6(O4, e2) {
  return O4.next == 37 ? (O4.advance(), q5(O4.next) && O4.advance(), q5(O4.next) && O4.advance(), true) : tO(O4.next) || e2 && O4.next == 44 ? (O4.advance(), true) : false;
}
function z7(O4) {
  if (O4.advance(), O4.next == 60) {
    for (O4.advance(); ; ) if (!m6(O4, true)) {
      O4.next == 62 && O4.advance();
      break;
    }
  } else for (; m6(O4, false); ) ;
}
function $4(O4) {
  for (O4.advance(); !c3(O4.next) && S5(O4.tag) != "f"; ) O4.advance();
}
function h2(O4, e2) {
  let a2 = O4.next, Q5 = false, t2 = O4.pos;
  for (O4.advance(); ; ) {
    let P5 = O4.next;
    if (P5 < 0) break;
    if (O4.advance(), P5 == a2) if (P5 == 39) if (O4.next == 39) O4.advance();
    else break;
    else break;
    else if (P5 == 92 && a2 == 34) O4.next >= 0 && O4.advance();
    else if (o2(P5)) {
      if (e2) return false;
      Q5 = true;
    } else if (e2 && O4.pos >= t2 + 1024) return false;
  }
  return !Q5;
}
function sO(O4) {
  for (let e2 = [], a2 = O4.pos + 1024; ; ) if (O4.next == 91 || O4.next == 123) e2.push(O4.next), O4.advance();
  else if (O4.next == 39 || O4.next == 34) {
    if (!h2(O4, true)) return false;
  } else if (O4.next == 93 || O4.next == 125) {
    if (e2[e2.length - 1] != O4.next - 2) return false;
    if (e2.pop(), O4.advance(), !e2.length) return true;
  } else {
    if (O4.next < 0 || O4.pos > a2 || o2(O4.next)) return false;
    O4.advance();
  }
}
var oO = "iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif";
function S5(O4) {
  return O4 < 33 ? "u" : O4 > 125 ? "s" : oO[O4 - 33];
}
function b5(O4, e2) {
  let a2 = S5(O4);
  return a2 != "u" && !(e2 && a2 == "f");
}
function G7(O4, e2, a2, Q5) {
  if (S5(O4.next) == "s" || (O4.next == 63 || O4.next == 58 || O4.next == 45) && b5(O4.peek(1), a2)) O4.advance();
  else return false;
  let t2 = O4.pos;
  for (; ; ) {
    let P5 = O4.next, n6 = 0, d3 = Q5 + 1;
    for (; p(P5); ) {
      if (o2(P5)) {
        if (e2) return false;
        d3 = 0;
      } else d3++;
      P5 = O4.peek(++n6);
    }
    if (!(P5 >= 0 && (P5 == 58 ? b5(O4.peek(n6 + 1), a2) : P5 == 35 ? O4.peek(n6 - 1) != 32 : b5(P5, a2))) || !a2 && d3 <= Q5 || d3 == 0 && !a2 && (l6(O4, 45, n6) || l6(O4, 46, n6))) break;
    if (e2 && S5(P5) == "f") return false;
    for (let v3 = n6; v3 >= 0; v3--) O4.advance();
    if (e2 && O4.pos > t2 + 1024) return false;
  }
  return true;
}
var nO = new M3((O4, e2) => {
  if (O4.next == 33) z7(O4), O4.acceptToken(I6);
  else if (O4.next == 38 || O4.next == 42) {
    let a2 = O4.next == 38 ? H4 : N5;
    $4(O4), O4.acceptToken(a2);
  } else O4.next == 39 || O4.next == 34 ? (h2(O4, false), O4.acceptToken(A5)) : G7(O4, false, e2.context.type == R5, e2.context.depth) && O4.acceptToken(j5);
});
var cO = new M3((O4, e2) => {
  let a2 = e2.context.type == i2 ? e2.context.depth : -1, Q5 = O4.pos;
  O: for (; ; ) {
    let t2 = 0, P5 = O4.next;
    for (; P5 == 32; ) P5 = O4.peek(++t2);
    if (!t2 && (l6(O4, 45, t2) || l6(O4, 46, t2)) || !o2(P5) && (a2 < 0 && (a2 = Math.max(e2.context.depth + 1, t2)), t2 < a2)) break;
    for (; ; ) {
      if (O4.next < 0) break O;
      let n6 = o2(O4.next);
      if (O4.advance(), n6) continue O;
      Q5 = O4.pos;
    }
  }
  O4.acceptTokenTo(y6, Q5);
});
var fO = _3({ DirectiveName: l2.keyword, DirectiveContent: l2.attributeValue, "DirectiveEnd DocEnd": l2.meta, QuotedLiteral: l2.string, BlockLiteralHeader: l2.special(l2.string), BlockLiteralContent: l2.content, Literal: l2.content, "Key/Literal Key/QuotedLiteral": l2.definition(l2.propertyName), "Anchor Alias": l2.labelName, Tag: l2.typeName, Comment: l2.lineComment, ": , -": l2.separator, "?": l2.punctuation, "[ ]": l2.squareBracket, "{ }": l2.brace });
var dO = G6.deserialize({ version: 14, states: "5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y", stateData: ";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O", goto: ",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv", nodeNames: "⚠ DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document", maxTerm: 74, context: QO, nodeProps: [["isolate", -3, 8, 9, 14, ""], ["openedBy", 18, "[", 32, "{"], ["closedBy", 19, "]", 33, "}"]], propSources: [fO], skippedNodes: [0], repeatNodeCount: 6, tokenData: "-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P", tokenizers: [PO, rO, nO, cO, 0, 1], topRules: { Stream: [0, 15] }, tokenPrec: 0 });

// https://esm.sh/@codemirror/lang-yaml@6.1.2/denonext/lang-yaml.mjs
var g5 = G6.deserialize({ version: 14, states: "!vOQOPOOO]OPO'#C_OhOPO'#C^OOOO'#Cc'#CcOpOPO'#CaQOOOOOO{OPOOOOOO'#Cb'#CbO!WOPO'#C`O!`OPO,58xOOOO-E6a-E6aOOOO-E6`-E6`OOOO'#C_'#C_OOOO1G.d1G.d", stateData: "!h~OXPOYROWTP~OWVXXRXYRX~OYVOXSP~OXROYROWTX~OXROYROWTP~OYVOXSX~OX[O~OXY~", goto: "vWPPX[beioRUOQQOR]XRXQTTOUQWQRZWSSOURYS", nodeNames: "⚠ Document Frontmatter DashLine FrontmatterContent Body", maxTerm: 10, skippedNodes: [0], repeatNodeCount: 2, tokenData: "$z~RXOYnYZ!^Z]n]^!^^}n}!O!i!O;'Sn;'S;=`!c<%lOn~qXOYnYZ!^Z]n]^!^^;'Sn;'S;=`!c<%l~n~On~~!^~!cOY~~!fP;=`<%ln~!lZOYnYZ!^Z]n]^!^^}n}!O#_!O;'Sn;'S;=`!c<%l~n~On~~!^~#bZOYnYZ!^Z]n]^!^^}n}!O$T!O;'Sn;'S;=`!c<%l~n~On~~!^~$WXOYnYZ$sZ]n]^$s^;'Sn;'S;=`!c<%l~n~On~~$s~$zOX~Y~", tokenizers: [0], topRules: { Document: [0, 1] }, tokenPrec: 67 });
var l7 = bt2.define({ name: "yaml", parser: dO.configure({ props: [Vt.add({ Stream: (e2) => {
  for (let n6 = e2.node.resolve(e2.pos, -1); n6 && n6.to >= e2.pos; n6 = n6.parent) {
    if (n6.name == "BlockLiteralContent" && n6.from < n6.to) return e2.baseIndentFor(n6);
    if (n6.name == "BlockLiteral") return e2.baseIndentFor(n6) + e2.unit;
    if (n6.name == "BlockSequence" || n6.name == "BlockMapping") return e2.column(n6.from, 1);
    if (n6.name == "QuotedLiteral") return null;
    if (n6.name == "Literal") {
      let t2 = e2.column(n6.from, 1);
      if (t2 == e2.lineIndent(n6.from, 1)) return t2;
      if (n6.to > e2.pos) return null;
    }
  }
  return null;
}, FlowMapping: dn2({ closing: "}" }), FlowSequence: dn2({ closing: "]" }) }), Se4.add({ "FlowMapping FlowSequence": kn2, "Item Pair BlockLiteral": (e2, n6) => ({ from: n6.doc.lineAt(e2.from).to, to: e2.to }) })] }), languageData: { commentTokens: { line: "#" }, indentOnInput: /^\s*[\]\}]$/ } });
function L6() {
  return new yt2(l7);
}
var S6 = bt2.define({ name: "yaml-frontmatter", parser: g5.configure({ props: [_3({ DashLine: l2.meta })] }) });
function Z4(e2) {
  let { language: n6, support: t2 } = e2.content instanceof yt2 ? e2.content : { language: e2.content, support: [] };
  return new yt2(S6.configure({ wrap: De3((o3) => o3.name == "FrontmatterContent" ? { parser: l7.parser } : o3.name == "Body" ? { parser: n6.parser } : null) }), t2);
}
export {
  L6 as yaml,
  Z4 as yamlFrontmatter,
  l7 as yamlLanguage
};
