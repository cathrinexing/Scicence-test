/**
 * vis-timeline and vis-graph2d
 * https://visjs.github.io/vis-timeline/
 *
 * Create a fully customizable, interactive timeline with items and ranges.
 *
 * @version 0.0.0-no-version
 * @date    2020-05-03T20:26:47.841Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).vis = t.vis || {})
}(this, (function(t) {
  "use strict";
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function i(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports
  }

  function n(t) {
    return t && t.default || t
  }

  function o() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
  }
  var r = i((function(t, e) {
      t.exports = function() {
        var e, i;

        function n() {
          return e.apply(null, arguments)
        }

        function r(t) {
          return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }

        function s(t) {
          return null != t && "[object Object]" === Object.prototype.toString.call(t)
        }

        function a(t) {
          return void 0 === t
        }

        function l(t) {
          return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
        }

        function u(t) {
          return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }

        function h(t, e) {
          var i, n = [];
          for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
          return n
        }

        function d(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }

        function c(t, e) {
          for (var i in e) d(e, i) && (t[i] = e[i]);
          return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), t
        }

        function p(t, e, i, n) {
          return De(t, e, i, n, !0).utc()
        }

        function m(t) {
          return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
          }), t._pf
        }

        function f(t) {
          if (null == t._isValid) {
            var e = m(t),
              n = i.call(e.parsedDateParts, (function(t) {
                return null != t
              })),
              o = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
            if (t._strict && (o = o && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return o;
            t._isValid = o
          }
          return t._isValid
        }

        function g(t) {
          var e = p(NaN);
          return null != t ? c(m(e), t) : m(e).userInvalidated = !0, e
        }
        i = Array.prototype.some ? Array.prototype.some : function(t) {
          for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
            if (n in e && t.call(this, e[n], n, e)) return !0;
          return !1
        };
        var v = n.momentProperties = [];

        function b(t, e) {
          var i, n, o;
          if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), a(e._i) || (t._i = e._i), a(e._f) || (t._f = e._f), a(e._l) || (t._l = e._l), a(e._strict) || (t._strict = e._strict), a(e._tzm) || (t._tzm = e._tzm), a(e._isUTC) || (t._isUTC = e._isUTC), a(e._offset) || (t._offset = e._offset), a(e._pf) || (t._pf = m(e)), a(e._locale) || (t._locale = e._locale), v.length > 0)
            for (i = 0; i < v.length; i++) a(o = e[n = v[i]]) || (t[n] = o);
          return t
        }
        var y = !1;

        function x(t) {
          b(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, n.updateOffset(this), y = !1)
        }

        function w(t) {
          return t instanceof x || null != t && null != t._isAMomentObject
        }

        function _(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }

        function k(t) {
          var e = +t,
            i = 0;
          return 0 !== e && isFinite(e) && (i = _(e)), i
        }

        function D(t, e, i) {
          var n, o = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            s = 0;
          for (n = 0; n < o; n++)(i && t[n] !== e[n] || !i && k(t[n]) !== k(e[n])) && s++;
          return s + r
        }

        function I(t) {
          !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function C(t, e) {
          var i = !0;
          return c((function() {
            if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
              for (var o, r = [], s = 0; s < arguments.length; s++) {
                if (o = "", "object" == typeof arguments[s]) {
                  for (var a in o += "\n[" + s + "] ", arguments[0]) o += a + ": " + arguments[0][a] + ", ";
                  o = o.slice(0, -2)
                } else o = arguments[s];
                r.push(o)
              }
              I(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), i = !1
            }
            return e.apply(this, arguments)
          }), e)
        }
        var L, G = {};

        function S(t, e) {
          null != n.deprecationHandler && n.deprecationHandler(t, e), G[t] || (I(e), G[t] = !0)
        }

        function M(t) {
          return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }

        function Q(t, e) {
          var i, n = c({}, t);
          for (i in e) d(e, i) && (s(t[i]) && s(e[i]) ? (n[i] = {}, c(n[i], t[i]), c(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
          for (i in t) d(t, i) && !d(e, i) && s(t[i]) && (n[i] = c({}, n[i]));
          return n
        }

        function N(t) {
          null != t && this.set(t)
        }
        n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, L = Object.keys ? Object.keys : function(t) {
          var e, i = [];
          for (e in t) d(t, e) && i.push(e);
          return i
        };
        var F = {};

        function Z(t, e) {
          var i = t.toLowerCase();
          F[i] = F[i + "s"] = F[e] = t
        }

        function B(t) {
          return "string" == typeof t ? F[t] || F[t.toLowerCase()] : void 0
        }

        function O(t) {
          var e, i, n = {};
          for (i in t) d(t, i) && (e = B(i)) && (n[e] = t[i]);
          return n
        }
        var A = {};

        function W(t, e) {
          A[t] = e
        }

        function X(t, e, i) {
          var n = "" + Math.abs(t),
            o = e - n.length;
          return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
        }
        var T = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          Y = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          E = {},
          R = {};

        function U(t, e, i, n) {
          var o = n;
          "string" == typeof n && (o = function() {
            return this[n]()
          }), t && (R[t] = o), e && (R[e[0]] = function() {
            return X(o.apply(this, arguments), e[1], e[2])
          }), i && (R[i] = function() {
            return this.localeData().ordinal(o.apply(this, arguments), t)
          })
        }

        function z(t, e) {
          return t.isValid() ? (e = V(e, t.localeData()), E[e] = E[e] || function(t) {
            var e, i, n, o = t.match(T);
            for (e = 0, i = o.length; e < i; e++) R[o[e]] ? o[e] = R[o[e]] : o[e] = (n = o[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
            return function(e) {
              var n, r = "";
              for (n = 0; n < i; n++) r += M(o[n]) ? o[n].call(e, t) : o[n];
              return r
            }
          }(e), E[e](t)) : t.localeData().invalidDate()
        }

        function V(t, e) {
          var i = 5;

          function n(t) {
            return e.longDateFormat(t) || t
          }
          for (Y.lastIndex = 0; i >= 0 && Y.test(t);) t = t.replace(Y, n), Y.lastIndex = 0, i -= 1;
          return t
        }
        var j = /\d/,
          H = /\d\d/,
          P = /\d{3}/,
          J = /\d{4}/,
          K = /[+-]?\d{6}/,
          q = /\d\d?/,
          $ = /\d\d\d\d?/,
          tt = /\d\d\d\d\d\d?/,
          et = /\d{1,3}/,
          it = /\d{1,4}/,
          nt = /[+-]?\d{1,6}/,
          ot = /\d+/,
          rt = /[+-]?\d+/,
          st = /Z|[+-]\d\d:?\d\d/gi,
          at = /Z|[+-]\d\d(?::?\d\d)?/gi,
          lt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          ut = {};

        function ht(t, e, i) {
          ut[t] = M(e) ? e : function(t, n) {
            return t && i ? i : e
          }
        }

        function dt(t, e) {
          return d(ut, t) ? ut[t](e._strict, e._locale) : new RegExp(ct(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(t, e, i, n, o) {
            return e || i || n || o
          }))))
        }

        function ct(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        var pt = {};

        function mt(t, e) {
          var i, n = e;
          for ("string" == typeof t && (t = [t]), l(e) && (n = function(t, i) {
              i[e] = k(t)
            }), i = 0; i < t.length; i++) pt[t[i]] = n
        }

        function ft(t, e) {
          mt(t, (function(t, i, n, o) {
            n._w = n._w || {}, e(t, n._w, n, o)
          }))
        }

        function gt(t, e, i) {
          null != e && d(pt, t) && pt[t](e, i._a, i, t)
        }

        function vt(t) {
          return bt(t) ? 366 : 365
        }

        function bt(t) {
          return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }
        U("Y", 0, 0, (function() {
          var t = this.year();
          return t <= 9999 ? "" + t : "+" + t
        })), U(0, ["YY", 2], 0, (function() {
          return this.year() % 100
        })), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), Z("year", "y"), W("year", 1), ht("Y", rt), ht("YY", q, H), ht("YYYY", it, J), ht("YYYYY", nt, K), ht("YYYYYY", nt, K), mt(["YYYYY", "YYYYYY"], 0), mt("YYYY", (function(t, e) {
          e[0] = 2 === t.length ? n.parseTwoDigitYear(t) : k(t)
        })), mt("YY", (function(t, e) {
          e[0] = n.parseTwoDigitYear(t)
        })), mt("Y", (function(t, e) {
          e[0] = parseInt(t, 10)
        })), n.parseTwoDigitYear = function(t) {
          return k(t) + (k(t) > 68 ? 1900 : 2e3)
        };
        var yt, xt = wt("FullYear", !0);

        function wt(t, e) {
          return function(i) {
            return null != i ? (kt(this, t, i), n.updateOffset(this, e), this) : _t(this, t)
          }
        }

        function _t(t, e) {
          return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }

        function kt(t, e, i) {
          t.isValid() && !isNaN(i) && ("FullYear" === e && bt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Dt(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
        }

        function Dt(t, e) {
          if (isNaN(t) || isNaN(e)) return NaN;
          var i, n = (e % (i = 12) + i) % i;
          return t += (e - n) / 12, 1 === n ? bt(t) ? 29 : 28 : 31 - n % 7 % 2
        }
        yt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
          var e;
          for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e;
          return -1
        }, U("M", ["MM", 2], "Mo", (function() {
          return this.month() + 1
        })), U("MMM", 0, 0, (function(t) {
          return this.localeData().monthsShort(this, t)
        })), U("MMMM", 0, 0, (function(t) {
          return this.localeData().months(this, t)
        })), Z("month", "M"), W("month", 8), ht("M", q), ht("MM", q, H), ht("MMM", (function(t, e) {
          return e.monthsShortRegex(t)
        })), ht("MMMM", (function(t, e) {
          return e.monthsRegex(t)
        })), mt(["M", "MM"], (function(t, e) {
          e[1] = k(t) - 1
        })), mt(["MMM", "MMMM"], (function(t, e, i, n) {
          var o = i._locale.monthsParse(t, n, i._strict);
          null != o ? e[1] = o : m(i).invalidMonth = t
        }));
        var It = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Ct = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          Lt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Gt(t, e, i) {
          var n, o, r, s = t.toLocaleLowerCase();
          if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = p([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
          return i ? "MMM" === e ? -1 !== (o = yt.call(this._shortMonthsParse, s)) ? o : null : -1 !== (o = yt.call(this._longMonthsParse, s)) ? o : null : "MMM" === e ? -1 !== (o = yt.call(this._shortMonthsParse, s)) || -1 !== (o = yt.call(this._longMonthsParse, s)) ? o : null : -1 !== (o = yt.call(this._longMonthsParse, s)) || -1 !== (o = yt.call(this._shortMonthsParse, s)) ? o : null
        }

        function St(t, e) {
          var i;
          if (!t.isValid()) return t;
          if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = k(e);
            else if (!l(e = t.localeData().monthsParse(e))) return t;
          return i = Math.min(t.date(), Dt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
        }

        function Mt(t) {
          return null != t ? (St(this, t), n.updateOffset(this, !0), this) : _t(this, "Month")
        }
        var Qt = lt,
          Nt = lt;

        function Ft() {
          function t(t, e) {
            return e.length - t.length
          }
          var e, i, n = [],
            o = [],
            r = [];
          for (e = 0; e < 12; e++) i = p([2e3, e]), n.push(this.monthsShort(i, "")), o.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
          for (n.sort(t), o.sort(t), r.sort(t), e = 0; e < 12; e++) n[e] = ct(n[e]), o[e] = ct(o[e]);
          for (e = 0; e < 24; e++) r[e] = ct(r[e]);
          this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function Zt(t, e, i, n, o, r, s) {
          var a;
          return t < 100 && t >= 0 ? (a = new Date(t + 400, e, i, n, o, r, s), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, i, n, o, r, s), a
        }

        function Bt(t) {
          var e;
          if (t < 100 && t >= 0) {
            var i = Array.prototype.slice.call(arguments);
            i[0] = t + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)
          } else e = new Date(Date.UTC.apply(null, arguments));
          return e
        }

        function Ot(t, e, i) {
          var n = 7 + e - i;
          return -(7 + Bt(t, 0, n).getUTCDay() - e) % 7 + n - 1
        }

        function At(t, e, i, n, o) {
          var r, s, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Ot(t, n, o);
          return a <= 0 ? s = vt(r = t - 1) + a : a > vt(t) ? (r = t + 1, s = a - vt(t)) : (r = t, s = a), {
            year: r,
            dayOfYear: s
          }
        }

        function Wt(t, e, i) {
          var n, o, r = Ot(t.year(), e, i),
            s = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
          return s < 1 ? n = s + Xt(o = t.year() - 1, e, i) : s > Xt(t.year(), e, i) ? (n = s - Xt(t.year(), e, i), o = t.year() + 1) : (o = t.year(), n = s), {
            week: n,
            year: o
          }
        }

        function Xt(t, e, i) {
          var n = Ot(t, e, i),
            o = Ot(t + 1, e, i);
          return (vt(t) - n + o) / 7
        }

        function Tt(t, e) {
          return t.slice(e, 7).concat(t.slice(0, e))
        }
        U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), Z("week", "w"), Z("isoWeek", "W"), W("week", 5), W("isoWeek", 5), ht("w", q), ht("ww", q, H), ht("W", q), ht("WW", q, H), ft(["w", "ww", "W", "WW"], (function(t, e, i, n) {
          e[n.substr(0, 1)] = k(t)
        })), U("d", 0, "do", "day"), U("dd", 0, 0, (function(t) {
          return this.localeData().weekdaysMin(this, t)
        })), U("ddd", 0, 0, (function(t) {
          return this.localeData().weekdaysShort(this, t)
        })), U("dddd", 0, 0, (function(t) {
          return this.localeData().weekdays(this, t)
        })), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), Z("day", "d"), Z("weekday", "e"), Z("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), ht("d", q), ht("e", q), ht("E", q), ht("dd", (function(t, e) {
          return e.weekdaysMinRegex(t)
        })), ht("ddd", (function(t, e) {
          return e.weekdaysShortRegex(t)
        })), ht("dddd", (function(t, e) {
          return e.weekdaysRegex(t)
        })), ft(["dd", "ddd", "dddd"], (function(t, e, i, n) {
          var o = i._locale.weekdaysParse(t, n, i._strict);
          null != o ? e.d = o : m(i).invalidWeekday = t
        })), ft(["d", "e", "E"], (function(t, e, i, n) {
          e[n] = k(t)
        }));
        var Yt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          Et = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Rt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

        function Ut(t, e, i) {
          var n, o, r, s = t.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = p([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
          return i ? "dddd" === e ? -1 !== (o = yt.call(this._weekdaysParse, s)) ? o : null : "ddd" === e ? -1 !== (o = yt.call(this._shortWeekdaysParse, s)) ? o : null : -1 !== (o = yt.call(this._minWeekdaysParse, s)) ? o : null : "dddd" === e ? -1 !== (o = yt.call(this._weekdaysParse, s)) || -1 !== (o = yt.call(this._shortWeekdaysParse, s)) || -1 !== (o = yt.call(this._minWeekdaysParse, s)) ? o : null : "ddd" === e ? -1 !== (o = yt.call(this._shortWeekdaysParse, s)) || -1 !== (o = yt.call(this._weekdaysParse, s)) || -1 !== (o = yt.call(this._minWeekdaysParse, s)) ? o : null : -1 !== (o = yt.call(this._minWeekdaysParse, s)) || -1 !== (o = yt.call(this._weekdaysParse, s)) || -1 !== (o = yt.call(this._shortWeekdaysParse, s)) ? o : null
        }
        var zt = lt,
          Vt = lt,
          jt = lt;

        function Ht() {
          function t(t, e) {
            return e.length - t.length
          }
          var e, i, n, o, r, s = [],
            a = [],
            l = [],
            u = [];
          for (e = 0; e < 7; e++) i = p([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), o = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), s.push(n), a.push(o), l.push(r), u.push(n), u.push(o), u.push(r);
          for (s.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) a[e] = ct(a[e]), l[e] = ct(l[e]), u[e] = ct(u[e]);
          this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function Pt() {
          return this.hours() % 12 || 12
        }

        function Jt(t, e) {
          U(t, 0, 0, (function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
          }))
        }

        function Kt(t, e) {
          return e._meridiemParse
        }
        U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Pt), U("k", ["kk", 2], 0, (function() {
          return this.hours() || 24
        })), U("hmm", 0, 0, (function() {
          return "" + Pt.apply(this) + X(this.minutes(), 2)
        })), U("hmmss", 0, 0, (function() {
          return "" + Pt.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2)
        })), U("Hmm", 0, 0, (function() {
          return "" + this.hours() + X(this.minutes(), 2)
        })), U("Hmmss", 0, 0, (function() {
          return "" + this.hours() + X(this.minutes(), 2) + X(this.seconds(), 2)
        })), Jt("a", !0), Jt("A", !1), Z("hour", "h"), W("hour", 13), ht("a", Kt), ht("A", Kt), ht("H", q), ht("h", q), ht("k", q), ht("HH", q, H), ht("hh", q, H), ht("kk", q, H), ht("hmm", $), ht("hmmss", tt), ht("Hmm", $), ht("Hmmss", tt), mt(["H", "HH"], 3), mt(["k", "kk"], (function(t, e, i) {
          var n = k(t);
          e[3] = 24 === n ? 0 : n
        })), mt(["a", "A"], (function(t, e, i) {
          i._isPm = i._locale.isPM(t), i._meridiem = t
        })), mt(["h", "hh"], (function(t, e, i) {
          e[3] = k(t), m(i).bigHour = !0
        })), mt("hmm", (function(t, e, i) {
          var n = t.length - 2;
          e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n)), m(i).bigHour = !0
        })), mt("hmmss", (function(t, e, i) {
          var n = t.length - 4,
            o = t.length - 2;
          e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n, 2)), e[5] = k(t.substr(o)), m(i).bigHour = !0
        })), mt("Hmm", (function(t, e, i) {
          var n = t.length - 2;
          e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n))
        })), mt("Hmmss", (function(t, e, i) {
          var n = t.length - 4,
            o = t.length - 2;
          e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n, 2)), e[5] = k(t.substr(o))
        }));
        var qt, $t = wt("Hours", !0),
          te = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            months: Ct,
            monthsShort: Lt,
            week: {
              dow: 0,
              doy: 6
            },
            weekdays: Yt,
            weekdaysMin: Rt,
            weekdaysShort: Et,
            meridiemParse: /[ap]\.?m?\.?/i
          },
          ee = {},
          ie = {};

        function ne(t) {
          return t ? t.toLowerCase().replace("_", "-") : t
        }

        function oe(e) {
          var i = null;
          if (!ee[e] && t && t.exports) try {
            i = qt._abbr, o(), re(i)
          } catch (t) {}
          return ee[e]
        }

        function re(t, e) {
          var i;
          return t && ((i = a(e) ? ae(t) : se(t, e)) ? qt = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), qt._abbr
        }

        function se(t, e) {
          if (null !== e) {
            var i, n = te;
            if (e.abbr = t, null != ee[t]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ee[t]._config;
            else if (null != e.parentLocale)
              if (null != ee[e.parentLocale]) n = ee[e.parentLocale]._config;
              else {
                if (null == (i = oe(e.parentLocale))) return ie[e.parentLocale] || (ie[e.parentLocale] = []), ie[e.parentLocale].push({
                  name: t,
                  config: e
                }), null;
                n = i._config
              } return ee[t] = new N(Q(n, e)), ie[t] && ie[t].forEach((function(t) {
              se(t.name, t.config)
            })), re(t), ee[t]
          }
          return delete ee[t], null
        }

        function ae(t) {
          var e;
          if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return qt;
          if (!r(t)) {
            if (e = oe(t)) return e;
            t = [t]
          }
          return function(t) {
            for (var e, i, n, o, r = 0; r < t.length;) {
              for (e = (o = ne(t[r]).split("-")).length, i = (i = ne(t[r + 1])) ? i.split("-") : null; e > 0;) {
                if (n = oe(o.slice(0, e).join("-"))) return n;
                if (i && i.length >= e && D(o, i, !0) >= e - 1) break;
                e--
              }
              r++
            }
            return qt
          }(t)
        }

        function le(t) {
          var e, i = t._a;
          return i && -2 === m(t).overflow && (e = i[1] < 0 || i[1] > 11 ? 1 : i[2] < 1 || i[2] > Dt(i[0], i[1]) ? 2 : i[3] < 0 || i[3] > 24 || 24 === i[3] && (0 !== i[4] || 0 !== i[5] || 0 !== i[6]) ? 3 : i[4] < 0 || i[4] > 59 ? 4 : i[5] < 0 || i[5] > 59 ? 5 : i[6] < 0 || i[6] > 999 ? 6 : -1, m(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2), m(t)._overflowWeeks && -1 === e && (e = 7), m(t)._overflowWeekday && -1 === e && (e = 8), m(t).overflow = e), t
        }

        function ue(t, e, i) {
          return null != t ? t : null != e ? e : i
        }

        function he(t) {
          var e, i, o, r, s, a = [];
          if (!t._d) {
            for (o = function(t) {
                var e = new Date(n.now());
                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
              }(t), t._w && null == t._a[2] && null == t._a[1] && function(t) {
                var e, i, n, o, r, s, a, l;
                if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, s = 4, i = ue(e.GG, t._a[0], Wt(Ie(), 1, 4).year), n = ue(e.W, 1), ((o = ue(e.E, 1)) < 1 || o > 7) && (l = !0);
                else {
                  r = t._locale._week.dow, s = t._locale._week.doy;
                  var u = Wt(Ie(), r, s);
                  i = ue(e.gg, t._a[0], u.year), n = ue(e.w, u.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (l = !0) : null != e.e ? (o = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : o = r
                }
                n < 1 || n > Xt(i, r, s) ? m(t)._overflowWeeks = !0 : null != l ? m(t)._overflowWeekday = !0 : (a = At(i, n, o, r, s), t._a[0] = a.year, t._dayOfYear = a.dayOfYear)
              }(t), null != t._dayOfYear && (s = ue(t._a[0], o[0]), (t._dayOfYear > vt(s) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0), i = Bt(s, 0, t._dayOfYear), t._a[1] = i.getUTCMonth(), t._a[2] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = o[e];
            for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[3] && 0 === t._a[4] && 0 === t._a[5] && 0 === t._a[6] && (t._nextDay = !0, t._a[3] = 0), t._d = (t._useUTC ? Bt : Zt).apply(null, a), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[3] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (m(t).weekdayMismatch = !0)
          }
        }
        var de = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          ce = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          pe = /Z|[+-]\d\d(?::?\d\d)?/,
          me = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
          ],
          fe = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
          ],
          ge = /^\/?Date\((\-?\d+)/i;

        function ve(t) {
          var e, i, n, o, r, s, a = t._i,
            l = de.exec(a) || ce.exec(a);
          if (l) {
            for (m(t).iso = !0, e = 0, i = me.length; e < i; e++)
              if (me[e][1].exec(l[1])) {
                o = me[e][0], n = !1 !== me[e][2];
                break
              } if (null == o) return void(t._isValid = !1);
            if (l[3]) {
              for (e = 0, i = fe.length; e < i; e++)
                if (fe[e][1].exec(l[3])) {
                  r = (l[2] || " ") + fe[e][0];
                  break
                } if (null == r) return void(t._isValid = !1)
            }
            if (!n && null != r) return void(t._isValid = !1);
            if (l[4]) {
              if (!pe.exec(l[4])) return void(t._isValid = !1);
              s = "Z"
            }
            t._f = o + (r || "") + (s || ""), _e(t)
          } else t._isValid = !1
        }
        var be = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function ye(t) {
          var e = parseInt(t, 10);
          return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
        }
        var xe = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480
        };

        function we(t) {
          var e, i, n, o, r, s, a, l = be.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
          if (l) {
            var u = (e = l[4], i = l[3], n = l[2], o = l[5], r = l[6], s = l[7], a = [ye(e), Lt.indexOf(i), parseInt(n, 10), parseInt(o, 10), parseInt(r, 10)], s && a.push(parseInt(s, 10)), a);
            if (! function(t, e, i) {
                return !t || Et.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (m(i).weekdayMismatch = !0, i._isValid = !1, !1)
              }(l[1], u, t)) return;
            t._a = u, t._tzm = function(t, e, i) {
              if (t) return xe[t];
              if (e) return 0;
              var n = parseInt(i, 10),
                o = n % 100;
              return (n - o) / 100 * 60 + o
            }(l[8], l[9], l[10]), t._d = Bt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), m(t).rfc2822 = !0
          } else t._isValid = !1
        }

        function _e(t) {
          if (t._f !== n.ISO_8601)
            if (t._f !== n.RFC_2822) {
              t._a = [], m(t).empty = !0;
              var e, i, o, r, s, a = "" + t._i,
                l = a.length,
                u = 0;
              for (o = V(t._f, t._locale).match(T) || [], e = 0; e < o.length; e++) r = o[e], (i = (a.match(dt(r, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(i))).length > 0 && m(t).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), u += i.length), R[r] ? (i ? m(t).empty = !1 : m(t).unusedTokens.push(r), gt(r, i, t)) : t._strict && !i && m(t).unusedTokens.push(r);
              m(t).charsLeftOver = l - u, a.length > 0 && m(t).unusedInput.push(a), t._a[3] <= 12 && !0 === m(t).bigHour && t._a[3] > 0 && (m(t).bigHour = void 0), m(t).parsedDateParts = t._a.slice(0), m(t).meridiem = t._meridiem, t._a[3] = function(t, e, i) {
                var n;
                return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
              }(t._locale, t._a[3], t._meridiem), he(t), le(t)
            } else we(t);
          else ve(t)
        }

        function ke(t) {
          var e = t._i,
            i = t._f;
          return t._locale = t._locale || ae(t._l), null === e || void 0 === i && "" === e ? g({
            nullInput: !0
          }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), w(e) ? new x(le(e)) : (u(e) ? t._d = e : r(i) ? function(t) {
            var e, i, n, o, r;
            if (0 === t._f.length) return m(t).invalidFormat = !0, void(t._d = new Date(NaN));
            for (o = 0; o < t._f.length; o++) r = 0, e = b({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], _e(e), f(e) && (r += m(e).charsLeftOver, r += 10 * m(e).unusedTokens.length, m(e).score = r, (null == n || r < n) && (n = r, i = e));
            c(t, i || e)
          }(t) : i ? _e(t) : function(t) {
            var e = t._i;
            a(e) ? t._d = new Date(n.now()) : u(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
              var e = ge.exec(t._i);
              null === e ? (ve(t), !1 === t._isValid && (delete t._isValid, we(t), !1 === t._isValid && (delete t._isValid, n.createFromInputFallback(t)))) : t._d = new Date(+e[1])
            }(t) : r(e) ? (t._a = h(e.slice(0), (function(t) {
              return parseInt(t, 10)
            })), he(t)) : s(e) ? function(t) {
              if (!t._d) {
                var e = O(t._i);
                t._a = h([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], (function(t) {
                  return t && parseInt(t, 10)
                })), he(t)
              }
            }(t) : l(e) ? t._d = new Date(e) : n.createFromInputFallback(t)
          }(t), f(t) || (t._d = null), t))
        }

        function De(t, e, i, n, o) {
          var a, l = {};
          return !0 !== i && !1 !== i || (n = i, i = void 0), (s(t) && function(t) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
            var e;
            for (e in t)
              if (t.hasOwnProperty(e)) return !1;
            return !0
          }(t) || r(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = i, l._i = t, l._f = e, l._strict = n, (a = new x(le(ke(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
        }

        function Ie(t, e, i, n) {
          return De(t, e, i, n, !1)
        }
        n.createFromInputFallback = C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(t) {
          t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        })), n.ISO_8601 = function() {}, n.RFC_2822 = function() {};
        var Ce = C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
            var t = Ie.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : g()
          })),
          Le = C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
            var t = Ie.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : g()
          }));

        function Ge(t, e) {
          var i, n;
          if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return Ie();
          for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
          return i
        }
        var Se = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Me(t) {
          var e = O(t),
            i = e.year || 0,
            n = e.quarter || 0,
            o = e.month || 0,
            r = e.week || e.isoWeek || 0,
            s = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            h = e.millisecond || 0;
          this._isValid = function(t) {
            for (var e in t)
              if (-1 === yt.call(Se, e) || null != t[e] && isNaN(t[e])) return !1;
            for (var i = !1, n = 0; n < Se.length; ++n)
              if (t[Se[n]]) {
                if (i) return !1;
                parseFloat(t[Se[n]]) !== k(t[Se[n]]) && (i = !0)
              } return !0
          }(e), this._milliseconds = +h + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * r, this._months = +o + 3 * n + 12 * i, this._data = {}, this._locale = ae(), this._bubble()
        }

        function Qe(t) {
          return t instanceof Me
        }

        function Ne(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
        }

        function Fe(t, e) {
          U(t, 0, 0, (function() {
            var t = this.utcOffset(),
              i = "+";
            return t < 0 && (t = -t, i = "-"), i + X(~~(t / 60), 2) + e + X(~~t % 60, 2)
          }))
        }
        Fe("Z", ":"), Fe("ZZ", ""), ht("Z", at), ht("ZZ", at), mt(["Z", "ZZ"], (function(t, e, i) {
          i._useUTC = !0, i._tzm = Be(at, t)
        }));
        var Ze = /([\+\-]|\d\d)/gi;

        function Be(t, e) {
          var i = (e || "").match(t);
          if (null === i) return null;
          var n = ((i[i.length - 1] || []) + "").match(Ze) || ["-", 0, 0],
            o = 60 * n[1] + k(n[2]);
          return 0 === o ? 0 : "+" === n[0] ? o : -o
        }

        function Oe(t, e) {
          var i, o;
          return e._isUTC ? (i = e.clone(), o = (w(t) || u(t) ? t.valueOf() : Ie(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + o), n.updateOffset(i, !1), i) : Ie(t).local()
        }

        function Ae(t) {
          return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }

        function We() {
          return !!this.isValid() && this._isUTC && 0 === this._offset
        }
        n.updateOffset = function() {};
        var Xe = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          Te = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function Ye(t, e) {
          var i, n, o, r, s, a, u = t,
            h = null;
          return Qe(t) ? u = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
          } : l(t) ? (u = {}, e ? u[e] = t : u.milliseconds = t) : (h = Xe.exec(t)) ? (i = "-" === h[1] ? -1 : 1, u = {
            y: 0,
            d: k(h[2]) * i,
            h: k(h[3]) * i,
            m: k(h[4]) * i,
            s: k(h[5]) * i,
            ms: k(Ne(1e3 * h[6])) * i
          }) : (h = Te.exec(t)) ? (i = "-" === h[1] ? -1 : 1, u = {
            y: Ee(h[2], i),
            M: Ee(h[3], i),
            w: Ee(h[4], i),
            d: Ee(h[5], i),
            h: Ee(h[6], i),
            m: Ee(h[7], i),
            s: Ee(h[8], i)
          }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (r = Ie(u.from), s = Ie(u.to), o = r.isValid() && s.isValid() ? (s = Oe(s, r), r.isBefore(s) ? a = Re(r, s) : ((a = Re(s, r)).milliseconds = -a.milliseconds, a.months = -a.months), a) : {
            milliseconds: 0,
            months: 0
          }, (u = {}).ms = o.milliseconds, u.M = o.months), n = new Me(u), Qe(t) && d(t, "_locale") && (n._locale = t._locale), n
        }

        function Ee(t, e) {
          var i = t && parseFloat(t.replace(",", "."));
          return (isNaN(i) ? 0 : i) * e
        }

        function Re(t, e) {
          var i = {};
          return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
        }

        function Ue(t, e) {
          return function(i, n) {
            var o;
            return null === n || isNaN(+n) || (S(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = i, i = n, n = o), ze(this, Ye(i = "string" == typeof i ? +i : i, n), t), this
          }
        }

        function ze(t, e, i, o) {
          var r = e._milliseconds,
            s = Ne(e._days),
            a = Ne(e._months);
          t.isValid() && (o = null == o || o, a && St(t, _t(t, "Month") + a * i), s && kt(t, "Date", _t(t, "Date") + s * i), r && t._d.setTime(t._d.valueOf() + r * i), o && n.updateOffset(t, s || a))
        }
        Ye.fn = Me.prototype, Ye.invalid = function() {
          return Ye(NaN)
        };
        var Ve = Ue(1, "add"),
          je = Ue(-1, "subtract");

        function He(t, e) {
          var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            n = t.clone().add(i, "months");
          return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
        }

        function Pe(t) {
          var e;
          return void 0 === t ? this._locale._abbr : (null != (e = ae(t)) && (this._locale = e), this)
        }
        n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Je = C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(t) {
          return void 0 === t ? this.localeData() : this.locale(t)
        }));

        function Ke() {
          return this._locale
        }

        function qe(t, e) {
          return (t % e + e) % e
        }

        function $e(t, e, i) {
          return t < 100 && t >= 0 ? new Date(t + 400, e, i) - 126227808e5 : new Date(t, e, i).valueOf()
        }

        function ti(t, e, i) {
          return t < 100 && t >= 0 ? Date.UTC(t + 400, e, i) - 126227808e5 : Date.UTC(t, e, i)
        }

        function ei(t, e) {
          U(0, [t, t.length], 0, e)
        }

        function ii(t, e, i, n, o) {
          var r;
          return null == t ? Wt(this, n, o).year : (e > (r = Xt(t, n, o)) && (e = r), ni.call(this, t, e, i, n, o))
        }

        function ni(t, e, i, n, o) {
          var r = At(t, e, i, n, o),
            s = Bt(r.year, 0, r.dayOfYear);
          return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }
        U(0, ["gg", 2], 0, (function() {
          return this.weekYear() % 100
        })), U(0, ["GG", 2], 0, (function() {
          return this.isoWeekYear() % 100
        })), ei("gggg", "weekYear"), ei("ggggg", "weekYear"), ei("GGGG", "isoWeekYear"), ei("GGGGG", "isoWeekYear"), Z("weekYear", "gg"), Z("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), ht("G", rt), ht("g", rt), ht("GG", q, H), ht("gg", q, H), ht("GGGG", it, J), ht("gggg", it, J), ht("GGGGG", nt, K), ht("ggggg", nt, K), ft(["gggg", "ggggg", "GGGG", "GGGGG"], (function(t, e, i, n) {
          e[n.substr(0, 2)] = k(t)
        })), ft(["gg", "GG"], (function(t, e, i, o) {
          e[o] = n.parseTwoDigitYear(t)
        })), U("Q", 0, "Qo", "quarter"), Z("quarter", "Q"), W("quarter", 7), ht("Q", j), mt("Q", (function(t, e) {
          e[1] = 3 * (k(t) - 1)
        })), U("D", ["DD", 2], "Do", "date"), Z("date", "D"), W("date", 9), ht("D", q), ht("DD", q, H), ht("Do", (function(t, e) {
          return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
        })), mt(["D", "DD"], 2), mt("Do", (function(t, e) {
          e[2] = k(t.match(q)[0])
        }));
        var oi = wt("Date", !0);
        U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Z("dayOfYear", "DDD"), W("dayOfYear", 4), ht("DDD", et), ht("DDDD", P), mt(["DDD", "DDDD"], (function(t, e, i) {
          i._dayOfYear = k(t)
        })), U("m", ["mm", 2], 0, "minute"), Z("minute", "m"), W("minute", 14), ht("m", q), ht("mm", q, H), mt(["m", "mm"], 4);
        var ri = wt("Minutes", !1);
        U("s", ["ss", 2], 0, "second"), Z("second", "s"), W("second", 15), ht("s", q), ht("ss", q, H), mt(["s", "ss"], 5);
        var si, ai = wt("Seconds", !1);
        for (U("S", 0, 0, (function() {
            return ~~(this.millisecond() / 100)
          })), U(0, ["SS", 2], 0, (function() {
            return ~~(this.millisecond() / 10)
          })), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, (function() {
            return 10 * this.millisecond()
          })), U(0, ["SSSSS", 5], 0, (function() {
            return 100 * this.millisecond()
          })), U(0, ["SSSSSS", 6], 0, (function() {
            return 1e3 * this.millisecond()
          })), U(0, ["SSSSSSS", 7], 0, (function() {
            return 1e4 * this.millisecond()
          })), U(0, ["SSSSSSSS", 8], 0, (function() {
            return 1e5 * this.millisecond()
          })), U(0, ["SSSSSSSSS", 9], 0, (function() {
            return 1e6 * this.millisecond()
          })), Z("millisecond", "ms"), W("millisecond", 16), ht("S", et, j), ht("SS", et, H), ht("SSS", et, P), si = "SSSS"; si.length <= 9; si += "S") ht(si, ot);

        function li(t, e) {
          e[6] = k(1e3 * ("0." + t))
        }
        for (si = "S"; si.length <= 9; si += "S") mt(si, li);
        var ui = wt("Milliseconds", !1);
        U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
        var hi = x.prototype;

        function di(t) {
          return t
        }
        hi.add = Ve, hi.calendar = function(t, e) {
          var i = t || Ie(),
            o = Oe(i, this).startOf("day"),
            r = n.calendarFormat(this, o) || "sameElse",
            s = e && (M(e[r]) ? e[r].call(this, i) : e[r]);
          return this.format(s || this.localeData().calendar(r, this, Ie(i)))
        }, hi.clone = function() {
          return new x(this)
        }, hi.diff = function(t, e, i) {
          var n, o, r;
          if (!this.isValid()) return NaN;
          if (!(n = Oe(t, this)).isValid()) return NaN;
          switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), e = B(e)) {
            case "year":
              r = He(this, n) / 12;
              break;
            case "month":
              r = He(this, n);
              break;
            case "quarter":
              r = He(this, n) / 3;
              break;
            case "second":
              r = (this - n) / 1e3;
              break;
            case "minute":
              r = (this - n) / 6e4;
              break;
            case "hour":
              r = (this - n) / 36e5;
              break;
            case "day":
              r = (this - n - o) / 864e5;
              break;
            case "week":
              r = (this - n - o) / 6048e5;
              break;
            default:
              r = this - n
          }
          return i ? r : _(r)
        }, hi.endOf = function(t) {
          var e;
          if (void 0 === (t = B(t)) || "millisecond" === t || !this.isValid()) return this;
          var i = this._isUTC ? ti : $e;
          switch (t) {
            case "year":
              e = i(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              e = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
              break;
            case "month":
              e = i(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;
            case "isoWeek":
              e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;
            case "day":
            case "date":
              e = i(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              e = this._d.valueOf(), e += 36e5 - qe(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
              break;
            case "minute":
              e = this._d.valueOf(), e += 6e4 - qe(e, 6e4) - 1;
              break;
            case "second":
              e = this._d.valueOf(), e += 1e3 - qe(e, 1e3) - 1
          }
          return this._d.setTime(e), n.updateOffset(this, !0), this
        }, hi.format = function(t) {
          t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
          var e = z(this, t);
          return this.localeData().postformat(e)
        }, hi.from = function(t, e) {
          return this.isValid() && (w(t) && t.isValid() || Ie(t).isValid()) ? Ye({
            to: this,
            from: t
          }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, hi.fromNow = function(t) {
          return this.from(Ie(), t)
        }, hi.to = function(t, e) {
          return this.isValid() && (w(t) && t.isValid() || Ie(t).isValid()) ? Ye({
            from: this,
            to: t
          }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, hi.toNow = function(t) {
          return this.to(Ie(), t)
        }, hi.get = function(t) {
          return M(this[t = B(t)]) ? this[t]() : this
        }, hi.invalidAt = function() {
          return m(this).overflow
        }, hi.isAfter = function(t, e) {
          var i = w(t) ? t : Ie(t);
          return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
        }, hi.isBefore = function(t, e) {
          var i = w(t) ? t : Ie(t);
          return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
        }, hi.isBetween = function(t, e, i, n) {
          var o = w(t) ? t : Ie(t),
            r = w(e) ? e : Ie(e);
          return !!(this.isValid() && o.isValid() && r.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(o, i) : !this.isBefore(o, i)) && (")" === n[1] ? this.isBefore(r, i) : !this.isAfter(r, i))
        }, hi.isSame = function(t, e) {
          var i, n = w(t) ? t : Ie(t);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
        }, hi.isSameOrAfter = function(t, e) {
          return this.isSame(t, e) || this.isAfter(t, e)
        }, hi.isSameOrBefore = function(t, e) {
          return this.isSame(t, e) || this.isBefore(t, e)
        }, hi.isValid = function() {
          return f(this)
        }, hi.lang = Je, hi.locale = Pe, hi.localeData = Ke, hi.max = Le, hi.min = Ce, hi.parsingFlags = function() {
          return c({}, m(this))
        }, hi.set = function(t, e) {
          if ("object" == typeof t)
            for (var i = function(t) {
                var e = [];
                for (var i in t) e.push({
                  unit: i,
                  priority: A[i]
                });
                return e.sort((function(t, e) {
                  return t.priority - e.priority
                })), e
              }(t = O(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
          else if (M(this[t = B(t)])) return this[t](e);
          return this
        }, hi.startOf = function(t) {
          var e;
          if (void 0 === (t = B(t)) || "millisecond" === t || !this.isValid()) return this;
          var i = this._isUTC ? ti : $e;
          switch (t) {
            case "year":
              e = i(this.year(), 0, 1);
              break;
            case "quarter":
              e = i(this.year(), this.month() - this.month() % 3, 1);
              break;
            case "month":
              e = i(this.year(), this.month(), 1);
              break;
            case "week":
              e = i(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;
            case "day":
            case "date":
              e = i(this.year(), this.month(), this.date());
              break;
            case "hour":
              e = this._d.valueOf(), e -= qe(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
              break;
            case "minute":
              e = this._d.valueOf(), e -= qe(e, 6e4);
              break;
            case "second":
              e = this._d.valueOf(), e -= qe(e, 1e3)
          }
          return this._d.setTime(e), n.updateOffset(this, !0), this
        }, hi.subtract = je, hi.toArray = function() {
          var t = this;
          return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
        }, hi.toObject = function() {
          var t = this;
          return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
          }
        }, hi.toDate = function() {
          return new Date(this.valueOf())
        }, hi.toISOString = function(t) {
          if (!this.isValid()) return null;
          var e = !0 !== t,
            i = e ? this.clone().utc() : this;
          return i.year() < 0 || i.year() > 9999 ? z(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : M(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", z(i, "Z")) : z(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, hi.inspect = function() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var t = "moment",
            e = "";
          this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
          var i = "[" + t + '("]',
            n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            o = e + '[")]';
          return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + o)
        }, hi.toJSON = function() {
          return this.isValid() ? this.toISOString() : null
        }, hi.toString = function() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, hi.unix = function() {
          return Math.floor(this.valueOf() / 1e3)
        }, hi.valueOf = function() {
          return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, hi.creationData = function() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          }
        }, hi.year = xt, hi.isLeapYear = function() {
          return bt(this.year())
        }, hi.weekYear = function(t) {
          return ii.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, hi.isoWeekYear = function(t) {
          return ii.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, hi.quarter = hi.quarters = function(t) {
          return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }, hi.month = Mt, hi.daysInMonth = function() {
          return Dt(this.year(), this.month())
        }, hi.week = hi.weeks = function(t) {
          var e = this.localeData().week(this);
          return null == t ? e : this.add(7 * (t - e), "d")
        }, hi.isoWeek = hi.isoWeeks = function(t) {
          var e = Wt(this, 1, 4).week;
          return null == t ? e : this.add(7 * (t - e), "d")
        }, hi.weeksInYear = function() {
          var t = this.localeData()._week;
          return Xt(this.year(), t.dow, t.doy)
        }, hi.isoWeeksInYear = function() {
          return Xt(this.year(), 1, 4)
        }, hi.date = oi, hi.day = hi.days = function(t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != t ? (t = function(t, e) {
            return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
          }(t, this.localeData()), this.add(t - e, "d")) : e
        }, hi.weekday = function(t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == t ? e : this.add(t - e, "d")
        }, hi.isoWeekday = function(t) {
          if (!this.isValid()) return null != t ? this : NaN;
          if (null != t) {
            var e = function(t, e) {
              return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
            }(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7)
          }
          return this.day() || 7
        }, hi.dayOfYear = function(t) {
          var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return null == t ? e : this.add(t - e, "d")
        }, hi.hour = hi.hours = $t, hi.minute = hi.minutes = ri, hi.second = hi.seconds = ai, hi.millisecond = hi.milliseconds = ui, hi.utcOffset = function(t, e, i) {
          var o, r = this._offset || 0;
          if (!this.isValid()) return null != t ? this : NaN;
          if (null != t) {
            if ("string" == typeof t) {
              if (null === (t = Be(at, t))) return this
            } else Math.abs(t) < 16 && !i && (t *= 60);
            return !this._isUTC && e && (o = Ae(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), r !== t && (!e || this._changeInProgress ? ze(this, Ye(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
          }
          return this._isUTC ? r : Ae(this)
        }, hi.utc = function(t) {
          return this.utcOffset(0, t)
        }, hi.local = function(t) {
          return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ae(this), "m")), this
        }, hi.parseZone = function() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ("string" == typeof this._i) {
            var t = Be(st, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
          }
          return this
        }, hi.hasAlignedHourOffset = function(t) {
          return !!this.isValid() && (t = t ? Ie(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
        }, hi.isDST = function() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, hi.isLocal = function() {
          return !!this.isValid() && !this._isUTC
        }, hi.isUtcOffset = function() {
          return !!this.isValid() && this._isUTC
        }, hi.isUtc = We, hi.isUTC = We, hi.zoneAbbr = function() {
          return this._isUTC ? "UTC" : ""
        }, hi.zoneName = function() {
          return this._isUTC ? "Coordinated Universal Time" : ""
        }, hi.dates = C("dates accessor is deprecated. Use date instead.", oi), hi.months = C("months accessor is deprecated. Use month instead", Mt), hi.years = C("years accessor is deprecated. Use year instead", xt), hi.zone = C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(t, e) {
          return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        })), hi.isDSTShifted = C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
          if (!a(this._isDSTShifted)) return this._isDSTShifted;
          var t = {};
          if (b(t, this), (t = ke(t))._a) {
            var e = t._isUTC ? p(t._a) : Ie(t._a);
            this._isDSTShifted = this.isValid() && D(t._a, e.toArray()) > 0
          } else this._isDSTShifted = !1;
          return this._isDSTShifted
        }));
        var ci = N.prototype;

        function pi(t, e, i, n) {
          var o = ae(),
            r = p().set(n, e);
          return o[i](r, t)
        }

        function mi(t, e, i) {
          if (l(t) && (e = t, t = void 0), t = t || "", null != e) return pi(t, e, i, "month");
          var n, o = [];
          for (n = 0; n < 12; n++) o[n] = pi(t, n, i, "month");
          return o
        }

        function fi(t, e, i, n) {
          "boolean" == typeof t ? (l(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, l(e) && (i = e, e = void 0), e = e || "");
          var o, r = ae(),
            s = t ? r._week.dow : 0;
          if (null != i) return pi(e, (i + s) % 7, n, "day");
          var a = [];
          for (o = 0; o < 7; o++) a[o] = pi(e, (o + s) % 7, n, "day");
          return a
        }
        ci.calendar = function(t, e, i) {
          var n = this._calendar[t] || this._calendar.sameElse;
          return M(n) ? n.call(e, i) : n
        }, ci.longDateFormat = function(t) {
          var e = this._longDateFormat[t],
            i = this._longDateFormat[t.toUpperCase()];
          return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, (function(t) {
            return t.slice(1)
          })), this._longDateFormat[t])
        }, ci.invalidDate = function() {
          return this._invalidDate
        }, ci.ordinal = function(t) {
          return this._ordinal.replace("%d", t)
        }, ci.preparse = di, ci.postformat = di, ci.relativeTime = function(t, e, i, n) {
          var o = this._relativeTime[i];
          return M(o) ? o(t, e, i, n) : o.replace(/%d/i, t)
        }, ci.pastFuture = function(t, e) {
          var i = this._relativeTime[t > 0 ? "future" : "past"];
          return M(i) ? i(e) : i.replace(/%s/i, e)
        }, ci.set = function(t) {
          var e, i;
          for (i in t) M(e = t[i]) ? this[i] = e : this["_" + i] = e;
          this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, ci.months = function(t, e) {
          return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || It).test(e) ? "format" : "standalone"][t.month()] : r(this._months) ? this._months : this._months.standalone
        }, ci.monthsShort = function(t, e) {
          return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[It.test(e) ? "format" : "standalone"][t.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, ci.monthsParse = function(t, e, i) {
          var n, o, r;
          if (this._monthsParseExact) return Gt.call(this, t, e, i);
          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (o = p([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
            if (!i && this._monthsParse[n].test(t)) return n
          }
        }, ci.monthsRegex = function(t) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Nt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }, ci.monthsShortRegex = function(t) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Qt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, ci.week = function(t) {
          return Wt(t, this._week.dow, this._week.doy).week
        }, ci.firstDayOfYear = function() {
          return this._week.doy
        }, ci.firstDayOfWeek = function() {
          return this._week.dow
        }, ci.weekdays = function(t, e) {
          var i = r(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
          return !0 === t ? Tt(i, this._week.dow) : t ? i[t.day()] : i
        }, ci.weekdaysMin = function(t) {
          return !0 === t ? Tt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
        }, ci.weekdaysShort = function(t) {
          return !0 === t ? Tt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
        }, ci.weekdaysParse = function(t, e, i) {
          var n, o, r;
          if (this._weekdaysParseExact) return Ut.call(this, t, e, i);
          for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (o = p([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
            if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
            if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
            if (!i && this._weekdaysParse[n].test(t)) return n
          }
        }, ci.weekdaysRegex = function(t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ht.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = zt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, ci.weekdaysShortRegex = function(t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ht.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Vt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, ci.weekdaysMinRegex = function(t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Ht.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = jt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, ci.isPM = function(t) {
          return "p" === (t + "").toLowerCase().charAt(0)
        }, ci.meridiem = function(t, e, i) {
          return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        }, re("en", {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(t) {
            var e = t % 10;
            return t + (1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
          }
        }), n.lang = C("moment.lang is deprecated. Use moment.locale instead.", re), n.langData = C("moment.langData is deprecated. Use moment.localeData instead.", ae);
        var gi = Math.abs;

        function vi(t, e, i, n) {
          var o = Ye(e, i);
          return t._milliseconds += n * o._milliseconds, t._days += n * o._days, t._months += n * o._months, t._bubble()
        }

        function bi(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t)
        }

        function yi(t) {
          return 4800 * t / 146097
        }

        function xi(t) {
          return 146097 * t / 4800
        }

        function wi(t) {
          return function() {
            return this.as(t)
          }
        }
        var _i = wi("ms"),
          ki = wi("s"),
          Di = wi("m"),
          Ii = wi("h"),
          Ci = wi("d"),
          Li = wi("w"),
          Gi = wi("M"),
          Si = wi("Q"),
          Mi = wi("y");

        function Qi(t) {
          return function() {
            return this.isValid() ? this._data[t] : NaN
          }
        }
        var Ni = Qi("milliseconds"),
          Fi = Qi("seconds"),
          Zi = Qi("minutes"),
          Bi = Qi("hours"),
          Oi = Qi("days"),
          Ai = Qi("months"),
          Wi = Qi("years"),
          Xi = Math.round,
          Ti = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
          };

        function Yi(t, e, i, n, o) {
          return o.relativeTime(e || 1, !!i, t, n)
        }

        function Ei(t, e, i) {
          var n = Ye(t).abs(),
            o = Xi(n.as("s")),
            r = Xi(n.as("m")),
            s = Xi(n.as("h")),
            a = Xi(n.as("d")),
            l = Xi(n.as("M")),
            u = Xi(n.as("y")),
            h = o <= Ti.ss && ["s", o] || o < Ti.s && ["ss", o] || r <= 1 && ["m"] || r < Ti.m && ["mm", r] || s <= 1 && ["h"] || s < Ti.h && ["hh", s] || a <= 1 && ["d"] || a < Ti.d && ["dd", a] || l <= 1 && ["M"] || l < Ti.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
          return h[2] = e, h[3] = +t > 0, h[4] = i, Yi.apply(null, h)
        }
        var Ri = Math.abs;

        function Ui(t) {
          return (t > 0) - (t < 0) || +t
        }

        function zi() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t, e, i = Ri(this._milliseconds) / 1e3,
            n = Ri(this._days),
            o = Ri(this._months);
          t = _(i / 60), e = _(t / 60), i %= 60, t %= 60;
          var r = _(o / 12),
            s = o %= 12,
            a = n,
            l = e,
            u = t,
            h = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
            d = this.asSeconds();
          if (!d) return "P0D";
          var c = d < 0 ? "-" : "",
            p = Ui(this._months) !== Ui(d) ? "-" : "",
            m = Ui(this._days) !== Ui(d) ? "-" : "",
            f = Ui(this._milliseconds) !== Ui(d) ? "-" : "";
          return c + "P" + (r ? p + r + "Y" : "") + (s ? p + s + "M" : "") + (a ? m + a + "D" : "") + (l || u || h ? "T" : "") + (l ? f + l + "H" : "") + (u ? f + u + "M" : "") + (h ? f + h + "S" : "")
        }
        var Vi = Me.prototype;
        return Vi.isValid = function() {
          return this._isValid
        }, Vi.abs = function() {
          var t = this._data;
          return this._milliseconds = gi(this._milliseconds), this._days = gi(this._days), this._months = gi(this._months), t.milliseconds = gi(t.milliseconds), t.seconds = gi(t.seconds), t.minutes = gi(t.minutes), t.hours = gi(t.hours), t.months = gi(t.months), t.years = gi(t.years), this
        }, Vi.add = function(t, e) {
          return vi(this, t, e, 1)
        }, Vi.subtract = function(t, e) {
          return vi(this, t, e, -1)
        }, Vi.as = function(t) {
          if (!this.isValid()) return NaN;
          var e, i, n = this._milliseconds;
          if ("month" === (t = B(t)) || "quarter" === t || "year" === t) switch (e = this._days + n / 864e5, i = this._months + yi(e), t) {
            case "month":
              return i;
            case "quarter":
              return i / 3;
            case "year":
              return i / 12
          } else switch (e = this._days + Math.round(xi(this._months)), t) {
            case "week":
              return e / 7 + n / 6048e5;
            case "day":
              return e + n / 864e5;
            case "hour":
              return 24 * e + n / 36e5;
            case "minute":
              return 1440 * e + n / 6e4;
            case "second":
              return 86400 * e + n / 1e3;
            case "millisecond":
              return Math.floor(864e5 * e) + n;
            default:
              throw new Error("Unknown unit " + t)
          }
        }, Vi.asMilliseconds = _i, Vi.asSeconds = ki, Vi.asMinutes = Di, Vi.asHours = Ii, Vi.asDays = Ci, Vi.asWeeks = Li, Vi.asMonths = Gi, Vi.asQuarters = Si, Vi.asYears = Mi, Vi.valueOf = function() {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
        }, Vi._bubble = function() {
          var t, e, i, n, o, r = this._milliseconds,
            s = this._days,
            a = this._months,
            l = this._data;
          return r >= 0 && s >= 0 && a >= 0 || r <= 0 && s <= 0 && a <= 0 || (r += 864e5 * bi(xi(a) + s), s = 0, a = 0), l.milliseconds = r % 1e3, t = _(r / 1e3), l.seconds = t % 60, e = _(t / 60), l.minutes = e % 60, i = _(e / 60), l.hours = i % 24, s += _(i / 24), o = _(yi(s)), a += o, s -= bi(xi(o)), n = _(a / 12), a %= 12, l.days = s, l.months = a, l.years = n, this
        }, Vi.clone = function() {
          return Ye(this)
        }, Vi.get = function(t) {
          return t = B(t), this.isValid() ? this[t + "s"]() : NaN
        }, Vi.milliseconds = Ni, Vi.seconds = Fi, Vi.minutes = Zi, Vi.hours = Bi, Vi.days = Oi, Vi.weeks = function() {
          return _(this.days() / 7)
        }, Vi.months = Ai, Vi.years = Wi, Vi.humanize = function(t) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e = this.localeData(),
            i = Ei(this, !t, e);
          return t && (i = e.pastFuture(+this, i)), e.postformat(i)
        }, Vi.toISOString = zi, Vi.toString = zi, Vi.toJSON = zi, Vi.locale = Pe, Vi.localeData = Ke, Vi.toIsoString = C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zi), Vi.lang = Je, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), ht("x", rt), ht("X", /[+-]?\d+(\.\d{1,3})?/), mt("X", (function(t, e, i) {
          i._d = new Date(1e3 * parseFloat(t, 10))
        })), mt("x", (function(t, e, i) {
          i._d = new Date(k(t))
        })), n.version = "2.24.0", e = Ie, n.fn = hi, n.min = function() {
          var t = [].slice.call(arguments, 0);
          return Ge("isBefore", t)
        }, n.max = function() {
          var t = [].slice.call(arguments, 0);
          return Ge("isAfter", t)
        }, n.now = function() {
          return Date.now ? Date.now() : +new Date
        }, n.utc = p, n.unix = function(t) {
          return Ie(1e3 * t)
        }, n.months = function(t, e) {
          return mi(t, e, "months")
        }, n.isDate = u, n.locale = re, n.invalid = g, n.duration = Ye, n.isMoment = w, n.weekdays = function(t, e, i) {
          return fi(t, e, i, "weekdays")
        }, n.parseZone = function() {
          return Ie.apply(null, arguments).parseZone()
        }, n.localeData = ae, n.isDuration = Qe, n.monthsShort = function(t, e) {
          return mi(t, e, "monthsShort")
        }, n.weekdaysMin = function(t, e, i) {
          return fi(t, e, i, "weekdaysMin")
        }, n.defineLocale = se, n.updateLocale = function(t, e) {
          if (null != e) {
            var i, n, o = te;
            null != (n = oe(t)) && (o = n._config), (i = new N(e = Q(o, e))).parentLocale = ee[t], ee[t] = i, re(t)
          } else null != ee[t] && (null != ee[t].parentLocale ? ee[t] = ee[t].parentLocale : null != ee[t] && delete ee[t]);
          return ee[t]
        }, n.locales = function() {
          return L(ee)
        }, n.weekdaysShort = function(t, e, i) {
          return fi(t, e, i, "weekdaysShort")
        }, n.normalizeUnits = B, n.relativeTimeRounding = function(t) {
          return void 0 === t ? Xi : "function" == typeof t && (Xi = t, !0)
        }, n.relativeTimeThreshold = function(t, e) {
          return void 0 !== Ti[t] && (void 0 === e ? Ti[t] : (Ti[t] = e, "s" === t && (Ti.ss = e - 1), !0))
        }, n.calendarFormat = function(t, e) {
          var i = t.diff(e, "days", !0);
          return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
        }, n.prototype = hi, n.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM"
        }, n
      }()
    })),
    s = (i((function(t, e) {
      (function(t) {
        function e(t, e, i, n) {
          var o = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [t + " Tage", t + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [t + " Monate", t + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [t + " Jahre", t + " Jahren"]
          };
          return e ? o[i][0] : o[i][1]
        }
        t.defineLocale("de", {
          months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
          monthsParseExact: !0,
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: e,
            mm: "%d Minuten",
            h: e,
            hh: "%d Stunden",
            d: e,
            dd: e,
            M: e,
            MM: e,
            y: e,
            yy: e
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        var e = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          i = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        t.defineLocale("es", {
          months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
          monthsShort: function(t, n) {
            return t ? /-MMM-/.test(n) ? i[t.month()] : e[t.month()] : e
          },
          monthsRegex: o,
          monthsShortRegex: o,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
          },
          calendar: {
            sameDay: function() {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
              return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        t.defineLocale("fr", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function(t, e) {
            switch (e) {
              case "D":
                return t + (1 === t ? "er" : "");
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
                return t + (1 === t ? "er" : "e");
              case "w":
              case "W":
                return t + (1 === t ? "re" : "e")
            }
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        t.defineLocale("it", {
          months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
          weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[la scorsa] dddd [alle] LT";
                default:
                  return "[lo scorso] dddd [alle] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: function(t) {
              return (/^[0-9].+$/.test(t) ? "tra" : "in") + " " + t
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        t.defineLocale("ja", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
          weekdaysShort: "日_月_火_水_木_金_土".split("_"),
          weekdaysMin: "日_月_火_水_木_金_土".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日(ddd) HH:mm"
          },
          meridiemParse: /午前|午後/i,
          isPM: function(t) {
            return "午後" === t
          },
          meridiem: function(t, e, i) {
            return t < 12 ? "午前" : "午後"
          },
          calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: function(t) {
              return t.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
            },
            lastDay: "[昨日] LT",
            lastWeek: function(t) {
              return this.week() < t.week() ? "[先週]dddd LT" : "dddd LT"
            },
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function(t, e) {
            switch (e) {
              case "d":
              case "D":
              case "DDD":
                return t + "日";
              default:
                return t
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            ss: "%d秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        var e = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          i = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        t.defineLocale("nl", {
          months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
          monthsShort: function(t, n) {
            return t ? /-MMM-/.test(n) ? i[t.month()] : e[t.month()] : e
          },
          monthsRegex: o,
          monthsShortRegex: o,
          monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function(t) {
            return t + (1 === t || 8 === t || t >= 20 ? "ste" : "de")
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        var e = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
          i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function n(t) {
          return t % 10 < 5 && t % 10 > 1 && ~~(t / 10) % 10 != 1
        }

        function o(t, e, i) {
          var o = t + " ";
          switch (i) {
            case "ss":
              return o + (n(t) ? "sekundy" : "sekund");
            case "m":
              return e ? "minuta" : "minutę";
            case "mm":
              return o + (n(t) ? "minuty" : "minut");
            case "h":
              return e ? "godzina" : "godzinę";
            case "hh":
              return o + (n(t) ? "godziny" : "godzin");
            case "MM":
              return o + (n(t) ? "miesiące" : "miesięcy");
            case "yy":
              return o + (n(t) ? "lata" : "lat")
          }
        }
        t.defineLocale("pl", {
          months: function(t, n) {
            return t ? "" === n ? "(" + i[t.month()] + "|" + e[t.month()] + ")" : /D MMMM/.test(n) ? i[t.month()] : e[t.month()] : e
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
          weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
          weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
          weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[W niedzielę o] LT";
                case 2:
                  return "[We wtorek o] LT";
                case 3:
                  return "[W środę o] LT";
                case 6:
                  return "[W sobotę o] LT";
                default:
                  return "[W] dddd [o] LT"
              }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[W zeszłą niedzielę o] LT";
                case 3:
                  return "[W zeszłą środę o] LT";
                case 6:
                  return "[W zeszłą sobotę o] LT";
                default:
                  return "[W zeszły] dddd [o] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: o,
            m: o,
            mm: o,
            h: o,
            hh: o,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: o,
            y: "rok",
            yy: o
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        function e(t, e, i) {
          var n, o;
          return "m" === i ? e ? "минута" : "минуту" : t + " " + (n = +t, o = {
            ss: e ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: e ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
          } [i].split("_"), n % 10 == 1 && n % 100 != 11 ? o[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? o[1] : o[2])
        }
        var i = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        t.defineLocale("ru", {
          months: {
            format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
            standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
          },
          monthsShort: {
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
            standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
          },
          weekdays: {
            standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
          },
          weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          monthsParse: i,
          longMonthsParse: i,
          shortMonthsParse: i,
          monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
          monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm"
          },
          calendar: {
            sameDay: "[Сегодня, в] LT",
            nextDay: "[Завтра, в] LT",
            lastDay: "[Вчера, в] LT",
            nextWeek: function(t) {
              if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В следующее] dddd, [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В следующий] dddd, [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В следующую] dddd, [в] LT"
              }
            },
            lastWeek: function(t) {
              if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В прошлое] dddd, [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В прошлый] dddd, [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В прошлую] dddd, [в] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            ss: e,
            m: e,
            mm: e,
            h: "час",
            hh: e,
            d: "день",
            dd: e,
            M: "месяц",
            MM: e,
            y: "год",
            yy: e
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function(t) {
            return /^(дня|вечера)$/.test(t)
          },
          meridiem: function(t, e, i) {
            return t < 4 ? "ночи" : t < 12 ? "утра" : t < 17 ? "дня" : "вечера"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function(t, e) {
            switch (e) {
              case "M":
              case "d":
              case "DDD":
                return t + "-й";
              case "D":
                return t + "-го";
              case "w":
              case "W":
                return t + "-я";
              default:
                return t
            }
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      })(r)
    })), i((function(t, e) {
      (function(t) {
        function e(t, e, i) {
          var n, o;
          return "m" === i ? e ? "хвилина" : "хвилину" : "h" === i ? e ? "година" : "годину" : t + " " + (n = +t, o = {
            ss: e ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
            mm: e ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: e ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
          } [i].split("_"), n % 10 == 1 && n % 100 != 11 ? o[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? o[1] : o[2])
        }

        function i(t) {
          return function() {
            return t + "о" + (11 === this.hours() ? "б" : "") + "] LT"
          }
        }
        t.defineLocale("uk", {
          months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
          },
          monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
          weekdays: function(t, e) {
            var i = {
              nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
              accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
              genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            };
            return !0 === t ? i.nominative.slice(1, 7).concat(i.nominative.slice(0, 1)) : t ? i[/(\[[ВвУу]\]) ?dddd/.test(e) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(e) ? "genitive" : "nominative"][t.day()] : i.nominative
          },
          weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
          },
          calendar: {
            sameDay: i("[Сьогодні "),
            nextDay: i("[Завтра "),
            lastDay: i("[Вчора "),
            nextWeek: i("[У] dddd ["),
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return i("[Минулої] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                  return i("[Минулого] dddd [").call(this)
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            ss: e,
            m: e,
            mm: e,
            h: "годину",
            hh: e,
            d: "день",
            dd: e,
            M: "місяць",
            MM: e,
            y: "рік",
            yy: e
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function(t) {
            return /^(дня|вечора)$/.test(t)
          },
          meridiem: function(t, e, i) {
            return t < 4 ? "ночі" : t < 12 ? "ранку" : t < 17 ? "дня" : "вечора"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function(t, e) {
            switch (e) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return t + "-й";
              case "D":
                return t + "-го";
              default:
                return t
            }
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      })(r)
    })), function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }),
    a = {}.toString,
    l = function(t) {
      return a.call(t).slice(8, -1)
    },
    u = "".split,
    h = s((function() {
      return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
      return "String" == l(t) ? u.call(t, "") : Object(t)
    } : Object,
    d = function(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t
    },
    c = function(t) {
      return h(d(t))
    },
    p = {},
    m = function(t) {
      return t && t.Math == Math && t
    },
    f = m("object" == typeof globalThis && globalThis) || m("object" == typeof window && window) || m("object" == typeof self && self) || m("object" == typeof e && e) || Function("return this")(),
    g = !s((function() {
      return 7 != Object.defineProperty({}, 1, {
        get: function() {
          return 7
        }
      })[1]
    })),
    v = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    },
    b = f.document,
    y = v(b) && v(b.createElement),
    x = function(t) {
      return y ? b.createElement(t) : {}
    },
    w = !g && !s((function() {
      return 7 != Object.defineProperty(x("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })),
    _ = function(t) {
      if (!v(t)) throw TypeError(String(t) + " is not an object");
      return t
    },
    k = function(t, e) {
      if (!v(t)) return t;
      var i, n;
      if (e && "function" == typeof(i = t.toString) && !v(n = i.call(t))) return n;
      if ("function" == typeof(i = t.valueOf) && !v(n = i.call(t))) return n;
      if (!e && "function" == typeof(i = t.toString) && !v(n = i.call(t))) return n;
      throw TypeError("Can't convert object to primitive value")
    },
    D = Object.defineProperty,
    I = {
      f: g ? D : function(t, e, i) {
        if (_(t), e = k(e, !0), _(i), w) try {
          return D(t, e, i)
        } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (t[e] = i.value), t
      }
    },
    C = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      }
    },
    L = g ? function(t, e, i) {
      return I.f(t, e, C(1, i))
    } : function(t, e, i) {
      return t[e] = i, t
    },
    G = f["__core-js_shared__"] || function(t, e) {
      try {
        L(f, t, e)
      } catch (i) {
        f[t] = e
      }
      return e
    }("__core-js_shared__", {}),
    S = Function.toString;
  "function" != typeof G.inspectSource && (G.inspectSource = function(t) {
    return S.call(t)
  });
  var M, Q, N, F = G.inspectSource,
    Z = f.WeakMap,
    B = "function" == typeof Z && /native code/.test(F(Z)),
    O = {}.hasOwnProperty,
    A = function(t, e) {
      return O.call(t, e)
    },
    W = i((function(t) {
      (t.exports = function(t, e) {
        return G[t] || (G[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: "3.6.4",
        mode: "pure",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    })),
    X = 0,
    T = Math.random(),
    Y = function(t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++X + T).toString(36)
    },
    E = W("keys"),
    R = function(t) {
      return E[t] || (E[t] = Y(t))
    },
    U = {},
    z = f.WeakMap;
  if (B) {
    var V = new z,
      j = V.get,
      H = V.has,
      P = V.set;
    M = function(t, e) {
      return P.call(V, t, e), e
    }, Q = function(t) {
      return j.call(V, t) || {}
    }, N = function(t) {
      return H.call(V, t)
    }
  } else {
    var J = R("state");
    U[J] = !0, M = function(t, e) {
      return L(t, J, e), e
    }, Q = function(t) {
      return A(t, J) ? t[J] : {}
    }, N = function(t) {
      return A(t, J)
    }
  }
  var K, q, $, tt = {
      set: M,
      get: Q,
      has: N,
      enforce: function(t) {
        return N(t) ? Q(t) : M(t, {})
      },
      getterFor: function(t) {
        return function(e) {
          var i;
          if (!v(e) || (i = Q(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return i
        }
      }
    },
    et = {}.propertyIsEnumerable,
    it = Object.getOwnPropertyDescriptor,
    nt = {
      f: it && !et.call({
        1: 2
      }, 1) ? function(t) {
        var e = it(this, t);
        return !!e && e.enumerable
      } : et
    },
    ot = Object.getOwnPropertyDescriptor,
    rt = {
      f: g ? ot : function(t, e) {
        if (t = c(t), e = k(e, !0), w) try {
          return ot(t, e)
        } catch (t) {}
        if (A(t, e)) return C(!nt.f.call(t, e), t[e])
      }
    },
    st = /#|\.prototype\./,
    at = function(t, e) {
      var i = ut[lt(t)];
      return i == dt || i != ht && ("function" == typeof e ? s(e) : !!e)
    },
    lt = at.normalize = function(t) {
      return String(t).replace(st, ".").toLowerCase()
    },
    ut = at.data = {},
    ht = at.NATIVE = "N",
    dt = at.POLYFILL = "P",
    ct = at,
    pt = {},
    mt = function(t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t
    },
    ft = function(t, e, i) {
      if (mt(t), void 0 === e) return t;
      switch (i) {
        case 0:
          return function() {
            return t.call(e)
          };
        case 1:
          return function(i) {
            return t.call(e, i)
          };
        case 2:
          return function(i, n) {
            return t.call(e, i, n)
          };
        case 3:
          return function(i, n, o) {
            return t.call(e, i, n, o)
          }
      }
      return function() {
        return t.apply(e, arguments)
      }
    },
    gt = rt.f,
    vt = function(t) {
      var e = function(e, i, n) {
        if (this instanceof t) {
          switch (arguments.length) {
            case 0:
              return new t;
            case 1:
              return new t(e);
            case 2:
              return new t(e, i)
          }
          return new t(e, i, n)
        }
        return t.apply(this, arguments)
      };
      return e.prototype = t.prototype, e
    },
    bt = function(t, e) {
      var i, n, o, r, s, a, l, u, h = t.target,
        d = t.global,
        c = t.stat,
        p = t.proto,
        m = d ? f : c ? f[h] : (f[h] || {}).prototype,
        g = d ? pt : pt[h] || (pt[h] = {}),
        v = g.prototype;
      for (o in e) i = !ct(d ? o : h + (c ? "." : "#") + o, t.forced) && m && A(m, o), s = g[o], i && (a = t.noTargetGet ? (u = gt(m, o)) && u.value : m[o]), r = i && a ? a : e[o], i && typeof s == typeof r || (l = t.bind && i ? ft(r, f) : t.wrap && i ? vt(r) : p && "function" == typeof r ? ft(Function.call, r) : r, (t.sham || r && r.sham || s && s.sham) && L(l, "sham", !0), g[o] = l, p && (A(pt, n = h + "Prototype") || L(pt, n, {}), pt[n][o] = r, t.real && v && !v[o] && L(v, o, r)))
    },
    yt = function(t) {
      return Object(d(t))
    },
    xt = !s((function() {
      function t() {}
      return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })),
    wt = R("IE_PROTO"),
    _t = Object.prototype,
    kt = xt ? Object.getPrototypeOf : function(t) {
      return t = yt(t), A(t, wt) ? t[wt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? _t : null
    },
    Dt = !!Object.getOwnPropertySymbols && !s((function() {
      return !String(Symbol())
    })),
    It = Dt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Ct = W("wks"),
    Lt = f.Symbol,
    Gt = It ? Lt : Lt && Lt.withoutSetter || Y,
    St = function(t) {
      return A(Ct, t) || (Dt && A(Lt, t) ? Ct[t] = Lt[t] : Ct[t] = Gt("Symbol." + t)), Ct[t]
    },
    Mt = (St("iterator"), !1);
  [].keys && ("next" in ($ = [].keys()) ? (q = kt(kt($))) !== Object.prototype && (K = q) : Mt = !0), null == K && (K = {});
  var Qt, Nt = {
      IteratorPrototype: K,
      BUGGY_SAFARI_ITERATORS: Mt
    },
    Ft = Math.ceil,
    Zt = Math.floor,
    Bt = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? Zt : Ft)(t)
    },
    Ot = Math.min,
    At = function(t) {
      return t > 0 ? Ot(Bt(t), 9007199254740991) : 0
    },
    Wt = Math.max,
    Xt = Math.min,
    Tt = function(t, e) {
      var i = Bt(t);
      return i < 0 ? Wt(i + e, 0) : Xt(i, e)
    },
    Yt = function(t) {
      return function(e, i, n) {
        var o, r = c(e),
          s = At(r.length),
          a = Tt(n, s);
        if (t && i != i) {
          for (; s > a;)
            if ((o = r[a++]) != o) return !0
        } else
          for (; s > a; a++)
            if ((t || a in r) && r[a] === i) return t || a || 0;
        return !t && -1
      }
    },
    Et = {
      includes: Yt(!0),
      indexOf: Yt(!1)
    },
    Rt = Et.indexOf,
    Ut = function(t, e) {
      var i, n = c(t),
        o = 0,
        r = [];
      for (i in n) !A(U, i) && A(n, i) && r.push(i);
      for (; e.length > o;) A(n, i = e[o++]) && (~Rt(r, i) || r.push(i));
      return r
    },
    zt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Vt = Object.keys || function(t) {
      return Ut(t, zt)
    },
    jt = g ? Object.defineProperties : function(t, e) {
      _(t);
      for (var i, n = Vt(e), o = n.length, r = 0; o > r;) I.f(t, i = n[r++], e[i]);
      return t
    },
    Ht = function(t) {
      return "function" == typeof t ? t : void 0
    },
    Pt = function(t, e) {
      return arguments.length < 2 ? Ht(pt[t]) || Ht(f[t]) : pt[t] && pt[t][e] || f[t] && f[t][e]
    },
    Jt = Pt("document", "documentElement"),
    Kt = R("IE_PROTO"),
    qt = function() {},
    $t = function(t) {
      return "<script>" + t + "<\/script>"
    },
    te = function() {
      try {
        Qt = document.domain && new ActiveXObject("htmlfile")
      } catch (t) {}
      var t, e;
      te = Qt ? function(t) {
        t.write($t("")), t.close();
        var e = t.parentWindow.Object;
        return t = null, e
      }(Qt) : ((e = x("iframe")).style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write($t("document.F=Object")), t.close(), t.F);
      for (var i = zt.length; i--;) delete te.prototype[zt[i]];
      return te()
    };
  U[Kt] = !0;
  var ee = Object.create || function(t, e) {
      var i;
      return null !== t ? (qt.prototype = _(t), i = new qt, qt.prototype = null, i[Kt] = t) : i = te(), void 0 === e ? i : jt(i, e)
    },
    ie = {};
  ie[St("toStringTag")] = "z";
  var ne = "[object z]" === String(ie),
    oe = St("toStringTag"),
    re = "Arguments" == l(function() {
      return arguments
    }()),
    se = ne ? l : function(t) {
      var e, i, n;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) {
        try {
          return t[e]
        } catch (t) {}
      }(e = Object(t), oe)) ? i : re ? l(e) : "Object" == (n = l(e)) && "function" == typeof e.callee ? "Arguments" : n
    },
    ae = ne ? {}.toString : function() {
      return "[object " + se(this) + "]"
    },
    le = I.f,
    ue = St("toStringTag"),
    he = function(t, e, i, n) {
      if (t) {
        var o = i ? t : t.prototype;
        A(o, ue) || le(o, ue, {
          configurable: !0,
          value: e
        }), n && !ne && L(o, "toString", ae)
      }
    },
    de = Nt.IteratorPrototype,
    ce = function() {
      return this
    },
    pe = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var t, e = !1,
        i = {};
      try {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), e = i instanceof Array
      } catch (t) {}
      return function(i, n) {
        return _(i),
          function(t) {
            if (!v(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
          }(n), e ? t.call(i, n) : i.__proto__ = n, i
      }
    }() : void 0),
    me = function(t, e, i, n) {
      n && n.enumerable ? t[e] = i : L(t, e, i)
    },
    fe = Nt.IteratorPrototype,
    ge = Nt.BUGGY_SAFARI_ITERATORS,
    ve = St("iterator"),
    be = function() {
      return this
    },
    ye = function(t, e, i, n, o, r, s) {
      ! function(t, e, i) {
        var n = e + " Iterator";
        t.prototype = ee(de, {
          next: C(1, i)
        }), he(t, n, !1, !0), p[n] = ce
      }(i, e, n);
      var a, l, u, h = function(t) {
          if (t === o && g) return g;
          if (!ge && t in m) return m[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function() {
                return new i(this, t)
              }
          }
          return function() {
            return new i(this)
          }
        },
        d = e + " Iterator",
        c = !1,
        m = t.prototype,
        f = m[ve] || m["@@iterator"] || o && m[o],
        g = !ge && f || h(o),
        v = "Array" == e && m.entries || f;
      if (v && (a = kt(v.call(new t)), fe !== Object.prototype && a.next && (he(a, d, !0, !0), p[d] = be)), "values" == o && f && "values" !== f.name && (c = !0, g = function() {
          return f.call(this)
        }), s && m[ve] !== g && L(m, ve, g), p[e] = g, o)
        if (l = {
            values: h("values"),
            keys: r ? g : h("keys"),
            entries: h("entries")
          }, s)
          for (u in l) !ge && !c && u in m || me(m, u, l[u]);
        else bt({
          target: e,
          proto: !0,
          forced: ge || c
        }, l);
      return l
    },
    xe = tt.set,
    we = tt.getterFor("Array Iterator");
  ye(Array, "Array", (function(t, e) {
    xe(this, {
      type: "Array Iterator",
      target: c(t),
      index: 0,
      kind: e
    })
  }), (function() {
    var t = we(this),
      e = t.target,
      i = t.kind,
      n = t.index++;
    return !e || n >= e.length ? (t.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == i ? {
      value: n,
      done: !1
    } : "values" == i ? {
      value: e[n],
      done: !1
    } : {
      value: [n, e[n]],
      done: !1
    }
  }), "values");
  p.Arguments = p.Array;
  var _e = St("toStringTag");
  for (var ke in {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    }) {
    var De = f[ke],
      Ie = De && De.prototype;
    Ie && se(Ie) !== _e && L(Ie, _e, ke), p[ke] = p.Array
  }
  var Ce = function(t) {
      return function(e, i) {
        var n, o, r = String(d(e)),
          s = Bt(i),
          a = r.length;
        return s < 0 || s >= a ? t ? "" : void 0 : (n = r.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (o = r.charCodeAt(s + 1)) < 56320 || o > 57343 ? t ? r.charAt(s) : n : t ? r.slice(s, s + 2) : o - 56320 + (n - 55296 << 10) + 65536
      }
    },
    Le = {
      codeAt: Ce(!1),
      charAt: Ce(!0)
    }.charAt,
    Ge = tt.set,
    Se = tt.getterFor("String Iterator");
  ye(String, "String", (function(t) {
    Ge(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    })
  }), (function() {
    var t, e = Se(this),
      i = e.string,
      n = e.index;
    return n >= i.length ? {
      value: void 0,
      done: !0
    } : (t = Le(i, n), e.index += t.length, {
      value: t,
      done: !1
    })
  }));
  var Me, Qe, Ne = St("iterator"),
    Fe = function(t) {
      if (null != t) return t[Ne] || t["@@iterator"] || p[se(t)]
    },
    Ze = function(t) {
      var e = Fe(t);
      if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
      return _(e.call(t))
    },
    Be = Fe,
    Oe = Array.isArray || function(t) {
      return "Array" == l(t)
    },
    Ae = function(t, e, i) {
      var n = k(e);
      n in t ? I.f(t, n, C(0, i)) : t[n] = i
    },
    We = St("species"),
    Xe = function(t, e) {
      var i;
      return Oe(t) && ("function" != typeof(i = t.constructor) || i !== Array && !Oe(i.prototype) ? v(i) && null === (i = i[We]) && (i = void 0) : i = void 0), new(void 0 === i ? Array : i)(0 === e ? 0 : e)
    },
    Te = Pt("navigator", "userAgent") || "",
    Ye = f.process,
    Ee = Ye && Ye.versions,
    Re = Ee && Ee.v8;
  Re ? Qe = (Me = Re.split("."))[0] + Me[1] : Te && (!(Me = Te.match(/Edge\/(\d+)/)) || Me[1] >= 74) && (Me = Te.match(/Chrome\/(\d+)/)) && (Qe = Me[1]);
  var Ue = Qe && +Qe,
    ze = St("species"),
    Ve = function(t) {
      return Ue >= 51 || !s((function() {
        var e = [];
        return (e.constructor = {})[ze] = function() {
          return {
            foo: 1
          }
        }, 1 !== e[t](Boolean).foo
      }))
    },
    je = St("isConcatSpreadable"),
    He = Ue >= 51 || !s((function() {
      var t = [];
      return t[je] = !1, t.concat()[0] !== t
    })),
    Pe = Ve("concat"),
    Je = function(t) {
      if (!v(t)) return !1;
      var e = t[je];
      return void 0 !== e ? !!e : Oe(t)
    };
  bt({
    target: "Array",
    proto: !0,
    forced: !He || !Pe
  }, {
    concat: function(t) {
      var e, i, n, o, r, s = yt(this),
        a = Xe(s, 0),
        l = 0;
      for (e = -1, n = arguments.length; e < n; e++)
        if (r = -1 === e ? s : arguments[e], Je(r)) {
          if (l + (o = At(r.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          for (i = 0; i < o; i++, l++) i in r && Ae(a, l, r[i])
        } else {
          if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          Ae(a, l++, r)
        } return a.length = l, a
    }
  });
  var Ke = Object.freeze({
      __proto__: null
    }),
    qe = zt.concat("length", "prototype"),
    $e = {
      f: Object.getOwnPropertyNames || function(t) {
        return Ut(t, qe)
      }
    },
    ti = $e.f,
    ei = {}.toString,
    ii = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    ni = {
      f: function(t) {
        return ii && "[object Window]" == ei.call(t) ? function(t) {
          try {
            return ti(t)
          } catch (t) {
            return ii.slice()
          }
        }(t) : ti(c(t))
      }
    },
    oi = {
      f: Object.getOwnPropertySymbols
    },
    ri = {
      f: St
    },
    si = I.f,
    ai = function(t) {
      var e = pt.Symbol || (pt.Symbol = {});
      A(e, t) || si(e, t, {
        value: ri.f(t)
      })
    },
    li = [].push,
    ui = function(t) {
      var e = 1 == t,
        i = 2 == t,
        n = 3 == t,
        o = 4 == t,
        r = 6 == t,
        s = 5 == t || r;
      return function(a, l, u, d) {
        for (var c, p, m = yt(a), f = h(m), g = ft(l, u, 3), v = At(f.length), b = 0, y = d || Xe, x = e ? y(a, v) : i ? y(a, 0) : void 0; v > b; b++)
          if ((s || b in f) && (p = g(c = f[b], b, m), t))
            if (e) x[b] = p;
            else if (p) switch (t) {
          case 3:
            return !0;
          case 5:
            return c;
          case 6:
            return b;
          case 2:
            li.call(x, c)
        } else if (o) return !1;
        return r ? -1 : n || o ? o : x
      }
    },
    hi = {
      forEach: ui(0),
      map: ui(1),
      filter: ui(2),
      some: ui(3),
      every: ui(4),
      find: ui(5),
      findIndex: ui(6)
    },
    di = hi.forEach,
    ci = R("hidden"),
    pi = St("toPrimitive"),
    mi = tt.set,
    fi = tt.getterFor("Symbol"),
    gi = Object.prototype,
    vi = f.Symbol,
    bi = Pt("JSON", "stringify"),
    yi = rt.f,
    xi = I.f,
    wi = ni.f,
    _i = nt.f,
    ki = W("symbols"),
    Di = W("op-symbols"),
    Ii = W("string-to-symbol-registry"),
    Ci = W("symbol-to-string-registry"),
    Li = W("wks"),
    Gi = f.QObject,
    Si = !Gi || !Gi.prototype || !Gi.prototype.findChild,
    Mi = g && s((function() {
      return 7 != ee(xi({}, "a", {
        get: function() {
          return xi(this, "a", {
            value: 7
          }).a
        }
      })).a
    })) ? function(t, e, i) {
      var n = yi(gi, e);
      n && delete gi[e], xi(t, e, i), n && t !== gi && xi(gi, e, n)
    } : xi,
    Qi = function(t, e) {
      var i = ki[t] = ee(vi.prototype);
      return mi(i, {
        type: "Symbol",
        tag: t,
        description: e
      }), g || (i.description = e), i
    },
    Ni = It ? function(t) {
      return "symbol" == typeof t
    } : function(t) {
      return Object(t) instanceof vi
    },
    Fi = function(t, e, i) {
      t === gi && Fi(Di, e, i), _(t);
      var n = k(e, !0);
      return _(i), A(ki, n) ? (i.enumerable ? (A(t, ci) && t[ci][n] && (t[ci][n] = !1), i = ee(i, {
        enumerable: C(0, !1)
      })) : (A(t, ci) || xi(t, ci, C(1, {})), t[ci][n] = !0), Mi(t, n, i)) : xi(t, n, i)
    },
    Zi = function(t, e) {
      _(t);
      var i = c(e),
        n = Vt(i).concat(Wi(i));
      return di(n, (function(e) {
        g && !Bi.call(i, e) || Fi(t, e, i[e])
      })), t
    },
    Bi = function(t) {
      var e = k(t, !0),
        i = _i.call(this, e);
      return !(this === gi && A(ki, e) && !A(Di, e)) && (!(i || !A(this, e) || !A(ki, e) || A(this, ci) && this[ci][e]) || i)
    },
    Oi = function(t, e) {
      var i = c(t),
        n = k(e, !0);
      if (i !== gi || !A(ki, n) || A(Di, n)) {
        var o = yi(i, n);
        return !o || !A(ki, n) || A(i, ci) && i[ci][n] || (o.enumerable = !0), o
      }
    },
    Ai = function(t) {
      var e = wi(c(t)),
        i = [];
      return di(e, (function(t) {
        A(ki, t) || A(U, t) || i.push(t)
      })), i
    },
    Wi = function(t) {
      var e = t === gi,
        i = wi(e ? Di : c(t)),
        n = [];
      return di(i, (function(t) {
        !A(ki, t) || e && !A(gi, t) || n.push(ki[t])
      })), n
    };
  if (Dt || (me((vi = function() {
      if (this instanceof vi) throw TypeError("Symbol is not a constructor");
      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        e = Y(t),
        i = function(t) {
          this === gi && i.call(Di, t), A(this, ci) && A(this[ci], e) && (this[ci][e] = !1), Mi(this, e, C(1, t))
        };
      return g && Si && Mi(gi, e, {
        configurable: !0,
        set: i
      }), Qi(e, t)
    }).prototype, "toString", (function() {
      return fi(this).tag
    })), me(vi, "withoutSetter", (function(t) {
      return Qi(Y(t), t)
    })), nt.f = Bi, I.f = Fi, rt.f = Oi, $e.f = ni.f = Ai, oi.f = Wi, ri.f = function(t) {
      return Qi(St(t), t)
    }, g && xi(vi.prototype, "description", {
      configurable: !0,
      get: function() {
        return fi(this).description
      }
    })), bt({
      global: !0,
      wrap: !0,
      forced: !Dt,
      sham: !Dt
    }, {
      Symbol: vi
    }), di(Vt(Li), (function(t) {
      ai(t)
    })), bt({
      target: "Symbol",
      stat: !0,
      forced: !Dt
    }, {
      for: function(t) {
        var e = String(t);
        if (A(Ii, e)) return Ii[e];
        var i = vi(e);
        return Ii[e] = i, Ci[i] = e, i
      },
      keyFor: function(t) {
        if (!Ni(t)) throw TypeError(t + " is not a symbol");
        if (A(Ci, t)) return Ci[t]
      },
      useSetter: function() {
        Si = !0
      },
      useSimple: function() {
        Si = !1
      }
    }), bt({
      target: "Object",
      stat: !0,
      forced: !Dt,
      sham: !g
    }, {
      create: function(t, e) {
        return void 0 === e ? ee(t) : Zi(ee(t), e)
      },
      defineProperty: Fi,
      defineProperties: Zi,
      getOwnPropertyDescriptor: Oi
    }), bt({
      target: "Object",
      stat: !0,
      forced: !Dt
    }, {
      getOwnPropertyNames: Ai,
      getOwnPropertySymbols: Wi
    }), bt({
      target: "Object",
      stat: !0,
      forced: s((function() {
        oi.f(1)
      }))
    }, {
      getOwnPropertySymbols: function(t) {
        return oi.f(yt(t))
      }
    }), bi) {
    var Xi = !Dt || s((function() {
      var t = vi();
      return "[null]" != bi([t]) || "{}" != bi({
        a: t
      }) || "{}" != bi(Object(t))
    }));
    bt({
      target: "JSON",
      stat: !0,
      forced: Xi
    }, {
      stringify: function(t, e, i) {
        for (var n, o = [t], r = 1; arguments.length > r;) o.push(arguments[r++]);
        if (n = e, (v(e) || void 0 !== t) && !Ni(t)) return Oe(e) || (e = function(t, e) {
          if ("function" == typeof n && (e = n.call(this, t, e)), !Ni(e)) return e
        }), o[1] = e, bi.apply(null, o)
      }
    })
  }
  vi.prototype[pi] || L(vi.prototype, pi, vi.prototype.valueOf), he(vi, "Symbol"), U[ci] = !0, ai("asyncIterator");
  var Ti = Object.freeze({
    __proto__: null
  });
  ai("hasInstance"), ai("isConcatSpreadable"), ai("iterator"), ai("match"), ai("matchAll"), ai("replace"), ai("search"), ai("species"), ai("split"), ai("toPrimitive"), ai("toStringTag"), ai("unscopables"), he(Math, "Math", !0), he(f.JSON, "JSON", !0), n(Ke), n(Ti);
  var Yi = pt.Symbol,
    Ei = Yi,
    Ri = function(t, e, i, n) {
      try {
        return n ? e(_(i)[0], i[1]) : e(i)
      } catch (e) {
        var o = t.return;
        throw void 0 !== o && _(o.call(t)), e
      }
    },
    Ui = St("iterator"),
    zi = Array.prototype,
    Vi = function(t) {
      return void 0 !== t && (p.Array === t || zi[Ui] === t)
    },
    ji = St("iterator"),
    Hi = !1;
  try {
    var Pi = 0,
      Ji = {
        next: function() {
          return {
            done: !!Pi++
          }
        },
        return: function() {
          Hi = !0
        }
      };
    Ji[ji] = function() {
      return this
    }, Array.from(Ji, (function() {
      throw 2
    }))
  } catch (t) {}
  var Ki = ! function(t, e) {
    if (!e && !Hi) return !1;
    var i = !1;
    try {
      var n = {};
      n[ji] = function() {
        return {
          next: function() {
            return {
              done: i = !0
            }
          }
        }
      }, t(n)
    } catch (t) {}
    return i
  }((function(t) {
    Array.from(t)
  }));
  bt({
    target: "Array",
    stat: !0,
    forced: Ki
  }, {
    from: function(t) {
      var e, i, n, o, r, s, a = yt(t),
        l = "function" == typeof this ? this : Array,
        u = arguments.length,
        h = u > 1 ? arguments[1] : void 0,
        d = void 0 !== h,
        c = Fe(a),
        p = 0;
      if (d && (h = ft(h, u > 2 ? arguments[2] : void 0, 2)), null == c || l == Array && Vi(c))
        for (i = new l(e = At(a.length)); e > p; p++) s = d ? h(a[p], p) : a[p], Ae(i, p, s);
      else
        for (r = (o = c.call(a)).next, i = new l; !(n = r.call(o)).done; p++) s = d ? Ri(o, h, [n.value, p], !0) : n.value, Ae(i, p, s);
      return i.length = p, i
    }
  });
  var qi = pt.Array.from,
    $i = qi;
  bt({
    target: "Object",
    stat: !0,
    forced: !g,
    sham: !g
  }, {
    defineProperty: I.f
  });
  var tn = i((function(t) {
      var e = pt.Object,
        i = t.exports = function(t, i, n) {
          return e.defineProperty(t, i, n)
        };
      e.defineProperty.sham && (i.sham = !0)
    })),
    en = tn;
  bt({
    target: "Object",
    stat: !0,
    forced: !g,
    sham: !g
  }, {
    defineProperties: jt
  });
  var nn = i((function(t) {
      var e = pt.Object,
        i = t.exports = function(t, i) {
          return e.defineProperties(t, i)
        };
      e.defineProperties.sham && (i.sham = !0)
    })),
    on = Pt("Reflect", "ownKeys") || function(t) {
      var e = $e.f(_(t)),
        i = oi.f;
      return i ? e.concat(i(t)) : e
    };
  bt({
    target: "Object",
    stat: !0,
    sham: !g
  }, {
    getOwnPropertyDescriptors: function(t) {
      for (var e, i, n = c(t), o = rt.f, r = on(n), s = {}, a = 0; r.length > a;) void 0 !== (i = o(n, e = r[a++])) && Ae(s, e, i);
      return s
    }
  });
  var rn = pt.Object.getOwnPropertyDescriptors,
    sn = rt.f,
    an = s((function() {
      sn(1)
    }));
  bt({
    target: "Object",
    stat: !0,
    forced: !g || an,
    sham: !g
  }, {
    getOwnPropertyDescriptor: function(t, e) {
      return sn(c(t), e)
    }
  });
  var ln = i((function(t) {
      var e = pt.Object,
        i = t.exports = function(t, i) {
          return e.getOwnPropertyDescriptor(t, i)
        };
      e.getOwnPropertyDescriptor.sham && (i.sham = !0)
    })),
    un = pt.Object.getOwnPropertySymbols;
  bt({
    target: "Object",
    stat: !0,
    sham: !g
  }, {
    create: ee
  });
  var hn = pt.Object,
    dn = function(t, e) {
      return hn.create(t, e)
    },
    cn = dn,
    pn = tn;
  var mn = function(t, e, i) {
      return e in t ? pn(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    },
    fn = s((function() {
      Vt(1)
    }));
  bt({
    target: "Object",
    stat: !0,
    forced: fn
  }, {
    keys: function(t) {
      return Vt(yt(t))
    }
  });
  var gn, vn = pt.Object.keys,
    bn = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    yn = "[" + bn + "]",
    xn = RegExp("^" + yn + yn + "*"),
    wn = RegExp(yn + yn + "*$"),
    _n = function(t) {
      return function(e) {
        var i = String(d(e));
        return 1 & t && (i = i.replace(xn, "")), 2 & t && (i = i.replace(wn, "")), i
      }
    },
    kn = {
      start: _n(1),
      end: _n(2),
      trim: _n(3)
    },
    Dn = kn.trim;
  bt({
    target: "String",
    proto: !0,
    forced: (gn = "trim", s((function() {
      return !!bn[gn]() || "​᠎" != "​᠎" [gn]() || bn[gn].name !== gn
    })))
  }, {
    trim: function() {
      return Dn(this)
    }
  });
  var In = function(t) {
      return pt[t + "Prototype"]
    },
    Cn = In("String").trim,
    Ln = String.prototype,
    Gn = function(t) {
      var e = t.trim;
      return "string" == typeof t || t === Ln || t instanceof String && e === Ln.trim ? Cn : e
    },
    Sn = function(t, e) {
      var i = [][t];
      return !!i && s((function() {
        i.call(null, e || function() {
          throw 1
        }, 1)
      }))
    },
    Mn = Object.defineProperty,
    Qn = {},
    Nn = function(t) {
      throw t
    },
    Fn = function(t, e) {
      if (A(Qn, t)) return Qn[t];
      e || (e = {});
      var i = [][t],
        n = !!A(e, "ACCESSORS") && e.ACCESSORS,
        o = A(e, 0) ? e[0] : Nn,
        r = A(e, 1) ? e[1] : void 0;
      return Qn[t] = !!i && !s((function() {
        if (n && !g) return !0;
        var t = {
          length: -1
        };
        n ? Mn(t, 1, {
          enumerable: !0,
          get: Nn
        }) : t[1] = 1, i.call(t, o, r)
      }))
    },
    Zn = hi.forEach,
    Bn = Sn("forEach"),
    On = Fn("forEach"),
    An = Bn && On ? [].forEach : function(t) {
      return Zn(this, t, arguments.length > 1 ? arguments[1] : void 0)
    };
  bt({
    target: "Array",
    proto: !0,
    forced: [].forEach != An
  }, {
    forEach: An
  });
  var Wn = In("Array").forEach,
    Xn = Array.prototype,
    Tn = {
      DOMTokenList: !0,
      NodeList: !0
    },
    Yn = function(t) {
      var e = t.forEach;
      return t === Xn || t instanceof Array && e === Xn.forEach || Tn.hasOwnProperty(se(t)) ? Wn : e
    },
    En = hi.map,
    Rn = Ve("map"),
    Un = Fn("map");
  bt({
    target: "Array",
    proto: !0,
    forced: !Rn || !Un
  }, {
    map: function(t) {
      return En(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var zn = In("Array").map,
    Vn = Array.prototype,
    jn = function(t) {
      var e = t.map;
      return t === Vn || t instanceof Array && e === Vn.map ? zn : e
    },
    Hn = kn.trim,
    Pn = f.parseInt,
    Jn = /^[+-]?0[Xx]/,
    Kn = 8 !== Pn(bn + "08") || 22 !== Pn(bn + "0x16") ? function(t, e) {
      var i = Hn(String(t));
      return Pn(i, e >>> 0 || (Jn.test(i) ? 16 : 10))
    } : Pn;
  bt({
    global: !0,
    forced: parseInt != Kn
  }, {
    parseInt: Kn
  });
  var qn = pt.parseInt,
    $n = nt.f,
    to = function(t) {
      return function(e) {
        for (var i, n = c(e), o = Vt(n), r = o.length, s = 0, a = []; r > s;) i = o[s++], g && !$n.call(n, i) || a.push(t ? [i, n[i]] : n[i]);
        return a
      }
    },
    eo = {
      entries: to(!0),
      values: to(!1)
    }.values;
  bt({
    target: "Object",
    stat: !0
  }, {
    values: function(t) {
      return eo(t)
    }
  });
  var io = pt.Object.values,
    no = hi.filter,
    oo = Ve("filter"),
    ro = Fn("filter");
  bt({
    target: "Array",
    proto: !0,
    forced: !oo || !ro
  }, {
    filter: function(t) {
      return no(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var so = In("Array").filter,
    ao = Array.prototype,
    lo = function(t) {
      var e = t.filter;
      return t === ao || t instanceof Array && e === ao.filter ? so : e
    },
    uo = In("Array").concat,
    ho = Array.prototype,
    co = function(t) {
      var e = t.concat;
      return t === ho || t instanceof Array && e === ho.concat ? uo : e
    };
  bt({
    target: "Array",
    stat: !0
  }, {
    isArray: Oe
  });
  var po = pt.Array.isArray,
    mo = po;
  var fo = function(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  };
  var go = function(t) {
      if (mo(t)) return fo(t)
    },
    vo = qi,
    bo = St("iterator"),
    yo = function(t) {
      var e = Object(t);
      return void 0 !== e[bo] || "@@iterator" in e || p.hasOwnProperty(se(e))
    };
  ai("asyncDispose"), ai("dispose"), ai("observable"), ai("patternMatch"), ai("replaceAll");
  var xo = Yi;
  var wo = function(t) {
      if (void 0 !== xo && yo(Object(t))) return vo(t)
    },
    _o = Ve("slice"),
    ko = Fn("slice", {
      ACCESSORS: !0,
      0: 0,
      1: 2
    }),
    Do = St("species"),
    Io = [].slice,
    Co = Math.max;
  bt({
    target: "Array",
    proto: !0,
    forced: !_o || !ko
  }, {
    slice: function(t, e) {
      var i, n, o, r = c(this),
        s = At(r.length),
        a = Tt(t, s),
        l = Tt(void 0 === e ? s : e, s);
      if (Oe(r) && ("function" != typeof(i = r.constructor) || i !== Array && !Oe(i.prototype) ? v(i) && null === (i = i[Do]) && (i = void 0) : i = void 0, i === Array || void 0 === i)) return Io.call(r, a, l);
      for (n = new(void 0 === i ? Array : i)(Co(l - a, 0)), o = 0; a < l; a++, o++) a in r && Ae(n, o, r[a]);
      return n.length = o, n
    }
  });
  var Lo = In("Array").slice,
    Go = Array.prototype,
    So = function(t) {
      var e = t.slice;
      return t === Go || t instanceof Array && e === Go.slice ? Lo : e
    },
    Mo = So;
  var Qo = function(t, e) {
    var i;
    if (t) {
      if ("string" == typeof t) return fo(t, e);
      var n = Mo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
      return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? vo(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fo(t, e) : void 0
    }
  };
  var No = function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  };
  var Fo = function(t) {
      return go(t) || wo(t) || Qo(t) || No()
    },
    Zo = So,
    Bo = s((function() {
      kt(1)
    }));
  bt({
    target: "Object",
    stat: !0,
    forced: Bo,
    sham: !xt
  }, {
    getPrototypeOf: function(t) {
      return kt(yt(t))
    }
  });
  var Oo = pt.Object.getPrototypeOf,
    Ao = Oo,
    Wo = Et.indexOf,
    Xo = [].indexOf,
    To = !!Xo && 1 / [1].indexOf(1, -0) < 0,
    Yo = Sn("indexOf"),
    Eo = Fn("indexOf", {
      ACCESSORS: !0,
      1: 0
    });
  bt({
    target: "Array",
    proto: !0,
    forced: To || !Yo || !Eo
  }, {
    indexOf: function(t) {
      return To ? Xo.apply(this, arguments) || 0 : Wo(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Ro = In("Array").indexOf,
    Uo = Array.prototype,
    zo = function(t) {
      var e = t.indexOf;
      return t === Uo || t instanceof Array && e === Uo.indexOf ? Ro : e
    },
    Vo = po,
    jo = Object.assign,
    Ho = Object.defineProperty,
    Po = !jo || s((function() {
      if (g && 1 !== jo({
          b: 1
        }, jo(Ho({}, "a", {
          enumerable: !0,
          get: function() {
            Ho(this, "b", {
              value: 3,
              enumerable: !1
            })
          }
        }), {
          b: 2
        })).b) return !0;
      var t = {},
        e = {},
        i = Symbol();
      return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
        e[t] = t
      })), 7 != jo({}, t)[i] || "abcdefghijklmnopqrst" != Vt(jo({}, e)).join("")
    })) ? function(t, e) {
      for (var i = yt(t), n = arguments.length, o = 1, r = oi.f, s = nt.f; n > o;)
        for (var a, l = h(arguments[o++]), u = r ? Vt(l).concat(r(l)) : Vt(l), d = u.length, c = 0; d > c;) a = u[c++], g && !s.call(l, a) || (i[a] = l[a]);
      return i
    } : jo;
  bt({
    target: "Object",
    stat: !0,
    forced: Object.assign !== Po
  }, {
    assign: Po
  });
  var Jo = pt.Object.assign,
    Ko = ri.f("iterator"),
    qo = Ko,
    $o = i((function(t) {
      function e(i) {
        return t.exports = e = "function" == typeof xo && "symbol" == typeof qo ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof xo && t.constructor === xo && t !== xo.prototype ? "symbol" : typeof t
        }, e(i)
      }
      t.exports = e
    }));
  var tr = function(t) {
    if (mo(t)) return t
  };
  var er = function(t, e) {
    if (void 0 !== xo && yo(Object(t))) {
      var i = [],
        n = !0,
        o = !1,
        r = void 0;
      try {
        for (var s, a = Ze(t); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
      } catch (t) {
        o = !0, r = t
      } finally {
        try {
          n || null == a.return || a.return()
        } finally {
          if (o) throw r
        }
      }
      return i
    }
  };
  var ir = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  };
  var nr = function(t, e) {
    return tr(t) || er(t, e) || Qo(t, e) || ir()
  };
  bt({
    target: "Date",
    stat: !0
  }, {
    now: function() {
      return (new Date).getTime()
    }
  });
  var or = pt.Date.now;

  function rr(t) {
    if (void 0 === Ei || null == Be(t)) {
      if (Vo(t) || (t = function(t, e) {
          var i;
          if (!t) return;
          if ("string" == typeof t) return sr(t, e);
          var n = Zo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return $i(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sr(t, e)
        }(t))) {
        var e = 0,
          i = function() {};
        return {
          s: i,
          n: function() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            }
          },
          e: function(t) {
            throw t
          },
          f: i
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o, r = !0,
      s = !1;
    return {
      s: function() {
        n = Ze(t)
      },
      n: function() {
        var t = n.next();
        return r = t.done, t
      },
      e: function(t) {
        s = !0, o = t
      },
      f: function() {
        try {
          r || null == n.return || n.return()
        } finally {
          if (s) throw o
        }
      }
    }
  }

  function sr(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  }

  function ar(t, e) {
    var i = vn(t);
    if (un) {
      var n = un(t);
      e && (n = lo(n).call(n, (function(e) {
        return ln(t, e).enumerable
      }))), i.push.apply(i, n)
    }
    return i
  }

  function lr(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i, n = null != arguments[e] ? arguments[e] : {};
      if (e % 2) Yn(i = ar(Object(n), !0)).call(i, (function(e) {
        mn(t, e, n[e])
      }));
      else if (rn) nn(t, rn(n));
      else {
        var o;
        Yn(o = ar(Object(n))).call(o, (function(e) {
          en(t, e, ln(n, e))
        }))
      }
    }
    return t
  }
  /**
   * vis-util
   * https://github.com/visjs/vis-util
   *
   * utilitie collection for visjs
   *
   * @version 4.0.0
   * @date    2020-02-29T15:35:13.178Z
   *
   * @copyright (c) 2011-2017 Almende B.V, http://almende.com
   * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
   *
   * @license
   * vis.js is dual licensed under both
   *
   *   1. The Apache 2.0 License
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   *   and
   *
   *   2. The MIT License
   *      http://opensource.org/licenses/MIT
   *
   * vis.js may be distributed under either license.
   */
  function ur(t) {
    var e = function() {
        for (var t = hr(), e = t(" "), i = t(" "), n = t(" "), o = 0; o < arguments.length; o++)(e -= t(o < 0 || arguments.length <= o ? void 0 : arguments[o])) < 0 && (e += 1), (i -= t(o < 0 || arguments.length <= o ? void 0 : arguments[o])) < 0 && (i += 1), (n -= t(o < 0 || arguments.length <= o ? void 0 : arguments[o])) < 0 && (n += 1);
        return [e, i, n]
      }(t),
      i = nr(e, 3),
      n = i[0],
      o = i[1],
      r = i[2],
      s = 1,
      a = function() {
        var t = 2091639 * n + 2.3283064365386963e-10 * s;
        return n = o, o = r, r = t - (s = 0 | t)
      };
    return a.uint32 = function() {
      return 4294967296 * a()
    }, a.fract53 = function() {
      return a() + 11102230246251565e-32 * (2097152 * a() | 0)
    }, a.algorithm = "Alea", a.seed = t, a.version = "0.9", a
  }

  function hr() {
    var t = 4022871197;
    return function(e) {
      for (var i = e.toString(), n = 0; n < i.length; n++) {
        var o = .02519603282416938 * (t += i.charCodeAt(n));
        o -= t = o >>> 0, t = (o *= t) >>> 0, t += 4294967296 * (o -= t)
      }
      return 2.3283064365386963e-10 * (t >>> 0)
    }
  }
  var dr = /^\/?Date\((-?\d+)/i,
    cr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    pr = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    mr = /^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i,
    fr = /^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;

  function gr(t) {
    return t instanceof Number || "number" == typeof t
  }

  function vr(t) {
    return t instanceof String || "string" == typeof t
  }

  function br(t) {
    return "object" === $o(t) && null !== t
  }

  function yr(t, e, i, n) {
    var o = !1;
    !0 === n && (o = null === e[i] && void 0 !== t[i]), o ? delete t[i] : t[i] = e[i]
  }
  var xr = Jo;

  function wr(t, e) {
    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    for (var o in e)
      if (Object.prototype.hasOwnProperty.call(e, o) || !0 === i)
        if ("object" === $o(e[o]) && null !== e[o] && Ao(e[o]) === Object.prototype) void 0 === t[o] ? t[o] = wr({}, e[o], i) : "object" === $o(t[o]) && null !== t[o] && Ao(t[o]) === Object.prototype ? wr(t[o], e[o], i) : yr(t, e, o, n);
        else if (Vo(e[o])) {
      var r;
      t[o] = Zo(r = e[o]).call(r)
    } else yr(t, e, o, n);
    return t
  }

  function _r(t) {
    var e = $o(t);
    return "object" === e ? null === t ? "null" : t instanceof Boolean ? "Boolean" : t instanceof Number ? "Number" : t instanceof String ? "String" : Vo(t) ? "Array" : t instanceof Date ? "Date" : "Object" : "number" === e ? "Number" : "boolean" === e ? "Boolean" : "string" === e ? "String" : void 0 === e ? "undefined" : e
  }
  var kr = io;
  var Dr = {
    asBoolean: function(t, e) {
      return "function" == typeof t && (t = t()), null != t ? 0 != t : e || null
    },
    asNumber: function(t, e) {
      return "function" == typeof t && (t = t()), null != t ? Number(t) || e || null : e || null
    },
    asString: function(t, e) {
      return "function" == typeof t && (t = t()), null != t ? String(t) : e || null
    },
    asSize: function(t, e) {
      return "function" == typeof t && (t = t()), vr(t) ? t : gr(t) ? t + "px" : e || null
    },
    asElement: function(t, e) {
      return "function" == typeof t && (t = t()), t || e || null
    }
  };

  function Ir(t) {
    var e;
    switch (t.length) {
      case 3:
      case 4:
        return (e = pr.exec(t)) ? {
          r: qn(e[1] + e[1], 16),
          g: qn(e[2] + e[2], 16),
          b: qn(e[3] + e[3], 16)
        } : null;
      case 6:
      case 7:
        return (e = cr.exec(t)) ? {
          r: qn(e[1], 16),
          g: qn(e[2], 16),
          b: qn(e[3], 16)
        } : null;
      default:
        return null
    }
  }

  function Cr(t, e, i) {
    var n;
    return "#" + Zo(n = ((1 << 24) + (t << 16) + (e << 8) + i).toString(16)).call(n, 1)
  }

  function Lr(t, e, i) {
    t /= 255, e /= 255, i /= 255;
    var n = Math.min(t, Math.min(e, i)),
      o = Math.max(t, Math.max(e, i));
    return n === o ? {
      h: 0,
      s: 0,
      v: n
    } : {
      h: 60 * ((t === n ? 3 : i === n ? 1 : 5) - (t === n ? e - i : i === n ? t - e : i - t) / (o - n)) / 360,
      s: (o - n) / o,
      v: o
    }
  }
  var Gr = function(t) {
      var e, i = {};
      return Yn(e = t.split(";")).call(e, (function(t) {
        if ("" != Gn(t).call(t)) {
          var e, n, o = t.split(":"),
            r = Gn(e = o[0]).call(e),
            s = Gn(n = o[1]).call(n);
          i[r] = s
        }
      })), i
    },
    Sr = function(t) {
      var e;
      return jn(e = vn(t)).call(e, (function(e) {
        return e + ": " + t[e]
      })).join("; ")
    };

  function Mr(t, e, i) {
    var n, o, r, s = Math.floor(6 * t),
      a = 6 * t - s,
      l = i * (1 - e),
      u = i * (1 - a * e),
      h = i * (1 - (1 - a) * e);
    switch (s % 6) {
      case 0:
        n = i, o = h, r = l;
        break;
      case 1:
        n = u, o = i, r = l;
        break;
      case 2:
        n = l, o = i, r = h;
        break;
      case 3:
        n = l, o = u, r = i;
        break;
      case 4:
        n = h, o = l, r = i;
        break;
      case 5:
        n = i, o = l, r = u
    }
    return {
      r: Math.floor(255 * n),
      g: Math.floor(255 * o),
      b: Math.floor(255 * r)
    }
  }

  function Qr(t, e, i) {
    var n = Mr(t, e, i);
    return Cr(n.r, n.g, n.b)
  }

  function Nr(t) {
    var e = Ir(t);
    if (!e) throw new TypeError("'".concat(t, "' is not a valid color."));
    return Lr(e.r, e.g, e.b)
  }

  function Fr(t) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
  }

  function Zr(t) {
    return mr.test(t)
  }

  function Br(t) {
    if (null === t || "object" !== $o(t)) return null;
    if (t instanceof Element) return t;
    var e = cn(t);
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && "object" == $o(t[i]) && (e[i] = Br(t[i]));
    return e
  }
  var Or = Object.freeze({
    __proto__: null,
    Alea: function() {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      return ur(e.length ? e : [or()])
    },
    HSVToHex: Qr,
    HSVToRGB: Mr,
    RGBToHSV: Lr,
    RGBToHex: Cr,
    addClassName: function(t, e) {
      var i = t.className.split(" "),
        n = e.split(" ");
      i = co(i).call(i, lo(n).call(n, (function(t) {
        return zo(i).call(i, t) < 0
      }))), t.className = i.join(" ")
    },
    addCssText: function(t, e) {
      var i = Gr(t.style.cssText),
        n = Gr(e),
        o = lr(lr({}, i), n);
      t.style.cssText = Sr(o)
    },
    addEventListener: function(t, e, i, n) {
      var o;
      t.addEventListener ? (void 0 === n && (n = !1), "mousewheel" === e && zo(o = navigator.userAgent).call(o, "Firefox") >= 0 && (e = "DOMMouseScroll"), t.addEventListener(e, i, n)) : t.attachEvent("on" + e, i)
    },
    binarySearchCustom: function(t, e, i, n) {
      for (var o = 0, r = 0, s = t.length - 1; r <= s && o < 1e4;) {
        var a = Math.floor((r + s) / 2),
          l = t[a],
          u = e(void 0 === n ? l[i] : l[i][n]);
        if (0 == u) return a; - 1 == u ? r = a + 1 : s = a - 1, o++
      }
      return -1
    },
    binarySearchValue: function(t, e, i, n, o) {
      var r, s, a, l, u = 0,
        h = 0,
        d = t.length - 1;
      for (o = null != o ? o : function(t, e) {
          return t == e ? 0 : t < e ? -1 : 1
        }; h <= d && u < 1e4;) {
        if (l = Math.floor(.5 * (d + h)), r = t[Math.max(0, l - 1)][i], s = t[l][i], a = t[Math.min(t.length - 1, l + 1)][i], 0 == o(s, e)) return l;
        if (o(r, e) < 0 && o(s, e) > 0) return "before" == n ? Math.max(0, l - 1) : l;
        if (o(s, e) < 0 && o(a, e) > 0) return "before" == n ? l : Math.min(t.length - 1, l + 1);
        o(s, e) < 0 ? h = l + 1 : d = l - 1, u++
      }
      return -1
    },
    bridgeObject: Br,
    copyAndExtendArray: function(t, e) {
      var i;
      return co(i = []).call(i, Fo(t), [e])
    },
    copyArray: function(t) {
      return Zo(t).call(t)
    },
    deepExtend: wr,
    easingFunctions: {
      linear: function(t) {
        return t
      },
      easeInQuad: function(t) {
        return t * t
      },
      easeOutQuad: function(t) {
        return t * (2 - t)
      },
      easeInOutQuad: function(t) {
        return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
      },
      easeInCubic: function(t) {
        return t * t * t
      },
      easeOutCubic: function(t) {
        return --t * t * t + 1
      },
      easeInOutCubic: function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      },
      easeInQuart: function(t) {
        return t * t * t * t
      },
      easeOutQuart: function(t) {
        return 1 - --t * t * t * t
      },
      easeInOutQuart: function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
      },
      easeInQuint: function(t) {
        return t * t * t * t * t
      },
      easeOutQuint: function(t) {
        return 1 + --t * t * t * t * t
      },
      easeInOutQuint: function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
      }
    },
    equalArray: function(t, e) {
      if (t.length !== e.length) return !1;
      for (var i = 0, n = t.length; i < n; i++)
        if (t[i] != e[i]) return !1;
      return !0
    },
    extend: xr,
    fillIfDefined: function t(e, i) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      for (var o in e)
        if (void 0 !== i[o])
          if (null === i[o] || "object" !== $o(i[o])) yr(e, i, o, n);
          else {
            var r = e[o],
              s = i[o];
            br(r) && br(s) && t(r, s, n)
          }
    },
    forEach: function(t, e) {
      if (Vo(t))
        for (var i = t.length, n = 0; n < i; n++) e(t[n], n, t);
      else
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e(t[o], o, t)
    },
    getAbsoluteLeft: function(t) {
      return t.getBoundingClientRect().left
    },
    getAbsoluteRight: function(t) {
      return t.getBoundingClientRect().right
    },
    getAbsoluteTop: function(t) {
      return t.getBoundingClientRect().top
    },
    getScrollBarWidth: function() {
      var t = document.createElement("p");
      t.style.width = "100%", t.style.height = "200px";
      var e = document.createElement("div");
      e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.visibility = "hidden", e.style.width = "200px", e.style.height = "150px", e.style.overflow = "hidden", e.appendChild(t), document.body.appendChild(e);
      var i = t.offsetWidth;
      e.style.overflow = "scroll";
      var n = t.offsetWidth;
      return i == n && (n = e.clientWidth), document.body.removeChild(e), i - n
    },
    getTarget: function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.event,
        e = null;
      return t && (t.target ? e = t.target : t.srcElement && (e = t.srcElement)), e instanceof Element && (null == e.nodeType || 3 != e.nodeType || (e = e.parentNode) instanceof Element) ? e : null
    },
    getType: _r,
    hasParent: function(t, e) {
      for (var i = t; i;) {
        if (i === e) return !0;
        if (!i.parentNode) return !1;
        i = i.parentNode
      }
      return !1
    },
    hexToHSV: Nr,
    hexToRGB: Ir,
    insertSort: function(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i],
          o = void 0;
        for (o = i; o > 0 && e(n, t[o - 1]) < 0; o--) t[o] = t[o - 1];
        t[o] = n
      }
      return t
    },
    isDate: function(t) {
      if (t instanceof Date) return !0;
      if (vr(t)) {
        if (dr.exec(t)) return !0;
        if (!isNaN(Date.parse(t))) return !0
      }
      return !1
    },
    isNumber: gr,
    isObject: br,
    isString: vr,
    isValidHex: Fr,
    isValidRGB: Zr,
    isValidRGBA: function(t) {
      return fr.test(t)
    },
    mergeOptions: function(t, e, i) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = function(t) {
          return null != t
        },
        r = function(t) {
          return null !== t && "object" === $o(t)
        },
        s = function(t) {
          for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
          return !0
        };
      if (!r(t)) throw new Error("Parameter mergeTarget must be an object");
      if (!r(e)) throw new Error("Parameter options must be an object");
      if (!o(i)) throw new Error("Parameter option must have a value");
      if (!r(n)) throw new Error("Parameter globalOptions must be an object");
      var a = function(t, e, i) {
          r(t[i]) || (t[i] = {});
          var n = e[i],
            o = t[i];
          for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (o[s] = n[s])
        },
        l = e[i],
        u = r(n) && !s(n),
        h = u ? n[i] : void 0,
        d = h ? h.enabled : void 0;
      if (void 0 !== l) {
        if ("boolean" == typeof l) return r(t[i]) || (t[i] = {}), void(t[i].enabled = l);
        if (null === l && !r(t[i])) {
          if (!o(h)) return;
          t[i] = cn(h)
        }
        if (r(l)) {
          var c = !0;
          void 0 !== l.enabled ? c = l.enabled : void 0 !== d && (c = h.enabled), a(t, e, i), t[i].enabled = c
        }
      }
    },
    option: Dr,
    overrideOpacity: function(t, e) {
      if (-1 !== zo(t).call(t, "rgba")) return t;
      if (-1 !== zo(t).call(t, "rgb")) {
        var i = t.substr(zo(t).call(t, "(") + 1).replace(")", "").split(",");
        return "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + e + ")"
      }
      var n = Ir(t);
      return null == n ? t : "rgba(" + n.r + "," + n.g + "," + n.b + "," + e + ")"
    },
    parseColor: function(t, e) {
      if (vr(t)) {
        var i = t;
        if (Zr(i)) {
          var n, o = jn(n = i.substr(4).substr(0, i.length - 5).split(",")).call(n, (function(t) {
            return qn(t)
          }));
          i = Cr(o[0], o[1], o[2])
        }
        if (!0 === Fr(i)) {
          var r = Nr(i),
            s = {
              h: r.h,
              s: .8 * r.s,
              v: Math.min(1, 1.02 * r.v)
            },
            a = {
              h: r.h,
              s: Math.min(1, 1.25 * r.s),
              v: .8 * r.v
            },
            l = Qr(a.h, a.s, a.v),
            u = Qr(s.h, s.s, s.v);
          return {
            background: i,
            border: l,
            highlight: {
              background: u,
              border: l
            },
            hover: {
              background: u,
              border: l
            }
          }
        }
        return {
          background: i,
          border: i,
          highlight: {
            background: i,
            border: i
          },
          hover: {
            background: i,
            border: i
          }
        }
      }
      return e ? {
        background: t.background || e.background,
        border: t.border || e.border,
        highlight: vr(t.highlight) ? {
          border: t.highlight,
          background: t.highlight
        } : {
          background: t.highlight && t.highlight.background || e.highlight.background,
          border: t.highlight && t.highlight.border || e.highlight.border
        },
        hover: vr(t.hover) ? {
          border: t.hover,
          background: t.hover
        } : {
          border: t.hover && t.hover.border || e.hover.border,
          background: t.hover && t.hover.background || e.hover.background
        }
      } : {
        background: t.background || void 0,
        border: t.border || void 0,
        highlight: vr(t.highlight) ? {
          border: t.highlight,
          background: t.highlight
        } : {
          background: t.highlight && t.highlight.background || void 0,
          border: t.highlight && t.highlight.border || void 0
        },
        hover: vr(t.hover) ? {
          border: t.hover,
          background: t.hover
        } : {
          border: t.hover && t.hover.border || void 0,
          background: t.hover && t.hover.background || void 0
        }
      }
    },
    preventDefault: function(t) {
      t || (t = window.event), t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    },
    recursiveDOMDelete: function t(e) {
      if (e)
        for (; !0 === e.hasChildNodes();) {
          var i = e.firstChild;
          i && (t(i), e.removeChild(i))
        }
    },
    removeClassName: function(t, e) {
      var i = t.className.split(" "),
        n = e.split(" ");
      i = lo(i).call(i, (function(t) {
        return zo(n).call(n, t) < 0
      })), t.className = i.join(" ")
    },
    removeCssText: function(t, e) {
      var i = Gr(t.style.cssText),
        n = Gr(e);
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && delete i[o];
      t.style.cssText = Sr(i)
    },
    removeEventListener: function(t, e, i, n) {
      var o;
      t.removeEventListener ? (void 0 === n && (n = !1), "mousewheel" === e && zo(o = navigator.userAgent).call(o, "Firefox") >= 0 && (e = "DOMMouseScroll"), t.removeEventListener(e, i, n)) : t.detachEvent("on" + e, i)
    },
    selectiveBridgeObject: function(t, e) {
      if (null !== e && "object" === $o(e)) {
        for (var i = cn(e), n = 0; n < t.length; n++) Object.prototype.hasOwnProperty.call(e, t[n]) && "object" == $o(e[t[n]]) && (i[t[n]] = Br(e[t[n]]));
        return i
      }
      return null
    },
    selectiveDeepExtend: function(t, e, i) {
      var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Vo(i)) throw new TypeError("Arrays are not supported by deepExtend");
      for (var o = 0; o < t.length; o++) {
        var r = t[o];
        if (Object.prototype.hasOwnProperty.call(i, r))
          if (i[r] && i[r].constructor === Object) void 0 === e[r] && (e[r] = {}), e[r].constructor === Object ? wr(e[r], i[r], !1, n) : yr(e, i, r, n);
          else {
            if (Vo(i[r])) throw new TypeError("Arrays are not supported by deepExtend");
            yr(e, i, r, n)
          }
      }
      return e
    },
    selectiveExtend: function(t, e) {
      if (!Vo(t)) throw new Error("Array with property names expected as first argument");
      for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) n[o - 2] = arguments[o];
      for (var r = 0, s = n; r < s.length; r++)
        for (var a = s[r], l = 0; l < t.length; l++) {
          var u = t[l];
          a && Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u])
        }
      return e
    },
    selectiveNotDeepExtend: function(t, e, i) {
      var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Vo(i)) throw new TypeError("Arrays are not supported by deepExtend");
      for (var o in i)
        if (Object.prototype.hasOwnProperty.call(i, o) && -1 === zo(t).call(t, o))
          if (i[o] && i[o].constructor === Object) void 0 === e[o] && (e[o] = {}), e[o].constructor === Object ? wr(e[o], i[o]) : yr(e, i, o, n);
          else if (Vo(i[o])) {
        e[o] = [];
        for (var r = 0; r < i[o].length; r++) e[o].push(i[o][r])
      } else yr(e, i, o, n);
      return e
    },
    throttle: function(t) {
      var e = !1;
      return function() {
        e || (e = !0, requestAnimationFrame((function() {
          e = !1, t()
        })))
      }
    },
    toArray: kr,
    topMost: function(t, e) {
      var i;
      Vo(e) || (e = [e]);
      var n, o = rr(t);
      try {
        for (o.s(); !(n = o.n()).done;) {
          var r = n.value;
          if (r) {
            i = r[e[0]];
            for (var s = 1; s < e.length; s++) i && (i = i[e[s]]);
            if (void 0 !== i) break
          }
        }
      } catch (t) {
        o.e(t)
      } finally {
        o.f()
      }
      return i
    },
    updateProperty: function(t, e, i) {
      return t[e] !== i && (t[e] = i, !0)
    }
  });

  function Ar(t) {
    for (var e in t) t.hasOwnProperty(e) && (t[e].redundant = t[e].used, t[e].used = [])
  }

  function Wr(t) {
    for (var e in t)
      if (t.hasOwnProperty(e) && t[e].redundant) {
        for (var i = 0; i < t[e].redundant.length; i++) t[e].redundant[i].parentNode.removeChild(t[e].redundant[i]);
        t[e].redundant = []
      }
  }

  function Xr(t) {
    Ar(t), Wr(t), Ar(t)
  }

  function Tr(t, e, i) {
    var n;
    return e.hasOwnProperty(t) ? e[t].redundant.length > 0 ? (n = e[t].redundant[0], e[t].redundant.shift()) : (n = document.createElementNS("http://www.w3.org/2000/svg", t), i.appendChild(n)) : (n = document.createElementNS("http://www.w3.org/2000/svg", t), e[t] = {
      used: [],
      redundant: []
    }, i.appendChild(n)), e[t].used.push(n), n
  }

  function Yr(t, e, i, n) {
    var o;
    return e.hasOwnProperty(t) ? e[t].redundant.length > 0 ? (o = e[t].redundant[0], e[t].redundant.shift()) : (o = document.createElement(t), void 0 !== n ? i.insertBefore(o, n) : i.appendChild(o)) : (o = document.createElement(t), e[t] = {
      used: [],
      redundant: []
    }, void 0 !== n ? i.insertBefore(o, n) : i.appendChild(o)), e[t].used.push(o), o
  }

  function Er(t, e, i, n, o, r) {
    var s;
    if ("circle" == i.style ? ((s = Tr("circle", n, o)).setAttributeNS(null, "cx", t), s.setAttributeNS(null, "cy", e), s.setAttributeNS(null, "r", .5 * i.size)) : ((s = Tr("rect", n, o)).setAttributeNS(null, "x", t - .5 * i.size), s.setAttributeNS(null, "y", e - .5 * i.size), s.setAttributeNS(null, "width", i.size), s.setAttributeNS(null, "height", i.size)), void 0 !== i.styles && s.setAttributeNS(null, "style", i.styles), s.setAttributeNS(null, "class", i.className + " vis-point"), r) {
      var a = Tr("text", n, o);
      r.xOffset && (t += r.xOffset), r.yOffset && (e += r.yOffset), r.content && (a.textContent = r.content), r.className && a.setAttributeNS(null, "class", r.className + " vis-label"), a.setAttributeNS(null, "x", t), a.setAttributeNS(null, "y", e)
    }
    return s
  }

  function Rr(t, e, i, n, o, r, s, a) {
    if (0 != n) {
      n < 0 && (e -= n *= -1);
      var l = Tr("rect", r, s);
      l.setAttributeNS(null, "x", t - .5 * i), l.setAttributeNS(null, "y", e), l.setAttributeNS(null, "width", i), l.setAttributeNS(null, "height", n), l.setAttributeNS(null, "class", o), a && l.setAttributeNS(null, "style", a)
    }
  }

  function Ur() {
    try {
      return navigator ? navigator.languages && navigator.languages.length ? navigator.languages : navigator.userLanguage || navigator.language || navigator.browserLanguage || "en" : "en"
    } catch (t) {
      return "en"
    }
  }
  var zr = Object.freeze({
    __proto__: null,
    prepareElements: Ar,
    cleanupElements: Wr,
    resetElements: Xr,
    getSVGElement: Tr,
    getDOMElement: Yr,
    drawPoint: Er,
    drawBar: Rr,
    getNavigatorLanguage: Ur
  });
  var Vr = function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    },
    jr = [].slice,
    Hr = {},
    Pr = function(t, e, i) {
      if (!(e in Hr)) {
        for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
        Hr[e] = Function("C,a", "return new C(" + n.join(",") + ")")
      }
      return Hr[e](t, i)
    },
    Jr = Function.bind || function(t) {
      var e = mt(this),
        i = jr.call(arguments, 1),
        n = function() {
          var o = i.concat(jr.call(arguments));
          return this instanceof n ? Pr(e, o.length, o) : e.apply(t, o)
        };
      return v(e.prototype) && (n.prototype = e.prototype), n
    },
    Kr = Pt("Reflect", "construct"),
    qr = s((function() {
      function t() {}
      return !(Kr((function() {}), [], t) instanceof t)
    })),
    $r = !s((function() {
      Kr((function() {}))
    })),
    ts = qr || $r;
  bt({
    target: "Reflect",
    stat: !0,
    forced: ts,
    sham: ts
  }, {
    construct: function(t, e) {
      mt(t), _(e);
      var i = arguments.length < 3 ? t : mt(arguments[2]);
      if ($r && !qr) return Kr(t, e, i);
      if (t == i) {
        switch (e.length) {
          case 0:
            return new t;
          case 1:
            return new t(e[0]);
          case 2:
            return new t(e[0], e[1]);
          case 3:
            return new t(e[0], e[1], e[2]);
          case 4:
            return new t(e[0], e[1], e[2], e[3])
        }
        var n = [null];
        return n.push.apply(n, e), new(Jr.apply(t, n))
      }
      var o = i.prototype,
        r = ee(v(o) ? o : Object.prototype),
        s = Function.apply.call(t, r, e);
      return v(s) ? s : r
    }
  });
  var es = pt.Reflect.construct,
    is = In("Array").entries,
    ns = Array.prototype,
    os = {
      DOMTokenList: !0,
      NodeList: !0
    },
    rs = function(t) {
      var e = t.entries;
      return t === ns || t instanceof Array && e === ns.entries || os.hasOwnProperty(se(t)) ? is : e
    },
    ss = Pt("JSON", "stringify"),
    as = /[\uD800-\uDFFF]/g,
    ls = /^[\uD800-\uDBFF]$/,
    us = /^[\uDC00-\uDFFF]$/,
    hs = function(t, e, i) {
      var n = i.charAt(e - 1),
        o = i.charAt(e + 1);
      return ls.test(t) && !us.test(o) || us.test(t) && !ls.test(n) ? "\\u" + t.charCodeAt(0).toString(16) : t
    },
    ds = s((function() {
      return '"\\udf06\\ud834"' !== ss("\udf06\ud834") || '"\\udead"' !== ss("\udead")
    }));
  ss && bt({
    target: "JSON",
    stat: !0,
    forced: ds
  }, {
    stringify: function(t, e, i) {
      var n = ss.apply(null, arguments);
      return "string" == typeof n ? n.replace(as, hs) : n
    }
  }), pt.JSON || (pt.JSON = {
    stringify: JSON.stringify
  });
  var cs = function(t, e, i) {
      return pt.JSON.stringify.apply(null, arguments)
    },
    ps = In("Array").values,
    ms = Array.prototype,
    fs = {
      DOMTokenList: !0,
      NodeList: !0
    },
    gs = function(t) {
      var e = t.values;
      return t === ms || t instanceof Array && e === ms.values || fs.hasOwnProperty(se(t)) ? ps : e
    },
    vs = In("Array").keys,
    bs = Array.prototype,
    ys = {
      DOMTokenList: !0,
      NodeList: !0
    },
    xs = function(t) {
      var e = t.keys;
      return t === bs || t instanceof Array && e === bs.keys || ys.hasOwnProperty(se(t)) ? vs : e
    },
    ws = hi.some,
    _s = Sn("some"),
    ks = Fn("some");
  bt({
    target: "Array",
    proto: !0,
    forced: !_s || !ks
  }, {
    some: function(t) {
      return ws(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Ds = In("Array").some,
    Is = Array.prototype,
    Cs = function(t) {
      var e = t.some;
      return t === Is || t instanceof Array && e === Is.some ? Ds : e
    },
    Ls = dn;
  bt({
    target: "Object",
    stat: !0
  }, {
    setPrototypeOf: pe
  });
  var Gs = pt.Object.setPrototypeOf,
    Ss = i((function(t) {
      function e(i, n) {
        return t.exports = e = Gs || function(t, e) {
          return t.__proto__ = e, t
        }, e(i, n)
      }
      t.exports = e
    }));
  var Ms = function(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Ls(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && Ss(t, e)
  };
  var Qs = function(t, e) {
      return !e || "object" !== $o(e) && "function" != typeof e ? Vr(t) : e
    },
    Ns = Oo,
    Fs = i((function(t) {
      function e(i) {
        return t.exports = e = Gs ? Ns : function(t) {
          return t.__proto__ || Ns(t)
        }, e(i)
      }
      t.exports = e
    })),
    Zs = [],
    Bs = Zs.sort,
    Os = s((function() {
      Zs.sort(void 0)
    })),
    As = s((function() {
      Zs.sort(null)
    })),
    Ws = Sn("sort");
  bt({
    target: "Array",
    proto: !0,
    forced: Os || !As || !Ws
  }, {
    sort: function(t) {
      return void 0 === t ? Bs.call(yt(this)) : Bs.call(yt(this), mt(t))
    }
  });
  var Xs = In("Array").sort,
    Ts = Array.prototype,
    Ys = function(t) {
      var e = t.sort;
      return t === Ts || t instanceof Array && e === Ts.sort ? Xs : e
    },
    Es = !s((function() {
      return Object.isExtensible(Object.preventExtensions({}))
    })),
    Rs = i((function(t) {
      var e = I.f,
        i = Y("meta"),
        n = 0,
        o = Object.isExtensible || function() {
          return !0
        },
        r = function(t) {
          e(t, i, {
            value: {
              objectID: "O" + ++n,
              weakData: {}
            }
          })
        },
        s = t.exports = {
          REQUIRED: !1,
          fastKey: function(t, e) {
            if (!v(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!A(t, i)) {
              if (!o(t)) return "F";
              if (!e) return "E";
              r(t)
            }
            return t[i].objectID
          },
          getWeakData: function(t, e) {
            if (!A(t, i)) {
              if (!o(t)) return !0;
              if (!e) return !1;
              r(t)
            }
            return t[i].weakData
          },
          onFreeze: function(t) {
            return Es && s.REQUIRED && o(t) && !A(t, i) && r(t), t
          }
        };
      U[i] = !0
    })),
    Us = (Rs.REQUIRED, Rs.fastKey, Rs.getWeakData, Rs.onFreeze, i((function(t) {
      var e = function(t, e) {
        this.stopped = t, this.result = e
      };
      (t.exports = function(t, i, n, o, r) {
        var s, a, l, u, h, d, c, p = ft(i, n, o ? 2 : 1);
        if (r) s = t;
        else {
          if ("function" != typeof(a = Fe(t))) throw TypeError("Target is not iterable");
          if (Vi(a)) {
            for (l = 0, u = At(t.length); u > l; l++)
              if ((h = o ? p(_(c = t[l])[0], c[1]) : p(t[l])) && h instanceof e) return h;
            return new e(!1)
          }
          s = a.call(t)
        }
        for (d = s.next; !(c = d.call(s)).done;)
          if ("object" == typeof(h = Ri(s, p, c.value, o)) && h && h instanceof e) return h;
        return new e(!1)
      }).stop = function(t) {
        return new e(!0, t)
      }
    }))),
    zs = function(t, e, i) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
      return t
    },
    Vs = I.f,
    js = hi.forEach,
    Hs = tt.set,
    Ps = tt.getterFor,
    Js = function(t, e, i) {
      var n, o = -1 !== t.indexOf("Map"),
        r = -1 !== t.indexOf("Weak"),
        a = o ? "set" : "add",
        l = f[t],
        u = l && l.prototype,
        h = {};
      if (g && "function" == typeof l && (r || u.forEach && !s((function() {
          (new l).entries().next()
        })))) {
        n = e((function(e, i) {
          Hs(zs(e, n, t), {
            type: t,
            collection: new l
          }), null != i && Us(i, e[a], e, o)
        }));
        var d = Ps(t);
        js(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], (function(t) {
          var e = "add" == t || "set" == t;
          t in u && (!r || "clear" != t) && L(n.prototype, t, (function(i, n) {
            var o = d(this).collection;
            if (!e && r && !v(i)) return "get" == t && void 0;
            var s = o[t](0 === i ? 0 : i, n);
            return e ? this : s
          }))
        })), r || Vs(n.prototype, "size", {
          configurable: !0,
          get: function() {
            return d(this).collection.size
          }
        })
      } else n = i.getConstructor(e, t, o, a), Rs.REQUIRED = !0;
      return he(n, t, !1, !0), h[t] = n, bt({
        global: !0,
        forced: !0
      }, h), r || i.setStrong(n, t, o), n
    },
    Ks = function(t, e, i) {
      for (var n in e) i && i.unsafe && t[n] ? t[n] = e[n] : me(t, n, e[n], i);
      return t
    },
    qs = St("species"),
    $s = I.f,
    ta = Rs.fastKey,
    ea = tt.set,
    ia = tt.getterFor,
    na = {
      getConstructor: function(t, e, i, n) {
        var o = t((function(t, r) {
            zs(t, o, e), ea(t, {
              type: e,
              index: ee(null),
              first: void 0,
              last: void 0,
              size: 0
            }), g || (t.size = 0), null != r && Us(r, t[n], t, i)
          })),
          r = ia(e),
          s = function(t, e, i) {
            var n, o, s = r(t),
              l = a(t, e);
            return l ? l.value = i : (s.last = l = {
              index: o = ta(e, !0),
              key: e,
              value: i,
              previous: n = s.last,
              next: void 0,
              removed: !1
            }, s.first || (s.first = l), n && (n.next = l), g ? s.size++ : t.size++, "F" !== o && (s.index[o] = l)), t
          },
          a = function(t, e) {
            var i, n = r(t),
              o = ta(e);
            if ("F" !== o) return n.index[o];
            for (i = n.first; i; i = i.next)
              if (i.key == e) return i
          };
        return Ks(o.prototype, {
          clear: function() {
            for (var t = r(this), e = t.index, i = t.first; i;) i.removed = !0, i.previous && (i.previous = i.previous.next = void 0), delete e[i.index], i = i.next;
            t.first = t.last = void 0, g ? t.size = 0 : this.size = 0
          },
          delete: function(t) {
            var e = r(this),
              i = a(this, t);
            if (i) {
              var n = i.next,
                o = i.previous;
              delete e.index[i.index], i.removed = !0, o && (o.next = n), n && (n.previous = o), e.first == i && (e.first = n), e.last == i && (e.last = o), g ? e.size-- : this.size--
            }
            return !!i
          },
          forEach: function(t) {
            for (var e, i = r(this), n = ft(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : i.first;)
              for (n(e.value, e.key, this); e && e.removed;) e = e.previous
          },
          has: function(t) {
            return !!a(this, t)
          }
        }), Ks(o.prototype, i ? {
          get: function(t) {
            var e = a(this, t);
            return e && e.value
          },
          set: function(t, e) {
            return s(this, 0 === t ? 0 : t, e)
          }
        } : {
          add: function(t) {
            return s(this, t = 0 === t ? 0 : t, t)
          }
        }), g && $s(o.prototype, "size", {
          get: function() {
            return r(this).size
          }
        }), o
      },
      setStrong: function(t, e, i) {
        var n = e + " Iterator",
          o = ia(e),
          r = ia(n);
        ye(t, e, (function(t, e) {
            ea(this, {
              type: n,
              target: t,
              state: o(t),
              kind: e,
              last: void 0
            })
          }), (function() {
            for (var t = r(this), e = t.kind, i = t.last; i && i.removed;) i = i.previous;
            return t.target && (t.last = i = i ? i.next : t.state.first) ? "keys" == e ? {
              value: i.key,
              done: !1
            } : "values" == e ? {
              value: i.value,
              done: !1
            } : {
              value: [i.key, i.value],
              done: !1
            } : (t.target = void 0, {
              value: void 0,
              done: !0
            })
          }), i ? "entries" : "values", !i, !0),
          function(t) {
            var e = Pt(t),
              i = I.f;
            g && e && !e[qs] && i(e, qs, {
              configurable: !0,
              get: function() {
                return this
              }
            })
          }(e)
      }
    },
    oa = (Js("Set", (function(t) {
      return function() {
        return t(this, arguments.length ? arguments[0] : void 0)
      }
    }), na), pt.Set),
    ra = (Js("Map", (function(t) {
      return function() {
        return t(this, arguments.length ? arguments[0] : void 0)
      }
    }), na), pt.Map),
    sa = i((function(t) {
      var e = function(t) {
        var e = Object.prototype,
          i = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          r = n.asyncIterator || "@@asyncIterator",
          s = n.toStringTag || "@@toStringTag";

        function a(t, e, i, n) {
          var o = e && e.prototype instanceof h ? e : h,
            r = Object.create(o.prototype),
            s = new _(n || []);
          return r._invoke = function(t, e, i) {
            var n = "suspendedStart";
            return function(o, r) {
              if ("executing" === n) throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw r;
                return D()
              }
              for (i.method = o, i.arg = r;;) {
                var s = i.delegate;
                if (s) {
                  var a = y(s, i);
                  if (a) {
                    if (a === u) continue;
                    return a
                  }
                }
                if ("next" === i.method) i.sent = i._sent = i.arg;
                else if ("throw" === i.method) {
                  if ("suspendedStart" === n) throw n = "completed", i.arg;
                  i.dispatchException(i.arg)
                } else "return" === i.method && i.abrupt("return", i.arg);
                n = "executing";
                var h = l(t, e, i);
                if ("normal" === h.type) {
                  if (n = i.done ? "completed" : "suspendedYield", h.arg === u) continue;
                  return {
                    value: h.arg,
                    done: i.done
                  }
                }
                "throw" === h.type && (n = "completed", i.method = "throw", i.arg = h.arg)
              }
            }
          }(t, i, s), r
        }

        function l(t, e, i) {
          try {
            return {
              type: "normal",
              arg: t.call(e, i)
            }
          } catch (t) {
            return {
              type: "throw",
              arg: t
            }
          }
        }
        t.wrap = a;
        var u = {};

        function h() {}

        function d() {}

        function c() {}
        var p = {};
        p[o] = function() {
          return this
        };
        var m = Object.getPrototypeOf,
          f = m && m(m(k([])));
        f && f !== e && i.call(f, o) && (p = f);
        var g = c.prototype = h.prototype = Object.create(p);

        function v(t) {
          ["next", "throw", "return"].forEach((function(e) {
            t[e] = function(t) {
              return this._invoke(e, t)
            }
          }))
        }

        function b(t, e) {
          var n;
          this._invoke = function(o, r) {
            function s() {
              return new e((function(n, s) {
                ! function n(o, r, s, a) {
                  var u = l(t[o], t, r);
                  if ("throw" !== u.type) {
                    var h = u.arg,
                      d = h.value;
                    return d && "object" == typeof d && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                      n("next", t, s, a)
                    }), (function(t) {
                      n("throw", t, s, a)
                    })) : e.resolve(d).then((function(t) {
                      h.value = t, s(h)
                    }), (function(t) {
                      return n("throw", t, s, a)
                    }))
                  }
                  a(u.arg)
                }(o, r, n, s)
              }))
            }
            return n = n ? n.then(s, s) : s()
          }
        }

        function y(t, e) {
          var i = t.iterator[e.method];
          if (void 0 === i) {
            if (e.delegate = null, "throw" === e.method) {
              if (t.iterator.return && (e.method = "return", e.arg = void 0, y(t, e), "throw" === e.method)) return u;
              e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return u
          }
          var n = l(i, t.iterator, e.arg);
          if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
          var o = n.arg;
          return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
        }

        function x(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function w(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e
        }

        function _(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(x, this), this.reset(!0)
        }

        function k(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                r = function e() {
                  for (; ++n < t.length;)
                    if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                  return e.value = void 0, e.done = !0, e
                };
              return r.next = r
            }
          }
          return {
            next: D
          }
        }

        function D() {
          return {
            value: void 0,
            done: !0
          }
        }
        return d.prototype = g.constructor = c, c.constructor = d, c[s] = d.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(g), t
        }, t.awrap = function(t) {
          return {
            __await: t
          }
        }, v(b.prototype), b.prototype[r] = function() {
          return this
        }, t.AsyncIterator = b, t.async = function(e, i, n, o, r) {
          void 0 === r && (r = Promise);
          var s = new b(a(e, i, n, o), r);
          return t.isGeneratorFunction(i) ? s : s.next().then((function(t) {
            return t.done ? t.value : s.next()
          }))
        }, v(g), g[s] = "Generator", g[o] = function() {
          return this
        }, g.toString = function() {
          return "[object Generator]"
        }, t.keys = function(t) {
          var e = [];
          for (var i in t) e.push(i);
          return e.reverse(),
            function i() {
              for (; e.length;) {
                var n = e.pop();
                if (n in t) return i.value = n, i.done = !1, i
              }
              return i.done = !0, i
            }
        }, t.values = k, _.prototype = {
          constructor: _,
          reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !t)
              for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
          },
          stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
          },
          dispatchException: function(t) {
            if (this.done) throw t;
            var e = this;

            function n(i, n) {
              return s.type = "throw", s.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var r = this.tryEntries[o],
                s = r.completion;
              if ("root" === r.tryLoc) return n("end");
              if (r.tryLoc <= this.prev) {
                var a = i.call(r, "catchLoc"),
                  l = i.call(r, "finallyLoc");
                if (a && l) {
                  if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                  if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                } else if (a) {
                  if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                } else {
                  if (!l) throw new Error("try statement without catch or finally");
                  if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                }
              }
            }
          },
          abrupt: function(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var r = o;
                break
              }
            }
            r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
            var s = r ? r.completion : {};
            return s.type = t, s.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(s)
          },
          complete: function(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
          },
          finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var i = this.tryEntries[e];
              if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), w(i), u
            }
          },
          catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var i = this.tryEntries[e];
              if (i.tryLoc === t) {
                var n = i.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  w(i)
                }
                return o
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function(t, e, i) {
            return this.delegate = {
              iterator: k(t),
              resultName: e,
              nextLoc: i
            }, "next" === this.method && (this.arg = void 0), u
          }
        }, t
      }(t.exports);
      try {
        regeneratorRuntime = e
      } catch (t) {
        Function("r", "regeneratorRuntime = r")(e)
      }
    })),
    aa = Ko,
    la = Ve("splice"),
    ua = Fn("splice", {
      ACCESSORS: !0,
      0: 0,
      1: 2
    }),
    ha = Math.max,
    da = Math.min;
  bt({
    target: "Array",
    proto: !0,
    forced: !la || !ua
  }, {
    splice: function(t, e) {
      var i, n, o, r, s, a, l = yt(this),
        u = At(l.length),
        h = Tt(t, u),
        d = arguments.length;
      if (0 === d ? i = n = 0 : 1 === d ? (i = 0, n = u - h) : (i = d - 2, n = da(ha(Bt(e), 0), u - h)), u + i - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
      for (o = Xe(l, n), r = 0; r < n; r++)(s = h + r) in l && Ae(o, r, l[s]);
      if (o.length = n, i < n) {
        for (r = h; r < u - n; r++) a = r + i, (s = r + n) in l ? l[a] = l[s] : delete l[a];
        for (r = u; r > u - n + i; r--) delete l[r - 1]
      } else if (i > n)
        for (r = u - n; r > h; r--) a = r + i - 1, (s = r + n - 1) in l ? l[a] = l[s] : delete l[a];
      for (r = 0; r < i; r++) l[r + h] = arguments[r + 2];
      return l.length = u - n + i, o
    }
  });
  var ca = In("Array").splice,
    pa = Array.prototype,
    ma = function(t) {
      var e = t.splice;
      return t === pa || t instanceof Array && e === pa.splice ? ca : e
    },
    fa = [].slice,
    ga = /MSIE .\./.test(Te),
    va = function(t) {
      return function(e, i) {
        var n = arguments.length > 2,
          o = n ? fa.call(arguments, 2) : void 0;
        return t(n ? function() {
          ("function" == typeof e ? e : Function(e)).apply(this, o)
        } : e, i)
      }
    };
  bt({
    global: !0,
    bind: !0,
    forced: ga
  }, {
    setTimeout: va(f.setTimeout),
    setInterval: va(f.setInterval)
  });
  var ba = pt.setTimeout,
    ya = function(t, e, i, n, o, r, s, a) {
      for (var l, u = o, h = 0, d = !!s && ft(s, a, 3); h < n;) {
        if (h in i) {
          if (l = d ? d(i[h], h, e) : i[h], r > 0 && Oe(l)) u = ya(t, e, l, At(l.length), u, r - 1) - 1;
          else {
            if (u >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
            t[u] = l
          }
          u++
        }
        h++
      }
      return u
    },
    xa = ya;
  bt({
    target: "Array",
    proto: !0
  }, {
    flatMap: function(t) {
      var e, i = yt(this),
        n = At(i.length);
      return mt(t), (e = Xe(i, 0)).length = xa(e, i, i, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
    }
  });
  var wa = In("Array").flatMap,
    _a = Array.prototype,
    ka = function(t) {
      var e = t.flatMap;
      return t === _a || t instanceof Array && e === _a.flatMap ? wa : e
    },
    Da = function(t) {
      return function(e, i, n, o) {
        mt(i);
        var r = yt(e),
          s = h(r),
          a = At(r.length),
          l = t ? a - 1 : 0,
          u = t ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (l in s) {
              o = s[l], l += u;
              break
            }
            if (l += u, t ? l < 0 : a <= l) throw TypeError("Reduce of empty array with no initial value")
          }
        for (; t ? l >= 0 : a > l; l += u) l in s && (o = i(o, s[l], l, r));
        return o
      }
    },
    Ia = {
      left: Da(!1),
      right: Da(!0)
    }.left,
    Ca = Sn("reduce"),
    La = Fn("reduce", {
      1: 0
    });
  bt({
    target: "Array",
    proto: !0,
    forced: !Ca || !La
  }, {
    reduce: function(t) {
      return Ia(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Ga = In("Array").reduce,
    Sa = Array.prototype,
    Ma = function(t) {
      var e = t.reduce;
      return t === Sa || t instanceof Array && e === Sa.reduce ? Ga : e
    };
  bt({
    target: "Function",
    proto: !0
  }, {
    bind: Jr
  });
  var Qa = In("Function").bind,
    Na = Function.prototype,
    Fa = function(t) {
      var e = t.bind;
      return t === Na || t instanceof Function && e === Na.bind ? Qa : e
    };
  var Za = function(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  };

  function Ba(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), pn(t, n.key, n)
    }
  }
  var Oa = function(t, e, i) {
      return e && Ba(t.prototype, e), i && Ba(t, i), t
    },
    Aa = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
    Wa = new Uint8Array(16);

  function Xa() {
    if (!Aa) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Aa(Wa)
  }
  for (var Ta = [], Ya = 0; Ya < 256; ++Ya) Ta[Ya] = (Ya + 256).toString(16).substr(1);

  function Ea(t, e, i) {
    var n = e && i || 0;
    "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
    var o = (t = t || {}).random || (t.rng || Xa)();
    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e)
      for (var r = 0; r < 16; ++r) e[n + r] = o[r];
    return e || function(t, e) {
      var i = e || 0,
        n = Ta;
      return [n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]]].join("")
    }(o)
  }

  function Ra(t, e) {
    var i = vn(t);
    if (un) {
      var n = un(t);
      e && (n = lo(n).call(n, (function(e) {
        return ln(t, e).enumerable
      }))), i.push.apply(i, n)
    }
    return i
  }

  function Ua(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }

  function za(t) {
    if (void 0 === Ei || null == Be(t)) {
      if (Vo(t) || (t = function(t, e) {
          var i;
          if (!t) return;
          if ("string" == typeof t) return Va(t, e);
          var n = Zo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return $i(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Va(t, e)
        }(t))) {
        var e = 0,
          i = function() {};
        return {
          s: i,
          n: function() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            }
          },
          e: function(t) {
            throw t
          },
          f: i
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o, r = !0,
      s = !1;
    return {
      s: function() {
        n = Ze(t)
      },
      n: function() {
        var t = n.next();
        return r = t.done, t
      },
      e: function(t) {
        s = !0, o = t
      },
      f: function() {
        try {
          r || null == n.return || n.return()
        } finally {
          if (s) throw o
        }
      }
    }
  }

  function Va(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  }

  function ja(t) {
    return new Pa(t)
  }
  var Ha = function() {
      function t(e, i, n) {
        var o, r, s;
        Za(this, t), this._source = e, this._transformers = i, this._target = n, this._listeners = {
          add: Fa(o = this._add).call(o, this),
          remove: Fa(r = this._remove).call(r, this),
          update: Fa(s = this._update).call(s, this)
        }
      }
      return Oa(t, [{
        key: "all",
        value: function() {
          return this._target.update(this._transformItems(this._source.get())), this
        }
      }, {
        key: "start",
        value: function() {
          return this._source.on("add", this._listeners.add), this._source.on("remove", this._listeners.remove), this._source.on("update", this._listeners.update), this
        }
      }, {
        key: "stop",
        value: function() {
          return this._source.off("add", this._listeners.add), this._source.off("remove", this._listeners.remove), this._source.off("update", this._listeners.update), this
        }
      }, {
        key: "_transformItems",
        value: function(t) {
          var e;
          return Ma(e = this._transformers).call(e, (function(t, e) {
            return e(t)
          }), t)
        }
      }, {
        key: "_add",
        value: function(t, e) {
          null != e && this._target.add(this._transformItems(this._source.get(e.items)))
        }
      }, {
        key: "_update",
        value: function(t, e) {
          null != e && this._target.update(this._transformItems(this._source.get(e.items)))
        }
      }, {
        key: "_remove",
        value: function(t, e) {
          null != e && this._target.remove(this._transformItems(e.oldData))
        }
      }]), t
    }(),
    Pa = function() {
      function t(e) {
        Za(this, t), this._source = e, this._transformers = []
      }
      return Oa(t, [{
        key: "filter",
        value: function(t) {
          return this._transformers.push((function(e) {
            return lo(e).call(e, t)
          })), this
        }
      }, {
        key: "map",
        value: function(t) {
          return this._transformers.push((function(e) {
            return jn(e).call(e, t)
          })), this
        }
      }, {
        key: "flatMap",
        value: function(t) {
          return this._transformers.push((function(e) {
            return ka(e).call(e, t)
          })), this
        }
      }, {
        key: "to",
        value: function(t) {
          return new Ha(this._source, this._transformers, t)
        }
      }]), t
    }(),
    Ja = /^\/?Date\((-?\d+)/i;

  function Ka(t) {
    return r.isMoment(t)
  }

  function qa(t, e) {
    var i;
    if (void 0 !== t) {
      if (null === t) return null;
      if (!e) return t;
      if ("string" != typeof e && !(e instanceof String)) throw new Error("Type must be a string");
      switch (e) {
        case "boolean":
        case "Boolean":
          return Boolean(t);
        case "number":
        case "Number":
          return vr(t) && !isNaN(Date.parse(t)) ? r(t).valueOf() : Number(t.valueOf());
        case "string":
        case "String":
          return String(t);
        case "Date":
          if (gr(t)) return new Date(t);
          if (t instanceof Date) return new Date(t.valueOf());
          if (Ka(t)) return new Date(t.valueOf());
          if (vr(t)) return (i = Ja.exec(t)) ? new Date(Number(i[1])) : r(new Date(t)).toDate();
          throw new Error("Cannot convert object of type " + _r(t) + " to type Date");
        case "Moment":
          if (gr(t)) return r(t);
          if (t instanceof Date) return r(t.valueOf());
          if (Ka(t)) return r(t);
          if (vr(t)) return i = Ja.exec(t), r(i ? Number(i[1]) : t);
          throw new Error("Cannot convert object of type " + _r(t) + " to type Date");
        case "ISODate":
          if (gr(t)) return new Date(t);
          if (t instanceof Date) return t.toISOString();
          if (Ka(t)) return t.toDate().toISOString();
          if (vr(t)) return (i = Ja.exec(t)) ? new Date(Number(i[1])).toISOString() : r(t).format();
          throw new Error("Cannot convert object of type " + _r(t) + " to type ISODate");
        case "ASPDate":
          if (gr(t)) return "/Date(" + t + ")/";
          if (t instanceof Date || Ka(t)) return "/Date(" + t.valueOf() + ")/";
          if (vr(t)) return "/Date(" + ((i = Ja.exec(t)) ? new Date(Number(i[1])).valueOf() : new Date(t).valueOf()) + ")/";
          throw new Error("Cannot convert object of type " + _r(t) + " to type ASPDate");
        default:
          throw new Error("Unknown type ".concat(e))
      }
    }
  }

  function $a(t) {
    return "string" == typeof t || "number" == typeof t
  }
  var tl = function() {
      function t(e) {
        Za(this, t), this._queue = [], this._timeout = null, this._extended = null, this.delay = null, this.max = 1 / 0, this.setOptions(e)
      }
      return Oa(t, [{
        key: "setOptions",
        value: function(t) {
          t && void 0 !== t.delay && (this.delay = t.delay), t && void 0 !== t.max && (this.max = t.max), this._flushIfNeeded()
        }
      }, {
        key: "destroy",
        value: function() {
          if (this.flush(), this._extended) {
            for (var t = this._extended.object, e = this._extended.methods, i = 0; i < e.length; i++) {
              var n = e[i];
              n.original ? t[n.name] = n.original : delete t[n.name]
            }
            this._extended = null
          }
        }
      }, {
        key: "replace",
        value: function(t, e) {
          var i = this,
            n = t[e];
          if (!n) throw new Error("Method " + e + " undefined");
          t[e] = function() {
            for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
            i.queue({
              args: e,
              fn: n,
              context: this
            })
          }
        }
      }, {
        key: "queue",
        value: function(t) {
          "function" == typeof t ? this._queue.push({
            fn: t
          }) : this._queue.push(t), this._flushIfNeeded()
        }
      }, {
        key: "_flushIfNeeded",
        value: function() {
          var t = this;
          this._queue.length > this.max && this.flush(), null != this._timeout && (clearTimeout(this._timeout), this._timeout = null), this.queue.length > 0 && "number" == typeof this.delay && (this._timeout = ba((function() {
            t.flush()
          }), this.delay))
        }
      }, {
        key: "flush",
        value: function() {
          var t, e;
          Yn(t = ma(e = this._queue).call(e, 0)).call(t, (function(t) {
            t.fn.apply(t.context || t.fn, t.args || [])
          }))
        }
      }], [{
        key: "extend",
        value: function(e, i) {
          var n = new t(i);
          if (void 0 !== e.flush) throw new Error("Target object already has a property flush");
          e.flush = function() {
            n.flush()
          };
          var o = [{
            name: "flush",
            original: void 0
          }];
          if (i && i.replace)
            for (var r = 0; r < i.replace.length; r++) {
              var s = i.replace[r];
              o.push({
                name: s,
                original: e[s]
              }), n.replace(e, s)
            }
          return n._extended = {
            object: e,
            methods: o
          }, n
        }
      }]), t
    }(),
    el = function() {
      function t() {
        Za(this, t), this._subscribers = {
          "*": [],
          add: [],
          remove: [],
          update: []
        }, this.subscribe = t.prototype.on, this.unsubscribe = t.prototype.off
      }
      return Oa(t, [{
        key: "_trigger",
        value: function(t, e, i) {
          var n, o;
          if ("*" === t) throw new Error("Cannot trigger event *");
          Yn(n = co(o = []).call(o, Fo(this._subscribers[t]), Fo(this._subscribers["*"]))).call(n, (function(n) {
            n(t, e, null != i ? i : null)
          }))
        }
      }, {
        key: "on",
        value: function(t, e) {
          "function" == typeof e && this._subscribers[t].push(e)
        }
      }, {
        key: "off",
        value: function(t, e) {
          var i;
          this._subscribers[t] = lo(i = this._subscribers[t]).call(i, (function(t) {
            return t !== e
          }))
        }
      }]), t
    }(),
    il = function() {
      function t(e) {
        Za(this, t), this._pairs = e
      }
      return Oa(t, [{
        key: aa,
        value: sa.mark((function t() {
          var e, i, n, o, r;
          return sa.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                e = za(this._pairs), t.prev = 1, e.s();
              case 3:
                if ((i = e.n()).done) {
                  t.next = 9;
                  break
                }
                return n = nr(i.value, 2), o = n[0], r = n[1], t.next = 7, [o, r];
              case 7:
                t.next = 3;
                break;
              case 9:
                t.next = 14;
                break;
              case 11:
                t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
              case 14:
                return t.prev = 14, e.f(), t.finish(14);
              case 17:
              case "end":
                return t.stop()
            }
          }), t, this, [
            [1, 11, 14, 17]
          ])
        }))
      }, {
        key: "entries",
        value: sa.mark((function t() {
          var e, i, n, o, r;
          return sa.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                e = za(this._pairs), t.prev = 1, e.s();
              case 3:
                if ((i = e.n()).done) {
                  t.next = 9;
                  break
                }
                return n = nr(i.value, 2), o = n[0], r = n[1], t.next = 7, [o, r];
              case 7:
                t.next = 3;
                break;
              case 9:
                t.next = 14;
                break;
              case 11:
                t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
              case 14:
                return t.prev = 14, e.f(), t.finish(14);
              case 17:
              case "end":
                return t.stop()
            }
          }), t, this, [
            [1, 11, 14, 17]
          ])
        }))
      }, {
        key: "keys",
        value: sa.mark((function t() {
          var e, i, n, o;
          return sa.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                e = za(this._pairs), t.prev = 1, e.s();
              case 3:
                if ((i = e.n()).done) {
                  t.next = 9;
                  break
                }
                return n = nr(i.value, 1), o = n[0], t.next = 7, o;
              case 7:
                t.next = 3;
                break;
              case 9:
                t.next = 14;
                break;
              case 11:
                t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
              case 14:
                return t.prev = 14, e.f(), t.finish(14);
              case 17:
              case "end":
                return t.stop()
            }
          }), t, this, [
            [1, 11, 14, 17]
          ])
        }))
      }, {
        key: "values",
        value: sa.mark((function t() {
          var e, i, n, o;
          return sa.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                e = za(this._pairs), t.prev = 1, e.s();
              case 3:
                if ((i = e.n()).done) {
                  t.next = 9;
                  break
                }
                return n = nr(i.value, 2), o = n[1], t.next = 7, o;
              case 7:
                t.next = 3;
                break;
              case 9:
                t.next = 14;
                break;
              case 11:
                t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
              case 14:
                return t.prev = 14, e.f(), t.finish(14);
              case 17:
              case "end":
                return t.stop()
            }
          }), t, this, [
            [1, 11, 14, 17]
          ])
        }))
      }, {
        key: "toIdArray",
        value: function() {
          var t;
          return jn(t = Fo(this._pairs)).call(t, (function(t) {
            return t[0]
          }))
        }
      }, {
        key: "toItemArray",
        value: function() {
          var t;
          return jn(t = Fo(this._pairs)).call(t, (function(t) {
            return t[1]
          }))
        }
      }, {
        key: "toEntryArray",
        value: function() {
          return Fo(this._pairs)
        }
      }, {
        key: "toObjectMap",
        value: function() {
          var t, e = cn(null),
            i = za(this._pairs);
          try {
            for (i.s(); !(t = i.n()).done;) {
              var n = nr(t.value, 2),
                o = n[0],
                r = n[1];
              e[o] = r
            }
          } catch (t) {
            i.e(t)
          } finally {
            i.f()
          }
          return e
        }
      }, {
        key: "toMap",
        value: function() {
          return new ra(this._pairs)
        }
      }, {
        key: "toIdSet",
        value: function() {
          return new oa(this.toIdArray())
        }
      }, {
        key: "toItemSet",
        value: function() {
          return new oa(this.toItemArray())
        }
      }, {
        key: "cache",
        value: function() {
          return new t(Fo(this._pairs))
        }
      }, {
        key: "distinct",
        value: function(t) {
          var e, i = new oa,
            n = za(this._pairs);
          try {
            for (n.s(); !(e = n.n()).done;) {
              var o = nr(e.value, 2),
                r = o[0],
                s = o[1];
              i.add(t(s, r))
            }
          } catch (t) {
            n.e(t)
          } finally {
            n.f()
          }
          return i
        }
      }, {
        key: "filter",
        value: function(e) {
          var i = this._pairs;
          return new t(mn({}, aa, sa.mark((function t() {
            var n, o, r, s, a;
            return sa.wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n = za(i), t.prev = 1, n.s();
                case 3:
                  if ((o = n.n()).done) {
                    t.next = 10;
                    break
                  }
                  if (r = nr(o.value, 2), s = r[0], a = r[1], !e(a, s)) {
                    t.next = 8;
                    break
                  }
                  return t.next = 8, [s, a];
                case 8:
                  t.next = 3;
                  break;
                case 10:
                  t.next = 15;
                  break;
                case 12:
                  t.prev = 12, t.t0 = t.catch(1), n.e(t.t0);
                case 15:
                  return t.prev = 15, n.f(), t.finish(15);
                case 18:
                case "end":
                  return t.stop()
              }
            }), t, null, [
              [1, 12, 15, 18]
            ])
          }))))
        }
      }, {
        key: "forEach",
        value: function(t) {
          var e, i = za(this._pairs);
          try {
            for (i.s(); !(e = i.n()).done;) {
              var n = nr(e.value, 2),
                o = n[0];
              t(n[1], o)
            }
          } catch (t) {
            i.e(t)
          } finally {
            i.f()
          }
        }
      }, {
        key: "map",
        value: function(e) {
          var i = this._pairs;
          return new t(mn({}, aa, sa.mark((function t() {
            var n, o, r, s, a;
            return sa.wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n = za(i), t.prev = 1, n.s();
                case 3:
                  if ((o = n.n()).done) {
                    t.next = 9;
                    break
                  }
                  return r = nr(o.value, 2), s = r[0], a = r[1], t.next = 7, [s, e(a, s)];
                case 7:
                  t.next = 3;
                  break;
                case 9:
                  t.next = 14;
                  break;
                case 11:
                  t.prev = 11, t.t0 = t.catch(1), n.e(t.t0);
                case 14:
                  return t.prev = 14, n.f(), t.finish(14);
                case 17:
                case "end":
                  return t.stop()
              }
            }), t, null, [
              [1, 11, 14, 17]
            ])
          }))))
        }
      }, {
        key: "max",
        value: function(t) {
          var e = Ze(this._pairs),
            i = e.next();
          if (i.done) return null;
          for (var n = i.value[1], o = t(i.value[1], i.value[0]); !(i = e.next()).done;) {
            var r = nr(i.value, 2),
              s = r[0],
              a = r[1],
              l = t(a, s);
            l > o && (o = l, n = a)
          }
          return n
        }
      }, {
        key: "min",
        value: function(t) {
          var e = Ze(this._pairs),
            i = e.next();
          if (i.done) return null;
          for (var n = i.value[1], o = t(i.value[1], i.value[0]); !(i = e.next()).done;) {
            var r = nr(i.value, 2),
              s = r[0],
              a = r[1],
              l = t(a, s);
            l < o && (o = l, n = a)
          }
          return n
        }
      }, {
        key: "reduce",
        value: function(t, e) {
          var i, n = za(this._pairs);
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = nr(i.value, 2),
                r = o[0];
              e = t(e, o[1], r)
            }
          } catch (t) {
            n.e(t)
          } finally {
            n.f()
          }
          return e
        }
      }, {
        key: "sort",
        value: function(e) {
          var i = this;
          return new t(mn({}, aa, (function() {
            var t;
            return Ze(Ys(t = Fo(i._pairs)).call(t, (function(t, i) {
              var n = nr(t, 2),
                o = n[0],
                r = n[1],
                s = nr(i, 2),
                a = s[0],
                l = s[1];
              return e(r, l, o, a)
            })))
          })))
        }
      }]), t
    }(),
    nl = function() {
      console.warn("Type coercion has been deprecated. Please, use data pipes instead. See https://visjs.github.io/vis-data/data/datapipe.html#TypeCoercion for more details with working migration example.")
    },
    ol = function(t) {
      Ms(i, t);
      var e = Ua(i);

      function i(t, n) {
        var o;
        if (Za(this, i), o = e.call(this), t && !Vo(t) && (n = t, t = []), o._options = n || {}, o._data = new ra, o.length = 0, o._idProp = o._options.fieldId || "id", o._type = {}, o._options.type) {
          nl();
          for (var r = vn(o._options.type), s = 0, a = r.length; s < a; s++) {
            var l = r[s],
              u = o._options.type[l];
            o._type[l] = "Date" == u || "ISODate" == u || "ASPDate" == u ? "Date" : u
          }
        }
        return t && t.length && o.add(t), o.setOptions(n), o
      }
      return Oa(i, [{
        key: "setOptions",
        value: function(t) {
          t && void 0 !== t.queue && (!1 === t.queue ? this._queue && (this._queue.destroy(), delete this._queue) : (this._queue || (this._queue = tl.extend(this, {
            replace: ["add", "update", "remove"]
          })), t.queue && "object" === $o(t.queue) && this._queue.setOptions(t.queue)))
        }
      }, {
        key: "add",
        value: function(t, e) {
          var i, n = this,
            o = [];
          if (Vo(t)) {
            var r = jn(t).call(t, (function(t) {
              return t[n._idProp]
            }));
            if (Cs(r).call(r, (function(t) {
                return n._data.has(t)
              }))) throw new Error("A duplicate id was found in the parameter array.");
            for (var s = 0, a = t.length; s < a; s++) i = this._addItem(t[s]), o.push(i)
          } else {
            if (!t || "object" !== $o(t)) throw new Error("Unknown dataType");
            i = this._addItem(t), o.push(i)
          }
          return o.length && this._trigger("add", {
            items: o
          }, e), o
        }
      }, {
        key: "update",
        value: function(t, e) {
          var i = this,
            n = [],
            o = [],
            r = [],
            s = [],
            a = this._idProp,
            l = function(t) {
              var e = t[a];
              if (null != e && i._data.has(e)) {
                var l = t,
                  u = Jo({}, i._data.get(e)),
                  h = i._updateItem(l);
                o.push(h), s.push(l), r.push(u)
              } else {
                var d = i._addItem(t);
                n.push(d)
              }
            };
          if (Vo(t))
            for (var u = 0, h = t.length; u < h; u++) t[u] && "object" === $o(t[u]) ? l(t[u]) : console.warn("Ignoring input item, which is not an object at index " + u);
          else {
            if (!t || "object" !== $o(t)) throw new Error("Unknown dataType");
            l(t)
          }
          if (n.length && this._trigger("add", {
              items: n
            }, e), o.length) {
            var d = {
              items: o,
              oldData: r,
              data: s
            };
            this._trigger("update", d, e)
          }
          return co(n).call(n, o)
        }
      }, {
        key: "updateOnly",
        value: function(t, e) {
          var i, n = this;
          Vo(t) || (t = [t]);
          var o = jn(i = jn(t).call(t, (function(t) {
            var e = n._data.get(t[n._idProp]);
            if (null == e) throw new Error("Updating non-existent items is not allowed.");
            return {
              oldData: e,
              update: t
            }
          }))).call(i, (function(t) {
            var e = t.oldData,
              i = t.update,
              o = e[n._idProp],
              r = wr(wr({}, e), i);
            return n._data.set(o, r), {
              id: o,
              oldData: e,
              updatedData: r
            }
          }));
          if (o.length) {
            var r = {
              items: jn(o).call(o, (function(t) {
                return t.id
              })),
              oldData: jn(o).call(o, (function(t) {
                return t.oldData
              })),
              data: jn(o).call(o, (function(t) {
                return t.updatedData
              }))
            };
            return this._trigger("update", r, e), r.items
          }
          return []
        }
      }, {
        key: "get",
        value: function(t, e) {
          var i = void 0,
            n = void 0,
            o = void 0;
          $a(t) ? (i = t, o = e) : Vo(t) ? (n = t, o = e) : o = t;
          var r = o && "Object" === o.returnType ? "Object" : "Array",
            s = o && o.type || this._options.type,
            a = o && lo(o),
            l = [],
            u = null,
            h = null,
            d = null;
          if (null != i)(u = this._getItem(i, s)) && a && !a(u) && (u = null);
          else if (null != n)
            for (var c = 0, p = n.length; c < p; c++) null == (u = this._getItem(n[c], s)) || a && !a(u) || l.push(u);
          else
            for (var m, f = 0, g = (h = Fo(xs(m = this._data).call(m))).length; f < g; f++) d = h[f], null == (u = this._getItem(d, s)) || a && !a(u) || l.push(u);
          if (o && o.order && null == i && this._sort(l, o.order), o && o.fields) {
            var v = o.fields;
            if (null != i && null != u) u = this._filterFields(u, v);
            else
              for (var b = 0, y = l.length; b < y; b++) l[b] = this._filterFields(l[b], v)
          }
          if ("Object" == r) {
            for (var x = {}, w = 0, _ = l.length; w < _; w++) {
              var k = l[w];
              x[k[this._idProp]] = k
            }
            return x
          }
          return null != i ? u : l
        }
      }, {
        key: "getIds",
        value: function(t) {
          var e, i, n = this._data,
            o = t && lo(t),
            r = t && t.order,
            s = t && t.type || this._options.type,
            a = Fo(xs(n).call(n)),
            l = [];
          if (o)
            if (r) {
              i = [];
              for (var u = 0, h = a.length; u < h; u++) {
                var d = a[u];
                o(e = this._getItem(d, s)) && i.push(e)
              }
              this._sort(i, r);
              for (var c = 0, p = i.length; c < p; c++) l.push(i[c][this._idProp])
            } else
              for (var m = 0, f = a.length; m < f; m++) {
                var g = a[m];
                o(e = this._getItem(g, s)) && l.push(e[this._idProp])
              } else if (r) {
                i = [];
                for (var v = 0, b = a.length; v < b; v++) {
                  var y = a[v];
                  i.push(n.get(y))
                }
                this._sort(i, r);
                for (var x = 0, w = i.length; x < w; x++) l.push(i[x][this._idProp])
              } else
                for (var _ = 0, k = a.length; _ < k; _++) {
                  var D = a[_];
                  e = n.get(D), l.push(e[this._idProp])
                }
          return l
        }
      }, {
        key: "getDataSet",
        value: function() {
          return this
        }
      }, {
        key: "forEach",
        value: function(t, e) {
          var i = e && lo(e),
            n = e && e.type || this._options.type,
            o = this._data,
            r = Fo(xs(o).call(o));
          if (e && e.order)
            for (var s = this.get(e), a = 0, l = s.length; a < l; a++) {
              var u = s[a];
              t(u, u[this._idProp])
            } else
              for (var h = 0, d = r.length; h < d; h++) {
                var c = r[h],
                  p = this._getItem(c, n);
                i && !i(p) || t(p, c)
              }
        }
      }, {
        key: "map",
        value: function(t, e) {
          for (var i = e && lo(e), n = e && e.type || this._options.type, o = [], r = this._data, s = Fo(xs(r).call(r)), a = 0, l = s.length; a < l; a++) {
            var u = s[a],
              h = this._getItem(u, n);
            i && !i(h) || o.push(t(h, u))
          }
          return e && e.order && this._sort(o, e.order), o
        }
      }, {
        key: "_filterFields",
        value: function(t, e) {
          var i;
          return t ? Ma(i = Vo(e) ? e : vn(e)).call(i, (function(e, i) {
            return e[i] = t[i], e
          }), {}) : t
        }
      }, {
        key: "_sort",
        value: function(t, e) {
          if ("string" == typeof e) {
            var i = e;
            Ys(t).call(t, (function(t, e) {
              var n = t[i],
                o = e[i];
              return n > o ? 1 : n < o ? -1 : 0
            }))
          } else {
            if ("function" != typeof e) throw new TypeError("Order must be a function or a string");
            Ys(t).call(t, e)
          }
        }
      }, {
        key: "remove",
        value: function(t, e) {
          for (var i = [], n = [], o = Vo(t) ? t : [t], r = 0, s = o.length; r < s; r++) {
            var a = this._remove(o[r]);
            if (a) {
              var l = a[this._idProp];
              null != l && (i.push(l), n.push(a))
            }
          }
          return i.length && this._trigger("remove", {
            items: i,
            oldData: n
          }, e), i
        }
      }, {
        key: "_remove",
        value: function(t) {
          var e;
          if ($a(t) ? e = t : t && "object" === $o(t) && (e = t[this._idProp]), null != e && this._data.has(e)) {
            var i = this._data.get(e) || null;
            return this._data.delete(e), --this.length, i
          }
          return null
        }
      }, {
        key: "clear",
        value: function(t) {
          for (var e, i = Fo(xs(e = this._data).call(e)), n = [], o = 0, r = i.length; o < r; o++) n.push(this._data.get(i[o]));
          return this._data.clear(), this.length = 0, this._trigger("remove", {
            items: i,
            oldData: n
          }, t), i
        }
      }, {
        key: "max",
        value: function(t) {
          var e, i, n = null,
            o = null,
            r = za(gs(e = this._data).call(e));
          try {
            for (r.s(); !(i = r.n()).done;) {
              var s = i.value,
                a = s[t];
              "number" == typeof a && (null == o || a > o) && (n = s, o = a)
            }
          } catch (t) {
            r.e(t)
          } finally {
            r.f()
          }
          return n || null
        }
      }, {
        key: "min",
        value: function(t) {
          var e, i, n = null,
            o = null,
            r = za(gs(e = this._data).call(e));
          try {
            for (r.s(); !(i = r.n()).done;) {
              var s = i.value,
                a = s[t];
              "number" == typeof a && (null == o || a < o) && (n = s, o = a)
            }
          } catch (t) {
            r.e(t)
          } finally {
            r.f()
          }
          return n || null
        }
      }, {
        key: "distinct",
        value: function(t) {
          for (var e = this._data, i = Fo(xs(e).call(e)), n = [], o = this._options.type && this._options.type[t] || null, r = 0, s = 0, a = i.length; s < a; s++) {
            for (var l = i[s], u = e.get(l)[t], h = !1, d = 0; d < r; d++)
              if (n[d] == u) {
                h = !0;
                break
              } h || void 0 === u || (n[r] = u, r++)
          }
          if (o)
            for (var c = 0, p = n.length; c < p; c++) n[c] = qa(n[c], o);
          return n
        }
      }, {
        key: "_addItem",
        value: function(t) {
          var e = t[this._idProp];
          if (null != e) {
            if (this._data.has(e)) throw new Error("Cannot add item: item with id " + e + " already exists")
          } else e = Ea(), t[this._idProp] = e;
          for (var i = {}, n = vn(t), o = 0, r = n.length; o < r; o++) {
            var s = n[o],
              a = this._type[s];
            i[s] = qa(t[s], a)
          }
          return this._data.set(e, i), ++this.length, e
        }
      }, {
        key: "_getItem",
        value: function(t, e) {
          var i, n = this._data.get(t);
          if (!n) return null;
          var o = vn(n);
          if (e) {
            nl(), i = {};
            for (var r = 0, s = o.length; r < s; r++) {
              var a = o[r],
                l = n[a];
              i[a] = qa(l, e[a])
            }
          } else i = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var i, n = null != arguments[e] ? arguments[e] : {};
              if (e % 2) Yn(i = Ra(Object(n), !0)).call(i, (function(e) {
                mn(t, e, n[e])
              }));
              else if (rn) nn(t, rn(n));
              else {
                var o;
                Yn(o = Ra(Object(n))).call(o, (function(e) {
                  en(t, e, ln(n, e))
                }))
              }
            }
            return t
          }({}, n);
          return null == i[this._idProp] && (i[this._idProp] = n.id), i
        }
      }, {
        key: "_updateItem",
        value: function(t) {
          var e = t[this._idProp];
          if (null == e) throw new Error("Cannot update item: item has no id (item: " + cs(t) + ")");
          var i = this._data.get(e);
          if (!i) throw new Error("Cannot update item: no item with id " + e + " found");
          for (var n = vn(t), o = 0, r = n.length; o < r; o++) {
            var s = n[o],
              a = this._type[s];
            i[s] = qa(t[s], a)
          }
          return e
        }
      }, {
        key: "stream",
        value: function(t) {
          if (t) {
            var e = this._data;
            return new il(mn({}, aa, sa.mark((function i() {
              var n, o, r, s;
              return sa.wrap((function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    n = za(t), i.prev = 1, n.s();
                  case 3:
                    if ((o = n.n()).done) {
                      i.next = 11;
                      break
                    }
                    if (r = o.value, null == (s = e.get(r))) {
                      i.next = 9;
                      break
                    }
                    return i.next = 9, [r, s];
                  case 9:
                    i.next = 3;
                    break;
                  case 11:
                    i.next = 16;
                    break;
                  case 13:
                    i.prev = 13, i.t0 = i.catch(1), n.e(i.t0);
                  case 16:
                    return i.prev = 16, n.f(), i.finish(16);
                  case 19:
                  case "end":
                    return i.stop()
                }
              }), i, null, [
                [1, 13, 16, 19]
              ])
            }))))
          }
          var i;
          return new il(mn({}, aa, Fa(i = rs(this._data)).call(i, this._data)))
        }
      }]), i
    }(el),
    rl = function(t) {
      Ms(i, t);
      var e = Ua(i);

      function i(t, n) {
        var o, r;
        return Za(this, i), (r = e.call(this)).length = 0, r._ids = new oa, r._options = n || {}, r._listener = Fa(o = r._onEvent).call(o, Vr(r)), r.setData(t), r
      }
      return Oa(i, [{
        key: "setData",
        value: function(t) {
          if (this._data) {
            this._data.off && this._data.off("*", this._listener);
            var e = this._data.getIds({
                filter: lo(this._options)
              }),
              i = this._data.get(e);
            this._ids.clear(), this.length = 0, this._trigger("remove", {
              items: e,
              oldData: i
            })
          }
          if (null != t) {
            this._data = t;
            for (var n = this._data.getIds({
                filter: lo(this._options)
              }), o = 0, r = n.length; o < r; o++) {
              var s = n[o];
              this._ids.add(s)
            }
            this.length = n.length, this._trigger("add", {
              items: n
            })
          } else this._data = new ol;
          this._data.on && this._data.on("*", this._listener)
        }
      }, {
        key: "refresh",
        value: function() {
          for (var t = this._data.getIds({
              filter: lo(this._options)
            }), e = Fo(this._ids), i = {}, n = [], o = [], r = [], s = 0, a = t.length; s < a; s++) {
            var l = t[s];
            i[l] = !0, this._ids.has(l) || (n.push(l), this._ids.add(l))
          }
          for (var u = 0, h = e.length; u < h; u++) {
            var d = e[u],
              c = this._data.get(d);
            null == c ? console.error("If you see this, report it please.") : i[d] || (o.push(d), r.push(c), this._ids.delete(d))
          }
          this.length += n.length - o.length, n.length && this._trigger("add", {
            items: n
          }), o.length && this._trigger("remove", {
            items: o,
            oldData: r
          })
        }
      }, {
        key: "get",
        value: function(t, e) {
          if (null == this._data) return null;
          var i, n = null;
          $a(t) || Vo(t) ? (n = t, i = e) : i = t;
          var o = Jo({}, this._options, i),
            r = lo(this._options),
            s = i && lo(i);
          return r && s && (o.filter = function(t) {
            return r(t) && s(t)
          }), null == n ? this._data.get(o) : this._data.get(n, o)
        }
      }, {
        key: "getIds",
        value: function(t) {
          if (this._data.length) {
            var e, i = lo(this._options),
              n = null != t ? lo(t) : null;
            return e = n ? i ? function(t) {
              return i(t) && n(t)
            } : n : i, this._data.getIds({
              filter: e,
              order: t && t.order
            })
          }
          return []
        }
      }, {
        key: "forEach",
        value: function(t, e) {
          if (this._data) {
            var i, n, o = lo(this._options),
              r = e && lo(e);
            n = r ? o ? function(t) {
              return o(t) && r(t)
            } : r : o, Yn(i = this._data).call(i, t, {
              filter: n,
              order: e && e.order
            })
          }
        }
      }, {
        key: "map",
        value: function(t, e) {
          if (this._data) {
            var i, n, o = lo(this._options),
              r = e && lo(e);
            return n = r ? o ? function(t) {
              return o(t) && r(t)
            } : r : o, jn(i = this._data).call(i, t, {
              filter: n,
              order: e && e.order
            })
          }
          return []
        }
      }, {
        key: "getDataSet",
        value: function() {
          return this._data.getDataSet()
        }
      }, {
        key: "stream",
        value: function(t) {
          var e;
          return this._data.stream(t || mn({}, aa, Fa(e = xs(this._ids)).call(e, this._ids)))
        }
      }, {
        key: "dispose",
        value: function() {
          var t;
          (null === (t = this._data) || void 0 === t ? void 0 : t.off) && this._data.off("*", this._listener);
          var e = "This data view has already been disposed of.";
          en(this, "_data", {
            get: function() {
              throw new Error(e)
            },
            set: function() {
              throw new Error(e)
            },
            configurable: !1
          })
        }
      }, {
        key: "_onEvent",
        value: function(t, e, i) {
          if (e && e.items && this._data) {
            var n = e.items,
              o = [],
              r = [],
              s = [],
              a = [],
              l = [],
              u = [];
            switch (t) {
              case "add":
                for (var h = 0, d = n.length; h < d; h++) {
                  var c = n[h];
                  this.get(c) && (this._ids.add(c), o.push(c))
                }
                break;
              case "update":
                for (var p = 0, m = n.length; p < m; p++) {
                  var f = n[p];
                  this.get(f) ? this._ids.has(f) ? (r.push(f), l.push(e.data[p]), a.push(e.oldData[p])) : (this._ids.add(f), o.push(f)) : this._ids.has(f) && (this._ids.delete(f), s.push(f), u.push(e.oldData[p]))
                }
                break;
              case "remove":
                for (var g = 0, v = n.length; g < v; g++) {
                  var b = n[g];
                  this._ids.has(b) && (this._ids.delete(b), s.push(b), u.push(e.oldData[g]))
                }
            }
            this.length += o.length - s.length, o.length && this._trigger("add", {
              items: o
            }, i), r.length && this._trigger("update", {
              items: r,
              oldData: a,
              data: l
            }, i), s.length && this._trigger("remove", {
              items: s,
              oldData: u
            }, i)
          }
        }
      }]), i
    }(el),
    sl = "undefined" != typeof window && window.moment || r;

  function al(t, e) {
    var i = vn(t);
    if (un) {
      var n = un(t);
      e && (n = lo(n).call(n, (function(e) {
        return ln(t, e).enumerable
      }))), i.push.apply(i, n)
    }
    return i
  }

  function ll(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i, n = null != arguments[e] ? arguments[e] : {};
      if (e % 2) Yn(i = al(Object(n), !0)).call(i, (function(e) {
        mn(t, e, n[e])
      }));
      else if (rn) nn(t, rn(n));
      else {
        var o;
        Yn(o = al(Object(n))).call(o, (function(e) {
          en(t, e, ln(n, e))
        }))
      }
    }
    return t
  }
  var ul = /^\/?Date\((-?\d+)/i;

  function hl(t, e) {
    var i;
    if (void 0 !== t) {
      if (null === t) return null;
      if (!e) return t;
      if ("string" != typeof e && !(e instanceof String)) throw new Error("Type must be a string");
      switch (e) {
        case "boolean":
        case "Boolean":
          return Boolean(t);
        case "number":
        case "Number":
          return vr(t) && !isNaN(Date.parse(t)) ? r(t).valueOf() : Number(t.valueOf());
        case "string":
        case "String":
          return String(t);
        case "Date":
          if (gr(t)) return new Date(t);
          if (t instanceof Date) return new Date(t.valueOf());
          if (r.isMoment(t)) return new Date(t.valueOf());
          if (vr(t)) return (i = ul.exec(t)) ? new Date(Number(i[1])) : r(new Date(t)).toDate();
          throw new Error("Cannot convert object of type " + _r(t) + " to type Date");
        case "Moment":
          if (gr(t)) return r(t);
          if (t instanceof Date) return r(t.valueOf());
          if (r.isMoment(t)) return r(t);
          if (vr(t)) return i = ul.exec(t), r(i ? Number(i[1]) : t);
          throw new Error("Cannot convert object of type " + _r(t) + " to type Date");
        case "ISODate":
          if (gr(t)) return new Date(t);
          if (t instanceof Date) return t.toISOString();
          if (r.isMoment(t)) return t.toDate().toISOString();
          if (vr(t)) return (i = ul.exec(t)) ? new Date(Number(i[1])).toISOString() : r(t).format();
          throw new Error("Cannot convert object of type " + _r(t) + " to type ISODate");
        case "ASPDate":
          if (gr(t)) return "/Date(" + t + ")/";
          if (t instanceof Date || r.isMoment(t)) return "/Date(" + t.valueOf() + ")/";
          if (vr(t)) return "/Date(" + ((i = ul.exec(t)) ? new Date(Number(i[1])).valueOf() : new Date(t).valueOf()) + ")/";
          throw new Error("Cannot convert object of type " + _r(t) + " to type ASPDate");
        default:
          throw new Error("Unknown type ".concat(e))
      }
    }
  }

  function dl(t) {
    var e, i, n, o, r, s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        start: "Date",
        end: "Date"
      },
      l = t._idProp,
      u = new ol({
        fieldId: l
      }),
      h = jn(e = ja(t)).call(e, (function(t) {
        var e;
        return Ma(e = vn(t)).call(e, (function(e, i) {
          return e[i] = hl(t[i], a[i]), e
        }), {})
      })).to(u);
    return h.all().start(), {
      add: function() {
        var e;
        return (e = t.getDataSet()).add.apply(e, arguments)
      },
      remove: function() {
        var e;
        return (e = t.getDataSet()).remove.apply(e, arguments)
      },
      update: function() {
        var e;
        return (e = t.getDataSet()).update.apply(e, arguments)
      },
      updateOnly: function() {
        var e;
        return (e = t.getDataSet()).updateOnly.apply(e, arguments)
      },
      forEach: Fa(i = Yn(u)).call(i, u),
      get: Fa(n = u.get).call(n, u),
      getIds: Fa(o = u.getIds).call(o, u),
      off: Fa(r = u.off).call(r, u),
      on: Fa(s = u.on).call(s, u),
      get length() {
        return u.length
      },
      idProp: l,
      type: a,
      rawDS: t,
      coercedDS: u,
      dispose: function() {
        return h.stop()
      }
    }
  }
  var cl = ll(ll({}, Or), {}, {
      convert: hl
    }),
    pl = kn.trim,
    ml = f.parseFloat,
    fl = 1 / ml(bn + "-0") != -1 / 0 ? function(t) {
      var e = pl(String(t)),
        i = ml(e);
      return 0 === i && "-" == e.charAt(0) ? -0 : i
    } : ml;
  bt({
    global: !0,
    forced: parseFloat != fl
  }, {
    parseFloat: fl
  });
  var gl = pt.parseFloat,
    vl = function() {
      function t(e, i) {
        Za(this, t), this.options = null, this.props = null
      }
      return Oa(t, [{
        key: "setOptions",
        value: function(t) {
          t && cl.extend(this.options, t)
        }
      }, {
        key: "redraw",
        value: function() {
          return !1
        }
      }, {
        key: "destroy",
        value: function() {}
      }, {
        key: "_isResized",
        value: function() {
          var t = this.props._previousWidth !== this.props.width || this.props._previousHeight !== this.props.height;
          return this.props._previousWidth = this.props.width, this.props._previousHeight = this.props.height, t
        }
      }]), t
    }();
  bt({
    target: "String",
    proto: !0
  }, {
    repeat: "".repeat || function(t) {
      var e = String(d(this)),
        i = "",
        n = Bt(t);
      if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");
      for (; n > 0;
        (n >>>= 1) && (e += e)) 1 & n && (i += e);
      return i
    }
  });
  var bl = In("String").repeat,
    yl = String.prototype,
    xl = function(t) {
      var e = t.repeat;
      return "string" == typeof t || t === yl || t instanceof String && e === yl.repeat ? bl : e
    };

  function wl(t, e, i) {
    if (i && !Vo(i)) return wl(t, e, [i]);
    if (e.hiddenDates = [], i && 1 == Vo(i)) {
      for (var n, o = 0; o < i.length; o++)
        if (void 0 === xl(i[o])) {
          var r = {};
          r.start = t(i[o].start).toDate().valueOf(), r.end = t(i[o].end).toDate().valueOf(), e.hiddenDates.push(r)
        } Ys(n = e.hiddenDates).call(n, (function(t, e) {
        return t.start - e.start
      }))
    }
  }

  function _l(t, e, i) {
    if (i && !Vo(i)) return _l(t, e, [i]);
    if (i && void 0 !== e.domProps.centerContainer.width) {
      wl(t, e, i);
      for (var n = t(e.range.start), o = t(e.range.end), r = (e.range.end - e.range.start) / e.domProps.centerContainer.width, s = 0; s < i.length; s++)
        if (void 0 !== xl(i[s])) {
          var a = t(i[s].start),
            l = t(i[s].end);
          if ("Invalid Date" == a._d) throw new Error("Supplied start date is not valid: ".concat(i[s].start));
          if ("Invalid Date" == l._d) throw new Error("Supplied end date is not valid: ".concat(i[s].end));
          if (l - a >= 4 * r) {
            var u = 0,
              h = o.clone();
            switch (xl(i[s])) {
              case "daily":
                a.day() != l.day() && (u = 1), a.dayOfYear(n.dayOfYear()), a.year(n.year()), a.subtract(7, "days"), l.dayOfYear(n.dayOfYear()), l.year(n.year()), l.subtract(7 - u, "days"), h.add(1, "weeks");
                break;
              case "weekly":
                var d = l.diff(a, "days"),
                  c = a.day();
                a.date(n.date()), a.month(n.month()), a.year(n.year()), l = a.clone(), a.day(c), l.day(c), l.add(d, "days"), a.subtract(1, "weeks"), l.subtract(1, "weeks"), h.add(1, "weeks");
                break;
              case "monthly":
                a.month() != l.month() && (u = 1), a.month(n.month()), a.year(n.year()), a.subtract(1, "months"), l.month(n.month()), l.year(n.year()), l.subtract(1, "months"), l.add(u, "months"), h.add(1, "months");
                break;
              case "yearly":
                a.year() != l.year() && (u = 1), a.year(n.year()), a.subtract(1, "years"), l.year(n.year()), l.subtract(1, "years"), l.add(u, "years"), h.add(1, "years");
                break;
              default:
                return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", xl(i[s]))
            }
            for (; a < h;) switch (e.hiddenDates.push({
              start: a.valueOf(),
              end: l.valueOf()
            }), xl(i[s])) {
              case "daily":
                a.add(1, "days"), l.add(1, "days");
                break;
              case "weekly":
                a.add(1, "weeks"), l.add(1, "weeks");
                break;
              case "monthly":
                a.add(1, "months"), l.add(1, "months");
                break;
              case "yearly":
                a.add(1, "y"), l.add(1, "y");
                break;
              default:
                return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", xl(i[s]))
            }
            e.hiddenDates.push({
              start: a.valueOf(),
              end: l.valueOf()
            })
          }
        } kl(e);
      var p = Fl(e.range.start, e.hiddenDates),
        m = Fl(e.range.end, e.hiddenDates),
        f = e.range.start,
        g = e.range.end;
      1 == p.hidden && (f = 1 == e.range.startToFront ? p.startDate - 1 : p.endDate + 1), 1 == m.hidden && (g = 1 == e.range.endToFront ? m.startDate - 1 : m.endDate + 1), 1 != p.hidden && 1 != m.hidden || e.range._applyRange(f, g)
    }
  }

  function kl(t) {
    for (var e, i = t.hiddenDates, n = [], o = 0; o < i.length; o++)
      for (var r = 0; r < i.length; r++) o != r && 1 != i[r].remove && 1 != i[o].remove && (i[r].start >= i[o].start && i[r].end <= i[o].end ? i[r].remove = !0 : i[r].start >= i[o].start && i[r].start <= i[o].end ? (i[o].end = i[r].end, i[r].remove = !0) : i[r].end >= i[o].start && i[r].end <= i[o].end && (i[o].start = i[r].start, i[r].remove = !0));
    for (o = 0; o < i.length; o++) !0 !== i[o].remove && n.push(i[o]);
    t.hiddenDates = n, Ys(e = t.hiddenDates).call(e, (function(t, e) {
      return t.start - e.start
    }))
  }

  function Dl(t, e, i) {
    for (var n = !1, o = e.current.valueOf(), r = 0; r < e.hiddenDates.length; r++) {
      var s = e.hiddenDates[r].start,
        a = e.hiddenDates[r].end;
      if (o >= s && o < a) {
        n = !0;
        break
      }
    }
    if (1 == n && o < e._end.valueOf() && o != i) {
      var l = t(i),
        u = t(a);
      l.year() != u.year() ? e.switchedYear = !0 : l.month() != u.month() ? e.switchedMonth = !0 : l.dayOfYear() != u.dayOfYear() && (e.switchedDay = !0), e.current = u
    }
  }

  function Il(t, e, i) {
    var n;
    if (0 == t.body.hiddenDates.length) return n = t.range.conversion(i), (e.valueOf() - n.offset) * n.scale;
    var o = Fl(e, t.body.hiddenDates);
    1 == o.hidden && (e = o.startDate);
    var r = Ll(t.body.hiddenDates, t.range.start, t.range.end);
    if (e < t.range.start) {
      n = t.range.conversion(i, r);
      var s = Gl(t.body.hiddenDates, e, n.offset);
      return e = t.options.moment(e).toDate().valueOf(), e += s, -(n.offset - e.valueOf()) * n.scale
    }
    if (e > t.range.end) {
      var a = {
        start: t.range.start,
        end: e
      };
      return e = Sl(t.options.moment, t.body.hiddenDates, a, e), n = t.range.conversion(i, r), (e.valueOf() - n.offset) * n.scale
    }
    return e = Sl(t.options.moment, t.body.hiddenDates, t.range, e), n = t.range.conversion(i, r), (e.valueOf() - n.offset) * n.scale
  }

  function Cl(t, e, i) {
    if (0 == t.body.hiddenDates.length) {
      var n = t.range.conversion(i);
      return new Date(e / n.scale + n.offset)
    }
    var o = Ll(t.body.hiddenDates, t.range.start, t.range.end),
      r = (t.range.end - t.range.start - o) * e / i,
      s = Ql(t.body.hiddenDates, t.range, r);
    return new Date(s + r + t.range.start)
  }

  function Ll(t, e, i) {
    for (var n = 0, o = 0; o < t.length; o++) {
      var r = t[o].start,
        s = t[o].end;
      r >= e && s < i && (n += s - r)
    }
    return n
  }

  function Gl(t, e, i) {
    for (var n = 0, o = 0; o < t.length; o++) {
      var r = t[o].start,
        s = t[o].end;
      r >= e && s <= i && (n += s - r)
    }
    return n
  }

  function Sl(t, e, i, n) {
    return n = t(n).toDate().valueOf(), n -= Ml(t, e, i, n)
  }

  function Ml(t, e, i, n) {
    var o = 0;
    n = t(n).toDate().valueOf();
    for (var r = 0; r < e.length; r++) {
      var s = e[r].start,
        a = e[r].end;
      s >= i.start && a < i.end && n >= a && (o += a - s)
    }
    return o
  }

  function Ql(t, e, i) {
    for (var n = 0, o = 0, r = e.start, s = 0; s < t.length; s++) {
      var a = t[s].start,
        l = t[s].end;
      if (a >= e.start && l < e.end) {
        if (o += a - r, r = l, o >= i) break;
        n += l - a
      }
    }
    return n
  }

  function Nl(t, e, i, n) {
    var o = Fl(e, t);
    return 1 == o.hidden ? i < 0 ? 1 == n ? o.startDate - (o.endDate - e) - 1 : o.startDate - 1 : 1 == n ? o.endDate + (e - o.startDate) + 1 : o.endDate + 1 : e
  }

  function Fl(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i].start,
        o = e[i].end;
      if (t >= n && t < o) return {
        hidden: !0,
        startDate: n,
        endDate: o
      }
    }
    return {
      hidden: !1,
      startDate: n,
      endDate: o
    }
  }
  var Zl = Object.freeze({
    __proto__: null,
    convertHiddenOptions: wl,
    updateHiddenDates: _l,
    removeDuplicates: kl,
    printDates: function(t) {
      for (var e = 0; e < t.length; e++) console.log(e, new Date(t[e].start), new Date(t[e].end), t[e].start, t[e].end, t[e].remove)
    },
    stepOverHiddenDates: Dl,
    toScreen: Il,
    toTime: Cl,
    getHiddenDurationBetween: Ll,
    getHiddenDurationBeforeStart: Gl,
    correctTimeForHidden: Sl,
    getHiddenDurationBefore: Ml,
    getAccumulatedHiddenDuration: Ql,
    snapAwayFromHidden: Nl,
    getIsHidden: Fl
  });

  function Bl(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  var Ol = function(t) {
    Ms(i, t);
    var e = Bl(i);

    function i(t, n) {
      var o, r, s, a, l, u, h, d;
      Za(this, i), d = e.call(this);
      var c = sl().hours(0).minutes(0).seconds(0).milliseconds(0),
        p = c.clone().add(-3, "days").valueOf(),
        m = c.clone().add(3, "days").valueOf();
      return d.millisecondsPerPixelCache = void 0, void 0 === n ? (d.start = p, d.end = m) : (d.start = n.start || p, d.end = n.end || m), d.rolling = !1, d.body = t, d.deltaDifference = 0, d.scaleOffset = 0, d.startToFront = !1, d.endToFront = !0, d.defaultOptions = {
        rtl: !1,
        start: null,
        end: null,
      // end: 2030,
        moment: sl,
        direction: "horizontal",
        // moveable: !0,
            moveable: null,
        // zoomable: !0,
          zoomable: null,
        min: null,
        max: null,
        // min: "1/1/1990",
        // max: "1/1/2030",
        zoomMin: 10000000000,
        zoomMax: 31536e10,
        rollingMode: {
          follow: !1,
          offset: .5
        }
      }, d.options = cl.extend({}, d.defaultOptions), d.props = {
        touch: {}
      }, d.animationTimer = null, d.body.emitter.on("panstart", Fa(o = d._onDragStart).call(o, Vr(d))), d.body.emitter.on("panmove", Fa(r = d._onDrag).call(r, Vr(d))), d.body.emitter.on("panend", Fa(s = d._onDragEnd).call(s, Vr(d))), d.body.emitter.on("mousewheel", Fa(a = d._onMouseWheel).call(a, Vr(d))), d.body.emitter.on("touch", Fa(l = d._onTouch).call(l, Vr(d))), d.body.emitter.on("pinch", Fa(u = d._onPinch).call(u, Vr(d))), d.body.dom.rollingModeBtn.addEventListener("click", Fa(h = d.startRolling).call(h, Vr(d))), d.setOptions(n), d
    }
    return Oa(i, [{
      key: "setOptions",
      value: function(t) {
        if (t) {
          cl.selectiveExtend(["animation", "direction", "min", "max", "zoomMin", "zoomMax", "moveable", "zoomable", "moment", "activate", "hiddenDates", "zoomKey", "zoomFriction", "rtl", "showCurrentTime", "rollingMode", "horizontalScroll"], this.options, t), t.rollingMode && t.rollingMode.follow && this.startRolling(), ("start" in t || "end" in t) && this.setRange(t.start, t.end)
        }
      }
    }, {
      key: "startRolling",
      value: function() {
        var t = this;
        ! function e() {
          t.stopRolling(), t.rolling = !0;
          var i = t.end - t.start,
            n = cl.convert(new Date, "Date").valueOf(),
            o = t.options.rollingMode && t.options.rollingMode.offset || .5,
            r = n - i * o,
            s = n + i * (1 - o);
          t.setRange(r, s, {
            animation: !1
          }), (i = 1 / t.conversion(t.body.domProps.center.width).scale / 10) < 30 && (i = 30), i > 1e3 && (i = 1e3), t.body.dom.rollingModeBtn.style.visibility = "hidden", t.currentTimeTimer = ba(e, i)
        }()
      }
    }, {
      key: "stopRolling",
      value: function() {
        void 0 !== this.currentTimeTimer && (clearTimeout(this.currentTimeTimer), this.rolling = !1, this.body.dom.rollingModeBtn.style.visibility = "visible")
      }
    }, {
      key: "setRange",
      value: function(t, e, i, n, o) {
        i || (i = {}), !0 !== i.byUser && (i.byUser = !1);
        var r = this,
          s = null != t ? cl.convert(t, "Date").valueOf() : null,
          a = null != e ? cl.convert(e, "Date").valueOf() : null;
        if (this._cancelAnimation(), this.millisecondsPerPixelCache = void 0, i.animation) {
          var l, u = this.start,
            h = this.end,
            d = "object" === $o(i.animation) && "duration" in i.animation ? i.animation.duration : 500,
            c = "object" === $o(i.animation) && "easingFunction" in i.animation ? i.animation.easingFunction : "easeInOutQuad",
            p = cl.easingFunctions[c];
          if (!p) throw new Error(co(l = "Unknown easing function ".concat(cs(c), ". Choose from: ")).call(l, vn(cl.easingFunctions).join(", ")));
          var m = or(),
            f = !1;
          return function t() {
            if (!r.props.touch.dragging) {
              var e = or() - m,
                l = p(e / d),
                c = e > d,
                v = c || null === s ? s : u + (s - u) * l,
                b = c || null === a ? a : h + (a - h) * l;
              g = r._applyRange(v, b), _l(r.options.moment, r.body, r.options.hiddenDates), f = f || g;
              var y = {
                start: new Date(r.start),
                end: new Date(r.end),
                byUser: i.byUser,
                event: i.event
              };
              if (o && o(l, g, c), g && r.body.emitter.emit("rangechange", y), c) {
                if (f && (r.body.emitter.emit("rangechanged", y), n)) return n()
              } else r.animationTimer = ba(t, 20)
            }
          }()
        }
        var g = this._applyRange(s, a);
        if (_l(this.options.moment, this.body, this.options.hiddenDates), g) {
          var v = {
            start: new Date(this.start),
            end: new Date(this.end),
            byUser: i.byUser,
            event: i.event
          };
          if (this.body.emitter.emit("rangechange", v), clearTimeout(r.timeoutID), r.timeoutID = ba((function() {
              r.body.emitter.emit("rangechanged", v)
            }), 200), n) return n()
        }
      }
    }, {
      key: "getMillisecondsPerPixel",
      value: function() {
        return void 0 === this.millisecondsPerPixelCache && (this.millisecondsPerPixelCache = (this.end - this.start) / this.body.dom.center.clientWidth), this.millisecondsPerPixelCache
      }
    }, {
      key: "_cancelAnimation",
      value: function() {
        this.animationTimer && (clearTimeout(this.animationTimer), this.animationTimer = null)
      }
    }, {
      key: "_applyRange",
      value: function(t, e) {
        var i, n = null != t ? cl.convert(t, "Date").valueOf() : this.start,
          o = null != e ? cl.convert(e, "Date").valueOf() : this.end,
          r = null != this.options.max ? cl.convert(this.options.max, "Date").valueOf() : null,
          s = null != this.options.min ? cl.convert(this.options.min, "Date").valueOf() : null;
        if (isNaN(n) || null === n) throw new Error('Invalid start "'.concat(t, '"'));
        if (isNaN(o) || null === o) throw new Error('Invalid end "'.concat(e, '"'));
        if (o < n && (o = n), null !== s && n < s && (n += i = s - n, o += i, null != r && o > r && (o = r)), null !== r && o > r && (n -= i = o - r, o -= i, null != s && n < s && (n = s)), null !== this.options.zoomMin) {
          var a = gl(this.options.zoomMin);
          if (a < 0 && (a = 0), o - n < a) {
            this.end - this.start === a && n >= this.start - .5 && o <= this.end ? (n = this.start, o = this.end) : (n -= (i = a - (o - n)) / 2, o += i / 2)
          }
        }
        if (null !== this.options.zoomMax) {
          var l = gl(this.options.zoomMax);
          l < 0 && (l = 0), o - n > l && (this.end - this.start === l && n < this.start && o > this.end ? (n = this.start, o = this.end) : (n += (i = o - n - l) / 2, o -= i / 2))
        }
        var u = this.start != n || this.end != o;
        return n >= this.start && n <= this.end || o >= this.start && o <= this.end || this.start >= n && this.start <= o || this.end >= n && this.end <= o || this.body.emitter.emit("checkRangedItems"), this.start = n, this.end = o, u
      }
    }, {
      key: "getRange",
      value: function() {
        return {
          start: this.start,
          end: this.end
        }
      }
    }, {
      key: "conversion",
      value: function(t, e) {
        return i.conversion(this.start, this.end, t, e)
      }
    }, {
      key: "_onDragStart",
      value: function(t) {
        this.deltaDifference = 0, this.previousDelta = 0, this.options.moveable && this._isInsideRange(t) && this.props.touch.allowDragging && (this.stopRolling(), this.props.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.dragging = !0, this.body.dom.root && (this.body.dom.root.style.cursor = "move"))
      }
    }, {
      key: "_onDrag",
      value: function(t) {
        if (t && this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging) {
          var e = this.options.direction;
          Al(e);
          var i = "horizontal" == e ? t.deltaX : t.deltaY;
          i -= this.deltaDifference;
          var n = this.props.touch.end - this.props.touch.start;
          n -= Ll(this.body.hiddenDates, this.start, this.end);
          var o, r = "horizontal" == e ? this.body.domProps.center.width : this.body.domProps.center.height;
          o = this.options.rtl ? i / r * n : -i / r * n;
          var s = this.props.touch.start + o,
            a = this.props.touch.end + o,
            l = Nl(this.body.hiddenDates, s, this.previousDelta - i, !0),
            u = Nl(this.body.hiddenDates, a, this.previousDelta - i, !0);
          if (l != s || u != a) return this.deltaDifference += i, this.props.touch.start = l, this.props.touch.end = u, void this._onDrag(t);
          this.previousDelta = i, this._applyRange(s, a);
          var h = new Date(this.start),
            d = new Date(this.end);
          this.body.emitter.emit("rangechange", {
            start: h,
            end: d,
            byUser: !0,
            event: t
          }), this.body.emitter.emit("panmove")
        }
      }
    }, {
      key: "_onDragEnd",
      value: function(t) {
        this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging && (this.props.touch.dragging = !1, this.body.dom.root && (this.body.dom.root.style.cursor = "auto"), this.body.emitter.emit("rangechanged", {
          start: new Date(this.start),
          end: new Date(this.end),
          byUser: !0,
          event: t
        }))
      }
    }, {
      key: "_onMouseWheel",
      value: function(t) {
        var e = 0;
        if (t.wheelDelta ? e = t.wheelDelta / 120 : t.detail ? e = -t.detail / 3 : t.deltaY && (e = -t.deltaY / 3), !(this.options.zoomKey && !t[this.options.zoomKey] && this.options.zoomable || !this.options.zoomable && this.options.moveable) && this.options.zoomable && this.options.moveable && this._isInsideRange(t) && e) {
          var i, n, o = this.options.zoomFriction || 5;
          if (i = e < 0 ? 1 - e / o : 1 / (1 + e / o), this.rolling) {
            var r = this.options.rollingMode && this.options.rollingMode.offset || .5;
            n = this.start + (this.end - this.start) * r
          } else {
            var s = this.getPointer({
              x: t.clientX,
              y: t.clientY
            }, this.body.dom.center);
            n = this._pointerToDate(s)
          }
          this.zoom(i, n, e, t), t.preventDefault()
        }
      }
    }, {
      key: "_onTouch",
      value: function(t) {
        this.props.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.allowDragging = !0, this.props.touch.center = null, this.props.touch.centerDate = null, this.scaleOffset = 0, this.deltaDifference = 0, cl.preventDefault(t)
      }
    }, {
      key: "_onPinch",
      value: function(t) {
        if (this.options.zoomable && this.options.moveable) {
          cl.preventDefault(t), this.props.touch.allowDragging = !1, this.props.touch.center || (this.props.touch.center = this.getPointer(t.center, this.body.dom.center), this.props.touch.centerDate = this._pointerToDate(this.props.touch.center)), this.stopRolling();
          var e = 1 / (t.scale + this.scaleOffset),
            i = this.props.touch.centerDate,
            n = Ll(this.body.hiddenDates, this.start, this.end),
            o = Ml(this.options.moment, this.body.hiddenDates, this, i),
            r = n - o,
            s = i - o + (this.props.touch.start - (i - o)) * e,
            a = i + r + (this.props.touch.end - (i + r)) * e;
          this.startToFront = 1 - e <= 0, this.endToFront = e - 1 <= 0;
          var l = Nl(this.body.hiddenDates, s, 1 - e, !0),
            u = Nl(this.body.hiddenDates, a, e - 1, !0);
          l == s && u == a || (this.props.touch.start = l, this.props.touch.end = u, this.scaleOffset = 1 - t.scale, s = l, a = u);
          var h = {
            animation: !1,
            byUser: !0,
            event: t
          };
          this.setRange(s, a, h), this.startToFront = !1, this.endToFront = !0
        }
      }
    }, {
      key: "_isInsideRange",
      value: function(t) {
        var e = t.center ? t.center.x : t.clientX,
          i = this.body.dom.centerContainer.getBoundingClientRect(),
          n = this.options.rtl ? e - i.left : i.right - e,
          o = this.body.util.toTime(n);
        return o >= this.start && o <= this.end
      }
    }, {
      key: "_pointerToDate",
      value: function(t) {
        var e, i = this.options.direction;
        if (Al(i), "horizontal" == i) return this.body.util.toTime(t.x).valueOf();
        var n = this.body.domProps.center.height;
        return e = this.conversion(n), t.y / e.scale + e.offset
      }
    }, {
      key: "getPointer",
      value: function(t, e) {
        var i = e.getBoundingClientRect();
        return this.options.rtl ? {
          x: i.right - t.x,
          y: t.y - i.top
        } : {
          x: t.x - i.left,
          y: t.y - i.top
        }
      }
    }, {
      key: "zoom",
      value: function(t, e, i, n) {
        null == e && (e = (this.start + this.end) / 2);
        var o = Ll(this.body.hiddenDates, this.start, this.end),
          r = Ml(this.options.moment, this.body.hiddenDates, this, e),
          s = o - r,
          a = e - r + (this.start - (e - r)) * t,
          l = e + s + (this.end - (e + s)) * t;
        this.startToFront = !(i > 0), this.endToFront = !(-i > 0);
        var u = Nl(this.body.hiddenDates, a, i, !0),
          h = Nl(this.body.hiddenDates, l, -i, !0);
        u == a && h == l || (a = u, l = h);
        var d = {
          animation: !1,
          byUser: !0,
          event: n
        };
        this.setRange(a, l, d), this.startToFront = !1, this.endToFront = !0
      }
    }, {
      key: "move",
      value: function(t) {
        var e = this.end - this.start,
          i = this.start + e * t,
          n = this.end + e * t;
        this.start = i, this.end = n
      }
    }, {
      key: "moveTo",
      value: function(t) {
        var e = (this.start + this.end) / 2 - t,
          i = this.start - e,
          n = this.end - e;
        this.setRange(i, n, {
          animation: !1,
          byUser: !0,
          event: null
        })
      }
    }], [{
      key: "conversion",
      value: function(t, e, i, n) {
        return void 0 === n && (n = 0), 0 != i && e - t != 0 ? {
          offset: t,
          scale: i / (e - t - n)
        } : {
          offset: 0,
          scale: 1
        }
      }
    }]), i
  }(vl);

  function Al(t) {
    if ("horizontal" != t && "vertical" != t) throw new TypeError('Unknown direction "'.concat(t, '". Choose "horizontal" or "vertical".'))
  }
  var Wl = pt.setInterval,
    Xl = i((function(t) {
      function e(t) {
        if (t) return function(t) {
          for (var i in e.prototype) t[i] = e.prototype[i];
          return t
        }(t)
      }
      t.exports = e, e.prototype.on = e.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
      }, e.prototype.once = function(t, e) {
        function i() {
          this.off(t, i), e.apply(this, arguments)
        }
        return i.fn = e, this.on(t, i), this
      }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var i, n = this._callbacks["$" + t];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var o = 0; o < n.length; o++)
          if ((i = n[o]) === e || i.fn === e) {
            n.splice(o, 1);
            break
          } return 0 === n.length && delete this._callbacks["$" + t], this
      }, e.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), i = this._callbacks["$" + t], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (i) {
          n = 0;
          for (var o = (i = i.slice(0)).length; n < o; ++n) i[n].apply(this, e)
        }
        return this
      }, e.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
      }, e.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
      }
    })),
    Tl = i((function(t, e) {
      var i;
      t.exports = (i = null, function t(e, n) {
        var o = n || {
          preventDefault: !1
        };
        if (e.Manager) {
          var r = e,
            s = function(e, i) {
              var n = Object.create(o);
              return i && r.assign(n, i), t(new r(e, n), n)
            };
          return r.assign(s, r), s.Manager = function(e, i) {
            var n = Object.create(o);
            return i && r.assign(n, i), t(new r.Manager(e, n), n)
          }, s
        }
        var a = Object.create(e),
          l = e.element;

        function u(t) {
          return t.match(/[^ ]+/g)
        }

        function h(t) {
          if ("hammer.input" !== t.type) {
            if (t.srcEvent._handled || (t.srcEvent._handled = {}), t.srcEvent._handled[t.type]) return;
            t.srcEvent._handled[t.type] = !0
          }
          var e = !1;
          t.stopPropagation = function() {
            e = !0
          };
          var n = t.srcEvent.stopPropagation.bind(t.srcEvent);
          "function" == typeof n && (t.srcEvent.stopPropagation = function() {
            n(), t.stopPropagation()
          }), t.firstTarget = i;
          for (var o = i; o && !e;) {
            var r = o.hammer;
            if (r)
              for (var s, a = 0; a < r.length; a++)
                if (s = r[a]._handlers[t.type])
                  for (var l = 0; l < s.length && !e; l++) s[l](t);
            o = o.parentNode
          }
        }
        return l.hammer || (l.hammer = []), l.hammer.push(a), e.on("hammer.input", (function(t) {
          !0 !== o.preventDefault && o.preventDefault !== t.pointerType || t.preventDefault(), t.isFirst && (i = t.target)
        })), a._handlers = {}, a.on = function(t, i) {
          return u(t).forEach((function(t) {
            var n = a._handlers[t];
            n || (a._handlers[t] = n = [], e.on(t, h)), n.push(i)
          })), a
        }, a.off = function(t, i) {
          return u(t).forEach((function(t) {
            var n = a._handlers[t];
            n && ((n = i ? n.filter((function(t) {
              return t !== i
            })) : []).length > 0 ? a._handlers[t] = n : (e.off(t, h), delete a._handlers[t]))
          })), a
        }, a.emit = function(t, n) {
          i = n.target, e.emit(t, n)
        }, a.destroy = function() {
          var t = e.element.hammer,
            i = t.indexOf(a); - 1 !== i && t.splice(i, 1), t.length || delete e.element.hammer, a._handlers = {}, e.destroy()
        }, a
      })
    }));
  /*! Hammer.JS - v2.0.17-rc - 2019-12-16
   * http://naver.github.io/egjs
   *
   * Forked By Naver egjs
   * Copyright (c) hammerjs
   * Licensed under the MIT license */
  function Yl() {
    return (Yl = Object.assign || function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
      }
      return t
    }).apply(this, arguments)
  }

  function El(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
  }

  function Rl(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }
  var Ul, zl = "function" != typeof Object.assign ? function(t) {
      if (null == t) throw new TypeError("Cannot convert undefined or null to object");
      for (var e = Object(t), i = 1; i < arguments.length; i++) {
        var n = arguments[i];
        if (null != n)
          for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
      }
      return e
    } : Object.assign,
    Vl = ["", "webkit", "Moz", "MS", "ms", "o"],
    jl = "undefined" == typeof document ? {
      style: {}
    } : document.createElement("div"),
    Hl = Math.round,
    Pl = Math.abs,
    Jl = Date.now;

  function Kl(t, e) {
    for (var i, n, o = e[0].toUpperCase() + e.slice(1), r = 0; r < Vl.length;) {
      if ((n = (i = Vl[r]) ? i + o : e) in t) return n;
      r++
    }
  }
  Ul = "undefined" == typeof window ? {} : window;
  var ql = Kl(jl.style, "touchAction"),
    $l = void 0 !== ql;
  var tu = function() {
      if (!$l) return !1;
      var t = {},
        e = Ul.CSS && Ul.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
        return t[i] = !e || Ul.CSS.supports("touch-action", i)
      })), t
    }(),
    eu = "ontouchstart" in Ul,
    iu = void 0 !== Kl(Ul, "PointerEvent"),
    nu = eu && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
    ou = ["x", "y"],
    ru = ["clientX", "clientY"];

  function su(t, e, i) {
    var n;
    if (t)
      if (t.forEach) t.forEach(e, i);
      else if (void 0 !== t.length)
      for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
    else
      for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
  }

  function au(t, e) {
    return "function" == typeof t ? t.apply(e && e[0] || void 0, e) : t
  }

  function lu(t, e) {
    return t.indexOf(e) > -1
  }
  var uu = function() {
    function t(t, e) {
      this.manager = t, this.set(e)
    }
    var e = t.prototype;
    return e.set = function(t) {
      "compute" === t && (t = this.compute()), $l && this.manager.element.style && tu[t] && (this.manager.element.style[ql] = t), this.actions = t.toLowerCase().trim()
    }, e.update = function() {
      this.set(this.manager.options.touchAction)
    }, e.compute = function() {
      var t = [];
      return su(this.manager.recognizers, (function(e) {
          au(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
        })),
        function(t) {
          if (lu(t, "none")) return "none";
          var e = lu(t, "pan-x"),
            i = lu(t, "pan-y");
          return e && i ? "none" : e || i ? e ? "pan-x" : "pan-y" : lu(t, "manipulation") ? "manipulation" : "auto"
        }(t.join(" "))
    }, e.preventDefaults = function(t) {
      var e = t.srcEvent,
        i = t.offsetDirection;
      if (this.manager.session.prevented) e.preventDefault();
      else {
        var n = this.actions,
          o = lu(n, "none") && !tu.none,
          r = lu(n, "pan-y") && !tu["pan-y"],
          s = lu(n, "pan-x") && !tu["pan-x"];
        if (o) {
          var a = 1 === t.pointers.length,
            l = t.distance < 2,
            u = t.deltaTime < 250;
          if (a && l && u) return
        }
        if (!s || !r) return o || r && 6 & i || s && 24 & i ? this.preventSrc(e) : void 0
      }
    }, e.preventSrc = function(t) {
      this.manager.session.prevented = !0, t.preventDefault()
    }, t
  }();

  function hu(t, e) {
    for (; t;) {
      if (t === e) return !0;
      t = t.parentNode
    }
    return !1
  }

  function du(t) {
    var e = t.length;
    if (1 === e) return {
      x: Hl(t[0].clientX),
      y: Hl(t[0].clientY)
    };
    for (var i = 0, n = 0, o = 0; o < e;) i += t[o].clientX, n += t[o].clientY, o++;
    return {
      x: Hl(i / e),
      y: Hl(n / e)
    }
  }

  function cu(t) {
    for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
      clientX: Hl(t.pointers[i].clientX),
      clientY: Hl(t.pointers[i].clientY)
    }, i++;
    return {
      timeStamp: Jl(),
      pointers: e,
      center: du(e),
      deltaX: t.deltaX,
      deltaY: t.deltaY
    }
  }

  function pu(t, e, i) {
    i || (i = ou);
    var n = e[i[0]] - t[i[0]],
      o = e[i[1]] - t[i[1]];
    return Math.sqrt(n * n + o * o)
  }

  function mu(t, e, i) {
    i || (i = ou);
    var n = e[i[0]] - t[i[0]],
      o = e[i[1]] - t[i[1]];
    return 180 * Math.atan2(o, n) / Math.PI
  }

  function fu(t, e) {
    return t === e ? 1 : Pl(t) >= Pl(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : 16
  }

  function gu(t, e, i) {
    return {
      x: e / t || 0,
      y: i / t || 0
    }
  }

  function vu(t, e) {
    var i = t.session,
      n = e.pointers,
      o = n.length;
    i.firstInput || (i.firstInput = cu(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = cu(e) : 1 === o && (i.firstMultiple = !1);
    var r = i.firstInput,
      s = i.firstMultiple,
      a = s ? s.center : r.center,
      l = e.center = du(n);
    e.timeStamp = Jl(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = mu(a, l), e.distance = pu(a, l),
      function(t, e) {
        var i = e.center,
          n = t.offsetDelta || {},
          o = t.prevDelta || {},
          r = t.prevInput || {};
        1 !== e.eventType && 4 !== r.eventType || (o = t.prevDelta = {
          x: r.deltaX || 0,
          y: r.deltaY || 0
        }, n = t.offsetDelta = {
          x: i.x,
          y: i.y
        }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
      }(i, e), e.offsetDirection = fu(e.deltaX, e.deltaY);
    var u, h, d = gu(e.deltaTime, e.deltaX, e.deltaY);
    e.overallVelocityX = d.x, e.overallVelocityY = d.y, e.overallVelocity = Pl(d.x) > Pl(d.y) ? d.x : d.y, e.scale = s ? (u = s.pointers, pu((h = n)[0], h[1], ru) / pu(u[0], u[1], ru)) : 1, e.rotation = s ? function(t, e) {
        return mu(e[1], e[0], ru) + mu(t[1], t[0], ru)
      }(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
      function(t, e) {
        var i, n, o, r, s = t.lastInterval || e,
          a = e.timeStamp - s.timeStamp;
        if (8 !== e.eventType && (a > 25 || void 0 === s.velocity)) {
          var l = e.deltaX - s.deltaX,
            u = e.deltaY - s.deltaY,
            h = gu(a, l, u);
          n = h.x, o = h.y, i = Pl(h.x) > Pl(h.y) ? h.x : h.y, r = fu(l, u), t.lastInterval = e
        } else i = s.velocity, n = s.velocityX, o = s.velocityY, r = s.direction;
        e.velocity = i, e.velocityX = n, e.velocityY = o, e.direction = r
      }(i, e);
    var c, p = t.element,
      m = e.srcEvent;
    hu(c = m.composedPath ? m.composedPath()[0] : m.path ? m.path[0] : m.target, p) && (p = c), e.target = p
  }

  function bu(t, e, i) {
    var n = i.pointers.length,
      o = i.changedPointers.length,
      r = 1 & e && n - o == 0,
      s = 12 & e && n - o == 0;
    i.isFirst = !!r, i.isFinal = !!s, r && (t.session = {}), i.eventType = e, vu(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
  }

  function yu(t) {
    return t.trim().split(/\s+/g)
  }

  function xu(t, e, i) {
    su(yu(e), (function(e) {
      t.addEventListener(e, i, !1)
    }))
  }

  function wu(t, e, i) {
    su(yu(e), (function(e) {
      t.removeEventListener(e, i, !1)
    }))
  }

  function _u(t) {
    var e = t.ownerDocument || t;
    return e.defaultView || e.parentWindow || window
  }
  var ku = function() {
    function t(t, e) {
      var i = this;
      this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
        au(t.options.enable, [t]) && i.handler(e)
      }, this.init()
    }
    var e = t.prototype;
    return e.handler = function() {}, e.init = function() {
      this.evEl && xu(this.element, this.evEl, this.domHandler), this.evTarget && xu(this.target, this.evTarget, this.domHandler), this.evWin && xu(_u(this.element), this.evWin, this.domHandler)
    }, e.destroy = function() {
      this.evEl && wu(this.element, this.evEl, this.domHandler), this.evTarget && wu(this.target, this.evTarget, this.domHandler), this.evWin && wu(_u(this.element), this.evWin, this.domHandler)
    }, t
  }();

  function Du(t, e, i) {
    if (t.indexOf && !i) return t.indexOf(e);
    for (var n = 0; n < t.length;) {
      if (i && t[n][i] == e || !i && t[n] === e) return n;
      n++
    }
    return -1
  }
  var Iu = {
      pointerdown: 1,
      pointermove: 2,
      pointerup: 4,
      pointercancel: 8,
      pointerout: 8
    },
    Cu = {
      2: "touch",
      3: "pen",
      4: "mouse",
      5: "kinect"
    },
    Lu = "pointerdown",
    Gu = "pointermove pointerup pointercancel";
  Ul.MSPointerEvent && !Ul.PointerEvent && (Lu = "MSPointerDown", Gu = "MSPointerMove MSPointerUp MSPointerCancel");
  var Su = function(t) {
    function e() {
      var i, n = e.prototype;
      return n.evEl = Lu, n.evWin = Gu, (i = t.apply(this, arguments) || this).store = i.manager.session.pointerEvents = [], i
    }
    return El(e, t), e.prototype.handler = function(t) {
      var e = this.store,
        i = !1,
        n = t.type.toLowerCase().replace("ms", ""),
        o = Iu[n],
        r = Cu[t.pointerType] || t.pointerType,
        s = "touch" === r,
        a = Du(e, t.pointerId, "pointerId");
      1 & o && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : 12 & o && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, o, {
        pointers: e,
        changedPointers: [t],
        pointerType: r,
        srcEvent: t
      }), i && e.splice(a, 1))
    }, e
  }(ku);

  function Mu(t) {
    return Array.prototype.slice.call(t, 0)
  }

  function Qu(t, e, i) {
    for (var n = [], o = [], r = 0; r < t.length;) {
      var s = e ? t[r][e] : t[r];
      Du(o, s) < 0 && n.push(t[r]), o[r] = s, r++
    }
    return i && (n = e ? n.sort((function(t, i) {
      return t[e] > i[e]
    })) : n.sort()), n
  }
  var Nu = {
      touchstart: 1,
      touchmove: 2,
      touchend: 4,
      touchcancel: 8
    },
    Fu = function(t) {
      function e() {
        var i;
        return e.prototype.evTarget = "touchstart touchmove touchend touchcancel", (i = t.apply(this, arguments) || this).targetIds = {}, i
      }
      return El(e, t), e.prototype.handler = function(t) {
        var e = Nu[t.type],
          i = Zu.call(this, t, e);
        i && this.callback(this.manager, e, {
          pointers: i[0],
          changedPointers: i[1],
          pointerType: "touch",
          srcEvent: t
        })
      }, e
    }(ku);

  function Zu(t, e) {
    var i, n, o = Mu(t.touches),
      r = this.targetIds;
    if (3 & e && 1 === o.length) return r[o[0].identifier] = !0, [o, o];
    var s = Mu(t.changedTouches),
      a = [],
      l = this.target;
    if (n = o.filter((function(t) {
        return hu(t.target, l)
      })), 1 === e)
      for (i = 0; i < n.length;) r[n[i].identifier] = !0, i++;
    for (i = 0; i < s.length;) r[s[i].identifier] && a.push(s[i]), 12 & e && delete r[s[i].identifier], i++;
    return a.length ? [Qu(n.concat(a), "identifier", !0), a] : void 0
  }
  var Bu = {
      mousedown: 1,
      mousemove: 2,
      mouseup: 4
    },
    Ou = function(t) {
      function e() {
        var i, n = e.prototype;
        return n.evEl = "mousedown", n.evWin = "mousemove mouseup", (i = t.apply(this, arguments) || this).pressed = !1, i
      }
      return El(e, t), e.prototype.handler = function(t) {
        var e = Bu[t.type];
        1 & e && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = 4), this.pressed && (4 & e && (this.pressed = !1), this.callback(this.manager, e, {
          pointers: [t],
          changedPointers: [t],
          pointerType: "mouse",
          srcEvent: t
        }))
      }, e
    }(ku);

  function Au(t) {
    var e = t.changedPointers[0];
    if (e.identifier === this.primaryTouch) {
      var i = {
          x: e.clientX,
          y: e.clientY
        },
        n = this.lastTouches;
      this.lastTouches.push(i);
      setTimeout((function() {
        var t = n.indexOf(i);
        t > -1 && n.splice(t, 1)
      }), 2500)
    }
  }

  function Wu(t, e) {
    1 & t ? (this.primaryTouch = e.changedPointers[0].identifier, Au.call(this, e)) : 12 & t && Au.call(this, e)
  }

  function Xu(t) {
    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
      var o = this.lastTouches[n],
        r = Math.abs(e - o.x),
        s = Math.abs(i - o.y);
      if (r <= 25 && s <= 25) return !0
    }
    return !1
  }
  var Tu = function() {
    return function(t) {
      function e(e, i) {
        var n;
        return (n = t.call(this, e, i) || this).handler = function(t, e, i) {
          var o = "touch" === i.pointerType,
            r = "mouse" === i.pointerType;
          if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
            if (o) Wu.call(Rl(Rl(n)), e, i);
            else if (r && Xu.call(Rl(Rl(n)), i)) return;
            n.callback(t, e, i)
          }
        }, n.touch = new Fu(n.manager, n.handler), n.mouse = new Ou(n.manager, n.handler), n.primaryTouch = null, n.lastTouches = [], n
      }
      return El(e, t), e.prototype.destroy = function() {
        this.touch.destroy(), this.mouse.destroy()
      }, e
    }(ku)
  }();

  function Yu(t, e, i) {
    return !!Array.isArray(t) && (su(t, i[e], i), !0)
  }
  var Eu = 1;

  function Ru(t, e) {
    var i = e.manager;
    return i ? i.get(t) : t
  }

  function Uu(t) {
    return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
  }
  var zu = function() {
      function t(t) {
        void 0 === t && (t = {}), this.options = Yl({
          enable: !0
        }, t), this.id = Eu++, this.manager = null, this.state = 1, this.simultaneous = {}, this.requireFail = []
      }
      var e = t.prototype;
      return e.set = function(t) {
        return zl(this.options, t), this.manager && this.manager.touchAction.update(), this
      }, e.recognizeWith = function(t) {
        if (Yu(t, "recognizeWith", this)) return this;
        var e = this.simultaneous;
        return e[(t = Ru(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
      }, e.dropRecognizeWith = function(t) {
        return Yu(t, "dropRecognizeWith", this) || (t = Ru(t, this), delete this.simultaneous[t.id]), this
      }, e.requireFailure = function(t) {
        if (Yu(t, "requireFailure", this)) return this;
        var e = this.requireFail;
        return -1 === Du(e, t = Ru(t, this)) && (e.push(t), t.requireFailure(this)), this
      }, e.dropRequireFailure = function(t) {
        if (Yu(t, "dropRequireFailure", this)) return this;
        t = Ru(t, this);
        var e = Du(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this
      }, e.hasRequireFailures = function() {
        return this.requireFail.length > 0
      }, e.canRecognizeWith = function(t) {
        return !!this.simultaneous[t.id]
      }, e.emit = function(t) {
        var e = this,
          i = this.state;

        function n(i) {
          e.manager.emit(i, t)
        }
        i < 8 && n(e.options.event + Uu(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= 8 && n(e.options.event + Uu(i))
      }, e.tryEmit = function(t) {
        if (this.canEmit()) return this.emit(t);
        this.state = 32
      }, e.canEmit = function() {
        for (var t = 0; t < this.requireFail.length;) {
          if (!(33 & this.requireFail[t].state)) return !1;
          t++
        }
        return !0
      }, e.recognize = function(t) {
        var e = zl({}, t);
        if (!au(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
        56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
      }, e.process = function(t) {}, e.getTouchAction = function() {}, e.reset = function() {}, t
    }(),
    Vu = function(t) {
      function e(e) {
        var i;
        return void 0 === e && (e = {}), (i = t.call(this, Yl({
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10
        }, e)) || this).pTime = !1, i.pCenter = !1, i._timer = null, i._input = null, i.count = 0, i
      }
      El(e, t);
      var i = e.prototype;
      return i.getTouchAction = function() {
        return ["manipulation"]
      }, i.process = function(t) {
        var e = this,
          i = this.options,
          n = t.pointers.length === i.pointers,
          o = t.distance < i.threshold,
          r = t.deltaTime < i.time;
        if (this.reset(), 1 & t.eventType && 0 === this.count) return this.failTimeout();
        if (o && r && n) {
          if (4 !== t.eventType) return this.failTimeout();
          var s = !this.pTime || t.timeStamp - this.pTime < i.interval,
            a = !this.pCenter || pu(this.pCenter, t.center) < i.posThreshold;
          if (this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % i.taps) return this.hasRequireFailures() ? (this._timer = setTimeout((function() {
            e.state = 8, e.tryEmit()
          }), i.interval), 2) : 8
        }
        return 32
      }, i.failTimeout = function() {
        var t = this;
        return this._timer = setTimeout((function() {
          t.state = 32
        }), this.options.interval), 32
      }, i.reset = function() {
        clearTimeout(this._timer)
      }, i.emit = function() {
        8 === this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
      }, e
    }(zu),
    ju = function(t) {
      function e(e) {
        return void 0 === e && (e = {}), t.call(this, Yl({
          pointers: 1
        }, e)) || this
      }
      El(e, t);
      var i = e.prototype;
      return i.attrTest = function(t) {
        var e = this.options.pointers;
        return 0 === e || t.pointers.length === e
      }, i.process = function(t) {
        var e = this.state,
          i = t.eventType,
          n = 6 & e,
          o = this.attrTest(t);
        return n && (8 & i || !o) ? 16 | e : n || o ? 4 & i ? 8 | e : 2 & e ? 4 | e : 2 : 32
      }, e
    }(zu);

  function Hu(t) {
    return 16 === t ? "down" : 8 === t ? "up" : 2 === t ? "left" : 4 === t ? "right" : ""
  }
  var Pu = function(t) {
      function e(e) {
        var i;
        return void 0 === e && (e = {}), (i = t.call(this, Yl({
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: 30
        }, e)) || this).pX = null, i.pY = null, i
      }
      El(e, t);
      var i = e.prototype;
      return i.getTouchAction = function() {
        var t = this.options.direction,
          e = [];
        return 6 & t && e.push("pan-y"), 24 & t && e.push("pan-x"), e
      }, i.directionTest = function(t) {
        var e = this.options,
          i = !0,
          n = t.distance,
          o = t.direction,
          r = t.deltaX,
          s = t.deltaY;
        return o & e.direction || (6 & e.direction ? (o = 0 === r ? 1 : r < 0 ? 2 : 4, i = r !== this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? 1 : s < 0 ? 8 : 16, i = s !== this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
      }, i.attrTest = function(t) {
        return ju.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
      }, i.emit = function(e) {
        this.pX = e.deltaX, this.pY = e.deltaY;
        var i = Hu(e.direction);
        i && (e.additionalEvent = this.options.event + i), t.prototype.emit.call(this, e)
      }, e
    }(ju),
    Ju = function(t) {
      function e(e) {
        return void 0 === e && (e = {}), t.call(this, Yl({
          event: "swipe",
          threshold: 10,
          velocity: .3,
          direction: 30,
          pointers: 1
        }, e)) || this
      }
      El(e, t);
      var i = e.prototype;
      return i.getTouchAction = function() {
        return Pu.prototype.getTouchAction.call(this)
      }, i.attrTest = function(e) {
        var i, n = this.options.direction;
        return 30 & n ? i = e.overallVelocity : 6 & n ? i = e.overallVelocityX : 24 & n && (i = e.overallVelocityY), t.prototype.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers === this.options.pointers && Pl(i) > this.options.velocity && 4 & e.eventType
      }, i.emit = function(t) {
        var e = Hu(t.offsetDirection);
        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
      }, e
    }(ju),
    Ku = function(t) {
      function e(e) {
        return void 0 === e && (e = {}), t.call(this, Yl({
          event: "pinch",
          threshold: 0,
          pointers: 2
        }, e)) || this
      }
      El(e, t);
      var i = e.prototype;
      return i.getTouchAction = function() {
        return ["none"]
      }, i.attrTest = function(e) {
        return t.prototype.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
      }, i.emit = function(e) {
        if (1 !== e.scale) {
          var i = e.scale < 1 ? "in" : "out";
          e.additionalEvent = this.options.event + i
        }
        t.prototype.emit.call(this, e)
      }, e
    }(ju),
    qu = function(t) {
      function e(e) {
        return void 0 === e && (e = {}), t.call(this, Yl({
          event: "rotate",
          threshold: 0,
          pointers: 2
        }, e)) || this
      }
      El(e, t);
      var i = e.prototype;
      return i.getTouchAction = function() {
        return ["none"]
      }, i.attrTest = function(e) {
        return t.prototype.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
      }, e
    }(ju),
    $u = function(t) {
      function e(e) {
        var i;
        return void 0 === e && (e = {}), (i = t.call(this, Yl({
          event: "press",
          pointers: 1,
          time: 251,
          threshold: 9
        }, e)) || this)._timer = null, i._input = null, i
      }
      El(e, t);
      var i = e.prototype;
      return i.getTouchAction = function() {
        return ["auto"]
      }, i.process = function(t) {
        var e = this,
          i = this.options,
          n = t.pointers.length === i.pointers,
          o = t.distance < i.threshold,
          r = t.deltaTime > i.time;
        if (this._input = t, !o || !n || 12 & t.eventType && !r) this.reset();
        else if (1 & t.eventType) this.reset(), this._timer = setTimeout((function() {
          e.state = 8, e.tryEmit()
        }), i.time);
        else if (4 & t.eventType) return 8;
        return 32
      }, i.reset = function() {
        clearTimeout(this._timer)
      }, i.emit = function(t) {
        8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = Jl(), this.manager.emit(this.options.event, this._input)))
      }, e
    }(zu),
    th = {
      domEvents: !1,
      touchAction: "compute",
      enable: !0,
      inputTarget: null,
      inputClass: null,
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    },
    eh = [
      [qu, {
        enable: !1
      }],
      [Ku, {
          enable: !1
        },
        ["rotate"]
      ],
      [Ju, {
        direction: 6
      }],
      [Pu, {
          direction: 6
        },
        ["swipe"]
      ],
      [Vu],
      [Vu, {
          event: "doubletap",
          taps: 2
        },
        ["tap"]
      ],
      [$u]
    ];

  function ih(t, e) {
    var i, n = t.element;
    n.style && (su(t.options.cssProps, (function(o, r) {
      i = Kl(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = t.oldCssProps[i] || ""
    })), e || (t.oldCssProps = {}))
  }
  var nh = function() {
      function t(t, e) {
        var i, n = this;
        this.options = zl({}, th, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((i = this).options.inputClass || (iu ? Su : nu ? Fu : eu ? Tu : Ou))(i, bu), this.touchAction = new uu(this, this.options.touchAction), ih(this, !0), su(this.options.recognizers, (function(t) {
          var e = n.add(new t[0](t[1]));
          t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }), this)
      }
      var e = t.prototype;
      return e.set = function(t) {
        return zl(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
      }, e.stop = function(t) {
        this.session.stopped = t ? 2 : 1
      }, e.recognize = function(t) {
        var e = this.session;
        if (!e.stopped) {
          var i;
          this.touchAction.preventDefaults(t);
          var n = this.recognizers,
            o = e.curRecognizer;
          (!o || o && 8 & o.state) && (e.curRecognizer = null, o = null);
          for (var r = 0; r < n.length;) i = n[r], 2 === e.stopped || o && i !== o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && 14 & i.state && (e.curRecognizer = i, o = i), r++
        }
      }, e.get = function(t) {
        if (t instanceof zu) return t;
        for (var e = this.recognizers, i = 0; i < e.length; i++)
          if (e[i].options.event === t) return e[i];
        return null
      }, e.add = function(t) {
        if (Yu(t, "add", this)) return this;
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
      }, e.remove = function(t) {
        if (Yu(t, "remove", this)) return this;
        var e = this.get(t);
        if (t) {
          var i = this.recognizers,
            n = Du(i, e); - 1 !== n && (i.splice(n, 1), this.touchAction.update())
        }
        return this
      }, e.on = function(t, e) {
        if (void 0 === t || void 0 === e) return this;
        var i = this.handlers;
        return su(yu(t), (function(t) {
          i[t] = i[t] || [], i[t].push(e)
        })), this
      }, e.off = function(t, e) {
        if (void 0 === t) return this;
        var i = this.handlers;
        return su(yu(t), (function(t) {
          e ? i[t] && i[t].splice(Du(i[t], e), 1) : delete i[t]
        })), this
      }, e.emit = function(t, e) {
        this.options.domEvents && function(t, e) {
          var i = document.createEvent("Event");
          i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
        }(t, e);
        var i = this.handlers[t] && this.handlers[t].slice();
        if (i && i.length) {
          e.type = t, e.preventDefault = function() {
            e.srcEvent.preventDefault()
          };
          for (var n = 0; n < i.length;) i[n](e), n++
        }
      }, e.destroy = function() {
        this.element && ih(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
      }, t
    }(),
    oh = {
      touchstart: 1,
      touchmove: 2,
      touchend: 4,
      touchcancel: 8
    },
    rh = function(t) {
      function e() {
        var i, n = e.prototype;
        return n.evTarget = "touchstart", n.evWin = "touchstart touchmove touchend touchcancel", (i = t.apply(this, arguments) || this).started = !1, i
      }
      return El(e, t), e.prototype.handler = function(t) {
        var e = oh[t.type];
        if (1 === e && (this.started = !0), this.started) {
          var i = sh.call(this, t, e);
          12 & e && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
            pointers: i[0],
            changedPointers: i[1],
            pointerType: "touch",
            srcEvent: t
          })
        }
      }, e
    }(ku);

  function sh(t, e) {
    var i = Mu(t.touches),
      n = Mu(t.changedTouches);
    return 12 & e && (i = Qu(i.concat(n), "identifier", !0)), [i, n]
  }

  function ah(t, e, i) {
    var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
    return function() {
      var e = new Error("get-stack-trace"),
        i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
        o = window.console && (window.console.warn || window.console.log);
      return o && o.call(window.console, n, i), t.apply(this, arguments)
    }
  }
  var lh = ah((function(t, e, i) {
      for (var n = Object.keys(e), o = 0; o < n.length;)(!i || i && void 0 === t[n[o]]) && (t[n[o]] = e[n[o]]), o++;
      return t
    }), "extend", "Use `assign`."),
    uh = ah((function(t, e) {
      return lh(t, e, !0)
    }), "merge", "Use `assign`.");

  function hh(t, e, i) {
    var n, o = e.prototype;
    (n = t.prototype = Object.create(o)).constructor = t, n._super = o, i && zl(n, i)
  }

  function dh(t, e) {
    return function() {
      return t.apply(e, arguments)
    }
  }
  var ch, ph = function() {
    var t = function(t, e) {
      return void 0 === e && (e = {}), new nh(t, Yl({
        recognizers: eh.concat()
      }, e))
    };
    return t.VERSION = "2.0.17-rc", t.DIRECTION_ALL = 30, t.DIRECTION_DOWN = 16, t.DIRECTION_LEFT = 2, t.DIRECTION_RIGHT = 4, t.DIRECTION_UP = 8, t.DIRECTION_HORIZONTAL = 6, t.DIRECTION_VERTICAL = 24, t.DIRECTION_NONE = 1, t.DIRECTION_DOWN = 16, t.INPUT_START = 1, t.INPUT_MOVE = 2, t.INPUT_END = 4, t.INPUT_CANCEL = 8, t.STATE_POSSIBLE = 1, t.STATE_BEGAN = 2, t.STATE_CHANGED = 4, t.STATE_ENDED = 8, t.STATE_RECOGNIZED = 8, t.STATE_CANCELLED = 16, t.STATE_FAILED = 32, t.Manager = nh, t.Input = ku, t.TouchAction = uu, t.TouchInput = Fu, t.MouseInput = Ou, t.PointerEventInput = Su, t.TouchMouseInput = Tu, t.SingleTouchInput = rh, t.Recognizer = zu, t.AttrRecognizer = ju, t.Tap = Vu, t.Pan = Pu, t.Swipe = Ju, t.Pinch = Ku, t.Rotate = qu, t.Press = $u, t.on = xu, t.off = wu, t.each = su, t.merge = uh, t.extend = lh, t.bindFn = dh, t.assign = zl, t.inherit = hh, t.bindFn = dh, t.prefixed = Kl, t.toArray = Mu, t.inArray = Du, t.uniqueArray = Qu, t.splitStr = yu, t.boolOrFn = au, t.hasParent = hu, t.addEventListeners = xu, t.removeEventListeners = wu, t.defaults = zl({}, th, {
      preset: eh
    }), t
  }();
  "undefined" != typeof window ? ch = Tl(window.Hammer || ph, {
    preventDefault: "mouse"
  }) : ch = function() {
    return {
      on: t = function() {},
      off: t,
      destroy: t,
      emit: t,
      get: function(e) {
        return {
          set: t
        }
      }
    };
    var t
  };
  var mh = ch;

  function fh(t, e) {
    e.inputHandler = function(t) {
      t.isFirst && e(t)
    }, t.on("hammer.input", e.inputHandler)
  }
  var gh = function() {
    function t(e, i, n, o, r) {
      Za(this, t), this.moment = r && r.moment || sl, this.options = r || {}, this.current = this.moment(), this._start = this.moment(), this._end = this.moment(), this.autoScale = !0, this.scale = "day", this.step = 1, this.setRange(e, i, n), this.switchedDay = !1, this.switchedMonth = !1, this.switchedYear = !1, Vo(o) ? this.hiddenDates = o : this.hiddenDates = null != o ? [o] : [], this.format = t.FORMAT
    }
    return Oa(t, [{
      key: "setMoment",
      value: function(t) {
        this.moment = t, this.current = this.moment(this.current.valueOf()), this._start = this.moment(this._start.valueOf()), this._end = this.moment(this._end.valueOf())
      }
    }, {
      key: "setFormat",
      value: function(e) {
        var i = cl.deepExtend({}, t.FORMAT);
        this.format = cl.deepExtend(i, e)
      }
    }, {
      key: "setRange",
      value: function(t, e, i) {
        if (!(t instanceof Date && e instanceof Date)) throw "No legal start or end date in method setRange";
        this._start = null != t ? this.moment(t.valueOf()) : or(), this._end = null != e ? this.moment(e.valueOf()) : or(), this.autoScale && this.setMinimumStep(i)
      }
    }, {
      key: "start",
      value: function() {
        this.current = this._start.clone(), this.roundToMinor()
      }
    }, {
      key: "roundToMinor",
      value: function() {
        switch ("week" == this.scale && this.current.weekday(0), this.scale) {
          case "year":
            this.current.year(this.step * Math.floor(this.current.year() / this.step)), this.current.month(0);
          case "month":
            this.current.date(1);
          case "week":
          case "day":
          case "weekday":
            this.current.hours(0);
          case "hour":
            this.current.minutes(0);
          case "minute":
            this.current.seconds(0);
          case "second":
            this.current.milliseconds(0)
        }
        if (1 != this.step) {
          var t = this.current.clone();
          switch (this.scale) {
            case "millisecond":
              this.current.subtract(this.current.milliseconds() % this.step, "milliseconds");
              break;
            case "second":
              this.current.subtract(this.current.seconds() % this.step, "seconds");
              break;
            case "minute":
              this.current.subtract(this.current.minutes() % this.step, "minutes");
              break;
            case "hour":
              this.current.subtract(this.current.hours() % this.step, "hours");
              break;
            case "weekday":
            case "day":
              this.current.subtract((this.current.date() - 1) % this.step, "day");
              break;
            case "week":
              this.current.subtract(this.current.week() % this.step, "week");
              break;
            case "month":
              this.current.subtract(this.current.month() % this.step, "month");
              break;
            case "year":
              this.current.subtract(this.current.year() % this.step, "year")
          }
          t.isSame(this.current) || (this.current = this.moment(Nl(this.hiddenDates, this.current.valueOf(), -1, !0)))
        }
      }
    }, {
      key: "hasNext",
      value: function() {
        return this.current.valueOf() <= this._end.valueOf()
      }
    }, {
      key: "next",
      value: function() {
        var t = this.current.valueOf();
        switch (this.scale) {
          case "millisecond":
            this.current.add(this.step, "millisecond");
            break;
          case "second":
            this.current.add(this.step, "second");
            break;
          case "minute":
            this.current.add(this.step, "minute");
            break;
          case "hour":
            this.current.add(this.step, "hour"), this.current.month() < 6 ? this.current.subtract(this.current.hours() % this.step, "hour") : this.current.hours() % this.step != 0 && this.current.add(this.step - this.current.hours() % this.step, "hour");
            break;
          case "weekday":
          case "day":
            this.current.add(this.step, "day");
            break;
          case "week":
            if (0 !== this.current.weekday()) this.current.weekday(0), this.current.add(this.step, "week");
            else if (!1 === this.options.showMajorLabels) this.current.add(this.step, "week");
            else {
              var e = this.current.clone();
              e.add(1, "week"), e.isSame(this.current, "month") ? this.current.add(this.step, "week") : (this.current.add(this.step, "week"), this.current.date(1))
            }
            break;
          case "month":
            this.current.add(this.step, "month");
            break;
          case "year":
            this.current.add(this.step, "year")
        }
        if (1 != this.step) switch (this.scale) {
          case "millisecond":
            this.current.milliseconds() > 0 && this.current.milliseconds() < this.step && this.current.milliseconds(0);
            break;
          case "second":
            this.current.seconds() > 0 && this.current.seconds() < this.step && this.current.seconds(0);
            break;
          case "minute":
            this.current.minutes() > 0 && this.current.minutes() < this.step && this.current.minutes(0);
            break;
          case "hour":
            this.current.hours() > 0 && this.current.hours() < this.step && this.current.hours(0);
            break;
          case "weekday":
          case "day":
            this.current.date() < this.step + 1 && this.current.date(1);
            break;
          case "week":
            this.current.week() < this.step && this.current.week(1);
            break;
          case "month":
            this.current.month() < this.step && this.current.month(0)
        }
        this.current.valueOf() == t && (this.current = this._end.clone()), this.switchedDay = !1, this.switchedMonth = !1, this.switchedYear = !1, Dl(this.moment, this, t)
      }
    }, {
      key: "getCurrent",
      value: function() {
        return this.current.clone()
      }
    }, {
      key: "setScale",
      value: function(t) {
        t && "string" == typeof t.scale && (this.scale = t.scale, this.step = t.step > 0 ? t.step : 1, this.autoScale = !1)
      }
    }, {
      key: "setAutoScale",
      value: function(t) {
        this.autoScale = t
      }
    }, {
      key: "setMinimumStep",
      value: function(t) {
        if (null != t) {
          31104e9 > t && (this.scale = "year", this.step = 1e3), 15552e9 > t && (this.scale = "year", this.step = 500), 31104e8 > t && (this.scale = "year", this.step = 100), 15552e8 > t && (this.scale = "year", this.step = 50), 31104e7 > t && (this.scale = "year", this.step = 10), 15552e7 > t && (this.scale = "year", this.step = 5), 31104e6 > t && (this.scale = "year", this.step = 1), 7776e6 > t && (this.scale = "month", this.step = 3), 2592e6 > t && (this.scale = "month", this.step = 1), 6048e5 > t && this.options.showWeekScale && (this.scale = "week", this.step = 1), 1728e5 > t && (this.scale = "day", this.step = 2), 864e5 > t && (this.scale = "day", this.step = 1), 432e5 > t && (this.scale = "weekday", this.step = 1), 144e5 > t && (this.scale = "hour", this.step = 4), 36e5 > t && (this.scale = "hour", this.step = 1), 9e5 > t && (this.scale = "minute", this.step = 15), 6e5 > t && (this.scale = "minute", this.step = 10), 3e5 > t && (this.scale = "minute", this.step = 5), 6e4 > t && (this.scale = "minute", this.step = 1), 15e3 > t && (this.scale = "second", this.step = 15), 1e4 > t && (this.scale = "second", this.step = 10), 5e3 > t && (this.scale = "second", this.step = 5), 1e3 > t && (this.scale = "second", this.step = 1), 200 > t && (this.scale = "millisecond", this.step = 200), 100 > t && (this.scale = "millisecond", this.step = 100), 50 > t && (this.scale = "millisecond", this.step = 50), 10 > t && (this.scale = "millisecond", this.step = 10), 5 > t && (this.scale = "millisecond", this.step = 5), 1 > t && (this.scale = "millisecond", this.step = 1)
        }
      }
    }, {
      key: "isMajor",
      value: function() {
        if (1 == this.switchedYear) switch (this.scale) {
          case "year":
          case "month":
          case "week":
          case "weekday":
          case "day":
          case "hour":
          case "minute":
          case "second":
          case "millisecond":
            return !0;
          default:
            return !1
        } else if (1 == this.switchedMonth) switch (this.scale) {
          case "week":
          case "weekday":
          case "day":
          case "hour":
          case "minute":
          case "second":
          case "millisecond":
            return !0;
          default:
            return !1
        } else if (1 == this.switchedDay) switch (this.scale) {
          case "millisecond":
          case "second":
          case "minute":
          case "hour":
            return !0;
          default:
            return !1
        }
        var t = this.moment(this.current);
        switch (this.scale) {
          case "millisecond":
            return 0 == t.milliseconds();
          case "second":
            return 0 == t.seconds();
          case "minute":
            return 0 == t.hours() && 0 == t.minutes();
          case "hour":
            return 0 == t.hours();
          case "weekday":
          case "day":
          case "week":
            return 1 == t.date();
          case "month":
            return 0 == t.month();
          case "year":
          default:
            return !1
        }
      }
    }, {
      key: "getLabelMinor",
      value: function(t) {
        if (null == t && (t = this.current), t instanceof Date && (t = this.moment(t)), "function" == typeof this.format.minorLabels) return this.format.minorLabels(t, this.scale, this.step);
        var e = this.format.minorLabels[this.scale];
        switch (this.scale) {
          case "week":
            if (1 === t.date() && 0 !== t.weekday()) return "";
          default:
            return e && e.length > 0 ? this.moment(t).format(e) : ""
        }
      }
    }, {
      key: "getLabelMajor",
      value: function(t) {
        if (null == t && (t = this.current), t instanceof Date && (t = this.moment(t)), "function" == typeof this.format.majorLabels) return this.format.majorLabels(t, this.scale, this.step);
        var e = this.format.majorLabels[this.scale];
        return e && e.length > 0 ? this.moment(t).format(e) : ""
      }
    }, {
      key: "getClassName",
      value: function() {
        var t, e = this.moment,
          i = this.moment(this.current),
          n = i.locale ? i.locale("en") : i.lang("en"),
          o = this.step,
          r = [];

        function s(t) {
          return t / o % 2 == 0 ? " vis-even" : " vis-odd"
        }

        function a(t) {
          return t.isSame(or(), "day") ? " vis-today" : t.isSame(e().add(1, "day"), "day") ? " vis-tomorrow" : t.isSame(e().add(-1, "day"), "day") ? " vis-yesterday" : ""
        }

        function l(t) {
          return t.isSame(or(), "week") ? " vis-current-week" : ""
        }

        function u(t) {
          return t.isSame(or(), "month") ? " vis-current-month" : ""
        }
        switch (this.scale) {
          case "millisecond":
            r.push(a(n)), r.push(s(n.milliseconds()));
            break;
          case "second":
            r.push(a(n)), r.push(s(n.seconds()));
            break;
          case "minute":
            r.push(a(n)), r.push(s(n.minutes()));
            break;
          case "hour":
            r.push(co(t = "vis-h".concat(n.hours())).call(t, 4 == this.step ? "-h" + (n.hours() + 4) : "")), r.push(a(n)), r.push(s(n.hours()));
            break;
          case "weekday":
            r.push("vis-".concat(n.format("dddd").toLowerCase())), r.push(a(n)), r.push(l(n)), r.push(s(n.date()));
            break;
          case "day":
            r.push("vis-day".concat(n.date())), r.push("vis-".concat(n.format("MMMM").toLowerCase())), r.push(a(n)), r.push(u(n)), r.push(this.step <= 2 ? a(n) : ""), r.push(this.step <= 2 ? "vis-".concat(n.format("dddd").toLowerCase()) : ""), r.push(s(n.date() - 1));
            break;
          case "week":
            r.push("vis-week".concat(n.format("w"))), r.push(l(n)), r.push(s(n.week()));
            break;
          case "month":
            r.push("vis-".concat(n.format("MMMM").toLowerCase())), r.push(u(n)), r.push(s(n.month()));
            break;
          case "year":
            r.push("vis-year".concat(n.year())), r.push(function(t) {
              return t.isSame(or(), "year") ? " vis-current-year" : ""
            }(n)), r.push(s(n.year()))
        }
        return lo(r).call(r, String).join(" ")
      }
    }], [{
      key: "snap",
      value: function(t, e, i) {
        var n = sl(t);
        if ("year" == e) {
          var o = n.year() + Math.round(n.month() / 12);
          n.year(Math.round(o / i) * i), n.month(0), n.date(0), n.hours(0), n.minutes(0), n.seconds(0), n.milliseconds(0)
        } else if ("month" == e) n.date() > 15 ? (n.date(1), n.add(1, "month")) : n.date(1), n.hours(0), n.minutes(0), n.seconds(0), n.milliseconds(0);
        else if ("week" == e) n.weekday() > 2 ? (n.weekday(0), n.add(1, "week")) : n.weekday(0), n.hours(0), n.minutes(0), n.seconds(0), n.milliseconds(0);
        else if ("day" == e) {
          switch (i) {
            case 5:
            case 2:
              n.hours(24 * Math.round(n.hours() / 24));
              break;
            default:
              n.hours(12 * Math.round(n.hours() / 12))
          }
          n.minutes(0), n.seconds(0), n.milliseconds(0)
        } else if ("weekday" == e) {
          switch (i) {
            case 5:
            case 2:
              n.hours(12 * Math.round(n.hours() / 12));
              break;
            default:
              n.hours(6 * Math.round(n.hours() / 6))
          }
          n.minutes(0), n.seconds(0), n.milliseconds(0)
        } else if ("hour" == e) {
          switch (i) {
            case 4:
              n.minutes(60 * Math.round(n.minutes() / 60));
              break;
            default:
              n.minutes(30 * Math.round(n.minutes() / 30))
          }
          n.seconds(0), n.milliseconds(0)
        } else if ("minute" == e) {
          switch (i) {
            case 15:
            case 10:
              n.minutes(5 * Math.round(n.minutes() / 5)), n.seconds(0);
              break;
            case 5:
              n.seconds(60 * Math.round(n.seconds() / 60));
              break;
            default:
              n.seconds(30 * Math.round(n.seconds() / 30))
          }
          n.milliseconds(0)
        } else if ("second" == e) switch (i) {
          case 15:
          case 10:
            n.seconds(5 * Math.round(n.seconds() / 5)), n.milliseconds(0);
            break;
          case 5:
            n.milliseconds(1e3 * Math.round(n.milliseconds() / 1e3));
            break;
          default:
            n.milliseconds(500 * Math.round(n.milliseconds() / 500))
        } else if ("millisecond" == e) {
          var r = i > 5 ? i / 2 : 1;
          n.milliseconds(Math.round(n.milliseconds() / r) * r)
        } return n
      }
    }]), t
  }();

  function vh(t, e) {
    void 0 === e && (e = {});
    var i = e.insertAt;
    if (t && "undefined" != typeof document) {
      var n = document.head || document.getElementsByTagName("head")[0],
        o = document.createElement("style");
      o.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t))
    }
  }
  gh.FORMAT = {
    minorLabels: {
      millisecond: "SSS",
      second: "s",
      minute: "HH:mm",
      hour: "HH:mm",
      weekday: "ddd D",
      day: "D",
      week: "w",
      month: "MMM",
      year: "YYYY"
    },
    majorLabels: {
      millisecond: "HH:mm:ss",
      second: "D MMMM HH:mm",
      minute: "ddd D MMMM",
      hour: "ddd D MMMM",
      weekday: "MMMM YYYY",
      day: "MMMM YYYY",
      week: "MMMM YYYY",
      month: "YYYY",
      year: ""
    }
  };

  function bh(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  vh(".vis-time-axis{position:relative;overflow:hidden}.vis-time-axis.vis-foreground{top:0;left:0;width:100%}.vis-time-axis.vis-background{position:absolute;top:0;left:0;width:100%;height:100%}.vis-time-axis .vis-text{position:absolute;color:#4d4d4d;padding:3px;overflow:hidden;box-sizing:border-box;white-space:nowrap}.vis-time-axis .vis-text.vis-measure{position:absolute;padding-left:0;padding-right:0;margin-left:0;margin-right:0;visibility:hidden}.vis-time-axis .vis-grid.vis-vertical{position:absolute;border-left:1px solid}.vis-time-axis .vis-grid.vis-vertical-rtl{position:absolute;border-right:1px solid}.vis-time-axis .vis-grid.vis-minor{border-color:#e5e5e5}.vis-time-axis .vis-grid.vis-major{border-color:#bfbfbf}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVheGlzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUNFLGlCQUFrQixDQUNsQixlQUNGLENBRUEsOEJBQ0UsS0FBTSxDQUNOLE1BQU8sQ0FDUCxVQUNGLENBRUEsOEJBQ0UsaUJBQWtCLENBQ2xCLEtBQU0sQ0FDTixNQUFPLENBQ1AsVUFBVyxDQUNYLFdBQ0YsQ0FFQSx5QkFDRSxpQkFBa0IsQ0FDbEIsYUFBYyxDQUNkLFdBQVksQ0FDWixlQUFnQixDQUNoQixxQkFBc0IsQ0FFdEIsa0JBQ0YsQ0FFQSxxQ0FDRSxpQkFBa0IsQ0FDbEIsY0FBZSxDQUNmLGVBQWdCLENBQ2hCLGFBQWMsQ0FDZCxjQUFlLENBQ2YsaUJBQ0YsQ0FFQSxzQ0FDRSxpQkFBa0IsQ0FDbEIscUJBQ0YsQ0FFQSwwQ0FDRSxpQkFBa0IsQ0FDbEIsc0JBQ0YsQ0FFQSxtQ0FDRSxvQkFDRixDQUVBLG1DQUNFLG9CQUNGIiwiZmlsZSI6InRpbWVheGlzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aXMtdGltZS1heGlzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlzLXRpbWUtYXhpcy52aXMtZm9yZWdyb3VuZCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52aXMtdGltZS1heGlzLnZpcy1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52aXMtdGltZS1heGlzIC52aXMtdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udmlzLXRpbWUtYXhpcyAudmlzLXRleHQudmlzLW1lYXN1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udmlzLXRpbWUtYXhpcyAudmlzLWdyaWQudmlzLXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xufVxuXG4udmlzLXRpbWUtYXhpcyAudmlzLWdyaWQudmlzLXZlcnRpY2FsLXJ0bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG59XG5cbi52aXMtdGltZS1heGlzIC52aXMtZ3JpZC52aXMtbWlub3Ige1xuICBib3JkZXItY29sb3I6ICNlNWU1ZTU7XG59XG5cbi52aXMtdGltZS1heGlzIC52aXMtZ3JpZC52aXMtbWFqb3Ige1xuICBib3JkZXItY29sb3I6ICNiZmJmYmY7XG59XG4iXX0= */");
  var yh = function(t) {
      Ms(i, t);
      var e = bh(i);

      function i(t, n) {
        var o;
        return Za(this, i), (o = e.call(this)).dom = {
          foreground: null,
          lines: [],
          majorTexts: [],
          minorTexts: [],
          redundant: {
            lines: [],
            majorTexts: [],
            minorTexts: []
          }
        }, o.props = {
          range: {
            start: 0,
            end: 0,
            minimumStep: 0
          },
          lineTop: 0
        }, o.defaultOptions = {
          orientation: {
            axis: "bottom"
          },
          showMinorLabels: !0,
          showMajorLabels: !0,
          showWeekScale: !1,
          maxMinorChars: 7,
          format: gh.FORMAT,
          moment: sl,
          timeAxis: null
        }, o.options = cl.extend({}, o.defaultOptions), o.body = t, o._create(), o.setOptions(n), o
      }
      return Oa(i, [{
        key: "setOptions",
        value: function(t) {
          t && (cl.selectiveExtend(["showMinorLabels", "showMajorLabels", "showWeekScale", "maxMinorChars", "hiddenDates", "timeAxis", "moment", "rtl"], this.options, t), cl.selectiveDeepExtend(["format"], this.options, t), "orientation" in t && ("string" == typeof t.orientation ? this.options.orientation.axis = t.orientation : "object" === $o(t.orientation) && "axis" in t.orientation && (this.options.orientation.axis = t.orientation.axis)), "locale" in t && ("function" == typeof sl.locale ? sl.locale(t.locale) : sl.lang(t.locale)))
        }
      }, {
        key: "_create",
        value: function() {
          this.dom.foreground = document.createElement("div"), this.dom.background = document.createElement("div"), this.dom.foreground.className = "vis-time-axis vis-foreground", this.dom.background.className = "vis-time-axis vis-background"
        }
      }, {
        key: "destroy",
        value: function() {
          this.dom.foreground.parentNode && this.dom.foreground.parentNode.removeChild(this.dom.foreground), this.dom.background.parentNode && this.dom.background.parentNode.removeChild(this.dom.background), this.body = null
        }
      }, {
        key: "redraw",
        value: function() {
          var t = this.props,
            e = this.dom.foreground,
            i = this.dom.background,
            n = "top" == this.options.orientation.axis ? this.body.dom.top : this.body.dom.bottom,
            o = e.parentNode !== n;
          this._calculateCharSize();
          var r = this.options.showMinorLabels && "none" !== this.options.orientation.axis,
            s = this.options.showMajorLabels && "none" !== this.options.orientation.axis;
          t.minorLabelHeight = r ? t.minorCharHeight : 0, t.majorLabelHeight = s ? t.majorCharHeight : 0, t.height = t.minorLabelHeight + t.majorLabelHeight, t.width = e.offsetWidth, t.minorLineHeight = this.body.domProps.root.height - t.majorLabelHeight - ("top" == this.options.orientation.axis ? this.body.domProps.bottom.height : this.body.domProps.top.height), t.minorLineWidth = 1, t.majorLineHeight = t.minorLineHeight + t.majorLabelHeight, t.majorLineWidth = 1;
          var a = e.nextSibling,
            l = i.nextSibling;
          return e.parentNode && e.parentNode.removeChild(e), i.parentNode && i.parentNode.removeChild(i), e.style.height = "".concat(this.props.height, "px"), this._repaintLabels(), a ? n.insertBefore(e, a) : n.appendChild(e), l ? this.body.dom.backgroundVertical.insertBefore(i, l) : this.body.dom.backgroundVertical.appendChild(i), this._isResized() || o
        }
      }, {
        key: "_repaintLabels",
        value: function() {
          var t = this.options.orientation.axis,
            e = cl.convert(this.body.range.start, "Number"),
            i = cl.convert(this.body.range.end, "Number"),
            n = this.body.util.toTime((this.props.minorCharWidth || 10) * this.options.maxMinorChars).valueOf(),
            o = n - Ml(this.options.moment, this.body.hiddenDates, this.body.range, n);
          o -= this.body.util.toTime(0).valueOf();
          var r = new gh(new Date(e), new Date(i), o, this.body.hiddenDates, this.options);
          r.setMoment(this.options.moment), this.options.format && r.setFormat(this.options.format), this.options.timeAxis && r.setScale(this.options.timeAxis), this.step = r;
          var s, a, l, u, h, d, c = this.dom;
          c.redundant.lines = c.lines, c.redundant.majorTexts = c.majorTexts, c.redundant.minorTexts = c.minorTexts, c.lines = [], c.majorTexts = [], c.minorTexts = [];
          var p, m, f, g = 0,
            v = void 0,
            b = 0;
          for (r.start(), a = r.getCurrent(), u = this.body.util.toScreen(a); r.hasNext() && b < 1e3;) {
            switch (b++, h = r.isMajor(), f = r.getClassName(), s = a, l = u, r.next(), a = r.getCurrent(), p = g, g = (u = this.body.util.toScreen(a)) - l, r.scale) {
              case "week":
                d = !0;
                break;
              default:
                d = g >= .4 * p
            }
            if (this.options.showMinorLabels && d) {
              var y = this._repaintMinorText(l, r.getLabelMinor(s), t, f);
              y.style.width = "".concat(g, "px")
            }
            h && this.options.showMajorLabels ? (l > 0 && (null == v && (v = l), y = this._repaintMajorText(l, r.getLabelMajor(s), t, f)), m = this._repaintMajorLine(l, g, t, f)) : d ? m = this._repaintMinorLine(l, g, t, f) : m && (m.style.width = "".concat(qn(m.style.width) + g, "px"))
          }
          if (1e3 !== b || xh || (console.warn("Something is wrong with the Timeline scale. Limited drawing of grid lines to ".concat(1e3, " lines.")), xh = !0), this.options.showMajorLabels) {
            var x = this.body.util.toTime(0),
              w = r.getLabelMajor(x),
              _ = w.length * (this.props.majorCharWidth || 10) + 10;
            (null == v || _ < v) && this._repaintMajorText(0, w, t, f)
          }
          Yn(cl).call(cl, this.dom.redundant, (function(t) {
            for (; t.length;) {
              var e = t.pop();
              e && e.parentNode && e.parentNode.removeChild(e)
            }
          }))
        }
      }, {
        key: "_repaintMinorText",
        value: function(t, e, i, n) {
          var o = this.dom.redundant.minorTexts.shift();
          if (!o) {
            var r = document.createTextNode("");
            (o = document.createElement("div")).appendChild(r), this.dom.foreground.appendChild(o)
          }
          this.dom.minorTexts.push(o), o.innerHTML = e;
          var s = "top" == i ? this.props.majorLabelHeight : 0;
          return this._setXY(o, t, s), o.className = "vis-text vis-minor ".concat(n), o
        }
      }, {
        key: "_repaintMajorText",
        value: function(t, e, i, n) {
          var o = this.dom.redundant.majorTexts.shift();
          if (!o) {
            var r = document.createElement("div");
            (o = document.createElement("div")).appendChild(r), this.dom.foreground.appendChild(o)
          }
          o.childNodes[0].innerHTML = e, o.className = "vis-text vis-major ".concat(n);
          var s = "top" == i ? 0 : this.props.minorLabelHeight;
          return this._setXY(o, t, s), this.dom.majorTexts.push(o), o
        }
      }, {
        key: "_setXY",
        value: function(t, e, i) {
          var n, o = this.options.rtl ? -1 * e : e;
          t.style.transform = co(n = "translate(".concat(o, "px, ")).call(n, i, "px)")
        }
      }, {
        key: "_repaintMinorLine",
        value: function(t, e, i, n) {
          var o, r = this.dom.redundant.lines.shift();
          r || (r = document.createElement("div"), this.dom.background.appendChild(r)), this.dom.lines.push(r);
          var s = this.props;
          r.style.width = "".concat(e, "px"), r.style.height = "".concat(s.minorLineHeight, "px");
          var a = "top" == i ? s.majorLabelHeight : this.body.domProps.top.height,
            l = t - s.minorLineWidth / 2;
          return this._setXY(r, l, a), r.className = co(o = "vis-grid ".concat(this.options.rtl ? "vis-vertical-rtl" : "vis-vertical", " vis-minor ")).call(o, n), r
        }
      }, {
        key: "_repaintMajorLine",
        value: function(t, e, i, n) {
          var o, r = this.dom.redundant.lines.shift();
          r || (r = document.createElement("div"), this.dom.background.appendChild(r)), this.dom.lines.push(r);
          var s = this.props;
          r.style.width = "".concat(e, "px"), r.style.height = "".concat(s.majorLineHeight, "px");
          var a = "top" == i ? 0 : this.body.domProps.top.height,
            l = t - s.majorLineWidth / 2;
          return this._setXY(r, l, a), r.className = co(o = "vis-grid ".concat(this.options.rtl ? "vis-vertical-rtl" : "vis-vertical", " vis-major ")).call(o, n), r
        }
      }, {
        key: "_calculateCharSize",
        value: function() {
          this.dom.measureCharMinor || (this.dom.measureCharMinor = document.createElement("DIV"), this.dom.measureCharMinor.className = "vis-text vis-minor vis-measure", this.dom.measureCharMinor.style.position = "absolute", this.dom.measureCharMinor.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMinor)), this.props.minorCharHeight = this.dom.measureCharMinor.clientHeight, this.props.minorCharWidth = this.dom.measureCharMinor.clientWidth, this.dom.measureCharMajor || (this.dom.measureCharMajor = document.createElement("DIV"), this.dom.measureCharMajor.className = "vis-text vis-major vis-measure", this.dom.measureCharMajor.style.position = "absolute", this.dom.measureCharMajor.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMajor)), this.props.majorCharHeight = this.dom.measureCharMajor.clientHeight, this.props.majorCharWidth = this.dom.measureCharMajor.clientWidth
        }
      }]), i
    }(vl),
    xh = !1,
    wh = i((function(t, e) {
      t.exports = function(t) {
        var e, i = t && t.preventDefault || !1,
          n = t && t.container || window,
          o = {},
          r = {
            keydown: {},
            keyup: {}
          },
          s = {};
        for (e = 97; e <= 122; e++) s[String.fromCharCode(e)] = {
          code: e - 97 + 65,
          shift: !1
        };
        for (e = 65; e <= 90; e++) s[String.fromCharCode(e)] = {
          code: e,
          shift: !0
        };
        for (e = 0; e <= 9; e++) s["" + e] = {
          code: 48 + e,
          shift: !1
        };
        for (e = 1; e <= 12; e++) s["F" + e] = {
          code: 111 + e,
          shift: !1
        };
        for (e = 0; e <= 9; e++) s["num" + e] = {
          code: 96 + e,
          shift: !1
        };
        s["num*"] = {
          code: 106,
          shift: !1
        }, s["num+"] = {
          code: 107,
          shift: !1
        }, s["num-"] = {
          code: 109,
          shift: !1
        }, s["num/"] = {
          code: 111,
          shift: !1
        }, s["num."] = {
          code: 110,
          shift: !1
        }, s.left = {
          code: 37,
          shift: !1
        }, s.up = {
          code: 38,
          shift: !1
        }, s.right = {
          code: 39,
          shift: !1
        }, s.down = {
          code: 40,
          shift: !1
        }, s.space = {
          code: 32,
          shift: !1
        }, s.enter = {
          code: 13,
          shift: !1
        }, s.shift = {
          code: 16,
          shift: void 0
        }, s.esc = {
          code: 27,
          shift: !1
        }, s.backspace = {
          code: 8,
          shift: !1
        }, s.tab = {
          code: 9,
          shift: !1
        }, s.ctrl = {
          code: 17,
          shift: !1
        }, s.alt = {
          code: 18,
          shift: !1
        }, s.delete = {
          code: 46,
          shift: !1
        }, s.pageup = {
          code: 33,
          shift: !1
        }, s.pagedown = {
          code: 34,
          shift: !1
        }, s["="] = {
          code: 187,
          shift: !1
        }, s["-"] = {
          code: 189,
          shift: !1
        }, s["]"] = {
          code: 221,
          shift: !1
        }, s["["] = {
          code: 219,
          shift: !1
        };
        var a = function(t) {
            u(t, "keydown")
          },
          l = function(t) {
            u(t, "keyup")
          },
          u = function(t, e) {
            if (void 0 !== r[e][t.keyCode]) {
              for (var n = r[e][t.keyCode], o = 0; o < n.length; o++)(void 0 === n[o].shift || 1 == n[o].shift && 1 == t.shiftKey || 0 == n[o].shift && 0 == t.shiftKey) && n[o].fn(t);
              1 == i && t.preventDefault()
            }
          };
        return o.bind = function(t, e, i) {
          if (void 0 === i && (i = "keydown"), void 0 === s[t]) throw new Error("unsupported key: " + t);
          void 0 === r[i][s[t].code] && (r[i][s[t].code] = []), r[i][s[t].code].push({
            fn: e,
            shift: s[t].shift
          })
        }, o.bindAll = function(t, e) {
          for (var i in void 0 === e && (e = "keydown"), s) s.hasOwnProperty(i) && o.bind(i, t, e)
        }, o.getKey = function(t) {
          for (var e in s)
            if (s.hasOwnProperty(e)) {
              if (1 == t.shiftKey && 1 == s[e].shift && t.keyCode == s[e].code) return e;
              if (0 == t.shiftKey && 0 == s[e].shift && t.keyCode == s[e].code) return e;
              if (t.keyCode == s[e].code && "shift" == e) return e
            } return "unknown key, currently not supported"
        }, o.unbind = function(t, e, i) {
          if (void 0 === i && (i = "keydown"), void 0 === s[t]) throw new Error("unsupported key: " + t);
          if (void 0 !== e) {
            var n = [],
              o = r[i][s[t].code];
            if (void 0 !== o)
              for (var a = 0; a < o.length; a++) o[a].fn == e && o[a].shift == s[t].shift || n.push(r[i][s[t].code][a]);
            r[i][s[t].code] = n
          } else r[i][s[t].code] = []
        }, o.reset = function() {
          r = {
            keydown: {},
            keyup: {}
          }
        }, o.destroy = function() {
          r = {
            keydown: {},
            keyup: {}
          }, n.removeEventListener("keydown", a, !0), n.removeEventListener("keyup", l, !0)
        }, n.addEventListener("keydown", a, !0), n.addEventListener("keyup", l, !0), o
      }
    }));

  function _h(t) {
    var e, i;
    this.active = !1, this.dom = {
      container: t
    }, this.dom.overlay = document.createElement("div"), this.dom.overlay.className = "vis-overlay", this.dom.container.appendChild(this.dom.overlay), this.hammer = mh(this.dom.overlay), this.hammer.on("tap", Fa(e = this._onTapOverlay).call(e, this));
    var n = this,
      o = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
    Yn(o).call(o, (function(t) {
      n.hammer.on(t, (function(t) {
        t.stopPropagation()
      }))
    })), document && document.body && (this.onClick = function(e) {
      (function(t, e) {
        for (; t;) {
          if (t === e) return !0;
          t = t.parentNode
        }
        return !1
      })(e.target, t) || n.deactivate()
    }, document.body.addEventListener("click", this.onClick)), void 0 !== this.keycharm && this.keycharm.destroy(), this.keycharm = wh(), this.escListener = Fa(i = this.deactivate).call(i, this)
  }
  vh(".vis .overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10}.vis-active{box-shadow:0 0 10px #86d5f8}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRvci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FDRSxpQkFBa0IsQ0FDbEIsS0FBTSxDQUNOLE1BQU8sQ0FDUCxVQUFXLENBQ1gsV0FBWSxDQUdaLFVBQ0YsQ0FFQSxZQUNFLDJCQUNGIiwiZmlsZSI6ImFjdGl2YXRvci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogTXVzdCBiZSBkaXNwbGF5ZWQgYWJvdmUgZm9yIGV4YW1wbGUgc2VsZWN0ZWQgVGltZWxpbmUgaXRlbXMgKi9cbiAgei1pbmRleDogMTA7XG59XG5cbi52aXMtYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzg2ZDVmODtcbn1cbiJdfQ== */"), Xl(_h.prototype), _h.current = null, _h.prototype.destroy = function() {
    this.deactivate(), this.dom.overlay.parentNode.removeChild(this.dom.overlay), this.onClick && document.body.removeEventListener("click", this.onClick), void 0 !== this.keycharm && this.keycharm.destroy(), this.keycharm = null, this.hammer.destroy(), this.hammer = null
  }, _h.prototype.activate = function() {
    var t;
    _h.current && _h.current.deactivate(), _h.current = this, this.active = !0, this.dom.overlay.style.display = "none", cl.addClassName(this.dom.container, "vis-active"), this.emit("change"), this.emit("activate"), Fa(t = this.keycharm).call(t, "esc", this.escListener)
  }, _h.prototype.deactivate = function() {
    _h.current === this && (_h.current = null), this.active = !1, this.dom.overlay.style.display = "", cl.removeClassName(this.dom.container, "vis-active"), this.keycharm.unbind("esc", this.escListener), this.emit("change"), this.emit("deactivate")
  }, _h.prototype._onTapOverlay = function(t) {
    this.activate(), t.stopPropagation()
  };
  var kh = {
      current: "current",
      time: "time",
      deleteSelected: "Delete selected"
    },
    Dh = {
      current: "attuale",
      time: "tempo",
      deleteSelected: "Cancella la selezione"
    },
    Ih = {
      current: "huidige",
      time: "tijd",
      deleteSelected: "Selectie verwijderen"
    },
    Ch = {
      current: "Aktuelle",
      time: "Zeit",
      deleteSelected: "Lösche Auswahl"
    },
    Lh = {
      current: "actuel",
      time: "heure",
      deleteSelected: "Effacer la selection"
    },
    Gh = {
      current: "corriente",
      time: "hora",
      deleteSelected: "Eliminar selección"
    },
    Sh = {
      current: "поточний",
      time: "час",
      deleteSelected: "Видалити обране"
    },
    Mh = {
      current: "текущее",
      time: "время",
      deleteSelected: "Удалить выбранное"
    },
    Qh = {
      current: "aktualny",
      time: "czas",
      deleteSelected: "Usuń wybrane"
    },
    Nh = {
      current: "現在",
      time: "時刻",
      deleteSelected: "選択されたものを削除"
    },
    Fh = {
      en: kh,
      en_EN: kh,
      en_US: kh,
      it: Dh,
      it_IT: Dh,
      it_CH: Dh,
      nl: Ih,
      nl_NL: Ih,
      nl_BE: Ih,
      de: Ch,
      de_DE: Ch,
      fr: Lh,
      fr_FR: Lh,
      fr_CA: Lh,
      fr_BE: Lh,
      es: Gh,
      es_ES: Gh,
      uk: Sh,
      uk_UA: Sh,
      ru: Mh,
      ru_RU: Mh,
      pl: Qh,
      pl_PL: Qh,
      ja: Nh,
      ja_JP: Nh
    };

  function Zh(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  vh(".vis-custom-time{background-color:#6e94ff;width:2px;cursor:move;z-index:1}.vis-custom-time>.vis-custom-time-marker{background-color:inherit;color:#fff;font-size:12px;white-space:nowrap;padding:3px 5px;top:0;cursor:auto;z-index:inherit}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbXRpbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUNFLHdCQUF5QixDQUN6QixTQUFVLENBQ1YsV0FBWSxDQUNaLFNBQ0YsQ0FFQSx5Q0FDRSx3QkFBeUIsQ0FDekIsVUFBWSxDQUNaLGNBQWUsQ0FDZixrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FDaEIsS0FBUSxDQUNSLFdBQWUsQ0FDZixlQUNGIiwiZmlsZSI6ImN1c3RvbXRpbWUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpcy1jdXN0b20tdGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RTk0RkY7XG4gIHdpZHRoOiAycHg7XG4gIGN1cnNvcjogbW92ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnZpcy1jdXN0b20tdGltZSA+IC52aXMtY3VzdG9tLXRpbWUtbWFya2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHRvcDogMHB4O1xuICBjdXJzb3I6IGluaXRpYWw7XG4gIHotaW5kZXg6IGluaGVyaXQ7XG59Il19 */");
  var Bh = function(t) {
    Ms(i, t);
    var e = Zh(i);

    function i(t, n) {
      var o, r;
      Za(this, i), (r = e.call(this)).body = t, r.defaultOptions = {
        moment: sl,
        locales: Fh,
        locale: "en",
        id: void 0,
        title: void 0
      }, r.options = cl.extend({}, r.defaultOptions), r.setOptions(n), r.options.locales = cl.extend({}, Fh, r.options.locales);
      var s = r.defaultOptions.locales[r.defaultOptions.locale];
      return Yn(o = vn(r.options.locales)).call(o, (function(t) {
        r.options.locales[t] = cl.extend({}, s, r.options.locales[t])
      })), n && null != n.time ? r.customTime = n.time : r.customTime = new Date, r.eventParams = {}, r._create(), r
    }
    return Oa(i, [{
      key: "setOptions",
      value: function(t) {
        t && cl.selectiveExtend(["moment", "locale", "locales", "id", "title", "rtl", "snap"], this.options, t)
      }
    }, {
      key: "_create",
      value: function() {
        var t, e, i, n = document.createElement("div");
        n["custom-time"] = this, n.className = "vis-custom-time ".concat(this.options.id || ""), n.style.position = "absolute", n.style.top = "0px", n.style.height = "100%", this.bar = n;
        var o = document.createElement("div");

        function r(t) {
          this.body.range._onMouseWheel(t)
        }
        o.style.position = "relative", o.style.top = "0px", this.options.rtl ? o.style.right = "-10px" : o.style.left = "-10px", o.style.height = "100%", o.style.width = "20px", o.addEventListener ? (o.addEventListener("mousewheel", Fa(r).call(r, this), !1), o.addEventListener("DOMMouseScroll", Fa(r).call(r, this), !1)) : o.attachEvent("onmousewheel", Fa(r).call(r, this)), n.appendChild(o), this.hammer = new mh(o), this.hammer.on("panstart", Fa(t = this._onDragStart).call(t, this)), this.hammer.on("panmove", Fa(e = this._onDrag).call(e, this)), this.hammer.on("panend", Fa(i = this._onDragEnd).call(i, this)), this.hammer.get("pan").set({
          threshold: 5,
          direction: mh.DIRECTION_ALL
        })
      }
    }, {
      key: "destroy",
      value: function() {
        this.hide(), this.hammer.destroy(), this.hammer = null, this.body = null
      }
    }, {
      key: "redraw",
      value: function() {
        var t = this.body.dom.backgroundVertical;
        this.bar.parentNode != t && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), t.appendChild(this.bar));
        var e = this.body.util.toScreen(this.customTime),
          i = this.options.locales[this.options.locale];
        i || (this.warned || (console.warn("WARNING: options.locales['".concat(this.options.locale, "'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization")), this.warned = !0), i = this.options.locales.en);
        var n, o = this.options.title;
        void 0 === o ? o = (o = co(n = "".concat(i.time, ": ")).call(n, this.options.moment(this.customTime).format("dddd, MMMM Do YYYY, H:mm:ss"))).charAt(0).toUpperCase() + o.substring(1) : "function" == typeof o && (o = o.call(this, this.customTime));
        return this.options.rtl ? this.bar.style.right = "".concat(e, "px") : this.bar.style.left = "".concat(e, "px"), this.bar.title = o, !1
      }
    }, {
      key: "hide",
      value: function() {
        this.bar.parentNode && this.bar.parentNode.removeChild(this.bar)
      }
    }, {
      key: "setCustomTime",
      value: function(t) {
        this.customTime = cl.convert(t, "Date"), this.redraw()
      }
    }, {
      key: "getCustomTime",
      value: function() {
        return new Date(this.customTime.valueOf())
      }
    }, {
      key: "setCustomMarker",
      value: function(t, e) {
        var i, n, o = document.createElement("div");
        (o.className = "vis-custom-time-marker", o.innerHTML = t, o.style.position = "absolute", e) && (o.setAttribute("contenteditable", "true"), o.addEventListener("pointerdown", (function() {
          o.focus()
        })), o.addEventListener("input", Fa(i = this._onMarkerChange).call(i, this)), o.title = t, o.addEventListener("blur", Fa(n = function(t) {
          this.title != t.target.innerHTML && (this._onMarkerChanged(t), this.title = t.target.innerHTML)
        }).call(n, this)));
        this.bar.appendChild(o)
      }
    }, {
      key: "setCustomTitle",
      value: function(t) {
        this.options.title = t
      }
    }, {
      key: "_onDragStart",
      value: function(t) {
        this.eventParams.dragging = !0, this.eventParams.customTime = this.customTime, t.stopPropagation()
      }
    }, {
      key: "_onDrag",
      value: function(t) {
        if (this.eventParams.dragging) {
          var e = this.options.rtl ? -1 * t.deltaX : t.deltaX,
            i = this.body.util.toScreen(this.eventParams.customTime) + e,
            n = this.body.util.toTime(i),
            o = this.body.util.getScale(),
            r = this.body.util.getStep(),
            s = this.options.snap,
            a = s ? s(n, o, r) : n;
          this.setCustomTime(a), this.body.emitter.emit("timechange", {
            id: this.options.id,
            time: new Date(this.customTime.valueOf()),
            event: t
          }), t.stopPropagation()
        }
      }
    }, {
      key: "_onDragEnd",
      value: function(t) {
        this.eventParams.dragging && (this.body.emitter.emit("timechanged", {
          id: this.options.id,
          time: new Date(this.customTime.valueOf()),
          event: t
        }), t.stopPropagation())
      }
    }, {
      key: "_onMarkerChange",
      value: function(t) {
        this.body.emitter.emit("markerchange", {
          id: this.options.id,
          title: t.target.innerHTML,
          event: t
        }), t.stopPropagation()
      }
    }, {
      key: "_onMarkerChanged",
      value: function(t) {
        this.body.emitter.emit("markerchanged", {
          id: this.options.id,
          title: t.target.innerHTML,
          event: t
        }), t.stopPropagation()
      }
    }], [{
      key: "customTimeFromTarget",
      value: function(t) {
        for (var e = t.target; e;) {
          if (e.hasOwnProperty("custom-time")) return e["custom-time"];
          e = e.parentNode
        }
        return null
      }
    }]), i
  }(vl);
  vh("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmltYXRpb24uY3NzIn0= */");
  vh('.vis-current-time{background-color:#ff7f6e;width:2px;z-index:1;pointer-events:none}.vis-rolling-mode-btn{height:40px;width:40px;position:absolute;top:7px;right:20px;border-radius:50%;font-size:14px;cursor:pointer;opacity:.8;color:#fff;font-weight:700;text-align:center;background:#3876c2}.vis-rolling-mode-btn:before{content:"\\26F6"}.vis-rolling-mode-btn:hover{opacity:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnR0aW1lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFDRSx3QkFBeUIsQ0FDekIsU0FBVSxDQUNWLFNBQVUsQ0FDVixtQkFDRixDQUVBLHNCQUNFLFdBQVksQ0FDWixVQUFXLENBQ1gsaUJBQWtCLENBQ2xCLE9BQVEsQ0FDUixVQUFXLENBQ1gsaUJBQWtCLENBQ2xCLGNBQWUsQ0FDZixjQUFlLENBQ2YsVUFBWSxDQUNaLFVBQVksQ0FDWixlQUFpQixDQUNqQixpQkFBa0IsQ0FDbEIsa0JBQ0YsQ0FDQSw2QkFDRSxlQUNGLENBRUEsNEJBQ0UsU0FDRiIsImZpbGUiOiJjdXJyZW50dGltZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzLWN1cnJlbnQtdGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjdGNkU7XG4gIHdpZHRoOiAycHg7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udmlzLXJvbGxpbmctbW9kZS1idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xuICByaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzODc2YzI7XG59XG4udmlzLXJvbGxpbmctbW9kZS1idG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI2RjZcIjtcbn1cblxuLnZpcy1yb2xsaW5nLW1vZGUtYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */');
  vh(".vis-panel{position:absolute;padding:0;margin:0;box-sizing:border-box}.vis-panel.vis-bottom,.vis-panel.vis-center,.vis-panel.vis-left,.vis-panel.vis-right,.vis-panel.vis-top{border:1px #bfbfbf}.vis-panel.vis-center,.vis-panel.vis-left,.vis-panel.vis-right{border-top-style:solid;border-bottom-style:solid;overflow:hidden}.vis-left.vis-panel.vis-vertical-scroll,.vis-right.vis-panel.vis-vertical-scroll{height:100%;overflow-x:hidden;overflow-y:scroll}.vis-left.vis-panel.vis-vertical-scroll{direction:rtl}.vis-left.vis-panel.vis-vertical-scroll .vis-content,.vis-right.vis-panel.vis-vertical-scroll{direction:ltr}.vis-right.vis-panel.vis-vertical-scroll .vis-content{direction:rtl}.vis-panel.vis-bottom,.vis-panel.vis-center,.vis-panel.vis-top{border-left-style:solid;border-right-style:solid}.vis-background{overflow:hidden}.vis-panel>.vis-content{position:relative}.vis-panel .vis-shadow{position:absolute;width:100%;height:1px;box-shadow:0 0 10px rgba(0,0,0,.8)}.vis-panel .vis-shadow.vis-top{top:-1px;left:0}.vis-panel .vis-shadow.vis-bottom{bottom:-1px;left:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUNFLGlCQUFrQixDQUVsQixTQUFVLENBQ1YsUUFBUyxDQUVULHFCQUNGLENBRUEsd0dBS0Usa0JBQ0YsQ0FFQSwrREFHRSxzQkFBdUIsQ0FDdkIseUJBQTBCLENBQzFCLGVBQ0YsQ0FFQSxpRkFDRSxXQUFZLENBQ1osaUJBQWtCLENBQ2xCLGlCQUNGLENBRUEsd0NBQ0UsYUFDRixDQU1BLDhGQUNFLGFBQ0YsQ0FFQSxzREFDRSxhQUNGLENBRUEsK0RBR0UsdUJBQXdCLENBQ3hCLHdCQUNGLENBRUEsZ0JBQ0UsZUFDRixDQUVBLHdCQUNFLGlCQUNGLENBRUEsdUJBQ0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxVQUFXLENBQ1gsa0NBSUYsQ0FFQSwrQkFDRSxRQUFTLENBQ1QsTUFDRixDQUVBLGtDQUNFLFdBQVksQ0FDWixNQUNGIiwiZmlsZSI6InBhbmVsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aXMtcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi52aXMtcGFuZWwudmlzLWNlbnRlcixcbi52aXMtcGFuZWwudmlzLWxlZnQsXG4udmlzLXBhbmVsLnZpcy1yaWdodCxcbi52aXMtcGFuZWwudmlzLXRvcCxcbi52aXMtcGFuZWwudmlzLWJvdHRvbSB7XG4gIGJvcmRlcjogMXB4ICNiZmJmYmY7XG59XG5cbi52aXMtcGFuZWwudmlzLWNlbnRlcixcbi52aXMtcGFuZWwudmlzLWxlZnQsXG4udmlzLXBhbmVsLnZpcy1yaWdodCB7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZpcy1sZWZ0LnZpcy1wYW5lbC52aXMtdmVydGljYWwtc2Nyb2xsLCAudmlzLXJpZ2h0LnZpcy1wYW5lbC52aXMtdmVydGljYWwtc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0gXG5cbi52aXMtbGVmdC52aXMtcGFuZWwudmlzLXZlcnRpY2FsLXNjcm9sbCB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4udmlzLWxlZnQudmlzLXBhbmVsLnZpcy12ZXJ0aWNhbC1zY3JvbGwgLnZpcy1jb250ZW50IHtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi52aXMtcmlnaHQudmlzLXBhbmVsLnZpcy12ZXJ0aWNhbC1zY3JvbGwge1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLnZpcy1yaWdodC52aXMtcGFuZWwudmlzLXZlcnRpY2FsLXNjcm9sbCAudmlzLWNvbnRlbnQge1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuLnZpcy1wYW5lbC52aXMtY2VudGVyLFxuLnZpcy1wYW5lbC52aXMtdG9wLFxuLnZpcy1wYW5lbC52aXMtYm90dG9tIHtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xufVxuXG4udmlzLWJhY2tncm91bmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlzLXBhbmVsID4gLnZpcy1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlzLXBhbmVsIC52aXMtc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC44KTtcbiAgLyogVE9ETzogZmluZCBhIG5pY2Ugd2F5IHRvIGVuc3VyZSB2aXMtc2hhZG93cyBhcmUgZHJhd24gb24gdG9wIG9mIGl0ZW1zXG4gIHotaW5kZXg6IDE7XG4gICovXG59XG5cbi52aXMtcGFuZWwgLnZpcy1zaGFkb3cudmlzLXRvcCB7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogMDtcbn1cblxuLnZpcy1wYW5lbCAudmlzLXNoYWRvdy52aXMtYm90dG9tIHtcbiAgYm90dG9tOiAtMXB4O1xuICBsZWZ0OiAwO1xufSJdfQ== */");
  vh(".vis-graph-group0{fill:#4f81bd;fill-opacity:0;stroke-width:2px;stroke:#4f81bd}.vis-graph-group1{fill:#f79646;fill-opacity:0;stroke-width:2px;stroke:#f79646}.vis-graph-group2{fill:#8c51cf;fill-opacity:0;stroke-width:2px;stroke:#8c51cf}.vis-graph-group3{fill:#75c841;fill-opacity:0;stroke-width:2px;stroke:#75c841}.vis-graph-group4{fill:#ff0100;fill-opacity:0;stroke-width:2px;stroke:#ff0100}.vis-graph-group5{fill:#37d8e6;fill-opacity:0;stroke-width:2px;stroke:#37d8e6}.vis-graph-group6{fill:#042662;fill-opacity:0;stroke-width:2px;stroke:#042662}.vis-graph-group7{fill:#00ff26;fill-opacity:0;stroke-width:2px;stroke:#00ff26}.vis-graph-group8{fill:#f0f;fill-opacity:0;stroke-width:2px;stroke:#f0f}.vis-graph-group9{fill:#8f3938;fill-opacity:0;stroke-width:2px;stroke:#8f3938}.vis-timeline .vis-fill{fill-opacity:.1;stroke:none}.vis-timeline .vis-bar{fill-opacity:.5;stroke-width:1px}.vis-timeline .vis-point{stroke-width:2px;fill-opacity:1}.vis-timeline .vis-legend-background{stroke-width:1px;fill-opacity:.9;fill:#fff;stroke:#c2c2c2}.vis-timeline .vis-outline{stroke-width:1px;fill-opacity:1;fill:#fff;stroke:#e5e5e5}.vis-timeline .vis-icon-fill{fill-opacity:.3;stroke:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGhTdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUNJLFlBQVksQ0FDWixjQUFjLENBQ2QsZ0JBQWdCLENBQ2hCLGNBQ0osQ0FFQSxrQkFDSSxZQUFZLENBQ1osY0FBYyxDQUNkLGdCQUFnQixDQUNoQixjQUNKLENBRUEsa0JBQ0ksWUFBYSxDQUNiLGNBQWMsQ0FDZCxnQkFBZ0IsQ0FDaEIsY0FDSixDQUVBLGtCQUNJLFlBQWEsQ0FDYixjQUFjLENBQ2QsZ0JBQWdCLENBQ2hCLGNBQ0osQ0FFQSxrQkFDSSxZQUFhLENBQ2IsY0FBYyxDQUNkLGdCQUFnQixDQUNoQixjQUNKLENBRUEsa0JBQ0ksWUFBYSxDQUNiLGNBQWMsQ0FDZCxnQkFBZ0IsQ0FDaEIsY0FDSixDQUVBLGtCQUNJLFlBQWEsQ0FDYixjQUFjLENBQ2QsZ0JBQWdCLENBQ2hCLGNBQ0osQ0FFQSxrQkFDSSxZQUFZLENBQ1osY0FBYyxDQUNkLGdCQUFnQixDQUNoQixjQUNKLENBRUEsa0JBQ0ksU0FBWSxDQUNaLGNBQWMsQ0FDZCxnQkFBZ0IsQ0FDaEIsV0FDSixDQUVBLGtCQUNJLFlBQWEsQ0FDYixjQUFjLENBQ2QsZ0JBQWdCLENBQ2hCLGNBQ0osQ0FFQSx3QkFDSSxlQUFnQixDQUNoQixXQUNKLENBR0EsdUJBQ0ksZUFBZ0IsQ0FDaEIsZ0JBQ0osQ0FFQSx5QkFDSSxnQkFBZ0IsQ0FDaEIsY0FDSixDQUdBLHFDQUNJLGdCQUFnQixDQUNoQixlQUFnQixDQUNoQixTQUFhLENBQ2IsY0FDSixDQUdBLDJCQUNJLGdCQUFnQixDQUNoQixjQUFjLENBQ2QsU0FBYSxDQUNiLGNBQ0osQ0FFQSw2QkFDSSxlQUFnQixDQUNoQixXQUNKIiwiZmlsZSI6InBhdGhTdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpcy1ncmFwaC1ncm91cDAge1xuICAgIGZpbGw6IzRmODFiZDtcbiAgICBmaWxsLW9wYWNpdHk6MDtcbiAgICBzdHJva2Utd2lkdGg6MnB4O1xuICAgIHN0cm9rZTogIzRmODFiZDtcbn1cblxuLnZpcy1ncmFwaC1ncm91cDEge1xuICAgIGZpbGw6I2Y3OTY0NjtcbiAgICBmaWxsLW9wYWNpdHk6MDtcbiAgICBzdHJva2Utd2lkdGg6MnB4O1xuICAgIHN0cm9rZTogI2Y3OTY0Njtcbn1cblxuLnZpcy1ncmFwaC1ncm91cDIge1xuICAgIGZpbGw6ICM4YzUxY2Y7XG4gICAgZmlsbC1vcGFjaXR5OjA7XG4gICAgc3Ryb2tlLXdpZHRoOjJweDtcbiAgICBzdHJva2U6ICM4YzUxY2Y7XG59XG5cbi52aXMtZ3JhcGgtZ3JvdXAzIHtcbiAgICBmaWxsOiAjNzVjODQxO1xuICAgIGZpbGwtb3BhY2l0eTowO1xuICAgIHN0cm9rZS13aWR0aDoycHg7XG4gICAgc3Ryb2tlOiAjNzVjODQxO1xufVxuXG4udmlzLWdyYXBoLWdyb3VwNCB7XG4gICAgZmlsbDogI2ZmMDEwMDtcbiAgICBmaWxsLW9wYWNpdHk6MDtcbiAgICBzdHJva2Utd2lkdGg6MnB4O1xuICAgIHN0cm9rZTogI2ZmMDEwMDtcbn1cblxuLnZpcy1ncmFwaC1ncm91cDUge1xuICAgIGZpbGw6ICMzN2Q4ZTY7XG4gICAgZmlsbC1vcGFjaXR5OjA7XG4gICAgc3Ryb2tlLXdpZHRoOjJweDtcbiAgICBzdHJva2U6ICMzN2Q4ZTY7XG59XG5cbi52aXMtZ3JhcGgtZ3JvdXA2IHtcbiAgICBmaWxsOiAjMDQyNjYyO1xuICAgIGZpbGwtb3BhY2l0eTowO1xuICAgIHN0cm9rZS13aWR0aDoycHg7XG4gICAgc3Ryb2tlOiAjMDQyNjYyO1xufVxuXG4udmlzLWdyYXBoLWdyb3VwNyB7XG4gICAgZmlsbDojMDBmZjI2O1xuICAgIGZpbGwtb3BhY2l0eTowO1xuICAgIHN0cm9rZS13aWR0aDoycHg7XG4gICAgc3Ryb2tlOiAjMDBmZjI2O1xufVxuXG4udmlzLWdyYXBoLWdyb3VwOCB7XG4gICAgZmlsbDojZmYwMGZmO1xuICAgIGZpbGwtb3BhY2l0eTowO1xuICAgIHN0cm9rZS13aWR0aDoycHg7XG4gICAgc3Ryb2tlOiAjZmYwMGZmO1xufVxuXG4udmlzLWdyYXBoLWdyb3VwOSB7XG4gICAgZmlsbDogIzhmMzkzODtcbiAgICBmaWxsLW9wYWNpdHk6MDtcbiAgICBzdHJva2Utd2lkdGg6MnB4O1xuICAgIHN0cm9rZTogIzhmMzkzODtcbn1cblxuLnZpcy10aW1lbGluZSAudmlzLWZpbGwge1xuICAgIGZpbGwtb3BhY2l0eTowLjE7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuXG5cbi52aXMtdGltZWxpbmUgLnZpcy1iYXIge1xuICAgIGZpbGwtb3BhY2l0eTowLjU7XG4gICAgc3Ryb2tlLXdpZHRoOjFweDtcbn1cblxuLnZpcy10aW1lbGluZSAudmlzLXBvaW50IHtcbiAgICBzdHJva2Utd2lkdGg6MnB4O1xuICAgIGZpbGwtb3BhY2l0eToxLjA7XG59XG5cblxuLnZpcy10aW1lbGluZSAudmlzLWxlZ2VuZC1iYWNrZ3JvdW5kIHtcbiAgICBzdHJva2Utd2lkdGg6MXB4O1xuICAgIGZpbGwtb3BhY2l0eTowLjk7XG4gICAgZmlsbDogI2ZmZmZmZjtcbiAgICBzdHJva2U6ICNjMmMyYzI7XG59XG5cblxuLnZpcy10aW1lbGluZSAudmlzLW91dGxpbmUge1xuICAgIHN0cm9rZS13aWR0aDoxcHg7XG4gICAgZmlsbC1vcGFjaXR5OjE7XG4gICAgZmlsbDogI2ZmZmZmZjtcbiAgICBzdHJva2U6ICNlNWU1ZTU7XG59XG5cbi52aXMtdGltZWxpbmUgLnZpcy1pY29uLWZpbGwge1xuICAgIGZpbGwtb3BhY2l0eTowLjM7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuIl19 */");
  vh(".vis-timeline{position:relative;border:1px solid #bfbfbf;overflow:hidden;padding:0;margin:0;box-sizing:border-box}.vis-loading-screen{width:100%;height:100%;position:absolute;top:0;left:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxjQUNFLGlCQUFrQixDQUNsQix3QkFBeUIsQ0FDekIsZUFBZ0IsQ0FDaEIsU0FBVSxDQUNWLFFBQVMsQ0FDVCxxQkFDRixDQUVBLG9CQUNFLFVBQVcsQ0FDWCxXQUFZLENBQ1osaUJBQWtCLENBQ2xCLEtBQU0sQ0FDTixNQUNGIiwiZmlsZSI6InRpbWVsaW5lLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpcy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udmlzLWxvYWRpbmctc2NyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59Il19 */");
  vh(".vis [class*=span]{min-height:0;width:auto}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsbUJBQ0UsWUFBYSxDQUNiLFVBQ0YiLCJmaWxlIjoiYm9vdHN0cmFwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG92ZXJyaWRlIHNvbWUgYm9vdHN0cmFwIHN0eWxlcyBzY3Jld2luZyB1cCB0aGUgdGltZWxpbmVzIGNzcyAqL1xuXG4udmlzIFtjbGFzcyo9XCJzcGFuXCJdIHtcbiAgbWluLWhlaWdodDogMDtcbiAgd2lkdGg6IGF1dG87XG59XG4iXX0= */");
  var Oh = function() {
    function t() {
      Za(this, t)
    }
    return Oa(t, [{
      key: "_create",
      value: function(t) {
        var e, i, n, o = this;
        this.dom = {}, this.dom.container = t, this.dom.container.style.position = "relative", this.dom.root = document.createElement("div"), this.dom.background = document.createElement("div"), this.dom.backgroundVertical = document.createElement("div"), this.dom.backgroundHorizontal = document.createElement("div"), this.dom.centerContainer = document.createElement("div"), this.dom.leftContainer = document.createElement("div"), this.dom.rightContainer = document.createElement("div"), this.dom.center = document.createElement("div"), this.dom.left = document.createElement("div"), this.dom.right = document.createElement("div"), this.dom.top = document.createElement("div"), this.dom.bottom = document.createElement("div"), this.dom.shadowTop = document.createElement("div"), this.dom.shadowBottom = document.createElement("div"), this.dom.shadowTopLeft = document.createElement("div"), this.dom.shadowBottomLeft = document.createElement("div"), this.dom.shadowTopRight = document.createElement("div"), this.dom.shadowBottomRight = document.createElement("div"), this.dom.rollingModeBtn = document.createElement("div"), this.dom.loadingScreen = document.createElement("div"), this.dom.root.className = "vis-timeline", this.dom.background.className = "vis-panel vis-background", this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical", this.dom.backgroundHorizontal.className = "vis-panel vis-background vis-horizontal", this.dom.centerContainer.className = "vis-panel vis-center", this.dom.leftContainer.className = "vis-panel vis-left", this.dom.rightContainer.className = "vis-panel vis-right", this.dom.top.className = "vis-panel vis-top", this.dom.bottom.className = "vis-panel vis-bottom", this.dom.left.className = "vis-content", this.dom.center.className = "vis-content", this.dom.right.className = "vis-content", this.dom.shadowTop.className = "vis-shadow vis-top", this.dom.shadowBottom.className = "vis-shadow vis-bottom", this.dom.shadowTopLeft.className = "vis-shadow vis-top", this.dom.shadowBottomLeft.className = "vis-shadow vis-bottom", this.dom.shadowTopRight.className = "vis-shadow vis-top", this.dom.shadowBottomRight.className = "vis-shadow vis-bottom", this.dom.rollingModeBtn.className = "vis-rolling-mode-btn", this.dom.loadingScreen.className = "vis-loading-screen", this.dom.root.appendChild(this.dom.background), this.dom.root.appendChild(this.dom.backgroundVertical), this.dom.root.appendChild(this.dom.backgroundHorizontal), this.dom.root.appendChild(this.dom.centerContainer), this.dom.root.appendChild(this.dom.leftContainer), this.dom.root.appendChild(this.dom.rightContainer), this.dom.root.appendChild(this.dom.top), this.dom.root.appendChild(this.dom.bottom), this.dom.root.appendChild(this.dom.rollingModeBtn), this.dom.centerContainer.appendChild(this.dom.center), this.dom.leftContainer.appendChild(this.dom.left), this.dom.rightContainer.appendChild(this.dom.right), this.dom.centerContainer.appendChild(this.dom.shadowTop), this.dom.centerContainer.appendChild(this.dom.shadowBottom), this.dom.leftContainer.appendChild(this.dom.shadowTopLeft), this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft), this.dom.rightContainer.appendChild(this.dom.shadowTopRight), this.dom.rightContainer.appendChild(this.dom.shadowBottomRight), this.props = {
          root: {},
          background: {},
          centerContainer: {},
          leftContainer: {},
          rightContainer: {},
          center: {},
          left: {},
          right: {},
          top: {},
          bottom: {},
          border: {},
          scrollTop: 0,
          scrollTopMin: 0
        }, this.on("rangechange", (function() {
          !0 === o.initialDrawDone && o._redraw()
        })), this.on("rangechanged", (function() {
          o.initialRangeChangeDone || (o.initialRangeChangeDone = !0)
        })), this.on("touch", Fa(e = this._onTouch).call(e, this)), this.on("panmove", Fa(i = this._onDrag).call(i, this));
        var r = this;
        this._origRedraw = Fa(n = this._redraw).call(n, this), this._redraw = cl.throttle(this._origRedraw), this.on("_change", (function(t) {
          r.itemSet && r.itemSet.initialItemSetDrawn && t && 1 == t.queue ? r._redraw() : r._origRedraw()
        })), this.hammer = new mh(this.dom.root);
        var s = this.hammer.get("pinch").set({
          enable: !0
        });
        s && function(t) {
          t.getTouchAction = function() {
            return ["pan-y"]
          }
        }(s), this.hammer.get("pan").set({
          threshold: 5,
          direction: mh.DIRECTION_ALL
        }), this.listeners = {};
        var a, l, u = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];

        function h(t) {
          this.isActive() && this.emit("mousewheel", t);
          var e = 0,
            i = 0;
          if ("detail" in t && (i = -1 * t.detail), "wheelDelta" in t && (i = t.wheelDelta), "wheelDeltaY" in t && (i = t.wheelDeltaY), "wheelDeltaX" in t && (e = -1 * t.wheelDeltaX), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = -1 * i, i = 0), "deltaY" in t && (i = -1 * t.deltaY), "deltaX" in t && (e = t.deltaX), t.deltaMode && (1 === t.deltaMode ? (e *= 40, i *= 40) : (e *= 40, i *= 800)), this.options.preferZoom) {
            if (!this.options.zoomKey || t[this.options.zoomKey]) return
          } else if (this.options.zoomKey && t[this.options.zoomKey]) return;
          if (this.options.verticalScroll || this.options.horizontalScroll)
            if (this.options.verticalScroll && Math.abs(i) >= Math.abs(e)) {
              var n = this.props.scrollTop,
                o = n + i;
              if (this.isActive()) this._setScrollTop(o) !== n && (this._redraw(), this.emit("scroll", t), t.preventDefault())
            } else if (this.options.horizontalScroll) {
            var r = (Math.abs(e) >= Math.abs(i) ? e : i) / 120 * (this.range.end - this.range.start) / 20,
              s = this.range.start + r,
              a = this.range.end + r,
              l = {
                animation: !1,
                byUser: !0,
                event: t
              };
            this.range.setRange(s, a, l), t.preventDefault()
          }
        }
        Yn(u).call(u, (function(t) {
          var e = function(e) {
            r.isActive() && r.emit(t, e)
          };
          r.hammer.on(t, e), r.listeners[t] = e
        })), fh(this.hammer, (function(t) {
          r.emit("touch", t)
        })), a = this.hammer, (l = function(t) {
          r.emit("release", t)
        }).inputHandler = function(t) {
          t.isFinal && l(t)
        }, a.on("hammer.input", l.inputHandler);
        var d = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : this.dom.centerContainer.addEventListener ? "DOMMouseScroll" : "onmousewheel";

        function c(t) {
          if (r.options.verticalScroll)
            if (r._isProgramaticallyScrolled) r._isProgramaticallyScrolled = !1;
            else if (t.preventDefault(), r.isActive()) {
            var e = -t.target.scrollTop;
            r._setScrollTop(e), r._redraw(), r.emit("scrollSide", t)
          }
        }
        this.dom.top.addEventListener, this.dom.bottom.addEventListener, this.dom.centerContainer.addEventListener(d, Fa(h).call(h, this), !1), this.dom.top.addEventListener(d, Fa(h).call(h, this), !1), this.dom.bottom.addEventListener(d, Fa(h).call(h, this), !1), this.dom.left.parentNode.addEventListener("scroll", Fa(c).call(c, this)), this.dom.right.parentNode.addEventListener("scroll", Fa(c).call(c, this));
        var p = !1;

        function m(t) {
          var e;
          if (t.preventDefault && (r.emit("dragover", r.getEventProperties(t)), t.preventDefault()), zo(e = t.target.className).call(e, "timeline") > -1 && !p) return t.dataTransfer.dropEffect = "move", p = !0, !1
        }

        function f(t) {
          t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation();
          try {
            var e = JSON.parse(t.dataTransfer.getData("text"));
            if (!e || !e.content) return
          } catch (t) {
            return !1
          }
          return p = !1, t.center = {
            x: t.clientX,
            y: t.clientY
          }, "item" !== e.target ? r.itemSet._onAddItem(t) : r.itemSet._onDropObjectOnItem(t), r.emit("drop", r.getEventProperties(t)), !1
        }
        if (this.dom.center.addEventListener("dragover", Fa(m).call(m, this), !1), this.dom.center.addEventListener("drop", Fa(f).call(f, this), !1), this.customTimes = [], this.touch = {}, this.redrawCount = 0, this.initialDrawDone = !1, this.initialRangeChangeDone = !1, !t) throw new Error("No container provided");
        t.appendChild(this.dom.root), t.appendChild(this.dom.loadingScreen)
      }
    }, {
      key: "setOptions",
      value: function(t) {
        var e;
        if (t) {
          if (cl.selectiveExtend(["width", "height", "minHeight", "maxHeight", "autoResize", "start", "end", "clickToUse", "dataAttributes", "hiddenDates", "locale", "locales", "moment", "preferZoom", "rtl", "zoomKey", "horizontalScroll", "verticalScroll", "longSelectPressTime"], this.options, t), this.dom.rollingModeBtn.style.visibility = "hidden", this.options.rtl && (this.dom.container.style.direction = "rtl", this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical-rtl"), this.options.verticalScroll && (this.options.rtl ? this.dom.rightContainer.className = "vis-panel vis-right vis-vertical-scroll" : this.dom.leftContainer.className = "vis-panel vis-left vis-vertical-scroll"), "object" !== $o(this.options.orientation) && (this.options.orientation = {
              item: void 0,
              axis: void 0
            }), "orientation" in t && ("string" == typeof t.orientation ? this.options.orientation = {
              item: t.orientation,
              axis: t.orientation
            } : "object" === $o(t.orientation) && ("item" in t.orientation && (this.options.orientation.item = t.orientation.item), "axis" in t.orientation && (this.options.orientation.axis = t.orientation.axis))), "both" === this.options.orientation.axis) {
            if (!this.timeAxis2) {
              var i = this.timeAxis2 = new yh(this.body);
              i.setOptions = function(t) {
                var e = t ? cl.extend({}, t) : {};
                e.orientation = "top", yh.prototype.setOptions.call(i, e)
              }, this.components.push(i)
            }
          } else if (this.timeAxis2) {
            var n, o, r = zo(n = this.components).call(n, this.timeAxis2);
            if (-1 !== r) ma(o = this.components).call(o, r, 1);
            this.timeAxis2.destroy(), this.timeAxis2 = null
          }
          "function" == typeof t.drawPoints && (t.drawPoints = {
            onRender: t.drawPoints
          }), "hiddenDates" in this.options && wl(this.options.moment, this.body, this.options.hiddenDates), "clickToUse" in t && (t.clickToUse ? this.activator || (this.activator = new _h(this.dom.root)) : this.activator && (this.activator.destroy(), delete this.activator)), this._initAutoResize()
        }
        if (Yn(e = this.components).call(e, (function(e) {
            return e.setOptions(t)
          })), "configure" in t) {
          var s;
          this.configurator || (this.configurator = this._createConfigurator()), this.configurator.setOptions(t.configure);
          var a = cl.deepExtend({}, this.options);
          Yn(s = this.components).call(s, (function(t) {
            cl.deepExtend(a, t.options)
          })), this.configurator.setModuleOptions({
            global: a
          })
        }
        this._redraw()
      }
    }, {
      key: "isActive",
      value: function() {
        return !this.activator || this.activator.active
      }
    }, {
      key: "destroy",
      value: function() {
        var t;
        for (var e in this.setItems(null), this.setGroups(null), this.off(), this._stopAutoResize(), this.dom.root.parentNode && this.dom.root.parentNode.removeChild(this.dom.root), this.dom = null, this.activator && (this.activator.destroy(), delete this.activator), this.listeners) this.listeners.hasOwnProperty(e) && delete this.listeners[e];
        this.listeners = null, this.hammer && this.hammer.destroy(), this.hammer = null, Yn(t = this.components).call(t, (function(t) {
          return t.destroy()
        })), this.body = null
      }
    }, {
      key: "setCustomTime",
      value: function(t, e) {
        var i, n = lo(i = this.customTimes).call(i, (function(t) {
          return e === t.options.id
        }));
        if (0 === n.length) throw new Error("No custom time bar found with id ".concat(cs(e)));
        n.length > 0 && n[0].setCustomTime(t)
      }
    }, {
      key: "getCustomTime",
      value: function(t) {
        var e, i = lo(e = this.customTimes).call(e, (function(e) {
          return e.options.id === t
        }));
        if (0 === i.length) throw new Error("No custom time bar found with id ".concat(cs(t)));
        return i[0].getCustomTime()
      }
    }, {
      key: "setCustomTimeMarker",
      value: function(t, e, i) {
        var n, o = lo(n = this.customTimes).call(n, (function(t) {
          return t.options.id === e
        }));
        if (0 === o.length) throw new Error("No custom time bar found with id ".concat(cs(e)));
        o.length > 0 && o[0].setCustomMarker(t, i)
      }
    }, {
      key: "setCustomTimeTitle",
      value: function(t, e) {
        var i, n = lo(i = this.customTimes).call(i, (function(t) {
          return t.options.id === e
        }));
        if (0 === n.length) throw new Error("No custom time bar found with id ".concat(cs(e)));
        if (n.length > 0) return n[0].setCustomTitle(t)
      }
    }, {
      key: "getEventProperties",
      value: function(t) {
        return {
          event: t
        }
      }
    }, {
      key: "addCustomTime",
      value: function(t, e) {
        var i, n = void 0 !== t ? cl.convert(t, "Date") : new Date;
        if (Cs(i = this.customTimes).call(i, (function(t) {
            return t.options.id === e
          }))) throw new Error("A custom time with id ".concat(cs(e), " already exists"));
        var o = new Bh(this.body, cl.extend({}, this.options, {
          time: n,
          id: e,
          snap: this.itemSet.options.snap
        }));
        return this.customTimes.push(o), this.components.push(o), this._redraw(), e
      }
    }, {
      key: "removeCustomTime",
      value: function(t) {
        var e, i = this,
          n = lo(e = this.customTimes).call(e, (function(e) {
            return e.options.id === t
          }));
        if (0 === n.length) throw new Error("No custom time bar found with id ".concat(cs(t)));
        Yn(n).call(n, (function(t) {
          var e, n, o, r;
          ma(e = i.customTimes).call(e, zo(n = i.customTimes).call(n, t), 1), ma(o = i.components).call(o, zo(r = i.components).call(r, t), 1), t.destroy()
        }))
      }
    }, {
      key: "getVisibleItems",
      value: function() {
        return this.itemSet && this.itemSet.getVisibleItems() || []
      }
    }, {
      key: "getVisibleGroups",
      value: function() {
        return this.itemSet && this.itemSet.getVisibleGroups() || []
      }
    }, {
      key: "fit",
      value: function(t, e) {
        var i = this.getDataRange();
        if (null !== i.min || null !== i.max) {
          var n = i.max - i.min,
            o = new Date(i.min.valueOf() - .01 * n),
            r = new Date(i.max.valueOf() + .01 * n),
            s = !t || void 0 === t.animation || t.animation;
          this.range.setRange(o, r, {
            animation: s
          }, e)
        }
      }
    }, {
      key: "getDataRange",
      value: function() {
        throw new Error("Cannot invoke abstract method getDataRange")
      }
    }, {
      key: "setWindow",
      value: function(t, e, i, n) {
        var o, r;
        "function" == typeof arguments[2] && (n = arguments[2], i = {}), 1 == arguments.length ? (o = void 0 === (r = arguments[0]).animation || r.animation, this.range.setRange(r.start, r.end, {
          animation: o
        })) : 2 == arguments.length && "function" == typeof arguments[1] ? (r = arguments[0], n = arguments[1], o = void 0 === r.animation || r.animation, this.range.setRange(r.start, r.end, {
          animation: o
        }, n)) : (o = !i || void 0 === i.animation || i.animation, this.range.setRange(t, e, {
          animation: o
        }, n))
      }
    }, {
      key: "moveTo",
      value: function(t, e, i) {
        "function" == typeof arguments[1] && (i = arguments[1], e = {});
        var n = this.range.end - this.range.start,
          o = cl.convert(t, "Date").valueOf(),
          r = o - n / 2,
          s = o + n / 2,
          a = !e || void 0 === e.animation || e.animation;
        this.range.setRange(r, s, {
          animation: a
        }, i)
      }
    }, {
      key: "getWindow",
      value: function() {
        var t = this.range.getRange();
        return {
          start: new Date(t.start),
          end: new Date(t.end)
        }
      }
    }, {
      key: "zoomIn",
      value: function(t, e, i) {
        if (!(!t || t < 0 || t > 1)) {
          "function" == typeof arguments[1] && (i = arguments[1], e = {});
          var n = this.getWindow(),
            o = n.start.valueOf(),
            r = n.end.valueOf(),
            s = r - o,
            a = s / (1 + t),
            l = (s - a) / 2,
            u = o + l,
            h = r - l;
          this.setWindow(u, h, e, i)
        }
      }
    }, {
      key: "zoomOut",
      value: function(t, e, i) {
        if (!(!t || t < 0 || t > 1)) {
          "function" == typeof arguments[1] && (i = arguments[1], e = {});
          var n = this.getWindow(),
            o = n.start.valueOf(),
            r = n.end.valueOf(),
            s = r - o,
            a = o - s * t / 2,
            l = r + s * t / 2;
          this.setWindow(a, l, e, i)
        }
      }
    }, {
      key: "redraw",
      value: function() {
        this._redraw()
      }
    }, {
      key: "_redraw",
      value: function() {
        var t;
        this.redrawCount++;
        var e = this.dom;
        if (e && e.container && 0 != e.root.offsetWidth) {
          var i = !1,
            n = this.options,
            o = this.props;
          _l(this.options.moment, this.body, this.options.hiddenDates), "top" == n.orientation ? (cl.addClassName(e.root, "vis-top"), cl.removeClassName(e.root, "vis-bottom")) : (cl.removeClassName(e.root, "vis-top"), cl.addClassName(e.root, "vis-bottom")), n.rtl ? (cl.addClassName(e.root, "vis-rtl"), cl.removeClassName(e.root, "vis-ltr")) : (cl.addClassName(e.root, "vis-ltr"), cl.removeClassName(e.root, "vis-rtl")), e.root.style.maxHeight = cl.option.asSize(n.maxHeight, ""), e.root.style.minHeight = cl.option.asSize(n.minHeight, ""), e.root.style.width = cl.option.asSize(n.width, "");
          var r = e.root.offsetWidth;
          o.border.left = 1, o.border.right = 1, o.border.top = 1, o.border.bottom = 1, o.center.height = e.center.offsetHeight, o.left.height = e.left.offsetHeight, o.right.height = e.right.offsetHeight, o.top.height = e.top.clientHeight || -o.border.top, o.bottom.height = e.bottom.clientHeight || -o.border.bottom;
          var s = Math.max(o.left.height, o.center.height, o.right.height),
            a = o.top.height + s + o.bottom.height + o.border.top + o.border.bottom;
          e.root.style.height = cl.option.asSize(n.height, "".concat(a, "px")), o.root.height = e.root.offsetHeight, o.background.height = o.root.height;
          var l = o.root.height - o.top.height - o.bottom.height;
          o.centerContainer.height = l, o.leftContainer.height = l, o.rightContainer.height = o.leftContainer.height, o.root.width = r, o.background.width = o.root.width, this.initialDrawDone || (o.scrollbarWidth = cl.getScrollBarWidth());
          var u = e.leftContainer.clientWidth,
            h = e.rightContainer.clientWidth;
          n.verticalScroll ? n.rtl ? (o.left.width = u || -o.border.left, o.right.width = h + o.scrollbarWidth || -o.border.right) : (o.left.width = u + o.scrollbarWidth || -o.border.left, o.right.width = h || -o.border.right) : (o.left.width = u || -o.border.left, o.right.width = h || -o.border.right), this._setDOM();
          var d = this._updateScrollTop();
          "top" != n.orientation.item && (d += Math.max(o.centerContainer.height - o.center.height - o.border.top - o.border.bottom, 0)), e.center.style.transform = "translateY(".concat(d, "px)");
          var c = 0 == o.scrollTop ? "hidden" : "",
            p = o.scrollTop == o.scrollTopMin ? "hidden" : "";
          e.shadowTop.style.visibility = c, e.shadowBottom.style.visibility = p, e.shadowTopLeft.style.visibility = c, e.shadowBottomLeft.style.visibility = p, e.shadowTopRight.style.visibility = c, e.shadowBottomRight.style.visibility = p, n.verticalScroll && (e.rightContainer.className = "vis-panel vis-right vis-vertical-scroll", e.leftContainer.className = "vis-panel vis-left vis-vertical-scroll", e.shadowTopRight.style.visibility = "hidden", e.shadowBottomRight.style.visibility = "hidden", e.shadowTopLeft.style.visibility = "hidden", e.shadowBottomLeft.style.visibility = "hidden", e.left.style.top = "0px", e.right.style.top = "0px"), (!n.verticalScroll || o.center.height < o.centerContainer.height) && (e.left.style.top = "".concat(d, "px"), e.right.style.top = "".concat(d, "px"), e.rightContainer.className = e.rightContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"), " "), e.leftContainer.className = e.leftContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"), " "), o.left.width = u || -o.border.left, o.right.width = h || -o.border.right, this._setDOM());
          var m = o.center.height > o.centerContainer.height;
          this.hammer.get("pan").set({
            direction: m ? mh.DIRECTION_ALL : mh.DIRECTION_HORIZONTAL
          }), this.hammer.get("press").set({
            time: this.options.longSelectPressTime
          }), Yn(t = this.components).call(t, (function(t) {
            i = t.redraw() || i
          }));
          if (i) {
            if (this.redrawCount < 5) return void this.body.emitter.emit("_change");
            console.log("WARNING: infinite loop in redraw?")
          } else this.redrawCount = 0;
          this.body.emitter.emit("changed")
        }
      }
    }, {
      key: "_setDOM",
      value: function() {
        var t = this.props,
          e = this.dom;
        t.leftContainer.width = t.left.width, t.rightContainer.width = t.right.width;
        var i = t.root.width - t.left.width - t.right.width;
        t.center.width = i, t.centerContainer.width = i, t.top.width = i, t.bottom.width = i, e.background.style.height = "".concat(t.background.height, "px"), e.backgroundVertical.style.height = "".concat(t.background.height, "px"), e.backgroundHorizontal.style.height = "".concat(t.centerContainer.height, "px"), e.centerContainer.style.height = "".concat(t.centerContainer.height, "px"), e.leftContainer.style.height = "".concat(t.leftContainer.height, "px"), e.rightContainer.style.height = "".concat(t.rightContainer.height, "px"), e.background.style.width = "".concat(t.background.width, "px"), e.backgroundVertical.style.width = "".concat(t.centerContainer.width, "px"), e.backgroundHorizontal.style.width = "".concat(t.background.width, "px"), e.centerContainer.style.width = "".concat(t.center.width, "px"), e.top.style.width = "".concat(t.top.width, "px"), e.bottom.style.width = "".concat(t.bottom.width, "px"), e.background.style.left = "0", e.background.style.top = "0", e.backgroundVertical.style.left = "".concat(t.left.width + t.border.left, "px"), e.backgroundVertical.style.top = "0", e.backgroundHorizontal.style.left = "0", e.backgroundHorizontal.style.top = "".concat(t.top.height, "px"), e.centerContainer.style.left = "".concat(t.left.width, "px"), e.centerContainer.style.top = "".concat(t.top.height, "px"), e.leftContainer.style.left = "0", e.leftContainer.style.top = "".concat(t.top.height, "px"), e.rightContainer.style.left = "".concat(t.left.width + t.center.width, "px"), e.rightContainer.style.top = "".concat(t.top.height, "px"), e.top.style.left = "".concat(t.left.width, "px"), e.top.style.top = "0", e.bottom.style.left = "".concat(t.left.width, "px"), e.bottom.style.top = "".concat(t.top.height + t.centerContainer.height, "px"), e.center.style.left = "0", e.left.style.left = "0", e.right.style.left = "0"
      }
    }, {
      key: "setCurrentTime",
      value: function(t) {
        if (!this.currentTime) throw new Error("Option showCurrentTime must be true");
        this.currentTime.setCurrentTime(t)
      }
    }, {
      key: "getCurrentTime",
      value: function() {
        if (!this.currentTime) throw new Error("Option showCurrentTime must be true");
        return this.currentTime.getCurrentTime()
      }
    }, {
      key: "_toTime",
      value: function(t) {
        return Cl(this, t, this.props.center.width)
      }
    }, {
      key: "_toGlobalTime",
      value: function(t) {
        return Cl(this, t, this.props.root.width)
      }
    }, {
      key: "_toScreen",
      value: function(t) {
        return Il(this, t, this.props.center.width)
      }
    }, {
      key: "_toGlobalScreen",
      value: function(t) {
        return Il(this, t, this.props.root.width)
      }
    }, {
      key: "_initAutoResize",
      value: function() {
        1 == this.options.autoResize ? this._startAutoResize() : this._stopAutoResize()
      }
    }, {
      key: "_startAutoResize",
      value: function() {
        var t = this;
        this._stopAutoResize(), this._onResize = function() {
          if (1 == t.options.autoResize) {
            if (t.dom.root) {
              var e = t.dom.root.offsetHeight,
                i = t.dom.root.offsetWidth;
              i == t.props.lastWidth && e == t.props.lastHeight || (t.props.lastWidth = i, t.props.lastHeight = e, t.props.scrollbarWidth = cl.getScrollBarWidth(), t.body.emitter.emit("_change"))
            }
          } else t._stopAutoResize()
        }, cl.addEventListener(window, "resize", this._onResize), t.dom.root && (t.props.lastWidth = t.dom.root.offsetWidth, t.props.lastHeight = t.dom.root.offsetHeight), this.watchTimer = Wl(this._onResize, 1e3)
      }
    }, {
      key: "_stopAutoResize",
      value: function() {
        this.watchTimer && (clearInterval(this.watchTimer), this.watchTimer = void 0), this._onResize && (cl.removeEventListener(window, "resize", this._onResize), this._onResize = null)
      }
    }, {
      key: "_onTouch",
      value: function(t) {
        this.touch.allowDragging = !0, this.touch.initialScrollTop = this.props.scrollTop
      }
    }, {
      key: "_onPinch",
      value: function(t) {
        this.touch.allowDragging = !1
      }
    }, {
      key: "_onDrag",
      value: function(t) {
        if (t && this.touch.allowDragging) {
          var e = t.deltaY,
            i = this._getScrollTop(),
            n = this._setScrollTop(this.touch.initialScrollTop + e);
          this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -this.props.scrollTop, this.dom.right.parentNode.scrollTop = -this.props.scrollTop), n != i && this.emit("verticalDrag")
        }
      }
    }, {
      key: "_setScrollTop",
      value: function(t) {
        return this.props.scrollTop = t, this._updateScrollTop(), this.props.scrollTop
      }
    }, {
      key: "_updateScrollTop",
      value: function() {
        var t = Math.min(this.props.centerContainer.height - this.props.center.height, 0);
        return t != this.props.scrollTopMin && ("top" != this.options.orientation.item && (this.props.scrollTop += t - this.props.scrollTopMin), this.props.scrollTopMin = t), this.props.scrollTop > 0 && (this.props.scrollTop = 0), this.props.scrollTop < t && (this.props.scrollTop = t), this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -this.props.scrollTop, this.dom.right.parentNode.scrollTop = -this.props.scrollTop), this._isProgramaticallyScrolled = !0, this.props.scrollTop
      }
    }, {
      key: "_getScrollTop",
      value: function() {
        return this.props.scrollTop
      }
    }, {
      key: "_createConfigurator",
      value: function() {
        throw new Error("Cannot invoke abstract method _createConfigurator")
      }
    }]), t
  }();

  function Ah(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  Xl(Oh.prototype);
  var Wh = function(t) {
      Ms(i, t);
      var e = Ah(i);

      function i(t, n) {
        var o, r;
        Za(this, i), (r = e.call(this)).body = t, r.defaultOptions = {
          rtl: !1,
          showCurrentTime: !0,
          alignCurrentTime: void 0,
          moment: sl,
          locales: Fh,
          locale: "en"
        }, r.options = cl.extend({}, r.defaultOptions), r.setOptions(n), r.options.locales = cl.extend({}, Fh, r.options.locales);
        var s = r.defaultOptions.locales[r.defaultOptions.locale];
        return Yn(o = vn(r.options.locales)).call(o, (function(t) {
          r.options.locales[t] = cl.extend({}, s, r.options.locales[t])
        })), r.offset = 0, r._create(), r
      }
      return Oa(i, [{
        key: "_create",
        value: function() {
          var t = document.createElement("div");
          t.className = "vis-current-time", t.style.position = "absolute", t.style.top = "0px", t.style.height = "100%", this.bar = t
        }
      }, {
        key: "destroy",
        value: function() {
          this.options.showCurrentTime = !1, this.redraw(), this.body = null
        }
      }, {
        key: "setOptions",
        value: function(t) {
          t && cl.selectiveExtend(["rtl", "showCurrentTime", "alignCurrentTime", "moment", "locale", "locales"], this.options, t)
        }
      }, {
        key: "redraw",
        value: function() {
          if (this.options.showCurrentTime) {
            var t, e, i = this.body.dom.backgroundVertical;
            this.bar.parentNode != i && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), i.appendChild(this.bar), this.start());
            var n = this.options.moment(or() + this.offset);
            this.options.alignCurrentTime && (n = n.startOf(this.options.alignCurrentTime));
            var o = this.body.util.toScreen(n),
              r = this.options.locales[this.options.locale];
            r || (this.warned || (console.warn("WARNING: options.locales['".concat(this.options.locale, "'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization")), this.warned = !0), r = this.options.locales.en);
            var s = co(t = co(e = "".concat(r.current, " ")).call(e, r.time, ": ")).call(t, n.format("dddd, MMMM Do YYYY, H:mm:ss"));
            s = s.charAt(0).toUpperCase() + s.substring(1), this.options.rtl ? this.bar.style.transform = "translateX(".concat(-1 * o, "px)") : this.bar.style.transform = "translateX(".concat(o, "px)"), this.bar.title = s
          } else this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), this.stop();
          return !1
        }
      }, {
        key: "start",
        value: function() {
          var t = this;
          ! function e() {
            t.stop();
            var i = 1 / t.body.range.conversion(t.body.domProps.center.width).scale / 10;
            i < 30 && (i = 30), i > 1e3 && (i = 1e3), t.redraw(), t.body.emitter.emit("currentTimeTick"), t.currentTimeTimer = ba(e, i)
          }()
        }
      }, {
        key: "stop",
        value: function() {
          void 0 !== this.currentTimeTimer && (clearTimeout(this.currentTimeTimer), delete this.currentTimeTimer)
        }
      }, {
        key: "setCurrentTime",
        value: function(t) {
          var e = cl.convert(t, "Date").valueOf(),
            i = or();
          this.offset = e - i, this.redraw()
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return new Date(or() + this.offset)
        }
      }]), i
    }(vl),
    Xh = hi.find,
    Th = !0,
    Yh = Fn("find");
  "find" in [] && Array(1).find((function() {
    Th = !1
  })), bt({
    target: "Array",
    proto: !0,
    forced: Th || !Yh
  }, {
    find: function(t) {
      return Xh(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Eh = In("Array").find,
    Rh = Array.prototype,
    Uh = function(t) {
      var e = t.find;
      return t === Rh || t instanceof Array && e === Rh.find ? Eh : e
    },
    zh = Et.includes,
    Vh = Fn("indexOf", {
      ACCESSORS: !0,
      1: 0
    });
  bt({
    target: "Array",
    proto: !0,
    forced: !Vh
  }, {
    includes: function(t) {
      return zh(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var jh = In("Array").includes,
    Hh = St("match"),
    Ph = function(t) {
      if (function(t) {
          var e;
          return v(t) && (void 0 !== (e = t[Hh]) ? !!e : "RegExp" == l(t))
        }(t)) throw TypeError("The method doesn't accept regular expressions");
      return t
    },
    Jh = St("match");
  bt({
    target: "String",
    proto: !0,
    forced: ! function(t) {
      var e = /./;
      try {
        "/./" [t](e)
      } catch (i) {
        try {
          return e[Jh] = !1, "/./" [t](e)
        } catch (t) {}
      }
      return !1
    }("includes")
  }, {
    includes: function(t) {
      return !!~String(d(this)).indexOf(Ph(t), arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Kh = In("String").includes,
    qh = Array.prototype,
    $h = String.prototype,
    td = function(t) {
      var e = t.includes;
      return t === qh || t instanceof Array && e === qh.includes ? jh : "string" == typeof t || t === $h || t instanceof String && e === $h.includes ? Kh : e
    };

  function ed(t) {
    Ys(t).call(t, (function(t, e) {
      return t.data.start - e.data.start
    }))
  }

  function id(t) {
    Ys(t).call(t, (function(t, e) {
      return ("end" in t.data ? t.data.end : t.data.start) - ("end" in e.data ? e.data.end : e.data.start)
    }))
  }

  function nd(t, e, i, n) {
    if (i)
      for (var o = 0; o < t.length; o++) t[o].top = null;
    for (o = 0; o < t.length; o++) {
      var r = t[o];
      if (r.stack && null === r.top) {
        r.top = e.axis;
        var s = !1;
        do {
          for (var a = null, l = 0, u = t.length; l < u; l++) {
            var h = t[l];
            if (s = n() || !1) return !0;
            if (null !== h.top && h !== r && h.stack && ld(r, h, e.item, h.options.rtl)) {
              a = h;
              break
            }
          }
          null != a && (r.top = a.top + a.height + e.item.vertical)
        } while (a)
      }
    }
    return s
  }

  function od(t, e, i) {
    for (var n = 0; n < t.length; n++) t[n].top = null;
    var o = i.height;
    for (n = 0; n < t.length; n++) {
      var r = t[n];
      if (r.stack && null === r.top) {
        r.top = r.baseTop;
        do {
          for (var s = null, a = 0, l = t.length; a < l; a++) {
            var u = t[a];
            if (null !== u.top && u !== r && ld(r, u, e.item, u.options.rtl)) {
              s = u;
              break
            }
          }
          null != s && (r.top = s.top + s.height + e.item.vertical), r.top + r.height > o && (o = r.top + r.height)
        } while (s)
      }
    }
    i.height = o - i.top + .5 * e.item.vertical
  }

  function rd(t, e, i, n) {
    for (var o = 0; o < t.length; o++)
      if (null == t[o].data.subgroup) t[o].top = e.item.vertical;
      else if (void 0 !== t[o].data.subgroup && n) {
      var r = 0;
      for (var s in i) i.hasOwnProperty(s) && 1 == i[s].visible && i[s].index < i[t[o].data.subgroup].index && (r += i[s].height, i[t[o].data.subgroup].top = r);
      t[o].top = r + .5 * e.item.vertical
    }
    n || sd(t, e, i)
  }

  function sd(t, e, i) {
    for (var n in i)
      if (i.hasOwnProperty(n)) {
        i[n].top = 0;
        do {
          var o = null;
          for (var r in i)
            if (null !== i[r].top && r !== n && i[n].index > i[r].index && ud(i[n], i[r])) {
              o = i[r];
              break
            } null != o && (i[n].top = o.top + o.height)
        } while (o)
      } for (var s = 0; s < t.length; s++) void 0 !== t[s].data.subgroup && (t[s].top = i[t[s].data.subgroup].top + .5 * e.item.vertical)
  }

  function ad(t, e, i) {
    var n = !1,
      o = [];
    for (var r in i) i[r].hasOwnProperty("index") ? o[i[r].index] = r : o.push(r);
    for (var s = 0; s < o.length; s++)
      if (r = o[s], i.hasOwnProperty(r)) {
        for (var a in n = n || i[r].stack, i[r].top = 0, i) i[a].visible && i[r].index > i[a].index && (i[r].top += i[a].height);
        for (var l = t[r], u = 0; u < l.length; u++) void 0 !== l[u].data.subgroup && (l[u].top = i[l[u].data.subgroup].top + .5 * e.item.vertical, i[r].stack && (l[u].baseTop = l[u].top));
        n && i[r].stack && od(t[r], e, i[r])
      }
  }

  function ld(t, e, i, n) {
    return n ? t.right - i.horizontal + .001 < e.right + e.width && t.right + t.width + i.horizontal - .001 > e.right && t.top - i.vertical + .001 < e.top + e.height && t.top + t.height + i.vertical - .001 > e.top : t.left - i.horizontal + .001 < e.left + e.width && t.left + t.width + i.horizontal - .001 > e.left && t.top - i.vertical + .001 < e.top + e.height && t.top + t.height + i.vertical - .001 > e.top
  }

  function ud(t, e) {
    var i = t.start < e.end && t.end > e.start,
      n = t.top < e.top + e.height && t.top + t.height > e.top;
    return i && n
  }
  var hd = Object.freeze({
      __proto__: null,
      orderByStart: ed,
      orderByEnd: id,
      stack: nd,
      substack: od,
      nostack: rd,
      stackSubgroups: sd,
      stackSubgroupsWithInnerStack: ad,
      collision: ld,
      collisionByTimes: ud
    }),
    dd = "__background__",
    cd = function() {
      function t(e, i, n) {
        var o = this;
        if (Za(this, t), this.groupId = e, this.subgroups = {}, this.subgroupStack = {}, this.subgroupStackAll = !1, this.subgroupVisibility = {}, this.doInnerStack = !1, this.shouldBailStackItems = !1, this.subgroupIndex = 0, this.subgroupOrderer = i && i.subgroupOrder, this.itemSet = n, this.isVisible = null, this.stackDirty = !0, this._disposeCallbacks = [], i && i.nestedGroups && (this.nestedGroups = i.nestedGroups, 0 == i.showNested ? this.showNested = !1 : this.showNested = !0), i && i.subgroupStack)
          if ("boolean" == typeof i.subgroupStack) this.doInnerStack = i.subgroupStack, this.subgroupStackAll = i.subgroupStack;
          else
            for (var r in i.subgroupStack) this.subgroupStack[r] = i.subgroupStack[r], this.doInnerStack = this.doInnerStack || i.subgroupStack[r];
        i && i.heightMode ? this.heightMode = i.heightMode : this.heightMode = n.options.groupHeightMode, this.nestedInGroup = null, this.dom = {}, this.props = {
          label: {
            width: 0,
            height: 0
          }
        }, this.className = null, this.items = {}, this.visibleItems = [], this.itemsInRange = [], this.orderedItems = {
          byStart: [],
          byEnd: []
        }, this.checkRangedItems = !1;
        var s = function() {
          o.checkRangedItems = !0
        };
        this.itemSet.body.emitter.on("checkRangedItems", s), this._disposeCallbacks.push((function() {
          o.itemSet.body.emitter.off("checkRangedItems", s)
        })), this._create(), this.setData(i)
      }
      return Oa(t, [{
        key: "_create",
        value: function() {
          var t = document.createElement("div");
          this.itemSet.options.groupEditable.order ? t.className = "vis-label draggable" : t.className = "vis-label", this.dom.label = t;
          var e = document.createElement("div");
          e.className = "vis-inner", t.appendChild(e), this.dom.inner = e;
          var i = document.createElement("div");
          i.className = "vis-group", i["vis-group"] = this, this.dom.foreground = i, this.dom.background = document.createElement("div"), this.dom.background.className = "vis-group", this.dom.axis = document.createElement("div"), this.dom.axis.className = "vis-group", this.dom.marker = document.createElement("div"), this.dom.marker.style.visibility = "hidden", this.dom.marker.style.position = "absolute", this.dom.marker.innerHTML = "", this.dom.background.appendChild(this.dom.marker)
        }
      }, {
        key: "setData",
        value: function(t) {
          if (!this.itemSet.groupTouchParams.isDragging) {
            var e, i, n;
            if (t && t.subgroupVisibility)
              for (var o in t.subgroupVisibility) this.subgroupVisibility[o] = t.subgroupVisibility[o];
            if (this.itemSet.options && this.itemSet.options.groupTemplate) e = (i = Fa(n = this.itemSet.options.groupTemplate).call(n, this))(t, this.dom.inner);
            else e = t && t.content;
            if (e instanceof Element) {
              for (; this.dom.inner.firstChild;) this.dom.inner.removeChild(this.dom.inner.firstChild);
              this.dom.inner.appendChild(e)
            } else e instanceof Object && e.isReactComponent || (e instanceof Object ? i(t, this.dom.inner) : this.dom.inner.innerHTML = null != e ? e : this.groupId || "");
            this.dom.label.title = t && t.title || "", this.dom.inner.firstChild ? cl.removeClassName(this.dom.inner, "vis-hidden") : cl.addClassName(this.dom.inner, "vis-hidden"), t && t.nestedGroups ? (this.nestedGroups && this.nestedGroups == t.nestedGroups || (this.nestedGroups = t.nestedGroups), void 0 === t.showNested && void 0 !== this.showNested || (0 == t.showNested ? this.showNested = !1 : this.showNested = !0), cl.addClassName(this.dom.label, "vis-nesting-group"), this.showNested ? (cl.removeClassName(this.dom.label, "collapsed"), cl.addClassName(this.dom.label, "expanded")) : (cl.removeClassName(this.dom.label, "expanded"), cl.addClassName(this.dom.label, "collapsed"))) : this.nestedGroups && (this.nestedGroups = null, cl.removeClassName(this.dom.label, "collapsed"), cl.removeClassName(this.dom.label, "expanded"), cl.removeClassName(this.dom.label, "vis-nesting-group")), t && (t.treeLevel || t.nestedInGroup) ? (cl.addClassName(this.dom.label, "vis-nested-group"), t.treeLevel ? cl.addClassName(this.dom.label, "vis-group-level-" + t.treeLevel) : cl.addClassName(this.dom.label, "vis-group-level-unknown-but-gte1")) : cl.addClassName(this.dom.label, "vis-group-level-0");
            var r = t && t.className || null;
            r != this.className && (this.className && (cl.removeClassName(this.dom.label, this.className), cl.removeClassName(this.dom.foreground, this.className), cl.removeClassName(this.dom.background, this.className), cl.removeClassName(this.dom.axis, this.className)), cl.addClassName(this.dom.label, r), cl.addClassName(this.dom.foreground, r), cl.addClassName(this.dom.background, r), cl.addClassName(this.dom.axis, r), this.className = r), this.style && (cl.removeCssText(this.dom.label, this.style), this.style = null), t && t.style && (cl.addCssText(this.dom.label, t.style), this.style = t.style)
          }
        }
      }, {
        key: "getLabelWidth",
        value: function() {
          return this.props.label.width
        }
      }, {
        key: "_didMarkerHeightChange",
        value: function() {
          var t = this.dom.marker.clientHeight;
          if (t != this.lastMarkerHeight) {
            this.lastMarkerHeight = t;
            var e = {},
              i = 0;
            if (Yn(cl).call(cl, this.items, (function(t, n) {
                if (t.dirty = !0, t.displayed) {
                  e[n] = t.redraw(!0), i = e[n].length
                }
              })), i > 0)
              for (var n = function(t) {
                  Yn(cl).call(cl, e, (function(e) {
                    e[t]()
                  }))
                }, o = 0; o < i; o++) n(o);
            return !0
          }
          return !1
        }
      }, {
        key: "_calculateGroupSizeAndPosition",
        value: function() {
          var t = this.dom.foreground,
            e = t.offsetTop,
            i = t.offsetLeft,
            n = t.offsetWidth;
          this.top = e, this.right = i, this.width = n
        }
      }, {
        key: "_shouldBailItemsRedraw",
        value: function() {
          var t = this,
            e = this.itemSet.options.onTimeout,
            i = {
              relativeBailingTime: this.itemSet.itemsSettingTime,
              bailTimeMs: e && e.timeoutMs,
              userBailFunction: e && e.callback,
              shouldBailStackItems: this.shouldBailStackItems
            },
            n = null;
          if (!this.itemSet.initialDrawDone) {
            if (i.shouldBailStackItems) return !0;
            Math.abs(or() - new Date(i.relativeBailingTime)) > i.bailTimeMs && (i.userBailFunction && null == this.itemSet.userContinueNotBail ? i.userBailFunction((function(e) {
              t.itemSet.userContinueNotBail = e, n = !e
            })) : n = 0 == t.itemSet.userContinueNotBail)
          }
          return n
        }
      }, {
        key: "_redrawItems",
        value: function(t, e, i, n) {
          var o = this;
          if (t || this.stackDirty || this.isVisible && !e) {
            var r, s, a, l, u, h, d = {
                byEnd: lo(r = this.orderedItems.byEnd).call(r, (function(t) {
                  return !t.isCluster
                })),
                byStart: lo(s = this.orderedItems.byStart).call(s, (function(t) {
                  return !t.isCluster
                }))
              },
              c = {
                byEnd: Fo(new oa(lo(a = jn(l = this.orderedItems.byEnd).call(l, (function(t) {
                  return t.cluster
                }))).call(a, (function(t) {
                  return !!t
                })))),
                byStart: Fo(new oa(lo(u = jn(h = this.orderedItems.byStart).call(h, (function(t) {
                  return t.cluster
                }))).call(u, (function(t) {
                  return !!t
                }))))
              },
              p = function() {
                var t, e, i, r = o._updateItemsInRange(d, lo(t = o.visibleItems).call(t, (function(t) {
                    return !t.isCluster
                  })), n),
                  s = o._updateClustersInRange(c, lo(e = o.visibleItems).call(e, (function(t) {
                    return t.isCluster
                  })), n);
                return co(i = []).call(i, Fo(r), Fo(s))
              },
              m = function(t) {
                var e = {},
                  i = function(i) {
                    var n, r = lo(n = o.visibleItems).call(n, (function(t) {
                      return t.data.subgroup === i
                    }));
                    e[i] = t ? Ys(r).call(r, (function(e, i) {
                      return t(e.data, i.data)
                    })) : r
                  };
                for (var n in o.subgroups) i(n);
                return e
              };
            if ("function" == typeof this.itemSet.options.order) {
              var f = this;
              if (this.doInnerStack && this.itemSet.options.stackSubgroups) {
                ad(m(this.itemSet.options.order), i, this.subgroups), this.visibleItems = p(), this._updateSubGroupHeights(i)
              } else {
                var g, v, b, y;
                this.visibleItems = p(), this._updateSubGroupHeights(i);
                var x = Ys(g = lo(v = Zo(b = this.visibleItems).call(b)).call(v, (function(t) {
                  return t.isCluster || !t.isCluster && !t.cluster
                }))).call(g, (function(t, e) {
                  return f.itemSet.options.order(t.data, e.data)
                }));
                this.shouldBailStackItems = nd(x, i, !0, Fa(y = this._shouldBailItemsRedraw).call(y, this))
              }
            } else {
              var w;
              if (this.visibleItems = p(), this._updateSubGroupHeights(i), this.itemSet.options.stack)
                if (this.doInnerStack && this.itemSet.options.stackSubgroups) ad(m(), i, this.subgroups);
                else this.shouldBailStackItems = nd(this.visibleItems, i, !0, Fa(w = this._shouldBailItemsRedraw).call(w, this));
              else rd(this.visibleItems, i, this.subgroups, this.itemSet.options.stackSubgroups)
            }
            for (var _ = 0; _ < this.visibleItems.length; _++) this.visibleItems[_].repositionX(), void 0 !== this.subgroupVisibility[this.visibleItems[_].data.subgroup] && (this.subgroupVisibility[this.visibleItems[_].data.subgroup] || this.visibleItems[_].hide());
            this.itemSet.options.cluster && Yn(cl).call(cl, this.items, (function(t) {
              t.cluster && t.displayed && t.hide()
            })), this.shouldBailStackItems && this.itemSet.body.emitter.emit("destroyTimeline"), this.stackDirty = !1
          }
        }
      }, {
        key: "_didResize",
        value: function(t, e) {
          t = cl.updateProperty(this, "height", e) || t;
          var i = this.dom.inner.clientWidth,
            n = this.dom.inner.clientHeight;
          return t = cl.updateProperty(this.props.label, "width", i) || t, t = cl.updateProperty(this.props.label, "height", n) || t
        }
      }, {
        key: "_applyGroupHeight",
        value: function(t) {
          this.dom.background.style.height = "".concat(t, "px"), this.dom.foreground.style.height = "".concat(t, "px"), this.dom.label.style.height = "".concat(t, "px")
        }
      }, {
        key: "_updateItemsVerticalPosition",
        value: function(t) {
          for (var e = 0, i = this.visibleItems.length; e < i; e++) {
            var n = this.visibleItems[e];
            n.repositionY(t), this.isVisible || this.groupId == dd || n.displayed && n.hide()
          }
        }
      }, {
        key: "redraw",
        value: function(t, e, i, n) {
          var o, r, s, a, l, u, h, d = this,
            c = !1,
            p = this.isVisible,
            m = [function() {
              i = d._didMarkerHeightChange.call(d) || i
            }, Fa(o = this._updateSubGroupHeights).call(o, this, e), Fa(r = this._calculateGroupSizeAndPosition).call(r, this), function() {
              var i;
              d.isVisible = Fa(i = d._isGroupVisible).call(i, d)(t, e)
            }, function() {
              var n;
              Fa(n = d._redrawItems).call(n, d)(i, p, e, t)
            }, Fa(s = this._updateSubgroupsSizes).call(s, this), function() {
              var t;
              u = Fa(t = d._calculateHeight).call(t, d)(e)
            }, Fa(a = this._calculateGroupSizeAndPosition).call(a, this), function() {
              var t;
              c = Fa(t = d._didResize).call(t, d)(c, u)
            }, function() {
              var t;
              Fa(t = d._applyGroupHeight).call(t, d)(u)
            }, function() {
              var t;
              Fa(t = d._updateItemsVerticalPosition).call(t, d)(e)
            }, Fa(l = function() {
              return !d.isVisible && d.height && (c = !1), c
            }).call(l, this)];
          return n ? m : (Yn(m).call(m, (function(t) {
            h = t()
          })), h)
        }
      }, {
        key: "_updateSubGroupHeights",
        value: function(t) {
          var e = this;
          if (vn(this.subgroups).length > 0) {
            var i = this;
            this._resetSubgroups(), Yn(cl).call(cl, this.visibleItems, (function(n) {
              void 0 !== n.data.subgroup && (i.subgroups[n.data.subgroup].height = Math.max(i.subgroups[n.data.subgroup].height, n.height + t.item.vertical), i.subgroups[n.data.subgroup].visible = void 0 === e.subgroupVisibility[n.data.subgroup] || Boolean(e.subgroupVisibility[n.data.subgroup]))
            }))
          }
        }
      }, {
        key: "_isGroupVisible",
        value: function(t, e) {
          return this.top <= t.body.domProps.centerContainer.height - t.body.domProps.scrollTop + e.axis && this.top + this.height + e.axis >= -t.body.domProps.scrollTop
        }
      }, {
        key: "_calculateHeight",
        value: function(t) {
          var e, i;
          if ((i = "fixed" === this.heightMode ? cl.toArray(this.items) : this.visibleItems).length > 0) {
            var n = i[0].top,
              o = i[0].top + i[0].height;
            if (Yn(cl).call(cl, i, (function(t) {
                n = Math.min(n, t.top), o = Math.max(o, t.top + t.height)
              })), n > t.axis) {
              var r = n - t.axis;
              o -= r, Yn(cl).call(cl, i, (function(t) {
                t.top -= r
              }))
            }
            e = Math.ceil(o + t.item.vertical / 2), "fitItems" !== this.heightMode && (e = Math.max(e, this.props.label.height))
          } else e = this.props.label.height;
          return e
        }
      }, {
        key: "show",
        value: function() {
          this.dom.label.parentNode || this.itemSet.dom.labelSet.appendChild(this.dom.label), this.dom.foreground.parentNode || this.itemSet.dom.foreground.appendChild(this.dom.foreground), this.dom.background.parentNode || this.itemSet.dom.background.appendChild(this.dom.background), this.dom.axis.parentNode || this.itemSet.dom.axis.appendChild(this.dom.axis)
        }
      }, {
        key: "hide",
        value: function() {
          var t = this.dom.label;
          t.parentNode && t.parentNode.removeChild(t);
          var e = this.dom.foreground;
          e.parentNode && e.parentNode.removeChild(e);
          var i = this.dom.background;
          i.parentNode && i.parentNode.removeChild(i);
          var n = this.dom.axis;
          n.parentNode && n.parentNode.removeChild(n)
        }
      }, {
        key: "add",
        value: function(t) {
          var e;
          if (this.items[t.id] = t, t.setParent(this), this.stackDirty = !0, void 0 !== t.data.subgroup && (this._addToSubgroup(t), this.orderSubgroups()), !td(e = this.visibleItems).call(e, t)) {
            var i = this.itemSet.body.range;
            this._checkIfVisible(t, this.visibleItems, i)
          }
        }
      }, {
        key: "_addToSubgroup",
        value: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.data.subgroup;
          null != e && void 0 === this.subgroups[e] && (this.subgroups[e] = {
            height: 0,
            top: 0,
            start: t.data.start,
            end: t.data.end || t.data.start,
            visible: !1,
            index: this.subgroupIndex,
            items: [],
            stack: this.subgroupStackAll || this.subgroupStack[e] || !1
          }, this.subgroupIndex++), new Date(t.data.start) < new Date(this.subgroups[e].start) && (this.subgroups[e].start = t.data.start);
          var i = t.data.end || t.data.start;
          new Date(i) > new Date(this.subgroups[e].end) && (this.subgroups[e].end = i), this.subgroups[e].items.push(t)
        }
      }, {
        key: "_updateSubgroupsSizes",
        value: function() {
          var t = this;
          if (t.subgroups) {
            var e = function(e) {
              var i, n = t.subgroups[e].items[0].data.end || t.subgroups[e].items[0].data.start,
                o = t.subgroups[e].items[0].data.start,
                r = n - 1;
              Yn(i = t.subgroups[e].items).call(i, (function(t) {
                new Date(t.data.start) < new Date(o) && (o = t.data.start);
                var e = t.data.end || t.data.start;
                new Date(e) > new Date(r) && (r = e)
              })), t.subgroups[e].start = o, t.subgroups[e].end = new Date(r - 1)
            };
            for (var i in t.subgroups) e(i)
          }
        }
      }, {
        key: "orderSubgroups",
        value: function() {
          if (void 0 !== this.subgroupOrderer) {
            var t = [];
            if ("string" == typeof this.subgroupOrderer) {
              for (var e in this.subgroups) t.push({
                subgroup: e,
                sortField: this.subgroups[e].items[0].data[this.subgroupOrderer]
              });
              Ys(t).call(t, (function(t, e) {
                return t.sortField - e.sortField
              }))
            } else if ("function" == typeof this.subgroupOrderer) {
              for (var i in this.subgroups) t.push(this.subgroups[i].items[0].data);
              Ys(t).call(t, this.subgroupOrderer)
            }
            if (t.length > 0)
              for (var n = 0; n < t.length; n++) this.subgroups[t[n].subgroup].index = n
          }
        }
      }, {
        key: "_resetSubgroups",
        value: function() {
          for (var t in this.subgroups) this.subgroups.hasOwnProperty(t) && (this.subgroups[t].visible = !1, this.subgroups[t].height = 0)
        }
      }, {
        key: "remove",
        value: function(t) {
          var e, i;
          delete this.items[t.id], t.setParent(null), this.stackDirty = !0;
          var n = zo(e = this.visibleItems).call(e, t); - 1 != n && ma(i = this.visibleItems).call(i, n, 1), void 0 !== t.data.subgroup && (this._removeFromSubgroup(t), this.orderSubgroups())
        }
      }, {
        key: "_removeFromSubgroup",
        value: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.data.subgroup;
          if (null != e) {
            var i = this.subgroups[e];
            if (i) {
              var n, o, r = zo(n = i.items).call(n, t);
              if (r >= 0) ma(o = i.items).call(o, r, 1), i.items.length ? this._updateSubgroupsSizes() : delete this.subgroups[e]
            }
          }
        }
      }, {
        key: "removeFromDataSet",
        value: function(t) {
          this.itemSet.removeItem(t.id)
        }
      }, {
        key: "order",
        value: function() {
          for (var t = cl.toArray(this.items), e = [], i = [], n = 0; n < t.length; n++) void 0 !== t[n].data.end && i.push(t[n]), e.push(t[n]);
          this.orderedItems = {
            byStart: e,
            byEnd: i
          }, ed(this.orderedItems.byStart), id(this.orderedItems.byEnd)
        }
      }, {
        key: "_updateItemsInRange",
        value: function(t, e, i) {
          var n = [],
            o = {};
          if (!this.isVisible && this.groupId != dd) {
            for (var r = 0; r < e.length; r++) {
              var s = e[r];
              s.displayed && s.hide()
            }
            return n
          }
          var a = (i.end - i.start) / 4,
            l = i.start - a,
            u = i.end + a;
          if (e.length > 0)
            for (var h = 0; h < e.length; h++) this._checkIfVisibleWithReference(e[h], n, o, i);
          var d = cl.binarySearchCustom(t.byStart, (function(t) {
            return t < l ? -1 : t <= u ? 0 : 1
          }), "data", "start");
          if (this._traceVisible(d, t.byStart, n, o, (function(t) {
              return t.data.start < l || t.data.start > u
            })), 1 == this.checkRangedItems) {
            this.checkRangedItems = !1;
            for (var c = 0; c < t.byEnd.length; c++) this._checkIfVisibleWithReference(t.byEnd[c], n, o, i)
          } else {
            var p = cl.binarySearchCustom(t.byEnd, (function(t) {
              return t < l ? -1 : 0
            }), "data", "end");
            this._traceVisible(p, t.byEnd, n, o, (function(t) {
              return t.data.end < l || t.data.start > u
            }))
          }
          for (var m = {}, f = 0, g = 0; g < n.length; g++) {
            var v = n[g];
            if (!v.displayed) {
              m[g] = v.redraw(!0), f = m[g].length
            }
          }
          if (f > 0)
            for (var b = function(t) {
                Yn(cl).call(cl, m, (function(e) {
                  e[t]()
                }))
              }, y = 0; y < f; y++) b(y);
          for (var x = 0; x < n.length; x++) n[x].repositionX();
          return n
        }
      }, {
        key: "_traceVisible",
        value: function(t, e, i, n, o) {
          if (-1 != t) {
            for (var r = t; r >= 0; r--) {
              var s = e[r];
              if (o(s)) break;
              s.isCluster && !s.hasItems() || s.cluster || void 0 === n[s.id] && (n[s.id] = !0, i.push(s))
            }
            for (var a = t + 1; a < e.length; a++) {
              var l = e[a];
              if (o(l)) break;
              l.isCluster && !l.hasItems() || l.cluster || void 0 === n[l.id] && (n[l.id] = !0, i.push(l))
            }
          }
        }
      }, {
        key: "_checkIfVisible",
        value: function(t, e, i) {
          t.isVisible(i) ? (t.displayed || t.show(), t.repositionX(), e.push(t)) : t.displayed && t.hide()
        }
      }, {
        key: "_checkIfVisibleWithReference",
        value: function(t, e, i, n) {
          t.isVisible(n) ? void 0 === i[t.id] && (i[t.id] = !0, e.push(t)) : t.displayed && t.hide()
        }
      }, {
        key: "_updateClustersInRange",
        value: function(t, e, i) {
          var n = [],
            o = {};
          if (e.length > 0)
            for (var r = 0; r < e.length; r++) this._checkIfVisibleWithReference(e[r], n, o, i);
          for (var s = 0; s < t.byStart.length; s++) this._checkIfVisibleWithReference(t.byStart[s], n, o, i);
          for (var a = 0; a < t.byEnd.length; a++) this._checkIfVisibleWithReference(t.byEnd[a], n, o, i);
          for (var l = {}, u = 0, h = 0; h < n.length; h++) {
            var d = n[h];
            if (!d.displayed) {
              l[h] = d.redraw(!0), u = l[h].length
            }
          }
          if (u > 0)
            for (var c = 0; c < u; c++) Yn(cl).call(cl, l, (function(t) {
              t[c]()
            }));
          for (var p = 0; p < n.length; p++) n[p].repositionX();
          return n
        }
      }, {
        key: "changeSubgroup",
        value: function(t, e, i) {
          this._removeFromSubgroup(t, e), this._addToSubgroup(t, i), this.orderSubgroups()
        }
      }, {
        key: "dispose",
        value: function() {
          var t;
          for (this.hide(); t = this._disposeCallbacks.pop();) t()
        }
      }]), t
    }();

  function pd(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  var md = function(t) {
    Ms(i, t);
    var e = pd(i);

    function i(t, n, o) {
      var r;
      return Za(this, i), (r = e.call(this, t, n, o)).width = 0, r.height = 0, r.top = 0, r.left = 0, r
    }
    return Oa(i, [{
      key: "redraw",
      value: function(t, e, i) {
        this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, t), this.width = this.dom.background.offsetWidth, this.dom.background.style.height = "0";
        for (var n = 0, o = this.visibleItems.length; n < o; n++) {
          this.visibleItems[n].repositionY(e)
        }
        return !1
      }
    }, {
      key: "show",
      value: function() {
        this.dom.background.parentNode || this.itemSet.dom.background.appendChild(this.dom.background)
      }
    }]), i
  }(cd);

  function fd(t) {
    if (void 0 === Ei || null == Be(t)) {
      if (Vo(t) || (t = function(t, e) {
          var i;
          if (!t) return;
          if ("string" == typeof t) return gd(t, e);
          var n = Zo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return $i(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gd(t, e)
        }(t))) {
        var e = 0,
          i = function() {};
        return {
          s: i,
          n: function() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            }
          },
          e: function(t) {
            throw t
          },
          f: i
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o, r = !0,
      s = !1;
    return {
      s: function() {
        n = Ze(t)
      },
      n: function() {
        var t = n.next();
        return r = t.done, t
      },
      e: function(t) {
        s = !0, o = t
      },
      f: function() {
        try {
          r || null == n.return || n.return()
        } finally {
          if (s) throw o
        }
      }
    }
  }

  function gd(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  }
  vh('.vis-item{position:absolute;color:#1a1a1a;border-color:#97b0f8;border-width:1px;background-color:#d5ddf6;display:inline-block;z-index:1}.vis-item.vis-selected{border-color:#ffc200;background-color:#fff785;z-index:2}.vis-editable.vis-selected{cursor:move}.vis-item.vis-point.vis-selected{background-color:#fff785}.vis-item.vis-box{text-align:center;border-style:solid;border-radius:2px}.vis-item.vis-point{background:none}.vis-item.vis-dot{position:absolute;padding:0;border-width:4px;border-style:solid;border-radius:4px}.vis-item.vis-range{border-style:solid;border-radius:2px;box-sizing:border-box}.vis-item.vis-background{border:none;background-color:rgba(213,221,246,.4);box-sizing:border-box;padding:0;margin:0}.vis-item .vis-item-overflow{position:relative;width:100%;height:100%;padding:0;margin:0;overflow:hidden}.vis-item-visible-frame{white-space:nowrap}.vis-item.vis-range .vis-item-content{position:relative;display:inline-block}.vis-item.vis-background .vis-item-content{position:absolute;display:inline-block}.vis-item.vis-line{padding:0;position:absolute;width:0;border-left-width:1px;border-left-style:solid}.vis-item .vis-item-content{white-space:nowrap;box-sizing:border-box;padding:5px}.vis-item .vis-onUpdateTime-tooltip{position:absolute;background:#4f81bd;color:#fff;width:200px;text-align:center;white-space:nowrap;padding:5px;border-radius:1px;transition:.4s;-o-transition:.4s;-moz-transition:.4s;-webkit-transition:.4s}.vis-item .vis-delete,.vis-item .vis-delete-rtl{position:absolute;top:0;width:24px;height:24px;box-sizing:border-box;padding:0 5px;cursor:pointer;-webkit-transition:background .2s linear;-moz-transition:background .2s linear;-ms-transition:background .2s linear;-o-transition:background .2s linear;transition:background .2s linear}.vis-item .vis-delete{right:-24px}.vis-item .vis-delete-rtl{left:-24px}.vis-item .vis-delete-rtl:after,.vis-item .vis-delete:after{content:"\\00D7";color:red;font-family:arial,sans-serif;font-size:14px;font-weight:700;-webkit-transition:color .2s linear;-moz-transition:color .2s linear;-ms-transition:color .2s linear;-o-transition:color .2s linear;transition:color .2s linear}.vis-item .vis-delete-rtl:hover,.vis-item .vis-delete:hover{background:red}.vis-item .vis-delete-rtl:hover:after,.vis-item .vis-delete:hover:after{color:#fff}.vis-item .vis-drag-center{position:absolute;width:100%;height:100%;top:0;left:0;cursor:move}.vis-item.vis-range .vis-drag-left{left:-4px;cursor:w-resize}.vis-item.vis-range .vis-drag-left,.vis-item.vis-range .vis-drag-right{position:absolute;width:24px;max-width:20%;min-width:2px;height:100%;top:0}.vis-item.vis-range .vis-drag-right{right:-4px;cursor:e-resize}.vis-range.vis-item.vis-readonly .vis-drag-left,.vis-range.vis-item.vis-readonly .vis-drag-right{cursor:auto}.vis-item.vis-cluster{vertical-align:center;text-align:center;border-style:solid;border-radius:2px}.vis-item.vis-cluster-line{padding:0;position:absolute;width:0;border-left-width:1px;border-left-style:solid}.vis-item.vis-cluster-dot{position:absolute;padding:0;border-width:4px;border-style:solid;border-radius:4px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFVBQ0UsaUJBQWtCLENBQ2xCLGFBQWMsQ0FDZCxvQkFBcUIsQ0FDckIsZ0JBQWlCLENBQ2pCLHdCQUF5QixDQUN6QixvQkFBcUIsQ0FDckIsU0FFRixDQUVBLHVCQUNFLG9CQUFxQixDQUNyQix3QkFBeUIsQ0FHekIsU0FDRixDQUVBLDJCQUNFLFdBQ0YsQ0FFQSxpQ0FDRSx3QkFDRixDQUVBLGtCQUNFLGlCQUFrQixDQUNsQixrQkFBbUIsQ0FDbkIsaUJBQ0YsQ0FFQSxvQkFDRSxlQUNGLENBRUEsa0JBQ0UsaUJBQWtCLENBQ2xCLFNBQVUsQ0FDVixnQkFBaUIsQ0FDakIsa0JBQW1CLENBQ25CLGlCQUNGLENBRUEsb0JBQ0Usa0JBQW1CLENBQ25CLGlCQUFrQixDQUNsQixxQkFDRixDQUVBLHlCQUNFLFdBQVksQ0FDWixxQ0FBMEMsQ0FDMUMscUJBQXNCLENBQ3RCLFNBQVUsQ0FDVixRQUNGLENBRUEsNkJBQ0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxXQUFZLENBQ1osU0FBVSxDQUNWLFFBQVMsQ0FDVCxlQUNGLENBRUEsd0JBQ0Usa0JBQ0YsQ0FFQSxzQ0FDRSxpQkFBa0IsQ0FDbEIsb0JBQ0YsQ0FFQSwyQ0FDRSxpQkFBa0IsQ0FDbEIsb0JBQ0YsQ0FFQSxtQkFDRSxTQUFVLENBQ1YsaUJBQWtCLENBQ2xCLE9BQVEsQ0FDUixxQkFBc0IsQ0FDdEIsdUJBQ0YsQ0FFQSw0QkFDRSxrQkFBbUIsQ0FDbkIscUJBQXNCLENBQ3RCLFdBQ0YsQ0FFQSxvQ0FDRSxpQkFBa0IsQ0FDbEIsa0JBQW1CLENBQ25CLFVBQVksQ0FDWixXQUFZLENBQ1osaUJBQWtCLENBQ2xCLGtCQUFtQixDQUNuQixXQUFZLENBQ1osaUJBQWtCLENBQ2xCLGNBQWdCLENBQ2hCLGlCQUFtQixDQUNuQixtQkFBcUIsQ0FDckIsc0JBQ0YsQ0FFQSxnREFDRSxpQkFBa0IsQ0FDbEIsS0FBUSxDQUNSLFVBQVcsQ0FDWCxXQUFZLENBQ1oscUJBQXNCLENBQ3RCLGFBQWdCLENBQ2hCLGNBQWUsQ0FFZix3Q0FBMEMsQ0FDMUMscUNBQXVDLENBQ3ZDLG9DQUFzQyxDQUN0QyxtQ0FBcUMsQ0FDckMsZ0NBQ0YsQ0FFQSxzQkFDRSxXQUNGLENBRUEsMEJBQ0UsVUFDRixDQUVBLDREQUNFLGVBQWdCLENBQ2hCLFNBQVUsQ0FDViw0QkFBOEIsQ0FDOUIsY0FBZSxDQUNmLGVBQWlCLENBRWpCLG1DQUFxQyxDQUNyQyxnQ0FBa0MsQ0FDbEMsK0JBQWlDLENBQ2pDLDhCQUFnQyxDQUNoQywyQkFDRixDQUVBLDREQUNFLGNBQ0YsQ0FFQSx3RUFDRSxVQUNGLENBRUEsMkJBQ0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxXQUFZLENBQ1osS0FBTSxDQUNOLE1BQVMsQ0FDVCxXQUNGLENBRUEsbUNBT0UsU0FBVSxDQUVWLGVBQ0YsQ0FFQSx1RUFYRSxpQkFBa0IsQ0FDbEIsVUFBVyxDQUNYLGFBQWMsQ0FDZCxhQUFjLENBQ2QsV0FBWSxDQUNaLEtBZ0JGLENBVkEsb0NBT0UsVUFBVyxDQUVYLGVBQ0YsQ0FFQSxpR0FFRSxXQUNGLENBRUEsc0JBQ0UscUJBQXNCLENBQ3RCLGlCQUFrQixDQUNsQixrQkFBbUIsQ0FDbkIsaUJBQ0YsQ0FFQSwyQkFDRSxTQUFVLENBQ1YsaUJBQWtCLENBQ2xCLE9BQVEsQ0FDUixxQkFBc0IsQ0FDdEIsdUJBQ0YsQ0FFQSwwQkFDRSxpQkFBa0IsQ0FDbEIsU0FBVSxDQUNWLGdCQUFpQixDQUNqQixrQkFBbUIsQ0FDbkIsaUJBQ0YiLCJmaWxlIjoiaXRlbS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52aXMtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICMxQTFBMUE7XG4gIGJvcmRlci1jb2xvcjogIzk3QjBGODtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENURERjY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogMTtcbiAgLypvdmVyZmxvdzogaGlkZGVuOyovXG59XG5cbi52aXMtaXRlbS52aXMtc2VsZWN0ZWQge1xuICBib3JkZXItY29sb3I6ICNGRkMyMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY3ODU7XG5cbiAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIHRoZSB6LWluZGV4IG9mIGN1c3RvbSB0aW1lIGJhciBhbmQgY3VycmVudCB0aW1lIGJhciAqL1xuICB6LWluZGV4OiAyO1xufVxuXG4udmlzLWVkaXRhYmxlLnZpcy1zZWxlY3RlZCB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLnZpcy1pdGVtLnZpcy1wb2ludC52aXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGNzg1O1xufVxuXG4udmlzLWl0ZW0udmlzLWJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udmlzLWl0ZW0udmlzLXBvaW50IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnZpcy1pdGVtLnZpcy1kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci13aWR0aDogNHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi52aXMtaXRlbS52aXMtcmFuZ2Uge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi52aXMtaXRlbS52aXMtYmFja2dyb3VuZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTMsIDIyMSwgMjQ2LCAwLjQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi52aXMtaXRlbSAudmlzLWl0ZW0tb3ZlcmZsb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZpcy1pdGVtLXZpc2libGUtZnJhbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udmlzLWl0ZW0udmlzLXJhbmdlIC52aXMtaXRlbS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi52aXMtaXRlbS52aXMtYmFja2dyb3VuZCAudmlzLWl0ZW0tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udmlzLWl0ZW0udmlzLWxpbmUge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG59XG5cbi52aXMtaXRlbSAudmlzLWl0ZW0tY29udGVudCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnZpcy1pdGVtIC52aXMtb25VcGRhdGVUaW1lLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICM0ZjgxYmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnZpcy1pdGVtIC52aXMtZGVsZXRlLCAudmlzLWl0ZW0gLnZpcy1kZWxldGUtcnRsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGxpbmVhcjtcbn1cblxuLnZpcy1pdGVtIC52aXMtZGVsZXRlIHtcbiAgcmlnaHQ6IC0yNHB4O1xufVxuXG4udmlzLWl0ZW0gLnZpcy1kZWxldGUtcnRsIHtcbiAgbGVmdDogLTI0cHg7XG59XG5cbi52aXMtaXRlbSAudmlzLWRlbGV0ZTphZnRlciwgLnZpcy1pdGVtIC52aXMtZGVsZXRlLXJ0bDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFwwMEQ3XCI7IC8qIE1VTFRJUExJQ0FUSU9OIFNJR04gKi9cbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xufVxuXG4udmlzLWl0ZW0gLnZpcy1kZWxldGU6aG92ZXIsIC52aXMtaXRlbSAudmlzLWRlbGV0ZS1ydGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi52aXMtaXRlbSAudmlzLWRlbGV0ZTpob3ZlcjphZnRlciwgLnZpcy1pdGVtIC52aXMtZGVsZXRlLXJ0bDpob3ZlcjphZnRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnZpcy1pdGVtIC52aXMtZHJhZy1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMHB4O1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi52aXMtaXRlbS52aXMtcmFuZ2UgLnZpcy1kcmFnLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXgtd2lkdGg6IDIwJTtcbiAgbWluLXdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNHB4O1xuXG4gIGN1cnNvcjogdy1yZXNpemU7XG59XG5cbi52aXMtaXRlbS52aXMtcmFuZ2UgLnZpcy1kcmFnLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjRweDtcbiAgbWF4LXdpZHRoOiAyMCU7XG4gIG1pbi13aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC00cHg7XG5cbiAgY3Vyc29yOiBlLXJlc2l6ZTtcbn1cblxuLnZpcy1yYW5nZS52aXMtaXRlbS52aXMtcmVhZG9ubHkgLnZpcy1kcmFnLWxlZnQsXG4udmlzLXJhbmdlLnZpcy1pdGVtLnZpcy1yZWFkb25seSAudmlzLWRyYWctcmlnaHQge1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi52aXMtaXRlbS52aXMtY2x1c3RlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udmlzLWl0ZW0udmlzLWNsdXN0ZXItbGluZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbn1cblxuLnZpcy1pdGVtLnZpcy1jbHVzdGVyLWRvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */');
  var vd = function() {
    function t(e, i, n) {
      var o, r = this;
      Za(this, t), this.id = null, this.parent = null, this.data = e, this.dom = null, this.conversion = i || {}, this.defaultOptions = {
        locales: Fh,
        locale: "en"
      }, this.options = cl.extend({}, this.defaultOptions, n), this.options.locales = cl.extend({}, Fh, this.options.locales);
      var s = this.defaultOptions.locales[this.defaultOptions.locale];
      Yn(o = vn(this.options.locales)).call(o, (function(t) {
        r.options.locales[t] = cl.extend({}, s, r.options.locales[t])
      })), this.selected = !1, this.displayed = !1, this.groupShowing = !0, this.selectable = n && n.selectable || !1, this.dirty = !0, this.top = null, this.right = null, this.left = null, this.width = null, this.height = null, this.setSelectability(e), this.editable = null, this._updateEditStatus()
    }
    return Oa(t, [{
      key: "select",
      value: function() {
        this.selectable && (this.selected = !0, this.dirty = !0, this.displayed && this.redraw())
      }
    }, {
      key: "unselect",
      value: function() {
        this.selected = !1, this.dirty = !0, this.displayed && this.redraw()
      }
    }, {
      key: "setData",
      value: function(t) {
        null != t.group && this.data.group != t.group && null != this.parent && this.parent.itemSet._moveToGroup(this, t.group), this.setSelectability(t), this.parent && (this.parent.stackDirty = !0), null != t.subgroup && this.data.subgroup != t.subgroup && null != this.parent && this.parent.changeSubgroup(this, this.data.subgroup, t.subgroup), this.data = t, this._updateEditStatus(), this.dirty = !0, this.displayed && this.redraw()
      }
    }, {
      key: "setSelectability",
      value: function(t) {
        t && (this.selectable = void 0 === t.selectable || Boolean(t.selectable))
      }
    }, {
      key: "setParent",
      value: function(t) {
        this.displayed ? (this.hide(), this.parent = t, this.parent && this.show()) : this.parent = t
      }
    }, {
      key: "isVisible",
      value: function(t) {
        return !1
      }
    }, {
      key: "show",
      value: function() {
        return !1
      }
    }, {
      key: "hide",
      value: function() {
        return !1
      }
    }, {
      key: "redraw",
      value: function() {}
    }, {
      key: "repositionX",
      value: function() {}
    }, {
      key: "repositionY",
      value: function() {}
    }, {
      key: "_repaintDragCenter",
      value: function() {
        if (this.selected && this.editable.updateTime && !this.dom.dragCenter) {
          var t, e, i = this,
            n = document.createElement("div");
          n.className = "vis-drag-center", n.dragCenterItem = this, this.hammerDragCenter = new mh(n), this.hammerDragCenter.on("tap", (function(t) {
            i.parent.itemSet.body.emitter.emit("click", {
              event: t,
              item: i.id
            })
          })), this.hammerDragCenter.on("doubletap", (function(t) {
            t.stopPropagation(), i.parent.itemSet._onUpdateItem(i), i.parent.itemSet.body.emitter.emit("doubleClick", {
              event: t,
              item: i.id
            })
          })), this.hammerDragCenter.on("panstart", (function(t) {
            t.stopPropagation(), i.parent.itemSet._onDragStart(t)
          })), this.hammerDragCenter.on("panmove", Fa(t = i.parent.itemSet._onDrag).call(t, i.parent.itemSet)), this.hammerDragCenter.on("panend", Fa(e = i.parent.itemSet._onDragEnd).call(e, i.parent.itemSet)), this.dom.box ? this.dom.dragLeft ? this.dom.box.insertBefore(n, this.dom.dragLeft) : this.dom.box.appendChild(n) : this.dom.point && this.dom.point.appendChild(n), this.dom.dragCenter = n
        } else !this.selected && this.dom.dragCenter && (this.dom.dragCenter.parentNode && this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter), this.dom.dragCenter = null, this.hammerDragCenter && (this.hammerDragCenter.destroy(), this.hammerDragCenter = null))
      }
    }, {
      key: "_repaintDeleteButton",
      value: function(t) {
        var e = (this.options.editable.overrideItems || null == this.editable) && this.options.editable.remove || !this.options.editable.overrideItems && null != this.editable && this.editable.remove;
        if (this.selected && e && !this.dom.deleteButton) {
          var i = this,
            n = document.createElement("div");
          this.options.rtl ? n.className = "vis-delete-rtl" : n.className = "vis-delete";
          var o = this.options.locales[this.options.locale];
          o || (this.warned || (console.warn("WARNING: options.locales['".concat(this.options.locale, "'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization")), this.warned = !0), o = this.options.locales.en), n.title = o.deleteSelected, this.hammerDeleteButton = new mh(n).on("tap", (function(t) {
            t.stopPropagation(), i.parent.removeFromDataSet(i)
          })), t.appendChild(n), this.dom.deleteButton = n
        } else !this.selected && this.dom.deleteButton && (this.dom.deleteButton.parentNode && this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton), this.dom.deleteButton = null, this.hammerDeleteButton && (this.hammerDeleteButton.destroy(), this.hammerDeleteButton = null))
      }
    }, {
      key: "_repaintOnItemUpdateTimeTooltip",
      value: function(t) {
        if (this.options.tooltipOnItemUpdateTime) {
          var e = (this.options.editable.updateTime || !0 === this.data.editable) && !1 !== this.data.editable;
          if (this.selected && e && !this.dom.onItemUpdateTimeTooltip) {
            var i = document.createElement("div");
            i.className = "vis-onUpdateTime-tooltip", t.appendChild(i), this.dom.onItemUpdateTimeTooltip = i
          } else !this.selected && this.dom.onItemUpdateTimeTooltip && (this.dom.onItemUpdateTimeTooltip.parentNode && this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip), this.dom.onItemUpdateTimeTooltip = null);
          if (this.dom.onItemUpdateTimeTooltip) {
            this.dom.onItemUpdateTimeTooltip.style.visibility = this.parent.itemSet.touchParams.itemIsDragging ? "visible" : "hidden", this.dom.onItemUpdateTimeTooltip.style.transform = "translateX(-50%)", this.dom.onItemUpdateTimeTooltip.style.left = "50%";
            var n, o, r = this.parent.itemSet.body.domProps.scrollTop;
            if (("top" == this.options.orientation.item ? this.top : this.parent.height - this.top - this.height) + this.parent.top - 50 < -r ? (this.dom.onItemUpdateTimeTooltip.style.bottom = "", this.dom.onItemUpdateTimeTooltip.style.top = "".concat(this.height + 2, "px")) : (this.dom.onItemUpdateTimeTooltip.style.top = "", this.dom.onItemUpdateTimeTooltip.style.bottom = "".concat(this.height + 2, "px")), this.options.tooltipOnItemUpdateTime && this.options.tooltipOnItemUpdateTime.template) n = Fa(o = this.options.tooltipOnItemUpdateTime.template).call(o, this)(this.data);
            else n = "start: ".concat(sl(this.data.start).format("MM/DD/YYYY hh:mm")), this.data.end && (n += "<br> end: ".concat(sl(this.data.end).format("MM/DD/YYYY hh:mm")));
            this.dom.onItemUpdateTimeTooltip.innerHTML = n
          }
        }
      }
    }, {
      key: "_getItemData",
      value: function() {
        return this.parent.itemSet.itemsData.get(this.id)
      }
    }, {
      key: "_updateContents",
      value: function(t) {
        var e, i, n, o, r, s, a = this._getItemData(),
          l = (this.dom.box || this.dom.point).getElementsByClassName("vis-item-visible-frame")[0];
        this.options.visibleFrameTemplate ? n = (o = Fa(r = this.options.visibleFrameTemplate).call(r, this))(a, l) : n = "";
        if (l)
          if (n instanceof Object && !(n instanceof Element)) o(a, l);
          else if (this._contentToString(this.itemVisibleFrameContent) !== this._contentToString(n)) {
          if (n instanceof Element) l.innerHTML = "", l.appendChild(n);
          else if (null != n) l.innerHTML = n;
          else if ("background" != this.data.type || void 0 !== this.data.content) throw new Error('Property "content" missing in item '.concat(this.id));
          this.itemVisibleFrameContent = n
        }
        this.options.template ? e = (i = Fa(s = this.options.template).call(s, this))(a, t, this.data) : e = this.data.content;
        if (e instanceof Object && !(e instanceof Element)) i(a, t);
        else if (this._contentToString(this.content) !== this._contentToString(e)) {
          if (e instanceof Element) t.innerHTML = "", t.appendChild(e);
          else if (null != e) t.innerHTML = e;
          else if ("background" != this.data.type || void 0 !== this.data.content) throw new Error('Property "content" missing in item '.concat(this.id));
          this.content = e
        }
      }
    }, {
      key: "_updateDataAttributes",
      value: function(t) {
        if (this.options.dataAttributes && this.options.dataAttributes.length > 0) {
          var e = [];
          if (Vo(this.options.dataAttributes)) e = this.options.dataAttributes;
          else {
            if ("all" != this.options.dataAttributes) return;
            e = vn(this.data)
          }
          var i, n = fd(e);
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = i.value,
                r = this.data[o];
              null != r ? t.setAttribute("data-".concat(o), r) : t.removeAttribute("data-".concat(o))
            }
          } catch (t) {
            n.e(t)
          } finally {
            n.f()
          }
        }
      }
    }, {
      key: "_updateStyle",
      value: function(t) {
        this.style && (cl.removeCssText(t, this.style), this.style = null), this.data.style && (cl.addCssText(t, this.data.style), this.style = this.data.style)
      }
    }, {
      key: "_contentToString",
      value: function(t) {
        return "string" == typeof t ? t : t && "outerHTML" in t ? t.outerHTML : t
      }
    }, {
      key: "_updateEditStatus",
      value: function() {
        this.options && ("boolean" == typeof this.options.editable ? this.editable = {
          updateTime: this.options.editable,
          updateGroup: this.options.editable,
          remove: this.options.editable
        } : "object" === $o(this.options.editable) && (this.editable = {}, cl.selectiveExtend(["updateTime", "updateGroup", "remove"], this.editable, this.options.editable))), this.options && this.options.editable && !0 === this.options.editable.overrideItems || this.data && ("boolean" == typeof this.data.editable ? this.editable = {
          updateTime: this.data.editable,
          updateGroup: this.data.editable,
          remove: this.data.editable
        } : "object" === $o(this.data.editable) && (this.editable = {}, cl.selectiveExtend(["updateTime", "updateGroup", "remove"], this.editable, this.data.editable)))
      }
    }, {
      key: "getWidthLeft",
      value: function() {
        return 0
      }
    }, {
      key: "getWidthRight",
      value: function() {
        return 0
      }
    }, {
      key: "getTitle",
      value: function() {
        var t;
        return this.options.tooltip && this.options.tooltip.template ? Fa(t = this.options.tooltip.template).call(t, this)(this._getItemData(), this.data) : this.data.title
      }
    }]), t
  }();

  function bd(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  vd.prototype.stack = !0;
  var yd = function(t) {
    Ms(i, t);
    var e = bd(i);

    function i(t, n, o) {
      var r;
      if (Za(this, i), (r = e.call(this, t, n, o)).props = {
          dot: {
            width: 0,
            height: 0
          },
          line: {
            width: 0,
            height: 0
          }
        }, t && null == t.start) throw new Error('Property "start" missing in item '.concat(t));
      return r
    }
    return Oa(i, [{
      key: "isVisible",
      value: function(t) {
        if (this.cluster) return !1;
        var e, i = this.data.align || this.options.align,
          n = this.width * t.getMillisecondsPerPixel();
        return e = "right" == i ? this.data.start.getTime() > t.start && this.data.start.getTime() - n < t.end : "left" == i ? this.data.start.getTime() + n > t.start && this.data.start.getTime() < t.end : this.data.start.getTime() + n / 2 > t.start && this.data.start.getTime() - n / 2 < t.end, e
      }
    }, {
      key: "_createDomElement",
      value: function() {
        this.dom || (this.dom = {}, this.dom.box = document.createElement("DIV"), this.dom.content = document.createElement("DIV"), this.dom.content.className = "vis-item-content", this.dom.box.appendChild(this.dom.content), this.dom.line = document.createElement("DIV"), this.dom.line.className = "vis-line", this.dom.dot = document.createElement("DIV"), this.dom.dot.className = "vis-dot", this.dom.box["vis-item"] = this, this.dirty = !0)
      }
    }, {
      key: "_appendDomElement",
      value: function() {
        if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
        if (!this.dom.box.parentNode) {
          var t = this.parent.dom.foreground;
          if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
          t.appendChild(this.dom.box)
        }
        if (!this.dom.line.parentNode) {
          var e = this.parent.dom.background;
          if (!e) throw new Error("Cannot redraw item: parent has no background container element");
          e.appendChild(this.dom.line)
        }
        if (!this.dom.dot.parentNode) {
          var i = this.parent.dom.axis;
          if (!e) throw new Error("Cannot redraw item: parent has no axis container element");
          i.appendChild(this.dom.dot)
        }
        this.displayed = !0
      }
    }, {
      key: "_updateDirtyDomComponents",
      value: function() {
        if (this.dirty) {
          this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
          var t = this.editable.updateTime || this.editable.updateGroup,
            e = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (t ? " vis-editable" : " vis-readonly");
          this.dom.box.className = "vis-item vis-box".concat(e), this.dom.line.className = "vis-item vis-line".concat(e), this.dom.dot.className = "vis-item vis-dot".concat(e)
        }
      }
    }, {
      key: "_getDomComponentsSizes",
      value: function() {
        return {
          previous: {
            right: this.dom.box.style.right,
            left: this.dom.box.style.left
          },
          dot: {
            height: this.dom.dot.offsetHeight,
            width: this.dom.dot.offsetWidth
          },
          line: {
            width: this.dom.line.offsetWidth
          },
          box: {
            width: this.dom.box.offsetWidth,
            height: this.dom.box.offsetHeight
          }
        }
      }
    }, {
      key: "_updateDomComponentsSizes",
      value: function(t) {
        this.options.rtl ? this.dom.box.style.right = "0px" : this.dom.box.style.left = "0px", this.props.dot.height = t.dot.height, this.props.dot.width = t.dot.width, this.props.line.width = t.line.width, this.width = t.box.width, this.height = t.box.height, this.options.rtl ? this.dom.box.style.right = t.previous.right : this.dom.box.style.left = t.previous.left, this.dirty = !1
      }
    }, {
      key: "_repaintDomAdditionals",
      value: function() {
        this._repaintOnItemUpdateTimeTooltip(this.dom.box), this._repaintDragCenter(), this._repaintDeleteButton(this.dom.box)
      }
    }, {
      key: "redraw",
      value: function(t) {
        var e, i, n, o, r, s, a = this,
          l = [Fa(e = this._createDomElement).call(e, this), Fa(i = this._appendDomElement).call(i, this), Fa(n = this._updateDirtyDomComponents).call(n, this), function() {
            a.dirty && (r = a._getDomComponentsSizes())
          }, function() {
            var t;
            a.dirty && Fa(t = a._updateDomComponentsSizes).call(t, a)(r)
          }, Fa(o = this._repaintDomAdditionals).call(o, this)];
        return t ? l : (Yn(l).call(l, (function(t) {
          s = t()
        })), s)
      }
    }, {
      key: "show",
      value: function(t) {
        if (!this.displayed) return this.redraw(t)
      }
    }, {
      key: "hide",
      value: function() {
        if (this.displayed) {
          var t = this.dom;
          t.box.remove ? t.box.remove() : t.box.parentNode && t.box.parentNode.removeChild(t.box), t.line.remove ? t.line.remove() : t.line.parentNode && t.line.parentNode.removeChild(t.line), t.dot.remove ? t.dot.remove() : t.dot.parentNode && t.dot.parentNode.removeChild(t.dot), this.displayed = !1
        }
      }
    }, {
      key: "repositionXY",
      value: function() {
        var t = this.options.rtl,
          e = function(t, e, i) {
            var n, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (void 0 !== e || void 0 !== i) {
              var r = o ? -1 * e : e;
              t.style.transform = void 0 !== i ? void 0 !== e ? co(n = "translate(".concat(r, "px, ")).call(n, i, "px)") : "translateY(".concat(i, "px)") : "translateX(".concat(r, "px)")
            }
          };
        e(this.dom.box, this.boxX, this.boxY, t), e(this.dom.dot, this.dotX, this.dotY, t), e(this.dom.line, this.lineX, this.lineY, t)
      }
    }, {
      key: "repositionX",
      value: function() {
        var t = this.conversion.toScreen(this.data.start),
          e = void 0 === this.data.align ? this.options.align : this.data.align,
          i = this.props.line.width,
          n = this.props.dot.width;
        "right" == e ? (this.boxX = t - this.width, this.lineX = t - i, this.dotX = t - i / 2 - n / 2) : "left" == e ? (this.boxX = t, this.lineX = t, this.dotX = t + i / 2 - n / 2) : (this.boxX = t - this.width / 2, this.lineX = this.options.rtl ? t - i : t - i / 2, this.dotX = t - n / 2), this.options.rtl ? this.right = this.boxX : this.left = this.boxX, this.repositionXY()
      }
    }, {
      key: "repositionY",
      value: function() {
        var t = this.options.orientation.item,
          e = this.dom.line.style;
        if ("top" == t) {
          var i = this.parent.top + this.top + 1;
          this.boxY = this.top || 0, e.height = "".concat(i, "px"), e.bottom = "", e.top = "0"
        } else {
          var n = this.parent.itemSet.props.height - this.parent.top - this.parent.height + this.top;
          this.boxY = this.parent.height - this.top - (this.height || 0), e.height = "".concat(n, "px"), e.top = "", e.bottom = "0"
        }
        this.dotY = -this.props.dot.height / 2, this.repositionXY()
      }
    }, {
      key: "getWidthLeft",
      value: function() {
        return this.width / 2
      }
    }, {
      key: "getWidthRight",
      value: function() {
        return this.width / 2
      }
    }]), i
  }(vd);

  function xd(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  var wd = function(t) {
    Ms(i, t);
    var e = xd(i);

    function i(t, n, o) {
      var r;
      if (Za(this, i), (r = e.call(this, t, n, o)).props = {
          dot: {
            top: 0,
            width: 0,
            height: 0
          },
          content: {
            height: 0,
            marginLeft: 0,
            marginRight: 0
          }
        }, t && null == t.start) throw new Error('Property "start" missing in item '.concat(t));
      return r
    }
    return Oa(i, [{
      key: "isVisible",
      value: function(t) {
        if (this.cluster) return !1;
        var e = this.width * t.getMillisecondsPerPixel();
        return this.data.start.getTime() + e > t.start && this.data.start < t.end
      }
    }, {
      key: "_createDomElement",
      value: function() {
        this.dom || (this.dom = {}, this.dom.point = document.createElement("div"), this.dom.content = document.createElement("div"), this.dom.content.className = "vis-item-content", this.dom.point.appendChild(this.dom.content), this.dom.dot = document.createElement("div"), this.dom.point.appendChild(this.dom.dot), this.dom.point["vis-item"] = this, this.dirty = !0)
      }
    }, {
      key: "_appendDomElement",
      value: function() {
        if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
        if (!this.dom.point.parentNode) {
          var t = this.parent.dom.foreground;
          if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
          t.appendChild(this.dom.point)
        }
        this.displayed = !0
      }
    }, {
      key: "_updateDirtyDomComponents",
      value: function() {
        if (this.dirty) {
          this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.point), this._updateStyle(this.dom.point);
          var t = this.editable.updateTime || this.editable.updateGroup,
            e = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (t ? " vis-editable" : " vis-readonly");
          this.dom.point.className = "vis-item vis-point".concat(e), this.dom.dot.className = "vis-item vis-dot".concat(e)
        }
      }
    }, {
      key: "_getDomComponentsSizes",
      value: function() {
        return {
          dot: {
            width: this.dom.dot.offsetWidth,
            height: this.dom.dot.offsetHeight
          },
          content: {
            width: this.dom.content.offsetWidth,
            height: this.dom.content.offsetHeight
          },
          point: {
            width: this.dom.point.offsetWidth,
            height: this.dom.point.offsetHeight
          }
        }
      }
    }, {
      key: "_updateDomComponentsSizes",
      value: function(t) {
        this.props.dot.width = t.dot.width, this.props.dot.height = t.dot.height, this.props.content.height = t.content.height, this.options.rtl ? this.dom.content.style.marginRight = "".concat(2 * this.props.dot.width, "px") : this.dom.content.style.marginLeft = "".concat(2 * this.props.dot.width, "px"), this.width = t.point.width, this.height = t.point.height, this.dom.dot.style.top = "".concat((this.height - this.props.dot.height) / 2, "px");
        var e = this.props.dot.width,
          i = this.options.rtl ? e / 2 * -1 : e / 2;
        this.dom.dot.style.transform = "translateX(".concat(i, "px"), this.dirty = !1
      }
    }, {
      key: "_repaintDomAdditionals",
      value: function() {
        this._repaintOnItemUpdateTimeTooltip(this.dom.point), this._repaintDragCenter(), this._repaintDeleteButton(this.dom.point)
      }
    }, {
      key: "redraw",
      value: function(t) {
        var e, i, n, o, r, s, a = this,
          l = [Fa(e = this._createDomElement).call(e, this), Fa(i = this._appendDomElement).call(i, this), Fa(n = this._updateDirtyDomComponents).call(n, this), function() {
            a.dirty && (r = a._getDomComponentsSizes())
          }, function() {
            var t;
            a.dirty && Fa(t = a._updateDomComponentsSizes).call(t, a)(r)
          }, Fa(o = this._repaintDomAdditionals).call(o, this)];
        return t ? l : (Yn(l).call(l, (function(t) {
          s = t()
        })), s)
      }
    }, {
      key: "repositionXY",
      value: function() {
        var t = this.options.rtl,
          e = function(t, e, i) {
            var n, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (void 0 !== e || void 0 !== i) {
              var r = o ? -1 * e : e;
              t.style.transform = void 0 !== i ? void 0 !== e ? co(n = "translate(".concat(r, "px, ")).call(n, i, "px)") : "translateY(".concat(i, "px)") : "translateX(".concat(r, "px)")
            }
          };
        e(this.dom.point, this.pointX, this.pointY, t)
      }
    }, {
      key: "show",
      value: function(t) {
        if (!this.displayed) return this.redraw(t)
      }
    }, {
      key: "hide",
      value: function() {
        this.displayed && (this.dom.point.parentNode && this.dom.point.parentNode.removeChild(this.dom.point), this.displayed = !1)
      }
    }, {
      key: "repositionX",
      value: function() {
        var t = this.conversion.toScreen(this.data.start);
        this.pointX = t, this.options.rtl ? this.right = t - this.props.dot.width : this.left = t - this.props.dot.width, this.repositionXY()
      }
    }, {
      key: "repositionY",
      value: function() {
        var t = this.options.orientation.item;
        this.pointY = "top" == t ? this.top : this.parent.height - this.top - this.height, this.repositionXY()
      }
    }, {
      key: "getWidthLeft",
      value: function() {
        return this.props.dot.width
      }
    }, {
      key: "getWidthRight",
      value: function() {
        return this.props.dot.width
      }
    }]), i
  }(vd);

  function _d(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  var kd = function(t) {
    Ms(i, t);
    var e = _d(i);

    function i(t, n, o) {
      var r;
      if (Za(this, i), (r = e.call(this, t, n, o)).props = {
          content: {
            width: 0
          }
        }, r.overflow = !1, t) {
        if (null == t.start) throw new Error('Property "start" missing in item '.concat(t.id));
        if (null == t.end) throw new Error('Property "end" missing in item '.concat(t.id))
      }
      return r
    }
    return Oa(i, [{
      key: "isVisible",
      value: function(t) {
        return !this.cluster && (this.data.start < t.end && this.data.end > t.start)
      }
    }, {
      key: "_createDomElement",
      value: function() {
        this.dom || (this.dom = {}, this.dom.box = document.createElement("div"), this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-item-overflow", this.dom.box.appendChild(this.dom.frame), this.dom.visibleFrame = document.createElement("div"), this.dom.visibleFrame.className = "vis-item-visible-frame", this.dom.box.appendChild(this.dom.visibleFrame), this.dom.content = document.createElement("div"), this.dom.content.className = "vis-item-content", this.dom.frame.appendChild(this.dom.content), this.dom.box["vis-item"] = this, this.dirty = !0)
      }
    }, {
      key: "_appendDomElement",
      value: function() {
        if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
        if (!this.dom.box.parentNode) {
          var t = this.parent.dom.foreground;
          if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
          t.appendChild(this.dom.box)
        }
        this.displayed = !0
      }
    }, {
      key: "_updateDirtyDomComponents",
      value: function() {
        if (this.dirty) {
          this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
          var t = this.editable.updateTime || this.editable.updateGroup,
            e = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (t ? " vis-editable" : " vis-readonly");
          this.dom.box.className = this.baseClassName + e, this.dom.content.style.maxWidth = "none"
        }
      }
    }, {
      key: "_getDomComponentsSizes",
      value: function() {
        return this.overflow = "hidden" !== window.getComputedStyle(this.dom.frame).overflow, this.whiteSpace = "nowrap" !== window.getComputedStyle(this.dom.content).whiteSpace, {
          content: {
            width: this.dom.content.offsetWidth
          },
          box: {
            height: this.dom.box.offsetHeight
          }
        }
      }
    }, {
      key: "_updateDomComponentsSizes",
      value: function(t) {
        this.props.content.width = t.content.width, this.height = t.box.height, this.dom.content.style.maxWidth = "", this.dirty = !1
      }
    }, {
      key: "_repaintDomAdditionals",
      value: function() {
        this._repaintOnItemUpdateTimeTooltip(this.dom.box), this._repaintDeleteButton(this.dom.box), this._repaintDragCenter(), this._repaintDragLeft(), this._repaintDragRight()
      }
    }, {
      key: "redraw",
      value: function(t) {
        var e, i, n, o, r, s, a = this,
          l = [Fa(e = this._createDomElement).call(e, this), Fa(i = this._appendDomElement).call(i, this), Fa(n = this._updateDirtyDomComponents).call(n, this), function() {
            var t;
            a.dirty && (r = Fa(t = a._getDomComponentsSizes).call(t, a)())
          }, function() {
            var t;
            a.dirty && Fa(t = a._updateDomComponentsSizes).call(t, a)(r)
          }, Fa(o = this._repaintDomAdditionals).call(o, this)];
        return t ? l : (Yn(l).call(l, (function(t) {
          s = t()
        })), s)
      }
    }, {
      key: "show",
      value: function(t) {
        if (!this.displayed) return this.redraw(t)
      }
    }, {
      key: "hide",
      value: function() {
        if (this.displayed) {
          var t = this.dom.box;
          t.parentNode && t.parentNode.removeChild(t), this.displayed = !1
        }
      }
    }, {
      key: "repositionX",
      value: function(t) {
        var e, i, n = this.parent.width,
          o = this.conversion.toScreen(this.data.start),
          r = this.conversion.toScreen(this.data.end),
          s = void 0 === this.data.align ? this.options.align : this.data.align;
        !1 === this.data.limitSize || void 0 !== t && !0 !== t || (o < -n && (o = -n), r > 2 * n && (r = 2 * n));
        var a = Math.max(Math.round(1e3 * (r - o)) / 1e3, 1);
        switch (this.overflow ? (this.options.rtl ? this.right = o : this.left = o, this.width = a + this.props.content.width, i = this.props.content.width) : (this.options.rtl ? this.right = o : this.left = o, this.width = a, i = Math.min(r - o, this.props.content.width)), this.options.rtl ? this.dom.box.style.transform = "translateX(".concat(-1 * this.right, "px)") : this.dom.box.style.transform = "translateX(".concat(this.left, "px)"), this.dom.box.style.width = "".concat(a, "px"), this.whiteSpace && (this.height = this.dom.box.offsetHeight), s) {
          case "left":
            this.dom.content.style.transform = "translateX(0)";
            break;
          case "right":
            if (this.options.rtl) {
              var l = -1 * Math.max(a - i, 0);
              this.dom.content.style.transform = "translateX(".concat(l, "px)")
            } else this.dom.content.style.transform = "translateX(".concat(Math.max(a - i, 0), "px)");
            break;
          case "center":
            if (this.options.rtl) {
              var u = -1 * Math.max((a - i) / 2, 0);
              this.dom.content.style.transform = "translateX(".concat(u, "px)")
            } else this.dom.content.style.transform = "translateX(".concat(Math.max((a - i) / 2, 0), "px)");
            break;
          default:
            if (e = this.overflow ? r > 0 ? Math.max(-o, 0) : -i : o < 0 ? -o : 0, this.options.rtl) {
              var h = -1 * e;
              this.dom.content.style.transform = "translateX(".concat(h, "px)")
            } else this.dom.content.style.transform = "translateX(".concat(e, "px)")
        }
      }
    }, {
      key: "repositionY",
      value: function() {
        var t = this.options.orientation.item,
          e = this.dom.box;
        e.style.top = "".concat("top" == t ? this.top : this.parent.height - this.top - this.height, "px")
      }
    }, {
      key: "_repaintDragLeft",
      value: function() {
        if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.editable.updateTime && !this.dom.dragLeft) {
          var t = document.createElement("div");
          t.className = "vis-drag-left", t.dragLeftItem = this, this.dom.box.appendChild(t), this.dom.dragLeft = t
        } else this.selected || this.options.itemsAlwaysDraggable.range || !this.dom.dragLeft || (this.dom.dragLeft.parentNode && this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft), this.dom.dragLeft = null)
      }
    }, {
      key: "_repaintDragRight",
      value: function() {
        if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.editable.updateTime && !this.dom.dragRight) {
          var t = document.createElement("div");
          t.className = "vis-drag-right", t.dragRightItem = this, this.dom.box.appendChild(t), this.dom.dragRight = t
        } else this.selected || this.options.itemsAlwaysDraggable.range || !this.dom.dragRight || (this.dom.dragRight.parentNode && this.dom.dragRight.parentNode.removeChild(this.dom.dragRight), this.dom.dragRight = null)
      }
    }]), i
  }(vd);

  function Dd(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  kd.prototype.baseClassName = "vis-item vis-range";
  var Id = function(t) {
    Ms(i, t);
    var e = Dd(i);

    function i(t, n, o) {
      var r;
      if (Za(this, i), (r = e.call(this, t, n, o)).props = {
          content: {
            width: 0
          }
        }, r.overflow = !1, t) {
        if (null == t.start) throw new Error('Property "start" missing in item '.concat(t.id));
        if (null == t.end) throw new Error('Property "end" missing in item '.concat(t.id))
      }
      return r
    }
    return Oa(i, [{
      key: "isVisible",
      value: function(t) {
        return this.data.start < t.end && this.data.end > t.start
      }
    }, {
      key: "_createDomElement",
      value: function() {
        this.dom || (this.dom = {}, this.dom.box = document.createElement("div"), this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-item-overflow", this.dom.box.appendChild(this.dom.frame), this.dom.content = document.createElement("div"), this.dom.content.className = "vis-item-content", this.dom.frame.appendChild(this.dom.content), this.dirty = !0)
      }
    }, {
      key: "_appendDomElement",
      value: function() {
        if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
        if (!this.dom.box.parentNode) {
          var t = this.parent.dom.background;
          if (!t) throw new Error("Cannot redraw item: parent has no background container element");
          t.appendChild(this.dom.box)
        }
        this.displayed = !0
      }
    }, {
      key: "_updateDirtyDomComponents",
      value: function() {
        if (this.dirty) {
          this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.content), this._updateStyle(this.dom.box);
          var t = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "");
          this.dom.box.className = this.baseClassName + t
        }
      }
    }, {
      key: "_getDomComponentsSizes",
      value: function() {
        return this.overflow = "hidden" !== window.getComputedStyle(this.dom.content).overflow, {
          content: {
            width: this.dom.content.offsetWidth
          }
        }
      }
    }, {
      key: "_updateDomComponentsSizes",
      value: function(t) {
        this.props.content.width = t.content.width, this.height = 0, this.dirty = !1
      }
    }, {
      key: "_repaintDomAdditionals",
      value: function() {}
    }, {
      key: "redraw",
      value: function(t) {
        var e, i, n, o, r, s, a = this,
          l = [Fa(e = this._createDomElement).call(e, this), Fa(i = this._appendDomElement).call(i, this), Fa(n = this._updateDirtyDomComponents).call(n, this), function() {
            var t;
            a.dirty && (r = Fa(t = a._getDomComponentsSizes).call(t, a)())
          }, function() {
            var t;
            a.dirty && Fa(t = a._updateDomComponentsSizes).call(t, a)(r)
          }, Fa(o = this._repaintDomAdditionals).call(o, this)];
        return t ? l : (Yn(l).call(l, (function(t) {
          s = t()
        })), s)
      }
    }, {
      key: "repositionY",
      value: function(t) {
        var e, i = this.options.orientation.item;
        if (void 0 !== this.data.subgroup) {
          var n = this.data.subgroup;
          this.dom.box.style.height = "".concat(this.parent.subgroups[n].height, "px"), this.dom.box.style.top = "".concat("top" == i ? this.parent.top + this.parent.subgroups[n].top : this.parent.top + this.parent.height - this.parent.subgroups[n].top - this.parent.subgroups[n].height, "px"), this.dom.box.style.bottom = ""
        } else this.parent instanceof md ? (e = Math.max(this.parent.height, this.parent.itemSet.body.domProps.center.height, this.parent.itemSet.body.domProps.centerContainer.height), this.dom.box.style.bottom = "bottom" == i ? "0" : "", this.dom.box.style.top = "top" == i ? "0" : "") : (e = this.parent.height, this.dom.box.style.top = "".concat(this.parent.top, "px"), this.dom.box.style.bottom = "");
        this.dom.box.style.height = "".concat(e, "px")
      }
    }]), i
  }(vd);
  Id.prototype.baseClassName = "vis-item vis-background", Id.prototype.stack = !1, Id.prototype.show = kd.prototype.show, Id.prototype.hide = kd.prototype.hide, Id.prototype.repositionX = kd.prototype.repositionX;
  vh("div.vis-tooltip{position:absolute;visibility:hidden;padding:5px;white-space:nowrap;font-family:verdana;font-size:14px;color:#000;background-color:#f5f4ed;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:1px solid #808074;box-shadow:3px 3px 10px rgba(0,0,0,.2);pointer-events:none;z-index:5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUNFLGlCQUFrQixDQUNsQixpQkFBa0IsQ0FDbEIsV0FBWSxDQUNaLGtCQUFtQixDQUVuQixtQkFBb0IsQ0FDcEIsY0FBYyxDQUNkLFVBQWEsQ0FDYix3QkFBeUIsQ0FFekIsc0JBQXVCLENBQ3ZCLHlCQUEwQixDQUMxQixpQkFBa0IsQ0FDbEIsd0JBQXlCLENBRXpCLHNDQUEyQyxDQUMzQyxtQkFBb0IsQ0FFcEIsU0FDRiIsImZpbGUiOiJ0b29sdGlwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi52aXMtdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XG4gIGZvbnQtc2l6ZToxNHB4O1xuICBjb2xvcjojMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNGVkO1xuXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDc0O1xuXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gIHotaW5kZXg6IDU7XG59XG4iXX0= */");
  var Cd = function() {
      function t(e, i) {
        Za(this, t), this.container = e, this.overflowMethod = i || "cap", this.x = 0, this.y = 0, this.padding = 5, this.hidden = !1, this.frame = document.createElement("div"), this.frame.className = "vis-tooltip", this.container.appendChild(this.frame)
      }
      return Oa(t, [{
        key: "setPosition",
        value: function(t, e) {
          this.x = qn(t), this.y = qn(e)
        }
      }, {
        key: "setText",
        value: function(t) {
          t instanceof Element ? (this.frame.innerHTML = "", this.frame.appendChild(t)) : this.frame.innerHTML = t
        }
      }, {
        key: "show",
        value: function(t) {
          if (void 0 === t && (t = !0), !0 === t) {
            var e = this.frame.clientHeight,
              i = this.frame.clientWidth,
              n = this.frame.parentNode.clientHeight,
              o = this.frame.parentNode.clientWidth,
              r = 0,
              s = 0;
            if ("flip" == this.overflowMethod || "none" == this.overflowMethod) {
              var a = !1,
                l = !0;
              "flip" == this.overflowMethod && (this.y - e < this.padding && (l = !1), this.x + i > o - this.padding && (a = !0)), r = a ? this.x - i : this.x, s = l ? this.y - e : this.y
            } else(s = this.y - e) + e + this.padding > n && (s = n - e - this.padding), s < this.padding && (s = this.padding), (r = this.x) + i + this.padding > o && (r = o - i - this.padding), r < this.padding && (r = this.padding);
            this.frame.style.left = r + "px", this.frame.style.top = s + "px", this.frame.style.visibility = "visible", this.hidden = !1
          } else this.hide()
        }
      }, {
        key: "hide",
        value: function() {
          this.hidden = !0, this.frame.style.left = "0", this.frame.style.top = "0", this.frame.style.visibility = "hidden"
        }
      }, {
        key: "destroy",
        value: function() {
          this.frame.parentNode.removeChild(this.frame)
        }
      }]), t
    }(),
    Ld = hi.every,
    Gd = Sn("every"),
    Sd = Fn("every");
  bt({
    target: "Array",
    proto: !0,
    forced: !Gd || !Sd
  }, {
    every: function(t) {
      return Ld(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Md = In("Array").every,
    Qd = Array.prototype,
    Nd = function(t) {
      var e = t.every;
      return t === Qd || t instanceof Array && e === Qd.every ? Md : e
    };

  function Fd(t) {
    if (void 0 === Ei || null == Be(t)) {
      if (Vo(t) || (t = function(t, e) {
          var i;
          if (!t) return;
          if ("string" == typeof t) return Zd(t, e);
          var n = Zo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return $i(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zd(t, e)
        }(t))) {
        var e = 0,
          i = function() {};
        return {
          s: i,
          n: function() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            }
          },
          e: function(t) {
            throw t
          },
          f: i
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o, r = !0,
      s = !1;
    return {
      s: function() {
        n = Ze(t)
      },
      n: function() {
        var t = n.next();
        return r = t.done, t
      },
      e: function(t) {
        s = !0, o = t
      },
      f: function() {
        try {
          r || null == n.return || n.return()
        } finally {
          if (s) throw o
        }
      }
    }
  }

  function Zd(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  }

  function Bd(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  var Od = function(t) {
    Ms(i, t);
    var e = Bd(i);

    function i(t, n, o) {
      var r;
      Za(this, i);
      var s = Jo({}, {
        fitOnDoubleClick: !0
      }, o, {
        editable: !1
      });
      if ((r = e.call(this, t, n, s)).props = {
          content: {
            width: 0,
            height: 0
          }
        }, !t || null == t.uiItems) throw new Error('Property "uiItems" missing in item ' + t.id);
      return r.id = Ea(), r.group = t.group, r._setupRange(), r.emitter = r.data.eventEmitter, r.range = r.data.range, r.attached = !1, r.isCluster = !0, r.data.isCluster = !0, r
    }
    return Oa(i, [{
      key: "hasItems",
      value: function() {
        return this.data.uiItems && this.data.uiItems.length && this.attached
      }
    }, {
      key: "setUiItems",
      value: function(t) {
        this.detach(), this.data.uiItems = t, this._setupRange(), this.attach()
      }
    }, {
      key: "isVisible",
      value: function(t) {
        var e = this.data.end ? this.data.end - this.data.start : 0,
          i = this.width * t.getMillisecondsPerPixel(),
          n = Math.max(e, this.data.start.getTime() + i);
        return this.data.start < t.end && n > t.start && this.hasItems()
      }
    }, {
      key: "getData",
      value: function() {
        return {
          isCluster: !0,
          id: this.id,
          items: this.data.items || [],
          data: this.data
        }
      }
    }, {
      key: "redraw",
      value: function(t) {
        var e, i, n, o, r, s, a, l, u = [Fa(e = this._createDomElement).call(e, this), Fa(i = this._appendDomElement).call(i, this), Fa(n = this._updateDirtyDomComponents).call(n, this), Fa(o = function() {
          this.dirty && (a = this._getDomComponentsSizes())
        }).call(o, this), Fa(r = function() {
          var t;
          this.dirty && Fa(t = this._updateDomComponentsSizes).call(t, this)(a)
        }).call(r, this), Fa(s = this._repaintDomAdditionals).call(s, this)];
        return t ? u : (Yn(u).call(u, (function(t) {
          l = t()
        })), l)
      }
    }, {
      key: "show",
      value: function() {
        this.displayed || this.redraw()
      }
    }, {
      key: "hide",
      value: function() {
        if (this.displayed) {
          var t = this.dom;
          t.box.parentNode && t.box.parentNode.removeChild(t.box), this.options.showStipes && (t.line.parentNode && t.line.parentNode.removeChild(t.line), t.dot.parentNode && t.dot.parentNode.removeChild(t.dot)), this.displayed = !1
        }
      }
    }, {
      key: "repositionX",
      value: function() {
        var t = this.conversion.toScreen(this.data.start),
          e = this.data.end ? this.conversion.toScreen(this.data.end) : 0;
        if (e) this.repositionXWithRanges(t, e);
        else {
          var i = void 0 === this.data.align ? this.options.align : this.data.align;
          this.repositionXWithoutRanges(t, i)
        }
        this.options.showStipes && (this.dom.line.style.display = this._isStipeVisible() ? "block" : "none", this.dom.dot.style.display = this._isStipeVisible() ? "block" : "none", this._isStipeVisible() && this.repositionStype(t, e))
      }
    }, {
      key: "repositionStype",
      value: function(t, e) {
        this.dom.line.style.display = "block", this.dom.dot.style.display = "block";
        var i = this.dom.line.offsetWidth,
          n = this.dom.dot.offsetWidth;
        if (e) {
          var o = i + t + (e - t) / 2,
            r = o - n / 2,
            s = this.options.rtl ? -1 * o : o,
            a = this.options.rtl ? -1 * r : r;
          this.dom.line.style.transform = "translateX(".concat(s, "px)"), this.dom.dot.style.transform = "translateX(".concat(a, "px)")
        } else {
          var l = this.options.rtl ? -1 * t : t,
            u = this.options.rtl ? -1 * (t - n / 2) : t - n / 2;
          this.dom.line.style.transform = "translateX(".concat(l, "px)"), this.dom.dot.style.transform = "translateX(".concat(u, "px)")
        }
      }
    }, {
      key: "repositionXWithoutRanges",
      value: function(t, e) {
        "right" == e ? this.options.rtl ? (this.right = t - this.width, this.dom.box.style.right = this.right + "px") : (this.left = t - this.width, this.dom.box.style.left = this.left + "px") : "left" == e ? this.options.rtl ? (this.right = t, this.dom.box.style.right = this.right + "px") : (this.left = t, this.dom.box.style.left = this.left + "px") : this.options.rtl ? (this.right = t - this.width / 2, this.dom.box.style.right = this.right + "px") : (this.left = t - this.width / 2, this.dom.box.style.left = this.left + "px")
      }
    }, {
      key: "repositionXWithRanges",
      value: function(t, e) {
        var i = Math.round(Math.max(e - t + .5, 1));
        this.options.rtl ? this.right = t : this.left = t, this.width = Math.max(i, this.minWidth || 0), this.options.rtl ? this.dom.box.style.right = this.right + "px" : this.dom.box.style.left = this.left + "px", this.dom.box.style.width = i + "px"
      }
    }, {
      key: "repositionY",
      value: function() {
        var t = this.options.orientation.item,
          e = this.dom.box;
        if (e.style.top = "top" == t ? (this.top || 0) + "px" : (this.parent.height - this.top - this.height || 0) + "px", this.options.showStipes) {
          if ("top" == t) this.dom.line.style.top = "0", this.dom.line.style.height = this.parent.top + this.top + 1 + "px", this.dom.line.style.bottom = "";
          else {
            var i = this.parent.itemSet.props.height,
              n = i - this.parent.top - this.parent.height + this.top;
            this.dom.line.style.top = i - n + "px", this.dom.line.style.bottom = "0"
          }
          this.dom.dot.style.top = -this.dom.dot.offsetHeight / 2 + "px"
        }
      }
    }, {
      key: "getWidthLeft",
      value: function() {
        return this.width / 2
      }
    }, {
      key: "getWidthRight",
      value: function() {
        return this.width / 2
      }
    }, {
      key: "move",
      value: function() {
        this.repositionX(), this.repositionY()
      }
    }, {
      key: "attach",
      value: function() {
        var t, e, i = Fd(this.data.uiItems);
        try {
          for (i.s(); !(e = i.n()).done;) {
            e.value.cluster = this
          }
        } catch (t) {
          i.e(t)
        } finally {
          i.f()
        }
        this.data.items = jn(t = this.data.uiItems).call(t, (function(t) {
          return t.data
        })), this.attached = !0, this.dirty = !0
      }
    }, {
      key: "detach",
      value: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.hasItems()) {
          var e, i = Fd(this.data.uiItems);
          try {
            for (i.s(); !(e = i.n()).done;) {
              var n = e.value;
              delete n.cluster
            }
          } catch (t) {
            i.e(t)
          } finally {
            i.f()
          }
          this.attached = !1, t && this.group && (this.group.remove(this), this.group = null), this.data.items = [], this.dirty = !0
        }
      }
    }, {
      key: "_onDoubleClick",
      value: function() {
        this._fit()
      }
    }, {
      key: "_setupRange",
      value: function() {
        var t, e, i, n = jn(t = this.data.uiItems).call(t, (function(t) {
          return {
            start: t.data.start.valueOf(),
            end: t.data.end ? t.data.end.valueOf() : t.data.start.valueOf()
          }
        }));
        this.data.min = Math.min.apply(Math, Fo(jn(n).call(n, (function(t) {
          return Math.min(t.start, t.end || t.start)
        })))), this.data.max = Math.max.apply(Math, Fo(jn(n).call(n, (function(t) {
          return Math.max(t.start, t.end || t.start)
        }))));
        var o = jn(e = this.data.uiItems).call(e, (function(t) {
            return t.center
          })),
          r = Ma(o).call(o, (function(t, e) {
            return t + e
          }), 0) / this.data.uiItems.length;
        Cs(i = this.data.uiItems).call(i, (function(t) {
          return t.data.end
        })) ? (this.data.start = new Date(this.data.min), this.data.end = new Date(this.data.max)) : (this.data.start = new Date(r), this.data.end = null)
      }
    }, {
      key: "_getUiItems",
      value: function() {
        var t, e = this;
        return this.data.uiItems && this.data.uiItems.length ? lo(t = this.data.uiItems).call(t, (function(t) {
          return t.cluster === e
        })) : []
      }
    }, {
      key: "_createDomElement",
      value: function() {
        if (!this.dom) {
          var t;
          if (this.dom = {}, this.dom.box = document.createElement("DIV"), this.dom.content = document.createElement("DIV"), this.dom.content.className = "vis-item-content", this.dom.box.appendChild(this.dom.content), this.options.showStipes && (this.dom.line = document.createElement("DIV"), this.dom.line.className = "vis-cluster-line", this.dom.line.style.display = "none", this.dom.dot = document.createElement("DIV"), this.dom.dot.className = "vis-cluster-dot", this.dom.dot.style.display = "none"), this.options.fitOnDoubleClick) this.dom.box.ondblclick = Fa(t = i.prototype._onDoubleClick).call(t, this);
          this.dom.box["vis-item"] = this, this.dirty = !0
        }
      }
    }, {
      key: "_appendDomElement",
      value: function() {
        if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
        if (!this.dom.box.parentNode) {
          var t = this.parent.dom.foreground;
          if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
          t.appendChild(this.dom.box)
        }
        var e = this.parent.dom.background;
        if (this.options.showStipes) {
          if (!this.dom.line.parentNode) {
            if (!e) throw new Error("Cannot redraw item: parent has no background container element");
            e.appendChild(this.dom.line)
          }
          if (!this.dom.dot.parentNode) {
            var i = this.parent.dom.axis;
            if (!e) throw new Error("Cannot redraw item: parent has no axis container element");
            i.appendChild(this.dom.dot)
          }
        }
        this.displayed = !0
      }
    }, {
      key: "_updateDirtyDomComponents",
      value: function() {
        if (this.dirty) {
          this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
          var t = this.baseClassName + " " + (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + " vis-readonly";
          this.dom.box.className = "vis-item " + t, this.options.showStipes && (this.dom.line.className = "vis-item vis-cluster-line " + (this.selected ? " vis-selected" : ""), this.dom.dot.className = "vis-item vis-cluster-dot " + (this.selected ? " vis-selected" : "")), this.data.end && (this.dom.content.style.maxWidth = "none")
        }
      }
    }, {
      key: "_getDomComponentsSizes",
      value: function() {
        var t = {
          previous: {
            right: this.dom.box.style.right,
            left: this.dom.box.style.left
          },
          box: {
            width: this.dom.box.offsetWidth,
            height: this.dom.box.offsetHeight
          }
        };
        return this.options.showStipes && (t.dot = {
          height: this.dom.dot.offsetHeight,
          width: this.dom.dot.offsetWidth
        }, t.line = {
          width: this.dom.line.offsetWidth
        }), t
      }
    }, {
      key: "_updateDomComponentsSizes",
      value: function(t) {
        this.options.rtl ? this.dom.box.style.right = "0px" : this.dom.box.style.left = "0px", this.data.end ? this.minWidth = t.box.width : this.width = t.box.width, this.height = t.box.height, this.options.rtl ? this.dom.box.style.right = t.previous.right : this.dom.box.style.left = t.previous.left, this.dirty = !1
      }
    }, {
      key: "_repaintDomAdditionals",
      value: function() {
        this._repaintOnItemUpdateTimeTooltip(this.dom.box)
      }
    }, {
      key: "_isStipeVisible",
      value: function() {
        return this.minWidth >= this.width || !this.data.end
      }
    }, {
      key: "_getFitRange",
      value: function() {
        var t = .05 * (this.data.max - this.data.min) / 2;
        return {
          fitStart: this.data.min - t,
          fitEnd: this.data.max + t
        }
      }
    }, {
      key: "_fit",
      value: function() {
        if (this.emitter) {
          var t = this._getFitRange(),
            e = t.fitStart,
            i = t.fitEnd,
            n = {
              start: new Date(e),
              end: new Date(i),
              animation: !0
            };
          this.emitter.emit("fit", n)
        }
      }
    }, {
      key: "_getItemData",
      value: function() {
        return this.data
      }
    }]), i
  }(vd);

  function Ad(t) {
    if (void 0 === Ei || null == Be(t)) {
      if (Vo(t) || (t = function(t, e) {
          var i;
          if (!t) return;
          if ("string" == typeof t) return Wd(t, e);
          var n = Zo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return $i(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wd(t, e)
        }(t))) {
        var e = 0,
          i = function() {};
        return {
          s: i,
          n: function() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            }
          },
          e: function(t) {
            throw t
          },
          f: i
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o, r = !0,
      s = !1;
    return {
      s: function() {
        n = Ze(t)
      },
      n: function() {
        var t = n.next();
        return r = t.done, t
      },
      e: function(t) {
        s = !0, o = t
      },
      f: function() {
        try {
          r || null == n.return || n.return()
        } finally {
          if (s) throw o
        }
      }
    }
  }

  function Wd(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  }
  Od.prototype.baseClassName = "vis-item vis-range vis-cluster";
  var Xd = "__ungrouped__",
    Td = function() {
      function t(e) {
        Za(this, t), this.itemSet = e, this.groups = {}, this.cache = {}, this.cache[-1] = []
      }
      return Oa(t, [{
        key: "createClusterItem",
        value: function(t, e, i) {
          return new Od(t, e, i)
        }
      }, {
        key: "setItems",
        value: function(t, e) {
          this.items = t || [], this.dataChanged = !0, this.applyOnChangedLevel = !1, e && e.applyOnChangedLevel && (this.applyOnChangedLevel = e.applyOnChangedLevel)
        }
      }, {
        key: "updateData",
        value: function() {
          this.dataChanged = !0, this.applyOnChangedLevel = !1
        }
      }, {
        key: "getClusters",
        value: function(t, e, i) {
          var n = "boolean" == typeof i ? {} : i,
            o = n.maxItems,
            r = n.clusterCriteria;
          r || (r = function() {
            return !0
          }), o = o || 1;
          var s = -1,
            a = 0;
          if (e > 0) {
            if (e >= 1) return [];
            s = Math.abs(Math.round(Math.log(100 / e) / Math.log(2))), a = Math.abs(Math.pow(2, s))
          }
          if (this.dataChanged) {
            var l = s != this.cacheLevel;
            (!this.applyOnChangedLevel || l) && (this._dropLevelsCache(), this._filterData())
          }
          this.cacheLevel = s;
          var u = this.cache[s];
          if (!u) {
            for (var h in u = [], this.groups)
              if (this.groups.hasOwnProperty(h))
                for (var d = this.groups[h], c = d.length, p = 0; p < c;) {
                  for (var m = d[p], f = 1, g = p - 1; g >= 0 && m.center - d[g].center < a / 2;) !d[g].cluster && r(m.data, d[g].data) && f++, g--;
                  for (var v = p + 1; v < d.length && d[v].center - m.center < a / 2;) r(m.data, d[v].data) && f++, v++;
                  for (var b = u.length - 1; b >= 0 && m.center - u[b].center < a;) m.group == u[b].group && r(m.data, u[b].data) && f++, b--;
                  if (f > o) {
                    for (var y = f - o + 1, x = [], w = p; x.length < y && w < d.length;) r(d[w].data, d[w].data) && x.push(d[w]), w++;
                    var _ = this.itemSet.getGroupId(m.data),
                      k = this.itemSet.groups[_] || this.itemSet.groups[Xd],
                      D = this._getClusterForItems(x, k, t, i);
                    u.push(D), p += y
                  } else delete m.cluster, p += 1
                }
            this.cache[s] = u
          }
          return u
        }
      }, {
        key: "_filterData",
        value: function() {
          var t = {};
          this.groups = t;
          for (var e = 0, i = io(this.items); e < i.length; e++) {
            var n = i[e],
              o = n.parent ? n.parent.groupId : "",
              r = t[o];
            r || (r = [], t[o] = r), r.push(n), n.data.start && (n.data.end ? n.center = (n.data.start.valueOf() + n.data.end.valueOf()) / 2 : n.center = n.data.start.valueOf())
          }
          for (var s in t) {
            var a;
            if (t.hasOwnProperty(s)) Ys(a = t[s]).call(a, (function(t, e) {
              return t.center - e.center
            }))
          }
          this.dataChanged = !1
        }
      }, {
        key: "_getClusterForItems",
        value: function(t, e, i, n) {
          var o, r, s = jn(o = i || []).call(o, (function(t) {
            var e;
            return {
              cluster: t,
              itemsIds: new oa(jn(e = t.data.uiItems).call(e, (function(t) {
                return t.id
              })))
            }
          }));
          if (s.length) {
            var a, l = Ad(s);
            try {
              var u = function() {
                var e = a.value;
                if (e.itemsIds.size === t.length && Nd(t).call(t, (function(t) {
                    return e.itemsIds.has(t.id)
                  }))) return r = e.cluster, "break"
              };
              for (l.s(); !(a = l.n()).done;) {
                if ("break" === u()) break
              }
            } catch (t) {
              l.e(t)
            } finally {
              l.f()
            }
          }
          if (r) return r.setUiItems(t), r.group !== e && (r.group && r.group.remove(r), e && (e.add(r), r.group = e)), r;
          var h = n.titleTemplate || "",
            d = {
              toScreen: this.itemSet.body.util.toScreen,
              toTime: this.itemSet.body.util.toTime
            },
            c = h.replace(/{count}/, t.length),
            p = '<div title="' + c + '">' + t.length + "</div>",
            m = Jo({}, n, this.itemSet.options),
            f = {
              content: p,
              title: c,
              group: e,
              uiItems: t,
              eventEmitter: this.itemSet.body.emitter,
              range: this.itemSet.body.range
            };
          return r = this.createClusterItem(f, d, m), e && (e.add(r), r.group = e), r.attach(), r
        }
      }, {
        key: "_dropLevelsCache",
        value: function() {
          this.cache = {}, this.cacheLevel = -1, this.cache[this.cacheLevel] = []
        }
      }]), t
    }();
  vh('.vis-itemset{position:relative;padding:0;margin:0;box-sizing:border-box}.vis-itemset .vis-background,.vis-itemset .vis-foreground{position:absolute;width:100%;height:100%;overflow:visible}.vis-axis{position:absolute;width:100%;height:0;left:0;z-index:1}.vis-foreground .vis-group{position:relative;box-sizing:border-box;border-bottom:1px solid #bfbfbf}.vis-foreground .vis-group:last-child{border-bottom:none}.vis-nesting-group{cursor:pointer}.vis-label.vis-nested-group.vis-group-level-unknown-but-gte1{background:#f5f5f5}.vis-label.vis-nested-group.vis-group-level-0{background-color:#fff}.vis-ltr .vis-label.vis-nested-group.vis-group-level-0 .vis-inner{padding-left:0}.vis-rtl .vis-label.vis-nested-group.vis-group-level-0 .vis-inner{padding-right:0}.vis-label.vis-nested-group.vis-group-level-1{background-color:rgba(0,0,0,.05)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-1 .vis-inner{padding-left:15px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-1 .vis-inner{padding-right:15px}.vis-label.vis-nested-group.vis-group-level-2{background-color:rgba(0,0,0,.1)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-2 .vis-inner{padding-left:30px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-2 .vis-inner{padding-right:30px}.vis-label.vis-nested-group.vis-group-level-3{background-color:rgba(0,0,0,.15)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-3 .vis-inner{padding-left:45px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-3 .vis-inner{padding-right:45px}.vis-label.vis-nested-group.vis-group-level-4{background-color:rgba(0,0,0,.2)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-4 .vis-inner{padding-left:60px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-4 .vis-inner{padding-right:60px}.vis-label.vis-nested-group.vis-group-level-5{background-color:rgba(0,0,0,.25)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-5 .vis-inner{padding-left:75px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-5 .vis-inner{padding-right:75px}.vis-label.vis-nested-group.vis-group-level-6{background-color:rgba(0,0,0,.3)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-6 .vis-inner{padding-left:90px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-6 .vis-inner{padding-right:90px}.vis-label.vis-nested-group.vis-group-level-7{background-color:rgba(0,0,0,.35)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-7 .vis-inner{padding-left:105px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-7 .vis-inner{padding-right:105px}.vis-label.vis-nested-group.vis-group-level-8{background-color:rgba(0,0,0,.4)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-8 .vis-inner{padding-left:120px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-8 .vis-inner{padding-right:120px}.vis-label.vis-nested-group.vis-group-level-9{background-color:rgba(0,0,0,.45)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-9 .vis-inner{padding-left:135px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-9 .vis-inner{padding-right:135px}.vis-label.vis-nested-group{background-color:rgba(0,0,0,.5)}.vis-ltr .vis-label.vis-nested-group .vis-inner{padding-left:150px}.vis-rtl .vis-label.vis-nested-group .vis-inner{padding-right:150px}.vis-group-level-unknown-but-gte1{border:1px solid red}.vis-label.vis-nesting-group:before{display:inline-block;width:15px}.vis-label.vis-nesting-group.expanded:before{content:"\\25BC"}.vis-label.vis-nesting-group.collapsed:before{content:"\\25B6"}.vis-rtl .vis-label.vis-nesting-group.collapsed:before{content:"\\25C0"}.vis-ltr .vis-label:not(.vis-nesting-group):not(.vis-group-level-0){padding-left:15px}.vis-rtl .vis-label:not(.vis-nesting-group):not(.vis-group-level-0){padding-right:15px}.vis-overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zZXQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLGFBQ0UsaUJBQWtCLENBQ2xCLFNBQVUsQ0FDVixRQUFTLENBRVQscUJBQ0YsQ0FFQSwwREFFRSxpQkFBa0IsQ0FDbEIsVUFBVyxDQUNYLFdBQVksQ0FDWixnQkFDRixDQUVBLFVBQ0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxRQUFTLENBQ1QsTUFBTyxDQUNQLFNBQ0YsQ0FFQSwyQkFDRSxpQkFBa0IsQ0FDbEIscUJBQXNCLENBQ3RCLCtCQUNGLENBRUEsc0NBQ0Usa0JBQ0YsQ0FFQSxtQkFDRSxjQUNGLENBRUEsNkRBQ0Usa0JBQ0YsQ0FDQSw4Q0FDRSxxQkFDRixDQUNBLGtFQUNFLGNBQ0YsQ0FDQSxrRUFDRSxlQUNGLENBQ0EsOENBQ0UsZ0NBQ0YsQ0FDQSxrRUFDRSxpQkFDRixDQUNBLGtFQUNFLGtCQUNGLENBQ0EsOENBQ0UsK0JBQ0YsQ0FDQSxrRUFDRSxpQkFDRixDQUNBLGtFQUNFLGtCQUNGLENBQ0EsOENBQ0UsZ0NBQ0YsQ0FDQSxrRUFDRSxpQkFDRixDQUNBLGtFQUNFLGtCQUNGLENBQ0EsOENBQ0UsK0JBQ0YsQ0FDQSxrRUFDRSxpQkFDRixDQUNBLGtFQUNFLGtCQUNGLENBQ0EsOENBQ0UsZ0NBQ0YsQ0FDQSxrRUFDRSxpQkFDRixDQUNBLGtFQUNFLGtCQUNGLENBQ0EsOENBQ0UsK0JBQ0YsQ0FDQSxrRUFDRSxpQkFDRixDQUNBLGtFQUNFLGtCQUNGLENBQ0EsOENBQ0UsZ0NBQ0YsQ0FDQSxrRUFDRSxrQkFDRixDQUNBLGtFQUNFLG1CQUNGLENBQ0EsOENBQ0UsK0JBQ0YsQ0FDQSxrRUFDRSxrQkFDRixDQUNBLGtFQUNFLG1CQUNGLENBQ0EsOENBQ0UsZ0NBQ0YsQ0FDQSxrRUFDRSxrQkFDRixDQUNBLGtFQUNFLG1CQUNGLENBR0EsNEJBQ0UsK0JBQ0YsQ0FDQSxnREFDRSxrQkFDRixDQUNBLGdEQUNFLG1CQUNGLENBRUEsa0NBQ0Usb0JBQ0YsQ0FHQSxvQ0FFRSxvQkFBcUIsQ0FDckIsVUFDRixDQUNBLDZDQUNFLGVBQ0YsQ0FDQSw4Q0FDRSxlQUNGLENBQ0EsdURBQ0UsZUFDRixDQUVBLG9FQUNFLGlCQUNGLENBQ0Esb0VBQ0Usa0JBQ0YsQ0FFQSxhQUNFLGlCQUFrQixDQUNsQixLQUFNLENBQ04sTUFBTyxDQUNQLFVBQVcsQ0FDWCxXQUFZLENBQ1osVUFDRiIsImZpbGUiOiJpdGVtc2V0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpcy1pdGVtc2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnZpcy1pdGVtc2V0IC52aXMtYmFja2dyb3VuZCxcbi52aXMtaXRlbXNldCAudmlzLWZvcmVncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4udmlzLWF4aXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi52aXMtZm9yZWdyb3VuZCAudmlzLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcbn1cblxuLnZpcy1mb3JlZ3JvdW5kIC52aXMtZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi52aXMtbmVzdGluZy1ncm91cCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC11bmtub3duLWJ1dC1ndGUxIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cbi52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4udmlzLWx0ciAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTAgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi52aXMtcnRsIC52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtMCAudmlzLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4udmlzLWx0ciAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTEgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi52aXMtcnRsIC52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtMSAudmlzLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi52aXMtbHRyIC52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtMiAudmlzLWlubmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLnZpcy1ydGwgLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC0yIC52aXMtaW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi52aXMtbHRyIC52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtMyAudmlzLWlubmVyIHtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xufVxuLnZpcy1ydGwgLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC0zIC52aXMtaW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xufVxuLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnZpcy1sdHIgLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC00IC52aXMtaW5uZXIge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG4udmlzLXJ0bCAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTQgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG4udmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnZpcy1sdHIgLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC01IC52aXMtaW5uZXIge1xuICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG59XG4udmlzLXJ0bCAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTUgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDc1cHg7XG59XG4udmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4udmlzLWx0ciAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTYgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbn1cbi52aXMtcnRsIC52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtNiAudmlzLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogOTBweDtcbn1cbi52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtNyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG4udmlzLWx0ciAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTcgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogMTA1cHg7XG59XG4udmlzLXJ0bCAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTcgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwNXB4O1xufVxuLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC04IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLnZpcy1sdHIgLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC04IC52aXMtaW5uZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xufVxuLnZpcy1ydGwgLnZpcy1sYWJlbC52aXMtbmVzdGVkLWdyb3VwLnZpcy1ncm91cC1sZXZlbC04IC52aXMtaW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcbn1cbi52aXMtbGFiZWwudmlzLW5lc3RlZC1ncm91cC52aXMtZ3JvdXAtbGV2ZWwtOSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG59XG4udmlzLWx0ciAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTkgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogMTM1cHg7XG59XG4udmlzLXJ0bCAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAudmlzLWdyb3VwLWxldmVsLTkgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEzNXB4O1xufVxuLyogZGVmYXVsdCB0YWtlcyBvdmVyIGJlZ2lubmluZyB3aXRoIGxldmVsLTEwICh0aGF0cyB3aHkgd2UgYWRkIC52aXMtbmVzdGVkLWdyb3VwXG4gIHRvIHRoZSBzZWxlY3RvcnMgYWJvdmUsIHRvIGhhdmUgaGlnaGVyIHNwZWNpZml0eSB0aGFuIHRoZXNlIHJ1bGVzIGZvciB0aGUgZGVmYXVsdHMpICovXG4udmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4udmlzLWx0ciAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogMTUwcHg7XG59XG4udmlzLXJ0bCAudmlzLWxhYmVsLnZpcy1uZXN0ZWQtZ3JvdXAgLnZpcy1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xufVxuXG4udmlzLWdyb3VwLWxldmVsLXVua25vd24tYnV0LWd0ZTEge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi8qIGV4cGFuZGVkL2NvbGxhcHNlZCBpbmRpY2F0b3JzICovXG4udmlzLWxhYmVsLnZpcy1uZXN0aW5nLWdyb3VwOmJlZm9yZSxcbi52aXMtbGFiZWwudmlzLW5lc3RpbmctZ3JvdXA6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTVweDtcbn1cbi52aXMtbGFiZWwudmlzLW5lc3RpbmctZ3JvdXAuZXhwYW5kZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI1QkNcIjtcbn1cbi52aXMtbGFiZWwudmlzLW5lc3RpbmctZ3JvdXAuY29sbGFwc2VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyNUI2XCI7XG59XG4udmlzLXJ0bCAudmlzLWxhYmVsLnZpcy1uZXN0aW5nLWdyb3VwLmNvbGxhcHNlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjVDMFwiO1xufVxuLyogY29tcGVuc2F0ZSBtaXNzaW5nIGV4cGFuZGVkL2NvbGxhcHNlZCBpbmRpY2F0b3IsIGJ1dCBvbmx5IGF0IGxldmVscyA+IDAgKi9cbi52aXMtbHRyIC52aXMtbGFiZWw6bm90KC52aXMtbmVzdGluZy1ncm91cCk6bm90KC52aXMtZ3JvdXAtbGV2ZWwtMCkge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4udmlzLXJ0bCAudmlzLWxhYmVsOm5vdCgudmlzLW5lc3RpbmctZ3JvdXApOm5vdCgudmlzLWdyb3VwLWxldmVsLTApIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLnZpcy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */');

  function Yd(t) {
    if (void 0 === Ei || null == Be(t)) {
      if (Vo(t) || (t = function(t, e) {
          var i;
          if (!t) return;
          if ("string" == typeof t) return Ed(t, e);
          var n = Zo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return $i(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ed(t, e)
        }(t))) {
        var e = 0,
          i = function() {};
        return {
          s: i,
          n: function() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            }
          },
          e: function(t) {
            throw t
          },
          f: i
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o, r = !0,
      s = !1;
    return {
      s: function() {
        n = Ze(t)
      },
      n: function() {
        var t = n.next();
        return r = t.done, t
      },
      e: function(t) {
        s = !0, o = t
      },
      f: function() {
        try {
          r || null == n.return || n.return()
        } finally {
          if (s) throw o
        }
      }
    }
  }

  function Ed(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  }

  function Rd(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  vh(".vis-labelset{overflow:hidden}.vis-labelset,.vis-labelset .vis-label{position:relative;box-sizing:border-box}.vis-labelset .vis-label{left:0;top:0;width:100%;color:#4d4d4d;border-bottom:1px solid #bfbfbf}.vis-labelset .vis-label.draggable{cursor:pointer}.vis-group-is-dragging{background:rgba(0,0,0,.1)}.vis-labelset .vis-label:last-child{border-bottom:none}.vis-labelset .vis-label .vis-inner{display:inline-block;padding:5px}.vis-labelset .vis-label .vis-inner.vis-hidden{padding:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsc2V0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxjQUdFLGVBR0YsQ0FFQSx1Q0FQRSxpQkFBa0IsQ0FJbEIscUJBV0YsQ0FSQSx5QkFFRSxNQUFPLENBQ1AsS0FBTSxDQUNOLFVBQVcsQ0FDWCxhQUFjLENBTWQsK0JBSEYsQ0FNQSxtQ0FDRSxjQUNGLENBRUEsdUJBQ0UseUJBQ0YsQ0FFQSxvQ0FDRSxrQkFDRixDQUVBLG9DQUNFLG9CQUFxQixDQUNyQixXQUNGLENBRUEsK0NBQ0UsU0FDRiIsImZpbGUiOiJsYWJlbHNldC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52aXMtbGFiZWxzZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udmlzLWxhYmVsc2V0IC52aXMtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi52aXMtbGFiZWxzZXQgLnZpcy1sYWJlbCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xufVxuXG4udmlzLWxhYmVsc2V0IC52aXMtbGFiZWwuZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmlzLWdyb3VwLWlzLWRyYWdnaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cbi52aXMtbGFiZWxzZXQgLnZpcy1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnZpcy1sYWJlbHNldCAudmlzLWxhYmVsIC52aXMtaW5uZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnZpcy1sYWJlbHNldCAudmlzLWxhYmVsIC52aXMtaW5uZXIudmlzLWhpZGRlbiB7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */");
  var Ud = "__background__",
    zd = function(t) {
      Ms(i, t);
      var e = Rd(i);

      function i(t, n) {
        var o;
        Za(this, i), (o = e.call(this)).body = t, o.defaultOptions = {
          type: null,
          orientation: {
            item: "bottom"
          },
          align: "auto",
          stack: !0,
          stackSubgroups: !0,
          groupOrderSwap: function(t, e, i) {
            var n = e.order;
            e.order = t.order, t.order = n
          },
          groupOrder: "order",
          selectable: !0,
          multiselect: !1,
          longSelectPressTime: 251,
          itemsAlwaysDraggable: {
            item: !1,
            range: !1
          },
          editable: {
            updateTime: !1,
            updateGroup: !1,
            add: !1,
            remove: !1,
            overrideItems: !1
          },
          groupEditable: {
            order: !1,
            add: !1,
            remove: !1
          },
          snap: gh.snap,
          onDropObjectOnItem: function(t, e, i) {
            i(e)
          },
          onAdd: function(t, e) {
            e(t)
          },
          onUpdate: function(t, e) {
            e(t)
          },
          onMove: function(t, e) {
            e(t)
          },
          onRemove: function(t, e) {
            e(t)
          },
          onMoving: function(t, e) {
            e(t)
          },
          onAddGroup: function(t, e) {
            e(t)
          },
          onMoveGroup: function(t, e) {
            e(t)
          },
          onRemoveGroup: function(t, e) {
            e(t)
          },
          margin: {
            item: {
              horizontal: 10,
              vertical: 10
            },
            axis: 20
          },
          showTooltips: !0,
          tooltip: {
            followMouse: !1,
            overflowMethod: "flip",
            delay: 500
          },
          tooltipOnItemUpdateTime: !1
        }, o.options = cl.extend({}, o.defaultOptions), o.options.rtl = n.rtl, o.options.onTimeout = n.onTimeout, o.conversion = {
          toScreen: t.util.toScreen,
          toTime: t.util.toTime
        }, o.dom = {}, o.props = {}, o.hammer = null;
        var r = Vr(o);
        return o.itemsData = null, o.groupsData = null, o.itemsSettingTime = null, o.initialItemSetDrawn = !1, o.userContinueNotBail = null, o.sequentialSelection = !1, o.itemListeners = {
          add: function(t, e, i) {
            r._onAdd(e.items), r.options.cluster && r.clusterGenerator.setItems(r.items, {
              applyOnChangedLevel: !1
            }), r.redraw()
          },
          update: function(t, e, i) {
            r._onUpdate(e.items), r.options.cluster && r.clusterGenerator.setItems(r.items, {
              applyOnChangedLevel: !1
            }), r.redraw()
          },
          remove: function(t, e, i) {
            r._onRemove(e.items), r.options.cluster && r.clusterGenerator.setItems(r.items, {
              applyOnChangedLevel: !1
            }), r.redraw()
          }
        }, o.groupListeners = {
          add: function(t, e, i) {
            if (r._onAddGroups(e.items), r.groupsData && r.groupsData.length > 0) {
              var n, o = r.groupsData.getDataSet();
              Yn(n = o.get()).call(n, (function(t) {
                if (t.nestedGroups) {
                  var e;
                  0 != t.showNested && (t.showNested = !0);
                  var n = [];
                  Yn(e = t.nestedGroups).call(e, (function(e) {
                    var i = o.get(e);
                    i && (i.nestedInGroup = t.id, 0 == t.showNested && (i.visible = !1), n = co(n).call(n, i))
                  })), o.update(n, i)
                }
              }))
            }
          },
          update: function(t, e, i) {
            r._onUpdateGroups(e.items)
          },
          remove: function(t, e, i) {
            r._onRemoveGroups(e.items)
          }
        }, o.items = {}, o.groups = {}, o.groupIds = [], o.selection = [], o.popup = null, o.popupTimer = null, o.touchParams = {}, o.groupTouchParams = {
          group: null,
          isDragging: !1
        }, o._create(), o.setOptions(n), o.clusters = [], o
      }
      return Oa(i, [{
        key: "_create",
        value: function() {
          var t, e, i, n, o, r, s, a, l, u, h, d, c, p, m, f = this,
            g = document.createElement("div");
          g.className = "vis-itemset", g["vis-itemset"] = this, this.dom.frame = g;
          var v = document.createElement("div");
          v.className = "vis-background", g.appendChild(v), this.dom.background = v;
          var b = document.createElement("div");
          b.className = "vis-foreground", g.appendChild(b), this.dom.foreground = b;
          var y = document.createElement("div");
          y.className = "vis-axis", this.dom.axis = y;
          var x = document.createElement("div");
          x.className = "vis-labelset", this.dom.labelSet = x, this._updateUngrouped();
          var w = new md(Ud, null, this);
          w.show(), this.groups[Ud] = w, this.hammer = new mh(this.body.dom.centerContainer), this.hammer.on("hammer.input", (function(t) {
            t.isFirst && f._onTouch(t)
          })), this.hammer.on("panstart", Fa(t = this._onDragStart).call(t, this)), this.hammer.on("panmove", Fa(e = this._onDrag).call(e, this)), this.hammer.on("panend", Fa(i = this._onDragEnd).call(i, this)), this.hammer.get("pan").set({
            threshold: 5,
            direction: mh.ALL
          }), this.hammer.on("tap", Fa(n = this._onSelectItem).call(n, this)), this.hammer.on("press", Fa(o = this._onMultiSelectItem).call(o, this)), this.hammer.on("doubletap", Fa(r = this._onAddItem).call(r, this)), this.options.rtl ? this.groupHammer = new mh(this.body.dom.rightContainer) : this.groupHammer = new mh(this.body.dom.leftContainer), this.groupHammer.on("tap", Fa(s = this._onGroupClick).call(s, this)), this.groupHammer.on("panstart", Fa(a = this._onGroupDragStart).call(a, this)), this.groupHammer.on("panmove", Fa(l = this._onGroupDrag).call(l, this)), this.groupHammer.on("panend", Fa(u = this._onGroupDragEnd).call(u, this)), this.groupHammer.get("pan").set({
            threshold: 5,
            direction: mh.DIRECTION_VERTICAL
          }), this.body.dom.centerContainer.addEventListener("mouseover", Fa(h = this._onMouseOver).call(h, this)), this.body.dom.centerContainer.addEventListener("mouseout", Fa(d = this._onMouseOut).call(d, this)), this.body.dom.centerContainer.addEventListener("mousemove", Fa(c = this._onMouseMove).call(c, this)), this.body.dom.centerContainer.addEventListener("contextmenu", Fa(p = this._onDragEnd).call(p, this)), this.body.dom.centerContainer.addEventListener("mousewheel", Fa(m = this._onMouseWheel).call(m, this)), this.show()
        }
      }, {
        key: "setOptions",
        value: function(t) {
          var e = this;
          if (t) {
            var i, n;
            cl.selectiveExtend(["type", "rtl", "align", "order", "stack", "stackSubgroups", "selectable", "multiselect", "sequentialSelection", "multiselectPerGroup", "longSelectPressTime", "groupOrder", "dataAttributes", "template", "groupTemplate", "visibleFrameTemplate", "hide", "snap", "groupOrderSwap", "showTooltips", "tooltip", "tooltipOnItemUpdateTime", "groupHeightMode", "onTimeout"], this.options, t), "itemsAlwaysDraggable" in t && ("boolean" == typeof t.itemsAlwaysDraggable ? (this.options.itemsAlwaysDraggable.item = t.itemsAlwaysDraggable, this.options.itemsAlwaysDraggable.range = !1) : "object" === $o(t.itemsAlwaysDraggable) && (cl.selectiveExtend(["item", "range"], this.options.itemsAlwaysDraggable, t.itemsAlwaysDraggable), this.options.itemsAlwaysDraggable.item || (this.options.itemsAlwaysDraggable.range = !1))), "sequentialSelection" in t && "boolean" == typeof t.sequentialSelection && (this.options.sequentialSelection = t.sequentialSelection), "orientation" in t && ("string" == typeof t.orientation ? this.options.orientation.item = "top" === t.orientation ? "top" : "bottom" : "object" === $o(t.orientation) && "item" in t.orientation && (this.options.orientation.item = t.orientation.item)), "margin" in t && ("number" == typeof t.margin ? (this.options.margin.axis = t.margin, this.options.margin.item.horizontal = t.margin, this.options.margin.item.vertical = t.margin) : "object" === $o(t.margin) && (cl.selectiveExtend(["axis"], this.options.margin, t.margin), "item" in t.margin && ("number" == typeof t.margin.item ? (this.options.margin.item.horizontal = t.margin.item, this.options.margin.item.vertical = t.margin.item) : "object" === $o(t.margin.item) && cl.selectiveExtend(["horizontal", "vertical"], this.options.margin.item, t.margin.item)))), Yn(i = ["locale", "locales"]).call(i, (function(i) {
              i in t && (e.options[i] = t[i])
            })), "editable" in t && ("boolean" == typeof t.editable ? (this.options.editable.updateTime = t.editable, this.options.editable.updateGroup = t.editable, this.options.editable.add = t.editable, this.options.editable.remove = t.editable, this.options.editable.overrideItems = !1) : "object" === $o(t.editable) && cl.selectiveExtend(["updateTime", "updateGroup", "add", "remove", "overrideItems"], this.options.editable, t.editable)), "groupEditable" in t && ("boolean" == typeof t.groupEditable ? (this.options.groupEditable.order = t.groupEditable, this.options.groupEditable.add = t.groupEditable, this.options.groupEditable.remove = t.groupEditable) : "object" === $o(t.groupEditable) && cl.selectiveExtend(["order", "add", "remove"], this.options.groupEditable, t.groupEditable));
            Yn(n = ["onDropObjectOnItem", "onAdd", "onUpdate", "onRemove", "onMove", "onMoving", "onAddGroup", "onMoveGroup", "onRemoveGroup"]).call(n, (function(i) {
              var n = t[i];
              if (n) {
                var o;
                if ("function" != typeof n) throw new Error(co(o = "option ".concat(i, " must be a function ")).call(o, i, "(item, callback)"));
                e.options[i] = n
              }
            })), t.cluster ? (Jo(this.options, {
              cluster: t.cluster
            }), this.clusterGenerator || (this.clusterGenerator = new Td(this)), this.clusterGenerator.setItems(this.items, {
              applyOnChangedLevel: !1
            }), this.markDirty({
              refreshItems: !0,
              restackGroups: !0
            }), this.redraw()) : this.clusterGenerator ? (this._detachAllClusters(), this.clusters = [], this.clusterGenerator = null, this.options.cluster = void 0, this.markDirty({
              refreshItems: !0,
              restackGroups: !0
            }), this.redraw()) : this.markDirty()
          }
        }
      }, {
        key: "markDirty",
        value: function(t) {
          this.groupIds = [], t && (t.refreshItems && Yn(cl).call(cl, this.items, (function(t) {
            t.dirty = !0, t.displayed && t.redraw()
          })), t.restackGroups && Yn(cl).call(cl, this.groups, (function(t, e) {
            e !== Ud && (t.stackDirty = !0)
          })))
        }
      }, {
        key: "destroy",
        value: function() {
          this.clearPopupTimer(), this.hide(), this.setItems(null), this.setGroups(null), this.hammer && this.hammer.destroy(), this.groupHammer && this.groupHammer.destroy(), this.hammer = null, this.body = null, this.conversion = null
        }
      }, {
        key: "hide",
        value: function() {
          this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.axis.parentNode && this.dom.axis.parentNode.removeChild(this.dom.axis), this.dom.labelSet.parentNode && this.dom.labelSet.parentNode.removeChild(this.dom.labelSet)
        }
      }, {
        key: "show",
        value: function() {
          this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame), this.dom.axis.parentNode || this.body.dom.backgroundVertical.appendChild(this.dom.axis), this.dom.labelSet.parentNode || (this.options.rtl ? this.body.dom.right.appendChild(this.dom.labelSet) : this.body.dom.left.appendChild(this.dom.labelSet))
        }
      }, {
        key: "setPopupTimer",
        value: function(t) {
          if (this.clearPopupTimer(), t) {
            var e = this.options.tooltip.delay || "number" == typeof this.options.tooltip.delay ? this.options.tooltip.delay : 500;
            this.popupTimer = ba((function() {
              t.show()
            }), e)
          }
        }
      }, {
        key: "clearPopupTimer",
        value: function() {
          null != this.popupTimer && (clearTimeout(this.popupTimer), this.popupTimer = null)
        }
      }, {
        key: "setSelection",
        value: function(t) {
          var e;
          null == t && (t = []), Vo(t) || (t = [t]);
          var i, n = Yd(lo(e = this.selection).call(e, (function(e) {
            return -1 === zo(t).call(t, e)
          })));
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = i.value,
                r = this.getItemById(o);
              r && r.unselect()
            }
          } catch (t) {
            n.e(t)
          } finally {
            n.f()
          }
          this.selection = Fo(t);
          var s, a = Yd(t);
          try {
            for (a.s(); !(s = a.n()).done;) {
              var l = s.value,
                u = this.getItemById(l);
              u && u.select()
            }
          } catch (t) {
            a.e(t)
          } finally {
            a.f()
          }
        }
      }, {
        key: "getSelection",
        value: function() {
          var t;
          return co(t = this.selection).call(t, [])
        }
      }, {
        key: "getVisibleItems",
        value: function() {
          var t, e, i = this.body.range.getRange();
          this.options.rtl ? (t = this.body.util.toScreen(i.start), e = this.body.util.toScreen(i.end)) : (e = this.body.util.toScreen(i.start), t = this.body.util.toScreen(i.end));
          var n = [];
          for (var o in this.groups)
            if (this.groups.hasOwnProperty(o)) {
              var r, s = this.groups[o],
                a = Yd(s.isVisible ? s.visibleItems : []);
              try {
                for (a.s(); !(r = a.n()).done;) {
                  var l = r.value;
                  this.options.rtl ? l.right < e && l.right + l.width > t && n.push(l.id) : l.left < t && l.left + l.width > e && n.push(l.id)
                }
              } catch (t) {
                a.e(t)
              } finally {
                a.f()
              }
            } return n
        }
      }, {
        key: "getVisibleGroups",
        value: function() {
          var t = [];
          for (var e in this.groups) {
            if (this.groups.hasOwnProperty(e)) this.groups[e].isVisible && t.push(e)
          }
          return t
        }
      }, {
        key: "getItemById",
        value: function(t) {
          var e;
          return this.items[t] || Uh(e = this.clusters).call(e, (function(e) {
            return e.id === t
          }))
        }
      }, {
        key: "_deselect",
        value: function(t) {
          for (var e = this.selection, i = 0, n = e.length; i < n; i++)
            if (e[i] == t) {
              ma(e).call(e, i, 1);
              break
            }
        }
      }, {
        key: "redraw",
        value: function() {
          var t = this,
            e = this.options.margin,
            i = this.body.range,
            n = cl.option.asSize,
            o = this.options,
            r = o.orientation.item,
            s = !1,
            a = this.dom.frame;
          this.props.top = this.body.domProps.top.height + this.body.domProps.border.top, this.options.rtl ? this.props.right = this.body.domProps.right.width + this.body.domProps.border.right : this.props.left = this.body.domProps.left.width + this.body.domProps.border.left, a.className = "vis-itemset", this.options.cluster && this._clusterItems(), s = this._orderGroups() || s;
          var l = i.end - i.start,
            u = l != this.lastVisibleInterval || this.props.width != this.props.lastWidth,
            h = i.start != this.lastRangeStart,
            d = o.stack != this.lastStack,
            c = o.stackSubgroups != this.lastStackSubgroups,
            p = u || h || d || c;
          this.lastVisibleInterval = l, this.lastRangeStart = i.start, this.lastStack = o.stack, this.lastStackSubgroups = o.stackSubgroups, this.props.lastWidth = this.props.width;
          var m = this._firstGroup(),
            f = {
              item: e.item,
              axis: e.axis
            },
            g = {
              item: e.item,
              axis: e.item.vertical / 2
            },
            v = 0,
            b = e.axis + e.item.vertical;
          this.groups[Ud].redraw(i, g, p);
          var y = {},
            x = 0;
          return Yn(cl).call(cl, this.groups, (function(t, e) {
            if (e !== Ud) {
              var n = t == m ? f : g;
              y[e] = t.redraw(i, n, p, !0), x = y[e].length
            }
          })), x > 0 && function() {
            for (var e = {}, i = function(t) {
                Yn(cl).call(cl, y, (function(i, n) {
                  e[n] = i[t]()
                }))
              }, n = 0; n < x; n++) i(n);
            Yn(cl).call(cl, t.groups, (function(t, i) {
              if (i !== Ud) {
                var n = e[i];
                s = n || s, v += t.height
              }
            })), v = Math.max(v, b)
          }(), v = Math.max(v, b), a.style.height = n(v), this.props.width = a.offsetWidth, this.props.height = v, this.dom.axis.style.top = n("top" == r ? this.body.domProps.top.height + this.body.domProps.border.top : this.body.domProps.top.height + this.body.domProps.centerContainer.height), this.options.rtl ? this.dom.axis.style.right = "0" : this.dom.axis.style.left = "0", this.hammer.get("press").set({
            time: this.options.longSelectPressTime
          }), this.initialItemSetDrawn = !0, s = this._isResized() || s
        }
      }, {
        key: "_firstGroup",
        value: function() {
          var t = "top" == this.options.orientation.item ? 0 : this.groupIds.length - 1,
            e = this.groupIds[t];
          return this.groups[e] || this.groups.__ungrouped__ || null
        }
      }, {
        key: "_updateUngrouped",
        value: function() {
          var t, e, i = this.groups.__ungrouped__;
          if (this.groupsData) {
            if (i)
              for (e in i.dispose(), delete this.groups.__ungrouped__, this.items)
                if (this.items.hasOwnProperty(e)) {
                  (t = this.items[e]).parent && t.parent.remove(t);
                  var n = this.getGroupId(t.data),
                    o = this.groups[n];
                  o && o.add(t) || t.hide()
                }
          } else if (!i) {
            for (e in i = new cd(null, null, this), this.groups.__ungrouped__ = i, this.items) this.items.hasOwnProperty(e) && (t = this.items[e], i.add(t));
            i.show()
          }
        }
      }, {
        key: "getLabelSet",
        value: function() {
          return this.dom.labelSet
        }
      }, {
        key: "setItems",
        value: function(t) {
          this.itemsSettingTime = new Date;
          var e, i = this,
            n = this.itemsData;
          if (t) {
            if (!(t instanceof ol || t instanceof rl)) throw new TypeError("Data must be an instance of DataSet or DataView");
            this.itemsData = dl(t)
          } else this.itemsData = null;
          if (n && (Yn(cl).call(cl, this.itemListeners, (function(t, e) {
              n.off(e, t)
            })), n.dispose(), e = n.getIds(), this._onRemove(e)), this.itemsData) {
            var o = this.id;
            Yn(cl).call(cl, this.itemListeners, (function(t, e) {
              i.itemsData.on(e, t, o)
            })), e = this.itemsData.getIds(), this._onAdd(e), this._updateUngrouped()
          }
          this.body.emitter.emit("_change", {
            queue: !0
          })
        }
      }, {
        key: "getItems",
        value: function() {
          return null != this.itemsData ? this.itemsData.rawDS : null
        }
      }, {
        key: "setGroups",
        value: function(t) {
          var e, i = this;
          if (this.groupsData && (Yn(cl).call(cl, this.groupListeners, (function(t, e) {
              i.groupsData.off(e, t)
            })), e = this.groupsData.getIds(), this.groupsData = null, this._onRemoveGroups(e)), t) {
            if (!(t instanceof ol || t instanceof rl)) throw new TypeError("Data must be an instance of DataSet or DataView");
            this.groupsData = t
          } else this.groupsData = null;
          if (this.groupsData) {
            var n, o = this.groupsData;
            this.groupsData instanceof rl && (o = this.groupsData.getDataSet()), Yn(n = o.get()).call(n, (function(t) {
              var e;
              t.nestedGroups && Yn(e = t.nestedGroups).call(e, (function(e) {
                var i = o.get(e);
                i.nestedInGroup = t.id, 0 == t.showNested && (i.visible = !1), o.update(i)
              }))
            }));
            var r = this.id;
            Yn(cl).call(cl, this.groupListeners, (function(t, e) {
              i.groupsData.on(e, t, r)
            })), e = this.groupsData.getIds(), this._onAddGroups(e)
          }
          this._updateUngrouped(), this._order(), this.options.cluster && (this.clusterGenerator.updateData(), this._clusterItems(), this.markDirty({
            refreshItems: !0,
            restackGroups: !0
          })), this.body.emitter.emit("_change", {
            queue: !0
          })
        }
      }, {
        key: "getGroups",
        value: function() {
          return this.groupsData
        }
      }, {
        key: "removeItem",
        value: function(t) {
          var e = this,
            i = this.itemsData.get(t);
          i && this.options.onRemove(i, (function(i) {
            i && e.itemsData.remove(t)
          }))
        }
      }, {
        key: "_getType",
        value: function(t) {
          return t.type || this.options.type || (t.end ? "range" : "box")
        }
      }, {
        key: "getGroupId",
        value: function(t) {
          return "background" == this._getType(t) && null == t.group ? Ud : this.groupsData ? t.group : "__ungrouped__"
        }
      }, {
        key: "_onUpdate",
        value: function(t) {
          var e = this,
            n = this;
          Yn(t).call(t, (function(t) {
            var o, r = n.itemsData.get(t),
              s = n.items[t],
              a = r ? n._getType(r) : null,
              l = i.types[a];
            if (s && (l && s instanceof l ? n._updateItem(s, r) : (o = s.selected, n._removeItem(s), s = null)), !s && r) {
              if (!l) throw new TypeError('Unknown item type "'.concat(a, '"'));
              (s = new l(r, n.conversion, n.options)).id = t, n._addItem(s), o && (e.selection.push(t), s.select())
            }
          })), this._order(), this.options.cluster && (this.clusterGenerator.setItems(this.items, {
            applyOnChangedLevel: !1
          }), this._clusterItems()), this.body.emitter.emit("_change", {
            queue: !0
          })
        }
      }, {
        key: "_onRemove",
        value: function(t) {
          var e = 0,
            i = this;
          Yn(t).call(t, (function(t) {
            var n = i.items[t];
            n && (e++, i._removeItem(n))
          })), e && (this._order(), this.body.emitter.emit("_change", {
            queue: !0
          }))
        }
      }, {
        key: "_order",
        value: function() {
          Yn(cl).call(cl, this.groups, (function(t) {
            t.order()
          }))
        }
      }, {
        key: "_onUpdateGroups",
        value: function(t) {
          this._onAddGroups(t)
        }
      }, {
        key: "_onAddGroups",
        value: function(t) {
          var e = this;
          Yn(t).call(t, (function(t) {
            var i = e.groupsData.get(t),
              n = e.groups[t];
            if (n) n.setData(i);
            else {
              if ("__ungrouped__" == t || t == Ud) throw new Error("Illegal group id. ".concat(t, " is a reserved id."));
              var o = cn(e.options);
              for (var r in cl.extend(o, {
                  height: null
                }), n = new cd(t, i, e), e.groups[t] = n, e.items)
                if (e.items.hasOwnProperty(r)) {
                  var s = e.items[r];
                  s.data.group == t && n.add(s)
                } n.order(), n.show()
            }
          })), this.body.emitter.emit("_change", {
            queue: !0
          })
        }
      }, {
        key: "_onRemoveGroups",
        value: function(t) {
          var e = this;
          Yn(t).call(t, (function(t) {
            var i = e.groups[t];
            i && (i.dispose(), delete e.groups[t])
          })), this.options.cluster && (this.clusterGenerator.updateData(), this._clusterItems()), this.markDirty({
            restackGroups: !!this.options.cluster
          }), this.body.emitter.emit("_change", {
            queue: !0
          })
        }
      }, {
        key: "_orderGroups",
        value: function() {
          if (this.groupsData) {
            var t = this.groupsData.getIds({
              order: this.options.groupOrder
            });
            t = this._orderNestedGroups(t);
            var e = !cl.equalArray(t, this.groupIds);
            if (e) {
              var i = this.groups;
              Yn(t).call(t, (function(t) {
                i[t].hide()
              })), Yn(t).call(t, (function(t) {
                i[t].show()
              })), this.groupIds = t
            }
            return e
          }
          return !1
        }
      }, {
        key: "_orderNestedGroups",
        value: function(t) {
          var e = this;
          return function t(e, i) {
            var n = [];
            return Yn(i).call(i, (function(i) {
              if (n.push(i), e.groupsData.get(i).nestedGroups) {
                var o, r = jn(o = e.groupsData.get({
                  filter: function(t) {
                    return t.nestedInGroup == i
                  },
                  order: e.options.groupOrder
                })).call(o, (function(t) {
                  return t.id
                }));
                n = co(n).call(n, t(e, r))
              }
            })), n
          }(this, lo(t).call(t, (function(t) {
            return !e.groupsData.get(t).nestedInGroup
          })))
        }
      }, {
        key: "_addItem",
        value: function(t) {
          this.items[t.id] = t;
          var e = this.getGroupId(t.data),
            i = this.groups[e];
          i ? i && i.data && i.data.showNested && (t.groupShowing = !0) : t.groupShowing = !1, i && i.add(t)
        }
      }, {
        key: "_updateItem",
        value: function(t, e) {
          t.setData(e);
          var i = this.getGroupId(t.data),
            n = this.groups[i];
          n ? n && n.data && n.data.showNested && (t.groupShowing = !0) : t.groupShowing = !1
        }
      }, {
        key: "_removeItem",
        value: function(t) {
          var e, i;
          t.hide(), delete this.items[t.id];
          var n = zo(e = this.selection).call(e, t.id); - 1 != n && ma(i = this.selection).call(i, n, 1), t.parent && t.parent.remove(t), null != this.popup && this.popup.hide()
        }
      }, {
        key: "_constructByEndArray",
        value: function(t) {
          for (var e = [], i = 0; i < t.length; i++) t[i] instanceof kd && e.push(t[i]);
          return e
        }
      }, {
        key: "_onTouch",
        value: function(t) {
          this.touchParams.item = this.itemFromTarget(t), this.touchParams.dragLeftItem = t.target.dragLeftItem || !1, this.touchParams.dragRightItem = t.target.dragRightItem || !1, this.touchParams.itemProps = null
        }
      }, {
        key: "_getGroupIndex",
        value: function(t) {
          for (var e = 0; e < this.groupIds.length; e++)
            if (t == this.groupIds[e]) return e
        }
      }, {
        key: "_onDragStart",
        value: function(t) {
          var e = this;
          if (!this.touchParams.itemIsDragging) {
            var i, n = this.touchParams.item || null,
              o = this;
            if (n && (n.selected || this.options.itemsAlwaysDraggable.item)) {
              if (this.options.editable.overrideItems && !this.options.editable.updateTime && !this.options.editable.updateGroup) return;
              if (null != n.editable && !n.editable.updateTime && !n.editable.updateGroup && !this.options.editable.overrideItems) return;
              var r = this.touchParams.dragLeftItem,
                s = this.touchParams.dragRightItem;
              if (this.touchParams.itemIsDragging = !0, this.touchParams.selectedItem = n, r) i = {
                item: r,
                initialX: t.center.x,
                dragLeft: !0,
                data: this._cloneItemData(n.data)
              }, this.touchParams.itemProps = [i];
              else if (s) i = {
                item: s,
                initialX: t.center.x,
                dragRight: !0,
                data: this._cloneItemData(n.data)
              }, this.touchParams.itemProps = [i];
              else if (this.options.editable.add && (t.srcEvent.ctrlKey || t.srcEvent.metaKey)) this._onDragStartAddItem(t);
              else {
                this.groupIds.length < 1 && this.redraw();
                var a = this._getGroupIndex(n.data.group),
                  l = this.options.itemsAlwaysDraggable.item && !n.selected ? [n.id] : this.getSelection();
                this.touchParams.itemProps = jn(l).call(l, (function(i) {
                  var n = o.items[i],
                    r = o._getGroupIndex(n.data.group);
                  return {
                    item: n,
                    initialX: t.center.x,
                    groupOffset: a - r,
                    data: e._cloneItemData(n.data)
                  }
                }))
              }
              t.stopPropagation()
            } else this.options.editable.add && (t.srcEvent.ctrlKey || t.srcEvent.metaKey) && this._onDragStartAddItem(t)
          }
        }
      }, {
        key: "_onDragStartAddItem",
        value: function(t) {
          var e = this.options.snap || null,
            i = this.dom.frame.getBoundingClientRect(),
            n = this.options.rtl ? i.right - t.center.x + 10 : t.center.x - i.left - 10,
            o = this.body.util.toTime(n),
            r = this.body.util.getScale(),
            s = this.body.util.getStep(),
            a = e ? e(o, r, s) : o,
            l = {
              type: "range",
              start: a,
              end: a,
              content: "new item"
            },
            u = Ea();
          l[this.itemsData.idProp] = u;
          var h = this.groupFromTarget(t);
          h && (l.group = h.groupId);
          var d = new kd(l, this.conversion, this.options);
          d.id = u, d.data = this._cloneItemData(l), this._addItem(d), this.touchParams.selectedItem = d;
          var c = {
            item: d,
            initialX: t.center.x,
            data: d.data
          };
          this.options.rtl ? c.dragLeft = !0 : c.dragRight = !0, this.touchParams.itemProps = [c], t.stopPropagation()
        }
      }, {
        key: "_onDrag",
        value: function(t) {
          var e = this;
          if (null != this.popup && this.options.showTooltips && !this.popup.hidden) {
            var i = this.body.dom.centerContainer,
              n = i.getBoundingClientRect();
            this.popup.setPosition(t.center.x - n.left + i.offsetLeft, t.center.y - n.top + i.offsetTop), this.popup.show()
          }
          if (this.touchParams.itemProps) {
            var o;
            t.stopPropagation();
            var r = this,
              s = this.options.snap || null,
              a = this.body.dom.root.offsetLeft,
              l = this.options.rtl ? a + this.body.domProps.right.width : a + this.body.domProps.left.width,
              u = this.body.util.getScale(),
              h = this.body.util.getStep(),
              d = this.touchParams.selectedItem,
              c = (this.options.editable.overrideItems || null == d.editable) && this.options.editable.updateGroup || !this.options.editable.overrideItems && null != d.editable && d.editable.updateGroup,
              p = null;
            if (c && d && null != d.data.group) {
              var m = r.groupFromTarget(t);
              m && (p = this._getGroupIndex(m.groupId))
            }
            Yn(o = this.touchParams.itemProps).call(o, (function(i) {
              var n, o, a, m, f, g = r.body.util.toTime(t.center.x - l),
                v = r.body.util.toTime(i.initialX - l);
              n = e.options.rtl ? -(g - v) : g - v;
              var b = e._cloneItemData(i.item.data);
              if (null == i.item.editable || i.item.editable.updateTime || i.item.editable.updateGroup || r.options.editable.overrideItems) {
                if ((e.options.editable.overrideItems || null == d.editable) && e.options.editable.updateTime || !e.options.editable.overrideItems && null != d.editable && d.editable.updateTime)
                  if (i.dragLeft) e.options.rtl ? null != b.end && (a = cl.convert(i.data.end, "Date"), f = new Date(a.valueOf() + n), b.end = s ? s(f, u, h) : f) : null != b.start && (o = cl.convert(i.data.start, "Date"), m = new Date(o.valueOf() + n), b.start = s ? s(m, u, h) : m);
                  else if (i.dragRight) e.options.rtl ? null != b.start && (o = cl.convert(i.data.start, "Date"), m = new Date(o.valueOf() + n), b.start = s ? s(m, u, h) : m) : null != b.end && (a = cl.convert(i.data.end, "Date"), f = new Date(a.valueOf() + n), b.end = s ? s(f, u, h) : f);
                else if (null != b.start)
                  if (o = cl.convert(i.data.start, "Date").valueOf(), m = new Date(o + n), null != b.end) {
                    var y = (a = cl.convert(i.data.end, "Date")).valueOf() - o.valueOf();
                    b.start = s ? s(m, u, h) : m, b.end = new Date(b.start.valueOf() + y)
                  } else b.start = s ? s(m, u, h) : m;
                if (c && !i.dragLeft && !i.dragRight && null != p && null != b.group) {
                  var x = p - i.groupOffset;
                  x = Math.max(0, x), x = Math.min(r.groupIds.length - 1, x), b.group = r.groupIds[x]
                }
                b = e._cloneItemData(b), r.options.onMoving(b, (function(t) {
                  t && i.item.setData(e._cloneItemData(t, "Date"))
                }))
              }
            })), this.body.emitter.emit("_change")
          }
        }
      }, {
        key: "_moveToGroup",
        value: function(t, e) {
          var i = this.groups[e];
          if (i && i.groupId != t.data.group) {
            var n = t.parent;
            n.remove(t), n.order(), t.data.group = i.groupId, i.add(t), i.order()
          }
        }
      }, {
        key: "_onDragEnd",
        value: function(t) {
          var e = this;
          if (this.touchParams.itemIsDragging = !1, this.touchParams.itemProps) {
            t.stopPropagation();
            var i = this,
              n = this.touchParams.itemProps;
            this.touchParams.itemProps = null, Yn(n).call(n, (function(t) {
              var n = t.item.id;
              if (null != i.itemsData.get(n)) {
                var o = e._cloneItemData(t.item.data);
                i.options.onMove(o, (function(o) {
                  o ? (o[e.itemsData.idProp] = n, e.itemsData.update(o)) : (t.item.setData(t.data), i.body.emitter.emit("_change"))
                }))
              } else i.options.onAdd(t.item.data, (function(e) {
                i._removeItem(t.item), e && i.itemsData.add(e), i.body.emitter.emit("_change")
              }))
            }))
          }
        }
      }, {
        key: "_onGroupClick",
        value: function(t) {
          var e = this,
            i = this.groupFromTarget(t);
          ba((function() {
            e.toggleGroupShowNested(i)
          }), 1)
        }
      }, {
        key: "toggleGroupShowNested",
        value: function(t) {
          var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
          if (t && t.nestedGroups) {
            var n = this.groupsData.getDataSet();
            t.showNested = null != i ? !!i : !t.showNested;
            var o = n.get(t.groupId);
            o.showNested = t.showNested;
            for (var r = t.nestedGroups, s = r; s.length > 0;) {
              var a = s;
              s = [];
              for (var l = 0; l < a.length; l++) {
                var u = n.get(a[l]);
                u.nestedGroups && (s = co(s).call(s, u.nestedGroups))
              }
              s.length > 0 && (r = co(r).call(r, s))
            }
            var h = jn(e = n.get(r)).call(e, (function(t) {
              return null == t.visible && (t.visible = !0), t.visible = !!o.showNested, t
            }));
            n.update(co(h).call(h, o)), o.showNested ? (cl.removeClassName(t.dom.label, "collapsed"), cl.addClassName(t.dom.label, "expanded")) : (cl.removeClassName(t.dom.label, "expanded"), cl.addClassName(t.dom.label, "collapsed"))
          }
        }
      }, {
        key: "toggleGroupDragClassName",
        value: function(t) {
          t.dom.label.classList.toggle("vis-group-is-dragging"), t.dom.foreground.classList.toggle("vis-group-is-dragging")
        }
      }, {
        key: "_onGroupDragStart",
        value: function(t) {
          this.groupTouchParams.isDragging || this.options.groupEditable.order && (this.groupTouchParams.group = this.groupFromTarget(t), this.groupTouchParams.group && (t.stopPropagation(), this.groupTouchParams.isDragging = !0, this.toggleGroupDragClassName(this.groupTouchParams.group), this.groupTouchParams.originalOrder = this.groupsData.getIds({
            order: this.options.groupOrder
          })))
        }
      }, {
        key: "_onGroupDrag",
        value: function(t) {
          if (this.options.groupEditable.order && this.groupTouchParams.group) {
            t.stopPropagation();
            var e = this.groupsData;
            this.groupsData instanceof rl && (e = this.groupsData.getDataSet());
            var i = this.groupFromTarget(t);
            if (i && i.height != this.groupTouchParams.group.height) {
              var n = i.top < this.groupTouchParams.group.top,
                o = t.center ? t.center.y : t.clientY,
                r = i.dom.foreground.getBoundingClientRect(),
                s = this.groupTouchParams.group.height;
              if (n) {
                if (r.top + s < o) return
              } else {
                var a = i.height;
                if (r.top + a - s > o) return
              }
            }
            if (i && i != this.groupTouchParams.group) {
              var l = e.get(i.groupId),
                u = e.get(this.groupTouchParams.group.groupId);
              u && l && (this.options.groupOrderSwap(u, l, e), e.update(u), e.update(l));
              var h = e.getIds({
                order: this.options.groupOrder
              });
              if (!cl.equalArray(h, this.groupTouchParams.originalOrder))
                for (var d = this.groupTouchParams.originalOrder, c = this.groupTouchParams.group.groupId, p = Math.min(d.length, h.length), m = 0, f = 0, g = 0; m < p;) {
                  for (; m + f < p && m + g < p && h[m + f] == d[m + g];) m++;
                  if (m + f >= p) break;
                  if (h[m + f] == c) f = 1;
                  else if (d[m + g] == c) g = 1;
                  else {
                    var v = zo(h).call(h, d[m + g]),
                      b = e.get(h[m + f]),
                      y = e.get(d[m + g]);
                    this.options.groupOrderSwap(b, y, e), e.update(b), e.update(y);
                    var x = h[m + f];
                    h[m + f] = d[m + g], h[v] = x, m++
                  }
                }
            }
          }
        }
      }, {
        key: "_onGroupDragEnd",
        value: function(t) {
          if (this.groupTouchParams.isDragging = !1, this.options.groupEditable.order && this.groupTouchParams.group) {
            t.stopPropagation();
            var e = this,
              i = e.groupTouchParams.group.groupId,
              n = e.groupsData.getDataSet(),
              o = cl.extend({}, n.get(i));
            e.options.onMoveGroup(o, (function(t) {
              if (t) t[n._idProp] = i, n.update(t);
              else {
                var o = n.getIds({
                  order: e.options.groupOrder
                });
                if (!cl.equalArray(o, e.groupTouchParams.originalOrder))
                  for (var r = e.groupTouchParams.originalOrder, s = Math.min(r.length, o.length), a = 0; a < s;) {
                    for (; a < s && o[a] == r[a];) a++;
                    if (a >= s) break;
                    var l = zo(o).call(o, r[a]),
                      u = n.get(o[a]),
                      h = n.get(r[a]);
                    e.options.groupOrderSwap(u, h, n), n.update(u), n.update(h);
                    var d = o[a];
                    o[a] = r[a], o[l] = d, a++
                  }
              }
            })), e.body.emitter.emit("groupDragged", {
              groupId: i
            }), this.toggleGroupDragClassName(this.groupTouchParams.group), this.groupTouchParams.group = null
          }
        }
      }, {
        key: "_onSelectItem",
        value: function(t) {
          if (this.options.selectable) {
            var e = t.srcEvent && (t.srcEvent.ctrlKey || t.srcEvent.metaKey),
              i = t.srcEvent && t.srcEvent.shiftKey;
            if (e || i) this._onMultiSelectItem(t);
            else {
              var n = this.getSelection(),
                o = this.itemFromTarget(t),
                r = o && o.selectable ? [o.id] : [];
              this.setSelection(r);
              var s = this.getSelection();
              (s.length > 0 || n.length > 0) && this.body.emitter.emit("select", {
                items: s,
                event: t
              })
            }
          }
        }
      }, {
        key: "_onMouseOver",
        value: function(t) {
          var e = this.itemFromTarget(t);
          if (e && e !== this.itemFromRelatedTarget(t)) {
            var i = e.getTitle();
            if (this.options.showTooltips && i) {
              null == this.popup && (this.popup = new Cd(this.body.dom.root, this.options.tooltip.overflowMethod || "flip")), this.popup.setText(i);
              var n = this.body.dom.centerContainer,
                o = n.getBoundingClientRect();
              this.popup.setPosition(t.clientX - o.left + n.offsetLeft, t.clientY - o.top + n.offsetTop), this.setPopupTimer(this.popup)
            } else this.clearPopupTimer(), null != this.popup && this.popup.hide();
            this.body.emitter.emit("itemover", {
              item: e.id,
              event: t
            })
          }
        }
      }, {
        key: "_onMouseOut",
        value: function(t) {
          var e = this.itemFromTarget(t);
          e && (e !== this.itemFromRelatedTarget(t) && (this.clearPopupTimer(), null != this.popup && this.popup.hide(), this.body.emitter.emit("itemout", {
            item: e.id,
            event: t
          })))
        }
      }, {
        key: "_onMouseMove",
        value: function(t) {
          if (this.itemFromTarget(t) && (null != this.popupTimer && this.setPopupTimer(this.popup), this.options.showTooltips && this.options.tooltip.followMouse && this.popup && !this.popup.hidden)) {
            var e = this.body.dom.centerContainer,
              i = e.getBoundingClientRect();
            this.popup.setPosition(t.clientX - i.left + e.offsetLeft, t.clientY - i.top + e.offsetTop), this.popup.show()
          }
        }
      }, {
        key: "_onMouseWheel",
        value: function(t) {
          this.touchParams.itemIsDragging && this._onDragEnd(t)
        }
      }, {
        key: "_onUpdateItem",
        value: function(t) {
          if (this.options.selectable && (this.options.editable.updateTime || this.options.editable.updateGroup)) {
            var e = this;
            if (t) {
              var i = e.itemsData.get(t.id);
              this.options.onUpdate(i, (function(t) {
                t && e.itemsData.update(t)
              }))
            }
          }
        }
      }, {
        key: "_onDropObjectOnItem",
        value: function(t) {
          var e = this.itemFromTarget(t),
            i = JSON.parse(t.dataTransfer.getData("text"));
          this.options.onDropObjectOnItem(i, e)
        }
      }, {
        key: "_onAddItem",
        value: function(t) {
          if (this.options.selectable && this.options.editable.add) {
            var e, i, n = this,
              o = this.options.snap || null,
              r = this.dom.frame.getBoundingClientRect(),
              s = this.options.rtl ? r.right - t.center.x : t.center.x - r.left,
              a = this.body.util.toTime(s),
              l = this.body.util.getScale(),
              u = this.body.util.getStep();
            "drop" == t.type ? ((i = JSON.parse(t.dataTransfer.getData("text"))).content = i.content ? i.content : "new item", i.start = i.start ? i.start : o ? o(a, l, u) : a, i.type = i.type || "box", i[this.itemsData.idProp] = i.id || Ea(), "range" != i.type || i.end || (e = this.body.util.toTime(s + this.props.width / 5), i.end = o ? o(e, l, u) : e)) : ((i = {
              start: o ? o(a, l, u) : a,
              content: "new item"
            })[this.itemsData.idProp] = Ea(), "range" === this.options.type && (e = this.body.util.toTime(s + this.props.width / 5), i.end = o ? o(e, l, u) : e));
            var h = this.groupFromTarget(t);
            h && (i.group = h.groupId), i = this._cloneItemData(i), this.options.onAdd(i, (function(e) {
              e && (n.itemsData.add(e), "drop" == t.type && n.setSelection([e.id]))
            }))
          }
        }
      }, {
        key: "_onMultiSelectItem",
        value: function(t) {
          var e = this;
          if (this.options.selectable) {
            var n = this.itemFromTarget(t);
            if (n) {
              var o = this.options.multiselect ? this.getSelection() : [];
              if ((t.srcEvent && t.srcEvent.shiftKey || !1 || this.options.sequentialSelection) && this.options.multiselect) {
                var r = this.itemsData.get(n.id).group,
                  s = void 0;
                this.options.multiselectPerGroup && o.length > 0 && (s = this.itemsData.get(o[0]).group), this.options.multiselectPerGroup && null != s && s != r || o.push(n.id);
                var a = i._getItemRange(this.itemsData.get(o));
                if (!this.options.multiselectPerGroup || s == r)
                  for (var l in o = [], this.items)
                    if (this.items.hasOwnProperty(l)) {
                      var u = this.items[l],
                        h = u.data.start,
                        d = void 0 !== u.data.end ? u.data.end : h;
                      !(h >= a.min && d <= a.max) || this.options.multiselectPerGroup && s != this.itemsData.get(u.id).group || u instanceof Id || o.push(u.id)
                    }
              } else {
                var c = zo(o).call(o, n.id); - 1 == c ? o.push(n.id) : ma(o).call(o, c, 1)
              }
              var p = lo(o).call(o, (function(t) {
                return e.getItemById(t).selectable
              }));
              this.setSelection(p), this.body.emitter.emit("select", {
                items: this.getSelection(),
                event: t
              })
            }
          }
        }
      }, {
        key: "itemFromElement",
        value: function(t) {
          for (var e = t; e;) {
            if (e.hasOwnProperty("vis-item")) return e["vis-item"];
            e = e.parentNode
          }
          return null
        }
      }, {
        key: "itemFromTarget",
        value: function(t) {
          return this.itemFromElement(t.target)
        }
      }, {
        key: "itemFromRelatedTarget",
        value: function(t) {
          return this.itemFromElement(t.relatedTarget)
        }
      }, {
        key: "groupFromTarget",
        value: function(t) {
          var e = t.center ? t.center.y : t.clientY,
            i = this.groupIds;
          i.length <= 0 && this.groupsData && (i = this.groupsData.getIds({
            order: this.options.groupOrder
          }));
          for (var n = 0; n < i.length; n++) {
            var o = i[n],
              r = this.groups[o],
              s = r.dom.foreground,
              a = s.getBoundingClientRect();
            if (e >= a.top && e < a.top + s.offsetHeight) return r;
            if ("top" === this.options.orientation.item) {
              if (n === this.groupIds.length - 1 && e > a.top) return r
            } else if (0 === n && e < a.top + s.offset) return r
          }
          return null
        }
      }, {
        key: "_cloneItemData",
        value: function(t, e) {
          var i = cl.extend({}, t);
          return e || (e = this.itemsData.type), null != i.start && (i.start = cl.convert(i.start, e && e.start || "Date")), null != i.end && (i.end = cl.convert(i.end, e && e.end || "Date")), i
        }
      }, {
        key: "_clusterItems",
        value: function() {
          if (this.options.cluster) {
            var t = this.body.range.conversion(this.body.domProps.center.width).scale,
              e = this.clusterGenerator.getClusters(this.clusters, t, this.options.cluster);
            if (this.clusters != e) {
              if (this._detachAllClusters(), e) {
                var i, n = Yd(e);
                try {
                  for (n.s(); !(i = n.n()).done;) {
                    i.value.attach()
                  }
                } catch (t) {
                  n.e(t)
                } finally {
                  n.f()
                }
                this.clusters = e
              }
              this._updateClusters(e)
            }
          }
        }
      }, {
        key: "_detachAllClusters",
        value: function() {
          if (this.options.cluster && this.clusters && this.clusters.length) {
            var t, e = Yd(this.clusters);
            try {
              for (e.s(); !(t = e.n()).done;) {
                t.value.detach()
              }
            } catch (t) {
              e.e(t)
            } finally {
              e.f()
            }
          }
        }
      }, {
        key: "_updateClusters",
        value: function(t) {
          if (this.clusters && this.clusters.length) {
            var e, i, n = new oa(jn(t).call(t, (function(t) {
                return t.id
              }))),
              o = !1,
              r = Yd(lo(e = this.clusters).call(e, (function(t) {
                return !n.has(t.id)
              })));
            try {
              for (r.s(); !(i = r.n()).done;) {
                var s, a, l = i.value,
                  u = zo(s = this.selection).call(s, l.id);
                if (-1 !== u) l.unselect(), ma(a = this.selection).call(a, u, 1), o = !0
              }
            } catch (t) {
              r.e(t)
            } finally {
              r.f()
            }
            if (o) {
              var h = this.getSelection();
              this.body.emitter.emit("select", {
                items: h,
                event: event
              })
            }
          }
          this.clusters = t || []
        }
      }], [{
        key: "_getItemRange",
        value: function(t) {
          var e = null,
            i = null;
          return Yn(t).call(t, (function(t) {
            (null == i || t.start < i) && (i = t.start), null != t.end ? (null == e || t.end > e) && (e = t.end) : (null == e || t.start > e) && (e = t.start)
          })), {
            min: i,
            max: e
          }
        }
      }, {
        key: "itemSetFromTarget",
        value: function(t) {
          for (var e = t.target; e;) {
            if (e.hasOwnProperty("vis-itemset")) return e["vis-itemset"];
            e = e.parentNode
          }
          return null
        }
      }]), i
    }(vl);
  zd.types = {
    background: Id,
    box: yd,
    range: kd,
    point: wd
  }, zd.prototype._onAdd = zd.prototype._onUpdate;
  var Vd, jd = !1,
    Hd = "background: #FFeeee; color: #dd0000",
    Pd = function() {
      function t() {
        Za(this, t)
      }
      return Oa(t, null, [{
        key: "validate",
        value: function(e, i, n) {
          jd = !1, Vd = i;
          var o = i;
          return void 0 !== n && (o = i[n]), t.parse(e, o, []), jd
        }
      }, {
        key: "parse",
        value: function(e, i, n) {
          for (var o in e) e.hasOwnProperty(o) && t.check(o, e, i, n)
        }
      }, {
        key: "check",
        value: function(e, i, n, o) {
          if (void 0 !== n[e] || void 0 !== n.__any__) {
            var r = e,
              s = !0;
            void 0 === n[e] && void 0 !== n.__any__ && (r = "__any__", s = "object" === t.getType(i[e]));
            var a = n[r];
            s && void 0 !== a.__type__ && (a = a.__type__), t.checkFields(e, i, n, r, a, o)
          } else t.getSuggestion(e, n, o)
        }
      }, {
        key: "checkFields",
        value: function(e, i, n, o, r, s) {
          var a = function(i) {
              console.log("%c" + i + t.printLocation(s, e), Hd)
            },
            l = t.getType(i[e]),
            u = r[l];
          void 0 !== u ? "array" === t.getType(u) && -1 === zo(u).call(u, i[e]) ? (a('Invalid option detected in "' + e + '". Allowed values are:' + t.print(u) + ' not "' + i[e] + '". '), jd = !0) : "object" === l && "__any__" !== o && (s = cl.copyAndExtendArray(s, e), t.parse(i[e], n[o], s)) : void 0 === r.any && (a('Invalid type received for "' + e + '". Expected: ' + t.print(vn(r)) + ". Received [" + l + '] "' + i[e] + '"'), jd = !0)
        }
      }, {
        key: "getType",
        value: function(t) {
          var e = $o(t);
          return "object" === e ? null === t ? "null" : t instanceof Boolean ? "boolean" : t instanceof Number ? "number" : t instanceof String ? "string" : Vo(t) ? "array" : t instanceof Date ? "date" : void 0 !== t.nodeType ? "dom" : !0 === t._isAMomentObject ? "moment" : "object" : "number" === e ? "number" : "boolean" === e ? "boolean" : "string" === e ? "string" : void 0 === e ? "undefined" : e
        }
      }, {
        key: "getSuggestion",
        value: function(e, i, n) {
          var o, r = t.findInOptions(e, i, n, !1),
            s = t.findInOptions(e, Vd, [], !0);
          o = void 0 !== r.indexMatch ? " in " + t.printLocation(r.path, e, "") + 'Perhaps it was incomplete? Did you mean: "' + r.indexMatch + '"?\n\n' : s.distance <= 4 && r.distance > s.distance ? " in " + t.printLocation(r.path, e, "") + "Perhaps it was misplaced? Matching option found at: " + t.printLocation(s.path, s.closestMatch, "") : r.distance <= 8 ? '. Did you mean "' + r.closestMatch + '"?' + t.printLocation(r.path, e) : ". Did you mean one of these: " + t.print(vn(i)) + t.printLocation(n, e), console.log('%cUnknown option detected: "' + e + '"' + o, Hd), jd = !0
        }
      }, {
        key: "findInOptions",
        value: function(e, i, n) {
          var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = 1e9,
            s = "",
            a = [],
            l = e.toLowerCase(),
            u = void 0;
          for (var h in i) {
            var d = void 0;
            if (void 0 !== i[h].__type__ && !0 === o) {
              var c = t.findInOptions(e, i[h], cl.copyAndExtendArray(n, h));
              r > c.distance && (s = c.closestMatch, a = c.path, r = c.distance, u = c.indexMatch)
            } else {
              var p; - 1 !== zo(p = h.toLowerCase()).call(p, l) && (u = h), r > (d = t.levenshteinDistance(e, h)) && (s = h, a = cl.copyArray(n), r = d)
            }
          }
          return {
            closestMatch: s,
            path: a,
            distance: r,
            indexMatch: u
          }
        }
      }, {
        key: "printLocation",
        value: function(t, e) {
          for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Problem value found at: \n", n = "\n\n" + i + "options = {\n", o = 0; o < t.length; o++) {
            for (var r = 0; r < o + 1; r++) n += "  ";
            n += t[o] + ": {\n"
          }
          for (var s = 0; s < t.length + 1; s++) n += "  ";
          n += e + "\n";
          for (var a = 0; a < t.length + 1; a++) {
            for (var l = 0; l < t.length - a; l++) n += "  ";
            n += "}\n"
          }
          return n + "\n\n"
        }
      }, {
        key: "print",
        value: function(t) {
          return cs(t).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ", ")
        }
      }, {
        key: "levenshteinDistance",
        value: function(t, e) {
          if (0 === t.length) return e.length;
          if (0 === e.length) return t.length;
          var i, n, o = [];
          for (i = 0; i <= e.length; i++) o[i] = [i];
          for (n = 0; n <= t.length; n++) o[0][n] = n;
          for (i = 1; i <= e.length; i++)
            for (n = 1; n <= t.length; n++) e.charAt(i - 1) == t.charAt(n - 1) ? o[i][n] = o[i - 1][n - 1] : o[i][n] = Math.min(o[i - 1][n - 1] + 1, Math.min(o[i][n - 1] + 1, o[i - 1][n] + 1));
          return o[e.length][t.length]
        }
      }]), t
    }(),
    Jd = "string",
    Kd = "boolean",
    qd = "number",
    $d = "object",
    tc = {
      configure: {
        enabled: {
          boolean: Kd
        },
        filter: {
          boolean: Kd,
          function: "function"
        },
        container: {
          dom: "dom"
        },
        __type__: {
          object: $d,
          boolean: Kd,
          function: "function"
        }
      },
      align: {
        string: Jd
      },
      alignCurrentTime: {
        string: Jd,
        undefined: "undefined"
      },
      rtl: {
        boolean: Kd,
        undefined: "undefined"
      },
      rollingMode: {
        follow: {
          boolean: Kd
        },
        offset: {
          number: qd,
          undefined: "undefined"
        },
        __type__: {
          object: $d
        }
      },
      onTimeout: {
        timeoutMs: {
          number: qd
        },
        callback: {
          function: "function"
        },
        __type__: {
          object: $d
        }
      },
      verticalScroll: {
        boolean: Kd,
        undefined: "undefined"
      },
      horizontalScroll: {
        boolean: Kd,
        undefined: "undefined"
      },
      autoResize: {
        boolean: Kd
      },
      throttleRedraw: {
        number: qd
      },
      clickToUse: {
        boolean: Kd
      },
      dataAttributes: {
        string: Jd,
        array: "array"
      },
      editable: {
        add: {
          boolean: Kd,
          undefined: "undefined"
        },
        remove: {
          boolean: Kd,
          undefined: "undefined"
        },
        updateGroup: {
          boolean: Kd,
          undefined: "undefined"
        },
        updateTime: {
          boolean: Kd,
          undefined: "undefined"
        },
        overrideItems: {
          boolean: Kd,
          undefined: "undefined"
        },
        __type__: {
          boolean: Kd,
          object: $d
        }
      },
      end: {
        number: qd,
        date: "date",
        string: Jd,
        moment: "moment"
      },
      format: {
        minorLabels: {
          millisecond: {
            string: Jd,
            undefined: "undefined"
          },
          second: {
            string: Jd,
            undefined: "undefined"
          },
          minute: {
            string: Jd,
            undefined: "undefined"
          },
          hour: {
            string: Jd,
            undefined: "undefined"
          },
          weekday: {
            string: Jd,
            undefined: "undefined"
          },
          day: {
            string: Jd,
            undefined: "undefined"
          },
          week: {
            string: Jd,
            undefined: "undefined"
          },
          month: {
            string: Jd,
            undefined: "undefined"
          },
          year: {
            string: Jd,
            undefined: "undefined"
          },
          __type__: {
            object: $d,
            function: "function"
          }
        },
        majorLabels: {
          millisecond: {
            string: Jd,
            undefined: "undefined"
          },
          second: {
            string: Jd,
            undefined: "undefined"
          },
          minute: {
            string: Jd,
            undefined: "undefined"
          },
          hour: {
            string: Jd,
            undefined: "undefined"
          },
          weekday: {
            string: Jd,
            undefined: "undefined"
          },
          day: {
            string: Jd,
            undefined: "undefined"
          },
          week: {
            string: Jd,
            undefined: "undefined"
          },
          month: {
            string: Jd,
            undefined: "undefined"
          },
          year: {
            string: Jd,
            undefined: "undefined"
          },
          __type__: {
            object: $d,
            function: "function"
          }
        },
        __type__: {
          object: $d
        }
      },
      moment: {
        function: "function"
      },
      groupHeightMode: {
        string: Jd
      },
      groupOrder: {
        string: Jd,
        function: "function"
      },
      groupEditable: {
        add: {
          boolean: Kd,
          undefined: "undefined"
        },
        remove: {
          boolean: Kd,
          undefined: "undefined"
        },
        order: {
          boolean: Kd,
          undefined: "undefined"
        },
        __type__: {
          boolean: Kd,
          object: $d
        }
      },
      groupOrderSwap: {
        function: "function"
      },
      height: {
        string: Jd,
        number: qd
      },
      hiddenDates: {
        start: {
          date: "date",
          number: qd,
          string: Jd,
          moment: "moment"
        },
        end: {
          date: "date",
          number: qd,
          string: Jd,
          moment: "moment"
        },
        repeat: {
          string: Jd
        },
        __type__: {
          object: $d,
          array: "array"
        }
      },
      itemsAlwaysDraggable: {
        item: {
          boolean: Kd,
          undefined: "undefined"
        },
        range: {
          boolean: Kd,
          undefined: "undefined"
        },
        __type__: {
          boolean: Kd,
          object: $d
        }
      },
      limitSize: {
        boolean: Kd
      },
      locale: {
        string: Jd
      },
      locales: {
        __any__: {
          any: "any"
        },
        __type__: {
          object: $d
        }
      },
      longSelectPressTime: {
        number: qd
      },
      margin: {
        axis: {
          number: qd
        },
        item: {
          horizontal: {
            number: qd,
            undefined: "undefined"
          },
          vertical: {
            number: qd,
            undefined: "undefined"
          },
          __type__: {
            object: $d,
            number: qd
          }
        },
        __type__: {
          object: $d,
          number: qd
        }
      },
      max: {
        date: "date",
        number: qd,
        string: Jd,
        moment: "moment"
      },
      maxHeight: {
        number: qd,
        string: Jd
      },
      maxMinorChars: {
        number: qd
      },
      min: {
        date: "date",
        number: qd,
        string: Jd,
        moment: "moment"
      },
      minHeight: {
        number: qd,
        string: Jd
      },
      moveable: {
        boolean: Kd
      },
      multiselect: {
        boolean: Kd
      },
      multiselectPerGroup: {
        boolean: Kd
      },
      onAdd: {
        function: "function"
      },
      onDropObjectOnItem: {
        function: "function"
      },
      onUpdate: {
        function: "function"
      },
      onMove: {
        function: "function"
      },
      onMoving: {
        function: "function"
      },
      onRemove: {
        function: "function"
      },
      onAddGroup: {
        function: "function"
      },
      onMoveGroup: {
        function: "function"
      },
      onRemoveGroup: {
        function: "function"
      },
      onInitialDrawComplete: {
        function: "function"
      },
      order: {
        function: "function"
      },
      orientation: {
        axis: {
          string: Jd,
          undefined: "undefined"
        },
        item: {
          string: Jd,
          undefined: "undefined"
        },
        __type__: {
          string: Jd,
          object: $d
        }
      },
      selectable: {
        boolean: Kd
      },
      sequentialSelection: {
        boolean: Kd
      },
      showCurrentTime: {
        boolean: Kd
      },
      showMajorLabels: {
        boolean: Kd
      },
      showMinorLabels: {
        boolean: Kd
      },
      showWeekScale: {
        boolean: Kd
      },
      stack: {
        boolean: Kd
      },
      stackSubgroups: {
        boolean: Kd
      },
      cluster: {
        maxItems: {
          number: qd,
          undefined: "undefined"
        },
        titleTemplate: {
          string: Jd,
          undefined: "undefined"
        },
        clusterCriteria: {
          function: "function",
          undefined: "undefined"
        },
        showStipes: {
          boolean: Kd,
          undefined: "undefined"
        },
        fitOnDoubleClick: {
          boolean: Kd,
          undefined: "undefined"
        },
        __type__: {
          boolean: Kd,
          object: $d
        }
      },
      snap: {
        function: "function",
        null: "null"
      },
      start: {
        date: "date",
        number: qd,
        string: Jd,
        moment: "moment"
      },
      template: {
        function: "function"
      },
      loadingScreenTemplate: {
        function: "function"
      },
      groupTemplate: {
        function: "function"
      },
      visibleFrameTemplate: {
        string: Jd,
        function: "function"
      },
      showTooltips: {
        boolean: Kd
      },
      tooltip: {
        followMouse: {
          boolean: Kd
        },
        overflowMethod: {
          string: ["cap", "flip", "none"]
        },
        delay: {
          number: qd
        },
        template: {
          function: "function"
        },
        __type__: {
          object: $d
        }
      },
      tooltipOnItemUpdateTime: {
        template: {
          function: "function"
        },
        __type__: {
          boolean: Kd,
          object: $d
        }
      },
      timeAxis: {
        scale: {
          string: Jd,
          undefined: "undefined"
        },
        step: {
          number: qd,
          undefined: "undefined"
        },
        __type__: {
          object: $d
        }
      },
      type: {
        string: Jd
      },
      width: {
        string: Jd,
        number: qd
      },
      preferZoom: {
        boolean: Kd
      },
      zoomable: {
        boolean: Kd
      },
      zoomKey: {
        string: ["ctrlKey", "altKey", "shiftKey", "metaKey", ""]
      },
      zoomFriction: {
        number: qd
      },
      zoomMax: {
        number: qd
      },
      zoomMin: {
        number: qd
      },
      __type__: {
        object: $d
      }
    },
    ec = {
      global: {
        align: ["center", "left", "right"],
        alignCurrentTime: ["none", "year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute", "second"],
        direction: !1,
        autoResize: !0,
        clickToUse: !1,
        editable: {
          add: !1,
          remove: !1,
          updateGroup: !1,
          updateTime: !1
        },
        end: "",
        format: {
          minorLabels: {
            // millisecond: "SSS",
            // second: "s",
            // minute: "HH:mm",
            // hour: "HH:mm",
            weekday: "ddd D",
            day: "D",
            week: "w",
            month: "MMM",
            year: "YYYY"
          },
          majorLabels: {
            // millisecond: "HH:mm:ss",
            // second: "D MMMM HH:mm",
            // minute: "ddd D MMMM",
            // hour: "ddd D MMMM",
            weekday: "MMMM YYYY",
            day: "MMMM YYYY",
            week: "MMMM YYYY",
            month: "YYYY",
            year: ""
          }
        },
        groupHeightMode: ["auto", "fixed", "fitItems"],
        groupsDraggable: !1,
        height: "",
        locale: "",
        longSelectPressTime: 251,
        margin: {
          axis: [20, 0, 100, 1],
          item: {
            horizontal: [10, 0, 100, 1],
            vertical: [10, 0, 100, 1]
          }
        },
        max: "",
        maxHeight: "",
        maxMinorChars: [7, 0, 20, 1],
        min: "",
        minHeight: "",
        moveable: !1,
        multiselect: !1,
        multiselectPerGroup: !1,
        orientation: {
          axis: ["both", "bottom", "top"],
          item: ["bottom", "top"]
        },
        preferZoom: !1,
        selectable: !0,
        showCurrentTime: !1,
        showMajorLabels: !0,
        showMinorLabels: !0,
        stack: !0,
        stackSubgroups: !0,
        cluster: !1,
        start: "",
        showTooltips: !0,
        tooltip: {
          followMouse: !1,
          overflowMethod: "flip",
          delay: [500, 0, 99999, 100]
        },
        tooltipOnItemUpdateTime: !1,
        type: ["box", "point", "range", "background"],
        width: "100%",
        zoomable: !0,
        zoomKey: ["ctrlKey", "altKey", "shiftKey", "metaKey", ""],
        zoomMax: [31536e10, 10, 31536e10, 1],
        zoomMin: [10, 10, 31536e10, 1]
      }
    };
  bt({
    target: "Array",
    proto: !0
  }, {
    fill: function(t) {
      for (var e = yt(this), i = At(e.length), n = arguments.length, o = Tt(n > 1 ? arguments[1] : void 0, i), r = n > 2 ? arguments[2] : void 0, s = void 0 === r ? i : Tt(r, i); s > o;) e[o++] = t;
      return e
    }
  });
  var ic = In("Array").fill,
    nc = Array.prototype,
    oc = function(t) {
      var e = t.fill;
      return t === nc || t instanceof Array && e === nc.fill ? ic : e
    },
    rc = {
      black: "#000000",
      navy: "#000080",
      darkblue: "#00008B",
      mediumblue: "#0000CD",
      blue: "#0000FF",
      darkgreen: "#006400",
      green: "#008000",
      teal: "#008080",
      darkcyan: "#008B8B",
      deepskyblue: "#00BFFF",
      darkturquoise: "#00CED1",
      mediumspringgreen: "#00FA9A",
      lime: "#00FF00",
      springgreen: "#00FF7F",
      aqua: "#00FFFF",
      cyan: "#00FFFF",
      midnightblue: "#191970",
      dodgerblue: "#1E90FF",
      lightseagreen: "#20B2AA",
      forestgreen: "#228B22",
      seagreen: "#2E8B57",
      darkslategray: "#2F4F4F",
      limegreen: "#32CD32",
      mediumseagreen: "#3CB371",
      turquoise: "#40E0D0",
      royalblue: "#4169E1",
      steelblue: "#4682B4",
      darkslateblue: "#483D8B",
      mediumturquoise: "#48D1CC",
      indigo: "#4B0082",
      darkolivegreen: "#556B2F",
      cadetblue: "#5F9EA0",
      cornflowerblue: "#6495ED",
      mediumaquamarine: "#66CDAA",
      dimgray: "#696969",
      slateblue: "#6A5ACD",
      olivedrab: "#6B8E23",
      slategray: "#708090",
      lightslategray: "#778899",
      mediumslateblue: "#7B68EE",
      lawngreen: "#7CFC00",
      chartreuse: "#7FFF00",
      aquamarine: "#7FFFD4",
      maroon: "#800000",
      purple: "#800080",
      olive: "#808000",
      gray: "#808080",
      skyblue: "#87CEEB",
      lightskyblue: "#87CEFA",
      blueviolet: "#8A2BE2",
      darkred: "#8B0000",
      darkmagenta: "#8B008B",
      saddlebrown: "#8B4513",
      darkseagreen: "#8FBC8F",
      lightgreen: "#90EE90",
      mediumpurple: "#9370D8",
      darkviolet: "#9400D3",
      palegreen: "#98FB98",
      darkorchid: "#9932CC",
      yellowgreen: "#9ACD32",
      sienna: "#A0522D",
      brown: "#A52A2A",
      darkgray: "#A9A9A9",
      lightblue: "#ADD8E6",
      greenyellow: "#ADFF2F",
      paleturquoise: "#AFEEEE",
      lightsteelblue: "#B0C4DE",
      powderblue: "#B0E0E6",
      firebrick: "#B22222",
      darkgoldenrod: "#B8860B",
      mediumorchid: "#BA55D3",
      rosybrown: "#BC8F8F",
      darkkhaki: "#BDB76B",
      silver: "#C0C0C0",
      mediumvioletred: "#C71585",
      indianred: "#CD5C5C",
      peru: "#CD853F",
      chocolate: "#D2691E",
      tan: "#D2B48C",
      lightgrey: "#D3D3D3",
      palevioletred: "#D87093",
      thistle: "#D8BFD8",
      orchid: "#DA70D6",
      goldenrod: "#DAA520",
      crimson: "#DC143C",
      gainsboro: "#DCDCDC",
      plum: "#DDA0DD",
      burlywood: "#DEB887",
      lightcyan: "#E0FFFF",
      lavender: "#E6E6FA",
      darksalmon: "#E9967A",
      violet: "#EE82EE",
      palegoldenrod: "#EEE8AA",
      lightcoral: "#F08080",
      khaki: "#F0E68C",
      aliceblue: "#F0F8FF",
      honeydew: "#F0FFF0",
      azure: "#F0FFFF",
      sandybrown: "#F4A460",
      wheat: "#F5DEB3",
      beige: "#F5F5DC",
      whitesmoke: "#F5F5F5",
      mintcream: "#F5FFFA",
      ghostwhite: "#F8F8FF",
      salmon: "#FA8072",
      antiquewhite: "#FAEBD7",
      linen: "#FAF0E6",
      lightgoldenrodyellow: "#FAFAD2",
      oldlace: "#FDF5E6",
      red: "#FF0000",
      fuchsia: "#FF00FF",
      magenta: "#FF00FF",
      deeppink: "#FF1493",
      orangered: "#FF4500",
      tomato: "#FF6347",
      hotpink: "#FF69B4",
      coral: "#FF7F50",
      darkorange: "#FF8C00",
      lightsalmon: "#FFA07A",
      orange: "#FFA500",
      lightpink: "#FFB6C1",
      pink: "#FFC0CB",
      gold: "#FFD700",
      peachpuff: "#FFDAB9",
      navajowhite: "#FFDEAD",
      moccasin: "#FFE4B5",
      bisque: "#FFE4C4",
      mistyrose: "#FFE4E1",
      blanchedalmond: "#FFEBCD",
      papayawhip: "#FFEFD5",
      lavenderblush: "#FFF0F5",
      seashell: "#FFF5EE",
      cornsilk: "#FFF8DC",
      lemonchiffon: "#FFFACD",
      floralwhite: "#FFFAF0",
      snow: "#FFFAFA",
      yellow: "#FFFF00",
      lightyellow: "#FFFFE0",
      ivory: "#FFFFF0",
      white: "#FFFFFF"
    },
    sc = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        Za(this, t), this.pixelRatio = e, this.generated = !1, this.centerCoordinates = {
          x: 144.5,
          y: 144.5
        }, this.r = 289 * .49, this.color = {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }, this.hueCircle = void 0, this.initialColor = {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }, this.previousColor = void 0, this.applied = !1, this.updateCallback = function() {}, this.closeCallback = function() {}, this._create()
      }
      return Oa(t, [{
        key: "insertTo",
        value: function(t) {
          void 0 !== this.hammer && (this.hammer.destroy(), this.hammer = void 0), this.container = t, this.container.appendChild(this.frame), this._bindHammer(), this._setSize()
        }
      }, {
        key: "setUpdateCallback",
        value: function(t) {
          if ("function" != typeof t) throw new Error("Function attempted to set as colorPicker update callback is not a function.");
          this.updateCallback = t
        }
      }, {
        key: "setCloseCallback",
        value: function(t) {
          if ("function" != typeof t) throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
          this.closeCallback = t
        }
      }, {
        key: "_isColorString",
        value: function(t) {
          if ("string" == typeof t) return rc[t]
        }
      }, {
        key: "setColor",
        value: function(t) {
          var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if ("none" !== t) {
            var i, n = this._isColorString(t);
            if (void 0 !== n && (t = n), !0 === cl.isString(t)) {
              if (!0 === cl.isValidRGB(t)) {
                var o = t.substr(4).substr(0, t.length - 5).split(",");
                i = {
                  r: o[0],
                  g: o[1],
                  b: o[2],
                  a: 1
                }
              } else if (!0 === cl.isValidRGBA(t)) {
                var r = t.substr(5).substr(0, t.length - 6).split(",");
                i = {
                  r: r[0],
                  g: r[1],
                  b: r[2],
                  a: r[3]
                }
              } else if (!0 === cl.isValidHex(t)) {
                var s = cl.hexToRGB(t);
                i = {
                  r: s.r,
                  g: s.g,
                  b: s.b,
                  a: 1
                }
              }
            } else if (t instanceof Object && void 0 !== t.r && void 0 !== t.g && void 0 !== t.b) {
              var a = void 0 !== t.a ? t.a : "1.0";
              i = {
                r: t.r,
                g: t.g,
                b: t.b,
                a: a
              }
            }
            if (void 0 === i) throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + cs(t));
            this._setColor(i, e)
          }
        }
      }, {
        key: "show",
        value: function() {
          void 0 !== this.closeCallback && (this.closeCallback(), this.closeCallback = void 0), this.applied = !1, this.frame.style.display = "block", this._generateHueCircle()
        }
      }, {
        key: "_hide",
        value: function() {
          var t = this,
            e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          !0 === e && (this.previousColor = cl.extend({}, this.color)), !0 === this.applied && this.updateCallback(this.initialColor), this.frame.style.display = "none", ba((function() {
            void 0 !== t.closeCallback && (t.closeCallback(), t.closeCallback = void 0)
          }), 0)
        }
      }, {
        key: "_save",
        value: function() {
          this.updateCallback(this.color), this.applied = !1, this._hide()
        }
      }, {
        key: "_apply",
        value: function() {
          this.applied = !0, this.updateCallback(this.color), this._updatePicker(this.color)
        }
      }, {
        key: "_loadLast",
        value: function() {
          void 0 !== this.previousColor ? this.setColor(this.previousColor, !1) : alert("There is no last color to load...")
        }
      }, {
        key: "_setColor",
        value: function(t) {
          var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          !0 === e && (this.initialColor = cl.extend({}, t)), this.color = t;
          var i = cl.RGBToHSV(t.r, t.g, t.b),
            n = 2 * Math.PI,
            o = this.r * i.s,
            r = this.centerCoordinates.x + o * Math.sin(n * i.h),
            s = this.centerCoordinates.y + o * Math.cos(n * i.h);
          this.colorPickerSelector.style.left = r - .5 * this.colorPickerSelector.clientWidth + "px", this.colorPickerSelector.style.top = s - .5 * this.colorPickerSelector.clientHeight + "px", this._updatePicker(t)
        }
      }, {
        key: "_setOpacity",
        value: function(t) {
          this.color.a = t / 100, this._updatePicker(this.color)
        }
      }, {
        key: "_setBrightness",
        value: function(t) {
          var e = cl.RGBToHSV(this.color.r, this.color.g, this.color.b);
          e.v = t / 100;
          var i = cl.HSVToRGB(e.h, e.s, e.v);
          i.a = this.color.a, this.color = i, this._updatePicker()
        }
      }, {
        key: "_updatePicker",
        value: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.color,
            e = cl.RGBToHSV(t.r, t.g, t.b),
            i = this.colorPickerCanvas.getContext("2d");
          void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1)), i.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
          var n = this.colorPickerCanvas.clientWidth,
            o = this.colorPickerCanvas.clientHeight;
          i.clearRect(0, 0, n, o), i.putImageData(this.hueCircle, 0, 0), i.fillStyle = "rgba(0,0,0," + (1 - e.v) + ")", i.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), oc(i).call(i), this.brightnessRange.value = 100 * e.v, this.opacityRange.value = 100 * t.a, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
        }
      }, {
        key: "_setSize",
        value: function() {
          this.colorPickerCanvas.style.width = "100%", this.colorPickerCanvas.style.height = "100%", this.colorPickerCanvas.width = 289 * this.pixelRatio, this.colorPickerCanvas.height = 289 * this.pixelRatio
        }
      }, {
        key: "_create",
        value: function() {
          var t, e, i, n;
          if (this.frame = document.createElement("div"), this.frame.className = "vis-color-picker", this.colorPickerDiv = document.createElement("div"), this.colorPickerSelector = document.createElement("div"), this.colorPickerSelector.className = "vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas = document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), this.colorPickerCanvas.getContext) {
            var o = this.colorPickerCanvas.getContext("2d");
            this.pixelRatio = (window.devicePixelRatio || 1) / (o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1), this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
          } else {
            var r = document.createElement("DIV");
            r.style.color = "red", r.style.fontWeight = "bold", r.style.padding = "10px", r.innerHTML = "Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(r)
          }
          this.colorPickerDiv.className = "vis-color", this.opacityDiv = document.createElement("div"), this.opacityDiv.className = "vis-opacity", this.brightnessDiv = document.createElement("div"), this.brightnessDiv.className = "vis-brightness", this.arrowDiv = document.createElement("div"), this.arrowDiv.className = "vis-arrow", this.opacityRange = document.createElement("input");
          try {
            this.opacityRange.type = "range", this.opacityRange.min = "0", this.opacityRange.max = "100"
          } catch (t) {}
          this.opacityRange.value = "100", this.opacityRange.className = "vis-range", this.brightnessRange = document.createElement("input");
          try {
            this.brightnessRange.type = "range", this.brightnessRange.min = "0", this.brightnessRange.max = "100"
          } catch (t) {}
          this.brightnessRange.value = "100", this.brightnessRange.className = "vis-range", this.opacityDiv.appendChild(this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange);
          var s = this;
          this.opacityRange.onchange = function() {
            s._setOpacity(this.value)
          }, this.opacityRange.oninput = function() {
            s._setOpacity(this.value)
          }, this.brightnessRange.onchange = function() {
            s._setBrightness(this.value)
          }, this.brightnessRange.oninput = function() {
            s._setBrightness(this.value)
          }, this.brightnessLabel = document.createElement("div"), this.brightnessLabel.className = "vis-label vis-brightness", this.brightnessLabel.innerHTML = "brightness:", this.opacityLabel = document.createElement("div"), this.opacityLabel.className = "vis-label vis-opacity", this.opacityLabel.innerHTML = "opacity:", this.newColorDiv = document.createElement("div"), this.newColorDiv.className = "vis-new-color", this.newColorDiv.innerHTML = "new", this.initialColorDiv = document.createElement("div"), this.initialColorDiv.className = "vis-initial-color", this.initialColorDiv.innerHTML = "initial", this.cancelButton = document.createElement("div"), this.cancelButton.className = "vis-button vis-cancel", this.cancelButton.innerHTML = "cancel", this.cancelButton.onclick = Fa(t = this._hide).call(t, this, !1), this.applyButton = document.createElement("div"), this.applyButton.className = "vis-button vis-apply", this.applyButton.innerHTML = "apply", this.applyButton.onclick = Fa(e = this._apply).call(e, this), this.saveButton = document.createElement("div"), this.saveButton.className = "vis-button vis-save", this.saveButton.innerHTML = "save", this.saveButton.onclick = Fa(i = this._save).call(i, this), this.loadButton = document.createElement("div"), this.loadButton.className = "vis-button vis-load", this.loadButton.innerHTML = "load last", this.loadButton.onclick = Fa(n = this._loadLast).call(n, this), this.frame.appendChild(this.colorPickerDiv), this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv), this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this.frame.appendChild(this.loadButton)
        }
      }, {
        key: "_bindHammer",
        value: function() {
          var t = this;
          this.drag = {}, this.pinch = {}, this.hammer = new mh(this.colorPickerCanvas), this.hammer.get("pinch").set({
            enable: !0
          }), fh(this.hammer, (function(e) {
            t._moveSelector(e)
          })), this.hammer.on("tap", (function(e) {
            t._moveSelector(e)
          })), this.hammer.on("panstart", (function(e) {
            t._moveSelector(e)
          })), this.hammer.on("panmove", (function(e) {
            t._moveSelector(e)
          })), this.hammer.on("panend", (function(e) {
            t._moveSelector(e)
          }))
        }
      }, {
        key: "_generateHueCircle",
        value: function() {
          if (!1 === this.generated) {
            var t = this.colorPickerCanvas.getContext("2d");
            void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)), t.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
            var e, i, n, o, r = this.colorPickerCanvas.clientWidth,
              s = this.colorPickerCanvas.clientHeight;
            t.clearRect(0, 0, r, s), this.centerCoordinates = {
              x: .5 * r,
              y: .5 * s
            }, this.r = .49 * r;
            var a, l = 2 * Math.PI / 360,
              u = 1 / this.r;
            for (n = 0; n < 360; n++)
              for (o = 0; o < this.r; o++) e = this.centerCoordinates.x + o * Math.sin(l * n), i = this.centerCoordinates.y + o * Math.cos(l * n), a = cl.HSVToRGB(n * (1 / 360), o * u, 1), t.fillStyle = "rgb(" + a.r + "," + a.g + "," + a.b + ")", t.fillRect(e - .5, i - .5, 2, 2);
            t.strokeStyle = "rgba(0,0,0,1)", t.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), t.stroke(), this.hueCircle = t.getImageData(0, 0, r, s)
          }
          this.generated = !0
        }
      }, {
        key: "_moveSelector",
        value: function(t) {
          var e = this.colorPickerDiv.getBoundingClientRect(),
            i = t.center.x - e.left,
            n = t.center.y - e.top,
            o = .5 * this.colorPickerDiv.clientHeight,
            r = .5 * this.colorPickerDiv.clientWidth,
            s = i - r,
            a = n - o,
            l = Math.atan2(s, a),
            u = .98 * Math.min(Math.sqrt(s * s + a * a), r),
            h = Math.cos(l) * u + o,
            d = Math.sin(l) * u + r;
          this.colorPickerSelector.style.top = h - .5 * this.colorPickerSelector.clientHeight + "px", this.colorPickerSelector.style.left = d - .5 * this.colorPickerSelector.clientWidth + "px";
          var c = l / (2 * Math.PI);
          c = c < 0 ? c + 1 : c;
          var p = u / this.r,
            m = cl.RGBToHSV(this.color.r, this.color.g, this.color.b);
          m.h = c, m.s = p;
          var f = cl.HSVToRGB(m.h, m.s, m.v);
          f.a = this.color.a, this.color = f, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
        }
      }]), t
    }();
  vh('div.vis-configuration{position:relative;display:block;float:left;font-size:12px}div.vis-configuration-wrapper{display:block;width:700px;height:px;}div.vis-configuration-wrapper:after{clear:both;content:"";display:block}div.vis-configuration.vis-config-option-container{display:block;width:495px;background-color:#fff;border:2px solid #f7f8fa;border-radius:4px;margin-top:20px;left:10px;padding-left:5px}div.vis-configuration.vis-config-button{display:block;width:495px;height:25px;vertical-align:middle;line-height:25px;background-color:#f7f8fa;border:2px solid #ceced0;border-radius:4px;margin-top:20px;left:10px;padding-left:5px;cursor:pointer;margin-bottom:30px}div.vis-configuration.vis-config-button.hover{background-color:#4588e6;border:2px solid #214373;color:#fff}div.vis-configuration.vis-config-item{display:block;float:left;width:495px;height:25px;vertical-align:middle;line-height:25px}div.vis-configuration.vis-config-item.vis-config-s2{left:10px;background-color:#f7f8fa;padding-left:5px;border-radius:3px}div.vis-configuration.vis-config-item.vis-config-s3{left:20px;background-color:#e4e9f0;padding-left:5px;border-radius:3px}div.vis-configuration.vis-config-item.vis-config-s4{left:30px;background-color:#cfd8e6;padding-left:5px;border-radius:3px}div.vis-configuration.vis-config-header{font-size:18px;font-weight:700}div.vis-configuration.vis-config-label{width:120px;height:25px;line-height:25px}div.vis-configuration.vis-config-label.vis-config-s3{width:110px}div.vis-configuration.vis-config-label.vis-config-s4{width:100px}div.vis-configuration.vis-config-colorBlock{top:1px;width:30px;height:19px;border:1px solid #444;border-radius:2px;padding:0;margin:0;cursor:pointer}input.vis-configuration.vis-config-checkbox{left:-5px}input.vis-configuration.vis-config-rangeinput{position:relative;top:-5px;width:60px;padding:1px;margin:0;pointer-events:none}input.vis-configuration.vis-config-range{-webkit-appearance:none;border:0 solid #fff;background-color:transparent;width:300px;height:20px}input.vis-configuration.vis-config-range::-webkit-slider-runnable-track{width:300px;height:5px;background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);border:1px solid #999;box-shadow:0 0 3px 0 #aaa;border-radius:3px}input.vis-configuration.vis-config-range::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid #14334b;height:17px;width:17px;border-radius:50%;background:#3876c2;background:-moz-linear-gradient(top,#3876c2 0,#385380 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3876c2),color-stop(100%,#385380));background:-webkit-linear-gradient(top,#3876c2,#385380);background:-o-linear-gradient(top,#3876c2 0,#385380 100%);background:-ms-linear-gradient(top,#3876c2 0,#385380 100%);background:linear-gradient(180deg,#3876c2 0,#385380);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#3876c2",endColorstr="#385380",GradientType=0);box-shadow:0 0 1px 0 #111927;margin-top:-7px}input.vis-configuration.vis-config-range:focus{outline:none}input.vis-configuration.vis-config-range:focus::-webkit-slider-runnable-track{background:#9d9d9d;background:-moz-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#9d9d9d),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#9d9d9d,#c8c8c8 99%);background:-o-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:linear-gradient(180deg,#9d9d9d 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#9d9d9d",endColorstr="#c8c8c8",GradientType=0)}input.vis-configuration.vis-config-range::-moz-range-track{width:300px;height:10px;background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);border:1px solid #999;box-shadow:0 0 3px 0 #aaa;border-radius:3px}input.vis-configuration.vis-config-range::-moz-range-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#385380}input.vis-configuration.vis-config-range:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input.vis-configuration.vis-config-range::-ms-track{width:300px;height:5px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input.vis-configuration.vis-config-range::-ms-fill-lower{background:#777;border-radius:10px}input.vis-configuration.vis-config-range::-ms-fill-upper{background:#ddd;border-radius:10px}input.vis-configuration.vis-config-range::-ms-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#385380}input.vis-configuration.vis-config-range:focus::-ms-fill-lower{background:#888}input.vis-configuration.vis-config-range:focus::-ms-fill-upper{background:#ccc}.vis-configuration-popup{position:absolute;background:rgba(57,76,89,.85);border:2px solid #f2faff;line-height:30px;height:30px;width:150px;text-align:center;color:#fff;font-size:14px;border-radius:4px;-webkit-transition:opacity .3s ease-in-out;-moz-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.vis-configuration-popup:after,.vis-configuration-popup:before{left:100%;top:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.vis-configuration-popup:after{border-color:rgba(136,183,213,0) rgba(136,183,213,0) rgba(136,183,213,0) rgba(57,76,89,.85);border-width:8px;margin-top:-8px}.vis-configuration-popup:before{border-color:rgba(194,225,245,0) rgba(194,225,245,0) rgba(194,225,245,0) #f2faff;border-width:12px;margin-top:-12px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUNJLGlCQUFpQixDQUNqQixhQUFhLENBQ2IsVUFBVSxDQUNWLGNBQ0osQ0FFQSw4QkFDSSxhQUFhLENBQ2IsV0FDSixDQUVBLG9DQUNFLFVBQVcsQ0FDWCxVQUFXLENBQ1gsYUFDRixDQUVBLGtEQUNJLGFBQWEsQ0FDYixXQUFXLENBQ1gscUJBQXlCLENBQ3pCLHdCQUF3QixDQUN4QixpQkFBaUIsQ0FDakIsZUFBZSxDQUNmLFNBQVMsQ0FDVCxnQkFDSixDQUVBLHdDQUNJLGFBQWEsQ0FDYixXQUFXLENBQ1gsV0FBVyxDQUNYLHFCQUFzQixDQUN0QixnQkFBZ0IsQ0FDaEIsd0JBQXlCLENBQ3pCLHdCQUF3QixDQUN4QixpQkFBaUIsQ0FDakIsZUFBZSxDQUNmLFNBQVMsQ0FDVCxnQkFBZ0IsQ0FDaEIsY0FBZSxDQUNmLGtCQUNKLENBRUEsOENBQ0ksd0JBQXlCLENBQ3pCLHdCQUF3QixDQUN4QixVQUNKLENBRUEsc0NBQ0ksYUFBYSxDQUNiLFVBQVUsQ0FDVixXQUFXLENBQ1gsV0FBVyxDQUNYLHFCQUFzQixDQUN0QixnQkFDSixDQUdBLG9EQUNJLFNBQVMsQ0FDVCx3QkFBeUIsQ0FDekIsZ0JBQWdCLENBQ2hCLGlCQUNKLENBQ0Esb0RBQ0ksU0FBUyxDQUNULHdCQUF5QixDQUN6QixnQkFBZ0IsQ0FDaEIsaUJBQ0osQ0FDQSxvREFDSSxTQUFTLENBQ1Qsd0JBQXlCLENBQ3pCLGdCQUFnQixDQUNoQixpQkFDSixDQUVBLHdDQUNJLGNBQWMsQ0FDZCxlQUNKLENBRUEsdUNBQ0ksV0FBVyxDQUNYLFdBQVcsQ0FDWCxnQkFDSixDQUVBLHFEQUNJLFdBQ0osQ0FDQSxxREFDSSxXQUNKLENBRUEsNENBQ0ksT0FBTyxDQUNQLFVBQVUsQ0FDVixXQUFXLENBQ1gscUJBQXdCLENBQ3hCLGlCQUFpQixDQUNqQixTQUFXLENBQ1gsUUFBVSxDQUNWLGNBQ0osQ0FFQSw0Q0FDSSxTQUNKLENBR0EsOENBQ0ksaUJBQWlCLENBQ2pCLFFBQVEsQ0FDUixVQUFVLENBRVYsV0FBVyxDQUNYLFFBQVEsQ0FDUixtQkFDSixDQUVBLHlDQUVJLHVCQUF3QixDQUd4QixtQkFBdUIsQ0FDdkIsNEJBQThCLENBRzlCLFdBQVksQ0FDWixXQUNKLENBQ0Esd0VBQ0ksV0FBWSxDQUNaLFVBQVcsQ0FDWCxrQkFBbUIsQ0FDbkIsMERBQStELENBQy9ELHNHQUE0RyxDQUM1RywyREFBaUUsQ0FDakUsd0RBQTRELENBQzVELHlEQUE2RCxDQUM3RCx3REFBK0QsQ0FDL0QsK0dBQW1ILENBRW5ILHFCQUF5QixDQUN6Qix5QkFBbUMsQ0FDbkMsaUJBQ0osQ0FDQSwrREFDSSx1QkFBd0IsQ0FDeEIsd0JBQXlCLENBQ3pCLFdBQVksQ0FDWixVQUFXLENBQ1gsaUJBQWtCLENBQ2xCLGtCQUFtQixDQUNuQiwyREFBZ0UsQ0FDaEUsdUdBQTZHLENBQzdHLHVEQUFrRSxDQUNsRSx5REFBNkQsQ0FDN0QsMERBQThELENBQzlELG9EQUFnRSxDQUNoRSwrR0FBbUgsQ0FDbkgsNEJBQW1DLENBQ25DLGVBQ0osQ0FDQSwrQ0FDSSxZQUNKLENBQ0EsOEVBQ0ksa0JBQW1CLENBQ25CLDBEQUE4RCxDQUM5RCxzR0FBNEcsQ0FDNUcsMkRBQWlFLENBQ2pFLHdEQUE0RCxDQUM1RCx5REFBNkQsQ0FDN0Qsd0RBQStELENBQy9ELCtHQUNKLENBRUEsMkRBQ0ksV0FBWSxDQUNaLFdBQVksQ0FDWixrQkFBbUIsQ0FDbkIsMERBQStELENBQy9ELHNHQUE0RyxDQUM1RywyREFBaUUsQ0FDakUsd0RBQTRELENBQzVELHlEQUE2RCxDQUM3RCx3REFBK0QsQ0FDL0QsK0dBQW1ILENBRW5ILHFCQUF5QixDQUN6Qix5QkFBbUMsQ0FDbkMsaUJBQ0osQ0FDQSwyREFDSSxXQUFZLENBQ1osV0FBWSxDQUNaLFVBQVcsQ0FFWCxpQkFBa0IsQ0FDbEIsa0JBQ0osQ0FHQSx3REFDSSxzQkFBd0IsQ0FDeEIsbUJBQ0osQ0FFQSxvREFDSSxXQUFZLENBQ1osVUFBVyxDQUdYLHNCQUF1QixDQUd2Qix3QkFBeUIsQ0FDekIsa0JBQW1CLENBR25CLGlCQUNKLENBQ0EseURBQ0ksZUFBZ0IsQ0FDaEIsa0JBQ0osQ0FDQSx5REFDSSxlQUFnQixDQUNoQixrQkFDSixDQUNBLG9EQUNJLFdBQVksQ0FDWixXQUFZLENBQ1osVUFBVyxDQUNYLGlCQUFrQixDQUNsQixrQkFDSixDQUNBLCtEQUNJLGVBQ0osQ0FDQSwrREFDSSxlQUNKLENBRUEseUJBQ0ksaUJBQWtCLENBQ2xCLDZCQUFrQyxDQUNsQyx3QkFBeUIsQ0FDekIsZ0JBQWdCLENBQ2hCLFdBQVcsQ0FDWCxXQUFXLENBQ1gsaUJBQWlCLENBQ2pCLFVBQWMsQ0FDZCxjQUFjLENBQ2QsaUJBQWlCLENBQ2pCLDBDQUE0QyxDQUM1Qyx1Q0FBeUMsQ0FDekMsa0NBQ0osQ0FDQSwrREFDSSxTQUFVLENBQ1YsT0FBUSxDQUNSLHdCQUF5QixDQUN6QixXQUFZLENBQ1osUUFBUyxDQUNULE9BQVEsQ0FDUixpQkFBa0IsQ0FDbEIsbUJBQ0osQ0FFQSwrQkFFSSwyRkFBeUMsQ0FDekMsZ0JBQWlCLENBQ2pCLGVBQ0osQ0FDQSxnQ0FFSSxnRkFBMEIsQ0FDMUIsaUJBQWtCLENBQ2xCLGdCQUNKIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnZpcy1jb25maWd1cmF0aW9uIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgZm9udC1zaXplOjEycHg7XG59XG5cbmRpdi52aXMtY29uZmlndXJhdGlvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjcwMHB4O1xufVxuXG5kaXYudmlzLWNvbmZpZ3VyYXRpb24td3JhcHBlcjo6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpdi52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLW9wdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDo0OTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjoycHggc29saWQgI2Y3ZjhmYTtcbiAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgbGVmdDoxMHB4O1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbmRpdi52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLWJ1dHRvbntcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjQ5NXB4O1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6MjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuICAgIGJvcmRlcjoycHggc29saWQgI2NlY2VkMDtcbiAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgbGVmdDoxMHB4O1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206MzBweDtcbn1cblxuZGl2LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctYnV0dG9uLmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTg4ZTY7XG4gICAgYm9yZGVyOjJweCBzb2xpZCAjMjE0MzczO1xuICAgIGNvbG9yOiNmZmZmZmY7XG59XG5cbmRpdi52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLWl0ZW17XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHdpZHRoOjQ5NXB4O1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6MjVweDtcbn1cblxuXG5kaXYudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1pdGVtLnZpcy1jb25maWctczJ7XG4gICAgbGVmdDoxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XG4gICAgcGFkZGluZy1sZWZ0OjVweDtcbiAgICBib3JkZXItcmFkaXVzOjNweDtcbn1cbmRpdi52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLWl0ZW0udmlzLWNvbmZpZy1zM3tcbiAgICBsZWZ0OjIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTlmMDtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xufVxuZGl2LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctaXRlbS52aXMtY29uZmlnLXM0e1xuICAgIGxlZnQ6MzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGU2O1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG4gICAgYm9yZGVyLXJhZGl1czozcHg7XG59XG5cbmRpdi52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLWhlYWRlcntcbiAgICBmb250LXNpemU6MThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctbGFiZWx7XG4gICAgd2lkdGg6MTIwcHg7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbmRpdi52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLWxhYmVsLnZpcy1jb25maWctczN7XG4gICAgd2lkdGg6MTEwcHg7XG59XG5kaXYudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1sYWJlbC52aXMtY29uZmlnLXM0e1xuICAgIHdpZHRoOjEwMHB4O1xufVxuXG5kaXYudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1jb2xvckJsb2Nre1xuICAgIHRvcDoxcHg7XG4gICAgd2lkdGg6MzBweDtcbiAgICBoZWlnaHQ6MTlweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICM0NDQ0NDQ7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuaW5wdXQudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1jaGVja2JveCB7XG4gICAgbGVmdDotNXB4O1xufVxuXG5cbmlucHV0LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctcmFuZ2VpbnB1dHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0b3A6LTVweDtcbiAgICB3aWR0aDo2MHB4O1xuICAgIC8qaGVpZ2h0OjEzcHg7Ki9cbiAgICBwYWRkaW5nOjFweDtcbiAgICBtYXJnaW46MDtcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xufVxuXG5pbnB1dC52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLXJhbmdle1xuICAgIC8qcmVtb3ZlcyBkZWZhdWx0IHdlYmtpdCBzdHlsZXMqL1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAgIC8qZml4IGZvciBGRiB1bmFibGUgdG8gYXBwbHkgZm9jdXMgc3R5bGUgYnVnICovXG4gICAgYm9yZGVyOiAwcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApO1xuXG4gICAgLypyZXF1aXJlZCBmb3IgcHJvcGVyIHRyYWNrIHNpemluZyBpbiBGRiovXG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDoyMHB4O1xufVxuaW5wdXQudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZGVkZWRlIDAlLCAjYzhjOGM4IDk5JSk7IC8qIEZGMy42KyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsI2RlZGVkZSksIGNvbG9yLXN0b3AoOTklLCNjOGM4YzgpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2RlZGVkZSAwJSwjYzhjOGM4IDk5JSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2RlZGVkZSAwJSwgI2M4YzhjOCA5OSUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICNkZWRlZGUgMCUsI2M4YzhjOCA5OSUpOyAvKiBJRTEwKyAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZGVkZWRlIDAlLCNjOGM4YzggOTklKTsgLyogVzNDICovXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNkZWRlZGUnLCBlbmRDb2xvcnN0cj0nI2M4YzhjOCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgYm94LXNoYWRvdzogI2FhYWFhYSAwcHggMHB4IDNweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuaW5wdXQudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTQzMzRiO1xuICAgIGhlaWdodDogMTdweDtcbiAgICB3aWR0aDogMTdweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzM4NzZjMjsgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgIzM4NzZjMiAwJSwgIzM4NTM4MCAxMDAlKTsgLyogRkYzLjYrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwjMzg3NmMyKSwgY29sb3Itc3RvcCgxMDAlLCMzODUzODApKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgIzM4NzZjMiAwJSwjMzg1MzgwIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICAjMzg3NmMyIDAlLCMzODUzODAgMTAwJSk7IC8qIE9wZXJhIDExLjEwKyAqL1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgIzM4NzZjMiAwJSwjMzg1MzgwIDEwMCUpOyAvKiBJRTEwKyAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjMzg3NmMyIDAlLCMzODUzODAgMTAwJSk7IC8qIFczQyAqL1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMzg3NmMyJywgZW5kQ29sb3JzdHI9JyMzODUzODAnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG4gICAgYm94LXNoYWRvdzogIzExMTkyNyAwcHggMHB4IDFweCAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbmlucHV0LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctcmFuZ2U6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dC52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLXJhbmdlOmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgYmFja2dyb3VuZDogIzlkOWQ5ZDsgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjOWQ5ZDlkIDAlLCAjYzhjOGM4IDk5JSk7IC8qIEZGMy42KyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIzlkOWQ5ZCksIGNvbG9yLXN0b3AoOTklLCNjOGM4YzgpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgIzlkOWQ5ZCAwJSwjYzhjOGM4IDk5JSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICM5ZDlkOWQgMCUsI2M4YzhjOCA5OSUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICM5ZDlkOWQgMCUsI2M4YzhjOCA5OSUpOyAvKiBJRTEwKyAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjOWQ5ZDlkIDAlLCNjOGM4YzggOTklKTsgLyogVzNDICovXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM5ZDlkOWQnLCBlbmRDb2xvcnN0cj0nI2M4YzhjOCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cbn1cblxuaW5wdXQudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1yYW5nZTo6LW1vei1yYW5nZS10cmFjayB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZGVkZWRlIDAlLCAjYzhjOGM4IDk5JSk7IC8qIEZGMy42KyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsI2RlZGVkZSksIGNvbG9yLXN0b3AoOTklLCNjOGM4YzgpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2RlZGVkZSAwJSwjYzhjOGM4IDk5JSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2RlZGVkZSAwJSwgI2M4YzhjOCA5OSUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICNkZWRlZGUgMCUsI2M4YzhjOCA5OSUpOyAvKiBJRTEwKyAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZGVkZWRlIDAlLCNjOGM4YzggOTklKTsgLyogVzNDICovXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNkZWRlZGUnLCBlbmRDb2xvcnN0cj0nI2M4YzhjOCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgYm94LXNoYWRvdzogI2FhYWFhYSAwcHggMHB4IDNweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuaW5wdXQudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1yYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAgIzM4NTM4MDtcbn1cblxuLypoaWRlIHRoZSBvdXRsaW5lIGJlaGluZCB0aGUgYm9yZGVyKi9cbmlucHV0LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctcmFuZ2U6LW1vei1mb2N1c3Jpbmd7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuXG5pbnB1dC52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLXJhbmdlOjotbXMtdHJhY2sge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDVweDtcblxuICAgIC8qcmVtb3ZlIGJnIGNvbG91ciBmcm9tIHRoZSB0cmFjaywgd2UnbGwgdXNlIG1zLWZpbGwtbG93ZXIgYW5kIG1zLWZpbGwtdXBwZXIgaW5zdGVhZCAqL1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLypsZWF2ZSByb29tIGZvciB0aGUgbGFyZ2VyIHRodW1iIHRvIG92ZXJmbG93IHdpdGggYSB0cmFuc3BhcmVudCBib3JkZXIgKi9cbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci13aWR0aDogNnB4IDA7XG5cbiAgICAvKnJlbW92ZSBkZWZhdWx0IHRpY2sgbWFya3MqL1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlucHV0LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctcmFuZ2U6Oi1tcy1maWxsLWxvd2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pbnB1dC52aXMtY29uZmlndXJhdGlvbi52aXMtY29uZmlnLXJhbmdlOjotbXMtZmlsbC11cHBlciB7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW5wdXQudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1yYW5nZTo6LW1zLXRodW1iIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAgIzM4NTM4MDtcbn1cbmlucHV0LnZpcy1jb25maWd1cmF0aW9uLnZpcy1jb25maWctcmFuZ2U6Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuaW5wdXQudmlzLWNvbmZpZ3VyYXRpb24udmlzLWNvbmZpZy1yYW5nZTpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi52aXMtY29uZmlndXJhdGlvbi1wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNTcsIDc2LCA4OSwgMC44NSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2YyZmFmZjtcbiAgICBsaW5lLWhlaWdodDozMHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cbi52aXMtY29uZmlndXJhdGlvbi1wb3B1cDphZnRlciwgLnZpcy1jb25maWd1cmF0aW9uLXBvcHVwOmJlZm9yZSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi52aXMtY29uZmlndXJhdGlvbi1wb3B1cDphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzNiwgMTgzLCAyMTMsIDApO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDU3LCA3NiwgODksIDAuODUpO1xuICAgIGJvcmRlci13aWR0aDogOHB4O1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG59XG4udmlzLWNvbmZpZ3VyYXRpb24tcG9wdXA6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTk0LCAyMjUsIDI0NSwgMCk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmMmZhZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xufSJdfQ== */');
  var ac = function() {
    function t(e, i, n) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      Za(this, t), this.parent = e, this.changedOptions = [], this.container = i, this.allowCreation = !1, this.options = {}, this.initialized = !1, this.popupCounter = 0, this.defaultOptions = {
        enabled: !1,
        filter: !0,
        container: void 0,
        showButton: !0
      }, cl.extend(this.options, this.defaultOptions), this.configureOptions = n, this.moduleOptions = {}, this.domElements = [], this.popupDiv = {}, this.popupLimit = 5, this.popupHistory = {}, this.colorPicker = new sc(o), this.wrapper = void 0
    }
    return Oa(t, [{
      key: "setOptions",
      value: function(t) {
        if (void 0 !== t) {
          this.popupHistory = {}, this._removePopup();
          var e = !0;
          if ("string" == typeof t) this.options.filter = t;
          else if (t instanceof Array) this.options.filter = t.join();
          else if ("object" === $o(t)) {
            if (null == t) throw new TypeError("options cannot be null");
            void 0 !== t.container && (this.options.container = t.container), void 0 !== lo(t) && (this.options.filter = lo(t)), void 0 !== t.showButton && (this.options.showButton = t.showButton), void 0 !== t.enabled && (e = t.enabled)
          } else "boolean" == typeof t ? (this.options.filter = !0, e = t) : "function" == typeof t && (this.options.filter = t, e = !0);
          !1 === lo(this.options) && (e = !1), this.options.enabled = e
        }
        this._clean()
      }
    }, {
      key: "setModuleOptions",
      value: function(t) {
        this.moduleOptions = t, !0 === this.options.enabled && (this._clean(), void 0 !== this.options.container && (this.container = this.options.container), this._create())
      }
    }, {
      key: "_create",
      value: function() {
        this._clean(), this.changedOptions = [];
        var t = lo(this.options),
          e = 0,
          i = !1;
        for (var n in this.configureOptions) this.configureOptions.hasOwnProperty(n) && (this.allowCreation = !1, i = !1, "function" == typeof t ? i = (i = t(n, [])) || this._handleObject(this.configureOptions[n], [n], !0) : !0 !== t && -1 === zo(t).call(t, n) || (i = !0), !1 !== i && (this.allowCreation = !0, e > 0 && this._makeItem([]), this._makeHeader(n), this._handleObject(this.configureOptions[n], [n])), e++);
        this._makeButton(), this._push()
      }
    }, {
      key: "_push",
      value: function() {
        this.wrapper = document.createElement("div"), this.wrapper.className = "vis-configuration-wrapper", this.container.appendChild(this.wrapper);
        for (var t = 0; t < this.domElements.length; t++) this.wrapper.appendChild(this.domElements[t]);
        this._showPopupIfNeeded()
      }
    }, {
      key: "_clean",
      value: function() {
        for (var t = 0; t < this.domElements.length; t++) this.wrapper.removeChild(this.domElements[t]);
        void 0 !== this.wrapper && (this.container.removeChild(this.wrapper), this.wrapper = void 0), this.domElements = [], this._removePopup()
      }
    }, {
      key: "_getValue",
      value: function(t) {
        for (var e = this.moduleOptions, i = 0; i < t.length; i++) {
          if (void 0 === e[t[i]]) {
            e = void 0;
            break
          }
          e = e[t[i]]
        }
        return e
      }
    }, {
      key: "_makeItem",
      value: function(t) {
        if (!0 === this.allowCreation) {
          var e = document.createElement("div");
          e.className = "vis-configuration vis-config-item vis-config-s" + t.length;
          for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
          return Yn(n).call(n, (function(t) {
            e.appendChild(t)
          })), this.domElements.push(e), this.domElements.length
        }
        return 0
      }
    }, {
      key: "_makeHeader",
      value: function(t) {
        var e = document.createElement("div");
        e.className = "vis-configuration vis-config-header", e.innerHTML = t, this._makeItem([], e)
      }
    }, {
      key: "_makeLabel",
      value: function(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = document.createElement("div");
        return n.className = "vis-configuration vis-config-label vis-config-s" + e.length, n.innerHTML = !0 === i ? "<i><b>" + t + ":</b></i>" : t + ":", n
      }
    }, {
      key: "_makeDropdown",
      value: function(t, e, i) {
        var n = document.createElement("select");
        n.className = "vis-configuration vis-config-select";
        var o = 0;
        void 0 !== e && -1 !== zo(t).call(t, e) && (o = zo(t).call(t, e));
        for (var r = 0; r < t.length; r++) {
          var s = document.createElement("option");
          s.value = t[r], r === o && (s.selected = "selected"), s.innerHTML = t[r], n.appendChild(s)
        }
        var a = this;
        n.onchange = function() {
          a._update(this.value, i)
        };
        var l = this._makeLabel(i[i.length - 1], i);
        this._makeItem(i, l, n)
      }
    }, {
      key: "_makeRange",
      value: function(t, e, i) {
        var n = t[0],
          o = t[1],
          r = t[2],
          s = t[3],
          a = document.createElement("input");
        a.className = "vis-configuration vis-config-range";
        try {
          a.type = "range", a.min = o, a.max = r
        } catch (t) {}
        a.step = s;
        var l = "",
          u = 0;
        if (void 0 !== e) {
          e < 0 && 1.2 * e < o ? (a.min = Math.ceil(1.2 * e), u = a.min, l = "range increased") : e / 1.2 < o && (a.min = Math.ceil(e / 1.2), u = a.min, l = "range increased"), 1.2 * e > r && 1 !== r && (a.max = Math.ceil(1.2 * e), u = a.max, l = "range increased"), a.value = e
        } else a.value = n;
        var h = document.createElement("input");
        h.className = "vis-configuration vis-config-rangeinput", h.value = Number(a.value);
        var d = this;
        a.onchange = function() {
          h.value = this.value, d._update(Number(this.value), i)
        }, a.oninput = function() {
          h.value = this.value
        };
        var c = this._makeLabel(i[i.length - 1], i),
          p = this._makeItem(i, c, a, h);
        "" !== l && this.popupHistory[p] !== u && (this.popupHistory[p] = u, this._setupPopup(l, p))
      }
    }, {
      key: "_makeButton",
      value: function() {
        var t = this;
        if (!0 === this.options.showButton) {
          var e = document.createElement("div");
          e.className = "vis-configuration vis-config-button", e.innerHTML = "generate options", e.onclick = function() {
            t._printOptions()
          }, e.onmouseover = function() {
            e.className = "vis-configuration vis-config-button hover"
          }, e.onmouseout = function() {
            e.className = "vis-configuration vis-config-button"
          }, this.optionsContainer = document.createElement("div"), this.optionsContainer.className = "vis-configuration vis-config-option-container", this.domElements.push(this.optionsContainer), this.domElements.push(e)
        }
      }
    }, {
      key: "_setupPopup",
      value: function(t, e) {
        var i = this;
        if (!0 === this.initialized && !0 === this.allowCreation && this.popupCounter < this.popupLimit) {
          var n = document.createElement("div");
          n.id = "vis-configuration-popup", n.className = "vis-configuration-popup", n.innerHTML = t, n.onclick = function() {
            i._removePopup()
          }, this.popupCounter += 1, this.popupDiv = {
            html: n,
            index: e
          }
        }
      }
    }, {
      key: "_removePopup",
      value: function() {
        void 0 !== this.popupDiv.html && (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv = {})
      }
    }, {
      key: "_showPopupIfNeeded",
      value: function() {
        var t = this;
        if (void 0 !== this.popupDiv.html) {
          var e = this.domElements[this.popupDiv.index].getBoundingClientRect();
          this.popupDiv.html.style.left = e.left + "px", this.popupDiv.html.style.top = e.top - 30 + "px", document.body.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout = ba((function() {
            t.popupDiv.html.style.opacity = 0
          }), 1500), this.popupDiv.deleteTimeout = ba((function() {
            t._removePopup()
          }), 1800)
        }
      }
    }, {
      key: "_makeCheckbox",
      value: function(t, e, i) {
        var n = document.createElement("input");
        n.type = "checkbox", n.className = "vis-configuration vis-config-checkbox", n.checked = t, void 0 !== e && (n.checked = e, e !== t && ("object" === $o(t) ? e !== t.enabled && this.changedOptions.push({
          path: i,
          value: e
        }) : this.changedOptions.push({
          path: i,
          value: e
        })));
        var o = this;
        n.onchange = function() {
          o._update(this.checked, i)
        };
        var r = this._makeLabel(i[i.length - 1], i);
        this._makeItem(i, r, n)
      }
    }, {
      key: "_makeTextInput",
      value: function(t, e, i) {
        var n = document.createElement("input");
        n.type = "text", n.className = "vis-configuration vis-config-text", n.value = e, e !== t && this.changedOptions.push({
          path: i,
          value: e
        });
        var o = this;
        n.onchange = function() {
          o._update(this.value, i)
        };
        var r = this._makeLabel(i[i.length - 1], i);
        this._makeItem(i, r, n)
      }
    }, {
      key: "_makeColorField",
      value: function(t, e, i) {
        var n = this,
          o = t[1],
          r = document.createElement("div");
        "none" !== (e = void 0 === e ? o : e) ? (r.className = "vis-configuration vis-config-colorBlock", r.style.backgroundColor = e) : r.className = "vis-configuration vis-config-colorBlock none", e = void 0 === e ? o : e, r.onclick = function() {
          n._showColorPicker(e, r, i)
        };
        var s = this._makeLabel(i[i.length - 1], i);
        this._makeItem(i, s, r)
      }
    }, {
      key: "_showColorPicker",
      value: function(t, e, i) {
        var n = this;
        e.onclick = function() {}, this.colorPicker.insertTo(e), this.colorPicker.show(), this.colorPicker.setColor(t), this.colorPicker.setUpdateCallback((function(t) {
          var o = "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
          e.style.backgroundColor = o, n._update(o, i)
        })), this.colorPicker.setCloseCallback((function() {
          e.onclick = function() {
            n._showColorPicker(t, e, i)
          }
        }))
      }
    }, {
      key: "_handleObject",
      value: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = !1,
          o = lo(this.options),
          r = !1;
        for (var s in t)
          if (t.hasOwnProperty(s)) {
            n = !0;
            var a = t[s],
              l = cl.copyAndExtendArray(e, s);
            if ("function" == typeof o && !1 === (n = o(s, e)) && !(a instanceof Array) && "string" != typeof a && "boolean" != typeof a && a instanceof Object && (this.allowCreation = !1, n = this._handleObject(a, l, !0), this.allowCreation = !1 === i), !1 !== n) {
              r = !0;
              var u = this._getValue(l);
              if (a instanceof Array) this._handleArray(a, u, l);
              else if ("string" == typeof a) this._makeTextInput(a, u, l);
              else if ("boolean" == typeof a) this._makeCheckbox(a, u, l);
              else if (a instanceof Object) {
                var h = !0;
                if (-1 !== zo(e).call(e, "physics") && this.moduleOptions.physics.solver !== s && (h = !1), !0 === h)
                  if (void 0 !== a.enabled) {
                    var d = cl.copyAndExtendArray(l, "enabled"),
                      c = this._getValue(d);
                    if (!0 === c) {
                      var p = this._makeLabel(s, l, !0);
                      this._makeItem(l, p), r = this._handleObject(a, l) || r
                    } else this._makeCheckbox(a, c, l)
                  } else {
                    var m = this._makeLabel(s, l, !0);
                    this._makeItem(l, m), r = this._handleObject(a, l) || r
                  }
              } else console.error("dont know how to handle", a, s, l)
            }
          } return r
      }
    }, {
      key: "_handleArray",
      value: function(t, e, i) {
        "string" == typeof t[0] && "color" === t[0] ? (this._makeColorField(t, e, i), t[1] !== e && this.changedOptions.push({
          path: i,
          value: e
        })) : "string" == typeof t[0] ? (this._makeDropdown(t, e, i), t[0] !== e && this.changedOptions.push({
          path: i,
          value: e
        })) : "number" == typeof t[0] && (this._makeRange(t, e, i), t[0] !== e && this.changedOptions.push({
          path: i,
          value: Number(e)
        }))
      }
    }, {
      key: "_update",
      value: function(t, e) {
        var i = this._constructOptions(t, e);
        this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit && this.parent.body.emitter.emit("configChange", i), this.initialized = !0, this.parent.setOptions(i)
      }
    }, {
      key: "_constructOptions",
      value: function(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = i;
        t = "false" !== (t = "true" === t || t) && t;
        for (var o = 0; o < e.length; o++) "global" !== e[o] && (void 0 === n[e[o]] && (n[e[o]] = {}), o !== e.length - 1 ? n = n[e[o]] : n[e[o]] = t);
        return i
      }
    }, {
      key: "_printOptions",
      value: function() {
        var t = this.getOptions();
        this.optionsContainer.innerHTML = "<pre>var options = " + cs(t, null, 2) + "</pre>"
      }
    }, {
      key: "getOptions",
      value: function() {
        for (var t = {}, e = 0; e < this.changedOptions.length; e++) this._constructOptions(this.changedOptions[e].value, this.changedOptions[e].path, t);
        return t
      }
    }]), t
  }();

  function lc(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  var uc = function(t) {
    Ms(i, t);
    var e = lc(i);

    function i(t, n, o, r) {
      var s, a, l, u, h, d, c, p;
      if (Za(this, i), (p = e.call(this)).initTime = new Date, p.itemsDone = !1, !(Vr(p) instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
      if (!(Vo(o) || o instanceof ol || o instanceof rl) && o instanceof Object) {
        var m = r;
        r = o, o = m
      }
      r && r.throttleRedraw && console.warn('Timeline option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');
      var f = Vr(p);
      if (p.defaultOptions = {
          autoResize: !0,
          longSelectPressTime: 251,
          orientation: {
            axis: "bottom",
            item: "bottom"
          },
          moment: sl
        }, p.options = cl.deepExtend({}, p.defaultOptions), p._create(t), !r || r && void 0 === r.rtl) {
        var g;
        p.dom.root.style.visibility = "hidden";
        for (var v = p.dom.root; !g && v;) g = window.getComputedStyle(v, null).direction, v = v.parentElement;
        p.options.rtl = g && "rtl" == g.toLowerCase()
      } else p.options.rtl = r.rtl;
      r && (r.rollingMode && (p.options.rollingMode = r.rollingMode), r.onInitialDrawComplete && (p.options.onInitialDrawComplete = r.onInitialDrawComplete), r.onTimeout && (p.options.onTimeout = r.onTimeout), r.loadingScreenTemplate && (p.options.loadingScreenTemplate = r.loadingScreenTemplate));
      var b = document.createElement("div");
      if (p.options.loadingScreenTemplate) {
        var y, x = Fa(y = p.options.loadingScreenTemplate).call(y, Vr(p)),
          w = x(p.dom.loadingScreen);
        w instanceof Object && !(w instanceof Element) ? x(b) : w instanceof Element ? (b.innerHTML = "", b.appendChild(w)) : null != w && (b.innerHTML = w)
      }
      return p.dom.loadingScreen.appendChild(b), p.components = [], p.body = {
        dom: p.dom,
        domProps: p.props,
        emitter: {
          on: Fa(s = p.on).call(s, Vr(p)),
          off: Fa(a = p.off).call(a, Vr(p)),
          emit: Fa(l = p.emit).call(l, Vr(p))
        },
        hiddenDates: [],
        util: {
          getScale: function() {
            return f.timeAxis.step.scale
          },
          getStep: function() {
            return f.timeAxis.step.step
          },
          toScreen: Fa(u = f._toScreen).call(u, f),
          toGlobalScreen: Fa(h = f._toGlobalScreen).call(h, f),
          toTime: Fa(d = f._toTime).call(d, f),
          toGlobalTime: Fa(c = f._toGlobalTime).call(c, f)
        }
      }, p.range = new Ol(p.body, p.options), p.components.push(p.range), p.body.range = p.range, p.timeAxis = new yh(p.body, p.options), p.timeAxis2 = null, p.components.push(p.timeAxis), p.currentTime = new Wh(p.body, p.options), p.components.push(p.currentTime), p.itemSet = new zd(p.body, p.options), p.components.push(p.itemSet), p.itemsData = null, p.groupsData = null, p.dom.root.onclick = function(t) {
        f.emit("click", f.getEventProperties(t))
      }, p.dom.root.ondblclick = function(t) {
        f.emit("doubleClick", f.getEventProperties(t))
      }, p.dom.root.oncontextmenu = function(t) {
        f.emit("contextmenu", f.getEventProperties(t))
      }, p.dom.root.onmouseover = function(t) {
        f.emit("mouseOver", f.getEventProperties(t))
      }, window.PointerEvent ? (p.dom.root.onpointerdown = function(t) {
        f.emit("mouseDown", f.getEventProperties(t))
      }, p.dom.root.onpointermove = function(t) {
        f.emit("mouseMove", f.getEventProperties(t))
      }, p.dom.root.onpointerup = function(t) {
        f.emit("mouseUp", f.getEventProperties(t))
      }) : (p.dom.root.onmousemove = function(t) {
        f.emit("mouseMove", f.getEventProperties(t))
      }, p.dom.root.onmousedown = function(t) {
        f.emit("mouseDown", f.getEventProperties(t))
      }, p.dom.root.onmouseup = function(t) {
        f.emit("mouseUp", f.getEventProperties(t))
      }), p.initialFitDone = !1, p.on("changed", (function() {
        if (null != f.itemsData) {
          if (!f.initialFitDone && !f.options.rollingMode)
            if (f.initialFitDone = !0, null != f.options.start || null != f.options.end) {
              if (null == f.options.start || null == f.options.end) var t = f.getItemRange();
              var e = null != f.options.start ? f.options.start : t.min,
                i = null != f.options.end ? f.options.end : t.max;
              f.setWindow(e, i, {
                animation: !1
              })
            } else f.fit({
              animation: !1
            });
          f.initialDrawDone || !f.initialRangeChangeDone && (f.options.start || f.options.end) && !f.options.rollingMode || (f.initialDrawDone = !0, f.itemSet.initialDrawDone = !0, f.dom.root.style.visibility = "visible", f.dom.loadingScreen.parentNode.removeChild(f.dom.loadingScreen), f.options.onInitialDrawComplete && ba((function() {
            return f.options.onInitialDrawComplete()
          }), 0))
        }
      })), p.on("destroyTimeline", (function() {
        f.destroy()
      })), r && p.setOptions(r), p.body.emitter.on("fit", (function(t) {
        p._onFit(t), p.redraw()
      })), o && p.setGroups(o), n && p.setItems(n), p._redraw(), p
    }
    return Oa(i, [{
      key: "_createConfigurator",
      value: function() {
        return new ac(this, this.dom.container, ec)
      }
    }, {
      key: "redraw",
      value: function() {
        this.itemSet && this.itemSet.markDirty({
          refreshItems: !0
        }), this._redraw()
      }
    }, {
      key: "setOptions",
      value: function(t) {
        if (!0 === Pd.validate(t, tc) && console.log("%cErrors have been found in the supplied options object.", Hd), Oh.prototype.setOptions.call(this, t), "type" in t && t.type !== this.options.type) {
          this.options.type = t.type;
          var e = this.itemsData;
          if (e) {
            var i = this.getSelection();
            this.setItems(null), this.setItems(e.rawDS), this.setSelection(i)
          }
        }
      }
    }, {
      key: "setItems",
      value: function(t) {
        var e;
        this.itemsDone = !1, e = t ? dl(t instanceof ol || t instanceof rl ? t : new ol(t)) : null, this.itemsData && this.itemsData.dispose(), this.itemsData = e, this.itemSet && this.itemSet.setItems(null != e ? e.rawDS : null)
      }
    }, {
      key: "setGroups",
      value: function(t) {
        var e;
        if (t) {
          var i = function(t) {
            return !1 !== t.visible
          };
          e = t instanceof ol || t instanceof rl ? new rl(t, {
            filter: i
          }) : new ol(lo(t).call(t, i))
        } else e = null;
        this.groupsData instanceof rl && this.groupsData.setData(null), this.groupsData = e, this.itemSet.setGroups(e)
      }
    }, {
      key: "setData",
      value: function(t) {
        t && t.groups && this.setGroups(t.groups), t && t.items && this.setItems(t.items)
      }
    }, {
      key: "setSelection",
      value: function(t, e) {
        this.itemSet && this.itemSet.setSelection(t), e && e.focus && this.focus(t, e)
      }
    }, {
      key: "getSelection",
      value: function() {
        return this.itemSet && this.itemSet.getSelection() || []
      }
    }, {
      key: "focus",
      value: function(t, e) {
        if (this.itemsData && null != t) {
          var i = Vo(t) ? t : [t],
            n = this.itemsData.get(i),
            o = null,
            r = null;
          if (Yn(n).call(n, (function(t) {
              var e = t.start.valueOf(),
                i = "end" in t ? t.end.valueOf() : t.start.valueOf();
              (null === o || e < o) && (o = e), (null === r || i > r) && (r = i)
            })), null !== o && null !== r) {
            var s = this,
              a = this.itemSet.items[i[0]],
              l = -1 * this._getScrollTop(),
              u = null,
              h = function() {
                var t = cc(s, a);
                t.shouldScroll && t.itemTop != u.itemTop && (s._setScrollTop(-t.scrollOffset), s._redraw())
              },
              d = !e || void 0 === e.zoom || e.zoom,
              c = (o + r) / 2,
              p = d ? 1.1 * (r - o) : Math.max(this.range.end - this.range.start, 1.1 * (r - o)),
              m = !e || void 0 === e.animation || e.animation;
            m || (u = {
              shouldScroll: !1,
              scrollOffset: -1,
              itemTop: -1
            }), this.range.setRange(c - p / 2, c + p / 2, {
              animation: m
            }, (function() {
              h(), ba(h, 100)
            }), (function(t, e, i) {
              var n = cc(s, a);
              if (!1 !== n && (u || (u = n), u.itemTop != n.itemTop || u.shouldScroll)) {
                u.itemTop != n.itemTop && n.shouldScroll && (u = n, l = -1 * s._getScrollTop());
                var o = l,
                  r = u.scrollOffset,
                  h = i ? r : o + (r - o) * t;
                s._setScrollTop(-h), e || s._redraw()
              }
            }))
          }
        }
      }
    }, {
      key: "fit",
      value: function(t, e) {
        var i, n = !t || void 0 === t.animation || t.animation;
        1 === this.itemsData.length && void 0 === this.itemsData.get()[0].end ? (i = this.getDataRange(), this.moveTo(i.min.valueOf(), {
          animation: n
        }, e)) : (i = this.getItemRange(), this.range.setRange(i.min, i.max, {
          animation: n
        }, e))
      }
    }, {
      key: "getItemRange",
      value: function() {
        var t = this,
          e = this.getDataRange(),
          i = null !== e.min ? e.min.valueOf() : null,
          n = null !== e.max ? e.max.valueOf() : null,
          o = null,
          r = null;
        if (null != i && null != n) {
          var s = n - i;
          s <= 0 && (s = 10);
          var a = s / this.props.center.width,
            l = {},
            u = 0;
          if (Yn(cl).call(cl, this.itemSet.items, (function(t, e) {
              if (t.groupShowing) {
                l[e] = t.redraw(!0), u = l[e].length
              }
            })), u > 0)
            for (var h = function(t) {
                Yn(cl).call(cl, l, (function(e) {
                  e[t]()
                }))
              }, d = 0; d < u; d++) h(d);
          if (Yn(cl).call(cl, this.itemSet.items, (function(e) {
              var s, l, u = hc(e),
                h = dc(e);
              t.options.rtl ? (s = u - (e.getWidthRight() + 10) * a, l = h + (e.getWidthLeft() + 10) * a) : (s = u - (e.getWidthLeft() + 10) * a, l = h + (e.getWidthRight() + 10) * a), s < i && (i = s, o = e), l > n && (n = l, r = e)
            })), o && r) {
            var c = o.getWidthLeft() + 10,
              p = r.getWidthRight() + 10,
              m = this.props.center.width - c - p;
            m > 0 && (this.options.rtl ? (i = hc(o) - p * s / m, n = dc(r) + c * s / m) : (i = hc(o) - c * s / m, n = dc(r) + p * s / m))
          }
        }
        return {
          min: null != i ? new Date(i) : null,
          max: null != n ? new Date(n) : null
        }
      }
    }, {
      key: "getDataRange",
      value: function() {
        var t, e = null,
          i = null;
        this.itemsData && Yn(t = this.itemsData).call(t, (function(t) {
          var n = cl.convert(t.start, "Date").valueOf(),
            o = cl.convert(null != t.end ? t.end : t.start, "Date").valueOf();
          (null === e || n < e) && (e = n), (null === i || o > i) && (i = o)
        }));
        return {
          min: null != e ? new Date(e) : null,
          max: null != i ? new Date(i) : null
        }
      }
    }, {
      key: "getEventProperties",
      value: function(t) {
        var e = t.center ? t.center.x : t.clientX,
          i = t.center ? t.center.y : t.clientY,
          n = this.dom.centerContainer.getBoundingClientRect(),
          o = this.options.rtl ? n.right - e : e - n.left,
          r = i - n.top,
          s = this.itemSet.itemFromTarget(t),
          a = this.itemSet.groupFromTarget(t),
          l = Bh.customTimeFromTarget(t),
          u = this.itemSet.options.snap || null,
          h = this.body.util.getScale(),
          d = this.body.util.getStep(),
          c = this._toTime(o),
          p = u ? u(c, h, d) : c,
          m = cl.getTarget(t),
          f = null;
        return null != s ? f = "item" : null != l ? f = "custom-time" : cl.hasParent(m, this.timeAxis.dom.foreground) || this.timeAxis2 && cl.hasParent(m, this.timeAxis2.dom.foreground) ? f = "axis" : cl.hasParent(m, this.itemSet.dom.labelSet) ? f = "group-label" : cl.hasParent(m, this.currentTime.bar) ? f = "current-time" : cl.hasParent(m, this.dom.center) && (f = "background"), {
          event: t,
          item: s ? s.id : null,
          isCluster: !!s && !!s.isCluster,
          items: s ? s.items || [] : null,
          group: a ? a.groupId : null,
          customTime: l ? l.options.id : null,
          what: f,
          pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX,
          pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY,
          x: o,
          y: r,
          time: c,
          snappedTime: p
        }
      }
    }, {
      key: "toggleRollingMode",
      value: function() {
        this.range.rolling ? this.range.stopRolling() : (null == this.options.rollingMode && this.setOptions(this.options), this.range.startRolling())
      }
    }, {
      key: "_redraw",
      value: function() {
        Oh.prototype._redraw.call(this)
      }
    }, {
      key: "_onFit",
      value: function(t) {
        var e = t.start,
          i = t.end,
          n = t.animation;
        i ? this.range.setRange(e, i, {
          animation: n
        }) : this.moveTo(e.valueOf(), {
          animation: n
        })
      }
    }]), i
  }(Oh);

  function hc(t) {
    return cl.convert(t.data.start, "Date").valueOf()
  }

  function dc(t) {
    var e = null != t.data.end ? t.data.end : t.data.start;
    return cl.convert(e, "Date").valueOf()
  }

  function cc(t, e) {
    if (!e.parent) return !1;
    var i = t.options.rtl ? t.props.rightContainer.height : t.props.leftContainer.height,
      n = t.props.center.height,
      o = e.parent,
      r = o.top,
      s = !0,
      a = t.timeAxis.options.orientation.axis,
      l = function() {
        return "bottom" == a ? o.height - e.top - e.height : e.top
      },
      u = -1 * t._getScrollTop(),
      h = r + l(),
      d = e.height;
    return h < u ? r + i <= r + l() + d && (r += l() - t.itemSet.options.margin.item.vertical) : h + d > u + i ? r += l() + d - i + t.itemSet.options.margin.item.vertical : s = !1, {
      shouldScroll: s,
      scrollOffset: r = Math.min(r, n - i),
      itemTop: h
    }
  }
  var pc = function() {
    function t(e, i, n, o, r, s) {
      var a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        l = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      if (Za(this, t), this.majorSteps = [1, 2, 5, 10], this.minorSteps = [.25, .5, 1, 2], this.customLines = null, this.containerHeight = r, this.majorCharHeight = s, this._start = e, this._end = i, this.scale = 1, this.minorStepIdx = -1, this.magnitudefactor = 1, this.determineScale(), this.zeroAlign = a, this.autoScaleStart = n, this.autoScaleEnd = o, this.formattingFunction = l, n || o) {
        var u = this,
          h = function(t) {
            var e = t - t % (u.magnitudefactor * u.minorSteps[u.minorStepIdx]);
            return t % (u.magnitudefactor * u.minorSteps[u.minorStepIdx]) > u.magnitudefactor * u.minorSteps[u.minorStepIdx] * .5 ? e + u.magnitudefactor * u.minorSteps[u.minorStepIdx] : e
          };
        n && (this._start -= 2 * this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._start = h(this._start)), o && (this._end += this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._end = h(this._end)), this.determineScale()
      }
    }
    return Oa(t, [{
      key: "setCharHeight",
      value: function(t) {
        this.majorCharHeight = t
      }
    }, {
      key: "setHeight",
      value: function(t) {
        this.containerHeight = t
      }
    }, {
      key: "determineScale",
      value: function() {
        var t = this._end - this._start;
        this.scale = this.containerHeight / t;
        var e = this.majorCharHeight / this.scale,
          i = t > 0 ? Math.round(Math.log(t) / Math.LN10) : 0;
        this.minorStepIdx = -1, this.magnitudefactor = Math.pow(10, i);
        var n = 0;
        i < 0 && (n = i);
        for (var o = !1, r = n; Math.abs(r) <= Math.abs(i); r++) {
          this.magnitudefactor = Math.pow(10, r);
          for (var s = 0; s < this.minorSteps.length; s++) {
            if (this.magnitudefactor * this.minorSteps[s] >= e) {
              o = !0, this.minorStepIdx = s;
              break
            }
          }
          if (!0 === o) break
        }
      }
    }, {
      key: "is_major",
      value: function(t) {
        return t % (this.magnitudefactor * this.majorSteps[this.minorStepIdx]) == 0
      }
    }, {
      key: "getStep",
      value: function() {
        return this.magnitudefactor * this.minorSteps[this.minorStepIdx]
      }
    }, {
      key: "getFirstMajor",
      value: function() {
        var t = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
        return this.convertValue(this._start + (t - this._start % t) % t)
      }
    }, {
      key: "formatValue",
      value: function(t) {
        var e = t.toPrecision(5);
        return "function" == typeof this.formattingFunction && (e = this.formattingFunction(t)), "number" == typeof e ? "".concat(e) : "string" == typeof e ? e : t.toPrecision(5)
      }
    }, {
      key: "getLines",
      value: function() {
        for (var t = [], e = this.getStep(), i = (e - this._start % e) % e, n = this._start + i; this._end - n > 1e-5; n += e) n != this._start && t.push({
          major: this.is_major(n),
          y: this.convertValue(n),
          val: this.formatValue(n)
        });
        return t
      }
    }, {
      key: "followScale",
      value: function(t) {
        var e = this.minorStepIdx,
          i = this._start,
          n = this._end,
          o = this,
          r = function() {
            o.magnitudefactor *= 2
          },
          s = function() {
            o.magnitudefactor /= 2
          };
        t.minorStepIdx <= 1 && this.minorStepIdx <= 1 || t.minorStepIdx > 1 && this.minorStepIdx > 1 || (t.minorStepIdx < this.minorStepIdx ? (this.minorStepIdx = 1, 2 == e || r(), r()) : (this.minorStepIdx = 2, 1 == e || s(), s()));
        for (var a = t.convertValue(0), l = t.getStep() * t.scale, u = !1, h = 0; !u && h++ < 5;) {
          this.scale = l / (this.minorSteps[this.minorStepIdx] * this.magnitudefactor);
          var d = this.containerHeight / this.scale;
          this._start = i, this._end = this._start + d;
          var c = this._end * this.scale,
            p = this.magnitudefactor * this.majorSteps[this.minorStepIdx],
            m = this.getFirstMajor() - t.getFirstMajor();
          if (this.zeroAlign) {
            var f = a - c;
            this._end += f / this.scale, this._start = this._end - d
          } else this.autoScaleStart ? (this._start -= m / this.scale, this._end = this._start + d) : (this._start += p - m / this.scale, this._end = this._start + d);
          if (!this.autoScaleEnd && this._end > n + 1e-5) s(), u = !1;
          else {
            if (!this.autoScaleStart && this._start < i - 1e-5) {
              if (!(this.zeroAlign && i >= 0)) {
                s(), u = !1;
                continue
              }
              console.warn("Can't adhere to given 'min' range, due to zeroalign")
            }
            this.autoScaleStart && this.autoScaleEnd && d < n - i ? (r(), u = !1) : u = !0
          }
        }
      }
    }, {
      key: "convertValue",
      value: function(t) {
        return this.containerHeight - (t - this._start) * this.scale
      }
    }, {
      key: "screenToValue",
      value: function(t) {
        return (this.containerHeight - t) / this.scale + this._start
      }
    }]), t
  }();

  function mc(t) {
    if (void 0 === Ei || null == Be(t)) {
      if (Vo(t) || (t = function(t, e) {
          var i;
          if (!t) return;
          if ("string" == typeof t) return fc(t, e);
          var n = Zo(i = Object.prototype.toString.call(t)).call(i, 8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return $i(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fc(t, e)
        }(t))) {
        var e = 0,
          i = function() {};
        return {
          s: i,
          n: function() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            }
          },
          e: function(t) {
            throw t
          },
          f: i
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o, r = !0,
      s = !1;
    return {
      s: function() {
        n = Ze(t)
      },
      n: function() {
        var t = n.next();
        return r = t.done, t
      },
      e: function(t) {
        s = !0, o = t
      },
      f: function() {
        try {
          r || null == n.return || n.return()
        } finally {
          if (s) throw o
        }
      }
    }
  }

  function fc(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n
  }

  function gc(t) {
    var e = function() {
      if ("undefined" == typeof Reflect || !es) return !1;
      if (es.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(es(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var i, n = Fs(t);
      if (e) {
        var o = Fs(this).constructor;
        i = es(n, arguments, o)
      } else i = n.apply(this, arguments);
      return Qs(this, i)
    }
  }
  vh(".vis-panel.vis-background.vis-horizontal .vis-grid.vis-horizontal{position:absolute;width:100%;height:0;border-bottom:1px solid}.vis-panel.vis-background.vis-horizontal .vis-grid.vis-minor{border-color:#e5e5e5}.vis-panel.vis-background.vis-horizontal .vis-grid.vis-major{border-color:#bfbfbf}.vis-data-axis .vis-y-axis.vis-major{width:100%;position:absolute;color:#4d4d4d;white-space:nowrap}.vis-data-axis .vis-y-axis.vis-major.vis-measure{padding:0;margin:0;border:0;visibility:hidden;width:auto}.vis-data-axis .vis-y-axis.vis-minor{position:absolute;width:100%;color:#bebebe;white-space:nowrap}.vis-data-axis .vis-y-axis.vis-minor.vis-measure{padding:0;margin:0;border:0;visibility:hidden;width:auto}.vis-data-axis .vis-y-axis.vis-title{position:absolute;color:#4d4d4d;white-space:nowrap;bottom:20px;text-align:center}.vis-data-axis .vis-y-axis.vis-title.vis-measure{padding:0;margin:0;visibility:hidden;width:auto}.vis-data-axis .vis-y-axis.vis-title.vis-left{bottom:0;-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left bottom;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg)}.vis-data-axis .vis-y-axis.vis-title.vis-right{bottom:0;-webkit-transform-origin:right bottom;-moz-transform-origin:right bottom;-ms-transform-origin:right bottom;-o-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.vis-legend{background-color:rgba(247,252,255,.65);padding:5px;border:1px solid #b3b3b3;box-shadow:2px 2px 10px hsla(0,0%,60.4%,.55)}.vis-legend-text{white-space:nowrap;display:inline-block}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFheGlzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxrRUFDRSxpQkFBa0IsQ0FDbEIsVUFBVyxDQUNYLFFBQVMsQ0FDVCx1QkFDRixDQUVBLDZEQUNFLG9CQUNGLENBRUEsNkRBQ0Usb0JBQ0YsQ0FHQSxxQ0FDRSxVQUFXLENBQ1gsaUJBQWtCLENBQ2xCLGFBQWMsQ0FDZCxrQkFDRixDQUVBLGlEQUNFLFNBQVUsQ0FDVixRQUFTLENBQ1QsUUFBUyxDQUNULGlCQUFrQixDQUNsQixVQUNGLENBR0EscUNBQ0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxhQUFjLENBQ2Qsa0JBQ0YsQ0FFQSxpREFDRSxTQUFVLENBQ1YsUUFBUyxDQUNULFFBQVMsQ0FDVCxpQkFBa0IsQ0FDbEIsVUFDRixDQUVBLHFDQUNFLGlCQUFrQixDQUNsQixhQUFjLENBQ2Qsa0JBQW1CLENBQ25CLFdBQVksQ0FDWixpQkFDRixDQUVBLGlEQUNFLFNBQVUsQ0FDVixRQUFTLENBQ1QsaUJBQWtCLENBQ2xCLFVBQ0YsQ0FFQSw4Q0FDRSxRQUFTLENBQ1QsaUNBQWtDLENBQ2xDLDhCQUErQixDQUMvQiw2QkFBOEIsQ0FDOUIsNEJBQTZCLENBQzdCLDRCQUE2QixDQUM3QixnQ0FBaUMsQ0FDakMsNkJBQThCLENBQzlCLDRCQUE2QixDQUM3QiwyQkFBNEIsQ0FDNUIsd0JBQ0YsQ0FFQSwrQ0FDRSxRQUFTLENBQ1QscUNBQXNDLENBQ3RDLGtDQUFtQyxDQUNuQyxpQ0FBa0MsQ0FDbEMsZ0NBQWlDLENBQ2pDLDZCQUE4QixDQUM5QiwrQkFBZ0MsQ0FDaEMsNEJBQTZCLENBQzdCLDJCQUE0QixDQUM1QiwwQkFBMkIsQ0FDM0IsdUJBQ0YsQ0FFQSxZQUNFLHNDQUEyQyxDQUMzQyxXQUFZLENBQ1osd0JBQXlCLENBQ3pCLDRDQUNGLENBRUEsaUJBRUUsa0JBQW1CLENBQ25CLG9CQUNGIiwiZmlsZSI6ImRhdGFheGlzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpcy1wYW5lbC52aXMtYmFja2dyb3VuZC52aXMtaG9yaXpvbnRhbCAudmlzLWdyaWQudmlzLWhvcml6b250YWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnZpcy1wYW5lbC52aXMtYmFja2dyb3VuZC52aXMtaG9yaXpvbnRhbCAudmlzLWdyaWQudmlzLW1pbm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTVlNWU1O1xufVxuXG4udmlzLXBhbmVsLnZpcy1iYWNrZ3JvdW5kLnZpcy1ob3Jpem9udGFsIC52aXMtZ3JpZC52aXMtbWFqb3Ige1xuICBib3JkZXItY29sb3I6ICNiZmJmYmY7XG59XG5cblxuLnZpcy1kYXRhLWF4aXMgLnZpcy15LWF4aXMudmlzLW1ham9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi52aXMtZGF0YS1heGlzIC52aXMteS1heGlzLnZpcy1tYWpvci52aXMtbWVhc3VyZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5cbi52aXMtZGF0YS1heGlzIC52aXMteS1heGlzLnZpcy1taW5vciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjYmViZWJlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udmlzLWRhdGEtYXhpcyAudmlzLXktYXhpcy52aXMtbWlub3IudmlzLW1lYXN1cmUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnZpcy1kYXRhLWF4aXMgLnZpcy15LWF4aXMudmlzLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52aXMtZGF0YS1heGlzIC52aXMteS1heGlzLnZpcy10aXRsZS52aXMtbWVhc3VyZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnZpcy1kYXRhLWF4aXMgLnZpcy15LWF4aXMudmlzLXRpdGxlLnZpcy1sZWZ0IHtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4udmlzLWRhdGEtYXhpcyAudmlzLXktYXhpcy52aXMtdGl0bGUudmlzLXJpZ2h0IHtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4udmlzLWxlZ2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNTIsIDI1NSwgMC42NSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMTU0LCAxNTQsIDE1NCwgMC41NSk7XG59XG5cbi52aXMtbGVnZW5kLXRleHQge1xuICAvKmZvbnQtc2l6ZTogMTBweDsqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn0iXX0= */");
  var vc = function(t) {
    Ms(i, t);
    var e = gc(i);

    function i(t, n, o, r) {
      var s;
      Za(this, i), (s = e.call(this)).id = Ea(), s.body = t, s.defaultOptions = {
        orientation: "left",
        showMinorLabels: !0,
        showMajorLabels: !0,
        showWeekScale: !1,
        icons: !1,
        majorLinesOffset: 7,
        minorLinesOffset: 4,
        labelOffsetX: 10,
        labelOffsetY: 2,
        iconWidth: 20,
        width: "40px",
        visible: !0,
        alignZeros: !0,
        left: {
          range: {
            min: void 0,
            max: void 0
          },
          format: function(t) {
            return "".concat(gl(t.toPrecision(3)))
          },
          title: {
            text: void 0,
            style: void 0
          }
        },
        right: {
          range: {
            min: void 0,
            max: void 0
          },
          format: function(t) {
            return "".concat(gl(t.toPrecision(3)))
          },
          title: {
            text: void 0,
            style: void 0
          }
        }
      }, s.linegraphOptions = r, s.linegraphSVG = o, s.props = {}, s.DOMelements = {
        lines: {},
        labels: {},
        title: {}
      }, s.dom = {}, s.scale = void 0, s.range = {
        start: 0,
        end: 0
      }, s.options = cl.extend({}, s.defaultOptions), s.conversionFactor = 1, s.setOptions(n), s.width = Number("".concat(s.options.width).replace("px", "")), s.minWidth = s.width, s.height = s.linegraphSVG.getBoundingClientRect().height, s.hidden = !1, s.stepPixels = 25, s.zeroCrossing = -1, s.amountOfSteps = -1, s.lineOffset = 0, s.master = !0, s.masterAxis = null, s.svgElements = {}, s.iconsRemoved = !1, s.groups = {}, s.amountOfGroups = 0, s._create(), null == s.scale && s._redrawLabels(), s.framework = {
        svg: s.svg,
        svgElements: s.svgElements,
        options: s.options,
        groups: s.groups
      };
      var a = Vr(s);
      return s.body.emitter.on("verticalDrag", (function() {
        a.dom.lineContainer.style.top = "".concat(a.body.domProps.scrollTop, "px")
      })), s
    }
    return Oa(i, [{
      key: "addGroup",
      value: function(t, e) {
        this.groups.hasOwnProperty(t) || (this.groups[t] = e), this.amountOfGroups += 1
      }
    }, {
      key: "updateGroup",
      value: function(t, e) {
        this.groups.hasOwnProperty(t) || (this.amountOfGroups += 1), this.groups[t] = e
      }
    }, {
      key: "removeGroup",
      value: function(t) {
        this.groups.hasOwnProperty(t) && (delete this.groups[t], this.amountOfGroups -= 1)
      }
    }, {
      key: "setOptions",
      value: function(t) {
        if (t) {
          var e = !1;
          this.options.orientation != t.orientation && void 0 !== t.orientation && (e = !0);
          cl.selectiveDeepExtend(["orientation", "showMinorLabels", "showMajorLabels", "icons", "majorLinesOffset", "minorLinesOffset", "labelOffsetX", "labelOffsetY", "iconWidth", "width", "visible", "left", "right", "alignZeros"], this.options, t), this.minWidth = Number("".concat(this.options.width).replace("px", "")), !0 === e && this.dom.frame && (this.hide(), this.show())
        }
      }
    }, {
      key: "_create",
      value: function() {
        this.dom.frame = document.createElement("div"), this.dom.frame.style.width = this.options.width, this.dom.frame.style.height = this.height, this.dom.lineContainer = document.createElement("div"), this.dom.lineContainer.style.width = "100%", this.dom.lineContainer.style.height = this.height, this.dom.lineContainer.style.position = "relative", this.dom.lineContainer.style.visibility = "visible", this.dom.lineContainer.style.display = "block", this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "absolute", this.svg.style.top = "0px", this.svg.style.height = "100%", this.svg.style.width = "100%", this.svg.style.display = "block", this.dom.frame.appendChild(this.svg)
      }
    }, {
      key: "_redrawGroupIcons",
      value: function() {
        var t;
        Ar(this.svgElements);
        var e = this.options.iconWidth,
          i = 11.5;
        t = "left" === this.options.orientation ? 4 : this.width - e - 4;
        var n = vn(this.groups);
        Ys(n).call(n, (function(t, e) {
          return t < e ? -1 : 1
        }));
        var o, r = mc(n);
        try {
          for (r.s(); !(o = r.n()).done;) {
            var s = o.value;
            !0 !== this.groups[s].visible || void 0 !== this.linegraphOptions.visibility[s] && !0 !== this.linegraphOptions.visibility[s] || (this.groups[s].getLegend(e, 15, this.framework, t, i), i += 19)
          }
        } catch (t) {
          r.e(t)
        } finally {
          r.f()
        }
        Wr(this.svgElements), this.iconsRemoved = !1
      }
    }, {
      key: "_cleanupIcons",
      value: function() {
        !1 === this.iconsRemoved && (Ar(this.svgElements), Wr(this.svgElements), this.iconsRemoved = !0)
      }
    }, {
      key: "show",
      value: function() {
        this.hidden = !1, this.dom.frame.parentNode || ("left" === this.options.orientation ? this.body.dom.left.appendChild(this.dom.frame) : this.body.dom.right.appendChild(this.dom.frame)), this.dom.lineContainer.parentNode || this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer), this.dom.lineContainer.style.display = "block"
      }
    }, {
      key: "hide",
      value: function() {
        this.hidden = !0, this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.lineContainer.style.display = "none"
      }
    }, {
      key: "setRange",
      value: function(t, e) {
        this.range.start = t, this.range.end = e
      }
    }, {
      key: "redraw",
      value: function() {
        var t = !1,
          e = 0;
        for (var i in this.dom.lineContainer.style.top = "".concat(this.body.domProps.scrollTop, "px"), this.groups) this.groups.hasOwnProperty(i) && (!0 !== this.groups[i].visible || void 0 !== this.linegraphOptions.visibility[i] && !0 !== this.linegraphOptions.visibility[i] || e++);
        if (0 === this.amountOfGroups || 0 === e) this.hide();
        else {
          this.show(), this.height = Number(this.linegraphSVG.style.height.replace("px", "")), this.dom.lineContainer.style.height = "".concat(this.height, "px"), this.width = !0 === this.options.visible ? Number("".concat(this.options.width).replace("px", "")) : 0;
          var n = this.props,
            o = this.dom.frame;
          o.className = "vis-data-axis", this._calculateCharSize();
          var r = this.options.orientation,
            s = this.options.showMinorLabels,
            a = this.options.showMajorLabels,
            l = this.body.dom.backgroundHorizontal.offsetWidth;
          n.minorLabelHeight = s ? n.minorCharHeight : 0, n.majorLabelHeight = a ? n.majorCharHeight : 0, n.minorLineWidth = l - this.lineOffset - this.width + 2 * this.options.minorLinesOffset, n.minorLineHeight = 1, n.majorLineWidth = l - this.lineOffset - this.width + 2 * this.options.majorLinesOffset, n.majorLineHeight = 1, "left" === r ? (o.style.top = "0", o.style.left = "0", o.style.bottom = "", o.style.width = "".concat(this.width, "px"), o.style.height = "".concat(this.height, "px"), this.props.width = this.body.domProps.left.width, this.props.height = this.body.domProps.left.height) : (o.style.top = "", o.style.bottom = "0", o.style.left = "0", o.style.width = "".concat(this.width, "px"), o.style.height = "".concat(this.height, "px"), this.props.width = this.body.domProps.right.width, this.props.height = this.body.domProps.right.height), t = this._redrawLabels(), t = this._isResized() || t, !0 === this.options.icons ? this._redrawGroupIcons() : this._cleanupIcons(), this._redrawTitle(r)
        }
        return t
      }
    }, {
      key: "_redrawLabels",
      value: function() {
        var t = this,
          e = !1;
        Ar(this.DOMelements.lines), Ar(this.DOMelements.labels);
        var i = this.options.orientation,
          n = null != this.options[i].range ? this.options[i].range : {},
          o = !0;
        null != n.max && (this.range.end = n.max, o = !1);
        var r = !0;
        null != n.min && (this.range.start = n.min, r = !1), this.scale = new pc(this.range.start, this.range.end, r, o, this.dom.frame.offsetHeight, this.props.majorCharHeight, this.options.alignZeros, this.options[i].format), !1 === this.master && null != this.masterAxis ? (this.scale.followScale(this.masterAxis.scale), this.dom.lineContainer.style.display = "none") : this.dom.lineContainer.style.display = "block", this.maxLabelSize = 0;
        var s = this.scale.getLines();
        Yn(s).call(s, (function(e) {
          var n = e.y,
            o = e.major;
          t.options.showMinorLabels && !1 === o && t._redrawLabel(n - 2, e.val, i, "vis-y-axis vis-minor", t.props.minorCharHeight), o && n >= 0 && t._redrawLabel(n - 2, e.val, i, "vis-y-axis vis-major", t.props.majorCharHeight), !0 === t.master && (o ? t._redrawLine(n, i, "vis-grid vis-horizontal vis-major", t.options.majorLinesOffset, t.props.majorLineWidth) : t._redrawLine(n, i, "vis-grid vis-horizontal vis-minor", t.options.minorLinesOffset, t.props.minorLineWidth))
        }));
        var a = 0;
        void 0 !== this.options[i].title && void 0 !== this.options[i].title.text && (a = this.props.titleCharHeight);
        var l = !0 === this.options.icons ? Math.max(this.options.iconWidth, a) + this.options.labelOffsetX + 15 : a + this.options.labelOffsetX + 15;
        return this.maxLabelSize > this.width - l && !0 === this.options.visible ? (this.width = this.maxLabelSize + l, this.options.width = "".concat(this.width, "px"), Wr(this.DOMelements.lines), Wr(this.DOMelements.labels), this.redraw(), e = !0) : this.maxLabelSize < this.width - l && !0 === this.options.visible && this.width > this.minWidth ? (this.width = Math.max(this.minWidth, this.maxLabelSize + l), this.options.width = "".concat(this.width, "px"), Wr(this.DOMelements.lines), Wr(this.DOMelements.labels), this.redraw(), e = !0) : (Wr(this.DOMelements.lines), Wr(this.DOMelements.labels), e = !1), e
      }
    }, {
      key: "convertValue",
      value: function(t) {
        return this.scale.convertValue(t)
      }
    }, {
      key: "screenToValue",
      value: function(t) {
        return this.scale.screenToValue(t)
      }
    }, {
      key: "_redrawLabel",
      value: function(t, e, i, n, o) {
        var r = Yr("div", this.DOMelements.labels, this.dom.frame);
        r.className = n, r.innerHTML = e, "left" === i ? (r.style.left = "-".concat(this.options.labelOffsetX, "px"), r.style.textAlign = "right") : (r.style.right = "-".concat(this.options.labelOffsetX, "px"), r.style.textAlign = "left"), r.style.top = "".concat(t - .5 * o + this.options.labelOffsetY, "px"), e += "";
        var s = Math.max(this.props.majorCharWidth, this.props.minorCharWidth);
        this.maxLabelSize < e.length * s && (this.maxLabelSize = e.length * s)
      }
    }, {
      key: "_redrawLine",
      value: function(t, e, i, n, o) {
        if (!0 === this.master) {
          var r = Yr("div", this.DOMelements.lines, this.dom.lineContainer);
          r.className = i, r.innerHTML = "", "left" === e ? r.style.left = "".concat(this.width - n, "px") : r.style.right = "".concat(this.width - n, "px"), r.style.width = "".concat(o, "px"), r.style.top = "".concat(t, "px")
        }
      }
    }, {
      key: "_redrawTitle",
      value: function(t) {
        if (Ar(this.DOMelements.title), void 0 !== this.options[t].title && void 0 !== this.options[t].title.text) {
          var e = Yr("div", this.DOMelements.title, this.dom.frame);
          e.className = "vis-y-axis vis-title vis-".concat(t), e.innerHTML = this.options[t].title.text, void 0 !== this.options[t].title.style && cl.addCssText(e, this.options[t].title.style), "left" === t ? e.style.left = "".concat(this.props.titleCharHeight, "px") : e.style.right = "".concat(this.props.titleCharHeight, "px"), e.style.width = "".concat(this.height, "px")
        }
        Wr(this.DOMelements.title)
      }
    }, {
      key: "_calculateCharSize",
      value: function() {
        if (!("minorCharHeight" in this.props)) {
          var t = document.createTextNode("0"),
            e = document.createElement("div");
          e.className = "vis-y-axis vis-minor vis-measure", e.appendChild(t), this.dom.frame.appendChild(e), this.props.minorCharHeight = e.clientHeight, this.props.minorCharWidth = e.clientWidth, this.dom.frame.removeChild(e)
        }
        if (!("majorCharHeight" in this.props)) {
          var i = document.createTextNode("0"),
            n = document.createElement("div");
          n.className = "vis-y-axis vis-major vis-measure", n.appendChild(i), this.dom.frame.appendChild(n), this.props.majorCharHeight = n.clientHeight, this.props.majorCharWidth = n.clientWidth, this.dom.frame.removeChild(n)
        }
        if (!("titleCharHeight" in this.props)) {
          var o = document.createTextNode("0"),
            r = document.createElement("div");
          r.className = "vis-y-axis vis-title vis-measure", r.appendChild(o), this.dom.frame.appendChild(r), this.props.titleCharHeight = r.clientHeight, this.props.titleCharWidth = r.clientWidth, this.dom.frame.removeChild(r)
        }
      }
    }]), i
  }(vl);

  function bc(t, e) {}

  function yc(t, e) {
    return {
      style: (e = void 0 === e ? {} : e).style || t.options.drawPoints.style,
      styles: e.styles || t.options.drawPoints.styles,
      size: e.size || t.options.drawPoints.size,
      className: e.className || t.className
    }
  }

  function xc(t, e) {}

  function wc(t, e) {}

  function _c(t, e, i, n) {
    this.id = e;
    this.options = cl.selectiveBridgeObject(["sampling", "style", "sort", "yAxisOrientation", "barChart", "drawPoints", "shaded", "interpolation", "zIndex", "excludeFromStacking", "excludeFromLegend"], i), this.usingDefaultStyle = void 0 === t.className, this.groupsUsingDefaultStyles = n, this.zeroPosition = 0, this.update(t), 1 == this.usingDefaultStyle && (this.groupsUsingDefaultStyles[0] += 1), this.itemsData = [], this.visible = void 0 === t.visible || t.visible
  }

  function kc(t, e, i, n) {
    this.body = t, this.defaultOptions = {
      enabled: !1,
      icons: !0,
      iconSize: 20,
      iconSpacing: 6,
      left: {
        visible: !0,
        position: "top-left"
      },
      right: {
        visible: !0,
        position: "top-right"
      }
    }, this.side = i, this.options = cl.extend({}, this.defaultOptions), this.linegraphOptions = n, this.svgElements = {}, this.dom = {}, this.groups = {}, this.amountOfGroups = 0, this._create(), this.framework = {
      svg: this.svg,
      svgElements: this.svgElements,
      options: this.options,
      groups: this.groups
    }, this.setOptions(e)
  }
  bc.draw = function(t, e, i, n) {
    n = n || 0;
    for (var o = function(t, e) {
        var i = void 0;
        t.options && t.options.drawPoints && t.options.drawPoints.onRender && "function" == typeof t.options.drawPoints.onRender && (i = t.options.drawPoints.onRender);
        e.group.options && e.group.options.drawPoints && e.group.options.drawPoints.onRender && "function" == typeof e.group.options.drawPoints.onRender && (i = e.group.options.drawPoints.onRender);
        return i
      }(i, e), r = 0; r < t.length; r++)
      if (o) {
        var s = o(t[r], e);
        !0 !== s && "object" !== $o(s) || Er(t[r].screen_x + n, t[r].screen_y, yc(e, s), i.svgElements, i.svg, t[r].label)
      } else Er(t[r].screen_x + n, t[r].screen_y, yc(e), i.svgElements, i.svg, t[r].label)
  }, bc.drawIcon = function(t, e, i, n, o, r) {
    var s = .5 * o,
      a = Tr("rect", r.svgElements, r.svg);
    a.setAttributeNS(null, "x", e), a.setAttributeNS(null, "y", i - s), a.setAttributeNS(null, "width", n), a.setAttributeNS(null, "height", 2 * s), a.setAttributeNS(null, "class", "vis-outline"), Er(e + .5 * n, i, yc(t), r.svgElements, r.svg)
  }, xc.drawIcon = function(t, e, i, n, o, r) {
    var s = .5 * o,
      a = Tr("rect", r.svgElements, r.svg);
    a.setAttributeNS(null, "x", e), a.setAttributeNS(null, "y", i - s), a.setAttributeNS(null, "width", n), a.setAttributeNS(null, "height", 2 * s), a.setAttributeNS(null, "class", "vis-outline");
    var l = Math.round(.3 * n),
      u = t.options.barChart.width / l,
      h = Math.round(.4 * o),
      d = Math.round(.75 * o),
      c = Math.round((n - 2 * l) / 3);
    if (Rr(e + .5 * l + c, i + s - h - 1, l, h, t.className + " vis-bar", r.svgElements, r.svg, t.style), Rr(e + 1.5 * l + c + 2, i + s - d - 1, l, d, t.className + " vis-bar", r.svgElements, r.svg, t.style), 1 == t.options.drawPoints.enabled) {
      var p = {
        style: t.options.drawPoints.style,
        styles: t.options.drawPoints.styles,
        size: t.options.drawPoints.size / u,
        className: t.className
      };
      Er(e + .5 * l + c, i + s - h - 1, p, r.svgElements, r.svg), Er(e + 1.5 * l + c + 2, i + s - d - 1, p, r.svgElements, r.svg)
    }
  }, xc.draw = function(t, e, i) {
    var n, o, r, s, a, l, u = [],
      h = {},
      d = 0;
    for (a = 0; a < t.length; a++)
      if ("bar" === (s = i.groups[t[a]]).options.style && !0 === s.visible && (void 0 === i.options.groups.visibility[t[a]] || !0 === i.options.groups.visibility[t[a]]))
        for (l = 0; l < e[t[a]].length; l++) u.push({
          screen_x: e[t[a]][l].screen_x,
          screen_end: e[t[a]][l].screen_end,
          screen_y: e[t[a]][l].screen_y,
          x: e[t[a]][l].x,
          end: e[t[a]][l].end,
          y: e[t[a]][l].y,
          groupId: t[a],
          label: e[t[a]][l].label
        }), d += 1;
    if (0 !== d)
      for (Ys(u).call(u, (function(t, e) {
          return t.screen_x === e.screen_x ? t.groupId < e.groupId ? -1 : 1 : t.screen_x - e.screen_x
        })), xc._getDataIntersections(h, u), a = 0; a < u.length; a++) {
        var c = null != (s = i.groups[u[a].groupId]).options.barChart.minWidth ? s.options.barChart.minWidth : .1 * s.options.barChart.width,
          p = 0;
        if (void 0 === h[o = u[a].screen_x]) a + 1 < u.length && (n = Math.abs(u[a + 1].screen_x - o)), r = xc._getSafeDrawData(n, s, c);
        else {
          var m = a + (h[o].amount - h[o].resolved);
          m < u.length && (n = Math.abs(u[m].screen_x - o)), r = xc._getSafeDrawData(n, s, c), h[o].resolved += 1, !0 === s.options.stack && !0 !== s.options.excludeFromStacking ? u[a].screen_y < s.zeroPosition ? (p = h[o].accumulatedNegative, h[o].accumulatedNegative += s.zeroPosition - u[a].screen_y) : (p = h[o].accumulatedPositive, h[o].accumulatedPositive += s.zeroPosition - u[a].screen_y) : !0 === s.options.barChart.sideBySide && (r.width = r.width / h[o].amount, r.offset += h[o].resolved * r.width - .5 * r.width * (h[o].amount + 1))
        }
        var f = r.width,
          g = u[a].screen_x;
        if (null != u[a].screen_end ? g += .5 * (f = u[a].screen_end - u[a].screen_x) : g += r.offset, Rr(g, u[a].screen_y - p, f, s.zeroPosition - u[a].screen_y, s.className + " vis-bar", i.svgElements, i.svg, s.style), !0 === s.options.drawPoints.enabled) {
          var v = {
            screen_x: u[a].screen_x,
            screen_y: u[a].screen_y - p,
            x: u[a].x,
            y: u[a].y,
            groupId: u[a].groupId,
            label: u[a].label
          };
          bc.draw([v], s, i, r.offset)
        }
      }
  }, xc._getDataIntersections = function(t, e) {
    for (var i, n = 0; n < e.length; n++) n + 1 < e.length && (i = Math.abs(e[n + 1].screen_x - e[n].screen_x)), n > 0 && (i = Math.min(i, Math.abs(e[n - 1].screen_x - e[n].screen_x))), 0 === i && (void 0 === t[e[n].screen_x] && (t[e[n].screen_x] = {
      amount: 0,
      resolved: 0,
      accumulatedPositive: 0,
      accumulatedNegative: 0
    }), t[e[n].screen_x].amount += 1)
  }, xc._getSafeDrawData = function(t, e, i) {
    var n, o;
    return t < e.options.barChart.width && t > 0 ? (n = t < i ? i : t, o = 0, "left" === e.options.barChart.align ? o -= .5 * t : "right" === e.options.barChart.align && (o += .5 * t)) : (n = e.options.barChart.width, o = 0, "left" === e.options.barChart.align ? o -= .5 * e.options.barChart.width : "right" === e.options.barChart.align && (o += .5 * e.options.barChart.width)), {
      width: n,
      offset: o
    }
  }, xc.getStackedYRange = function(t, e, i, n, o) {
    if (t.length > 0) {
      Ys(t).call(t, (function(t, e) {
        return t.screen_x === e.screen_x ? t.groupId < e.groupId ? -1 : 1 : t.screen_x - e.screen_x
      }));
      var r = {};
      xc._getDataIntersections(r, t), e[n] = xc._getStackedYRange(r, t), e[n].yAxisOrientation = o, i.push(n)
    }
  }, xc._getStackedYRange = function(t, e) {
    for (var i, n = e[0].screen_y, o = e[0].screen_y, r = 0; r < e.length; r++) void 0 === t[i = e[r].screen_x] ? (n = n > e[r].screen_y ? e[r].screen_y : n, o = o < e[r].screen_y ? e[r].screen_y : o) : e[r].screen_y < 0 ? t[i].accumulatedNegative += e[r].screen_y : t[i].accumulatedPositive += e[r].screen_y;
    for (var s in t) t.hasOwnProperty(s) && (n = (n = n > t[s].accumulatedNegative ? t[s].accumulatedNegative : n) > t[s].accumulatedPositive ? t[s].accumulatedPositive : n, o = (o = o < t[s].accumulatedNegative ? t[s].accumulatedNegative : o) < t[s].accumulatedPositive ? t[s].accumulatedPositive : o);
    return {
      min: n,
      max: o
    }
  }, wc.calcPath = function(t, e) {
    if (null != t && t.length > 0) {
      return 1 == e.options.interpolation.enabled ? wc._catmullRom(t, e) : wc._linear(t)
    }
  }, wc.drawIcon = function(t, e, i, n, o, r) {
    var s, a, l = .5 * o,
      u = Tr("rect", r.svgElements, r.svg);
    (u.setAttributeNS(null, "x", e), u.setAttributeNS(null, "y", i - l), u.setAttributeNS(null, "width", n), u.setAttributeNS(null, "height", 2 * l), u.setAttributeNS(null, "class", "vis-outline"), (s = Tr("path", r.svgElements, r.svg)).setAttributeNS(null, "class", t.className), void 0 !== t.style && s.setAttributeNS(null, "style", t.style), s.setAttributeNS(null, "d", "M" + e + "," + i + " L" + (e + n) + "," + i), 1 == t.options.shaded.enabled && (a = Tr("path", r.svgElements, r.svg), "top" == t.options.shaded.orientation ? a.setAttributeNS(null, "d", "M" + e + ", " + (i - l) + "L" + e + "," + i + " L" + (e + n) + "," + i + " L" + (e + n) + "," + (i - l)) : a.setAttributeNS(null, "d", "M" + e + "," + i + " L" + e + "," + (i + l) + " L" + (e + n) + "," + (i + l) + "L" + (e + n) + "," + i), a.setAttributeNS(null, "class", t.className + " vis-icon-fill"), void 0 !== t.options.shaded.style && "" !== t.options.shaded.style && a.setAttributeNS(null, "style", t.options.shaded.style)), 1 == t.options.drawPoints.enabled) && Er(e + .5 * n, i, {
      style: t.options.drawPoints.style,
      styles: t.options.drawPoints.styles,
      size: t.options.drawPoints.size,
      className: t.className
    }, r.svgElements, r.svg)
  }, wc.drawShading = function(t, e, i, n) {
    if (1 == e.options.shaded.enabled) {
      var o, r = Number(n.svg.style.height.replace("px", "")),
        s = Tr("path", n.svgElements, n.svg),
        a = "L";
      1 == e.options.interpolation.enabled && (a = "C");
      var l = 0;
      l = "top" == e.options.shaded.orientation ? 0 : "bottom" == e.options.shaded.orientation ? r : Math.min(Math.max(0, e.zeroPosition), r), o = "group" == e.options.shaded.orientation && null != i && null != i ? "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, a, !1) + " L" + i[i.length - 1][0] + "," + i[i.length - 1][1] + " " + this.serializePath(i, a, !0) + i[0][0] + "," + i[0][1] + " Z" : "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, a, !1) + " V" + l + " H" + t[0][0] + " Z", s.setAttributeNS(null, "class", e.className + " vis-fill"), void 0 !== e.options.shaded.style && s.setAttributeNS(null, "style", e.options.shaded.style), s.setAttributeNS(null, "d", o)
    }
  }, wc.draw = function(t, e, i) {
    if (null != t && null != t) {
      var n = Tr("path", i.svgElements, i.svg);
      n.setAttributeNS(null, "class", e.className), void 0 !== e.style && n.setAttributeNS(null, "style", e.style);
      var o = "L";
      1 == e.options.interpolation.enabled && (o = "C"), n.setAttributeNS(null, "d", "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, o, !1))
    }
  }, wc.serializePath = function(t, e, i) {
    if (t.length < 2) return "";
    var n, o = e;
    if (i)
      for (n = t.length - 2; n > 0; n--) o += t[n][0] + "," + t[n][1] + " ";
    else
      for (n = 1; n < t.length; n++) o += t[n][0] + "," + t[n][1] + " ";
    return o
  }, wc._catmullRomUniform = function(t) {
    var e, i, n, o, r, s, a = [];
    a.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
    for (var l = t.length, u = 0; u < l - 1; u++) e = 0 == u ? t[0] : t[u - 1], i = t[u], n = t[u + 1], o = u + 2 < l ? t[u + 2] : n, r = {
      screen_x: (-e.screen_x + 6 * i.screen_x + n.screen_x) * (1 / 6),
      screen_y: (-e.screen_y + 6 * i.screen_y + n.screen_y) * (1 / 6)
    }, s = {
      screen_x: (i.screen_x + 6 * n.screen_x - o.screen_x) * (1 / 6),
      screen_y: (i.screen_y + 6 * n.screen_y - o.screen_y) * (1 / 6)
    }, a.push([r.screen_x, r.screen_y]), a.push([s.screen_x, s.screen_y]), a.push([n.screen_x, n.screen_y]);
    return a
  }, wc._catmullRom = function(t, e) {
    var i = e.options.interpolation.alpha;
    if (0 == i || void 0 === i) return this._catmullRomUniform(t);
    var n, o, r, s, a, l, u, h, d, c, p, m, f, g, v, b, y, x, w, _ = [];
    _.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
    for (var k = t.length, D = 0; D < k - 1; D++) n = 0 == D ? t[0] : t[D - 1], o = t[D], r = t[D + 1], s = D + 2 < k ? t[D + 2] : r, u = Math.sqrt(Math.pow(n.screen_x - o.screen_x, 2) + Math.pow(n.screen_y - o.screen_y, 2)), h = Math.sqrt(Math.pow(o.screen_x - r.screen_x, 2) + Math.pow(o.screen_y - r.screen_y, 2)), d = Math.sqrt(Math.pow(r.screen_x - s.screen_x, 2) + Math.pow(r.screen_y - s.screen_y, 2)), g = Math.pow(d, i), b = Math.pow(d, 2 * i), v = Math.pow(h, i), y = Math.pow(h, 2 * i), w = Math.pow(u, i), c = 2 * (x = Math.pow(u, 2 * i)) + 3 * w * v + y, p = 2 * b + 3 * g * v + y, (m = 3 * w * (w + v)) > 0 && (m = 1 / m), (f = 3 * g * (g + v)) > 0 && (f = 1 / f), a = {
      screen_x: (-y * n.screen_x + c * o.screen_x + x * r.screen_x) * m,
      screen_y: (-y * n.screen_y + c * o.screen_y + x * r.screen_y) * m
    }, l = {
      screen_x: (b * o.screen_x + p * r.screen_x - y * s.screen_x) * f,
      screen_y: (b * o.screen_y + p * r.screen_y - y * s.screen_y) * f
    }, 0 == a.screen_x && 0 == a.screen_y && (a = o), 0 == l.screen_x && 0 == l.screen_y && (l = r), _.push([a.screen_x, a.screen_y]), _.push([l.screen_x, l.screen_y]), _.push([r.screen_x, r.screen_y]);
    return _
  }, wc._linear = function(t) {
    for (var e = [], i = 0; i < t.length; i++) e.push([t[i].screen_x, t[i].screen_y]);
    return e
  }, _c.prototype.setItems = function(t) {
    null != t ? (this.itemsData = t, 1 == Ys(this.options) && cl.insertSort(this.itemsData, (function(t, e) {
      return t.x > e.x ? 1 : -1
    }))) : this.itemsData = []
  }, _c.prototype.getItems = function() {
    return this.itemsData
  }, _c.prototype.setZeroPosition = function(t) {
    this.zeroPosition = t
  }, _c.prototype.setOptions = function(t) {
    if (void 0 !== t) {
      cl.selectiveDeepExtend(["sampling", "style", "sort", "yAxisOrientation", "barChart", "zIndex", "excludeFromStacking", "excludeFromLegend"], this.options, t), "function" == typeof t.drawPoints && (t.drawPoints = {
        onRender: t.drawPoints
      }), cl.mergeOptions(this.options, t, "interpolation"), cl.mergeOptions(this.options, t, "drawPoints"), cl.mergeOptions(this.options, t, "shaded"), t.interpolation && "object" == $o(t.interpolation) && t.interpolation.parametrization && ("uniform" == t.interpolation.parametrization ? this.options.interpolation.alpha = 0 : "chordal" == t.interpolation.parametrization ? this.options.interpolation.alpha = 1 : (this.options.interpolation.parametrization = "centripetal", this.options.interpolation.alpha = .5))
    }
  }, _c.prototype.update = function(t) {
    this.group = t, this.content = t.content || "graph", this.className = t.className || this.className || "vis-graph-group" + this.groupsUsingDefaultStyles[0] % 10, this.visible = void 0 === t.visible || t.visible, this.style = t.style, this.setOptions(t.options)
  }, _c.prototype.getLegend = function(t, e, i, n, o) {
    null != i && null != i || (i = {
      svg: document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      svgElements: {},
      options: this.options,
      groups: [this]
    });
    switch (null != n && null != n || (n = 0), null != o && null != o || (o = .5 * e), this.options.style) {
      case "line":
        wc.drawIcon(this, n, o, t, e, i);
        break;
      case "points":
      case "point":
        bc.drawIcon(this, n, o, t, e, i);
        break;
      case "bar":
        xc.drawIcon(this, n, o, t, e, i)
    }
    return {
      icon: i.svg,
      label: this.content,
      orientation: this.options.yAxisOrientation
    }
  }, _c.prototype.getYRange = function(t) {
    for (var e = t[0].y, i = t[0].y, n = 0; n < t.length; n++) e = e > t[n].y ? t[n].y : e, i = i < t[n].y ? t[n].y : i;
    return {
      min: e,
      max: i,
      yAxisOrientation: this.options.yAxisOrientation
    }
  }, kc.prototype = new vl, kc.prototype.clear = function() {
    this.groups = {}, this.amountOfGroups = 0
  }, kc.prototype.addGroup = function(t, e) {
    1 != e.options.excludeFromLegend && (this.groups.hasOwnProperty(t) || (this.groups[t] = e), this.amountOfGroups += 1)
  }, kc.prototype.updateGroup = function(t, e) {
    this.groups[t] = e
  }, kc.prototype.removeGroup = function(t) {
    this.groups.hasOwnProperty(t) && (delete this.groups[t], this.amountOfGroups -= 1)
  }, kc.prototype._create = function() {
    this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-legend", this.dom.frame.style.position = "absolute", this.dom.frame.style.top = "10px", this.dom.frame.style.display = "block", this.dom.textArea = document.createElement("div"), this.dom.textArea.className = "vis-legend-text", this.dom.textArea.style.position = "relative", this.dom.textArea.style.top = "0px", this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "absolute", this.svg.style.top = "0px", this.svg.style.width = this.options.iconSize + 5 + "px", this.svg.style.height = "100%", this.dom.frame.appendChild(this.svg), this.dom.frame.appendChild(this.dom.textArea)
  }, kc.prototype.hide = function() {
    this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame)
  }, kc.prototype.show = function() {
    this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame)
  }, kc.prototype.setOptions = function(t) {
    cl.selectiveDeepExtend(["enabled", "orientation", "icons", "left", "right"], this.options, t)
  }, kc.prototype.redraw = function() {
    var t = 0,
      e = vn(this.groups);
    Ys(e).call(e, (function(t, e) {
      return t < e ? -1 : 1
    }));
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      1 != this.groups[n].visible || void 0 !== this.linegraphOptions.visibility[n] && 1 != this.linegraphOptions.visibility[n] || t++
    }
    if (0 == this.options[this.side].visible || 0 == this.amountOfGroups || 0 == this.options.enabled || 0 == t) this.hide();
    else {
      if (this.show(), "top-left" == this.options[this.side].position || "bottom-left" == this.options[this.side].position ? (this.dom.frame.style.left = "4px", this.dom.frame.style.textAlign = "left", this.dom.textArea.style.textAlign = "left", this.dom.textArea.style.left = this.options.iconSize + 15 + "px", this.dom.textArea.style.right = "", this.svg.style.left = "0px", this.svg.style.right = "") : (this.dom.frame.style.right = "4px", this.dom.frame.style.textAlign = "right", this.dom.textArea.style.textAlign = "right", this.dom.textArea.style.right = this.options.iconSize + 15 + "px", this.dom.textArea.style.left = "", this.svg.style.right = "0px", this.svg.style.left = ""), "top-left" == this.options[this.side].position || "top-right" == this.options[this.side].position) this.dom.frame.style.top = 4 - Number(this.body.dom.center.style.top.replace("px", "")) + "px", this.dom.frame.style.bottom = "";
      else {
        var o = this.body.domProps.center.height - this.body.domProps.centerContainer.height;
        this.dom.frame.style.bottom = 4 + o + Number(this.body.dom.center.style.top.replace("px", "")) + "px", this.dom.frame.style.top = ""
      }
      0 == this.options.icons ? (this.dom.frame.style.width = this.dom.textArea.offsetWidth + 10 + "px", this.dom.textArea.style.right = "", this.dom.textArea.style.left = "", this.svg.style.width = "0px") : (this.dom.frame.style.width = this.options.iconSize + 15 + this.dom.textArea.offsetWidth + 10 + "px", this.drawLegendIcons());
      var r = "";
      for (i = 0; i < e.length; i++) n = e[i], 1 != this.groups[n].visible || void 0 !== this.linegraphOptions.visibility[n] && 1 != this.linegraphOptions.visibility[n] || (r += this.groups[n].content + "<br />");
      this.dom.textArea.innerHTML = r, this.dom.textArea.style.lineHeight = .75 * this.options.iconSize + this.options.iconSpacing + "px"
    }
  }, kc.prototype.drawLegendIcons = function() {
    if (this.dom.frame.parentNode) {
      var t = vn(this.groups);
      Ys(t).call(t, (function(t, e) {
        return t < e ? -1 : 1
      })), Xr(this.svgElements);
      var e = window.getComputedStyle(this.dom.frame).paddingTop,
        i = Number(e.replace("px", "")),
        n = i,
        o = this.options.iconSize,
        r = .75 * this.options.iconSize,
        s = i + .5 * r + 3;
      this.svg.style.width = o + 5 + i + "px";
      for (var a = 0; a < t.length; a++) {
        var l = t[a];
        1 != this.groups[l].visible || void 0 !== this.linegraphOptions.visibility[l] && 1 != this.linegraphOptions.visibility[l] || (this.groups[l].getLegend(o, r, this.framework, n, s), s += r + this.options.iconSpacing)
      }
    }
  };

  function Dc(t, e) {
    this.id = Ea(), this.body = t, this.defaultOptions = {
      yAxisOrientation: "left",
      defaultGroup: "default",
      sort: !0,
      sampling: !0,
      stack: !1,
      graphHeight: "400px",
      shaded: {
        enabled: !1,
        orientation: "bottom"
      },
      style: "line",
      barChart: {
        width: 50,
        sideBySide: !1,
        align: "center"
      },
      interpolation: {
        enabled: !0,
        parametrization: "centripetal",
        alpha: .5
      },
      drawPoints: {
        enabled: !0,
        size: 6,
        style: "square"
      },
      dataAxis: {},
      legend: {},
      groups: {
        visibility: {}
      }
    }, this.options = cl.extend({}, this.defaultOptions), this.dom = {}, this.props = {}, this.hammer = null, this.groups = {}, this.abortedGraphUpdate = !1, this.updateSVGheight = !1, this.updateSVGheightOnResize = !1, this.forceGraphUpdate = !0;
    var i = this;
    this.itemsData = null, this.groupsData = null, this.itemListeners = {
      add: function(t, e, n) {
        i._onAdd(e.items)
      },
      update: function(t, e, n) {
        i._onUpdate(e.items)
      },
      remove: function(t, e, n) {
        i._onRemove(e.items)
      }
    }, this.groupListeners = {
      add: function(t, e, n) {
        i._onAddGroups(e.items)
      },
      update: function(t, e, n) {
        i._onUpdateGroups(e.items)
      },
      remove: function(t, e, n) {
        i._onRemoveGroups(e.items)
      }
    }, this.items = {}, this.selection = [], this.lastStart = this.body.range.start, this.touchParams = {}, this.svgElements = {}, this.setOptions(e), this.groupsUsingDefaultStyles = [0], this.body.emitter.on("rangechanged", (function() {
      i.lastStart = i.body.range.start, i.svg.style.left = cl.option.asSize(-i.props.width), i.forceGraphUpdate = !0, i.redraw.call(i)
    })), this._create(), this.framework = {
      svg: this.svg,
      svgElements: this.svgElements,
      options: this.options,
      groups: this.groups
    }
  }
  Dc.prototype = new vl, Dc.prototype._create = function() {
    var t = document.createElement("div");
    t.className = "vis-line-graph", this.dom.frame = t, this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "relative", this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px", this.svg.style.display = "block", t.appendChild(this.svg), this.options.dataAxis.orientation = "left", this.yAxisLeft = new vc(this.body, this.options.dataAxis, this.svg, this.options.groups), this.options.dataAxis.orientation = "right", this.yAxisRight = new vc(this.body, this.options.dataAxis, this.svg, this.options.groups), delete this.options.dataAxis.orientation, this.legendLeft = new kc(this.body, this.options.legend, "left", this.options.groups), this.legendRight = new kc(this.body, this.options.legend, "right", this.options.groups), this.show()
  }, Dc.prototype.setOptions = function(t) {
    if (t) {
      void 0 === t.graphHeight && void 0 !== t.height ? (this.updateSVGheight = !0, this.updateSVGheightOnResize = !0) : void 0 !== this.body.domProps.centerContainer.height && void 0 !== t.graphHeight && qn((t.graphHeight + "").replace("px", "")) < this.body.domProps.centerContainer.height && (this.updateSVGheight = !0), cl.selectiveDeepExtend(["sampling", "defaultGroup", "stack", "height", "graphHeight", "yAxisOrientation", "style", "barChart", "dataAxis", "sort", "groups"], this.options, t), cl.mergeOptions(this.options, t, "interpolation"), cl.mergeOptions(this.options, t, "drawPoints"), cl.mergeOptions(this.options, t, "shaded"), cl.mergeOptions(this.options, t, "legend"), t.interpolation && "object" == $o(t.interpolation) && t.interpolation.parametrization && ("uniform" == t.interpolation.parametrization ? this.options.interpolation.alpha = 0 : "chordal" == t.interpolation.parametrization ? this.options.interpolation.alpha = 1 : (this.options.interpolation.parametrization = "centripetal", this.options.interpolation.alpha = .5)), this.yAxisLeft && void 0 !== t.dataAxis && (this.yAxisLeft.setOptions(this.options.dataAxis), this.yAxisRight.setOptions(this.options.dataAxis)), this.legendLeft && void 0 !== t.legend && (this.legendLeft.setOptions(this.options.legend), this.legendRight.setOptions(this.options.legend)), this.groups.hasOwnProperty("__ungrouped__") && this.groups.__ungrouped__.setOptions(t)
    }
    this.dom.frame && (this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {
      queue: !0
    }))
  }, Dc.prototype.hide = function() {
    this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame)
  }, Dc.prototype.show = function() {
    this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame)
  }, Dc.prototype.setItems = function(t) {
    var e, i = this,
      n = this.itemsData;
    if (t) {
      if (!(t instanceof ol || t instanceof rl)) throw new TypeError("Data must be an instance of DataSet or DataView");
      this.itemsData = dl(t)
    } else this.itemsData = null;
    if (n && (Yn(cl).call(cl, this.itemListeners, (function(t, e) {
        n.off(e, t)
      })), n.dispose(), e = n.getIds(), this._onRemove(e)), this.itemsData) {
      var o = this.id;
      Yn(cl).call(cl, this.itemListeners, (function(t, e) {
        i.itemsData.on(e, t, o)
      })), e = this.itemsData.getIds(), this._onAdd(e)
    }
  }, Dc.prototype.setGroups = function(t) {
    var e, i = this;
    if (this.groupsData) {
      Yn(cl).call(cl, this.groupListeners, (function(t, e) {
        i.groupsData.off(e, t)
      })), e = this.groupsData.getIds(), this.groupsData = null;
      for (var n = 0; n < e.length; n++) this._removeGroup(e[n])
    }
    if (t) {
      if (!(t instanceof ol || t instanceof rl)) throw new TypeError("Data must be an instance of DataSet or DataView");
      this.groupsData = t
    } else this.groupsData = null;
    if (this.groupsData) {
      var o = this.id;
      Yn(cl).call(cl, this.groupListeners, (function(t, e) {
        i.groupsData.on(e, t, o)
      })), e = this.groupsData.getIds(), this._onAddGroups(e)
    }
  }, Dc.prototype._onUpdate = function(t) {
    this._updateAllGroupData(t)
  }, Dc.prototype._onAdd = function(t) {
    this._onUpdate(t)
  }, Dc.prototype._onRemove = function(t) {
    this._onUpdate(t)
  }, Dc.prototype._onUpdateGroups = function(t) {
    this._updateAllGroupData(null, t)
  }, Dc.prototype._onAddGroups = function(t) {
    this._onUpdateGroups(t)
  }, Dc.prototype._onRemoveGroups = function(t) {
    for (var e = 0; e < t.length; e++) this._removeGroup(t[e]);
    this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {
      queue: !0
    })
  }, Dc.prototype._removeGroup = function(t) {
    this.groups.hasOwnProperty(t) && ("right" == this.groups[t].options.yAxisOrientation ? (this.yAxisRight.removeGroup(t), this.legendRight.removeGroup(t), this.legendRight.redraw()) : (this.yAxisLeft.removeGroup(t), this.legendLeft.removeGroup(t), this.legendLeft.redraw()), delete this.groups[t])
  }, Dc.prototype._updateGroup = function(t, e) {
    this.groups.hasOwnProperty(e) ? (this.groups[e].update(t), "right" == this.groups[e].options.yAxisOrientation ? (this.yAxisRight.updateGroup(e, this.groups[e]), this.legendRight.updateGroup(e, this.groups[e]), this.yAxisLeft.removeGroup(e), this.legendLeft.removeGroup(e)) : (this.yAxisLeft.updateGroup(e, this.groups[e]), this.legendLeft.updateGroup(e, this.groups[e]), this.yAxisRight.removeGroup(e), this.legendRight.removeGroup(e))) : (this.groups[e] = new _c(t, e, this.options, this.groupsUsingDefaultStyles), "right" == this.groups[e].options.yAxisOrientation ? (this.yAxisRight.addGroup(e, this.groups[e]), this.legendRight.addGroup(e, this.groups[e])) : (this.yAxisLeft.addGroup(e, this.groups[e]), this.legendLeft.addGroup(e, this.groups[e]))), this.legendLeft.redraw(), this.legendRight.redraw()
  }, Dc.prototype._updateAllGroupData = function(t, e) {
    if (null != this.itemsData) {
      var i = {},
        n = this.itemsData.get(),
        o = this.itemsData.idProp,
        r = {};
      t && jn(t).call(t, (function(t) {
        r[t] = t
      }));
      for (var s = {}, a = 0; a < n.length; a++) {
        var l = n[a],
          u = l.group;
        null == u && (u = "__ungrouped__"), s.hasOwnProperty(u) ? s[u]++ : s[u] = 1
      }
      var h = {};
      if (!e && t)
        for (u in this.groups)
          if (this.groups.hasOwnProperty(u)) {
            var d = (f = this.groups[u]).getItems();
            i[u] = lo(d).call(d, (function(t) {
              return h[t[o]] = t[o], t[o] !== r[t[o]]
            }));
            var c = s[u];
            s[u] -= i[u].length, i[u].length < c && (i[u][c - 1] = {})
          } for (a = 0; a < n.length; a++)
        if (null == (u = (l = n[a]).group) && (u = "__ungrouped__"), e || !t || l[o] === r[l[o]] || !h.hasOwnProperty(l[o])) {
          i.hasOwnProperty(u) || (i[u] = new Array(s[u]));
          var p = cl.bridgeObject(l);
          p.x = cl.convert(l.x, "Date"), p.end = cl.convert(l.end, "Date"), p.orginalY = l.y, p.y = Number(l.y), p[o] = l[o];
          var m = i[u].length - s[u]--;
          i[u][m] = p
        } for (u in this.groups) this.groups.hasOwnProperty(u) && (i.hasOwnProperty(u) || (i[u] = new Array(0)));
      for (u in i)
        if (i.hasOwnProperty(u))
          if (0 == i[u].length) this.groups.hasOwnProperty(u) && this._removeGroup(u);
          else {
            var f = void 0;
            null != this.groupsData && (f = this.groupsData.get(u)), null == f && (f = {
              id: u,
              content: this.options.defaultGroup + u
            }), this._updateGroup(f, u), this.groups[u].setItems(i[u])
          } this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {
        queue: !0
      })
    }
  }, Dc.prototype.redraw = function() {
    var t = !1;
    this.props.width = this.dom.frame.offsetWidth, this.props.height = this.body.domProps.centerContainer.height - this.body.domProps.border.top - this.body.domProps.border.bottom, t = this._isResized() || t;
    var e, i = this.body.range.end - this.body.range.start,
      n = i != this.lastVisibleInterval;
    (this.lastVisibleInterval = i, 1 == t) && (this.svg.style.width = cl.option.asSize(3 * this.props.width), this.svg.style.left = cl.option.asSize(-this.props.width), -1 == zo(e = this.options.height + "").call(e, "%") && 1 != this.updateSVGheightOnResize || (this.updateSVGheight = !0));
    if (1 == this.updateSVGheight ? (this.options.graphHeight != this.props.height + "px" && (this.options.graphHeight = this.props.height + "px", this.svg.style.height = this.props.height + "px"), this.updateSVGheight = !1) : this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px", 1 == t || 1 == n || 1 == this.abortedGraphUpdate || 1 == this.forceGraphUpdate) t = this._updateGraph() || t, this.forceGraphUpdate = !1;
    else if (0 != this.lastStart) {
      var o = this.body.range.start - this.lastStart,
        r = this.body.range.end - this.body.range.start;
      if (0 != this.props.width) {
        var s = o * (this.props.width / r);
        this.svg.style.left = -this.props.width - s + "px"
      }
    }
    return this.legendLeft.redraw(), this.legendRight.redraw(), t
  }, Dc.prototype._getSortedGroupIds = function() {
    var t = [];
    for (var e in this.groups)
      if (this.groups.hasOwnProperty(e)) {
        var i = this.groups[e];
        1 != i.visible || void 0 !== this.options.groups.visibility[e] && 1 != this.options.groups.visibility[e] || t.push({
          id: e,
          zIndex: i.options.zIndex
        })
      } cl.insertSort(t, (function(t, e) {
      var i = t.zIndex,
        n = e.zIndex;
      return void 0 === i && (i = 0), void 0 === n && (n = 0), i == n ? 0 : i < n ? -1 : 1
    }));
    for (var n = new Array(t.length), o = 0; o < t.length; o++) n[o] = t[o].id;
    return n
  }, Dc.prototype._updateGraph = function() {
    if (Ar(this.svgElements), 0 != this.props.width && null != this.itemsData) {
      var t, e, i = {},
        n = this.body.util.toGlobalTime(-this.body.domProps.root.width),
        o = this.body.util.toGlobalTime(2 * this.body.domProps.root.width),
        r = this._getSortedGroupIds();
      if (r.length > 0) {
        var s = {};
        for (this._getRelevantData(r, s, n, o), this._applySampling(r, s), e = 0; e < r.length; e++) this._convertXcoordinates(s[r[e]]);
        if (this._getYRanges(r, s, i), 1 == this._updateYAxis(r, i)) return Wr(this.svgElements), this.abortedGraphUpdate = !0, !0;
        this.abortedGraphUpdate = !1;
        var a = void 0;
        for (e = 0; e < r.length; e++) t = this.groups[r[e]], !0 === this.options.stack && "line" === this.options.style && (null != t.options.excludeFromStacking && t.options.excludeFromStacking || (null != a && (this._stack(s[t.id], s[a.id]), 1 == t.options.shaded.enabled && "group" !== t.options.shaded.orientation && ("top" == t.options.shaded.orientation && "group" !== a.options.shaded.orientation ? (a.options.shaded.orientation = "group", a.options.shaded.groupId = t.id) : (t.options.shaded.orientation = "group", t.options.shaded.groupId = a.id))), a = t)), this._convertYcoordinates(s[r[e]], t);
        var l = {};
        for (e = 0; e < r.length; e++)
          if ("line" === (t = this.groups[r[e]]).options.style && 1 == t.options.shaded.enabled) {
            var u = s[r[e]];
            if (null == u || 0 == u.length) continue;
            if (l.hasOwnProperty(r[e]) || (l[r[e]] = wc.calcPath(u, t)), "group" === t.options.shaded.orientation) {
              var h = t.options.shaded.groupId;
              if (-1 === zo(r).call(r, h)) {
                console.log(t.id + ": Unknown shading group target given:" + h);
                continue
              }
              l.hasOwnProperty(h) || (l[h] = wc.calcPath(s[h], this.groups[h])), wc.drawShading(l[r[e]], t, l[h], this.framework)
            } else wc.drawShading(l[r[e]], t, void 0, this.framework)
          } for (xc.draw(r, s, this.framework), e = 0; e < r.length; e++)
          if (t = this.groups[r[e]], s[r[e]].length > 0) switch (t.options.style) {
            case "line":
              l.hasOwnProperty(r[e]) || (l[r[e]] = wc.calcPath(s[r[e]], t)), wc.draw(l[r[e]], t, this.framework);
            case "point":
            case "points":
              "point" != t.options.style && "points" != t.options.style && 1 != t.options.drawPoints.enabled || bc.draw(s[r[e]], t, this.framework)
          }
      }
    }
    return Wr(this.svgElements), !1
  }, Dc.prototype._stack = function(t, e) {
    var i, n, o, r, s;
    i = 0;
    for (var a = 0; a < t.length; a++) {
      r = void 0, s = void 0;
      for (var l = i; l < e.length; l++) {
        if (e[l].x === t[a].x) {
          r = e[l], s = e[l], i = l;
          break
        }
        if (e[l].x > t[a].x) {
          s = e[l], r = 0 == l ? s : e[l - 1], i = l;
          break
        }
      }
      void 0 === s && (r = e[e.length - 1], s = e[e.length - 1]), n = s.x - r.x, o = s.y - r.y, t[a].y = 0 == n ? t[a].orginalY + s.y : t[a].orginalY + o / n * (t[a].x - r.x) + r.y
    }
  }, Dc.prototype._getRelevantData = function(t, e, i, n) {
    var o, r, s, a;
    if (t.length > 0)
      for (r = 0; r < t.length; r++) {
        var l = (o = this.groups[t[r]]).getItems();
        if (1 == Ys(o.options)) {
          var u = function(t, e) {
              return t.getTime() == e.getTime() ? 0 : t < e ? -1 : 1
            },
            h = Math.max(0, cl.binarySearchValue(l, i, "x", "before", u)),
            d = Math.min(l.length, cl.binarySearchValue(l, n, "x", "after", u) + 1);
          d <= 0 && (d = l.length);
          var c = new Array(d - h);
          for (s = h; s < d; s++) a = o.itemsData[s], c[s - h] = a;
          e[t[r]] = c
        } else e[t[r]] = o.itemsData
      }
  }, Dc.prototype._applySampling = function(t, e) {
    if (t.length > 0)
      for (var i = 0; i < t.length; i++)
        if (1 == this.groups[t[i]].options.sampling) {
          var n = e[t[i]];
          if (n.length > 0) {
            var o, r = n.length,
              s = r / (this.body.util.toGlobalScreen(n[n.length - 1].x) - this.body.util.toGlobalScreen(n[0].x));
            o = Math.min(Math.ceil(.2 * r), Math.max(1, Math.round(s)));
            for (var a = new Array(r), l = 0; l < r; l += o) {
              a[Math.round(l / o)] = n[l]
            }
            e[t[i]] = ma(a).call(a, 0, Math.round(r / o))
          }
        }
  }, Dc.prototype._getYRanges = function(t, e, i) {
    var n, o, r, s, a = [],
      l = [];
    if (t.length > 0) {
      for (r = 0; r < t.length; r++) n = e[t[r]], s = this.groups[t[r]].options, n.length > 0 && (o = this.groups[t[r]], !0 === s.stack && "bar" === s.style ? "left" === s.yAxisOrientation ? a = co(a).call(a, n) : l = co(l).call(l, n) : i[t[r]] = o.getYRange(n, t[r]));
      xc.getStackedYRange(a, i, t, "__barStackLeft", "left"), xc.getStackedYRange(l, i, t, "__barStackRight", "right")
    }
  }, Dc.prototype._updateYAxis = function(t, e) {
    var i, n, o = !1,
      r = !1,
      s = !1,
      a = 1e9,
      l = 1e9,
      u = -1e9,
      h = -1e9;
    if (t.length > 0) {
      for (var d = 0; d < t.length; d++) {
        var c = this.groups[t[d]];
        c && "right" != c.options.yAxisOrientation ? (r = !0, a = 1e9, u = -1e9) : c && c.options.yAxisOrientation && (s = !0, l = 1e9, h = -1e9)
      }
      for (d = 0; d < t.length; d++) e.hasOwnProperty(t[d]) && !0 !== e[t[d]].ignore && (i = e[t[d]].min, n = e[t[d]].max, "right" != e[t[d]].yAxisOrientation ? (r = !0, a = a > i ? i : a, u = u < n ? n : u) : (s = !0, l = l > i ? i : l, h = h < n ? n : h));
      1 == r && this.yAxisLeft.setRange(a, u), 1 == s && this.yAxisRight.setRange(l, h)
    }
    o = this._toggleAxisVisiblity(r, this.yAxisLeft) || o, o = this._toggleAxisVisiblity(s, this.yAxisRight) || o, 1 == s && 1 == r ? (this.yAxisLeft.drawIcons = !0, this.yAxisRight.drawIcons = !0) : (this.yAxisLeft.drawIcons = !1, this.yAxisRight.drawIcons = !1), this.yAxisRight.master = !r, this.yAxisRight.masterAxis = this.yAxisLeft, 0 == this.yAxisRight.master ? (this.yAxisLeft.lineOffset = 1 == s ? this.yAxisRight.width : 0, o = this.yAxisLeft.redraw() || o, o = this.yAxisRight.redraw() || o) : o = this.yAxisRight.redraw() || o;
    var p = ["__barStackLeft", "__barStackRight", "__lineStackLeft", "__lineStackRight"];
    for (d = 0; d < p.length; d++) - 1 != zo(t).call(t, p[d]) && ma(t).call(t, zo(t).call(t, p[d]), 1);
    return o
  }, Dc.prototype._toggleAxisVisiblity = function(t, e) {
    var i = !1;
    return 0 == t ? e.dom.frame.parentNode && 0 == e.hidden && (e.hide(), i = !0) : e.dom.frame.parentNode || 1 != e.hidden || (e.show(), i = !0), i
  }, Dc.prototype._convertXcoordinates = function(t) {
    for (var e = this.body.util.toScreen, i = 0; i < t.length; i++) t[i].screen_x = e(t[i].x) + this.props.width, t[i].screen_y = t[i].y, null != t[i].end ? t[i].screen_end = e(t[i].end) + this.props.width : t[i].screen_end = void 0
  }, Dc.prototype._convertYcoordinates = function(t, e) {
    var i = this.yAxisLeft,
      n = Number(this.svg.style.height.replace("px", ""));
    "right" == e.options.yAxisOrientation && (i = this.yAxisRight);
    for (var o = 0; o < t.length; o++) t[o].screen_y = Math.round(i.convertValue(t[o].y));
    e.setZeroPosition(Math.min(n, i.convertValue(0)))
  };
  var Ic = "boolean",
    Cc = {
      configure: {
        enabled: {
          boolean: Ic
        },
        filter: {
          boolean: Ic,
          function: "function"
        },
        container: {
          dom: "dom"
        },
        __type__: {
          object: "object",
          boolean: Ic,
          function: "function"
        }
      },
      alignCurrentTime: {
        string: "string",
        undefined: "undefined"
      },
      yAxisOrientation: {
        string: ["left", "right"]
      },
      defaultGroup: {
        string: "string"
      },
      sort: {
        boolean: Ic
      },
      sampling: {
        boolean: Ic
      },
      stack: {
        boolean: Ic
      },
      graphHeight: {
        string: "string",
        number: "number"
      },
      shaded: {
        enabled: {
          boolean: Ic
        },
        orientation: {
          string: ["bottom", "top", "zero", "group"]
        },
        groupId: {
          object: "object"
        },
        __type__: {
          boolean: Ic,
          object: "object"
        }
      },
      style: {
        string: ["line", "bar", "points"]
      },
      barChart: {
        width: {
          number: "number"
        },
        minWidth: {
          number: "number"
        },
        sideBySide: {
          boolean: Ic
        },
        align: {
          string: ["left", "center", "right"]
        },
        __type__: {
          object: "object"
        }
      },
      interpolation: {
        enabled: {
          boolean: Ic
        },
        parametrization: {
          string: ["centripetal", "chordal", "uniform"]
        },
        alpha: {
          number: "number"
        },
        __type__: {
          object: "object",
          boolean: Ic
        }
      },
      drawPoints: {
        enabled: {
          boolean: Ic
        },
        onRender: {
          function: "function"
        },
        size: {
          number: "number"
        },
        style: {
          string: ["square", "circle"]
        },
        __type__: {
          object: "object",
          boolean: Ic,
          function: "function"
        }
      },
      dataAxis: {
        showMinorLabels: {
          boolean: Ic
        },
        showMajorLabels: {
          boolean: Ic
        },
        showWeekScale: {
          boolean: Ic
        },
        icons: {
          boolean: Ic
        },
        width: {
          string: "string",
          number: "number"
        },
        visible: {
          boolean: Ic
        },
        alignZeros: {
          boolean: Ic
        },
        left: {
          range: {
            min: {
              number: "number",
              undefined: "undefined"
            },
            max: {
              number: "number",
              undefined: "undefined"
            },
            __type__: {
              object: "object"
            }
          },
          format: {
            function: "function"
          },
          title: {
            text: {
              string: "string",
              number: "number",
              undefined: "undefined"
            },
            style: {
              string: "string",
              undefined: "undefined"
            },
            __type__: {
              object: "object"
            }
          },
          __type__: {
            object: "object"
          }
        },
        right: {
          range: {
            min: {
              number: "number",
              undefined: "undefined"
            },
            max: {
              number: "number",
              undefined: "undefined"
            },
            __type__: {
              object: "object"
            }
          },
          format: {
            function: "function"
          },
          title: {
            text: {
              string: "string",
              number: "number",
              undefined: "undefined"
            },
            style: {
              string: "string",
              undefined: "undefined"
            },
            __type__: {
              object: "object"
            }
          },
          __type__: {
            object: "object"
          }
        },
        __type__: {
          object: "object"
        }
      },
      legend: {
        enabled: {
          boolean: Ic
        },
        icons: {
          boolean: Ic
        },
        left: {
          visible: {
            boolean: Ic
          },
          position: {
            string: ["top-right", "bottom-right", "top-left", "bottom-left"]
          },
          __type__: {
            object: "object"
          }
        },
        right: {
          visible: {
            boolean: Ic
          },
          position: {
            string: ["top-right", "bottom-right", "top-left", "bottom-left"]
          },
          __type__: {
            object: "object"
          }
        },
        __type__: {
          object: "object",
          boolean: Ic
        }
      },
      groups: {
        visibility: {
          any: "any"
        },
        __type__: {
          object: "object"
        }
      },
      autoResize: {
        boolean: Ic
      },
      throttleRedraw: {
        number: "number"
      },
      clickToUse: {
        boolean: Ic
      },
      end: {
        number: "number",
        date: "date",
        string: "string",
        moment: "moment"
      },
      format: {
        minorLabels: {
          millisecond: {
            string: "string",
            undefined: "undefined"
          },
          second: {
            string: "string",
            undefined: "undefined"
          },
          minute: {
            string: "string",
            undefined: "undefined"
          },
          hour: {
            string: "string",
            undefined: "undefined"
          },
          weekday: {
            string: "string",
            undefined: "undefined"
          },
          day: {
            string: "string",
            undefined: "undefined"
          },
          week: {
            string: "string",
            undefined: "undefined"
          },
          month: {
            string: "string",
            undefined: "undefined"
          },
          quarter: {
            string: "string",
            undefined: "undefined"
          },
          year: {
            string: "string",
            undefined: "undefined"
          },
          __type__: {
            object: "object"
          }
        },
        majorLabels: {
          millisecond: {
            string: "string",
            undefined: "undefined"
          },
          second: {
            string: "string",
            undefined: "undefined"
          },
          minute: {
            string: "string",
            undefined: "undefined"
          },
          hour: {
            string: "string",
            undefined: "undefined"
          },
          weekday: {
            string: "string",
            undefined: "undefined"
          },
          day: {
            string: "string",
            undefined: "undefined"
          },
          week: {
            string: "string",
            undefined: "undefined"
          },
          month: {
            string: "string",
            undefined: "undefined"
          },
          quarter: {
            string: "string",
            undefined: "undefined"
          },
          year: {
            string: "string",
            undefined: "undefined"
          },
          __type__: {
            object: "object"
          }
        },
        __type__: {
          object: "object"
        }
      },
      moment: {
        function: "function"
      },
      height: {
        string: "string",
        number: "number"
      },
      hiddenDates: {
        start: {
          date: "date",
          number: "number",
          string: "string",
          moment: "moment"
        },
        end: {
          date: "date",
          number: "number",
          string: "string",
          moment: "moment"
        },
        repeat: {
          string: "string"
        },
        __type__: {
          object: "object",
          array: "array"
        }
      },
      locale: {
        string: "string"
      },
      locales: {
        __any__: {
          any: "any"
        },
        __type__: {
          object: "object"
        }
      },
      max: {
        date: "date",
        number: "number",
        string: "string",
        moment: "moment"
      },
      maxHeight: {
        number: "number",
        string: "string"
      },
      maxMinorChars: {
        number: "number"
      },
      min: {
        date: "date",
        number: "number",
        string: "string",
        moment: "moment"
      },
      minHeight: {
        number: "number",
        string: "string"
      },
      moveable: {
        boolean: Ic
      },
      multiselect: {
        boolean: Ic
      },
      orientation: {
        string: "string"
      },
      showCurrentTime: {
        boolean: Ic
      },
      showMajorLabels: {
        boolean: Ic
      },
      showMinorLabels: {
        boolean: Ic
      },
      showWeekScale: {
        boolean: Ic
      },
      start: {
        date: "date",
        number: "number",
        string: "string",
        moment: "moment"
      },
      timeAxis: {
        scale: {
          string: "string",
          undefined: "undefined"
        },
        step: {
          number: "number",
          undefined: "undefined"
        },
        __type__: {
          object: "object"
        }
      },
      width: {
        string: "string",
        number: "number"
      },
      zoomable: {
        boolean: Ic
      },
      zoomKey: {
        string: ["ctrlKey", "altKey", "metaKey", ""]
      },
      zoomMax: {
        number: "number"
      },
      zoomMin: {
        number: "number"
      },
      zIndex: {
        number: "number"
      },
      __type__: {
        object: "object"
      }
    },
    Lc = {
      global: {
        alignCurrentTime: ["none", "year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute", "second"],
        sort: !0,
        sampling: !0,
        stack: !1,
        shaded: {
          enabled: !1,
          orientation: ["zero", "top", "bottom", "group"]
        },
        style: ["line", "bar", "points"],
        barChart: {
          width: [50, 5, 100, 5],
          minWidth: [50, 5, 100, 5],
          sideBySide: !1,
          align: ["left", "center", "right"]
        },
        interpolation: {
          enabled: !0,
          parametrization: ["centripetal", "chordal", "uniform"]
        },
        drawPoints: {
          enabled: !0,
          size: [6, 2, 30, 1],
          style: ["square", "circle"]
        },
        dataAxis: {
          showMinorLabels: !0,
          showMajorLabels: !0,
          showWeekScale: !1,
          icons: !1,
          width: [40, 0, 200, 1],
          visible: !0,
          alignZeros: !0,
          left: {
            title: {
              text: "",
              style: ""
            }
          },
          right: {
            title: {
              text: "",
              style: ""
            }
          }
        },
        legend: {
          enabled: !1,
          icons: !0,
          left: {
            visible: !0,
            position: ["top-right", "bottom-right", "top-left", "bottom-left"]
          },
          right: {
            visible: !0,
            position: ["top-right", "bottom-right", "top-left", "bottom-left"]
          }
        },
        autoResize: !0,
        clickToUse: !1,
        end: "",
        format: {
          minorLabels: {
            millisecond: "SSS",
            second: "s",
            minute: "HH:mm",
            hour: "HH:mm",
            weekday: "ddd D",
            day: "D",
            week: "w",
            month: "MMM",
            quarter: "[Q]Q",
            year: "YYYY"
          },
          majorLabels: {
            millisecond: "HH:mm:ss",
            second: "D MMMM HH:mm",
            minute: "ddd D MMMM",
            hour: "ddd D MMMM",
            weekday: "MMMM YYYY",
            day: "MMMM YYYY",
            week: "MMMM YYYY",
            month: "YYYY",
            quarter: "YYYY",
            year: ""
          }
        },
        height: "",
        locale: "",
        min: "",
        max: "",
        // min: 1900,
        // max: 2030,
        maxHeight: "",
        maxMinorChars: [7, 0, 20, 1],

        minHeight: "",
        moveable: !0,
        orientation: ["both", "bottom", "top"],
        showCurrentTime: !1,
        showMajorLabels: !0,
        showMinorLabels: !0,
        showWeekScale: !1,
        start: "1800",
        width: "100%",
        zoomable: !0,
        zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
        zoomMax: [31536e10, 10, 31536e10, 1],
        zoomMin: [10, 10, 31536e10, 1],
        zIndex: 0
      }
    };

  function Gc(t, e, i, n) {
    var o, r, s, a, l, u, h;
    if (!(Vo(i) || i instanceof ol || i instanceof rl) && i instanceof Object) {
      var d = n;
      n = i, i = d
    }
    n && n.throttleRedraw && console.warn('Graph2d option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');
    var c = this;
    this.defaultOptions = {
      start: null,
      end: null,
      autoResize: !0,
      orientation: {
        axis: "bottom",
        item: "bottom"
      },
      moment: sl,
      width: null,
      height: null,
      maxHeight: null,
      minHeight: null
    }, this.options = cl.deepExtend({}, this.defaultOptions), this._create(t), this.components = [], this.body = {
      dom: this.dom,
      domProps: this.props,
      emitter: {
        on: Fa(o = this.on).call(o, this),
        off: Fa(r = this.off).call(r, this),
        emit: Fa(s = this.emit).call(s, this)
      },
      hiddenDates: [],
      util: {
        toScreen: Fa(a = c._toScreen).call(a, c),
        toGlobalScreen: Fa(l = c._toGlobalScreen).call(l, c),
        toTime: Fa(u = c._toTime).call(u, c),
        toGlobalTime: Fa(h = c._toGlobalTime).call(h, c)
      }
    }, this.range = new Ol(this.body), this.components.push(this.range), this.body.range = this.range, this.timeAxis = new yh(this.body), this.components.push(this.timeAxis), this.currentTime = new Wh(this.body), this.components.push(this.currentTime), this.linegraph = new Dc(this.body), this.components.push(this.linegraph), this.itemsData = null, this.groupsData = null, this.on("tap", (function(t) {
      c.emit("click", c.getEventProperties(t))
    })), this.on("doubletap", (function(t) {
      c.emit("doubleClick", c.getEventProperties(t))
    })), this.dom.root.oncontextmenu = function(t) {
      c.emit("contextmenu", c.getEventProperties(t))
    }, this.initialFitDone = !1, this.on("changed", (function() {
      if (null != c.itemsData) {
        if (!c.initialFitDone && !c.options.rollingMode)
          if (c.initialFitDone = !0, null != c.options.start || null != c.options.end) {
            if (null == c.options.start || null == c.options.end) var t = c.getItemRange();
            var e = null != c.options.start ? c.options.start : t.min,
              i = null != c.options.end ? c.options.end : t.max;
            c.setWindow(e, i, {
              animation: !1
            })
          } else c.fit({
            animation: !1
          });
        c.initialDrawDone || !c.initialRangeChangeDone && (c.options.start || c.options.end) && !c.options.rollingMode || (c.initialDrawDone = !0, c.dom.root.style.visibility = "visible", c.dom.loadingScreen.parentNode.removeChild(c.dom.loadingScreen), c.options.onInitialDrawComplete && ba((function() {
          return c.options.onInitialDrawComplete()
        }), 0))
      }
    })), n && this.setOptions(n), i && this.setGroups(i), e && this.setItems(e), this._redraw()
  }
  Gc.prototype = new Oh, Gc.prototype.setOptions = function(t) {
    !0 === Pd.validate(t, Cc) && console.log("%cErrors have been found in the supplied options object.", Hd), Oh.prototype.setOptions.call(this, t)
  }, Gc.prototype.setItems = function(t) {
    var e, i = null == this.itemsData;
    if (e = t ? dl(t instanceof ol || t instanceof rl ? t : new ol(t)) : null, this.itemsData && this.itemsData.dispose(), this.itemsData = e, this.linegraph && this.linegraph.setItems(null != e ? e.rawDS : null), i)
      if (null != this.options.start || null != this.options.end) {
        var n = null != this.options.start ? this.options.start : null,
          o = null != this.options.end ? this.options.end : null;
        this.setWindow(n, o, {
          animation: !1
        })
      } else this.fit({
        animation: !1
      })
  }, Gc.prototype.setGroups = function(t) {
    var e;
    e = t ? t instanceof ol || t instanceof rl ? t : new ol(t) : null, this.groupsData = e, this.linegraph.setGroups(e)
  }, Gc.prototype.getLegend = function(t, e, i) {
    return void 0 === e && (e = 15), void 0 === i && (i = 15), void 0 !== this.linegraph.groups[t] ? this.linegraph.groups[t].getLegend(e, i) : "cannot find group:'" + t + "'"
  }, Gc.prototype.isGroupVisible = function(t) {
    return void 0 !== this.linegraph.groups[t] && (this.linegraph.groups[t].visible && (void 0 === this.linegraph.options.groups.visibility[t] || 1 == this.linegraph.options.groups.visibility[t]))
  }, Gc.prototype.getDataRange = function() {
    var t = null,
      e = null;
    for (var i in this.linegraph.groups)
      if (this.linegraph.groups.hasOwnProperty(i) && 1 == this.linegraph.groups[i].visible)
        for (var n = 0; n < this.linegraph.groups[i].itemsData.length; n++) {
          var o = this.linegraph.groups[i].itemsData[n],
            r = cl.convert(o.x, "Date").valueOf();
          t = null == t || t > r ? r : t, e = null == e || e < r ? r : e
        }
    return {
      min: null != t ? new Date(t) : null,
      max: null != e ? new Date(e) : null
    }
  }, Gc.prototype.getEventProperties = function(t) {
    var e = t.center ? t.center.x : t.clientX,
      i = t.center ? t.center.y : t.clientY,
      n = e - cl.getAbsoluteLeft(this.dom.centerContainer),
      o = i - cl.getAbsoluteTop(this.dom.centerContainer),
      r = this._toTime(n),
      s = Bh.customTimeFromTarget(t),
      a = cl.getTarget(t),
      l = null;
    cl.hasParent(a, this.timeAxis.dom.foreground) || this.timeAxis2 && cl.hasParent(a, this.timeAxis2.dom.foreground) ? l = "axis" : cl.hasParent(a, this.linegraph.yAxisLeft.dom.frame) || cl.hasParent(a, this.linegraph.yAxisRight.dom.frame) ? l = "data-axis" : cl.hasParent(a, this.linegraph.legendLeft.dom.frame) || cl.hasParent(a, this.linegraph.legendRight.dom.frame) ? l = "legend" : null != s ? l = "custom-time" : cl.hasParent(a, this.currentTime.bar) ? l = "current-time" : cl.hasParent(a, this.dom.center) && (l = "background");
    var u = [],
      h = this.linegraph.yAxisLeft,
      d = this.linegraph.yAxisRight;
    return !h.hidden && this.itemsData.length > 0 && u.push(h.screenToValue(o)), !d.hidden && this.itemsData.length > 0 && u.push(d.screenToValue(o)), {
      event: t,
      customTime: s ? s.options.id : null,
      what: l,
      pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX,
      pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY,
      x: n,
      y: o,
      time: r,
      value: u
    }
  }, Gc.prototype._createConfigurator = function() {
    return new ac(this, this.dom.container, Lc)
  };
  var Sc = Ur();
  sl.locale(Sc);
  var Mc = {
    Core: Oh,
    DateUtil: Zl,
    Range: Ol,
    stack: hd,
    TimeStep: gh,
    components: {
      items: {
        Item: vd,
        BackgroundItem: Id,
        BoxItem: yd,
        PointItem: wd,
        RangeItem: kd
      },
      BackgroundGroup: md,
      Component: vl,
      CurrentTime: Wh,
      CustomTime: Bh,
      DataAxis: vc,
      DataScale: pc,
      GraphGroup: _c,
      Group: cd,
      ItemSet: zd,
      Legend: kc,
      LineGraph: Dc,
      TimeAxis: yh
    }
  };
  t.DOMutil = zr, t.DataSet = ol, t.DataView = rl, t.Graph2d = Gc, t.Hammer = mh, t.Queue = tl, t.Timeline = uc, t.keycharm = wh, t.moment = sl, t.timeline = Mc, t.util = Or, Object.defineProperty(t, "__esModule", {
    value: !0
  })
}));
