var BEMHTML = function() {
  var cache,
      xjst = (function(exports) {
    function $1(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "default") {
            return $2(__$ctx);
        } else if (__t === "attrs") {
            return $72(__$ctx);
        } else if (__t === "tag") {
            return $98(__$ctx);
        } else if (__t === "value") {
            if (__$ctx.block === "tumbler") {
                if (__$ctx.elem === "option") {
                    return $121(__$ctx);
                } else {
                    return $156(__$ctx);
                }
            } else {
                return $156(__$ctx);
            }
        } else if (__t === "content") {
            return $126(__$ctx);
        } else if (__t === "js") {
            return $148(__$ctx);
        } else {
            return $156(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "i-jquery") {
            if (!(__$ctx["__$anflg16"] !== true) === false) {
                if (!!__$ctx.elem === false) {
                    return $6(__$ctx);
                } else {
                    return $9(__$ctx);
                }
            } else {
                return $9(__$ctx);
            }
        } else if (__t === "tumbler") {
            return $17(__$ctx);
        } else {
            return $156(__$ctx);
        }
    }
    function $6(__$ctx) {
        var __r127, __r131, __r128, __r129, __r130;
        return "", __r127 = __$ctx["__$anflg16"], __$ctx["__$anflg16"] = true, __r131 = ("", __r128 = __$ctx.ctx, __$ctx.ctx = {
            block: "b-page",
            elem: "js",
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ":" : "") + "//yandex.st/jquery/" + __$ctx.mods.version + "/jquery.min.js"
        }, __r129 = __$ctx._mode, __$ctx._mode = "", __r130 = $421(__$ctx), __$ctx.ctx = __r128, __$ctx._mode = __r129, "", __r130), __$ctx["__$anflg16"] = __r127, "", __r131;
        return;
    }
    function $9(__$ctx) {
        if (!(__$ctx["__$anflg15"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                return $12(__$ctx);
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $12(__$ctx) {
        var __r122, __r126, __r123, __r124, __r125;
        return "", __r122 = __$ctx["__$anflg15"], __$ctx["__$anflg15"] = true, __r126 = ("", __r123 = __$ctx.ctx, __$ctx.ctx = {
            block: "b-page",
            elem: "js",
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ":" : "") + "//yandex.st/jquery/" + __$ctx.mods.version + "/jquery.min.js"
        }, __r124 = __$ctx._mode, __$ctx._mode = "", __r125 = $421(__$ctx), __$ctx.ctx = __r123, __$ctx._mode = __r124, "", __r125), __$ctx["__$anflg15"] = __r122, "", __r126;
        return;
    }
    function $17(__$ctx) {
        if (__$ctx.elem === "option") {
            if (__$ctx.ctx.side === "left") {
                if (!(__$ctx["__$anflg12"] !== true) === false) {
                    {
                        "";
                        var __r115 = __$ctx["__$anflg12"];
                        __$ctx["__$anflg12"] = true;
                        {
                            "";
                            var __r116 = __$ctx.ctx;
                            __$ctx.ctx = [ __$ctx.ctx, {
                                elem: "box"
                            } ];
                            var __r117 = __$ctx._mode;
                            __$ctx._mode = "";
                            $421(__$ctx);
                            __$ctx.ctx = __r116;
                            __$ctx._mode = __r117;
                            "";
                        }
                        __$ctx["__$anflg12"] = __r115;
                        "";
                    }
                    undefined;
                    return;
                } else {
                    return $24(__$ctx);
                }
            } else {
                return $24(__$ctx);
            }
        } else {
            return $32(__$ctx);
        }
    }
    function $24(__$ctx) {
        if (!(__$ctx["__$anflg11"] !== true) === false) {
            if (!true === false) {
                return $27(__$ctx);
            } else {
                return $32(__$ctx);
            }
        } else {
            return $32(__$ctx);
        }
    }
    function $27(__$ctx) {
        var __r110, __r111;
        var _$2cvalue = ("", __r110 = __$ctx._mode, __$ctx._mode = "value", __r111 = $121(__$ctx), __$ctx._mode = __r110, "", __r111);
        {
            "";
            var __r112 = __$ctx["__$anflg11"];
            __$ctx["__$anflg11"] = true;
            {
                "";
                var __r113 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: "label",
                    content: [ {
                        elem: "input",
                        name: __$ctx._name,
                        value: _$2cvalue,
                        disabled: __$ctx._disabled,
                        elemMods: {
                            side: __$ctx.ctx.side
                        }
                    }, {
                        elem: "text",
                        tag: "span",
                        elemMods: {
                            side: __$ctx.ctx.side
                        },
                        content: __$ctx.ctx.content
                    } ]
                };
                var __r114 = __$ctx._mode;
                __$ctx._mode = "";
                $421(__$ctx);
                __$ctx.ctx = __r113;
                __$ctx._mode = __r114;
                "";
            }
            __$ctx["__$anflg11"] = __r112;
            "";
        }
        undefined;
        return;
    }
    function $32(__$ctx) {
        if ((__$ctx.ctx.mods || {}).disabled === "yes") {
            if (!(__$ctx["__$anflg9"] !== true) === false) {
                if (!!__$ctx.elem === false) {
                    {
                        "";
                        var __r106 = __$ctx["__$anflg9"];
                        __$ctx["__$anflg9"] = true;
                        {
                            "";
                            var __r107 = __$ctx._disabled;
                            __$ctx._disabled = "disabled";
                            $17(__$ctx);
                            __$ctx._disabled = __r107;
                            "";
                        }
                        __$ctx["__$anflg9"] = __r106;
                        "";
                    }
                    undefined;
                    return;
                } else {
                    return $41(__$ctx);
                }
            } else {
                return $41(__$ctx);
            }
        } else {
            return $41(__$ctx);
        }
    }
    function $41(__$ctx) {
        if ((__$ctx.ctx.mods || {}).checked === "yes") {
            if (!(__$ctx["__$anflg8"] !== true) === false) {
                if (!!__$ctx.elem === false) {
                    {
                        "";
                        var __r104 = __$ctx["__$anflg8"];
                        __$ctx["__$anflg8"] = true;
                        {
                            "";
                            var __r105 = __$ctx._checked;
                            __$ctx._checked = "checked";
                            $17(__$ctx);
                            __$ctx._checked = __r105;
                            "";
                        }
                        __$ctx["__$anflg8"] = __r104;
                        "";
                    }
                    undefined;
                    return;
                } else {
                    return $50(__$ctx);
                }
            } else {
                return $50(__$ctx);
            }
        } else {
            return $50(__$ctx);
        }
    }
    function $50(__$ctx) {
        if (!(__$ctx["__$anflg7"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                if (!!(__$ctx.ctx.mods || {}).theme === false) {
                    {
                        "";
                        var __r101 = __$ctx["__$anflg7"];
                        __$ctx["__$anflg7"] = true;
                        {
                            "";
                            var __r102 = __$ctx.ctx, __r103 = __r102.mods;
                            __r102.mods = __$ctx._.extend(__$ctx.ctx.mods || {}, {
                                theme: "normal"
                            });
                            $17(__$ctx);
                            __r102.mods = __r103;
                            "";
                        }
                        __$ctx["__$anflg7"] = __r101;
                        "";
                    }
                    undefined;
                    return;
                } else {
                    return $59(__$ctx);
                }
            } else {
                return $59(__$ctx);
            }
        } else {
            return $59(__$ctx);
        }
    }
    function $59(__$ctx) {
        if (!(__$ctx["__$anflg6"] !== true) === false) {
            if (!true === false) {
                if (!!__$ctx.elem === false) {
                    return $63(__$ctx);
                } else {
                    return $156(__$ctx);
                }
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $63(__$ctx) {
        var _$22id = __$ctx.generateId(), _$22leftId = "left" + _$22id, _$22rightId = "right" + _$22id, _$22sideId = null;
        if (__$ctx.ctx.content) {
            _$22sideId = __$ctx.ctx.content[0].side === "left" ? _$22leftId : _$22rightId;
        } else {
            undefined;
        }
        {
            "";
            var __r96 = __$ctx["__$anflg6"];
            __$ctx["__$anflg6"] = true;
            {
                "";
                var __r97 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || (__$ctx.ctx.name = _$22id);
                var __r98 = __$ctx._leftId;
                __$ctx._leftId = _$22leftId;
                var __r99 = __$ctx._rightId;
                __$ctx._rightId = _$22rightId;
                var __r100 = __$ctx._sideId;
                __$ctx._sideId = _$22sideId;
                $17(__$ctx);
                __$ctx._name = __r97;
                __$ctx._leftId = __r98;
                __$ctx._rightId = __r99;
                __$ctx._sideId = __r100;
                "";
            }
            __$ctx["__$anflg6"] = __r96;
            "";
        }
        return;
    }
    function $72(__$ctx) {
        if (__$ctx.block === "tumbler") {
            var __t = __$ctx.elem;
            if (__t === "sticker") {
                return $74(__$ctx);
            } else if (__t === "text") {
                return $79(__$ctx);
            } else if (__t === "input") {
                var _$2gside = __$ctx.elemMods.side, _$2gchecked;
                if (_$2gside === "left") {
                    _$2gchecked = __$ctx._checked ? undefined : "checked";
                } else {
                    _$2gchecked = __$ctx._checked;
                }
                return {
                    type: "radio",
                    name: __$ctx.ctx.name,
                    value: __$ctx.ctx.value,
                    checked: _$2gchecked,
                    disabled: __$ctx.ctx.disabled,
                    "aria-labelledby": _$2gside === "left" ? __$ctx._leftId : __$ctx._rightId
                };
                return;
            } else if (__t === "button") {
                return $86(__$ctx);
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $74(__$ctx) {
        if (!(__$ctx["__$anflg14"] !== true) === false) {
            var __r120, __r121;
            var _$2ia = ("", __r120 = __$ctx["__$anflg14"], __$ctx["__$anflg14"] = true, __r121 = $74(__$ctx), __$ctx["__$anflg14"] = __r120, "", __r121) || {};
            _$2ia["aria-hidden"] = true;
            return _$2ia;
            return;
        } else {
            return $156(__$ctx);
        }
    }
    function $79(__$ctx) {
        if (!(__$ctx["__$anflg13"] !== true) === false) {
            var __r118, __r119;
            var _$2ha = ("", __r118 = __$ctx["__$anflg13"], __$ctx["__$anflg13"] = true, __r119 = $79(__$ctx), __$ctx["__$anflg13"] = __r118, "", __r119) || {};
            side = __$ctx.elemMods.side;
            _$2ha.id = side === "left" ? __$ctx._leftId : __$ctx._rightId;
            _$2ha["aria-hidden"] = true;
            return _$2ha;
            return;
        } else {
            return $156(__$ctx);
        }
    }
    function $86(__$ctx) {
        if (!(__$ctx["__$anflg10"] !== true) === false) {
            if (!__$ctx._sideId === false) {
                var __r108, __r109;
                var _$2aa = ("", __r108 = __$ctx["__$anflg10"], __$ctx["__$anflg10"] = true, __r109 = $86(__$ctx), __$ctx["__$anflg10"] = __r108, "", __r109) || {};
                _$2aa["aria-labelledby"] = __$ctx._sideId;
                return _$2aa;
                return;
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $98(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "tumbler") {
            var __t = __$ctx.elem;
            if (__t === "input") {
                return "input";
                return;
            } else if (__t === "label") {
                return "label";
                return;
            } else if (__t === "box") {
                return "span";
                return;
            } else {
                if (!!__$ctx.elem === false) {
                    return "span";
                    return;
                } else {
                    return $156(__$ctx);
                }
            }
        } else if (__t === "popup") {
            if (__$ctx.elem === "tail") {
                return "i";
                return;
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $121(__$ctx) {
        return __$ctx.ctx.value || __$ctx.ctx.side !== "left";
        return;
    }
    function $126(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "tumbler") {
            if (__$ctx.elem === "box") {
                return [ {
                    elem: "sticker",
                    elemMods: {
                        position: "left"
                    },
                    content: {
                        elem: "sticker-label",
                        content: BEM.I18N("tumbler", "on")
                    }
                }, {
                    elem: "sticker",
                    elemMods: {
                        position: "right"
                    },
                    content: {
                        elem: "sticker-label",
                        content: BEM.I18N("tumbler", "off")
                    }
                }, {
                    elem: "button"
                } ];
                return;
            } else {
                if (!(__$ctx.ctx.content === undefined) === false) {
                    if (!!__$ctx.elem === false) {
                        return [ {
                            elem: "option",
                            side: "left"
                        }, {
                            elem: "option",
                            side: "right"
                        } ];
                        return;
                    } else {
                        return $136(__$ctx);
                    }
                } else {
                    return $136(__$ctx);
                }
            }
        } else if (__t === "popup") {
            if (!!__$ctx.elem === false) {
                return [ {
                    elem: "under",
                    mods: __$ctx.ctx.underMods
                }, __$ctx.ctx.content ];
                return;
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $136(__$ctx) {
        if (!(__$ctx._.isArray(__$ctx.ctx.content) && __$ctx.ctx.content.length === 1) === false) {
            var _$26content = __$ctx.ctx.content;
            if (_$26content[0].side !== "left") {
                return [ {
                    elem: "option",
                    side: "left"
                }, _$26content ];
            } else {
                undefined;
            }
            return [ _$26content, {
                elem: "option",
                side: "right"
            } ];
            return;
        } else {
            return $156(__$ctx);
        }
    }
    function $148(__$ctx) {
        if (__$ctx.block === "tumbler") {
            if (!!__$ctx.elem === false) {
                return true;
                return;
            } else {
                return $156(__$ctx);
            }
        } else {
            return $156(__$ctx);
        }
    }
    function $156(__$ctx) {
        if (__$ctx.block === "popup") {
            if (!!__$ctx.ctx._defaults === false) {
                if (!!__$ctx.elem === false) {
                    return $160(__$ctx);
                } else {
                    return $165(__$ctx);
                }
            } else {
                return $165(__$ctx);
            }
        } else {
            return $165(__$ctx);
        }
    }
    function $160(__$ctx) {
        __$ctx.ctx.mods = __$ctx._.extend({
            theme: "ffffff",
            autoclosable: "yes",
            adaptive: "yes",
            animate: "yes"
        }, __$ctx.ctx.mods);
        if (__$ctx.ctx.zIndex) {
            var _$1xattrs = __$ctx.ctx.attrs || (__$ctx.ctx.attrs = {});
            _$1xattrs.style = (_$1xattrs.style || "") + ";z-index:" + __$ctx.ctx.zIndex + ";";
        } else {
            undefined;
        }
        {
            "";
            var __r94 = __$ctx.ctx, __r95 = __r94._defaults;
            __r94._defaults = true;
            $1(__$ctx);
            __r94._defaults = __r95;
            "";
        }
        undefined;
        return;
    }
    function $165(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "content") {
            var __t = __$ctx.block;
            if (__t === "button") {
                if (!!__$ctx.elem === false) {
                    return {
                        elem: "text",
                        tag: "span",
                        content: __$ctx.ctx.content
                    };
                    return;
                } else {
                    return $184(__$ctx);
                }
            } else if (__t === "i-ua") {
                return $172(__$ctx);
            } else {
                return $184(__$ctx);
            }
        } else if (__t === "js") {
            if (__$ctx.block === "button") {
                if (!!__$ctx.elem === false) {
                    return true;
                    return;
                } else {
                    return $315(__$ctx);
                }
            } else {
                return $315(__$ctx);
            }
        } else if (__t === "tag") {
            var __t = __$ctx.block;
            if (__t === "button") {
                if (!__$ctx.ctx.url === false) {
                    if (!!__$ctx.elem === false) {
                        return "a";
                        return;
                    } else {
                        return $323(__$ctx);
                    }
                } else {
                    return $323(__$ctx);
                }
            } else if (__t === "b-page") {
                var __t = __$ctx.elem;
                if (__t === "js") {
                    return "script";
                    return;
                } else if (__t === "css") {
                    if (!__$ctx.ctx.url === false) {
                        return "link";
                        return;
                    } else {
                        return "style";
                        return;
                    }
                } else if (__t === "meta") {
                    return "meta";
                    return;
                } else if (__t === "link") {
                    return "link";
                    return;
                } else if (__t === "body") {
                    return "body";
                    return;
                } else if (__t === "head") {
                    return "head";
                    return;
                } else if (__t === "root") {
                    return "html";
                    return;
                } else {
                    return $354(__$ctx);
                }
            } else if (__t === "i-ua") {
                if (!!__$ctx.elem === false) {
                    return "script";
                    return;
                } else {
                    return $354(__$ctx);
                }
            } else {
                return $354(__$ctx);
            }
        } else if (__t === "mix") {
            if (__$ctx.block === "b-page") {
                if (__$ctx.elem === "body") {
                    return $357(__$ctx);
                } else {
                    return $365(__$ctx);
                }
            } else {
                return $365(__$ctx);
            }
        } else if (__t === "default") {
            var __t = __$ctx.block;
            if (__t === "button") {
                return $227(__$ctx);
            } else if (__t === "b-page") {
                return $235(__$ctx);
            } else if (__t === "i-bem") {
                if (__$ctx.elem === "i18n") {
                    return $271(__$ctx);
                } else {
                    return $428(__$ctx);
                }
            } else if (__t === "i-global") {
                return $274(__$ctx);
            } else if (__t === "i-jquery") {
                if (__$ctx.elem === "core") {
                    {
                        "";
                        var __r49 = __$ctx._mode;
                        __$ctx._mode = "";
                        var __r50 = __$ctx.ctx;
                        __$ctx.ctx = {
                            block: "b-page",
                            elem: "js",
                            url: "http://yandex.st/jquery/1.8.3/jquery.min.js"
                        };
                        $421(__$ctx);
                        __$ctx._mode = __r49;
                        __$ctx.ctx = __r50;
                        "";
                    }
                    undefined;
                    return;
                } else {
                    return $428(__$ctx);
                }
            } else {
                return $428(__$ctx);
            }
        } else if (__t === "cls") {
            if (__$ctx.block === "b-page") {
                if (__$ctx.elem === "root") {
                    return "i-ua_js_no i-ua_css_standard";
                    return;
                } else {
                    return $396(__$ctx);
                }
            } else {
                return $396(__$ctx);
            }
        } else if (__t === "js-params") {
            if (__$ctx.block === "b-page") {
                return $398(__$ctx);
            } else {
                return $428(__$ctx);
            }
        } else if (__t === "public-params") {
            if (__$ctx.block === "i-global") {
                return $406(__$ctx);
            } else {
                return $428(__$ctx);
            }
        } else if (__t === "env") {
            if (__$ctx.block === "i-global") {
                return $414(__$ctx);
            } else {
                return $428(__$ctx);
            }
        } else if (__t === "") {
            return $421(__$ctx);
        } else if (__t === "attrs") {
            var __t = __$ctx.block;
            if (__t === "button") {
                return $186(__$ctx);
            } else if (__t === "b-page") {
                var __t = __$ctx.elem;
                if (__t === "js") {
                    return __$ctx.ctx.url ? {
                        src: __$ctx.ctx.url
                    } : {};
                    return;
                } else if (__t === "css") {
                    if (!__$ctx.ctx.url === false) {
                        return {
                            rel: "stylesheet",
                            href: __$ctx.ctx.url
                        };
                        return;
                    } else {
                        return $225(__$ctx);
                    }
                } else if (__t === "meta") {
                    return __$ctx.ctx.attrs;
                    return;
                } else {
                    return $225(__$ctx);
                }
            } else {
                return $225(__$ctx);
            }
        } else if (__t === "jsAttr") {
            return "ondblclick";
            return;
        } else if (__t === "bem") {
            var __t = __$ctx.block;
            if (__t === "b-page") {
                var __t = __$ctx.elem;
                if (__t === "js" || __t === "css" || __t === "meta" || __t === "link" || __t === "head" || __t === "root") {
                    return false;
                    return;
                } else {
                    return $388(__$ctx);
                }
            } else if (__t === "i-ua") {
                if (!!__$ctx.elem === false) {
                    return false;
                    return;
                } else {
                    return $388(__$ctx);
                }
            } else {
                return $388(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $172(__$ctx) {
        if (!(__$ctx["__$anflg1"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                var __r51, __r52;
                var _$kc = ("", __r51 = __$ctx["__$anflg1"], __$ctx["__$anflg1"] = true, __r52 = $172(__$ctx), __$ctx["__$anflg1"] = __r51, "", __r52);
                _$kc += [ ";(function(d,e,c,r,n,w,v,f){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'n="createElementNS";', 'f="firstChild";', 'w="http://www.w3.org/2000/svg";', 'e[c]+=" i-ua_svg_"+(!!d[n]&&!!d[n](w,"svg").createSVGRect?"yes":"no");', 'v=d.createElement("div");', 'v.innerHTML="<svg/>";', 'e[c]+=" i-ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");', "})(document);" ].join("");
                return _$kc;
                return;
            } else {
                return $178(__$ctx);
            }
        } else {
            return $178(__$ctx);
        }
    }
    function $178(__$ctx) {
        if (!!__$ctx.elem === false) {
            return [ ";(function(d,e,c,r){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");', 'if(d.compatMode!="CSS1Compat")', 'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")', "})(document);" ].join("");
            return;
        } else {
            return $184(__$ctx);
        }
    }
    function $184(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $186(__$ctx) {
        if (!(__$ctx["__$anflg5"] !== true) === false) {
            if (!__$ctx.ctx.url === false) {
                if (!!__$ctx.elem === false) {
                    var __r92, __r93;
                    var _$1vctx = __$ctx.ctx, _$1vp = ("", __r92 = __$ctx["__$anflg5"], __$ctx["__$anflg5"] = true, __r93 = $186(__$ctx), __$ctx["__$anflg5"] = __r92, "", __r93), _$1va = {
                        href: _$1vctx.url
                    };
                    _$1vctx.target && (_$1va.target = _$1vctx.target);
                    __$ctx.mods.disabled && (_$1va["aria-disabled"] = true);
                    return __$ctx._.extend(_$1vp, _$1va);
                    return;
                } else {
                    return $195(__$ctx);
                }
            } else {
                return $195(__$ctx);
            }
        } else {
            return $195(__$ctx);
        }
    }
    function $195(__$ctx) {
        if (!(__$ctx["__$anflg4"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    return $199(__$ctx);
                } else {
                    return $204(__$ctx);
                }
            } else {
                return $204(__$ctx);
            }
        } else {
            return $204(__$ctx);
        }
    }
    function $199(__$ctx) {
        var __r90, __r91;
        var _$1uctx = __$ctx.ctx, _$1up = ("", __r90 = __$ctx["__$anflg4"], __$ctx["__$anflg4"] = true, __r91 = $186(__$ctx), __$ctx["__$anflg4"] = __r90, "", __r91), _$1ua = {
            type: _$1uctx.type || "button"
        }, _$1uprops = [ "name", "value" ], _$1ui;
        while (_$1ui = _$1uprops.shift()) {
            _$1uctx[_$1ui] && (_$1ua[_$1ui] = _$1uctx[_$1ui]);
        }
        __$ctx.mods.disabled && (_$1ua.disabled = "disabled");
        return __$ctx._.extend(_$1up, _$1ua);
        return;
    }
    function $204(__$ctx) {
        if (!true === false) {
            if (!!__$ctx.elem === false) {
                var _$1tctx = __$ctx.ctx, _$1ta = {
                    role: "button"
                };
                _$1tctx.tabindex && (_$1ta.tabindex = _$1tctx.tabindex);
                return _$1ta;
                return;
            } else {
                return $225(__$ctx);
            }
        } else {
            return $225(__$ctx);
        }
    }
    function $225(__$ctx) {
        return undefined;
        return;
    }
    function $227(__$ctx) {
        if (!(__$ctx["__$anflg3"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                var _$1smods = __$ctx.ctx.mods || {};
                _$1smods.theme = _$1smods.theme || "normal";
                {
                    "";
                    var __r87 = __$ctx["__$anflg3"];
                    __$ctx["__$anflg3"] = true;
                    {
                        "";
                        var __r88 = __$ctx.ctx, __r89 = __r88.mods;
                        __r88.mods = _$1smods;
                        $227(__$ctx);
                        __r88.mods = __r89;
                        "";
                    }
                    __$ctx["__$anflg3"] = __r87;
                    "";
                }
                undefined;
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $235(__$ctx) {
        if (!(__$ctx["__$anflg2"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                {
                    "";
                    var __r84 = __$ctx["__$anflg2"];
                    __$ctx["__$anflg2"] = true;
                    {
                        "";
                        var __r85 = __$ctx.ctx, __r86 = __r85.zoom;
                        __r85.zoom = true;
                        $235(__$ctx);
                        __r85.zoom = __r86;
                        "";
                    }
                    __$ctx["__$anflg2"] = __r84;
                    "";
                }
                undefined;
                return;
            } else {
                return $241(__$ctx);
            }
        } else {
            return $241(__$ctx);
        }
    }
    function $241(__$ctx) {
        var __t = __$ctx.elem;
        if (__t === "css") {
            if (!__$ctx.ctx.ie === false) {
                if (!__$ctx.ctx.url === false) {
                    if (!!__$ctx._IE === false) {
                        {
                            "";
                            var __r75 = __$ctx._mode;
                            __$ctx._mode = "";
                            var __r76 = __$ctx._IE;
                            __$ctx._IE = true;
                            var __r77 = __$ctx.ctx;
                            __$ctx.ctx = [ "<!--[if gte IE 9]>", __$ctx.ctx, "<![endif]-->" ];
                            $421(__$ctx);
                            __$ctx._mode = __r75;
                            __$ctx._IE = __r76;
                            __$ctx.ctx = __r77;
                            "";
                        }
                        return;
                    } else {
                        return $251(__$ctx);
                    }
                } else {
                    return $251(__$ctx);
                }
            } else {
                return $251(__$ctx);
            }
        } else if (__t === "icon") {
            return $263(__$ctx);
        } else {
            return $264(__$ctx);
        }
    }
    function $251(__$ctx) {
        if (!__$ctx.ctx.url === false) {
            if (!!__$ctx._notIE === false) {
                if (!!__$ctx.ctx.ie === false) {
                    {
                        "";
                        var __r72 = __$ctx._mode;
                        __$ctx._mode = "";
                        var __r73 = __$ctx._notIE;
                        __$ctx._notIE = true;
                        var __r74 = __$ctx.ctx;
                        __$ctx.ctx = [ __$ctx.ctx ];
                        $421(__$ctx);
                        __$ctx._mode = __r72;
                        __$ctx._notIE = __r73;
                        __$ctx.ctx = __r74;
                        "";
                    }
                    return;
                } else {
                    return $264(__$ctx);
                }
            } else {
                return $264(__$ctx);
            }
        } else {
            return $264(__$ctx);
        }
    }
    function $263(__$ctx) {
        {
            "";
            var __r70 = __$ctx._mode;
            __$ctx._mode = "";
            var __r71 = __$ctx.ctx;
            __$ctx.ctx = [ __$ctx.ctx.src16 && {
                elem: "link",
                attrs: {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.src16
                }
            }, __$ctx.ctx.src152 && {
                elem: "link",
                attrs: {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "152x152",
                    href: __$ctx.ctx.src152
                }
            }, __$ctx.ctx.src144 && {
                elem: "link",
                attrs: {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "144x144",
                    href: __$ctx.ctx.src144
                }
            }, __$ctx.ctx.src120 && {
                elem: "link",
                attrs: {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "120x120",
                    href: __$ctx.ctx.src120
                }
            }, __$ctx.ctx.src114 && {
                elem: "link",
                attrs: {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "114x114",
                    href: __$ctx.ctx.src114
                }
            }, __$ctx.ctx.src76 && {
                elem: "link",
                attrs: {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "76x76",
                    href: __$ctx.ctx.src76
                }
            }, __$ctx.ctx.src72 && {
                elem: "link",
                attrs: {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "72x72",
                    href: __$ctx.ctx.src72
                }
            }, __$ctx.ctx.src57 && {
                elem: "link",
                attrs: {
                    rel: "apple-touch-icon-precomposed",
                    href: __$ctx.ctx.src57
                }
            } ];
            $421(__$ctx);
            __$ctx._mode = __r70;
            __$ctx.ctx = __r71;
            "";
        }
        return;
    }
    function $264(__$ctx) {
        if (!!__$ctx.elem === false) {
            return $266(__$ctx);
        } else {
            return $428(__$ctx);
        }
    }
    function $266(__$ctx) {
        __$ctx._buf.push("<!DOCTYPE html>");
        {
            "";
            var __r68 = __$ctx._mode;
            __$ctx._mode = "";
            var __r69 = __$ctx.ctx;
            __$ctx.ctx = {
                elem: "root",
                content: [ {
                    elem: "head",
                    content: [ {
                        elem: "meta",
                        attrs: {
                            charset: "utf-8"
                        }
                    }, {
                        tag: "title",
                        content: __$ctx.ctx.title
                    }, {
                        elem: "meta",
                        attrs: {
                            name: "viewport",
                            content: __$ctx.ctx.zoom ? "width=device-width,initial-scale=1" : "width=device-width,maximum-scale=1,initial-scale=1,user-scalable=0"
                        }
                    }, {
                        elem: "meta",
                        attrs: {
                            name: "format-detection",
                            content: "telephone=no"
                        }
                    }, {
                        elem: "link",
                        attrs: {
                            name: "apple-mobile-web-app-capable",
                            content: "yes"
                        }
                    }, {
                        block: "i-ua",
                        js: true
                    }, __$ctx.ctx.head ]
                }, {
                    elem: "body",
                    mix: [ __$ctx.ctx, {
                        block: "i-ua",
                        js: true
                    } ].concat(__$ctx.ctx.mix || []),
                    content: __$ctx.ctx.content
                } ]
            };
            $421(__$ctx);
            __$ctx._mode = __r68;
            __$ctx.ctx = __r69;
            "";
        }
        return;
    }
    function $271(__$ctx) {
        var __r64, __r65, __r66, __r67;
        if (!__$ctx.ctx) {
            return "";
        } else {
            undefined;
        }
        var _$10ctx = __$ctx.ctx, _$10keyset = _$10ctx.keyset, _$10key = _$10ctx.key, _$10params = _$10ctx.params || {};
        if (!(_$10keyset || _$10key)) {
            return "";
        } else {
            undefined;
        }
        if (_$10ctx.content) {
            var _$10cnt;
            _$10params.content = (_$10cnt = [], "", __r64 = __$ctx._buf, __$ctx._buf = _$10cnt, __r65 = __$ctx._mode, __$ctx._mode = "", __r66 = __$ctx.ctx, __$ctx.ctx = _$10ctx.content, __r67 = $421(__$ctx), __$ctx._buf = __r64, __$ctx._mode = __r65, __$ctx.ctx = __r66, "", __r67, _$10cnt.join(""));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$10keyset, _$10key, _$10params));
        return;
    }
    function $274(__$ctx) {
        var __t = __$ctx.elem;
        if (__t === "lego-static-host") {
            return "//yandex.st/lego/2.10-132";
            return;
        } else if (__t === "export-host") {
            return "//export.yandex.ru";
            return;
        } else if (__t === "social-host") {
            return "//social.yandex.ru";
            return;
        } else if (__t === "pass-host") {
            return "//pass.yandex.ru";
            return;
        } else if (__t === "passport-host") {
            return "https://passport.yandex.ru";
            return;
        } else if (__t === "click-host") {
            return "//clck.yandex.ru";
            return;
        } else if (__t === "content-region" || __t === "tld" || __t === "lang") {
            return "ru";
            return;
        } else {
            if (!__$ctx.elem === false) {
                return "";
                return;
            } else {
                if (!!__$ctx.elem === false) {
                    return $298(__$ctx);
                } else {
                    return $428(__$ctx);
                }
            }
        }
    }
    function $298(__$ctx) {
        var _$nparams = __$ctx.ctx.params || {}, _$niGlobal = __$ctx["i-global"], _$nisTldChanged = _$nparams.tld && _$nparams.tld !== _$niGlobal.tld, _$ntld, _$nxYaDomain, _$nyaDomain;
        if (_$nisTldChanged) {
            _$ntld = _$nparams.tld;
            _$nxYaDomain = _$ntld === "tr" ? "yandex.com.tr" : "yandex." + _$ntld;
            _$nyaDomain = [ "ua", "by", "kz" ].indexOf(_$ntld) != -1 ? "yandex.ru" : _$nxYaDomain;
            _$niGlobal["content-region"] = _$ntld;
            _$niGlobal["click-host"] = "//clck." + _$nyaDomain;
            _$niGlobal["passport-host"] = "https://passport." + _$nyaDomain;
            _$niGlobal["pass-host"] = "//pass." + _$nxYaDomain;
            _$niGlobal["social-host"] = "//social." + _$nxYaDomain;
            _$niGlobal["export-host"] = "//export." + _$nxYaDomain;
        } else {
            undefined;
        }
        for (var _$np in _$nparams) {
            _$niGlobal[_$np] = _$nparams[_$np];
        }
        return;
    }
    function $315(__$ctx) {
        return undefined;
        return;
    }
    function $323(__$ctx) {
        if (!!__$ctx.elem === false) {
            return "button";
            return;
        } else {
            return $354(__$ctx);
        }
    }
    function $354(__$ctx) {
        return undefined;
        return;
    }
    function $357(__$ctx) {
        if (!!__$ctx.ctx._iGlobal === false) {
            return $359(__$ctx);
        } else {
            return $365(__$ctx);
        }
    }
    function $359(__$ctx) {
        var __r78, __r79, __r80, __r81, __r82, __r83;
        var _$1nmix = ("", __r78 = __$ctx.ctx, __r79 = __r78._iGlobal, __r78._iGlobal = true, __r80 = $357(__$ctx), __r78._iGlobal = __r79, "", __r80), _$1njsParams = ("", __r81 = __$ctx._mode, __$ctx._mode = "js-params", __r82 = __$ctx.elem, __$ctx.elem = "", __r83 = $398(__$ctx), __$ctx._mode = __r81, __$ctx.elem = __r82, "", __r83);
        _$1nmix ? _$1nmix.push(_$1njsParams) : _$1nmix = [ _$1njsParams ];
        return _$1nmix;
        return;
    }
    function $365(__$ctx) {
        return undefined;
        return;
    }
    function $388(__$ctx) {
        return undefined;
        return;
    }
    function $396(__$ctx) {
        return undefined;
        return;
    }
    function $398(__$ctx) {
        if (!!__$ctx.elem === false) {
            return $400(__$ctx);
        } else {
            return $428(__$ctx);
        }
    }
    function $400(__$ctx) {
        var __r60, __r61, __r62, __r63;
        var _$z_this = __$ctx["i-global"], _$zjs = {}, _$zblock = {
            block: "i-global",
            js: _$zjs
        }, _$ze;
        for (_$ze in _$z_this) {
            if (_$z_this.hasOwnProperty(_$ze) && ("", __r60 = __$ctx._mode, __$ctx._mode = "public-params", __r61 = __$ctx.block, __$ctx.block = "i-global", __r62 = __$ctx.elem, __$ctx.elem = _$ze, __r63 = $406(__$ctx), __$ctx._mode = __r60, __$ctx.block = __r61, __$ctx.elem = __r62, "", __r63)) {
                _$zjs[_$ze] = _$z_this[_$ze];
            } else {
                undefined;
            }
        }
        return _$zblock;
        return;
    }
    function $406(__$ctx) {
        if (!__$ctx.elem === false) {
            return {
                id: 1,
                lang: 1,
                tld: 1,
                "content-region": 1,
                "user-region": 1,
                login: 1,
                displayName: 1,
                index: 1,
                yandexuid: 1,
                "passport-host": 1,
                "pass-host": 1,
                "passport-msg": 1,
                "static-host": 1,
                "lego-static-host": 1,
                "social-host": 1,
                clck: 1,
                "click-host": 1,
                "export-host": 1,
                "i-host": 1,
                "social-retpath": 1,
                "lego-path": 1,
                sid: 1,
                retpath: 1,
                uid: 1
            }[__$ctx.elem] || false;
            return;
        } else {
            return $428(__$ctx);
        }
    }
    function $414(__$ctx) {
        if (!!__$ctx.elem === false) {
            return {};
            return;
        } else {
            return $428(__$ctx);
        }
    }
    function $421(__$ctx) {
        if (!!__$ctx["i-global"] === false) {
            return $423(__$ctx);
        } else {
            return $428(__$ctx);
        }
    }
    function $423(__$ctx) {
        var __r53, __r54, __r55, __r56, __r57, __r58, __r59;
        var _$lps = {}, _$les = [ "lang", "tld", "content-region", "click-host", "passport-host", "pass-host", "social-host", "export-host", "login", "lego-static-host" ], _$le;
        while (_$le = _$les.shift()) {
            _$lps[_$le] = ("", __r53 = __$ctx._mode, __$ctx._mode = "default", __r54 = __$ctx.block, __$ctx.block = "i-global", __r55 = __$ctx.elem, __$ctx.elem = _$le, __r56 = $274(__$ctx), __$ctx._mode = __r53, __$ctx.block = __r54, __$ctx.elem = __r55, "", __r56);
        }
        __$ctx["i-global"] = __$ctx._.extend(_$lps, ("", __r57 = __$ctx._mode, __$ctx._mode = "env", __r58 = __$ctx.block, __$ctx.block = "i-global", __r59 = $414(__$ctx), __$ctx._mode = __r57, __$ctx.block = __r58, "", __r59));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $428(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $432(__$ctx);
                } else {
                    return $437(__$ctx);
                }
            } else {
                return $437(__$ctx);
            }
        } else {
            return $437(__$ctx);
        }
    }
    function $432(__$ctx) {
        var __r47, __r48;
        function _$6follow() {
            if (this.ctx.link === "no-follow") {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return "", __r47 = this.ctx, this.ctx = data, __r48 = $1(__$ctx), this.ctx = __r47, "", __r48;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$6follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join("");
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$6contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$6res = _$6follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$6res;
        return;
    }
    function $437(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $441(__$ctx);
                } else {
                    return $446(__$ctx);
                }
            } else {
                return $446(__$ctx);
            }
        } else {
            return $446(__$ctx);
        }
    }
    function $441(__$ctx) {
        var _$5cached;
        function _$5setProperty(obj, key, value) {
            if (key.length === 0) {
                return undefined;
            } else {
                undefined;
            }
            if (Array.isArray(value)) {
                var target = obj;
                for (var i = 0; i < value.length - 1; i++) {
                    target = target[value[i]];
                }
                value = target[value[i]];
            } else {
                undefined;
            }
            var host = obj, previous;
            for (var i = 0; i < key.length - 1; i++) {
                host = host[key[i]];
            }
            previous = host[key[i]];
            host[key[i]] = value;
            return previous;
        }
        if (_$5cached = cache.get(__$ctx.ctx.cache)) {
            var _$5oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5i = 0; _$5i < _$5cached.log.length; _$5i++) {
                if (typeof _$5cached.log[_$5i] === "string") {
                    __$ctx._buf.push(_$5cached.log[_$5i]);
                    continue;
                } else {
                    undefined;
                }
                var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                _$5reverseLog = _$5log.log.map(function(entry) {
                    return {
                        key: entry[0],
                        value: _$5setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    "";
                    var __r37 = __$ctx.ctx, __r38 = __r37.cache;
                    __r37.cache = null;
                    var __r39 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r40 = __$ctx.ctx, __r41 = __r40.link;
                    __r40.link = _$5log.link;
                    $1(__$ctx);
                    __r37.cache = __r38;
                    __$ctx._cacheLog = __r39;
                    __r40.link = __r41;
                    "";
                }
                undefined;
                _$5reverseLog.forEach(function(entry) {
                    _$5setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$5oldLinks;
            return _$5cached.res;
        } else {
            undefined;
        }
        var _$5cacheLog = [], _$5res;
        {
            "";
            var __r42 = __$ctx.ctx, __r43 = __r42.cache;
            __r42.cache = null;
            var __r44 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r45 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5cacheLog;
            var __r46 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5res = $1(__$ctx);
                var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join("");
                if (_$5tail) {
                    _$5cacheLog.push(_$5tail);
                } else {
                    undefined;
                }
            }
            __r42.cache = __r43;
            __$ctx._cachePos = __r44;
            __$ctx._cacheLog = __r45;
            __$ctx._localLog = __r46;
            "";
        }
        cache.set(__$ctx.ctx.cache, {
            log: _$5cacheLog,
            res: _$5res
        });
        return _$5res;
        return;
    }
    function $446(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "default") {
            return $448(__$ctx);
        } else if (__t === "") {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $457(__$ctx);
                    } else {
                        if (!true === false) {
                            return $460(__$ctx);
                        } else {
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $448(__$ctx) {
        var __r20, __r8, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r19, __r9, __r21, __r22, __r23, __r26, __r27, __r28, __r29, __r30, __r31;
        var _$4_this = __$ctx, _$4BEM_ = _$4_this.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ("", __r8 = __$ctx._mode, __$ctx._mode = "tag", __r9 = $98(__$ctx), __$ctx._mode = __r8, "", __r9);
        typeof _$4tag != "undefined" || (_$4tag = _$4v.tag);
        typeof _$4tag != "undefined" || (_$4tag = "div");
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if (__$ctx.block && _$4v.js !== false) {
                _$4js = ("", __r12 = __$ctx._mode, __$ctx._mode = "js", __r13 = $148(__$ctx), __$ctx._mode = __r12, "", __r13);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass(__$ctx.block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push("<", _$4tag);
            var _$4isBEM = ("", __r14 = __$ctx._mode, __$ctx._mode = "bem", __r15 = $156(__$ctx), __$ctx._mode = __r14, "", __r15);
            typeof _$4isBEM != "undefined" || (_$4isBEM = typeof _$4v.bem != "undefined" ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ("", __r16 = __$ctx._mode, __$ctx._mode = "cls", __r17 = $156(__$ctx), __$ctx._mode = __r16, "", __r17);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses(__$ctx.block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ("", __r18 = __$ctx._mode, __$ctx._mode = "mix", __r19 = $156(__$ctx), __$ctx._mode = __r18, "", __r19);
                    _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
                    if (_$4mix) {
                        var _$4visited = {};
                        function _$4visitedKey(block, elem) {
                            return (block || "") + "__" + (elem || "");
                        }
                        _$4visited[_$4visitedKey(__$ctx.block, __$ctx.elem)] = true;
                        if (!__$ctx._.isArray(_$4mix)) {
                            _$4mix = [ _$4mix ];
                        } else {
                            undefined;
                        }
                        for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                            var _$4mixItem = _$4mix[_$4i];
                            if (!_$4mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || _$4_this.block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || _$4_this.elem;
                            _$4hasItem && _$4buf.push(" ");
                            _$4BEM_.INTERNAL[_$4hasItem ? "buildClasses" : "buildModsClasses"](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : _$4_this.elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                            if (_$4mixItem.js) {
                                (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                var _$4nestedMix = ("", __r20 = __$ctx.block, __$ctx.block = _$4block, __r21 = __$ctx.elem, __$ctx.elem = _$4elem, __r22 = __$ctx._mode, __$ctx._mode = "mix", __r23 = $156(__$ctx), __$ctx.block = __r20, __$ctx.elem = __r21, __$ctx._mode = __r22, "", __r23);
                                if (_$4nestedMix) {
                                    for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                        var _$4nestedItem = _$4nestedMix[_$4j];
                                        if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                            _$4nestedItem._block = _$4block;
                                            _$4nestedItem._elem = _$4elem;
                                            _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$4cls && _$4buf.push(_$4isBEM ? " " : "", _$4cls);
                _$4addJSInitClass && _$4buf.push(" i-bem");
                _$4buf.push('"');
            } else {
                undefined;
            }
            if (_$4jsParams) {
                var _$4jsAttr = ("", __r26 = __$ctx._mode, __$ctx._mode = "jsAttr", __r27 = $156(__$ctx), __$ctx._mode = __r26, "", __r27);
                _$4buf.push(" ", _$4jsAttr || "onclick", '="return ', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ("", __r28 = __$ctx._mode, __$ctx._mode = "attrs", __r29 = $72(__$ctx), __$ctx._mode = __r28, "", __r29);
            _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
            if (_$4attrs) {
                var _$4name;
                for (_$4name in _$4attrs) {
                    if (_$4attrs[_$4name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4buf.push(" ", _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4tag)) {
            _$4buf.push("/>");
        } else {
            _$4tag && _$4buf.push(">");
            var _$4content = ("", __r30 = __$ctx._mode, __$ctx._mode = "content", __r31 = $126(__$ctx), __$ctx._mode = __r30, "", __r31);
            if (_$4content || _$4content === 0) {
                var _$4isBEM = __$ctx.block || __$ctx.elem;
                {
                    "";
                    var __r32 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r33 = __$ctx.position;
                    __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                    var __r34 = __$ctx._listLength;
                    __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                    var __r35 = __$ctx.ctx;
                    __$ctx.ctx = _$4content;
                    var __r36 = __$ctx._mode;
                    __$ctx._mode = "";
                    $156(__$ctx);
                    __$ctx._notNewList = __r32;
                    __$ctx.position = __r33;
                    __$ctx._listLength = __r34;
                    __$ctx.ctx = __r35;
                    __$ctx._mode = __r36;
                    "";
                }
                undefined;
            } else {
                undefined;
            }
            _$4tag && _$4buf.push("</", _$4tag, ">");
        }
        return;
    }
    function $457(__$ctx) {
        var _$1v = __$ctx.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = __$ctx.position, _$1prevNotNewList = __$ctx._notNewList;
        if (_$1prevNotNewList) {
            __$ctx._listLength += _$1l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$1l;
        }
        __$ctx._notNewList = true;
        while (_$1i < _$1l) {
            var _$1newCtx = _$1v[_$1i++];
            {
                "";
                var __r7 = __$ctx.ctx;
                __$ctx.ctx = _$1newCtx == null ? "" : _$1newCtx;
                $156(__$ctx);
                __$ctx.ctx = __r7;
                "";
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $460(__$ctx) {
        var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || __$ctx.block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            "";
            var __r0 = __$ctx._mode;
            __$ctx._mode = "default";
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = __$ctx.block;
            __$ctx.block = _$0vBlock || (_$0vElem ? _$0block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
            var __r4 = __$ctx.elem;
            __$ctx.elem = __$ctx.ctx.elem;
            var __r5 = __$ctx.mods;
            __$ctx.mods = (_$0vBlock ? __$ctx.ctx.mods : __$ctx.mods) || {};
            var __r6 = __$ctx.elemMods;
            __$ctx.elemMods = __$ctx.ctx.elemMods || {};
            {
                __$ctx.block || __$ctx.elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $2(__$ctx);
                undefined;
            }
            __$ctx._mode = __r0;
            __$ctx._links = __r1;
            __$ctx.block = __r2;
            __$ctx._currBlock = __r3;
            __$ctx.elem = __r4;
            __$ctx.mods = __r5;
            __$ctx.elemMods = __r6;
            "";
        }
        return;
    }
    function $e(__$ctx) {
        throw new Error(this);
        return;
    }
    !function oninit() {
        (function(global, bem_) {
            if (bem_.I18N) {
                return undefined;
            } else {
                undefined;
            }
            global.BEM = bem_;
            var i18n = bem_.I18N = function(keyset, key) {
                return key;
            };
            i18n.keyset = function() {
                return i18n;
            };
            i18n.key = function(key) {
                return key;
            };
            i18n.lang = function() {
                return undefined;
            };
        })(this, typeof BEM === "undefined" ? {} : BEM);
    }();
    !function oninit() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + "";
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(" ");
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(BEM_);
        var buildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? "" : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._mode = "";
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
            this.block = undefined;
            this.elem = undefined;
            this.mods = undefined;
            this.elemMods = undefined;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === "[object Array]";
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === "string" || t === "number" || t === "boolean";
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function() {
            var cnt = 0, id = BEM_["__id"] = +(new Date), expando = "__" + id, get = function() {
                return "uniq" + id + ++cnt;
            };
            return function(obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join("");
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(ctx) {
        return applyc(ctx || this);
    }
    function applyc(__$ctx) {
        return $1(__$ctx);
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) context = undefined;
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);