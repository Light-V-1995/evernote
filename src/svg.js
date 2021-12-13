!(function (e) {
  var t,
    n,
    o,
    i,
    a,
    d =
      '<svg><symbol id="i-preview" viewBox="0 0 1024 1024"><path d="M468.48 940.8a463.36 463.36 0 1 1 463.36-463.36 463.36 463.36 0 0 1-463.36 463.36z m0-862.72a399.36 399.36 0 1 0 399.36 399.36 400 400 0 0 0-399.36-399.36z"  ></path><path d="M167.68 487.04a32 32 0 0 1-32-32 320 320 0 0 1 320-320 32 32 0 0 1 0 64 256 256 0 0 0-256 256 32 32 0 0 1-32 32zM986.88 1016.32a34.56 34.56 0 0 1-22.4-8.96l-120.32-120.96a31.36 31.36 0 1 1 44.8-44.8L1009.92 960a32.64 32.64 0 0 1 0 45.44 34.56 34.56 0 0 1-23.04 10.88z"  ></path></symbol></svg>',
    c = (c = document.getElementsByTagName("script"))[
      c.length - 1
    ].getAttribute("data-injectcss"),
    l = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (c && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    a || ((a = !0), o());
  }
  function r() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function () {
    var e, t;
    ((t = document.createElement("div")).innerHTML = d),
      (d = null),
      (e = t.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (a = !1),
        r(),
        (i.onreadystatechange = function () {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
