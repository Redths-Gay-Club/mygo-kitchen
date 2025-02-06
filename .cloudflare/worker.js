var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name3 in all)
    __defProp(target, name3, { get: all[name3], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .svelte-kit/output/server/chunks/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b2) {
  return a != a ? b2 == b2 : a !== b2 || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
var is_array, index_of, array_from, define_property, get_descriptor, noop;
var init_equality = __esm({
  ".svelte-kit/output/server/chunks/equality.js"() {
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    noop = () => {
    };
  }
});

// node_modules/clsx/dist/clsx.mjs
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
  }
});

// .svelte-kit/output/server/chunks/index2.js
function lifecycle_outside_component(name3) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function getContext(key2) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context2) {
  get_or_init_context_map().set(key2, context2);
  return context2;
}
function get_or_init_context_map(name3) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component5 = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component5.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component5.p;
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function copy_payload({ out, css, head }) {
  return {
    out,
    css: new Set(css),
    head: {
      title: head.title,
      out: head.out
    }
  };
}
function assign_payload(p1, p2) {
  p1.out = p2.out;
  p1.head = p2.head;
}
function render(component5, options2 = {}) {
  const payload = { out: "", css: /* @__PURE__ */ new Set(), head: { title: "", out: "" } };
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options2.context) {
    push();
    current_component.c = options2.context;
  }
  component5(payload, options2.props ?? {}, {}, {});
  if (options2.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head = payload.head.out + payload.head.title;
  for (const { hash: hash2, code } of payload.css) {
    head += `<style id="${hash2}">${code}</style>`;
  }
  return {
    head,
    html: payload.out,
    body: payload.out
  };
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function bind_props(props_parent, props_now) {
  for (const key2 in props_now) {
    const initial_value = props_parent[key2];
    const value = props_now[key2];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key2)?.set) {
      props_parent[key2] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
var HYDRATION_START, HYDRATION_END, HYDRATION_ERROR, current_component, BLOCK_OPEN, BLOCK_CLOSE, on_destroy;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_clsx();
    HYDRATION_START = "[";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    current_component = null;
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    on_destroy = [];
  }
});

// .svelte-kit/output/server/chunks/index.js
function error(status, body2) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  throw new HttpError(status, body2);
}
function json(data, init2) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", encoder.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
function text(body2, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = encoder.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
var HttpError, Redirect, SvelteKitError, ActionFailure, encoder;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body2) {
        this.status = status;
        if (typeof body2 === "string") {
          this.body = { message: body2 };
        } else if (body2) {
          this.body = body2;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message) {
        super(message);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update, subscribe };
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, subscriber_queue, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    init_equality();
    init_clsx();
    internal = new URL("sveltekit-internal://");
    subscriber_queue = [];
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index5 = 0;
      while (index5 < str.length) {
        var eqIdx = str.indexOf("=", index5);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index5);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index5 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index5, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index5 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name3, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name3)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name3 + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name3 = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name: name3,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else if (key2 === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name3 = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name3 = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name: name3, value };
    }
    function parse2(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div id="outer" class="svelte-t7lx5u"><div id="inner" class="svelte-t7lx5u">`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
}
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_clsx();
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    imports = ["_app/immutable/nodes/0.16XzfvU1.js", "_app/immutable/chunks/DVkC9yNa.js", "_app/immutable/chunks/DsNwAXZ1.js"];
    stylesheets = ["_app/immutable/assets/0.Bh1CKRff.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/chunks/escaping.js
function escape_html2(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
var ATTR_REGEX, CONTENT_REGEX;
var init_escaping = __esm({
  ".svelte-kit/output/server/chunks/escaping.js"() {
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
  }
});

// .svelte-kit/output/server/chunks/client.js
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
function get2(key2, parse2 = JSON.parse) {
  try {
    return parse2(sessionStorage[key2]);
  } catch {
  }
}
function goto(url, opts = {}) {
  {
    throw new Error("Cannot call goto(...) on the server");
  }
}
var SNAPSHOT_KEY, SCROLL_KEY, is_legacy, stores;
var init_client = __esm({
  ".svelte-kit/output/server/chunks/client.js"() {
    init_clsx();
    init_exports();
    init_equality();
    SNAPSHOT_KEY = "sveltekit:snapshot";
    SCROLL_KEY = "sveltekit:scroll";
    is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
    if (is_legacy) {
      ({
        data: {},
        form: null,
        error: null,
        params: {},
        route: { id: null },
        state: {},
        status: -1,
        url: new URL("https://example.com")
      });
    }
    get2(SCROLL_KEY) ?? {};
    get2(SNAPSHOT_KEY) ?? {};
    stores = {
      updated: /* @__PURE__ */ create_updated_store()
    };
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function context() {
  return getContext("__request__");
}
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html2(page.status)}</h1> <p>${escape_html2(page.error?.message)}</p>`;
  pop();
}
var page$1, page;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_escaping();
    init_clsx();
    init_index2();
    init_client();
    ({
      check: stores.updated.check
    });
    page$1 = {
      get error() {
        return context().page.error;
      },
      get status() {
        return context().page.status;
      }
    };
    page = page$1;
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    imports2 = ["_app/immutable/nodes/1.Dht1a6Xq.js", "_app/immutable/chunks/DVkC9yNa.js", "_app/immutable/chunks/DsNwAXZ1.js", "_app/immutable/chunks/znlR3yX-.js", "_app/immutable/chunks/Be6DEuNs.js", "_app/immutable/chunks/BKFMAIYu.js", "_app/immutable/chunks/bjmIbPZM.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// node_modules/@firebase/util/dist/index.esm2017.js
function getGlobal() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("Unable to locate global object.");
}
function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  }
  const header = {
    alg: "none",
    type: "JWT"
  };
  const project = projectId || "demo-project";
  const iat = token.iat || 0;
  const sub = token.sub || token.user_id;
  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }
  const payload = Object.assign({
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${project}`,
    aud: project,
    iat,
    exp: iat + 3600,
    auth_time: iat,
    sub,
    user_id: sub,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, token);
  const signature = "";
  return [
    base64urlEncodeWithoutPadding(JSON.stringify(header)),
    base64urlEncodeWithoutPadding(JSON.stringify(payload)),
    signature
  ].join(".");
}
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isNode() {
  var _a;
  const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
  if (forceEnvironment === "node") {
    return true;
  } else if (forceEnvironment === "browser") {
    return false;
  }
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch (e) {
    return false;
  }
}
function isSafari() {
  return !isNode() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
function isIndexedDBAvailable() {
  try {
    return typeof indexedDB === "object";
  } catch (e) {
    return false;
  }
}
function validateIndexedDBOpenable() {
  return new Promise((resolve2, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve2(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
      };
    } catch (error2) {
      reject(error2);
    }
  });
}
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key2) => {
    const value = data[key2];
    return value != null ? String(value) : `<${key2}?>`;
  });
}
function deepEqual(a, b2) {
  if (a === b2) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b2);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a[k];
    const bProp = b2[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
var stringToByteArray$1, byteArrayToString, base642, DecodeBase64StringError, base64Encode, base64urlEncodeWithoutPadding, base64Decode, getDefaultsFromGlobal, getDefaultsFromEnvVariable, getDefaultsFromCookie, getDefaults, getDefaultEmulatorHost, getDefaultEmulatorHostnameAndPort, getDefaultAppConfig, Deferred, ERROR_NAME, FirebaseError, ErrorFactory, PATTERN, MAX_VALUE_MILLIS;
var init_index_esm2017 = __esm({
  "node_modules/@firebase/util/dist/index.esm2017.js"() {
    stringToByteArray$1 = function(str) {
      const out = [];
      let p = 0;
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
          out[p++] = c;
        } else if (c < 2048) {
          out[p++] = c >> 6 | 192;
          out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
          c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
          out[p++] = c >> 18 | 240;
          out[p++] = c >> 12 & 63 | 128;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        } else {
          out[p++] = c >> 12 | 224;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        }
      }
      return out;
    };
    byteArrayToString = function(bytes) {
      const out = [];
      let pos = 0, c = 0;
      while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
          out[c++] = String.fromCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
          const c2 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
          const c2 = bytes[pos++];
          const c3 = bytes[pos++];
          const c4 = bytes[pos++];
          const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
          out[c++] = String.fromCharCode(55296 + (u >> 10));
          out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
          const c2 = bytes[pos++];
          const c3 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
      }
      return out.join("");
    };
    base642 = {
      /**
       * Maps bytes to characters.
       */
      byteToCharMap_: null,
      /**
       * Maps characters to bytes.
       */
      charToByteMap_: null,
      /**
       * Maps bytes to websafe characters.
       * @private
       */
      byteToCharMapWebSafe_: null,
      /**
       * Maps websafe characters to bytes.
       * @private
       */
      charToByteMapWebSafe_: null,
      /**
       * Our default alphabet, shared between
       * ENCODED_VALS and ENCODED_VALS_WEBSAFE
       */
      ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      /**
       * Our default alphabet. Value 64 (=) is special; it means "nothing."
       */
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      /**
       * Our websafe alphabet.
       */
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      /**
       * Whether this browser supports the atob and btoa functions. This extension
       * started at Mozilla but is now implemented by many browsers. We use the
       * ASSUME_* variables to avoid pulling in the full useragent detection library
       * but still allowing the standard per-browser compilations.
       *
       */
      HAS_NATIVE_SUPPORT: typeof atob === "function",
      /**
       * Base64-encode an array of bytes.
       *
       * @param input An array of bytes (numbers with
       *     value in [0, 255]) to encode.
       * @param webSafe Boolean indicating we should use the
       *     alternative alphabet.
       * @return The base64 encoded string.
       */
      encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
          throw Error("encodeByteArray takes an array as a parameter");
        }
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
          const byte1 = input[i];
          const haveByte2 = i + 1 < input.length;
          const byte2 = haveByte2 ? input[i + 1] : 0;
          const haveByte3 = i + 2 < input.length;
          const byte3 = haveByte3 ? input[i + 2] : 0;
          const outByte1 = byte1 >> 2;
          const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
          let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
          let outByte4 = byte3 & 63;
          if (!haveByte3) {
            outByte4 = 64;
            if (!haveByte2) {
              outByte3 = 64;
            }
          }
          output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join("");
      },
      /**
       * Base64-encode a string.
       *
       * @param input A string to encode.
       * @param webSafe If true, we should use the
       *     alternative alphabet.
       * @return The base64 encoded string.
       */
      encodeString(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
      },
      /**
       * Base64-decode a string.
       *
       * @param input to decode.
       * @param webSafe True if we should use the
       *     alternative alphabet.
       * @return string representing the decoded value.
       */
      decodeString(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
      },
      /**
       * Base64-decode a string.
       *
       * In base-64 decoding, groups of four characters are converted into three
       * bytes.  If the encoder did not apply padding, the input length may not
       * be a multiple of 4.
       *
       * In this case, the last group will have fewer than 4 characters, and
       * padding will be inferred.  If the group has one or two characters, it decodes
       * to one byte.  If the group has three characters, it decodes to two bytes.
       *
       * @param input Input to decode.
       * @param webSafe True if we should use the web-safe alphabet.
       * @return bytes representing the decoded value.
       */
      decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length; ) {
          const byte1 = charToByteMap[input.charAt(i++)];
          const haveByte2 = i < input.length;
          const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
          ++i;
          const haveByte3 = i < input.length;
          const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          const haveByte4 = i < input.length;
          const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
            throw new DecodeBase64StringError();
          }
          const outByte1 = byte1 << 2 | byte2 >> 4;
          output.push(outByte1);
          if (byte3 !== 64) {
            const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
            output.push(outByte2);
            if (byte4 !== 64) {
              const outByte3 = byte3 << 6 & 192 | byte4;
              output.push(outByte3);
            }
          }
        }
        return output;
      },
      /**
       * Lazy static initialization function. Called before
       * accessing any of the static map variables.
       * @private
       */
      init_() {
        if (!this.byteToCharMap_) {
          this.byteToCharMap_ = {};
          this.charToByteMap_ = {};
          this.byteToCharMapWebSafe_ = {};
          this.charToByteMapWebSafe_ = {};
          for (let i = 0; i < this.ENCODED_VALS.length; i++) {
            this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
            this.charToByteMap_[this.byteToCharMap_[i]] = i;
            this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
            this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
            if (i >= this.ENCODED_VALS_BASE.length) {
              this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
              this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
            }
          }
        }
      }
    };
    DecodeBase64StringError = class extends Error {
      constructor() {
        super(...arguments);
        this.name = "DecodeBase64StringError";
      }
    };
    base64Encode = function(str) {
      const utf8Bytes = stringToByteArray$1(str);
      return base642.encodeByteArray(utf8Bytes, true);
    };
    base64urlEncodeWithoutPadding = function(str) {
      return base64Encode(str).replace(/\./g, "");
    };
    base64Decode = function(str) {
      try {
        return base642.decodeString(str, true);
      } catch (e) {
        console.error("base64Decode failed: ", e);
      }
      return null;
    };
    getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
    getDefaultsFromEnvVariable = () => {
      if (typeof process === "undefined" || typeof process.env === "undefined") {
        return;
      }
      const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
      if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
      }
    };
    getDefaultsFromCookie = () => {
      if (typeof document === "undefined") {
        return;
      }
      let match;
      try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
      } catch (e) {
        return;
      }
      const decoded = match && base64Decode(match[1]);
      return decoded && JSON.parse(decoded);
    };
    getDefaults = () => {
      try {
        return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
      } catch (e) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
      }
    };
    getDefaultEmulatorHost = (productName) => {
      var _a, _b;
      return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
    };
    getDefaultEmulatorHostnameAndPort = (productName) => {
      const host = getDefaultEmulatorHost(productName);
      if (!host) {
        return void 0;
      }
      const separatorIndex = host.lastIndexOf(":");
      if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
        throw new Error(`Invalid host ${host} with no separate hostname and port!`);
      }
      const port = parseInt(host.substring(separatorIndex + 1), 10);
      if (host[0] === "[") {
        return [host.substring(1, separatorIndex - 1), port];
      } else {
        return [host.substring(0, separatorIndex), port];
      }
    };
    getDefaultAppConfig = () => {
      var _a;
      return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
    };
    Deferred = class {
      constructor() {
        this.reject = () => {
        };
        this.resolve = () => {
        };
        this.promise = new Promise((resolve2, reject) => {
          this.resolve = resolve2;
          this.reject = reject;
        });
      }
      /**
       * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
       * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
       * and returns a node-style callback which will resolve or reject the Deferred's promise.
       */
      wrapCallback(callback) {
        return (error2, value) => {
          if (error2) {
            this.reject(error2);
          } else {
            this.resolve(value);
          }
          if (typeof callback === "function") {
            this.promise.catch(() => {
            });
            if (callback.length === 1) {
              callback(error2);
            } else {
              callback(error2, value);
            }
          }
        };
      }
    };
    ERROR_NAME = "FirebaseError";
    FirebaseError = class _FirebaseError extends Error {
      constructor(code, message, customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        this.name = ERROR_NAME;
        Object.setPrototypeOf(this, _FirebaseError.prototype);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
      }
    };
    ErrorFactory = class {
      constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
      }
      create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : "Error";
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error2 = new FirebaseError(fullCode, fullMessage, customData);
        return error2;
      }
    };
    PATTERN = /\{\$([^}]+)}/g;
    MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  }
});

// node_modules/@firebase/component/dist/esm/index.esm2017.js
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component5) {
  return component5.instantiationMode === "EAGER";
}
var Component, DEFAULT_ENTRY_NAME, Provider, ComponentContainer;
var init_index_esm20172 = __esm({
  "node_modules/@firebase/component/dist/esm/index.esm2017.js"() {
    init_index_esm2017();
    Component = class {
      /**
       *
       * @param name The public service name, e.g. app, auth, firestore, database
       * @param instanceFactory Service factory responsible for creating the public interface
       * @param type whether the service provided by the component is public or private
       */
      constructor(name3, instanceFactory, type) {
        this.name = name3;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        this.serviceProps = {};
        this.instantiationMode = "LAZY";
        this.onInstanceCreated = null;
      }
      setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
      }
      setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
      }
      setServiceProps(props) {
        this.serviceProps = props;
        return this;
      }
      setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
      }
    };
    DEFAULT_ENTRY_NAME = "[DEFAULT]";
    Provider = class {
      constructor(name3, container) {
        this.name = name3;
        this.container = container;
        this.component = null;
        this.instances = /* @__PURE__ */ new Map();
        this.instancesDeferred = /* @__PURE__ */ new Map();
        this.instancesOptions = /* @__PURE__ */ new Map();
        this.onInitCallbacks = /* @__PURE__ */ new Map();
      }
      /**
       * @param identifier A provider can provide multiple instances of a service
       * if this.component.multipleInstances is true.
       */
      get(identifier) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
          const deferred = new Deferred();
          this.instancesDeferred.set(normalizedIdentifier, deferred);
          if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
              const instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
              if (instance) {
                deferred.resolve(instance);
              }
            } catch (e) {
            }
          }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
      }
      getImmediate(options2) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options2 === null || options2 === void 0 ? void 0 : options2.identifier);
        const optional = (_a = options2 === null || options2 === void 0 ? void 0 : options2.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            return this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
          } catch (e) {
            if (optional) {
              return null;
            } else {
              throw e;
            }
          }
        } else {
          if (optional) {
            return null;
          } else {
            throw Error(`Service ${this.name} is not available`);
          }
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(component5) {
        if (component5.name !== this.name) {
          throw Error(`Mismatching Component ${component5.name} for Provider ${this.name}.`);
        }
        if (this.component) {
          throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component5;
        if (!this.shouldAutoInitialize()) {
          return;
        }
        if (isComponentEager(component5)) {
          try {
            this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
          } catch (e) {
          }
        }
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
          const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            instanceDeferred.resolve(instance);
          } catch (e) {
          }
        }
      }
      clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
      }
      // app.delete() will call this method on every provider to delete the services
      // TODO: should we mark the provider as deleted?
      async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
          ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
          ...services.filter((service) => "_delete" in service).map((service) => service._delete())
        ]);
      }
      isComponentSet() {
        return this.component != null;
      }
      isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
      }
      getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
      }
      initialize(opts = {}) {
        const { options: options2 = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
          throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
          throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier,
          options: options2
        });
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
          const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          if (normalizedIdentifier === normalizedDeferredIdentifier) {
            instanceDeferred.resolve(instance);
          }
        }
        return instance;
      }
      /**
       *
       * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
       * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
       *
       * @param identifier An optional instance identifier
       * @returns a function to unregister the callback
       */
      onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
          callback(existingInstance, normalizedIdentifier);
        }
        return () => {
          existingCallbacks.delete(callback);
        };
      }
      /**
       * Invoke onInit callbacks synchronously
       * @param instance the service instance`
       */
      invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
          return;
        }
        for (const callback of callbacks) {
          try {
            callback(instance, identifier);
          } catch (_a) {
          }
        }
      }
      getOrInitializeService({ instanceIdentifier, options: options2 = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
          instance = this.component.instanceFactory(this.container, {
            instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
            options: options2
          });
          this.instances.set(instanceIdentifier, instance);
          this.instancesOptions.set(instanceIdentifier, options2);
          this.invokeOnInitCallbacks(instance, instanceIdentifier);
          if (this.component.onInstanceCreated) {
            try {
              this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            }
          }
        }
        return instance || null;
      }
      normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
          return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        } else {
          return identifier;
        }
      }
      shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT";
      }
    };
    ComponentContainer = class {
      constructor(name3) {
        this.name = name3;
        this.providers = /* @__PURE__ */ new Map();
      }
      /**
       *
       * @param component Component being added
       * @param overwrite When a component with the same name has already been registered,
       * if overwrite is true: overwrite the existing component with the new component and create a new
       * provider with the new component. It can be useful in tests where you want to use different mocks
       * for different tests.
       * if overwrite is false: throw an exception
       */
      addComponent(component5) {
        const provider = this.getProvider(component5.name);
        if (provider.isComponentSet()) {
          throw new Error(`Component ${component5.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component5);
      }
      addOrOverwriteComponent(component5) {
        const provider = this.getProvider(component5.name);
        if (provider.isComponentSet()) {
          this.providers.delete(component5.name);
        }
        this.addComponent(component5);
      }
      /**
       * getProvider provides a type safe interface where it can only be called with a field name
       * present in NameServiceMapping interface.
       *
       * Firebase SDKs providing services should extend NameServiceMapping interface to register
       * themselves.
       */
      getProvider(name3) {
        if (this.providers.has(name3)) {
          return this.providers.get(name3);
        }
        const provider = new Provider(name3, this);
        this.providers.set(name3, provider);
        return provider;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    };
  }
});

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances, LogLevel, levelStringToEnum, defaultLogLevel, ConsoleMethod, defaultLogHandler, Logger;
var init_index_esm20173 = __esm({
  "node_modules/@firebase/logger/dist/esm/index.esm2017.js"() {
    instances = [];
    (function(LogLevel2) {
      LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
      LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
      LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
      LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
      LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
      LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));
    levelStringToEnum = {
      "debug": LogLevel.DEBUG,
      "verbose": LogLevel.VERBOSE,
      "info": LogLevel.INFO,
      "warn": LogLevel.WARN,
      "error": LogLevel.ERROR,
      "silent": LogLevel.SILENT
    };
    defaultLogLevel = LogLevel.INFO;
    ConsoleMethod = {
      [LogLevel.DEBUG]: "log",
      [LogLevel.VERBOSE]: "log",
      [LogLevel.INFO]: "info",
      [LogLevel.WARN]: "warn",
      [LogLevel.ERROR]: "error"
    };
    defaultLogHandler = (instance, logType, ...args) => {
      if (logType < instance.logLevel) {
        return;
      }
      const now = (/* @__PURE__ */ new Date()).toISOString();
      const method = ConsoleMethod[logType];
      if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
      } else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
      }
    };
    Logger = class {
      /**
       * Gives you an instance of a Logger to capture messages according to
       * Firebase's logging scheme.
       *
       * @param name The name that the logs will be associated with
       */
      constructor(name3) {
        this.name = name3;
        this._logLevel = defaultLogLevel;
        this._logHandler = defaultLogHandler;
        this._userLogHandler = null;
        instances.push(this);
      }
      get logLevel() {
        return this._logLevel;
      }
      set logLevel(val) {
        if (!(val in LogLevel)) {
          throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
      }
      // Workaround for setter/getter having to be the same type.
      setLogLevel(val) {
        this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
      }
      get logHandler() {
        return this._logHandler;
      }
      set logHandler(val) {
        if (typeof val !== "function") {
          throw new TypeError("Value assigned to `logHandler` must be a function");
        }
        this._logHandler = val;
      }
      get userLogHandler() {
        return this._userLogHandler;
      }
      set userLogHandler(val) {
        this._userLogHandler = val;
      }
      /**
       * The functions below are all based on the `console` interface
       */
      debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
      }
      log(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
      }
      info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
      }
      warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
      }
      error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
      }
    };
  }
});

// node_modules/idb/build/wrap-idb-value.js
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
function promisifyRequest(request) {
  const promise = new Promise((resolve2, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error2);
    };
    const success = () => {
      resolve2(wrap(request.result));
      unlisten();
    };
    const error2 = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error2);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve2, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error2);
      tx.removeEventListener("abort", error2);
    };
    const complete = () => {
      resolve2();
      unlisten();
    };
    const error2 = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error2);
    tx.addEventListener("abort", error2);
  });
  transactionDoneMap.set(tx, done);
}
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
var init_wrap_idb_value = __esm({
  "node_modules/idb/build/wrap-idb-value.js"() {
    instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
    cursorRequestMap = /* @__PURE__ */ new WeakMap();
    transactionDoneMap = /* @__PURE__ */ new WeakMap();
    transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
    transformCache = /* @__PURE__ */ new WeakMap();
    reverseTransformCache = /* @__PURE__ */ new WeakMap();
    idbProxyTraps = {
      get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
          if (prop === "done")
            return transactionDoneMap.get(target);
          if (prop === "objectStoreNames") {
            return target.objectStoreNames || transactionStoreNamesMap.get(target);
          }
          if (prop === "store") {
            return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
          }
        }
        return wrap(target[prop]);
      },
      set(target, prop, value) {
        target[prop] = value;
        return true;
      },
      has(target, prop) {
        if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
          return true;
        }
        return prop in target;
      }
    };
    unwrap = (value) => reverseTransformCache.get(value);
  }
});

// node_modules/idb/build/index.js
function openDB(name3, version3, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name3, version3);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db2) => {
    if (terminated)
      db2.addEventListener("close", () => terminated());
    if (blocking) {
      db2.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
var readMethods, writeMethods, cachedMethods;
var init_build = __esm({
  "node_modules/idb/build/index.js"() {
    init_wrap_idb_value();
    init_wrap_idb_value();
    readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
    writeMethods = ["put", "add", "delete", "clear"];
    cachedMethods = /* @__PURE__ */ new Map();
    replaceTraps((oldTraps) => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
  }
});

// node_modules/@firebase/app/dist/esm/index.esm2017.js
function isVersionServiceProvider(provider) {
  const component5 = provider.getComponent();
  return (component5 === null || component5 === void 0 ? void 0 : component5.type) === "VERSION";
}
function _addComponent(app2, component5) {
  try {
    app2.container.addComponent(component5);
  } catch (e) {
    logger.debug(`Component ${component5.name} failed to register with FirebaseApp ${app2.name}`, e);
  }
}
function _registerComponent(component5) {
  const componentName = component5.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component5);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component5);
  }
  for (const serverApp of _serverApps.values()) {
    _addComponent(serverApp, component5);
  }
  return true;
}
function _getProvider(app2, name3) {
  const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app2.container.getProvider(name3);
}
function initializeApp(_options, rawConfig = {}) {
  let options2 = _options;
  if (typeof rawConfig !== "object") {
    const name4 = rawConfig;
    rawConfig = { name: name4 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
  const name3 = config.name;
  if (typeof name3 !== "string" || !name3) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name3)
    });
  }
  options2 || (options2 = getDefaultAppConfig());
  if (!options2) {
    throw ERROR_FACTORY.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  }
  const existingApp = _apps.get(name3);
  if (existingApp) {
    if (deepEqual(options2, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name3 });
    }
  }
  const container = new ComponentContainer(name3);
  for (const component5 of _components.values()) {
    container.addComponent(component5);
  }
  const newApp = new FirebaseAppImpl(options2, config, container);
  _apps.set(name3, newApp);
  return newApp;
}
function getApp(name3 = DEFAULT_ENTRY_NAME2) {
  const app2 = _apps.get(name3);
  if (!app2 && name3 === DEFAULT_ENTRY_NAME2 && getDefaultAppConfig()) {
    return initializeApp();
  }
  if (!app2) {
    throw ERROR_FACTORY.create("no-app", { appName: name3 });
  }
  return app2;
}
function registerVersion(libraryKeyOrName, version3, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version3.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version3}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version3}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(
    `${library}-version`,
    () => ({ library, version: version3 }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db2, oldVersion) => {
        switch (oldVersion) {
          case 0:
            try {
              db2.createObjectStore(STORE_NAME);
            } catch (e) {
              console.warn(e);
            }
        }
      }
    }).catch((e) => {
      throw ERROR_FACTORY.create("idb-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app2) {
  try {
    const db2 = await getDbPromise();
    const tx = db2.transaction(STORE_NAME);
    const result = await tx.objectStore(STORE_NAME).get(computeKey(app2));
    await tx.done;
    return result;
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-get", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
  try {
    const db2 = await getDbPromise();
    const tx = db2.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app2));
    await tx.done;
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-set", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
function computeKey(app2) {
  return `${app2.name}!${app2.options.appId}`;
}
function getUTCDateString() {
  const today = /* @__PURE__ */ new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
  ).length;
}
function registerCoreComponents(variant) {
  _registerComponent(new Component(
    "platform-logger",
    (container) => new PlatformLoggerServiceImpl(container),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  _registerComponent(new Component(
    "heartbeat",
    (container) => new HeartbeatServiceImpl(container),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  registerVersion(name$q, version$1, variant);
  registerVersion(name$q, version$1, "esm2017");
  registerVersion("fire-js", "");
}
var PlatformLoggerServiceImpl, name$q, version$1, logger, name$p, name$o, name$n, name$m, name$l, name$k, name$j, name$i, name$h, name$g, name$f, name$e, name$d, name$c, name$b, name$a, name$9, name$8, name$7, name$6, name$5, name$4, name$3, name$2, name$1, name, version, DEFAULT_ENTRY_NAME2, PLATFORM_LOG_STRING, _apps, _serverApps, _components, ERRORS, ERROR_FACTORY, FirebaseAppImpl, SDK_VERSION, DB_NAME, DB_VERSION, STORE_NAME, dbPromise, MAX_HEADER_BYTES, STORED_HEARTBEAT_RETENTION_MAX_MILLIS, HeartbeatServiceImpl, HeartbeatStorageImpl;
var init_index_esm20174 = __esm({
  "node_modules/@firebase/app/dist/esm/index.esm2017.js"() {
    init_index_esm20172();
    init_index_esm20173();
    init_index_esm2017();
    init_index_esm2017();
    init_build();
    PlatformLoggerServiceImpl = class {
      constructor(container) {
        this.container = container;
      }
      // In initial implementation, this will be called by installations on
      // auth token refresh, and installations will send this string.
      getPlatformInfoString() {
        const providers = this.container.getProviders();
        return providers.map((provider) => {
          if (isVersionServiceProvider(provider)) {
            const service = provider.getImmediate();
            return `${service.library}/${service.version}`;
          } else {
            return null;
          }
        }).filter((logString) => logString).join(" ");
      }
    };
    name$q = "@firebase/app";
    version$1 = "0.10.18";
    logger = new Logger("@firebase/app");
    name$p = "@firebase/app-compat";
    name$o = "@firebase/analytics-compat";
    name$n = "@firebase/analytics";
    name$m = "@firebase/app-check-compat";
    name$l = "@firebase/app-check";
    name$k = "@firebase/auth";
    name$j = "@firebase/auth-compat";
    name$i = "@firebase/database";
    name$h = "@firebase/data-connect";
    name$g = "@firebase/database-compat";
    name$f = "@firebase/functions";
    name$e = "@firebase/functions-compat";
    name$d = "@firebase/installations";
    name$c = "@firebase/installations-compat";
    name$b = "@firebase/messaging";
    name$a = "@firebase/messaging-compat";
    name$9 = "@firebase/performance";
    name$8 = "@firebase/performance-compat";
    name$7 = "@firebase/remote-config";
    name$6 = "@firebase/remote-config-compat";
    name$5 = "@firebase/storage";
    name$4 = "@firebase/storage-compat";
    name$3 = "@firebase/firestore";
    name$2 = "@firebase/vertexai";
    name$1 = "@firebase/firestore-compat";
    name = "firebase";
    version = "11.2.0";
    DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
    PLATFORM_LOG_STRING = {
      [name$q]: "fire-core",
      [name$p]: "fire-core-compat",
      [name$n]: "fire-analytics",
      [name$o]: "fire-analytics-compat",
      [name$l]: "fire-app-check",
      [name$m]: "fire-app-check-compat",
      [name$k]: "fire-auth",
      [name$j]: "fire-auth-compat",
      [name$i]: "fire-rtdb",
      [name$h]: "fire-data-connect",
      [name$g]: "fire-rtdb-compat",
      [name$f]: "fire-fn",
      [name$e]: "fire-fn-compat",
      [name$d]: "fire-iid",
      [name$c]: "fire-iid-compat",
      [name$b]: "fire-fcm",
      [name$a]: "fire-fcm-compat",
      [name$9]: "fire-perf",
      [name$8]: "fire-perf-compat",
      [name$7]: "fire-rc",
      [name$6]: "fire-rc-compat",
      [name$5]: "fire-gcs",
      [name$4]: "fire-gcs-compat",
      [name$3]: "fire-fst",
      [name$1]: "fire-fst-compat",
      [name$2]: "fire-vertex",
      "fire-js": "fire-js",
      // Platform identifier for JS SDK.
      [name]: "fire-js-all"
    };
    _apps = /* @__PURE__ */ new Map();
    _serverApps = /* @__PURE__ */ new Map();
    _components = /* @__PURE__ */ new Map();
    ERRORS = {
      [
        "no-app"
        /* AppError.NO_APP */
      ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
      [
        "bad-app-name"
        /* AppError.BAD_APP_NAME */
      ]: "Illegal App name: '{$appName}'",
      [
        "duplicate-app"
        /* AppError.DUPLICATE_APP */
      ]: "Firebase App named '{$appName}' already exists with different options or config",
      [
        "app-deleted"
        /* AppError.APP_DELETED */
      ]: "Firebase App named '{$appName}' already deleted",
      [
        "server-app-deleted"
        /* AppError.SERVER_APP_DELETED */
      ]: "Firebase Server App has been deleted",
      [
        "no-options"
        /* AppError.NO_OPTIONS */
      ]: "Need to provide options, when not being deployed to hosting via source.",
      [
        "invalid-app-argument"
        /* AppError.INVALID_APP_ARGUMENT */
      ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      [
        "invalid-log-argument"
        /* AppError.INVALID_LOG_ARGUMENT */
      ]: "First argument to `onLog` must be null or a function.",
      [
        "idb-open"
        /* AppError.IDB_OPEN */
      ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      [
        "idb-get"
        /* AppError.IDB_GET */
      ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      [
        "idb-set"
        /* AppError.IDB_WRITE */
      ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      [
        "idb-delete"
        /* AppError.IDB_DELETE */
      ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
      [
        "finalization-registry-not-supported"
        /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
      ]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
      [
        "invalid-server-app-environment"
        /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
      ]: "FirebaseServerApp is not for use in browser environments."
    };
    ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
    FirebaseAppImpl = class {
      constructor(options2, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options2);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new Component(
          "app",
          () => this,
          "PUBLIC"
          /* ComponentType.PUBLIC */
        ));
      }
      get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
      }
      set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
      }
      get name() {
        this.checkDestroyed();
        return this._name;
      }
      get options() {
        this.checkDestroyed();
        return this._options;
      }
      get config() {
        this.checkDestroyed();
        return this._config;
      }
      get container() {
        return this._container;
      }
      get isDeleted() {
        return this._isDeleted;
      }
      set isDeleted(val) {
        this._isDeleted = val;
      }
      /**
       * This function will throw an Error if the App has already been deleted -
       * use before performing API actions on the App.
       */
      checkDestroyed() {
        if (this.isDeleted) {
          throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
        }
      }
    };
    SDK_VERSION = version;
    DB_NAME = "firebase-heartbeat-database";
    DB_VERSION = 1;
    STORE_NAME = "firebase-heartbeat-store";
    dbPromise = null;
    MAX_HEADER_BYTES = 1024;
    STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
    HeartbeatServiceImpl = class {
      constructor(container) {
        this.container = container;
        this._heartbeatsCache = null;
        const app2 = this.container.getProvider("app").getImmediate();
        this._storage = new HeartbeatStorageImpl(app2);
        this._heartbeatsCachePromise = this._storage.read().then((result) => {
          this._heartbeatsCache = result;
          return result;
        });
      }
      /**
       * Called to report a heartbeat. The function will generate
       * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
       * to IndexedDB.
       * Note that we only store one heartbeat per day. So if a heartbeat for today is
       * already logged, subsequent calls to this function in the same day will be ignored.
       */
      async triggerHeartbeat() {
        var _a, _b;
        try {
          const platformLogger = this.container.getProvider("platform-logger").getImmediate();
          const agent = platformLogger.getPlatformInfoString();
          const date = getUTCDateString();
          if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
            this._heartbeatsCache = await this._heartbeatsCachePromise;
            if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
              return;
            }
          }
          if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
            return;
          } else {
            this._heartbeatsCache.heartbeats.push({ date, agent });
          }
          this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
          });
          return this._storage.overwrite(this._heartbeatsCache);
        } catch (e) {
          logger.warn(e);
        }
      }
      /**
       * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
       * It also clears all heartbeats from memory as well as in IndexedDB.
       *
       * NOTE: Consuming product SDKs should not send the header if this method
       * returns an empty string.
       */
      async getHeartbeatsHeader() {
        var _a;
        try {
          if (this._heartbeatsCache === null) {
            await this._heartbeatsCachePromise;
          }
          if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
            return "";
          }
          const date = getUTCDateString();
          const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
          const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
          this._heartbeatsCache.lastSentHeartbeatDate = date;
          if (unsentEntries.length > 0) {
            this._heartbeatsCache.heartbeats = unsentEntries;
            await this._storage.overwrite(this._heartbeatsCache);
          } else {
            this._heartbeatsCache.heartbeats = [];
            void this._storage.overwrite(this._heartbeatsCache);
          }
          return headerString;
        } catch (e) {
          logger.warn(e);
          return "";
        }
      }
    };
    HeartbeatStorageImpl = class {
      constructor(app2) {
        this.app = app2;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
      }
      async runIndexedDBEnvironmentCheck() {
        if (!isIndexedDBAvailable()) {
          return false;
        } else {
          return validateIndexedDBOpenable().then(() => true).catch(() => false);
        }
      }
      /**
       * Read all heartbeats.
       */
      async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return { heartbeats: [] };
        } else {
          const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
          if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
            return idbHeartbeatObject;
          } else {
            return { heartbeats: [] };
          }
        }
      }
      // overwrite the storage with the provided heartbeats
      async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return;
        } else {
          const existingHeartbeatsObject = await this.read();
          return writeHeartbeatsToIndexedDB(this.app, {
            lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
            heartbeats: heartbeatsObject.heartbeats
          });
        }
      }
      // add heartbeats
      async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return;
        } else {
          const existingHeartbeatsObject = await this.read();
          return writeHeartbeatsToIndexedDB(this.app, {
            lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
            heartbeats: [
              ...existingHeartbeatsObject.heartbeats,
              ...heartbeatsObject.heartbeats
            ]
          });
        }
      }
    };
    registerCoreComponents("");
  }
});

// node_modules/firebase/app/dist/esm/index.esm.js
var name2, version2;
var init_index_esm = __esm({
  "node_modules/firebase/app/dist/esm/index.esm.js"() {
    init_index_esm20174();
    init_index_esm20174();
    name2 = "firebase";
    version2 = "11.2.0";
    registerVersion(name2, version2, "app");
  }
});

// node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
var commonjsGlobal, bloom_blob_es2018, Integer, Md5;
var init_bloom_blob_es2018 = __esm({
  "node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js"() {
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    bloom_blob_es2018 = {};
    (function() {
      var h;
      function k(f, a) {
        function c() {
        }
        c.prototype = a.prototype;
        f.D = a.prototype;
        f.prototype = new c();
        f.prototype.constructor = f;
        f.C = function(d, e, g) {
          for (var b2 = Array(arguments.length - 2), r = 2; r < arguments.length; r++) b2[r - 2] = arguments[r];
          return a.prototype[e].apply(d, b2);
        };
      }
      function l() {
        this.blockSize = -1;
      }
      function m() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = Array(4);
        this.B = Array(this.blockSize);
        this.o = this.h = 0;
        this.s();
      }
      k(m, l);
      m.prototype.s = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.o = this.h = 0;
      };
      function n(f, a, c) {
        c || (c = 0);
        var d = Array(16);
        if ("string" === typeof a) for (var e = 0; 16 > e; ++e) d[e] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
        else for (e = 0; 16 > e; ++e) d[e] = a[c++] | a[c++] << 8 | a[c++] << 16 | a[c++] << 24;
        a = f.g[0];
        c = f.g[1];
        e = f.g[2];
        var g = f.g[3];
        var b2 = a + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
        a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
        b2 = g + (e ^ a & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
        b2 = e + (c ^ g & (a ^ c)) + d[2] + 606105819 & 4294967295;
        e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
        b2 = c + (a ^ e & (g ^ a)) + d[3] + 3250441966 & 4294967295;
        c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
        b2 = a + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
        a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
        b2 = g + (e ^ a & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
        b2 = e + (c ^ g & (a ^ c)) + d[6] + 2821735955 & 4294967295;
        e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
        b2 = c + (a ^ e & (g ^ a)) + d[7] + 4249261313 & 4294967295;
        c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
        b2 = a + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
        a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
        b2 = g + (e ^ a & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
        b2 = e + (c ^ g & (a ^ c)) + d[10] + 4294925233 & 4294967295;
        e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
        b2 = c + (a ^ e & (g ^ a)) + d[11] + 2304563134 & 4294967295;
        c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
        b2 = a + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
        a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
        b2 = g + (e ^ a & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
        b2 = e + (c ^ g & (a ^ c)) + d[14] + 2792965006 & 4294967295;
        e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
        b2 = c + (a ^ e & (g ^ a)) + d[15] + 1236535329 & 4294967295;
        c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
        b2 = a + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
        b2 = g + (c ^ e & (a ^ c)) + d[6] + 3225465664 & 4294967295;
        g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
        b2 = e + (a ^ c & (g ^ a)) + d[11] + 643717713 & 4294967295;
        e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
        b2 = c + (g ^ a & (e ^ g)) + d[0] + 3921069994 & 4294967295;
        c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
        b2 = a + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
        b2 = g + (c ^ e & (a ^ c)) + d[10] + 38016083 & 4294967295;
        g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
        b2 = e + (a ^ c & (g ^ a)) + d[15] + 3634488961 & 4294967295;
        e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
        b2 = c + (g ^ a & (e ^ g)) + d[4] + 3889429448 & 4294967295;
        c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
        b2 = a + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
        a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
        b2 = g + (c ^ e & (a ^ c)) + d[14] + 3275163606 & 4294967295;
        g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
        b2 = e + (a ^ c & (g ^ a)) + d[3] + 4107603335 & 4294967295;
        e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
        b2 = c + (g ^ a & (e ^ g)) + d[8] + 1163531501 & 4294967295;
        c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
        b2 = a + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
        b2 = g + (c ^ e & (a ^ c)) + d[2] + 4243563512 & 4294967295;
        g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
        b2 = e + (a ^ c & (g ^ a)) + d[7] + 1735328473 & 4294967295;
        e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
        b2 = c + (g ^ a & (e ^ g)) + d[12] + 2368359562 & 4294967295;
        c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
        b2 = a + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
        a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
        b2 = g + (a ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
        b2 = e + (g ^ a ^ c) + d[11] + 1839030562 & 4294967295;
        e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
        b2 = c + (e ^ g ^ a) + d[14] + 4259657740 & 4294967295;
        c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
        b2 = a + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
        a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
        b2 = g + (a ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
        b2 = e + (g ^ a ^ c) + d[7] + 4139469664 & 4294967295;
        e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
        b2 = c + (e ^ g ^ a) + d[10] + 3200236656 & 4294967295;
        c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
        b2 = a + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
        a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
        b2 = g + (a ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
        b2 = e + (g ^ a ^ c) + d[3] + 3572445317 & 4294967295;
        e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
        b2 = c + (e ^ g ^ a) + d[6] + 76029189 & 4294967295;
        c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
        b2 = a + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
        a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
        b2 = g + (a ^ c ^ e) + d[12] + 3873151461 & 4294967295;
        g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
        b2 = e + (g ^ a ^ c) + d[15] + 530742520 & 4294967295;
        e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
        b2 = c + (e ^ g ^ a) + d[2] + 3299628645 & 4294967295;
        c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
        b2 = a + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
        a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
        b2 = g + (c ^ (a | ~e)) + d[7] + 1126891415 & 4294967295;
        g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
        b2 = e + (a ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
        e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
        b2 = c + (g ^ (e | ~a)) + d[5] + 4237533241 & 4294967295;
        c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
        b2 = a + (e ^ (c | ~g)) + d[12] + 1700485571 & 4294967295;
        a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
        b2 = g + (c ^ (a | ~e)) + d[3] + 2399980690 & 4294967295;
        g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
        b2 = e + (a ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
        e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
        b2 = c + (g ^ (e | ~a)) + d[1] + 2240044497 & 4294967295;
        c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
        b2 = a + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
        a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
        b2 = g + (c ^ (a | ~e)) + d[15] + 4264355552 & 4294967295;
        g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
        b2 = e + (a ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
        e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
        b2 = c + (g ^ (e | ~a)) + d[13] + 1309151649 & 4294967295;
        c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
        b2 = a + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
        a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
        b2 = g + (c ^ (a | ~e)) + d[11] + 3174756917 & 4294967295;
        g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
        b2 = e + (a ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
        e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
        b2 = c + (g ^ (e | ~a)) + d[9] + 3951481745 & 4294967295;
        f.g[0] = f.g[0] + a & 4294967295;
        f.g[1] = f.g[1] + (e + (b2 << 21 & 4294967295 | b2 >>> 11)) & 4294967295;
        f.g[2] = f.g[2] + e & 4294967295;
        f.g[3] = f.g[3] + g & 4294967295;
      }
      m.prototype.u = function(f, a) {
        void 0 === a && (a = f.length);
        for (var c = a - this.blockSize, d = this.B, e = this.h, g = 0; g < a; ) {
          if (0 == e) for (; g <= c; ) n(this, f, g), g += this.blockSize;
          if ("string" === typeof f) for (; g < a; ) {
            if (d[e++] = f.charCodeAt(g++), e == this.blockSize) {
              n(this, d);
              e = 0;
              break;
            }
          }
          else for (; g < a; ) if (d[e++] = f[g++], e == this.blockSize) {
            n(this, d);
            e = 0;
            break;
          }
        }
        this.h = e;
        this.o += a;
      };
      m.prototype.v = function() {
        var f = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
        f[0] = 128;
        for (var a = 1; a < f.length - 8; ++a) f[a] = 0;
        var c = 8 * this.o;
        for (a = f.length - 8; a < f.length; ++a) f[a] = c & 255, c /= 256;
        this.u(f);
        f = Array(16);
        for (a = c = 0; 4 > a; ++a) for (var d = 0; 32 > d; d += 8) f[c++] = this.g[a] >>> d & 255;
        return f;
      };
      function p(f, a) {
        var c = q;
        return Object.prototype.hasOwnProperty.call(c, f) ? c[f] : c[f] = a(f);
      }
      function t(f, a) {
        this.h = a;
        for (var c = [], d = true, e = f.length - 1; 0 <= e; e--) {
          var g = f[e] | 0;
          d && g == a || (c[e] = g, d = false);
        }
        this.g = c;
      }
      var q = {};
      function u(f) {
        return -128 <= f && 128 > f ? p(f, function(a) {
          return new t([a | 0], 0 > a ? -1 : 0);
        }) : new t([f | 0], 0 > f ? -1 : 0);
      }
      function v2(f) {
        if (isNaN(f) || !isFinite(f)) return w2;
        if (0 > f) return x(v2(-f));
        for (var a = [], c = 1, d = 0; f >= c; d++) a[d] = f / c | 0, c *= 4294967296;
        return new t(a, 0);
      }
      function y(f, a) {
        if (0 == f.length) throw Error("number format error: empty string");
        a = a || 10;
        if (2 > a || 36 < a) throw Error("radix out of range: " + a);
        if ("-" == f.charAt(0)) return x(y(f.substring(1), a));
        if (0 <= f.indexOf("-")) throw Error('number format error: interior "-" character');
        for (var c = v2(Math.pow(a, 8)), d = w2, e = 0; e < f.length; e += 8) {
          var g = Math.min(8, f.length - e), b2 = parseInt(f.substring(e, e + g), a);
          8 > g ? (g = v2(Math.pow(a, g)), d = d.j(g).add(v2(b2))) : (d = d.j(c), d = d.add(v2(b2)));
        }
        return d;
      }
      var w2 = u(0), z2 = u(1), A = u(16777216);
      h = t.prototype;
      h.m = function() {
        if (B(this)) return -x(this).m();
        for (var f = 0, a = 1, c = 0; c < this.g.length; c++) {
          var d = this.i(c);
          f += (0 <= d ? d : 4294967296 + d) * a;
          a *= 4294967296;
        }
        return f;
      };
      h.toString = function(f) {
        f = f || 10;
        if (2 > f || 36 < f) throw Error("radix out of range: " + f);
        if (C(this)) return "0";
        if (B(this)) return "-" + x(this).toString(f);
        for (var a = v2(Math.pow(f, 6)), c = this, d = ""; ; ) {
          var e = D2(c, a).g;
          c = F(c, e.j(a));
          var g = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(f);
          c = e;
          if (C(c)) return g + d;
          for (; 6 > g.length; ) g = "0" + g;
          d = g + d;
        }
      };
      h.i = function(f) {
        return 0 > f ? 0 : f < this.g.length ? this.g[f] : this.h;
      };
      function C(f) {
        if (0 != f.h) return false;
        for (var a = 0; a < f.g.length; a++) if (0 != f.g[a]) return false;
        return true;
      }
      function B(f) {
        return -1 == f.h;
      }
      h.l = function(f) {
        f = F(this, f);
        return B(f) ? -1 : C(f) ? 0 : 1;
      };
      function x(f) {
        for (var a = f.g.length, c = [], d = 0; d < a; d++) c[d] = ~f.g[d];
        return new t(c, ~f.h).add(z2);
      }
      h.abs = function() {
        return B(this) ? x(this) : this;
      };
      h.add = function(f) {
        for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0, e = 0; e <= a; e++) {
          var g = d + (this.i(e) & 65535) + (f.i(e) & 65535), b2 = (g >>> 16) + (this.i(e) >>> 16) + (f.i(e) >>> 16);
          d = b2 >>> 16;
          g &= 65535;
          b2 &= 65535;
          c[e] = b2 << 16 | g;
        }
        return new t(c, c[c.length - 1] & -2147483648 ? -1 : 0);
      };
      function F(f, a) {
        return f.add(x(a));
      }
      h.j = function(f) {
        if (C(this) || C(f)) return w2;
        if (B(this)) return B(f) ? x(this).j(x(f)) : x(x(this).j(f));
        if (B(f)) return x(this.j(x(f)));
        if (0 > this.l(A) && 0 > f.l(A)) return v2(this.m() * f.m());
        for (var a = this.g.length + f.g.length, c = [], d = 0; d < 2 * a; d++) c[d] = 0;
        for (d = 0; d < this.g.length; d++) for (var e = 0; e < f.g.length; e++) {
          var g = this.i(d) >>> 16, b2 = this.i(d) & 65535, r = f.i(e) >>> 16, E = f.i(e) & 65535;
          c[2 * d + 2 * e] += b2 * E;
          G(c, 2 * d + 2 * e);
          c[2 * d + 2 * e + 1] += g * E;
          G(c, 2 * d + 2 * e + 1);
          c[2 * d + 2 * e + 1] += b2 * r;
          G(c, 2 * d + 2 * e + 1);
          c[2 * d + 2 * e + 2] += g * r;
          G(c, 2 * d + 2 * e + 2);
        }
        for (d = 0; d < a; d++) c[d] = c[2 * d + 1] << 16 | c[2 * d];
        for (d = a; d < 2 * a; d++) c[d] = 0;
        return new t(c, 0);
      };
      function G(f, a) {
        for (; (f[a] & 65535) != f[a]; ) f[a + 1] += f[a] >>> 16, f[a] &= 65535, a++;
      }
      function H2(f, a) {
        this.g = f;
        this.h = a;
      }
      function D2(f, a) {
        if (C(a)) throw Error("division by zero");
        if (C(f)) return new H2(w2, w2);
        if (B(f)) return a = D2(x(f), a), new H2(x(a.g), x(a.h));
        if (B(a)) return a = D2(f, x(a)), new H2(x(a.g), a.h);
        if (30 < f.g.length) {
          if (B(f) || B(a)) throw Error("slowDivide_ only works with positive integers.");
          for (var c = z2, d = a; 0 >= d.l(f); ) c = I(c), d = I(d);
          var e = J2(c, 1), g = J2(d, 1);
          d = J2(d, 2);
          for (c = J2(c, 2); !C(d); ) {
            var b2 = g.add(d);
            0 >= b2.l(f) && (e = e.add(c), g = b2);
            d = J2(d, 1);
            c = J2(c, 1);
          }
          a = F(f, e.j(a));
          return new H2(e, a);
        }
        for (e = w2; 0 <= f.l(a); ) {
          c = Math.max(1, Math.floor(f.m() / a.m()));
          d = Math.ceil(Math.log(c) / Math.LN2);
          d = 48 >= d ? 1 : Math.pow(2, d - 48);
          g = v2(c);
          for (b2 = g.j(a); B(b2) || 0 < b2.l(f); ) c -= d, g = v2(c), b2 = g.j(a);
          C(g) && (g = z2);
          e = e.add(g);
          f = F(f, b2);
        }
        return new H2(e, f);
      }
      h.A = function(f) {
        return D2(this, f).h;
      };
      h.and = function(f) {
        for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) & f.i(d);
        return new t(c, this.h & f.h);
      };
      h.or = function(f) {
        for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) | f.i(d);
        return new t(c, this.h | f.h);
      };
      h.xor = function(f) {
        for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) ^ f.i(d);
        return new t(c, this.h ^ f.h);
      };
      function I(f) {
        for (var a = f.g.length + 1, c = [], d = 0; d < a; d++) c[d] = f.i(d) << 1 | f.i(d - 1) >>> 31;
        return new t(c, f.h);
      }
      function J2(f, a) {
        var c = a >> 5;
        a %= 32;
        for (var d = f.g.length - c, e = [], g = 0; g < d; g++) e[g] = 0 < a ? f.i(g + c) >>> a | f.i(g + c + 1) << 32 - a : f.i(g + c);
        return new t(e, f.h);
      }
      m.prototype.digest = m.prototype.v;
      m.prototype.reset = m.prototype.s;
      m.prototype.update = m.prototype.u;
      Md5 = bloom_blob_es2018.Md5 = m;
      t.prototype.add = t.prototype.add;
      t.prototype.multiply = t.prototype.j;
      t.prototype.modulo = t.prototype.A;
      t.prototype.compare = t.prototype.l;
      t.prototype.toNumber = t.prototype.m;
      t.prototype.toString = t.prototype.toString;
      t.prototype.getBits = t.prototype.i;
      t.fromNumber = v2;
      t.fromString = y;
      Integer = bloom_blob_es2018.Integer = t;
    }).apply(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }
});

// node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js
var commonjsGlobal2, webchannel_blob_es2018, XhrIo, FetchXmlHttpFactory, WebChannel, EventType, ErrorCode, Stat, Event, getStatEventTarget, createWebChannelTransport;
var init_webchannel_blob_es2018 = __esm({
  "node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js"() {
    commonjsGlobal2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    webchannel_blob_es2018 = {};
    (function() {
      var h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b2, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b2] = c.value;
        return a;
      };
      function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal2 && commonjsGlobal2];
        for (var b2 = 0; b2 < a.length; ++b2) {
          var c = a[b2];
          if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
      }
      var ca = ba(this);
      function da(a, b2) {
        if (b2) a: {
          var c = ca;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b2 = b2(d);
          b2 != d && null != b2 && aa(c, a, { configurable: true, writable: true, value: b2 });
        }
      }
      function ea(a, b2) {
        a instanceof String && (a += "");
        var c = 0, d = false, e = { next: function() {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b2(f, a[f]), done: false };
          }
          d = true;
          return { done: true, value: void 0 };
        } };
        e[Symbol.iterator] = function() {
          return e;
        };
        return e;
      }
      da("Array.prototype.values", function(a) {
        return a ? a : function() {
          return ea(this, function(b2, c) {
            return c;
          });
        };
      });
      var fa = fa || {}, k = this || self;
      function ha(a) {
        var b2 = typeof a;
        b2 = "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
        return "array" == b2 || "object" == b2 && "number" == typeof a.length;
      }
      function n(a) {
        var b2 = typeof a;
        return "object" == b2 && null != a || "function" == b2;
      }
      function ia(a, b2, c) {
        return a.call.apply(a.bind, arguments);
      }
      function ja(a, b2, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b2, e);
          };
        }
        return function() {
          return a.apply(b2, arguments);
        };
      }
      function p(a, b2, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return p.apply(null, arguments);
      }
      function ka(a, b2) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
          var d = c.slice();
          d.push.apply(d, arguments);
          return a.apply(this, d);
        };
      }
      function r(a, b2) {
        function c() {
        }
        c.prototype = b2.prototype;
        a.aa = b2.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.Qb = function(d, e, f) {
          for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++) g[m - 2] = arguments[m];
          return b2.prototype[e].apply(d, g);
        };
      }
      function la(a) {
        const b2 = a.length;
        if (0 < b2) {
          const c = Array(b2);
          for (let d = 0; d < b2; d++) c[d] = a[d];
          return c;
        }
        return [];
      }
      function ma(a, b2) {
        for (let c = 1; c < arguments.length; c++) {
          const d = arguments[c];
          if (ha(d)) {
            const e = a.length || 0, f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g];
          } else a.push(d);
        }
      }
      class na {
        constructor(a, b2) {
          this.i = a;
          this.j = b2;
          this.h = 0;
          this.g = null;
        }
        get() {
          let a;
          0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
          return a;
        }
      }
      function t(a) {
        return /^[\s\xa0]*$/.test(a);
      }
      function u() {
        var a = k.navigator;
        return a && (a = a.userAgent) ? a : "";
      }
      function oa(a) {
        oa[" "](a);
        return a;
      }
      oa[" "] = function() {
      };
      var pa = -1 != u().indexOf("Gecko") && !(-1 != u().toLowerCase().indexOf("webkit") && -1 == u().indexOf("Edge")) && !(-1 != u().indexOf("Trident") || -1 != u().indexOf("MSIE")) && -1 == u().indexOf("Edge");
      function qa(a, b2, c) {
        for (const d in a) b2.call(c, a[d], d, a);
      }
      function ra(a, b2) {
        for (const c in a) b2.call(void 0, a[c], c, a);
      }
      function sa(a) {
        const b2 = {};
        for (const c in a) b2[c] = a[c];
        return b2;
      }
      const ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      function ua(a, b2) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
          d = arguments[e];
          for (c in d) a[c] = d[c];
          for (let f = 0; f < ta.length; f++) c = ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
      function va(a) {
        var b2 = 1;
        a = a.split(":");
        const c = [];
        for (; 0 < b2 && a.length; ) c.push(a.shift()), b2--;
        a.length && c.push(a.join(":"));
        return c;
      }
      function wa(a) {
        k.setTimeout(() => {
          throw a;
        }, 0);
      }
      function xa() {
        var a = za;
        let b2 = null;
        a.g && (b2 = a.g, a.g = a.g.next, a.g || (a.h = null), b2.next = null);
        return b2;
      }
      class Aa {
        constructor() {
          this.h = this.g = null;
        }
        add(a, b2) {
          const c = Ba.get();
          c.set(a, b2);
          this.h ? this.h.next = c : this.g = c;
          this.h = c;
        }
      }
      var Ba = new na(() => new Ca(), (a) => a.reset());
      class Ca {
        constructor() {
          this.next = this.g = this.h = null;
        }
        set(a, b2) {
          this.h = a;
          this.g = b2;
          this.next = null;
        }
        reset() {
          this.next = this.g = this.h = null;
        }
      }
      let x, y = false, za = new Aa(), Ea = () => {
        const a = k.Promise.resolve(void 0);
        x = () => {
          a.then(Da);
        };
      };
      var Da = () => {
        for (var a; a = xa(); ) {
          try {
            a.h.call(a.g);
          } catch (c) {
            wa(c);
          }
          var b2 = Ba;
          b2.j(a);
          100 > b2.h && (b2.h++, a.next = b2.g, b2.g = a);
        }
        y = false;
      };
      function z2() {
        this.s = this.s;
        this.C = this.C;
      }
      z2.prototype.s = false;
      z2.prototype.ma = function() {
        this.s || (this.s = true, this.N());
      };
      z2.prototype.N = function() {
        if (this.C) for (; this.C.length; ) this.C.shift()();
      };
      function A(a, b2) {
        this.type = a;
        this.g = this.target = b2;
        this.defaultPrevented = false;
      }
      A.prototype.h = function() {
        this.defaultPrevented = true;
      };
      var Fa = function() {
        if (!k.addEventListener || !Object.defineProperty) return false;
        var a = false, b2 = Object.defineProperty({}, "passive", { get: function() {
          a = true;
        } });
        try {
          const c = () => {
          };
          k.addEventListener("test", c, b2);
          k.removeEventListener("test", c, b2);
        } catch (c) {
        }
        return a;
      }();
      function C(a, b2) {
        A.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        if (a) {
          var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
          this.target = a.target || a.srcElement;
          this.g = b2;
          if (b2 = a.relatedTarget) {
            if (pa) {
              a: {
                try {
                  oa(b2.nodeName);
                  var e = true;
                  break a;
                } catch (f) {
                }
                e = false;
              }
              e || (b2 = null);
            }
          } else "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
          this.relatedTarget = b2;
          d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
          this.button = a.button;
          this.key = a.key || "";
          this.ctrlKey = a.ctrlKey;
          this.altKey = a.altKey;
          this.shiftKey = a.shiftKey;
          this.metaKey = a.metaKey;
          this.pointerId = a.pointerId || 0;
          this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ga[a.pointerType] || "";
          this.state = a.state;
          this.i = a;
          a.defaultPrevented && C.aa.h.call(this);
        }
      }
      r(C, A);
      var Ga = { 2: "touch", 3: "pen", 4: "mouse" };
      C.prototype.h = function() {
        C.aa.h.call(this);
        var a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = false;
      };
      var D2 = "closure_listenable_" + (1e6 * Math.random() | 0);
      var Ha = 0;
      function Ia(a, b2, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b2;
        this.type = c;
        this.capture = !!d;
        this.ha = e;
        this.key = ++Ha;
        this.da = this.fa = false;
      }
      function Ja(a) {
        a.da = true;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ha = null;
      }
      function Ka(a) {
        this.src = a;
        this.g = {};
        this.h = 0;
      }
      Ka.prototype.add = function(a, b2, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = La(a, b2, d, e);
        -1 < g ? (b2 = a[g], c || (b2.fa = false)) : (b2 = new Ia(b2, this.src, f, !!d, e), b2.fa = c, a.push(b2));
        return b2;
      };
      function Ma(a, b2) {
        var c = b2.type;
        if (c in a.g) {
          var d = a.g[c], e = Array.prototype.indexOf.call(d, b2, void 0), f;
          (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
          f && (Ja(b2), 0 == a.g[c].length && (delete a.g[c], a.h--));
        }
      }
      function La(a, b2, c, d) {
        for (var e = 0; e < a.length; ++e) {
          var f = a[e];
          if (!f.da && f.listener == b2 && f.capture == !!c && f.ha == d) return e;
        }
        return -1;
      }
      var Na = "closure_lm_" + (1e6 * Math.random() | 0), Oa = {};
      function Qa(a, b2, c, d, e) {
        if (d && d.once) return Ra(a, b2, c, d, e);
        if (Array.isArray(b2)) {
          for (var f = 0; f < b2.length; f++) Qa(a, b2[f], c, d, e);
          return null;
        }
        c = Sa(c);
        return a && a[D2] ? a.K(b2, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b2, c, false, d, e);
      }
      function Ta(a, b2, c, d, e, f) {
        if (!b2) throw Error("Invalid event type");
        var g = n(e) ? !!e.capture : !!e, m = Ua(a);
        m || (a[Na] = m = new Ka(a));
        c = m.add(b2, c, d, g, f);
        if (c.proxy) return c;
        d = Va();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Fa || (e = g), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Wa(b2.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        return c;
      }
      function Va() {
        function a(c) {
          return b2.call(a.src, a.listener, c);
        }
        const b2 = Xa;
        return a;
      }
      function Ra(a, b2, c, d, e) {
        if (Array.isArray(b2)) {
          for (var f = 0; f < b2.length; f++) Ra(a, b2[f], c, d, e);
          return null;
        }
        c = Sa(c);
        return a && a[D2] ? a.L(b2, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b2, c, true, d, e);
      }
      function Ya(a, b2, c, d, e) {
        if (Array.isArray(b2)) for (var f = 0; f < b2.length; f++) Ya(a, b2[f], c, d, e);
        else (d = n(d) ? !!d.capture : !!d, c = Sa(c), a && a[D2]) ? (a = a.i, b2 = String(b2).toString(), b2 in a.g && (f = a.g[b2], c = La(f, c, d, e), -1 < c && (Ja(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b2], a.h--)))) : a && (a = Ua(a)) && (b2 = a.g[b2.toString()], a = -1, b2 && (a = La(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && Za(c));
      }
      function Za(a) {
        if ("number" !== typeof a && a && !a.da) {
          var b2 = a.src;
          if (b2 && b2[D2]) Ma(b2.i, a);
          else {
            var c = a.type, d = a.proxy;
            b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(Wa(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
            (c = Ua(b2)) ? (Ma(c, a), 0 == c.h && (c.src = null, b2[Na] = null)) : Ja(a);
          }
        }
      }
      function Wa(a) {
        return a in Oa ? Oa[a] : Oa[a] = "on" + a;
      }
      function Xa(a, b2) {
        if (a.da) a = true;
        else {
          b2 = new C(b2, this);
          var c = a.listener, d = a.ha || a.src;
          a.fa && Za(a);
          a = c.call(d, b2);
        }
        return a;
      }
      function Ua(a) {
        a = a[Na];
        return a instanceof Ka ? a : null;
      }
      var $a = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
      function Sa(a) {
        if ("function" === typeof a) return a;
        a[$a] || (a[$a] = function(b2) {
          return a.handleEvent(b2);
        });
        return a[$a];
      }
      function E() {
        z2.call(this);
        this.i = new Ka(this);
        this.M = this;
        this.F = null;
      }
      r(E, z2);
      E.prototype[D2] = true;
      E.prototype.removeEventListener = function(a, b2, c, d) {
        Ya(this, a, b2, c, d);
      };
      function F(a, b2) {
        var c, d = a.F;
        if (d) for (c = []; d; d = d.F) c.push(d);
        a = a.M;
        d = b2.type || b2;
        if ("string" === typeof b2) b2 = new A(b2, a);
        else if (b2 instanceof A) b2.target = b2.target || a;
        else {
          var e = b2;
          b2 = new A(d, a);
          ua(b2, e);
        }
        e = true;
        if (c) for (var f = c.length - 1; 0 <= f; f--) {
          var g = b2.g = c[f];
          e = ab(g, d, true, b2) && e;
        }
        g = b2.g = a;
        e = ab(g, d, true, b2) && e;
        e = ab(g, d, false, b2) && e;
        if (c) for (f = 0; f < c.length; f++) g = b2.g = c[f], e = ab(g, d, false, b2) && e;
      }
      E.prototype.N = function() {
        E.aa.N.call(this);
        if (this.i) {
          var a = this.i, c;
          for (c in a.g) {
            for (var d = a.g[c], e = 0; e < d.length; e++) Ja(d[e]);
            delete a.g[c];
            a.h--;
          }
        }
        this.F = null;
      };
      E.prototype.K = function(a, b2, c, d) {
        return this.i.add(String(a), b2, false, c, d);
      };
      E.prototype.L = function(a, b2, c, d) {
        return this.i.add(String(a), b2, true, c, d);
      };
      function ab(a, b2, c, d) {
        b2 = a.i.g[String(b2)];
        if (!b2) return true;
        b2 = b2.concat();
        for (var e = true, f = 0; f < b2.length; ++f) {
          var g = b2[f];
          if (g && !g.da && g.capture == c) {
            var m = g.listener, q = g.ha || g.src;
            g.fa && Ma(a.i, g);
            e = false !== m.call(q, d) && e;
          }
        }
        return e && !d.defaultPrevented;
      }
      function bb(a, b2, c) {
        if ("function" === typeof a) c && (a = p(a, c));
        else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b2) ? -1 : k.setTimeout(a, b2 || 0);
      }
      function cb(a) {
        a.g = bb(() => {
          a.g = null;
          a.i && (a.i = false, cb(a));
        }, a.l);
        const b2 = a.h;
        a.h = null;
        a.m.apply(null, b2);
      }
      class eb extends z2 {
        constructor(a, b2) {
          super();
          this.m = a;
          this.l = b2;
          this.h = null;
          this.i = false;
          this.g = null;
        }
        j(a) {
          this.h = arguments;
          this.g ? this.i = true : cb(this);
        }
        N() {
          super.N();
          this.g && (k.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
        }
      }
      function G(a) {
        z2.call(this);
        this.h = a;
        this.g = {};
      }
      r(G, z2);
      var fb = [];
      function gb(a) {
        qa(a.g, function(b2, c) {
          this.g.hasOwnProperty(c) && Za(b2);
        }, a);
        a.g = {};
      }
      G.prototype.N = function() {
        G.aa.N.call(this);
        gb(this);
      };
      G.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
      };
      var hb = k.JSON.stringify;
      var ib = k.JSON.parse;
      var jb = class {
        stringify(a) {
          return k.JSON.stringify(a, void 0);
        }
        parse(a) {
          return k.JSON.parse(a, void 0);
        }
      };
      function kb() {
      }
      kb.prototype.h = null;
      function lb(a) {
        return a.h || (a.h = a.i());
      }
      function mb() {
      }
      var H2 = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
      function nb() {
        A.call(this, "d");
      }
      r(nb, A);
      function ob() {
        A.call(this, "c");
      }
      r(ob, A);
      var I = {}, pb = null;
      function qb() {
        return pb = pb || new E();
      }
      I.La = "serverreachability";
      function rb(a) {
        A.call(this, I.La, a);
      }
      r(rb, A);
      function J2(a) {
        const b2 = qb();
        F(b2, new rb(b2));
      }
      I.STAT_EVENT = "statevent";
      function sb(a, b2) {
        A.call(this, I.STAT_EVENT, a);
        this.stat = b2;
      }
      r(sb, A);
      function K(a) {
        const b2 = qb();
        F(b2, new sb(b2, a));
      }
      I.Ma = "timingevent";
      function tb(a, b2) {
        A.call(this, I.Ma, a);
        this.size = b2;
      }
      r(tb, A);
      function ub(a, b2) {
        if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
        return k.setTimeout(function() {
          a();
        }, b2);
      }
      function vb() {
        this.g = true;
      }
      vb.prototype.xa = function() {
        this.g = false;
      };
      function wb(a, b2, c, d, e, f) {
        a.info(function() {
          if (a.g) if (f) {
            var g = "";
            for (var m = f.split("&"), q = 0; q < m.length; q++) {
              var l = m[q].split("=");
              if (1 < l.length) {
                var v2 = l[0];
                l = l[1];
                var w2 = v2.split("_");
                g = 2 <= w2.length && "type" == w2[1] ? g + (v2 + "=" + l + "&") : g + (v2 + "=redacted&");
              }
            }
          } else g = null;
          else g = f;
          return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + g;
        });
      }
      function xb(a, b2, c, d, e, f, g) {
        a.info(function() {
          return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + g;
        });
      }
      function L(a, b2, c, d) {
        a.info(function() {
          return "XMLHTTP TEXT (" + b2 + "): " + yb(a, c) + (d ? " " + d : "");
        });
      }
      function zb(a, b2) {
        a.info(function() {
          return "TIMEOUT: " + b2;
        });
      }
      vb.prototype.info = function() {
      };
      function yb(a, b2) {
        if (!a.g) return b2;
        if (!b2) return null;
        try {
          var c = JSON.parse(b2);
          if (c) {
            for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) {
              var d = c[a];
              if (!(2 > d.length)) {
                var e = d[1];
                if (Array.isArray(e) && !(1 > e.length)) {
                  var f = e[0];
                  if ("noop" != f && "stop" != f && "close" != f) for (var g = 1; g < e.length; g++) e[g] = "";
                }
              }
            }
          }
          return hb(c);
        } catch (m) {
          return b2;
        }
      }
      var Ab = { NO_ERROR: 0, gb: 1, tb: 2, sb: 3, nb: 4, rb: 5, ub: 6, Ia: 7, TIMEOUT: 8, xb: 9 };
      var Bb = { lb: "complete", Hb: "success", Ja: "error", Ia: "abort", zb: "ready", Ab: "readystatechange", TIMEOUT: "timeout", vb: "incrementaldata", yb: "progress", ob: "downloadprogress", Pb: "uploadprogress" };
      var Cb;
      function Db() {
      }
      r(Db, kb);
      Db.prototype.g = function() {
        return new XMLHttpRequest();
      };
      Db.prototype.i = function() {
        return {};
      };
      Cb = new Db();
      function M(a, b2, c, d) {
        this.j = a;
        this.i = b2;
        this.l = c;
        this.R = d || 1;
        this.U = new G(this);
        this.I = 45e3;
        this.H = null;
        this.o = false;
        this.m = this.A = this.v = this.L = this.F = this.S = this.B = null;
        this.D = [];
        this.g = null;
        this.C = 0;
        this.s = this.u = null;
        this.X = -1;
        this.J = false;
        this.O = 0;
        this.M = null;
        this.W = this.K = this.T = this.P = false;
        this.h = new Eb();
      }
      function Eb() {
        this.i = null;
        this.g = "";
        this.h = false;
      }
      var Fb = {}, Gb = {};
      function Hb(a, b2, c) {
        a.L = 1;
        a.v = Ib(N(b2));
        a.m = c;
        a.P = true;
        Jb(a, null);
      }
      function Jb(a, b2) {
        a.F = Date.now();
        Kb(a);
        a.A = N(a.v);
        var c = a.A, d = a.R;
        Array.isArray(d) || (d = [String(d)]);
        Lb(c.i, "t", d);
        a.C = 0;
        c = a.j.J;
        a.h = new Eb();
        a.g = Mb(a.j, c ? b2 : null, !a.m);
        0 < a.O && (a.M = new eb(p(a.Y, a, a.g), a.O));
        b2 = a.U;
        c = a.g;
        d = a.ca;
        var e = "readystatechange";
        Array.isArray(e) || (e && (fb[0] = e.toString()), e = fb);
        for (var f = 0; f < e.length; f++) {
          var g = Qa(c, e[f], d || b2.handleEvent, false, b2.h || b2);
          if (!g) break;
          b2.g[g.key] = g;
        }
        b2 = a.H ? sa(a.H) : {};
        a.m ? (a.u || (a.u = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(
          a.A,
          a.u,
          a.m,
          b2
        )) : (a.u = "GET", a.g.ea(a.A, a.u, null, b2));
        J2();
        wb(a.i, a.u, a.A, a.l, a.R, a.m);
      }
      M.prototype.ca = function(a) {
        a = a.target;
        const b2 = this.M;
        b2 && 3 == P(a) ? b2.j() : this.Y(a);
      };
      M.prototype.Y = function(a) {
        try {
          if (a == this.g) a: {
            const w2 = P(this.g);
            var b2 = this.g.Ba();
            const O = this.g.Z();
            if (!(3 > w2) && (3 != w2 || this.g && (this.h.h || this.g.oa() || Nb(this.g)))) {
              this.J || 4 != w2 || 7 == b2 || (8 == b2 || 0 >= O ? J2(3) : J2(2));
              Ob(this);
              var c = this.g.Z();
              this.X = c;
              b: if (Pb(this)) {
                var d = Nb(this.g);
                a = "";
                var e = d.length, f = 4 == P(this.g);
                if (!this.h.i) {
                  if ("undefined" === typeof TextDecoder) {
                    Q(this);
                    Qb(this);
                    var g = "";
                    break b;
                  }
                  this.h.i = new k.TextDecoder();
                }
                for (b2 = 0; b2 < e; b2++) this.h.h = true, a += this.h.i.decode(d[b2], { stream: !(f && b2 == e - 1) });
                d.length = 0;
                this.h.g += a;
                this.C = 0;
                g = this.h.g;
              } else g = this.g.oa();
              this.o = 200 == c;
              xb(this.i, this.u, this.A, this.l, this.R, w2, c);
              if (this.o) {
                if (this.T && !this.K) {
                  b: {
                    if (this.g) {
                      var m, q = this.g;
                      if ((m = q.g ? q.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !t(m)) {
                        var l = m;
                        break b;
                      }
                    }
                    l = null;
                  }
                  if (c = l) L(this.i, this.l, c, "Initial handshake response via X-HTTP-Initial-Response"), this.K = true, Rb(this, c);
                  else {
                    this.o = false;
                    this.s = 3;
                    K(12);
                    Q(this);
                    Qb(this);
                    break a;
                  }
                }
                if (this.P) {
                  c = true;
                  let B;
                  for (; !this.J && this.C < g.length; ) if (B = Sb(this, g), B == Gb) {
                    4 == w2 && (this.s = 4, K(14), c = false);
                    L(this.i, this.l, null, "[Incomplete Response]");
                    break;
                  } else if (B == Fb) {
                    this.s = 4;
                    K(15);
                    L(this.i, this.l, g, "[Invalid Chunk]");
                    c = false;
                    break;
                  } else L(this.i, this.l, B, null), Rb(this, B);
                  Pb(this) && 0 != this.C && (this.h.g = this.h.g.slice(this.C), this.C = 0);
                  4 != w2 || 0 != g.length || this.h.h || (this.s = 1, K(16), c = false);
                  this.o = this.o && c;
                  if (!c) L(this.i, this.l, g, "[Invalid Chunked Response]"), Q(this), Qb(this);
                  else if (0 < g.length && !this.W) {
                    this.W = true;
                    var v2 = this.j;
                    v2.g == this && v2.ba && !v2.M && (v2.j.info("Great, no buffering proxy detected. Bytes received: " + g.length), Tb(v2), v2.M = true, K(11));
                  }
                } else L(this.i, this.l, g, null), Rb(this, g);
                4 == w2 && Q(this);
                this.o && !this.J && (4 == w2 ? Ub(this.j, this) : (this.o = false, Kb(this)));
              } else Vb(this.g), 400 == c && 0 < g.indexOf("Unknown SID") ? (this.s = 3, K(12)) : (this.s = 0, K(13)), Q(this), Qb(this);
            }
          }
        } catch (w2) {
        } finally {
        }
      };
      function Pb(a) {
        return a.g ? "GET" == a.u && 2 != a.L && a.j.Ca : false;
      }
      function Sb(a, b2) {
        var c = a.C, d = b2.indexOf("\n", c);
        if (-1 == d) return Gb;
        c = Number(b2.substring(c, d));
        if (isNaN(c)) return Fb;
        d += 1;
        if (d + c > b2.length) return Gb;
        b2 = b2.slice(d, d + c);
        a.C = d + c;
        return b2;
      }
      M.prototype.cancel = function() {
        this.J = true;
        Q(this);
      };
      function Kb(a) {
        a.S = Date.now() + a.I;
        Wb(a, a.I);
      }
      function Wb(a, b2) {
        if (null != a.B) throw Error("WatchDog timer not null");
        a.B = ub(p(a.ba, a), b2);
      }
      function Ob(a) {
        a.B && (k.clearTimeout(a.B), a.B = null);
      }
      M.prototype.ba = function() {
        this.B = null;
        const a = Date.now();
        0 <= a - this.S ? (zb(this.i, this.A), 2 != this.L && (J2(), K(17)), Q(this), this.s = 2, Qb(this)) : Wb(this, this.S - a);
      };
      function Qb(a) {
        0 == a.j.G || a.J || Ub(a.j, a);
      }
      function Q(a) {
        Ob(a);
        var b2 = a.M;
        b2 && "function" == typeof b2.ma && b2.ma();
        a.M = null;
        gb(a.U);
        a.g && (b2 = a.g, a.g = null, b2.abort(), b2.ma());
      }
      function Rb(a, b2) {
        try {
          var c = a.j;
          if (0 != c.G && (c.g == a || Xb(c.h, a))) {
            if (!a.K && Xb(c.h, a) && 3 == c.G) {
              try {
                var d = c.Da.g.parse(b2);
              } catch (l) {
                d = null;
              }
              if (Array.isArray(d) && 3 == d.length) {
                var e = d;
                if (0 == e[0]) a: {
                  if (!c.u) {
                    if (c.g) if (c.g.F + 3e3 < a.F) Yb(c), Zb(c);
                    else break a;
                    $b(c);
                    K(18);
                  }
                }
                else c.za = e[1], 0 < c.za - c.T && 37500 > e[2] && c.F && 0 == c.v && !c.C && (c.C = ub(p(c.Za, c), 6e3));
                if (1 >= ac(c.h) && c.ca) {
                  try {
                    c.ca();
                  } catch (l) {
                  }
                  c.ca = void 0;
                }
              } else R(c, 11);
            } else if ((a.K || c.g == a) && Yb(c), !t(b2)) for (e = c.Da.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
              let l = e[b2];
              c.T = l[0];
              l = l[1];
              if (2 == c.G) if ("c" == l[0]) {
                c.K = l[1];
                c.ia = l[2];
                const v2 = l[3];
                null != v2 && (c.la = v2, c.j.info("VER=" + c.la));
                const w2 = l[4];
                null != w2 && (c.Aa = w2, c.j.info("SVER=" + c.Aa));
                const O = l[5];
                null != O && "number" === typeof O && 0 < O && (d = 1.5 * O, c.L = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
                d = c;
                const B = a.g;
                if (B) {
                  const ya = B.g ? B.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if (ya) {
                    var f = d.h;
                    f.g || -1 == ya.indexOf("spdy") && -1 == ya.indexOf("quic") && -1 == ya.indexOf("h2") || (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (bc(f, f.h), f.h = null));
                  }
                  if (d.D) {
                    const db2 = B.g ? B.g.getResponseHeader("X-HTTP-Session-Id") : null;
                    db2 && (d.ya = db2, S2(d.I, d.D, db2));
                  }
                }
                c.G = 3;
                c.l && c.l.ua();
                c.ba && (c.R = Date.now() - a.F, c.j.info("Handshake RTT: " + c.R + "ms"));
                d = c;
                var g = a;
                d.qa = cc(d, d.J ? d.ia : null, d.W);
                if (g.K) {
                  dc(d.h, g);
                  var m = g, q = d.L;
                  q && (m.I = q);
                  m.B && (Ob(m), Kb(m));
                  d.g = g;
                } else ec(d);
                0 < c.i.length && fc(c);
              } else "stop" != l[0] && "close" != l[0] || R(c, 7);
              else 3 == c.G && ("stop" == l[0] || "close" == l[0] ? "stop" == l[0] ? R(c, 7) : gc(c) : "noop" != l[0] && c.l && c.l.ta(l), c.v = 0);
            }
          }
          J2(4);
        } catch (l) {
        }
      }
      var hc = class {
        constructor(a, b2) {
          this.g = a;
          this.map = b2;
        }
      };
      function ic(a) {
        this.l = a || 10;
        k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.chrome && k.chrome.loadTimes && k.chrome.loadTimes() && k.chrome.loadTimes().wasFetchedViaSpdy);
        this.j = a ? this.l : 1;
        this.g = null;
        1 < this.j && (this.g = /* @__PURE__ */ new Set());
        this.h = null;
        this.i = [];
      }
      function jc(a) {
        return a.h ? true : a.g ? a.g.size >= a.j : false;
      }
      function ac(a) {
        return a.h ? 1 : a.g ? a.g.size : 0;
      }
      function Xb(a, b2) {
        return a.h ? a.h == b2 : a.g ? a.g.has(b2) : false;
      }
      function bc(a, b2) {
        a.g ? a.g.add(b2) : a.h = b2;
      }
      function dc(a, b2) {
        a.h && a.h == b2 ? a.h = null : a.g && a.g.has(b2) && a.g.delete(b2);
      }
      ic.prototype.cancel = function() {
        this.i = kc(this);
        if (this.h) this.h.cancel(), this.h = null;
        else if (this.g && 0 !== this.g.size) {
          for (const a of this.g.values()) a.cancel();
          this.g.clear();
        }
      };
      function kc(a) {
        if (null != a.h) return a.i.concat(a.h.D);
        if (null != a.g && 0 !== a.g.size) {
          let b2 = a.i;
          for (const c of a.g.values()) b2 = b2.concat(c.D);
          return b2;
        }
        return la(a.i);
      }
      function lc(a) {
        if (a.V && "function" == typeof a.V) return a.V();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
        if ("string" === typeof a) return a.split("");
        if (ha(a)) {
          for (var b2 = [], c = a.length, d = 0; d < c; d++) b2.push(a[d]);
          return b2;
        }
        b2 = [];
        c = 0;
        for (d in a) b2[c++] = a[d];
        return b2;
      }
      function mc(a) {
        if (a.na && "function" == typeof a.na) return a.na();
        if (!a.V || "function" != typeof a.V) {
          if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
          if (!("undefined" !== typeof Set && a instanceof Set)) {
            if (ha(a) || "string" === typeof a) {
              var b2 = [];
              a = a.length;
              for (var c = 0; c < a; c++) b2.push(c);
              return b2;
            }
            b2 = [];
            c = 0;
            for (const d in a) b2[c++] = d;
            return b2;
          }
        }
      }
      function nc(a, b2) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b2, void 0);
        else if (ha(a) || "string" === typeof a) Array.prototype.forEach.call(a, b2, void 0);
        else for (var c = mc(a), d = lc(a), e = d.length, f = 0; f < e; f++) b2.call(void 0, d[f], c && c[f], a);
      }
      var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
      function pc(a, b2) {
        if (a) {
          a = a.split("&");
          for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("="), e = null;
            if (0 <= d) {
              var f = a[c].substring(0, d);
              e = a[c].substring(d + 1);
            } else f = a[c];
            b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
          }
        }
      }
      function T(a) {
        this.g = this.o = this.j = "";
        this.s = null;
        this.m = this.l = "";
        this.h = false;
        if (a instanceof T) {
          this.h = a.h;
          qc(this, a.j);
          this.o = a.o;
          this.g = a.g;
          rc(this, a.s);
          this.l = a.l;
          var b2 = a.i;
          var c = new sc();
          c.i = b2.i;
          b2.g && (c.g = new Map(b2.g), c.h = b2.h);
          tc(this, c);
          this.m = a.m;
        } else a && (b2 = String(a).match(oc)) ? (this.h = false, qc(this, b2[1] || "", true), this.o = uc(b2[2] || ""), this.g = uc(b2[3] || "", true), rc(this, b2[4]), this.l = uc(b2[5] || "", true), tc(this, b2[6] || "", true), this.m = uc(b2[7] || "")) : (this.h = false, this.i = new sc(null, this.h));
      }
      T.prototype.toString = function() {
        var a = [], b2 = this.j;
        b2 && a.push(vc(b2, wc, true), ":");
        var c = this.g;
        if (c || "file" == b2) a.push("//"), (b2 = this.o) && a.push(vc(b2, wc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.s, null != c && a.push(":", String(c));
        if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(vc(c, "/" == c.charAt(0) ? xc : yc, true));
        (c = this.i.toString()) && a.push("?", c);
        (c = this.m) && a.push("#", vc(c, zc));
        return a.join("");
      };
      function N(a) {
        return new T(a);
      }
      function qc(a, b2, c) {
        a.j = c ? uc(b2, true) : b2;
        a.j && (a.j = a.j.replace(/:$/, ""));
      }
      function rc(a, b2) {
        if (b2) {
          b2 = Number(b2);
          if (isNaN(b2) || 0 > b2) throw Error("Bad port number " + b2);
          a.s = b2;
        } else a.s = null;
      }
      function tc(a, b2, c) {
        b2 instanceof sc ? (a.i = b2, Ac(a.i, a.h)) : (c || (b2 = vc(b2, Bc)), a.i = new sc(b2, a.h));
      }
      function S2(a, b2, c) {
        a.i.set(b2, c);
      }
      function Ib(a) {
        S2(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
        return a;
      }
      function uc(a, b2) {
        return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
      }
      function vc(a, b2, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b2, Cc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
      }
      function Cc(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
      }
      var wc = /[#\/\?@]/g, yc = /[#\?:]/g, xc = /[#\?]/g, Bc = /[#\?@]/g, zc = /#/g;
      function sc(a, b2) {
        this.h = this.g = null;
        this.i = a || null;
        this.j = !!b2;
      }
      function U(a) {
        a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && pc(a.i, function(b2, c) {
          a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
        }));
      }
      h = sc.prototype;
      h.add = function(a, b2) {
        U(this);
        this.i = null;
        a = V(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b2);
        this.h += 1;
        return this;
      };
      function Dc(a, b2) {
        U(a);
        b2 = V(a, b2);
        a.g.has(b2) && (a.i = null, a.h -= a.g.get(b2).length, a.g.delete(b2));
      }
      function Ec(a, b2) {
        U(a);
        b2 = V(a, b2);
        return a.g.has(b2);
      }
      h.forEach = function(a, b2) {
        U(this);
        this.g.forEach(function(c, d) {
          c.forEach(function(e) {
            a.call(b2, e, d, this);
          }, this);
        }, this);
      };
      h.na = function() {
        U(this);
        const a = Array.from(this.g.values()), b2 = Array.from(this.g.keys()), c = [];
        for (let d = 0; d < b2.length; d++) {
          const e = a[d];
          for (let f = 0; f < e.length; f++) c.push(b2[d]);
        }
        return c;
      };
      h.V = function(a) {
        U(this);
        let b2 = [];
        if ("string" === typeof a) Ec(this, a) && (b2 = b2.concat(this.g.get(V(this, a))));
        else {
          a = Array.from(this.g.values());
          for (let c = 0; c < a.length; c++) b2 = b2.concat(a[c]);
        }
        return b2;
      };
      h.set = function(a, b2) {
        U(this);
        this.i = null;
        a = V(this, a);
        Ec(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b2]);
        this.h += 1;
        return this;
      };
      h.get = function(a, b2) {
        if (!a) return b2;
        a = this.V(a);
        return 0 < a.length ? String(a[0]) : b2;
      };
      function Lb(a, b2, c) {
        Dc(a, b2);
        0 < c.length && (a.i = null, a.g.set(V(a, b2), la(c)), a.h += c.length);
      }
      h.toString = function() {
        if (this.i) return this.i;
        if (!this.g) return "";
        const a = [], b2 = Array.from(this.g.keys());
        for (var c = 0; c < b2.length; c++) {
          var d = b2[c];
          const f = encodeURIComponent(String(d)), g = this.V(d);
          for (d = 0; d < g.length; d++) {
            var e = f;
            "" !== g[d] && (e += "=" + encodeURIComponent(String(g[d])));
            a.push(e);
          }
        }
        return this.i = a.join("&");
      };
      function V(a, b2) {
        b2 = String(b2);
        a.j && (b2 = b2.toLowerCase());
        return b2;
      }
      function Ac(a, b2) {
        b2 && !a.j && (U(a), a.i = null, a.g.forEach(function(c, d) {
          var e = d.toLowerCase();
          d != e && (Dc(this, d), Lb(this, e, c));
        }, a));
        a.j = b2;
      }
      function Fc(a, b2) {
        const c = new vb();
        if (k.Image) {
          const d = new Image();
          d.onload = ka(W, c, "TestLoadImage: loaded", true, b2, d);
          d.onerror = ka(W, c, "TestLoadImage: error", false, b2, d);
          d.onabort = ka(W, c, "TestLoadImage: abort", false, b2, d);
          d.ontimeout = ka(W, c, "TestLoadImage: timeout", false, b2, d);
          k.setTimeout(function() {
            if (d.ontimeout) d.ontimeout();
          }, 1e4);
          d.src = a;
        } else b2(false);
      }
      function Gc(a, b2) {
        const c = new vb(), d = new AbortController(), e = setTimeout(() => {
          d.abort();
          W(c, "TestPingServer: timeout", false, b2);
        }, 1e4);
        fetch(a, { signal: d.signal }).then((f) => {
          clearTimeout(e);
          f.ok ? W(c, "TestPingServer: ok", true, b2) : W(c, "TestPingServer: server error", false, b2);
        }).catch(() => {
          clearTimeout(e);
          W(c, "TestPingServer: error", false, b2);
        });
      }
      function W(a, b2, c, d, e) {
        try {
          e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c);
        } catch (f) {
        }
      }
      function Hc() {
        this.g = new jb();
      }
      function Ic(a, b2, c) {
        const d = c || "";
        try {
          nc(a, function(e, f) {
            let g = e;
            n(e) && (g = hb(e));
            b2.push(d + f + "=" + encodeURIComponent(g));
          });
        } catch (e) {
          throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
        }
      }
      function Jc(a) {
        this.l = a.Ub || null;
        this.j = a.eb || false;
      }
      r(Jc, kb);
      Jc.prototype.g = function() {
        return new Kc(this.l, this.j);
      };
      Jc.prototype.i = /* @__PURE__ */ function(a) {
        return function() {
          return a;
        };
      }({});
      function Kc(a, b2) {
        E.call(this);
        this.D = a;
        this.o = b2;
        this.m = void 0;
        this.status = this.readyState = 0;
        this.responseType = this.responseText = this.response = this.statusText = "";
        this.onreadystatechange = null;
        this.u = new Headers();
        this.h = null;
        this.B = "GET";
        this.A = "";
        this.g = false;
        this.v = this.j = this.l = null;
      }
      r(Kc, E);
      h = Kc.prototype;
      h.open = function(a, b2) {
        if (0 != this.readyState) throw this.abort(), Error("Error reopening a connection");
        this.B = a;
        this.A = b2;
        this.readyState = 1;
        Lc(this);
      };
      h.send = function(a) {
        if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
        this.g = true;
        const b2 = { headers: this.u, method: this.B, credentials: this.m, cache: void 0 };
        a && (b2.body = a);
        (this.D || k).fetch(new Request(this.A, b2)).then(this.Sa.bind(this), this.ga.bind(this));
      };
      h.abort = function() {
        this.response = this.responseText = "";
        this.u = new Headers();
        this.status = 0;
        this.j && this.j.cancel("Request was aborted.").catch(() => {
        });
        1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, Mc(this));
        this.readyState = 0;
      };
      h.Sa = function(a) {
        if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, Lc(this)), this.g && (this.readyState = 3, Lc(this), this.g))) if ("arraybuffer" === this.responseType) a.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if ("undefined" !== typeof k.ReadableStream && "body" in a) {
          this.j = a.body.getReader();
          if (this.o) {
            if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
            this.response = [];
          } else this.response = this.responseText = "", this.v = new TextDecoder();
          Nc(this);
        } else a.text().then(this.Ra.bind(this), this.ga.bind(this));
      };
      function Nc(a) {
        a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a));
      }
      h.Pa = function(a) {
        if (this.g) {
          if (this.o && a.value) this.response.push(a.value);
          else if (!this.o) {
            var b2 = a.value ? a.value : new Uint8Array(0);
            if (b2 = this.v.decode(b2, { stream: !a.done })) this.response = this.responseText += b2;
          }
          a.done ? Mc(this) : Lc(this);
          3 == this.readyState && Nc(this);
        }
      };
      h.Ra = function(a) {
        this.g && (this.response = this.responseText = a, Mc(this));
      };
      h.Qa = function(a) {
        this.g && (this.response = a, Mc(this));
      };
      h.ga = function() {
        this.g && Mc(this);
      };
      function Mc(a) {
        a.readyState = 4;
        a.l = null;
        a.j = null;
        a.v = null;
        Lc(a);
      }
      h.setRequestHeader = function(a, b2) {
        this.u.append(a, b2);
      };
      h.getResponseHeader = function(a) {
        return this.h ? this.h.get(a.toLowerCase()) || "" : "";
      };
      h.getAllResponseHeaders = function() {
        if (!this.h) return "";
        const a = [], b2 = this.h.entries();
        for (var c = b2.next(); !c.done; ) c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
        return a.join("\r\n");
      };
      function Lc(a) {
        a.onreadystatechange && a.onreadystatechange.call(a);
      }
      Object.defineProperty(Kc.prototype, "withCredentials", { get: function() {
        return "include" === this.m;
      }, set: function(a) {
        this.m = a ? "include" : "same-origin";
      } });
      function Oc(a) {
        let b2 = "";
        qa(a, function(c, d) {
          b2 += d;
          b2 += ":";
          b2 += c;
          b2 += "\r\n";
        });
        return b2;
      }
      function Pc(a, b2, c) {
        a: {
          for (d in c) {
            var d = false;
            break a;
          }
          d = true;
        }
        d || (c = Oc(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : S2(a, b2, c));
      }
      function X2(a) {
        E.call(this);
        this.headers = /* @__PURE__ */ new Map();
        this.o = a || null;
        this.h = false;
        this.v = this.g = null;
        this.D = "";
        this.m = 0;
        this.l = "";
        this.j = this.B = this.u = this.A = false;
        this.I = null;
        this.H = "";
        this.J = false;
      }
      r(X2, E);
      var Qc = /^https?$/i, Rc = ["POST", "PUT"];
      h = X2.prototype;
      h.Ha = function(a) {
        this.J = a;
      };
      h.ea = function(a, b2, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
        b2 = b2 ? b2.toUpperCase() : "GET";
        this.D = a;
        this.l = "";
        this.m = 0;
        this.A = false;
        this.h = true;
        this.g = this.o ? this.o.g() : Cb.g();
        this.v = this.o ? lb(this.o) : lb(Cb);
        this.g.onreadystatechange = p(this.Ea, this);
        try {
          this.B = true, this.g.open(b2, String(a), true), this.B = false;
        } catch (f) {
          Sc(this, f);
          return;
        }
        a = c || "";
        c = new Map(this.headers);
        if (d) if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
        else if ("function" === typeof d.keys && "function" === typeof d.get) for (const f of d.keys()) c.set(f, d.get(f));
        else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find((f) => "content-type" == f.toLowerCase());
        e = k.FormData && a instanceof k.FormData;
        !(0 <= Array.prototype.indexOf.call(Rc, b2, void 0)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        for (const [f, g] of c) this.g.setRequestHeader(f, g);
        this.H && (this.g.responseType = this.H);
        "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
        try {
          Tc(this), this.u = true, this.g.send(a), this.u = false;
        } catch (f) {
          Sc(this, f);
        }
      };
      function Sc(a, b2) {
        a.h = false;
        a.g && (a.j = true, a.g.abort(), a.j = false);
        a.l = b2;
        a.m = 5;
        Uc(a);
        Vc(a);
      }
      function Uc(a) {
        a.A || (a.A = true, F(a, "complete"), F(a, "error"));
      }
      h.abort = function(a) {
        this.g && this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false, this.m = a || 7, F(this, "complete"), F(this, "abort"), Vc(this));
      };
      h.N = function() {
        this.g && (this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false), Vc(this, true));
        X2.aa.N.call(this);
      };
      h.Ea = function() {
        this.s || (this.B || this.u || this.j ? Wc(this) : this.bb());
      };
      h.bb = function() {
        Wc(this);
      };
      function Wc(a) {
        if (a.h && "undefined" != typeof fa && (!a.v[1] || 4 != P(a) || 2 != a.Z())) {
          if (a.u && 4 == P(a)) bb(a.Ea, 0, a);
          else if (F(a, "readystatechange"), 4 == P(a)) {
            a.h = false;
            try {
              const g = a.Z();
              a: switch (g) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var b2 = true;
                  break a;
                default:
                  b2 = false;
              }
              var c;
              if (!(c = b2)) {
                var d;
                if (d = 0 === g) {
                  var e = String(a.D).match(oc)[1] || null;
                  !e && k.self && k.self.location && (e = k.self.location.protocol.slice(0, -1));
                  d = !Qc.test(e ? e.toLowerCase() : "");
                }
                c = d;
              }
              if (c) F(a, "complete"), F(a, "success");
              else {
                a.m = 6;
                try {
                  var f = 2 < P(a) ? a.g.statusText : "";
                } catch (m) {
                  f = "";
                }
                a.l = f + " [" + a.Z() + "]";
                Uc(a);
              }
            } finally {
              Vc(a);
            }
          }
        }
      }
      function Vc(a, b2) {
        if (a.g) {
          Tc(a);
          const c = a.g, d = a.v[0] ? () => {
          } : null;
          a.g = null;
          a.v = null;
          b2 || F(a, "ready");
          try {
            c.onreadystatechange = d;
          } catch (e) {
          }
        }
      }
      function Tc(a) {
        a.I && (k.clearTimeout(a.I), a.I = null);
      }
      h.isActive = function() {
        return !!this.g;
      };
      function P(a) {
        return a.g ? a.g.readyState : 0;
      }
      h.Z = function() {
        try {
          return 2 < P(this) ? this.g.status : -1;
        } catch (a) {
          return -1;
        }
      };
      h.oa = function() {
        try {
          return this.g ? this.g.responseText : "";
        } catch (a) {
          return "";
        }
      };
      h.Oa = function(a) {
        if (this.g) {
          var b2 = this.g.responseText;
          a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
          return ib(b2);
        }
      };
      function Nb(a) {
        try {
          if (!a.g) return null;
          if ("response" in a.g) return a.g.response;
          switch (a.H) {
            case "":
            case "text":
              return a.g.responseText;
            case "arraybuffer":
              if ("mozResponseArrayBuffer" in a.g) return a.g.mozResponseArrayBuffer;
          }
          return null;
        } catch (b2) {
          return null;
        }
      }
      function Vb(a) {
        const b2 = {};
        a = (a.g && 2 <= P(a) ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
        for (let d = 0; d < a.length; d++) {
          if (t(a[d])) continue;
          var c = va(a[d]);
          const e = c[0];
          c = c[1];
          if ("string" !== typeof c) continue;
          c = c.trim();
          const f = b2[e] || [];
          b2[e] = f;
          f.push(c);
        }
        ra(b2, function(d) {
          return d.join(", ");
        });
      }
      h.Ba = function() {
        return this.m;
      };
      h.Ka = function() {
        return "string" === typeof this.l ? this.l : String(this.l);
      };
      function Xc(a, b2, c) {
        return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
      }
      function Yc(a) {
        this.Aa = 0;
        this.i = [];
        this.j = new vb();
        this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null;
        this.Ya = this.U = 0;
        this.Va = Xc("failFast", false, a);
        this.F = this.C = this.u = this.s = this.l = null;
        this.X = true;
        this.za = this.T = -1;
        this.Y = this.v = this.B = 0;
        this.Ta = Xc("baseRetryDelayMs", 5e3, a);
        this.cb = Xc("retryDelaySeedMs", 1e4, a);
        this.Wa = Xc("forwardChannelMaxRetries", 2, a);
        this.wa = Xc("forwardChannelRequestTimeoutMs", 2e4, a);
        this.pa = a && a.xmlHttpFactory || void 0;
        this.Xa = a && a.Tb || void 0;
        this.Ca = a && a.useFetchStreams || false;
        this.L = void 0;
        this.J = a && a.supportsCrossDomainXhr || false;
        this.K = "";
        this.h = new ic(a && a.concurrentRequestLimit);
        this.Da = new Hc();
        this.P = a && a.fastHandshake || false;
        this.O = a && a.encodeInitMessageHeaders || false;
        this.P && this.O && (this.O = false);
        this.Ua = a && a.Rb || false;
        a && a.xa && this.j.xa();
        a && a.forceLongPolling && (this.X = false);
        this.ba = !this.P && this.X && a && a.detectBufferingProxy || false;
        this.ja = void 0;
        a && a.longPollingTimeout && 0 < a.longPollingTimeout && (this.ja = a.longPollingTimeout);
        this.ca = void 0;
        this.R = 0;
        this.M = false;
        this.ka = this.A = null;
      }
      h = Yc.prototype;
      h.la = 8;
      h.G = 1;
      h.connect = function(a, b2, c, d) {
        K(0);
        this.W = a;
        this.H = b2 || {};
        c && void 0 !== d && (this.H.OSID = c, this.H.OAID = d);
        this.F = this.X;
        this.I = cc(this, null, this.W);
        fc(this);
      };
      function gc(a) {
        Zc(a);
        if (3 == a.G) {
          var b2 = a.U++, c = N(a.I);
          S2(c, "SID", a.K);
          S2(c, "RID", b2);
          S2(c, "TYPE", "terminate");
          $c(a, c);
          b2 = new M(a, a.j, b2);
          b2.L = 2;
          b2.v = Ib(N(c));
          c = false;
          if (k.navigator && k.navigator.sendBeacon) try {
            c = k.navigator.sendBeacon(b2.v.toString(), "");
          } catch (d) {
          }
          !c && k.Image && (new Image().src = b2.v, c = true);
          c || (b2.g = Mb(b2.j, null), b2.g.ea(b2.v));
          b2.F = Date.now();
          Kb(b2);
        }
        ad(a);
      }
      function Zb(a) {
        a.g && (Tb(a), a.g.cancel(), a.g = null);
      }
      function Zc(a) {
        Zb(a);
        a.u && (k.clearTimeout(a.u), a.u = null);
        Yb(a);
        a.h.cancel();
        a.s && ("number" === typeof a.s && k.clearTimeout(a.s), a.s = null);
      }
      function fc(a) {
        if (!jc(a.h) && !a.s) {
          a.s = true;
          var b2 = a.Ga;
          x || Ea();
          y || (x(), y = true);
          za.add(b2, a);
          a.B = 0;
        }
      }
      function bd(a, b2) {
        if (ac(a.h) >= a.h.j - (a.s ? 1 : 0)) return false;
        if (a.s) return a.i = b2.D.concat(a.i), true;
        if (1 == a.G || 2 == a.G || a.B >= (a.Va ? 0 : a.Wa)) return false;
        a.s = ub(p(a.Ga, a, b2), cd(a, a.B));
        a.B++;
        return true;
      }
      h.Ga = function(a) {
        if (this.s) if (this.s = null, 1 == this.G) {
          if (!a) {
            this.U = Math.floor(1e5 * Math.random());
            a = this.U++;
            const e = new M(this, this.j, a);
            let f = this.o;
            this.S && (f ? (f = sa(f), ua(f, this.S)) : f = this.S);
            null !== this.m || this.O || (e.H = f, f = null);
            if (this.P) a: {
              var b2 = 0;
              for (var c = 0; c < this.i.length; c++) {
                b: {
                  var d = this.i[c];
                  if ("__data__" in d.map && (d = d.map.__data__, "string" === typeof d)) {
                    d = d.length;
                    break b;
                  }
                  d = void 0;
                }
                if (void 0 === d) break;
                b2 += d;
                if (4096 < b2) {
                  b2 = c;
                  break a;
                }
                if (4096 === b2 || c === this.i.length - 1) {
                  b2 = c + 1;
                  break a;
                }
              }
              b2 = 1e3;
            }
            else b2 = 1e3;
            b2 = dd(this, e, b2);
            c = N(this.I);
            S2(c, "RID", a);
            S2(c, "CVER", 22);
            this.D && S2(c, "X-HTTP-Session-Id", this.D);
            $c(this, c);
            f && (this.O ? b2 = "headers=" + encodeURIComponent(String(Oc(f))) + "&" + b2 : this.m && Pc(c, this.m, f));
            bc(this.h, e);
            this.Ua && S2(c, "TYPE", "init");
            this.P ? (S2(c, "$req", b2), S2(c, "SID", "null"), e.T = true, Hb(e, c, null)) : Hb(e, c, b2);
            this.G = 2;
          }
        } else 3 == this.G && (a ? ed(this, a) : 0 == this.i.length || jc(this.h) || ed(this));
      };
      function ed(a, b2) {
        var c;
        b2 ? c = b2.l : c = a.U++;
        const d = N(a.I);
        S2(d, "SID", a.K);
        S2(d, "RID", c);
        S2(d, "AID", a.T);
        $c(a, d);
        a.m && a.o && Pc(d, a.m, a.o);
        c = new M(a, a.j, c, a.B + 1);
        null === a.m && (c.H = a.o);
        b2 && (a.i = b2.D.concat(a.i));
        b2 = dd(a, c, 1e3);
        c.I = Math.round(0.5 * a.wa) + Math.round(0.5 * a.wa * Math.random());
        bc(a.h, c);
        Hb(c, d, b2);
      }
      function $c(a, b2) {
        a.H && qa(a.H, function(c, d) {
          S2(b2, d, c);
        });
        a.l && nc({}, function(c, d) {
          S2(b2, d, c);
        });
      }
      function dd(a, b2, c) {
        c = Math.min(a.i.length, c);
        var d = a.l ? p(a.l.Na, a.l, a) : null;
        a: {
          var e = a.i;
          let f = -1;
          for (; ; ) {
            const g = ["count=" + c];
            -1 == f ? 0 < c ? (f = e[0].g, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
            let m = true;
            for (let q = 0; q < c; q++) {
              let l = e[q].g;
              const v2 = e[q].map;
              l -= f;
              if (0 > l) f = Math.max(0, e[q].g - 100), m = false;
              else try {
                Ic(v2, g, "req" + l + "_");
              } catch (w2) {
                d && d(v2);
              }
            }
            if (m) {
              d = g.join("&");
              break a;
            }
          }
        }
        a = a.i.splice(0, c);
        b2.D = a;
        return d;
      }
      function ec(a) {
        if (!a.g && !a.u) {
          a.Y = 1;
          var b2 = a.Fa;
          x || Ea();
          y || (x(), y = true);
          za.add(b2, a);
          a.v = 0;
        }
      }
      function $b(a) {
        if (a.g || a.u || 3 <= a.v) return false;
        a.Y++;
        a.u = ub(p(a.Fa, a), cd(a, a.v));
        a.v++;
        return true;
      }
      h.Fa = function() {
        this.u = null;
        fd(this);
        if (this.ba && !(this.M || null == this.g || 0 >= this.R)) {
          var a = 2 * this.R;
          this.j.info("BP detection timer enabled: " + a);
          this.A = ub(p(this.ab, this), a);
        }
      };
      h.ab = function() {
        this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = false, this.M = true, K(10), Zb(this), fd(this));
      };
      function Tb(a) {
        null != a.A && (k.clearTimeout(a.A), a.A = null);
      }
      function fd(a) {
        a.g = new M(a, a.j, "rpc", a.Y);
        null === a.m && (a.g.H = a.o);
        a.g.O = 0;
        var b2 = N(a.qa);
        S2(b2, "RID", "rpc");
        S2(b2, "SID", a.K);
        S2(b2, "AID", a.T);
        S2(b2, "CI", a.F ? "0" : "1");
        !a.F && a.ja && S2(b2, "TO", a.ja);
        S2(b2, "TYPE", "xmlhttp");
        $c(a, b2);
        a.m && a.o && Pc(b2, a.m, a.o);
        a.L && (a.g.I = a.L);
        var c = a.g;
        a = a.ia;
        c.L = 1;
        c.v = Ib(N(b2));
        c.m = null;
        c.P = true;
        Jb(c, a);
      }
      h.Za = function() {
        null != this.C && (this.C = null, Zb(this), $b(this), K(19));
      };
      function Yb(a) {
        null != a.C && (k.clearTimeout(a.C), a.C = null);
      }
      function Ub(a, b2) {
        var c = null;
        if (a.g == b2) {
          Yb(a);
          Tb(a);
          a.g = null;
          var d = 2;
        } else if (Xb(a.h, b2)) c = b2.D, dc(a.h, b2), d = 1;
        else return;
        if (0 != a.G) {
          if (b2.o) if (1 == d) {
            c = b2.m ? b2.m.length : 0;
            b2 = Date.now() - b2.F;
            var e = a.B;
            d = qb();
            F(d, new tb(d, c));
            fc(a);
          } else ec(a);
          else if (e = b2.s, 3 == e || 0 == e && 0 < b2.X || !(1 == d && bd(a, b2) || 2 == d && $b(a))) switch (c && 0 < c.length && (b2 = a.h, b2.i = b2.i.concat(c)), e) {
            case 1:
              R(a, 5);
              break;
            case 4:
              R(a, 10);
              break;
            case 3:
              R(a, 6);
              break;
            default:
              R(a, 2);
          }
        }
      }
      function cd(a, b2) {
        let c = a.Ta + Math.floor(Math.random() * a.cb);
        a.isActive() || (c *= 2);
        return c * b2;
      }
      function R(a, b2) {
        a.j.info("Error code " + b2);
        if (2 == b2) {
          var c = p(a.fb, a), d = a.Xa;
          const e = !d;
          d = new T(d || "//www.google.com/images/cleardot.gif");
          k.location && "http" == k.location.protocol || qc(d, "https");
          Ib(d);
          e ? Fc(d.toString(), c) : Gc(d.toString(), c);
        } else K(2);
        a.G = 0;
        a.l && a.l.sa(b2);
        ad(a);
        Zc(a);
      }
      h.fb = function(a) {
        a ? (this.j.info("Successfully pinged google.com"), K(2)) : (this.j.info("Failed to ping google.com"), K(1));
      };
      function ad(a) {
        a.G = 0;
        a.ka = [];
        if (a.l) {
          const b2 = kc(a.h);
          if (0 != b2.length || 0 != a.i.length) ma(a.ka, b2), ma(a.ka, a.i), a.h.i.length = 0, la(a.i), a.i.length = 0;
          a.l.ra();
        }
      }
      function cc(a, b2, c) {
        var d = c instanceof T ? N(c) : new T(c);
        if ("" != d.g) b2 && (d.g = b2 + "." + d.g), rc(d, d.s);
        else {
          var e = k.location;
          d = e.protocol;
          b2 = b2 ? b2 + "." + e.hostname : e.hostname;
          e = +e.port;
          var f = new T(null);
          d && qc(f, d);
          b2 && (f.g = b2);
          e && rc(f, e);
          c && (f.l = c);
          d = f;
        }
        c = a.D;
        b2 = a.ya;
        c && b2 && S2(d, c, b2);
        S2(d, "VER", a.la);
        $c(a, d);
        return d;
      }
      function Mb(a, b2, c) {
        if (b2 && !a.J) throw Error("Can't create secondary domain capable XhrIo object.");
        b2 = a.Ca && !a.pa ? new X2(new Jc({ eb: c })) : new X2(a.pa);
        b2.Ha(a.J);
        return b2;
      }
      h.isActive = function() {
        return !!this.l && this.l.isActive(this);
      };
      function gd() {
      }
      h = gd.prototype;
      h.ua = function() {
      };
      h.ta = function() {
      };
      h.sa = function() {
      };
      h.ra = function() {
      };
      h.isActive = function() {
        return true;
      };
      h.Na = function() {
      };
      function hd() {
      }
      hd.prototype.g = function(a, b2) {
        return new Y2(a, b2);
      };
      function Y2(a, b2) {
        E.call(this);
        this.g = new Yc(b2);
        this.l = a;
        this.h = b2 && b2.messageUrlParams || null;
        a = b2 && b2.messageHeaders || null;
        b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
        this.g.o = a;
        a = b2 && b2.initMessageHeaders || null;
        b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = { "X-WebChannel-Content-Type": b2.messageContentType });
        b2 && b2.va && (a ? a["X-WebChannel-Client-Profile"] = b2.va : a = { "X-WebChannel-Client-Profile": b2.va });
        this.g.S = a;
        (a = b2 && b2.Sb) && !t(a) && (this.g.m = a);
        this.v = b2 && b2.supportsCrossDomainXhr || false;
        this.u = b2 && b2.sendRawJson || false;
        (b2 = b2 && b2.httpSessionIdParam) && !t(b2) && (this.g.D = b2, a = this.h, null !== a && b2 in a && (a = this.h, b2 in a && delete a[b2]));
        this.j = new Z2(this);
      }
      r(Y2, E);
      Y2.prototype.m = function() {
        this.g.l = this.j;
        this.v && (this.g.J = true);
        this.g.connect(this.l, this.h || void 0);
      };
      Y2.prototype.close = function() {
        gc(this.g);
      };
      Y2.prototype.o = function(a) {
        var b2 = this.g;
        if ("string" === typeof a) {
          var c = {};
          c.__data__ = a;
          a = c;
        } else this.u && (c = {}, c.__data__ = hb(a), a = c);
        b2.i.push(new hc(b2.Ya++, a));
        3 == b2.G && fc(b2);
      };
      Y2.prototype.N = function() {
        this.g.l = null;
        delete this.j;
        gc(this.g);
        delete this.g;
        Y2.aa.N.call(this);
      };
      function id(a) {
        nb.call(this);
        a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
        var b2 = a.__sm__;
        if (b2) {
          a: {
            for (const c in b2) {
              a = c;
              break a;
            }
            a = void 0;
          }
          if (this.i = a) a = this.i, b2 = null !== b2 && a in b2 ? b2[a] : void 0;
          this.data = b2;
        } else this.data = a;
      }
      r(id, nb);
      function jd() {
        ob.call(this);
        this.status = 1;
      }
      r(jd, ob);
      function Z2(a) {
        this.g = a;
      }
      r(Z2, gd);
      Z2.prototype.ua = function() {
        F(this.g, "a");
      };
      Z2.prototype.ta = function(a) {
        F(this.g, new id(a));
      };
      Z2.prototype.sa = function(a) {
        F(this.g, new jd());
      };
      Z2.prototype.ra = function() {
        F(this.g, "b");
      };
      hd.prototype.createWebChannel = hd.prototype.g;
      Y2.prototype.send = Y2.prototype.o;
      Y2.prototype.open = Y2.prototype.m;
      Y2.prototype.close = Y2.prototype.close;
      createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
        return new hd();
      };
      getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
        return qb();
      };
      Event = webchannel_blob_es2018.Event = I;
      Stat = webchannel_blob_es2018.Stat = { mb: 0, pb: 1, qb: 2, Jb: 3, Ob: 4, Lb: 5, Mb: 6, Kb: 7, Ib: 8, Nb: 9, PROXY: 10, NOPROXY: 11, Gb: 12, Cb: 13, Db: 14, Bb: 15, Eb: 16, Fb: 17, ib: 18, hb: 19, jb: 20 };
      Ab.NO_ERROR = 0;
      Ab.TIMEOUT = 8;
      Ab.HTTP_ERROR = 6;
      ErrorCode = webchannel_blob_es2018.ErrorCode = Ab;
      Bb.COMPLETE = "complete";
      EventType = webchannel_blob_es2018.EventType = Bb;
      mb.EventType = H2;
      H2.OPEN = "a";
      H2.CLOSE = "b";
      H2.ERROR = "c";
      H2.MESSAGE = "d";
      E.prototype.listen = E.prototype.K;
      WebChannel = webchannel_blob_es2018.WebChannel = mb;
      FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Jc;
      X2.prototype.listenOnce = X2.prototype.L;
      X2.prototype.getLastError = X2.prototype.Ka;
      X2.prototype.getLastErrorCode = X2.prototype.Ba;
      X2.prototype.getStatus = X2.prototype.Z;
      X2.prototype.getResponseJson = X2.prototype.Oa;
      X2.prototype.getResponseText = X2.prototype.oa;
      X2.prototype.send = X2.prototype.ea;
      X2.prototype.setWithCredentials = X2.prototype.Ha;
      XhrIo = webchannel_blob_es2018.XhrIo = X2;
    }).apply(typeof commonjsGlobal2 !== "undefined" ? commonjsGlobal2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }
});

// node_modules/@firebase/firestore/dist/index.esm2017.js
function __PRIVATE_getLogLevel() {
  return b.logLevel;
}
function __PRIVATE_logDebug(e, ...t) {
  if (b.logLevel <= LogLevel.DEBUG) {
    const n = t.map(__PRIVATE_argToString);
    b.debug(`Firestore (${S}): ${e}`, ...n);
  }
}
function __PRIVATE_logError(e, ...t) {
  if (b.logLevel <= LogLevel.ERROR) {
    const n = t.map(__PRIVATE_argToString);
    b.error(`Firestore (${S}): ${e}`, ...n);
  }
}
function __PRIVATE_logWarn(e, ...t) {
  if (b.logLevel <= LogLevel.WARN) {
    const n = t.map(__PRIVATE_argToString);
    b.warn(`Firestore (${S}): ${e}`, ...n);
  }
}
function __PRIVATE_argToString(e) {
  if ("string" == typeof e) return e;
  try {
    return function __PRIVATE_formatJSON(e2) {
      return JSON.stringify(e2);
    }(e);
  } catch (t) {
    return e;
  }
}
function fail(e = "Unexpected state") {
  const t = `FIRESTORE (${S}) INTERNAL ASSERTION FAILED: ` + e;
  throw __PRIVATE_logError(t), new Error(t);
}
function __PRIVATE_hardAssert(e, t) {
  e || fail();
}
function __PRIVATE_debugCast(e, t) {
  return e;
}
function __PRIVATE_primitiveComparator(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function __PRIVATE_arrayEquals(e, t, n) {
  return e.length === t.length && e.every((e2, r) => n(e2, t[r]));
}
function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e, t) {
  const n = e.toTimestamp().seconds, r = e.toTimestamp().nanoseconds + 1, i = SnapshotVersion.fromTimestamp(1e9 === r ? new Timestamp(n + 1, 0) : new Timestamp(n, r));
  return new IndexOffset(i, DocumentKey.empty(), t);
}
function __PRIVATE_newIndexOffsetFromDocument(e) {
  return new IndexOffset(e.readTime, e.key, -1);
}
function __PRIVATE_indexOffsetComparator(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  return 0 !== n ? n : (n = DocumentKey.comparator(e.documentKey, t.documentKey), 0 !== n ? n : __PRIVATE_primitiveComparator(e.largestBatchId, t.largestBatchId));
}
function __PRIVATE_getAndroidVersion(e) {
  const t = e.match(/Android ([\d.]+)/i), n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
function __PRIVATE_isIndexedDbTransactionError(e) {
  return "IndexedDbTransactionError" === e.name;
}
function __PRIVATE_isNullOrUndefined(e) {
  return null == e;
}
function __PRIVATE_isNegativeZero(e) {
  return 0 === e && 1 / e == -1 / 0;
}
function __PRIVATE_objectSize(e) {
  let t = 0;
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function forEach(e, t) {
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function isEmpty(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return false;
  return true;
}
function __PRIVATE_normalizeTimestamp(e) {
  if (__PRIVATE_hardAssert(!!e), "string" == typeof e) {
    let t = 0;
    const n = ne.exec(e);
    if (__PRIVATE_hardAssert(!!n), n[1]) {
      let e2 = n[1];
      e2 = (e2 + "000000000").substr(0, 9), t = Number(e2);
    }
    const r = new Date(e);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: t
    };
  }
  return {
    seconds: __PRIVATE_normalizeNumber(e.seconds),
    nanos: __PRIVATE_normalizeNumber(e.nanos)
  };
}
function __PRIVATE_normalizeNumber(e) {
  return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
}
function __PRIVATE_normalizeByteString(e) {
  return "string" == typeof e ? ByteString.fromBase64String(e) : ByteString.fromUint8Array(e);
}
function __PRIVATE_isServerTimestamp(e) {
  var t, n;
  return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function __PRIVATE_getPreviousValue(e) {
  const t = e.mapValue.fields.__previous_value__;
  return __PRIVATE_isServerTimestamp(t) ? __PRIVATE_getPreviousValue(t) : t;
}
function __PRIVATE_getLocalWriteTime(e) {
  const t = __PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);
  return new Timestamp(t.seconds, t.nanos);
}
function __PRIVATE_typeOrder(e) {
  return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? __PRIVATE_isServerTimestamp(e) ? 4 : __PRIVATE_isMaxValue(e) ? 9007199254740991 : __PRIVATE_isVectorValue(e) ? 10 : 11 : fail();
}
function __PRIVATE_valueEquals(e, t) {
  if (e === t) return true;
  const n = __PRIVATE_typeOrder(e);
  if (n !== __PRIVATE_typeOrder(t)) return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t));
    case 3:
      return function __PRIVATE_timestampEquals(e2, t2) {
        if ("string" == typeof e2.timestampValue && "string" == typeof t2.timestampValue && e2.timestampValue.length === t2.timestampValue.length)
          return e2.timestampValue === t2.timestampValue;
        const n2 = __PRIVATE_normalizeTimestamp(e2.timestampValue), r = __PRIVATE_normalizeTimestamp(t2.timestampValue);
        return n2.seconds === r.seconds && n2.nanos === r.nanos;
      }(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return function __PRIVATE_blobEquals(e2, t2) {
        return __PRIVATE_normalizeByteString(e2.bytesValue).isEqual(__PRIVATE_normalizeByteString(t2.bytesValue));
      }(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return function __PRIVATE_geoPointEquals(e2, t2) {
        return __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.longitude);
      }(e, t);
    case 2:
      return function __PRIVATE_numberEquals(e2, t2) {
        if ("integerValue" in e2 && "integerValue" in t2) return __PRIVATE_normalizeNumber(e2.integerValue) === __PRIVATE_normalizeNumber(t2.integerValue);
        if ("doubleValue" in e2 && "doubleValue" in t2) {
          const n2 = __PRIVATE_normalizeNumber(e2.doubleValue), r = __PRIVATE_normalizeNumber(t2.doubleValue);
          return n2 === r ? __PRIVATE_isNegativeZero(n2) === __PRIVATE_isNegativeZero(r) : isNaN(n2) && isNaN(r);
        }
        return false;
      }(e, t);
    case 9:
      return __PRIVATE_arrayEquals(e.arrayValue.values || [], t.arrayValue.values || [], __PRIVATE_valueEquals);
    case 10:
    case 11:
      return function __PRIVATE_objectEquals(e2, t2) {
        const n2 = e2.mapValue.fields || {}, r = t2.mapValue.fields || {};
        if (__PRIVATE_objectSize(n2) !== __PRIVATE_objectSize(r)) return false;
        for (const e3 in n2) if (n2.hasOwnProperty(e3) && (void 0 === r[e3] || !__PRIVATE_valueEquals(n2[e3], r[e3]))) return false;
        return true;
      }(e, t);
    default:
      return fail();
  }
}
function __PRIVATE_arrayValueContains(e, t) {
  return void 0 !== (e.values || []).find((e2) => __PRIVATE_valueEquals(e2, t));
}
function __PRIVATE_valueCompare(e, t) {
  if (e === t) return 0;
  const n = __PRIVATE_typeOrder(e), r = __PRIVATE_typeOrder(t);
  if (n !== r) return __PRIVATE_primitiveComparator(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return __PRIVATE_primitiveComparator(e.booleanValue, t.booleanValue);
    case 2:
      return function __PRIVATE_compareNumbers(e2, t2) {
        const n2 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue), r2 = __PRIVATE_normalizeNumber(t2.integerValue || t2.doubleValue);
        return n2 < r2 ? -1 : n2 > r2 ? 1 : n2 === r2 ? 0 : (
          // one or both are NaN.
          isNaN(n2) ? isNaN(r2) ? 0 : -1 : 1
        );
      }(e, t);
    case 3:
      return __PRIVATE_compareTimestamps(e.timestampValue, t.timestampValue);
    case 4:
      return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e), __PRIVATE_getLocalWriteTime(t));
    case 5:
      return __PRIVATE_primitiveComparator(e.stringValue, t.stringValue);
    case 6:
      return function __PRIVATE_compareBlobs(e2, t2) {
        const n2 = __PRIVATE_normalizeByteString(e2), r2 = __PRIVATE_normalizeByteString(t2);
        return n2.compareTo(r2);
      }(e.bytesValue, t.bytesValue);
    case 7:
      return function __PRIVATE_compareReferences(e2, t2) {
        const n2 = e2.split("/"), r2 = t2.split("/");
        for (let e3 = 0; e3 < n2.length && e3 < r2.length; e3++) {
          const t3 = __PRIVATE_primitiveComparator(n2[e3], r2[e3]);
          if (0 !== t3) return t3;
        }
        return __PRIVATE_primitiveComparator(n2.length, r2.length);
      }(e.referenceValue, t.referenceValue);
    case 8:
      return function __PRIVATE_compareGeoPoints(e2, t2) {
        const n2 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.latitude), __PRIVATE_normalizeNumber(t2.latitude));
        if (0 !== n2) return n2;
        return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.longitude), __PRIVATE_normalizeNumber(t2.longitude));
      }(e.geoPointValue, t.geoPointValue);
    case 9:
      return __PRIVATE_compareArrays(e.arrayValue, t.arrayValue);
    case 10:
      return function __PRIVATE_compareVectors(e2, t2) {
        var n2, r2, i, s2;
        const o = e2.fields || {}, _ = t2.fields || {}, a = null === (n2 = o.value) || void 0 === n2 ? void 0 : n2.arrayValue, u = null === (r2 = _.value) || void 0 === r2 ? void 0 : r2.arrayValue, c = __PRIVATE_primitiveComparator((null === (i = null == a ? void 0 : a.values) || void 0 === i ? void 0 : i.length) || 0, (null === (s2 = null == u ? void 0 : u.values) || void 0 === s2 ? void 0 : s2.length) || 0);
        if (0 !== c) return c;
        return __PRIVATE_compareArrays(a, u);
      }(e.mapValue, t.mapValue);
    case 11:
      return function __PRIVATE_compareMaps(e2, t2) {
        if (e2 === re.mapValue && t2 === re.mapValue) return 0;
        if (e2 === re.mapValue) return 1;
        if (t2 === re.mapValue) return -1;
        const n2 = e2.fields || {}, r2 = Object.keys(n2), i = t2.fields || {}, s2 = Object.keys(i);
        r2.sort(), s2.sort();
        for (let e3 = 0; e3 < r2.length && e3 < s2.length; ++e3) {
          const t3 = __PRIVATE_primitiveComparator(r2[e3], s2[e3]);
          if (0 !== t3) return t3;
          const o = __PRIVATE_valueCompare(n2[r2[e3]], i[s2[e3]]);
          if (0 !== o) return o;
        }
        return __PRIVATE_primitiveComparator(r2.length, s2.length);
      }(e.mapValue, t.mapValue);
    default:
      throw fail();
  }
}
function __PRIVATE_compareTimestamps(e, t) {
  if ("string" == typeof e && "string" == typeof t && e.length === t.length) return __PRIVATE_primitiveComparator(e, t);
  const n = __PRIVATE_normalizeTimestamp(e), r = __PRIVATE_normalizeTimestamp(t), i = __PRIVATE_primitiveComparator(n.seconds, r.seconds);
  return 0 !== i ? i : __PRIVATE_primitiveComparator(n.nanos, r.nanos);
}
function __PRIVATE_compareArrays(e, t) {
  const n = e.values || [], r = t.values || [];
  for (let e2 = 0; e2 < n.length && e2 < r.length; ++e2) {
    const t2 = __PRIVATE_valueCompare(n[e2], r[e2]);
    if (t2) return t2;
  }
  return __PRIVATE_primitiveComparator(n.length, r.length);
}
function canonicalId(e) {
  return __PRIVATE_canonifyValue(e);
}
function __PRIVATE_canonifyValue(e) {
  return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function __PRIVATE_canonifyTimestamp(e2) {
    const t = __PRIVATE_normalizeTimestamp(e2);
    return `time(${t.seconds},${t.nanos})`;
  }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function __PRIVATE_canonifyByteString(e2) {
    return __PRIVATE_normalizeByteString(e2).toBase64();
  }(e.bytesValue) : "referenceValue" in e ? function __PRIVATE_canonifyReference(e2) {
    return DocumentKey.fromName(e2).toString();
  }(e.referenceValue) : "geoPointValue" in e ? function __PRIVATE_canonifyGeoPoint(e2) {
    return `geo(${e2.latitude},${e2.longitude})`;
  }(e.geoPointValue) : "arrayValue" in e ? function __PRIVATE_canonifyArray(e2) {
    let t = "[", n = true;
    for (const r of e2.values || []) n ? n = false : t += ",", t += __PRIVATE_canonifyValue(r);
    return t + "]";
  }(e.arrayValue) : "mapValue" in e ? function __PRIVATE_canonifyMap(e2) {
    const t = Object.keys(e2.fields || {}).sort();
    let n = "{", r = true;
    for (const i of t) r ? r = false : n += ",", n += `${i}:${__PRIVATE_canonifyValue(e2.fields[i])}`;
    return n + "}";
  }(e.mapValue) : fail();
}
function isInteger(e) {
  return !!e && "integerValue" in e;
}
function isArray(e) {
  return !!e && "arrayValue" in e;
}
function __PRIVATE_isMapValue(e) {
  return !!e && "mapValue" in e;
}
function __PRIVATE_isVectorValue(e) {
  var t, n;
  return "__vector__" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function __PRIVATE_deepClone(e) {
  if (e.geoPointValue) return {
    geoPointValue: Object.assign({}, e.geoPointValue)
  };
  if (e.timestampValue && "object" == typeof e.timestampValue) return {
    timestampValue: Object.assign({}, e.timestampValue)
  };
  if (e.mapValue) {
    const t = {
      mapValue: {
        fields: {}
      }
    };
    return forEach(e.mapValue.fields, (e2, n) => t.mapValue.fields[e2] = __PRIVATE_deepClone(n)), t;
  }
  if (e.arrayValue) {
    const t = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n) t.arrayValue.values[n] = __PRIVATE_deepClone(e.arrayValue.values[n]);
    return t;
  }
  return Object.assign({}, e);
}
function __PRIVATE_isMaxValue(e) {
  return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
function __PRIVATE_boundCompareToDocument(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.position.length; i++) {
    const s2 = t[i], o = e.position[i];
    if (s2.field.isKeyField()) r = DocumentKey.comparator(DocumentKey.fromName(o.referenceValue), n.key);
    else {
      r = __PRIVATE_valueCompare(o, n.data.field(s2.field));
    }
    if ("desc" === s2.dir && (r *= -1), 0 !== r) break;
  }
  return r;
}
function __PRIVATE_boundEquals(e, t) {
  if (null === e) return null === t;
  if (null === t) return false;
  if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return false;
  for (let n = 0; n < e.position.length; n++) {
    if (!__PRIVATE_valueEquals(e.position[n], t.position[n])) return false;
  }
  return true;
}
function __PRIVATE_orderByEquals(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
function __PRIVATE_compositeFilterIsConjunction(e) {
  return "and" === e.op;
}
function __PRIVATE_compositeFilterIsFlatConjunction(e) {
  return __PRIVATE_compositeFilterIsFlat(e) && __PRIVATE_compositeFilterIsConjunction(e);
}
function __PRIVATE_compositeFilterIsFlat(e) {
  for (const t of e.filters) if (t instanceof CompositeFilter) return false;
  return true;
}
function __PRIVATE_canonifyFilter(e) {
  if (e instanceof FieldFilter)
    return e.field.canonicalString() + e.op.toString() + canonicalId(e.value);
  if (__PRIVATE_compositeFilterIsFlatConjunction(e))
    return e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
  {
    const t = e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
    return `${e.op}(${t})`;
  }
}
function __PRIVATE_filterEquals(e, t) {
  return e instanceof FieldFilter ? function __PRIVATE_fieldFilterEquals(e2, t2) {
    return t2 instanceof FieldFilter && e2.op === t2.op && e2.field.isEqual(t2.field) && __PRIVATE_valueEquals(e2.value, t2.value);
  }(e, t) : e instanceof CompositeFilter ? function __PRIVATE_compositeFilterEquals(e2, t2) {
    if (t2 instanceof CompositeFilter && e2.op === t2.op && e2.filters.length === t2.filters.length) {
      return e2.filters.reduce((e3, n, r) => e3 && __PRIVATE_filterEquals(n, t2.filters[r]), true);
    }
    return false;
  }(e, t) : void fail();
}
function __PRIVATE_stringifyFilter(e) {
  return e instanceof FieldFilter ? function __PRIVATE_stringifyFieldFilter(e2) {
    return `${e2.field.canonicalString()} ${e2.op} ${canonicalId(e2.value)}`;
  }(e) : e instanceof CompositeFilter ? function __PRIVATE_stringifyCompositeFilter(e2) {
    return e2.op.toString() + " {" + e2.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}";
  }(e) : "Filter";
}
function __PRIVATE_extractDocumentKeysFromArrayValue(e, t) {
  var n;
  return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((e2) => DocumentKey.fromName(e2.referenceValue));
}
function __PRIVATE_newTarget(e, t = null, n = [], r = [], i = null, s2 = null, o = null) {
  return new __PRIVATE_TargetImpl(e, t, n, r, i, s2, o);
}
function __PRIVATE_canonifyTarget(e) {
  const t = __PRIVATE_debugCast(e);
  if (null === t.ue) {
    let e2 = t.path.canonicalString();
    null !== t.collectionGroup && (e2 += "|cg:" + t.collectionGroup), e2 += "|f:", e2 += t.filters.map((e3) => __PRIVATE_canonifyFilter(e3)).join(","), e2 += "|ob:", e2 += t.orderBy.map((e3) => function __PRIVATE_canonifyOrderBy(e4) {
      return e4.field.canonicalString() + e4.dir;
    }(e3)).join(","), __PRIVATE_isNullOrUndefined(t.limit) || (e2 += "|l:", e2 += t.limit), t.startAt && (e2 += "|lb:", e2 += t.startAt.inclusive ? "b:" : "a:", e2 += t.startAt.position.map((e3) => canonicalId(e3)).join(",")), t.endAt && (e2 += "|ub:", e2 += t.endAt.inclusive ? "a:" : "b:", e2 += t.endAt.position.map((e3) => canonicalId(e3)).join(",")), t.ue = e2;
  }
  return t.ue;
}
function __PRIVATE_targetEquals(e, t) {
  if (e.limit !== t.limit) return false;
  if (e.orderBy.length !== t.orderBy.length) return false;
  for (let n = 0; n < e.orderBy.length; n++) if (!__PRIVATE_orderByEquals(e.orderBy[n], t.orderBy[n])) return false;
  if (e.filters.length !== t.filters.length) return false;
  for (let n = 0; n < e.filters.length; n++) if (!__PRIVATE_filterEquals(e.filters[n], t.filters[n])) return false;
  return e.collectionGroup === t.collectionGroup && (!!e.path.isEqual(t.path) && (!!__PRIVATE_boundEquals(e.startAt, t.startAt) && __PRIVATE_boundEquals(e.endAt, t.endAt)));
}
function __PRIVATE_newQuery(e, t, n, r, i, s2, o, _) {
  return new __PRIVATE_QueryImpl(e, t, n, r, i, s2, o, _);
}
function __PRIVATE_newQueryForPath(e) {
  return new __PRIVATE_QueryImpl(e);
}
function __PRIVATE_queryMatchesAllDocuments(e) {
  return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField());
}
function __PRIVATE_isCollectionGroupQuery(e) {
  return null !== e.collectionGroup;
}
function __PRIVATE_queryNormalizedOrderBy(e) {
  const t = __PRIVATE_debugCast(e);
  if (null === t.ce) {
    t.ce = [];
    const e2 = /* @__PURE__ */ new Set();
    for (const n2 of t.explicitOrderBy) t.ce.push(n2), e2.add(n2.field.canonicalString());
    const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc", r = function __PRIVATE_getInequalityFilterFields(e3) {
      let t2 = new SortedSet(FieldPath$1.comparator);
      return e3.filters.forEach((e4) => {
        e4.getFlattenedFilters().forEach((e5) => {
          e5.isInequality() && (t2 = t2.add(e5.field));
        });
      }), t2;
    }(t);
    r.forEach((r2) => {
      e2.has(r2.canonicalString()) || r2.isKeyField() || t.ce.push(new OrderBy(r2, n));
    }), // Add the document key field to the last if it is not explicitly ordered.
    e2.has(FieldPath$1.keyField().canonicalString()) || t.ce.push(new OrderBy(FieldPath$1.keyField(), n));
  }
  return t.ce;
}
function __PRIVATE_queryToTarget(e) {
  const t = __PRIVATE_debugCast(e);
  return t.le || (t.le = __PRIVATE__queryToTarget(t, __PRIVATE_queryNormalizedOrderBy(e))), t.le;
}
function __PRIVATE__queryToTarget(e, t) {
  if ("F" === e.limitType) return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
  {
    t = t.map((e2) => {
      const t2 = "desc" === e2.dir ? "asc" : "desc";
      return new OrderBy(e2.field, t2);
    });
    const n = e.endAt ? new Bound(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new Bound(e.startAt.position, e.startAt.inclusive) : null;
    return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
  }
}
function __PRIVATE_queryWithLimit(e, t, n) {
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
}
function __PRIVATE_queryEquals(e, t) {
  return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e), __PRIVATE_queryToTarget(t)) && e.limitType === t.limitType;
}
function __PRIVATE_canonifyQuery(e) {
  return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`;
}
function __PRIVATE_stringifyQuery(e) {
  return `Query(target=${function __PRIVATE_stringifyTarget(e2) {
    let t = e2.path.canonicalString();
    return null !== e2.collectionGroup && (t += " collectionGroup=" + e2.collectionGroup), e2.filters.length > 0 && (t += `, filters: [${e2.filters.map((e3) => __PRIVATE_stringifyFilter(e3)).join(", ")}]`), __PRIVATE_isNullOrUndefined(e2.limit) || (t += ", limit: " + e2.limit), e2.orderBy.length > 0 && (t += `, orderBy: [${e2.orderBy.map((e3) => function __PRIVATE_stringifyOrderBy(e4) {
      return `${e4.field.canonicalString()} (${e4.dir})`;
    }(e3)).join(", ")}]`), e2.startAt && (t += ", startAt: ", t += e2.startAt.inclusive ? "b:" : "a:", t += e2.startAt.position.map((e3) => canonicalId(e3)).join(",")), e2.endAt && (t += ", endAt: ", t += e2.endAt.inclusive ? "a:" : "b:", t += e2.endAt.position.map((e3) => canonicalId(e3)).join(",")), `Target(${t})`;
  }(__PRIVATE_queryToTarget(e))}; limitType=${e.limitType})`;
}
function __PRIVATE_queryMatches(e, t) {
  return t.isFoundDocument() && function __PRIVATE_queryMatchesPathAndCollectionGroup(e2, t2) {
    const n = t2.key.path;
    return null !== e2.collectionGroup ? t2.key.hasCollectionId(e2.collectionGroup) && e2.path.isPrefixOf(n) : DocumentKey.isDocumentKey(e2.path) ? e2.path.isEqual(n) : e2.path.isImmediateParentOf(n);
  }(e, t) && function __PRIVATE_queryMatchesOrderBy(e2, t2) {
    for (const n of __PRIVATE_queryNormalizedOrderBy(e2))
      if (!n.field.isKeyField() && null === t2.data.field(n.field)) return false;
    return true;
  }(e, t) && function __PRIVATE_queryMatchesFilters(e2, t2) {
    for (const n of e2.filters) if (!n.matches(t2)) return false;
    return true;
  }(e, t) && function __PRIVATE_queryMatchesBounds(e2, t2) {
    if (e2.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function __PRIVATE_boundSortsBeforeDocument(e3, t3, n) {
      const r = __PRIVATE_boundCompareToDocument(e3, t3, n);
      return e3.inclusive ? r <= 0 : r < 0;
    }(e2.startAt, __PRIVATE_queryNormalizedOrderBy(e2), t2)) return false;
    if (e2.endAt && !function __PRIVATE_boundSortsAfterDocument(e3, t3, n) {
      const r = __PRIVATE_boundCompareToDocument(e3, t3, n);
      return e3.inclusive ? r >= 0 : r > 0;
    }(e2.endAt, __PRIVATE_queryNormalizedOrderBy(e2), t2)) return false;
    return true;
  }(e, t);
}
function __PRIVATE_newQueryComparator(e) {
  return (t, n) => {
    let r = false;
    for (const i of __PRIVATE_queryNormalizedOrderBy(e)) {
      const e2 = __PRIVATE_compareDocs(i, t, n);
      if (0 !== e2) return e2;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function __PRIVATE_compareDocs(e, t, n) {
  const r = e.field.isKeyField() ? DocumentKey.comparator(t.key, n.key) : function __PRIVATE_compareDocumentsByField(e2, t2, n2) {
    const r2 = t2.data.field(e2), i = n2.data.field(e2);
    return null !== r2 && null !== i ? __PRIVATE_valueCompare(r2, i) : fail();
  }(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return fail();
  }
}
function __PRIVATE_mutableDocumentMap() {
  return oe;
}
function documentMap(...e) {
  let t = _e;
  for (const n of e) t = t.insert(n.key, n);
  return t;
}
function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e) {
  let t = _e;
  return e.forEach((e2, n) => t = t.insert(e2, n.overlayedDocument)), t;
}
function __PRIVATE_newOverlayMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newMutationMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newDocumentKeyMap() {
  return new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t));
}
function __PRIVATE_documentKeySet(...e) {
  let t = ue;
  for (const n of e) t = t.add(n);
  return t;
}
function __PRIVATE_targetIdSet() {
  return ce;
}
function __PRIVATE_toDouble(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) return {
      doubleValue: "NaN"
    };
    if (t === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (t === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: __PRIVATE_isNegativeZero(t) ? "-0" : t
  };
}
function __PRIVATE_toInteger(e) {
  return {
    integerValue: "" + e
  };
}
function __PRIVATE_applyTransformOperationToLocalView(e, t, n) {
  return e instanceof __PRIVATE_ServerTimestampTransform ? function serverTimestamp$1(e2, t2) {
    const n2 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: e2.seconds,
            nanos: e2.nanoseconds
          }
        }
      }
    };
    return t2 && __PRIVATE_isServerTimestamp(t2) && (t2 = __PRIVATE_getPreviousValue(t2)), t2 && (n2.fields.__previous_value__ = t2), {
      mapValue: n2
    };
  }(n, t) : e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(e2, t2) {
    const n2 = __PRIVATE_computeTransformOperationBaseValue(e2, t2), r = asNumber(n2) + asNumber(e2.Pe);
    return isInteger(n2) && isInteger(e2.Pe) ? __PRIVATE_toInteger(r) : __PRIVATE_toDouble(e2.serializer, r);
  }(e, t);
}
function __PRIVATE_applyTransformOperationToRemoteDocument(e, t, n) {
  return e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : n;
}
function __PRIVATE_computeTransformOperationBaseValue(e, t) {
  return e instanceof __PRIVATE_NumericIncrementTransformOperation ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    function __PRIVATE_isNumber(e2) {
      return isInteger(e2) || function __PRIVATE_isDouble(e3) {
        return !!e3 && "doubleValue" in e3;
      }(e2);
    }(t) ? t : {
      integerValue: 0
    }
  ) : null;
}
function __PRIVATE_applyArrayUnionTransformOperation(e, t) {
  const n = __PRIVATE_coercedFieldValuesArray(t);
  for (const t2 of e.elements) n.some((e2) => __PRIVATE_valueEquals(e2, t2)) || n.push(t2);
  return {
    arrayValue: {
      values: n
    }
  };
}
function __PRIVATE_applyArrayRemoveTransformOperation(e, t) {
  let n = __PRIVATE_coercedFieldValuesArray(t);
  for (const t2 of e.elements) n = n.filter((e2) => !__PRIVATE_valueEquals(e2, t2));
  return {
    arrayValue: {
      values: n
    }
  };
}
function asNumber(e) {
  return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
}
function __PRIVATE_coercedFieldValuesArray(e) {
  return isArray(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function __PRIVATE_fieldTransformEquals(e, t) {
  return e.field.isEqual(t.field) && function __PRIVATE_transformOperationEquals(e2, t2) {
    return e2 instanceof __PRIVATE_ArrayUnionTransformOperation && t2 instanceof __PRIVATE_ArrayUnionTransformOperation || e2 instanceof __PRIVATE_ArrayRemoveTransformOperation && t2 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(e2.elements, t2.elements, __PRIVATE_valueEquals) : e2 instanceof __PRIVATE_NumericIncrementTransformOperation && t2 instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(e2.Pe, t2.Pe) : e2 instanceof __PRIVATE_ServerTimestampTransform && t2 instanceof __PRIVATE_ServerTimestampTransform;
  }(e.transform, t.transform);
}
function __PRIVATE_preconditionIsValidForDocument(e, t) {
  return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument();
}
function __PRIVATE_calculateOverlayMutation(e, t) {
  if (!e.hasLocalMutations || t && 0 === t.fields.length) return null;
  if (null === t) return e.isNoDocument() ? new __PRIVATE_DeleteMutation(e.key, Precondition.none()) : new __PRIVATE_SetMutation(e.key, e.data, Precondition.none());
  {
    const n = e.data, r = ObjectValue.empty();
    let i = new SortedSet(FieldPath$1.comparator);
    for (let e2 of t.fields) if (!i.has(e2)) {
      let t2 = n.field(e2);
      null === t2 && e2.length > 1 && (e2 = e2.popLast(), t2 = n.field(e2)), null === t2 ? r.delete(e2) : r.set(e2, t2), i = i.add(e2);
    }
    return new __PRIVATE_PatchMutation(e.key, r, new FieldMask(i.toArray()), Precondition.none());
  }
}
function __PRIVATE_mutationApplyToRemoteDocument(e, t, n) {
  e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToRemoteDocument(e2, t2, n2) {
    const r = e2.value.clone(), i = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults);
    r.setAll(i), t2.convertToFoundDocument(n2.version, r).setHasCommittedMutations();
  }(e, t, n) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToRemoteDocument(e2, t2, n2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
      return void t2.convertToUnknownDocument(n2.version);
    const r = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults), i = t2.data;
    i.setAll(__PRIVATE_getPatch(e2)), i.setAll(r), t2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  }(e, t, n) : function __PRIVATE_deleteMutationApplyToRemoteDocument(e2, t2, n2) {
    t2.convertToNoDocument(n2.version).setHasCommittedMutations();
  }(0, t, n);
}
function __PRIVATE_mutationApplyToLocalView(e, t, n, r) {
  return e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToLocalView(e2, t2, n2, r2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
      return n2;
    const i = e2.value.clone(), s2 = __PRIVATE_localTransformResults(e2.fieldTransforms, r2, t2);
    return i.setAll(s2), t2.convertToFoundDocument(t2.version, i).setHasLocalMutations(), null;
  }(e, t, n, r) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToLocalView(e2, t2, n2, r2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2)) return n2;
    const i = __PRIVATE_localTransformResults(e2.fieldTransforms, r2, t2), s2 = t2.data;
    if (s2.setAll(__PRIVATE_getPatch(e2)), s2.setAll(i), t2.convertToFoundDocument(t2.version, s2).setHasLocalMutations(), null === n2) return null;
    return n2.unionWith(e2.fieldMask.fields).unionWith(e2.fieldTransforms.map((e3) => e3.field));
  }(e, t, n, r) : function __PRIVATE_deleteMutationApplyToLocalView(e2, t2, n2) {
    if (__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2)) return t2.convertToNoDocument(t2.version).setHasLocalMutations(), null;
    return n2;
  }(e, t, n);
}
function __PRIVATE_mutationEquals(e, t) {
  return e.type === t.type && (!!e.key.isEqual(t.key) && (!!e.precondition.isEqual(t.precondition) && (!!function __PRIVATE_fieldTransformsAreEqual(e2, t2) {
    return void 0 === e2 && void 0 === t2 || !(!e2 || !t2) && __PRIVATE_arrayEquals(e2, t2, (e3, t3) => __PRIVATE_fieldTransformEquals(e3, t3));
  }(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))));
}
function __PRIVATE_getPatch(e) {
  const t = /* @__PURE__ */ new Map();
  return e.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const r = e.data.field(n);
      t.set(n, r);
    }
  }), t;
}
function __PRIVATE_serverTransformResults(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  __PRIVATE_hardAssert(e.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s2 = e[i], o = s2.transform, _ = t.data.field(s2.field);
    r.set(s2.field, __PRIVATE_applyTransformOperationToRemoteDocument(o, _, n[i]));
  }
  return r;
}
function __PRIVATE_localTransformResults(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of e) {
    const e2 = i.transform, s2 = n.data.field(i.field);
    r.set(i.field, __PRIVATE_applyTransformOperationToLocalView(e2, s2, t));
  }
  return r;
}
function __PRIVATE_mapCodeFromRpcCode(e) {
  if (void 0 === e)
    return __PRIVATE_logError("GRPC error has no .code"), D.UNKNOWN;
  switch (e) {
    case le.OK:
      return D.OK;
    case le.CANCELLED:
      return D.CANCELLED;
    case le.UNKNOWN:
      return D.UNKNOWN;
    case le.DEADLINE_EXCEEDED:
      return D.DEADLINE_EXCEEDED;
    case le.RESOURCE_EXHAUSTED:
      return D.RESOURCE_EXHAUSTED;
    case le.INTERNAL:
      return D.INTERNAL;
    case le.UNAVAILABLE:
      return D.UNAVAILABLE;
    case le.UNAUTHENTICATED:
      return D.UNAUTHENTICATED;
    case le.INVALID_ARGUMENT:
      return D.INVALID_ARGUMENT;
    case le.NOT_FOUND:
      return D.NOT_FOUND;
    case le.ALREADY_EXISTS:
      return D.ALREADY_EXISTS;
    case le.PERMISSION_DENIED:
      return D.PERMISSION_DENIED;
    case le.FAILED_PRECONDITION:
      return D.FAILED_PRECONDITION;
    case le.ABORTED:
      return D.ABORTED;
    case le.OUT_OF_RANGE:
      return D.OUT_OF_RANGE;
    case le.UNIMPLEMENTED:
      return D.UNIMPLEMENTED;
    case le.DATA_LOSS:
      return D.DATA_LOSS;
    default:
      return fail();
  }
}
function __PRIVATE_fromVersion(e) {
  return __PRIVATE_hardAssert(!!e), SnapshotVersion.fromTimestamp(function fromTimestamp(e2) {
    const t = __PRIVATE_normalizeTimestamp(e2);
    return new Timestamp(t.seconds, t.nanos);
  }(e));
}
function __PRIVATE_toResourcePath(e, t) {
  const n = function __PRIVATE_fullyQualifiedPrefixPath(e2) {
    return new ResourcePath(["projects", e2.projectId, "databases", e2.database]);
  }(e).child("documents");
  return void 0 === t ? n : n.child(t);
}
function __PRIVATE_fromResourceName(e) {
  const t = ResourcePath.fromString(e);
  return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t)), t;
}
function __PRIVATE_fromQueryPath(e) {
  const t = __PRIVATE_fromResourceName(e);
  return 4 === t.length ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(t);
}
function __PRIVATE_extractLocalPathFromResourceName(e) {
  return __PRIVATE_hardAssert(e.length > 4 && "documents" === e.get(4)), e.popFirst(5);
}
function __PRIVATE_convertQueryTargetToQuery(e) {
  let t = __PRIVATE_fromQueryPath(e.parent);
  const n = e.structuredQuery, r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    __PRIVATE_hardAssert(1 === r);
    const e2 = n.from[0];
    e2.allDescendants ? i = e2.collectionId : t = t.child(e2.collectionId);
  }
  let s2 = [];
  n.where && (s2 = function __PRIVATE_fromFilters(e2) {
    const t2 = __PRIVATE_fromFilter(e2);
    if (t2 instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(t2)) return t2.getFilters();
    return [t2];
  }(n.where));
  let o = [];
  n.orderBy && (o = function __PRIVATE_fromOrder(e2) {
    return e2.map((e3) => function __PRIVATE_fromPropertyOrder(e4) {
      return new OrderBy(
        __PRIVATE_fromFieldPathReference(e4.field),
        // visible for testing
        function __PRIVATE_fromDirection(e5) {
          switch (e5) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(e4.direction)
      );
    }(e3));
  }(n.orderBy));
  let _ = null;
  n.limit && (_ = function __PRIVATE_fromInt32Proto(e2) {
    let t2;
    return t2 = "object" == typeof e2 ? e2.value : e2, __PRIVATE_isNullOrUndefined(t2) ? null : t2;
  }(n.limit));
  let a = null;
  n.startAt && (a = function __PRIVATE_fromStartAtCursor(e2) {
    const t2 = !!e2.before, n2 = e2.values || [];
    return new Bound(n2, t2);
  }(n.startAt));
  let u = null;
  return n.endAt && (u = function __PRIVATE_fromEndAtCursor(e2) {
    const t2 = !e2.before, n2 = e2.values || [];
    return new Bound(n2, t2);
  }(n.endAt)), __PRIVATE_newQuery(t, i, o, s2, _, "F", a, u);
}
function __PRIVATE_fromFilter(e) {
  return void 0 !== e.unaryFilter ? function __PRIVATE_fromUnaryFilter(e2) {
    switch (e2.unaryFilter.op) {
      case "IS_NAN":
        const t = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(t, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(n, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const r = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(r, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(i, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return fail();
    }
  }(e) : void 0 !== e.fieldFilter ? function __PRIVATE_fromFieldFilter(e2) {
    return FieldFilter.create(__PRIVATE_fromFieldPathReference(e2.fieldFilter.field), function __PRIVATE_fromOperatorName(e3) {
      switch (e3) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return fail();
      }
    }(e2.fieldFilter.op), e2.fieldFilter.value);
  }(e) : void 0 !== e.compositeFilter ? function __PRIVATE_fromCompositeFilter(e2) {
    return CompositeFilter.create(e2.compositeFilter.filters.map((e3) => __PRIVATE_fromFilter(e3)), function __PRIVATE_fromCompositeOperatorName(e3) {
      switch (e3) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return fail();
      }
    }(e2.compositeFilter.op));
  }(e) : fail();
}
function __PRIVATE_fromFieldPathReference(e) {
  return FieldPath$1.fromServerFormat(e.fieldPath);
}
function __PRIVATE_isValidResourceName(e) {
  return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2);
}
function __PRIVATE_fromBundledQuery(e) {
  const t = __PRIVATE_convertQueryTargetToQuery({
    parent: e.parent,
    structuredQuery: e.structuredQuery
  });
  return "LAST" === e.limitType ? __PRIVATE_queryWithLimit(
    t,
    t.limit,
    "L"
    /* LimitType.Last */
  ) : t;
}
function __PRIVATE_newLocalStore(e, t, n, r) {
  return new __PRIVATE_LocalStoreImpl(e, t, n, r);
}
async function __PRIVATE_localStoreHandleUserChange(e, t) {
  const n = __PRIVATE_debugCast(e);
  return await n.persistence.runTransaction("Handle user change", "readonly", (e2) => {
    let r;
    return n.mutationQueue.getAllMutationBatches(e2).next((i) => (r = i, n.Ps(t), n.mutationQueue.getAllMutationBatches(e2))).next((t2) => {
      const i = [], s2 = [];
      let o = __PRIVATE_documentKeySet();
      for (const e3 of r) {
        i.push(e3.batchId);
        for (const t3 of e3.mutations) o = o.add(t3.key);
      }
      for (const e3 of t2) {
        s2.push(e3.batchId);
        for (const t3 of e3.mutations) o = o.add(t3.key);
      }
      return n.localDocuments.getDocuments(e2, o).next((e3) => ({
        Ts: e3,
        removedBatchIds: i,
        addedBatchIds: s2
      }));
    });
  });
}
function __PRIVATE_generateUniqueDebugId() {
  return null === me ? me = function __PRIVATE_generateInitialUniqueDebugId() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : me++, "0x" + me.toString(16);
}
function getDocument() {
  return "undefined" != typeof document ? document : null;
}
function __PRIVATE_newSerializer(e) {
  return new JsonProtoSerializer(
    e,
    /* useProto3Json= */
    true
  );
}
async function __PRIVATE_enableNetworkInternal(e) {
  if (__PRIVATE_canUseNetwork(e)) for (const t of e.q_) await t(
    /* enabled= */
    true
  );
}
async function __PRIVATE_disableNetworkInternal(e) {
  for (const t of e.q_) await t(
    /* enabled= */
    false
  );
}
function __PRIVATE_canUseNetwork(e) {
  return 0 === __PRIVATE_debugCast(e).k_.size;
}
async function __PRIVATE_remoteStoreApplyPrimaryState(e, t) {
  const n = __PRIVATE_debugCast(e);
  t ? (n.k_.delete(
    2
    /* OfflineCause.IsSecondary */
  ), await __PRIVATE_enableNetworkInternal(n)) : t || (n.k_.add(
    2
    /* OfflineCause.IsSecondary */
  ), await __PRIVATE_disableNetworkInternal(n), n.K_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function __PRIVATE_newQueriesObjectMap() {
  return new ObjectMap((e) => __PRIVATE_canonifyQuery(e), __PRIVATE_queryEquals);
}
function __PRIVATE_raiseSnapshotsInSyncEvent(e) {
  e.X_.forEach((e2) => {
    e2.next();
  });
}
function __PRIVATE_syncEngineApplyOnlineStateChange(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
    const e2 = [];
    r.xa.forEach((n2, r2) => {
      const i = r2.view.ea(t);
      i.snapshot && e2.push(i.snapshot);
    }), function __PRIVATE_eventManagerOnOnlineStateChange(e3, t2) {
      const n2 = __PRIVATE_debugCast(e3);
      n2.onlineState = t2;
      let r2 = false;
      n2.queries.forEach((e4, n3) => {
        for (const e5 of n3.J_)
          e5.ea(t2) && (r2 = true);
      }), r2 && __PRIVATE_raiseSnapshotsInSyncEvent(n2);
    }(r.eventManager, t), e2.length && r.Ma.R_(e2), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, t, n) {
  const r = __PRIVATE_debugCast(e), i = [], s2 = [], o = [];
  r.xa.isEmpty() || (r.xa.forEach((e2, _) => {
    o.push(r.Ua(_, t, n).then((e3) => {
      var t2;
      if ((e3 || n) && r.isPrimaryClient) {
        const i2 = e3 ? !e3.fromCache : null === (t2 = null == n ? void 0 : n.targetChanges.get(_.targetId)) || void 0 === t2 ? void 0 : t2.current;
        r.sharedClientState.updateQueryState(_.targetId, i2 ? "current" : "not-current");
      }
      if (e3) {
        i.push(e3);
        const t3 = __PRIVATE_LocalViewChanges.zi(_.targetId, e3);
        s2.push(t3);
      }
    }));
  }), await Promise.all(o), r.Ma.R_(i), await async function __PRIVATE_localStoreNotifyLocalViewChanges(e2, t2) {
    const n2 = __PRIVATE_debugCast(e2);
    try {
      await n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e3) => PersistencePromise.forEach(t2, (t3) => PersistencePromise.forEach(t3.Wi, (r2) => n2.persistence.referenceDelegate.addReference(e3, t3.targetId, r2)).next(() => PersistencePromise.forEach(t3.Gi, (r2) => n2.persistence.referenceDelegate.removeReference(e3, t3.targetId, r2)))));
    } catch (e3) {
      if (!__PRIVATE_isIndexedDbTransactionError(e3)) throw e3;
      __PRIVATE_logDebug("LocalStore", "Failed to update sequence numbers: " + e3);
    }
    for (const e3 of t2) {
      const t3 = e3.targetId;
      if (!e3.fromCache) {
        const e4 = n2.us.get(t3), r2 = e4.snapshotVersion, i2 = e4.withLastLimboFreeSnapshotVersion(r2);
        n2.us = n2.us.insert(t3, i2);
      }
    }
  }(r.localStore, s2));
}
async function __PRIVATE_syncEngineHandleCredentialChange(e, t) {
  const n = __PRIVATE_debugCast(e);
  if (!n.currentUser.isEqual(t)) {
    __PRIVATE_logDebug("SyncEngine", "User change. New user:", t.toKey());
    const e2 = await __PRIVATE_localStoreHandleUserChange(n.localStore, t);
    n.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
    function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e3, t2) {
      e3.Qa.forEach((e4) => {
        e4.forEach((e5) => {
          e5.reject(new FirestoreError(D.CANCELLED, t2));
        });
      }), e3.Qa.clear();
    }(n, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
    n.sharedClientState.handleUserChange(t, e2.removedBatchIds, e2.addedBatchIds), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2.Ts);
  }
}
function __PRIVATE_cloneLongPollingOptions(e) {
  const t = {};
  return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t;
}
function __PRIVATE_validateNonEmptyArgument(e, t, n) {
  if (!n) throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
}
function __PRIVATE_validateIsNotUsedTogether(e, t, n, r) {
  if (true === t && true === r) throw new FirestoreError(D.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function __PRIVATE_validateCollectionPath(e) {
  if (DocumentKey.isDocumentKey(e)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
}
function __PRIVATE_valueDescription(e) {
  if (void 0 === e) return "undefined";
  if (null === e) return "null";
  if ("string" == typeof e) return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if ("number" == typeof e || "boolean" == typeof e) return "" + e;
  if ("object" == typeof e) {
    if (e instanceof Array) return "an array";
    {
      const t = (
        /** try to get the constructor name for an object. */
        function __PRIVATE_tryGetCustomObjectType(e2) {
          if (e2.constructor) return e2.constructor.name;
          return null;
        }(e)
      );
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return "function" == typeof e ? "a function" : fail();
}
function __PRIVATE_cast(e, t) {
  if ("_delegate" in e && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e = e._delegate), !(e instanceof t)) {
    if (t.name === e.constructor.name) throw new FirestoreError(D.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = __PRIVATE_valueDescription(e);
      throw new FirestoreError(D.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
    }
  }
  return e;
}
function connectFirestoreEmulator(e, t, n, r = {}) {
  var i;
  const s2 = (e = __PRIVATE_cast(e, Firestore$1))._getSettings(), o = `${t}:${n}`;
  if ("firestore.googleapis.com" !== s2.host && s2.host !== o && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, s2), {
    host: o,
    ssl: false
  })), r.mockUserToken) {
    let t2, n2;
    if ("string" == typeof r.mockUserToken) t2 = r.mockUserToken, n2 = User.MOCK_USER;
    else {
      t2 = createMockUserToken(r.mockUserToken, null === (i = e._app) || void 0 === i ? void 0 : i.options.projectId);
      const s3 = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!s3) throw new FirestoreError(D.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new User(s3);
    }
    e._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t2, n2));
  }
}
function collection(e, t, ...n) {
  if (e = getModularInstance(e), __PRIVATE_validateNonEmptyArgument("collection", "path", t), e instanceof Firestore$1) {
    const r = ResourcePath.fromString(t, ...n);
    return __PRIVATE_validateCollectionPath(r), new CollectionReference(
      e,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new FirestoreError(D.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = e._path.child(ResourcePath.fromString(t, ...n));
    return __PRIVATE_validateCollectionPath(r), new CollectionReference(
      e.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function getFirestore(t, n) {
  const r = "object" == typeof t ? t : getApp(), i = "string" == typeof t ? t : n || "(default)", s2 = _getProvider(r, "firestore").getImmediate({
    identifier: i
  });
  if (!s2._initialized) {
    const e = getDefaultEmulatorHostnameAndPort("firestore");
    e && connectFirestoreEmulator(s2, ...e);
  }
  return s2;
}
var w, User, S, b, D, FirestoreError, __PRIVATE_Deferred, __PRIVATE_OAuthToken, __PRIVATE_EmptyAuthCredentialsProvider, __PRIVATE_EmulatorAuthCredentialsProvider, __PRIVATE_FirebaseAuthCredentialsProvider, __PRIVATE_FirstPartyToken, __PRIVATE_FirstPartyAuthCredentialsProvider, AppCheckToken, __PRIVATE_FirebaseAppCheckTokenProvider, Timestamp, SnapshotVersion, BasePath, ResourcePath, v, FieldPath$1, DocumentKey, FieldIndex, IndexOffset, PersistenceTransaction, PersistencePromise, __PRIVATE_ListenSequence, H, J, Y, Z, X, te, SortedMap, SortedMapIterator, LLRBNode, SortedSet, SortedSetIterator, FieldMask, __PRIVATE_Base64DecodeError, ByteString, ne, DatabaseId, re, ObjectValue, MutableDocument, Bound, OrderBy, Filter, FieldFilter, CompositeFilter, __PRIVATE_KeyFieldFilter, __PRIVATE_KeyFieldInFilter, __PRIVATE_KeyFieldNotInFilter, __PRIVATE_ArrayContainsFilter, __PRIVATE_InFilter, __PRIVATE_NotInFilter, __PRIVATE_ArrayContainsAnyFilter, __PRIVATE_TargetImpl, __PRIVATE_QueryImpl, ObjectMap, oe, _e, ae, ue, ce, TransformOperation, __PRIVATE_ServerTimestampTransform, __PRIVATE_ArrayUnionTransformOperation, __PRIVATE_ArrayRemoveTransformOperation, __PRIVATE_NumericIncrementTransformOperation, Precondition, Mutation, __PRIVATE_SetMutation, __PRIVATE_PatchMutation, __PRIVATE_DeleteMutation, MutationBatch, Overlay, le, he, Te, JsonProtoSerializer, __PRIVATE_LocalSerializer, __PRIVATE_FirestoreIndexValueWriter, __PRIVATE_MemoryIndexManager, __PRIVATE_MemoryCollectionParentIndex, Ae, LruParams, __PRIVATE_TargetIdGenerator, RemoteDocumentChangeBuffer, OverlayedDocument, LocalDocumentsView, __PRIVATE_MemoryBundleCache, __PRIVATE_MemoryDocumentOverlayCache, __PRIVATE_MemoryGlobalsCache, __PRIVATE_ReferenceSet, __PRIVATE_DocReference, __PRIVATE_MemoryMutationQueue, __PRIVATE_MemoryRemoteDocumentCacheImpl, __PRIVATE_MemoryRemoteDocumentChangeBuffer, __PRIVATE_MemoryTargetCache, __PRIVATE_MemoryPersistence, __PRIVATE_MemoryTransaction, __PRIVATE_MemoryEagerDelegate, __PRIVATE_LocalViewChanges, QueryContext, __PRIVATE_QueryEngine, __PRIVATE_LocalStoreImpl, __PRIVATE_LocalClientState, __PRIVATE_MemorySharedClientState, __PRIVATE_NoopConnectivityMonitor, __PRIVATE_BrowserConnectivityMonitor, me, fe, __PRIVATE_StreamBridge, ge, __PRIVATE_WebChannelConnection, __PRIVATE_ExponentialBackoff, __PRIVATE_DatastoreImpl, __PRIVATE_OnlineStateTracker, __PRIVATE_RemoteStoreImpl, DelayedOperation, __PRIVATE_EventManagerImpl, pe, ye, __PRIVATE_SyncEngineImpl, __PRIVATE_MemoryOfflineComponentProvider, OnlineComponentProvider, we, FirestoreSettingsImpl, Firestore$1, Query, DocumentReference, CollectionReference, __PRIVATE_AsyncQueueImpl, Firestore, De;
var init_index_esm20175 = __esm({
  "node_modules/@firebase/firestore/dist/index.esm2017.js"() {
    init_index_esm20174();
    init_index_esm20172();
    init_index_esm20173();
    init_index_esm2017();
    init_bloom_blob_es2018();
    init_webchannel_blob_es2018();
    w = "@firebase/firestore";
    User = class {
      constructor(e) {
        this.uid = e;
      }
      isAuthenticated() {
        return null != this.uid;
      }
      /**
       * Returns a key representing this user, suitable for inclusion in a
       * dictionary.
       */
      toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
      }
      isEqual(e) {
        return e.uid === this.uid;
      }
    };
    User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
    S = "11.2.0";
    b = new Logger("@firebase/firestore");
    D = {
      // Causes are copied from:
      // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
      /** Not an error; returned on success. */
      OK: "ok",
      /** The operation was cancelled (typically by the caller). */
      CANCELLED: "cancelled",
      /** Unknown error or an error from a different error domain. */
      UNKNOWN: "unknown",
      /**
       * Client specified an invalid argument. Note that this differs from
       * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
       * problematic regardless of the state of the system (e.g., a malformed file
       * name).
       */
      INVALID_ARGUMENT: "invalid-argument",
      /**
       * Deadline expired before operation could complete. For operations that
       * change the state of the system, this error may be returned even if the
       * operation has completed successfully. For example, a successful response
       * from a server could have been delayed long enough for the deadline to
       * expire.
       */
      DEADLINE_EXCEEDED: "deadline-exceeded",
      /** Some requested entity (e.g., file or directory) was not found. */
      NOT_FOUND: "not-found",
      /**
       * Some entity that we attempted to create (e.g., file or directory) already
       * exists.
       */
      ALREADY_EXISTS: "already-exists",
      /**
       * The caller does not have permission to execute the specified operation.
       * PERMISSION_DENIED must not be used for rejections caused by exhausting
       * some resource (use RESOURCE_EXHAUSTED instead for those errors).
       * PERMISSION_DENIED must not be used if the caller cannot be identified
       * (use UNAUTHENTICATED instead for those errors).
       */
      PERMISSION_DENIED: "permission-denied",
      /**
       * The request does not have valid authentication credentials for the
       * operation.
       */
      UNAUTHENTICATED: "unauthenticated",
      /**
       * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
       * entire file system is out of space.
       */
      RESOURCE_EXHAUSTED: "resource-exhausted",
      /**
       * Operation was rejected because the system is not in a state required for
       * the operation's execution. For example, directory to be deleted may be
       * non-empty, an rmdir operation is applied to a non-directory, etc.
       *
       * A litmus test that may help a service implementor in deciding
       * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
       *  (a) Use UNAVAILABLE if the client can retry just the failing call.
       *  (b) Use ABORTED if the client should retry at a higher-level
       *      (e.g., restarting a read-modify-write sequence).
       *  (c) Use FAILED_PRECONDITION if the client should not retry until
       *      the system state has been explicitly fixed. E.g., if an "rmdir"
       *      fails because the directory is non-empty, FAILED_PRECONDITION
       *      should be returned since the client should not retry unless
       *      they have first fixed up the directory by deleting files from it.
       *  (d) Use FAILED_PRECONDITION if the client performs conditional
       *      REST Get/Update/Delete on a resource and the resource on the
       *      server does not match the condition. E.g., conflicting
       *      read-modify-write on the same resource.
       */
      FAILED_PRECONDITION: "failed-precondition",
      /**
       * The operation was aborted, typically due to a concurrency issue like
       * sequencer check failures, transaction aborts, etc.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      ABORTED: "aborted",
      /**
       * Operation was attempted past the valid range. E.g., seeking or reading
       * past end of file.
       *
       * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
       * if the system state changes. For example, a 32-bit file system will
       * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
       * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
       * an offset past the current file size.
       *
       * There is a fair bit of overlap between FAILED_PRECONDITION and
       * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
       * when it applies so that callers who are iterating through a space can
       * easily look for an OUT_OF_RANGE error to detect when they are done.
       */
      OUT_OF_RANGE: "out-of-range",
      /** Operation is not implemented or not supported/enabled in this service. */
      UNIMPLEMENTED: "unimplemented",
      /**
       * Internal errors. Means some invariants expected by underlying System has
       * been broken. If you see one of these errors, Something is very broken.
       */
      INTERNAL: "internal",
      /**
       * The service is currently unavailable. This is a most likely a transient
       * condition and may be corrected by retrying with a backoff.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      UNAVAILABLE: "unavailable",
      /** Unrecoverable data loss or corruption. */
      DATA_LOSS: "data-loss"
    };
    FirestoreError = class extends FirebaseError {
      /** @hideconstructor */
      constructor(e, t) {
        super(e, t), this.code = e, this.message = t, // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
      }
    };
    __PRIVATE_Deferred = class {
      constructor() {
        this.promise = new Promise((e, t) => {
          this.resolve = e, this.reject = t;
        });
      }
    };
    __PRIVATE_OAuthToken = class {
      constructor(e, t) {
        this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
      }
    };
    __PRIVATE_EmptyAuthCredentialsProvider = class {
      getToken() {
        return Promise.resolve(null);
      }
      invalidateToken() {
      }
      start(e, t) {
        e.enqueueRetryable(() => t(User.UNAUTHENTICATED));
      }
      shutdown() {
      }
    };
    __PRIVATE_EmulatorAuthCredentialsProvider = class {
      constructor(e) {
        this.token = e, /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
      }
      getToken() {
        return Promise.resolve(this.token);
      }
      invalidateToken() {
      }
      start(e, t) {
        this.changeListener = t, // Fire with initial user.
        e.enqueueRetryable(() => t(this.token.user));
      }
      shutdown() {
        this.changeListener = null;
      }
    };
    __PRIVATE_FirebaseAuthCredentialsProvider = class {
      constructor(e) {
        this.t = e, /** Tracks the current User. */
        this.currentUser = User.UNAUTHENTICATED, /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.i = 0, this.forceRefresh = false, this.auth = null;
      }
      start(e, t) {
        __PRIVATE_hardAssert(void 0 === this.o);
        let n = this.i;
        const __PRIVATE_guardedChangeListener = (e2) => this.i !== n ? (n = this.i, t(e2)) : Promise.resolve();
        let r = new __PRIVATE_Deferred();
        this.o = () => {
          this.i++, this.currentUser = this.u(), r.resolve(), r = new __PRIVATE_Deferred(), e.enqueueRetryable(() => __PRIVATE_guardedChangeListener(this.currentUser));
        };
        const __PRIVATE_awaitNextToken = () => {
          const t2 = r;
          e.enqueueRetryable(async () => {
            await t2.promise, await __PRIVATE_guardedChangeListener(this.currentUser);
          });
        }, __PRIVATE_registerAuth = (e2) => {
          __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e2, this.o && (this.auth.addAuthTokenListener(this.o), __PRIVATE_awaitNextToken());
        };
        this.t.onInit((e2) => __PRIVATE_registerAuth(e2)), // Our users can initialize Auth right after Firestore, so we give it
        // a chance to register itself with the component framework before we
        // determine whether to start up in unauthenticated mode.
        setTimeout(() => {
          if (!this.auth) {
            const e2 = this.t.getImmediate({
              optional: true
            });
            e2 ? __PRIVATE_registerAuth(e2) : (
              // If auth is still not available, proceed with `null` user
              (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r.resolve(), r = new __PRIVATE_Deferred())
            );
          }
        }, 0), __PRIVATE_awaitNextToken();
      }
      getToken() {
        const e = this.i, t = this.forceRefresh;
        return this.forceRefresh = false, this.auth ? this.auth.getToken(t).then((t2) => (
          // Cancel the request since the token changed while the request was
          // outstanding so the response is potentially for a previous user (which
          // user, we can't be sure).
          this.i !== e ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t2 ? (__PRIVATE_hardAssert("string" == typeof t2.accessToken), new __PRIVATE_OAuthToken(t2.accessToken, this.currentUser)) : null
        )) : Promise.resolve(null);
      }
      invalidateToken() {
        this.forceRefresh = true;
      }
      shutdown() {
        this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0;
      }
      // Auth.getUid() can return null even with a user logged in. It is because
      // getUid() is synchronous, but the auth code populating Uid is asynchronous.
      // This method should only be called in the AuthTokenListener callback
      // to guarantee to get the actual user.
      u() {
        const e = this.auth && this.auth.getUid();
        return __PRIVATE_hardAssert(null === e || "string" == typeof e), new User(e);
      }
    };
    __PRIVATE_FirstPartyToken = class {
      constructor(e, t, n) {
        this.l = e, this.h = t, this.P = n, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.T = /* @__PURE__ */ new Map();
      }
      /**
       * Gets an authorization token, using a provided factory function, or return
       * null.
       */
      I() {
        return this.P ? this.P() : null;
      }
      get headers() {
        this.T.set("X-Goog-AuthUser", this.l);
        const e = this.I();
        return e && this.T.set("Authorization", e), this.h && this.T.set("X-Goog-Iam-Authorization-Token", this.h), this.T;
      }
    };
    __PRIVATE_FirstPartyAuthCredentialsProvider = class {
      constructor(e, t, n) {
        this.l = e, this.h = t, this.P = n;
      }
      getToken() {
        return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l, this.h, this.P));
      }
      start(e, t) {
        e.enqueueRetryable(() => t(User.FIRST_PARTY));
      }
      shutdown() {
      }
      invalidateToken() {
      }
    };
    AppCheckToken = class {
      constructor(e) {
        this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
      }
    };
    __PRIVATE_FirebaseAppCheckTokenProvider = class {
      constructor(e) {
        this.A = e, this.forceRefresh = false, this.appCheck = null, this.R = null;
      }
      start(e, t) {
        __PRIVATE_hardAssert(void 0 === this.o);
        const onTokenChanged = (e2) => {
          null != e2.error && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e2.error.message}`);
          const n = e2.token !== this.R;
          return this.R = e2.token, __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`), n ? t(e2.token) : Promise.resolve();
        };
        this.o = (t2) => {
          e.enqueueRetryable(() => onTokenChanged(t2));
        };
        const __PRIVATE_registerAppCheck = (e2) => {
          __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e2, this.o && this.appCheck.addTokenListener(this.o);
        };
        this.A.onInit((e2) => __PRIVATE_registerAppCheck(e2)), // Our users can initialize AppCheck after Firestore, so we give it
        // a chance to register itself with the component framework.
        setTimeout(() => {
          if (!this.appCheck) {
            const e2 = this.A.getImmediate({
              optional: true
            });
            e2 ? __PRIVATE_registerAppCheck(e2) : (
              // If AppCheck is still not available, proceed without it.
              __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
            );
          }
        }, 0);
      }
      getToken() {
        const e = this.forceRefresh;
        return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(e).then((e2) => e2 ? (__PRIVATE_hardAssert("string" == typeof e2.token), this.R = e2.token, new AppCheckToken(e2.token)) : null) : Promise.resolve(null);
      }
      invalidateToken() {
        this.forceRefresh = true;
      }
      shutdown() {
        this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0;
      }
    };
    Timestamp = class _Timestamp {
      /**
       * Creates a new timestamp with the current date, with millisecond precision.
       *
       * @returns a new timestamp representing the current date.
       */
      static now() {
        return _Timestamp.fromMillis(Date.now());
      }
      /**
       * Creates a new timestamp from the given date.
       *
       * @param date - The date to initialize the `Timestamp` from.
       * @returns A new `Timestamp` representing the same point in time as the given
       *     date.
       */
      static fromDate(e) {
        return _Timestamp.fromMillis(e.getTime());
      }
      /**
       * Creates a new timestamp from the given number of milliseconds.
       *
       * @param milliseconds - Number of milliseconds since Unix epoch
       *     1970-01-01T00:00:00Z.
       * @returns A new `Timestamp` representing the same point in time as the given
       *     number of milliseconds.
       */
      static fromMillis(e) {
        const t = Math.floor(e / 1e3), n = Math.floor(1e6 * (e - 1e3 * t));
        return new _Timestamp(t, n);
      }
      /**
       * Creates a new timestamp.
       *
       * @param seconds - The number of seconds of UTC time since Unix epoch
       *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
       *     9999-12-31T23:59:59Z inclusive.
       * @param nanoseconds - The non-negative fractions of a second at nanosecond
       *     resolution. Negative second values with fractions must still have
       *     non-negative nanoseconds values that count forward in time. Must be
       *     from 0 to 999,999,999 inclusive.
       */
      constructor(e, t) {
        if (this.seconds = e, this.nanoseconds = t, t < 0) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
        if (t >= 1e9) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
        if (e < -62135596800) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
        if (e >= 253402300800) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
      }
      /**
       * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
       * causes a loss of precision since `Date` objects only support millisecond
       * precision.
       *
       * @returns JavaScript `Date` object representing the same point in time as
       *     this `Timestamp`, with millisecond precision.
       */
      toDate() {
        return new Date(this.toMillis());
      }
      /**
       * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
       * epoch). This operation causes a loss of precision.
       *
       * @returns The point in time corresponding to this timestamp, represented as
       *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
       */
      toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
      }
      _compareTo(e) {
        return this.seconds === e.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
      }
      /**
       * Returns true if this `Timestamp` is equal to the provided one.
       *
       * @param other - The `Timestamp` to compare against.
       * @returns true if this `Timestamp` is equal to the provided one.
       */
      isEqual(e) {
        return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
      }
      /** Returns a textual representation of this `Timestamp`. */
      toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
      }
      /** Returns a JSON-serializable representation of this `Timestamp`. */
      toJSON() {
        return {
          seconds: this.seconds,
          nanoseconds: this.nanoseconds
        };
      }
      /**
       * Converts this object to a primitive string, which allows `Timestamp` objects
       * to be compared using the `>`, `<=`, `>=` and `>` operators.
       */
      valueOf() {
        const e = this.seconds - -62135596800;
        return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
      }
    };
    SnapshotVersion = class _SnapshotVersion {
      static fromTimestamp(e) {
        return new _SnapshotVersion(e);
      }
      static min() {
        return new _SnapshotVersion(new Timestamp(0, 0));
      }
      static max() {
        return new _SnapshotVersion(new Timestamp(253402300799, 999999999));
      }
      constructor(e) {
        this.timestamp = e;
      }
      compareTo(e) {
        return this.timestamp._compareTo(e.timestamp);
      }
      isEqual(e) {
        return this.timestamp.isEqual(e.timestamp);
      }
      /** Returns a number representation of the version for use in spec tests. */
      toMicroseconds() {
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
      }
      toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
      }
      toTimestamp() {
        return this.timestamp;
      }
    };
    BasePath = class _BasePath {
      constructor(e, t, n) {
        void 0 === t ? t = 0 : t > e.length && fail(), void 0 === n ? n = e.length - t : n > e.length - t && fail(), this.segments = e, this.offset = t, this.len = n;
      }
      get length() {
        return this.len;
      }
      isEqual(e) {
        return 0 === _BasePath.comparator(this, e);
      }
      child(e) {
        const t = this.segments.slice(this.offset, this.limit());
        return e instanceof _BasePath ? e.forEach((e2) => {
          t.push(e2);
        }) : t.push(e), this.construct(t);
      }
      /** The index of one past the last segment of the path. */
      limit() {
        return this.offset + this.length;
      }
      popFirst(e) {
        return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
      }
      popLast() {
        return this.construct(this.segments, this.offset, this.length - 1);
      }
      firstSegment() {
        return this.segments[this.offset];
      }
      lastSegment() {
        return this.get(this.length - 1);
      }
      get(e) {
        return this.segments[this.offset + e];
      }
      isEmpty() {
        return 0 === this.length;
      }
      isPrefixOf(e) {
        if (e.length < this.length) return false;
        for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
        return true;
      }
      isImmediateParentOf(e) {
        if (this.length + 1 !== e.length) return false;
        for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
        return true;
      }
      forEach(e) {
        for (let t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t]);
      }
      toArray() {
        return this.segments.slice(this.offset, this.limit());
      }
      /**
       * Compare 2 paths segment by segment, prioritizing numeric IDs
       * (e.g., "__id123__") in numeric ascending order, followed by string
       * segments in lexicographical order.
       */
      static comparator(e, t) {
        const n = Math.min(e.length, t.length);
        for (let r = 0; r < n; r++) {
          const n2 = _BasePath.compareSegments(e.get(r), t.get(r));
          if (0 !== n2) return n2;
        }
        return Math.sign(e.length - t.length);
      }
      static compareSegments(e, t) {
        const n = _BasePath.isNumericId(e), r = _BasePath.isNumericId(t);
        return n && !r ? -1 : !n && r ? 1 : n && r ? _BasePath.extractNumericId(e).compare(_BasePath.extractNumericId(t)) : (
          // both non-numeric
          e < t ? -1 : e > t ? 1 : 0
        );
      }
      // Checks if a segment is a numeric ID (starts with "__id" and ends with "__").
      static isNumericId(e) {
        return e.startsWith("__id") && e.endsWith("__");
      }
      static extractNumericId(e) {
        return Integer.fromString(e.substring(4, e.length - 2));
      }
    };
    ResourcePath = class _ResourcePath extends BasePath {
      construct(e, t, n) {
        return new _ResourcePath(e, t, n);
      }
      canonicalString() {
        return this.toArray().join("/");
      }
      toString() {
        return this.canonicalString();
      }
      /**
       * Returns a string representation of this path
       * where each path segment has been encoded with
       * `encodeURIComponent`.
       */
      toUriEncodedString() {
        return this.toArray().map(encodeURIComponent).join("/");
      }
      /**
       * Creates a resource path from the given slash-delimited string. If multiple
       * arguments are provided, all components are combined. Leading and trailing
       * slashes from all components are ignored.
       */
      static fromString(...e) {
        const t = [];
        for (const n of e) {
          if (n.indexOf("//") >= 0) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
          t.push(...n.split("/").filter((e2) => e2.length > 0));
        }
        return new _ResourcePath(t);
      }
      static emptyPath() {
        return new _ResourcePath([]);
      }
    };
    v = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
    FieldPath$1 = class _FieldPath$1 extends BasePath {
      construct(e, t, n) {
        return new _FieldPath$1(e, t, n);
      }
      /**
       * Returns true if the string could be used as a segment in a field path
       * without escaping.
       */
      static isValidIdentifier(e) {
        return v.test(e);
      }
      canonicalString() {
        return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _FieldPath$1.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
      }
      toString() {
        return this.canonicalString();
      }
      /**
       * Returns true if this field references the key of a document.
       */
      isKeyField() {
        return 1 === this.length && "__name__" === this.get(0);
      }
      /**
       * The field designating the key of a document.
       */
      static keyField() {
        return new _FieldPath$1(["__name__"]);
      }
      /**
       * Parses a field string from the given server-formatted string.
       *
       * - Splitting the empty string is not allowed (for now at least).
       * - Empty segments within the string (e.g. if there are two consecutive
       *   separators) are not allowed.
       *
       * TODO(b/37244157): we should make this more strict. Right now, it allows
       * non-identifier path components, even if they aren't escaped.
       */
      static fromServerFormat(e) {
        const t = [];
        let n = "", r = 0;
        const __PRIVATE_addCurrentSegment = () => {
          if (0 === n.length) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
          t.push(n), n = "";
        };
        let i = false;
        for (; r < e.length; ) {
          const t2 = e[r];
          if ("\\" === t2) {
            if (r + 1 === e.length) throw new FirestoreError(D.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
            const t3 = e[r + 1];
            if ("\\" !== t3 && "." !== t3 && "`" !== t3) throw new FirestoreError(D.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
            n += t3, r += 2;
          } else "`" === t2 ? (i = !i, r++) : "." !== t2 || i ? (n += t2, r++) : (__PRIVATE_addCurrentSegment(), r++);
        }
        if (__PRIVATE_addCurrentSegment(), i) throw new FirestoreError(D.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
        return new _FieldPath$1(t);
      }
      static emptyPath() {
        return new _FieldPath$1([]);
      }
    };
    DocumentKey = class _DocumentKey {
      constructor(e) {
        this.path = e;
      }
      static fromPath(e) {
        return new _DocumentKey(ResourcePath.fromString(e));
      }
      static fromName(e) {
        return new _DocumentKey(ResourcePath.fromString(e).popFirst(5));
      }
      static empty() {
        return new _DocumentKey(ResourcePath.emptyPath());
      }
      get collectionGroup() {
        return this.path.popLast().lastSegment();
      }
      /** Returns true if the document is in the specified collectionId. */
      hasCollectionId(e) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
      }
      /** Returns the collection group (i.e. the name of the parent collection) for this key. */
      getCollectionGroup() {
        return this.path.get(this.path.length - 2);
      }
      /** Returns the fully qualified path to the parent collection. */
      getCollectionPath() {
        return this.path.popLast();
      }
      isEqual(e) {
        return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
      }
      toString() {
        return this.path.toString();
      }
      static comparator(e, t) {
        return ResourcePath.comparator(e.path, t.path);
      }
      static isDocumentKey(e) {
        return e.length % 2 == 0;
      }
      /**
       * Creates and returns a new document key with the given segments.
       *
       * @param segments - The segments of the path to the document
       * @returns A new instance of DocumentKey
       */
      static fromSegments(e) {
        return new _DocumentKey(new ResourcePath(e.slice()));
      }
    };
    FieldIndex = class {
      constructor(e, t, n, r) {
        this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r;
      }
    };
    FieldIndex.UNKNOWN_ID = -1;
    IndexOffset = class _IndexOffset {
      constructor(e, t, n) {
        this.readTime = e, this.documentKey = t, this.largestBatchId = n;
      }
      /** Returns an offset that sorts before all regular offsets. */
      static min() {
        return new _IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), -1);
      }
      /** Returns an offset that sorts after all regular offsets. */
      static max() {
        return new _IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), -1);
      }
    };
    PersistenceTransaction = class {
      constructor() {
        this.onCommittedListeners = [];
      }
      addOnCommittedListener(e) {
        this.onCommittedListeners.push(e);
      }
      raiseOnCommittedEvent() {
        this.onCommittedListeners.forEach((e) => e());
      }
    };
    PersistencePromise = class _PersistencePromise {
      constructor(e) {
        this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.callbackAttached = false, e((e2) => {
          this.isDone = true, this.result = e2, this.nextCallback && // value should be defined unless T is Void, but we can't express
          // that in the type system.
          this.nextCallback(e2);
        }, (e2) => {
          this.isDone = true, this.error = e2, this.catchCallback && this.catchCallback(e2);
        });
      }
      catch(e) {
        return this.next(void 0, e);
      }
      next(e, t) {
        return this.callbackAttached && fail(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new _PersistencePromise((n, r) => {
          this.nextCallback = (t2) => {
            this.wrapSuccess(e, t2).next(n, r);
          }, this.catchCallback = (e2) => {
            this.wrapFailure(t, e2).next(n, r);
          };
        });
      }
      toPromise() {
        return new Promise((e, t) => {
          this.next(e, t);
        });
      }
      wrapUserFunction(e) {
        try {
          const t = e();
          return t instanceof _PersistencePromise ? t : _PersistencePromise.resolve(t);
        } catch (e2) {
          return _PersistencePromise.reject(e2);
        }
      }
      wrapSuccess(e, t) {
        return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.resolve(t);
      }
      wrapFailure(e, t) {
        return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.reject(t);
      }
      static resolve(e) {
        return new _PersistencePromise((t, n) => {
          t(e);
        });
      }
      static reject(e) {
        return new _PersistencePromise((t, n) => {
          n(e);
        });
      }
      static waitFor(e) {
        return new _PersistencePromise((t, n) => {
          let r = 0, i = 0, s2 = false;
          e.forEach((e2) => {
            ++r, e2.next(() => {
              ++i, s2 && i === r && t();
            }, (e3) => n(e3));
          }), s2 = true, i === r && t();
        });
      }
      /**
       * Given an array of predicate functions that asynchronously evaluate to a
       * boolean, implements a short-circuiting `or` between the results. Predicates
       * will be evaluated until one of them returns `true`, then stop. The final
       * result will be whether any of them returned `true`.
       */
      static or(e) {
        let t = _PersistencePromise.resolve(false);
        for (const n of e) t = t.next((e2) => e2 ? _PersistencePromise.resolve(e2) : n());
        return t;
      }
      static forEach(e, t) {
        const n = [];
        return e.forEach((e2, r) => {
          n.push(t.call(this, e2, r));
        }), this.waitFor(n);
      }
      /**
       * Concurrently map all array elements through asynchronous function.
       */
      static mapArray(e, t) {
        return new _PersistencePromise((n, r) => {
          const i = e.length, s2 = new Array(i);
          let o = 0;
          for (let _ = 0; _ < i; _++) {
            const a = _;
            t(e[a]).next((e2) => {
              s2[a] = e2, ++o, o === i && n(s2);
            }, (e2) => r(e2));
          }
        });
      }
      /**
       * An alternative to recursive PersistencePromise calls, that avoids
       * potential memory problems from unbounded chains of promises.
       *
       * The `action` will be called repeatedly while `condition` is true.
       */
      static doWhile(e, t) {
        return new _PersistencePromise((n, r) => {
          const process2 = () => {
            true === e() ? t().next(() => {
              process2();
            }, r) : n();
          };
          process2();
        });
      }
    };
    __PRIVATE_ListenSequence = class {
      constructor(e, t) {
        this.previousValue = e, t && (t.sequenceNumberHandler = (e2) => this.ie(e2), this.se = (e2) => t.writeSequenceNumber(e2));
      }
      ie(e) {
        return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
      }
      next() {
        const e = ++this.previousValue;
        return this.se && this.se(e), e;
      }
    };
    __PRIVATE_ListenSequence.oe = -1;
    H = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
    J = [...H, "documentOverlays"];
    Y = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
    Z = Y;
    X = [...Z, "indexConfiguration", "indexState", "indexEntries"];
    te = [...X, "globals"];
    SortedMap = class _SortedMap {
      constructor(e, t) {
        this.comparator = e, this.root = t || LLRBNode.EMPTY;
      }
      // Returns a copy of the map, with the specified key/value added or replaced.
      insert(e, t) {
        return new _SortedMap(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
      }
      // Returns a copy of the map, with the specified key removed.
      remove(e) {
        return new _SortedMap(this.comparator, this.root.remove(e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
      }
      // Returns the value of the node with the given key, or null.
      get(e) {
        let t = this.root;
        for (; !t.isEmpty(); ) {
          const n = this.comparator(e, t.key);
          if (0 === n) return t.value;
          n < 0 ? t = t.left : n > 0 && (t = t.right);
        }
        return null;
      }
      // Returns the index of the element in this sorted map, or -1 if it doesn't
      // exist.
      indexOf(e) {
        let t = 0, n = this.root;
        for (; !n.isEmpty(); ) {
          const r = this.comparator(e, n.key);
          if (0 === r) return t + n.left.size;
          r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            (t += n.left.size + 1, n = n.right)
          );
        }
        return -1;
      }
      isEmpty() {
        return this.root.isEmpty();
      }
      // Returns the total number of nodes in the map.
      get size() {
        return this.root.size;
      }
      // Returns the minimum key in the map.
      minKey() {
        return this.root.minKey();
      }
      // Returns the maximum key in the map.
      maxKey() {
        return this.root.maxKey();
      }
      // Traverses the map in key order and calls the specified action function
      // for each key/value pair. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      inorderTraversal(e) {
        return this.root.inorderTraversal(e);
      }
      forEach(e) {
        this.inorderTraversal((t, n) => (e(t, n), false));
      }
      toString() {
        const e = [];
        return this.inorderTraversal((t, n) => (e.push(`${t}:${n}`), false)), `{${e.join(", ")}}`;
      }
      // Traverses the map in reverse key order and calls the specified action
      // function for each key/value pair. If action returns true, traversal is
      // aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      reverseTraversal(e) {
        return this.root.reverseTraversal(e);
      }
      // Returns an iterator over the SortedMap.
      getIterator() {
        return new SortedMapIterator(this.root, null, this.comparator, false);
      }
      getIteratorFrom(e) {
        return new SortedMapIterator(this.root, e, this.comparator, false);
      }
      getReverseIterator() {
        return new SortedMapIterator(this.root, null, this.comparator, true);
      }
      getReverseIteratorFrom(e) {
        return new SortedMapIterator(this.root, e, this.comparator, true);
      }
    };
    SortedMapIterator = class {
      constructor(e, t, n, r) {
        this.isReverse = r, this.nodeStack = [];
        let i = 1;
        for (; !e.isEmpty(); ) if (i = t ? n(e.key, t) : 1, // flip the comparison if we're going in reverse
        t && r && (i *= -1), i < 0)
          e = this.isReverse ? e.left : e.right;
        else {
          if (0 === i) {
            this.nodeStack.push(e);
            break;
          }
          this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
        }
      }
      getNext() {
        let e = this.nodeStack.pop();
        const t = {
          key: e.key,
          value: e.value
        };
        if (this.isReverse) for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), e = e.right;
        else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), e = e.left;
        return t;
      }
      hasNext() {
        return this.nodeStack.length > 0;
      }
      peek() {
        if (0 === this.nodeStack.length) return null;
        const e = this.nodeStack[this.nodeStack.length - 1];
        return {
          key: e.key,
          value: e.value
        };
      }
    };
    LLRBNode = class _LLRBNode {
      constructor(e, t, n, r, i) {
        this.key = e, this.value = t, this.color = null != n ? n : _LLRBNode.RED, this.left = null != r ? r : _LLRBNode.EMPTY, this.right = null != i ? i : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
      }
      // Returns a copy of the current node, optionally replacing pieces of it.
      copy(e, t, n, r, i) {
        return new _LLRBNode(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right);
      }
      isEmpty() {
        return false;
      }
      // Traverses the tree in key order and calls the specified action function
      // for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      inorderTraversal(e) {
        return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
      }
      // Traverses the tree in reverse key order and calls the specified action
      // function for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      reverseTraversal(e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
      }
      // Returns the minimum node in the tree.
      min() {
        return this.left.isEmpty() ? this : this.left.min();
      }
      // Returns the maximum key in the tree.
      minKey() {
        return this.min().key;
      }
      // Returns the maximum key in the tree.
      maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
      }
      // Returns new tree, with the key/value added.
      insert(e, t, n) {
        let r = this;
        const i = n(e, r.key);
        return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp();
      }
      removeMin() {
        if (this.left.isEmpty()) return _LLRBNode.EMPTY;
        let e = this;
        return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
      }
      // Returns new tree, with the specified item removed.
      remove(e, t) {
        let n, r = this;
        if (t(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, t), null);
        else {
          if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === t(e, r.key)) {
            if (r.right.isEmpty()) return _LLRBNode.EMPTY;
            n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin());
          }
          r = r.copy(null, null, null, null, r.right.remove(e, t));
        }
        return r.fixUp();
      }
      isRed() {
        return this.color;
      }
      // Returns new tree after performing any needed rotations.
      fixUp() {
        let e = this;
        return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
      }
      moveRedLeft() {
        let e = this.colorFlip();
        return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
      }
      moveRedRight() {
        let e = this.colorFlip();
        return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
      }
      rotateLeft() {
        const e = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
      }
      rotateRight() {
        const e = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
      }
      colorFlip() {
        const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, e, t);
      }
      // For testing.
      checkMaxDepth() {
        const e = this.check();
        return Math.pow(2, e) <= this.size + 1;
      }
      // In a balanced RB tree, the black-depth (number of black nodes) from root to
      // leaves is equal on both sides.  This function verifies that or asserts.
      check() {
        if (this.isRed() && this.left.isRed()) throw fail();
        if (this.right.isRed()) throw fail();
        const e = this.left.check();
        if (e !== this.right.check()) throw fail();
        return e + (this.isRed() ? 0 : 1);
      }
    };
    LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
    LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
    class LLRBEmptyNode {
      constructor() {
        this.size = 0;
      }
      get key() {
        throw fail();
      }
      get value() {
        throw fail();
      }
      get color() {
        throw fail();
      }
      get left() {
        throw fail();
      }
      get right() {
        throw fail();
      }
      // Returns a copy of the current node.
      copy(e, t, n, r, i) {
        return this;
      }
      // Returns a copy of the tree, with the specified key/value added.
      insert(e, t, n) {
        return new LLRBNode(e, t);
      }
      // Returns a copy of the tree, with the specified key removed.
      remove(e, t) {
        return this;
      }
      isEmpty() {
        return true;
      }
      inorderTraversal(e) {
        return false;
      }
      reverseTraversal(e) {
        return false;
      }
      minKey() {
        return null;
      }
      maxKey() {
        return null;
      }
      isRed() {
        return false;
      }
      // For testing.
      checkMaxDepth() {
        return true;
      }
      check() {
        return 0;
      }
    }();
    SortedSet = class _SortedSet {
      constructor(e) {
        this.comparator = e, this.data = new SortedMap(this.comparator);
      }
      has(e) {
        return null !== this.data.get(e);
      }
      first() {
        return this.data.minKey();
      }
      last() {
        return this.data.maxKey();
      }
      get size() {
        return this.data.size;
      }
      indexOf(e) {
        return this.data.indexOf(e);
      }
      /** Iterates elements in order defined by "comparator" */
      forEach(e) {
        this.data.inorderTraversal((t, n) => (e(t), false));
      }
      /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
      forEachInRange(e, t) {
        const n = this.data.getIteratorFrom(e[0]);
        for (; n.hasNext(); ) {
          const r = n.getNext();
          if (this.comparator(r.key, e[1]) >= 0) return;
          t(r.key);
        }
      }
      /**
       * Iterates over `elem`s such that: start &lt;= elem until false is returned.
       */
      forEachWhile(e, t) {
        let n;
        for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext(); ) {
          if (!e(n.getNext().key)) return;
        }
      }
      /** Finds the least element greater than or equal to `elem`. */
      firstAfterOrEqual(e) {
        const t = this.data.getIteratorFrom(e);
        return t.hasNext() ? t.getNext().key : null;
      }
      getIterator() {
        return new SortedSetIterator(this.data.getIterator());
      }
      getIteratorFrom(e) {
        return new SortedSetIterator(this.data.getIteratorFrom(e));
      }
      /** Inserts or updates an element */
      add(e) {
        return this.copy(this.data.remove(e).insert(e, true));
      }
      /** Deletes an element */
      delete(e) {
        return this.has(e) ? this.copy(this.data.remove(e)) : this;
      }
      isEmpty() {
        return this.data.isEmpty();
      }
      unionWith(e) {
        let t = this;
        return t.size < e.size && (t = e, e = this), e.forEach((e2) => {
          t = t.add(e2);
        }), t;
      }
      isEqual(e) {
        if (!(e instanceof _SortedSet)) return false;
        if (this.size !== e.size) return false;
        const t = this.data.getIterator(), n = e.data.getIterator();
        for (; t.hasNext(); ) {
          const e2 = t.getNext().key, r = n.getNext().key;
          if (0 !== this.comparator(e2, r)) return false;
        }
        return true;
      }
      toArray() {
        const e = [];
        return this.forEach((t) => {
          e.push(t);
        }), e;
      }
      toString() {
        const e = [];
        return this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")";
      }
      copy(e) {
        const t = new _SortedSet(this.comparator);
        return t.data = e, t;
      }
    };
    SortedSetIterator = class {
      constructor(e) {
        this.iter = e;
      }
      getNext() {
        return this.iter.getNext().key;
      }
      hasNext() {
        return this.iter.hasNext();
      }
    };
    FieldMask = class _FieldMask {
      constructor(e) {
        this.fields = e, // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        e.sort(FieldPath$1.comparator);
      }
      static empty() {
        return new _FieldMask([]);
      }
      /**
       * Returns a new FieldMask object that is the result of adding all the given
       * fields paths to this field mask.
       */
      unionWith(e) {
        let t = new SortedSet(FieldPath$1.comparator);
        for (const e2 of this.fields) t = t.add(e2);
        for (const n of e) t = t.add(n);
        return new _FieldMask(t.toArray());
      }
      /**
       * Verifies that `fieldPath` is included by at least one field in this field
       * mask.
       *
       * This is an O(n) operation, where `n` is the size of the field mask.
       */
      covers(e) {
        for (const t of this.fields) if (t.isPrefixOf(e)) return true;
        return false;
      }
      isEqual(e) {
        return __PRIVATE_arrayEquals(this.fields, e.fields, (e2, t) => e2.isEqual(t));
      }
    };
    __PRIVATE_Base64DecodeError = class extends Error {
      constructor() {
        super(...arguments), this.name = "Base64DecodeError";
      }
    };
    ByteString = class _ByteString {
      constructor(e) {
        this.binaryString = e;
      }
      static fromBase64String(e) {
        const t = function __PRIVATE_decodeBase64(e2) {
          try {
            return atob(e2);
          } catch (e3) {
            throw "undefined" != typeof DOMException && e3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e3) : e3;
          }
        }(e);
        return new _ByteString(t);
      }
      static fromUint8Array(e) {
        const t = (
          /**
          * Helper function to convert an Uint8array to a binary string.
          */
          function __PRIVATE_binaryStringFromUint8Array(e2) {
            let t2 = "";
            for (let n = 0; n < e2.length; ++n) t2 += String.fromCharCode(e2[n]);
            return t2;
          }(e)
        );
        return new _ByteString(t);
      }
      [Symbol.iterator]() {
        let e = 0;
        return {
          next: () => e < this.binaryString.length ? {
            value: this.binaryString.charCodeAt(e++),
            done: false
          } : {
            value: void 0,
            done: true
          }
        };
      }
      toBase64() {
        return function __PRIVATE_encodeBase64(e) {
          return btoa(e);
        }(this.binaryString);
      }
      toUint8Array() {
        return function __PRIVATE_uint8ArrayFromBinaryString(e) {
          const t = new Uint8Array(e.length);
          for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
          return t;
        }(this.binaryString);
      }
      approximateByteSize() {
        return 2 * this.binaryString.length;
      }
      compareTo(e) {
        return __PRIVATE_primitiveComparator(this.binaryString, e.binaryString);
      }
      isEqual(e) {
        return this.binaryString === e.binaryString;
      }
    };
    ByteString.EMPTY_BYTE_STRING = new ByteString("");
    ne = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
    DatabaseId = class _DatabaseId {
      constructor(e, t) {
        this.projectId = e, this.database = t || "(default)";
      }
      static empty() {
        return new _DatabaseId("", "");
      }
      get isDefaultDatabase() {
        return "(default)" === this.database;
      }
      isEqual(e) {
        return e instanceof _DatabaseId && e.projectId === this.projectId && e.database === this.database;
      }
    };
    re = {
      mapValue: {
        fields: {
          __type__: {
            stringValue: "__max__"
          }
        }
      }
    };
    ObjectValue = class _ObjectValue {
      constructor(e) {
        this.value = e;
      }
      static empty() {
        return new _ObjectValue({
          mapValue: {}
        });
      }
      /**
       * Returns the value at the given path or null.
       *
       * @param path - the path to search
       * @returns The value at the path or null if the path is not set.
       */
      field(e) {
        if (e.isEmpty()) return this.value;
        {
          let t = this.value;
          for (let n = 0; n < e.length - 1; ++n) if (t = (t.mapValue.fields || {})[e.get(n)], !__PRIVATE_isMapValue(t)) return null;
          return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
        }
      }
      /**
       * Sets the field to the provided value.
       *
       * @param path - The field path to set.
       * @param value - The value to set.
       */
      set(e, t) {
        this.getFieldsMap(e.popLast())[e.lastSegment()] = __PRIVATE_deepClone(t);
      }
      /**
       * Sets the provided fields to the provided values.
       *
       * @param data - A map of fields to values (or null for deletes).
       */
      setAll(e) {
        let t = FieldPath$1.emptyPath(), n = {}, r = [];
        e.forEach((e2, i2) => {
          if (!t.isImmediateParentOf(i2)) {
            const e3 = this.getFieldsMap(t);
            this.applyChanges(e3, n, r), n = {}, r = [], t = i2.popLast();
          }
          e2 ? n[i2.lastSegment()] = __PRIVATE_deepClone(e2) : r.push(i2.lastSegment());
        });
        const i = this.getFieldsMap(t);
        this.applyChanges(i, n, r);
      }
      /**
       * Removes the field at the specified path. If there is no field at the
       * specified path, nothing is changed.
       *
       * @param path - The field path to remove.
       */
      delete(e) {
        const t = this.field(e.popLast());
        __PRIVATE_isMapValue(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
      }
      isEqual(e) {
        return __PRIVATE_valueEquals(this.value, e.value);
      }
      /**
       * Returns the map that contains the leaf element of `path`. If the parent
       * entry does not yet exist, or if it is not a map, a new map will be created.
       */
      getFieldsMap(e) {
        let t = this.value;
        t.mapValue.fields || (t.mapValue = {
          fields: {}
        });
        for (let n = 0; n < e.length; ++n) {
          let r = t.mapValue.fields[e.get(n)];
          __PRIVATE_isMapValue(r) && r.mapValue.fields || (r = {
            mapValue: {
              fields: {}
            }
          }, t.mapValue.fields[e.get(n)] = r), t = r;
        }
        return t.mapValue.fields;
      }
      /**
       * Modifies `fieldsMap` by adding, replacing or deleting the specified
       * entries.
       */
      applyChanges(e, t, n) {
        forEach(t, (t2, n2) => e[t2] = n2);
        for (const t2 of n) delete e[t2];
      }
      clone() {
        return new _ObjectValue(__PRIVATE_deepClone(this.value));
      }
    };
    MutableDocument = class _MutableDocument {
      constructor(e, t, n, r, i, s2, o) {
        this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = i, this.data = s2, this.documentState = o;
      }
      /**
       * Creates a document with no known version or data, but which can serve as
       * base document for mutations.
       */
      static newInvalidDocument(e) {
        return new _MutableDocument(
          e,
          0,
          /* version */
          SnapshotVersion.min(),
          /* readTime */
          SnapshotVersion.min(),
          /* createTime */
          SnapshotVersion.min(),
          ObjectValue.empty(),
          0
          /* DocumentState.SYNCED */
        );
      }
      /**
       * Creates a new document that is known to exist with the given data at the
       * given version.
       */
      static newFoundDocument(e, t, n, r) {
        return new _MutableDocument(
          e,
          1,
          /* version */
          t,
          /* readTime */
          SnapshotVersion.min(),
          /* createTime */
          n,
          r,
          0
          /* DocumentState.SYNCED */
        );
      }
      /** Creates a new document that is known to not exist at the given version. */
      static newNoDocument(e, t) {
        return new _MutableDocument(
          e,
          2,
          /* version */
          t,
          /* readTime */
          SnapshotVersion.min(),
          /* createTime */
          SnapshotVersion.min(),
          ObjectValue.empty(),
          0
          /* DocumentState.SYNCED */
        );
      }
      /**
       * Creates a new document that is known to exist at the given version but
       * whose data is not known (e.g. a document that was updated without a known
       * base document).
       */
      static newUnknownDocument(e, t) {
        return new _MutableDocument(
          e,
          3,
          /* version */
          t,
          /* readTime */
          SnapshotVersion.min(),
          /* createTime */
          SnapshotVersion.min(),
          ObjectValue.empty(),
          2
          /* DocumentState.HAS_COMMITTED_MUTATIONS */
        );
      }
      /**
       * Changes the document type to indicate that it exists and that its version
       * and data are known.
       */
      convertToFoundDocument(e, t) {
        return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
      }
      /**
       * Changes the document type to indicate that it doesn't exist at the given
       * version.
       */
      convertToNoDocument(e) {
        return this.version = e, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
      }
      /**
       * Changes the document type to indicate that it exists at a given version but
       * that its data is not known (e.g. a document that was updated without a known
       * base document).
       */
      convertToUnknownDocument(e) {
        return this.version = e, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
      }
      setHasCommittedMutations() {
        return this.documentState = 2, this;
      }
      setHasLocalMutations() {
        return this.documentState = 1, this.version = SnapshotVersion.min(), this;
      }
      setReadTime(e) {
        return this.readTime = e, this;
      }
      get hasLocalMutations() {
        return 1 === this.documentState;
      }
      get hasCommittedMutations() {
        return 2 === this.documentState;
      }
      get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations;
      }
      isValidDocument() {
        return 0 !== this.documentType;
      }
      isFoundDocument() {
        return 1 === this.documentType;
      }
      isNoDocument() {
        return 2 === this.documentType;
      }
      isUnknownDocument() {
        return 3 === this.documentType;
      }
      isEqual(e) {
        return e instanceof _MutableDocument && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
      }
      mutableCopy() {
        return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
      }
      toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
      }
    };
    Bound = class {
      constructor(e, t) {
        this.position = e, this.inclusive = t;
      }
    };
    OrderBy = class {
      constructor(e, t = "asc") {
        this.field = e, this.dir = t;
      }
    };
    Filter = class {
    };
    FieldFilter = class _FieldFilter extends Filter {
      constructor(e, t, n) {
        super(), this.field = e, this.op = t, this.value = n;
      }
      /**
       * Creates a filter based on the provided arguments.
       */
      static create(e, t, n) {
        return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new __PRIVATE_KeyFieldFilter(e, t, n) : "array-contains" === t ? new __PRIVATE_ArrayContainsFilter(e, n) : "in" === t ? new __PRIVATE_InFilter(e, n) : "not-in" === t ? new __PRIVATE_NotInFilter(e, n) : "array-contains-any" === t ? new __PRIVATE_ArrayContainsAnyFilter(e, n) : new _FieldFilter(e, t, n);
      }
      static createKeyFieldInFilter(e, t, n) {
        return "in" === t ? new __PRIVATE_KeyFieldInFilter(e, n) : new __PRIVATE_KeyFieldNotInFilter(e, n);
      }
      matches(e) {
        const t = e.data.field(this.field);
        return "!=" === this.op ? null !== t && this.matchesComparison(__PRIVATE_valueCompare(t, this.value)) : null !== t && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t) && this.matchesComparison(__PRIVATE_valueCompare(t, this.value));
      }
      matchesComparison(e) {
        switch (this.op) {
          case "<":
            return e < 0;
          case "<=":
            return e <= 0;
          case "==":
            return 0 === e;
          case "!=":
            return 0 !== e;
          case ">":
            return e > 0;
          case ">=":
            return e >= 0;
          default:
            return fail();
        }
      }
      isInequality() {
        return [
          "<",
          "<=",
          ">",
          ">=",
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ].indexOf(this.op) >= 0;
      }
      getFlattenedFilters() {
        return [this];
      }
      getFilters() {
        return [this];
      }
    };
    CompositeFilter = class _CompositeFilter extends Filter {
      constructor(e, t) {
        super(), this.filters = e, this.op = t, this.ae = null;
      }
      /**
       * Creates a filter based on the provided arguments.
       */
      static create(e, t) {
        return new _CompositeFilter(e, t);
      }
      matches(e) {
        return __PRIVATE_compositeFilterIsConjunction(this) ? void 0 === this.filters.find((t) => !t.matches(e)) : void 0 !== this.filters.find((t) => t.matches(e));
      }
      getFlattenedFilters() {
        return null !== this.ae || (this.ae = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), [])), this.ae;
      }
      // Returns a mutable copy of `this.filters`
      getFilters() {
        return Object.assign([], this.filters);
      }
    };
    __PRIVATE_KeyFieldFilter = class extends FieldFilter {
      constructor(e, t, n) {
        super(e, t, n), this.key = DocumentKey.fromName(n.referenceValue);
      }
      matches(e) {
        const t = DocumentKey.comparator(e.key, this.key);
        return this.matchesComparison(t);
      }
    };
    __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
      constructor(e, t) {
        super(e, "in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t);
      }
      matches(e) {
        return this.keys.some((t) => t.isEqual(e.key));
      }
    };
    __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
      constructor(e, t) {
        super(e, "not-in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t);
      }
      matches(e) {
        return !this.keys.some((t) => t.isEqual(e.key));
      }
    };
    __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
      constructor(e, t) {
        super(e, "array-contains", t);
      }
      matches(e) {
        const t = e.data.field(this.field);
        return isArray(t) && __PRIVATE_arrayValueContains(t.arrayValue, this.value);
      }
    };
    __PRIVATE_InFilter = class extends FieldFilter {
      constructor(e, t) {
        super(e, "in", t);
      }
      matches(e) {
        const t = e.data.field(this.field);
        return null !== t && __PRIVATE_arrayValueContains(this.value.arrayValue, t);
      }
    };
    __PRIVATE_NotInFilter = class extends FieldFilter {
      constructor(e, t) {
        super(e, "not-in", t);
      }
      matches(e) {
        if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
          nullValue: "NULL_VALUE"
        })) return false;
        const t = e.data.field(this.field);
        return null !== t && !__PRIVATE_arrayValueContains(this.value.arrayValue, t);
      }
    };
    __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
      constructor(e, t) {
        super(e, "array-contains-any", t);
      }
      matches(e) {
        const t = e.data.field(this.field);
        return !(!isArray(t) || !t.arrayValue.values) && t.arrayValue.values.some((e2) => __PRIVATE_arrayValueContains(this.value.arrayValue, e2));
      }
    };
    __PRIVATE_TargetImpl = class {
      constructor(e, t = null, n = [], r = [], i = null, s2 = null, o = null) {
        this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = s2, this.endAt = o, this.ue = null;
      }
    };
    __PRIVATE_QueryImpl = class {
      /**
       * Initializes a Query with a path and optional additional query constraints.
       * Path must currently be empty if this is a collection group query.
       */
      constructor(e, t = null, n = [], r = [], i = null, s2 = "F", o = null, _ = null) {
        this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = s2, this.startAt = o, this.endAt = _, this.ce = null, // The corresponding `Target` of this `Query` instance, for use with
        // non-aggregate queries.
        this.le = null, // The corresponding `Target` of this `Query` instance, for use with
        // aggregate queries. Unlike targets for non-aggregate queries,
        // aggregate query targets do not contain normalized order-bys, they only
        // contain explicit order-bys.
        this.he = null, this.startAt, this.endAt;
      }
    };
    ObjectMap = class {
      constructor(e, t) {
        this.mapKeyFn = e, this.equalsFn = t, /**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */
        this.inner = {}, /** The number of entries stored in the map */
        this.innerSize = 0;
      }
      /** Get a value for this key, or undefined if it does not exist. */
      get(e) {
        const t = this.mapKeyFn(e), n = this.inner[t];
        if (void 0 !== n) {
          for (const [t2, r] of n) if (this.equalsFn(t2, e)) return r;
        }
      }
      has(e) {
        return void 0 !== this.get(e);
      }
      /** Put this key and value in the map. */
      set(e, t) {
        const n = this.mapKeyFn(e), r = this.inner[n];
        if (void 0 === r) return this.inner[n] = [[e, t]], void this.innerSize++;
        for (let n2 = 0; n2 < r.length; n2++) if (this.equalsFn(r[n2][0], e))
          return void (r[n2] = [e, t]);
        r.push([e, t]), this.innerSize++;
      }
      /**
       * Remove this key from the map. Returns a boolean if anything was deleted.
       */
      delete(e) {
        const t = this.mapKeyFn(e), n = this.inner[t];
        if (void 0 === n) return false;
        for (let r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], e)) return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, true;
        return false;
      }
      forEach(e) {
        forEach(this.inner, (t, n) => {
          for (const [t2, r] of n) e(t2, r);
        });
      }
      isEmpty() {
        return isEmpty(this.inner);
      }
      size() {
        return this.innerSize;
      }
    };
    oe = new SortedMap(DocumentKey.comparator);
    _e = new SortedMap(DocumentKey.comparator);
    ae = new SortedMap(DocumentKey.comparator);
    ue = new SortedSet(DocumentKey.comparator);
    ce = new SortedSet(__PRIVATE_primitiveComparator);
    TransformOperation = class {
      constructor() {
        this._ = void 0;
      }
    };
    __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
    };
    __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
      constructor(e) {
        super(), this.elements = e;
      }
    };
    __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
      constructor(e) {
        super(), this.elements = e;
      }
    };
    __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
      constructor(e, t) {
        super(), this.serializer = e, this.Pe = t;
      }
    };
    Precondition = class _Precondition {
      constructor(e, t) {
        this.updateTime = e, this.exists = t;
      }
      /** Creates a new empty Precondition. */
      static none() {
        return new _Precondition();
      }
      /** Creates a new Precondition with an exists flag. */
      static exists(e) {
        return new _Precondition(void 0, e);
      }
      /** Creates a new Precondition based on a version a document exists at. */
      static updateTime(e) {
        return new _Precondition(e);
      }
      /** Returns whether this Precondition is empty. */
      get isNone() {
        return void 0 === this.updateTime && void 0 === this.exists;
      }
      isEqual(e) {
        return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
      }
    };
    Mutation = class {
    };
    __PRIVATE_SetMutation = class extends Mutation {
      constructor(e, t, n, r = []) {
        super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0;
      }
      getFieldMask() {
        return null;
      }
    };
    __PRIVATE_PatchMutation = class extends Mutation {
      constructor(e, t, n, r, i = []) {
        super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = i, this.type = 1;
      }
      getFieldMask() {
        return this.fieldMask;
      }
    };
    __PRIVATE_DeleteMutation = class extends Mutation {
      constructor(e, t) {
        super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
      }
      getFieldMask() {
        return null;
      }
    };
    MutationBatch = class {
      /**
       * @param batchId - The unique ID of this mutation batch.
       * @param localWriteTime - The original write time of this mutation.
       * @param baseMutations - Mutations that are used to populate the base
       * values when this mutation is applied locally. This can be used to locally
       * overwrite values that are persisted in the remote document cache. Base
       * mutations are never sent to the backend.
       * @param mutations - The user-provided mutations in this mutation batch.
       * User-provided mutations are applied both locally and remotely on the
       * backend.
       */
      constructor(e, t, n, r) {
        this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r;
      }
      /**
       * Applies all the mutations in this MutationBatch to the specified document
       * to compute the state of the remote document
       *
       * @param document - The document to apply mutations to.
       * @param batchResult - The result of applying the MutationBatch to the
       * backend.
       */
      applyToRemoteDocument(e, t) {
        const n = t.mutationResults;
        for (let t2 = 0; t2 < this.mutations.length; t2++) {
          const r = this.mutations[t2];
          if (r.key.isEqual(e.key)) {
            __PRIVATE_mutationApplyToRemoteDocument(r, e, n[t2]);
          }
        }
      }
      /**
       * Computes the local view of a document given all the mutations in this
       * batch.
       *
       * @param document - The document to apply mutations to.
       * @param mutatedFields - Fields that have been updated before applying this mutation batch.
       * @returns A `FieldMask` representing all the fields that are mutated.
       */
      applyToLocalView(e, t) {
        for (const n of this.baseMutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
        for (const n of this.mutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
        return t;
      }
      /**
       * Computes the local view for all provided documents given the mutations in
       * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
       * replace all the mutation applications.
       */
      applyToLocalDocumentSet(e, t) {
        const n = __PRIVATE_newMutationMap();
        return this.mutations.forEach((r) => {
          const i = e.get(r.key), s2 = i.overlayedDocument;
          let o = this.applyToLocalView(s2, i.mutatedFields);
          o = t.has(r.key) ? null : o;
          const _ = __PRIVATE_calculateOverlayMutation(s2, o);
          null !== _ && n.set(r.key, _), s2.isValidDocument() || s2.convertToNoDocument(SnapshotVersion.min());
        }), n;
      }
      keys() {
        return this.mutations.reduce((e, t) => e.add(t.key), __PRIVATE_documentKeySet());
      }
      isEqual(e) {
        return this.batchId === e.batchId && __PRIVATE_arrayEquals(this.mutations, e.mutations, (e2, t) => __PRIVATE_mutationEquals(e2, t)) && __PRIVATE_arrayEquals(this.baseMutations, e.baseMutations, (e2, t) => __PRIVATE_mutationEquals(e2, t));
      }
    };
    Overlay = class {
      constructor(e, t) {
        this.largestBatchId = e, this.mutation = t;
      }
      getKey() {
        return this.mutation.key;
      }
      isEqual(e) {
        return null !== e && this.mutation === e.mutation;
      }
      toString() {
        return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
      }
    };
    (he = le || (le = {}))[he.OK = 0] = "OK", he[he.CANCELLED = 1] = "CANCELLED", he[he.UNKNOWN = 2] = "UNKNOWN", he[he.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", he[he.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", he[he.NOT_FOUND = 5] = "NOT_FOUND", he[he.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", he[he.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", he[he.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", he[he.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", he[he.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", he[he.ABORTED = 10] = "ABORTED", he[he.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", he[he.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", he[he.INTERNAL = 13] = "INTERNAL", he[he.UNAVAILABLE = 14] = "UNAVAILABLE", he[he.DATA_LOSS = 15] = "DATA_LOSS";
    Te = new Integer([4294967295, 4294967295], 0);
    JsonProtoSerializer = class {
      constructor(e, t) {
        this.databaseId = e, this.useProto3Json = t;
      }
    };
    __PRIVATE_LocalSerializer = class {
      constructor(e) {
        this.ht = e;
      }
    };
    __PRIVATE_FirestoreIndexValueWriter = class {
      constructor() {
      }
      // The write methods below short-circuit writing terminators for values
      // containing a (terminating) truncated value.
      // As an example, consider the resulting encoding for:
      // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
      // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
      // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
      /** Writes an index value.  */
      dt(e, t) {
        this.Et(e, t), // Write separator to split index values
        // (see go/firestore-storage-format#encodings).
        t.At();
      }
      Et(e, t) {
        if ("nullValue" in e) this.Rt(t, 5);
        else if ("booleanValue" in e) this.Rt(t, 10), t.Vt(e.booleanValue ? 1 : 0);
        else if ("integerValue" in e) this.Rt(t, 15), t.Vt(__PRIVATE_normalizeNumber(e.integerValue));
        else if ("doubleValue" in e) {
          const n = __PRIVATE_normalizeNumber(e.doubleValue);
          isNaN(n) ? this.Rt(t, 13) : (this.Rt(t, 15), __PRIVATE_isNegativeZero(n) ? (
            // -0.0, 0 and 0.0 are all considered the same
            t.Vt(0)
          ) : t.Vt(n));
        } else if ("timestampValue" in e) {
          let n = e.timestampValue;
          this.Rt(t, 20), "string" == typeof n && (n = __PRIVATE_normalizeTimestamp(n)), t.ft(`${n.seconds || ""}`), t.Vt(n.nanos || 0);
        } else if ("stringValue" in e) this.gt(e.stringValue, t), this.yt(t);
        else if ("bytesValue" in e) this.Rt(t, 30), t.wt(__PRIVATE_normalizeByteString(e.bytesValue)), this.yt(t);
        else if ("referenceValue" in e) this.St(e.referenceValue, t);
        else if ("geoPointValue" in e) {
          const n = e.geoPointValue;
          this.Rt(t, 45), t.Vt(n.latitude || 0), t.Vt(n.longitude || 0);
        } else "mapValue" in e ? __PRIVATE_isMaxValue(e) ? this.Rt(t, Number.MAX_SAFE_INTEGER) : __PRIVATE_isVectorValue(e) ? this.bt(e.mapValue, t) : (this.Dt(e.mapValue, t), this.yt(t)) : "arrayValue" in e ? (this.vt(e.arrayValue, t), this.yt(t)) : fail();
      }
      gt(e, t) {
        this.Rt(t, 25), this.Ct(e, t);
      }
      Ct(e, t) {
        t.ft(e);
      }
      Dt(e, t) {
        const n = e.fields || {};
        this.Rt(t, 55);
        for (const e2 of Object.keys(n)) this.gt(e2, t), this.Et(n[e2], t);
      }
      bt(e, t) {
        var n, r;
        const i = e.fields || {};
        this.Rt(t, 53);
        const s2 = "value", o = (null === (r = null === (n = i[s2].arrayValue) || void 0 === n ? void 0 : n.values) || void 0 === r ? void 0 : r.length) || 0;
        this.Rt(t, 15), t.Vt(__PRIVATE_normalizeNumber(o)), // Vectors then sort by position value
        this.gt(s2, t), this.Et(i[s2], t);
      }
      vt(e, t) {
        const n = e.values || [];
        this.Rt(t, 50);
        for (const e2 of n) this.Et(e2, t);
      }
      St(e, t) {
        this.Rt(t, 37);
        DocumentKey.fromName(e).path.forEach((e2) => {
          this.Rt(t, 60), this.Ct(e2, t);
        });
      }
      Rt(e, t) {
        e.Vt(t);
      }
      yt(e) {
        e.Vt(2);
      }
    };
    __PRIVATE_FirestoreIndexValueWriter.Ft = new __PRIVATE_FirestoreIndexValueWriter();
    __PRIVATE_MemoryIndexManager = class {
      constructor() {
        this.ln = new __PRIVATE_MemoryCollectionParentIndex();
      }
      addToCollectionParentIndex(e, t) {
        return this.ln.add(t), PersistencePromise.resolve();
      }
      getCollectionParents(e, t) {
        return PersistencePromise.resolve(this.ln.getEntries(t));
      }
      addFieldIndex(e, t) {
        return PersistencePromise.resolve();
      }
      deleteFieldIndex(e, t) {
        return PersistencePromise.resolve();
      }
      deleteAllFieldIndexes(e) {
        return PersistencePromise.resolve();
      }
      createTargetIndexes(e, t) {
        return PersistencePromise.resolve();
      }
      getDocumentsMatchingTarget(e, t) {
        return PersistencePromise.resolve(null);
      }
      getIndexType(e, t) {
        return PersistencePromise.resolve(
          0
          /* IndexType.NONE */
        );
      }
      getFieldIndexes(e, t) {
        return PersistencePromise.resolve([]);
      }
      getNextCollectionGroupToUpdate(e) {
        return PersistencePromise.resolve(null);
      }
      getMinOffset(e, t) {
        return PersistencePromise.resolve(IndexOffset.min());
      }
      getMinOffsetFromCollectionGroup(e, t) {
        return PersistencePromise.resolve(IndexOffset.min());
      }
      updateCollectionGroup(e, t, n) {
        return PersistencePromise.resolve();
      }
      updateIndexEntries(e, t) {
        return PersistencePromise.resolve();
      }
    };
    __PRIVATE_MemoryCollectionParentIndex = class {
      constructor() {
        this.index = {};
      }
      // Returns false if the entry already existed.
      add(e) {
        const t = e.lastSegment(), n = e.popLast(), r = this.index[t] || new SortedSet(ResourcePath.comparator), i = !r.has(n);
        return this.index[t] = r.add(n), i;
      }
      has(e) {
        const t = e.lastSegment(), n = e.popLast(), r = this.index[t];
        return r && r.has(n);
      }
      getEntries(e) {
        return (this.index[e] || new SortedSet(ResourcePath.comparator)).toArray();
      }
    };
    Ae = new Uint8Array(0);
    LruParams = class _LruParams {
      static withCacheSize(e) {
        return new _LruParams(e, _LruParams.DEFAULT_COLLECTION_PERCENTILE, _LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
      }
      constructor(e, t, n) {
        this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n;
      }
    };
    LruParams.DEFAULT_COLLECTION_PERCENTILE = 10, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, LruParams.DEFAULT = new LruParams(41943040, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), LruParams.DISABLED = new LruParams(-1, 0, 0);
    __PRIVATE_TargetIdGenerator = class ___PRIVATE_TargetIdGenerator {
      constructor(e) {
        this.kn = e;
      }
      next() {
        return this.kn += 2, this.kn;
      }
      static qn() {
        return new ___PRIVATE_TargetIdGenerator(0);
      }
      static Qn() {
        return new ___PRIVATE_TargetIdGenerator(-1);
      }
    };
    RemoteDocumentChangeBuffer = class {
      constructor() {
        this.changes = new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t)), this.changesApplied = false;
      }
      /**
       * Buffers a `RemoteDocumentCache.addEntry()` call.
       *
       * You can only modify documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      addEntry(e) {
        this.assertNotApplied(), this.changes.set(e.key, e);
      }
      /**
       * Buffers a `RemoteDocumentCache.removeEntry()` call.
       *
       * You can only remove documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      removeEntry(e, t) {
        this.assertNotApplied(), this.changes.set(e, MutableDocument.newInvalidDocument(e).setReadTime(t));
      }
      /**
       * Looks up an entry in the cache. The buffered changes will first be checked,
       * and if no buffered change applies, this will forward to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction - The transaction in which to perform any persistence
       *     operations.
       * @param documentKey - The key of the entry to look up.
       * @returns The cached document or an invalid document if we have nothing
       * cached.
       */
      getEntry(e, t) {
        this.assertNotApplied();
        const n = this.changes.get(t);
        return void 0 !== n ? PersistencePromise.resolve(n) : this.getFromCache(e, t);
      }
      /**
       * Looks up several entries in the cache, forwarding to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction - The transaction in which to perform any persistence
       *     operations.
       * @param documentKeys - The keys of the entries to look up.
       * @returns A map of cached documents, indexed by key. If an entry cannot be
       *     found, the corresponding key will be mapped to an invalid document.
       */
      getEntries(e, t) {
        return this.getAllFromCache(e, t);
      }
      /**
       * Applies buffered changes to the underlying RemoteDocumentCache, using
       * the provided transaction.
       */
      apply(e) {
        return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(e);
      }
      /** Helper to assert this.changes is not null  */
      assertNotApplied() {
      }
    };
    OverlayedDocument = class {
      constructor(e, t) {
        this.overlayedDocument = e, this.mutatedFields = t;
      }
    };
    LocalDocumentsView = class {
      constructor(e, t, n, r) {
        this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r;
      }
      /**
       * Get the local view of the document identified by `key`.
       *
       * @returns Local view of the document or null if we don't have any cached
       * state for it.
       */
      getDocument(e, t) {
        let n = null;
        return this.documentOverlayCache.getOverlay(e, t).next((r) => (n = r, this.remoteDocumentCache.getEntry(e, t))).next((e2) => (null !== n && __PRIVATE_mutationApplyToLocalView(n.mutation, e2, FieldMask.empty(), Timestamp.now()), e2));
      }
      /**
       * Gets the local view of the documents identified by `keys`.
       *
       * If we don't have cached state for a document in `keys`, a NoDocument will
       * be stored for that key in the resulting set.
       */
      getDocuments(e, t) {
        return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.getLocalViewOfDocuments(e, t2, __PRIVATE_documentKeySet()).next(() => t2));
      }
      /**
       * Similar to `getDocuments`, but creates the local view from the given
       * `baseDocs` without retrieving documents from the local store.
       *
       * @param transaction - The transaction this operation is scoped to.
       * @param docs - The documents to apply local mutations to get the local views.
       * @param existenceStateChanged - The set of document keys whose existence state
       *   is changed. This is useful to determine if some documents overlay needs
       *   to be recalculated.
       */
      getLocalViewOfDocuments(e, t, n = __PRIVATE_documentKeySet()) {
        const r = __PRIVATE_newOverlayMap();
        return this.populateOverlays(e, r, t).next(() => this.computeViews(e, t, r, n).next((e2) => {
          let t2 = documentMap();
          return e2.forEach((e3, n2) => {
            t2 = t2.insert(e3, n2.overlayedDocument);
          }), t2;
        }));
      }
      /**
       * Gets the overlayed documents for the given document map, which will include
       * the local view of those documents and a `FieldMask` indicating which fields
       * are mutated locally, `null` if overlay is a Set or Delete mutation.
       */
      getOverlayedDocuments(e, t) {
        const n = __PRIVATE_newOverlayMap();
        return this.populateOverlays(e, n, t).next(() => this.computeViews(e, t, n, __PRIVATE_documentKeySet()));
      }
      /**
       * Fetches the overlays for {@code docs} and adds them to provided overlay map
       * if the map does not already contain an entry for the given document key.
       */
      populateOverlays(e, t, n) {
        const r = [];
        return n.forEach((e2) => {
          t.has(e2) || r.push(e2);
        }), this.documentOverlayCache.getOverlays(e, r).next((e2) => {
          e2.forEach((e3, n2) => {
            t.set(e3, n2);
          });
        });
      }
      /**
       * Computes the local view for the given documents.
       *
       * @param docs - The documents to compute views for. It also has the base
       *   version of the documents.
       * @param overlays - The overlays that need to be applied to the given base
       *   version of the documents.
       * @param existenceStateChanged - A set of documents whose existence states
       *   might have changed. This is used to determine if we need to re-calculate
       *   overlays from mutation queues.
       * @return A map represents the local documents view.
       */
      computeViews(e, t, n, r) {
        let i = __PRIVATE_mutableDocumentMap();
        const s2 = __PRIVATE_newDocumentKeyMap(), o = function __PRIVATE_newOverlayedDocumentMap() {
          return __PRIVATE_newDocumentKeyMap();
        }();
        return t.forEach((e2, t2) => {
          const o2 = n.get(t2.key);
          r.has(t2.key) && (void 0 === o2 || o2.mutation instanceof __PRIVATE_PatchMutation) ? i = i.insert(t2.key, t2) : void 0 !== o2 ? (s2.set(t2.key, o2.mutation.getFieldMask()), __PRIVATE_mutationApplyToLocalView(o2.mutation, t2, o2.mutation.getFieldMask(), Timestamp.now())) : (
            // no overlay exists
            // Using EMPTY to indicate there is no overlay for the document.
            s2.set(t2.key, FieldMask.empty())
          );
        }), this.recalculateAndSaveOverlays(e, i).next((e2) => (e2.forEach((e3, t2) => s2.set(e3, t2)), t.forEach((e3, t2) => {
          var n2;
          return o.set(e3, new OverlayedDocument(t2, null !== (n2 = s2.get(e3)) && void 0 !== n2 ? n2 : null));
        }), o));
      }
      recalculateAndSaveOverlays(e, t) {
        const n = __PRIVATE_newDocumentKeyMap();
        let r = new SortedMap((e2, t2) => e2 - t2), i = __PRIVATE_documentKeySet();
        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((e2) => {
          for (const i2 of e2) i2.keys().forEach((e3) => {
            const s2 = t.get(e3);
            if (null === s2) return;
            let o = n.get(e3) || FieldMask.empty();
            o = i2.applyToLocalView(s2, o), n.set(e3, o);
            const _ = (r.get(i2.batchId) || __PRIVATE_documentKeySet()).add(e3);
            r = r.insert(i2.batchId, _);
          });
        }).next(() => {
          const s2 = [], o = r.getReverseIterator();
          for (; o.hasNext(); ) {
            const r2 = o.getNext(), _ = r2.key, a = r2.value, u = __PRIVATE_newMutationMap();
            a.forEach((e2) => {
              if (!i.has(e2)) {
                const r3 = __PRIVATE_calculateOverlayMutation(t.get(e2), n.get(e2));
                null !== r3 && u.set(e2, r3), i = i.add(e2);
              }
            }), s2.push(this.documentOverlayCache.saveOverlays(e, _, u));
          }
          return PersistencePromise.waitFor(s2);
        }).next(() => n);
      }
      /**
       * Recalculates overlays by reading the documents from remote document cache
       * first, and saves them after they are calculated.
       */
      recalculateAndSaveOverlaysForDocumentKeys(e, t) {
        return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.recalculateAndSaveOverlays(e, t2));
      }
      /**
       * Performs a query against the local view of all documents.
       *
       * @param transaction - The persistence transaction.
       * @param query - The query to match documents against.
       * @param offset - Read time and key to start scanning by (exclusive).
       * @param context - A optional tracker to keep a record of important details
       *   during database local query execution.
       */
      getDocumentsMatchingQuery(e, t, n, r) {
        return function __PRIVATE_isDocumentQuery$1(e2) {
          return DocumentKey.isDocumentKey(e2.path) && null === e2.collectionGroup && 0 === e2.filters.length;
        }(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : __PRIVATE_isCollectionGroupQuery(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r) : this.getDocumentsMatchingCollectionQuery(e, t, n, r);
      }
      /**
       * Given a collection group, returns the next documents that follow the provided offset, along
       * with an updated batch ID.
       *
       * <p>The documents returned by this method are ordered by remote version from the provided
       * offset. If there are no more remote documents after the provided offset, documents with
       * mutations in order of batch id from the offset are returned. Since all documents in a batch are
       * returned together, the total number of documents returned can exceed {@code count}.
       *
       * @param transaction
       * @param collectionGroup The collection group for the documents.
       * @param offset The offset to index into.
       * @param count The number of documents to return
       * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
       */
      getNextDocuments(e, t, n, r) {
        return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next((i) => {
          const s2 = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
          let o = -1, _ = i;
          return s2.next((t2) => PersistencePromise.forEach(t2, (t3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(t3) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(e, t3).next((e2) => {
            _ = _.insert(t3, e2);
          }))).next(() => this.populateOverlays(e, t2, i)).next(() => this.computeViews(e, _, t2, __PRIVATE_documentKeySet())).next((e2) => ({
            batchId: o,
            changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e2)
          })));
        });
      }
      getDocumentsMatchingDocumentQuery(e, t) {
        return this.getDocument(e, new DocumentKey(t)).next((e2) => {
          let t2 = documentMap();
          return e2.isFoundDocument() && (t2 = t2.insert(e2.key, e2)), t2;
        });
      }
      getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
        const i = t.collectionGroup;
        let s2 = documentMap();
        return this.indexManager.getCollectionParents(e, i).next((o) => PersistencePromise.forEach(o, (o2) => {
          const _ = function __PRIVATE_asCollectionQueryAtPath(e2, t2) {
            return new __PRIVATE_QueryImpl(
              t2,
              /*collectionGroup=*/
              null,
              e2.explicitOrderBy.slice(),
              e2.filters.slice(),
              e2.limit,
              e2.limitType,
              e2.startAt,
              e2.endAt
            );
          }(t, o2.child(i));
          return this.getDocumentsMatchingCollectionQuery(e, _, n, r).next((e2) => {
            e2.forEach((e3, t2) => {
              s2 = s2.insert(e3, t2);
            });
          });
        }).next(() => s2));
      }
      getDocumentsMatchingCollectionQuery(e, t, n, r) {
        let i;
        return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next((s2) => (i = s2, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r))).next((e2) => {
          i.forEach((t2, n3) => {
            const r2 = n3.getKey();
            null === e2.get(r2) && (e2 = e2.insert(r2, MutableDocument.newInvalidDocument(r2)));
          });
          let n2 = documentMap();
          return e2.forEach((e3, r2) => {
            const s2 = i.get(e3);
            void 0 !== s2 && __PRIVATE_mutationApplyToLocalView(s2.mutation, r2, FieldMask.empty(), Timestamp.now()), // Finally, insert the documents that still match the query
            __PRIVATE_queryMatches(t, r2) && (n2 = n2.insert(e3, r2));
          }), n2;
        });
      }
    };
    __PRIVATE_MemoryBundleCache = class {
      constructor(e) {
        this.serializer = e, this.Tr = /* @__PURE__ */ new Map(), this.Ir = /* @__PURE__ */ new Map();
      }
      getBundleMetadata(e, t) {
        return PersistencePromise.resolve(this.Tr.get(t));
      }
      saveBundleMetadata(e, t) {
        return this.Tr.set(
          t.id,
          /** Decodes a BundleMetadata proto into a BundleMetadata object. */
          function __PRIVATE_fromBundleMetadata(e2) {
            return {
              id: e2.id,
              version: e2.version,
              createTime: __PRIVATE_fromVersion(e2.createTime)
            };
          }(t)
        ), PersistencePromise.resolve();
      }
      getNamedQuery(e, t) {
        return PersistencePromise.resolve(this.Ir.get(t));
      }
      saveNamedQuery(e, t) {
        return this.Ir.set(t.name, function __PRIVATE_fromProtoNamedQuery(e2) {
          return {
            name: e2.name,
            query: __PRIVATE_fromBundledQuery(e2.bundledQuery),
            readTime: __PRIVATE_fromVersion(e2.readTime)
          };
        }(t)), PersistencePromise.resolve();
      }
    };
    __PRIVATE_MemoryDocumentOverlayCache = class {
      constructor() {
        this.overlays = new SortedMap(DocumentKey.comparator), this.dr = /* @__PURE__ */ new Map();
      }
      getOverlay(e, t) {
        return PersistencePromise.resolve(this.overlays.get(t));
      }
      getOverlays(e, t) {
        const n = __PRIVATE_newOverlayMap();
        return PersistencePromise.forEach(t, (t2) => this.getOverlay(e, t2).next((e2) => {
          null !== e2 && n.set(t2, e2);
        })).next(() => n);
      }
      saveOverlays(e, t, n) {
        return n.forEach((n2, r) => {
          this.Tt(e, t, r);
        }), PersistencePromise.resolve();
      }
      removeOverlaysForBatchId(e, t, n) {
        const r = this.dr.get(n);
        return void 0 !== r && (r.forEach((e2) => this.overlays = this.overlays.remove(e2)), this.dr.delete(n)), PersistencePromise.resolve();
      }
      getOverlaysForCollection(e, t, n) {
        const r = __PRIVATE_newOverlayMap(), i = t.length + 1, s2 = new DocumentKey(t.child("")), o = this.overlays.getIteratorFrom(s2);
        for (; o.hasNext(); ) {
          const e2 = o.getNext().value, s3 = e2.getKey();
          if (!t.isPrefixOf(s3.path)) break;
          s3.path.length === i && (e2.largestBatchId > n && r.set(e2.getKey(), e2));
        }
        return PersistencePromise.resolve(r);
      }
      getOverlaysForCollectionGroup(e, t, n, r) {
        let i = new SortedMap((e2, t2) => e2 - t2);
        const s2 = this.overlays.getIterator();
        for (; s2.hasNext(); ) {
          const e2 = s2.getNext().value;
          if (e2.getKey().getCollectionGroup() === t && e2.largestBatchId > n) {
            let t2 = i.get(e2.largestBatchId);
            null === t2 && (t2 = __PRIVATE_newOverlayMap(), i = i.insert(e2.largestBatchId, t2)), t2.set(e2.getKey(), e2);
          }
        }
        const o = __PRIVATE_newOverlayMap(), _ = i.getIterator();
        for (; _.hasNext(); ) {
          if (_.getNext().value.forEach((e2, t2) => o.set(e2, t2)), o.size() >= r) break;
        }
        return PersistencePromise.resolve(o);
      }
      Tt(e, t, n) {
        const r = this.overlays.get(n.key);
        if (null !== r) {
          const e2 = this.dr.get(r.largestBatchId).delete(n.key);
          this.dr.set(r.largestBatchId, e2);
        }
        this.overlays = this.overlays.insert(n.key, new Overlay(t, n));
        let i = this.dr.get(t);
        void 0 === i && (i = __PRIVATE_documentKeySet(), this.dr.set(t, i)), this.dr.set(t, i.add(n.key));
      }
    };
    __PRIVATE_MemoryGlobalsCache = class {
      constructor() {
        this.sessionToken = ByteString.EMPTY_BYTE_STRING;
      }
      getSessionToken(e) {
        return PersistencePromise.resolve(this.sessionToken);
      }
      setSessionToken(e, t) {
        return this.sessionToken = t, PersistencePromise.resolve();
      }
    };
    __PRIVATE_ReferenceSet = class {
      constructor() {
        this.Er = new SortedSet(__PRIVATE_DocReference.Ar), // A set of outstanding references to a document sorted by target id.
        this.Rr = new SortedSet(__PRIVATE_DocReference.Vr);
      }
      /** Returns true if the reference set contains no references. */
      isEmpty() {
        return this.Er.isEmpty();
      }
      /** Adds a reference to the given document key for the given ID. */
      addReference(e, t) {
        const n = new __PRIVATE_DocReference(e, t);
        this.Er = this.Er.add(n), this.Rr = this.Rr.add(n);
      }
      /** Add references to the given document keys for the given ID. */
      mr(e, t) {
        e.forEach((e2) => this.addReference(e2, t));
      }
      /**
       * Removes a reference to the given document key for the given
       * ID.
       */
      removeReference(e, t) {
        this.gr(new __PRIVATE_DocReference(e, t));
      }
      pr(e, t) {
        e.forEach((e2) => this.removeReference(e2, t));
      }
      /**
       * Clears all references with a given ID. Calls removeRef() for each key
       * removed.
       */
      yr(e) {
        const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1), i = [];
        return this.Rr.forEachInRange([n, r], (e2) => {
          this.gr(e2), i.push(e2.key);
        }), i;
      }
      wr() {
        this.Er.forEach((e) => this.gr(e));
      }
      gr(e) {
        this.Er = this.Er.delete(e), this.Rr = this.Rr.delete(e);
      }
      Sr(e) {
        const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1);
        let i = __PRIVATE_documentKeySet();
        return this.Rr.forEachInRange([n, r], (e2) => {
          i = i.add(e2.key);
        }), i;
      }
      containsKey(e) {
        const t = new __PRIVATE_DocReference(e, 0), n = this.Er.firstAfterOrEqual(t);
        return null !== n && e.isEqual(n.key);
      }
    };
    __PRIVATE_DocReference = class {
      constructor(e, t) {
        this.key = e, this.br = t;
      }
      /** Compare by key then by ID */
      static Ar(e, t) {
        return DocumentKey.comparator(e.key, t.key) || __PRIVATE_primitiveComparator(e.br, t.br);
      }
      /** Compare by ID then by key */
      static Vr(e, t) {
        return __PRIVATE_primitiveComparator(e.br, t.br) || DocumentKey.comparator(e.key, t.key);
      }
    };
    __PRIVATE_MemoryMutationQueue = class {
      constructor(e, t) {
        this.indexManager = e, this.referenceDelegate = t, /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Dr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
        this.vr = new SortedSet(__PRIVATE_DocReference.Ar);
      }
      checkEmpty(e) {
        return PersistencePromise.resolve(0 === this.mutationQueue.length);
      }
      addMutationBatch(e, t, n, r) {
        const i = this.Dr;
        this.Dr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
        const s2 = new MutationBatch(i, t, n, r);
        this.mutationQueue.push(s2);
        for (const t2 of r) this.vr = this.vr.add(new __PRIVATE_DocReference(t2.key, i)), this.indexManager.addToCollectionParentIndex(e, t2.key.path.popLast());
        return PersistencePromise.resolve(s2);
      }
      lookupMutationBatch(e, t) {
        return PersistencePromise.resolve(this.Cr(t));
      }
      getNextMutationBatchAfterBatchId(e, t) {
        const n = t + 1, r = this.Fr(n), i = r < 0 ? 0 : r;
        return PersistencePromise.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
      }
      getHighestUnacknowledgedBatchId() {
        return PersistencePromise.resolve(0 === this.mutationQueue.length ? -1 : this.Dr - 1);
      }
      getAllMutationBatches(e) {
        return PersistencePromise.resolve(this.mutationQueue.slice());
      }
      getAllMutationBatchesAffectingDocumentKey(e, t) {
        const n = new __PRIVATE_DocReference(t, 0), r = new __PRIVATE_DocReference(t, Number.POSITIVE_INFINITY), i = [];
        return this.vr.forEachInRange([n, r], (e2) => {
          const t2 = this.Cr(e2.br);
          i.push(t2);
        }), PersistencePromise.resolve(i);
      }
      getAllMutationBatchesAffectingDocumentKeys(e, t) {
        let n = new SortedSet(__PRIVATE_primitiveComparator);
        return t.forEach((e2) => {
          const t2 = new __PRIVATE_DocReference(e2, 0), r = new __PRIVATE_DocReference(e2, Number.POSITIVE_INFINITY);
          this.vr.forEachInRange([t2, r], (e3) => {
            n = n.add(e3.br);
          });
        }), PersistencePromise.resolve(this.Mr(n));
      }
      getAllMutationBatchesAffectingQuery(e, t) {
        const n = t.path, r = n.length + 1;
        let i = n;
        DocumentKey.isDocumentKey(i) || (i = i.child(""));
        const s2 = new __PRIVATE_DocReference(new DocumentKey(i), 0);
        let o = new SortedSet(__PRIVATE_primitiveComparator);
        return this.vr.forEachWhile((e2) => {
          const t2 = e2.key.path;
          return !!n.isPrefixOf(t2) && // Rows with document keys more than one segment longer than the query
          // path can't be matches. For example, a query on 'rooms' can't match
          // the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          (t2.length === r && (o = o.add(e2.br)), true);
        }, s2), PersistencePromise.resolve(this.Mr(o));
      }
      Mr(e) {
        const t = [];
        return e.forEach((e2) => {
          const n = this.Cr(e2);
          null !== n && t.push(n);
        }), t;
      }
      removeMutationBatch(e, t) {
        __PRIVATE_hardAssert(0 === this.Or(t.batchId, "removed")), this.mutationQueue.shift();
        let n = this.vr;
        return PersistencePromise.forEach(t.mutations, (r) => {
          const i = new __PRIVATE_DocReference(r.key, t.batchId);
          return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key);
        }).next(() => {
          this.vr = n;
        });
      }
      Bn(e) {
      }
      containsKey(e, t) {
        const n = new __PRIVATE_DocReference(t, 0), r = this.vr.firstAfterOrEqual(n);
        return PersistencePromise.resolve(t.isEqual(r && r.key));
      }
      performConsistencyCheck(e) {
        return this.mutationQueue.length, PersistencePromise.resolve();
      }
      /**
       * Finds the index of the given batchId in the mutation queue and asserts that
       * the resulting index is within the bounds of the queue.
       *
       * @param batchId - The batchId to search for
       * @param action - A description of what the caller is doing, phrased in passive
       * form (e.g. "acknowledged" in a routine that acknowledges batches).
       */
      Or(e, t) {
        return this.Fr(e);
      }
      /**
       * Finds the index of the given batchId in the mutation queue. This operation
       * is O(1).
       *
       * @returns The computed index of the batch with the given batchId, based on
       * the state of the queue. Note this index can be negative if the requested
       * batchId has already been removed from the queue or past the end of the
       * queue if the batchId is larger than the last added batch.
       */
      Fr(e) {
        if (0 === this.mutationQueue.length)
          return 0;
        return e - this.mutationQueue[0].batchId;
      }
      /**
       * A version of lookupMutationBatch that doesn't return a promise, this makes
       * other functions that uses this code easier to read and more efficient.
       */
      Cr(e) {
        const t = this.Fr(e);
        if (t < 0 || t >= this.mutationQueue.length) return null;
        return this.mutationQueue[t];
      }
    };
    __PRIVATE_MemoryRemoteDocumentCacheImpl = class {
      /**
       * @param sizer - Used to assess the size of a document. For eager GC, this is
       * expected to just return 0 to avoid unnecessarily doing the work of
       * calculating the size.
       */
      constructor(e) {
        this.Nr = e, /** Underlying cache of documents and their read times. */
        this.docs = function __PRIVATE_documentEntryMap() {
          return new SortedMap(DocumentKey.comparator);
        }(), /** Size of all cached documents. */
        this.size = 0;
      }
      setIndexManager(e) {
        this.indexManager = e;
      }
      /**
       * Adds the supplied entry to the cache and updates the cache size as appropriate.
       *
       * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()`.
       */
      addEntry(e, t) {
        const n = t.key, r = this.docs.get(n), i = r ? r.size : 0, s2 = this.Nr(t);
        return this.docs = this.docs.insert(n, {
          document: t.mutableCopy(),
          size: s2
        }), this.size += s2 - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast());
      }
      /**
       * Removes the specified entry from the cache and updates the cache size as appropriate.
       *
       * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()`.
       */
      removeEntry(e) {
        const t = this.docs.get(e);
        t && (this.docs = this.docs.remove(e), this.size -= t.size);
      }
      getEntry(e, t) {
        const n = this.docs.get(t);
        return PersistencePromise.resolve(n ? n.document.mutableCopy() : MutableDocument.newInvalidDocument(t));
      }
      getEntries(e, t) {
        let n = __PRIVATE_mutableDocumentMap();
        return t.forEach((e2) => {
          const t2 = this.docs.get(e2);
          n = n.insert(e2, t2 ? t2.document.mutableCopy() : MutableDocument.newInvalidDocument(e2));
        }), PersistencePromise.resolve(n);
      }
      getDocumentsMatchingQuery(e, t, n, r) {
        let i = __PRIVATE_mutableDocumentMap();
        const s2 = t.path, o = new DocumentKey(s2.child("__id-9223372036854775808__")), _ = this.docs.getIteratorFrom(o);
        for (; _.hasNext(); ) {
          const { key: e2, value: { document: o2 } } = _.getNext();
          if (!s2.isPrefixOf(e2.path)) break;
          e2.path.length > s2.length + 1 || (__PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(o2), n) <= 0 || (r.has(o2.key) || __PRIVATE_queryMatches(t, o2)) && (i = i.insert(o2.key, o2.mutableCopy())));
        }
        return PersistencePromise.resolve(i);
      }
      getAllFromCollectionGroup(e, t, n, r) {
        fail();
      }
      Br(e, t) {
        return PersistencePromise.forEach(this.docs, (e2) => t(e2));
      }
      newChangeBuffer(e) {
        return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
      }
      getSize(e) {
        return PersistencePromise.resolve(this.size);
      }
    };
    __PRIVATE_MemoryRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
      constructor(e) {
        super(), this.hr = e;
      }
      applyChanges(e) {
        const t = [];
        return this.changes.forEach((n, r) => {
          r.isValidDocument() ? t.push(this.hr.addEntry(e, r)) : this.hr.removeEntry(n);
        }), PersistencePromise.waitFor(t);
      }
      getFromCache(e, t) {
        return this.hr.getEntry(e, t);
      }
      getAllFromCache(e, t) {
        return this.hr.getEntries(e, t);
      }
    };
    __PRIVATE_MemoryTargetCache = class {
      constructor(e) {
        this.persistence = e, /**
         * Maps a target to the data about that target
         */
        this.Lr = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = SnapshotVersion.min(), /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, /** The highest sequence number encountered. */
        this.kr = 0, /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this.qr = new __PRIVATE_ReferenceSet(), this.targetCount = 0, this.Qr = __PRIVATE_TargetIdGenerator.qn();
      }
      forEachTarget(e, t) {
        return this.Lr.forEach((e2, n) => t(n)), PersistencePromise.resolve();
      }
      getLastRemoteSnapshotVersion(e) {
        return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
      }
      getHighestSequenceNumber(e) {
        return PersistencePromise.resolve(this.kr);
      }
      allocateTargetId(e) {
        return this.highestTargetId = this.Qr.next(), PersistencePromise.resolve(this.highestTargetId);
      }
      setTargetsMetadata(e, t, n) {
        return n && (this.lastRemoteSnapshotVersion = n), t > this.kr && (this.kr = t), PersistencePromise.resolve();
      }
      Un(e) {
        this.Lr.set(e.target, e);
        const t = e.targetId;
        t > this.highestTargetId && (this.Qr = new __PRIVATE_TargetIdGenerator(t), this.highestTargetId = t), e.sequenceNumber > this.kr && (this.kr = e.sequenceNumber);
      }
      addTargetData(e, t) {
        return this.Un(t), this.targetCount += 1, PersistencePromise.resolve();
      }
      updateTargetData(e, t) {
        return this.Un(t), PersistencePromise.resolve();
      }
      removeTargetData(e, t) {
        return this.Lr.delete(t.target), this.qr.yr(t.targetId), this.targetCount -= 1, PersistencePromise.resolve();
      }
      removeTargets(e, t, n) {
        let r = 0;
        const i = [];
        return this.Lr.forEach((s2, o) => {
          o.sequenceNumber <= t && null === n.get(o.targetId) && (this.Lr.delete(s2), i.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r++);
        }), PersistencePromise.waitFor(i).next(() => r);
      }
      getTargetCount(e) {
        return PersistencePromise.resolve(this.targetCount);
      }
      getTargetData(e, t) {
        const n = this.Lr.get(t) || null;
        return PersistencePromise.resolve(n);
      }
      addMatchingKeys(e, t, n) {
        return this.qr.mr(t, n), PersistencePromise.resolve();
      }
      removeMatchingKeys(e, t, n) {
        this.qr.pr(t, n);
        const r = this.persistence.referenceDelegate, i = [];
        return r && t.forEach((t2) => {
          i.push(r.markPotentiallyOrphaned(e, t2));
        }), PersistencePromise.waitFor(i);
      }
      removeMatchingKeysForTargetId(e, t) {
        return this.qr.yr(t), PersistencePromise.resolve();
      }
      getMatchingKeysForTargetId(e, t) {
        const n = this.qr.Sr(t);
        return PersistencePromise.resolve(n);
      }
      containsKey(e, t) {
        return PersistencePromise.resolve(this.qr.containsKey(t));
      }
    };
    __PRIVATE_MemoryPersistence = class {
      /**
       * The constructor accepts a factory for creating a reference delegate. This
       * allows both the delegate and this instance to have strong references to
       * each other without having nullable fields that would then need to be
       * checked or asserted on every access.
       */
      constructor(e, t) {
        this.Kr = {}, this.overlays = {}, this.$r = new __PRIVATE_ListenSequence(0), this.Ur = false, this.Ur = true, this.Wr = new __PRIVATE_MemoryGlobalsCache(), this.referenceDelegate = e(this), this.Gr = new __PRIVATE_MemoryTargetCache(this);
        this.indexManager = new __PRIVATE_MemoryIndexManager(), this.remoteDocumentCache = function __PRIVATE_newMemoryRemoteDocumentCache(e2) {
          return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e2);
        }((e2) => this.referenceDelegate.zr(e2)), this.serializer = new __PRIVATE_LocalSerializer(t), this.jr = new __PRIVATE_MemoryBundleCache(this.serializer);
      }
      start() {
        return Promise.resolve();
      }
      shutdown() {
        return this.Ur = false, Promise.resolve();
      }
      get started() {
        return this.Ur;
      }
      setDatabaseDeletedListener() {
      }
      setNetworkEnabled() {
      }
      getIndexManager(e) {
        return this.indexManager;
      }
      getDocumentOverlayCache(e) {
        let t = this.overlays[e.toKey()];
        return t || (t = new __PRIVATE_MemoryDocumentOverlayCache(), this.overlays[e.toKey()] = t), t;
      }
      getMutationQueue(e, t) {
        let n = this.Kr[e.toKey()];
        return n || (n = new __PRIVATE_MemoryMutationQueue(t, this.referenceDelegate), this.Kr[e.toKey()] = n), n;
      }
      getGlobalsCache() {
        return this.Wr;
      }
      getTargetCache() {
        return this.Gr;
      }
      getRemoteDocumentCache() {
        return this.remoteDocumentCache;
      }
      getBundleCache() {
        return this.jr;
      }
      runTransaction(e, t, n) {
        __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e);
        const r = new __PRIVATE_MemoryTransaction(this.$r.next());
        return this.referenceDelegate.Hr(), n(r).next((e2) => this.referenceDelegate.Jr(r).next(() => e2)).toPromise().then((e2) => (r.raiseOnCommittedEvent(), e2));
      }
      Yr(e, t) {
        return PersistencePromise.or(Object.values(this.Kr).map((n) => () => n.containsKey(e, t)));
      }
    };
    __PRIVATE_MemoryTransaction = class extends PersistenceTransaction {
      constructor(e) {
        super(), this.currentSequenceNumber = e;
      }
    };
    __PRIVATE_MemoryEagerDelegate = class ___PRIVATE_MemoryEagerDelegate {
      constructor(e) {
        this.persistence = e, /** Tracks all documents that are active in Query views. */
        this.Zr = new __PRIVATE_ReferenceSet(), /** The list of documents that are potentially GCed after each transaction. */
        this.Xr = null;
      }
      static ei(e) {
        return new ___PRIVATE_MemoryEagerDelegate(e);
      }
      get ti() {
        if (this.Xr) return this.Xr;
        throw fail();
      }
      addReference(e, t, n) {
        return this.Zr.addReference(n, t), this.ti.delete(n.toString()), PersistencePromise.resolve();
      }
      removeReference(e, t, n) {
        return this.Zr.removeReference(n, t), this.ti.add(n.toString()), PersistencePromise.resolve();
      }
      markPotentiallyOrphaned(e, t) {
        return this.ti.add(t.toString()), PersistencePromise.resolve();
      }
      removeTarget(e, t) {
        this.Zr.yr(t.targetId).forEach((e2) => this.ti.add(e2.toString()));
        const n = this.persistence.getTargetCache();
        return n.getMatchingKeysForTargetId(e, t.targetId).next((e2) => {
          e2.forEach((e3) => this.ti.add(e3.toString()));
        }).next(() => n.removeTargetData(e, t));
      }
      Hr() {
        this.Xr = /* @__PURE__ */ new Set();
      }
      Jr(e) {
        const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        return PersistencePromise.forEach(this.ti, (n) => {
          const r = DocumentKey.fromPath(n);
          return this.ni(e, r).next((e2) => {
            e2 || t.removeEntry(r, SnapshotVersion.min());
          });
        }).next(() => (this.Xr = null, t.apply(e)));
      }
      updateLimboDocument(e, t) {
        return this.ni(e, t).next((e2) => {
          e2 ? this.ti.delete(t.toString()) : this.ti.add(t.toString());
        });
      }
      zr(e) {
        return 0;
      }
      ni(e, t) {
        return PersistencePromise.or([() => PersistencePromise.resolve(this.Zr.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.Yr(e, t)]);
      }
    };
    __PRIVATE_LocalViewChanges = class ___PRIVATE_LocalViewChanges {
      constructor(e, t, n, r) {
        this.targetId = e, this.fromCache = t, this.Wi = n, this.Gi = r;
      }
      static zi(e, t) {
        let n = __PRIVATE_documentKeySet(), r = __PRIVATE_documentKeySet();
        for (const e2 of t.docChanges) switch (e2.type) {
          case 0:
            n = n.add(e2.doc.key);
            break;
          case 1:
            r = r.add(e2.doc.key);
        }
        return new ___PRIVATE_LocalViewChanges(e, t.fromCache, n, r);
      }
    };
    QueryContext = class {
      constructor() {
        this._documentReadCount = 0;
      }
      get documentReadCount() {
        return this._documentReadCount;
      }
      incrementDocumentReadCount(e) {
        this._documentReadCount += e;
      }
    };
    __PRIVATE_QueryEngine = class {
      constructor() {
        this.ji = false, this.Hi = false, /**
         * SDK only decides whether it should create index when collection size is
         * larger than this.
         */
        this.Ji = 100, this.Yi = /**
        * This cost represents the evaluation result of
        * (([index, docKey] + [docKey, docContent]) per document in the result set)
        * / ([docKey, docContent] per documents in full collection scan) coming from
        * experiment [enter PR experiment URL here].
        */
        function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
          return isSafari() ? 8 : __PRIVATE_getAndroidVersion(getUA()) > 0 ? 6 : 4;
        }();
      }
      /** Sets the document view to query against. */
      initialize(e, t) {
        this.Zi = e, this.indexManager = t, this.ji = true;
      }
      /** Returns all local documents matching the specified query. */
      getDocumentsMatchingQuery(e, t, n, r) {
        const i = {
          result: null
        };
        return this.Xi(e, t).next((e2) => {
          i.result = e2;
        }).next(() => {
          if (!i.result) return this.es(e, t, r, n).next((e2) => {
            i.result = e2;
          });
        }).next(() => {
          if (i.result) return;
          const n2 = new QueryContext();
          return this.ts(e, t, n2).next((r2) => {
            if (i.result = r2, this.Hi) return this.ns(e, t, n2, r2.size);
          });
        }).next(() => i.result);
      }
      ns(e, t, n, r) {
        return n.documentReadCount < this.Ji ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.Ji, "documents"), PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."), n.documentReadCount > this.Yi * r ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, __PRIVATE_queryToTarget(t))) : PersistencePromise.resolve());
      }
      /**
       * Performs an indexed query that evaluates the query based on a collection's
       * persisted index values. Returns `null` if an index is not available.
       */
      Xi(e, t) {
        if (__PRIVATE_queryMatchesAllDocuments(t))
          return PersistencePromise.resolve(null);
        let n = __PRIVATE_queryToTarget(t);
        return this.indexManager.getIndexType(e, n).next((r) => 0 === r ? null : (null !== t.limit && 1 === r && // We cannot apply a limit for targets that are served using a partial
        // index. If a partial index will be used to serve the target, the
        // query may return a superset of documents that match the target
        // (e.g. if the index doesn't include all the target's filters), or
        // may return the correct set of documents in the wrong order (e.g. if
        // the index doesn't include a segment for one of the orderBys).
        // Therefore, a limit should not be applied in such cases.
        (t = __PRIVATE_queryWithLimit(
          t,
          null,
          "F"
          /* LimitType.First */
        ), n = __PRIVATE_queryToTarget(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next((r2) => {
          const i = __PRIVATE_documentKeySet(...r2);
          return this.Zi.getDocuments(e, i).next((r3) => this.indexManager.getMinOffset(e, n).next((n2) => {
            const s2 = this.rs(t, r3);
            return this.ss(t, s2, i, n2.readTime) ? this.Xi(e, __PRIVATE_queryWithLimit(
              t,
              null,
              "F"
              /* LimitType.First */
            )) : this.os(e, s2, t, n2);
          }));
        })));
      }
      /**
       * Performs a query based on the target's persisted query mapping. Returns
       * `null` if the mapping is not available or cannot be used.
       */
      es(e, t, n, r) {
        return __PRIVATE_queryMatchesAllDocuments(t) || r.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.Zi.getDocuments(e, n).next((i) => {
          const s2 = this.rs(t, i);
          return this.ss(t, s2, n, r) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), __PRIVATE_stringifyQuery(t)), this.os(e, s2, t, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r, -1)).next((e2) => e2));
        });
      }
      /** Applies the query filter and sorting to the provided documents.  */
      rs(e, t) {
        let n = new SortedSet(__PRIVATE_newQueryComparator(e));
        return t.forEach((t2, r) => {
          __PRIVATE_queryMatches(e, r) && (n = n.add(r));
        }), n;
      }
      /**
       * Determines if a limit query needs to be refilled from cache, making it
       * ineligible for index-free execution.
       *
       * @param query - The query.
       * @param sortedPreviousResults - The documents that matched the query when it
       * was last synchronized, sorted by the query's comparator.
       * @param remoteKeys - The document keys that matched the query at the last
       * snapshot.
       * @param limboFreeSnapshotVersion - The version of the snapshot when the
       * query was last synchronized.
       */
      ss(e, t, n, r) {
        if (null === e.limit)
          return false;
        if (n.size !== t.size)
          return true;
        const i = "F" === e.limitType ? t.last() : t.first();
        return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
      }
      ts(e, t, n) {
        return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(t)), this.Zi.getDocumentsMatchingQuery(e, t, IndexOffset.min(), n);
      }
      /**
       * Combines the results from an indexed execution with the remaining documents
       * that have not yet been indexed.
       */
      os(e, t, n, r) {
        return this.Zi.getDocumentsMatchingQuery(e, n, r).next((e2) => (
          // Merge with existing results
          (t.forEach((t2) => {
            e2 = e2.insert(t2.key, t2);
          }), e2)
        ));
      }
    };
    __PRIVATE_LocalStoreImpl = class {
      constructor(e, t, n, r) {
        this.persistence = e, this._s = t, this.serializer = r, /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.us = new SortedMap(__PRIVATE_primitiveComparator), /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.cs = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.ls = /* @__PURE__ */ new Map(), this.hs = e.getRemoteDocumentCache(), this.Gr = e.getTargetCache(), this.jr = e.getBundleCache(), this.Ps(n);
      }
      Ps(e) {
        this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new LocalDocumentsView(this.hs, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.hs.setIndexManager(this.indexManager), this._s.initialize(this.localDocuments, this.indexManager);
      }
      collectGarbage(e) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t) => e.collect(t, this.us));
      }
    };
    __PRIVATE_LocalClientState = class {
      constructor() {
        this.activeTargetIds = __PRIVATE_targetIdSet();
      }
      ps(e) {
        this.activeTargetIds = this.activeTargetIds.add(e);
      }
      ys(e) {
        this.activeTargetIds = this.activeTargetIds.delete(e);
      }
      /**
       * Converts this entry into a JSON-encoded format we can use for WebStorage.
       * Does not encode `clientId` as it is part of the key in WebStorage.
       */
      gs() {
        const e = {
          activeTargetIds: this.activeTargetIds.toArray(),
          updateTimeMs: Date.now()
        };
        return JSON.stringify(e);
      }
    };
    __PRIVATE_MemorySharedClientState = class {
      constructor() {
        this._o = new __PRIVATE_LocalClientState(), this.ao = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
      }
      addPendingMutation(e) {
      }
      updateMutationState(e, t, n) {
      }
      addLocalQueryTarget(e, t = true) {
        return t && this._o.ps(e), this.ao[e] || "not-current";
      }
      updateQueryState(e, t, n) {
        this.ao[e] = t;
      }
      removeLocalQueryTarget(e) {
        this._o.ys(e);
      }
      isLocalQueryTarget(e) {
        return this._o.activeTargetIds.has(e);
      }
      clearQueryState(e) {
        delete this.ao[e];
      }
      getAllActiveQueryTargets() {
        return this._o.activeTargetIds;
      }
      isActiveQueryTarget(e) {
        return this._o.activeTargetIds.has(e);
      }
      start() {
        return this._o = new __PRIVATE_LocalClientState(), Promise.resolve();
      }
      handleUserChange(e, t, n) {
      }
      setOnlineState(e) {
      }
      shutdown() {
      }
      writeSequenceNumber(e) {
      }
      notifyBundleLoaded(e) {
      }
    };
    __PRIVATE_NoopConnectivityMonitor = class {
      uo(e) {
      }
      shutdown() {
      }
    };
    __PRIVATE_BrowserConnectivityMonitor = class {
      constructor() {
        this.co = () => this.lo(), this.ho = () => this.Po(), this.To = [], this.Io();
      }
      uo(e) {
        this.To.push(e);
      }
      shutdown() {
        window.removeEventListener("online", this.co), window.removeEventListener("offline", this.ho);
      }
      Io() {
        window.addEventListener("online", this.co), window.addEventListener("offline", this.ho);
      }
      lo() {
        __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (const e of this.To) e(
          0
          /* NetworkStatus.AVAILABLE */
        );
      }
      Po() {
        __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (const e of this.To) e(
          1
          /* NetworkStatus.UNAVAILABLE */
        );
      }
      // TODO(chenbrian): Consider passing in window either into this component or
      // here for testing via FakeWindow.
      /** Checks that all used attributes of window are available. */
      static p() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
      }
    };
    me = null;
    fe = {
      BatchGetDocuments: "batchGet",
      Commit: "commit",
      RunQuery: "runQuery",
      RunAggregationQuery: "runAggregationQuery"
    };
    __PRIVATE_StreamBridge = class {
      constructor(e) {
        this.Eo = e.Eo, this.Ao = e.Ao;
      }
      Ro(e) {
        this.Vo = e;
      }
      mo(e) {
        this.fo = e;
      }
      po(e) {
        this.yo = e;
      }
      onMessage(e) {
        this.wo = e;
      }
      close() {
        this.Ao();
      }
      send(e) {
        this.Eo(e);
      }
      So() {
        this.Vo();
      }
      bo() {
        this.fo();
      }
      Do(e) {
        this.yo(e);
      }
      vo(e) {
        this.wo(e);
      }
    };
    ge = "WebChannelConnection";
    __PRIVATE_WebChannelConnection = class extends /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    class __PRIVATE_RestConnection {
      get Co() {
        return false;
      }
      constructor(e) {
        this.databaseInfo = e, this.databaseId = e.databaseId;
        const t = e.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), r = encodeURIComponent(this.databaseId.database);
        this.Fo = t + "://" + e.host, this.Mo = `projects/${n}/databases/${r}`, this.xo = "(default)" === this.databaseId.database ? `project_id=${n}` : `project_id=${n}&database_id=${r}`;
      }
      Oo(e, t, n, r, i) {
        const s2 = __PRIVATE_generateUniqueDebugId(), o = this.No(e, t.toUriEncodedString());
        __PRIVATE_logDebug("RestConnection", `Sending RPC '${e}' ${s2}:`, o, n);
        const _ = {
          "google-cloud-resource-prefix": this.Mo,
          "x-goog-request-params": this.xo
        };
        return this.Bo(_, r, i), this.Lo(e, o, _, n).then((t2) => (__PRIVATE_logDebug("RestConnection", `Received RPC '${e}' ${s2}: `, t2), t2), (t2) => {
          throw __PRIVATE_logWarn("RestConnection", `RPC '${e}' ${s2} failed with error: `, t2, "url: ", o, "request:", n), t2;
        });
      }
      ko(e, t, n, r, i, s2) {
        return this.Oo(e, t, n, r, i);
      }
      /**
       * Modifies the headers for a request, adding any authorization token if
       * present and any additional headers for the request.
       */
      Bo(e, t, n) {
        e["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
        // so we need to get its value when we need it in a function.
        function __PRIVATE_getGoogApiClientValue() {
          return "gl-js/ fire/" + S;
        }(), // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach((t2, n2) => e[n2] = t2), n && n.headers.forEach((t2, n2) => e[n2] = t2);
      }
      No(e, t) {
        const n = fe[e];
        return `${this.Fo}/v1/${t}:${n}`;
      }
      /**
       * Closes and cleans up any resources associated with the connection. This
       * implementation is a no-op because there are no resources associated
       * with the RestConnection that need to be cleaned up.
       */
      terminate() {
      }
    } {
      constructor(e) {
        super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
      }
      Lo(e, t, n, r) {
        const i = __PRIVATE_generateUniqueDebugId();
        return new Promise((s2, o) => {
          const _ = new XhrIo();
          _.setWithCredentials(true), _.listenOnce(EventType.COMPLETE, () => {
            try {
              switch (_.getLastErrorCode()) {
                case ErrorCode.NO_ERROR:
                  const t2 = _.getResponseJson();
                  __PRIVATE_logDebug(ge, `XHR for RPC '${e}' ${i} received:`, JSON.stringify(t2)), s2(t2);
                  break;
                case ErrorCode.TIMEOUT:
                  __PRIVATE_logDebug(ge, `RPC '${e}' ${i} timed out`), o(new FirestoreError(D.DEADLINE_EXCEEDED, "Request time out"));
                  break;
                case ErrorCode.HTTP_ERROR:
                  const n2 = _.getStatus();
                  if (__PRIVATE_logDebug(ge, `RPC '${e}' ${i} failed with status:`, n2, "response text:", _.getResponseText()), n2 > 0) {
                    let e2 = _.getResponseJson();
                    Array.isArray(e2) && (e2 = e2[0]);
                    const t3 = null == e2 ? void 0 : e2.error;
                    if (t3 && t3.status && t3.message) {
                      const e3 = function __PRIVATE_mapCodeFromHttpResponseErrorStatus(e4) {
                        const t4 = e4.toLowerCase().replace(/_/g, "-");
                        return Object.values(D).indexOf(t4) >= 0 ? t4 : D.UNKNOWN;
                      }(t3.status);
                      o(new FirestoreError(e3, t3.message));
                    } else o(new FirestoreError(D.UNKNOWN, "Server responded with status " + _.getStatus()));
                  } else
                    o(new FirestoreError(D.UNAVAILABLE, "Connection failed."));
                  break;
                default:
                  fail();
              }
            } finally {
              __PRIVATE_logDebug(ge, `RPC '${e}' ${i} completed.`);
            }
          });
          const a = JSON.stringify(r);
          __PRIVATE_logDebug(ge, `RPC '${e}' ${i} sending request:`, r), _.send(t, "POST", a, n, 15);
        });
      }
      qo(e, t, n) {
        const r = __PRIVATE_generateUniqueDebugId(), i = [this.Fo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], s2 = createWebChannelTransport(), o = getStatEventTarget(), _ = {
          // Required for backend stickiness, routing behavior is based on this
          // parameter.
          httpSessionIdParam: "gsessionid",
          initMessageHeaders: {},
          messageUrlParams: {
            // This param is used to improve routing and project isolation by the
            // backend and must be included in every request.
            database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
          },
          sendRawJson: true,
          supportsCrossDomainXhr: true,
          internalChannelParams: {
            // Override the default timeout (randomized between 10-20 seconds) since
            // a large write batch on a slow internet connection may take a long
            // time to send to the backend. Rather than have WebChannel impose a
            // tight timeout which could lead to infinite timeouts and retries, we
            // set it very large (5-10 minutes) and rely on the browser's builtin
            // timeouts to kick in if the request isn't working.
            forwardChannelRequestTimeoutMs: 6e5
          },
          forceLongPolling: this.forceLongPolling,
          detectBufferingProxy: this.autoDetectLongPolling
        }, a = this.longPollingOptions.timeoutSeconds;
        void 0 !== a && (_.longPollingTimeout = Math.round(1e3 * a)), this.useFetchStreams && (_.useFetchStreams = true), this.Bo(_.initMessageHeaders, t, n), // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the encodeInitMessageHeaders option to specify that
        // the headers should instead be encoded in the request's POST payload,
        // which is recognized by the webchannel backend.
        _.encodeInitMessageHeaders = true;
        const u = i.join("");
        __PRIVATE_logDebug(ge, `Creating RPC '${e}' stream ${r}: ${u}`, _);
        const c = s2.createWebChannel(u, _);
        let l = false, h = false;
        const P = new __PRIVATE_StreamBridge({
          Eo: (t2) => {
            h ? __PRIVATE_logDebug(ge, `Not sending because RPC '${e}' stream ${r} is closed:`, t2) : (l || (__PRIVATE_logDebug(ge, `Opening RPC '${e}' stream ${r} transport.`), c.open(), l = true), __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} sending:`, t2), c.send(t2));
          },
          Ao: () => c.close()
        }), __PRIVATE_unguardedEventListen = (e2, t2, n2) => {
          e2.listen(t2, (e3) => {
            try {
              n2(e3);
            } catch (e4) {
              setTimeout(() => {
                throw e4;
              }, 0);
            }
          });
        };
        return __PRIVATE_unguardedEventListen(c, WebChannel.EventType.OPEN, () => {
          h || (__PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} transport opened.`), P.So());
        }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.CLOSE, () => {
          h || (h = true, __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} transport closed`), P.Do());
        }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.ERROR, (t2) => {
          h || (h = true, __PRIVATE_logWarn(ge, `RPC '${e}' stream ${r} transport errored:`, t2), P.Do(new FirestoreError(D.UNAVAILABLE, "The operation could not be completed")));
        }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.MESSAGE, (t2) => {
          var n2;
          if (!h) {
            const i2 = t2.data[0];
            __PRIVATE_hardAssert(!!i2);
            const s3 = i2, o2 = (null == s3 ? void 0 : s3.error) || (null === (n2 = s3[0]) || void 0 === n2 ? void 0 : n2.error);
            if (o2) {
              __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} received error:`, o2);
              const t3 = o2.status;
              let n3 = (
                /**
                * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
                *
                * @returns The Code equivalent to the given status string or undefined if
                *     there is no match.
                */
                function __PRIVATE_mapCodeFromRpcStatus(e2) {
                  const t4 = le[e2];
                  if (void 0 !== t4) return __PRIVATE_mapCodeFromRpcCode(t4);
                }(t3)
              ), i3 = o2.message;
              void 0 === n3 && (n3 = D.INTERNAL, i3 = "Unknown error status: " + t3 + " with message " + o2.message), // Mark closed so no further events are propagated
              h = true, P.Do(new FirestoreError(n3, i3)), c.close();
            } else __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} received:`, i2), P.vo(i2);
          }
        }), __PRIVATE_unguardedEventListen(o, Event.STAT_EVENT, (t2) => {
          t2.stat === Stat.PROXY ? __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} detected buffering proxy`) : t2.stat === Stat.NOPROXY && __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} detected no buffering proxy`);
        }), setTimeout(() => {
          P.bo();
        }, 0), P;
      }
    };
    __PRIVATE_ExponentialBackoff = class {
      constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
        this.li = e, this.timerId = t, this.Qo = n, this.Ko = r, this.$o = i, this.Uo = 0, this.Wo = null, /** The last backoff attempt, as epoch milliseconds. */
        this.Go = Date.now(), this.reset();
      }
      /**
       * Resets the backoff delay.
       *
       * The very next backoffAndWait() will have no delay. If it is called again
       * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
       * subsequent ones will increase according to the backoffFactor.
       */
      reset() {
        this.Uo = 0;
      }
      /**
       * Resets the backoff delay to the maximum delay (e.g. for use after a
       * RESOURCE_EXHAUSTED error).
       */
      zo() {
        this.Uo = this.$o;
      }
      /**
       * Returns a promise that resolves after currentDelayMs, and increases the
       * delay for any subsequent attempts. If there was a pending backoff operation
       * already, it will be canceled.
       */
      jo(e) {
        this.cancel();
        const t = Math.floor(this.Uo + this.Ho()), n = Math.max(0, Date.now() - this.Go), r = Math.max(0, t - n);
        r > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`), this.Wo = this.li.enqueueAfterDelay(this.timerId, r, () => (this.Go = Date.now(), e())), // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Uo *= this.Ko, this.Uo < this.Qo && (this.Uo = this.Qo), this.Uo > this.$o && (this.Uo = this.$o);
      }
      Jo() {
        null !== this.Wo && (this.Wo.skipDelay(), this.Wo = null);
      }
      cancel() {
        null !== this.Wo && (this.Wo.cancel(), this.Wo = null);
      }
      /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
      Ho() {
        return (Math.random() - 0.5) * this.Uo;
      }
    };
    __PRIVATE_DatastoreImpl = class extends class Datastore {
    } {
      constructor(e, t, n, r) {
        super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.S_ = false;
      }
      b_() {
        if (this.S_) throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.");
      }
      /** Invokes the provided RPC with auth and AppCheck tokens. */
      Oo(e, t, n, r) {
        return this.b_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, s2]) => this.connection.Oo(e, __PRIVATE_toResourcePath(t, n), r, i, s2)).catch((e2) => {
          throw "FirebaseError" === e2.name ? (e2.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D.UNKNOWN, e2.toString());
        });
      }
      /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
      ko(e, t, n, r, i) {
        return this.b_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s2, o]) => this.connection.ko(e, __PRIVATE_toResourcePath(t, n), r, s2, o, i)).catch((e2) => {
          throw "FirebaseError" === e2.name ? (e2.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D.UNKNOWN, e2.toString());
        });
      }
      terminate() {
        this.S_ = true, this.connection.terminate();
      }
    };
    __PRIVATE_OnlineStateTracker = class {
      constructor(e, t) {
        this.asyncQueue = e, this.onlineStateHandler = t, /** The current OnlineState. */
        this.state = "Unknown", /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.D_ = 0, /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.v_ = null, /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.C_ = true;
      }
      /**
       * Called by RemoteStore when a watch stream is started (including on each
       * backoff attempt).
       *
       * If this is the first attempt, it sets the OnlineState to Unknown and starts
       * the onlineStateTimer.
       */
      F_() {
        0 === this.D_ && (this.M_(
          "Unknown"
          /* OnlineState.Unknown */
        ), this.v_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.v_ = null, this.x_("Backend didn't respond within 10 seconds."), this.M_(
          "Offline"
          /* OnlineState.Offline */
        ), Promise.resolve())));
      }
      /**
       * Updates our OnlineState as appropriate after the watch stream reports a
       * failure. The first failure moves us to the 'Unknown' state. We then may
       * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
       * actually transition to the 'Offline' state.
       */
      O_(e) {
        "Online" === this.state ? this.M_(
          "Unknown"
          /* OnlineState.Unknown */
        ) : (this.D_++, this.D_ >= 1 && (this.N_(), this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.M_(
          "Offline"
          /* OnlineState.Offline */
        )));
      }
      /**
       * Explicitly sets the OnlineState to the specified state.
       *
       * Note that this resets our timers / failure counters, etc. used by our
       * Offline heuristics, so must not be used in place of
       * handleWatchStreamStart() and handleWatchStreamFailure().
       */
      set(e) {
        this.N_(), this.D_ = 0, "Online" === e && // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        (this.C_ = false), this.M_(e);
      }
      M_(e) {
        e !== this.state && (this.state = e, this.onlineStateHandler(e));
      }
      x_(e) {
        const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this.C_ ? (__PRIVATE_logError(t), this.C_ = false) : __PRIVATE_logDebug("OnlineStateTracker", t);
      }
      N_() {
        null !== this.v_ && (this.v_.cancel(), this.v_ = null);
      }
    };
    __PRIVATE_RemoteStoreImpl = class {
      constructor(e, t, n, r, i) {
        this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.B_ = [], /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.L_ = /* @__PURE__ */ new Map(), /**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */
        this.k_ = /* @__PURE__ */ new Set(), /**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */
        this.q_ = [], this.Q_ = i, this.Q_.uo((e2) => {
          n.enqueueAndForget(async () => {
            __PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug("RemoteStore", "Restarting streams for network reachability change."), await async function __PRIVATE_restartNetwork(e3) {
              const t2 = __PRIVATE_debugCast(e3);
              t2.k_.add(
                4
                /* OfflineCause.ConnectivityChange */
              ), await __PRIVATE_disableNetworkInternal(t2), t2.K_.set(
                "Unknown"
                /* OnlineState.Unknown */
              ), t2.k_.delete(
                4
                /* OfflineCause.ConnectivityChange */
              ), await __PRIVATE_enableNetworkInternal(t2);
            }(this));
          });
        }), this.K_ = new __PRIVATE_OnlineStateTracker(n, r);
      }
    };
    DelayedOperation = class _DelayedOperation {
      constructor(e, t, n, r, i) {
        this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch((e2) => {
        });
      }
      get promise() {
        return this.deferred.promise;
      }
      /**
       * Creates and returns a DelayedOperation that has been scheduled to be
       * executed on the provided asyncQueue after the provided delayMs.
       *
       * @param asyncQueue - The queue to schedule the operation on.
       * @param id - A Timer ID identifying the type of operation this is.
       * @param delayMs - The delay (ms) before the operation should be scheduled.
       * @param op - The operation to run.
       * @param removalCallback - A callback to be called synchronously once the
       *   operation is executed or canceled, notifying the AsyncQueue to remove it
       *   from its delayedOperations list.
       *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
       *   the DelayedOperation class public.
       */
      static createAndSchedule(e, t, n, r, i) {
        const s2 = Date.now() + n, o = new _DelayedOperation(e, t, s2, r, i);
        return o.start(n), o;
      }
      /**
       * Starts the timer. This is called immediately after construction by
       * createAndSchedule().
       */
      start(e) {
        this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
      }
      /**
       * Queues the operation to run immediately (if it hasn't already been run or
       * canceled).
       */
      skipDelay() {
        return this.handleDelayElapsed();
      }
      /**
       * Cancels the operation if it hasn't already been executed or canceled. The
       * promise will be rejected.
       *
       * As long as the operation has not yet been run, calling cancel() provides a
       * guarantee that the operation will not be run.
       */
      cancel(e) {
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(D.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
      }
      handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e))) : Promise.resolve());
      }
      clearTimeout() {
        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
      }
    };
    __PRIVATE_EventManagerImpl = class {
      constructor() {
        this.queries = __PRIVATE_newQueriesObjectMap(), this.onlineState = "Unknown", this.X_ = /* @__PURE__ */ new Set();
      }
      terminate() {
        !function __PRIVATE_errorAllTargets(e, t) {
          const n = __PRIVATE_debugCast(e), r = n.queries;
          n.queries = __PRIVATE_newQueriesObjectMap(), r.forEach((e2, n2) => {
            for (const e3 of n2.J_) e3.onError(t);
          });
        }(this, new FirestoreError(D.ABORTED, "Firestore shutting down"));
      }
    };
    (ye = pe || (pe = {})).na = "default", /** Listen to changes in cache only */
    ye.Cache = "cache";
    __PRIVATE_SyncEngineImpl = class {
      constructor(e, t, n, r, i, s2) {
        this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = s2, this.Ma = {}, this.xa = new ObjectMap((e2) => __PRIVATE_canonifyQuery(e2), __PRIVATE_queryEquals), this.Oa = /* @__PURE__ */ new Map(), /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */
        this.Na = /* @__PURE__ */ new Set(), /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
        this.Ba = new SortedMap(DocumentKey.comparator), /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
        this.La = /* @__PURE__ */ new Map(), this.ka = new __PRIVATE_ReferenceSet(), /** Stores user completion handlers, indexed by User and BatchId. */
        this.qa = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Qa = /* @__PURE__ */ new Map(), this.Ka = __PRIVATE_TargetIdGenerator.Qn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.$a = void 0;
      }
      get isPrimaryClient() {
        return true === this.$a;
      }
    };
    __PRIVATE_MemoryOfflineComponentProvider = class {
      constructor() {
        this.kind = "memory", this.synchronizeTabs = false;
      }
      async initialize(e) {
        this.serializer = __PRIVATE_newSerializer(e.databaseInfo.databaseId), this.sharedClientState = this.za(e), this.persistence = this.ja(e), await this.persistence.start(), this.localStore = this.Ha(e), this.gcScheduler = this.Ja(e, this.localStore), this.indexBackfillerScheduler = this.Ya(e, this.localStore);
      }
      Ja(e, t) {
        return null;
      }
      Ya(e, t) {
        return null;
      }
      Ha(e) {
        return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
      }
      ja(e) {
        return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.ei, this.serializer);
      }
      za(e) {
        return new __PRIVATE_MemorySharedClientState();
      }
      async terminate() {
        var e, t;
        null === (e = this.gcScheduler) || void 0 === e || e.stop(), null === (t = this.indexBackfillerScheduler) || void 0 === t || t.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
      }
    };
    __PRIVATE_MemoryOfflineComponentProvider.provider = {
      build: () => new __PRIVATE_MemoryOfflineComponentProvider()
    };
    OnlineComponentProvider = class {
      async initialize(e, t) {
        this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(
          t,
          /* startAsPrimary=*/
          !e.synchronizeTabs
        ), this.sharedClientState.onlineStateHandler = (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
          this.syncEngine,
          e2,
          1
          /* OnlineStateSource.SharedClientState */
        ), this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine), await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient));
      }
      createEventManager(e) {
        return function __PRIVATE_newEventManager() {
          return new __PRIVATE_EventManagerImpl();
        }();
      }
      createDatastore(e) {
        const t = __PRIVATE_newSerializer(e.databaseInfo.databaseId), n = function __PRIVATE_newConnection(e2) {
          return new __PRIVATE_WebChannelConnection(e2);
        }(e.databaseInfo);
        return function __PRIVATE_newDatastore(e2, t2, n2, r) {
          return new __PRIVATE_DatastoreImpl(e2, t2, n2, r);
        }(e.authCredentials, e.appCheckCredentials, n, t);
      }
      createRemoteStore(e) {
        return function __PRIVATE_newRemoteStore(e2, t, n, r, i) {
          return new __PRIVATE_RemoteStoreImpl(e2, t, n, r, i);
        }(this.localStore, this.datastore, e.asyncQueue, (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
          this.syncEngine,
          e2,
          0
          /* OnlineStateSource.RemoteStore */
        ), function __PRIVATE_newConnectivityMonitor() {
          return __PRIVATE_BrowserConnectivityMonitor.p() ? new __PRIVATE_BrowserConnectivityMonitor() : new __PRIVATE_NoopConnectivityMonitor();
        }());
      }
      createSyncEngine(e, t) {
        return function __PRIVATE_newSyncEngine(e2, t2, n, r, i, s2, o) {
          const _ = new __PRIVATE_SyncEngineImpl(e2, t2, n, r, i, s2);
          return o && (_.$a = true), _;
        }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
      }
      async terminate() {
        var e, t;
        await async function __PRIVATE_remoteStoreShutdown(e2) {
          const t2 = __PRIVATE_debugCast(e2);
          __PRIVATE_logDebug("RemoteStore", "RemoteStore shutting down."), t2.k_.add(
            5
            /* OfflineCause.Shutdown */
          ), await __PRIVATE_disableNetworkInternal(t2), t2.Q_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
          // triggering spurious listener events with cached data, etc.
          t2.K_.set(
            "Unknown"
            /* OnlineState.Unknown */
          );
        }(this.remoteStore), null === (e = this.datastore) || void 0 === e || e.terminate(), null === (t = this.eventManager) || void 0 === t || t.terminate();
      }
    };
    OnlineComponentProvider.provider = {
      build: () => new OnlineComponentProvider()
    };
    we = /* @__PURE__ */ new Map();
    FirestoreSettingsImpl = class {
      constructor(e) {
        var t, n;
        if (void 0 === e.host) {
          if (void 0 !== e.ssl) throw new FirestoreError(D.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
          this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = e.host, this.ssl = null === (t = e.ssl) || void 0 === t || t;
        if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes) this.cacheSizeBytes = 41943040;
        else {
          if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576) throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
          this.cacheSizeBytes = e.cacheSizeBytes;
        }
        __PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
          // For backwards compatibility, coerce the value to boolean even though
          // the TypeScript compiler has narrowed the type to boolean already.
          // noinspection PointlessBooleanExpressionJS
          this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
        ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(null !== (n = e.experimentalLongPollingOptions) && void 0 !== n ? n : {}), function __PRIVATE_validateLongPollingOptions(e2) {
          if (void 0 !== e2.timeoutSeconds) {
            if (isNaN(e2.timeoutSeconds)) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (must not be NaN)`);
            if (e2.timeoutSeconds < 5) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (minimum allowed value is 5)`);
            if (e2.timeoutSeconds > 30) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (maximum allowed value is 30)`);
          }
        }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
      }
      isEqual(e) {
        return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function __PRIVATE_longPollingOptionsEqual(e2, t) {
          return e2.timeoutSeconds === t.timeoutSeconds;
        }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
      }
    };
    Firestore$1 = class {
      /** @hideconstructor */
      constructor(e, t, n, r) {
        this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, /**
         * Whether it's a Firestore or Firestore Lite instance.
         */
        this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false, // A task that is assigned when the terminate() is invoked and resolved when
        // all components have shut down. Otherwise, Firestore is not terminated,
        // which can mean either the FirestoreClient is in the process of starting,
        // or restarting.
        this._terminateTask = "notTerminated";
      }
      /**
       * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
       * instance.
       */
      get app() {
        if (!this._app) throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app;
      }
      get _initialized() {
        return this._settingsFrozen;
      }
      get _terminated() {
        return "notTerminated" !== this._terminateTask;
      }
      _setSettings(e) {
        if (this._settingsFrozen) throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new FirestoreSettingsImpl(e), void 0 !== e.credentials && (this._authCredentials = function __PRIVATE_makeAuthCredentialsProvider(e2) {
          if (!e2) return new __PRIVATE_EmptyAuthCredentialsProvider();
          switch (e2.type) {
            case "firstParty":
              return new __PRIVATE_FirstPartyAuthCredentialsProvider(e2.sessionIndex || "0", e2.iamToken || null, e2.authTokenFactory || null);
            case "provider":
              return e2.client;
            default:
              throw new FirestoreError(D.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
          }
        }(e.credentials));
      }
      _getSettings() {
        return this._settings;
      }
      _freezeSettings() {
        return this._settingsFrozen = true, this._settings;
      }
      _delete() {
        return "notTerminated" === this._terminateTask && (this._terminateTask = this._terminate()), this._terminateTask;
      }
      async _restart() {
        "notTerminated" === this._terminateTask ? await this._terminate() : this._terminateTask = "notTerminated";
      }
      /** Returns a JSON-serializable representation of this `Firestore` instance. */
      toJSON() {
        return {
          app: this._app,
          databaseId: this._databaseId,
          settings: this._settings
        };
      }
      /**
       * Terminates all components used by this client. Subclasses can override
       * this method to clean up their own dependencies, but must also call this
       * method.
       *
       * Only ever called once.
       */
      _terminate() {
        return function __PRIVATE_removeComponents(e) {
          const t = we.get(e);
          t && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), we.delete(e), t.terminate());
        }(this), Promise.resolve();
      }
    };
    Query = class _Query {
      // This is the lite version of the Query class in the main SDK.
      /** @hideconstructor protected */
      constructor(e, t, n) {
        this.converter = t, this._query = n, /** The type of this Firestore reference. */
        this.type = "query", this.firestore = e;
      }
      withConverter(e) {
        return new _Query(this.firestore, e, this._query);
      }
    };
    DocumentReference = class _DocumentReference {
      /** @hideconstructor */
      constructor(e, t, n) {
        this.converter = t, this._key = n, /** The type of this Firestore reference. */
        this.type = "document", this.firestore = e;
      }
      get _path() {
        return this._key.path;
      }
      /**
       * The document's identifier within its collection.
       */
      get id() {
        return this._key.path.lastSegment();
      }
      /**
       * A string representing the path of the referenced document (relative
       * to the root of the database).
       */
      get path() {
        return this._key.path.canonicalString();
      }
      /**
       * The collection this `DocumentReference` belongs to.
       */
      get parent() {
        return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
      }
      withConverter(e) {
        return new _DocumentReference(this.firestore, e, this._key);
      }
    };
    CollectionReference = class _CollectionReference extends Query {
      /** @hideconstructor */
      constructor(e, t, n) {
        super(e, t, __PRIVATE_newQueryForPath(n)), this._path = n, /** The type of this Firestore reference. */
        this.type = "collection";
      }
      /** The collection's identifier. */
      get id() {
        return this._query.path.lastSegment();
      }
      /**
       * A string representing the path of the referenced collection (relative
       * to the root of the database).
       */
      get path() {
        return this._query.path.canonicalString();
      }
      /**
       * A reference to the containing `DocumentReference` if this is a
       * subcollection. If this isn't a subcollection, the reference is null.
       */
      get parent() {
        const e = this._path.popLast();
        return e.isEmpty() ? null : new DocumentReference(
          this.firestore,
          /* converter= */
          null,
          new DocumentKey(e)
        );
      }
      withConverter(e) {
        return new _CollectionReference(this.firestore, e, this._path);
      }
    };
    __PRIVATE_AsyncQueueImpl = class {
      constructor(e = Promise.resolve()) {
        this.Iu = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.du = false, // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Eu = [], // visible for testing
        this.Au = null, // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Ru = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
        this.Vu = false, // List of TimerIds to fast-forward delays for.
        this.mu = [], // Backoff timer used to schedule retries for retryable operations
        this.r_ = new __PRIVATE_ExponentialBackoff(
          this,
          "async_queue_retry"
          /* TimerId.AsyncQueueRetry */
        ), // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.fu = () => {
          const e2 = getDocument();
          e2 && __PRIVATE_logDebug("AsyncQueue", "Visibility state changed to " + e2.visibilityState), this.r_.Jo();
        }, this.gu = e;
        const t = getDocument();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.fu);
      }
      get isShuttingDown() {
        return this.du;
      }
      /**
       * Adds a new operation to the queue without waiting for it to complete (i.e.
       * we ignore the Promise result).
       */
      enqueueAndForget(e) {
        this.enqueue(e);
      }
      enqueueAndForgetEvenWhileRestricted(e) {
        this.pu(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.yu(e);
      }
      enterRestrictedMode(e) {
        if (!this.du) {
          this.du = true, this.Vu = e || false;
          const t = getDocument();
          t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.fu);
        }
      }
      enqueue(e) {
        if (this.pu(), this.du)
          return new Promise(() => {
          });
        const t = new __PRIVATE_Deferred();
        return this.yu(() => this.du && this.Vu ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)).then(() => t.promise);
      }
      enqueueRetryable(e) {
        this.enqueueAndForget(() => (this.Iu.push(e), this.wu()));
      }
      /**
       * Runs the next operation from the retryable queue. If the operation fails,
       * reschedules with backoff.
       */
      async wu() {
        if (0 !== this.Iu.length) {
          try {
            await this.Iu[0](), this.Iu.shift(), this.r_.reset();
          } catch (e) {
            if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
            __PRIVATE_logDebug("AsyncQueue", "Operation failed with retryable error: " + e);
          }
          this.Iu.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
          // This is necessary to run retryable operations that failed during
          // their initial attempt since we don't know whether they are already
          // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
          // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
          // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
          // call scheduled here.
          // Since `backoffAndRun()` cancels an existing backoff and schedules a
          // new backoff on every call, there is only ever a single additional
          // operation in the queue.
          this.r_.jo(() => this.wu());
        }
      }
      yu(e) {
        const t = this.gu.then(() => (this.Ru = true, e().catch((e2) => {
          this.Au = e2, this.Ru = false;
          const t2 = (
            /**
            * Chrome includes Error.message in Error.stack. Other browsers do not.
            * This returns expected output of message + stack when available.
            * @param error - Error or FirestoreError
            */
            function __PRIVATE_getMessageOrStack(e3) {
              let t3 = e3.message || "";
              e3.stack && (t3 = e3.stack.includes(e3.message) ? e3.stack : e3.message + "\n" + e3.stack);
              return t3;
            }(e2)
          );
          throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", t2), e2;
        }).then((e2) => (this.Ru = false, e2))));
        return this.gu = t, t;
      }
      enqueueAfterDelay(e, t, n) {
        this.pu(), // Fast-forward delays for timerIds that have been overridden.
        this.mu.indexOf(e) > -1 && (t = 0);
        const r = DelayedOperation.createAndSchedule(this, e, t, n, (e2) => this.Su(e2));
        return this.Eu.push(r), r;
      }
      pu() {
        this.Au && fail();
      }
      verifyOperationInProgress() {
      }
      /**
       * Waits until all currently queued tasks are finished executing. Delayed
       * operations are not run.
       */
      async bu() {
        let e;
        do {
          e = this.gu, await e;
        } while (e !== this.gu);
      }
      /**
       * For Tests: Determine if a delayed operation with a particular TimerId
       * exists.
       */
      Du(e) {
        for (const t of this.Eu) if (t.timerId === e) return true;
        return false;
      }
      /**
       * For Tests: Runs some or all delayed operations early.
       *
       * @param lastTimerId - Delayed operations up to and including this TimerId
       * will be drained. Pass TimerId.All to run all delayed operations.
       * @returns a Promise that resolves once all operations have been run.
       */
      vu(e) {
        return this.bu().then(() => {
          this.Eu.sort((e2, t) => e2.targetTimeMs - t.targetTimeMs);
          for (const t of this.Eu) if (t.skipDelay(), "all" !== e && t.timerId === e) break;
          return this.bu();
        });
      }
      /**
       * For Tests: Skip all subsequent delays for a timer id.
       */
      Cu(e) {
        this.mu.push(e);
      }
      /** Called once a DelayedOperation is run or canceled. */
      Su(e) {
        const t = this.Eu.indexOf(e);
        this.Eu.splice(t, 1);
      }
    };
    Firestore = class extends Firestore$1 {
      /** @hideconstructor */
      constructor(e, t, n, r) {
        super(e, t, n, r), /**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */
        this.type = "firestore", this._queue = new __PRIVATE_AsyncQueueImpl(), this._persistenceKey = (null == r ? void 0 : r.name) || "[DEFAULT]";
      }
      async _terminate() {
        if (this._firestoreClient) {
          const e = this._firestoreClient.terminate();
          this._queue = new __PRIVATE_AsyncQueueImpl(e), this._firestoreClient = void 0, await e;
        }
      }
    };
    De = new RegExp("[~\\*/\\[\\]]");
    !function __PRIVATE_registerFirestore(e, t = true) {
      !function __PRIVATE_setSDKVersion(e2) {
        S = e2;
      }(SDK_VERSION), _registerComponent(new Component("firestore", (e2, { instanceIdentifier: n, options: r }) => {
        const i = e2.getProvider("app").getImmediate(), s2 = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(e2.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(e2.getProvider("app-check-internal")), function __PRIVATE_databaseIdFromApp(e3, t2) {
          if (!Object.prototype.hasOwnProperty.apply(e3.options, ["projectId"])) throw new FirestoreError(D.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
          return new DatabaseId(e3.options.projectId, t2);
        }(i, n), i);
        return r = Object.assign({
          useFetchStreams: t
        }, r), s2._setSettings(r), s2;
      }, "PUBLIC").setMultipleInstances(true)), registerVersion(w, "4.7.6", e), // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
      registerVersion(w, "4.7.6", "esm2017");
    }();
  }
});

// node_modules/firebase/firestore/dist/esm/index.esm.js
var init_index_esm2 = __esm({
  "node_modules/firebase/firestore/dist/esm/index.esm.js"() {
    init_index_esm20175();
  }
});

// node_modules/zod/lib/index.mjs
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version3) {
  if ((version3 === "v4" || !version3) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version3 === "v6" || !version3) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base643 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base643));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if (!decoded.typ || !decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (_a) {
    return false;
  }
}
function isValidCidr(ip, version3) {
  if ((version3 === "v4" || !version3) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version3 === "v6" || !version3) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key2 in schema.shape) {
      const fieldSchema = schema.shape[key2];
      newShape[key2] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
function mergeValues(a, b2) {
  const aType = getParsedType(a);
  const bType = getParsedType(b2);
  if (a === b2) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a).filter((key2) => bKeys.indexOf(key2) !== -1);
    const newObj = { ...a, ...b2 };
    for (const key2 of sharedKeys) {
      const sharedValue = mergeValues(a[key2], b2[key2]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key2] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index5 = 0; index5 < a.length; index5++) {
      const itemA = a[index5];
      const itemB = b2[index5];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b2) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
function custom(check, params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
}
var util, objectUtil, ZodParsedType, getParsedType, ZodIssueCode, quotelessJson, ZodError, errorMap, overrideErrorMap, makeIssue, EMPTY_PATH, ParseStatus, INVALID, DIRTY2, OK, isAborted, isDirty, isValid, isAsync, errorUtil, _ZodEnum_cache, _ZodNativeEnum_cache, ParseInputLazyPath, handleResult, ZodType, cuidRegex, cuid2Regex, ulidRegex, uuidRegex, nanoidRegex, jwtRegex, durationRegex, emailRegex, _emojiRegex, emojiRegex, ipv4Regex, ipv4CidrRegex, ipv6Regex, ipv6CidrRegex, base64Regex, base64urlRegex, dateRegexSource, dateRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, BRAND, ZodBranded, ZodPipeline, ZodReadonly, late, ZodFirstPartyTypeKind, instanceOfType, stringType, numberType, nanType, bigIntType, booleanType, dateType, symbolType, undefinedType, nullType, anyType, unknownType, neverType, voidType, arrayType, objectType, strictObjectType, unionType, discriminatedUnionType, intersectionType, tupleType, recordType, mapType, setType, functionType, lazyType, literalType, enumType, nativeEnumType, promiseType, effectsType, optionalType, nullableType, preprocessType, pipelineType, ostring, onumber, oboolean, coerce, NEVER, z;
var init_lib = __esm({
  "node_modules/zod/lib/index.mjs"() {
    (function(util2) {
      util2.assertEqual = (val) => val;
      function assertIs(_arg) {
      }
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key2 in object) {
          if (Object.prototype.hasOwnProperty.call(object, key2)) {
            keys.push(key2);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
      function joinValues(array2, separator = " | ") {
        return array2.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util || (util = {}));
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (objectUtil = {}));
    ZodParsedType = util.arrayToEnum([
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
      "set"
    ]);
    getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType.undefined;
        case "string":
          return ZodParsedType.string;
        case "number":
          return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
          return ZodParsedType.boolean;
        case "function":
          return ZodParsedType.function;
        case "bigint":
          return ZodParsedType.bigint;
        case "symbol":
          return ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType.array;
          }
          if (data === null) {
            return ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType.date;
          }
          return ZodParsedType.object;
        default:
          return ZodParsedType.unknown;
      }
    };
    ZodIssueCode = util.arrayToEnum([
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
      "not_finite"
    ]);
    quotelessJson = (obj) => {
      const json2 = JSON.stringify(obj, null, 2);
      return json2.replace(/"([^"]+)":/g, "$1:");
    };
    ZodError = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error2) => {
          for (const issue of error2.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (issues) => {
      const error2 = new ZodError(issues);
      return error2;
    };
    errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode.invalid_type:
          if (issue.received === ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
          break;
        case ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util.assertNever(issue);
      }
      return { message };
    };
    overrideErrorMap = errorMap;
    makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    EMPTY_PATH = [];
    ParseStatus = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s2 of results) {
          if (s2.status === "aborted")
            return INVALID;
          if (s2.status === "dirty")
            status.dirty();
          arrayValue.push(s2.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key2 = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key: key2,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key: key2, value } = pair;
          if (key2.status === "aborted")
            return INVALID;
          if (value.status === "aborted")
            return INVALID;
          if (key2.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key2.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key2.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    INVALID = Object.freeze({
      status: "aborted"
    });
    DIRTY2 = (value) => ({ status: "dirty", value });
    OK = (value) => ({ status: "valid", value });
    isAborted = (x) => x.status === "aborted";
    isDirty = (x) => x.status === "dirty";
    isValid = (x) => x.status === "valid";
    isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
    (function(errorUtil2) {
      errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
    })(errorUtil || (errorUtil = {}));
    ParseInputLazyPath = class {
      constructor(parent, value, path, key2) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key2;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (this._key instanceof Array) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    handleResult = (ctx, result) => {
      if (isValid(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error2 = new ZodError(ctx.common.issues);
            this._error = error2;
            return this._error;
          }
        };
      }
    };
    ZodType = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        var _a;
        const ctx = {
          common: {
            issues: [],
            async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
          },
          path: (params === null || params === void 0 ? void 0 : params.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      "~validate"(data) {
        var _a, _b;
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            async: true
          },
          path: (params === null || params === void 0 ? void 0 : params.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    cuidRegex = /^c[^\s-]{8,}$/i;
    cuid2Regex = /^[0-9a-z]+$/;
    ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    nanoidRegex = /^[a-z0-9_-]{21}$/i;
    jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    dateRegex = new RegExp(`^${dateRegexSource}$`);
    ZodString = class _ZodString extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "email",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "emoji",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "uuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "nanoid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid2",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ulid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch (_a) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "regex",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "duration",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ip",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "jwt",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cidr",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode.invalid_string,
          ...errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil.errToObj(message)
        });
      }
      jwt(options2) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options2) });
      }
      ip(options2) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options2) });
      }
      cidr(options2) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options2) });
      }
      datetime(options2) {
        var _a, _b;
        if (typeof options2 === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options2
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof (options2 === null || options2 === void 0 ? void 0 : options2.precision) === "undefined" ? null : options2 === null || options2 === void 0 ? void 0 : options2.precision,
          offset: (_a = options2 === null || options2 === void 0 ? void 0 : options2.offset) !== null && _a !== void 0 ? _a : false,
          local: (_b = options2 === null || options2 === void 0 ? void 0 : options2.local) !== null && _b !== void 0 ? _b : false,
          ...errorUtil.errToObj(options2 === null || options2 === void 0 ? void 0 : options2.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options2) {
        if (typeof options2 === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options2
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof (options2 === null || options2 === void 0 ? void 0 : options2.precision) === "undefined" ? null : options2 === null || options2 === void 0 ? void 0 : options2.precision,
          ...errorUtil.errToObj(options2 === null || options2 === void 0 ? void 0 : options2.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil.errToObj(message)
        });
      }
      includes(value, options2) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options2 === null || options2 === void 0 ? void 0 : options2.position,
          ...errorUtil.errToObj(options2 === null || options2 === void 0 ? void 0 : options2.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodString.create = (params) => {
      var _a;
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
      });
    };
    ZodNumber = class _ZodNumber extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.number,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
      });
    };
    ZodBigInt = class _ZodBigInt extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch (_a) {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return INVALID;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodBigInt.create = (params) => {
      var _a;
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
      });
    };
    ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
      });
    };
    ZodDate = class _ZodDate extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.date,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        if (isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_date
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.null,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.never,
          received: ctx.parsedType
        });
        return INVALID;
      }
    };
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.void,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    ZodArray = class _ZodArray extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext(ctx, {
              code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    ZodObject = class _ZodObject extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return this._cached = { shape, keys };
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key2 in ctx.data) {
            if (!shapeKeys.includes(key2)) {
              extraKeys.push(key2);
            }
          }
        }
        const pairs = [];
        for (const key2 of shapeKeys) {
          const keyValidator = shape[key2];
          const value = ctx.data[key2];
          pairs.push({
            key: { status: "valid", value: key2 },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key2)),
            alwaysSet: key2 in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key2 of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key2 },
                value: { status: "valid", value: ctx.data[key2] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") ;
          else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key2 of extraKeys) {
            const value = ctx.data[key2];
            pairs.push({
              key: { status: "valid", value: key2 },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key2)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key2 in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key2 = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key: key2,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              var _a, _b, _c, _d;
              const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key2, schema) {
        return this.augment({ [key2]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index5) {
        return new _ZodObject({
          ...this._def,
          catchall: index5
        });
      }
      pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key2) => {
          if (mask[key2] && this.shape[key2]) {
            shape[key2] = this.shape[key2];
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key2) => {
          if (!mask[key2]) {
            shape[key2] = this.shape[key2];
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key2) => {
          const fieldSchema = this.shape[key2];
          if (mask && !mask[key2]) {
            newShape[key2] = fieldSchema;
          } else {
            newShape[key2] = fieldSchema.optional();
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key2) => {
          if (mask && !mask[key2]) {
            newShape[key2] = this.shape[key2];
          } else {
            const fieldSchema = this.shape[key2];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key2] = newField;
          }
        });
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    };
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options2 = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options2.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options2) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError(issues2));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (types, params) => {
      return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    getDiscriminator = (type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return util.objectValues(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else if (type instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
      } else {
        return [];
      }
    };
    ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
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
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options2, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options2) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options: options2,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted(parsedLeft) || isAborted(parsedRight)) {
            return INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_intersection_types
            });
            return INVALID;
          }
          if (isDirty(parsedLeft) || isDirty(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    ZodTuple = class _ZodTuple extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus.mergeArray(status, results);
          });
        } else {
          return ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    ZodRecord = class _ZodRecord extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key2 in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key2, ctx.path, key2)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key2], ctx.path, key2)),
            alwaysSet: key2 in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.map,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key2, value], index5) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key2, ctx.path, [index5, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index5, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key2 = await pair.key;
              const value = await pair.value;
              if (key2.status === "aborted" || value.status === "aborted") {
                return INVALID;
              }
              if (key2.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key2.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key2 = pair.key;
            const value = pair.value;
            if (key2.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key2.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key2.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    ZodSet = class _ZodSet extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.set,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    ZodFunction = class _ZodFunction extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.function,
            received: ctx.parsedType
          });
          return INVALID;
        }
        function makeArgsIssue(args, error2) {
          return makeIssue({
            data: args,
            path: ctx.path,
            errorMaps: [
              ctx.common.contextualErrorMap,
              ctx.schemaErrorMap,
              getErrorMap(),
              errorMap
            ].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_arguments,
              argumentsError: error2
            }
          });
        }
        function makeReturnsIssue(returns, error2) {
          return makeIssue({
            data: returns,
            path: ctx.path,
            errorMaps: [
              ctx.common.contextualErrorMap,
              ctx.schemaErrorMap,
              getErrorMap(),
              errorMap
            ].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_return_type,
              returnTypeError: error2
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me2 = this;
          return OK(async function(...args) {
            const error2 = new ZodError([]);
            const parsedArgs = await me2._def.args.parseAsync(args, params).catch((e) => {
              error2.addIssue(makeArgsIssue(args, e));
              throw error2;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me2._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error2.addIssue(makeReturnsIssue(result, e));
              throw error2;
            });
            return parsedReturns;
          });
        } else {
          const me2 = this;
          return OK(function(...args) {
            const parsedArgs = me2._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me2._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    ZodEnum = class _ZodEnum extends ZodType {
      constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
      }
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
          __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    _ZodEnum_cache = /* @__PURE__ */ new WeakMap();
    ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
      }
      _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
          __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    _ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.promise,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect2 = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect2.type === "preprocess") {
          const processed = effect2.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID;
              if (result.status === "dirty")
                return DIRTY2(result.value);
              if (status.value === "dirty")
                return DIRTY2(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY2(result.value);
            if (status.value === "dirty")
              return DIRTY2(result.value);
            return result;
          }
        }
        if (effect2.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect2.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect2.type === "transform") {
          if (ctx.common.async === false) {
            const base2 = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid(base2))
              return base2;
            const result = effect2.transform(base2.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base2) => {
              if (!isValid(base2))
                return base2;
              return Promise.resolve(effect2.transform(base2.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
            });
          }
        }
        util.assertNever(effect2);
      }
    };
    ZodEffects.create = (schema, effect2, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: effect2,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
          return OK(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
          return OK(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.nan,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    BRAND = Symbol("zod_brand");
    ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class _ZodPipeline extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY2(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b2) {
        return new _ZodPipeline({
          in: a,
          out: b2,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    late = {
      object: ZodObject.lazycreate
    };
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    instanceOfType = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params);
    stringType = ZodString.create;
    numberType = ZodNumber.create;
    nanType = ZodNaN.create;
    bigIntType = ZodBigInt.create;
    booleanType = ZodBoolean.create;
    dateType = ZodDate.create;
    symbolType = ZodSymbol.create;
    undefinedType = ZodUndefined.create;
    nullType = ZodNull.create;
    anyType = ZodAny.create;
    unknownType = ZodUnknown.create;
    neverType = ZodNever.create;
    voidType = ZodVoid.create;
    arrayType = ZodArray.create;
    objectType = ZodObject.create;
    strictObjectType = ZodObject.strictCreate;
    unionType = ZodUnion.create;
    discriminatedUnionType = ZodDiscriminatedUnion.create;
    intersectionType = ZodIntersection.create;
    tupleType = ZodTuple.create;
    recordType = ZodRecord.create;
    mapType = ZodMap.create;
    setType = ZodSet.create;
    functionType = ZodFunction.create;
    lazyType = ZodLazy.create;
    literalType = ZodLiteral.create;
    enumType = ZodEnum.create;
    nativeEnumType = ZodNativeEnum.create;
    promiseType = ZodPromise.create;
    effectsType = ZodEffects.create;
    optionalType = ZodOptional.create;
    nullableType = ZodNullable.create;
    preprocessType = ZodEffects.createWithPreprocess;
    pipelineType = ZodPipeline.create;
    ostring = () => stringType().optional();
    onumber = () => numberType().optional();
    oboolean = () => booleanType().optional();
    coerce = {
      string: (arg) => ZodString.create({ ...arg, coerce: true }),
      number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
      boolean: (arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      }),
      bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
      date: (arg) => ZodDate.create({ ...arg, coerce: true })
    };
    NEVER = INVALID;
    z = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      defaultErrorMap: errorMap,
      setErrorMap,
      getErrorMap,
      makeIssue,
      EMPTY_PATH,
      addIssueToContext,
      ParseStatus,
      INVALID,
      DIRTY: DIRTY2,
      OK,
      isAborted,
      isDirty,
      isValid,
      isAsync,
      get util() {
        return util;
      },
      get objectUtil() {
        return objectUtil;
      },
      ZodParsedType,
      getParsedType,
      ZodType,
      datetimeRegex,
      ZodString,
      ZodNumber,
      ZodBigInt,
      ZodBoolean,
      ZodDate,
      ZodSymbol,
      ZodUndefined,
      ZodNull,
      ZodAny,
      ZodUnknown,
      ZodNever,
      ZodVoid,
      ZodArray,
      ZodObject,
      ZodUnion,
      ZodDiscriminatedUnion,
      ZodIntersection,
      ZodTuple,
      ZodRecord,
      ZodMap,
      ZodSet,
      ZodFunction,
      ZodLazy,
      ZodLiteral,
      ZodEnum,
      ZodNativeEnum,
      ZodPromise,
      ZodEffects,
      ZodTransformer: ZodEffects,
      ZodOptional,
      ZodNullable,
      ZodDefault,
      ZodCatch,
      ZodNaN,
      BRAND,
      ZodBranded,
      ZodPipeline,
      ZodReadonly,
      custom,
      Schema: ZodType,
      ZodSchema: ZodType,
      late,
      get ZodFirstPartyTypeKind() {
        return ZodFirstPartyTypeKind;
      },
      coerce,
      any: anyType,
      array: arrayType,
      bigint: bigIntType,
      boolean: booleanType,
      date: dateType,
      discriminatedUnion: discriminatedUnionType,
      effect: effectsType,
      "enum": enumType,
      "function": functionType,
      "instanceof": instanceOfType,
      intersection: intersectionType,
      lazy: lazyType,
      literal: literalType,
      map: mapType,
      nan: nanType,
      nativeEnum: nativeEnumType,
      never: neverType,
      "null": nullType,
      nullable: nullableType,
      number: numberType,
      object: objectType,
      oboolean,
      onumber,
      optional: optionalType,
      ostring,
      pipeline: pipelineType,
      preprocess: preprocessType,
      promise: promiseType,
      record: recordType,
      set: setType,
      strictObject: strictObjectType,
      string: stringType,
      symbol: symbolType,
      transformer: effectsType,
      tuple: tupleType,
      "undefined": undefinedType,
      union: unionType,
      unknown: unknownType,
      "void": voidType,
      NEVER,
      ZodIssueCode,
      quotelessJson,
      ZodError
    });
  }
});

// .svelte-kit/output/server/chunks/firestore.js
var CardSchema, ScreenStartSchema, ScreenChooseSentenceSchema, ScreenWaitForSentenceSchema, ScreenChooseCardSchema, ScreenWaitForCardSchema, ScreenChooseBestCardSchema, ScreenWaitForBestCardSchema, ScreenEndSchema, ScreenSchema, PlayerProfileSchema, S2CRoomInfoSchema, S2CChangeStageSchema, S2CAddPlayerSchema, S2CRemovePlayerSchema, S2CChangeJudgeSchema, S2CJudgeSelectCardSchema, C2SJoinSchema, C2SStartSchema, C2SChooseSentenceSchema, C2SChooseCardSchema, C2SSelectCardSchema, C2SChooseBestCardSchema, firebaseConfig, app, db;
var init_firestore = __esm({
  ".svelte-kit/output/server/chunks/firestore.js"() {
    init_index_esm();
    init_index_esm2();
    init_lib();
    CardSchema = z.object({
      image: z.string(),
      text: z.string()
    });
    ScreenStartSchema = z.object({
      name: z.literal("start")
    });
    ScreenChooseSentenceSchema = z.object({
      name: z.literal("choose_sentence"),
      sentences: z.array(z.string())
    });
    ScreenWaitForSentenceSchema = z.object({
      name: z.literal("wait_for_sentence")
    });
    ScreenChooseCardSchema = z.object({
      name: z.literal("choose_card"),
      sentence: z.string(),
      cards: z.array(CardSchema)
    });
    ScreenWaitForCardSchema = z.object({
      name: z.literal("wait_for_card"),
      progress: z.string()
    });
    ScreenChooseBestCardSchema = z.object({
      name: z.literal("choose_best_card"),
      sentence: z.string(),
      cards: z.array(CardSchema)
    });
    ScreenWaitForBestCardSchema = z.object({
      name: z.literal("wait_for_best_card"),
      sentence: z.string(),
      cards: z.array(CardSchema),
      selected: z.number()
    });
    ScreenEndSchema = z.object({
      name: z.literal("end"),
      sentence: z.string(),
      bestCard: CardSchema,
      winner: z.string()
    });
    ScreenSchema = z.union([
      ScreenStartSchema,
      ScreenChooseSentenceSchema,
      ScreenWaitForSentenceSchema,
      ScreenChooseCardSchema,
      ScreenWaitForCardSchema,
      ScreenChooseBestCardSchema,
      ScreenWaitForBestCardSchema,
      ScreenEndSchema
    ]);
    PlayerProfileSchema = z.object({ name: z.string() });
    S2CRoomInfoSchema = z.object({
      action: z.literal("room_info"),
      id: z.string(),
      judge: z.string(),
      username: z.string(),
      screen: ScreenSchema,
      players: z.array(PlayerProfileSchema)
    });
    S2CChangeStageSchema = z.object({
      action: z.literal("show_screen"),
      screenData: ScreenSchema
    });
    S2CAddPlayerSchema = z.object({
      action: z.literal("add_player"),
      player: PlayerProfileSchema
    });
    S2CRemovePlayerSchema = z.object({
      action: z.literal("remove_player"),
      player: z.string()
    });
    S2CChangeJudgeSchema = z.object({
      action: z.literal("change_judge"),
      judge: z.string()
    });
    S2CJudgeSelectCardSchema = z.object({
      action: z.literal("judge_select_card"),
      cardIndex: z.number()
    });
    z.union([S2CRoomInfoSchema, S2CChangeStageSchema, S2CAddPlayerSchema, S2CRemovePlayerSchema, S2CChangeJudgeSchema, S2CJudgeSelectCardSchema]);
    C2SJoinSchema = z.object({
      action: z.literal("join"),
      name: z.string()
    });
    C2SStartSchema = z.object({
      action: z.literal("start")
    });
    C2SChooseSentenceSchema = z.object({
      action: z.literal("choose_sentence"),
      sentenceIndex: z.number()
    });
    C2SChooseCardSchema = z.object({
      action: z.literal("choose_card"),
      cardPoolIndex: z.number()
    });
    C2SSelectCardSchema = S2CJudgeSelectCardSchema;
    C2SChooseBestCardSchema = z.object({
      action: z.literal("choose_best_card"),
      cardIndex: z.number()
    });
    z.union([
      C2SJoinSchema,
      C2SStartSchema,
      C2SChooseSentenceSchema,
      C2SChooseCardSchema,
      C2SSelectCardSchema,
      C2SChooseBestCardSchema
    ]);
    z.object({
      type: z.union([
        z.literal("bad_request"),
        z.literal("room_not_found"),
        z.literal("name_taken"),
        z.literal("valid")
      ])
    });
    z.object({
      offer: z.string(),
      candidate: z.string()
    });
    z.object({
      roomId: z.string(),
      answer: z.string(),
      candidate: z.string()
    });
    firebaseConfig = {
      apiKey: "AIzaSyAozsrYtU92CXfVG7T9Xnkwb5zvm_VtrDk",
      authDomain: "mygo-kitchen.firebaseapp.com",
      projectId: "mygo-kitchen",
      storageBucket: "mygo-kitchen.firebasestorage.app",
      messagingSenderId: "947449925426",
      appId: "1:947449925426:web:7764e0504ddc85c042112b",
      measurementId: "G-33BZ03PQEX"
    };
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    collection(db, "offers");
    collection(db, "answers");
  }
});

// node_modules/simple-peer/simplepeer.min.js
var require_simplepeer_min = __commonJS({
  "node_modules/simple-peer/simplepeer.min.js"(exports, module) {
    (function(e) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        var t;
        t = "undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ? this : self : global : window, t.SimplePeer = e();
      }
    })(function() {
      var t = Math.floor, n = Math.abs, r = Math.pow;
      return (/* @__PURE__ */ function() {
        function d(s2, e, n2) {
          function t2(o, i) {
            if (!e[o]) {
              if (!s2[o]) {
                var l = "function" == typeof __require && __require;
                if (!i && l) return l(o, true);
                if (r2) return r2(o, true);
                var c = new Error("Cannot find module '" + o + "'");
                throw c.code = "MODULE_NOT_FOUND", c;
              }
              var a2 = e[o] = { exports: {} };
              s2[o][0].call(a2.exports, function(e2) {
                var r3 = s2[o][1][e2];
                return t2(r3 || e2);
              }, a2, a2.exports, d, s2, e, n2);
            }
            return e[o].exports;
          }
          for (var r2 = "function" == typeof __require && __require, a = 0; a < n2.length; a++) t2(n2[a]);
          return t2;
        }
        return d;
      }())({ 1: [function(e, t2, n2) {
        "use strict";
        function r2(e2) {
          var t3 = e2.length;
          if (0 < t3 % 4) throw new Error("Invalid string. Length must be a multiple of 4");
          var n3 = e2.indexOf("=");
          -1 === n3 && (n3 = t3);
          var r3 = n3 === t3 ? 0 : 4 - n3 % 4;
          return [n3, r3];
        }
        function a(e2, t3, n3) {
          return 3 * (t3 + n3) / 4 - n3;
        }
        function o(e2) {
          var t3, n3, o2 = r2(e2), d2 = o2[0], s3 = o2[1], l2 = new p(a(e2, d2, s3)), c2 = 0, f2 = 0 < s3 ? d2 - 4 : d2;
          for (n3 = 0; n3 < f2; n3 += 4) t3 = u[e2.charCodeAt(n3)] << 18 | u[e2.charCodeAt(n3 + 1)] << 12 | u[e2.charCodeAt(n3 + 2)] << 6 | u[e2.charCodeAt(n3 + 3)], l2[c2++] = 255 & t3 >> 16, l2[c2++] = 255 & t3 >> 8, l2[c2++] = 255 & t3;
          return 2 === s3 && (t3 = u[e2.charCodeAt(n3)] << 2 | u[e2.charCodeAt(n3 + 1)] >> 4, l2[c2++] = 255 & t3), 1 === s3 && (t3 = u[e2.charCodeAt(n3)] << 10 | u[e2.charCodeAt(n3 + 1)] << 4 | u[e2.charCodeAt(n3 + 2)] >> 2, l2[c2++] = 255 & t3 >> 8, l2[c2++] = 255 & t3), l2;
        }
        function d(e2) {
          return c[63 & e2 >> 18] + c[63 & e2 >> 12] + c[63 & e2 >> 6] + c[63 & e2];
        }
        function s2(e2, t3, n3) {
          for (var r3, a2 = [], o2 = t3; o2 < n3; o2 += 3) r3 = (16711680 & e2[o2] << 16) + (65280 & e2[o2 + 1] << 8) + (255 & e2[o2 + 2]), a2.push(d(r3));
          return a2.join("");
        }
        function l(e2) {
          for (var t3, n3 = e2.length, r3 = n3 % 3, a2 = [], o2 = 16383, d2 = 0, l2 = n3 - r3; d2 < l2; d2 += o2) a2.push(s2(e2, d2, d2 + o2 > l2 ? l2 : d2 + o2));
          return 1 === r3 ? (t3 = e2[n3 - 1], a2.push(c[t3 >> 2] + c[63 & t3 << 4] + "==")) : 2 === r3 && (t3 = (e2[n3 - 2] << 8) + e2[n3 - 1], a2.push(c[t3 >> 10] + c[63 & t3 >> 4] + c[63 & t3 << 2] + "=")), a2.join("");
        }
        n2.byteLength = function(e2) {
          var t3 = r2(e2), n3 = t3[0], a2 = t3[1];
          return 3 * (n3 + a2) / 4 - a2;
        }, n2.toByteArray = o, n2.fromByteArray = l;
        for (var c = [], u = [], p = "undefined" == typeof Uint8Array ? Array : Uint8Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", g = 0, _ = f.length; g < _; ++g) c[g] = f[g], u[f.charCodeAt(g)] = g;
        u[45] = 62, u[95] = 63;
      }, {}], 2: [function() {
      }, {}], 3: [function(e, t2, n2) {
        (function() {
          (function() {
            "use strict";
            var t3 = String.fromCharCode, o = Math.min;
            function d(e2) {
              if (2147483647 < e2) throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
              var t4 = new Uint8Array(e2);
              return t4.__proto__ = s2.prototype, t4;
            }
            function s2(e2, t4, n3) {
              if ("number" == typeof e2) {
                if ("string" == typeof t4) throw new TypeError('The "string" argument must be of type string. Received type number');
                return p(e2);
              }
              return l(e2, t4, n3);
            }
            function l(e2, t4, n3) {
              if ("string" == typeof e2) return f(e2, t4);
              if (ArrayBuffer.isView(e2)) return g(e2);
              if (null == e2) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
              if (K(e2, ArrayBuffer) || e2 && K(e2.buffer, ArrayBuffer)) return _(e2, t4, n3);
              if ("number" == typeof e2) throw new TypeError('The "value" argument must not be of type number. Received type number');
              var r2 = e2.valueOf && e2.valueOf();
              if (null != r2 && r2 !== e2) return s2.from(r2, t4, n3);
              var a = h(e2);
              if (a) return a;
              if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e2[Symbol.toPrimitive]) return s2.from(e2[Symbol.toPrimitive]("string"), t4, n3);
              throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
            }
            function c(e2) {
              if ("number" != typeof e2) throw new TypeError('"size" argument must be of type number');
              else if (0 > e2) throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
            }
            function u(e2, t4, n3) {
              return c(e2), 0 >= e2 ? d(e2) : void 0 === t4 ? d(e2) : "string" == typeof n3 ? d(e2).fill(t4, n3) : d(e2).fill(t4);
            }
            function p(e2) {
              return c(e2), d(0 > e2 ? 0 : 0 | m(e2));
            }
            function f(e2, t4) {
              if (("string" != typeof t4 || "" === t4) && (t4 = "utf8"), !s2.isEncoding(t4)) throw new TypeError("Unknown encoding: " + t4);
              var n3 = 0 | b2(e2, t4), r2 = d(n3), a = r2.write(e2, t4);
              return a !== n3 && (r2 = r2.slice(0, a)), r2;
            }
            function g(e2) {
              for (var t4 = 0 > e2.length ? 0 : 0 | m(e2.length), n3 = d(t4), r2 = 0; r2 < t4; r2 += 1) n3[r2] = 255 & e2[r2];
              return n3;
            }
            function _(e2, t4, n3) {
              if (0 > t4 || e2.byteLength < t4) throw new RangeError('"offset" is outside of buffer bounds');
              if (e2.byteLength < t4 + (n3 || 0)) throw new RangeError('"length" is outside of buffer bounds');
              var r2;
              return r2 = void 0 === t4 && void 0 === n3 ? new Uint8Array(e2) : void 0 === n3 ? new Uint8Array(e2, t4) : new Uint8Array(e2, t4, n3), r2.__proto__ = s2.prototype, r2;
            }
            function h(e2) {
              if (s2.isBuffer(e2)) {
                var t4 = 0 | m(e2.length), n3 = d(t4);
                return 0 === n3.length ? n3 : (e2.copy(n3, 0, 0, t4), n3);
              }
              return void 0 === e2.length ? "Buffer" === e2.type && Array.isArray(e2.data) ? g(e2.data) : void 0 : "number" != typeof e2.length || X2(e2.length) ? d(0) : g(e2);
            }
            function m(e2) {
              if (e2 >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
              return 0 | e2;
            }
            function b2(e2, t4) {
              if (s2.isBuffer(e2)) return e2.length;
              if (ArrayBuffer.isView(e2) || K(e2, ArrayBuffer)) return e2.byteLength;
              if ("string" != typeof e2) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e2);
              var n3 = e2.length, r2 = 2 < arguments.length && true === arguments[2];
              if (!r2 && 0 === n3) return 0;
              for (var a = false; ; ) switch (t4) {
                case "ascii":
                case "latin1":
                case "binary":
                  return n3;
                case "utf8":
                case "utf-8":
                  return H2(e2).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * n3;
                case "hex":
                  return n3 >>> 1;
                case "base64":
                  return z2(e2).length;
                default:
                  if (a) return r2 ? -1 : H2(e2).length;
                  t4 = ("" + t4).toLowerCase(), a = true;
              }
            }
            function y(e2, t4, n3) {
              var r2 = false;
              if ((void 0 === t4 || 0 > t4) && (t4 = 0), t4 > this.length) return "";
              if ((void 0 === n3 || n3 > this.length) && (n3 = this.length), 0 >= n3) return "";
              if (n3 >>>= 0, t4 >>>= 0, n3 <= t4) return "";
              for (e2 || (e2 = "utf8"); ; ) switch (e2) {
                case "hex":
                  return P(this, t4, n3);
                case "utf8":
                case "utf-8":
                  return x(this, t4, n3);
                case "ascii":
                  return D2(this, t4, n3);
                case "latin1":
                case "binary":
                  return I(this, t4, n3);
                case "base64":
                  return A(this, t4, n3);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return M(this, t4, n3);
                default:
                  if (r2) throw new TypeError("Unknown encoding: " + e2);
                  e2 = (e2 + "").toLowerCase(), r2 = true;
              }
            }
            function C(e2, t4, n3) {
              var r2 = e2[t4];
              e2[t4] = e2[n3], e2[n3] = r2;
            }
            function R(e2, t4, n3, r2, a) {
              if (0 === e2.length) return -1;
              if ("string" == typeof n3 ? (r2 = n3, n3 = 0) : 2147483647 < n3 ? n3 = 2147483647 : -2147483648 > n3 && (n3 = -2147483648), n3 = +n3, X2(n3) && (n3 = a ? 0 : e2.length - 1), 0 > n3 && (n3 = e2.length + n3), n3 >= e2.length) {
                if (a) return -1;
                n3 = e2.length - 1;
              } else if (0 > n3) if (a) n3 = 0;
              else return -1;
              if ("string" == typeof t4 && (t4 = s2.from(t4, r2)), s2.isBuffer(t4)) return 0 === t4.length ? -1 : E(e2, t4, n3, r2, a);
              if ("number" == typeof t4) return t4 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e2, t4, n3) : Uint8Array.prototype.lastIndexOf.call(e2, t4, n3) : E(e2, [t4], n3, r2, a);
              throw new TypeError("val must be string, number or Buffer");
            }
            function E(e2, t4, n3, r2, a) {
              function o2(e3, t5) {
                return 1 === d2 ? e3[t5] : e3.readUInt16BE(t5 * d2);
              }
              var d2 = 1, s3 = e2.length, l2 = t4.length;
              if (void 0 !== r2 && (r2 = (r2 + "").toLowerCase(), "ucs2" === r2 || "ucs-2" === r2 || "utf16le" === r2 || "utf-16le" === r2)) {
                if (2 > e2.length || 2 > t4.length) return -1;
                d2 = 2, s3 /= 2, l2 /= 2, n3 /= 2;
              }
              var c2;
              if (a) {
                var u2 = -1;
                for (c2 = n3; c2 < s3; c2++) if (o2(e2, c2) !== o2(t4, -1 === u2 ? 0 : c2 - u2)) -1 !== u2 && (c2 -= c2 - u2), u2 = -1;
                else if (-1 === u2 && (u2 = c2), c2 - u2 + 1 === l2) return u2 * d2;
              } else for (n3 + l2 > s3 && (n3 = s3 - l2), c2 = n3; 0 <= c2; c2--) {
                for (var p2 = true, f2 = 0; f2 < l2; f2++) if (o2(e2, c2 + f2) !== o2(t4, f2)) {
                  p2 = false;
                  break;
                }
                if (p2) return c2;
              }
              return -1;
            }
            function w2(e2, t4, n3, r2) {
              n3 = +n3 || 0;
              var a = e2.length - n3;
              r2 ? (r2 = +r2, r2 > a && (r2 = a)) : r2 = a;
              var o2 = t4.length;
              r2 > o2 / 2 && (r2 = o2 / 2);
              for (var d2, s3 = 0; s3 < r2; ++s3) {
                if (d2 = parseInt(t4.substr(2 * s3, 2), 16), X2(d2)) return s3;
                e2[n3 + s3] = d2;
              }
              return s3;
            }
            function S2(e2, t4, n3, r2) {
              return G(H2(t4, e2.length - n3), e2, n3, r2);
            }
            function T(e2, t4, n3, r2) {
              return G(Y2(t4), e2, n3, r2);
            }
            function v2(e2, t4, n3, r2) {
              return T(e2, t4, n3, r2);
            }
            function k(e2, t4, n3, r2) {
              return G(z2(t4), e2, n3, r2);
            }
            function L(e2, t4, n3, r2) {
              return G(V(t4, e2.length - n3), e2, n3, r2);
            }
            function A(e2, t4, n3) {
              return 0 === t4 && n3 === e2.length ? $.fromByteArray(e2) : $.fromByteArray(e2.slice(t4, n3));
            }
            function x(e2, t4, n3) {
              n3 = o(e2.length, n3);
              for (var r2 = [], a = t4; a < n3; ) {
                var d2 = e2[a], s3 = null, l2 = 239 < d2 ? 4 : 223 < d2 ? 3 : 191 < d2 ? 2 : 1;
                if (a + l2 <= n3) {
                  var c2, u2, p2, f2;
                  1 === l2 ? 128 > d2 && (s3 = d2) : 2 === l2 ? (c2 = e2[a + 1], 128 == (192 & c2) && (f2 = (31 & d2) << 6 | 63 & c2, 127 < f2 && (s3 = f2))) : 3 === l2 ? (c2 = e2[a + 1], u2 = e2[a + 2], 128 == (192 & c2) && 128 == (192 & u2) && (f2 = (15 & d2) << 12 | (63 & c2) << 6 | 63 & u2, 2047 < f2 && (55296 > f2 || 57343 < f2) && (s3 = f2))) : 4 === l2 ? (c2 = e2[a + 1], u2 = e2[a + 2], p2 = e2[a + 3], 128 == (192 & c2) && 128 == (192 & u2) && 128 == (192 & p2) && (f2 = (15 & d2) << 18 | (63 & c2) << 12 | (63 & u2) << 6 | 63 & p2, 65535 < f2 && 1114112 > f2 && (s3 = f2))) : void 0;
                }
                null === s3 ? (s3 = 65533, l2 = 1) : 65535 < s3 && (s3 -= 65536, r2.push(55296 | 1023 & s3 >>> 10), s3 = 56320 | 1023 & s3), r2.push(s3), a += l2;
              }
              return N(r2);
            }
            function N(e2) {
              var n3 = e2.length;
              if (n3 <= 4096) return t3.apply(String, e2);
              for (var r2 = "", a = 0; a < n3; ) r2 += t3.apply(String, e2.slice(a, a += 4096));
              return r2;
            }
            function D2(e2, n3, r2) {
              var a = "";
              r2 = o(e2.length, r2);
              for (var d2 = n3; d2 < r2; ++d2) a += t3(127 & e2[d2]);
              return a;
            }
            function I(e2, n3, r2) {
              var a = "";
              r2 = o(e2.length, r2);
              for (var d2 = n3; d2 < r2; ++d2) a += t3(e2[d2]);
              return a;
            }
            function P(e2, t4, n3) {
              var r2 = e2.length;
              (!t4 || 0 > t4) && (t4 = 0), (!n3 || 0 > n3 || n3 > r2) && (n3 = r2);
              for (var a = "", o2 = t4; o2 < n3; ++o2) a += W(e2[o2]);
              return a;
            }
            function M(e2, n3, r2) {
              for (var a = e2.slice(n3, r2), o2 = "", d2 = 0; d2 < a.length; d2 += 2) o2 += t3(a[d2] + 256 * a[d2 + 1]);
              return o2;
            }
            function O(e2, t4, n3) {
              if (0 != e2 % 1 || 0 > e2) throw new RangeError("offset is not uint");
              if (e2 + t4 > n3) throw new RangeError("Trying to access beyond buffer length");
            }
            function F(e2, t4, n3, r2, a, o2) {
              if (!s2.isBuffer(e2)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (t4 > a || t4 < o2) throw new RangeError('"value" argument is out of bounds');
              if (n3 + r2 > e2.length) throw new RangeError("Index out of range");
            }
            function B(e2, t4, n3, r2) {
              if (n3 + r2 > e2.length) throw new RangeError("Index out of range");
              if (0 > n3) throw new RangeError("Index out of range");
            }
            function U(e2, t4, n3, r2, a) {
              return t4 = +t4, n3 >>>= 0, a || B(e2, t4, n3, 4, 34028234663852886e22, -34028234663852886e22), J2.write(e2, t4, n3, r2, 23, 4), n3 + 4;
            }
            function j(e2, t4, n3, r2, a) {
              return t4 = +t4, n3 >>>= 0, a || B(e2, t4, n3, 8, 17976931348623157e292, -17976931348623157e292), J2.write(e2, t4, n3, r2, 52, 8), n3 + 8;
            }
            function q(e2) {
              if (e2 = e2.split("=")[0], e2 = e2.trim().replace(Q, ""), 2 > e2.length) return "";
              for (; 0 != e2.length % 4; ) e2 += "=";
              return e2;
            }
            function W(e2) {
              return 16 > e2 ? "0" + e2.toString(16) : e2.toString(16);
            }
            function H2(e2, t4) {
              t4 = t4 || 1 / 0;
              for (var n3, r2 = e2.length, a = null, o2 = [], d2 = 0; d2 < r2; ++d2) {
                if (n3 = e2.charCodeAt(d2), 55295 < n3 && 57344 > n3) {
                  if (!a) {
                    if (56319 < n3) {
                      -1 < (t4 -= 3) && o2.push(239, 191, 189);
                      continue;
                    } else if (d2 + 1 === r2) {
                      -1 < (t4 -= 3) && o2.push(239, 191, 189);
                      continue;
                    }
                    a = n3;
                    continue;
                  }
                  if (56320 > n3) {
                    -1 < (t4 -= 3) && o2.push(239, 191, 189), a = n3;
                    continue;
                  }
                  n3 = (a - 55296 << 10 | n3 - 56320) + 65536;
                } else a && -1 < (t4 -= 3) && o2.push(239, 191, 189);
                if (a = null, 128 > n3) {
                  if (0 > (t4 -= 1)) break;
                  o2.push(n3);
                } else if (2048 > n3) {
                  if (0 > (t4 -= 2)) break;
                  o2.push(192 | n3 >> 6, 128 | 63 & n3);
                } else if (65536 > n3) {
                  if (0 > (t4 -= 3)) break;
                  o2.push(224 | n3 >> 12, 128 | 63 & n3 >> 6, 128 | 63 & n3);
                } else if (1114112 > n3) {
                  if (0 > (t4 -= 4)) break;
                  o2.push(240 | n3 >> 18, 128 | 63 & n3 >> 12, 128 | 63 & n3 >> 6, 128 | 63 & n3);
                } else throw new Error("Invalid code point");
              }
              return o2;
            }
            function Y2(e2) {
              for (var t4 = [], n3 = 0; n3 < e2.length; ++n3) t4.push(255 & e2.charCodeAt(n3));
              return t4;
            }
            function V(e2, t4) {
              for (var n3, r2, a, o2 = [], d2 = 0; d2 < e2.length && !(0 > (t4 -= 2)); ++d2) n3 = e2.charCodeAt(d2), r2 = n3 >> 8, a = n3 % 256, o2.push(a), o2.push(r2);
              return o2;
            }
            function z2(e2) {
              return $.toByteArray(q(e2));
            }
            function G(e2, t4, n3, r2) {
              for (var a = 0; a < r2 && !(a + n3 >= t4.length || a >= e2.length); ++a) t4[a + n3] = e2[a];
              return a;
            }
            function K(e2, t4) {
              return e2 instanceof t4 || null != e2 && null != e2.constructor && null != e2.constructor.name && e2.constructor.name === t4.name;
            }
            function X2(e2) {
              return e2 !== e2;
            }
            var $ = e("base64-js"), J2 = e("ieee754");
            n2.Buffer = s2, n2.SlowBuffer = function(e2) {
              return +e2 != e2 && (e2 = 0), s2.alloc(+e2);
            }, n2.INSPECT_MAX_BYTES = 50;
            n2.kMaxLength = 2147483647, s2.TYPED_ARRAY_SUPPORT = function() {
              try {
                var e2 = new Uint8Array(1);
                return e2.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                  return 42;
                } }, 42 === e2.foo();
              } catch (t4) {
                return false;
              }
            }(), s2.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s2.prototype, "parent", { enumerable: true, get: function() {
              return s2.isBuffer(this) ? this.buffer : void 0;
            } }), Object.defineProperty(s2.prototype, "offset", { enumerable: true, get: function() {
              return s2.isBuffer(this) ? this.byteOffset : void 0;
            } }), "undefined" != typeof Symbol && null != Symbol.species && s2[Symbol.species] === s2 && Object.defineProperty(s2, Symbol.species, { value: null, configurable: true, enumerable: false, writable: false }), s2.poolSize = 8192, s2.from = function(e2, t4, n3) {
              return l(e2, t4, n3);
            }, s2.prototype.__proto__ = Uint8Array.prototype, s2.__proto__ = Uint8Array, s2.alloc = function(e2, t4, n3) {
              return u(e2, t4, n3);
            }, s2.allocUnsafe = function(e2) {
              return p(e2);
            }, s2.allocUnsafeSlow = function(e2) {
              return p(e2);
            }, s2.isBuffer = function(e2) {
              return null != e2 && true === e2._isBuffer && e2 !== s2.prototype;
            }, s2.compare = function(e2, t4) {
              if (K(e2, Uint8Array) && (e2 = s2.from(e2, e2.offset, e2.byteLength)), K(t4, Uint8Array) && (t4 = s2.from(t4, t4.offset, t4.byteLength)), !s2.isBuffer(e2) || !s2.isBuffer(t4)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (e2 === t4) return 0;
              for (var n3 = e2.length, r2 = t4.length, d2 = 0, l2 = o(n3, r2); d2 < l2; ++d2) if (e2[d2] !== t4[d2]) {
                n3 = e2[d2], r2 = t4[d2];
                break;
              }
              return n3 < r2 ? -1 : r2 < n3 ? 1 : 0;
            }, s2.isEncoding = function(e2) {
              switch ((e2 + "").toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            }, s2.concat = function(e2, t4) {
              if (!Array.isArray(e2)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === e2.length) return s2.alloc(0);
              var n3;
              if (t4 === void 0) for (t4 = 0, n3 = 0; n3 < e2.length; ++n3) t4 += e2[n3].length;
              var r2 = s2.allocUnsafe(t4), a = 0;
              for (n3 = 0; n3 < e2.length; ++n3) {
                var o2 = e2[n3];
                if (K(o2, Uint8Array) && (o2 = s2.from(o2)), !s2.isBuffer(o2)) throw new TypeError('"list" argument must be an Array of Buffers');
                o2.copy(r2, a), a += o2.length;
              }
              return r2;
            }, s2.byteLength = b2, s2.prototype._isBuffer = true, s2.prototype.swap16 = function() {
              var e2 = this.length;
              if (0 != e2 % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var t4 = 0; t4 < e2; t4 += 2) C(this, t4, t4 + 1);
              return this;
            }, s2.prototype.swap32 = function() {
              var e2 = this.length;
              if (0 != e2 % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var t4 = 0; t4 < e2; t4 += 4) C(this, t4, t4 + 3), C(this, t4 + 1, t4 + 2);
              return this;
            }, s2.prototype.swap64 = function() {
              var e2 = this.length;
              if (0 != e2 % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var t4 = 0; t4 < e2; t4 += 8) C(this, t4, t4 + 7), C(this, t4 + 1, t4 + 6), C(this, t4 + 2, t4 + 5), C(this, t4 + 3, t4 + 4);
              return this;
            }, s2.prototype.toString = function() {
              var e2 = this.length;
              return 0 === e2 ? "" : 0 === arguments.length ? x(this, 0, e2) : y.apply(this, arguments);
            }, s2.prototype.toLocaleString = s2.prototype.toString, s2.prototype.equals = function(e2) {
              if (!s2.isBuffer(e2)) throw new TypeError("Argument must be a Buffer");
              return this === e2 || 0 === s2.compare(this, e2);
            }, s2.prototype.inspect = function() {
              var e2 = "", t4 = n2.INSPECT_MAX_BYTES;
              return e2 = this.toString("hex", 0, t4).replace(/(.{2})/g, "$1 ").trim(), this.length > t4 && (e2 += " ... "), "<Buffer " + e2 + ">";
            }, s2.prototype.compare = function(e2, t4, n3, r2, a) {
              if (K(e2, Uint8Array) && (e2 = s2.from(e2, e2.offset, e2.byteLength)), !s2.isBuffer(e2)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e2);
              if (void 0 === t4 && (t4 = 0), void 0 === n3 && (n3 = e2 ? e2.length : 0), void 0 === r2 && (r2 = 0), void 0 === a && (a = this.length), 0 > t4 || n3 > e2.length || 0 > r2 || a > this.length) throw new RangeError("out of range index");
              if (r2 >= a && t4 >= n3) return 0;
              if (r2 >= a) return -1;
              if (t4 >= n3) return 1;
              if (t4 >>>= 0, n3 >>>= 0, r2 >>>= 0, a >>>= 0, this === e2) return 0;
              for (var d2 = a - r2, l2 = n3 - t4, c2 = o(d2, l2), u2 = this.slice(r2, a), p2 = e2.slice(t4, n3), f2 = 0; f2 < c2; ++f2) if (u2[f2] !== p2[f2]) {
                d2 = u2[f2], l2 = p2[f2];
                break;
              }
              return d2 < l2 ? -1 : l2 < d2 ? 1 : 0;
            }, s2.prototype.includes = function(e2, t4, n3) {
              return -1 !== this.indexOf(e2, t4, n3);
            }, s2.prototype.indexOf = function(e2, t4, n3) {
              return R(this, e2, t4, n3, true);
            }, s2.prototype.lastIndexOf = function(e2, t4, n3) {
              return R(this, e2, t4, n3, false);
            }, s2.prototype.write = function(e2, t4, n3, r2) {
              if (void 0 === t4) r2 = "utf8", n3 = this.length, t4 = 0;
              else if (void 0 === n3 && "string" == typeof t4) r2 = t4, n3 = this.length, t4 = 0;
              else if (isFinite(t4)) t4 >>>= 0, isFinite(n3) ? (n3 >>>= 0, void 0 === r2 && (r2 = "utf8")) : (r2 = n3, n3 = void 0);
              else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              var a = this.length - t4;
              if ((void 0 === n3 || n3 > a) && (n3 = a), 0 < e2.length && (0 > n3 || 0 > t4) || t4 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
              r2 || (r2 = "utf8");
              for (var o2 = false; ; ) switch (r2) {
                case "hex":
                  return w2(this, e2, t4, n3);
                case "utf8":
                case "utf-8":
                  return S2(this, e2, t4, n3);
                case "ascii":
                  return T(this, e2, t4, n3);
                case "latin1":
                case "binary":
                  return v2(this, e2, t4, n3);
                case "base64":
                  return k(this, e2, t4, n3);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return L(this, e2, t4, n3);
                default:
                  if (o2) throw new TypeError("Unknown encoding: " + r2);
                  r2 = ("" + r2).toLowerCase(), o2 = true;
              }
            }, s2.prototype.toJSON = function() {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            };
            s2.prototype.slice = function(e2, t4) {
              var n3 = this.length;
              e2 = ~~e2, t4 = t4 === void 0 ? n3 : ~~t4, 0 > e2 ? (e2 += n3, 0 > e2 && (e2 = 0)) : e2 > n3 && (e2 = n3), 0 > t4 ? (t4 += n3, 0 > t4 && (t4 = 0)) : t4 > n3 && (t4 = n3), t4 < e2 && (t4 = e2);
              var r2 = this.subarray(e2, t4);
              return r2.__proto__ = s2.prototype, r2;
            }, s2.prototype.readUIntLE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var r2 = this[e2], a = 1, o2 = 0; ++o2 < t4 && (a *= 256); ) r2 += this[e2 + o2] * a;
              return r2;
            }, s2.prototype.readUIntBE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var r2 = this[e2 + --t4], a = 1; 0 < t4 && (a *= 256); ) r2 += this[e2 + --t4] * a;
              return r2;
            }, s2.prototype.readUInt8 = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 1, this.length), this[e2];
            }, s2.prototype.readUInt16LE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 2, this.length), this[e2] | this[e2 + 1] << 8;
            }, s2.prototype.readUInt16BE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 2, this.length), this[e2] << 8 | this[e2 + 1];
            }, s2.prototype.readUInt32LE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), (this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16) + 16777216 * this[e2 + 3];
            }, s2.prototype.readUInt32BE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), 16777216 * this[e2] + (this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3]);
            }, s2.prototype.readIntLE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var a = this[e2], o2 = 1, d2 = 0; ++d2 < t4 && (o2 *= 256); ) a += this[e2 + d2] * o2;
              return o2 *= 128, a >= o2 && (a -= r(2, 8 * t4)), a;
            }, s2.prototype.readIntBE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var a = t4, o2 = 1, d2 = this[e2 + --a]; 0 < a && (o2 *= 256); ) d2 += this[e2 + --a] * o2;
              return o2 *= 128, d2 >= o2 && (d2 -= r(2, 8 * t4)), d2;
            }, s2.prototype.readInt8 = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 1, this.length), 128 & this[e2] ? -1 * (255 - this[e2] + 1) : this[e2];
            }, s2.prototype.readInt16LE = function(e2, t4) {
              e2 >>>= 0, t4 || O(e2, 2, this.length);
              var n3 = this[e2] | this[e2 + 1] << 8;
              return 32768 & n3 ? 4294901760 | n3 : n3;
            }, s2.prototype.readInt16BE = function(e2, t4) {
              e2 >>>= 0, t4 || O(e2, 2, this.length);
              var n3 = this[e2 + 1] | this[e2] << 8;
              return 32768 & n3 ? 4294901760 | n3 : n3;
            }, s2.prototype.readInt32LE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16 | this[e2 + 3] << 24;
            }, s2.prototype.readInt32BE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), this[e2] << 24 | this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3];
            }, s2.prototype.readFloatLE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), J2.read(this, e2, true, 23, 4);
            }, s2.prototype.readFloatBE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), J2.read(this, e2, false, 23, 4);
            }, s2.prototype.readDoubleLE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 8, this.length), J2.read(this, e2, true, 52, 8);
            }, s2.prototype.readDoubleBE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 8, this.length), J2.read(this, e2, false, 52, 8);
            }, s2.prototype.writeUIntLE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, n3 >>>= 0, !a) {
                var o2 = r(2, 8 * n3) - 1;
                F(this, e2, t4, n3, o2, 0);
              }
              var d2 = 1, s3 = 0;
              for (this[t4] = 255 & e2; ++s3 < n3 && (d2 *= 256); ) this[t4 + s3] = 255 & e2 / d2;
              return t4 + n3;
            }, s2.prototype.writeUIntBE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, n3 >>>= 0, !a) {
                var o2 = r(2, 8 * n3) - 1;
                F(this, e2, t4, n3, o2, 0);
              }
              var d2 = n3 - 1, s3 = 1;
              for (this[t4 + d2] = 255 & e2; 0 <= --d2 && (s3 *= 256); ) this[t4 + d2] = 255 & e2 / s3;
              return t4 + n3;
            }, s2.prototype.writeUInt8 = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 1, 255, 0), this[t4] = 255 & e2, t4 + 1;
            }, s2.prototype.writeUInt16LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 65535, 0), this[t4] = 255 & e2, this[t4 + 1] = e2 >>> 8, t4 + 2;
            }, s2.prototype.writeUInt16BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 65535, 0), this[t4] = e2 >>> 8, this[t4 + 1] = 255 & e2, t4 + 2;
            }, s2.prototype.writeUInt32LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 4294967295, 0), this[t4 + 3] = e2 >>> 24, this[t4 + 2] = e2 >>> 16, this[t4 + 1] = e2 >>> 8, this[t4] = 255 & e2, t4 + 4;
            }, s2.prototype.writeUInt32BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 4294967295, 0), this[t4] = e2 >>> 24, this[t4 + 1] = e2 >>> 16, this[t4 + 2] = e2 >>> 8, this[t4 + 3] = 255 & e2, t4 + 4;
            }, s2.prototype.writeIntLE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, !a) {
                var o2 = r(2, 8 * n3 - 1);
                F(this, e2, t4, n3, o2 - 1, -o2);
              }
              var d2 = 0, s3 = 1, l2 = 0;
              for (this[t4] = 255 & e2; ++d2 < n3 && (s3 *= 256); ) 0 > e2 && 0 === l2 && 0 !== this[t4 + d2 - 1] && (l2 = 1), this[t4 + d2] = 255 & (e2 / s3 >> 0) - l2;
              return t4 + n3;
            }, s2.prototype.writeIntBE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, !a) {
                var o2 = r(2, 8 * n3 - 1);
                F(this, e2, t4, n3, o2 - 1, -o2);
              }
              var d2 = n3 - 1, s3 = 1, l2 = 0;
              for (this[t4 + d2] = 255 & e2; 0 <= --d2 && (s3 *= 256); ) 0 > e2 && 0 === l2 && 0 !== this[t4 + d2 + 1] && (l2 = 1), this[t4 + d2] = 255 & (e2 / s3 >> 0) - l2;
              return t4 + n3;
            }, s2.prototype.writeInt8 = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 1, 127, -128), 0 > e2 && (e2 = 255 + e2 + 1), this[t4] = 255 & e2, t4 + 1;
            }, s2.prototype.writeInt16LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 32767, -32768), this[t4] = 255 & e2, this[t4 + 1] = e2 >>> 8, t4 + 2;
            }, s2.prototype.writeInt16BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 32767, -32768), this[t4] = e2 >>> 8, this[t4 + 1] = 255 & e2, t4 + 2;
            }, s2.prototype.writeInt32LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 2147483647, -2147483648), this[t4] = 255 & e2, this[t4 + 1] = e2 >>> 8, this[t4 + 2] = e2 >>> 16, this[t4 + 3] = e2 >>> 24, t4 + 4;
            }, s2.prototype.writeInt32BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 2147483647, -2147483648), 0 > e2 && (e2 = 4294967295 + e2 + 1), this[t4] = e2 >>> 24, this[t4 + 1] = e2 >>> 16, this[t4 + 2] = e2 >>> 8, this[t4 + 3] = 255 & e2, t4 + 4;
            }, s2.prototype.writeFloatLE = function(e2, t4, n3) {
              return U(this, e2, t4, true, n3);
            }, s2.prototype.writeFloatBE = function(e2, t4, n3) {
              return U(this, e2, t4, false, n3);
            }, s2.prototype.writeDoubleLE = function(e2, t4, n3) {
              return j(this, e2, t4, true, n3);
            }, s2.prototype.writeDoubleBE = function(e2, t4, n3) {
              return j(this, e2, t4, false, n3);
            }, s2.prototype.copy = function(e2, t4, n3, r2) {
              if (!s2.isBuffer(e2)) throw new TypeError("argument should be a Buffer");
              if (n3 || (n3 = 0), r2 || 0 === r2 || (r2 = this.length), t4 >= e2.length && (t4 = e2.length), t4 || (t4 = 0), 0 < r2 && r2 < n3 && (r2 = n3), r2 === n3) return 0;
              if (0 === e2.length || 0 === this.length) return 0;
              if (0 > t4) throw new RangeError("targetStart out of bounds");
              if (0 > n3 || n3 >= this.length) throw new RangeError("Index out of range");
              if (0 > r2) throw new RangeError("sourceEnd out of bounds");
              r2 > this.length && (r2 = this.length), e2.length - t4 < r2 - n3 && (r2 = e2.length - t4 + n3);
              var a = r2 - n3;
              if (this === e2 && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t4, n3, r2);
              else if (this === e2 && n3 < t4 && t4 < r2) for (var o2 = a - 1; 0 <= o2; --o2) e2[o2 + t4] = this[o2 + n3];
              else Uint8Array.prototype.set.call(e2, this.subarray(n3, r2), t4);
              return a;
            }, s2.prototype.fill = function(e2, t4, n3, r2) {
              if ("string" == typeof e2) {
                if ("string" == typeof t4 ? (r2 = t4, t4 = 0, n3 = this.length) : "string" == typeof n3 && (r2 = n3, n3 = this.length), void 0 !== r2 && "string" != typeof r2) throw new TypeError("encoding must be a string");
                if ("string" == typeof r2 && !s2.isEncoding(r2)) throw new TypeError("Unknown encoding: " + r2);
                if (1 === e2.length) {
                  var a = e2.charCodeAt(0);
                  ("utf8" === r2 && 128 > a || "latin1" === r2) && (e2 = a);
                }
              } else "number" == typeof e2 && (e2 &= 255);
              if (0 > t4 || this.length < t4 || this.length < n3) throw new RangeError("Out of range index");
              if (n3 <= t4) return this;
              t4 >>>= 0, n3 = n3 === void 0 ? this.length : n3 >>> 0, e2 || (e2 = 0);
              var o2;
              if ("number" == typeof e2) for (o2 = t4; o2 < n3; ++o2) this[o2] = e2;
              else {
                var d2 = s2.isBuffer(e2) ? e2 : s2.from(e2, r2), l2 = d2.length;
                if (0 === l2) throw new TypeError('The value "' + e2 + '" is invalid for argument "value"');
                for (o2 = 0; o2 < n3 - t4; ++o2) this[o2 + t4] = d2[o2 % l2];
              }
              return this;
            };
            var Q = /[^+/0-9A-Za-z-_]/g;
          }).call(this);
        }).call(this, e("buffer").Buffer);
      }, { "base64-js": 1, buffer: 3, ieee754: 9 }], 4: [function(e, t2, n2) {
        (function(a) {
          (function() {
            function r2() {
              let e2;
              try {
                e2 = n2.storage.getItem("debug");
              } catch (e3) {
              }
              return !e2 && "undefined" != typeof a && "env" in a && (e2 = a.env.DEBUG), e2;
            }
            n2.formatArgs = function(e2) {
              if (e2[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e2[0] + (this.useColors ? "%c " : " ") + "+" + t2.exports.humanize(this.diff), !this.useColors) return;
              const n3 = "color: " + this.color;
              e2.splice(1, 0, n3, "color: inherit");
              let r3 = 0, a2 = 0;
              e2[0].replace(/%[a-zA-Z%]/g, (e3) => {
                "%%" === e3 || (r3++, "%c" === e3 && (a2 = r3));
              }), e2.splice(a2, 0, n3);
            }, n2.save = function(e2) {
              try {
                e2 ? n2.storage.setItem("debug", e2) : n2.storage.removeItem("debug");
              } catch (e3) {
              }
            }, n2.load = r2, n2.useColors = function() {
              return !!("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
            }, n2.storage = function() {
              try {
                return localStorage;
              } catch (e2) {
              }
            }(), n2.destroy = /* @__PURE__ */ (() => {
              let e2 = false;
              return () => {
                e2 || (e2 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
              };
            })(), n2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], n2.log = console.debug || console.log || (() => {
            }), t2.exports = e("./common")(n2);
            const { formatters: o } = t2.exports;
            o.j = function(e2) {
              try {
                return JSON.stringify(e2);
              } catch (e3) {
                return "[UnexpectedJSONParseError]: " + e3.message;
              }
            };
          }).call(this);
        }).call(this, e("_process"));
      }, { "./common": 5, _process: 12 }], 5: [function(e, t2) {
        t2.exports = function(t3) {
          function r2(e2) {
            function t4(...e3) {
              if (!t4.enabled) return;
              const a2 = t4, o3 = +/* @__PURE__ */ new Date(), i = o3 - (n2 || o3);
              a2.diff = i, a2.prev = n2, a2.curr = o3, n2 = o3, e3[0] = r2.coerce(e3[0]), "string" != typeof e3[0] && e3.unshift("%O");
              let d = 0;
              e3[0] = e3[0].replace(/%([a-zA-Z%])/g, (t5, n3) => {
                if ("%%" === t5) return "%";
                d++;
                const o4 = r2.formatters[n3];
                if ("function" == typeof o4) {
                  const n4 = e3[d];
                  t5 = o4.call(a2, n4), e3.splice(d, 1), d--;
                }
                return t5;
              }), r2.formatArgs.call(a2, e3);
              const s2 = a2.log || r2.log;
              s2.apply(a2, e3);
            }
            let n2, o2 = null;
            return t4.namespace = e2, t4.useColors = r2.useColors(), t4.color = r2.selectColor(e2), t4.extend = a, t4.destroy = r2.destroy, Object.defineProperty(t4, "enabled", { enumerable: true, configurable: false, get: () => null === o2 ? r2.enabled(e2) : o2, set: (e3) => {
              o2 = e3;
            } }), "function" == typeof r2.init && r2.init(t4), t4;
          }
          function a(e2, t4) {
            const n2 = r2(this.namespace + ("undefined" == typeof t4 ? ":" : t4) + e2);
            return n2.log = this.log, n2;
          }
          function o(e2) {
            return e2.toString().substring(2, e2.toString().length - 2).replace(/\.\*\?$/, "*");
          }
          return r2.debug = r2, r2.default = r2, r2.coerce = function(e2) {
            return e2 instanceof Error ? e2.stack || e2.message : e2;
          }, r2.disable = function() {
            const e2 = [...r2.names.map(o), ...r2.skips.map(o).map((e3) => "-" + e3)].join(",");
            return r2.enable(""), e2;
          }, r2.enable = function(e2) {
            r2.save(e2), r2.names = [], r2.skips = [];
            let t4;
            const n2 = ("string" == typeof e2 ? e2 : "").split(/[\s,]+/), a2 = n2.length;
            for (t4 = 0; t4 < a2; t4++) n2[t4] && (e2 = n2[t4].replace(/\*/g, ".*?"), "-" === e2[0] ? r2.skips.push(new RegExp("^" + e2.substr(1) + "$")) : r2.names.push(new RegExp("^" + e2 + "$")));
          }, r2.enabled = function(e2) {
            if ("*" === e2[e2.length - 1]) return true;
            let t4, n2;
            for (t4 = 0, n2 = r2.skips.length; t4 < n2; t4++) if (r2.skips[t4].test(e2)) return false;
            for (t4 = 0, n2 = r2.names.length; t4 < n2; t4++) if (r2.names[t4].test(e2)) return true;
            return false;
          }, r2.humanize = e("ms"), r2.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }, Object.keys(t3).forEach((e2) => {
            r2[e2] = t3[e2];
          }), r2.names = [], r2.skips = [], r2.formatters = {}, r2.selectColor = function(e2) {
            let t4 = 0;
            for (let n2 = 0; n2 < e2.length; n2++) t4 = (t4 << 5) - t4 + e2.charCodeAt(n2), t4 |= 0;
            return r2.colors[n(t4) % r2.colors.length];
          }, r2.enable(r2.load()), r2;
        };
      }, { ms: 11 }], 6: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          for (const n3 in t3) Object.defineProperty(e2, n3, { value: t3[n3], enumerable: true, configurable: true });
          return e2;
        }
        t2.exports = function(e2, t3, r2) {
          if (!e2 || "string" == typeof e2) throw new TypeError("Please pass an Error to err-code");
          r2 || (r2 = {}), "object" == typeof t3 && (r2 = t3, t3 = ""), t3 && (r2.code = t3);
          try {
            return n2(e2, r2);
          } catch (t4) {
            r2.message = e2.message, r2.stack = e2.stack;
            const a = function() {
            };
            a.prototype = Object.create(Object.getPrototypeOf(e2));
            const o = n2(new a(), r2);
            return o;
          }
        };
      }, {}], 7: [function(e, t2) {
        "use strict";
        function n2(e2) {
          console && console.warn && console.warn(e2);
        }
        function r2() {
          r2.init.call(this);
        }
        function a(e2) {
          if ("function" != typeof e2) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e2);
        }
        function o(e2) {
          return void 0 === e2._maxListeners ? r2.defaultMaxListeners : e2._maxListeners;
        }
        function i(e2, t3, r3, i2) {
          var d2, s3, l2;
          if (a(r3), s3 = e2._events, void 0 === s3 ? (s3 = e2._events = /* @__PURE__ */ Object.create(null), e2._eventsCount = 0) : (void 0 !== s3.newListener && (e2.emit("newListener", t3, r3.listener ? r3.listener : r3), s3 = e2._events), l2 = s3[t3]), void 0 === l2) l2 = s3[t3] = r3, ++e2._eventsCount;
          else if ("function" == typeof l2 ? l2 = s3[t3] = i2 ? [r3, l2] : [l2, r3] : i2 ? l2.unshift(r3) : l2.push(r3), d2 = o(e2), 0 < d2 && l2.length > d2 && !l2.warned) {
            l2.warned = true;
            var c2 = new Error("Possible EventEmitter memory leak detected. " + l2.length + " " + (t3 + " listeners added. Use emitter.setMaxListeners() to increase limit"));
            c2.name = "MaxListenersExceededWarning", c2.emitter = e2, c2.type = t3, c2.count = l2.length, n2(c2);
          }
          return e2;
        }
        function d() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function s2(e2, t3, n3) {
          var r3 = { fired: false, wrapFn: void 0, target: e2, type: t3, listener: n3 }, a2 = d.bind(r3);
          return a2.listener = n3, r3.wrapFn = a2, a2;
        }
        function l(e2, t3, n3) {
          var r3 = e2._events;
          if (r3 === void 0) return [];
          var a2 = r3[t3];
          return void 0 === a2 ? [] : "function" == typeof a2 ? n3 ? [a2.listener || a2] : [a2] : n3 ? f(a2) : u(a2, a2.length);
        }
        function c(e2) {
          var t3 = this._events;
          if (t3 !== void 0) {
            var n3 = t3[e2];
            if ("function" == typeof n3) return 1;
            if (void 0 !== n3) return n3.length;
          }
          return 0;
        }
        function u(e2, t3) {
          for (var n3 = Array(t3), r3 = 0; r3 < t3; ++r3) n3[r3] = e2[r3];
          return n3;
        }
        function p(e2, t3) {
          for (; t3 + 1 < e2.length; t3++) e2[t3] = e2[t3 + 1];
          e2.pop();
        }
        function f(e2) {
          for (var t3 = Array(e2.length), n3 = 0; n3 < t3.length; ++n3) t3[n3] = e2[n3].listener || e2[n3];
          return t3;
        }
        function g(e2, t3, n3) {
          "function" == typeof e2.on && _(e2, "error", t3, n3);
        }
        function _(e2, t3, n3, r3) {
          if ("function" == typeof e2.on) r3.once ? e2.once(t3, n3) : e2.on(t3, n3);
          else if ("function" == typeof e2.addEventListener) e2.addEventListener(t3, function a2(o2) {
            r3.once && e2.removeEventListener(t3, a2), n3(o2);
          });
          else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e2);
        }
        var h, m = "object" == typeof Reflect ? Reflect : null, b2 = m && "function" == typeof m.apply ? m.apply : function(e2, t3, n3) {
          return Function.prototype.apply.call(e2, t3, n3);
        };
        h = m && "function" == typeof m.ownKeys ? m.ownKeys : Object.getOwnPropertySymbols ? function(e2) {
          return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
        } : function(e2) {
          return Object.getOwnPropertyNames(e2);
        };
        var y = Number.isNaN || function(e2) {
          return e2 !== e2;
        };
        t2.exports = r2, t2.exports.once = function(e2, t3) {
          return new Promise(function(n3, r3) {
            function a2(n4) {
              e2.removeListener(t3, o2), r3(n4);
            }
            function o2() {
              "function" == typeof e2.removeListener && e2.removeListener("error", a2), n3([].slice.call(arguments));
            }
            _(e2, t3, o2, { once: true }), "error" !== t3 && g(e2, a2, { once: true });
          });
        }, r2.EventEmitter = r2, r2.prototype._events = void 0, r2.prototype._eventsCount = 0, r2.prototype._maxListeners = void 0;
        var C = 10;
        Object.defineProperty(r2, "defaultMaxListeners", { enumerable: true, get: function() {
          return C;
        }, set: function(e2) {
          if ("number" != typeof e2 || 0 > e2 || y(e2)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e2 + ".");
          C = e2;
        } }), r2.init = function() {
          (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, r2.prototype.setMaxListeners = function(e2) {
          if ("number" != typeof e2 || 0 > e2 || y(e2)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e2 + ".");
          return this._maxListeners = e2, this;
        }, r2.prototype.getMaxListeners = function() {
          return o(this);
        }, r2.prototype.emit = function(e2) {
          for (var t3 = [], n3 = 1; n3 < arguments.length; n3++) t3.push(arguments[n3]);
          var r3 = "error" === e2, a2 = this._events;
          if (a2 !== void 0) r3 = r3 && a2.error === void 0;
          else if (!r3) return false;
          if (r3) {
            var o2;
            if (0 < t3.length && (o2 = t3[0]), o2 instanceof Error) throw o2;
            var d2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
            throw d2.context = o2, d2;
          }
          var s3 = a2[e2];
          if (s3 === void 0) return false;
          if ("function" == typeof s3) b2(s3, this, t3);
          else for (var l2 = s3.length, c2 = u(s3, l2), n3 = 0; n3 < l2; ++n3) b2(c2[n3], this, t3);
          return true;
        }, r2.prototype.addListener = function(e2, t3) {
          return i(this, e2, t3, false);
        }, r2.prototype.on = r2.prototype.addListener, r2.prototype.prependListener = function(e2, t3) {
          return i(this, e2, t3, true);
        }, r2.prototype.once = function(e2, t3) {
          return a(t3), this.on(e2, s2(this, e2, t3)), this;
        }, r2.prototype.prependOnceListener = function(e2, t3) {
          return a(t3), this.prependListener(e2, s2(this, e2, t3)), this;
        }, r2.prototype.removeListener = function(e2, t3) {
          var n3, r3, o2, d2, s3;
          if (a(t3), r3 = this._events, void 0 === r3) return this;
          if (n3 = r3[e2], void 0 === n3) return this;
          if (n3 === t3 || n3.listener === t3) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r3[e2], r3.removeListener && this.emit("removeListener", e2, n3.listener || t3));
          else if ("function" != typeof n3) {
            for (o2 = -1, d2 = n3.length - 1; 0 <= d2; d2--) if (n3[d2] === t3 || n3[d2].listener === t3) {
              s3 = n3[d2].listener, o2 = d2;
              break;
            }
            if (0 > o2) return this;
            0 === o2 ? n3.shift() : p(n3, o2), 1 === n3.length && (r3[e2] = n3[0]), void 0 !== r3.removeListener && this.emit("removeListener", e2, s3 || t3);
          }
          return this;
        }, r2.prototype.off = r2.prototype.removeListener, r2.prototype.removeAllListeners = function(e2) {
          var t3, n3, r3;
          if (n3 = this._events, void 0 === n3) return this;
          if (void 0 === n3.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[e2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e2]), this;
          if (0 === arguments.length) {
            var a2, o2 = Object.keys(n3);
            for (r3 = 0; r3 < o2.length; ++r3) a2 = o2[r3], "removeListener" !== a2 && this.removeAllListeners(a2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if (t3 = n3[e2], "function" == typeof t3) this.removeListener(e2, t3);
          else if (void 0 !== t3) for (r3 = t3.length - 1; 0 <= r3; r3--) this.removeListener(e2, t3[r3]);
          return this;
        }, r2.prototype.listeners = function(e2) {
          return l(this, e2, true);
        }, r2.prototype.rawListeners = function(e2) {
          return l(this, e2, false);
        }, r2.listenerCount = function(e2, t3) {
          return "function" == typeof e2.listenerCount ? e2.listenerCount(t3) : c.call(e2, t3);
        }, r2.prototype.listenerCount = c, r2.prototype.eventNames = function() {
          return 0 < this._eventsCount ? h(this._events) : [];
        };
      }, {}], 8: [function(e, t2) {
        t2.exports = function() {
          if ("undefined" == typeof globalThis) return null;
          var e2 = { RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection, RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription, RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate };
          return e2.RTCPeerConnection ? e2 : null;
        };
      }, {}], 9: [function(e, a, o) {
        o.read = function(t2, n2, a2, o2, l) {
          var c, u, p = 8 * l - o2 - 1, f = (1 << p) - 1, g = f >> 1, _ = -7, h = a2 ? l - 1 : 0, b2 = a2 ? -1 : 1, d = t2[n2 + h];
          for (h += b2, c = d & (1 << -_) - 1, d >>= -_, _ += p; 0 < _; c = 256 * c + t2[n2 + h], h += b2, _ -= 8) ;
          for (u = c & (1 << -_) - 1, c >>= -_, _ += o2; 0 < _; u = 256 * u + t2[n2 + h], h += b2, _ -= 8) ;
          if (0 === c) c = 1 - g;
          else {
            if (c === f) return u ? NaN : (d ? -1 : 1) * (1 / 0);
            u += r(2, o2), c -= g;
          }
          return (d ? -1 : 1) * u * r(2, c - o2);
        }, o.write = function(a2, o2, l, u, p, f) {
          var h, b2, y, g = Math.LN2, _ = Math.log, C = 8 * f - p - 1, R = (1 << C) - 1, E = R >> 1, w2 = 23 === p ? r(2, -24) - r(2, -77) : 0, S2 = u ? 0 : f - 1, T = u ? 1 : -1, d = 0 > o2 || 0 === o2 && 0 > 1 / o2 ? 1 : 0;
          for (o2 = n(o2), isNaN(o2) || o2 === 1 / 0 ? (b2 = isNaN(o2) ? 1 : 0, h = R) : (h = t(_(o2) / g), 1 > o2 * (y = r(2, -h)) && (h--, y *= 2), o2 += 1 <= h + E ? w2 / y : w2 * r(2, 1 - E), 2 <= o2 * y && (h++, y /= 2), h + E >= R ? (b2 = 0, h = R) : 1 <= h + E ? (b2 = (o2 * y - 1) * r(2, p), h += E) : (b2 = o2 * r(2, E - 1) * r(2, p), h = 0)); 8 <= p; a2[l + S2] = 255 & b2, S2 += T, b2 /= 256, p -= 8) ;
          for (h = h << p | b2, C += p; 0 < C; a2[l + S2] = 255 & h, S2 += T, h /= 256, C -= 8) ;
          a2[l + S2 - T] |= 128 * d;
        };
      }, {}], 10: [function(e, t2) {
        t2.exports = "function" == typeof Object.create ? function(e2, t3) {
          t3 && (e2.super_ = t3, e2.prototype = Object.create(t3.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }));
        } : function(e2, t3) {
          if (t3) {
            e2.super_ = t3;
            var n2 = function() {
            };
            n2.prototype = t3.prototype, e2.prototype = new n2(), e2.prototype.constructor = e2;
          }
        };
      }, {}], 11: [function(e, t2) {
        var r2 = Math.round;
        function a(e2) {
          if (e2 += "", !(100 < e2.length)) {
            var t3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e2);
            if (t3) {
              var r3 = parseFloat(t3[1]), n2 = (t3[2] || "ms").toLowerCase();
              return "years" === n2 || "year" === n2 || "yrs" === n2 || "yr" === n2 || "y" === n2 ? 315576e5 * r3 : "weeks" === n2 || "week" === n2 || "w" === n2 ? 6048e5 * r3 : "days" === n2 || "day" === n2 || "d" === n2 ? 864e5 * r3 : "hours" === n2 || "hour" === n2 || "hrs" === n2 || "hr" === n2 || "h" === n2 ? 36e5 * r3 : "minutes" === n2 || "minute" === n2 || "mins" === n2 || "min" === n2 || "m" === n2 ? 6e4 * r3 : "seconds" === n2 || "second" === n2 || "secs" === n2 || "sec" === n2 || "s" === n2 ? 1e3 * r3 : "milliseconds" === n2 || "millisecond" === n2 || "msecs" === n2 || "msec" === n2 || "ms" === n2 ? r3 : void 0;
            }
          }
        }
        function o(e2) {
          var t3 = n(e2);
          return 864e5 <= t3 ? r2(e2 / 864e5) + "d" : 36e5 <= t3 ? r2(e2 / 36e5) + "h" : 6e4 <= t3 ? r2(e2 / 6e4) + "m" : 1e3 <= t3 ? r2(e2 / 1e3) + "s" : e2 + "ms";
        }
        function i(e2) {
          var t3 = n(e2);
          return 864e5 <= t3 ? s2(e2, t3, 864e5, "day") : 36e5 <= t3 ? s2(e2, t3, 36e5, "hour") : 6e4 <= t3 ? s2(e2, t3, 6e4, "minute") : 1e3 <= t3 ? s2(e2, t3, 1e3, "second") : e2 + " ms";
        }
        function s2(e2, t3, a2, n2) {
          return r2(e2 / a2) + " " + n2 + (t3 >= 1.5 * a2 ? "s" : "");
        }
        var l = 24 * (60 * 6e4);
        t2.exports = function(e2, t3) {
          t3 = t3 || {};
          var n2 = typeof e2;
          if ("string" == n2 && 0 < e2.length) return a(e2);
          if ("number" === n2 && isFinite(e2)) return t3.long ? i(e2) : o(e2);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e2));
        };
      }, {}], 12: [function(e, t2) {
        function n2() {
          throw new Error("setTimeout has not been defined");
        }
        function r2() {
          throw new Error("clearTimeout has not been defined");
        }
        function a(t3) {
          if (c === setTimeout) return setTimeout(t3, 0);
          if ((c === n2 || !c) && setTimeout) return c = setTimeout, setTimeout(t3, 0);
          try {
            return c(t3, 0);
          } catch (n3) {
            try {
              return c.call(null, t3, 0);
            } catch (n4) {
              return c.call(this, t3, 0);
            }
          }
        }
        function o(t3) {
          if (u === clearTimeout) return clearTimeout(t3);
          if ((u === r2 || !u) && clearTimeout) return u = clearTimeout, clearTimeout(t3);
          try {
            return u(t3);
          } catch (n3) {
            try {
              return u.call(null, t3);
            } catch (n4) {
              return u.call(this, t3);
            }
          }
        }
        function i() {
          _ && f && (_ = false, f.length ? g = f.concat(g) : h = -1, g.length && d());
        }
        function d() {
          if (!_) {
            var e2 = a(i);
            _ = true;
            for (var t3 = g.length; t3; ) {
              for (f = g, g = []; ++h < t3; ) f && f[h].run();
              h = -1, t3 = g.length;
            }
            f = null, _ = false, o(e2);
          }
        }
        function s2(e2, t3) {
          this.fun = e2, this.array = t3;
        }
        function l() {
        }
        var c, u, p = t2.exports = {};
        (function() {
          try {
            c = "function" == typeof setTimeout ? setTimeout : n2;
          } catch (t3) {
            c = n2;
          }
          try {
            u = "function" == typeof clearTimeout ? clearTimeout : r2;
          } catch (t3) {
            u = r2;
          }
        })();
        var f, g = [], _ = false, h = -1;
        p.nextTick = function(e2) {
          var t3 = Array(arguments.length - 1);
          if (1 < arguments.length) for (var n3 = 1; n3 < arguments.length; n3++) t3[n3 - 1] = arguments[n3];
          g.push(new s2(e2, t3)), 1 !== g.length || _ || a(d);
        }, s2.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, p.title = "browser", p.browser = true, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function() {
          return [];
        }, p.binding = function() {
          throw new Error("process.binding is not supported");
        }, p.cwd = function() {
          return "/";
        }, p.chdir = function() {
          throw new Error("process.chdir is not supported");
        }, p.umask = function() {
          return 0;
        };
      }, {}], 13: [function(e, t2) {
        (function(e2) {
          (function() {
            let n2;
            t2.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind("undefined" == typeof window ? e2 : window) : (e3) => (n2 || (n2 = Promise.resolve())).then(e3).catch((e4) => setTimeout(() => {
              throw e4;
            }, 0));
          }).call(this);
        }).call(this, "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, {}], 14: [function(e, t2) {
        (function(n2, r2) {
          (function() {
            "use strict";
            var a = e("safe-buffer").Buffer, o = r2.crypto || r2.msCrypto;
            t2.exports = o && o.getRandomValues ? function(e2, t3) {
              if (e2 > 4294967295) throw new RangeError("requested too many random bytes");
              var r3 = a.allocUnsafe(e2);
              if (0 < e2) if (65536 < e2) for (var i = 0; i < e2; i += 65536) o.getRandomValues(r3.slice(i, i + 65536));
              else o.getRandomValues(r3);
              return "function" == typeof t3 ? n2.nextTick(function() {
                t3(null, r3);
              }) : r3;
            } : function() {
              throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
            };
          }).call(this);
        }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, { _process: 12, "safe-buffer": 30 }], 15: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, e2.__proto__ = t3;
        }
        function r2(e2, t3, r3) {
          function a2(e3, n3, r4) {
            return "string" == typeof t3 ? t3 : t3(e3, n3, r4);
          }
          r3 || (r3 = Error);
          var o2 = function(e3) {
            function t4(t5, n3, r4) {
              return e3.call(this, a2(t5, n3, r4)) || this;
            }
            return n2(t4, e3), t4;
          }(r3);
          o2.prototype.name = r3.name, o2.prototype.code = e2, s2[e2] = o2;
        }
        function a(e2, t3) {
          if (Array.isArray(e2)) {
            var n3 = e2.length;
            return e2 = e2.map(function(e3) {
              return e3 + "";
            }), 2 < n3 ? "one of ".concat(t3, " ").concat(e2.slice(0, n3 - 1).join(", "), ", or ") + e2[n3 - 1] : 2 === n3 ? "one of ".concat(t3, " ").concat(e2[0], " or ").concat(e2[1]) : "of ".concat(t3, " ").concat(e2[0]);
          }
          return "of ".concat(t3, " ").concat(e2 + "");
        }
        function o(e2, t3, n3) {
          return e2.substr(!n3 || 0 > n3 ? 0 : +n3, t3.length) === t3;
        }
        function i(e2, t3, n3) {
          return (void 0 === n3 || n3 > e2.length) && (n3 = e2.length), e2.substring(n3 - t3.length, n3) === t3;
        }
        function d(e2, t3, n3) {
          return "number" != typeof n3 && (n3 = 0), !(n3 + t3.length > e2.length) && -1 !== e2.indexOf(t3, n3);
        }
        var s2 = {};
        r2("ERR_INVALID_OPT_VALUE", function(e2, t3) {
          return 'The value "' + t3 + '" is invalid for option "' + e2 + '"';
        }, TypeError), r2("ERR_INVALID_ARG_TYPE", function(e2, t3, n3) {
          var r3;
          "string" == typeof t3 && o(t3, "not ") ? (r3 = "must not be", t3 = t3.replace(/^not /, "")) : r3 = "must be";
          var s3;
          if (i(e2, " argument")) s3 = "The ".concat(e2, " ").concat(r3, " ").concat(a(t3, "type"));
          else {
            var l = d(e2, ".") ? "property" : "argument";
            s3 = 'The "'.concat(e2, '" ').concat(l, " ").concat(r3, " ").concat(a(t3, "type"));
          }
          return s3 += ". Received type ".concat(typeof n3), s3;
        }, TypeError), r2("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r2("ERR_METHOD_NOT_IMPLEMENTED", function(e2) {
          return "The " + e2 + " method is not implemented";
        }), r2("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r2("ERR_STREAM_DESTROYED", function(e2) {
          return "Cannot call " + e2 + " after a stream was destroyed";
        }), r2("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r2("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r2("ERR_STREAM_WRITE_AFTER_END", "write after end"), r2("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r2("ERR_UNKNOWN_ENCODING", function(e2) {
          return "Unknown encoding: " + e2;
        }, TypeError), r2("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t2.exports.codes = s2;
      }, {}], 16: [function(e, t2) {
        (function(n2) {
          (function() {
            "use strict";
            function r2(e2) {
              return this instanceof r2 ? void (d.call(this, e2), s2.call(this, e2), this.allowHalfOpen = true, e2 && (false === e2.readable && (this.readable = false), false === e2.writable && (this.writable = false), false === e2.allowHalfOpen && (this.allowHalfOpen = false, this.once("end", a)))) : new r2(e2);
            }
            function a() {
              this._writableState.ended || n2.nextTick(o, this);
            }
            function o(e2) {
              e2.end();
            }
            var i = Object.keys || function(e2) {
              var t3 = [];
              for (var n3 in e2) t3.push(n3);
              return t3;
            };
            t2.exports = r2;
            var d = e("./_stream_readable"), s2 = e("./_stream_writable");
            e("inherits")(r2, d);
            for (var l, c = i(s2.prototype), u = 0; u < c.length; u++) l = c[u], r2.prototype[l] || (r2.prototype[l] = s2.prototype[l]);
            Object.defineProperty(r2.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
              return this._writableState.highWaterMark;
            } }), Object.defineProperty(r2.prototype, "writableBuffer", { enumerable: false, get: function() {
              return this._writableState && this._writableState.getBuffer();
            } }), Object.defineProperty(r2.prototype, "writableLength", { enumerable: false, get: function() {
              return this._writableState.length;
            } }), Object.defineProperty(r2.prototype, "destroyed", { enumerable: false, get: function() {
              return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
            }, set: function(e2) {
              void 0 === this._readableState || void 0 === this._writableState || (this._readableState.destroyed = e2, this._writableState.destroyed = e2);
            } });
          }).call(this);
        }).call(this, e("_process"));
      }, { "./_stream_readable": 18, "./_stream_writable": 20, _process: 12, inherits: 10 }], 17: [function(e, t2) {
        "use strict";
        function n2(e2) {
          return this instanceof n2 ? void r2.call(this, e2) : new n2(e2);
        }
        t2.exports = n2;
        var r2 = e("./_stream_transform");
        e("inherits")(n2, r2), n2.prototype._transform = function(e2, t3, n3) {
          n3(null, e2);
        };
      }, { "./_stream_transform": 19, inherits: 10 }], 18: [function(e, t2) {
        (function(n2, r2) {
          (function() {
            "use strict";
            function a(e2) {
              return P.from(e2);
            }
            function o(e2) {
              return P.isBuffer(e2) || e2 instanceof M;
            }
            function i(e2, t3, n3) {
              return "function" == typeof e2.prependListener ? e2.prependListener(t3, n3) : void (e2._events && e2._events[t3] ? Array.isArray(e2._events[t3]) ? e2._events[t3].unshift(n3) : e2._events[t3] = [n3, e2._events[t3]] : e2.on(t3, n3));
            }
            function d(t3, n3, r3) {
              A = A || e("./_stream_duplex"), t3 = t3 || {}, "boolean" != typeof r3 && (r3 = n3 instanceof A), this.objectMode = !!t3.objectMode, r3 && (this.objectMode = this.objectMode || !!t3.readableObjectMode), this.highWaterMark = H2(this, t3, "readableHighWaterMark", r3), this.buffer = new j(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.destroyed = false, this.defaultEncoding = t3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t3.encoding && (!F && (F = e("string_decoder/").StringDecoder), this.decoder = new F(t3.encoding), this.encoding = t3.encoding);
            }
            function s2(t3) {
              if (A = A || e("./_stream_duplex"), !(this instanceof s2)) return new s2(t3);
              var n3 = this instanceof A;
              this._readableState = new d(t3, this, n3), this.readable = true, t3 && ("function" == typeof t3.read && (this._read = t3.read), "function" == typeof t3.destroy && (this._destroy = t3.destroy)), I.call(this);
            }
            function l(e2, t3, n3, r3, o2) {
              x("readableAddChunk", t3);
              var i2 = e2._readableState;
              if (null === t3) i2.reading = false, g(e2, i2);
              else {
                var d2;
                if (o2 || (d2 = u(i2, t3)), d2) X2(e2, d2);
                else if (!(i2.objectMode || t3 && 0 < t3.length)) r3 || (i2.reading = false, m(e2, i2));
                else if ("string" == typeof t3 || i2.objectMode || Object.getPrototypeOf(t3) === P.prototype || (t3 = a(t3)), r3) i2.endEmitted ? X2(e2, new K()) : c(e2, i2, t3, true);
                else if (i2.ended) X2(e2, new z2());
                else {
                  if (i2.destroyed) return false;
                  i2.reading = false, i2.decoder && !n3 ? (t3 = i2.decoder.write(t3), i2.objectMode || 0 !== t3.length ? c(e2, i2, t3, false) : m(e2, i2)) : c(e2, i2, t3, false);
                }
              }
              return !i2.ended && (i2.length < i2.highWaterMark || 0 === i2.length);
            }
            function c(e2, t3, n3, r3) {
              t3.flowing && 0 === t3.length && !t3.sync ? (t3.awaitDrain = 0, e2.emit("data", n3)) : (t3.length += t3.objectMode ? 1 : n3.length, r3 ? t3.buffer.unshift(n3) : t3.buffer.push(n3), t3.needReadable && _(e2)), m(e2, t3);
            }
            function u(e2, t3) {
              var n3;
              return o(t3) || "string" == typeof t3 || void 0 === t3 || e2.objectMode || (n3 = new V("chunk", ["string", "Buffer", "Uint8Array"], t3)), n3;
            }
            function p(e2) {
              return 1073741824 <= e2 ? e2 = 1073741824 : (e2--, e2 |= e2 >>> 1, e2 |= e2 >>> 2, e2 |= e2 >>> 4, e2 |= e2 >>> 8, e2 |= e2 >>> 16, e2++), e2;
            }
            function f(e2, t3) {
              return 0 >= e2 || 0 === t3.length && t3.ended ? 0 : t3.objectMode ? 1 : e2 === e2 ? (e2 > t3.highWaterMark && (t3.highWaterMark = p(e2)), e2 <= t3.length ? e2 : t3.ended ? t3.length : (t3.needReadable = true, 0)) : t3.flowing && t3.length ? t3.buffer.head.data.length : t3.length;
            }
            function g(e2, t3) {
              if (x("onEofChunk"), !t3.ended) {
                if (t3.decoder) {
                  var n3 = t3.decoder.end();
                  n3 && n3.length && (t3.buffer.push(n3), t3.length += t3.objectMode ? 1 : n3.length);
                }
                t3.ended = true, t3.sync ? _(e2) : (t3.needReadable = false, !t3.emittedReadable && (t3.emittedReadable = true, h(e2)));
              }
            }
            function _(e2) {
              var t3 = e2._readableState;
              x("emitReadable", t3.needReadable, t3.emittedReadable), t3.needReadable = false, t3.emittedReadable || (x("emitReadable", t3.flowing), t3.emittedReadable = true, n2.nextTick(h, e2));
            }
            function h(e2) {
              var t3 = e2._readableState;
              x("emitReadable_", t3.destroyed, t3.length, t3.ended), !t3.destroyed && (t3.length || t3.ended) && (e2.emit("readable"), t3.emittedReadable = false), t3.needReadable = !t3.flowing && !t3.ended && t3.length <= t3.highWaterMark, S2(e2);
            }
            function m(e2, t3) {
              t3.readingMore || (t3.readingMore = true, n2.nextTick(b2, e2, t3));
            }
            function b2(e2, t3) {
              for (; !t3.reading && !t3.ended && (t3.length < t3.highWaterMark || t3.flowing && 0 === t3.length); ) {
                var n3 = t3.length;
                if (x("maybeReadMore read 0"), e2.read(0), n3 === t3.length) break;
              }
              t3.readingMore = false;
            }
            function y(e2) {
              return function() {
                var t3 = e2._readableState;
                x("pipeOnDrain", t3.awaitDrain), t3.awaitDrain && t3.awaitDrain--, 0 === t3.awaitDrain && D2(e2, "data") && (t3.flowing = true, S2(e2));
              };
            }
            function C(e2) {
              var t3 = e2._readableState;
              t3.readableListening = 0 < e2.listenerCount("readable"), t3.resumeScheduled && !t3.paused ? t3.flowing = true : 0 < e2.listenerCount("data") && e2.resume();
            }
            function R(e2) {
              x("readable nexttick read 0"), e2.read(0);
            }
            function E(e2, t3) {
              t3.resumeScheduled || (t3.resumeScheduled = true, n2.nextTick(w2, e2, t3));
            }
            function w2(e2, t3) {
              x("resume", t3.reading), t3.reading || e2.read(0), t3.resumeScheduled = false, e2.emit("resume"), S2(e2), t3.flowing && !t3.reading && e2.read(0);
            }
            function S2(e2) {
              var t3 = e2._readableState;
              for (x("flow", t3.flowing); t3.flowing && null !== e2.read(); ) ;
            }
            function T(e2, t3) {
              if (0 === t3.length) return null;
              var n3;
              return t3.objectMode ? n3 = t3.buffer.shift() : !e2 || e2 >= t3.length ? (n3 = t3.decoder ? t3.buffer.join("") : 1 === t3.buffer.length ? t3.buffer.first() : t3.buffer.concat(t3.length), t3.buffer.clear()) : n3 = t3.buffer.consume(e2, t3.decoder), n3;
            }
            function v2(e2) {
              var t3 = e2._readableState;
              x("endReadable", t3.endEmitted), t3.endEmitted || (t3.ended = true, n2.nextTick(k, t3, e2));
            }
            function k(e2, t3) {
              if (x("endReadableNT", e2.endEmitted, e2.length), !e2.endEmitted && 0 === e2.length && (e2.endEmitted = true, t3.readable = false, t3.emit("end"), e2.autoDestroy)) {
                var n3 = t3._writableState;
                (!n3 || n3.autoDestroy && n3.finished) && t3.destroy();
              }
            }
            function L(e2, t3) {
              for (var n3 = 0, r3 = e2.length; n3 < r3; n3++) if (e2[n3] === t3) return n3;
              return -1;
            }
            t2.exports = s2;
            var A;
            s2.ReadableState = d;
            var x, N = e("events").EventEmitter, D2 = function(e2, t3) {
              return e2.listeners(t3).length;
            }, I = e("./internal/streams/stream"), P = e("buffer").Buffer, M = r2.Uint8Array || function() {
            }, O = e("util");
            x = O && O.debuglog ? O.debuglog("stream") : function() {
            };
            var F, B, U, j = e("./internal/streams/buffer_list"), q = e("./internal/streams/destroy"), W = e("./internal/streams/state"), H2 = W.getHighWaterMark, Y2 = e("../errors").codes, V = Y2.ERR_INVALID_ARG_TYPE, z2 = Y2.ERR_STREAM_PUSH_AFTER_EOF, G = Y2.ERR_METHOD_NOT_IMPLEMENTED, K = Y2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            e("inherits")(s2, I);
            var X2 = q.errorOrDestroy, $ = ["error", "close", "destroy", "pause", "resume"];
            Object.defineProperty(s2.prototype, "destroyed", { enumerable: false, get: function() {
              return void 0 !== this._readableState && this._readableState.destroyed;
            }, set: function(e2) {
              this._readableState && (this._readableState.destroyed = e2);
            } }), s2.prototype.destroy = q.destroy, s2.prototype._undestroy = q.undestroy, s2.prototype._destroy = function(e2, t3) {
              t3(e2);
            }, s2.prototype.push = function(e2, t3) {
              var n3, r3 = this._readableState;
              return r3.objectMode ? n3 = true : "string" == typeof e2 && (t3 = t3 || r3.defaultEncoding, t3 !== r3.encoding && (e2 = P.from(e2, t3), t3 = ""), n3 = true), l(this, e2, t3, false, n3);
            }, s2.prototype.unshift = function(e2) {
              return l(this, e2, null, true, false);
            }, s2.prototype.isPaused = function() {
              return false === this._readableState.flowing;
            }, s2.prototype.setEncoding = function(t3) {
              F || (F = e("string_decoder/").StringDecoder);
              var n3 = new F(t3);
              this._readableState.decoder = n3, this._readableState.encoding = this._readableState.decoder.encoding;
              for (var r3 = this._readableState.buffer.head, a2 = ""; null !== r3; ) a2 += n3.write(r3.data), r3 = r3.next;
              return this._readableState.buffer.clear(), "" !== a2 && this._readableState.buffer.push(a2), this._readableState.length = a2.length, this;
            };
            s2.prototype.read = function(e2) {
              x("read", e2), e2 = parseInt(e2, 10);
              var t3 = this._readableState, r3 = e2;
              if (0 !== e2 && (t3.emittedReadable = false), 0 === e2 && t3.needReadable && ((0 === t3.highWaterMark ? 0 < t3.length : t3.length >= t3.highWaterMark) || t3.ended)) return x("read: emitReadable", t3.length, t3.ended), 0 === t3.length && t3.ended ? v2(this) : _(this), null;
              if (e2 = f(e2, t3), 0 === e2 && t3.ended) return 0 === t3.length && v2(this), null;
              var a2 = t3.needReadable;
              x("need readable", a2), (0 === t3.length || t3.length - e2 < t3.highWaterMark) && (a2 = true, x("length less than watermark", a2)), t3.ended || t3.reading ? (a2 = false, x("reading or ended", a2)) : a2 && (x("do read"), t3.reading = true, t3.sync = true, 0 === t3.length && (t3.needReadable = true), this._read(t3.highWaterMark), t3.sync = false, !t3.reading && (e2 = f(r3, t3)));
              var o2;
              return o2 = 0 < e2 ? T(e2, t3) : null, null === o2 ? (t3.needReadable = t3.length <= t3.highWaterMark, e2 = 0) : (t3.length -= e2, t3.awaitDrain = 0), 0 === t3.length && (!t3.ended && (t3.needReadable = true), r3 !== e2 && t3.ended && v2(this)), null !== o2 && this.emit("data", o2), o2;
            }, s2.prototype._read = function() {
              X2(this, new G("_read()"));
            }, s2.prototype.pipe = function(e2, t3) {
              function r3(e3, t4) {
                x("onunpipe"), e3 === p2 && t4 && false === t4.hasUnpiped && (t4.hasUnpiped = true, o2());
              }
              function a2() {
                x("onend"), e2.end();
              }
              function o2() {
                x("cleanup"), e2.removeListener("close", l2), e2.removeListener("finish", c2), e2.removeListener("drain", h2), e2.removeListener("error", s3), e2.removeListener("unpipe", r3), p2.removeListener("end", a2), p2.removeListener("end", u2), p2.removeListener("data", d2), m2 = true, f2.awaitDrain && (!e2._writableState || e2._writableState.needDrain) && h2();
              }
              function d2(t4) {
                x("ondata");
                var n3 = e2.write(t4);
                x("dest.write", n3), false === n3 && ((1 === f2.pipesCount && f2.pipes === e2 || 1 < f2.pipesCount && -1 !== L(f2.pipes, e2)) && !m2 && (x("false write response, pause", f2.awaitDrain), f2.awaitDrain++), p2.pause());
              }
              function s3(t4) {
                x("onerror", t4), u2(), e2.removeListener("error", s3), 0 === D2(e2, "error") && X2(e2, t4);
              }
              function l2() {
                e2.removeListener("finish", c2), u2();
              }
              function c2() {
                x("onfinish"), e2.removeListener("close", l2), u2();
              }
              function u2() {
                x("unpipe"), p2.unpipe(e2);
              }
              var p2 = this, f2 = this._readableState;
              switch (f2.pipesCount) {
                case 0:
                  f2.pipes = e2;
                  break;
                case 1:
                  f2.pipes = [f2.pipes, e2];
                  break;
                default:
                  f2.pipes.push(e2);
              }
              f2.pipesCount += 1, x("pipe count=%d opts=%j", f2.pipesCount, t3);
              var g2 = (!t3 || false !== t3.end) && e2 !== n2.stdout && e2 !== n2.stderr, _2 = g2 ? a2 : u2;
              f2.endEmitted ? n2.nextTick(_2) : p2.once("end", _2), e2.on("unpipe", r3);
              var h2 = y(p2);
              e2.on("drain", h2);
              var m2 = false;
              return p2.on("data", d2), i(e2, "error", s3), e2.once("close", l2), e2.once("finish", c2), e2.emit("pipe", p2), f2.flowing || (x("pipe resume"), p2.resume()), e2;
            }, s2.prototype.unpipe = function(e2) {
              var t3 = this._readableState, n3 = { hasUnpiped: false };
              if (0 === t3.pipesCount) return this;
              if (1 === t3.pipesCount) return e2 && e2 !== t3.pipes ? this : (e2 || (e2 = t3.pipes), t3.pipes = null, t3.pipesCount = 0, t3.flowing = false, e2 && e2.emit("unpipe", this, n3), this);
              if (!e2) {
                var r3 = t3.pipes, a2 = t3.pipesCount;
                t3.pipes = null, t3.pipesCount = 0, t3.flowing = false;
                for (var o2 = 0; o2 < a2; o2++) r3[o2].emit("unpipe", this, { hasUnpiped: false });
                return this;
              }
              var d2 = L(t3.pipes, e2);
              return -1 === d2 ? this : (t3.pipes.splice(d2, 1), t3.pipesCount -= 1, 1 === t3.pipesCount && (t3.pipes = t3.pipes[0]), e2.emit("unpipe", this, n3), this);
            }, s2.prototype.on = function(e2, t3) {
              var r3 = I.prototype.on.call(this, e2, t3), a2 = this._readableState;
              return "data" === e2 ? (a2.readableListening = 0 < this.listenerCount("readable"), false !== a2.flowing && this.resume()) : "readable" == e2 && !a2.endEmitted && !a2.readableListening && (a2.readableListening = a2.needReadable = true, a2.flowing = false, a2.emittedReadable = false, x("on readable", a2.length, a2.reading), a2.length ? _(this) : !a2.reading && n2.nextTick(R, this)), r3;
            }, s2.prototype.addListener = s2.prototype.on, s2.prototype.removeListener = function(e2, t3) {
              var r3 = I.prototype.removeListener.call(this, e2, t3);
              return "readable" === e2 && n2.nextTick(C, this), r3;
            }, s2.prototype.removeAllListeners = function(e2) {
              var t3 = I.prototype.removeAllListeners.apply(this, arguments);
              return ("readable" === e2 || void 0 === e2) && n2.nextTick(C, this), t3;
            }, s2.prototype.resume = function() {
              var e2 = this._readableState;
              return e2.flowing || (x("resume"), e2.flowing = !e2.readableListening, E(this, e2)), e2.paused = false, this;
            }, s2.prototype.pause = function() {
              return x("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (x("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
            }, s2.prototype.wrap = function(e2) {
              var t3 = this, r3 = this._readableState, a2 = false;
              for (var o2 in e2.on("end", function() {
                if (x("wrapped end"), r3.decoder && !r3.ended) {
                  var e3 = r3.decoder.end();
                  e3 && e3.length && t3.push(e3);
                }
                t3.push(null);
              }), e2.on("data", function(n3) {
                if ((x("wrapped data"), r3.decoder && (n3 = r3.decoder.write(n3)), !(r3.objectMode && (null === n3 || void 0 === n3))) && (r3.objectMode || n3 && n3.length)) {
                  var o3 = t3.push(n3);
                  o3 || (a2 = true, e2.pause());
                }
              }), e2) void 0 === this[o2] && "function" == typeof e2[o2] && (this[o2] = /* @__PURE__ */ function(t4) {
                return function() {
                  return e2[t4].apply(e2, arguments);
                };
              }(o2));
              for (var i2 = 0; i2 < $.length; i2++) e2.on($[i2], this.emit.bind(this, $[i2]));
              return this._read = function(t4) {
                x("wrapped _read", t4), a2 && (a2 = false, e2.resume());
              }, this;
            }, "function" == typeof Symbol && (s2.prototype[Symbol.asyncIterator] = function() {
              return void 0 === B && (B = e("./internal/streams/async_iterator")), B(this);
            }), Object.defineProperty(s2.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
              return this._readableState.highWaterMark;
            } }), Object.defineProperty(s2.prototype, "readableBuffer", { enumerable: false, get: function() {
              return this._readableState && this._readableState.buffer;
            } }), Object.defineProperty(s2.prototype, "readableFlowing", { enumerable: false, get: function() {
              return this._readableState.flowing;
            }, set: function(e2) {
              this._readableState && (this._readableState.flowing = e2);
            } }), s2._fromList = T, Object.defineProperty(s2.prototype, "readableLength", { enumerable: false, get: function() {
              return this._readableState.length;
            } }), "function" == typeof Symbol && (s2.from = function(t3, n3) {
              return void 0 === U && (U = e("./internal/streams/from")), U(s2, t3, n3);
            });
          }).call(this);
        }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, { "../errors": 15, "./_stream_duplex": 16, "./internal/streams/async_iterator": 21, "./internal/streams/buffer_list": 22, "./internal/streams/destroy": 23, "./internal/streams/from": 25, "./internal/streams/state": 27, "./internal/streams/stream": 28, _process: 12, buffer: 3, events: 7, inherits: 10, "string_decoder/": 31, util: 2 }], 19: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          var n3 = this._transformState;
          n3.transforming = false;
          var r3 = n3.writecb;
          if (null === r3) return this.emit("error", new s2());
          n3.writechunk = null, n3.writecb = null, null != t3 && this.push(t3), r3(e2);
          var a2 = this._readableState;
          a2.reading = false, (a2.needReadable || a2.length < a2.highWaterMark) && this._read(a2.highWaterMark);
        }
        function r2(e2) {
          return this instanceof r2 ? void (u.call(this, e2), this._transformState = { afterTransform: n2.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e2 && ("function" == typeof e2.transform && (this._transform = e2.transform), "function" == typeof e2.flush && (this._flush = e2.flush)), this.on("prefinish", a)) : new r2(e2);
        }
        function a() {
          var e2 = this;
          "function" != typeof this._flush || this._readableState.destroyed ? o(this, null, null) : this._flush(function(t3, n3) {
            o(e2, t3, n3);
          });
        }
        function o(e2, t3, n3) {
          if (t3) return e2.emit("error", t3);
          if (null != n3 && e2.push(n3), e2._writableState.length) throw new c();
          if (e2._transformState.transforming) throw new l();
          return e2.push(null);
        }
        t2.exports = r2;
        var i = e("../errors").codes, d = i.ERR_METHOD_NOT_IMPLEMENTED, s2 = i.ERR_MULTIPLE_CALLBACK, l = i.ERR_TRANSFORM_ALREADY_TRANSFORMING, c = i.ERR_TRANSFORM_WITH_LENGTH_0, u = e("./_stream_duplex");
        e("inherits")(r2, u), r2.prototype.push = function(e2, t3) {
          return this._transformState.needTransform = false, u.prototype.push.call(this, e2, t3);
        }, r2.prototype._transform = function(e2, t3, n3) {
          n3(new d("_transform()"));
        }, r2.prototype._write = function(e2, t3, n3) {
          var r3 = this._transformState;
          if (r3.writecb = n3, r3.writechunk = e2, r3.writeencoding = t3, !r3.transforming) {
            var a2 = this._readableState;
            (r3.needTransform || a2.needReadable || a2.length < a2.highWaterMark) && this._read(a2.highWaterMark);
          }
        }, r2.prototype._read = function() {
          var e2 = this._transformState;
          null === e2.writechunk || e2.transforming ? e2.needTransform = true : (e2.transforming = true, this._transform(e2.writechunk, e2.writeencoding, e2.afterTransform));
        }, r2.prototype._destroy = function(e2, t3) {
          u.prototype._destroy.call(this, e2, function(e3) {
            t3(e3);
          });
        };
      }, { "../errors": 15, "./_stream_duplex": 16, inherits: 10 }], 20: [function(e, t2) {
        (function(n2, r2) {
          (function() {
            "use strict";
            function a(e2) {
              var t3 = this;
              this.next = null, this.entry = null, this.finish = function() {
                v2(t3, e2);
              };
            }
            function o(e2) {
              return x.from(e2);
            }
            function i(e2) {
              return x.isBuffer(e2) || e2 instanceof N;
            }
            function d() {
            }
            function s2(t3, n3, r3) {
              k = k || e("./_stream_duplex"), t3 = t3 || {}, "boolean" != typeof r3 && (r3 = n3 instanceof k), this.objectMode = !!t3.objectMode, r3 && (this.objectMode = this.objectMode || !!t3.writableObjectMode), this.highWaterMark = P(this, t3, "writableHighWaterMark", r3), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
              var o2 = false === t3.decodeStrings;
              this.decodeStrings = !o2, this.defaultEncoding = t3.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(e2) {
                m(n3, e2);
              }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this);
            }
            function l(t3) {
              k = k || e("./_stream_duplex");
              var n3 = this instanceof k;
              return n3 || V.call(l, this) ? void (this._writableState = new s2(t3, this, n3), this.writable = true, t3 && ("function" == typeof t3.write && (this._write = t3.write), "function" == typeof t3.writev && (this._writev = t3.writev), "function" == typeof t3.destroy && (this._destroy = t3.destroy), "function" == typeof t3.final && (this._final = t3.final)), A.call(this)) : new l(t3);
            }
            function c(e2, t3) {
              var r3 = new W();
              Y2(e2, r3), n2.nextTick(t3, r3);
            }
            function u(e2, t3, r3, a2) {
              var o2;
              return null === r3 ? o2 = new q() : "string" != typeof r3 && !t3.objectMode && (o2 = new O("chunk", ["string", "Buffer"], r3)), !o2 || (Y2(e2, o2), n2.nextTick(a2, o2), false);
            }
            function p(e2, t3, n3) {
              return e2.objectMode || false === e2.decodeStrings || "string" != typeof t3 || (t3 = x.from(t3, n3)), t3;
            }
            function f(e2, t3, n3, r3, a2, o2) {
              if (!n3) {
                var i2 = p(t3, r3, a2);
                r3 !== i2 && (n3 = true, a2 = "buffer", r3 = i2);
              }
              var d2 = t3.objectMode ? 1 : r3.length;
              t3.length += d2;
              var s3 = t3.length < t3.highWaterMark;
              if (s3 || (t3.needDrain = true), t3.writing || t3.corked) {
                var l2 = t3.lastBufferedRequest;
                t3.lastBufferedRequest = { chunk: r3, encoding: a2, isBuf: n3, callback: o2, next: null }, l2 ? l2.next = t3.lastBufferedRequest : t3.bufferedRequest = t3.lastBufferedRequest, t3.bufferedRequestCount += 1;
              } else g(e2, t3, false, d2, r3, a2, o2);
              return s3;
            }
            function g(e2, t3, n3, r3, a2, o2, i2) {
              t3.writelen = r3, t3.writecb = i2, t3.writing = true, t3.sync = true, t3.destroyed ? t3.onwrite(new j("write")) : n3 ? e2._writev(a2, t3.onwrite) : e2._write(a2, o2, t3.onwrite), t3.sync = false;
            }
            function _(e2, t3, r3, a2, o2) {
              --t3.pendingcb, r3 ? (n2.nextTick(o2, a2), n2.nextTick(S2, e2, t3), e2._writableState.errorEmitted = true, Y2(e2, a2)) : (o2(a2), e2._writableState.errorEmitted = true, Y2(e2, a2), S2(e2, t3));
            }
            function h(e2) {
              e2.writing = false, e2.writecb = null, e2.length -= e2.writelen, e2.writelen = 0;
            }
            function m(e2, t3) {
              var r3 = e2._writableState, a2 = r3.sync, o2 = r3.writecb;
              if ("function" != typeof o2) throw new B();
              if (h(r3), t3) _(e2, r3, a2, t3, o2);
              else {
                var i2 = R(r3) || e2.destroyed;
                i2 || r3.corked || r3.bufferProcessing || !r3.bufferedRequest || C(e2, r3), a2 ? n2.nextTick(b2, e2, r3, i2, o2) : b2(e2, r3, i2, o2);
              }
            }
            function b2(e2, t3, n3, r3) {
              n3 || y(e2, t3), t3.pendingcb--, r3(), S2(e2, t3);
            }
            function y(e2, t3) {
              0 === t3.length && t3.needDrain && (t3.needDrain = false, e2.emit("drain"));
            }
            function C(e2, t3) {
              t3.bufferProcessing = true;
              var n3 = t3.bufferedRequest;
              if (e2._writev && n3 && n3.next) {
                var r3 = t3.bufferedRequestCount, o2 = Array(r3), i2 = t3.corkedRequestsFree;
                i2.entry = n3;
                for (var d2 = 0, s3 = true; n3; ) o2[d2] = n3, n3.isBuf || (s3 = false), n3 = n3.next, d2 += 1;
                o2.allBuffers = s3, g(e2, t3, true, t3.length, o2, "", i2.finish), t3.pendingcb++, t3.lastBufferedRequest = null, i2.next ? (t3.corkedRequestsFree = i2.next, i2.next = null) : t3.corkedRequestsFree = new a(t3), t3.bufferedRequestCount = 0;
              } else {
                for (; n3; ) {
                  var l2 = n3.chunk, c2 = n3.encoding, u2 = n3.callback, p2 = t3.objectMode ? 1 : l2.length;
                  if (g(e2, t3, false, p2, l2, c2, u2), n3 = n3.next, t3.bufferedRequestCount--, t3.writing) break;
                }
                null === n3 && (t3.lastBufferedRequest = null);
              }
              t3.bufferedRequest = n3, t3.bufferProcessing = false;
            }
            function R(e2) {
              return e2.ending && 0 === e2.length && null === e2.bufferedRequest && !e2.finished && !e2.writing;
            }
            function E(e2, t3) {
              e2._final(function(n3) {
                t3.pendingcb--, n3 && Y2(e2, n3), t3.prefinished = true, e2.emit("prefinish"), S2(e2, t3);
              });
            }
            function w2(e2, t3) {
              t3.prefinished || t3.finalCalled || ("function" != typeof e2._final || t3.destroyed ? (t3.prefinished = true, e2.emit("prefinish")) : (t3.pendingcb++, t3.finalCalled = true, n2.nextTick(E, e2, t3)));
            }
            function S2(e2, t3) {
              var n3 = R(t3);
              if (n3 && (w2(e2, t3), 0 === t3.pendingcb && (t3.finished = true, e2.emit("finish"), t3.autoDestroy))) {
                var r3 = e2._readableState;
                (!r3 || r3.autoDestroy && r3.endEmitted) && e2.destroy();
              }
              return n3;
            }
            function T(e2, t3, r3) {
              t3.ending = true, S2(e2, t3), r3 && (t3.finished ? n2.nextTick(r3) : e2.once("finish", r3)), t3.ended = true, e2.writable = false;
            }
            function v2(e2, t3, n3) {
              var r3 = e2.entry;
              for (e2.entry = null; r3; ) {
                var a2 = r3.callback;
                t3.pendingcb--, a2(n3), r3 = r3.next;
              }
              t3.corkedRequestsFree.next = e2;
            }
            t2.exports = l;
            var k;
            l.WritableState = s2;
            var L = { deprecate: e("util-deprecate") }, A = e("./internal/streams/stream"), x = e("buffer").Buffer, N = r2.Uint8Array || function() {
            }, D2 = e("./internal/streams/destroy"), I = e("./internal/streams/state"), P = I.getHighWaterMark, M = e("../errors").codes, O = M.ERR_INVALID_ARG_TYPE, F = M.ERR_METHOD_NOT_IMPLEMENTED, B = M.ERR_MULTIPLE_CALLBACK, U = M.ERR_STREAM_CANNOT_PIPE, j = M.ERR_STREAM_DESTROYED, q = M.ERR_STREAM_NULL_VALUES, W = M.ERR_STREAM_WRITE_AFTER_END, H2 = M.ERR_UNKNOWN_ENCODING, Y2 = D2.errorOrDestroy;
            e("inherits")(l, A), s2.prototype.getBuffer = function() {
              for (var e2 = this.bufferedRequest, t3 = []; e2; ) t3.push(e2), e2 = e2.next;
              return t3;
            }, function() {
              try {
                Object.defineProperty(s2.prototype, "buffer", { get: L.deprecate(function() {
                  return this.getBuffer();
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
              } catch (e2) {
              }
            }();
            var V;
            "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (V = Function.prototype[Symbol.hasInstance], Object.defineProperty(l, Symbol.hasInstance, { value: function(e2) {
              return !!V.call(this, e2) || !(this !== l) && e2 && e2._writableState instanceof s2;
            } })) : V = function(e2) {
              return e2 instanceof this;
            }, l.prototype.pipe = function() {
              Y2(this, new U());
            }, l.prototype.write = function(e2, t3, n3) {
              var r3 = this._writableState, a2 = false, s3 = !r3.objectMode && i(e2);
              return s3 && !x.isBuffer(e2) && (e2 = o(e2)), "function" == typeof t3 && (n3 = t3, t3 = null), s3 ? t3 = "buffer" : !t3 && (t3 = r3.defaultEncoding), "function" != typeof n3 && (n3 = d), r3.ending ? c(this, n3) : (s3 || u(this, r3, e2, n3)) && (r3.pendingcb++, a2 = f(this, r3, s3, e2, t3, n3)), a2;
            }, l.prototype.cork = function() {
              this._writableState.corked++;
            }, l.prototype.uncork = function() {
              var e2 = this._writableState;
              e2.corked && (e2.corked--, !e2.writing && !e2.corked && !e2.bufferProcessing && e2.bufferedRequest && C(this, e2));
            }, l.prototype.setDefaultEncoding = function(e2) {
              if ("string" == typeof e2 && (e2 = e2.toLowerCase()), !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e2 + "").toLowerCase()))) throw new H2(e2);
              return this._writableState.defaultEncoding = e2, this;
            }, Object.defineProperty(l.prototype, "writableBuffer", { enumerable: false, get: function() {
              return this._writableState && this._writableState.getBuffer();
            } }), Object.defineProperty(l.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
              return this._writableState.highWaterMark;
            } }), l.prototype._write = function(e2, t3, n3) {
              n3(new F("_write()"));
            }, l.prototype._writev = null, l.prototype.end = function(e2, t3, n3) {
              var r3 = this._writableState;
              return "function" == typeof e2 ? (n3 = e2, e2 = null, t3 = null) : "function" == typeof t3 && (n3 = t3, t3 = null), null !== e2 && void 0 !== e2 && this.write(e2, t3), r3.corked && (r3.corked = 1, this.uncork()), r3.ending || T(this, r3, n3), this;
            }, Object.defineProperty(l.prototype, "writableLength", { enumerable: false, get: function() {
              return this._writableState.length;
            } }), Object.defineProperty(l.prototype, "destroyed", { enumerable: false, get: function() {
              return void 0 !== this._writableState && this._writableState.destroyed;
            }, set: function(e2) {
              this._writableState && (this._writableState.destroyed = e2);
            } }), l.prototype.destroy = D2.destroy, l.prototype._undestroy = D2.undestroy, l.prototype._destroy = function(e2, t3) {
              t3(e2);
            };
          }).call(this);
        }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, { "../errors": 15, "./_stream_duplex": 16, "./internal/streams/destroy": 23, "./internal/streams/state": 27, "./internal/streams/stream": 28, _process: 12, buffer: 3, inherits: 10, "util-deprecate": 32 }], 21: [function(e, t2) {
        (function(n2) {
          (function() {
            "use strict";
            function r2(e2, t3, n3) {
              return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
            }
            function a(e2, t3) {
              return { value: e2, done: t3 };
            }
            function o(e2) {
              var t3 = e2[c];
              if (null !== t3) {
                var n3 = e2[h].read();
                null !== n3 && (e2[g] = null, e2[c] = null, e2[u] = null, t3(a(n3, false)));
              }
            }
            function i(e2) {
              n2.nextTick(o, e2);
            }
            function d(e2, t3) {
              return function(n3, r3) {
                e2.then(function() {
                  return t3[f] ? void n3(a(void 0, true)) : void t3[_](n3, r3);
                }, r3);
              };
            }
            var s2, l = e("./end-of-stream"), c = Symbol("lastResolve"), u = Symbol("lastReject"), p = Symbol("error"), f = Symbol("ended"), g = Symbol("lastPromise"), _ = Symbol("handlePromise"), h = Symbol("stream"), m = Object.getPrototypeOf(function() {
            }), b2 = Object.setPrototypeOf((s2 = { get stream() {
              return this[h];
            }, next: function() {
              var e2 = this, t3 = this[p];
              if (null !== t3) return Promise.reject(t3);
              if (this[f]) return Promise.resolve(a(void 0, true));
              if (this[h].destroyed) return new Promise(function(t4, r4) {
                n2.nextTick(function() {
                  e2[p] ? r4(e2[p]) : t4(a(void 0, true));
                });
              });
              var r3, o2 = this[g];
              if (o2) r3 = new Promise(d(o2, this));
              else {
                var i2 = this[h].read();
                if (null !== i2) return Promise.resolve(a(i2, false));
                r3 = new Promise(this[_]);
              }
              return this[g] = r3, r3;
            } }, r2(s2, Symbol.asyncIterator, function() {
              return this;
            }), r2(s2, "return", function() {
              var e2 = this;
              return new Promise(function(t3, n3) {
                e2[h].destroy(null, function(e3) {
                  return e3 ? void n3(e3) : void t3(a(void 0, true));
                });
              });
            }), s2), m);
            t2.exports = function(e2) {
              var t3, n3 = Object.create(b2, (t3 = {}, r2(t3, h, { value: e2, writable: true }), r2(t3, c, { value: null, writable: true }), r2(t3, u, { value: null, writable: true }), r2(t3, p, { value: null, writable: true }), r2(t3, f, { value: e2._readableState.endEmitted, writable: true }), r2(t3, _, { value: function(e3, t4) {
                var r3 = n3[h].read();
                r3 ? (n3[g] = null, n3[c] = null, n3[u] = null, e3(a(r3, false))) : (n3[c] = e3, n3[u] = t4);
              }, writable: true }), t3));
              return n3[g] = null, l(e2, function(e3) {
                if (e3 && "ERR_STREAM_PREMATURE_CLOSE" !== e3.code) {
                  var t4 = n3[u];
                  return null !== t4 && (n3[g] = null, n3[c] = null, n3[u] = null, t4(e3)), void (n3[p] = e3);
                }
                var r3 = n3[c];
                null !== r3 && (n3[g] = null, n3[c] = null, n3[u] = null, r3(a(void 0, true))), n3[f] = true;
              }), e2.on("readable", i.bind(null, n3)), n3;
            };
          }).call(this);
        }).call(this, e("_process"));
      }, { "./end-of-stream": 24, _process: 12 }], 22: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          var n3 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e2);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function r2(e2) {
          for (var t3, r3 = 1; r3 < arguments.length; r3++) t3 = null == arguments[r3] ? {} : arguments[r3], r3 % 2 ? n2(Object(t3), true).forEach(function(n3) {
            a(e2, n3, t3[n3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t3)) : n2(Object(t3)).forEach(function(n3) {
            Object.defineProperty(e2, n3, Object.getOwnPropertyDescriptor(t3, n3));
          });
          return e2;
        }
        function a(e2, t3, n3) {
          return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
        }
        function o(e2, t3) {
          if (!(e2 instanceof t3)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e2, t3) {
          for (var n3, r3 = 0; r3 < t3.length; r3++) n3 = t3[r3], n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e2, n3.key, n3);
        }
        function d(e2, t3, n3) {
          return t3 && i(e2.prototype, t3), n3 && i(e2, n3), e2;
        }
        function s2(e2, t3, n3) {
          u.prototype.copy.call(e2, t3, n3);
        }
        var l = e("buffer"), u = l.Buffer, p = e("util"), f = p.inspect, g = f && f.custom || "inspect";
        t2.exports = function() {
          function e2() {
            o(this, e2), this.head = null, this.tail = null, this.length = 0;
          }
          return d(e2, [{ key: "push", value: function(e3) {
            var t3 = { data: e3, next: null };
            0 < this.length ? this.tail.next = t3 : this.head = t3, this.tail = t3, ++this.length;
          } }, { key: "unshift", value: function(e3) {
            var t3 = { data: e3, next: this.head };
            0 === this.length && (this.tail = t3), this.head = t3, ++this.length;
          } }, { key: "shift", value: function() {
            if (0 !== this.length) {
              var e3 = this.head.data;
              return this.head = 1 === this.length ? this.tail = null : this.head.next, --this.length, e3;
            }
          } }, { key: "clear", value: function() {
            this.head = this.tail = null, this.length = 0;
          } }, { key: "join", value: function(e3) {
            if (0 === this.length) return "";
            for (var t3 = this.head, n3 = "" + t3.data; t3 = t3.next; ) n3 += e3 + t3.data;
            return n3;
          } }, { key: "concat", value: function(e3) {
            if (0 === this.length) return u.alloc(0);
            for (var t3 = u.allocUnsafe(e3 >>> 0), n3 = this.head, r3 = 0; n3; ) s2(n3.data, t3, r3), r3 += n3.data.length, n3 = n3.next;
            return t3;
          } }, { key: "consume", value: function(e3, t3) {
            var n3;
            return e3 < this.head.data.length ? (n3 = this.head.data.slice(0, e3), this.head.data = this.head.data.slice(e3)) : e3 === this.head.data.length ? n3 = this.shift() : n3 = t3 ? this._getString(e3) : this._getBuffer(e3), n3;
          } }, { key: "first", value: function() {
            return this.head.data;
          } }, { key: "_getString", value: function(e3) {
            var t3 = this.head, r3 = 1, a2 = t3.data;
            for (e3 -= a2.length; t3 = t3.next; ) {
              var o2 = t3.data, i2 = e3 > o2.length ? o2.length : e3;
              if (a2 += i2 === o2.length ? o2 : o2.slice(0, e3), e3 -= i2, 0 === e3) {
                i2 === o2.length ? (++r3, this.head = t3.next ? t3.next : this.tail = null) : (this.head = t3, t3.data = o2.slice(i2));
                break;
              }
              ++r3;
            }
            return this.length -= r3, a2;
          } }, { key: "_getBuffer", value: function(e3) {
            var t3 = u.allocUnsafe(e3), r3 = this.head, a2 = 1;
            for (r3.data.copy(t3), e3 -= r3.data.length; r3 = r3.next; ) {
              var o2 = r3.data, i2 = e3 > o2.length ? o2.length : e3;
              if (o2.copy(t3, t3.length - e3, 0, i2), e3 -= i2, 0 === e3) {
                i2 === o2.length ? (++a2, this.head = r3.next ? r3.next : this.tail = null) : (this.head = r3, r3.data = o2.slice(i2));
                break;
              }
              ++a2;
            }
            return this.length -= a2, t3;
          } }, { key: g, value: function(e3, t3) {
            return f(this, r2({}, t3, { depth: 0, customInspect: false }));
          } }]), e2;
        }();
      }, { buffer: 3, util: 2 }], 23: [function(e, t2) {
        (function(e2) {
          (function() {
            "use strict";
            function n2(e3, t3) {
              a(e3, t3), r2(e3);
            }
            function r2(e3) {
              e3._writableState && !e3._writableState.emitClose || e3._readableState && !e3._readableState.emitClose || e3.emit("close");
            }
            function a(e3, t3) {
              e3.emit("error", t3);
            }
            t2.exports = { destroy: function(t3, o) {
              var i = this, d = this._readableState && this._readableState.destroyed, s2 = this._writableState && this._writableState.destroyed;
              return d || s2 ? (o ? o(t3) : t3 && (this._writableState ? !this._writableState.errorEmitted && (this._writableState.errorEmitted = true, e2.nextTick(a, this, t3)) : e2.nextTick(a, this, t3)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t3 || null, function(t4) {
                !o && t4 ? i._writableState ? i._writableState.errorEmitted ? e2.nextTick(r2, i) : (i._writableState.errorEmitted = true, e2.nextTick(n2, i, t4)) : e2.nextTick(n2, i, t4) : o ? (e2.nextTick(r2, i), o(t4)) : e2.nextTick(r2, i);
              }), this);
            }, undestroy: function() {
              this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
            }, errorOrDestroy: function(e3, t3) {
              var n3 = e3._readableState, r3 = e3._writableState;
              n3 && n3.autoDestroy || r3 && r3.autoDestroy ? e3.destroy(t3) : e3.emit("error", t3);
            } };
          }).call(this);
        }).call(this, e("_process"));
      }, { _process: 12 }], 24: [function(e, t2) {
        "use strict";
        function n2(e2) {
          var t3 = false;
          return function() {
            if (!t3) {
              t3 = true;
              for (var n3 = arguments.length, r3 = Array(n3), a2 = 0; a2 < n3; a2++) r3[a2] = arguments[a2];
              e2.apply(this, r3);
            }
          };
        }
        function r2() {
        }
        function a(e2) {
          return e2.setHeader && "function" == typeof e2.abort;
        }
        function o(e2, t3, d) {
          if ("function" == typeof t3) return o(e2, null, t3);
          t3 || (t3 = {}), d = n2(d || r2);
          var s2 = t3.readable || false !== t3.readable && e2.readable, l = t3.writable || false !== t3.writable && e2.writable, c = function() {
            e2.writable || p();
          }, u = e2._writableState && e2._writableState.finished, p = function() {
            l = false, u = true, s2 || d.call(e2);
          }, f = e2._readableState && e2._readableState.endEmitted, g = function() {
            s2 = false, f = true, l || d.call(e2);
          }, _ = function(t4) {
            d.call(e2, t4);
          }, h = function() {
            var t4;
            return s2 && !f ? (e2._readableState && e2._readableState.ended || (t4 = new i()), d.call(e2, t4)) : l && !u ? (e2._writableState && e2._writableState.ended || (t4 = new i()), d.call(e2, t4)) : void 0;
          }, m = function() {
            e2.req.on("finish", p);
          };
          return a(e2) ? (e2.on("complete", p), e2.on("abort", h), e2.req ? m() : e2.on("request", m)) : l && !e2._writableState && (e2.on("end", c), e2.on("close", c)), e2.on("end", g), e2.on("finish", p), false !== t3.error && e2.on("error", _), e2.on("close", h), function() {
            e2.removeListener("complete", p), e2.removeListener("abort", h), e2.removeListener("request", m), e2.req && e2.req.removeListener("finish", p), e2.removeListener("end", c), e2.removeListener("close", c), e2.removeListener("finish", p), e2.removeListener("end", g), e2.removeListener("error", _), e2.removeListener("close", h);
          };
        }
        var i = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;
        t2.exports = o;
      }, { "../../../errors": 15 }], 25: [function(e, t2) {
        t2.exports = function() {
          throw new Error("Readable.from is not available in the browser");
        };
      }, {}], 26: [function(e, t2) {
        "use strict";
        function n2(e2) {
          var t3 = false;
          return function() {
            t3 || (t3 = true, e2.apply(void 0, arguments));
          };
        }
        function r2(e2) {
          if (e2) throw e2;
        }
        function a(e2) {
          return e2.setHeader && "function" == typeof e2.abort;
        }
        function o(t3, r3, o2, i2) {
          i2 = n2(i2);
          var d2 = false;
          t3.on("close", function() {
            d2 = true;
          }), l === void 0 && (l = e("./end-of-stream")), l(t3, { readable: r3, writable: o2 }, function(e2) {
            return e2 ? i2(e2) : void (d2 = true, i2());
          });
          var s3 = false;
          return function(e2) {
            if (!d2) return s3 ? void 0 : (s3 = true, a(t3) ? t3.abort() : "function" == typeof t3.destroy ? t3.destroy() : void i2(e2 || new p("pipe")));
          };
        }
        function i(e2) {
          e2();
        }
        function d(e2, t3) {
          return e2.pipe(t3);
        }
        function s2(e2) {
          return e2.length ? "function" == typeof e2[e2.length - 1] ? e2.pop() : r2 : r2;
        }
        var l, c = e("../../../errors").codes, u = c.ERR_MISSING_ARGS, p = c.ERR_STREAM_DESTROYED;
        t2.exports = function() {
          for (var e2 = arguments.length, t3 = Array(e2), n3 = 0; n3 < e2; n3++) t3[n3] = arguments[n3];
          var r3 = s2(t3);
          if (Array.isArray(t3[0]) && (t3 = t3[0]), 2 > t3.length) throw new u("streams");
          var a2, l2 = t3.map(function(e3, n4) {
            var d2 = n4 < t3.length - 1;
            return o(e3, d2, 0 < n4, function(e4) {
              a2 || (a2 = e4), e4 && l2.forEach(i), d2 || (l2.forEach(i), r3(a2));
            });
          });
          return t3.reduce(d);
        };
      }, { "../../../errors": 15, "./end-of-stream": 24 }], 27: [function(e, n2) {
        "use strict";
        function r2(e2, t2, n3) {
          return null == e2.highWaterMark ? t2 ? e2[n3] : null : e2.highWaterMark;
        }
        var a = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
        n2.exports = { getHighWaterMark: function(e2, n3, o, i) {
          var d = r2(n3, i, o);
          if (null != d) {
            if (!(isFinite(d) && t(d) === d) || 0 > d) {
              var s2 = i ? o : "highWaterMark";
              throw new a(s2, d);
            }
            return t(d);
          }
          return e2.objectMode ? 16 : 16384;
        } };
      }, { "../../../errors": 15 }], 28: [function(e, t2) {
        t2.exports = e("events").EventEmitter;
      }, { events: 7 }], 29: [function(e, t2, n2) {
        n2 = t2.exports = e("./lib/_stream_readable.js"), n2.Stream = n2, n2.Readable = n2, n2.Writable = e("./lib/_stream_writable.js"), n2.Duplex = e("./lib/_stream_duplex.js"), n2.Transform = e("./lib/_stream_transform.js"), n2.PassThrough = e("./lib/_stream_passthrough.js"), n2.finished = e("./lib/internal/streams/end-of-stream.js"), n2.pipeline = e("./lib/internal/streams/pipeline.js");
      }, { "./lib/_stream_duplex.js": 16, "./lib/_stream_passthrough.js": 17, "./lib/_stream_readable.js": 18, "./lib/_stream_transform.js": 19, "./lib/_stream_writable.js": 20, "./lib/internal/streams/end-of-stream.js": 24, "./lib/internal/streams/pipeline.js": 26 }], 30: [function(e, t2, n2) {
        function r2(e2, t3) {
          for (var n3 in e2) t3[n3] = e2[n3];
        }
        function a(e2, t3, n3) {
          return i(e2, t3, n3);
        }
        var o = e("buffer"), i = o.Buffer;
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t2.exports = o : (r2(o, n2), n2.Buffer = a), a.prototype = Object.create(i.prototype), r2(i, a), a.from = function(e2, t3, n3) {
          if ("number" == typeof e2) throw new TypeError("Argument must not be a number");
          return i(e2, t3, n3);
        }, a.alloc = function(e2, t3, n3) {
          if ("number" != typeof e2) throw new TypeError("Argument must be a number");
          var r3 = i(e2);
          return void 0 === t3 ? r3.fill(0) : "string" == typeof n3 ? r3.fill(t3, n3) : r3.fill(t3), r3;
        }, a.allocUnsafe = function(e2) {
          if ("number" != typeof e2) throw new TypeError("Argument must be a number");
          return i(e2);
        }, a.allocUnsafeSlow = function(e2) {
          if ("number" != typeof e2) throw new TypeError("Argument must be a number");
          return o.SlowBuffer(e2);
        };
      }, { buffer: 3 }], 31: [function(e, t2, n2) {
        "use strict";
        function r2(e2) {
          if (!e2) return "utf8";
          for (var t3; ; ) switch (e2) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return e2;
            default:
              if (t3) return;
              e2 = ("" + e2).toLowerCase(), t3 = true;
          }
        }
        function a(e2) {
          var t3 = r2(e2);
          if ("string" != typeof t3 && (m.isEncoding === b2 || !b2(e2))) throw new Error("Unknown encoding: " + e2);
          return t3 || e2;
        }
        function o(e2) {
          this.encoding = a(e2);
          var t3;
          switch (this.encoding) {
            case "utf16le":
              this.text = u, this.end = p, t3 = 4;
              break;
            case "utf8":
              this.fillLast = c, t3 = 4;
              break;
            case "base64":
              this.text = f, this.end = g, t3 = 3;
              break;
            default:
              return this.write = _, void (this.end = h);
          }
          this.lastNeed = 0, this.lastTotal = 0, this.lastChar = m.allocUnsafe(t3);
        }
        function d(e2) {
          if (127 >= e2) return 0;
          return 6 == e2 >> 5 ? 2 : 14 == e2 >> 4 ? 3 : 30 == e2 >> 3 ? 4 : 2 == e2 >> 6 ? -1 : -2;
        }
        function s2(e2, t3, n3) {
          var r3 = t3.length - 1;
          if (r3 < n3) return 0;
          var a2 = d(t3[r3]);
          return 0 <= a2 ? (0 < a2 && (e2.lastNeed = a2 - 1), a2) : --r3 < n3 || -2 === a2 ? 0 : (a2 = d(t3[r3]), 0 <= a2) ? (0 < a2 && (e2.lastNeed = a2 - 2), a2) : --r3 < n3 || -2 === a2 ? 0 : (a2 = d(t3[r3]), 0 <= a2 ? (0 < a2 && (2 === a2 ? a2 = 0 : e2.lastNeed = a2 - 3), a2) : 0);
        }
        function l(e2, t3) {
          if (128 != (192 & t3[0])) return e2.lastNeed = 0, "\uFFFD";
          if (1 < e2.lastNeed && 1 < t3.length) {
            if (128 != (192 & t3[1])) return e2.lastNeed = 1, "\uFFFD";
            if (2 < e2.lastNeed && 2 < t3.length && 128 != (192 & t3[2])) return e2.lastNeed = 2, "\uFFFD";
          }
        }
        function c(e2) {
          var t3 = this.lastTotal - this.lastNeed, n3 = l(this, e2, t3);
          return void 0 === n3 ? this.lastNeed <= e2.length ? (e2.copy(this.lastChar, t3, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (e2.copy(this.lastChar, t3, 0, e2.length), this.lastNeed -= e2.length) : n3;
        }
        function u(e2, t3) {
          if (0 == (e2.length - t3) % 2) {
            var n3 = e2.toString("utf16le", t3);
            if (n3) {
              var r3 = n3.charCodeAt(n3.length - 1);
              if (55296 <= r3 && 56319 >= r3) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e2[e2.length - 2], this.lastChar[1] = e2[e2.length - 1], n3.slice(0, -1);
            }
            return n3;
          }
          return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e2[e2.length - 1], e2.toString("utf16le", t3, e2.length - 1);
        }
        function p(e2) {
          var t3 = e2 && e2.length ? this.write(e2) : "";
          if (this.lastNeed) {
            var n3 = this.lastTotal - this.lastNeed;
            return t3 + this.lastChar.toString("utf16le", 0, n3);
          }
          return t3;
        }
        function f(e2, t3) {
          var r3 = (e2.length - t3) % 3;
          return 0 == r3 ? e2.toString("base64", t3) : (this.lastNeed = 3 - r3, this.lastTotal = 3, 1 == r3 ? this.lastChar[0] = e2[e2.length - 1] : (this.lastChar[0] = e2[e2.length - 2], this.lastChar[1] = e2[e2.length - 1]), e2.toString("base64", t3, e2.length - r3));
        }
        function g(e2) {
          var t3 = e2 && e2.length ? this.write(e2) : "";
          return this.lastNeed ? t3 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t3;
        }
        function _(e2) {
          return e2.toString(this.encoding);
        }
        function h(e2) {
          return e2 && e2.length ? this.write(e2) : "";
        }
        var m = e("safe-buffer").Buffer, b2 = m.isEncoding || function(e2) {
          switch (e2 = "" + e2, e2 && e2.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return true;
            default:
              return false;
          }
        };
        n2.StringDecoder = o, o.prototype.write = function(e2) {
          if (0 === e2.length) return "";
          var t3, n3;
          if (this.lastNeed) {
            if (t3 = this.fillLast(e2), void 0 === t3) return "";
            n3 = this.lastNeed, this.lastNeed = 0;
          } else n3 = 0;
          return n3 < e2.length ? t3 ? t3 + this.text(e2, n3) : this.text(e2, n3) : t3 || "";
        }, o.prototype.end = function(e2) {
          var t3 = e2 && e2.length ? this.write(e2) : "";
          return this.lastNeed ? t3 + "\uFFFD" : t3;
        }, o.prototype.text = function(e2, t3) {
          var n3 = s2(this, e2, t3);
          if (!this.lastNeed) return e2.toString("utf8", t3);
          this.lastTotal = n3;
          var r3 = e2.length - (n3 - this.lastNeed);
          return e2.copy(this.lastChar, 0, r3), e2.toString("utf8", t3, r3);
        }, o.prototype.fillLast = function(e2) {
          return this.lastNeed <= e2.length ? (e2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (e2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e2.length), this.lastNeed -= e2.length);
        };
      }, { "safe-buffer": 30 }], 32: [function(e, t2) {
        (function(e2) {
          (function() {
            function n2(t3) {
              try {
                if (!e2.localStorage) return false;
              } catch (e3) {
                return false;
              }
              var n3 = e2.localStorage[t3];
              return null != n3 && "true" === (n3 + "").toLowerCase();
            }
            t2.exports = function(e3, t3) {
              function r2() {
                if (!a) {
                  if (n2("throwDeprecation")) throw new Error(t3);
                  else n2("traceDeprecation") ? console.trace(t3) : console.warn(t3);
                  a = true;
                }
                return e3.apply(this, arguments);
              }
              if (n2("noDeprecation")) return e3;
              var a = false;
              return r2;
            };
          }).call(this);
        }).call(this, "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, {}], "/": [function(e, t2) {
        function n2(e2) {
          return e2.replace(/a=ice-options:trickle\s\n/g, "");
        }
        function r2(e2) {
          console.warn(e2);
        }
        const a = e("debug")("simple-peer"), o = e("get-browser-rtc"), i = e("randombytes"), d = e("readable-stream"), s2 = e("queue-microtask"), l = e("err-code"), { Buffer: c } = e("buffer"), u = 65536;
        class p extends d.Duplex {
          constructor(e2) {
            if (e2 = Object.assign({ allowHalfOpen: false }, e2), super(e2), this._id = i(4).toString("hex").slice(0, 7), this._debug("new peer %o", e2), this.channelName = e2.initiator ? e2.channelName || i(20).toString("hex") : null, this.initiator = e2.initiator || false, this.channelConfig = e2.channelConfig || p.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, p.config, e2.config), this.offerOptions = e2.offerOptions || {}, this.answerOptions = e2.answerOptions || {}, this.sdpTransform = e2.sdpTransform || ((e3) => e3), this.streams = e2.streams || (e2.stream ? [e2.stream] : []), this.trickle = void 0 === e2.trickle || e2.trickle, this.allowHalfTrickle = void 0 !== e2.allowHalfTrickle && e2.allowHalfTrickle, this.iceCompleteTimeout = e2.iceCompleteTimeout || 5e3, this.destroyed = false, this.destroying = false, this._connected = false, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, this._wrtc = e2.wrtc && "object" == typeof e2.wrtc ? e2.wrtc : o(), !this._wrtc) if ("undefined" == typeof window) throw l(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT");
            else throw l(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
            this._pcReady = false, this._channelReady = false, this._iceComplete = false, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = false, this._firstNegotiation = true, this._batchedNegotiation = false, this._queuedNegotiation = false, this._sendersAwaitingStable = [], this._senderMap = /* @__PURE__ */ new Map(), this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
            try {
              this._pc = new this._wrtc.RTCPeerConnection(this.config);
            } catch (e3) {
              return void this.destroy(l(e3, "ERR_PC_CONSTRUCTOR"));
            }
            this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId, this._pc.oniceconnectionstatechange = () => {
              this._onIceStateChange();
            }, this._pc.onicegatheringstatechange = () => {
              this._onIceStateChange();
            }, this._pc.onconnectionstatechange = () => {
              this._onConnectionStateChange();
            }, this._pc.onsignalingstatechange = () => {
              this._onSignalingStateChange();
            }, this._pc.onicecandidate = (e3) => {
              this._onIceCandidate(e3);
            }, "object" == typeof this._pc.peerIdentity && this._pc.peerIdentity.catch((e3) => {
              this.destroy(l(e3, "ERR_PC_PEER_IDENTITY"));
            }), this.initiator || this.channelNegotiated ? this._setupData({ channel: this._pc.createDataChannel(this.channelName, this.channelConfig) }) : this._pc.ondatachannel = (e3) => {
              this._setupData(e3);
            }, this.streams && this.streams.forEach((e3) => {
              this.addStream(e3);
            }), this._pc.ontrack = (e3) => {
              this._onTrack(e3);
            }, this._debug("initial negotiation"), this._needsNegotiation(), this._onFinishBound = () => {
              this._onFinish();
            }, this.once("finish", this._onFinishBound);
          }
          get bufferSize() {
            return this._channel && this._channel.bufferedAmount || 0;
          }
          get connected() {
            return this._connected && "open" === this._channel.readyState;
          }
          address() {
            return { port: this.localPort, family: this.localFamily, address: this.localAddress };
          }
          signal(e2) {
            if (!this.destroying) {
              if (this.destroyed) throw l(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
              if ("string" == typeof e2) try {
                e2 = JSON.parse(e2);
              } catch (t3) {
                e2 = {};
              }
              this._debug("signal()"), e2.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()), e2.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), this.addTransceiver(e2.transceiverRequest.kind, e2.transceiverRequest.init)), e2.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(e2.candidate) : this._pendingCandidates.push(e2.candidate)), e2.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e2)).then(() => {
                this.destroyed || (this._pendingCandidates.forEach((e3) => {
                  this._addIceCandidate(e3);
                }), this._pendingCandidates = [], "offer" === this._pc.remoteDescription.type && this._createAnswer());
              }).catch((e3) => {
                this.destroy(l(e3, "ERR_SET_REMOTE_DESCRIPTION"));
              }), e2.sdp || e2.candidate || e2.renegotiate || e2.transceiverRequest || this.destroy(l(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
            }
          }
          _addIceCandidate(e2) {
            const t3 = new this._wrtc.RTCIceCandidate(e2);
            this._pc.addIceCandidate(t3).catch((e3) => {
              !t3.address || t3.address.endsWith(".local") ? r2("Ignoring unsupported ICE candidate.") : this.destroy(l(e3, "ERR_ADD_ICE_CANDIDATE"));
            });
          }
          send(e2) {
            if (!this.destroying) {
              if (this.destroyed) throw l(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
              this._channel.send(e2);
            }
          }
          addTransceiver(e2, t3) {
            if (!this.destroying) {
              if (this.destroyed) throw l(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
              if (this._debug("addTransceiver()"), this.initiator) try {
                this._pc.addTransceiver(e2, t3), this._needsNegotiation();
              } catch (e3) {
                this.destroy(l(e3, "ERR_ADD_TRANSCEIVER"));
              }
              else this.emit("signal", { type: "transceiverRequest", transceiverRequest: { kind: e2, init: t3 } });
            }
          }
          addStream(e2) {
            if (!this.destroying) {
              if (this.destroyed) throw l(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
              this._debug("addStream()"), e2.getTracks().forEach((t3) => {
                this.addTrack(t3, e2);
              });
            }
          }
          addTrack(e2, t3) {
            if (this.destroying) return;
            if (this.destroyed) throw l(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
            this._debug("addTrack()");
            const n3 = this._senderMap.get(e2) || /* @__PURE__ */ new Map();
            let r3 = n3.get(t3);
            if (!r3) r3 = this._pc.addTrack(e2, t3), n3.set(t3, r3), this._senderMap.set(e2, n3), this._needsNegotiation();
            else if (r3.removed) throw l(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED");
            else throw l(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
          }
          replaceTrack(e2, t3, n3) {
            if (this.destroying) return;
            if (this.destroyed) throw l(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
            this._debug("replaceTrack()");
            const r3 = this._senderMap.get(e2), a2 = r3 ? r3.get(n3) : null;
            if (!a2) throw l(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
            t3 && this._senderMap.set(t3, r3), null == a2.replaceTrack ? this.destroy(l(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK")) : a2.replaceTrack(t3);
          }
          removeTrack(e2, t3) {
            if (this.destroying) return;
            if (this.destroyed) throw l(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
            this._debug("removeSender()");
            const n3 = this._senderMap.get(e2), r3 = n3 ? n3.get(t3) : null;
            if (!r3) throw l(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
            try {
              r3.removed = true, this._pc.removeTrack(r3);
            } catch (e3) {
              "NS_ERROR_UNEXPECTED" === e3.name ? this._sendersAwaitingStable.push(r3) : this.destroy(l(e3, "ERR_REMOVE_TRACK"));
            }
            this._needsNegotiation();
          }
          removeStream(e2) {
            if (!this.destroying) {
              if (this.destroyed) throw l(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
              this._debug("removeSenders()"), e2.getTracks().forEach((t3) => {
                this.removeTrack(t3, e2);
              });
            }
          }
          _needsNegotiation() {
            this._debug("_needsNegotiation"), this._batchedNegotiation || (this._batchedNegotiation = true, s2(() => {
              this._batchedNegotiation = false, this.initiator || !this._firstNegotiation ? (this._debug("starting batched negotiation"), this.negotiate()) : this._debug("non-initiator initial negotiation request discarded"), this._firstNegotiation = false;
            }));
          }
          negotiate() {
            if (!this.destroying) {
              if (this.destroyed) throw l(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
              this.initiator ? this._isNegotiating ? (this._queuedNegotiation = true, this._debug("already negotiating, queueing")) : (this._debug("start negotiation"), setTimeout(() => {
                this._createOffer();
              }, 0)) : this._isNegotiating ? (this._queuedNegotiation = true, this._debug("already negotiating, queueing")) : (this._debug("requesting negotiation from initiator"), this.emit("signal", { type: "renegotiate", renegotiate: true })), this._isNegotiating = true;
            }
          }
          destroy(e2) {
            this._destroy(e2, () => {
            });
          }
          _destroy(e2, t3) {
            this.destroyed || this.destroying || (this.destroying = true, this._debug("destroying (error: %s)", e2 && (e2.message || e2)), s2(() => {
              if (this.destroyed = true, this.destroying = false, this._debug("destroy (error: %s)", e2 && (e2.message || e2)), this.readable = this.writable = false, this._readableState.ended || this.push(null), this._writableState.finished || this.end(), this._connected = false, this._pcReady = false, this._channelReady = false, this._remoteTracks = null, this._remoteStreams = null, this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._onFinishBound && this.removeListener("finish", this._onFinishBound), this._onFinishBound = null, this._channel) {
                try {
                  this._channel.close();
                } catch (e3) {
                }
                this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, this._channel.onerror = null;
              }
              if (this._pc) {
                try {
                  this._pc.close();
                } catch (e3) {
                }
                this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, this._pc.ondatachannel = null;
              }
              this._pc = null, this._channel = null, e2 && this.emit("error", e2), this.emit("close"), t3();
            }));
          }
          _setupData(e2) {
            if (!e2.channel) return this.destroy(l(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
            this._channel = e2.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = u), this.channelName = this._channel.label, this._channel.onmessage = (e3) => {
              this._onChannelMessage(e3);
            }, this._channel.onbufferedamountlow = () => {
              this._onChannelBufferedAmountLow();
            }, this._channel.onopen = () => {
              this._onChannelOpen();
            }, this._channel.onclose = () => {
              this._onChannelClose();
            }, this._channel.onerror = (e3) => {
              const t4 = e3.error instanceof Error ? e3.error : new Error(`Datachannel error: ${e3.message} ${e3.filename}:${e3.lineno}:${e3.colno}`);
              this.destroy(l(t4, "ERR_DATA_CHANNEL"));
            };
            let t3 = false;
            this._closingInterval = setInterval(() => {
              this._channel && "closing" === this._channel.readyState ? (t3 && this._onChannelClose(), t3 = true) : t3 = false;
            }, 5e3);
          }
          _read() {
          }
          _write(e2, t3, n3) {
            if (this.destroyed) return n3(l(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
            if (this._connected) {
              try {
                this.send(e2);
              } catch (e3) {
                return this.destroy(l(e3, "ERR_DATA_CHANNEL"));
              }
              this._channel.bufferedAmount > u ? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), this._cb = n3) : n3(null);
            } else this._debug("write before connect"), this._chunk = e2, this._cb = n3;
          }
          _onFinish() {
            if (!this.destroyed) {
              const e2 = () => {
                setTimeout(() => this.destroy(), 1e3);
              };
              this._connected ? e2() : this.once("connect", e2);
            }
          }
          _startIceCompleteTimeout() {
            this.destroyed || this._iceCompleteTimer || (this._debug("started iceComplete timeout"), this._iceCompleteTimer = setTimeout(() => {
              this._iceComplete || (this._iceComplete = true, this._debug("iceComplete timeout completed"), this.emit("iceTimeout"), this.emit("_iceComplete"));
            }, this.iceCompleteTimeout));
          }
          _createOffer() {
            this.destroyed || this._pc.createOffer(this.offerOptions).then((e2) => {
              if (this.destroyed) return;
              this.trickle || this.allowHalfTrickle || (e2.sdp = n2(e2.sdp)), e2.sdp = this.sdpTransform(e2.sdp);
              const t3 = () => {
                if (!this.destroyed) {
                  const t4 = this._pc.localDescription || e2;
                  this._debug("signal"), this.emit("signal", { type: t4.type, sdp: t4.sdp });
                }
              };
              this._pc.setLocalDescription(e2).then(() => {
                this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? t3() : this.once("_iceComplete", t3));
              }).catch((e3) => {
                this.destroy(l(e3, "ERR_SET_LOCAL_DESCRIPTION"));
              });
            }).catch((e2) => {
              this.destroy(l(e2, "ERR_CREATE_OFFER"));
            });
          }
          _requestMissingTransceivers() {
            this._pc.getTransceivers && this._pc.getTransceivers().forEach((e2) => {
              e2.mid || !e2.sender.track || e2.requested || (e2.requested = true, this.addTransceiver(e2.sender.track.kind));
            });
          }
          _createAnswer() {
            this.destroyed || this._pc.createAnswer(this.answerOptions).then((e2) => {
              if (this.destroyed) return;
              this.trickle || this.allowHalfTrickle || (e2.sdp = n2(e2.sdp)), e2.sdp = this.sdpTransform(e2.sdp);
              const t3 = () => {
                if (!this.destroyed) {
                  const t4 = this._pc.localDescription || e2;
                  this._debug("signal"), this.emit("signal", { type: t4.type, sdp: t4.sdp }), this.initiator || this._requestMissingTransceivers();
                }
              };
              this._pc.setLocalDescription(e2).then(() => {
                this.destroyed || (this.trickle || this._iceComplete ? t3() : this.once("_iceComplete", t3));
              }).catch((e3) => {
                this.destroy(l(e3, "ERR_SET_LOCAL_DESCRIPTION"));
              });
            }).catch((e2) => {
              this.destroy(l(e2, "ERR_CREATE_ANSWER"));
            });
          }
          _onConnectionStateChange() {
            this.destroyed || "failed" === this._pc.connectionState && this.destroy(l(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
          }
          _onIceStateChange() {
            if (this.destroyed) return;
            const e2 = this._pc.iceConnectionState, t3 = this._pc.iceGatheringState;
            this._debug("iceStateChange (connection: %s) (gathering: %s)", e2, t3), this.emit("iceStateChange", e2, t3), ("connected" === e2 || "completed" === e2) && (this._pcReady = true, this._maybeReady()), "failed" === e2 && this.destroy(l(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === e2 && this.destroy(l(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
          }
          getStats(e2) {
            const t3 = (e3) => ("[object Array]" === Object.prototype.toString.call(e3.values) && e3.values.forEach((t4) => {
              Object.assign(e3, t4);
            }), e3);
            0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((n3) => {
              const r3 = [];
              n3.forEach((e3) => {
                r3.push(t3(e3));
              }), e2(null, r3);
            }, (t4) => e2(t4)) : 0 < this._pc.getStats.length ? this._pc.getStats((n3) => {
              if (this.destroyed) return;
              const r3 = [];
              n3.result().forEach((e3) => {
                const n4 = {};
                e3.names().forEach((t4) => {
                  n4[t4] = e3.stat(t4);
                }), n4.id = e3.id, n4.type = e3.type, n4.timestamp = e3.timestamp, r3.push(t3(n4));
              }), e2(null, r3);
            }, (t4) => e2(t4)) : e2(null, []);
          }
          _maybeReady() {
            if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
            this._connecting = true;
            const e2 = () => {
              this.destroyed || this.getStats((t3, n3) => {
                if (this.destroyed) return;
                t3 && (n3 = []);
                const r3 = {}, a2 = {}, o2 = {};
                let i2 = false;
                n3.forEach((e3) => {
                  ("remotecandidate" === e3.type || "remote-candidate" === e3.type) && (r3[e3.id] = e3), ("localcandidate" === e3.type || "local-candidate" === e3.type) && (a2[e3.id] = e3), ("candidatepair" === e3.type || "candidate-pair" === e3.type) && (o2[e3.id] = e3);
                });
                const d2 = (e3) => {
                  i2 = true;
                  let t4 = a2[e3.localCandidateId];
                  t4 && (t4.ip || t4.address) ? (this.localAddress = t4.ip || t4.address, this.localPort = +t4.port) : t4 && t4.ipAddress ? (this.localAddress = t4.ipAddress, this.localPort = +t4.portNumber) : "string" == typeof e3.googLocalAddress && (t4 = e3.googLocalAddress.split(":"), this.localAddress = t4[0], this.localPort = +t4[1]), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                  let n4 = r3[e3.remoteCandidateId];
                  n4 && (n4.ip || n4.address) ? (this.remoteAddress = n4.ip || n4.address, this.remotePort = +n4.port) : n4 && n4.ipAddress ? (this.remoteAddress = n4.ipAddress, this.remotePort = +n4.portNumber) : "string" == typeof e3.googRemoteAddress && (n4 = e3.googRemoteAddress.split(":"), this.remoteAddress = n4[0], this.remotePort = +n4[1]), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
                };
                if (n3.forEach((e3) => {
                  "transport" === e3.type && e3.selectedCandidatePairId && d2(o2[e3.selectedCandidatePairId]), ("googCandidatePair" === e3.type && "true" === e3.googActiveConnection || ("candidatepair" === e3.type || "candidate-pair" === e3.type) && e3.selected) && d2(e3);
                }), !i2 && (!Object.keys(o2).length || Object.keys(a2).length)) return void setTimeout(e2, 100);
                if (this._connecting = false, this._connected = true, this._chunk) {
                  try {
                    this.send(this._chunk);
                  } catch (e4) {
                    return this.destroy(l(e4, "ERR_DATA_CHANNEL"));
                  }
                  this._chunk = null, this._debug('sent chunk from "write before connect"');
                  const e3 = this._cb;
                  this._cb = null, e3(null);
                }
                "number" != typeof this._channel.bufferedAmountLowThreshold && (this._interval = setInterval(() => this._onInterval(), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect");
              });
            };
            e2();
          }
          _onInterval() {
            this._cb && this._channel && !(this._channel.bufferedAmount > u) && this._onChannelBufferedAmountLow();
          }
          _onSignalingStateChange() {
            this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = false, this._debug("flushing sender queue", this._sendersAwaitingStable), this._sendersAwaitingStable.forEach((e2) => {
              this._pc.removeTrack(e2), this._queuedNegotiation = true;
            }), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._debug("flushing negotiation queue"), this._queuedNegotiation = false, this._needsNegotiation()) : (this._debug("negotiated"), this.emit("negotiated"))), this._debug("signalingStateChange %s", this._pc.signalingState), this.emit("signalingStateChange", this._pc.signalingState));
          }
          _onIceCandidate(e2) {
            this.destroyed || (e2.candidate && this.trickle ? this.emit("signal", { type: "candidate", candidate: { candidate: e2.candidate.candidate, sdpMLineIndex: e2.candidate.sdpMLineIndex, sdpMid: e2.candidate.sdpMid } }) : !e2.candidate && !this._iceComplete && (this._iceComplete = true, this.emit("_iceComplete")), e2.candidate && this._startIceCompleteTimeout());
          }
          _onChannelMessage(e2) {
            if (this.destroyed) return;
            let t3 = e2.data;
            t3 instanceof ArrayBuffer && (t3 = c.from(t3)), this.push(t3);
          }
          _onChannelBufferedAmountLow() {
            if (!this.destroyed && this._cb) {
              this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
              const e2 = this._cb;
              this._cb = null, e2(null);
            }
          }
          _onChannelOpen() {
            this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = true, this._maybeReady());
          }
          _onChannelClose() {
            this.destroyed || (this._debug("on channel close"), this.destroy());
          }
          _onTrack(e2) {
            this.destroyed || e2.streams.forEach((t3) => {
              this._debug("on track"), this.emit("track", e2.track, t3), this._remoteTracks.push({ track: e2.track, stream: t3 }), this._remoteStreams.some((e3) => e3.id === t3.id) || (this._remoteStreams.push(t3), s2(() => {
                this._debug("on stream"), this.emit("stream", t3);
              }));
            });
          }
          _debug() {
            const e2 = [].slice.call(arguments);
            e2[0] = "[" + this._id + "] " + e2[0], a.apply(null, e2);
          }
        }
        p.WEBRTC_SUPPORT = !!o(), p.config = { iceServers: [{ urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"] }], sdpSemantics: "unified-plan" }, p.channelConfig = {}, t2.exports = p;
      }, { buffer: 3, debug: 4, "err-code": 6, "get-browser-rtc": 8, "queue-microtask": 13, randombytes: 14, "readable-stream": 29 }] }, {}, [])("/");
    });
  }
});

// .svelte-kit/output/server/chunks/attributes.js
function attr(name3, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name3 === "class") return "";
  const normalized = name3 in replacements2 && replacements2[name3].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html2(normalized, true)}"`;
  return ` ${name3}${assignment}`;
}
var replacements2;
var init_attributes = __esm({
  ".svelte-kit/output/server/chunks/attributes.js"() {
    init_escaping();
    init_clsx();
    replacements2 = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => _page
});
function Lobby($$payload, $$props) {
  push();
  let name3 = "";
  let roomId = "";
  let status = "";
  function statusText($$payload2, showOnStatus, text2, color) {
    $$payload2.out += `<span${attr("style", `color:${stringify(color)}`)}${attr("class", `svelte-ck75xv ${stringify([status !== showOnStatus ? "hide" : ""].filter(Boolean).join(" "))}`)}>${escape_html2(text2)}</span>`;
  }
  $$payload.out += `<div class="grid svelte-ck75xv"><h1 class="wide svelte-ck75xv">MyGo \u5EDA\u623F</h1> <p class="wide svelte-ck75xv">\u540D\u7A31 `;
  statusText($$payload, "name_taken", "\u5DF2\u5B58\u5728", "red");
  $$payload.out += `<!----></p> <input class="wide svelte-ck75xv"${attr("value", name3)} maxlength="32" placeholder="User1234"> <hr class="spacer svelte-ck75xv"> <p class="svelte-ck75xv">\u623F\u865F `;
  statusText($$payload, "room_not_found", "\u4E0D\u5B58\u5728", "red");
  $$payload.out += `<!----> `;
  statusText($$payload, "valid", "\u5B58\u5728", "green");
  $$payload.out += `<!----></p> <button class="tall svelte-ck75xv" type="button">\u5275\u5EFA\u623F\u9593</button> <hr class="tall svelte-ck75xv"> <input class="room-id svelte-ck75xv"${attr("value", roomId)} placeholder="168"> <button type="button"${attr("disabled", status !== "valid", true)}>\u52A0\u5165</button></div>`;
  pop();
}
function _page($$payload) {
  Lobby($$payload);
}
var import_simplepeer_min;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_clsx();
    init_index2();
    init_client();
    init_firestore();
    import_simplepeer_min = __toESM(require_simplepeer_min(), 1);
    init_attributes();
    init_escaping();
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    imports3 = ["_app/immutable/nodes/2.BKp9pu1p.js", "_app/immutable/chunks/DVkC9yNa.js", "_app/immutable/chunks/DsNwAXZ1.js", "_app/immutable/chunks/znlR3yX-.js", "_app/immutable/chunks/Be6DEuNs.js", "_app/immutable/chunks/CJBrv6R2.js", "_app/immutable/chunks/1mWM_Woo.js", "_app/immutable/chunks/BKFMAIYu.js", "_app/immutable/chunks/bjmIbPZM.js"];
    stylesheets3 = ["_app/immutable/assets/2.CbX7Pgvn.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/game/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load,
  ssr: () => ssr
});
var import_simplepeer_min2, storage, ssr, load;
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/game/_page.ts.js"() {
    init_chunks();
    init_clsx();
    init_client();
    init_firestore();
    import_simplepeer_min2 = __toESM(require_simplepeer_min(), 1);
    storage = {};
    ssr = false;
    load = () => {
      if (!storage.game) {
        goto();
        error(404, "no game data");
      }
      return { game: storage.game };
    };
  }
});

// .svelte-kit/output/server/entries/pages/game/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => _page2
});
function Start($$payload, $$props) {
  push();
  let { game } = $$props;
  const disabled = !(game.judge === game.username && game.players.length >= 2);
  $$payload.out += `<div class="svelte-1s50cua"><h1 class="svelte-1s50cua">MyGo \u5EDA\u623F</h1> <button type="button"${attr("disabled", disabled, true)} class="svelte-1s50cua">\u958B\u59CB\u904A\u6232</button></div>`;
  pop();
}
function ChooseSentence($$payload, $$props) {
  push();
  let { game, stage } = $$props;
  const each_array = ensure_array_like(stage.sentences);
  $$payload.out += `<div class="svelte-1xg36a9"><h1 class="svelte-1xg36a9">\u9078\u4E00\u500B\u53E5\u5B50</h1> <!--[-->`;
  for (let index5 = 0, $$length = each_array.length; index5 < $$length; index5++) {
    let sentence = each_array[index5];
    $$payload.out += `<button type="button" class="svelte-1xg36a9">${escape_html2(sentence.replace("{}", "____"))}</button>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function WaitForSentence($$payload, $$props) {
  let { game, stage } = $$props;
  $$payload.out += `<div class="svelte-hbsuio"><h1 class="svelte-hbsuio">\u7B49\u5F85\u95DC\u4E3B\u9078\u64C7\u53E5\u5B50...</h1></div>`;
}
function Carousel($$payload, $$props) {
  push();
  let {
    selectedIndex = 0,
    images,
    controllable = true
  } = $$props;
  const each_array = ensure_array_like(images);
  $$payload.out += `<div class="carousel svelte-1fiiii9"><div class="upper svelte-1fiiii9"><img class="large svelte-1fiiii9"${attr("src", images[selectedIndex])} alt="gay"> `;
  if (controllable) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="left-arrow svelte-1fiiii9">&lt;</button> <button class="right-arrow svelte-1fiiii9">></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mask svelte-1fiiii9"><div class="list svelte-1fiiii9"><!--[-->`;
  for (let index5 = 0, $$length = each_array.length; index5 < $$length; index5++) {
    let image = each_array[index5];
    $$payload.out += `<button class="image svelte-1fiiii9"${attr("disabled", !controllable, true)} type="button"><img${attr("class", `small svelte-1fiiii9 ${stringify([selectedIndex !== index5 ? "not-selected" : ""].filter(Boolean).join(" "))}`)}${attr("src", image)} alt="gay" onload="this.__e=event"></button>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, { selectedIndex });
  pop();
}
function ChooseCard($$payload, $$props) {
  push();
  let { game, stage } = $$props;
  let selectedIndex = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div id="main" class="svelte-18vgf4f"><h1>${escape_html2(stage.sentence.replace("{}", stage.cards[selectedIndex].text))}</h1> `;
    Carousel($$payload2, {
      images: stage.cards.map((c) => c.image),
      get selectedIndex() {
        return selectedIndex;
      },
      set selectedIndex($$value) {
        selectedIndex = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <button type="button">\u63D0\u4EA4</button></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function WaitForCard($$payload, $$props) {
  push();
  let { game, stage } = $$props;
  $$payload.out += `<div class="svelte-gly1v3"><h2 class="svelte-gly1v3">\u7B49\u5F85\u73A9\u5BB6\u9078\u64C7\u5716\u7247...</h2> <h1 class="svelte-gly1v3">${escape_html2(stage.progress)}</h1></div>`;
  pop();
}
function ChooseBestCard($$payload, $$props) {
  push();
  let { game, stage } = $$props;
  let selectedIndex = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div id="main" class="svelte-18vgf4f"><h1>${escape_html2(stage.sentence.replace("{}", stage.cards[selectedIndex].text))}</h1> `;
    Carousel($$payload2, {
      images: stage.cards.map((c) => c.image),
      get selectedIndex() {
        return selectedIndex;
      },
      set selectedIndex($$value) {
        selectedIndex = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <button type="button">\u63D0\u4EA4</button></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function End($$payload, $$props) {
  push();
  let { game, stage } = $$props;
  $$payload.out += `<div class="svelte-1hj9zoa"><h1>Winner: ${escape_html2(stage.winner)}</h1> <h1>${escape_html2(stage.sentence.replace("{}", stage.bestCard.text))}</h1> <img${attr("src", stage.bestCard.image)}${attr("alt", stage.bestCard.text)} class="svelte-1hj9zoa"></div>`;
  pop();
}
function WaitForBestCard($$payload, $$props) {
  push();
  let { game, stage } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div id="main" class="svelte-18vgf4f"><h1>${escape_html2(stage.sentence)}</h1> `;
    Carousel($$payload2, {
      images: stage.cards.map((c) => c.image),
      controllable: false,
      get selectedIndex() {
        return stage.selected;
      },
      set selectedIndex($$value) {
        stage.selected = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <h1>\u7B49\u5F85\u95DC\u4E3B\u4F5C\u51FA\u9078\u64C7...</h1></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function Main($$payload, $$props) {
  push();
  let { game } = $$props;
  const componentMap = {
    start: Start,
    choose_sentence: ChooseSentence,
    wait_for_sentence: WaitForSentence,
    choose_card: ChooseCard,
    wait_for_card: WaitForCard,
    choose_best_card: ChooseBestCard,
    wait_for_best_card: WaitForBestCard,
    end: End
  };
  let Component2 = componentMap[game.screen.name];
  $$payload.out += `<!---->`;
  Component2($$payload, { game, stage: game.screen });
  $$payload.out += `<!---->`;
  pop();
}
function CopyButton($$payload, $$props) {
  $$payload.out += `<button class="svelte-156rmmz"><img alt="Copy" src="/copy.png"${attr("class", `svelte-156rmmz ${stringify([""].filter(Boolean).join(" "))}`)}> <img${attr("class", `check svelte-156rmmz ${stringify([""].filter(Boolean).join(" "))}`)} alt="Check" src="/check.png"></button>`;
}
function PlayerList($$payload, $$props) {
  push();
  let { game } = $$props;
  const each_array = ensure_array_like(game.players);
  $$payload.out += `<div class="sidebar svelte-xc13fk"><h1 class="svelte-xc13fk">\u623F\u865F ${escape_html2(game.id)}`;
  CopyButton($$payload, { content: game.id });
  $$payload.out += `<!----></h1> <hr class="svelte-xc13fk"> <div class="list svelte-xc13fk"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let player = each_array[$$index];
    $$payload.out += `<div class="player-card svelte-xc13fk"><div class="user-icon"></div> <span>${escape_html2(player.name)}</span> `;
    if (game.judge === player.name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span>[Judge]</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function GameScreen($$payload, $$props) {
  let { game } = $$props;
  $$payload.out += `<div class="svelte-ryu4g">`;
  PlayerList($$payload, { game });
  $$payload.out += `<!----> `;
  Main($$payload, { game });
  $$payload.out += `<!----></div>`;
}
function _page2($$payload, $$props) {
  push();
  let { data } = $$props;
  GameScreen($$payload, { game: data.game });
  pop();
}
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/game/_page.svelte.js"() {
    init_clsx();
    init_index2();
    init_attributes();
    init_escaping();
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4,
  universal: () => page_ts_exports,
  universal_id: () => universal_id
});
var index4, component_cache4, component4, universal_id, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_ts();
    index4 = 3;
    component4 = async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    universal_id = "src/routes/game/+page.ts";
    imports4 = ["_app/immutable/nodes/3.B8kbh3fj.js", "_app/immutable/chunks/BKFMAIYu.js", "_app/immutable/chunks/DsNwAXZ1.js", "_app/immutable/chunks/bjmIbPZM.js", "_app/immutable/chunks/CJBrv6R2.js", "_app/immutable/chunks/Be6DEuNs.js", "_app/immutable/chunks/DVkC9yNa.js", "_app/immutable/chunks/1mWM_Woo.js", "_app/immutable/chunks/DMOy5E2y.js"];
    stylesheets4 = ["_app/immutable/assets/3.ATl7uaBy.css"];
    fonts4 = [];
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null);
      this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < arguments.length; i++) {
        this.define(arguments[i]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error(
              'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
            );
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js
var require_other = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js
var require_mime = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard(), require_other());
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js
var require_types = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
    var KVError = class _KVError extends Error {
      constructor(message, status = 500) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = _KVError.name;
        this.status = status;
      }
    };
    exports.KVError = KVError;
    var MethodNotAllowedError = class extends KVError {
      constructor(message = `Not a valid request method`, status = 405) {
        super(message, status);
      }
    };
    exports.MethodNotAllowedError = MethodNotAllowedError;
    var NotFoundError = class extends KVError {
      constructor(message = `Not Found`, status = 404) {
        super(message, status);
      }
    };
    exports.NotFoundError = NotFoundError;
    var InternalError = class extends KVError {
      constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
        super(message, status);
      }
    };
    exports.InternalError = InternalError;
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js
var require_dist = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
    var mime = require_mime();
    var types_1 = require_types();
    Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
      return types_1.MethodNotAllowedError;
    } });
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return types_1.NotFoundError;
    } });
    Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
      return types_1.InternalError;
    } });
    var defaultCacheControl = {
      browserTTL: null,
      edgeTTL: 2 * 60 * 60 * 24,
      bypassCache: false
      // do not bypass Cloudflare's cache
    };
    var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
    var getAssetFromKVDefaultOptions = {
      ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
      ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : void 0,
      cacheControl: defaultCacheControl,
      defaultMimeType: "text/plain",
      defaultDocument: "index.html"
    };
    function assignOptions(options2) {
      return Object.assign({}, getAssetFromKVDefaultOptions, options2);
    }
    var mapRequestToAsset2 = (request, options2) => {
      options2 = assignOptions(options2);
      const parsedUrl = new URL(request.url);
      let pathname = parsedUrl.pathname;
      if (pathname.endsWith("/")) {
        pathname = pathname.concat(options2.defaultDocument);
      } else if (!mime.getType(pathname)) {
        pathname = pathname.concat("/" + options2.defaultDocument);
      }
      parsedUrl.pathname = pathname;
      return new Request(parsedUrl.toString(), request);
    };
    exports.mapRequestToAsset = mapRequestToAsset2;
    function serveSinglePageApp(request, options2) {
      options2 = assignOptions(options2);
      request = mapRequestToAsset2(request, options2);
      const parsedUrl = new URL(request.url);
      if (parsedUrl.pathname.endsWith(".html")) {
        return new Request(`${parsedUrl.origin}/${options2.defaultDocument}`, request);
      } else {
        return request;
      }
    }
    exports.serveSinglePageApp = serveSinglePageApp;
    var getAssetFromKV2 = (event, options2) => __awaiter(void 0, void 0, void 0, function* () {
      options2 = assignOptions(options2);
      const request = event.request;
      const ASSET_NAMESPACE = options2.ASSET_NAMESPACE;
      const ASSET_MANIFEST = parseStringAsObject(options2.ASSET_MANIFEST);
      if (typeof ASSET_NAMESPACE === "undefined") {
        throw new types_1.InternalError(`there is no KV namespace bound to the script`);
      }
      const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
      let pathIsEncoded = false;
      let requestKey;
      if (options2.mapRequestToAsset) {
        requestKey = options2.mapRequestToAsset(request);
      } else if (ASSET_MANIFEST[rawPathKey]) {
        requestKey = request;
      } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
        pathIsEncoded = true;
        requestKey = request;
      } else {
        const mappedRequest = mapRequestToAsset2(request);
        const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
        if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
          pathIsEncoded = true;
          requestKey = mappedRequest;
        } else {
          requestKey = mapRequestToAsset2(request, options2);
        }
      }
      const SUPPORTED_METHODS = ["GET", "HEAD"];
      if (!SUPPORTED_METHODS.includes(requestKey.method)) {
        throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
      }
      const parsedUrl = new URL(requestKey.url);
      const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
      let pathKey = pathname.replace(/^\/+/, "");
      const cache = caches.default;
      let mimeType = mime.getType(pathKey) || options2.defaultMimeType;
      if (mimeType.startsWith("text") || mimeType === "application/javascript") {
        mimeType += "; charset=utf-8";
      }
      let shouldEdgeCache = false;
      if (typeof ASSET_MANIFEST !== "undefined") {
        if (ASSET_MANIFEST[pathKey]) {
          pathKey = ASSET_MANIFEST[pathKey];
          shouldEdgeCache = true;
        }
      }
      let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
      const evalCacheOpts = (() => {
        switch (typeof options2.cacheControl) {
          case "function":
            return options2.cacheControl(request);
          case "object":
            return options2.cacheControl;
          default:
            return defaultCacheControl;
        }
      })();
      const formatETag = (entityId = pathKey, validatorType = "strong") => {
        if (!entityId) {
          return "";
        }
        switch (validatorType) {
          case "weak":
            if (!entityId.startsWith("W/")) {
              return `W/${entityId}`;
            }
            return entityId;
          case "strong":
            if (entityId.startsWith(`W/"`)) {
              entityId = entityId.replace("W/", "");
            }
            if (!entityId.endsWith(`"`)) {
              entityId = `"${entityId}"`;
            }
            return entityId;
          default:
            return "";
        }
      };
      options2.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
      if (options2.cacheControl.bypassCache || options2.cacheControl.edgeTTL === null || request.method == "HEAD") {
        shouldEdgeCache = false;
      }
      const shouldSetBrowserCache = typeof options2.cacheControl.browserTTL === "number";
      let response = null;
      if (shouldEdgeCache) {
        response = yield cache.match(cacheKey);
      }
      if (response) {
        if (response.status > 300 && response.status < 400) {
          if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
            response.body.cancel();
            console.log("Body exists and environment supports readable streams. Body cancelled");
          } else {
            console.log("Environment doesnt support readable streams");
          }
          response = new Response(null, response);
        } else {
          let opts = {
            headers: new Headers(response.headers),
            status: 0,
            statusText: ""
          };
          opts.headers.set("cf-cache-status", "HIT");
          if (response.status) {
            opts.status = response.status;
            opts.statusText = response.statusText;
          } else if (opts.headers.has("Content-Range")) {
            opts.status = 206;
            opts.statusText = "Partial Content";
          } else {
            opts.status = 200;
            opts.statusText = "OK";
          }
          response = new Response(response.body, opts);
        }
      } else {
        const body2 = yield ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
        if (body2 === null) {
          throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
        }
        response = new Response(body2);
        if (shouldEdgeCache) {
          response.headers.set("Accept-Ranges", "bytes");
          response.headers.set("Content-Length", body2.length);
          if (!response.headers.has("etag")) {
            response.headers.set("etag", formatETag(pathKey, "strong"));
          }
          response.headers.set("Cache-Control", `max-age=${options2.cacheControl.edgeTTL}`);
          event.waitUntil(cache.put(cacheKey, response.clone()));
          response.headers.set("CF-Cache-Status", "MISS");
        }
      }
      response.headers.set("Content-Type", mimeType);
      if (response.status === 304) {
        let etag2 = formatETag(response.headers.get("etag"), "strong");
        let ifNoneMatch = cacheKey.headers.get("if-none-match");
        let proxyCacheStatus = response.headers.get("CF-Cache-Status");
        if (etag2) {
          if (ifNoneMatch && ifNoneMatch === etag2 && proxyCacheStatus === "MISS") {
            response.headers.set("CF-Cache-Status", "EXPIRED");
          } else {
            response.headers.set("CF-Cache-Status", "REVALIDATED");
          }
          response.headers.set("etag", formatETag(etag2, "weak"));
        }
      }
      if (shouldSetBrowserCache) {
        response.headers.set("Cache-Control", `max-age=${options2.cacheControl.browserTTL}`);
      } else {
        response.headers.delete("Cache-Control");
      }
      return response;
    });
    exports.getAssetFromKV = getAssetFromKV2;
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_equality();
init_index2();
init_clsx();
var BROWSER = false;
var base = "";
var assets = base;
var app_dir = "_app";
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
var safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var BOUNDARY_EFFECT = 1 << 7;
var UNOWNED = 1 << 8;
var DISCONNECTED = 1 << 9;
var CLEAN = 1 << 10;
var DIRTY = 1 << 11;
var MAYBE_DIRTY = 1 << 12;
var INERT = 1 << 13;
var DESTROYED = 1 << 14;
var EFFECT_RAN = 1 << 15;
var EFFECT_TRANSPARENT = 1 << 16;
var HEAD_EFFECT = 1 << 19;
var EFFECT_HAS_DERIVED = 1 << 20;
var LEGACY_PROPS = Symbol("legacy props");
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function state_unsafe_local_read() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
var tracing_mode_flag = false;
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
var component_context = null;
function set_component_context(context2) {
  component_context = context2;
}
function push2(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
}
function pop2(component5) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    context_stack_item.m = true;
  }
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return true;
}
function source(v2, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: v2,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable2 = false) {
  const s2 = source(initial_value);
  if (!immutable2) {
    s2.equals = safe_equals;
  }
  return s2;
}
function set(source2, value) {
  if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (derived_sources === null || !derived_sources.includes(source2))) {
    state_unsafe_mutation();
  }
  return internal_set(source2, value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    source2.v;
    source2.v = value;
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(hydrate_node)
  );
}
var $window;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  element_prototype.__click = void 0;
  element_prototype.__className = "";
  element_prototype.__attributes = null;
  element_prototype.__styles = null;
  element_prototype.__e = void 0;
  Text.prototype.__t = void 0;
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}
function destroy_derived_effects(derived) {
  var effects = derived.effects;
  if (effects !== null) {
    derived.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
function get_derived_parent_effect(derived) {
  var parent = derived.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    try {
      destroy_derived_effects(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived, status);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push22 = true) {
  var is_root = (type & ROOT_EFFECT) !== 0;
  var parent_effect = active_effect;
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent: is_root ? null : parent_effect,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (sync) {
    var previously_flushing_effect = is_flushing_effect;
    try {
      set_is_flushing_effect(true);
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    } finally {
      set_is_flushing_effect(previously_flushing_effect);
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
  if (!inert && !is_root && push22) {
    if (parent_effect !== null) {
      push_effect(effect2, parent_effect);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        active_reaction
      );
      (derived.effects ??= []).push(effect2);
    }
  }
  return effect2;
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options2 = {}) => {
    return new Promise((fulfil) => {
      if (options2.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function branch(fn, push22 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push22);
}
function execute_effect_teardown(effect2) {
  var teardown = effect2.teardown;
  if (teardown !== null) {
    const previous_reaction = active_reaction;
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next = effect2.next;
    destroy_effect(effect2, remove_dom);
    effect2 = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    var node = effect2.nodes_start;
    var end = effect2.nodes_end;
    while (node !== null) {
      var next = node === end ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      node.remove();
      node = next;
    }
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect2.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
function flush_tasks() {
}
var FLUSH_MICROTASK = 0;
var FLUSH_SYNC = 1;
var is_throwing_error = false;
var scheduler_mode = FLUSH_MICROTASK;
var is_micro_task_queued = false;
var last_scheduled_effect = null;
var is_flushing_effect = false;
function set_is_flushing_effect(value) {
  is_flushing_effect = value;
}
var queued_root_effects = [];
var flush_count = 0;
var active_reaction = null;
var untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
var active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
var derived_sources = null;
var new_deps = null;
var skipped_deps = 0;
var untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
var write_version = 1;
var read_version = 0;
var skip_reaction = false;
function increment_write_version() {
  return ++write_version;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(reaction)) {
            (dependency.reactions ??= []).push(reaction);
          }
        }
        if (is_disconnected) {
          reaction.f ^= DISCONNECTED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function propagate_error(error2, effect2) {
  var current = effect2;
  while (current !== null) {
    if ((current.f & BOUNDARY_EFFECT) !== 0) {
      try {
        current.fn(error2);
        return;
      } catch {
        current.f ^= BOUNDARY_EFFECT;
      }
    }
    current = current.parent;
  }
  is_throwing_error = false;
  throw error2;
}
function should_rethrow_error(effect2) {
  return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
}
function handle_error(error2, effect2, previous_effect, component_context2) {
  if (is_throwing_error) {
    if (previous_effect === null) {
      is_throwing_error = false;
    }
    if (should_rethrow_error(effect2)) {
      throw error2;
    }
    return;
  }
  if (previous_effect !== null) {
    is_throwing_error = true;
  }
  {
    propagate_error(error2, effect2);
    return;
  }
}
function schedule_possible_effect_self_invalidation(signal, effect2, depth = 0) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        depth + 1
      );
    } else if (effect2 === reaction) {
      if (depth === 0) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var prev_derived_sources = derived_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  skip_reaction = (flags & UNOWNED) !== 0 && (!is_flushing_effect || // If we were previously not in a reactive context and we're reading an unowned derived
  // that was created inside another reaction, then we don't fully know the real owner and thus
  // we need to skip adding any reactions for this unowned
  (previous_reaction === null || previous_untracking) && /** @type {Derived} */
  reaction.parent !== null);
  derived_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  read_version++;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null) {
      read_version++;
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    derived_sources = prev_derived_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index5 = index_of.call(reactions, signal);
    if (index5 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index5] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var previous_component_context = component_context;
  active_effect = effect2;
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown = update_reaction(effect2);
    effect2.teardown = typeof teardown === "function" ? teardown : null;
    effect2.wv = write_version;
    var deps = effect2.deps;
    var dep;
    if (BROWSER && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
    if (BROWSER) ;
  } catch (error2) {
    handle_error(error2, effect2, previous_effect, previous_component_context || effect2.ctx);
  } finally {
    active_effect = previous_effect;
  }
}
function infinite_loop_guard() {
  if (flush_count > 1e3) {
    flush_count = 0;
    try {
      effect_update_depth_exceeded();
    } catch (error2) {
      if (last_scheduled_effect !== null) {
        {
          handle_error(error2, last_scheduled_effect, null);
        }
      } else {
        throw error2;
      }
    }
  }
  flush_count++;
}
function flush_queued_root_effects(root_effects) {
  var length = root_effects.length;
  if (length === 0) {
    return;
  }
  infinite_loop_guard();
  var previously_flushing_effect = is_flushing_effect;
  is_flushing_effect = true;
  try {
    for (var i = 0; i < length; i++) {
      var effect2 = root_effects[i];
      if ((effect2.f & CLEAN) === 0) {
        effect2.f ^= CLEAN;
      }
      var collected_effects = [];
      process_effects(effect2, collected_effects);
      flush_queued_effects(collected_effects);
    }
  } finally {
    is_flushing_effect = previously_flushing_effect;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      try {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
          if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
            if (effect2.teardown === null) {
              unlink_effect(effect2);
            } else {
              effect2.fn = null;
            }
          }
        }
      } catch (error2) {
        handle_error(error2, effect2, null, effect2.ctx);
      }
    }
  }
}
function process_deferred() {
  is_micro_task_queued = false;
  if (flush_count > 1001) {
    return;
  }
  const previous_queued_root_effects = queued_root_effects;
  queued_root_effects = [];
  flush_queued_root_effects(previous_queued_root_effects);
  if (!is_micro_task_queued) {
    flush_count = 0;
    last_scheduled_effect = null;
  }
}
function schedule_effect(signal) {
  if (scheduler_mode === FLUSH_MICROTASK) {
    if (!is_micro_task_queued) {
      is_micro_task_queued = true;
      queueMicrotask(process_deferred);
    }
  }
  last_scheduled_effect = signal;
  var effect2 = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(effect2, collected_effects) {
  var current_effect = effect2.first;
  var effects = [];
  main_loop: while (current_effect !== null) {
    var flags = current_effect.f;
    var is_branch = (flags & BRANCH_EFFECT) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    var sibling = current_effect.next;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & RENDER_EFFECT) !== 0) {
        if (is_branch) {
          current_effect.f ^= CLEAN;
        } else {
          var previous_active_reaction = active_reaction;
          try {
            active_reaction = current_effect;
            if (check_dirtiness(current_effect)) {
              update_effect(current_effect);
            }
          } catch (error2) {
            handle_error(error2, current_effect, null, current_effect.ctx);
          } finally {
            active_reaction = previous_active_reaction;
          }
        }
        var child = current_effect.first;
        if (child !== null) {
          current_effect = child;
          continue;
        }
      } else if ((flags & EFFECT) !== 0) {
        effects.push(current_effect);
      }
    }
    if (sibling === null) {
      let parent = current_effect.parent;
      while (parent !== null) {
        if (effect2 === parent) {
          break main_loop;
        }
        var parent_sibling = parent.next;
        if (parent_sibling !== null) {
          current_effect = parent_sibling;
          continue main_loop;
        }
        parent = parent.parent;
      }
    }
    current_effect = sibling;
  }
  for (var i = 0; i < effects.length; i++) {
    child = effects[i];
    collected_effects.push(child);
    process_effects(child, collected_effects);
  }
}
function flush_sync(fn) {
  var previous_scheduler_mode = scheduler_mode;
  var previous_queued_root_effects = queued_root_effects;
  try {
    infinite_loop_guard();
    const root_effects = [];
    scheduler_mode = FLUSH_SYNC;
    queued_root_effects = root_effects;
    is_micro_task_queued = false;
    flush_queued_root_effects(previous_queued_root_effects);
    var result = fn?.();
    flush_tasks();
    if (queued_root_effects.length > 0 || root_effects.length > 0) {
      flush_sync();
    }
    flush_count = 0;
    last_scheduled_effect = null;
    if (BROWSER) ;
    return result;
  } finally {
    scheduler_mode = previous_scheduler_mode;
    queued_root_effects = previous_queued_root_effects;
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    if (derived_sources !== null && derived_sources.includes(signal)) {
      state_unsafe_local_read();
    }
    var deps = active_reaction.deps;
    if (signal.rv < read_version) {
      signal.rv = read_version;
      if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
        skipped_deps++;
      } else if (new_deps === null) {
        new_deps = [signal];
      } else {
        new_deps.push(signal);
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived = (
      /** @type {Derived} */
      signal
    );
    var parent = derived.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived.f ^= UNOWNED;
    }
  }
  if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived)) {
      update_derived(derived);
    }
  }
  return signal.v;
}
var STATUS_MASK = -7169;
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name3) {
  return PASSIVE_EVENTS.includes(name3);
}
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  var path_idx = 0;
  var handled_at = event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated !== void 0 && !/** @type {any} */
        current_target.disabled) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event, ...data]);
          } else {
            delegated.call(current_target, event);
          }
        }
      } catch (error2) {
        if (throw_error) {
          other_errors.push(error2);
        } else {
          throw_error = error2;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error2 of other_errors) {
        queueMicrotask(() => {
          throw error2;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
function mount(component5, options2) {
  return _mount(component5, options2);
}
function hydrate(component5, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component5, { ...options2, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error2) {
    if (error2 === HYDRATION_ERROR) {
      if (options2.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component5, options2);
    }
    throw error2;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component2, { target, anchor, props = {}, events, context: context2, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component5 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context2) {
        push2({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context2;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component5 = Component2(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context2) {
        pop2();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component5, unmount2);
  return component5;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component5, options2) {
  const fn = mounted_components.get(component5);
  if (fn) {
    mounted_components.delete(component5);
    return fn(options2);
  }
  return Promise.resolve();
}
function asClassComponent$1(component5) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component5,
        ...options2
      });
    }
  };
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s2 = /* @__PURE__ */ mutable_source(value);
      sources.set(key2, s2);
      return s2;
    };
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    });
    if (!options2?.props?.$$host || options2.sync === false) {
      flush_sync();
    }
    this.#events = props.$$events;
    for (const key2 of Object.keys(this.#instance)) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return this.#instance[key2];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key2] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    this.#events[event] = this.#events[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function asClassComponent(component5) {
  const component_constructor = asClassComponent$1(component5);
  const _render = (props, { context: context2 } = {}) => {
    const result = render(component5, { props, context: context2 });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.body
    };
  };
  component_constructor.render = _render;
  return component_constructor;
}
var prerendering = false;
function Root($$payload, $$props) {
  push();
  let {
    stores: stores2,
    page: page2,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores2);
  }
  {
    stores2.page.set(page2);
  }
  const Pyramid_1 = constructors[1];
  if (constructors[1]) {
    $$payload.out += "<!--[-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, {
      data: data_0,
      form,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Pyramid_1($$payload2, { data: data_1, form });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, { data: data_0, form });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
var root = asClassComponent(Root);
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: ({ head, body: body2, assets: assets2, nonce, env }) => '<!doctype html>\r\n<html lang="en">\r\n\r\n<head>\r\n	<meta charset="utf-8" />\r\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n	<link rel="icon" href="favicon.png" />\r\n	<title>MyGo Kitchen</title>\r\n	' + head + '\r\n</head>\r\n\r\n<body data-sveltekit-preload-data="hover" style="margin: 0;">\r\n	<div style="display: contents">' + body2 + "</div>\r\n</body>\r\n\r\n</html>",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "p9g1vf"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let init2;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    init: init2,
    reroute,
    transport
  };
}

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key2) {
  return is_identifier.test(key2) ? "." + key2 : "[" + JSON.stringify(key2) + "]";
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom2 = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom2.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          return;
        case "ArrayBuffer":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(stringify_key(key2));
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b2) => b2[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify3(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom2.has(thing)) {
      return custom2.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v2, i) => i in thing ? stringify3(v2) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify3).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        const typedArray = thing;
        return `new ${type}([${typedArray.toString()}])`;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify3(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify3(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name3, thing) => {
      params.push(name3);
      if (custom2.has(thing)) {
        values.push(
          /** @type {string} */
          custom2.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify3(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v2, i) => {
            statements.push(`${name3}[${i}]=${stringify3(v2)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name3}.${Array.from(thing).map((v2) => `add(${stringify3(v2)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name3}.${Array.from(thing).map(([k, v2]) => `set(${stringify3(k)}, ${stringify3(v2)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name3}${safe_prop(key2)}=${stringify3(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name3 = "";
  do {
    name3 = chars[num % chars.length] + name3;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name3) ? `${name3}0` : name3;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}

// node_modules/devalue/src/base64.js
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }
  return binaryToAscii(binaryString);
}
var KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 3) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 15) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 63;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify2(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom2 = [];
  if (reducers) {
    for (const key2 of Object.getOwnPropertyNames(reducers)) {
      custom2.push({ key: key2, fn: reducers[key2] });
    }
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index6 = p++;
    indexes.set(thing, index6);
    for (const { key: key2, fn } of custom2) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index6] = `["${key2}",${flatten(value2)}]`;
        return index6;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: source2, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source2)},"${flags}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          const base643 = encode64(typedArray.buffer);
          str = '["' + type + '","' + base643 + '"]';
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base643 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base643}"]`;
          break;
        }
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(stringify_key(key2));
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key2));
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index6] = str;
    return index6;
  }
  const index5 = flatten(value);
  if (index5 < 0) return `${index5}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_exports();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b2) => {
    if (a.q !== b2.q) {
      return b2.q - a.q;
    }
    if (a.subtype === "*" !== (b2.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b2.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b2.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | HttpError | SvelteKitError | Error} */
    error2
  );
}
function get_status(error2) {
  return error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
}
function get_message(error2) {
  return error2 instanceof SvelteKitError ? error2.text : "Internal Error";
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
var escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
var surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
var escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message: escape_html(message) });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = get_status(error2);
  const body2 = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  }
  const status = get_status(error2);
  const message = get_message(error2);
  return await options2.hooks.handleError({ error: error2, event, status, message }) ?? { message };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.push(`"search_params":${JSON.stringify(Array.from(node.uses.search_params))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent) uses.push('"parent":1');
  if (node.uses?.route) uses.push('"route":1');
  if (node.uses?.url) uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
var DATA_SUFFIX = "/__data.json";
var HTML_DATA_SUFFIX = ".html__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
var ROUTE_PREFIX = `${base}/${app_dir}/route`;
function has_resolution_prefix(pathname) {
  return pathname === `${ROUTE_PREFIX}.js` || pathname.startsWith(`${ROUTE_PREFIX}/`);
}
function add_resolution_prefix(pathname) {
  let normalized = pathname.slice(base.length);
  if (normalized.endsWith("/")) normalized = normalized.slice(0, -1);
  return `${ROUTE_PREFIX}${normalized}.js`;
}
function strip_resolution_prefix(pathname) {
  return base + (pathname.slice(ROUTE_PREFIX.length, -3) || "/");
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name3 = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name3 = param[0].slice(1);
      if (name3 === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name3];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name3}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id, transport) {
  const replacer = (thing) => {
    for (const key2 in transport) {
      const encoded = transport[key2].encode(thing);
      if (encoded) {
        return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
      }
    }
  };
  return try_serialize(data, (value) => uneval(value, replacer), route_id);
}
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key2, value]) => [key2, value.encode])
  );
  return try_serialize(data, (value) => stringify2(value, encoders), route_id);
}
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "") message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
function get_relative_path(from, to) {
  const from_parts = from.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i = from_parts.length;
  while (i--) from_parts[i] = "..";
  return from_parts.concat(to_parts).join("/");
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      new URL(info instanceof Request ? info.url : info, event.url);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.params.add(key2);
        }
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      if (is_tracking) {
        uses.parent = true;
      }
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.route = true;
        }
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url,
    untrack(fn) {
      is_tracking = false;
      try {
        return fn();
      } finally {
        is_tracking = true;
      }
    }
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent,
    untrack: (fn) => fn()
  });
  return result ?? null;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get3 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get3.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w2 = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b2;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w2[i2];
      } else {
        a = w2[i2 + 1 & 15];
        b2 = w2[i2 + 14 & 15];
        tmp = w2[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b2 >>> 17 ^ b2 >>> 19 ^ b2 >>> 10 ^ b2 << 15 ^ b2 << 13) + w2[i2 & 15] + w2[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b2 = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b2;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #script_src_needs_csp;
  /** @type {boolean} */
  #script_src_elem_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {boolean} */
  #style_src_needs_csp;
  /** @type {boolean} */
  #style_src_attr_needs_csp;
  /** @type {boolean} */
  #style_src_elem_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #script_src_elem;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src_attr;
  /** @type {import('types').Csp.Source[]} */
  #style_src_elem;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#script_src_elem = [];
    this.#style_src = [];
    this.#style_src_attr = [];
    this.#style_src_elem = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    const needs_csp = (directive) => !!directive && !directive.some((value) => value === "unsafe-inline");
    this.#script_src_needs_csp = needs_csp(effective_script_src);
    this.#script_src_elem_needs_csp = needs_csp(script_src_elem);
    this.#style_src_needs_csp = needs_csp(effective_style_src);
    this.#style_src_attr_needs_csp = needs_csp(style_src_attr);
    this.#style_src_elem_needs_csp = needs_csp(style_src_elem);
    this.#script_needs_csp = this.#script_src_needs_csp || this.#script_src_elem_needs_csp;
    this.#style_needs_csp = this.#style_src_needs_csp || this.#style_src_attr_needs_csp || this.#style_src_elem_needs_csp;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (!this.#script_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#script_src_needs_csp) {
      this.#script_src.push(source2);
    }
    if (this.#script_src_elem_needs_csp) {
      this.#script_src_elem.push(source2);
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (!this.#style_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#style_src_needs_csp) {
      this.#style_src.push(source2);
    }
    if (this.#style_src_attr_needs_csp) {
      this.#style_src_attr.push(source2);
    }
    if (this.#style_src_elem_needs_csp) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = this.#directives;
      if (d["style-src-elem"] && !d["style-src-elem"].includes(sha256_empty_comment_hash) && !this.#style_src_elem.includes(sha256_empty_comment_hash)) {
        this.#style_src_elem.push(sha256_empty_comment_hash);
      }
      if (source2 !== sha256_empty_comment_hash) {
        this.#style_src_elem.push(source2);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#style_src_attr.length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...this.#style_src_attr
      ];
    }
    if (this.#style_src_elem.length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...this.#style_src_elem
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    if (this.#script_src_elem.length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...this.#script_src_elem
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html(content, true)}">`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v2) => !!v2).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done) deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
function generate_route_object(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  const nodes = [...errors, ...layouts.map((l) => l?.[1]), leaf[1]].filter((n) => typeof n === "number").map((n) => `'${n}': () => ${create_client_import(manifest2._.client.nodes?.[n], url)}`).join(",\n		");
  return [
    `{
	id: ${s(route.id)}`,
    `errors: ${s(route.errors)}`,
    `layouts: ${s(route.layouts)}`,
    `leaf: ${s(route.leaf)}`,
    `nodes: {
		${nodes}
	}
}`
  ].join(",\n	");
}
function create_client_import(import_path, url) {
  if (!import_path) return "Promise.resolve({})";
  if (import_path[0] === "/") {
    return `import('${import_path}')`;
  }
  if (assets !== "") {
    return `import('${assets}/${import_path}')`;
  }
  let path = get_relative_path(url.pathname, `${base}/${import_path}`);
  if (path[0] !== ".") path = `./${path}`;
  return `import('${path}')`;
}
async function resolve_route(resolved_path, url, manifest2) {
  if (!manifest2._.client.routes) {
    return text("Server-side route resolution disabled", { status: 400 });
  }
  let route = null;
  let params = {};
  const matchers = await manifest2._.matchers();
  for (const candidate of manifest2._.client.routes) {
    const match = candidate.pattern.exec(resolved_path);
    if (!match) continue;
    const matched = exec(match, candidate.params, matchers);
    if (matched) {
      route = candidate;
      params = decode_params(matched);
      break;
    }
  }
  return create_server_routing_response(route, params, url, manifest2).response;
}
function create_server_routing_response(route, params, url, manifest2) {
  const headers2 = new Headers({
    "content-type": "application/javascript; charset=utf-8"
  });
  if (route) {
    const csr_route = generate_route_object(route, url, manifest2);
    const body2 = `export const route = ${csr_route}; export const params = ${JSON.stringify(params)};`;
    return { response: text(body2, { headers: headers2 }), body: body2 };
  } else {
    return { response: text("", { headers: headers2 }), body: "" };
  }
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets5 = new Set(client.stylesheets);
  const fonts5 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  {
    if (!state.prerendering?.fallback) {
      const segments = event.url.pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch2.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch2.length; i += 1) {
      data2 = { ...data2, ...branch2[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ])
    };
    {
      try {
        rendered = options2.root.render(props, render_opts);
      } finally {
        reset();
      }
    }
    for (const { node } of branch2) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets5.add(url);
      for (const url of node.fonts) fonts5.add(url);
      if (node.inline_styles && !client.inline) {
        Object.entries(await node.inline_styles()).forEach(([k, v2]) => inline_styles.set(k, v2));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  const style = client.inline ? client.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(style);
    head += `
	<style${attributes.join("")}>${style}</style>`;
  }
  for (const dep of stylesheets5) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global2 = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch2.map((b2) => b2.server_data),
    csp,
    global2
  );
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const route = manifest2._.client.routes?.find((r) => r.id === event.route.id) ?? null;
    if (client.uses_env_dynamic_public && state.prerendering) {
      modulepreloads.add(`${app_dir}/env.js`);
    }
    if (!client.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
        } else if (state.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    if (manifest2._.client.routes && state.prerendering && !state.prerendering.fallback) {
      const pathname = add_resolution_prefix(event.url.pathname);
      state.prerendering.dependencies.set(
        pathname,
        create_server_routing_response(route, event.params, new URL(pathname, event.url), manifest2)
      );
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global2} = {
						${properties.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node }) => node.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (manifest2._.client.routes) {
        if (route) {
          const stringified = generate_route_object(route, event.url, manifest2).replaceAll(
            "\n",
            "\n							"
          );
          hydrate2.push(`params: ${uneval(event.params)}`, `server_route: ${stringified}`);
        }
      } else if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    const boot = client.inline ? `${client.inline.script}

					__sveltekit_${options2.version_hash}.app.start(${args.join(", ")});` : client.app ? `Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(app, ${args.join(", ")});
					});` : `import(${s(prefixed(client.start))}).then((app) => {
						app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${app_dir}/env.js`)}).then(({ env }) => {
						${global2}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
function get_data(event, options2, nodes, csp, global2) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push3, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          const nonce = csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : "";
          push3(`<script${nonce}>${global2}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global2}.defer(${id})`;
    } else {
      for (const key2 in options2.hooks.transport) {
        const encoded = options2.hooks.transport[key2].encode(thing);
        if (encoded) {
          return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
        }
      }
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr2 = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr2) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr: ssr2,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch: branch2,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      get_status(e),
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder2.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push3, done } = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key2, value]) => [key2, value.encode])
    ),
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify2(value, reducers);
            } catch {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify2(error2, reducers);
            }
            count -= 1;
            push3(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify2(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function load_page_nodes(page2, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
    manifest2._.nodes[page2.leaf]()
  ]);
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await load_page_nodes(page2, manifest2);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node) => node?.server?.load || node?.server?.trailingSlash !== void 0
    );
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !(state.prerendering && should_prerender_data)) {
      if (BROWSER && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch2 = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(() => {
    });
    for (const p of load_promises) p.catch(() => {
    });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch2.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index5 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index5]();
              let j = i;
              while (!branch2[j]) j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch2.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch2.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    const ssr2 = get_option(nodes, "ssr") ?? true;
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: ssr2
      },
      status,
      error: null,
      branch: ssr2 === false ? [] : compact(branch2),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
var INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    get(name3, opts) {
      const c = new_cookies[name3];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const req_cookies = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const cookie = req_cookies[name3];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    getAll(opts) {
      const cookies2 = (0, import_cookie.parse)(header, { decode: opts?.decode });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name3, value]) => ({ name: name3, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name3, value, options2) {
      const illegal_characters = name3.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name3}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name3, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name3, options2) {
      validate_options(options2);
      cookies.set(name3, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name3, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name3, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name3 in parsed) {
        combined_cookies[name3] = parsed[name3];
      }
    }
    return Object.entries(combined_cookies).map(([name3, value]) => `${name3}=${value}`).join("; ");
  }
  function set_internal(name3, value, options2) {
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name3] = { name: name3, value, options: { ...options2, path } };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name: name3, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name3, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name3, value, { ...options2, path }));
    }
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (manifest2._.prerendered_routes.has(decoded) || decoded.at(-1) === "/" && manifest2._.prerendered_routes.has(decoded.slice(0, -1))) {
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name: name3, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name3, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
var body;
var etag;
var headers;
function get_public_env(request) {
  body ??= `export const env=${JSON.stringify(public_env)}`;
  etag ??= `W/${Date.now()}`;
  headers ??= new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  });
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
function get_page_config(nodes) {
  let current = {};
  for (const node of nodes) {
    if (!node?.universal?.config && !node?.server?.config) continue;
    current = {
      ...current,
      ...node?.universal?.config,
      ...node?.server?.config
    };
  }
  return Object.keys(current).length ? current : void 0;
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let invalidated_data_nodes;
  const is_route_resolution_request = has_resolution_prefix(url.pathname);
  const is_data_request = has_data_suffix(url.pathname);
  if (is_route_resolution_request) {
    url.pathname = strip_resolution_prefix(url.pathname);
  } else if (is_data_request) {
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  let resolved_path;
  try {
    resolved_path = options2.hooks.reroute({ url: new URL(url) }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  }
  try {
    resolved_path = decode_pathname(resolved_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!resolved_path.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    resolved_path = resolved_path.slice(base.length) || "/";
  }
  if (is_route_resolution_request) {
    return resolve_route(resolved_path, new URL(request.url), manifest2);
  }
  if (resolved_path === `/${app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (resolved_path.startsWith(`/${app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(resolved_path);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers2 = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare-workers"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await load_page_nodes(route.page, manifest2);
        if (BROWSER) ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (BROWSER) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state.before_handle || state.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender = node.prerender ?? prerender;
        } else if (route.page) {
          const nodes = await load_page_nodes(route.page, manifest2);
          config = get_page_config(nodes) ?? config;
          prerender = get_option(nodes, "prerender") ?? false;
        }
        if (state.before_handle) {
          state.before_handle(event, config, prerender);
        }
        if (state.emulator?.platform) {
          event.platform = await state.emulator.platform({ config, prerender });
        }
      }
    } else if (state.emulator?.platform) {
      event.platform = await state.emulator.platform({
        config: {},
        prerender: !!state.prerendering?.fallback
      });
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback) disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve2(event2, opts).then((response2) => {
        for (const key2 in headers2) {
          const value = headers2[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve2(event2, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (options2.hash_routing || state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v2) => v2.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        const headers22 = new Headers(request.headers);
        headers22.set("x-sveltekit-error", "true");
        return await fetch(request, { headers: headers22 });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
var init_promise;
var Server = class {
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {{
   *   env: Record<string, string>;
   *   read?: (file: string) => ReadableStream;
   * }} opts
   */
  async init({ env, read }) {
    const prefixes = {
      public_prefix: this.#options.env_public_prefix,
      private_prefix: this.#options.env_private_prefix
    };
    const private_env = filter_private_env(env, prefixes);
    const public_env2 = filter_public_env(env, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (read) {
      set_read_implementation(read);
    }
    await (init_promise ??= (async () => {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          }),
          transport: module.transport || {}
        };
        if (module.init) {
          await module.init();
        }
      } catch (error2) {
        {
          throw error2;
        }
      }
    })());
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// .svelte-kit/cloudflare-workers-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["check.png", "copy.png", "favicon.png", "unifont-15.1.05.otf"]),
    mimeTypes: { ".png": "image/png", ".otf": "font/otf" },
    _: {
      client: { start: "_app/immutable/entry/start.2HGT4Pv7.js", app: "_app/immutable/entry/app.BUbbyTBk.js", imports: ["_app/immutable/entry/start.2HGT4Pv7.js", "_app/immutable/chunks/BKFMAIYu.js", "_app/immutable/chunks/DsNwAXZ1.js", "_app/immutable/chunks/bjmIbPZM.js", "_app/immutable/entry/app.BUbbyTBk.js", "_app/immutable/chunks/DsNwAXZ1.js", "_app/immutable/chunks/Be6DEuNs.js", "_app/immutable/chunks/DVkC9yNa.js", "_app/immutable/chunks/DMOy5E2y.js", "_app/immutable/chunks/1mWM_Woo.js", "_app/immutable/chunks/bjmIbPZM.js"], stylesheets: [], fonts: [], uses_env_dynamic_public: false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/game",
          pattern: /^\/game\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        }
      ],
      prerendered_routes: /* @__PURE__ */ new Set([]),
      matchers: async () => {
        return {};
      },
      server_assets: {}
    }
  };
})();
var prerendered = /* @__PURE__ */ new Map([]);
var base_path = "";

// .svelte-kit/cloudflare-workers-tmp/entry.js
var import_kv_asset_handler = __toESM(require_dist());
import static_asset_manifest_json from "__STATIC_CONTENT_MANIFEST";
var static_asset_manifest = JSON.parse(static_asset_manifest_json);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}`;
var immutable = `${app_path}/immutable/`;
var version_file = `${app_path}/version.json`;
var entry_default = {
  /**
   * @param {Request} req
   * @param {any} env
   * @param {any} context
   */
  async fetch(req, env, context2) {
    await server.init({ env });
    const url = new URL(req.url);
    if (url.pathname.startsWith(app_path)) {
      const res = await get_asset_from_kv(req, env, context2);
      if (is_error(res.status)) return res;
      const cache_control = url.pathname.startsWith(immutable) ? "public, immutable, max-age=31536000" : "no-cache";
      return new Response(res.body, {
        headers: {
          // include original headers, minus cache-control which
          // is overridden, and etag which is no longer useful
          "cache-control": cache_control,
          "content-type": res.headers.get("content-type"),
          "x-robots-tag": "noindex"
        }
      });
    }
    let { pathname, search } = url;
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.slice(base_path.length + 1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;
    }
    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable)) {
      return get_asset_from_kv(req, env, context2, (request, options2) => {
        if (prerendered.has(pathname)) {
          url.pathname = "/" + prerendered.get(pathname).file;
          return new Request(url.toString(), request);
        }
        return (0, import_kv_asset_handler.mapRequestToAsset)(request, options2);
      });
    } else if (location && prerendered.has(location)) {
      if (search) location += search;
      return new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    }
    return await server.respond(req, {
      platform: {
        env,
        context: context2,
        // @ts-expect-error lib.dom is interfering with workers-types
        caches,
        // @ts-expect-error req is actually a Cloudflare request not a standard request
        cf: req.cf
      },
      getClientAddress() {
        return req.headers.get("cf-connecting-ip");
      }
    });
  }
};
async function get_asset_from_kv(req, env, context2, map = import_kv_asset_handler.mapRequestToAsset) {
  return await (0, import_kv_asset_handler.getAssetFromKV)(
    {
      request: req,
      waitUntil(promise) {
        return context2.waitUntil(promise);
      }
    },
    {
      ASSET_NAMESPACE: env.__STATIC_CONTENT,
      ASSET_MANIFEST: static_asset_manifest,
      mapRequestToAsset: map
    }
  );
}
function is_error(status) {
  return status > 399;
}
export {
  entry_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

simple-peer/simplepeer.min.js:
  (*!
  * The buffer module from node.js, for the browser.
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  *)
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=worker.js.map
