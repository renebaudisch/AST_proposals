/*! AST v0.53.0 Updated: 2022-12-19 */
!function (e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var i = t[a] = {i: a, l: !1, exports: {}};
        return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(a, i, function (t) {
            return e[t]
        }.bind(null, i));
        return a
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function (e) {
    e.exports = JSON.parse('{"m":{"UT_IFRAME":"utif_","UT_DIV":"div_utif_"},"j":{"WARN":"WARN"},"e":{"DEBUG_MODE":"ast_debug","AST_DONGLE":"ast_dongle","AST_DEBUG_MEMBER":"ast_debug_member","AST_DEBUG_BIDDER":"ast_debug_bidder","AST_TEST":"ast_test","AST_TOOLKIT":"ast_toolkit","AST_OVERRIDE":{"BASE":"ast_override_","DIV":"div","INDEX":"index","TAG_ID":"tag_id","INV_CODE":"inv_code","PUBLISHER_ID":"publisher_id"}},"l":{"UNDEFINED":"undefined","OBJECT":"object","STRING":"string","NUMBER":"number"},"c":{"IE":"msie","OPERA":"opera"},"n":{"LOADED":"loaded","IMPRESSION":"impression"},"f":{"UT_BASE":"/ut/v3","IMPBUS":"ib.adnxs.com","IMPBUS_SIMPLE":"ib.adnxs-simple.com","UT_PREBID":"/ut/v3/prebid"},"q":{"MEDIA_TYPE":"media_type","CREATIVE_ID":"creative_id","AD_TYPE":"ad_type","BANNER":"banner","VIDEO":"video","CONTENT":"content","UUID":"uuid"},"k":{"BANNER":"banner","NATIVE":"native","VIDEO":"video"},"a":{"CREATIVE_ID":"creative_id","NOTIFY":"notify_url","NOAD":"no_ad_url","IMP_URLS":"impression_urls","TRACKERS":"trackers"},"d":{"RTB":"rtb","CSM":"csm","SSM":"ssm"},"b":{"BANNER":"banner","NATIVE":"native","VIDEO":"video"},"i":{"VIDEO_MEDIATION_JS":"//acdn.adnxs-simple.com/video/astMediation/AstMediationManager.js","BANNER_MEDIATION_JS": "//www.asadcdn.com/adlib/libmodules/extensions/mediation' + (ASCDP.hashMap.extensions.mediation ? "." + ASCDP.hashMap.extensions.mediation : "") + '.js","SAFE_FRAME_URL":"//acdn.adnxs-simple.com/ast/safeframe/static/0.53.0/html/safeframe-v2.html","CDN_ORIGIN":"acdn.adnxs-simple.com"},"g":{"REQUEST":"adRequested","AVAILABLE":"adAvailable","LOADED":"adLoaded","LOADED_MEDIATED":"adLoadedMediated","NO_BID_MEDIATED":"adNoBidMediated","REQUEST_FAIL":"adRequestFailure","NO_BID":"adNoBid","DEFAULT":"adDefault","ERROR":"adError","COLLAPSE":"adCollapse","BAD_REQUEST":"adBadRequest"},"p":{"ARRAY":"Array","STRING":"String","FUNC":"Function","NUM":"Number","OBJ":"Object","BOOL":"Boolean"},"o":{"DEFAULT_ZINDEX":3000,"STATUS":{"READY":"ready","NOTIFY_EXPANDED":"expanded","NOTIFY_COLLAPSED":"collapsed","NOTIFY_ERROR":"error","FOCUS_CHANGE":"focus-change","GEOM_UPDATE":"geom-update","CMP":"cmp"}},"h":{"CREATIVE":"creative"}}')
}, function (e, t, n) {
    "use strict";
    n.r(t), Object.defineProperty && function () {
        try {
            return Object.defineProperty({}, "x", {}), !0
        } catch (e) {
            return !1
        }
    }() || (Object.defineProperty = function (e, t, n) {
        e[t] = n.value
    });
    var a;

    function i(e) {
        r.setParentNode(e), r.getContainer().querySelector("#ancookie-close").addEventListener("click", (function () {
            e.remove()
        }));
        var t, n = function () {
            var e = r.getSliderElement(), n = o(e), i = r.getMessageElement();
            i.setAttribute("style", "-webkit-transition: none; -webkit-transform: translateX(0); -webkit-column-width: " + n + "px;");
            var s = r.getNav();
            s.innerHTML = "", clearTimeout(t), t = setTimeout((function () {
                clearInterval(a), i.style.webkitTransition = "opacity 0.3s ease-out", i.style.opacity = 1;
                var t = e.scrollWidth + 10;
                1 < Math.round(t / n) && (function (e) {
                    for (var t = "<span class=selected></span>", n = 1; n < 2; n++) t += "<span></span>";
                    e.innerHTML = t
                }(s), function () {
                    var e, t = o(r.getSliderElement()), n = {cycles: 2, isFirstSlide: !0};
                    a = setInterval((function () {
                        n.cycles || clearInterval(a), e = n.isFirstSlide ? 1 : 0, n = function (e, t, n) {
                            var a = r.getMessageElement();
                            a.style.webkitTransition = "opacity 0.3s ease-out, -webkit-transform " + t + "s cubic-bezier(0.23, 1, 0.32, 1)", a.style.webkitTransform = "translateX(" + e + "px)", 0 == e && n.cycles--, n.isFirstSlide = !n.isFirstSlide;
                            for (var i = r.getContainer().querySelectorAll("span"), o = 0; o < i.length; o++) "selected" === i[o].className ? i[o].removeAttribute("class") : i[o].setAttribute("class", "selected");
                            return n
                        }(-1 * e * t, 1.2, n)
                    }), 3e3)
                }())
            }), 300)
        };
        n(), window.addEventListener("resize", n)
    }

    var r = function () {
        var e, t, n, a, i;
        return {
            getContainer: function () {
                return e || (e = i.querySelector("#ancookie-container")), e
            }, getMessageElement: function () {
                return t || (t = i.querySelector("#ancookie-msg")), t
            }, getSliderElement: function () {
                return n || (n = i.querySelector("#ancookie-slider")), n
            }, getNav: function () {
                return a || (a = i.querySelector("#ancookie-nav div")), a
            }, setParentNode: function (e) {
                i = e
            }
        }
    }();

    function o(e) {
        return e.offsetWidth
    }

    var s = "http://ib.adnxs.com/seg?add=1&redir=", d = "//ib.adnxs.com/getuidj", c = !1;

    function u() {
        c || (c = !0, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (function () {
            if ("true" !== document.cookie.replace(/(?:(?:^|.*;\s*)anCookiesetFooter\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
                var e = ((t = document.createElement("div")).id = "cookiemsg-slider", t.innerHTML = '<style media="screen">.ancookie-header {\n  background: #d3d3d3;\n  text-overflow: ellipsis;\n  border-collapse: collapse;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  min-height: 38px;\n}\n\n.ancookie-header * {\n  font-size: 12px;\n  font-family: Verdana, Arial, Helvetica, sans-serif !important;\n  color: #555;\n  line-height: normal !important;\n  margin: 0;\n  padding: 0;\n}\n\n.ancookie-header p {\n  padding: 10px 10px 10px 38px;\n  text-align: left;\n}\n\n.ancookie-header a:link,\n.ancookie-header a:hover,\n.ancookie-header a:visited,\n.ancookie-header a:active {\n  color: #e6e6e6;\n  text-decoration: underline;\n  font-weight: 700;\n}\n\n.ancookie-header {\n  position: fixed;\n  opacity: 0.9;\n}\n\n.ancookie-header * {\n  font-size: 11px !important;\n}\n\n#ancookie-msg {\n  height: 34px;\n  opacity: 0;\n}\n\n@media only screen and (min-width: 1224px) {\n  .ancookie-header * {\n    font-size: 12px !important;\n  }\n\n  #ancookie-msg {\n    height: 20px;\n    opacity: 0;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  .ancookie-header {\n    position: fixed;\n  }\n}\n\n.ancookie-header {\n  z-index: 9999;\n  opacity: 1;\n}\n\n#ancookie-slider {\n  overflow: hidden;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n#ancookie-slider p {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  -webkit-column-gap: 20px;\n  -webkit-column-rule-width: 0;\n}\n\n#ancookie-nav {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: -11px;\n  z-index: 200;\n  text-align: center;\n}\n\n#ancookie-nav div {\n  display: inline-block;\n  padding: 0 10px;\n  background-color: #d3d3d3;\n  border-radius: 10px 10px 0 0;\n}\n\n#ancookie-nav span {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  background-color: #e6e6e6;\n  border-radius: 50%;\n  margin: 1px 2px;\n  box-sizing: border-box;\n  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-opacity: 0.5;\n}\n\n#ancookie-nav span.selected {\n  background-color: #555;\n  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-opacity: 1;\n}\n\n#ancookie-close {\n  position: absolute;\n  right: 5px;\n  bottom: 20px;\n  cursor: pointer;\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n}\n</style><div class="ancookie-header" id="ancookie-container">\n  <div id="ancookie-nav">\n    <div></div>\n  </div>\n  <div id="ancookie-slider">\n    <p id="ancookie-msg">Your browser blocks 3rd party cookies by default. By clicking on page you allow our partner AppNexus to place cookies to show relevant ads. Read more or opt out of these cookies <a href="https://www.appnexus.com/en/company/platform-privacy-policy#choices" target="_blank" style="color: #4f4f4f;">here</a>. This notice appears once </p>\n    <div id="ancookie-close">&times</div>\n  </div>\n</div>\n', t);
                document.body.appendChild(e), i(e), document.cookie = "anCookiesetFooter=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
            }
            var t
        }(), function (e, t) {
            var n;
            try {
                n = new XMLHttpRequest
            } catch (e) {
                return
            }
            n.open("GET", e), n.withCredentials = !0, n.onreadystatechange = function () {
                if (4 === n.readyState && 200 === n.status) try {
                    var e = JSON.parse(n.responseText);
                    t(e)
                } catch (e) {
                    console.error(e)
                }
            }, n.send()
        }(d, l)) : console.log("Not safari, skipping link override"))
    }

    function l(e) {
        console.log(e.uid), 0 === (parseInt(e.uid, 10) || 0) && function () {
            console.log("Perfoming link override.");
            for (var e = 0; e < document.links.length; e++) {
                var t = document.links[e];
                t.href = s + encodeURIComponent(t.href)
            }
        }()
    }

    var p = n(0), f = p.p.ARRAY, g = p.p.STRING, m = p.p.FUNC, v = p.p.NUM, h = p.p.OBJ,
        y = Object.prototype.hasOwnProperty, b = !1, w = p.e.DEBUG_MODE, I = p.l.UNDEFINED, _ = p.d.RTB, E = p.d.CSM,
        T = p.d.SSM, S = p.h, k = null;
    try {
        k = "object" == typeof console.info ? console.info : console.info.bind(window.console)
    } catch (e) {
    }
    var x = function (e, t, n, a) {
        e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent && e.attachEvent("on" + t, n)
    }, A = function (e, t, n, a) {
        e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent && e.detachEvent("on" + t, n)
    }, C = function (e, t) {
        return Object.prototype.toString.call(e) === "[object " + t + "]"
    }, D = function (e) {
        return C(e, h)
    }, R = function (e) {
        return C(e, m)
    }, N = function (e) {
        return C(e, g)
    }, P = function (e) {
        return C(e, f)
    }, M = function (e) {
        return C(e, v)
    };

    function O(e) {
        return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }

    var q = function (e) {
        if (!e) return !0;
        if (P(e) || N(e)) return 0 === e.length;
        for (var t in e) if (y.call(e, t)) return !1;
        return !0
    }, U = function () {
        return window.console && window.console.log
    }, B = function () {
        var e = new Date;
        return "[" + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + ":" + e.getMilliseconds() + "] "
    }, F = function (e) {
        if (J() && U()) {
            var t = B(), n = oe() ? "SAFEFRAME MESSAGE: " : "MESSAGE: ";
            console.log(t + n + e)
        }
    }, L = function (e) {
        if (J() && U()) {
            var t = B(), n = oe() ? "SAFEFRAME WARN: " : "WARN: ";
            console.warn ? console.warn(t + n + e) : console.log(t + n + e)
        }
    }, z = function (e, t) {
        if (J() && U()) {
            var n = t || "GENERAL_ERROR", a = B(), i = oe() ? "SAFEFRAME " : "";
            console.error ? console.error(a + i + n + ": " + e) : console.log(a + i + n + ": " + e)
        }
    }, W = function (e) {
        J() && U() && console.timeStamp && console.timeStamp(e)
    }, j = function (e, t) {
        if (J() && U()) {
            var n = B();
            if (k) {
                t && 0 !== t.length || (t = "");
                var a = oe() ? "SAFEFRAME INFO: " : "INFO: ";
                k(n + a + e + ("" === t ? "" : " : params : "), t)
            }
        }
    }, V = function (e, t, n) {
        var a = e.document, i = a.createElement("script");
        i.type = "text/javascript", i.async = !0, n && "function" == typeof n && (i.readyState ? i.onreadystatechange = function () {
            "loaded" !== i.readyState && "complete" !== i.readyState || (i.onreadystatechange = null, n())
        } : i.onload = function () {
            n()
        }), i.src = t;
        var r = a.getElementsByTagName("head");
        return (r = r.length ? r : a.getElementsByTagName("body")).length && (r = r[0]).insertBefore(i, r.firstChild), i
    }, G = function () {
        var e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
        }))
    }, H = function (e, t, n) {
        var a = void 0;
        if (n = "anx_" + n + (new Date).getTime(), e && t) {
            (a = new Image).id = n, a.src = t, a.height = 0, a.width = 0, a.style.display = "none", a.onload = function () {
                try {
                    this.parentNode.removeChild(this)
                } catch (e) {
                }
            };
            try {
                e.insertBefore(a, e.firstChild)
            } catch (e) {
                z("Error logging impression for tag: " + n + " :" + e.message)
            }
        }
    }, X = function (e, t) {
        if (!q(e)) {
            if (R(e.forEach)) return e.forEach(t);
            var n = 0, a = e.length;
            if (a > 0) for (; n < a; n++) t(e[n], n, e); else for (n in e) y.call(e, n) && t(e[n], n, e)
        }
    }, J = function () {
        return !!oe() || (ae().apntag = ae().apntag || {}, apntag && !1 === apntag.debug && !1 === b && (apntag.debug = "TRUE" === Q(w).toUpperCase(), b = !0), !(!apntag || !apntag.debug))
    }, Y = function (e) {
        var t = apntag.requests.tags[e], n = t && t.initCollapsed,
            a = n && n.expandBy && ce(S).indexOf(n.expandBy) >= 0;
        return n && a
    }, K = function (e, t) {
        return !!e && -1 !== e.indexOf(t)
    }, $ = function () {
        try {
            return window.top.location.search
        } catch (e) {
            try {
                return window.location.search
            } catch (e) {
                return ""
            }
        }
    }, Q = function (e, t) {
        var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t || $());
        return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }, Z = function (e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : typeof e[t] !== I && e.constructor.prototype[t] !== e[t]
    }, ee = function (e, t) {
        if (q(e)) return [];
        if (R(e.map)) return e.map(t);
        var n = [];
        return X(e, (function (a, i) {
            n.push(t(a, i, e))
        })), n
    }, te = function (e, t, n) {
        return null == t ? n : N(t) ? t : M(t) ? t.toString() : void L("Unsuported type for param: " + e + " required type: String")
    }, ne = function (e, t, n, a) {
        return null == t ? a : C(t, n) ? t : (L("Unsuported type for param: " + e + " required type: " + n), n === v && (t = Number(t)), isNaN(t) ? a : t)
    }, ae = function () {
        return window
    }, ie = function (e) {
        if (e && e.length > 0) {
            if (e[0][_]) return e[0][_];
            if (e[0][E]) return e[0][E];
            if (e[0][T]) return e[0][T]
        }
    }, re = function (e) {
        if (null === e || !(e instanceof Object)) return e;
        var t = e instanceof Array ? [] : {};
        for (var n in e) t[n] = re(e[n]);
        return t
    };

    function oe() {
        return !(typeof $sf === I || !$sf.ext) && !!$sf.ext.debug
    }

    var se = function (e) {
            return p.m.UT_DIV + e.targetId
        }, de = function () {
            return ae().document.location.protocol + "//" + p.i.CDN_ORIGIN
        }, ce = function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
            return t
        }, ue = function (e, t) {
            var n = void 0;
            if (R(e)) return function () {
                return e && (n = e.apply(t || this, arguments), e = null), n
            }
        }, le = function (e, t) {
            var n = {};
            return ["debug", "displayed", "initialHeight", "initialWidth", "member", "showTagCalled", "sizes", "targetId", "utCalled", "utDivId", "utiframeId", "uuid", "keywords"].forEach((function (t) {
                n[t] = e[t]
            })), t && (n.on = t.on, n.off = t.off, n.modifyTag = t.modifyTag, n.setKeywords = t.setKeywords), n
        }, pe = function (e) {
            apntag.requests.tags = apntag.requests.tags || {};
            var t = !0;
            return typeof apntag.requests.tags[e] === I && (t = !1), t
        }, fe = function () {
            apntag.requests.hasLeft = !1, X(apntag.requests.tags, (function (e, t) {
                e.displayed || e.prebid || e.isMediated || (L(t + " is not displayed.", p.j.WARN), apntag.requests.hasLeft = !0)
            })), apntag.requests.hasLeft || F("all Tags are displayed.")
        }, ge = Array.prototype.slice, me = ee(p.g, (function (e) {
            return e
        })), ve = function () {
            var e = {}, t = {};

            function n(t, n) {
                var a = n[0], i = ge.call(n, 1);
                F("Emitting event for: " + t + " for ad tag: " + a), X(e[t], (function (e) {
                    var t = "";
                    if (null != (t = Z(e, "*") ? e["*"] : e[a]) && "function" == typeof t) try {
                        t.apply(null, i)
                    } catch (e) {
                        z("events._dispatch: Error executing event handler function: " + e.message)
                    }
                }))
            }

            function a(e) {
                return function (e, t) {
                    if (q(e)) return !1;
                    for (var n = e.length; n--;) if (e[n] === t) return !0;
                    return !1
                }(me, e)
            }

            return t.on = function (t, n, i) {
                if (a(t)) {
                    var r = {};
                    r[n] = i, e[t] = e[t] || [], e[t].push(r)
                } else z("Wrong event name : " + t + " Valid event names :" + me)
            }, t.emit = function (e) {
                var t = ge.call(arguments, 1);
                n(e, t)
            }, t.off = function (t, n, a) {
                q(e[t]) || X(e[t], (function (e) {
                    "*" === n && null !== e[Object.keys(e)[0]] && void 0 !== e[Object.keys(e)[0]] ? void 0 !== a && Object.values(e) !== a || (e[Object.keys(e)[0]] = null) : null !== e[n] && void 0 !== e[n] && (void 0 !== a && e[n] !== a || (e[n] = null))
                }))
            }, t.get = function () {
                return e
            }, t
        }(), he = "https:" === function () {
            try {
                return ae().top.document.location.protocol
            } catch (e) {
                return ae().document.location.protocol
            }
        }() ? "https:" : "http:", ye = [], be = !1, we = he + p.i.VIDEO_MEDIATION_JS, Ie = he + p.i.BANNER_MEDIATION_JS,
        _e = p.q.AD_TYPE, Ee = p.b.BANNER, Te = p.b.VIDEO;
    var Se = function (e, t, n, a) {
            e === Te && (null !== t && ye.push(t), be && window.APNVideo_AstMediationManager ? X(ye, (function (e) {
                if (!e.called) try {
                    window.APNVideo_AstMediationManager.selectAd(e.uuid, e, n, a), e.called = !0
                } catch (e) {
                    z("Error invoking video mediation", "mediationmanager.js")
                }
            })) : (V(window, we, (function () {
                Se(Te, null, n, a)
            })), be = !0))
        }, ke = function (e) {
            return e.isMediated || e.isRtbVideoFallback ? e.adResponse.ad : e.adResponse.ads[0]
        }, xe = function (e) {
            var t = e.content_source, n = e.ad_type;
            if (t) return e[t][n]
        }, Ae = [], Ce = p.e.AST_OVERRIDE, De = Ce.BASE, Re = De + Ce.DIV, Ne = De + Ce.INDEX, Pe = De + Ce.TAG_ID,
        Me = De + Ce.INV_CODE, Oe = void 0;

    function qe(e) {
        return Q(e, Oe)
    }

    function Ue(e, t, n) {
        var a = Number(t);
        if (isNaN(a)) z("Force Creative must be a number"); else {
            e.force_creative_id = a;
            var i = function (e, t) {
                var n = null;
                return X(t, (function (t) {
                    t.uuid === e.uuid && (n = t.targetId)
                })), n
            }(e, n);
            F("Force Creative in use for targetId: " + i)
        }
    }

    var Be = function (e) {
        function t() {
            var t = function () {
                var t = [], n = void 0;
                do {
                    try {
                        n = n ? n.parent : e;
                        try {
                            t.push({
                                referrer: n.document.referrer || null,
                                location: n.location.href || null,
                                isTop: n === e.top
                            })
                        } catch (a) {
                            t.push({
                                referrer: null,
                                location: null,
                                isTop: n === e.top
                            }), L("Trying to access cross domain iframe. Continuing without referrer and location")
                        }
                    } catch (e) {
                        return t.push({referrer: null, location: null, isTop: !1}), t
                    }
                } while (n !== e.top);
                return t
            }(), n = function () {
                try {
                    if (!e.location.ancestorOrigins) return;
                    return e.location.ancestorOrigins
                } catch (e) {
                }
            }();
            if (n) for (var a = 0, i = n.length; a < i; a++) t[a].ancestor = n[a];
            return t
        }

        return function () {
            try {
                var e = t(), n = e.length - 1, a = null !== e[n].location || n > 0 && null !== e[n - 1].referrer,
                    i = function (e) {
                        var t = [], n = null, a = null, i = null, r = null, o = null, s = null, d = void 0;
                        for (d = e.length - 1; d >= 0; d--) {
                            try {
                                a = e[d].location
                            } catch (e) {
                            }
                            if (a) n = encodeURIComponent(a), t.push(n), s || (s = n); else if (0 !== d) {
                                i = e[d - 1];
                                try {
                                    r = i.referrer, o = i.ancestor
                                } catch (e) {
                                }
                                r ? (n = encodeURIComponent(r), t.push(n), s || (s = n)) : o ? (n = encodeURIComponent(o), t.push(n), s || (s = n)) : t.push(null)
                            } else t.push(null)
                        }
                        return {stack: t, detectedRefererUrl: s}
                    }(e);
                return {referer: i.detectedRefererUrl, reachedTop: a, numIframes: n, stack: i.stack}
            } catch (e) {
            }
        }
    }(window), Fe = {STRICT: "strict", RELAXED: "relaxed", OFF: "off"}, Le = [];

    function ze(e) {
        var t, n = Fe.STRICT;
        return void 0 !== (t = e) && (D(t) || (z("Invalid schain object found:  the schain config will not be used as it is not an object."), 0)) ? (N(e.validation) && -1 !== Le.indexOf(e.validation) && (n = e.validation), n === Fe.OFF || function (e, t) {
            var n = ["complete", "ver", "ext", "nodes"], a = "Detected something wrong within the schain config:",
                i = "";

            function r(e) {
                i += "\n" + e
            }

            function o() {
                t === Fe.STRICT ? z(a + i) : L(a + i)
            }

            if (!D(e) && (r("schain.config  should be an object"), o(), t === Fe.STRICT)) return !1;
            if (Object.keys(e).forEach((function (e) {
                -1 === n.indexOf(e) && r("schain.config." + e + "  is not a valid schain property")
            })), M(e.complete) && O(e.complete) || r("schain.config.complete  should be an Integer"), N(e.ver) || r("schain.config.ver  should be a string"), Z(e, "ext") && (D(e.ext) || r("schain.object.ext  should be an object")), P(e.nodes)) {
                var s = ["asi", "sid", "hp", "rid", "name", "domain", "ext"];
                e.nodes.forEach((function (e, t) {
                    D(e) ? (Object.keys(e).forEach((function (e) {
                        -1 === s.indexOf(e) && r("schain.config.nodes[" + t + "]." + e + "  is not a valid schain property")
                    })), N(e.asi) || r("schain.config.nodes[" + t + "].asi  should be a string"), N(e.sid) || r("schain.config.nodes[" + t + "].sid  should be a string"), M(e.hp) && O(e.hp) || r("schain.config.nodes[" + t + "].hp  should be an Integer"), Z(e, "rid") && (N(e.rid) || r("schain.config.nodes[" + t + "].rid  should be a string")), Z(e, "name") && (N(e.name) || r("schain.config.nodes[" + t + "].name  should be a string")), Z(e, "domain") && (N(e.domain) || r("schain.config.nodes[" + t + "].domain  should be a string")), Z(e, "ext") && (D(e.ext) || r("schain.config.nodes[" + t + "].ext  should be an object"))) : r("schain.config.nodes[" + t + "]  should be an object")
                }))
            } else if (r("schain.config.nodes  should be an Array"), o(), t === Fe.STRICT) return !1;
            return !(i.length > 0 && (o(), t === Fe.STRICT))
        }(e.config, n) ? e.config : (z("Invalid schain object found:  due to 'strict' validation setting, the schain object will not be passed.  See the above error for details."), null)) : null
    }

    X(Fe, (function (e) {
        return Le.push(e)
    }));
    var We = p.p.STRING, je = p.p.NUM, Ve = p.p.BOOL, Ge = p.e.AST_DONGLE, He = p.e.AST_TOOLKIT, Xe = p.e.AST_TEST,
        Je = p.e.AST_DEBUG_MEMBER, Ye = p.e.AST_DEBUG_BIDDER;

    function Ke(e) {
        var t = [];
        return X(e, (function (e, n) {
            if (P(e)) {
                var a = [];
                X(e, (function (e) {
                    (e = te("keywords." + n, e)) && a.push(e)
                })), e = a
            } else {
                if (e = te("keywords." + n, e), !N(e)) return;
                e = [e]
            }
            var i = {key: n, value: e};
            t.push(i)
        })), t
    }

    var $e = function (e) {
            var t = [], n = {};
            if (P(e) && 2 === e.length && !P(e[0])) n.width = parseInt(e[0], 10), n.height = parseInt(e[1], 10), t.push(n); else if ("object" == typeof e) for (var a = 0; a < e.length; a++) {
                var i = e[a];
                (n = {}).width = parseInt(i[0], 10), n.height = parseInt(i[1], 10), t.push(n)
            }
            return t
        }, Qe = function (e, t, n, a) {
            var i = {};
            e.disablePsa && X(e.tags, (function (e) {
                e.disablePsa = !0
            })), e.gdpr_consent && (i.gdpr_consent = e.gdpr_consent), e.gpp_consent && (i.privacy = e.gpp_consent), e.us_privacy && (i.us_privacy = e.us_privacy), e.geoOverride && (i.geo_override = {
                country_code: e.geoOverride.countryCode,
                postal_code: e.geoOverride.zip
            });
            var r = [], o = 0;
            X(e.tags, (function (e) {
                if (!e.utCalled && e.member === t && function (e) {
                    if (!a) return !0;
                    var t = !1;
                    return X(a, (function (n) {
                        e.targetId === n && (t = !0)
                    })), t
                }(e)) {
                    var n = function (e) {
                        var t = {};
                        if (e.uuid = G(), !q(e.sizes)) {
                            var n = $e(e.sizes);
                            q(n) || (t.sizes = n, t.primary_size = n[0])
                        }
                        if (!q(e.privateSizes)) {
                            var a = $e(e.privateSizes);
                            q(a) || (t.private_sizes = a)
                        }
                        if (e.supplyType && N(e.supplyType) && (t.supply_type = e.supplyType), e.pubClick && N(e.pubClick) && (t.pubclick = {url: e.pubClick}), e.pubClickEnc && N(e.pubClickEnc) && (t.pubclickenc = {url: e.pubClickEnc}), e.reserve && (M(e.reserve) || P(e.reserve)) && (t.reserve = e.reserve), e.extInvCode && N(e.extInvCode) && (t.ext_inv_code = e.extInvCode), t.uuid = e.uuid, e.tagId && (t.id = e.tagId), e.formats && (t.formats = e.formats), e.position && ("above" === e.position ? t.position = 1 : "below" === e.position ? t.position = 2 : t.position = 0), e.invCode && (t.code = e.invCode), e.prebid && (t.prebid = e.prebid), e.externalImpId && (t.external_imp_id = e.externalImpId), !0 === e.allowSmallerSizes ? t.allow_smaller_sizes = !0 : t.allow_smaller_sizes = !1, !0 === e.disablePsa && (t.disable_psa = !0), e.allowedFormats && (t.ad_types = e.allowedFormats), !0 !== e.usePmtRule && !1 !== e.usePmtRule || (t.use_pmt_rule = e.usePmtRule), N(e.globalPlacementId) && (t.gpid = e.globalPlacementId), !q(e.video)) {
                            var i = e.video, r = {};
                            i.id && (r.id = i.id), q(i.mimes) || (r.mimes = i.mimes), i.maxDuration && (r.maxduration = i.maxDuration), i.minDuration && (r.minduration = i.minDuration), i.startDelay && (r.startdelay = i.startDelay), i.skippable && (r.skippable = i.skippable), i.skipOffset && (r.skipoffset = i.skipOffset), q(i.playbackMethod) || (r.playback_method = i.playbackMethod), q(i.frameworks) || (r.frameworks = i.frameworks), t.video = r
                        }
                        if (!q(e.native)) {
                            var o = e.native, s = {};
                            o.renderer_id && (s.renderer_id = o.renderer_id), o.placement_type && (s.placement_type = o.placement_type);
                            var d = {};
                            o.id && (d.id = o.id), o.title && (d.title = o.title), o.body && (d.description = o.body), o.sponsoredBy && (d.sponsored_by = o.sponsoredBy), o.image && (d.main_image = o.image, q(d.main_image.sizes) && (d.main_image.sizes = [{}])), o.icon && (d.icon = o.icon, q(d.icon.sizes) && (d.icon.sizes = [{}])), o.cta && (d.ctatext = o.cta), o.desc2 && (d.desc2 = o.desc2), o.rating && (d.rating = o.rating), o.displayUrl && (d.displayurl = o.displayUrl), o.likes && (d.likes = o.likes), o.downloads && (d.downloads = o.downloads), o.price && (d.price = o.price), o.salePrice && (d.saleprice = o.salePrice), o.phone && (d.phone = o.phone), o.address && (d.address = o.address), o.video && (d.video = {
                                required: o.video.required || !1,
                                min_duration: o.video.minDuration || 0,
                                max_duration: o.video.maxDuration
                            }), o.privacySupported && (d.privacy_supported = !0), o.customTitle1 && (d.customtitle1 = o.customTitle1), o.customTitle2 && (d.customtitle2 = o.customTitle2), o.customTitle3 && (d.customtitle3 = o.customTitle3), o.customTitle4 && (d.customtitle4 = o.customTitle4), o.customTitle5 && (d.customtitle5 = o.customTitle5), o.customBody1 && (d.custombody1 = o.customBody1), o.customBody2 && (d.custombody2 = o.customBody2), o.customBody3 && (d.custombody3 = o.customBody3), o.customBody4 && (d.custombody4 = o.customBody4), o.customBody5 && (d.custombody5 = o.customBody5), o.customCta1 && (d.customctatext1 = o.customCta1), o.customCta2 && (d.customctatext2 = o.customCta2), o.customCta3 && (d.customctatext3 = o.customCta3), o.customCta4 && (d.customctatext4 = o.customCta4), o.customCta5 && (d.customctatext5 = o.customCta5), o.customDisplayUrl1 && (d.customdisplayurl1 = o.customDisplayUrl1), o.customDisplayUrl2 && (d.customdisplayurl2 = o.customDisplayUrl2), o.customDisplayUrl3 && (d.customdisplayurl3 = o.customDisplayUrl3), o.customDisplayUrl4 && (d.customdisplayurl4 = o.customDisplayUrl4), o.customDisplayUrl5 && (d.customdisplayurl5 = o.customDisplayUrl5), o.customSocialUrl1 && (d.customsocialurl1 = o.customSocialUrl1), o.customSocialUrl2 && (d.customsocialurl2 = o.customSocialUrl2), o.customSocialUrl3 && (d.customsocialurl3 = o.customSocialUrl3), o.customSocialUrl4 && (d.customsocialurl4 = o.customSocialUrl4), o.customSocialUrl5 && (d.customsocialurl5 = o.customSocialUrl5), o.customImage1 && (d.customimage1 = o.customImage1), o.customImage2 && (d.customimage2 = o.customImage2), o.customImage3 && (d.customimage3 = o.customImage3), o.customImage4 && (d.customimage4 = o.customImage4), o.customImage5 && (d.customimage5 = o.customImage5), o.customIcon1 && (d.customicon1 = o.customIcon1), o.customIcon2 && (d.customicon2 = o.customIcon2), o.customIcon3 && (d.customicon3 = o.customIcon3), o.customIcon4 && (d.customicon4 = o.customIcon4), o.customIcon5 && (d.customicon5 = o.customIcon5), o.customSocialIcon1 && (d.customsocialicon1 = o.customSocialIcon1), o.customSocialIcon2 && (d.customsocialicon2 = o.customSocialIcon2), o.customSocialIcon3 && (d.customsocialicon3 = o.customSocialIcon3), o.customSocialIcon4 && (d.customsocialicon4 = o.customSocialIcon4), o.customSocialIcon5 && (d.customsocialicon5 = o.customSocialIcon5), d && (s.layouts = [d]), t.ad_types = t.ad_types || [], -1 === t.ad_types.indexOf("native") && t.ad_types.push("native"), t.native = s
                        }
                        if (!q(e.keywords)) {
                            var c = Ke(e.keywords);
                            t.keywords = c
                        }
                        if (e.forceCreativeId) {
                            var u = Number(e.forceCreativeId);
                            isNaN(u) ? z("Force Creative must be a number") : (t.force_creative_id = u, F("Force Creative in use for targetId: " + e.targetId))
                        }
                        return e.nobidIfUnsold && (t.nobid_if_unsold = !0), e.trafficSourceCode && (t.traffic_source_code = e.trafficSourceCode.toString()), e.customPubLog && (N(e.customPubLog) ? t.custom_pub_log = e.customPubLog : z("customPubLog must be a string")), t
                    }(e);
                    e.utCalled = !0, e.tagNumber = o, o++, r.push(n)
                }
            })), function (e, t, n) {
                if (K(Oe || $(), De)) {
                    var a = void 0, i = void 0, r = void 0, o = void 0, s = void 0, d = void 0;
                    if (!q(qe(Ne))) for (Ae = qe(Ne).split(","), a = 0; a < Ae.length; a++) {
                        s = Ae[a].split(":");
                        var c = Number(s[0]);
                        if (isNaN(c) || void 0 === t[c]) z("Invalid ast_override value for index : " + c); else {
                            d = null;
                            var u = null;
                            for (o = 0; o < n.length; o++) o === c && (u = n[o].uuid);
                            for (r = 0; r < t.length; r++) t[r].uuid === u && Ue(t[r], s[1], e)
                        }
                    }
                    if (!q(qe(Re))) for (Ae = qe(Re).split(","), a = 0; a < Ae.length; a++) {
                        s = Ae[a].split(":");
                        var l = null, p = Object.keys(e);
                        for (r = 0; r < p.length; r++) s[0] === p[r] && (l = e[p[r]].uuid);
                        if (l) for (i = 0; i < t.length; i++) t[i].uuid === l && Ue(t[i], s[1], e); else z("Invalid ast_override value for target div id : " + s[0])
                    }
                    if (!q(qe(Pe))) for (Ae = qe(Pe).split(","), a = 0; a < Ae.length; a++) {
                        s = Ae[a].split(":");
                        var f = !1;
                        for (i = 0; i < t.length; i++) (d = t[i]).id === Number(s[0]) && (Ue(d, s[1], e), f = !0);
                        f || z("Invalid ast_override value for tag id : " + s[0])
                    }
                    if (!q(qe(Me))) for (Ae = qe(Me).split(","), a = 0; a < Ae.length; a++) {
                        s = Ae[a].split(":");
                        var g = !1;
                        for (i = 0; i < t.length; i++) (d = t[i]).code === s[0] && (Ue(d, s[1], e), g = !0);
                        g || z("Invalid ast_override value for invCode : " + s[0])
                    }
                }
            }(e.tags, r, n);
            var s = Be(), d = {rd_ref: s.referer, rd_top: s.reachedTop, rd_ifs: s.numIframes, rd_stk: s.stack.join(",")};
            if (e.pageUrlOverride) {
                var c = !!(navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g)),
                    u = !(!window.webkit || !window.webkit.messageHandlers);
                (c || u) && (d.rd_can = e.pageUrlOverride)
            }
            i.referrer_detection = d, i.tags = r, i.uuid = G(), i.member_id = t, i.sdk = {source: "ast", version: "0.53.0"};
            var l = null;
            if (q(e.keywords) ? q(e.targetingParams) || (l = Ke(e.targetingParams), i.keywords = l) : (l = Ke(e.keywords), i.keywords = l), !q(e.user) && (i.user = function (e) {
                var t = {};
                if (!q(e)) {
                    if (e.externalUid && N(e.externalUid) && (t.external_uid = e.externalUid), P(e.segments)) {
                        var n = [];
                        X(e.segments, (function (e) {
                            M(e) ? n.push({id: e}) : D(e) && e.id && M(e.id) && e.value && M(e.value) && n.push(e)
                        })), t.segments = n
                    }
                    var a = ne("user.age", e.age, je);
                    t.age = a;
                    var i = ne("user.gender", e.gender, je);
                    t.gender = i;
                    var r = ne("user.language", e.language, We);
                    t.language = r;
                    var o = ne("user.dnt", e.dnt, Ve);
                    t.dnt = o
                }
                return t
            }(e.user), !q(e.user.userIds))) {
                var p = function (e) {
                    function t(e, t, n, a) {
                        t && (a ? e.push({source: n, id: t, rti_partner: a}) : e.push({source: n, id: t}))
                    }

                    var n = [];
                    return P(e) ? X(e, (function (e) {
                        if (D(e) && N(e.type) && (N(e.id) || P(e.eids))) switch (e.type.toLowerCase()) {
                            case"criteo":
                                t(n, e.id, "criteo.com", null);
                                break;
                            case"ttd":
                                t(n, e.id, "adserver.org", "TDID");
                                break;
                            case"netid":
                                t(n, e.id, "netid.de", null);
                                break;
                            case"liveramp":
                                t(n, e.id, "liveramp.com", null);
                                break;
                            case"uid2":
                                t(n, e.id, "uidapi.com", "UID2");
                                break;
                            case"extendedids":
                                X(e.eids, (function (e) {
                                    N(e.source) && N(e.id) && n.push({source: e.source, id: e.id})
                                }));
                                break;
                            default:
                                n.push(e)
                        } else L("Invalid userId object")
                    })) : L("Invalid userIds"), {eids: n}
                }(e.user.userIds).eids;
                i.eids = p
            }
            if (!q(e.schainConfig)) {
                var f = ze(e.schainConfig);
                f && (i.schain = f)
            }
            q(e.device) || (i.device = function (e) {
                var t = {}, n = e.device;
                if (!q(n)) {
                    q(n.useragent) || (t.useragent = n.useragent), q(n.geo) || (t.geo = n.geo), q(n.ip) || (t.ip = n.ip), q(n.deviceType) || (t.devicetype = n.deviceType), q(n.make) || (t.make = n.make), q(n.model) || (t.model = n.model), q(n.os) || (t.os = n.os), q(n.osVersion) || (t.os_version = n.osVersion), q(n.carrier) || (t.carrier = n.carrier);
                    var a = ne("device.connectionType", n.connectionType, je);
                    t.connectiontype = a, q(n.mcc) || (t.mcc = n.mcc), q(n.mnc) || (t.mnc = n.mnc), q(n.lmt) || (t.lmt = n.lmt), q(n.deviceId) || (t.device_id = n.deviceId);
                    var i = ne("device.devTime", n.devTime, je);
                    t.devtime = i
                }
                return t
            }(e)), q(e.app) || (i.app = function (e) {
                var t = {}, n = e.app;
                return q(n) || q(n.appid) || (t.appid = n.appid), t
            }(e)), q(e.site) || (i.site = function (e) {
                var t = {}, n = e.site;
                return q(n) || q(n.id) || (t.id = n.id), t
            }(e)), e.publisherId && (i.publisher_id = e.publisherId), e.auctionTimeout && (i.auction_timeout_ms = e.auctionTimeout), i.tags = r;
            var g = Q(Ge) || apntag.dongle;
            g && !apntag.dongle && (apntag.dongle = g), ((Q(He) || apntag.toolkit) && g || !q(e.toolkit)) && (i.toolkit = {
                enabled: !0,
                dongle: g || e.toolkit.dongle
            });
            var m = Q(Je);
            m && "" !== m && (apntag.debug_member = m);
            var v = Q(Ye);
            v && "" !== v && (apntag.debug_bidder = v);
            var h = "TRUE" === Q(Xe).toUpperCase();
            if (h && "" !== h && (apntag.requests.test = h), apntag.debug && !q(apntag.dongle)) {
                var y = "";
                apntag.debug_member && (y = apntag.debug_member);
                var b = function (e, t, n) {
                    var a = {};
                    return apntag.debug && !q(t) && (a.enabled = !0, e && (a.member_id = Number(e)), t && (a.dongle = String(t)), n && (a.bidder_id = Number(n)), a.debug_timeout = 1e3), a
                }(y, apntag.dongle, apntag.debug_bidder);
                i.debug = b
            }
            return i
        }, Ze = p.d.RTB, et = p.q.BANNER, tt = p.q.CONTENT,
        nt = "https:" === ae().document.location.protocol ? "https:" : "http:", at = function (e, t) {
            var n = void 0, a = function (e) {
                return p.m.UT_IFRAME + e.targetId + "_" + G()
            }(e), i = ae();
            if ((n = null !== i.document.getElementById(a) ? i.document.getElementById(a) : i.document.createElement("iframe")).id = a, e.alwaysUseXDomainIframe || e.enableSafeFrame) {
                F("targetId: " + e.targetId + " is using safeFrame. Loading this ad into sandboxed iframe");
                var r = void 0;
                t.renderer_url ? r = "\x3c!-- renderer loading in SF--\x3e" : e.isBannerMediation ? r = apntag.getAdMarkup(e.targetId, e.uuid) : e.isVideoMediation ? r = e.adResponse.ad[Ze][et][tt] : (r = st(e), r = "" + (r = r.replace("/&/g", "&amp;").replace("/</g", "&lt;").replace("/>/g", "&gt;").replace('/"/g', "&quot;").replace("/'/g", "&#39;")));
                var o = e.curWindow;
                delete e.curWindow;
                var s = {
                    targetId: e.targetId,
                    ad: r,
                    host: i.location.protocol + "//" + i.location.host,
                    geom: e.geom,
                    debug: J(),
                    hasFocus: document.hasFocus(),
                    hostSfSupport: e.safeframe,
                    isMediated: e.isMediated,
                    rendererUrl: t.renderer_url,
                    enableMediationEvents: apntag.requests.enableMediationEvents,
                    expandByCreative: Y(e.targetId),
                    currentTag: e
                };
                e.safeframe.meta && (s.meta = e.safeframe.meta), n.name = JSON.stringify(s), e.curWindow = o, e.safeframe.sandbox && (n.sandbox = "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts")
            } else n.name = a;
            return n.setAttribute("height", e.initialHeight), n.setAttribute("width", e.initialWidth), n.sandbox = "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation", n.tabIndex = "-1", n.width = e.initialWidth + "px", n.height = e.initialHeight + "px", n.border = "0", n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.border = "0", n.scrolling = "no", n.frameBorder = "0", e.customIframeProps && X(e.customIframeProps, (function (e, t) {
                n[t] = e
            })), n
        }, it = function (e, t) {
            if (t.alwaysUseXDomainIframe || t.enableSafeFrame) e.src = nt + p.i.SAFE_FRAME_URL; else {
                var n, a = function (e) {
                    var t = void 0;
                    try {
                        t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                    } catch (e) {
                        z("Error getting iframe document: " + e)
                    }
                    return t
                }(e);
                n = st(t), a.open("text/html", "replace"), a.write(n), a.close()
            }
        }, rt = function (e) {
            var t = e.strategy, n = e.data, a = ae().document.createElement("iframe");
            a.width = 0, a.height = 0, a.border = "0", a.sandbox = "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation", a.hspace = "0", a.vspace = "0", a.tabIndex = "-1", a.marginWidth = "0", a.marginHeight = "0", a.style.border = "0", a.style.display = "none", a.scrolling = "no", a.frameBorder = "0", "WithContent" === t && function (e, t) {
                ot(e), e.contentWindow.document.open(), e.contentWindow.document.write(t), e.contentWindow.document.close()
            }(a, n), "WithAttributes" === t && function (e, t) {
                e.src = t.src, e.id = t.id, ot(e)
            }(a, n)
        };

    function ot(e) {
        var t = ae().document.getElementsByTagName("body");
        t.length && t[0].appendChild(e)
    }

    function st(e) {
        var t = e.targetId, n = "";
        if (e.isMediated) n = e.ad.mediatedContent, F("Invoking mediation for displaying banner ad: " + t); else if (e.adResponse && 1 === e.adResponse.ads.length) {
            n = ie(e.adResponse.ads)[et][tt]
        }
        return function (e, t, n) {
            var a = function (e, t) {
                if (t) return "";
                return 'window.onerror = function(e) {\n        if(window.parent && window.parent.apntag) {\n          window.parent.apntag.recordErrorEvent(e,"' + e + '");\n          return true;\n        }\n      };'
            }(e, n);
            return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head>\n    <script>inDapIF=true;\n    apntag_targetId = "' + e + '";\n    ' + a + '\n    <\/script></head>\n    <body>\n    <script>\n    document.body.id = "' + e + '";\n    <\/script>\n    ' + t + "\n    </body></html>"
        }(t, n, e.alwaysUseXDomainIframe || e.enableSafeFrame)
    }

    var dt = {};

    function ct(e, t) {
        var n = function (e) {
            var t = {};
            return X(apntag.requests.tags, (function (n) {
                e === n.uuid && (t = n)
            })), t
        }(e.uuid);
        if (this.targetId = n.targetId, e.nobid) return this.nobid = !0, this.tagId = e.tag_id, this.auctionId = e.auction_id, this;
        e.ads && e.ads.length, this.tagId = e.tag_id, this.auctionId = e.auction_id;
        var a = t || e.ads[0], i = this;
        X(ft(a), (function (e, t) {
            i[t] = e
        }));
        var r = void 0, o = void 0, s = function (e) {
            var t = [];
            q(e.sizes) || (t = $e(e.sizes));
            return t
        }(n);
        P(s) && s[0] && (r = s[0].height, o = s[0].width);
        var d = a.content_source ? a.content_source : "rtb";
        if (a[d] && a[d].banner) this.banner = {
            width: a[d].banner.width,
            height: a[d].banner.height,
            content: a[d].banner.content,
            trackers: a[d].trackers
        }, r = a[d].banner.height, o = a[d].banner.width; else if (a.rtb && a.rtb.video) {
            var c = a.rtb.video;
            this.video = {
                duration: c.duration_ms,
                playbackMethods: c.playback_methods,
                frameworks: c.frameworks,
                content: c.content,
                trackers: a.rtb.trackers
            }
        } else if (a.rtb && a.rtb[p.k.NATIVE]) {
            var u = a.rtb[p.k.NATIVE];
            this[p.k.NATIVE] = gt(u), ut(a, this.targetId)
        }
        this.height = r, this.width = o
    }

    var ut = function (e, t) {
        if (e.viewability && e.viewability.config) {
            var n = e.viewability.config;
            "string" == typeof t && (n = n.replace("%native_dom_id%", t), J() && null === document.getElementById(t) && L("No element found in the page for the native creative " + t + ", see https://wiki.appnexus.com/display/sdk/DefineTag 'targetId'")), rt({
                strategy: "WithContent",
                data: n
            })
        }
    }, lt = function (e, t) {
        if (!e || !e.uuid) return {};
        if (dt[e.uuid] && !t) return dt[e.uuid];
        try {
            var n = function (e, t) {
                return new ct(e, t)
            }(e, t);
            return t || (dt[e.uuid] = n), n
        } catch (e) {
            z("adManager.getAdObj: Error trying to instantiate new adObj: " + e.message)
        }
    };
    var pt = function (e, t, n, a) {
        return {code: a, errMessage: e || n.message, exception: n, targetId: t}
    };

    function ft(e) {
        return {
            adType: e.ad_type,
            buyerMemberId: e.buyer_member_id,
            source: e.content_source,
            cpm: e.cpm,
            cpm_publisher_currency: e.cpm_publisher_currency,
            publisher_currency_code: e.publisher_currency_code,
            creativeId: e.creative_id,
            mediaSubtypeId: e.media_subtype_id,
            mediaTypeId: e.media_type_id,
            brandCategoryId: e.brand_category_id,
            dealId: e.deal_id
        }
    }

    function gt(e) {
        return {
            type: e.type,
            title: e.title,
            body: e.desc,
            desc2: e.desc2,
            fullText: e.full_text,
            icon: e.icon,
            image: e.main_img,
            cta: e.ctatext,
            sponsoredBy: e.sponsored,
            impressionTrackers: e.impression_trackers,
            clickTrackers: e.link && e.link.click_trackers,
            clickUrl: e.link && e.link.url,
            clickFallbackUrl: e.link && e.link.fallback_url,
            javascriptTrackers: e.javascript_trackers,
            video: e.video,
            privacyLink: e.privacy_link,
            rating: e.rating,
            displayUrl: e.displayurl,
            likes: e.likes,
            downloads: e.downloads,
            price: e.price,
            salePrice: e.saleprice,
            phone: e.phone,
            address: e.address,
            customTitle1: e.title1,
            customTitle2: e.title2,
            customTitle3: e.title3,
            customTitle4: e.title4,
            customTitle5: e.title5,
            customBody1: e.body1,
            customBody2: e.body2,
            customBody3: e.body3,
            customBody4: e.body4,
            customBody5: e.body5,
            customCta1: e.ctatext1,
            customCta2: e.ctatext2,
            customCta3: e.ctatext3,
            customCta4: e.ctatext4,
            customCta5: e.ctatext5,
            customDisplayUrl1: e.displayurl1,
            customDisplayUrl2: e.displayurl2,
            customDisplayUrl3: e.displayurl3,
            customDisplayUrl4: e.displayurl4,
            customDisplayUrl5: e.displayurl5,
            customSocialUrl1: e.socialurl1,
            customSocialUrl2: e.socialurl2,
            customSocialUrl3: e.socialurl3,
            customSocialUrl4: e.socialurl4,
            customSocialUrl5: e.socialurl5,
            customImage1: e.image1,
            customImage2: e.image2,
            customImage3: e.image3,
            customImage4: e.image4,
            customImage5: e.image5,
            customIcon1: e.icon1,
            customIcon2: e.icon2,
            customIcon3: e.icon3,
            customIcon4: e.icon4,
            customIcon5: e.icon5,
            customSocialIcon1: e.socialicon1,
            customSocialIcon2: e.socialicon2,
            customSocialIcon3: e.socialicon3,
            customSocialIcon4: e.socialicon4,
            customSocialIcon5: e.socialicon5
        }
    }

    var mt, vt, ht = (mt = void 0, vt = {}, {
            getInstance: function () {
                return mt || (mt = {
                    add: function (e, t) {
                        vt[e] = t
                    }, getIframe: function (e) {
                        return Z(vt, e) ? vt[e] : null
                    }, getIframes: function () {
                        return vt
                    }, resetInstance: function () {
                        vt = {}
                    }
                }), mt
            }
        }), yt = window.document, bt = "auto", wt = "scroll", It = "getAttribute", _t = "setAttribute",
        Et = "removeAttribute", Tt = window.Number, St = Tt && Tt.MAX_VALUE, kt = -1 * St, xt = "toLowerCase",
        At = "toFixed", Ct = "length", Dt = "overflow", Rt = window.String, Nt = window.Math, Pt = Math.max,
        Mt = Math.min, Ot = Math.round, qt = window, Ut = window.navigator, Bt = Ut.userAgent || "",
        Ft = !(!window.ActiveXObject && "ActiveXObject" in window) && qt && "ActiveXObject" in qt, Lt = function () {
            var e, t = {};
            t.ie = t.opera = t.gecko = t.webkit = t.safari = t.chrome = t.air = t.ipod = t.ipad = t.iphone = t.android = t.webos = t.silk = t.nodejs = t.phantomjs = 0, t.mobile = t.ios = t.caja = Ut && Ut.cajaVersion;
            var n = Bt;
            n && (nn(/KHTML/, n) && (t.webkit = 1), nn(/IEMobile|XBLWP7/, n) && (t.mobile = "windows"), nn(/Fennec/, n) && (t.mobile = "gecko"), (e = tn(n, /AppleWebKit\/([^\s]*)/, 1)) && (t.webkit = en(e), t.safari = t.webkit, nn(/PhantomJS/, n) && (e = tn(n, /PhantomJS\/([^\s]*)/, 1)) && (t.phantomjs = en(e)), nn(/ Mobile\//, n) || nn(/iPad|iPod|iPhone/, n) ? (t.mobile = "Apple", e = (e = tn(n, /OS ([^\s]*)/, 1)) && en(e.replace("_", ".")), t.ios = e, t.ipad = t.ipod = t.iphone = 0, (e = tn(n, /iPad|iPod|iPhone/, 0)) && (t[e[xt]()] = t.ios)) : ((e = tn(n, /NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/, 0)) && (t.mobile = e), nn(/webOS/, n) && (t.mobile = "WebOS", (e = tn(n, /webOS\/([^\s]*);/, 1)) && (t.webos = en(e))), nn(/ Android/, n) && (t.mobile = "Android", (e = tn(n, /Android ([^\s]*);/, 1)) && (t.android = en(e))), nn(/Silk/, n) && (e = tn(n, /Silk\/([^\s]*)\)/, 1)) && (t.silk = en(e))), (e = n.match(/(Chrome|CrMo)\/([^\s]*)/)) && e[1] && e[2] ? (t.chrome = en(e[2]), t.safari = 0, "CrMo" === e[1] && (t.mobile = "chrome")) : (e = tn(n, /AdobeAIR\/([^\s]*)/)) && (t.air = e[0])), t.webkit || ((e = tn(n, /Opera[\s\/]([^\s]*)/, 1)) ? (t.opera = en(e), (e = tn(n, /Opera Mini[^;]*/, 0)) && (t.mobile = e)) : (e = tn(n, /MSIE\s([^;]*)/, 1)) ? t.ie = en(e) : (e = tn(n, /Gecko\/([^\s]*)/)) && (t.gecko = 1, (e = tn(n, /rv:([^\s\)]*)/, 1)) && (t.gecko = en(e)))));
            return t
        }(), zt = Lt.ie || 0, Wt = Lt.webkit || 0, jt = Lt.gecko || 0, Vt = Lt.opera || 0, Gt = 0, Ht = {},
        Xt = "clientWidth", Jt = "clientHeight";

    function Yt(e) {
        var t, n, a, i, r, o, s, d, c, u = {t: 0, l: 0, r: 0, b: 0, w: 0, h: 0, z: 0}, l = "getBoundingClientRect",
            p = 0, f = 0, g = 0, m = 0, v = !1, h = dn(e) || qt.document, y = h.compatMode, b = h.documentMode || 0;
        if (Kt(e)) try {
            if (r = rn(e), t = cn(e), n = mn(e), u.l = e.offsetLeft || 0, u.t = e.offsetTop || 0, a = e, i = null, v = jt || Wt > 519, !(e === t) && e[l]) Ft && (!b || b > 0 && b < 8 || "BackCompat" === y) && (s = t.clientLeft, d = t.clientTop), c = e[l](), u.t = c.top, u.l = c.left, (s || d) && (u.l -= s, u.t -= d), (n.y || n.x) && (!Lt.ios || Lt.ios >= 4.2) && (u.l += n.x, u.t += n.y); else {
                for (; (a = a.offsetParent) && Kt(a) && i !== a;) s = a.offsetLeft, d = a.offsetTop, u.t += d, u.l += s, v && (u = on(a, u)), i = a;
                if ("fixed" != r.position) {
                    for (a = e, i = null; (a = a.parentNode) && Kt(a) && i !== a && a != t;) p = a.scrollTop, f = a.scrollLeft, jt && "visible" != (o = rn(a))[Dt] && (u = on(a, u, o)), (p || f) && (u.l -= f, u.t -= p), i = a;
                    u.l += n.x, u.t += n.y
                } else u.l += n.x, u.t += n.y
            }
            e == t ? (m = e[Jt], g = e[Xt]) : (m = e.offsetHeight, g = e.offsetWidth), u.b = u.t + m, u.r = u.l + g, u.w = Pt(g, 0), u.h = Pt(m, 0), u.z = r.zIndex
        } catch (e) {
            u = {t: 0, l: 0, r: 0, b: 0, w: 0, h: 0, z: 0}
        }
        return u
    }

    function Kt(e) {
        return 1 === $t(e)
    }

    function $t(e) {
        return ln(e && e.nodeType, -1)
    }

    function Qt(e) {
        return !(!(e = Zt(e)) || -1 != e.search(/\D+/g)) || (!(!e || -1 == e.search(/px/gi)) || void 0)
    }

    function Zt(e) {
        var t = typeof e;
        return "string" == t ? e : "number" != t || e ? "object" == t && e && e.join ? e.join("") : !1 === e ? "false" : !0 === e ? "true" : e ? Rt(e) : "" : "0"
    }

    function en(e) {
        var t = 0;
        return parseFloat(e.replace(/\./g, (function () {
            return 1 == t++ ? "" : "."
        })))
    }

    function tn(e, t, n) {
        var a = e && e.match(t);
        return null == n ? a : a && a[n] || null
    }

    function nn(e, t) {
        return e.test(t)
    }

    function an(e) {
        var t, n = null;
        try {
            e && ((n = e.parentWindow || e.defaultView || null) || (n = (t = dn(e)) && (t.parentWindow || t.defaultView) || null))
        } catch (e) {
            n = null
        }
        return n
    }

    function rn(e) {
        var t;
        if (an(e).getComputedStyle) try {
            t = an(e).getComputedStyle(e, null)
        } catch (e) {
            t = null
        } else try {
            t = e.currentStyle
        } catch (e) {
            t = null
        }
        return t
    }

    function on(e, t, n) {
        var a = 0, i = 0;
        return (n = n || rn(e)) && (a = n.borderTopWidth, i = n.borderLeftWidth, a = Qt(a) ? ln(a, 0) : 0, i = Qt(i) ? ln(i, 0) : 0, jt && /^t(?:able|d|h|r|head|foot)$/i.test(fn(e)) && (a = i = 0)), (t = t || {
            t: 0,
            l: 0
        }).t += a, t.l += i, t
    }

    function sn(e) {
        return e && (e.parentNode || e.parentElement)
    }

    function dn(e) {
        var t = null;
        try {
            e && (t = 9 == $t(e) ? e : e.document || e.ownerDocument || null)
        } catch (e) {
            t = null
        }
        return t
    }

    function cn(e) {
        var t = e && dn(e) || yt, n = t.compatMode, a = t.documentElement;
        return n && !Vt && "CSS1Compat" != n && (a = t.body), a
    }

    function un(e) {
        var t, n, a, i, r = [-1, -1, -1, -1], o = ["clipTop", "clipRight", "clipBottom", "clipLeft"], s = 0;
        if (!e) return r;
        if (zt) for (; n = o[s];) Qt(t = e[n]) && (t = ln(t, -1)) >= 0 && (r[s] = t), s++; else if ((t = e.clip) && -1 != t.search(/\d+/g)) for (i = (r = (r = (t = t.replace(/\w+\(([^\)]*?)\)/g, "$1")).split(" "))[Ct] <= 1 ? r.split(",") : r)[Ct], s = 0; i--;) Qt(a = r[s]) ? r[s] = ln(a, -1) : r[s] = -1, s++;
        return r
    }

    function ln(e, t, n, a) {
        if ("number" != typeof e) try {
            e = e ? parseFloat(e) : Tt.NaN
        } catch (t) {
            e = Tt.NaN
        }
        return null == a && (a = St), null == n && (n = kt), (isNaN(e) || e < n || e > a) && null != t ? t : e
    }

    function pn(e, t) {
        var n = !1, a = e && e.nodeType || -1, i = t && t.nodeType || -1;
        if (1 == a && -1 != i) if (e.contains) if (Vt || 1 == i) n = e.contains(t); else for (; t;) {
            if (e === t) {
                n = !0;
                break
            }
            t = t.parentNode
        } else e.compareDocumentPosition && (n = e === t || !!(16 & e.compareDocumentPosition(t)));
        return n
    }

    function fn(e) {
        return e && 1 == e.nodeType && e.tagName[xt]() || ""
    }

    function gn(e, t, n) {
        try {
            arguments[Ct] > 2 ? null === n ? e[Et](t) : (n = Zt(n), "class" == t[xt]() ? e.className = n : e[_t](t, n)) : n = Zt(e[It](t))
        } catch (e) {
            n = ""
        }
        return n
    }

    function mn(e) {
        var t, n, a, i, r = {x: 0, y: 0, w: 0, h: 0},
            o = {scrollLeft: 0, scrollTop: 0, scrollWidth: 0, scrollHeight: 0}, s = 0, d = 0;
        return n = (t = dn(e) || yt).documentElement || o, i = t.body || o, (a = t.defaultView) && (s = ln(a.pageXOffset, 0), d = ln(a.pageYOffset, 0)), r.x = Pt(n.scrollLeft, i.scrollLeft, s), r.y = Pt(n.scrollTop, i.scrollTop, d), r.w = Pt(n.scrollWidth, i.scrollWidth, 0), r.h = Pt(n.scrollHeight, i.scrollHeight, 0), r
    }

    function vn(e, t, n) {
        var a, i, r, o, s, d, c, u, l, p, f, g, m, v, h, y, b, w, I, _, E, T, S, k, x, A, C, D, R, N, P, M, O, q, U,
            B = e && sn(e), F = cn(e), L = Yt(e), z = Yt(F), W = mn(F), j = function (e) {
                var t = cn(e), n = 0, a = 0;
                return t && (n = t.scrollWidth || 0, a = t.scrollHeight || 0), {t: 0, l: 0, b: a, r: n, w: n, h: a}
            }(e), V = {t: 0, l: 0, r: 0, b: 0, w: 0, h: 0},
            G = {t: 0, l: 0, r: 0, b: 0, xs: 0, ys: 0, xiv: 0, yiv: 0, iv: 0, w: 0, h: 0}, H = [], X = !1,
            J = {left: null, right: null, top: null, bottom: null};
        if (t = t && "object" == typeof t ? t : {}, B) for (a = z.t, i = z.l, r = z.r, o = z.b; (c = rn(B)) && ("block" != c.display && "absolute" != c.position && "none" == c.float && "none" == c.clear || (X = B == F, p = (q = Yt(B)).t, f = q.l, g = q.r, m = q.b, _ = c[Dt + "X"], E = c[Dt + "Y"], T = c[Dt], S = X ? [-1, -1, -1, -1] : un(c), U = !1, X ? (v = W.w, b = W.h) : (v = B.scrollWidth, b = B.scrollHeight), h = B.offsetWidth, w = B.offsetHeight, y = B[Xt], I = B[Jt], !d && h > y && (d = h - y), !s && w > I && (s = w - I), X ? (v > y && ((f = 0) > i && (i = f), (g = (qt.innerWidth || h) + W.x) < r && (r = g)), b > I && ((p = 0) > a && (a = p), (m = (qt.innerHeight || w) + W.y) < o && (o = m))) : (d && g - f == h && (g -= d), s && m - p == w && (m -= s), "hidden" != _ && _ != wt && _ != bt && "hidden" != T && T != wt && T != bt || (f > i && (i = f, J.left = B), g < r && (r = g, J.right = B), (_ == wt || T == wt || (_ == bt || T == bt) && v > y) && (H.push(B), U = !0)), S[3] > 0 && (D = f + S[3]) > i && (i = D, J.left = B), S[1] > 0 && (R = g + S[1]) < r && (r = R, J.right = B), "hidden" != E && E != wt && E != bt && "hidden" != T && T != wt && T != bt || (p > a && (a = p, J.top = B), m < o && (o = m, J.bottom = B), U || (E == wt || T == wt || (E == bt || T == bt) && b > I) && (H.push(B), U = !0)), S[0] > 0 && (A = p + S[0]) > a && (a = A, J.top = B), S[2] > 0 && (C = q.t + S[2]) < o && (o = C, J.bottom = B))), B != F) && (B = sn(B)) && fn(B);) ;
        return (V = {
            t: Pt(a, 0),
            l: Pt(i, 0),
            r: Pt(r, 0),
            b: Pt(o, 0)
        }).w = Pt(V.r - V.l, 0), V.h = Pt(V.b - V.t, 0), f = L.l, g = L.r, p = L.t, u = g - f, l = (m = L.b) - p, D = V.l, R = V.r, A = V.t, R - D, (C = V.b) - A, x = (x = (x = Mt(m, C) - Pt(p, A)) < 0 ? 0 : x) > l ? l : x, k = (k = (k = Mt(g, R) - Pt(f, D)) < 0 ? 0 : k) > u ? u : k, G.t = A < p ? C <= p ? 0 : Pt(p - A, 0) : 0, G.b = C > m ? m <= A ? 0 : Pt(C - m, 0) : 0, G.l = D < f ? R <= f || C <= p || m <= A ? 0 : Pt(f - D, 0) : 0, G.r = R > g ? g <= D || C <= p ? 0 : Pt(R - g, 0) : 0, G.w = Pt(G.r - G.l, 0), G.h = Pt(G.b - G.t, 0), G.xiv = u > 0 ? ln((k / u)[At](2)) : 0, G.yiv = l > 0 ? ln((x / l)[At](2)) : 0, G.iv = u > 0 || l > 0 ? ln((k * x / (u * l))[At](2)) : 0, G.civ = 0, n && G.iv > .49 && (N = (O = function (e) {
            var t, n, a, i, r, o, s, d, c, u, l, p, f, g, m, v, h = Yt(e), y = dn(e), b = cn(y), w = h.t, I = h.l,
                _ = [], E = 0;
            if (_.on = 0, t = h.w, n = h.h, r = a = Ot(t / 10), o = i = Ot(n / 10), t <= 1 || n <= 1 || a < 1 || i < 1) return _;
            if (m = (v = mn()).y, g = v.x, p = I + t, f = w + n, y && b && y.elementFromPoint) {
                for (; r < t;) {
                    for (o = i; o < n;) d = w + o, (s = I + r) <= p && d <= f && _.push({x: s, y: d, on: 0}), o += i;
                    r += a
                }
                for (; c = _[E++];) s = Pt(c.x - g, 0), s = Mt(s, c.x), d = Pt(c.y - m, 0), d = Mt(d, c.y), 0 != s ? 0 != d ? (l = y.elementFromPoint(s, d)) && l !== b && l !== e && !pn(l, e) && ((u = gn(l, "id")) || gn(l, "id", u = Zt(["geom_inter" || "", "_", (new Date).getTime(), "_", Nt.round(100 * Nt.random()), "_", Gt++])), c.on = u, _.on++) : (c.on = "!y-offscreen", _.on++) : (c.on = "!x-offscreen", _.on++)
            }
            return _
        }(e))[Ct], (P = ln(O.on, 0)) && (M = 1 - ln((P / N)[At](2), 0), G.civ = G.iv = M)), t.rect = L, t.clipRect = V, t.docRect = j, H[Ct] ? (t.isRoot = !1, t.canScroll = !0, G.xs = !!s, G.ys = !!d) : z.b >= V.b || z.r >= V.r ? (t.isRoot = !0, G.xs = !!(j.w > z.w && s), G.ys = !!(j.h > z.h && d), t.canScroll = j.w > z.w || j.h > z.h) : G.ys = G.xs = t.isRoot = t.canScroll = !1, t.scrollNodes = H, t.clipNodes = J, t.expRect = G, G
    }

    function hn(e, t, n) {
        var a, i, r, o, s, d, c, u, l, p, f, g, m = {}, v = {};
        if (vn(t, v, !0), !n && !v.isRoot && v.canScroll && ((i = v.expRect).xs || i.ys)) {
            bn(e), a = [], Ht[e] = a;
            for (var h = 0; h < v.scrollNodes.length; h++) {
                var y = v.scrollNodes[h], b = {};
                b.node = y, b.onscroll = function (t) {
                    yn(t, e, y)
                }, x(y, wt, b.onscroll), a.push(b)
            }
        }
        return m.win = (s = o && an(o) || qt, d = s.innerHeight || 0, c = s.innerWidth || 0, u = s.screenY || s.screenTop || 0, l = d + u, p = s.screenX || s.screenLeft || 0, f = c + p, g = cn(o), d || c || !g || (d = g.clientHeight || 0, f = p + (c = g.clientWidth || 0), l = u + d), {
            t: u,
            l: p,
            b: l,
            r: f,
            w: c,
            h: d
        }), m.par = v.clipRect, i = v.expRect, (r = v.rect).iv = i.iv, r.xiv = i.xiv, r.yiv = i.yiv, delete i.iv, delete i.xiv, delete i.yiv, m.exp = i, m.self = r, m
    }

    function yn(e, t, n) {
        var a = Ht[t];
        if (a) for (var i = 0; i < a.length; i++) {
            var r = a[i];
            if (r.node === n) {
                r.tID && (clearTimeout(r.tID), delete r.tID), r.tID = setTimeout((function () {
                    var e = ht.getInstance().getIframe(t);
                    e && ta(e.iframe, t, hn(t, e.iframe, !0))
                }), Jn);
                break
            }
        }
    }

    function bn(e) {
        var t, n = Ht[e];
        if (n) for (; t = n.pop();) t.tID && clearTimeout(t.tID), A(t.node, wt, t.onscroll), t.node = t.onscroll = null, Ht[e] = null;
        delete Ht[e]
    }

    var wn = ae();

    function In(e) {
        rt({strategy: "WithAttributes", data: {id: "itunes-launch-store", src: e.detail.url}})
    }

    var _n = [], En = {}, Tn = {}, Sn = [], kn = {}, xn = ue((function () {
        x(wn, "focus", $n), x(wn, "blur", Qn), x(wn, "resize", na), x(wn, "scroll", na), x(wn, "pagehide", (function () {
            try {
                A(wn, "focus", $n), A(wn, "blur", Qn), A(wn, "resize", na), A(wn, "scroll", na), aa()
            } catch (e) {
            }
        }))
    })), An = ae(), Cn = !1, Dn = {}, Rn = void 0, Nn = {}, Pn = function () {
        return Dn
    }, Mn = function (e) {
        Dn = e
    }, On = function () {
        return Nn
    }, qn = function (e) {
        Nn = e
    }, Un = function (e) {
        e ? (Rn = K(e, "http") || K(e, "https") ? e : "https://" + e, F("Setting endpoint to: " + Rn)) : z("Cannot set an empty endpoint")
    }, Bn = function (e) {
        Cn = e
    }, Fn = function () {
        return Cn
    };
    var Ln = void 0, zn = void 0, Wn = !0, jn = function (e, t) {
        var n = t, a = void 0, i = void 0;

        function r(e) {
            var t = Wn ? "tcString" : "consentData";
            Wn && e && e.gdprApplies && (e.purpose && e.purpose.consents && !e.purpose.consents[1] ? Bn(!0) : e.purpose && e.purpose.consents && !0 === e.purpose.consents[1] && Bn(!1));
            var n = {consent_string: e ? e[t] : void 0, consent_required: e ? e.gdprApplies : void 0};
            if (e && e.addtlConsent && "string" == typeof e.addtlConsent && -1 !== e.addtlConsent.indexOf("~")) {
                var a = e.addtlConsent.substring(e.addtlConsent.indexOf("~") + 1);
                n.addtl_consent = ee(a.split("."), (function (e) {
                    return parseInt(e, 10)
                }))
            }
            zn.gdpr_consent = n
        }

        function o(e) {
            clearTimeout(a), r(Ln), ue(s(e))
        }

        function s(e) {
            e && L(e + " Resuming request without consent information."), n()
        }

        if ((zn = e).consentManagement && (zn.consentManagement.disabled || zn.consentManagement.tcf && zn.consentManagement.tcf.disabled)) return j("TCF Consent module was disabled."), ue(s());
        var d = 1e4;
        if (zn.consentManagement && M(zn.consentManagement.timeout) && (d = zn.consentManagement.timeout), Ln) return r(Ln), ue(s());
        a = setTimeout((function () {
            o(Ln ? "" : "CMP workflow exceeded timeout threshold.")
        }), d), function (e, t) {
            var n, a, r = {};
            try {
                (i = window.__tcfapi || window.top.__tcfapi) || (i = window.__cmp || window.top.__cmp) && (Wn = !1)
            } catch (e) {
            }
            if (R(i)) i(Wn ? "addEventListener" : "getConsentData", null, e); else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) Wn = !1, n = Object.keys(zn.tags), a = $e(zn.tags[n[0]].sizes), window.$sf.ext.register(a[0].width, a[0].height, (function (t, n) {
                "cmpReturn" === t && e(n.vendorConsentData)
            })), window.$sf.ext.cmp("getConsentData"); else {
                for (var o = window, s = void 0; !s;) {
                    try {
                        (o.frames.__tcfapiLocator || o.frames.__cmpLocator) && (s = o), o.frames.__cmpLocator && (Wn = !1)
                    } catch (e) {
                    }
                    if (o === window.top) break;
                    o = o.parent
                }
                if (!s) return t("TCF CMP not found.");
                !function (t) {
                    var n = Wn ? "__tcfapi" : "__cmp";
                    window[n] = function (e, a, i) {
                        var o, s, d, c = "" + Math.random(), u = (d = {
                            command: e,
                            parameter: a,
                            callId: c
                        }, (s = n + "Call") in (o = {}) ? Object.defineProperty(o, s, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[s] = d, o);
                        r[c] = i, t.postMessage(u, "*")
                    }, x(window, "message", a, !1), Wn ? window.__tcfapi("addEventListener", null, i) : window.__cmp("getConsentData", null, i);

                    function a(e) {
                        var t = Wn ? "__tcfapiReturn" : "__cmpReturn",
                            n = "string" == typeof e.data && e.data.includes(t) ? JSON.parse(e.data) : e.data;
                        if (n[t]) {
                            var a = n[t];
                            r[a.callId](a.returnValue, a.success), Wn || delete r[a.callId]
                        }
                    }

                    function i(t, n) {
                        Wn || A(window, "message", a, !1), e(t, n)
                    }
                }(s)
            }
        }((function (e, t) {
            Wn ? t && "object" == typeof e && "string" == typeof e.tcString ? "useractioncomplete" === e.eventStatus || "tcloaded" === e.eventStatus ? (clearTimeout(a), r(Ln = e), ue(s())) : "cmpuishown" === e.eventStatus && (Ln = e, e.tcString && e.purposeOneTreatment && (clearTimeout(a), r(Ln), ue(s()))) : o("TCF CMP returned unexpected consentObject during lookup process; returned value was (" + e + ")") : "object" != typeof e || "string" != typeof e.consentData || "" === e.consentData ? o("CMP returned unexpected consentObject during lookup process; returned value was (" + e + ")") : (clearTimeout(a), r(Ln = e), ue(s()))
        }), o)
    }, Vn = p.p.NUM, Gn = 0, Hn = 0, Xn = 0, Jn = 500, Yn = function (e) {
        F("Expand iframe started by host");
        var t = !1, n = !1, a = 0, i = 0, r = 0, o = 0, s = void 0, d = void 0,
            c = ae().document.getElementById(p.m.UT_DIV + e.targetId), u = ht.getInstance().getIframe(e.targetId),
            l = u.iframe.style;
        c || (c = u.iframe.parentNode);
        var f = c.style;
        f.display = "";
        var g = parseInt(f.width, 10), m = parseInt(f.height, 10);
        if (isNaN(g) && (g = 0), isNaN(m) && (m = 0), e.bounds.multiDir ? (r = g + (d = ne("data.bounds.left", e.bounds.left, Vn)) + ne("data.bounds.right", e.bounds.right, Vn), o = m + (s = ne("data.bounds.top", e.bounds.top, Vn)) + ne("data.bounds.bottom", e.bounds.bottom, Vn), s ? (i = -1 * s, n = !0) : i = 0, d ? (a = -1 * d, t = !0) : a = 0) : (r = (t = (a = e.bounds.x) < 0) ? g + -1 * a : g + a, o = (n = (i = e.bounds.y) < 0) ? m + -1 * i : m + i), !(r <= g && o <= m)) {
            l.width = r + "px", l.height = o + "px", t && (l.left = a + "px"), n && (l.top = i + "px"), l.zIndex = p.o.DEFAULT_ZINDEX, l.position = "relative", f.position = "relative", e.bounds.push ? (f.width = r + "px", f.height = o + "px") : (f.width = g + "px", f.height = m + "px");
            var v = function () {
                !function (e, t, n) {
                    var a = n.iframe.contentWindow, i = {};
                    i.targetId = t.targetId, i.status = e, i.geom = Kn(t.targetId, n.iframe), ra(a, JSON.stringify(i), de())
                }(p.o.STATUS.NOTIFY_EXPANDED, e, u)
            };
            e.ext && "number" == typeof e.ext.tweenTime ? function (e, t, n, a) {
                var i = t.style;
                i.transition = "height " + e.ext.tweenTime + "ms ease", i.height = n, i["overflow-y"] = "hidden", x(t, "transitionend", (function () {
                    "function" == typeof a && a()
                }))
            }(e, u.iframe, o, v) : v()
        }
    };
    var Kn = function (e, t) {
        var n = hn(e, t);
        return n.anx = function () {
            try {
                if (void 0 !== window.top.location.href) {
                    var e = window, t = 0, n = 0;
                    do {
                        t += e.pageYOffset || e.document.documentElement.scrollTop || e.document.body.scrollTop, n += e.pageXOffset || e.document.documentElement.scrollLeft || e.document.body.scrollLeft, e = e.parent
                    } while (e.parent !== window.top);
                    return {scrollTop: t, scrollLeft: n}
                }
            } catch (e) {
            }
            return {scrollTop: 0, scrollLeft: 0}
        }(), n
    }, $n = function () {
        Zn(!0)
    }, Qn = function () {
        Zn(!1)
    };

    function Zn(e) {
        ea(), Hn = window.setTimeout((function () {
            var t, n;
            t = e, n = ht.getInstance().getIframes(), X(n, (function (e, n) {
                var a = apntag.requests.tags[n];
                if (a.alwaysUseXDomainIframe || a.enableSafeFrame) {
                    var i = e.iframe.contentWindow, r = {};
                    r.targetId = n, r.value = t, r.status = p.o.STATUS.FOCUS_CHANGE, ra(i, JSON.stringify(r), de())
                }
            })), ea()
        }), 2)
    }

    function ea() {
        Hn && (clearTimeout(Hn), Hn = 0)
    }

    var ta = function (e, t, n) {
        var a = e.contentWindow, i = {};
        i.targetId = t, i.geom = n, i.status = p.o.STATUS.GEOM_UPDATE, ra(a, JSON.stringify(i), de())
    };
    var na = function () {
        Gn || (Gn = window.setTimeout(ia, Jn))
    }, aa = function () {
        var e = ht.getInstance().getIframes();
        X(e, (function (e, t) {
            var n = apntag.requests.tags[t];
            (n.alwaysUseXDomainIframe || n.enableSafeFrame) && (clearInterval(Xn), Xn = 0, bn(t))
        }))
    };

    function ia() {
        var e = ht.getInstance().getIframes();
        X(e, (function (e, t) {
            var n = apntag.requests.tags[t];
            (n.alwaysUseXDomainIframe || n.enableSafeFrame) && function (e, t) {
                ta(e, t, Kn(t, e))
            }(e.iframe, t)
        })), Gn && (clearTimeout(Gn), Gn = 0)
    }

    var ra = function (e, t, n) {
        "string" != typeof t && (t = JSON.stringify(t)), e ? e.postMessage(t, n) : F("Safeframe not yet rendered")
    }, oa = function () {
        var e = {}, t = [], n = "";
        return {
            invokeNotify: function (n, a, i) {
                t.push(s(n, a, i)), X(e, (function (e) {
                    e.addNotifyMessage(s(n, a, i)), "loading" !== e.status && o(e)
                }))
            }, loadRenderer: function (t, n) {
                var a = n.renderer_id;
                if (t.enableSafeFrame && (!window.$sf || !window.$sf.ext)) return a = function (e, t) {
                    return t.renderer_id + "_" + e.targetId
                }(t, n), void (e[a] = c(n.renderer_url, a, t));
                var o = e[a];
                if (o) {
                    var s = e[a];
                    "loaded" === o.status ? (l(t), i(s, t, r), t.displayed = !0) : o.addTag(t)
                } else V(window, n.renderer_url), e[a] = c(n.renderer_url, a, t)
            }, setRendererStatus: function (t, n) {
                var a = e[t];
                a && (a.status = n, o(a))
            }, registerRenderer: function (t, s, d) {
                if (n = d, s = a(s), t && e[t] && D(s)) {
                    var c = e[t];
                    c.renderFn = s.renderAd, c.notifyFn = s.notify, c.status = "loaded", window.currentTag && window.currentTag.enableSafeFrame && (u = window.currentTag, p = t, f = "loaded", g = {
                        name: "updateRenderStatus",
                        targetId: u.targetId,
                        rId: p,
                        status: f
                    }, ra(window.parent, g, n)), o(c), X(c.getTags(), (function (e) {
                        e.displayed || (l(e), i(c.renderFn, e, (function (e, t) {
                            r(e, t, c)
                        })), e.displayed = !0)
                    }))
                } else z("ast.js", "registerRenderer must be called with (id, cbFn)");
                var u, p, f, g
            }, clearState: function () {
                e = {}, t = []
            }
        };

        function a(e) {
            return R(e) ? {
                renderAd: e, notify: function () {
                }
            } : D(e) && R(e.renderAd) ? {renderAd: e.renderAd, notify: e.notify} : void 0
        }

        function i(e, t, n) {
            R(e) ? e.call(apntag, t, n) : D(e) && (R(e.renderFn) ? e.renderFn.call(apntag, t, n) : z("Error invoking rendererObj.renderAd(). renderAd must be a function"))
        }

        function r(e, t, a) {
            a && a.isSafeFrame ? function (e, t) {
                var a = {name: "emitEvent", cmd: [e, t]};
                if (ra(window.parent, a, n), apntag.mockSfListner && apntag.mockSfListner.handler) {
                    apntag.mockSfListner.handler(apntag.mockSfListner.adObj);
                    var i = {name: "resizeAd", targetId: e, cmd: ["auto", "auto"]};
                    ra(window.parent, i, n)
                }
            }(e, t) : apntag.emitEvent(e, t)
        }

        function o(e) {
            R(e.notifyFn) && X(e.getNotifyMessages(), (function (t) {
                t.sent || (t.sent = !0, e.notifyFn(t.messageType, t.messagePayload, t.targetId))
            }))
        }

        function s(e, t, n) {
            return {messageType: e, messagePayload: t, targetId: n, sent: !1}
        }

        function d(e, t, n) {
            var a = [], i = [];
            this.getTags = function () {
                return a
            }, this.addTag = function (e) {
                a.push(e)
            }, this.addNotifyMessage = function (e) {
                i.push(e)
            }, this.getNotifyMessages = function () {
                return i
            }, this.url = e, this.id = t, this.status = "loading", this.renderFn = function () {
            }, this.notifyFn = u, this.isSafeFrame = n.enableSafeFrame || !1, this.addTag(n)
        }

        function c(e, n, a) {
            var i = new d(e, n, a);
            return function (e) {
                X(t, (function (t) {
                    e.addNotifyMessage(t)
                }))
            }(i), i
        }

        function u(e, t, n) {
            !function (e, t, n) {
                var a = ht.getInstance().getIframe(n).iframe.contentWindow;
                ra(a, {messageType: e, messagePayload: t, status: "notify", targetId: n}, de())
            }(e, t, n = n || this.getTags()[0].targetId)
        }

        function l(e) {
            if (!e || !e.isMediated) {
                var t = ke(e);
                H(window.document.body, t[sa], t[da])
            }
        }
    }(), sa = p.a.NOTIFY, da = p.a.CREATIVE_ID;
    var ca = function (e) {
        if (e) {
            if (e.member && (apntag.requests.member = Number(e.member)), e.targetingParams && (apntag.requests.targetingParams = e.targetingParams, L("targetingParams will be deprecated soon. Please use keywords instead")), e.keywords && (apntag.requests.keywords = e.keywords), e.user && (apntag.requests.user = e.user), e.app && (apntag.requests.app = e.app), e.device && (apntag.requests.device = e.device), e.geoOverride) {
                var t = function (e) {
                    var t = e.countryCode;
                    if ("string" == typeof t && 2 === t.length) {
                        var n = e.zip;
                        if (!("string" != typeof n || n.length < 1)) return {countryCode: t.toUpperCase(), zip: n};
                        L("Ignoring geoOveride options, Invalid zip code, it should be of type String and of atleast 1 character.")
                    } else L("Ignoring geoOveride options, Invalid country code, it should be of type String and of 2 characters.")
                }(e.geoOverride);
                t && (apntag.requests.geoOverride = t)
            }
            e.site && (apntag.requests.site = e.site), e.disablePsa && (apntag.requests.disablePsa = !0), apntag.requests.enableSafeFrame = !1, e.enableSafeFrame && (xn(), apntag.requests.enableSafeFrame = !0), e.publisherId && (apntag.requests.publisherId = e.publisherId), e.consentManagement && (apntag.requests.consentManagement = e.consentManagement), e.auctionTimeout && (apntag.requests.auctionTimeout = e.auctionTimeout), e.enableMediationEvents && (apntag.requests.enableMediationEvents = !0), e.us_privacy && (N(e.us_privacy) ? apntag.requests.us_privacy = e.us_privacy : L("Ignoring us_privacy, it should be a string")), e.pageUrl && (apntag.requests.pageUrlOverride = e.pageUrl), e.test && (apntag.requests.test = !0), e.schain && (apntag.requests.schainConfig = e.schain)
        }
    }, ua = void 0, la = function (e) {
        if (!function (e) {
            if (P(e) && e.length > 0) return !0;
            return j("No size mapping defined"), !1
        }(e.sizeMapping)) return e.sizes;
        var t, n, a,
            i = (n = t || ua || ae(), a = n.document, n.innerWidth ? n.innerWidth : a.body.clientWidth ? a.body.clientWidth : a.documentElement.clientWidth ? a.documentElement.clientWidth : 0),
            r = void 0;
        if (!i) {
            r = e.sizeMapping[0];
            for (var o = 0; o < e.sizeMapping.length; o++) parseInt(e.sizeMapping[o].minWidth, 10) > parseInt(r.minWidth, 10) && (r = e.sizeMapping[o]);
            return r.sizes ? r.sizes : e.sizes
        }
        for (var s = "", d = e.sizeMapping.slice().sort((function (e, t) {
            return e.minWidth - t.minWidth
        })), c = 0; c < d.length; c++) i >= d[c].minWidth && (r = d[c]);
        return r && r.sizes ? (s = r.sizes, F("tag : " + e.targetId + " resized based on device width to : " + s)) : F("tag : " + e.targetId + " not mapped to any sizes for device width. This request will be suppressed."), s
    };
    var pa = p.l.UNDEFINED;

    function fa(e, t) {
        var n = !1, a = e;
        if (2 === arguments.length ? (a = An.apntag.requests.tags[t], (e.sizes && a.sizeMapping || e.sizeMapping && !a.sizeMapping) && (n = !0)) : (t = e.targetId, e.sizes && e.sizeMapping && (n = !0)), n) return z("sizes and sizeMapping both cannot be defined for targetId: " + t), !1;
        if (e.sizeMapping) {
            var i = la(e);
            if ("" === i) return "";
            e.sizes = i
        }
        return !0
    }

    var ga = function (e) {
        if (e.rid && (apntag.requests.keywords.rid = e.rid), e.provider_id && (apntag.requests.keywords.provider_id = e.provider_id), e.debug && (apntag.debug = e.debug), e.astToolkit && e.astDongle && (apntag.requests.toolkit = {
            enabled: !0,
            dongle: e.astDongle
        }), e.size) z("Size is deprecated, please use sizes instead."); else if (e.member ? e.member = Number(e.member) : e.member = apntag.requests.member, e.member || (e.member = "none"), e.tagId || e.invCode && e.member) {
            if (e.sizeMapping) if (!fa(e)) return void z("tag not mapped to any sizes for device width: " + e.targetId);
            try {
                var t = e.targetId, n = function (e, t) {
                    var n = e.member;
                    return apntag.requests = apntag.requests || {}, apntag.requests.tags = apntag.requests.tags || {}, apntag.requests.utCalled = apntag.requests.utCalled || !1, apntag.requests.hasLeft = apntag.requests.hasLeft || !1, apntag.requests.cbCalled = apntag.requests.cbCalled || !1, apntag.requests.enableSafeFrame && (e.enableSafeFrame = !0), e.safeframe = re(kn) || {}, Z(e, "safeframeConfig") && (Z(e.safeframeConfig, "allowExpansionByPush") && (e.safeframe.expansionByPush = e.safeframeConfig.allowExpansionByPush), Z(e.safeframeConfig, "allowExpansionByOverlay") && (e.safeframe.expansionByOverlay = e.safeframeConfig.allowExpansionByOverlay), Z(e.safeframeConfig, "sandbox") && (e.safeframe.sandbox = e.safeframeConfig.sandbox), Z(e.safeframeConfig, "meta") && (e.safeframe.meta = e.safeframeConfig.meta)), apntag.requests.tags[t] = e, apntag.requests.tags[t].utCalled = apntag.requests.tags[t].utCalled || !1, apntag.requests.tags[t].showTagCalled = apntag.requests.tags[t].showTagCalled || !1, apntag.requests.tags[t].displayed = apntag.requests.tags[t].displayed || !1, apntag.requests.tags[t].initialHeight = 1, apntag.requests.tags[t].initialWidth = 1, apntag.requests.tags[t].on = apntag.onEvent || void 0, apntag.requests.tags[t].off = apntag.offEvent || void 0, apntag.requests.tags[t].setSizes = apntag.setSizes || void 0, apntag.requests.tags[t].modifyTag = apntag.modifyTag || void 0, apntag.requests.tags[t].refresh = function () {
                        return apntag.refresh(this.targetId)
                    }, apntag.requests.tags[t].setKeywords = function (e, t) {
                        return apntag.setKeywords(this.targetId, e, t)
                    }, En[n] = typeof En[n] === pa ? [] : En[n], En[n].push(e.targetId), apntag.requests.tags[t]
                }(e, t);
                return F("defineTag called for: " + t), apntag.requests && !0 === apntag.requests.utCalled && !apntag.requests.tags[t].utCalled && F("A placement was loaded after ut call was started. These ad calls will not be coordinated"), n
            } catch (e) {
                z("buildAdTagContainer: " + e.message)
            }
        } else z("tagId or (invCode & memberId) should be defined for targetId: " + e.targetId)
    }, ma = function (e) {
        j("Invoking apntag.defineTag", arguments);
        var t = ga(e);
        if (t) {
            if (Sn.push(t), Tn[t.targetId]) return Tn[t.targetId];
            var n = {targetId: t.targetId, on: t.on, off: t.off, modifyTag: t.modifyTag, setKeywords: t.setKeywords};
            return Tn[t.targetId] = n, n
        }
        z("No ad will be requested for targetId: " + e.targetId)
    }, va = function (e) {
        var t = ya() + e.map((function (e) {
            return '\n      <table style="border: 1px solid black; border-radius: 5px; font-family: sans-serif; margin: 1em; padding: .5em">\n        <tr>\n          <td style="padding-right: 5em;"><b>Target&nbsp;ID</b></td>\n          <td style="width: 100%;">' + ba(e) + "</td>\n        </tr>\n        <tr>\n          <td><b>Creative ID</b></td>\n          <td>" + Ia(e, "creative_id") + "</td>\n        </tr>\n        <tr>\n          <td><b>Buyer Member ID</b></td>\n          <td>" + Ia(e, "buyer_member_id") + "</td></tr>\n        <tr>\n          <td><b>Creative Size</b></td>\n          <td>" + function (e) {
                if (e.nobid) return wa;
                var t = null, n = null, a = e.ads && e.ads.length ? e.ads[0] : {};
                return a.rtb && a.rtb.banner && (t = a.rtb.banner.height, n = a.rtb.banner.width), t && n ? n + " x " + t : ""
            }(e) + "</td>\n        </tr>\n        <tr>\n          <td><b>Available Sizes</b></td>\n          <td>" + function (e) {
                try {
                    var t = ba(e), n = apntag.requests.tags[t].sizes;
                    return JSON.stringify(n)
                } catch (e) {
                    return ""
                }
            }(e) + "</td></tr>\n        <tr>\n          <td><b>Winning Bid</b></td>\n          <td>" + Ia(e, "cpm") + "</td></tr>\n        <tr>\n          <td><b>Demand Source</b></td>\n          <td>" + function (e) {
                if (e.nobid) return wa;
                var t = function (e) {
                    var t = apntag.requests.tags;
                    if (e.ads.length && e.ads[0].seller_member_id) return e.ads[0].seller_member_id;
                    for (var n in t) if (t.hasOwnProperty(n) && t[n].uuid === e.uuid) return t[n].member;
                    return null
                }(e);
                return e.ads[0].csm ? "CSM" : e.ads[0].buyer_member_id === t || e.ads[0].deal_id ? e.ads[0].buyer_member_id !== t && e.ads[0].deal_id ? "Deal" : e.ads[0].buyer_member_id === t ? "Direct" : "" : "RTB"
            }(e) + "</td></tr>\n        <tr>\n          <td><b>Ad Type</b></td>\n          <td>" + Ia(e, "ad_type") + "</td></tr>\n        <tr>\n          <td><b>Media Type</b></td>\n          <td>" + Ia(e, "media_type_id") + '</td></tr>\n        <tr>\n          <td style="color: #555; font-size: smaller; padding-top: .5em;" colspan="2">\n            Console Ad Profile:\n            <a href="' + function (e) {
                return "//console.appnexus.com/ad-quality?id=" + e.placement.publisher.id
            }(e) + '" target="_blank">' + e.ad_profile_id + "</a>\n            " + function (e) {
                return e.ads ? '| <a href="//ib.adnxs.com/cr?id=' + e.ads[0].creative_id + '" target="_blank">Creative Preview<a/>' : ""
            }(e) + "\n          </td>\n        </tr>\n      </table>\n    "
        })).join(" "), n = document.body, a = document.createElement("div");
        a.id = "appnexus_debug_window";
        var i = document.createElement("div");
        i.style.width = "100%", i.style.height = "400px", i.style.clear = "both", n.insertBefore(i, null);
        var r = a.style;
        r.position = "fixed", r.bottom = "0px", r.left = "0px", r.width = "100%", r.height = "450px", r.overflow = "hidden", r["border-top"] = "1px solid", r["z-index"] = 999999, r.background = "white", n.insertBefore(a, null);
        var o = document.createElement("div");
        o.style.width = "100%", o.style.height = "30px";
        var s = ha();
        a.appendChild(s);
        var d = s.contentWindow.document;
        d.open(), d.write(t), d.close()
    };

    function ha() {
        var e = document.createElement("iframe");
        return e.id = "appnexus-debug-console-loader", e.height = "100%", e.width = "100%", e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.frameBorder = "0", e
    }

    function ya() {
        return '<div style="margin-top:10px;margin-bottom:10px;"><span style="font-weight:bold">AST Dongle Value:</span> <input\n            id="ast-dongle-input"\n            type="text"\n            length="400"\n            style="border-radius:5px;"\n            placeholder="Enter ast_dongle value"\n            value=null\n         /></div>'
    }

    function ba(e) {
        try {
            return Object.keys(apntag.requests.tags).filter((function (t) {
                return apntag.requests.tags[t].uuid === e.uuid
            }))[0]
        } catch (e) {
            return ""
        }
    }

    var wa = '<span style="color: #ccc">nobid</span>';

    function Ia(e, t) {
        if (e.nobid) return wa;
        var n = e.ads && e.ads[0][t];
        return n || 0 === n ? n : ""
    }

    var _a = function () {
            var e = navigator.userAgent.toLowerCase();
            return (/(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [])[1]
        }, Ea = p.b.BANNER, Ta = p.b.NATIVE, Sa = p.q.AD_TYPE, ka = p.b.VIDEO, xa = p.q.BANNER, Aa = p.q.CONTENT,
        Ca = p.a.CREATIVE_ID, Da = p.h, Ra = p.a.IMP_URLS, Na = p.a.NOAD, Pa = p.l.OBJECT, Ma = p.d.RTB,
        Oa = p.a.TRACKERS, qa = p.l.UNDEFINED, Ua = function (e, t, n, a) {
            var i = void 0, r = void 0, o = void 0, s = e.adResponse;
            !function (e) {
                if (e.adResponse && e.adResponse.ads) {
                    var t = ie(e.adResponse.ads);
                    if (t.banner) {
                        var n = e.initCollapsed, a = n && n.expandBy && ce(Da).indexOf(n.expandBy) >= 0;
                        n && !a && L("TagID " + e.tagId + " initCollapsed is set but expandBy is not recognized, initial size will not be collapsed"), e.initialHeight = a ? 0 : t.banner.height, e.initialWidth = a ? 0 : t.banner.width
                    }
                }
            }(e);
            var d, c = ke(e);
            if (typeof c === qa || null === c || typeof c.error !== qa) return d = s, void H(window.document.body, d[Na], d.uuid);
            if (s && e.showTagCalled) {
                if (function (e, t) {
                    if (t.renderer_url && t.renderer_id) {
                        if (e.usesRenderer = !0, 2 === t.renderer_id && e.enableSafeFrame && (e.safeframe.expansionByPush = !0, e.customIframeProps = {
                            style: "overflow:hidden",
                            allow: "autoplay"
                        }), !e.enableSafeFrame) return function (e, t) {
                            var n = xe(t);
                            if (typeof n === qa) return z("No Content Source Found"), void (e.displayed = !1);
                            t[t.ad_type] = n;
                            (function (e) {
                                e.isMediated || e.isRtbVideoFallback || (e.adResponse.ad = e.adResponse.ads[0])
                            })(e), oa.loadRenderer(e, t)
                        }(e, t), !0;
                        oa.loadRenderer(e, t)
                    }
                }(e, c)) return e.targetId;
                if (c[Sa] === Ta && !e.usesRenderer) return F("Render for the following ad should be handled outside of ast.js :" + e.targetId), e.displayed = !0, o = lt(e.adResponse), ve.emit(p.g.LOADED, e.targetId, o), W("The " + e.targetId + " ad is loaded."), e.targetId;
                if (c[Sa] === ka && !e.usesRenderer) return L("Response has no renderer for video"), e.displayed = !1, e.targetId;
                if (c[Sa] === Ea || e.usesRenderer) {
                    if (c.content_source === Ma && !e.usesRenderer) {
                        var u = c[Ma][xa];
                        if (q(u) || typeof u !== Pa) return z("Response has no banner object"), e.displayed = !1, e.targetId;
                        if (!Z(u, Aa)) return z("Response has no banner content"), e.displayed = !1, e.targetId;
                        if (!Z(u, "width")) return z("Response has no banner width"), e.displayed = !1, e.targetId;
                        if (!Z(u, "height")) return z("Response has no banner height"), e.displayed = !1, e.targetId
                    }
                    var l = void 0;
                    Z(n, e.targetId) && (l = n[e.targetId]);
                    var f = void 0;
                    if (e.alwaysUseXDomainIframe || e.enableSafeFrame) {
                        a();
                        var g = (f = e.wcElement ? e.wcElement : window.document.getElementById(e.targetId)).style.height,
                            m = f.style.width;
                        f.style.height = e.initialHeight, f.style.width = e.initialWidth, f.style.height = g, f.style.width = m
                    }
                    var v = re(t);
                    Z(e.safeframe, "expansionByPush") && (v.expansionByPush = e.safeframe.expansionByPush), Z(e.safeframe, "expansionByOverlay") && (v.expansionByOverlay = e.safeframe.expansionByOverlay), Z(e.safeframe, "sandbox") && (v.sandbox = e.safeframe.sandbox), Z(e.safeframe, "meta") && (v.meta = e.safeframe.meta), e.safeframe = v, r = function (e) {
                        var t = void 0, n = se(e), a = e.curWindow || window, i = e.wcElement;
                        try {
                            t = i && i.querySelector("#" + n) ? i.querySelector("#" + n) : a.document.getElementById(n) ? a.document.getElementById(n) : a.document.createElement("div")
                        } catch (t) {
                            return z("Error creating Ad Div: ", t), void (e.displayed = !1)
                        }
                        return t.style.display = "none", t.id = n, t
                    }(e), (e.alwaysUseXDomainIframe || e.enableSafeFrame) && (r.style.height = e.initialHeight + "px", r.style.width = e.initialWidth + "px", r.style.display = "block", f.appendChild(r), e.geom = function (e, t) {
                        F("Geom starting");
                        var n = Kn(e, t);
                        return 0 === Xn && (Xn = setInterval(na, 1e3)), n
                    }(e.targetId, r)), i = at(e, c);
                    var h = ht.getInstance(), y = {}, i2 = document.createElement('div');
                    i2.append(i);
                    if (y.iframe = i, y.originalWidth = e.initialWidth, y.originalHeight = e.initialHeight, h.add(e.targetId, y), n[e.targetId] = i, typeof l !== qa && window.document.getElementById(l.id) ? r.replaceChild(i2, l) : r.appendChild(i2), e.displayed = !0, window.document.body) try {
                        !function (e, t, n) {
                            var a = _a(), i = e.curWindow || window,
                                r = e.wcElement ? e.wcElement : i.document.getElementById(e.targetId);
                            if (r) {
                                e.alwaysUseXDomainIframe || e.enableSafeFrame || (r.appendChild(t), t.style.display = "inline"), e.utDivId = t.id, e.utiframeId = n.id, a === p.c.IE || a === p.c.OPERA ? function (e, t) {
                                    if (t.alwaysUseXDomainIframe || t.enableSafeFrame) e.src = nt + p.i.SAFE_FRAME_URL; else {
                                        var n;
                                        n = st(t);
                                        try {
                                            e.contentWindow.contents = n
                                        } catch (t) {
                                            e.src = "javascript:document.write('<script>document.domain=\"" + document.domain + "\"<\/script>')", e.contentWindow.contents = n
                                        }
                                        var a = document.getElementsByTagName("base"), i = void 0;
                                        a.length && (i = a.target, a[0].target = "_self"), e.src = 'javascript:window["contents"];', a.length && (a[0].target = i)
                                    }
                                }(n, e) : it(n, e);
                                var o = e.adResponse.ads ? e.adResponse.ads[0] : e.adResponse.ad;
                                if (void 0 === o) return L("No ad found in response, nothing to display."), void (e.displayed = !1);
                                (!e.isMediated && !e.usesRenderer || e.adResponse.ad && "rtb" === e.adResponse.ad.content_source) && (!function (e, t) {
                                    for (var n = e[Ma][Oa][0][Ra], a = 0; a < n.length; a++) H(t.parentElement, n[a], e[Ca])
                                }(o, n), F("Win notification sent for ad tag: " + e.targetId));
                                var s = xe(o), d = Number(r.style.width.replace(/[^\d\.\-]/g, ""));
                                !isNaN(d) && d > s.width && ("center" === e.promoAlignment ? r.setAttribute("align", "center") : r.setAttribute("align", "left")), F("The " + e.targetId + " ad is loaded."), W("The " + e.targetId + " ad is loaded.");
                                var c = lt(e.adResponse);
                                e.usesRenderer || apntag.requests.enableMediationEvents && e.isMediated || ve.emit(p.g.LOADED, e.targetId, c)
                            } else L("No div element found for display ad. This ad will not show. Div id: " + e.targetId), e.displayed = !1
                        }(e, r, i)
                    } catch (t) {
                        z("Error rendering ad: ", t), e.displayed = !1
                    } else z("Error rendering ad: window.document.body is undefined"), e.displayed = !1
                } else z("Error rendering ad: unknown type"), e.displayed = !1;
                return e.targetId
            }
        };
    var Ba = p.b.NATIVE, Fa = p.b.BANNER, La = p.b.VIDEO, za = p.l.UNDEFINED;

    function Wa(e, t, n) {
        F("renderAd is called"), X(apntag.requests.tags, (function (e) {
            if (e.uuid === t) {
                e.adResponse = n;
                try {
                    if (n.ad && n.ad.ad_type === Fa) {
                        var a = n.ad.content_source;
                        e.ad = {mediatedContent: n.ad[a].banner.content}, e.initialHeight = n.ad[a].banner.height, e.initialWidth = n.ad[a].banner.width
                    }
                } catch (e) {
                    z("Error while setting mediated content for banner in renderAd" + e)
                }
                var i = Ua(e, kn, Pn(), xn);
                _n.push(i)
            }
        }))
    }

    function ja(e, t, n) {
        var a = void 0;
        if (e.uuid === t.uuid) if (!0 === t.nobid) F("No bid for targetId:" + e.targetId), a = lt(t), ve.emit(p.g.NO_BID, n, a); else if (e.adResponse = t, e.utCalled = !0, a = lt(t), ve.emit(p.g.AVAILABLE, n, a), !e.prebid && !e.displayed) {
            var i = Ua(e, kn, Pn(), xn);
            _n.push(i)
        }
    }

    function Va(e, t) {
        var n = null;
        if (apntag.requests.cbCalled = !0, typeof e === za || null === e || e.error) {
            var a = "malformed response from ad server";
            e && e.error && (a = e.error), z("Error response from impbus: " + a);
            var i = {};
            try {
                i = JSON.parse(t)
            } catch (e) {
            }
            X(apntag.requests.tags, (function (e, t) {
                var r = pt(a, t, void 0, 200);
                e && (n = lt(e.adResponse)), X(i.tags, (function (a) {
                    a.uuid === e.uuid && ve.emit(p.g.BAD_REQUEST, t, r, n)
                }))
            }))
        } else e.debug && e.debug.debug_info && function (e) {
            e = e.replace(/(\n)/g, "<br>"), e = ya() + e;
            var t = document.body, n = document.createElement("div");
            n.id = "appnexus_debug_window";
            var a = document.createElement("div");
            a.style.width = "100%", a.style.height = "400px", a.style.clear = "both", t.insertBefore(a, null);
            var i = n.style;
            i.position = "fixed", i.bottom = "0px", i.left = "0px", i.width = "100%", i.height = "450px", i.overflow = "hidden", i["border-top"] = "1px solid", i["z-index"] = 999999, i.background = "white", t.insertBefore(n, null);
            var r = document.createElement("div");
            r.style.width = "100%", r.style.height = "30px";
            var o = ha();
            n.appendChild(o);
            var s = o.contentWindow.document;
            o.onload = function () {
                for (var e = s.getElementsByTagName("br"), t = e.length, n = 0, a = void 0; n < t - 1; n++) "br" === ((a = e[n].nextSibling) && a.nodeName.toLowerCase()) && (a.style.display = "none")
            };
            s.open(), s.write(e), s.write("<\/script>"), s.close()
        }(e.debug.debug_info), e.toolkit && e.toolkit.enabled && va(e.tags), X(e.tags, (function (e) {
            if (e.error) X(apntag.requests.tags, (function (t) {
                if (t.uuid === e.uuid) {
                    var n = "There was an exception from targetId:" + t.targetId + " this usually means there is a setup error on the tag (invalid ID etc)";
                    z(n, e.error);
                    var a = pt(n, t.targetId, void 0, 200);
                    ve.emit(p.g.BAD_REQUEST, t.targetId, a)
                }
            })); else {
                if (e.ads && e.ads.length && e.ads[0].ad_type === Ba) if (!function (e) {
                    var t = {}, n = void 0;
                    X(Sn, (function (t) {
                        t.uuid === e.uuid && (n = t)
                    })), n && (t = n.native);
                    var a = [];
                    X(t, (function (e, t) {
                        !0 === e.required && a.push(t)
                    }));
                    var i = lt(e), r = [];
                    X(i.native, (function (e, t) {
                        q(e) || r.push(t)
                    }));
                    var o = r.length > 0;
                    return X(a, (function (e) {
                        o = o && r.indexOf(e) > -1
                    })), o
                }(e)) return void z("required native assets missing from response");
                var t = e.ads, a = function (e) {
                    var t = !1;
                    return e && X(e, (function (e) {
                        "csm" === e.content_source && (t = !0)
                    })), t
                }(t), i = e.rtb_video_fallback;
                X(apntag.requests.tags, a || i ? function (i, r) {
                    if (i.uuid === e.uuid) {
                        i.utCalled = !0, a ? i.isMediated = !0 : i.isRtbVideoFallback = !0;
                        var o = function (e) {
                            var t = Ee;
                            return Array.isArray(e) && e.length > 0 && e[0][_e] === Te && (t = Te), t
                        }(t), s = function (e, t) {
                            var n = {};
                            return X(e, (function (e) {
                                e.uuid === t.uuid && e.mediationOptions && (n = e.mediationOptions)
                            })), n
                        }(apntag.requests.tags, e);
                        if (o === La) i.isVideoMediation = !0, n = lt(e), ve.emit(p.g.AVAILABLE, r, n), Se(o, e, s, Wa); else {
                            i.isBannerMediation = !0;
                            var d = (c = i.targetId, u = e, l = "<script>", l += "var APN_macros = {};", l += 'APN_macros.uuid = "' + c + '";', l += "APN_macros.enableMediationEvents = " + apntag.requests.enableMediationEvents + ";", l += "APN_macros.expandByCreative = " + Y(c) + ";", l += "APN_macros.ads = ", l += 'window.parent.apntag.getAdMarkup("' + c + '", "' + u.uuid + '");', l += ";", l += "document.write('<scr' + 'ipt src=\"" + Ie + "\"></scr' + 'ipt>');", l += "<\/script>");
                            e.ad = {ad_type: Fa}, i.ad = {mediatedContent: d}, ja(i, e, r)
                        }
                    }
                    var c, u, l
                } : function (t, n) {
                    ja(t, e, n)
                })
            }
        })), apntag.requests.checkDisplay && fe()
    }

    var Ga = void 0, Ha = void 0, Xa = function (e, t) {
        var n = t, a = void 0;

        function i(e) {
            var t = {us_privacy: e ? e.uspString : void 0};
            Ha.us_privacy = t.us_privacy
        }

        function r(e) {
            clearTimeout(a), i(), ue(o(e))
        }

        function o(e) {
            e && L(e + " Resuming request without CCPA USP consent information."), n()
        }

        if ((Ha = e).consentManagement && (Ha.consentManagement.disabled || Ha.consentManagement.usp && Ha.consentManagement.usp.disabled)) return j("USP Consent module was disabled."), ue(o());
        var s = 1e4;
        if (Ha.consentManagement && M(Ha.consentManagement.timeout) && (s = Ha.consentManagement.timeout), Ga) return i(Ga), ue(o());
        a = setTimeout((function () {
            r("CCPA USP CMP workflow exceeded timeout threshold.")
        }), s), function (e, t) {
            var n = {}, a = void 0;
            try {
                a = window.__uspapi || window.top.__uspapi
            } catch (e) {
            }
            if (R(a)) a("getUSPData", 1, e); else {
                for (var i = window, r = void 0; !r;) {
                    try {
                        i.frames.__uspapiLocator && (r = i)
                    } catch (e) {
                    }
                    if (i === window.top) break;
                    i = i.parent
                }
                if (!r) return t("CCPA USP CMP not found.");
                !function (t) {
                    function a(e) {
                        var t = "string" == typeof e.data && e.data.includes("uspapiReturn") ? JSON.parse(e.data) : e.data;
                        if (t.__uspapiReturn) {
                            var a = t.__uspapiReturn;
                            n[a.callId](a.returnValue, a.success), delete n[a.callId]
                        }
                    }

                    window.__uspapi = function (e, a, i) {
                        var r = "" + Math.random(), o = {__uspapiCall: {command: e, version: a, callId: r}};
                        n[r] = i, t.postMessage(o, "*")
                    }, x(window, "message", a, !1), window.__uspapi("getUSPData", 1, (function (t) {
                        A(window, "message", a, !1), e(t)
                    }))
                }(r)
            }
        }((function (e) {
            "object" != typeof e || "string" != typeof e.uspString || "" === e.uspString ? r("CCPA USP CMP returned unexpected consentObject during lookup process; returned value was (" + e + ")") : (clearTimeout(a), i(Ga = e), ue(o()))
        }), r)
    };
    var Ja = {}, Ya = void 0, Ka = function (e, t) {
        var n = t, a = void 0;

        function i(e) {
            var t = {gpp: e && "" !== e.gppString ? e.gppString : void 0};
            e && e.applicableSections ? t.gpp_sid = e.applicableSections : e && e.applicableSection ? t.gpp_sid = e.applicableSection : t.gpp_sid = Ja.applicableSections, t.gpp_sid && -1 === t.gpp_sid[0] && (t.gpp_sid = void 0), Ya.gpp_consent = t
        }

        function r(e, t) {
            clearTimeout(a), i(t), ue(o(e))
        }

        function o(e) {
            e && L(e + " Resuming request without GPP consent information."), n()
        }

        var s = (Ya = e).consentManagement;
        if (s && (s.disabled || s.gpp && s.gpp.disabled)) return j("GPP Consnent module was disabled."), ue(o());
        var d = 1e4;
        s && M(s.timeout) && (d = Ya.consentManagement.timeout), a = setTimeout((function () {
            r("GPP CMP workflow exceeded timeout threshold.", Ja)
        }), d), function (e, t) {
            function n(e) {
                return e && Array.isArray(e.applicableSections) && e.applicableSections.length > 0 && 0 !== e.applicableSections[0]
            }

            function a(e) {
                return e && Array.isArray(e.applicableSection) && e.applicableSection.length > 0 && 0 !== e.applicableSection[0]
            }

            var i = {}, r = !1, o = function () {
                for (var e = window, t = void 0, n = !1; ;) {
                    try {
                        if ("function" == typeof e.__gpp) {
                            t = e, n = !0;
                            break
                        }
                    } catch (e) {
                    }
                    try {
                        if (e.frames.__gppLocator) {
                            t = e;
                            break
                        }
                    } catch (e) {
                    }
                    if (e === window.top) break;
                    e = e.parent
                }
                return {cmpFrame: t, cmpDirectAccess: n}
            }(), s = o.cmpFrame, d = o.cmpDirectAccess;
            if (!s) return t("GPP CMP not found.");

            function c(e, t, n, a) {
                window.__gpp = function (e, n, a) {
                    var r, o, s, d = Math.random().toString(), c = (s = {
                        command: e,
                        parameter: a,
                        version: 1,
                        callId: d
                    }, (o = "__gppCall") in (r = {}) ? Object.defineProperty(r, o, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = s, r);
                    i[d] = n, t.postMessage(c, "*")
                }, r || (window.addEventListener("message", (function (e) {
                    var t = "string" == typeof e.data && e.data.includes("__gppReturn") ? JSON.parse(e.data) : e.data;
                    if (t.__gppReturn && t.__gppReturn.callId) {
                        var n = t.__gppReturn;
                        i.hasOwnProperty(n.callId) && i[n.callId](n.returnValue)
                    }
                }), !1), r = !0), j("Making a postMessage call to the CMP for command: ", e), window.__gpp(e, n, a)
            }

            function u(e) {
                j("Called GPP CMP early to determine the value of applicableSections, value returned from CMP: ", e), n(e) ? Ja.applicableSections = e.applicableSections : a(e) && (Ja.applicableSections = e.applicableSection)
            }

            function l(t) {
                j("Received a response from GPP CMP for getGPPData", t), e(t)
            }

            d && R(s.__gpp) ? (j("Detected GPP CMP API is directly accessible, calling it now..."), s.__gpp("addEventListener", (function (i) {
                if (i) if (j("Received a response from GPP CMP for eventlistener", i), "sectionChange" === i.eventName || "loaded" === i.pingData.cmpStatus && "visible" !== i.pingData.cmpDisplayStatus) {
                    var r = s.__gpp("getGPPData");
                    j("Received a response from GPP CMP for getGPPData", r), e(r)
                } else if ("error" === i.pingData.cmpStatus) t("CMP returned with a cmpStatus:error response.  Please check CMP setup."); else if (!Ja.applicableSections) {
                    var o = s.__gpp("getGPPData");
                    j("Called GPP CMP early to determine the value of applicableSections, value returned from CMP: ", o), n(o) ? Ja.applicableSections = o.applicableSections : a(o) && (Ja.applicableSections = o.applicableSection)
                }
            }))) : (j("Detected GPP CMP is outside the current iframe where AST is located, calling it now..."), c("addEventListener", s, (function (e) {
                e && (j("Received a response from GPP CMP for eventlistener", e), "sectionChange" === e.eventName || "loaded" === e.pingData.cmpStatus && "visible" !== e.pingData.cmpDisplayStatus ? c("getGPPData", s, l) : "error" === e.pingData.cmpStatus ? t("CMP returned with a cmpStatus:error response.  Please check CMP setup.") : Ja.applicableSections || c("getGPPData", s, u))
            })))
        }((function (e) {
            e && "object" == typeof e && "string" == typeof e.gppString && (Array.isArray(e.applicableSections) || Array.isArray(e.applicableSection)) ? (clearTimeout(a), i(e), ue(o())) : r("GPP CMP returned unexpected consentObject during lookup process; returned value was (" + e + ")")
        }), r)
    };

    function $a(e, t, n, a, i) {
        X(En[t], (function (t) {
            !function (e, t, n, a, i) {
                0 === n && (e = "Failure to contact endpoint. This can be caused by invalid CORS headers or failure of server to respond.");
                var r = apntag.requests.tags[t], o = void 0;
                r && (o = lt(r.adResponse));
                var s = pt(e, t, i, n);
                ve.emit(a, t, s, o)
            }(e, t, n, a, i)
        }))
    }

    var Qa = function (e, t) {
        var n = An, a = function (e) {
            return e.url + (e.url.indexOf("?") + 1 ? "&" : "?") + "cb=apntag.handleCb&q=" + encodeURI(e.data)
        }(e), i = V(n, a);
        apntag.requests.utCalled = !0, i.onload = function () {
            F("JSONP fallback used instead of POST.")
        }, i.onerror = function (n) {
            if (!apntag.requests.errorReported) {
                var a = "Unknown script error contacting endpoint over JSONP. Endpoint: " + e.url;
                $a(a, t, "-1", p.g.REQUEST_FAIL, n), z(a)
            }
        }, i.onreadystatechange = function (n) {
            if (!("loaded" !== i.readyState && "complete" !== i.readyState || apntag.requests.cbCalled || apntag.requests.errorReported)) {
                apntag.requests.errorReported = !0;
                var a = "Unknown network error contacting endpoint over JSONP. Endpoint: " + e.url;
                $a(a, t, "-1", p.g.REQUEST_FAIL, n), z(a)
            }
        }
    }, Za = function (e) {
        var t = {}, n = function () {
            Rn === "https://" + p.f.IMPBUS && Fn() && (Rn = "https://" + p.f.IMPBUS_SIMPLE), Rn !== "https://" + p.f.IMPBUS_SIMPLE || Fn() || (Rn = "https://" + p.f.IMPBUS);
            var e = !1;
            return X(apntag.requests.tags, (function (t) {
                t.prebid && (e = !0)
            })), e ? Rn + p.f.UT_PREBID : Rn + p.f.UT_BASE
        }();
        return t.url = n, t.data = JSON.stringify(e), t
    }, ei = function (e, t) {
        !function (e, t) {
            X(apntag.requests.tags, (function (e) {
                e.utCalled || -1 === t.indexOf(e.targetId) || ve.emit(p.g.REQUEST, e.targetId)
            })), W("Ad is requested for member " + e)
        }(e, t);
        var n = Qe(apntag.requests, e, Sn, t);
        n = function (e) {
            if (ae().context && "AMP-AD" === ae().context.tagName) {
                e.is_amp = !0, e.referrer_detection && (e.referrer_detection.rd_can = ae().context.canonicalUrl);
                var t = ae().context.consentSharedData;
                if (t) {
                    var n = {consent_string: t.consentString, consent_required: t.consentRequired};
                    e.gdpr_consent = n
                }
            }
            return e
        }(n);
        var a = Za(n);
        q(n.tags) ? L("ast.loadTagsByMemberId: no defined tags at this point so no /UT request will be made") : "withCredentials" in new XMLHttpRequest ? function (e, t) {
            var n = e.data, a = new XMLHttpRequest;
            a.onload = function () {
                var e = null;
                if (200 === this.status) try {
                    e = JSON.parse(this.responseText), apntag.handleCb(e, n)
                } catch (e) {
                    z("failed to parse ad response from impbus: " + e.message), $a(e.message, t, this.status, p.g.REQUEST_FAIL, e)
                } else z(this.status + " : " + this.statusText), $a(this.statusText, t, this.status, p.g.REQUEST_FAIL)
            }, a.onerror = function (n) {
                var a = n.target.status;
                $a("Error contacting impbus endpoint: " + e.url + " http response code:" + a, t, a, p.g.REQUEST_FAIL)
            }, a.open("POST", e.url, !0), a.setRequestHeader("Content-Type", "text/plain"), apntag.requests.test && a.setRequestHeader("X-Is-Test", 1), a.withCredentials = !0;
            try {
                a.send(n), apntag.requests.utCalled = !0
            } catch (n) {
                z("Error making POST request: " + n), Qa(e, t)
            }
        }(a, e) : Qa(a, e)
    }, ti = function (e) {
        X(En, (function (t, n) {
            if ("none" === n) ei(n, e); else {
                var a = Number(n);
                isNaN(a) ? z("Invalid value for member") : ei(a, e)
            }
        }))
    }, ni = function (e) {
        e = e || ee(apntag.requests.tags, (function (e) {
            return e.targetId
        })), P(e) || (e = [e]);
        var t = !1, n = !1, a = !1;
        jn(apntag.requests, (function () {
            t = !0, n && a && ti(e)
        })), Xa(apntag.requests, (function () {
            n = !0, t && a && ti(e)
        })), Ka(apntag.requests, (function () {
            a = !0, t && n && ti(e)
        }))
    };

    function ai(e, t, n) {
        if (F("showTag called for " + e), On()[e] = !0, pe(e)) {
            var a = apntag.requests.tags[e];
            if (a.showTagCalled = !0, a.curWindow = t, a.wcElement = n, a.displayed) return void L("Attempting to display ad that is already displayed, will not render this ad again: " + e);
            if (apntag.requests.utCalled) if (a.adResponse) {
                var i = Ua(a, kn, Pn(), xn);
                _n.push(i), apntag.requests.hasLeft && fe()
            } else apntag.requests.checkDisplay = !0; else L(e + " : showTag() called before ad request was made. This placement might not display if a subsequent loadTags() call is not made")
        } else F("the " + e + " tag was loaded before the ad placement was available.", p.j.WARN)
    }

    function ii(e) {
        if (F("getTag called for tag " + e), pe(e)) return e && Tn[e] ? Tn[e] : void 0;
        z("the " + e + " tag is not defined.", p.j.WARN)
    }

    var ri = function (e) {
        apntag.requests.utCalled = !1, apntag.requests.hasLeft = !1, apntag.requests.cbCalled = !1, apntag.requests.errorReported = !1;
        var t = function (e) {
            var t = {};
            return 0 === e.length ? apntag.requests.tags : (X(apntag.requests.tags, (function (n, a) {
                for (var i = 0; i < e.length; i++) e[i] === a && (t[a] = n)
            })), t)
        }(function (e) {
            var t = [];
            return P(e) ? t = e : N(e) && t.push(e), t
        }(e));
        X(t, (function (e, n) {
            X(_n, (function (e) {
                if (n === e) {
                    var a = An.document, i = t[n].wcElement || a.getElementById(e);
                    if (!i) return;
                    for (; i.hasChildNodes();) i.removeChild(i.firstChild)
                }
            }))
        })), X(t, (function (e) {
            e.utCalled = !1, e.displayed = !1, e.isMediated = !1, e.isBannerMediation = !1, e.isVideoMediation = !1, e.ad = {}
        }));
        try {
            ni()
        } catch (e) {
            z("refreshTags " + e.message)
        }
    };

    function oi(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = 0, i = 0;
        P(t) && 2 === t.length ? (i = t[0], a = t[1]) : z("resizeAd must be invoked with a (targetId,[width, height])");
        var r = Pn()[e];
        if (r) {
            var o = n.resizeAdParentDiv, s = apntag.requests.tags[e].wcElement, d = ii(e), c = se(d),
                u = s ? s.querySelector("#" + c) : An.document.getElementById(c), l = apntag.requests.tags[e];
            if (u) {
                var p = !1;
                if ("boolean" == typeof o ? p = o : l && "boolean" == typeof l.resizeAdParentDiv && (p = l.resizeAdParentDiv), p && (u.style.height = a + "px", u.style.width = i + "px", u.style.height = a, u.style.width = i), u.style.height = a, u.style.width = i, r.height = a + "px", r.width = i + "px", r.height = a, r.width = i, l && !l.enableSafeFrame && ("none" !== u.style.display && 0 === a && 0 === i ? (l.styleDisplay = u.style.display, u.style.display = "none") : "none" === u.style.display && 0 !== a && 0 !== i && (u.style.display = l.styleDisplay || "inline")), F("ResizeAd successful for targetId: " + e), l && l.isMediated && r.contentWindow) {
                    var f = ae(), g = f.location.protocol + "//" + f.location.host,
                        m = {name: "resizeAd", size: [i, a]};
                    r.contentWindow.postMessage(JSON.stringify(m), g)
                }
            } else z("Failed to find target for resizeAd: " + e)
        } else z("Failed to find target for resizeAd : " + e)
    }

    var si = p.b.NATIVE, di = p.b.VIDEO, ci = p.l.UNDEFINED, ui = p.l.NUMBER, li = p.a.NOAD;
    x(An, "message", (function (e) {
        if (e.origin === de() && "string" == typeof e.data) {
            j("Data sent from creative", e.data);
            var t = void 0;
            try {
                t = JSON.parse(e.data)
            } catch (t) {
                return void ("nobid" === e.data ? F("No bid response returned") : z("Invalid data from creative: " + e.data))
            }
            if (Z(t, "eventType")) "adError" === t.eventType && window.apntag.recordErrorEvent(t.exception, t.targetId); else switch (t.name) {
                case"expand":
                    Yn(t);
                    break;
                case"collapse":
                    !function (e) {
                        F("Collapse iframe started by host");
                        var t = ae(), n = ht.getInstance().getIframe(e.targetId), a = n.iframe.style,
                            i = t.document.getElementById(p.m.UT_DIV + e.targetId);
                        i || (i = n.iframe.parentNode);
                        var r = i.style, o = n.originalWidth, s = n.originalHeight;
                        e.ext && (0 === e.ext.width && (o = 0), 0 === e.ext.height && (s = 0)), a.left = "", a.top = "0px", r.width = o + "px", a.width = o + "px", r.height = s + "px", a.height = s + "px", a.zIndex = "";
                        var d = n.iframe.contentWindow, c = {};
                        c.targetId = e.targetId, c.geom = Kn(e.targetId, n.iframe), c.status = p.o.STATUS.NOTIFY_COLLAPSED, ra(d, JSON.stringify(c), de())
                    }(t);
                    break;
                case"cmp":
                    !function (e) {
                        function t() {
                            var t = apntag.requests.gdpr_consent,
                                n = ht.getInstance().getIframe(e.targetId).iframe.contentWindow,
                                a = {targetId: e.targetId, gdpr_consent: t, status: p.o.STATUS.CMP};
                            ra(n, a, de())
                        }

                        apntag.requests.gdpr_consent ? t() : jn(apntag.requests, t)
                    }(t);
                    break;
                case"resizeAd":
                    apntag.resizeAd(t.targetId, t.cmd);
                    break;
                case"mediatedNative":
                    apntag.handleMediationBid(t.targetId);
                    break;
                case"emitEvent":
                    apntag.emitEvent.apply(null, t.cmd);
                    break;
                case"message":
                    break;
                case"updateRenderStatus":
                    oa.setRendererStatus(t.rId + "_" + t.targetId, t.status);
                    break;
                case"setParentDivStyleDefaultProp":
                    var n = apntag.requests.tags["" + t.targetId].wcElement,
                        a = n ? n.querySelector("#" + p.m.UT_DIV + t.targetId) : document.getElementById(p.m.UT_DIV + t.targetId);
                    X(t.cmd, (function (e, t) {
                        "" === a.style[t] && (a.style[t] = e)
                    }))
            }
        }
    })), kn.expansionByPush = !1, kn.expansionByOverlay = !0, kn.readCookie = !1, kn.writeCookie = !1, kn.sandbox = !1, function () {
        if (/(iPhone)/i.test(navigator.userAgent)) try {
            x(wn.document, "apntag_iTunesLaunch", In)
        } catch (e) {
        }
    }();
    try {
        console.info ? console.info("AST library loaded: 0.53.0") : console.log("AST library loaded: 0.53.0")
    } catch (e) {
    }
    An.apntag = typeof An.apntag !== ci ? An.apntag : {};
    var pi = An.apntag;

    function fi(e, t, n) {
        var a, i = gi(e), r = function (e, t, n) {
            var a = e.adResponse && e.adResponse.ads && e.adResponse.ads.length,
                i = a && e.adResponse.ads[a - 1].ad_type === p.b.NATIVE;
            return e.isMediated && i && !n ? lt(e.adResponse, e.adResponse.ads[a - 1]) : lt(e.adResponse, n)
        }(i, 0, n);
        F("handling event for DOM ID:  " + r.targetId + " eventType : " + t), (t = t === p.n.LOADED ? "adLoaded" : t) === p.g.LOADED || t === p.g.LOADED_MEDIATED || t === p.g.NO_BID_MEDIATED ? ve.emit(t, r.targetId, r) : ve.emit(t, r.targetId), t === p.g.NO_BID && i.isMediated && (a = i.adResponse, H(window.document.body, a[li], a.uuid))
    }

    function gi(e) {
        var t = {};
        return X(pi.requests.tags, (function (n) {
            e !== n.uuid && e !== n.targetId || (t = n)
        })), t
    }

    pi.anq = pi.anq || [], pi.debug = pi.debug || !1, pi.dongle = pi.dongle || void 0, pi.loaded = !0, pi.requests = pi.requests || {}, pi.requests.keywords = pi.requests.keywords || {}, Un(p.f.IMPBUS), pi.requests.tagsOnPageCount = pi.requests.tagsOnPageCount || 0, pi.requests.waitOnTagsCount = pi.requests.waitOnTagsCount || 0, pi.requests.showTagDefinedMap = pi.requests.showTagDefinedMap || On(), pi.highlightAd = function (e) {
        if (j("Invoking apntag.highlightAd", arguments), e) {
            var t = Pn()[e];
            t && (t.style.border = "3px solid #e67300")
        }
    }, pi.anq.push = function (e) {
        e.call()
    }, pi.setEndpoint = function (e) {
        j("Invoking apntag.setEndpoint", arguments), Un(e)
    }, pi.setPageOpts = function (e) {
        j("Invoking apntag.setPageOpts", arguments), ca(e)
    }, pi.defineTag = function (e) {
        j("Invoking apntag.defineTag", arguments);
        var t = ma(e);
        return t
    }, pi.getTag = function (e) {
        if (!e || pe(e)) {
            var t = void 0, n = void 0;
            return e ? (n = ii(e), t = le(pi.requests.tags[e], n)) : (t = {}, Object.keys(pi.requests.tags).forEach((function (e) {
                n = ii(e), t[e] = le(pi.requests.tags[e], n)
            }))), t
        }
        z(e + " is not defined.", p.j.WARN)
    }, pi.getAdWrap = function (e) {
        if (j("Invoking apntag.getAdWrap", arguments), pe(e)) return e && pi.requests.tags && pi.requests.tags[e] && pi.requests.tags[e].adWrap ? pi.requests.tags[e].adWrap : void 0;
        z("the " + e + " tag is not defined.", p.j.WARN)
    }, pi.setSizes = function (e, t) {
        j("Invoking apntag.setSizes", arguments), arguments.length < 2 && (t = e, e = this.targetId), pe(e) ? pi.requests.tags[e].sizes = t : z("the " + e + " tag is not defined.", p.j.WARN)
    }, pi.modifyTag = function (e, t) {
        j("Invoking apntag.modifyTag", arguments);
        var n = {};
        arguments.length < 2 && (t = e, e = this.targetId), pe(e) ? ((t.sizes || t.sizeMapping) && fa(t, e), X(pi.requests.tags[e], (function (e, t) {
            n[t] = e
        })), X(t, (function (e, t) {
            n[t] = e
        })), pi.requests.tags[e] = n) : z("the " + e + " tag is not defined.", p.j.WARN)
    }, pi.setKeywords = function (e, t, n) {
        j("Invoking apntag.setKeywords", arguments);
        var a = {};
        "object" == typeof t && null !== t ? pe(e) ? (X(pi.requests.tags[e], (function (e, t) {
            a[t] = e
        })), a.keywords = a.keywords || {}, "object" == typeof n && null !== n && !0 === n.overrideKeyValue ? X(t, (function (e, t) {
            a.keywords[t] = e
        })) : X(t, (function (e, t) {
            Z(a.keywords, t) ? P(a.keywords[t]) ? a.keywords[t] = a.keywords[t].concat(e) : a.keywords[t] = [a.keywords[t]].concat(e) : a.keywords[t] = e
        })), pi.requests.tags[e] = a) : z("the " + e + " tag is not defined.", p.j.WARN) : L("unable to set keywords it should be an object")
    }, pi.onEvent = function (e, t, n) {
        if (j("Invoking apntag.onEvent", arguments), 2 === arguments.length && "function" == typeof t && typeof this.targetId === ci) n = t, t = "*"; else if (arguments.length < 3 && (n = t, t = this.targetId, !pe(t))) return void z("the " + t + " tag is not defined.", p.j.WARN);
        ve.on(e, t, n)
    }, pi.offEvent = function (e, t, n) {
        if (j("Invoking apntag.offEvent", arguments), 1 === arguments.length && typeof this.targetId === ci) t = "*"; else if (arguments.length < 2 && (t = this.targetId, !pe(t))) return void z("the " + t + " tag is not defined.", p.j.WARN);
        if (P(e)) for (var a = 0; a < e.length; a++) ve.off(e[a], t, n); else ve.off(e, t, n)
    }, pi.loadTags = function (e) {
        j("Invoking apntag.loadTags", arguments), ni(e)
    }, pi.refresh = function (e) {
        j("Invoking apntag.refresh", arguments), ri(e)
    }, pi.resizeAd = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        j("Invoking apntag.resizeAd", arguments), oi(e, t, n)
    }, pi.enableCookieSet = function () {
        L("apntag.enableCookieSet has been depreciated"), function (e) {
            e && e.override && (s = e.override), e && e.cookieUrl && (d = e.cookieUrl);
            var t = window.addEventListener ? "addEventListener" : "attachEvent", n = window[t],
                a = "attachEvent" == t ? "onload" : "load";
            "complete" === document.readyState || "interactive" === document.readyState ? u() : n(a, (function (e) {
                u()
            }), !1)
        }()
    }, pi.collapseAd = function (e, t, n) {
        j("Invoking apntag.collapseAd", arguments), L("apntag.collapseAd has been depreciated, Please use apntag.resizeAd");
        var a = 0, i = 0, r = ii(e);
        if (r) {
            var o = se(r);
            typeof t === ui && (a = t), typeof n === ui && (i = n);
            var s = An.document.getElementById(o);
            if (null !== s) {
                pi.resizeAd(e, [i, a]), s.style.height = a, s.style.width = i, s.style.display = "none";
                var d = pi.requests.tags[e], c = lt(d.adResponse);
                ve.emit(p.g.COLLAPSE, e, c)
            } else z("CollapseAd failed to find ad div : " + e)
        } else z("CollapseAd failed to find targetId : " + e)
    }, pi.showTag = function (e, t) {
        var n = void 0;
        if (j("Invoking apntag.showTag", arguments), "object" == typeof t && (t.hasOwnProperty("iframeWindow") || t.hasOwnProperty("wcElement"))) {
            if (n = t.wcElement instanceof Element && t.wcElement, t.wcElement && !n) return void z("wcElement is not a DOM element : " + e);
            t = t.iframeWindow || An
        } else t = t || An;
        ai(e, t, n)
    }, pi.setPageTargeting = function (e, t) {
        j("Invoking apntag.setPageTargeting", arguments), pi.requests.targetingParams && e && t && (pi.requests.targetingParams[e] = t)
    }, pi.getPageTargeting = function (e) {
        if (j("Invoking apntag.getPageTargeting", arguments), pi.requests.targetingParams && e) return pi.requests.targetingParams[e]
    }, pi.clearPageTargeting = function (e) {
        j("Invoking apntag.clearPageTargeting", arguments), pi.requests.targetingParams && e && delete pi.requests.targetingParams[e]
    }, pi.enableDebug = function () {
        pi.debug = !0, j("Invoking apntag.enableDebug", arguments)
    }, pi.disableDebug = function () {
        j("Invoking apntag.disableDebug", arguments), pi.debug = !1
    }, pi.notify = function (e, t, n) {
        e ? oa.invokeNotify(e, t, n) : z("apntag.notify must be called with `messageType`")
    }, pi.registerRenderer = function (e, t) {
        j("Invoking apntag.registerRenderer", arguments), oa.registerRenderer(e, t)
    }, pi.getAstVersion = function () {
        return j("Invoking apntag.getAstVersion"), "0.53.0"
    }, pi.recordErrorEvent = function (e, t) {
        j("Invoking apntag.recordErrorEvent", arguments);
        var n = pi.requests.tags[t], a = lt(n.adResponse), i = pt(e.message, t, e, 200);
        ve.emit(p.g.ERROR, t, i, a)
    }, pi.clearRequest = function () {
        j("Invoking apntag.clearRequest", arguments), pi.requests = {}, pi.requests.tags = {}, qn({}), ht.getInstance().resetInstance(), Mn({})
    }, pi.handleCb = function (e, t) {
        j("Invoking apntag.handleCb", arguments);
        try {
            Va(e, t)
        } catch (e) {
            var n = e.message ? e.message : e;
            z("Internal AST error : ", e);
            var a = void 0;
            $a(n, a, 200, p.g.BAD_REQUEST, e)
        }
    }, pi.emitEvent = function (e, t, n) {
        n && n.content_source && !pi.requests.enableMediationEvents || (j("Invoking apntag.emitEvent", arguments), fi(e, t, n))
    }, pi.getAdMarkup = function (e, t) {
        if (pi.requests.tags && pi.requests.tags[e]) {
            var n = pi.requests.tags[e];
            if (n.uuid === t) return n.adResponse.ads
        }
    }, pi.setSafeFrameConfig = function (e) {
        Z(e, "allowExpansionByPush") && (kn.expansionByPush = e.allowExpansionByPush), Z(e, "allowExpansionByOverlay") && (kn.expansionByOverlay = e.allowExpansionByOverlay), Z(e, "sandbox") && (kn.sandbox = e.sandbox), Z(e, "meta") && (kn.meta = e.meta)
    }, pi.fireImpressionTrackers = function (e) {
        if (!e.impressionTrackersFired) {
            e.impressionTrackersFired = !0, j("Firing impression trackers for", e.tagId);
            var t = e.native && e.native.impressionTrackers;
            t && t.length && t.forEach((function (e) {
                H(An.document.body, e)
            }));
            var n = e.native && e.native.javascriptTrackers;
            n && rt({strategy: "WithContent", data: n})
        }
    }, pi.attachClickTrackers = function (e, t) {
        var n = document.getElementById(t);
        n ? (j("Attaching click track handler to", t), x(n, "click", (function () {
            var t = e.native && e.native.clickTrackers;
            t && t.length && (j("Firing click trackers for", e.tagId), t.forEach((function (e) {
                H(An.document.body, e)
            })))
        }))) : z("HTML element with id " + t + " not found, click trackers not attached")
    }, pi.checkAdAvailable = function (e) {
        return function (e) {
            var t = apntag.requests.tags[e], n = t && t.adResponse,
                a = t && t.utCalled && !t.showTagCalled && n && lt(n);
            return function (e) {
                a && (n.nobid || e.resolve(a), n.nobid && e.reject())
            }
        }(e)
    }, pi.handleMediationBid = function (e) {
        var t = gi(e), n = [];
        try {
            var a = t.adResponse.ads;
            n = a[a.length - 1]
        } catch (e) {
            j("Trying to get mediated adresponse for renderer", e)
        }

        function i() {
            pi.resizeAd(e, [0, 0])
        }

        if (n.renderer_url) t.displayed = !1, n.targetId = e, n.ad_type === di && (function (e) {
            try {
                pi.requests.tags[e].adResponse.ads = [n]
            } catch (e) {
                j("Trying to set adresponse for video renderer", e)
            }
        }(t.targetId), t.enableSafeFrame && function (e) {
            var t = ht.getInstance().getIframe(e);
            t && t.iframe && (t.iframe.allow = "autoplay", t.iframe.style = "overflow:hidden")
        }(t.targetId)), t.enableSafeFrame ? function (e) {
            var t = ht.getInstance().getIframe(e.targetId).iframe.contentWindow;
            delete e.curWindow;
            var n = {status: "nativeAssembly", targetId: e.targetId};
            ra(t, JSON.stringify(n), de())
        }(t) : oa.loadRenderer(t, n), i(); else {
            var r = lt(t.adResponse, n);
            r.adType === si && i(), ve.emit(p.g.LOADED, e, r)
        }
    };
    W("AST library loaded"), function () {
        for (var e = 0; e < pi.anq.length; e++) typeof pi.anq[e].called === ci && (pi.anq[e].call(), pi.anq[e].called = !0)
    }(), pi.requests.checkDisplay || function (e) {
        var t = !1;

        function n() {
            t || (t = !0, e())
        }

        if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1); else if (document.attachEvent) {
            var a = void 0;
            try {
                a = null !== window.frameElement
            } catch (e) {
            }
            if (document.documentElement.doScroll && !a) {
                var i = function () {
                    if (!t) try {
                        document.documentElement.doScroll("left"), n()
                    } catch (e) {
                        setTimeout(i, 10)
                    }
                };
                i()
            }
            document.attachEvent("onreadystatechange", (function () {
                "complete" === document.readyState && n()
            }))
        }
        if (window.addEventListener) window.addEventListener("load", n, !1); else if (window.attachEvent) window.attachEvent("onload", n); else {
            var r = window.onload;
            window.onload = function () {
                r && r(), n()
            }
        }
    }(fe), "function" == typeof window.define && window.define.amd && window.define("appnexusAst", [], (function () {
        return window.apntag
    }))
}]);
