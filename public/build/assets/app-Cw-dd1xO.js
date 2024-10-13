function el(t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}
const { toString: Iu } = Object.prototype
    , { getPrototypeOf: yi } = Object
    , Ln = (t => e => {
        const n = Iu.call(e);
        return t[n] || (t[n] = n.slice(8, -1).toLowerCase())
    }
    )(Object.create(null))
    , re = t => (t = t.toLowerCase(),
        e => Ln(e) === t)
    , Fn = t => e => typeof e === t
    , { isArray: ct } = Array
    , xt = Fn("undefined");
function Mu(t) {
    return t !== null && !xt(t) && t.constructor !== null && !xt(t.constructor) && X(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const tl = re("ArrayBuffer");
function Ou(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && tl(t.buffer),
        e
}
const ku = Fn("string")
    , X = Fn("function")
    , nl = Fn("number")
    , jn = t => t !== null && typeof t == "object"
    , Nu = t => t === !0 || t === !1
    , on = t => {
        if (Ln(t) !== "object")
            return !1;
        const e = yi(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
    }
    , Pu = re("Date")
    , Hu = re("File")
    , Bu = re("Blob")
    , Lu = re("FileList")
    , Fu = t => jn(t) && X(t.pipe)
    , ju = t => {
        let e;
        return t && (typeof FormData == "function" && t instanceof FormData || X(t.append) && ((e = Ln(t)) === "formdata" || e === "object" && X(t.toString) && t.toString() === "[object FormData]"))
    }
    , Uu = re("URLSearchParams")
    , [zu, Wu, Vu, Gu] = ["ReadableStream", "Request", "Response", "Headers"].map(re)
    , qu = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pt(t, e, { allOwnKeys: n = !1 } = {}) {
    if (t === null || typeof t > "u")
        return;
    let r, i;
    if (typeof t != "object" && (t = [t]),
        ct(t))
        for (r = 0,
            i = t.length; r < i; r++)
            e.call(null, t[r], r, t);
    else {
        const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t)
            , o = s.length;
        let l;
        for (r = 0; r < o; r++)
            l = s[r],
                e.call(null, t[l], l, t)
    }
}
function rl(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let r = n.length, i;
    for (; r-- > 0;)
        if (i = n[r],
            e === i.toLowerCase())
            return i;
    return null
}
const Be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
    , il = t => !xt(t) && t !== Be;
function Mr() {
    const { caseless: t } = il(this) && this || {}
        , e = {}
        , n = (r, i) => {
            const s = t && rl(e, i) || i;
            on(e[s]) && on(r) ? e[s] = Mr(e[s], r) : on(r) ? e[s] = Mr({}, r) : ct(r) ? e[s] = r.slice() : e[s] = r
        }
        ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && Pt(arguments[r], n);
    return e
}
const $u = (t, e, n, { allOwnKeys: r } = {}) => (Pt(e, (i, s) => {
    n && X(i) ? t[s] = el(i, n) : t[s] = i
}
    , {
        allOwnKeys: r
    }),
    t)
    , Yu = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
        t)
    , Qu = (t, e, n, r) => {
        t.prototype = Object.create(e.prototype, r),
            t.prototype.constructor = t,
            Object.defineProperty(t, "super", {
                value: e.prototype
            }),
            n && Object.assign(t.prototype, n)
    }
    , Zu = (t, e, n, r) => {
        let i, s, o;
        const l = {};
        if (e = e || {},
            t == null)
            return e;
        do {
            for (i = Object.getOwnPropertyNames(t),
                s = i.length; s-- > 0;)
                o = i[s],
                    (!r || r(o, t, e)) && !l[o] && (e[o] = t[o],
                        l[o] = !0);
            t = n !== !1 && yi(t)
        } while (t && (!n || n(t, e)) && t !== Object.prototype);
        return e
    }
    , Xu = (t, e, n) => {
        t = String(t),
            (n === void 0 || n > t.length) && (n = t.length),
            n -= e.length;
        const r = t.indexOf(e, n);
        return r !== -1 && r === n
    }
    , Ku = t => {
        if (!t)
            return null;
        if (ct(t))
            return t;
        let e = t.length;
        if (!nl(e))
            return null;
        const n = new Array(e);
        for (; e-- > 0;)
            n[e] = t[e];
        return n
    }
    , Ju = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && yi(Uint8Array))
    , ed = (t, e) => {
        const r = (t && t[Symbol.iterator]).call(t);
        let i;
        for (; (i = r.next()) && !i.done;) {
            const s = i.value;
            e.call(t, s[0], s[1])
        }
    }
    , td = (t, e) => {
        let n;
        const r = [];
        for (; (n = t.exec(e)) !== null;)
            r.push(n);
        return r
    }
    , nd = re("HTMLFormElement")
    , rd = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
        return r.toUpperCase() + i
    })
    , _s = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype)
    , id = re("RegExp")
    , sl = (t, e) => {
        const n = Object.getOwnPropertyDescriptors(t)
            , r = {};
        Pt(n, (i, s) => {
            let o;
            (o = e(i, s, t)) !== !1 && (r[s] = o || i)
        }
        ),
            Object.defineProperties(t, r)
    }
    , sd = t => {
        sl(t, (e, n) => {
            if (X(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const r = t[n];
            if (X(r)) {
                if (e.enumerable = !1,
                    "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                }
                )
            }
        }
        )
    }
    , od = (t, e) => {
        const n = {}
            , r = i => {
                i.forEach(s => {
                    n[s] = !0
                }
                )
            }
            ;
        return ct(t) ? r(t) : r(String(t).split(e)),
            n
    }
    , ld = () => { }
    , ad = (t, e) => t != null && Number.isFinite(t = +t) ? t : e
    , or = "abcdefghijklmnopqrstuvwxyz"
    , As = "0123456789"
    , ol = {
        DIGIT: As,
        ALPHA: or,
        ALPHA_DIGIT: or + or.toUpperCase() + As
    }
    , cd = (t = 16, e = ol.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = e;
        for (; t--;)
            n += e[Math.random() * r | 0];
        return n
    }
    ;
function ud(t) {
    return !!(t && X(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator])
}
const dd = t => {
    const e = new Array(10)
        , n = (r, i) => {
            if (jn(r)) {
                if (e.indexOf(r) >= 0)
                    return;
                if (!("toJSON" in r)) {
                    e[i] = r;
                    const s = ct(r) ? [] : {};
                    return Pt(r, (o, l) => {
                        const a = n(o, i + 1);
                        !xt(a) && (s[l] = a)
                    }
                    ),
                        e[i] = void 0,
                        s
                }
            }
            return r
        }
        ;
    return n(t, 0)
}
    , fd = re("AsyncFunction")
    , hd = t => t && (jn(t) || X(t)) && X(t.then) && X(t.catch)
    , ll = ((t, e) => t ? setImmediate : e ? ((n, r) => (Be.addEventListener("message", ({ source: i, data: s }) => {
        i === Be && s === n && r.length && r.shift()()
    }
        , !1),
        i => {
            r.push(i),
                Be.postMessage(n, "*")
        }
    ))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", X(Be.postMessage))
    , pd = typeof queueMicrotask < "u" ? queueMicrotask.bind(Be) : typeof process < "u" && process.nextTick || ll
    , E = {
        isArray: ct,
        isArrayBuffer: tl,
        isBuffer: Mu,
        isFormData: ju,
        isArrayBufferView: Ou,
        isString: ku,
        isNumber: nl,
        isBoolean: Nu,
        isObject: jn,
        isPlainObject: on,
        isReadableStream: zu,
        isRequest: Wu,
        isResponse: Vu,
        isHeaders: Gu,
        isUndefined: xt,
        isDate: Pu,
        isFile: Hu,
        isBlob: Bu,
        isRegExp: id,
        isFunction: X,
        isStream: Fu,
        isURLSearchParams: Uu,
        isTypedArray: Ju,
        isFileList: Lu,
        forEach: Pt,
        merge: Mr,
        extend: $u,
        trim: qu,
        stripBOM: Yu,
        inherits: Qu,
        toFlatObject: Zu,
        kindOf: Ln,
        kindOfTest: re,
        endsWith: Xu,
        toArray: Ku,
        forEachEntry: ed,
        matchAll: td,
        isHTMLForm: nd,
        hasOwnProperty: _s,
        hasOwnProp: _s,
        reduceDescriptors: sl,
        freezeMethods: sd,
        toObjectSet: od,
        toCamelCase: rd,
        noop: ld,
        toFiniteNumber: ad,
        findKey: rl,
        global: Be,
        isContextDefined: il,
        ALPHABET: ol,
        generateString: cd,
        isSpecCompliantForm: ud,
        toJSONObject: dd,
        isAsyncFn: fd,
        isThenable: hd,
        setImmediate: ll,
        asap: pd
    };
function x(t, e, n, r, i) {
    Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
        this.message = t,
        this.name = "AxiosError",
        e && (this.code = e),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i,
            this.status = i.status ? i.status : null)
}
E.inherits(x, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: E.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const al = x.prototype
    , cl = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
    cl[t] = {
        value: t
    }
}
);
Object.defineProperties(x, cl);
Object.defineProperty(al, "isAxiosError", {
    value: !0
});
x.from = (t, e, n, r, i, s) => {
    const o = Object.create(al);
    return E.toFlatObject(t, o, function (a) {
        return a !== Error.prototype
    }, l => l !== "isAxiosError"),
        x.call(o, t.message, e, n, r, i),
        o.cause = t,
        o.name = t.name,
        s && Object.assign(o, s),
        o
}
    ;
const gd = null;
function Or(t) {
    return E.isPlainObject(t) || E.isArray(t)
}
function ul(t) {
    return E.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function ws(t, e, n) {
    return t ? t.concat(e).map(function (i, s) {
        return i = ul(i),
            !n && s ? "[" + i + "]" : i
    }).join(n ? "." : "") : e
}
function md(t) {
    return E.isArray(t) && !t.some(Or)
}
const vd = E.toFlatObject(E, {}, null, function (e) {
    return /^is[A-Z]/.test(e)
});
function Un(t, e, n) {
    if (!E.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
        n = E.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function (v, g) {
            return !E.isUndefined(g[v])
        });
    const r = n.metaTokens
        , i = n.visitor || c
        , s = n.dots
        , o = n.indexes
        , a = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(e);
    if (!E.isFunction(i))
        throw new TypeError("visitor must be a function");
    function u(m) {
        if (m === null)
            return "";
        if (E.isDate(m))
            return m.toISOString();
        if (!a && E.isBlob(m))
            throw new x("Blob is not supported. Use a Buffer instead.");
        return E.isArrayBuffer(m) || E.isTypedArray(m) ? a && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }
    function c(m, v, g) {
        let b = m;
        if (m && !g && typeof m == "object") {
            if (E.endsWith(v, "{}"))
                v = r ? v : v.slice(0, -2),
                    m = JSON.stringify(m);
            else if (E.isArray(m) && md(m) || (E.isFileList(m) || E.endsWith(v, "[]")) && (b = E.toArray(m)))
                return v = ul(v),
                    b.forEach(function (_, A) {
                        !(E.isUndefined(_) || _ === null) && e.append(o === !0 ? ws([v], A, s) : o === null ? v : v + "[]", u(_))
                    }),
                    !1
        }
        return Or(m) ? !0 : (e.append(ws(g, v, s), u(m)),
            !1)
    }
    const d = []
        , h = Object.assign(vd, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: Or
        });
    function f(m, v) {
        if (!E.isUndefined(m)) {
            if (d.indexOf(m) !== -1)
                throw Error("Circular reference detected in " + v.join("."));
            d.push(m),
                E.forEach(m, function (b, S) {
                    (!(E.isUndefined(b) || b === null) && i.call(e, b, E.isString(S) ? S.trim() : S, v, h)) === !0 && f(b, v ? v.concat(S) : [S])
                }),
                d.pop()
        }
    }
    if (!E.isObject(t))
        throw new TypeError("data must be an object");
    return f(t),
        e
}
function Cs(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
        return e[r]
    })
}
function bi(t, e) {
    this._pairs = [],
        t && Un(t, this, e)
}
const dl = bi.prototype;
dl.append = function (e, n) {
    this._pairs.push([e, n])
}
    ;
dl.toString = function (e) {
    const n = e ? function (r) {
        return e.call(this, r, Cs)
    }
        : Cs;
    return this._pairs.map(function (i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
    ;
function yd(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function fl(t, e, n) {
    if (!e)
        return t;
    const r = n && n.encode || yd
        , i = n && n.serialize;
    let s;
    if (i ? s = i(e, n) : s = E.isURLSearchParams(e) ? e.toString() : new bi(e, n).toString(r),
        s) {
        const o = t.indexOf("#");
        o !== -1 && (t = t.slice(0, o)),
            t += (t.indexOf("?") === -1 ? "?" : "&") + s
    }
    return t
}
class Ds {
    constructor() {
        this.handlers = []
    }
    use(e, n, r) {
        return this.handlers.push({
            fulfilled: e,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
            this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        E.forEach(this.handlers, function (r) {
            r !== null && e(r)
        })
    }
}
const hl = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
    , bd = typeof URLSearchParams < "u" ? URLSearchParams : bi
    , Ed = typeof FormData < "u" ? FormData : null
    , Sd = typeof Blob < "u" ? Blob : null
    , _d = {
        isBrowser: !0,
        classes: {
            URLSearchParams: bd,
            FormData: Ed,
            Blob: Sd
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    }
    , Ei = typeof window < "u" && typeof document < "u"
    , kr = typeof navigator == "object" && navigator || void 0
    , Ad = Ei && (!kr || ["ReactNative", "NativeScript", "NS"].indexOf(kr.product) < 0)
    , wd = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
    , Cd = Ei && window.location.href || "http://localhost"
    , Dd = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Ei,
        hasStandardBrowserEnv: Ad,
        hasStandardBrowserWebWorkerEnv: wd,
        navigator: kr,
        origin: Cd
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , Y = {
        ...Dd,
        ..._d
    };
function Rd(t, e) {
    return Un(t, new Y.classes.URLSearchParams, Object.assign({
        visitor: function (n, r, i, s) {
            return Y.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")),
                !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, e))
}
function xd(t) {
    return E.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function Td(t) {
    const e = {}
        , n = Object.keys(t);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++)
        s = n[r],
            e[s] = t[s];
    return e
}
function pl(t) {
    function e(n, r, i, s) {
        let o = n[s++];
        if (o === "__proto__")
            return !0;
        const l = Number.isFinite(+o)
            , a = s >= n.length;
        return o = !o && E.isArray(i) ? i.length : o,
            a ? (E.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r,
                !l) : ((!i[o] || !E.isObject(i[o])) && (i[o] = []),
                    e(n, r, i[o], s) && E.isArray(i[o]) && (i[o] = Td(i[o])),
                    !l)
    }
    if (E.isFormData(t) && E.isFunction(t.entries)) {
        const n = {};
        return E.forEachEntry(t, (r, i) => {
            e(xd(r), i, n, 0)
        }
        ),
            n
    }
    return null
}
function Id(t, e, n) {
    if (E.isString(t))
        try {
            return (e || JSON.parse)(t),
                E.trim(t)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(t)
}
const Ht = {
    transitional: hl,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (e, n) {
        const r = n.getContentType() || ""
            , i = r.indexOf("application/json") > -1
            , s = E.isObject(e);
        if (s && E.isHTMLForm(e) && (e = new FormData(e)),
            E.isFormData(e))
            return i ? JSON.stringify(pl(e)) : e;
        if (E.isArrayBuffer(e) || E.isBuffer(e) || E.isStream(e) || E.isFile(e) || E.isBlob(e) || E.isReadableStream(e))
            return e;
        if (E.isArrayBufferView(e))
            return e.buffer;
        if (E.isURLSearchParams(e))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                e.toString();
        let l;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Rd(e, this.formSerializer).toString();
            if ((l = E.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return Un(l ? {
                    "files[]": e
                } : e, a && new a, this.formSerializer)
            }
        }
        return s || i ? (n.setContentType("application/json", !1),
            Id(e)) : e
    }
    ],
    transformResponse: [function (e) {
        const n = this.transitional || Ht.transitional
            , r = n && n.forcedJSONParsing
            , i = this.responseType === "json";
        if (E.isResponse(e) || E.isReadableStream(e))
            return e;
        if (e && E.isString(e) && (r && !this.responseType || i)) {
            const o = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(e)
            } catch (l) {
                if (o)
                    throw l.name === "SyntaxError" ? x.from(l, x.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Y.classes.FormData,
        Blob: Y.classes.Blob
    },
    validateStatus: function (e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Ht.headers[t] = {}
}
);
const Md = E.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
    , Od = t => {
        const e = {};
        let n, r, i;
        return t && t.split(`
`).forEach(function (o) {
            i = o.indexOf(":"),
                n = o.substring(0, i).trim().toLowerCase(),
                r = o.substring(i + 1).trim(),
                !(!n || e[n] && Md[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r)
        }),
            e
    }
    , Rs = Symbol("internals");
function mt(t) {
    return t && String(t).trim().toLowerCase()
}
function ln(t) {
    return t === !1 || t == null ? t : E.isArray(t) ? t.map(ln) : String(t)
}
function kd(t) {
    const e = Object.create(null)
        , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(t);)
        e[r[1]] = r[2];
    return e
}
const Nd = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function lr(t, e, n, r, i) {
    if (E.isFunction(r))
        return r.call(this, e, n);
    if (i && (e = n),
        !!E.isString(e)) {
        if (E.isString(r))
            return e.indexOf(r) !== -1;
        if (E.isRegExp(r))
            return r.test(e)
    }
}
function Pd(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r)
}
function Hd(t, e) {
    const n = E.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(t, r + n, {
            value: function (i, s, o) {
                return this[r].call(this, e, i, s, o)
            },
            configurable: !0
        })
    }
    )
}
class Q {
    constructor(e) {
        e && this.set(e)
    }
    set(e, n, r) {
        const i = this;
        function s(l, a, u) {
            const c = mt(a);
            if (!c)
                throw new Error("header name must be a non-empty string");
            const d = E.findKey(i, c);
            (!d || i[d] === void 0 || u === !0 || u === void 0 && i[d] !== !1) && (i[d || a] = ln(l))
        }
        const o = (l, a) => E.forEach(l, (u, c) => s(u, c, a));
        if (E.isPlainObject(e) || e instanceof this.constructor)
            o(e, n);
        else if (E.isString(e) && (e = e.trim()) && !Nd(e))
            o(Od(e), n);
        else if (E.isHeaders(e))
            for (const [l, a] of e.entries())
                s(a, l, r);
        else
            e != null && s(n, e, r);
        return this
    }
    get(e, n) {
        if (e = mt(e),
            e) {
            const r = E.findKey(this, e);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return kd(i);
                if (E.isFunction(n))
                    return n.call(this, i, r);
                if (E.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, n) {
        if (e = mt(e),
            e) {
            const r = E.findKey(this, e);
            return !!(r && this[r] !== void 0 && (!n || lr(this, this[r], r, n)))
        }
        return !1
    }
    delete(e, n) {
        const r = this;
        let i = !1;
        function s(o) {
            if (o = mt(o),
                o) {
                const l = E.findKey(r, o);
                l && (!n || lr(r, r[l], l, n)) && (delete r[l],
                    i = !0)
            }
        }
        return E.isArray(e) ? e.forEach(s) : s(e),
            i
    }
    clear(e) {
        const n = Object.keys(this);
        let r = n.length
            , i = !1;
        for (; r--;) {
            const s = n[r];
            (!e || lr(this, this[s], s, e, !0)) && (delete this[s],
                i = !0)
        }
        return i
    }
    normalize(e) {
        const n = this
            , r = {};
        return E.forEach(this, (i, s) => {
            const o = E.findKey(r, s);
            if (o) {
                n[o] = ln(i),
                    delete n[s];
                return
            }
            const l = e ? Pd(s) : String(s).trim();
            l !== s && delete n[s],
                n[l] = ln(i),
                r[l] = !0
        }
        ),
            this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const n = Object.create(null);
        return E.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = e && E.isArray(r) ? r.join(", ") : r)
        }
        ),
            n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`)
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...n) {
        const r = new this(e);
        return n.forEach(i => r.set(i)),
            r
    }
    static accessor(e) {
        const r = (this[Rs] = this[Rs] = {
            accessors: {}
        }).accessors
            , i = this.prototype;
        function s(o) {
            const l = mt(o);
            r[l] || (Hd(i, o),
                r[l] = !0)
        }
        return E.isArray(e) ? e.forEach(s) : s(e),
            this
    }
}
Q.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Q.prototype, ({ value: t }, e) => {
    let n = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(r) {
            this[n] = r
        }
    }
}
);
E.freezeMethods(Q);
function ar(t, e) {
    const n = this || Ht
        , r = e || n
        , i = Q.from(r.headers);
    let s = r.data;
    return E.forEach(t, function (l) {
        s = l.call(n, s, i.normalize(), e ? e.status : void 0)
    }),
        i.normalize(),
        s
}
function gl(t) {
    return !!(t && t.__CANCEL__)
}
function ut(t, e, n) {
    x.call(this, t ?? "canceled", x.ERR_CANCELED, e, n),
        this.name = "CanceledError"
}
E.inherits(ut, x, {
    __CANCEL__: !0
});
function ml(t, e, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? t(n) : e(new x("Request failed with status code " + n.status, [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
function Bd(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function Ld(t, e) {
    t = t || 10;
    const n = new Array(t)
        , r = new Array(t);
    let i = 0, s = 0, o;
    return e = e !== void 0 ? e : 1e3,
        function (a) {
            const u = Date.now()
                , c = r[s];
            o || (o = u),
                n[i] = a,
                r[i] = u;
            let d = s
                , h = 0;
            for (; d !== i;)
                h += n[d++],
                    d = d % t;
            if (i = (i + 1) % t,
                i === s && (s = (s + 1) % t),
                u - o < e)
                return;
            const f = c && u - c;
            return f ? Math.round(h * 1e3 / f) : void 0
        }
}
function Fd(t, e) {
    let n = 0, r = 1e3 / e, i, s;
    const o = (u, c = Date.now()) => {
        n = c,
            i = null,
            s && (clearTimeout(s),
                s = null),
            t.apply(null, u)
    }
        ;
    return [(...u) => {
        const c = Date.now()
            , d = c - n;
        d >= r ? o(u, c) : (i = u,
            s || (s = setTimeout(() => {
                s = null,
                    o(i)
            }
                , r - d)))
    }
        , () => i && o(i)]
}
const mn = (t, e, n = 3) => {
    let r = 0;
    const i = Ld(50, 250);
    return Fd(s => {
        const o = s.loaded
            , l = s.lengthComputable ? s.total : void 0
            , a = o - r
            , u = i(a)
            , c = o <= l;
        r = o;
        const d = {
            loaded: o,
            total: l,
            progress: l ? o / l : void 0,
            bytes: a,
            rate: u || void 0,
            estimated: u && l && c ? (l - o) / u : void 0,
            event: s,
            lengthComputable: l != null,
            [e ? "download" : "upload"]: !0
        };
        t(d)
    }
        , n)
}
    , xs = (t, e) => {
        const n = t != null;
        return [r => e[0]({
            lengthComputable: n,
            total: t,
            loaded: r
        }), e[1]]
    }
    , Ts = t => (...e) => E.asap(() => t(...e))
    , jd = Y.hasStandardBrowserEnv ? function () {
        const e = Y.navigator && /(msie|trident)/i.test(Y.navigator.userAgent)
            , n = document.createElement("a");
        let r;
        function i(s) {
            let o = s;
            return e && (n.setAttribute("href", o),
                o = n.href),
                n.setAttribute("href", o),
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }
        return r = i(window.location.href),
            function (o) {
                const l = E.isString(o) ? i(o) : o;
                return l.protocol === r.protocol && l.host === r.host
            }
    }() : function () {
        return function () {
            return !0
        }
    }()
    , Ud = Y.hasStandardBrowserEnv ? {
        write(t, e, n, r, i, s) {
            const o = [t + "=" + encodeURIComponent(e)];
            E.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
                E.isString(r) && o.push("path=" + r),
                E.isString(i) && o.push("domain=" + i),
                s === !0 && o.push("secure"),
                document.cookie = o.join("; ")
        },
        read(t) {
            const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null
        },
        remove(t) {
            this.write(t, "", Date.now() - 864e5)
        }
    } : {
        write() { },
        read() {
            return null
        },
        remove() { }
    };
function zd(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function Wd(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function vl(t, e) {
    return t && !zd(e) ? Wd(t, e) : e
}
const Is = t => t instanceof Q ? {
    ...t
} : t;
function qe(t, e) {
    e = e || {};
    const n = {};
    function r(u, c, d) {
        return E.isPlainObject(u) && E.isPlainObject(c) ? E.merge.call({
            caseless: d
        }, u, c) : E.isPlainObject(c) ? E.merge({}, c) : E.isArray(c) ? c.slice() : c
    }
    function i(u, c, d) {
        if (E.isUndefined(c)) {
            if (!E.isUndefined(u))
                return r(void 0, u, d)
        } else
            return r(u, c, d)
    }
    function s(u, c) {
        if (!E.isUndefined(c))
            return r(void 0, c)
    }
    function o(u, c) {
        if (E.isUndefined(c)) {
            if (!E.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, c)
    }
    function l(u, c, d) {
        if (d in e)
            return r(u, c);
        if (d in t)
            return r(void 0, u)
    }
    const a = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: l,
        headers: (u, c) => i(Is(u), Is(c), !0)
    };
    return E.forEach(Object.keys(Object.assign({}, t, e)), function (c) {
        const d = a[c] || i
            , h = d(t[c], e[c], c);
        E.isUndefined(h) && d !== l || (n[c] = h)
    }),
        n
}
const yl = t => {
    const e = qe({}, t);
    let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: s, headers: o, auth: l } = e;
    e.headers = o = Q.from(o),
        e.url = fl(vl(e.baseURL, e.url), t.params, t.paramsSerializer),
        l && o.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
    let a;
    if (E.isFormData(n)) {
        if (Y.hasStandardBrowserEnv || Y.hasStandardBrowserWebWorkerEnv)
            o.setContentType(void 0);
        else if ((a = o.getContentType()) !== !1) {
            const [u, ...c] = a ? a.split(";").map(d => d.trim()).filter(Boolean) : [];
            o.setContentType([u || "multipart/form-data", ...c].join("; "))
        }
    }
    if (Y.hasStandardBrowserEnv && (r && E.isFunction(r) && (r = r(e)),
        r || r !== !1 && jd(e.url))) {
        const u = i && s && Ud.read(s);
        u && o.set(i, u)
    }
    return e
}
    , Vd = typeof XMLHttpRequest < "u"
    , Gd = Vd && function (t) {
        return new Promise(function (n, r) {
            const i = yl(t);
            let s = i.data;
            const o = Q.from(i.headers).normalize();
            let { responseType: l, onUploadProgress: a, onDownloadProgress: u } = i, c, d, h, f, m;
            function v() {
                f && f(),
                    m && m(),
                    i.cancelToken && i.cancelToken.unsubscribe(c),
                    i.signal && i.signal.removeEventListener("abort", c)
            }
            let g = new XMLHttpRequest;
            g.open(i.method.toUpperCase(), i.url, !0),
                g.timeout = i.timeout;
            function b() {
                if (!g)
                    return;
                const _ = Q.from("getAllResponseHeaders" in g && g.getAllResponseHeaders())
                    , D = {
                        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
                        status: g.status,
                        statusText: g.statusText,
                        headers: _,
                        config: t,
                        request: g
                    };
                ml(function (I) {
                    n(I),
                        v()
                }, function (I) {
                    r(I),
                        v()
                }, D),
                    g = null
            }
            "onloadend" in g ? g.onloadend = b : g.onreadystatechange = function () {
                !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(b)
            }
                ,
                g.onabort = function () {
                    g && (r(new x("Request aborted", x.ECONNABORTED, t, g)),
                        g = null)
                }
                ,
                g.onerror = function () {
                    r(new x("Network Error", x.ERR_NETWORK, t, g)),
                        g = null
                }
                ,
                g.ontimeout = function () {
                    let A = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
                    const D = i.transitional || hl;
                    i.timeoutErrorMessage && (A = i.timeoutErrorMessage),
                        r(new x(A, D.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED, t, g)),
                        g = null
                }
                ,
                s === void 0 && o.setContentType(null),
                "setRequestHeader" in g && E.forEach(o.toJSON(), function (A, D) {
                    g.setRequestHeader(D, A)
                }),
                E.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials),
                l && l !== "json" && (g.responseType = i.responseType),
                u && ([h, m] = mn(u, !0),
                    g.addEventListener("progress", h)),
                a && g.upload && ([d, f] = mn(a),
                    g.upload.addEventListener("progress", d),
                    g.upload.addEventListener("loadend", f)),
                (i.cancelToken || i.signal) && (c = _ => {
                    g && (r(!_ || _.type ? new ut(null, t, g) : _),
                        g.abort(),
                        g = null)
                }
                    ,
                    i.cancelToken && i.cancelToken.subscribe(c),
                    i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
            const S = Bd(i.url);
            if (S && Y.protocols.indexOf(S) === -1) {
                r(new x("Unsupported protocol " + S + ":", x.ERR_BAD_REQUEST, t));
                return
            }
            g.send(s || null)
        }
        )
    }
    , qd = (t, e) => {
        const { length: n } = t = t ? t.filter(Boolean) : [];
        if (e || n) {
            let r = new AbortController, i;
            const s = function (u) {
                if (!i) {
                    i = !0,
                        l();
                    const c = u instanceof Error ? u : this.reason;
                    r.abort(c instanceof x ? c : new ut(c instanceof Error ? c.message : c))
                }
            };
            let o = e && setTimeout(() => {
                o = null,
                    s(new x(`timeout ${e} of ms exceeded`, x.ETIMEDOUT))
            }
                , e);
            const l = () => {
                t && (o && clearTimeout(o),
                    o = null,
                    t.forEach(u => {
                        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s)
                    }
                    ),
                    t = null)
            }
                ;
            t.forEach(u => u.addEventListener("abort", s));
            const { signal: a } = r;
            return a.unsubscribe = () => E.asap(l),
                a
        }
    }
    , $d = function* (t, e) {
        let n = t.byteLength;
        if (!e || n < e) {
            yield t;
            return
        }
        let r = 0, i;
        for (; r < n;)
            i = r + e,
                yield t.slice(r, i),
                r = i
    }
    , Yd = async function* (t, e) {
        for await (const n of Qd(t))
            yield* $d(n, e)
    }
    , Qd = async function* (t) {
        if (t[Symbol.asyncIterator]) {
            yield* t;
            return
        }
        const e = t.getReader();
        try {
            for (; ;) {
                const { done: n, value: r } = await e.read();
                if (n)
                    break;
                yield r
            }
        } finally {
            await e.cancel()
        }
    }
    , Ms = (t, e, n, r) => {
        const i = Yd(t, e);
        let s = 0, o, l = a => {
            o || (o = !0,
                r && r(a))
        }
            ;
        return new ReadableStream({
            async pull(a) {
                try {
                    const { done: u, value: c } = await i.next();
                    if (u) {
                        l(),
                            a.close();
                        return
                    }
                    let d = c.byteLength;
                    if (n) {
                        let h = s += d;
                        n(h)
                    }
                    a.enqueue(new Uint8Array(c))
                } catch (u) {
                    throw l(u),
                    u
                }
            },
            cancel(a) {
                return l(a),
                    i.return()
            }
        }, {
            highWaterMark: 2
        })
    }
    , zn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
    , bl = zn && typeof ReadableStream == "function"
    , Zd = zn && (typeof TextEncoder == "function" ? (t => e => t.encode(e))(new TextEncoder) : async t => new Uint8Array(await new Response(t).arrayBuffer()))
    , El = (t, ...e) => {
        try {
            return !!t(...e)
        } catch {
            return !1
        }
    }
    , Xd = bl && El(() => {
        let t = !1;
        const e = new Request(Y.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return t = !0,
                    "half"
            }
        }).headers.has("Content-Type");
        return t && !e
    }
    )
    , Os = 64 * 1024
    , Nr = bl && El(() => E.isReadableStream(new Response("").body))
    , vn = {
        stream: Nr && (t => t.body)
    };
zn && (t => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
        !vn[e] && (vn[e] = E.isFunction(t[e]) ? n => n[e]() : (n, r) => {
            throw new x(`Response type '${e}' is not supported`, x.ERR_NOT_SUPPORT, r)
        }
        )
    }
    )
}
)(new Response);
const Kd = async t => {
    if (t == null)
        return 0;
    if (E.isBlob(t))
        return t.size;
    if (E.isSpecCompliantForm(t))
        return (await new Request(Y.origin, {
            method: "POST",
            body: t
        }).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(t) || E.isArrayBuffer(t))
        return t.byteLength;
    if (E.isURLSearchParams(t) && (t = t + ""),
        E.isString(t))
        return (await Zd(t)).byteLength
}
    , Jd = async (t, e) => {
        const n = E.toFiniteNumber(t.getContentLength());
        return n ?? Kd(e)
    }
    , ef = zn && (async t => {
        let { url: e, method: n, data: r, signal: i, cancelToken: s, timeout: o, onDownloadProgress: l, onUploadProgress: a, responseType: u, headers: c, withCredentials: d = "same-origin", fetchOptions: h } = yl(t);
        u = u ? (u + "").toLowerCase() : "text";
        let f = qd([i, s && s.toAbortSignal()], o), m;
        const v = f && f.unsubscribe && (() => {
            f.unsubscribe()
        }
        );
        let g;
        try {
            if (a && Xd && n !== "get" && n !== "head" && (g = await Jd(c, r)) !== 0) {
                let D = new Request(e, {
                    method: "POST",
                    body: r,
                    duplex: "half"
                }), R;
                if (E.isFormData(r) && (R = D.headers.get("content-type")) && c.setContentType(R),
                    D.body) {
                    const [I, T] = xs(g, mn(Ts(a)));
                    r = Ms(D.body, Os, I, T)
                }
            }
            E.isString(d) || (d = d ? "include" : "omit");
            const b = "credentials" in Request.prototype;
            m = new Request(e, {
                ...h,
                signal: f,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: r,
                duplex: "half",
                credentials: b ? d : void 0
            });
            let S = await fetch(m);
            const _ = Nr && (u === "stream" || u === "response");
            if (Nr && (l || _ && v)) {
                const D = {};
                ["status", "statusText", "headers"].forEach(Z => {
                    D[Z] = S[Z]
                }
                );
                const R = E.toFiniteNumber(S.headers.get("content-length"))
                    , [I, T] = l && xs(R, mn(Ts(l), !0)) || [];
                S = new Response(Ms(S.body, Os, I, () => {
                    T && T(),
                        v && v()
                }
                ), D)
            }
            u = u || "text";
            let A = await vn[E.findKey(vn, u) || "text"](S, t);
            return !_ && v && v(),
                await new Promise((D, R) => {
                    ml(D, R, {
                        data: A,
                        headers: Q.from(S.headers),
                        status: S.status,
                        statusText: S.statusText,
                        config: t,
                        request: m
                    })
                }
                )
        } catch (b) {
            throw v && v(),
            b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(new x("Network Error", x.ERR_NETWORK, t, m), {
                cause: b.cause || b
            }) : x.from(b, b && b.code, t, m)
        }
    }
    )
    , Pr = {
        http: gd,
        xhr: Gd,
        fetch: ef
    };
E.forEach(Pr, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch { }
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const ks = t => `- ${t}`
    , tf = t => E.isFunction(t) || t === null || t === !1
    , Sl = {
        getAdapter: t => {
            t = E.isArray(t) ? t : [t];
            const { length: e } = t;
            let n, r;
            const i = {};
            for (let s = 0; s < e; s++) {
                n = t[s];
                let o;
                if (r = n,
                    !tf(n) && (r = Pr[(o = String(n)).toLowerCase()],
                        r === void 0))
                    throw new x(`Unknown adapter '${o}'`);
                if (r)
                    break;
                i[o || "#" + s] = r
            }
            if (!r) {
                const s = Object.entries(i).map(([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
                let o = e ? s.length > 1 ? `since :
` + s.map(ks).join(`
`) : " " + ks(s[0]) : "as no adapter specified";
                throw new x("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
            }
            return r
        }
        ,
        adapters: Pr
    };
function cr(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted)
        throw new ut(null, t)
}
function Ns(t) {
    return cr(t),
        t.headers = Q.from(t.headers),
        t.data = ar.call(t, t.transformRequest),
        ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
        Sl.getAdapter(t.adapter || Ht.adapter)(t).then(function (r) {
            return cr(t),
                r.data = ar.call(t, t.transformResponse, r),
                r.headers = Q.from(r.headers),
                r
        }, function (r) {
            return gl(r) || (cr(t),
                r && r.response && (r.response.data = ar.call(t, t.transformResponse, r.response),
                    r.response.headers = Q.from(r.response.headers))),
                Promise.reject(r)
        })
}
const _l = "1.7.7"
    , Si = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
    Si[t] = function (r) {
        return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const Ps = {};
Si.transitional = function (e, n, r) {
    function i(s, o) {
        return "[Axios v" + _l + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "")
    }
    return (s, o, l) => {
        if (e === !1)
            throw new x(i(o, " has been removed" + (n ? " in " + n : "")), x.ERR_DEPRECATED);
        return n && !Ps[o] && (Ps[o] = !0,
            console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))),
            e ? e(s, o, l) : !0
    }
}
    ;
function nf(t, e, n) {
    if (typeof t != "object")
        throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(t);
    let i = r.length;
    for (; i-- > 0;) {
        const s = r[i]
            , o = e[s];
        if (o) {
            const l = t[s]
                , a = l === void 0 || o(l, s, t);
            if (a !== !0)
                throw new x("option " + s + " must be " + a, x.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new x("Unknown option " + s, x.ERR_BAD_OPTION)
    }
}
const Hr = {
    assertOptions: nf,
    validators: Si
}
    , ve = Hr.validators;
class Fe {
    constructor(e) {
        this.defaults = e,
            this.interceptors = {
                request: new Ds,
                response: new Ds
            }
    }
    async request(e, n) {
        try {
            return await this._request(e, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s
                } catch { }
            }
            throw r
        }
    }
    _request(e, n) {
        typeof e == "string" ? (n = n || {},
            n.url = e) : n = e || {},
            n = qe(this.defaults, n);
        const { transitional: r, paramsSerializer: i, headers: s } = n;
        r !== void 0 && Hr.assertOptions(r, {
            silentJSONParsing: ve.transitional(ve.boolean),
            forcedJSONParsing: ve.transitional(ve.boolean),
            clarifyTimeoutError: ve.transitional(ve.boolean)
        }, !1),
            i != null && (E.isFunction(i) ? n.paramsSerializer = {
                serialize: i
            } : Hr.assertOptions(i, {
                encode: ve.function,
                serialize: ve.function
            }, !0)),
            n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let o = s && E.merge(s.common, s[n.method]);
        s && E.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
            delete s[m]
        }
        ),
            n.headers = Q.concat(o, s);
        const l = [];
        let a = !0;
        this.interceptors.request.forEach(function (v) {
            typeof v.runWhen == "function" && v.runWhen(n) === !1 || (a = a && v.synchronous,
                l.unshift(v.fulfilled, v.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function (v) {
            u.push(v.fulfilled, v.rejected)
        });
        let c, d = 0, h;
        if (!a) {
            const m = [Ns.bind(this), void 0];
            for (m.unshift.apply(m, l),
                m.push.apply(m, u),
                h = m.length,
                c = Promise.resolve(n); d < h;)
                c = c.then(m[d++], m[d++]);
            return c
        }
        h = l.length;
        let f = n;
        for (d = 0; d < h;) {
            const m = l[d++]
                , v = l[d++];
            try {
                f = m(f)
            } catch (g) {
                v.call(this, g);
                break
            }
        }
        try {
            c = Ns.call(this, f)
        } catch (m) {
            return Promise.reject(m)
        }
        for (d = 0,
            h = u.length; d < h;)
            c = c.then(u[d++], u[d++]);
        return c
    }
    getUri(e) {
        e = qe(this.defaults, e);
        const n = vl(e.baseURL, e.url);
        return fl(n, e.params, e.paramsSerializer)
    }
}
E.forEach(["delete", "get", "head", "options"], function (e) {
    Fe.prototype[e] = function (n, r) {
        return this.request(qe(r || {}, {
            method: e,
            url: n,
            data: (r || {}).data
        }))
    }
});
E.forEach(["post", "put", "patch"], function (e) {
    function n(r) {
        return function (s, o, l) {
            return this.request(qe(l || {}, {
                method: e,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: o
            }))
        }
    }
    Fe.prototype[e] = n(),
        Fe.prototype[e + "Form"] = n(!0)
});
class _i {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (s) {
            n = s
        }
        );
        const r = this;
        this.promise.then(i => {
            if (!r._listeners)
                return;
            let s = r._listeners.length;
            for (; s-- > 0;)
                r._listeners[s](i);
            r._listeners = null
        }
        ),
            this.promise.then = i => {
                let s;
                const o = new Promise(l => {
                    r.subscribe(l),
                        s = l
                }
                ).then(i);
                return o.cancel = function () {
                    r.unsubscribe(s)
                }
                    ,
                    o
            }
            ,
            e(function (s, o, l) {
                r.reason || (r.reason = new ut(s, o, l),
                    n(r.reason))
            })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(e);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const e = new AbortController
            , n = r => {
                e.abort(r)
            }
            ;
        return this.subscribe(n),
            e.signal.unsubscribe = () => this.unsubscribe(n),
            e.signal
    }
    static source() {
        let e;
        return {
            token: new _i(function (i) {
                e = i
            }
            ),
            cancel: e
        }
    }
}
function rf(t) {
    return function (n) {
        return t.apply(null, n)
    }
}
function sf(t) {
    return E.isObject(t) && t.isAxiosError === !0
}
const Br = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Br).forEach(([t, e]) => {
    Br[e] = t
}
);
function Al(t) {
    const e = new Fe(t)
        , n = el(Fe.prototype.request, e);
    return E.extend(n, Fe.prototype, e, {
        allOwnKeys: !0
    }),
        E.extend(n, e, null, {
            allOwnKeys: !0
        }),
        n.create = function (i) {
            return Al(qe(t, i))
        }
        ,
        n
}
const L = Al(Ht);
L.Axios = Fe;
L.CanceledError = ut;
L.CancelToken = _i;
L.isCancel = gl;
L.VERSION = _l;
L.toFormData = Un;
L.AxiosError = x;
L.Cancel = L.CanceledError;
L.all = function (e) {
    return Promise.all(e)
}
    ;
L.spread = rf;
L.isAxiosError = sf;
L.mergeConfig = qe;
L.AxiosHeaders = Q;
L.formToJSON = t => pl(E.isHTMLForm(t) ? new FormData(t) : t);
L.getAdapter = Sl.getAdapter;
L.HttpStatusCode = Br;
L.default = L;
window.axios = L;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var Wn, C, wl, Cl, rt, He, Hs, Dl, Rl, yn = {}, xl = [], of = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function be(t, e) {
    for (var n in e)
        t[n] = e[n];
    return t
}
function Tl(t) {
    var e = t.parentNode;
    e && e.removeChild(t)
}
function p(t, e, n) {
    var r, i, s, o = {};
    for (s in e)
        s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? Wn.call(arguments, 2) : n),
        typeof t == "function" && t.defaultProps != null)
        for (s in t.defaultProps)
            o[s] === void 0 && (o[s] = t.defaultProps[s]);
    return an(t, o, r, i, null)
}
function an(t, e, n, r, i) {
    var s = {
        type: t,
        props: e,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: i ?? ++wl
    };
    return i == null && C.vnode != null && C.vnode(s),
        s
}
function G() {
    return {
        current: null
    }
}
function k(t) {
    return t.children
}
function lf(t, e, n, r, i) {
    var s;
    for (s in n)
        s === "children" || s === "key" || s in e || bn(t, s, null, n[s], r);
    for (s in e)
        i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || bn(t, s, e[s], n[s], r)
}
function Bs(t, e, n) {
    e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || of.test(e) ? n : n + "px"
}
function bn(t, e, n, r, i) {
    var s;
    e: if (e === "style")
        if (typeof n == "string")
            t.style.cssText = n;
        else {
            if (typeof r == "string" && (t.style.cssText = r = ""),
                r)
                for (e in r)
                    n && e in n || Bs(t.style, e, "");
            if (n)
                for (e in n)
                    r && n[e] === r[e] || Bs(t.style, e, n[e])
        }
    else if (e[0] === "o" && e[1] === "n")
        s = e !== (e = e.replace(/Capture$/, "")),
            e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2),
            t.l || (t.l = {}),
            t.l[e + s] = n,
            n ? r || t.addEventListener(e, s ? Fs : Ls, s) : t.removeEventListener(e, s ? Fs : Ls, s);
    else if (e !== "dangerouslySetInnerHTML") {
        if (i)
            e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
            try {
                t[e] = n ?? "";
                break e
            } catch { }
        typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n))
    }
}
function Ls(t) {
    rt = !0;
    try {
        return this.l[t.type + !1](C.event ? C.event(t) : t)
    } finally {
        rt = !1
    }
}
function Fs(t) {
    rt = !0;
    try {
        return this.l[t.type + !0](C.event ? C.event(t) : t)
    } finally {
        rt = !1
    }
}
function K(t, e) {
    this.props = t,
        this.context = e
}
function Tt(t, e) {
    if (e == null)
        return t.__ ? Tt(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var n; e < t.__k.length; e++)
        if ((n = t.__k[e]) != null && n.__e != null)
            return n.__e;
    return typeof t.type == "function" ? Tt(t) : null
}
function Il(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null,
            e = 0; e < t.__k.length; e++)
            if ((n = t.__k[e]) != null && n.__e != null) {
                t.__e = t.__c.base = n.__e;
                break
            }
        return Il(t)
    }
}
function af(t) {
    rt ? setTimeout(t) : Dl(t)
}
function Lr(t) {
    (!t.__d && (t.__d = !0) && He.push(t) && !En.__r++ || Hs !== C.debounceRendering) && ((Hs = C.debounceRendering) || af)(En)
}
function En() {
    var t, e, n, r, i, s, o, l;
    for (He.sort(function (a, u) {
        return a.__v.__b - u.__v.__b
    }); t = He.shift();)
        t.__d && (e = He.length,
            r = void 0,
            i = void 0,
            o = (s = (n = t).__v).__e,
            (l = n.__P) && (r = [],
                (i = be({}, s)).__v = s.__v + 1,
                Ai(l, s, i, n.__n, l.ownerSVGElement !== void 0, s.__h != null ? [o] : null, r, o ?? Tt(s), s.__h),
                Pl(r, s),
                s.__e != o && Il(s)),
            He.length > e && He.sort(function (a, u) {
                return a.__v.__b - u.__v.__b
            }));
    En.__r = 0
}
function Ml(t, e, n, r, i, s, o, l, a, u) {
    var c, d, h, f, m, v, g, b = r && r.__k || xl, S = b.length;
    for (n.__k = [],
        c = 0; c < e.length; c++)
        if ((f = n.__k[c] = (f = e[c]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? an(null, f, null, null, f) : Array.isArray(f) ? an(k, {
            children: f
        }, null, null, null) : f.__b > 0 ? an(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
            if (f.__ = n,
                f.__b = n.__b + 1,
                (h = b[c]) === null || h && f.key == h.key && f.type === h.type)
                b[c] = void 0;
            else
                for (d = 0; d < S; d++) {
                    if ((h = b[d]) && f.key == h.key && f.type === h.type) {
                        b[d] = void 0;
                        break
                    }
                    h = null
                }
            Ai(t, f, h = h || yn, i, s, o, l, a, u),
                m = f.__e,
                (d = f.ref) && h.ref != d && (g || (g = []),
                    h.ref && g.push(h.ref, null, f),
                    g.push(d, f.__c || m, f)),
                m != null ? (v == null && (v = m),
                    typeof f.type == "function" && f.__k === h.__k ? f.__d = a = Ol(f, a, t) : a = kl(t, f, h, b, m, a),
                    typeof n.type == "function" && (n.__d = a)) : a && h.__e == a && a.parentNode != t && (a = Tt(h))
        }
    for (n.__e = v,
        c = S; c--;)
        b[c] != null && (typeof n.type == "function" && b[c].__e != null && b[c].__e == n.__d && (n.__d = Nl(r).nextSibling),
            Bl(b[c], b[c]));
    if (g)
        for (c = 0; c < g.length; c++)
            Hl(g[c], g[++c], g[++c])
}
function Ol(t, e, n) {
    for (var r, i = t.__k, s = 0; i && s < i.length; s++)
        (r = i[s]) && (r.__ = t,
            e = typeof r.type == "function" ? Ol(r, e, n) : kl(n, r, r, i, r.__e, e));
    return e
}
function Sn(t, e) {
    return e = e || [],
        t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function (n) {
            Sn(n, e)
        }) : e.push(t)),
        e
}
function kl(t, e, n, r, i, s) {
    var o, l, a;
    if (e.__d !== void 0)
        o = e.__d,
            e.__d = void 0;
    else if (n == null || i != s || i.parentNode == null)
        e: if (s == null || s.parentNode !== t)
            t.appendChild(i),
                o = null;
        else {
            for (l = s,
                a = 0; (l = l.nextSibling) && a < r.length; a += 1)
                if (l == i)
                    break e;
            t.insertBefore(i, s),
                o = s
        }
    return o !== void 0 ? o : i.nextSibling
}
function Nl(t) {
    var e, n, r;
    if (t.type == null || typeof t.type == "string")
        return t.__e;
    if (t.__k) {
        for (e = t.__k.length - 1; e >= 0; e--)
            if ((n = t.__k[e]) && (r = Nl(n)))
                return r
    }
    return null
}
function Ai(t, e, n, r, i, s, o, l, a) {
    var u, c, d, h, f, m, v, g, b, S, _, A, D, R, I, T = e.type;
    if (e.constructor !== void 0)
        return null;
    n.__h != null && (a = n.__h,
        l = e.__e = n.__e,
        e.__h = null,
        s = [l]),
        (u = C.__b) && u(e);
    try {
        e: if (typeof T == "function") {
            if (g = e.props,
                b = (u = T.contextType) && r[u.__c],
                S = u ? b ? b.props.value : u.__ : r,
                n.__c ? v = (c = e.__c = n.__c).__ = c.__E : ("prototype" in T && T.prototype.render ? e.__c = c = new T(g, S) : (e.__c = c = new K(g, S),
                    c.constructor = T,
                    c.render = uf),
                    b && b.sub(c),
                    c.props = g,
                    c.state || (c.state = {}),
                    c.context = S,
                    c.__n = r,
                    d = c.__d = !0,
                    c.__h = [],
                    c._sb = []),
                c.__s == null && (c.__s = c.state),
                T.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = be({}, c.__s)),
                    be(c.__s, T.getDerivedStateFromProps(g, c.__s))),
                h = c.props,
                f = c.state,
                c.__v = e,
                d)
                T.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(),
                    c.componentDidMount != null && c.__h.push(c.componentDidMount);
            else {
                if (T.getDerivedStateFromProps == null && g !== h && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, S),
                    !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, S) === !1 || e.__v === n.__v) {
                    for (e.__v !== n.__v && (c.props = g,
                        c.state = c.__s,
                        c.__d = !1),
                        e.__e = n.__e,
                        e.__k = n.__k,
                        e.__k.forEach(function (Z) {
                            Z && (Z.__ = e)
                        }),
                        _ = 0; _ < c._sb.length; _++)
                        c.__h.push(c._sb[_]);
                    c._sb = [],
                        c.__h.length && o.push(c);
                    break e
                }
                c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, S),
                    c.componentDidUpdate != null && c.__h.push(function () {
                        c.componentDidUpdate(h, f, m)
                    })
            }
            if (c.context = S,
                c.props = g,
                c.__P = t,
                A = C.__r,
                D = 0,
                "prototype" in T && T.prototype.render) {
                for (c.state = c.__s,
                    c.__d = !1,
                    A && A(e),
                    u = c.render(c.props, c.state, c.context),
                    R = 0; R < c._sb.length; R++)
                    c.__h.push(c._sb[R]);
                c._sb = []
            } else
                do
                    c.__d = !1,
                        A && A(e),
                        u = c.render(c.props, c.state, c.context),
                        c.state = c.__s;
                while (c.__d && ++D < 25);
            c.state = c.__s,
                c.getChildContext != null && (r = be(be({}, r), c.getChildContext())),
                d || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(h, f)),
                I = u != null && u.type === k && u.key == null ? u.props.children : u,
                Ml(t, Array.isArray(I) ? I : [I], e, n, r, i, s, o, l, a),
                c.base = e.__e,
                e.__h = null,
                c.__h.length && o.push(c),
                v && (c.__E = c.__ = null),
                c.__e = !1
        } else
            s == null && e.__v === n.__v ? (e.__k = n.__k,
                e.__e = n.__e) : e.__e = cf(n.__e, e, n, r, i, s, o, a);
        (u = C.diffed) && u(e)
    } catch (Z) {
        e.__v = null,
            (a || s != null) && (e.__e = l,
                e.__h = !!a,
                s[s.indexOf(l)] = null),
            C.__e(Z, e, n)
    }
}
function Pl(t, e) {
    C.__c && C.__c(e, t),
        t.some(function (n) {
            try {
                t = n.__h,
                    n.__h = [],
                    t.some(function (r) {
                        r.call(n)
                    })
            } catch (r) {
                C.__e(r, n.__v)
            }
        })
}
function cf(t, e, n, r, i, s, o, l) {
    var a, u, c, d = n.props, h = e.props, f = e.type, m = 0;
    if (f === "svg" && (i = !0),
        s != null) {
        for (; m < s.length; m++)
            if ((a = s[m]) && "setAttribute" in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
                t = a,
                    s[m] = null;
                break
            }
    }
    if (t == null) {
        if (f === null)
            return document.createTextNode(h);
        t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h),
            s = null,
            l = !1
    }
    if (f === null)
        d === h || l && t.data === h || (t.data = h);
    else {
        if (s = s && Wn.call(t.childNodes),
            u = (d = n.props || yn).dangerouslySetInnerHTML,
            c = h.dangerouslySetInnerHTML,
            !l) {
            if (s != null)
                for (d = {},
                    m = 0; m < t.attributes.length; m++)
                    d[t.attributes[m].name] = t.attributes[m].value;
            (c || u) && (c && (u && c.__html == u.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""))
        }
        if (lf(t, h, d, i, l),
            c)
            e.__k = [];
        else if (m = e.props.children,
            Ml(t, Array.isArray(m) ? m : [m], e, n, r, i && f !== "foreignObject", s, o, s ? s[0] : n.__k && Tt(n, 0), l),
            s != null)
            for (m = s.length; m--;)
                s[m] != null && Tl(s[m]);
        l || ("value" in h && (m = h.value) !== void 0 && (m !== t.value || f === "progress" && !m || f === "option" && m !== d.value) && bn(t, "value", m, d.value, !1),
            "checked" in h && (m = h.checked) !== void 0 && m !== t.checked && bn(t, "checked", m, d.checked, !1))
    }
    return t
}
function Hl(t, e, n) {
    try {
        typeof t == "function" ? t(e) : t.current = e
    } catch (r) {
        C.__e(r, n)
    }
}
function Bl(t, e, n) {
    var r, i;
    if (C.unmount && C.unmount(t),
        (r = t.ref) && (r.current && r.current !== t.__e || Hl(r, null, e)),
        (r = t.__c) != null) {
        if (r.componentWillUnmount)
            try {
                r.componentWillUnmount()
            } catch (s) {
                C.__e(s, e)
            }
        r.base = r.__P = null,
            t.__c = void 0
    }
    if (r = t.__k)
        for (i = 0; i < r.length; i++)
            r[i] && Bl(r[i], e, n || typeof t.type != "function");
    n || t.__e == null || Tl(t.__e),
        t.__ = t.__e = t.__d = void 0
}
function uf(t, e, n) {
    return this.constructor(t, n)
}
function It(t, e, n) {
    var r, i, s;
    C.__ && C.__(t, e),
        i = (r = typeof n == "function") ? null : e.__k,
        s = [],
        Ai(e, t = (!r && n || e).__k = p(k, null, [t]), i || yn, yn, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? Wn.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r),
        Pl(s, t)
}
function df(t, e) {
    var n = {
        __c: e = "__cC" + Rl++,
        __: t,
        Consumer: function (r, i) {
            return r.children(i)
        },
        Provider: function (r) {
            var i, s;
            return this.getChildContext || (i = [],
                (s = {})[e] = this,
                this.getChildContext = function () {
                    return s
                }
                ,
                this.shouldComponentUpdate = function (o) {
                    this.props.value !== o.value && i.some(function (l) {
                        l.__e = !0,
                            Lr(l)
                    })
                }
                ,
                this.sub = function (o) {
                    i.push(o);
                    var l = o.componentWillUnmount;
                    o.componentWillUnmount = function () {
                        i.splice(i.indexOf(o), 1),
                            l && l.call(o)
                    }
                }
            ),
                r.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
Wn = xl.slice,
    C = {
        __e: function (t, e, n, r) {
            for (var i, s, o; e = e.__;)
                if ((i = e.__c) && !i.__)
                    try {
                        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)),
                            o = i.__d),
                            i.componentDidCatch != null && (i.componentDidCatch(t, r || {}),
                                o = i.__d),
                            o)
                            return i.__E = i
                    } catch (l) {
                        t = l
                    }
            throw t
        }
    },
    wl = 0,
    Cl = function (t) {
        return t != null && t.constructor === void 0
    }
    ,
    rt = !1,
    K.prototype.setState = function (t, e) {
        var n;
        n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = be({}, this.state),
            typeof t == "function" && (t = t(be({}, n), this.props)),
            t && be(n, t),
            t != null && this.__v && (e && this._sb.push(e),
                Lr(this))
    }
    ,
    K.prototype.forceUpdate = function (t) {
        this.__v && (this.__e = !0,
            t && this.__h.push(t),
            Lr(this))
    }
    ,
    K.prototype.render = k,
    He = [],
    Dl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    En.__r = 0,
    Rl = 0;
var le, ur, js, Ll = [], dr = [], Us = C.__b, zs = C.__r, Ws = C.diffed, Vs = C.__c, Gs = C.unmount;
function ff() {
    for (var t; t = Ll.shift();)
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(cn),
                    t.__H.__h.forEach(Fr),
                    t.__H.__h = []
            } catch (e) {
                t.__H.__h = [],
                    C.__e(e, t.__v)
            }
}
C.__b = function (t) {
    le = null,
        Us && Us(t)
}
    ,
    C.__r = function (t) {
        zs && zs(t);
        var e = (le = t.__c).__H;
        e && (ur === le ? (e.__h = [],
            le.__h = [],
            e.__.forEach(function (n) {
                n.__N && (n.__ = n.__N),
                    n.__V = dr,
                    n.__N = n.i = void 0
            })) : (e.__h.forEach(cn),
                e.__h.forEach(Fr),
                e.__h = [])),
            ur = le
    }
    ,
    C.diffed = function (t) {
        Ws && Ws(t);
        var e = t.__c;
        e && e.__H && (e.__H.__h.length && (Ll.push(e) !== 1 && js === C.requestAnimationFrame || ((js = C.requestAnimationFrame) || hf)(ff)),
            e.__H.__.forEach(function (n) {
                n.i && (n.__H = n.i),
                    n.__V !== dr && (n.__ = n.__V),
                    n.i = void 0,
                    n.__V = dr
            })),
            ur = le = null
    }
    ,
    C.__c = function (t, e) {
        e.some(function (n) {
            try {
                n.__h.forEach(cn),
                    n.__h = n.__h.filter(function (r) {
                        return !r.__ || Fr(r)
                    })
            } catch (r) {
                e.some(function (i) {
                    i.__h && (i.__h = [])
                }),
                    e = [],
                    C.__e(r, n.__v)
            }
        }),
            Vs && Vs(t, e)
    }
    ,
    C.unmount = function (t) {
        Gs && Gs(t);
        var e, n = t.__c;
        n && n.__H && (n.__H.__.forEach(function (r) {
            try {
                cn(r)
            } catch (i) {
                e = i
            }
        }),
            n.__H = void 0,
            e && C.__e(e, n.__v))
    }
    ;
var qs = typeof requestAnimationFrame == "function";
function hf(t) {
    var e, n = function () {
        clearTimeout(r),
            qs && cancelAnimationFrame(e),
            setTimeout(t)
    }, r = setTimeout(n, 100);
    qs && (e = requestAnimationFrame(n))
}
function cn(t) {
    var e = le
        , n = t.__c;
    typeof n == "function" && (t.__c = void 0,
        n()),
        le = e
}
function Fr(t) {
    var e = le;
    t.__c = t.__(),
        le = e
}
function pf(t, e) {
    for (var n in e)
        t[n] = e[n];
    return t
}
function $s(t, e) {
    for (var n in t)
        if (n !== "__source" && !(n in e))
            return !0;
    for (var r in e)
        if (r !== "__source" && t[r] !== e[r])
            return !0;
    return !1
}
function Ys(t) {
    this.props = t
}
(Ys.prototype = new K).isPureReactComponent = !0,
    Ys.prototype.shouldComponentUpdate = function (t, e) {
        return $s(this.props, t) || $s(this.state, e)
    }
    ;
var Qs = C.__b;
C.__b = function (t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref,
        t.ref = null),
        Qs && Qs(t)
}
    ;
var gf = C.__e;
C.__e = function (t, e, n, r) {
    if (t.then) {
        for (var i, s = e; s = s.__;)
            if ((i = s.__c) && i.__c)
                return e.__e == null && (e.__e = n.__e,
                    e.__k = n.__k),
                    i.__c(t, e)
    }
    gf(t, e, n, r)
}
    ;
var Zs = C.unmount;
function Fl(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (r) {
        typeof r.__c == "function" && r.__c()
    }),
        t.__c.__H = null),
        (t = pf({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e),
            t.__c = null),
        t.__k = t.__k && t.__k.map(function (r) {
            return Fl(r, e, n)
        })),
        t
}
function jl(t, e, n) {
    return t && (t.__v = null,
        t.__k = t.__k && t.__k.map(function (r) {
            return jl(r, e, n)
        }),
        t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d),
            t.__c.__e = !0,
            t.__c.__P = n)),
        t
}
function fr() {
    this.__u = 0,
        this.t = null,
        this.__b = null
}
function Ul(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t)
}
function qt() {
    this.u = null,
        this.o = null
}
C.unmount = function (t) {
    var e = t.__c;
    e && e.__R && e.__R(),
        e && t.__h === !0 && (t.type = null),
        Zs && Zs(t)
}
    ,
    (fr.prototype = new K).__c = function (t, e) {
        var n = e.__c
            , r = this;
        r.t == null && (r.t = []),
            r.t.push(n);
        var i = Ul(r.__v)
            , s = !1
            , o = function () {
                s || (s = !0,
                    n.__R = null,
                    i ? i(l) : l())
            };
        n.__R = o;
        var l = function () {
            if (!--r.__u) {
                if (r.state.__a) {
                    var u = r.state.__a;
                    r.__v.__k[0] = jl(u, u.__c.__P, u.__c.__O)
                }
                var c;
                for (r.setState({
                    __a: r.__b = null
                }); c = r.t.pop();)
                    c.forceUpdate()
            }
        }
            , a = e.__h === !0;
        r.__u++ || a || r.setState({
            __a: r.__b = r.__v.__k[0]
        }),
            t.then(o, o)
    }
    ,
    fr.prototype.componentWillUnmount = function () {
        this.t = []
    }
    ,
    fr.prototype.render = function (t, e) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div")
                    , r = this.__v.__k[0].__c;
                this.__v.__k[0] = Fl(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var i = e.__a && p(k, null, t.fallback);
        return i && (i.__h = null),
            [p(k, null, e.__a ? null : t.children), i]
    }
    ;
var Xs = function (t, e, n) {
    if (++n[1] === n[0] && t.o.delete(e),
        t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
        for (n = t.u; n;) {
            for (; n.length > 3;)
                n.pop()();
            if (n[1] < n[0])
                break;
            t.u = n = n[2]
        }
};
function mf(t) {
    return this.getChildContext = function () {
        return t.context
    }
        ,
        t.children
}
function vf(t) {
    var e = this
        , n = t.i;
    e.componentWillUnmount = function () {
        It(null, e.l),
            e.l = null,
            e.i = null
    }
        ,
        e.i && e.i !== n && e.componentWillUnmount(),
        t.__v ? (e.l || (e.i = n,
            e.l = {
                nodeType: 1,
                parentNode: n,
                childNodes: [],
                appendChild: function (r) {
                    this.childNodes.push(r),
                        e.i.appendChild(r)
                },
                insertBefore: function (r, i) {
                    this.childNodes.push(r),
                        e.i.appendChild(r)
                },
                removeChild: function (r) {
                    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                        e.i.removeChild(r)
                }
            }),
            It(p(mf, {
                context: e.context
            }, t.__v), e.l)) : e.l && e.componentWillUnmount()
}
function yf(t, e) {
    var n = p(vf, {
        __v: t,
        i: e
    });
    return n.containerInfo = e,
        n
}
(qt.prototype = new K).__a = function (t) {
    var e = this
        , n = Ul(e.__v)
        , r = e.o.get(t);
    return r[0]++,
        function (i) {
            var s = function () {
                e.props.revealOrder ? (r.push(i),
                    Xs(e, t, r)) : i()
            };
            n ? n(s) : s()
        }
}
    ,
    qt.prototype.render = function (t) {
        this.u = null,
            this.o = new Map;
        var e = Sn(t.children);
        t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
        for (var n = e.length; n--;)
            this.o.set(e[n], this.u = [1, 0, this.u]);
        return t.children
    }
    ,
    qt.prototype.componentDidUpdate = qt.prototype.componentDidMount = function () {
        var t = this;
        this.o.forEach(function (e, n) {
            Xs(t, n, e)
        })
    }
    ;
var bf = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103
    , Ef = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
    , Sf = typeof document < "u"
    , _f = function (t) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t)
    };
K.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
        Object.defineProperty(K.prototype, t, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + t]
            },
            set: function (e) {
                Object.defineProperty(this, t, {
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        })
    });
var Ks = C.event;
function Af() { }
function wf() {
    return this.cancelBubble
}
function Cf() {
    return this.defaultPrevented
}
C.event = function (t) {
    return Ks && (t = Ks(t)),
        t.persist = Af,
        t.isPropagationStopped = wf,
        t.isDefaultPrevented = Cf,
        t.nativeEvent = t
}
    ;
var Js = {
    configurable: !0,
    get: function () {
        return this.class
    }
}
    , eo = C.vnode;
C.vnode = function (t) {
    var e = t.type
        , n = t.props
        , r = n;
    if (typeof e == "string") {
        var i = e.indexOf("-") === -1;
        for (var s in r = {},
            n) {
            var o = n[s];
            Sf && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && o == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !_f(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && Ef.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0),
                /^oninput$/i.test(s) && (s = s.toLowerCase(),
                    r[s] && (s = "oninputCapture")),
                r[s] = o)
        }
        e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Sn(n.children).forEach(function (l) {
            l.props.selected = r.value.indexOf(l.props.value) != -1
        })),
            e == "select" && r.defaultValue != null && (r.value = Sn(n.children).forEach(function (l) {
                l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value
            })),
            t.props = r,
            n.class != n.className && (Js.enumerable = "className" in n,
                n.className != null && (r.class = n.className),
                Object.defineProperty(r, "className", Js))
    }
    t.$$typeof = bf,
        eo && eo(t)
}
    ;
var to = C.__r;
C.__r = function (t) {
    to && to(t),
        t.__c
}
    ;
const zl = []
    , jr = new Map;
function Vn(t) {
    zl.push(t),
        jr.forEach(e => {
            Vl(e, t)
        }
        )
}
function Df(t) {
    t.isConnected && t.getRootNode && Wl(t.getRootNode())
}
function Wl(t) {
    let e = jr.get(t);
    if (!e || !e.isConnected) {
        if (e = t.querySelector("style[data-fullcalendar]"),
            !e) {
            e = document.createElement("style"),
                e.setAttribute("data-fullcalendar", "");
            const n = xf();
            n && (e.nonce = n);
            const r = t === document ? document.head : t
                , i = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
            r.insertBefore(e, i)
        }
        jr.set(t, e),
            Rf(e)
    }
}
function Rf(t) {
    for (const e of zl)
        Vl(t, e)
}
function Vl(t, e) {
    const { sheet: n } = t
        , r = n.cssRules.length;
    e.split("}").forEach((i, s) => {
        i = i.trim(),
            i && n.insertRule(i + "}", r + s)
    }
    )
}
let hr;
function xf() {
    return hr === void 0 && (hr = Tf()),
        hr
}
function Tf() {
    const t = document.querySelector('meta[name="csp-nonce"]');
    if (t && t.hasAttribute("content"))
        return t.getAttribute("content");
    const e = document.querySelector("script[nonce]");
    return e && e.nonce || ""
}
typeof document < "u" && Wl(document);
var If = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Vn(If);
class wi {
    constructor(e) {
        this.drainedOption = e,
            this.isRunning = !1,
            this.isDirty = !1,
            this.pauseDepths = {},
            this.timeoutId = 0
    }
    request(e) {
        this.isDirty = !0,
            this.isPaused() || (this.clearTimeout(),
                e == null ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
    }
    pause(e = "") {
        let { pauseDepths: n } = this;
        n[e] = (n[e] || 0) + 1,
            this.clearTimeout()
    }
    resume(e = "", n) {
        let { pauseDepths: r } = this;
        e in r && (n ? delete r[e] : (r[e] -= 1,
            r[e] <= 0 && delete r[e]),
            this.tryDrain())
    }
    isPaused() {
        return Object.keys(this.pauseDepths).length
    }
    tryDrain() {
        if (!this.isRunning && !this.isPaused()) {
            for (this.isRunning = !0; this.isDirty;)
                this.isDirty = !1,
                    this.drained();
            this.isRunning = !1
        }
    }
    clear() {
        this.clearTimeout(),
            this.isDirty = !1,
            this.pauseDepths = {}
    }
    clearTimeout() {
        this.timeoutId && (clearTimeout(this.timeoutId),
            this.timeoutId = 0)
    }
    drained() {
        this.drainedOption && this.drainedOption()
    }
}
function Ci(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function W(t, e) {
    if (t.closest)
        return t.closest(e);
    if (!document.documentElement.contains(t))
        return null;
    do {
        if (Mf(t, e))
            return t;
        t = t.parentElement || t.parentNode
    } while (t !== null && t.nodeType === 1);
    return null
}
function Mf(t, e) {
    return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e)
}
function Of(t, e) {
    let n = t instanceof HTMLElement ? [t] : t
        , r = [];
    for (let i = 0; i < n.length; i += 1) {
        let s = n[i].querySelectorAll(e);
        for (let o = 0; o < s.length; o += 1)
            r.push(s[o])
    }
    return r
}
const kf = /(top|left|right|bottom|width|height)$/i;
function _t(t, e) {
    for (let n in e)
        Gl(t, n, e[n])
}
function Gl(t, e, n) {
    n == null ? t.style[e] = "" : typeof n == "number" && kf.test(e) ? t.style[e] = `${n}px` : t.style[e] = n
}
function ql(t) {
    var e, n;
    return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target
}
let no = 0;
function _e() {
    return no += 1,
        "fc-dom-" + no
}
function Gn(t) {
    t.preventDefault()
}
function Nf(t, e) {
    return n => {
        let r = W(n.target, t);
        r && e.call(r, n, r)
    }
}
function $l(t, e, n, r) {
    let i = Nf(n, r);
    return t.addEventListener(e, i),
        () => {
            t.removeEventListener(e, i)
        }
}
function Pf(t, e, n, r) {
    let i;
    return $l(t, "mouseover", e, (s, o) => {
        if (o !== i) {
            i = o,
                n(s, o);
            let l = a => {
                i = null,
                    r(a, o),
                    o.removeEventListener("mouseleave", l)
            }
                ;
            o.addEventListener("mouseleave", l)
        }
    }
    )
}
const ro = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
function Hf(t, e) {
    let n = r => {
        e(r),
            ro.forEach(i => {
                t.removeEventListener(i, n)
            }
            )
    }
        ;
    ro.forEach(r => {
        t.addEventListener(r, n)
    }
    )
}
function Yl(t) {
    return Object.assign({
        onClick: t
    }, Ql(t))
}
function Ql(t) {
    return {
        tabIndex: 0,
        onKeyDown(e) {
            (e.key === "Enter" || e.key === " ") && (t(e),
                e.preventDefault())
        }
    }
}
let io = 0;
function Qe() {
    return io += 1,
        String(io)
}
function Di() {
    document.body.classList.add("fc-not-allowed")
}
function Ri() {
    document.body.classList.remove("fc-not-allowed")
}
function Bf(t) {
    t.style.userSelect = "none",
        t.style.webkitUserSelect = "none",
        t.addEventListener("selectstart", Gn)
}
function Lf(t) {
    t.style.userSelect = "",
        t.style.webkitUserSelect = "",
        t.removeEventListener("selectstart", Gn)
}
function Ff(t) {
    t.addEventListener("contextmenu", Gn)
}
function jf(t) {
    t.removeEventListener("contextmenu", Gn)
}
function Uf(t) {
    let e = [], n = [], r, i;
    for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t),
        r = 0; r < n.length; r += 1)
        i = n[r],
            typeof i == "string" ? e.push(i.charAt(0) === "-" ? {
                field: i.substring(1),
                order: -1
            } : {
                field: i,
                order: 1
            }) : typeof i == "function" && e.push({
                func: i
            });
    return e
}
function zf(t, e, n) {
    let r, i;
    for (r = 0; r < n.length; r += 1)
        if (i = Wf(t, e, n[r]),
            i)
            return i;
    return 0
}
function Wf(t, e, n) {
    return n.func ? n.func(t, e) : Vf(t[n.field], e[n.field]) * (n.order || 1)
}
function Vf(t, e) {
    return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e
}
function et(t, e) {
    let n = String(t);
    return "000".substr(0, e - n.length) + n
}
function At(t, e, n) {
    return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n
}
function Gf(t, e) {
    return t - e
}
function un(t) {
    return t % 1 === 0
}
function qf(t) {
    let e = t.querySelector(".fc-scrollgrid-shrink-frame")
        , n = t.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!e)
        throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n)
        throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return t.getBoundingClientRect().width - e.getBoundingClientRect().width + n.getBoundingClientRect().width
}
const so = ["years", "months", "days", "milliseconds"]
    , $f = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function M(t, e) {
    return typeof t == "string" ? Yf(t) : typeof t == "object" && t ? oo(t) : typeof t == "number" ? oo({
        [e || "milliseconds"]: t
    }) : null
}
function Yf(t) {
    let e = $f.exec(t);
    if (e) {
        let n = e[1] ? -1 : 1;
        return {
            years: 0,
            months: 0,
            days: n * (e[2] ? parseInt(e[2], 10) : 0),
            milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + (e[6] ? parseInt(e[6], 10) : 0))
        }
    }
    return null
}
function oo(t) {
    let e = {
        years: t.years || t.year || 0,
        months: t.months || t.month || 0,
        days: t.days || t.day || 0,
        milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
    }
        , n = t.weeks || t.week;
    return n && (e.days += n * 7,
        e.specifiedWeeks = !0),
        e
}
function Qf(t, e) {
    return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds
}
function Ur(t, e) {
    return {
        years: t.years + e.years,
        months: t.months + e.months,
        days: t.days + e.days,
        milliseconds: t.milliseconds + e.milliseconds
    }
}
function Zf(t, e) {
    return {
        years: t.years - e.years,
        months: t.months - e.months,
        days: t.days - e.days,
        milliseconds: t.milliseconds - e.milliseconds
    }
}
function Xf(t, e) {
    return {
        years: t.years * e,
        months: t.months * e,
        days: t.days * e,
        milliseconds: t.milliseconds * e
    }
}
function Kf(t) {
    return tt(t) / 365
}
function Jf(t) {
    return tt(t) / 30
}
function tt(t) {
    return te(t) / 864e5
}
function te(t) {
    return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds
}
function xi(t, e) {
    let n = null;
    for (let r = 0; r < so.length; r += 1) {
        let i = so[r];
        if (e[i]) {
            let s = t[i] / e[i];
            if (!un(s) || n !== null && n !== s)
                return null;
            n = s
        } else if (t[i])
            return null
    }
    return n
}
function zr(t) {
    let e = t.milliseconds;
    if (e) {
        if (e % 1e3 !== 0)
            return {
                unit: "millisecond",
                value: e
            };
        if (e % (1e3 * 60) !== 0)
            return {
                unit: "second",
                value: e / 1e3
            };
        if (e % (1e3 * 60 * 60) !== 0)
            return {
                unit: "minute",
                value: e / (1e3 * 60)
            };
        if (e)
            return {
                unit: "hour",
                value: e / (1e3 * 60 * 60)
            }
    }
    return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? {
        unit: "week",
        value: t.days / 7
    } : {
        unit: "day",
        value: t.days
    } : t.months ? {
        unit: "month",
        value: t.months
    } : t.years ? {
        unit: "year",
        value: t.years
    } : {
        unit: "millisecond",
        value: 0
    }
}
function Ae(t, e, n) {
    if (t === e)
        return !0;
    let r = t.length, i;
    if (r !== e.length)
        return !1;
    for (i = 0; i < r; i += 1)
        if (!(n ? n(t[i], e[i]) : t[i] === e[i]))
            return !1;
    return !0
}
const eh = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function lo(t, e) {
    let n = Ee(t);
    return n[2] += e * 7,
        $(n)
}
function U(t, e) {
    let n = Ee(t);
    return n[2] += e,
        $(n)
}
function we(t, e) {
    let n = Ee(t);
    return n[6] += e,
        $(n)
}
function th(t, e) {
    return Te(t, e) / 7
}
function Te(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24)
}
function nh(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60)
}
function rh(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60)
}
function ih(t, e) {
    return (e.valueOf() - t.valueOf()) / 1e3
}
function sh(t, e) {
    let n = N(t)
        , r = N(e);
    return {
        years: 0,
        months: 0,
        days: Math.round(Te(n, r)),
        milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
    }
}
function oh(t, e) {
    let n = _n(t, e);
    return n !== null && n % 7 === 0 ? n / 7 : null
}
function _n(t, e) {
    return Se(t) === Se(e) ? Math.round(Te(t, e)) : null
}
function N(t) {
    return $([t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()])
}
function lh(t) {
    return $([t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours()])
}
function ah(t) {
    return $([t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes()])
}
function ch(t) {
    return $([t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds()])
}
function uh(t, e, n) {
    let r = t.getUTCFullYear()
        , i = pr(t, r, e, n);
    if (i < 1)
        return pr(t, r - 1, e, n);
    let s = pr(t, r + 1, e, n);
    return s >= 1 ? Math.min(i, s) : i
}
function pr(t, e, n, r) {
    let i = $([e, 0, 1 + dh(e, n, r)])
        , s = N(t)
        , o = Math.round(Te(i, s));
    return Math.floor(o / 7) + 1
}
function dh(t, e, n) {
    let r = 7 + e - n;
    return -((7 + $([t, 0, r]).getUTCDay() - e) % 7) + r - 1
}
function ao(t) {
    return [t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()]
}
function co(t) {
    return new Date(t[0], t[1] || 0, t[2] == null ? 1 : t[2], t[3] || 0, t[4] || 0, t[5] || 0)
}
function Ee(t) {
    return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()]
}
function $(t) {
    return t.length === 1 && (t = t.concat([0])),
        new Date(Date.UTC(...t))
}
function Zl(t) {
    return !isNaN(t.valueOf())
}
function Se(t) {
    return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds()
}
function Xl(t, e, n = !1) {
    let r = t.toISOString();
    return r = r.replace(".000", ""),
        n && (r = r.replace("T00:00:00Z", "")),
        r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", Ti(e, !0)))),
        r
}
function Bt(t) {
    return t.toISOString().replace(/T.*$/, "")
}
function fh(t) {
    return t.toISOString().match(/^\d{4}-\d{2}/)[0]
}
function hh(t) {
    return et(t.getUTCHours(), 2) + ":" + et(t.getUTCMinutes(), 2) + ":" + et(t.getUTCSeconds(), 2)
}
function Ti(t, e = !1) {
    let n = t < 0 ? "-" : "+"
        , r = Math.abs(t)
        , i = Math.floor(r / 60)
        , s = Math.round(r % 60);
    return e ? `${n + et(i, 2)}:${et(s, 2)}` : `GMT${n}${i}${s ? `:${et(s, 2)}` : ""}`
}
function w(t, e, n) {
    let r, i;
    return function (...s) {
        if (!r)
            i = t.apply(this, s);
        else if (!Ae(r, s)) {
            let o = t.apply(this, s);
            (!e || !e(o, i)) && (i = o)
        }
        return r = s,
            i
    }
}
function dn(t, e, n) {
    let r, i;
    return s => (r ? ae(r, s) || (i = t.call(this, s)) : i = t.call(this, s),
        r = s,
        i)
}
const uo = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
}
    , An = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1
    }
    , $t = /\s*([ap])\.?m\.?/i
    , ph = /,/g
    , gh = /\s+/g
    , mh = /\u200e/g
    , vh = /UTC|GMT/;
class yh {
    constructor(e) {
        let n = {}
            , r = {}
            , i = 0;
        for (let s in e)
            s in uo ? (r[s] = e[s],
                i = Math.max(uo[s], i)) : (n[s] = e[s],
                    s in An && (i = Math.max(An[s], i)));
        this.standardDateProps = n,
            this.extendedSettings = r,
            this.severity = i,
            this.buildFormattingFunc = w(fo)
    }
    format(e, n) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e)
    }
    formatRange(e, n, r, i) {
        let { standardDateProps: s, extendedSettings: o } = this
            , l = wh(e.marker, n.marker, r.calendarSystem);
        if (!l)
            return this.format(e, r);
        let a = l;
        a > 1 && (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (a = 1);
        let u = this.format(e, r)
            , c = this.format(n, r);
        if (u === c)
            return u;
        let d = Ch(s, a)
            , h = fo(d, o, r)
            , f = h(e)
            , m = h(n)
            , v = Dh(u, f, c, m)
            , g = o.separator || i || r.defaultSeparator || "";
        return v ? v.before + f + g + m + v.after : u + g + c
    }
    getLargestUnit() {
        switch (this.severity) {
            case 7:
            case 6:
            case 5:
                return "year";
            case 4:
                return "month";
            case 3:
                return "week";
            case 2:
                return "day";
            default:
                return "time"
        }
    }
}
function fo(t, e, n) {
    let r = Object.keys(t).length;
    return r === 1 && t.timeZoneName === "short" ? i => Ti(i.timeZoneOffset) : r === 0 && e.week ? i => Ah(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : bh(t, e, n)
}
function bh(t, e, n) {
    t = Object.assign({}, t),
        e = Object.assign({}, e),
        Eh(t, e),
        t.timeZone = "UTC";
    let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
    if (e.omitZeroMinute) {
        let s = Object.assign({}, t);
        delete s.minute,
            i = new Intl.DateTimeFormat(n.locale.codes, s)
    }
    return s => {
        let { marker: o } = s, l;
        i && !o.getUTCMinutes() ? l = i : l = r;
        let a = l.format(o);
        return Sh(a, s, t, e, n)
    }
}
function Eh(t, e) {
    t.timeZoneName && (t.hour || (t.hour = "2-digit"),
        t.minute || (t.minute = "2-digit")),
        t.timeZoneName === "long" && (t.timeZoneName = "short"),
        e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute
}
function Sh(t, e, n, r, i) {
    return t = t.replace(mh, ""),
        n.timeZoneName === "short" && (t = _h(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : Ti(e.timeZoneOffset))),
        r.omitCommas && (t = t.replace(ph, "").trim()),
        r.omitZeroMinute && (t = t.replace(":00", "")),
        r.meridiem === !1 ? t = t.replace($t, "").trim() : r.meridiem === "narrow" ? t = t.replace($t, (s, o) => o.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace($t, (s, o) => `${o.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace($t, s => s.toLocaleLowerCase())),
        t = t.replace(gh, " "),
        t = t.trim(),
        t
}
function _h(t, e) {
    let n = !1;
    return t = t.replace(vh, () => (n = !0,
        e)),
        n || (t += ` ${e}`),
        t
}
function Ah(t, e, n, r, i) {
    let s = [];
    return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e),
        (i === "long" || i === "short") && s.push(" "),
        s.push(r.simpleNumberFormat.format(t)),
        r.options.direction === "rtl" && s.reverse(),
        s.join("")
}
function wh(t, e, n) {
    return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : Se(t) !== Se(e) ? 1 : 0
}
function Ch(t, e) {
    let n = {};
    for (let r in t)
        (!(r in An) || An[r] <= e) && (n[r] = t[r]);
    return n
}
function Dh(t, e, n, r) {
    let i = 0;
    for (; i < t.length;) {
        let s = t.indexOf(e, i);
        if (s === -1)
            break;
        let o = t.substr(0, s);
        i = s + e.length;
        let l = t.substr(i)
            , a = 0;
        for (; a < n.length;) {
            let u = n.indexOf(r, a);
            if (u === -1)
                break;
            let c = n.substr(0, u);
            a = u + r.length;
            let d = n.substr(a);
            if (o === c && l === d)
                return {
                    before: o,
                    after: l
                }
        }
    }
    return null
}
function ho(t, e) {
    let n = e.markerToArray(t.marker);
    return {
        marker: t.marker,
        timeZoneOffset: t.timeZoneOffset,
        array: n,
        year: n[0],
        month: n[1],
        day: n[2],
        hour: n[3],
        minute: n[4],
        second: n[5],
        millisecond: n[6]
    }
}
function wn(t, e, n, r) {
    let i = ho(t, n.calendarSystem)
        , s = e ? ho(e, n.calendarSystem) : null;
    return {
        date: i,
        start: i,
        end: s,
        timeZone: n.timeZone,
        localeCodes: n.locale.codes,
        defaultSeparator: r || n.defaultSeparator
    }
}
class Rh {
    constructor(e) {
        this.cmdStr = e
    }
    format(e, n, r) {
        return n.cmdFormatter(this.cmdStr, wn(e, null, n, r))
    }
    formatRange(e, n, r, i) {
        return r.cmdFormatter(this.cmdStr, wn(e, n, r, i))
    }
}
class xh {
    constructor(e) {
        this.func = e
    }
    format(e, n, r) {
        return this.func(wn(e, null, n, r))
    }
    formatRange(e, n, r, i) {
        return this.func(wn(e, n, r, i))
    }
}
function P(t) {
    return typeof t == "object" && t ? new yh(t) : typeof t == "string" ? new Rh(t) : typeof t == "function" ? new xh(t) : null
}
const po = {
    navLinkDayClick: y,
    navLinkWeekClick: y,
    duration: M,
    bootstrapFontAwesome: y,
    buttonIcons: y,
    customButtons: y,
    defaultAllDayEventDuration: M,
    defaultTimedEventDuration: M,
    nextDayThreshold: M,
    scrollTime: M,
    scrollTimeReset: Boolean,
    slotMinTime: M,
    slotMaxTime: M,
    dayPopoverFormat: P,
    slotDuration: M,
    snapDuration: M,
    headerToolbar: y,
    footerToolbar: y,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: P,
    dayHeaderClassNames: y,
    dayHeaderContent: y,
    dayHeaderDidMount: y,
    dayHeaderWillUnmount: y,
    dayCellClassNames: y,
    dayCellContent: y,
    dayCellDidMount: y,
    dayCellWillUnmount: y,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: y,
    weekNumbers: Boolean,
    weekNumberClassNames: y,
    weekNumberContent: y,
    weekNumberDidMount: y,
    weekNumberWillUnmount: y,
    editable: Boolean,
    viewClassNames: y,
    viewDidMount: y,
    viewWillUnmount: y,
    nowIndicator: Boolean,
    nowIndicatorClassNames: y,
    nowIndicatorContent: y,
    nowIndicatorDidMount: y,
    nowIndicatorWillUnmount: y,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: y,
    locale: y,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: y,
    eventOrder: Uf,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: y,
    contentHeight: y,
    direction: String,
    weekNumberFormat: P,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: y,
    initialDate: y,
    now: y,
    eventDataTransform: y,
    stickyHeaderDates: y,
    stickyFooterScrollbar: y,
    viewHeight: y,
    defaultAllDay: Boolean,
    eventSourceFailure: y,
    eventSourceSuccess: y,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: y,
    eventConstraint: y,
    eventAllow: y,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: y,
    eventContent: y,
    eventDidMount: y,
    eventWillUnmount: y,
    selectConstraint: y,
    selectOverlap: y,
    selectAllow: y,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: y,
    slotLaneClassNames: y,
    slotLaneContent: y,
    slotLaneDidMount: y,
    slotLaneWillUnmount: y,
    slotLabelClassNames: y,
    slotLabelContent: y,
    slotLabelDidMount: y,
    slotLabelWillUnmount: y,
    dayMaxEvents: y,
    dayMaxEventRows: y,
    dayMinWidth: Number,
    slotLabelInterval: M,
    allDayText: String,
    allDayClassNames: y,
    allDayContent: y,
    allDayDidMount: y,
    allDayWillUnmount: y,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: P,
    rerenderDelay: Number,
    moreLinkText: y,
    moreLinkHint: y,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: y,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: M,
    hiddenDays: y,
    fixedWeekCount: Boolean,
    validRange: y,
    visibleRange: y,
    titleFormat: y,
    eventInteractive: Boolean,
    noEventsText: String,
    viewHint: y,
    navLinkHint: y,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: y,
    moreLinkClassNames: y,
    moreLinkContent: y,
    moreLinkDidMount: y,
    moreLinkWillUnmount: y,
    monthStartFormat: P,
    handleCustomRendering: y,
    customRenderingMetaMap: y,
    customRenderingReplaces: Boolean
}
    , wt = {
        eventDisplay: "auto",
        defaultRangeSeparator: " - ",
        titleRangeSeparator: " – ",
        defaultTimedEventDuration: "01:00:00",
        defaultAllDayEventDuration: {
            day: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "00:00:00",
        dayHeaders: !0,
        initialView: "",
        aspectRatio: 1.35,
        headerToolbar: {
            start: "title",
            center: "",
            end: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberCalculation: "local",
        editable: !1,
        nowIndicator: !1,
        scrollTime: "06:00:00",
        scrollTimeReset: !0,
        slotMinTime: "00:00:00",
        slotMaxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timeZoneParam: "timeZone",
        timeZone: "local",
        locales: [],
        locale: "",
        themeSystem: "standard",
        dragRevertDuration: 500,
        dragScroll: !0,
        allDayMaintainDuration: !1,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "start,-duration,allDay,title",
        dayPopoverFormat: {
            month: "long",
            day: "numeric",
            year: "numeric"
        },
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3,
        eventDragMinDistance: 5,
        expandRows: !1,
        navLinks: !1,
        selectable: !1,
        eventMinHeight: 15,
        eventMinWidth: 30,
        eventShortHeight: 30,
        monthStartFormat: {
            month: "long",
            day: "numeric"
        }
    }
    , go = {
        datesSet: y,
        eventsSet: y,
        eventAdd: y,
        eventChange: y,
        eventRemove: y,
        windowResize: y,
        eventClick: y,
        eventMouseEnter: y,
        eventMouseLeave: y,
        select: y,
        unselect: y,
        loading: y,
        _unmount: y,
        _beforeprint: y,
        _afterprint: y,
        _noEventDrop: y,
        _noEventResize: y,
        _resize: y,
        _scrollRequest: y
    }
    , mo = {
        buttonText: y,
        buttonHints: y,
        views: y,
        plugins: y,
        initialEvents: y,
        events: y,
        eventSources: y
    }
    , ke = {
        headerToolbar: Ne,
        footerToolbar: Ne,
        buttonText: Ne,
        buttonHints: Ne,
        buttonIcons: Ne,
        dateIncrement: Ne,
        plugins: Yt,
        events: Yt,
        eventSources: Yt,
        resources: Yt
    };
function Ne(t, e) {
    return typeof t == "object" && typeof e == "object" && t && e ? ae(t, e) : t === e
}
function Yt(t, e) {
    return Array.isArray(t) && Array.isArray(e) ? Ae(t, e) : t === e
}
const Th = {
    type: String,
    component: y,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: y,
    usesMinMaxTime: Boolean,
    classNames: y,
    content: y,
    didMount: y,
    willUnmount: y
};
function gr(t) {
    return Mi(t, ke)
}
function Ii(t, e) {
    let n = {}
        , r = {};
    for (let i in e)
        i in t && (n[i] = e[i](t[i]));
    for (let i in t)
        i in e || (r[i] = t[i]);
    return {
        refined: n,
        extra: r
    }
}
function y(t) {
    return t
}
const { hasOwnProperty: Cn } = Object.prototype;
function Mi(t, e) {
    let n = {};
    if (e) {
        for (let r in e)
            if (e[r] === Ne) {
                let i = [];
                for (let s = t.length - 1; s >= 0; s -= 1) {
                    let o = t[s][r];
                    if (typeof o == "object" && o)
                        i.unshift(o);
                    else if (o !== void 0) {
                        n[r] = o;
                        break
                    }
                }
                i.length && (n[r] = Mi(i))
            }
    }
    for (let r = t.length - 1; r >= 0; r -= 1) {
        let i = t[r];
        for (let s in i)
            s in n || (n[s] = i[s])
    }
    return n
}
function $e(t, e) {
    let n = {};
    for (let r in t)
        e(t[r], r) && (n[r] = t[r]);
    return n
}
function he(t, e) {
    let n = {};
    for (let r in t)
        n[r] = e(t[r], r);
    return n
}
function Kl(t) {
    let e = {};
    for (let n of t)
        e[n] = !0;
    return e
}
function Oi(t) {
    let e = [];
    for (let n in t)
        e.push(t[n]);
    return e
}
function ae(t, e) {
    if (t === e)
        return !0;
    for (let n in t)
        if (Cn.call(t, n) && !(n in e))
            return !1;
    for (let n in e)
        if (Cn.call(e, n) && t[n] !== e[n])
            return !1;
    return !0
}
const Ih = /^on[A-Z]/;
function Mh(t, e) {
    const n = Wr(t, e);
    for (let r of n)
        if (!Ih.test(r))
            return !1;
    return !0
}
function Wr(t, e) {
    let n = [];
    for (let r in t)
        Cn.call(t, r) && (r in e || n.push(r));
    for (let r in e)
        Cn.call(e, r) && t[r] !== e[r] && n.push(r);
    return n
}
function mr(t, e, n = {}) {
    if (t === e)
        return !0;
    for (let r in e)
        if (!(r in t && Oh(t[r], e[r], n[r])))
            return !1;
    for (let r in t)
        if (!(r in e))
            return !1;
    return !0
}
function Oh(t, e, n) {
    return t === e || n === !0 ? !0 : n ? n(t, e) : !1
}
function kh(t, e = 0, n, r = 1) {
    let i = [];
    n == null && (n = Object.keys(t).length);
    for (let s = e; s < n; s += r) {
        let o = t[s];
        o !== void 0 && i.push(o)
    }
    return i
}
let Jl = {};
function Nh(t, e) {
    Jl[t] = e
}
function Ph(t) {
    return new Jl[t]
}
class Hh {
    getMarkerYear(e) {
        return e.getUTCFullYear()
    }
    getMarkerMonth(e) {
        return e.getUTCMonth()
    }
    getMarkerDay(e) {
        return e.getUTCDate()
    }
    arrayToMarker(e) {
        return $(e)
    }
    markerToArray(e) {
        return Ee(e)
    }
}
Nh("gregory", Hh);
const Bh = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Lh(t) {
    let e = Bh.exec(t);
    if (e) {
        let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
        if (Zl(n)) {
            let r = null;
            return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))),
            {
                marker: n,
                isTimeUnspecified: !e[6],
                timeZoneOffset: r
            }
        }
    }
    return null
}
class Fh {
    constructor(e) {
        let n = this.timeZone = e.timeZone
            , r = n !== "local" && n !== "UTC";
        e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)),
            this.canComputeOffset = !!(!r || this.namedTimeZoneImpl),
            this.calendarSystem = Ph(e.calendarSystem),
            this.locale = e.locale,
            this.weekDow = e.locale.week.dow,
            this.weekDoy = e.locale.week.doy,
            e.weekNumberCalculation === "ISO" && (this.weekDow = 1,
                this.weekDoy = 4),
            typeof e.firstDay == "number" && (this.weekDow = e.firstDay),
            typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation),
            this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText,
            this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText,
            this.cmdFormatter = e.cmdFormatter,
            this.defaultSeparator = e.defaultSeparator
    }
    createMarker(e) {
        let n = this.createMarkerMeta(e);
        return n === null ? null : n.marker
    }
    createNowMarker() {
        return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : $(ao(new Date))
    }
    createMarkerMeta(e) {
        if (typeof e == "string")
            return this.parse(e);
        let n = null;
        return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(),
            isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = $(e)),
            n === null || !Zl(n) ? null : {
                marker: n,
                isTimeUnspecified: !1,
                forcedTzo: null
            }
    }
    parse(e) {
        let n = Lh(e);
        if (n === null)
            return null;
        let { marker: r } = n
            , i = null;
        return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : i = n.timeZoneOffset),
        {
            marker: r,
            isTimeUnspecified: n.isTimeUnspecified,
            forcedTzo: i
        }
    }
    getYear(e) {
        return this.calendarSystem.getMarkerYear(e)
    }
    getMonth(e) {
        return this.calendarSystem.getMarkerMonth(e)
    }
    getDay(e) {
        return this.calendarSystem.getMarkerDay(e)
    }
    add(e, n) {
        let r = this.calendarSystem.markerToArray(e);
        return r[0] += n.years,
            r[1] += n.months,
            r[2] += n.days,
            r[6] += n.milliseconds,
            this.calendarSystem.arrayToMarker(r)
    }
    subtract(e, n) {
        let r = this.calendarSystem.markerToArray(e);
        return r[0] -= n.years,
            r[1] -= n.months,
            r[2] -= n.days,
            r[6] -= n.milliseconds,
            this.calendarSystem.arrayToMarker(r)
    }
    addYears(e, n) {
        let r = this.calendarSystem.markerToArray(e);
        return r[0] += n,
            this.calendarSystem.arrayToMarker(r)
    }
    addMonths(e, n) {
        let r = this.calendarSystem.markerToArray(e);
        return r[1] += n,
            this.calendarSystem.arrayToMarker(r)
    }
    diffWholeYears(e, n) {
        let { calendarSystem: r } = this;
        return Se(e) === Se(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null
    }
    diffWholeMonths(e, n) {
        let { calendarSystem: r } = this;
        return Se(e) === Se(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null
    }
    greatestWholeUnit(e, n) {
        let r = this.diffWholeYears(e, n);
        return r !== null ? {
            unit: "year",
            value: r
        } : (r = this.diffWholeMonths(e, n),
            r !== null ? {
                unit: "month",
                value: r
            } : (r = oh(e, n),
                r !== null ? {
                    unit: "week",
                    value: r
                } : (r = _n(e, n),
                    r !== null ? {
                        unit: "day",
                        value: r
                    } : (r = nh(e, n),
                        un(r) ? {
                            unit: "hour",
                            value: r
                        } : (r = rh(e, n),
                            un(r) ? {
                                unit: "minute",
                                value: r
                            } : (r = ih(e, n),
                                un(r) ? {
                                    unit: "second",
                                    value: r
                                } : {
                                    unit: "millisecond",
                                    value: n.valueOf() - e.valueOf()
                                }))))))
    }
    countDurationsBetween(e, n, r) {
        let i;
        return r.years && (i = this.diffWholeYears(e, n),
            i !== null) ? i / Kf(r) : r.months && (i = this.diffWholeMonths(e, n),
                i !== null) ? i / Jf(r) : r.days && (i = _n(e, n),
                    i !== null) ? i / tt(r) : (n.valueOf() - e.valueOf()) / te(r)
    }
    startOf(e, n) {
        return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? N(e) : n === "hour" ? lh(e) : n === "minute" ? ah(e) : n === "second" ? ch(e) : null
    }
    startOfYear(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
    }
    startOfMonth(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
    }
    startOfWeek(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
    }
    computeWeekNumber(e) {
        return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : uh(e, this.weekDow, this.weekDoy)
    }
    format(e, n, r = {}) {
        return n.format({
            marker: e,
            timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
        }, this)
    }
    formatRange(e, n, r, i = {}) {
        return i.isEndExclusive && (n = we(n, -1)),
            r.formatRange({
                marker: e,
                timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
            }, {
                marker: n,
                timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n)
            }, this, i.defaultSeparator)
    }
    formatIso(e, n = {}) {
        let r = null;
        return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)),
            Xl(e, r, n.omitTime)
    }
    timestampToMarker(e) {
        return this.timeZone === "local" ? $(ao(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : $(this.namedTimeZoneImpl.timestampToArray(e))
    }
    offsetForMarker(e) {
        return this.timeZone === "local" ? -co(Ee(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Ee(e)) : null
    }
    toDate(e, n) {
        return this.timeZone === "local" ? co(Ee(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(Ee(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0))
    }
}
class Lt {
    constructor(e) {
        this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
    }
    setIconOverride(e) {
        let n, r;
        if (typeof e == "object" && e) {
            n = Object.assign({}, this.iconClasses);
            for (r in e)
                n[r] = this.applyIconOverridePrefix(e[r]);
            this.iconClasses = n
        } else
            e === !1 && (this.iconClasses = {})
    }
    applyIconOverridePrefix(e) {
        let n = this.iconOverridePrefix;
        return n && e.indexOf(n) !== 0 && (e = n + e),
            e
    }
    getClass(e) {
        return this.classes[e] || ""
    }
    getIconClass(e, n) {
        let r;
        return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e],
            r ? `${this.baseIconClass} ${r}` : ""
    }
    getCustomButtonIconClass(e) {
        let n;
        return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption],
            n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : ""
    }
}
Lt.prototype.classes = {};
Lt.prototype.iconClasses = {};
Lt.prototype.baseIconClass = "";
Lt.prototype.iconOverridePrefix = "";
function Dn(t) {
    t();
    let e = C.debounceRendering
        , n = [];
    function r(i) {
        n.push(i)
    }
    for (C.debounceRendering = r,
        It(p(jh, {}), document.createElement("div")); n.length;)
        n.shift()();
    C.debounceRendering = e
}
class jh extends K {
    render() {
        return p("div", {})
    }
    componentDidMount() {
        this.setState({})
    }
}
function ea(t) {
    let e = df(t)
        , n = e.Provider;
    return e.Provider = function () {
        let r = !this.getChildContext
            , i = n.apply(this, arguments);
        if (r) {
            let s = [];
            this.shouldComponentUpdate = o => {
                this.props.value !== o.value && s.forEach(l => {
                    l.context = o.value,
                        l.forceUpdate()
                }
                )
            }
                ,
                this.sub = o => {
                    s.push(o);
                    let l = o.componentWillUnmount;
                    o.componentWillUnmount = () => {
                        s.splice(s.indexOf(o), 1),
                            l && l.call(o)
                    }
                }
        }
        return i
    }
        ,
        e
}
class Uh {
    constructor(e, n, r, i) {
        this.execFunc = e,
            this.emitter = n,
            this.scrollTime = r,
            this.scrollTimeReset = i,
            this.handleScrollRequest = s => {
                this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s),
                    this.drain()
            }
            ,
            n.on("_scrollRequest", this.handleScrollRequest),
            this.fireInitialScroll()
    }
    detach() {
        this.emitter.off("_scrollRequest", this.handleScrollRequest)
    }
    update(e) {
        e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
    }
    fireInitialScroll() {
        this.handleScrollRequest({
            time: this.scrollTime
        })
    }
    drain() {
        this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
    }
}
const me = ea({});
function zh(t, e, n, r, i, s, o, l, a, u, c, d, h) {
    return {
        dateEnv: i,
        options: n,
        pluginHooks: o,
        emitter: u,
        dispatch: l,
        getCurrentData: a,
        calendarApi: c,
        viewSpec: t,
        viewApi: e,
        dateProfileGenerator: r,
        theme: s,
        isRtl: n.direction === "rtl",
        addResizeHandler(f) {
            u.on("_resize", f)
        },
        removeResizeHandler(f) {
            u.off("_resize", f)
        },
        createScrollResponder(f) {
            return new Uh(f, u, M(n.scrollTime), n.scrollTimeReset)
        },
        registerInteractiveComponent: d,
        unregisterInteractiveComponent: h
    }
}
class Ze extends K {
    shouldComponentUpdate(e, n) {
        return this.debug && console.log(Wr(e, this.props), Wr(n, this.state)),
            !mr(this.props, e, this.propEquality) || !mr(this.state, n, this.stateEquality)
    }
    safeSetState(e) {
        mr(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e)
    }
}
Ze.addPropsEquality = Wh;
Ze.addStateEquality = Vh;
Ze.contextType = me;
Ze.prototype.propEquality = {};
Ze.prototype.stateEquality = {};
class O extends Ze {
}
O.contextType = me;
function Wh(t) {
    let e = Object.create(this.prototype.propEquality);
    Object.assign(e, t),
        this.prototype.propEquality = e
}
function Vh(t) {
    let e = Object.create(this.prototype.stateEquality);
    Object.assign(e, t),
        this.prototype.stateEquality = e
}
function pe(t, e) {
    typeof t == "function" ? t(e) : t && (t.current = e)
}
class ki extends O {
    constructor() {
        super(...arguments),
            this.id = Qe(),
            this.queuedDomNodes = [],
            this.currentDomNodes = [],
            this.handleEl = e => {
                const { options: n } = this.context
                    , { generatorName: r } = this.props;
                (!n.customRenderingReplaces || !Vr(r, n)) && this.updateElRef(e)
            }
            ,
            this.updateElRef = e => {
                this.props.elRef && pe(this.props.elRef, e)
            }
    }
    render() {
        const { props: e, context: n } = this
            , { options: r } = n
            , { customGenerator: i, defaultGenerator: s, renderProps: o } = e
            , l = ta(e, [], this.handleEl);
        let a = !1, u, c = [], d;
        if (i != null) {
            const h = typeof i == "function" ? i(o, p) : i;
            if (h === !0)
                a = !0;
            else {
                const f = h && typeof h == "object";
                f && "html" in h ? l.dangerouslySetInnerHTML = {
                    __html: h.html
                } : f && "domNodes" in h ? c = Array.prototype.slice.call(h.domNodes) : (f ? Cl(h) : typeof h != "function") ? u = h : d = h
            }
        } else
            a = !Vr(e.generatorName, r);
        return a && s && (u = s(o)),
            this.queuedDomNodes = c,
            this.currentGeneratorMeta = d,
            p(e.elTag, l, u)
    }
    componentDidMount() {
        this.applyQueueudDomNodes(),
            this.triggerCustomRendering(!0)
    }
    componentDidUpdate() {
        this.applyQueueudDomNodes(),
            this.triggerCustomRendering(!0)
    }
    componentWillUnmount() {
        this.triggerCustomRendering(!1)
    }
    triggerCustomRendering(e) {
        var n;
        const { props: r, context: i } = this
            , { handleCustomRendering: s, customRenderingMetaMap: o } = i.options;
        if (s) {
            const l = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : o == null ? void 0 : o[r.generatorName];
            l && s(Object.assign(Object.assign({
                id: this.id,
                isActive: e,
                containerEl: this.base,
                reportNewContainerEl: this.updateElRef,
                generatorMeta: l
            }, r), {
                elClasses: (r.elClasses || []).filter(Gh)
            }))
        }
    }
    applyQueueudDomNodes() {
        const { queuedDomNodes: e, currentDomNodes: n } = this
            , r = this.base;
        if (!Ae(e, n)) {
            n.forEach(Ci);
            for (let i of e)
                r.appendChild(i);
            this.currentDomNodes = e
        }
    }
}
ki.addPropsEquality({
    elClasses: Ae,
    elStyle: ae,
    elAttrs: Mh,
    renderProps: ae
});
function Vr(t, e) {
    var n;
    return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]))
}
function ta(t, e, n) {
    const r = Object.assign(Object.assign({}, t.elAttrs), {
        ref: n
    });
    return (t.elClasses || e) && (r.className = (t.elClasses || []).concat(e || []).concat(r.className || []).filter(Boolean).join(" ")),
        t.elStyle && (r.style = t.elStyle),
        r
}
function Gh(t) {
    return !!t
}
const na = ea(0);
class V extends K {
    constructor() {
        super(...arguments),
            this.InnerContent = qh.bind(void 0, this),
            this.handleEl = e => {
                this.el = e,
                    this.props.elRef && (pe(this.props.elRef, e),
                        e && this.didMountMisfire && this.componentDidMount())
            }
    }
    render() {
        const { props: e } = this
            , n = $h(e.classNameGenerator, e.renderProps);
        if (e.children) {
            const r = ta(e, n, this.handleEl)
                , i = e.children(this.InnerContent, e.renderProps, r);
            return e.elTag ? p(e.elTag, r, i) : i
        } else
            return p(ki, Object.assign(Object.assign({}, e), {
                elRef: this.handleEl,
                elTag: e.elTag || "div",
                elClasses: (e.elClasses || []).concat(n),
                renderId: this.context
            }))
    }
    componentDidMount() {
        var e, n;
        this.el ? (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
            el: this.el
        })) : this.didMountMisfire = !0
    }
    componentWillUnmount() {
        var e, n;
        (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
            el: this.el
        }))
    }
}
V.contextType = na;
function qh(t, e) {
    const n = t.props;
    return p(ki, Object.assign({
        renderProps: n.renderProps,
        generatorName: n.generatorName,
        customGenerator: n.customGenerator,
        defaultGenerator: n.defaultGenerator,
        renderId: t.context
    }, e))
}
function $h(t, e) {
    const n = typeof t == "function" ? t(e) : t || [];
    return typeof n == "string" ? [n] : n
}
class Mt extends O {
    render() {
        let { props: e, context: n } = this
            , { options: r } = n
            , i = {
                view: n.viewApi
            };
        return p(V, Object.assign({}, e, {
            elTag: e.elTag || "div",
            elClasses: [...ra(e.viewSpec), ...e.elClasses || []],
            renderProps: i,
            classNameGenerator: r.viewClassNames,
            generatorName: void 0,
            didMount: r.viewDidMount,
            willUnmount: r.viewWillUnmount
        }), () => e.children)
    }
}
function ra(t) {
    return [`fc-${t.type}-view`, "fc-view"]
}
function Yh(t, e) {
    let n = null
        , r = null;
    return t.start && (n = e.createMarker(t.start)),
        t.end && (r = e.createMarker(t.end)),
        !n && !r || n && r && r < n ? null : {
            start: n,
            end: r
        }
}
function vo(t, e) {
    let n = [], { start: r } = e, i, s;
    for (t.sort(Qh),
        i = 0; i < t.length; i += 1)
        s = t[i],
            s.start > r && n.push({
                start: r,
                end: s.start
            }),
            s.end > r && (r = s.end);
    return r < e.end && n.push({
        start: r,
        end: e.end
    }),
        n
}
function Qh(t, e) {
    return t.start.valueOf() - e.start.valueOf()
}
function Ce(t, e) {
    let { start: n, end: r } = t
        , i = null;
    return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))),
        e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))),
        (n === null || r === null || n < r) && (i = {
            start: n,
            end: r
        }),
        i
}
function Zh(t, e) {
    return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf())
}
function Ni(t, e) {
    return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end)
}
function qn(t, e) {
    return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end)
}
function de(t, e) {
    return (t.start === null || e >= t.start) && (t.end === null || e < t.end)
}
function Xh(t, e) {
    return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t
}
function ia(t) {
    let e = Math.floor(Te(t.start, t.end)) || 1
        , n = N(t.start)
        , r = U(n, e);
    return {
        start: n,
        end: r
    }
}
function Pi(t, e = M(0)) {
    let n = null
        , r = null;
    if (t.end) {
        r = N(t.end);
        let i = t.end.valueOf() - r.valueOf();
        i && i >= te(e) && (r = U(r, 1))
    }
    return t.start && (n = N(t.start),
        r && r <= n && (r = U(n, 1))),
    {
        start: n,
        end: r
    }
}
function Kh(t) {
    let e = Pi(t);
    return Te(e.start, e.end) > 1
}
function Je(t, e, n, r) {
    return r === "year" ? M(n.diffWholeYears(t, e), "year") : r === "month" ? M(n.diffWholeMonths(t, e), "month") : sh(t, e)
}
function Jh(t, e) {
    switch (e.type) {
        case "CHANGE_DATE":
            return e.dateMarker;
        default:
            return t
    }
}
function ep(t, e) {
    let n = t.initialDate;
    return n != null ? e.createMarker(n) : Ft(t.now, e)
}
function Ft(t, e) {
    return typeof t == "function" && (t = t()),
        t == null ? e.createNowMarker() : e.createMarker(t)
}
class sa {
    constructor(e) {
        this.props = e,
            this.nowDate = Ft(e.nowInput, e.dateEnv),
            this.initHiddenDays()
    }
    buildPrev(e, n, r) {
        let { dateEnv: i } = this.props
            , s = i.subtract(i.startOf(n, e.currentRangeUnit), e.dateIncrement);
        return this.build(s, -1, r)
    }
    buildNext(e, n, r) {
        let { dateEnv: i } = this.props
            , s = i.add(i.startOf(n, e.currentRangeUnit), e.dateIncrement);
        return this.build(s, 1, r)
    }
    build(e, n, r = !0) {
        let { props: i } = this, s, o, l, a, u, c;
        return s = this.buildValidRange(),
            s = this.trimHiddenDays(s),
            r && (e = Xh(e, s)),
            o = this.buildCurrentRangeInfo(e, n),
            l = /^(year|month|week|day)$/.test(o.unit),
            a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, l),
            a = this.trimHiddenDays(a),
            u = a,
            i.showNonCurrentDates || (u = Ce(u, o.range)),
            u = this.adjustActiveRange(u),
            u = Ce(u, s),
            c = Ni(o.range, s),
            de(a, e) || (e = a.start),
        {
            currentDate: e,
            validRange: s,
            currentRange: o.range,
            currentRangeUnit: o.unit,
            isRangeAllDay: l,
            activeRange: u,
            renderRange: a,
            slotMinTime: i.slotMinTime,
            slotMaxTime: i.slotMaxTime,
            isValid: c,
            dateIncrement: this.buildDateIncrement(o.duration)
        }
    }
    buildValidRange() {
        let e = this.props.validRangeInput
            , n = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
        return this.refineRange(n) || {
            start: null,
            end: null
        }
    }
    buildCurrentRangeInfo(e, n) {
        let { props: r } = this, i = null, s = null, o = null, l;
        return r.duration ? (i = r.duration,
            s = r.durationUnit,
            o = this.buildRangeFromDuration(e, n, i, s)) : (l = this.props.dayCount) ? (s = "day",
                o = this.buildRangeFromDayCount(e, n, l)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(),
                    s = zr(i).unit,
                    o = this.buildRangeFromDuration(e, n, i, s)),
        {
            duration: i,
            unit: s,
            range: o
        }
    }
    getFallbackDuration() {
        return M({
            day: 1
        })
    }
    adjustActiveRange(e) {
        let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props
            , { start: o, end: l } = e;
        return r && (tt(i) < 0 && (o = N(o),
            o = n.add(o, i)),
            tt(s) > 1 && (l = N(l),
                l = U(l, -1),
                l = n.add(l, s))),
        {
            start: o,
            end: l
        }
    }
    buildRangeFromDuration(e, n, r, i) {
        let { dateEnv: s, dateAlignment: o } = this.props, l, a, u;
        if (!o) {
            let { dateIncrement: d } = this.props;
            d && te(d) < te(r) ? o = zr(d).unit : o = i
        }
        tt(r) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, n),
            l = N(l));
        function c() {
            l = s.startOf(e, o),
                a = s.add(l, r),
                u = {
                    start: l,
                    end: a
                }
        }
        return c(),
            this.trimHiddenDays(u) || (e = this.skipHiddenDays(e, n),
                c()),
            u
    }
    buildRangeFromDayCount(e, n, r) {
        let { dateEnv: i, dateAlignment: s } = this.props, o = 0, l = e, a;
        s && (l = i.startOf(l, s)),
            l = N(l),
            l = this.skipHiddenDays(l, n),
            a = l;
        do
            a = U(a, 1),
                this.isHiddenDay(a) || (o += 1);
        while (o < r);
        return {
            start: l,
            end: a
        }
    }
    buildCustomVisibleRange(e) {
        let { props: n } = this
            , r = n.visibleRangeInput
            , i = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r
            , s = this.refineRange(i);
        return s && (s.start == null || s.end == null) ? null : s
    }
    buildRenderRange(e, n, r) {
        return e
    }
    buildDateIncrement(e) {
        let { dateIncrement: n } = this.props, r;
        return n || ((r = this.props.dateAlignment) ? M(1, r) : e || M({
            days: 1
        }))
    }
    refineRange(e) {
        if (e) {
            let n = Yh(e, this.props.dateEnv);
            return n && (n = Pi(n)),
                n
        }
        return null
    }
    initHiddenDays() {
        let e = this.props.hiddenDays || [], n = [], r = 0, i;
        for (this.props.weekends === !1 && e.push(0, 6),
            i = 0; i < 7; i += 1)
            (n[i] = e.indexOf(i) !== -1) || (r += 1);
        if (!r)
            throw new Error("invalid hiddenDays");
        this.isHiddenDayHash = n
    }
    trimHiddenDays(e) {
        let { start: n, end: r } = e;
        return n && (n = this.skipHiddenDays(n)),
            r && (r = this.skipHiddenDays(r, -1, !0)),
            n == null || r == null || n < r ? {
                start: n,
                end: r
            } : null
    }
    isHiddenDay(e) {
        return e instanceof Date && (e = e.getUTCDay()),
            this.isHiddenDayHash[e]
    }
    skipHiddenDays(e, n = 1, r = !1) {
        for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7];)
            e = U(e, n);
        return e
    }
}
function Hi(t, e, n, r) {
    return {
        instanceId: Qe(),
        defId: t,
        range: e,
        forcedStartTzo: n ?? null,
        forcedEndTzo: r ?? null
    }
}
function tp(t, e, n, r) {
    for (let i = 0; i < r.length; i += 1) {
        let s = r[i].parse(t, n);
        if (s) {
            let { allDay: o } = t;
            return o == null && (o = e,
                o == null && (o = s.allDayGuess,
                    o == null && (o = !1))),
            {
                allDay: o,
                duration: s.duration,
                typeData: s.typeData,
                typeId: i
            }
        }
    }
    return null
}
function Ye(t, e, n) {
    let { dateEnv: r, pluginHooks: i, options: s } = n
        , { defs: o, instances: l } = t;
    l = $e(l, a => !o[a.defId].recurringDef);
    for (let a in o) {
        let u = o[a];
        if (u.recurringDef) {
            let { duration: c } = u.recurringDef;
            c || (c = u.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
            let d = np(u, c, e, r, i.recurringTypes);
            for (let h of d) {
                let f = Hi(a, {
                    start: h,
                    end: r.add(h, c)
                });
                l[f.instanceId] = f
            }
        }
    }
    return {
        defs: o,
        instances: l
    }
}
function np(t, e, n, r, i) {
    let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
        start: r.subtract(n.start, e),
        end: n.end
    }, r);
    return t.allDay && (o = o.map(N)),
        o
}
const fn = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean
}
    , oa = {
        start: y,
        end: y,
        date: y,
        allDay: Boolean
    }
    , rp = Object.assign(Object.assign(Object.assign({}, fn), oa), {
        extendedProps: y
    });
function la(t, e, n, r, i = Bi(n), s, o) {
    let { refined: l, extra: a } = aa(t, n, i)
        , u = sp(e, n)
        , c = tp(l, u, n.dateEnv, n.pluginHooks.recurringTypes);
    if (c) {
        let h = Gr(l, a, e ? e.sourceId : "", c.allDay, !!c.duration, n, s);
        return h.recurringDef = {
            typeId: c.typeId,
            typeData: c.typeData,
            duration: c.duration
        },
        {
            def: h,
            instance: null
        }
    }
    let d = ip(l, u, n, r);
    if (d) {
        let h = Gr(l, a, e ? e.sourceId : "", d.allDay, d.hasEnd, n, s)
            , f = Hi(h.defId, d.range, d.forcedStartTzo, d.forcedEndTzo);
        return o && h.publicId && o[h.publicId] && (f.instanceId = o[h.publicId]),
        {
            def: h,
            instance: f
        }
    }
    return null
}
function aa(t, e, n = Bi(e)) {
    return Ii(t, n)
}
function Bi(t) {
    return Object.assign(Object.assign(Object.assign({}, Rn), rp), t.pluginHooks.eventRefiners)
}
function Gr(t, e, n, r, i, s, o) {
    let l = {
        title: t.title || "",
        groupId: t.groupId || "",
        publicId: t.id || "",
        url: t.url || "",
        recurringDef: null,
        defId: (o && t.id ? o[t.id] : "") || Qe(),
        sourceId: n,
        allDay: r,
        hasEnd: i,
        interactive: t.interactive,
        ui: xn(t, s),
        extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
    };
    for (let a of s.pluginHooks.eventDefMemberAdders)
        Object.assign(l, a(t));
    return Object.freeze(l.ui.classNames),
        Object.freeze(l.extendedProps),
        l
}
function ip(t, e, n, r) {
    let { allDay: i } = t, s, o = null, l = !1, a, u = null, c = t.start != null ? t.start : t.date;
    if (s = n.dateEnv.createMarkerMeta(c),
        s)
        o = s.marker;
    else if (!r)
        return null;
    return t.end != null && (a = n.dateEnv.createMarkerMeta(t.end)),
        i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!a || a.isTimeUnspecified)),
        i && o && (o = N(o)),
        a && (u = a.marker,
            i && (u = N(u)),
            o && u <= o && (u = null)),
        u ? l = !0 : r || (l = n.options.forceEventDuration || !1,
            u = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)),
    {
        allDay: i,
        hasEnd: l,
        range: {
            start: o,
            end: u
        },
        forcedStartTzo: s ? s.forcedTzo : null,
        forcedEndTzo: a ? a.forcedTzo : null
    }
}
function sp(t, e) {
    let n = null;
    return t && (n = t.defaultAllDay),
        n == null && (n = e.options.defaultAllDay),
        n
}
function Ot(t, e, n, r, i, s) {
    let o = J()
        , l = Bi(n);
    for (let a of t) {
        let u = la(a, e, n, r, l, i, s);
        u && qr(u, o)
    }
    return o
}
function qr(t, e = J()) {
    return e.defs[t.def.defId] = t.def,
        t.instance && (e.instances[t.instance.instanceId] = t.instance),
        e
}
function Li(t, e) {
    let n = t.instances[e];
    if (n) {
        let r = t.defs[n.defId]
            , i = $n(t, s => op(r, s));
        return i.defs[r.defId] = r,
            i.instances[n.instanceId] = n,
            i
    }
    return J()
}
function op(t, e) {
    return !!(t.groupId && t.groupId === e.groupId)
}
function J() {
    return {
        defs: {},
        instances: {}
    }
}
function Fi(t, e) {
    return {
        defs: Object.assign(Object.assign({}, t.defs), e.defs),
        instances: Object.assign(Object.assign({}, t.instances), e.instances)
    }
}
function $n(t, e) {
    let n = $e(t.defs, e)
        , r = $e(t.instances, i => n[i.defId]);
    return {
        defs: n,
        instances: r
    }
}
function lp(t, e) {
    let { defs: n, instances: r } = t
        , i = {}
        , s = {};
    for (let o in n)
        e.defs[o] || (i[o] = n[o]);
    for (let o in r)
        !e.instances[o] && i[r[o].defId] && (s[o] = r[o]);
    return {
        defs: i,
        instances: s
    }
}
function ap(t, e) {
    return Array.isArray(t) ? Ot(t, null, e, !0) : typeof t == "object" && t ? Ot([t], null, e, !0) : t != null ? String(t) : null
}
function yo(t) {
    return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : []
}
const Rn = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: y,
    overlap: y,
    allow: y,
    className: yo,
    classNames: yo,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
}
    , cp = {
        display: null,
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: "",
        borderColor: "",
        textColor: "",
        classNames: []
    };
function xn(t, e) {
    let n = ap(t.constraint, e);
    return {
        display: t.display || null,
        startEditable: t.startEditable != null ? t.startEditable : t.editable,
        durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
        constraints: n != null ? [n] : [],
        overlap: t.overlap != null ? t.overlap : null,
        allows: t.allow != null ? [t.allow] : [],
        backgroundColor: t.backgroundColor || t.color || "",
        borderColor: t.borderColor || t.color || "",
        textColor: t.textColor || "",
        classNames: (t.className || []).concat(t.classNames || [])
    }
}
function ca(t) {
    return t.reduce(up, cp)
}
function up(t, e) {
    return {
        display: e.display != null ? e.display : t.display,
        startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
        durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
        constraints: t.constraints.concat(e.constraints),
        overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
        allows: t.allows.concat(e.allows),
        backgroundColor: e.backgroundColor || t.backgroundColor,
        borderColor: e.borderColor || t.borderColor,
        textColor: e.textColor || t.textColor,
        classNames: t.classNames.concat(e.classNames)
    }
}
const dp = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: y,
    eventDataTransform: y,
    success: y,
    failure: y
};
function ua(t, e, n = da(e)) {
    let r;
    if (typeof t == "string" ? r = {
        url: t
    } : typeof t == "function" || Array.isArray(t) ? r = {
        events: t
    } : typeof t == "object" && t && (r = t),
        r) {
        let { refined: i, extra: s } = Ii(r, n)
            , o = fp(i, e);
        if (o)
            return {
                _raw: t,
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null,
                defaultAllDay: i.defaultAllDay,
                eventDataTransform: i.eventDataTransform,
                success: i.success,
                failure: i.failure,
                publicId: i.id || "",
                sourceId: Qe(),
                sourceDefId: o.sourceDefId,
                meta: o.meta,
                ui: xn(i, e),
                extendedProps: s
            }
    }
    return null
}
function da(t) {
    return Object.assign(Object.assign(Object.assign({}, Rn), dp), t.pluginHooks.eventSourceRefiners)
}
function fp(t, e) {
    let n = e.pluginHooks.eventSourceDefs;
    for (let r = n.length - 1; r >= 0; r -= 1) {
        let s = n[r].parseMeta(t);
        if (s)
            return {
                sourceDefId: r,
                meta: s
            }
    }
    return null
}
function hp(t, e, n, r, i) {
    switch (e.type) {
        case "RECEIVE_EVENTS":
            return pp(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
        case "RESET_RAW_EVENTS":
            return gp(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
        case "ADD_EVENTS":
            return mp(t, e.eventStore, r ? r.activeRange : null, i);
        case "RESET_EVENTS":
            return e.eventStore;
        case "MERGE_EVENTS":
            return Fi(t, e.eventStore);
        case "PREV":
        case "NEXT":
        case "CHANGE_DATE":
        case "CHANGE_VIEW_TYPE":
            return r ? Ye(t, r.activeRange, i) : t;
        case "REMOVE_EVENTS":
            return lp(t, e.eventStore);
        case "REMOVE_EVENT_SOURCE":
            return ha(t, e.sourceId);
        case "REMOVE_ALL_EVENT_SOURCES":
            return $n(t, s => !s.sourceId);
        case "REMOVE_ALL_EVENTS":
            return J();
        default:
            return t
    }
}
function pp(t, e, n, r, i, s) {
    if (e && n === e.latestFetchId) {
        let o = Ot(fa(i, e, s), e, s);
        return r && (o = Ye(o, r, s)),
            Fi(ha(t, e.sourceId), o)
    }
    return t
}
function gp(t, e, n, r, i) {
    const { defIdMap: s, instanceIdMap: o } = yp(t);
    let l = Ot(fa(n, e, i), e, i, !1, s, o);
    return Ye(l, r, i)
}
function fa(t, e, n) {
    let r = n.options.eventDataTransform
        , i = e ? e.eventDataTransform : null;
    return i && (t = bo(t, i)),
        r && (t = bo(t, r)),
        t
}
function bo(t, e) {
    let n;
    if (!e)
        n = t;
    else {
        n = [];
        for (let r of t) {
            let i = e(r);
            i ? n.push(i) : i == null && n.push(r)
        }
    }
    return n
}
function mp(t, e, n, r) {
    return n && (e = Ye(e, n, r)),
        Fi(t, e)
}
function Eo(t, e, n) {
    let { defs: r } = t
        , i = he(t.instances, s => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), {
            range: {
                start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
                end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
            },
            forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo,
            forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo
        }));
    return {
        defs: r,
        instances: i
    }
}
function ha(t, e) {
    return $n(t, n => n.sourceId !== e)
}
function vp(t, e) {
    return {
        defs: t.defs,
        instances: $e(t.instances, n => !e[n.instanceId])
    }
}
function yp(t) {
    const { defs: e, instances: n } = t
        , r = {}
        , i = {};
    for (let s in e) {
        const o = e[s]
            , { publicId: l } = o;
        l && (r[l] = s)
    }
    for (let s in n) {
        const o = n[s]
            , l = e[o.defId]
            , { publicId: a } = l;
        a && (i[a] = s)
    }
    return {
        defIdMap: r,
        instanceIdMap: i
    }
}
class Yn {
    constructor() {
        this.handlers = {},
            this.thisContext = null
    }
    setThisContext(e) {
        this.thisContext = e
    }
    setOptions(e) {
        this.options = e
    }
    on(e, n) {
        bp(this.handlers, e, n)
    }
    off(e, n) {
        Ep(this.handlers, e, n)
    }
    trigger(e, ...n) {
        let r = this.handlers[e] || []
            , i = this.options && this.options[e]
            , s = [].concat(i || [], r);
        for (let o of s)
            o.apply(this.thisContext, n)
    }
    hasHandlers(e) {
        return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e])
    }
}
function bp(t, e, n) {
    (t[e] || (t[e] = [])).push(n)
}
function Ep(t, e, n) {
    n ? t[e] && (t[e] = t[e].filter(r => r !== n)) : delete t[e]
}
const Sp = {
    startTime: "09:00",
    endTime: "17:00",
    daysOfWeek: [1, 2, 3, 4, 5],
    display: "inverse-background",
    classNames: "fc-non-business",
    groupId: "_businessHours"
};
function _p(t, e) {
    return Ot(Ap(t), null, e)
}
function Ap(t) {
    let e;
    return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter(n => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [],
        e = e.map(n => Object.assign(Object.assign({}, Sp), n)),
        e
}
function pa(t, e, n) {
    n.emitter.trigger("select", Object.assign(Object.assign({}, ji(t, n)), {
        jsEvent: e ? e.origEvent : null,
        view: n.viewApi || n.calendarApi.view
    }))
}
function wp(t, e) {
    e.emitter.trigger("unselect", {
        jsEvent: t ? t.origEvent : null,
        view: e.viewApi || e.calendarApi.view
    })
}
function ji(t, e) {
    let n = {};
    for (let r of e.pluginHooks.dateSpanTransforms)
        Object.assign(n, r(t, e));
    return Object.assign(n, Lp(t, e.dateEnv)),
        n
}
function So(t, e, n) {
    let { dateEnv: r, options: i } = n
        , s = e;
    return t ? (s = N(s),
        s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration),
        s
}
function Ui(t, e, n, r) {
    let i = Tn(t.defs, e)
        , s = J();
    for (let o in t.defs) {
        let l = t.defs[o];
        s.defs[o] = Cp(l, i[o], n, r)
    }
    for (let o in t.instances) {
        let l = t.instances[o]
            , a = s.defs[l.defId];
        s.instances[o] = Dp(l, a, i[l.defId], n, r)
    }
    return s
}
function Cp(t, e, n, r) {
    let i = n.standardProps || {};
    i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
    let s = Object.assign(Object.assign(Object.assign({}, t), i), {
        ui: Object.assign(Object.assign({}, t.ui), i.ui)
    });
    n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
    for (let o of r.pluginHooks.eventDefMutationAppliers)
        o(s, n, r);
    return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0),
        s
}
function Dp(t, e, n, r, i) {
    let { dateEnv: s } = i
        , o = r.standardProps && r.standardProps.allDay === !0
        , l = r.standardProps && r.standardProps.hasEnd === !1
        , a = Object.assign({}, t);
    return o && (a.range = ia(a.range)),
        r.datesDelta && n.startEditable && (a.range = {
            start: s.add(a.range.start, r.datesDelta),
            end: s.add(a.range.end, r.datesDelta)
        }),
        r.startDelta && n.durationEditable && (a.range = {
            start: s.add(a.range.start, r.startDelta),
            end: a.range.end
        }),
        r.endDelta && n.durationEditable && (a.range = {
            start: a.range.start,
            end: s.add(a.range.end, r.endDelta)
        }),
        l && (a.range = {
            start: a.range.start,
            end: So(e.allDay, a.range.start, i)
        }),
        e.allDay && (a.range = {
            start: N(a.range.start),
            end: N(a.range.end)
        }),
        a.range.end < a.range.start && (a.range.end = So(e.allDay, a.range.start, i)),
        a
}
class Ke {
    constructor(e, n) {
        this.context = e,
            this.internalEventSource = n
    }
    remove() {
        this.context.dispatch({
            type: "REMOVE_EVENT_SOURCE",
            sourceId: this.internalEventSource.sourceId
        })
    }
    refetch() {
        this.context.dispatch({
            type: "FETCH_EVENT_SOURCES",
            sourceIds: [this.internalEventSource.sourceId],
            isRefetch: !0
        })
    }
    get id() {
        return this.internalEventSource.publicId
    }
    get url() {
        return this.internalEventSource.meta.url
    }
    get format() {
        return this.internalEventSource.meta.format
    }
}
class B {
    constructor(e, n, r) {
        this._context = e,
            this._def = n,
            this._instance = r || null
    }
    setProp(e, n) {
        if (e in oa)
            console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
        else if (e === "id")
            n = fn[e](n),
                this.mutate({
                    standardProps: {
                        publicId: n
                    }
                });
        else if (e in fn)
            n = fn[e](n),
                this.mutate({
                    standardProps: {
                        [e]: n
                    }
                });
        else if (e in Rn) {
            let r = Rn[e](n);
            e === "color" ? r = {
                backgroundColor: n,
                borderColor: n
            } : e === "editable" ? r = {
                startEditable: n,
                durationEditable: n
            } : r = {
                [e]: n
            },
                this.mutate({
                    standardProps: {
                        ui: r
                    }
                })
        } else
            console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`)
    }
    setExtendedProp(e, n) {
        this.mutate({
            extendedProps: {
                [e]: n
            }
        })
    }
    setStart(e, n = {}) {
        let { dateEnv: r } = this._context
            , i = r.createMarker(e);
        if (i && this._instance) {
            let s = this._instance.range
                , o = Je(s.start, i, r, n.granularity);
            n.maintainDuration ? this.mutate({
                datesDelta: o
            }) : this.mutate({
                startDelta: o
            })
        }
    }
    setEnd(e, n = {}) {
        let { dateEnv: r } = this._context, i;
        if (!(e != null && (i = r.createMarker(e),
            !i)) && this._instance)
            if (i) {
                let s = Je(this._instance.range.end, i, r, n.granularity);
                this.mutate({
                    endDelta: s
                })
            } else
                this.mutate({
                    standardProps: {
                        hasEnd: !1
                    }
                })
    }
    setDates(e, n, r = {}) {
        let { dateEnv: i } = this._context, s = {
            allDay: r.allDay
        }, o = i.createMarker(e), l;
        if (o && !(n != null && (l = i.createMarker(n),
            !l)) && this._instance) {
            let a = this._instance.range;
            r.allDay === !0 && (a = ia(a));
            let u = Je(a.start, o, i, r.granularity);
            if (l) {
                let c = Je(a.end, l, i, r.granularity);
                Qf(u, c) ? this.mutate({
                    datesDelta: u,
                    standardProps: s
                }) : this.mutate({
                    startDelta: u,
                    endDelta: c,
                    standardProps: s
                })
            } else
                s.hasEnd = !1,
                    this.mutate({
                        datesDelta: u,
                        standardProps: s
                    })
        }
    }
    moveStart(e) {
        let n = M(e);
        n && this.mutate({
            startDelta: n
        })
    }
    moveEnd(e) {
        let n = M(e);
        n && this.mutate({
            endDelta: n
        })
    }
    moveDates(e) {
        let n = M(e);
        n && this.mutate({
            datesDelta: n
        })
    }
    setAllDay(e, n = {}) {
        let r = {
            allDay: e
        }
            , { maintainDuration: i } = n;
        i == null && (i = this._context.options.allDayMaintainDuration),
            this._def.allDay !== e && (r.hasEnd = i),
            this.mutate({
                standardProps: r
            })
    }
    formatRange(e) {
        let { dateEnv: n } = this._context
            , r = this._instance
            , i = P(e);
        return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, i, {
            forcedStartTzo: r.forcedStartTzo,
            forcedEndTzo: r.forcedEndTzo
        }) : n.format(r.range.start, i, {
            forcedTzo: r.forcedStartTzo
        })
    }
    mutate(e) {
        let n = this._instance;
        if (n) {
            let r = this._def
                , i = this._context
                , { eventStore: s } = i.getCurrentData()
                , o = Li(s, n.instanceId);
            o = Ui(o, {
                "": {
                    display: "",
                    startEditable: !0,
                    durationEditable: !0,
                    constraints: [],
                    overlap: null,
                    allows: [],
                    backgroundColor: "",
                    borderColor: "",
                    textColor: "",
                    classNames: []
                }
            }, e, i);
            let a = new B(i, r, n);
            this._def = o.defs[r.defId],
                this._instance = o.instances[n.instanceId],
                i.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: o
                }),
                i.emitter.trigger("eventChange", {
                    oldEvent: a,
                    event: this,
                    relatedEvents: je(o, i, n),
                    revert() {
                        i.dispatch({
                            type: "RESET_EVENTS",
                            eventStore: s
                        })
                    }
                })
        }
    }
    remove() {
        let e = this._context
            , n = ga(this);
        e.dispatch({
            type: "REMOVE_EVENTS",
            eventStore: n
        }),
            e.emitter.trigger("eventRemove", {
                event: this,
                relatedEvents: [],
                revert() {
                    e.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: n
                    })
                }
            })
    }
    get source() {
        let { sourceId: e } = this._def;
        return e ? new Ke(this._context, this._context.getCurrentData().eventSources[e]) : null
    }
    get start() {
        return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
    }
    get end() {
        return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
    }
    get startStr() {
        let e = this._instance;
        return e ? this._context.dateEnv.formatIso(e.range.start, {
            omitTime: this._def.allDay,
            forcedTzo: e.forcedStartTzo
        }) : ""
    }
    get endStr() {
        let e = this._instance;
        return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
            omitTime: this._def.allDay,
            forcedTzo: e.forcedEndTzo
        }) : ""
    }
    get id() {
        return this._def.publicId
    }
    get groupId() {
        return this._def.groupId
    }
    get allDay() {
        return this._def.allDay
    }
    get title() {
        return this._def.title
    }
    get url() {
        return this._def.url
    }
    get display() {
        return this._def.ui.display || "auto"
    }
    get startEditable() {
        return this._def.ui.startEditable
    }
    get durationEditable() {
        return this._def.ui.durationEditable
    }
    get constraint() {
        return this._def.ui.constraints[0] || null
    }
    get overlap() {
        return this._def.ui.overlap
    }
    get allow() {
        return this._def.ui.allows[0] || null
    }
    get backgroundColor() {
        return this._def.ui.backgroundColor
    }
    get borderColor() {
        return this._def.ui.borderColor
    }
    get textColor() {
        return this._def.ui.textColor
    }
    get classNames() {
        return this._def.ui.classNames
    }
    get extendedProps() {
        return this._def.extendedProps
    }
    toPlainObject(e = {}) {
        let n = this._def
            , { ui: r } = n
            , { startStr: i, endStr: s } = this
            , o = {
                allDay: n.allDay
            };
        return n.title && (o.title = n.title),
            i && (o.start = i),
            s && (o.end = s),
            n.publicId && (o.id = n.publicId),
            n.groupId && (o.groupId = n.groupId),
            n.url && (o.url = n.url),
            r.display && r.display !== "auto" && (o.display = r.display),
            e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? o.color = r.backgroundColor : (r.backgroundColor && (o.backgroundColor = r.backgroundColor),
                r.borderColor && (o.borderColor = r.borderColor)),
            r.textColor && (o.textColor = r.textColor),
            r.classNames.length && (o.classNames = r.classNames),
            Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(o, n.extendedProps) : o.extendedProps = n.extendedProps),
            o
    }
    toJSON() {
        return this.toPlainObject()
    }
}
function ga(t) {
    let e = t._def
        , n = t._instance;
    return {
        defs: {
            [e.defId]: e
        },
        instances: n ? {
            [n.instanceId]: n
        } : {}
    }
}
function je(t, e, n) {
    let { defs: r, instances: i } = t
        , s = []
        , o = n ? n.instanceId : "";
    for (let l in i) {
        let a = i[l]
            , u = r[a.defId];
        a.instanceId !== o && s.push(new B(e, u, a))
    }
    return s
}
function $r(t, e, n, r) {
    let i = {}
        , s = {}
        , o = {}
        , l = []
        , a = []
        , u = Tn(t.defs, e);
    for (let c in t.defs) {
        let d = t.defs[c];
        u[d.defId].display === "inverse-background" && (d.groupId ? (i[d.groupId] = [],
            o[d.groupId] || (o[d.groupId] = d)) : s[c] = [])
    }
    for (let c in t.instances) {
        let d = t.instances[c]
            , h = t.defs[d.defId]
            , f = u[h.defId]
            , m = d.range
            , v = !h.allDay && r ? Pi(m, r) : m
            , g = Ce(v, n);
        g && (f.display === "inverse-background" ? h.groupId ? i[h.groupId].push(g) : s[d.defId].push(g) : f.display !== "none" && (f.display === "background" ? l : a).push({
            def: h,
            ui: f,
            instance: d,
            range: g,
            isStart: v.start && v.start.valueOf() === g.start.valueOf(),
            isEnd: v.end && v.end.valueOf() === g.end.valueOf()
        }))
    }
    for (let c in i) {
        let d = i[c]
            , h = vo(d, n);
        for (let f of h) {
            let m = o[c]
                , v = u[m.defId];
            l.push({
                def: m,
                ui: v,
                instance: null,
                range: f,
                isStart: !1,
                isEnd: !1
            })
        }
    }
    for (let c in s) {
        let d = s[c]
            , h = vo(d, n);
        for (let f of h)
            l.push({
                def: t.defs[c],
                ui: u[c],
                instance: null,
                range: f,
                isStart: !1,
                isEnd: !1
            })
    }
    return {
        bg: l,
        fg: a
    }
}
function Rp(t) {
    return t.ui.display === "background" || t.ui.display === "inverse-background"
}
function _o(t, e) {
    t.fcSeg = e
}
function it(t) {
    return t.fcSeg || t.parentNode.fcSeg || null
}
function Tn(t, e) {
    return he(t, n => ma(n, e))
}
function ma(t, e) {
    let n = [];
    return e[""] && n.push(e[""]),
        e[t.defId] && n.push(e[t.defId]),
        n.push(t.ui),
        ca(n)
}
function zi(t, e) {
    let n = t.map(xp);
    return n.sort((r, i) => zf(r, i, e)),
        n.map(r => r._seg)
}
function xp(t) {
    let { eventRange: e } = t
        , n = e.def
        , r = e.instance ? e.instance.range : e.range
        , i = r.start ? r.start.valueOf() : 0
        , s = r.end ? r.end.valueOf() : 0;
    return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
        id: n.publicId,
        start: i,
        end: s,
        duration: s - i,
        allDay: Number(n.allDay),
        _seg: t
    })
}
function Tp(t, e) {
    let { pluginHooks: n } = e
        , r = n.isDraggableTransformers
        , { def: i, ui: s } = t.eventRange
        , o = s.startEditable;
    for (let l of r)
        o = l(o, i, s, e);
    return o
}
function Ip(t, e) {
    return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart
}
function Mp(t, e) {
    return t.isEnd && t.eventRange.ui.durationEditable
}
function Ct(t, e, n, r, i, s, o) {
    let { dateEnv: l, options: a } = n
        , { displayEventTime: u, displayEventEnd: c } = a
        , d = t.eventRange.def
        , h = t.eventRange.instance;
    u == null && (u = r !== !1),
        c == null && (c = i !== !1);
    let f = h.range.start
        , m = h.range.end
        , v = s || t.start || t.eventRange.range.start
        , g = o || t.end || t.eventRange.range.end
        , b = N(f).valueOf() === N(v).valueOf()
        , S = N(we(m, -1)).valueOf() === N(we(g, -1)).valueOf();
    return u && !d.allDay && (b || S) ? (v = b ? f : v,
        g = S ? m : g,
        c && d.hasEnd ? l.formatRange(v, g, e, {
            forcedStartTzo: s ? null : h.forcedStartTzo,
            forcedEndTzo: o ? null : h.forcedEndTzo
        }) : l.format(v, e, {
            forcedTzo: s ? null : h.forcedStartTzo
        })) : ""
}
function fe(t, e, n) {
    let r = t.eventRange.range;
    return {
        isPast: r.end <= (n || e.start),
        isFuture: r.start >= (n || e.end),
        isToday: e && de(e, r.start)
    }
}
function Op(t) {
    let e = ["fc-event"];
    return t.isMirror && e.push("fc-event-mirror"),
        t.isDraggable && e.push("fc-event-draggable"),
        (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"),
        t.isDragging && e.push("fc-event-dragging"),
        t.isResizing && e.push("fc-event-resizing"),
        t.isSelected && e.push("fc-event-selected"),
        t.isStart && e.push("fc-event-start"),
        t.isEnd && e.push("fc-event-end"),
        t.isPast && e.push("fc-event-past"),
        t.isToday && e.push("fc-event-today"),
        t.isFuture && e.push("fc-event-future"),
        e
}
function va(t) {
    return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`
}
function Wi(t, e) {
    let { def: n, instance: r } = t.eventRange
        , { url: i } = n;
    if (i)
        return {
            href: i
        };
    let { emitter: s, options: o } = e
        , { eventInteractive: l } = o;
    return l == null && (l = n.interactive,
        l == null && (l = !!s.hasHandlers("eventClick"))),
        l ? Ql(a => {
            s.trigger("eventClick", {
                el: a.target,
                event: new B(e, n, r),
                jsEvent: a,
                view: e.viewApi
            })
        }
        ) : {}
}
const kp = {
    start: y,
    end: y,
    allDay: Boolean
};
function Np(t, e, n) {
    let r = Pp(t, e)
        , { range: i } = r;
    if (!i.start)
        return null;
    if (!i.end) {
        if (n == null)
            return null;
        i.end = e.add(i.start, n)
    }
    return r
}
function Pp(t, e) {
    let { refined: n, extra: r } = Ii(t, kp)
        , i = n.start ? e.createMarkerMeta(n.start) : null
        , s = n.end ? e.createMarkerMeta(n.end) : null
        , { allDay: o } = n;
    return o == null && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)),
        Object.assign({
            range: {
                start: i ? i.marker : null,
                end: s ? s.marker : null
            },
            allDay: o
        }, r)
}
function Hp(t, e) {
    return Zh(t.range, e.range) && t.allDay === e.allDay && Bp(t, e)
}
function Bp(t, e) {
    for (let n in e)
        if (n !== "range" && n !== "allDay" && t[n] !== e[n])
            return !1;
    for (let n in t)
        if (!(n in e))
            return !1;
    return !0
}
function Lp(t, e) {
    return Object.assign(Object.assign({}, ba(t.range, e, t.allDay)), {
        allDay: t.allDay
    })
}
function ya(t, e, n) {
    return Object.assign(Object.assign({}, ba(t, e, n)), {
        timeZone: e.timeZone
    })
}
function ba(t, e, n) {
    return {
        start: e.toDate(t.start),
        end: e.toDate(t.end),
        startStr: e.formatIso(t.start, {
            omitTime: n
        }),
        endStr: e.formatIso(t.end, {
            omitTime: n
        })
    }
}
function Fp(t, e, n) {
    let r = aa({
        editable: !1
    }, n)
        , i = Gr(r.refined, r.extra, "", t.allDay, !0, n);
    return {
        def: i,
        ui: ma(i, e),
        instance: Hi(i.defId, t.range),
        range: t.range,
        isStart: !0,
        isEnd: !0
    }
}
function jp(t, e, n) {
    let r = !1
        , i = function (l) {
            r || (r = !0,
                e(l))
        }
        , s = function (l) {
            r || (r = !0,
                n(l))
        }
        , o = t(i, s);
    o && typeof o.then == "function" && o.then(i, s)
}
class Ao extends Error {
    constructor(e, n) {
        super(e),
            this.response = n
    }
}
function Up(t, e, n) {
    t = t.toUpperCase();
    const r = {
        method: t
    };
    return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n),
        r.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }),
        fetch(e, r).then(i => {
            if (i.ok)
                return i.json().then(s => [s, i], () => {
                    throw new Ao("Failure parsing JSON", i)
                }
                );
            throw new Ao("Request failed", i)
        }
        )
}
let vr;
function Ea() {
    return vr == null && (vr = zp()),
        vr
}
function zp() {
    if (typeof document > "u")
        return !0;
    let t = document.createElement("div");
    t.style.position = "absolute",
        t.style.top = "0px",
        t.style.left = "0px",
        t.innerHTML = "<table><tr><td><div></div></td></tr></table>",
        t.querySelector("table").style.height = "100px",
        t.querySelector("div").style.height = "100%",
        document.body.appendChild(t);
    let n = t.querySelector("div").offsetHeight > 0;
    return document.body.removeChild(t),
        n
}
class Wp extends O {
    constructor() {
        super(...arguments),
            this.state = {
                forPrint: !1
            },
            this.handleBeforePrint = () => {
                Dn(() => {
                    this.setState({
                        forPrint: !0
                    })
                }
                )
            }
            ,
            this.handleAfterPrint = () => {
                Dn(() => {
                    this.setState({
                        forPrint: !1
                    })
                }
                )
            }
    }
    render() {
        let { props: e } = this
            , { options: n } = e
            , { forPrint: r } = this.state
            , i = r || n.height === "auto" || n.contentHeight === "auto"
            , s = !i && n.height != null ? n.height : ""
            , o = ["fc", r ? "fc-media-print" : "fc-media-screen", `fc-direction-${n.direction}`, e.theme.getClass("root")];
        return Ea() || o.push("fc-liquid-hack"),
            e.children(o, s, i, r)
    }
    componentDidMount() {
        let { emitter: e } = this.props;
        e.on("_beforeprint", this.handleBeforePrint),
            e.on("_afterprint", this.handleAfterPrint)
    }
    componentWillUnmount() {
        let { emitter: e } = this.props;
        e.off("_beforeprint", this.handleBeforePrint),
            e.off("_afterprint", this.handleAfterPrint)
    }
}
class dt {
    constructor(e) {
        this.component = e.component,
            this.isHitComboAllowed = e.isHitComboAllowed || null
    }
    destroy() { }
}
function Vp(t, e) {
    return {
        component: t,
        el: e.el,
        useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
        isHitComboAllowed: e.isHitComboAllowed || null
    }
}
function Vi(t) {
    return {
        [t.component.uid]: t
    }
}
const Yr = {};
class Gp {
    getCurrentData() {
        return this.currentDataManager.getCurrentData()
    }
    dispatch(e) {
        this.currentDataManager.dispatch(e)
    }
    get view() {
        return this.getCurrentData().viewApi
    }
    batchRendering(e) {
        e()
    }
    updateSize() {
        this.trigger("_resize", !0)
    }
    setOption(e, n) {
        this.dispatch({
            type: "SET_OPTION",
            optionName: e,
            rawOptionValue: n
        })
    }
    getOption(e) {
        return this.currentDataManager.currentCalendarOptionsInput[e]
    }
    getAvailableLocaleCodes() {
        return Object.keys(this.getCurrentData().availableRawLocales)
    }
    on(e, n) {
        let { currentDataManager: r } = this;
        r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`)
    }
    off(e, n) {
        this.currentDataManager.emitter.off(e, n)
    }
    trigger(e, ...n) {
        this.currentDataManager.emitter.trigger(e, ...n)
    }
    changeView(e, n) {
        this.batchRendering(() => {
            if (this.unselect(),
                n)
                if (n.start && n.end)
                    this.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: e
                    }),
                        this.dispatch({
                            type: "SET_OPTION",
                            optionName: "visibleRange",
                            rawOptionValue: n
                        });
                else {
                    let { dateEnv: r } = this.getCurrentData();
                    this.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: e,
                        dateMarker: r.createMarker(n)
                    })
                }
            else
                this.dispatch({
                    type: "CHANGE_VIEW_TYPE",
                    viewType: e
                })
        }
        )
    }
    zoomTo(e, n) {
        let r = this.getCurrentData(), i;
        n = n || "day",
            i = r.viewSpecs[n] || this.getUnitViewSpec(n),
            this.unselect(),
            i ? this.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: i.type,
                dateMarker: e
            }) : this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: e
            })
    }
    getUnitViewSpec(e) {
        let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), i = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), s, o;
        for (let l in n)
            i.push(l);
        for (s = 0; s < i.length; s += 1)
            if (o = n[i[s]],
                o && o.singleUnit === e)
                return o;
        return null
    }
    prev() {
        this.unselect(),
            this.dispatch({
                type: "PREV"
            })
    }
    next() {
        this.unselect(),
            this.dispatch({
                type: "NEXT"
            })
    }
    prevYear() {
        let e = this.getCurrentData();
        this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: e.dateEnv.addYears(e.currentDate, -1)
            })
    }
    nextYear() {
        let e = this.getCurrentData();
        this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: e.dateEnv.addYears(e.currentDate, 1)
            })
    }
    today() {
        let e = this.getCurrentData();
        this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: Ft(e.calendarOptions.now, e.dateEnv)
            })
    }
    gotoDate(e) {
        let n = this.getCurrentData();
        this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: n.dateEnv.createMarker(e)
            })
    }
    incrementDate(e) {
        let n = this.getCurrentData()
            , r = M(e);
        r && (this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: n.dateEnv.add(n.currentDate, r)
            }))
    }
    getDate() {
        let e = this.getCurrentData();
        return e.dateEnv.toDate(e.currentDate)
    }
    formatDate(e, n) {
        let { dateEnv: r } = this.getCurrentData();
        return r.format(r.createMarker(e), P(n))
    }
    formatRange(e, n, r) {
        let { dateEnv: i } = this.getCurrentData();
        return i.formatRange(i.createMarker(e), i.createMarker(n), P(r), r)
    }
    formatIso(e, n) {
        let { dateEnv: r } = this.getCurrentData();
        return r.formatIso(r.createMarker(e), {
            omitTime: n
        })
    }
    select(e, n) {
        let r;
        n == null ? e.start != null ? r = e : r = {
            start: e,
            end: null
        } : r = {
            start: e,
            end: n
        };
        let i = this.getCurrentData()
            , s = Np(r, i.dateEnv, M({
                days: 1
            }));
        s && (this.dispatch({
            type: "SELECT_DATES",
            selection: s
        }),
            pa(s, null, i))
    }
    unselect(e) {
        let n = this.getCurrentData();
        n.dateSelection && (this.dispatch({
            type: "UNSELECT_DATES"
        }),
            wp(e, n))
    }
    addEvent(e, n) {
        if (e instanceof B) {
            let o = e._def
                , l = e._instance;
            return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
                type: "ADD_EVENTS",
                eventStore: qr({
                    def: o,
                    instance: l
                })
            }),
                this.triggerEventAdd(e)),
                e
        }
        let r = this.getCurrentData(), i;
        if (n instanceof Ke)
            i = n.internalEventSource;
        else if (typeof n == "boolean")
            n && ([i] = Oi(r.eventSources));
        else if (n != null) {
            let o = this.getEventSourceById(n);
            if (!o)
                return console.warn(`Could not find an event source with ID "${n}"`),
                    null;
            i = o.internalEventSource
        }
        let s = la(e, i, r, !1);
        if (s) {
            let o = new B(r, s.def, s.def.recurringDef ? null : s.instance);
            return this.dispatch({
                type: "ADD_EVENTS",
                eventStore: qr(s)
            }),
                this.triggerEventAdd(o),
                o
        }
        return null
    }
    triggerEventAdd(e) {
        let { emitter: n } = this.getCurrentData();
        n.trigger("eventAdd", {
            event: e,
            relatedEvents: [],
            revert: () => {
                this.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: ga(e)
                })
            }
        })
    }
    getEventById(e) {
        let n = this.getCurrentData()
            , { defs: r, instances: i } = n.eventStore;
        e = String(e);
        for (let s in r) {
            let o = r[s];
            if (o.publicId === e) {
                if (o.recurringDef)
                    return new B(n, o, null);
                for (let l in i) {
                    let a = i[l];
                    if (a.defId === o.defId)
                        return new B(n, o, a)
                }
            }
        }
        return null
    }
    getEvents() {
        let e = this.getCurrentData();
        return je(e.eventStore, e)
    }
    removeAllEvents() {
        this.dispatch({
            type: "REMOVE_ALL_EVENTS"
        })
    }
    getEventSources() {
        let e = this.getCurrentData()
            , n = e.eventSources
            , r = [];
        for (let i in n)
            r.push(new Ke(e, n[i]));
        return r
    }
    getEventSourceById(e) {
        let n = this.getCurrentData()
            , r = n.eventSources;
        e = String(e);
        for (let i in r)
            if (r[i].publicId === e)
                return new Ke(n, r[i]);
        return null
    }
    addEventSource(e) {
        let n = this.getCurrentData();
        if (e instanceof Ke)
            return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                type: "ADD_EVENT_SOURCES",
                sources: [e.internalEventSource]
            }),
                e;
        let r = ua(e, n);
        return r ? (this.dispatch({
            type: "ADD_EVENT_SOURCES",
            sources: [r]
        }),
            new Ke(n, r)) : null
    }
    removeAllEventSources() {
        this.dispatch({
            type: "REMOVE_ALL_EVENT_SOURCES"
        })
    }
    refetchEvents() {
        this.dispatch({
            type: "FETCH_EVENT_SOURCES",
            isRefetch: !0
        })
    }
    scrollToTime(e) {
        let n = M(e);
        n && this.trigger("_scrollRequest", {
            time: n
        })
    }
}
function qp(t, e) {
    return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom
}
function Sa(t, e) {
    let n = {
        left: Math.max(t.left, e.left),
        right: Math.min(t.right, e.right),
        top: Math.max(t.top, e.top),
        bottom: Math.min(t.bottom, e.bottom)
    };
    return n.left < n.right && n.top < n.bottom ? n : !1
}
function $p(t, e) {
    return {
        left: Math.min(Math.max(t.left, e.left), e.right),
        top: Math.min(Math.max(t.top, e.top), e.bottom)
    }
}
function Yp(t) {
    return {
        left: (t.left + t.right) / 2,
        top: (t.top + t.bottom) / 2
    }
}
function Qp(t, e) {
    return {
        left: t.left - e.left,
        top: t.top - e.top
    }
}
const yr = J();
class Zp {
    constructor() {
        this.getKeysForEventDefs = w(this._getKeysForEventDefs),
            this.splitDateSelection = w(this._splitDateSpan),
            this.splitEventStore = w(this._splitEventStore),
            this.splitIndividualUi = w(this._splitIndividualUi),
            this.splitEventDrag = w(this._splitInteraction),
            this.splitEventResize = w(this._splitInteraction),
            this.eventUiBuilders = {}
    }
    splitProps(e) {
        let n = this.getKeyInfo(e)
            , r = this.getKeysForEventDefs(e.eventStore)
            , i = this.splitDateSelection(e.dateSelection)
            , s = this.splitIndividualUi(e.eventUiBases, r)
            , o = this.splitEventStore(e.eventStore, r)
            , l = this.splitEventDrag(e.eventDrag)
            , a = this.splitEventResize(e.eventResize)
            , u = {};
        this.eventUiBuilders = he(n, (c, d) => this.eventUiBuilders[d] || w(Xp));
        for (let c in n) {
            let d = n[c]
                , h = o[c] || yr
                , f = this.eventUiBuilders[c];
            u[c] = {
                businessHours: d.businessHours || e.businessHours,
                dateSelection: i[c] || null,
                eventStore: h,
                eventUiBases: f(e.eventUiBases[""], d.ui, s[c]),
                eventSelection: h.instances[e.eventSelection] ? e.eventSelection : "",
                eventDrag: l[c] || null,
                eventResize: a[c] || null
            }
        }
        return u
    }
    _splitDateSpan(e) {
        let n = {};
        if (e) {
            let r = this.getKeysForDateSpan(e);
            for (let i of r)
                n[i] = e
        }
        return n
    }
    _getKeysForEventDefs(e) {
        return he(e.defs, n => this.getKeysForEventDef(n))
    }
    _splitEventStore(e, n) {
        let { defs: r, instances: i } = e
            , s = {};
        for (let o in r)
            for (let l of n[o])
                s[l] || (s[l] = J()),
                    s[l].defs[o] = r[o];
        for (let o in i) {
            let l = i[o];
            for (let a of n[l.defId])
                s[a] && (s[a].instances[o] = l)
        }
        return s
    }
    _splitIndividualUi(e, n) {
        let r = {};
        for (let i in e)
            if (i)
                for (let s of n[i])
                    r[s] || (r[s] = {}),
                        r[s][i] = e[i];
        return r
    }
    _splitInteraction(e) {
        let n = {};
        if (e) {
            let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents))
                , i = this._getKeysForEventDefs(e.mutatedEvents)
                , s = this._splitEventStore(e.mutatedEvents, i)
                , o = l => {
                    n[l] || (n[l] = {
                        affectedEvents: r[l] || yr,
                        mutatedEvents: s[l] || yr,
                        isEvent: e.isEvent
                    })
                }
                ;
            for (let l in r)
                o(l);
            for (let l in s)
                o(l)
        }
        return n
    }
}
function Xp(t, e, n) {
    let r = [];
    t && r.push(t),
        e && r.push(e);
    let i = {
        "": ca(r)
    };
    return n && Object.assign(i, n),
        i
}
function Gi(t, e, n, r) {
    return {
        dow: t.getUTCDay(),
        isDisabled: !!(r && !de(r.activeRange, t)),
        isOther: !!(r && !de(r.currentRange, t)),
        isToday: !!(e && de(e, t)),
        isPast: !!(n ? t < n : e && t < e.start),
        isFuture: !!(n ? t > n : e && t >= e.end)
    }
}
function Qn(t, e) {
    let n = ["fc-day", `fc-day-${eh[t.dow]}`];
    return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"),
        n.push(e.getClass("today"))),
        t.isPast && n.push("fc-day-past"),
        t.isFuture && n.push("fc-day-future"),
        t.isOther && n.push("fc-day-other")),
        n
}
const Kp = P({
    year: "numeric",
    month: "long",
    day: "numeric"
})
    , Jp = P({
        week: "long"
    });
function st(t, e, n = "day", r = !0) {
    const { dateEnv: i, options: s, calendarApi: o } = t;
    let l = i.format(e, n === "week" ? Jp : Kp);
    if (s.navLinks) {
        let a = i.toDate(e);
        const u = c => {
            let d = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
            typeof d == "function" ? d.call(o, i.toDate(e), c) : (typeof d == "string" && (n = d),
                o.zoomTo(e, n))
        }
            ;
        return Object.assign({
            title: At(s.navLinkHint, [l, a], l),
            "data-navlink": ""
        }, r ? Yl(u) : {
            onClick: u
        })
    }
    return {
        "aria-label": l
    }
}
let br = null;
function eg() {
    return br === null && (br = tg()),
        br
}
function tg() {
    let t = document.createElement("div");
    _t(t, {
        position: "absolute",
        top: -1e3,
        left: 0,
        border: 0,
        padding: 0,
        overflow: "scroll",
        direction: "rtl"
    }),
        t.innerHTML = "<div></div>",
        document.body.appendChild(t);
    let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
    return Ci(t),
        n
}
let Er;
function ng() {
    return Er || (Er = rg()),
        Er
}
function rg() {
    let t = document.createElement("div");
    t.style.overflow = "scroll",
        t.style.position = "absolute",
        t.style.top = "-9999px",
        t.style.left = "-9999px",
        document.body.appendChild(t);
    let e = _a(t);
    return document.body.removeChild(t),
        e
}
function _a(t) {
    return {
        x: t.offsetHeight - t.clientHeight,
        y: t.offsetWidth - t.clientWidth
    }
}
function ig(t, e = !1) {
    let n = window.getComputedStyle(t)
        , r = parseInt(n.borderLeftWidth, 10) || 0
        , i = parseInt(n.borderRightWidth, 10) || 0
        , s = parseInt(n.borderTopWidth, 10) || 0
        , o = parseInt(n.borderBottomWidth, 10) || 0
        , l = _a(t)
        , a = l.y - r - i
        , u = l.x - s - o
        , c = {
            borderLeft: r,
            borderRight: i,
            borderTop: s,
            borderBottom: o,
            scrollbarBottom: u,
            scrollbarLeft: 0,
            scrollbarRight: 0
        };
    return eg() && n.direction === "rtl" ? c.scrollbarLeft = a : c.scrollbarRight = a,
        e && (c.paddingLeft = parseInt(n.paddingLeft, 10) || 0,
            c.paddingRight = parseInt(n.paddingRight, 10) || 0,
            c.paddingTop = parseInt(n.paddingTop, 10) || 0,
            c.paddingBottom = parseInt(n.paddingBottom, 10) || 0),
        c
}
function sg(t, e = !1, n) {
    let r = qi(t)
        , i = ig(t, e)
        , s = {
            left: r.left + i.borderLeft + i.scrollbarLeft,
            right: r.right - i.borderRight - i.scrollbarRight,
            top: r.top + i.borderTop,
            bottom: r.bottom - i.borderBottom - i.scrollbarBottom
        };
    return e && (s.left += i.paddingLeft,
        s.right -= i.paddingRight,
        s.top += i.paddingTop,
        s.bottom -= i.paddingBottom),
        s
}
function qi(t) {
    let e = t.getBoundingClientRect();
    return {
        left: e.left + window.scrollX,
        top: e.top + window.scrollY,
        right: e.right + window.scrollX,
        bottom: e.bottom + window.scrollY
    }
}
function og(t) {
    let e = Aa(t)
        , n = t.getBoundingClientRect();
    for (let r of e) {
        let i = Sa(n, r.getBoundingClientRect());
        if (i)
            n = i;
        else
            return null
    }
    return n
}
function Aa(t) {
    let e = [];
    for (; t instanceof HTMLElement;) {
        let n = window.getComputedStyle(t);
        if (n.position === "fixed")
            break;
        /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t),
            t = t.parentNode
    }
    return e
}
class ot {
    constructor(e, n, r, i) {
        this.els = n;
        let s = this.originClientRect = e.getBoundingClientRect();
        r && this.buildElHorizontals(s.left),
            i && this.buildElVerticals(s.top)
    }
    buildElHorizontals(e) {
        let n = []
            , r = [];
        for (let i of this.els) {
            let s = i.getBoundingClientRect();
            n.push(s.left - e),
                r.push(s.right - e)
        }
        this.lefts = n,
            this.rights = r
    }
    buildElVerticals(e) {
        let n = []
            , r = [];
        for (let i of this.els) {
            let s = i.getBoundingClientRect();
            n.push(s.top - e),
                r.push(s.bottom - e)
        }
        this.tops = n,
            this.bottoms = r
    }
    leftToIndex(e) {
        let { lefts: n, rights: r } = this, i = n.length, s;
        for (s = 0; s < i; s += 1)
            if (e >= n[s] && e < r[s])
                return s
    }
    topToIndex(e) {
        let { tops: n, bottoms: r } = this, i = n.length, s;
        for (s = 0; s < i; s += 1)
            if (e >= n[s] && e < r[s])
                return s
    }
    getWidth(e) {
        return this.rights[e] - this.lefts[e]
    }
    getHeight(e) {
        return this.bottoms[e] - this.tops[e]
    }
    similarTo(e) {
        return Qt(this.tops || [], e.tops || []) && Qt(this.bottoms || [], e.bottoms || []) && Qt(this.lefts || [], e.lefts || []) && Qt(this.rights || [], e.rights || [])
    }
}
function Qt(t, e) {
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (Math.round(t[r]) !== Math.round(e[r]))
            return !1;
    return !0
}
class $i {
    getMaxScrollTop() {
        return this.getScrollHeight() - this.getClientHeight()
    }
    getMaxScrollLeft() {
        return this.getScrollWidth() - this.getClientWidth()
    }
    canScrollVertically() {
        return this.getMaxScrollTop() > 0
    }
    canScrollHorizontally() {
        return this.getMaxScrollLeft() > 0
    }
    canScrollUp() {
        return this.getScrollTop() > 0
    }
    canScrollDown() {
        return this.getScrollTop() < this.getMaxScrollTop()
    }
    canScrollLeft() {
        return this.getScrollLeft() > 0
    }
    canScrollRight() {
        return this.getScrollLeft() < this.getMaxScrollLeft()
    }
}
class lg extends $i {
    constructor(e) {
        super(),
            this.el = e
    }
    getScrollTop() {
        return this.el.scrollTop
    }
    getScrollLeft() {
        return this.el.scrollLeft
    }
    setScrollTop(e) {
        this.el.scrollTop = e
    }
    setScrollLeft(e) {
        this.el.scrollLeft = e
    }
    getScrollWidth() {
        return this.el.scrollWidth
    }
    getScrollHeight() {
        return this.el.scrollHeight
    }
    getClientHeight() {
        return this.el.clientHeight
    }
    getClientWidth() {
        return this.el.clientWidth
    }
}
class ag extends $i {
    getScrollTop() {
        return window.scrollY
    }
    getScrollLeft() {
        return window.scrollX
    }
    setScrollTop(e) {
        window.scroll(window.scrollX, e)
    }
    setScrollLeft(e) {
        window.scroll(e, window.scrollY)
    }
    getScrollWidth() {
        return document.documentElement.scrollWidth
    }
    getScrollHeight() {
        return document.documentElement.scrollHeight
    }
    getClientHeight() {
        return document.documentElement.clientHeight
    }
    getClientWidth() {
        return document.documentElement.clientWidth
    }
}
class ie extends O {
    constructor() {
        super(...arguments),
            this.uid = Qe()
    }
    prepareHits() { }
    queryHit(e, n, r, i) {
        return null
    }
    isValidSegDownEl(e) {
        return !this.props.eventDrag && !this.props.eventResize && !W(e, ".fc-event-mirror")
    }
    isValidDateDownEl(e) {
        return !W(e, ".fc-event:not(.fc-bg-event)") && !W(e, ".fc-more-link") && !W(e, "a[data-navlink]") && !W(e, ".fc-popover")
    }
}
class wa {
    constructor(e = n => n.thickness || 1) {
        this.getEntryThickness = e,
            this.strictOrder = !1,
            this.allowReslicing = !1,
            this.maxCoord = -1,
            this.maxStackCnt = -1,
            this.levelCoords = [],
            this.entriesByLevel = [],
            this.stackCnts = {}
    }
    addSegs(e) {
        let n = [];
        for (let r of e)
            this.insertEntry(r, n);
        return n
    }
    insertEntry(e, n) {
        let r = this.findInsertion(e);
        this.isInsertionValid(r, e) ? this.insertEntryAt(e, r) : this.handleInvalidInsertion(r, e, n)
    }
    isInsertionValid(e, n) {
        return (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(n) <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt)
    }
    handleInvalidInsertion(e, n, r) {
        if (this.allowReslicing && e.touchingEntry) {
            const i = Object.assign(Object.assign({}, n), {
                span: Yi(n.span, e.touchingEntry.span)
            });
            r.push(i),
                this.splitEntry(n, e.touchingEntry, r)
        } else
            r.push(n)
    }
    splitEntry(e, n, r) {
        let i = e.span
            , s = n.span;
        i.start < s.start && this.insertEntry({
            index: e.index,
            thickness: e.thickness,
            span: {
                start: i.start,
                end: s.start
            }
        }, r),
            i.end > s.end && this.insertEntry({
                index: e.index,
                thickness: e.thickness,
                span: {
                    start: s.end,
                    end: i.end
                }
            }, r)
    }
    insertEntryAt(e, n) {
        let { entriesByLevel: r, levelCoords: i } = this;
        n.lateral === -1 ? (Sr(i, n.level, n.levelCoord),
            Sr(r, n.level, [e])) : Sr(r[n.level], n.lateral, e),
            this.stackCnts[Ue(e)] = n.stackCnt
    }
    findInsertion(e) {
        let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this
            , o = n.length
            , l = 0
            , a = -1
            , u = -1
            , c = null
            , d = 0;
        for (let m = 0; m < o; m += 1) {
            const v = n[m];
            if (!i && v >= l + this.getEntryThickness(e))
                break;
            let g = r[m], b, S = Zr(g, e.span.start, Qr), _ = S[0] + S[1];
            for (; (b = g[_]) && b.span.start < e.span.end;) {
                let A = v + this.getEntryThickness(b);
                A > l && (l = A,
                    c = b,
                    a = m,
                    u = _),
                    A === l && (d = Math.max(d, s[Ue(b)] + 1)),
                    _ += 1
            }
        }
        let h = 0;
        if (c)
            for (h = a + 1; h < o && n[h] < l;)
                h += 1;
        let f = -1;
        return h < o && n[h] === l && (f = Zr(r[h], e.span.end, Qr)[0]),
        {
            touchingLevel: a,
            touchingLateral: u,
            touchingEntry: c,
            stackCnt: d,
            levelCoord: l,
            level: h,
            lateral: f
        }
    }
    toRects() {
        let { entriesByLevel: e, levelCoords: n } = this
            , r = e.length
            , i = [];
        for (let s = 0; s < r; s += 1) {
            let o = e[s]
                , l = n[s];
            for (let a of o)
                i.push(Object.assign(Object.assign({}, a), {
                    thickness: this.getEntryThickness(a),
                    levelCoord: l
                }))
        }
        return i
    }
}
function Qr(t) {
    return t.span.end
}
function Ue(t) {
    return t.index + ":" + t.span.start
}
function cg(t) {
    let e = [];
    for (let n of t) {
        let r = []
            , i = {
                span: n.span,
                entries: [n]
            };
        for (let s of e)
            Yi(s.span, i.span) ? i = {
                entries: s.entries.concat(i.entries),
                span: ug(s.span, i.span)
            } : r.push(s);
        r.push(i),
            e = r
    }
    return e
}
function ug(t, e) {
    return {
        start: Math.min(t.start, e.start),
        end: Math.max(t.end, e.end)
    }
}
function Yi(t, e) {
    let n = Math.max(t.start, e.start)
        , r = Math.min(t.end, e.end);
    return n < r ? {
        start: n,
        end: r
    } : null
}
function Sr(t, e, n) {
    t.splice(e, 0, n)
}
function Zr(t, e, n) {
    let r = 0
        , i = t.length;
    if (!i || e < n(t[r]))
        return [0, 0];
    if (e > n(t[i - 1]))
        return [i, 0];
    for (; r < i;) {
        let s = Math.floor(r + (i - r) / 2)
            , o = n(t[s]);
        if (e < o)
            i = s;
        else if (e > o)
            r = s + 1;
        else
            return [s, 1]
    }
    return [r, 0]
}
class dg {
    constructor(e, n) {
        this.emitter = new Yn
    }
    destroy() { }
    setMirrorIsVisible(e) { }
    setMirrorNeedsRevert(e) { }
    setAutoScrollEnabled(e) { }
}
const Qi = {};
function fg(t, e) {
    return !t || e > 10 ? P({
        weekday: "short"
    }) : e > 1 ? P({
        weekday: "short",
        month: "numeric",
        day: "numeric",
        omitCommas: !0
    }) : P({
        weekday: "long"
    })
}
const Ca = "fc-col-header-cell";
function Da(t) {
    return t.text
}
class hg extends O {
    render() {
        let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context
            , { props: s } = this
            , { date: o, dateProfile: l } = s
            , a = Gi(o, s.todayRange, null, l)
            , u = [Ca].concat(Qn(a, r))
            , c = e.format(o, s.dayHeaderFormat)
            , d = !a.isDisabled && s.colCnt > 1 ? st(this.context, o) : {}
            , h = Object.assign(Object.assign(Object.assign({
                date: e.toDate(o),
                view: i
            }, s.extraRenderProps), {
                text: c
            }), a);
        return p(V, {
            elTag: "th",
            elClasses: u,
            elAttrs: Object.assign({
                role: "columnheader",
                colSpan: s.colSpan,
                "data-date": a.isDisabled ? void 0 : Bt(o)
            }, s.extraDataAttrs),
            renderProps: h,
            generatorName: "dayHeaderContent",
            customGenerator: n.dayHeaderContent,
            defaultGenerator: Da,
            classNameGenerator: n.dayHeaderClassNames,
            didMount: n.dayHeaderDidMount,
            willUnmount: n.dayHeaderWillUnmount
        }, f => p("div", {
            className: "fc-scrollgrid-sync-inner"
        }, !a.isDisabled && p(f, {
            elTag: "a",
            elAttrs: d,
            elClasses: ["fc-col-header-cell-cushion", s.isSticky && "fc-sticky"]
        })))
    }
}
const pg = P({
    weekday: "long"
});
class gg extends O {
    render() {
        let { props: e } = this
            , { dateEnv: n, theme: r, viewApi: i, options: s } = this.context
            , o = U(new Date(2592e5), e.dow)
            , l = {
                dow: e.dow,
                isDisabled: !1,
                isFuture: !1,
                isPast: !1,
                isToday: !1,
                isOther: !1
            }
            , a = n.format(o, e.dayHeaderFormat)
            , u = Object.assign(Object.assign(Object.assign(Object.assign({
                date: o
            }, l), {
                view: i
            }), e.extraRenderProps), {
                text: a
            });
        return p(V, {
            elTag: "th",
            elClasses: [Ca, ...Qn(l, r), ...e.extraClassNames || []],
            elAttrs: Object.assign({
                role: "columnheader",
                colSpan: e.colSpan
            }, e.extraDataAttrs),
            renderProps: u,
            generatorName: "dayHeaderContent",
            customGenerator: s.dayHeaderContent,
            defaultGenerator: Da,
            classNameGenerator: s.dayHeaderClassNames,
            didMount: s.dayHeaderDidMount,
            willUnmount: s.dayHeaderWillUnmount
        }, c => p("div", {
            className: "fc-scrollgrid-sync-inner"
        }, p(c, {
            elTag: "a",
            elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"],
            elAttrs: {
                "aria-label": n.format(o, pg)
            }
        })))
    }
}
class ft extends K {
    constructor(e, n) {
        super(e, n),
            this.initialNowDate = Ft(n.options.now, n.dateEnv),
            this.initialNowQueriedMs = new Date().valueOf(),
            this.state = this.computeTiming().currentState
    }
    render() {
        let { props: e, state: n } = this;
        return e.children(n.nowDate, n.todayRange)
    }
    componentDidMount() {
        this.setTimeout()
    }
    componentDidUpdate(e) {
        e.unit !== this.props.unit && (this.clearTimeout(),
            this.setTimeout())
    }
    componentWillUnmount() {
        this.clearTimeout()
    }
    computeTiming() {
        let { props: e, context: n } = this
            , r = we(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs)
            , i = n.dateEnv.startOf(r, e.unit)
            , s = n.dateEnv.add(i, M(1, e.unit))
            , o = s.valueOf() - r.valueOf();
        return o = Math.min(1e3 * 60 * 60 * 24, o),
        {
            currentState: {
                nowDate: i,
                todayRange: wo(i)
            },
            nextState: {
                nowDate: s,
                todayRange: wo(s)
            },
            waitMs: o
        }
    }
    setTimeout() {
        let { nextState: e, waitMs: n } = this.computeTiming();
        this.timeoutId = setTimeout(() => {
            this.setState(e, () => {
                this.setTimeout()
            }
            )
        }
            , n)
    }
    clearTimeout() {
        this.timeoutId && clearTimeout(this.timeoutId)
    }
}
ft.contextType = me;
function wo(t) {
    let e = N(t)
        , n = U(e, 1);
    return {
        start: e,
        end: n
    }
}
class Ra extends O {
    constructor() {
        super(...arguments),
            this.createDayHeaderFormatter = w(mg)
    }
    render() {
        let { context: e } = this
            , { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props
            , o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
        return p(ft, {
            unit: "day"
        }, (l, a) => p("tr", {
            role: "row"
        }, s && s("day"), n.map(u => i ? p(hg, {
            key: u.toISOString(),
            date: u,
            dateProfile: r,
            todayRange: a,
            colCnt: n.length,
            dayHeaderFormat: o
        }) : p(gg, {
            key: u.getUTCDay(),
            dow: u.getUTCDay(),
            dayHeaderFormat: o
        }))))
    }
}
function mg(t, e, n) {
    return t || fg(e, n)
}
class xa {
    constructor(e, n) {
        let r = e.start
            , { end: i } = e
            , s = []
            , o = []
            , l = -1;
        for (; r < i;)
            n.isHiddenDay(r) ? s.push(l + .5) : (l += 1,
                s.push(l),
                o.push(r)),
                r = U(r, 1);
        this.dates = o,
            this.indices = s,
            this.cnt = o.length
    }
    sliceRange(e) {
        let n = this.getDateDayIndex(e.start)
            , r = this.getDateDayIndex(U(e.end, -1))
            , i = Math.max(0, n)
            , s = Math.min(this.cnt - 1, r);
        return i = Math.ceil(i),
            s = Math.floor(s),
            i <= s ? {
                firstIndex: i,
                lastIndex: s,
                isStart: n === i,
                isEnd: r === s
            } : null
    }
    getDateDayIndex(e) {
        let { indices: n } = this
            , r = Math.floor(Te(this.dates[0], e));
        return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r]
    }
}
class Ta {
    constructor(e, n) {
        let { dates: r } = e, i, s, o;
        if (n) {
            for (s = r[0].getUTCDay(),
                i = 1; i < r.length && r[i].getUTCDay() !== s; i += 1)
                ;
            o = Math.ceil(r.length / i)
        } else
            o = 1,
                i = r.length;
        this.rowCnt = o,
            this.colCnt = i,
            this.daySeries = e,
            this.cells = this.buildCells(),
            this.headerDates = this.buildHeaderDates()
    }
    buildCells() {
        let e = [];
        for (let n = 0; n < this.rowCnt; n += 1) {
            let r = [];
            for (let i = 0; i < this.colCnt; i += 1)
                r.push(this.buildCell(n, i));
            e.push(r)
        }
        return e
    }
    buildCell(e, n) {
        let r = this.daySeries.dates[e * this.colCnt + n];
        return {
            key: r.toISOString(),
            date: r
        }
    }
    buildHeaderDates() {
        let e = [];
        for (let n = 0; n < this.colCnt; n += 1)
            e.push(this.cells[0][n].date);
        return e
    }
    sliceRange(e) {
        let { colCnt: n } = this
            , r = this.daySeries.sliceRange(e)
            , i = [];
        if (r) {
            let { firstIndex: s, lastIndex: o } = r
                , l = s;
            for (; l <= o;) {
                let a = Math.floor(l / n)
                    , u = Math.min((a + 1) * n, o + 1);
                i.push({
                    row: a,
                    firstCol: l % n,
                    lastCol: (u - 1) % n,
                    isStart: r.isStart && l === s,
                    isEnd: r.isEnd && u - 1 === o
                }),
                    l = u
            }
        }
        return i
    }
}
class Ia {
    constructor() {
        this.sliceBusinessHours = w(this._sliceBusinessHours),
            this.sliceDateSelection = w(this._sliceDateSpan),
            this.sliceEventStore = w(this._sliceEventStore),
            this.sliceEventDrag = w(this._sliceInteraction),
            this.sliceEventResize = w(this._sliceInteraction),
            this.forceDayIfListItem = !1
    }
    sliceProps(e, n, r, i, ...s) {
        let { eventUiBases: o } = e
            , l = this.sliceEventStore(e.eventStore, o, n, r, ...s);
        return {
            dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, o, i, ...s),
            businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, i, ...s),
            fgEventSegs: l.fg,
            bgEventSegs: l.bg,
            eventDrag: this.sliceEventDrag(e.eventDrag, o, n, r, ...s),
            eventResize: this.sliceEventResize(e.eventResize, o, n, r, ...s),
            eventSelection: e.eventSelection
        }
    }
    sliceNowDate(e, n, r, i, ...s) {
        return this._sliceDateSpan({
            range: {
                start: e,
                end: we(e, 1)
            },
            allDay: !1
        }, n, r, {}, i, ...s)
    }
    _sliceBusinessHours(e, n, r, i, ...s) {
        return e ? this._sliceEventStore(Ye(e, Zt(n, !!r), i), {}, n, r, ...s).bg : []
    }
    _sliceEventStore(e, n, r, i, ...s) {
        if (e) {
            let o = $r(e, n, Zt(r, !!i), i);
            return {
                bg: this.sliceEventRanges(o.bg, s),
                fg: this.sliceEventRanges(o.fg, s)
            }
        }
        return {
            bg: [],
            fg: []
        }
    }
    _sliceInteraction(e, n, r, i, ...s) {
        if (!e)
            return null;
        let o = $r(e.mutatedEvents, n, Zt(r, !!i), i);
        return {
            segs: this.sliceEventRanges(o.fg, s),
            affectedInstances: e.affectedEvents.instances,
            isEvent: e.isEvent
        }
    }
    _sliceDateSpan(e, n, r, i, s, ...o) {
        if (!e)
            return [];
        let l = Zt(n, !!r)
            , a = Ce(e.range, l);
        if (a) {
            e = Object.assign(Object.assign({}, e), {
                range: a
            });
            let u = Fp(e, i, s)
                , c = this.sliceRange(e.range, ...o);
            for (let d of c)
                d.eventRange = u;
            return c
        }
        return []
    }
    sliceEventRanges(e, n) {
        let r = [];
        for (let i of e)
            r.push(...this.sliceEventRange(i, n));
        return r
    }
    sliceEventRange(e, n) {
        let r = e.range;
        this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
            start: r.start,
            end: U(r.start, 1)
        });
        let i = this.sliceRange(r, ...n);
        for (let s of i)
            s.eventRange = e,
                s.isStart = e.isStart && s.isStart,
                s.isEnd = e.isEnd && s.isEnd;
        return i
    }
}
function Zt(t, e) {
    let n = t.activeRange;
    return e ? n : {
        start: we(n.start, t.slotMinTime.milliseconds),
        end: we(n.end, t.slotMaxTime.milliseconds - 864e5)
    }
}
function Ma(t, e, n) {
    let { instances: r } = t.mutatedEvents;
    for (let i in r)
        if (!qn(e.validRange, r[i].range))
            return !1;
    return Oa({
        eventDrag: t
    }, n)
}
function vg(t, e, n) {
    return qn(e.validRange, t.range) ? Oa({
        dateSelection: t
    }, n) : !1
}
function Oa(t, e) {
    let n = e.getCurrentData()
        , r = Object.assign({
            businessHours: n.businessHours,
            dateSelection: "",
            eventStore: n.eventStore,
            eventUiBases: n.eventUiBases,
            eventSelection: "",
            eventDrag: null,
            eventResize: null
        }, t);
    return (e.pluginHooks.isPropsValid || yg)(r, e)
}
function yg(t, e, n = {}, r) {
    return !(t.eventDrag && !bg(t, e, n, r) || t.dateSelection && !Eg(t, e, n, r))
}
function bg(t, e, n, r) {
    let i = e.getCurrentData()
        , s = t.eventDrag
        , o = s.mutatedEvents
        , l = o.defs
        , a = o.instances
        , u = Tn(l, s.isEvent ? t.eventUiBases : {
            "": i.selectionConfig
        });
    r && (u = he(u, r));
    let c = vp(t.eventStore, s.affectedEvents.instances)
        , d = c.defs
        , h = c.instances
        , f = Tn(d, t.eventUiBases);
    for (let m in a) {
        let v = a[m]
            , g = v.range
            , b = u[v.defId]
            , S = l[v.defId];
        if (!ka(b.constraints, g, c, t.businessHours, e))
            return !1;
        let { eventOverlap: _ } = e.options
            , A = typeof _ == "function" ? _ : null;
        for (let R in h) {
            let I = h[R];
            if (Ni(g, I.range) && (f[I.defId].overlap === !1 && s.isEvent || b.overlap === !1 || A && !A(new B(e, d[I.defId], I), new B(e, S, v))))
                return !1
        }
        let D = i.eventStore;
        for (let R of b.allows) {
            let I = Object.assign(Object.assign({}, n), {
                range: v.range,
                allDay: S.allDay
            }), T = D.defs[S.defId], Z = D.instances[m], Oe;
            if (T ? Oe = new B(e, T, Z) : Oe = new B(e, S),
                !R(ji(I, e), Oe))
                return !1
        }
    }
    return !0
}
function Eg(t, e, n, r) {
    let i = t.eventStore
        , s = i.defs
        , o = i.instances
        , l = t.dateSelection
        , a = l.range
        , { selectionConfig: u } = e.getCurrentData();
    if (r && (u = r(u)),
        !ka(u.constraints, a, i, t.businessHours, e))
        return !1;
    let { selectOverlap: c } = e.options
        , d = typeof c == "function" ? c : null;
    for (let h in o) {
        let f = o[h];
        if (Ni(a, f.range) && (u.overlap === !1 || d && !d(new B(e, s[f.defId], f), null)))
            return !1
    }
    for (let h of u.allows) {
        let f = Object.assign(Object.assign({}, n), l);
        if (!h(ji(f, e), null))
            return !1
    }
    return !0
}
function ka(t, e, n, r, i) {
    for (let s of t)
        if (!_g(Sg(s, e, n, r, i), e))
            return !1;
    return !0
}
function Sg(t, e, n, r, i) {
    return t === "businessHours" ? _r(Ye(r, e, i)) : typeof t == "string" ? _r($n(n, s => s.groupId === t)) : typeof t == "object" && t ? _r(Ye(t, e, i)) : []
}
function _r(t) {
    let { instances: e } = t
        , n = [];
    for (let r in e)
        n.push(e[r].range);
    return n
}
function _g(t, e) {
    for (let n of t)
        if (qn(n, e))
            return !0;
    return !1
}
const Xt = /^(visible|hidden)$/;
class Na extends O {
    constructor() {
        super(...arguments),
            this.handleEl = e => {
                this.el = e,
                    pe(this.props.elRef, e)
            }
    }
    render() {
        let { props: e } = this
            , { liquid: n, liquidIsAbsolute: r } = e
            , i = n && r
            , s = ["fc-scroller"];
        return n && (r ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")),
            p("div", {
                ref: this.handleEl,
                className: s.join(" "),
                style: {
                    overflowX: e.overflowX,
                    overflowY: e.overflowY,
                    left: i && -(e.overcomeLeft || 0) || "",
                    right: i && -(e.overcomeRight || 0) || "",
                    bottom: i && -(e.overcomeBottom || 0) || "",
                    marginLeft: !i && -(e.overcomeLeft || 0) || "",
                    marginRight: !i && -(e.overcomeRight || 0) || "",
                    marginBottom: !i && -(e.overcomeBottom || 0) || "",
                    maxHeight: e.maxHeight || ""
                }
            }, e.children)
    }
    needsXScrolling() {
        if (Xt.test(this.props.overflowX))
            return !1;
        let { el: e } = this
            , n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth()
            , { children: r } = e;
        for (let i = 0; i < r.length; i += 1)
            if (r[i].getBoundingClientRect().width > n)
                return !0;
        return !1
    }
    needsYScrolling() {
        if (Xt.test(this.props.overflowY))
            return !1;
        let { el: e } = this
            , n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth()
            , { children: r } = e;
        for (let i = 0; i < r.length; i += 1)
            if (r[i].getBoundingClientRect().height > n)
                return !0;
        return !1
    }
    getXScrollbarWidth() {
        return Xt.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
    }
    getYScrollbarWidth() {
        return Xt.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
    }
}
class ue {
    constructor(e) {
        this.masterCallback = e,
            this.currentMap = {},
            this.depths = {},
            this.callbackMap = {},
            this.handleValue = (n, r) => {
                let { depths: i, currentMap: s } = this
                    , o = !1
                    , l = !1;
                n !== null ? (o = r in s,
                    s[r] = n,
                    i[r] = (i[r] || 0) + 1,
                    l = !0) : (i[r] -= 1,
                        i[r] || (delete s[r],
                            delete this.callbackMap[r],
                            o = !0)),
                    this.masterCallback && (o && this.masterCallback(null, String(r)),
                        l && this.masterCallback(n, String(r)))
            }
    }
    createRef(e) {
        let n = this.callbackMap[e];
        return n || (n = this.callbackMap[e] = r => {
            this.handleValue(r, String(e))
        }
        ),
            n
    }
    collect(e, n, r) {
        return kh(this.currentMap, e, n, r)
    }
    getAll() {
        return Oi(this.currentMap)
    }
}
function Ag(t) {
    let e = Of(t, ".fc-scrollgrid-shrink")
        , n = 0;
    for (let r of e)
        n = Math.max(n, qf(r));
    return Math.ceil(n)
}
function Pa(t, e) {
    return t.liquid && e.liquid
}
function wg(t, e) {
    return e.maxHeight != null || Pa(t, e)
}
function Cg(t, e, n, r) {
    let { expandRows: i } = n;
    return typeof e.content == "function" ? e.content(n) : p("table", {
        role: "presentation",
        className: [e.tableClassName, t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
        style: {
            minWidth: n.tableMinWidth,
            width: n.clientWidth,
            height: i ? n.clientHeight : ""
        }
    }, n.tableColGroupNode, p(r ? "thead" : "tbody", {
        role: "presentation"
    }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent))
}
function Dg(t, e) {
    return Ae(t, e, ae)
}
function Rg(t, e) {
    let n = [];
    for (let r of t) {
        let i = r.span || 1;
        for (let s = 0; s < i; s += 1)
            n.push(p("col", {
                style: {
                    width: r.width === "shrink" ? xg(e) : r.width || "",
                    minWidth: r.minWidth || ""
                }
            }))
    }
    return p("colgroup", {}, ...n)
}
function xg(t) {
    return t ?? 4
}
function Tg(t) {
    for (let e of t)
        if (e.width === "shrink")
            return !0;
    return !1
}
function Ig(t, e) {
    let n = ["fc-scrollgrid", e.theme.getClass("table")];
    return t && n.push("fc-scrollgrid-liquid"),
        n
}
function Mg(t, e) {
    let n = ["fc-scrollgrid-section", `fc-scrollgrid-section-${t.type}`, t.className];
    return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"),
        t.isSticky && n.push("fc-scrollgrid-section-sticky"),
        n
}
function Xr(t) {
    return p("div", {
        className: "fc-scrollgrid-sticky-shim",
        style: {
            width: t.clientWidth,
            minWidth: t.tableMinWidth
        }
    })
}
function In(t) {
    let { stickyHeaderDates: e } = t;
    return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"),
        e
}
function Ha(t) {
    let { stickyFooterScrollbar: e } = t;
    return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"),
        e
}
class Zi extends O {
    constructor() {
        super(...arguments),
            this.processCols = w(e => e, Dg),
            this.renderMicroColGroup = w(Rg),
            this.scrollerRefs = new ue,
            this.scrollerElRefs = new ue(this._handleScrollerEl.bind(this)),
            this.state = {
                shrinkWidth: null,
                forceYScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {}
            },
            this.handleSizing = () => {
                this.safeSetState(Object.assign({
                    shrinkWidth: this.computeShrinkWidth()
                }, this.computeScrollerDims()))
            }
    }
    render() {
        let { props: e, state: n, context: r } = this
            , i = e.sections || []
            , s = this.processCols(e.cols)
            , o = this.renderMicroColGroup(s, n.shrinkWidth)
            , l = Ig(e.liquid, r);
        e.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
        let a = i.length, u = 0, c, d = [], h = [], f = [];
        for (; u < a && (c = i[u]).type === "header";)
            d.push(this.renderSection(c, o, !0)),
                u += 1;
        for (; u < a && (c = i[u]).type === "body";)
            h.push(this.renderSection(c, o, !1)),
                u += 1;
        for (; u < a && (c = i[u]).type === "footer";)
            f.push(this.renderSection(c, o, !0)),
                u += 1;
        let m = !Ea();
        const v = {
            role: "rowgroup"
        };
        return p("table", {
            role: "grid",
            className: l.join(" "),
            style: {
                height: e.height
            }
        }, !!(!m && d.length) && p("thead", v, ...d), !!(!m && h.length) && p("tbody", v, ...h), !!(!m && f.length) && p("tfoot", v, ...f), m && p("tbody", v, ...d, ...h, ...f))
    }
    renderSection(e, n, r) {
        return "outerContent" in e ? p(k, {
            key: e.key
        }, e.outerContent) : p("tr", {
            key: e.key,
            role: "presentation",
            className: Mg(e, this.props.liquid).join(" ")
        }, this.renderChunkTd(e, n, e.chunk, r))
    }
    renderChunkTd(e, n, r, i) {
        if ("outerContent" in r)
            return r.outerContent;
        let { props: s } = this
            , { forceYScrollbars: o, scrollerClientWidths: l, scrollerClientHeights: a } = this.state
            , u = wg(s, e)
            , c = Pa(s, e)
            , d = s.liquid ? o ? "scroll" : u ? "auto" : "hidden" : "visible"
            , h = e.key
            , f = Cg(e, r, {
                tableColGroupNode: n,
                tableMinWidth: "",
                clientWidth: !s.collapsibleWidth && l[h] !== void 0 ? l[h] : null,
                clientHeight: a[h] !== void 0 ? a[h] : null,
                expandRows: e.expandRows,
                syncRowHeights: !1,
                rowSyncHeights: [],
                reportRowHeightChange: () => { }
            }, i);
        return p(i ? "th" : "td", {
            ref: r.elRef,
            role: "presentation"
        }, p("div", {
            className: `fc-scroller-harness${c ? " fc-scroller-harness-liquid" : ""}`
        }, p(Na, {
            ref: this.scrollerRefs.createRef(h),
            elRef: this.scrollerElRefs.createRef(h),
            overflowY: d,
            overflowX: s.liquid ? "hidden" : "visible",
            maxHeight: e.maxHeight,
            liquid: c,
            liquidIsAbsolute: !0
        }, f)))
    }
    _handleScrollerEl(e, n) {
        let r = Og(this.props.sections, n);
        r && pe(r.chunk.scrollerElRef, e)
    }
    componentDidMount() {
        this.handleSizing(),
            this.context.addResizeHandler(this.handleSizing)
    }
    componentDidUpdate() {
        this.handleSizing()
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleSizing)
    }
    computeShrinkWidth() {
        return Tg(this.props.cols) ? Ag(this.scrollerElRefs.getAll()) : 0
    }
    computeScrollerDims() {
        let e = ng()
            , { scrollerRefs: n, scrollerElRefs: r } = this
            , i = !1
            , s = {}
            , o = {};
        for (let l in n.currentMap) {
            let a = n.currentMap[l];
            if (a && a.needsYScrolling()) {
                i = !0;
                break
            }
        }
        for (let l of this.props.sections) {
            let a = l.key
                , u = r.currentMap[a];
            if (u) {
                let c = u.parentNode;
                s[a] = Math.floor(c.getBoundingClientRect().width - (i ? e.y : 0)),
                    o[a] = Math.floor(c.getBoundingClientRect().height)
            }
        }
        return {
            forceYScrollbars: i,
            scrollerClientWidths: s,
            scrollerClientHeights: o
        }
    }
}
Zi.addStateEquality({
    scrollerClientWidths: ae,
    scrollerClientHeights: ae
});
function Og(t, e) {
    for (let n of t)
        if (n.key === e)
            return n;
    return null
}
class Zn extends O {
    constructor() {
        super(...arguments),
            this.handleEl = e => {
                this.el = e,
                    e && _o(e, this.props.seg)
            }
    }
    render() {
        const { props: e, context: n } = this
            , { options: r } = n
            , { seg: i } = e
            , { eventRange: s } = i
            , { ui: o } = s
            , l = {
                event: new B(n, s.def, s.instance),
                view: n.viewApi,
                timeText: e.timeText,
                textColor: o.textColor,
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                isDraggable: !e.disableDragging && Tp(i, n),
                isStartResizable: !e.disableResizing && Ip(i, n),
                isEndResizable: !e.disableResizing && Mp(i),
                isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
                isStart: !!i.isStart,
                isEnd: !!i.isEnd,
                isPast: !!e.isPast,
                isFuture: !!e.isFuture,
                isToday: !!e.isToday,
                isSelected: !!e.isSelected,
                isDragging: !!e.isDragging,
                isResizing: !!e.isResizing
            };
        return p(V, Object.assign({}, e, {
            elRef: this.handleEl,
            elClasses: [...Op(l), ...i.eventRange.ui.classNames, ...e.elClasses || []],
            renderProps: l,
            generatorName: "eventContent",
            customGenerator: r.eventContent,
            defaultGenerator: e.defaultGenerator,
            classNameGenerator: r.eventClassNames,
            didMount: r.eventDidMount,
            willUnmount: r.eventWillUnmount
        }))
    }
    componentDidUpdate(e) {
        this.el && this.props.seg !== e.seg && _o(this.el, this.props.seg)
    }
}
class Ba extends O {
    render() {
        let { props: e, context: n } = this
            , { options: r } = n
            , { seg: i } = e
            , { ui: s } = i.eventRange
            , o = r.eventTimeFormat || e.defaultTimeFormat
            , l = Ct(i, o, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
        return p(Zn, Object.assign({}, e, {
            elTag: "a",
            elStyle: {
                borderColor: s.borderColor,
                backgroundColor: s.backgroundColor
            },
            elAttrs: Wi(i, n),
            defaultGenerator: kg,
            timeText: l
        }), (a, u) => p(k, null, p(a, {
            elTag: "div",
            elClasses: ["fc-event-main"],
            elStyle: {
                color: u.textColor
            }
        }), !!u.isStartResizable && p("div", {
            className: "fc-event-resizer fc-event-resizer-start"
        }), !!u.isEndResizable && p("div", {
            className: "fc-event-resizer fc-event-resizer-end"
        })))
    }
}
function kg(t) {
    return p("div", {
        className: "fc-event-main-frame"
    }, t.timeText && p("div", {
        className: "fc-event-time"
    }, t.timeText), p("div", {
        className: "fc-event-title-container"
    }, p("div", {
        className: "fc-event-title fc-sticky"
    }, t.event.title || p(k, null, " "))))
}
const Xi = t => p(me.Consumer, null, e => {
    let { options: n } = e
        , r = {
            isAxis: t.isAxis,
            date: e.dateEnv.toDate(t.date),
            view: e.viewApi
        };
    return p(V, Object.assign({}, t, {
        elTag: t.elTag || "div",
        renderProps: r,
        generatorName: "nowIndicatorContent",
        customGenerator: n.nowIndicatorContent,
        classNameGenerator: n.nowIndicatorClassNames,
        didMount: n.nowIndicatorDidMount,
        willUnmount: n.nowIndicatorWillUnmount
    }))
}
)
    , Ng = P({
        day: "numeric"
    });
class Ki extends O {
    constructor() {
        super(...arguments),
            this.refineRenderProps = dn(Pg)
    }
    render() {
        let { props: e, context: n } = this
            , { options: r } = n
            , i = this.refineRenderProps({
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                isMonthStart: e.isMonthStart || !1,
                showDayNumber: e.showDayNumber,
                extraRenderProps: e.extraRenderProps,
                viewApi: n.viewApi,
                dateEnv: n.dateEnv,
                monthStartFormat: r.monthStartFormat
            });
        return p(V, Object.assign({}, e, {
            elClasses: [...Qn(i, n.theme), ...e.elClasses || []],
            elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : {
                "data-date": Bt(e.date)
            }),
            renderProps: i,
            generatorName: "dayCellContent",
            customGenerator: r.dayCellContent,
            defaultGenerator: e.defaultGenerator,
            classNameGenerator: i.isDisabled ? void 0 : r.dayCellClassNames,
            didMount: r.dayCellDidMount,
            willUnmount: r.dayCellWillUnmount
        }))
    }
}
function Ji(t) {
    return !!(t.dayCellContent || Vr("dayCellContent", t))
}
function Pg(t) {
    let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t
        , s = Gi(e, t.todayRange, null, r)
        , o = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : Ng) : "";
    return Object.assign(Object.assign(Object.assign({
        date: n.toDate(e),
        view: t.viewApi
    }, s), {
        isMonthStart: i,
        dayNumberText: o
    }), t.extraRenderProps)
}
class La extends O {
    render() {
        let { props: e } = this
            , { seg: n } = e;
        return p(Zn, {
            elTag: "div",
            elClasses: ["fc-bg-event"],
            elStyle: {
                backgroundColor: n.eventRange.ui.backgroundColor
            },
            defaultGenerator: Hg,
            seg: n,
            timeText: "",
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday,
            disableDragging: !0,
            disableResizing: !0
        })
    }
}
function Hg(t) {
    let { title: e } = t.event;
    return e && p("div", {
        className: "fc-event-title"
    }, t.event.title)
}
function Fa(t) {
    return p("div", {
        className: `fc-${t}`
    })
}
const ja = t => p(me.Consumer, null, e => {
    let { dateEnv: n, options: r } = e
        , { date: i } = t
        , s = r.weekNumberFormat || t.defaultFormat
        , o = n.computeWeekNumber(i)
        , l = n.format(i, s);
    return p(V, Object.assign({}, t, {
        renderProps: {
            num: o,
            text: l,
            date: i
        },
        generatorName: "weekNumberContent",
        customGenerator: r.weekNumberContent,
        defaultGenerator: Bg,
        classNameGenerator: r.weekNumberClassNames,
        didMount: r.weekNumberDidMount,
        willUnmount: r.weekNumberWillUnmount
    }))
}
);
function Bg(t) {
    return t.text
}
const Ar = 10;
class Lg extends O {
    constructor() {
        super(...arguments),
            this.state = {
                titleId: _e()
            },
            this.handleRootEl = e => {
                this.rootEl = e,
                    this.props.elRef && pe(this.props.elRef, e)
            }
            ,
            this.handleDocumentMouseDown = e => {
                const n = ql(e);
                this.rootEl.contains(n) || this.handleCloseClick()
            }
            ,
            this.handleDocumentKeyDown = e => {
                e.key === "Escape" && this.handleCloseClick()
            }
            ,
            this.handleCloseClick = () => {
                let { onClose: e } = this.props;
                e && e()
            }
    }
    render() {
        let { theme: e, options: n } = this.context
            , { props: r, state: i } = this
            , s = ["fc-popover", e.getClass("popover")].concat(r.extraClassNames || []);
        return yf(p("div", Object.assign({}, r.extraAttrs, {
            id: r.id,
            className: s.join(" "),
            "aria-labelledby": i.titleId,
            ref: this.handleRootEl
        }), p("div", {
            className: "fc-popover-header " + e.getClass("popoverHeader")
        }, p("span", {
            className: "fc-popover-title",
            id: i.titleId
        }, r.title), p("span", {
            className: "fc-popover-close " + e.getIconClass("close"),
            title: n.closeHint,
            onClick: this.handleCloseClick
        })), p("div", {
            className: "fc-popover-body " + e.getClass("popoverContent")
        }, r.children)), r.parentEl)
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleDocumentMouseDown),
            document.addEventListener("keydown", this.handleDocumentKeyDown),
            this.updateSize()
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleDocumentMouseDown),
            document.removeEventListener("keydown", this.handleDocumentKeyDown)
    }
    updateSize() {
        let { isRtl: e } = this.context
            , { alignmentEl: n, alignGridTop: r } = this.props
            , { rootEl: i } = this
            , s = og(n);
        if (s) {
            let o = i.getBoundingClientRect()
                , l = r ? W(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top
                , a = e ? s.right - o.width : s.left;
            l = Math.max(l, Ar),
                a = Math.min(a, document.documentElement.clientWidth - Ar - o.width),
                a = Math.max(a, Ar);
            let u = i.offsetParent.getBoundingClientRect();
            _t(i, {
                top: l - u.top,
                left: a - u.left
            })
        }
    }
}
class Fg extends ie {
    constructor() {
        super(...arguments),
            this.handleRootEl = e => {
                this.rootEl = e,
                    e ? this.context.registerInteractiveComponent(this, {
                        el: e,
                        useEventCenter: !1
                    }) : this.context.unregisterInteractiveComponent(this)
            }
    }
    render() {
        let { options: e, dateEnv: n } = this.context
            , { props: r } = this
            , { startDate: i, todayRange: s, dateProfile: o } = r
            , l = n.format(i, e.dayPopoverFormat);
        return p(Ki, {
            elRef: this.handleRootEl,
            date: i,
            dateProfile: o,
            todayRange: s
        }, (a, u, c) => p(Lg, {
            elRef: c.ref,
            id: r.id,
            title: l,
            extraClassNames: ["fc-more-popover"].concat(c.className || []),
            extraAttrs: c,
            parentEl: r.parentEl,
            alignmentEl: r.alignmentEl,
            alignGridTop: r.alignGridTop,
            onClose: r.onClose
        }, Ji(e) && p(a, {
            elTag: "div",
            elClasses: ["fc-more-popover-misc"]
        }), r.children))
    }
    queryHit(e, n, r, i) {
        let { rootEl: s, props: o } = this;
        return e >= 0 && e < r && n >= 0 && n < i ? {
            dateProfile: o.dateProfile,
            dateSpan: Object.assign({
                allDay: !o.forceTimed,
                range: {
                    start: o.startDate,
                    end: o.endDate
                }
            }, o.extraDateSpan),
            dayEl: s,
            rect: {
                left: 0,
                top: 0,
                right: r,
                bottom: i
            },
            layer: 1
        } : null
    }
}
class Ua extends O {
    constructor() {
        super(...arguments),
            this.state = {
                isPopoverOpen: !1,
                popoverId: _e()
            },
            this.handleLinkEl = e => {
                this.linkEl = e,
                    this.props.elRef && pe(this.props.elRef, e)
            }
            ,
            this.handleClick = e => {
                let { props: n, context: r } = this
                    , { moreLinkClick: i } = r.options
                    , s = Co(n).start;
                function o(l) {
                    let { def: a, instance: u, range: c } = l.eventRange;
                    return {
                        event: new B(r, a, u),
                        start: r.dateEnv.toDate(c.start),
                        end: r.dateEnv.toDate(c.end),
                        isStart: l.isStart,
                        isEnd: l.isEnd
                    }
                }
                typeof i == "function" && (i = i({
                    date: s,
                    allDay: !!n.allDayDate,
                    allSegs: n.allSegs.map(o),
                    hiddenSegs: n.hiddenSegs.map(o),
                    jsEvent: e,
                    view: r.viewApi
                })),
                    !i || i === "popover" ? this.setState({
                        isPopoverOpen: !0
                    }) : typeof i == "string" && r.calendarApi.zoomTo(s, i)
            }
            ,
            this.handlePopoverClose = () => {
                this.setState({
                    isPopoverOpen: !1
                })
            }
    }
    render() {
        let { props: e, state: n } = this;
        return p(me.Consumer, null, r => {
            let { viewApi: i, options: s, calendarApi: o } = r
                , { moreLinkText: l } = s
                , { moreCnt: a } = e
                , u = Co(e)
                , c = typeof l == "function" ? l.call(o, a) : `+${a} ${l}`
                , d = At(s.moreLinkHint, [a], c)
                , h = {
                    num: a,
                    shortText: `+${a}`,
                    text: c,
                    view: i
                };
            return p(k, null, !!e.moreCnt && p(V, {
                elTag: e.elTag || "a",
                elRef: this.handleLinkEl,
                elClasses: [...e.elClasses || [], "fc-more-link"],
                elStyle: e.elStyle,
                elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Yl(this.handleClick)), {
                    title: d,
                    "aria-expanded": n.isPopoverOpen,
                    "aria-controls": n.isPopoverOpen ? n.popoverId : ""
                }),
                renderProps: h,
                generatorName: "moreLinkContent",
                customGenerator: s.moreLinkContent,
                defaultGenerator: e.defaultGenerator || jg,
                classNameGenerator: s.moreLinkClassNames,
                didMount: s.moreLinkDidMount,
                willUnmount: s.moreLinkWillUnmount
            }, e.children), n.isPopoverOpen && p(Fg, {
                id: n.popoverId,
                startDate: u.start,
                endDate: u.end,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                extraDateSpan: e.extraDateSpan,
                parentEl: this.parentEl,
                alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl,
                alignGridTop: e.alignGridTop,
                forceTimed: e.forceTimed,
                onClose: this.handlePopoverClose
            }, e.popoverContent()))
        }
        )
    }
    componentDidMount() {
        this.updateParentEl()
    }
    componentDidUpdate() {
        this.updateParentEl()
    }
    updateParentEl() {
        this.linkEl && (this.parentEl = W(this.linkEl, ".fc-view-harness"))
    }
}
function jg(t) {
    return t.text
}
function Co(t) {
    if (t.allDayDate)
        return {
            start: t.allDayDate,
            end: U(t.allDayDate, 1)
        };
    let { hiddenSegs: e } = t;
    return {
        start: za(e),
        end: zg(e)
    }
}
function za(t) {
    return t.reduce(Ug).eventRange.range.start
}
function Ug(t, e) {
    return t.eventRange.range.start < e.eventRange.range.start ? t : e
}
function zg(t) {
    return t.reduce(Wg).eventRange.range.end
}
function Wg(t, e) {
    return t.eventRange.range.end > e.eventRange.range.end ? t : e
}
const Vg = []
    , Wa = {
        code: "en",
        week: {
            dow: 0,
            doy: 4
        },
        direction: "ltr",
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day",
            list: "list"
        },
        weekText: "W",
        weekTextLong: "Week",
        closeHint: "Close",
        timeHint: "Time",
        eventHint: "Event",
        allDayText: "all-day",
        moreLinkText: "more",
        noEventsText: "No events to display"
    }
    , Va = Object.assign(Object.assign({}, Wa), {
        buttonHints: {
            prev: "Previous $0",
            next: "Next $0",
            today(t, e) {
                return e === "day" ? "Today" : `This ${t}`
            }
        },
        viewHint: "$0 view",
        navLinkHint: "Go to $0",
        moreLinkHint(t) {
            return `Show ${t} more event${t === 1 ? "" : "s"}`
        }
    });
function Gg(t) {
    let e = t.length > 0 ? t[0].code : "en"
        , n = Vg.concat(t)
        , r = {
            en: Va
        };
    for (let i of n)
        r[i.code] = i;
    return {
        map: r,
        defaultCode: e
    }
}
function Ga(t, e) {
    return typeof t == "object" && !Array.isArray(t) ? qa(t.code, [t.code], t) : qg(t, e)
}
function qg(t, e) {
    let n = [].concat(t || [])
        , r = $g(n, e) || Va;
    return qa(t, n, r)
}
function $g(t, e) {
    for (let n = 0; n < t.length; n += 1) {
        let r = t[n].toLocaleLowerCase().split("-");
        for (let i = r.length; i > 0; i -= 1) {
            let s = r.slice(0, i).join("-");
            if (e[s])
                return e[s]
        }
    }
    return null
}
function qa(t, e, n) {
    let r = Mi([Wa, n], ["buttonText"]);
    delete r.code;
    let { week: i } = r;
    return delete r.week,
    {
        codeArg: t,
        codes: e,
        week: i,
        simpleNumberFormat: new Intl.NumberFormat(t),
        options: r
    }
}
function ce(t) {
    return {
        id: Qe(),
        name: t.name,
        premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
        deps: t.deps || [],
        reducers: t.reducers || [],
        isLoadingFuncs: t.isLoadingFuncs || [],
        contextInit: [].concat(t.contextInit || []),
        eventRefiners: t.eventRefiners || {},
        eventDefMemberAdders: t.eventDefMemberAdders || [],
        eventSourceRefiners: t.eventSourceRefiners || {},
        isDraggableTransformers: t.isDraggableTransformers || [],
        eventDragMutationMassagers: t.eventDragMutationMassagers || [],
        eventDefMutationAppliers: t.eventDefMutationAppliers || [],
        dateSelectionTransformers: t.dateSelectionTransformers || [],
        datePointTransforms: t.datePointTransforms || [],
        dateSpanTransforms: t.dateSpanTransforms || [],
        views: t.views || {},
        viewPropsTransformers: t.viewPropsTransformers || [],
        isPropsValid: t.isPropsValid || null,
        externalDefTransforms: t.externalDefTransforms || [],
        viewContainerAppends: t.viewContainerAppends || [],
        eventDropTransformers: t.eventDropTransformers || [],
        componentInteractions: t.componentInteractions || [],
        calendarInteractions: t.calendarInteractions || [],
        themeClasses: t.themeClasses || {},
        eventSourceDefs: t.eventSourceDefs || [],
        cmdFormatter: t.cmdFormatter,
        recurringTypes: t.recurringTypes || [],
        namedTimeZonedImpl: t.namedTimeZonedImpl,
        initialView: t.initialView || "",
        elementDraggingImpl: t.elementDraggingImpl,
        optionChangeHandlers: t.optionChangeHandlers || {},
        scrollGridImpl: t.scrollGridImpl || null,
        listenerRefiners: t.listenerRefiners || {},
        optionRefiners: t.optionRefiners || {},
        propSetHandlers: t.propSetHandlers || {}
    }
}
function Yg(t, e) {
    let n = {}
        , r = {
            premiumReleaseDate: void 0,
            reducers: [],
            isLoadingFuncs: [],
            contextInit: [],
            eventRefiners: {},
            eventDefMemberAdders: [],
            eventSourceRefiners: {},
            isDraggableTransformers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            views: {},
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            viewContainerAppends: [],
            eventDropTransformers: [],
            componentInteractions: [],
            calendarInteractions: [],
            themeClasses: {},
            eventSourceDefs: [],
            cmdFormatter: null,
            recurringTypes: [],
            namedTimeZonedImpl: null,
            initialView: "",
            elementDraggingImpl: null,
            optionChangeHandlers: {},
            scrollGridImpl: null,
            listenerRefiners: {},
            optionRefiners: {},
            propSetHandlers: {}
        };
    function i(s) {
        for (let o of s) {
            const l = o.name
                , a = n[l];
            a === void 0 ? (n[l] = o.id,
                i(o.deps),
                r = Zg(r, o)) : a !== o.id && console.warn(`Duplicate plugin '${l}'`)
        }
    }
    return t && i(t),
        i(e),
        r
}
function Qg() {
    let t = [], e = [], n;
    return (r, i) => ((!n || !Ae(r, t) || !Ae(i, e)) && (n = Yg(r, i)),
        t = r,
        e = i,
        n)
}
function Zg(t, e) {
    return {
        premiumReleaseDate: Xg(t.premiumReleaseDate, e.premiumReleaseDate),
        reducers: t.reducers.concat(e.reducers),
        isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
        contextInit: t.contextInit.concat(e.contextInit),
        eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
        eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
        eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
        isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
        eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
        eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
        dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
        datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
        dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
        views: Object.assign(Object.assign({}, t.views), e.views),
        viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
        isPropsValid: e.isPropsValid || t.isPropsValid,
        externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
        viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
        eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
        calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
        componentInteractions: t.componentInteractions.concat(e.componentInteractions),
        themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
        eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
        cmdFormatter: e.cmdFormatter || t.cmdFormatter,
        recurringTypes: t.recurringTypes.concat(e.recurringTypes),
        namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
        initialView: t.initialView || e.initialView,
        elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
        optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
        scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
        listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
        optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
        propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
    }
}
function Xg(t, e) {
    return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()))
}
class Ie extends Lt {
}
Ie.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active"
};
Ie.prototype.baseIconClass = "fc-icon";
Ie.prototype.iconClasses = {
    close: "fc-icon-x",
    prev: "fc-icon-chevron-left",
    next: "fc-icon-chevron-right",
    prevYear: "fc-icon-chevrons-left",
    nextYear: "fc-icon-chevrons-right"
};
Ie.prototype.rtlIconClasses = {
    prev: "fc-icon-chevron-right",
    next: "fc-icon-chevron-left",
    prevYear: "fc-icon-chevrons-right",
    nextYear: "fc-icon-chevrons-left"
};
Ie.prototype.iconOverrideOption = "buttonIcons";
Ie.prototype.iconOverrideCustomButtonOption = "icon";
Ie.prototype.iconOverridePrefix = "fc-icon-";
function Kg(t, e) {
    let n = {}, r;
    for (r in t)
        Kr(r, n, t, e);
    for (r in e)
        Kr(r, n, t, e);
    return n
}
function Kr(t, e, n, r) {
    if (e[t])
        return e[t];
    let i = Jg(t, e, n, r);
    return i && (e[t] = i),
        i
}
function Jg(t, e, n, r) {
    let i = n[t]
        , s = r[t]
        , o = c => i && i[c] !== null ? i[c] : s && s[c] !== null ? s[c] : null
        , l = o("component")
        , a = o("superType")
        , u = null;
    if (a) {
        if (a === t)
            throw new Error("Can't have a custom view type that references itself");
        u = Kr(a, e, n, r)
    }
    return !l && u && (l = u.component),
        l ? {
            type: t,
            component: l,
            defaults: Object.assign(Object.assign({}, u ? u.defaults : {}), i ? i.rawOptions : {}),
            overrides: Object.assign(Object.assign({}, u ? u.overrides : {}), s ? s.rawOptions : {})
        } : null
}
function Do(t) {
    return he(t, em)
}
function em(t) {
    let e = typeof t == "function" ? {
        component: t
    } : t
        , { component: n } = e;
    return e.content ? n = Ro(e) : n && !(n.prototype instanceof O) && (n = Ro(Object.assign(Object.assign({}, e), {
        content: n
    }))),
    {
        superType: e.type,
        component: n,
        rawOptions: e
    }
}
function Ro(t) {
    return e => p(me.Consumer, null, n => p(V, {
        elTag: "div",
        elClasses: ra(n.viewSpec),
        renderProps: Object.assign(Object.assign({}, e), {
            nextDayThreshold: n.options.nextDayThreshold
        }),
        generatorName: void 0,
        customGenerator: t.content,
        classNameGenerator: t.classNames,
        didMount: t.didMount,
        willUnmount: t.willUnmount
    }))
}
function tm(t, e, n, r) {
    let i = Do(t)
        , s = Do(e.views)
        , o = Kg(i, s);
    return he(o, l => nm(l, s, e, n, r))
}
function nm(t, e, n, r, i) {
    let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration
        , o = null
        , l = ""
        , a = ""
        , u = {};
    if (s && (o = rm(s),
        o)) {
        let h = zr(o);
        l = h.unit,
            h.value === 1 && (a = l,
                u = e[l] ? e[l].rawOptions : {})
    }
    let c = h => {
        let f = h.buttonText || {}
            , m = t.defaults.buttonTextKey;
        return m != null && f[m] != null ? f[m] : f[t.type] != null ? f[t.type] : f[a] != null ? f[a] : null
    }
        , d = h => {
            let f = h.buttonHints || {}
                , m = t.defaults.buttonTextKey;
            return m != null && f[m] != null ? f[m] : f[t.type] != null ? f[t.type] : f[a] != null ? f[a] : null
        }
        ;
    return {
        type: t.type,
        component: t.component,
        duration: o,
        durationUnit: l,
        singleUnit: a,
        optionDefaults: t.defaults,
        optionOverrides: Object.assign(Object.assign({}, u), t.overrides),
        buttonTextOverride: c(r) || c(n) || t.overrides.buttonText,
        buttonTextDefault: c(i) || t.defaults.buttonText || c(wt) || t.type,
        buttonTitleOverride: d(r) || d(n) || t.overrides.buttonHint,
        buttonTitleDefault: d(i) || t.defaults.buttonHint || d(wt)
    }
}
let xo = {};
function rm(t) {
    let e = JSON.stringify(t)
        , n = xo[e];
    return n === void 0 && (n = M(t),
        xo[e] = n),
        n
}
function im(t, e) {
    switch (e.type) {
        case "CHANGE_VIEW_TYPE":
            t = e.viewType
    }
    return t
}
function sm(t, e) {
    switch (e.type) {
        case "SET_OPTION":
            return Object.assign(Object.assign({}, t), {
                [e.optionName]: e.rawOptionValue
            });
        default:
            return t
    }
}
function om(t, e, n, r) {
    let i;
    switch (e.type) {
        case "CHANGE_VIEW_TYPE":
            return r.build(e.dateMarker || n);
        case "CHANGE_DATE":
            return r.build(e.dateMarker);
        case "PREV":
            if (i = r.buildPrev(t, n),
                i.isValid)
                return i;
            break;
        case "NEXT":
            if (i = r.buildNext(t, n),
                i.isValid)
                return i;
            break
    }
    return t
}
function lm(t, e, n) {
    let r = e ? e.activeRange : null;
    return Ya({}, pm(t, n), r, n)
}
function am(t, e, n, r) {
    let i = n ? n.activeRange : null;
    switch (e.type) {
        case "ADD_EVENT_SOURCES":
            return Ya(t, e.sources, i, r);
        case "REMOVE_EVENT_SOURCE":
            return um(t, e.sourceId);
        case "PREV":
        case "NEXT":
        case "CHANGE_DATE":
        case "CHANGE_VIEW_TYPE":
            return n ? Qa(t, i, r) : t;
        case "FETCH_EVENT_SOURCES":
            return es(t, e.sourceIds ? Kl(e.sourceIds) : Za(t, r), i, e.isRefetch || !1, r);
        case "RECEIVE_EVENTS":
        case "RECEIVE_EVENT_ERROR":
            return hm(t, e.sourceId, e.fetchId, e.fetchRange);
        case "REMOVE_ALL_EVENT_SOURCES":
            return {};
        default:
            return t
    }
}
function cm(t, e, n) {
    let r = e ? e.activeRange : null;
    return es(t, Za(t, n), r, !0, n)
}
function $a(t) {
    for (let e in t)
        if (t[e].isFetching)
            return !0;
    return !1
}
function Ya(t, e, n, r) {
    let i = {};
    for (let s of e)
        i[s.sourceId] = s;
    return n && (i = Qa(i, n, r)),
        Object.assign(Object.assign({}, t), i)
}
function um(t, e) {
    return $e(t, n => n.sourceId !== e)
}
function Qa(t, e, n) {
    return es(t, $e(t, r => dm(r, e, n)), e, !1, n)
}
function dm(t, e, n) {
    return Xa(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId
}
function es(t, e, n, r, i) {
    let s = {};
    for (let o in t) {
        let l = t[o];
        e[o] ? s[o] = fm(l, n, r, i) : s[o] = l
    }
    return s
}
function fm(t, e, n, r) {
    let { options: i, calendarApi: s } = r
        , o = r.pluginHooks.eventSourceDefs[t.sourceDefId]
        , l = Qe();
    return o.fetch({
        eventSource: t,
        range: e,
        isRefetch: n,
        context: r
    }, a => {
        let { rawEvents: u } = a;
        i.eventSourceSuccess && (u = i.eventSourceSuccess.call(s, u, a.response) || u),
            t.success && (u = t.success.call(s, u, a.response) || u),
            r.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: t.sourceId,
                fetchId: l,
                fetchRange: e,
                rawEvents: u
            })
    }
        , a => {
            let u = !1;
            i.eventSourceFailure && (i.eventSourceFailure.call(s, a),
                u = !0),
                t.failure && (t.failure(a),
                    u = !0),
                u || console.warn(a.message, a),
                r.dispatch({
                    type: "RECEIVE_EVENT_ERROR",
                    sourceId: t.sourceId,
                    fetchId: l,
                    fetchRange: e,
                    error: a
                })
        }
    ),
        Object.assign(Object.assign({}, t), {
            isFetching: !0,
            latestFetchId: l
        })
}
function hm(t, e, n, r) {
    let i = t[e];
    return i && n === i.latestFetchId ? Object.assign(Object.assign({}, t), {
        [e]: Object.assign(Object.assign({}, i), {
            isFetching: !1,
            fetchRange: r
        })
    }) : t
}
function Za(t, e) {
    return $e(t, n => Xa(n, e))
}
function pm(t, e) {
    let n = da(e)
        , r = [].concat(t.eventSources || [])
        , i = [];
    t.initialEvents && r.unshift(t.initialEvents),
        t.events && r.unshift(t.events);
    for (let s of r) {
        let o = ua(s, e, n);
        o && i.push(o)
    }
    return i
}
function Xa(t, e) {
    return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange
}
function gm(t, e) {
    switch (e.type) {
        case "UNSELECT_DATES":
            return null;
        case "SELECT_DATES":
            return e.selection;
        default:
            return t
    }
}
function mm(t, e) {
    switch (e.type) {
        case "UNSELECT_EVENT":
            return "";
        case "SELECT_EVENT":
            return e.eventInstanceId;
        default:
            return t
    }
}
function vm(t, e) {
    let n;
    switch (e.type) {
        case "UNSET_EVENT_DRAG":
            return null;
        case "SET_EVENT_DRAG":
            return n = e.state,
            {
                affectedEvents: n.affectedEvents,
                mutatedEvents: n.mutatedEvents,
                isEvent: n.isEvent
            };
        default:
            return t
    }
}
function ym(t, e) {
    let n;
    switch (e.type) {
        case "UNSET_EVENT_RESIZE":
            return null;
        case "SET_EVENT_RESIZE":
            return n = e.state,
            {
                affectedEvents: n.affectedEvents,
                mutatedEvents: n.mutatedEvents,
                isEvent: n.isEvent
            };
        default:
            return t
    }
}
function bm(t, e, n, r, i) {
    let s = t.headerToolbar ? To(t.headerToolbar, t, e, n, r, i) : null
        , o = t.footerToolbar ? To(t.footerToolbar, t, e, n, r, i) : null;
    return {
        header: s,
        footer: o
    }
}
function To(t, e, n, r, i, s) {
    let o = {}
        , l = []
        , a = !1;
    for (let u in t) {
        let c = t[u]
            , d = Em(c, e, n, r, i, s);
        o[u] = d.widgets,
            l.push(...d.viewsWithButtons),
            a = a || d.hasTitle
    }
    return {
        sectionWidgets: o,
        viewsWithButtons: l,
        hasTitle: a
    }
}
function Em(t, e, n, r, i, s) {
    let o = e.direction === "rtl"
        , l = e.customButtons || {}
        , a = n.buttonText || {}
        , u = e.buttonText || {}
        , c = n.buttonHints || {}
        , d = e.buttonHints || {}
        , h = t ? t.split(" ") : []
        , f = []
        , m = !1;
    return {
        widgets: h.map(g => g.split(",").map(b => {
            if (b === "title")
                return m = !0,
                {
                    buttonName: b
                };
            let S, _, A, D, R, I;
            if (S = l[b])
                A = T => {
                    S.click && S.click.call(T.target, T, T.target)
                }
                    ,
                    (D = r.getCustomButtonIconClass(S)) || (D = r.getIconClass(b, o)) || (R = S.text),
                    I = S.hint || S.text;
            else if (_ = i[b]) {
                f.push(b),
                    A = () => {
                        s.changeView(b)
                    }
                    ,
                    (R = _.buttonTextOverride) || (D = r.getIconClass(b, o)) || (R = _.buttonTextDefault);
                let T = _.buttonTextOverride || _.buttonTextDefault;
                I = At(_.buttonTitleOverride || _.buttonTitleDefault || e.viewHint, [T, b], T)
            } else if (s[b])
                if (A = () => {
                    s[b]()
                }
                    ,
                    (R = a[b]) || (D = r.getIconClass(b, o)) || (R = u[b]),
                    b === "prevYear" || b === "nextYear") {
                    let T = b === "prevYear" ? "prev" : "next";
                    I = At(c[T] || d[T], [u.year || "year", "year"], u[b])
                } else
                    I = T => At(c[b] || d[b], [u[T] || T, T], u[b]);
            return {
                buttonName: b,
                buttonClick: A,
                buttonIcon: D,
                buttonText: R,
                buttonHint: I
            }
        }
        )),
        viewsWithButtons: f,
        hasTitle: m
    }
}
class Sm {
    constructor(e, n, r) {
        this.type = e,
            this.getCurrentData = n,
            this.dateEnv = r
    }
    get calendar() {
        return this.getCurrentData().calendarApi
    }
    get title() {
        return this.getCurrentData().viewTitle
    }
    get activeStart() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
    }
    get activeEnd() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
    }
    get currentStart() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
    }
    get currentEnd() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
    }
    getOption(e) {
        return this.getCurrentData().options[e]
    }
}
let _m = {
    ignoreRange: !0,
    parseMeta(t) {
        return Array.isArray(t.events) ? t.events : null
    },
    fetch(t, e) {
        e({
            rawEvents: t.eventSource.meta
        })
    }
};
const Am = ce({
    name: "array-event-source",
    eventSourceDefs: [_m]
});
let wm = {
    parseMeta(t) {
        return typeof t.events == "function" ? t.events : null
    },
    fetch(t, e, n) {
        const { dateEnv: r } = t.context
            , i = t.eventSource.meta;
        jp(i.bind(null, ya(t.range, r)), s => e({
            rawEvents: s
        }), n)
    }
};
const Cm = ce({
    name: "func-event-source",
    eventSourceDefs: [wm]
})
    , Dm = {
        method: String,
        extraParams: y,
        startParam: String,
        endParam: String,
        timeZoneParam: String
    };
let Rm = {
    parseMeta(t) {
        return t.url && (t.format === "json" || !t.format) ? {
            url: t.url,
            format: "json",
            method: (t.method || "GET").toUpperCase(),
            extraParams: t.extraParams,
            startParam: t.startParam,
            endParam: t.endParam,
            timeZoneParam: t.timeZoneParam
        } : null
    },
    fetch(t, e, n) {
        const { meta: r } = t.eventSource
            , i = Tm(r, t.range, t.context);
        Up(r.method, r.url, i).then(([s, o]) => {
            e({
                rawEvents: s,
                response: o
            })
        }
            , n)
    }
};
const xm = ce({
    name: "json-event-source",
    eventSourceRefiners: Dm,
    eventSourceDefs: [Rm]
});
function Tm(t, e, n) {
    let { dateEnv: r, options: i } = n, s, o, l, a, u = {};
    return s = t.startParam,
        s == null && (s = i.startParam),
        o = t.endParam,
        o == null && (o = i.endParam),
        l = t.timeZoneParam,
        l == null && (l = i.timeZoneParam),
        typeof t.extraParams == "function" ? a = t.extraParams() : a = t.extraParams || {},
        Object.assign(u, a),
        u[s] = r.formatIso(e.start),
        u[o] = r.formatIso(e.end),
        r.timeZone !== "local" && (u[l] = r.timeZone),
        u
}
const Im = {
    daysOfWeek: y,
    startTime: M,
    endTime: M,
    duration: M,
    startRecur: y,
    endRecur: y
};
let Mm = {
    parse(t, e) {
        if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
            let n = {
                daysOfWeek: t.daysOfWeek || null,
                startTime: t.startTime || null,
                endTime: t.endTime || null,
                startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
                endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
            }, r;
            return t.duration && (r = t.duration),
                !r && t.startTime && t.endTime && (r = Zf(t.endTime, t.startTime)),
            {
                allDayGuess: !t.startTime && !t.endTime,
                duration: r,
                typeData: n
            }
        }
        return null
    },
    expand(t, e, n) {
        let r = Ce(e, {
            start: t.startRecur,
            end: t.endRecur
        });
        return r ? km(t.daysOfWeek, t.startTime, r, n) : []
    }
};
const Om = ce({
    name: "simple-recurring-event",
    recurringTypes: [Mm],
    eventRefiners: Im
});
function km(t, e, n, r) {
    let i = t ? Kl(t) : null
        , s = N(n.start)
        , o = n.end
        , l = [];
    for (; s < o;) {
        let a;
        (!i || i[s.getUTCDay()]) && (e ? a = r.add(s, e) : a = s,
            l.push(a)),
            s = U(s, 1)
    }
    return l
}
const Nm = ce({
    name: "change-handler",
    optionChangeHandlers: {
        events(t, e) {
            Io([t], e)
        },
        eventSources: Io
    }
});
function Io(t, e) {
    let n = Oi(e.getCurrentData().eventSources);
    if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
        e.dispatch({
            type: "RESET_RAW_EVENTS",
            sourceId: n[0].sourceId,
            rawEvents: t[0]
        });
        return
    }
    let r = [];
    for (let i of t) {
        let s = !1;
        for (let o = 0; o < n.length; o += 1)
            if (n[o]._raw === i) {
                n.splice(o, 1),
                    s = !0;
                break
            }
        s || r.push(i)
    }
    for (let i of n)
        e.dispatch({
            type: "REMOVE_EVENT_SOURCE",
            sourceId: i.sourceId
        });
    for (let i of r)
        e.calendarApi.addEventSource(i)
}
function Pm(t, e) {
    e.emitter.trigger("datesSet", Object.assign(Object.assign({}, ya(t.activeRange, e.dateEnv)), {
        view: e.viewApi
    }))
}
function Hm(t, e) {
    let { emitter: n } = e;
    n.hasHandlers("eventsSet") && n.trigger("eventsSet", je(t, e))
}
const Bm = [Am, Cm, xm, Om, Nm, ce({
    name: "misc",
    isLoadingFuncs: [t => $a(t.eventSources)],
    propSetHandlers: {
        dateProfile: Pm,
        eventStore: Hm
    }
})];
class Lm {
    constructor(e, n) {
        this.runTaskOption = e,
            this.drainedOption = n,
            this.queue = [],
            this.delayedRunner = new wi(this.drain.bind(this))
    }
    request(e, n) {
        this.queue.push(e),
            this.delayedRunner.request(n)
    }
    pause(e) {
        this.delayedRunner.pause(e)
    }
    resume(e, n) {
        this.delayedRunner.resume(e, n)
    }
    drain() {
        let { queue: e } = this;
        for (; e.length;) {
            let n = [], r;
            for (; r = e.shift();)
                this.runTask(r),
                    n.push(r);
            this.drained(n)
        }
    }
    runTask(e) {
        this.runTaskOption && this.runTaskOption(e)
    }
    drained(e) {
        this.drainedOption && this.drainedOption(e)
    }
}
function Fm(t, e, n) {
    let r;
    return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange,
        n.formatRange(r.start, r.end, P(e.titleFormat || jm(t)), {
            isEndExclusive: t.isRangeAllDay,
            defaultSeparator: e.titleRangeSeparator
        })
}
function jm(t) {
    let { currentRangeUnit: e } = t;
    if (e === "year")
        return {
            year: "numeric"
        };
    if (e === "month")
        return {
            year: "numeric",
            month: "long"
        };
    let n = _n(t.currentRange.start, t.currentRange.end);
    return n !== null && n > 1 ? {
        year: "numeric",
        month: "short",
        day: "numeric"
    } : {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
}
class Um {
    constructor(e) {
        this.computeCurrentViewData = w(this._computeCurrentViewData),
            this.organizeRawLocales = w(Gg),
            this.buildLocale = w(Ga),
            this.buildPluginHooks = Qg(),
            this.buildDateEnv = w(zm),
            this.buildTheme = w(Wm),
            this.parseToolbars = w(bm),
            this.buildViewSpecs = w(tm),
            this.buildDateProfileGenerator = dn(Vm),
            this.buildViewApi = w(Gm),
            this.buildViewUiProps = dn(Ym),
            this.buildEventUiBySource = w(qm, ae),
            this.buildEventUiBases = w($m),
            this.parseContextBusinessHours = dn(Qm),
            this.buildTitle = w(Fm),
            this.emitter = new Yn,
            this.actionRunner = new Lm(this._handleAction.bind(this), this.updateData.bind(this)),
            this.currentCalendarOptionsInput = {},
            this.currentCalendarOptionsRefined = {},
            this.currentViewOptionsInput = {},
            this.currentViewOptionsRefined = {},
            this.currentCalendarOptionsRefiners = {},
            this.optionsForRefining = [],
            this.optionsForHandling = [],
            this.getCurrentData = () => this.data,
            this.dispatch = h => {
                this.actionRunner.request(h)
            }
            ,
            this.props = e,
            this.actionRunner.pause();
        let n = {}
            , r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi)
            , i = r.calendarOptions.initialView || r.pluginHooks.initialView
            , s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
        e.calendarApi.currentDataManager = this,
            this.emitter.setThisContext(e.calendarApi),
            this.emitter.setOptions(s.options);
        let o = ep(r.calendarOptions, r.dateEnv)
            , l = s.dateProfileGenerator.build(o);
        de(l.activeRange, o) || (o = l.currentRange.start);
        let a = {
            dateEnv: r.dateEnv,
            options: r.calendarOptions,
            pluginHooks: r.pluginHooks,
            calendarApi: e.calendarApi,
            dispatch: this.dispatch,
            emitter: this.emitter,
            getCurrentData: this.getCurrentData
        };
        for (let h of r.pluginHooks.contextInit)
            h(a);
        let u = lm(r.calendarOptions, l, a)
            , c = {
                dynamicOptionOverrides: n,
                currentViewType: i,
                currentDate: o,
                dateProfile: l,
                businessHours: this.parseContextBusinessHours(a),
                eventSources: u,
                eventUiBases: {},
                eventStore: J(),
                renderableEventStore: J(),
                dateSelection: null,
                eventSelection: "",
                eventDrag: null,
                eventResize: null,
                selectionConfig: this.buildViewUiProps(a).selectionConfig
            }
            , d = Object.assign(Object.assign({}, a), c);
        for (let h of r.pluginHooks.reducers)
            Object.assign(c, h(null, null, d));
        wr(c, a) && this.emitter.trigger("loading", !0),
            this.state = c,
            this.updateData(),
            this.actionRunner.resume()
    }
    resetOptions(e, n) {
        let { props: r } = this;
        n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e),
            this.optionsForRefining.push(...n)),
            (n === void 0 || n.length) && this.actionRunner.request({
                type: "NOTHING"
            })
    }
    _handleAction(e) {
        let { props: n, state: r, emitter: i } = this
            , s = sm(r.dynamicOptionOverrides, e)
            , o = this.computeOptionsData(n.optionOverrides, s, n.calendarApi)
            , l = im(r.currentViewType, e)
            , a = this.computeCurrentViewData(l, o, n.optionOverrides, s);
        n.calendarApi.currentDataManager = this,
            i.setThisContext(n.calendarApi),
            i.setOptions(a.options);
        let u = {
            dateEnv: o.dateEnv,
            options: o.calendarOptions,
            pluginHooks: o.pluginHooks,
            calendarApi: n.calendarApi,
            dispatch: this.dispatch,
            emitter: i,
            getCurrentData: this.getCurrentData
        }
            , { currentDate: c, dateProfile: d } = r;
        this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (d = a.dateProfileGenerator.build(c)),
            c = Jh(c, e),
            d = om(d, e, c, a.dateProfileGenerator),
            (e.type === "PREV" || e.type === "NEXT" || !de(d.currentRange, c)) && (c = d.currentRange.start);
        let h = am(r.eventSources, e, d, u)
            , f = hp(r.eventStore, e, h, d, u)
            , v = $a(h) && !a.options.progressiveEventRendering && r.renderableEventStore || f
            , { eventUiSingleBase: g, selectionConfig: b } = this.buildViewUiProps(u)
            , S = this.buildEventUiBySource(h)
            , _ = this.buildEventUiBases(v.defs, g, S)
            , A = {
                dynamicOptionOverrides: s,
                currentViewType: l,
                currentDate: c,
                dateProfile: d,
                eventSources: h,
                eventStore: f,
                renderableEventStore: v,
                selectionConfig: b,
                eventUiBases: _,
                businessHours: this.parseContextBusinessHours(u),
                dateSelection: gm(r.dateSelection, e),
                eventSelection: mm(r.eventSelection, e),
                eventDrag: vm(r.eventDrag, e),
                eventResize: ym(r.eventResize, e)
            }
            , D = Object.assign(Object.assign({}, u), A);
        for (let T of o.pluginHooks.reducers)
            Object.assign(A, T(r, e, D));
        let R = wr(r, u)
            , I = wr(A, u);
        !R && I ? i.trigger("loading", !0) : R && !I && i.trigger("loading", !1),
            this.state = A,
            n.onAction && n.onAction(e)
    }
    updateData() {
        let { props: e, state: n } = this
            , r = this.data
            , i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi)
            , s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides)
            , o = this.data = Object.assign(Object.assign(Object.assign({
                viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv),
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, i), s), n)
            , l = i.pluginHooks.optionChangeHandlers
            , a = r && r.calendarOptions
            , u = i.calendarOptions;
        if (a && a !== u) {
            a.timeZone !== u.timeZone && (n.eventSources = o.eventSources = cm(o.eventSources, n.dateProfile, o),
                n.eventStore = o.eventStore = Eo(o.eventStore, r.dateEnv, o.dateEnv),
                n.renderableEventStore = o.renderableEventStore = Eo(o.renderableEventStore, r.dateEnv, o.dateEnv));
            for (let c in l)
                (this.optionsForHandling.indexOf(c) !== -1 || a[c] !== u[c]) && l[c](u[c], o)
        }
        this.optionsForHandling = [],
            e.onData && e.onData(o)
    }
    computeOptionsData(e, n, r) {
        if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
            return this.stableCalendarOptionsData;
        let { refinedOptions: i, pluginHooks: s, localeDefaults: o, availableLocaleData: l, extra: a } = this.processRawCalendarOptions(e, n);
        Mo(a);
        let u = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, l, i.defaultRangeSeparator)
            , c = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, o)
            , d = this.buildTheme(i, s)
            , h = this.parseToolbars(i, this.stableOptionOverrides, d, c, r);
        return this.stableCalendarOptionsData = {
            calendarOptions: i,
            pluginHooks: s,
            dateEnv: u,
            viewSpecs: c,
            theme: d,
            toolbarConfig: h,
            localeDefaults: o,
            availableRawLocales: l.map
        }
    }
    processRawCalendarOptions(e, n) {
        let { locales: r, locale: i } = gr([wt, e, n])
            , s = this.organizeRawLocales(r)
            , o = s.map
            , l = this.buildLocale(i || s.defaultCode, o).options
            , a = this.buildPluginHooks(e.plugins || [], Bm)
            , u = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, po), go), mo), a.listenerRefiners), a.optionRefiners)
            , c = {}
            , d = gr([wt, l, e, n])
            , h = {}
            , f = this.currentCalendarOptionsInput
            , m = this.currentCalendarOptionsRefined
            , v = !1;
        for (let g in d)
            this.optionsForRefining.indexOf(g) === -1 && (d[g] === f[g] || ke[g] && g in f && ke[g](f[g], d[g])) ? h[g] = m[g] : u[g] ? (h[g] = u[g](d[g]),
                v = !0) : c[g] = f[g];
        return v && (this.currentCalendarOptionsInput = d,
            this.currentCalendarOptionsRefined = h,
            this.stableOptionOverrides = e,
            this.stableDynamicOptionOverrides = n),
            this.optionsForHandling.push(...this.optionsForRefining),
            this.optionsForRefining = [],
        {
            rawOptions: this.currentCalendarOptionsInput,
            refinedOptions: this.currentCalendarOptionsRefined,
            pluginHooks: a,
            availableLocaleData: s,
            localeDefaults: l,
            extra: c
        }
    }
    _computeCurrentViewData(e, n, r, i) {
        let s = n.viewSpecs[e];
        if (!s)
            throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
        let { refinedOptions: o, extra: l } = this.processRawViewOptions(s, n.pluginHooks, n.localeDefaults, r, i);
        Mo(l);
        let a = this.buildDateProfileGenerator({
            dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
            duration: s.duration,
            durationUnit: s.durationUnit,
            usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
            dateEnv: n.dateEnv,
            calendarApi: this.props.calendarApi,
            slotMinTime: o.slotMinTime,
            slotMaxTime: o.slotMaxTime,
            showNonCurrentDates: o.showNonCurrentDates,
            dayCount: o.dayCount,
            dateAlignment: o.dateAlignment,
            dateIncrement: o.dateIncrement,
            hiddenDays: o.hiddenDays,
            weekends: o.weekends,
            nowInput: o.now,
            validRangeInput: o.validRange,
            visibleRangeInput: o.visibleRange,
            fixedWeekCount: o.fixedWeekCount
        })
            , u = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
        return {
            viewSpec: s,
            options: o,
            dateProfileGenerator: a,
            viewApi: u
        }
    }
    processRawViewOptions(e, n, r, i, s) {
        let o = gr([wt, e.optionDefaults, r, i, e.optionOverrides, s])
            , l = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, po), go), mo), Th), n.listenerRefiners), n.optionRefiners)
            , a = {}
            , u = this.currentViewOptionsInput
            , c = this.currentViewOptionsRefined
            , d = !1
            , h = {};
        for (let f in o)
            o[f] === u[f] || ke[f] && ke[f](o[f], u[f]) ? a[f] = c[f] : (o[f] === this.currentCalendarOptionsInput[f] || ke[f] && ke[f](o[f], this.currentCalendarOptionsInput[f]) ? f in this.currentCalendarOptionsRefined && (a[f] = this.currentCalendarOptionsRefined[f]) : l[f] ? a[f] = l[f](o[f]) : h[f] = o[f],
                d = !0);
        return d && (this.currentViewOptionsInput = o,
            this.currentViewOptionsRefined = a),
        {
            rawOptions: this.currentViewOptionsInput,
            refinedOptions: this.currentViewOptionsRefined,
            extra: h
        }
    }
}
function zm(t, e, n, r, i, s, o, l) {
    let a = Ga(e || o.defaultCode, o.map);
    return new Fh({
        calendarSystem: "gregory",
        timeZone: t,
        namedTimeZoneImpl: s.namedTimeZonedImpl,
        locale: a,
        weekNumberCalculation: n,
        firstDay: r,
        weekText: i,
        cmdFormatter: s.cmdFormatter,
        defaultSeparator: l
    })
}
function Wm(t, e) {
    let n = e.themeClasses[t.themeSystem] || Ie;
    return new n(t)
}
function Vm(t) {
    let e = t.dateProfileGeneratorClass || sa;
    return new e(t)
}
function Gm(t, e, n) {
    return new Sm(t, e, n)
}
function qm(t) {
    return he(t, e => e.ui)
}
function $m(t, e, n) {
    let r = {
        "": e
    };
    for (let i in t) {
        let s = t[i];
        s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId])
    }
    return r
}
function Ym(t) {
    let { options: e } = t;
    return {
        eventUiSingleBase: xn({
            display: e.eventDisplay,
            editable: e.editable,
            startEditable: e.eventStartEditable,
            durationEditable: e.eventDurationEditable,
            constraint: e.eventConstraint,
            overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
            allow: e.eventAllow,
            backgroundColor: e.eventBackgroundColor,
            borderColor: e.eventBorderColor,
            textColor: e.eventTextColor,
            color: e.eventColor
        }, t),
        selectionConfig: xn({
            constraint: e.selectConstraint,
            overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
            allow: e.selectAllow
        }, t)
    }
}
function wr(t, e) {
    for (let n of e.pluginHooks.isLoadingFuncs)
        if (n(t))
            return !0;
    return !1
}
function Qm(t) {
    return _p(t.options.businessHours, t)
}
function Mo(t, e) {
    for (let n in t)
        console.warn(`Unknown option '${n}'`)
}
class Zm extends O {
    render() {
        let e = this.props.widgetGroups.map(n => this.renderWidgetGroup(n));
        return p("div", {
            className: "fc-toolbar-chunk"
        }, ...e)
    }
    renderWidgetGroup(e) {
        let { props: n } = this
            , { theme: r } = this.context
            , i = []
            , s = !0;
        for (let o of e) {
            let { buttonName: l, buttonClick: a, buttonText: u, buttonIcon: c, buttonHint: d } = o;
            if (l === "title")
                s = !1,
                    i.push(p("h2", {
                        className: "fc-toolbar-title",
                        id: n.titleId
                    }, n.title));
            else {
                let h = l === n.activeButton
                    , f = !n.isTodayEnabled && l === "today" || !n.isPrevEnabled && l === "prev" || !n.isNextEnabled && l === "next"
                    , m = [`fc-${l}-button`, r.getClass("button")];
                h && m.push(r.getClass("buttonActive")),
                    i.push(p("button", {
                        type: "button",
                        title: typeof d == "function" ? d(n.navUnit) : d,
                        disabled: f,
                        "aria-pressed": h,
                        className: m.join(" "),
                        onClick: a
                    }, u || (c ? p("span", {
                        className: c,
                        role: "img"
                    }) : "")))
            }
        }
        if (i.length > 1) {
            let o = s && r.getClass("buttonGroup") || "";
            return p("div", {
                className: o
            }, ...i)
        }
        return i[0]
    }
}
class Oo extends O {
    render() {
        let { model: e, extraClassName: n } = this.props, r = !1, i, s, o = e.sectionWidgets, l = o.center;
        return o.left ? (r = !0,
            i = o.left) : i = o.start,
            o.right ? (r = !0,
                s = o.right) : s = o.end,
            p("div", {
                className: [n || "", "fc-toolbar", r ? "fc-toolbar-ltr" : ""].join(" ")
            }, this.renderSection("start", i || []), this.renderSection("center", l || []), this.renderSection("end", s || []))
    }
    renderSection(e, n) {
        let { props: r } = this;
        return p(Zm, {
            key: e,
            widgetGroups: n,
            title: r.title,
            navUnit: r.navUnit,
            activeButton: r.activeButton,
            isTodayEnabled: r.isTodayEnabled,
            isPrevEnabled: r.isPrevEnabled,
            isNextEnabled: r.isNextEnabled,
            titleId: r.titleId
        })
    }
}
class Xm extends O {
    constructor() {
        super(...arguments),
            this.state = {
                availableWidth: null
            },
            this.handleEl = e => {
                this.el = e,
                    pe(this.props.elRef, e),
                    this.updateAvailableWidth()
            }
            ,
            this.handleResize = () => {
                this.updateAvailableWidth()
            }
    }
    render() {
        let { props: e, state: n } = this
            , { aspectRatio: r } = e
            , i = ["fc-view-harness", r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"]
            , s = ""
            , o = "";
        return r ? n.availableWidth !== null ? s = n.availableWidth / r : o = `${1 / r * 100}%` : s = e.height || "",
            p("div", {
                "aria-labelledby": e.labeledById,
                ref: this.handleEl,
                className: i.join(" "),
                style: {
                    height: s,
                    paddingBottom: o
                }
            }, e.children)
    }
    componentDidMount() {
        this.context.addResizeHandler(this.handleResize)
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize)
    }
    updateAvailableWidth() {
        this.el && this.props.aspectRatio && this.setState({
            availableWidth: this.el.offsetWidth
        })
    }
}
class Km extends dt {
    constructor(e) {
        super(e),
            this.handleSegClick = (n, r) => {
                let { component: i } = this
                    , { context: s } = i
                    , o = it(r);
                if (o && i.isValidSegDownEl(n.target)) {
                    let l = W(n.target, ".fc-event-forced-url")
                        , a = l ? l.querySelector("a[href]").href : "";
                    s.emitter.trigger("eventClick", {
                        el: r,
                        event: new B(i.context, o.eventRange.def, o.eventRange.instance),
                        jsEvent: n,
                        view: s.viewApi
                    }),
                        a && !n.defaultPrevented && (window.location.href = a)
                }
            }
            ,
            this.destroy = $l(e.el, "click", ".fc-event", this.handleSegClick)
    }
}
class Jm extends dt {
    constructor(e) {
        super(e),
            this.handleEventElRemove = n => {
                n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl)
            }
            ,
            this.handleSegEnter = (n, r) => {
                it(r) && (this.currentSegEl = r,
                    this.triggerEvent("eventMouseEnter", n, r))
            }
            ,
            this.handleSegLeave = (n, r) => {
                this.currentSegEl && (this.currentSegEl = null,
                    this.triggerEvent("eventMouseLeave", n, r))
            }
            ,
            this.removeHoverListeners = Pf(e.el, ".fc-event", this.handleSegEnter, this.handleSegLeave)
    }
    destroy() {
        this.removeHoverListeners()
    }
    triggerEvent(e, n, r) {
        let { component: i } = this
            , { context: s } = i
            , o = it(r);
        (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
            el: r,
            event: new B(s, o.eventRange.def, o.eventRange.instance),
            jsEvent: n,
            view: s.viewApi
        })
    }
}
class ev extends Ze {
    constructor() {
        super(...arguments),
            this.buildViewContext = w(zh),
            this.buildViewPropTransformers = w(nv),
            this.buildToolbarProps = w(tv),
            this.headerRef = G(),
            this.footerRef = G(),
            this.interactionsStore = {},
            this.state = {
                viewLabelId: _e()
            },
            this.registerInteractiveComponent = (e, n) => {
                let r = Vp(e, n)
                    , o = [Km, Jm].concat(this.props.pluginHooks.componentInteractions).map(l => new l(r));
                this.interactionsStore[e.uid] = o,
                    Yr[e.uid] = r
            }
            ,
            this.unregisterInteractiveComponent = e => {
                let n = this.interactionsStore[e.uid];
                if (n) {
                    for (let r of n)
                        r.destroy();
                    delete this.interactionsStore[e.uid]
                }
                delete Yr[e.uid]
            }
            ,
            this.resizeRunner = new wi(() => {
                this.props.emitter.trigger("_resize", !0),
                    this.props.emitter.trigger("windowResize", {
                        view: this.props.viewApi
                    })
            }
            ),
            this.handleWindowResize = e => {
                let { options: n } = this.props;
                n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay)
            }
    }
    render() {
        let { props: e } = this, { toolbarConfig: n, options: r } = e, i = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, Ft(e.options.now, e.dateEnv), e.viewTitle), s = !1, o = "", l;
        e.isHeightAuto || e.forPrint ? o = "" : r.height != null ? s = !0 : r.contentHeight != null ? o = r.contentHeight : l = Math.max(r.aspectRatio, .5);
        let a = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent)
            , u = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
        return p(me.Provider, {
            value: a
        }, n.header && p(Oo, Object.assign({
            ref: this.headerRef,
            extraClassName: "fc-header-toolbar",
            model: n.header,
            titleId: u
        }, i)), p(Xm, {
            liquid: s,
            height: o,
            aspectRatio: l,
            labeledById: u
        }, this.renderView(e), this.buildAppendContent()), n.footer && p(Oo, Object.assign({
            ref: this.footerRef,
            extraClassName: "fc-footer-toolbar",
            model: n.footer,
            titleId: ""
        }, i)))
    }
    componentDidMount() {
        let { props: e } = this;
        this.calendarInteractions = e.pluginHooks.calendarInteractions.map(r => new r(e)),
            window.addEventListener("resize", this.handleWindowResize);
        let { propSetHandlers: n } = e.pluginHooks;
        for (let r in n)
            n[r](e[r], e)
    }
    componentDidUpdate(e) {
        let { props: n } = this
            , { propSetHandlers: r } = n.pluginHooks;
        for (let i in r)
            n[i] !== e[i] && r[i](n[i], n)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize),
            this.resizeRunner.clear();
        for (let e of this.calendarInteractions)
            e.destroy();
        this.props.emitter.trigger("_unmount")
    }
    buildAppendContent() {
        let { props: e } = this
            , n = e.pluginHooks.viewContainerAppends.map(r => r(e));
        return p(k, {}, ...n)
    }
    renderView(e) {
        let { pluginHooks: n } = e
            , { viewSpec: r } = e
            , i = {
                dateProfile: e.dateProfile,
                businessHours: e.businessHours,
                eventStore: e.renderableEventStore,
                eventUiBases: e.eventUiBases,
                dateSelection: e.dateSelection,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                isHeightAuto: e.isHeightAuto,
                forPrint: e.forPrint
            }
            , s = this.buildViewPropTransformers(n.viewPropsTransformers);
        for (let l of s)
            Object.assign(i, l.transform(i, e));
        let o = r.component;
        return p(o, Object.assign({}, i))
    }
}
function tv(t, e, n, r, i, s) {
    let o = n.build(i, void 0, !1)
        , l = n.buildPrev(e, r, !1)
        , a = n.buildNext(e, r, !1);
    return {
        title: s,
        activeButton: t.type,
        navUnit: t.singleUnit,
        isTodayEnabled: o.isValid && !de(e.currentRange, i),
        isPrevEnabled: l.isValid,
        isNextEnabled: a.isValid
    }
}
function nv(t) {
    return t.map(e => new e)
}
class rv extends Gp {
    constructor(e, n = {}) {
        super(),
            this.isRendering = !1,
            this.isRendered = !1,
            this.currentClassNames = [],
            this.customContentRenderId = 0,
            this.handleAction = r => {
                switch (r.type) {
                    case "SET_EVENT_DRAG":
                    case "SET_EVENT_RESIZE":
                        this.renderRunner.tryDrain()
                }
            }
            ,
            this.handleData = r => {
                this.currentData = r,
                    this.renderRunner.request(r.calendarOptions.rerenderDelay)
            }
            ,
            this.handleRenderRequest = () => {
                if (this.isRendering) {
                    this.isRendered = !0;
                    let { currentData: r } = this;
                    Dn(() => {
                        It(p(Wp, {
                            options: r.calendarOptions,
                            theme: r.theme,
                            emitter: r.emitter
                        }, (i, s, o, l) => (this.setClassNames(i),
                            this.setHeight(s),
                            p(na.Provider, {
                                value: this.customContentRenderId
                            }, p(ev, Object.assign({
                                isHeightAuto: o,
                                forPrint: l
                            }, r))))), this.el)
                    }
                    )
                } else
                    this.isRendered && (this.isRendered = !1,
                        It(null, this.el),
                        this.setClassNames([]),
                        this.setHeight(""))
            }
            ,
            Df(e),
            this.el = e,
            this.renderRunner = new wi(this.handleRenderRequest),
            new Um({
                optionOverrides: n,
                calendarApi: this,
                onAction: this.handleAction,
                onData: this.handleData
            })
    }
    render() {
        let e = this.isRendering;
        e ? this.customContentRenderId += 1 : this.isRendering = !0,
            this.renderRunner.request(),
            e && this.updateSize()
    }
    destroy() {
        this.isRendering && (this.isRendering = !1,
            this.renderRunner.request())
    }
    updateSize() {
        Dn(() => {
            super.updateSize()
        }
        )
    }
    batchRendering(e) {
        this.renderRunner.pause("batchRendering"),
            e(),
            this.renderRunner.resume("batchRendering")
    }
    pauseRendering() {
        this.renderRunner.pause("pauseRendering")
    }
    resumeRendering() {
        this.renderRunner.resume("pauseRendering", !0)
    }
    resetOptions(e, n) {
        this.currentDataManager.resetOptions(e, n)
    }
    setClassNames(e) {
        if (!Ae(e, this.currentClassNames)) {
            let { classList: n } = this.el;
            for (let r of this.currentClassNames)
                n.remove(r);
            for (let r of e)
                n.add(r);
            this.currentClassNames = e
        }
    }
    setHeight(e) {
        Gl(this.el, "height", e)
    }
}
Qi.touchMouseIgnoreWait = 500;
let Jr = 0
    , Mn = 0
    , ei = !1;
class Ka {
    constructor(e) {
        this.subjectEl = null,
            this.selector = "",
            this.handleSelector = "",
            this.shouldIgnoreMove = !1,
            this.shouldWatchScroll = !0,
            this.isDragging = !1,
            this.isTouchDragging = !1,
            this.wasTouchScroll = !1,
            this.handleMouseDown = n => {
                if (!this.shouldIgnoreMouse() && iv(n) && this.tryStart(n)) {
                    let r = this.createEventFromMouse(n, !0);
                    this.emitter.trigger("pointerdown", r),
                        this.initScrollWatch(r),
                        this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove),
                        document.addEventListener("mouseup", this.handleMouseUp)
                }
            }
            ,
            this.handleMouseMove = n => {
                let r = this.createEventFromMouse(n);
                this.recordCoords(r),
                    this.emitter.trigger("pointermove", r)
            }
            ,
            this.handleMouseUp = n => {
                document.removeEventListener("mousemove", this.handleMouseMove),
                    document.removeEventListener("mouseup", this.handleMouseUp),
                    this.emitter.trigger("pointerup", this.createEventFromMouse(n)),
                    this.cleanup()
            }
            ,
            this.handleTouchStart = n => {
                if (this.tryStart(n)) {
                    this.isTouchDragging = !0;
                    let r = this.createEventFromTouch(n, !0);
                    this.emitter.trigger("pointerdown", r),
                        this.initScrollWatch(r);
                    let i = n.target;
                    this.shouldIgnoreMove || i.addEventListener("touchmove", this.handleTouchMove),
                        i.addEventListener("touchend", this.handleTouchEnd),
                        i.addEventListener("touchcancel", this.handleTouchEnd),
                        window.addEventListener("scroll", this.handleTouchScroll, !0)
                }
            }
            ,
            this.handleTouchMove = n => {
                let r = this.createEventFromTouch(n);
                this.recordCoords(r),
                    this.emitter.trigger("pointermove", r)
            }
            ,
            this.handleTouchEnd = n => {
                if (this.isDragging) {
                    let r = n.target;
                    r.removeEventListener("touchmove", this.handleTouchMove),
                        r.removeEventListener("touchend", this.handleTouchEnd),
                        r.removeEventListener("touchcancel", this.handleTouchEnd),
                        window.removeEventListener("scroll", this.handleTouchScroll, !0),
                        this.emitter.trigger("pointerup", this.createEventFromTouch(n)),
                        this.cleanup(),
                        this.isTouchDragging = !1,
                        sv()
                }
            }
            ,
            this.handleTouchScroll = () => {
                this.wasTouchScroll = !0
            }
            ,
            this.handleScroll = n => {
                if (!this.shouldIgnoreMove) {
                    let r = window.scrollX - this.prevScrollX + this.prevPageX
                        , i = window.scrollY - this.prevScrollY + this.prevPageY;
                    this.emitter.trigger("pointermove", {
                        origEvent: n,
                        isTouch: this.isTouchDragging,
                        subjectEl: this.subjectEl,
                        pageX: r,
                        pageY: i,
                        deltaX: r - this.origPageX,
                        deltaY: i - this.origPageY
                    })
                }
            }
            ,
            this.containerEl = e,
            this.emitter = new Yn,
            e.addEventListener("mousedown", this.handleMouseDown),
            e.addEventListener("touchstart", this.handleTouchStart, {
                passive: !0
            }),
            ov()
    }
    destroy() {
        this.containerEl.removeEventListener("mousedown", this.handleMouseDown),
            this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                passive: !0
            }),
            lv()
    }
    tryStart(e) {
        let n = this.querySubjectEl(e)
            , r = e.target;
        return n && (!this.handleSelector || W(r, this.handleSelector)) ? (this.subjectEl = n,
            this.isDragging = !0,
            this.wasTouchScroll = !1,
            !0) : !1
    }
    cleanup() {
        ei = !1,
            this.isDragging = !1,
            this.subjectEl = null,
            this.destroyScrollWatch()
    }
    querySubjectEl(e) {
        return this.selector ? W(e.target, this.selector) : this.containerEl
    }
    shouldIgnoreMouse() {
        return Jr || this.isTouchDragging
    }
    cancelTouchScroll() {
        this.isDragging && (ei = !0)
    }
    initScrollWatch(e) {
        this.shouldWatchScroll && (this.recordCoords(e),
            window.addEventListener("scroll", this.handleScroll, !0))
    }
    recordCoords(e) {
        this.shouldWatchScroll && (this.prevPageX = e.pageX,
            this.prevPageY = e.pageY,
            this.prevScrollX = window.scrollX,
            this.prevScrollY = window.scrollY)
    }
    destroyScrollWatch() {
        this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
    }
    createEventFromMouse(e, n) {
        let r = 0
            , i = 0;
        return n ? (this.origPageX = e.pageX,
            this.origPageY = e.pageY) : (r = e.pageX - this.origPageX,
                i = e.pageY - this.origPageY),
        {
            origEvent: e,
            isTouch: !1,
            subjectEl: this.subjectEl,
            pageX: e.pageX,
            pageY: e.pageY,
            deltaX: r,
            deltaY: i
        }
    }
    createEventFromTouch(e, n) {
        let r = e.touches, i, s, o = 0, l = 0;
        return r && r.length ? (i = r[0].pageX,
            s = r[0].pageY) : (i = e.pageX,
                s = e.pageY),
            n ? (this.origPageX = i,
                this.origPageY = s) : (o = i - this.origPageX,
                    l = s - this.origPageY),
        {
            origEvent: e,
            isTouch: !0,
            subjectEl: this.subjectEl,
            pageX: i,
            pageY: s,
            deltaX: o,
            deltaY: l
        }
    }
}
function iv(t) {
    return t.button === 0 && !t.ctrlKey
}
function sv() {
    Jr += 1,
        setTimeout(() => {
            Jr -= 1
        }
            , Qi.touchMouseIgnoreWait)
}
function ov() {
    Mn += 1,
        Mn === 1 && window.addEventListener("touchmove", Ja, {
            passive: !1
        })
}
function lv() {
    Mn -= 1,
        Mn || window.removeEventListener("touchmove", Ja, {
            passive: !1
        })
}
function Ja(t) {
    ei && t.preventDefault()
}
class av {
    constructor() {
        this.isVisible = !1,
            this.sourceEl = null,
            this.mirrorEl = null,
            this.sourceElRect = null,
            this.parentNode = document.body,
            this.zIndex = 9999,
            this.revertDuration = 0
    }
    start(e, n, r) {
        this.sourceEl = e,
            this.sourceElRect = this.sourceEl.getBoundingClientRect(),
            this.origScreenX = n - window.scrollX,
            this.origScreenY = r - window.scrollY,
            this.deltaX = 0,
            this.deltaY = 0,
            this.updateElPosition()
    }
    handleMove(e, n) {
        this.deltaX = e - window.scrollX - this.origScreenX,
            this.deltaY = n - window.scrollY - this.origScreenY,
            this.updateElPosition()
    }
    setIsVisible(e) {
        e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""),
            this.isVisible = e,
            this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"),
                this.isVisible = e)
    }
    stop(e, n) {
        let r = () => {
            this.cleanup(),
                n()
        }
            ;
        e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
    }
    doRevertAnimation(e, n) {
        let r = this.mirrorEl
            , i = this.sourceEl.getBoundingClientRect();
        r.style.transition = "top " + n + "ms,left " + n + "ms",
            _t(r, {
                left: i.left,
                top: i.top
            }),
            Hf(r, () => {
                r.style.transition = "",
                    e()
            }
            )
    }
    cleanup() {
        this.mirrorEl && (Ci(this.mirrorEl),
            this.mirrorEl = null),
            this.sourceEl = null
    }
    updateElPosition() {
        this.sourceEl && this.isVisible && _t(this.getMirrorEl(), {
            left: this.sourceElRect.left + this.deltaX,
            top: this.sourceElRect.top + this.deltaY
        })
    }
    getMirrorEl() {
        let e = this.sourceElRect
            , n = this.mirrorEl;
        return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0),
            n.style.userSelect = "none",
            n.style.webkitUserSelect = "none",
            n.style.pointerEvents = "none",
            n.classList.add("fc-event-dragging"),
            _t(n, {
                position: "fixed",
                zIndex: this.zIndex,
                visibility: "",
                boxSizing: "border-box",
                width: e.right - e.left,
                height: e.bottom - e.top,
                right: "auto",
                bottom: "auto",
                margin: 0
            }),
            this.parentNode.appendChild(n)),
            n
    }
}
class ec extends $i {
    constructor(e, n) {
        super(),
            this.handleScroll = () => {
                this.scrollTop = this.scrollController.getScrollTop(),
                    this.scrollLeft = this.scrollController.getScrollLeft(),
                    this.handleScrollChange()
            }
            ,
            this.scrollController = e,
            this.doesListening = n,
            this.scrollTop = this.origScrollTop = e.getScrollTop(),
            this.scrollLeft = this.origScrollLeft = e.getScrollLeft(),
            this.scrollWidth = e.getScrollWidth(),
            this.scrollHeight = e.getScrollHeight(),
            this.clientWidth = e.getClientWidth(),
            this.clientHeight = e.getClientHeight(),
            this.clientRect = this.computeClientRect(),
            this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll)
    }
    destroy() {
        this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
    }
    getScrollTop() {
        return this.scrollTop
    }
    getScrollLeft() {
        return this.scrollLeft
    }
    setScrollTop(e) {
        this.scrollController.setScrollTop(e),
            this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0),
                this.handleScrollChange())
    }
    setScrollLeft(e) {
        this.scrollController.setScrollLeft(e),
            this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0),
                this.handleScrollChange())
    }
    getClientWidth() {
        return this.clientWidth
    }
    getClientHeight() {
        return this.clientHeight
    }
    getScrollWidth() {
        return this.scrollWidth
    }
    getScrollHeight() {
        return this.scrollHeight
    }
    handleScrollChange() { }
}
class tc extends ec {
    constructor(e, n) {
        super(new lg(e), n)
    }
    getEventTarget() {
        return this.scrollController.el
    }
    computeClientRect() {
        return sg(this.scrollController.el)
    }
}
class cv extends ec {
    constructor(e) {
        super(new ag, e)
    }
    getEventTarget() {
        return window
    }
    computeClientRect() {
        return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight
        }
    }
    handleScrollChange() {
        this.clientRect = this.computeClientRect()
    }
}
const ko = typeof performance == "function" ? performance.now : Date.now;
class uv {
    constructor() {
        this.isEnabled = !0,
            this.scrollQuery = [window, ".fc-scroller"],
            this.edgeThreshold = 50,
            this.maxVelocity = 300,
            this.pointerScreenX = null,
            this.pointerScreenY = null,
            this.isAnimating = !1,
            this.scrollCaches = null,
            this.everMovedUp = !1,
            this.everMovedDown = !1,
            this.everMovedLeft = !1,
            this.everMovedRight = !1,
            this.animate = () => {
                if (this.isAnimating) {
                    let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
                    if (e) {
                        let n = ko();
                        this.handleSide(e, (n - this.msSinceRequest) / 1e3),
                            this.requestAnimation(n)
                    } else
                        this.isAnimating = !1
                }
            }
    }
    start(e, n, r) {
        this.isEnabled && (this.scrollCaches = this.buildCaches(r),
            this.pointerScreenX = null,
            this.pointerScreenY = null,
            this.everMovedUp = !1,
            this.everMovedDown = !1,
            this.everMovedLeft = !1,
            this.everMovedRight = !1,
            this.handleMove(e, n))
    }
    handleMove(e, n) {
        if (this.isEnabled) {
            let r = e - window.scrollX
                , i = n - window.scrollY
                , s = this.pointerScreenY === null ? 0 : i - this.pointerScreenY
                , o = this.pointerScreenX === null ? 0 : r - this.pointerScreenX;
            s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0),
                o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0),
                this.pointerScreenX = r,
                this.pointerScreenY = i,
                this.isAnimating || (this.isAnimating = !0,
                    this.requestAnimation(ko()))
        }
    }
    stop() {
        if (this.isEnabled) {
            this.isAnimating = !1;
            for (let e of this.scrollCaches)
                e.destroy();
            this.scrollCaches = null
        }
    }
    requestAnimation(e) {
        this.msSinceRequest = e,
            requestAnimationFrame(this.animate)
    }
    handleSide(e, n) {
        let { scrollCache: r } = e
            , { edgeThreshold: i } = this
            , s = i - e.distance
            , o = s * s / (i * i) * this.maxVelocity * n
            , l = 1;
        switch (e.name) {
            case "left":
                l = -1;
            case "right":
                r.setScrollLeft(r.getScrollLeft() + o * l);
                break;
            case "top":
                l = -1;
            case "bottom":
                r.setScrollTop(r.getScrollTop() + o * l);
                break
        }
    }
    computeBestEdge(e, n) {
        let { edgeThreshold: r } = this
            , i = null
            , s = this.scrollCaches || [];
        for (let o of s) {
            let l = o.clientRect
                , a = e - l.left
                , u = l.right - e
                , c = n - l.top
                , d = l.bottom - n;
            a >= 0 && u >= 0 && c >= 0 && d >= 0 && (c <= r && this.everMovedUp && o.canScrollUp() && (!i || i.distance > c) && (i = {
                scrollCache: o,
                name: "top",
                distance: c
            }),
                d <= r && this.everMovedDown && o.canScrollDown() && (!i || i.distance > d) && (i = {
                    scrollCache: o,
                    name: "bottom",
                    distance: d
                }),
                a <= r && this.everMovedLeft && o.canScrollLeft() && (!i || i.distance > a) && (i = {
                    scrollCache: o,
                    name: "left",
                    distance: a
                }),
                u <= r && this.everMovedRight && o.canScrollRight() && (!i || i.distance > u) && (i = {
                    scrollCache: o,
                    name: "right",
                    distance: u
                }))
        }
        return i
    }
    buildCaches(e) {
        return this.queryScrollEls(e).map(n => n === window ? new cv(!1) : new tc(n, !1))
    }
    queryScrollEls(e) {
        let n = [];
        for (let r of this.scrollQuery)
            typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
        return n
    }
}
class jt extends dg {
    constructor(e, n) {
        super(e),
            this.containerEl = e,
            this.delay = null,
            this.minDistance = 0,
            this.touchScrollAllowed = !0,
            this.mirrorNeedsRevert = !1,
            this.isInteracting = !1,
            this.isDragging = !1,
            this.isDelayEnded = !1,
            this.isDistanceSurpassed = !1,
            this.delayTimeoutId = null,
            this.onPointerDown = i => {
                this.isDragging || (this.isInteracting = !0,
                    this.isDelayEnded = !1,
                    this.isDistanceSurpassed = !1,
                    Bf(document.body),
                    Ff(document.body),
                    i.isTouch || i.origEvent.preventDefault(),
                    this.emitter.trigger("pointerdown", i),
                    this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1),
                        this.mirror.start(i.subjectEl, i.pageX, i.pageY),
                        this.startDelay(i),
                        this.minDistance || this.handleDistanceSurpassed(i)))
            }
            ,
            this.onPointerMove = i => {
                if (this.isInteracting) {
                    if (this.emitter.trigger("pointermove", i),
                        !this.isDistanceSurpassed) {
                        let s = this.minDistance, o, { deltaX: l, deltaY: a } = i;
                        o = l * l + a * a,
                            o >= s * s && this.handleDistanceSurpassed(i)
                    }
                    this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY),
                        this.autoScroller.handleMove(i.pageX, i.pageY)),
                        this.emitter.trigger("dragmove", i))
                }
            }
            ,
            this.onPointerUp = i => {
                this.isInteracting && (this.isInteracting = !1,
                    Lf(document.body),
                    jf(document.body),
                    this.emitter.trigger("pointerup", i),
                    this.isDragging && (this.autoScroller.stop(),
                        this.tryStopDrag(i)),
                    this.delayTimeoutId && (clearTimeout(this.delayTimeoutId),
                        this.delayTimeoutId = null))
            }
            ;
        let r = this.pointer = new Ka(e);
        r.emitter.on("pointerdown", this.onPointerDown),
            r.emitter.on("pointermove", this.onPointerMove),
            r.emitter.on("pointerup", this.onPointerUp),
            n && (r.selector = n),
            this.mirror = new av,
            this.autoScroller = new uv
    }
    destroy() {
        this.pointer.destroy(),
            this.onPointerUp({})
    }
    startDelay(e) {
        typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
            this.delayTimeoutId = null,
                this.handleDelayEnd(e)
        }
            , this.delay) : this.handleDelayEnd(e)
    }
    handleDelayEnd(e) {
        this.isDelayEnded = !0,
            this.tryStartDrag(e)
    }
    handleDistanceSurpassed(e) {
        this.isDistanceSurpassed = !0,
            this.tryStartDrag(e)
    }
    tryStartDrag(e) {
        this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0,
            this.mirrorNeedsRevert = !1,
            this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
            this.emitter.trigger("dragstart", e),
            this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll())
    }
    tryStopDrag(e) {
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
    }
    stopDrag(e) {
        this.isDragging = !1,
            this.emitter.trigger("dragend", e)
    }
    setIgnoreMove(e) {
        this.pointer.shouldIgnoreMove = e
    }
    setMirrorIsVisible(e) {
        this.mirror.setIsVisible(e)
    }
    setMirrorNeedsRevert(e) {
        this.mirrorNeedsRevert = e
    }
    setAutoScrollEnabled(e) {
        this.autoScroller.isEnabled = e
    }
}
class dv {
    constructor(e) {
        this.el = e,
            this.origRect = qi(e),
            this.scrollCaches = Aa(e).map(n => new tc(n, !0))
    }
    destroy() {
        for (let e of this.scrollCaches)
            e.destroy()
    }
    computeLeft() {
        let e = this.origRect.left;
        for (let n of this.scrollCaches)
            e += n.origScrollLeft - n.getScrollLeft();
        return e
    }
    computeTop() {
        let e = this.origRect.top;
        for (let n of this.scrollCaches)
            e += n.origScrollTop - n.getScrollTop();
        return e
    }
    isWithinClipping(e, n) {
        let r = {
            left: e,
            top: n
        };
        for (let i of this.scrollCaches)
            if (!fv(i.getEventTarget()) && !qp(r, i.clientRect))
                return !1;
        return !0
    }
}
function fv(t) {
    let e = t.tagName;
    return e === "HTML" || e === "BODY"
}
class Xn {
    constructor(e, n) {
        this.useSubjectCenter = !1,
            this.requireInitial = !0,
            this.disablePointCheck = !1,
            this.initialHit = null,
            this.movingHit = null,
            this.finalHit = null,
            this.handlePointerDown = r => {
                let { dragging: i } = this;
                this.initialHit = null,
                    this.movingHit = null,
                    this.finalHit = null,
                    this.prepareHits(),
                    this.processFirstCoord(r),
                    this.initialHit || !this.requireInitial ? (i.setIgnoreMove(!1),
                        this.emitter.trigger("pointerdown", r)) : i.setIgnoreMove(!0)
            }
            ,
            this.handleDragStart = r => {
                this.emitter.trigger("dragstart", r),
                    this.handleMove(r, !0)
            }
            ,
            this.handleDragMove = r => {
                this.emitter.trigger("dragmove", r),
                    this.handleMove(r)
            }
            ,
            this.handlePointerUp = r => {
                this.releaseHits(),
                    this.emitter.trigger("pointerup", r)
            }
            ,
            this.handleDragEnd = r => {
                this.movingHit && this.emitter.trigger("hitupdate", null, !0, r),
                    this.finalHit = this.movingHit,
                    this.movingHit = null,
                    this.emitter.trigger("dragend", r)
            }
            ,
            this.droppableStore = n,
            e.emitter.on("pointerdown", this.handlePointerDown),
            e.emitter.on("dragstart", this.handleDragStart),
            e.emitter.on("dragmove", this.handleDragMove),
            e.emitter.on("pointerup", this.handlePointerUp),
            e.emitter.on("dragend", this.handleDragEnd),
            this.dragging = e,
            this.emitter = new Yn
    }
    processFirstCoord(e) {
        let n = {
            left: e.pageX,
            top: e.pageY
        }, r = n, i = e.subjectEl, s;
        i instanceof HTMLElement && (s = qi(i),
            r = $p(r, s));
        let o = this.initialHit = this.queryHitForOffset(r.left, r.top);
        if (o) {
            if (this.useSubjectCenter && s) {
                let l = Sa(s, o.rect);
                l && (r = Yp(l))
            }
            this.coordAdjust = Qp(r, n)
        } else
            this.coordAdjust = {
                left: 0,
                top: 0
            }
    }
    handleMove(e, n) {
        let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
        (n || !Kn(this.movingHit, r)) && (this.movingHit = r,
            this.emitter.trigger("hitupdate", r, !1, e))
    }
    prepareHits() {
        this.offsetTrackers = he(this.droppableStore, e => (e.component.prepareHits(),
            new dv(e.el)))
    }
    releaseHits() {
        let { offsetTrackers: e } = this;
        for (let n in e)
            e[n].destroy();
        this.offsetTrackers = {}
    }
    queryHitForOffset(e, n) {
        let { droppableStore: r, offsetTrackers: i } = this
            , s = null;
        for (let o in r) {
            let l = r[o].component
                , a = i[o];
            if (a && a.isWithinClipping(e, n)) {
                let u = a.computeLeft()
                    , c = a.computeTop()
                    , d = e - u
                    , h = n - c
                    , { origRect: f } = a
                    , m = f.right - f.left
                    , v = f.bottom - f.top;
                if (d >= 0 && d < m && h >= 0 && h < v) {
                    let g = l.queryHit(d, h, m, v);
                    g && qn(g.dateProfile.activeRange, g.dateSpan.range) && (this.disablePointCheck || a.el.contains(a.el.getRootNode().elementFromPoint(d + u - window.scrollX, h + c - window.scrollY))) && (!s || g.layer > s.layer) && (g.componentId = o,
                        g.context = l.context,
                        g.rect.left += u,
                        g.rect.right += u,
                        g.rect.top += c,
                        g.rect.bottom += c,
                        s = g)
                }
            }
        }
        return s
    }
}
function Kn(t, e) {
    return !t && !e ? !0 : !!t != !!e ? !1 : Hp(t.dateSpan, e.dateSpan)
}
function nc(t, e) {
    let n = {};
    for (let r of e.pluginHooks.datePointTransforms)
        Object.assign(n, r(t, e));
    return Object.assign(n, hv(t, e.dateEnv)),
        n
}
function hv(t, e) {
    return {
        date: e.toDate(t.range.start),
        dateStr: e.formatIso(t.range.start, {
            omitTime: t.allDay
        }),
        allDay: t.allDay
    }
}
class pv extends dt {
    constructor(e) {
        super(e),
            this.handlePointerDown = r => {
                let { dragging: i } = this
                    , s = r.origEvent.target;
                i.setIgnoreMove(!this.component.isValidDateDownEl(s))
            }
            ,
            this.handleDragEnd = r => {
                let { component: i } = this
                    , { pointer: s } = this.dragging;
                if (!s.wasTouchScroll) {
                    let { initialHit: o, finalHit: l } = this.hitDragging;
                    if (o && l && Kn(o, l)) {
                        let { context: a } = i
                            , u = Object.assign(Object.assign({}, nc(o.dateSpan, a)), {
                                dayEl: o.dayEl,
                                jsEvent: r.origEvent,
                                view: a.viewApi || a.calendarApi.view
                            });
                        a.emitter.trigger("dateClick", u)
                    }
                }
            }
            ,
            this.dragging = new jt(e.el),
            this.dragging.autoScroller.isEnabled = !1;
        let n = this.hitDragging = new Xn(this.dragging, Vi(e));
        n.emitter.on("pointerdown", this.handlePointerDown),
            n.emitter.on("dragend", this.handleDragEnd)
    }
    destroy() {
        this.dragging.destroy()
    }
}
class gv extends dt {
    constructor(e) {
        super(e),
            this.dragSelection = null,
            this.handlePointerDown = o => {
                let { component: l, dragging: a } = this
                    , { options: u } = l.context
                    , c = u.selectable && l.isValidDateDownEl(o.origEvent.target);
                a.setIgnoreMove(!c),
                    a.delay = o.isTouch ? mv(l) : null
            }
            ,
            this.handleDragStart = o => {
                this.component.context.calendarApi.unselect(o)
            }
            ,
            this.handleHitUpdate = (o, l) => {
                let { context: a } = this.component
                    , u = null
                    , c = !1;
                if (o) {
                    let d = this.hitDragging.initialHit;
                    o.componentId === d.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(d, o) || (u = vv(d, o, a.pluginHooks.dateSelectionTransformers)),
                        (!u || !vg(u, o.dateProfile, a)) && (c = !0,
                            u = null)
                }
                u ? a.dispatch({
                    type: "SELECT_DATES",
                    selection: u
                }) : l || a.dispatch({
                    type: "UNSELECT_DATES"
                }),
                    c ? Di() : Ri(),
                    l || (this.dragSelection = u)
            }
            ,
            this.handlePointerUp = o => {
                this.dragSelection && (pa(this.dragSelection, o, this.component.context),
                    this.dragSelection = null)
            }
            ;
        let { component: n } = e
            , { options: r } = n.context
            , i = this.dragging = new jt(e.el);
        i.touchScrollAllowed = !1,
            i.minDistance = r.selectMinDistance || 0,
            i.autoScroller.isEnabled = r.dragScroll;
        let s = this.hitDragging = new Xn(this.dragging, Vi(e));
        s.emitter.on("pointerdown", this.handlePointerDown),
            s.emitter.on("dragstart", this.handleDragStart),
            s.emitter.on("hitupdate", this.handleHitUpdate),
            s.emitter.on("pointerup", this.handlePointerUp)
    }
    destroy() {
        this.dragging.destroy()
    }
}
function mv(t) {
    let { options: e } = t.context
        , n = e.selectLongPressDelay;
    return n == null && (n = e.longPressDelay),
        n
}
function vv(t, e, n) {
    let r = t.dateSpan
        , i = e.dateSpan
        , s = [r.range.start, r.range.end, i.range.start, i.range.end];
    s.sort(Gf);
    let o = {};
    for (let l of n) {
        let a = l(t, e);
        if (a === !1)
            return null;
        a && Object.assign(o, a)
    }
    return o.range = {
        start: s[0],
        end: s[3]
    },
        o.allDay = r.allDay,
        o
}
class Ut extends dt {
    constructor(e) {
        super(e),
            this.subjectEl = null,
            this.subjectSeg = null,
            this.isDragging = !1,
            this.eventRange = null,
            this.relevantEvents = null,
            this.receivingContext = null,
            this.validMutation = null,
            this.mutatedRelevantEvents = null,
            this.handlePointerDown = o => {
                let l = o.origEvent.target
                    , { component: a, dragging: u } = this
                    , { mirror: c } = u
                    , { options: d } = a.context
                    , h = a.context;
                this.subjectEl = o.subjectEl;
                let f = this.subjectSeg = it(o.subjectEl)
                    , v = (this.eventRange = f.eventRange).instance.instanceId;
                this.relevantEvents = Li(h.getCurrentData().eventStore, v),
                    u.minDistance = o.isTouch ? 0 : d.eventDragMinDistance,
                    u.delay = o.isTouch && v !== a.props.eventSelection ? bv(a) : null,
                    d.fixedMirrorParent ? c.parentNode = d.fixedMirrorParent : c.parentNode = W(l, ".fc"),
                    c.revertDuration = d.dragRevertDuration;
                let g = a.isValidSegDownEl(l) && !W(l, ".fc-event-resizer");
                u.setIgnoreMove(!g),
                    this.isDragging = g && o.subjectEl.classList.contains("fc-event-draggable")
            }
            ,
            this.handleDragStart = o => {
                let l = this.component.context
                    , a = this.eventRange
                    , u = a.instance.instanceId;
                o.isTouch ? u !== this.component.props.eventSelection && l.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: u
                }) : l.dispatch({
                    type: "UNSELECT_EVENT"
                }),
                    this.isDragging && (l.calendarApi.unselect(o),
                        l.emitter.trigger("eventDragStart", {
                            el: this.subjectEl,
                            event: new B(l, a.def, a.instance),
                            jsEvent: o.origEvent,
                            view: l.viewApi
                        }))
            }
            ,
            this.handleHitUpdate = (o, l) => {
                if (!this.isDragging)
                    return;
                let a = this.relevantEvents
                    , u = this.hitDragging.initialHit
                    , c = this.component.context
                    , d = null
                    , h = null
                    , f = null
                    , m = !1
                    , v = {
                        affectedEvents: a,
                        mutatedEvents: J(),
                        isEvent: !0
                    };
                if (o) {
                    d = o.context;
                    let g = d.options;
                    c === d || g.editable && g.droppable ? (h = yv(u, o, this.eventRange.instance.range.start, d.getCurrentData().pluginHooks.eventDragMutationMassagers),
                        h && (f = Ui(a, d.getCurrentData().eventUiBases, h, d),
                            v.mutatedEvents = f,
                            Ma(v, o.dateProfile, d) || (m = !0,
                                h = null,
                                f = null,
                                v.mutatedEvents = J()))) : d = null
                }
                this.displayDrag(d, v),
                    m ? Di() : Ri(),
                    l || (c === d && Kn(u, o) && (h = null),
                        this.dragging.setMirrorNeedsRevert(!h),
                        this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")),
                        this.receivingContext = d,
                        this.validMutation = h,
                        this.mutatedRelevantEvents = f)
            }
            ,
            this.handlePointerUp = () => {
                this.isDragging || this.cleanup()
            }
            ,
            this.handleDragEnd = o => {
                if (this.isDragging) {
                    let l = this.component.context
                        , a = l.viewApi
                        , { receivingContext: u, validMutation: c } = this
                        , d = this.eventRange.def
                        , h = this.eventRange.instance
                        , f = new B(l, d, h)
                        , m = this.relevantEvents
                        , v = this.mutatedRelevantEvents
                        , { finalHit: g } = this.hitDragging;
                    if (this.clearDrag(),
                        l.emitter.trigger("eventDragStop", {
                            el: this.subjectEl,
                            event: f,
                            jsEvent: o.origEvent,
                            view: a
                        }),
                        c) {
                        if (u === l) {
                            let b = new B(l, v.defs[d.defId], h ? v.instances[h.instanceId] : null);
                            l.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: v
                            });
                            let S = {
                                oldEvent: f,
                                event: b,
                                relatedEvents: je(v, l, h),
                                revert() {
                                    l.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: m
                                    })
                                }
                            }
                                , _ = {};
                            for (let A of l.getCurrentData().pluginHooks.eventDropTransformers)
                                Object.assign(_, A(c, l));
                            l.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, S), _), {
                                el: o.subjectEl,
                                delta: c.datesDelta,
                                jsEvent: o.origEvent,
                                view: a
                            })),
                                l.emitter.trigger("eventChange", S)
                        } else if (u) {
                            let b = {
                                event: f,
                                relatedEvents: je(m, l, h),
                                revert() {
                                    l.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: m
                                    })
                                }
                            };
                            l.emitter.trigger("eventLeave", Object.assign(Object.assign({}, b), {
                                draggedEl: o.subjectEl,
                                view: a
                            })),
                                l.dispatch({
                                    type: "REMOVE_EVENTS",
                                    eventStore: m
                                }),
                                l.emitter.trigger("eventRemove", b);
                            let S = v.defs[d.defId]
                                , _ = v.instances[h.instanceId]
                                , A = new B(u, S, _);
                            u.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: v
                            });
                            let D = {
                                event: A,
                                relatedEvents: je(v, u, _),
                                revert() {
                                    u.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: v
                                    })
                                }
                            };
                            u.emitter.trigger("eventAdd", D),
                                o.isTouch && u.dispatch({
                                    type: "SELECT_EVENT",
                                    eventInstanceId: h.instanceId
                                }),
                                u.emitter.trigger("drop", Object.assign(Object.assign({}, nc(g.dateSpan, u)), {
                                    draggedEl: o.subjectEl,
                                    jsEvent: o.origEvent,
                                    view: g.context.viewApi
                                })),
                                u.emitter.trigger("eventReceive", Object.assign(Object.assign({}, D), {
                                    draggedEl: o.subjectEl,
                                    view: g.context.viewApi
                                }))
                        }
                    } else
                        l.emitter.trigger("_noEventDrop")
                }
                this.cleanup()
            }
            ;
        let { component: n } = this
            , { options: r } = n.context
            , i = this.dragging = new jt(e.el);
        i.pointer.selector = Ut.SELECTOR,
            i.touchScrollAllowed = !1,
            i.autoScroller.isEnabled = r.dragScroll;
        let s = this.hitDragging = new Xn(this.dragging, Yr);
        s.useSubjectCenter = e.useEventCenter,
            s.emitter.on("pointerdown", this.handlePointerDown),
            s.emitter.on("dragstart", this.handleDragStart),
            s.emitter.on("hitupdate", this.handleHitUpdate),
            s.emitter.on("pointerup", this.handlePointerUp),
            s.emitter.on("dragend", this.handleDragEnd)
    }
    destroy() {
        this.dragging.destroy()
    }
    displayDrag(e, n) {
        let r = this.component.context
            , i = this.receivingContext;
        i && i !== e && (i === r ? i.dispatch({
            type: "SET_EVENT_DRAG",
            state: {
                affectedEvents: n.affectedEvents,
                mutatedEvents: J(),
                isEvent: !0
            }
        }) : i.dispatch({
            type: "UNSET_EVENT_DRAG"
        })),
            e && e.dispatch({
                type: "SET_EVENT_DRAG",
                state: n
            })
    }
    clearDrag() {
        let e = this.component.context
            , { receivingContext: n } = this;
        n && n.dispatch({
            type: "UNSET_EVENT_DRAG"
        }),
            e !== n && e.dispatch({
                type: "UNSET_EVENT_DRAG"
            })
    }
    cleanup() {
        this.subjectSeg = null,
            this.isDragging = !1,
            this.eventRange = null,
            this.relevantEvents = null,
            this.receivingContext = null,
            this.validMutation = null,
            this.mutatedRelevantEvents = null
    }
}
Ut.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function yv(t, e, n, r) {
    let i = t.dateSpan
        , s = e.dateSpan
        , o = i.range.start
        , l = s.range.start
        , a = {};
    i.allDay !== s.allDay && (a.allDay = s.allDay,
        a.hasEnd = e.context.options.allDayMaintainDuration,
        s.allDay ? o = N(n) : o = n);
    let u = Je(o, l, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
    u.milliseconds && (a.allDay = !1);
    let c = {
        datesDelta: u,
        standardProps: a
    };
    for (let d of r)
        d(c, t, e);
    return c
}
function bv(t) {
    let { options: e } = t.context
        , n = e.eventLongPressDelay;
    return n == null && (n = e.longPressDelay),
        n
}
class Ev extends dt {
    constructor(e) {
        super(e),
            this.draggingSegEl = null,
            this.draggingSeg = null,
            this.eventRange = null,
            this.relevantEvents = null,
            this.validMutation = null,
            this.mutatedRelevantEvents = null,
            this.handlePointerDown = s => {
                let { component: o } = this
                    , l = this.querySegEl(s)
                    , a = it(l)
                    , u = this.eventRange = a.eventRange;
                this.dragging.minDistance = o.context.options.eventDragMinDistance,
                    this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== u.instance.instanceId)
            }
            ,
            this.handleDragStart = s => {
                let { context: o } = this.component
                    , l = this.eventRange;
                this.relevantEvents = Li(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
                let a = this.querySegEl(s);
                this.draggingSegEl = a,
                    this.draggingSeg = it(a),
                    o.calendarApi.unselect(),
                    o.emitter.trigger("eventResizeStart", {
                        el: a,
                        event: new B(o, l.def, l.instance),
                        jsEvent: s.origEvent,
                        view: o.viewApi
                    })
            }
            ,
            this.handleHitUpdate = (s, o, l) => {
                let { context: a } = this.component
                    , u = this.relevantEvents
                    , c = this.hitDragging.initialHit
                    , d = this.eventRange.instance
                    , h = null
                    , f = null
                    , m = !1
                    , v = {
                        affectedEvents: u,
                        mutatedEvents: J(),
                        isEvent: !0
                    };
                s && (s.componentId === c.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(c, s) || (h = Sv(c, s, l.subjectEl.classList.contains("fc-event-resizer-start"), d.range))),
                    h && (f = Ui(u, a.getCurrentData().eventUiBases, h, a),
                        v.mutatedEvents = f,
                        Ma(v, s.dateProfile, a) || (m = !0,
                            h = null,
                            f = null,
                            v.mutatedEvents = null)),
                    f ? a.dispatch({
                        type: "SET_EVENT_RESIZE",
                        state: v
                    }) : a.dispatch({
                        type: "UNSET_EVENT_RESIZE"
                    }),
                    m ? Di() : Ri(),
                    o || (h && Kn(c, s) && (h = null),
                        this.validMutation = h,
                        this.mutatedRelevantEvents = f)
            }
            ,
            this.handleDragEnd = s => {
                let { context: o } = this.component
                    , l = this.eventRange.def
                    , a = this.eventRange.instance
                    , u = new B(o, l, a)
                    , c = this.relevantEvents
                    , d = this.mutatedRelevantEvents;
                if (o.emitter.trigger("eventResizeStop", {
                    el: this.draggingSegEl,
                    event: u,
                    jsEvent: s.origEvent,
                    view: o.viewApi
                }),
                    this.validMutation) {
                    let h = new B(o, d.defs[l.defId], a ? d.instances[a.instanceId] : null);
                    o.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: d
                    });
                    let f = {
                        oldEvent: u,
                        event: h,
                        relatedEvents: je(d, o, a),
                        revert() {
                            o.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: c
                            })
                        }
                    };
                    o.emitter.trigger("eventResize", Object.assign(Object.assign({}, f), {
                        el: this.draggingSegEl,
                        startDelta: this.validMutation.startDelta || M(0),
                        endDelta: this.validMutation.endDelta || M(0),
                        jsEvent: s.origEvent,
                        view: o.viewApi
                    })),
                        o.emitter.trigger("eventChange", f)
                } else
                    o.emitter.trigger("_noEventResize");
                this.draggingSeg = null,
                    this.relevantEvents = null,
                    this.validMutation = null
            }
            ;
        let { component: n } = e
            , r = this.dragging = new jt(e.el);
        r.pointer.selector = ".fc-event-resizer",
            r.touchScrollAllowed = !1,
            r.autoScroller.isEnabled = n.context.options.dragScroll;
        let i = this.hitDragging = new Xn(this.dragging, Vi(e));
        i.emitter.on("pointerdown", this.handlePointerDown),
            i.emitter.on("dragstart", this.handleDragStart),
            i.emitter.on("hitupdate", this.handleHitUpdate),
            i.emitter.on("dragend", this.handleDragEnd)
    }
    destroy() {
        this.dragging.destroy()
    }
    querySegEl(e) {
        return W(e.subjectEl, ".fc-event")
    }
}
function Sv(t, e, n, r) {
    let i = t.context.dateEnv
        , s = t.dateSpan.range.start
        , o = e.dateSpan.range.start
        , l = Je(s, o, i, t.largeUnit);
    if (n) {
        if (i.add(r.start, l) < r.end)
            return {
                startDelta: l
            }
    } else if (i.add(r.end, l) > r.start)
        return {
            endDelta: l
        };
    return null
}
class _v {
    constructor(e) {
        this.context = e,
            this.isRecentPointerDateSelect = !1,
            this.matchesCancel = !1,
            this.matchesEvent = !1,
            this.onSelect = r => {
                r.jsEvent && (this.isRecentPointerDateSelect = !0)
            }
            ,
            this.onDocumentPointerDown = r => {
                let i = this.context.options.unselectCancel
                    , s = ql(r.origEvent);
                this.matchesCancel = !!W(s, i),
                    this.matchesEvent = !!W(s, Ut.SELECTOR)
            }
            ,
            this.onDocumentPointerUp = r => {
                let { context: i } = this
                    , { documentPointer: s } = this
                    , o = i.getCurrentData();
                if (!s.wasTouchScroll) {
                    if (o.dateSelection && !this.isRecentPointerDateSelect) {
                        let l = i.options.unselectAuto;
                        l && (!l || !this.matchesCancel) && i.calendarApi.unselect(r)
                    }
                    o.eventSelection && !this.matchesEvent && i.dispatch({
                        type: "UNSELECT_EVENT"
                    })
                }
                this.isRecentPointerDateSelect = !1
            }
            ;
        let n = this.documentPointer = new Ka(document);
        n.shouldIgnoreMove = !0,
            n.shouldWatchScroll = !1,
            n.emitter.on("pointerdown", this.onDocumentPointerDown),
            n.emitter.on("pointerup", this.onDocumentPointerUp),
            e.emitter.on("select", this.onSelect)
    }
    destroy() {
        this.context.emitter.off("select", this.onSelect),
            this.documentPointer.destroy()
    }
}
const Av = {
    fixedMirrorParent: y
}
    , wv = {
        dateClick: y,
        eventDragStart: y,
        eventDragStop: y,
        eventDrop: y,
        eventResizeStart: y,
        eventResizeStop: y,
        eventResize: y,
        drop: y,
        eventReceive: y,
        eventLeave: y
    };
Qi.dataAttrPrefix = "";
var Cv = ce({
    name: "@fullcalendar/interaction",
    componentInteractions: [pv, gv, Ut, Ev],
    calendarInteractions: [_v],
    elementDraggingImpl: jt,
    optionRefiners: Av,
    listenerRefiners: wv
});
class Dv extends ie {
    constructor() {
        super(...arguments),
            this.headerElRef = G()
    }
    renderSimpleLayout(e, n) {
        let { props: r, context: i } = this
            , s = []
            , o = In(i.options);
        return e && s.push({
            type: "header",
            key: "header",
            isSticky: o,
            chunk: {
                elRef: this.headerElRef,
                tableClassName: "fc-col-header",
                rowContent: e
            }
        }),
            s.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunk: {
                    content: n
                }
            }),
            p(Mt, {
                elClasses: ["fc-daygrid"],
                viewSpec: i.viewSpec
            }, p(Zi, {
                liquid: !r.isHeightAuto && !r.forPrint,
                collapsibleWidth: r.forPrint,
                cols: [],
                sections: s
            }))
    }
    renderHScrollLayout(e, n, r, i) {
        let s = this.context.pluginHooks.scrollGridImpl;
        if (!s)
            throw new Error("No ScrollGrid implementation");
        let { props: o, context: l } = this
            , a = !o.forPrint && In(l.options)
            , u = !o.forPrint && Ha(l.options)
            , c = [];
        return e && c.push({
            type: "header",
            key: "header",
            isSticky: a,
            chunks: [{
                key: "main",
                elRef: this.headerElRef,
                tableClassName: "fc-col-header",
                rowContent: e
            }]
        }),
            c.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunks: [{
                    key: "main",
                    content: n
                }]
            }),
            u && c.push({
                type: "footer",
                key: "footer",
                isSticky: !0,
                chunks: [{
                    key: "main",
                    content: Xr
                }]
            }),
            p(Mt, {
                elClasses: ["fc-daygrid"],
                viewSpec: l.viewSpec
            }, p(s, {
                liquid: !o.isHeightAuto && !o.forPrint,
                forPrint: o.forPrint,
                collapsibleWidth: o.forPrint,
                colGroups: [{
                    cols: [{
                        span: r,
                        minWidth: i
                    }]
                }],
                sections: c
            }))
    }
}
function Kt(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1)
        n[r] = [];
    for (let r of t)
        n[r.row].push(r);
    return n
}
function Jt(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1)
        n[r] = [];
    for (let r of t)
        n[r.firstCol].push(r);
    return n
}
function No(t, e) {
    let n = [];
    if (t) {
        for (let r = 0; r < e; r += 1)
            n[r] = {
                affectedInstances: t.affectedInstances,
                isEvent: t.isEvent,
                segs: []
            };
        for (let r of t.segs)
            n[r.row].segs.push(r)
    } else
        for (let r = 0; r < e; r += 1)
            n[r] = null;
    return n
}
const rc = P({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "narrow"
});
function ic(t) {
    let { display: e } = t.eventRange.ui;
    return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && t.isStart && t.isEnd
}
class sc extends O {
    render() {
        let { props: e } = this;
        return p(Ba, Object.assign({}, e, {
            elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
            defaultTimeFormat: rc,
            defaultDisplayEventEnd: e.defaultDisplayEventEnd,
            disableResizing: !e.seg.eventRange.def.allDay
        }))
    }
}
class oc extends O {
    render() {
        let { props: e, context: n } = this
            , { options: r } = n
            , { seg: i } = e
            , s = r.eventTimeFormat || rc
            , o = Ct(i, s, n, !0, e.defaultDisplayEventEnd);
        return p(Zn, Object.assign({}, e, {
            elTag: "a",
            elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
            elAttrs: Wi(e.seg, n),
            defaultGenerator: Rv,
            timeText: o,
            isResizing: !1,
            isDateSelecting: !1
        }))
    }
}
function Rv(t) {
    return p(k, null, p("div", {
        className: "fc-daygrid-event-dot",
        style: {
            borderColor: t.borderColor || t.backgroundColor
        }
    }), t.timeText && p("div", {
        className: "fc-event-time"
    }, t.timeText), p("div", {
        className: "fc-event-title"
    }, t.event.title || p(k, null, " ")))
}
class xv extends O {
    constructor() {
        super(...arguments),
            this.compileSegs = w(Tv)
    }
    render() {
        let { props: e } = this
            , { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
        return p(Ua, {
            elClasses: ["fc-daygrid-more-link"],
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            allDayDate: e.allDayDate,
            moreCnt: e.moreCnt,
            allSegs: n,
            hiddenSegs: r,
            alignmentElRef: e.alignmentElRef,
            alignGridTop: e.alignGridTop,
            extraDateSpan: e.extraDateSpan,
            popoverContent: () => {
                let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
                return p(k, null, n.map(s => {
                    let o = s.eventRange.instance.instanceId;
                    return p("div", {
                        className: "fc-daygrid-event-harness",
                        key: o,
                        style: {
                            visibility: i[o] ? "hidden" : ""
                        }
                    }, ic(s) ? p(oc, Object.assign({
                        seg: s,
                        isDragging: !1,
                        isSelected: o === e.eventSelection,
                        defaultDisplayEventEnd: !1
                    }, fe(s, e.todayRange))) : p(sc, Object.assign({
                        seg: s,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: o === e.eventSelection,
                        defaultDisplayEventEnd: !1
                    }, fe(s, e.todayRange))))
                }
                ))
            }
        })
    }
}
function Tv(t) {
    let e = []
        , n = [];
    for (let r of t)
        e.push(r.seg),
            r.isVisible || n.push(r.seg);
    return {
        allSegs: e,
        invisibleSegs: n
    }
}
const Iv = P({
    week: "narrow"
});
class Mv extends ie {
    constructor() {
        super(...arguments),
            this.rootElRef = G(),
            this.state = {
                dayNumberId: _e()
            },
            this.handleRootEl = e => {
                pe(this.rootElRef, e),
                    pe(this.props.elRef, e)
            }
    }
    render() {
        let { context: e, props: n, state: r, rootElRef: i } = this
            , { options: s, dateEnv: o } = e
            , { date: l, dateProfile: a } = n;
        const u = n.showDayNumber && kv(l, a.currentRange, o);
        return p(Ki, {
            elTag: "td",
            elRef: this.handleRootEl,
            elClasses: ["fc-daygrid-day", ...n.extraClassNames || []],
            elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? {
                "aria-labelledby": r.dayNumberId
            } : {}), {
                role: "gridcell"
            }),
            defaultGenerator: Ov,
            date: l,
            dateProfile: a,
            todayRange: n.todayRange,
            showDayNumber: n.showDayNumber,
            isMonthStart: u,
            extraRenderProps: n.extraRenderProps
        }, (c, d) => p("div", {
            ref: n.innerElRef,
            className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
            style: {
                minHeight: n.minHeight
            }
        }, n.showWeekNumber && p(ja, {
            elTag: "a",
            elClasses: ["fc-daygrid-week-number"],
            elAttrs: st(e, l, "week"),
            date: l,
            defaultFormat: Iv
        }), !d.isDisabled && (n.showDayNumber || Ji(s) || n.forceDayTop) ? p("div", {
            className: "fc-daygrid-day-top"
        }, p(c, {
            elTag: "a",
            elClasses: ["fc-daygrid-day-number", u && "fc-daygrid-month-start"],
            elAttrs: Object.assign(Object.assign({}, st(e, l)), {
                id: r.dayNumberId
            })
        })) : n.showDayNumber ? p("div", {
            className: "fc-daygrid-day-top",
            style: {
                visibility: "hidden"
            }
        }, p("a", {
            className: "fc-daygrid-day-number"
        }, " ")) : void 0, p("div", {
            className: "fc-daygrid-day-events",
            ref: n.fgContentElRef
        }, n.fgContent, p("div", {
            className: "fc-daygrid-day-bottom",
            style: {
                marginTop: n.moreMarginTop
            }
        }, p(xv, {
            allDayDate: l,
            singlePlacements: n.singlePlacements,
            moreCnt: n.moreCnt,
            alignmentElRef: i,
            alignGridTop: !n.showDayNumber,
            extraDateSpan: n.extraDateSpan,
            dateProfile: n.dateProfile,
            eventSelection: n.eventSelection,
            eventDrag: n.eventDrag,
            eventResize: n.eventResize,
            todayRange: n.todayRange
        }))), p("div", {
            className: "fc-daygrid-day-bg"
        }, n.bgContent)))
    }
}
function Ov(t) {
    return t.dayNumberText || p(k, null, " ")
}
function kv(t, e, n) {
    const { start: r, end: i } = e
        , s = we(i, -1)
        , o = n.getYear(r)
        , l = n.getMonth(r)
        , a = n.getYear(s)
        , u = n.getMonth(s);
    return !(o === a && l === u) && (t.valueOf() === r.valueOf() || n.getDay(t) === 1 && t.valueOf() < i.valueOf())
}
function lc(t) {
    return t.eventRange.instance.instanceId + ":" + t.firstCol
}
function ac(t) {
    return lc(t) + ":" + t.lastCol
}
function Nv(t, e, n, r, i, s, o) {
    let l = new Bv(b => {
        let S = t[b.index].eventRange.instance.instanceId + ":" + b.span.start + ":" + (b.span.end - 1);
        return i[S] || 1
    }
    );
    l.allowReslicing = !0,
        l.strictOrder = r,
        e === !0 || n === !0 ? (l.maxCoord = s,
            l.hiddenConsumes = !0) : typeof e == "number" ? l.maxStackCnt = e : typeof n == "number" && (l.maxStackCnt = n,
                l.hiddenConsumes = !0);
    let a = []
        , u = [];
    for (let b = 0; b < t.length; b += 1) {
        let S = t[b]
            , _ = ac(S);
        i[_] != null ? a.push({
            index: b,
            span: {
                start: S.firstCol,
                end: S.lastCol + 1
            }
        }) : u.push(S)
    }
    let c = l.addSegs(a)
        , d = l.toRects()
        , { singleColPlacements: h, multiColPlacements: f, leftoverMargins: m } = Pv(d, t, o)
        , v = []
        , g = [];
    for (let b of u) {
        f[b.firstCol].push({
            seg: b,
            isVisible: !1,
            isAbsolute: !0,
            absoluteTop: 0,
            marginTop: 0
        });
        for (let S = b.firstCol; S <= b.lastCol; S += 1)
            h[S].push({
                seg: nt(b, S, S + 1, o),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0
            })
    }
    for (let b = 0; b < o.length; b += 1)
        v.push(0);
    for (let b of c) {
        let S = t[b.index]
            , _ = b.span;
        f[_.start].push({
            seg: nt(S, _.start, _.end, o),
            isVisible: !1,
            isAbsolute: !0,
            absoluteTop: 0,
            marginTop: 0
        });
        for (let A = _.start; A < _.end; A += 1)
            v[A] += 1,
                h[A].push({
                    seg: nt(S, A, A + 1, o),
                    isVisible: !1,
                    isAbsolute: !1,
                    absoluteTop: 0,
                    marginTop: 0
                })
    }
    for (let b = 0; b < o.length; b += 1)
        g.push(m[b]);
    return {
        singleColPlacements: h,
        multiColPlacements: f,
        moreCnts: v,
        moreMarginTops: g
    }
}
function Pv(t, e, n) {
    let r = Hv(t, n.length)
        , i = []
        , s = []
        , o = [];
    for (let l = 0; l < n.length; l += 1) {
        let a = r[l]
            , u = []
            , c = 0
            , d = 0;
        for (let f of a) {
            let m = e[f.index];
            u.push({
                seg: nt(m, l, l + 1, n),
                isVisible: !0,
                isAbsolute: !1,
                absoluteTop: f.levelCoord,
                marginTop: f.levelCoord - c
            }),
                c = f.levelCoord + f.thickness
        }
        let h = [];
        c = 0,
            d = 0;
        for (let f of a) {
            let m = e[f.index]
                , v = f.span.end - f.span.start > 1
                , g = f.span.start === l;
            d += f.levelCoord - c,
                c = f.levelCoord + f.thickness,
                v ? (d += f.thickness,
                    g && h.push({
                        seg: nt(m, f.span.start, f.span.end, n),
                        isVisible: !0,
                        isAbsolute: !0,
                        absoluteTop: f.levelCoord,
                        marginTop: 0
                    })) : g && (h.push({
                        seg: nt(m, f.span.start, f.span.end, n),
                        isVisible: !0,
                        isAbsolute: !1,
                        absoluteTop: f.levelCoord,
                        marginTop: d
                    }),
                        d = 0)
        }
        i.push(u),
            s.push(h),
            o.push(d)
    }
    return {
        singleColPlacements: i,
        multiColPlacements: s,
        leftoverMargins: o
    }
}
function Hv(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1)
        n.push([]);
    for (let r of t)
        for (let i = r.span.start; i < r.span.end; i += 1)
            n[i].push(r);
    return n
}
function nt(t, e, n, r) {
    if (t.firstCol === e && t.lastCol === n - 1)
        return t;
    let i = t.eventRange
        , s = i.range
        , o = Ce(s, {
            start: r[e].date,
            end: U(r[n - 1].date, 1)
        });
    return Object.assign(Object.assign({}, t), {
        firstCol: e,
        lastCol: n - 1,
        eventRange: {
            def: i.def,
            ui: Object.assign(Object.assign({}, i.ui), {
                durationEditable: !1
            }),
            instance: i.instance,
            range: o
        },
        isStart: t.isStart && o.start.valueOf() === s.start.valueOf(),
        isEnd: t.isEnd && o.end.valueOf() === s.end.valueOf()
    })
}
class Bv extends wa {
    constructor() {
        super(...arguments),
            this.hiddenConsumes = !1,
            this.forceHidden = {}
    }
    addSegs(e) {
        const n = super.addSegs(e)
            , { entriesByLevel: r } = this
            , i = s => !this.forceHidden[Ue(s)];
        for (let s = 0; s < r.length; s += 1)
            r[s] = r[s].filter(i);
        return n
    }
    handleInvalidInsertion(e, n, r) {
        const { entriesByLevel: i, forceHidden: s } = this
            , { touchingEntry: o, touchingLevel: l, touchingLateral: a } = e;
        if (this.hiddenConsumes && o) {
            const u = Ue(o);
            if (!s[u])
                if (this.allowReslicing) {
                    const c = Object.assign(Object.assign({}, o), {
                        span: Yi(o.span, n.span)
                    })
                        , d = Ue(c);
                    s[d] = !0,
                        i[l][a] = c,
                        r.push(c),
                        this.splitEntry(o, n, r)
                } else
                    s[u] = !0,
                        r.push(o)
        }
        super.handleInvalidInsertion(e, n, r)
    }
}
class cc extends ie {
    constructor() {
        super(...arguments),
            this.cellElRefs = new ue,
            this.frameElRefs = new ue,
            this.fgElRefs = new ue,
            this.segHarnessRefs = new ue,
            this.rootElRef = G(),
            this.state = {
                framePositions: null,
                maxContentHeight: null,
                segHeights: {}
            },
            this.handleResize = e => {
                e && this.updateSizing(!0)
            }
    }
    render() {
        let { props: e, state: n, context: r } = this
            , { options: i } = r
            , s = e.cells.length
            , o = Jt(e.businessHourSegs, s)
            , l = Jt(e.bgEventSegs, s)
            , a = Jt(this.getHighlightSegs(), s)
            , u = Jt(this.getMirrorSegs(), s)
            , { singleColPlacements: c, multiColPlacements: d, moreCnts: h, moreMarginTops: f } = Nv(zi(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells)
            , m = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
        return p("tr", {
            ref: this.rootElRef,
            role: "row"
        }, e.renderIntro && e.renderIntro(), e.cells.map((v, g) => {
            let b = this.renderFgSegs(g, e.forPrint ? c[g] : d[g], e.todayRange, m)
                , S = this.renderFgSegs(g, Lv(u[g], d), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
            return p(Mv, {
                key: v.key,
                elRef: this.cellElRefs.createRef(v.key),
                innerElRef: this.frameElRefs.createRef(v.key),
                dateProfile: e.dateProfile,
                date: v.date,
                showDayNumber: e.showDayNumbers,
                showWeekNumber: e.showWeekNumbers && g === 0,
                forceDayTop: e.showWeekNumbers,
                todayRange: e.todayRange,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                extraRenderProps: v.extraRenderProps,
                extraDataAttrs: v.extraDataAttrs,
                extraClassNames: v.extraClassNames,
                extraDateSpan: v.extraDateSpan,
                moreCnt: h[g],
                moreMarginTop: f[g],
                singlePlacements: c[g],
                fgContentElRef: this.fgElRefs.createRef(v.key),
                fgContent: p(k, null, p(k, null, b), p(k, null, S)),
                bgContent: p(k, null, this.renderFillSegs(a[g], "highlight"), this.renderFillSegs(o[g], "non-business"), this.renderFillSegs(l[g], "bg-event")),
                minHeight: e.cellMinHeight
            })
        }
        ))
    }
    componentDidMount() {
        this.updateSizing(!0),
            this.context.addResizeHandler(this.handleResize)
    }
    componentDidUpdate(e, n) {
        let r = this.props;
        this.updateSizing(!ae(e, r))
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize)
    }
    getHighlightSegs() {
        let { props: e } = this;
        return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
    }
    getMirrorSegs() {
        let { props: e } = this;
        return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
    }
    renderFgSegs(e, n, r, i, s, o, l) {
        let { context: a } = this
            , { eventSelection: u } = this.props
            , { framePositions: c } = this.state
            , d = this.props.cells.length === 1
            , h = s || o || l
            , f = [];
        if (c)
            for (let m of n) {
                let { seg: v } = m
                    , { instanceId: g } = v.eventRange.instance
                    , b = m.isVisible && !i[g]
                    , S = m.isAbsolute
                    , _ = ""
                    , A = "";
                S && (a.isRtl ? (A = 0,
                    _ = c.lefts[v.lastCol] - c.lefts[v.firstCol]) : (_ = 0,
                        A = c.rights[v.firstCol] - c.rights[v.lastCol])),
                    f.push(p("div", {
                        className: "fc-daygrid-event-harness" + (S ? " fc-daygrid-event-harness-abs" : ""),
                        key: lc(v),
                        ref: h ? null : this.segHarnessRefs.createRef(ac(v)),
                        style: {
                            visibility: b ? "" : "hidden",
                            marginTop: S ? "" : m.marginTop,
                            top: S ? m.absoluteTop : "",
                            left: _,
                            right: A
                        }
                    }, ic(v) ? p(oc, Object.assign({
                        seg: v,
                        isDragging: s,
                        isSelected: g === u,
                        defaultDisplayEventEnd: d
                    }, fe(v, r))) : p(sc, Object.assign({
                        seg: v,
                        isDragging: s,
                        isResizing: o,
                        isDateSelecting: l,
                        isSelected: g === u,
                        defaultDisplayEventEnd: d
                    }, fe(v, r)))))
            }
        return f
    }
    renderFillSegs(e, n) {
        let { isRtl: r } = this.context
            , { todayRange: i } = this.props
            , { framePositions: s } = this.state
            , o = [];
        if (s)
            for (let l of e) {
                let a = r ? {
                    right: 0,
                    left: s.lefts[l.lastCol] - s.lefts[l.firstCol]
                } : {
                    left: 0,
                    right: s.rights[l.firstCol] - s.rights[l.lastCol]
                };
                o.push(p("div", {
                    key: va(l.eventRange),
                    className: "fc-daygrid-bg-harness",
                    style: a
                }, n === "bg-event" ? p(La, Object.assign({
                    seg: l
                }, fe(l, i))) : Fa(n)))
            }
        return p(k, {}, ...o)
    }
    updateSizing(e) {
        let { props: n, state: r, frameElRefs: i } = this;
        if (!n.forPrint && n.clientWidth !== null) {
            if (e) {
                let a = n.cells.map(u => i.currentMap[u.key]);
                if (a.length) {
                    let u = this.rootElRef.current
                        , c = new ot(u, a, !0, !1);
                    (!r.framePositions || !r.framePositions.similarTo(c)) && this.setState({
                        framePositions: new ot(u, a, !0, !1)
                    })
                }
            }
            const s = this.state.segHeights
                , o = this.querySegHeights()
                , l = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
            this.safeSetState({
                segHeights: Object.assign(Object.assign({}, s), o),
                maxContentHeight: l ? this.computeMaxContentHeight() : null
            })
        }
    }
    querySegHeights() {
        let e = this.segHarnessRefs.currentMap
            , n = {};
        for (let r in e) {
            let i = Math.round(e[r].getBoundingClientRect().height);
            n[r] = Math.max(n[r] || 0, i)
        }
        return n
    }
    computeMaxContentHeight() {
        let e = this.props.cells[0].key
            , n = this.cellElRefs.currentMap[e]
            , r = this.fgElRefs.currentMap[e];
        return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top
    }
    getCellEls() {
        let e = this.cellElRefs.currentMap;
        return this.props.cells.map(n => e[n.key])
    }
}
cc.addStateEquality({
    segHeights: ae
});
function Lv(t, e) {
    if (!t.length)
        return [];
    let n = Fv(e);
    return t.map(r => ({
        seg: r,
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: n[r.eventRange.instance.instanceId],
        marginTop: 0
    }))
}
function Fv(t) {
    let e = {};
    for (let n of t)
        for (let r of n)
            e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
    return e
}
class jv extends ie {
    constructor() {
        super(...arguments),
            this.splitBusinessHourSegs = w(Kt),
            this.splitBgEventSegs = w(Kt),
            this.splitFgEventSegs = w(Kt),
            this.splitDateSelectionSegs = w(Kt),
            this.splitEventDrag = w(No),
            this.splitEventResize = w(No),
            this.rowRefs = new ue
    }
    render() {
        let { props: e, context: n } = this
            , r = e.cells.length
            , i = this.splitBusinessHourSegs(e.businessHourSegs, r)
            , s = this.splitBgEventSegs(e.bgEventSegs, r)
            , o = this.splitFgEventSegs(e.fgEventSegs, r)
            , l = this.splitDateSelectionSegs(e.dateSelectionSegs, r)
            , a = this.splitEventDrag(e.eventDrag, r)
            , u = this.splitEventResize(e.eventResize, r)
            , c = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
        return p(ft, {
            unit: "day"
        }, (d, h) => p(k, null, e.cells.map((f, m) => p(cc, {
            ref: this.rowRefs.createRef(m),
            key: f.length ? f[0].date.toISOString() : m,
            showDayNumbers: r > 1,
            showWeekNumbers: e.showWeekNumbers,
            todayRange: h,
            dateProfile: e.dateProfile,
            cells: f,
            renderIntro: e.renderRowIntro,
            businessHourSegs: i[m],
            eventSelection: e.eventSelection,
            bgEventSegs: s[m].filter(Uv),
            fgEventSegs: o[m],
            dateSelectionSegs: l[m],
            eventDrag: a[m],
            eventResize: u[m],
            dayMaxEvents: e.dayMaxEvents,
            dayMaxEventRows: e.dayMaxEventRows,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            cellMinHeight: c,
            forPrint: e.forPrint
        }))))
    }
    componentDidMount() {
        this.registerInteractiveComponent()
    }
    componentDidUpdate() {
        this.registerInteractiveComponent()
    }
    registerInteractiveComponent() {
        if (!this.rootEl) {
            const e = this.rowRefs.currentMap[0].getCellEls()[0]
                , n = e ? e.closest(".fc-daygrid-body") : null;
            n && (this.rootEl = n,
                this.context.registerInteractiveComponent(this, {
                    el: n,
                    isHitComboAllowed: this.props.isHitComboAllowed
                }))
        }
    }
    componentWillUnmount() {
        this.rootEl && (this.context.unregisterInteractiveComponent(this),
            this.rootEl = null)
    }
    prepareHits() {
        this.rowPositions = new ot(this.rootEl, this.rowRefs.collect().map(e => e.getCellEls()[0]), !1, !0),
            this.colPositions = new ot(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
    }
    queryHit(e, n) {
        let { colPositions: r, rowPositions: i } = this
            , s = r.leftToIndex(e)
            , o = i.topToIndex(n);
        if (o != null && s != null) {
            let l = this.props.cells[o][s];
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: Object.assign({
                    range: this.getCellRange(o, s),
                    allDay: !0
                }, l.extraDateSpan),
                dayEl: this.getCellEl(o, s),
                rect: {
                    left: r.lefts[s],
                    right: r.rights[s],
                    top: i.tops[o],
                    bottom: i.bottoms[o]
                },
                layer: 0
            }
        }
        return null
    }
    getCellEl(e, n) {
        return this.rowRefs.currentMap[e].getCellEls()[n]
    }
    getCellRange(e, n) {
        let r = this.props.cells[e][n].date
            , i = U(r, 1);
        return {
            start: r,
            end: i
        }
    }
}
function Uv(t) {
    return t.eventRange.def.allDay
}
class zv extends ie {
    constructor() {
        super(...arguments),
            this.elRef = G(),
            this.needsScrollReset = !1
    }
    render() {
        let { props: e } = this
            , { dayMaxEventRows: n, dayMaxEvents: r, expandRows: i } = e
            , s = r === !0 || n === !0;
        s && !i && (s = !1,
            n = null,
            r = null);
        let o = ["fc-daygrid-body", s ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", i ? "" : "fc-daygrid-body-natural"];
        return p("div", {
            ref: this.elRef,
            className: o.join(" "),
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        }, p("table", {
            role: "presentation",
            className: "fc-scrollgrid-sync-table",
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth,
                height: i ? e.clientHeight : ""
            }
        }, e.colGroupNode, p("tbody", {
            role: "presentation"
        }, p(jv, {
            dateProfile: e.dateProfile,
            cells: e.cells,
            renderRowIntro: e.renderRowIntro,
            showWeekNumbers: e.showWeekNumbers,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            businessHourSegs: e.businessHourSegs,
            bgEventSegs: e.bgEventSegs,
            fgEventSegs: e.fgEventSegs,
            dateSelectionSegs: e.dateSelectionSegs,
            eventSelection: e.eventSelection,
            eventDrag: e.eventDrag,
            eventResize: e.eventResize,
            dayMaxEvents: r,
            dayMaxEventRows: n,
            forPrint: e.forPrint,
            isHitComboAllowed: e.isHitComboAllowed
        }))))
    }
    componentDidMount() {
        this.requestScrollReset()
    }
    componentDidUpdate(e) {
        e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset()
    }
    requestScrollReset() {
        this.needsScrollReset = !0,
            this.flushScrollReset()
    }
    flushScrollReset() {
        if (this.needsScrollReset && this.props.clientWidth) {
            const e = Wv(this.elRef.current, this.props.dateProfile);
            if (e) {
                const n = e.closest(".fc-daygrid-body")
                    , r = n.closest(".fc-scroller")
                    , i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
                r.scrollTop = i ? i + 1 : 0
            }
            this.needsScrollReset = !1
        }
    }
}
function Wv(t, e) {
    let n;
    return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${fh(e.currentDate)}-01"]`)),
        n || (n = t.querySelector(`[data-date="${Bt(e.currentDate)}"]`)),
        n
}
class Vv extends Ia {
    constructor() {
        super(...arguments),
            this.forceDayIfListItem = !0
    }
    sliceRange(e, n) {
        return n.sliceRange(e)
    }
}
class uc extends ie {
    constructor() {
        super(...arguments),
            this.slicer = new Vv,
            this.tableRef = G()
    }
    render() {
        let { props: e, context: n } = this;
        return p(zv, Object.assign({
            ref: this.tableRef
        }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), {
            dateProfile: e.dateProfile,
            cells: e.dayTableModel.cells,
            colGroupNode: e.colGroupNode,
            tableMinWidth: e.tableMinWidth,
            renderRowIntro: e.renderRowIntro,
            dayMaxEvents: e.dayMaxEvents,
            dayMaxEventRows: e.dayMaxEventRows,
            showWeekNumbers: e.showWeekNumbers,
            expandRows: e.expandRows,
            headerAlignElRef: e.headerAlignElRef,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            forPrint: e.forPrint
        }))
    }
}
class Gv extends Dv {
    constructor() {
        super(...arguments),
            this.buildDayTableModel = w(qv),
            this.headerRef = G(),
            this.tableRef = G()
    }
    render() {
        let { options: e, dateProfileGenerator: n } = this.context
            , { props: r } = this
            , i = this.buildDayTableModel(r.dateProfile, n)
            , s = e.dayHeaders && p(Ra, {
                ref: this.headerRef,
                dateProfile: r.dateProfile,
                dates: i.headerDates,
                datesRepDistinctDays: i.rowCnt === 1
            })
            , o = l => p(uc, {
                ref: this.tableRef,
                dateProfile: r.dateProfile,
                dayTableModel: i,
                businessHours: r.businessHours,
                dateSelection: r.dateSelection,
                eventStore: r.eventStore,
                eventUiBases: r.eventUiBases,
                eventSelection: r.eventSelection,
                eventDrag: r.eventDrag,
                eventResize: r.eventResize,
                nextDayThreshold: e.nextDayThreshold,
                colGroupNode: l.tableColGroupNode,
                tableMinWidth: l.tableMinWidth,
                dayMaxEvents: e.dayMaxEvents,
                dayMaxEventRows: e.dayMaxEventRows,
                showWeekNumbers: e.weekNumbers,
                expandRows: !r.isHeightAuto,
                headerAlignElRef: this.headerElRef,
                clientWidth: l.clientWidth,
                clientHeight: l.clientHeight,
                forPrint: r.forPrint
            });
        return e.dayMinWidth ? this.renderHScrollLayout(s, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, o)
    }
}
function qv(t, e) {
    let n = new xa(t.renderRange, e);
    return new Ta(n, /year|month|week/.test(t.currentRangeUnit))
}
class $v extends sa {
    buildRenderRange(e, n, r) {
        let i = super.buildRenderRange(e, n, r)
            , { props: s } = this;
        return Yv({
            currentRange: i,
            snapToWeek: /^(year|month)$/.test(n),
            fixedWeekCount: s.fixedWeekCount,
            dateEnv: s.dateEnv
        })
    }
}
function Yv(t) {
    let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
    if (t.snapToWeek && (r = e.startOfWeek(r),
        s = e.startOfWeek(i),
        s.valueOf() !== i.valueOf() && (i = lo(s, 1))),
        t.fixedWeekCount) {
        let o = e.startOfWeek(e.startOfMonth(U(n.end, -1)))
            , l = Math.ceil(th(o, i));
        i = lo(i, 6 - l)
    }
    return {
        start: r,
        end: i
    }
}
var Qv = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Vn(Qv);
var Zv = ce({
    name: "@fullcalendar/daygrid",
    initialView: "dayGridMonth",
    views: {
        dayGrid: {
            component: Gv,
            dateProfileGeneratorClass: $v
        },
        dayGridDay: {
            type: "dayGrid",
            duration: {
                days: 1
            }
        },
        dayGridWeek: {
            type: "dayGrid",
            duration: {
                weeks: 1
            }
        },
        dayGridMonth: {
            type: "dayGrid",
            duration: {
                months: 1
            },
            fixedWeekCount: !0
        },
        dayGridYear: {
            type: "dayGrid",
            duration: {
                years: 1
            }
        }
    }
});
class Xv extends Zp {
    getKeyInfo() {
        return {
            allDay: {},
            timed: {}
        }
    }
    getKeysForDateSpan(e) {
        return e.allDay ? ["allDay"] : ["timed"]
    }
    getKeysForEventDef(e) {
        return e.allDay ? Rp(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
    }
}
const Kv = P({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "short"
});
function dc(t) {
    let e = ["fc-timegrid-slot", "fc-timegrid-slot-label", t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
    return p(me.Consumer, null, n => {
        if (!t.isLabeled)
            return p("td", {
                className: e.join(" "),
                "data-time": t.isoTimeStr
            });
        let { dateEnv: r, options: i, viewApi: s } = n
            , o = i.slotLabelFormat == null ? Kv : Array.isArray(i.slotLabelFormat) ? P(i.slotLabelFormat[0]) : P(i.slotLabelFormat)
            , l = {
                level: 0,
                time: t.time,
                date: r.toDate(t.date),
                view: s,
                text: r.format(t.date, o)
            };
        return p(V, {
            elTag: "td",
            elClasses: e,
            elAttrs: {
                "data-time": t.isoTimeStr
            },
            renderProps: l,
            generatorName: "slotLabelContent",
            customGenerator: i.slotLabelContent,
            defaultGenerator: Jv,
            classNameGenerator: i.slotLabelClassNames,
            didMount: i.slotLabelDidMount,
            willUnmount: i.slotLabelWillUnmount
        }, a => p("div", {
            className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
        }, p(a, {
            elTag: "div",
            elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
        })))
    }
    )
}
function Jv(t) {
    return t.text
}
class ey extends O {
    render() {
        return this.props.slatMetas.map(e => p("tr", {
            key: e.key
        }, p(dc, Object.assign({}, e))))
    }
}
const ty = P({
    week: "short"
})
    , ny = 5;
class ry extends ie {
    constructor() {
        super(...arguments),
            this.allDaySplitter = new Xv,
            this.headerElRef = G(),
            this.rootElRef = G(),
            this.scrollerElRef = G(),
            this.state = {
                slatCoords: null
            },
            this.handleScrollTopRequest = e => {
                let n = this.scrollerElRef.current;
                n && (n.scrollTop = e)
            }
            ,
            this.renderHeadAxis = (e, n = "") => {
                let { options: r } = this.context
                    , { dateProfile: i } = this.props
                    , s = i.renderRange
                    , l = Te(s.start, s.end) === 1 ? st(this.context, s.start, "week") : {};
                return r.weekNumbers && e === "day" ? p(ja, {
                    elTag: "th",
                    elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                    elAttrs: {
                        "aria-hidden": !0
                    },
                    date: s.start,
                    defaultFormat: ty
                }, a => p("div", {
                    className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", "fc-timegrid-axis-frame-liquid"].join(" "),
                    style: {
                        height: n
                    }
                }, p(a, {
                    elTag: "a",
                    elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"],
                    elAttrs: l
                }))) : p("th", {
                    "aria-hidden": !0,
                    className: "fc-timegrid-axis"
                }, p("div", {
                    className: "fc-timegrid-axis-frame",
                    style: {
                        height: n
                    }
                }))
            }
            ,
            this.renderTableRowAxis = e => {
                let { options: n, viewApi: r } = this.context
                    , i = {
                        text: n.allDayText,
                        view: r
                    };
                return p(V, {
                    elTag: "td",
                    elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                    elAttrs: {
                        "aria-hidden": !0
                    },
                    renderProps: i,
                    generatorName: "allDayContent",
                    customGenerator: n.allDayContent,
                    defaultGenerator: iy,
                    classNameGenerator: n.allDayClassNames,
                    didMount: n.allDayDidMount,
                    willUnmount: n.allDayWillUnmount
                }, s => p("div", {
                    className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", e == null ? " fc-timegrid-axis-frame-liquid" : ""].join(" "),
                    style: {
                        height: e
                    }
                }, p(s, {
                    elTag: "span",
                    elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"]
                })))
            }
            ,
            this.handleSlatCoords = e => {
                this.setState({
                    slatCoords: e
                })
            }
    }
    renderSimpleLayout(e, n, r) {
        let { context: i, props: s } = this
            , o = []
            , l = In(i.options);
        return e && o.push({
            type: "header",
            key: "header",
            isSticky: l,
            chunk: {
                elRef: this.headerElRef,
                tableClassName: "fc-col-header",
                rowContent: e
            }
        }),
            n && (o.push({
                type: "body",
                key: "all-day",
                chunk: {
                    content: n
                }
            }),
                o.push({
                    type: "body",
                    key: "all-day-divider",
                    outerContent: p("tr", {
                        role: "presentation",
                        className: "fc-scrollgrid-section"
                    }, p("td", {
                        className: "fc-timegrid-divider " + i.theme.getClass("tableCellShaded")
                    }))
                })),
            o.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: !!i.options.expandRows,
                chunk: {
                    scrollerElRef: this.scrollerElRef,
                    content: r
                }
            }),
            p(Mt, {
                elRef: this.rootElRef,
                elClasses: ["fc-timegrid"],
                viewSpec: i.viewSpec
            }, p(Zi, {
                liquid: !s.isHeightAuto && !s.forPrint,
                collapsibleWidth: s.forPrint,
                cols: [{
                    width: "shrink"
                }],
                sections: o
            }))
    }
    renderHScrollLayout(e, n, r, i, s, o, l) {
        let a = this.context.pluginHooks.scrollGridImpl;
        if (!a)
            throw new Error("No ScrollGrid implementation");
        let { context: u, props: c } = this
            , d = !c.forPrint && In(u.options)
            , h = !c.forPrint && Ha(u.options)
            , f = [];
        e && f.push({
            type: "header",
            key: "header",
            isSticky: d,
            syncRowHeights: !0,
            chunks: [{
                key: "axis",
                rowContent: v => p("tr", {
                    role: "presentation"
                }, this.renderHeadAxis("day", v.rowSyncHeights[0]))
            }, {
                key: "cols",
                elRef: this.headerElRef,
                tableClassName: "fc-col-header",
                rowContent: e
            }]
        }),
            n && (f.push({
                type: "body",
                key: "all-day",
                syncRowHeights: !0,
                chunks: [{
                    key: "axis",
                    rowContent: v => p("tr", {
                        role: "presentation"
                    }, this.renderTableRowAxis(v.rowSyncHeights[0]))
                }, {
                    key: "cols",
                    content: n
                }]
            }),
                f.push({
                    key: "all-day-divider",
                    type: "body",
                    outerContent: p("tr", {
                        role: "presentation",
                        className: "fc-scrollgrid-section"
                    }, p("td", {
                        colSpan: 2,
                        className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
                    }))
                }));
        let m = u.options.nowIndicator;
        return f.push({
            type: "body",
            key: "body",
            liquid: !0,
            expandRows: !!u.options.expandRows,
            chunks: [{
                key: "axis",
                content: v => p("div", {
                    className: "fc-timegrid-axis-chunk"
                }, p("table", {
                    "aria-hidden": !0,
                    style: {
                        height: v.expandRows ? v.clientHeight : ""
                    }
                }, v.tableColGroupNode, p("tbody", null, p(ey, {
                    slatMetas: o
                }))), p("div", {
                    className: "fc-timegrid-now-indicator-container"
                }, p(ft, {
                    unit: m ? "minute" : "day"
                }, g => {
                    let b = m && l && l.safeComputeTop(g);
                    return typeof b == "number" ? p(Xi, {
                        elClasses: ["fc-timegrid-now-indicator-arrow"],
                        elStyle: {
                            top: b
                        },
                        isAxis: !0,
                        date: g
                    }) : null
                }
                )))
            }, {
                key: "cols",
                scrollerElRef: this.scrollerElRef,
                content: r
            }]
        }),
            h && f.push({
                key: "footer",
                type: "footer",
                isSticky: !0,
                chunks: [{
                    key: "axis",
                    content: Xr
                }, {
                    key: "cols",
                    content: Xr
                }]
            }),
            p(Mt, {
                elRef: this.rootElRef,
                elClasses: ["fc-timegrid"],
                viewSpec: u.viewSpec
            }, p(a, {
                liquid: !c.isHeightAuto && !c.forPrint,
                forPrint: c.forPrint,
                collapsibleWidth: !1,
                colGroups: [{
                    width: "shrink",
                    cols: [{
                        width: "shrink"
                    }]
                }, {
                    cols: [{
                        span: i,
                        minWidth: s
                    }]
                }],
                sections: f
            }))
    }
    getAllDayMaxEventProps() {
        let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
        return (e === !0 || n === !0) && (e = void 0,
            n = ny),
        {
            dayMaxEvents: e,
            dayMaxEventRows: n
        }
    }
}
function iy(t) {
    return t.text
}
class sy {
    constructor(e, n, r) {
        this.positions = e,
            this.dateProfile = n,
            this.slotDuration = r
    }
    safeComputeTop(e) {
        let { dateProfile: n } = this;
        if (de(n.currentRange, e)) {
            let r = N(e)
                , i = e.valueOf() - r.valueOf();
            if (i >= te(n.slotMinTime) && i < te(n.slotMaxTime))
                return this.computeTimeTop(M(i))
        }
        return null
    }
    computeDateTop(e, n) {
        return n || (n = N(e)),
            this.computeTimeTop(M(e.valueOf() - n.valueOf()))
    }
    computeTimeTop(e) {
        let { positions: n, dateProfile: r } = this, i = n.els.length, s = (e.milliseconds - te(r.slotMinTime)) / te(this.slotDuration), o, l;
        return s = Math.max(0, s),
            s = Math.min(i, s),
            o = Math.floor(s),
            o = Math.min(o, i - 1),
            l = s - o,
            n.tops[o] + n.getHeight(o) * l
    }
}
class oy extends O {
    render() {
        let { props: e, context: n } = this
            , { options: r } = n
            , { slatElRefs: i } = e;
        return p("tbody", null, e.slatMetas.map((s, o) => {
            let l = {
                time: s.time,
                date: n.dateEnv.toDate(s.date),
                view: n.viewApi
            };
            return p("tr", {
                key: s.key,
                ref: i.createRef(s.key)
            }, e.axis && p(dc, Object.assign({}, s)), p(V, {
                elTag: "td",
                elClasses: ["fc-timegrid-slot", "fc-timegrid-slot-lane", !s.isLabeled && "fc-timegrid-slot-minor"],
                elAttrs: {
                    "data-time": s.isoTimeStr
                },
                renderProps: l,
                generatorName: "slotLaneContent",
                customGenerator: r.slotLaneContent,
                classNameGenerator: r.slotLaneClassNames,
                didMount: r.slotLaneDidMount,
                willUnmount: r.slotLaneWillUnmount
            }))
        }
        ))
    }
}
class ly extends O {
    constructor() {
        super(...arguments),
            this.rootElRef = G(),
            this.slatElRefs = new ue
    }
    render() {
        let { props: e, context: n } = this;
        return p("div", {
            ref: this.rootElRef,
            className: "fc-timegrid-slots"
        }, p("table", {
            "aria-hidden": !0,
            className: n.theme.getClass("table"),
            style: {
                minWidth: e.tableMinWidth,
                width: e.clientWidth,
                height: e.minHeight
            }
        }, e.tableColGroupNode, p(oy, {
            slatElRefs: this.slatElRefs,
            axis: e.axis,
            slatMetas: e.slatMetas
        })))
    }
    componentDidMount() {
        this.updateSizing()
    }
    componentDidUpdate() {
        this.updateSizing()
    }
    componentWillUnmount() {
        this.props.onCoords && this.props.onCoords(null)
    }
    updateSizing() {
        let { context: e, props: n } = this;
        n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new sy(new ot(this.rootElRef.current, ay(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration))
    }
}
function ay(t, e) {
    return e.map(n => t[n.key])
}
function vt(t, e) {
    let n = [], r;
    for (r = 0; r < e; r += 1)
        n.push([]);
    if (t)
        for (r = 0; r < t.length; r += 1)
            n[t[r].col].push(t[r]);
    return n
}
function Po(t, e) {
    let n = [];
    if (t) {
        for (let r = 0; r < e; r += 1)
            n[r] = {
                affectedInstances: t.affectedInstances,
                isEvent: t.isEvent,
                segs: []
            };
        for (let r of t.segs)
            n[r.col].segs.push(r)
    } else
        for (let r = 0; r < e; r += 1)
            n[r] = null;
    return n
}
class cy extends O {
    render() {
        let { props: e } = this;
        return p(Ua, {
            elClasses: ["fc-timegrid-more-link"],
            elStyle: {
                top: e.top,
                bottom: e.bottom
            },
            allDayDate: null,
            moreCnt: e.hiddenSegs.length,
            allSegs: e.hiddenSegs,
            hiddenSegs: e.hiddenSegs,
            extraDateSpan: e.extraDateSpan,
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            popoverContent: () => hc(e.hiddenSegs, e),
            defaultGenerator: uy,
            forceTimed: !0
        }, n => p(n, {
            elTag: "div",
            elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
        }))
    }
}
function uy(t) {
    return t.shortText
}
function dy(t, e, n) {
    let r = new wa;
    e != null && (r.strictOrder = e),
        n != null && (r.maxStackCnt = n);
    let i = r.addSegs(t)
        , s = cg(i)
        , o = fy(r);
    return o = my(o, 1),
    {
        segRects: vy(o),
        hiddenGroups: s
    }
}
function fy(t) {
    const { entriesByLevel: e } = t
        , n = ts((r, i) => r + ":" + i, (r, i) => {
            let s = gy(t, r, i)
                , o = Ho(s, n)
                , l = e[r][i];
            return [Object.assign(Object.assign({}, l), {
                nextLevelNodes: o[0]
            }), l.thickness + o[1]]
        }
        );
    return Ho(e.length ? {
        level: 0,
        lateralStart: 0,
        lateralEnd: e[0].length
    } : null, n)[0]
}
function Ho(t, e) {
    if (!t)
        return [[], 0];
    let { level: n, lateralStart: r, lateralEnd: i } = t
        , s = r
        , o = [];
    for (; s < i;)
        o.push(e(n, s)),
            s += 1;
    return o.sort(hy),
        [o.map(py), o[0][1]]
}
function hy(t, e) {
    return e[1] - t[1]
}
function py(t) {
    return t[0]
}
function gy(t, e, n) {
    let { levelCoords: r, entriesByLevel: i } = t
        , s = i[e][n]
        , o = r[e] + s.thickness
        , l = r.length
        , a = e;
    for (; a < l && r[a] < o; a += 1)
        ;
    for (; a < l; a += 1) {
        let u = i[a], c, d = Zr(u, s.span.start, Qr), h = d[0] + d[1], f = h;
        for (; (c = u[f]) && c.span.start < s.span.end;)
            f += 1;
        if (h < f)
            return {
                level: a,
                lateralStart: h,
                lateralEnd: f
            }
    }
    return null
}
function my(t, e) {
    const n = ts((r, i, s) => Ue(r), (r, i, s) => {
        let { nextLevelNodes: o, thickness: l } = r, a = l + s, u = l / a, c, d = [];
        if (!o.length)
            c = e;
        else
            for (let f of o)
                if (c === void 0) {
                    let m = n(f, i, a);
                    c = m[0],
                        d.push(m[1])
                } else {
                    let m = n(f, c, 0);
                    d.push(m[1])
                }
        let h = (c - i) * u;
        return [c - h, Object.assign(Object.assign({}, r), {
            thickness: h,
            nextLevelNodes: d
        })]
    }
    );
    return t.map(r => n(r, 0, 0)[1])
}
function vy(t) {
    let e = [];
    const n = ts((i, s, o) => Ue(i), (i, s, o) => {
        let l = Object.assign(Object.assign({}, i), {
            levelCoord: s,
            stackDepth: o,
            stackForward: 0
        });
        return e.push(l),
            l.stackForward = r(i.nextLevelNodes, s + i.thickness, o + 1) + 1
    }
    );
    function r(i, s, o) {
        let l = 0;
        for (let a of i)
            l = Math.max(n(a, s, o), l);
        return l
    }
    return r(t, 0, 0),
        e
}
function ts(t, e) {
    const n = {};
    return (...r) => {
        let i = t(...r);
        return i in n ? n[i] : n[i] = e(...r)
    }
}
function Bo(t, e, n = null, r = 0) {
    let i = [];
    if (n)
        for (let s = 0; s < t.length; s += 1) {
            let o = t[s]
                , l = n.computeDateTop(o.start, e)
                , a = Math.max(l + (r || 0), n.computeDateTop(o.end, e));
            i.push({
                start: Math.round(l),
                end: Math.round(a)
            })
        }
    return i
}
function yy(t, e, n, r) {
    let i = []
        , s = [];
    for (let u = 0; u < t.length; u += 1) {
        let c = e[u];
        c ? i.push({
            index: u,
            thickness: 1,
            span: c
        }) : s.push(t[u])
    }
    let { segRects: o, hiddenGroups: l } = dy(i, n, r)
        , a = [];
    for (let u of o)
        a.push({
            seg: t[u.index],
            rect: u
        });
    for (let u of s)
        a.push({
            seg: u,
            rect: null
        });
    return {
        segPlacements: a,
        hiddenGroups: l
    }
}
const by = P({
    hour: "numeric",
    minute: "2-digit",
    meridiem: !1
});
class fc extends O {
    render() {
        return p(Ba, Object.assign({}, this.props, {
            elClasses: ["fc-timegrid-event", "fc-v-event", this.props.isShort && "fc-timegrid-event-short"],
            defaultTimeFormat: by
        }))
    }
}
class Ey extends O {
    constructor() {
        super(...arguments),
            this.sortEventSegs = w(zi)
    }
    render() {
        let { props: e, context: n } = this
            , { options: r } = n
            , i = r.selectMirror
            , s = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || i && e.dateSelectionSegs || []
            , o = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
            , l = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
        return p(Ki, {
            elTag: "td",
            elRef: e.elRef,
            elClasses: ["fc-timegrid-col", ...e.extraClassNames || []],
            elAttrs: Object.assign({
                role: "gridcell"
            }, e.extraDataAttrs),
            date: e.date,
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            extraRenderProps: e.extraRenderProps
        }, a => p("div", {
            className: "fc-timegrid-col-frame"
        }, p("div", {
            className: "fc-timegrid-col-bg"
        }, this.renderFillSegs(e.businessHourSegs, "non-business"), this.renderFillSegs(e.bgEventSegs, "bg-event"), this.renderFillSegs(e.dateSelectionSegs, "highlight")), p("div", {
            className: "fc-timegrid-col-events"
        }, this.renderFgSegs(l, o, !1, !1, !1)), p("div", {
            className: "fc-timegrid-col-events"
        }, this.renderFgSegs(s, {}, !!e.eventDrag, !!e.eventResize, !!i, "mirror")), p("div", {
            className: "fc-timegrid-now-indicator-container"
        }, this.renderNowIndicator(e.nowIndicatorSegs)), Ji(r) && p(a, {
            elTag: "div",
            elClasses: ["fc-timegrid-col-misc"]
        })))
    }
    renderFgSegs(e, n, r, i, s, o) {
        let { props: l } = this;
        return l.forPrint ? hc(e, l) : this.renderPositionedFgSegs(e, n, r, i, s, o)
    }
    renderPositionedFgSegs(e, n, r, i, s, o) {
        let { eventMaxStack: l, eventShortHeight: a, eventOrderStrict: u, eventMinHeight: c } = this.context.options
            , { date: d, slatCoords: h, eventSelection: f, todayRange: m, nowDate: v } = this.props
            , g = r || i || s
            , b = Bo(e, d, h, c)
            , { segPlacements: S, hiddenGroups: _ } = yy(e, b, u, l);
        return p(k, null, this.renderHiddenGroups(_, e), S.map(A => {
            let { seg: D, rect: R } = A
                , I = D.eventRange.instance.instanceId
                , T = g || !!(!n[I] && R)
                , Z = Cr(R && R.span)
                , Oe = !g && R ? this.computeSegHStyle(R) : {
                    left: 0,
                    right: 0
                }
                , xu = !!R && R.stackForward > 0
                , Tu = !!R && R.span.end - R.span.start < a;
            return p("div", {
                className: "fc-timegrid-event-harness" + (xu ? " fc-timegrid-event-harness-inset" : ""),
                key: o || I,
                style: Object.assign(Object.assign({
                    visibility: T ? "" : "hidden"
                }, Z), Oe)
            }, p(fc, Object.assign({
                seg: D,
                isDragging: r,
                isResizing: i,
                isDateSelecting: s,
                isSelected: I === f,
                isShort: Tu
            }, fe(D, m, v))))
        }
        ))
    }
    renderHiddenGroups(e, n) {
        let { extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: l, eventDrag: a, eventResize: u } = this.props;
        return p(k, null, e.map(c => {
            let d = Cr(c.span)
                , h = Sy(c.entries, n);
            return p(cy, {
                key: Xl(za(h)),
                hiddenSegs: h,
                top: d.top,
                bottom: d.bottom,
                extraDateSpan: r,
                dateProfile: i,
                todayRange: s,
                nowDate: o,
                eventSelection: l,
                eventDrag: a,
                eventResize: u
            })
        }
        ))
    }
    renderFillSegs(e, n) {
        let { props: r, context: i } = this
            , o = Bo(e, r.date, r.slatCoords, i.options.eventMinHeight).map((l, a) => {
                let u = e[a];
                return p("div", {
                    key: va(u.eventRange),
                    className: "fc-timegrid-bg-harness",
                    style: Cr(l)
                }, n === "bg-event" ? p(La, Object.assign({
                    seg: u
                }, fe(u, r.todayRange, r.nowDate))) : Fa(n))
            }
            );
        return p(k, null, o)
    }
    renderNowIndicator(e) {
        let { slatCoords: n, date: r } = this.props;
        return n ? e.map((i, s) => p(Xi, {
            key: s,
            elClasses: ["fc-timegrid-now-indicator-line"],
            elStyle: {
                top: n.computeDateTop(i.start, r)
            },
            isAxis: !1,
            date: r
        })) : null
    }
    computeSegHStyle(e) {
        let { isRtl: n, options: r } = this.context, i = r.slotEventOverlap, s = e.levelCoord, o = e.levelCoord + e.thickness, l, a;
        i && (o = Math.min(1, s + (o - s) * 2)),
            n ? (l = 1 - o,
                a = s) : (l = s,
                    a = 1 - o);
        let u = {
            zIndex: e.stackDepth + 1,
            left: l * 100 + "%",
            right: a * 100 + "%"
        };
        return i && !e.stackForward && (u[n ? "marginLeft" : "marginRight"] = 10 * 2),
            u
    }
}
function hc(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
    let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
    return p(k, null, t.map(l => {
        let a = l.eventRange.instance.instanceId;
        return p("div", {
            key: a,
            style: {
                visibility: o[a] ? "hidden" : ""
            }
        }, p(fc, Object.assign({
            seg: l,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: a === r,
            isShort: !1
        }, fe(l, e, n))))
    }
    ))
}
function Cr(t) {
    return t ? {
        top: t.start,
        bottom: -t.end
    } : {
        top: "",
        bottom: ""
    }
}
function Sy(t, e) {
    return t.map(n => e[n.index])
}
class _y extends O {
    constructor() {
        super(...arguments),
            this.splitFgEventSegs = w(vt),
            this.splitBgEventSegs = w(vt),
            this.splitBusinessHourSegs = w(vt),
            this.splitNowIndicatorSegs = w(vt),
            this.splitDateSelectionSegs = w(vt),
            this.splitEventDrag = w(Po),
            this.splitEventResize = w(Po),
            this.rootElRef = G(),
            this.cellElRefs = new ue
    }
    render() {
        let { props: e, context: n } = this
            , r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate)
            , i = e.cells.length
            , s = this.splitFgEventSegs(e.fgEventSegs, i)
            , o = this.splitBgEventSegs(e.bgEventSegs, i)
            , l = this.splitBusinessHourSegs(e.businessHourSegs, i)
            , a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i)
            , u = this.splitDateSelectionSegs(e.dateSelectionSegs, i)
            , c = this.splitEventDrag(e.eventDrag, i)
            , d = this.splitEventResize(e.eventResize, i);
        return p("div", {
            className: "fc-timegrid-cols",
            ref: this.rootElRef
        }, p("table", {
            role: "presentation",
            style: {
                minWidth: e.tableMinWidth,
                width: e.clientWidth
            }
        }, e.tableColGroupNode, p("tbody", {
            role: "presentation"
        }, p("tr", {
            role: "row"
        }, e.axis && p("td", {
            "aria-hidden": !0,
            className: "fc-timegrid-col fc-timegrid-axis"
        }, p("div", {
            className: "fc-timegrid-col-frame"
        }, p("div", {
            className: "fc-timegrid-now-indicator-container"
        }, typeof r == "number" && p(Xi, {
            elClasses: ["fc-timegrid-now-indicator-arrow"],
            elStyle: {
                top: r
            },
            isAxis: !0,
            date: e.nowDate
        })))), e.cells.map((h, f) => p(Ey, {
            key: h.key,
            elRef: this.cellElRefs.createRef(h.key),
            dateProfile: e.dateProfile,
            date: h.date,
            nowDate: e.nowDate,
            todayRange: e.todayRange,
            extraRenderProps: h.extraRenderProps,
            extraDataAttrs: h.extraDataAttrs,
            extraClassNames: h.extraClassNames,
            extraDateSpan: h.extraDateSpan,
            fgEventSegs: s[f],
            bgEventSegs: o[f],
            businessHourSegs: l[f],
            nowIndicatorSegs: a[f],
            dateSelectionSegs: u[f],
            eventDrag: c[f],
            eventResize: d[f],
            slatCoords: e.slatCoords,
            eventSelection: e.eventSelection,
            forPrint: e.forPrint
        }))))))
    }
    componentDidMount() {
        this.updateCoords()
    }
    componentDidUpdate() {
        this.updateCoords()
    }
    updateCoords() {
        let { props: e } = this;
        e.onColCoords && e.clientWidth !== null && e.onColCoords(new ot(this.rootElRef.current, Ay(this.cellElRefs.currentMap, e.cells), !0, !1))
    }
}
function Ay(t, e) {
    return e.map(n => t[n.key])
}
class wy extends ie {
    constructor() {
        super(...arguments),
            this.processSlotOptions = w(Cy),
            this.state = {
                slatCoords: null
            },
            this.handleRootEl = e => {
                e ? this.context.registerInteractiveComponent(this, {
                    el: e,
                    isHitComboAllowed: this.props.isHitComboAllowed
                }) : this.context.unregisterInteractiveComponent(this)
            }
            ,
            this.handleScrollRequest = e => {
                let { onScrollTopRequest: n } = this.props
                    , { slatCoords: r } = this.state;
                if (n && r) {
                    if (e.time) {
                        let i = r.computeTimeTop(e.time);
                        i = Math.ceil(i),
                            i && (i += 1),
                            n(i)
                    }
                    return !0
                }
                return !1
            }
            ,
            this.handleColCoords = e => {
                this.colCoords = e
            }
            ,
            this.handleSlatCoords = e => {
                this.setState({
                    slatCoords: e
                }),
                    this.props.onSlatCoords && this.props.onSlatCoords(e)
            }
    }
    render() {
        let { props: e, state: n } = this;
        return p("div", {
            className: "fc-timegrid-body",
            ref: this.handleRootEl,
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        }, p(ly, {
            axis: e.axis,
            dateProfile: e.dateProfile,
            slatMetas: e.slatMetas,
            clientWidth: e.clientWidth,
            minHeight: e.expandRows ? e.clientHeight : "",
            tableMinWidth: e.tableMinWidth,
            tableColGroupNode: e.axis ? e.tableColGroupNode : null,
            onCoords: this.handleSlatCoords
        }), p(_y, {
            cells: e.cells,
            axis: e.axis,
            dateProfile: e.dateProfile,
            businessHourSegs: e.businessHourSegs,
            bgEventSegs: e.bgEventSegs,
            fgEventSegs: e.fgEventSegs,
            dateSelectionSegs: e.dateSelectionSegs,
            eventSelection: e.eventSelection,
            eventDrag: e.eventDrag,
            eventResize: e.eventResize,
            todayRange: e.todayRange,
            nowDate: e.nowDate,
            nowIndicatorSegs: e.nowIndicatorSegs,
            clientWidth: e.clientWidth,
            tableMinWidth: e.tableMinWidth,
            tableColGroupNode: e.tableColGroupNode,
            slatCoords: n.slatCoords,
            onColCoords: this.handleColCoords,
            forPrint: e.forPrint
        }))
    }
    componentDidMount() {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
    }
    componentDidUpdate(e) {
        this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
    }
    componentWillUnmount() {
        this.scrollResponder.detach()
    }
    queryHit(e, n) {
        let { dateEnv: r, options: i } = this.context
            , { colCoords: s } = this
            , { dateProfile: o } = this.props
            , { slatCoords: l } = this.state
            , { snapDuration: a, snapsPerSlot: u } = this.processSlotOptions(this.props.slotDuration, i.snapDuration)
            , c = s.leftToIndex(e)
            , d = l.positions.topToIndex(n);
        if (c != null && d != null) {
            let h = this.props.cells[c]
                , f = l.positions.tops[d]
                , m = l.positions.getHeight(d)
                , v = (n - f) / m
                , g = Math.floor(v * u)
                , b = d * u + g
                , S = this.props.cells[c].date
                , _ = Ur(o.slotMinTime, Xf(a, b))
                , A = r.add(S, _)
                , D = r.add(A, a);
            return {
                dateProfile: o,
                dateSpan: Object.assign({
                    range: {
                        start: A,
                        end: D
                    },
                    allDay: !1
                }, h.extraDateSpan),
                dayEl: s.els[c],
                rect: {
                    left: s.lefts[c],
                    right: s.rights[c],
                    top: f,
                    bottom: f + m
                },
                layer: 0
            }
        }
        return null
    }
}
function Cy(t, e) {
    let n = e || t
        , r = xi(t, n);
    return r === null && (n = t,
        r = 1),
    {
        snapDuration: n,
        snapsPerSlot: r
    }
}
class Dy extends Ia {
    sliceRange(e, n) {
        let r = [];
        for (let i = 0; i < n.length; i += 1) {
            let s = Ce(e, n[i]);
            s && r.push({
                start: s.start,
                end: s.end,
                isStart: s.start.valueOf() === e.start.valueOf(),
                isEnd: s.end.valueOf() === e.end.valueOf(),
                col: i
            })
        }
        return r
    }
}
class Ry extends ie {
    constructor() {
        super(...arguments),
            this.buildDayRanges = w(xy),
            this.slicer = new Dy,
            this.timeColsRef = G()
    }
    render() {
        let { props: e, context: n } = this
            , { dateProfile: r, dayTableModel: i } = e
            , { nowIndicator: s, nextDayThreshold: o } = n.options
            , l = this.buildDayRanges(i, r, n.dateEnv);
        return p(ft, {
            unit: s ? "minute" : "day"
        }, (a, u) => p(wy, Object.assign({
            ref: this.timeColsRef
        }, this.slicer.sliceProps(e, r, null, n, l), {
            forPrint: e.forPrint,
            axis: e.axis,
            dateProfile: r,
            slatMetas: e.slatMetas,
            slotDuration: e.slotDuration,
            cells: i.cells[0],
            tableColGroupNode: e.tableColGroupNode,
            tableMinWidth: e.tableMinWidth,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            expandRows: e.expandRows,
            nowDate: a,
            nowIndicatorSegs: s && this.slicer.sliceNowDate(a, r, o, n, l),
            todayRange: u,
            onScrollTopRequest: e.onScrollTopRequest,
            onSlatCoords: e.onSlatCoords
        })))
    }
}
function xy(t, e, n) {
    let r = [];
    for (let i of t.headerDates)
        r.push({
            start: n.add(i, e.slotMinTime),
            end: n.add(i, e.slotMaxTime)
        });
    return r
}
const Lo = [{
    hours: 1
}, {
    minutes: 30
}, {
    minutes: 15
}, {
    seconds: 30
}, {
    seconds: 15
}];
function Ty(t, e, n, r, i) {
    let s = new Date(0)
        , o = t
        , l = M(0)
        , a = n || Iy(r)
        , u = [];
    for (; te(o) < te(e);) {
        let c = i.add(s, o)
            , d = xi(l, a) !== null;
        u.push({
            date: c,
            time: o,
            key: c.toISOString(),
            isoTimeStr: hh(c),
            isLabeled: d
        }),
            o = Ur(o, r),
            l = Ur(l, r)
    }
    return u
}
function Iy(t) {
    let e, n, r;
    for (e = Lo.length - 1; e >= 0; e -= 1)
        if (n = M(Lo[e]),
            r = xi(n, t),
            r !== null && r > 1)
            return n;
    return t
}
class My extends ry {
    constructor() {
        super(...arguments),
            this.buildTimeColsModel = w(Oy),
            this.buildSlatMetas = w(Ty)
    }
    render() {
        let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context
            , { props: i } = this
            , { dateProfile: s } = i
            , o = this.buildTimeColsModel(s, r)
            , l = this.allDaySplitter.splitProps(i)
            , a = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, n)
            , { dayMinWidth: u } = e
            , c = !u
            , d = u
            , h = e.dayHeaders && p(Ra, {
                dates: o.headerDates,
                dateProfile: s,
                datesRepDistinctDays: !0,
                renderIntro: c ? this.renderHeadAxis : null
            })
            , f = e.allDaySlot !== !1 && (v => p(uc, Object.assign({}, l.allDay, {
                dateProfile: s,
                dayTableModel: o,
                nextDayThreshold: e.nextDayThreshold,
                tableMinWidth: v.tableMinWidth,
                colGroupNode: v.tableColGroupNode,
                renderRowIntro: c ? this.renderTableRowAxis : null,
                showWeekNumbers: !1,
                expandRows: !1,
                headerAlignElRef: this.headerElRef,
                clientWidth: v.clientWidth,
                clientHeight: v.clientHeight,
                forPrint: i.forPrint
            }, this.getAllDayMaxEventProps())))
            , m = v => p(Ry, Object.assign({}, l.timed, {
                dayTableModel: o,
                dateProfile: s,
                axis: c,
                slotDuration: e.slotDuration,
                slatMetas: a,
                forPrint: i.forPrint,
                tableColGroupNode: v.tableColGroupNode,
                tableMinWidth: v.tableMinWidth,
                clientWidth: v.clientWidth,
                clientHeight: v.clientHeight,
                onSlatCoords: this.handleSlatCoords,
                expandRows: v.expandRows,
                onScrollTopRequest: this.handleScrollTopRequest
            }));
        return d ? this.renderHScrollLayout(h, f, m, o.colCnt, u, a, this.state.slatCoords) : this.renderSimpleLayout(h, f, m)
    }
}
function Oy(t, e) {
    let n = new xa(t.renderRange, e);
    return new Ta(n, !1)
}
var ky = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
Vn(ky);
const Ny = {
    allDaySlot: Boolean
};
var Py = ce({
    name: "@fullcalendar/timegrid",
    initialView: "timeGridWeek",
    optionRefiners: Ny,
    views: {
        timeGrid: {
            component: My,
            usesMinMaxTime: !0,
            allDaySlot: !0,
            slotDuration: "00:30:00",
            slotEventOverlap: !0
        },
        timeGridDay: {
            type: "timeGrid",
            duration: {
                days: 1
            }
        },
        timeGridWeek: {
            type: "timeGrid",
            duration: {
                weeks: 1
            }
        }
    }
});
class Hy extends O {
    constructor() {
        super(...arguments),
            this.state = {
                textId: _e()
            }
    }
    render() {
        let { theme: e, dateEnv: n, options: r, viewApi: i } = this.context
            , { cellId: s, dayDate: o, todayRange: l } = this.props
            , { textId: a } = this.state
            , u = Gi(o, l)
            , c = r.listDayFormat ? n.format(o, r.listDayFormat) : ""
            , d = r.listDaySideFormat ? n.format(o, r.listDaySideFormat) : ""
            , h = Object.assign({
                date: n.toDate(o),
                view: i,
                textId: a,
                text: c,
                sideText: d,
                navLinkAttrs: st(this.context, o),
                sideNavLinkAttrs: st(this.context, o, "day", !1)
            }, u);
        return p(V, {
            elTag: "tr",
            elClasses: ["fc-list-day", ...Qn(u, e)],
            elAttrs: {
                "data-date": Bt(o)
            },
            renderProps: h,
            generatorName: "dayHeaderContent",
            customGenerator: r.dayHeaderContent,
            defaultGenerator: By,
            classNameGenerator: r.dayHeaderClassNames,
            didMount: r.dayHeaderDidMount,
            willUnmount: r.dayHeaderWillUnmount
        }, f => p("th", {
            scope: "colgroup",
            colSpan: 3,
            id: s,
            "aria-labelledby": a
        }, p(f, {
            elTag: "div",
            elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
        })))
    }
}
function By(t) {
    return p(k, null, t.text && p("a", Object.assign({
        id: t.textId,
        className: "fc-list-day-text"
    }, t.navLinkAttrs), t.text), t.sideText && p("a", Object.assign({
        "aria-hidden": !0,
        className: "fc-list-day-side-text"
    }, t.sideNavLinkAttrs), t.sideText))
}
const Ly = P({
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short"
});
class Fy extends O {
    render() {
        let { props: e, context: n } = this
            , { options: r } = n
            , { seg: i, timeHeaderId: s, eventHeaderId: o, dateHeaderId: l } = e
            , a = r.eventTimeFormat || Ly;
        return p(Zn, Object.assign({}, e, {
            elTag: "tr",
            elClasses: ["fc-list-event", i.eventRange.def.url && "fc-event-forced-url"],
            defaultGenerator: () => jy(i, n),
            seg: i,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0
        }), (u, c) => p(k, null, Uy(i, a, n, s, l), p("td", {
            "aria-hidden": !0,
            className: "fc-list-event-graphic"
        }, p("span", {
            className: "fc-list-event-dot",
            style: {
                borderColor: c.borderColor || c.backgroundColor
            }
        })), p(u, {
            elTag: "td",
            elClasses: ["fc-list-event-title"],
            elAttrs: {
                headers: `${o} ${l}`
            }
        })))
    }
}
function jy(t, e) {
    let n = Wi(t, e);
    return p("a", Object.assign({}, n), t.eventRange.def.title)
}
function Uy(t, e, n, r, i) {
    let { options: s } = n;
    if (s.displayEventTime !== !1) {
        let o = t.eventRange.def, l = t.eventRange.instance, a = !1, u;
        if (o.allDay ? a = !0 : Kh(t.eventRange.range) ? t.isStart ? u = Ct(t, e, n, null, null, l.range.start, t.end) : t.isEnd ? u = Ct(t, e, n, null, null, t.start, l.range.end) : a = !0 : u = Ct(t, e, n),
            a) {
            let c = {
                text: n.options.allDayText,
                view: n.viewApi
            };
            return p(V, {
                elTag: "td",
                elClasses: ["fc-list-event-time"],
                elAttrs: {
                    headers: `${r} ${i}`
                },
                renderProps: c,
                generatorName: "allDayContent",
                customGenerator: s.allDayContent,
                defaultGenerator: zy,
                classNameGenerator: s.allDayClassNames,
                didMount: s.allDayDidMount,
                willUnmount: s.allDayWillUnmount
            })
        }
        return p("td", {
            className: "fc-list-event-time"
        }, u)
    }
    return null
}
function zy(t) {
    return t.text
}
class Wy extends ie {
    constructor() {
        super(...arguments),
            this.computeDateVars = w(Gy),
            this.eventStoreToSegs = w(this._eventStoreToSegs),
            this.state = {
                timeHeaderId: _e(),
                eventHeaderId: _e(),
                dateHeaderIdRoot: _e()
            },
            this.setRootEl = e => {
                e ? this.context.registerInteractiveComponent(this, {
                    el: e
                }) : this.context.unregisterInteractiveComponent(this)
            }
    }
    render() {
        let { props: e, context: n } = this
            , { dayDates: r, dayRanges: i } = this.computeDateVars(e.dateProfile)
            , s = this.eventStoreToSegs(e.eventStore, e.eventUiBases, i);
        return p(Mt, {
            elRef: this.setRootEl,
            elClasses: ["fc-list", n.theme.getClass("table"), n.options.stickyHeaderDates !== !1 ? "fc-list-sticky" : ""],
            viewSpec: n.viewSpec
        }, p(Na, {
            liquid: !e.isHeightAuto,
            overflowX: e.isHeightAuto ? "visible" : "hidden",
            overflowY: e.isHeightAuto ? "visible" : "auto"
        }, s.length > 0 ? this.renderSegList(s, r) : this.renderEmptyMessage()))
    }
    renderEmptyMessage() {
        let { options: e, viewApi: n } = this.context
            , r = {
                text: e.noEventsText,
                view: n
            };
        return p(V, {
            elTag: "div",
            elClasses: ["fc-list-empty"],
            renderProps: r,
            generatorName: "noEventsContent",
            customGenerator: e.noEventsContent,
            defaultGenerator: Vy,
            classNameGenerator: e.noEventsClassNames,
            didMount: e.noEventsDidMount,
            willUnmount: e.noEventsWillUnmount
        }, i => p(i, {
            elTag: "div",
            elClasses: ["fc-list-empty-cushion"]
        }))
    }
    renderSegList(e, n) {
        let { theme: r, options: i } = this.context
            , { timeHeaderId: s, eventHeaderId: o, dateHeaderIdRoot: l } = this.state
            , a = qy(e);
        return p(ft, {
            unit: "day"
        }, (u, c) => {
            let d = [];
            for (let h = 0; h < a.length; h += 1) {
                let f = a[h];
                if (f) {
                    let m = Bt(n[h])
                        , v = l + "-" + m;
                    d.push(p(Hy, {
                        key: m,
                        cellId: v,
                        dayDate: n[h],
                        todayRange: c
                    })),
                        f = zi(f, i.eventOrder);
                    for (let g of f)
                        d.push(p(Fy, Object.assign({
                            key: m + ":" + g.eventRange.instance.instanceId,
                            seg: g,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: !1,
                            timeHeaderId: s,
                            eventHeaderId: o,
                            dateHeaderId: v
                        }, fe(g, c, u))))
                }
            }
            return p("table", {
                className: "fc-list-table " + r.getClass("table")
            }, p("thead", null, p("tr", null, p("th", {
                scope: "col",
                id: s
            }, i.timeHint), p("th", {
                scope: "col",
                "aria-hidden": !0
            }), p("th", {
                scope: "col",
                id: o
            }, i.eventHint))), p("tbody", null, d))
        }
        )
    }
    _eventStoreToSegs(e, n, r) {
        return this.eventRangesToSegs($r(e, n, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, r)
    }
    eventRangesToSegs(e, n) {
        let r = [];
        for (let i of e)
            r.push(...this.eventRangeToSegs(i, n));
        return r
    }
    eventRangeToSegs(e, n) {
        let { dateEnv: r } = this.context, { nextDayThreshold: i } = this.context.options, s = e.range, o = e.def.allDay, l, a, u, c = [];
        for (l = 0; l < n.length; l += 1)
            if (a = Ce(s, n[l]),
                a && (u = {
                    component: this,
                    eventRange: e,
                    start: a.start,
                    end: a.end,
                    isStart: e.isStart && a.start.valueOf() === s.start.valueOf(),
                    isEnd: e.isEnd && a.end.valueOf() === s.end.valueOf(),
                    dayIndex: l
                },
                    c.push(u),
                    !u.isEnd && !o && l + 1 < n.length && s.end < r.add(n[l + 1].start, i))) {
                u.end = s.end,
                    u.isEnd = !0;
                break
            }
        return c
    }
}
function Vy(t) {
    return t.text
}
function Gy(t) {
    let e = N(t.renderRange.start)
        , n = t.renderRange.end
        , r = []
        , i = [];
    for (; e < n;)
        r.push(e),
            i.push({
                start: e,
                end: U(e, 1)
            }),
            e = U(e, 1);
    return {
        dayDates: r,
        dayRanges: i
    }
}
function qy(t) {
    let e = [], n, r;
    for (n = 0; n < t.length; n += 1)
        r = t[n],
            (e[r.dayIndex] || (e[r.dayIndex] = [])).push(r);
    return e
}
var $y = ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
Vn($y);
const Yy = {
    listDayFormat: Fo,
    listDaySideFormat: Fo,
    noEventsClassNames: y,
    noEventsContent: y,
    noEventsDidMount: y,
    noEventsWillUnmount: y
};
function Fo(t) {
    return t === !1 ? null : P(t)
}
var Qy = ce({
    name: "@fullcalendar/list",
    optionRefiners: Yy,
    views: {
        list: {
            component: Wy,
            buttonTextKey: "list",
            listDayFormat: {
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        listDay: {
            type: "list",
            duration: {
                days: 1
            },
            listDayFormat: {
                weekday: "long"
            }
        },
        listWeek: {
            type: "list",
            duration: {
                weeks: 1
            },
            listDayFormat: {
                weekday: "long"
            },
            listDaySideFormat: {
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        listMonth: {
            type: "list",
            duration: {
                month: 1
            },
            listDaySideFormat: {
                weekday: "long"
            }
        },
        listYear: {
            type: "list",
            duration: {
                year: 1
            },
            listDaySideFormat: {
                weekday: "long"
            }
        }
    }
});
let On, z = null, kt = null;
document.addEventListener("DOMContentLoaded", function () {
    Zy(),
        eb()
});
function Zy() {
    const t = document.getElementById("calendar");
    On = new rv(t, {
        plugins: [Cv, Zv, Py, Qy],
        initialView: "dayGridMonth",
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek"
        },
        locale: "ja",
        selectable: !0,
        select: Xy,
        eventClick: Ky,
        events: Jy
    }),
        On.render()
}
function Xy(t) {
    z = null,
        kt = t.start,
        pc("add")
}
function Ky(t) {
    z = t.event,
        kt = null,
        pc("edit"),
        document.getElementById("chat-button").style.display = "inline-block",
        document.getElementById("chat-button").onclick = function () {
            window.location.href = `/events/${z.id}/chat`
        }
}
function Jy(t, e, n) {
    L.post("/schedule-get", {
        start_date: t.start.valueOf(),
        end_date: t.end.valueOf()
    }).then(r => {
        e(r.data)
    }
    ).catch(r => {
        console.error("Failed to fetch events:", r),
            n(r)
    }
    )
}
function eb() {
    document.getElementById("save-event").addEventListener("click", tb),
        document.getElementById("delete-event").addEventListener("click", nb),
        document.getElementById("cancel-event").addEventListener("click", kn)
}
function tb() {
    const t = document.getElementById("event-id").value
        , e = document.getElementById("event-name").value.trim()
        , n = document.getElementById("event-detail").value.trim()
        , r = document.getElementById("event-start").value
        , i = document.getElementById("event-end").value;
    if (!e || !r || !i) {
        hn("必須フィールドを入力してください");
        return
    }
    const s = {
        event_name: e,
        event_detail: n,
        start_date: new Date(r).valueOf(),
        end_date: new Date(i).valueOf()
    };
    z ? (s.id = t,
        L.post("/schedule-update", s).then(o => {
            z.remove(),
                On.addEvent({
                    id: o.data.id,
                    title: o.data.title,
                    start: o.data.start,
                    end: o.data.end,
                    extendedProps: {
                        detail: o.data.extendedProps.detail
                    }
                }),
                kn()
        }
        ).catch(o => {
            console.error("Failed to update event:", o),
                hn("更新に失敗しました。もう一度お試しください。")
        }
        )) : L.post("/schedule-add", s).then(o => {
            On.addEvent({
                id: o.data.id,
                title: o.data.title,
                start: o.data.start,
                end: o.data.end,
                extendedProps: {
                    detail: o.data.extendedProps.detail
                }
            }),
                kn()
        }
        ).catch(o => {
            console.error("Failed to save event:", o),
                hn("登録に失敗しました。もう一度お試しください。")
        }
        )
}
function nb() {
    z && L.post("/schedule-delete", {
        id: z.id
    }).then(() => {
        z.remove(),
            kn()
    }
    ).catch(t => {
        console.error("Failed to delete event:", t),
            hn("削除に失敗しました。もう一度お試しください。")
    }
    )
}
function pc(t) {
    const e = document.getElementById("eventModal")
        , n = document.getElementById("modalTitle")
        , r = document.getElementById("delete-event")
        , i = document.getElementById("event-id")
        , s = document.getElementById("event-name")
        , o = document.getElementById("event-detail")
        , l = document.getElementById("event-start")
        , a = document.getElementById("event-end");
    t === "edit" ? (n.textContent = "イベントを編集",
        i.value = z.id,
        s.value = z.title,
        o.value = z.extendedProps.detail || "",
        l.value = z.start.toISOString().slice(0, 16),
        a.value = z.end ? z.end.toISOString().slice(0, 16) : z.start.toISOString().slice(0, 16),
        r.style.display = "inline-block",
        document.getElementById("chat-button").style.display = "inline-block") : (n.textContent = "イベントを追加",
            i.value = "",
            s.value = "",
            o.value = "",
            l.value = kt.toISOString().slice(0, 16),
            a.value = kt.toISOString().slice(0, 16),
            r.style.display = "none",
            document.getElementById("chat-button").style.display = "none"),
        e.style.display = "block"
}
function kn() {
    document.getElementById("eventModal").style.display = "none",
        z = null,
        kt = null
}
function hn(t) {
    alert(t)
}
var ti = !1
    , ni = !1
    , ze = []
    , ri = -1;
function rb(t) {
    ib(t)
}
function ib(t) {
    ze.includes(t) || ze.push(t),
        sb()
}
function gc(t) {
    let e = ze.indexOf(t);
    e !== -1 && e > ri && ze.splice(e, 1)
}
function sb() {
    !ni && !ti && (ti = !0,
        queueMicrotask(ob))
}
function ob() {
    ti = !1,
        ni = !0;
    for (let t = 0; t < ze.length; t++)
        ze[t](),
            ri = t;
    ze.length = 0,
        ri = -1,
        ni = !1
}
var ht, Xe, pt, mc, ii = !0;
function lb(t) {
    ii = !1,
        t(),
        ii = !0
}
function ab(t) {
    ht = t.reactive,
        pt = t.release,
        Xe = e => t.effect(e, {
            scheduler: n => {
                ii ? rb(n) : n()
            }
        }),
        mc = t.raw
}
function jo(t) {
    Xe = t
}
function cb(t) {
    let e = () => { }
        ;
    return [r => {
        let i = Xe(r);
        return t._x_effects || (t._x_effects = new Set,
            t._x_runEffects = () => {
                t._x_effects.forEach(s => s())
            }
        ),
            t._x_effects.add(i),
            e = () => {
                i !== void 0 && (t._x_effects.delete(i),
                    pt(i))
            }
            ,
            i
    }
        , () => {
            e()
        }
    ]
}
function vc(t, e) {
    let n = !0, r, i = Xe(() => {
        let s = t();
        JSON.stringify(s),
            n ? r = s : queueMicrotask(() => {
                e(s, r),
                    r = s
            }
            ),
            n = !1
    }
    );
    return () => pt(i)
}
var yc = []
    , bc = []
    , Ec = [];
function ub(t) {
    Ec.push(t)
}
function ns(t, e) {
    typeof e == "function" ? (t._x_cleanups || (t._x_cleanups = []),
        t._x_cleanups.push(e)) : (e = t,
            bc.push(e))
}
function Sc(t) {
    yc.push(t)
}
function _c(t, e, n) {
    t._x_attributeCleanups || (t._x_attributeCleanups = {}),
        t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
        t._x_attributeCleanups[e].push(n)
}
function Ac(t, e) {
    t._x_attributeCleanups && Object.entries(t._x_attributeCleanups).forEach(([n, r]) => {
        (e === void 0 || e.includes(n)) && (r.forEach(i => i()),
            delete t._x_attributeCleanups[n])
    }
    )
}
function db(t) {
    if (t._x_cleanups)
        for (; t._x_cleanups.length;)
            t._x_cleanups.pop()()
}
var rs = new MutationObserver(ls)
    , is = !1;
function ss() {
    rs.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
        is = !0
}
function wc() {
    fb(),
        rs.disconnect(),
        is = !1
}
var yt = [];
function fb() {
    let t = rs.takeRecords();
    yt.push(() => t.length > 0 && ls(t));
    let e = yt.length;
    queueMicrotask(() => {
        if (yt.length === e)
            for (; yt.length > 0;)
                yt.shift()()
    }
    )
}
function j(t) {
    if (!is)
        return t();
    wc();
    let e = t();
    return ss(),
        e
}
var os = !1
    , Nn = [];
function hb() {
    os = !0
}
function pb() {
    os = !1,
        ls(Nn),
        Nn = []
}
function ls(t) {
    if (os) {
        Nn = Nn.concat(t);
        return
    }
    let e = new Set
        , n = new Set
        , r = new Map
        , i = new Map;
    for (let s = 0; s < t.length; s++)
        if (!t[s].target._x_ignoreMutationObserver && (t[s].type === "childList" && (t[s].addedNodes.forEach(o => o.nodeType === 1 && e.add(o)),
            t[s].removedNodes.forEach(o => o.nodeType === 1 && n.add(o))),
            t[s].type === "attributes")) {
            let o = t[s].target
                , l = t[s].attributeName
                , a = t[s].oldValue
                , u = () => {
                    r.has(o) || r.set(o, []),
                        r.get(o).push({
                            name: l,
                            value: o.getAttribute(l)
                        })
                }
                , c = () => {
                    i.has(o) || i.set(o, []),
                        i.get(o).push(l)
                }
                ;
            o.hasAttribute(l) && a === null ? u() : o.hasAttribute(l) ? (c(),
                u()) : c()
        }
    i.forEach((s, o) => {
        Ac(o, s)
    }
    ),
        r.forEach((s, o) => {
            yc.forEach(l => l(o, s))
        }
        );
    for (let s of n)
        e.has(s) || bc.forEach(o => o(s));
    e.forEach(s => {
        s._x_ignoreSelf = !0,
            s._x_ignore = !0
    }
    );
    for (let s of e)
        n.has(s) || s.isConnected && (delete s._x_ignoreSelf,
            delete s._x_ignore,
            Ec.forEach(o => o(s)),
            s._x_ignore = !0,
            s._x_ignoreSelf = !0);
    e.forEach(s => {
        delete s._x_ignoreSelf,
            delete s._x_ignore
    }
    ),
        e = null,
        n = null,
        r = null,
        i = null
}
function Cc(t) {
    return Wt(lt(t))
}
function zt(t, e, n) {
    return t._x_dataStack = [e, ...lt(n || t)],
        () => {
            t._x_dataStack = t._x_dataStack.filter(r => r !== e)
        }
}
function lt(t) {
    return t._x_dataStack ? t._x_dataStack : typeof ShadowRoot == "function" && t instanceof ShadowRoot ? lt(t.host) : t.parentNode ? lt(t.parentNode) : []
}
function Wt(t) {
    return new Proxy({
        objects: t
    }, gb)
}
var gb = {
    ownKeys({ objects: t }) {
        return Array.from(new Set(t.flatMap(e => Object.keys(e))))
    },
    has({ objects: t }, e) {
        return e == Symbol.unscopables ? !1 : t.some(n => Object.prototype.hasOwnProperty.call(n, e) || Reflect.has(n, e))
    },
    get({ objects: t }, e, n) {
        return e == "toJSON" ? mb : Reflect.get(t.find(r => Reflect.has(r, e)) || {}, e, n)
    },
    set({ objects: t }, e, n, r) {
        const i = t.find(o => Object.prototype.hasOwnProperty.call(o, e)) || t[t.length - 1]
            , s = Object.getOwnPropertyDescriptor(i, e);
        return s != null && s.set && (s != null && s.get) ? s.set.call(r, n) || !0 : Reflect.set(i, e, n)
    }
};
function mb() {
    return Reflect.ownKeys(this).reduce((e, n) => (e[n] = Reflect.get(this, n),
        e), {})
}
function Dc(t) {
    let e = r => typeof r == "object" && !Array.isArray(r) && r !== null
        , n = (r, i = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([s, { value: o, enumerable: l }]) => {
                if (l === !1 || o === void 0 || typeof o == "object" && o !== null && o.__v_skip)
                    return;
                let a = i === "" ? s : `${i}.${s}`;
                typeof o == "object" && o !== null && o._x_interceptor ? r[s] = o.initialize(t, a, s) : e(o) && o !== r && !(o instanceof Element) && n(o, a)
            }
            )
        }
        ;
    return n(t)
}
function Rc(t, e = () => { }
) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(r, i, s) {
            return t(this.initialValue, () => vb(r, i), o => si(r, i, o), i, s)
        }
    };
    return e(n),
        r => {
            if (typeof r == "object" && r !== null && r._x_interceptor) {
                let i = n.initialize.bind(n);
                n.initialize = (s, o, l) => {
                    let a = r.initialize(s, o, l);
                    return n.initialValue = a,
                        i(s, o, l)
                }
            } else
                n.initialValue = r;
            return n
        }
}
function vb(t, e) {
    return e.split(".").reduce((n, r) => n[r], t)
}
function si(t, e, n) {
    if (typeof e == "string" && (e = e.split(".")),
        e.length === 1)
        t[e[0]] = n;
    else {
        if (e.length === 0)
            throw error;
        return t[e[0]] || (t[e[0]] = {}),
            si(t[e[0]], e.slice(1), n)
    }
}
var xc = {};
function se(t, e) {
    xc[t] = e
}
function oi(t, e) {
    return Object.entries(xc).forEach(([n, r]) => {
        let i = null;
        function s() {
            if (i)
                return i;
            {
                let [o, l] = Nc(e);
                return i = {
                    interceptor: Rc,
                    ...o
                },
                    ns(e, l),
                    i
            }
        }
        Object.defineProperty(t, `$${n}`, {
            get() {
                return r(e, s())
            },
            enumerable: !1
        })
    }
    ),
        t
}
function yb(t, e, n, ...r) {
    try {
        return n(...r)
    } catch (i) {
        Nt(i, t, e)
    }
}
function Nt(t, e, n = void 0) {
    t = Object.assign(t ?? {
        message: "No error message given."
    }, {
        el: e,
        expression: n
    }),
        console.warn(`Alpine Expression Error: ${t.message}

${n ? 'Expression: "' + n + `"

` : ""}`, e),
        setTimeout(() => {
            throw t
        }
            , 0)
}
var pn = !0;
function Tc(t) {
    let e = pn;
    pn = !1;
    let n = t();
    return pn = e,
        n
}
function We(t, e, n = {}) {
    let r;
    return q(t, e)(i => r = i, n),
        r
}
function q(...t) {
    return Ic(...t)
}
var Ic = Mc;
function bb(t) {
    Ic = t
}
function Mc(t, e) {
    let n = {};
    oi(n, t);
    let r = [n, ...lt(t)]
        , i = typeof e == "function" ? Eb(r, e) : _b(r, e, t);
    return yb.bind(null, t, e, i)
}
function Eb(t, e) {
    return (n = () => { }
        , { scope: r = {}, params: i = [] } = {}) => {
        let s = e.apply(Wt([r, ...t]), i);
        Pn(n, s)
    }
}
var Dr = {};
function Sb(t, e) {
    if (Dr[t])
        return Dr[t];
    let n = Object.getPrototypeOf(async function () { }).constructor
        , r = /^[\n\s]*if.*\(.*\)/.test(t.trim()) || /^(let|const)\s/.test(t.trim()) ? `(async()=>{ ${t} })()` : t
        , s = (() => {
            try {
                let o = new n(["__self", "scope"], `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);
                return Object.defineProperty(o, "name", {
                    value: `[Alpine] ${t}`
                }),
                    o
            } catch (o) {
                return Nt(o, e, t),
                    Promise.resolve()
            }
        }
        )();
    return Dr[t] = s,
        s
}
function _b(t, e, n) {
    let r = Sb(e, n);
    return (i = () => { }
        , { scope: s = {}, params: o = [] } = {}) => {
        r.result = void 0,
            r.finished = !1;
        let l = Wt([s, ...t]);
        if (typeof r == "function") {
            let a = r(r, l).catch(u => Nt(u, n, e));
            r.finished ? (Pn(i, r.result, l, o, n),
                r.result = void 0) : a.then(u => {
                    Pn(i, u, l, o, n)
                }
                ).catch(u => Nt(u, n, e)).finally(() => r.result = void 0)
        }
    }
}
function Pn(t, e, n, r, i) {
    if (pn && typeof e == "function") {
        let s = e.apply(n, r);
        s instanceof Promise ? s.then(o => Pn(t, o, n, r)).catch(o => Nt(o, i, e)) : t(s)
    } else
        typeof e == "object" && e instanceof Promise ? e.then(s => t(s)) : t(e)
}
var as = "x-";
function gt(t = "") {
    return as + t
}
function Ab(t) {
    as = t
}
var Hn = {};
function F(t, e) {
    return Hn[t] = e,
    {
        before(n) {
            if (!Hn[n]) {
                console.warn(String.raw`Cannot find directive \`${n}\`. \`${t}\` will use the default order of execution`);
                return
            }
            const r = Le.indexOf(n);
            Le.splice(r >= 0 ? r : Le.indexOf("DEFAULT"), 0, t)
        }
    }
}
function wb(t) {
    return Object.keys(Hn).includes(t)
}
function cs(t, e, n) {
    if (e = Array.from(e),
        t._x_virtualDirectives) {
        let s = Object.entries(t._x_virtualDirectives).map(([l, a]) => ({
            name: l,
            value: a
        }))
            , o = Oc(s);
        s = s.map(l => o.find(a => a.name === l.name) ? {
            name: `x-bind:${l.name}`,
            value: `"${l.value}"`
        } : l),
            e = e.concat(s)
    }
    let r = {};
    return e.map(Bc((s, o) => r[s] = o)).filter(Fc).map(Rb(r, n)).sort(xb).map(s => Db(t, s))
}
function Oc(t) {
    return Array.from(t).map(Bc()).filter(e => !Fc(e))
}
var li = !1
    , St = new Map
    , kc = Symbol();
function Cb(t) {
    li = !0;
    let e = Symbol();
    kc = e,
        St.set(e, []);
    let n = () => {
        for (; St.get(e).length;)
            St.get(e).shift()();
        St.delete(e)
    }
        , r = () => {
            li = !1,
                n()
        }
        ;
    t(n),
        r()
}
function Nc(t) {
    let e = []
        , n = l => e.push(l)
        , [r, i] = cb(t);
    return e.push(i),
        [{
            Alpine: Gt,
            effect: r,
            cleanup: n,
            evaluateLater: q.bind(q, t),
            evaluate: We.bind(We, t)
        }, () => e.forEach(l => l())]
}
function Db(t, e) {
    let n = () => { }
        , r = Hn[e.type] || n
        , [i, s] = Nc(t);
    _c(t, e.original, s);
    let o = () => {
        t._x_ignore || t._x_ignoreSelf || (r.inline && r.inline(t, e, i),
            r = r.bind(r, t, e, i),
            li ? St.get(kc).push(r) : r())
    }
        ;
    return o.runCleanups = s,
        o
}
var Pc = (t, e) => ({ name: n, value: r }) => (n.startsWith(t) && (n = n.replace(t, e)),
{
    name: n,
    value: r
})
    , Hc = t => t;
function Bc(t = () => { }
) {
    return ({ name: e, value: n }) => {
        let { name: r, value: i } = Lc.reduce((s, o) => o(s), {
            name: e,
            value: n
        });
        return r !== e && t(r, e),
        {
            name: r,
            value: i
        }
    }
}
var Lc = [];
function us(t) {
    Lc.push(t)
}
function Fc({ name: t }) {
    return jc().test(t)
}
var jc = () => new RegExp(`^${as}([^:^.]+)\\b`);
function Rb(t, e) {
    return ({ name: n, value: r }) => {
        let i = n.match(jc())
            , s = n.match(/:([a-zA-Z0-9\-_:]+)/)
            , o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
            , l = e || t[n] || n;
        return {
            type: i ? i[1] : null,
            value: s ? s[1] : null,
            modifiers: o.map(a => a.replace(".", "")),
            expression: r,
            original: l
        }
    }
}
var ai = "DEFAULT"
    , Le = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", ai, "teleport"];
function xb(t, e) {
    let n = Le.indexOf(t.type) === -1 ? ai : t.type
        , r = Le.indexOf(e.type) === -1 ? ai : e.type;
    return Le.indexOf(n) - Le.indexOf(r)
}
function Dt(t, e, n = {}) {
    t.dispatchEvent(new CustomEvent(e, {
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
function De(t, e) {
    if (typeof ShadowRoot == "function" && t instanceof ShadowRoot) {
        Array.from(t.children).forEach(i => De(i, e));
        return
    }
    let n = !1;
    if (e(t, () => n = !0),
        n)
        return;
    let r = t.firstElementChild;
    for (; r;)
        De(r, e),
            r = r.nextElementSibling
}
function ee(t, ...e) {
    console.warn(`Alpine Warning: ${t}`, ...e)
}
var Uo = !1;
function Tb() {
    Uo && ee("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
        Uo = !0,
        document.body || ee("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
        Dt(document, "alpine:init"),
        Dt(document, "alpine:initializing"),
        ss(),
        ub(e => ge(e, De)),
        ns(e => $c(e)),
        Sc((e, n) => {
            cs(e, n).forEach(r => r())
        }
        );
    let t = e => !Jn(e.parentElement, !0);
    Array.from(document.querySelectorAll(Wc().join(","))).filter(t).forEach(e => {
        ge(e)
    }
    ),
        Dt(document, "alpine:initialized"),
        setTimeout(() => {
            Ob()
        }
        )
}
var ds = []
    , Uc = [];
function zc() {
    return ds.map(t => t())
}
function Wc() {
    return ds.concat(Uc).map(t => t())
}
function Vc(t) {
    ds.push(t)
}
function Gc(t) {
    Uc.push(t)
}
function Jn(t, e = !1) {
    return Vt(t, n => {
        if ((e ? Wc() : zc()).some(i => n.matches(i)))
            return !0
    }
    )
}
function Vt(t, e) {
    if (t) {
        if (e(t))
            return t;
        if (t._x_teleportBack && (t = t._x_teleportBack),
            !!t.parentElement)
            return Vt(t.parentElement, e)
    }
}
function Ib(t) {
    return zc().some(e => t.matches(e))
}
var qc = [];
function Mb(t) {
    qc.push(t)
}
function ge(t, e = De, n = () => { }
) {
    Cb(() => {
        e(t, (r, i) => {
            n(r, i),
                qc.forEach(s => s(r, i)),
                cs(r, r.attributes).forEach(s => s()),
                r._x_ignore && i()
        }
        )
    }
    )
}
function $c(t, e = De) {
    e(t, n => {
        Ac(n),
            db(n)
    }
    )
}
function Ob() {
    [["ui", "dialog", ["[x-dialog], [x-popover]"]], ["anchor", "anchor", ["[x-anchor]"]], ["sort", "sort", ["[x-sort]"]]].forEach(([e, n, r]) => {
        wb(n) || r.some(i => {
            if (document.querySelector(i))
                return ee(`found "${i}", but missing ${e} plugin`),
                    !0
        }
        )
    }
    )
}
var ci = []
    , fs = !1;
function hs(t = () => { }
) {
    return queueMicrotask(() => {
        fs || setTimeout(() => {
            ui()
        }
        )
    }
    ),
        new Promise(e => {
            ci.push(() => {
                t(),
                    e()
            }
            )
        }
        )
}
function ui() {
    for (fs = !1; ci.length;)
        ci.shift()()
}
function kb() {
    fs = !0
}
function ps(t, e) {
    return Array.isArray(e) ? zo(t, e.join(" ")) : typeof e == "object" && e !== null ? Nb(t, e) : typeof e == "function" ? ps(t, e()) : zo(t, e)
}
function zo(t, e) {
    let n = i => i.split(" ").filter(s => !t.classList.contains(s)).filter(Boolean)
        , r = i => (t.classList.add(...i),
            () => {
                t.classList.remove(...i)
            }
        );
    return e = e === !0 ? e = "" : e || "",
        r(n(e))
}
function Nb(t, e) {
    let n = l => l.split(" ").filter(Boolean)
        , r = Object.entries(e).flatMap(([l, a]) => a ? n(l) : !1).filter(Boolean)
        , i = Object.entries(e).flatMap(([l, a]) => a ? !1 : n(l)).filter(Boolean)
        , s = []
        , o = [];
    return i.forEach(l => {
        t.classList.contains(l) && (t.classList.remove(l),
            o.push(l))
    }
    ),
        r.forEach(l => {
            t.classList.contains(l) || (t.classList.add(l),
                s.push(l))
        }
        ),
        () => {
            o.forEach(l => t.classList.add(l)),
                s.forEach(l => t.classList.remove(l))
        }
}
function er(t, e) {
    return typeof e == "object" && e !== null ? Pb(t, e) : Hb(t, e)
}
function Pb(t, e) {
    let n = {};
    return Object.entries(e).forEach(([r, i]) => {
        n[r] = t.style[r],
            r.startsWith("--") || (r = Bb(r)),
            t.style.setProperty(r, i)
    }
    ),
        setTimeout(() => {
            t.style.length === 0 && t.removeAttribute("style")
        }
        ),
        () => {
            er(t, n)
        }
}
function Hb(t, e) {
    let n = t.getAttribute("style", e);
    return t.setAttribute("style", e),
        () => {
            t.setAttribute("style", n || "")
        }
}
function Bb(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function di(t, e = () => { }
) {
    let n = !1;
    return function () {
        n ? e.apply(this, arguments) : (n = !0,
            t.apply(this, arguments))
    }
}
F("transition", (t, { value: e, modifiers: n, expression: r }, { evaluate: i }) => {
    typeof r == "function" && (r = i(r)),
        r !== !1 && (!r || typeof r == "boolean" ? Fb(t, n, e) : Lb(t, r, e))
}
);
function Lb(t, e, n) {
    Yc(t, ps, ""),
        {
            enter: i => {
                t._x_transition.enter.during = i
            }
            ,
            "enter-start": i => {
                t._x_transition.enter.start = i
            }
            ,
            "enter-end": i => {
                t._x_transition.enter.end = i
            }
            ,
            leave: i => {
                t._x_transition.leave.during = i
            }
            ,
            "leave-start": i => {
                t._x_transition.leave.start = i
            }
            ,
            "leave-end": i => {
                t._x_transition.leave.end = i
            }
        }[n](e)
}
function Fb(t, e, n) {
    Yc(t, er);
    let r = !e.includes("in") && !e.includes("out") && !n
        , i = r || e.includes("in") || ["enter"].includes(n)
        , s = r || e.includes("out") || ["leave"].includes(n);
    e.includes("in") && !r && (e = e.filter((b, S) => S < e.indexOf("out"))),
        e.includes("out") && !r && (e = e.filter((b, S) => S > e.indexOf("out")));
    let o = !e.includes("opacity") && !e.includes("scale")
        , l = o || e.includes("opacity")
        , a = o || e.includes("scale")
        , u = l ? 0 : 1
        , c = a ? bt(e, "scale", 95) / 100 : 1
        , d = bt(e, "delay", 0) / 1e3
        , h = bt(e, "origin", "center")
        , f = "opacity, transform"
        , m = bt(e, "duration", 150) / 1e3
        , v = bt(e, "duration", 75) / 1e3
        , g = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i && (t._x_transition.enter.during = {
        transformOrigin: h,
        transitionDelay: `${d}s`,
        transitionProperty: f,
        transitionDuration: `${m}s`,
        transitionTimingFunction: g
    },
        t._x_transition.enter.start = {
            opacity: u,
            transform: `scale(${c})`
        },
        t._x_transition.enter.end = {
            opacity: 1,
            transform: "scale(1)"
        }),
        s && (t._x_transition.leave.during = {
            transformOrigin: h,
            transitionDelay: `${d}s`,
            transitionProperty: f,
            transitionDuration: `${v}s`,
            transitionTimingFunction: g
        },
            t._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)"
            },
            t._x_transition.leave.end = {
                opacity: u,
                transform: `scale(${c})`
            })
}
function Yc(t, e, n = {}) {
    t._x_transition || (t._x_transition = {
        enter: {
            during: n,
            start: n,
            end: n
        },
        leave: {
            during: n,
            start: n,
            end: n
        },
        in(r = () => { }
            , i = () => { }
        ) {
            fi(t, e, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, r, i)
        },
        out(r = () => { }
            , i = () => { }
        ) {
            fi(t, e, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, r, i)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (t, e, n, r) {
    const i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let s = () => i(n);
    if (e) {
        t._x_transition && (t._x_transition.enter || t._x_transition.leave) ? t._x_transition.enter && (Object.entries(t._x_transition.enter.during).length || Object.entries(t._x_transition.enter.start).length || Object.entries(t._x_transition.enter.end).length) ? t._x_transition.in(n) : s() : t._x_transition ? t._x_transition.in(n) : s();
        return
    }
    t._x_hidePromise = t._x_transition ? new Promise((o, l) => {
        t._x_transition.out(() => { }
            , () => o(r)),
            t._x_transitioning && t._x_transitioning.beforeCancel(() => l({
                isFromCancelledTransition: !0
            }))
    }
    ) : Promise.resolve(r),
        queueMicrotask(() => {
            let o = Qc(t);
            o ? (o._x_hideChildren || (o._x_hideChildren = []),
                o._x_hideChildren.push(t)) : i(() => {
                    let l = a => {
                        let u = Promise.all([a._x_hidePromise, ...(a._x_hideChildren || []).map(l)]).then(([c]) => c == null ? void 0 : c());
                        return delete a._x_hidePromise,
                            delete a._x_hideChildren,
                            u
                    }
                        ;
                    l(t).catch(a => {
                        if (!a.isFromCancelledTransition)
                            throw a
                    }
                    )
                }
                )
        }
        )
}
    ;
function Qc(t) {
    let e = t.parentNode;
    if (e)
        return e._x_hidePromise ? e : Qc(e)
}
function fi(t, e, { during: n, start: r, end: i } = {}, s = () => { }
    , o = () => { }
) {
    if (t._x_transitioning && t._x_transitioning.cancel(),
        Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(i).length === 0) {
        s(),
            o();
        return
    }
    let l, a, u;
    jb(t, {
        start() {
            l = e(t, r)
        },
        during() {
            a = e(t, n)
        },
        before: s,
        end() {
            l(),
                u = e(t, i)
        },
        after: o,
        cleanup() {
            a(),
                u()
        }
    })
}
function jb(t, e) {
    let n, r, i, s = di(() => {
        j(() => {
            n = !0,
                r || e.before(),
                i || (e.end(),
                    ui()),
                e.after(),
                t.isConnected && e.cleanup(),
                delete t._x_transitioning
        }
        )
    }
    );
    t._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o)
        },
        cancel: di(function () {
            for (; this.beforeCancels.length;)
                this.beforeCancels.shift()();
            s()
        }),
        finish: s
    },
        j(() => {
            e.start(),
                e.during()
        }
        ),
        kb(),
        requestAnimationFrame(() => {
            if (n)
                return;
            let o = Number(getComputedStyle(t).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
                , l = Number(getComputedStyle(t).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
            o === 0 && (o = Number(getComputedStyle(t).animationDuration.replace("s", "")) * 1e3),
                j(() => {
                    e.before()
                }
                ),
                r = !0,
                requestAnimationFrame(() => {
                    n || (j(() => {
                        e.end()
                    }
                    ),
                        ui(),
                        setTimeout(t._x_transitioning.finish, o + l),
                        i = !0)
                }
                )
        }
        )
}
function bt(t, e, n) {
    if (t.indexOf(e) === -1)
        return n;
    const r = t[t.indexOf(e) + 1];
    if (!r || e === "scale" && isNaN(r))
        return n;
    if (e === "duration" || e === "delay") {
        let i = r.match(/([0-9]+)ms/);
        if (i)
            return i[1]
    }
    return e === "origin" && ["top", "right", "left", "center", "bottom"].includes(t[t.indexOf(e) + 2]) ? [r, t[t.indexOf(e) + 2]].join(" ") : r
}
var Re = !1;
function Me(t, e = () => { }
) {
    return (...n) => Re ? e(...n) : t(...n)
}
function Ub(t) {
    return (...e) => Re && t(...e)
}
var Zc = [];
function tr(t) {
    Zc.push(t)
}
function zb(t, e) {
    Zc.forEach(n => n(t, e)),
        Re = !0,
        Xc(() => {
            ge(e, (n, r) => {
                r(n, () => { }
                )
            }
            )
        }
        ),
        Re = !1
}
var hi = !1;
function Wb(t, e) {
    e._x_dataStack || (e._x_dataStack = t._x_dataStack),
        Re = !0,
        hi = !0,
        Xc(() => {
            Vb(e)
        }
        ),
        Re = !1,
        hi = !1
}
function Vb(t) {
    let e = !1;
    ge(t, (r, i) => {
        De(r, (s, o) => {
            if (e && Ib(s))
                return o();
            e = !0,
                i(s, o)
        }
        )
    }
    )
}
function Xc(t) {
    let e = Xe;
    jo((n, r) => {
        let i = e(n);
        return pt(i),
            () => { }
    }
    ),
        t(),
        jo(e)
}
function Kc(t, e, n, r = []) {
    switch (t._x_bindings || (t._x_bindings = ht({})),
    t._x_bindings[e] = n,
    e = r.includes("camel") ? Kb(e) : e,
    e) {
        case "value":
            Gb(t, n);
            break;
        case "style":
            $b(t, n);
            break;
        case "class":
            qb(t, n);
            break;
        case "selected":
        case "checked":
            Yb(t, e, n);
            break;
        default:
            Jc(t, e, n);
            break
    }
}
function Gb(t, e) {
    if (t.type === "radio")
        t.attributes.value === void 0 && (t.value = e),
            window.fromModel && (typeof e == "boolean" ? t.checked = gn(t.value) === e : t.checked = Wo(t.value, e));
    else if (t.type === "checkbox")
        Number.isInteger(e) ? t.value = e : !Array.isArray(e) && typeof e != "boolean" && ![null, void 0].includes(e) ? t.value = String(e) : Array.isArray(e) ? t.checked = e.some(n => Wo(n, t.value)) : t.checked = !!e;
    else if (t.tagName === "SELECT")
        Xb(t, e);
    else {
        if (t.value === e)
            return;
        t.value = e === void 0 ? "" : e
    }
}
function qb(t, e) {
    t._x_undoAddedClasses && t._x_undoAddedClasses(),
        t._x_undoAddedClasses = ps(t, e)
}
function $b(t, e) {
    t._x_undoAddedStyles && t._x_undoAddedStyles(),
        t._x_undoAddedStyles = er(t, e)
}
function Yb(t, e, n) {
    Jc(t, e, n),
        Zb(t, e, n)
}
function Jc(t, e, n) {
    [null, void 0, !1].includes(n) && Jb(e) ? t.removeAttribute(e) : (eu(e) && (n = e),
        Qb(t, e, n))
}
function Qb(t, e, n) {
    t.getAttribute(e) != n && t.setAttribute(e, n)
}
function Zb(t, e, n) {
    t[e] !== n && (t[e] = n)
}
function Xb(t, e) {
    const n = [].concat(e).map(r => r + "");
    Array.from(t.options).forEach(r => {
        r.selected = n.includes(r.value)
    }
    )
}
function Kb(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, n) => n.toUpperCase())
}
function Wo(t, e) {
    return t == e
}
function gn(t) {
    return [1, "1", "true", "on", "yes", !0].includes(t) ? !0 : [0, "0", "false", "off", "no", !1].includes(t) ? !1 : t ? !!t : null
}
function eu(t) {
    return ["disabled", "checked", "required", "readonly", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(t)
}
function Jb(t) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(t)
}
function eE(t, e, n) {
    return t._x_bindings && t._x_bindings[e] !== void 0 ? t._x_bindings[e] : tu(t, e, n)
}
function tE(t, e, n, r = !0) {
    if (t._x_bindings && t._x_bindings[e] !== void 0)
        return t._x_bindings[e];
    if (t._x_inlineBindings && t._x_inlineBindings[e] !== void 0) {
        let i = t._x_inlineBindings[e];
        return i.extract = r,
            Tc(() => We(t, i.expression))
    }
    return tu(t, e, n)
}
function tu(t, e, n) {
    let r = t.getAttribute(e);
    return r === null ? typeof n == "function" ? n() : n : r === "" ? !0 : eu(e) ? !![e, "true"].includes(r) : r
}
function nu(t, e) {
    var n;
    return function () {
        var r = this
            , i = arguments
            , s = function () {
                n = null,
                    t.apply(r, i)
            };
        clearTimeout(n),
            n = setTimeout(s, e)
    }
}
function ru(t, e) {
    let n;
    return function () {
        let r = this
            , i = arguments;
        n || (t.apply(r, i),
            n = !0,
            setTimeout(() => n = !1, e))
    }
}
function iu({ get: t, set: e }, { get: n, set: r }) {
    let i = !0, s, o = Xe(() => {
        let l = t()
            , a = n();
        if (i)
            r(Rr(l)),
                i = !1;
        else {
            let u = JSON.stringify(l)
                , c = JSON.stringify(a);
            u !== s ? r(Rr(l)) : u !== c && e(Rr(a))
        }
        s = JSON.stringify(t()),
            JSON.stringify(n())
    }
    );
    return () => {
        pt(o)
    }
}
function Rr(t) {
    return typeof t == "object" ? JSON.parse(JSON.stringify(t)) : t
}
function nE(t) {
    (Array.isArray(t) ? t : [t]).forEach(n => n(Gt))
}
var Pe = {}
    , Vo = !1;
function rE(t, e) {
    if (Vo || (Pe = ht(Pe),
        Vo = !0),
        e === void 0)
        return Pe[t];
    Pe[t] = e,
        typeof e == "object" && e !== null && e.hasOwnProperty("init") && typeof e.init == "function" && Pe[t].init(),
        Dc(Pe[t])
}
function iE() {
    return Pe
}
var su = {};
function sE(t, e) {
    let n = typeof e != "function" ? () => e : e;
    return t instanceof Element ? ou(t, n()) : (su[t] = n,
        () => { }
    )
}
function oE(t) {
    return Object.entries(su).forEach(([e, n]) => {
        Object.defineProperty(t, e, {
            get() {
                return (...r) => n(...r)
            }
        })
    }
    ),
        t
}
function ou(t, e, n) {
    let r = [];
    for (; r.length;)
        r.pop()();
    let i = Object.entries(e).map(([o, l]) => ({
        name: o,
        value: l
    }))
        , s = Oc(i);
    return i = i.map(o => s.find(l => l.name === o.name) ? {
        name: `x-bind:${o.name}`,
        value: `"${o.value}"`
    } : o),
        cs(t, i, n).map(o => {
            r.push(o.runCleanups),
                o()
        }
        ),
        () => {
            for (; r.length;)
                r.pop()()
        }
}
var lu = {};
function lE(t, e) {
    lu[t] = e
}
function aE(t, e) {
    return Object.entries(lu).forEach(([n, r]) => {
        Object.defineProperty(t, n, {
            get() {
                return (...i) => r.bind(e)(...i)
            },
            enumerable: !1
        })
    }
    ),
        t
}
var cE = {
    get reactive() {
        return ht
    },
    get release() {
        return pt
    },
    get effect() {
        return Xe
    },
    get raw() {
        return mc
    },
    version: "3.14.1",
    flushAndStopDeferringMutations: pb,
    dontAutoEvaluateFunctions: Tc,
    disableEffectScheduling: lb,
    startObservingMutations: ss,
    stopObservingMutations: wc,
    setReactivityEngine: ab,
    onAttributeRemoved: _c,
    onAttributesAdded: Sc,
    closestDataStack: lt,
    skipDuringClone: Me,
    onlyDuringClone: Ub,
    addRootSelector: Vc,
    addInitSelector: Gc,
    interceptClone: tr,
    addScopeToNode: zt,
    deferMutations: hb,
    mapAttributes: us,
    evaluateLater: q,
    interceptInit: Mb,
    setEvaluator: bb,
    mergeProxies: Wt,
    extractProp: tE,
    findClosest: Vt,
    onElRemoved: ns,
    closestRoot: Jn,
    destroyTree: $c,
    interceptor: Rc,
    transition: fi,
    setStyles: er,
    mutateDom: j,
    directive: F,
    entangle: iu,
    throttle: ru,
    debounce: nu,
    evaluate: We,
    initTree: ge,
    nextTick: hs,
    prefixed: gt,
    prefix: Ab,
    plugin: nE,
    magic: se,
    store: rE,
    start: Tb,
    clone: Wb,
    cloneNode: zb,
    bound: eE,
    $data: Cc,
    watch: vc,
    walk: De,
    data: lE,
    bind: sE
}
    , Gt = cE;
function uE(t, e) {
    const n = Object.create(null)
        , r = t.split(",");
    for (let i = 0; i < r.length; i++)
        n[r[i]] = !0;
    return i => !!n[i]
}
var dE = Object.freeze({}), fE = Object.prototype.hasOwnProperty, nr = (t, e) => fE.call(t, e), Ve = Array.isArray, Rt = t => au(t) === "[object Map]", hE = t => typeof t == "string", gs = t => typeof t == "symbol", rr = t => t !== null && typeof t == "object", pE = Object.prototype.toString, au = t => pE.call(t), cu = t => au(t).slice(8, -1), ms = t => hE(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, gE = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
}
    , mE = gE(t => t.charAt(0).toUpperCase() + t.slice(1)), uu = (t, e) => t !== e && (t === t || e === e), pi = new WeakMap, Et = [], oe, Ge = Symbol("iterate"), gi = Symbol("Map key iterate");
function vE(t) {
    return t && t._isEffect === !0
}
function yE(t, e = dE) {
    vE(t) && (t = t.raw);
    const n = SE(t, e);
    return e.lazy || n(),
        n
}
function bE(t) {
    t.active && (du(t),
        t.options.onStop && t.options.onStop(),
        t.active = !1)
}
var EE = 0;
function SE(t, e) {
    const n = function () {
        if (!n.active)
            return t();
        if (!Et.includes(n)) {
            du(n);
            try {
                return AE(),
                    Et.push(n),
                    oe = n,
                    t()
            } finally {
                Et.pop(),
                    fu(),
                    oe = Et[Et.length - 1]
            }
        }
    };
    return n.id = EE++,
        n.allowRecurse = !!e.allowRecurse,
        n._isEffect = !0,
        n.active = !0,
        n.raw = t,
        n.deps = [],
        n.options = e,
        n
}
function du(t) {
    const { deps: e } = t;
    if (e.length) {
        for (let n = 0; n < e.length; n++)
            e[n].delete(t);
        e.length = 0
    }
}
var at = !0
    , vs = [];
function _E() {
    vs.push(at),
        at = !1
}
function AE() {
    vs.push(at),
        at = !0
}
function fu() {
    const t = vs.pop();
    at = t === void 0 ? !0 : t
}
function ne(t, e, n) {
    if (!at || oe === void 0)
        return;
    let r = pi.get(t);
    r || pi.set(t, r = new Map);
    let i = r.get(n);
    i || r.set(n, i = new Set),
        i.has(oe) || (i.add(oe),
            oe.deps.push(i),
            oe.options.onTrack && oe.options.onTrack({
                effect: oe,
                target: t,
                type: e,
                key: n
            }))
}
function xe(t, e, n, r, i, s) {
    const o = pi.get(t);
    if (!o)
        return;
    const l = new Set
        , a = c => {
            c && c.forEach(d => {
                (d !== oe || d.allowRecurse) && l.add(d)
            }
            )
        }
        ;
    if (e === "clear")
        o.forEach(a);
    else if (n === "length" && Ve(t))
        o.forEach((c, d) => {
            (d === "length" || d >= r) && a(c)
        }
        );
    else
        switch (n !== void 0 && a(o.get(n)),
        e) {
            case "add":
                Ve(t) ? ms(n) && a(o.get("length")) : (a(o.get(Ge)),
                    Rt(t) && a(o.get(gi)));
                break;
            case "delete":
                Ve(t) || (a(o.get(Ge)),
                    Rt(t) && a(o.get(gi)));
                break;
            case "set":
                Rt(t) && a(o.get(Ge));
                break
        }
    const u = c => {
        c.options.onTrigger && c.options.onTrigger({
            effect: c,
            target: t,
            key: n,
            type: e,
            newValue: r,
            oldValue: i,
            oldTarget: s
        }),
            c.options.scheduler ? c.options.scheduler(c) : c()
    }
        ;
    l.forEach(u)
}
var wE = uE("__proto__,__v_isRef,__isVue")
    , hu = new Set(Object.getOwnPropertyNames(Symbol).map(t => Symbol[t]).filter(gs))
    , CE = pu()
    , DE = pu(!0)
    , Go = RE();
function RE() {
    const t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
        t[e] = function (...n) {
            const r = H(this);
            for (let s = 0, o = this.length; s < o; s++)
                ne(r, "get", s + "");
            const i = r[e](...n);
            return i === -1 || i === !1 ? r[e](...n.map(H)) : i
        }
    }
    ),
        ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
            t[e] = function (...n) {
                _E();
                const r = H(this)[e].apply(this, n);
                return fu(),
                    r
            }
        }
        ),
        t
}
function pu(t = !1, e = !1) {
    return function (r, i, s) {
        if (i === "__v_isReactive")
            return !t;
        if (i === "__v_isReadonly")
            return t;
        if (i === "__v_raw" && s === (t ? e ? UE : yu : e ? jE : vu).get(r))
            return r;
        const o = Ve(r);
        if (!t && o && nr(Go, i))
            return Reflect.get(Go, i, s);
        const l = Reflect.get(r, i, s);
        return (gs(i) ? hu.has(i) : wE(i)) || (t || ne(r, "get", i),
            e) ? l : mi(l) ? !o || !ms(i) ? l.value : l : rr(l) ? t ? bu(l) : Ss(l) : l
    }
}
var xE = TE();
function TE(t = !1) {
    return function (n, r, i, s) {
        let o = n[r];
        if (!t && (i = H(i),
            o = H(o),
            !Ve(n) && mi(o) && !mi(i)))
            return o.value = i,
                !0;
        const l = Ve(n) && ms(r) ? Number(r) < n.length : nr(n, r)
            , a = Reflect.set(n, r, i, s);
        return n === H(s) && (l ? uu(i, o) && xe(n, "set", r, i, o) : xe(n, "add", r, i)),
            a
    }
}
function IE(t, e) {
    const n = nr(t, e)
        , r = t[e]
        , i = Reflect.deleteProperty(t, e);
    return i && n && xe(t, "delete", e, void 0, r),
        i
}
function ME(t, e) {
    const n = Reflect.has(t, e);
    return (!gs(e) || !hu.has(e)) && ne(t, "has", e),
        n
}
function OE(t) {
    return ne(t, "iterate", Ve(t) ? "length" : Ge),
        Reflect.ownKeys(t)
}
var kE = {
    get: CE,
    set: xE,
    deleteProperty: IE,
    has: ME,
    ownKeys: OE
}
    , NE = {
        get: DE,
        set(t, e) {
            return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, t),
                !0
        },
        deleteProperty(t, e) {
            return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, t),
                !0
        }
    }
    , ys = t => rr(t) ? Ss(t) : t
    , bs = t => rr(t) ? bu(t) : t
    , Es = t => t
    , ir = t => Reflect.getPrototypeOf(t);
function en(t, e, n = !1, r = !1) {
    t = t.__v_raw;
    const i = H(t)
        , s = H(e);
    e !== s && !n && ne(i, "get", e),
        !n && ne(i, "get", s);
    const { has: o } = ir(i)
        , l = r ? Es : n ? bs : ys;
    if (o.call(i, e))
        return l(t.get(e));
    if (o.call(i, s))
        return l(t.get(s));
    t !== i && t.get(e)
}
function tn(t, e = !1) {
    const n = this.__v_raw
        , r = H(n)
        , i = H(t);
    return t !== i && !e && ne(r, "has", t),
        !e && ne(r, "has", i),
        t === i ? n.has(t) : n.has(t) || n.has(i)
}
function nn(t, e = !1) {
    return t = t.__v_raw,
        !e && ne(H(t), "iterate", Ge),
        Reflect.get(t, "size", t)
}
function qo(t) {
    t = H(t);
    const e = H(this);
    return ir(e).has.call(e, t) || (e.add(t),
        xe(e, "add", t, t)),
        this
}
function $o(t, e) {
    e = H(e);
    const n = H(this)
        , { has: r, get: i } = ir(n);
    let s = r.call(n, t);
    s ? mu(n, r, t) : (t = H(t),
        s = r.call(n, t));
    const o = i.call(n, t);
    return n.set(t, e),
        s ? uu(e, o) && xe(n, "set", t, e, o) : xe(n, "add", t, e),
        this
}
function Yo(t) {
    const e = H(this)
        , { has: n, get: r } = ir(e);
    let i = n.call(e, t);
    i ? mu(e, n, t) : (t = H(t),
        i = n.call(e, t));
    const s = r ? r.call(e, t) : void 0
        , o = e.delete(t);
    return i && xe(e, "delete", t, void 0, s),
        o
}
function Qo() {
    const t = H(this)
        , e = t.size !== 0
        , n = Rt(t) ? new Map(t) : new Set(t)
        , r = t.clear();
    return e && xe(t, "clear", void 0, void 0, n),
        r
}
function rn(t, e) {
    return function (r, i) {
        const s = this
            , o = s.__v_raw
            , l = H(o)
            , a = e ? Es : t ? bs : ys;
        return !t && ne(l, "iterate", Ge),
            o.forEach((u, c) => r.call(i, a(u), a(c), s))
    }
}
function sn(t, e, n) {
    return function (...r) {
        const i = this.__v_raw
            , s = H(i)
            , o = Rt(s)
            , l = t === "entries" || t === Symbol.iterator && o
            , a = t === "keys" && o
            , u = i[t](...r)
            , c = n ? Es : e ? bs : ys;
        return !e && ne(s, "iterate", a ? gi : Ge),
        {
            next() {
                const { value: d, done: h } = u.next();
                return h ? {
                    value: d,
                    done: h
                } : {
                    value: l ? [c(d[0]), c(d[1])] : c(d),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function ye(t) {
    return function (...e) {
        {
            const n = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(`${mE(t)} operation ${n}failed: target is readonly.`, H(this))
        }
        return t === "delete" ? !1 : this
    }
}
function PE() {
    const t = {
        get(s) {
            return en(this, s)
        },
        get size() {
            return nn(this)
        },
        has: tn,
        add: qo,
        set: $o,
        delete: Yo,
        clear: Qo,
        forEach: rn(!1, !1)
    }
        , e = {
            get(s) {
                return en(this, s, !1, !0)
            },
            get size() {
                return nn(this)
            },
            has: tn,
            add: qo,
            set: $o,
            delete: Yo,
            clear: Qo,
            forEach: rn(!1, !0)
        }
        , n = {
            get(s) {
                return en(this, s, !0)
            },
            get size() {
                return nn(this, !0)
            },
            has(s) {
                return tn.call(this, s, !0)
            },
            add: ye("add"),
            set: ye("set"),
            delete: ye("delete"),
            clear: ye("clear"),
            forEach: rn(!0, !1)
        }
        , r = {
            get(s) {
                return en(this, s, !0, !0)
            },
            get size() {
                return nn(this, !0)
            },
            has(s) {
                return tn.call(this, s, !0)
            },
            add: ye("add"),
            set: ye("set"),
            delete: ye("delete"),
            clear: ye("clear"),
            forEach: rn(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        t[s] = sn(s, !1, !1),
            n[s] = sn(s, !0, !1),
            e[s] = sn(s, !1, !0),
            r[s] = sn(s, !0, !0)
    }
    ),
        [t, n, e, r]
}
var [HE, BE, aS, cS] = PE();
function gu(t, e) {
    const n = t ? BE : HE;
    return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(nr(n, i) && i in r ? n : r, i, s)
}
var LE = {
    get: gu(!1)
}
    , FE = {
        get: gu(!0)
    };
function mu(t, e, n) {
    const r = H(n);
    if (r !== n && e.call(t, r)) {
        const i = cu(t);
        console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var vu = new WeakMap
    , jE = new WeakMap
    , yu = new WeakMap
    , UE = new WeakMap;
function zE(t) {
    switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}
function WE(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : zE(cu(t))
}
function Ss(t) {
    return t && t.__v_isReadonly ? t : Eu(t, !1, kE, LE, vu)
}
function bu(t) {
    return Eu(t, !0, NE, FE, yu)
}
function Eu(t, e, n, r, i) {
    if (!rr(t))
        return console.warn(`value cannot be made reactive: ${String(t)}`),
            t;
    if (t.__v_raw && !(e && t.__v_isReactive))
        return t;
    const s = i.get(t);
    if (s)
        return s;
    const o = WE(t);
    if (o === 0)
        return t;
    const l = new Proxy(t, o === 2 ? r : n);
    return i.set(t, l),
        l
}
function H(t) {
    return t && H(t.__v_raw) || t
}
function mi(t) {
    return !!(t && t.__v_isRef === !0)
}
se("nextTick", () => hs);
se("dispatch", t => Dt.bind(Dt, t));
se("watch", (t, { evaluateLater: e, cleanup: n }) => (r, i) => {
    let s = e(r)
        , l = vc(() => {
            let a;
            return s(u => a = u),
                a
        }
            , i);
    n(l)
}
);
se("store", iE);
se("data", t => Cc(t));
se("root", t => Jn(t));
se("refs", t => (t._x_refs_proxy || (t._x_refs_proxy = Wt(VE(t))),
    t._x_refs_proxy));
function VE(t) {
    let e = [];
    return Vt(t, n => {
        n._x_refs && e.push(n._x_refs)
    }
    ),
        e
}
var xr = {};
function Su(t) {
    return xr[t] || (xr[t] = 0),
        ++xr[t]
}
function GE(t, e) {
    return Vt(t, n => {
        if (n._x_ids && n._x_ids[e])
            return !0
    }
    )
}
function qE(t, e) {
    t._x_ids || (t._x_ids = {}),
        t._x_ids[e] || (t._x_ids[e] = Su(e))
}
se("id", (t, { cleanup: e }) => (n, r = null) => {
    let i = `${n}${r ? `-${r}` : ""}`;
    return $E(t, i, e, () => {
        let s = GE(t, n)
            , o = s ? s._x_ids[n] : Su(n);
        return r ? `${n}-${o}-${r}` : `${n}-${o}`
    }
    )
}
);
tr((t, e) => {
    t._x_id && (e._x_id = t._x_id)
}
);
function $E(t, e, n, r) {
    if (t._x_id || (t._x_id = {}),
        t._x_id[e])
        return t._x_id[e];
    let i = r();
    return t._x_id[e] = i,
        n(() => {
            delete t._x_id[e]
        }
        ),
        i
}
se("el", t => t);
_u("Focus", "focus", "focus");
_u("Persist", "persist", "persist");
function _u(t, e, n) {
    se(e, r => ee(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`, r))
}
F("modelable", (t, { expression: e }, { effect: n, evaluateLater: r, cleanup: i }) => {
    let s = r(e)
        , o = () => {
            let c;
            return s(d => c = d),
                c
        }
        , l = r(`${e} = __placeholder`)
        , a = c => l(() => { }
            , {
                scope: {
                    __placeholder: c
                }
            })
        , u = o();
    a(u),
        queueMicrotask(() => {
            if (!t._x_model)
                return;
            t._x_removeModelListeners.default();
            let c = t._x_model.get
                , d = t._x_model.set
                , h = iu({
                    get() {
                        return c()
                    },
                    set(f) {
                        d(f)
                    }
                }, {
                    get() {
                        return o()
                    },
                    set(f) {
                        a(f)
                    }
                });
            i(h)
        }
        )
}
);
F("teleport", (t, { modifiers: e, expression: n }, { cleanup: r }) => {
    t.tagName.toLowerCase() !== "template" && ee("x-teleport can only be used on a <template> tag", t);
    let i = Zo(n)
        , s = t.content.cloneNode(!0).firstElementChild;
    t._x_teleport = s,
        s._x_teleportBack = t,
        t.setAttribute("data-teleport-template", !0),
        s.setAttribute("data-teleport-target", !0),
        t._x_forwardEvents && t._x_forwardEvents.forEach(l => {
            s.addEventListener(l, a => {
                a.stopPropagation(),
                    t.dispatchEvent(new a.constructor(a.type, a))
            }
            )
        }
        ),
        zt(s, {}, t);
    let o = (l, a, u) => {
        u.includes("prepend") ? a.parentNode.insertBefore(l, a) : u.includes("append") ? a.parentNode.insertBefore(l, a.nextSibling) : a.appendChild(l)
    }
        ;
    j(() => {
        o(s, i, e),
            Me(() => {
                ge(s),
                    s._x_ignore = !0
            }
            )()
    }
    ),
        t._x_teleportPutBack = () => {
            let l = Zo(n);
            j(() => {
                o(t._x_teleport, l, e)
            }
            )
        }
        ,
        r(() => s.remove())
}
);
var YE = document.createElement("div");
function Zo(t) {
    let e = Me(() => document.querySelector(t), () => YE)();
    return e || ee(`Cannot find x-teleport element for selector: "${t}"`),
        e
}
var Au = () => { }
    ;
Au.inline = (t, { modifiers: e }, { cleanup: n }) => {
    e.includes("self") ? t._x_ignoreSelf = !0 : t._x_ignore = !0,
        n(() => {
            e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore
        }
        )
}
    ;
F("ignore", Au);
F("effect", Me((t, { expression: e }, { effect: n }) => {
    n(q(t, e))
}
));
function vi(t, e, n, r) {
    let i = t
        , s = a => r(a)
        , o = {}
        , l = (a, u) => c => u(a, c);
    if (n.includes("dot") && (e = QE(e)),
        n.includes("camel") && (e = ZE(e)),
        n.includes("passive") && (o.passive = !0),
        n.includes("capture") && (o.capture = !0),
        n.includes("window") && (i = window),
        n.includes("document") && (i = document),
        n.includes("debounce")) {
        let a = n[n.indexOf("debounce") + 1] || "invalid-wait"
            , u = Bn(a.split("ms")[0]) ? Number(a.split("ms")[0]) : 250;
        s = nu(s, u)
    }
    if (n.includes("throttle")) {
        let a = n[n.indexOf("throttle") + 1] || "invalid-wait"
            , u = Bn(a.split("ms")[0]) ? Number(a.split("ms")[0]) : 250;
        s = ru(s, u)
    }
    return n.includes("prevent") && (s = l(s, (a, u) => {
        u.preventDefault(),
            a(u)
    }
    )),
        n.includes("stop") && (s = l(s, (a, u) => {
            u.stopPropagation(),
                a(u)
        }
        )),
        n.includes("once") && (s = l(s, (a, u) => {
            a(u),
                i.removeEventListener(e, s, o)
        }
        )),
        (n.includes("away") || n.includes("outside")) && (i = document,
            s = l(s, (a, u) => {
                t.contains(u.target) || u.target.isConnected !== !1 && (t.offsetWidth < 1 && t.offsetHeight < 1 || t._x_isShown !== !1 && a(u))
            }
            )),
        n.includes("self") && (s = l(s, (a, u) => {
            u.target === t && a(u)
        }
        )),
        (KE(e) || wu(e)) && (s = l(s, (a, u) => {
            JE(u, n) || a(u)
        }
        )),
        i.addEventListener(e, s, o),
        () => {
            i.removeEventListener(e, s, o)
        }
}
function QE(t) {
    return t.replace(/-/g, ".")
}
function ZE(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, n) => n.toUpperCase())
}
function Bn(t) {
    return !Array.isArray(t) && !isNaN(t)
}
function XE(t) {
    return [" ", "_"].includes(t) ? t : t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function KE(t) {
    return ["keydown", "keyup"].includes(t)
}
function wu(t) {
    return ["contextmenu", "click", "mouse"].some(e => t.includes(e))
}
function JE(t, e) {
    let n = e.filter(s => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(s));
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, Bn((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, Bn((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.length === 0 || n.length === 1 && Xo(t.key).includes(n[0]))
        return !1;
    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(s => n.includes(s));
    return n = n.filter(s => !i.includes(s)),
        !(i.length > 0 && i.filter(o => ((o === "cmd" || o === "super") && (o = "meta"),
            t[`${o}Key`])).length === i.length && (wu(t.type) || Xo(t.key).includes(n[0])))
}
function Xo(t) {
    if (!t)
        return [];
    t = XE(t);
    let e = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        comma: ",",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return e[t] = t,
        Object.keys(e).map(n => {
            if (e[n] === t)
                return n
        }
        ).filter(n => n)
}
F("model", (t, { modifiers: e, expression: n }, { effect: r, cleanup: i }) => {
    let s = t;
    e.includes("parent") && (s = t.parentNode);
    let o = q(s, n), l;
    typeof n == "string" ? l = q(s, `${n} = __placeholder`) : typeof n == "function" && typeof n() == "string" ? l = q(s, `${n()} = __placeholder`) : l = () => { }
        ;
    let a = () => {
        let h;
        return o(f => h = f),
            Ko(h) ? h.get() : h
    }
        , u = h => {
            let f;
            o(m => f = m),
                Ko(f) ? f.set(h) : l(() => { }
                    , {
                        scope: {
                            __placeholder: h
                        }
                    })
        }
        ;
    typeof n == "string" && t.type === "radio" && j(() => {
        t.hasAttribute("name") || t.setAttribute("name", n)
    }
    );
    var c = t.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(t.type) || e.includes("lazy") ? "change" : "input";
    let d = Re ? () => { }
        : vi(t, c, e, h => {
            u(Tr(t, e, h, a()))
        }
        );
    if (e.includes("fill") && ([void 0, null, ""].includes(a()) || t.type === "checkbox" && Array.isArray(a()) || t.tagName.toLowerCase() === "select" && t.multiple) && u(Tr(t, e, {
        target: t
    }, a())),
        t._x_removeModelListeners || (t._x_removeModelListeners = {}),
        t._x_removeModelListeners.default = d,
        i(() => t._x_removeModelListeners.default()),
        t.form) {
        let h = vi(t.form, "reset", [], f => {
            hs(() => t._x_model && t._x_model.set(Tr(t, e, {
                target: t
            }, a())))
        }
        );
        i(() => h())
    }
    t._x_model = {
        get() {
            return a()
        },
        set(h) {
            u(h)
        }
    },
        t._x_forceModelUpdate = h => {
            h === void 0 && typeof n == "string" && n.match(/\./) && (h = ""),
                window.fromModel = !0,
                j(() => Kc(t, "value", h)),
                delete window.fromModel
        }
        ,
        r(() => {
            let h = a();
            e.includes("unintrusive") && document.activeElement.isSameNode(t) || t._x_forceModelUpdate(h)
        }
        )
}
);
function Tr(t, e, n, r) {
    return j(() => {
        if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail !== null && n.detail !== void 0 ? n.detail : n.target.value;
        if (t.type === "checkbox")
            if (Array.isArray(r)) {
                let i = null;
                return e.includes("number") ? i = Ir(n.target.value) : e.includes("boolean") ? i = gn(n.target.value) : i = n.target.value,
                    n.target.checked ? r.includes(i) ? r : r.concat([i]) : r.filter(s => !eS(s, i))
            } else
                return n.target.checked;
        else {
            if (t.tagName.toLowerCase() === "select" && t.multiple)
                return e.includes("number") ? Array.from(n.target.selectedOptions).map(i => {
                    let s = i.value || i.text;
                    return Ir(s)
                }
                ) : e.includes("boolean") ? Array.from(n.target.selectedOptions).map(i => {
                    let s = i.value || i.text;
                    return gn(s)
                }
                ) : Array.from(n.target.selectedOptions).map(i => i.value || i.text);
            {
                let i;
                return t.type === "radio" ? n.target.checked ? i = n.target.value : i = r : i = n.target.value,
                    e.includes("number") ? Ir(i) : e.includes("boolean") ? gn(i) : e.includes("trim") ? i.trim() : i
            }
        }
    }
    )
}
function Ir(t) {
    let e = t ? parseFloat(t) : null;
    return tS(e) ? e : t
}
function eS(t, e) {
    return t == e
}
function tS(t) {
    return !Array.isArray(t) && !isNaN(t)
}
function Ko(t) {
    return t !== null && typeof t == "object" && typeof t.get == "function" && typeof t.set == "function"
}
F("cloak", t => queueMicrotask(() => j(() => t.removeAttribute(gt("cloak")))));
Gc(() => `[${gt("init")}]`);
F("init", Me((t, { expression: e }, { evaluate: n }) => typeof e == "string" ? !!e.trim() && n(e, {}, !1) : n(e, {}, !1)));
F("text", (t, { expression: e }, { effect: n, evaluateLater: r }) => {
    let i = r(e);
    n(() => {
        i(s => {
            j(() => {
                t.textContent = s
            }
            )
        }
        )
    }
    )
}
);
F("html", (t, { expression: e }, { effect: n, evaluateLater: r }) => {
    let i = r(e);
    n(() => {
        i(s => {
            j(() => {
                t.innerHTML = s,
                    t._x_ignoreSelf = !0,
                    ge(t),
                    delete t._x_ignoreSelf
            }
            )
        }
        )
    }
    )
}
);
us(Pc(":", Hc(gt("bind:"))));
var Cu = (t, { value: e, modifiers: n, expression: r, original: i }, { effect: s, cleanup: o }) => {
    if (!e) {
        let a = {};
        oE(a),
            q(t, r)(c => {
                ou(t, c, i)
            }
                , {
                    scope: a
                });
        return
    }
    if (e === "key")
        return nS(t, r);
    if (t._x_inlineBindings && t._x_inlineBindings[e] && t._x_inlineBindings[e].extract)
        return;
    let l = q(t, r);
    s(() => l(a => {
        a === void 0 && typeof r == "string" && r.match(/\./) && (a = ""),
            j(() => Kc(t, e, a, n))
    }
    )),
        o(() => {
            t._x_undoAddedClasses && t._x_undoAddedClasses(),
                t._x_undoAddedStyles && t._x_undoAddedStyles()
        }
        )
}
    ;
Cu.inline = (t, { value: e, modifiers: n, expression: r }) => {
    e && (t._x_inlineBindings || (t._x_inlineBindings = {}),
        t._x_inlineBindings[e] = {
            expression: r,
            extract: !1
        })
}
    ;
F("bind", Cu);
function nS(t, e) {
    t._x_keyExpression = e
}
Vc(() => `[${gt("data")}]`);
F("data", (t, { expression: e }, { cleanup: n }) => {
    if (rS(t))
        return;
    e = e === "" ? "{}" : e;
    let r = {};
    oi(r, t);
    let i = {};
    aE(i, r);
    let s = We(t, e, {
        scope: i
    });
    (s === void 0 || s === !0) && (s = {}),
        oi(s, t);
    let o = ht(s);
    Dc(o);
    let l = zt(t, o);
    o.init && We(t, o.init),
        n(() => {
            o.destroy && We(t, o.destroy),
                l()
        }
        )
}
);
tr((t, e) => {
    t._x_dataStack && (e._x_dataStack = t._x_dataStack,
        e.setAttribute("data-has-alpine-state", !0))
}
);
function rS(t) {
    return Re ? hi ? !0 : t.hasAttribute("data-has-alpine-state") : !1
}
F("show", (t, { modifiers: e, expression: n }, { effect: r }) => {
    let i = q(t, n);
    t._x_doHide || (t._x_doHide = () => {
        j(() => {
            t.style.setProperty("display", "none", e.includes("important") ? "important" : void 0)
        }
        )
    }
    ),
        t._x_doShow || (t._x_doShow = () => {
            j(() => {
                t.style.length === 1 && t.style.display === "none" ? t.removeAttribute("style") : t.style.removeProperty("display")
            }
            )
        }
        );
    let s = () => {
        t._x_doHide(),
            t._x_isShown = !1
    }
        , o = () => {
            t._x_doShow(),
                t._x_isShown = !0
        }
        , l = () => setTimeout(o), a = di(d => d ? o() : s(), d => {
            typeof t._x_toggleAndCascadeWithTransitions == "function" ? t._x_toggleAndCascadeWithTransitions(t, d, o, s) : d ? l() : s()
        }
        ), u, c = !0;
    r(() => i(d => {
        !c && d === u || (e.includes("immediate") && (d ? l() : s()),
            a(d),
            u = d,
            c = !1)
    }
    ))
}
);
F("for", (t, { expression: e }, { effect: n, cleanup: r }) => {
    let i = sS(e)
        , s = q(t, i.items)
        , o = q(t, t._x_keyExpression || "index");
    t._x_prevKeys = [],
        t._x_lookup = {},
        n(() => iS(t, i, s, o)),
        r(() => {
            Object.values(t._x_lookup).forEach(l => l.remove()),
                delete t._x_prevKeys,
                delete t._x_lookup
        }
        )
}
);
function iS(t, e, n, r) {
    let i = o => typeof o == "object" && !Array.isArray(o)
        , s = t;
    n(o => {
        oS(o) && o >= 0 && (o = Array.from(Array(o).keys(), g => g + 1)),
            o === void 0 && (o = []);
        let l = t._x_lookup
            , a = t._x_prevKeys
            , u = []
            , c = [];
        if (i(o))
            o = Object.entries(o).map(([g, b]) => {
                let S = Jo(e, b, g, o);
                r(_ => {
                    c.includes(_) && ee("Duplicate key on x-for", t),
                        c.push(_)
                }
                    , {
                        scope: {
                            index: g,
                            ...S
                        }
                    }),
                    u.push(S)
            }
            );
        else
            for (let g = 0; g < o.length; g++) {
                let b = Jo(e, o[g], g, o);
                r(S => {
                    c.includes(S) && ee("Duplicate key on x-for", t),
                        c.push(S)
                }
                    , {
                        scope: {
                            index: g,
                            ...b
                        }
                    }),
                    u.push(b)
            }
        let d = []
            , h = []
            , f = []
            , m = [];
        for (let g = 0; g < a.length; g++) {
            let b = a[g];
            c.indexOf(b) === -1 && f.push(b)
        }
        a = a.filter(g => !f.includes(g));
        let v = "template";
        for (let g = 0; g < c.length; g++) {
            let b = c[g]
                , S = a.indexOf(b);
            if (S === -1)
                a.splice(g, 0, b),
                    d.push([v, g]);
            else if (S !== g) {
                let _ = a.splice(g, 1)[0]
                    , A = a.splice(S - 1, 1)[0];
                a.splice(g, 0, A),
                    a.splice(S, 0, _),
                    h.push([_, A])
            } else
                m.push(b);
            v = b
        }
        for (let g = 0; g < f.length; g++) {
            let b = f[g];
            l[b]._x_effects && l[b]._x_effects.forEach(gc),
                l[b].remove(),
                l[b] = null,
                delete l[b]
        }
        for (let g = 0; g < h.length; g++) {
            let [b, S] = h[g]
                , _ = l[b]
                , A = l[S]
                , D = document.createElement("div");
            j(() => {
                A || ee('x-for ":key" is undefined or invalid', s, S, l),
                    A.after(D),
                    _.after(A),
                    A._x_currentIfEl && A.after(A._x_currentIfEl),
                    D.before(_),
                    _._x_currentIfEl && _.after(_._x_currentIfEl),
                    D.remove()
            }
            ),
                A._x_refreshXForScope(u[c.indexOf(S)])
        }
        for (let g = 0; g < d.length; g++) {
            let [b, S] = d[g]
                , _ = b === "template" ? s : l[b];
            _._x_currentIfEl && (_ = _._x_currentIfEl);
            let A = u[S]
                , D = c[S]
                , R = document.importNode(s.content, !0).firstElementChild
                , I = ht(A);
            zt(R, I, s),
                R._x_refreshXForScope = T => {
                    Object.entries(T).forEach(([Z, Oe]) => {
                        I[Z] = Oe
                    }
                    )
                }
                ,
                j(() => {
                    _.after(R),
                        Me(() => ge(R))()
                }
                ),
                typeof D == "object" && ee("x-for key cannot be an object, it must be a string or an integer", s),
                l[D] = R
        }
        for (let g = 0; g < m.length; g++)
            l[m[g]]._x_refreshXForScope(u[c.indexOf(m[g])]);
        s._x_prevKeys = c
    }
    )
}
function sS(t) {
    let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
        , n = /^\s*\(|\)\s*$/g
        , r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
        , i = t.match(r);
    if (!i)
        return;
    let s = {};
    s.items = i[2].trim();
    let o = i[1].replace(n, "").trim()
        , l = o.match(e);
    return l ? (s.item = o.replace(e, "").trim(),
        s.index = l[1].trim(),
        l[2] && (s.collection = l[2].trim())) : s.item = o,
        s
}
function Jo(t, e, n, r) {
    let i = {};
    return /^\[.*\]$/.test(t.item) && Array.isArray(e) ? t.item.replace("[", "").replace("]", "").split(",").map(o => o.trim()).forEach((o, l) => {
        i[o] = e[l]
    }
    ) : /^\{.*\}$/.test(t.item) && !Array.isArray(e) && typeof e == "object" ? t.item.replace("{", "").replace("}", "").split(",").map(o => o.trim()).forEach(o => {
        i[o] = e[o]
    }
    ) : i[t.item] = e,
        t.index && (i[t.index] = n),
        t.collection && (i[t.collection] = r),
        i
}
function oS(t) {
    return !Array.isArray(t) && !isNaN(t)
}
function Du() { }
Du.inline = (t, { expression: e }, { cleanup: n }) => {
    let r = Jn(t);
    r._x_refs || (r._x_refs = {}),
        r._x_refs[e] = t,
        n(() => delete r._x_refs[e])
}
    ;
F("ref", Du);
F("if", (t, { expression: e }, { effect: n, cleanup: r }) => {
    t.tagName.toLowerCase() !== "template" && ee("x-if can only be used on a <template> tag", t);
    let i = q(t, e)
        , s = () => {
            if (t._x_currentIfEl)
                return t._x_currentIfEl;
            let l = t.content.cloneNode(!0).firstElementChild;
            return zt(l, {}, t),
                j(() => {
                    t.after(l),
                        Me(() => ge(l))()
                }
                ),
                t._x_currentIfEl = l,
                t._x_undoIf = () => {
                    De(l, a => {
                        a._x_effects && a._x_effects.forEach(gc)
                    }
                    ),
                        l.remove(),
                        delete t._x_currentIfEl
                }
                ,
                l
        }
        , o = () => {
            t._x_undoIf && (t._x_undoIf(),
                delete t._x_undoIf)
        }
        ;
    n(() => i(l => {
        l ? s() : o()
    }
    )),
        r(() => t._x_undoIf && t._x_undoIf())
}
);
F("id", (t, { expression: e }, { evaluate: n }) => {
    n(e).forEach(i => qE(t, i))
}
);
tr((t, e) => {
    t._x_ids && (e._x_ids = t._x_ids)
}
);
us(Pc("@", Hc(gt("on:"))));
F("on", Me((t, { value: e, modifiers: n, expression: r }, { cleanup: i }) => {
    let s = r ? q(t, r) : () => { }
        ;
    t.tagName.toLowerCase() === "template" && (t._x_forwardEvents || (t._x_forwardEvents = []),
        t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
    let o = vi(t, e, n, l => {
        s(() => { }
            , {
                scope: {
                    $event: l
                },
                params: [l]
            })
    }
    );
    i(() => o())
}
));
sr("Collapse", "collapse", "collapse");
sr("Intersect", "intersect", "intersect");
sr("Focus", "trap", "focus");
sr("Mask", "mask", "mask");
function sr(t, e, n) {
    F(e, r => ee(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`, r))
}
Gt.setEvaluator(Mc);
Gt.setReactivityEngine({
    reactive: Ss,
    effect: yE,
    release: bE,
    raw: H
});
var lS = Gt
    , Ru = lS;
window.Alpine = Ru;
Ru.start();
